import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { MessageComponent } from './components/message/message.component';
import { NotificationComponent } from './components/notification/notification.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { BoxTemplate } from './templates/box/box.template';
import { CardTemplate } from './templates/card/card.template';
import { ModalTemplate } from './templates/modal/modal.template';
import { PageTemplate } from './templates/page/page.template';
import { PanelTemplate } from './templates/panel/panel.template';
import { SectionTemplate } from './templates/section/section.template';
import { TrackDirective } from './directives/track.directive';
import { TruncatePipe } from './pipes/truncate.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [
    BreadcrumbComponent,
    HeaderComponent,
    MenuComponent,
    MessageComponent,
    NotificationComponent,
    TabsComponent,
    BoxTemplate,
    CardTemplate,
    ModalTemplate,
    PageTemplate,
    PanelTemplate,
    SectionTemplate,
    TrackDirective,
    TruncatePipe
  ],
  exports: [
    BreadcrumbComponent,
    HeaderComponent,
    MenuComponent,
    MessageComponent,
    NotificationComponent,
    TabsComponent,
    BoxTemplate,
    CardTemplate,
    ModalTemplate,
    PageTemplate,
    PanelTemplate,
    SectionTemplate,
    TrackDirective,
    TruncatePipe
  ],
})
export class UiModule {}
