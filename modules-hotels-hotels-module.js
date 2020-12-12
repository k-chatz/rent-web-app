(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-hotels-hotels-module"],{

/***/ "./src/app/management/modules/hotels/hotels-detail/hotels-detail-resolver.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/management/modules/hotels/hotels-detail/hotels-detail-resolver.ts ***!
  \***********************************************************************************/
/*! exports provided: HotelsDetailResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelsDetailResolver", function() { return HotelsDetailResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_hotel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/hotel.service */ "./src/app/shared/services/hotel.service.ts");



var HotelsDetailResolver = /** @class */ (function () {
    function HotelsDetailResolver(service) {
        this.service = service;
    }
    HotelsDetailResolver.prototype.resolve = function (next, state) {
        var id = next.paramMap.get('id');
        return this.service.getHotel(id);
    };
    HotelsDetailResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_hotel_service__WEBPACK_IMPORTED_MODULE_2__["HotelService"]])
    ], HotelsDetailResolver);
    return HotelsDetailResolver;
}());



/***/ }),

/***/ "./src/app/management/modules/hotels/hotels-detail/hotels-detail.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/management/modules/hotels/hotels-detail/hotels-detail.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>{{hotel | json}}</p>\n"

/***/ }),

/***/ "./src/app/management/modules/hotels/hotels-detail/hotels-detail.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/management/modules/hotels/hotels-detail/hotels-detail.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZW1lbnQvbW9kdWxlcy9ob3RlbHMvaG90ZWxzLWRldGFpbC9ob3RlbHMtZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/management/modules/hotels/hotels-detail/hotels-detail.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/management/modules/hotels/hotels-detail/hotels-detail.component.ts ***!
  \************************************************************************************/
/*! exports provided: HotelsDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelsDetailComponent", function() { return HotelsDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_hotel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/hotel.service */ "./src/app/shared/services/hotel.service.ts");
/* harmony import */ var _hotels_route_data_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hotels-route-data.provider */ "./src/app/management/modules/hotels/hotels-route-data.provider.ts");





var HotelsDetailComponent = /** @class */ (function () {
    function HotelsDetailComponent(route, router, service, routeDataProvider) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.routeDataProvider = routeDataProvider;
    }
    HotelsDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hotelSub = this.routeDataProvider.getHotel$().subscribe(function (hotel) {
            // this.hotel = hotel;
        });
        this.route.data.subscribe(function (data) {
            console.log(data);
            _this.hotel = data.data;
        });
    };
    HotelsDetailComponent.prototype.ngOnDestroy = function () {
        this.hotelSub.unsubscribe();
    };
    HotelsDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hotels-detail',
            template: __webpack_require__(/*! ./hotels-detail.component.html */ "./src/app/management/modules/hotels/hotels-detail/hotels-detail.component.html"),
            styles: [__webpack_require__(/*! ./hotels-detail.component.scss */ "./src/app/management/modules/hotels/hotels-detail/hotels-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_services_hotel_service__WEBPACK_IMPORTED_MODULE_3__["HotelService"],
            _hotels_route_data_provider__WEBPACK_IMPORTED_MODULE_4__["HotelsRouteDataProvider"]])
    ], HotelsDetailComponent);
    return HotelsDetailComponent;
}());



/***/ }),

/***/ "./src/app/management/modules/hotels/hotels-insert-new/hotels-insert-new.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/management/modules/hotels/hotels-insert-new/hotels-insert-new.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  hotels-insert-new works!\n</p>\n"

/***/ }),

/***/ "./src/app/management/modules/hotels/hotels-insert-new/hotels-insert-new.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/management/modules/hotels/hotels-insert-new/hotels-insert-new.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZW1lbnQvbW9kdWxlcy9ob3RlbHMvaG90ZWxzLWluc2VydC1uZXcvaG90ZWxzLWluc2VydC1uZXcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/management/modules/hotels/hotels-insert-new/hotels-insert-new.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/management/modules/hotels/hotels-insert-new/hotels-insert-new.component.ts ***!
  \********************************************************************************************/
/*! exports provided: HotelsInsertNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelsInsertNewComponent", function() { return HotelsInsertNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HotelsInsertNewComponent = /** @class */ (function () {
    function HotelsInsertNewComponent() {
    }
    HotelsInsertNewComponent.prototype.ngOnInit = function () {
    };
    HotelsInsertNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hotels-insert-new',
            template: __webpack_require__(/*! ./hotels-insert-new.component.html */ "./src/app/management/modules/hotels/hotels-insert-new/hotels-insert-new.component.html"),
            styles: [__webpack_require__(/*! ./hotels-insert-new.component.scss */ "./src/app/management/modules/hotels/hotels-insert-new/hotels-insert-new.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HotelsInsertNewComponent);
    return HotelsInsertNewComponent;
}());



/***/ }),

/***/ "./src/app/management/modules/hotels/hotels-list/hotels-list-resolver.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/management/modules/hotels/hotels-list/hotels-list-resolver.ts ***!
  \*******************************************************************************/
/*! exports provided: HotelsListResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelsListResolver", function() { return HotelsListResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_hotel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/hotel.service */ "./src/app/shared/services/hotel.service.ts");



var HotelsListResolver = /** @class */ (function () {
    function HotelsListResolver(service) {
        this.service = service;
    }
    HotelsListResolver.prototype.resolve = function (next, state) {
        return this.service.getHotelsByProvider({ size: 17, page: 0 });
    };
    HotelsListResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_hotel_service__WEBPACK_IMPORTED_MODULE_2__["HotelService"]])
    ], HotelsListResolver);
    return HotelsListResolver;
}());



/***/ }),

/***/ "./src/app/management/modules/hotels/hotels-list/hotels-list.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/management/modules/hotels/hotels-list/hotels-list.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12 col-xl-8\" style=\"padding: 0 4px 0 14px;\">\n    <nz-card>\n      <nz-table\n        #ajaxTable\n        nzShowSizeChanger\n        [nzFrontPagination]=\"false\"\n        [nzData]=\"hotels\"\n        [nzLoading]=\"loading\"\n        [nzTotal]=\"total\"\n        [(nzPageIndex)]=\"pageIndex\"\n        [(nzPageSize)]=\"pageSize\"\n        (nzPageIndexChange)=\"searchData()\"\n        (nzPageSizeChange)=\"searchData(true)\"\n        [nzScroll]=\"{ x: '700px' }\"\n      >\n        <thead (nzSortChange)=\"sort($event)\" nzSingleSort>\n        <tr>\n          <th nzShowCheckbox nzShowRowSelection\n              [nzSelections]=\"listOfSelection\"\n              [(nzChecked)]=\"isAllDisplayDataChecked\"\n              [nzIndeterminate]=\"isIndeterminate\"\n              (nzCheckedChange)=\"checkAll($event)\"\n              nzWidth=\"50px\"></th>\n          <th nzShowSort nzSortKey=\"id\" nzWidth=\"50px\">ID</th>\n          <th nzShowSort nzSortKey=\"name\">Name</th>\n          <th nzShowSort nzSortKey=\"email\">Email</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let data of ajaxTable.data\" class=\"hotel-row\"\n            [ngClass]=\"{'selected-row': data.id==selected }\">\n          <td nzShowCheckbox [(nzChecked)]=\"mapOfCheckedId[data.id]\" (nzCheckedChange)=\"refreshStatus()\"></td>\n          <td (click)=\"hotelClicked(data)\">{{ data.id }}</td>\n          <td (click)=\"hotelClicked(data)\">{{ data.name }}</td>\n          <td (click)=\"hotelClicked(data)\">{{ data.email }}</td>\n        </tr>\n        </tbody>\n      </nz-table>\n    </nz-card>\n  </div>\n  <div class=\"col-12 col-xl-4\" style=\"padding: 0 14px 0 1px;\">\n    <nz-card>\n      <router-outlet></router-outlet>\n    </nz-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/management/modules/hotels/hotels-list/hotels-list.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/management/modules/hotels/hotels-list/hotels-list.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hotel-row {\n  cursor: pointer;\n  background: white; }\n\n.selected-row {\n  background-color: #e8e8e8; }\n\nnz-table {\n  border: 1px solid #d9dbdd; }\n\nnz-card {\n  height: calc(100vh - 104px);\n  overflow: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21zaS9wcm9qZWN0cy9XZWJzdG9ybVByb2plY3RzL3JlbnQtd2ViLWFwcC9zcmMvYXBwL21hbmFnZW1lbnQvbW9kdWxlcy9ob3RlbHMvaG90ZWxzLWxpc3QvaG90ZWxzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsMkJBQTJCO0VBQzNCLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21hbmFnZW1lbnQvbW9kdWxlcy9ob3RlbHMvaG90ZWxzLWxpc3QvaG90ZWxzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG90ZWwtcm93IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLnNlbGVjdGVkLXJvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XG59XG5cbm56LXRhYmxlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q5ZGJkZDtcbn1cblxubnotY2FyZCB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDEwNHB4KTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/management/modules/hotels/hotels-list/hotels-list.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/management/modules/hotels/hotels-list/hotels-list.component.ts ***!
  \********************************************************************************/
/*! exports provided: HotelsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelsListComponent", function() { return HotelsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _hotels_route_data_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hotels-route-data.provider */ "./src/app/management/modules/hotels/hotels-route-data.provider.ts");
/* harmony import */ var _shared_services_hotel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/hotel.service */ "./src/app/shared/services/hotel.service.ts");







var HotelsListComponent = /** @class */ (function () {
    function HotelsListComponent(router, route, hotelService, routeDataProvider) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.hotelService = hotelService;
        this.routeDataProvider = routeDataProvider;
        this.mapOfExpandData = {};
        this.switchValue = false;
        this.pageIndex = 1;
        this.pageSize = 17;
        this.total = 1;
        this.hotels = [];
        this.loading = true;
        this.sortValue = null;
        this.sortKey = null;
        this.searchGenderList = [];
        this.listOfSelection = [
            {
                text: 'Select All Row',
                onSelect: function () {
                    _this.checkAll(true);
                }
            },
            {
                text: 'Select Odd Row',
                onSelect: function () {
                    _this.listOfDisplayData.forEach(function (data, index) { return (_this.mapOfCheckedId[data.id] = index % 2 !== 0); });
                    _this.refreshStatus();
                }
            },
            {
                text: 'Select Even Row',
                onSelect: function () {
                    _this.listOfDisplayData.forEach(function (data, index) { return (_this.mapOfCheckedId[data.id] = index % 2 === 0); });
                    _this.refreshStatus();
                }
            }
        ];
        this.isAllDisplayDataChecked = false;
        this.isIndeterminate = false;
        this.listOfDisplayData = [];
        this.mapOfCheckedId = {};
    }
    HotelsListComponent.prototype.clickSwitch = function () {
        var _this = this;
        if (!this.loading) {
            this.loading = true;
            setTimeout(function () {
                _this.switchValue = !_this.switchValue;
                _this.loading = false;
            }, 3000);
        }
    };
    HotelsListComponent.prototype.refreshStatus = function () {
        var _this = this;
        this.isAllDisplayDataChecked = this.listOfDisplayData.every(function (item) { return _this.mapOfCheckedId[item.id]; });
        this.isIndeterminate =
            this.listOfDisplayData.some(function (item) { return _this.mapOfCheckedId[item.id]; }) && !this.isAllDisplayDataChecked;
    };
    HotelsListComponent.prototype.checkAll = function (value) {
        var _this = this;
        this.listOfDisplayData.forEach(function (item) { return (_this.mapOfCheckedId[item.id] = value); });
        this.refreshStatus();
    };
    HotelsListComponent.prototype.sort = function (sort) {
        this.sortKey = sort.key;
        this.sortValue = sort.value;
        this.searchData();
    };
    HotelsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (resolve) {
            _this.pagedResponse = resolve.data;
            _this.total = _this.pagedResponse.totalElements;
            _this.pageIndex = _this.pagedResponse.page + 1;
            _this.pageSize = _this.pagedResponse.size;
            _this.hotels = _this.pagedResponse.content;
            console.log(_this.hotels);
            _this.loading = false;
            console.log('this.router.url', _this.router.url);
            _this.selected = _this.router.url.substr(19);
            console.log(_this.selected);
            if (_this.selected !== undefined) {
                var selectedHotel = _this.hotels.find(function (r) { return r.id === +_this.selected; });
                console.log('selectedHotel', selectedHotel);
                _this.routeDataProvider.setHotel(selectedHotel);
            }
        });
    };
    HotelsListComponent.prototype.searchData = function (reset) {
        var _this = this;
        if (reset === void 0) { reset = false; }
        if (reset) {
            this.pageIndex = 1;
        }
        this.loading = true;
        var filter = {
            page: this.pageIndex - 1,
            size: this.pageSize
        };
        this.hotelService.getHotelsByProvider(filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            _this.loading = false;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
        })).subscribe(function (data) {
            _this.hotels = data.content;
            _this.total = data.totalElements;
            _this.loading = false;
        });
    };
    HotelsListComponent.prototype.updateFilter = function (value) {
        console.log('updateFilter', value);
        this.searchGenderList = value;
        this.searchData(true);
    };
    HotelsListComponent.prototype.hotelClicked = function (data) {
        console.log('hotelClicked', data);
        this.selected = data.id;
        this.routeDataProvider.setHotel(data);
        this.router.navigate(['management/hotels', data.id]);
    };
    HotelsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hotels-list',
            template: __webpack_require__(/*! ./hotels-list.component.html */ "./src/app/management/modules/hotels/hotels-list/hotels-list.component.html"),
            styles: [__webpack_require__(/*! ./hotels-list.component.scss */ "./src/app/management/modules/hotels/hotels-list/hotels-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_services_hotel_service__WEBPACK_IMPORTED_MODULE_6__["HotelService"],
            _hotels_route_data_provider__WEBPACK_IMPORTED_MODULE_5__["HotelsRouteDataProvider"]])
    ], HotelsListComponent);
    return HotelsListComponent;
}());



/***/ }),

/***/ "./src/app/management/modules/hotels/hotels-route-data.provider.ts":
/*!*************************************************************************!*\
  !*** ./src/app/management/modules/hotels/hotels-route-data.provider.ts ***!
  \*************************************************************************/
/*! exports provided: HotelsRouteDataProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelsRouteDataProvider", function() { return HotelsRouteDataProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var HotelsRouteDataProvider = /** @class */ (function () {
    function HotelsRouteDataProvider() {
        this.behaviorSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    HotelsRouteDataProvider.prototype.setHotel = function (hotel) {
        this.behaviorSubject.next(hotel);
    };
    HotelsRouteDataProvider.prototype.getHotel$ = function () {
        return this.behaviorSubject.asObservable();
    };
    Object.defineProperty(HotelsRouteDataProvider.prototype, "hotel", {
        get: function () {
            return this.behaviorSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    HotelsRouteDataProvider = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HotelsRouteDataProvider);
    return HotelsRouteDataProvider;
}());



/***/ }),

/***/ "./src/app/management/modules/hotels/hotels-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/management/modules/hotels/hotels-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: HotelsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelsRoutingModule", function() { return HotelsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hotels_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hotels.component */ "./src/app/management/modules/hotels/hotels.component.ts");
/* harmony import */ var _hotels_list_hotels_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hotels-list/hotels-list.component */ "./src/app/management/modules/hotels/hotels-list/hotels-list.component.ts");
/* harmony import */ var _hotels_insert_new_hotels_insert_new_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hotels-insert-new/hotels-insert-new.component */ "./src/app/management/modules/hotels/hotels-insert-new/hotels-insert-new.component.ts");
/* harmony import */ var _hotels_detail_hotels_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hotels-detail/hotels-detail.component */ "./src/app/management/modules/hotels/hotels-detail/hotels-detail.component.ts");
/* harmony import */ var _hotels_list_hotels_list_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hotels-list/hotels-list-resolver */ "./src/app/management/modules/hotels/hotels-list/hotels-list-resolver.ts");
/* harmony import */ var _hotels_detail_hotels_detail_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hotels-detail/hotels-detail-resolver */ "./src/app/management/modules/hotels/hotels-detail/hotels-detail-resolver.ts");









var routes = [
    {
        path: '',
        component: _hotels_component__WEBPACK_IMPORTED_MODULE_3__["HotelsComponent"],
        children: [
            {
                path: '',
                component: _hotels_list_hotels_list_component__WEBPACK_IMPORTED_MODULE_4__["HotelsListComponent"],
                resolve: {
                    data: _hotels_list_hotels_list_resolver__WEBPACK_IMPORTED_MODULE_7__["HotelsListResolver"]
                },
                children: [
                    {
                        path: ':id',
                        component: _hotels_detail_hotels_detail_component__WEBPACK_IMPORTED_MODULE_6__["HotelsDetailComponent"],
                        resolve: {
                            data: _hotels_detail_hotels_detail_resolver__WEBPACK_IMPORTED_MODULE_8__["HotelsDetailResolver"]
                        }
                    },
                    {
                        path: '',
                        component: _hotels_insert_new_hotels_insert_new_component__WEBPACK_IMPORTED_MODULE_5__["HotelsInsertNewComponent"]
                    }
                ]
            }
        ]
    }
];
var HotelsRoutingModule = /** @class */ (function () {
    function HotelsRoutingModule() {
    }
    HotelsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], HotelsRoutingModule);
    return HotelsRoutingModule;
}());



/***/ }),

/***/ "./src/app/management/modules/hotels/hotels.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/management/modules/hotels/hotels.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h2>Hotels</h2>\n  <hr>\n  <div>\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/management/modules/hotels/hotels.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/management/modules/hotels/hotels.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZW1lbnQvbW9kdWxlcy9ob3RlbHMvaG90ZWxzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/management/modules/hotels/hotels.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/management/modules/hotels/hotels.component.ts ***!
  \***************************************************************/
/*! exports provided: HotelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelsComponent", function() { return HotelsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HotelsComponent = /** @class */ (function () {
    function HotelsComponent() {
    }
    HotelsComponent.prototype.ngOnInit = function () {
    };
    HotelsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hotels',
            template: __webpack_require__(/*! ./hotels.component.html */ "./src/app/management/modules/hotels/hotels.component.html"),
            styles: [__webpack_require__(/*! ./hotels.component.scss */ "./src/app/management/modules/hotels/hotels.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HotelsComponent);
    return HotelsComponent;
}());



/***/ }),

/***/ "./src/app/management/modules/hotels/hotels.module.ts":
/*!************************************************************!*\
  !*** ./src/app/management/modules/hotels/hotels.module.ts ***!
  \************************************************************/
/*! exports provided: HotelsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelsModule", function() { return HotelsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _hotels_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hotels-routing.module */ "./src/app/management/modules/hotels/hotels-routing.module.ts");
/* harmony import */ var _hotels_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hotels.component */ "./src/app/management/modules/hotels/hotels.component.ts");
/* harmony import */ var _hotels_list_hotels_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hotels-list/hotels-list.component */ "./src/app/management/modules/hotels/hotels-list/hotels-list.component.ts");
/* harmony import */ var _hotels_detail_hotels_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hotels-detail/hotels-detail.component */ "./src/app/management/modules/hotels/hotels-detail/hotels-detail.component.ts");
/* harmony import */ var _hotels_insert_new_hotels_insert_new_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hotels-insert-new/hotels-insert-new.component */ "./src/app/management/modules/hotels/hotels-insert-new/hotels-insert-new.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");










var HotelsModule = /** @class */ (function () {
    function HotelsModule() {
    }
    HotelsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_hotels_component__WEBPACK_IMPORTED_MODULE_4__["HotelsComponent"], _hotels_list_hotels_list_component__WEBPACK_IMPORTED_MODULE_5__["HotelsListComponent"], _hotels_detail_hotels_detail_component__WEBPACK_IMPORTED_MODULE_6__["HotelsDetailComponent"], _hotels_insert_new_hotels_insert_new_component__WEBPACK_IMPORTED_MODULE_7__["HotelsInsertNewComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _hotels_routing_module__WEBPACK_IMPORTED_MODULE_3__["HotelsRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
            ]
        })
    ], HotelsModule);
    return HotelsModule;
}());



/***/ }),

/***/ "./src/app/shared/services/hotel.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/hotel.service.ts ***!
  \**************************************************/
/*! exports provided: HotelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelService", function() { return HotelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);






var HotelService = /** @class */ (function () {
    function HotelService(http) {
        this.http = http;
    }
    HotelService.prototype.getHotel = function (hotelId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiRoot + '/hotels/' + hotelId);
    };
    HotelService.prototype.getHotelsByProvider = function (filters) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ fromObject: filters });
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiRoot + '/hotels/', { params: params });
    };
    HotelService.prototype.search = function (filters) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ fromObject: filters });
        return this.http.get("" + (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].hotelsEndpoint + '/search'), { params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (searchResponse) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, searchResponse, { results: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, searchResponse.pagedHotels, { content: searchResponse.pagedHotels.content.map(function (hotel) {
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, hotel, { createdAt: moment__WEBPACK_IMPORTED_MODULE_5__(new Date(hotel.createdAt)).format('DD-MM-YYYY - HH:mm'), updatedAt: moment__WEBPACK_IMPORTED_MODULE_5__(new Date(hotel.updatedAt)).format('DD-MM-YYYY - HH:mm'), photo: 'https://picsum.photos/id/' + (Math.floor(Math.random() * 500) + 1).toString() + '/200/200', address: '' });
                    }) }) });
        }));
    };
    HotelService.prototype.getHotelRooms = function (hotelId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiRoot + '/hotels/' + hotelId + '/rooms');
    };
    HotelService.prototype.roomReservation = function (hotelId, roomId, checkin, checkout) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiRoot + '/hotels/' + hotelId + '/rooms/' + roomId + '/reservation', {
            startDate: checkin,
            endDate: checkout
        });
    };
    HotelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HotelService);
    return HotelService;
}());



/***/ })

}]);
//# sourceMappingURL=modules-hotels-hotels-module.js.map