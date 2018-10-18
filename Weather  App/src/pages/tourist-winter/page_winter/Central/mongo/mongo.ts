import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
/**
 * Generated class for the MongoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-mongo',
  templateUrl: 'mongo.html',
})
export class MongoPage {

  constructor(public navCtrl: NavController, private inAppBrowser: InAppBrowser ) {
  }

  openURL(){
    this.inAppBrowser.create("http://www.amazingthaitour.com/");   
    }
}
