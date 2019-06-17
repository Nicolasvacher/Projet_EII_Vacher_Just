import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, LoadingController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
//import { Facebook } from '@ionic-native/facebook';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController,
    private viewCtrl: ViewController,
    public loading: LoadingController) {

  }

  isLoggedIn: boolean = false;
  users: any;

  login() {
    this.navCtrl.push(LoginPage);
  }

  signup() {
    this.navCtrl.push(SignupPage);
  }

  ionViewWillEnter() {
      
  }

}
