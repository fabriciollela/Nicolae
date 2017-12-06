import { User } from './../../models/users';
import { AngularFireAuth } from 'angularfire2/auth';
import { RecuperaSenhaPage } from './../recupera-senha/recupera-senha';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private user : User;

  private loginForm : FormGroup;

  constructor(private afAuth:AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
      this.loginForm = this.formBuilder.group({
        email: ['', Validators.required],               
        password: ['', Validators.required],
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  openHomePage() {
    this.navCtrl.setRoot(HomePage)
  }
  openRecuperaSenha() {
    this.navCtrl.push(RecuperaSenhaPage)
  }
  async login() {
        
    this.user = {
      email: this.loginForm.value.email.toString(),
      password: this.loginForm.value.password.toString()
    }
          
    try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password);
            
      if (true) {
        this.openHomePage()
      }  
    }
    catch (e) {
      console.error(e);
    }
  }
}
