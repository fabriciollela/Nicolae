import { AlteraSenhaPage } from './../altera-senha/altera-senha';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  
  public loginForm: any;
  messageEmail = ""
  errorEmail = false;

  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams,
    formBuilder: FormBuilder) {
 
      this.loginForm = formBuilder.group({
        email: ['', Validators.compose([Validators.maxLength(70), Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), Validators.required])],
      });
      
  } 
  
  public event = {
    dataNasc: '1990-02-20'
  }

  login() {
    let { email } = this.loginForm.controls;

    if (!this.loginForm.valid) {
      if (!email.valid) {
        this.errorEmail = true;
        this.messageEmail = "Ops! Email inválido";
      } else {
        this.messageEmail = "";
        this.salvarPerfil();
      }
    }
    else {
     
    }
  }

  ionViewDidLoad() {

  }

  altearSenha() {
    this.navCtrl.push(AlteraSenhaPage)
  }

  salvarPerfil() {
    const loading = this.loadingCtrl.create({
      duration: 500
    });

    loading.onDidDismiss(() => {
      const alert = this.alertCtrl.create({
        title: 'Sucesso',
        subTitle: 'Seus dados foram atualizados com sucesso !',
        buttons: ['Ok']
      });
      alert.present();
    });

    loading.present();

} }