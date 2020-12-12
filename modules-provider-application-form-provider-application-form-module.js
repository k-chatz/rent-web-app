(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-provider-application-form-provider-application-form-module"],{

/***/ "./src/app/main/modules/provider-application-form/provider-application-form-routing.module.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/main/modules/provider-application-form/provider-application-form-routing.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: ProviderApplicationFormRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderApplicationFormRoutingModule", function() { return ProviderApplicationFormRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _provider_application_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./provider-application-form.component */ "./src/app/main/modules/provider-application-form/provider-application-form.component.ts");




var routes = [
    {
        path: '',
        component: _provider_application_form_component__WEBPACK_IMPORTED_MODULE_3__["ProviderApplicationFormComponent"]
    }
];
var ProviderApplicationFormRoutingModule = /** @class */ (function () {
    function ProviderApplicationFormRoutingModule() {
    }
    ProviderApplicationFormRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ProviderApplicationFormRoutingModule);
    return ProviderApplicationFormRoutingModule;
}());



/***/ }),

/***/ "./src/app/main/modules/provider-application-form/provider-application-form.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/main/modules/provider-application-form/provider-application-form.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"jumbotron\" style=\"margin-bottom: 1rem;\">\n    <div class=\"login-form mx-auto d-block w-100\">\n      <div class=\"page-header text-center\">\n        <h1>Provider Application</h1>\n        <h5> To be able to rent your property, you have to enter your company information</h5>\n      </div>\n\n      <form [formGroup]=\"form\" (ngSubmit)=\"submit(form.value)\" class=\"form-validate\">\n\n        <fieldset class=\"scheduler-border\">\n          <legend class=\"scheduler-border\">Company Owner Information:</legend>\n          <div class=\"form-row\">\n            <div class=\"col-md-4 mb-3\">\n              <!--Name-->\n              <div class=\"form-group\">\n                <div class=\"control-label\">\n                  <label id=\"name-lbl\" for=\"name\" class=\"required\">\n                    Name\n                    <span class=\"star\"> *</span></label>\n                </div>\n                <div class=\"controls\">\n                  <input class=\"form-control\" id=\"name\" type=\"text\" formControlName=\"name\" #registerFormName\n                         [ngClass]=\"{'is-invalid': (form.get('name').touched || form.get('name').dirty)\n                    && !form.get('name').valid }\"/>\n                  <span class=\"invalid-feedback\">\n              <span *ngIf=\"(form.get('name').errors?.required &&\n              form.get('name').touched)\">\n                The name is required!\n              </span>\n              <span *ngIf=\"(form.get('name').errors?.minlength &&\n               form.get('name').touched)\">\n                Too short!\n              </span>\n              <span *ngIf=\"(form.get('name').errors?.maxlength &&\n               form.get('name').touched)\">\n                Too long!\n              </span>\n            </span>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-md-4 mb-3\">\n              <!--Surname-->\n              <div class=\"form-group\">\n                <div class=\"control-label\">\n                  <label id=\"surname-lbl\" for=\"surname\" class=\"required\">\n                    Surname\n                    <span class=\"star\"> *</span></label>\n                </div>\n                <div class=\"controls\">\n                  <input class=\"form-control\" id=\"surname\" type=\"text\" formControlName=\"surname\"\n                         [ngClass]=\"{'is-invalid': (form.get('surname').touched || form.get('surname').dirty) &&\n                                         !form.get('surname').valid }\"/>\n                  <span class=\"invalid-feedback\">\n              <span *ngIf=\"(form.get('surname').errors?.required && form.get('surname').touched)\">\n                The surname is required!\n              </span>\n              <span *ngIf=\"(form.get('surname').errors?.minlength && form.get('surname').touched)\">\n                Too short!\n              </span>\n             <span *ngIf=\"(form.get('surname').errors?.maxlength && form.get('surname').touched)\">\n                Too long!\n              </span>\n            </span>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-md-4 mb-3\">\n              <!--Patronym-->\n              <div class=\"form-group\">\n                <div class=\"control-label\">\n                  <label id=\"patronym-lbl\" for=\"name\" class=\"required\">\n                    Patronym\n                    <span class=\"star\"> *</span></label>\n                </div>\n                <div class=\"controls\">\n                  <input class=\"form-control\" id=\"patronym\" type=\"text\" formControlName=\"patronym\"\n                         [ngClass]=\"{'is-invalid': (form.get('patronym').touched || form.get('patronym').dirty)\n                    && !form.get('name').valid }\"/>\n                  <span class=\"invalid-feedback\">\n              <span *ngIf=\"(form.get('patronym').errors?.required &&\n              form.get('patronym').touched)\">\n                The patronym is required!\n              </span>\n              <span *ngIf=\"(form.get('patronym').errors?.minlength &&\n               form.get('patronym').touched)\">\n                Too short!\n              </span>\n              <span *ngIf=\"(form.get('patronym').errors?.maxlength &&\n               form.get('patronym').touched)\">\n                Too long!\n              </span>\n            </span>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <!--Residence Address-->\n          <div class=\"form-group\">\n            <div class=\"control-label\">\n              <label id=\"residence-address-lbl\" for=\"residence-address\" class=\"required\">\n                Residence Address\n                <span class=\"star\"> *</span></label>\n            </div>\n            <div class=\"controls\">\n              <input class=\"form-control\" id=\"residence-address\" type=\"text\" formControlName=\"residence_address\"\n                     [ngClass]=\"{'is-invalid': (form.get('residence_address').touched || form.get('residence_address').dirty) &&\n                                         !form.get('residence_address').valid }\"/>\n              <span class=\"invalid-feedback\">\n              <span *ngIf=\"(form.get('residence_address').errors?.required && form.get('residence_address').touched)\">\n                The residence address is required!\n              </span>\n              <span *ngIf=\"(form.get('residence_address').errors?.minlength && form.get('residence_address').touched)\">\n                Too short!\n              </span>\n             <span *ngIf=\"(form.get('residence_address').errors?.maxlength && form.get('residence_address').touched)\">\n                Too long!\n              </span>\n            </span>\n            </div>\n          </div>\n        </fieldset>\n\n        <fieldset class=\"scheduler-border\">\n          <legend class=\"scheduler-border\">Company Information:</legend>\n\n          <!--Company Name-->\n          <div class=\"form-group\">\n            <div class=\"control-label\">\n              <label id=\"company-name-lbl\" for=\"company-name\" class=\"required\">\n                Company Name\n                <span class=\"star\"> *</span></label>\n            </div>\n            <div class=\"controls\">\n              <input class=\"form-control\" id=\"company-name\" type=\"text\" formControlName=\"company_name\"\n                     [ngClass]=\"{'is-invalid': (form.get('company_name').touched || form.get('company_name').dirty)\n                    && !form.get('company_name').valid }\"/>\n              <span class=\"invalid-feedback\">\n              <span *ngIf=\"(form.get('company_name').errors?.required &&\n              form.get('company_name').touched)\">\n                The company name is required!\n              </span>\n              <span *ngIf=\"(form.get('company_name').errors?.minlength &&\n               form.get('company_name').touched)\">\n                Too short!\n              </span>\n              <span *ngIf=\"(form.get('company_name').errors?.maxlength &&\n               form.get('company_name').touched)\">\n                Too long!\n              </span>\n            </span>\n            </div>\n          </div>\n\n          <!--Company Address-->\n          <div class=\"form-group\">\n            <div class=\"control-label\">\n              <label id=\"company-address-lbl\" for=\"company-address\" class=\"required\">\n                Company Address\n                <span class=\"star\"> *</span></label>\n            </div>\n            <div class=\"controls\">\n              <input class=\"form-control\" id=\"company-address\" type=\"text\" formControlName=\"company_address\"\n                     [ngClass]=\"{'is-invalid': (form.get('company_address').touched || form.get('company_address').dirty) &&\n                                         !form.get('company_address').valid }\"/>\n              <span class=\"invalid-feedback\">\n              <span *ngIf=\"(form.get('company_address').errors?.required && form.get('company_address').touched)\">\n                The company address is required!\n              </span>\n              <span *ngIf=\"(form.get('company_address').errors?.minlength && form.get('company_address').touched)\">\n                Too short!\n              </span>\n             <span *ngIf=\"(form.get('company_address').errors?.maxlength && form.get('company_address').touched)\">\n                Too long!\n              </span>\n            </span>\n            </div>\n          </div>\n\n          <div class=\"form-row\">\n\n            <div class=\"col-md-6 mb-3\">\n              <!--Tax Number-->\n              <div class=\"form-group\">\n                <div class=\"control-label\">\n                  <label id=\"tax-number-lbl\" for=\"tax-number\" class=\"required\">\n                    Tax Number\n                    <span class=\"star\"> *</span></label>\n                </div>\n                <div class=\"controls\">\n                  <input class=\"form-control\" id=\"tax-number\" type=\"text\" formControlName=\"tax_number\"\n                         [ngClass]=\"{'is-invalid': (form.get('tax_number').touched || form.get('tax_number').dirty) &&\n                                         !form.get('tax_number').valid }\"/>\n                  <span class=\"invalid-feedback\">\n              <span *ngIf=\"(form.get('tax_number').errors?.required && form.get('tax_number').touched)\">\n                The company tax number is required!\n              </span>\n              <span *ngIf=\"(form.get('tax_number').errors?.minlength && form.get('tax_number').touched)\">\n                Too short!\n              </span>\n             <span *ngIf=\"(form.get('tax_number').errors?.maxlength && form.get('tax_number').touched)\">\n                Too long!\n              </span>\n            </span>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-md-6 mb-3\">\n              <!--Tax Office-->\n              <div class=\"form-group\">\n                <div class=\"control-label\">\n                  <label id=\"tax-office-lbl\" for=\"tax-office\" class=\"required\">\n                    Tax Office\n                    <span class=\"star\"> *</span></label>\n                </div>\n                <div class=\"controls\">\n                  <input class=\"form-control\" id=\"tax-office\" type=\"text\" formControlName=\"tax_office\"\n                         [ngClass]=\"{'is-invalid': (form.get('tax_office').touched || form.get('tax_office').dirty) &&\n                                         !form.get('tax_office').valid }\"/>\n                  <span class=\"invalid-feedback\">\n              <span *ngIf=\"(form.get('tax_office').errors?.required && form.get('tax_office').touched)\">\n                The company tax office is required!\n              </span>\n              <span *ngIf=\"(form.get('tax_office').errors?.minlength && form.get('tax_office').touched)\">\n                Too short!\n              </span>\n             <span *ngIf=\"(form.get('tax_office').errors?.maxlength && form.get('tax_office').touched)\">\n                Too long!\n              </span>\n            </span>\n                </div>\n              </div>\n            </div>\n\n          </div>\n          <div class=\"form-row\">\n\n            <div class=\"col-md-4 mb-3\">\n              <!--Id Card Number-->\n              <div class=\"form-group\">\n                <div class=\"control-label\">\n                  <label id=\"id-card-number-lbl\" for=\"id-card-number\" class=\"required\">\n                    Id Card Number\n                    <span class=\"star\"> *</span></label>\n                </div>\n                <div class=\"controls\">\n                  <input class=\"form-control\" id=\"id-card-number\" type=\"text\" formControlName=\"id_card_number\"\n                         [ngClass]=\"{'is-invalid': (form.get('id_card_number').touched || form.get('id_card_number').dirty) &&\n                                         !form.get('id_card_number').valid }\"/>\n                  <span class=\"invalid-feedback\">\n              <span *ngIf=\"(form.get('id_card_number').errors?.required && form.get('id_card_number').touched)\">\n                The id card number is required!\n              </span>\n              <span *ngIf=\"(form.get('id_card_number').errors?.minlength && form.get('id_card_number').touched)\">\n                Too short!\n              </span>\n             <span *ngIf=\"(form.get('id_card_number').errors?.maxlength && form.get('id_card_number').touched)\">\n                Too long!\n              </span>\n            </span>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-md-4 mb-3\">\n              <!--Id Card Publishing Authority-->\n              <div class=\"form-group\">\n                <div class=\"control-label\">\n                  <label id=\"id-card-publishing-authority-lbl\" for=\"id-card-publishing-authority\" class=\"required\">\n                    Id Card Publishing Authority\n                    <span class=\"star\"> *</span></label>\n                </div>\n                <div class=\"controls\">\n                  <input class=\"form-control\" id=\"id-card-publishing-authority\" type=\"text\"\n                         formControlName=\"id_card_publishing_authority\"\n                         [ngClass]=\"{'is-invalid': (form.get('id_card_publishing_authority').touched || form.get('id_card_publishing_authority').dirty) &&\n                                         !form.get('id_card_publishing_authority').valid }\"/>\n                  <span class=\"invalid-feedback\">\n              <span\n                *ngIf=\"(form.get('id_card_publishing_authority').errors?.required && form.get('id_card_publishing_authority').touched)\">\n                The id card publishing authority is required!\n              </span>\n              <span\n                *ngIf=\"(form.get('id_card_publishing_authority').errors?.minlength && form.get('id_card_publishing_authority').touched)\">\n                Too short!\n              </span>\n             <span\n               *ngIf=\"(form.get('id_card_publishing_authority').errors?.maxlength && form.get('id_card_publishing_authority').touched)\">\n                Too long!\n              </span>\n            </span>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-md-4 mb-3\">\n              <!--Id Card Date of Issue-->\n              <div class=\"form-group\">\n                <div class=\"control-label\">\n                  <label id=\"id-card-date-issue-lbl\" for=\"id-card-date-issue\" class=\"required\">\n                    Id Card Date of Issue\n                    <span class=\"star\"> *</span></label>\n                </div>\n                <div class=\"controls\">\n                  <input class=\"form-control\" id=\"id-card-date-issue\" type=\"text\"\n                         formControlName=\"id_card_date_of_issue\"\n                         [ngClass]=\"{'is-invalid': (form.get('id_card_date_of_issue').touched || form.get('id_card_date_of_issue').dirty)\n                    && !form.get('id_card_date_of_issue').valid }\"/>\n                  <span class=\"invalid-feedback\">\n              <span *ngIf=\"(form.get('id_card_date_of_issue').errors?.required &&\n              form.get('id_card_date_of_issue').touched)\">\n                The id card date of issue is required!\n              </span>\n              <span *ngIf=\"(form.get('id_card_date_of_issue').errors?.minlength &&\n               form.get('id_card_date_of_issue').touched)\">\n                Too short!\n              </span>\n              <span *ngIf=\"(form.get('id_card_date_of_issue').errors?.maxlength &&\n               form.get('id_card_date_of_issue').touched)\">\n                Too long!\n              </span>\n            </span>\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </fieldset>\n\n        <!--Submit-->\n        <div class=\"d-flex justify-content-end\">\n          <div class=\"form-group d-flex justify-content-start\">\n            <div class=\"controls\">\n              <button\n                [disabled]=\"!form.valid || progress || form.untouched\"\n                type=\"submit\"\n                class=\"btn btn-primary\">\n                Apply\n                <fa *ngIf=\"progress\" name=\"cog\" animation=\"spin\"></fa>\n                <fa *ngIf=\"!progress\" name=\"sign-in\"></fa>\n              </button>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/modules/provider-application-form/provider-application-form.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/main/modules/provider-application-form/provider-application-form.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "fieldset.scheduler-border {\n  border: 1px groove #ddd !important;\n  padding: 0 1.4em 1.4em 1.4em !important;\n  margin: 0 0 1.5em 0 !important;\n  box-shadow: 0px 0px 0px 0px #000; }\n\nlegend.scheduler-border {\n  font-size: 1.2em !important;\n  font-weight: bold !important;\n  text-align: left !important;\n  width: auto;\n  padding: 0 10px;\n  border-bottom: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21zaS9wcm9qZWN0cy9XZWJzdG9ybVByb2plY3RzL3JlbnQtd2ViLWFwcC9zcmMvYXBwL21haW4vbW9kdWxlcy9wcm92aWRlci1hcHBsaWNhdGlvbi1mb3JtL3Byb3ZpZGVyLWFwcGxpY2F0aW9uLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQ0FBa0M7RUFDbEMsdUNBQXVDO0VBQ3ZDLDhCQUE4QjtFQUU5QixnQ0FBaUMsRUFBQTs7QUFHbkM7RUFDRSwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixXQUFVO0VBQ1YsZUFBYztFQUNkLG1CQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tb2R1bGVzL3Byb3ZpZGVyLWFwcGxpY2F0aW9uLWZvcm0vcHJvdmlkZXItYXBwbGljYXRpb24tZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZpZWxkc2V0LnNjaGVkdWxlci1ib3JkZXIge1xuICBib3JkZXI6IDFweCBncm9vdmUgI2RkZCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwIDEuNGVtIDEuNGVtIDEuNGVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCAwIDEuNWVtIDAgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAgMHB4IDBweCAwcHggMHB4ICMwMDA7XG4gIGJveC1zaGFkb3c6ICAwcHggMHB4IDBweCAwcHggIzAwMDtcbn1cblxubGVnZW5kLnNjaGVkdWxlci1ib3JkZXIge1xuICBmb250LXNpemU6IDEuMmVtICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgd2lkdGg6YXV0bztcbiAgcGFkZGluZzowIDEwcHg7XG4gIGJvcmRlci1ib3R0b206bm9uZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/modules/provider-application-form/provider-application-form.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/main/modules/provider-application-form/provider-application-form.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ProviderApplicationFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderApplicationFormComponent", function() { return ProviderApplicationFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/authentication.service */ "./src/app/shared/services/authentication.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");








var ProviderApplicationFormComponent = /** @class */ (function () {
    function ProviderApplicationFormComponent(titleService, fb, router, route, auth, toastr) {
        this.titleService = titleService;
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.auth = auth;
        this.toastr = toastr;
        this.progress = false;
        this.returnUrl = null;
        titleService.setTitle(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].appName + ' :: ' + 'Provider Application');
        this.form = this.fb.group({
            company_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]],
            surname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]],
            patronym: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]],
            company_address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]],
            tax_number: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]],
            tax_office: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]],
            id_card_number: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]],
            id_card_publishing_authority: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]],
            id_card_date_of_issue: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]],
            residence_address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]]
        });
    }
    ProviderApplicationFormComponent.prototype.ngOnInit = function () {
        this.registerFormName.nativeElement.focus();
    };
    ProviderApplicationFormComponent.prototype.submit = function (data) {
        console.log(data);
        this.form.markAsPristine();
        this.progress = true;
        // Todo: request for provider to API
        sessionStorage.setItem('pending_provider', null);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('registerFormName'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ProviderApplicationFormComponent.prototype, "registerFormName", void 0);
    ProviderApplicationFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-provider-application-form',
            template: __webpack_require__(/*! ./provider-application-form.component.html */ "./src/app/main/modules/provider-application-form/provider-application-form.component.html"),
            styles: [__webpack_require__(/*! ./provider-application-form.component.scss */ "./src/app/main/modules/provider-application-form/provider-application-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], ProviderApplicationFormComponent);
    return ProviderApplicationFormComponent;
}());



/***/ }),

/***/ "./src/app/main/modules/provider-application-form/provider-application-form.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/main/modules/provider-application-form/provider-application-form.module.ts ***!
  \********************************************************************************************/
/*! exports provided: ProviderApplicationFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderApplicationFormModule", function() { return ProviderApplicationFormModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _provider_application_form_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./provider-application-form-routing.module */ "./src/app/main/modules/provider-application-form/provider-application-form-routing.module.ts");
/* harmony import */ var _provider_application_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./provider-application-form.component */ "./src/app/main/modules/provider-application-form/provider-application-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");







var ProviderApplicationFormModule = /** @class */ (function () {
    function ProviderApplicationFormModule() {
    }
    ProviderApplicationFormModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_provider_application_form_component__WEBPACK_IMPORTED_MODULE_4__["ProviderApplicationFormComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _provider_application_form_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProviderApplicationFormRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_6__["AngularFontAwesomeModule"]
            ]
        })
    ], ProviderApplicationFormModule);
    return ProviderApplicationFormModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-provider-application-form-provider-application-form-module.js.map