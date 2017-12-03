import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-recupera-senha',
  templateUrl: 'recupera-senha.html',
})
export class RecuperaSenhaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecuperaSenhaPage');
  }
  enviarEmail() {
    let toast = this.toastCtrl.create({
      message: 'Informações enviadas com sucesso! Verifique seu email.',
      duration: 3000
    });
    toast.present();
  }
}

