import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { FormModule } from '@rsrch/form';
import { UiModule } from '@rsrch/ui';
import { QueryableResourcePage } from './queryable-resource.page';
import { ResultListComponent } from './result-list/result-list.component';

@NgModule({
  imports: [
    CommonModule,
    FlexModule,
    FormModule,
    RouterModule.forChild([
      {path: ':id', pathMatch: 'full', component: QueryableResourcePage}
    ]),
    UiModule
  ],
  declarations: [
    QueryableResourcePage,
    ResultListComponent
  ],
})
export class QueryableResourceModule {}
