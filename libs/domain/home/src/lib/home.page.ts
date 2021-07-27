import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Header } from '@rsrch/ui';
import { Observable } from 'rxjs';
import { HomeService } from './home.service';
import { QueryableResource } from './models/queryable-resource';

@Component({
  templateUrl: './home.page.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {
  queryableResources$: Observable<QueryableResource[]> = this.homeSrv.getQueryableResources$();
  header: Header = {
    title: 'Where do you wanna search into?',
    subtitle: 'Wherever you choose you will be able to look for any information at its disposal',
    color: 'primary',
  }

  constructor(private homeSrv: HomeService) { }

}
