import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the KeereeWongPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-keeree-wong',
  templateUrl: 'keeree-wong.html',
})
export class KeereeWongPage {

  constructor(public navCtrl: NavController,private inAppBrowser: InAppBrowser) {
  }
  openUrl1(){
    this.inAppBrowser.create("https://www.facebook.com/%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%9E%E0%B8%B1%E0%B8%81%E0%B8%98%E0%B8%B2%E0%B8%A3%E0%B8%84%E0%B8%B5%E0%B8%A3%E0%B8%B5%E0%B8%A3%E0%B8%B5%E0%B8%AA%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%97-_%E0%B8%AB%E0%B8%A1%E0%B8%B9%E0%B9%88%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%B5%E0%B8%A3%E0%B8%B5%E0%B8%A7%E0%B8%87-1788580561160499/");   
    }

  openUrl2(){
    this.inAppBrowser.create("https://www.facebook.com/lookmaihomestay/");   
    }

  openUrl3(){
    this.inAppBrowser.create("https://www.facebook.com/BantonnamHomestay/");   
    }

  openUrl4(){
    this.inAppBrowser.create("https://www.facebook.com/bansuanwangmaipak/");   
    }
  
  openUrl5(){
    this.inAppBrowser.create("https://www.facebook.com/SaunPrangwhanKiriwog");   
    }

  openUrl6(){
    this.inAppBrowser.create("https://www.facebook.com/ahomestaykiriwong");   
    }

  openUrl7(){
    this.inAppBrowser.create("https://www.facebook.com/seuahwanhomestay/");   
    }

  openUrl8(){
    this.inAppBrowser.create("https://www.facebook.com/bansauntachit.kiriwong");   
    }

  openUrl9(){
    this.inAppBrowser.create("https://www.facebook.com/kanumnaithung/");   
    }


    openLittleHouseInTheValley(){
      this.inAppBrowser.create("https://www.facebook.com/LittleHouseInTheValleyThailand/");   
      }
}
