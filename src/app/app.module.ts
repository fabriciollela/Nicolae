import { PerfilPage } from './../pages/perfil/perfil';
import { RecuperaSenhaPage } from './../pages/recupera-senha/recupera-senha';
import { LoginPage } from './../pages/login/login';
import { NotasFaltasPage } from './../pages/notas-faltas/notas-faltas';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MaterialApoioPage } from '../pages/material-apoio/material-apoio';

import { AccordionComponent} from '../components/accordion/accordion';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NotasFaltasPage,
    LoginPage,
    PerfilPage,
    RecuperaSenhaPage,
    MaterialApoioPage,
    AccordionComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NotasFaltasPage,
    LoginPage,
    PerfilPage,
    RecuperaSenhaPage,
    MaterialApoioPage,
    AccordionComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
