import { Component } from '@angular/core';
import { HomePage } from './../home/home';
import { AlertController,ViewController, NavController, App, LoadingController, IonicPage, ModalController } from 'ionic-angular'; 


@IonicPage()
@Component({
  selector: 'page-signup-modal',
  templateUrl: 'signup-modal.html'
})
export class SignupModalPage {
  users = new Array(2);

  constructor(
    public viewCtrl: ViewController,
    public loadingCtrl: LoadingController,
    public navCtrl:NavController,
    public alertCtrl: AlertController
  ) {
  }

  login() {
    const loading = this.loadingCtrl.create({
      duration: 500
    });

    loading.onDidDismiss(() => {
      const alert = this.alertCtrl.create({
        title: 'Parabéns',
        subTitle: 'Você está logado',
        buttons: ['Continuar']
      });
      alert.present();
      this.navCtrl.setRoot(HomePage);
    });

    loading.present();
  }

}
