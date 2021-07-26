import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'rsrch-ui-message',
  templateUrl: './message.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
