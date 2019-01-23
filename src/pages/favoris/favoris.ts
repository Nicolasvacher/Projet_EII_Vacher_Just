import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GameService } from '../../providers/api/game.service';
import { Game } from './shared/favoris';
import { HttpErrorResponse } from '@angular/common/http';

/**
 * Generated class for the FavorisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favoris',
  templateUrl: 'favoris.html',
})
export class FavorisPage {

  // Le tableau des jeux à vide au départ
  games: Game[] = [];

  /**
   * Utilisation du service GameService
   * @param {NavController} navCtrl
   * @param {GameService} gameService
   */
  constructor(public navCtrl: NavController,
    public gameService: GameService) {
    // Quand la page se lance, on déclenche la récupération des jeux
    this.getGames();
  }
  /**
   * Cherche tous les jeux de l'api
   */


  getGames() {

    // Appel du service game pour récupérer les jeux de l'api
    this.gameService.getGames(localStorage.getItem('UserID'))
      // On souscris à la réponse asynchrone
      .subscribe((games: Game[]) => {
        // En cas de réponse succès : on a un tableau de jeux cf. interface Game
        this.games = games;

        console.log("favoris.ts", games);

      }, (err: HttpErrorResponse) => {
        // Quand l'api répond mal
        console.error("favoris.ts", err.error.message);
      });
  }

  changeFavoris(game) {

    game.Favori = !game.Favori;

    this.gameService.changeFavoris(game.Id, game.Favori, localStorage.getItem('UserID'))
      // On souscris à la réponse asynchrone
      .subscribe((data) => {
        // En cas de réponse succès : on a un tableau de jeux cf. interface Game
        console.log("favoris.ts - New fav", game.Favori);
        console.log("favoris.ts - test", data);

      }, (err: HttpErrorResponse) => {
        // Quand l'api répond mal
        console.error("favoris.ts", err.error.message);
      });

    console.log("favoris.ts - Game ID:", game.Id);
    console.log("favoris.ts - isFavoris:", game.Favori);
  }

}
