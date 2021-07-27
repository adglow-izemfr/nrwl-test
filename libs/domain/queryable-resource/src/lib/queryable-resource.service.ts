import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { QueryableResource } from './models/queryable-resource';

@Injectable({
  providedIn: 'root'
})
export class QueryableResourceService {

  private readonly baseUrl = 'assets/mocked-data-json';

  constructor(private http: HttpClient) { }

  getQueryableResourceById$(queryableResourceId: string) {
    return this.http
      .get<apiQueryableResources>(`${this.baseUrl}/queryableResources.json`)
      .pipe(
        map((result) => result.data),
        map((queryableResources) => queryableResources.find(queryableResource => queryableResource.id === queryableResourceId)),
        map((queryableResource) => queryableResource || { description: '', id: '', name: '', resource: { queryUrl:'' } } as QueryableResource)
        )
  }

  getResourcesByQueryableResourceId$(queryableResourceId: string) {
    return this.getQueryableResourceById$(queryableResourceId)
      .pipe(
        map((queryableResource) => queryableResource.resource)
      )
  }

}
type apiQueryableResources = { data: QueryableResource[] };
