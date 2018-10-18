import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the PhuSoiDaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-phu-soi-dao',
  templateUrl: 'phu-soi-dao.html',
})
export class PhuSoiDaoPage {

  constructor(public navCtrl: NavController,private inAppBrowser: InAppBrowser) {
  }
  openURL(){
    this.inAppBrowser.create("http://nps.dnp.go.th/");   
    }

}
