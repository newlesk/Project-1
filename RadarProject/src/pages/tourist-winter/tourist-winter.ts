
import { HuaiNamDangPage } from './page_winter/North/huai-nam-dang/huai-nam-dang';
import { DoiInthanonPage } from './page_winter/North/doi-inthanon/doi-inthanon';
import { DoiAngKhangPage } from './page_winter/North/doi-ang-khang/doi-ang-khang';
import { PhuChiFaPage } from './page_winter/North/phu-chi-fa/phu-chi-fa';
import { PangUngPage } from './page_winter/North/pang-ung/pang-ung';
import { PaiPage } from './page_winter/North/pai/pai';
import { MonJungPage } from'./page_winter/North/mon-jung/mon-jung';
import { MonChamPage } from './page_winter/North/mon-cham/mon-cham';
import { SinghaParkPage } from './page_winter/North/singha-park/singha-park';
import { GoldenPage } from './page_winter/North/golden/golden';
import { DoiPhaHomPokPage } from './page_winter/North/doi-pha-hom-pok/doi-pha-hom-pok';
import { DoiWaoPage } from './page_winter/North/doi-wao/doi-wao';
import { DoiChiangDaoPage } from './page_winter/North/doi-chiang-dao/doi-chiang-dao';
import { KhaoKhoPage } from './page_winter/Central/khao-kho/khao-kho';
import { PhuSoiDaoPage } from './page_winter/Central/phu-soi-dao/phu-soi-dao';
import { MongoPage } from './page_winter/Central/mongo/mongo';
import { PhuHinRongKlaPage } from './page_winter/North-East/phu-hin-rong-kla/phu-hin-rong-kla';
import { PhuKraduengPage } from './page_winter/North-East/phu-kradueng/phu-kradueng';
import { PhuRueaPage } from './page_winter/North-East/phu-ruea/phu-ruea';
import { PhuPaoForestPage } from './page_winter/North-East/phu-pao-forest/phu-pao-forest';
import { PhaChaChanPage } from './page_winter/Northeastern/pha-cha-chan/pha-cha-chan';
import { CloudBridgeAtKhaoChangPhuakPage } from './page_winter/West/cloud-bridge-at-khao-chang-phuak/cloud-bridge-at-khao-chang-phuak';
import { KeereeWongPage } from './page_winter/Southern/keeree-wong/keeree-wong';



import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { Platform } from 'ionic-angular';


/**
 * Generated class for the TouristWinterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tourist-winter',
  templateUrl: 'tourist-winter.html',
})
export class TouristWinterPage {
  direction: string = "North";
  isAndroid: boolean = true;

  constructor(public navCtrl: NavController,platform: Platform) {
    this.isAndroid = platform.is('android');
  }



  openDoiInthanonPage(){
    this.navCtrl.push(DoiInthanonPage);
  }

  openDoiAngKhangPage(){
    this.navCtrl.push(DoiAngKhangPage);
  }

  openHuaiNamDangPage(){
    this.navCtrl.push(HuaiNamDangPage);
  }

  openPhuChiFaPage(){
    this.navCtrl.push(PhuChiFaPage);
  }

  openPangUngPage(){
    this.navCtrl.push(PangUngPage);
  }

  openPaiPage(){
    this.navCtrl.push(PaiPage);
  }

  openMonJungPage(){
    this.navCtrl.push(MonJungPage);
  }

  openMonChamPage(){
    this.navCtrl.push(MonChamPage);
  }

  openSinghaParkPage(){
    this.navCtrl.push(SinghaParkPage);
  }

  openGoldenPage(){
    this.navCtrl.push(GoldenPage);
  }
  
  openDoiPhaHomPokPage(){
    this.navCtrl.push(DoiPhaHomPokPage);
  }

  openDoiWaoPage(){
    this.navCtrl.push(DoiWaoPage);
  }

  openDoiChiangDaoPage(){
    this.navCtrl.push(DoiChiangDaoPage);
  }

  openKhaoKhoPage(){
    this.navCtrl.push(KhaoKhoPage);
  }

  openPhuSoiDaoPage(){
    this.navCtrl.push(PhuSoiDaoPage);
  }
  
  openMongoPage(){
    this.navCtrl.push(MongoPage);
  }

  openPhuHinRongKlaPage(){
    this.navCtrl.push(PhuHinRongKlaPage);
  }

  openPhuKraduengPage(){
    this.navCtrl.push(PhuKraduengPage);
  }

  openPhuRueaPage(){
    this.navCtrl.push(PhuRueaPage);
  }

  openPhuPaoForestPage(){
    this.navCtrl.push(PhuPaoForestPage);
  }

  openPhaChaChanPage(){
    this.navCtrl.push(PhaChaChanPage);
  }

  openCloudBridgeAtKhaoChangPhuakPage(){
    this.navCtrl.push(CloudBridgeAtKhaoChangPhuakPage);
  }

  openKeereeWongPage(){
    this.navCtrl.push(KeereeWongPage);
  }

  

  
  
}
