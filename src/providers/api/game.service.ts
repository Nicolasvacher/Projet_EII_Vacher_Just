import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game, ApiResponse, ApiResponseUpdate } from '../../pages/favoris/shared/favoris';
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
  getGames(userId): Observable<Game[]> {

    const body = {
      "Entree": {
        'UserId': userId
      }
    }

    return this.http.post<ApiResponse>('http://localhost:49296/api/Game/Liste', body)
      .pipe(
      map((r: ApiResponse) => {
        return r.Sortie.List;
      }));
  }

  changeFavoris(gameId, isFavorite, userId) {

    const body = {
      "Entree": {
        'GameId': gameId,
        'UserId': userId,
        'Favori': isFavorite
      }
    }

    return this.http.post<ApiResponseUpdate>('http://localhost:49296/api/User/AjouterJeuFavori', body) //{ headers: { 'Content-Type': 'application/json' }}
      .pipe(
      map((res: ApiResponseUpdate) => {
        console.log("game.service.ts - changeFavoris: ", res.Messages);

        /*
        * A CHECK
        if (res.Messages && res.Messages[0] && res.Messages[0].Code != "SUCCESS") {

          *
          * On 'throw' une erreur pour ne pas accéder à la page d'accueil si non connecté
          *
        throw Error("Invalid username or password");
        }
        *
        */
        

        return res;
      }));
  }

}


