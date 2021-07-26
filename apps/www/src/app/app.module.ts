import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@rsrch/layout';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserAnimationsModule, BrowserModule, CoreModule, LayoutModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
