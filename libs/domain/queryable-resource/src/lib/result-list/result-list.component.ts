import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Card } from '@rsrch/ui';
import { Result } from '../models/result';

@Component({
  selector: 'rsrch-result-list',
  templateUrl: './result-list.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultListComponent {
  @Input() results: Result[] = new Array(20);

  constructor() { }

  getCardFrom(result: Result): Card {
    return {

      title: result.title,
      description: result.description,
    }
  }

}
