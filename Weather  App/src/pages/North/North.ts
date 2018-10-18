import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the North page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-North',
  templateUrl: 'North.html',
})

export class NorthPage {
  radaromkoi:boolean = false ;
  constructor(public navCtrl: NavController) {

  }

}
