import { Injectable } from '@angular/core';
import { filter } from 'rxjs/operators';
import { Action } from './models/action';
import { TrackerEntry } from './models/tracker-entry';
import { Store } from './store';

@Injectable({
  providedIn: 'root'
})
export class TrackerStoreService {
  private store = new Store<TrackerEntry>({
    category: 'SYSTEM',
    event: 'TRACKER_INIT',
    label: 'Angular.Builders',
  });

  constructor() { }

  trackerEntry(entry: TrackerEntry) {
    const action: Action = {
      type: `TRACK_${entry.category}`,
      payload: entry,
    }
    this.store.dispatch(action);
  }

  selectByEvent$(event: string) {
    const byEvent = (state: TrackerEntry) => state.event === event;
    this.store.getState$().pipe(filter(byEvent));
  }

  selectAnyErrors$() {
    const byErrorCategory = (state: TrackerEntry) => state.category === 'ERROR';
    return this.store.getState$().pipe(filter(byErrorCategory));
  }

  selectActions$() {
    return this.store.getAction$();
  }
}
