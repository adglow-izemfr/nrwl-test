import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SpinnerHttpComponent } from './components/spinner-http/spinner-http.component';
import { TrackDirective } from './directives/track.directive';
import { TruncatePipe } from './pipes/truncate.pipe';
import { CardTemplate } from './templates/card/card.template';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    RouterModule,
  ],
  declarations: [
    HeaderComponent,
    CardTemplate,
    TrackDirective,
    TruncatePipe,
    SpinnerHttpComponent,
  ],
  exports: [
    HeaderComponent,
    CardTemplate,
    TrackDirective,
    TruncatePipe,
    SpinnerHttpComponent,
  ],
})
export class UiModule {}
