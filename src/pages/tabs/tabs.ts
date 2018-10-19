import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { OptionsPage } from '../options/options';
import { FavorisPage } from '../favoris/favoris';
import { ParisPage } from '../paris/paris';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = OptionsPage;
  tab5Root = FavorisPage;
  tab6Root = ParisPage;
  constructor() {

  }
}
