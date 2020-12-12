(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-not-found-not-found-module"],{

/***/ "./src/app/main/modules/not-found/not-found-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/main/modules/not-found/not-found-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: NotFoundRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundRoutingModule", function() { return NotFoundRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./not-found.component */ "./src/app/main/modules/not-found/not-found.component.ts");




var routes = [
    {
        path: '',
        component: _not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]
    }
];
var NotFoundRoutingModule = /** @class */ (function () {
    function NotFoundRoutingModule() {
    }
    NotFoundRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], NotFoundRoutingModule);
    return NotFoundRoutingModule;
}());



/***/ }),

/***/ "./src/app/main/modules/not-found/not-found.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/main/modules/not-found/not-found.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"mt-5\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"error-template\">\n          <h1>OOPS! - Could not Find it</h1>\n          <img class=\"logo\" src=\"assets/images/404.png\"  alt=\"404-image\"/>\n          <div class=\"error-details\">\n            Sorry, an error has occurred. The requested page could not be found!\n          </div>\n          <div class=\"error-actions\">\n            <a class=\"btn btn-primary btn-lg\" (click)=\"backClicked()\"><span class=\"glyphicon glyphicon-home\"></span>\n              Take me back\n            </a>\n            <a class=\"btn btn-primary btn-lg\" routerLink=\"\"><span class=\"glyphicon glyphicon-home\"></span>\n              Go to homepage\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</main>\n"

/***/ }),

/***/ "./src/app/main/modules/not-found/not-found.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/main/modules/not-found/not-found.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-template {\n  padding: 40px 15px;\n  text-align: center; }\n\n.error-actions {\n  margin-top: 15px;\n  margin-bottom: 15px; }\n\n.error-actions .btn {\n  margin-right: 10px;\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21zaS9wcm9qZWN0cy9XZWJzdG9ybVByb2plY3RzL3JlbnQtd2ViLWFwcC9zcmMvYXBwL21haW4vbW9kdWxlcy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWlCLGtCQUFrQjtFQUFFLGtCQUFrQixFQUFBOztBQUN2RDtFQUFnQixnQkFBZTtFQUFFLG1CQUFrQixFQUFBOztBQUNuRDtFQUFzQixrQkFBaUI7RUFBRSxZQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL21vZHVsZXMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvci10ZW1wbGF0ZSB7cGFkZGluZzogNDBweCAxNXB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7fVxuLmVycm9yLWFjdGlvbnMge21hcmdpbi10b3A6MTVweDsgbWFyZ2luLWJvdHRvbToxNXB4O31cbi5lcnJvci1hY3Rpb25zIC5idG4geyBtYXJnaW4tcmlnaHQ6MTBweDsgY29sb3I6d2hpdGV9XG4iXX0= */"

/***/ }),

/***/ "./src/app/main/modules/not-found/not-found.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/main/modules/not-found/not-found.component.ts ***!
  \***************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");





var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent(titleService, location) {
        this.titleService = titleService;
        this.location = location;
        titleService.setTitle(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].appName + ' :: ' + 'Not found');
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent.prototype.backClicked = function () {
        this.location.back();
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/main/modules/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/main/modules/not-found/not-found.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/main/modules/not-found/not-found.module.ts":
/*!************************************************************!*\
  !*** ./src/app/main/modules/not-found/not-found.module.ts ***!
  \************************************************************/
/*! exports provided: NotFoundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundModule", function() { return NotFoundModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _not_found_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./not-found-routing.module */ "./src/app/main/modules/not-found/not-found-routing.module.ts");
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./not-found.component */ "./src/app/main/modules/not-found/not-found.component.ts");





var NotFoundModule = /** @class */ (function () {
    function NotFoundModule() {
    }
    NotFoundModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _not_found_routing_module__WEBPACK_IMPORTED_MODULE_3__["NotFoundRoutingModule"]
            ]
        })
    ], NotFoundModule);
    return NotFoundModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-not-found-not-found-module.js.map