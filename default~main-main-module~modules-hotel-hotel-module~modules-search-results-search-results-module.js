(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~main-main-module~modules-hotel-hotel-module~modules-search-results-search-results-module"],{

/***/ "./node_modules/@agm/js-marker-clusterer/directives.js":
/*!*************************************************************!*\
  !*** ./node_modules/@agm/js-marker-clusterer/directives.js ***!
  \*************************************************************/
/*! exports provided: AgmMarkerCluster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _directives_marker_cluster__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directives/marker-cluster */ "./node_modules/@agm/js-marker-clusterer/directives/marker-cluster.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmMarkerCluster", function() { return _directives_marker_cluster__WEBPACK_IMPORTED_MODULE_0__["AgmMarkerCluster"]; });


//# sourceMappingURL=directives.js.map

/***/ }),

/***/ "./node_modules/@agm/js-marker-clusterer/directives/marker-cluster.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@agm/js-marker-clusterer/directives/marker-cluster.js ***!
  \****************************************************************************/
/*! exports provided: AgmMarkerCluster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmMarkerCluster", function() { return AgmMarkerCluster; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_managers_cluster_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/managers/cluster-manager */ "./node_modules/@agm/js-marker-clusterer/services/managers/cluster-manager.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * AgmMarkerCluster clusters map marker if they are near together
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    agm-map {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-marker-cluster>
 *        <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
 *        </agm-marker>
 *        <agm-marker [latitude]="lat2" [longitude]="lng2" [label]="'N'">
 *        </agm-marker>
 *      </agm-marker-cluster>
 *    </agm-map>
 *  `
 * })
 * ```
 */
var AgmMarkerCluster = /** @class */ (function () {
    function AgmMarkerCluster(_clusterManager) {
        this._clusterManager = _clusterManager;
    }
    /** @internal */
    AgmMarkerCluster.prototype.ngOnDestroy = function () {
        this._clusterManager.clearMarkers();
    };
    /** @internal */
    AgmMarkerCluster.prototype.ngOnChanges = function (changes) {
        if (changes['gridSize']) {
            this._clusterManager.setGridSize(this);
        }
        if (changes['maxZoom']) {
            this._clusterManager.setMaxZoom(this);
        }
        if (changes['styles']) {
            this._clusterManager.setStyles(this);
        }
        if (changes['zoomOnClick']) {
            this._clusterManager.setZoomOnClick(this);
        }
        if (changes['averageCenter']) {
            this._clusterManager.setAverageCenter(this);
        }
        if (changes['minimumClusterSize']) {
            this._clusterManager.setMinimumClusterSize(this);
        }
        if (changes['styles']) {
            this._clusterManager.setStyles(this);
        }
        if (changes['imagePath']) {
            this._clusterManager.setImagePath(this);
        }
        if (changes['imageExtension']) {
            this._clusterManager.setImageExtension(this);
        }
        if (changes['calculator']) {
            this._clusterManager.setCalculator(this);
        }
    };
    /** @internal */
    AgmMarkerCluster.prototype.ngOnInit = function () {
        this._clusterManager.init({
            gridSize: this.gridSize,
            maxZoom: this.maxZoom,
            zoomOnClick: this.zoomOnClick,
            averageCenter: this.averageCenter,
            minimumClusterSize: this.minimumClusterSize,
            styles: this.styles,
            imagePath: this.imagePath,
            imageExtension: this.imageExtension,
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AgmMarkerCluster.prototype, "gridSize", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AgmMarkerCluster.prototype, "maxZoom", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AgmMarkerCluster.prototype, "zoomOnClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AgmMarkerCluster.prototype, "averageCenter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AgmMarkerCluster.prototype, "minimumClusterSize", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AgmMarkerCluster.prototype, "styles", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], AgmMarkerCluster.prototype, "calculator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AgmMarkerCluster.prototype, "imagePath", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AgmMarkerCluster.prototype, "imageExtension", void 0);
    AgmMarkerCluster = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: 'agm-marker-cluster',
            providers: [
                _services_managers_cluster_manager__WEBPACK_IMPORTED_MODULE_1__["ClusterManager"],
                { provide: _agm_core__WEBPACK_IMPORTED_MODULE_2__["MarkerManager"], useExisting: _services_managers_cluster_manager__WEBPACK_IMPORTED_MODULE_1__["ClusterManager"] },
                _agm_core__WEBPACK_IMPORTED_MODULE_2__["InfoWindowManager"],
            ]
        }),
        __metadata("design:paramtypes", [_services_managers_cluster_manager__WEBPACK_IMPORTED_MODULE_1__["ClusterManager"]])
    ], AgmMarkerCluster);
    return AgmMarkerCluster;
}());

//# sourceMappingURL=marker-cluster.js.map

/***/ }),

/***/ "./node_modules/@agm/js-marker-clusterer/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@agm/js-marker-clusterer/index.js ***!
  \********************************************************/
/*! exports provided: AgmJsMarkerClustererModule, AgmMarkerCluster, ClusterManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directives */ "./node_modules/@agm/js-marker-clusterer/directives.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmMarkerCluster", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmMarkerCluster"]; });

/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ "./node_modules/@agm/js-marker-clusterer/services.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClusterManager", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["ClusterManager"]; });

/* harmony import */ var _js_marker_clusterer_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js-marker-clusterer.module */ "./node_modules/@agm/js-marker-clusterer/js-marker-clusterer.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmJsMarkerClustererModule", function() { return _js_marker_clusterer_module__WEBPACK_IMPORTED_MODULE_2__["AgmJsMarkerClustererModule"]; });

// main modules


// we explicitly export the module here to prevent this Ionic 2 bug:
// http://stevemichelotti.com/integrate-angular-2-google-maps-into-ionic-2/

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@agm/js-marker-clusterer/js-marker-clusterer.module.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@agm/js-marker-clusterer/js-marker-clusterer.module.js ***!
  \*****************************************************************************/
/*! exports provided: AgmJsMarkerClustererModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmJsMarkerClustererModule", function() { return AgmJsMarkerClustererModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _directives_marker_cluster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/marker-cluster */ "./node_modules/@agm/js-marker-clusterer/directives/marker-cluster.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AgmJsMarkerClustererModule = /** @class */ (function () {
    function AgmJsMarkerClustererModule() {
    }
    AgmJsMarkerClustererModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_agm_core__WEBPACK_IMPORTED_MODULE_1__["AgmCoreModule"]],
            declarations: [_directives_marker_cluster__WEBPACK_IMPORTED_MODULE_2__["AgmMarkerCluster"]],
            exports: [_directives_marker_cluster__WEBPACK_IMPORTED_MODULE_2__["AgmMarkerCluster"]]
        })
    ], AgmJsMarkerClustererModule);
    return AgmJsMarkerClustererModule;
}());

//# sourceMappingURL=js-marker-clusterer.module.js.map

/***/ }),

/***/ "./node_modules/@agm/js-marker-clusterer/services.js":
/*!***********************************************************!*\
  !*** ./node_modules/@agm/js-marker-clusterer/services.js ***!
  \***********************************************************/
/*! exports provided: ClusterManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_managers_cluster_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/managers/cluster-manager */ "./node_modules/@agm/js-marker-clusterer/services/managers/cluster-manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClusterManager", function() { return _services_managers_cluster_manager__WEBPACK_IMPORTED_MODULE_0__["ClusterManager"]; });


//# sourceMappingURL=services.js.map

/***/ }),

/***/ "./node_modules/@agm/js-marker-clusterer/services/managers/cluster-manager.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@agm/js-marker-clusterer/services/managers/cluster-manager.js ***!
  \************************************************************************************/
/*! exports provided: ClusterManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterManager", function() { return ClusterManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var js_marker_clusterer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-marker-clusterer */ "./node_modules/js-marker-clusterer/src/markerclusterer.js");
/* harmony import */ var js_marker_clusterer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_marker_clusterer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_services_managers_marker_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/managers/marker-manager */ "./node_modules/@agm/core/services/managers/marker-manager.js");
/* harmony import */ var _core_services_google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClusterManager = /** @class */ (function (_super) {
    __extends(ClusterManager, _super);
    function ClusterManager(_mapsWrapper, _zone) {
        var _this = _super.call(this, _mapsWrapper, _zone) || this;
        _this._mapsWrapper = _mapsWrapper;
        _this._zone = _zone;
        _this._clustererInstance = new Promise(function (resolver) {
            _this._resolver = resolver;
        });
        return _this;
    }
    ClusterManager.prototype.init = function (options) {
        var _this = this;
        this._mapsWrapper.getNativeMap().then(function (map) {
            var clusterer = new MarkerClusterer(map, [], options);
            _this._resolver(clusterer);
        });
    };
    ClusterManager.prototype.getClustererInstance = function () {
        return this._clustererInstance;
    };
    ClusterManager.prototype.addMarker = function (marker) {
        var clusterPromise = this.getClustererInstance();
        var markerPromise = this._mapsWrapper
            .createMarker({
            position: {
                lat: marker.latitude,
                lng: marker.longitude
            },
            label: marker.label,
            draggable: marker.draggable,
            icon: marker.iconUrl,
            opacity: marker.opacity,
            visible: marker.visible,
            zIndex: marker.zIndex,
            title: marker.title,
            clickable: marker.clickable,
        }, false);
        Promise
            .all([clusterPromise, markerPromise])
            .then(function (_a) {
            var cluster = _a[0], marker = _a[1];
            return cluster.addMarker(marker);
        });
        this._markers.set(marker, markerPromise);
    };
    ClusterManager.prototype.deleteMarker = function (marker) {
        var _this = this;
        var m = this._markers.get(marker);
        if (m == null) {
            // marker already deleted
            return Promise.resolve();
        }
        return m.then(function (m) {
            _this._zone.run(function () {
                m.setMap(null);
                _this.getClustererInstance().then(function (cluster) {
                    cluster.removeMarker(m);
                    _this._markers.delete(marker);
                });
            });
        });
    };
    ClusterManager.prototype.clearMarkers = function () {
        return this.getClustererInstance().then(function (cluster) {
            cluster.clearMarkers();
        });
    };
    ClusterManager.prototype.setGridSize = function (c) {
        this.getClustererInstance().then(function (cluster) {
            cluster.setGridSize(c.gridSize);
        });
    };
    ClusterManager.prototype.setMaxZoom = function (c) {
        this.getClustererInstance().then(function (cluster) {
            cluster.setMaxZoom(c.maxZoom);
        });
    };
    ClusterManager.prototype.setStyles = function (c) {
        this.getClustererInstance().then(function (cluster) {
            cluster.setStyles(c.styles);
        });
    };
    ClusterManager.prototype.setZoomOnClick = function (c) {
        this.getClustererInstance().then(function (cluster) {
            if (c.zoomOnClick !== undefined) {
                cluster.zoomOnClick_ = c.zoomOnClick;
            }
        });
    };
    ClusterManager.prototype.setAverageCenter = function (c) {
        this.getClustererInstance().then(function (cluster) {
            if (c.averageCenter !== undefined) {
                cluster.averageCenter_ = c.averageCenter;
            }
        });
    };
    ClusterManager.prototype.setImagePath = function (c) {
        this.getClustererInstance().then(function (cluster) {
            if (c.imagePath !== undefined) {
                cluster.imagePath_ = c.imagePath;
            }
        });
    };
    ClusterManager.prototype.setMinimumClusterSize = function (c) {
        this.getClustererInstance().then(function (cluster) {
            if (c.minimumClusterSize !== undefined) {
                cluster.minimumClusterSize_ = c.minimumClusterSize;
            }
        });
    };
    ClusterManager.prototype.setImageExtension = function (c) {
        this.getClustererInstance().then(function (cluster) {
            if (c.imageExtension !== undefined) {
                cluster.imageExtension_ = c.imageExtension;
            }
        });
    };
    ClusterManager.prototype.setCalculator = function (c) {
        this.getClustererInstance().then(function (cluster) {
            if (typeof c.calculator === 'function') {
                cluster.setCalculator(c.calculator);
            }
        });
    };
    ClusterManager = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_core_services_google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_3__["GoogleMapsAPIWrapper"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], ClusterManager);
    return ClusterManager;
}(_core_services_managers_marker_manager__WEBPACK_IMPORTED_MODULE_2__["MarkerManager"]));

//# sourceMappingURL=cluster-manager.js.map

/***/ }),

/***/ "./node_modules/detect-passive-events/lib/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/detect-passive-events/lib/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// adapted from https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
var detectPassiveEvents = {
  update: function update() {
    if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
      var passive = false;
      var options = Object.defineProperty({}, 'passive', {
        get: function get() {
          passive = true;
        }
      });
      // note: have to set and remove a no-op listener instead of null
      // (which was used previously), becasue Edge v15 throws an error
      // when providing a null callback.
      // https://github.com/rafrex/detect-passive-events/pull/3
      var noop = function noop() {};
      window.addEventListener('testPassiveEventSupport', noop, options);
      window.removeEventListener('testPassiveEventSupport', noop, options);
      detectPassiveEvents.hasSupport = passive;
    }
  }
};

detectPassiveEvents.update();
exports.default = detectPassiveEvents;

/***/ }),

/***/ "./node_modules/js-marker-clusterer/src/markerclusterer.js":
/*!*****************************************************************!*\
  !*** ./node_modules/js-marker-clusterer/src/markerclusterer.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// ==ClosureCompiler==
// @compilation_level ADVANCED_OPTIMIZATIONS
// @externs_url http://closure-compiler.googlecode.com/svn/trunk/contrib/externs/maps/google_maps_api_v3_3.js
// ==/ClosureCompiler==

/**
 * @name MarkerClusterer for Google Maps v3
 * @version version 1.0
 * @author Luke Mahe
 * @fileoverview
 * The library creates and manages per-zoom-level clusters for large amounts of
 * markers.
 * <br/>
 * This is a v3 implementation of the
 * <a href="http://gmaps-utility-library-dev.googlecode.com/svn/tags/markerclusterer/"
 * >v2 MarkerClusterer</a>.
 */

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * A Marker Clusterer that clusters markers.
 *
 * @param {google.maps.Map} map The Google map to attach to.
 * @param {Array.<google.maps.Marker>=} opt_markers Optional markers to add to
 *   the cluster.
 * @param {Object=} opt_options support the following options:
 *     'gridSize': (number) The grid size of a cluster in pixels.
 *     'maxZoom': (number) The maximum zoom level that a marker can be part of a
 *                cluster.
 *     'zoomOnClick': (boolean) Whether the default behaviour of clicking on a
 *                    cluster is to zoom into it.
 *     'averageCenter': (boolean) Wether the center of each cluster should be
 *                      the average of all markers in the cluster.
 *     'minimumClusterSize': (number) The minimum number of markers to be in a
 *                           cluster before the markers are hidden and a count
 *                           is shown.
 *     'styles': (object) An object that has style properties:
 *       'url': (string) The image url.
 *       'height': (number) The image height.
 *       'width': (number) The image width.
 *       'anchor': (Array) The anchor position of the label text.
 *       'textColor': (string) The text color.
 *       'textSize': (number) The text size.
 *       'backgroundPosition': (string) The position of the backgound x, y.
 *       'iconAnchor': (Array) The anchor position of the icon x, y.
 * @constructor
 * @extends google.maps.OverlayView
 */
function MarkerClusterer(map, opt_markers, opt_options) {
  // MarkerClusterer implements google.maps.OverlayView interface. We use the
  // extend function to extend MarkerClusterer with google.maps.OverlayView
  // because it might not always be available when the code is defined so we
  // look for it at the last possible moment. If it doesn't exist now then
  // there is no point going ahead :)
  this.extend(MarkerClusterer, google.maps.OverlayView);
  this.map_ = map;

  /**
   * @type {Array.<google.maps.Marker>}
   * @private
   */
  this.markers_ = [];

  /**
   *  @type {Array.<Cluster>}
   */
  this.clusters_ = [];

  this.sizes = [53, 56, 66, 78, 90];

  /**
   * @private
   */
  this.styles_ = [];

  /**
   * @type {boolean}
   * @private
   */
  this.ready_ = false;

  var options = opt_options || {};

  /**
   * @type {number}
   * @private
   */
  this.gridSize_ = options['gridSize'] || 60;

  /**
   * @private
   */
  this.minClusterSize_ = options['minimumClusterSize'] || 2;


  /**
   * @type {?number}
   * @private
   */
  this.maxZoom_ = options['maxZoom'] || null;

  this.styles_ = options['styles'] || [];

  /**
   * @type {string}
   * @private
   */
  this.imagePath_ = options['imagePath'] ||
      this.MARKER_CLUSTER_IMAGE_PATH_;

  /**
   * @type {string}
   * @private
   */
  this.imageExtension_ = options['imageExtension'] ||
      this.MARKER_CLUSTER_IMAGE_EXTENSION_;

  /**
   * @type {boolean}
   * @private
   */
  this.zoomOnClick_ = true;

  if (options['zoomOnClick'] != undefined) {
    this.zoomOnClick_ = options['zoomOnClick'];
  }

  /**
   * @type {boolean}
   * @private
   */
  this.averageCenter_ = false;

  if (options['averageCenter'] != undefined) {
    this.averageCenter_ = options['averageCenter'];
  }

  this.setupStyles_();

  this.setMap(map);

  /**
   * @type {number}
   * @private
   */
  this.prevZoom_ = this.map_.getZoom();

  // Add the map event listeners
  var that = this;
  google.maps.event.addListener(this.map_, 'zoom_changed', function() {
    var zoom = that.map_.getZoom();

    if (that.prevZoom_ != zoom) {
      that.prevZoom_ = zoom;
      that.resetViewport();
    }
  });

  google.maps.event.addListener(this.map_, 'idle', function() {
    that.redraw();
  });

  // Finally, add the markers
  if (opt_markers && opt_markers.length) {
    this.addMarkers(opt_markers, false);
  }
}


/**
 * The marker cluster image path.
 *
 * @type {string}
 * @private
 */
MarkerClusterer.prototype.MARKER_CLUSTER_IMAGE_PATH_ =
    'http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclusterer/' +
    'images/m';


/**
 * The marker cluster image path.
 *
 * @type {string}
 * @private
 */
MarkerClusterer.prototype.MARKER_CLUSTER_IMAGE_EXTENSION_ = 'png';


/**
 * Extends a objects prototype by anothers.
 *
 * @param {Object} obj1 The object to be extended.
 * @param {Object} obj2 The object to extend with.
 * @return {Object} The new extended object.
 * @ignore
 */
MarkerClusterer.prototype.extend = function(obj1, obj2) {
  return (function(object) {
    for (var property in object.prototype) {
      this.prototype[property] = object.prototype[property];
    }
    return this;
  }).apply(obj1, [obj2]);
};


/**
 * Implementaion of the interface method.
 * @ignore
 */
MarkerClusterer.prototype.onAdd = function() {
  this.setReady_(true);
};

/**
 * Implementaion of the interface method.
 * @ignore
 */
MarkerClusterer.prototype.draw = function() {};

/**
 * Sets up the styles object.
 *
 * @private
 */
MarkerClusterer.prototype.setupStyles_ = function() {
  if (this.styles_.length) {
    return;
  }

  for (var i = 0, size; size = this.sizes[i]; i++) {
    this.styles_.push({
      url: this.imagePath_ + (i + 1) + '.' + this.imageExtension_,
      height: size,
      width: size
    });
  }
};

/**
 *  Fit the map to the bounds of the markers in the clusterer.
 */
MarkerClusterer.prototype.fitMapToMarkers = function() {
  var markers = this.getMarkers();
  var bounds = new google.maps.LatLngBounds();
  for (var i = 0, marker; marker = markers[i]; i++) {
    bounds.extend(marker.getPosition());
  }

  this.map_.fitBounds(bounds);
};


/**
 *  Sets the styles.
 *
 *  @param {Object} styles The style to set.
 */
MarkerClusterer.prototype.setStyles = function(styles) {
  this.styles_ = styles;
};


/**
 *  Gets the styles.
 *
 *  @return {Object} The styles object.
 */
MarkerClusterer.prototype.getStyles = function() {
  return this.styles_;
};


/**
 * Whether zoom on click is set.
 *
 * @return {boolean} True if zoomOnClick_ is set.
 */
MarkerClusterer.prototype.isZoomOnClick = function() {
  return this.zoomOnClick_;
};

/**
 * Whether average center is set.
 *
 * @return {boolean} True if averageCenter_ is set.
 */
MarkerClusterer.prototype.isAverageCenter = function() {
  return this.averageCenter_;
};


/**
 *  Returns the array of markers in the clusterer.
 *
 *  @return {Array.<google.maps.Marker>} The markers.
 */
MarkerClusterer.prototype.getMarkers = function() {
  return this.markers_;
};


/**
 *  Returns the number of markers in the clusterer
 *
 *  @return {Number} The number of markers.
 */
MarkerClusterer.prototype.getTotalMarkers = function() {
  return this.markers_.length;
};


/**
 *  Sets the max zoom for the clusterer.
 *
 *  @param {number} maxZoom The max zoom level.
 */
MarkerClusterer.prototype.setMaxZoom = function(maxZoom) {
  this.maxZoom_ = maxZoom;
};


/**
 *  Gets the max zoom for the clusterer.
 *
 *  @return {number} The max zoom level.
 */
MarkerClusterer.prototype.getMaxZoom = function() {
  return this.maxZoom_;
};


/**
 *  The function for calculating the cluster icon image.
 *
 *  @param {Array.<google.maps.Marker>} markers The markers in the clusterer.
 *  @param {number} numStyles The number of styles available.
 *  @return {Object} A object properties: 'text' (string) and 'index' (number).
 *  @private
 */
MarkerClusterer.prototype.calculator_ = function(markers, numStyles) {
  var index = 0;
  var count = markers.length;
  var dv = count;
  while (dv !== 0) {
    dv = parseInt(dv / 10, 10);
    index++;
  }

  index = Math.min(index, numStyles);
  return {
    text: count,
    index: index
  };
};


/**
 * Set the calculator function.
 *
 * @param {function(Array, number)} calculator The function to set as the
 *     calculator. The function should return a object properties:
 *     'text' (string) and 'index' (number).
 *
 */
MarkerClusterer.prototype.setCalculator = function(calculator) {
  this.calculator_ = calculator;
};


/**
 * Get the calculator function.
 *
 * @return {function(Array, number)} the calculator function.
 */
MarkerClusterer.prototype.getCalculator = function() {
  return this.calculator_;
};


/**
 * Add an array of markers to the clusterer.
 *
 * @param {Array.<google.maps.Marker>} markers The markers to add.
 * @param {boolean=} opt_nodraw Whether to redraw the clusters.
 */
MarkerClusterer.prototype.addMarkers = function(markers, opt_nodraw) {
  for (var i = 0, marker; marker = markers[i]; i++) {
    this.pushMarkerTo_(marker);
  }
  if (!opt_nodraw) {
    this.redraw();
  }
};


/**
 * Pushes a marker to the clusterer.
 *
 * @param {google.maps.Marker} marker The marker to add.
 * @private
 */
MarkerClusterer.prototype.pushMarkerTo_ = function(marker) {
  marker.isAdded = false;
  if (marker['draggable']) {
    // If the marker is draggable add a listener so we update the clusters on
    // the drag end.
    var that = this;
    google.maps.event.addListener(marker, 'dragend', function() {
      marker.isAdded = false;
      that.repaint();
    });
  }
  this.markers_.push(marker);
};


/**
 * Adds a marker to the clusterer and redraws if needed.
 *
 * @param {google.maps.Marker} marker The marker to add.
 * @param {boolean=} opt_nodraw Whether to redraw the clusters.
 */
MarkerClusterer.prototype.addMarker = function(marker, opt_nodraw) {
  this.pushMarkerTo_(marker);
  if (!opt_nodraw) {
    this.redraw();
  }
};


/**
 * Removes a marker and returns true if removed, false if not
 *
 * @param {google.maps.Marker} marker The marker to remove
 * @return {boolean} Whether the marker was removed or not
 * @private
 */
MarkerClusterer.prototype.removeMarker_ = function(marker) {
  var index = -1;
  if (this.markers_.indexOf) {
    index = this.markers_.indexOf(marker);
  } else {
    for (var i = 0, m; m = this.markers_[i]; i++) {
      if (m == marker) {
        index = i;
        break;
      }
    }
  }

  if (index == -1) {
    // Marker is not in our list of markers.
    return false;
  }

  marker.setMap(null);

  this.markers_.splice(index, 1);

  return true;
};


/**
 * Remove a marker from the cluster.
 *
 * @param {google.maps.Marker} marker The marker to remove.
 * @param {boolean=} opt_nodraw Optional boolean to force no redraw.
 * @return {boolean} True if the marker was removed.
 */
MarkerClusterer.prototype.removeMarker = function(marker, opt_nodraw) {
  var removed = this.removeMarker_(marker);

  if (!opt_nodraw && removed) {
    this.resetViewport();
    this.redraw();
    return true;
  } else {
   return false;
  }
};


/**
 * Removes an array of markers from the cluster.
 *
 * @param {Array.<google.maps.Marker>} markers The markers to remove.
 * @param {boolean=} opt_nodraw Optional boolean to force no redraw.
 */
MarkerClusterer.prototype.removeMarkers = function(markers, opt_nodraw) {
  var removed = false;

  for (var i = 0, marker; marker = markers[i]; i++) {
    var r = this.removeMarker_(marker);
    removed = removed || r;
  }

  if (!opt_nodraw && removed) {
    this.resetViewport();
    this.redraw();
    return true;
  }
};


/**
 * Sets the clusterer's ready state.
 *
 * @param {boolean} ready The state.
 * @private
 */
MarkerClusterer.prototype.setReady_ = function(ready) {
  if (!this.ready_) {
    this.ready_ = ready;
    this.createClusters_();
  }
};


/**
 * Returns the number of clusters in the clusterer.
 *
 * @return {number} The number of clusters.
 */
MarkerClusterer.prototype.getTotalClusters = function() {
  return this.clusters_.length;
};


/**
 * Returns the google map that the clusterer is associated with.
 *
 * @return {google.maps.Map} The map.
 */
MarkerClusterer.prototype.getMap = function() {
  return this.map_;
};


/**
 * Sets the google map that the clusterer is associated with.
 *
 * @param {google.maps.Map} map The map.
 */
MarkerClusterer.prototype.setMap = function(map) {
  this.map_ = map;
};


/**
 * Returns the size of the grid.
 *
 * @return {number} The grid size.
 */
MarkerClusterer.prototype.getGridSize = function() {
  return this.gridSize_;
};


/**
 * Sets the size of the grid.
 *
 * @param {number} size The grid size.
 */
MarkerClusterer.prototype.setGridSize = function(size) {
  this.gridSize_ = size;
};


/**
 * Returns the min cluster size.
 *
 * @return {number} The grid size.
 */
MarkerClusterer.prototype.getMinClusterSize = function() {
  return this.minClusterSize_;
};

/**
 * Sets the min cluster size.
 *
 * @param {number} size The grid size.
 */
MarkerClusterer.prototype.setMinClusterSize = function(size) {
  this.minClusterSize_ = size;
};


/**
 * Extends a bounds object by the grid size.
 *
 * @param {google.maps.LatLngBounds} bounds The bounds to extend.
 * @return {google.maps.LatLngBounds} The extended bounds.
 */
MarkerClusterer.prototype.getExtendedBounds = function(bounds) {
  var projection = this.getProjection();

  // Turn the bounds into latlng.
  var tr = new google.maps.LatLng(bounds.getNorthEast().lat(),
      bounds.getNorthEast().lng());
  var bl = new google.maps.LatLng(bounds.getSouthWest().lat(),
      bounds.getSouthWest().lng());

  // Convert the points to pixels and the extend out by the grid size.
  var trPix = projection.fromLatLngToDivPixel(tr);
  trPix.x += this.gridSize_;
  trPix.y -= this.gridSize_;

  var blPix = projection.fromLatLngToDivPixel(bl);
  blPix.x -= this.gridSize_;
  blPix.y += this.gridSize_;

  // Convert the pixel points back to LatLng
  var ne = projection.fromDivPixelToLatLng(trPix);
  var sw = projection.fromDivPixelToLatLng(blPix);

  // Extend the bounds to contain the new bounds.
  bounds.extend(ne);
  bounds.extend(sw);

  return bounds;
};


/**
 * Determins if a marker is contained in a bounds.
 *
 * @param {google.maps.Marker} marker The marker to check.
 * @param {google.maps.LatLngBounds} bounds The bounds to check against.
 * @return {boolean} True if the marker is in the bounds.
 * @private
 */
MarkerClusterer.prototype.isMarkerInBounds_ = function(marker, bounds) {
  return bounds.contains(marker.getPosition());
};


/**
 * Clears all clusters and markers from the clusterer.
 */
MarkerClusterer.prototype.clearMarkers = function() {
  this.resetViewport(true);

  // Set the markers a empty array.
  this.markers_ = [];
};


/**
 * Clears all existing clusters and recreates them.
 * @param {boolean} opt_hide To also hide the marker.
 */
MarkerClusterer.prototype.resetViewport = function(opt_hide) {
  // Remove all the clusters
  for (var i = 0, cluster; cluster = this.clusters_[i]; i++) {
    cluster.remove();
  }

  // Reset the markers to not be added and to be invisible.
  for (var i = 0, marker; marker = this.markers_[i]; i++) {
    marker.isAdded = false;
    if (opt_hide) {
      marker.setMap(null);
    }
  }

  this.clusters_ = [];
};

/**
 *
 */
MarkerClusterer.prototype.repaint = function() {
  var oldClusters = this.clusters_.slice();
  this.clusters_.length = 0;
  this.resetViewport();
  this.redraw();

  // Remove the old clusters.
  // Do it in a timeout so the other clusters have been drawn first.
  window.setTimeout(function() {
    for (var i = 0, cluster; cluster = oldClusters[i]; i++) {
      cluster.remove();
    }
  }, 0);
};


/**
 * Redraws the clusters.
 */
MarkerClusterer.prototype.redraw = function() {
  this.createClusters_();
};


/**
 * Calculates the distance between two latlng locations in km.
 * @see http://www.movable-type.co.uk/scripts/latlong.html
 *
 * @param {google.maps.LatLng} p1 The first lat lng point.
 * @param {google.maps.LatLng} p2 The second lat lng point.
 * @return {number} The distance between the two points in km.
 * @private
*/
MarkerClusterer.prototype.distanceBetweenPoints_ = function(p1, p2) {
  if (!p1 || !p2) {
    return 0;
  }

  var R = 6371; // Radius of the Earth in km
  var dLat = (p2.lat() - p1.lat()) * Math.PI / 180;
  var dLon = (p2.lng() - p1.lng()) * Math.PI / 180;
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(p1.lat() * Math.PI / 180) * Math.cos(p2.lat() * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d;
};


/**
 * Add a marker to a cluster, or creates a new cluster.
 *
 * @param {google.maps.Marker} marker The marker to add.
 * @private
 */
MarkerClusterer.prototype.addToClosestCluster_ = function(marker) {
  var distance = 40000; // Some large number
  var clusterToAddTo = null;
  var pos = marker.getPosition();
  for (var i = 0, cluster; cluster = this.clusters_[i]; i++) {
    var center = cluster.getCenter();
    if (center) {
      var d = this.distanceBetweenPoints_(center, marker.getPosition());
      if (d < distance) {
        distance = d;
        clusterToAddTo = cluster;
      }
    }
  }

  if (clusterToAddTo && clusterToAddTo.isMarkerInClusterBounds(marker)) {
    clusterToAddTo.addMarker(marker);
  } else {
    var cluster = new Cluster(this);
    cluster.addMarker(marker);
    this.clusters_.push(cluster);
  }
};


/**
 * Creates the clusters.
 *
 * @private
 */
MarkerClusterer.prototype.createClusters_ = function() {
  if (!this.ready_) {
    return;
  }

  // Get our current map view bounds.
  // Create a new bounds object so we don't affect the map.
  var mapBounds = new google.maps.LatLngBounds(this.map_.getBounds().getSouthWest(),
      this.map_.getBounds().getNorthEast());
  var bounds = this.getExtendedBounds(mapBounds);

  for (var i = 0, marker; marker = this.markers_[i]; i++) {
    if (!marker.isAdded && this.isMarkerInBounds_(marker, bounds)) {
      this.addToClosestCluster_(marker);
    }
  }
};


/**
 * A cluster that contains markers.
 *
 * @param {MarkerClusterer} markerClusterer The markerclusterer that this
 *     cluster is associated with.
 * @constructor
 * @ignore
 */
function Cluster(markerClusterer) {
  this.markerClusterer_ = markerClusterer;
  this.map_ = markerClusterer.getMap();
  this.gridSize_ = markerClusterer.getGridSize();
  this.minClusterSize_ = markerClusterer.getMinClusterSize();
  this.averageCenter_ = markerClusterer.isAverageCenter();
  this.center_ = null;
  this.markers_ = [];
  this.bounds_ = null;
  this.clusterIcon_ = new ClusterIcon(this, markerClusterer.getStyles(),
      markerClusterer.getGridSize());
}

/**
 * Determins if a marker is already added to the cluster.
 *
 * @param {google.maps.Marker} marker The marker to check.
 * @return {boolean} True if the marker is already added.
 */
Cluster.prototype.isMarkerAlreadyAdded = function(marker) {
  if (this.markers_.indexOf) {
    return this.markers_.indexOf(marker) != -1;
  } else {
    for (var i = 0, m; m = this.markers_[i]; i++) {
      if (m == marker) {
        return true;
      }
    }
  }
  return false;
};


/**
 * Add a marker the cluster.
 *
 * @param {google.maps.Marker} marker The marker to add.
 * @return {boolean} True if the marker was added.
 */
Cluster.prototype.addMarker = function(marker) {
  if (this.isMarkerAlreadyAdded(marker)) {
    return false;
  }

  if (!this.center_) {
    this.center_ = marker.getPosition();
    this.calculateBounds_();
  } else {
    if (this.averageCenter_) {
      var l = this.markers_.length + 1;
      var lat = (this.center_.lat() * (l-1) + marker.getPosition().lat()) / l;
      var lng = (this.center_.lng() * (l-1) + marker.getPosition().lng()) / l;
      this.center_ = new google.maps.LatLng(lat, lng);
      this.calculateBounds_();
    }
  }

  marker.isAdded = true;
  this.markers_.push(marker);

  var len = this.markers_.length;
  if (len < this.minClusterSize_ && marker.getMap() != this.map_) {
    // Min cluster size not reached so show the marker.
    marker.setMap(this.map_);
  }

  if (len == this.minClusterSize_) {
    // Hide the markers that were showing.
    for (var i = 0; i < len; i++) {
      this.markers_[i].setMap(null);
    }
  }

  if (len >= this.minClusterSize_) {
    marker.setMap(null);
  }

  this.updateIcon();
  return true;
};


/**
 * Returns the marker clusterer that the cluster is associated with.
 *
 * @return {MarkerClusterer} The associated marker clusterer.
 */
Cluster.prototype.getMarkerClusterer = function() {
  return this.markerClusterer_;
};


/**
 * Returns the bounds of the cluster.
 *
 * @return {google.maps.LatLngBounds} the cluster bounds.
 */
Cluster.prototype.getBounds = function() {
  var bounds = new google.maps.LatLngBounds(this.center_, this.center_);
  var markers = this.getMarkers();
  for (var i = 0, marker; marker = markers[i]; i++) {
    bounds.extend(marker.getPosition());
  }
  return bounds;
};


/**
 * Removes the cluster
 */
Cluster.prototype.remove = function() {
  this.clusterIcon_.remove();
  this.markers_.length = 0;
  delete this.markers_;
};


/**
 * Returns the center of the cluster.
 *
 * @return {number} The cluster center.
 */
Cluster.prototype.getSize = function() {
  return this.markers_.length;
};


/**
 * Returns the center of the cluster.
 *
 * @return {Array.<google.maps.Marker>} The cluster center.
 */
Cluster.prototype.getMarkers = function() {
  return this.markers_;
};


/**
 * Returns the center of the cluster.
 *
 * @return {google.maps.LatLng} The cluster center.
 */
Cluster.prototype.getCenter = function() {
  return this.center_;
};


/**
 * Calculated the extended bounds of the cluster with the grid.
 *
 * @private
 */
Cluster.prototype.calculateBounds_ = function() {
  var bounds = new google.maps.LatLngBounds(this.center_, this.center_);
  this.bounds_ = this.markerClusterer_.getExtendedBounds(bounds);
};


/**
 * Determines if a marker lies in the clusters bounds.
 *
 * @param {google.maps.Marker} marker The marker to check.
 * @return {boolean} True if the marker lies in the bounds.
 */
Cluster.prototype.isMarkerInClusterBounds = function(marker) {
  return this.bounds_.contains(marker.getPosition());
};


/**
 * Returns the map that the cluster is associated with.
 *
 * @return {google.maps.Map} The map.
 */
Cluster.prototype.getMap = function() {
  return this.map_;
};


/**
 * Updates the cluster icon
 */
Cluster.prototype.updateIcon = function() {
  var zoom = this.map_.getZoom();
  var mz = this.markerClusterer_.getMaxZoom();

  if (mz && zoom > mz) {
    // The zoom is greater than our max zoom so show all the markers in cluster.
    for (var i = 0, marker; marker = this.markers_[i]; i++) {
      marker.setMap(this.map_);
    }
    return;
  }

  if (this.markers_.length < this.minClusterSize_) {
    // Min cluster size not yet reached.
    this.clusterIcon_.hide();
    return;
  }

  var numStyles = this.markerClusterer_.getStyles().length;
  var sums = this.markerClusterer_.getCalculator()(this.markers_, numStyles);
  this.clusterIcon_.setCenter(this.center_);
  this.clusterIcon_.setSums(sums);
  this.clusterIcon_.show();
};


/**
 * A cluster icon
 *
 * @param {Cluster} cluster The cluster to be associated with.
 * @param {Object} styles An object that has style properties:
 *     'url': (string) The image url.
 *     'height': (number) The image height.
 *     'width': (number) The image width.
 *     'anchor': (Array) The anchor position of the label text.
 *     'textColor': (string) The text color.
 *     'textSize': (number) The text size.
 *     'backgroundPosition: (string) The background postition x, y.
 * @param {number=} opt_padding Optional padding to apply to the cluster icon.
 * @constructor
 * @extends google.maps.OverlayView
 * @ignore
 */
function ClusterIcon(cluster, styles, opt_padding) {
  cluster.getMarkerClusterer().extend(ClusterIcon, google.maps.OverlayView);

  this.styles_ = styles;
  this.padding_ = opt_padding || 0;
  this.cluster_ = cluster;
  this.center_ = null;
  this.map_ = cluster.getMap();
  this.div_ = null;
  this.sums_ = null;
  this.visible_ = false;

  this.setMap(this.map_);
}


/**
 * Triggers the clusterclick event and zoom's if the option is set.
 */
ClusterIcon.prototype.triggerClusterClick = function() {
  var markerClusterer = this.cluster_.getMarkerClusterer();

  // Trigger the clusterclick event.
  google.maps.event.trigger(markerClusterer, 'clusterclick', this.cluster_);

  if (markerClusterer.isZoomOnClick()) {
    // Zoom into the cluster.
    this.map_.fitBounds(this.cluster_.getBounds());
  }
};


/**
 * Adding the cluster icon to the dom.
 * @ignore
 */
ClusterIcon.prototype.onAdd = function() {
  this.div_ = document.createElement('DIV');
  if (this.visible_) {
    var pos = this.getPosFromLatLng_(this.center_);
    this.div_.style.cssText = this.createCss(pos);
    this.div_.innerHTML = this.sums_.text;
  }

  var panes = this.getPanes();
  panes.overlayMouseTarget.appendChild(this.div_);

  var that = this;
  google.maps.event.addDomListener(this.div_, 'click', function() {
    that.triggerClusterClick();
  });
};


/**
 * Returns the position to place the div dending on the latlng.
 *
 * @param {google.maps.LatLng} latlng The position in latlng.
 * @return {google.maps.Point} The position in pixels.
 * @private
 */
ClusterIcon.prototype.getPosFromLatLng_ = function(latlng) {
  var pos = this.getProjection().fromLatLngToDivPixel(latlng);

  if (typeof this.iconAnchor_ === 'object' && this.iconAnchor_.length === 2) {
    pos.x -= this.iconAnchor_[0];
    pos.y -= this.iconAnchor_[1];
  } else {
    pos.x -= parseInt(this.width_ / 2, 10);
    pos.y -= parseInt(this.height_ / 2, 10);
  }
  return pos;
};


/**
 * Draw the icon.
 * @ignore
 */
ClusterIcon.prototype.draw = function() {
  if (this.visible_) {
    var pos = this.getPosFromLatLng_(this.center_);
    this.div_.style.top = pos.y + 'px';
    this.div_.style.left = pos.x + 'px';
  }
};


/**
 * Hide the icon.
 */
ClusterIcon.prototype.hide = function() {
  if (this.div_) {
    this.div_.style.display = 'none';
  }
  this.visible_ = false;
};


/**
 * Position and show the icon.
 */
ClusterIcon.prototype.show = function() {
  if (this.div_) {
    var pos = this.getPosFromLatLng_(this.center_);
    this.div_.style.cssText = this.createCss(pos);
    this.div_.style.display = '';
  }
  this.visible_ = true;
};


/**
 * Remove the icon from the map
 */
ClusterIcon.prototype.remove = function() {
  this.setMap(null);
};


/**
 * Implementation of the onRemove interface.
 * @ignore
 */
ClusterIcon.prototype.onRemove = function() {
  if (this.div_ && this.div_.parentNode) {
    this.hide();
    this.div_.parentNode.removeChild(this.div_);
    this.div_ = null;
  }
};


/**
 * Set the sums of the icon.
 *
 * @param {Object} sums The sums containing:
 *   'text': (string) The text to display in the icon.
 *   'index': (number) The style index of the icon.
 */
ClusterIcon.prototype.setSums = function(sums) {
  this.sums_ = sums;
  this.text_ = sums.text;
  this.index_ = sums.index;
  if (this.div_) {
    this.div_.innerHTML = sums.text;
  }

  this.useStyle();
};


/**
 * Sets the icon to the the styles.
 */
ClusterIcon.prototype.useStyle = function() {
  var index = Math.max(0, this.sums_.index - 1);
  index = Math.min(this.styles_.length - 1, index);
  var style = this.styles_[index];
  this.url_ = style['url'];
  this.height_ = style['height'];
  this.width_ = style['width'];
  this.textColor_ = style['textColor'];
  this.anchor_ = style['anchor'];
  this.textSize_ = style['textSize'];
  this.backgroundPosition_ = style['backgroundPosition'];
  this.iconAnchor_ = style['iconAnchor'];
};


/**
 * Sets the center of the icon.
 *
 * @param {google.maps.LatLng} center The latlng to set as the center.
 */
ClusterIcon.prototype.setCenter = function(center) {
  this.center_ = center;
};


/**
 * Create the css text based on the position of the icon.
 *
 * @param {google.maps.Point} pos The position.
 * @return {string} The css style text.
 */
ClusterIcon.prototype.createCss = function(pos) {
  var style = [];
  style.push('background-image:url(' + this.url_ + ');');
  var backgroundPosition = this.backgroundPosition_ ? this.backgroundPosition_ : '0 0';
  style.push('background-position:' + backgroundPosition + ';');

  if (typeof this.anchor_ === 'object') {
    if (typeof this.anchor_[0] === 'number' && this.anchor_[0] > 0 &&
        this.anchor_[0] < this.height_) {
      style.push('height:' + (this.height_ - this.anchor_[0]) +
          'px; padding-top:' + this.anchor_[0] + 'px;');
    } else if (typeof this.anchor_[0] === 'number' && this.anchor_[0] < 0 &&
        -this.anchor_[0] < this.height_) {
      style.push('height:' + this.height_ + 'px; line-height:' + (this.height_ + this.anchor_[0]) +
          'px;');
    } else {
      style.push('height:' + this.height_ + 'px; line-height:' + this.height_ +
          'px;');
    }
    if (typeof this.anchor_[1] === 'number' && this.anchor_[1] > 0 &&
        this.anchor_[1] < this.width_) {
      style.push('width:' + (this.width_ - this.anchor_[1]) +
          'px; padding-left:' + this.anchor_[1] + 'px;');
    } else {
      style.push('width:' + this.width_ + 'px; text-align:center;');
    }
  } else {
    style.push('height:' + this.height_ + 'px; line-height:' +
        this.height_ + 'px; width:' + this.width_ + 'px; text-align:center;');
  }

  var txtColor = this.textColor_ ? this.textColor_ : 'black';
  var txtSize = this.textSize_ ? this.textSize_ : 11;

  style.push('cursor:pointer; top:' + pos.y + 'px; left:' +
      pos.x + 'px; color:' + txtColor + '; position:absolute; font-size:' +
      txtSize + 'px; font-family:Arial,sans-serif; font-weight:bold');
  return style.join('');
};


// Export Symbols for Closure
// If you are not going to compile with closure then you can remove the
// code below.
window['MarkerClusterer'] = MarkerClusterer;
MarkerClusterer.prototype['addMarker'] = MarkerClusterer.prototype.addMarker;
MarkerClusterer.prototype['addMarkers'] = MarkerClusterer.prototype.addMarkers;
MarkerClusterer.prototype['clearMarkers'] =
    MarkerClusterer.prototype.clearMarkers;
MarkerClusterer.prototype['fitMapToMarkers'] =
    MarkerClusterer.prototype.fitMapToMarkers;
MarkerClusterer.prototype['getCalculator'] =
    MarkerClusterer.prototype.getCalculator;
MarkerClusterer.prototype['getGridSize'] =
    MarkerClusterer.prototype.getGridSize;
MarkerClusterer.prototype['getExtendedBounds'] =
    MarkerClusterer.prototype.getExtendedBounds;
MarkerClusterer.prototype['getMap'] = MarkerClusterer.prototype.getMap;
MarkerClusterer.prototype['getMarkers'] = MarkerClusterer.prototype.getMarkers;
MarkerClusterer.prototype['getMaxZoom'] = MarkerClusterer.prototype.getMaxZoom;
MarkerClusterer.prototype['getStyles'] = MarkerClusterer.prototype.getStyles;
MarkerClusterer.prototype['getTotalClusters'] =
    MarkerClusterer.prototype.getTotalClusters;
MarkerClusterer.prototype['getTotalMarkers'] =
    MarkerClusterer.prototype.getTotalMarkers;
MarkerClusterer.prototype['redraw'] = MarkerClusterer.prototype.redraw;
MarkerClusterer.prototype['removeMarker'] =
    MarkerClusterer.prototype.removeMarker;
MarkerClusterer.prototype['removeMarkers'] =
    MarkerClusterer.prototype.removeMarkers;
MarkerClusterer.prototype['resetViewport'] =
    MarkerClusterer.prototype.resetViewport;
MarkerClusterer.prototype['repaint'] =
    MarkerClusterer.prototype.repaint;
MarkerClusterer.prototype['setCalculator'] =
    MarkerClusterer.prototype.setCalculator;
MarkerClusterer.prototype['setGridSize'] =
    MarkerClusterer.prototype.setGridSize;
MarkerClusterer.prototype['setMaxZoom'] =
    MarkerClusterer.prototype.setMaxZoom;
MarkerClusterer.prototype['onAdd'] = MarkerClusterer.prototype.onAdd;
MarkerClusterer.prototype['draw'] = MarkerClusterer.prototype.draw;

Cluster.prototype['getCenter'] = Cluster.prototype.getCenter;
Cluster.prototype['getSize'] = Cluster.prototype.getSize;
Cluster.prototype['getMarkers'] = Cluster.prototype.getMarkers;

ClusterIcon.prototype['onAdd'] = ClusterIcon.prototype.onAdd;
ClusterIcon.prototype['draw'] = ClusterIcon.prototype.draw;
ClusterIcon.prototype['onRemove'] = ClusterIcon.prototype.onRemove;


/***/ }),

/***/ "./node_modules/ng5-slider/esm5/ng5-slider.js":
/*!****************************************************!*\
  !*** ./node_modules/ng5-slider/esm5/ng5-slider.js ***!
  \****************************************************/
/*! exports provided: Ng5SliderModule, ChangeContext, PointerType, LabelType, Options, ɵo, ɵi, ɵl, ɵh, ɵd, ɵc, ɵg, ɵk, ɵf, ɵj, ɵb, ɵe, ɵn, ɵa, ɵm, ɵp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng5SliderModule", function() { return Ng5SliderModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeContext", function() { return ChangeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointerType", function() { return PointerType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelType", function() { return LabelType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Options", function() { return Options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return JqLiteWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return CeilLabDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return CmbLabDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return FlrLabDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return FullBarDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return LeftOutSelDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return MaxHDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return MaxLabDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return MinHDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return MinLabDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return RightOutSelDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return SelBarDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return SliderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return SliderElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return TicksDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return TooltipWrapperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var detect_passive_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! detect-passive-events */ "./node_modules/detect-passive-events/lib/index.js");
/* harmony import */ var detect_passive_events__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(detect_passive_events__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var PointerType = {
    Min: 0,
    Max: 1,
};
PointerType[PointerType.Min] = "Min";
PointerType[PointerType.Max] = "Max";
var LabelType = {
    Low: 0,
    High: 1,
    Floor: 2,
    Ceil: 3,
    TickValue: 4,
};
LabelType[LabelType.Low] = "Low";
LabelType[LabelType.High] = "High";
LabelType[LabelType.Floor] = "Floor";
LabelType[LabelType.Ceil] = "Ceil";
LabelType[LabelType.TickValue] = "TickValue";
var Options = /** @class */ (function () {
    function Options() {
        this.floor = 0;
        this.ceil = null;
        this.step = 1;
        this.minRange = null;
        this.maxRange = null;
        this.pushRange = false;
        this.minLimit = null;
        this.maxLimit = null;
        this.translate = null;
        this.combineLabels = null;
        this.getLegend = null;
        this.stepsArray = null;
        this.bindIndexForStepsArray = false;
        this.draggableRange = false;
        this.draggableRangeOnly = false;
        this.showSelectionBar = false;
        this.showSelectionBarEnd = false;
        this.showSelectionBarFromValue = null;
        this.showOuterSelectionBars = false;
        this.hidePointerLabels = false;
        this.hideLimitLabels = false;
        this.autoHideLimitLabels = true;
        this.readOnly = false;
        this.disabled = false;
        this.interval = 350;
        this.showTicks = false;
        this.showTicksValues = false;
        this.tickStep = null;
        this.tickValueStep = 1;
        this.ticksArray = null;
        this.ticksTooltip = null;
        this.ticksValuesTooltip = null;
        this.vertical = false;
        this.getSelectionBarColor = null;
        this.getTickColor = null;
        this.getPointerColor = null;
        this.keyboardSupport = true;
        this.scale = 1;
        this.enforceStep = true;
        this.noSwitching = false;
        this.onlyBindHandles = false;
        this.rightToLeft = false;
        this.reversedControls = false;
        this.boundPointerLabels = true;
        this.logScale = false;
        this.customValueToPosition = null;
        this.customPositionToValue = null;
        this.precisionLimit = 12;
        this.selectionBarGradient = null;
        this.ariaLabel = null;
        this.ariaLabelledBy = null;
        this.ariaLabelHigh = null;
        this.ariaLabelledByHigh = null;
        this.handleDimension = null;
        this.barDimension = null;
    }
    return Options;
}());
var ChangeContext = /** @class */ (function () {
    function ChangeContext() {
    }
    return ChangeContext;
}());
var ValueHelper = /** @class */ (function () {
    function ValueHelper() {
    }
    ValueHelper.linearValueToPosition = function (val, minVal, maxVal) {
        var range = maxVal - minVal;
        return (val - minVal) / range;
    };
    ValueHelper.logValueToPosition = function (val, minVal, maxVal) {
        val = Math.log(val);
        minVal = Math.log(minVal);
        maxVal = Math.log(maxVal);
        var range = maxVal - minVal;
        return (val - minVal) / range;
    };
    ValueHelper.linearPositionToValue = function (percent, minVal, maxVal) {
        return percent * (maxVal - minVal) + minVal;
    };
    ValueHelper.logPositionToValue = function (percent, minVal, maxVal) {
        minVal = Math.log(minVal);
        maxVal = Math.log(maxVal);
        var value = percent * (maxVal - minVal) + minVal;
        return Math.exp(value);
    };
    ValueHelper.findStepIndex = function (modelValue, stepsArray) {
        var differences = stepsArray.map(function (step) { return Math.abs(modelValue - step.value); });
        var minDifferenceIndex = 0;
        for (var index = 0; index < stepsArray.length; index++) {
            if (differences[index] !== differences[minDifferenceIndex] && differences[index] < differences[minDifferenceIndex]) {
                minDifferenceIndex = index;
            }
        }
        return minDifferenceIndex;
    };
    return ValueHelper;
}());
var JqLiteWrapper = /** @class */ (function () {
    function JqLiteWrapper(elemRef, renderer) {
        this.elemRef = elemRef;
        this.renderer = renderer;
        this.eventListeners = {};
    }
    JqLiteWrapper.prototype.addClass = function (clazz) {
        this.renderer.addClass(this.elemRef.nativeElement, clazz);
    };
    JqLiteWrapper.prototype.removeClass = function (clazz) {
        this.renderer.removeClass(this.elemRef.nativeElement, clazz);
    };
    JqLiteWrapper.prototype.hasClass = function (clazz) {
        return this.elemRef.nativeElement.classList.contains(clazz);
    };
    JqLiteWrapper.prototype.html = function (html) {
        this.elemRef.nativeElement.innerHTML = html;
    };
    JqLiteWrapper.prototype.css = function (style, value) {
        if (value !== '') {
            this.renderer.setStyle(this.elemRef.nativeElement, style, value);
        }
        else {
            this.renderer.removeStyle(this.elemRef.nativeElement, style);
        }
    };
    JqLiteWrapper.prototype.attr = function (attr, value) {
        if (value !== null) {
            this.renderer.setAttribute(this.elemRef.nativeElement, attr, value);
        }
        else {
            this.renderer.removeAttribute(this.elemRef.nativeElement, attr);
        }
    };
    JqLiteWrapper.prototype.getBoundingClientRect = function () {
        return this.elemRef.nativeElement.getBoundingClientRect();
    };
    JqLiteWrapper.prototype.focus = function () {
        this.elemRef.nativeElement.focus();
    };
    JqLiteWrapper.prototype.on = function (eventName, callback) {
        if (!this.eventListeners.hasOwnProperty(eventName)) {
            this.eventListeners[eventName] = [];
        }
        var unsubscribe = this.renderer.listen(this.elemRef.nativeElement, eventName, callback);
        this.eventListeners[eventName].push(unsubscribe);
    };
    JqLiteWrapper.prototype.onPassive = function (eventName, callback) {
        var _this = this;
        if (!detect_passive_events__WEBPACK_IMPORTED_MODULE_2___default.a.hasSupport) {
            this.on(eventName, callback);
            return;
        }
        if (!this.eventListeners.hasOwnProperty(eventName)) {
            this.eventListeners[eventName] = [];
        }
        this.elemRef.nativeElement.addEventListener(eventName, callback, { passive: true, capture: false });
        var unsubscribe = function () {
            _this.elemRef.nativeElement.removeEventListener(eventName, callback, { passive: true, capture: false });
        };
        this.eventListeners[eventName].push(unsubscribe);
    };
    JqLiteWrapper.prototype.off = function (eventName) {
        if (eventName) {
            if (this.eventListeners.hasOwnProperty(eventName)) {
                try {
                    for (var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.eventListeners[eventName]), _b = _a.next(); !_b.done; _b = _a.next()) {
                        var unsubscribe = _b.value;
                        unsubscribe();
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                delete this.eventListeners[eventName];
            }
        }
        else {
            try {
                for (var _d = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(Object.keys(this.eventListeners)), _e = _d.next(); !_e.done; _e = _d.next()) {
                    var eName = _e.value;
                    this.off(eName);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_e && !_e.done && (_f = _d.return)) _f.call(_d);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        var e_1, _c, e_2, _f;
    };
    return JqLiteWrapper;
}());
var ThrottledFunc = /** @class */ (function () {
    function ThrottledFunc(func, wait) {
        this.previous = 0;
        this.timeout = null;
        this.func = func;
        this.wait = wait;
    }
    ThrottledFunc.prototype.call = function () {
        var _this = this;
        var now = this.getTime();
        var remaining = this.wait - (now - this.previous);
        if (remaining <= 0) {
            clearTimeout(this.timeout);
            this.timeout = null;
            this.previous = now;
            this.func();
        }
        else if (this.timeout === null) {
            this.timeout = setTimeout(function () { return _this.callLater(); }, remaining);
        }
    };
    ThrottledFunc.prototype.getTime = function () {
        return Date.now();
    };
    ThrottledFunc.prototype.callLater = function () {
        this.previous = this.getTime();
        this.timeout = null;
        this.func();
    };
    return ThrottledFunc;
}());
var CompatibilityHelper = /** @class */ (function () {
    function CompatibilityHelper() {
    }
    CompatibilityHelper.isTouchEvent = function (event) {
        if (((window)).TouchEvent !== undefined) {
            return event instanceof TouchEvent;
        }
        return event.touches !== undefined;
    };
    return CompatibilityHelper;
}());
var MathHelper = /** @class */ (function () {
    function MathHelper() {
    }
    MathHelper.roundToPrecisionLimit = function (value, precisionLimit) {
        return +(value.toPrecision(precisionLimit));
    };
    MathHelper.clampToRange = function (value, floor, ceil) {
        return Math.min(Math.max(value, floor), ceil);
    };
    return MathHelper;
}());
var Tick = /** @class */ (function () {
    function Tick() {
    }
    return Tick;
}());
var Dragging = /** @class */ (function () {
    function Dragging() {
        this.active = false;
        this.value = 0;
        this.difference = 0;
        this.position = 0;
        this.lowLimit = 0;
        this.highLimit = 0;
    }
    return Dragging;
}());
var HandleType = {
    Low: 0,
    High: 1,
};
HandleType[HandleType.Low] = "Low";
HandleType[HandleType.High] = "High";
var HandleLabelType = {
    Min: 0,
    Max: 1,
};
HandleLabelType[HandleLabelType.Min] = "Min";
HandleLabelType[HandleLabelType.Max] = "Max";
var SliderElement = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SliderElement, _super);
    function SliderElement(elemRef, renderer) {
        var _this = _super.call(this, elemRef, renderer) || this;
        _this.position = 0;
        _this.alwaysHide = false;
        return _this;
    }
    return SliderElement;
}(JqLiteWrapper));
var RightOutSelDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(RightOutSelDirective, _super);
    function RightOutSelDirective(elemRef, renderer) {
        return _super.call(this, elemRef, renderer) || this;
    }
    return RightOutSelDirective;
}(SliderElement));
RightOutSelDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[ng5SliderRightOutSelElem]' },] },
];
RightOutSelDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], },
]; };
var LeftOutSelDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LeftOutSelDirective, _super);
    function LeftOutSelDirective(elemRef, renderer) {
        return _super.call(this, elemRef, renderer) || this;
    }
    return LeftOutSelDirective;
}(SliderElement));
LeftOutSelDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[ng5SliderLeftOutSelElem]' },] },
];
LeftOutSelDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], },
]; };
var FullBarDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FullBarDirective, _super);
    function FullBarDirective(elemRef, renderer) {
        return _super.call(this, elemRef, renderer) || this;
    }
    return FullBarDirective;
}(SliderElement));
FullBarDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[ng5SliderFullBarElem]' },] },
];
FullBarDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], },
]; };
var SelBarDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SelBarDirective, _super);
    function SelBarDirective(elemRef, renderer) {
        return _super.call(this, elemRef, renderer) || this;
    }
    return SelBarDirective;
}(SliderElement));
SelBarDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[ng5SliderSelBarElem]' },] },
];
SelBarDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], },
]; };
var MinHDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MinHDirective, _super);
    function MinHDirective(elemRef, renderer) {
        return _super.call(this, elemRef, renderer) || this;
    }
    return MinHDirective;
}(SliderElement));
MinHDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[ng5SliderMinHElem]' },] },
];
MinHDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], },
]; };
var MaxHDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MaxHDirective, _super);
    function MaxHDirective(elemRef, renderer) {
        return _super.call(this, elemRef, renderer) || this;
    }
    return MaxHDirective;
}(SliderElement));
MaxHDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[ng5SliderMaxHElem]' },] },
];
MaxHDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], },
]; };
var FlrLabDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FlrLabDirective, _super);
    function FlrLabDirective(elemRef, renderer) {
        return _super.call(this, elemRef, renderer) || this;
    }
    return FlrLabDirective;
}(SliderElement));
FlrLabDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[ng5SliderFlrLabElem]' },] },
];
FlrLabDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], },
]; };
var CeilLabDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CeilLabDirective, _super);
    function CeilLabDirective(elemRef, renderer) {
        return _super.call(this, elemRef, renderer) || this;
    }
    return CeilLabDirective;
}(SliderElement));
CeilLabDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[ng5SliderCeilLabElem]' },] },
];
CeilLabDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], },
]; };
var MinLabDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MinLabDirective, _super);
    function MinLabDirective(elemRef, renderer) {
        return _super.call(this, elemRef, renderer) || this;
    }
    return MinLabDirective;
}(SliderElement));
MinLabDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[ng5SliderMinLabElem]' },] },
];
MinLabDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], },
]; };
var MaxLabDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MaxLabDirective, _super);
    function MaxLabDirective(elemRef, renderer) {
        return _super.call(this, elemRef, renderer) || this;
    }
    return MaxLabDirective;
}(SliderElement));
MaxLabDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[ng5SliderMaxLabElem]' },] },
];
MaxLabDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], },
]; };
var CmbLabDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CmbLabDirective, _super);
    function CmbLabDirective(elemRef, renderer) {
        return _super.call(this, elemRef, renderer) || this;
    }
    return CmbLabDirective;
}(SliderElement));
CmbLabDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[ng5SliderCmbLabElem]' },] },
];
CmbLabDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], },
]; };
var TicksDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TicksDirective, _super);
    function TicksDirective(elemRef, renderer) {
        return _super.call(this, elemRef, renderer) || this;
    }
    return TicksDirective;
}(SliderElement));
TicksDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[ng5SliderTicksElem]' },] },
];
TicksDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], },
]; };
var NG5_SLIDER_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return SliderComponent; }),
    multi: true,
};
var SliderComponent = /** @class */ (function () {
    function SliderComponent(renderer, elementRef, changeDetectionRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.changeDetectionRef = changeDetectionRef;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.highValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.userChangeStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.userChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.userChangeEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._options = new Options();
        this.viewOptions = new Options();
        this.barStyle = {};
        this.minPointerStyle = {};
        this.maxPointerStyle = {};
        this.showTicks = false;
        this.ticks = [];
        this.sliderElementVerticalClass = false;
        this.sliderElementDisabledAttr = null;
        this.dragging = new Dragging();
        this.handleHalfDim = 0;
        this.maxPos = 0;
        this.precisionLimit = 12;
        this.step = 1;
        this.tracking = null;
        this.minValue = 0;
        this.maxValue = 0;
        this.valueRange = 0;
        this.intermediateTicks = false;
        this.initHasRun = false;
        this.firstKeyDown = false;
        this.cmbLabelShown = false;
        this.currentFocusElement = null;
        this.onMoveUnsubscribe = null;
        this.onEndUnsubscribe = null;
        this.onTouchedCallback = null;
        this.onChangeCallback = null;
        this.internalValueChanges = [];
        this.internalHighValueChanges = [];
    }
    Object.defineProperty(SliderComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (newValue) {
            this._value = +newValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderComponent.prototype, "highValue", {
        get: function () {
            return this._highValue;
        },
        set: function (newHighValue) {
            this._highValue = +newHighValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderComponent.prototype, "options", {
        get: function () {
            return this._options;
        },
        set: function (newOptions) {
            this._options = newOptions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderComponent.prototype, "manualRefresh", {
        set: function (manualRefresh) {
            var _this = this;
            this.unsubscribeManualRefresh();
            this.manualRefreshSubscription = manualRefresh.subscribe(function () {
                setTimeout(function () { return _this.calcViewDimensions(); });
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderComponent.prototype, "triggerFocus", {
        set: function (triggerFocus) {
            var _this = this;
            this.unsubscribeTriggerFocus();
            this.triggerFocusSubscription = triggerFocus.subscribe(function (pointerType) {
                _this.focusPointer(pointerType);
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderComponent.prototype, "range", {
        get: function () {
            return this.value !== undefined && this.highValue !== undefined;
        },
        enumerable: true,
        configurable: true
    });
    SliderComponent.prototype.ngOnInit = function () {
        this.viewOptions = new Options();
        Object.assign(this.viewOptions, this.options);
        this.setDisabledStateAttr();
        this.setVerticalClass();
    };
    SliderComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.thrOnLowHandleChange = new ThrottledFunc(function () { _this.onLowHandleChange(); }, this.viewOptions.interval);
        this.thrOnHighHandleChange = new ThrottledFunc(function () { _this.onHighHandleChange(); }, this.viewOptions.interval);
        this.applyOptions();
        this.syncLowValue();
        if (this.range) {
            this.syncHighValue();
        }
        this.manageElementsStyle();
        this.setDisabledStateAttr();
        this.calcViewDimensions();
        this.setMinAndMax();
        this.addAccessibility();
        this.updateCeilLab();
        this.updateFloorLab();
        this.initHandles();
        this.manageEventsBindings();
        this.initHasRun = true;
        if (this.value !== this.viewLowValue || (this.range && this.highValue !== this.viewHighValue)) {
            setTimeout(function () { return _this.publishModelChange(false); });
        }
        this.changeDetectionRef.detectChanges();
    };
    SliderComponent.prototype.ngOnChanges = function (changes) {
        if (changes["options"]) {
            this.onChangeOptions(changes["options"].previousValue, changes["options"].currentValue);
        }
        if (changes["value"]) {
            var internalValueChange = this.internalValueChanges.shift();
            if (internalValueChange !== undefined && changes["value"].currentValue !== internalValueChange) {
                this.onChangeValue(changes["value"].previousValue, changes["value"].currentValue);
            }
        }
        if (changes["highValue"]) {
            var internalHighValueChange = this.internalHighValueChanges.shift();
            if (internalHighValueChange !== undefined && changes["highValue"].currentValue !== internalHighValueChange) {
                this.onChangeHighValue(changes["highValue"].previousValue, changes["highValue"].currentValue);
            }
        }
    };
    SliderComponent.prototype.onChangeOptions = function (oldValue, newValue) {
        if (!this.initHasRun || newValue === oldValue) {
            return;
        }
        this.applyOptions();
        this.syncLowValue();
        if (this.range) {
            this.syncHighValue();
        }
        this.resetSlider();
    };
    SliderComponent.prototype.onChangeValue = function (oldValue, newValue) {
        if (!this.initHasRun || newValue === oldValue) {
            return;
        }
        this.thrOnLowHandleChange.call();
    };
    SliderComponent.prototype.onChangeHighValue = function (oldValue, newValue) {
        if (!this.initHasRun || newValue === oldValue) {
            return;
        }
        if (newValue != null) {
            this.thrOnHighHandleChange.call();
        }
        if ((this.range && newValue == null) ||
            (!this.range && newValue != null)) {
            this.applyOptions();
            this.resetSlider();
        }
    };
    SliderComponent.prototype.onResize = function (event) {
        this.calcViewDimensions();
    };
    SliderComponent.prototype.ngOnDestroy = function () {
        this.unsubscribeManualRefresh();
        this.unsubscribeTriggerFocus();
        this.unbindEvents();
        this.currentFocusElement = null;
    };
    SliderComponent.prototype.writeValue = function (obj) {
        if (obj instanceof Array) {
            var oldValue = this.value;
            var oldHighValue = this.highValue;
            this.value = obj[0];
            this.highValue = obj[1];
            this.onChangeValue(oldValue, this.value);
            this.onChangeHighValue(oldHighValue, this.highValue);
        }
        else {
            var oldValue = this.value;
            this.value = obj;
            this.onChangeValue(oldValue, this.value);
        }
    };
    SliderComponent.prototype.registerOnChange = function (onChangeCallback) {
        this.onChangeCallback = onChangeCallback;
    };
    SliderComponent.prototype.registerOnTouched = function (onTouchedCallback) {
        this.onTouchedCallback = onTouchedCallback;
    };
    SliderComponent.prototype.setDisabledState = function (isDisabled) {
        if (this.viewOptions) {
            this.viewOptions.disabled = isDisabled;
            this.setDisabledStateAttr();
        }
    };
    SliderComponent.prototype.unsubscribeManualRefresh = function () {
        if (this.manualRefreshSubscription) {
            this.manualRefreshSubscription.unsubscribe();
            this.manualRefreshSubscription = null;
        }
    };
    SliderComponent.prototype.unsubscribeTriggerFocus = function () {
        if (this.triggerFocusSubscription) {
            this.triggerFocusSubscription.unsubscribe();
            this.triggerFocusSubscription = null;
        }
    };
    SliderComponent.prototype.getCurrentTrackingValue = function () {
        if (this.tracking === null) {
            return null;
        }
        return this.tracking === HandleType.Low ? this.viewLowValue : this.viewHighValue;
    };
    SliderComponent.prototype.syncLowValue = function () {
        if (this.viewOptions.stepsArray) {
            if (!this.viewOptions.bindIndexForStepsArray) {
                this.viewLowValue = ValueHelper.findStepIndex(this.value, this.viewOptions.stepsArray);
            }
            else {
                this.viewLowValue = this.value;
            }
        }
        else {
            this.viewLowValue = this.value;
        }
    };
    SliderComponent.prototype.syncHighValue = function () {
        if (this.viewOptions.stepsArray) {
            if (!this.viewOptions.bindIndexForStepsArray) {
                this.viewHighValue = ValueHelper.findStepIndex(this.highValue, this.viewOptions.stepsArray);
            }
            else {
                this.viewHighValue = this.highValue;
            }
        }
        else {
            this.viewHighValue = this.highValue;
        }
    };
    SliderComponent.prototype.getStepValue = function (sliderValue) {
        var step = this.viewOptions.stepsArray[sliderValue];
        return step ? step.value : NaN;
    };
    SliderComponent.prototype.applyLowValue = function () {
        var newValue;
        if (this.viewOptions.stepsArray) {
            if (!this.viewOptions.bindIndexForStepsArray) {
                newValue = this.getStepValue(this.viewLowValue);
            }
            else {
                newValue = this.viewLowValue;
            }
        }
        else {
            newValue = this.viewLowValue;
        }
        this.internalValueChanges.push(newValue);
        this.value = newValue;
    };
    SliderComponent.prototype.applyHighValue = function () {
        var newHighValue;
        if (this.viewOptions.stepsArray) {
            if (!this.viewOptions.bindIndexForStepsArray) {
                newHighValue = this.getStepValue(this.viewHighValue);
            }
            else {
                newHighValue = this.viewHighValue;
            }
        }
        else {
            newHighValue = this.viewHighValue;
        }
        this.internalHighValueChanges.push(newHighValue);
        this.highValue = newHighValue;
    };
    SliderComponent.prototype.onLowHandleChange = function () {
        this.normaliseLowValue();
        if (this.range) {
            this.normaliseRange(PointerType.Min);
        }
        this.syncLowValue();
        if (this.range) {
            this.syncHighValue();
        }
        this.setMinAndMax();
        this.updateLowHandle(this.valueToPosition(this.viewLowValue));
        this.updateSelectionBar();
        this.updateTicksScale();
        this.updateAriaAttributes();
        if (this.range) {
            this.updateCmbLabel();
        }
    };
    SliderComponent.prototype.onHighHandleChange = function () {
        this.normaliseHighValue();
        this.normaliseRange(PointerType.Max);
        this.syncLowValue();
        this.syncHighValue();
        this.setMinAndMax();
        this.updateHighHandle(this.valueToPosition(this.viewHighValue));
        this.updateSelectionBar();
        this.updateTicksScale();
        this.updateCmbLabel();
        this.updateAriaAttributes();
    };
    SliderComponent.prototype.normaliseLowValue = function () {
        var _this = this;
        if (this.viewOptions.stepsArray) {
            return;
        }
        var normalisedValue = MathHelper.clampToRange(this.value, this.viewOptions.floor, this.viewOptions.ceil);
        if (this.value !== normalisedValue) {
            this.value = normalisedValue;
            setTimeout(function () { return _this.publishModelChange(false); });
        }
    };
    SliderComponent.prototype.normaliseHighValue = function () {
        var _this = this;
        if (this.viewOptions.stepsArray) {
            return;
        }
        var normalisedHighValue = MathHelper.clampToRange(this.highValue, this.viewOptions.floor, this.viewOptions.ceil);
        if (this.highValue !== normalisedHighValue) {
            this.highValue = normalisedHighValue;
            setTimeout(function () { return _this.publishModelChange(false); });
        }
    };
    SliderComponent.prototype.normaliseRange = function (changedPointer) {
        var _this = this;
        if (this.viewOptions.stepsArray) {
            return;
        }
        if (this.range && this.value > this.highValue) {
            if (this.viewOptions.noSwitching) {
                if (changedPointer === PointerType.Max) {
                    this.highValue = this.value;
                }
                else if (changedPointer === PointerType.Min) {
                    this.value = this.highValue;
                }
                setTimeout(function () { return _this.publishModelChange(false); });
            }
            else {
                var tempValue = this.value;
                this.value = this.highValue;
                this.highValue = tempValue;
                if (changedPointer === PointerType.Max) {
                    setTimeout(function () { return _this.thrOnLowHandleChange.call(); });
                }
                else if (changedPointer === PointerType.Min) {
                    setTimeout(function () { return _this.thrOnHighHandleChange.call(); });
                }
                setTimeout(function () { return _this.publishModelChange(false); });
            }
        }
    };
    SliderComponent.prototype.applyOptions = function () {
        this.viewOptions = new Options();
        Object.assign(this.viewOptions, this.options);
        if (this.viewOptions.precisionLimit) {
            this.precisionLimit = this.viewOptions.precisionLimit;
        }
        if (this.viewOptions.step <= 0) {
            this.viewOptions.step = 1;
        }
        this.viewOptions.draggableRange = this.range && this.viewOptions.draggableRange;
        this.viewOptions.draggableRangeOnly = this.range && this.viewOptions.draggableRangeOnly;
        if (this.viewOptions.draggableRangeOnly) {
            this.viewOptions.draggableRange = true;
        }
        this.viewOptions.showTicks = this.viewOptions.showTicks ||
            this.viewOptions.showTicksValues ||
            !!this.viewOptions.ticksArray;
        if (this.viewOptions.showTicks && (this.viewOptions.tickStep !== null || this.viewOptions.ticksArray)) {
            this.intermediateTicks = true;
        }
        this.showTicks = this.viewOptions.showTicks;
        this.viewOptions.showSelectionBar = this.viewOptions.showSelectionBar ||
            this.viewOptions.showSelectionBarEnd ||
            this.viewOptions.showSelectionBarFromValue !== null;
        if (this.viewOptions.stepsArray) {
            this.parseStepsArray();
        }
        else {
            if (this.viewOptions.translate) {
                this.translate = this.viewOptions.translate;
            }
            else {
                this.translate = function (value) { return String(value); };
            }
            this.getLegend = this.viewOptions.getLegend;
        }
        if (this.viewOptions.combineLabels) {
            this.combineLabels = this.viewOptions.combineLabels;
        }
        else {
            this.combineLabels = function (minValue, maxValue) {
                return minValue + ' - ' + maxValue;
            };
        }
    };
    SliderComponent.prototype.parseStepsArray = function () {
        var _this = this;
        this.viewOptions.floor = 0;
        this.viewOptions.ceil = this.viewOptions.stepsArray.length - 1;
        this.viewOptions.step = 1;
        if (this.viewOptions.translate) {
            this.translate = this.viewOptions.translate;
        }
        else {
            this.translate = function (modelValue) {
                if (_this.viewOptions.bindIndexForStepsArray) {
                    return String(_this.getStepValue(modelValue));
                }
                return String(modelValue);
            };
        }
        this.getLegend = function (index) {
            var step = _this.viewOptions.stepsArray[index];
            return step.legend;
        };
    };
    SliderComponent.prototype.resetSlider = function () {
        this.manageElementsStyle();
        this.addAccessibility();
        this.setMinAndMax();
        this.updateCeilLab();
        this.updateFloorLab();
        this.unbindEvents();
        this.manageEventsBindings();
        this.setDisabledStateAttr();
        this.calcViewDimensions();
        this.refocusPointerIfNeeded();
    };
    SliderComponent.prototype.focusPointer = function (pointerType) {
        if (pointerType !== PointerType.Min && pointerType !== PointerType.Max) {
            pointerType = PointerType.Min;
        }
        if (pointerType === PointerType.Min) {
            this.focusElement(this.minHElem);
        }
        else if (this.range && pointerType === PointerType.Max) {
            this.focusElement(this.maxHElem);
        }
    };
    SliderComponent.prototype.refocusPointerIfNeeded = function () {
        if (this.currentFocusElement) {
            this.onPointerFocus(this.currentFocusElement.pointer, this.currentFocusElement.ref);
            this.focusElement(this.currentFocusElement.pointer);
        }
    };
    SliderComponent.prototype.manageElementsStyle = function () {
        var _this = this;
        if (!this.range) {
            this.maxHElem.css('display', 'none');
        }
        else {
            this.maxHElem.css('display', '');
        }
        this.alwaysHide(this.flrLabElem, this.viewOptions.showTicksValues || this.viewOptions.hideLimitLabels);
        this.alwaysHide(this.ceilLabElem, this.viewOptions.showTicksValues || this.viewOptions.hideLimitLabels);
        var hideLabelsForTicks = this.viewOptions.showTicksValues && !this.intermediateTicks;
        this.alwaysHide(this.minLabElem, hideLabelsForTicks || this.viewOptions.hidePointerLabels);
        this.alwaysHide(this.maxLabElem, hideLabelsForTicks || !this.range || this.viewOptions.hidePointerLabels);
        this.alwaysHide(this.cmbLabElem, hideLabelsForTicks || !this.range || this.viewOptions.hidePointerLabels);
        this.alwaysHide(this.selBarElem, !this.range && !this.viewOptions.showSelectionBar);
        this.alwaysHide(this.leftOutSelBar, !this.range || !this.viewOptions.showOuterSelectionBars);
        this.alwaysHide(this.rightOutSelBar, !this.range || !this.viewOptions.showOuterSelectionBars);
        if (this.range && this.viewOptions.showOuterSelectionBars) {
            this.fullBarElem.addClass('ng5-slider-transparent');
        }
        if (this.sliderElementVerticalClass !== this.viewOptions.vertical) {
            this.setVerticalClass();
            setTimeout(function () { _this.resetSlider(); });
        }
        if (this.viewOptions.draggableRange) {
            this.selBarElem.addClass('ng5-slider-draggable');
        }
        else {
            this.selBarElem.removeClass('ng5-slider-draggable');
        }
        if (this.intermediateTicks && this.options.showTicksValues) {
            this.ticksElem.addClass('ng5-slider-ticks-values-under');
        }
    };
    SliderComponent.prototype.alwaysHide = function (el, hide) {
        el.alwaysHide = hide;
        if (hide) {
            this.hideEl(el);
        }
        else {
            this.showEl(el);
        }
    };
    SliderComponent.prototype.manageEventsBindings = function () {
        if (this.viewOptions.disabled || this.viewOptions.readOnly) {
            this.unbindEvents();
        }
        else {
            this.bindEvents();
        }
    };
    SliderComponent.prototype.setDisabledStateAttr = function () {
        this.sliderElementDisabledAttr = this.viewOptions.disabled ? 'disabled' : null;
    };
    SliderComponent.prototype.setVerticalClass = function () {
        this.sliderElementVerticalClass = this.viewOptions.vertical;
    };
    SliderComponent.prototype.resetLabelsValue = function () {
        this.minLabElem.value = undefined;
        this.maxLabElem.value = undefined;
    };
    SliderComponent.prototype.initHandles = function () {
        this.updateLowHandle(this.valueToPosition(this.viewLowValue));
        if (this.range) {
            this.updateHighHandle(this.valueToPosition(this.viewHighValue));
        }
        this.updateSelectionBar();
        if (this.range) {
            this.updateCmbLabel();
        }
        this.updateTicksScale();
    };
    SliderComponent.prototype.setLabelValue = function (value, label) {
        var recalculateDimension = false;
        var noLabelInjection = label.hasClass('no-label-injection');
        if (!label.alwaysHide &&
            (label.value === undefined ||
                label.value.length !== value.length ||
                (label.value.length > 0 && label.dimension === 0))) {
            recalculateDimension = true;
            label.value = value;
        }
        if (!noLabelInjection) {
            label.html(value);
        }
        if (recalculateDimension) {
            this.calculateElementDimension(label);
        }
    };
    SliderComponent.prototype.setMinAndMax = function () {
        this.step = +this.viewOptions.step;
        this.minValue = this.viewOptions.floor;
        if (this.viewOptions.logScale && this.minValue === 0) {
            throw Error('Can\'t use floor=0 with logarithmic scale');
        }
        if (this.viewOptions.enforceStep) {
            this.viewLowValue = this.roundStep(this.viewLowValue);
            if (this.range) {
                this.viewHighValue = this.roundStep(this.viewHighValue);
            }
        }
        if (this.viewOptions.ceil != null) {
            this.maxValue = this.viewOptions.ceil;
        }
        else {
            this.maxValue = this.viewOptions.ceil = this.range ? this.viewHighValue : this.viewLowValue;
        }
        this.applyLowValue();
        if (this.range) {
            this.applyHighValue();
        }
        this.valueRange = this.maxValue - this.minValue;
    };
    SliderComponent.prototype.addAccessibility = function () {
        this.updateAriaAttributes();
        this.minHElem.attr('role', 'slider');
        if (this.viewOptions.keyboardSupport &&
            !(this.viewOptions.readOnly || this.viewOptions.disabled)) {
            this.minHElem.attr('tabindex', '0');
        }
        else {
            this.minHElem.attr('tabindex', '');
        }
        if (this.viewOptions.vertical) {
            this.minHElem.attr('aria-orientation', 'vertical');
        }
        if (this.viewOptions.ariaLabel) {
            this.minHElem.attr('aria-label', this.viewOptions.ariaLabel);
        }
        else if (this.viewOptions.ariaLabelledBy) {
            this.minHElem.attr('aria-labelledby', this.viewOptions.ariaLabelledBy);
        }
        if (this.range) {
            this.maxHElem.attr('role', 'slider');
            if (this.viewOptions.keyboardSupport &&
                !(this.viewOptions.readOnly || this.viewOptions.disabled)) {
                this.maxHElem.attr('tabindex', '0');
            }
            else {
                this.maxHElem.attr('tabindex', '');
            }
            if (this.viewOptions.vertical) {
                this.maxHElem.attr('aria-orientation', 'vertical');
            }
            if (this.viewOptions.ariaLabelHigh) {
                this.maxHElem.attr('aria-label', this.viewOptions.ariaLabelHigh);
            }
            else if (this.viewOptions.ariaLabelledByHigh) {
                this.maxHElem.attr('aria-labelledby', this.viewOptions.ariaLabelledByHigh);
            }
        }
    };
    SliderComponent.prototype.updateAriaAttributes = function () {
        this.minHElem.attr('aria-valuenow', this.value.toString());
        this.minHElem.attr('aria-valuetext', this.translate(this.value, LabelType.Low));
        this.minHElem.attr('aria-valuemin', this.minValue.toString());
        this.minHElem.attr('aria-valuemax', this.maxValue.toString());
        if (this.range) {
            this.maxHElem.attr('aria-valuenow', this.highValue.toString());
            this.maxHElem.attr('aria-valuetext', this.translate(this.highValue, LabelType.High));
            this.maxHElem.attr('aria-valuemin', this.minValue.toString());
            this.maxHElem.attr('aria-valuemax', this.maxValue.toString());
        }
    };
    SliderComponent.prototype.calcViewDimensions = function () {
        if (this.viewOptions.handleDimension) {
            this.minHElem.dimension = this.viewOptions.handleDimension;
        }
        else {
            this.calculateElementDimension(this.minHElem);
        }
        var handleWidth = this.minHElem.dimension;
        this.handleHalfDim = handleWidth / 2;
        if (this.viewOptions.barDimension) {
            this.fullBarElem.dimension = this.viewOptions.barDimension;
        }
        else {
            this.calculateElementDimension(this.fullBarElem);
        }
        this.barDimension = this.fullBarElem.dimension;
        this.maxPos = this.barDimension - handleWidth;
        if (this.initHasRun) {
            this.updateFloorLab();
            this.updateCeilLab();
            this.initHandles();
        }
    };
    SliderComponent.prototype.updateTicksScale = function () {
        var _this = this;
        if (!this.viewOptions.showTicks) {
            return;
        }
        var ticksArray = this.viewOptions.ticksArray || this.getTicksArray();
        var translate = this.viewOptions.vertical ? 'translateY' : 'translateX';
        if (this.viewOptions.rightToLeft) {
            ticksArray.reverse();
        }
        this.ticks = ticksArray.map(function (value) {
            var position = _this.valueToPosition(value);
            if (_this.viewOptions.vertical) {
                position = _this.maxPos - position;
            }
            var translation = translate + '(' + Math.round(position) + 'px)';
            var tick = new Tick();
            tick.selected = _this.isTickSelected(value);
            tick.style = {
                '-webkit-transform': translation,
                '-moz-transform': translation,
                '-o-transform': translation,
                '-ms-transform': translation,
                transform: translation,
            };
            if (tick.selected && _this.viewOptions.getSelectionBarColor) {
                tick.style['background-color'] = _this.getSelectionBarColor();
            }
            if (!tick.selected && _this.viewOptions.getTickColor) {
                tick.style['background-color'] = _this.getTickColor(value);
            }
            if (_this.viewOptions.ticksTooltip) {
                tick.tooltip = _this.viewOptions.ticksTooltip(value);
                tick.tooltipPlacement = _this.viewOptions.vertical ? 'right' : 'top';
            }
            if (_this.viewOptions.showTicksValues && (value % _this.viewOptions.tickValueStep === 0)) {
                tick.value = _this.getDisplayValue(value, LabelType.TickValue);
                if (_this.viewOptions.ticksValuesTooltip) {
                    tick.valueTooltip = _this.viewOptions.ticksValuesTooltip(value);
                    tick.valueTooltipPlacement = _this.viewOptions.vertical
                        ? 'right'
                        : 'top';
                }
            }
            if (_this.getLegend) {
                var legend = _this.getLegend(value);
                if (legend) {
                    tick.legend = legend;
                }
            }
            return tick;
        });
    };
    SliderComponent.prototype.getTicksArray = function () {
        var step = (this.viewOptions.tickStep !== null) ? this.viewOptions.tickStep : this.step;
        var ticksArray = [];
        for (var value = this.minValue; value <= this.maxValue; value += step) {
            ticksArray.push(value);
        }
        return ticksArray;
    };
    SliderComponent.prototype.isTickSelected = function (value) {
        if (!this.range) {
            if (this.viewOptions.showSelectionBarFromValue !== null) {
                var center = this.viewOptions.showSelectionBarFromValue;
                if (this.viewLowValue > center &&
                    value >= center &&
                    value <= this.viewLowValue) {
                    return true;
                }
                else if (this.viewLowValue < center &&
                    value <= center &&
                    value >= this.viewLowValue) {
                    return true;
                }
            }
            else if (this.viewOptions.showSelectionBarEnd) {
                if (value >= this.viewLowValue) {
                    return true;
                }
            }
            else if (this.viewOptions.showSelectionBar && value <= this.viewLowValue) {
                return true;
            }
        }
        if (this.range && value >= this.viewLowValue && value <= this.viewHighValue) {
            return true;
        }
        return false;
    };
    SliderComponent.prototype.updateFloorLab = function () {
        if (!this.flrLabElem.alwaysHide) {
            this.setLabelValue(this.getDisplayValue(this.minValue, LabelType.Floor), this.flrLabElem);
            this.calculateElementDimension(this.flrLabElem);
            var position = this.viewOptions.rightToLeft
                ? this.barDimension - this.flrLabElem.dimension
                : 0;
            this.setPosition(this.flrLabElem, position);
        }
    };
    SliderComponent.prototype.updateCeilLab = function () {
        if (!this.ceilLabElem.alwaysHide) {
            this.setLabelValue(this.getDisplayValue(this.maxValue, LabelType.Ceil), this.ceilLabElem);
            this.calculateElementDimension(this.ceilLabElem);
            var position = this.viewOptions.rightToLeft
                ? 0
                : this.barDimension - this.ceilLabElem.dimension;
            this.setPosition(this.ceilLabElem, position);
        }
    };
    SliderComponent.prototype.updateHandles = function (which, newPos) {
        if (which === HandleType.Low) {
            this.updateLowHandle(newPos);
        }
        else {
            this.updateHighHandle(newPos);
        }
        this.updateSelectionBar();
        this.updateTicksScale();
        if (this.range) {
            this.updateCmbLabel();
        }
    };
    SliderComponent.prototype.getHandleLabelPos = function (labelType, newPos) {
        var labelDimension = labelType === HandleLabelType.Min ? this.minLabElem.dimension : this.maxLabElem.dimension;
        var nearHandlePos = newPos - labelDimension / 2 + this.handleHalfDim;
        var endOfBarPos = this.barDimension - labelDimension;
        if (!this.viewOptions.boundPointerLabels) {
            return nearHandlePos;
        }
        if ((this.viewOptions.rightToLeft && labelType === HandleLabelType.Min) ||
            (!this.viewOptions.rightToLeft && labelType === HandleLabelType.Max)) {
            return Math.min(nearHandlePos, endOfBarPos);
        }
        else {
            return Math.min(Math.max(nearHandlePos, 0), endOfBarPos);
        }
    };
    SliderComponent.prototype.updateLowHandle = function (newPos) {
        this.setPosition(this.minHElem, newPos);
        this.setLabelValue(this.getDisplayValue(this.viewLowValue, LabelType.Low), this.minLabElem);
        this.setPosition(this.minLabElem, this.getHandleLabelPos(HandleLabelType.Min, newPos));
        if (this.viewOptions.getPointerColor) {
            var pointercolor = this.getPointerColor(PointerType.Min);
            this.minPointerStyle = {
                backgroundColor: pointercolor,
            };
        }
        if (this.viewOptions.autoHideLimitLabels) {
            this.shFloorCeil();
        }
    };
    SliderComponent.prototype.updateHighHandle = function (newPos) {
        this.setPosition(this.maxHElem, newPos);
        this.setLabelValue(this.getDisplayValue(this.viewHighValue, LabelType.High), this.maxLabElem);
        this.setPosition(this.maxLabElem, this.getHandleLabelPos(HandleLabelType.Max, newPos));
        if (this.viewOptions.getPointerColor) {
            var pointercolor = this.getPointerColor(PointerType.Max);
            this.maxPointerStyle = {
                backgroundColor: pointercolor,
            };
        }
        if (this.viewOptions.autoHideLimitLabels) {
            this.shFloorCeil();
        }
    };
    SliderComponent.prototype.shFloorCeil = function () {
        if (this.viewOptions.hidePointerLabels) {
            return;
        }
        var flHidden = false;
        var clHidden = false;
        var isMinLabAtFloor = this.isLabelBelowFloorLab(this.minLabElem);
        var isMinLabAtCeil = this.isLabelAboveCeilLab(this.minLabElem);
        var isMaxLabAtCeil = this.isLabelAboveCeilLab(this.maxLabElem);
        var isCmbLabAtFloor = this.isLabelBelowFloorLab(this.cmbLabElem);
        var isCmbLabAtCeil = this.isLabelAboveCeilLab(this.cmbLabElem);
        if (isMinLabAtFloor) {
            flHidden = true;
            this.hideEl(this.flrLabElem);
        }
        else {
            flHidden = false;
            this.showEl(this.flrLabElem);
        }
        if (isMinLabAtCeil) {
            clHidden = true;
            this.hideEl(this.ceilLabElem);
        }
        else {
            clHidden = false;
            this.showEl(this.ceilLabElem);
        }
        if (this.range) {
            var hideCeil = this.cmbLabelShown ? isCmbLabAtCeil : isMaxLabAtCeil;
            var hideFloor = this.cmbLabelShown
                ? isCmbLabAtFloor
                : isMinLabAtFloor;
            if (hideCeil) {
                this.hideEl(this.ceilLabElem);
            }
            else if (!clHidden) {
                this.showEl(this.ceilLabElem);
            }
            if (hideFloor) {
                this.hideEl(this.flrLabElem);
            }
            else if (!flHidden) {
                this.showEl(this.flrLabElem);
            }
        }
    };
    SliderComponent.prototype.isLabelBelowFloorLab = function (label) {
        var isRTL = this.viewOptions.rightToLeft;
        var pos = label.position;
        var dim = label.dimension;
        var floorPos = this.flrLabElem.position;
        var floorDim = this.flrLabElem.dimension;
        return isRTL
            ? pos + dim >= floorPos - 2
            : pos <= floorPos + floorDim + 2;
    };
    SliderComponent.prototype.isLabelAboveCeilLab = function (label) {
        var isRTL = this.viewOptions.rightToLeft;
        var pos = label.position;
        var dim = label.dimension;
        var ceilPos = this.ceilLabElem.position;
        var ceilDim = this.ceilLabElem.dimension;
        return isRTL ? pos <= ceilPos + ceilDim + 2 : pos + dim >= ceilPos - 2;
    };
    SliderComponent.prototype.updateSelectionBar = function () {
        var position = 0;
        var dimension = 0;
        var isSelectionBarFromRight = this.viewOptions.rightToLeft
            ? !this.viewOptions.showSelectionBarEnd
            : this.viewOptions.showSelectionBarEnd;
        var positionForRange = this.viewOptions.rightToLeft
            ? this.maxHElem.position + this.handleHalfDim
            : this.minHElem.position + this.handleHalfDim;
        if (this.range) {
            dimension = Math.abs(this.maxHElem.position - this.minHElem.position);
            position = positionForRange;
        }
        else {
            if (this.viewOptions.showSelectionBarFromValue !== null) {
                var center = this.viewOptions.showSelectionBarFromValue;
                var centerPosition = this.valueToPosition(center);
                var isModelGreaterThanCenter = this.viewOptions.rightToLeft
                    ? this.viewLowValue <= center
                    : this.viewLowValue > center;
                if (isModelGreaterThanCenter) {
                    dimension = this.minHElem.position - centerPosition;
                    position = centerPosition + this.handleHalfDim;
                }
                else {
                    dimension = centerPosition - this.minHElem.position;
                    position = this.minHElem.position + this.handleHalfDim;
                }
            }
            else if (isSelectionBarFromRight) {
                dimension = Math.ceil(Math.abs(this.maxPos - this.minHElem.position) + this.handleHalfDim);
                position = Math.floor(this.minHElem.position + this.handleHalfDim);
            }
            else {
                dimension = this.minHElem.position + this.handleHalfDim;
                position = 0;
            }
        }
        this.setDimension(this.selBarElem, dimension);
        this.setPosition(this.selBarElem, position);
        if (this.range && this.viewOptions.showOuterSelectionBars) {
            if (this.viewOptions.rightToLeft) {
                this.setDimension(this.rightOutSelBar, position);
                this.setPosition(this.rightOutSelBar, 0);
                this.calculateElementDimension(this.fullBarElem);
                this.setDimension(this.leftOutSelBar, this.fullBarElem.dimension - (position + dimension));
                this.setPosition(this.leftOutSelBar, position + dimension);
            }
            else {
                this.setDimension(this.leftOutSelBar, position);
                this.setPosition(this.leftOutSelBar, 0);
                this.calculateElementDimension(this.fullBarElem);
                this.setDimension(this.rightOutSelBar, this.fullBarElem.dimension - (position + dimension));
                this.setPosition(this.rightOutSelBar, position + dimension);
            }
        }
        if (this.viewOptions.getSelectionBarColor) {
            var color = this.getSelectionBarColor();
            this.barStyle = {
                backgroundColor: color,
            };
        }
        else if (this.viewOptions.selectionBarGradient) {
            var offset = this.viewOptions.showSelectionBarFromValue !== null
                ? this.valueToPosition(this.viewOptions.showSelectionBarFromValue)
                : 0;
            var reversed = (offset - position > 0 && !isSelectionBarFromRight) || (offset - position <= 0 && isSelectionBarFromRight);
            var direction = this.viewOptions.vertical
                ? reversed ? 'bottom' : 'top'
                : reversed ? 'left' : 'right';
            this.barStyle = {
                backgroundImage: 'linear-gradient(to ' +
                    direction +
                    ', ' +
                    this.viewOptions.selectionBarGradient.from +
                    ' 0%,' +
                    this.viewOptions.selectionBarGradient.to +
                    ' 100%)',
            };
            if (this.viewOptions.vertical) {
                this.barStyle.backgroundPosition =
                    'center ' +
                        (offset +
                            dimension +
                            position +
                            (reversed ? -this.handleHalfDim : 0)) +
                        'px';
                this.barStyle.backgroundSize =
                    '100% ' + (this.barDimension - this.handleHalfDim) + 'px';
            }
            else {
                this.barStyle.backgroundPosition =
                    offset -
                        position +
                        (reversed ? this.handleHalfDim : 0) +
                        'px center';
                this.barStyle.backgroundSize =
                    this.barDimension - this.handleHalfDim + 'px 100%';
            }
        }
    };
    SliderComponent.prototype.getSelectionBarColor = function () {
        if (this.range) {
            return this.viewOptions.getSelectionBarColor(this.value, this.highValue);
        }
        return this.viewOptions.getSelectionBarColor(this.value);
    };
    SliderComponent.prototype.getPointerColor = function (pointerType) {
        if (pointerType === PointerType.Max) {
            return this.viewOptions.getPointerColor(this.highValue, pointerType);
        }
        return this.viewOptions.getPointerColor(this.value, pointerType);
    };
    SliderComponent.prototype.getTickColor = function (value) {
        return this.viewOptions.getTickColor(value);
    };
    SliderComponent.prototype.updateCmbLabel = function () {
        var isLabelOverlap = null;
        if (this.viewOptions.rightToLeft) {
            isLabelOverlap =
                this.minLabElem.position - this.minLabElem.dimension - 10 <= this.maxLabElem.position;
        }
        else {
            isLabelOverlap =
                this.minLabElem.position + this.minLabElem.dimension + 10 >= this.maxLabElem.position;
        }
        if (isLabelOverlap) {
            var lowTr = this.getDisplayValue(this.viewLowValue, LabelType.Low);
            var highTr = this.getDisplayValue(this.viewHighValue, LabelType.High);
            var labelVal = this.viewOptions.rightToLeft
                ? this.combineLabels(highTr, lowTr)
                : this.combineLabels(lowTr, highTr);
            this.setLabelValue(labelVal, this.cmbLabElem);
            var pos = this.viewOptions.boundPointerLabels
                ? Math.min(Math.max(this.selBarElem.position +
                    this.selBarElem.dimension / 2 -
                    this.cmbLabElem.dimension / 2, 0), this.barDimension - this.cmbLabElem.dimension)
                : this.selBarElem.position + this.selBarElem.dimension / 2 - this.cmbLabElem.dimension / 2;
            this.setPosition(this.cmbLabElem, pos);
            this.cmbLabelShown = true;
            this.hideEl(this.minLabElem);
            this.hideEl(this.maxLabElem);
            this.showEl(this.cmbLabElem);
        }
        else {
            this.cmbLabelShown = false;
            this.updateHighHandle(this.valueToPosition(this.viewHighValue));
            this.updateLowHandle(this.valueToPosition(this.viewLowValue));
            this.showEl(this.maxLabElem);
            this.showEl(this.minLabElem);
            this.hideEl(this.cmbLabElem);
        }
        if (this.viewOptions.autoHideLimitLabels) {
            this.shFloorCeil();
        }
    };
    SliderComponent.prototype.getDisplayValue = function (value, which) {
        if (this.viewOptions.stepsArray && !this.viewOptions.bindIndexForStepsArray) {
            value = this.getStepValue(value);
        }
        return this.translate(value, which);
    };
    SliderComponent.prototype.roundStep = function (value, customStep) {
        var step = customStep ? customStep : this.step;
        var steppedDifference = MathHelper.roundToPrecisionLimit((value - this.minValue) / step, this.precisionLimit);
        steppedDifference = Math.round(steppedDifference) * step;
        return MathHelper.roundToPrecisionLimit(this.minValue + steppedDifference, this.precisionLimit);
    };
    SliderComponent.prototype.hideEl = function (element) {
        element.css('visibility', 'hidden');
    };
    SliderComponent.prototype.showEl = function (element) {
        if (!!element.alwaysHide) {
            return;
        }
        element.css('visibility', 'visible');
    };
    SliderComponent.prototype.setPosition = function (elem, pos) {
        elem.position = pos;
        if (this.viewOptions.vertical) {
            elem.css('bottom', Math.round(pos) + 'px');
        }
        else {
            elem.css('left', Math.round(pos) + 'px');
        }
    };
    SliderComponent.prototype.calculateElementDimension = function (elem) {
        var val = elem.getBoundingClientRect();
        if (this.viewOptions.vertical) {
            elem.dimension = (val.bottom - val.top) * this.viewOptions.scale;
        }
        else {
            elem.dimension = (val.right - val.left) * this.viewOptions.scale;
        }
    };
    SliderComponent.prototype.setDimension = function (elem, dim) {
        elem.dimension = dim;
        if (this.viewOptions.vertical) {
            elem.css('height', Math.round(dim) + 'px');
        }
        else {
            elem.css('width', Math.round(dim) + 'px');
        }
        return dim;
    };
    SliderComponent.prototype.sanitizeValue = function (val) {
        return Math.min(Math.max(val, this.minValue), this.maxValue);
    };
    SliderComponent.prototype.valueToPosition = function (val) {
        var fn = ValueHelper.linearValueToPosition;
        if (this.viewOptions.customValueToPosition) {
            fn = this.viewOptions.customValueToPosition;
        }
        else if (this.viewOptions.logScale) {
            fn = ValueHelper.logValueToPosition;
        }
        val = this.sanitizeValue(val);
        var percent = fn(val, this.minValue, this.maxValue) || 0;
        if (this.viewOptions.rightToLeft) {
            percent = 1 - percent;
        }
        return percent * this.maxPos;
    };
    SliderComponent.prototype.positionToValue = function (position) {
        var percent = position / this.maxPos;
        if (this.viewOptions.rightToLeft) {
            percent = 1 - percent;
        }
        var fn = ValueHelper.linearPositionToValue;
        if (this.viewOptions.customPositionToValue) {
            fn = this.viewOptions.customPositionToValue;
        }
        else if (this.viewOptions.logScale) {
            fn = ValueHelper.logPositionToValue;
        }
        return fn(percent, this.minValue, this.maxValue) || 0;
    };
    SliderComponent.prototype.getEventXY = function (event, targetTouchId) {
        if (event instanceof MouseEvent) {
            return this.viewOptions.vertical ? event.clientY : event.clientX;
        }
        var touchIndex = 0;
        var touches = event.touches;
        if (targetTouchId !== undefined) {
            for (var i = 0; i < touches.length; i++) {
                if (touches[i].identifier === targetTouchId) {
                    touchIndex = i;
                    break;
                }
            }
        }
        return this.viewOptions.vertical ? touches[touchIndex].clientY : touches[touchIndex].clientX;
    };
    SliderComponent.prototype.getEventPosition = function (event, targetTouchId) {
        var sliderElementBoundingRect = this.elementRef.nativeElement.getBoundingClientRect();
        var sliderPos = this.viewOptions.vertical ?
            sliderElementBoundingRect.bottom : sliderElementBoundingRect.left;
        var eventPos = 0;
        if (this.viewOptions.vertical) {
            eventPos = -this.getEventXY(event, targetTouchId) + sliderPos;
        }
        else {
            eventPos = this.getEventXY(event, targetTouchId) - sliderPos;
        }
        return eventPos * this.viewOptions.scale - this.handleHalfDim;
    };
    SliderComponent.prototype.getNearestHandle = function (event) {
        if (!this.range) {
            return this.minHElem;
        }
        var position = this.getEventPosition(event);
        var distanceMin = Math.abs(position - this.minHElem.position);
        var distanceMax = Math.abs(position - this.maxHElem.position);
        if (distanceMin < distanceMax) {
            return this.minHElem;
        }
        else if (distanceMin > distanceMax) {
            return this.maxHElem;
        }
        else if (!this.viewOptions.rightToLeft) {
            return position < this.minHElem.position ? this.minHElem : this.maxHElem;
        }
        else {
            return position > this.minHElem.position ? this.minHElem : this.maxHElem;
        }
    };
    SliderComponent.prototype.focusElement = function (el) {
        el.focus();
    };
    SliderComponent.prototype.bindEvents = function () {
        var _this = this;
        var draggableRange = this.viewOptions.draggableRange;
        if (!this.viewOptions.onlyBindHandles) {
            this.selBarElem.on('mousedown', function (event) { return _this.onBarStart(draggableRange, null, event, true, true, true); });
        }
        if (this.viewOptions.draggableRangeOnly) {
            this.minHElem.on('mousedown', function (event) { return _this.onBarStart(draggableRange, null, event, true, true); });
            this.maxHElem.on('mousedown', function (event) { return _this.onBarStart(draggableRange, null, event, true, true); });
        }
        else {
            this.minHElem.on('mousedown', function (event) { return _this.onStart(_this.minHElem, HandleType.Low, event, true, true); });
            if (this.range) {
                this.maxHElem.on('mousedown', function (event) { return _this.onStart(_this.maxHElem, HandleType.High, event, true, true); });
            }
            if (!this.viewOptions.onlyBindHandles) {
                this.fullBarElem.on('mousedown', function (event) { _this.onStart(null, null, event, true, true, true); });
                this.ticksElem.on('mousedown', function (event) { _this.onStart(null, null, event, true, true, true, true); });
            }
        }
        if (!this.viewOptions.onlyBindHandles) {
            this.selBarElem.onPassive('touchstart', function (event) { return _this.onBarStart(draggableRange, null, event, true, true); });
        }
        if (this.viewOptions.draggableRangeOnly) {
            this.minHElem.onPassive('touchstart', function (event) { return _this.onBarStart(draggableRange, null, event, true, true); });
            this.maxHElem.onPassive('touchstart', function (event) { return _this.onBarStart(draggableRange, null, event, true, true); });
        }
        else {
            this.minHElem.onPassive('touchstart', function (event) { return _this.onStart(_this.minHElem, HandleType.Low, event, true, true); });
            if (this.range) {
                this.maxHElem.onPassive('touchstart', function (event) { return _this.onStart(_this.maxHElem, HandleType.High, event, true, true); });
            }
            if (!this.viewOptions.onlyBindHandles) {
                this.fullBarElem.onPassive('touchstart', function (event) { return _this.onStart(null, null, event, true, true, true); });
                this.ticksElem.onPassive('touchstart', function (event) { return _this.onStart(null, null, event, false, false, true, true); });
            }
        }
        if (this.viewOptions.keyboardSupport) {
            this.minHElem.on('focus', function () { return _this.onPointerFocus(_this.minHElem, HandleType.Low); });
            if (this.range) {
                this.maxHElem.on('focus', function () { return _this.onPointerFocus(_this.maxHElem, HandleType.High); });
            }
        }
    };
    SliderComponent.prototype.unbindEvents = function () {
        this.minHElem.off();
        this.maxHElem.off();
        this.fullBarElem.off();
        this.selBarElem.off();
        this.ticksElem.off();
    };
    SliderComponent.prototype.onBarStart = function (draggableRange, pointer, event, bindMove, bindEnd, simulateImmediateMove, simulateImmediateEnd) {
        if (draggableRange) {
            this.onDragStart(pointer, HandleType.High, event, bindMove, bindEnd, simulateImmediateMove, simulateImmediateEnd);
        }
        else {
            this.onStart(pointer, HandleType.Low, event, bindMove, bindEnd, simulateImmediateMove, simulateImmediateEnd);
        }
    };
    SliderComponent.prototype.onStart = function (pointer, ref, event, bindMove, bindEnd, simulateImmediateMove, simulateImmediateEnd) {
        var _this = this;
        var moveEvent = '';
        var endEvent = '';
        if (CompatibilityHelper.isTouchEvent(event)) {
            moveEvent = 'touchmove';
            endEvent = 'touchend';
        }
        else {
            moveEvent = 'mousemove';
            endEvent = 'mouseup';
        }
        event.stopPropagation();
        if (!CompatibilityHelper.isTouchEvent(event) || !detect_passive_events__WEBPACK_IMPORTED_MODULE_2___default.a.hasSupport) {
            event.preventDefault();
        }
        this.calcViewDimensions();
        if (pointer) {
            this.tracking = ref;
        }
        else {
            pointer = this.getNearestHandle(event);
            this.tracking = pointer === this.minHElem ? HandleType.Low : HandleType.High;
        }
        pointer.addClass('ng5-slider-active');
        if (this.viewOptions.keyboardSupport) {
            this.focusElement(pointer);
        }
        if (bindMove) {
            var ehMove = function (e) { return _this.dragging.active ? _this.onDragMove(pointer, e) : _this.onMove(pointer, e); };
            if (this.onMoveUnsubscribe !== null) {
                this.onMoveUnsubscribe();
            }
            this.onMoveUnsubscribe = this.renderer.listen('document', moveEvent, ehMove);
        }
        if (bindEnd) {
            var ehEnd = function (e) { return _this.onEnd(e); };
            if (this.onEndUnsubscribe !== null) {
                this.onEndUnsubscribe();
            }
            this.onEndUnsubscribe = this.renderer.listen('document', endEvent, ehEnd);
        }
        this.userChangeStart.emit(this.getChangeContext());
        if (CompatibilityHelper.isTouchEvent(event) && ((event)).changedTouches) {
            if (!this.touchId) {
                this.isDragging = true;
                this.touchId = ((event)).changedTouches[0].identifier;
            }
        }
        if (simulateImmediateMove) {
            this.onMove(pointer, event, true);
        }
        if (simulateImmediateEnd) {
            this.onEnd(event);
        }
    };
    SliderComponent.prototype.onMove = function (pointer, event, fromTick) {
        var touchForThisSlider;
        if (CompatibilityHelper.isTouchEvent(event)) {
            var changedTouches = ((event)).changedTouches;
            for (var i = 0; i < changedTouches.length; i++) {
                if (changedTouches[i].identifier === this.touchId) {
                    touchForThisSlider = changedTouches[i];
                    break;
                }
            }
            if (!touchForThisSlider) {
                return;
            }
        }
        var newPos = this.getEventPosition(event, touchForThisSlider ? touchForThisSlider.identifier : undefined);
        var newValue;
        var ceilValue = this.viewOptions.rightToLeft
            ? this.minValue
            : this.maxValue;
        var flrValue = this.viewOptions.rightToLeft ? this.maxValue : this.minValue;
        if (newPos <= 0) {
            newValue = flrValue;
        }
        else if (newPos >= this.maxPos) {
            newValue = ceilValue;
        }
        else {
            newValue = this.positionToValue(newPos);
            if (fromTick && this.viewOptions.tickStep !== null) {
                newValue = this.roundStep(newValue, this.viewOptions.tickStep);
            }
            else {
                newValue = this.roundStep(newValue);
            }
        }
        this.positionTrackingHandle(newValue);
    };
    SliderComponent.prototype.onEnd = function (event) {
        if (CompatibilityHelper.isTouchEvent(event)) {
            var changedTouches = ((event)).changedTouches;
            if (changedTouches[0].identifier !== this.touchId) {
                return;
            }
        }
        this.isDragging = false;
        this.touchId = null;
        if (!this.viewOptions.keyboardSupport) {
            this.minHElem.removeClass('ng5-slider-active');
            this.maxHElem.removeClass('ng5-slider-active');
            this.tracking = null;
        }
        this.dragging.active = false;
        if (this.onMoveUnsubscribe !== null) {
            this.onMoveUnsubscribe();
        }
        if (this.onEndUnsubscribe !== null) {
            this.onEndUnsubscribe();
        }
        this.userChangeEnd.emit(this.getChangeContext());
    };
    SliderComponent.prototype.onPointerFocus = function (pointer, ref) {
        var _this = this;
        this.tracking = ref;
        pointer.on('blur', function () { return _this.onPointerBlur(pointer); });
        pointer.on('keydown', function (event) { return _this.onKeyboardEvent(event); });
        pointer.on('keyup', function () { return _this.onKeyUp(); });
        this.firstKeyDown = true;
        pointer.addClass('ng5-slider-active');
        this.currentFocusElement = {
            pointer: pointer,
            ref: ref,
        };
    };
    SliderComponent.prototype.onKeyUp = function () {
        this.firstKeyDown = true;
        this.userChangeEnd.emit(this.getChangeContext());
    };
    SliderComponent.prototype.onPointerBlur = function (pointer) {
        pointer.off('blur');
        pointer.off('keydown');
        pointer.off('keyup');
        pointer.removeClass('ng5-slider-active');
        if (!this.isDragging) {
            this.tracking = null;
            this.currentFocusElement = null;
        }
    };
    SliderComponent.prototype.getKeyActions = function (currentValue) {
        var increaseStep = currentValue + this.step;
        var decreaseStep = currentValue - this.step;
        var increasePage = currentValue + this.valueRange / 10;
        var decreasePage = currentValue - this.valueRange / 10;
        if (this.viewOptions.reversedControls) {
            increaseStep = currentValue - this.step;
            decreaseStep = currentValue + this.step;
            increasePage = currentValue - this.valueRange / 10;
            decreasePage = currentValue + this.valueRange / 10;
        }
        var actions = {
            UP: increaseStep,
            DOWN: decreaseStep,
            LEFT: decreaseStep,
            RIGHT: increaseStep,
            PAGEUP: increasePage,
            PAGEDOWN: decreasePage,
            HOME: this.viewOptions.reversedControls ? this.maxValue : this.minValue,
            END: this.viewOptions.reversedControls ? this.minValue : this.maxValue,
        };
        if (this.viewOptions.rightToLeft) {
            actions["LEFT"] = increaseStep;
            actions["RIGHT"] = decreaseStep;
            if (this.viewOptions.vertical) {
                actions["UP"] = decreaseStep;
                actions["DOWN"] = increaseStep;
            }
        }
        return actions;
    };
    SliderComponent.prototype.onKeyboardEvent = function (event) {
        var currentValue = this.getCurrentTrackingValue();
        var keyCode = event.keyCode || event.which;
        var keys = {
            38: 'UP',
            40: 'DOWN',
            37: 'LEFT',
            39: 'RIGHT',
            33: 'PAGEUP',
            34: 'PAGEDOWN',
            36: 'HOME',
            35: 'END',
        };
        var actions = this.getKeyActions(currentValue);
        var key = keys[keyCode];
        var action = actions[key];
        if (action == null || this.tracking === null) {
            return;
        }
        event.preventDefault();
        if (this.firstKeyDown) {
            this.firstKeyDown = false;
            this.userChangeStart.emit(this.getChangeContext());
        }
        var newValue = this.roundStep(this.sanitizeValue(action));
        if (!this.viewOptions.draggableRangeOnly) {
            this.positionTrackingHandle(newValue);
        }
        else {
            var difference = this.viewHighValue - this.viewLowValue;
            var newMinValue = void 0;
            var newMaxValue = void 0;
            if (this.tracking === HandleType.Low) {
                newMinValue = newValue;
                newMaxValue = newValue + difference;
                if (newMaxValue > this.maxValue) {
                    newMaxValue = this.maxValue;
                    newMinValue = newMaxValue - difference;
                }
            }
            else {
                newMaxValue = newValue;
                newMinValue = newValue - difference;
                if (newMinValue < this.minValue) {
                    newMinValue = this.minValue;
                    newMaxValue = newMinValue + difference;
                }
            }
            this.positionTrackingBar(newMinValue, newMaxValue);
        }
    };
    SliderComponent.prototype.onDragStart = function (pointer, ref, event, bindMove, bindEnd, simulateImmediateMove, simulateImmediateEnd) {
        var position = this.getEventPosition(event);
        this.dragging = new Dragging();
        this.dragging.active = true;
        this.dragging.value = this.positionToValue(position);
        this.dragging.difference = this.viewHighValue - this.viewLowValue;
        this.dragging.lowLimit = this.viewOptions.rightToLeft
            ? this.minHElem.position - position
            : position - this.minHElem.position;
        this.dragging.highLimit = this.viewOptions.rightToLeft
            ? position - this.maxHElem.position
            : this.maxHElem.position - position;
        this.onStart(pointer, ref, event, bindMove, bindEnd, simulateImmediateMove, simulateImmediateEnd);
    };
    SliderComponent.prototype.getMinValue = function (newPos, outOfBounds, isAbove) {
        var isRTL = this.viewOptions.rightToLeft;
        var value = null;
        if (outOfBounds) {
            if (isAbove) {
                value = isRTL
                    ? this.minValue
                    : this.maxValue - this.dragging.difference;
            }
            else {
                value = isRTL
                    ? this.maxValue - this.dragging.difference
                    : this.minValue;
            }
        }
        else {
            value = isRTL
                ? this.positionToValue(newPos + this.dragging.lowLimit)
                : this.positionToValue(newPos - this.dragging.lowLimit);
        }
        return this.roundStep(value);
    };
    SliderComponent.prototype.getMaxValue = function (newPos, outOfBounds, isAbove) {
        var isRTL = this.viewOptions.rightToLeft;
        var value = null;
        if (outOfBounds) {
            if (isAbove) {
                value = isRTL
                    ? this.minValue + this.dragging.difference
                    : this.maxValue;
            }
            else {
                value = isRTL
                    ? this.maxValue
                    : this.minValue + this.dragging.difference;
            }
        }
        else {
            if (isRTL) {
                value =
                    this.positionToValue(newPos + this.dragging.lowLimit) +
                        this.dragging.difference;
            }
            else {
                value =
                    this.positionToValue(newPos - this.dragging.lowLimit) +
                        this.dragging.difference;
            }
        }
        return this.roundStep(value);
    };
    SliderComponent.prototype.onDragMove = function (pointer, event) {
        var newPos = this.getEventPosition(event);
        var ceilLimit, flrLimit, flrHElem, ceilHElem;
        if (this.viewOptions.rightToLeft) {
            ceilLimit = this.dragging.lowLimit;
            flrLimit = this.dragging.highLimit;
            flrHElem = this.maxHElem;
            ceilHElem = this.minHElem;
        }
        else {
            ceilLimit = this.dragging.highLimit;
            flrLimit = this.dragging.lowLimit;
            flrHElem = this.minHElem;
            ceilHElem = this.maxHElem;
        }
        var isUnderFlrLimit = newPos <= flrLimit;
        var isOverCeilLimit = newPos >= this.maxPos - ceilLimit;
        var newMinValue;
        var newMaxValue;
        if (isUnderFlrLimit) {
            if (flrHElem.position === 0) {
                return;
            }
            newMinValue = this.getMinValue(newPos, true, false);
            newMaxValue = this.getMaxValue(newPos, true, false);
        }
        else if (isOverCeilLimit) {
            if (ceilHElem.position === this.maxPos) {
                return;
            }
            newMaxValue = this.getMaxValue(newPos, true, true);
            newMinValue = this.getMinValue(newPos, true, true);
        }
        else {
            newMinValue = this.getMinValue(newPos, false, false);
            newMaxValue = this.getMaxValue(newPos, false, false);
        }
        this.positionTrackingBar(newMinValue, newMaxValue);
    };
    SliderComponent.prototype.positionTrackingBar = function (newMinValue, newMaxValue) {
        if (this.viewOptions.minLimit != null &&
            newMinValue < this.viewOptions.minLimit) {
            newMinValue = this.viewOptions.minLimit;
            newMaxValue = MathHelper.roundToPrecisionLimit(newMinValue + this.dragging.difference, this.precisionLimit);
        }
        if (this.viewOptions.maxLimit != null &&
            newMaxValue > this.viewOptions.maxLimit) {
            newMaxValue = this.viewOptions.maxLimit;
            newMinValue = MathHelper.roundToPrecisionLimit(newMaxValue - this.dragging.difference, this.precisionLimit);
        }
        this.viewLowValue = newMinValue;
        this.viewHighValue = newMaxValue;
        this.applyLowValue();
        if (this.range) {
            this.applyHighValue();
        }
        this.publishModelChange(true);
        this.updateHandles(HandleType.Low, this.valueToPosition(newMinValue));
        this.updateHandles(HandleType.High, this.valueToPosition(newMaxValue));
    };
    SliderComponent.prototype.positionTrackingHandle = function (newValue) {
        var valueChanged = false;
        newValue = this.applyMinMaxLimit(newValue);
        if (this.range) {
            if (this.viewOptions.pushRange) {
                newValue = this.applyPushRange(newValue);
                valueChanged = true;
            }
            else {
                if (this.viewOptions.noSwitching) {
                    if (this.tracking === HandleType.Low && newValue > this.viewHighValue) {
                        newValue = this.applyMinMaxRange(this.viewHighValue);
                    }
                    else if (this.tracking === HandleType.High &&
                        newValue < this.viewLowValue) {
                        newValue = this.applyMinMaxRange(this.viewLowValue);
                    }
                }
                newValue = this.applyMinMaxRange(newValue);
                if (this.tracking === HandleType.Low && newValue > this.viewHighValue) {
                    this.viewLowValue = this.viewHighValue;
                    this.applyLowValue();
                    this.updateHandles(HandleType.Low, this.maxHElem.position);
                    this.updateAriaAttributes();
                    this.tracking = HandleType.High;
                    this.minHElem.removeClass('ng5-slider-active');
                    this.maxHElem.addClass('ng5-slider-active');
                    if (this.viewOptions.keyboardSupport) {
                        this.focusElement(this.maxHElem);
                    }
                    valueChanged = true;
                }
                else if (this.tracking === HandleType.High &&
                    newValue < this.viewLowValue) {
                    this.viewHighValue = this.viewLowValue;
                    this.applyHighValue();
                    this.updateHandles(HandleType.High, this.minHElem.position);
                    this.updateAriaAttributes();
                    this.tracking = HandleType.Low;
                    this.maxHElem.removeClass('ng5-slider-active');
                    this.minHElem.addClass('ng5-slider-active');
                    if (this.viewOptions.keyboardSupport) {
                        this.focusElement(this.minHElem);
                    }
                    valueChanged = true;
                }
            }
        }
        if (this.getCurrentTrackingValue() !== newValue) {
            if (this.tracking === HandleType.Low) {
                this.viewLowValue = newValue;
                this.applyLowValue();
            }
            else {
                this.viewHighValue = newValue;
                this.applyHighValue();
            }
            this.updateHandles(this.tracking, this.valueToPosition(newValue));
            this.updateAriaAttributes();
            valueChanged = true;
        }
        if (valueChanged) {
            this.publishModelChange(true);
        }
    };
    SliderComponent.prototype.applyMinMaxLimit = function (newValue) {
        if (this.viewOptions.minLimit != null && newValue < this.viewOptions.minLimit) {
            return this.viewOptions.minLimit;
        }
        if (this.viewOptions.maxLimit != null && newValue > this.viewOptions.maxLimit) {
            return this.viewOptions.maxLimit;
        }
        return newValue;
    };
    SliderComponent.prototype.applyMinMaxRange = function (newValue) {
        var oppositeValue = this.tracking === HandleType.Low ? this.viewHighValue : this.viewLowValue;
        var difference = Math.abs(newValue - oppositeValue);
        if (this.viewOptions.minRange != null) {
            if (difference < this.viewOptions.minRange) {
                if (this.tracking === HandleType.Low) {
                    return MathHelper.roundToPrecisionLimit(this.viewHighValue - this.viewOptions.minRange, this.precisionLimit);
                }
                else {
                    return MathHelper.roundToPrecisionLimit(this.viewLowValue + this.viewOptions.minRange, this.precisionLimit);
                }
            }
        }
        if (this.viewOptions.maxRange != null) {
            if (difference > this.viewOptions.maxRange) {
                if (this.tracking === HandleType.Low) {
                    return MathHelper.roundToPrecisionLimit(this.viewHighValue - this.viewOptions.maxRange, this.precisionLimit);
                }
                else {
                    return MathHelper.roundToPrecisionLimit(this.viewLowValue + this.viewOptions.maxRange, this.precisionLimit);
                }
            }
        }
        return newValue;
    };
    SliderComponent.prototype.applyPushRange = function (newValue) {
        var difference = this.tracking === HandleType.Low
            ? this.viewHighValue - newValue
            : newValue - this.viewLowValue;
        var minRange = this.viewOptions.minRange !== null
            ? this.viewOptions.minRange
            : this.viewOptions.step;
        var maxRange = this.viewOptions.maxRange;
        if (difference < minRange) {
            if (this.tracking === HandleType.Low) {
                this.viewHighValue = MathHelper.roundToPrecisionLimit(Math.min(newValue + minRange, this.maxValue), this.precisionLimit);
                newValue = MathHelper.roundToPrecisionLimit(this.viewHighValue - minRange, this.precisionLimit);
                this.applyHighValue();
                this.updateHandles(HandleType.High, this.valueToPosition(this.viewHighValue));
            }
            else {
                this.viewLowValue = MathHelper.roundToPrecisionLimit(Math.max(newValue - minRange, this.minValue), this.precisionLimit);
                newValue = MathHelper.roundToPrecisionLimit(this.viewLowValue + minRange, this.precisionLimit);
                this.applyLowValue();
                this.updateHandles(HandleType.Low, this.valueToPosition(this.viewLowValue));
            }
            this.updateAriaAttributes();
        }
        else if (maxRange !== null && difference > maxRange) {
            if (this.tracking === HandleType.Low) {
                this.viewHighValue = MathHelper.roundToPrecisionLimit(newValue + maxRange, this.precisionLimit);
                this.applyHighValue();
                this.updateHandles(HandleType.High, this.valueToPosition(this.viewHighValue));
            }
            else {
                this.viewLowValue = MathHelper.roundToPrecisionLimit(newValue - maxRange, this.precisionLimit);
                this.applyLowValue();
                this.updateHandles(HandleType.Low, this.valueToPosition(this.viewLowValue));
            }
            this.updateAriaAttributes();
        }
        return newValue;
    };
    SliderComponent.prototype.publishModelChange = function (callUserChange) {
        this.valueChange.emit(this.value);
        this.highValueChange.emit(this.highValue);
        if (callUserChange) {
            this.userChange.emit(this.getChangeContext());
        }
        if (this.onChangeCallback) {
            if (this.range) {
                this.onChangeCallback([this.value, this.highValue]);
            }
            else {
                this.onChangeCallback(this.value);
            }
        }
        if (this.onTouchedCallback) {
            if (this.range) {
                this.onTouchedCallback([this.value, this.highValue]);
            }
            else {
                this.onTouchedCallback(this.value);
            }
        }
    };
    SliderComponent.prototype.getChangeContext = function () {
        var changeContext = new ChangeContext();
        changeContext.pointerType = this.tracking === HandleType.Low ? PointerType.Min : PointerType.Max;
        changeContext.value = this.value;
        changeContext.highValue = this.highValue;
        return changeContext;
    };
    return SliderComponent;
}());
SliderComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'ng5-slider',
                template: "<!-- // 0 (left) Highlight outside two handles -->\n<span ng5SliderLeftOutSelElem class=\"ng5-slider-span ng5-slider-bar-wrapper ng5-slider-left-out-selection\">\n  <span class=\"ng5-slider-span ng5-slider-bar\"></span>\n</span>\n<!-- // 1 (right) Highlight outside two handles -->\n<span ng5SliderRightOutSelElem class=\"ng5-slider-span ng5-slider-bar-wrapper ng5-slider-right-out-selection\">\n  <span class=\"ng5-slider-span ng5-slider-bar\"></span>\n</span>\n<!-- // 2 The slider bar -->\n<span ng5SliderFullBarElem class=\"ng5-slider-span ng5-slider-bar-wrapper\">\n  <span class=\"ng5-slider-span ng5-slider-bar\"></span>\n</span>\n<!-- // 3 Highlight between two handles -->\n<span ng5SliderSelBarElem class=\"ng5-slider-span ng5-slider-bar-wrapper\">\n  <span class=\"ng5-slider-span ng5-slider-bar ng5-slider-selection\" [ngStyle]=\"barStyle\"></span>\n</span>\n<!-- // 4 Left slider handle -->\n<span ng5SliderMinHElem class=\"ng5-slider-span ng5-slider-pointer ng5-slider-pointer-min\" [ngStyle]=minPointerStyle></span>\n<!-- // 5 Right slider handle -->\n<span ng5SliderMaxHElem class=\"ng5-slider-span ng5-slider-pointer ng5-slider-pointer-max\" [ngStyle]=maxPointerStyle></span>\n<!-- // 6 Floor label -->\n<span ng5SliderFlrLabElem class=\"ng5-slider-span ng5-slider-bubble ng5-slider-limit ng5-slider-floor\"></span>\n<!-- // 7 Ceiling label -->\n<span ng5SliderCeilLabElem class=\"ng5-slider-span ng5-slider-bubble ng5-slider-limit ng5-slider-ceil\"></span>\n<!-- // 8 Label above left slider handle -->\n<span ng5SliderMinLabElem class=\"ng5-slider-span ng5-slider-bubble ng5-slider-model-value\"></span>\n<!-- // 9 Label above right slider handle -->\n<span ng5SliderMaxLabElem class=\"ng5-slider-span ng5-slider-bubble ng5-slider-model-high\"></span>\n<!-- // 10 Range label when the slider handles are close ex. 15 - 17 -->\n<span ng5SliderCmbLabElem class=\"ng5-slider-span ng5-slider-bubble ng5-slider-combined\"></span>\n<!-- // 11 The ticks -->\n<span ng5SliderTicksElem [hidden]=\"!showTicks\" class=\"ng5-slider-ticks\">\n  <span *ngFor=\"let t of ticks\" class=\"ng5-slider-tick\" [ngClass]=\"{'ng5-slider-selected': t.selected}\" [ngStyle]=\"t.style\">\n    <ng5-slider-tooltip-wrapper [template]=\"tooltipTemplate\" [tooltip]=\"t.tooltip\" [placement]=\"t.tooltipPlacement\"></ng5-slider-tooltip-wrapper>\n    <ng5-slider-tooltip-wrapper *ngIf=\"t.value != null\" class=\"ng5-slider-span ng5-slider-tick-value\"\n        [template]=\"tooltipTemplate\" [tooltip]=\"t.valueTooltip\" [placement]=\"t.valueTooltipPlacement\" [content]=\"t.value\"></ng5-slider-tooltip-wrapper>\n    <span *ngIf=\"t.legend != null\" class=\"ng5-slider-span ng5-slider-tick-legend\" [innerHTML]=\"t.legend\"></span>\n  </span>\n</span>",
                styles: ["::ng-deep .ng5-slider{display:inline-block;position:relative;height:4px;width:100%;margin:35px 0 15px;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-ms-touch-action:pan-y;touch-action:pan-y}::ng-deep .ng5-slider.with-legend{margin-bottom:40px}::ng-deep .ng5-slider[disabled]{cursor:not-allowed}::ng-deep .ng5-slider[disabled] .ng5-slider-pointer{cursor:not-allowed;background-color:#d8e0f3}::ng-deep .ng5-slider[disabled] .ng5-slider-draggable{cursor:not-allowed}::ng-deep .ng5-slider[disabled] .ng5-slider-selection{background:#8b91a2}::ng-deep .ng5-slider[disabled] .ng5-slider-tick{cursor:not-allowed}::ng-deep .ng5-slider[disabled] .ng5-slider-tick.ng5-slider-selected{background:#8b91a2}::ng-deep .ng5-slider .ng5-slider-span{white-space:nowrap;position:absolute;display:inline-block}::ng-deep .ng5-slider .ng5-slider-base{width:100%;height:100%;padding:0}::ng-deep .ng5-slider .ng5-slider-bar-wrapper{left:0;-webkit-box-sizing:border-box;box-sizing:border-box;margin-top:-16px;padding-top:16px;width:100%;height:32px;z-index:1}::ng-deep .ng5-slider .ng5-slider-draggable{cursor:move}::ng-deep .ng5-slider .ng5-slider-bar{left:0;width:100%;height:4px;z-index:1;background:#d8e0f3;border-radius:2px}::ng-deep .ng5-slider .ng5-slider-bar-wrapper.ng5-slider-transparent .ng5-slider-bar{background:0 0}::ng-deep .ng5-slider .ng5-slider-bar-wrapper.ng5-slider-left-out-selection .ng5-slider-bar{background:#df002d}::ng-deep .ng5-slider .ng5-slider-bar-wrapper.ng5-slider-right-out-selection .ng5-slider-bar{background:#03a688}::ng-deep .ng5-slider .ng5-slider-selection{z-index:2;background:#0db9f0;border-radius:2px}::ng-deep .ng5-slider .ng5-slider-pointer{cursor:pointer;width:32px;height:32px;top:-14px;background-color:#0db9f0;z-index:3;border-radius:16px}::ng-deep .ng5-slider .ng5-slider-pointer:after{content:'';width:8px;height:8px;position:absolute;top:12px;left:12px;border-radius:4px;background:#fff}::ng-deep .ng5-slider .ng5-slider-pointer:hover:after{background-color:#fff}::ng-deep .ng5-slider .ng5-slider-pointer.ng5-slider-active{z-index:4}::ng-deep .ng5-slider .ng5-slider-pointer.ng5-slider-active:after{background-color:#451aff}::ng-deep .ng5-slider .ng5-slider-bubble{cursor:default;bottom:16px;padding:1px 3px;color:#55637d;font-size:16px}::ng-deep .ng5-slider .ng5-slider-bubble.ng5-slider-limit{color:#55637d}::ng-deep .ng5-slider .ng5-slider-ticks{-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:0;position:absolute;left:0;top:-3px;margin:0;z-index:1;list-style:none}::ng-deep .ng5-slider .ng5-slider-ticks-values-under .ng5-slider-tick-value{top:auto;bottom:-36px}::ng-deep .ng5-slider .ng5-slider-tick{text-align:center;cursor:pointer;width:10px;height:10px;background:#d8e0f3;border-radius:50%;position:absolute;top:0;left:0;margin-left:11px}::ng-deep .ng5-slider .ng5-slider-tick.ng5-slider-selected{background:#0db9f0}::ng-deep .ng5-slider .ng5-slider-tick-value{position:absolute;top:-34px;-webkit-transform:translate(-50%,0);transform:translate(-50%,0)}::ng-deep .ng5-slider .ng5-slider-tick-legend{position:absolute;top:24px;-webkit-transform:translate(-50%,0);transform:translate(-50%,0);max-width:50px;white-space:normal}::ng-deep .ng5-slider.ng5-slider-vertical{position:relative;width:4px;height:100%;margin:0 20px;padding:0;vertical-align:baseline;-ms-touch-action:pan-x;touch-action:pan-x}::ng-deep .ng5-slider.ng5-slider-vertical .ng5-slider-base{width:100%;height:100%;padding:0}::ng-deep .ng5-slider.ng5-slider-vertical .ng5-slider-bar-wrapper{top:auto;left:0;margin:0 0 0 -16px;padding:0 0 0 16px;height:100%;width:32px}::ng-deep .ng5-slider.ng5-slider-vertical .ng5-slider-bar{bottom:0;left:auto;width:4px;height:100%}::ng-deep .ng5-slider.ng5-slider-vertical .ng5-slider-pointer{left:-14px!important;top:auto;bottom:0}::ng-deep .ng5-slider.ng5-slider-vertical .ng5-slider-bubble{left:16px!important;bottom:0}::ng-deep .ng5-slider.ng5-slider-vertical .ng5-slider-ticks{height:100%;width:0;left:-3px;top:0;z-index:1}::ng-deep .ng5-slider.ng5-slider-vertical .ng5-slider-tick{vertical-align:middle;margin-left:auto;margin-top:11px}::ng-deep .ng5-slider.ng5-slider-vertical .ng5-slider-tick-value{left:24px;top:auto;-webkit-transform:translate(0,-28%);transform:translate(0,-28%)}::ng-deep .ng5-slider.ng5-slider-vertical .ng5-slider-tick-legend{top:auto;right:24px;-webkit-transform:translate(0,-28%);transform:translate(0,-28%);max-width:none;white-space:nowrap}::ng-deep .ng5-slider.ng5-slider-vertical .ng5-slider-ticks-values-under .ng5-slider-tick-value{bottom:auto;left:auto;right:24px}"],
                host: { class: 'ng5-slider' },
                providers: [NG5_SLIDER_CONTROL_VALUE_ACCESSOR]
            },] },
];
SliderComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], },
]; };
SliderComponent.propDecorators = {
    "value": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "valueChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "highValue": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "highValueChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "userChangeStart": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "userChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "userChangeEnd": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "options": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "manualRefresh": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "triggerFocus": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "leftOutSelBar": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [LeftOutSelDirective,] },],
    "rightOutSelBar": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [RightOutSelDirective,] },],
    "fullBarElem": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [FullBarDirective,] },],
    "selBarElem": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [SelBarDirective,] },],
    "minHElem": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [MinHDirective,] },],
    "maxHElem": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [MaxHDirective,] },],
    "flrLabElem": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [FlrLabDirective,] },],
    "ceilLabElem": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [CeilLabDirective,] },],
    "minLabElem": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [MinLabDirective,] },],
    "maxLabElem": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [MaxLabDirective,] },],
    "cmbLabElem": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [CmbLabDirective,] },],
    "ticksElem": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [TicksDirective,] },],
    "tooltipTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: ['tooltipTemplate',] },],
    "sliderElementVerticalClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.ng5-slider-vertical',] },],
    "sliderElementDisabledAttr": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['attr.disabled',] },],
    "onResize": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['window:resize', ['$event'],] },],
};
var TooltipWrapperComponent = /** @class */ (function () {
    function TooltipWrapperComponent() {
    }
    return TooltipWrapperComponent;
}());
TooltipWrapperComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'ng5-slider-tooltip-wrapper',
                template: "<ng-container *ngIf=\"template\">\n  <ng-template *ngTemplateOutlet=\"template; context: {tooltip: tooltip, placement: placement, content: content}\"></ng-template>\n</ng-container>\n\n<ng-container *ngIf=\"!template\">\n  <div class=\"ng5-slider-inner-tooltip\" [attr.title]=\"tooltip\" [attr.data-tooltip-placement]=\"placement\">\n    {{content}}\n  </div>\n</ng-container>",
                styles: [".ng5-slider-inner-tooltip{height:100%}"]
            },] },
];
TooltipWrapperComponent.ctorParameters = function () { return []; };
TooltipWrapperComponent.propDecorators = {
    "template": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "tooltip": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "placement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "content": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
};
var Ng5SliderModule = /** @class */ (function () {
    function Ng5SliderModule() {
    }
    return Ng5SliderModule;
}());
Ng5SliderModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]
                ],
                declarations: [
                    SliderComponent,
                    RightOutSelDirective,
                    LeftOutSelDirective,
                    FullBarDirective,
                    SelBarDirective,
                    MinHDirective,
                    MaxHDirective,
                    FlrLabDirective,
                    CeilLabDirective,
                    MinLabDirective,
                    MaxLabDirective,
                    CmbLabDirective,
                    TicksDirective,
                    TooltipWrapperComponent
                ],
                exports: [
                    SliderComponent
                ]
            },] },
];
Ng5SliderModule.ctorParameters = function () { return []; };


//# sourceMappingURL=ng5-slider.js.map


/***/ }),

/***/ "./src/app/main/modules/search-results/components/filters/filters.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/main/modules/search-results/components/filters/filters.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search-widget\">\n  <h4 id=\"searchLabel\">Filter by:</h4>\n  <nz-divider></nz-divider>\n  <div class=\"form-group\">\n    <ng5-slider\n      [(value)]=\"filters.minPrice\"\n      [(highValue)]=\"filters.maxPrice\"\n      [options]=\"sliderOptions\"\n      (userChangeEnd)=\"onUserChangeEnd($event)\"\n      [manualRefresh]=\"manualRefresh\">\n    </ng5-slider>\n  </div>\n\n  <div nz-row class=\"form-group\">\n    <div nz-col nzSpan=\"19\">\n      <label nz-checkbox [disabled]=\"!petsAllowed\" [(ngModel)]=\"filters.petsAllowed\"\n             (ngModelChange)=\"filter('petsAllowed')\">Pets Allowed</label>\n    </div>\n    <div nz-col nzSpan=\"4\">\n      <div nz-row nzType=\"flex\" nzJustify=\"end\">\n        <div nz-col>\n          <span [ngStyle]=\"{'color': petsAllowed ? 'rgba(0,0,0,.65)' : 'rgba(0,0,0,.25)' }\">{{petsAllowed}}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div nz-row class=\"form-group\">\n    <div nz-col nzSpan=\"19\">\n      <label nz-checkbox [disabled]=\"!wifi && !filters.wifi\" [(ngModel)]=\"filters.wifi\"\n             (ngModelChange)=\"filter('wifi')\">Free\n        Wifi</label>\n    </div>\n    <div nz-col nzSpan=\"4\">\n      <div nz-row nzType=\"flex\" nzJustify=\"end\">\n        <div nz-col>\n          <span [ngStyle]=\"{'color': wifi ? 'rgba(0,0,0,.65)' : 'rgba(0,0,0,.25)' }\">{{wifi}}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div nz-row class=\"form-group\">\n    <div nz-col nzSpan=\"19\">\n      <label nz-checkbox [disabled]=\"!swimmingPool && !filters.swimmingPool\" [(ngModel)]=\"filters.swimmingPool\"\n             (ngModelChange)=\"filter('swimmingPool')\">Swimming\n        pool</label>\n    </div>\n    <div nz-col nzSpan=\"4\">\n      <div nz-row nzType=\"flex\" nzJustify=\"end\">\n        <div nz-col>\n          <span [ngStyle]=\"{'color': swimmingPool ? 'rgba(0,0,0,.65)' : 'rgba(0,0,0,.25)' }\">{{swimmingPool}}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div nz-row class=\"form-group\">\n    <div nz-col nzSpan=\"19\">\n      <label nz-checkbox [disabled]=\"!gym && !filters.gym\" [(ngModel)]=\"filters.gym\"\n             (ngModelChange)=\"filter('gym')\">Gym</label>\n    </div>\n    <div nz-col nzSpan=\"4\">\n      <div nz-row nzType=\"flex\" nzJustify=\"end\">\n        <div nz-col>\n          <span [ngStyle]=\"{'color': gym ? 'rgba(0,0,0,.65)' : 'rgba(0,0,0,.25)' }\">{{gym}}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div nz-row class=\"form-group\">\n    <div nz-col nzSpan=\"19\">\n      <label nz-checkbox [disabled]=\"!spa && !filters.spa\" [(ngModel)]=\"filters.spa\"\n             (ngModelChange)=\"filter('spa')\">Spa</label>\n    </div>\n    <div nz-col nzSpan=\"4\">\n      <div nz-row nzType=\"flex\" nzJustify=\"end\">\n        <div nz-col>\n          <span [ngStyle]=\"{'color': spa ? 'rgba(0,0,0,.65)' : 'rgba(0,0,0,.25)' }\">{{spa}}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div nz-row class=\"form-group\">\n    <div nz-col nzSpan=\"19\">\n      <label nz-checkbox [disabled]=\"!bar && !filters.bar\" [(ngModel)]=\"filters.bar\"\n             (ngModelChange)=\"filter('bar')\">Bar</label>\n    </div>\n    <div nz-col nzSpan=\"4\">\n      <div nz-row nzType=\"flex\" nzJustify=\"end\">\n        <div nz-col>\n          <span [ngStyle]=\"{'color': bar ? 'rgba(0,0,0,.65)' : 'rgba(0,0,0,.25)' }\">{{bar}}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div nz-row class=\"form-group\">\n    <div nz-col nzSpan=\"19\">\n      <label nz-checkbox [disabled]=\"!restaurant && !filters.restaurant\" [(ngModel)]=\"filters.restaurant\"\n             (ngModelChange)=\"filter('restaurant')\">Restaurant</label>\n    </div>\n    <div nz-col nzSpan=\"4\">\n      <div nz-row nzType=\"flex\" nzJustify=\"end\">\n        <div nz-col>\n          <span [ngStyle]=\"{'color': restaurant ? 'rgba(0,0,0,.65)' : 'rgba(0,0,0,.25)' }\">{{restaurant}}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div nz-row class=\"form-group\">\n    <div nz-col nzSpan=\"19\">\n      <label nz-checkbox [disabled]=\"!parking && !filters.parking\" [(ngModel)]=\"filters.parking\"\n             (ngModelChange)=\"filter('parking')\">Parking</label>\n    </div>\n    <div nz-col nzSpan=\"4\">\n      <div nz-row nzType=\"flex\" nzJustify=\"end\">\n        <div nz-col>\n          <span [ngStyle]=\"{'color': parking ? 'rgba(0,0,0,.65)' : 'rgba(0,0,0,.25)' }\">{{parking}}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div nz-row class=\"form-group\">\n    <div nz-col nzSpan=\"19\">\n      <label nz-checkbox [disabled]=\"!roomService && !filters.roomService\" [(ngModel)]=\"filters.roomService\"\n             (ngModelChange)=\"filter('roomService')\">Room service</label>\n    </div>\n    <div nz-col nzSpan=\"4\">\n      <div nz-row nzType=\"flex\" nzJustify=\"end\">\n        <div nz-col>\n          <span [ngStyle]=\"{'color': roomService ? 'rgba(0,0,0,.65)' : 'rgba(0,0,0,.25)' }\">{{roomService}}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <br/>\n</div>\n"

/***/ }),

/***/ "./src/app/main/modules/search-results/components/filters/filters.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/main/modules/search-results/components/filters/filters.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-widget {\n  width: 264px;\n  padding: 12px;\n  background-color: #ffffff;\n  border-radius: 3px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21zaS9wcm9qZWN0cy9XZWJzdG9ybVByb2plY3RzL3JlbnQtd2ViLWFwcC9zcmMvYXBwL21haW4vbW9kdWxlcy9zZWFyY2gtcmVzdWx0cy9jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tb2R1bGVzL3NlYXJjaC1yZXN1bHRzL2NvbXBvbmVudHMvZmlsdGVycy9maWx0ZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC13aWRnZXQge1xuICB3aWR0aDogMjY0cHg7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/modules/search-results/components/filters/filters.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/main/modules/search-results/components/filters/filters.component.ts ***!
  \*************************************************************************************/
/*! exports provided: FiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersComponent", function() { return FiltersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng5_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng5-slider */ "./node_modules/ng5-slider/esm5/ng5-slider.js");




var FiltersComponent = /** @class */ (function () {
    function FiltersComponent(router, route) {
        this.router = router;
        this.route = route;
        this.manualRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.petsAllowed = 0;
        this.wifi = 0;
        this.swimmingPool = 0;
        this.gym = 0;
        this.spa = 0;
        this.bar = 0;
        this.restaurant = 0;
        this.parking = 0;
        this.roomService = 0;
    }
    FiltersComponent.prototype.filter = function (key) {
        var _a;
        this.router.navigate(['/search'], {
            queryParams: (_a = {
                    page: 0
                },
                _a[key] = this.filters[key],
                _a),
            queryParamsHandling: 'merge'
        });
    };
    FiltersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (response) {
            _this.amenitiesCount = response.data.amenities;
            _this.petsAllowed = 0;
            _this.wifi = 0;
            _this.swimmingPool = 0;
            _this.gym = 0;
            _this.spa = 0;
            _this.bar = 0;
            _this.restaurant = 0;
            _this.parking = 0;
            _this.roomService = 0;
            _this.amenitiesCount.map(function (a) {
                if (a.amenity === 'petsAllowed') {
                    _this.petsAllowed = a.count;
                }
                if (a.amenity === 'wifi') {
                    _this.wifi = a.count;
                }
                if (a.amenity === 'swimmingPool') {
                    _this.swimmingPool = a.count;
                }
                if (a.amenity === 'gym') {
                    _this.gym = a.count;
                }
                if (a.amenity === 'spa') {
                    _this.spa = a.count;
                }
                if (a.amenity === 'bar') {
                    _this.bar = a.count;
                }
                if (a.amenity === 'restaurant') {
                    _this.restaurant = a.count;
                }
                if (a.amenity === 'parking') {
                    _this.parking = a.count;
                }
                if (a.amenity === 'roomService') {
                    _this.roomService = a.count;
                }
            });
            // console.log('PRICES:', response.data.floorPrice, response.data.ceilPrice);
            _this.sliderOptions = {
                floor: response.data.floorPrice,
                ceil: response.data.ceilPrice,
                translate: function (value, label) {
                    switch (label) {
                        case ng5_slider__WEBPACK_IMPORTED_MODULE_3__["LabelType"].Low:
                            return '<b>Min price:</b> $' + value;
                        case ng5_slider__WEBPACK_IMPORTED_MODULE_3__["LabelType"].High:
                            return '<b>Max price:</b> $' + value;
                        default:
                            return '$' + value;
                    }
                }
            };
            _this.manualRefresh.emit();
        });
    };
    FiltersComponent.prototype.onUserChangeEnd = function (changeContext) {
        console.log('onUserChangeEnd', changeContext);
        if (!changeContext.pointerType) {
            this.filters.floorPrice = changeContext.value;
            this.filter('minPrice');
        }
        else {
            this.filters.ceilPrice = changeContext.highValue;
            this.filter('maxPrice');
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FiltersComponent.prototype, "filters", void 0);
    FiltersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-filters',
            template: __webpack_require__(/*! ./filters.component.html */ "./src/app/main/modules/search-results/components/filters/filters.component.html"),
            styles: [__webpack_require__(/*! ./filters.component.scss */ "./src/app/main/modules/search-results/components/filters/filters.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], FiltersComponent);
    return FiltersComponent;
}());



/***/ }),

/***/ "./src/app/main/modules/search-results/components/hotel-item/hotel-item.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/main/modules/search-results/components/hotel-item/hotel-item.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hotel-card\">\n  <div class=\"row\">\n    <div class=\"col-3\">\n      <a (click)=\"hotelNavigate(hotel.id)\">\n        <img class=\"d-flex align-self-start\" src=\"{{photoUrl}}\" alt=\"Generic placeholder image\">\n      </a>\n    </div>\n    <div class=\"col-9\">\n      <div class=\"row\">\n        <div class=\"col-9 title\">\n          <span (click)=\"hotelNavigate(hotel.id)\" class=\"title-span\">{{hotel.id}}&nbsp;{{hotel.name}}</span>\n          <nz-rate [ngModel]=\"hotel.stars\" nzDisabled></nz-rate>\n        </div>\n        <div class=\"col-3\">\n          <div class=\"fav-box\">\n            <span>\n            <i class=\"fas fa-euro-sign\"></i> {{hotel.min_room_price}} - {{hotel.max_room_price}}\n            </span>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <span><i class=\"fas fa-th\"></i>&nbsp;{{hotel.number_of_rooms}}&nbsp;Available rooms</span>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <span><i class=\"fas fa-info-circle\"></i>&nbsp;{{hotel.description_short}}</span>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <div class=\"stats\">\n            <span *ngIf=\"freeWifi\">\n              <i class=\"fas fa-wifi\"></i>Free Wifi\n            </span>\n\n            <span *ngIf=\"petsAllowed\">\n              <i class=\"fas fa-paw\"></i>Pets Allowed\n            </span>\n\n            <span *ngIf=\"gym\">\n              <i class=\"fas fa-dumbbell\"></i>Gym\n            </span>\n\n            <span *ngIf=\"swimmingPool\">\n              <i class=\"fas fa-swimming-pool\"></i>Swimming Pool\n            </span>\n\n            <span *ngIf=\"spa\">\n              <i class=\"fas fa-spa\"></i>Spa\n            </span>\n\n            <span *ngIf=\"bar\">\n              <i class=\"fas fa-glass-cheers\"></i>Bar\n            </span>\n\n            <span *ngIf=\"restaurant\">\n              <i class=\"fas fa-utensils\"></i>Restaurant\n            </span>\n\n            <span *ngIf=\"roomService\">\n              <i class=\"fas fa-person-booth\"></i>Room Service\n            </span>\n\n            <span *ngIf=\"parking\">\n              <i class=\"fas fa-parking\"></i>Parking\n            </span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/modules/search-results/components/hotel-item/hotel-item.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/main/modules/search-results/components/hotel-item/hotel-item.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".head {\n  float: left;\n  width: 100%; }\n\n.title-span {\n  padding-right: 6px;\n  cursor: pointer; }\n\n.search-box {\n  width: 90%;\n  margin: 0 auto 40px;\n  box-shadow: 10px 13px 0 rgba(0, 0, 0, 0.2); }\n\n.listing-block {\n  background: #fff;\n  height: 500px;\n  padding-top: 20px;\n  overflow-y: scroll; }\n\n.slimScrollDiv {\n  width: 41% !important; }\n\n.hotel-card {\n  position: relative;\n  margin-bottom: 15px;\n  background: white;\n  padding: 5px; }\n\n.hotel-card img {\n  width: 200px;\n  margin: 0;\n  height: 150px; }\n\n.media-body {\n  height: 150px; }\n\n.title {\n  font-size: 23px;\n  font-weight: 600;\n  color: #4765AB; }\n\n.hotel-card .title small {\n  display: block;\n  font-size: 17px;\n  color: #232323; }\n\n.hotel-card .stats {\n  float: left;\n  width: 100%;\n  margin-top: 10px; }\n\n.hotel-card .stats span {\n  float: left;\n  margin-right: 10px;\n  font-size: 15px; }\n\n.hotel-card .stats span i {\n  margin-right: 7px;\n  color: #4765AB; }\n\n.hotel-card .address {\n  float: left;\n  width: 100%;\n  font-size: 14px;\n  margin-top: 5px;\n  color: #888; }\n\n.fav-box {\n  font-size: 20px;\n  top: 4px;\n  color: #e75628; }\n\n.map-box {\n  background-color: #A3CCFF; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21zaS9wcm9qZWN0cy9XZWJzdG9ybVByb2plY3RzL3JlbnQtd2ViLWFwcC9zcmMvYXBwL21haW4vbW9kdWxlcy9zZWFyY2gtcmVzdWx0cy9jb21wb25lbnRzL2hvdGVsLWl0ZW0vaG90ZWwtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxXQUFXLEVBQUE7O0FBR2I7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUdqQjtFQUNFLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsMENBQTBDLEVBQUE7O0FBRzVDO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsWUFBWSxFQUFBOztBQUdkO0VBQ0UsWUFBWTtFQUNaLFNBQVM7RUFDVCxhQUFhLEVBQUE7O0FBR2Y7RUFDRSxhQUFhLEVBQUE7O0FBR2Y7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGlCQUFpQjtFQUNqQixjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZUFBZTtFQUNmLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGVBQWU7RUFDZixRQUFRO0VBQ1IsY0FBYyxFQUFBOztBQUdoQjtFQUNFLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tb2R1bGVzL3NlYXJjaC1yZXN1bHRzL2NvbXBvbmVudHMvaG90ZWwtaXRlbS9ob3RlbC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWQge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50aXRsZS1zcGFuIHtcbiAgcGFkZGluZy1yaWdodDogNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zZWFyY2gtYm94IHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAwIGF1dG8gNDBweDtcbiAgYm94LXNoYWRvdzogMTBweCAxM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4ubGlzdGluZy1ibG9jayB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGhlaWdodDogNTAwcHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi5zbGltU2Nyb2xsRGl2IHtcbiAgd2lkdGg6IDQxJSAhaW1wb3J0YW50O1xufVxuXG4uaG90ZWwtY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmhvdGVsLWNhcmQgaW1nIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogMTUwcHg7XG59XG5cbi5tZWRpYS1ib2R5IHtcbiAgaGVpZ2h0OiAxNTBweDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzQ3NjVBQjtcbn1cblxuLmhvdGVsLWNhcmQgLnRpdGxlIHNtYWxsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICMyMzIzMjM7XG59XG5cbi5ob3RlbC1jYXJkIC5zdGF0cyB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmhvdGVsLWNhcmQgLnN0YXRzIHNwYW4ge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5ob3RlbC1jYXJkIC5zdGF0cyBzcGFuIGkge1xuICBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgY29sb3I6ICM0NzY1QUI7XG59XG5cbi5ob3RlbC1jYXJkIC5hZGRyZXNzIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgY29sb3I6ICM4ODg7XG59XG5cbi5mYXYtYm94IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0b3A6IDRweDtcbiAgY29sb3I6ICNlNzU2Mjg7XG59XG5cbi5tYXAtYm94IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0EzQ0NGRjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/modules/search-results/components/hotel-item/hotel-item.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/main/modules/search-results/components/hotel-item/hotel-item.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: HotelItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelItemComponent", function() { return HotelItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HotelItemComponent = /** @class */ (function () {
    function HotelItemComponent(router) {
        this.router = router;
    }
    HotelItemComponent.prototype.ngOnInit = function () {
        this.photoUrl = this.hotel.hotel_photos[0] !== undefined ?
            this.hotel.hotel_photos[0].fileDownloadUri : '../../../../assets/images/empty.jpg';
        this.petsAllowed = this.hotel.amenities.some(function (a) { return a.name === 'petsAllowed'; });
        this.freeWifi = this.hotel.amenities.some(function (a) { return a.name === 'wifi'; });
        this.swimmingPool = this.hotel.amenities.some(function (a) { return a.name === 'swimmingPool'; });
        this.gym = this.hotel.amenities.some(function (a) { return a.name === 'gym'; });
        this.spa = this.hotel.amenities.some(function (a) { return a.name === 'spa'; });
        this.bar = this.hotel.amenities.some(function (a) { return a.name === 'bar'; });
        this.restaurant = this.hotel.amenities.some(function (a) { return a.name === 'restaurant'; });
        this.parking = this.hotel.amenities.some(function (a) { return a.name === 'parking'; });
        this.roomService = this.hotel.amenities.some(function (a) { return a.name === 'roomService'; });
    };
    HotelItemComponent.prototype.hotelNavigate = function (hotelId) {
        this.router.navigate(['/hotels/', hotelId], {
            queryParamsHandling: 'merge'
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HotelItemComponent.prototype, "hotel", void 0);
    HotelItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hotel-item',
            template: __webpack_require__(/*! ./hotel-item.component.html */ "./src/app/main/modules/search-results/components/hotel-item/hotel-item.component.html"),
            styles: [__webpack_require__(/*! ./hotel-item.component.scss */ "./src/app/main/modules/search-results/components/hotel-item/hotel-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HotelItemComponent);
    return HotelItemComponent;
}());



/***/ }),

/***/ "./src/app/main/modules/search-results/search-results-resolver.ts":
/*!************************************************************************!*\
  !*** ./src/app/main/modules/search-results/search-results-resolver.ts ***!
  \************************************************************************/
/*! exports provided: SearchResultsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultsResolver", function() { return SearchResultsResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_hotel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/hotel.service */ "./src/app/shared/services/hotel.service.ts");
/* harmony import */ var _shared_models_payload_searchRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/models/payload/searchRequest */ "./src/app/shared/models/payload/searchRequest.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);





var SearchResultsResolver = /** @class */ (function () {
    function SearchResultsResolver(hotelService) {
        this.hotelService = hotelService;
    }
    SearchResultsResolver.prototype.resolve = function (route, state) {
        var _this = this;
        /* Initialize a class instance */
        this.searchRequest = new _shared_models_payload_searchRequest__WEBPACK_IMPORTED_MODULE_3__["SearchRequest"](0, 5, 37.983810, 23.727539, 10, moment__WEBPACK_IMPORTED_MODULE_4__(new Date()).format('YYYY-MM-DD'), moment__WEBPACK_IMPORTED_MODULE_4__(new Date()).add(2, 'days').format('YYYY-MM-DD'), 2, false, false, false, false, false, false, false, false, false, 0, 200);
        // tslint:disable-next-line:max-line-length
        /* Get the class members after initializing the instance (it is very important to initialize the instance, otherwise the instance will be empty). */
        var searchClassMembers = Object.getOwnPropertyNames(this.searchRequest);
        route.queryParamMap.keys.forEach(function (key) {
            /* Only add the query params to the filters that are members of the class. */
            if (searchClassMembers.includes(key)) {
                _this.searchRequest[key] = route.queryParamMap.get(key);
            }
        });
        return this.hotelService.search(this.searchRequest);
    };
    SearchResultsResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_hotel_service__WEBPACK_IMPORTED_MODULE_2__["HotelService"]])
    ], SearchResultsResolver);
    return SearchResultsResolver;
}());



/***/ }),

/***/ "./src/app/main/modules/search-results/search-results-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/main/modules/search-results/search-results-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: SearchResultsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultsRoutingModule", function() { return SearchResultsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _search_results_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-results-resolver */ "./src/app/main/modules/search-results/search-results-resolver.ts");
/* harmony import */ var _search_results_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-results.component */ "./src/app/main/modules/search-results/search-results.component.ts");





var routes = [
    {
        path: '',
        component: _search_results_component__WEBPACK_IMPORTED_MODULE_4__["SearchResultsComponent"],
        resolve: {
            data: _search_results_resolver__WEBPACK_IMPORTED_MODULE_3__["SearchResultsResolver"]
        },
        runGuardsAndResolvers: 'always',
    }
];
var SearchResultsRoutingModule = /** @class */ (function () {
    function SearchResultsRoutingModule() {
    }
    SearchResultsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SearchResultsRoutingModule);
    return SearchResultsRoutingModule;
}());



/***/ }),

/***/ "./src/app/main/modules/search-results/search-results.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/main/modules/search-results/search-results.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div id=\"left-content\" class=\"col-3\">\n      <div class=\"row\">\n        <app-search-widget\n          [destination]=\"destination\"\n          [checkin]=\"checkin\"\n          [checkout]=\"checkout\"\n          [visitors]=\"visitors\"\n          [latitude]=\"lat\"\n          [longitude]=\"lng\"\n          [radius]=\"radius\">\n        </app-search-widget>\n      </div>\n      <div class=\"row\" style=\"margin-top: 30px;\">\n        <app-filters [filters]=\"filters\"></app-filters>\n      </div>\n    </div>\n    <div id=\"right-content\" class=\"col-9\">\n      <agm-map\n        [latitude]=\"lat\"\n        [longitude]=\"lng\"\n        [zoom]=\"12\"\n        [minZoom]=\"5\"\n        [maxZoom]=\"16\"\n        [disableDefaultUI]=\"true\"\n        [zoomControl]=\"false\"\n        [scaleControl]=\"false\"\n        [mapTypeControl]=\"false\"\n        [fitBounds]=\"pagedHotels.content.length>0\"\n        (mapClick)=\"closeWindow()\">\n        <agm-marker-cluster\n          imagePath=\"https://raw.githubusercontent.com/googlemaps/v3-utility-library/master/markerclustererplus/images/m\">\n          <agm-marker *ngFor=\"let hotel of allHotels\"\n                      [latitude]=\"hotel.lat\"\n                      [longitude]=\"hotel.lng\"\n                      [agmFitBounds]=\"true\"\n                      [iconUrl]=\"markerIcon\"\n                      (markerClick)=selectMarker(infoWindow)>\n            <agm-info-window #infoWindow>\n              <h4 (click)=\"hotelNavigate(hotel.id)\" style=\"cursor: pointer;\">{{hotel.name}}\n                <small>({{hotel.id}})</small>\n              </h4>\n              <p style=\"max-width: 220px;\">{{hotel.description_short}}</p>\n              <nz-rate [ngModel]=\"hotel.stars\" nzDisabled></nz-rate>\n            </agm-info-window>\n          </agm-marker>\n        </agm-marker-cluster>\n        <agm-circle [latitude]=\"lat\" [longitude]=\"lng\"\n                    [radius]=\"radius*1000\"\n                    [fillColor]=\"'rgba(57,199,100,0.4)'\"\n                    [circleDraggable]=\"false\"\n                    [editable]=\"true\"\n                    (radiusChange)=\"onCircleRadiusChange($event)\"\n                    (centerChange)=\"onCenterChange($event)\"></agm-circle>\n      </agm-map>\n      <hr>\n      <h3><b>{{destination}}: {{allHotels.length}} hotels found</b></h3>\n      <hr>\n      <section class=\"search-box\">\n        <div class=\"row\">\n          <div class=\"col-md-12 listing-block\">\n            <app-hotel-item *ngFor=\"let hotel of pagedHotels.content\" [hotel]=\"hotel\"></app-hotel-item>\n          </div>\n        </div>\n      </section>\n      <nz-pagination\n        *ngIf=\"pagedHotels.totalElements\"\n        [nzPageSize]=\"pagedHotels.size\"\n        [nzPageIndex]=\"pagedHotels.page + 1\"\n        [nzTotal]=\"pagedHotels.totalElements\"\n        (nzPageIndexChange)=\"onPageIndexChange($event)\"\n      ></nz-pagination>\n      <nz-empty *ngIf=\"!pagedHotels.totalElements\"></nz-empty>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/modules/search-results/search-results.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/main/modules/search-results/search-results.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n  height: 453px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21zaS9wcm9qZWN0cy9XZWJzdG9ybVByb2plY3RzL3JlbnQtd2ViLWFwcC9zcmMvYXBwL21haW4vbW9kdWxlcy9zZWFyY2gtcmVzdWx0cy9zZWFyY2gtcmVzdWx0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4vbW9kdWxlcy9zZWFyY2gtcmVzdWx0cy9zZWFyY2gtcmVzdWx0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXAge1xuICBoZWlnaHQ6IDQ1M3B4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/main/modules/search-results/search-results.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/main/modules/search-results/search-results.component.ts ***!
  \*************************************************************************/
/*! exports provided: SearchResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultsComponent", function() { return SearchResultsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ng2_simple_smooth_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-simple-smooth-scroll */ "./node_modules/ng2-simple-smooth-scroll/fesm5/ng2-simple-smooth-scroll.js");
/* harmony import */ var _shared_services_routing_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/routing-state */ "./src/app/shared/services/routing-state.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");









var SearchResultsComponent = /** @class */ (function () {
    function SearchResultsComponent(titleService, route, router, smooth, routingState, mapsAPILoader, ngZone) {
        var _this = this;
        this.titleService = titleService;
        this.route = route;
        this.router = router;
        this.smooth = smooth;
        this.routingState = routingState;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.markerIcon = {
            url: '/assets/images/iconfinder_map-marker_285659.svg',
            scaledSize: {
                width: 35,
                height: 35
            }
        };
        this.infoWindowOpened = null;
        this.previousInfoWindow = null;
        titleService.setTitle(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].appName + ' :: ' + 'Search');
        this.route.data.subscribe(function (response) {
            var previousUrl = _this.routingState.getPreviousUrl();
            if (previousUrl !== undefined && previousUrl.includes('search')) {
                // this.smooth.smoothScrollToTop({duration: 15, easing: 'easeOutQuint', offset: 0});
            }
            /* Get all the params from the activated route snapshot and add some default values to them if they are not defined */
            _this.destination = _this.route.snapshot.queryParamMap.get('destination') == null ? '' :
                _this.route.snapshot.queryParamMap.get('destination');
            titleService.setTitle(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].appName + ' :: ' + _this.destination);
            _this.checkin = _this.route.snapshot.queryParamMap.get('checkin') == null ?
                moment__WEBPACK_IMPORTED_MODULE_4__(new Date()).format('YYYY-MM-DD') : _this.route.snapshot.queryParamMap.get('checkin');
            _this.checkout = _this.route.snapshot.queryParamMap.get('checkout') == null ?
                moment__WEBPACK_IMPORTED_MODULE_4__(new Date()).add(2, 'days').format('YYYY-MM-DD') : _this.route.snapshot.queryParamMap.get('checkout');
            _this.visitors = _this.route.snapshot.queryParamMap.get('visitors') == null ?
                1 : parseInt(_this.route.snapshot.queryParamMap.get('visitors'), 10);
            _this.lat = _this.route.snapshot.queryParamMap.get('lat') == null ?
                37.983810 : parseFloat(_this.route.snapshot.queryParamMap.get('lat'));
            _this.lng = _this.route.snapshot.queryParamMap.get('lng') == null ?
                23.727539 : parseFloat(_this.route.snapshot.queryParamMap.get('lng'));
            _this.radius = _this.route.snapshot.queryParamMap.get('radius') == null ?
                5 : parseFloat(_this.route.snapshot.queryParamMap.get('radius'));
            /* Get the hotels from the route data after the resolver fetched them */
            _this.allHotels = response.data.allHotels;
            _this.pagedHotels = response.data.pagedHotels;
            var minPrice = _this.route.snapshot.queryParamMap.get('minPrice');
            var maxPrice = _this.route.snapshot.queryParamMap.get('maxPrice');
            _this.filters = {
                floorPrice: response.data.floorPrice,
                ceilPrice: response.data.ceilPrice,
                minPrice: minPrice ? minPrice : response.data.floorPrice,
                maxPrice: maxPrice ? maxPrice : response.data.ceilPrice,
                wifi: _this.route.snapshot.queryParamMap.get('wifi') === 'true',
                petsAllowed: _this.route.snapshot.queryParamMap.get('petsAllowed') === 'true',
                bar: _this.route.snapshot.queryParamMap.get('bar') === 'true',
                spa: _this.route.snapshot.queryParamMap.get('spa') === 'true',
                gym: _this.route.snapshot.queryParamMap.get('gym') === 'true',
                roomService: _this.route.snapshot.queryParamMap.get('roomService') === 'true',
                restaurant: _this.route.snapshot.queryParamMap.get('restaurant') === 'true',
                parking: _this.route.snapshot.queryParamMap.get('parking') === 'true',
                swimmingPool: _this.route.snapshot.queryParamMap.get('swimmingPool') === 'true',
            };
        });
    }
    SearchResultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mapsAPILoader.load().then(function () {
            _this.geoCoder = new google.maps.Geocoder();
        });
    };
    SearchResultsComponent.prototype.hotelNavigate = function (hotelId) {
        this.router.navigate(['/hotels/', hotelId], {
            queryParamsHandling: 'merge'
        });
    };
    SearchResultsComponent.prototype.onPageIndexChange = function ($event) {
        this.router.navigate(['/search'], {
            queryParams: {
                page: $event - 1,
                size: 5
            },
            queryParamsHandling: 'merge'
        });
    };
    SearchResultsComponent.prototype.onCircleRadiusChange = function (radius) {
        this.router.navigate(['/search'], {
            queryParams: {
                radius: radius / 1000,
                page: 0
            },
            queryParamsHandling: 'merge'
        });
    };
    SearchResultsComponent.prototype.onCenterChange = function (event) {
        var _this = this;
        this.geoCoder.geocode({ location: { lat: event.lat, lng: event.lng } }, function (results, status) {
            if (status === 'OK') {
                results.map(function (address) {
                    if (address.types.some(function (r) { return r === 'administrative_area_level_4'; })) {
                        if (address) {
                            _this.ngZone.run(function () {
                                _this.router.navigate(['/search'], {
                                    queryParams: {
                                        page: 0,
                                        destination: address.formatted_address,
                                        lat: event.lat,
                                        lng: event.lng,
                                    },
                                    queryParamsHandling: 'merge'
                                });
                            });
                        }
                        else {
                            console.error('No results found');
                        }
                    }
                });
            }
            else {
                console.error('Geocoder failed due to: ' + status);
                _this.ngZone.run(function () {
                    _this.router.navigate(['/search'], {
                        queryParams: {
                            page: 0,
                            destination: _this.destination,
                            lat: event.lat,
                            lng: event.lng,
                        },
                        queryParamsHandling: 'merge'
                    });
                });
            }
        });
    };
    SearchResultsComponent.prototype.selectMarker = function (infoWindow) {
        if (this.previousInfoWindow == null) {
            this.previousInfoWindow = infoWindow;
        }
        else {
            this.infoWindowOpened = infoWindow;
            this.previousInfoWindow.close();
        }
        this.previousInfoWindow = infoWindow;
    };
    SearchResultsComponent.prototype.closeWindow = function () {
        if (this.previousInfoWindow != null) {
            this.previousInfoWindow.close();
        }
    };
    SearchResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search-results.component.html */ "./src/app/main/modules/search-results/search-results.component.html"),
            styles: [__webpack_require__(/*! ./search-results.component.scss */ "./src/app/main/modules/search-results/search-results.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ng2_simple_smooth_scroll__WEBPACK_IMPORTED_MODULE_5__["SimpleSmoothScrollService"],
            _shared_services_routing_state__WEBPACK_IMPORTED_MODULE_6__["RoutingState"],
            _agm_core__WEBPACK_IMPORTED_MODULE_8__["MapsAPILoader"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], SearchResultsComponent);
    return SearchResultsComponent;
}());



/***/ }),

/***/ "./src/app/main/modules/search-results/search-results.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/main/modules/search-results/search-results.module.ts ***!
  \**********************************************************************/
/*! exports provided: SearchResultsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultsModule", function() { return SearchResultsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _search_results_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-results-routing.module */ "./src/app/main/modules/search-results/search-results-routing.module.ts");
/* harmony import */ var _components_filters_filters_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/filters/filters.component */ "./src/app/main/modules/search-results/components/filters/filters.component.ts");
/* harmony import */ var _search_results_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-results.component */ "./src/app/main/modules/search-results/search-results.component.ts");
/* harmony import */ var _components_hotel_item_hotel_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/hotel-item/hotel-item.component */ "./src/app/main/modules/search-results/components/hotel-item/hotel-item.component.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_components_search_widget_search_widget_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/search-widget/search-widget.component */ "./src/app/shared/components/search-widget/search-widget.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var ng5_slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng5-slider */ "./node_modules/ng5-slider/esm5/ng5-slider.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _agm_js_marker_clusterer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @agm/js-marker-clusterer */ "./node_modules/@agm/js-marker-clusterer/index.js");
















var SearchResultsModule = /** @class */ (function () {
    function SearchResultsModule() {
    }
    SearchResultsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _search_results_component__WEBPACK_IMPORTED_MODULE_5__["SearchResultsComponent"],
                _components_filters_filters_component__WEBPACK_IMPORTED_MODULE_4__["FiltersComponent"],
                _components_hotel_item_hotel_item_component__WEBPACK_IMPORTED_MODULE_6__["HotelItemComponent"],
                _shared_components_search_widget_search_widget_component__WEBPACK_IMPORTED_MODULE_9__["SearchWidgetComponent"]
            ],
            exports: [
                _components_filters_filters_component__WEBPACK_IMPORTED_MODULE_4__["FiltersComponent"],
                _shared_components_search_widget_search_widget_component__WEBPACK_IMPORTED_MODULE_9__["SearchWidgetComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _search_results_routing_module__WEBPACK_IMPORTED_MODULE_3__["SearchResultsRoutingModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_7__["BsDropdownModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_10__["NgZorroAntdModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_11__["AngularFontAwesomeModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_12__["AgmCoreModule"],
                _agm_js_marker_clusterer__WEBPACK_IMPORTED_MODULE_15__["AgmJsMarkerClustererModule"],
                ng5_slider__WEBPACK_IMPORTED_MODULE_13__["Ng5SliderModule"],
                ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_14__["GooglePlaceModule"]
            ]
        })
    ], SearchResultsModule);
    return SearchResultsModule;
}());



/***/ }),

/***/ "./src/app/shared/components/search-widget/search-widget.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/search-widget/search-widget.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search-widget\">\n  <form (ngSubmit)=\"submit(form.value)\" [formGroup]=\"form\" class=\"form-validate\">\n    <h4 id=\"searchLabel\">Search</h4>\n\n    <!--Google place-->\n    <div class=\"form-group\">\n      <div class=\"controls\">\n        <div class=\"control-label\">\n          <label for=\"destination\">Destination:</label>\n        </div>\n        <input\n          id=\"destination\"\n          ngx-google-places-autocomplete\n          formControlName=\"destination\"\n          [options]='placesOptions'\n          #placesRef=\"ngx-places\"\n          (onAddressChange)=\"handleCheckAddressChange($event)\"\n          (input)=\"onPlaceChange(place.value)\"\n          type=\"text\"\n          class=\"form-control\"\n          placeholder=\"Where are you going?\"\n          aria-label=\"place\"\n          aria-describedby=\"basic-addon1\"\n          #place>\n      </div>\n    </div>\n\n    <!--Check-in/out dates-->\n    <div formGroupName=\"daterangeGroup\">\n      <div class=\"form-group\">\n        <div class=\"controls\">\n          <div class=\"control-label\">\n            <label for=\"startDate\">Check-In Date:</label>\n          </div>\n          <nz-date-picker\n            formControlName=\"checkin\"\n            id=\"startDate\"\n            nzFormat=\"yyyy-MM-dd\"\n            nzPlaceHolder=\"Start\"\n          >\n          </nz-date-picker>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <div class=\"controls\">\n          <div class=\"control-label\">\n            <label for=\"endDate\">Check-Out Date:</label>\n          </div>\n          <nz-date-picker\n            formControlName=\"checkout\"\n            id=\"endDate\"\n            nzFormat=\"yyyy-MM-dd\"\n            nzPlaceHolder=\"End\"\n          >\n          </nz-date-picker>\n        </div>\n      </div>\n    </div>\n\n    <!--Distance radius-->\n    <div class=\"form-group\" style=\"margin-bottom: 10px;\">\n      <div class=\"controls\">\n        <div class=\"control-label\">\n          <label for=\"visitors\">Distance radius:</label>\n        </div>\n        <select class=\"custom-select\" formControlName=\"radius\">\n          <option *ngIf=\"!radiusOptions.includes(radius)\"\n                  [ngValue]=\"radius\">~{{radius | number:'1.0-0'}} km\n          </option>\n          <option\n            *ngFor=\"let number of radiusOptions\"\n            [ngValue]=\"number\">{{number}} km\n          </option>\n        </select>\n      </div>\n    </div>\n\n    <!--Visitors-->\n    <div class=\"form-group\">\n      <div class=\"controls\">\n        <div class=\"control-label\">\n          <label for=\"visitors\">Visitors:</label>\n        </div>\n        <input\n          min=\"1\"\n          max=\"15\"\n          id=\"visitors\"\n          type=\"number\"\n          class=\"form-control\"\n          placeholder=\"Visitors\"\n          formControlName=\"visitors\"\n          aria-label=\"place\"\n          aria-describedby=\"basic-addon1\">\n      </div>\n    </div>\n\n    <br/>\n\n    <div class=\"text-right\">\n      <button\n        [disabled]=\"!form.valid || progress\"\n        type=\"submit\"\n        class=\"btn btn-primary\">\n        <fa *ngIf=\"progress\" name=\"cog\" animation=\"spin\"></fa>\n        <fa *ngIf=\"!progress\" name=\"search\"></fa>\n        &nbsp;\n        Search\n      </button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/search-widget/search-widget.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/search-widget/search-widget.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-widget {\n  width: 264px;\n  padding: 12px;\n  background-color: #febb02;\n  border-radius: 3px;\n  border: 1px solid #e2aa11; }\n\ninput {\n  margin-bottom: 0.5em;\n  border: 1px solid #ffffff; }\n\n.form-group {\n  margin: 0; }\n\n.form-control:focus {\n  border-color: #FFC107;\n  box-shadow: 0 0 0 0.2rem rgba(255, 152, 0, 0.3); }\n\n#searchLabel {\n  margin-left: 0.5em; }\n\n#destinationInput {\n  height: 1.6em; }\n\nnz-date-picker {\n  margin-bottom: 1em; }\n\nlabel {\n  font-size: larger;\n  font-weight: 600; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21zaS9wcm9qZWN0cy9XZWJzdG9ybVByb2plY3RzL3JlbnQtd2ViLWFwcC9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3NlYXJjaC13aWRnZXQvc2VhcmNoLXdpZGdldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQix5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxvQkFBb0I7RUFDcEIseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsU0FBUyxFQUFBOztBQUdYO0VBQ0UscUJBQXFCO0VBQ3JCLCtDQUErQyxFQUFBOztBQUdqRDtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGFBQWEsRUFBQTs7QUFHZjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3NlYXJjaC13aWRnZXQvc2VhcmNoLXdpZGdldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gtd2lkZ2V0IHtcbiAgd2lkdGg6IDI2NHB4O1xuICBwYWRkaW5nOiAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmViYjAyO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMmFhMTE7XG59XG5cbmlucHV0IHtcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjRkZDMTA3O1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgyNTUsIDE1MiwgMCwgMC4zKTtcbn1cblxuI3NlYXJjaExhYmVsIHtcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xufVxuXG4jZGVzdGluYXRpb25JbnB1dCB7XG4gIGhlaWdodDogMS42ZW07XG59XG5cbm56LWRhdGUtcGlja2VyIHtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuXG5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/shared/components/search-widget/search-widget.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/search-widget/search-widget.component.ts ***!
  \****************************************************************************/
/*! exports provided: SearchWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchWidgetComponent", function() { return SearchWidgetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);





var SearchWidgetComponent = /** @class */ (function () {
    function SearchWidgetComponent(fb, router, route) {
        this.fb = fb;
        this.router = router;
        this.route = route;
        // Used by the date range picker, don't touch it:
        this.endOpen = false;
        this.radiusOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 30, 40, 50, 60, 70, 80, 90, 100];
        this.form = this.fb.group({
            destination: ['', {
                    validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                }],
            daterangeGroup: this.fb.group({
                checkin: [null, {
                        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                    }],
                checkout: [null, {
                        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                    }]
            }),
            lat: [null, {
                    validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                }],
            lng: [null, {
                    validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                }],
            radius: [null, {
                    validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                }],
            visitors: [null, {
                    validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(15)]
                }]
        });
    }
    SearchWidgetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (response) {
            _this.destination = _this.route.snapshot.queryParamMap.get('destination') == null ? '' :
                _this.route.snapshot.queryParamMap.get('destination');
            _this.form.get('destination').setValue(_this.destination);
            _this.latitude = _this.route.snapshot.queryParamMap.get('lat') == null ? 37.983810 :
                parseFloat(_this.route.snapshot.queryParamMap.get('lat'));
            _this.form.get('lat').setValue(_this.latitude);
            _this.longitude = _this.route.snapshot.queryParamMap.get('lng') == null ? 23.727539 :
                parseFloat(_this.route.snapshot.queryParamMap.get('lng'));
            _this.form.get('lng').setValue(_this.longitude);
            _this.radius = _this.route.snapshot.queryParamMap.get('radius') == null ?
                5 : parseFloat(_this.route.snapshot.queryParamMap.get('radius'));
            _this.form.get('radius').setValue(_this.radius);
        });
        var checkin = this.checkin.split('-');
        var checkout = this.checkout.split('-');
        this.form.get('daterangeGroup').get('checkin').setValue(new Date(Number(checkin[0]), Number(checkin[1]) - 1, Number(checkin[2])));
        this.form.get('daterangeGroup').get('checkout').setValue(new Date(Number(checkout[0]), Number(checkout[1]) - 1, Number(checkout[2])));
        this.form.get('visitors').setValue(this.visitors);
        this.form.get('lat').setValue(this.latitude);
        this.form.get('lng').setValue(this.longitude);
        this.form.get('radius').setValue(this.radius);
    };
    SearchWidgetComponent.prototype.onPlaceChange = function (value) {
        if (value === '') {
            this.form.get('lat').setValue(null);
            this.form.get('lng').setValue(null);
        }
    };
    SearchWidgetComponent.prototype.handleCheckAddressChange = function (address) {
        this.form.get('lat').setValue(address.geometry.location.lat());
        this.form.get('lng').setValue(address.geometry.location.lng());
        this.form.get('destination').setValue(address.formatted_address);
    };
    SearchWidgetComponent.prototype.submit = function (value) {
        this.router.navigate(['/search'], {
            queryParams: {
                page: 0,
                checkin: moment__WEBPACK_IMPORTED_MODULE_4__(new Date(value.daterangeGroup.checkin)).format('YYYY-MM-DD'),
                checkout: moment__WEBPACK_IMPORTED_MODULE_4__(new Date(value.daterangeGroup.checkout)).format('YYYY-MM-DD'),
                destination: value.destination,
                lat: value.lat,
                lng: value.lng,
                radius: value.radius,
                visitors: value.visitors,
            },
            queryParamsHandling: 'merge'
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchWidgetComponent.prototype, "destination", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchWidgetComponent.prototype, "latitude", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchWidgetComponent.prototype, "longitude", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchWidgetComponent.prototype, "radius", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchWidgetComponent.prototype, "visitors", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchWidgetComponent.prototype, "checkin", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchWidgetComponent.prototype, "checkout", void 0);
    SearchWidgetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-widget',
            template: __webpack_require__(/*! ./search-widget.component.html */ "./src/app/shared/components/search-widget/search-widget.component.html"),
            styles: [__webpack_require__(/*! ./search-widget.component.scss */ "./src/app/shared/components/search-widget/search-widget.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SearchWidgetComponent);
    return SearchWidgetComponent;
}());



/***/ }),

/***/ "./src/app/shared/models/payload/searchRequest.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/models/payload/searchRequest.ts ***!
  \********************************************************/
/*! exports provided: SearchRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchRequest", function() { return SearchRequest; });
var SearchRequest = /** @class */ (function () {
    function SearchRequest(page, size, lat, lng, radius, checkin, checkout, visitors, wifi, swimmingPool, gym, spa, bar, restaurant, petsAllowed, parking, roomService, minPrice, maxPrice) {
        this.page = page;
        this.size = size;
        this.lat = lat;
        this.lng = lng;
        this.radius = radius;
        this.checkin = checkin;
        this.checkout = checkout;
        this.visitors = visitors;
        this.wifi = wifi;
        this.swimmingPool = swimmingPool;
        this.gym = gym;
        this.spa = spa;
        this.bar = bar;
        this.restaurant = restaurant;
        this.petsAllowed = petsAllowed;
        this.parking = parking;
        this.roomService = roomService;
        this.minPrice = minPrice;
        this.maxPrice = maxPrice;
    }
    return SearchRequest;
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
//# sourceMappingURL=default~main-main-module~modules-hotel-hotel-module~modules-search-results-search-results-module.js.map