import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParisPage } from './paris';

@NgModule({
  declarations: [
    ParisPage,
  ],
  imports: [
    IonicPageModule.forChild(ParisPage),
  ],
})
export class ParisPageModule {}
