import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';

const notFoundRoute: Route = {
  path: '**',
  redirectTo: 'not-found',
};

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@rsrch/home').then((module) => module.HomeModule),
  },
  {
    path: 'search',
    loadChildren: () =>
      import('@rsrch/search').then((module) => module.SearchModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot([
      ...routes,
      notFoundRoute,
      {
        path: 'queryable-resource',
        loadChildren: () =>
          import('@rsrch/queryable-resource').then(
            (module) => module.QueryableResourceModule
          ),
      },
    ]),
  ],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
