import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

import { UserService } from '../../providers/api/user.service';
import { HttpErrorResponse } from '@angular/common/http';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {
    pseudo: "",
    password: ""
  };

  constructor(public navCtrl: NavController,
    public userService: UserService) {
  }

  connect() {
    this.userService.makeLogin(this.user.pseudo, this.user.password)
      .subscribe(data => {
      console.log('Connexion reussi');
      console.log(data);
      //this.navCtrl.push(TabsPage);
      }, (err: HttpErrorResponse) => {
        // Quand l'api répond mal
        console.error(err);
      });
  }

}
