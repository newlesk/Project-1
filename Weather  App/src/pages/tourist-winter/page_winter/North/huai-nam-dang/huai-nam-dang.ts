import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the HuaiNamDangPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-huai-nam-dang',
  templateUrl: 'huai-nam-dang.html',
})
export class HuaiNamDangPage {

  constructor(public navCtrl: NavController,private inAppBrowser: InAppBrowser) {
  }

  openmHuaiNamDang(){
    this.inAppBrowser.create("https://www.ท่องทั่วไทย.com/%E0%B8%AD%E0%B8%B8%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%AB%E0%B9%88%E0%B8%87%E0%B8%8A%E0%B8%B2%E0%B8%95%E0%B8%B4%E0%B8%AB%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%94%E0%B8%B1%E0%B8%87-%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88/");   
    }

}
