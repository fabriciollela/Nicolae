import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AulaInfoModalPage } from './aula-info-modal';

@NgModule({
  declarations: [
    AulaInfoModalPage,
  ],
  imports: [
    IonicPageModule.forChild(AulaInfoModalPage),
  ],
})
export class AulaInfoModalPageModule {}
