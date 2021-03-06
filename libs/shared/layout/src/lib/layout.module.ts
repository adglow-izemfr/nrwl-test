import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { NavbarWidget } from './navbar/navbar.widget';

@NgModule({
  imports: [CommonModule, FlexLayoutModule, MatToolbarModule, RouterModule],
  declarations: [NavbarWidget],
  exports: [NavbarWidget],
})
export class LayoutModule {}
