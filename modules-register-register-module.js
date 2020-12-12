(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-register-register-module"],{

/***/ "./src/app/main/modules/register/register-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/main/modules/register/register-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: RegisterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterRoutingModule", function() { return RegisterRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.component */ "./src/app/main/modules/register/register.component.ts");




var routes = [
    {
        path: '',
        component: _register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]
    }
];
var RegisterRoutingModule = /** @class */ (function () {
    function RegisterRoutingModule() {
    }
    RegisterRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], RegisterRoutingModule);
    return RegisterRoutingModule;
}());



/***/ }),

/***/ "./src/app/main/modules/register/register.component.html":
/*!***************************************************************!*\
  !*** ./src/app/main/modules/register/register.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"jumbotron\" style=\"margin-bottom: 1rem;\">\n    <div class=\"login-form mx-auto d-block w-100\">\n      <div class=\"page-header text-center\">\n        <h1>Sign Up!</h1>\n      </div>\n      <form [formGroup]=\"form\" (ngSubmit)=\"submit(form.value)\" class=\"form-validate\">\n\n\n        <div class=\"form-row\">\n          <div class=\"col-md-6 mb-3\">\n\n            <!--Name-->\n            <div class=\"form-group\">\n              <div class=\"control-label\">\n                <label id=\"firstname-lbl\" for=\"name\" class=\"required\">\n                  Name\n                  <span class=\"star\"> *</span></label>\n              </div>\n              <div class=\"controls\">\n                <input class=\"form-control\" id=\"name\" type=\"text\" formControlName=\"name\" #registerFormName\n                       [ngClass]=\"{'is-invalid': (form.get('name').touched || form.get('name').dirty) &&\n                   !form.get('name').valid, 'is-valid': form.get('name').valid }\"\n                />\n                <span class=\"invalid-feedback\">\n              <span *ngIf=\"(form.get('name').errors?.required &&\n              form.get('name').touched)\">\n                The name is required!\n              </span>\n              <span *ngIf=\"(form.get('name').errors?.minlength &&\n               form.get('name').touched)\">\n                Too short!\n              </span>\n              <span *ngIf=\"(form.get('name').errors?.maxlength &&\n               form.get('name').touched)\">\n                Too long!\n              </span>\n            </span>\n              </div>\n            </div>\n\n          </div>\n\n          <div class=\"col-md-6 mb-3\">\n\n            <!--Surname-->\n            <div class=\"form-group\">\n              <div class=\"control-label\">\n                <label id=\"surname-lbl\" for=\"surname\" class=\"required\">\n                  Surname\n                  <span class=\"star\"> *</span></label>\n              </div>\n              <div class=\"controls\">\n                <input class=\"form-control\" id=\"surname\" type=\"text\" formControlName=\"surname\" #registerFormSurname\n                       [ngClass]=\"{'is-invalid': (form.get('surname').touched || form.get('surname').dirty) &&\n                   !form.get('surname').valid, 'is-valid': form.get('surname').valid }\"/>\n                <span class=\"invalid-feedback\">\n              <span *ngIf=\"(form.get('surname').errors?.required && form.get('surname').touched)\">\n                The surname is required!\n              </span>\n              <span *ngIf=\"(form.get('surname').errors?.minlength && form.get('surname').touched)\">\n                Too short!\n              </span>\n             <span *ngIf=\"(form.get('surname').errors?.maxlength && form.get('surname').touched)\">\n                Too long!\n              </span>\n            </span>\n              </div>\n            </div>\n\n          </div>\n\n          <div class=\"col-md-4 mb-3\">\n\n          </div>\n        </div>\n\n\n        <div class=\"form-row\">\n\n          <div class=\"col-md-4 mb-3\">\n            <!--Username-->\n            <div class=\"form-group\">\n              <div class=\"control-label\">\n                <label id=\"username-lbl\" for=\"username\" class=\"required\">\n                  Username\n                  <span class=\"star\"> *</span></label>\n              </div>\n              <div class=\"controls\">\n                <input class=\"form-control\" id=\"username\" type=\"text\" formControlName=\"username\" #registerFormUsername\n                       [ngClass]=\"{'is-invalid': (form.get('username').touched || form.get('username').dirty) &&\n                                         !form.get('username').valid, 'is-valid': form.get('username').valid }\"/>\n                <div *ngIf=\"form.get('username').status === 'PENDING'\">\n                  <fa name=\"cog\" animation=\"spin\"></fa>\n                  Checking...\n                </div>\n                <span class=\"invalid-feedback\">\n              <span *ngIf=\"form.get('username').errors && form.get('username').errors.usernameTaken\">\n                😢 Oh noes, this username is already taken!\n              </span>\n              <span *ngIf=\"(form.get('username').errors?.required &&\n              form.get('username').touched)\">\n                The username is required!\n              </span>\n              <span *ngIf=\"(form.get('username').errors?.minlength &&\n              form.get('username').touched)\">\n                The short!\n              </span>\n              <span *ngIf=\"(form.get('username').errors?.maxlength &&\n               form.get('username').touched)\">\n                Too long!\n              </span>\n\n            </span>\n\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-md-8 mb-3\">\n            <!--Email-->\n            <div class=\"form-group\">\n              <div class=\"control-label\">\n                <label id=\"email-lbl\" for=\"email\" class=\"required\">Email<span class=\"star\"> *</span></label>\n              </div>\n              <div class=\"controls\">\n                <input class=\"form-control\"\n                       id=\"email\"\n                       type=\"email\"\n                       formControlName=\"email\"\n                       #registerFormEmail\n                       [ngClass]=\"{'is-invalid': (form.get('email').touched || form.get('email').dirty) &&\n                                         !form.get('email').valid, 'is-valid': form.get('email').valid }\"/>\n                <div *ngIf=\"form.get('email').status === 'PENDING'\">\n                  <fa name=\"cog\" animation=\"spin\"></fa>\n                  Checking...\n                </div>\n                <span class=\"invalid-feedback\">\n              <div *ngIf=\"form.get('email').status === 'VALID'\">\n                😺 Email is available!\n              </div>\n\n              <span *ngIf=\"form.get('email').errors && form.get('email').errors.emailTaken\">\n                😢 Oh noes, this email is already taken!\n              </span>\n\n              <span *ngIf=\"(form.get('email').errors?.email && form.get('email').touched)\">\n                The email format is wrong!\n              </span>\n            </span>\n\n              </div>\n            </div>\n\n          </div>\n\n        </div>\n\n\n        <!--Password Group-->\n        <div formGroupName=\"passwordGroup\">\n\n          <div class=\"form-row\">\n\n            <div class=\"col-md-6 mb-3\">\n              <!--Password-->\n              <div class=\"form-group\">\n                <div class=\"controls\">\n                  <div class=\"control-label\">\n                    <label for=\"password\" class=\"required\">Password<span class=\"star\"> *</span></label>\n                  </div>\n                  <input class=\"form-control\" id=\"password\" type=\"password\" formControlName=\"password\"\n                         [ngClass]=\"{'is-invalid': (form.get('passwordGroup').get('password').touched ||\n                     form.get('passwordGroup').get('password').dirty) &&\n                     !form.get('passwordGroup').get('password').valid,\n                     'is-valid': form.get('passwordGroup').get('password').valid }\"/>\n                  <span class=\"invalid-feedback\">\n               <span\n                 *ngIf=\"(form.get('passwordGroup').get('password').errors?.required &&\n                 form.get('passwordGroup').get('password').touched)\">\n                 required\n               </span>\n               <span\n                 *ngIf=\"(form.get('passwordGroup').get('password').errors?.minlength &&\n                  form.get('passwordGroup').get('password').touched)\">\n                   Too short!\n               </span>\n              <span\n                *ngIf=\"(form.get('passwordGroup').get('password').errors?.maxlength &&\n                form.get('passwordGroup').get('password').touched)\">\n                   Too long!\n               </span>\n              </span>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-md-6 mb-3\">\n\n              <!--Confirm password-->\n              <div class=\"form-group\">\n                <div class=\"controls\">\n                  <div class=\"control-label\">\n                    <label for=\"confirmPassword\" class=\"required\">Password Confirmation<span\n                      class=\"star\"> *</span></label>\n                  </div>\n                  <input class=\"form-control\" id=\"confirmPassword\" type=\"password\" formControlName=\"confirmPassword\"\n                         [ngClass]=\"{'is-invalid': (\n                     form.get('passwordGroup').get('confirmPassword').touched &&\n                     form.get('passwordGroup').hasError('notSame')\n                     ), 'is-valid': form.get('passwordGroup').get('confirmPassword').valid }\"/>\n                  <span class=\"invalid-feedback\">\n                 <span\n                   *ngIf=\"(form.get('passwordGroup').get('confirmPassword').errors?.required &&\n                   form.get('passwordGroup').get('confirmPassword').touched)\">\n                 Enter a password.\n               </span>\n                <span\n                  *ngIf=\"(form.get('passwordGroup').hasError('notSame') &&\n                   form.get('passwordGroup').get('confirmPassword').touched)\">\n                   Passwords don't match!\n                 </span>\n              </span>\n                </div>\n              </div>\n\n            </div>\n\n          </div>\n\n\n        </div>\n\n\n        <!--Submit-->\n        <div class=\"d-flex justify-content-between\">\n          <div class=\"form-check form-group d-flex justify-content-end\">\n            <label class=\"form-check-label\">\n              <input formControlName=\"remember\" type=\"checkbox\" class=\"form-check-input\">Remember me!</label>\n          </div>\n          <div class=\"form-group d-flex justify-content-start\">\n            <div class=\"controls\">\n              <button\n                [disabled]=\"!form.valid || progress || form.untouched\"\n                type=\"submit\"\n                class=\"btn btn-primary\">\n                Sign Up\n                <fa *ngIf=\"progress\" name=\"cog\" animation=\"spin\"></fa>\n                <fa *ngIf=\"!progress\" name=\"sign-in\"></fa>\n              </button>\n\n\n              <button\n                (click)=\"form.reset()\"\n                [disabled]=\"form.pristine\"\n                type=\"button\"\n                class=\"btn btn-warning\">\n                Reset\n              </button>\n            </div>\n          </div>\n        </div>\n\n\n      </form>\n      <div class=\"text-center\">\n        <p>Already have an account? &nbsp;<a routerLink=\"/login\">Sign In!</a></p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/modules/register/register.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/main/modules/register/register.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbW9kdWxlcy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/main/modules/register/register.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/main/modules/register/register.component.ts ***!
  \*************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/authentication.service */ "./src/app/shared/services/authentication.service.ts");
/* harmony import */ var rxjs_internal_operators_first__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators/first */ "./node_modules/rxjs/internal/operators/first.js");
/* harmony import */ var rxjs_internal_operators_first__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_first__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _shared_validators_email_taken_validator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/validators/email-taken.validator */ "./src/app/shared/validators/email-taken.validator.ts");
/* harmony import */ var _shared_services_check_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/services/check.service */ "./src/app/shared/services/check.service.ts");
/* harmony import */ var _shared_validators_username_taken_validator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/validators/username-taken.validator */ "./src/app/shared/validators/username-taken.validator.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");













var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(titleService, fb, router, route, auth, toastr, check) {
        this.titleService = titleService;
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.auth = auth;
        this.toastr = toastr;
        this.check = check;
        this.progress = false;
        this.returnUrl = null;
        titleService.setTitle(_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].appName + ' :: ' + 'Register');
        this.form = this.fb.group({
            username: ['', {
                    validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)],
                    asyncValidators: [_shared_validators_username_taken_validator__WEBPACK_IMPORTED_MODULE_11__["ValidateUsernameNotTaken"].createValidator(this.check)],
                    updateOn: 'blur'
                }],
            email: ['', {
                    validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email],
                    asyncValidators: [_shared_validators_email_taken_validator__WEBPACK_IMPORTED_MODULE_9__["ValidateEmailNotTaken"].createValidator(this.check)],
                    updateOn: 'blur'
                }],
            passwordGroup: this.fb.group({
                password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
                confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            }, {
                validator: function (group) {
                    var pass = group.controls.password.value;
                    var confirmPassword = group.controls.confirmPassword.value;
                    if (pass === confirmPassword) {
                        return null;
                    }
                    else {
                        return { notSame: true };
                    }
                }
            }),
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]],
            surname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]],
            remember: [false]
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.registerFormName.nativeElement.focus();
        this.routeSub = this.route.queryParams
            .subscribe(function (params) {
            console.log('params', params);
            _this.returnUrl = params.returnUrl;
        });
    };
    RegisterComponent.prototype.submit = function (data) {
        var _this = this;
        console.log(data);
        this.form.markAsPristine();
        this.progress = true;
        this.auth.register({
            username: data.username,
            email: data.email,
            password: data.passwordGroup.password,
            name: data.name,
            surname: data.surname,
            birthday: moment__WEBPACK_IMPORTED_MODULE_6__().format('YYYY-MM-DD')
        })
            .pipe(Object(rxjs_internal_operators_first__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(function (response) {
            console.log('response', response);
            _this.progress = false;
            _this.form.reset();
            _this.toastr.success('We are happy to have you!', 'Welcome aboard ' + response.user.profile.name + '!', {
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
        });
    };
    RegisterComponent.prototype.ngOnDestroy = function () {
        if (this.routeSub !== undefined) {
            this.routeSub.unsubscribe();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('registerFormName'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], RegisterComponent.prototype, "registerFormName", void 0);
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/main/modules/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/main/modules/register/register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Title"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"],
            _shared_services_check_service__WEBPACK_IMPORTED_MODULE_10__["CheckService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/main/modules/register/register.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/main/modules/register/register.module.ts ***!
  \**********************************************************/
/*! exports provided: RegisterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModule", function() { return RegisterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/main/modules/register/register-routing.module.ts");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register.component */ "./src/app/main/modules/register/register.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");








var RegisterModule = /** @class */ (function () {
    function RegisterModule() {
    }
    RegisterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _register_routing_module__WEBPACK_IMPORTED_MODULE_3__["RegisterRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_7__["AngularFontAwesomeModule"]
            ]
        })
    ], RegisterModule);
    return RegisterModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-register-register-module.js.map