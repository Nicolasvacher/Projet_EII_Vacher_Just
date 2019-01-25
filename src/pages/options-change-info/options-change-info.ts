import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OptionsChangeInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-options-change-info',
  templateUrl: 'options-change-info.html',
})
export class OptionsChangeInfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  Username: string;
  Prenom: string;
  Nom: string;

  ionViewDidLoad() {
    this.Username = localStorage.getItem('Username');
    this.Prenom = localStorage.getItem('Prénom');
    this.Nom = localStorage.getItem('Nom');
    console.log('Valeur de username : ' + this.Username);
  }
}
