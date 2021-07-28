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
    path: 'queryable-resource',
    loadChildren: () =>
      import('@rsrch/queryable-resource').then(
        (module) => module.QueryableResourceModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot([
      ...routes,
      notFoundRoute,
    ]),
  ],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
