import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserService } from '../../providers/api/user.service';
import { User } from '../user/shared/user';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'page-user-list',
  templateUrl: 'user-list.html'
})
export class UserListPage {

  users: User[] = [];

  constructor(public navCtrl: NavController, public userService: UserService) {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers()
      .subscribe((users: User[]) => {
        this.users = users;
      }, (err: HttpErrorResponse) => {
        console.error(err.error.message);
        this.users = [];
      });
  }
}
