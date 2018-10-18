import { Component } from '@angular/core';
import { NavController, UrlSerializer } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the DoiInthanonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-doi-inthanon',
  templateUrl: 'doi-inthanon.html',
})
export class DoiInthanonPage {

  constructor(public navCtrl: NavController,private inAppBrowser: InAppBrowser ) {
    
}

openUrl1(){
  this.inAppBrowser.create("http://portal.dnp.go.th/");   
  }
}
