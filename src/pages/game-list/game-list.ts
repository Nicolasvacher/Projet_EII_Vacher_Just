import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { GameService } from '../../providers/api/game.service';
import { Game } from './shared/game';
import { HttpErrorResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';

@IonicPage()
@Component({
  selector: 'app-game-list',
  templateUrl: 'game-list.html',
})
export class GameListPage {

  // Le tableau des jeux à vide au départ
  games: Game[] = [];

  /**
   * Utilisation du service GameService
   * @param {NavController} navCtrl
   * @param {GameService} gameService
   */
  constructor(public navCtrl: NavController,
    public gameService: GameService,
    private http: HttpClient) {
    // Quand la page se lance, on déclenche la récupération des jeux
    this.getGames();
  }

  /**
   * Cherche tous les jeux de l'api
   */
  getGames() {
    // Appel du service game pour récupérer les jeux de l'api
    this.gameService.getGames()
      // On souscris à la réponse asynchrone
      .subscribe((games: Game[]) => {
        // En cas de réponse succès : on a un tableau de jeux cf. interface Game
        this.games = games;
      }, (err: HttpErrorResponse) => {
        // Quand l'api répond mal
        console.error(err.error.message);
      });
  }

  sendPostRequest() {
    
    //let body = new FormData();
    //body.append("Limite", "0");


    let body = {
      "Entree": {
        Limite: 0
      }
    }

    /*
    let myheaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    */

    this.http
      .post('http://localhost:49296/api/Game/Liste', body /*, { headers: myheaders }*/)
      .subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log("ERROR!: ", err);
      }
      );
  }

  /**
   * Pemettra d'aller sur la page de détail du jeu
   * html : (click)="goToGameDetail(game.id)"
   * Ts: Faire la nouvelle page GameDetailPage
   *
   * @param {number} id
   * @constructor
   */
  // gotoGameDetail(id: number) {
  //   this.navCtrl.push(GameDetailPage());
  // }
}
