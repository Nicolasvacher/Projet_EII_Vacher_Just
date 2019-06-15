import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TournamentInfoPage } from './tournament-info';

@NgModule({
  declarations: [
    TournamentInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(TournamentInfoPage),
  ],
})
export class TournamentInfoPageModule {}
