import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn :boolean = false;
  redirectUrl: string;

  login(name: string, password: string ): Observable<boolean>{
    const isCredentialsValid = (name == 'Pikachu' && password == 's962iSeBqNQ8k3');
    return of(isCredentialsValid).pipe(
      delay(1000), //delay pour simuler la requête serveur
      tap(isCredentialsValid => this.isLoggedIn = isCredentialsValid)
     )
  };


  logout(){
    this.isLoggedIn = false;
  };
}
