import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game, ApiResponse } from '../../pages/game-list/shared/game';
import { map } from 'rxjs/operators';

@Injectable()
export class GameService {

  /**
   * Lien de l'api
   * @type {string}
   *
  apiUrl = 'https://jsonplaceholder.typicode.com';

  /**
   * Service http pour appeler l'api
   * @param {HttpClient} http
   *
  constructor(public http: HttpClient) {
  }

  /**
   * Pour l'instant c'est des posts
   * Quand il y aura une api, ce sera des jeux
   * @returns {Observable<Game[]>}
   *
  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.apiUrl}/posts`);
  }

  /**
   * @todo non utilisé pour l'instant
   * Avoir les infos du jeu
   * @param {number} id
   * @returns {Observable<any>}
   *
  getGame(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/post/${id}`);
  }
  */

  apiUrl = 'https://jsonplaceholder.typicode.com';

  /**
   * Service http pour appeler l'api
   * @param {HttpClient} http
   */
  constructor(public http: HttpClient) {
  }

  /**
   * Pour l'instant c'est des posts
   * Quand il y aura une api, ce sera des jeux
   * @returns {Observable<Game[]>}
   */
  getGames(): Observable<Game[]> {

    const body = {
      "Entree": {
        Limite: 0
      }
    }

    return this.http.post<ApiResponse>('http://localhost:49296/api/Game/Liste', body)
      .pipe(
      map((r: ApiResponse) => {
        return r.Sortie.List;
      }));
  }

  /**
   * @todo non utilisé pour l'instant
   * Avoir les infos du jeu
   * @param {number} id
   * @returns {Observable<any>}
   */
  getGame(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/post/${id}`);
  }

}


