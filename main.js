(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./main/main.module": [
		"./src/app/main/main.module.ts",
		"default~main-main-module~modules-home-home-module~modules-hotel-hotel-module~modules-hotels-hotels-m~e5bce419",
		"default~main-main-module~management-management-module~modules-home-home-module~modules-hotel-hotel-m~d0033672",
		"default~main-main-module~modules-hotel-hotel-module~modules-search-results-search-results-module",
		"default~main-main-module~modules-register-register-module",
		"common",
		"main-main-module"
	],
	"./management/management.module": [
		"./src/app/management/management.module.ts",
		"default~main-main-module~management-management-module~modules-home-home-module~modules-hotel-hotel-m~d0033672",
		"common",
		"management-management-module"
	],
	"./modules/about/about.module": [
		"./src/app/main/modules/about/about.module.ts",
		"modules-about-about-module"
	],
	"./modules/dashboard/dashboard.module": [
		"./src/app/management/modules/dashboard/dashboard.module.ts",
		"modules-dashboard-dashboard-module"
	],
	"./modules/home/home.module": [
		"./src/app/main/modules/home/home.module.ts",
		"default~main-main-module~modules-home-home-module~modules-hotel-hotel-module~modules-hotels-hotels-m~e5bce419",
		"default~main-main-module~management-management-module~modules-home-home-module~modules-hotel-hotel-m~d0033672",
		"default~modules-home-home-module~modules-profile-profile-module",
		"common",
		"modules-home-home-module"
	],
	"./modules/hotel/hotel.module": [
		"./src/app/main/modules/hotel/hotel.module.ts",
		"default~main-main-module~modules-home-home-module~modules-hotel-hotel-module~modules-hotels-hotels-m~e5bce419",
		"default~main-main-module~management-management-module~modules-home-home-module~modules-hotel-hotel-m~d0033672",
		"default~main-main-module~modules-hotel-hotel-module~modules-search-results-search-results-module",
		"common",
		"modules-hotel-hotel-module"
	],
	"./modules/hotels/hotels.module": [
		"./src/app/management/modules/hotels/hotels.module.ts",
		"default~main-main-module~modules-home-home-module~modules-hotel-hotel-module~modules-hotels-hotels-m~e5bce419",
		"common",
		"modules-hotels-hotels-module"
	],
	"./modules/login/login.module": [
		"./src/app/main/modules/login/login.module.ts",
		"default~main-main-module~management-management-module~modules-home-home-module~modules-hotel-hotel-m~d0033672",
		"common",
		"modules-login-login-module"
	],
	"./modules/not-found/not-found.module": [
		"./src/app/main/modules/not-found/not-found.module.ts",
		"modules-not-found-not-found-module"
	],
	"./modules/profile/profile.module": [
		"./src/app/main/modules/profile/profile.module.ts",
		"default~main-main-module~modules-home-home-module~modules-hotel-hotel-module~modules-hotels-hotels-m~e5bce419",
		"default~modules-home-home-module~modules-profile-profile-module",
		"common",
		"modules-profile-profile-module"
	],
	"./modules/provider-application-form/provider-application-form.module": [
		"./src/app/main/modules/provider-application-form/provider-application-form.module.ts",
		"default~main-main-module~management-management-module~modules-home-home-module~modules-hotel-hotel-m~d0033672",
		"common",
		"modules-provider-application-form-provider-application-form-module"
	],
	"./modules/register/register.module": [
		"./src/app/main/modules/register/register.module.ts",
		"default~main-main-module~modules-home-home-module~modules-hotel-hotel-module~modules-hotels-hotels-m~e5bce419",
		"default~main-main-module~management-management-module~modules-home-home-module~modules-hotel-hotel-m~d0033672",
		"default~main-main-module~modules-register-register-module",
		"common",
		"modules-register-register-module"
	],
	"./modules/search-results/search-results.module": [
		"./src/app/main/modules/search-results/search-results.module.ts",
		"default~main-main-module~modules-home-home-module~modules-hotel-hotel-module~modules-hotels-hotels-m~e5bce419",
		"default~main-main-module~management-management-module~modules-home-home-module~modules-hotel-hotel-m~d0033672",
		"default~main-main-module~modules-hotel-hotel-module~modules-search-results-search-results-module",
		"common"
	],
	"./modules/users/users.module": [
		"./src/app/management/modules/users/users.module.ts",
		"default~main-main-module~modules-home-home-module~modules-hotel-hotel-module~modules-hotels-hotels-m~e5bce419",
		"common",
		"modules-users-users-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_models_role__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/models/role */ "./src/app/shared/models/role.ts");
/* harmony import */ var _shared_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/guards/authentication.guard */ "./src/app/shared/guards/authentication.guard.ts");






var routes = [
    {
        path: 'management',
        loadChildren: './management/management.module#ManagementModule',
        canActivate: [_shared_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_5__["AuthenticationGuard"]],
        data: {
            roles: [
                _shared_models_role__WEBPACK_IMPORTED_MODULE_4__["Role"].Admin,
                _shared_models_role__WEBPACK_IMPORTED_MODULE_4__["Role"].Provider
            ]
        }
    },
    {
        path: '',
        component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        children: [
            {
                path: '',
                loadChildren: './main/main.module#MainModule'
            },
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-progress #progressBar></ng-progress>\n<div style=\"min-width: 500px\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lds-ripple {\n  left: 50%;\n  top: 50%;\n  position: fixed;\n  width: 64px;\n  height: 64px;\n  z-index: 1; }\n\n.lds-ripple div {\n  position: absolute;\n  border: 4px solid #202020;\n  opacity: 1;\n  border-radius: 50%;\n  -webkit-animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n          animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite; }\n\n.lds-ripple div:nth-child(2) {\n  -webkit-animation-delay: -0.5s;\n          animation-delay: -0.5s; }\n\n@-webkit-keyframes lds-ripple {\n  0% {\n    top: 28px;\n    left: 28px;\n    width: 0;\n    height: 0;\n    opacity: 1; }\n  100% {\n    top: -1px;\n    left: -1px;\n    width: 58px;\n    height: 58px;\n    opacity: 0; } }\n\n@keyframes lds-ripple {\n  0% {\n    top: 28px;\n    left: 28px;\n    width: 0;\n    height: 0;\n    opacity: 1; }\n  100% {\n    top: -1px;\n    left: -1px;\n    width: 58px;\n    height: 58px;\n    opacity: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21zaS9wcm9qZWN0cy9XZWJzdG9ybVByb2plY3RzL3JlbnQtd2ViLWFwcC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFNBQVM7RUFDVCxRQUFRO0VBQ1IsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVSxFQUFBOztBQUVaO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLHNFQUE4RDtVQUE5RCw4REFBOEQsRUFBQTs7QUFFaEU7RUFDRSw4QkFBc0I7VUFBdEIsc0JBQXNCLEVBQUE7O0FBRXhCO0VBQ0U7SUFDRSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFFBQVE7SUFDUixTQUFTO0lBQ1QsVUFBVSxFQUFBO0VBRVo7SUFDRSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVSxFQUFBLEVBQUE7O0FBYmQ7RUFDRTtJQUNFLFNBQVM7SUFDVCxVQUFVO0lBQ1YsUUFBUTtJQUNSLFNBQVM7SUFDVCxVQUFVLEVBQUE7RUFFWjtJQUNFLFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVLEVBQUEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjYXJkSGVpZ2h0OiBjYWxjKCAxMDB2aCAtIDEzM3B4ICk7XG5cbi5sZHMtcmlwcGxlIHtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogNjRweDtcbiAgaGVpZ2h0OiA2NHB4O1xuICB6LWluZGV4OiAxO1xufVxuLmxkcy1yaXBwbGUgZGl2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXI6IDRweCBzb2xpZCAjMjAyMDIwO1xuICBvcGFjaXR5OiAxO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGFuaW1hdGlvbjogbGRzLXJpcHBsZSAxcyBjdWJpYy1iZXppZXIoMCwgMC4yLCAwLjgsIDEpIGluZmluaXRlO1xufVxuLmxkcy1yaXBwbGUgZGl2Om50aC1jaGlsZCgyKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuNXM7XG59XG5Aa2V5ZnJhbWVzIGxkcy1yaXBwbGUge1xuICAwJSB7XG4gICAgdG9wOiAyOHB4O1xuICAgIGxlZnQ6IDI4cHg7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgdG9wOiAtMXB4O1xuICAgIGxlZnQ6IC0xcHg7XG4gICAgd2lkdGg6IDU4cHg7XG4gICAgaGVpZ2h0OiA1OHB4O1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ng2_simple_smooth_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-simple-smooth-scroll */ "./node_modules/ng2-simple-smooth-scroll/fesm5/ng2-simple-smooth-scroll.js");
/* harmony import */ var _shared_services_routing_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/services/routing-state */ "./src/app/shared/services/routing-state.ts");







var AppComponent = /** @class */ (function () {
    function AppComponent(translate, router, toastr, smooth, routingState) {
        this.translate = translate;
        this.router = router;
        this.toastr = toastr;
        this.smooth = smooth;
        this.routingState = routingState;
        this.showLoadingIndicator = true;
        translate.setDefaultLang('gr');
        routingState.loadRouting();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (routerEvent) {
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["GuardsCheckEnd"]) {
                if (!routerEvent.shouldActivate) {
                    console.error('Route should activated', routerEvent.shouldActivate);
                    /*this.toastr.warning('No rights to access this route!', 'Protected route');*/
                }
            }
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                _this.showLoadingIndicator = true;
            }
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] || routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"] || routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]) {
                _this.showLoadingIndicator = false;
                if (_this.router.url.includes('search')) {
                    // this.smooth.smoothScrollToTop({duration: 1000, easing: 'easeOutQuint', offset: 600});
                }
                else {
                    _this.smooth.smoothScrollToTop({ duration: 0, easing: 'easeOutQuint', offset: 0 });
                }
            }
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]) {
                console.error('Access denied');
            }
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            ng2_simple_smooth_scroll__WEBPACK_IMPORTED_MODULE_5__["SimpleSmoothScrollService"],
            _shared_services_routing_state__WEBPACK_IMPORTED_MODULE_6__["RoutingState"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _shared_interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/interceptors/jwt.interceptor */ "./src/app/shared/interceptors/jwt.interceptor.ts");
/* harmony import */ var _shared_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/interceptors/error.interceptor */ "./src/app/shared/interceptors/error.interceptor.ts");
/* harmony import */ var _shared_interceptors_mock_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/interceptors/mock.interceptor */ "./src/app/shared/interceptors/mock.interceptor.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_teximate__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-teximate */ "./node_modules/ngx-teximate/fesm5/ngx-teximate.js");
/* harmony import */ var _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-progressbar/core */ "./node_modules/@ngx-progressbar/core/fesm5/ngx-progressbar-core.js");
/* harmony import */ var _ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-progressbar/http */ "./node_modules/@ngx-progressbar/http/fesm5/ngx-progressbar-http.js");
/* harmony import */ var _shared_interceptors_timeout_interceptor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/interceptors/timeout.interceptor */ "./src/app/shared/interceptors/timeout.interceptor.ts");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _management_modules_users_users_route_data_provider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./management/modules/users/users-route-data.provider */ "./src/app/management/modules/users/users-route-data.provider.ts");
/* harmony import */ var _ngx_progressbar_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngx-progressbar/router */ "./node_modules/@ngx-progressbar/router/fesm5/ngx-progressbar-router.js");
/* harmony import */ var ng2_simple_smooth_scroll__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng2-simple-smooth-scroll */ "./node_modules/ng2-simple-smooth-scroll/fesm5/ng2-simple-smooth-scroll.js");


























// AoT requires an exported function for factories
var createTranslateLoader = function (http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NgZorroAntdModule"],
                _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_19__["NgProgressModule"].withConfig({
                    spinnerPosition: 'left',
                    spinner: false,
                    meteor: false,
                    thick: false,
                    color: 'red',
                }),
                _ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_20__["NgProgressHttpModule"],
                _ngx_progressbar_router__WEBPACK_IMPORTED_MODULE_24__["NgProgressRouterModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_17__["ToastrModule"].forRoot({
                    progressBar: true,
                    progressAnimation: 'decreasing',
                    tapToDismiss: true,
                    positionClass: 'toast-bottom-right',
                    timeOut: 5000,
                    enableHtml: true,
                }),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__["BsDropdownModule"].forRoot(),
                _agm_core__WEBPACK_IMPORTED_MODULE_12__["AgmCoreModule"].forRoot({
                    apiKey: _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].googleMapsKey
                }),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
                        useFactory: createTranslateLoader,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
                    }
                }),
                ngx_teximate__WEBPACK_IMPORTED_MODULE_18__["TeximateModule"],
                ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_22__["GooglePlaceModule"],
                ng2_simple_smooth_scroll__WEBPACK_IMPORTED_MODULE_25__["SimpleSmoothScrollModule"]
            ],
            providers: [
                { provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NZ_I18N"], useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["en_US"] },
                _shared_interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_14__["jwtProvider"],
                _shared_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_15__["errorProvider"],
                _shared_interceptors_mock_interceptor__WEBPACK_IMPORTED_MODULE_16__["mockProvider"],
                _shared_interceptors_timeout_interceptor__WEBPACK_IMPORTED_MODULE_21__["timeoutProvider"],
                { provide: _shared_interceptors_timeout_interceptor__WEBPACK_IMPORTED_MODULE_21__["DEFAULT_TIMEOUT"], useValue: 3000 },
                _management_modules_users_users_route_data_provider__WEBPACK_IMPORTED_MODULE_23__["UsersRouteDataProvider"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/management/modules/users/users-route-data.provider.ts":
/*!***********************************************************************!*\
  !*** ./src/app/management/modules/users/users-route-data.provider.ts ***!
  \***********************************************************************/
/*! exports provided: UsersRouteDataProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersRouteDataProvider", function() { return UsersRouteDataProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var UsersRouteDataProvider = /** @class */ (function () {
    function UsersRouteDataProvider() {
        this.behaviorSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    UsersRouteDataProvider.prototype.setUser = function (user) {
        this.behaviorSubject.next(user);
    };
    UsersRouteDataProvider.prototype.getUser$ = function () {
        return this.behaviorSubject.asObservable();
    };
    Object.defineProperty(UsersRouteDataProvider.prototype, "user", {
        get: function () {
            return this.behaviorSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    UsersRouteDataProvider = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UsersRouteDataProvider);
    return UsersRouteDataProvider;
}());



/***/ }),

/***/ "./src/app/shared/guards/authentication.guard.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/guards/authentication.guard.ts ***!
  \*******************************************************/
/*! exports provided: AuthenticationGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function() { return AuthenticationGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/shared/services/authentication.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var AuthenticationGuard = /** @class */ (function () {
    function AuthenticationGuard(router, auth, toastr) {
        this.router = router;
        this.auth = auth;
        this.toastr = toastr;
    }
    AuthenticationGuard.prototype.canActivate = function (route, state) {
        var session = this.auth.session;
        if (session) {
            if (route.data.roles && route.data.roles.indexOf(session.user.role) === -1) {
                this.toastr.warning('No rights to access this route!', 'Protected route');
                return false;
            }
            return true;
        }
        else {
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
    };
    AuthenticationGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], AuthenticationGuard);
    return AuthenticationGuard;
}());



/***/ }),

/***/ "./src/app/shared/interceptors/error.interceptor.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/interceptors/error.interceptor.ts ***!
  \**********************************************************/
/*! exports provided: ErrorInterceptor, errorProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorProvider", function() { return errorProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/shared/services/authentication.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! http-status-codes */ "./node_modules/http-status-codes/index.js");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_7__);








var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService, toastr) {
        this.authenticationService = authenticationService;
        this.toastr = toastr;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
            if (e instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                switch (e.status) {
                    case http_status_codes__WEBPACK_IMPORTED_MODULE_7__["BAD_REQUEST"]: {
                        _this.toastr.warning('<strong>URL:&nbsp;</strong>' + request.url +
                            '<br/><strong>REASON:&nbsp;</strong>' + e.error.errors, e.status + ' BAD REQUEST');
                        break;
                    }
                    case http_status_codes__WEBPACK_IMPORTED_MODULE_7__["FORBIDDEN"]: {
                        _this.toastr.warning('<strong>URL:&nbsp;</strong>' + request.url +
                            '<br/><strong>REASON:&nbsp;</strong>' + e.error.errors, e.status + ' FORBIDDEN');
                        break;
                    }
                    case http_status_codes__WEBPACK_IMPORTED_MODULE_7__["UNAUTHORIZED"]: {
                        _this.toastr.warning('<strong>URL:&nbsp;</strong>' + request.url +
                            '<br/><strong>REASON:&nbsp;</strong>' + e.error.errors, e.status + ' UNAUTHORIZED');
                        _this.authenticationService.logout();
                        break;
                    }
                    case http_status_codes__WEBPACK_IMPORTED_MODULE_7__["NOT_FOUND"]: {
                        _this.toastr.warning('<strong>URL:&nbsp;</strong>' + request.url +
                            '<br/><strong>REASON:&nbsp;</strong>' + e.error.errors, e.status + ' NOT FOUND');
                        break;
                    }
                    default: {
                        _this.toastr.error(request.url + ':: ' + e.error.errors, e.error.status + ' ');
                        break;
                    }
                }
            }
            else {
                if (e.name && e.name === 'TimeoutError') {
                    _this.toastr.error('<strong>URL:&nbsp;</strong>' + request.url +
                        '<br/><strong>REASON:&nbsp;</strong>' + e.message, 'REQUEST TIMEOUT');
                }
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(e);
        }));
    };
    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());

var errorProvider = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
    useClass: ErrorInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/shared/interceptors/jwt.interceptor.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/interceptors/jwt.interceptor.ts ***!
  \********************************************************/
/*! exports provided: JwtInterceptor, jwtProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jwtProvider", function() { return jwtProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/shared/services/authentication.service.ts");




var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(auth) {
        this.auth = auth;
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var session = this.auth.session;
        if (session && session.access) {
            request = request.clone({
                setHeaders: {
                    Authorization: session.access.type + " " + session.access.token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], JwtInterceptor);
    return JwtInterceptor;
}());

var jwtProvider = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
    useClass: JwtInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/shared/interceptors/mock.interceptor.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/interceptors/mock.interceptor.ts ***!
  \*********************************************************/
/*! exports provided: MockInterceptor, mockProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockInterceptor", function() { return MockInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mockProvider", function() { return mockProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_role__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/role */ "./src/app/shared/models/role.ts");






var users = [
    {
        id: 1,
        username: 'test',
        email: 'test@test.com',
        password: 'test',
        role: _models_role__WEBPACK_IMPORTED_MODULE_5__["Role"].User,
        locked: false,
    },
    {
        id: 2,
        username: 'kwstarikanos',
        email: 'kwstarikanos@gmail.com',
        password: '123456',
        role: _models_role__WEBPACK_IMPORTED_MODULE_5__["Role"].Admin,
        locked: false,
    }
];
var MockInterceptor = /** @class */ (function () {
    function MockInterceptor() {
    }
    MockInterceptor_1 = MockInterceptor;
    MockInterceptor.ok = function (body) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({ status: 200, body: body }));
    };
    MockInterceptor.unauthorised = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
    };
    MockInterceptor.error = function (message) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({ status: 400, error: { message: message } });
    };
    MockInterceptor.prototype.intercept = function (request, next) {
        // console.log('request', request);
        var authHeader = request.headers.get('Authorization');
        var isLoggedIn = authHeader && authHeader.startsWith('Bearer fake-jwt-token');
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function () {
            if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
                console.log('request', request);
                var user = users.find(function (x) { return x.email === request.body.email && x.password === request.body.password; });
                return MockInterceptor_1.ok({
                    id: user.id,
                    token: "fake-jwt-token"
                });
            }
            return next.handle(request);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["materialize"])()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(0)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["dematerialize"])());
    };
    var MockInterceptor_1;
    MockInterceptor = MockInterceptor_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], MockInterceptor);
    return MockInterceptor;
}());

var mockProvider = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
    useClass: MockInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/shared/interceptors/timeout.interceptor.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/interceptors/timeout.interceptor.ts ***!
  \************************************************************/
/*! exports provided: DEFAULT_TIMEOUT, TimeoutInterceptor, timeoutProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_TIMEOUT", function() { return DEFAULT_TIMEOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeoutInterceptor", function() { return TimeoutInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeoutProvider", function() { return timeoutProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var DEFAULT_TIMEOUT = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('defaultTimeout');
var TimeoutInterceptor = /** @class */ (function () {
    function TimeoutInterceptor(defaultTimeout) {
        this.defaultTimeout = defaultTimeout;
    }
    TimeoutInterceptor.prototype.intercept = function (request, next) {
        var timeoutValue = Number(request.headers.get('timeout')) || this.defaultTimeout;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["timeout"])(timeoutValue));
    };
    TimeoutInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(DEFAULT_TIMEOUT)),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
    ], TimeoutInterceptor);
    return TimeoutInterceptor;
}());

var timeoutProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
    useClass: TimeoutInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/shared/models/role.ts":
/*!***************************************!*\
  !*** ./src/app/shared/models/role.ts ***!
  \***************************************/
/*! exports provided: Role */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
var Role;
(function (Role) {
    Role["Guest"] = "ROLE_GUEST";
    Role["User"] = "ROLE_USER";
    Role["Admin"] = "ROLE_ADMIN";
    Role["Provider"] = "ROLE_PROVIDER";
})(Role || (Role = {}));


/***/ }),

/***/ "./src/app/shared/services/authentication.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/authentication.service.ts ***!
  \***********************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");







var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        localStorage.removeItem('pending_provider');
        var local = localStorage.getItem('session');
        var session = sessionStorage.getItem('session');
        this.sessionSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(local ? local : session));
        this.session$ = this.sessionSubject$.asObservable();
        if (this.sessionSubject$.value) {
            var helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__["JwtHelperService"]();
            var decodedToken = helper.decodeToken(this.sessionSubject$.value.access.token);
            var pendingProvider = decodedToken.pending_provider;
            if (pendingProvider) {
                sessionStorage.setItem('pending_provider', null);
            }
        }
    }
    Object.defineProperty(AuthenticationService.prototype, "session", {
        get: function () {
            return this.sessionSubject$.value;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.login = function (data) {
        var _this = this;
        console.log('data', data);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiRoot + '/auth/login', data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            console.log('d', response);
            // login successful if there's a jwt token in the response
            if (response && response.access.token) {
                var session = {
                    access: response.access,
                    user: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, response.user, { role: response.user.role.name }),
                    profile: response.profile
                };
                var helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__["JwtHelperService"]();
                var decodedToken = helper.decodeToken(session.access.token);
                var pendingProvider = decodedToken.pending_provider;
                if (pendingProvider) {
                    sessionStorage.setItem('pending_provider', null);
                }
                sessionStorage.setItem('session', JSON.stringify(session));
                if (data.remember) {
                    localStorage.setItem('session', JSON.stringify(session));
                }
                _this.sessionSubject$.next(session);
            }
            return response;
        }));
    };
    AuthenticationService.prototype.register = function (data) {
        var _this = this;
        console.log('data', data);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiRoot + '/auth/register', data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            console.log('d', response);
            // login successful if there's a jwt token in the response
            if (response && response.access.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                var session = {
                    access: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, response.access, { pendingForProvider: true }),
                    user: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, response.user, { role: response.user.role.name }),
                    profile: response.profile
                };
                localStorage.setItem('session', JSON.stringify(session));
                _this.sessionSubject$.next(session);
            }
            return response;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        console.log('logout');
        localStorage.removeItem('session');
        sessionStorage.removeItem('session');
        this.sessionSubject$.next(null);
    };
    AuthenticationService.prototype.mockLogin = function (data) {
        var _this = this;
        console.log('data', data);
        return this.http.post("/users/authenticate", data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            console.log('d', response);
            // login successful if there's a jwt token in the response
            if (response && response.access.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                var session = {
                    access: response.access,
                    user: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, response.user, { role: response.user.role.name }),
                    profile: response.profile
                };
                localStorage.setItem('session', JSON.stringify(session));
                _this.sessionSubject$.next(session);
            }
            return response;
        }));
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/shared/services/routing-state.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/routing-state.ts ***!
  \**************************************************/
/*! exports provided: RoutingState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingState", function() { return RoutingState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var RoutingState = /** @class */ (function () {
    function RoutingState(router) {
        this.router = router;
    }
    RoutingState.prototype.loadRouting = function () {
        var _this = this;
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (e) { return e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["RoutesRecognized"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pairwise"])()).subscribe(function (event) {
            _this.previousUrl = event[0].urlAfterRedirects;
        });
    };
    RoutingState.prototype.getPreviousUrl = function () {
        return this.previousUrl;
    };
    RoutingState = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RoutingState);
    return RoutingState;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var apiRoot = 'https://localhost:8443/api';
var environment = {
    appName: 'RentCube',
    production: false,
    googleMapsKey: 'AIzaSyABfpyzGQl4TzduIB0R-Ft9jrUipl3hBKQ',
    apiRoot: apiRoot,
    usersEndpoint: apiRoot + '/users',
    hotelsEndpoint: apiRoot + '/hotels'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/msi/projects/WebstormProjects/rent-web-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map