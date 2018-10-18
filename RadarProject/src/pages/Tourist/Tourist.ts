import { SummerPage } from './../summer/summer';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TouristWinterPage } from '../tourist-winter/tourist-winter';
import { RainPage } from '../rain/rain';



@Component({
  selector: 'page-Tourist',
  templateUrl: 'Tourist.html'
})
export class TouristPage {

  constructor(public navCtrl: NavController) { 
  }

  openTouristWinterPage(){
    this.navCtrl.push(TouristWinterPage);
  }
  
  openRainPage(){
    this.navCtrl.push(RainPage);
  }

  openSummerPage(){
    this.navCtrl.push(SummerPage);
  }

  openUrl(){
    window.open('https://www.facebook.com/', '_system');
  }

  
   

}
 