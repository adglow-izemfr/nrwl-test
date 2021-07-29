import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackerStoreService } from '@rsrch/global';
import { HttpStateService } from '@rsrch/ui';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

@Injectable()
export class TrackerInterceptor implements HttpInterceptor {
  constructor(
    private tracker: TrackerStoreService,
    private httpState: HttpStateService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.httpState.updateState({
      url: request.url,
      state: 'START',
    });

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        this.tracker.trackerEntry({
          category: 'ERROR',
          event: 'HTTP',
          label: error.message,
          value: error.status,
        });
        return throwError(error);
      }),
      finalize(() => {
        this.httpState.updateState({
          url: request.url,
          state: 'END',
        });
      })
    );
  }
}
