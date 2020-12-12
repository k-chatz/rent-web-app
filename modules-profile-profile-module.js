(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-profile-profile-module"],{

/***/ "./src/app/main/modules/profile/profile-image/profile-image.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/main/modules/profile/profile-image/profile-image.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  font-family: Lato;\n}\n\nimg {\n  height: 100%;\n  width: 100%;\n  border-radius: 50%;\n}\n\n.hoverable{\n  position: relative;\n  display: block;\n  cursor: pointer;\n  height: 200px;\n  width: 200px;\n  border: 2px solid dodgerblue;\n  border-radius: 50%;\n}\n\n.hoverable .hover-text{\n  position: absolute;\n  display: none;\n  top: 50%;\n  left:  50%;\n  -webkit-transform: translate(-50%,-50%);\n          transform: translate(-50%,-50%);   \n  z-index: 2;\n}\n\n.hoverable .background{\n  position: absolute;\n  display: none;\n  top: 0;\n  left:  0;\n  bottom: 0;\n  right: 0;\n  background-color:rgba(255, 255, 255, 0.5);\n  pointer-events: none;\n  border-radius: 50%;\n  z-index: 1;\n}\n\n.hoverable:hover .hover-text{\n  display: block;\n  font-size: 2em;\n  font-weight: bold;\n  text-align: center;\n}\n\n.hoverable:hover .background{\n  display: block;\n}\n\n#fileInput{\n  display: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tb2R1bGVzL3Byb2ZpbGUvcHJvZmlsZS1pbWFnZS9wcm9maWxlLWltYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGFBQWE7RUFDYixZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsUUFBUTtFQUNSLFVBQVU7RUFDVix1Q0FBK0I7VUFBL0IsK0JBQStCO0VBQy9CLFVBQVU7QUFDWjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsTUFBTTtFQUNOLFFBQVE7RUFDUixTQUFTO0VBQ1QsUUFBUTtFQUNSLHlDQUF5QztFQUN6QyxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9tYWluL21vZHVsZXMvcHJvZmlsZS9wcm9maWxlLWltYWdlL3Byb2ZpbGUtaW1hZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xuICBmb250LWZhbWlseTogTGF0bztcbn1cblxuaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmhvdmVyYWJsZXtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGRvZGdlcmJsdWU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5ob3ZlcmFibGUgLmhvdmVyLXRleHR7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogbm9uZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6ICA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7ICAgXG4gIHotaW5kZXg6IDI7XG59XG4uaG92ZXJhYmxlIC5iYWNrZ3JvdW5ke1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHRvcDogMDtcbiAgbGVmdDogIDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiAxO1xufVxuLmhvdmVyYWJsZTpob3ZlciAuaG92ZXItdGV4dHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmhvdmVyYWJsZTpob3ZlciAuYmFja2dyb3VuZHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbiNmaWxlSW5wdXR7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/main/modules/profile/profile-image/profile-image.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/main/modules/profile/profile-image/profile-image.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label class=\"hoverable\" for=\"fileInput\">\n  <img [src]=\"url ? url : 'assets/images/person.svg'\">\n  <div class=\"hover-text\">\n    Choose file\n    <h4 class=\"success-message\" *ngIf=\"url\"> Uploaded Successfully </h4>\n    </div>\n  <div class=\"background\"></div>\n</label>\n<br/>\n<input id=\"fileInput\" type='file' (change)=\"onSelectFile($event)\">\n"

/***/ }),

/***/ "./src/app/main/modules/profile/profile-image/profile-image.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/main/modules/profile/profile-image/profile-image.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProfileImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileImageComponent", function() { return ProfileImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_file_uploader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/file-uploader.service */ "./src/app/shared/services/file-uploader.service.ts");
/* harmony import */ var _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/authentication.service */ "./src/app/shared/services/authentication.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");






var ProfileImageComponent = /** @class */ (function () {
    function ProfileImageComponent(auth, userService, fileUploadService) {
        this.auth = auth;
        this.userService = userService;
        this.fileUploadService = fileUploadService;
        this.url = '';
    }
    ProfileImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sessionSub = this.auth.session$.subscribe(function (session) {
            _this.signedInUser = session.user;
            console.log(_this.signedInUser);
            // Get user's profile which contains the profile_photo-url.
            _this.userService.getProfileByUsername(_this.signedInUser.username).subscribe(function (profile) {
                _this.profile = profile;
                console.log(_this.profile);
                var profilePhotoUrl = _this.profile.photo_url;
                if (profilePhotoUrl != null) {
                    _this.url = profilePhotoUrl;
                }
                else { // If the url is null, then request a dummy profile photo from the backend.
                    _this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].usersEndpoint + "/" + _this.signedInUser.id + "/profile_photo";
                }
                console.log(_this.url);
                // Change photo-url in session
                _this.auth.session.profile.photo_url = _this.url;
            });
        });
    };
    ProfileImageComponent.prototype.onSelectFile = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            // Upload file to be saved in the backend.
            this.fileUploadService.uploadProfilePhoto(event.target.files[0], this.signedInUser.id);
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]); // read file as data url
            reader.onload = function (readerEvent) {
                _this.url = readerEvent.target.result;
            };
        }
        else {
            console.error('Something\'s wrong in "onSelectFile()"!');
        }
    };
    ProfileImageComponent.prototype.delete = function () {
        this.url = null;
    };
    ProfileImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile-image',
            template: __webpack_require__(/*! ./profile-image.component.html */ "./src/app/main/modules/profile/profile-image/profile-image.component.html"),
            styles: [__webpack_require__(/*! ./profile-image.component.css */ "./src/app/main/modules/profile/profile-image/profile-image.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _shared_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _shared_services_file_uploader_service__WEBPACK_IMPORTED_MODULE_2__["FileUploaderService"]])
    ], ProfileImageComponent);
    return ProfileImageComponent;
}());



/***/ }),

/***/ "./src/app/main/modules/profile/profile-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/main/modules/profile/profile-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: ProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function() { return ProfileRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.component */ "./src/app/main/modules/profile/profile.component.ts");




var routes = [
    {
        path: '',
        component: _profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"]
    }
];
var ProfileRoutingModule = /** @class */ (function () {
    function ProfileRoutingModule() {
    }
    ProfileRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ProfileRoutingModule);
    return ProfileRoutingModule;
}());



/***/ }),

/***/ "./src/app/main/modules/profile/profile.component.html":
/*!*************************************************************!*\
  !*** ./src/app/main/modules/profile/profile.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1 class=\"display-5\">Profile Information:</h1><hr class=\"my-4\">\n    <div class=\"row\">\n      <div class=\"col-4\">\n        <app-profile-image></app-profile-image>\n      </div>\n      <div [hidden]=\"editing\" class=\"col-8\">\n        <h5>Username: {{username}}</h5>\n        <h5>Name: {{session.profile.name}}</h5>\n        <h5>Surname: {{session.profile.surname}}</h5>\n        <img (click)=\"editing = true\" src=\"assets/images/edit.svg\">\n      </div>\n      <div [hidden]=\"!editing\" class=\"col-8\">\n        <form>\n          <div class=\"form-group row\">\n            <label class=\"col-sm-2 col-form-label\" for=\"usernameInput\">Username:</label>\n            <div class=\"col-sm-10\">\n              <input [(ngModel)]=\"username\" name=\"username\" type=\"text\" class=\"form-control\"\n                     id=\"usernameInput\" placeholder=\"{{username}}\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label class=\"col-sm-2 col-form-label\" for=\"nameInput\">Name:</label>\n            <div class=\"col-sm-10\">\n              <input [(ngModel)]=\"session.profile.name\" name=\"name\" type=\"text\" class=\"form-control\"\n                     id=\"nameInput\" placeholder=\"{{session.profile.name}}\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label class=\"col-sm-2 col-form-label\" for=\"surnameInput\">Surname:</label>\n            <div class=\"col-sm-10\">\n              <input [(ngModel)]=\"session.profile.surname\" name=\"surname\" type=\"text\" class=\"form-control\" id=\"surnameInput\"\n                     placeholder=\"{{session.profile.surname}}\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <div class=\"col-sm-8\"></div>\n            <div class=\"col-sm-4\">\n              <button (click)=\"editing = false\" type=\"submit\" class=\"btn btn-primary\">Apply</button>\n              <button (click)=\"editing = false\" type=\"reset\" class=\"btn btn-secondary\">Cancel</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/modules/profile/profile.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/main/modules/profile/profile.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron {\n  padding-top: 1em; }\n\n#username {\n  display: inline-block; }\n\nlabel {\n  font-size: 1.5em;\n  font-weight: bold; }\n\nh5 {\n  font-size: 2em;\n  font-weight: bold; }\n\n.btn-primary {\n  margin-right: 1em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21zaS9wcm9qZWN0cy9XZWJzdG9ybVByb2plY3RzL3JlbnQtd2ViLWFwcC9zcmMvYXBwL21haW4vbW9kdWxlcy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsY0FBYztFQUNkLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tb2R1bGVzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qdW1ib3Ryb24ge1xuICBwYWRkaW5nLXRvcDogMWVtO1xufVxuXG4jdXNlcm5hbWUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbmxhYmVsIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmg1IHtcbiAgZm9udC1zaXplOiAyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYnRuLXByaW1hcnkge1xuICBtYXJnaW4tcmlnaHQ6IDFlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/modules/profile/profile.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/main/modules/profile/profile.component.ts ***!
  \***********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/authentication.service */ "./src/app/shared/services/authentication.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(titleService, auth) {
        this.titleService = titleService;
        this.auth = auth;
        this.editing = false;
        titleService.setTitle(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].appName + ' :: ' + 'Profile');
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.session$.subscribe(function (session) {
            _this.session = session;
            _this.username = _this.session.user.username;
        });
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/main/modules/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/main/modules/profile/profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/main/modules/profile/profile.module.ts":
/*!********************************************************!*\
  !*** ./src/app/main/modules/profile/profile.module.ts ***!
  \********************************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/main/modules/profile/profile-routing.module.ts");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile.component */ "./src/app/main/modules/profile/profile.component.ts");
/* harmony import */ var _profile_image_profile_image_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-image/profile-image.component */ "./src/app/main/modules/profile/profile-image/profile-image.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"], _profile_image_profile_image_component__WEBPACK_IMPORTED_MODULE_5__["ProfileImageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _profile_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProfileRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ]
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-profile-profile-module.js.map