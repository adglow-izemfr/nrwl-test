import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('@rsrch/home').then((module) => module.HomeModule),
  },
  {
    path: 'search',
    loadChildren: () =>
      import('@rsrch/search').then((module) => module.SearchModule),
  },
  {
    path: 'not-found',
    loadChildren: () =>
      import('@rsrch/not-found').then((module) => module.NotFoundModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
