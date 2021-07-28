import { ErrorHandler, Injectable } from '@angular/core';
import { TrackerStoreService } from './tracker-store.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {

  constructor(private tracker: TrackerStoreService) {}

  handleError(error: Error): void {
    if (!!error.name && error.name === 'HttpErrorResponse') return;
    this.tracker.trackerEntry({
      category: 'ERROR',
      event: 'CODE_FAULT',
      label: error.message + '@' + error.stack || 'unknown',
    });
  }
}
