import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'rsrch-ui-card',
  templateUrl: './card.template.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardTemplate implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
