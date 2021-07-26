import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'rsrch-ui-box',
  templateUrl: './box.template.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoxTemplate implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
