import { Component } from '@angular/core';
import { IonicPage,  NavParams, LoadingController, AlertController } from 'ionic-angular';


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
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecuperaSenhaPage');
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
