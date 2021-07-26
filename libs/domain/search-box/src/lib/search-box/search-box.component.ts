import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'rsrch-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBoxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
