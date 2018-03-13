import { Component } from '@angular/core';
import { NavController, ToastController, ActionSheetController, ModalController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
import { Horario } from '../../models/horario';
import { AuthProvider } from '../../providers/auth/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  horarioListRef$: FirebaseListObservable<Horario[]>
  public backgroundImage = 'assets/imgs/bghome.jpg';

  constructor(
    private afAuth: AngularFireAuth,
    private toast: ToastController,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private database: AngularFireDatabase,
    private ActionSheetCtrl: ActionSheetController,
    public authData: AuthProvider) {


          // Get current user Id
    var currentUserId = this.authData.afAuth.auth.currentUser.uid;
    this.horarioListRef$ = this.database.list(`/student/${currentUserId}/2011/horarios/`);

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