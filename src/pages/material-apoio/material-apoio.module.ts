import { AccordionComponent } from './../../components/accordion/accordion';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MaterialApoioPage } from './material-apoio';

@NgModule({
  declarations: [
    MaterialApoioPage,
  ],
  imports: [
    IonicPageModule.forChild(MaterialApoioPage),
  ],
})
export class MaterialApoioPageModule {}
