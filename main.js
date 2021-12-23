/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/images/jupiter.svg */ "./src/images/jupiter.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../src/images/food-table.jpg */ "./src/images/food-table.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../src/images/food-table-2.jpg */ "./src/images/food-table-2.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --light-green-color: #f3fcf7;\r\n    --main-green-color: #06c167;\r\n    --background-color: #fffbf5;\r\n    --background-accent-color: #d7cbba;\r\n    --gold-color: #A6772F;\r\n    --gold-color-translucent: rgb(166, 119, 47, 0.5);\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nhtml {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\nbody {\r\n    width: 100vw;\r\n    height: 100%;\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    background-color: var(--background-color);\r\n}\r\n\r\n.background {\r\n    z-index: -1;\r\n    position: fixed;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 600px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n\r\n.container {\r\n    padding: 2em;\r\n    max-width: 1200px;\r\n    width: 100%;\r\n    flex: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n/* --- header --- */\r\n\r\nheader {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.nav-options {\r\n    display: flex;\r\n    gap: 2rem;\r\n}\r\n\r\n/* --- main --- */\r\n\r\nmain {\r\n    flex: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n}\r\n\r\n.hero,\r\n.menu,\r\n.contact {\r\n    display: flex;\r\n    flex: 1;\r\n    padding-top: 3rem;\r\n    gap: 3rem;\r\n}\r\n\r\n.hero {\r\n    max-height: 700px;\r\n}\r\n\r\n.slogan {\r\n    flex: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.hero-image-container {\r\n    flex: 1;\r\n    display: flex;\r\n}\r\n\r\n.hero-image {\r\n    margin: 0 10%;\r\n    flex: 1;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    border-radius: 10px;\r\n}\r\n\r\n.hero-image img {\r\n    display: none;\r\n}\r\n\r\n.hero-bubble-container {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.hero-bubble {\r\n    background-color: white;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 0.5rem;\r\n    border-radius: 5px;\r\n    box-shadow: 5px 10px var(--gold-color);\r\n}\r\n\r\n.hero-bubble[data-review-type=\"customer\"] {\r\n    margin-top: 100px;\r\n    margin-left: -150px;\r\n}\r\n\r\n.hero-bubble[data-review-type=\"winner\"] {\r\n    margin-top: 200px;\r\n    margin-left: -300px;\r\n}\r\n\r\n/* --- certifications --- */\r\n\r\n.certifications {\r\n    display: flex;\r\n    gap: 1rem;\r\n    justify-content: space-between;\r\n}\r\n\r\n.point {\r\n    flex: 1;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1rem;\r\n}\r\n\r\n/* --- menu --- */\r\n\r\n.menu-table {\r\n    flex: 0 1 auto;\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    gap: 3rem;\r\n}\r\n\r\n.menu-item {\r\n    background-color: white;\r\n    border-radius: 10px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 10px;\r\n}\r\n\r\n.menu-title,\r\n.contact-title {\r\n    font-weight: bold;\r\n    font-size: 20px;\r\n}\r\n\r\n.menu-price {\r\n    font-style: italic;\r\n}\r\n\r\n/* --- contact us --- */\r\n\r\n.contact {\r\n    flex-direction: column;\r\n}\r\n\r\n.contact-table {\r\n    display: flex;\r\n    gap: 2rem;\r\n}\r\n\r\n.contact-item {\r\n    flex: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.contact-title {\r\n    width: 90%;\r\n    text-align: center;\r\n    border-bottom: 1px solid black;\r\n}\r\n\r\n.contact-description p {\r\n    text-align: center;\r\n}\r\n\r\n.contact-image-container {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.contact-image {\r\n    width: 100%;\r\n    height: 500px;\r\n    overflow: hidden;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-position: bottom;\r\n    border-radius: 10px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.contact-goodbye {\r\n    width: 100%;\r\n    height: 100%;\r\n    flex: 1;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    color: white;\r\n    background-color: var(--gold-color-translucent);\r\n}\r\n\r\n.contact-goodbye h1 {\r\n    text-align: center;\r\n}\r\n\r\n/* --- footer --- */\r\n\r\nfooter {\r\n    width: 100%;\r\n    background-color: var(--gold-color);\r\n    color: white;\r\n    font-size: 12px;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    padding: 0.5rem;\r\n}\r\n\r\nfooter a {\r\n    text-decoration: none;\r\n    color: white;\r\n}\r\n\r\nfooter a:hover {\r\n    text-decoration: underline;\r\n}\r\n\r\n/* --- buttons --- */\r\n\r\nbutton {\r\n    box-shadow: none;\r\n    border: none;\r\n    outline: none;\r\n    font-family: inherit;\r\n    font-size: inherit;\r\n    background: none;\r\n    cursor: pointer;\r\n}\r\n\r\nbutton.active {\r\n    text-decoration: underline;\r\n    cursor: auto;\r\n}\r\n\r\n.get-started {\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n    font-size: 20px;\r\n    color: white;\r\n    background-color: var(--gold-color);\r\n}\r\n\r\n/* --- mobile --- */\r\n\r\n@media screen and (max-width: 900px) {\r\n\r\n    .hero-bubble[data-review-type=\"winner\"] {\r\n        margin-top: 200px;\r\n        margin-left: -170px;\r\n    }\r\n\r\n    .certifications {\r\n        flex-direction: column;\r\n    }\r\n\r\n    .point {\r\n        flex-wrap: nowrap;\r\n        justify-content: flex-start;\r\n    }\r\n\r\n    .hero-image {\r\n        margin: 0;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 700px) {\r\n\r\n    html, body {\r\n        height: auto;\r\n    }\r\n\r\n    .hero {\r\n        flex-direction: column;\r\n        max-height: none;\r\n    }\r\n\r\n    .slogan {\r\n        flex: none;\r\n        align-items: center;\r\n    }\r\n\r\n    .slogan h1,\r\n    .slogan p {\r\n        text-align: center;\r\n    }\r\n\r\n    .hero-image-container {\r\n        flex: none;\r\n        max-width: 100%;\r\n        height: auto;\r\n    }\r\n\r\n    .hero-image {\r\n        max-width: 100%;\r\n        background: none;\r\n        background-image: none;\r\n        overflow: hidden;\r\n    }\r\n\r\n    .hero-image img {\r\n        width: 100%;\r\n        height: auto;\r\n        display: block;\r\n    }\r\n\r\n    .menu-table {\r\n        display: grid;\r\n        grid-template-columns: 1fr;\r\n        grid-auto-rows: 1fr;\r\n    }\r\n\r\n    .contact-table {\r\n        flex-direction: column;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n    --light-green-color: #f3fcf7;\r\n    --main-green-color: #06c167;\r\n    --background-color: #fffbf5;\r\n    --background-accent-color: #d7cbba;\r\n    --gold-color: #A6772F;\r\n    --gold-color-translucent: rgb(166, 119, 47, 0.5);\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nhtml {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\nbody {\r\n    width: 100vw;\r\n    height: 100%;\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    background-color: var(--background-color);\r\n}\r\n\r\n.background {\r\n    z-index: -1;\r\n    position: fixed;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 600px;\r\n    background-image: url('../src/images/jupiter.svg');\r\n}\r\n\r\n.container {\r\n    padding: 2em;\r\n    max-width: 1200px;\r\n    width: 100%;\r\n    flex: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n/* --- header --- */\r\n\r\nheader {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.nav-options {\r\n    display: flex;\r\n    gap: 2rem;\r\n}\r\n\r\n/* --- main --- */\r\n\r\nmain {\r\n    flex: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n}\r\n\r\n.hero,\r\n.menu,\r\n.contact {\r\n    display: flex;\r\n    flex: 1;\r\n    padding-top: 3rem;\r\n    gap: 3rem;\r\n}\r\n\r\n.hero {\r\n    max-height: 700px;\r\n}\r\n\r\n.slogan {\r\n    flex: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.hero-image-container {\r\n    flex: 1;\r\n    display: flex;\r\n}\r\n\r\n.hero-image {\r\n    margin: 0 10%;\r\n    flex: 1;\r\n    background-image: url('../src/images/food-table.jpg');\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    border-radius: 10px;\r\n}\r\n\r\n.hero-image img {\r\n    display: none;\r\n}\r\n\r\n.hero-bubble-container {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.hero-bubble {\r\n    background-color: white;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 0.5rem;\r\n    border-radius: 5px;\r\n    box-shadow: 5px 10px var(--gold-color);\r\n}\r\n\r\n.hero-bubble[data-review-type=\"customer\"] {\r\n    margin-top: 100px;\r\n    margin-left: -150px;\r\n}\r\n\r\n.hero-bubble[data-review-type=\"winner\"] {\r\n    margin-top: 200px;\r\n    margin-left: -300px;\r\n}\r\n\r\n/* --- certifications --- */\r\n\r\n.certifications {\r\n    display: flex;\r\n    gap: 1rem;\r\n    justify-content: space-between;\r\n}\r\n\r\n.point {\r\n    flex: 1;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1rem;\r\n}\r\n\r\n/* --- menu --- */\r\n\r\n.menu-table {\r\n    flex: 0 1 auto;\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    gap: 3rem;\r\n}\r\n\r\n.menu-item {\r\n    background-color: white;\r\n    border-radius: 10px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 10px;\r\n}\r\n\r\n.menu-title,\r\n.contact-title {\r\n    font-weight: bold;\r\n    font-size: 20px;\r\n}\r\n\r\n.menu-price {\r\n    font-style: italic;\r\n}\r\n\r\n/* --- contact us --- */\r\n\r\n.contact {\r\n    flex-direction: column;\r\n}\r\n\r\n.contact-table {\r\n    display: flex;\r\n    gap: 2rem;\r\n}\r\n\r\n.contact-item {\r\n    flex: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.contact-title {\r\n    width: 90%;\r\n    text-align: center;\r\n    border-bottom: 1px solid black;\r\n}\r\n\r\n.contact-description p {\r\n    text-align: center;\r\n}\r\n\r\n.contact-image-container {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.contact-image {\r\n    width: 100%;\r\n    height: 500px;\r\n    overflow: hidden;\r\n    background-image: url('../src/images/food-table-2.jpg');\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-position: bottom;\r\n    border-radius: 10px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.contact-goodbye {\r\n    width: 100%;\r\n    height: 100%;\r\n    flex: 1;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    color: white;\r\n    background-color: var(--gold-color-translucent);\r\n}\r\n\r\n.contact-goodbye h1 {\r\n    text-align: center;\r\n}\r\n\r\n/* --- footer --- */\r\n\r\nfooter {\r\n    width: 100%;\r\n    background-color: var(--gold-color);\r\n    color: white;\r\n    font-size: 12px;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    padding: 0.5rem;\r\n}\r\n\r\nfooter a {\r\n    text-decoration: none;\r\n    color: white;\r\n}\r\n\r\nfooter a:hover {\r\n    text-decoration: underline;\r\n}\r\n\r\n/* --- buttons --- */\r\n\r\nbutton {\r\n    box-shadow: none;\r\n    border: none;\r\n    outline: none;\r\n    font-family: inherit;\r\n    font-size: inherit;\r\n    background: none;\r\n    cursor: pointer;\r\n}\r\n\r\nbutton.active {\r\n    text-decoration: underline;\r\n    cursor: auto;\r\n}\r\n\r\n.get-started {\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n    font-size: 20px;\r\n    color: white;\r\n    background-color: var(--gold-color);\r\n}\r\n\r\n/* --- mobile --- */\r\n\r\n@media screen and (max-width: 900px) {\r\n\r\n    .hero-bubble[data-review-type=\"winner\"] {\r\n        margin-top: 200px;\r\n        margin-left: -170px;\r\n    }\r\n\r\n    .certifications {\r\n        flex-direction: column;\r\n    }\r\n\r\n    .point {\r\n        flex-wrap: nowrap;\r\n        justify-content: flex-start;\r\n    }\r\n\r\n    .hero-image {\r\n        margin: 0;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 700px) {\r\n\r\n    html, body {\r\n        height: auto;\r\n    }\r\n\r\n    .hero {\r\n        flex-direction: column;\r\n        max-height: none;\r\n    }\r\n\r\n    .slogan {\r\n        flex: none;\r\n        align-items: center;\r\n    }\r\n\r\n    .slogan h1,\r\n    .slogan p {\r\n        text-align: center;\r\n    }\r\n\r\n    .hero-image-container {\r\n        flex: none;\r\n        max-width: 100%;\r\n        height: auto;\r\n    }\r\n\r\n    .hero-image {\r\n        max-width: 100%;\r\n        background: none;\r\n        background-image: none;\r\n        overflow: hidden;\r\n    }\r\n\r\n    .hero-image img {\r\n        width: 100%;\r\n        height: auto;\r\n        display: block;\r\n    }\r\n\r\n    .menu-table {\r\n        display: grid;\r\n        grid-template-columns: 1fr;\r\n        grid-auto-rows: 1fr;\r\n    }\r\n\r\n    .contact-table {\r\n        flex-direction: column;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createContactPage": () => (/* binding */ createContactPage)
/* harmony export */ });
/* harmony import */ var _page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page.js */ "./src/page.js");


function createContactPage() {
    let main = document.querySelector('main');
    main.textContent = '';
    let contact = (0,_page_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', ['contact'], null, main);

    (0,_page_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', ['contact-table'], null, contact);
    makeContactItem(_page_js__WEBPACK_IMPORTED_MODULE_0__.TEXT.CONTACT.LOCATION.TITLE, _page_js__WEBPACK_IMPORTED_MODULE_0__.TEXT.CONTACT.LOCATION.DESCRIPTION);
    makeContactItem(_page_js__WEBPACK_IMPORTED_MODULE_0__.TEXT.CONTACT.OPENING_HOURS.TITLE, _page_js__WEBPACK_IMPORTED_MODULE_0__.TEXT.CONTACT.OPENING_HOURS.DESCRIPTION);
    makeContactItem(_page_js__WEBPACK_IMPORTED_MODULE_0__.TEXT.CONTACT.BOOKING.TITLE, _page_js__WEBPACK_IMPORTED_MODULE_0__.TEXT.CONTACT.BOOKING.DESCRIPTION);

    let contactImageContainer = (0,_page_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', ['contact-image-container'], null, contact);
    let contactImage = (0,_page_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', ['contact-image'], null, contactImageContainer);
    let contactGoodbye = (0,_page_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', ['contact-goodbye'], null, contactImage);
    (0,_page_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('h1', null, _page_js__WEBPACK_IMPORTED_MODULE_0__.TEXT.GOODBYE, contactGoodbye);
}

function makeContactItem(title, description) {
    let contactTable = document.querySelector('.contact-table');
    let contactItem = (0,_page_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', ['contact-item'], null, contactTable);
    (0,_page_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', ['contact-title'], title, contactItem);
    let contactDescription = (0,_page_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', ['contact-description'], null, contactItem);
    let contactParagraph = (0,_page_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('p', null, description, contactDescription);
    contactParagraph.innerHTML = contactParagraph.innerHTML.replace(/\n/g, '<br />');
}



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHomePage": () => (/* binding */ createHomePage)
/* harmony export */ });
/* harmony import */ var _page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page.js */ "./src/page.js");


function createHomePage() {
    let main = document.querySelector('main');
    main.textContent = '';

    let hero = (0,_page_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', ['hero'], null, main);

    let slogan = (0,_page_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', ['slogan'], null, hero);
    (0,_page_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('h1', null, _page_js__WEBPACK_IMPORTED_MODULE_0__.TEXT.COMPANY_SLOGAN, slogan);
    (0,_page_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('p', null, _page_js__WEBPACK_IMPORTED_MODULE_0__.TEXT.COMPANY_MISSION, slogan);
    let sloganButtonDiv = (0,_page_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', null, null, slogan);
    let sloganButton = (0,_page_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('button', ['get-started'], 'Get Started', sloganButtonDiv);
    sloganButton.addEventListener('click', function () {
        let menuButton = document.querySelector('#button-menu');
        menuButton.click();
    });

    let heroImageContainer = (0,_page_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', ['hero-image-container'], null, hero);
    let heroImageDiv = (0,_page_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', ['hero-image'], null, heroImageContainer);
    let heroImage = (0,_page_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('img', null, null, heroImageDiv);
    heroImage.src = '../src/images/food-table.jpg';

    let heroBubbleContainer = (0,_page_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', ['hero-bubble-container'], null, heroImageContainer);
    let heroBubbleCustomer = (0,_page_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', ['hero-bubble'], _page_js__WEBPACK_IMPORTED_MODULE_0__.TEXT.CUSTOMER_BUBBLE, heroBubbleContainer);
    heroBubbleCustomer.dataset.reviewType = 'customer';
    let heroBubbleWinner = (0,_page_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', ['hero-bubble'], _page_js__WEBPACK_IMPORTED_MODULE_0__.TEXT.WINNER_BUBBLE, heroBubbleContainer);
    heroBubbleWinner.dataset.reviewType = 'winner';

    let certifications = (0,_page_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', ['certifications'], null, main);
    let certificationPoints = [
        { imageSource: '../src/images/food-service.png', text: _page_js__WEBPACK_IMPORTED_MODULE_0__.TEXT.FOOD_SERVICE_POINT },
        { imageSource: '../src/images/vegan.png', text: _page_js__WEBPACK_IMPORTED_MODULE_0__.TEXT.VEGAN_POINT },
        { imageSource: '../src/images/vegetables-bag.png', text: _page_js__WEBPACK_IMPORTED_MODULE_0__.TEXT.LOCAL_POINT },
    ];
    certificationPoints.forEach(item => {
        let point = (0,_page_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', ['point'], null, certifications);
        let imageDiv = (0,_page_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', null, null, point);
        let image = (0,_page_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('img', null, null, imageDiv);
        image.src = item.imageSource;
        let commentDiv = (0,_page_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', null, null, point);
        (0,_page_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('p', null, item.text, commentDiv);
    });
}



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMenuPage": () => (/* binding */ createMenuPage)
/* harmony export */ });
/* harmony import */ var _page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page.js */ "./src/page.js");


function createMenuPage() {
    let main = document.querySelector('main');
    main.textContent = '';
    let menu = (0,_page_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', ['menu'], null, main);
    let menuTableDiv = (0,_page_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', null, null, menu);
    (0,_page_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', ['menu-table'], null, menuTableDiv);
    makeMenuItem(_page_js__WEBPACK_IMPORTED_MODULE_0__.TEXT.MENU.SURPRISE_ME.TITLE, _page_js__WEBPACK_IMPORTED_MODULE_0__.TEXT.MENU.SURPRISE_ME.PRICE, _page_js__WEBPACK_IMPORTED_MODULE_0__.TEXT.MENU.SURPRISE_ME.DESCRIPTION);
    makeMenuItem(_page_js__WEBPACK_IMPORTED_MODULE_0__.TEXT.MENU.FEED_ME.TITLE, _page_js__WEBPACK_IMPORTED_MODULE_0__.TEXT.MENU.FEED_ME.PRICE, _page_js__WEBPACK_IMPORTED_MODULE_0__.TEXT.MENU.FEED_ME.DESCRIPTION);
    makeMenuItem(_page_js__WEBPACK_IMPORTED_MODULE_0__.TEXT.MENU.DINE_ME.TITLE, _page_js__WEBPACK_IMPORTED_MODULE_0__.TEXT.MENU.DINE_ME.PRICE, _page_js__WEBPACK_IMPORTED_MODULE_0__.TEXT.MENU.DINE_ME.DESCRIPTION);
    makeMenuItem(_page_js__WEBPACK_IMPORTED_MODULE_0__.TEXT.MENU.INDULGE_ME.TITLE, _page_js__WEBPACK_IMPORTED_MODULE_0__.TEXT.MENU.INDULGE_ME.PRICE, _page_js__WEBPACK_IMPORTED_MODULE_0__.TEXT.MENU.INDULGE_ME.DESCRIPTION);
}

function makeMenuItem(title, price, description) {
    let menuTable = document.querySelector('.menu-table');
    let menuItem = (0,_page_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', ['menu-item'], null, menuTable);
    (0,_page_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', ['menu-title'], title, menuItem);
    (0,_page_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', ['menu-price'], price, menuItem);
    let menuDescription = (0,_page_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('div', ['menu-description'], null, menuItem);
    (0,_page_js__WEBPACK_IMPORTED_MODULE_0__.makeElement)('p', null, description, menuDescription);
}



/***/ }),

/***/ "./src/page.js":
/*!*********************!*\
  !*** ./src/page.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TEXT": () => (/* binding */ TEXT),
/* harmony export */   "createPage": () => (/* binding */ createPage),
/* harmony export */   "makeElement": () => (/* binding */ makeElement)
/* harmony export */ });
const TEXT = {
    COMPANY_NAME: 'Gatsby\u2019s',
    COMPANY_SLOGAN: 'Let Us Serve You',
    COMPANY_MISSION: 'We strive to provide a space where guests can connect with themselves ' +
        'and enjoy local delicacies.',
    CUSTOMER_BUBBLE: 'Voted best local venue of 2021',
    WINNER_BUBBLE: '2 Michelin stars \u2605\u2605',
    FOOD_SERVICE_POINT: 'Our servers practice social distancing to ensure you ' +
        'and your guests have a comfortable dining experience.',
    VEGAN_POINT: 'We try our best to accommodate our diners\' dietary requirements.',
    LOCAL_POINT: 'We believe is supporting local farmers and producers. ' +
        'We strive to source locally whenever possible.',
    MENU: {
        SURPRISE_ME: {
            TITLE: 'Surprise Me',
            PRICE: '$65 per head',
            DESCRIPTION: 'Our Surprise Me menu is a shared banquet-style feast ' +
                'that features a daily selection of the markets\' best and freshest, ' +
                'selected by our executive chef. At least 3 dishes will be served for ' +
                'each course and will include vegetable-based, seafood and meat options.'
        },
        FEED_ME: {
            TITLE: 'Feed Me',
            PRICE: '$80 per head',
            DESCRIPTION: 'Our Feed Me menu starts with a shared entree, followed ' +
                'by an a la carte main and finishing with a banquet-style dessert table ' +
                'and cheese platters. Main options are a selection of vegetable-based, seafood and meat dishes.'
        },
        DINE_ME: {
            TITLE: 'Dine Me',
            PRICE: '$90 per head',
            DESCRIPTION: 'Our Dine Me menu is an all a la carte menu, with your choice of entree, main and dessert. ' +
                'Entree and main options are a selection of vegetable-based, seafood and meat dishes.'
        },
        INDULGE_ME: {
            TITLE: 'Indulge Me',
            PRICE: 'Min. $105 per head, final price may vary',
            DESCRIPTION: 'Our Indulge Me menu is a degustation-style menu designed in ' +
                'consultation with our executive chef and our sommeliers. We will contact you ' +
                'to design the best menu for the night. This is a dinner-only menu and ' +
                'will be served throughout the course of 2-3 hours.'
        }
    },
    CONTACT: {
        LOCATION: {
            TITLE: 'Location',
            DESCRIPTION: '123 Main Street,\nPort Melbourne VIC 3207\nAustralia'
        },
        OPENING_HOURS: {
            TITLE: 'Opening Hours',
            DESCRIPTION: 'Thursday to Sunday\n12pm to midnight'
        },
        BOOKING: {
            TITLE: 'Booking',
            DESCRIPTION: 'Email: booking@gatsbys.com.au\nPhone: 01 9123 4567'
        }
    },
    GOODBYE: 'We hope to see you soon!'
};

function createPage() {
    createHeader();
    createMain();
    createFooter();
}

function createHeader() {
    let container = document.querySelector('.container');
    let header = makeElement('header', null, null, container);
    let logoDiv = makeElement('div', ['logo'], null, header);
    makeElement('h2', null, TEXT.COMPANY_NAME, logoDiv);

    let navigation = makeElement('div', ['navigation'], null, header);
    let navOptions = makeElement('div', ['nav-options'], null, navigation);

    let homeButton = makeElement('button', ['nav-page', 'active'], 'Home', navOptions);
    homeButton.id = 'button-home';
    let menuButton = makeElement('button', ['nav-page'], 'Menu', navOptions);
    menuButton.id = 'button-menu';
    let contactButton = makeElement('button', ['nav-page'], 'Contact us', navOptions);
    contactButton.id = 'button-contact';
}

function createMain() {
    let container = document.querySelector('.container');
    makeElement('main', null, null, container);
}

function createFooter() {
    let body = document.querySelector('body');
    let footer = makeElement('footer', null, null, body);
    let repoLink = makeElement('a', null, 'Github repository', footer);
    repoLink.href = 'https://github.com/dllddlld/odin-project-restaurant';
    let iconsLink = makeElement('a', null, 'Icons by icons8', footer);
    iconsLink.href = 'https://icons8.com/icon/set/food/ios';
    let photographyLink = makeElement('a', null, 'Photography by Brooke Lark', footer);
    photographyLink.href = 'https://unsplash.com/@brookelark';
}

function makeElement(type, classes, text, parent) {
    let el = document.createElement(type);
    if (classes) {
        classes.forEach(className => {
            el.classList.add(className);
        });
    }
    if (text) {
        el.textContent = text;
    }
    if (parent) {
        parent.appendChild(el);
    }
    return el;
}



/***/ }),

/***/ "./src/images/food-table-2.jpg":
/*!*************************************!*\
  !*** ./src/images/food-table-2.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "31ee243d1167b0d286bc.jpg";

/***/ }),

/***/ "./src/images/food-table.jpg":
/*!***********************************!*\
  !*** ./src/images/food-table.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "144494aac02cd20259ea.jpg";

/***/ }),

/***/ "./src/images/jupiter.svg":
/*!********************************!*\
  !*** ./src/images/jupiter.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e7ac68e1089ce40a239a.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _page_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page.js */ "./src/page.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ "./src/contact.js");






(0,_page_js__WEBPACK_IMPORTED_MODULE_1__.createPage)();
addButtonListeners();

let homeButton = document.querySelector('#button-home');
homeButton.click();

function addButtonListeners() {
    let homeButton = document.querySelector('#button-home');
    homeButton.addEventListener('click', function() {
        navButtonEvent.bind(this)(_home_js__WEBPACK_IMPORTED_MODULE_2__.createHomePage);
    });
    let menuButton = document.querySelector('#button-menu');
    menuButton.addEventListener('click', function() {
        navButtonEvent.bind(this)(_menu_js__WEBPACK_IMPORTED_MODULE_3__.createMenuPage);
    });
    let contactButton = document.querySelector('#button-contact');
    contactButton.addEventListener('click', function() {
        navButtonEvent.bind(this)(_contact__WEBPACK_IMPORTED_MODULE_4__.createContactPage);
    });
}

function toggleButtons(button) {
    let navButtons = document.querySelectorAll('.nav-page');
    navButtons.forEach(navButton => {
        if (navButton !== button) {
            navButton.classList.remove('active');
            navButton.disabled = false;
        }
    });
    button.classList.add('active');
    button.disabled = true;
}

function navButtonEvent(navBtnFunction) {
    navBtnFunction();
    toggleButtons(this);
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxhQUFhLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sTUFBTSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsS0FBSyxNQUFNLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLGdDQUFnQyxxQ0FBcUMsb0NBQW9DLG9D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O0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50Ly4vc3JjL3BhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi1wcm9qZWN0LXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXByb2plY3QtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL29kaW4tcHJvamVjdC1yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvaW1hZ2VzL2p1cGl0ZXIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vc3JjL2ltYWdlcy9mb29kLXRhYmxlLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL3NyYy9pbWFnZXMvZm9vZC10YWJsZS0yLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgICAtLWxpZ2h0LWdyZWVuLWNvbG9yOiAjZjNmY2Y3O1xcclxcbiAgICAtLW1haW4tZ3JlZW4tY29sb3I6ICMwNmMxNjc7XFxyXFxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogI2ZmZmJmNTtcXHJcXG4gICAgLS1iYWNrZ3JvdW5kLWFjY2VudC1jb2xvcjogI2Q3Y2JiYTtcXHJcXG4gICAgLS1nb2xkLWNvbG9yOiAjQTY3NzJGO1xcclxcbiAgICAtLWdvbGQtY29sb3ItdHJhbnNsdWNlbnQ6IHJnYigxNjYsIDExOSwgNDcsIDAuNSk7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gICAgbWF4LWhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5iYWNrZ3JvdW5kIHtcXHJcXG4gICAgei1pbmRleDogLTE7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA2MDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmc6IDJlbTtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0gaGVhZGVyIC0tLSAqL1xcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1vcHRpb25zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0gbWFpbiAtLS0gKi9cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVybyxcXHJcXG4ubWVudSxcXHJcXG4uY29udGFjdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAzcmVtO1xcclxcbiAgICBnYXA6IDNyZW07XFxyXFxufVxcclxcblxcclxcbi5oZXJvIHtcXHJcXG4gICAgbWF4LWhlaWdodDogNzAwcHg7XFxyXFxufVxcclxcblxcclxcbi5zbG9nYW4ge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVyby1pbWFnZS1jb250YWluZXIge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVyby1pbWFnZSB7XFxyXFxuICAgIG1hcmdpbjogMCAxMCU7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm8taW1hZ2UgaW1nIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm8tYnViYmxlLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5oZXJvLWJ1YmJsZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDVweCAxMHB4IHZhcigtLWdvbGQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVyby1idWJibGVbZGF0YS1yZXZpZXctdHlwZT1cXFwiY3VzdG9tZXJcXFwiXSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTE1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVyby1idWJibGVbZGF0YS1yZXZpZXctdHlwZT1cXFwid2lubmVyXFxcIl0ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMDBweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IC0zMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tIGNlcnRpZmljYXRpb25zIC0tLSAqL1xcclxcblxcclxcbi5jZXJ0aWZpY2F0aW9ucyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9pbnQge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi8qIC0tLSBtZW51IC0tLSAqL1xcclxcblxcclxcbi5tZW51LXRhYmxlIHtcXHJcXG4gICAgZmxleDogMCAxIGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuICAgIGdhcDogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS10aXRsZSxcXHJcXG4uY29udGFjdC10aXRsZSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51LXByaWNlIHtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0gY29udGFjdCB1cyAtLS0gKi9cXHJcXG5cXHJcXG4uY29udGFjdCB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LXRhYmxlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1pdGVtIHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtdGl0bGUge1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtZGVzY3JpcHRpb24gcCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtaW1hZ2UtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LWltYWdlIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNTAwcHg7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtZ29vZGJ5ZSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdvbGQtY29sb3ItdHJhbnNsdWNlbnQpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1nb29kYnllIGgxIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0gZm9vdGVyIC0tLSAqL1xcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nb2xkLWNvbG9yKTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbmZvb3RlciBhIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciBhOmhvdmVyIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbi8qIC0tLSBidXR0b25zIC0tLSAqL1xcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uYWN0aXZlIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICAgIGN1cnNvcjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmdldC1zdGFydGVkIHtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdvbGQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0gbW9iaWxlIC0tLSAqL1xcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxyXFxuXFxyXFxuICAgIC5oZXJvLWJ1YmJsZVtkYXRhLXJldmlldy10eXBlPVxcXCJ3aW5uZXJcXFwiXSB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAyMDBweDtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTcwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNlcnRpZmljYXRpb25zIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnBvaW50IHtcXHJcXG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZXJvLWltYWdlIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcclxcblxcclxcbiAgICBodG1sLCBib2R5IHtcXHJcXG4gICAgICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVybyB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgbWF4LWhlaWdodDogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2xvZ2FuIHtcXHJcXG4gICAgICAgIGZsZXg6IG5vbmU7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zbG9nYW4gaDEsXFxyXFxuICAgIC5zbG9nYW4gcCB7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhlcm8taW1hZ2UtY29udGFpbmVyIHtcXHJcXG4gICAgICAgIGZsZXg6IG5vbmU7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhlcm8taW1hZ2Uge1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxyXFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZXJvLWltYWdlIGltZyB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5tZW51LXRhYmxlIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgICAgIGdyaWQtYXV0by1yb3dzOiAxZnI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNvbnRhY3QtdGFibGUge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgfVxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQiwyQkFBMkI7SUFDM0Isa0NBQWtDO0lBQ2xDLHFCQUFxQjtJQUNyQixnREFBZ0Q7QUFDcEQ7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsTUFBTTtJQUNOLFdB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QkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFlBQVk7SUFDWixtQ0FBbUM7QUFDdkM7O0FBRUEsbUJBQW1COztBQUVuQjs7SUFFSTtRQUNJLGlCQUFpQjtRQUNqQixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsMkJBQTJCO0lBQy9COztJQUVBO1FBQ0ksU0FBUztJQUNiO0FBQ0o7O0FBRUE7O0lBRUk7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksc0JBQXNCO1FBQ3RCLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLFVBQVU7UUFDVixtQkFBbUI7SUFDdkI7O0lBRUE7O1FBRUksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLGVBQWU7UUFDZixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixzQkFBc0I7UUFDdEIsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksV0FBVztRQUNYLFlBQVk7UUFDWixjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLDBCQUEwQjtRQUMxQixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxzQkFBc0I7SUFDMUI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAgIC0tbGlnaHQtZ3JlZW4tY29sb3I6ICNmM2ZjZjc7XFxyXFxuICAgIC0tbWFpbi1ncmVlbi1jb2xvcjogIzA2YzE2NztcXHJcXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmYmY1O1xcclxcbiAgICAtLWJhY2tncm91bmQtYWNjZW50LWNvbG9yOiAjZDdjYmJhO1xcclxcbiAgICAtLWdvbGQtY29sb3I6ICNBNjc3MkY7XFxyXFxuICAgIC0tZ29sZC1jb2xvci10cmFuc2x1Y2VudDogcmdiKDE2NiwgMTE5LCA0NywgMC41KTtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2tncm91bmQge1xcclxcbiAgICB6LWluZGV4OiAtMTtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDYwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3NyYy9pbWFnZXMvanVwaXRlci5zdmcnKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmc6IDJlbTtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0gaGVhZGVyIC0tLSAqL1xcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1vcHRpb25zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0gbWFpbiAtLS0gKi9cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVybyxcXHJcXG4ubWVudSxcXHJcXG4uY29udGFjdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAzcmVtO1xcclxcbiAgICBnYXA6IDNyZW07XFxyXFxufVxcclxcblxcclxcbi5oZXJvIHtcXHJcXG4gICAgbWF4LWhlaWdodDogNzAwcHg7XFxyXFxufVxcclxcblxcclxcbi5zbG9nYW4ge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVyby1pbWFnZS1jb250YWluZXIge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVyby1pbWFnZSB7XFxyXFxuICAgIG1hcmdpbjogMCAxMCU7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vc3JjL2ltYWdlcy9mb29kLXRhYmxlLmpwZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5oZXJvLWltYWdlIGltZyB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5oZXJvLWJ1YmJsZS1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVyby1idWJibGUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBib3gtc2hhZG93OiA1cHggMTBweCB2YXIoLS1nb2xkLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm8tYnViYmxlW2RhdGEtcmV2aWV3LXR5cGU9XFxcImN1c3RvbWVyXFxcIl0ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IC0xNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm8tYnViYmxlW2RhdGEtcmV2aWV3LXR5cGU9XFxcIndpbm5lclxcXCJdIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjAwcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAtMzAwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIC0tLSBjZXJ0aWZpY2F0aW9ucyAtLS0gKi9cXHJcXG5cXHJcXG4uY2VydGlmaWNhdGlvbnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvaW50IHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0gbWVudSAtLS0gKi9cXHJcXG5cXHJcXG4ubWVudS10YWJsZSB7XFxyXFxuICAgIGZsZXg6IDAgMSBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgICBnYXA6IDNyZW07XFxyXFxufVxcclxcblxcclxcbi5tZW51LWl0ZW0ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtdGl0bGUsXFxyXFxuLmNvbnRhY3QtdGl0bGUge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1wcmljZSB7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tIGNvbnRhY3QgdXMgLS0tICovXFxyXFxuXFxyXFxuLmNvbnRhY3Qge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC10YWJsZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtaXRlbSB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LXRpdGxlIHtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LWRlc2NyaXB0aW9uIHAge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LWltYWdlLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1pbWFnZSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDUwMHB4O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3NyYy9pbWFnZXMvZm9vZC10YWJsZS0yLmpwZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0LWdvb2RieWUge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nb2xkLWNvbG9yLXRyYW5zbHVjZW50KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtZ29vZGJ5ZSBoMSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tIGZvb3RlciAtLS0gKi9cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ29sZC1jb2xvcik7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgYSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgYTpob3ZlciB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0gYnV0dG9ucyAtLS0gKi9cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLmFjdGl2ZSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgICBjdXJzb3I6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5nZXQtc3RhcnRlZCB7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nb2xkLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogLS0tIG1vYmlsZSAtLS0gKi9cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcclxcblxcclxcbiAgICAuaGVyby1idWJibGVbZGF0YS1yZXZpZXctdHlwZT1cXFwid2lubmVyXFxcIl0ge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMjAwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogLTE3MHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jZXJ0aWZpY2F0aW9ucyB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wb2ludCB7XFxyXFxuICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVyby1pbWFnZSB7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXHJcXG5cXHJcXG4gICAgaHRtbCwgYm9keSB7XFxyXFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmhlcm8ge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIG1heC1oZWlnaHQ6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNsb2dhbiB7XFxyXFxuICAgICAgICBmbGV4OiBub25lO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2xvZ2FuIGgxLFxcclxcbiAgICAuc2xvZ2FuIHAge1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZXJvLWltYWdlLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICBmbGV4OiBub25lO1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZXJvLWltYWdlIHtcXHJcXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVyby1pbWFnZSBpbWcge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubWVudS10YWJsZSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICAgICAgICBncmlkLWF1dG8tcm93czogMWZyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb250YWN0LXRhYmxlIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IFRFWFQsIG1ha2VFbGVtZW50IH0gZnJvbSBcIi4vcGFnZS5qc1wiO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ29udGFjdFBhZ2UoKSB7XHJcbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcclxuICAgIG1haW4udGV4dENvbnRlbnQgPSAnJztcclxuICAgIGxldCBjb250YWN0ID0gbWFrZUVsZW1lbnQoJ2RpdicsIFsnY29udGFjdCddLCBudWxsLCBtYWluKTtcclxuXHJcbiAgICBtYWtlRWxlbWVudCgnZGl2JywgWydjb250YWN0LXRhYmxlJ10sIG51bGwsIGNvbnRhY3QpO1xyXG4gICAgbWFrZUNvbnRhY3RJdGVtKFRFWFQuQ09OVEFDVC5MT0NBVElPTi5USVRMRSwgVEVYVC5DT05UQUNULkxPQ0FUSU9OLkRFU0NSSVBUSU9OKTtcclxuICAgIG1ha2VDb250YWN0SXRlbShURVhULkNPTlRBQ1QuT1BFTklOR19IT1VSUy5USVRMRSwgVEVYVC5DT05UQUNULk9QRU5JTkdfSE9VUlMuREVTQ1JJUFRJT04pO1xyXG4gICAgbWFrZUNvbnRhY3RJdGVtKFRFWFQuQ09OVEFDVC5CT09LSU5HLlRJVExFLCBURVhULkNPTlRBQ1QuQk9PS0lORy5ERVNDUklQVElPTik7XHJcblxyXG4gICAgbGV0IGNvbnRhY3RJbWFnZUNvbnRhaW5lciA9IG1ha2VFbGVtZW50KCdkaXYnLCBbJ2NvbnRhY3QtaW1hZ2UtY29udGFpbmVyJ10sIG51bGwsIGNvbnRhY3QpO1xyXG4gICAgbGV0IGNvbnRhY3RJbWFnZSA9IG1ha2VFbGVtZW50KCdkaXYnLCBbJ2NvbnRhY3QtaW1hZ2UnXSwgbnVsbCwgY29udGFjdEltYWdlQ29udGFpbmVyKTtcclxuICAgIGxldCBjb250YWN0R29vZGJ5ZSA9IG1ha2VFbGVtZW50KCdkaXYnLCBbJ2NvbnRhY3QtZ29vZGJ5ZSddLCBudWxsLCBjb250YWN0SW1hZ2UpO1xyXG4gICAgbWFrZUVsZW1lbnQoJ2gxJywgbnVsbCwgVEVYVC5HT09EQllFLCBjb250YWN0R29vZGJ5ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1ha2VDb250YWN0SXRlbSh0aXRsZSwgZGVzY3JpcHRpb24pIHtcclxuICAgIGxldCBjb250YWN0VGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdC10YWJsZScpO1xyXG4gICAgbGV0IGNvbnRhY3RJdGVtID0gbWFrZUVsZW1lbnQoJ2RpdicsIFsnY29udGFjdC1pdGVtJ10sIG51bGwsIGNvbnRhY3RUYWJsZSk7XHJcbiAgICBtYWtlRWxlbWVudCgnZGl2JywgWydjb250YWN0LXRpdGxlJ10sIHRpdGxlLCBjb250YWN0SXRlbSk7XHJcbiAgICBsZXQgY29udGFjdERlc2NyaXB0aW9uID0gbWFrZUVsZW1lbnQoJ2RpdicsIFsnY29udGFjdC1kZXNjcmlwdGlvbiddLCBudWxsLCBjb250YWN0SXRlbSk7XHJcbiAgICBsZXQgY29udGFjdFBhcmFncmFwaCA9IG1ha2VFbGVtZW50KCdwJywgbnVsbCwgZGVzY3JpcHRpb24sIGNvbnRhY3REZXNjcmlwdGlvbik7XHJcbiAgICBjb250YWN0UGFyYWdyYXBoLmlubmVySFRNTCA9IGNvbnRhY3RQYXJhZ3JhcGguaW5uZXJIVE1MLnJlcGxhY2UoL1xcbi9nLCAnPGJyIC8+Jyk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZUNvbnRhY3RQYWdlIH07IiwiaW1wb3J0IHsgVEVYVCwgbWFrZUVsZW1lbnQgfSBmcm9tIFwiLi9wYWdlLmpzXCI7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVIb21lUGFnZSgpIHtcclxuICAgIGxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xyXG4gICAgbWFpbi50ZXh0Q29udGVudCA9ICcnO1xyXG5cclxuICAgIGxldCBoZXJvID0gbWFrZUVsZW1lbnQoJ2RpdicsIFsnaGVybyddLCBudWxsLCBtYWluKTtcclxuXHJcbiAgICBsZXQgc2xvZ2FuID0gbWFrZUVsZW1lbnQoJ2RpdicsIFsnc2xvZ2FuJ10sIG51bGwsIGhlcm8pO1xyXG4gICAgbWFrZUVsZW1lbnQoJ2gxJywgbnVsbCwgVEVYVC5DT01QQU5ZX1NMT0dBTiwgc2xvZ2FuKTtcclxuICAgIG1ha2VFbGVtZW50KCdwJywgbnVsbCwgVEVYVC5DT01QQU5ZX01JU1NJT04sIHNsb2dhbik7XHJcbiAgICBsZXQgc2xvZ2FuQnV0dG9uRGl2ID0gbWFrZUVsZW1lbnQoJ2RpdicsIG51bGwsIG51bGwsIHNsb2dhbik7XHJcbiAgICBsZXQgc2xvZ2FuQnV0dG9uID0gbWFrZUVsZW1lbnQoJ2J1dHRvbicsIFsnZ2V0LXN0YXJ0ZWQnXSwgJ0dldCBTdGFydGVkJywgc2xvZ2FuQnV0dG9uRGl2KTtcclxuICAgIHNsb2dhbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXR0b24tbWVudScpO1xyXG4gICAgICAgIG1lbnVCdXR0b24uY2xpY2soKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGxldCBoZXJvSW1hZ2VDb250YWluZXIgPSBtYWtlRWxlbWVudCgnZGl2JywgWydoZXJvLWltYWdlLWNvbnRhaW5lciddLCBudWxsLCBoZXJvKTtcclxuICAgIGxldCBoZXJvSW1hZ2VEaXYgPSBtYWtlRWxlbWVudCgnZGl2JywgWydoZXJvLWltYWdlJ10sIG51bGwsIGhlcm9JbWFnZUNvbnRhaW5lcik7XHJcbiAgICBsZXQgaGVyb0ltYWdlID0gbWFrZUVsZW1lbnQoJ2ltZycsIG51bGwsIG51bGwsIGhlcm9JbWFnZURpdik7XHJcbiAgICBoZXJvSW1hZ2Uuc3JjID0gJy4uL3NyYy9pbWFnZXMvZm9vZC10YWJsZS5qcGcnO1xyXG5cclxuICAgIGxldCBoZXJvQnViYmxlQ29udGFpbmVyID0gbWFrZUVsZW1lbnQoJ2RpdicsIFsnaGVyby1idWJibGUtY29udGFpbmVyJ10sIG51bGwsIGhlcm9JbWFnZUNvbnRhaW5lcik7XHJcbiAgICBsZXQgaGVyb0J1YmJsZUN1c3RvbWVyID0gbWFrZUVsZW1lbnQoJ2RpdicsIFsnaGVyby1idWJibGUnXSwgVEVYVC5DVVNUT01FUl9CVUJCTEUsIGhlcm9CdWJibGVDb250YWluZXIpO1xyXG4gICAgaGVyb0J1YmJsZUN1c3RvbWVyLmRhdGFzZXQucmV2aWV3VHlwZSA9ICdjdXN0b21lcic7XHJcbiAgICBsZXQgaGVyb0J1YmJsZVdpbm5lciA9IG1ha2VFbGVtZW50KCdkaXYnLCBbJ2hlcm8tYnViYmxlJ10sIFRFWFQuV0lOTkVSX0JVQkJMRSwgaGVyb0J1YmJsZUNvbnRhaW5lcik7XHJcbiAgICBoZXJvQnViYmxlV2lubmVyLmRhdGFzZXQucmV2aWV3VHlwZSA9ICd3aW5uZXInO1xyXG5cclxuICAgIGxldCBjZXJ0aWZpY2F0aW9ucyA9IG1ha2VFbGVtZW50KCdkaXYnLCBbJ2NlcnRpZmljYXRpb25zJ10sIG51bGwsIG1haW4pO1xyXG4gICAgbGV0IGNlcnRpZmljYXRpb25Qb2ludHMgPSBbXHJcbiAgICAgICAgeyBpbWFnZVNvdXJjZTogJy4uL3NyYy9pbWFnZXMvZm9vZC1zZXJ2aWNlLnBuZycsIHRleHQ6IFRFWFQuRk9PRF9TRVJWSUNFX1BPSU5UIH0sXHJcbiAgICAgICAgeyBpbWFnZVNvdXJjZTogJy4uL3NyYy9pbWFnZXMvdmVnYW4ucG5nJywgdGV4dDogVEVYVC5WRUdBTl9QT0lOVCB9LFxyXG4gICAgICAgIHsgaW1hZ2VTb3VyY2U6ICcuLi9zcmMvaW1hZ2VzL3ZlZ2V0YWJsZXMtYmFnLnBuZycsIHRleHQ6IFRFWFQuTE9DQUxfUE9JTlQgfSxcclxuICAgIF07XHJcbiAgICBjZXJ0aWZpY2F0aW9uUG9pbnRzLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgbGV0IHBvaW50ID0gbWFrZUVsZW1lbnQoJ2RpdicsIFsncG9pbnQnXSwgbnVsbCwgY2VydGlmaWNhdGlvbnMpO1xyXG4gICAgICAgIGxldCBpbWFnZURpdiA9IG1ha2VFbGVtZW50KCdkaXYnLCBudWxsLCBudWxsLCBwb2ludCk7XHJcbiAgICAgICAgbGV0IGltYWdlID0gbWFrZUVsZW1lbnQoJ2ltZycsIG51bGwsIG51bGwsIGltYWdlRGl2KTtcclxuICAgICAgICBpbWFnZS5zcmMgPSBpdGVtLmltYWdlU291cmNlO1xyXG4gICAgICAgIGxldCBjb21tZW50RGl2ID0gbWFrZUVsZW1lbnQoJ2RpdicsIG51bGwsIG51bGwsIHBvaW50KTtcclxuICAgICAgICBtYWtlRWxlbWVudCgncCcsIG51bGwsIGl0ZW0udGV4dCwgY29tbWVudERpdik7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlSG9tZVBhZ2UgfTsiLCJpbXBvcnQgeyBURVhULCBtYWtlRWxlbWVudCB9IGZyb20gXCIuL3BhZ2UuanNcIjtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU1lbnVQYWdlKCkge1xyXG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XHJcbiAgICBtYWluLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICBsZXQgbWVudSA9IG1ha2VFbGVtZW50KCdkaXYnLCBbJ21lbnUnXSwgbnVsbCwgbWFpbik7XHJcbiAgICBsZXQgbWVudVRhYmxlRGl2ID0gbWFrZUVsZW1lbnQoJ2RpdicsIG51bGwsIG51bGwsIG1lbnUpO1xyXG4gICAgbWFrZUVsZW1lbnQoJ2RpdicsIFsnbWVudS10YWJsZSddLCBudWxsLCBtZW51VGFibGVEaXYpO1xyXG4gICAgbWFrZU1lbnVJdGVtKFRFWFQuTUVOVS5TVVJQUklTRV9NRS5USVRMRSwgVEVYVC5NRU5VLlNVUlBSSVNFX01FLlBSSUNFLCBURVhULk1FTlUuU1VSUFJJU0VfTUUuREVTQ1JJUFRJT04pO1xyXG4gICAgbWFrZU1lbnVJdGVtKFRFWFQuTUVOVS5GRUVEX01FLlRJVExFLCBURVhULk1FTlUuRkVFRF9NRS5QUklDRSwgVEVYVC5NRU5VLkZFRURfTUUuREVTQ1JJUFRJT04pO1xyXG4gICAgbWFrZU1lbnVJdGVtKFRFWFQuTUVOVS5ESU5FX01FLlRJVExFLCBURVhULk1FTlUuRElORV9NRS5QUklDRSwgVEVYVC5NRU5VLkRJTkVfTUUuREVTQ1JJUFRJT04pO1xyXG4gICAgbWFrZU1lbnVJdGVtKFRFWFQuTUVOVS5JTkRVTEdFX01FLlRJVExFLCBURVhULk1FTlUuSU5EVUxHRV9NRS5QUklDRSwgVEVYVC5NRU5VLklORFVMR0VfTUUuREVTQ1JJUFRJT04pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYWtlTWVudUl0ZW0odGl0bGUsIHByaWNlLCBkZXNjcmlwdGlvbikge1xyXG4gICAgbGV0IG1lbnVUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LXRhYmxlJyk7XHJcbiAgICBsZXQgbWVudUl0ZW0gPSBtYWtlRWxlbWVudCgnZGl2JywgWydtZW51LWl0ZW0nXSwgbnVsbCwgbWVudVRhYmxlKTtcclxuICAgIG1ha2VFbGVtZW50KCdkaXYnLCBbJ21lbnUtdGl0bGUnXSwgdGl0bGUsIG1lbnVJdGVtKTtcclxuICAgIG1ha2VFbGVtZW50KCdkaXYnLCBbJ21lbnUtcHJpY2UnXSwgcHJpY2UsIG1lbnVJdGVtKTtcclxuICAgIGxldCBtZW51RGVzY3JpcHRpb24gPSBtYWtlRWxlbWVudCgnZGl2JywgWydtZW51LWRlc2NyaXB0aW9uJ10sIG51bGwsIG1lbnVJdGVtKTtcclxuICAgIG1ha2VFbGVtZW50KCdwJywgbnVsbCwgZGVzY3JpcHRpb24sIG1lbnVEZXNjcmlwdGlvbik7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZU1lbnVQYWdlIH07IiwiY29uc3QgVEVYVCA9IHtcclxuICAgIENPTVBBTllfTkFNRTogJ0dhdHNieVxcdTIwMTlzJyxcclxuICAgIENPTVBBTllfU0xPR0FOOiAnTGV0IFVzIFNlcnZlIFlvdScsXHJcbiAgICBDT01QQU5ZX01JU1NJT046ICdXZSBzdHJpdmUgdG8gcHJvdmlkZSBhIHNwYWNlIHdoZXJlIGd1ZXN0cyBjYW4gY29ubmVjdCB3aXRoIHRoZW1zZWx2ZXMgJyArXHJcbiAgICAgICAgJ2FuZCBlbmpveSBsb2NhbCBkZWxpY2FjaWVzLicsXHJcbiAgICBDVVNUT01FUl9CVUJCTEU6ICdWb3RlZCBiZXN0IGxvY2FsIHZlbnVlIG9mIDIwMjEnLFxyXG4gICAgV0lOTkVSX0JVQkJMRTogJzIgTWljaGVsaW4gc3RhcnMgXFx1MjYwNVxcdTI2MDUnLFxyXG4gICAgRk9PRF9TRVJWSUNFX1BPSU5UOiAnT3VyIHNlcnZlcnMgcHJhY3RpY2Ugc29jaWFsIGRpc3RhbmNpbmcgdG8gZW5zdXJlIHlvdSAnICtcclxuICAgICAgICAnYW5kIHlvdXIgZ3Vlc3RzIGhhdmUgYSBjb21mb3J0YWJsZSBkaW5pbmcgZXhwZXJpZW5jZS4nLFxyXG4gICAgVkVHQU5fUE9JTlQ6ICdXZSB0cnkgb3VyIGJlc3QgdG8gYWNjb21tb2RhdGUgb3VyIGRpbmVyc1xcJyBkaWV0YXJ5IHJlcXVpcmVtZW50cy4nLFxyXG4gICAgTE9DQUxfUE9JTlQ6ICdXZSBiZWxpZXZlIGlzIHN1cHBvcnRpbmcgbG9jYWwgZmFybWVycyBhbmQgcHJvZHVjZXJzLiAnICtcclxuICAgICAgICAnV2Ugc3RyaXZlIHRvIHNvdXJjZSBsb2NhbGx5IHdoZW5ldmVyIHBvc3NpYmxlLicsXHJcbiAgICBNRU5VOiB7XHJcbiAgICAgICAgU1VSUFJJU0VfTUU6IHtcclxuICAgICAgICAgICAgVElUTEU6ICdTdXJwcmlzZSBNZScsXHJcbiAgICAgICAgICAgIFBSSUNFOiAnJDY1IHBlciBoZWFkJyxcclxuICAgICAgICAgICAgREVTQ1JJUFRJT046ICdPdXIgU3VycHJpc2UgTWUgbWVudSBpcyBhIHNoYXJlZCBiYW5xdWV0LXN0eWxlIGZlYXN0ICcgK1xyXG4gICAgICAgICAgICAgICAgJ3RoYXQgZmVhdHVyZXMgYSBkYWlseSBzZWxlY3Rpb24gb2YgdGhlIG1hcmtldHNcXCcgYmVzdCBhbmQgZnJlc2hlc3QsICcgK1xyXG4gICAgICAgICAgICAgICAgJ3NlbGVjdGVkIGJ5IG91ciBleGVjdXRpdmUgY2hlZi4gQXQgbGVhc3QgMyBkaXNoZXMgd2lsbCBiZSBzZXJ2ZWQgZm9yICcgK1xyXG4gICAgICAgICAgICAgICAgJ2VhY2ggY291cnNlIGFuZCB3aWxsIGluY2x1ZGUgdmVnZXRhYmxlLWJhc2VkLCBzZWFmb29kIGFuZCBtZWF0IG9wdGlvbnMuJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgRkVFRF9NRToge1xyXG4gICAgICAgICAgICBUSVRMRTogJ0ZlZWQgTWUnLFxyXG4gICAgICAgICAgICBQUklDRTogJyQ4MCBwZXIgaGVhZCcsXHJcbiAgICAgICAgICAgIERFU0NSSVBUSU9OOiAnT3VyIEZlZWQgTWUgbWVudSBzdGFydHMgd2l0aCBhIHNoYXJlZCBlbnRyZWUsIGZvbGxvd2VkICcgK1xyXG4gICAgICAgICAgICAgICAgJ2J5IGFuIGEgbGEgY2FydGUgbWFpbiBhbmQgZmluaXNoaW5nIHdpdGggYSBiYW5xdWV0LXN0eWxlIGRlc3NlcnQgdGFibGUgJyArXHJcbiAgICAgICAgICAgICAgICAnYW5kIGNoZWVzZSBwbGF0dGVycy4gTWFpbiBvcHRpb25zIGFyZSBhIHNlbGVjdGlvbiBvZiB2ZWdldGFibGUtYmFzZWQsIHNlYWZvb2QgYW5kIG1lYXQgZGlzaGVzLidcclxuICAgICAgICB9LFxyXG4gICAgICAgIERJTkVfTUU6IHtcclxuICAgICAgICAgICAgVElUTEU6ICdEaW5lIE1lJyxcclxuICAgICAgICAgICAgUFJJQ0U6ICckOTAgcGVyIGhlYWQnLFxyXG4gICAgICAgICAgICBERVNDUklQVElPTjogJ091ciBEaW5lIE1lIG1lbnUgaXMgYW4gYWxsIGEgbGEgY2FydGUgbWVudSwgd2l0aCB5b3VyIGNob2ljZSBvZiBlbnRyZWUsIG1haW4gYW5kIGRlc3NlcnQuICcgK1xyXG4gICAgICAgICAgICAgICAgJ0VudHJlZSBhbmQgbWFpbiBvcHRpb25zIGFyZSBhIHNlbGVjdGlvbiBvZiB2ZWdldGFibGUtYmFzZWQsIHNlYWZvb2QgYW5kIG1lYXQgZGlzaGVzLidcclxuICAgICAgICB9LFxyXG4gICAgICAgIElORFVMR0VfTUU6IHtcclxuICAgICAgICAgICAgVElUTEU6ICdJbmR1bGdlIE1lJyxcclxuICAgICAgICAgICAgUFJJQ0U6ICdNaW4uICQxMDUgcGVyIGhlYWQsIGZpbmFsIHByaWNlIG1heSB2YXJ5JyxcclxuICAgICAgICAgICAgREVTQ1JJUFRJT046ICdPdXIgSW5kdWxnZSBNZSBtZW51IGlzIGEgZGVndXN0YXRpb24tc3R5bGUgbWVudSBkZXNpZ25lZCBpbiAnICtcclxuICAgICAgICAgICAgICAgICdjb25zdWx0YXRpb24gd2l0aCBvdXIgZXhlY3V0aXZlIGNoZWYgYW5kIG91ciBzb21tZWxpZXJzLiBXZSB3aWxsIGNvbnRhY3QgeW91ICcgK1xyXG4gICAgICAgICAgICAgICAgJ3RvIGRlc2lnbiB0aGUgYmVzdCBtZW51IGZvciB0aGUgbmlnaHQuIFRoaXMgaXMgYSBkaW5uZXItb25seSBtZW51IGFuZCAnICtcclxuICAgICAgICAgICAgICAgICd3aWxsIGJlIHNlcnZlZCB0aHJvdWdob3V0IHRoZSBjb3Vyc2Ugb2YgMi0zIGhvdXJzLidcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgQ09OVEFDVDoge1xyXG4gICAgICAgIExPQ0FUSU9OOiB7XHJcbiAgICAgICAgICAgIFRJVExFOiAnTG9jYXRpb24nLFxyXG4gICAgICAgICAgICBERVNDUklQVElPTjogJzEyMyBNYWluIFN0cmVldCxcXG5Qb3J0IE1lbGJvdXJuZSBWSUMgMzIwN1xcbkF1c3RyYWxpYSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIE9QRU5JTkdfSE9VUlM6IHtcclxuICAgICAgICAgICAgVElUTEU6ICdPcGVuaW5nIEhvdXJzJyxcclxuICAgICAgICAgICAgREVTQ1JJUFRJT046ICdUaHVyc2RheSB0byBTdW5kYXlcXG4xMnBtIHRvIG1pZG5pZ2h0J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgQk9PS0lORzoge1xyXG4gICAgICAgICAgICBUSVRMRTogJ0Jvb2tpbmcnLFxyXG4gICAgICAgICAgICBERVNDUklQVElPTjogJ0VtYWlsOiBib29raW5nQGdhdHNieXMuY29tLmF1XFxuUGhvbmU6IDAxIDkxMjMgNDU2NydcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgR09PREJZRTogJ1dlIGhvcGUgdG8gc2VlIHlvdSBzb29uISdcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVBhZ2UoKSB7XHJcbiAgICBjcmVhdGVIZWFkZXIoKTtcclxuICAgIGNyZWF0ZU1haW4oKTtcclxuICAgIGNyZWF0ZUZvb3RlcigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XHJcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xyXG4gICAgbGV0IGhlYWRlciA9IG1ha2VFbGVtZW50KCdoZWFkZXInLCBudWxsLCBudWxsLCBjb250YWluZXIpO1xyXG4gICAgbGV0IGxvZ29EaXYgPSBtYWtlRWxlbWVudCgnZGl2JywgWydsb2dvJ10sIG51bGwsIGhlYWRlcik7XHJcbiAgICBtYWtlRWxlbWVudCgnaDInLCBudWxsLCBURVhULkNPTVBBTllfTkFNRSwgbG9nb0Rpdik7XHJcblxyXG4gICAgbGV0IG5hdmlnYXRpb24gPSBtYWtlRWxlbWVudCgnZGl2JywgWyduYXZpZ2F0aW9uJ10sIG51bGwsIGhlYWRlcik7XHJcbiAgICBsZXQgbmF2T3B0aW9ucyA9IG1ha2VFbGVtZW50KCdkaXYnLCBbJ25hdi1vcHRpb25zJ10sIG51bGwsIG5hdmlnYXRpb24pO1xyXG5cclxuICAgIGxldCBob21lQnV0dG9uID0gbWFrZUVsZW1lbnQoJ2J1dHRvbicsIFsnbmF2LXBhZ2UnLCAnYWN0aXZlJ10sICdIb21lJywgbmF2T3B0aW9ucyk7XHJcbiAgICBob21lQnV0dG9uLmlkID0gJ2J1dHRvbi1ob21lJztcclxuICAgIGxldCBtZW51QnV0dG9uID0gbWFrZUVsZW1lbnQoJ2J1dHRvbicsIFsnbmF2LXBhZ2UnXSwgJ01lbnUnLCBuYXZPcHRpb25zKTtcclxuICAgIG1lbnVCdXR0b24uaWQgPSAnYnV0dG9uLW1lbnUnO1xyXG4gICAgbGV0IGNvbnRhY3RCdXR0b24gPSBtYWtlRWxlbWVudCgnYnV0dG9uJywgWyduYXYtcGFnZSddLCAnQ29udGFjdCB1cycsIG5hdk9wdGlvbnMpO1xyXG4gICAgY29udGFjdEJ1dHRvbi5pZCA9ICdidXR0b24tY29udGFjdCc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU1haW4oKSB7XHJcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xyXG4gICAgbWFrZUVsZW1lbnQoJ21haW4nLCBudWxsLCBudWxsLCBjb250YWluZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XHJcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgIGxldCBmb290ZXIgPSBtYWtlRWxlbWVudCgnZm9vdGVyJywgbnVsbCwgbnVsbCwgYm9keSk7XHJcbiAgICBsZXQgcmVwb0xpbmsgPSBtYWtlRWxlbWVudCgnYScsIG51bGwsICdHaXRodWIgcmVwb3NpdG9yeScsIGZvb3Rlcik7XHJcbiAgICByZXBvTGluay5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9kbGxkZGxsZC9vZGluLXByb2plY3QtcmVzdGF1cmFudCc7XHJcbiAgICBsZXQgaWNvbnNMaW5rID0gbWFrZUVsZW1lbnQoJ2EnLCBudWxsLCAnSWNvbnMgYnkgaWNvbnM4JywgZm9vdGVyKTtcclxuICAgIGljb25zTGluay5ocmVmID0gJ2h0dHBzOi8vaWNvbnM4LmNvbS9pY29uL3NldC9mb29kL2lvcyc7XHJcbiAgICBsZXQgcGhvdG9ncmFwaHlMaW5rID0gbWFrZUVsZW1lbnQoJ2EnLCBudWxsLCAnUGhvdG9ncmFwaHkgYnkgQnJvb2tlIExhcmsnLCBmb290ZXIpO1xyXG4gICAgcGhvdG9ncmFwaHlMaW5rLmhyZWYgPSAnaHR0cHM6Ly91bnNwbGFzaC5jb20vQGJyb29rZWxhcmsnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYWtlRWxlbWVudCh0eXBlLCBjbGFzc2VzLCB0ZXh0LCBwYXJlbnQpIHtcclxuICAgIGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XHJcbiAgICBpZiAoY2xhc3Nlcykge1xyXG4gICAgICAgIGNsYXNzZXMuZm9yRWFjaChjbGFzc05hbWUgPT4ge1xyXG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGV4dCkge1xyXG4gICAgICAgIGVsLnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgIH1cclxuICAgIGlmIChwYXJlbnQpIHtcclxuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWwpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVsO1xyXG59XHJcblxyXG5leHBvcnQgeyBURVhULCBjcmVhdGVQYWdlLCBtYWtlRWxlbWVudCB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7IGNyZWF0ZVBhZ2UgfSBmcm9tICcuL3BhZ2UuanMnO1xyXG5pbXBvcnQgeyBjcmVhdGVIb21lUGFnZSB9IGZyb20gJy4vaG9tZS5qcyc7XHJcbmltcG9ydCB7IGNyZWF0ZU1lbnVQYWdlIH0gZnJvbSAnLi9tZW51LmpzJztcclxuaW1wb3J0IHsgY3JlYXRlQ29udGFjdFBhZ2UgfSBmcm9tICcuL2NvbnRhY3QnO1xyXG5cclxuY3JlYXRlUGFnZSgpO1xyXG5hZGRCdXR0b25MaXN0ZW5lcnMoKTtcclxuXHJcbmxldCBob21lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1dHRvbi1ob21lJyk7XHJcbmhvbWVCdXR0b24uY2xpY2soKTtcclxuXHJcbmZ1bmN0aW9uIGFkZEJ1dHRvbkxpc3RlbmVycygpIHtcclxuICAgIGxldCBob21lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1dHRvbi1ob21lJyk7XHJcbiAgICBob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbmF2QnV0dG9uRXZlbnQuYmluZCh0aGlzKShjcmVhdGVIb21lUGFnZSk7XHJcbiAgICB9KTtcclxuICAgIGxldCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1dHRvbi1tZW51Jyk7XHJcbiAgICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbmF2QnV0dG9uRXZlbnQuYmluZCh0aGlzKShjcmVhdGVNZW51UGFnZSk7XHJcbiAgICB9KTtcclxuICAgIGxldCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1dHRvbi1jb250YWN0Jyk7XHJcbiAgICBjb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbmF2QnV0dG9uRXZlbnQuYmluZCh0aGlzKShjcmVhdGVDb250YWN0UGFnZSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlQnV0dG9ucyhidXR0b24pIHtcclxuICAgIGxldCBuYXZCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1wYWdlJyk7XHJcbiAgICBuYXZCdXR0b25zLmZvckVhY2gobmF2QnV0dG9uID0+IHtcclxuICAgICAgICBpZiAobmF2QnV0dG9uICE9PSBidXR0b24pIHtcclxuICAgICAgICAgICAgbmF2QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBuYXZCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIGJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5hdkJ1dHRvbkV2ZW50KG5hdkJ0bkZ1bmN0aW9uKSB7XHJcbiAgICBuYXZCdG5GdW5jdGlvbigpO1xyXG4gICAgdG9nZ2xlQnV0dG9ucyh0aGlzKTtcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==