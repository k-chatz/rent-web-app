(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-users-users-module"],{

/***/ "./src/app/management/modules/users/users-detail/users-detail-resolver.ts":
/*!********************************************************************************!*\
  !*** ./src/app/management/modules/users/users-detail/users-detail-resolver.ts ***!
  \********************************************************************************/
/*! exports provided: UsersDetailResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersDetailResolver", function() { return UsersDetailResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");



var UsersDetailResolver = /** @class */ (function () {
    function UsersDetailResolver(service) {
        this.service = service;
    }
    UsersDetailResolver.prototype.resolve = function (next, state) {
        var username = next.paramMap.get('username');
        return this.service.getProfileByUsername(username);
    };
    UsersDetailResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], UsersDetailResolver);
    return UsersDetailResolver;
}());



/***/ }),

/***/ "./src/app/management/modules/users/users-detail/users-detail.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/management/modules/users/users-detail/users-detail.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>{{profile | json}}</p>\n<p>{{user | json}}</p>\n"

/***/ }),

/***/ "./src/app/management/modules/users/users-detail/users-detail.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/management/modules/users/users-detail/users-detail.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZW1lbnQvbW9kdWxlcy91c2Vycy91c2Vycy1kZXRhaWwvdXNlcnMtZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/management/modules/users/users-detail/users-detail.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/management/modules/users/users-detail/users-detail.component.ts ***!
  \*********************************************************************************/
/*! exports provided: UsersDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersDetailComponent", function() { return UsersDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _users_route_data_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../users-route-data.provider */ "./src/app/management/modules/users/users-route-data.provider.ts");





var UsersDetailComponent = /** @class */ (function () {
    function UsersDetailComponent(route, router, service, routeDataProvider) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.routeDataProvider = routeDataProvider;
    }
    UsersDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userSub = this.routeDataProvider.getUser$().subscribe(function (user) {
            _this.user = user;
        });
        this.route.data.subscribe(function (data) {
            _this.profile = data.data;
        });
    };
    UsersDetailComponent.prototype.ngOnDestroy = function () {
        this.userSub.unsubscribe();
    };
    UsersDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users-detail',
            template: __webpack_require__(/*! ./users-detail.component.html */ "./src/app/management/modules/users/users-detail/users-detail.component.html"),
            styles: [__webpack_require__(/*! ./users-detail.component.scss */ "./src/app/management/modules/users/users-detail/users-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _users_route_data_provider__WEBPACK_IMPORTED_MODULE_4__["UsersRouteDataProvider"]])
    ], UsersDetailComponent);
    return UsersDetailComponent;
}());



/***/ }),

/***/ "./src/app/management/modules/users/users-insert-new/users-insert-new.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/management/modules/users/users-insert-new/users-insert-new.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  users-insert-new works!\n</p>\n"

/***/ }),

/***/ "./src/app/management/modules/users/users-insert-new/users-insert-new.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/management/modules/users/users-insert-new/users-insert-new.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZW1lbnQvbW9kdWxlcy91c2Vycy91c2Vycy1pbnNlcnQtbmV3L3VzZXJzLWluc2VydC1uZXcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/management/modules/users/users-insert-new/users-insert-new.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/management/modules/users/users-insert-new/users-insert-new.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: UsersInsertNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersInsertNewComponent", function() { return UsersInsertNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UsersInsertNewComponent = /** @class */ (function () {
    function UsersInsertNewComponent() {
    }
    UsersInsertNewComponent.prototype.ngOnInit = function () {
    };
    UsersInsertNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users-insert-new',
            template: __webpack_require__(/*! ./users-insert-new.component.html */ "./src/app/management/modules/users/users-insert-new/users-insert-new.component.html"),
            styles: [__webpack_require__(/*! ./users-insert-new.component.scss */ "./src/app/management/modules/users/users-insert-new/users-insert-new.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UsersInsertNewComponent);
    return UsersInsertNewComponent;
}());



/***/ }),

/***/ "./src/app/management/modules/users/users-list/users-list-resolver.ts":
/*!****************************************************************************!*\
  !*** ./src/app/management/modules/users/users-list/users-list-resolver.ts ***!
  \****************************************************************************/
/*! exports provided: UsersListResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersListResolver", function() { return UsersListResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");



var UsersListResolver = /** @class */ (function () {
    function UsersListResolver(service) {
        this.service = service;
    }
    UsersListResolver.prototype.resolve = function (next, state) {
        this.username = state.url.substr(18);
        console.log('this.selected', this.username);
        return this.service.getAll({ size: 17, page: 0, username: this.username });
    };
    UsersListResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], UsersListResolver);
    return UsersListResolver;
}());



/***/ }),

/***/ "./src/app/management/modules/users/users-list/users-list.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/management/modules/users/users-list/users-list.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12 col-xl-8\" style=\"padding: 0 4px 0 14px;\">\n    <nz-card>\n      <nz-table\n        #ajaxTable\n        nzShowSizeChanger\n        [nzFrontPagination]=\"false\"\n        [nzData]=\"users\"\n        [nzLoading]=\"loading\"\n        [nzTotal]=\"total\"\n        [(nzPageIndex)]=\"pageIndex\"\n        [(nzPageSize)]=\"pageSize\"\n        (nzPageIndexChange)=\"searchData()\"\n        (nzPageSizeChange)=\"searchData(true)\"\n        [nzScroll]=\"{ x: '700px' }\"\n      >\n        <thead (nzSortChange)=\"sort($event)\" nzSingleSort>\n        <tr>\n          <th\n            nzShowCheckbox\n            nzShowRowSelection\n            [nzSelections]=\"listOfSelection\"\n            [(nzChecked)]=\"isAllDisplayDataChecked\"\n            [nzIndeterminate]=\"isIndeterminate\"\n            (nzCheckedChange)=\"checkAll($event)\"\n            nzWidth=\"50px\"\n          ></th>\n          <th nzShowSort nzSortKey=\"name\" nzWidth=\"50px\">ID</th>\n          <th nzShowSort nzSortKey=\"username\">Username</th>\n          <th nzShowSort nzSortKey=\"email\">Email</th>\n          <th nzShowSort nzSortKey=\"role\" nzWidth=\"100px\">Role</th>\n          <th nzShowSort nzSortKey=\"pending_provider\" nzWidth=\"70px\">Role status</th>\n          <th nzShowSort nzSortKey=\"updatedAt\" nzWidth=\"60px\">Lock</th>\n          <!--\n          <th nzShowFilter [nzFilters]=\"filterGender\" (nzFilterChange)=\"updateFilter($event)\">Gender</th>\n          <th nzShowSort nzSortKey=\"email\"><span>Email</span></th>\n          -->\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let data of ajaxTable.data\" class=\"user-row\"\n            [ngClass]=\"{'user-pending-provider-row': data.pending_provider, 'user-selected-row': data.username==selected }\">\n          <td nzShowCheckbox [(nzChecked)]=\"mapOfCheckedId[data.id]\" (nzCheckedChange)=\"refreshStatus()\"></td>\n          <td (click)=\"userClicked(data)\">{{ data.id }}</td>\n          <td (click)=\"userClicked(data)\" class=\"td-username\">{{ data.username }}</td>\n          <td (click)=\"userClicked(data)\">{{ data.email }}</td>\n          <td (click)=\"userClicked(data)\">\n            <nz-tag [nzColor]=\"'blue'\">{{ data.role }}</nz-tag>\n          </td>\n          <td (click)=\"userClicked(data)\">\n            <nz-tag *ngIf=\"data.pending_provider\" [nzColor]=\"'volcano'\">Pending</nz-tag>\n          </td>\n          <td>\n            <nz-switch [(ngModel)]=\"switchValue\" [nzControl]=\"true\" (click)=\"clickSwitch()\"\n                       [nzLoading]=\"loading\"></nz-switch>\n          </td>\n        </tr>\n        </tbody>\n      </nz-table>\n    </nz-card>\n  </div>\n  <div class=\"col-12 col-xl-4\" style=\"padding: 0 14px 0 1px;\">\n    <nz-card>\n      <router-outlet></router-outlet>\n    </nz-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/management/modules/users/users-list/users-list.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/management/modules/users/users-list/users-list.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-row {\n  cursor: pointer;\n  background: white; }\n\n.user-selected-row {\n  background-color: #e8e8e8; }\n\nnz-table {\n  border: 1px solid #d9dbdd; }\n\nnz-card {\n  height: calc(100vh - 104px);\n  overflow: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21zaS9wcm9qZWN0cy9XZWJzdG9ybVByb2plY3RzL3JlbnQtd2ViLWFwcC9zcmMvYXBwL21hbmFnZW1lbnQvbW9kdWxlcy91c2Vycy91c2Vycy1saXN0L3VzZXJzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UseUJBQXlCLEVBQUE7O0FBTzNCO0VBQ0UseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsMkJBQTJCO0VBQzNCLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21hbmFnZW1lbnQvbW9kdWxlcy91c2Vycy91c2Vycy1saXN0L3VzZXJzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1yb3cge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4udXNlci1zZWxlY3RlZC1yb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xufVxuXG4udXNlci1wZW5kaW5nLXByb3ZpZGVyLXJvdyB7XG5cbn1cblxubnotdGFibGUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDlkYmRkO1xufVxuXG5uei1jYXJkIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTA0cHgpO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/management/modules/users/users-list/users-list.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/management/modules/users/users-list/users-list.component.ts ***!
  \*****************************************************************************/
/*! exports provided: UsersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersListComponent", function() { return UsersListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _users_route_data_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../users-route-data.provider */ "./src/app/management/modules/users/users-route-data.provider.ts");







var UsersListComponent = /** @class */ (function () {
    function UsersListComponent(router, route, userService, routeDataProvider) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.routeDataProvider = routeDataProvider;
        this.mapOfExpandData = {};
        this.switchValue = false;
        this.pageIndex = 1;
        this.pageSize = 17;
        this.total = 1;
        this.users = [];
        this.loading = true;
        this.sortValue = null;
        this.sortKey = null;
        this.searchGenderList = [];
        this.filterGender = [
            { text: 'male', value: 'male' },
            { text: 'female', value: 'female' }
        ];
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
    UsersListComponent.prototype.clickSwitch = function () {
        var _this = this;
        if (!this.loading) {
            this.loading = true;
            setTimeout(function () {
                _this.switchValue = !_this.switchValue;
                _this.loading = false;
            }, 3000);
        }
    };
    UsersListComponent.prototype.refreshStatus = function () {
        var _this = this;
        this.isAllDisplayDataChecked = this.listOfDisplayData.every(function (item) { return _this.mapOfCheckedId[item.id]; });
        this.isIndeterminate =
            this.listOfDisplayData.some(function (item) { return _this.mapOfCheckedId[item.id]; }) && !this.isAllDisplayDataChecked;
    };
    UsersListComponent.prototype.checkAll = function (value) {
        var _this = this;
        this.listOfDisplayData.forEach(function (item) { return (_this.mapOfCheckedId[item.id] = value); });
        this.refreshStatus();
    };
    UsersListComponent.prototype.sort = function (sort) {
        this.sortKey = sort.key;
        this.sortValue = sort.value;
        this.searchData();
    };
    UsersListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (resolve) {
            _this.pagedResponse = resolve.data;
            _this.total = _this.pagedResponse.totalElements;
            _this.pageIndex = _this.pagedResponse.page + 1;
            _this.pageSize = _this.pagedResponse.size;
            _this.users = _this.pagedResponse.content;
            _this.loading = false;
            _this.selected = _this.router.url.substr(18);
            console.log('this.selected', _this.selected);
            if (_this.selected !== undefined) {
                var selectedUser = _this.users.find(function (r) { return r.username === _this.selected; });
                _this.routeDataProvider.setUser(selectedUser);
                console.log('selectedUser', selectedUser);
            }
        });
    };
    UsersListComponent.prototype.searchData = function (reset) {
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
        this.userService.getAll(filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            _this.loading = false;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error);
        })).subscribe(function (data) {
            _this.users = data.content;
            _this.total = data.totalElements;
            _this.loading = false;
        });
    };
    UsersListComponent.prototype.updateFilter = function (value) {
        this.searchGenderList = value;
        this.searchData(true);
    };
    UsersListComponent.prototype.userClicked = function (data) {
        this.selected = data.username;
        this.routeDataProvider.setUser(data);
        this.router.navigate(['management/users', data.username]);
    };
    UsersListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users-list',
            template: __webpack_require__(/*! ./users-list.component.html */ "./src/app/management/modules/users/users-list/users-list.component.html"),
            styles: [__webpack_require__(/*! ./users-list.component.scss */ "./src/app/management/modules/users/users-list/users-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _users_route_data_provider__WEBPACK_IMPORTED_MODULE_6__["UsersRouteDataProvider"]])
    ], UsersListComponent);
    return UsersListComponent;
}());



/***/ }),

/***/ "./src/app/management/modules/users/users-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/management/modules/users/users-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: UsersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersRoutingModule", function() { return UsersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users.component */ "./src/app/management/modules/users/users.component.ts");
/* harmony import */ var _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users-list/users-list.component */ "./src/app/management/modules/users/users-list/users-list.component.ts");
/* harmony import */ var _users_detail_users_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users-detail/users-detail.component */ "./src/app/management/modules/users/users-detail/users-detail.component.ts");
/* harmony import */ var _users_insert_new_users_insert_new_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users-insert-new/users-insert-new.component */ "./src/app/management/modules/users/users-insert-new/users-insert-new.component.ts");
/* harmony import */ var _users_list_users_list_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./users-list/users-list-resolver */ "./src/app/management/modules/users/users-list/users-list-resolver.ts");
/* harmony import */ var _users_detail_users_detail_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./users-detail/users-detail-resolver */ "./src/app/management/modules/users/users-detail/users-detail-resolver.ts");









var routes = [
    {
        path: '',
        component: _users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"],
        children: [
            {
                path: '',
                component: _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_4__["UsersListComponent"],
                resolve: {
                    data: _users_list_users_list_resolver__WEBPACK_IMPORTED_MODULE_7__["UsersListResolver"]
                },
                children: [
                    {
                        path: ':username',
                        component: _users_detail_users_detail_component__WEBPACK_IMPORTED_MODULE_5__["UsersDetailComponent"],
                        resolve: {
                            data: _users_detail_users_detail_resolver__WEBPACK_IMPORTED_MODULE_8__["UsersDetailResolver"]
                        }
                    },
                    {
                        path: '',
                        component: _users_insert_new_users_insert_new_component__WEBPACK_IMPORTED_MODULE_6__["UsersInsertNewComponent"]
                    }
                ]
            }
        ]
    }
];
var UsersRoutingModule = /** @class */ (function () {
    function UsersRoutingModule() {
    }
    UsersRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], UsersRoutingModule);
    return UsersRoutingModule;
}());



/***/ }),

/***/ "./src/app/management/modules/users/users.component.html":
/*!***************************************************************!*\
  !*** ./src/app/management/modules/users/users.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h2>Users</h2>\n  <hr>\n  <div>\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/management/modules/users/users.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/management/modules/users/users.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZW1lbnQvbW9kdWxlcy91c2Vycy91c2Vycy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/management/modules/users/users.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/management/modules/users/users.component.ts ***!
  \*************************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UsersComponent = /** @class */ (function () {
    function UsersComponent() {
    }
    UsersComponent.prototype.ngOnInit = function () {
    };
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/management/modules/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.scss */ "./src/app/management/modules/users/users.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/management/modules/users/users.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/management/modules/users/users.module.ts ***!
  \**********************************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users-routing.module */ "./src/app/management/modules/users/users-routing.module.ts");
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users.component */ "./src/app/management/modules/users/users.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users-list/users-list.component */ "./src/app/management/modules/users/users-list/users-list.component.ts");
/* harmony import */ var _users_detail_users_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./users-detail/users-detail.component */ "./src/app/management/modules/users/users-detail/users-detail.component.ts");
/* harmony import */ var _users_insert_new_users_insert_new_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./users-insert-new/users-insert-new.component */ "./src/app/management/modules/users/users-insert-new/users-insert-new.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_directives_var_directive_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/directives/var-directive.module */ "./src/app/shared/directives/var-directive.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _users_route_data_provider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./users-route-data.provider */ "./src/app/management/modules/users/users-route-data.provider.ts");













var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _users_component__WEBPACK_IMPORTED_MODULE_4__["UsersComponent"],
                _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_6__["UsersListComponent"],
                _users_detail_users_detail_component__WEBPACK_IMPORTED_MODULE_7__["UsersDetailComponent"],
                _users_insert_new_users_insert_new_component__WEBPACK_IMPORTED_MODULE_8__["UsersInsertNewComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _users_routing_module__WEBPACK_IMPORTED_MODULE_3__["UsersRoutingModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NgZorroAntdModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"],
                _shared_directives_var_directive_module__WEBPACK_IMPORTED_MODULE_10__["VarDirectiveModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]
            ],
            providers: [
                _users_route_data_provider__WEBPACK_IMPORTED_MODULE_12__["UsersRouteDataProvider"]
            ]
        })
    ], UsersModule);
    return UsersModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-users-users-module.js.map