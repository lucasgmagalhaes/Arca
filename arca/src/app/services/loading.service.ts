import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private _isLoading = new BehaviorSubject<boolean>(false);
  constructor() { }

  exibir() {
    this._isLoading.next(true);
  }

  esconder() {
    this._isLoading.next(false);
  }

  isLoading() {
    return this._isLoading.asObservable();
  }
}
