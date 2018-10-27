import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { OptionsPage } from '../options/options';
import { FavorisPage } from '../favoris/favoris';
import { GameListPage } from '../game-list/game-list';
import { UserListPage } from '../user/user-list';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = GameListPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = OptionsPage;
  tab5Root = FavorisPage;
  tab6Root = UserListPage;

  constructor() {
  }
}
