import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';

import { CanalCPage } from './Summer-Page/C/canal-c/canal-c';
import { ThreeThousandEPage } from './Summer-Page/E/three-thousand-e/three-thousand-e';
import { BarleyfieldNPage } from './Summer-Page/N/barleyfield-n/barleyfield-n';
import { IslandSPage } from './Summer-Page/S/island-s/island-s';
import { SeaSPage } from './Summer-Page/S/sea-s/sea-s';
import { HuaiLengWPage } from './Summer-Page/W/huai-leng-w/huai-leng-w';
import { KhaoNgaoWPage } from './Summer-Page/W/khao-ngao-w/khao-ngao-w';

/**
 * Generated class for the SummerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-summer',
  templateUrl: 'summer.html',
})
export class SummerPage {
  direction: string = "Central";
  isAndroid: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams,platform: Platform) {
    this.isAndroid = platform.is('android');
  }

  CanalCPage(){
    this.navCtrl.push(CanalCPage);
  }

  ThreeThousandEPage(){
    this.navCtrl.push(ThreeThousandEPage);
  }

  BarleyfieldNPage(){
    this.navCtrl.push(BarleyfieldNPage);
  }

  IslandSPage(){
    this.navCtrl.push(IslandSPage);
  }

  SeaSPage(){
    this.navCtrl.push(SeaSPage);
  }

  HuaiLengWPage(){
    this.navCtrl.push(HuaiLengWPage);
  }

  KhaoNgaoWPage(){
    this.navCtrl.push(KhaoNgaoWPage);
  }


}
