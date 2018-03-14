import { Component } from '@angular/core';
import { NavController,   ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public backgroundImage = 'assets/imgs/bghome.jpg';

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController) {
 
  }

    ionViewDidLoad() {
     
  }
  openAulaInfoModalPage() {
    this.openModal('AulaInfoModalPage');
  }

  openModal(pageName) {
    this.modalCtrl.create(pageName, null, { cssClass: 'inset-modal' })
                  .present();
  }
}