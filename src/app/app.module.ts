import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';

import { Facebook } from '@ionic-native/facebook';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OptionsPage } from '../pages/options/options';
import { FavorisPage } from '../pages/favoris/favoris';

import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import { WelcomePage } from '../pages/welcome/welcome';
import { GameListPage } from '../pages/game-list/game-list';
import { GameService } from '../providers/api/game.service';
import { UserService } from '../providers/api/user.service';
import { OptionsChangeInfoPage } from '../pages/options-change-info/options-change-info'
import { TournamentService } from '../providers/api/tournament.service';
import { TournamentInfoPage } from '../pages/tournament-info/tournament-info';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    TabsPage,
    OptionsPage,
    FavorisPage,
    GameListPage,
    SignupPage,
    LoginPage,
    WelcomePage,
    OptionsChangeInfoPage,
    TournamentInfoPage
  ], 
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    TabsPage,
    OptionsPage,
    FavorisPage,
    GameListPage,
    SignupPage,
    LoginPage,
    WelcomePage,
    OptionsChangeInfoPage,
    TournamentInfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserService,
    GameService,
    TournamentService,
    Facebook,
  ]
})
export class AppModule {
}
