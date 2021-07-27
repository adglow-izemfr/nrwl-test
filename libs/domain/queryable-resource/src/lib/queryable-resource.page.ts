import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Header } from '@rsrch/ui';
import { BehaviorSubject, forkJoin, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { QueryableResource } from './models/queryable-resource';
import { Resource } from './models/resource';
import { QueryableResourceService } from './queryable-resource.service';

@Component({
  templateUrl: './queryable-resource.page.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QueryableResourcePage implements OnInit {

  private header: Header = {
    color: 'primary',
    title: 'Queryable Resource',
    subtitle: 'loading...'
  };

  public header$ = new BehaviorSubject<Header>(this.header);

  public queryableResourceResources$!: Observable< {
    queryableResource: QueryableResource;
    resource: Resource;
  }>;

  constructor(private route: ActivatedRoute, private queryableResourceSrv: QueryableResourceService) {}

  ngOnInit(): void {
    const queryableResourceId = this.route.snapshot.params.id;
    this.header$.next({ ...this.header, title: queryableResourceId });

    const queryableResource$ = this.queryableResourceSrv.getQueryableResourceById$(queryableResourceId);
    const resources$ = this.queryableResourceSrv.getResourcesByQueryableResourceId$(queryableResourceId);

    this.queryableResourceResources$ = forkJoin({
      queryableResource: queryableResource$,
      resource: resources$ as Observable<Resource>,
    }).pipe(
      tap((result) => this.header$.next({
        ...this.header,
        title: result.queryableResource.name,
        subtitle: result.queryableResource.description,
      }))
    )
  }

}
