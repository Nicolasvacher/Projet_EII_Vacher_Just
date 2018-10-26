import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';

import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  users: any;

  constructor(public navCtrl: NavController, public api: ApiProvider) { 
    this.getUsers();
  }
 
  

  getUsers() {
    this.api.getUsers()
    .then(data => {
      this.users = data;
      console.log(this.users);
    });
  }

}
