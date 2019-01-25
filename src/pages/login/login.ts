import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';

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
    public userService: UserService,
    public loading: LoadingController) {

  }

  connect() {

    /*
    * Création du loader
    */
    let loader = this.loading.create({
      spinner: 'bubbles',
      content: 'Veuillez patienter ...',
    });

    /* Afficher le loader */
    loader.present();

    this.userService.makeLogin(this.user.pseudo, this.user.password)
      .subscribe(data => {
        console.log('login.ts - Connexion reussie');
        console.log("login.ts - ", data);

        /*
        * Ajout des infos retournées par l'api dans le stockage
        */
        localStorage.setItem('UserID', data.Sortie.Id);

        this.navCtrl.setRoot(TabsPage);

        /*
        * Récupérer l'id user stocké
        */
        var val = localStorage.getItem('UserID');
        console.log('login.ts - Your id is', val);

      }, (err: HttpErrorResponse) => {
        // Quand l'api répond mal
        console.error(err);
      });

    /* Supprimer le loader */
    loader.dismiss();
  }

}
