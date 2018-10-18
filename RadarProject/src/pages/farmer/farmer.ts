import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { NgModule } from '@angular/core';


import { FarmerRainyPage } from './PageSeason/FarmerRainy/FarmerRainy';
import { FarmerSummerPage } from './PageSeason/FarmerSummer/FarmerSummer';
import { FarmerwinterPage } from './PageSeason/FarmerWinter/FarmerWinter';

@NgModule({
  declarations: [
    FarmerRainyPage,
    FarmerSummerPage,
    FarmerwinterPage
   
  ],
})


@Component({
  selector: 'page-farmer',
  templateUrl: 'farmer.html'
})


export class FarmerPage {
  VeggiesandFruits:boolean = false ;
  constructor(public navCtrl: NavController) {
    
  }

  openFarmerRainyPage(){
    this.navCtrl.push(FarmerRainyPage);
  }
  openFarmerSummerPage(){
    this.navCtrl.push(FarmerSummerPage);
  }
  openFarmerWinterPage(){
    this.navCtrl.push(FarmerwinterPage);
  }
  

}
