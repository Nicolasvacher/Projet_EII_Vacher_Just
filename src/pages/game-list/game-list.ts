import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { GameService } from '../../providers/api/game.service';
import { TournamentService } from '../../providers/api/tournament.service';
import { Tournament, Game } from '../favoris/shared/favoris';
import { FavorisPage } from '../favoris/favoris';
import { HttpErrorResponse } from '@angular/common/http';


import { TournamentInfoPage } from '../tournament-info/tournament-info'

@IonicPage()
@Component({
  selector: 'app-game-list',
  templateUrl: 'game-list.html',
})
export class GameListPage {

  tournaments: Tournament[] = [];
  games: Game[] = [];

  constructor(public navCtrl: NavController,
    public tournamentService: TournamentService, public gameService: GameService) {
    // Quand la page se lance, on déclenche la récupération des tournois
    //this.getTournament();
  }

  tournamentInfo(event, tournament) {
    this.navCtrl.push(TournamentInfoPage,{tournament: tournament});
  }

  /**
   * Cherche tous les jeux de l'api
   */
  getTournament() {

    // Appel du service game pour récupérer les tournois de l'api
    this.tournamentService.getTournament(localStorage.getItem('UserID'))
      // On souscris à la réponse asynchrone
      .subscribe((tournaments: Tournament[]) => {
        // En cas de réponse succès : on a un tableau de tournoi cf. interface Game
        this.tournaments = tournaments;

        console.log("gamelist.ts", tournaments);

        //pour chaque id jeu, on appel getGameById
        for (let id = 0; id < this.tournaments.length; id++) {
          //appel de getGameById
          this.getGameById(this.tournaments[id].GameId);
          console.log("gamelist.ts", this.tournaments[id].GameId)
        }
        

      }, (err: HttpErrorResponse) => {
        // Quand l'api répond mal
        console.error("favoris.ts", err.error.message);
      });
  }

  getGameById(gameId) {
    this.tournamentService.getGameById(gameId)
      // On souscris à la réponse asynchrone
      .subscribe((games: Game[]) => {
        // En cas de réponse succès : on a un tableau de jeux cf. interface Game
        this.games = games;

        console.log("game-list.ts", games);

      }, (err: HttpErrorResponse) => {
        // Quand l'api répond mal
        console.error("game-list.ts", err.error.message);
      });
  }

  ionViewDidEnter() { //Se charge à chaque fois qu'on rentre sur la page
    this.getTournament(); //Appel à la fonction getTournament au dessus
  }

  

}
