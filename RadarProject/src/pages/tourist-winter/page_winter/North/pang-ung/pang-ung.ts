import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the PangUngPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-pang-ung',
  templateUrl: 'pang-ung.html',
})
export class PangUngPage {

  constructor(public navCtrl: NavController,private inAppBrowser: InAppBrowser ) {
  }
  openURL(){
    this.inAppBrowser.create("https://blog.traveloka.com/th/local-travel/local-travel-spots/%E0%B8%9E%E0%B8%B2%E0%B9%80%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%A7-%E0%B8%9B%E0%B8%B2%E0%B8%87%E0%B8%AD%E0%B8%B8%E0%B9%8B%E0%B8%87-%E0%B9%82%E0%B8%84%E0%B8%A3%E0%B8%87%E0%B8%81%E0%B8%B2/");   
    }

}
