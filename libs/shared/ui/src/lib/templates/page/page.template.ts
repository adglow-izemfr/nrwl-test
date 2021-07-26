import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'rsrch-ui-page',
  templateUrl: './page.template.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageTemplate implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
