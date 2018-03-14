import { AlteraSenhaPage } from './../altera-senha/altera-senha';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  
  userData = {firstName: '',dataNasc: '',endereco: '',telCel: '',telFixo: '',};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController) {

  }

  loadUserData(uid) {

  }

  ionViewDidLoad() {

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