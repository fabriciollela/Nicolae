import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    private afAuth: AngularFireAuth,
    private toast: ToastController,
    public navCtrl: NavController) {

  }
  ionViewDidLoad() {
    this.afAuth.authState.subscribe(data => {
      if (data.email && data.uid) {
        this.toast.create({
          message: 'Bem vindo ao APP_NAME, ${data.email}',
          duration: 3000
        }).present();
      }
      else {
        this.toast.create({
          message: 'Usuário ou senha inválidos',
          duration: 3000
        }).present();
      }
    });
  }
}