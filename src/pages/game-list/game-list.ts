import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { GameService } from '../../providers/api/game.service';
import { TournamentService } from '../../providers/api/tournament.service';
import { Tournament } from '../favoris/shared/favoris';
import { HttpErrorResponse } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'app-game-list',
  templateUrl: 'game-list.html',
})
export class GameListPage {

  tournaments: Tournament[] = [];
  constructor(public navCtrl: NavController,
    public tournamentService: TournamentService) {
    // Quand la page se lance, on déclenche la récupération des jeux
    this.getTournament();
  }
  /**
   * Cherche tous les jeux de l'api
   */
  getTournament() {

    // Appel du service game pour récupérer les jeux de l'api
    this.tournamentService.getTournament(localStorage.getItem('UserID'))
      // On souscris à la réponse asynchrone
      .subscribe((tournaments: Tournament[]) => {
        // En cas de réponse succès : on a un tableau de jeux cf. interface Game
        this.tournaments = tournaments;

        console.log("gamelist.ts", tournaments);

      }, (err: HttpErrorResponse) => {
        // Quand l'api répond mal
        console.error("favoris.ts", err.error.message);
      });
  }

  ionViewDidEnter() { //Se charge à chaque fois qu'on rentre sur la page
    this.getTournament(); //Appel à la fonction getTournament au dessus
  }

  

}
