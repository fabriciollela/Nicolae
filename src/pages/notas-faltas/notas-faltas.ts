import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ToastController, LoadingController, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
import { Notas } from '../../models/notas';
import { AuthProvider } from '../../providers/auth/auth';


@IonicPage()
@Component({
  selector: 'page-notas-faltas',
  templateUrl: 'notas-faltas.html',
})
export class NotasFaltasPage {

  items = [
    {
      materia: 'Matemática',
      nota: '10',
      faltas: '3',
    },
    {
      materia: 'Português',
      nota: '10',
      faltas: '3',
    },
    {
      materia: 'Ciências',
      nota: '10',
      faltas: '3',
    },
    {
      materia: 'Filosofia',
      nota: '10',
      faltas: '3',
    }
  ]

  constructor(
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
  }
  exportarBoletim() {
    const loading = this.loadingCtrl.create({
      duration: 500
    });

    loading.onDidDismiss(() => {
      const alert = this.alertCtrl.create({
        title: 'Aguarde',
        subTitle: 'O boletim está sendo transferido.',
        buttons: ['OK']
      });
      alert.present();
    });

    loading.present();
  }
}
