import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiResponseLogin } from '../../pages/login/shared/user';
import { ToastController } from 'ionic-angular';

@Injectable()
export class UserService {

  /**
   * Url de l'api des utilisateurs
   * @type {string}
   */
  constructor(public http: HttpClient,
    private toastCtrl: ToastController) {
  }

  /**
   * Tous les utilisateurs
   * @returns {Observable<User[]>}
   */

  changeUser(username,nom,prenom) {

  }

  makeLogin(pseudo, password){

    const body = {
      'Password': password,
      'Pseudo' : pseudo
    }

    /*
    const body = {
      'Password': "123456789",
      'Pseudo' : "Soows"
    }
    */

    return this.http.post<ApiResponseLogin>('http://localhost:49296/api/MobileApp/ObtenirUtilisateur', body) //{ headers: { 'Content-Type': 'application/json' }}
      .pipe(
      map((res: ApiResponseLogin) => {
        console.log(res.Messages);
        if (res.Messages && res.Messages[0] && res.Messages[0].Code != "SUCCESS") {

          /*
          * Afficher le toast d'erreur
          */
            let toast = this.toastCtrl.create({
              message: 'Pseudo / Mot de passe incorrect.',
              duration: 3000
            });
            toast.present();

          /*
          * On 'throw' une erreur pour ne pas accéder à la page d'accueil si non connecté
          */
            throw Error("Invalid username or password");
        }

        return res;
      }));

  }
}


