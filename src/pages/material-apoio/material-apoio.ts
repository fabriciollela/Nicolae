import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ToastController, ActionSheetController  } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
import { Horario } from '../../models/horario';
import { AuthProvider } from '../../providers/auth/auth';
/**
 * Generated class for the MaterialApoioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private afAuth: AngularFireAuth,
    private toast: ToastController,
    private database: AngularFireDatabase,
    private ActionSheetCtrl: ActionSheetController,
    public authData: AuthProvider) {  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MaterialApoioPage');
  }

}
