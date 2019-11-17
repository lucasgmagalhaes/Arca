import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private _isLoged = new BehaviorSubject<boolean>(false);
  private _tipoUsuario = new BehaviorSubject<string>("");
  constructor() { }

  login(userCode: string) {
    localStorage.setItem("USERID", userCode);
    this._isLoged.next(true);
  }

  logout() {
    localStorage.removeItem("USERID");
    this._isLoged.next(false);
  }

  isLogged() {
    return this._isLoged.asObservable();
  }

  getUserType() {
    return this._tipoUsuario.asObservable();
  }

  getUserId() {
    return +localStorage.getItem("USERID");
  }
}
