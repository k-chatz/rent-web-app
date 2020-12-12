(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-login-login-module"],{

/***/ "./src/app/main/modules/login/login-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/main/modules/login/login-routing.module.ts ***!
  \************************************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/main/modules/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var routes = [
    {
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/main/modules/login/login.component.html":
/*!*********************************************************!*\
  !*** ./src/app/main/modules/login/login.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"jumbotron\" style=\"margin-bottom: 1rem;\">\n    <div class=\"login-form mx-auto d-block w-100\">\n      <div class=\"page-header text-center\">\n        <h1>Sign In!</h1>\n      </div>\n      <form [formGroup]=\"form\" (ngSubmit)=\"submit(form.value)\" class=\"form-validate\">\n        <div class=\"form-group\">\n          <div class=\"control-label\">\n            <label id=\"email-lbl\" for=\"email\" class=\"required\">Email<span class=\"star\"> *</span></label>\n          </div>\n          <div class=\"controls\">\n            <input class=\"form-control\"\n                   id=\"email\"\n                   type=\"email\"\n                   formControlName=\"email\"\n                   #loginFormEmail\n                   [ngClass]=\"{'is-invalid': (form.get('email').dirty) &&\n                                            !form.get('email').valid }\"/>\n            <span class=\"invalid-feedback\">\n            <span *ngIf=\"(form.get('email').errors?.email && form.get('email').touched)\">\n              The email format is wrong.\n            </span>\n          </span>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"control-label\">\n            <label id=\"password-lbl\" for=\"password\" class=\"required\">Password<span class=\"star\"> *</span></label>\n          </div>\n          <div class=\"controls\">\n            <input class=\"form-control\" id=\"password\" type=\"password\" formControlName=\"password\"/>\n          </div>\n          <div class=\"d-flex justify-content-end\">\n            <a class=\"float-right\" routerLink=\"/forgot\">Forgot your password?</a>\n          </div>\n        </div>\n        <div class=\"d-flex justify-content-between\">\n          <div class=\"form-check form-group d-flex justify-content-end\">\n            <label class=\"form-check-label\">\n            <input type=\"checkbox\" class=\"form-check-input\" formControlName=\"remember\">Remember me</label>\n          </div>\n          <div class=\"form-group d-flex justify-content-start\">\n            <div class=\"controls\">\n              <button\n                [disabled]=\"!form.valid || progress || form.untouched\"\n                type=\"submit\"\n                class=\"btn btn-primary\">\n                Sign In\n                <fa *ngIf=\"progress\" name=\"cog\" animation=\"spin\"></fa>\n                <fa *ngIf=\"!progress\" name=\"sign-in\"></fa>\n              </button>\n            </div>\n          </div>\n        </div>\n      </form>\n      <div class=\"text-center\">\n        <p>Don't have an account yet? &nbsp;<a routerLink=\"/register\">Sign Up!</a></p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/modules/login/login.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/main/modules/login/login.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 767px) {\n  .login-form {\n    max-width: 400px; } }\n\n.btn span.fa-check {\n  opacity: 0; }\n\n.btn.active span.fa-check {\n  opacity: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21zaS9wcm9qZWN0cy9XZWJzdG9ybVByb2plY3RzL3JlbnQtd2ViLWFwcC9zcmMvYXBwL21haW4vbW9kdWxlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsZ0JBQWdCLEVBQUEsRUFDakI7O0FBR0g7RUFDRSxVQUFVLEVBQUE7O0FBRVo7RUFDRSxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL21vZHVsZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1pbi13aWR0aDo3NjdweCl7XG4gIC5sb2dpbi1mb3Jte1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gIH1cbn1cblxuLmJ0biBzcGFuLmZhLWNoZWNrIHtcbiAgb3BhY2l0eTogMDtcbn1cbi5idG4uYWN0aXZlIHNwYW4uZmEtY2hlY2sge1xuICBvcGFjaXR5OiAxO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/main/modules/login/login.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/main/modules/login/login.component.ts ***!
  \*******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/authentication.service */ "./src/app/shared/services/authentication.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");








var LoginComponent = /** @class */ (function () {
    function LoginComponent(titleService, fb, router, route, auth, toastr) {
        this.titleService = titleService;
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.auth = auth;
        this.toastr = toastr;
        this.progress = false;
        this.returnUrl = null;
        titleService.setTitle(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].appName + ' :: ' + 'Login');
        this.form = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            remember: [false]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginFormEmail.nativeElement.focus();
        this.routeSub = this.route.queryParams
            .subscribe(function (params) {
            _this.returnUrl = params.returnUrl;
        });
    };
    LoginComponent.prototype.submit = function (data) {
        var _this = this;
        console.log({
            email: data.email,
            password: data.password
        });
        this.form.markAsPristine();
        this.progress = true;
        this.auth.login(data).subscribe(function (response) {
            console.log('response', response);
            _this.progress = false;
            _this.toastr.info('We are happy to have you!', 'Welcome back ' + response.user.username + '!', {
                timeOut: 8000
            });
            if (_this.returnUrl) {
                _this.router.navigate([_this.returnUrl]);
            }
            else {
                _this.router.navigate(['/']);
            }
        }, function (error) {
            console.error('error', error);
            _this.progress = false;
            _this.form.reset();
        });
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        if (this.routeSub !== undefined) {
            this.routeSub.unsubscribe();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loginFormEmail'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], LoginComponent.prototype, "loginFormEmail", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/main/modules/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/main/modules/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/main/modules/login/login.module.ts":
/*!****************************************************!*\
  !*** ./src/app/main/modules/login/login.module.ts ***!
  \****************************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/main/modules/login/login-routing.module.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.component */ "./src/app/main/modules/login/login.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");








var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NgZorroAntdModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_7__["AngularFontAwesomeModule"]
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-login-login-module.js.map