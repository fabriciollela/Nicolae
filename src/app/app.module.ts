//Outros
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AccordionListComponent } from './../../../ionic3-components/src/components/accordion-list/accordion-list';
import { MyApp } from './app.component';
import { UsersProvider } from '../providers/users/users';
import { HttpClientModule } from '@angular/common/http';

//Páginas
import { AlteraSenhaPage } from './../pages/altera-senha/altera-senha';
import { PerfilPage } from './../pages/perfil/perfil';
import { RecuperaSenhaPage } from './../pages/recupera-senha/recupera-senha';
import { LoginPage } from './../pages/login/login';
import { NotasFaltasPage } from './../pages/notas-faltas/notas-faltas';
import { HomePage } from '../pages/home/home';
import { MaterialApoioPage } from '../pages/material-apoio/material-apoio';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NotasFaltasPage,
    LoginPage,
    PerfilPage,
    RecuperaSenhaPage,
    MaterialApoioPage,
    AlteraSenhaPage,
    AccordionListComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
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
    MaterialApoioPage,
    AlteraSenhaPage,
    AccordionListComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UsersProvider]
})
export class AppModule { }
