import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../pages/user/shared/user';

@Injectable()
export class UserService {

  /**
   * Url de l'api des utilisateurs
   * @type {string}
   */
  apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(public http: HttpClient) {
  }

  /**
   * Tous les utilisateurs
   * @returns {Observable<User[]>}
   */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }
}


