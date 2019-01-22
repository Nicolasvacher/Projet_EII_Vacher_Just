import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiResponseLogin } from '../../pages/login/shared/user';

@Injectable()
export class UserService {

  /**
   * Url de l'api des utilisateurs
   * @type {string}
   */
  constructor(public http: HttpClient) {
  }

  /**
   * Tous les utilisateurs
   * @returns {Observable<User[]>}
   */
  makeLogin(pseudo, password){

    const body = {
      'Password': password,
      'Pseudo' : pseudo
    }

    /*
    const body = {
      'Password': "123456789",
      'Pseudo' : "Soows"
    }
    */

    return this.http.post<ApiResponseLogin>('http://localhost:49296/api/MobileApp/ObtenirUtilisateur', body) //{ headers: { 'Content-Type': 'application/json' }}
      .pipe(
      map((res: ApiResponseLogin) => {
        console.log(res.Messages);
        if (res.Messages && res.Messages[0] && res.Messages[0].Code != "SUCCESS") {
          throw Error("Invalid password or username");
        }
        
        return res;
      }));

  }
}


