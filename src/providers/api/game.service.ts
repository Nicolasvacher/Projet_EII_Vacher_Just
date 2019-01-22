import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game, ApiResponse } from '../../pages/favoris/shared/favoris';
import { map } from 'rxjs/operators';

@Injectable()
export class GameService {
  
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
        Limite: 0,
        Admin: true
      }
    }

    return this.http.post<ApiResponse>('http://localhost:49296/api/Game/Liste', body)
      .pipe(
      map((r: ApiResponse) => {
        return r.Sortie.List;
      }));
  }

}


