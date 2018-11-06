import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';

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
import { UserListPage } from '../pages/user/user-list';
import { OptionsChangeInfoPage } from '../pages/options-change-info/options-change-info'

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    TabsPage,
    OptionsPage,
    FavorisPage,
    UserListPage,
    GameListPage,
    SignupPage,
    LoginPage,
    WelcomePage,
    OptionsChangeInfoPage
  ], 
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
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
    UserListPage,
    GameListPage,
    SignupPage,
    LoginPage,
    WelcomePage,
    OptionsChangeInfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserService,
    GameService
  ]
})
export class AppModule {
}
