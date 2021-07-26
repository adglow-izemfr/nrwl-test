import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'rsrch-resource-list',
  templateUrl: './resource-list.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResourceListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
