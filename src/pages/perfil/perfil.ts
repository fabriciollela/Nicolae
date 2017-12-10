import { AlteraSenhaPage } from './../altera-senha/altera-senha';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }
  altearSenha() {
    this.navCtrl.push(AlteraSenhaPage)
  }
  salvarPerfil() {
    let toast = this.toastCtrl.create({
      message: 'Operação realizada com sucesso.',
      duration: 3000
    });
    toast.present();
  }
}
