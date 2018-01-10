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
  horarioListRef$: FirebaseListObservable<Horario[]>

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private afAuth: AngularFireAuth,
    private toast: ToastController,
    private database: AngularFireDatabase,
    private ActionSheetCtrl: ActionSheetController,
    public authData: AuthProvider) {

    // Get current user Id
    var currentUserId = this.authData.afAuth.auth.currentUser.uid;
    this.horarioListRef$ = this.database.list(`/student/${currentUserId}/2011/horarios/`);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MaterialApoioPage');
  }

}
