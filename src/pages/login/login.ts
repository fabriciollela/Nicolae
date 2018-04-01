import { HomePage } from './../home/home';
import { RecuperaSenhaPage } from './../recupera-senha/recupera-senha';
import { Component } from '@angular/core';
import { AlertController, NavController, App, LoadingController, IonicPage, ModalController, MenuController } from 'ionic-angular';
import { UsersProvider } from './../../providers/users/users';
import { FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  rootPage: any;

  public loginForm: any;
  messageEmail = ""
  messagePassword = "";
  errorEmail = false;
  errorPassword = false;
  public backgroundImage = 'assets/imgs/bgapp.jpg';
  model: User;

  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public menu: MenuController,
    public app: App,
    private userProvider: UsersProvider,
    formBuilder: FormBuilder
  ) {
this.model = new User();
    this.model.email = 'fabricio@mail.com';
    this.model.password = '123456';

    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.maxLength(70), Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), Validators.required])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(20),
      Validators.required])],
    });

    if (localStorage.getItem('idToken') !== null && localStorage.getItem("idToken") !== "") {
      const loading = this.loadingCtrl.create({
        duration: 500
      });

      loading.onDidDismiss(() => {
        const alert = this.alertCtrl.create({
          title: 'Sucesso',
          subTitle: 'Para acessar o boletim completo ou horários acesse o menu lateral',
          buttons: ['Continuar']
        });
        alert.present();
        this.navCtrl.setRoot(HomePage);

      });

      loading.present();
      this.openModal('SignupModalPage');
    } else {

    }
  }

  validarLogin() {
    this.userProvider.login(this.model.email, this.model.password).then((result: any) => {
      let { email, password } = this.loginForm.controls;

      if (!this.loginForm.valid) {
        if (!email.valid) {
          this.errorEmail = true;
          this.messageEmail = "Ops! Email inválido";
        } else {
          this.messageEmail = "";
        }

        if (!password.valid) {
          this.errorPassword = true;
          this.messagePassword = "A senha precisa ter de 6 a 20 caracteres"
        } else {
          this.messagePassword = "";
        }
      }
      else {
        this.logar();      }

    })
  }

  logar() {
    this.userProvider.login(this.model.email, this.model.password).then((result: any) => {

      if (!result.error) {
        localStorage.setItem('idToken', result.token);

        const loading = this.loadingCtrl.create({
          duration: 500
        });

        loading.onDidDismiss(() => {
          const alert = this.alertCtrl.create({
            title: 'Sucesso',
            subTitle: 'Para acessar o boletim completo ou horários acesse o menu lateral',
            buttons: ['Continuar']
          });
          alert.present();
          this.navCtrl.setRoot(HomePage);

        });

        loading.present();
        this.openModal('SignupModalPage');
      } else {
        const loading = this.loadingCtrl.create({
          duration: 500
        });

        loading.onDidDismiss(() => {
          const alert = this.alertCtrl.create({
            title: 'Falha na Autenticação',
            subTitle: 'Verifique o e-mail e senha informados',
            buttons: ['Ok']
          });
          alert.present();

        });

        loading.present();
      }

    })
      .catch((error: any) => {
        const loading = this.loadingCtrl.create({
          duration: 500
        });

        loading.onDidDismiss(() => {
          const alert = this.alertCtrl.create({
            title: 'Problemas de Conexão',
            subTitle: 'Verifique sua conexão com a internet e tente novamente',
            buttons: ['Continuar']
          });
          alert.present();

        });

        loading.present();
      });
  }

  openHomePage() {
    this.navCtrl.setRoot(HomePage);
  }

  openRecuperaSenha() {
    this.navCtrl.push(RecuperaSenhaPage);
  }

  openSignupModal() {
    this.openModal('SignupModalPage');
  }

  openModal(pageName) {
    this.modalCtrl.create(pageName, null, { cssClass: 'inset-modal' })
      .present();
  }

  ionViewDidEnter() {
    //to disable menu, or
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // to enable menu.
    this.menu.enable(true);
  }

}

export class User {
  email: string;
  password: string;
}
