import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Card } from '../../models/card';

@Component({
  selector: 'rsrch-ui-card',
  templateUrl: './card.template.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardTemplate {
  @Input() card: Card = { title: '', description: '' };
}
