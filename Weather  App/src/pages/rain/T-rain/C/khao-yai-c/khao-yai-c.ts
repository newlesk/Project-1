import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the KhaoYaiCPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-khao-yai-c',
  templateUrl: 'khao-yai-c.html',
})
export class KhaoYaiCPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private inAppBrowser: InAppBrowser) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KhaoYaiCPage');
  }

  openRe1(){
    this.inAppBrowser.create("http://www.khaoyainationalpark.com/");   
    }

  openRe2(){
      this.inAppBrowser.create("https://www.facebook.com/KhaoYaiNationalPark1962/");   
      }

}
