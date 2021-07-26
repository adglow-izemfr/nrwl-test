import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'rsrch-navbar',
  templateUrl: './navbar.widget.html',
  styleUrls: ['./navbar.widget.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarWidget {}
