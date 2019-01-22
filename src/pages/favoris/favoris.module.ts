import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavorisPage } from './favoris';
import { GameService } from '../../providers/api/game.service';

@NgModule({
  declarations: [
    FavorisPage,
  ],
  imports: [
    IonicPageModule.forChild(FavorisPage),
  ],
  providers: [
    GameService
  ]
})
export class FavorisPageModule {}
