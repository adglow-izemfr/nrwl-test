import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, first, map } from 'rxjs/operators';
import { QueryableResource } from './models/queryable-resource';
import { Result } from './models/result';

@Injectable({
  providedIn: 'root',
})
export class QueryableResourceService {
  private readonly baseUrl = 'assets/mocked-data-json';

  private _results: BehaviorSubject<Result[]> = new BehaviorSubject<Result[]>(
    []
  );
  results$: Observable<Result[]> = this._results
    .asObservable()
    .pipe(distinctUntilChanged());

  constructor(private http: HttpClient) {}

  getQueryableResourceById$(queryableResourceId: string) {
    return this.http
      .get<apiQueryableResources>(`${this.baseUrl}/queryableResources.json`)
      .pipe(
        map((result) => result.data),
        map((queryableResources) =>
          queryableResources.find(
            (queryableResource) => queryableResource.id === queryableResourceId
          )
        ),
        map(
          (queryableResource) =>
            queryableResource ||
            ({
              description: '',
              id: '',
              name: '',
              resource: { queryUrl: '' },
            } as QueryableResource)
        )
      );
  }

  getResourcesByQueryableResourceId$(queryableResourceId: string) {
    return this.getQueryableResourceById$(queryableResourceId).pipe(
      map((queryableResource) => queryableResource.resource)
    );
  }

  getQueryResults(
    resourceId: resourceIds,
    queryUrl: string,
    searchParams: { [key: string]: string }
  ) {
    searchParams.q?.length > 2
      ? this.http
          .get(this.buildExternalAPIUrl(resourceId, queryUrl, searchParams))
          .pipe(first())
          .subscribe((externalAPIData) => {
            this._results.next(
              this.parseExternalAPI2Results(externalAPIData, resourceId)
            );
          })
      : this._results.next([]);
  }

  private buildExternalAPIUrl(
    resourceId: resourceIds,
    queryUrl: string,
    searchParams: { [key: string]: string }
  ) {
    let parsedSearchParams: { [key: string]: string | null };
    switch (resourceId) {
      case 'github':
        parsedSearchParams = this.parseGitHubAPIUrlParams(searchParams);
        break;
      case 'npmjs':
        parsedSearchParams = this.parseSNpmJSAPIUrlParams(searchParams);
        break;
      case 'stackoverflow':
        parsedSearchParams = this.parseStackOAPIUrlParams(searchParams);
        break;
      default:
        console.error(`${resourceId} is not a valid resource to be parsed`);
        return '';
    }

    const urlSearchParams = new URLSearchParams();
    Object.entries(parsedSearchParams)
      .filter(([, value]) => value)
      .forEach(([key, value]) => urlSearchParams.append(key, value || ''));

    return `${new URL(queryUrl).href}?${urlSearchParams.toString()}`;
  }

  private parseGitHubAPIUrlParams(searchParams: { [key: string]: string }) {
    return {
      q: searchParams.q,
    };
  }

  private parseSNpmJSAPIUrlParams(searchParams: { [key: string]: string }) {
    return {
      text: searchParams.q,
    };
  }

  private parseStackOAPIUrlParams(searchParams: { [key: string]: string }) {
    return {
      q: searchParams.q,
      fromdate: this.date2UnixTimestamp(searchParams.fromDate),
      todate: this.date2UnixTimestamp(searchParams.toDate, false),
      site: 'stackoverflow',
      answers: '1',
      sort: searchParams.sort,
      order: searchParams.order,
    };
  }

  private parseExternalAPI2Results(
    externalAPIData: unknown,
    resourceId: resourceIds
  ): Result[] {
    switch (resourceId) {
      case 'github':
        return this.parseGitHub2Results(externalAPIData as gitHubAPI);
      case 'npmjs':
        return this.parseNpmJS2Results(externalAPIData as npmJSAPI);
      case 'stackoverflow':
        return this.parseStackO2Results(externalAPIData as stackOverflowAPI);
      default:
        console.error(`${resourceId} is not a valid resource to be parsed`);
        return [];
    }
  }

  private parseGitHub2Results(apiData: gitHubAPI): Result[] {
    return apiData.items
      .map(
        (item) =>
          ({
            title: item.name,
            description: item.description,
            avatarImagePath: item.owner.avatar_url,
            link: item.html_url,
          } as Result)
      )
      .sort((a, b) => a.title.localeCompare(b.title));
  }

  private parseNpmJS2Results(apiData: npmJSAPI): Result[] {
    console.log(apiData);
    return apiData.objects
      .map(
        (object) =>
          ({
            title: `${object.package.name}`,
            description: `${
              object.package?.author?.name
                ? `by ${object.package.author.name}\n`
                : ''
            }
      ${
        object.package?.publisher?.username
          ? `published by ${object.package.publisher.username}\n`
          : ''
      }
      ·  ${object.package.description}`,
            link: object.package.links.npm,
          } as Result)
      )
      .sort((a, b) => a.title.localeCompare(b.title));
  }

  private parseStackO2Results(apiData: stackOverflowAPI): Result[] {
    return apiData.items.map(
      (item) =>
        ({
          title: this.decodeHTMLEntities(item.title),
          description: `·  Creation date: ${new Date(
            item.creation_date * 1000
          ).toLocaleString('en-US')}\n
          ·  Last activity date: ${new Date(
            item.last_activity_date * 1000
          ).toLocaleString()}\n
          ·  Answers: ${item.answer_count}\n
          ·  Score: ${item.score}`,
          link: item.link,
        } as Result)
    );
  }

  private date2UnixTimestamp(
    dateValue: string | undefined,
    beginDay: boolean = true
  ): string | null {
    if (!dateValue) return null;

    const date = new Date(dateValue);
    beginDay ? date.setUTCHours(0, 0, 0, 0) : date.setUTCHours(23, 59, 59, 0);

    return (date.getTime() / 1000).toString();
  }

  private decodeHTMLEntities(text: string) {
    const textArea = document.createElement('textarea');
    textArea.innerHTML = text;
    return textArea.value;
  }
}
type apiQueryableResources = { data: QueryableResource[] };
export type resourceIds = 'github' | 'npmjs' | 'stackoverflow';
type gitHubAPI = {
  items: [
    {
      name: string;
      owner: { avatar_url: string };
      html_url: string;
      description: string;
    }
  ];
};
type npmJSAPI = {
  objects: [
    {
      package: {
        author: { name: string };
        description: string;
        links: { npm: string };
        name: string;
        publisher: { username: string };
      };
    }
  ];
};
type stackOverflowAPI = {
  items: [
    {
      answer_count: number;
      creation_date: number;
      last_activity_date: number;
      link: string;
      title: string;
      score: number;
    }
  ];
};
