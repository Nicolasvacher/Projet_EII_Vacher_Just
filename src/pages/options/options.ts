import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { WelcomePage } from '../welcome/welcome';
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

  constructor(public navCtrl: NavController) {
  }

  changeInformation() {
    this.navCtrl.push(WelcomePage);
  }

  report() {
    this.navCtrl.push(WelcomePage);
  }

  confidentiality() {
    this.navCtrl.push(WelcomePage);
  }

  disconnect() {
    this.navCtrl.push(WelcomePage);
  }

}
