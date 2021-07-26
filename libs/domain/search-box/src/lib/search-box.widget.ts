import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'rsrch-search-box',
  templateUrl: './search-box.widget.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBoxWidget implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
