import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the DoiAngKhangPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-doi-ang-khang',
  templateUrl: 'doi-ang-khang.html',
})
export class DoiAngKhangPage {

  constructor(public navCtrl: NavController,private inAppBrowser: InAppBrowser) {
  }

  openmMosaicUrl(){
    this.inAppBrowser.create("https://www.mosaic-collection.com/");   
    }

  openReferresUrl(){
      this.inAppBrowser.create("https://www.paiduaykan.com/76_province/north/chiangmai/angkhang.html");   
      }

}
