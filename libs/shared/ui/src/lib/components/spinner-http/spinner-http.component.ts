import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { httpState } from '../../models/http-state';
import { HttpStateService } from '../../services/http-state.service';

@Component({
  selector: 'rsrch-ui-spinner-http',
  templateUrl: './spinner-http.component.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerHttpComponent implements OnInit, OnDestroy {
  loading = false;

  private readonly subscriptions$: Subscription = new Subscription();

  constructor(
    private readonly _httpStateSrv: HttpStateService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.subscriptions$.add(
      this._httpStateSrv.state$.subscribe((progress: httpState) => {
        if (progress?.url) {
          this.loading = 'START' === progress.state ? true : false;
        }
        this.cdr.markForCheck();
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }
}
