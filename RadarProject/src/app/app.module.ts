import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TouristPage } from '../pages/Tourist/Tourist';
import { FarmerPage } from '../pages/farmer/farmer';
import { NorthPage } from '../pages/North/North';
import { CentralPage } from '../pages/Central/Central';
import { EastPage } from '../pages/East/East';
import { NorthEastPage } from '../pages/NorthEast/NorthEast';
import { SouthernPage } from '../pages/Southern/Southern';
import { TouristWinterPage } from '../pages/tourist-winter/tourist-winter';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FarmerRainyPage } from '../pages/farmer/PageSeason/FarmerRainy/FarmerRainy';
import { FarmerSummerPage } from '../pages/farmer/PageSeason/FarmerSummer/FarmerSummer';
import { FarmerwinterPage } from '../pages/farmer/PageSeason/FarmerWinter/FarmerWinter';

import { SummerPage } from '../pages/summer/summer';
import { RainPage } from '../pages/rain/rain';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TouristPage,
    FarmerPage,
    NorthPage,
    CentralPage,
    EastPage,
    NorthEastPage,
    SouthernPage,
    TouristWinterPage,
    FarmerRainyPage,
    FarmerSummerPage,
    FarmerwinterPage,
    SummerPage,
    RainPage
   
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TouristPage,
    FarmerPage,
    NorthPage,
    CentralPage,
    EastPage,
    NorthEastPage,
    SouthernPage,
    TouristWinterPage,
    FarmerRainyPage,
    FarmerSummerPage,
    FarmerwinterPage,
    SummerPage,
    RainPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
