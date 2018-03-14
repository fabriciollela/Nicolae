import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-aula-info-modal',
  templateUrl: 'aula-info-modal.html',
})
export class AulaInfoModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AulaInfoModalPage');
  }
  closeModal() {
    this.navCtrl.pop();
}
}
