import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NorthPage } from '../North/North';
import { CentralPage } from '../Central/Central';
import { EastPage } from '../East/East';
import { NorthEastPage } from '../NorthEast/NorthEast';
import { SouthernPage } from '../Southern/Southern';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  
  constructor(public navCtrl: NavController) {
    
  }

  

  openNorthPage(){
    this.navCtrl.push(NorthPage);
  }
  

  openCentralPage(){
    this.navCtrl.push(CentralPage);
  }

  openEastPage(){
    this.navCtrl.push(EastPage);
  }

  openNorthEastPage(){
    this.navCtrl.push(NorthEastPage);
  }

  openSouthernPage(){
    this.navCtrl.push(SouthernPage);
  }
  

}


