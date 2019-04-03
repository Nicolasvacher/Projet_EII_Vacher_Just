import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponseTournament } from '../../pages/favoris/shared/favoris';
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
}
