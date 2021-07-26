import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Header } from '@rsrch/ui';

@Component({
  templateUrl: './home.page.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {

  header: Header = {
    title: 'Where do you wanna search into?',
    subtitle: 'Wherever you choose you will be able to look for any information a its disposal',
    color: 'primary',
  }

  constructor() { }

}
