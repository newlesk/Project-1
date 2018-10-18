import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';

import { KhaoYaiCPage } from './T-rain/C/khao-yai-c/khao-yai-c';
import { RiverCPage } from './T-rain/C/river-c/river-c';
import { ChiangKhanEPage } from './T-rain/E/chiang-khan-e/chiang-khan-e';
import { FlowersEPage } from './T-rain/E/flowers-e/flowers-e';
import { PaiCmPage } from './T-rain/N/pai-cm/pai-cm';
import { TeeLorSuWaterfallPage } from './T-rain/N/tee-lor-su-waterfall/tee-lor-su-waterfall';
import { DamSPage } from './T-rain/s/dam-s/dam-s';
import { RaftingSPage } from './T-rain/S/rafting-s/rafting-s';
import { SuanPhungWPage } from './T-rain/W/suan-phung-w/suan-phung-w';
import { ThongphaphumWPage } from './T-rain/W/thongphaphum-w/thongphaphum-w';

/**
 * Generated class for the RainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-rain',
  templateUrl: 'rain.html',
})

export class RainPage {
  direction: string = "North";
  isAndroid: boolean = true;

  constructor(public navCtrl: NavController,platform: Platform) {
    this.isAndroid = platform.is('android');
  }

  KhaoYaiCPage(){
    this.navCtrl.push(KhaoYaiCPage);
  }

  RiverCPage(){
    this.navCtrl.push(RiverCPage);
  }

  ChiangKhanEPage(){
    this.navCtrl.push(ChiangKhanEPage);
  }
  
  FlowersEPage(){
    this.navCtrl.push(FlowersEPage);
  }
  
  PaiCmPage(){
    this.navCtrl.push(PaiCmPage);
  }
  
  TeeLorSuWaterfallPage(){
    this.navCtrl.push(TeeLorSuWaterfallPage);
  }
  
  DamSPage(){
    this.navCtrl.push(DamSPage);
  }
  
  RaftingSPage(){
    this.navCtrl.push(RaftingSPage);
  }
  
  SuanPhungWPage(){
    this.navCtrl.push(SuanPhungWPage);
  }
  
  ThongphaphumWPage(){
    this.navCtrl.push(ThongphaphumWPage);
  }

}
