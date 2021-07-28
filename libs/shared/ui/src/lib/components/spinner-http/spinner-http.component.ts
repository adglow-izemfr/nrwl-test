import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { httpState } from '../../models/http-state';
import { HttpStateService } from '../../services/http-state.service';

@Component({
  selector: 'rsrch-ui-spinner-http',
  templateUrl: './spinner-http.component.html',
  styleUrls: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpinnerHttpComponent implements OnInit, OnDestroy {
  loading = false;
  @Input()
  filterBy: string | null = null;

  private readonly subscriptions$: Subscription = new Subscription();

  constructor(private readonly _httpStateSrv: HttpStateService) {}

  ngOnInit(): void {
    this.subscriptions$.add(
      this._httpStateSrv.state$.subscribe((progress: httpState) => {
        if (progress?.url) {
          if (!this.filterBy) {
            this.loading = 'START' === progress.state ? true : false;
          } else if (progress.url.includes(this.filterBy)) {
            this.loading = 'START' === progress.state ? true : false;
          }
        }
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }
}
