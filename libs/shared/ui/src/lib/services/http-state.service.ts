import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { httpState } from '../models/http-state';

@Injectable({
  providedIn: 'root'
})
export class HttpStateService {
  private _state = new BehaviorSubject<httpState>({} as httpState);
  public state$: Observable<httpState> = this._state.asObservable();

  constructor() {}

  updateState(httpState: httpState): void {
    this._state.next(httpState);
  }
}
