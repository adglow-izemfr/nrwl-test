import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Card } from '../../models/card';

@Component({
  selector: 'rsrch-ui-card',
  templateUrl: './card.template.html',
  styleUrls: ['./card.template.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardTemplate {
  @Input() card: Card = { title: '', description: '' };
}
