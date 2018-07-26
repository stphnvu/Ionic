webpackJsonp([5],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DashboardPage = /** @class */ (function () {
    function DashboardPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardPage');
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"C:\Users\STEPHANIA\Desktop\Ionic\myApp\src\pages\dashboard\dashboard.html"*/'<!--\n  Generated template for the DashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n</ion-header>\n\n\n<ion-footer>\n    <ion-fab right bottom>\n        <button ion-fab color="danger"><ion-icon name="add"></ion-icon></button>\n    </ion-fab>\n    <ion-toolbar>\n      <ion-segment [(ngModel)]="icons" color="dark">\n        <ion-segment-button value="home" (click)="dashboard()">\n          <ion-icon name="home"></ion-icon>\n        </ion-segment-button>\n        <ion-segment-button value="bookmark">\n          <ion-icon name="chatboxes"></ion-icon>\n        </ion-segment-button>\n        <ion-segment-button value="contact">\n          <ion-icon name="contact"></ion-icon>\n        </ion-segment-button>\n      </ion-segment>\n    </ion-toolbar>\n  </ion-footer>\n'/*ion-inline-end:"C:\Users\STEPHANIA\Desktop\Ionic\myApp\src\pages\dashboard\dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 113:
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
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/dashboard/dashboard.module": [
		273,
		4
	],
	"../pages/login/login.module": [
		275,
		3
	],
	"../pages/messages/messages.module": [
		274,
		2
	],
	"../pages/profile/profile.module": [
		276,
		1
	],
	"../pages/register/register.module": [
		277,
		0
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
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(28);
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
    HomePage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        //agregar lo que investigaron de hacer rootpage "Home" <-- en este caso LOGIN
    };
    HomePage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\STEPHANIA\Desktop\Ionic\myApp\src\pages\home\home.html"*/'\n<ion-content padding>\n  <br>\n  <br>\n  <img src="assets/imgs/Picture1.png" class="center"/>\n  <br>\n  \n  <ion-list>\n\n  <ion-item>\n    <ion-input type="email" placeholder="e-mail"></ion-input>\n  </ion-item>\n  \n  <ion-item>\n    <!-- <ion-input type="password" placeholder="password" </ion-input>[(ngModel)]="passCode"></ion-input> -->\n    <ion-input type="password" placeholder="password"></ion-input>\n  </ion-item>\n\n</ion-list>\n<!-- <button ion-button color="light" (click)="login()" round class="center2"[disabled]="passCode.length <  8" >Login -->\n<button ion-button color="bitelink" (click)="login()" round class="center2">Login</button>\n<ion-label type="text" class="center3"><hr> or </ion-label>\n\n<button ion-button color="bitelink" (click)="register()" round class="center2">\nRegister Now\n</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\STEPHANIA\Desktop\Ionic\myApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object])
    ], HomePage);
    return HomePage;
    var _a;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_register_register__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_dashboard_dashboard__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_messages_messages__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(197);
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
                __WEBPACK_IMPORTED_MODULE_5__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_messages_messages__["a" /* MessagesPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__["a" /* ProfilePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/messages/messages.module#MessagesPageModule', name: 'MessagesPage', segment: 'messages', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_messages_messages__["a" /* MessagesPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__["a" /* ProfilePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_profile_profile__ = __webpack_require__(42);
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
            { title: 'Profile', component: __WEBPACK_IMPORTED_MODULE_5__pages_profile_profile__["a" /* ProfilePage */] } //,
            // {title: 'nombre de la lista', component: Pagina a la que quieres}
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\STEPHANIA\Desktop\Ionic\myApp\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\STEPHANIA\Desktop\Ionic\myApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messages_messages__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(42);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.messages = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__messages_messages__["a" /* MessagesPage */]);
    };
    LoginPage.prototype.profile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\STEPHANIA\Desktop\Ionic\myApp\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <ion-title>Home</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-searchbar (ionInput)="getItems($event)" small></ion-searchbar>\n    <ion-fab right bottom>\n        <button ion-fab color="bitelink">\n          <ion-icon name="add">\n\n          </ion-icon>\n        </button>\n    </ion-fab>\n    \n    <ion-list>\n      <ion-item *ngFor="let item of items">\n        {{ item }}\n      </ion-item>\n    </ion-list>\n\n    <ion-card>\n        <ion-item>\n          <ion-avatar item-start>\n            <img src="img/marty-avatar.png">\n          </ion-avatar>\n          <h2>Marty McFly</h2>\n          <p>November 5, 1955</p>\n        </ion-item>\n      \n        <img src="img/advance-card-bttf.png">\n      \n        <ion-card-content>\n          <p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.</p>\n        </ion-card-content>\n      \n        <ion-row>\n          <ion-col>\n            <button ion-button icon-start clear small color="bitelink">\n              <ion-icon name="thumbs-up"></ion-icon>\n              <div>12 Likes</div>\n            </button>\n          </ion-col>\n          <ion-col>\n            <button ion-button icon-start clear small color="bitelink">\n              <ion-icon name="text"></ion-icon>\n              <div>4 Comments</div>\n            </button>\n          </ion-col>\n          <ion-col center text-center>\n            <ion-note>\n              11h ago\n            </ion-note>\n          </ion-col>\n        </ion-row>\n      \n      </ion-card>\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar>\n      <ion-segment [(ngModel)]="icons" color="bitelink">\n        <ion-segment-button value="home">\n          <ion-icon name="home"></ion-icon>\n        </ion-segment-button>\n        <ion-segment-button value="chatboxes" (click)="messages()">\n          <ion-icon name="chatboxes"></ion-icon>\n        </ion-segment-button>\n        <ion-segment-button value="contact" (click)="profile()">\n          <ion-icon name="contact"></ion-icon>\n        </ion-segment-button>\n      </ion-segment>\n    </ion-toolbar>\n  </ion-footer>\n\n\n'/*ion-inline-end:"C:\Users\STEPHANIA\Desktop\Ionic\myApp\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(42);
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
 * Generated class for the MessagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MessagesPage = /** @class */ (function () {
    function MessagesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MessagesPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    MessagesPage.prototype.profile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */]);
    };
    MessagesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-messages',template:/*ion-inline-start:"C:\Users\STEPHANIA\Desktop\Ionic\myApp\src\pages\messages\messages.html"*/'<!--\n  Generated template for the MessagesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  \n  <ion-navbar>\n    <ion-title>Messages</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n    <ion-list>\n      <ion-item *ngFor="let item of items">\n        {{ item }}\n      </ion-item>\n    </ion-list>\n      \n    <ion-content>\n      <ion-list>\n        <ion-list-header>\n          Recent Conversations\n        </ion-list-header>\n      \n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avatar-finn.png">\n      </ion-avatar>\n      <h2>Finn</h2>\n      <h3>I\'m a big deal</h3>\n      <p>Listen, I\'ve had a pretty messed up day...</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avatar-han.png">\n      </ion-avatar>\n      <h2>Han</h2>\n      <h3>Look, kid...</h3>\n      <p>I\'ve got enough on my plate as it is, and I...</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avatar-rey.png">\n      </ion-avatar>\n      <h2>Rey</h2>\n      <h3>I can handle myself</h3>\n      <p>You will remove these restraints and leave...</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avatar-luke.png">\n      </ion-avatar>\n      <h2>Luke</h2>\n      <h3>Your thoughts betray you</h3>\n      <p>I feel the good in you, the conflict...</p>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>\n      Online\n    </ion-list-header>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avatar-poe.png">\n      </ion-avatar>\n      <h2>Poe</h2>\n      <h3>New Ride</h3>\n      <p>I just upgraded my X-Wing. Next time...</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avatar-ben.png">\n      </ion-avatar>\n      <h2>Ben</h2>\n      <h3>Move Along</h3>\n      <p>These aren\'t the droids you\'re looking for...</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avatar-leia.png">\n      </ion-avatar>\n      <h2>Leia</h2>\n      <h3>You\'re My Only Hope</h3>\n      <p>I\'ve placed information vital to the survival...</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/avatar-yoda.png">\n      </ion-avatar>\n      <h2>Yoda</h2>\n      <h3>Size matters not</h3>\n      <p>Do or do not. There is no try...</p>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar>\n      <ion-segment [(ngModel)]="icons" color="bitelink">\n        <ion-segment-button value="home" (click)="login()">\n          <ion-icon name="home"></ion-icon>\n        </ion-segment-button>\n        <ion-segment-button value="chatboxes">\n          <ion-icon name="chatboxes"></ion-icon>\n        </ion-segment-button>\n        <ion-segment-button value="contact" (click)="profile()">\n          <ion-icon name="contact"></ion-icon>\n        </ion-segment-button>\n      </ion-segment>\n    </ion-toolbar>\n  </ion-footer>'/*ion-inline-end:"C:\Users\STEPHANIA\Desktop\Ionic\myApp\src\pages\messages\messages.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MessagesPage);
    return MessagesPage;
}());

//# sourceMappingURL=messages.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__messages_messages__ = __webpack_require__(41);
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
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfilePage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    ProfilePage.prototype.messages = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__messages_messages__["a" /* MessagesPage */]);
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\STEPHANIA\Desktop\Ionic\myApp\src\pages\profile\profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-item>\n        <ion-avatar item-start>\n          <img src="icon/img/Picture1.png">\n        </ion-avatar>\n        <h2>Marty McFly</h2>\n        <p>November 5, 1955</p>\n      </ion-item>\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar>\n      <ion-segment [(ngModel)]="icons" color="bitelink">\n        <ion-segment-button value="home" (click)="login()">\n          <ion-icon name="home"></ion-icon>\n        </ion-segment-button>\n        <ion-segment-button value="chatboxes" (click)="messages()">\n          <ion-icon name="chatboxes"></ion-icon>\n        </ion-segment-button>\n        <ion-segment-button value="contact">\n          <ion-icon name="contact"></ion-icon>\n        </ion-segment-button>\n      </ion-segment>\n    </ion-toolbar>\n  </ion-footer>'/*ion-inline-end:"C:\Users\STEPHANIA\Desktop\Ionic\myApp\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(28);
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
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RegisterPage.prototype.create = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\STEPHANIA\Desktop\Ionic\myApp\src\pages\register\register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-list>\n  <ion-item>\n    <ion-input type="text" placeholder="first name"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-input type="text" placeholder="last name"></ion-input>\n  </ion-item>\n  \n  <ion-item>\n    <ion-input type="text" placeholder="e-mail"></ion-input>\n  </ion-item>\n  \n  <ion-item>\n    <ion-input type="password" placeholder="password"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-input type="password" placeholder="confirm password"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>gender</ion-label>\n    <ion-select [(ngModel)]="gender">\n      <ion-option value="m">Male</ion-option>\n      <ion-option value="f">Female</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n      <ion-label>birth date</ion-label>\n      <ion-select [(ngModel)]="months">\n        <ion-option value="January">January</ion-option>\n        <ion-option value="February">February</ion-option>\n        <ion-option value="March">March</ion-option>\n        <ion-option value="April">April</ion-option>\n        <ion-option value="May">May</ion-option>\n        <ion-option value="June">June</ion-option>\n        <ion-option value="July">July</ion-option>\n        <ion-option value="August">August</ion-option>\n        <ion-option value="September">September</ion-option>\n        <ion-option value="October">October</ion-option>\n        <ion-option value="November">November</ion-option>\n        <ion-option value="December">December</ion-option>\n      </ion-select>\n      <ion-select [(ngModel)]="year">\n          <ion-option value="1968">1968</ion-option>\n          <ion-option value="1969">1969</ion-option>\n          <ion-option value="1970">1970</ion-option>\n          <ion-option value="1971">1971</ion-option>\n          <ion-option value="1972">1972</ion-option>\n          <ion-option value="1973">1973</ion-option>\n          <ion-option value="1974">1974</ion-option>\n          <ion-option value="1975">1975</ion-option>\n          <ion-option value="1976">1976</ion-option>\n          <ion-option value="1977">1977</ion-option>\n          <ion-option value="1978">1978</ion-option>\n          <ion-option value="1979">1979</ion-option>\n          <ion-option value="1980">1980</ion-option>\n          <ion-option value="1981">1981</ion-option>\n          <ion-option value="1982">1982</ion-option>\n          <ion-option value="1983">1983</ion-option>\n          <ion-option value="1984">1984</ion-option>\n          <ion-option value="1985">1985</ion-option>\n          <ion-option value="1986">1986</ion-option>\n          <ion-option value="1987">1987</ion-option>\n          <ion-option value="1988">1988</ion-option>\n          <ion-option value="1989">1989</ion-option>\n          <ion-option value="1990">1990</ion-option>\n          <ion-option value="1991">1991</ion-option>\n          <ion-option value="1992">1992</ion-option>\n          <ion-option value="1993">1993</ion-option>\n          <ion-option value="1994">1994</ion-option>\n          <ion-option value="1995">1995</ion-option>\n          <ion-option value="1996">1996</ion-option>\n          <ion-option value="1997">1997</ion-option>\n          <ion-option value="1998">1998</ion-option>\n          <ion-option value="1999">1999</ion-option>\n          <ion-option value="2000">2000</ion-option>\n        </ion-select>\n    </ion-item>\n    <ion-item>\n        <ion-label>state</ion-label>\n        <ion-select name="state" [(ngModel)]="state">\n          <ion-option value="m">Aguascalientes</ion-option>\n          <ion-option value="f">Baja California</ion-option>\n          <ion-option value="m">Baja California Sur</ion-option>\n          <ion-option value="f">Campeche</ion-option>\n          <ion-option value="m">Chiapas</ion-option>\n          <ion-option value="f">Chihuahua</ion-option>\n          <ion-option value="m">Ciudad de México</ion-option>\n          <ion-option value="f">Coahuila</ion-option>\n          <ion-option value="m">Colima</ion-option>\n          <ion-option value="f">Durango</ion-option>\n          <ion-option value="f">Guanajuato</ion-option>\n          <ion-option value="f">Guerrero</ion-option>\n          <ion-option value="f">Hidalgo</ion-option>\n          <ion-option value="f">Jalisco</ion-option>\n          <ion-option value="f">Michoacán</ion-option>\n          <ion-option value="f">Morelos</ion-option>\n          <ion-option value="f">Nayarit</ion-option>\n          <ion-option value="f">Nuevo León</ion-option>\n          <ion-option value="f">Oaxaca</ion-option>\n          <ion-option value="f">Puebla</ion-option>\n          <ion-option value="f">Querétaro</ion-option>\n          <ion-option value="f">Quintana Roo</ion-option>\n          <ion-option value="f">San Luis Potosí</ion-option>\n          <ion-option value="f">Sinaloa</ion-option>\n          <ion-option value="f">Sonora</ion-option>\n          <ion-option value="f">Tabasco</ion-option>\n          <ion-option value="f">Tamaulipas</ion-option>\n          <ion-option value="f">Tlaxcala</ion-option>\n          <ion-option value="f">Veracruz</ion-option>\n          <ion-option value="f">Yucatán</ion-option>\n          <ion-option value="f">Zacatecas</ion-option>\n        </ion-select>\n    </ion-item>\n  </ion-list>\n\n\n\n<button ion-button color="bitelink" (click)="create()" round class="center">\nCreate Account\n</button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\STEPHANIA\Desktop\Ionic\myApp\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map