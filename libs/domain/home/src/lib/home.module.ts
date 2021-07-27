import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { UiModule } from '@rsrch/ui';
import { HomePage } from './home.page';
import { QueryableResourceList } from './queryable-resource-list/queryable-resource-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: HomePage}
    ]),
    UiModule,
    FlexLayoutModule,
  ],
  declarations: [
    HomePage,
    QueryableResourceList,
  ]
})
export class HomeModule {}
