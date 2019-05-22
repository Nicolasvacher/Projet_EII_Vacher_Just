import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../providers/api/user.service';

/**
 * Generated class for the OptionsChangeInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

  /**
   * Utilisation du service GameService
   * @param {NavController} navCtrl
   * @param {UserService} userService
   */

@IonicPage()
@Component({
  selector: 'page-options-change-info',
  templateUrl: 'options-change-info.html',
})
export class OptionsChangeInfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UserService) {
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
  userinfo = { username: ""};
  changeInfos(Username, Prenom, Nom) {
    //this.userService.changeUser();
    localStorage.setItem('Username', this.userinfo.username);
    console.log('Valeur de pre : ' + Username);
    console.log('Valeur de pre : ' + Prenom);
    console.log('Valeur de nom : ' + Nom);

  }
}


