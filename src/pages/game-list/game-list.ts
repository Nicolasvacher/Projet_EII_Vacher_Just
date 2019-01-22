import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { GameService } from '../../providers/api/game.service';

@IonicPage()
@Component({
  selector: 'app-game-list',
  templateUrl: 'game-list.html',
})
export class GameListPage {

  
  constructor(public navCtrl: NavController,
    public gameService: GameService) {
  }
  

}
