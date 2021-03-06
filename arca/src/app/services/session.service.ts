import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private _isLoged = new BehaviorSubject<boolean>(false);
  private _tipoUsuario = new BehaviorSubject<string>("");
  constructor() {
    const id = localStorage.getItem("USERID");
    if (id !== null) {
      this._isLoged.next(true);
    }

    const type = localStorage.getItem("USER_TYPE");
    if (type !== null) {
      this._tipoUsuario.next(type);
    }
  }

  login(userCode: string, tipoUsuario: "associado" | "funcionario" | "admin") {
    localStorage.setItem("USERID", userCode);
    localStorage.setItem("USER_TYPE", tipoUsuario);
    this._isLoged.next(true);
  }
  dadosUsuarioLogado(userCode: string, tipoUsuario: "associado" | "funcionario" | "admin") {
    localStorage.setItem("USERID", userCode);
    localStorage.setItem("USER_TYPE", tipoUsuario);
    this._isLoged.next(true);
  }

  tentativas (numTentativas: string)
  {
    localStorage.setItem("NUM_TENTATIVAS", numTentativas);
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

  getType() {
    return localStorage.getItem("USER_TYPE");
  }

  getNumTentativas() {
    return localStorage.getItem("NUM_TENTATIVAS");
  }
}
