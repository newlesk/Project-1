import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TeeLorSuWaterfallPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tee-lor-su-waterfall',
  templateUrl: 'tee-lor-su-waterfall.html',
})
export class TeeLorSuWaterfallPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeeLorSuWaterfallPage');
  }

}
