import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NotificationComponent } from './components/notification/notification.component';
import { SpinnerHttpComponent } from './components/spinner-http/spinner-http.component';
import { TrackDirective } from './directives/track.directive';
import { TruncatePipe } from './pipes/truncate.pipe';
import { BoxTemplate } from './templates/box/box.template';
import { CardTemplate } from './templates/card/card.template';
import { ModalTemplate } from './templates/modal/modal.template';
import { PageTemplate } from './templates/page/page.template';
import { PanelTemplate } from './templates/panel/panel.template';
import { SectionTemplate } from './templates/section/section.template';

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
    NotificationComponent,
    BoxTemplate,
    CardTemplate,
    ModalTemplate,
    PageTemplate,
    PanelTemplate,
    SectionTemplate,
    TrackDirective,
    TruncatePipe,
    SpinnerHttpComponent,
  ],
  exports: [
    HeaderComponent,
    NotificationComponent,
    BoxTemplate,
    CardTemplate,
    ModalTemplate,
    PageTemplate,
    PanelTemplate,
    SectionTemplate,
    TrackDirective,
    TruncatePipe,
    SpinnerHttpComponent,
  ],
})
export class UiModule {}
