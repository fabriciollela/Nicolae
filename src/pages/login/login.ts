import { HomePage } from './../home/home';
import { RecuperaSenhaPage } from './../recupera-senha/recupera-senha';
import { Component } from '@angular/core';
import { AlertController, NavController, App, LoadingController, IonicPage, ModalController,MenuController } from 'ionic-angular';
import { UsersProvider } from './../../providers/users/users';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  rootPage: any;

  public loginForm: any;
  public backgroundImage = 'assets/imgs/bgapp.jpg';
  model: User;

  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public menu:MenuController,
    public app: App,
    private userProvider: UsersProvider
  ) {
    this.model = new User();
    this.model.email = 'fabricio@mail.com';
    this.model.password = '123456';

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

  login() {
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
