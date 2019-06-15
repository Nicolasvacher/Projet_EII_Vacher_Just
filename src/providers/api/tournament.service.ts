import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponseTournament, ApiResponse, ApiResponseMatches, ApiResponseGameById } from '../../pages/favoris/shared/favoris';
import { map } from 'rxjs/operators';

/*
  Generated class for the TournamentService provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TournamentService {

  constructor(public http: HttpClient) {
    console.log('Hello TournamentService Provider');
  }
  
  getTournament(userId){

    const body = {
      "Entree": {
        'UserId': userId
      }
    }

    return this.http.post<ApiResponseTournament>('http://localhost:49296/api/Tournament/ListeTFavori', body)
      .pipe(
        map((r: ApiResponseTournament) => {
          //return r.Sortie.List;
          return r.Sortie;
        }));
  }


  getMatch(tournamentId) {

    const body = {
      "Entree": {
        'TournamentId': tournamentId
      }
    }

    return this.http.post<ApiResponseMatches>('http://localhost:49296/api/Tournament/ListeMatch', body)
      .pipe(
      map((r: ApiResponseMatches) => {
        //return r.Sortie.List;
        return r.Sortie;
      }));
  }

  
  getGameById(gameId) {

    const body = {
      "Entree": {
        'Id': gameId,
        'Admin': true
      }
    }

    return this.http.post<ApiResponseGameById>('http://localhost:49296/api/Game/Obtenir', body)
      .pipe(
      map((r: ApiResponseGameById) => {
        //return r.Sortie.List;
        console.log('getgamebyid',r.Sortie);
        return r.Sortie;
        
      }));
  }

}
