import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the PhuChiFaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-phu-chi-fa',
  templateUrl: 'phu-chi-fa.html',
})
export class PhuChiFaPage {

  constructor(public navCtrl: NavController,private inAppBrowser: InAppBrowser) {
  }
  openURL(){
    this.inAppBrowser.create("https://travel.kapook.com/view675.html");   
    }
}
