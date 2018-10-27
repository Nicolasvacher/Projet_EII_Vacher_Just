import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GameListPage } from './game-list';
import { GameService } from '../../providers/api/game.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    GameListPage,
    HttpClientModule
  ],
  imports: [
    IonicPageModule.forChild(GameListPage),
  ],
  providers: [
    GameService
  ]
})
export class GameListModule {
}
