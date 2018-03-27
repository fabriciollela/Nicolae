import { Component } from '@angular/core';
import { AlertController, ViewController, NavController, LoadingController, IonicPage } from 'ionic-angular';


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
    public navCtrl: NavController,
    public alertCtrl: AlertController
  ) {
  }

  login() {
    const loading = this.loadingCtrl.create({
      duration: 500
    });

    loading.onDidDismiss(() => {
      const alert = this.alertCtrl.create({
        title: 'Perfil Selecionado',
        subTitle: 'Você está utilizando o perfil do aluno "Paulinha"',
        buttons: ['Ok']
      });
      alert.present();
      this.navCtrl.pop();
    });

    loading.present();
  }

}
