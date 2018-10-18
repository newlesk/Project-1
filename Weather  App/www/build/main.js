webpackJsonp([18],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Summer_Page_C_canal_c_canal_c__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Summer_Page_E_three_thousand_e_three_thousand_e__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Summer_Page_N_barleyfield_n_barleyfield_n__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Summer_Page_S_island_s_island_s__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Summer_Page_S_sea_s_sea_s__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Summer_Page_W_huai_leng_w_huai_leng_w__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Summer_Page_W_khao_ngao_w_khao_ngao_w__ = __webpack_require__(222);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the SummerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SummerPage = /** @class */ (function () {
    function SummerPage(navCtrl, navParams, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.direction = "Central";
        this.isAndroid = true;
        this.isAndroid = platform.is('android');
    }
    SummerPage.prototype.CanalCPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__Summer_Page_C_canal_c_canal_c__["a" /* CanalCPage */]);
    };
    SummerPage.prototype.ThreeThousandEPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__Summer_Page_E_three_thousand_e_three_thousand_e__["a" /* ThreeThousandEPage */]);
    };
    SummerPage.prototype.BarleyfieldNPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__Summer_Page_N_barleyfield_n_barleyfield_n__["a" /* BarleyfieldNPage */]);
    };
    SummerPage.prototype.IslandSPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__Summer_Page_S_island_s_island_s__["a" /* IslandSPage */]);
    };
    SummerPage.prototype.SeaSPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__Summer_Page_S_sea_s_sea_s__["a" /* SeaSPage */]);
    };
    SummerPage.prototype.HuaiLengWPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__Summer_Page_W_huai_leng_w_huai_leng_w__["a" /* HuaiLengWPage */]);
    };
    SummerPage.prototype.KhaoNgaoWPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__Summer_Page_W_khao_ngao_w_khao_ngao_w__["a" /* KhaoNgaoWPage */]);
    };
    SummerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-summer',template:/*ion-inline-start:"D:\RADAR\src\pages\summer\summer.html"*/'<!--\n  Generated template for the SummerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title align-title="center">Summer Season</ion-title>\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n      <ion-segment [(ngModel)]="direction">\n        <ion-segment-button value="Central">\n          ภาคกลาง\n        </ion-segment-button>\n        <ion-segment-button value="East">\n          ภาคตะวันออก\n        </ion-segment-button>\n        <ion-segment-button value="West">\n          ภาคตะวันตก\n        </ion-segment-button>\n    <ion-segment-button value="Southern">\n          ภาคใต้\n        </ion-segment-button>\n      </ion-segment>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card>     \n        <ion-item-group>\n                        \n            <div [ngSwitch]="direction">\n                    <ion-list *ngSwitchCase="\'Central\'">\n                    <div (click)="CanalCPage()">\n                    <ion-item>\n                        <ion-thumbnail item-start>\n                            <img src="http://me-story.com/wp-content/uploads/2018/05/web-2.jpg"> \n                        </ion-thumbnail>\n                        <h2 item-start>คลองโคน<p>จังหวัดสมุทรสงคราม</p></h2>\n                    </ion-item></div>\n                </ion-list></div>\n    \n        <div [ngSwitch]="direction">\n            <ion-list *ngSwitchCase="\'East\'">\n            <div (click)="ThreeThousandEPage()">\n            <ion-item>\n                <ion-thumbnail item-start>\n                    <img src="https://f.ptcdn.info/905/040/000/o3zkd51c3dZACSnRP9i-o.jpg"> \n                </ion-thumbnail>\n                <h2 item-start>สามพันโบกและหาดชมดาว <p>จังหวัดอุบลราชธานี</p></h2>\n            </ion-item></div>\n        </ion-list></div>\n    \n        <div [ngSwitch]="direction">\n            <ion-list *ngSwitchCase="\'West\'">\n            <div (click)="HuaiLengWPage()">\n            <ion-item>\n                <ion-thumbnail item-start>\n                    <img src="http://www.thaimultiply.com/data/iammote/169526/800_2181425147754.jpg"> \n                </ion-thumbnail>\n                <h2 item-start>อ่างเก็บน้ำห้วยไม้เต็ง <p>จังหวัดราชบุรี</p></h2>\n            </ion-item></div>\n    \n            <div (click)="KhaoNgaoWPage()">\n              <ion-item>\n                  <ion-thumbnail item-start>\n                      <img src="http://www.xn--b3czk4afcy3gxah5a1g4e.com/wp-content/uploads/2011/11/IMG_3769.jpg"> \n                  </ion-thumbnail>\n                  <h2 item-start>อุทยานหินเขางู<p>จังหวัดราชบุรี</p></h2>\n              </ion-item></div>\n        </ion-list></div>\n            \n        <div [ngSwitch]="direction">\n            <ion-list *ngSwitchCase="\'Southern\'">\n            <div (click)="SeaSPage()">\n            <ion-item>\n                <ion-thumbnail item-start>\n                    <img src="https://f.ptcdn.info/811/022/000/1409207381-10-o.jpg"> \n                </ion-thumbnail>\n                <h2 item-start>หนองทะเล <p>จังหวัดกระบี่</p></h2>\n            </ion-item></div>\n    \n            <div (click)="IslandSPage()">\n              <ion-item>\n                  <ion-thumbnail item-start>\n                      <img src="https://f.tpkcdn.com/review-source/2b9f7f9b-ecaf-977f-10eb-56e13c8ef624.jpg"> \n                  </ion-thumbnail>\n                  <h2 item-start>เกาะค้างคาว เกาะญี่ปุ่น และอ่าวเขาควาย เกาะกำตก<p>จังหวัดระนอง</p></h2>\n              </ion-item></div>\n    \n            \n        </ion-list></div>\n    \n        </ion-item-group>\n      </ion-card>\n</ion-content>\n'/*ion-inline-end:"D:\RADAR\src\pages\summer\summer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]])
    ], SummerPage);
    return SummerPage;
}());

//# sourceMappingURL=summer.js.map

/***/ }),

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/rain/T-rain/C/khao-yai-c/khao-yai-c.module": [
		327,
		17
	],
	"../pages/rain/T-rain/C/river-c/river-c.module": [
		322,
		16
	],
	"../pages/rain/T-rain/E/chiang-khan-e/chiang-khan-e.module": [
		323,
		15
	],
	"../pages/rain/T-rain/E/flowers-e/flowers-e.module": [
		324,
		14
	],
	"../pages/rain/T-rain/N/pai-cm/pai-cm.module": [
		325,
		13
	],
	"../pages/rain/T-rain/N/tee-lor-su-waterfall/tee-lor-su-waterfall.module": [
		326,
		12
	],
	"../pages/rain/T-rain/S/dam-s/dam-s.module": [
		328,
		0
	],
	"../pages/rain/T-rain/S/rafting-s/rafting-s.module": [
		329,
		11
	],
	"../pages/rain/T-rain/W/suan-phung-w/suan-phung-w.module": [
		330,
		10
	],
	"../pages/rain/T-rain/W/thongphaphum-w/thongphaphum-w.module": [
		331,
		9
	],
	"../pages/summer/Summer-Page/C/canal-c/canal-c.module": [
		332,
		8
	],
	"../pages/summer/Summer-Page/E/three-thousand-e/three-thousand-e.module": [
		334,
		7
	],
	"../pages/summer/Summer-Page/N/barleyfield-n/barleyfield-n.module": [
		333,
		6
	],
	"../pages/summer/Summer-Page/S/island-s/island-s.module": [
		335,
		5
	],
	"../pages/summer/Summer-Page/S/sea-s/sea-s.module": [
		336,
		4
	],
	"../pages/summer/Summer-Page/W/huai-leng-w/huai-leng-w.module": [
		338,
		3
	],
	"../pages/summer/Summer-Page/W/khao-ngao-w/khao-ngao-w.module": [
		337,
		2
	],
	"../pages/summer/summer.module": [
		339,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 152;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__North_North__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Central_Central__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__East_East__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__NorthEast_NorthEast__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Southern_Southern__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.openNorthPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__North_North__["a" /* NorthPage */]);
    };
    HomePage.prototype.openCentralPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__Central_Central__["a" /* CentralPage */]);
    };
    HomePage.prototype.openEastPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__East_East__["a" /* EastPage */]);
    };
    HomePage.prototype.openNorthEastPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__NorthEast_NorthEast__["a" /* NorthEastPage */]);
    };
    HomePage.prototype.openSouthernPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__Southern_Southern__["a" /* SouthernPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\RADAR\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="ios-apps"></ion-icon>\n      <h5>Menu</h5>\n    </button>\n    <ion-title>Weather Today</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<iframe src="https://www.powr.io/plugins/weather/view?unique_label=0cf671fa_1538916916&external_type=iframe"  frameborder="0" scrolling="NO" allowtransparency="true" sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox" style="width: 390px;height: 1300px"></iframe><div></div>\n \n\n        <ion-item>\n          <ion-label>ลมทางภาคเหนือ</ion-label>\n          <ion-toggle [(ngModel)]="WindNorth"></ion-toggle>\n        </ion-item>\n        <ion-card *ngIf = "WindNorth">\n            <ion-card-header>\n              <ion-title>ลมทางภาคเหนือ</ion-title>\n            </ion-card-header>\n            <ion-card-content>\n              <iframe src="https://earth.nullschool.net/#current/wind/surface/level/orthographic=-260.87,17.71,3000/loc=99.195,18.044"height="400" width="300"frameborder="0"scrolling="no"align="left">\n              </iframe>\n            </ion-card-content>\n          </ion-card>\n\n            <h2>ภาคเหนือ</h2>\n            <p><button ion-button full (click)="openNorthPage()" >สภาพอากาศ (ภาคเหนือ)</button></p>    \n        \n\n      <ion-item>\n          <ion-label>ลมภาคกลาง-ตะวันออก</ion-label>\n          <ion-toggle [(ngModel)]="WindCenter"></ion-toggle>\n        </ion-item>\n        <ion-card *ngIf="WindCenter">\n            <ion-card-header>\n              <ion-title>ลมภาคกลาง-ตะวันออก</ion-title>\n            </ion-card-header>\n            <ion-card-content>\n                <iframe src="https://earth.nullschool.net/#current/wind/surface/level/orthographic=-259.51,13.07,3000/loc=100.354,13.632"height="400" width="300"frameborder="0"scrolling="no"align="left">\n                </iframe>\n            </ion-card-content>\n          </ion-card>\n            <h2>ภาคกลาง-ตะวันออก</h2>\n            <p><button ion-button full (click)="openCentralPage()">สภาพอากาศ (ภาคกลาง)</button></p>    \n            <p><button ion-button full (click)="openEastPage()">สภาพอากาศ (ภาคตะวันออก)</button></p> \n\n            <ion-item>\n                <ion-label>ลมภาคตะวันออกเฉียงเหนือ</ion-label>\n                <ion-toggle [(ngModel)]="WindNorthEast"></ion-toggle>\n              </ion-item>\n              <ion-card *ngIf="WindNorthEast">\n                  <ion-card-header>\n                    <ion-title>ลมภาคตะวันออกเฉียงเหนือ</ion-title>\n                  </ion-card-header>\n                  <ion-card-content>\n                      <iframe src="https://earth.nullschool.net/#current/wind/surface/level/orthographic=-257.17,16.53,3000/loc=103.016,16.430"height="400" width="300"frameborder="0"scrolling="no"align="left">\n                      </iframe>\n                  </ion-card-content>\n                </ion-card>\n\n            <h2>ภาคตะวันออกเฉียงเหนือ</h2>\n            <p><button ion-button full (click)="openNorthEastPage()">สภาพอากาศ (ภาคตะวันออกเฉียงเหนือ)</button></p>\n\n            <ion-item>\n                <ion-label>ลมภาคใต้</ion-label>\n                <ion-toggle [(ngModel)]="WindSouthern"></ion-toggle>\n              </ion-item>\n              <ion-card *ngIf = "WindSouthern" >\n                  <ion-card-header>\n                    <ion-title>ลมภาคใต้</ion-title>\n                  </ion-card-header>\n                  <ion-card-content>\n                      <iframe src="https://earth.nullschool.net/#current/wind/surface/level/orthographic=-260.09,8.21,3000/loc=99.910,7.928"height="400" width="300"frameborder="0"scrolling="no"align="left">\n                      </iframe>\n                  </ion-card-content>\n                </ion-card>\n\n            <h2>ภาคใต้</h2>\n            <p><button ion-button full (click)="openSouthernPage()">สภาพอากาศ (ภาคใต้)</button></p> \n        \n       \n      \n     \n   \n  \n  \n\n  \n</ion-content>\n'/*ion-inline-end:"D:\RADAR\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NorthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the North page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NorthPage = /** @class */ (function () {
    function NorthPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.radaromkoi = false;
    }
    NorthPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-North',template:/*ion-inline-start:"D:\RADAR\src\pages\North\North.html"*/'<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>North</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n    \n      \n  <div class="container">\n    <iframe src="https://maps.darksky.net/@precipitation_rate,18.771,99.303,7?marker=18.81,98.957&linkto=maps" \n    frameborder="0" allowfullscreen class="video"></iframe>\n  </div>\n\n \n</ion-content>\n\n \n\n    \n'/*ion-inline-end:"D:\RADAR\src\pages\North\North.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], NorthPage);
    return NorthPage;
}());

//# sourceMappingURL=North.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CentralPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the Center page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CentralPage = /** @class */ (function () {
    function CentralPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    CentralPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-Central',template:/*ion-inline-start:"D:\RADAR\src\pages\Central\Central.html"*/'\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n      <ion-title>Central</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content padding>\n\n      \n\n\n\n  \n\n  \n\n  <div class="container">\n\n    <iframe src="https://maps.darksky.net/@precipitation_rate,14.433,100.404,8?marker=18.81,98.957&linkto=maps" \n\n    frameborder="0" allowfullscreen class="video"></iframe>\n\n    </div>\n\n  </ion-content>\n\n  '/*ion-inline-end:"D:\RADAR\src\pages\Central\Central.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], CentralPage);
    return CentralPage;
}());

//# sourceMappingURL=Central.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EastPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the East page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EastPage = /** @class */ (function () {
    function EastPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    EastPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-East',template:/*ion-inline-start:"D:\RADAR\src\pages\East\East.html"*/'\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n      <ion-title>East</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content padding>\n\n      \n\n  \n\n  \n\n  <div class="container">\n\n    <iframe src="https://maps.darksky.net/@precipitation_rate,13.368,101.853,8?marker=18.81,98.957&linkto=maps" \n\n    frameborder="0" allowfullscreen class="video"></iframe>\n\n    </div>\n\n  </ion-content>\n\n  '/*ion-inline-end:"D:\RADAR\src\pages\East\East.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], EastPage);
    return EastPage;
}());

//# sourceMappingURL=East.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NorthEastPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NorthEast page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NorthEastPage = /** @class */ (function () {
    function NorthEastPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    NorthEastPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-NorthEast',template:/*ion-inline-start:"D:\RADAR\src\pages\NorthEast\NorthEast.html"*/'\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n      <ion-title>NorthEast</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content padding>\n\n\n\n  \n\n  \n\n  <div class="container">\n\n    <iframe src="https://maps.darksky.net/@precipitation_rate,15.934,103.032,7?marker=18.81,98.957&linkto=maps" \n\n    frameborder="0" allowfullscreen class="video"></iframe>\n\n    </div>\n\n  </ion-content>\n\n  '/*ion-inline-end:"D:\RADAR\src\pages\NorthEast\NorthEast.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], NorthEastPage);
    return NorthEastPage;
}());

//# sourceMappingURL=NorthEast.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SouthernPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SouthernPage.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SouthernPage = /** @class */ (function () {
    function SouthernPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SouthernPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-SouthernPage',template:/*ion-inline-start:"D:\RADAR\src\pages\Southern\SouthernPage.html"*/'\n\n<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n      <ion-title>SouthernPage</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  <ion-content padding>\n\n  <div class="container">\n\n    <iframe src="https://maps.darksky.net/@precipitation_rate,10.326,98.996,7?marker=18.81,98.957&linkto=maps" \n\n    frameborder="0" allowfullscreen class="video"></iframe>\n\n    </div>\n\n  </ion-content>\n\n  '/*ion-inline-end:"D:\RADAR\src\pages\Southern\SouthernPage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], SouthernPage);
    return SouthernPage;
}());

//# sourceMappingURL=Southern.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TouristPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__summer_summer__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tourist_winter_tourist_winter__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rain_rain__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TouristPage = /** @class */ (function () {
    function TouristPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    TouristPage.prototype.openTouristWinterPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tourist_winter_tourist_winter__["a" /* TouristWinterPage */]);
    };
    TouristPage.prototype.openRainPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__rain_rain__["a" /* RainPage */]);
    };
    TouristPage.prototype.openSummerPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__summer_summer__["a" /* SummerPage */]);
    };
    TouristPage.prototype.openUrl = function () {
        window.open('https://www.facebook.com/', '_system');
    };
    TouristPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-Tourist',template:/*ion-inline-start:"D:\RADAR\src\pages\Tourist\Tourist.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title align-title="center">Tourist</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n    \n<ion-list>\n    <ion-card-header>\n        <h1>Sugget Travel !!</h1> \n    </ion-card-header>\n    <ion-card>\n      <ion-card-content>\n        <h1>Radar Today !!</h1>\n            <!-- weather widget start --><a target="_blank" href="https://www.booked.net/weather/chiang-mai-26834"><img src="https://w.bookcdn.com/weather/picture/3_26834_1_1_137AE9_430_ffffff_333333_08488D_1_ffffff_333333_0_6.png?scode=124&domid=w209&anc_id=95073"  alt="booked.net"/></a><!-- weather widget end -->\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <div (click)="openTouristWinterPage()">\n        <img src="https://scontent-fbkk5-7.us-fbcdn.net/v1/t.1-48/1426l78O9684I4108ZPH0J4S8_842023153_K1DlXQOI5DHP/dskvvc.qpjhg.xmwo/p/data/265/265354-5377de6bdcb33.jpg"  alt="" sizes="" srcset="">\n        <div class="card-title">Winter Season</div></div>\n    </ion-card>\n\n    <ion-card>\n        <div (click)="openRainPage()">\n        <img src="https://www.metoffice.gov.uk/binaries/content/gallery/mohippo/images/migrated-image/j/tropical_monsoon.jpg" alt="" sizes="" srcset="">\n        <div class="card-title">Rainy Season </div></div>\n    </ion-card>\n\n    <ion-card>\n      <div (click)="openSummerPage()">\n        <img src="http://watchlab.com/blog/wp-content/uploads/2014/09/summer.jpg" alt="" sizes="" srcset="">\n        <div class="card-title">Summer Season</div></div>\n    </ion-card>\n  </ion-list>\n  \n</ion-content>\n'/*ion-inline-end:"D:\RADAR\src\pages\Tourist\Tourist.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */]])
    ], TouristPage);
    return TouristPage;
}());

//# sourceMappingURL=Tourist.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TouristWinterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_winter_North_huai_nam_dang_huai_nam_dang__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page_winter_North_doi_inthanon_doi_inthanon__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_winter_North_doi_ang_khang_doi_ang_khang__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_winter_North_phu_chi_fa_phu_chi_fa__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page_winter_North_pang_ung_pang_ung__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_winter_North_pai_pai__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page_winter_North_mon_jung_mon_jung__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__page_winter_North_mon_cham_mon_cham__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__page_winter_North_singha_park_singha_park__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__page_winter_North_golden_golden__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__page_winter_North_doi_pha_hom_pok_doi_pha_hom_pok__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__page_winter_North_doi_wao_doi_wao__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__page_winter_North_doi_chiang_dao_doi_chiang_dao__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__page_winter_Central_khao_kho_khao_kho__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__page_winter_Central_phu_soi_dao_phu_soi_dao__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__page_winter_Central_mongo_mongo__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__page_winter_North_East_phu_hin_rong_kla_phu_hin_rong_kla__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__page_winter_North_East_phu_kradueng_phu_kradueng__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__page_winter_North_East_phu_ruea_phu_ruea__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__page_winter_North_East_phu_pao_forest_phu_pao_forest__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__page_winter_Northeastern_pha_cha_chan_pha_cha_chan__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__page_winter_West_cloud_bridge_at_khao_chang_phuak_cloud_bridge_at_khao_chang_phuak__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__page_winter_Southern_keeree_wong_keeree_wong__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


























/**
 * Generated class for the TouristWinterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TouristWinterPage = /** @class */ (function () {
    function TouristWinterPage(navCtrl, platform) {
        this.navCtrl = navCtrl;
        this.direction = "North";
        this.isAndroid = true;
        this.isAndroid = platform.is('android');
    }
    TouristWinterPage.prototype.openDoiInthanonPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__page_winter_North_doi_inthanon_doi_inthanon__["a" /* DoiInthanonPage */]);
    };
    TouristWinterPage.prototype.openDoiAngKhangPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__page_winter_North_doi_ang_khang_doi_ang_khang__["a" /* DoiAngKhangPage */]);
    };
    TouristWinterPage.prototype.openHuaiNamDangPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__page_winter_North_huai_nam_dang_huai_nam_dang__["a" /* HuaiNamDangPage */]);
    };
    TouristWinterPage.prototype.openPhuChiFaPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__page_winter_North_phu_chi_fa_phu_chi_fa__["a" /* PhuChiFaPage */]);
    };
    TouristWinterPage.prototype.openPangUngPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__page_winter_North_pang_ung_pang_ung__["a" /* PangUngPage */]);
    };
    TouristWinterPage.prototype.openPaiPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__page_winter_North_pai_pai__["a" /* PaiPage */]);
    };
    TouristWinterPage.prototype.openMonJungPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__page_winter_North_mon_jung_mon_jung__["a" /* MonJungPage */]);
    };
    TouristWinterPage.prototype.openMonChamPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__page_winter_North_mon_cham_mon_cham__["a" /* MonChamPage */]);
    };
    TouristWinterPage.prototype.openSinghaParkPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__page_winter_North_singha_park_singha_park__["a" /* SinghaParkPage */]);
    };
    TouristWinterPage.prototype.openGoldenPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__page_winter_North_golden_golden__["a" /* GoldenPage */]);
    };
    TouristWinterPage.prototype.openDoiPhaHomPokPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__page_winter_North_doi_pha_hom_pok_doi_pha_hom_pok__["a" /* DoiPhaHomPokPage */]);
    };
    TouristWinterPage.prototype.openDoiWaoPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__page_winter_North_doi_wao_doi_wao__["a" /* DoiWaoPage */]);
    };
    TouristWinterPage.prototype.openDoiChiangDaoPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__page_winter_North_doi_chiang_dao_doi_chiang_dao__["a" /* DoiChiangDaoPage */]);
    };
    TouristWinterPage.prototype.openKhaoKhoPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__page_winter_Central_khao_kho_khao_kho__["a" /* KhaoKhoPage */]);
    };
    TouristWinterPage.prototype.openPhuSoiDaoPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__page_winter_Central_phu_soi_dao_phu_soi_dao__["a" /* PhuSoiDaoPage */]);
    };
    TouristWinterPage.prototype.openMongoPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__page_winter_Central_mongo_mongo__["a" /* MongoPage */]);
    };
    TouristWinterPage.prototype.openPhuHinRongKlaPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_16__page_winter_North_East_phu_hin_rong_kla_phu_hin_rong_kla__["a" /* PhuHinRongKlaPage */]);
    };
    TouristWinterPage.prototype.openPhuKraduengPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_17__page_winter_North_East_phu_kradueng_phu_kradueng__["a" /* PhuKraduengPage */]);
    };
    TouristWinterPage.prototype.openPhuRueaPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_18__page_winter_North_East_phu_ruea_phu_ruea__["a" /* PhuRueaPage */]);
    };
    TouristWinterPage.prototype.openPhuPaoForestPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_19__page_winter_North_East_phu_pao_forest_phu_pao_forest__["a" /* PhuPaoForestPage */]);
    };
    TouristWinterPage.prototype.openPhaChaChanPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_20__page_winter_Northeastern_pha_cha_chan_pha_cha_chan__["a" /* PhaChaChanPage */]);
    };
    TouristWinterPage.prototype.openCloudBridgeAtKhaoChangPhuakPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_21__page_winter_West_cloud_bridge_at_khao_chang_phuak_cloud_bridge_at_khao_chang_phuak__["a" /* CloudBridgeAtKhaoChangPhuakPage */]);
    };
    TouristWinterPage.prototype.openKeereeWongPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_22__page_winter_Southern_keeree_wong_keeree_wong__["a" /* KeereeWongPage */]);
    };
    TouristWinterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_23__angular_core__["m" /* Component */])({
            selector: 'page-tourist-winter',template:/*ion-inline-start:"D:\RADAR\src\pages\tourist-winter\tourist-winter.html"*/'<ion-header>\n\n        <ion-navbar>\n\n          <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n          <ion-title align-title="center" >Winter Season</ion-title>\n\n        </ion-navbar>\n\n\n\n        <ion-toolbar no-border-top>\n\n                <ion-segment [(ngModel)]="direction">\n\n                  <ion-segment-button value="North">\n\n                    ภาคเหนือ\n\n                  </ion-segment-button>\n\n                  <ion-segment-button value="Central">\n\n                    ภาคกลาง\n\n                  </ion-segment-button>\n\n                  <ion-segment-button value="East">\n\n                    ภาคตะวันออก\n\n                  </ion-segment-button>\n\n                  <ion-segment-button value="West">\n\n                    ภาคตะวันตก\n\n                  </ion-segment-button>\n\n              <ion-segment-button value="Southern">\n\n                    ภาคใต้\n\n                  </ion-segment-button>\n\n                </ion-segment>\n\n            </ion-toolbar>\n\n      </ion-header>\n\n  \n\n\n\n    <ion-content>\n\n            \n\n        <ion-card>     \n\n            <ion-item-group>\n\n                <div [ngSwitch]="direction">\n\n                <ion-list *ngSwitchCase="\'North\'">\n\n                <div (click)="openDoiInthanonPage()">\n\n                <ion-item>\n\n                    <ion-thumbnail item-start>\n\n                        <img src="https://travel.mthai.com/app/uploads/2013/09/20130226114733.jpg">\n\n                      </ion-thumbnail>\n\n                      <h2 item-start>อุทยานแห่งชาติดอยอินทนนท์ <p>Doi Inthanon National Park</p><p> อ.จอมทอง จ.เชียงใหม่</p></h2>\n\n                </ion-item></div>\n\n\n\n                <div (click)="openDoiAngKhangPage()">\n\n                <ion-item>\n\n                    <ion-thumbnail item-start>\n\n                        <img src="https://travel.mthai.com/app/uploads/2013/09/7314290908_f6138189c5_o.jpg">\n\n                      </ion-thumbnail>\n\n                      <h2 item-start clear >ดอยอ่างขาง <p>Doi Ang Khang</p><p>อ.ฝาง จ.เชียงใหม่</p></h2>\n\n                </ion-item></div>\n\n\n\n                <div (click)="openHuaiNamDangPage()">\n\n                <ion-item>\n\n                    <ion-thumbnail item-start>\n\n                        <img src="https://travel.mthai.com/app/uploads/2013/09/huaynamdung1.jpg">\n\n                      </ion-thumbnail>\n\n                      <h2 item-start >อุทยานแห่งชาติห้วยน้ำดัง <p>Huai Nam Dang National Park</p><p>อ.แม่แตง จ.เชียงใหม่</p></h2>\n\n                </ion-item></div>\n\n\n\n                <div (click)="openPhuChiFaPage()">\n\n                <ion-item>\n\n                    <ion-thumbnail item-start>\n\n                        <img src="https://travel.mthai.com/app/uploads/2013/09/848676.jpg">\n\n                      </ion-thumbnail>\n\n                      <h2 item-start >ภูชี้ฟ้า-ผาตั้ง <p>Phu Chi Fa National Park</p><p>อ.เทิง จ.เชียงราย</p></h2>\n\n                </ion-item></div>\n\n\n\n                <div (click)="openPangUngPage()">\n\n                <ion-item>\n\n                    <ion-thumbnail item-start>\n\n                        <img src="https://travel.mthai.com/app/uploads/2013/09/pang-ung-reservoir1.jpg">\n\n                      </ion-thumbnail>\n\n                      <h2 item-start >ปางอุ๋ง<p>Pang Ung</p><p>อ.เมืองแม่ฮ่องสอน จ.แม่ฮ่องสอน</p></h2>\n\n                    </ion-item></div>\n\n                </ion-list></div>\n\n                \n\n                <div [ngSwitch]="direction">\n\n                        <ion-list *ngSwitchCase="\'Central\'">\n\n                        <div (click)="openKhaoKhoPage()">\n\n                        <ion-item>\n\n                            <ion-thumbnail item-start>\n\n                                <img src="https://travel.mthai.com/app/uploads/2013/09/2741-attachment.jpg"> \n\n                            </ion-thumbnail>\n\n                            <h2 item-start>เขาค้อ – อุทยานแห่งชาติน้ำหนาว<p>Khao Kho</p><p>อ.เขาค้อ จ.เพชรบูรณ์</p></h2>\n\n                        </ion-item></div>\n\n        \n\n                        <div (click)="openPhuSoiDaoPage()">\n\n                        <ion-item>\n\n                            <ion-thumbnail item-start>\n\n                                <img src="https://travel.mthai.com/app/uploads/2013/09/%E0%B8%A0%E0%B8%B9%E0%B8%AA%E0%B8%AD%E0%B8%A2%E0%B8%94%E0%B8%B2%E0%B8%A71.jpg"> \n\n                            </ion-thumbnail>\n\n                            <h2 item-start>อุทยานแห่งชาติภูสอยดาว<p>Phu Soi Dao National Park</p><p>อ.บ้านโคก อ.น้ำปาด จ.อุตรดิตถ์ อ.ชาติตระการ จ.พิษณุโลก</p></h2>\n\n                        </ion-item></div>\n\n        \n\n                        <div (click)="openMongoPage()">\n\n                        <ion-item>\n\n                            <ion-thumbnail item-start>\n\n                                <img src="https://travel.mthai.com/app/uploads/2013/09/12091-attachment.jpg"> \n\n                            </ion-thumbnail>\n\n                            <h2 item-start>โมโกจู อุทยานแห่งชาติแม่วงก์<p>จ.นครสวรรค์ และ จ.กำแพงเพชร</p></h2>\n\n                        </ion-item></div>\n\n                    </ion-list></div>\n\n\n\n            <div [ngSwitch]="direction">\n\n                <ion-list *ngSwitchCase="\'East\'">\n\n                <ion-item-divider color="light">ภาคตะวันออกเฉียงเหนือ</ion-item-divider>\n\n                <div (click)="openPhuHinRongKlaPage()">\n\n                <ion-item>\n\n                    <ion-thumbnail item-start>\n\n                        <img src="https://travel.mthai.com/app/uploads/2013/09/baan-rongkla7.jpg"> \n\n                    </ion-thumbnail>\n\n                    <h2 item-start>อุทยานแห่งชาติภูหินร่องกล้า<p>Phu Hin Rong Kla National Park</p><p>จ.พิษณุโลก</p></h2>\n\n                </ion-item></div>\n\n\n\n                <div (click)="openPhuKraduengPage()">\n\n                <ion-item>\n\n                    <ion-thumbnail item-start>\n\n                        <img src="https://travel.mthai.com/app/uploads/2013/09/phukradung1.jpg"> \n\n                    </ion-thumbnail>\n\n                    <h2 item-start>อุทยานแห่งชาติภูกระดึง <p>Phu Kradueng</p><p>อ.ภูกระดึง จ.เลย</p></h2>\n\n                </ion-item></div>\n\n\n\n                <ion-item-divider color="light">ภาคตะวันออกเฉียงเหนือตอนล่าง</ion-item-divider>\n\n                <div (click)="openPhaChaChanPage()">\n\n                <ion-item>\n\n                    <ion-thumbnail item-start>\n\n                        <img src="https://travel.mthai.com/app/uploads/2013/09/phachanadai4.jpg"> \n\n                    </ion-thumbnail>\n\n                    <h2 item-start>ผาชะนะได อุทยานแห่งชาติผาแต้ม<p>อ.โขงเจียม จ.อุบลราชธานี</p><p></p></h2>\n\n                </ion-item></div>\n\n            </ion-list></div>\n\n\n\n            <div [ngSwitch]="direction">\n\n                <ion-list *ngSwitchCase="\'West\'">\n\n                <div (click)="openCloudBridgeAtKhaoChangPhuakPage()">\n\n                <ion-item>\n\n                    <ion-thumbnail item-start>\n\n                        <img src="https://travel.mthai.com/app/uploads/2013/10/132.jpg"> \n\n                    </ion-thumbnail>\n\n                    <h2 item-start>สะพานเมฆ ณ เขาช้างเผือก<p>อ.ทองผาภูมิ จ. กาญจนบุรี</p></h2>\n\n                </ion-item></div>\n\n            </ion-list></div>\n\n                \n\n            <div [ngSwitch]="direction">\n\n                <ion-list *ngSwitchCase="\'Southern\'">\n\n                <div (click)="openKeereeWongPage()">\n\n                <ion-item>\n\n                    <ion-thumbnail item-start>\n\n                        <img src="https://travel.mthai.com/app/uploads/2013/09/617873523.jpg"> \n\n                    </ion-thumbnail>\n\n                    <h2 item-start>หมู่บ้านคีรีวง<p>อ.ลานสกา จ. นครศรีธรรมราช</p></h2>\n\n                </ion-item></div>\n\n            </ion-list></div>\n\n\n\n            </ion-item-group>\n\n          </ion-card>\n\n\n\n    \n\n    </ion-content>\n\n\n\n    \n\n  \n\n      \n\n      '/*ion-inline-end:"D:\RADAR\src\pages\tourist-winter\tourist-winter.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_24_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_24_ionic_angular__["i" /* Platform */]])
    ], TouristWinterPage);
    return TouristWinterPage;
}());

//# sourceMappingURL=tourist-winter.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__T_rain_C_khao_yai_c_khao_yai_c__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__T_rain_C_river_c_river_c__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__T_rain_E_chiang_khan_e_chiang_khan_e__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__T_rain_E_flowers_e_flowers_e__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__T_rain_N_pai_cm_pai_cm__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__T_rain_N_tee_lor_su_waterfall_tee_lor_su_waterfall__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__T_rain_s_dam_s_dam_s__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__T_rain_S_rafting_s_rafting_s__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__T_rain_W_suan_phung_w_suan_phung_w__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__T_rain_W_thongphaphum_w_thongphaphum_w__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













/**
 * Generated class for the RainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RainPage = /** @class */ (function () {
    function RainPage(navCtrl, platform) {
        this.navCtrl = navCtrl;
        this.direction = "North";
        this.isAndroid = true;
        this.isAndroid = platform.is('android');
    }
    RainPage.prototype.KhaoYaiCPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__T_rain_C_khao_yai_c_khao_yai_c__["a" /* KhaoYaiCPage */]);
    };
    RainPage.prototype.RiverCPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__T_rain_C_river_c_river_c__["a" /* RiverCPage */]);
    };
    RainPage.prototype.ChiangKhanEPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__T_rain_E_chiang_khan_e_chiang_khan_e__["a" /* ChiangKhanEPage */]);
    };
    RainPage.prototype.FlowersEPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__T_rain_E_flowers_e_flowers_e__["a" /* FlowersEPage */]);
    };
    RainPage.prototype.PaiCmPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__T_rain_N_pai_cm_pai_cm__["a" /* PaiCmPage */]);
    };
    RainPage.prototype.TeeLorSuWaterfallPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__T_rain_N_tee_lor_su_waterfall_tee_lor_su_waterfall__["a" /* TeeLorSuWaterfallPage */]);
    };
    RainPage.prototype.DamSPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__T_rain_s_dam_s_dam_s__["a" /* DamSPage */]);
    };
    RainPage.prototype.RaftingSPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__T_rain_S_rafting_s_rafting_s__["a" /* RaftingSPage */]);
    };
    RainPage.prototype.SuanPhungWPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__T_rain_W_suan_phung_w_suan_phung_w__["a" /* SuanPhungWPage */]);
    };
    RainPage.prototype.ThongphaphumWPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__T_rain_W_thongphaphum_w_thongphaphum_w__["a" /* ThongphaphumWPage */]);
    };
    RainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rain',template:/*ion-inline-start:"D:\RADAR\src\pages\rain\rain.html"*/'<!--\n  Generated template for the RainPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title align-title="center">Rain Season</ion-title>\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="direction">\n      <ion-segment-button value="North">\n        ภาคเหนือ\n      </ion-segment-button>\n      <ion-segment-button value="Central">\n        ภาคกลาง\n      </ion-segment-button>\n      <ion-segment-button value="East">\n        ภาคตะวันออก\n      </ion-segment-button>\n      <ion-segment-button value="West">\n        ภาคตะวันตก\n      </ion-segment-button>\n  <ion-segment-button value="Southern">\n        ภาคใต้\n      </ion-segment-button>\n    </ion-segment>\n</ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>     \n    <ion-item-group>\n        <div [ngSwitch]="direction">\n        <ion-list *ngSwitchCase="\'North\'">\n        <div (click)="TeeLorSuWaterfallPage()">\n        <ion-item>\n            <ion-thumbnail item-start>\n                <img src="http://umphangcountryhut.com/wp-content/uploads/2016/11/0t-595x400.jpg">\n              </ion-thumbnail>\n              <h2 item-start>น้ำตกทีลอซู <p>TEE LOR SU WATERFALL</p><p>จ.ตาก</p></h2>\n        </ion-item></div>\n\n        <div (click)="PaiCmPage()">\n        <ion-item>\n            <ion-thumbnail item-start>\n                <img src="https://s25910.pcdn.co/wp-content/uploads/2017/01/Early-Sunrise-Drone-2.1.jpg">\n              </ion-thumbnail>\n              <h2 item-start clear >ปาย<p>Pai</p><p>จ.เชียงใหม่</p></h2>\n        </ion-item></div>\n        </ion-list></div>\n        \n        <div [ngSwitch]="direction">\n                <ion-list *ngSwitchCase="\'Southern\'">\n                <div (click)="DamSPage()">\n                <ion-item>\n                    <ion-thumbnail item-start>\n                        <img src="http://rpb.egat.com/images/PR/6-tile.jpg"> \n                    </ion-thumbnail>\n                    <h2 item-start>เขื่อนรัชชประภา<p>Ratchaprapa Dam</p><p>จังหวัดสุราษฎร์ธานี</p></h2>\n                </ion-item></div>\n\n                <div (click)="RaftingSPage()">\n                <ion-item>\n                    <ion-thumbnail item-start>\n                        <img src="https://travel.mthai.com/app/uploads/2014/06/%E0%B8%A5%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B9%81%E0%B8%9E%E0%B8%9E%E0%B8%B0%E0%B9%82%E0%B8%95%E0%B9%8A%E0%B8%B0.jpg"> \n                    </ion-thumbnail>\n                    <h2 item-start>ล่องแพ อำเภอพะโต๊ะ<p>จังหวัดชุมพร</p></h2>\n                </ion-item></div>\n            </ion-list></div>\n\n    <div [ngSwitch]="direction">\n        <ion-list *ngSwitchCase="\'East\'">\n        <div (click)="FlowersEPage()">\n        <ion-item>\n            <ion-thumbnail item-start>\n                <img src="http://thaifest.tourismthailand.org/uploads/201805/20180524145216.jpg"> \n            </ion-thumbnail>\n            <h2 item-start>ทุ่งดอกกระเจียว<p>จังหวัดชัยภูมิ</p></h2>\n        </ion-item></div>\n\n        <div (click)="ChiangKhanEPage()">\n        <ion-item>\n            <ion-thumbnail item-start>\n                <img src="https://cms.kapook.com/uploads/tag/2/ID_1325_57a30d92c0d24.jpg"> \n            </ion-thumbnail>\n            <h2 item-start>เชียงคาน<p>จังหวัดเลย</p></h2>\n        </ion-item></div>\n    </ion-list></div>\n\n    <div [ngSwitch]="direction">\n        <ion-list *ngSwitchCase="\'West\'">\n        <div (click)="ThongphaphumWPage()">\n        <ion-item>\n            <ion-thumbnail item-start>\n                <img src="http://www.xn--72c5aba9c2a3b8a2m8ae.com/wp-content/uploads/2015/09/tongpaphumnation-03.jpg"> \n            </ion-thumbnail>\n            <h2 item-start>อำเภอทองผาภูมิ<p>จังหวัดกาญจนบุรี</p></h2>\n        </ion-item></div>\n\n        <div (click)="SuanPhungWPage()">\n          <ion-item>\n              <ion-thumbnail item-start>\n                  <img src="https://s.isanook.com/tr/0/ud/190/951595/d78922ca346db8cf5b31b2a17a9b64ed.jpg"> \n              </ion-thumbnail>\n              <h2 item-start>สวนผึ้ง <p>จังหวัดราชบุรี</p></h2>\n          </ion-item></div>\n    </ion-list></div>\n        \n    <div [ngSwitch]="direction">\n        <ion-list *ngSwitchCase="\'Central\'">\n        <div (click)="RiverCPage()">\n        <ion-item>\n            <ion-thumbnail item-start>\n                <img src="https://travel.mthai.com/app/uploads/2014/06/100527171412_01.jpg"> \n            </ion-thumbnail>\n            <h2 item-start>ล่องแก่งลำน้ำเข็ก <p>จังหวัดพิษณุโลก</p></h2>\n        </ion-item></div>\n\n        <div (click)="KhaoYaiCPage()">\n          <ion-item>\n              <ion-thumbnail item-start>\n                  <img src="http://park.dnp.go.th/dnp/ptascene/1001scene030216_92502.jpg"> \n              </ion-thumbnail>\n              <h2 item-start>อุทยานแห่งชาติเขาใหญ่</h2>\n          </ion-item></div>\n\n        \n    </ion-list></div>\n\n    </ion-item-group>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"D:\RADAR\src\pages\rain\rain.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]])
    ], RainPage);
    return RainPage;
}());

//# sourceMappingURL=rain.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FarmerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PageSeason_FarmerRainy_FarmerRainy__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PageSeason_FarmerSummer_FarmerSummer__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__PageSeason_FarmerWinter_FarmerWinter__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FarmerPage = /** @class */ (function () {
    function FarmerPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.VeggiesandFruits = false;
    }
    FarmerPage.prototype.openFarmerRainyPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__PageSeason_FarmerRainy_FarmerRainy__["a" /* FarmerRainyPage */]);
    };
    FarmerPage.prototype.openFarmerSummerPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__PageSeason_FarmerSummer_FarmerSummer__["a" /* FarmerSummerPage */]);
    };
    FarmerPage.prototype.openFarmerWinterPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__PageSeason_FarmerWinter_FarmerWinter__["a" /* FarmerwinterPage */]);
    };
    FarmerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__PageSeason_FarmerRainy_FarmerRainy__["a" /* FarmerRainyPage */],
                __WEBPACK_IMPORTED_MODULE_3__PageSeason_FarmerSummer_FarmerSummer__["a" /* FarmerSummerPage */],
                __WEBPACK_IMPORTED_MODULE_4__PageSeason_FarmerWinter_FarmerWinter__["a" /* FarmerwinterPage */]
            ],
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-farmer',template:/*ion-inline-start:"D:\RADAR\src\pages\farmer\farmer.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="ios-apps"></ion-icon>\n      <h5>Menu</h5>\n    </button>\n    <ion-title>Farmer</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Farmer Today</h3>\n  <iframe src="https://www.meteoblue.com/en/weather/widget/daily/chiang-mai_thailand_1153671?geoloc=fixed&days=4&tempunit=CELSIUS&windunit=KILOMETER_PER_HOUR&precipunit=MILLIMETER&coloured=coloured&pictoicon=0&pictoicon=1&maxtemperature=0&maxtemperature=1&mintemperature=0&mintemperature=1&windspeed=0&windspeed=1&windgust=0&winddirection=0&winddirection=1&uv=0&uv=1&humidity=0&precipitation=0&precipitation=1&precipitationprobability=0&precipitationprobability=1&spot=0&spot=1&pressure=0&layout=light"  frameborder="0" scrolling="NO" allowtransparency="true" sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox" style="width: 380px;height: 480px"></iframe><div><!-- DO NOT REMOVE THIS LINK --><a href="https://www.meteoblue.com/en/weather/forecast/week/chiang-mai_thailand_1153671?utm_source=weather_widget&utm_medium=linkus&utm_content=daily&utm_campaign=Weather%2BWidget" target="_blank">meteoblue</a></div>\n  <ion-title>*สามารถดูปริมาณฝนได้จากหยดน้ำ</ion-title>\n  <br>\n  <ion-item>\n    <ion-label>แนะนำการปลูก</ion-label>\n    <ion-toggle [(ngModel)]="VeggiesandFruits"></ion-toggle>\n  </ion-item>\n  <ion-list *ngIf = "VeggiesandFruits">\n    <ion-list-header>\n        <h1>ผักและผลไม้ในแต่ละฤดู</h1> \n    </ion-list-header>\n    <ion-card>\n        <div (click)="openFarmerWinterPage()">\n        <img src="https://scontent-fbkk5-7.us-fbcdn.net/v1/t.1-48/1426l78O9684I4108ZPH0J4S8_842023153_K1DlXQOI5DHP/dskvvc.qpjhg.xmwo/p/data/265/265354-5377de6bdcb33.jpg"  alt="" sizes="" srcset="">\n        <div class="card-title">Winter Season</div></div>\n    </ion-card>\n\n    <ion-card>\n        <div (click)="openFarmerRainyPage()">\n        <img src="https://www.metoffice.gov.uk/binaries/content/gallery/mohippo/images/migrated-image/j/tropical_monsoon.jpg" alt="" sizes="" srcset="">\n        <div class="card-title">Rainy Season </div></div>\n    </ion-card>\n\n    <ion-card>\n      <div (click)="openFarmerSummerPage()">\n        <img src="http://watchlab.com/blog/wp-content/uploads/2014/09/summer.jpg" alt="" sizes="" srcset="">\n        <div class="card-title">Summer Season</div></div>\n    </ion-card>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\RADAR\src\pages\farmer\farmer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], FarmerPage);
    return FarmerPage;
}());

//# sourceMappingURL=farmer.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FarmerRainyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FarmerRainyPage = /** @class */ (function () {
    function FarmerRainyPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    FarmerRainyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-FarmerRainy',template:/*ion-inline-start:"D:\RADAR\src\pages\farmer\PageSeason\FarmerRainy\FarmerRainy.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    <ion-title>Rainy</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-title>ผัก</ion-title> \n\n\n\n  <ion-item>\n\n      <ion-thumbnail item-start>\n\n          <img src="https://www.kingfreshfarm.com/wp-content/uploads/2016/09/Kale.png">\n\n        </ion-thumbnail>\n\n        <h2 item-start clear >คะน้า <p>Kale</p><p>เป็นพืชผักใบเขียวที่นิยม ผักคะน้าเป็นผักอายุ 2 ปี แต่ปลูกเป็นผักฤดูเดียว อายุเก็บเกี่ยวประมาณ 45-55 วัน</p></h2>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-thumbnail item-start>\n\n        <img src="http://www.เกร็ดความรู้.net/wp-content/uploads/2015/04/chinese-chive-content-flower.jpg">\n\n      </ion-thumbnail>\n\n      <h2 item-start clear >กุยช่าย <p>Scrambled</p><p>เป็นไม้ล้มลุก มีเหง้าเล็กและแตกกอ ใบแบน เรียงสลับ</p></h2>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-thumbnail item-start>\n\n        <img src="https://www.kingfreshfarm.com/wp-content/uploads/2016/10/bok-choy.png">\n\n      </ion-thumbnail>\n\n      <h2 item-start clear >กวางตุ้ง <p>Choy</p><p> ปลูกง่าย เจริญเติบโตเร็ว อายุการเก็บเกี่ยวสั้นเพียง 35-45 วัน  </p></h2>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-thumbnail item-start>\n\n        <img src="https://www.bigc.co.th/fresh/media/catalog/product/cache/8/image/500x/9df78eab33525d08d6e5fb8d27136e95/2/0/2000000615523_3.jpg">\n\n      </ion-thumbnail>\n\n      <h2 item-start clear >มะเขือเทศ <p>Tomato</p><p>มะเขือเทศเป็นพืชล้มลุกอายุเพียง 1 ปี ลำต้นตั้งตรง มีลักษณะเป็นพุ่ม มีขนอ่อน ๆ ปกคลุม ใบเป็นใบประกอบ ออกสลับกัน</p></h2>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-thumbnail item-start>\n\n        <img src="https://cms.talaadthai.com/wp-content/uploads/2018/03/%E0%B8%AA%E0%B8%B0%E0%B8%A3%E0%B8%B0%E0%B9%81%E0%B8%AB%E0%B8%99%E0%B9%88.jpg">\n\n      </ion-thumbnail>\n\n      <h2 item-start clear >สะระแหน่ <p>Peppermint</p><p>เป็นพืชไม้เลื้อยคลุมดิน ใบสีเขียว รูปทรงของใบป้อม ๆ ขอบใบย่น เป็นพืชที่เติบโตได้ดีในดินร่วนซุย เจริญเติบโตเร็ว </p></h2>\n\n  </ion-item>\n\n\n\n  <ion-title>ผลไม้</ion-title> \n\n\n\n  <ion-item>\n\n    <ion-thumbnail item-start>\n\n        <img src="https://gf.lnwfile.com/ngu75e.jpg">\n\n      </ion-thumbnail>\n\n      <h2 item-start clear >กล้วยหอม<p>Banana</p><p>เป็นไม้ล้มลุกชนิดหนึ่ง มีอยู่หลากหลายสายพันธุ์</p></h2>\n\n  </ion-item>\n\n   \n\n  <ion-item>\n\n    <ion-thumbnail item-start>\n\n        <img src="https://image.makewebeasy.net/makeweb/0/sA6X1gNoH/DefaultData/Longan_1.jpg">\n\n      </ion-thumbnail>\n\n      <h2 item-start clear >ลำไย<p>Longan</p><p>ลำไยเป็นไม้ผลยืนต้นที่มีอายุการให้ผลผลิตที่ยาวนาน ดังนั้นการสร้างสวนลำไยจึงควรมีการวางแผนที่ดี โดยคำนึงถึงต้นทุนการผลิตความสะดวกต่อการปฏิบัติงานและคุ้มค่าต่อการลงทุน</p></h2>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-thumbnail item-start>\n\n        <img src="http://puechkaset.com/wp-content/uploads/2016/11/%E0%B8%A1%E0%B8%B1%E0%B8%87%E0%B8%84%E0%B8%B8%E0%B8%94.jpg">\n\n      </ion-thumbnail>\n\n      <h2 item-start clear >มังคุด<p>Mangosteen</p><p>สามารถทำได้ทั้งการขุดหลุมปลูก ซึ่งเหมาะกับพื้นที่ที่ค่อนข้างแห้งแล้งและยังไม่มีการวางระบบน้ำไว้ก่อนปลูก</p></h2>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-thumbnail item-start>\n\n        <img src="https://png.pngtree.com/element_origin_min_pic/16/09/22/1657e39a83714d9.jpg">\n\n      </ion-thumbnail>\n\n      <h2 item-start clear >ขนุน<p>Jackfruit</p><p>ขนุนที่นิยมปลูกกันทั่วไปในประเทศไทยนั้น มีอยู่ด้วยกัน 2 ประเภท คือ ขนุนหนัง และขนุนละมุด ส่วนใหญ่การขยายพันธุ์ของขนุนเพื่อนำไปปลูกนั้นมีหลายวิธี</p></h2>\n\n  </ion-item>\n\n \n\n</ion-content>\n\n'/*ion-inline-end:"D:\RADAR\src\pages\farmer\PageSeason\FarmerRainy\FarmerRainy.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], FarmerRainyPage);
    return FarmerRainyPage;
}());

//# sourceMappingURL=FarmerRainy.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FarmerSummerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FarmerSummerPage = /** @class */ (function () {
    function FarmerSummerPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    FarmerSummerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-FarmerSummer',template:/*ion-inline-start:"D:\RADAR\src\pages\farmer\PageSeason\FarmerSummer\FarmerSummer.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n      <ion-title>Summer</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  <ion-content padding>\n\n    <ion-title>ผัก</ion-title> \n\n\n\n  <ion-item>\n\n      <ion-thumbnail item-start>\n\n          <img src="https://www.bigc.co.th/fresh/media/catalog/product/cache/8/image/500x/9df78eab33525d08d6e5fb8d27136e95/0/2/0213449_6.jpg">\n\n        </ion-thumbnail>\n\n        <h2 item-start clear >ฟักทอง <p>Pumpkin</p><p>นับว่าเป็นพืชผักสวนครัวที่อยู่คู่ตำรับครัวไทยมาเนิ่นนาน มีประโยชน์มหาศาลทั้งช่วยในเรื่องผิวพรรณความงามและยังบำรุงร่างกายให้แข็งแรงได้อีกด้วย</p></h2>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-thumbnail item-start>\n\n        <img src="https://s.isanook.com/me/0/rp/r/w700/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL21lLzAvdWQvMC80NTczL2ZzZnN3d3cuanBn.jpg">\n\n      </ion-thumbnail>\n\n      <h2 item-start clear >หอมแดง <p>Shallots</p><p>มีโครงสร้างเป็นหัวอยู่ใต้ดินเช่นเดียวกันกับหอมหัวใหญ่ แต่ว่ามีขนาดที่เล็กกว่า มีสีแดง กลิ่นฉุน นอกจากนั้นยังสามารถแตกตาข้างทำให้ได้หัวเล็กๆ</p></h2>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-thumbnail item-start>\n\n        <img src="https://s.isanook.com/gu/0/rp/r/w300/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2d1LzAvdWkvMS83OTYwLzI2NTM4M19fMjMwNzIwMTIwMzU5NTUuanBn.jpg">\n\n      </ion-thumbnail>\n\n      <h2 item-start clear >แตงกวา <p>Cucumber</p><p>แตงกวาชอบขึ้นในดินร่วนปนทราย การระบายน้ำดีชอบอากาศร้อน</p></h2>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-thumbnail item-start>\n\n        <img src="https://img.tnews.co.th/userfiles/images/1(6151).jpg">\n\n      </ion-thumbnail>\n\n      <h2 item-start clear >มะระ  <p>Gourd</p><p>เป็นมะระที่มีการนำเข้ามาจากประเทศจีน และปรับปรุงพันธุ์ให้มีลักษณะเหมาะสมต่อการปลูกในประเทศไทย </p></h2>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-thumbnail item-start>\n\n        <img src="https://www.bigc.co.th/fresh/media/catalog/product/cache/8/image/500x/9df78eab33525d08d6e5fb8d27136e95/2/0/2000000777047_3.jpg">\n\n      </ion-thumbnail>\n\n      <h2 item-start clear >พริก  <p>chilli</p><p> พริก เป็นผักสวนครัวที่มีรสชาติเผ็ดร้อน และถือว่าเป็นวัตถุดิบหลักที่ช่วยชูรสชาติอาหารตำรับไทย ๆ ให้มีเอกลักษณ์เฉพาะตัวขึ้นมา  </p></h2>\n\n  </ion-item>\n\n\n\n  <ion-title>ผลไม้</ion-title> \n\n\n\n  <ion-item>\n\n    <ion-thumbnail item-start>\n\n        <img src="https://image.makewebeasy.net/makeweb/0/K5HN2G4Kq/airfreshner/%E0%B8%94%E0%B8%B2%E0%B8%A7%E0%B8%99%E0%B9%8C%E0%B9%82%E0%B8%AB%E0%B8%A5%E0%B8%94__30_22222.jpg">\n\n      </ion-thumbnail>\n\n      <h2 item-start clear >มะม่วง<p>Mango</p><p>จะต้องศึกษาถึงสภาพความเหมาะสมต่าง ๆ หลายประการด้วยกัน ผู้ปลูกจะต้องเลือกพื้นที่ให้เหมาะสมด้วย เพื่อให้ประหยัดต้นทุนในการผลิต</p></h2>\n\n  </ion-item>\n\n   \n\n  <ion-item>\n\n    <ion-thumbnail item-start>\n\n        <img src="https://image.makewebeasy.net/makeweb/0/xp369fBVd/DefaultData/Durian_M.jpg">\n\n      </ion-thumbnail>\n\n      <h2 item-start clear >ทุเรียน <p>Durian</p><p>การปลูกทุเรียนสามารถทำได้ทั้งการขุดหลุมปลูก ซึ่งเหมาะกับพื้นที่ที่ค่อนข้างแล้งและยังไม่มีการวางระบบน้ำไว้ก่อนปลูก</p></h2>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-thumbnail item-start>\n\n        <img src="https://cms.talaadthai.com/wp-content/uploads/2018/03/%E0%B9%80%E0%B8%87%E0%B8%B2%E0%B8%B0%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99-1.png">\n\n      </ion-thumbnail>\n\n      <h2 item-start clear > เงาะ <p>Rambutan</p><p>เงาะเป็นไม้ผลยืนต้นขนาดกลางถึงใหญ่ เป็นไม้ผลเมืองร้อน เจริญเติบโตได้ดีในที่ที่มีความชื้นค่อนข้างสูง แต่ไม่มีน้ำท่วมขัง ควรเลือกแหล่งปลูกที่มีน้ำเพียงพอตลอดปี</p></h2>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-thumbnail item-start>\n\n        <img src="https://png.pngtree.com/element_origin_min_pic/16/10/22/31afbfa3a7f76ab5b907977ed1d74d0a.jpg">\n\n      </ion-thumbnail>\n\n      <h2 item-start clear >ลิ้นจี่<p>Lychee</p><p>พื้นที่ซึ่งเป็นที่ลุ่มจำเป็นต้องยกร่อง ควรยกแปลงให้มีความกว้างของแปลงอย่างน้อย 6 เมตร </p></h2>\n\n  </ion-item>\n\n   \n\n  </ion-content>\n\n  '/*ion-inline-end:"D:\RADAR\src\pages\farmer\PageSeason\FarmerSummer\FarmerSummer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], FarmerSummerPage);
    return FarmerSummerPage;
}());

//# sourceMappingURL=FarmerSummer.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FarmerwinterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FarmerwinterPage = /** @class */ (function () {
    function FarmerwinterPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    FarmerwinterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-Farmerwinter',template:/*ion-inline-start:"D:\RADAR\src\pages\farmer\PageSeason\FarmerWinter\Farmerwinter.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n      <ion-title>Winter</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  <ion-content padding>\n\n    \n\n  <ion-title>ผัก</ion-title> \n\n\n\n  <ion-item>\n\n      <ion-thumbnail item-start>\n\n          <img src="https://greenspace.market/wp-content/uld/2017/02/cauliflower-buffalo-wings03-1.jpg">\n\n        </ion-thumbnail>\n\n        <h2 item-start clear >กะหล่ำดอก <p>Cauliflower</p><p>เป็นผักที่ต้องมีความชำนาญและรู้วิธีปลูกที่ถูกต้องจึงจะได้ผลผลิตดี</p></h2>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-thumbnail item-start>\n\n        <img src="https://farm2go.thinklabs.vn/wp-content/uploads/2017/10/cabbage-green-600x600.jpg">\n\n      </ion-thumbnail>\n\n      <h2 item-start clear >กะหล่ำปลี <p>Cabbage</p><p>เป็นผักที่มีการปรับปรุงพันธุ์มาอย่างช้านาน จนกระทั่งปัจจุบันนี้มีทั้งพันธุ์หนักและพันธุ์เบา</p></h2>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-thumbnail item-start>\n\n        <img src="https://www.bigc.co.th/fresh/media/catalog/product/cache/8/image/500x/9df78eab33525d08d6e5fb8d27136e95/2/0/2000000615547_3.jpg">\n\n      </ion-thumbnail>\n\n      <h2 item-start clear >ผักกาดหอม <p>lettuce</p><p>เป็นผักที่ปลูกค่อนข้างยากเนื่องจากเป็นพืชที่จำเป็นต้องการสารเคมีเป็นจำนวนมาก ต้องดูแลเอาใจใส่ </p></h2>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-thumbnail item-start>\n\n        <img src="https://www.bigc.co.th/fresh/media/catalog/product/cache/8/image/500x/9df78eab33525d08d6e5fb8d27136e95/2/0/2000000615523_3.jpg">\n\n      </ion-thumbnail>\n\n      <h2 item-start clear >ผักชี <p>Coriander</p><p>\n\n        ผักชีเป็นพืชที่ชอบดินร่วนปนทราย หากจะปลูกในพื้นที่ที่เป็นดินเหนียว ควรเตรียมดินให้ระบายน้ำได้ดี ดินควรมีอินทรียวัตถุสูง พื้นที่ที่ปลูกต้องเป็นพื้นที่ที่มีฝนน้อย อากาศเย็น</p></h2>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-thumbnail item-start>\n\n        <img src="https://medthai.com/wp-content/uploads/2013/09/%E0%B8%82%E0%B8%B6%E0%B9%89%E0%B8%99%E0%B8%89%E0%B9%88%E0%B8%B2%E0%B8%A2.jpg">\n\n      </ion-thumbnail>\n\n      <h2 item-start clear >ขึ้นฉ่าย <p>Celery</p><p>การปลูกขึ้นฉ่ายนั้นสามารถกระทำได้ 2 วิธี ด้วยกัน คือ (1) เพาะให้เมล็ดงอกก่อน เมื่อกล้าสูงประมาณ 2-3 นิ้ว จึงทำการย้ายปลูก และ (2) หว่านเมล็ดในแปลงปลูกเลย </p></h2>\n\n  </ion-item>\n\n\n\n  <ion-title>ผลไม้</ion-title> \n\n\n\n  <ion-item>\n\n    <ion-thumbnail item-start>\n\n        <img src="https://scontent-fbkk5-7.us-fbcdn.net/v1/t.1-48/1426l78O9684I4108ZPH0J4S8_842023153_K1DlXQOI5DHP/dskvvc.qpjhg.xmwo/w/data/706/706452-img-1379245177-1.jpg">\n\n      </ion-thumbnail>\n\n      <h2 item-start clear >ฝรั่ง<p>Western</p><p>เป็นผลไม้ที่ได้รับความนิยมรับประทานชนิดหนึ่งทั้งในประเทศ และต่างประเทศ ลักษณะลำต้นเป็นไม้ทรงพุ่ม สูง 3-5 เมตร สามารถเจริญเติบโตได้ดีในทุกสภาพดิน </p></h2>\n\n  </ion-item>\n\n   \n\n  <ion-item>\n\n    <ion-thumbnail item-start>\n\n        <img src="https://www.organicfarmthailand.com/wp-content/uploads/2017/07/papaya2.jpg">\n\n      </ion-thumbnail>\n\n      <h2 item-start clear >มะละกอ<p>Papaya</p><p>เป็นไม้ผลชนิดหนึ่ง สูงประมาณ 5-10 เมตร มีถิ่นกำเนิดในอเมริกากลาง ถูกนำเข้าสู่เอเชียตะวันออกเฉียงใต้ในสมัยกรุงศรีอยุธยา</p></h2>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-thumbnail item-start>\n\n        <img src="https://prayod.com/wp-content/uploads/2013/10/%E0%B8%8A%E0%B8%A1%E0%B8%9E%E0%B8%B9%E0%B9%88.jpg">\n\n      </ion-thumbnail>\n\n      <h2 item-start clear >ชมพู่<p>Rose apple</p><p>คนไทยนิยมปลูกตามบ้านและกินกันมานาน ผลชมพู่โดยส่วนใหญ่จะมีรูปร่างคล้ายสามเหลี่ยมฐานกว้าง</p></h2>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-thumbnail item-start>\n\n        <img src="https://cdn.shopify.com/s/files/1/1729/3093/products/grapeseed_530x@2x.png?v=1514360885">\n\n      </ion-thumbnail>\n\n      <h2 item-start clear >องุ่น<p>Grape</p><p> เป็นพืชยืนต้น มีลักษณะเป็นไม้พุ่มเลื้อย มีลักษณะเนื้อแข็งและมีลำต้น กิ่งถาวรอายุเกิน 1 ฤดู ถ้าปล่อยให้เจริญเติบโตตามธรรมชาติจะเลื้อยเกาะกิ่งไม้</p></h2>\n\n  </ion-item>\n\n\n\n\n\n  </ion-content>'/*ion-inline-end:"D:\RADAR\src\pages\farmer\PageSeason\FarmerWinter\Farmerwinter.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], FarmerwinterPage);
    return FarmerwinterPage;
}());

//# sourceMappingURL=FarmerWinter.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RiverCPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RiverCPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RiverCPage = /** @class */ (function () {
    function RiverCPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RiverCPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RiverCPage');
    };
    RiverCPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-river-c',template:/*ion-inline-start:"D:\RADAR\src\pages\rain\T-rain\C\river-c\river-c.html"*/'<!--\n  Generated template for the RiverCPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ล่องแก่งลำน้ำเข็ก พิชิตสายน้ำเหนือ</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card>\n        <ion-card-header>\n          \n        </ion-card-header>\n        \n        <ion-card-content>\n            <img src="http://www.paipala.com/wp-content/uploads/2015/08/------------------------------------------------------------------------------------------------------------------------------11-580x389.jpg"><br>\n            หน้าฝนนับเป็นช่วงเวลาที่เหมาะสำหรับกิจกรรมการล่องแก่งแพยางเป็นอย่างยิ่ง โดยเฉพาะในเมืองไทยนั้นมีสถานที่ล่องแก่งแพยางอยู่หลายแห่ง แต่ที่ขึ้นชื่อและสนุกเป็นอันดับต้นๆ ก็ต้องยกให้ “ล่องแก่งลำน้ำเข็ก อ.วังทอง จ.พิษณุโลก” ที่มีเส้นทางของสายน้ำไหลคดเคี้ยว มีแก่งน่าหวาดเสียวและน่าตื่นเต้นชวนท้าทายเป็นอย่างยิ่ง\n            <br><br>\n            จากกรุงเทพฯ เรามุ่งหน้าสู่จังหวัดพิษณุโลกโดยใช้ทางหลวงหมายเลข1 ถนนพหลโยธิน อำเภอวังน้อย แล้วแยกเข้าทางหลวงหมายเลข 32 ถึงจังหวัดนครสวรรค์ แล้วใช้เส้นทาง 117 ตรงสู่จังหวัดพิษณุโลก ผ่านตัวเมืองพิษณุโลก เดินทางตามทางหลวงหมายเลข 12 (พิษณุโลก – หล่มสัก) ประมาณ กม.44 – กม.52 รวมระยะทาง 429 กิโลเมตร\n            <br><br>\n            การล่องแก่งลำน้ำเข็กจะเริ่มต้นจากบริเวณบ้านท่าข้าม ล่องไปสู่บริเวณตอนบนของน้ำตกแก่งซองผ่านเกาะแก่งต่างๆ รวม 17 แก่ง   โดยความพิเศษอยู่ที่เริ่มต้นจากกระแสน้ำนิ่งระดับ1 เข้าสู่ระดับน้ำที่มีความสนุกสนาน ท้าทาย ขึ้นตามลำดับจนกระทั่งถึงระดับสูงระดับ 5 ด้วยระยะทางล่องแก่งประมาณ 8 กม.ใช้เวลา 2-3 ชม.ขึ้นอยู่กับกระแสน้ำ\n            <br><br>\n            <img src="http://www.paipala.com/wp-content/uploads/2015/08/------------------------------------------------------------------------------------------------------------------------------21-580x398.jpg"><br>\n            <img src="http://www.paipala.com/wp-content/uploads/2015/08/------------------------------------------------------------------------------------------------------------------------------61-580x376.jpg"><br>\n            ทั้งนี้ ลำน้ำเข็กมีแหล่งกำเนิดจากเทือกเขาเพชรบูรณ์ ในเขตอำเภอเขาค้อไหลผ่านอุทยานแห่งชาติทุ่งแสลงหลวง มาเป็นน้ำตกศรีดิษฐ์ และน้ำตกแก่งโสภา อันสวยงามและมีชื่อเสียงของจังหวัดพิษณุโลก\n\nโดยลำน้ำเข็กจะไหลเคียงคู่กับเส้นทางหมายเลข 12 พิษณุโลก-หล่มสัก จะมีเกาะแก่งมากมาย ในช่วงเดือนกรกฎาคม-ตุลาคม เป็นช่วงฤดูฝนลำน้ำเข็กจะมีปริมาณน้ำที่เหมาะสมกับการล่องแก่งที่มีระดับความยากง่ายต่างกันไป\n<br>\n<br>\n<img src="http://www.paipala.com/wp-content/uploads/2015/08/------------------------------------------------------------------------------------------------------------------------------51-580x390.jpg"><br>\nสำหรับปีนี้ทางจังหวัดพิษณุโลก ได้จัดงาน “เทศกาลชิมกาแฟแก่งซอง ล่องแก่งลำน้ำเข็กขึ้น ซึ่งจัดขึ้นเป็นประจำทุกปี ตั้งแต่ช่วงนี้ไปจนถึงเดือนตุลาคม เพื่อประชาสัมพันธ์เทศกาลชิมกาแฟแก่งซอง ล่องแก่งลำน้ำเข็กและเป็นการกระตุ้นการท่องเที่ยวของจังหวัดให้เป็นที่รู้จักแพร่หลายมากขึ้น รวมทั้งเป็นการส่งเสริมการท่องเที่ยวภายในประเทศด้วย\n<br><br>\n<img src="http://www.paipala.com/wp-content/uploads/2015/08/------------------------------------------------------------------------------------------------------------------------------41-580x367.jpg">\n<br>\nสำหรับคุณพ่อคุณแม่ที่สนใจพาลูกๆ มาล่องแก่งลำน้ำเข็กนั้น ทางผู้ประกอบการไม่อนุญาตให้เด็กอายุต่ำกว่า 12 ปี ลงล่องแก่งโดยเด็ดขาด โดยยึดตามข้อบังคับของชมรมผู้ประกอบการล่องแก่งลำน้ำเข็ก ที่ผู้ประกอบการทุกคนต้องปฏิบัติตามโดยเคร่งครัด เพื่อความปลอดภัย\n<br><br>\n<strong>สอบถามรายละเอียดเพิ่มเติมได้ที่</strong> ททท. สำนักงานพิษณุโลก โทรศัพท์ 0-5525-2742-3\n\n        </ion-card-content>\n      </ion-card>\n</ion-content>\n'/*ion-inline-end:"D:\RADAR\src\pages\rain\T-rain\C\river-c\river-c.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], RiverCPage);
    return RiverCPage;
}());

//# sourceMappingURL=river-c.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChiangKhanEPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ChiangKhanEPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChiangKhanEPage = /** @class */ (function () {
    function ChiangKhanEPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChiangKhanEPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChiangKhanEPage');
    };
    ChiangKhanEPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chiang-khan-e',template:/*ion-inline-start:"D:\RADAR\src\pages\rain\T-rain\E\chiang-khan-e\chiang-khan-e.html"*/'<!--\n  Generated template for the ChiangKhanEPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>เชียงคาน (Chiang Khan)</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card>\n        <ion-card-header>\n            <h1>เชียงคาน<p>(Chiang Khan)</p></h1> \n        </ion-card-header>\n        \n        <ion-card-content>\n            <img src="https://www.paiduaykan.com/76_province/Northeast/loie/pic/chaingkhan1.jpg"><br>\n            <br>\n            เชียงคาน เมืองเล็กๆ ริมแม่น้ำโขงสุดชายแดนไทย เป็นอำเภอหนึ่งในจังหวัดเลย ที่คงยังคงไว้ซึ่งวัฒนธรรม ขนบประเพณี การใช้ชีวิตแบบเรียบง่าย พอเพียง วิถีชีวิตแบบดั้งเดิม ซึ่งหาดูยากในปัจจุบัน เมืองเล็กๆ ที่เงียบสงบ แห่งนี้ กำลังเป็นที่สนใจ ของนักท่องเที่ยวจำนวนมาก  ภาพบ้านเก่าๆที่เรียงรายติดกันอยู่ริมถนนชายโขง ดึงดูดใจ ให้นักท่องเที่ยวหลายต่อหลายรุ่นต่าง หลั่งไหลเดินทางกันมาที่นี่ บ้านเรือนที่เมืองเชียงคานจะแบ่งออกเป็นซอย เล็กๆ เรียกว่า ถนนศรีเชียงคาน ขนานคู่กันไปไปกับถนนใหญ่ ซึ่งเป็นถนนสายหลัก เริ่มตั้งแต่ถนนศรีเชียงคาน ซอยที่ 1- 24  แบ่งเป็นถนนศรีเชียงคานฝั่งบนกับฝั่งล่างซึ่งชื่อซอยเหมือนกัน \n            <br><br>\n            ถนนศรีเชียงคานฝั่งล่าง คือ ถนนเส้นที่เต็มไปด้วยบ้านไม้เก่าแก่ ที่พัก โฮมสเตย์ ร้านอาหาร และร้านค้าเก๋ มากมายซึ่งถนนในเส้นนี้ จะเรียกว่า "ถนนชายโขง" ซึ่ง ระยะทางกว่า  2 กิโลเมตร  เป็นเส้นทางที่นักท่องเที่ยว นิยมมาปั่นจักรยานชมบรรยากาศ ถ่ายรูปเล่น ชมบ้านไม้สมัยเก่า แต่ก็มีบางส่วนเป็นตึกแถวสร้างใหม่ ซึ่งทาง เทศบาลไม่อนุญาตให้ปลูกสร้าง เพราะต้องการอนุรักษ์ สภาพแวดล้อม บริเวณถนนสายนี้ให้เป็นบ้านไม้ทั้งหมดเป็นการรักษาวัฒนธรรมดั้งเดิมของชาวเชียงคาน แต่ถึงแม้บ้านไม้เก่าๆ ถึงแม้ถูกดัดแปลง ให้เป็นร้านขายของ ร้านอาหาร ร้านกาแฟ บ้านพักโฮมสเตย์ไปแล้วส่วนหนึ่ง แต่ถึงอย่างไรความ สงบเรียบง่ายของวิถีชีวิต รอยยิ้มที่ แสนจะจริง ของผู้คนในเมืองนี้ ยังคงเป็นเสน่ห์ที่ทำให้เมืองเชียงคานแตกต่างจากเมืองท่องเที่ยวอื่นๆ \n            <br><br>\n              <img src="https://www.paiduaykan.com/76_province/Northeast/loie/pic/chaingkhan2.jpg"><br>\n              <img src="https://www.paiduaykan.com/76_province/Northeast/loie/pic/chaingkhan19.jpg"><br>\n              <img src="https://www.paiduaykan.com/76_province/Northeast/loie/pic/chaingkhan4.jpg"><br>\n              <img src="https://www.paiduaykan.com/76_province/Northeast/loie/pic/chaingkhan4.jpg"><br>\n              <img src="https://www.paiduaykan.com/76_province/Northeast/loie/pic/chaingkhan8.jpg"><br>\n              <img src="https://www.paiduaykan.com/76_province/Northeast/loie/pic/chaingkhan9.jpg"><br>\n            <br>\n            <strong>มาเชียงคานทำอะไรดี </strong><br>\n            <ul>\n                1. ปั่นจักรยานชมบ้านไม้เก่าแก่โบราณ ร้านค้าแนวๆ<br>\n                เชียงคาน เป็นเมืองเล็กมาก จึงเป็นเหตุผลว่าทำไมจักรยานจึงเป็นพาหนะยอดฮิตของใครหลายๆคน มาเที่ยว เชียงคาน ต้อง มาปั่นจักรยาน เพราะทำให้เรารู้จักและสัมผัสกับเสน่ห์ของเชียงคานได้มากยิ่งขึ้น การปั่นจักรยาน ไปตามตรอกซอกซอยชมบ้านไม้ เก่าๆ ที่บางส่วนก็ถูกดัดแปลงให้เป็น ที่พักแบบโฮมสเตย์  ร้านค้า ร้านกาแฟ แถมได้ทักทายยิ้มแย้มทำความรู้จักกับชาวบ้าน ปั่นไปมาเพียงแค่วันเดียวก็เกือบรู้จักกันเกือบทั่งซอย เพราะที่นี่ เป็นเมืองที่เล็กที่มีแต่รอยยิ้มและมิตรภาพ การปั่นจักรยานเป็นอีกหนึ่ง กิจกรรมที่ได้ปลดปล่อยอารมณ์ไปพร้อม กับเรียบง่ายของเมืองเล็กๆ แสนสงบแห่งนี้  น้อยนักที่เราจะสามารถ ปั่นจักรยานและปล่อย เวลาให้เดินช้าลงแบบ ไม่ต้องเอาเรื่องอื่นใดมาใส่ให้หนักสมอง เพราะเราจะเห็นแต่รอยยิ้มอันอบอุ่นของชาวบ้านและ ผู้เฒ่าผู้แก่ที่นั่ง บนแคร่ไม้หน้าบ้าน คอยทักทายเราตลอดเส้นทาง ได้ออกกำลังกายไปในตัวรับอากาศบริสุทธ์แบบห่างไกล มลพิษอีกด้วย  \n                <br><br>\n                <img src="https://www.paiduaykan.com/76_province/Northeast/loie/pic/chaingkhan10.jpg"><br>\n                <img src="https://www.paiduaykan.com/76_province/Northeast/loie/pic/chaingkhan6.jpg"><br>\n                <img src="https://www.paiduaykan.com/76_province/Northeast/loie/pic/chaingkhan5.jpg"><br>\n                <br>\n                2.ตักบาตรข้าวเหนียวในยามเช้า\nวัฒนธรรมดั้งเดิมของชาวเชียงคานก็คือ ชาวบ้านเกือบทุกหลังจะลุกขึ้นมาตักบาตรข้าวเหนียวแต่เช้าตรู่ ถือเป็น ประเพณีที่มีมานาน แล้ว  ซึ่งจะปฎิบัติกันแทบทุกบ้าน ตอนเช้าๆ เราจะเห็นผู้เฒ่า ผู้แก่ จะอาบน้ำแต่งตัวตั้งแถว เรียงกันยาวไปตามริมถนน เพื่อมารอพร ะบิณฑบาตรแต่เช้า ด้วยความศรัทธา วิธีการตักบาตร คือ หยิบข้าวเหนียว จากกระติ๊บมาหยิบกำมือ  เหมือนกับเราตักข้าวสวย แล้วตักใส่บาตรพระ จนครบทุกองค์ ซึ่งหากเรามาพักที่ โฮมสเตย์ใน แต่ละที่ก็จะมีการเตรียมข้าวเหนียวไว้ให้เราสำหรับตักบาตร ด้วยเช่นกัน\n                <br><br>\n                <img src="https://www.paiduaykan.com/76_province/Northeast/loie/pic/chaingkhan11.jpg"><br>\n                <img src="https://www.paiduaykan.com/76_province/Northeast/loie/pic/chaingkhan12.jpg"><br>\n                <img src="https://www.paiduaykan.com/76_province/Northeast/loie/pic/chaingkhan13.jpg"><br>\n                <br>\n                3.ไหว้พระ 9 วัด <br>\n                <strong>วัดศรีคุณเมือง</strong>\nตั้งอยู่ที่ซอย 6 ถนนชายโขง ทางด้านเหนือของตลาดเชียงคาน มีกำแพงแก้วล้อมรอบตัวพระอุโบสถ สร้างในแบบแปลกตา รูปร่างคล้าย โบสถ์ตามวัดภาคเหนือ ด้านหน้าโบสถ์มีภาพจิตรกรรมฝาผนังอยู่เต็มหน้าบันภาพ ทั้งหมด เป็นภาพนิทานชาดก ชุดพระเจ้าสิบชาติ วัดศรีคุณเมือง มีพระพุทธรูปประธานที่เก่าแก่เป็นที่เลื่อมใส ศรัทธาและนับถือของชาวอำเภอเชียงคานเป็นอย่างมาก คือ พระพุทธรูป ปูนปั้นนาคปรก ปางสมาธิ พระพุทธรูปใน อุโบสถวัดศรีคุณเมือง เป็นพระพุทธรูปนาคปรก ก่อด้วยอิฐถือปูน เป็นศิลปะล้านช้าง ผสมอยุธยา เป็นพระพุทธรูป ที่มีความศักดิ์สิทธิ์ ที่ชาวบ้านไม่ว่าจะเป็นคนไทยและประชาชนจากฝั่งลาว หากมีโอกาสจะเดินทาง ข้ามแม่น้ำโขง เพื่อมากราบไหว้อธิษฐานขอพรในการเดินทางไปทำมาค้าขายให้สำเร็จรุ่งเรือง หรือให้ปลอดภัยจาก ภยันตราย ทั้งหลายทั้งปวง ใครที่มาขอพรจากพระประธานในพระอุโบสถวัดศรีคุณเมือง จะประสบความสำเร็จและสมหวังกันทุกคน \n<br><br>\n                <img src="https://www.paiduaykan.com/76_province/Northeast/loie/pic/chaingkhan17.jpg"><br>\n                <br>\n                วัดโพนชัย\nซึ่งตั้งอยู่ระหว่างซอย 2-3 ชมพระอุโบสถที่มีรูปสถาปัตยกรรมล้านช้างผสมสถาปัตยกรรมในสมัยกรุงรัตนโกสินทร์ ที่พระยาศรีอรรคฮาตเป็นผู้สร้าง และเคยเป็นที่ตั้งที่ว่าการเมืองเชียงคาน ก่อนจะย้ายไปอยู่ในที่ปัจจุบันแก่งคุดคู้ห่างจากตัวเมือง เชียงคานประมาณ 3 กิโลเมตร \n<br><br>\n<img src="https://www.paiduaykan.com/76_province/Northeast/loie/pic/chaingkhan15.jpg"><br>\n<img src="https://www.paiduaykan.com/76_province/Northeast/loie/pic/chaingkhan16.jpg"><br>\n<br>\n<strong>วัดป่ากลาง</strong>\nเดิมเป็นวัดเล็กๆ สองวัด คือ วัดกลางและวัดป่า เนื่องจากวัดกลางตั้งอยู่ริมฝั่งแม่น้ำโขง จึงถูกน้ำกัดเซาะตลิ่งพัง เข้า มาถึงวัด ชาวบ้านจึงย้ายมารวมวัดสองวัดเข้าเป็นวัดเดียวกันเมื่อปี พ.ศ.2466 เรียกชื่อว่า “วัดป่ากลาง” ต่อมาสมัยพระมหาเกียรติ วฑฒิสาโร ได้เปลี่ยนชื่อเป็น “วัดมัชฌิมาราม” พระประธานในอุโบสถเป็น พระพุทธ รูปปูนปั้นปางมารวิชัย ภายในบริเวณวัด มีอาคารส้วมโบราณ ซึ่งชาวบ้านได้อนุรักษ์ไว้เป็นอย่างดี \n<br><br>\n<strong>วัดมหาธาตุ</strong>\nตั้งอยู่ ซอย 14 วัดมหาธาตุ วัดนี้เป็นวัดเก่าแก่ที่สุดของเมืองเชียงคาน ไปชมพระอุโบสถไม้เก่าแก่รูปแบบล้านช้าง ภายในประดิษฐานพลวงพ่อใหญ่ บริเวณหน้าจั่วมีภาพเขียนบอกเล่าเรื่องราวประวัติเมืองเชียงคาน และมีเจดีย์ก่ออิฐที่เชื่อกันว่าสร้างทับรูพญานาค นอกจากนี้ยังมีพระอุโบสถหลังใหม่ ที่สร้างขึ้นในรูปแบบสถาปัตยกรรมล้านช้างที่สวยงาม \n<br><br>\n<strong>วัดท่าแขก</strong>\nวัดเก่าแก่ตั้งอยู่ริมฝั่งแม่น้ำโขงนับว่าเป็นบรรยกาศเย็นสบาย ภายในได้ประดิษฐานพระพุทธรูปเก่าแก่อายุกว่า\n300 ปี นับว่ามีความศักดิ์สิทธิ์เป็นที่เคารพศรัทธาของประชาชนต่อเนื่อง มีประวัติเกี่ยวโยงกับประวัติศาสตร์เมือง เชียงคาน เชื่อว่า "วัดท่าแขก" สร้างตรงกับสมัยขุนคานสร้างเมืองเชียงคาน บ้างก็สันนิษฐานว่าน่าจะสร้างในปี พ.ศ. 2020 เพราะมีเรื่องเล่าว่า เมื่อครั้งเกิดศึกญวน พระเจ้าชัยจักรพรรดิแผ่นแผ้วกับข้าราชบริพารกลุ่มหนึ่ง หลบ หนีศึกสงครามมาตั้งบ้านเรือนอยู่สองฝั่งลำน้ำโขงบริเวณวัดศพ พระเจ้าสุวรรณบัลลังก์รัชกาลต่อมาได้สร้างพระยืน ขึ้นที่วัดศพ โดยสกัดจากหินผาฮดและได้สร้าง "วัดท่าแขก" พร้อมกันไปด้วย วัดท่าแขกแห่งนี้ให้ทางฝ่ายชาย ได้ร่วมมือกันสร้างขึ้น \n<br><br>\n<strong>วัดท่าคก</strong>\nนี้เชื่อกันว่าสร้างโดยพระยาศรีอรรคฮาต เจ้าเมืองคนสุดท้ายของเชียงคาน มีพระอุโบสถและศิลาจารึกด้านหน้า ให้ชม\n<br><br>\n<strong>วัดป่าใต้</strong>\nก่อตั้งขึ้น เมื่อปี พ.ศ.2415 เดิมเป็นวัดป่าธุดงค์ สำหรับพระมาจำพรรษา ต่อมาพระครูศรสิริสุโข พร้อมด้วยชาว บ้านร่วมกันสร้างให้มั่นคงถาวรขึ้น พระอุโบสถเก่าแก่ประดับภาพจิตกรรมฝาผนังเป็นพุทธประวัติ ฝีมือช่างชาว\nเชียงคาน\n<br><br>\n<strong>วัดภูช้างน้อย</strong>\nขึ้น ภูไหว้พระใหญ่ อธิฐานขอพร ก่อนชมเมืองเชียงคานจากยอดภูช้างน้อย วัดภูช้างน้อยเป็นวัดป่า ซึ่งชาว\nเชียงคานได้สร้างขึ้น พระพุทธรูปองค์ใหญ่บนยอดเขามองเห็นเด่นเป็นสง่า ให้ทราบว่าท่านมาถึงเมืองเชียงคาน\nเมืองแห่งธรรมมะแล้ว\n<br><br>\n<strong>วัดสันติวนาราม</strong>\nตั้งขึ้น เมื่อปี พ.ศ.2482 โดยพระครูพิทักษ์สังฆการ เป็นผู้นำชาวบ้านสร้างขึ้น เดิมชื่อว่า “วัดป่าศิริพิทักษ์อรัญญ วาส” ต่อมาพระพิมลธรรมเปลี่ยนชื่อใหม่เป็น “วัดสันติวนาราม” ภายในวัดมีมณฑปประดิษฐานรายพระพุทธบาท จำลอง และบริเวณรอบอุโบสถ มีพระพุทธรูปสีทองอร่าม ประดิษฐานเรียงรายนับร้อยองค์งดงามมาก\n<br><br>\n            </ul>\n        \n        <strong>ท่องเที่ยวใกล้เมืองเชียงคาน</strong>\n        <ul>\n          <strong>1.แก่งคุดคู้ </strong><br>\n          อยู่ห่างจากตัวเมืองเชียงคานประมาณ 3 กิโลมเตร แก่งคุดคู้เป็นแก่งหินขนาดใหญ่ขวางอยู่กลางลำน้ำโขงห่างจาก ตัวอำเภอเชียงคาน ประมาณ 3 กิโลเมตร ประกอบด้วยหินก้อนใหญ่ ๆ เป็นจำนวนมาก ตัวแก่งกว้างใหญ่เกือบจรด สองฝั่งแม่น้ำโขง มีกระแสน้ำไหลผ่าน ไปเพียงช่องแคบ ๆ ใกล้ฝั่งทะเลไทยซึ่ง กระแสน้ำเชี่ยวกราก เวลาที่เหมาะ ที่จะมาชมแห่งคุดคู้ที่สุดคือ เดือนกุมภาพันธ์ถึง เดือนพฤษภาคมซึ่งเป็นเวลาที่น้ำแห้งมองเห็นเกาะแก่งต่าง ๆ ชัดเจนบริเวณแก่ง มีร้านอาหารจำหน่ายมากมาย\n          <br><br>\n          <img src="https://www.paiduaykan.com/province/Northeast/loie/pic/kangkudkhu6.jpg"><br>\n          <img src="https://www.paiduaykan.com/province/Northeast/loie/pic/kangkudkhu6.jpg"><br>\n          <img src="https://www.paiduaykan.com/province/Northeast/loie/pic/kangkudkhu1.jpg"><br>\n          <strong>2.ชมทะเลหมอกภูทอก</strong><br>\n          จุดชมทัศนีย์ภาพเมืองเชียงคาน และทะเลหมอก สวยงามริมฝั่งโขงที่แปลกตาด้วย ทิวเขาสลับซับซ้อนสุดตา ไกลถึงฝั่งลาว การเดินทางจากตัวอำเภอเชียงคานนักท่องเที่ยว ต้องนั่งรถมาลงที่จุดจอดรถขึ้นไปชมทะเลหมอกภูทอก ซึ่งจะมีรถสองแถวให้บริการ คิดราคาคนละ 25 บาท ไม่อนุญาติให้นำรถส่วนตัวขึ้นไป\n          <br><br>\n          <strong>3.หมู่บ้านวัฒนธรรมไทดำ</strong><br>\n          ตั้งแต่ปี พ.ศ. 2448 มาตั้งถิ่นฐานอยู่ที่บ้านนาป่าหนาด ปัจจุบันยังมีการอนุรักษ์วัฒนธรรมไทดำ มีบ้านที่สร้างขึ้น ตามแบบเอกลักษณ์ ดั้งเดิมของชาวไทดำ รวมทั้งเครื่องใช้ต่างๆในชีวิตประจำวัน ที่แสดงให้เห็นถึงชีวิตความเป็นอยู่ในอดีตและยังมีการรวมกลุ่มทอผ้า พื้นเมืองของชาวบ้าน โดยสามารถชมการทอผ้าและเลือกซื้อสินค้าเป็น ของฝากได้ นักท่องเที่ยวที่สนใจที่จะสัมผัสชีวิตความเป็น อยู่ชาวไทดำแบบโฮมสเตย์สามารถติดต่อ ได้ที่ สมาคมอนุรักษ์วัฒนธรรม ไทดำก่อนล่วงหน้าประมาณ 1 สัปดาห์ โทร. 08 1048 2000 พัก 1 คืน อาหาร 2 มื้อ ราคา 300 บาท/คน การเดินทาง ใช้เส้นทางเลย-เชียงคานไปประมาณ 38 กิโลเมตร แล้วเลี้ยวขวาเข้าทาง ไปบ้าน นาสีจนถึงบ้านาป่าหนาดอีกประมาณ 10 กิโลเมตร พระใหญ่ภูคกงิ้วเป็นพระพุทธรูปปางลีลา ประทานพรหล่อด้วยไฟเบอร์ ผสมเรซิ่นสีทองทั้งองค์ สูง 19 เมตร ตัวฐานกว้าง 7.2 เมตร สร้างขึ้นโดยกองทัพภาคที่ 2 และประชาชน เพื่อถวายเป็น พระราชกุศล แด่พระบาทสมเด็จพระเจ้าอยู่หัว และสมเด็จพระนางเจ้าพระบรมราชินีนาถ เนื่องใน วโรกาสมหา มงคลเฉลิมพระชนมพรรษา พระบาทสมเด็จพระเจ้าอยู่หัวครบ 6 รอบ เมื่อ พ.ศ. 2542 และ ในมหา มงคลแห่งราชพิธีราชาภิเษก ครบ 50 ปี พ.ศ. 2543 สร้างแล้วเสร็จเมื่อวันที่ 2 กุมภาพันธ์ 2544 บริเวณโดยรอบ สามารถชมทัศนียภาพที่สวยงามของแม่น้ำโขง และประเทศลาวได้ การเดินทาง จากตัวเมืองเลยใช้ทางหลวง หมายเลข 201 (เลย-เชียงคาน) ไป 47 กิโลเมตร แล้วเลี้ยวซ้ายบริเวณสามแยกตรงไปจน ถึงบ้านท่าดีหมี่ และเลี้ยวขวาที่โรงเรียน บ้านท่าดีหมีไปอีกประมาณ 2 กิโลเมตร\n          <br><br>\n          <strong>4. วัดพระพุทธบาทภูควายเงิน </strong><br>\n          อยู่ที่บ้านผาแบ่น ตำบลบุฮม การเดินทาง ใช้เส้นทางสายเชียงคาน-ปากชม ระยะทาง 6 กิโลเมตร ถึงหมู่บ้าน ผาแบ่นมีทางแยกเข้าบ้านอุมุง 3 กิโลเมตร จะถึงทางขึ้นเขาเป็นทางลูกรังระยะทาง 1 กิโลเมตร พระพุทธบาท ภูควายเงิน เป็นรอยพระพุทธบาทยาวประมาณ 120 เซนติเมตร กว้าง 65 เซนติเมตร ประดิษฐานบนหินลับมีด ได้รับการขึ้นทะเบียนเป็นโบราณสถานเมื่อพ.ศ. 2478 รอยพระพุทธบาทภูควายเงินเป็นที่เคารพ สักการะของ ชาวบ้านในแถบนี้มาก สมัยก่อนครั้งที่การเดินทางมานมัสการยังลำบาก เชื่อกันว่าคนที่มีบุญวาสนา เท่านั้นจึงจะ เดินทางมากราบไหว้ได้ คนที่วาสนาไม่ถึงจะต้องมีเหตุให้มาไม่ได้ ทั้งที่ตั้งใจไว้อย่างเต็มที่ก็ตาม บางคนก็หลงทาง ทุกปีในวันขึ้น15 ค่ำ เดือน 3 ทางวัดจะจัดงานสมโภชประจำปีถือเป็นงานสำคัญของชาวบ้านในแถบนี้ \n          <br><br>\n    \n        </ul>\n\n        <strong>การเดินทางไปเชียงคาน</strong>\n        <br>\n        <strong>1. โดยรถยนต์ส่วนตัว</strong><br>\n        - จากกรุงเทพใช้ทางหลวงหมายเลข 1(พหลโยธิน) เมื่อถึงจ. สระบุรีใช้ทางหลวงหมายเลข 2 (มิตรภาพ) ผ่าน อ. ปากช่องลำตะคองแยกซ้ายเข้าอ.สีคิ้ว จ. นครราชสีมาเข้าสู่ทางหลวงหมายเลข 201 ผ่านอ.ด่านขุนทดเข้าสู่ จ. ชัยภูมิ แยกขวาและไปตามทางหลวงหมายเลข 201 ผ่านอ. คอนสวรรค์ อ. แก้งคร้อ ,อ. ภูเขียว,อ.ชุมแพ จ. ขอนแก่น เมื่อ เชื่อมกับทางหลวงหมายเลข 12 แยกซ้ายไปทางอ .คอนสาร จากนั้นแยกขวาไปตามทางหลวง หมายเลข 201 สู่เขต จ.เลยอีกที ที่ภูผาม่าน ผ่านภูกระดึง วังสะพุง ถึงตัวเมืองเลย สุดท้ายแยกขวาสู่อ.เชียงคาน รวมระยะทางประมาณ 597 ก.ม.\n        <br><br>\n        <strong>2. โดยรถสาธารณะ </strong><br>\n        รถโดยสารไปเชียงคาน มีเฉพาะของ บริษัทขนส่ง เท่านั้น ที่ไปถึงเมืองเชียงคาน โดยตรง<br>\n- กรุงเทพฯ-เชียงคาน เที่ยวไปเชียงคานมี 2 รอบ คือ รถป. เวลา 20.00 น. และรถ VIP 22.00 น. โทร 0-2936-2841-8),(0-2936-0657)ต่อ605<br>\n- เชียงคาน-กรุงเทพ มี 3 รอบ คือ รถ ป. 2  รอบ 18.40 น. รถป 1 (ต่อรถที่ตัวเมืองเลย) รอบ 19.30 น. รถ VIP 22.00 น.   ซื้อตั๋วได้ที่ร้านแสงทอง ตรงตลาดเช้า โทรจองตั๋วล่วงหน้าได้ที่แอร์เมืองเลย โทร 042 811 706 \n\n        </ion-card-content>\n      </ion-card>\n</ion-content>\n'/*ion-inline-end:"D:\RADAR\src\pages\rain\T-rain\E\chiang-khan-e\chiang-khan-e.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ChiangKhanEPage);
    return ChiangKhanEPage;
}());

//# sourceMappingURL=chiang-khan-e.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlowersEPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FlowersEPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FlowersEPage = /** @class */ (function () {
    function FlowersEPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FlowersEPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FlowersEPage');
    };
    FlowersEPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-flowers-e',template:/*ion-inline-start:"D:\RADAR\src\pages\rain\T-rain\E\flowers-e\flowers-e.html"*/'<!--\n  Generated template for the FlowersEPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ทุ่งดอกกระเจียว</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card>\n        <ion-card-header>\n          <h1>ทุ่งดอกกระเจียว</h1>\n        </ion-card-header>\n        \n        <ion-card-content>\n            <img src="https://travel.mthai.com/app/uploads/2014/06/Dok-ka-jeaw-1.jpg"><br>\n            <img src="https://travel.mthai.com/app/uploads/2013/06/chm-thai-onep.jpg"><br>\n            <img src="https://travel.mthai.com/app/uploads/2014/06/pa-hin-gam-2.jpg"><br>\n            ทุ่งดอกกระเจียว ณ.อุทยานแห่งชาติป่าหินงาม เป็นพรรณไม้ที่เกิดขึ้นเองตามธรรมชาติ เพียงปีละครั้งเท่านั้นจะเริ่มเห็นได้ในช่วงต้นฤดูฝนประมาณกลางเดือนพฤษภาคมไปจนถึงช่วงกลางเดือนสิงหาคม ของทุกปี และจะเริ่มแทงหน่อออกในช่วงต้นเดือนมิถุนายน สีของดอกกระเจียว จะออกสีชมพูอมม่วง และสีขาว\n            <br><br>\n            <img src="https://travel.mthai.com/app/uploads/2013/06/%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%88%E0%B8%B5%E0%B8%A2%E0%B8%A7.jpg"><br>\n            <br>\n            ปัจจุบันทุ่งดอกกระเจียว มีอยู่หลากหลายสายพันธุ์ที่ให้ความสวยงามจากธรรมชาติ หากท่านไม่ได้มาในช่วงเวลาดังกล่าว ก็คงต้องรอในปีถัดไปเพื่อที่จะได้มาสัมผัสความงามจากธรรมชาติของดอกกระเจียวที่อุทยานฯ เป็นพันธุ์ไม้ที่เกิดขึ้นที่นี่ จัดว่านางเอกของอุทยานฯ และสวยงามที่สุดในประเทศไทยก็ว่าได้\n            <br><br>\n            <img src="https://travel.mthai.com/app/uploads/2013/06/%E0%B8%94%E0%B8%AD%E0%B8%81%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%88%E0%B8%B5%E0%B8%A2%E0%B8%A72.jpg"><br>\n            <br>\n            ช่วงเวลาดังกล่าว ต่างแย่งกันชูช่อพริ้วไสวไปตามสายลมหนาว นอกฤดู ปูพรมด้วยผืนหญ้าสีเขียว ชุ่มช่ำด้วยหยาดน้ำค้าง อาบฉากหลังด้วยม่านสายหมอกในยามรุ่งอรุณของวันใหม่ จึงเหมาะแก่การขึ้นเยือนบนผืน ทุ่งดอกกระเจียว ขนาดใหญ่กว่า 1000 ไร่ ในยามเช้าตรู่เพราะหากสายกว่านี้บรรยากาศในการเข้าเยี่ยมสัมผัสจะแตกต่างกันราวฟ้ากับดินการเข้าไปยังทุ่งดอกกระเจียว ท่านต้องนำรถไปจอดที่ลานจอดรถขนาดใหญ่ซ้ายมือก่อนถึงอุทยานฯ 500 ม.หรือนำรถจอดบริเวณลานจอดรถที่ทางอุทยานฯ จัดให้ แล้วจึงนั่งรถสองแถวท้องถิ่นที่จอดรอรับนักท่องเที่ยวบริเวณทางเข้าอุทยานฯ เพียงท่านละ ๑๐ บาท(ทั้งขึ้นและลง) โดยรถจะจอดให้ท่านลง ณ.จุดท่องเที่ยวต่าง ๆและท่านสามารถขึ้น-ลง รถคันใด ๆ ก็ได้ โดยขากลับลงมา รถฯ จะส่งท่านยังจุดเดิมที่ท่านขึ้นครั้งแรก\n            <br><br>\n            <img src="https://travel.mthai.com/app/uploads/2014/06/Dok-ka-jeaw-1.jpg"><br>\n            <img src="https://travel.mthai.com/app/uploads/2014/06/Dok-ka-jeaw-2-768x512.jpg"><br>\n            <br>\n            <strong>การเดินทาง</strong><br>\n            ทุ่งดอกกระจียว ตั้งอยู่บริเวณเทือกเขาพังเหยในเขต ต.บ้านไร่ อ.เทพสถิต จ.ชัยภูมิ จากกรุงเทพฯใช้เส้นทางสระบุรี – ชัยบาดาล ต่อด้วยทางหลวงหมายเลข 205 เส้นทางชัยบาดาล – เทพสถิต – ชัยภูมิ ก่อนถึงอำเภอเทพสถิต จะมี ทางแยกซ้ายมือไปป่าหินงาม อีก 29 กิโลเมตร หากเดินทางเส้นทางจาก จ.นครราชสีมา ก็จะใช้เส้นทางนครราชสีมา – เพชรบูรณ์ โดยจะวิ่งผ่าน ต.หนองบัวโคก ผ่านบ.คำปิง เข้าสู่อำเภอเทพสถิต และเลี้ยวขวาบริเวณ สามแยกเพื่อจะไปในเส้นทาง เทพสถิต – ซับใหญ่ และหากท่านมาจากตัว เมืองชัยภูมิ ก็ต้องใช้เส้นทาง ระเหว – ซับใหญ่ – เทพสถิต เมื่อออกจากตัว กิ่งอ.ซับใหญ่จะถึงทางแยกขึ้นอุทยานฯ ก่อนที่จะถึง อ.เทพสถิต\n\n          </ion-card-content>\n      </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"D:\RADAR\src\pages\rain\T-rain\E\flowers-e\flowers-e.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], FlowersEPage);
    return FlowersEPage;
}());

//# sourceMappingURL=flowers-e.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaiCmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PaiCmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaiCmPage = /** @class */ (function () {
    function PaiCmPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PaiCmPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaiCmPage');
    };
    PaiCmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pai-cm',template:/*ion-inline-start:"D:\RADAR\src\pages\rain\T-rain\N\pai-cm\pai-cm.html"*/'<!--\n  Generated template for the PaiCmPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ปาย</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card>\n        <ion-card-header>\n        </ion-card-header>\n        \n        <ion-card-content>\n            <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2017/10/1-%E0%B8%9B%E0%B8%81-1-800x534.jpg">\n            <br>\n            ปาย  เป็นเมืองที่ได้ชื่อว่าเป็นเมืองแห่งความฮิบ เป็นเมืองศิลปะและแหล่งท่องเที่ยวอันดับต้นๆ ที่สร้างชื่อให้กับแม่ฮ่องสอนมานาน   นักท่องเที่ยวส่วนใหญ่ไปเที่ยวปายก็มักเที่ยวช่วงหน้าหนาว  เพื่อไปสัมผัสอากาศเย็น มองวิวทิวทัศน์ภูเขาที่สวยงาม เที่ยววัดวามอารามเก่าแก่ สัมผัสบรรยากาศแบบจีนยูนนาน  เดินเที่ยวชิคๆ ที่ถนนคนเดิน นั่งจิบกาเฟเท่ๆตามร้านกาแฟ  เรียกว่าปายมีครบทุกเรื่องราว แต่หากพูดถึงการเที่ยวปายในฤดูฝนนั้น ภาพของปายในฤดูนี้จะน้อยมาก เรียกว่าไม่ค่อยเป็นที่นิยมเท่าใดนัก แต่ถ้าได้ลองมาเที่ยวซักครั้ง จะได้สัมผัสถึงความมีเสน่ห์ของปายในฤดูนี้ในอีกมุมหนึ่ง ที่มีความเงียบสงบ  สดชื่นเขียวขจี  มีสายหมอกบางคลอเคลียภูเขามาทักทายยามเช้า ซึ่งหากมาเที่ยวในฤดูหนาวอาจมาได้เห็นภาพบบรรยากาศเช่นนี้ก็เป็นได้\n            <br><br>\n            <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2017/10/2-DSC_5281-800x534.jpg"><br>\n            ก่อนเข้าไปยังที่พัก เราแวะไปพักจิบเครื่องดื่มที่ Romance  another story in Pai  ซึ่งให้บริการที่พักบรรยากาศดีสไตล์ชาวฟาร์ม   โดยแบ่งพื้นที่ในส่วนของฟาร์มเลี้ยงสัตว์ ร้านกาแฟ  ตกแต่งให้ความรู้สึกเหมือนอยู่ในชนบทแถบยุโรป  ตั้งอยู่ห่างออกไปนอกตัวเมืองปายแต่ไม่ไกลมาก  พื้นที่ตั้งอยู่ท่ามกลางธรรมชาติเห็นวิวภูเขาแบบพาโนรามา รวมถึงวิวของนาข้าวสีเขียวในฤดูฝน<br><br>\n            <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2017/10/2-DEW_3425.jpg"><br>\n            <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2017/10/10-DEW_3386.jpg"><br>\n            พื้นที่ด้านหน้า คือ  ในส่วนของ Romance Farm ซึ่งมีทั้งฟาร์มเลี้ยงสัตว์ บรรยากาศรอบๆ ฟาร์ม ในช่วงฤดูฝนให้ความรู้สึกสดชื่นเขียวขจี  บ้านสีแดงหลังใหญ่ คือ ฟาร์มเลี้ยงม้า รวมถึงมีร้านกาแฟบรรยากาศน่ารัก ถึงแม้ไม่ได้พักที่นี่ก็สามารถแวะมาจิบเครื่องดื่มและเบอเกอรี่แสนอร่อย นั่งชมวิวริมทุ่ง  ดีไซน์เป็นบ้านไม้ ผสมผสานกับสังกะสี  ตกแต่งออกแนวฟาร์มผสมกับวินเทจนิดๆ มีมุมนั่งเล่นใต้ต้นไม้ใหญ่ มีทั้งชิงช้าให้ไกวเล่น  และเก้าอี้นั่ง<br><br>\n            <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2017/10/16-DSC_5171.jpg"><br>\n            <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2017/10/18-DSC_5216.jpg"><br>\n            <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2017/10/13-DSC_5191.jpg"><br>\n            <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2017/10/15-DSC_5202.jpg"><br>\n            <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2017/10/5-DSC_5206.jpg"><br>\n            <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2017/10/11-DEW_3406.jpg"><br>\n            <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2017/10/9-DSC_5207.jpg"><br>\n            <strong>Romance another story in Pai</strong>\n            <ul>\n                ที่อยู่ 134 ม.8 ต.เวียงเหนือ อ.ปาย จ.แม่ฮ่องสอน 58130<br>\n\n                โทร 080-0313535,053-699809<br>\n\n                การเดินทาง : จากตัวเมืองขับผ่านสะพานข้ามแม่น้ำปาย แล้วเลี้ยวซ้ายแยกแรก สู่ถนน แม่เย็น-แม่นาเติงนอก ขับตรงมาเรื่อยๆ ประมาณ 2.2 กม. จากนั้นเลี้ยวขวาเข้าซอยวัดศรีดอนชัย เมื่อถึงหน้าวัดให้เลี้ยวซ้าย ไม่เกิน 100 ม. จะถึง Romance Farm <br>\n            </ul>\n            <br>\n            หลังจานนั้นมาเช็คอินเข้าที่พัก โดยเลือกพักที่มะลิปาย รีสอร์ท ตั้งอยู่ติดกับร้าน  coffee in love  เป็นรีสอร์ท ที่เรียกได้ว่ามีทำเลที่ตั้งที่ดีอีกแห่งหนึ่งของเมืองปาย  อยู่ติดถนนสายหลัก ไม่ไกลจากตัวเมืองปาย และถนนคนเดินมาก เดินทางสะดวก ที่สำคัญที่พักมีพื้นที่ร่มรื่นกว้างขวาง  ด้านหลังเห็นวิวภูเขา  โดยทางรีสอร์ทจัดทำเป็นจุดชมวิวเป็นระเบียงบนต้นไม้  และมีชิงช้าให้ไกวเล่น<br>\n            <br>\n            <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2017/10/9-DEW_3512-800x533.jpg"><br>\n            <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2017/10/10-DEW_3513-800x533.jpg"><br>\n            <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2017/10/11-DSC_5286-800x534.jpg"><br>\n            บ้านพักมีให้เลือกหลายแบบ เราเลือกพักแบบรถบ้าน มีความเก๋ไปอีก พักได้หลังละ 2 คน ที่พักมีสิ่งอำนวยความสะดวกราบทั้งแอร์ ทีวี ตู้เย็น เครื่องทำน้ำอุ่น ตอนแรกคิดว่าการนอนรถบ้านจะอึดอัดและแคบ แต่ไม่เลย เตียงนอนกว้างขวางพอสมควร หลับสบาย ราคาห้องในช่วงฤดูยิ่งฝนราคาถูกกว่าฤดูหนาว  คืนละ 900 บาท(ไม่รวมอาหารเช้า)  ได้วิวสวยๆ และพื้นที่ของที่พักก็มีมุมให้นั่งเล่นพักผ่อนเยอะ ถือว่าคุ้มราคา<br><br>\n            <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2017/10/11-DEW_3430-800x533.jpg"><br>\n            <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2017/10/12-DEW_3436-800x533.jpg"><br>\n            <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2017/10/DEW_3592-800x533.jpg"><br>\n            <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2017/10/DEW_3532-800x533.jpg"><br>\n            ที่สำคัญที่ตั้งของมาริปาย ใกล้ร้านกาแฟชื่อดัง บรรยากาศดีของเมืองปาย  coffee in love   สามารถเดินจากที่พักไปเพียงนิดเดียวก็ถึงร้าน  ไปนั่งเล่นจิบเครื่องดื่มชม วิวภูเขาและทุ่งนาสีเขียวของเมืองปายได้จากร้านนี้\n            <br><br>\n            <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2017/10/15-DEW_3444-800x533.jpg"><br>\n            <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2017/10/16-DEW_3544-800x533.jpg"><br>\n            <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2017/10/17-DSC_5244-800x534.jpg"><br>\n            <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2017/10/18-DSC_5242-800x534.jpg"><br>\n            <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2017/10/18-DEW_3547-800x533.jpg"><br>\n            <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2017/10/17-DSC_5224-800x534.jpg"><br>\n            <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2017/10/18-8-DSC_5262-800x534.jpg"><br>\n            <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2017/10/23-DEW_3535-800x533.jpg"><br>\n            <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2017/10/24-DEW_3505-800x533.jpg"><br>\n            <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2017/10/25-DEW_3509-800x533.jpg"><br>\n            <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2017/10/32-DSC_5358-800x534.jpg"><br>\n            <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2017/10/38-DSC_5376-800x534.jpg"><br>\n            <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2017/10/28-DSC_5311-800x534.jpg"><br>\n            ถนนคนเดินปายในช่วงฤดูฝน นักท่องเที่ยวไม่คึกคักมาก  นักท่องเที่ยวคนไทยมีน้อย ส่วนใหญ่จะเป็นคนจีนมากกว่า มาเดินถนนคนเดิน มีแต่ป้ายภาษาจีน มีความรู้สึกว่าคนจีนจะครองเมืองปายแล้วนะเนี่ย\n            <br><br>\n            <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2017/10/28-DSC_5311-800x534.jpg"><br>\n            <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2017/10/29-DSC_5313-800x534.jpg"><br>\n            <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2017/10/31-DSC_5326-800x534.jpg"><br>\n            <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2017/10/26-DSC_5309-800x534.jpg"><br>\n            ร้านของโปสการ์ด และ ของที่ระลึกต่างๆ ที่มีให้เห็นตลอดทั้งสอง ข้างทาง แอบชื่นชอบร้านนี้เป็นพิเศษ หน้าร้านเป็นรถสีชมพู และของที่นำมาขายส่วนใหญ่ มีความเก๋ และมีกิมมิคมาก อย่างเช่นพวงกุญแจไม้ก๊อก ตอนแรกก็มองว่าเป็นพวกกุญแจธรรมดา แต่พอเจ้าของร้านสาธิตการใช้งานว่าสามารถนำมาวางมือถือได้เลยมีความน่าสนใจขึ้นมาทันที แถมราคาที่ขายไม่แพงด้วย  7 อัน 100 บาท เท่านั้น\n            <br><br>\n            <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2017/10/33-DSC_5382-800x534.jpg"><br>\n            <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2017/10/34-DSC_5335-800x534.jpg"><br>\n            <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2017/10/35-DSC_5332-800x534.jpg"><br>\n            <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2017/10/36-DSC_5353-800x534.jpg"><br>\n\n            เช้ามืดประมาณ 6.30 น. เราออกจากที่พัก เพื่อไปยังจุดชมทะเลหมอกหยุ่นไหล  ตั้งอยู่ที่ หมู่บ้านสันติชล ตำบลเวียงใต้ อำเภอปาย จังหวัดแม่ฮ่องสอน  ห่างจากหมู่บ้านสันติชล ประมาณ   1.6  กิโลเมตร เป็นจุดชมทะเลหมอกและพระอาทิตย์ขึ้นที่สวยงามของอำเภอปาย ซึ่งเป็นที่นิยมของนักท่องเที่ยว สามารถมองเห็นทะเลหมอกที่ถูกรายล้อมไปด้วยทิวเขาน้อยใหญ่ และทัศนียภาพบ้านเรือนของเมืองปายที่ถูกปกคลุมด้วยสายหมอก   คำว่าหยุนไหล เป็นภาษาจีนกลาง หมายถึง แหล่งที่เมฆไหลมารวมกัน ซึ่งเปรียบเสมือนคนจีนยูนานที่อพยพมาจากเมืองจีน แต่ในที่สุดก็อพยพย้ายถิ่นฐานมารวมกัน จุดชมทะเลหมอกหยุนไหล สามารถชมได้ทั้งฤดูฝนและฤดูหนาว\n            <br><br>\n            <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2017/09/DSC_5457.jpg"><br>\n            <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2017/09/DSC_5411.jpg"><br>\n            <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2017/09/DSC_5412.jpg"><br>\n            บริเวณจุดชมวิวได้จัดทำเป็นระเบียงชมวิวและจุดถ่ายภาพน่ารักๆ หลายจุด ทั้งระเบียงชมวิว จุดคล้องกุญแจคู่รัก  ป้ายร้อยที่บอกรัก  และศาลาสำหรับนั่งชมวิวยามเช้า   ให้นักท่องเที่ยวได้ถ่ายภาพ<br><br>\n            <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2017/09/DSC_5437.jpg"><br>\n            <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2017/09/DSC_5442.jpg"><br>\n            นอกจากนี้ยังมีบริการเครื่องดื่มชาร้อนใส่มาในกาน้ำร้อน ให้จิบไปชมวิวไปได้อีกด้วยโดยคิดราคาชุดละ 20 บาท  สำหรับการมาชมจุดชมวิวเสียค่าเข้าชมคนละ  20 บาท  บริเวณจุดชมวิวมีสิ่งอำนวยความสะดวก ได้แก่  ห้องพัก ลานกางเต็นท์ ห้องน้ำ และร้านค้า คอยบริการนักท่องเที่ยวช่วงเวลาที่เหมาะสำหรับชมทะเล ควรมาแต่เช้าประมาณ 6 โมง – 7 โมงเช้า\n            <br><br>\n            <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2017/09/DSC_5419.jpg"><br>\n            <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2017/09/DSC_5429.jpg"><br><br>\n\n            <strong>การเดินทางไปจุดชมทะเลหมอกหยุนไหล  </strong><br><br>\n            ตั้งอยู่เส้นทางเดียวกับหมู่บ้านสันติชน จากตัวเมืองปาย ผ่านวัดน้ำฮู ตรงไปจะถึงหมู่บ้านสันติชน จากนั้นตรงไปจนเกือบสุดทางผ่านหมู่บ้าน จะมีป้ายเขียนว่าจุดชมทะเลหมอกหยุนไหล เส้นทางก่อนถึงหยุนไหล จะแคบและชันเล็กน้อยควรขับรถด้วยความระมัดระวัง\n            <br><br>\n            จากทะเลหมอกหยุ่นไหลไปต่อยัง   สะพานบุญโขกู้สุ่ย   สะพานไม้ไผ่แห่งศรัทธา  ตั้งอยู่ในหมู่บ้านแพมบก ตำบลทุ่งยาว อำเภอปาย จังหวัดแม่ฮ่องสอน ห่างจากตัวเมืองปายประมาณ 10 กิโลเมตร  เป็นสะพานไม้ไผ่ที่ทอดยาวคดเคี้ยวไปในทุ่งนาข้าวโดย มีฉากหลังเป็นภูเขาสวยงามจนกลายมาเป็นสถานที่ท่องเที่ยวที่น่าสนใจอีกแห่งหนึ่งของเมืองปาย  หากมาจากตัวเมืองปายผ่านร้าน coffee in  love ทางเดียวกับโรงเรียนบ้านแพมบก จะเจอซอยให้เลี้ยวขวาไปในซอยนั้น จากนั้นขับตรงไปเรื่อยๆ จากปากทางเข้า ไปจนถึงหมู่บ้านแพมบก บางช่วงทาง ค่อนข้างชัน และแคบ  ถึงแม้ถนนจะเทปูนแล้วแต่บางช่วงทางชำรุด ไม่ค่อยดีนัก  ในช่วงฤดูฝนรถที่สัญจรไปมาได้แนะนำว่าเป็นรถกระบะจะเหมาะที่สุด  รถมอเตอร์ไซต์วิ่งได้ตามปกติ แต่ถ้าเป็นรถรถตู้หรือรถเก๋งไม่แนะนำเพราะสงสารรถมากๆ  แต่ตอนมาถึงเห็นรถเก๋งเข้ามาคันนึง เป็นคันเดียวที่มาจอด  ตอนนั้นยังมองด้วยความรู้สึกว่าโอ้โห เก่งมาก ที่สามารถเข้ามาได้\n            <br><br>\n            <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2017/09/1-cover-3.jpg"><br>\n            <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2017/09/4-1.jpg"><br>\n            <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2017/09/5-1.jpg"><br>\n            <br>\n            โขกู้โส่ เป็นภาษาไทยใหญ่ คำว่าโข แปลว่าสะพาน และ กู้โส่ แปลว่า กุศล หรือ บุญ แปลเป็นภาษาไทยว่า  สะพานบุญโขกู้สุ่ย  เกิดขึ้นจากพระอาจารย์สาคร จารุธัมโม ผู้ดูแลสำนักสงฆ์คายคีรี ได้มีแนวคิดที่จะทำสะพานเชื่อมระหว่างสำนักสงฆ์ กับหมู่บ้านแพมบก เพื่อให้พระสงฆ์สามารถเดินไปบิณฑบาตในหมู่บ้าน ที่ห่างกันประมาณ 1 กม. เดิมพระสงฆ์จะต้องเดินผ่านทุ่งนาข้าวของราษฎรซึ่งเส้นทางที่แคบลื่นในหน้าฝน สร้างความลำบากในการเดินทางและชาวบ้านที่จะเดินทางมาทำบุญที่วัด  จึงปรึกษากับคณะศรัทธาญาติโยม ในหมู่บ้านแพมบก บ้านปางตอง และบ้านแม่แลบ ในการที่จะสร้างสะพานบุญขึ้นมา และคณะศรัทธาต่างเห็นชอบ จึงได้ลงมือสร้างสะพานขึ้นมาเมื่อต้นปี พ.ศ.2559\n            <br><br>\n            <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2017/09/7-DSC_5528.jpg"><br>\n            <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2017/09/11-DSC_5559.jpg"><br>\n            <br>\n            สะพานบุญโขกู้สุ่ย   มีความยาวทั้งหมด 815 เมตร สูงจากพื้นดินประมาณ 1-2 เมตร สร้างขึ้นจากโครงปูนและเหล็ก ใช้ไม้ไผ่สานเป็นพื้นด้านบน กว้างประมาณ 1 เมตร สองฟากฝั่งทางเดินจะเป็นนาข้าวสุดกว้างไกล ซึ่งถือว่าเป็นสะพานไม้ไผ่อีกแห่งหนึ่งที่มีความสวยงามและยาวมาก  ความมีเสน่ห์ของสะพานแห่งนี้  คือ ปกติเราจะเห็นแต่สะพานไม้ไผ่ที่สร้างเป็นเส้นตรงและอาจมีโค้งบ้าง เพียงอย่างเดียว แต่สะพานบุญโขกู้สุ่ย  เป็นสะพานที่มีทางแยกเชื่อมต่อไปยังสะพานในบริเวณอื่นได้อีกหลายจุด ทำให้เรามีความเพลิดเพลินในการเดินชม ไปยังจุดตรงนั้นตรงนี้ ไม่ได้ตัดตรงเพียงอย่างเดียว  บริเวณสะพายมีบ้านพักแบบโฮมสเตย์ที่เปิดให้บริการ ตั้งอยู่ท่ามกลางนาข้าวที่เขียวขจี มีเบอร์ติดต่อเขียนไว้ด้านหน้าด้วย\n            <br><br>\n            <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2017/09/8-DEW_3572.jpg"><br>\n            <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2017/09/12-DSC_5541.jpg"><br>\n            <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2017/09/19-DSC_5557.jpg"><br>\n            <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2017/09/14-DSC_5553.jpg"><br>\n\n\n\n\n\n\n\n\n\n\n\n\n\n          </ion-card-content>\n      </ion-card>\n</ion-content>\n'/*ion-inline-end:"D:\RADAR\src\pages\rain\T-rain\N\pai-cm\pai-cm.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], PaiCmPage);
    return PaiCmPage;
}());

//# sourceMappingURL=pai-cm.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeeLorSuWaterfallPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TeeLorSuWaterfallPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TeeLorSuWaterfallPage = /** @class */ (function () {
    function TeeLorSuWaterfallPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TeeLorSuWaterfallPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TeeLorSuWaterfallPage');
    };
    TeeLorSuWaterfallPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tee-lor-su-waterfall',template:/*ion-inline-start:"D:\RADAR\src\pages\rain\T-rain\N\tee-lor-su-waterfall\tee-lor-su-waterfall.html"*/'<!--\n  Generated template for the TeeLorSuWaterfallPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>น้ำตกทีลอซู</ion-title>\n  </ion-navbar>\n\n</ion-header>\n  \n\n<ion-content padding>\n    <ion-card>\n        <ion-card-header>\n          <h1>น้ำตกทีลอซู</h1>\n        </ion-card-header>\n        \n        <ion-card-content>\n          <img src="https://s.isanook.com/tr/0/rp/r/w700/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL3RyLzAvdWQvMTkwLzk1MTAxMi8wMDEuanBn.jpg">\n          <br>\n          น้ำตกทีลอซู เกิดจากลำห้วยกล้อท้อไหลมาจากผืนป่าบริเวณทิศตะวัตตกติดชายแดนพม่า ลำน้ำทั้งสายตกลงจากหน้าผาสูงกลางป่าทึบของป่าทุ่งใหญ่ในเขตพื้นที่อำเภออุ้มผาง จังหวัดตาก\n          <br><br>\n          <strong>น้ำตกทีลอซู</strong>\n           เป็นน้ำตกที่ มีความสูงประมาณ 300 เมตร เมื่อภาพความสวยงามและยิ่งใหญ่ของน้ำตกทีลอซูปรากฏสู่สายตาแก่นักท่องเที่ยวจึงทำให้ชื่อเสียงของทีลอซูโด่งดังในเวลาอันรวดเร็ว ผู้คนมากมายต่างได้ยินเรื่องราวความยิ่งใหญ่ของน้ำตกทีลอซู ที่ผ่านมานักท่องเที่ยวมากมายได้เข้าไปสัมผัสแล้วกลับมาบอกเล่าถึงความสวยงาม\n            <br><br>\n            <img src="https://s.isanook.com/tr/0/ud/190/951012/t4.jpg">\n            <br>\n            ปัจจุบันน้ำตกทีลอซู อยู่ในพื้นที่การดูแลของเขตรักษาพันธุ์สัตว์ป่าอุ้มผาง น้ำตกทีลอซูไม่ใช่อุทยานแห่งชาติ เป็นเพียงเขตรักษาพันธุ์สัตว์ป่าซึ่งมีกฎระเบียบการเข้าไปในพื้นที่เคร่งครัด จุดประสงค์เพื่อปกป้องป่าไว้ไม่ให้ถูกทำลายจากมนุษย์นั่นเอง\n            <br><br>\n            <img src="https://s.isanook.com/tr/0/ud/190/951012/t6.jpg"><br>\n            แต่ก่อนการเดินทางเข้าไปยากลำบาก ต้องล่องแพไม้ไผ่เข้าไปจนถึงจุดหนึ่งซึ่งต้องขึ้นบกและเดินเท้าเข้าไป ซึ่งเดี๋ยวนี้เค้ามีถนนดินตัดเข้าไปให้แล้ว แต่ถนนเข้าน้ำตกทีลอซูจะถูกปิดในช่วงฤดูฝนและจะเปิดให้เข้าอีกครั้งในเดือนพฤศจิกายน<br><br>\n            การเข้าไปชมน้ำตกไม่สามารถนำอาหาร ขนม และขวดน้ำเข้าไปได้นะครับ ทุกสิ่งทุกอย่างที่นำติดตัวไปจะต้องฝากไว้ที่จุดตรวจ ด้วยเหตุนี้จึงทำให้น้ำตกทีลอซูยังคงสะอาดปราศจากขยะได้จนถึงทุกวันนี้\nการล่องแพยังเป็นการเดินทางที่เป็นอมตะสำหรับการเดินทางในช่วงฤดูฝน ตั้งแต่เริ่มฤดูฝนไปจนถึง 1 พฤศจิกายน เส้นทางเข้าทีลอซูถูกปิด การเดินทางเดียวที่ทำได้คือการล่องแพ แต่ก่อนใช้แพไม้ไผ่แต่ในปัจจุบันเปลี่ยนมาใช้เรือยางลำใหญ่ปลอดภัยกว่าและยังเป็นการอนุรักษ์ จากตัวเมืองอุ้มผางจะต้องลงเรือยางล่องมาตามลำน้ำแม่กลอง ผ่านบ่อน้ำร้อนและแก่งต่างๆ ตลอดเส้นทางที่ล่องเรือผ่านมีทัศนียภาพที่สวยงามและยังคงเป็นธรรมชาติมากๆ เมื่อล่องมาถึงครึ่งทางนักท่องเที่ยวก็จะได้เห็นความสวยงามของน้ำตกทีลอจ่อที่ตกลงมาจากหน้าผาสูงลงสู่ลำน้ำแม่กลอง ถัดจากนั้นมาไม่ไกลก็จะผ่านน้ำตกสายรุ้ง<br><br>\nหากเดินทางไปในช่วงเวลาที่เหมาะสมก็จะเห็นรุ้งกินน้ำที่เกิดจากแสงที่ตกกระทบกับละลองน้ำของสายน้ำตก นอกจากนี้ยังมีน้ำตกริมทางให้ได้หยุดแวะเล่นน้ำกันอีกด้วย ระยะเวลาสำหรับการล่องเรือยางประมาณ 3-4 ชั่วโมง ขึ้นอยู่กับความแรงของกระแสน้ำในแต่ละช่วงเวลา เมื่อขึ้นจากเรือยางจะต้องเดินเท้าต่อไปยังจุดกางเต็นท์พักแรมที่เขตรักษาพันธุ์สัตว์ป่าอุ้มผางอีกประมาณ 10 กิโลเมตร ประมาณ 1 กิโลเมตรแรก เป็นเส้นทางเดินผ่านป่า ช่วงที่เหลือเป็นถนนลูกรังอัดแน่น สภาพเส้นทางมีขึ้นเนินเป็นบางช่วงโดยเฉพาะช่วงแรกๆ จะเป็นการเดินขึ้นเนินเป็นส่วนใหญ่ ช่วงกลางและท้ายจะเป็นทางลงเนิน วันถัดมาจึงจะได้ชื่นชมกับความงามของน้ำตกทีลอซู ตอนเดินทางกลับก็จะต้องเดินย้อนกลับมาตามเส้นทางเดิมเพื่อกลับมาลงเรือยางล่องต่อไปยังจุดที่ลำน้ำบรรจบกับถนน แล้วขึ้นรถกลับสู่ที่พัก<br><br>\n<img src="https://f.ptcdn.info/694/025/000/1416306232-pantiptalk-o.jpg"><br>\n<strong>สำหรับการเดินทางไปทีลอซู</strong><br><br>\nในช่วงเวลาที่ถนนเปิดให้รถเข้าจะมีการเดินทางเป็น 2 แบบ ส่วนใหญ่จะนิยมล่องเรือยางไปยังจุดที่ขึ้นบก จากนั้นก็ขึ้นรถต่อไปยังจุดกางเต็นท์ ขากลับก็นั่งรถกลับตรงไปยังที่พักในตัวเมืองอุ้มผางแบบสบายๆ ไม่ต้องเดินครับ ส่วนอีกแบบหนึ่งสำหรับผู้ที่มีเวลาน้อยและนิยมประหยัด คือการขับรถรวดเดียวจากตัวเมืองอุ้มผางไปยังจุดกางเต็นท์ จากนั้นเดินเท้าเข้าไปเที่ยวน้ำตกแล้วขับรถกลับได้เลย<br><Br>\n  ถึงแม้ช่วงเวลานั้นเส้นทางจะเปิด นักท่องเที่ยวก็สามารถนั่งรถเข้าไปได้ แต่การล่องเรือยางเป็นการเดินทางที่นักท่องเที่ยวให้ความนิยมมากที่สุดเกือบ 99% ทั้งนี้เพราะการล่องเรือยางเป็นรสชาติของการเดินทางไปน้ำตกทีลอซู เหมือนการเดินทางในรุ่นแรกเริ่ม และนักท่องเที่ยวยังได้สัมผัสกับธรรมชาติที่สวยงามของบรรยากาศป่าเขาริมทาง จึงเรียกได้ว่าเป็นการเดินทางที่คุ้มค่ามากๆเลยล่ะครับ<br><br>\n  ด้านการเดินทางไปอุ้มผาง จากกรุงเทพฯ ให้วิ่งไปตามเส้นทางถนนสายเอเชียมุ่งสู่ตาก แต่ยังไม่ถึงตากเจอแยกซ้ายไปแม่สอด เลี้ยวซ้ายไปตามทางหลวงหมายเลข 105 ไปจนถึงตัวเมืองแม่สอดให้แยกซ้ายไปอุ้มผาง ตามทางหลวงหมายเลข 1090 สุดทางสาย 1090 ที่อุ้มผาง\n  <br><br>\n  เส้นทางจากแม่สอดไปอุ้มผาง เป็นเส้นทางลอยฟ้า ระยะทางรวม 169 กม. มีโค้ง 1219 โค้ง เมื่อเปรียบเทียบกับเส้นทางแม่ฮ่องสอน 349 กม. 1800 โค้ง จะเห็นว่าสายอุ้มผางไม่ธรรมดา เป็นเส้นทางที่ต้องใช้ความชำนาญและความระมัดระวังในการขับขี่เป็นพิเศษด้วยนะครับ\n  <br><br>\n        \n          </ion-card-content>\n      </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"D:\RADAR\src\pages\rain\T-rain\N\tee-lor-su-waterfall\tee-lor-su-waterfall.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], TeeLorSuWaterfallPage);
    return TeeLorSuWaterfallPage;
}());

//# sourceMappingURL=tee-lor-su-waterfall.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KhaoYaiCPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the KhaoYaiCPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var KhaoYaiCPage = /** @class */ (function () {
    function KhaoYaiCPage(navCtrl, navParams, inAppBrowser) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.inAppBrowser = inAppBrowser;
    }
    KhaoYaiCPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad KhaoYaiCPage');
    };
    KhaoYaiCPage.prototype.openRe1 = function () {
        this.inAppBrowser.create("http://www.khaoyainationalpark.com/");
    };
    KhaoYaiCPage.prototype.openRe2 = function () {
        this.inAppBrowser.create("https://www.facebook.com/KhaoYaiNationalPark1962/");
    };
    KhaoYaiCPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-khao-yai-c',template:/*ion-inline-start:"D:\RADAR\src\pages\rain\T-rain\C\khao-yai-c\khao-yai-c.html"*/'<!--\n  Generated template for the KhaoYaiCPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>อุทยานแห่งชาติเขาใหญ่</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card>\n        <ion-card-header>\n    \n        </ion-card-header>\n        \n        <ion-card-content>\n            <img src="https://img.live/images/2018/10/17/13e8b8.jpg" alt="13e8b8.jpg"><br>\n          อุทยานแห่งชาติเขาใหญ่ หรือ "เขาใหญ่" เป็นอุทยานแห่งชาติแห่งแรกของประเทศไทย มีอาณาเขตครอบคลุม 11 อำเภอ ของ 4 จังหวัด คืออำเภอมวกเหล็ก อำเภอแก่งคอย จังหวัดสระบุรี อำเภอปากช่อง อำเภอวังน้ำเขียว จังหวัดนครราชสีมา อำเภอนาดี อำเภอกบินทร์บุรี อำเภอประจันตคาม อำเภอเมือง จังหวัดปราจีนบุรี และอำเภอปากพลี อำเภอบ้านนา อำเภอเมือง จังหวัดนครนายก ได้รับสมญานามว่าเป็นอุทยานมรดกของกลุ่มประเทศอาเซียน เป็นป่าผืนใหญ่ตั้งอยู่ในเทือกเขาพนมดงรัก\n          <br><br>\n          <img src="https://img.live/images/2018/10/17/2db9bc.jpg" alt="2db9bc.jpg"><br>\n          <br>\n          ในส่วนหนึ่งของดงพญาไฟหรือดงพญาเย็นในอดีต ประกอบด้วยขุนเขาน้อยใหญ่สลับซับซ้อนหลายลูก เป็นแหล่งกำเนิดของต้นน้ำลำธารที่สำคัญหลายสาย เช่น แม่น้ำนครนายกและแม่น้ำมูล อุดมสมบูรณ์ไปด้วยพรรณไม้และสัตว์ป่านานาชนิด เช่น ช้างป่า กวางป่า เก้ง กระทิง เสือ ตลอดจนมีลักษณะทางธรรมชาติที่สวยงาม มีเนื้อที่ 1,353,471.53 ไร่ หรือ 2,165.55 ตารางกิโลเมตร (กว้างใหญ่มาก ๆ)\n          <br><Br>\n            <img src="https://img.live/images/2018/10/17/3b29a9.jpg" alt="3b29a9.jpg"><br>\n          <br>\n          ด้วยสภาพป่าที่รกทึบและได้รับอิทธิพลจากลมมรสุม ทำให้ที่อุทยานแห่งชาติเขาใหญ่เกิดฝนตกชุกตามฤดูกาล อากาศไม่ร้อนจัดและหนาวจัดจนเกินไป จัดอยู่ในประเภทเย็นสบายตลอดทั้งปี อุณหภูมิเฉลี่ยตลอดปีประมาณ 23 องศาเซลเซียส เหมาะแก่การเดินทางไปท่องเที่ยวเป็นที่สุด ยิ่งในช่วงฤดูหนาว ระหว่างเดือนตุลาคม - กุมภาพันธ์ คนจะนิยมไปเที่ยวที่นี่กันมาก เพราะนอกจากอากาศจะดีแล้ว บรรยากาศหน้าหนาวของที่นี่ยังโรแมนติกซะด้วย\n          <br><br>\n          <img src="https://img.live/images/2018/10/17/4cdbd6.jpg" alt="4cdbd6.jpg"><br>\n          <br>\n          <strong> สำหรับสถานที่ท่องเที่ยวน่าสนใจที่อุทยานแห่งชาติเขาใหญ่นั้น มีด้วยกันหลายแห่ง ไม่ว่าจะเป็น</strong>\n          <br><br>\n          <strong>"ศาลเจ้าพ่อเขาใหญ่" </strong>สร้างขึ้นเมื่อ ปี พ.ศ. 2505 ตั้งอยู่กิโลเมตรที่ 24 ถนนธนะรัชต์ เส้นทางขึ้นเขาใหญ่ด้านอำเภอปากช่อง นักท่องเที่ยวที่ผ่านเข้าอุทยานแห่งชาติ และประชาชนทั่วไป มักแวะไปกราบไหว้ ขอโชคลาภและขอพรอยู่เสมอ\n            <br>\n            <br>\n            <img src="https://img.live/images/2018/10/17/53eef5.jpg" alt="53eef5.jpg"><br>\n            <br>\n            <strong> "น้ำตกเหวนรก"</strong> เป็นน้ำตกขนาดใหญ่และสูงที่สุด อยู่ทางทิศใต้ของอุทยานแห่งชาติเขาใหญ่ มีทั้งหมด 3 ชั้น ชั้นแรกสูงประมาณ 60 เมตร เมื่อน้ำไหลผ่านหน้าผาชั้นนี้จะพุ่งไหลลงสู่หน้าผาชั้นที่ 2 และ 3 ที่อยู่ถัดลงไปใกล้ ๆ กันในลักษณะการไหลตก 90 องศา รวมความสูงไม่ต่ำกว่า 150 เมตร เป็นสายน้ำที่ไหลทะลักไปสู่หุบเหวเบื้องล่าง ในฤดูฝนน้ำจะไหลแรงมากจนดูน่ากลัว (โห... น่าตื่นตาตื่นใจ)\n            <br>\n            <strong>"น้ำตกกองแก้ว"</strong>  เป็นน้ำตกเตี้ย ๆ ที่เกิดจากห้วยลำตะคอง ในฤดูฝนจะดูสวยงามมาก เหมาะสำหรับการเล่นน้ำ ใกล้บริเวณน้ำตกจะมีสะพานแขวนลำห้วยถึง 2 สะพาน ที่สำคัญน้ำตกแห่งนี้อยู่ห่างจากศูนย์บริการนักท่องเที่ยวเขาใหญ่ ประมาณ 100 เมตรเท่านั้นเองค่ะ อย่างไรก็ตามสำหรับห้วยลำตะคองนั้น ถือเป็นแนวแบ่งเขต 2 จังหวัด คือจังหวัดนครนายกและจังหวัดนครราชสีมา \n            <br>\n            <strong>"น้ำตกผากล้วยไม้"</strong> เป็นน้ำตกขนาดกลางที่อยู่ในห้วยลำตะคองเช่นเดียวกัน มีลักษณะเป็นหน้าผาลดหลั่นกันลงมา สูงประมาณ 10 เมตร อยู่ห่างจากศูนย์บริการนักท่องเที่ยวเขาใหญ่ ประมาณ 7 กิโลเมตร สามารถเข้าถึงได้โดยทางรถยนต์และทางเดินเท้า ทางเดินเริ่มจากจุดกางเต็นท์ผากล้วยไม้ไปประมาณ 1.2 กิโลเมตร โดยเดินเลียบไปตามห้วยลำตะคองที่เต็มไปด้วยพรรณไม้ใหญ่ร่มครึ้ม (เดินสบายแดดไม่ร้อน) แถมยังมีโอกาสพบนกหลากหลายชนิด ไม่ว่าจะเป็น นกกางเขนน้ำหลังเทา นกกะรางคอดำ นกปรอดโอ่งเมืองเหนือ ฯลฯ \n            <br>\n            <img src="https://img.live/images/2018/10/17/6303ba.jpg" alt="6303ba.jpg"><br>\n            <br>\n            <strong>"น้ำตกเหวสุวัต"</strong> ถือเป็นน้ำตกที่มีชื่อเสียงมาก และเป็นที่รู้จักของประชาชนทั่ว ๆ ไป ตั้งอยู่สุดถนนธนะรัชต์ หรือจะเดินเท้าต่อจากน้ำตกผากล้วยไม้ไปก็ได้ ประมาณ 3 กิโลเมตร น้ำตกนี้มีลักษณะเป็นสายน้ำ ตกลงมาจากหน้าผาสูงประมาณ 20 เมตรเศษ บริเวณด้านล่างของน้ำตกเป็นแอ่งน้ำและลำธาร เหมาะที่จะลงเล่นน้ำ แต่ในช่วงฤดูฝนนั้นจะมีน้ำมากและไหลแรง การลงเล่นน้ำจึงควรใช้ความระมัดระวังอย่างยิ่ง เพื่อความปลอดภัยค่ะ\n            <br>\n            <strong>"น้ำตกวังเหว"</strong> เป็นน้ำตกขนาดใหญ่มีความกว้างประมาณ 40 - 60 เมตร ในฤดูฝนมีน้ำมากและไหลแรง อยู่ห่างจากหน่วยพิทักษ์อุทยานแห่งชาติที่ ขญ.9 (ใสใหญ่) ประมาณ 17 กิโลเมตร อยู่ใจกลางป่าทางด้านทิศตะวันออกของอุทยานแห่งชาติเขาใหญ่ การเดินทางจะต้องใช้เวลาประมาณ 2 วัน เหมาะสำหรับผู้ที่รักการผจญภัยไปพักค้างแรมในป่าเป็นอย่างยิ่ง ตลอดเวลาการเดินทางจะพบกับพรรณไม้นานาชนิด และแก่งหินที่สวยงามตามธรรมชาติมากมาย<br>\n            <strong>"น้ำตกเหวไทร"</strong> เป็นน้ำตกอีกแห่งหนึ่งที่อยู่ทางใต้ถัดไปจากน้ำตกเหวสุวัต โดยห่างจากน้ำตกเหวสุวัตประมาณ 700 เมตร น้ำตกนี้มีลักษณะเป็นหน้าผากว้างเต็มลำห้วย สูงประมาณ 5 เมตร ในฤดูฝนน้ำตกนี้จะไหลแรงเต็มหน้าผา สวยงามน่าชมมาก ทั้งนี้ การเดินทางไปน้ำตกเหวไทรไปได้ 2 เส้นทาง คือ เดินเท้าต่อไปจากเหวสุวัตระยะทางประมาณ 700 เมตร หรือจะเดินจากศูนย์บริการนักท่องเที่ยวเขาใหญ่ ไปตามเส้นทางเดินเท้าเส้น "กองแก้ว - เหวสุวัต" ก็ได้ ระยะทางประมาณ 8.3 กิโลเมตร แถมตามสองข้างทางเดินที่ผ่านนั้น ก็จะมีสิ่งที่น่าสนใจอื่น ๆ อีกมากมาย เช่น สมุนไพร และเห็ดป่า (ชักอยากเห็นแล้วสิ)\n            <br>\n            <strong>"น้ำตกเหวประทุน"</strong> เป็นน้ำตกที่อยู่ในห้วยลำตะคองอีกแห่งเหมือนกัน มีลักษณะเป็นหน้าผากว้างและสูงสวยงามมาก อยู่ถัดจากน้ำตกเหวไทรประมาณ 1 กิโลเมตรเศษ สามารถเดินทางจากน้ำตกเหวสุวัตไปก็ได้ หรือจะเดินจากบริเวณศูนย์บริการนักท่องเที่ยวเขาใหญ่ไปก็ได้ เดินตามเส้นทางเดินเท้าเส้น "กองแก้ว – เหวสุวัต" ระยะทางประมาณ 8 กิโลเมตร<br>\n            <strong>"น้ำตกเจ็ดคต"</strong> อยู่ในเขตพื้นที่หมู่ที่ 8 บ้านหินตั้ง ตำบลชะอม อำเภอแก่งคอย จังหวัดสระบุรี เป็นน้ำตกขนาดเล็ก ระหว่างทางเดินจากหน่วยพิทักษ์อุทยานแห่งชาติที่ ขญ.18 (เจ็ดคต) ไปยังน้ำตกเจ็ดคต ประมาณ 1,200 เมตร สามารถลงเล่นน้ำในลำห้วยได้ตลอดเส้นทาง เมื่อถึงน้ำตกมองเห็นน้ำไหลตกจากผาหินเป็นทางยาว สูงประมาณ 10 เมตร ลงสู่แอ่งน้ำขนาดใหญ่คล้ายสระว่ายน้ำ<br>\n            <br>\n            <img src="https://img.live/images/2018/10/17/731ac8.jpg" alt="731ac8.jpg"><br>\n            <br>\n            <strong>น้ำตกโกรกอีดก</strong>น้ำตกโกรกอีดก เป็นน้ำตกขนาดใหญ่ที่สวยงามมีหลายชั้น ตั้งอยู่บริเวณหมู่ที่ 5 บ้านบึงไม้ ตำบลชะอม อำเภอแก่งคอย จังหวัดสระบุรี เป็นน้ำตกที่เกิดจากเทือกเขาใหญ่ ความสูงประมาณ 350 เมตร มีน้ำตลอดทั้งปีแต่จะสวยมากในช่วงฤดูฝน เพราะปริมาณน้ำจะไหลเต็มหน้าผา<br>\n            <strong>แก่งหินเพิง</strong>เป็นแก่งหินขนาดใหญ่กลางแม่น้ำใสใหญ่ในเขต อ.นาดี จ.ปราจีนบุรี แก่งหินเพิงจะสวยงามมากที่สุดในยามน้ำหลาก ราวเดือนกรกฎาคม - พฤศจิกายน ฤดูฝนจึงเป็นช่วงเวลาที่เหมาะที่สุดสำหรับการท่องเที่ยวแก่งหินเพิง มีนักท่องเที่ยวเดินทางมาเล่นน้ำตามแก่งต่าง ๆ เป็นจำนวนมาก สำหรับผู้ชื่นชอบความตื่นเต้นเร้าใจ ยังนิยมนำการล่องแก่งแพยาง จากแก่งหินเพิงลงมายังหน่วยพิทักษ์อุทยานแห่งชาติที่ ขญ.9 อีกด้วย<br>\n            <br>\n            <strong>การเดินทาง</strong><br>\n            อุทยานแห่งชาติเขาใหญ่อยู่ห่างจากกรุงเทพฯ ประมาณ 205 กิโลเมตร สามารถไปได้ 2 เส้นทาง คือ แยกจากถนนมิตรภาพตรงกิโลเมตรที่ 56 ไปตามถนนธนะรัชต์ประมาณ 23 กิโลเมตร อีกเส้นทางหนึ่งคือจากกรุงเทพฯ - แยกหินกอง แล้วไปตามทางหลวงหมายเลข 33 (นครนายก - ปราจีนบุรี) ถึงสี่แยกเนินหอมใช้ทางหลวง 3077 ไปถึงเขาใหญ่ ทั้งนี้เส้นทางที่สองค่อนข้างชันเหมาะที่จะใช้เป็นทางลงมากกว่าค่ะ\n            <br>\n            หากโดยสารรถประจำทางจากกรุงเทพฯ ให้ลงที่อำเภอปากช่อง แล้วต่อรถสองแถวขึ้นเขาใหญ่บริเวณหน้าตลาดปากช่อง รถจะไปถึงตรงแค่ด่านเก็บเงิน มีบริการระหว่างเวลา 06.00-17.00 น. จากนั้นต้องโบกรถขึ้นไปยังที่ทำการ หรือจะเช่ารถจากปากช่องเลยก็ได้ (เดินทางก็ง่ายแถมยังสะดวกสบายอีกด้วย)\n            <br>\n            <strong>อัตราค่าบริการผ่านเข้าอุทยานแห่งชาติ</strong><br>\n            <ul>\n                – นักท่องเที่ยวชาวไทย ผู้ใหญ่ 40 บาท/คน เด็ก 20 บาท/คน<br>\n                – นักท่องเที่ยวต่างชาติ ผู้ใหญ่ 400 บาท/คน เด็ก 200 บาท/คน<br><br>\n                <img src="https://img.live/images/2018/10/17/9cbbd0.jpg"><br>\n            </ul>\n            <br>\n            สอบถามรายละเอียดเพิ่มเติมได้ที่ กรมอุทยานแห่งชาติ สัตว์ป่า และพันธุ์พืช โทรศัพท์ 0 2562 0760 ศูนย์บริการนักท่องเที่ยว โทรศัพท์ 08 6092 6529 ด่านตรวจศาลเจ้าพ่อ โทรศัพท์ 08 6092 6531 ส่องสัตว์กลางคืน โทรศัพท์ 08 1063 9241 หรือที่ทำการอุทยานแห่งชาติเขาใหญ่ ปณ.9 อำเภอปากช่อง จังหวัดนครราชสีมา เว็บไซต์ <a (click)="openRe1()">www.khaoyainationalpark.com</a> และ <a (click)="openRe2()">อุทยานแห่งชาติเขาใหญ่</a>\n            \n\n\n\n        </ion-card-content>\n      </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"D:\RADAR\src\pages\rain\T-rain\C\khao-yai-c\khao-yai-c.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], KhaoYaiCPage);
    return KhaoYaiCPage;
}());

//# sourceMappingURL=khao-yai-c.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RaftingSPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RaftingSPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RaftingSPage = /** @class */ (function () {
    function RaftingSPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RaftingSPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RaftingSPage');
    };
    RaftingSPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rafting-s',template:/*ion-inline-start:"D:\RADAR\src\pages\rain\T-rain\S\rafting-s\rafting-s.html"*/'<!--\n  Generated template for the RaftingSPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ล่องแพ อำเภอพะโต๊</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card>\n        <ion-card-header>\n          <h1>ล่องแพ อำเภอพะโต๊</h1>\n        </ion-card-header>\n        \n        <ion-card-content>\n            <img src="https://www.paiduaykan.com/province/south/chumphon/pic/phato1.jpg"><br>\n            <br>\n            พะโต๊ะ จังหวัดชุมพร “ดินแดนแห่งภูเขาเขียว เที่ยวล่องแพ แลหมอกปก น้ำตกงาม ลือนามผลไม้” คือ คำขวัญประจำอำเภอพะโต๊ะ สะท้อนให้เห็นถึงความเป็นดินแดนที่หลากหลาย อุดมสมบูรณ์ เต็มเปี่ยมไปด้วยอากาศอันแสนบริสุทธิ์ สัมผัสถึงไอเย็นแห่ง ธรรมชาติแห่งสายน้ำและขุนเขาที่โอบล้อม  เมื่อพูดถึงการท่องเที่ยวพะโต๊ะ;ก็ต้องนึกถึงการล่องแพเป็นอันดับแรก ซึ่งเป็น กิจกรรมเด่นที่อยู่คู่กับพะโต๊ะมาช้านาน และเป็นกิจกรรมการท่องเที่ยวที่สร้างชื่อเสียงให้กับอำเภอพะโต๊ะ เป็นอย่างมาก ถือเป็น การการท่องเที่ยวเชิงอนุรักษ์และเป็นเทศกาลสำคัญของอำเภอพะโต๊ะ \n            ผืนป่าในเขตอำเภอพะโต๊ะเป็นแหล่งต้นน้ำหลายสายที่ไหลคดเคี้ยวมาตามขุนเขาและสวนผลไม้ บางช่วงเป็นแก่งน้ำขนาดใหญ่ จึงมีการจัดกิจกรรมผจญภัยในคลองพะโต๊ะ ตลอดทั้งปี โดยการสนับสนุนและส่งเสริมจากหน่วยอนุรักษ์และจัดการต้นน้ำ พะโต๊ะ ซึ่งได้รับรางวัลดีเด่นอุตสาหกรรมท่องเที่ยวไทยจากททท.การล่องแพจะเริ่มตั้งแต่คลองต้นน้ำซึ่งเป็นพื้นที่ป่าสมบูรณ์ พบเห็นสัตว์ป่า ที่น่าสนใจได้แก่ ค่างแว่นถิ่นใต้ลิง นกเงือก หากินอย่างอิสระในป่าธรรมชาติริมคลอง ผ่านมาอีกช่วงหนึ่งจะเป็นสวนทุเรียน สวนกาแฟ และสวนมังคุด และหากชอบเดินป่ายังมีการจัดเดินป่าขึ้นไปชมป่าต้นน้ำและพักค้างแรมแบบแค้มปิ้งหรือขี่ช้างเที่ยว ป่าชมสวน\n            <br><br>\n            <img src="https://www.paiduaykan.com/province/south/chumphon/pic/phato4.jpg"><br>\n            <img src="https://www.paiduaykan.com/province/south/chumphon/pic/phato5.jpg"><br>\n            <img src="https://www.paiduaykan.com/province/south/chumphon/pic/phato7.jpg"><br>\n            <img src="https://www.paiduaykan.com/province/south/chumphon/pic/phato18.jpg"><br>\n            <img src="https://www.paiduaykan.com/province/south/chumphon/pic/phato20.jpg"><br>\n            <br>\n            นอกจากกิจกรรมล่องแพ สัมผัสความงามของผืนป่าอันเขียวขจีและสนุกกับการล่องแพไม้ไผ่และแพท่อพีวีซีเล่น น้ำตามแก่ง ต่างๆชมทิวทัศน์สองฝั่งแม่น้ำท ี่ผ่านป่าดิบชื้นที่สมบูรณ์ที่สุดของภาคใต้ที่นี่ยังมีกิจกรรมอื่นๆให้นักท่องเที่ยวได้สัมผัสอีกมากมาย อาทิการชมสวนผลไม้นานาชนิด เดินป่าศึกษาธรรมชาติ ชมน้ำตก พักแบบโฮมสเตย์ และเรียนรู้วิถีชุมชนซึ่งที่นี่ มีชุมชนที่อาศัย อยู่ร่วมกันกับธรรมชาติ ช่วยกันดูแล ปกป้องและอนุรักษ์ รวมทั้งจัดการการท่องเที่ยวจนได้รับรางวัลจากองค์กรต่าง ๆ มากมาย และยังได้ลิ้มรสอร่อยกับเมนูพื้นบ้านอาหารพื้นเมือง อิ่มอร่อยกับอาหารพื้นบ้าน เช่น แกงส้มหมูสามชั้นกับหยวกกล้วยป่า ไข่หลาม ยำยอดผักกูด ข้าวที่หุงด้วยกระบอกไม้ไผ่ ในทุกปีจะมีเทศกาลล่องแพพะโต๊ะ ซึ่งจะจัดขึ้นในระหว่างเดือนกุมภาพันธ์ ถึง เดือนเมษายน ซึ่งเป็นช่วงที่เหมาะแก่การล่องแพมากที่สุด\n            <br><br>\n            นอกจากกิจกรรมล่องแพแล้วยังสามารถท่องเที่ยวยังสถานที่ท่องเที่ยวอื่นๆ ในอำเภอพะโต๊ะได้ ซึ่งส่วนใหญ่จะเป็นน้ำตก<br><br>\n            <ul><strong>- น้ำตกเหนือเหว</strong><br><br><ul>\n                ตั้งอยู่หมู่ที่บ้านคลองอาร์ต. ปังหวานน้ำตกเหนือเหวเป็นน้ำตกที่ตกจากหน้าผา มีสายน้ำที่พริ้วสวยงามในช่วงฤดูฝนน้ำจะแรงบริเวณ รอบมีสภาพเป็น ธรรมชาติที่สวยงามร่มรื่น\n                <br><br>การเดินทาง <br>\n                เดินทางตามถนนทางหลวงหมายเลข 41 จากตัวเมืองจังหวัดชุมพร ไปถึงกิโลเมตรที่ 97เลี้ยวขวาไปทางอำเภอพะโต๊ะตาม ถนน ทางหลวงหมายเลข 4006จากนั้นเดินทางไปอีก 23กิโลเมตร เลี้ยวขวาทางเข้าบ้านปังหวาน-ท่าแพ เข้าไปอีกประมาณ 4 กม. ก็จะถึงน้ำตกเหนือเหว\n            </ul>\n                <br>\n                <strong>- น้ำตกเหวโหลม</strong><br><br><ul>\n                    ตั้งอยู่หมู่ที่บ้านบกไฟตำบลปากทรงในเขตรักษาพันธุ์สัตว์ป่าควนแม่ยายหม่อนจากหน่วยพิทักษ์เหวโหลมมีเส้นทางเดินเท้าต่อไป อีก200 ม.ผ่านต้นน้ำลำคลองพะโต๊ะถึงน้ำตกซึ่งมีน้ำไหลจากหน้าผาสูง80 ม.สภาพแวดล้อมด้วยป่าดงดิบชื้นที่อุดมสมบูรณ์ พรรณไม้ป่าดงดิบรูปทรงใหญ่แปลกตาหลายชนิด\n                    <br><br>การเดินทาง<br>\n                    อยู่ห่างจากอำเภอพะโต๊ะลงไปทางทิศตะวันตกระยะทางประมาณ22 กม.หรือเดินทางไปตามถนน ทางหลวงหมายเลข41 จากตัวเมืองชุมพรถึงกม. ที่ 97ทางแยกเข้าอำเภอพะโต๊ะเลี้ยวเข้าถนนทางหลวงหมายเลข4006ตอนหลังสวน-ราชกรูดประมาณ50 กม.จะถึงทางเข้าน้ำตกเลี้ยวซ้ายเข้าบ้านบกไฟ-ปากทรงตามถนนลาดยางประมาณ6 กม.สุดทางลาดยาง จากนั้นเดินเท้าเข้า ไปอีกประมาณ200 ม.\n                </ul>\n                <br>\n                <strong>- น้ำตกทับขอน</strong><br><br><ul>\n                    ตั้งอยู่หมู่ที่ ต. ปากทรง อ. พะโต๊ะน้ำตกทับขอนเป็นน้ำตกที่สูงมากตกจากหน้าผาสูงชัน 40 เมตร ในฤดูฝนน้ำจะแรง ไม่สามารถไต่ ขึ้นไป ชมความงามชั้นบนของน้ำตกนี้ได้ฤดูร้อนน้ำตกจะสวยงามมากเป็นน้ำตก2 ชั้นซึ่งรอบๆน้ำตกมีสภาพเป็น ธรรมชาติที่สมบูรณ์ ด้านบนซึ่งเป็นต้นน้ำ น้ำตกยังมีน้ำตกอีกหลายชั้นและเป็นพื้นที่ป่าต้นน้ำที่สมบูรณ์ร่มรื่นสามารถกางเต็นท์ค้าง แรมดูสัตว์ป่าในเวลา กลางคืนเหมาะกับผู้ที่ชอบการผจญภัย\n                    <br><br>การเดินทาง<br>\n                จากที่ว่าการอำเภอพะโต๊ะไปทางบ้านปากทรง4 กม.แล้วเลี้ยวขวาเข้าทางบ้านปากทรงไปอีกประมาณ 5 กม. จะถึงหมู่บ้านต่อจากนั้น เดินทางออกไปอีก10 กม.ซึ่งบางช่วงเป็นที่สูงชันนักท่องเที่ยวนิยมใช้รถยนต์ขับเคลื่อนสี่ล้อเพื่อความสะดวกในการเดินทาง\n                -สนใจติดต่อล่วงหน้ากับเจ้าหน้าที่รักษาป่าของกรมอุทยานแห่งชาติสัตว์ป่าและพันธุ์พืชซึ่งสามารถอำนวยความสะดวก แก่นักท่องเที่ยวทุกท่าน\n              </ul>\n                \n                <br>\n                <strong>- แก่งบกไฟ</strong><br><br><ul>\n                    ตั้งอยู่หมู่ที่บ้านบกไฟต. ปากทรงอ. พะโต๊ะเป็นแหล่งท่องเที่ยวที่เป็นเกาะแก่งกลางลำคลองบกไฟซึ่งมีโขดหิน น้อยใหญ่ระเกะระกะ ผุดขึ้นกลางลำน้ำเสียงสายน้ำ กระทบโขดหินท่ามกลางความเงียบสงบของป่าเขาและแมกไม้เป็นแหล่งท่องเที่ยว ทางธรรมชาติที่ นักท่องเที่ยวชื่นชอบ สามารถสัมผัสบรรยากาศธรรมชาติได้อย่างไม่รู้ลืม\n                    <br><br>การเดินทาง<br>\n                    อยู่ห่างจากอำเภอพะโต๊ะลงไปทางทิศตะวันตกระยะทางประมาณ22 กม.หรือเดินทางไปตามถนนเพชรเกษมสาย41 จากตัวเมือง ชุมพรถึงกม. ที่97ทางแยกเข้าอำเภอพะโต๊ะเลี้ยวเข้าถนนทางหลวงหมายเลข4006ตอนหลังสวน- ราชกรูดประมาณ กม. ที่ 47จะ ถึงทางเข้าน้ำตกเลี้ยวซ้ายเข้าไปจะมีป้ายบอกหน้าโรงเรียนปากทรงเข้าไปประมาณ8 กม.\n\n                </ul>\n  \n                \n                \n                </ul>\n\n            \n\n        \n        </ion-card-content>\n      </ion-card>\n</ion-content>\n'/*ion-inline-end:"D:\RADAR\src\pages\rain\T-rain\S\rafting-s\rafting-s.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], RaftingSPage);
    return RaftingSPage;
}());

//# sourceMappingURL=rafting-s.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuanPhungWPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SuanPhungWPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SuanPhungWPage = /** @class */ (function () {
    function SuanPhungWPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SuanPhungWPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SuanPhungWPage');
    };
    SuanPhungWPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-suan-phung-w',template:/*ion-inline-start:"D:\RADAR\src\pages\rain\T-rain\W\suan-phung-w\suan-phung-w.html"*/'<!--\n  Generated template for the SuanPhungWPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>สวนผึ้ง</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card>\n        <ion-card-header>\n          <h1>สวนผึ้ง</h1>\n        </ion-card-header>\n        \n        <ion-card-content>\n            <img src="https://my.kapook.com/imagescontent/fb_img/132/s_68925_9162.jpg"><br>\n            สวนผึ้ง เป็นอำเภอหนึ่งของ จังหวัดราชบุรี ที่ได้รับความนิยมจากนักท่องเที่ยวเป็นอย่างมาก เพราะมีความอุดมสมบูรณ์ทางธรรมชาติ ทั้งป่าไม้ ภูเขา และน้ำตก พื้นที่ส่วนใหญ่จะเป็นที่ราบสูง ภูมิประเทศของสวนผึ้งนั้นขนาบด้วยเทือกเขาตะนาวศรี ซึ่งเป็นพรมแดนทางตะวันตกกั้นระหว่างประเทศไทยกับพม่า การเดินทางสะดวก ใช้เวลาเดินทางเพียง 2 ชั่วโมงกว่า ๆ จากกรุงเทพฯ ก็ถึงแล้ว \n\n          สถานที่ท่องเที่ยวมีความหลากหลาย ทั้งจากธรรมชาติสร้างและฝีมือมนุษย์รังสรรค์ ที่สำคัญมาเที่ยวกันได้ตลอดทั้งปีโดยเฉพาะหน้าหนาวอากาศจะดีมาก ๆ บ้างก็ว่าเหมือนกับอำเภอปาย จังหวัดแม่ฮ่องสอน บ้างก็ว่าเหมือนประเทศนิวซีแลนด์ ก็แล้วแต่มุมมองของแต่ละคน โดยมีสถานที่ท่องเที่ยวที่น่าสนใจก็มีอยู่มากมายหลายแห่ง ดังนี้...\n          <br><br>\n          <img src="https://f.tpkcdn.com/images-720/e66cf7a0761fca208dbb5f3110b03fe5.jpg"><br>\n          <br>\n          <strong>โป่งยุบ</strong><br>\n          <uL>เป็นการยุบตัวของพื้นดินที่มีลักษณะเป็นหลุม มีความลึกประมาณ 3-5 เมตร ต้องเดินด้วยความระมัดระวังเพราะบางจุดนั้นลึกมากๆ เหมือนกับเป็นเหวขนาดย่อมๆ เลยก็ว่าได้ เป็นปรากฏการณ์ทางธรรมชาติที่หาชมได้ยาก การเกิดขึ้นของโป่งยุบ สันนิฐานว่าเกิดจากการกัดเซาะของน้ำ ทำให้แผ่นดินยุบตัวลงแล้วกลายเป็นหน้าผาสูงชัน กินเนื้อที่ประมาณ 10 ไร่ เป็นพื้นที่ของเอกชน คิดค่าใช้จ่ายในการเข้าชมตั้งแต่ 40 – 400 บาทแล้วแต่จำนวนคนและขนาดของรถ สอบถามรายละเอียด โทรศัพท์ 08-1255-7500 </uL>\n          <img src="https://www.chillpainai.com/src/wewakeup/img_travel/202/29.JPG"><br>\n          <br>\n          <img src="http://www.panyachalet.com/wp-content/uploads/2016/05/1.jpg"><br>\n          <br>\n          <strong>บ้านเทียนหอม</strong><br>\n          เมื่อออกมาจากโป่งยุบตรงมาเรื่อย ๆ ถึงหลักกิโลเมตรที่ 33 เราก็จะได้พบกับสถานที่ท่องเที่ยว ที่อบอวลไปด้วยความหอมละมุนไปทั่วสถานที่ ด้านหน้ามีร้านเสื้อเพ้นท์สดลวดลายสวยงามน่ารัก ใส่แล้วไม่ซ้ำใครแน่นอนเพราะเค้าเพ้นท์มาแบบละตัวเท่านั้น พื้นที่กว้างขว้างมีมุมน่ารัก ๆ ให้โพสต์ท่าถ่ายรูปกันอยู่หลายจุด บริเวณภายในร้านจะจุดเทียนหอมและเปิดเพลงเบา ๆ เพื่อสร้างบรรยากาศในการเดินเล่ นให้ความรู้สึกถึงการพักผ่อนได้เป็นอย่างดี มีการนำของสะสมข้าวของเครื่องใช้ในอดีตมาจัดวาง เพื่อเพิ่มเสน่ห์ให้เราได้ย้อนนึกถึงวันวานกันอีกด้วย <br>\n          <br>\n          เทียนที่นี่จะเป็นเทียนคุณภาพดีเกรดเอ เพราะเค้านำเขาวัสดุมาจากต่างประเทศ เช่น สีจากเยอรมัน น้ำหอมจากฝรั่งเศส ไส้เทียนจากไต้หวัน และพาราฟินจากประเทศจีน มีร้านอาหารและร้านกาแฟสดให้บริการ สถานที่สังเกตเห็นง่ายเพราะอยู่ติดกับถนนสายหลักอยู่ทางด้านขวามือ เปิดบริการทุกวันเวลา 7.00 - 18.00 น. \n          <br><br>\n\n          <strong>The Scenery Resort & Farm สวนผึ้ง ราชบุรี</strong><br>\n          <img src="http://www.xn--b3czk4afcy3gxah5a1g4e.com/wp-content/uploads/2013/02/IMG_7063-logo.jpg"><br>\n          <img src="http://www.xn--b3czk4afcy3gxah5a1g4e.com/wp-content/uploads/2013/02/IMG_7149.jpg"><br>\n          <br>\n          ขับตรงขึ้นไปจากบ้านหอมเทียน จะเจอสามแยกให้เบี่ยงออกไปทางซ้ายแยกภูผาผึ้งรีสอร์ท ขับตรงไปอีกประมาณ 5 กิโลเมตร เราก็จะได้พบกับสถานที่ท่องเที่ยวที่เป็นเอกลักษณ์ เป็นที่ที่ทำให้คนรู้จักสวนผึ้งกันอย่างแพร่หลาย The Scenery Resort & Farm รีสอร์ทสวย ที่มีสนามหญ้าเขียวสด ลายล้อมด้วยภูเขาสลับซับซ้อนและฝูงแกะสีขาวหลายสิบตัว ที่คอยต้อนรับนักท่องเที่ยวอย่างน่ารัก  \n          <br><br>\n          แน่นอน! กิจกรรมที่พลาดไม่ได้คือ การให้อาหารแกะรวมถึงการถ่ายรูปเป็นที่ระลึกกับน้องแกะนั่นเอง นอกจากนี้ ยังมีมุมสวย ๆ ที่ทางรีสอร์ทได้เซ็ทอัพขึ้นเพื่อให้ได้ถ่ายรูปกันอย่างสนุกสนาน แกะที่นี่จะเป็นพันธุ์ผสมชื่อว่า พันธ์คาทาดิน ซึ่งมีความทนต่อสภาพภูมิอากาศ เสียค่าเข้าชมท่านละ 40 บาท จะได้รับหญ้าเนเปียสำหรับเลี้ยงแกะ 1 กำ แต่ถ้าหากไม่พอก็สามารถซื้อเพิ่มได้ในราคากำละ 20 บาท ด้านหน้าจะเป็นที่ตั้งของร้านขายของที่ระลึกและร้านอาหาร เปิดให้บริการทุกวัน : วันจันทร์-ศุกร์ 10.00-18.00 น. / เสาร์-อาทิตย์ 9.00-18.00 น. สอบถามรายละเอียดเพิ่มเติม โทรศัพท์ 08-5488-9905 หรือ www.sceneryresort.com\n          <br><br>\n          <img src="http://rbr.police7.go.th/newsite/images/stories/police/travel/borklung01.jpg"><br>\n          <br>\n          <strong>ธารน้ำร้อนบ่อคลึง</strong><br>\n          ตรงขึ้นไปจากซีนเนอร์รี่ฯ เจอสามแยกให้เลี้ยวขวาแล้วขับรถตรงขึ้นไปอีก สังเกตซ้ายมือจะมีป้ายธารน้ำร้อนบ่อคลึง ลักษณะเป็นลำธารเล็ก ๆ มีน้ำไหลซึมออกมาจากตาน้ำใต้ดินไม่ขาดสาย ถ้าขึ้นไปดูที่ต้นน้ำจะพบก้อนหินใหญ่เล็กเรียงลายไปมา ดูสวยงามตามธรรมชาติ มีต้นกำเนิดมาจากเทือกเขาตะนาวศรี มีน้ำไหลตลอดปี อุณหภูมิของน้ำจะประมาณ 65 องศาเซลเซียส ไม่ร้อนมากพอที่จะต้มไข่สุกได้ \n          <br><br>\n          บริเวณต้นน้ำจะมีบ่อแยกเก็บน้ำไว้ให้ชาวบ้านดื่ม-กิน จากบ่อดินด้านล่างสามารถเดินไปที่ต้นธารน้ำร้อนประมาณ 150 เมตร ธารน้ำร้อนบ่อคลึงเป็นสถานที่ของเอกชน ผู้ค้นพบ คือ นายประยูร โมนยะ เปิดบริการวันจันทร์-ศุกร์ เปิดตั้งแต่เวลา 08.00–17.00 น. วันเสาร์-อาทิตย์ เวลา 08.00–18.00 น. ค่าผ่านประตู 5 บาทต่อท่าน  ค่าอาบน้ำแร่บ่อกลางแจ้งคนละ 20 บาท สระกระเบื้องคนละ 50 บาท สอบถามข้อมูลเพิ่มเติมที่ โทรศัพท์ 0-327- 1086\n          <br><br>\n          <img src="https://eitanicresort.com/wp-content/uploads/2017/05/kj013.jpg"><br>\n          <strong>น้ำตกเก้าชั้น หรือ น้ำตกเก้าโจน</strong><br>\n          อยู่ห่างจากธารน้ำร้อนบ่อคลึง 1 กิโลเมตร ตอนที่เราไปน้ำออกจะสีแดงสักหน่อย เนื่องจากมีฝนตกบนภูเขา จากลานจอดรถต้องเดินเข้าไปประมาณ 200 เมตร ระยะทางในการเดินชมน้ำตกแต่ละชั้นไม่ไกลกันมากนัก บริเวณต้นน้ำของน้ำตก ตั้งอยู่บนพื้นที่ราบสูงบริเวณเทือกเขาตะนาวศรี  ซึ่งมีลักษณะป่าที่อุดมสมบูรณ์ และมีฝนตกชุกอย่างต่อเนื่อง จึงทำให้มีน้ำซึมซับตลอดเวลา ก่อให้เกิดจากธารน้ำธรรมชาติ ไหลผ่านจากตอนกลางของภูเขา มายังบริเวณด้านล่าง นับรวมได้ 14 ชั้น ระยะทาง 2.5 กิโลเมตร แต่สามารถเที่ยวได้เพียง 9 ชั้นเท่านั้น ในฤดูฝนจะมีน้ำมาก หินบริเวณน้ำตกชั้นต่าง ๆ เป็นหินแกรนิต ป่าส่วนใหญ่ก็เป็นป่าเบญพรรณ เช่น ยาง เต็ง แดง ประดู่ ชิงชัน รัง มะค่าโมง ฯลฯ มีจุดกางเต้นท์ให้บริการนักท่องเที่ยวอยู่ด้านบน \n          <br><br>\n          <img src="http://www.xn--b3czk4afcy3gxah5a1g4e.com/wp-content/uploads/2013/11/V-%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%87%E0%B8%AA%E0%B9%89%E0%B8%A1%E0%B9%81%E0%B8%A1%E0%B8%A7_04.jpg"><br>\n          <img src="http://www.xn--b3czk4afcy3gxah5a1g4e.com/wp-content/uploads/2013/11/V-%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%87%E0%B8%AA%E0%B9%89%E0%B8%A1%E0%B9%81%E0%B8%A1%E0%B8%A7_4.jpg"><br>\n          <strong>แก่งส้มแมว (สวนป่าสมเด็จพระนางเจ้าสิริกิติ์)</strong><br>\n          เป็นลำธารไหลลัดเลาะตามโคดหินใหญ่น้อยสลับซับซ้อนกลางแม่น้ำภาชี เหมาะสำหรับการเล่นน้ำ ตั้งอยู่ในพื้นที่สวนป่าสิริกิติ์ สภาพโดยรอบเป็นป่าเบญจพรรณ ภายในสวนป่ามีสวนหย่อม ศูนย์จำหน่ายเครื่องเซรามิคจากคนในบริเวณหมู่บ้าน สวนป่าแห่งนี้สร้างขึ้นเพื่อเฉลิมพระเกียรติ สมเด็จพระนางเจ้าสิริกิติ์ พระบรมราชินีนาถ เนื่องในวโรกาสเจริญพระชนมพรรษา 5 รอบ เป็นศูนย์รวมพันธุ์ไม้ นานาชนิดอันมีค่าทางเศรษฐกิจ และเป็นแหล่งศึกษาทางธรรมชาติที่ดีเยี่ยม ก่อนถึงแก่งส้มแมวเราจะต้องข้ามสะพานบริเวณอ่างเก็บน้ำบ้านบ่อหวี ทางด้านซ้ายมือจะเห็นต้นไม้สูงขนาดใหญ่ยืนโชว์ราก ใบและกิ่งก้านอย่างสง่างาม\n          <br><br>\n          <img src="http://www.hisuanphueng.com/images/attraction_place/sporchid/DSC00564r.JPG"><br>\n          <img src="http://www.xn--b3czk4afcy3gxah5a1g4e.com/wp-content/uploads/2014/11/IMG_2837_resize.jpg"><br>\n          <strong>สวนผึ้งออร์คิด</strong><br>\n          ใครชอบกล้วยไม้ไม่ควรพลาดกับ "สวนผึ้งออร์คิด" เป็นศูนย์รวม แวนด้า แอสโดเซนด้า ลูกผสมหลากสี สวยงาม มีให้เลือกกันอย่างมากมายชอบต้นไหนก็ซื้อกลับบ้านได้เลย ราคาเริ่มต้นตั้งแต่หลักร้อยยันหลักพัน สถานที่สะอาด บรรยากาศสบาย โดยมีเจ้าของร้านใจดีอย่างคุณอนุโพธิ์  พรายมณี หรือ พี่เล็ก ให้การต้อนรับพร้อมแนะนำให้ความรู้ และข้อมูลเกี่ยวกับต้นกล้วยไม้เป็นอย่างดี พร้อมจำหน่ายทั้งปลีกและส่ง เปิดให้เข้าชมฟรี สอบถามรายละเอียดเพิ่มเติมโทร. 0-3272-2230 หรือ www.suanpheungorchids.com\n          <br><br>\n          <img src="https://www.tlcthai.com/travel/wp-content/uploads/2012/08/%E0%B8%AA%E0%B8%A7%E0%B8%99%E0%B8%9C%E0%B8%B6%E0%B9%89%E0%B8%87-%E0%B8%A3%E0%B8%B5%E0%B8%AA%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%97-%E0%B8%AA%E0%B8%A7%E0%B8%99%E0%B8%9C%E0%B8%B6%E0%B9%89%E0%B8%87-%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5.jpg"><br>\n          <img src="http://img.painaidii.com/images/20130201_3_1359708320_941414.jpg"><br>\n          <strong>สวนผึ้ง รีสอร์ท</strong><br>\n          รีสอร์ทน้องใหม่มาแรงที่ดึงดูดใจนักท่องเที่ยวได้เป็นอย่างดี ด้วยเพราะสถานที่พักเค้าสร้างเป็นตัวการ์ตูนน่ารัก ในเรื่องมนุษย์หินฟริ้นสโตนและก้านกล้วย จึงมีผู้นิยมแวะไปถ่ายรูปเก็บภาพความน่ารักของตัวการ์ตูนเหล่านี้ เปิดให้เข้าชมทุกวันเวลา 12.00 – 14.00 น. ค่าเข้าชมท่านละ 40 บาท สำหรับเด็ก ชมฟรี\n          <br><br>\n          <strong>การเดินทาง</strong><br>\n          <ul>\n            <strong>โดยรถยนต์ส่วนตัว จากกรุงเทพฯ มี 2 เส้นทาง</strong><ul>\n                1. เส้นนครชัยศรี (ถนนเพชรเกษม) หรือทางพุทธมณฑล  เลี้ยวซ้าย เข้า อ.เมือง ราชบุรี ผ่าน อ.โพธาราม ตามทางหลวงหมายเลข 4 เลี้ยวขวา แถวเขางู ผ่าน อ.จอมบึง ตามทางหลวง 3087 และ อ.สวนผึ้ง\n                <br>\n                2. เส้น ธนบุรี-ปากท่อ (ถนนพระราม 2) ทางหลวงหมายเลข 35 ผ่าน สมุทรสาคร สมุทรสงคราม เลี้ยว ขวาเข้า อ.ปากท่อ ผ่าน อ.เมือง ราชบุรี ผ่านเขาแก่นจันทร์ แล้วเลี้ยวซ้าย เข้าทางหลวง 3208 เข้า อ.สวนผึ้ง<br>\n            </ul>\n            <strong>รถประจำทาง</strong><br>\n            <ul>\n                ท่านสามารถเดินทางจากกรุงเทพฯ โดยท่านสามารถขึ้นรถตู้จากโรงแรมรัตนโกสินตร์ มาลงที่วิทยาลัยราชภัฏหมู่บ้านจอมบึง หรือสามารถขึ้นรถที่สถานีขนส่งสายใต้ใหม่ ขึ้นรถทัวร์ปรับอากาศ ชั้น 1 มาลงที่อำเภอจอมบึง จังหวัดราชบุรี หลังจากที่ท่านมาถึงที่อำเภอจอมบึงแล้วนั้น ท่านสามารถนั่งรถโดยสารต่อมายังอำเภอสวนผึ้ง โดยรถประจำทางสายจอมบึง - สวนผึ้ง (คันสีน้ำเงิน) ท่านสามารถนั่งรถมอเตอร์ไซค์รับจ้าง จากตลาดอำเภอสวนผึ้ง\n            </ul>\n          </ul>\n\n\n\n      \n\n\n\n\n        </ion-card-content>\n      </ion-card>\n</ion-content>\n'/*ion-inline-end:"D:\RADAR\src\pages\rain\T-rain\W\suan-phung-w\suan-phung-w.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SuanPhungWPage);
    return SuanPhungWPage;
}());

//# sourceMappingURL=suan-phung-w.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThongphaphumWPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ThongphaphumWPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ThongphaphumWPage = /** @class */ (function () {
    function ThongphaphumWPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ThongphaphumWPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ThongphaphumWPage');
    };
    ThongphaphumWPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-thongphaphum-w',template:/*ion-inline-start:"D:\RADAR\src\pages\rain\T-rain\W\thongphaphum-w\thongphaphum-w.html"*/'<!--\n  Generated template for the ThongphaphumWPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>อำเภอทองผาภูมิ</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card>\n        <ion-card-header>\n          <h1>อุทยานแห่งชาติทองผาภูมิ อำเภอทองผาภูมิ</h1>\n        </ion-card-header>\n        \n        <ion-card-content>\n            <img src="https://www.xn--72c5aba9c2a3b8a2m8ae.com/wp-content/uploads/2015/09/tongpaphumnation-02.jpg"><br>\n            อุทยานแห่งชาติทองผาภูมิ มีพื้นที่กว้างถึงประมาณ 700,500 ไร่ หรือ 1,120 ตารางกิโลเมตร อยู่ในเขตป่าสงวนแห่งชาติป่าห้วยขย่ง และป่าเขาช้างเผือก ในท้องที่อำเภอทองผาภูมิ และอำเภอสังขละบุรี จังหวัดกาญจนบุรี ทิศเหนือมีอาณาเขตติดต่อกับเขตรักษาพันธุ์สัตว์ป่าทุ่งใหญ่นเรศวร ทิศใต้ติดกับอุทยานฯ ไทรโยค ทิศตะวันออกติดกับอุทยานฯ เขาแหลม และทิศตะวันตกติดกับชายแดนไทยพม่า\n            <br><br>\n            <img src="https://www.xn--72c5aba9c2a3b8a2m8ae.com/wp-content/uploads/2015/09/tongpaphumnation-03.jpg"><br>\n            <br>\n            สภาพภูมิประเทศของอุทยานฯ ทองผาภูมิ ส่วนใหญ่เป็นเทือกเขาสลับซับซ้อนทอดยาวจากทิศเหนือลงมาทางทิศใต้ เป็นส่วนหนึ่งของเทือกเขาตะนาวศรี สลับกับพื้นที่ราบลุ่ม มีความสูงอยู่ระหว่าง 100-1,249 เมตรจากระดับน้ำทะเลปานกลาง มียอดเขาช้างเผือกเป็นยอดเขาที่สูงที่สุด สูง 1,249 เมตร และยังมียอดเขาสำคัญอื่นๆ อีกมาก ทั้งเขานิชา เขาพุถ่อง เขาด่าง เขาปากประตู เขาเลาะโล เขาชะโลง ฯลฯ และยังเป็นต้นน้ำลำธารสำคัญหลายสาย ทั้งห้วยมาลัย ห้วยกบ ห้วยซ่าน ห้วยองค์พระ ห้วยปีคี ห้วยปากคอก ห้วยเจ็ดมิตร ฯลฯ\n            <br><br>\n            <img src="https://www.xn--72c5aba9c2a3b8a2m8ae.com/wp-content/uploads/2015/09/tongpaphumnation-01.jpg"><br>\n            <br>\n            อุทยานฯ ทองผาภูมิ เป็นพื้นที่ส่วนหนึ่งของผืนป่าตะวันตก มีธรรมชาติที่คงความสมบุรณ์ไว้อยู่มาก หากคุณได้เดินป่าศึกษาธรรมชาติคุณจะได้พบกับความหลากหลายของป่าตามระดับความสูงที่ต่างกัน ทั้งป่าเบญจพรรณ ที่ขึ้นปกคลุมพื้นที่ของอุทยานฯ ไว้มากที่สุด ลดหลั่นกันลงมาที่พบได้ทั่วพื้นที่ของอุทยานฯ ก็คือป่าดิบชื้น ป่าดิบแล้ง และป่าดิบเขา ด้วยความสมบูรณ์ของธรรมชาติและยังมีผืนป่าผืนเดียวกับประเทศพม่าด้วย ภายในพื้นที่อุทยานฯ จึงมีสัตว์ป่าอาศัยอยู่มาก ทั้งช้างป่า เลียงผา กวาง เก้ง กระจง ชะนี อีเห็น เสือปลา เสือโคร่ง หมีคน หมีควาย เป็นต้น รวมถึงนกหายากหลากชนิดด้วย\n            <br><br>\n            <img src="https://www.xn--72c5aba9c2a3b8a2m8ae.com/wp-content/uploads/2015/09/tongpaphumnation-08.jpg"><br>\n            <br>\n            การมาเที่ยวอุทยานฯ ทองผาภูมิ นักเดินทางตัวจริงต่างรู้ว่าการได้เดินฝ่าป่าเขาไปชมความงามทางธรรมชาติทั้งน้ำตก จุดชมวิวบนยอดเขาที่อุทยานฯ แห่งนี้คุ้มค่าสุดๆ สำหรับคนชอบเที่ยวน้ำตก น้ำตกของอุทยานฯ ทองผาภูมิ ส่วนใหญ่จะอยู่ในหมู่บ้านอีต่อง ตำบลปิล๊อก โดยน้ำตกแรกที่คุณไม่ควรพลาดชมคือน้ำตกเขาใหญ่ อยู่ห่างจากหมู่บ้านประมาณ 4 กิโลเมตร เป็นน้ำตกใหญ่มีทั้งหมด 3 ชั้น แต่ละชั้นสวยงามแตกต่างกัน เหมาะกับการพักผ่อนและเล่นน้ำมาก ในเส้นทางเดินเท้าเดียวกัน ยังจะได้พบน้ำตกน้ำดิบใหญ่ น้ำตกจ๊อกกระดิ่น และน้ำตกบิเต็ง ที่อยู่ลึกที่สุด ห่างจากหมู่บ้านประมาณ 12 กิโลเมตรด้วย\n            <br><br>\n            <img src="https://www.xn--72c5aba9c2a3b8a2m8ae.com/wp-content/uploads/2015/09/tongpaphumnation-05.jpg"><br>\n            <br>\n            สำหรับคนชอบเดินป่าที่นี่ก็มีเส้นทางเดินป่าขึ้นจุดชมวิวเขาขาดระยะสั้นๆ เพียง 2 กิโลเมตรเท่านั้น จุดเริ่มต้นอยู่บริเวณกิโลเมตรที่ 24-25 ของถนนสายบ้านไร่-อีต่อง บนจุดชมวิวเขาขาด มีวิวทิวทัศน์ในแนวพาโนรามาที่สวยงามมาก เห็นผืนป่าสมบูรณ์ฝั่งประเทศไทยและประเทศพม่า มองเห็นน้ำตกจ๊อกกระดิ่นได้จากระยะไกล ภาพบ้านไม้ที่หลบอยู่ในหุบเขาของหมู่บ้านอีต่อง และหมู่บ้านหินกอง ช่วยให้ลืมความเหนื่อยไปได้เลย ในวันที่ฟ้าสดใสยังสามารถมองเห็นทะเลอันดามันได้ไกลสายตาอีกด้วย\n            <br><br>\n            <img src="https://www.xn--72c5aba9c2a3b8a2m8ae.com/wp-content/uploads/2015/09/tongpaphumnation-06.jpg"><br>\n            <br>\n            อีกสถานที่สำหรับผู้มีใจรักการเดินป่าผจัยภัย คือ “เขาช้างเผือก” อันเลื่องชื่อ ยอดเขาสูงตระหง่านที่ความสูงกว่า 1200 เมตรจากระดับน้ำทะเล จุดที่ต้องไปพิชิตให้ได้คือ “สันคมมีด” หรือ “สันวัดใจ” จุดที่หวาดเสียวและท้าทายที่สุด โดยจะเป็นช่วงสันเขาแคบๆ ที่สองข้างเป็นไหล่เขาลาดลึกลงเป็นเหมือนกับสันของมีด ณ จุดนี้จะได้พบกับวิวแบบ 360 องศา สวยงามมาก การจะมายังเขาช้างเผือกนี้ จะต้องติดต่อเจ้าหน้าที่เพื่อลงทะเบียนก่อน เพราะบนเขาสามารถรับคนได้จำกัด และจะเปิดรับนักท่องเที่ยวในช่วงเดือนมกราคมของทุกปีเท่านั้น\n            <br><br>\n            <img src="https://www.xn--72c5aba9c2a3b8a2m8ae.com/wp-content/uploads/2015/09/tongpaphumnation-04.jpg"><br>\n            <br>\n            แต่ถ้าคุณไม่อยากเดินขึ้นเขาจนเหนื่อยล้า คุณก็สามารถเลือกขับรถไปชมวิวที่จุดชมวิวกิโลเมตร 15 ได้ ตั้งอยู่ริมถนนสายบ้านไร่-อีต่อง แม้วิวจะไม่เทียบเท่าจุดชมวิวเขาขาด แต่ที่นี่เที่ยวง่ายแถมยังมีวิวของเขื่อนเขาแหลม ท่ามกลางป่าเขียวสวยงามไม่แพ้กัน และมีถ้ำเขาน้อย ที่ภายในมีพระพุทธรูปประดิษฐานอยู่ให้ได้นมัสการก่อนเดินทางกลับด้วย\n            <br><br>\n            <img src="https://www.xn--72c5aba9c2a3b8a2m8ae.com/wp-content/uploads/2015/09/tongpaphumnation-07.jpg"><br>\n            <br>\n            <strong>การเดินทาง </strong> : จากตัวเมืองจังหวัดกาญจนบุรี ขับรถตามทางหลวงหมายเลข 323 ผ่านหมู่บ้านห้วยปากคอก ขับรถต่อไปอีกประมาณ 30 กิโลเมตร จะพบป้ายบอกทางเข้าที่ทำการอุทยานฯ ทองผาภูมิแล้ว<br><br>\n            <strong>ช่วงเวลาท่องเที่ยว </strong>: ตลอดปี แต่ช่วงปลายฤดูฝนจนถึงต้นฤดูหนาว จะสวยและน่าเที่ยวที่สุด<br><br> \n            <strong>สิ่งอำนวยความสะดวก </strong> : ในด้านสิ่งอำนวยความสะดวก อุทยานฯ ทองผาภูมิ ยังมีบ้านพักที่ไม่เหมือนที่ใด คือบ้านพักบนต้นไม้ หรือจะนำเต็นท์มาตั้งแค้มป์แบบใกล้ชิดธรรมชาติด้วยตัวเอง ในเรื่องของอาหารการกิน ที่นี่ยังไม่มีร้านอาหารบริการ ทางที่ดีควรเตรียมอาหารและนำมาให้เพียบพร้อมก่อนเข้าอุทยานฯ<br><br>\n            <strong>ติดต่อ-สอบถาม </strong> : อุทยานแห่งชาติทองผาภูมิ 081-382-0359, 034-510-979 <br>\n          </ion-card-content>\n      </ion-card>\n</ion-content>\n'/*ion-inline-end:"D:\RADAR\src\pages\rain\T-rain\W\thongphaphum-w\thongphaphum-w.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ThongphaphumWPage);
    return ThongphaphumWPage;
}());

//# sourceMappingURL=thongphaphum-w.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanalCPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CanalCPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CanalCPage = /** @class */ (function () {
    function CanalCPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CanalCPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CanalCPage');
    };
    CanalCPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-canal-c',template:/*ion-inline-start:"D:\RADAR\src\pages\summer\Summer-Page\C\canal-c\canal-c.html"*/'<!--\n  Generated template for the CanalCPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ป่าชายเลนคลองโคน</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card>\n        <ion-card-header>\n          <h1>ป่าชายเลนคลองโคน</h1>\n        </ion-card-header>\n        \n        <ion-card-content>\n            <img src="https://www.picz.in.th/images/2018/10/17/kaqqJv.jpg"><br>\n            <img src="https://www.picz.in.th/images/2018/10/17/kaqUDk.jpg"><br>\n            <img src="https://www.picz.in.th/images/2018/10/17/kaqQwl.jpg"><br>\n            <img src="https://www.picz.in.th/images/2018/10/17/kaqEhE.jpg"><br>\n            \n            ศูนย์อนุรักษ์ป่าชายเลนคลองโคลน ตั้งอยู่ไม่ไกลจากกรุงเทพมหานคร การเดินทางสะดวกมาก ใช้เส้นทางพระราม 2 - แม่กลอง เมื่อข้ามสะพานแม่น้ำแม่กลองมาไม่ไกลมากนัก เราจะเห็นปั๊ม ปตท. ให้เลี้ยวซ้ายเข้าซอยแล้วขับไปตามทางมีป้ายบอกทางอย่างชัดเจน\n            <br><br>\n            <img src="https://www.picz.in.th/images/2018/10/17/kaqOEN.jpg"><br>\n            \n            การเดินทางมาท่องเที่ยวที่นี่สร้างความประทับใจมากมายหลายอย่าง เพราะนอกจากธรรมชาติที่อุดมสมบูรณ์แล้ว ความน่ารักและน้ำใจไมตรีของชาวบ้านก็ไม่ยิ่งหย่อนไปกว่ากันเลยครับ โดยเราเริ่มต้นการผจญภัยโดยการล่องเรือชมระบบนิเวศน์ของป่าชายเลน ที่ชาวชุมชนร่วมใจกันพัฒนาฟื้นฟูผืนป่าชายเลนจากหลักสิบ สู่หลักร้อย และหลักหลาย ๆ พัน\n            <br><br>\n            ในปัจจุบันนี้ ระหว่างนั่งเรือเราก็จะได้ชมวิถีชีวิตของชาวบ้านริมน้ำ สัตว์น้ำอย่างปูก้ามดาบ ปูแสม ปลาอีจัง ปลาตีน ก็มีให้เห็นตามชายฝั่ง พันธุไม้ป่าชายเลน ที่รู้จักกันโดยทั่วไปได้แก่โกงกางใบใหญ่ โกงกางใบเล็ก แสมพังกาหัวสุม ลำพู ลำแพน จาก  ตะบูน โปรงแดงโปรงขาว แสมขาว ตาตุ่ม โพธิ์ทะเล ปอทะเล และเหงือกปลาหมอก็ยังมีให้เห็นครับ อีกจุดหนึ่งที่ไม่ควรพลาดคือการให้อาหารลิงแสม สัตว์ท้องถิ่นซึ่งมีความน่ารักแสนรู้เป็นอย่างมาก \n            <img src="https://www.picz.in.th/images/2018/10/17/kaqoRS.jpg"><br>\n            \n            เมื่อนั่งเรือเรื่อย ๆ ผ่านมายังปากน้ำก็จะได้พบเห็นวิถีการดำรงชีวิตของชาวบ้าน คือ การถีบกระดานเลนเก็บหอยแครง หอยตลับ ด้วยภูมิปัญญาของชาวบ้าน หากเราเหยียบลงบนเลนโดยตรงเลนก็จะดูดตัวเราลงไปประมาณต้นขา แต่หากเรานั่งบนกระดานเราก็สามารถถีบกระดานไปยังจุดไหนก็ได้ เพื่อหาหอยแครง จุดนี้นักท่องเที่ยวสามารถลงไปสัมผัสถึงโคลนดิน กลิ่นเลนได้อย่างแท้จริง บริเวณโดยรอบพื้นที่นี้ส่วนใหญ่เป็นพื้นที่ทำการประมงของชาวบ้าน อาทิ ทำฟาร์มหอยแมลงภู่ การลอยอวนจับกุ้ง การวางเบ็ดราว เป็นต้น \n            <br><br>\n            <img src="https://www.picz.in.th/images/2018/10/17/kaqlYQ.jpg"><br>\n            \n            ในฝั่งทะเลอ่าวไทยจะพบวิถีชีวิตแบบนี้ได้ที่บ้านคลองโคลนเท่านั้น นั่งเรือออกไปไกลอีกสักหน่อย คนขับเรือจะพาไปรับลมเย็นกลางท้องทะเลที่ กระเตง (บ้านพักกลางทะเลที่เฝ้าฟาร์มหอย) ถ้าต้องการรับประทานอาหารทะเลสด ๆ บนนี้ก็สามารถแจ้งกับคนขับเรือได้ก่อน เพื่อจะได้จัดเตรียมมาให้พร้อมก่อนออกเดินทาง ขากลับแอบเสียวเล็กน้อยด้วยการโชว์ขับเรือบนเลน คนขับบอกว่าเวลาขับบนเลนนั้น ห้ามหยุดเรือเด็ดขาดไม่งั้นเรือจะโดนโคลนดูด แล้วพวกเราก็ต้องลงไปช่วยขุดเลนหาล่องน้ำ เพื่อให้เรือสามารถแล่นต่อไปได้ แต่โชคดีทริปนี้ของเราเรือแล่นได้โลด แถมมีสไลด์เรือโชว์สนุกสนานตื่นเต้นมากครับ \n            <br><br>\n            <img src="https://www.picz.in.th/images/2018/10/17/kaqDun.jpg"><br>\n            \n            พอถึงจุดนี้พวกเราก็ต้องลงจากเรือมานั่งบนกระดานกันครับ เพราะก่อนกลับที่นี่เค้านิยมให้นักท่องเที่ยวได้มีส่วนร่ว มในการอนุรักษ์ป่าชายเลน ด้วยการให้ลงมือปลูกต้นลำพู โปรงแดงโปรงขาว เป็นที่ระลึกกันครับ เพียงเล็กน้อยคนละต้นสองต้น ก็ทำให้เรารู้สึกดีว่าเราได้เป็นส่วนหนึ่งในการช่วยลดภาวะโลกร้อน\n\n         พอกลับมาถึงยังศูนย์ก็มีสถานที่อาบน้ำพร้อม มีของว่างและเครื่องดื่มไว้รับรอง หากใครสนใจจะพักค้างคืนบนกระเตง เพื่อหาประสบการณ์แปลกใหม่ที่นี่เค้าก็มีให้บริการ หรือถ้ามีเด็ก ๆ มาด้วยจะนอนโฮมสเตย์ของชาวบ้านหรือรีสอร์ทก็ได้\n         <br>\n\n          </ion-card-content>\n      </ion-card>\n</ion-content>\n'/*ion-inline-end:"D:\RADAR\src\pages\summer\Summer-Page\C\canal-c\canal-c.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CanalCPage);
    return CanalCPage;
}());

//# sourceMappingURL=canal-c.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarleyfieldNPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the BarleyfieldNPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BarleyfieldNPage = /** @class */ (function () {
    function BarleyfieldNPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BarleyfieldNPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BarleyfieldNPage');
    };
    BarleyfieldNPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-barleyfield-n',template:/*ion-inline-start:"D:\RADAR\src\pages\summer\Summer-Page\N\barleyfield-n\barleyfield-n.html"*/'<!--\n  Generated template for the BarleyfieldNPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ทุ่งข้าวสาลี ศูนย์วิจัยข้าวสะเมิง</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card>\n        <ion-card-header>\n          <h1>ทุ่งข้าวสาลี ศูนย์วิจัยข้าวสะเมิง</h1>\n        </ion-card-header>\n        \n        <ion-card-content>\n            <img src="https://www.paiduaykan.com/province/north/chiangmai/pic/samoengriceresearch.jpg"><br>\n            <br>\n            \n        </ion-card-content>\n      </ion-card>\n</ion-content>\n'/*ion-inline-end:"D:\RADAR\src\pages\summer\Summer-Page\N\barleyfield-n\barleyfield-n.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], BarleyfieldNPage);
    return BarleyfieldNPage;
}());

//# sourceMappingURL=barleyfield-n.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThreeThousandEPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ThreeThousandEPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ThreeThousandEPage = /** @class */ (function () {
    function ThreeThousandEPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ThreeThousandEPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ThreeThousandEPage');
    };
    ThreeThousandEPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-three-thousand-e',template:/*ion-inline-start:"D:\RADAR\src\pages\summer\Summer-Page\E\three-thousand-e\three-thousand-e.html"*/'<!--\n  Generated template for the ThreeThousandEPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>สามพันโบกและหาดชมดาว</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card>\n        <ion-card-header>\n          <h1>สามพันโบกและหาดชมดาว</h1>\n        </ion-card-header>\n        \n        <ion-card-content>\n            <img src="https://www.paiduaykan.com/province/Northeast/ubonratchathani/pic/hadchomdaw.jpg"><br>\n            หาดชมดาว หรือ แก่งชมดาว อยู่ในบริเวณหมู่บ้านโนนตาล อำเภอนาตาล อุบลราชธานีอยู่ก่อนถึงสามพันโบกประมาณ  20 ก.ม. หาดชมดาวเป็นแนวหาดหิน แก่งหิน อันกว้างใหญ่และยาวมากหลายร้อยเมตร  ซึ่งการเกิดของหินรูปพรรณสัณฐานประหลาด เช่นเดียว กับสามพันโบก ซึ่งในช่วงฤดูน้ำหลากแก่งหินเหล่านี้จะจมอยู่ใต้แม่น้ำโขงและด้วยแรงน้ำวนกัดเซาะ ทำให้แก่งหินกลายเป็นแอ่งเล็กใหญ่ จำนวนมาก เกิดเป็นประติมากรรมหินธรรมชาติรูปร่างแปลกตาชวนให้จินตนาการ  หาดชมดาวมีลักษณะคล้ายกับสามพันโบกแต่ มีพื้นที่ กว้างกว่า รวมถึงมีริ้วลายหินและรูปทรงแปลกๆให้เห็นชมเยอะกว่า บางพื้นที่เป็นรูเว้าแหว่ง บางพื้นที่ก็ซ้อนกันเป็นชั้น  บางพื้นที่เป็นดิน แห้งระแหง มีแอ่งน้ำน้อยใหญ่ บางแอ่งใหญ่บางแอ่งเล็ก มีรูปร่างลักษณะแตกต่างกันออกไป  หาดชมดาวมีจุดไฮไลต์ที่ สวยที่สุด ซึ่งเป็นลักษณะเป็นผาหินสูงใหญ่และเว้าแหว่งยาวคล้ายช่องแคบมีสายน้ำไหลผ่าน และมีก้อนหินเล็กกลางน้ำให้ลงไปยืนโพสต์ท่าถ่ายรูป ซึ่งได้มุมสวยเก๋ไม่เหมือนใคร  ช่วงเวลาที่เหมาะสมมี 2 ช่วง คือ เช้าและบ่ายไม่แนะนำให้มาเที่ยงเพราะจะร้อนมาก หากอยากชม พระอาทิตย์ขึ้นก็มาในช่วงเช้าก่อน 8 โมง  เพราะหลังจากเวลานั้นไปแดดจ้ามาก เพราะอุบลเป็นจังหวัดที่พระอาทิตย์ขึ้นเร็วมาก ตีห้าครึ่ง พระอาทิตย์เริ่มมาแล้ว และอีกหนึ่งช่วงคือ ช่วงบ่ายตั้งแต่ประมาณ 4 โมง เย็น ทั้งนี้ต้องเผื่อเวลาเดินอีกประมาณครึ่งชั่วโมงด้วยค่ะ  ส่วนช่วงเวลาที่เหมาะจะมาเที่ยวนั่นก็คือ ตั้งแต่ พ.ย. –พ.ค. \n            <br><br>\n            <strong>การเดินทางไปหาดชมดาว</strong><br>\n            <br>\n            จากอุบลฯใช้เส้นทางเดียวกับทางไปสามพันโบก แต่หาดชมดาวจะถึงก่อน  การเดินทางไปหาดชมดาวจากเมืองอุบลราชธานี ใช้เส้นทาง ทางหลวงหมายเลข 2050 ผ่านอำเภอตระการพืชผล เลี้ยวขวาไปตามทางหลวงหมายเลข 2337 ถึงทางแยกที่ทางหลวงหมายเลข 2337 มาตัดกับทางหลวงหมายเลข 2112 เป็นทางแยกโขงเจียม-เขมราฐ ให้เลี้ยวซ้าย ประมาณ 12 กิโลเมตร จะมีทางแยกขวามือเข้าสู่ หาดชมดาว มีป้ายบอกชัดเจนเป็นทางลูกรังประมาณ 2 กิโลเมตร\n            <br><br>\n            <img src="https://www.paiduaykan.com/province/Northeast/ubonratchathani/pic/hadchomdaw1.jpg"><br>\n            <img src="https://www.paiduaykan.com/province/Northeast/ubonratchathani/pic/hadchomdaw2.jpg"><br>\n            <img src="https://www.paiduaykan.com/province/Northeast/ubonratchathani/pic/hadchomdaw3.jpg"><br>\n            <img src="https://www.paiduaykan.com/province/Northeast/ubonratchathani/pic/hadchomdaw4.jpg"><br>\n            <img src="https://www.paiduaykan.com/province/Northeast/ubonratchathani/pic/hadchomdaw5.jpg"><br>\n            <img src="https://www.paiduaykan.com/province/Northeast/ubonratchathani/pic/hadchomdaw6.jpg"><br>\n            <br><h2><strong>พื้นที่หาดชมดาวกว้างมากมีทั้งหาดทรายและหาดหิน</strong></h2><br>\n            <br>\n            <img src="https://www.paiduaykan.com/province/Northeast/ubonratchathani/pic/hadchomdaw11.jpg"><br>\n            <img src="https://www.paiduaykan.com/province/Northeast/ubonratchathani/pic/hadchomdaw13.jpg"><br>\n            <img src="https://www.paiduaykan.com/province/Northeast/ubonratchathani/pic/hadchomdaw16.jpg"><br>\n            <img src="https://www.paiduaykan.com/province/Northeast/ubonratchathani/pic/hadchomdaw17.jpg"><br>\n            <br><h2><strong>แอ่งน้ำน้อยใหญ่</strong></h2><br>\n            <br>\n            <img src="https://www.paiduaykan.com/province/Northeast/ubonratchathani/pic/hadchomdaw20.jpg"><br>\n            <img src="https://www.paiduaykan.com/province/Northeast/ubonratchathani/pic/hadchomdaw23.jpg"><br>\n            <img src="https://www.paiduaykan.com/province/Northeast/ubonratchathani/pic/hadchomdaw14.jpg"><br>\n            <img src="https://www.paiduaykan.com/province/Northeast/ubonratchathani/pic/hadchomdaw15.jpg"><br>\n            <br><h2><strong>พื้นดินแห้งแล้งกระทบแสงอีกหนึ่งศิลปะอันงดงาม</strong></h2><br>\n            <br>\n            <img src="https://www.paiduaykan.com/province/Northeast/ubonratchathani/pic/hadchomdaw18.jpg"><br>\n            <img src="https://www.paiduaykan.com/province/Northeast/ubonratchathani/pic/hadchomdaw19.jpg"><br>\n            <img src="https://www.paiduaykan.com/province/Northeast/ubonratchathani/pic/hadchomdaw22.jpg"><br>\n            <img src="https://www.paiduaykan.com/province/Northeast/ubonratchathani/pic/hadchomdaw10.jpg"><br>\n        </ion-card-content>\n      </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"D:\RADAR\src\pages\summer\Summer-Page\E\three-thousand-e\three-thousand-e.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ThreeThousandEPage);
    return ThreeThousandEPage;
}());

//# sourceMappingURL=three-thousand-e.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IslandSPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the IslandSPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IslandSPage = /** @class */ (function () {
    function IslandSPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    IslandSPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IslandSPage');
    };
    IslandSPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-island-s',template:/*ion-inline-start:"D:\RADAR\src\pages\summer\Summer-Page\S\island-s\island-s.html"*/'<!--\n  Generated template for the IslandSPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>หมู่เกาะกำ ระนอง</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card>\n        <ion-card-header>\n          <h1>หมู่เกาะกำ ระนอง</h1>\n        </ion-card-header>\n        \n        <ion-card-content>\n          <br>\n            หมู่เกาะกำ เป็นเกาะที่สวยงาม มีหาดทรายขาวบริสุทธิ์อยู่เกือบรอบเกาะ หมู่เกาะกำเป็นหมู่เกาะที่อยู่ในพื้นที่ของอุทยานแห่งชาติ แหลมสน  มีเกาะกำใหญ่เป็นเกาะศูนย์กลางและรายล้อมด้วย เกาะกำนุ้ย เกาะกำกลางเกาะกำตก เกาะค้างคาว เกาะล้าน เกาะกำหนุ่ย พื้นที่ของหมู่เกาะ ส่วนใหญ่ อยู่ในแนวน้ำตื้น น้ำทะเลลึกไม่เกิน 7 เมตร มีเพียงเกาะค้างคาวที่อยู่ในแนวน้ำลึก ทะเลรอบเกาะมี ความลึกประมาณ 10 เมตร จากหาดบางเบนจะมองเห็นเกาะเรียงจากซ้าย ไปขวาเรียงกันไปเริ่มจากหมู่เกาะกำนุ้ยอยู่ด้านซ้ายสุด ถัดมาเป็นหมู่เกาะญี่ปุ่น หมู่เกาะกำใหญ่อยู่ถัดไป \n            <img src="https://www.paiduaykan.com/76_province/south/ranong/pic/khokam1.jpg"><br>\n            <strong>1. เกาะกำตก หรือเกาะอ่าวเขาควาย </strong><br>\n            อยู่ถัดมาทางใต้ของเกาะค้างคาวใช้เวลาประมาณ 20 นาทีด้วยเรือหางยาวเล็ก เป็นที่ตั้งของหน่วยพิทักษ์อุทยาน ซึ่งเป็นหน่วยย่อย ที่ดูแล รักษาและอำนวยความสะดวกให้นักท่องเที่ยว ด้านหลังเกาะด้านตะวันตกเป็น ชายหาดที่โค้งมาติดกันเป็นรูปวงกลมตามแนว เหนือ-ใต้ ด้วยธรรมชาติอันน่าอัศจรรย์นี้เอง ชาวเรือจึงเรียกเกาะนี้ว่า อ่าวเขาควาย ตามแนวชายหาดมีต้นหูกวาง และต้นจิกทะเลคอย ให้ร่มเงา บนหาดมีปูเสฉวนอาศัยอยู่จำนวนมาก ในตอนกลางคืนจะได้้ยินเสียงของปูเสฉวนที่ออกมาหากิน\nเกาะกำนุ้ย อยู่ทางซ้ายมือไม่ไกล มากนัก เมื่อมองไปทางทิศตะวันออกเฉียงลงไปทางใต้ และจะมองเห็น\nเกาะกำใหญ่ ทางขวามือ เมื่อมองไปทางทิศตะวันตกเฉียงใต้\n            <br><br>\n            <img src="https://www.paiduaykan.com/76_province/south/ranong/pic/khokam25.jpg"><br>\n            <img src="https://www.paiduaykan.com/76_province/south/ranong/pic/khokam26.jpg"><br>\n            <img src="https://www.paiduaykan.com/76_province/south/ranong/pic/khokam27.jpg"><br>\n            <img src="https://www.paiduaykan.com/76_province/south/ranong/pic/khokam2.jpg"><br>\n            <strong>2. เกาะกำใหญ่ เกาะกำนุ้ย</strong><br>\n            สภาพป่าบนเกาะมีพันธุ์ไม้นานาชนิด รวมทั้งสัตว์ป่าโดยเฉพาะนกหลายชนิดอาศัยอยู่ ธรรมชาติรอบเกาะทุกเกาะเป็นหาดทรายสลับ โขดหินบางบริเวณมีแนวปะการังและปลาหลายชนิดอาศัยอยู่รวมกัน\n            <br><br>\n            <strong>3.เกาะญี่ปุ่น หรือเกาะกำกลาง </strong><br>\n            เป็นเกาะที่มีขนาดเล็กที่สุดในบรรดาหมู่เกาะกำ ตั้งอยู่กึ่งกางระหว่างเกาะกำใหญ่ ทางทิศตะวันออกและ ทิศตะวันตก ของเกาะกำนุ้ย รูปร่างของเกาะเป็นภูเขาเล็กๆโดยมีแนวชายหาดอยู่ทางด้านหน้าของเกาะ ทางทิศ ตะวันออก เกาะญี่ปุ่นถึงแม้จะเป็นเกาะเล็กๆแต่มี ธรรมชาติที่ยิ่งใหญ่ ชายหาดของเกาะญี่ปุ่นมีทรายที่ขาวละเอียด นุ่มเท้า นอกจากนี้ยังมีีน้ำทะเลที่ใสสะอาดจนมองเห็นพื้นทรายสามารถ เดินเที่ยวตามชายหาดได้รอบจนถึงด้่านgหนือของเกาะที่อยู่ใกล้ กับเกาะเล็กๆอีกเกาะหนึ่ง นอกจากนี้รอบเกาะยังพอมีแนวปะการังดำน้ำ ชมได้แต่มีจำนวนไม่มาก \n            <br><br>\n            <img src="https://www.paiduaykan.com/76_province/south/ranong/pic/khoyeepun22.jpg"><br>\n            <img src="https://www.paiduaykan.com/76_province/south/ranong/pic/khoyeepun23.jpg"><br>\n            <img src="https://www.paiduaykan.com/76_province/south/ranong/pic/khoyeepun24.jpg"><br>\n            <img src="https://www.paiduaykan.com/76_province/south/ranong/pic/khoyeepun10.jpg"><br>\n            <strong>4. เกาะค้างคาว</strong><br>\n            เป็นเกาะใกล้ชายหาดบางเบนมากที่สุดจากหาดบางเบนสามารถนั่งเรือไปยังเกาะค้างคาวโดย ใช้เวลาประมาณ 40 นาที ห่างจากที่ ทำการอุทยานแห่งชาตแหลมสนประมาณ 9 กิโลเมตร เกาะนี้มีหาดทรายขาวละเอียด รอบเกาะสามารถดำน้ำชมปะการัง ได้ทั้งแบบน้ำตื้นและน้ำลึก เกาะค้างคาว เป็นที่อาศัยของค้างคาว แม่ไก่นับพันตัว ถือเป็นเกาะที่สวยงามที่สุดในการเที่ยวหมู่เกาะกำ ทะเลระนอง \n            <br><br>\n            <img src="https://www.paiduaykan.com/76_province/south/ranong/pic/khokangkao1.jpg"><br>\n            <img src="https://www.paiduaykan.com/76_province/south/ranong/pic/khokangkao24.jpg"><br>\n            <strong>การเดินทางไปเกาะกำ ระนอง</strong><br>\n            ใช้บริการเรือนำเที่ยว โดยโปรแกรมนำเที่ยวหมู่เกาะกำแบบไปเช้าเย็นกลับเนื่องจากบนเกาะไม่มีที่พักแรมและสิ่งอำนวยความสะดวกใดๆ ทั้งสิ้น โปรแกรมท่องเที่ยวเริ่มตั้งแต่เวลา 8.30-16.00 น. โดยไปเที่ยว ยังเกาะกำตกเกาะญี่ปุ่นเกาะค้างคาวเช่าเหมาเรือหางยาวของ ชาวบ้านติดต่อ ขอ เช่าเรือได้ที่ชมเรือนำเที่ยวโทร 086 2710373 ราคาเช่าประมาณ 2500 บาทต่อลำ (ราคาเรืออาจมีการเปลี่ยนแปลงสอบถามอีกครั้ง) บนเกาะกำตกซึ่งเป็นที่ตั้งของหน่วยพิทักษ์อุทยานฯ มีห้องน้ำให้บริการรวมถึงเก้าอี้ สำหรับนั่งพักผ่อนและรับประทานอาหารกลางวันซึ่งนักท่องเที่ยวต้องเตรียมาอาหารและน้ำดื่มมาเอง บนเกาะไม่มีขาย \n            <br><br>\n            \n\n\n        </ion-card-content>\n      </ion-card>\n</ion-content>\n'/*ion-inline-end:"D:\RADAR\src\pages\summer\Summer-Page\S\island-s\island-s.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], IslandSPage);
    return IslandSPage;
}());

//# sourceMappingURL=island-s.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeaSPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SeaSPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SeaSPage = /** @class */ (function () {
    function SeaSPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SeaSPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SeaSPage');
    };
    SeaSPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sea-s',template:/*ion-inline-start:"D:\RADAR\src\pages\summer\Summer-Page\S\sea-s\sea-s.html"*/'<!--\n  Generated template for the SeaSPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>เยือน หนองทะเล กระบี่ สัมผัสวิถีความงามในยามเช้า</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card>\n        <ion-card-header>\n          <h1>เยือน หนองทะเล กระบี่ สัมผัสวิถีความงามในยามเช้า</h1>\n        </ion-card-header>\n        \n        <ion-card-content>\n            <img src="https://www.picz.in.th/images/2018/10/17/kaEUBE.jpg"><br>\n            เมื่อพูดถึง "จังหวัดกระบี่" หลายคนคงนึกถึงความสวยงามของสถานที่ท่องเที่ยวทางทะเลซะมากกว่า ซึ่งสถานที่ยอดฮิตที่มีชื่อเสียงและเป็นที่รู้จักทั้งชาวไทยและชาวต่างชาติ ได้แก่ ทะเลแหวก, สระมรกต, อ่าวนาง, อ่าวมาหยา, เกาะพีพี และเกาะลันตา เป็นต้น\n            <br><br>\n          แต่วันนี้กระปุกดอทคอมจะพาเพื่อน ๆ ไปทำความรู้จักกับอีกหนึ่งสถานที่เที่ยวที่ไม่ค่อยมีนักท่องเที่ยวรู้จักมากนัก นั่นก็คือ "หนองทะเล" ผ่านบันทึกการเดินทางของ คุณ The Painter สมาชิกเว็บไซต์พันทิปดอทคอม ที่ได้เก็บภาพสวย ๆ ของที่นี่แล้วแชร์ความประทับใจมาให้เราได้ชมกันค่ะ\n          <br><br>\n          สวัสดีครับ ง้างอยู่นานแล้วว่าอยากจะเอาสถานที่แห่งหนึ่งในจังหวัดกระบี่มาให้ดูกัน แต่ด้วยความเป็นคนขี้เกียจพิมพ์ ขี้เกียจตั้งกระทู้ ก็เลยง้างกันข้ามปีเลยครับ\n          <br><br>\n          หนองทะเล....เป็นหนองน้ำขนาดใหญ่ ไม่ไกลจากอ่าวนางมากนัก เป็นที่ใหม่สำหรับนักถ่ายภาพท้องถิ่นและใกล้เคียง สภาพเป็นหนองน้ำกึ่งธรรมชาติ มีภูเขาหินปูนล้อมรอบ ดวงอาทิตย์ขึ้นจากด้านหลังแนวเทือกเขา เมื่อแสงอาทิตย์พ้นแนวภูเขากระทบกับหมอกและน้ำอันสงบนิ่งยามเช้า ก่อให้เกิดมิติของภาพที่สวยงามมากครับ\n          <img src="https://www.picz.in.th/images/2018/10/17/kaExvv.jpg"><br>\n          ภาพนี้คือภาพแรกที่ผมถ่ายหลังจากเข้าไปที่หนองทะเลมาครับ ถ่ายภาพไปก็คิดไปว่าที่นี่สวยขนาดนี้ แต่รอดหูรอดตาคนชอบถ่ายภาพมาได้อย่างไร\n          <br><br>\n          <img src="https://www.picz.in.th/images/2018/10/17/kaERlk.jpg"><br>\n          ด้วยความว่ากระบี่เป็นเมืองที่อยู่ด้านทิศตะวันตก หาที่ถ่ายภาพพระอาทิตย์ขึ้นยากมาก ๆ ประกอบกับที่นี่ อยู่ไม่ไกลจากที่พักผมมากนัก ทำให้ผมเข้าไปถ่ายภาพที่นี่บ่อย ๆ ครับ\n          <br><br>\n          <img src="https://www.picz.in.th/images/2018/10/17/kaEqqN.jpg"><br>\n          หลังจากภาพชุดแรกได้ถูกเผยแพร่ไปในโลกโซเชียล ก็มีเพื่อน ๆ ตากล้องทั้งจังหวัดกระบี่เองและจังหวัดใกล้เคียง เดินทางเข้ามาถ่ายภาพที่นี่กันบ่อย ๆ ครับ\n          <br><br>\n          <img src="https://www.picz.in.th/images/2018/10/17/kaE58V.jpg"><br>\n          <br><br>\n          เสน่ห์ของที่นี่อีกอย่างหนึ่ง ก็คือ น้องเป็ดครับ เป็นเป็ดของบ้านที่อยู่รอบ ๆ หนองน้ำแห่งนี้ครับ\n          <img src="https://www.picz.in.th/images/2018/10/17/kaEO7Q.jpg"><br>\n          บางครั้งเขาก็บินไปบินมาให้เราลองกล้องครับ แรก ๆ ถ่ายไม่ค่อยทันครับ ตอนนี้...ก็ยังถ่ายไม่ค่อยทันเหมือนเดิมครับ 555\n          <br><br>\n\n\n\n\n\n\n        </ion-card-content>\n      </ion-card>\n</ion-content>\n'/*ion-inline-end:"D:\RADAR\src\pages\summer\Summer-Page\S\sea-s\sea-s.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SeaSPage);
    return SeaSPage;
}());

//# sourceMappingURL=sea-s.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KhaoNgaoWPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the KhaoNgaoWPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var KhaoNgaoWPage = /** @class */ (function () {
    function KhaoNgaoWPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    KhaoNgaoWPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad KhaoNgaoWPage');
    };
    KhaoNgaoWPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-khao-ngao-w',template:/*ion-inline-start:"D:\RADAR\src\pages\summer\Summer-Page\W\khao-ngao-w\khao-ngao-w.html"*/'<!--\n  Generated template for the KhaoNgaoWPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>อุทยานหินเขางู</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card>\n        <ion-card-header>\n          <h1>ชมวิวกลางหุบเขา “อุทยานหินเขางู”</h1>\n        </ion-card-header>\n        \n        <ion-card-content>\n            <img src="https://travel.mthai.com/app/uploads/2017/02/IMG_3769.jpg"><br>\n            “อุทยานหินเขางู” เป็นอุทยานหิน สวนป่า ตั้งอยู่ที่ตำบลเกาะพลับพลา อำเภอเมือง ห่างจากตัวจังหวัดราชบุรีประมาณ 8  กิโลเมตร แต่เดิมเป็นแหล่งระเบิดและย่อยหินที่สำคัญของไทยตั้งแต่สมัยต้นรัตนโกสินทร์ เนื่องจากเป็นปูนที่มีคุณภาพดี\n            <br>\n            ต่อมาทั้งภาครัฐและประชาชนได้เล็งเห็นถึงความเสื่อมโทรมของสภาพภูมิประเทศ และวิวทิวทัศน์ อีกทั้งที่เขางูนี้ยังเป็นศาสนสถานอันเก่าแก่ จึงได้มีการยกเลิกสัมปทานการระเบิดและย่อยหินที่บริเวณนี้ไป\n            <br>\n            หลังจากยกเลิกสัมปทาน เขางูกลายเป็นเหมืองร้าง มีสภาพทรุดโทรม ทางจังหวัดราชบุรีจึงได้พัฒนาเขางูให้เป็นสวนสาธารณะและสถานที่ท่องเที่ยว ทางโบราณคดี และได้สร้างพระพุทธรูปหินขนาดใหญ่ เต็มพื้นที่หน้าผา สร้างจากการยิงแสงเลเซอร์ลงหน้าผาหิน\n            <br><br>\n            <img src="https://travel.mthai.com/app/uploads/2017/02/IMG_3790.jpg"><br>\n            <img src="https://travel.mthai.com/app/uploads/2017/02/IMG_3801-1.jpg"><br>\n            <img src="https://travel.mthai.com/app/uploads/2017/02/IMG_37911.jpg"><br>\n            <img src="https://travel.mthai.com/app/uploads/2017/02/IMG_1553.jpg"><br>\n            <img src="https://travel.mthai.com/app/uploads/2017/02/IMG_1576.jpg"><br>\n            ภายในอุทยานหินเขางูแห่งนี้ มีสถานที่ท่องเที่ยวทางโบราณคดีอยู่หลายแห่ง ซึ่งจะเป็นถ้ำที่อยู่บนภูเขา มี ถ้ำฤๅษี ถ้ำฝาโถ และถ้ำจีน-จาม ถ้ำต่างๆ นี้พบพระพุทธรูปจำหลัก หรือพระพุทธรูปที่สลักหินที่ฝาผนังถ้ำอยู่หลายองค์ ซึ่งพระพุทธรูปเหล่านี้เป็นพระพุทธรูปตั้งแต่สมัยทวารวดี แต่ละถ้ำอยู่ไม่ไกลกัน แต่ต้องเดินขึ้นบันไดไต่เขาไปค่อนข้างสูง บริเวณรอบๆ ก็จะมีฝูงลิงอาศัยอยู่เป็นจำนวนมาก\n            <br><br>\n            <img src="https://travel.mthai.com/app/uploads/2017/02/IMG_8581.jpg"><br>\n            <br><strong>ถ้ำในบริเวณอุทยานหินเขางู</strong><br>\n            <ul>\n              <strong>- ถ้ำฤๅษี </strong> : พบพระพุทธรูปสมัยทวารวดี 2 องค์ องค์แรกประทับห้อยพระบาท (ประลัมพปาทาสนะ) พระหัตถ์ขวาอยู่ในปางแสดงธรรม (วิตรรกมุทรา) พระหัตถ์ซ้ายวางในพระเพลา ระหว่างพระบาทมีจารึกว่า ปุญกรมชฺระ ศฺรีสมาธิคุปฺต (ะ) แปลว่า พระศรีสมาธิคุปตะเป็นผู้บริสุทธิ์ด้วยการกระทำบุญ อีกฟากของผนังถ้ำมีพระพุทธรูปยืนปางเสด็จลงจากดาวดึงส์ นอกจากนี้ยังมีพระพุทธรูปปางสมาธิอื่นๆอีกหลายองค์<br><br>\n              <strong>- ถ้ำฝาโถ </strong> : พบพระพุทธรูปนอนจำหลักปางมหาปรินิพพานมีประภามณฑลและลายปูนปั้นรูปต้นสาละ ด้านบนมีรูปเทพชุมนุม ผนังด้านตรงข้ามมีภาพสาวก2 องค์<br><br>\n              <strong>- ถ้ำจีน </strong> : พบพระพุทธรูปจำหลัก 2 องค์ ปางสมาธิ พระหัตถ์แสดงวิตรรกมุทรา มีร่องรอยของการพอกปูนทับ องค์ที่อยู่ใกล้ปากถ้ำมีรอยหักพัง ไม่สมบูรณ์<br><br>\n              <strong>- ถ้ำจาม </strong> : พบพบพระพุทธรูปนอนจำหลักปางมหาปรินิพพาน และภาพยมกปาฏิหาริย์ มีภาพปูนปั้นรูปต้นมะม่วง ถัดมายังพบรูปบุคคลยืนซ้อนกันและรูปพญานาคอีกด้วย<br><br>\n            </ul>\n            <img src="https://travel.mthai.com/app/uploads/2017/02/IMG_3234_600.jpg"><br>\n            <img src="https://travel.mthai.com/app/uploads/2017/02/IMG_3827-1.jpg"><br>\n            <img src="https://travel.mthai.com/app/uploads/2017/02/IMG_1579.jpg"><br>\n            <strong>ช่วงเวลาแนะนำ :</strong>\n             ได้ทุกฤดู   ฤดูท่องเที่ยวที่แนะนำคือ ฝนและหนาว สำหรับฤดูร้อนตอนกลางวันที่นี่อากาศค่อนข้างร้อนจัดเพราะเป็นภูเขาหินปูน  ต้นไม้จะแห้งเปลี่ยนสีไม่ร่มรื่น แต่ในช่วงเย็นของหน้าร้อนที่นี่ลมจะดีมากเหมาะแก่การออกกำลังกายในตอนเย็น\n              <br><br>\n            <strong>การเดินทาง  : </strong><br>\n            <ul>\n              <strong>รถยนต์ส่วนตัว  </strong> เส้นทางที่ 1 ห่างจากตัวเมืองไปตามเส้นทางหลวงหมายเลข 3087 ถนนสายราชบุรี-จอมบึง-สวนผึ้ง ห่างจากตัวเมืองราชบุรีไปทางทิศตะวันตกเฉียงเหนือ ประมาณ 8 กิโลเมตร จะพบสี่แยกให้เลี้ยวขวาแล้วขับมาประมาณ 1 กม. จะพบ อุทยานหินเขางู อยู่ด้านซ้ายมือ  เส้นทางที่ 2 มาจากทางหลวงหมายเลข 3089 ( จากทางวัดหนองหอย) จะพบอุทยานหินเขางู อยู่ด้านขวามือ\n              <br><br>\n              <strong>รถโดยสารประจำทาง</strong> มีรถโดยสารประจำทางจากตัวอำเภอเมืองจังหวัดราชบุรี <br>\n            </ul>\n\n        </ion-card-content>\n      </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"D:\RADAR\src\pages\summer\Summer-Page\W\khao-ngao-w\khao-ngao-w.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], KhaoNgaoWPage);
    return KhaoNgaoWPage;
}());

//# sourceMappingURL=khao-ngao-w.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HuaiLengWPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HuaiLengWPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HuaiLengWPage = /** @class */ (function () {
    function HuaiLengWPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HuaiLengWPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HuaiLengWPage');
    };
    HuaiLengWPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-huai-leng-w',template:/*ion-inline-start:"D:\RADAR\src\pages\summer\Summer-Page\W\huai-leng-w\huai-leng-w.html"*/'<!--\n  Generated template for the HuaiLengWPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>อ่างเก็บน้ำห้วยไม้เต็ง</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card>\n        <ion-card-header>\n          <h1>อ่างเก็บน้ำห้วยไม้เต็ง</h1>\n        </ion-card-header>\n        \n        <ion-card-content>\n            <img src="http://www.xn--b3czk4afcy3gxah5a1g4e.com/wp-content/uploads/2013/02/IMG_5854_1000_resize.jpg"><br>\n            <img src="http://www.xn--b3czk4afcy3gxah5a1g4e.com/wp-content/uploads/2013/02/5871_620.jpg"><br>\n            ห้วยไม้เต็ง  อ่างเก็บน้ำครอบคลุมพื้นที่ประมาณ 199 ตารางกิโลเมตรใน เขต อ.จอมบึงและ อ.บ้านคา ใช้เป็นแหล่งกักเก็บน้ำเพื่อการเกษตรและประปา  อ่างเก็บน้ำห้วยไม้เต็ง ยังเป็นแหล่งท่องเที่ยว พักผ่อน เล่นน้ำ ตกปลา ชมนก เป็นจุดแวะพักยามเย็นดูพระอาทิตย์ลับขอบฟ้า  เป็นพื้นที่สาธารณะ สามารถกางเต็นท์ค้างแรมใช้ชีวิตกลางแจ้งได้  ห้วยไม้เต็งอยู่ติดถนนหลวงสาย 3208 เส้นทางสู่ อ.สวนผึ้ง  ช่วงเวลาแนะนำคือ ช่วงเย็นอากาศไม่ร้อน\n            <br><br>\n\n            <strong>เกี่ยวกับ อ่างเก็บน้ำห้วยไม้เต็ง</strong><br><br>\n            ลุ่มน้ำห้วยไม้เต็งเป็นลุ่มน้ำสาขาของลุ่มน้ำแม่กลอง ครอบคลุมพื้นที่ประมาณ 199 ตารางกิโลเมตร ในเขต อ.สวนผึ้ง กิ่ง อ.บ้านคา และ อ.จอมบึง จ.ราชบุรี ห้วยไม้เต็งเป็นแหล่งน้ำธรรมชาติที่สำคัญต่อวิถีชีวิตของผู้คน พืช และสัตว์ ทั้งทางนิเวศวิทยาและสังคมอย่างยาวนาน เมื่อปี 2538 กรมชลประทานได้ดำเนินการสร้างอ่างเก็บน้ำสำนักห้วยไม้เต็งขึ้นในลำห้วยน้ำ สำนักห้วยไม้เต็ง เพื่อเป็นแหล่งกักเก็บน้ำสำหรับการเกษตรและระบบประปาของ อ.จอมบึง และ อ.เมือง จ.ราชบุรี แต่พบว่าอ่างเก็บน้ำห้วยสำนักไม้เต็งประสบปัญหาปริมาณน้ำกักเก็บไม่เต็มอ่าง เนื่องจากพื้นที่ต้นน้ำของห้วยไม้เต็งมีสภาพเสื่อมโทรม พื้นที่ถูกบุกรุกเพื่อใช้ประโยชน์ในด้านต่างๆ ทำให้เกิดการเปลี่ยนแปลงทางอุทกวิทยาและระบบนิเวศ เป็นผลให้เกิดปัญหาการลดลงของปริมาณน้ำ ลำน้ำตื้นเขิน คุณภาพน้ำเสื่อมโทรม กอปรกับสภาพพื้นที่ดังกล่าวประสบปัญหาภัยแล้งอย่างรุนแรงตลอดระยะเวลาที่ ผ่านมา ซึ่งส่งผลกระทบต่อวิถีชีวิตและคุณภาพชีวิตของผู้คนในพื้นที่อย่างมาก จากปัญหาดังกล่าว กรมทรัพยากรน้ำ กระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม ในฐานะหน่วยงานหลักที่เกี่ยวข้องกับการบริหารทรัพยากรน้ำของประเทศ จึงได้จัดทำโครงการอนุรักษ์ฟื้นฟูแหล่งน้ำห้วยไม้เต็ง จ.ราชบุรี ซึ่งเป็นหนึ่งในโครงการที่จะฟื้นฟูระบบนิเวศต้นน้ำ แก้ไขปัญหาการขาดแคลนน้ำ ทั้งน้ำเพื่ออุปโภคบริโภคและการเกษตร เป็นการเพิ่มปริมาณน้ำให้กับแหล่งน้ำในลำห้วยไม้เต็ง และยังลดปัญหาอุทกภัยได้อีกด้วย\n            <br>\n\n\n        </ion-card-content>\n      </ion-card>\n</ion-content>\n'/*ion-inline-end:"D:\RADAR\src\pages\summer\Summer-Page\W\huai-leng-w\huai-leng-w.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], HuaiLengWPage);
    return HuaiLengWPage;
}());

//# sourceMappingURL=huai-leng-w.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(247);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_Tourist_Tourist__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_farmer_farmer__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_North_North__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_Central_Central__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_East_East__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_NorthEast_NorthEast__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_Southern_Southern__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tourist_winter_tourist_winter__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_farmer_PageSeason_FarmerRainy_FarmerRainy__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_farmer_PageSeason_FarmerSummer_FarmerSummer__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_farmer_PageSeason_FarmerWinter_FarmerWinter__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_summer_summer__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_rain_rain__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_Tourist_Tourist__["a" /* TouristPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_farmer_farmer__["a" /* FarmerPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_North_North__["a" /* NorthPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_Central_Central__["a" /* CentralPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_East_East__["a" /* EastPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_NorthEast_NorthEast__["a" /* NorthEastPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_Southern_Southern__["a" /* SouthernPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tourist_winter_tourist_winter__["a" /* TouristWinterPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_farmer_PageSeason_FarmerRainy_FarmerRainy__["a" /* FarmerRainyPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_farmer_PageSeason_FarmerSummer_FarmerSummer__["a" /* FarmerSummerPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_farmer_PageSeason_FarmerWinter_FarmerWinter__["a" /* FarmerwinterPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_summer_summer__["a" /* SummerPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_rain_rain__["a" /* RainPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/rain/T-rain/C/river-c/river-c.module#RiverCPageModule', name: 'RiverCPage', segment: 'river-c', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rain/T-rain/E/chiang-khan-e/chiang-khan-e.module#ChiangKhanEPageModule', name: 'ChiangKhanEPage', segment: 'chiang-khan-e', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rain/T-rain/E/flowers-e/flowers-e.module#FlowersEPageModule', name: 'FlowersEPage', segment: 'flowers-e', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rain/T-rain/N/pai-cm/pai-cm.module#PaiCmPageModule', name: 'PaiCmPage', segment: 'pai-cm', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rain/T-rain/N/tee-lor-su-waterfall/tee-lor-su-waterfall.module#TeeLorSuWaterfallPageModule', name: 'TeeLorSuWaterfallPage', segment: 'tee-lor-su-waterfall', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rain/T-rain/C/khao-yai-c/khao-yai-c.module#KhaoYaiCPageModule', name: 'KhaoYaiCPage', segment: 'khao-yai-c', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rain/T-rain/S/dam-s/dam-s.module#DamSPageModule', name: 'DamSPage', segment: 'dam-s', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rain/T-rain/S/rafting-s/rafting-s.module#RaftingSPageModule', name: 'RaftingSPage', segment: 'rafting-s', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rain/T-rain/W/suan-phung-w/suan-phung-w.module#SuanPhungWPageModule', name: 'SuanPhungWPage', segment: 'suan-phung-w', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rain/T-rain/W/thongphaphum-w/thongphaphum-w.module#ThongphaphumWPageModule', name: 'ThongphaphumWPage', segment: 'thongphaphum-w', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/summer/Summer-Page/C/canal-c/canal-c.module#CanalCPageModule', name: 'CanalCPage', segment: 'canal-c', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/summer/Summer-Page/N/barleyfield-n/barleyfield-n.module#BarleyfieldNPageModule', name: 'BarleyfieldNPage', segment: 'barleyfield-n', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/summer/Summer-Page/E/three-thousand-e/three-thousand-e.module#ThreeThousandEPageModule', name: 'ThreeThousandEPage', segment: 'three-thousand-e', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/summer/Summer-Page/S/island-s/island-s.module#IslandSPageModule', name: 'IslandSPage', segment: 'island-s', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/summer/Summer-Page/S/sea-s/sea-s.module#SeaSPageModule', name: 'SeaSPage', segment: 'sea-s', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/summer/Summer-Page/W/khao-ngao-w/khao-ngao-w.module#KhaoNgaoWPageModule', name: 'KhaoNgaoWPage', segment: 'khao-ngao-w', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/summer/Summer-Page/W/huai-leng-w/huai-leng-w.module#HuaiLengWPageModule', name: 'HuaiLengWPage', segment: 'huai-leng-w', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/summer/summer.module#SummerPageModule', name: 'SummerPage', segment: 'summer', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_Tourist_Tourist__["a" /* TouristPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_farmer_farmer__["a" /* FarmerPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_North_North__["a" /* NorthPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_Central_Central__["a" /* CentralPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_East_East__["a" /* EastPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_NorthEast_NorthEast__["a" /* NorthEastPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_Southern_Southern__["a" /* SouthernPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tourist_winter_tourist_winter__["a" /* TouristWinterPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_farmer_PageSeason_FarmerRainy_FarmerRainy__["a" /* FarmerRainyPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_farmer_PageSeason_FarmerSummer_FarmerSummer__["a" /* FarmerSummerPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_farmer_PageSeason_FarmerWinter_FarmerWinter__["a" /* FarmerwinterPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_summer_summer__["a" /* SummerPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_rain_rain__["a" /* RainPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_Tourist_Tourist__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_farmer_farmer__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Tourist', component: __WEBPACK_IMPORTED_MODULE_5__pages_Tourist_Tourist__["a" /* TouristPage */] },
            { title: 'Farmer', component: __WEBPACK_IMPORTED_MODULE_6__pages_farmer_farmer__["a" /* FarmerPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\RADAR\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\RADAR\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HuaiNamDangPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the HuaiNamDangPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HuaiNamDangPage = /** @class */ (function () {
    function HuaiNamDangPage(navCtrl, inAppBrowser) {
        this.navCtrl = navCtrl;
        this.inAppBrowser = inAppBrowser;
    }
    HuaiNamDangPage.prototype.openmHuaiNamDang = function () {
        this.inAppBrowser.create("https://www.ท่องทั่วไทย.com/%E0%B8%AD%E0%B8%B8%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%AB%E0%B9%88%E0%B8%87%E0%B8%8A%E0%B8%B2%E0%B8%95%E0%B8%B4%E0%B8%AB%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%94%E0%B8%B1%E0%B8%87-%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88/");
    };
    HuaiNamDangPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-huai-nam-dang',template:/*ion-inline-start:"D:\RADAR\src\pages\tourist-winter\page_winter\North\huai-nam-dang\huai-nam-dang.html"*/'<!--\n  Generated template for the HuaiNamDangPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title> อุทยานแห่งชาติห้วยน้ำดัง ( Huai Nam Dang National Park )</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      <h2>อุทยานแห่งชาติห้วยน้ำดัง<p>( Huai Nam Dang National Park )</p></h2>\n    </ion-card-header>\n      \n    <ion-card-content>\n      <img src="http://www.chiangmaiexpert.com/wp-content/uploads/2016/06/cover1-3-1170x780.jpg">\n      <br>\n      \n          อุทยานแห่งชาติห้วยน้ำดัง ได้จัดตั้งเป็นอุทยานแห่งชาติเมื่อวันที่ 14 สิงหาคม พ.ศ. 2538 เป็นอุทยานแห่งชาติลำดับที่ 81 ของประเทศไทย มีพื้นที่ครอบคลุมอำเภอแม่แตง อำเภอเวียงแหง จังหวัดเชียงใหม่ และอำเภอปาย จังหวัดแม่ฮ่องสอน รวมเนื้อที่ทั้งหมดประมาณ 1,252 ตารางกิโลเมตร หรือ 782,575 ไร่ ภูมิประเทศส่วนใหญ่เป็นเทือกเขาและภูเขาสูงสลับซับซ้อน ทอดตัวยาวตามแนวเหนือ-ใต้ และอยู่ในแนวเดียวกันกับเทือกเขาเชียงดาว\n          <br>\n      <br><img src="https://www.xn--72c5aba9c2a3b8a2m8ae.com/wp-content/uploads/2014/12/0-huaynamdung-03.jpg">\n      <br>\n      \n        \n อุทยานแห่งชาติห้วยน้ำดัง ได้จัดตั้งเป็นอุทยานแห่งชาติเมื่อวันที่ 14 สิงหาคม พ.ศ. 2538 เป็นอุทยานแห่งชาติลำดับที่ 81 ของประเทศไทย มีพื้นที่ครอบคลุมอำเภอแม่แตง อำเภอเวียงแหง จังหวัดเชียงใหม่ และอำเภอปาย จังหวัดแม่ฮ่องสอน รวมเนื้อที่ทั้งหมดประมาณ 1,252 ตารางกิโลเมตร หรือ 782,575 ไร่ ภูมิประเทศส่วนใหญ่เป็นเทือกเขาและภูเขาสูงสลับซับซ้อน ทอดตัวยาวตามแนวเหนือ-ใต้ และอยู่ในแนวเดียวกันกับเทือกเขาเชียงดาว\n ทะเลหมอก ดอยหลวง อุทยานแห่งชาติห้วยน้ำดัง\n \n ภูเขาต่างๆ ในพื้นที่มีความสูงตั้งแต่ 500-1,962 เมตร จาก ระดับน้ำทะเล มีภูเขาที่สูงที่สุดคือ ดอยช้าง เป็นป่าต้นน้ำลำธารลำห้วยน้อยใหญ่มากมาย ทั้งห้วยแม่เย็น ห้วยแม่ฮี้ ห้วยแม่ปิง ห้วยแม่จอกหลวง และห้วยน้ำดัง เป็นต้น ไหลรวมกันลงสู่แม่น้ำปาย แม่น้ำปิง และแม่น้ำแตง สภาพภูมิอากาศที่ห้วยน้ำดังนั้นเย็นสบายตลอดปี ในฤดูหนาวจะมีสายลมพัดผ่านทำให้อากาศค่อนข้างหนาวจัด นักท่องเที่ยวส่วนใหญ่นิยมมาพิสูจน์ความหนาวเย็น ชมวิวยามพระอาทิตย์ขึ้นที่จุดชมวิวดอยกิ่วลม และตั้งแคมป์ไฟนอนบนห้วยน้ำดังกัน\n <br><br>\n      <img src="https://www.xn--72c5aba9c2a3b8a2m8ae.com/wp-content/uploads/2014/12/0-huaynamdung-05.jpg">\n      <br>\n          แม้จะเป็นสถานที่เที่ยวยอดนิยม ที่รถยนต์สามารถเข้าถึง แต่สภาพป่าไม้ของอุทยานฯ ห้วยน้ำดังก็ยังอุดมสมบูรณ์ มีสังคมพืชหลากหลายชนิด ประกอบด้วยป่าดิบชื้น ป่าดิบเขา ป่าเบญจพรรณ ป่าสนเขา และยังมีพรรณไม้สำคัญมากมาย ทั้งไม้ตะเคียน ไม้ยาง จำปีป่า ยมหอม มะม่วงป่า ยมป่า เสลา ดงดำ แดง ประดู่ ตะแบก ตีนนก งิ้วป่า สนสองใบ เป็นต้น\n          <br><br>\n      <img src="https://www.xn--72c5aba9c2a3b8a2m8ae.com/wp-content/uploads/2014/12/0-huaynamdung-06.jpg">\n      <br>\n          ในพื้นที่ป่าลึกของอุทยานฯ ห้วยน้ำดังยังมีสัตว์ป่านานาชนิดอาศัยอยู่ด้วย ทั้งช้าง กวาง หมี เก้ง เลียงผา หมูป่า เสือ ชะมด ลิง พังพอน เม่น ไก่ปา ไก่ฟ้า และนกชนิดต่าง ทั้งนกเปล้า นกแก้ว นกขุนทอง นกขมิ้น นกปรอท และนกเหยี่ยว เป็นต้น\n\n          จุดเด่นของอุทยานฯ ห้วยน้ำดัง ไม่เพียงแค่มีอากาศหนาวเย็น สิ่งอำนวยความสะดวกครบครัน การเดินทางสะดวกเท่านั้น ที่นี่ยังมีจุดชมวิวที่สวยงาม และสถานที่เที่ยวธรรมชาติให้คุณได้เลือกเที่ยวเลือกชมกันอีกด้วย โดยไฮไลท์ของอุทยานฯ ห้วยน้ำดังนั่นก็คือการฝ่าสายลมหนาวมาเฝ้ารอชมความงามยามพระอาทิตย์ขึ้นที่จุดชมวิวดอยกิ่วลม จุดชมวิวที่สวยที่สุดของอุทยานฯ ที่ไม่เพียงมีวิวของทะเลหมอกไหลเอื่อยกระทบแสงลีส้มสวยงามของพระอาทิตย์เท่านั้น ยังสามารถมองเห็นวิว ขุนเขาได้ถึง 8 ดอย จากซ้ายไปขวาเริ่มตั้งแต่ดอยช้าง 1,962 เมตร ดอยแม่สลา 1,480 เมตร ดอยเลาวู 1,400 เมตร ดอยแม่งุม 1,300 เมตร ดอยขุนคอง 1,445 เมตร ดอยปี 1,311 เมตร ดอยแม่มือ และดอยหลวงเชียงดาว 2,175 เมตร\n          <br><br>\n      <img src="https://www.xn--72c5aba9c2a3b8a2m8ae.com/wp-content/uploads/2014/12/0-huaynamdung-02.jpg">\n      <br>\n          ในวันที่อากาศเปิดคุณยังสามารถเดินลงไปชมไม้ดอกเมืองเหนือ แวะนั่งพักผ่อนที่ศาลาชมวิวของจุดชมวิวดอยกิ่วลมได้ด้วย ภายในอุทยานฯ ห้วยน้ำดัง บริเวณลานกางเต็นท์และจุดตั้งแคมป์ไฟของอุทยาน ยังสามารถชมวิวพระอาทิตย์ได้สวยงามด้วยเช่นกัน จากจุดชมวิวดอยกิ่วลม ขับรถตาม เส้นทางดินลูกรังทางไปดอยสามหมื่นระยะทางประมาณ 6.5 กิโลเมตร ก็จะถึงจุดชมวิวดอยช้าง ยอดดอยที่สูงที่สุดของอุทยานฯ ห้วยน้ำดัง เปรียบเป็นห้องสมุดธรรมชาติที่ยังสมบูรณ์มาก เป็นจุดที่สามารถมองเห็นสภาพธรรมชาติของทิวเขาสลับซับซ้อน นักท่องเที่ยวสามารถมากางเต็นท์รอชมทะเลหมอกในยามเช้าตรู่ที่ดอยช้างได้เหมือนกัน\n          <br><br>\n      <img src="https://www.xn--72c5aba9c2a3b8a2m8ae.com/wp-content/uploads/2014/12/0-huaynamdung-01.jpg">\n      <br>\n          จากจุดชมวิวดอยช้างขับรถต่อไปประมาณ 9 กิโลเมตร จะถึงจุดตรวจทหารฐานปฏิบัติการบ้านหัวแม่เมือง บริเวณนี้มีจุดชมวิวหมู่บ้านชาวเขาเผ่าลีซอที่หลบอยู่ในหุบเขา มีทิวทัศน์ของดอกบัวตองสีเหลืองบานสะพรั่งเลียบแนวสันเขาล้อมรอบหมู่บ้านสวยงามมากๆ ขับรถต่อไปอีกประมาณ 8 กิโลเมตร ก็จะถึงดอยสามหมื่นแล้ว ดอยสามหมื่นมีจุดเด่นตรงที่ความงามของทุ่งดอกบัวตองที่จะบานเต็มที่ในระหว่างเดือนพฤศจิกายน-มกราคม ความสวยงามไม่แพ้ดอยแม่อูคอ ที่จังหวัด แม่ฮ่องสอนเลย แถมที่นี่ยังคงความเป็นธรรมชาติมากกว่าด้วย\n          <br><br>\n      <img src="https://www.xn--72c5aba9c2a3b8a2m8ae.com/wp-content/uploads/2014/12/0-huaynamdung-04.jpg">\n      <br><br>\n          สถานที่ทางธรรมชาติรอบนอกอุทยานฯ ห้วยน้ำดังยังมีอีกมาก คุณสามารถขับรถไปแวะเที่ยวบ่อน้ำพุร้อนป๋าแป๋โป่งเดือด บ่อน้ำพุร้อนขนาดใหญ่ กระจายอยู่ทั่วพื้นที่ อุณหภูมิน้ำผิวดินสูงถึงประมาณ 90-99 องศาเซลเซียส น้ำพุร้อนจะพุ่งจากใต้ดินตลอดเวลา บางครั้งพุ่งสูงถึง 2 เมตร คุณสามารถอาบและอบไอน้ำแร่ รวมถึงค้างแรมที่บ้านพักของบ่อน้ำพุร้อนป๋าแป๋โป่งเดือดได้ด้วย\n      \n          <br><br>\n          <strong>การเดินทาง</strong>\n              จากอำเภอเมืองจังหวัดเชียงใหม่ ขับรถไปตามทางหลวงหมายเลข 107 จนถึงตลาดแม่มาลัย ให้เลี้ยวซ้ายไปตามทางหลวงหมายเลข 1095 สายแม่มาลัย-ปาย จนถึงช่วงกิโลเมตรที่ 65-66 จะมีทางแยกขวามือเข้าอุทยานแห่งชาติห้วยน้ำดัง\n              <br><br>\n          <strong>สิ่งอำนวยความสะดวก</strong>\n              อุทยานแห่งชาติห้วยน้ำดัง มีบ้านพักหลังใหญ่เพียบพร้อมด้วยสิ่งอำนวยความสะดวกไว้รองรับนักท่องเที่ยว และยังมีลานกางเต็นท์หลายจุดทั่วพื้นที่ของอุทยานฯ จะเลือก นำเต็นท์มาเอง หรือขอเช่าเต็นท์พร้อมเครื่องนอนก็มีให้ครบครัน นอกจากนี้ยังมีร้านอาหารสวัสดิการ ลานแค้มป์ไฟ และห้องอาบน้ำบริการด้วย (สำหรับนักท่องเที่ยวที่ต้องการค้างแรมในบ้านพักของอุทยานฯ ต้องจองล่วงหน้าอย่างน้อย 7 วัน)\n              <br><br>\n          <strong>ติดต่อ-สอบถาม</strong>\n              อุทยานแห่งชาติห้วยน้ำดัง โทรศัพท์ 053-248-491, 053-263-910\n          \n              <br><br>\n          อ้างอิง : <a (click)="openmHuaiNamDang()">อุทยานแห่งชาติห้วยน้ำดัง</a>\n        \n      \n      <br>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"D:\RADAR\src\pages\tourist-winter\page_winter\North\huai-nam-dang\huai-nam-dang.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], HuaiNamDangPage);
    return HuaiNamDangPage;
}());

//# sourceMappingURL=huai-nam-dang.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoiInthanonPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DoiInthanonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DoiInthanonPage = /** @class */ (function () {
    function DoiInthanonPage(navCtrl, inAppBrowser) {
        this.navCtrl = navCtrl;
        this.inAppBrowser = inAppBrowser;
    }
    DoiInthanonPage.prototype.openUrl1 = function () {
        this.inAppBrowser.create("http://portal.dnp.go.th/");
    };
    DoiInthanonPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-doi-inthanon',template:/*ion-inline-start:"D:\RADAR\src\pages\tourist-winter\page_winter\North\doi-inthanon\doi-inthanon.html"*/'<!--\n  Generated template for the DoiInthanonPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>อุทยานแห่งชาติดอยอินทนนท์ (Doi Inthanon National Park)</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="DoiInthanon">\n\n  <ion-card>\n    <ion-card-header>\n      <h2 ion-start>อุทยานแห่งชาติดอยอินทนนท์ <p>(Doi Inthanon National Park)</p></h2>\n    </ion-card-header>\n    <ion-card-content>\n      <img src="http://beerazure.cloudapp.net:9203/images/attraction/2%20(4).jpg">\n      <br>\n      ดอยอินทนนท์ อยู่ในจังหวัดเชียงใหม่ เป็นยอดเขาที่สูงที่สุดของประเทศไทย คือสูงจากระดับน้ำทะเล 2,565 เมตร  มีสภาพภูมิประเทศและสภาพป่าที่หลากหลาย ไม่ว่าจะเป็นป่าดงดิบ ป่าสน ป่าเบญจพรรณ ส่วนสภาพภูมิอากาศนั้นมีอากาศหนาวเย็นตลอดทั้งปี โดยเฉพาะในฤดูหนาวจะมีหมอกปกคลุมเกือบทั้งวัน และในตอนเช้าตรู่อาจเกิดปรากฏการณ์น้ำค้างแข็ง ที่สร้างความฮือฮาในหมู่นักท่องเที่ยวเป็นประจำในทุกฤดูหนาว\n      <br><br>\n      <img src="http://img.tlcdn1.com/travel/2017/09/Kew-Mae-Pan_Don_Lino-Phuket_Shutterstock.com_.jpg">\n      <br>\n      ไหว้พระมหาธาตุนภเมทนีดลและพระมหาธาตุนภพลภูมิสิริ บริเวณนี้นอกจากจะมีสวนดอกไม้ที่สวยงามแล้ว ยังมีจุดชมวิวที่สามารถมองเห็นทะเลหมอกได้สวยงามอีกจุดหนึ่ง\n\n      ชมทะเลหมอกในช่วงหน้าหนาว ซึ่งบนดอยอินทนนท์นั้นจะมีจุดชมทะเลหมอกที่นักท่องเที่ยวจะได้สัมผัสกับปรากฏการณ์ทะเลหมอกซึ่งสวยงามอลังการอย่างมาก โดยจุดชมทะเลหมอกจะตั้งอยู่บริเวณหน้าเส้นทางศึกษาธรรมชาติกิ่วแม่ปาน\n      \n      ชมน้ำตก ที่ดอยอินทนนท์มีน้ำตกหลายแห่ง อย่างเช่น น้ำตกแม่กลาง น้ำตกวชิรธาร น้ำตกสิริภูมิ น้ำตกแม่ยะ ซึ่งต่างก็มีความสวยงามน่าชม\n      \n      เดินชมเส้นทางศึกษาธรรมชาติ ที่นิยมกันมากคือเส้นทางศึกษาธรรมชาติกิ่วแม่ปาน และอ่างกา<br>\n      <br><img src="http://www.allthaievent.com/images/event/9497.jpg">\n      <br>\n      นาขั้นบันได บ้านแม่กลางหลวง ช่วงหน้าฝนจะได้ชมนาขั้นบันไดสีเขียวของต้นข้าวที่เพิ่งเติบโต และเมื่อย่างเข้าหน้าหนาว นาขั้นบันไดก็จะกลายเป็นสีทองจากสีของต้นข้าวที่พร้อมเก็บเกี่ยว\n\n      ดูนก ในช่วงหน้าหนาวเป็นฤดุที่เหมาะสำหรับดูนกอย่างมาก เพราะมีทั้งนกประจำถิ่นและนกอพยพมากกว่า 380 ชนิดที่สามารถพบได้บนดอยอินทนนท์\n      \n      ดูดาว ที่หอดูดาวเฉลิมพระเกียรติฯ 7 รอบพระชนมพรรษา ซึ่งเป็นหอดูดาวแห่งชาติของประเทศไทย ตั้งอยู่บนบริเวณยอดดอยอินทนนท์ หอดูดาวแห่งนี้เป็นหอดูดาวขนาดใหญ่ที่สุดในภูมิภาคเอเชียตะวันออกเฉียงใต้\n      \n      ชมสถานีวิจัยโครงการหลวงดอยอินทนนท์ ซึ่งเป็นสถานีวิจัยดอกไม้เมืองหนาว\n      \n      ซื้อของฝากของที่ระลึก บนดอยอินทนนท์มีตลาดเล็กๆ ที่ชาวบ้านนำสินค้าท้องถิ่นมาขาย โดยเฉพาะผลไม้แปรรูปที่นักท่องเที่ยวสามารถซื้อเป็นของฝากได\n      <strong>**อุทยานฯ มีบ้านพักและสถานที่กางเต็นท์ไว้บริการ ราคา 800 - 8,000 บาท</strong>\n      <br><br>\n      <img src="http://www.xn--72c5aba9c2a3b8a2m8ae.com/wp-content/uploads/2014/10/0-DOIINTHANON-06.jpg">\n      <br><img src="https://i.ytimg.com/vi/40dKAaLuBKk/maxresdefault.jpg">\n      <br><img src="https://www.paiduaykan.com/travel/wp-content/uploads/2017/08/DSC_1126-800x534.jpg">\n      <br><img src="http://oknation.nationtv.tv/blog/home/user_data/file_data/201406/01/670051e19.jpg">\n      <br><img src="https://f.ptcdn.info/880/017/000/1397702839-DPP0293JPG-o.jpg">\n      <br><img src="https://travel.mthai.com/app/uploads/2014/10/1451604_658712037496093_214714473_n.jpg">\n      <br><img src="https://mpics.mgronline.com/pics/Images/560000010436201.JPEG">\n      <br>\n      <li><strong>ติดต่อสอบถาม</strong>\n        <ul><p>\n          - กรมอุทยานแห่งชาติ ฯ โทร.02 562 0760 , 02 561 0777 ต่อ 724, 725  (8 คู่สาย) ติดต่อเฉพาะวัน จันทร์ - ศุกร์ เวลา 08.30 - 16.30 น. หยุดวันนักขัตฤกษ์ \n          <br>- จอง online ที่ <a (click)="openUrl1()">www.dnp.go.th</a>\n          <br>- อุทยานแห่งชาติดอยอินทนนท์ โทร. 053 286 729-30 (ติดต่อยากโดยเฉพาะอย่างยิ่งในช่วงเทศกาล) หรือ 053 286 550(ตลอด 24 ชั่วโมง) และ 053 286 577 (ระหว่าง 08.00 น.-17.00)   โทรสาร. 053 286 728\n      </p></ul></li>\n\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"D:\RADAR\src\pages\tourist-winter\page_winter\North\doi-inthanon\doi-inthanon.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], DoiInthanonPage);
    return DoiInthanonPage;
}());

//# sourceMappingURL=doi-inthanon.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoiAngKhangPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DoiAngKhangPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DoiAngKhangPage = /** @class */ (function () {
    function DoiAngKhangPage(navCtrl, inAppBrowser) {
        this.navCtrl = navCtrl;
        this.inAppBrowser = inAppBrowser;
    }
    DoiAngKhangPage.prototype.openmMosaicUrl = function () {
        this.inAppBrowser.create("https://www.mosaic-collection.com/");
    };
    DoiAngKhangPage.prototype.openReferresUrl = function () {
        this.inAppBrowser.create("https://www.paiduaykan.com/76_province/north/chiangmai/angkhang.html");
    };
    DoiAngKhangPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-doi-ang-khang',template:/*ion-inline-start:"D:\RADAR\src\pages\tourist-winter\page_winter\North\doi-ang-khang\doi-ang-khang.html"*/'<!--\n  Generated template for the DoiAngKhangPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ดอยอ่างขาง (Doi Ang Khang)</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n        <h1>ดอยอ่างขาง <p>(Doi Ang Khang)</p></h1>\n    </ion-card-header>\n    <ion-card-content>\n        <img src="http://www.fotobug.net/forum/attachments/month_1401/1401182230c6bae993581e459c.jpg">\n        <br>\n        ดอยอ่างขาง อยู่ในเขตหมู่บ้านคุ้มหมู่ที่ 5 ต.แม่งอน อ.ฝาง จ.เชียงใหม่ อยู่สูงจากระดับน้ำทะเล ประมาณ 1,400 เมตร คำว่า “อ่างขาง” ในภาษาเหนือ หมายถึง อ่างรูปสี่เหลี่ยมตามลักษณะของ ดอยอ่างขางซึ่งเป็นดอยที่มีรูปร่างของหุบเขา ยาวล้อมรอบ ประมาณ 5 กิโลเมตร กว้าง 3 กิโลเมตร ตรงกลางของ อ่างขางเดิม เป็นเป็นภูเขาสูงเช่นเดียวกับบริเวณโดยรอบ แต่เนื่องจากเป็นภูเขา หินปูน เมื่อถูกน้ำฝนชะก็จะค่อยๆ ละลายเป็น โพรงแล้วยุบตัวลงกลายเป็นแอ่ง มีพื้นที่ราบ ความกว้างไม่เกิน 200 เมตร มีพื้นที่ใช้ทำการเกษตรในงานวิจัยประมาณ 1,800 ไร่ มีหมู่บ้านชาวเขาที่ทางสถานีฯให้การส่งเสริมและ พัฒนา อาชีพรวม 6 หมู่บ้าน ได้แก่ บ้านหลวง บ้านคุ้ม บ้านนอแล บ้านปางม้า บ้านป่าคา และบ้านขอบด้ง ซึ่งประกอบไปด้วย ประชากร 4 เผ่าได้แก่ ไทยใหญ่ มูเซอดำ ปะหล่อง และจีนฮ่อ อุณหภูมิเฉลี่ยตลอดปีประมาณ 17.7 องศาเซลเซียส อุณหภูมิสูงสุด 32 องศาในเดือนเมษายน และอุณหภูมิต่ำสุด 5 องศาเซเซียสในเดือนมกราคม ซึ่งหากมาเที่ยวในช่วงดังกล่าวอาจพบกับแม่คะนิ้งหรือน้ำค้างแข็งได้ \n        <br><br>\n        <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2015/01/42-DEW_1735.jpg">\n        <br>\n        <strong>สถานที่ท่องเที่ยวที่น่าสนใจบนดอยอ่างขาง </strong>\n        <br>\n        <strong>สถานีเกษตรหลวงอ่างขาง</strong> ตั้งขึ้นโดยสืบเนื่องมาจากพระบาทสมเด็จพระปรมินทรมหาภูมิพลอดุลยเดชได้เสด็จพระราชดำเนินเยี่ยมราษฎร ที่หมู่บ้าน ผักไผ่ อ.ฝาง จ.เชียงใหม่ และได้เสด็จผ่านบริเวณ ดอยอ่างขางทรงทอดพระเนตรเห็นว่าชาวเขาส่วนใหญ่ที่อาศัยอยู่บริเวณนี้ทำการปลูกฝิ่น แต่ยังยากจน ทั้งยังทำลายทรัพยากรป่าไม้ ต้นน้ำลำธารที่เป็นแหล่งสำคัญต่อระบบนิเวศน์ ซึ่งจะก่อให้เกิดความเสียหายต่อส่วนอื่น ๆ ของประเทศได้ จึงทรงมีพระราชดำริ ว่าพื้นที่นี้มีภูมิอากาศที่หนาวเย็นมีการปลูกฝิ่นมาก ไม่มีป่าไม้อยู่ เลยและสภาพพื้นที่ไม่ลาดชันนักประกอบกับพระองค์ทรงทราบว่าชาวเขาได้เงินจากฝิ่นเท่า กับที่ได้จากการปลูกท้อพื้นเมือง และทรงทราบว่าที่สถานีทดลองไม้ผลเมืองหนาวของมหาวิทยาลัยเกษตรศาสตร์ได้ทดลอง วิธีติดตาต่อกิ่งกับท้อฝรั่ง จึงสละ พระราชทรัพย์ส่วนพระองค์จำนวน 1500 บาท เพื่อซื้อที่ดินและไร่ในบริเวณดอยอ่างขางส่วนหนึ่ง จากนั้นจึงโปรดเกล้าฯ ตั้งโครงการหลวงขึ้นเป็นโครงการ ส่วนพระองค์ เมื่อ พ. ศ. 2512 โดยทรงแต่งตั้งให้หม่อมเจ้าภีศเดช รัชนี เป็นผู้สนองพระบรมราชโองการในตำแหน่งมูลนิธิโครงการหลวง ใช้เป็น สถานีวิจัยและทดลองปลูกพืชเมืองหนาวชนิด ต่าง ๆ ไม่ว่าจะเป็นไม้ผล ผักไม้ดอ เมืองหนาว เพื่อเป็นตัวอย่างแก่เกษตรกรชาวเขาในการนำพืชเหล่านี้มา เพาะปลูก ซึ่งต่อมาพระบาทสมเด็จพระปรมินทรมหาภูมิพลอดุลยเดช พระราชทานนามว่า สถานีเกษตรหลวงอ่างขาง\n        <br>\n        สวนสมเด็จ\nภายในสวนจะรวบรวมพันธุ์ไม้ประเภทฝิ่น ประดับ ดอกป๊อปปี้และไม้เมืองหนาวชนิดต่างๆ โดยจะปลูกสลับหมุนเวียนพันธุ์ไม้ทุกปี ได้แก่ กระดุมเงิน กระดุมทอง ปักษาสวรรค์ เป็นต้น \n<br><br><img src="https://www.paiduaykan.com/travel/wp-content/uploads/2017/01/DEW_6163.jpg">\n<br>\n<strong>สวนแปดสิบ</strong>\nเป็นสวนจัดกลางแจ้งจะอยู่ด้านในสถานีฯ ตรงข้ามบริเวณสโมสร ซึ่งสวนนี้ตั้งชื่อตามอายุขององค์ประธานมูลนิธิโครงการหลวง หม่อมเจ้าภีศเดช รัชนี ในวาระที่ทรงมีอายุครบ 80 ชันษา โดยจะจัดตกแต่งสวนในสไตล์อังกฤษ ด้วยพันธุ์ไม้ดอกไม้ประดับ เมืองหนาวนานาชนิด เช่น กะหล่ำประดับ เดซี ลินาเลีย ชบาอาบูติลอน ฯลฯ\n<br><br>\n      <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2015/01/39DEW_1707.jpg">\n      \n      <strong>สวนบ๊วย</strong>\nสวนบ๊วยตั้งอยู่ริมถนนก่อนถึงสโมสรอ่างขางและฝั่งตรงข้ามของโรงปลูกผัก ต้นบ๊วยจะเริ่มทิ้งใบแล้วออกดอกในเดือนพฤศจิกายน ติดผลในช่วงเดือน มกราคมแต่ละต้นมีขนาดใหญ่กิ่งก้านสาขาสวยงาม\n<br><br>\n      \n      <br>\n      <strong>โรงเรือนทดสอบพันธุ์กุหลาบตัดดอก</strong>\nภายในโรงเรือนกุหลาบท่านจะได้ชื่นชมกับกุหลาบตัดดอกสายพันธุ์จากประเทศเนเธอร์แลนด์กว่า 7 สายพันธุ์ ซึ่งจะมีสีสันสวยงามและมีกลิ่นหอมพร้อมรอ ผู้มาเยือน\n<br>\n<img src="https://www.paiduaykan.com/travel/wp-content/uploads/2016/07/10-DEW_1295.jpg">\n<br>\n<img src="https://www.paiduaykan.com/travel/wp-content/uploads/2016/07/14-DSC_7885.jpg">\n<br>\n<img src="https://www.paiduaykan.com/travel/wp-content/uploads/2016/07/11-DEW_1296.jpg">\n<br>\n<strong>เรือนดอกไม้</strong>\nเป็นโรงเรือนที่รวบรวมพันธุไม้ดอกไม้ประดับเมืองหนาวชนิดต่างๆ มากมาย อาทิเช่น บีโกเนีย รองเท้านารี พืชกิน แมลง มีมุมน้ำตกในสวนสวยซึ่งดอกไม้ ใน สวนเหล่านี้จะหมุนเวียนผลัดเปลี่ยนกันออกดอกตลอดทั้งปี นอกจากนี้ภายในบริเวณโรงเรือนจะมีจุดจำหน่ายผลผลิตของสถานีและผลิตภัณฑ์แปรรูป พร้อมมีมุมนั่งพักจิบกาแฟอีกด้วย\n<br><img src="https://www.paiduaykan.com/travel/wp-content/uploads/2016/07/15-DSC_7886.jpg">\n<br>\n<strong>ข้อมูลเพิ่มเติม !! <a (click)="openReferresUrl()">Click !!</a></strong>\n<br><br>\n<strong>การเดินทางไปดอยอ่างขาง</strong><br>\n\n<strong>1. โดยรถยนต์ส่วนตัว</strong><br><ul>\n- มาจาก จ.เชียงใหม่โดยใช้ทางหลวง 107 จนถึง อ.เชียงดาว เลี้ยวซ้ายที่แยกเมืองงายเชื่อมกับทางหลวงหมายเลข1178(1340เดิม) ขึ้นอ่างขาง ได้ตามปกติเหมือนเดิม\n- มาจากฝางหรืออำเภอไชยปราการ สามารถใช้ถนนเส้น 1249 เส้นทาง แม่งอน - หนองเต่า ที่ขึ้นจาก อ.ฝาง ได้แล้ว หลังจากมีข่าวปิดเส้นทาง\n</ul><br>\n<strong>2. รถสาธารณะ</strong><br>\n<ul>โดยรถประจำทาง\nจากจังหวัดเชียงใหม่มาลงยังปากทางขึ้นดอยอ่างขาง สามารถไปขึ้นรถได้ที่\n- คิวรถช้างเผือก มีทั้งรถตู้ (ราคา 150 บาท) และรถบัสคันใหญ่ (ราคา 85 บาท) \n-จากทางขึ้นอ่างขาง กม. 137 มีรถคิวสองแถวบริการ รับ-ส่ง นักท่องเที่ยวที่ไม่ขับรถขึ้นดอยเอง รถคิวสองแถวสีขาวปากทางอ่างขาง (วัดหาดสำราญ)\nสำหรับผู้ที่ไม่มีรถส่วนตัวและต้องการไปเที่ยวยังจุดต่างๆบนดอยอ่างขาง สามารถเหมารถสองแถวเที่ยวได้ โดยมีรถสองแถวให้บริการบริเวณหน้า สถานีหลายครั้ง สามารถเดินเข้าไปสอบถามราคานำเที่ยวได้ ราคาจะอยู่ที่ 1200 บาท up\n</ul><br><br>\n<strong>ที่พักดอยดอยอ่างข่าง</strong><br>\nปัจจุบันบ้านพักของสถานีเกษตรหลวงอ่างขาง ไม่ได้เปิดให้บริการเข้าพักแล้ว แต่ที่พักรอบสถานี รบกวนโทรสอบถามไปยังที่พักแต่ละแห่งโดยตรงว่ามีที่ใดให้บริการบ้าง แต่สำหรับพื้นที่กางเต้นท์นอกสถานีตามจุดต่างๆ ยังให้บริการตามปกติ\n<ul>\n    <strong>ที่พักใกล้สถานีเกษตรหลวงอ่างขาง</strong>\n    <ul>\n            - รีสอร์ทธรรมชาติอ่างขาง โทร 053 450 110 <a (click)="openmMosaicUrl()">https://www.mosaic-collection.com/</a><br>\n            - อ่างขางวิลล่า โทร 081 556 5892<br>\n            - บ้านพักเลาติง โทร 053 450 005 <br>\n            - บ้านพักจี๊ดจ๊าด โทร 053 450 009 <br>\n            - อ่างขางบ้านสวน โทร  053-450007  086-1818221 089-9501667  <br>\n            - อ่างขางเมาท์เท่นวิวรีสอร์ท (บ้านพักสุวรรณภูมิ) โทร 053 450 045,062 214 5298, 061 289 4121 <br>\n            - บ้านพักฉันทนา โทร 08 9952 6971 <br>\n            - บ้านพักนาหา โทร 053 450 008<br>\n            - บรรจงวิวสวย โทร 081 998 6848, 081 602 5238<br>\n\n       \n    </ul>\n    \n</ul>\n\n\n    </ion-card-content>\n  </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"D:\RADAR\src\pages\tourist-winter\page_winter\North\doi-ang-khang\doi-ang-khang.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], DoiAngKhangPage);
    return DoiAngKhangPage;
}());

//# sourceMappingURL=doi-ang-khang.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhuChiFaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PhuChiFaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PhuChiFaPage = /** @class */ (function () {
    function PhuChiFaPage(navCtrl, inAppBrowser) {
        this.navCtrl = navCtrl;
        this.inAppBrowser = inAppBrowser;
    }
    PhuChiFaPage.prototype.openURL = function () {
        this.inAppBrowser.create("https://travel.kapook.com/view675.html");
    };
    PhuChiFaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-phu-chi-fa',template:/*ion-inline-start:"D:\RADAR\src\pages\tourist-winter\page_winter\North\phu-chi-fa\phu-chi-fa.html"*/'<!--\n  Generated template for the PhuChiFaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ภูชี้ฟ้า-ผาตั้ง (Phu Chi Fa National Park)</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n        <h2>ภูชี้ฟ้า-ผาตั้ง <p>(Phu Chi Fa National Park)</p></h2>\n    </ion-card-header>\n    <ion-card-content>\n      เที่ยวภูชี้ฟ้า ยอดเขาที่สูงที่สุดในเทือกเขาดอยผาหม่น จังหวัดเชียงราย ชื่นชมท่ามธรรมชาติสุดสวย ที่ทำเอาคุณต้องตะลึงในเสน่ห์ของภูชี้ฟ้า อย่างยากที่จะถอนตัว\n      <br><br>\n      <img src="https://img.kapook.com/image/travel_2/444/O11402489-2.jpg">\n      <br>\n      ไม่ว่าจะฤดูกาลใด จังหวัดเชียงรายก็มักเป็นจุดหมายปลายทางอันดับต้น ๆ ของนักเดินทางเสมอ สถานที่ท่องเที่ยวตามดอยและอุทยานแห่งชาติต่าง ๆ ดูจะเย้ายวนเหล่าบรรดานักท่องเที่ยวมากที่สุด...ว่าไหมคะ ดังนั้นวันนี้เลยขอเอาใจนักชอบเที่ยวทั้งหลาย พาไปยลโฉม "ภูชี้ฟ้า" รับรองว่าไม่ผิดหวังอย่างแน่นอน เพราะทะเลหมอกที่ภูชี้ฟ้าชนะเลิศ ทั้งบรรยากาศและธรรมชาติที่สวยงามจับใจ ราวกับภาพวาดเชียวล่ะ..คอนเฟิร์ม !!! ว่าแล้วก็ไปท่องแดนแห่งขุนเขาและสายหมอกที่ภูชี้ฟ้ากันเลย\n\n          ภูชี้ฟ้า เป็นยอดเขาสูงที่สุดในเทือกเขาดอยผาหม่น ติดชายแดนไทย-สาธารณรัฐประชาธิปไตยประชาชนลาว อยู่ในพื้นที่เขตอำเภอเทิง จังหวัดเชียงราย ตั้งอยู่ในเขตป่าสงวนแห่งชาติ มีเอกลักษณ์ทางธรรมชาติด้วยลักษณะหน้าผาปลายยอดแหลมเป็นแนวยาว ที่ชี้ไปบนฟ้าทางฝั่งประเทศลาว จึงเป็นที่มาของชื่อเรียกว่า "ภูชี้ฟ้า" นั่นเอง\n\n          ด้านที่ติดสาธารณรัฐประชาธิปไตยประชาชนลาวนับเป็นจุดชมวิวที่สวยที่สุด ทั้งนี้กรมป่าไม้ได้มีคำสั่งให้จัดตั้ง "ภูชี้ฟ้า" เป็นวนอุทยาน เมื่อวันที่ 6 กุมภาพันธ์ 2541 ด้วยเนื้อที่ประมาณ 2,500 ไร่ สูงจากระดับน้ำทะเลตั้งแต่ 1,200 เมตร ถึง 1,628 เมตร\n          <br><br>\n          <img src="https://img.kapook.com/u/2016/sutasinee/06/winter02.jpg">\n          <br>\n          สำหรับไฮไลต์สำคัญของภูชี้ฟ้าต้องยกให้จุดชมวิวทะเลหมอกและพระอาทิตย์ขึ้นที่สวยงาม อีกทั้งทิวทัศน์ของภูเขาสลับซับซ้อนดูกว้างไกล โดยในตอนเช้าจะมีทะเลหมอกปกคลุมในหุบเขาเบื้องล่าง มีพระอาทิตย์ขึ้นผ่านพ้นทะเลหมอก ท่ามกลางทุ่งหญ้า แซมด้วยทุ่งดอกโคลงเคลง (ในช่วงฤดูฝนไปจนถึงฤดูหนาว) สวยงามราวกับภาพวาด อย่าบอกใครเชียว\n\n          และหากรอจนสายหมอกถูกความร้อนระเหยหมดแล้ว ก็ยังคงมองเห็นสายน้ำโขงไหลคดเคี้ยว ท่ามกลางป่าไม้ของฝั่งลาวที่เขียวสุดสมบูรณ์อีกด้วย มาเที่ยวภูชี้ฟ้าในช่วงเดือนธันวาคม-มกราคม เส้นทางขึ้นภูชี้ฟ้าจะผ่านป่าซากุระหรือต้นนางพญาเสือโคร่งสีชมพูสวยงามมากอีกเช่นกัน\n\n          อ๊ะ ๆ แต่ถ้าหากว่าใครคิดจะไปยลโฉมทะเลหมอกที่ภูชี้ฟ้าละก็ ขอบอกว่าต้องขยันหน่อยนะจ๊ะ เพราะที่พักจะตั้งอยู่บริเวณเชิงภู ซึ่งห่างจากจุดชมวิวประมาณ 1.5 กิโลเมตร ดังนั้นจึงควรขึ้นไปยอดภูตั้งแต่ฟ้ายังมืด ประมาณตีห้าน่าจะกำลังเหมาะ เพราะเมื่อฟ้าเริ่มสว่างจะทำให้เห็นสายหมอกค่อย ๆ ก่อตัวเป็นภาพต่าง ๆ ดูสวยงามราวกับมีช่างวาดฝีมือมาแต่งแต้ม สร้างความประทับใจมิรู้ลืม  \n          <br><br>\n          <img src="https://img.kapook.com/image/travel_2/444/O11402489-3.jpg">\n          <br>\n          นอกจากนี้เสน่ห์ของ "ภูชี้ฟ้า" ยังคงมีบรรยากาศเมืองเหนือเหมือนอุทยานและดอยอื่น ๆ มีหมู่บ้านชาวเขา บริเวณตีนภูชี้ฟ้า เป็นบรรยากาศของการท่องเที่ยวมีที่พักขนาดเล็ก ๆ หลายแห่งให้เลือกใช้บริการ ดำเนินงานโดยชาวเขาบ้างชาวเราบ้าง และที่บริเวณบ้านเช็งเม้งก่อนขึ้นสู่ตีนภูชี้ฟ้า เป็นหมู่บ้านชาวม้ง หากมาเยือนภูชี้ฟ้าในช่วงปีใหม่ยังจะได้ชมงานปีใหม่ ที่ชาวม้งจะแต่งตัวม้งครบถ้วนทั้งหญิงและชาย จุดเด่นของงานคือการโยนลูกช่วงหรือลูกหินระหว่างหนุ่ม-สาว\n\n           สำหรับภูมิอากาศบนภูเขาจะค่อนข้างเย็น แต่ฤดูกาลจะเป็นแบบมรสุมเมืองร้อน โดยได้รับอิทธิพลจากลมมรสุมตะวันตกเฉียงใต้ในช่วงฤดูฝน และลมตะวันออกเฉียงเหนือในช่วงฤดูหนาว แบ่งเป็น 3 ฤดู คือฤดูร้อนเริ่มตั้งแต่เดือนมีนาคมถึงเดือนพฤษภาคม ฤดูฝนเริ่มตั้งแต่เดือนมิถุนายนถึงเดือนตุลาคม และฤดูหนาวเริ่มตั้งแต่เดือนพฤศจิกายนถึงเดือนกุมภาพันธ์\n\n          อย่างไรก็ตาม "ภูชี้ฟ้า" เป็นดอยเดียวที่ชื่อว่า "ภู" ทั้งที่ตามจริงแล้วจะต้องชื่อว่า "ดอยชี้ฟ้า" ตามคำเรียกของทางเหนือ แต่ว่าภูชี้ฟ้าเป็นชื่อที่คนต่างถิ่นไปตั้งชื่อ จึงเรียกว่า "ภู"  ในสมัยก่อนพื้นที่ของภูชี้ฟ้าเป็นแดนผู้ก่อการร้ายคอมมิวนิสต์ มีการต่อสู้ทางอาวุธและแนวความคิดที่รุนแรงแห่งหนึ่งของประเทศไทย ครั้นเมื่อลัทธิคอมมิวนิสต์ล่มสลายไป เริ่มมีผู้คนเดินทางมาชมธรรมชาติที่นี่ และแล้วชื่อเสียงของภูชี้ฟ้าก็ขจรขจายไปอย่างรวดเร็ว\n          <br><br>\n          <strong>สถานที่ท่องเที่ยวใกล้เคียง</strong>\n          <ul>\n              - <strong>ดอยผาตั้ง</strong> อยู่ห่างจากภูชี้ฟ้าไปประมาณ 24 กิโลเมตร ในเขตบ้านผาตั้ง อำเภอเวียงแก่น เมื่อชมทะเลหมอกยามเช้าที่ภูชี้ฟ้าแล้ว ช่วงบ่ายจึงเหมาะที่จะไปเที่ยวดอยผาตั้ง สิ่งที่น่าดูของดอยผาตั้งคือทิวทัศน์ที่มองเห็นแม่น้ำโขงที่กั้นพรมแดนไทย-ลาว ทิวทัศน์สุดสายตากับป่าเขียว ๆ บริเวณทางขึ้นสู่ผาตั้งยังมีผาบ่องลักษณะเป็นช่องหินขนาดใหญ่ ขนาดคนเดินผ่านได้ มองเห็นทิวทัศน์ของลาวได้สวยงามเช่นกัน\n\n              การเดินทางไปยังดอยผาตั้ง สามารถใช้เส้นทางหลวงจังหวัดสาย 1093 และจากดอยผาตั้งยังสามารถเดินทางต่อไปยังอำเภอเชียงของ อำเภอเชียงแสน และอำเภอแม่สาย จังหวัดเชียงรายได้อีกด้วย\n              <br>\n              - <strong>ภูชี้ดาว</strong> ตั้งอยู่ในความดูแลของตำบลปอ อำเภอเวียงแก่น ตั้งอยู่ตรงกลางระหว่างภูชี้ฟ้าและดอยผาตั้ง เป็นจุดชมทะเลหมอกที่สวยไม่แพ้ภูชี้ฟ้า แล้วยิ่งถ้าวันไหนอากาศเป็นใจ ท้องฟ้าโปร่ง คุณจะมองเห็นภูชี้ฟ้าได้แบบชัดเจน ความสวยงามของภูชี้ดาวอยู่ที่ยอดสูง ซึ่งนักท่องเที่ยวจะมองเห็นทัศนียภาพความสวยงามได้แบบ 360 องศา ชนิดที่เรียกว่าไม่มีอะไรมาบดบังสายตาให้ต้องหงุดหงิด ที่สำคัญนักท่องเที่ยวยังขึ้นมาเที่ยวไม่เยอะมากนัก แน่นอนเลยว่าคุณจะสัมผัสกับธรรมชาติ ป่าเขา และทะเลหมอกได้ชัดถนัดเต็มสองตา\n              <br>\n              - <strong>ภูชี้เดือน</strong>  ภูน้องแฝดที่สามของทั้งภูชี้ฟ้าและภูชี้ดาว นักท่องเที่ยวสามารถเดินเท้าจากภูชี้ดาวได้เพียงไม่ถึงชั่วโมง โดยด้านบนของภูชี้เดือนมีลักษณะเป็นยอดปลายดอยยื่นออกไป และมีลานด้านสันปลายดอยกว้าง เหมาะสำหรับเป็นพื้นที่ใช้กางเต็นท์พักแรม สามารถสอบถามข้อมูลเพิ่มเติมได้ที่ ที่ว่าการอำเภอเวียงแก่น โทร. 0 5360 8219 หรือติดต่อ วีรยุทธ แซ่ท่อ ผู้ช่วยผู้ใหญ่บ้าน บ้านร่มฟ้าหลวง ตำบลปอ อำเภอเวียงแก่น จังหวัดเชียงราย โทร. 09 5139 0666\n          </ul>\n\n          <strong>การเดินทาง</strong> \n          <ul>\n              <strong>ทางรถยนต์</strong><br>\n\n              ภูชี้ฟ้าอยู่ห่างจากอำเภอเมือง จังหวัดเชียงราย ประมาณ 144 กิโลเมตร การเดินทางจากอำเภอเมือง จังหวัดเชียงราย ไปยังภูชี้ฟ้าได้ตามแนวเส้นทาง ดังนี้ \n    <br>\n              1. การเดินทางจากจังหวัดเชียงรายระยะทางประมาณ 108 กิโลเมตร โดยใช้เส้นทางเชียงราย - เทิง ระยะทาง 64 กิโลเมตร และจากเทิง-ปางค่า ระยะทาง 24 กิโลเมตร จากนั้นเป็นลูกรังถึงภูชี้ฟ้าระยะทาง 19 กิโลเมตร \n              <br>\n              2. ใช้เส้นทาง 1021 เทิง-เชียงคำ ระยะทาง 27 กิโลเมตร ก่อนถึงเชียงคำ 6 กิโลเมตร มีทางแยกไปวนอุทยานน้ำตกภูซาง (1093) บ้านฮวก อีก 19 กิโลเมตร แล้วเดินทางไปภูชี้ฟ้าอีก 30 กิโลเมตร แล้วเดินทางเท้าต่ออีก 1 กิโลเมตร จึงจะถึงจุดชมวิว ทางเดินเท้ามีความสูงชันมาก \n              <br><br>           \n               <strong>ทางรถโดยสาร</strong>\n               <br>  \n               จากสถานีขนส่งเชียงราย มีรถโดยสารไปยังภูชี้ฟ้าและดอยผาตั้ง รถออกเวลา 12.30 น. รายละเอียดติดต่อ บ.สหกิจ โทร 0-5371-1654\n              \n          </ul>\n          <strong>สอบถามรายละเอียด-ข้อมูลการเดินทาง</strong>\n<ul>\n    วนอุทยานภูชี้ฟ้า ไม่มีบ้านพักหรือค่ายพักแรมบริการแก่นักท่องเที่ยว หากนักท่องเที่ยวมีความประสงค์จะไปพักแรมต้องนำเต็นท์ไปกางเอง โดยทางวนอุทยานได้จัดสถานที่ไว้ให้พร้อมกับห้องสุขา ส่วนเรื่องอาหารต้องจัดเตรียมไปเอง ทั้งนี้ต้องไปติดต่อขออนุญาตใช้สถานที่กับเจ้าหน้าที่หัวหน้าวนอุทยานภูชี้ฟ้าโดยตรง\n\n    รายละเอียดสอบถามได้ที่สำนักบริหารจัดการในพื้นที่อนุรักษ์ที่ 15 จังหวัดเชียงราย โทร. 053-714914 หรือฝ่ายจัดการวนอุทยาน สำนักอุทยานแห่งชาติ กรมอุทยานแห่งชาติ สัตว์ป่าและพันธุ์พืช เขตจตุจักร กรุงเทพมหานคร 10900 โทร. 0-25614292-3 ต่อ 719\n   \n</ul>\n\n  <strong>อ้างอิง : <a (click)="openURL()">https://travel.kapook.com/view675.html</a></strong>\n          \n\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"D:\RADAR\src\pages\tourist-winter\page_winter\North\phu-chi-fa\phu-chi-fa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], PhuChiFaPage);
    return PhuChiFaPage;
}());

//# sourceMappingURL=phu-chi-fa.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PangUngPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PangUngPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PangUngPage = /** @class */ (function () {
    function PangUngPage(navCtrl, inAppBrowser) {
        this.navCtrl = navCtrl;
        this.inAppBrowser = inAppBrowser;
    }
    PangUngPage.prototype.openURL = function () {
        this.inAppBrowser.create("https://blog.traveloka.com/th/local-travel/local-travel-spots/%E0%B8%9E%E0%B8%B2%E0%B9%80%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%A7-%E0%B8%9B%E0%B8%B2%E0%B8%87%E0%B8%AD%E0%B8%B8%E0%B9%8B%E0%B8%87-%E0%B9%82%E0%B8%84%E0%B8%A3%E0%B8%87%E0%B8%81%E0%B8%B2/");
    };
    PangUngPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pang-ung',template:/*ion-inline-start:"D:\RADAR\src\pages\tourist-winter\page_winter\North\pang-ung\pang-ung.html"*/'<!--\n  Generated template for the PangUngPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ปางอุ๋ง (PangUng)</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      <h2>ปางอุ๋ง<p>(PangUng)</p></h2>\n    </ion-card-header>\n    <ion-card-content>\n      <img src="https://blog.traveloka.com/source/uploads/sites/5/2017/10/Cover.jpg"><br>\n        หนาวนี้ไปไหนดี เราบอกเลยว่า ขึ้นเหนือหน้าหนาวนี่ล่ะดีที่สุด เพราะการันตีว่าจะได้ฟินกับอากาศเย็นๆ และบรรยากาศแบบภูเขาสวยๆ อย่างแน่นอน ใครยังลังเล คิดไม่ออกว่าจะไปไหนดี ลองไปสวิตเซอร์แลนด์กันดีกว่า แต่อย่าเพิ่งตกอกตกใจ กังวลเรื่องค่าใช้จ่าย เพราะเราจะพาคุณไป ปางอุ๋ง หรือโครงการพระราชดำริปางตอง 2 สวิตเซอร์แลนด์เมืองไทยใกล้ๆ นี่เอง ถึงใกล้แต่ก็รับรองเลยว่าสวยงามและโรแมนติกไม่แพ้ของจริงเลยล่ะ\n        <br><br>\n        <img src="https://blog.traveloka.com/th/wp-content/uploads/sites/5/2017/10/Pang-Ung-1.jpg">\n        <br>\n        หลายคนอาจจะคุ้นชื่อ ปางอุ๋ง แต่ไม่คุ้นชื่อโครงการพระราชดำริปางตอง 2 แต่ที่จริงแล้วก็คือสถานที่เดียวกันนั่นเอง เพราะปางอุ๋ง มีชื่อเรียกเต็มๆ ว่าโครงการพระราชดำริปางตอง 2 ตั้งอยู่ที่บ้านรวมไทย ตำบลหมอจำแป่ ห่างจากตัวเมืองแม่ฮ่องสอนประมาณ 44 กิโลเมตรโครงการนี้เกิดขึ้นจากพระราชดำริของพระบาทสมเด็จพระปรมินทรมหาภูมิพลอดุลยเดช โดยพระองค์มีพระประสงค์จะฟื้นฟูสภาพป่าและระบบนิเวศบริเวณอ่างเก็บน้ำป่าตองและฝางปางอุ๋ง เพราะในอดีตสถานที่แห่งนี้ถูกบุกรุกพื้นที่เพื่อตัดไม้ทำลายป่ามาเป็นเวลานาน เมื่อสภาพป่าและระบบนิเวศกลับมาสมบูรณ์อีกครั้ง ปางอุ๋งก็ได้กลายมาเป็นสถานที่ท่องเที่ยวแหล่งสำคัญของแม่ฮ่องสอน\n        <br>\n        <img src="https://blog.traveloka.com/th/wp-content/uploads/sites/5/2017/10/Pang-Ung-2.jpg">\n        <br>\n        <img src="https://blog.traveloka.com/th/wp-content/uploads/sites/5/2017/10/Pang-Ung-3.jpg">\n        <br>\n        ปางอุ๋ง มีสภาพภูมิประเทศเป็นทิวเขาสูงสลับซับซ้อน ภูมิทัศน์ที่เป็นไฮไลท์จนถูกขนานนามว่าสวิตเซอร์แลนด์เมืองไทยก็คือ อ่างเก็บน้ำหรือทะเลสาบตรงกลางที่ล้อมรอบไปด้วยป่าสนสองใบ สนสามใบและดอกไม้เมืองหนาว ช่วงเช้าๆ จะเห็นหมอกหนาลอยอยู่เรี่ยผืนน้ำ มีหงส์ขาวและหงส์ดำเป็นฉากหลัง อากาศเย็นสบาย และบรรยากาศโรแมนติกอย่าบอกใคร\n        <br><br>\n        <img src="https://blog.traveloka.com/th/wp-content/uploads/sites/5/2017/10/Pang-Ung-4.jpg">\n        <br>\n        <img src="https://blog.traveloka.com/th/wp-content/uploads/sites/5/2017/10/Pang-Ung-5.jpg">\n        <br>\n        <img src="https://blog.traveloka.com/th/wp-content/uploads/sites/5/2017/10/Pang-Ung-6.jpg">\n        <br><br>\n        กิจกรรมที่นักท่องเที่ยวนิยมทำที่ปางอุ๋งก็คือการล่องแพชมวิวและบรรยากาศโดยรอบของปางอุ๋ง ไปเยี่ยมชมสวนปางอุ๋งของโครงการพระราชดำริที่มีจัดแสดงพืชพรรณต่างๆ ที่กลมกลืนกับสภาพภูมิประเทศบนที่สูง เป็นยาแผนไทยและให้ประโยชน์ทางด้านอาหาร เช่น อะโวคาโด บ๊วย สาลี่ พลับ นอกจากนี้ยังมีโซนสวนไม้ดอกไม้ประดับเมืองหนาว เช่น ไฮเดรนเยีย พวงแสด และกุหลาบไว้ให้ถ่ายรูปสวยๆ ด้วย\n        <br>\n        <img src="https://blog.traveloka.com/th/wp-content/uploads/sites/5/2017/10/Pang-Ung-7.jpg">\n        <br><br>\n        การเข้าชมปางอุ๋ง สำหรับคนที่ไม่ได้พักค้างแรม จะต้องนำรถไปจอดไว้ที่โรงเรียนบ้านนาป่าแปกแล้วนั่งรถสองแถวของชุมชนเข้าไปเท่านั้น บัตรโดยสาร 50 บาท เปิดให้บริการเวลา 04.00 – 18.00 น. สำหรับใครที่มีเวลาแล้วอยากจะพักค้างคืนสักคืนสองคืนเพื่อเก็บเกี่ยวบรรยากาศที่สวยงามของปางอุ๋งให้เต็มที่ก็สามารถทำได้ ขอบอกเลยว่าบรรยากาศยามค่ำคืนของที่นี่เงียบสงบและสวยงามอย่าบอกใคร โดยเฉพาะใครที่ชอบดูดาว รับรองว่าจะได้เห็นดาวเต็มท้องฟ้าแบบสมใจอย่างแน่นอน แต่ถึงแม้จะได้บัตรพักค้างคืนแต่ก็สามารถนำรถเข้าออกพื้นที่ได้ในช่วงเวลา 9.00 – 18.00 น.เท่านั้น\n        <br>\n        <img src="https://blog.traveloka.com/th/wp-content/uploads/sites/5/2017/10/Pang-Ung-8.jpg"><br>\n        <img src="https://blog.traveloka.com/th/wp-content/uploads/sites/5/2017/10/Pang-Ung-9.jpg"><br>\n        <img src="https://blog.traveloka.com/th/wp-content/uploads/sites/5/2017/10/Pang-Ung-10.jpg"><br><br>\n        <strong>ที่พักปางอุ๋ง</strong>แบ่งออกเป็น 2 ส่วนคือ ส่วนของโครงการและส่วนของบ้านพักร่วมโครงการในหมู่บ้านที่บริหารจัดการโดยชาวบ้านรวมไทย<br>\n        <ul>\n          - <strong>ส่วนของโครงการพระราชดำริปางตอง 2</strong> จะแบ่งออกเป็นบ้านพักจำนวน 5 หลัง และมีพื้นที่สำหรับกางเต็นท์จำกัดที่ 50 เต็นท์ต่อวัน การจองที่พักในส่วนนี้จะต้องทำการจองล่วงหน้าไว้นานๆ เพราะที่พักจะเต็มเร็วมาก โดยสามารถโทรสอบถามราคาและจองได้ที่เจ้าหน้าที่โครงการ เบอร์โทรศัพท์  080 847 8456 และ 087 661 8594 \n          <br>\n          - <strong>บ้านพักร่วมโครงการในหมู่บ้าน</strong> จะมีบ้านพักประมาณ 69 หลัง และพื้นที่กางเต็นท์จำกัดที่ 100 เต็นท์ต่อวัน ถึงแม้จะมีจำนวนที่พักเยอะกว่าส่วนของโครงการแต่ก็เต็มเร็วเช่นกัน ดังนั้นควรต้องจองล่วงหน้าเนิ่นๆ สามารถโทรสอบถามราคาและจองได้ที่ ศูนย์ศิลปาชีพจังหวัดแม่ฮ่องสอน เบอร์โทรศัพท์ 053-611244\n          <br>\n        </ul>\n\n        <strong>การเดินทาง</strong>\n        <ul>จากตัวเมืองแม่ฮ่องสอน ใช้เส้นทางแม่ฮ่องสอน – ปาย ทางหลวงหมายเลข 1095 ถึงกิโลเมตรที่ 10 แล้วเลี้ยวซ้ายเข้าไปทางบ้านหมอกจ่าแป จากบ้านหมอกจ่าแปจะมีป้ายบอกทางไปจนถึงบ้านรวมไทย ใช้เวลาประมาณ 1 ชั่วโมงจากตัวเมืองแม่ฮ่องสอน\n        </ul>\n\n        <strong>อ้างอิง : <a (click)="openURL()">ปางอุ๋ง</a></strong>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"D:\RADAR\src\pages\tourist-winter\page_winter\North\pang-ung\pang-ung.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], PangUngPage);
    return PangUngPage;
}());

//# sourceMappingURL=pang-ung.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PaiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaiPage = /** @class */ (function () {
    function PaiPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    PaiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pai',template:/*ion-inline-start:"D:\RADAR\src\pages\tourist-winter\page_winter\North\pai\pai.html"*/'<!--\n  Generated template for the PaiPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Pai</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\RADAR\src\pages\tourist-winter\page_winter\North\pai\pai.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], PaiPage);
    return PaiPage;
}());

//# sourceMappingURL=pai.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonJungPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MonJungPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MonJungPage = /** @class */ (function () {
    function MonJungPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MonJungPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mon-jung',template:/*ion-inline-start:"D:\RADAR\src\pages\tourist-winter\page_winter\North\mon-jung\mon-jung.html"*/'<!--\n  Generated template for the MonJungPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>MonJung</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\RADAR\src\pages\tourist-winter\page_winter\North\mon-jung\mon-jung.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], MonJungPage);
    return MonJungPage;
}());

//# sourceMappingURL=mon-jung.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonChamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MonChamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MonChamPage = /** @class */ (function () {
    function MonChamPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MonChamPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mon-cham',template:/*ion-inline-start:"D:\RADAR\src\pages\tourist-winter\page_winter\North\mon-cham\mon-cham.html"*/'<!--\n  Generated template for the MonChamPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>MonCham</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\RADAR\src\pages\tourist-winter\page_winter\North\mon-cham\mon-cham.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], MonChamPage);
    return MonChamPage;
}());

//# sourceMappingURL=mon-cham.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SinghaParkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SinghaParkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SinghaParkPage = /** @class */ (function () {
    function SinghaParkPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SinghaParkPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-singha-park',template:/*ion-inline-start:"D:\RADAR\src\pages\tourist-winter\page_winter\North\singha-park\singha-park.html"*/'<!--\n  Generated template for the SinghaParkPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>SinghaPark</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\RADAR\src\pages\tourist-winter\page_winter\North\singha-park\singha-park.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], SinghaParkPage);
    return SinghaParkPage;
}());

//# sourceMappingURL=singha-park.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoldenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the GoldenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GoldenPage = /** @class */ (function () {
    function GoldenPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    GoldenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-golden',template:/*ion-inline-start:"D:\RADAR\src\pages\tourist-winter\page_winter\North\golden\golden.html"*/'<!--\n  Generated template for the GoldenPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Golden</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\RADAR\src\pages\tourist-winter\page_winter\North\golden\golden.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], GoldenPage);
    return GoldenPage;
}());

//# sourceMappingURL=golden.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoiPhaHomPokPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DoiPhaHomPokPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DoiPhaHomPokPage = /** @class */ (function () {
    function DoiPhaHomPokPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    DoiPhaHomPokPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DoiPhaHomPokPage');
    };
    DoiPhaHomPokPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-doi-pha-hom-pok',template:/*ion-inline-start:"D:\RADAR\src\pages\tourist-winter\page_winter\North\doi-pha-hom-pok\doi-pha-hom-pok.html"*/'<!--\n  Generated template for the DoiPhaHomPokPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Doi-Pha-Hom-Pok</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\RADAR\src\pages\tourist-winter\page_winter\North\doi-pha-hom-pok\doi-pha-hom-pok.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], DoiPhaHomPokPage);
    return DoiPhaHomPokPage;
}());

//# sourceMappingURL=doi-pha-hom-pok.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoiWaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DoiWaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DoiWaoPage = /** @class */ (function () {
    function DoiWaoPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    DoiWaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-doi-wao',template:/*ion-inline-start:"D:\RADAR\src\pages\tourist-winter\page_winter\North\doi-wao\doi-wao.html"*/'<!--\n  Generated template for the DoiWaoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Doi-WAO</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\RADAR\src\pages\tourist-winter\page_winter\North\doi-wao\doi-wao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], DoiWaoPage);
    return DoiWaoPage;
}());

//# sourceMappingURL=doi-wao.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoiChiangDaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DoiChiangDaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DoiChiangDaoPage = /** @class */ (function () {
    function DoiChiangDaoPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    DoiChiangDaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-doi-chiang-dao',template:/*ion-inline-start:"D:\RADAR\src\pages\tourist-winter\page_winter\North\doi-chiang-dao\doi-chiang-dao.html"*/'<!--\n  Generated template for the DoiChiangDaoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Doi-Chiang-Dao</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\RADAR\src\pages\tourist-winter\page_winter\North\doi-chiang-dao\doi-chiang-dao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], DoiChiangDaoPage);
    return DoiChiangDaoPage;
}());

//# sourceMappingURL=doi-chiang-dao.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KhaoKhoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the KhaoKhoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var KhaoKhoPage = /** @class */ (function () {
    function KhaoKhoPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    KhaoKhoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-khao-kho',template:/*ion-inline-start:"D:\RADAR\src\pages\tourist-winter\page_winter\Central\khao-kho\khao-kho.html"*/'<!--\n  Generated template for the KhaoKhoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>เขาค้อ (Khao Kho)</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      <h2>เขาค้อ <p>(Khao Kho)</p></h2>\n    </ion-card-header>\n    <ion-card-content>\n      <img src="https://img.kapook.com/image/travel_2/333/E10032597-21.jpg"><br>\n      เคยมีคนบอกไว้ว่า... หากเราคิดจะไปท่องเที่ยวที่ไหนสักที่ ก็ต้องเช็คสภาพภูมิอากาศให้ดีเสียก่อน ว่าเป็นฤดูกาลที่เหมาะแก่การจะไปท่องเที่ยวที่แห่งนั้นได้หรือไม่ เพราะสถานที่ท่องเที่ยวบางที่ก็ไม่เหมาะจะไปเที่ยวในฤดูร้อน แหล่งท่องเที่ยวบางแห่งก็อาจไม่เหมาะแก่การเดินทางไปท่องเที่ยวในฤดูฝนหรือฤดูหนาว (ถูกต้อง...เพราะฉะนั้นจึงต้องเช็คให้ดีๆ) เอ... แต่ถ้าวันว่างของเรามันไม่เลือกฤดูกาลล่ะ จะไปเที่ยวไหนกันดี...?   \n      <br><br>\n      <img src="https://img.kapook.com/image/travel_2/333/E11275455-73.jpg"><br>\n      <img src="https://img.kapook.com/image/travel_2/333/E11275455-25.jpg"><br>\n      แทน แท่น แท้น... วันนี้เรามีสถานที่ท่องเที่ยวที่สามารถเดินทางไปท่องเที่ยวได้ทุกฤดูกาลมาฝาก นั่นก็คือ... "เขาค้อ" แหล่งท่องเที่ยวที่ได้รับความนิยมมากที่สุดแห่งหนึ่งในจังหวัดเพชรบูรณ์ เหตุที่เรียกกันว่า "เขาค้อ" เพราะป่าบริเวณนี้เดิมมีต้นค้อซึ่งเป็นไม้ตระกูลปาล์มขึ้นอยู่มาก สำหรับสภาพภูมิอากาศบนเขาค้อนั้นจะเย็นสบายสดชื่นตลอดทั้งปีแม้ในฤดูร้อน และค่อนข้างเย็นจัดในฤดูหนาว อุณหภูมิเฉลี่ยตลอดทั้งปีอยู่ที่ประมาณ 18 - 25 องศาเซลเซียสเท่านั้น (ว้าว...) นอกจากนี้ ยังมีทัศนียภาพที่สวยงาม และเป็นแหล่งชมทะเลหมอกที่สวยมากอีกด้วย \n      <br><br>\n      <img src="https://img.kapook.com/image/travel_2/333/E11275455-67.jpg"><br>\n      อย่างไรก็ตาม บนเขาค้อมีสถานที่ท่องเที่ยวน่าสนใจมากมาย ไม่ว่าจะเป็น "อนุสาวรีย์จีนฮ่อ" อนุสาวรีย์ทหารอาสาจากหน่วยรบกองพลที่ 93 ซึ่งมาช่วยรบในพื้นที่เขาค้อ และเสียชีวิตในการสู้รบ ตั้งอยู่เลยกิโลเมตรที่ 23 ของทางหลวงหมายเลข 2196 ไปเล็กน้อย \n      <br><br>\n      <img src="https://img.kapook.com/image/travel_2/333/E11275455-88.jpg"><br>\n      <img src="https://img.kapook.com/image/travel_2/333/E11275455-60.jpg"><br>\n      <strong>"ฐานอิทธิ" (พิพิธภัณฑ์อาวุธ)</strong> อยู่เลยกิโลเมตรที่ 28 ทางหลวงหมายเลข 2196 (ไปเล็กน้อย แล้วแยกขวาเข้าทางหลวงหมายเลข 2323 ไปประมาณ 3 กิโลเมตร) เป็นจุดหนึ่งที่เห็นทิวทัศน์สวยงามและเคยเป็นฐานสำคัญทางยุทธศาสตร์ในอดีต ปัจจุบันจัดเป็นพิพิธภัณฑ์อาวุธ จัดแสดงปืนใหญ่ ซากรถถัง และอาวุธที่ใช้สู้รบกันบนเขาค้อ มีห้องบรรยายสรุปแก่ผู้เข้าชมเป็นหมู่คณะด้วย เปิดให้เข้าชมทุกวัน ค่าเข้าชมคนละ 10 บาท\n      <br><br>\n      <img src="https://img.kapook.com/image/travel_2/333/E11275455-75.jpg"><br>\n      <strong>"อนุสรณ์สถานผู้เสียสละเขาค้อ"</strong> อยู่บนยอดเขาสูงสุดของเขาค้อ อยู่เลยฐานอิทธิไปอีก 1 กิโลเมตร สร้างขึ้นเพื่อเทิดทูนวีรกรรมของพลเรือน ทหาร ตำรวจ ทหาร ผู้พลีชีพในการสู้รบเพื่อปกป้องพื้นที่ในเขตรอยต่อ 3 จังหวัด คือ พิษณุโลก เพชรบูรณ์ และเลย ตั้งแต่ปี พ.ศ. 2511 - 2525 โดยสร้างด้วยหินอ่อนเป็นรูปสามเหลี่ยมสูง 24 เมตร หมายถึง การปฏิบัติการร่วมกันระหว่างพลเรือน ตำรวจ ทหารในปี พ.ศ. 2524 ผนังภายในบันทึกประวัติอนุสรณ์สถานและรายชื่อวีรชนผู้เสียสละไว้ด้วย ส่วนการเดินทางให้ ใช้เส้นทางหลวงหมายเลข 2196 ไปจนถึงกิโลเมตรที่ 28 ไปเล็กน้อย มีทางแยกขวาไปเส้นทางหมายเลข 2323 ประมาณ 3 กิโลเมตร รวมระยะทางประมาณ 31 กิโลเมตร\n      <strong>"พระบรมธาตุเจดีย์กาญจนาภิเษก"</strong> ตั้งอยู่บนยอดเขาค้อ ติดกับสำนักสงฆ์วิชมัยปุญญาราม ยอดเจดีย์บรรจุพระบรมสารีริกธาตุที่อัญเชิญมาจากประเทศศรีลังกา เจดีย์แห่งนี้ชาวเพชรบูรณ์สร้างขึ้นเพื่อถวายเป็นพระราชกุศลแด่พระบาทสมเด็จพระเจ้าอยู่หัว เนื่องในวโรกาสทรงครองราชย์ครบ 50 ปี ในวันสำคัญทางศาสนา เช่น วันมาฆบูชา จะมีประชาชนเดินทางมาประกอบพิธีกรรมทางศาสนา ทำพิธีเวียนเทียนเป็นประจำ \n      <br><br>\n      <img src="https://img.kapook.com/image/travel_2/333/E11275455-86.jpg"><br>\n      <img src="https://img.kapook.com/image/travel_2/333/E10032597-63.jpg"><br>\n      <strong>"สมุดนานาชาติเขาค้อ"</strong>ตั้งอยู่ที่เดียวกับเจดีย์พระบรมสารีริกธาตุ เป็นหอสมุดขนาดใหญ่ออกแบบเป็นรูปเพชรคว่ำ สร้างด้วยกระจกสะท้อนแสง ภายในเก็บรักษาหนังสือทั้งภาษาไทย และภาษาต่างประเทศ ในเดือนธันวาคมของทุกปีจะมีการจัดงาน "วันนัดพบเอกอัครราชทูต ณ เขาค้อ" โดยเชิญเอกอัครราชทูตจากประเทศต่างๆ มาร่วมชมการแสดงศิลปวัฒนธรรมของจังหวัด\n      <br>\n      <strong>"เจดีย์พระบรมสารีริกธาตุเขาค้อ" </strong>ตั้งอยู่บนยอดเขาติดกับหอสมุดนานาชาติเขาค้อ บ้านกองเนียม หมู่ที่ 4 ตำบลเขาค้อ ที่ยอดเจดีย์บรรจุพระบรมสารีริกธาตุที่อัญเชิญมาจากประเทศศรีลังกา เจดีย์แห่งนี้ชาวเพชรบูรณ์สร้างขึ้นเพื่อถวายเป็นพระราชกุศลพระบาทสมเด็จพระเจ้าอยู่หัว ในวโรกาสทรงครองราชย์ 50 ปี และเป็นที่สักการะบูชาของพุทธศาสนิกชน ในวันสำคัญทางศาสนาจะมีประชาชนและนักท่องเที่ยวร่วมกันประกอบพิธีทางศาสนา เช่น พิธีเวียนเทียน\n      <br><br>\n      <img src="https://img.kapook.com/image/travel_2/333/E10032597-6.jpg"><br>\n      <strong>"พระตำหนักเขาค้อ"</strong> ตั้งอยู่บนเขาย่า พระตำหนักนี้สร้างขึ้นเพื่อน้อมเกล้าฯ ถวายแด่องค์สมเด็จพระเจ้าอยู่หัว ในวโรกาสที่เสด็จพระราชดำเนินทอดพระเนตรงานโครงการในพระราชดำริ และทรงตรวจเยี่ยมราษฎรอำเภอเขาค้อและอำเภอใกล้เคียง เป็นอาคารคอนกรีตครึ่งวงกลมมีทั้งหมด 15 ห้อง รูปทรงแปลกตาไปจากพระตำหนักอื่น สามารถขออนุญาตเจ้าหน้าที่เข้าชมบริเวณโดยรอบพระตำหนักได้ การเดินทาง ใช้เส้นทางหลวงหมายเลข 2196 พอถึงประมาณกิโลเมตรที่ 29 ให้ไปอีกประมาณ 4 กิโลเมตร มีทางแยกด้านซ้ายไปพระตำหนัก ทางขึ้นเขาค้อค่อนข้างสูงชัน รถยนต์ควรมีสภาพดี และกำลังเครื่องยนต์สูง เพราะฉะนั้นควรเช็คสภาพรถยนต์ก่อนทุกครั้ง\n      <br><br>\n      <img src="https://img.kapook.com/image/travel_2/333/E10032597-64.jpg"><br>\n      <img src="https://img.kapook.com/image/travel_2/333/E11275455-34.jpg"><br>\n      <strong>การเดินทาง</strong><br>\n      <ul><strong>จากเพชรบูรณ์ - เขาค้อ</strong>\n      \n                ใช้เส้นทางหลวงหมาย เลข 21 (สระบุรี - หล่มสัก) ถึงสามยกนางั่ว ระยะทางประมาณ 13 กิโลเมตร เลี้ยวซ้ายไปตาม ทางหลวงหมายเลข 2258 จะผ่านเนินมหัศจรรย์ จุดชมวิวตลาดพืชผลทางการเกษตร จนถึงสี่แยกสะเดาะพง ถ้าตรงไปจะเห็นทางแยกเข้าพระตำหนักเขาค้อ แต่ถ้าเลี้ยวขวา ไปตามทางหลวง หมายเลข 2196 จะผ่านแยกทางขวา เข้าหอสมุดนานาชาติเขาค้อ ตรงไปถึงสามแยกรื่นฤดี แล้วเลี้ยวซ้าย ผ่านพิพิธภัณฑ์อาวุธ และอนุสรณ์ผู้เสียสละเขาค้อ เมื่อตรงไปจะผ่านที่ว่าการอำเภอเขาค้อ หน่วยราชการต่างๆ และผ่านพระบรมธาตุเจดีย์กาญจนาภิเษก และไร่ บี.เอ็น.\n              </ul>\n      <strong>รถสองแถว</strong>\n      <ul><strong>จาก อ.เมือง - เขาค้อ</strong> นั่งรถสองแถวสายเพชรบูรณ์ - เขาค้อ ค่ารถโดยสารประมาณ 50 - 60 บาท จะผ่านเนินมหัศจรรย์ จุดชมวิวตลาดพืชผลทางการเกษตร สามแยกรื่นฤดี หอสมุดนานาชาติเขาค้อ ไปสุดสายที่ตลาดพัฒนาเยื้องที่ว่าการอำเภอเขาค้อ หากต้องการเที่ยวทั่วบริเวณเขาค้อ ควรเหมารถสองแถวเที่ยวจะสะดวกกว่า ราคาเหมาประมาณ 700 - 800 บาท/วัน<br>\n      <br>\n      <strong>จาก อ.หล่มสัก - เขาค้อ</strong> นั่งรถสองแถวสายหล่มสัก - แคมป์สน ไปลงที่สามแยกแคมป์สน ค่ารถประมาณ 35 - 40 บาท แล้วต่อรถสองแถวสายแคมป์สน - เขาค้อ ค่ารถประมาณ 10 - 20 บาท รถจะผ่านไร่ บี.เอ็น. ไปสุดสายที่ว่าการอำเภอเขาค้อ หากต้องการเที่ยวทั่วบริเวณเขาค้อ ควรเหมารถสองแถวเที่ยวจะสะดวกกว่า ราคาเหมาประมาณ 700 - 800 บาท/วัน</ul>\n      <strong>ที่พักบนเขาค้อ</strong><br><ul>\n      สำหรับนักท่องเที่ยวที่ต้องการพักบนเขาค้อนั้น ที่นี่มีรีสอร์ตที่พักให้เลือกเป็นจำนวนมาก ส่วนใหญ่จะอยู่บริเวณตำบลทุ่งสมอและแคมป์สน ห่างจากสถานที่ท่องเที่ยวบนเขาค้อประมาณ 30 กิโลเมตร ที่พักที่อยู่ใกล้ที่สุดได้แก่ บ้านพักทหารม้า กิโลเมตรที่ 28 ทางหลวงสาย 2196 กองพลทหารม้าที่ 28 และเรือนพักผู้ติดตามอยู่ใกล้กับพระตำหนักเขาค้อและเขาย่า นอกจากนี้ ยังมีรีสอร์ทต่างๆ ที่ตั้งเรียงรายอยู่ตามเส้นทางขึ้นเขาค้ออีกด้วย\n    </ul>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"D:\RADAR\src\pages\tourist-winter\page_winter\Central\khao-kho\khao-kho.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], KhaoKhoPage);
    return KhaoKhoPage;
}());

//# sourceMappingURL=khao-kho.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhuSoiDaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PhuSoiDaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PhuSoiDaoPage = /** @class */ (function () {
    function PhuSoiDaoPage(navCtrl, inAppBrowser) {
        this.navCtrl = navCtrl;
        this.inAppBrowser = inAppBrowser;
    }
    PhuSoiDaoPage.prototype.openURL = function () {
        this.inAppBrowser.create("http://nps.dnp.go.th/");
    };
    PhuSoiDaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-phu-soi-dao',template:/*ion-inline-start:"D:\RADAR\src\pages\tourist-winter\page_winter\Central\phu-soi-dao\phu-soi-dao.html"*/'<!--\n  Generated template for the PhuSoiDaoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>อุทยานแห่งชาติภูสอยดาว (Phu Soi Dao National Park)</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      <h1>อุทยานแห่งชาติภูสอยดาว<p>(Phu Soi Dao National Park)</p></h1>\n    </ion-card-header>\n    <ion-card-content>\n      <img src="https://f.ptcdn.info/248/052/000/oslovx7yhr1mcSnLgSE-o.jpg">\n      <br>\n      อุทยานแห่งชาติภูสอยดาว หรือที่เรียกกันสั้น ๆ ว่า ภูสอยดาว ผืนป่าธรรมชาติที่มีความสมบูรณ์สวยงามที่สุดแห่งหนึ่ง มีทุ่งดอกไม้สีม่วงหรือดอกหงอนนาค และดอกไม้ป่าสวย ๆ ให้ชมมากมาย\n\n          อุทยานแห่งชาติภูสอยดาว มีพื้นที่ครอบคลุมอยู่ในท้องที่ป่าสงวนแห่งชาติป่าน้ำปาด ท้องที่ตำบลม่วงเจ็ดต้น ตำบลนาขุม ตำบลบ้านโคก อำเภอบ้านโคก อำเภอห้วยมุ่น อำเภอน้ำปาด จังหวัดอุตรดิตถ์ ตำบลบ่อภาค อำเภอชาติตระการ จังหวัดพิษณุโลก เป็นพื้นที่ที่มีสภาพป่าค่อนข้างสมบูรณ์ปกคลุมไปด้วยป่าธรรมชาติที่สวยงาม เป็นแหล่งต้นน้ำลำธาร มีเนื้อที่ประมาณ 212,633 ไร่ หรือ 340.21 ตารางกิโลเมตร\n\n\n          อุทยานแห่งชาติภูสอยดาว มีจุดเด่นที่น่าสนใจและเป็นที่ดึงดูดใจของนักท่องเที่ยว ได้แก่ น้ำตกภูสอยดาว เป็นน้ำตก 5 ชั้น มีเนื้อที่กว้างประมาณ 1,000 ไร่ มีความสวยงามมาก มีถนนลาดยาง เข้าถึงพื้นที่ทำให้สะดวกสบายในการเดินทางพักผ่อนหย่อนใจ \n          <br><br>\n          <img src="https://s.isanook.com/tr/0/ud/281/1405357/20728054_2035177763376817_825.jpg">\n          <br>\n          โดยมีลักษณะภูมิประเทศเป็นเทือกเขาสลับซับซ้อนตั้งแต่ทิศเหนือจดทิศใต้ เป็นเทือกเขากั้นพรมแดนระหว่างประเทศไทย กับสาธารณรัฐประชาธิปไตยประชาชนลาว มีความสูงจากระดับน้ำทะเลตั้งแต่ 500-1,800 เมตร อากาศเย็นสบายตลอดปี ฤดูฝนเริ่มตั้งแต่เดือนพฤษภาคมถึงเดือนตุลาคม ฤดูหนาวเริ่มตั้งแต่เดือนพฤศจิกายนถึงเดือนกุมภาพันธ์ ฤดูร้อนเริ่มตั้งแต่เดือนเมษายนถึงเดือนมิถุนายน\n          <br><br>\n          <strong>แหล่งท่องเที่ยวที่น่าสนใจภายในอุทยานแห่งชาติภูสอยดาว</strong>\n          <img src="https://f.ptcdn.info/510/025/000/1415843791-R61Agfavis-o.jpg">\n          <br>\n          เป็นพื้นที่ป่าธรรมชาติ มีพื้นที่ประมาณ 1,000 กว่าไร่ เป็นที่ราบบนเทือกเขาภูสอยดาว ตั้งอยู่สูงจากระดับน้ำทะเลประมาณ 1,633 เมตร สภาพพื้นที่ของลานสนสามใบจะเป็นเนินสูงต่ำสลับกันไป เป็นป่าสนสามใบ พืชชั้นล่างเป็นทุ่งหญ้ากว้างใหญ่ ช่วงฤดูฝนเดือนสิงหาคมถึงเดือนกันยายนของทุกปี กลางทุ่งหญ้ามีดอกไม้ดินชูช่อแย่งกันออกดอกเป็นกลุ่มหนาแน่น เช่น ดอกหงอนนาคจะมีดอกสีม่วง ดอกสร้อยสุวรรณาจะมีดอกสีเหลือง และดอกหญ้ารากหอมจะมีดอกสีม่วงเข้มสวยงามมาก \n          <br><br>\n          <img src="https://f.tpkcdn.com/review-source/8b82eaea-01db-8ac1-5c44-57b1e47d2a80.jpg">\n          <br>\n          ฤดูหนาวจะมีอุณหภูมิระหว่าง 1-5 องศาเซลเซียส มีดอกกระดุมเงิน, กล้วยไม้รองเท้านารีอินทนนท์ ,ใบเมเปิล ซึ่งจะเปลี่ยนเป็นสีแดงสวยงามมาก ซึ่งการเดินทางไปเที่ยวลานสนสามใบภูสอยดาว ต้องเดินทางเท้าจากน้ำตกภูสอยดาวริมเส้นทางหลวงแผ่นดินหมายเลข 1268 ขึ้นสู่ยอดภูสอยดาวระยะทางประมาณ 6.5 กิโลเมตร ใช้เวลาเดินเท้าประมาณ 4-6 ชั่วโมง โดยระหว่างเดินเท้าขึ้นสู่ลานสนสามใบภูสอยดาวจะพบสภาพป่าที่สมบูรณ์และสวยงามมาก ยอดสูงสุดของภูสอยดาวสูงจากระดับน้ำทะเล 2,102 เมตร ซึ่งสูงเป็นอันดับ 4 ของประเทศไทย\n          <strong><br>\n          ทั้งนี้อุทยานแห่งชาติเปิดให้ขึ้นลานสนภูสอยดาว ตั้งแต่เวลา 08.00-14.00 น. ของทุก และในช่วงตั้งแต่วันที่ 15 มกราคม-31 มิถุนายนของทุกปี อุทยานแห่งชาติปิดการพักแรมบนลานสนภูสอยดาว\n        </strong><br><br>\n        <strong> น้ำตกภูสอยดาว </strong><br>\n        ตั้งอยู่ในท้องที่ตำบลห้วยมุ่น อำเภอน้ำปาด จังหวัดอุตรดิตถ์ เป็นน้ำตกขนาดกลางในลำห้วยน้ำพายไหลลงสู่แม่น้ำปาดที่อำเภอน้ำปาด มีชั้นน้ำตกทั้งหมด 5 ชั้น แต่ละชั้นมีชื่อไว้อย่างไพเราะว่า ภูสอยดาว สกาวเดือน เหมือนฝัน กรรณิการ์ และสุภาภรณ์ มีน้ำไหลตลอดปี อยู่ริมเส้นทางหลวงแผ่นดินหมายเลข 1268 ใกล้กับที่ทำการอุทยานแห่งชาติ\n        <br><br>\n        <img src="http://park.dnp.go.th/dnp/ptascene/9114scene241117_142402.jpg">\n        <br>\n        <img src="http://topicstock.pantip.com/blueplanet/topicstock/2009/09/E8293438/E8293438-4.jpg">\n        <br>\n        <strong>น้ำตกสายทิพย์ </strong><br>\n        ตั้งอยู่บนรอยต่อระหว่างป่าดิบชื้นกับป่าสนเขา เป็นน้ำตกขนาดเล็ก มีสายน้ำไหลลดหลั่นลงมาตามชั้นเตี้ย ๆ รวม 7 ชั้น ความสูงแต่ละชั้นประมาณ 5-10 เมตร ฤดูฝนน้ำจะไหลแรงมองดูสวยงามมากและมีน้ำไหลตลอด สภาพป่าโดยรอบน้ำตกมีความชุ่มชื้นมาก จึงมีมอสส์สีเขียวขึ้นปกคลุมทั่วไปตามก้อนหินริมน้ำ เมื่อขึ้นเที่ยวบนลานสนสามใบภูสอยดาวสามารถเที่ยวน้ำตกแห่งนี้ได้ด้วย\n        <br>]\n        <strong>ลานหินลำน้ำภาค </strong><br>\n        ตั้งอยู่ในท้องที่ตำบลบ่อภาค อำเภอชาติตระการ จังหวัดพิษณุโลก เป็นหินธรรมชาติที่เกิดขึ้นสองริมฝั่งลำน้ำภาคไหลลงแม่น้ำแดงน้อย ที่อำเภอชาติตระการ มีความกว้างของลานหินฝั่งละประมาณ 10-15 เมตร ยาวประมาณ 100 เมตร\n        <br><br>\n        <img src="http://multiculturalismrocks.com/wp-content/uploads/2017/06/%E0%B8%A5%E0%B8%B2%E0%B8%99%E0%B8%AB%E0%B8%B4%E0%B8%99%E0%B8%95%E0%B8%B8%E0%B9%88%E0%B8%A1.jpg">\n        <br>\n        ตั้งอยู่ในท้องที่ตำบลบ่อภาค อำเภอชาติตระการ จังหวัดพิษณุโลก เป็นหินธรรมชาติที่เกิดขึ้นสองริมฝั่งลำน้ำภาคไหลลงแม่น้ำแดงน้อย ที่อำเภอชาติตระการ มีความกว้างของลานหินฝั่งละประมาณ 10-15 เมตร ยาวประมาณ 100 เมตร\n        <br><br>\n        <strong>สิ่งอำนวยความสะดวก</strong><br>\n        ทางอุทยานมีที่พักไว้บริการ โดยสามารถดูรายละเอียดได้ที่ <a (click)="openURL()">nps.dnp.go.th</a> ของกรมเท่านั้น (กรมไม่มีตัวแทนการจองที่พักกับภาคเอกชนรายใดทั้งสิ้น) หรือติดต่อเจ้าหน้าที่ โทรศัพท์ 0 2562 0760 และมีสถานที่กางเต็นท์ไว้ให้บริการด้วย\n        <br><br>\n        <strong>การเดินทาง</strong><br>\n        รถยนต์\n        <ul>\n            - จากจังหวัดพิษณุโลก ไปตามทางหลวงแผ่นดินหมายเลข 11 แล้วแยกเข้าทางหลวงแผ่นดินหมายเลข 1246 ถึงบ้านแพะแยกเข้าทางหลวงหมายเลข 1143 ผ่านอำเภอชาติตระการ แยกเข้าทางหลวงหมายเลข 1237 ผ่านบ้านบ่อภาคไปบรรจบกับเส้นทางแผ่นดินหมายเลข 1268 ถึงน้ำตกภูสอยดาว อุทยานแห่งชาติภูสอยดาว รวมระยะทางประมาณ 188 กิโลเมตร\n            <br>\n            - จากจังหวัดอุตรดิตถ์ใช้ทางหลวงจังหวัดหมายเลข 1047 (อุตรดิตถ์-น้ำปาด) จนถึงอำเภอน้ำปาดแล้วเข้าสู่ทางหลวงจังหวัดหมายเลข 1239 ไปอีก 47 กิโลเมตร จึงเข้าสู่ทางหลวงจังหวัดหมายเลข 1268 ไปอีก 18 กิโลเมตร จะถึงที่ทำการอุทยานแห่งชาติ รวมระยะทางประมาณ 133 กิโลเมตร\n        </ul>\n\n        รถโดยสารประจำทาง<br>\n        การเดินทางด้วยรถโดยสารวิธีที่ 1\n        <ul>\n            ช่วงที่ 1 จากกรุงเทพฯ ขึ้นรถโดยสารที่สถานีขนส่งหมอชิต สายกรุงเทพฯ-พิษณุโลก ไปลงที่จังหวัดพิษณุโลก<br>\n            ช่วงที่ 2 จากจังหวัดพิษณุโลก เดินทางด้วยรถโดยสารระหว่างอำเภอ ไปอำเภอชาติตระการ ระยะทางประมาณ 100 กิโลเมตร<br>\n            ช่วงที่ 3 จากอำเภอชาติตระการ เดินทางด้วยรถสองแถว ซึ่งมีวันละ 1 เที่ยว รถออกเดินทางไม่เกิน 09.00 น. ไปที่ทำการอุทยานแห่งชาติภูสอยดาว ระยะทางประมาณ 70 กิโลเมตร<br>\n        </ul>\n        การเดินทางด้วยรถโดยสารวิธีที่ 2\n        <ul>\n            ช่วงที่ 1 จากกรุงเทพฯ ขึ้นรถโดยสารที่สถานีขนส่งหมอชิต สายกรุงเทพฯ-พิษณุโลก ไปลงที่จังหวัดพิษณุโลก<br>\n            ช่วงที่ 2 จากจังหวัดพิษณุโลก เดินทางด้วยรถรับจ้างเหมาไป-กลับ ไปอุทยานแห่งชาติภูสอยดาว ระยะทางประมาณ 170 กิโลเมตร<br>\n            </ul>\n\n            <strong>หมายเหตุ : </strong>หากนักท่องเที่ยวเดินทางไปถึงอุทยานแห่งชาติภูสอยดาวแล้ว ไม่สามารถขึ้นยอดภูสอยดาวได้ทัน (อุทยานแห่งชาติเปิดให้ขึ้นลานสนภูสอยดาวตั้งแต่เวลา 08.00-14.00 น.) ทางอุทยานแห่งชาติได้จัดเตรียมสถานที่กางเต็นท์ไว้บริการ บริเวณที่ทำการอุทยานแห่งชาติที่อยู่ด้านล่างไว้แล้ว<br>\n            <br><strong>สถานที่ติดต่อ</strong><br>\n           อุทยานแห่งชาติภูสอยดาว ตำบลห้วยมุ่น อำเภอน้ำปาด จังหวัดอุตรดิตถ์ 53110 โทรศัพท์ 0 5543 6001-2\n\n            \n\n        \n\n\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"D:\RADAR\src\pages\tourist-winter\page_winter\Central\phu-soi-dao\phu-soi-dao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], PhuSoiDaoPage);
    return PhuSoiDaoPage;
}());

//# sourceMappingURL=phu-soi-dao.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MongoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the MongoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MongoPage = /** @class */ (function () {
    function MongoPage(navCtrl, inAppBrowser) {
        this.navCtrl = navCtrl;
        this.inAppBrowser = inAppBrowser;
    }
    MongoPage.prototype.openURL = function () {
        this.inAppBrowser.create("http://www.amazingthaitour.com/");
    };
    MongoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mongo',template:/*ion-inline-start:"D:\RADAR\src\pages\tourist-winter\page_winter\Central\mongo\mongo.html"*/'<!--\n  Generated template for the MongoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>โมโกจู อุทยานแห่งชาติแม่วงก์</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n        <h1>โมโกจู อุทยานแห่งชาติแม่วงก์</h1>\n    </ion-card-header>\n    \n    <ion-card-content>\n      <img src="https://travel.mthai.com/app/uploads/old_attachment/2011/11/04/12082-attachment.jpg">\n      <br>\n      ด้วยความสูง 1,964 เมตร จากระดับน้ำทะเล โมโกจู จึงเป็นยอดเขาที่สูงที่สุดใน อุทยานแห่งชาติแม่วงก์ จังหวัดกำแพงเพชร อยู่ห่างจากที่ทำการอุทยานฯ 27 กิโลเมตร ต้องเดินเท้าเข้าไป ใช้เวลาไป-กลับ 5 วัน หืออออ กินเหงื่อแทนน้ำกันจุกแน่ๆ เมื่อยตรงไหน แช่ตรงนั้น ครั้นเวลามืดมาถึง ก็ต้องหาที่ผึ่งกายกันในป่า ตามจุดที่อุทยานฯ กำหนดไว้\n      <br><br>\n      <img src="https://travel.mthai.com/app/uploads/old_attachment/2011/11/04/12083-attachment.jpg">\n      <br>\n      โมโกจู ชื่ออินเตอร์ขนาดนี้ แน่นอน ภาษากะเหรี่ยงนะฮะ ไม่ใช่ญี่ปุ่นที่ไหน ฮ่าๆๆ แปลว่า “เหมือนฝนจะตก”เนื่องจากมีหมอกปกคลุมจัดบนยอดเขา โดยเฉพาะช่วงฤดูหนาว เย็นยะเยือก ควันออกปาก พ่นเล่นกันได้ทั้งวัน มองจากยอดเขาลงไปก็จะเห็นทะเลหมอกแห่งป่าตะวันตกอันกว้างไกลสุดลูกหูลูกตา\n\nสำหรับการเดินเท้าเข้าไปสัมผัส โมโกจู นั้นต้องติดต่อกับเจ้าหน้าที่อุทยานแห่งชาติแม่วงก์โดยตรง และต้องปฏิบัติตามระเบียบอย่างเคร่งครัด ที่นี่เค้าจัดปฐมนิเทศน์กันแบบจริงจัง เพื่อความปลอดภัยและเพื่อการทำใจไว้ล่วงหน้า แฮ่ๆ ที่แน่ๆ เตรียมกำลังขาให้สัมพันธ์กับกำลังใจดีที่สุด เพราะทางเดินขึ้นเขาตลอดเส้น ลาดชันไม่ต่ำกว่า 60 องศา อย่าลืมถ่ายภาพตอน “ง่อยเปลี้ยเสียขา” ไว้ดูเล่นนะฮะ\n<br><br>\n<img src="https://travel.mthai.com/app/uploads/old_attachment/2011/11/04/12084-attachment.jpg"><br>\nแคมป์ของคืนแรก คือ แคมป์แม่กระสา พักทำใจกันแล้วก็ดั้นด้นต่อไปจนค่ำมืด คืนที่สอง แคมป์แม่เรวา กางเต๊นท์กันชิลล์ๆ บริเวณนี้มี น้ำตกแม่รีวา ให้ลงไปแช่เล่น แต่ต้องเดินจากแคมป์ไปประมาณ 8 กิโลเมตร ก็ราวๆ 1 ชั่วโมง เรียกว่าบริหารนิ้วเท้าตลอดทริป เช้าวันฝันใกล้เป็นจริง มุ่งหน้าสู่ แคมป์ตีนดอย ชื่อก็บอกว่าใกล้ยอดละ เชื่อว่าวินาทีนี้ลูกฮึดมาเยอะสุด เพราะปลายทางอยู่ตรงหน้าแล้ว อีกแค่ 20 นาทีเท่านั้น ก็จะถึงยอด โมโกจู ณ จุดนี้ เราจะได้เปิดโลกทัศน์แห่งการมองเห็น ผ่านม่านหมอกทั่วผืนฟ้า ทิวเขาเรียงรายตัดกับเส้นขอบฟ้า สาดแสงด้วยพระอาทิตย์ยามเย็น กดชัตเตอร์กันเป็นร้อยครั้งก็ยังไม่เบื่อ<br><br>\n<img src="https://travel.mthai.com/app/uploads/old_attachment/2011/11/04/12085-attachment.jpg"><br>\n<img src="https://travel.mthai.com/app/uploads/old_attachment/2011/11/04/12086-attachment.jpg"><br>\n<img src="https://travel.mthai.com/app/uploads/old_attachment/2011/11/04/12087-attachment.jpg"><br>\n<img src="https://travel.mthai.com/app/uploads/old_attachment/2011/11/04/12088-attachment.jpg"><br>\n<img src="https://travel.mthai.com/app/uploads/old_attachment/2011/11/04/12089-attachment.jpg"><br>\n<img src="https://travel.mthai.com/app/uploads/old_attachment/2011/11/04/12090-attachment.jpg"><br>\n<img src="https://travel.mthai.com/app/uploads/old_attachment/2011/11/04/12091-attachment.jpg"><br>\n<img src="https://travel.mthai.com/app/uploads/old_attachment/2011/11/04/12092-attachment.jpg"><br>\n<img src="https://travel.mthai.com/app/uploads/old_attachment/2011/11/04/12093-attachment.jpg"><br>\n<img src="https://travel.mthai.com/app/uploads/old_attachment/2011/11/04/12094-attachment.jpg"><br>\n<img src="https://travel.mthai.com/app/uploads/old_attachment/2011/11/04/12095-attachment.jpg"><br>\n<strong>ช่วงเวลาที่เหมาะสมในการเดินทาง:</strong>ยอดเขาโมโกจูเปิดให้นักท่องเที่ยวสามารถเดินป่าในช่วงเดือนพฤศจิกายนถึงเดือนกุมภาพันธ์<br><br>\n<strong>การเดินทางไปยังอุทยานแห่งชาติแม่วงก์:</strong>จากกรุงเทพมหานคร ใช้เส้นทางไปกำแพงเพชร-คลองลาน สู่อุทยานแห่งชาติแม่วงก์ ตามทางหลวงหลายเลข 1117 กิโลเมตรที่ 65 ถนนคลองลาน-อุ้มผาง<br>\n    นักท่องเที่ยวที่สนใจสามารถสอบถามข้อมูลเพิ่มเติมได้ที่ การท่องเที่ยวแห่งประเทศไทย (ททท.) สำนักงานสุโขทัย หมายเลขโทรศัพท์ 055616228-9 ทั้งนี้สามารถติดต่อจองทริปพิชิตยอดเขาโมโกจู ได้ที่ <a (click)="openURL()">ทริปเดินป่าระยะไกล พิชิตยอดเขาโมโกจู พฤศจิกายน 2559 – กุมภาพันธ์ 2560 อุทยานแห่งชาติแม่วงก์ จังหวัดกำแพงเพชร</a>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"D:\RADAR\src\pages\tourist-winter\page_winter\Central\mongo\mongo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], MongoPage);
    return MongoPage;
}());

//# sourceMappingURL=mongo.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhuHinRongKlaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PhuHinRongKlaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PhuHinRongKlaPage = /** @class */ (function () {
    function PhuHinRongKlaPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    PhuHinRongKlaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-phu-hin-rong-kla',template:/*ion-inline-start:"D:\RADAR\src\pages\tourist-winter\page_winter\North-East\phu-hin-rong-kla\phu-hin-rong-kla.html"*/'<!--\n  Generated template for the PhuHinRongKlaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>อุทยานแห่งชาติภูหินร่องกล้า (Phu Hin Rong Kla National Park) </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header><h1>อุทยานแห่งชาติภูหินร่องกล้า <p>(Phu Hin Rong Kla National Park)</p></h1></ion-card-header>\n    <ion-card-content>\n        อุทยานแห่งชาติภูหินร่องกล้า ตั้งอยู่บนรอยต่อของสามจังหวัด คือ อ.ด่านซ้าย จังหวัดเลย อ.นครไทย จังหวัดพิษณุโลก และ อ.หล่มสัก จังหวัดเพชรบูรณ์ มีเนื้อที่ประมาณ 191,875 ไร่ ประกาศเป็นอุทยานแห่งชาติ เมื่อวันที่ 26 กรกฎาคม 2527 เป็นพื้นที่ที่ มีธรรมชาติแปลก และสวยงาม ทั้งยังเป็นดินแดนแห่งประวัติศาสตร์เป็นยุทธภูมิ ที่สำคัญ อันเนื่องจากความขัดแย้งของลัทธิ และแนว ความคิดทางการเมือง อุทยานแห่งชาติ ภูหินร่องกล้าจึงเป็นอุทยานแห่งชาติเพียงแห่งเดียวในประเทศไทย ที่รักษาไว้ซึ่งประวัติศาสตร์ ของการสู้รบและความสวยงามทางธรรมชาติที่สมบูรณ์ ลักษณะภูมิอากาศภูหินร่องกล้ามีลักษณะภูมิอากาศคล้าย ภูกระดึงและภูหลวง เนื่องจากมีความสูง ในระดับไล่เลี่ยกัน อากาศจะหนาวเย็นเกือบตลอดปี โดยเฉพาะในฤดูหนาว อุณหภูมิ จะต่ำประมาณ 4 องศาเซลเซียส ฤดูร้อนอากาศจะเย็นสบาย ฝนตกชุกในฤดูฝน อุณหภูมิเฉลี่ยตลอดปี ประมาณ 18-25 องศาเซลเซียส\n        <br><br>\n      <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2015/09/DEW_0991.jpg"><br>\n      <strong>แหล่งท่องเที่ยวที่น่าสนใจในเขตอุทยานแห่งชาติภูหินร่องกล้า</strong><br>\n      เนื่องจากอุทยานแห่งชาติภูหินร่องกล้า เป็นอุทยานทางประวัติศาสตร์ ซึ่งมีสภาพธรรมชาติที่สวยงามแปลกตาผิดจาก อุทยานแห่งชาติโดยทั่วไป ดังนั้นจุดที่น่าสนใจต่างๆ จึงแบ่งออกเป็น 2 ประเภทคือ ด้านประวัติศาสตร์ ได้แก่ สถานที่ที่อดีตผู้ก่อการ ร้ายคอมมิวนิสต์ เคยใช้เป็นที่อยู่อาศัย เป็นที่ ประกอบกิจกรรมต่าง ๆ<br>\n      <strong>ด้านประวัติศาสตร์</strong><br>\n      <ul>\n        <strong>1.พิพิธภัณฑ์การสู้รบ </strong><br>\n        (ศูนย์บริการนักท่องเที่ยว) อยู่ใกล้กับที่ทำการอุทยานฯ เป็นสถานที่จัดแสดงนิทรรศการเกี่ยวกับการสู้รบ มีภาพแผนภูมิข้อมูล อุปกรณ์การแพทย์ อาวุธ เอกสารเผยแพร่ลัทธิคอมมิวนิสต์ รวมทั้งนิทรรศการด้านธรรมชาติวิทยาิภูหินร่องกล้า นอกจากนี้ ยังมีห้อง ประชุมจุได้ 80 คน ใช้ในการบรรยายสรุปหรือประชุมสัมนาและเป็นสถานที่ติดต่อขอข้อมูลการเดินทางท่องเที่ยวในเขตอุทยานฯ <br>\n\n        <strong>2.โรงเรียนการเมืองการทหาร</strong><br>\n        ตั้งอยู่บริเวณหลักกม.ที่ 4 ถูกปกคลุมด้วยป่ารกครึ้มหนาแน่นเมื่อปี2513 เป็นที่ตั้งของคณะกรรมการเขต 3 จังหวัด คือ จังหวัดเลย จังหวัดเพชรบูรณ์ และจังหวัดพิษณุโลก ปี พ.ศ. 2520 ก่อตั้งเป็นโรงเรียนขึ้น ให้การศึกษาตามแนวทางลัทธิคอมมิวนิสต์ หากมาเที่ยวใน ช่วงเดือนมกราคมจะได้พบกับบรรยากาศของใบเมเบิ้ลเปลี่ยนสีและร่วงหล่นมาต้องบ้านไม้เก่าแก่งดงามคล้ายกับ ต่างประเทศ<br>\n        <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2015/01/9-DEW_2159.jpg"><br>\n        <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2015/01/5DEW_2157.jpg"><br>\n        <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2015/01/1-DEW_2177.jpg"><br>\n        <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2015/01/7-DEW_2100.jpg"><br>\n        <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2015/01/6DEW_2152.jpg"><br>\n        <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2015/01/4DEW_2155.jpg"><br>\n        <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2015/01/8-DEW_2125.jpg"><br>\n        <img src="https://www.paiduaykan.com/travel/wp-content/uploads/2015/01/2-DEW_2172.jpg"><br>\n        <strong>3.กังหันน้ำ </strong><br>\n        อยู่ตรงข้ามกับโรงเรียนการเมืองการทหาร เป็นกังหันน้ำขนาดใหญ่ ถูกสร้างขึ้นจากการผสมผสานความคิดก้าวหน้าทางวิชาการ กับการนำประโยชน์จากธรรมชาติมาใช้งาน โดยนักศึกษาวิศวะที่เข้าร่วมกับ พคท. หลังเหตุการณ์ 6 ตุลาคม 2519 สำนักอำนาจรัฐ อยู่ทางทิศตะวันตกเฉียงใต้ของอุทยานฯ ประมาณ 3 กม.เป็นสถานที่ดำเนินการด้านปกครอง มีการพิจารณาและลงโทษผู้กระทำผิด หรือละเมิดต่อกฎลัทธิ มีคุกสำหรับขังผู้กระทำความผิด มีสถานที่ทอผ้า และโรงซ่อมเครื่องจักรกลหลงเหลืออยู่<br>\n        <strong>4.โรงพยาบาลรัฐ</strong><br>\nอยู่ห่างจากสำนักอำนาจรัฐไปทางทิศเหนือ ประมาณ 2 กม. เป็นโรงพยาบาลกลางป่าที่มีอุปกรณ์ในการรักษาพยาบาลเกือบครบ ถ้วน มีห้องปรุงยา ห้องพักฟื้น ห้องผ่าตัด โรงพยาบาลแห่งนี้ก่อตั้งเมื่อ ปี พ.ศ. 2519 สามารถทำการรักษาพยาบาลได้อย่างดี โดยเฉพาะการผ่าตัด สามารถผ่าตัดอวัยวะได้ทุกส่วน ยกเว้นหัวใจ มีหมอและพยาบาลจบจากหลักสูตรเร่งรัดจากประเทศจีนในปี พ.ศ. 2522 เพิ่มแผนกทำฟันและวิจัยยา และเครื่องมือที่ใช้ส่วนใหญ่ได้จากในเมืองการรักษายังมีการฝังเข็ม และใช้สมุนไพร อยู่ด้วย\n\n<strong>5.ลานเอนกประสงค์</strong><br>\nเป็นบริเวณลานหินที่กว้างใหญ่ อยู่ก่อนถึงสำนักอำนาจรัฐใช้เป็นที่พักผ่อน และสังสรรค์ในหมู่สมาชิกในโอกาสสำคัญต่างๆ\n<br>\n<strong>6.สุสาน ทปท</strong><br>\nเป็นสถานที่ฝังศพของนักรบทหารปลดแอกแห่งประเทศไทย (ทปท.) ที่เสียชีวิตจากการสู้รบกับทหารฝ่ายรัฐบาล ส่วนใหญ่จะอยู่ใกล้ บริเวณลานเอนกประสงค์ ที่หลบภัยทางอากาศ เป็นสถานที่หลบภัยจากการทิ้งระเบิดทางอากาศจากทหารฝ่ายรัฐบาล ส่วนใหญ่เป็น หลืบหินหรือโพรงถ้ำที่ซ่อนตัวในแนวต้นไม้ใหญ่ ทำให้ยากต่อการตรวจการณ์ทาง อากาศ มีอยู่หลายแห่ง แต่เปิดให้นักท่องเที่ยว เข้าชมได้ 2 แห่ง คือ บริเวณห่างจากโรงเรียนการเมืองการทหารราว 200 เมตร ลักษณะเป็นโพรงถ้ำขนาดใหญ่ มีซอกหลืบสลับ ซับซ้อน จุคนได้ถึง 500 คน และอีกแห่งหนึ่งบริเวณทางเข้าสำนักอำนาจรัฐ เป็นหลืบขนาดใหญ่ สามารถจุคนได้ประมาณ 200 คน\n<br>\n<strong>7.หมู่บ้านมวลชน</strong><br>\nเป็นที่อยู่อาศัยของกลุ่มมวลชน มีอยู่หลายหมู่บ้าน เช่น หมู่บ้านดาวแดง หมู่บ้านดาวชัย แต่ละหมู่บ้านมีบ้านประมาณ 40-50 หลัง เรียงรายอยู่ในป่ารกริมถนนที่ตัดมาจากอ.หล่มเก่า ลักษณะบ้านเป็นบ้านไม้หลังเล็กๆ ไม่ยกพื้น หลังคามุงด้วยไม้กระดานแผ่นบางๆ กันน้ำฝนได้อย่างดี และมีหลุมหลบภัยทางอากาศอยู่ด้วย \n<br>\n</ul>\n\n<strong>ด้านธรรมชาติที่สวยงาม</strong>\n<ul>\n  \n  <strong>1.ลานหินแตก</strong><br>\nอยู่ห่างจากฐานพัชรินทร์ ประมาณ 300 เมตร ลักษณะเป็นลานหินที่มีอาณาบริเวณ ประมาณ 40 ไร่ ลานหินมีรอยแตกเป็นแนว เป็น ร่อง เหมือนแผ่นดินแยก รอยแตกนี้บางรอยก็มีขนาดแคบ ขนาดพอคนก้าวข้ามได้ แต่บางรอยก็กว้างจนไม่่สามารถ จะกระโดดข้าม ไปถึง สำหรับความลึกของร่องหินแตกนั้นไม่สามารถจะคะเนได้ ลักษณะเช่นนี้ี้สันนิษฐานว่า อาจจะเกิดจากการโก่งตัว หรือ เคลื่อนตัวของผิวโลก จึงทำให้พื้นหินนั้นแตกออกเป็นแนว นอกจากนี้บริเวณลานหินแตกยังปกคลุมไปด้วยมอสส์ ไลเคน ตะไคร่ เฟิร์น และกล้วยไม้ชนิดต่างๆ\n<br><strong>2.ลานหินปุ่ม</strong><br>\nอยู่ห่างจากที่ทำการอุทยานฯ ประมาณ 4 กม. อยู่ริมหน้าผา ลักษณะลานหินซึ่ง มีหินผุดขึ้นมาเป็นปุ่มเป็นปมขนาดไล่เลี่ยกัน คาดว่า เกิดจากการสึกกร่อนตามธรรมชาติของหิน ในอดีตบริเวณนี้ใช้เป็นที่พักฟื้นของคนไข้ของ โรงพยาบาล เนื่องจาก อยู่บนหน้าผา มีลมพัดเย็นสบาย \n<br><br>\n<img src="https://www.paiduaykan.com/travel/wp-content/uploads/2015/09/DEW_1002.jpg"><br>\n<img src="https://www.paiduaykan.com/province/north/phitsanulok/pic/phuhin13.jpg"><br>\n<img src="https://www.paiduaykan.com/travel/wp-content/uploads/2015/09/DEW_0917.jpg"><br>\n<img src="https://www.paiduaykan.com/province/north/phitsanulok/pic/phuhin15.jpg"><br>\n<img src="https://www.paiduaykan.com/province/north/phitsanulok/pic/phuhin25.jpg"><br>\n<img src="https://www.paiduaykan.com/province/north/phitsanulok/pic/phuhin17.jpg"><br>\n<img src="https://www.paiduaykan.com/province/north/phitsanulok/pic/phuhin18.jpg"><br>\n<img src="https://www.paiduaykan.com/province/north/phitsanulok/pic/phuhin29.jpg"><br>\n<img src="https://www.paiduaykan.com/province/north/phitsanulok/pic/phuhin30.jpg"><br>\n<strong>3.ผาชูธง</strong><br>\nอยู่ห่างจากลานหินปุ่มประมาณ 500เมตร เป็นหน้าผาสูงชัน สามารถเห็นทิวทัศน์ได้กว้าง ไกลโดยเฉพาะภาพวิวพระอาทิตย์ตกดินจะ สวยงามไม่แพ้จุดชมวิวอื่น ๆ บริเวณนี้เคยเป็นสถานที่ซึ่งผกค.จะขึ้นไปชูธงแดง (ฆ้อนเคียว) ทุกครั้งเมื่อรบชนะ\n<br><strong>4.น้ำตกร่มเกล้า-ภราดร</strong><br>\nห่างจากโรงเรียนการเมืองการทหารและกังหันน้ำประมาณ 600 เมตร มีทางแยกเดินลงน้ำตก ระยะทางประมาณ 400 เมตร จะถึง น้ำตกร่มเกล้าก่อน และเดินลงไปอีกประมาณ 200 เมตร จะเป็นน้ำตกภราดร ซึ่งมีลักษณะคล้ายน้ำตกร่มเกล้า เกิดจากลำธาร เดียวกันแต่มีความสูงน้อยกว่าและกระแสน้ำแรงกว่า\n<br><strong>5.น้ำตกศรีพัชรินทร์</strong><br>\nตั้งชื่อเป็นอนุสรณ์แก่ทหารค่ายศรีพัชรินทร์ จังหวัดขอนแก่น ซึ่งเป็นทหารหน่วยแรกที่ขึ้นมาบนภูหินร่องกล้า น้ำตกศรีพัชรินทร์มี ความสูงประมาณ 20 เมตร มีลักษณะคล้าย น้ำตกเหวสุวัตที่เขาใหญ่ แต่มีขนาดเล็กกว่าบริเวณน้ำตก มีแอ่งขนาดใหญ่เหมาะสำหรับ เล่นน้ำ\n<br><strong>7.น้ำตกผาลาด</strong><br>\nตั้งอยู่ทางด้านล่างของหน่วยพิทักษ์ห้วยน้ำไซ ทางเข้าจะผ่านหมู่บ้านชาวเขาเผ่าม้ง บ้านห้วยน้ำไซ ทางเข้าสู่เขื่อนผลิตกระแสไฟฟ้า พลังน้ำ ของการพลังงานแห่งชาติจากทางแยกประมาณ 2 กม. จะถึงทางแยกซ้ายมือ เดินลงไปอีกประมาณ 50 เมตร ก็จะถึงตัวน้ำตก และลำน้ำสายใหญ่ แม้จะเป็นน้ำตกซึ่งไม่สูงนัก แต่มีน้ำมากตลอดปี ดังนั้นการพลังงานแห่งชาติ จึงสร้างเขื่อนผลิตกระแสไฟฟ้า ใช้ในบริเวณใกล้เคียง\n<br><strong>8.น้ำตกตาดฟ้า</strong><br>\nเป็นน้ำตกที่มีความสูงมากแห่งหนึ่งในเขตอุทยานฯ ปัจจุบันยังไม่มีเส้นทางเข้าสู่ตัวน้ำตก ต้องเดินทางไปตามถนนลูกรังประมาณ 1 กม. จากนั้นจึงเดินตามทางเดินในป่าอีกประมาณ 300 เมตร ก็จะได้ยินเสียงน้ำตก เดินไปตามเสียงอีกไม่่นานก็จะถึงด้านบนของ น้ำตก และต้องไต่ลงไปตามทางเดินเล็ก ๆ จึงจะมองเห็นความสวยงามของน้ำตกตาดฟ้าหรือ เรียกชื่อพื้นเมืองว่า "น้ำตกด่าน-กอซาง" ซึ่ง หมายถึงด่านตรวจของผกค.ที่มีกอของไม้ไผ่ซาง \n</ul>\n\n<strong>สิ่งอำนวยความในอุทยานแห่งชาติภูหินร่องกล้า</strong><br>\nปัจจุบันมีบ้านพัก บริการจำนวน 9 หลัง พักได้หลังละ 5-7 คน ราคา 1,000-1,600 บาท/คืน เต็นท์ขนาด 20 คน ราคา1,000 บาท/คืน นอกจากนี้ ยังมีค่ายพัก ศูนย์บริการพักผ่อนท่องเที่ยว ร้านอาหาร และสถานที่ สำหรับกางเต็นท์ ไว้บริการ\nสถานที่ติดต่อ อุทยานแห่งชาติภูหินร่องกล้า ตู้ ป.ณ. 3 อ.นครชัย จ.พิษณุโลก 65120 โทร. 0-5523-3527\nสอบถามข้อมูลเพิ่มเติม ได้ที่ส่วนอุทยานแห่งชาติ สำนักอนุรักษ์ทรัพยากรธรรมชาติ กรมป่าไม้ 61 ถนนพหลโยธิน\nเขตจตุจักร กรุงเทพฯ 10900 โทร. 0-2579-7223, 0-2579-5734 หรือ 0-2561-4292-4 ต่อ 723,725 <br>\n\n<strong>การเดินทางไปอุทยานแห่งชาติภูหินร่องกล้า </strong><br>\n<ul>\n  <strong>1.รถยนต์ส่วนตัว</strong><br>\n  การเดินทางไปยังอุทยานแห่งชาติภูหินร่องกล้ามีหลายเส้นทาง แต่ที่นิยมกันคือ ใช้ทางหลวงหมายเลข 12 สายพิษณุโลก-หล่มสัก ถึงสามแยกบ้านแยง มีป้ายบอกทางแยกขวาผ่านบ้านห้วยตีนตั่ง-บ้านห้วยน้ำไซ-ฐานพัชรินทร์ สู่ที่ทำการอุทยานแห่งชาติ ภูหินร่องกล้า ระยะทางประมาณ 31 กิโลเมตร\n\nอีกเส้นทางหนึ่งคือ จากเพชรบูรณ์ตามทางหลวงหมายเลข 21 ผ่านอำเภอหล่มสัก อำเภอหล่มเก่า บ้านวังบาล บ้านเหมืองแบ่ง บ้านทับเบิกถึงอุทยานแห่งชาติภูหินร่องกล้า รวมระยะทางประมาณ 104 กิโลเมตร เป็นทางลาดยางค่อนข้างชันและคดเคี้ยว ควร-ขับรถด้วยความความระมัดระวังอย่างมาก<br>\n</ul>\n\n\n\n\n\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"D:\RADAR\src\pages\tourist-winter\page_winter\North-East\phu-hin-rong-kla\phu-hin-rong-kla.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], PhuHinRongKlaPage);
    return PhuHinRongKlaPage;
}());

//# sourceMappingURL=phu-hin-rong-kla.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhuKraduengPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PhuKraduengPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PhuKraduengPage = /** @class */ (function () {
    function PhuKraduengPage(navCtrl, inAppBrowser) {
        this.navCtrl = navCtrl;
        this.inAppBrowser = inAppBrowser;
    }
    PhuKraduengPage.prototype.openURL = function () {
        this.inAppBrowser.create("http://nps.dnp.go.th/");
    };
    PhuKraduengPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-phu-kradueng',template:/*ion-inline-start:"D:\RADAR\src\pages\tourist-winter\page_winter\North-East\phu-kradueng\phu-kradueng.html"*/'<!--\n  Generated template for the PhuKraduengPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>อุทยานแห่งชาติภูกระดึง (Phu Kradueng)</ion-title>\n  </ion-navbar>\n\n</ion-header>\n  \n\n<ion-content padding>\n    <ion-card>\n        <ion-card-header>\n          <h1>อุทยานแห่งชาติภูกระดึง<p>(Phu Kradueng)</p></h1>\n        </ion-card-header>\n        <ion-card-content>\n          <img src="https://www.xn--72c5aba9c2a3b8a2m8ae.com/wp-content/uploads/2015/11/phukadungnation-07.jpg"><br>\n          อุทยานแห่งชาติภูกระดึง มีเนื้อที่ประมาณ 348.12 ตารางกิโลเมตร หรือ 217,576.25 ไร่ ได้รับการจัดตั้งให้เป็นอุทยานแห่งชาติเมื่อวันที่ 7 ตุลาคม พ.ศ. 2502 เป็นอุทยานลำดับที่ 2 ถัดจากอุทยานแห่งชาติเขาใหญ่ ลักษณะภูมิประเทศเป็นภูเขาหินทรายยอดตัดอยู่ทางตะวันตกเฉียงเหนือของที่ราบสูงโคราช ใกล้กับพื้นที่ลาดทิศตะวันออกของเทือกเขาเพชรบูรณ์ พื้นที่ของภูเขาส่วนใหญ่สูงระหว่าง 400-1,200 เมตรจากระดับน้ำทะเลปานกลาง มียอดสูงสุดคือ ภูกุ่มข้าว สูงประมาณ 1,350 เมตร พื้นที่ราบบนยอดภูกระดึงมีความกว้างถึง 60 ตารางกิโลเมตร หรือประมาณ 37,500 ไร่ คล้ายรูใบบอน มีสังคมของพืชเมืองหนาว ได้แก่ ป่าสนสองใบ ป่าสนสามใบ ป่าเมเปิ้ล และพันธุ์ไม้ดอกที่สวยงาม เช่น กุหลาบป่า เอื้องม้าวิ่ง เอื้องคำหิน ดอกม่วนดักหงาย เป็นต้น และยังเป็นแหล่งต้นน้ำของลำน้ำพอง ซึ่งหล่อเลี้ยงเขื่อนอุบลรัตน์และเขื่อนหนองหวายในจังหวัดขอนแก่น<br><br>\n          <br>\n          <img src="https://www.xn--72c5aba9c2a3b8a2m8ae.com/wp-content/uploads/2015/11/phukadungnation-03.jpg"><br>\n          ด้วยสภาพอากาศที่เย็นสบายตลอดปี และอากาศที่หนาวเหน็บในฤดูหนาว จึงมีนักท่องเที่ยวหนุ่มสาวเดินทางมาเทียวที่นี่จำนวนมากในแต่ละปี แม้ว่าการเดินทางขึ้นภูกระดึงจะต้องเดินเท้าไต่ปีนหนีความสูงชันถึง 9 กิโลเมตร แต่ก็มีจุดให้แวะพักเหนื่อยตลอดเส้นทาง ทั้งที่ปางกกค่า ซำแฮก ซำบอน ซำกกกอก พร่านพรานแป ซำกกหว้า ซำกกไผ่ ซำกกโดน และซำแคร่ ซึ่งเป็นเนินเขาช่วงสุดท้ายก่อนจะเดินขึ้นหลังแป หรือพื้นที่ราบบนภูกระดึง การเดินขึ้นภูกระดึงนักท่องเที่ยวส่วนใหญ่จะเลือกเดินขึ้นช่วงเช้า เพื่อให้ถึงยอดภูก่อนค่ำ ตลอดเส้นทางยังมีสิ่งที่น่าสนใจให้ชมตลอด โดยเฉพาะสภาพป่าไม้ที่เปลี่ยนแปลงไปตามระดับความสูงตั้งแต่ 600-1,350 เมตร จากป่าเต็งรัง ป่าเบญจพรรณ ป่าดิบแล้ง ป่าดิบเขา ไปจนถึงป่าสนบนหลังแป รวมถึงพรรณไม้หายากทั้งต้นเมเปิ้ล หรือ ไฟเดือนห้า ที่จะเปลี่ยนสีแดงสดในฤดูหนาว ประมาณเดือนธันวาคม ต้นหม้อข้าวหม้อแกงลิง ดอกกระเจียว ต้นสนสองใบ และต้นสนสามใบ เรียกว่าเหนื่อยแต่ก็คุ้มค่ากับการได้เดินชมความงามของธรรมชาติแบบใกล้ชิด<br>\n          <br><img src="https://www.xn--72c5aba9c2a3b8a2m8ae.com/wp-content/uploads/2015/11/phukadungnation-05.jpg"><br>\n          เมื่อมาถึงหลังแปแล้ว นักท่องเที่ยวส่วนใหญ่จะเลือกเตรียมที่พักก่อน หลังจากที่ได้บ้านพัก หรือเต็นท์พักแรมแล้ว หากมีเวลาพอจะเลือกไปรอชมพระอาทิตย์ตกที่ผาหมากดูก ซึ่งนับเป็นจุดชมพระอาทิตย์ตกที่ใกล้ที่สุด นอกจากนี้ บนหลังแปยังมีจุดชมวิวที่สวยงามอีกหลายแห่งที่อยู่ในด้านของฝั่งป่าเปิด ส่วนใหญ่ตั้งอยู่ริมหน้าผาทางด้านทิศตะวันตก มีเส้นทางเดินศึกษาธรรมชาติเลาะมาทางทิศใต้จนถึงทิศตะวันออก ซึ่งจะผ่านจุดชมวิวตั้งแต่ผาแดง ผาเหยียบเมฆ ผานาน้อย ผาจำศีล ผาหมากดูก ผานกแอ่น และที่อยู่ไกลที่สุดทางทิศเหนือของหลังแปคือ ผาส่องโลก ที่ตั้งอยู่ในฝั่งป่าปิด การเดินทางต้องขออนุญาตจากเจ้าหน้าที่เท่านั้น<br><br>\n          <img src="https://www.xn--72c5aba9c2a3b8a2m8ae.com/wp-content/uploads/2015/11/phukadungnation-06.jpg"><br>\n          คุณสามารถเลือกเดินเที่ยวชมแหล่งท่องเที่ยวบนภูกระดึงในส่วนป่าเปิดได้สะดวก เพราะมีทางเดินชมธรรมชาติติดต่อถึงกันหมด เส้นทางท่องเที่ยวบนยอดเขาภูกระดึงนั้นมีหลากหลายเส้นทาง คุณควรมีเวลาเที่ยวอย่างน้อย 3 วัน จึงจะสามารถเดินเที่ยวได้หมด โดยแบ่งออกได้เป็น 2 ส่วนใหญ่ๆ คือเส้นทางน้ำตก โดยจะเดินเลาะไปตามรอยต่อระหว่างป่าเปิดและป่าปิด สถานที่ท่องเที่ยวที่น่าสนใจในเส้นทางนี้ได้แก่ น้ำตกวังกวาง น้ำตกถ้ำใหญ่ น้ำตกธารสวรรค์ สระแก้ว น้ำตกพระองค์ สระอโนดาต น้ำตกถ้ำสอเหนือ น้ำตกถ้ำสอใต้ และถ้ำน้ำ และเส้นทางเลียบหน้าผา เส้นทางนี้คุณสามารถเริ่มต้นเดินจากศูนย์บริการนักท่องเที่ยวได้ เส้นทางนี้เป็นเส้นทางเดินชมวิวตามจุดชมวิวต่างๆ ตั้งแต่ผาหมากดูกจนถึงผาหล่มสัก รวมระยะทาง 9 กิโลเมตร ในช่วงฤดูหนาวคุณยังจะได้สัมผัสกับสายหมอกที่สวยงามจากหน้าผาเหล่านี้ด้วย<br><br>\n          <img src="https://www.xn--72c5aba9c2a3b8a2m8ae.com/wp-content/uploads/2015/11/phukadungnation-01.jpg"><br>\n          นอกจากการได้มาเดินเที่ยวบนหลังแปแล้ว ในช่วงฤดูหนาวในบริเวณน้ำตกเพ็ญพบใหม่ซึ่งอยู่ทางทิศเหนือของน้ำตกวังกวางประมาณ 1.6 กิโลเมตร เป็นน้ำตกไหลผ่านผาหินด้วยความสูง 8 เมตร ลงสู่แอ่งน้ำด้านล่าง และยังมีใบเมเปิ้ลสีแดงสดสวยร่วงหล่นลอยตามผิวน้ำตัดกับสีเขียวของตะไคร่ตามโขดหิน เป็นจุดยอดนิยมสำหรับนักถ่ายภาพ<br><br>\n          <img src="https://www.xn--72c5aba9c2a3b8a2m8ae.com/wp-content/uploads/2015/11/phukadungnation-04.jpg"><br>\n          เนื่องจากการเดินทางมาท่องเที่ยวภูกระดึงเป็นเส้นทางเดินเท้าที่ต้องไต่ความสูงขึ้นสู่ยอดเขา นักท่องเที่ยวส่วนใหญ่ที่เดินทางมาที่นี่จึงเป็นกลุ่มวัยรุ่น คนหนุ่มสาว เป็นส่วนใหญ่ หรือต้องเป็นคนที่มีร่างกายที่แข็งแรงและออกกำลังกายอยู่เสมอ นอกจากนี้ยังมีกฎระเบียบที่เคร่งครัดเพื่อความปลอดภัยของนักท่องเที่ยวเอง ซึ่งควรเที่ยวเฉพาะในบริเวณที่อนุญาตเท่านั้น ในบริเวณที่ไม่ได้อนุญาต หรือห้ามเข้าต้องได้รับการอนุญาตจากเจ้าหน้าที่ก่อน<br><br>\n          <img src="https://www.xn--72c5aba9c2a3b8a2m8ae.com/wp-content/uploads/2015/11/phukadungnation-08.jpg"><br>\n          <strong>การเดินทาง :</strong> จากตัวเมืองจังหวัดเลย ขับรถไปตามทางหลวงหมายเลข 201 สายเลย-ขอนแก่น จากนั้นให้แยกไปตามทางหลวงหมายเลข 2019 จะพบทางเข้าที่ทำการอุทยานแห่งชาติภูกระดึง<br>\n          <br>\n          <strong>ช่วงเวลาท่องเที่ยว :</strong>1 ตุลาคม – 31 พฤษภาคม ของทุกปี<br><br>\n          <strong>สิ่งอำนวยความสะดวก :</strong>อุทยานฯ มีบ้านพักหลังใหญ่ถึง 16 หลัง ไว้บริการนักท่องเที่ยว พักได้ตั้งแต่ 4-12 คน/หลัง สำหรับคนที่นำเต็นท์มาเองที่นี่ก็มีลานกางเต็นท์และเต็นท์พร้อมเครื่องนอนหลากขนาดไว้ให้บริการคุณด้วย และยังมีค่ายเยาวชนสามารถรองรับกรุ๊ปทัวร์ได้ 100 คนสบายๆ ในเรื่องของอาหารการกินที่นี่มีจุดบริการอาหารและเครื่องดื่มถึง 3 จุด จุดแรกอยู่บริเวณศูนย์บริการนักท่องเที่ยวศรีฐาน จุดที่สองระหว่างทางเดินขึ้นเขา ทั้งที่ซำแฮก ซำกอซาง ซำกกโดน และซำแคร่ สุดท้ายที่ศูนย์บริการนักท่องเที่ยววังกวาง รวมถึงจุดชมทิวทัศน์สำคัญๆ บนยอดภูกระดึงด้วย เรียกว่าเดินขึ้นเขาเหนื่อยๆ ก็ไม่ต้องออกแรงทำกับข้าวให้เหนื่อยอีกเป็นสองเท่านอกจากมีบ้านพักและเต็นท์พักแรมให้บริการแล้ว ที่นี่ยังมีบริการลูกหาบ ทั้งหาบข้าวของเครื่องใช้และกระเป๋า สัมภาระของนักท่องเที่ยวที่ต้องการความสะดวกในการเดินขึ้นภู รวมถึงนักท่องเที่ยวที่ต้องการความสบายไม่ต้องเดินขึ้น ก็สามารถใช้บริการเสลี่ยงหามได้<br><br>\n          <img src="https://www.xn--72c5aba9c2a3b8a2m8ae.com/wp-content/uploads/2015/11/phukadungnation-02.jpg"><br>\n          นอกจากนี้ในเขตอุทยานยังห้ามก่อกองไฟ ห้ามนำสัตว์เลี้ยงขึ้นไปบนภู และห้ามนำภาชนะที่เป็นโฟมเข้าไปในพื้นที่อุทยาน<br><br>\n          <strong>ติดต่อ-สอบถาม :</strong> อุทยานแห่งชาติภูกระดึง โทรศัพท์ 042-871-333, 042-871-458 หรือ <a (click)="openURL()">nps.dnp.go.th</a><br>\n\n        </ion-card-content>\n      </ion-card>\n</ion-content>\n'/*ion-inline-end:"D:\RADAR\src\pages\tourist-winter\page_winter\North-East\phu-kradueng\phu-kradueng.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], PhuKraduengPage);
    return PhuKraduengPage;
}());

//# sourceMappingURL=phu-kradueng.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhuRueaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PhuRueaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PhuRueaPage = /** @class */ (function () {
    function PhuRueaPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    PhuRueaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-phu-ruea',template:/*ion-inline-start:"D:\RADAR\src\pages\tourist-winter\page_winter\North-East\phu-ruea\phu-ruea.html"*/'<!--\n  Generated template for the PhuRueaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Phu-Ruea</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\RADAR\src\pages\tourist-winter\page_winter\North-East\phu-ruea\phu-ruea.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], PhuRueaPage);
    return PhuRueaPage;
}());

//# sourceMappingURL=phu-ruea.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhuPaoForestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PhuPaoForestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PhuPaoForestPage = /** @class */ (function () {
    function PhuPaoForestPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    PhuPaoForestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-phu-pao-forest',template:/*ion-inline-start:"D:\RADAR\src\pages\tourist-winter\page_winter\North-East\phu-pao-forest\phu-pao-forest.html"*/'<!--\n  Generated template for the PhuPaoForestPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Phu-Pao-Forest</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\RADAR\src\pages\tourist-winter\page_winter\North-East\phu-pao-forest\phu-pao-forest.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], PhuPaoForestPage);
    return PhuPaoForestPage;
}());

//# sourceMappingURL=phu-pao-forest.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhaChaChanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PhaChaChanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PhaChaChanPage = /** @class */ (function () {
    function PhaChaChanPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    PhaChaChanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pha-cha-chan',template:/*ion-inline-start:"D:\RADAR\src\pages\tourist-winter\page_winter\Northeastern\pha-cha-chan\pha-cha-chan.html"*/'<!--\n  Generated template for the PhaChaChanPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ผาชะนะได อุทยานแห่งชาติผาแต้ม</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      <h1>ผาชะนะได อุทยานแห่งชาติผาแต้ม</h1>\n    </ion-card-header>\n    <ion-card-content>\n      <img src="https://travel.mthai.com/app/uploads/2012/10/phachanadai1.jpg">\n      <br>\n      ผาชะนะได เป็นสถานที่ท่องเที่ยวที่ดึงดูดใจด้วยหน้าผาที่ยื่นออกไปรับลมบนที่สูง ปกคลุมด้วยป่าสนสองใบ ทิวทัศน์เบื้องหน้าเป็นทิวเขาสลับซับซ้อน และ ผาชะนะได เป็นจุดที่กรมอุตุนิยมวิทยาใช้คำนวณพยากรณ์ดวงอาทิตย์ขึ้นของประเทศ ด้วยการเห็นลำแสงแรกเริ่มของ ตะวัน ณ เส้นแวงที่ 105 องศา 37 ลิปดา 17 ฟิลิปดา\n      <br><br>\n      <img src="https://travel.mthai.com/app/uploads/2012/10/phachanadai5.jpg">\n      <br>\n      อีกหลายจุดชมวิวทางผ่านไปสู่ของ ผาชะนะได คือ ลานดอกไม้ดิน และการชมพะลานหิน ได้แก่ พะลานหินวัดภูอานนท์ พะลานถ้ำไฮ พะลานภูโลง พะลานผายะยืด พะลานวัดถ้ำอมรถ้ำ ถ้ำปาฏิหาริย์ ถ้ำฝ่ามือแดงบ้านปากลา ผาที่วัดภูอานนท์โหง่นแต้ม เสาเฉลียง และหินโยกมหัศจรรย์ ซึ่งมีน้ำหนักประมาณ 50 ตัน แต่ใช้แรงเพียงคนเดียวโยกได้ หรือจะท่อง ป่าดงนาทาม ซึ่งมีความหลากหลายทางธรรมชาติ เป็นแหล่งเดินป่ายอดนิยมสำหรับนักผจญภัย<br><br>\n      <img src="https://travel.mthai.com/app/uploads/2012/10/phachanadai3.jpg">\n      <br>\n      และตามสูตรที่สูง ทะเลหมอก คือหนึ่งไฮไลท์ของ ผาชะนะได เชื่อกันว่า ใครมีโอกาสเห็นพระอาทิตย์ขึ้นเป็นคนแรก เปรียบเสมือนการเพิ่มพลังให้ชีวิตโชติช่วงดังแสงที่ตัดเส้นขอบฟ้า ช่วงเวลาที่สวยงามที่สุดของการเที่ยว ผาชนะได คือ ปลายฝนต้นหนาว (ปลายตุลาคม-กุมภาพันธ์) เพราะอากาศที่เริ่มเย็นทำให้ดอกไม้นานาชนิดบานสะพรั่ง<br><br>\n      <img src="https://travel.mthai.com/app/uploads/2012/10/phachanadai2.jpg">\n      <br>\n      <img src="https://travel.mthai.com/app/uploads/2012/10/phachanadai41.jpg">\n      <br>\n      การเดินทางสู่ ผาชนะได มี 3 เส้นทาง คือ<br>\n      <ul>\n          1. เริ่มจากวัดถ้ำปาฏิหาริย์ ผ่านน้ำตกกรีช ผ่านหินเต่าชมจันทร์ สักระยะจะผ่านตาน้ำ ต่อจากนั้นจะพบกับทุ่งหญ้า ลานดอกไม้ และพะลานหินถ้ำไฮ มาถึงเสาเฉลียงคู่ ซึ่งเป็นจุดชมวิวพระอาทิตย์ตกที่สวยงาม ต่อด้วยโหง่นแต้ม ถัดไปจึงเป็นจุดชมวิว “เนินสนสองใบ” และไม่นานก็ถึง น้ำตกห้วยพอก สิ้นสุดปลายทางของ ผาชนะได รวมระยะทางประมาณ 9 กิโลเมตร<br><br>\n          2. เริ่มจากจุดชมเถาวัลย์ยักษ์ ในเขต ต.นาโพธิ์กลาง ตลอดการเดินทางจะเห็นทิวทัศน์ของลำน้ำโขงและแมกไม้ และไฮไลท์สำคัญอย่าง ภูจ้อมก้อม หินโยกมหัศจรรย์ ขนาด 50 ตัน ที่สามารถโยกได้อย่างไม่น่าเชื่อ จากนั้นจะบรรจบกับเส้นทางที่หนึ่ง ตรงบริเวณเนินสนสองใบ เพื่อชมธรรมชาติหาดูยากอย่าง ต้นสนภูเขา รวมระยะทางประมาณ 18 กิโลเมตร<br><br>\n          3. เริ่มจากบ้านปากลา เป็นเส้นทางที่ท้าทายนักเดินป่า เพราะต้องผ่านช่องเขาและผาสูง ระหว่างทางจะพบจุดท่องเที่ยวที่สำคัญ ได้แก่ น้ำตกกวางโตน พะลานหินแตก เป็นจุดชมทะเลหมอก และพระอาทิตย์ขึ้ จากนั้นจะถึง ผากำปั่น ซึ่งอยู่ตรงข้ามกับ ผาชนะได เมื่อเดินต่อไปจะถึงลานที่พัก น้ำตกห้วยพอก สิ้นสุดจุดหมาย รวมระยะทางประมาณ 6-7 กิโลเมตร<br>\n      </ul>\n      <strong>สอบถามรายละเอียดข้อมูล ผาชนะได ได้ที่ </strong> อบต. นาโพธิ์กลาง โทรศัพท์ 0 4538 1063 หรือ อุทยานแห่งชาติผาแต้ม โทรศัพท์ 045 246 332 – 3\n\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"D:\RADAR\src\pages\tourist-winter\page_winter\Northeastern\pha-cha-chan\pha-cha-chan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], PhaChaChanPage);
    return PhaChaChanPage;
}());

//# sourceMappingURL=pha-cha-chan.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloudBridgeAtKhaoChangPhuakPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CloudBridgeAtKhaoChangPhuakPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CloudBridgeAtKhaoChangPhuakPage = /** @class */ (function () {
    function CloudBridgeAtKhaoChangPhuakPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    CloudBridgeAtKhaoChangPhuakPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cloud-bridge-at-khao-chang-phuak',template:/*ion-inline-start:"D:\RADAR\src\pages\tourist-winter\page_winter\West\cloud-bridge-at-khao-chang-phuak\cloud-bridge-at-khao-chang-phuak.html"*/'<!--\n  Generated template for the CloudBridgeAtKhaoChangPhuakPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>สะพานเมฆ ณ เขาช้างเผือก</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      <h1>สะพานเมฆ ณ เขาช้างเผือก</h1>\n    </ion-card-header>\n    <ion-card-content>\n      <img src="https://s.isanook.com/tr/0/rp/r/w700/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL3RyLzAvdWQvMjc4LzEzOTExMTEvMTEuanBn.jpg">\n      <br>\n      คุณเคยฝันหรือไม่ว่า ครั้งหนึ่งในชีวิตคุณจะได้ขึ้นไปบนท้องฟ้า สัมผัสและเหยียบเมฆได้  เชิญไปเที่ยว "หลงรักประเทศไทย" พิชิตความสูงและสัมผัสเมฆได้กับ "สะพานเมฆ" @ เขาช้างเผือก ที่ 1 ปี เปิดให้ชมเพียง 4 เดือนเท่านั้น\n      <br><br>\n      <img src="https://s.isanook.com/tr/0/ud/278/1391111/441700920ee5ab8eb5218809c6a2e265.jpg">\n      <br>\n      "เขาช้างเผือก" เป็นชื่อของยอดเขาที่สูงที่สุดของอุทยานแห่งชาติทองผาภูมิ มีความสูงประมาณ 1,249 เมตร จากระดับน้ำทะเลปานกลาง เป็นเส้นทางเดินป่าที่สวยงาม น่าตื่นตา จนทำให้นักเดินป่าทั่วไทยทั้งหน้าใหม่ หน้าเก่า ปรารถนาจะได้มาพิชิตซักครั้งหนึ่งในชีวิต เส้นทางเดินไปสู่ยอดเขาช้างเผือก เป็นป่าโปร่งสลับกับทุ่งหญ้า มีจุด Highlight ของการเดินทางอยู่ที่ "สันคมมีด" สันเขาที่สวยงาม และน่าหวาดเสียวไปพร้อมกัน เมื่อขึ้นไปถึงยอดเขา จะสามารถมองเห็นวิวได้รอบทิศทาง 360 องศา\n      <br><br>\n      <img src="https://s.isanook.com/tr/0/ud/278/1391111/495fd26565ddef3019cd309bd5afea05.jpg"><br>\n      เส้นทางพิชิตยอดเขาช้างเผือก มีระยะทางประมาณ 8 กิโลเมตร เหมาะสำหรับนักท่องเที่ยวที่นิยมการผจญภัย และมีร่างกายที่แข็งแรง ใช้เวลาเดินเท้า จากหมู่บ้านอีต่อง ประมาณ 6 ชั่วโมง และต้องพักค้างแบบกางเต้นท์บนยอดเขา โดยต้องประสานงานติดต่ออุทยาน ฯ จัดเจ้าหน้าที่เป็นผู้นำทาง และสามารถติดต่อจ้างในการช่วยขนสัมภาระ<br>\n      นี่คือ 1 ใน 10 แหล่งท่องเที่ยวในฝัน (Dream Destinations) ของประเทศไทยประจำปี 2557 กาลครั้งหนึ่ง...ต้องไป คุณไปแล้วจะ "หลงรัก"&"หลงรักประเทศไทย"\n      <br><br>\n      <strong>ข้อจำกัด</strong><br>\nพื้นที่กางเต้นท์บนยอดเขาที่มีพื้นที่จำกัด ไม่มีน้ำใช้ ห้องสุขา 2 ห้อง เป็นลักษณะส้วมหลุม และไม่มีสิ่งอำนวยความสะดวกใดๆ<br><br>\n      <strong>ติดต่อ</strong> อุทยานแห่งชาติทองผาภูมิ ตู้ ปณ 18 อ.ทองผาภูมิ จ. กาญจนบุรี 71180 โทรศัพท์ 0 3453 2114, 08 1382 0359 หรือ ททท. สำนักงานกาญจนบุรี 14 ถ.แสงชูโต อ.เมือง จ.กาญจนบุรี 71000\n      โทรศัพท์ 0 3451 1200, 0 3451 2500<br><br>\n      <strong>ข้อควรทราบ :</strong> \nอุทยานฯ จำกัดนักท่องเที่ยวขึ้นไปบนยอดเขาช้างเผือก จำนวน 60 - 80 คน/วัน ค่าบริการลูกหาบ คนละ 700 บาท (จำนวนลูกหาบที่ใช้ขึ้นอยู่กับจำนวนสัมภาระของแต่ละคณะ) ค่าบริการเจ้าหน้าที่อุทยานฯ ที่เป็นผู้นำทาง คนละ 700 บาท และ เปิดให้ท่องเที่ยวเดือนตุลาคม-กุมภาพันธ์ นักท่องเที่ยวควรมีการเตรียมความพร้อมร่างกายให้แข็งแรง ควรเตรียมหมวก เสื้อแขนยาว แว่นกันแดด ไฟฉาย ของใช้ส่วนตัว และอุปกรณ์การเดินทางที่เหมาะสม<br>\n\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"D:\RADAR\src\pages\tourist-winter\page_winter\West\cloud-bridge-at-khao-chang-phuak\cloud-bridge-at-khao-chang-phuak.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], CloudBridgeAtKhaoChangPhuakPage);
    return CloudBridgeAtKhaoChangPhuakPage;
}());

//# sourceMappingURL=cloud-bridge-at-khao-chang-phuak.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeereeWongPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the KeereeWongPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var KeereeWongPage = /** @class */ (function () {
    function KeereeWongPage(navCtrl, inAppBrowser) {
        this.navCtrl = navCtrl;
        this.inAppBrowser = inAppBrowser;
    }
    KeereeWongPage.prototype.openUrl1 = function () {
        this.inAppBrowser.create("https://www.facebook.com/%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%9E%E0%B8%B1%E0%B8%81%E0%B8%98%E0%B8%B2%E0%B8%A3%E0%B8%84%E0%B8%B5%E0%B8%A3%E0%B8%B5%E0%B8%A3%E0%B8%B5%E0%B8%AA%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%97-_%E0%B8%AB%E0%B8%A1%E0%B8%B9%E0%B9%88%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%B5%E0%B8%A3%E0%B8%B5%E0%B8%A7%E0%B8%87-1788580561160499/");
    };
    KeereeWongPage.prototype.openUrl2 = function () {
        this.inAppBrowser.create("https://www.facebook.com/lookmaihomestay/");
    };
    KeereeWongPage.prototype.openUrl3 = function () {
        this.inAppBrowser.create("https://www.facebook.com/BantonnamHomestay/");
    };
    KeereeWongPage.prototype.openUrl4 = function () {
        this.inAppBrowser.create("https://www.facebook.com/bansuanwangmaipak/");
    };
    KeereeWongPage.prototype.openUrl5 = function () {
        this.inAppBrowser.create("https://www.facebook.com/SaunPrangwhanKiriwog");
    };
    KeereeWongPage.prototype.openUrl6 = function () {
        this.inAppBrowser.create("https://www.facebook.com/ahomestaykiriwong");
    };
    KeereeWongPage.prototype.openUrl7 = function () {
        this.inAppBrowser.create("https://www.facebook.com/seuahwanhomestay/");
    };
    KeereeWongPage.prototype.openUrl8 = function () {
        this.inAppBrowser.create("https://www.facebook.com/bansauntachit.kiriwong");
    };
    KeereeWongPage.prototype.openUrl9 = function () {
        this.inAppBrowser.create("https://www.facebook.com/kanumnaithung/");
    };
    KeereeWongPage.prototype.openLittleHouseInTheValley = function () {
        this.inAppBrowser.create("https://www.facebook.com/LittleHouseInTheValleyThailand/");
    };
    KeereeWongPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-keeree-wong',template:/*ion-inline-start:"D:\RADAR\src\pages\tourist-winter\page_winter\Southern\keeree-wong\keeree-wong.html"*/'<!--\n  Generated template for the KeereeWongPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>หมู่บ้านคีรีวง</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      <h1>เที่ยวคีรีวง ยลเสน่ห์ความเรียบง่ายและวิถีชาวบ้านกลางขุนเขา</h1>\n    </ion-card-header>\n    <ion-card-content>\n      <img src="https://img.live/images/2018/10/17/v700.jpg" alt="v700.jpg">\n      <br>\n      <strong>เรื่องน่ารู้บ้านคีรีวง จังหวัดนครศรีธรรมราช แหล่งท่องเที่ยวธรรมชาติที่แสนสงบ ท่ามกลางขุนเขาโอบล้อม สัมผัสเสน่ห์วิถีชีวิตชาวบ้านที่เรียบง่ายและน่าค้นหา</strong>\n      <br>\n      บ้านคีรีวง หมู่บ้านเล็ก ๆ ในจังหวัดนครศรีธรรมราช ที่นี่นับเป็นแหล่งท่องเที่ยวที่สะท้อนถึงสายใยการอยู่ร่วมกันระหว่างชุมชนและธรรมชาติได้อย่างกลมกลืน จึงไม่แปลกใจเลยว่า ทำไมนักท่องเที่ยวหลายคนถึงติดใจและหลงเสน่ห์ของบ้านคีรีวงกันเป็นแถว ๆ วันนี้เราเลยอยากที่จะพาเพื่อน ๆ ออกเดินทางไปทำความรู้จักกับ "บ้านคีรีวง" ให้มากขึ้นกัน และไม่แน่ว่าคุณอาจจะเห็นอีกหนึ่งมุมที่มีเสน่ห์ของบ้านคีรีวง และถ้าลองไปเห็นด้วยตาตัวเองด้วยแล้ว จะยิ่งหลงรักเป็นเท่าตัว<br>\n      <br>\n      <strong>1. ที่ตั้งและประวัติหมู่บ้านคีรีวง</strong><br>\n      <br>\n      ตั้งอยู่ที่ตำบลกำโลน อำเภอลานสกา จังหวัดนครศรีธรรมราช เป็นชุมชนเก่าแก่ที่อพยพไปอาศัยอยู่เชิงเขาหลวง เดิมชุมชนนี้มีชื่อว่า "บ้านขุนน้ำ" เพราะตั้งอยู่ใกล้ต้นน้ำจากยอดเขาหลวง ต่อมาเปลี่ยนเป็นชื่อ "บ้านคีรีวง" หมายถึง หมู่บ้านซึ่งอยู่ภายในวงล้อมของภูเขา\n      <br><br>\n      <strong>2. เสน่ห์ของบ้านคีรีวง</strong><br><br>\n      เสน่ห์ของบ้านคีรีวงที่เป็นที่กล่าวขานในหมู่นักท่องเที่ยว นั่นคือความสงบและความเงียบ การสัมผัสวิถีชีวิตแบบชนบท อิ่มไปกับบรรยากาศหมู่บ้านกลางหุบเขา ฟังเสียงน้ำไหล ผ่านแก่งหินต่าง ๆ ไหลรวมเป็นแม่น้ำสายเล็ก ๆ ผ่านกลางหมู่บ้าน จนกลายเป็นชุมชนต้นแบบในการจัดการธุรกิจท่องเที่ยวเชิงนิเวศ ได้รับรางวัลยอดเยี่ยมอุตสาหกรรมท่องเที่ยว (Thailand Tourism Awards) ประจำปี 2541 ประเภทเมืองและชุมชน<br>\n      <br>\n      <strong>3. กิจกรรมห้ามพลาดเมื่อมาเที่ยวบ้านคีรีวง</strong><br><br>\n      <img src="https://img.live/images/2018/10/17/2.jpg">\n      <br><br>\n      ไม่ต้องห่วงว่ามาเที่ยวบ้านคีรีวงแล้วจะไม่มีกิจกรรมสนุก ๆ ให้ทำ บอกเลยว่าที่นี่มีกิจกรรมให้นักท่องเที่ยวได้ทำแบบไม่รู้เบื่อ เช่นนอนโฮมสเตย์ของชาวบ้านแบบใกล้ชิดธรรมชาติ, เที่ยวชมสวนผลไม้ ใครมาเที่ยวบ้านคีรีวงในช่วงฤดูผลไม้ (ประมาณเดือนกรกฎาคม-ตุลาคม ของทุกปี) คุณจะอิ่มหนำไปกับผลไม้นานาชนิด เช่น จำปาดะ มังคุด เงาะ และลองกอง เป็นต้น ให้นักท่องเที่ยวได้เลือกซื้อและชิมกันจนอิ่มท้อง, เล่นน้ำในลำธาร สำหรับนักท่องเที่ยวคนไหนอยากลงเล่นน้ำ แล้วกังวลว่าเสื้อเปียกแล้วจะเปลี่ยนชุดที่ไหน ไม่ต้องห่วง เพราะบางร้านค้าเปิดบริการห้องน้ำ ไว้สำหรับให้เราได้อาบน้ำและเปลี่ยนเสื้อผ้าได้ค่ะ และปั่นจักรยานรอบหมู่บ้านชิล ๆ ฯลฯ\n      <br><br>\n      <strong>4. จุดท่องเที่ยวไฮไลท์ของบ้านคีรีวง</strong><br><br>\n      <img src="https://img.live/images/2018/10/17/3.jpg">\n      <br><ul>\n        <strong> - จุดที่ 1</strong>"สะพานบ้านคีรีวง" เป็นจุดแลนด์มาร์กสำคัญที่ไม่ว่าใครก็ต้องมาถ่ายรูป เหมือนกับว่าถ้าใครไม่ได้มาถ่ายรูปกับสะพานนี้ก็เหมือนมาไม่ถึงบ้านคีรีวง<br>\n        <strong> - จุดที่ 2</strong>"หนานหินท่าหา" มีลักษณะเป็นลำคลอง ช่วงฤดูท่องเที่ยวจะมีนักท่องเที่ยวมาเล่นน้ำที่บริเวณนี้กันอย่างสนุกสนาน<br>\n        <strong> - จุดที่ 3</strong>"สะพานแขวน-ท่าหา" อยู่ไม่ไกลจากหนานหินท่านา เป็นสะพานแขวนเล็ก ๆ ล้อมรอบด้วยวิวป่าเขา เอาไว้เป็นอีกหนึ่งที่ถ่ายรูปสวย ๆ ของบ้านคีรีวง<br>\n        <strong> - จุดที่ 4</strong>"ตลาดบ้านคีรีวง" ตลาดเล็ก ๆ อยู่ไม่ไกลจากสะพานบ้านคีรีวง นักท่องเที่ยวจะได้เดินเลือกซื้อของกินต่าง ๆ มากมาย จนอยากซื้อติดมือกลับไปเป็นของฝากให้กับคนที่บ้าน<br>\n      </ul>\n      <strong>5. ยลวิถีชาวบ้านกับกลุ่มอาชีพต่าง ๆ ของบ้านคีรีวง</strong><br><br>\n      <img src="https://img.live/images/2018/10/17/43176f.jpg">\n      <br>\n      นอกจากธรรมชาติสวย ๆ ของบ้านคีรีวงแล้ว อีกหนึ่งสิ่งที่พลาดไม่ได้ นั่นคือการตระเวนเยี่ยมชมกลุ่มอาชีพที่เกิดจากการรวมตัวของชาวบ้านเป็นกลุ่มต่าง ๆ เช่น "กลุ่มลูกไม้" เป็นกลุ่มที่รวมตัวกันสร้างสรรค์ผลิตภัณฑ์จากเมล็ดพืช, "กลุ่มมัดย้อมสีธรรมชาติ" ชมผลิตภัณฑ์ผ้าบาติกสวย ๆ, "กลุ่มใบไม้บ้านคีรีวง" ชมผ้ามัดย้อมทำจากสีธรรมชาติจากเปลือกไม้ เป็นต้น บอกเลยว่าเที่ยวเพลินได้ทั้งวัน\n      <br><br>\n      <strong>6. ที่พักบ้านคีรีวงที่น่าสนใจ</strong>\n      <br><br>\n      <img src="https://img.live/images/2018/10/17/5.jpg">\n      <br>\n      บ้านคีรีวงมีที่พักเปิดให้บริการมากมาย มีให้เลือกทั้งแบบโฮมเสตย์และรีสอร์ท หลายที่สามารถวอล์กอินเข้าหาที่พักได้เลย แต่ถ้าเป็นช่วงวันหยุดหรือไปกันหลายคน แนะนำให้โทร. จองกับทางที่พักก่อนจะดีที่สุด\n      <br><ul>\n          - บ้านพักธารคีรีรีวอร์ท โทรศัพท์ 081 080 7541, 065 498 8871 หรือ  <a (click)="openUrl1()"> บ้านพักธารคีรีรีสอร์ท หมู่บ้านบ้านคีรีวง</a><br>\n          - ลูกไม้โฮมสเตย์บ้านคีรีวง โทรศัพท์ 081 978 1352 หรือ <a (click)="openUrl2()"> ลูกไม้โฮมสเตย์บ้านคีรีวง บ้านพักใกล้ลำธาร</a><br>\n          - บ้านต้นน้ำโฮมสเตย์คีรีวง โทรศัพท์ 087 882 1600 หรือ <a (click)="openUrl3()"> บ้านต้นน้ำโฮมสเตย์คีรีวง</a><br>\n          - บ้านคีรีวงบ้านสวนร่มไม้ โทรศัพท์ 080 697 0377 หรือ <a (click)="openUrl4()"> บ้านคีรีวงบ้านสวนร่มไม้</a><br>\n          - สวนปรางหวาน บ้านคีรีวง โทรศัพท์ 093 651 4099 หรือ <a (click)="openUrl5()"> สวนปรางหวาน บ้านคีรีวง</a><br>\n          - บ้านพี่เอโฮมสเตย์ โทรศัพท์ 086 478 9465, 085 036 5656 หรือ <a (click)="openUrl6()"> ที่พักบ้านคีรีวง บ้านพี่เอโฮมสเตย์ บ้านคีรีวงก์</a><br>\n          - ซือวานโฮมสเตย์คีรีวง โทรศัพท์ 096 428 8988 หรือ <a (click)="openUrl7()"> ซือวานโฮมสเตย์คีรีวง</a><br>\n          - บ้านสวนตาชิต โทรศัพท์ 089 514 4179 หรือ <a (click)="openUrl8()"> บ้านสวนตาชิด บ้านคีรีวง</a><br>\n          - ขนำนายทั่ง ณ คีรีวง โทรศัพท์ 081 866 3894 หรือ <a (click)="openUrl9()"> ขนำนายทั่ง ณ คีรีวง</a><br>\n      </ul>\n\n      <strong>7. ร้านกาแฟน่านั่งที่บ้านคีรีวง</strong>\n      <br>\n      สำหรับนักท่องเที่ยวสายนั่งชิลที่อยากหาร้านกาแฟสักร้าน ที่บ้านคีรีวงก็มีร้านกาแฟน่านั่งให้นักท่องเที่ยวได้เช็กอินอยู่เหมือนกัน เช่น<br>\n      <br><strong>  - ณ บ้านเล็กกลางหุบเขา บ้านคีรีวง</strong><br><br>\n      <img src="https://img.live/images/2018/10/17/6f9b79.jpg"><br>\n      <img src="https://img.live/images/2018/10/17/7ab5ee.jpg"><br>\n      ตั้งอยู่บนเนินสูงใกล้กับคลองเขาแก้ว จุดเด่นของที่ร้านอยู่ที่บรรยากาศชวนฟิน วิวด้านหลังร้านเป็นภูเขาสวย ตัวร้านจึงถูกโอบล้อมด้วยความเขียวขจีของขุนเขา ภายในเน้นการตกแต่งสไตล์ลอฟท์ ดูเก๋และทันสมัย และพร้อมเสิร์ฟเมนูเครื่องดื่มเย็น ๆ เช่น กาแฟ, ชามะนาว, ชานมเย็น และนมสดเย็น เป็นต้น (สอบถามข้อมูลเพิ่มเติมได้ที่ <a (click)="openLittleHouseInTheValley()">ณ บ้านเล็กกลางหุบเขา Little House in the Valley</a> )\n      <br><br>\n      <img src="https://img.live/images/2018/10/17/8.jpg">\n      <br>\n      <img src="https://img.live/images/2018/10/17/9.jpg">\n      <br>\n      ร้านกาแฟวิวหลักล้านของบ้านคีรีวง วิวสวย บรรยากาศงาม ยิ่งถ้ามาช่วงพระอาทิตย์กำลังลับขอบฟ้า บอกเลยว่าละสายตาแทบไม่ลง พร้อมเสิร์ฟเมนูเครื่องดื่มต่าง ๆ กาแฟสดหอม ๆ รวมถึงเบเกอรี่โฮมเมดแสนอร่อย ที่ทางร้านบรรจงคัดสรรทำอย่างตั้งใจ นอกจากนี้ยังมีเมนูอาหารน่ากินอีกเพียบ เช่น แกงคั่วหอยขมใบชะพลู, แกงส้มปลากระบอกมังคุดคัด และเมี่ยงปลากะพง เป็นต้น สอบถามข้อมูลเพิ่มเติมได้ที่ โทรศัพท์ 097 126 6888 <br>\n      <br>\n      <strong>  - Check in Café</strong><br>\n      ร้านอยู่ติดกับหนานหินท่า หนึ่งในจุดเช็กอินยอดฮิตของนักท่องเที่ยว ร้านเน้นการตกแต่งเรียบง่าย ผนังปูนเปลือยเปล่า พร้อมเสิร์ฟเมนูเครื่องดื่มและอาหารน่ากินอยู่ไม่น้อย นอกจากเครื่องดื่มกาแฟเรียกความสดชื่นแล้ว ยังมีเมนูอาหารถิ่นภาคใต้ อย่าง "กุ้งผัดสะตอ" และ "แกงส้ม" หรือจะเป็นอาหารอิตาเลียนก็มีให้คุณได้ลิ้มลอง สอบถามข้อมูลเพิ่มเติมได้ที่ โทรศัพท์ 092 964 4519, 083 523 8856<br>\n\n\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"D:\RADAR\src\pages\tourist-winter\page_winter\Southern\keeree-wong\keeree-wong.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], KeereeWongPage);
    return KeereeWongPage;
}());

//# sourceMappingURL=keeree-wong.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DamSPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DamSPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DamSPage = /** @class */ (function () {
    function DamSPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DamSPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DamSPage');
    };
    DamSPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dam-s',template:/*ion-inline-start:"D:\RADAR\src\pages\rain\T-rain\s\dam-s\dam-s.html"*/'<!--\n  Generated template for the DamSPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>เขื่อนรัชชประภา</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card>\n        <ion-card-header>\n          <h1>เขื่อนรัชชประภา</h1>\n        </ion-card-header>\n        \n        <ion-card-content>\n            <img src="https://img.live/images/2018/10/17/19c547.jpg "><br>\n            <br><br>\n            เขื่อนรัชชประภา หรือเขื่อนเชี่ยวหลาน ตั้งอยู่ติดต่อกับอุทยานแห่งชาติเขาสก จังหวัดสุราษฎร์ธานี ที่นี่กลายเป็นสถานที่ท่องเที่ยวที่น่าสนใจอันดับต้น ๆ ของเมืองไทย ด้วยเต็มไปด้วยธรรมชาติของป่าเขาและสายน้ำที่งดงาม เป็นแหล่งท่องเที่ยวพักผ่อนหย่อนใจที่ดีมาก ๆ สำหรับคนที่ชอบความเงียบสงบ แต่หลายคนก็อาจจะยังเริ่มไม่ถูกว่าถ้าจะไปเที่ยวที่นี่ควรเริ่มต้นอย่างไร วันนี้เรามีข้อน่ารู้และเกร็ดท่องเที่ยวเขื่อนรัชชประภาเล็ก ๆ น้อย ๆ มาฝากกันค่ะ\n            <br><br>\n            <img src="https://img.live/images/2018/10/17/224afb.jpg"><br>\n            <br><br><ul>\n                1. เขื่อนรัชชประภา มีชื่อเรียกอีกอย่างว่าเขื่อนเชี่ยวหลาน ซึ่งมีพื้นที่เชื่อมต่อกับอุทยานแห่งชาติเขาสก<br><br>\n                2. ที่ชาวบ้านเรียกที่นี่กันว่าเขาสก เพราะพื้นที่ส่วนหนึ่งบริเวณอ่างเก็บน้ำและแหล่งท่องเที่ยวส่วนใหญ่จะอยู่ในพื้นที่ของอุทยานแห่งชาติเขาสก<br><br>\n                3. ด้วยความที่บริเวณอ่างเก็บน้ำในเขื่อนรัชชประภามีภูเขาหินปูนรูปร่างสวยงามแปลกตาตั้งตระหง่านอย่างโดดเด่นมากมาย นักท่องเที่ยวจึงขนานนามว่าที่นี่คือกุ้ยหลินเมืองไทย<br>\n                <br><br>\n                <img src="https://img.live/images/2018/10/17/33ebcd.jpg "><br>\n                4. นอกจากนี้แล้วเสน่ห์ของเขื่อนรัชชประภา ยังอยู่ที่ธรรมชาติของป่าไม้ที่อุดมสมบูรณ์ บรรยากาศเงียบสงบ อากาศเย็นสบายสดชื่นมาก อีกทั้งน้ำในเขื่อนยังสวยใส มีสีเขียวมรกต มองเห็นปลาต่าง ๆ ได้อย่างชัดเจน<br>\n                <br><img src="https://img.live/images/2018/10/17/4e2a7e.jpg"><br>\n                5. การไปเที่ยวเขื่อนเชี่ยวหลาน ถ้าจะไปเที่ยวชมวิวสวย ๆ โดยไม่นอนค้างบนแพกลางน้ำก็ได้ค่ะ ก็จะมีจุดชมวิวอยู่บริเวณสันเขื่อน หรือบริเวณที่ทำการของเขื่อน หากใครอยากนั่งเรือชมวิวก็มีบริการเรือนำเที่ยวด้วยเช่นกัน\n                <br><br>\n                6. หากต้องการไปพักแพบ้านพักในเขื่อนรัชชประภา ที่พักส่วนใหญ่จะจัดเป็นแพ็กเกจให้กับลูกค้า เช่น 2 วัน 1 คืน รวมอาหาร 2 มื้อ, 3 วัน 1 คืน รวมอาหาร 5 มื้อ ฯลฯ บางที่พักก็มีแบบแยกจอง ใครอยากจองแต่ห้องพักก็ได้ ไม่รวมอาหาร สามารถสอบถามได้โดยตรงจากแพที่จะเข้าพักได้เลย<br>\n                <br><img src="https://img.live/images/2018/10/17/5cf138.jpg"><br>\n                7. แพที่พักแต่ละแห่งจะต้องนั่งเรือออกไป เพราะฉะนั้นก่อนจองที่พักถามทางรีสอร์ทให้แน่ใจ ว่าราคาที่จ่ายไปนั้นได้สิทธิประโยชน์อะไรบ้าง รวมค่าเรือด้วยไหม\n                <br><br>\n                8. แนะนำว่าถ้าใครไปช่วงเทศกาลหรือวันหยุดยาว ให้จองเรือไว้ดีกว่าแต่ถ้าไปวันธรรมดาก็จะมีเรือไว้บริการพอเพียง ไม่ต้องจองไว้ก็ได้\n                <br><br>\n                <img src="https://img.live/images/2018/10/17/697fbf.jpg"><br>\n                9. เรือหางยาวที่ให้บริการในเขื่อนรัชชประภา ส่วนใหญ่เป็นแบบเช่าเหมาลำ นั่งได้ประมาณ 8-10 คน ราคาอยู่ที่ประมาณ 2,000-4,500 บาท (ขึ้นอยู่กับว่าแพที่พักไกลมากน้อยแค่ไหน) สอบถามข้อมูลเพิ่มเติมได้จากแพที่จะเข้าพัก หรือรุ่งโรจน์บริการเรือนำเที่ยวเขื่อนรัชชประภา โทรศัพท์ 08 7882 5011, 08 7269 1466\n                <br><br>\n                10. นอกจากการจองแพ็กเกจกับที่พักแล้ว ก็ยังมีบริษัททัวร์หลายแห่งในจังหวัดสุราษฎร์ธานีให้บริการพาเที่ยวเขื่อนรัชชประภาด้วย ทั้งนี้อยากให้ลองหาข้อมูลให้เยอะ ๆ ก่อนที่จะตกลงซื้อทัวร์ เพราะบางทีการไปเที่ยวเองก็มีค่าใช้จ่ายที่ถูกกว่า\n                <br><br>\n                <img src="https://img.live/images/2018/10/17/707825.jpg"><br>\n                11. บริเวณแพที่พักบางแห่ง อาจจะไม่มีสัญญาณโทรศัพท์ เพราะฉะนั้นก่อนไปเที่ยวต้องเตรียมใจไว้ระดับหนึ่งว่าต้องตัดขาดโลกภายนอกสักวันสองวัน\n                <br><br>\n                12. ถ้าอยากไปเที่ยวนอนพักบนแพกลางน้ำในเขื่อนรัชชประภาแต่ไม่รู้จะเริ่มอย่างไร แนะนำขั้นตอนง่าย ๆ ดังนี้ค่ะ\n                <br><br>\n                <img src="https://img.live/images/2018/10/17/84f0e7.jpg"><br>\n                13. การเดินทางไปยังเขื่อนรัชชประภา จากตัวเมืองสุราษฎร์ธานี นักท่องเที่ยวสามารถที่จะเดินทางไปได้หลายวิธี ดังนี้\n                <br><br><ul>\n                    - ถ้ามาโดยรถยนต์ส่วนตัว จากกรุงเทพฯ ขับผ่านจังหวัดประจวบคีรีขันธ์ จังหวัดชุมพร จนเข้าจังหวัดสุราษฎร์ธานี ขับมาตามทางหลวงแผ่นดินหมายเลข 41 จนถึงแยกอำเภอพุนพิน ให้เลี้ยวขวาเข้าสู่ทางหลวงหมายเลย 401 ขับไปเรื่อย ๆ จะมีป้ายบอกทางไปเขื่อนรัชชประภา (เขื่อนเชี่ยวหลาน)\n                    <br>\n                    - ถ้ามาจากสนามบินสุราษฎร์ธานี นักท่องเที่ยวสามารถเช่าแท็กซี่มาได้เลย หรือนั่ง Airport Bus เข้าไปที่ตัวเมืองสุราษฎร์ธานี จากนั้นให้ต่อรถตู้บริเวณตลาดเกษตร 2 ไปที่เขื่อนรัชชประภา\n                    <br>\n                    - ถ้ามาโดยรถไฟ ให้ลงที่สถานีรถไฟสุราษฎร์ธานี แล้วต่อรถบัสที่ให้บริการเส้นทางสุราษฎร์ธานี-ภูเก็ต เพื่อไปลงที่ปากทางเข้าเขื่อนรัชชประภา\n                    <br>\n                </ul>\n                <br>\n                <img src="https://img.live/images/2018/10/17/9cbbb9.jpg"><br>\n                14. การไปนอนพักบนแพในเขื่อนรัชชประภา แพที่พักบางแห่งจะมีเวลากำหนดในการใช้ไฟฟ้า เพราะฉะนั้นควรเตรียมไฟฉายไปด้วย เผื่อไว้ใช้ยามฉุกเฉิน และควรเตรียมยาประจำตัวและของใช้ส่วนตัวที่จำเป็นไปด้วย ใครที่แพ้ยุงก็อย่าลืมยาทากันยุงด้วยนะคะ\n                <br><br>\n                15. ช่วงเวลาที่น่าไปเที่ยวเขื่อนรัชชประภา อันที่จริงแล้วที่นี่สามารถเที่ยวได้ตลอดทั้งปี ขึ้นอยู่กับว่าใครชอบบรรยากาศแบบไหน ในช่วงหน้าร้อนอากาศอาจจะร้อนสักนิด แต่ท้องฟ้าสดใส ถ่ายรูปสวย ส่วนช่วงหน้าฝนจะอากาศสดชื่นเย็นสบาย ภูเขาและธรรมชาติจะมีสีเขียวขจี บางวันยังจะได้เห็นหมอก อีกทั้งยังเป็นช่วงที่นักท่องเที่ยวไม่หนาแน่นอีกด้วย แต่ถ้าใครชอบอากาศเย็น ๆ หนาว ๆ ต้องไปช่วงปลายปี แต่ช่วงนี้ก็จะมีนักท่องเที่ยวเยอะด้วยเช่นกัน\n                <br><br>\n                16. หากต้องการข้อมูลเพิ่มเติม สามารถสอบถามเพิ่มเติมได้ที่อุทยานแห่งชาติเขาสก โทรศัพท์ 0 7739 5139, 0 7739 5154-5 การท่องเที่ยวแห่งประเทศไทย สำนักงานสุราษฎร์ธานี โทรศัพท์ 0 7728 8818-9\n\n\n\n\n            \n              </ul>\n        </ion-card-content>\n      </ion-card>\n</ion-content>\n'/*ion-inline-end:"D:\RADAR\src\pages\rain\T-rain\s\dam-s\dam-s.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], DamSPage);
    return DamSPage;
}());

//# sourceMappingURL=dam-s.js.map

/***/ })

},[224]);
//# sourceMappingURL=main.js.map