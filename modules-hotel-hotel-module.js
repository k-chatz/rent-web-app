(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-hotel-hotel-module"],{

/***/ "./src/app/main/modules/hotel/components/hotel-details/hotel-details.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/main/modules/hotel/components/hotel-details/hotel-details.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h1 class=\"display-6\">{{name}}</h1>\n  <h4>{{shortDescription}}</h4>\n  <nz-rate [ngModel]=\"stars\" nzDisabled></nz-rate>\n  <hr class=\"my-4\">\n  <p>Contact info: <b>{{email}}</b></p>\n  <hr class=\"my-4\">\n  <p>{{longDescription}}</p>\n</div>\n"

/***/ }),

/***/ "./src/app/main/modules/hotel/components/hotel-details/hotel-details.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/main/modules/hotel/components/hotel-details/hotel-details.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbW9kdWxlcy9ob3RlbC9jb21wb25lbnRzL2hvdGVsLWRldGFpbHMvaG90ZWwtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/main/modules/hotel/components/hotel-details/hotel-details.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/main/modules/hotel/components/hotel-details/hotel-details.component.ts ***!
  \****************************************************************************************/
/*! exports provided: HotelDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelDetailsComponent", function() { return HotelDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HotelDetailsComponent = /** @class */ (function () {
    function HotelDetailsComponent() {
    }
    HotelDetailsComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HotelDetailsComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HotelDetailsComponent.prototype, "stars", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HotelDetailsComponent.prototype, "shortDescription", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HotelDetailsComponent.prototype, "email", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HotelDetailsComponent.prototype, "longDescription", void 0);
    HotelDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hotel-details',
            template: __webpack_require__(/*! ./hotel-details.component.html */ "./src/app/main/modules/hotel/components/hotel-details/hotel-details.component.html"),
            styles: [__webpack_require__(/*! ./hotel-details.component.scss */ "./src/app/main/modules/hotel/components/hotel-details/hotel-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HotelDetailsComponent);
    return HotelDetailsComponent;
}());



/***/ }),

/***/ "./src/app/main/modules/hotel/components/hotel-reviews/hotel-reviews.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/main/modules/hotel/components/hotel-reviews/hotel-reviews.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"reviews\">\n  <h2>Reviews:</h2>\n<!--  <ul class=\"list-group\">-->\n<!--    <li *ngFor=\"let review of reviews\" class=\"list-group-item\">-->\n<!--      <p>{{review.name}}</p>-->\n<!--      <nz-rate [ngModel]=\"review.score\" nzDisabled></nz-rate>-->\n<!--      <p>{{review.text}}</p>-->\n<!--    </li>-->\n<!--  </ul>-->\n  <div class=\"row\">\n    <div *ngFor=\"let review of reviews\"  class=\"col-3\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{review.name}}</h5>\n          <nz-rate [ngModel]=\"review.score\" nzDisabled></nz-rate>\n          <p class=\"card-text\">{{review.text}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/modules/hotel/components/hotel-reviews/hotel-reviews.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/main/modules/hotel/components/hotel-reviews/hotel-reviews.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".reviews {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21zaS9wcm9qZWN0cy9XZWJzdG9ybVByb2plY3RzL3JlbnQtd2ViLWFwcC9zcmMvYXBwL21haW4vbW9kdWxlcy9ob3RlbC9jb21wb25lbnRzL2hvdGVsLXJldmlld3MvaG90ZWwtcmV2aWV3cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tb2R1bGVzL2hvdGVsL2NvbXBvbmVudHMvaG90ZWwtcmV2aWV3cy9ob3RlbC1yZXZpZXdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJldmlld3Mge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/main/modules/hotel/components/hotel-reviews/hotel-reviews.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/main/modules/hotel/components/hotel-reviews/hotel-reviews.component.ts ***!
  \****************************************************************************************/
/*! exports provided: HotelReviewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelReviewsComponent", function() { return HotelReviewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HotelReviewsComponent = /** @class */ (function () {
    function HotelReviewsComponent() {
        this.reviews = [
            { name: 'Helen', score: 5.0, text: 'I MET MY BOYFRIEND HERE!' },
            { name: 'Toni', score: 4.3, text: 'Excellent hotel.' },
            { name: 'Mary', score: 2.5, text: 'It\'s fucking haunted' },
            { name: 'Nick', score: 1.0, text: 'Shitty experience.' }
        ];
    }
    HotelReviewsComponent.prototype.ngOnInit = function () {
    };
    HotelReviewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hotel-reviews',
            template: __webpack_require__(/*! ./hotel-reviews.component.html */ "./src/app/main/modules/hotel/components/hotel-reviews/hotel-reviews.component.html"),
            styles: [__webpack_require__(/*! ./hotel-reviews.component.scss */ "./src/app/main/modules/hotel/components/hotel-reviews/hotel-reviews.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HotelReviewsComponent);
    return HotelReviewsComponent;
}());



/***/ }),

/***/ "./src/app/main/modules/hotel/components/images-carousel/images-carousel.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/main/modules/hotel/components/images-carousel/images-carousel.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"carousel-images\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"false\">\n  <div class=\"carousel-inner\" style=\"height: 534px;\">\n    <div *ngFor=\"let image of images; let i = index\" class=\"carousel-item active\" [class.active]=\"i == 0\">\n      <img class=\"d-block w-100\" src=\"{{image.fileDownloadUri}}\" alt=\"\">\n    </div>\n\n    <a class=\"carousel-control-prev\" href=\"#carousel-images\" role=\"button\" data-slide=\"prev\"\n       (click)=\"slidePrevious()\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n\n    <a class=\"carousel-control-next\" href=\"#carousel-images\" role=\"button\" data-slide=\"next\"\n       (click)=\"slideNext()\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n\n  <div id=\"carousel-thumbnails\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"false\">\n    <div class=\"carousel-inner\">\n\n      <div *ngFor=\"let group of thumbnails; let i = index\" class=\"carousel-item active\" [class.active]=\"i == 0\">\n        <img (click)=\"changeSlide(i*maxThumbnails+j)\" *ngFor=\"let image of group; let j = index\"\n             src=\"{{image.fileDownloadUri}}\"\n             data-target=\"#carousel-images\" [attr.data-slide-to]=\"i * maxThumbnails + j\"\n             class=\"thumbnail img-responsive selected\" style=\"height: 84.4px;\"\n             [class.selected]=\"i * maxThumbnails + j == currentSlide\">\n      </div>\n\n      <a class=\"carousel-control-prev thumbnail-control\" href=\"#carousel-thumbnails\" role=\"button\" data-slide=\"prev\">\n        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Previous</span>\n      </a>\n\n      <a class=\"carousel-control-next thumbnail-control\" href=\"#carousel-thumbnails\" role=\"button\" data-slide=\"next\">\n        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Next</span>\n      </a>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/modules/hotel/components/images-carousel/images-carousel.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/main/modules/hotel/components/images-carousel/images-carousel.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel {\n  min-width: 50em;\n  margin-bottom: 15px; }\n\n#carousel-thumbnails {\n  text-align: center; }\n\n#carousel-thumbnails img {\n  width: 9em;\n  margin: 2px;\n  opacity: 0.7; }\n\n.selected {\n  opacity: 1 !important; }\n\n.thumbnail {\n  cursor: pointer; }\n\n.carousel-control.left {\n  background-image: none;\n  width: 54px;\n  height: 54px;\n  top: 50%;\n  left: 20px;\n  margin-top: -27px;\n  line-height: 54px;\n  border: 2px solid #fff;\n  opacity: 1;\n  text-shadow: none;\n  transition: all 0.2s ease-in-out 0s; }\n\n.carousel-control.right {\n  background-image: none;\n  width: 54px;\n  height: 54px;\n  top: 50%;\n  right: 20px;\n  margin-top: -27px;\n  line-height: 54px;\n  border: 2px solid #fff;\n  opacity: 1;\n  text-shadow: none;\n  transition: all 0.2s ease-in-out 0s; }\n\n.thumbnail-control {\n  background-color: lightslategray;\n  border-radius: 20px;\n  width: 2em;\n  height: 2em;\n  top: 10%;\n  margin: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21zaS9wcm9qZWN0cy9XZWJzdG9ybVByb2plY3RzL3JlbnQtd2ViLWFwcC9zcmMvYXBwL21haW4vbW9kdWxlcy9ob3RlbC9jb21wb25lbnRzL2ltYWdlcy1jYXJvdXNlbC9pbWFnZXMtY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxxQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0VBQ1osUUFBUTtFQUNSLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsaUJBQWlCO0VBR2pCLG1DQUFtQyxFQUFBOztBQUVyQztFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtFQUNaLFFBQVE7RUFDUixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLGlCQUFpQjtFQUdqQixtQ0FBbUMsRUFBQTs7QUFHckM7RUFDRSxnQ0FBZ0M7RUFDaEMsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixXQUFXO0VBQ1gsUUFBUTtFQUNSLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4vbW9kdWxlcy9ob3RlbC9jb21wb25lbnRzL2ltYWdlcy1jYXJvdXNlbC9pbWFnZXMtY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2Fyb3VzZWwge1xuICBtaW4td2lkdGg6IDUwZW07XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbiNjYXJvdXNlbC10aHVtYm5haWxzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jY2Fyb3VzZWwtdGh1bWJuYWlscyBpbWcge1xuICB3aWR0aDogOWVtO1xuICBtYXJnaW46IDJweDtcbiAgb3BhY2l0eTogMC43O1xufVxuXG4uc2VsZWN0ZWQge1xuICBvcGFjaXR5OiAxLjAhaW1wb3J0YW50O1xufVxuXG4udGh1bWJuYWlsIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2Fyb3VzZWwtY29udHJvbC5sZWZ0IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgd2lkdGg6IDU0cHg7XG4gIGhlaWdodDogNTRweDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IC0yN3B4O1xuICBsaW5lLWhlaWdodDogNTRweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgb3BhY2l0eTogMTtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQgMHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0IDBzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dCAwcztcbn1cbi5jYXJvdXNlbC1jb250cm9sLnJpZ2h0IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgd2lkdGg6IDU0cHg7XG4gIGhlaWdodDogNTRweDtcbiAgdG9wOiA1MCU7XG4gIHJpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAtMjdweDtcbiAgbGluZS1oZWlnaHQ6IDU0cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gIG9wYWNpdHk6IDE7XG4gIHRleHQtc2hhZG93OiBub25lO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0IDBzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dCAwcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQgMHM7XG59XG5cbi50aHVtYm5haWwtY29udHJvbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2xhdGVncmF5O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB3aWR0aDogMmVtO1xuICBoZWlnaHQ6IDJlbTtcbiAgdG9wOiAxMCU7XG4gIG1hcmdpbjogYXV0bztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/modules/hotel/components/images-carousel/images-carousel.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/main/modules/hotel/components/images-carousel/images-carousel.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ImagesCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesCarouselComponent", function() { return ImagesCarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ImagesCarouselComponent = /** @class */ (function () {
    function ImagesCarouselComponent() {
        this.thumbnails = [];
        this.currentSlide = 0;
        this.totalSlides = 0;
        this.maxThumbnails = 6;
    }
    ImagesCarouselComponent.prototype.changeSlide = function (slide) {
        this.currentSlide = slide;
    };
    ImagesCarouselComponent.prototype.slideNext = function () {
        if (this.currentSlide < this.totalSlides - 1) {
            this.currentSlide += 1;
        }
        else {
            this.currentSlide = 0;
        }
    };
    ImagesCarouselComponent.prototype.slidePrevious = function () {
        if (this.currentSlide > 0) {
            this.currentSlide -= 1;
        }
        else {
            this.currentSlide = this.totalSlides - 1;
        }
    };
    ImagesCarouselComponent.prototype.ngOnInit = function () {
        var i;
        for (i = 0; i < this.images.length; i += this.maxThumbnails) {
            this.thumbnails.push(this.images.slice(i, i + this.maxThumbnails));
        }
        this.totalSlides = this.images.length;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ImagesCarouselComponent.prototype, "images", void 0);
    ImagesCarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-images-carousel',
            template: __webpack_require__(/*! ./images-carousel.component.html */ "./src/app/main/modules/hotel/components/images-carousel/images-carousel.component.html"),
            styles: [__webpack_require__(/*! ./images-carousel.component.scss */ "./src/app/main/modules/hotel/components/images-carousel/images-carousel.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ImagesCarouselComponent);
    return ImagesCarouselComponent;
}());



/***/ }),

/***/ "./src/app/main/modules/hotel/hotel-resolver.ts":
/*!******************************************************!*\
  !*** ./src/app/main/modules/hotel/hotel-resolver.ts ***!
  \******************************************************/
/*! exports provided: HotelResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelResolver", function() { return HotelResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_hotel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/hotel.service */ "./src/app/shared/services/hotel.service.ts");



var HotelResolver = /** @class */ (function () {
    function HotelResolver(hotelService) {
        this.hotelService = hotelService;
    }
    HotelResolver.prototype.resolve = function (route, state) {
        return this.hotelService.getHotel(route.paramMap.get('id'));
    };
    HotelResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_hotel_service__WEBPACK_IMPORTED_MODULE_2__["HotelService"]])
    ], HotelResolver);
    return HotelResolver;
}());



/***/ }),

/***/ "./src/app/main/modules/hotel/hotel-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/main/modules/hotel/hotel-routing.module.ts ***!
  \************************************************************/
/*! exports provided: HotelRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelRoutingModule", function() { return HotelRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hotel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hotel.component */ "./src/app/main/modules/hotel/hotel.component.ts");
/* harmony import */ var _hotel_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hotel-resolver */ "./src/app/main/modules/hotel/hotel-resolver.ts");





var routes = [
    {
        path: ':id',
        component: _hotel_component__WEBPACK_IMPORTED_MODULE_3__["HotelComponent"],
        resolve: {
            data: _hotel_resolver__WEBPACK_IMPORTED_MODULE_4__["HotelResolver"]
        }
    }
];
var HotelRoutingModule = /** @class */ (function () {
    function HotelRoutingModule() {
    }
    HotelRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], HotelRoutingModule);
    return HotelRoutingModule;
}());



/***/ }),

/***/ "./src/app/main/modules/hotel/hotel.component.html":
/*!*********************************************************!*\
  !*** ./src/app/main/modules/hotel/hotel.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div id=\"left-content\" class=\"col-3\">\n      <div class=\"row\">\n        <app-search-widget\n          [destination]=\"destination\"\n          [checkin]=\"checkin\"\n          [checkout]=\"checkout\"\n          [visitors]=\"visitors\"\n          [latitude]=\"lat\"\n          [longitude]=\"lng\"\n          [radius]=\"radius\"\n        ></app-search-widget>\n      </div>\n      <div class=\"row\" style=\"margin-top: 30px;\">\n        <agm-map\n          [latitude]=\"lat\"\n          [longitude]=\"lng\"\n          [zoom]=\"12\"\n          [maxZoom]=\"16\"\n          [disableDefaultUI]=\"true\"\n          [zoomControl]=\"false\"\n          [scaleControl]=\"false\"\n          [mapTypeControl]=\"false\"\n          [fitBounds]=\"true\">\n          <agm-marker [latitude]=\"hotel.lat\"\n                      [longitude]=\"hotel.lng\"\n                      [agmFitBounds]=\"true\"\n                      [iconUrl]=\"markerIcon\">\n          </agm-marker>\n        </agm-map>\n      </div>\n    </div>\n    <div id=\"right-content\" class=\"col-9\">\n      <div class=\"row\">\n        <div class=\"col-12\" id=\"images-carousel\" *ngIf=\"hotel.hotel_photos.length\">\n          <app-images-carousel [images]=\"hotel.hotel_photos\"></app-images-carousel>\n        </div>\n        <div class=\"col-12\">\n          <app-hotel-details\n            [name]=\"hotel.name\"\n            [stars]=\"hotel.stars\"\n            [shortDescription]=\"hotel.description_short\"\n            [email]=\"hotel.email\"\n            [longDescription]=\"hotel.description_long\">\n          </app-hotel-details>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <div class=\"rooms-list\">\n            <h2>Reserve a room</h2>\n            <nz-card *ngFor=\"let room of rooms\" [nzBordered]=\"true\">\n              <h6 class=\"available\">Room number: {{room.room_number}} <span>from €{{room.price}}</span></h6>\n              <div nz-row>\n                <div nz-col [nzSpan]=\"18\" [nzPush]=\"6\">\n                  <button type=\"button\" class=\"btn btn-primary\" (click)=\"reservation(room.id)\">Reserve</button>\n                </div>\n\n                <div nz-col [nzSpan]=\"6\" [nzPull]=\"18\">\n                  <span>Persons:</span>\n                  <div class=\"people-icons\">\n                    <img *ngFor=\"let in of counter(room.capacity); let i = index;\"\n                         src=\"assets/images/person.svg\" class=\"person-icon\" alt=\"person-icon\">\n                  </div>\n                </div>\n              </div>\n              <nz-modal [(nzVisible)]=\"isVisible\" [nzTitle]=\"hotel.name\" (nzOnCancel)=\"handleCancel()\"\n                        (nzOnOk)=\"handleOk(room. id)\">\n\n                <h5>Room number {{room.room_number}} check-in ...</h5>\n\n                <div class=\"form-group\">\n                  <div class=\"controls\">\n                    <div class=\"control-label\">\n                      <label for=\"startDate\">Check-In Date:</label>\n                    </div>\n                    <nz-date-picker\n                      id=\"startDate\"\n                      nzFormat=\"yyyy-MM-dd\"\n                      nzPlaceHolder=\"Start\"\n                      [(ngModel)]=\"checkin\"\n                    >\n                    </nz-date-picker>\n                  </div>\n                </div>\n\n                <div class=\"form-group\">\n                  <div class=\"controls\">\n                    <div class=\"control-label\">\n                      <label for=\"endDate\">Check-Out Date:</label>\n                    </div>\n                    <nz-date-picker\n                      id=\"endDate\"\n                      nzFormat=\"yyyy-MM-dd\"\n                      nzPlaceHolder=\"End\"\n                      [(ngModel)]=\"checkout\"\n                    >\n                    </nz-date-picker>\n                  </div>\n                </div>\n\n              </nz-modal>\n            </nz-card>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <app-hotel-reviews></app-hotel-reviews>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/modules/hotel/hotel.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/main/modules/hotel/hotel.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n  height: 150px;\n  width: 264px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21zaS9wcm9qZWN0cy9XZWJzdG9ybVByb2plY3RzL3JlbnQtd2ViLWFwcC9zcmMvYXBwL21haW4vbW9kdWxlcy9ob3RlbC9ob3RlbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYWluL21vZHVsZXMvaG90ZWwvaG90ZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwIHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDI2NHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/main/modules/hotel/hotel.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/main/modules/hotel/hotel.component.ts ***!
  \*******************************************************/
/*! exports provided: HotelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelComponent", function() { return HotelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_hotel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/hotel.service */ "./src/app/shared/services/hotel.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ng2_simple_smooth_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-simple-smooth-scroll */ "./node_modules/ng2-simple-smooth-scroll/fesm5/ng2-simple-smooth-scroll.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shared_services_routing_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/services/routing-state */ "./src/app/shared/services/routing-state.ts");









var HotelComponent = /** @class */ (function () {
    function HotelComponent(hotelService, route, titleService, routingState, smooth) {
        var _this = this;
        this.hotelService = hotelService;
        this.route = route;
        this.titleService = titleService;
        this.routingState = routingState;
        this.smooth = smooth;
        this.markerIcon = {
            url: '/assets/images/iconfinder_map-marker_285659.svg',
            scaledSize: {
                width: 35,
                height: 35
            }
        };
        this.isVisible = false;
        this.route.data.subscribe(function (response) {
            _this.hotel = response.data.hotel;
            _this.titleService.setTitle(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].appName + ' :: ' + _this.hotel.name);
            var previousUrl = _this.routingState.getPreviousUrl();
            /*      if (previousUrl !== undefined && previousUrl.includes('search')) {
                      this.smooth.smoothScrollToTop({duration: 10, easing: 'easeOutQuint', offset: 600});
                  }*/
            /* Get all the params from the activated route snapshot and add some default values to them if they are not defined */
            _this.destination = _this.route.snapshot.queryParamMap.get('destination') == null ? '' :
                _this.route.snapshot.queryParamMap.get('destination');
            _this.checkin = _this.route.snapshot.queryParamMap.get('checkin') == null ?
                moment__WEBPACK_IMPORTED_MODULE_7__(new Date()).format('YYYY-MM-DD') : _this.route.snapshot.queryParamMap.get('checkin');
            _this.checkout = _this.route.snapshot.queryParamMap.get('checkout') == null ?
                moment__WEBPACK_IMPORTED_MODULE_7__(new Date()).add(2, 'days').format('YYYY-MM-DD') : _this.route.snapshot.queryParamMap.get('checkout');
            _this.visitors = _this.route.snapshot.queryParamMap.get('visitors') == null ?
                1 : parseInt(_this.route.snapshot.queryParamMap.get('visitors'), 10);
            _this.lat = _this.route.snapshot.queryParamMap.get('lat') == null ?
                37.983810 : parseFloat(_this.route.snapshot.queryParamMap.get('lat'));
            _this.lng = _this.route.snapshot.queryParamMap.get('lng') == null ?
                23.727539 : parseFloat(_this.route.snapshot.queryParamMap.get('lng'));
            _this.radius = _this.route.snapshot.queryParamMap.get('radius') == null ?
                5 : parseFloat(_this.route.snapshot.queryParamMap.get('radius'));
            _this.hotelService.getHotelRooms(_this.hotel.id).subscribe(function (rooms) {
                _this.rooms = rooms;
            });
        });
    }
    HotelComponent.prototype.counter = function (i) {
        return new Array(i);
    };
    HotelComponent.prototype.handleOk = function (roomId) {
        console.log('Button ok clicked!');
        this.isVisible = false;
        console.log(roomId);
        moment__WEBPACK_IMPORTED_MODULE_7__(new Date(this.checkin)).format('YYYY-MM-DD');
        this.hotelService.roomReservation(this.hotel.id, roomId, moment__WEBPACK_IMPORTED_MODULE_7__(new Date(this.checkin)).format('YYYY-MM-DD'), moment__WEBPACK_IMPORTED_MODULE_7__(new Date(this.checkout)).format('YYYY-MM-DD'))
            .subscribe(function (data) {
            console.log(data);
        });
    };
    HotelComponent.prototype.handleCancel = function () {
        console.log('Button cancel clicked!');
        this.isVisible = false;
    };
    HotelComponent.prototype.reservation = function (roomId) {
        this.isVisible = true;
    };
    HotelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hotel',
            template: __webpack_require__(/*! ./hotel.component.html */ "./src/app/main/modules/hotel/hotel.component.html"),
            styles: [__webpack_require__(/*! ./hotel.component.scss */ "./src/app/main/modules/hotel/hotel.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_hotel_service__WEBPACK_IMPORTED_MODULE_2__["HotelService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"],
            _shared_services_routing_state__WEBPACK_IMPORTED_MODULE_8__["RoutingState"],
            ng2_simple_smooth_scroll__WEBPACK_IMPORTED_MODULE_5__["SimpleSmoothScrollService"]])
    ], HotelComponent);
    return HotelComponent;
}());



/***/ }),

/***/ "./src/app/main/modules/hotel/hotel.module.ts":
/*!****************************************************!*\
  !*** ./src/app/main/modules/hotel/hotel.module.ts ***!
  \****************************************************/
/*! exports provided: HotelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelModule", function() { return HotelModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _hotel_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hotel-routing.module */ "./src/app/main/modules/hotel/hotel-routing.module.ts");
/* harmony import */ var _hotel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hotel.component */ "./src/app/main/modules/hotel/hotel.component.ts");
/* harmony import */ var _components_images_carousel_images_carousel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/images-carousel/images-carousel.component */ "./src/app/main/modules/hotel/components/images-carousel/images-carousel.component.ts");
/* harmony import */ var _components_hotel_details_hotel_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/hotel-details/hotel-details.component */ "./src/app/main/modules/hotel/components/hotel-details/hotel-details.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_hotel_reviews_hotel_reviews_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/hotel-reviews/hotel-reviews.component */ "./src/app/main/modules/hotel/components/hotel-reviews/hotel-reviews.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _search_results_search_results_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../search-results/search-results.module */ "./src/app/main/modules/search-results/search-results.module.ts");












var HotelModule = /** @class */ (function () {
    function HotelModule() {
    }
    HotelModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_hotel_component__WEBPACK_IMPORTED_MODULE_4__["HotelComponent"], _components_images_carousel_images_carousel_component__WEBPACK_IMPORTED_MODULE_5__["ImagesCarouselComponent"], _components_hotel_details_hotel_details_component__WEBPACK_IMPORTED_MODULE_6__["HotelDetailsComponent"], _components_hotel_reviews_hotel_reviews_component__WEBPACK_IMPORTED_MODULE_9__["HotelReviewsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _hotel_routing_module__WEBPACK_IMPORTED_MODULE_3__["HotelRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_10__["AgmCoreModule"],
                _search_results_search_results_module__WEBPACK_IMPORTED_MODULE_11__["SearchResultsModule"],
            ]
        })
    ], HotelModule);
    return HotelModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-hotel-hotel-module.js.map