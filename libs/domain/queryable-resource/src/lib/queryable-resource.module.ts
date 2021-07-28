import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { FormModule } from '@rsrch/form';
import { UiModule } from '@rsrch/ui';
import { QueryableResourcePage } from './queryable-resource.page';
import { RequestInformationComponent } from './request-information/request-information.component';
import { ResultListComponent } from './result-list/result-list.component';

@NgModule({
  imports: [
    CommonModule,
    FlexModule,
    FormModule,
    MatToolbarModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: ':id', pathMatch: 'full', component: QueryableResourcePage}
    ]),
    UiModule
  ],
  declarations: [
    QueryableResourcePage,
    ResultListComponent,
    RequestInformationComponent
  ],
})
export class QueryableResourceModule {}
