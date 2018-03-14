import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams   } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-material-apoio',
  templateUrl: 'material-apoio.html',
})
export class MaterialApoioPage {
  items = [
    {
      name: 'Matemática',
      description: 'Prova.pdf',
    },
    {
      name: 'Português',
      description: 'Prova.pdf',
    },
    {
      name: 'História',
      description: 'Prova.pdf',
    },
    {
      name: 'Física',
      description: 'Prova.pdf',
    } 
  ]
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MaterialApoioPage');
  }

}
