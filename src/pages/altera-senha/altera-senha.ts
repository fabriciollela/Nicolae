import { Component } from '@angular/core';
import { PerfilPage } from '../perfil/perfil';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
/**
 * Generated class for the AlteraSenhaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-altera-senha',
  templateUrl: 'altera-senha.html',
})
export class AlteraSenhaPage {
  public loginForm: any;
  messagePassword = "";
  errorPassword = false;

  constructor(    
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams,
    formBuilder: FormBuilder) {

    this.loginForm = formBuilder.group({
      password: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(20),
      Validators.required])],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlteraSenhaPage');
  }

  login() {
    let {  password } = this.loginForm.controls;

    if (!this.loginForm.valid) {
      if (!password.valid) {
        this.errorPassword = true;
        this.messagePassword ="A senha precisa ter de 6 a 20 caracteres"
      } else {
        this.messagePassword = "";
       
      }
    }
    else {
     
    }
  }

  alterarSenha() {
    this.navCtrl.setRoot(PerfilPage)
  }
} 
