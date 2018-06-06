import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { AllrestaurantesPage } from '../pages/allrestaurantes/allrestaurantes';
import { CrearusuarioPage } from '../pages/crearusuario/crearusuario';
import { RestaurantesProvider } from '../providers/restaurantes/restaurantes';
import { CrearrestaurantePage } from '../pages/crearrestaurante/crearrestaurante';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AllrestaurantesPage,
    CrearusuarioPage,
    CrearrestaurantePage
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
    HomePage,
    TabsPage,
    AllrestaurantesPage,
    CrearusuarioPage,
    CrearrestaurantePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    RestaurantesProvider
  ]
})
export class AppModule { }
