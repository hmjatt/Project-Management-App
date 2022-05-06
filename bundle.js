/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/styles.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/styles.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --clr-primary: rgb(54, 112, 199);\r\n    --clr-light: #f4f4f4;\r\n    --clr-dark: #333;\r\n    --clr-warning: rgb(99, 36, 36);\r\n    --clr-navHighlight: #4f7794;\r\n    --clr-mineShaft: #232323;\r\n    --clr-gallery: #ededed;\r\n    --clr-elfGreen: #058179;\r\n    --clr-nebula: #cbdbda;\r\n}\r\n\r\nhtml {\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n    padding: 10%;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  background: var(--clr-nebula);\r\n  color: var(--clr-light);\r\n}\r\n\r\n\r\n#menuToggle {\r\n  display: block;\r\n  position: relative;\r\n  top: 50px;\r\n  left: 50px;  \r\n  z-index: 1;  \r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n   -ms-user-select: none;\r\n       user-select: none;\r\n}\r\n\r\n#menuToggle li {\r\n  text-decoration: none;\r\n  color: var(--clr-mineShaft);\r\n  -webkit-transition: color 0.3s ease;\r\n  -o-transition: color 0.3s ease;\r\n  transition: color 0.3s ease;\r\n  padding: 10px 0px 10px 50px;\r\n  font-size: 22px;\r\n}\r\n\r\n#menuToggle li:hover {\r\n  color: var(--clr-gallery);\r\n  background-color: var(--clr-elfGreen);\r\n  border-radius: 30px;\r\n  margin: 0px 25px 0px 25px;\r\n  padding-left: 47px;\r\n}\r\n\r\n\r\n/* The hamburger button hidden inside an input element */\r\n#menuToggle input {\r\n  display: block;\r\n  width: 30px;\r\n  height: 30px;\r\n  position: absolute;\r\n  top: -7px;\r\n  left: -5px;  \r\n  padding: 0;\r\n  cursor: pointer;  \r\n  opacity: 0; /* hide this */\r\n  z-index: 2; /* and place it over the hamburger */  \r\n  -webkit-touch-callout: none;\r\n}\r\n\r\n#menuToggle label {\r\n  position: relative;\r\n  display: block;\r\n  width: 30px;\r\n  height: 30px;\r\n}\r\n#menuToggle label span {\r\n  display: none;\r\n}\r\n\r\n/*\r\n * Hamburger\r\n */\r\n#menuToggle label div {\r\n  display: block;\r\n  width: 30px;\r\n  height: 2px;\r\n  margin-bottom: 6px;\r\n  position: relative;\r\n  background: var(--clr-mineShaft);\r\n  border-radius: 3px;  \r\n  z-index: 1;  \r\n  -webkit-transform-origin: 4px 0px;  \r\n      -ms-transform-origin: 4px 0px;  \r\n          transform-origin: 4px 0px;\r\n  -webkit-transition: all 0.3s ease;\r\n  -o-transition: all 0.3s ease;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n#menuToggle label div:first-child {\r\n  -webkit-transform-origin: 0% 100%;\r\n      -ms-transform-origin: 0% 100%;\r\n          transform-origin: 0% 100%;\r\n}\r\n\r\n#menuToggle label div:nth-child(2) {\r\n    -webkit-transform-origin: 0% 0%;\r\n      -ms-transform-origin: 0% 0%;\r\n          transform-origin: 0% 0%;\r\n}\r\n\r\n/* \r\n * Change the color of the hamburger when toggled\r\n */\r\n#menuToggle input:checked + label div {\r\n  background: var(--clr-elfGreen);\r\n}\r\n\r\n/*\r\n * Use absolute positioning to place the menu off-screen\r\n */\r\n#menu {\r\n  position: absolute;\r\n  width: 80vw;\r\n  margin: -100px 0 0 -50px;\r\n  padding: 50px 0px 50px 0px;\r\n  padding-top: 125px;\r\n  background: var(--clr-gallery);\r\n  border-radius: 20px;\r\n  list-style-type: none;\r\n  /* Hide the menu off-screen to the left */\r\n  left: -130%;\r\n  -webkit-transition: left 0.3s ease;\r\n  -o-transition: left 0.3s ease;\r\n  transition: left 0.3s ease; \r\n}\r\n\r\n\r\n/*\r\n * Slide the menu in from left when the input is checked\r\n */\r\n#menuToggle input:checked ~ ul {\r\n  left: 0;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/* \r\n:root {\r\n    --clr-primary: rgb(54, 112, 199);\r\n    --clr-light: #f4f4f4;\r\n    --clr-dark: #333;\r\n    --clr-warning: rgb(99, 36, 36);\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n    font-family: inherit;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    font-family: \"Work Sans\", sans-serif;\r\n    font-weight: 300;\r\n    font-size: 1.5rem;\r\n    background-color: var(--clr-primary);\r\n    color: var(--clr-light);\r\n    display: grid;\r\n    grid:     \"header header header header\" auto\r\n    \"...... lists  active ......\" auto /\r\n    1fr minmax(100px, 300px) minmax(250px, 500px) 1fr;\r\n}\r\n\r\n.title {\r\n    grid-area: header;\r\n    text-align: center;\r\n    font-size: calc(7vw + 2rem);\r\n    font-weight: 900;\r\n    color: rgba(0, 0, 0, 0.1);\r\n    letter-spacing: 2px;\r\n    margin: -0.3em 0 0.5em;\r\n}\r\n\r\n.all-tasks {\r\n    grid-area: lists;\r\n}\r\n\r\n.task-list {\r\n    font-size: 1.2rem;\r\n    line-height: 1.7;\r\n    list-style: circle;\r\n    padding-left: 1.1em;\r\n}\r\n\r\n.list-name {\r\n    cursor: pointer;\r\n}\r\n\r\n.list-name:hover {\r\n    opacity: 0.7;\r\n}\r\n\r\nform {\r\n    display: flex;\r\n}\r\n\r\n.btn {\r\n    cursor: pointer;\r\n    background: 0;\r\n    border: 0;\r\n    padding: 0;\r\n    color: inherit;\r\n}\r\n\r\n.btn.create {\r\n    font-size: 1.5rem;\r\n    font-weight: 900;\r\n    margin-right: 0.25em;\r\n    transition: opacity 250ms ease-in;\r\n}\r\n\r\n.btn.create:hover {\r\n    opacity: 0.7;\r\n}\r\n\r\n.btn.delete {\r\n    opacity: 0.7;\r\n    font-size: 1rem;\r\n    transition: color 200ms;\r\n}\r\n\r\n.btn.delete:hover {\r\n    color: var(--clr-warning);\r\n}\r\n\r\n.new {\r\n    background: transparent;\r\n    border: 0;\r\n    color: inherit;\r\n    border-bottom: 1px solid currentColor;\r\n    font-size: inherit;\r\n    outline: none;\r\n    padding: 0.25em;\r\n    transition: border-bottom 150ms ease-in;\r\n    order: 2;\r\n}\r\n\r\n.new::-webkit-input-placeholder {\r\n    opacity: 0.4;\r\n}\r\n\r\n.new:-ms-input-placeholder {\r\n    opacity: 0.4;\r\n}\r\n\r\n.new::-ms-input-placeholder {\r\n    opacity: 0.4;\r\n}\r\n\r\n.new::placeholder {\r\n    opacity: 0.4;\r\n}\r\n\r\n.new:focus {\r\n    border-bottom-width: 3px;\r\n}\r\n\r\n.new:focus::-webkit-input-placeholder {\r\n    opacity: 0.15;\r\n}\r\n\r\n.new:focus:-ms-input-placeholder {\r\n    opacity: 0.15;\r\n}\r\n\r\n.new:focus::-ms-input-placeholder {\r\n    opacity: 0.15;\r\n}\r\n\r\n.new:focus::placeholder {\r\n    opacity: 0.15;\r\n}\r\n\r\n.new.list {\r\n    font-size: 1.1rem;\r\n}\r\n\r\n.new.task {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.active-list {\r\n    font-weight: 700;\r\n}\r\n\r\n.todo-list {\r\n    --spacer: 2rem;\r\n    grid-area: active;\r\n    background: var(--clr-light);\r\n    color: var(--clr-dark);\r\n}\r\n\r\n.todo-header {\r\n    padding: var(--spacer);\r\n    background: #e4e4e4;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.list-title {\r\n    margin: 0 1em 0 0;\r\n}\r\n\r\n.task-count {\r\n    margin: 0;\r\n    font-size: 1rem;\r\n}\r\n\r\n.todo-body {\r\n    padding: var(--spacer);\r\n    position: relative;\r\n}\r\n\r\n.new-task-creator .create {\r\n    color: var(--clr-primary);\r\n}\r\n\r\n[type=\"checkbox\"] {\r\n    opacity: 0;\r\n    position: absolute;\r\n}\r\n\r\n.task label {\r\n    display: flex-inline;\r\n    align-items: center;\r\n    position: relative;\r\n}\r\n\r\n.task {\r\n    position: relative;\r\n    margin-bottom: 1.25em;\r\n}\r\n\r\n.task::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    right: 0;\r\n    left: 0;\r\n    bottom: -0.5em;\r\n    height: 1px;\r\n    background: currentColor;\r\n    opacity: 0.1;\r\n}\r\n\r\n.custom-checkbox {\r\n    --size: 0.75em;\r\n    display: inline-block;\r\n    width: var(--size);\r\n    height: var(--size);\r\n    margin-right: var(--size);\r\n    cursor: pointer;\r\n    border: 2px solid currentColor;\r\n    border-radius: 50%;\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n    transition: -webkit-transform 300ms ease-in-out;\r\n    transition: transform 300ms ease-in-out;\r\n    transition: transform 300ms ease-in-out, -webkit-transform 300ms ease-in-out;\r\n}\r\n\r\n.task:hover .custom-checkbox,\r\n[type=\"checkbox\"]:focus+label .custom-checkbox {\r\n    -webkit-transform: scale(1.2);\r\n    transform: scale(1.2);\r\n    color: var(--clr-primary);\r\n}\r\n\r\n[type=\"checkbox\"]:checked+label .custom-checkbox {\r\n    background: var(--clr-primary);\r\n    border-color: var(--clr-primary);\r\n    box-shadow: inset 0 0 0px 2px white;\r\n}\r\n\r\n[type=\"checkbox\"]:checked+label {\r\n    opacity: 0.5;\r\n}\r\n\r\n.task label::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    left: 1.5em;\r\n    top: 50%;\r\n    height: 3px;\r\n    background: currentColor;\r\n    -webkit-transform: scaleX(0);\r\n    transform: scaleX(0);\r\n    -webkit-transform-origin: right;\r\n    transform-origin: right;\r\n    transition: -webkit-transform 150ms ease-in-out;\r\n    transition: transform 150ms ease-in-out;\r\n    transition: transform 150ms ease-in-out, -webkit-transform 150ms ease-in-out;\r\n}\r\n\r\n[type=\"checkbox\"]:checked+label::after {\r\n    -webkit-transform: scaleX(1);\r\n    transform: scaleX(1);\r\n    -webkit-transform-origin: left;\r\n    transform-origin: left;\r\n}\r\n\r\n.delete-stuff {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    position: absolute;\r\n    width: 100%;\r\n    left: 0;\r\n    bottom: -35px;\r\n    color: var(--clr-light);\r\n} */", "",{"version":3,"sources":["webpack://./src/style/styles.css"],"names":[],"mappings":"AAAA;IACI,gCAAgC;IAChC,oBAAoB;IACpB,gBAAgB;IAChB,8BAA8B;IAC9B,2BAA2B;IAC3B,wBAAwB;IACxB,sBAAsB;IACtB,uBAAuB;IACvB,qBAAqB;AACzB;;AAEA;IACI,0CAA0C;IAC1C,YAAY;AAChB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,6BAA6B;EAC7B,uBAAuB;AACzB;;;AAGA;EACE,cAAc;EACd,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,UAAU;EACV,yBAAyB;EACzB,sBAAsB;GACrB,qBAAqB;OACjB,iBAAiB;AACxB;;AAEA;EACE,qBAAqB;EACrB,2BAA2B;EAC3B,mCAAmC;EACnC,8BAA8B;EAC9B,2BAA2B;EAC3B,2BAA2B;EAC3B,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,qCAAqC;EACrC,mBAAmB;EACnB,yBAAyB;EACzB,kBAAkB;AACpB;;;AAGA,wDAAwD;AACxD;EACE,cAAc;EACd,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,UAAU;EACV,eAAe;EACf,UAAU,EAAE,cAAc;EAC1B,UAAU,EAAE,oCAAoC;EAChD,2BAA2B;AAC7B;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,WAAW;EACX,YAAY;AACd;AACA;EACE,aAAa;AACf;;AAEA;;EAEE;AACF;EACE,cAAc;EACd,WAAW;EACX,WAAW;EACX,kBAAkB;EAClB,kBAAkB;EAClB,gCAAgC;EAChC,kBAAkB;EAClB,UAAU;EACV,iCAAiC;MAC7B,6BAA6B;UACzB,yBAAyB;EACjC,iCAAiC;EACjC,4BAA4B;EAC5B,yBAAyB;AAC3B;;AAEA;EACE,iCAAiC;MAC7B,6BAA6B;UACzB,yBAAyB;AACnC;;AAEA;IACI,+BAA+B;MAC7B,2BAA2B;UACvB,uBAAuB;AACjC;;AAEA;;EAEE;AACF;EACE,+BAA+B;AACjC;;AAEA;;EAEE;AACF;EACE,kBAAkB;EAClB,WAAW;EACX,wBAAwB;EACxB,0BAA0B;EAC1B,kBAAkB;EAClB,8BAA8B;EAC9B,mBAAmB;EACnB,qBAAqB;EACrB,yCAAyC;EACzC,WAAW;EACX,kCAAkC;EAClC,6BAA6B;EAC7B,0BAA0B;AAC5B;;;AAGA;;EAEE;AACF;EACE,OAAO;AACT;;;;;;AAMA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GAoRG","sourcesContent":[":root {\r\n    --clr-primary: rgb(54, 112, 199);\r\n    --clr-light: #f4f4f4;\r\n    --clr-dark: #333;\r\n    --clr-warning: rgb(99, 36, 36);\r\n    --clr-navHighlight: #4f7794;\r\n    --clr-mineShaft: #232323;\r\n    --clr-gallery: #ededed;\r\n    --clr-elfGreen: #058179;\r\n    --clr-nebula: #cbdbda;\r\n}\r\n\r\nhtml {\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n    padding: 10%;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  background: var(--clr-nebula);\r\n  color: var(--clr-light);\r\n}\r\n\r\n\r\n#menuToggle {\r\n  display: block;\r\n  position: relative;\r\n  top: 50px;\r\n  left: 50px;  \r\n  z-index: 1;  \r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n   -ms-user-select: none;\r\n       user-select: none;\r\n}\r\n\r\n#menuToggle li {\r\n  text-decoration: none;\r\n  color: var(--clr-mineShaft);\r\n  -webkit-transition: color 0.3s ease;\r\n  -o-transition: color 0.3s ease;\r\n  transition: color 0.3s ease;\r\n  padding: 10px 0px 10px 50px;\r\n  font-size: 22px;\r\n}\r\n\r\n#menuToggle li:hover {\r\n  color: var(--clr-gallery);\r\n  background-color: var(--clr-elfGreen);\r\n  border-radius: 30px;\r\n  margin: 0px 25px 0px 25px;\r\n  padding-left: 47px;\r\n}\r\n\r\n\r\n/* The hamburger button hidden inside an input element */\r\n#menuToggle input {\r\n  display: block;\r\n  width: 30px;\r\n  height: 30px;\r\n  position: absolute;\r\n  top: -7px;\r\n  left: -5px;  \r\n  padding: 0;\r\n  cursor: pointer;  \r\n  opacity: 0; /* hide this */\r\n  z-index: 2; /* and place it over the hamburger */  \r\n  -webkit-touch-callout: none;\r\n}\r\n\r\n#menuToggle label {\r\n  position: relative;\r\n  display: block;\r\n  width: 30px;\r\n  height: 30px;\r\n}\r\n#menuToggle label span {\r\n  display: none;\r\n}\r\n\r\n/*\r\n * Hamburger\r\n */\r\n#menuToggle label div {\r\n  display: block;\r\n  width: 30px;\r\n  height: 2px;\r\n  margin-bottom: 6px;\r\n  position: relative;\r\n  background: var(--clr-mineShaft);\r\n  border-radius: 3px;  \r\n  z-index: 1;  \r\n  -webkit-transform-origin: 4px 0px;  \r\n      -ms-transform-origin: 4px 0px;  \r\n          transform-origin: 4px 0px;\r\n  -webkit-transition: all 0.3s ease;\r\n  -o-transition: all 0.3s ease;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n#menuToggle label div:first-child {\r\n  -webkit-transform-origin: 0% 100%;\r\n      -ms-transform-origin: 0% 100%;\r\n          transform-origin: 0% 100%;\r\n}\r\n\r\n#menuToggle label div:nth-child(2) {\r\n    -webkit-transform-origin: 0% 0%;\r\n      -ms-transform-origin: 0% 0%;\r\n          transform-origin: 0% 0%;\r\n}\r\n\r\n/* \r\n * Change the color of the hamburger when toggled\r\n */\r\n#menuToggle input:checked + label div {\r\n  background: var(--clr-elfGreen);\r\n}\r\n\r\n/*\r\n * Use absolute positioning to place the menu off-screen\r\n */\r\n#menu {\r\n  position: absolute;\r\n  width: 80vw;\r\n  margin: -100px 0 0 -50px;\r\n  padding: 50px 0px 50px 0px;\r\n  padding-top: 125px;\r\n  background: var(--clr-gallery);\r\n  border-radius: 20px;\r\n  list-style-type: none;\r\n  /* Hide the menu off-screen to the left */\r\n  left: -130%;\r\n  -webkit-transition: left 0.3s ease;\r\n  -o-transition: left 0.3s ease;\r\n  transition: left 0.3s ease; \r\n}\r\n\r\n\r\n/*\r\n * Slide the menu in from left when the input is checked\r\n */\r\n#menuToggle input:checked ~ ul {\r\n  left: 0;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/* \r\n:root {\r\n    --clr-primary: rgb(54, 112, 199);\r\n    --clr-light: #f4f4f4;\r\n    --clr-dark: #333;\r\n    --clr-warning: rgb(99, 36, 36);\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n    font-family: inherit;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    font-family: \"Work Sans\", sans-serif;\r\n    font-weight: 300;\r\n    font-size: 1.5rem;\r\n    background-color: var(--clr-primary);\r\n    color: var(--clr-light);\r\n    display: grid;\r\n    grid:     \"header header header header\" auto\r\n    \"...... lists  active ......\" auto /\r\n    1fr minmax(100px, 300px) minmax(250px, 500px) 1fr;\r\n}\r\n\r\n.title {\r\n    grid-area: header;\r\n    text-align: center;\r\n    font-size: calc(7vw + 2rem);\r\n    font-weight: 900;\r\n    color: rgba(0, 0, 0, 0.1);\r\n    letter-spacing: 2px;\r\n    margin: -0.3em 0 0.5em;\r\n}\r\n\r\n.all-tasks {\r\n    grid-area: lists;\r\n}\r\n\r\n.task-list {\r\n    font-size: 1.2rem;\r\n    line-height: 1.7;\r\n    list-style: circle;\r\n    padding-left: 1.1em;\r\n}\r\n\r\n.list-name {\r\n    cursor: pointer;\r\n}\r\n\r\n.list-name:hover {\r\n    opacity: 0.7;\r\n}\r\n\r\nform {\r\n    display: flex;\r\n}\r\n\r\n.btn {\r\n    cursor: pointer;\r\n    background: 0;\r\n    border: 0;\r\n    padding: 0;\r\n    color: inherit;\r\n}\r\n\r\n.btn.create {\r\n    font-size: 1.5rem;\r\n    font-weight: 900;\r\n    margin-right: 0.25em;\r\n    transition: opacity 250ms ease-in;\r\n}\r\n\r\n.btn.create:hover {\r\n    opacity: 0.7;\r\n}\r\n\r\n.btn.delete {\r\n    opacity: 0.7;\r\n    font-size: 1rem;\r\n    transition: color 200ms;\r\n}\r\n\r\n.btn.delete:hover {\r\n    color: var(--clr-warning);\r\n}\r\n\r\n.new {\r\n    background: transparent;\r\n    border: 0;\r\n    color: inherit;\r\n    border-bottom: 1px solid currentColor;\r\n    font-size: inherit;\r\n    outline: none;\r\n    padding: 0.25em;\r\n    transition: border-bottom 150ms ease-in;\r\n    order: 2;\r\n}\r\n\r\n.new::-webkit-input-placeholder {\r\n    opacity: 0.4;\r\n}\r\n\r\n.new:-ms-input-placeholder {\r\n    opacity: 0.4;\r\n}\r\n\r\n.new::-ms-input-placeholder {\r\n    opacity: 0.4;\r\n}\r\n\r\n.new::placeholder {\r\n    opacity: 0.4;\r\n}\r\n\r\n.new:focus {\r\n    border-bottom-width: 3px;\r\n}\r\n\r\n.new:focus::-webkit-input-placeholder {\r\n    opacity: 0.15;\r\n}\r\n\r\n.new:focus:-ms-input-placeholder {\r\n    opacity: 0.15;\r\n}\r\n\r\n.new:focus::-ms-input-placeholder {\r\n    opacity: 0.15;\r\n}\r\n\r\n.new:focus::placeholder {\r\n    opacity: 0.15;\r\n}\r\n\r\n.new.list {\r\n    font-size: 1.1rem;\r\n}\r\n\r\n.new.task {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.active-list {\r\n    font-weight: 700;\r\n}\r\n\r\n.todo-list {\r\n    --spacer: 2rem;\r\n    grid-area: active;\r\n    background: var(--clr-light);\r\n    color: var(--clr-dark);\r\n}\r\n\r\n.todo-header {\r\n    padding: var(--spacer);\r\n    background: #e4e4e4;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.list-title {\r\n    margin: 0 1em 0 0;\r\n}\r\n\r\n.task-count {\r\n    margin: 0;\r\n    font-size: 1rem;\r\n}\r\n\r\n.todo-body {\r\n    padding: var(--spacer);\r\n    position: relative;\r\n}\r\n\r\n.new-task-creator .create {\r\n    color: var(--clr-primary);\r\n}\r\n\r\n[type=\"checkbox\"] {\r\n    opacity: 0;\r\n    position: absolute;\r\n}\r\n\r\n.task label {\r\n    display: flex-inline;\r\n    align-items: center;\r\n    position: relative;\r\n}\r\n\r\n.task {\r\n    position: relative;\r\n    margin-bottom: 1.25em;\r\n}\r\n\r\n.task::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    right: 0;\r\n    left: 0;\r\n    bottom: -0.5em;\r\n    height: 1px;\r\n    background: currentColor;\r\n    opacity: 0.1;\r\n}\r\n\r\n.custom-checkbox {\r\n    --size: 0.75em;\r\n    display: inline-block;\r\n    width: var(--size);\r\n    height: var(--size);\r\n    margin-right: var(--size);\r\n    cursor: pointer;\r\n    border: 2px solid currentColor;\r\n    border-radius: 50%;\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n    transition: -webkit-transform 300ms ease-in-out;\r\n    transition: transform 300ms ease-in-out;\r\n    transition: transform 300ms ease-in-out, -webkit-transform 300ms ease-in-out;\r\n}\r\n\r\n.task:hover .custom-checkbox,\r\n[type=\"checkbox\"]:focus+label .custom-checkbox {\r\n    -webkit-transform: scale(1.2);\r\n    transform: scale(1.2);\r\n    color: var(--clr-primary);\r\n}\r\n\r\n[type=\"checkbox\"]:checked+label .custom-checkbox {\r\n    background: var(--clr-primary);\r\n    border-color: var(--clr-primary);\r\n    box-shadow: inset 0 0 0px 2px white;\r\n}\r\n\r\n[type=\"checkbox\"]:checked+label {\r\n    opacity: 0.5;\r\n}\r\n\r\n.task label::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    left: 1.5em;\r\n    top: 50%;\r\n    height: 3px;\r\n    background: currentColor;\r\n    -webkit-transform: scaleX(0);\r\n    transform: scaleX(0);\r\n    -webkit-transform-origin: right;\r\n    transform-origin: right;\r\n    transition: -webkit-transform 150ms ease-in-out;\r\n    transition: transform 150ms ease-in-out;\r\n    transition: transform 150ms ease-in-out, -webkit-transform 150ms ease-in-out;\r\n}\r\n\r\n[type=\"checkbox\"]:checked+label::after {\r\n    -webkit-transform: scaleX(1);\r\n    transform: scaleX(1);\r\n    -webkit-transform-origin: left;\r\n    transform-origin: left;\r\n}\r\n\r\n.delete-stuff {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    position: absolute;\r\n    width: 100%;\r\n    left: 0;\r\n    bottom: -35px;\r\n    color: var(--clr-light);\r\n} */"],"sourceRoot":""}]);
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

/***/ "./src/style/styles.css":
/*!******************************!*\
  !*** ./src/style/styles.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/styles.css */ "./src/style/styles.css");

// import gitImage from './images/git-logo.png';


console.log("it works");
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7VUNmQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLHdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VtZW50LWFwcC8uL3NyYy9zdHlsZS9zdHlsZXMuY3NzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlbWVudC1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlbWVudC1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZW1lbnQtYXBwLy4vc3JjL3N0eWxlL3N0eWxlcy5jc3M/YWY3YyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZW1lbnQtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlbWVudC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlbWVudC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VtZW50LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZW1lbnQtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VtZW50LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlbWVudC1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VtZW50LWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZW1lbnQtYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZW1lbnQtYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VtZW50LWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlbWVudC1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAgIC0tY2xyLXByaW1hcnk6IHJnYig1NCwgMTEyLCAxOTkpO1xcclxcbiAgICAtLWNsci1saWdodDogI2Y0ZjRmNDtcXHJcXG4gICAgLS1jbHItZGFyazogIzMzMztcXHJcXG4gICAgLS1jbHItd2FybmluZzogcmdiKDk5LCAzNiwgMzYpO1xcclxcbiAgICAtLWNsci1uYXZIaWdobGlnaHQ6ICM0Zjc3OTQ7XFxyXFxuICAgIC0tY2xyLW1pbmVTaGFmdDogIzIzMjMyMztcXHJcXG4gICAgLS1jbHItZ2FsbGVyeTogI2VkZWRlZDtcXHJcXG4gICAgLS1jbHItZWxmR3JlZW46ICMwNTgxNzk7XFxyXFxuICAgIC0tY2xyLW5lYnVsYTogI2NiZGJkYTtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgcGFkZGluZzogMTAlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jbHItbmVidWxhKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jbHItbGlnaHQpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jbWVudVRvZ2dsZSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRvcDogNTBweDtcXHJcXG4gIGxlZnQ6IDUwcHg7ICBcXHJcXG4gIHotaW5kZXg6IDE7ICBcXHJcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNtZW51VG9nZ2xlIGxpIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jbHItbWluZVNoYWZ0KTtcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xcclxcbiAgLW8tdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xcclxcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xcclxcbiAgcGFkZGluZzogMTBweCAwcHggMTBweCA1MHB4O1xcclxcbiAgZm9udC1zaXplOiAyMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudVRvZ2dsZSBsaTpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tY2xyLWdhbGxlcnkpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWVsZkdyZWVuKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICBtYXJnaW46IDBweCAyNXB4IDBweCAyNXB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiA0N3B4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBUaGUgaGFtYnVyZ2VyIGJ1dHRvbiBoaWRkZW4gaW5zaWRlIGFuIGlucHV0IGVsZW1lbnQgKi9cXHJcXG4jbWVudVRvZ2dsZSBpbnB1dCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHdpZHRoOiAzMHB4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAtN3B4O1xcclxcbiAgbGVmdDogLTVweDsgIFxcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjsgIFxcclxcbiAgb3BhY2l0eTogMDsgLyogaGlkZSB0aGlzICovXFxyXFxuICB6LWluZGV4OiAyOyAvKiBhbmQgcGxhY2UgaXQgb3ZlciB0aGUgaGFtYnVyZ2VyICovICBcXHJcXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI21lbnVUb2dnbGUgbGFiZWwge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogMzBweDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG59XFxyXFxuI21lbnVUb2dnbGUgbGFiZWwgc3BhbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIEhhbWJ1cmdlclxcclxcbiAqL1xcclxcbiNtZW51VG9nZ2xlIGxhYmVsIGRpdiB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHdpZHRoOiAzMHB4O1xcclxcbiAgaGVpZ2h0OiAycHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA2cHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jbHItbWluZVNoYWZ0KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNweDsgIFxcclxcbiAgei1pbmRleDogMTsgIFxcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA0cHggMHB4OyAgXFxyXFxuICAgICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IDRweCAwcHg7ICBcXHJcXG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNHB4IDBweDtcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudVRvZ2dsZSBsYWJlbCBkaXY6Zmlyc3QtY2hpbGQge1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwJSAxMDAlO1xcclxcbiAgICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAwJSAxMDAlO1xcclxcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudVRvZ2dsZSBsYWJlbCBkaXY6bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcXHJcXG4gICAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XFxyXFxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBcXHJcXG4gKiBDaGFuZ2UgdGhlIGNvbG9yIG9mIHRoZSBoYW1idXJnZXIgd2hlbiB0b2dnbGVkXFxyXFxuICovXFxyXFxuI21lbnVUb2dnbGUgaW5wdXQ6Y2hlY2tlZCArIGxhYmVsIGRpdiB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jbHItZWxmR3JlZW4pO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIFVzZSBhYnNvbHV0ZSBwb3NpdGlvbmluZyB0byBwbGFjZSB0aGUgbWVudSBvZmYtc2NyZWVuXFxyXFxuICovXFxyXFxuI21lbnUge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDgwdnc7XFxyXFxuICBtYXJnaW46IC0xMDBweCAwIDAgLTUwcHg7XFxyXFxuICBwYWRkaW5nOiA1MHB4IDBweCA1MHB4IDBweDtcXHJcXG4gIHBhZGRpbmctdG9wOiAxMjVweDtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNsci1nYWxsZXJ5KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICAvKiBIaWRlIHRoZSBtZW51IG9mZi1zY3JlZW4gdG8gdGhlIGxlZnQgKi9cXHJcXG4gIGxlZnQ6IC0xMzAlO1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBsZWZ0IDAuM3MgZWFzZTtcXHJcXG4gIC1vLXRyYW5zaXRpb246IGxlZnQgMC4zcyBlYXNlO1xcclxcbiAgdHJhbnNpdGlvbjogbGVmdCAwLjNzIGVhc2U7IFxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKlxcclxcbiAqIFNsaWRlIHRoZSBtZW51IGluIGZyb20gbGVmdCB3aGVuIHRoZSBpbnB1dCBpcyBjaGVja2VkXFxyXFxuICovXFxyXFxuI21lbnVUb2dnbGUgaW5wdXQ6Y2hlY2tlZCB+IHVsIHtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbi8qIFxcclxcbjpyb290IHtcXHJcXG4gICAgLS1jbHItcHJpbWFyeTogcmdiKDU0LCAxMTIsIDE5OSk7XFxyXFxuICAgIC0tY2xyLWxpZ2h0OiAjZjRmNGY0O1xcclxcbiAgICAtLWNsci1kYXJrOiAjMzMzO1xcclxcbiAgICAtLWNsci13YXJuaW5nOiByZ2IoOTksIDM2LCAzNik7XFxyXFxufVxcclxcblxcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiV29yayBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNsci1saWdodCk7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQ6ICAgICBcXFwiaGVhZGVyIGhlYWRlciBoZWFkZXIgaGVhZGVyXFxcIiBhdXRvXFxyXFxuICAgIFxcXCIuLi4uLi4gbGlzdHMgIGFjdGl2ZSAuLi4uLi5cXFwiIGF1dG8gL1xcclxcbiAgICAxZnIgbWlubWF4KDEwMHB4LCAzMDBweCkgbWlubWF4KDI1MHB4LCA1MDBweCkgMWZyO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IGNhbGMoN3Z3ICsgMnJlbSk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxyXFxuICAgIG1hcmdpbjogLTAuM2VtIDAgMC41ZW07XFxyXFxufVxcclxcblxcclxcbi5hbGwtdGFza3Mge1xcclxcbiAgICBncmlkLWFyZWE6IGxpc3RzO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1saXN0IHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjc7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IGNpcmNsZTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxLjFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtbmFtZSB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtbmFtZTpob3ZlciB7XFxyXFxuICAgIG9wYWNpdHk6IDAuNztcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5idG4ge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQ6IDA7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi5idG4uY3JlYXRlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMC4yNWVtO1xcclxcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDI1MG1zIGVhc2UtaW47XFxyXFxufVxcclxcblxcclxcbi5idG4uY3JlYXRlOmhvdmVyIHtcXHJcXG4gICAgb3BhY2l0eTogMC43O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLmRlbGV0ZSB7XFxyXFxuICAgIG9wYWNpdHk6IDAuNztcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAyMDBtcztcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi5kZWxldGU6aG92ZXIge1xcclxcbiAgICBjb2xvcjogdmFyKC0tY2xyLXdhcm5pbmcpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3IHtcXHJcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBjdXJyZW50Q29sb3I7XFxyXFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogMC4yNWVtO1xcclxcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tIDE1MG1zIGVhc2UtaW47XFxyXFxuICAgIG9yZGVyOiAyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXHJcXG4gICAgb3BhY2l0eTogMC40O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxyXFxuICAgIG9wYWNpdHk6IDAuNDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldzo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXHJcXG4gICAgb3BhY2l0eTogMC40O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3OjpwbGFjZWhvbGRlciB7XFxyXFxuICAgIG9wYWNpdHk6IDAuNDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldzpmb2N1cyB7XFxyXFxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldzpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxyXFxuICAgIG9wYWNpdHk6IDAuMTU7XFxyXFxufVxcclxcblxcclxcbi5uZXc6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXHJcXG4gICAgb3BhY2l0eTogMC4xNTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldzpmb2N1czo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXHJcXG4gICAgb3BhY2l0eTogMC4xNTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldzpmb2N1czo6cGxhY2Vob2xkZXIge1xcclxcbiAgICBvcGFjaXR5OiAwLjE1O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3Lmxpc3Qge1xcclxcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy50YXNrIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZS1saXN0IHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tbGlzdCB7XFxyXFxuICAgIC0tc3BhY2VyOiAycmVtO1xcclxcbiAgICBncmlkLWFyZWE6IGFjdGl2ZTtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2xyLWxpZ2h0KTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNsci1kYXJrKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taGVhZGVyIHtcXHJcXG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2VyKTtcXHJcXG4gICAgYmFja2dyb3VuZDogI2U0ZTRlNDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC10aXRsZSB7XFxyXFxuICAgIG1hcmdpbjogMCAxZW0gMCAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1jb3VudCB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1ib2R5IHtcXHJcXG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2VyKTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LXRhc2stY3JlYXRvciAuY3JlYXRlIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcblxcclxcbi50YXNrIGxhYmVsIHtcXHJcXG4gICAgZGlzcGxheTogZmxleC1pbmxpbmU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEuMjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2s6OmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGJvdHRvbTogLTAuNWVtO1xcclxcbiAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgYmFja2dyb3VuZDogY3VycmVudENvbG9yO1xcclxcbiAgICBvcGFjaXR5OiAwLjE7XFxyXFxufVxcclxcblxcclxcbi5jdXN0b20tY2hlY2tib3gge1xcclxcbiAgICAtLXNpemU6IDAuNzVlbTtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICB3aWR0aDogdmFyKC0tc2l6ZSk7XFxyXFxuICAgIGhlaWdodDogdmFyKC0tc2l6ZSk7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogdmFyKC0tc2l6ZSk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgY3VycmVudENvbG9yO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0LCAtd2Via2l0LXRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2s6aG92ZXIgLmN1c3RvbS1jaGVja2JveCxcXHJcXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpmb2N1cytsYWJlbCAuY3VzdG9tLWNoZWNrYm94IHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCtsYWJlbCAuY3VzdG9tLWNoZWNrYm94IHtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2xyLXByaW1hcnkpO1xcclxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXHJcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDBweCAycHggd2hpdGU7XFxyXFxufVxcclxcblxcclxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQrbGFiZWwge1xcclxcbiAgICBvcGFjaXR5OiAwLjU7XFxyXFxufVxcclxcblxcclxcbi50YXNrIGxhYmVsOjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBsZWZ0OiAxLjVlbTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIGhlaWdodDogM3B4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiBjdXJyZW50Q29sb3I7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xcclxcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcXHJcXG4gICAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMTUwbXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNTBtcyBlYXNlLWluLW91dDtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE1MG1zIGVhc2UtaW4tb3V0LCAtd2Via2l0LXRyYW5zZm9ybSAxNTBtcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCtsYWJlbDo6YWZ0ZXIge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDEpO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xcclxcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLXN0dWZmIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGJvdHRvbTogLTM1cHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItbGlnaHQpO1xcclxcbn0gKi9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGdDQUFnQztJQUNoQyxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtJQUM5QiwyQkFBMkI7SUFDM0Isd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksMENBQTBDO0lBQzFDLFlBQVk7QUFDaEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLDZCQUE2QjtFQUM3Qix1QkFBdUI7QUFDekI7OztBQUdBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsc0JBQXNCO0dBQ3JCLHFCQUFxQjtPQUNqQixpQkFBaUI7QUFDeEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsMkJBQTJCO0VBQzNCLG1DQUFtQztFQUNuQyw4QkFBOEI7RUFDOUIsMkJBQTJCO0VBQzNCLDJCQUEyQjtFQUMzQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFDQUFxQztFQUNyQyxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7O0FBR0Esd0RBQXdEO0FBQ3hEO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsVUFBVTtFQUNWLGVBQWU7RUFDZixVQUFVLEVBQUUsY0FBYztFQUMxQixVQUFVLEVBQUUsb0NBQW9DO0VBQ2hELDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUVBOztFQUVFO0FBQ0Y7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGlDQUFpQztNQUM3Qiw2QkFBNkI7VUFDekIseUJBQXlCO0VBQ2pDLGlDQUFpQztFQUNqQyw0QkFBNEI7RUFDNUIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsaUNBQWlDO01BQzdCLDZCQUE2QjtVQUN6Qix5QkFBeUI7QUFDbkM7O0FBRUE7SUFDSSwrQkFBK0I7TUFDN0IsMkJBQTJCO1VBQ3ZCLHVCQUF1QjtBQUNqQzs7QUFFQTs7RUFFRTtBQUNGO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBOztFQUVFO0FBQ0Y7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHdCQUF3QjtFQUN4QiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLHlDQUF5QztFQUN6QyxXQUFXO0VBQ1gsa0NBQWtDO0VBQ2xDLDZCQUE2QjtFQUM3QiwwQkFBMEI7QUFDNUI7OztBQUdBOztFQUVFO0FBQ0Y7RUFDRSxPQUFPO0FBQ1Q7Ozs7OztBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvUkdcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgICAtLWNsci1wcmltYXJ5OiByZ2IoNTQsIDExMiwgMTk5KTtcXHJcXG4gICAgLS1jbHItbGlnaHQ6ICNmNGY0ZjQ7XFxyXFxuICAgIC0tY2xyLWRhcms6ICMzMzM7XFxyXFxuICAgIC0tY2xyLXdhcm5pbmc6IHJnYig5OSwgMzYsIDM2KTtcXHJcXG4gICAgLS1jbHItbmF2SGlnaGxpZ2h0OiAjNGY3Nzk0O1xcclxcbiAgICAtLWNsci1taW5lU2hhZnQ6ICMyMzIzMjM7XFxyXFxuICAgIC0tY2xyLWdhbGxlcnk6ICNlZGVkZWQ7XFxyXFxuICAgIC0tY2xyLWVsZkdyZWVuOiAjMDU4MTc5O1xcclxcbiAgICAtLWNsci1uZWJ1bGE6ICNjYmRiZGE7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIHBhZGRpbmc6IDEwJTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tY2xyLW5lYnVsYSk7XFxyXFxuICBjb2xvcjogdmFyKC0tY2xyLWxpZ2h0KTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI21lbnVUb2dnbGUge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IDUwcHg7XFxyXFxuICBsZWZ0OiA1MHB4OyAgXFxyXFxuICB6LWluZGV4OiAxOyAgXFxyXFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudVRvZ2dsZSBsaSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogdmFyKC0tY2xyLW1pbmVTaGFmdCk7XFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcXHJcXG4gIC1vLXRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcXHJcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMHB4IDEwcHggNTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMjJweDtcXHJcXG59XFxyXFxuXFxyXFxuI21lbnVUb2dnbGUgbGk6aG92ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLWNsci1nYWxsZXJ5KTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1lbGZHcmVlbik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgbWFyZ2luOiAwcHggMjVweCAwcHggMjVweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogNDdweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogVGhlIGhhbWJ1cmdlciBidXR0b24gaGlkZGVuIGluc2lkZSBhbiBpbnB1dCBlbGVtZW50ICovXFxyXFxuI21lbnVUb2dnbGUgaW5wdXQge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogMzBweDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogLTdweDtcXHJcXG4gIGxlZnQ6IC01cHg7ICBcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7ICBcXHJcXG4gIG9wYWNpdHk6IDA7IC8qIGhpZGUgdGhpcyAqL1xcclxcbiAgei1pbmRleDogMjsgLyogYW5kIHBsYWNlIGl0IG92ZXIgdGhlIGhhbWJ1cmdlciAqLyAgXFxyXFxuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNtZW51VG9nZ2xlIGxhYmVsIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgd2lkdGg6IDMwcHg7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxufVxcclxcbiNtZW51VG9nZ2xlIGxhYmVsIHNwYW4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiBIYW1idXJnZXJcXHJcXG4gKi9cXHJcXG4jbWVudVRvZ2dsZSBsYWJlbCBkaXYge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogMzBweDtcXHJcXG4gIGhlaWdodDogMnB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tY2xyLW1pbmVTaGFmdCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7ICBcXHJcXG4gIHotaW5kZXg6IDE7ICBcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNHB4IDBweDsgIFxcclxcbiAgICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiA0cHggMHB4OyAgXFxyXFxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDRweCAwcHg7XFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuI21lbnVUb2dnbGUgbGFiZWwgZGl2OmZpcnN0LWNoaWxkIHtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCUgMTAwJTtcXHJcXG4gICAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogMCUgMTAwJTtcXHJcXG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuI21lbnVUb2dnbGUgbGFiZWwgZGl2Om50aC1jaGlsZCgyKSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XFxyXFxuICAgICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xcclxcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyogXFxyXFxuICogQ2hhbmdlIHRoZSBjb2xvciBvZiB0aGUgaGFtYnVyZ2VyIHdoZW4gdG9nZ2xlZFxcclxcbiAqL1xcclxcbiNtZW51VG9nZ2xlIGlucHV0OmNoZWNrZWQgKyBsYWJlbCBkaXYge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tY2xyLWVsZkdyZWVuKTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiBVc2UgYWJzb2x1dGUgcG9zaXRpb25pbmcgdG8gcGxhY2UgdGhlIG1lbnUgb2ZmLXNjcmVlblxcclxcbiAqL1xcclxcbiNtZW51IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiA4MHZ3O1xcclxcbiAgbWFyZ2luOiAtMTAwcHggMCAwIC01MHB4O1xcclxcbiAgcGFkZGluZzogNTBweCAwcHggNTBweCAwcHg7XFxyXFxuICBwYWRkaW5nLXRvcDogMTI1cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jbHItZ2FsbGVyeSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgLyogSGlkZSB0aGUgbWVudSBvZmYtc2NyZWVuIHRvIHRoZSBsZWZ0ICovXFxyXFxuICBsZWZ0OiAtMTMwJTtcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbGVmdCAwLjNzIGVhc2U7XFxyXFxuICAtby10cmFuc2l0aW9uOiBsZWZ0IDAuM3MgZWFzZTtcXHJcXG4gIHRyYW5zaXRpb246IGxlZnQgMC4zcyBlYXNlOyBcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLypcXHJcXG4gKiBTbGlkZSB0aGUgbWVudSBpbiBmcm9tIGxlZnQgd2hlbiB0aGUgaW5wdXQgaXMgY2hlY2tlZFxcclxcbiAqL1xcclxcbiNtZW51VG9nZ2xlIGlucHV0OmNoZWNrZWQgfiB1bCB7XFxyXFxuICBsZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiBcXHJcXG46cm9vdCB7XFxyXFxuICAgIC0tY2xyLXByaW1hcnk6IHJnYig1NCwgMTEyLCAxOTkpO1xcclxcbiAgICAtLWNsci1saWdodDogI2Y0ZjRmNDtcXHJcXG4gICAgLS1jbHItZGFyazogIzMzMztcXHJcXG4gICAgLS1jbHItd2FybmluZzogcmdiKDk5LCAzNiwgMzYpO1xcclxcbn1cXHJcXG5cXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIldvcmsgU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItbGlnaHQpO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkOiAgICAgXFxcImhlYWRlciBoZWFkZXIgaGVhZGVyIGhlYWRlclxcXCIgYXV0b1xcclxcbiAgICBcXFwiLi4uLi4uIGxpc3RzICBhY3RpdmUgLi4uLi4uXFxcIiBhdXRvIC9cXHJcXG4gICAgMWZyIG1pbm1heCgxMDBweCwgMzAwcHgpIG1pbm1heCgyNTBweCwgNTAwcHgpIDFmcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiBjYWxjKDd2dyArIDJyZW0pO1xcclxcbiAgICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xcclxcbiAgICBtYXJnaW46IC0wLjNlbSAwIDAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWxsLXRhc2tzIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBsaXN0cztcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stbGlzdCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS43O1xcclxcbiAgICBsaXN0LXN0eWxlOiBjaXJjbGU7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMS4xZW07XFxyXFxufVxcclxcblxcclxcbi5saXN0LW5hbWUge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5saXN0LW5hbWU6aG92ZXIge1xcclxcbiAgICBvcGFjaXR5OiAwLjc7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAwO1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGNvbG9yOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLmNyZWF0ZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMjVlbTtcXHJcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAyNTBtcyBlYXNlLWluO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLmNyZWF0ZTpob3ZlciB7XFxyXFxuICAgIG9wYWNpdHk6IDAuNztcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi5kZWxldGUge1xcclxcbiAgICBvcGFjaXR5OiAwLjc7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMjAwbXM7XFxyXFxufVxcclxcblxcclxcbi5idG4uZGVsZXRlOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNsci13YXJuaW5nKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldyB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgY3VycmVudENvbG9yO1xcclxcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDAuMjVlbTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbSAxNTBtcyBlYXNlLWluO1xcclxcbiAgICBvcmRlcjogMjtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldzo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxyXFxuICAgIG9wYWNpdHk6IDAuNDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldzotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcclxcbiAgICBvcGFjaXR5OiAwLjQ7XFxyXFxufVxcclxcblxcclxcbi5uZXc6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxyXFxuICAgIG9wYWNpdHk6IDAuNDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldzo6cGxhY2Vob2xkZXIge1xcclxcbiAgICBvcGFjaXR5OiAwLjQ7XFxyXFxufVxcclxcblxcclxcbi5uZXc6Zm9jdXMge1xcclxcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAzcHg7XFxyXFxufVxcclxcblxcclxcbi5uZXc6Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xcclxcbiAgICBvcGFjaXR5OiAwLjE1O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3OmZvY3VzOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxyXFxuICAgIG9wYWNpdHk6IDAuMTU7XFxyXFxufVxcclxcblxcclxcbi5uZXc6Zm9jdXM6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxyXFxuICAgIG9wYWNpdHk6IDAuMTU7XFxyXFxufVxcclxcblxcclxcbi5uZXc6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcXHJcXG4gICAgb3BhY2l0eTogMC4xNTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy5saXN0IHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxufVxcclxcblxcclxcbi5uZXcudGFzayB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmUtbGlzdCB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWxpc3Qge1xcclxcbiAgICAtLXNwYWNlcjogMnJlbTtcXHJcXG4gICAgZ3JpZC1hcmVhOiBhY3RpdmU7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNsci1saWdodCk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItZGFyayk7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWhlYWRlciB7XFxyXFxuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNlcik7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNlNGU0ZTQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtdGl0bGUge1xcclxcbiAgICBtYXJnaW46IDAgMWVtIDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stY291bnQge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tYm9keSB7XFxyXFxuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNlcik7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy10YXNrLWNyZWF0b3IgLmNyZWF0ZSB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxyXFxufVxcclxcblxcclxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayBsYWJlbCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXgtaW5saW5lO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi50YXNrIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxLjI1ZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrOjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBib3R0b206IC0wLjVlbTtcXHJcXG4gICAgaGVpZ2h0OiAxcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IGN1cnJlbnRDb2xvcjtcXHJcXG4gICAgb3BhY2l0eTogMC4xO1xcclxcbn1cXHJcXG5cXHJcXG4uY3VzdG9tLWNoZWNrYm94IHtcXHJcXG4gICAgLS1zaXplOiAwLjc1ZW07XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgd2lkdGg6IHZhcigtLXNpemUpO1xcclxcbiAgICBoZWlnaHQ6IHZhcigtLXNpemUpO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IHZhcigtLXNpemUpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICAgIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0O1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dCwgLXdlYmtpdC10cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi50YXNrOmhvdmVyIC5jdXN0b20tY2hlY2tib3gsXFxyXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Zm9jdXMrbGFiZWwgLmN1c3RvbS1jaGVja2JveCB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxyXFxufVxcclxcblxcclxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQrbGFiZWwgLmN1c3RvbS1jaGVja2JveCB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNsci1wcmltYXJ5KTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxyXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwcHggMnB4IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkK2xhYmVsIHtcXHJcXG4gICAgb3BhY2l0eTogMC41O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayBsYWJlbDo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgbGVmdDogMS41ZW07XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBoZWlnaHQ6IDNweDtcXHJcXG4gICAgYmFja2dyb3VuZDogY3VycmVudENvbG9yO1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDApO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcXHJcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XFxyXFxuICAgIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDE1MG1zIGVhc2UtaW4tb3V0O1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTUwbXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNTBtcyBlYXNlLWluLW91dCwgLXdlYmtpdC10cmFuc2Zvcm0gMTUwbXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQrbGFiZWw6OmFmdGVyIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgxKTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcXHJcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZS1zdHVmZiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBib3R0b206IC0zNXB4O1xcclxcbiAgICBjb2xvcjogdmFyKC0tY2xyLWxpZ2h0KTtcXHJcXG59ICovXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUvc3R5bGVzLmNzcyc7XHJcbi8vIGltcG9ydCBnaXRJbWFnZSBmcm9tICcuL2ltYWdlcy9naXQtbG9nby5wbmcnO1xyXG5cclxuXHJcbmNvbnNvbGUubG9nKFwiaXQgd29ya3NcIik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9