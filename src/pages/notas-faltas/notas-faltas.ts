import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
import { Notas } from '../../models/notas';
import { AuthProvider } from '../../providers/auth/auth';
/**
 * Generated class for the NotasFaltasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notas-faltas',
  templateUrl: 'notas-faltas.html',
})
export class NotasFaltasPage {
 
  notasListRef$: FirebaseListObservable<Notas[]>

  constructor(
    private afAuth: AngularFireAuth,
    public navCtrl: NavController,
    private database: AngularFireDatabase,
    private ActionSheetCtrl: ActionSheetController,
    public authData: AuthProvider) {

              // Get current user Id
              var currentUserId = this.authData.afAuth.auth.currentUser.uid;
              this.notasListRef$ = this.database.list(`/student/${currentUserId}/2011/notas/`);
          
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotasFaltasPage'); 
  }

}
