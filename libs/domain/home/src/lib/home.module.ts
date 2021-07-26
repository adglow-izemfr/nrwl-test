import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiModule } from '@rsrch/ui';
import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: HomePage}
    ]),
    UiModule,
  ],
  declarations: [
    HomePage,
  ],
})
export class HomeModule {}
