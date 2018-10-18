import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaiCmPage } from './pai-cm';

@NgModule({
  declarations: [
    PaiCmPage,
  ],
  imports: [
    IonicPageModule.forChild(PaiCmPage),
  ],
})
export class PaiCmPageModule {}
