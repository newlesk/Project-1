import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the PhuKraduengPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-phu-kradueng',
  templateUrl: 'phu-kradueng.html',
})
export class PhuKraduengPage {

  constructor(public navCtrl: NavController , private inAppBrowser: InAppBrowser) {
  }

  openURL(){
    this.inAppBrowser.create("http://nps.dnp.go.th/");   
    }
}
