import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-recupera-senha',
  templateUrl: 'recupera-senha.html',
})
export class RecuperaSenhaPage {
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public toastCtrl: ToastController,
     public alertCtrl: AlertController,
     public loadingCtrl: LoadingController,
    ) {
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad RecuperaSenhaPage');
  }
  enviarEmail() {
    const loading = this.loadingCtrl.create({
      duration: 500
    });

    loading.onDidDismiss(() => {
      const alert = this.alertCtrl.create({
        title: 'Obrigado :)',
        subTitle: 'Foi enviado um email com as informações de recuperação de senha.',
        buttons: ['OK']
      });
      alert.present();
    });

    loading.present();
  }
}

