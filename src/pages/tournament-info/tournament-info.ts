import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Match } from '../favoris/shared/favoris';
import { HttpErrorResponse } from '@angular/common/http';


import { TournamentService } from '../../providers/api/tournament.service';

/**
 * Generated class for the TournamentInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tournament-info',
  templateUrl: 'tournament-info.html',
})
export class TournamentInfoPage {

  tournament: any;
  matches: Match[] = []

  constructor(public navCtrl: NavController, public navParams: NavParams, public tournamentService: TournamentService) {
    this.tournament = navParams.get('tournament');
    this.getMatch();
  }

  getMatch() {

    console.log("tournament-info.ts", this.tournament.Id);
    // Appel du service game pour récupérer les jeux de l'api
    this.tournamentService.getMatch(this.tournament.Id)
    
      // On souscris à la réponse asynchrone
      .subscribe((match: Match[]) => {
        // En cas de réponse succès : on a un tableau de jeux cf. interface Game
        this.matches = match;

        console.log("tournament-info.ts", match);

        /*
        for (let id = 0; id < this.tournaments.length; id++) {
          this.getGameById(this.tournaments[id].GameId);
          console.log("gamelist.ts", this.tournaments[id].GameId)
        }
        */

      }, (err: HttpErrorResponse) => {
        // Quand l'api répond mal
        console.error("favoris.ts", err.error.message);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TournamentInfoPage');
  }

}
