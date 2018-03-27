import { PerfilPage } from './../pages/perfil/perfil';
import { LoginPage } from './../pages/login/login';
import { MaterialApoioPage } from './../pages/material-apoio/material-apoio';
import { NotasFaltasPage } from './../pages/notas-faltas/notas-faltas';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, LoadingController, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{ title: string, component: any }>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Início', component: HomePage },
      { title: 'Perfil', component: PerfilPage },
      { title: 'Notas e Faltas', component: NotasFaltasPage },
      { title: 'Materiais de Apoio', component: MaterialApoioPage },
      { title: 'Sair', component: null }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if (page.component) {
      this.nav.setRoot(page.component);
    } else {
      const loading = this.loadingCtrl.create({
        duration: 500
      });

      loading.onDidDismiss(() => {
        const alert = this.alertCtrl.create({
          title: 'Sucesso',
          subTitle: 'Usuário desconectado com sucesso',
          buttons: ['Ok']
        });
        alert.present();

      });

      loading.present();
      localStorage.setItem("idToken", "");
      this.nav.setRoot(LoginPage);
    }

  }
}
