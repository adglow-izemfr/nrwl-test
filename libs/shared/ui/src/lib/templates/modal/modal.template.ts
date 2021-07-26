import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'rsrch-ui-modal',
  templateUrl: './modal.template.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalTemplate implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
