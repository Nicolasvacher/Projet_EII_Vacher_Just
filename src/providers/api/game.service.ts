import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../../pages/game-list/shared/game';

@Injectable()
export class GameService {

  /**
   * Lien de l'api
   * @type {string}
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
    return this.http.get<Game[]>(`${this.apiUrl}/posts`);
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


