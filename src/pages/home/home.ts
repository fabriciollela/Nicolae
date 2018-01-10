import { Component } from '@angular/core';
import { NavController, ToastController, ActionSheetController } from 'ionic-angular';
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

  constructor(
    private afAuth: AngularFireAuth,
    private toast: ToastController,
    public navCtrl: NavController,
    private database: AngularFireDatabase,
    private ActionSheetCtrl: ActionSheetController,
    public authData: AuthProvider) {

          // Get current user Id
    var currentUserId = this.authData.afAuth.auth.currentUser.uid;
    this.horarioListRef$ = this.database.list(`/student/${currentUserId}/2011/horarios/`);

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