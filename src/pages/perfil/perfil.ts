import { AlteraSenhaPage } from './../altera-senha/altera-senha';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import { UserTesteItem } from '../../models/user-item';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database-deprecated';

import { AuthProvider } from '../../providers/auth/auth';


/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  
  userData = {firstName: '',dataNasc: '',endereco: '',telCel: '',telFixo: '',};

  userName: FirebaseObjectObservable<UserTesteItem>
  userTurma: FirebaseObjectObservable<UserTesteItem>

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    private afAuth: AngularFireAuth,
    private database: AngularFireDatabase,
    public authData: AuthProvider) {

  }

  loadUserData(uid) {
    this.database.object('user/' + uid).subscribe((user)=>{
      this.userData = user;
    })
  }

  ionViewDidLoad() {
    this.afAuth.authState.subscribe(data => {
      if (data.email && data.uid) {
        this.toastCtrl.create({
          message: 'Bem vindo ao APP_NAME, ${data.email}',
          duration: 3000
        }).present();
       this.loadUserData(data.uid)
       this.userName = this.database.object(`user/${data.uid}`)
       this.userTurma = this.database.object(`student/${data.uid}/2011`)
      }
      else {
        this.toastCtrl.create({
          message: 'Usuário ou senha inválidos',
          duration: 3000
        }).present();
      }
    });
  }
  altearSenha() {
    this.navCtrl.push(AlteraSenhaPage)
  }
  salvarPerfil() {
    let toast = this.toastCtrl.create({
      message: 'Operação realizada com sucesso.',
      duration: 3000
    });
    toast.present();
  }

}