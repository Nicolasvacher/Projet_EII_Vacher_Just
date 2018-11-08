import { Component } from '@angular/core';
import { IonicPage, NavController, App } from 'ionic-angular';

import { WelcomePage } from '../welcome/welcome';
import { OptionsChangeInfoPage } from '../options-change-info/options-change-info'
/**
 * Generated class for the OptionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-options',
  templateUrl: 'options.html',
})
export class OptionsPage {

  constructor(public navCtrl: NavController, public app: App) {
  }

  changeInformation() {
    this.navCtrl.push(OptionsChangeInfoPage);
  }

  report() {
    this.navCtrl.push(WelcomePage);
  }

  confidentiality() {
    this.navCtrl.push(WelcomePage);
  }

  disconnect() {
    this.app.getRootNav().setRoot(WelcomePage);
  }

}
