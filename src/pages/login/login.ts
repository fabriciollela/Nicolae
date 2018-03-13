import { HomePage } from './../home/home';
import { User } from './../../models/users';
import { RecuperaSenhaPage } from './../recupera-senha/recupera-senha';
import { Component } from '@angular/core';
import { AlertController, NavController, App, LoadingController, IonicPage, ModalController } from 'ionic-angular'; 

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',  
})
export class LoginPage {
  rootPage: any;
 
  public loginForm: any;
  public backgroundImage = 'assets/imgs/bgapp.jpg';


  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public navCtrl:NavController,
    public modalCtrl: ModalController,
    public app: App
  ) {      }

  login() {
    const loading = this.loadingCtrl.create({
      duration: 500
    });

    loading.onDidDismiss(() => {
      const alert = this.alertCtrl.create({
        title: 'Você entrou !',
        subTitle:'Para acessar o boletim completo ou horários acesse o menu lateral',
        buttons: ['Continuar']
      });
      alert.present();
      this.navCtrl.setRoot(HomePage);
    });

    loading.present();
  }

openHomePage() {
    this.navCtrl.setRoot(HomePage);
  }

  openRecuperaSenha() {
     this.navCtrl.push(RecuperaSenhaPage);
  }

  openSignupModal() {
    this.openModal('SignupModalPage');
  }

  openModal(pageName) {
    this.modalCtrl.create(pageName, null, { cssClass: 'inset-modal' })
                  .present();
  }
}
