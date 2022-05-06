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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --clr-primary: rgb(54, 112, 199);\r\n    --clr-light: #f4f4f4;\r\n    --clr-dark: rgb(58, 58, 58);\r\n    --clr-warning: rgb(99, 36, 36);\r\n    --clr-navHighlight: #4f7794;\r\n    --clr-mineShaft: #232323;\r\n    --clr-gallery: #ededed;\r\n    --clr-elfGreen: #058179;\r\n    --clr-nebula: #cbdbda;\r\n}\r\n\r\nhtml {\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n    padding: 10% 10% 10% 10%;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  background: var(--clr-nebula);\r\n  color: var(--clr-mineShaft);\r\n}\r\n\r\nh1 {\r\n    color: var(--clr-dark);\r\n    font-size: 3rem;\r\n    display: flex;\r\n    justify-content: center;\r\n    margin: -0.5em 0.5em 0.5em 0.5em;\r\n}\r\n\r\n#menuToggle {\r\n  display: block;\r\n  position: relative;\r\n  top: 50px;\r\n  left: 50px;  \r\n  z-index: 1;  \r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n   -ms-user-select: none;\r\n       user-select: none;\r\n}\r\n\r\n#menuToggle li {\r\n  text-decoration: none;\r\n  color: var(--clr-mineShaft);\r\n  -webkit-transition: color 0.3s ease;\r\n  -o-transition: color 0.3s ease;\r\n  transition: color 0.3s ease;\r\n  padding: 10px 0px 10px 50px;\r\n  font-size: 22px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n#menuToggle li:hover {\r\n  /* color: var(--clr-gallery); */\r\n  /* background-color: var(--clr-elfGreen);\r\n  border-radius: 35px; */\r\n  font-weight: 700;\r\n  /* margin: 0px 25px 0px 25px;\r\n  padding-left: 37px; */\r\n}\r\n\r\n\r\n/* The hamburger button hidden inside an input element */\r\n#menuToggle input {\r\n  display: block;\r\n  width: 30px;\r\n  height: 30px;\r\n  position: absolute;\r\n  top: -7px;\r\n  left: -5px;  \r\n  padding: 0;\r\n  cursor: pointer;  \r\n  opacity: 0; /* hide this */\r\n  z-index: 2; /* and place it over the hamburger */  \r\n  -webkit-touch-callout: none;\r\n}\r\n\r\n#menuToggle label {\r\n  position: relative;\r\n  display: block;\r\n  width: 30px;\r\n  height: 30px;\r\n}\r\n#menuToggle label span {\r\n  display: none;\r\n}\r\n\r\n/*\r\n * Hamburger\r\n */\r\n#menuToggle label div {\r\n  display: block;\r\n  width: 30px;\r\n  height: 2px;\r\n  margin-bottom: 6px;\r\n  position: relative;\r\n  background: var(--clr-elfGreen);\r\n  border-radius: 5px;  \r\n  z-index: 1;  \r\n  -webkit-transform-origin: 4px 0px;  \r\n      -ms-transform-origin: 4px 0px;  \r\n          transform-origin: 4px 0px;\r\n  -webkit-transition: all 0.3s ease;\r\n  -o-transition: all 0.3s ease;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n#menuToggle label div:first-child {\r\n  -webkit-transform-origin: 0% 100%;\r\n      -ms-transform-origin: 0% 100%;\r\n          transform-origin: 0% 100%;\r\n}\r\n\r\n#menuToggle label div:nth-child(2) {\r\n    -webkit-transform-origin: 0% 0%;\r\n      -ms-transform-origin: 0% 0%;\r\n          transform-origin: 0% 0%;\r\n}\r\n\r\n/* \r\n * Change the color of the hamburger when toggled\r\n */\r\n#menuToggle input:checked + label div {\r\n  background: var(--clr-mineShaft);\r\n}\r\n\r\n/*\r\n * Use absolute positioning to place the menu off-screen\r\n */\r\n#menu {\r\n  position: absolute;\r\n  width: 80vw;\r\n  margin: -80px 0 0 -50px;\r\n  padding: 50px 0px 50px 0px;\r\n  padding-top: 125px;\r\n  background: var(--clr-light);\r\n  border-radius: 20px;\r\n  list-style-type: none;\r\n  /* Hide the menu off-screen to the left */\r\n  left: 0;\r\n  -webkit-transition: left 0.3s ease;\r\n  -o-transition: left 0.3s ease;\r\n  transition: left 0.3s ease; \r\n}\r\n\r\n\r\n/*\r\n * Slide the menu in from left when the input is checked\r\n */\r\n#menuToggle input:checked ~ ul {\r\n  \r\n  transition: left 0.3s ease; \r\n  left: -130%;\r\n}\r\n\r\n.list-img {\r\n    width: 1.7em;\r\n    padding-right: 10px;\r\n}\r\n\r\n.active-list {\r\n    background-color: var(--clr-elfGreen);\r\n    border-radius: 35px;\r\n    margin: 0px 25px 0px 25px;\r\n    /* padding-left: 17px; */\r\n    /* font-weight: 700; */\r\n}\r\n\r\n\r\n\r\n/* \r\n:root {\r\n    --clr-primary: rgb(54, 112, 199);\r\n    --clr-light: #f4f4f4;\r\n    --clr-dark: #333;\r\n    --clr-warning: rgb(99, 36, 36);\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n    font-family: inherit;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    font-family: \"Work Sans\", sans-serif;\r\n    font-weight: 300;\r\n    font-size: 1.5rem;\r\n    background-color: var(--clr-primary);\r\n    color: var(--clr-light);\r\n    display: grid;\r\n    grid:     \"header header header header\" auto\r\n    \"...... lists  active ......\" auto /\r\n    1fr minmax(100px, 300px) minmax(250px, 500px) 1fr;\r\n}\r\n\r\n.title {\r\n    grid-area: header;\r\n    text-align: center;\r\n    font-size: calc(7vw + 2rem);\r\n    font-weight: 900;\r\n    color: rgba(0, 0, 0, 0.1);\r\n    letter-spacing: 2px;\r\n    margin: -0.3em 0 0.5em;\r\n}\r\n\r\n.all-tasks {\r\n    grid-area: lists;\r\n}\r\n\r\n.task-list {\r\n    font-size: 1.2rem;\r\n    line-height: 1.7;\r\n    list-style: circle;\r\n    padding-left: 1.1em;\r\n}\r\n\r\n.list-name {\r\n    cursor: pointer;\r\n}\r\n\r\n.list-name:hover {\r\n    opacity: 0.7;\r\n}\r\n\r\nform {\r\n    display: flex;\r\n}\r\n\r\n.btn {\r\n    cursor: pointer;\r\n    background: 0;\r\n    border: 0;\r\n    padding: 0;\r\n    color: inherit;\r\n}\r\n\r\n.btn.create {\r\n    font-size: 1.5rem;\r\n    font-weight: 900;\r\n    margin-right: 0.25em;\r\n    transition: opacity 250ms ease-in;\r\n}\r\n\r\n.btn.create:hover {\r\n    opacity: 0.7;\r\n}\r\n\r\n.btn.delete {\r\n    opacity: 0.7;\r\n    font-size: 1rem;\r\n    transition: color 200ms;\r\n}\r\n\r\n.btn.delete:hover {\r\n    color: var(--clr-warning);\r\n}\r\n\r\n.new {\r\n    background: transparent;\r\n    border: 0;\r\n    color: inherit;\r\n    border-bottom: 1px solid currentColor;\r\n    font-size: inherit;\r\n    outline: none;\r\n    padding: 0.25em;\r\n    transition: border-bottom 150ms ease-in;\r\n    order: 2;\r\n}\r\n\r\n.new::-webkit-input-placeholder {\r\n    opacity: 0.4;\r\n}\r\n\r\n.new:-ms-input-placeholder {\r\n    opacity: 0.4;\r\n}\r\n\r\n.new::-ms-input-placeholder {\r\n    opacity: 0.4;\r\n}\r\n\r\n.new::placeholder {\r\n    opacity: 0.4;\r\n}\r\n\r\n.new:focus {\r\n    border-bottom-width: 3px;\r\n}\r\n\r\n.new:focus::-webkit-input-placeholder {\r\n    opacity: 0.15;\r\n}\r\n\r\n.new:focus:-ms-input-placeholder {\r\n    opacity: 0.15;\r\n}\r\n\r\n.new:focus::-ms-input-placeholder {\r\n    opacity: 0.15;\r\n}\r\n\r\n.new:focus::placeholder {\r\n    opacity: 0.15;\r\n}\r\n\r\n.new.list {\r\n    font-size: 1.1rem;\r\n}\r\n\r\n.new.task {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.active-list {\r\n    font-weight: 700;\r\n}\r\n\r\n.todo-list {\r\n    --spacer: 2rem;\r\n    grid-area: active;\r\n    background: var(--clr-light);\r\n    color: var(--clr-dark);\r\n}\r\n\r\n.todo-header {\r\n    padding: var(--spacer);\r\n    background: #e4e4e4;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.list-title {\r\n    margin: 0 1em 0 0;\r\n}\r\n\r\n.task-count {\r\n    margin: 0;\r\n    font-size: 1rem;\r\n}\r\n\r\n.todo-body {\r\n    padding: var(--spacer);\r\n    position: relative;\r\n}\r\n\r\n.new-task-creator .create {\r\n    color: var(--clr-primary);\r\n}\r\n\r\n[type=\"checkbox\"] {\r\n    opacity: 0;\r\n    position: absolute;\r\n}\r\n\r\n.task label {\r\n    display: flex-inline;\r\n    align-items: center;\r\n    position: relative;\r\n}\r\n\r\n.task {\r\n    position: relative;\r\n    margin-bottom: 1.25em;\r\n}\r\n\r\n.task::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    right: 0;\r\n    left: 0;\r\n    bottom: -0.5em;\r\n    height: 1px;\r\n    background: currentColor;\r\n    opacity: 0.1;\r\n}\r\n\r\n.custom-checkbox {\r\n    --size: 0.75em;\r\n    display: inline-block;\r\n    width: var(--size);\r\n    height: var(--size);\r\n    margin-right: var(--size);\r\n    cursor: pointer;\r\n    border: 2px solid currentColor;\r\n    border-radius: 50%;\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n    transition: -webkit-transform 300ms ease-in-out;\r\n    transition: transform 300ms ease-in-out;\r\n    transition: transform 300ms ease-in-out, -webkit-transform 300ms ease-in-out;\r\n}\r\n\r\n.task:hover .custom-checkbox,\r\n[type=\"checkbox\"]:focus+label .custom-checkbox {\r\n    -webkit-transform: scale(1.2);\r\n    transform: scale(1.2);\r\n    color: var(--clr-primary);\r\n}\r\n\r\n[type=\"checkbox\"]:checked+label .custom-checkbox {\r\n    background: var(--clr-primary);\r\n    border-color: var(--clr-primary);\r\n    box-shadow: inset 0 0 0px 2px white;\r\n}\r\n\r\n[type=\"checkbox\"]:checked+label {\r\n    opacity: 0.5;\r\n}\r\n\r\n.task label::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    left: 1.5em;\r\n    top: 50%;\r\n    height: 3px;\r\n    background: currentColor;\r\n    -webkit-transform: scaleX(0);\r\n    transform: scaleX(0);\r\n    -webkit-transform-origin: right;\r\n    transform-origin: right;\r\n    transition: -webkit-transform 150ms ease-in-out;\r\n    transition: transform 150ms ease-in-out;\r\n    transition: transform 150ms ease-in-out, -webkit-transform 150ms ease-in-out;\r\n}\r\n\r\n[type=\"checkbox\"]:checked+label::after {\r\n    -webkit-transform: scaleX(1);\r\n    transform: scaleX(1);\r\n    -webkit-transform-origin: left;\r\n    transform-origin: left;\r\n}\r\n\r\n.delete-stuff {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    position: absolute;\r\n    width: 100%;\r\n    left: 0;\r\n    bottom: -35px;\r\n    color: var(--clr-light);\r\n} */", "",{"version":3,"sources":["webpack://./src/style/styles.css"],"names":[],"mappings":"AAAA;IACI,gCAAgC;IAChC,oBAAoB;IACpB,2BAA2B;IAC3B,8BAA8B;IAC9B,2BAA2B;IAC3B,wBAAwB;IACxB,sBAAsB;IACtB,uBAAuB;IACvB,qBAAqB;AACzB;;AAEA;IACI,0CAA0C;IAC1C,wBAAwB;AAC5B;;AAEA;EACE,SAAS;EACT,UAAU;EACV,6BAA6B;EAC7B,2BAA2B;AAC7B;;AAEA;IACI,sBAAsB;IACtB,eAAe;IACf,aAAa;IACb,uBAAuB;IACvB,gCAAgC;AACpC;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,UAAU;EACV,yBAAyB;EACzB,sBAAsB;GACrB,qBAAqB;OACjB,iBAAiB;AACxB;;AAEA;EACE,qBAAqB;EACrB,2BAA2B;EAC3B,mCAAmC;EACnC,8BAA8B;EAC9B,2BAA2B;EAC3B,2BAA2B;EAC3B,eAAe;EACf,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,+BAA+B;EAC/B;wBACsB;EACtB,gBAAgB;EAChB;uBACqB;AACvB;;;AAGA,wDAAwD;AACxD;EACE,cAAc;EACd,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,UAAU;EACV,eAAe;EACf,UAAU,EAAE,cAAc;EAC1B,UAAU,EAAE,oCAAoC;EAChD,2BAA2B;AAC7B;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,WAAW;EACX,YAAY;AACd;AACA;EACE,aAAa;AACf;;AAEA;;EAEE;AACF;EACE,cAAc;EACd,WAAW;EACX,WAAW;EACX,kBAAkB;EAClB,kBAAkB;EAClB,+BAA+B;EAC/B,kBAAkB;EAClB,UAAU;EACV,iCAAiC;MAC7B,6BAA6B;UACzB,yBAAyB;EACjC,iCAAiC;EACjC,4BAA4B;EAC5B,yBAAyB;AAC3B;;AAEA;EACE,iCAAiC;MAC7B,6BAA6B;UACzB,yBAAyB;AACnC;;AAEA;IACI,+BAA+B;MAC7B,2BAA2B;UACvB,uBAAuB;AACjC;;AAEA;;EAEE;AACF;EACE,gCAAgC;AAClC;;AAEA;;EAEE;AACF;EACE,kBAAkB;EAClB,WAAW;EACX,uBAAuB;EACvB,0BAA0B;EAC1B,kBAAkB;EAClB,4BAA4B;EAC5B,mBAAmB;EACnB,qBAAqB;EACrB,yCAAyC;EACzC,OAAO;EACP,kCAAkC;EAClC,6BAA6B;EAC7B,0BAA0B;AAC5B;;;AAGA;;EAEE;AACF;;EAEE,0BAA0B;EAC1B,WAAW;AACb;;AAEA;IACI,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,qCAAqC;IACrC,mBAAmB;IACnB,yBAAyB;IACzB,wBAAwB;IACxB,sBAAsB;AAC1B;;;;AAIA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GAoRG","sourcesContent":[":root {\r\n    --clr-primary: rgb(54, 112, 199);\r\n    --clr-light: #f4f4f4;\r\n    --clr-dark: rgb(58, 58, 58);\r\n    --clr-warning: rgb(99, 36, 36);\r\n    --clr-navHighlight: #4f7794;\r\n    --clr-mineShaft: #232323;\r\n    --clr-gallery: #ededed;\r\n    --clr-elfGreen: #058179;\r\n    --clr-nebula: #cbdbda;\r\n}\r\n\r\nhtml {\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n    padding: 10% 10% 10% 10%;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  background: var(--clr-nebula);\r\n  color: var(--clr-mineShaft);\r\n}\r\n\r\nh1 {\r\n    color: var(--clr-dark);\r\n    font-size: 3rem;\r\n    display: flex;\r\n    justify-content: center;\r\n    margin: -0.5em 0.5em 0.5em 0.5em;\r\n}\r\n\r\n#menuToggle {\r\n  display: block;\r\n  position: relative;\r\n  top: 50px;\r\n  left: 50px;  \r\n  z-index: 1;  \r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n   -ms-user-select: none;\r\n       user-select: none;\r\n}\r\n\r\n#menuToggle li {\r\n  text-decoration: none;\r\n  color: var(--clr-mineShaft);\r\n  -webkit-transition: color 0.3s ease;\r\n  -o-transition: color 0.3s ease;\r\n  transition: color 0.3s ease;\r\n  padding: 10px 0px 10px 50px;\r\n  font-size: 22px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n#menuToggle li:hover {\r\n  /* color: var(--clr-gallery); */\r\n  /* background-color: var(--clr-elfGreen);\r\n  border-radius: 35px; */\r\n  font-weight: 700;\r\n  /* margin: 0px 25px 0px 25px;\r\n  padding-left: 37px; */\r\n}\r\n\r\n\r\n/* The hamburger button hidden inside an input element */\r\n#menuToggle input {\r\n  display: block;\r\n  width: 30px;\r\n  height: 30px;\r\n  position: absolute;\r\n  top: -7px;\r\n  left: -5px;  \r\n  padding: 0;\r\n  cursor: pointer;  \r\n  opacity: 0; /* hide this */\r\n  z-index: 2; /* and place it over the hamburger */  \r\n  -webkit-touch-callout: none;\r\n}\r\n\r\n#menuToggle label {\r\n  position: relative;\r\n  display: block;\r\n  width: 30px;\r\n  height: 30px;\r\n}\r\n#menuToggle label span {\r\n  display: none;\r\n}\r\n\r\n/*\r\n * Hamburger\r\n */\r\n#menuToggle label div {\r\n  display: block;\r\n  width: 30px;\r\n  height: 2px;\r\n  margin-bottom: 6px;\r\n  position: relative;\r\n  background: var(--clr-elfGreen);\r\n  border-radius: 5px;  \r\n  z-index: 1;  \r\n  -webkit-transform-origin: 4px 0px;  \r\n      -ms-transform-origin: 4px 0px;  \r\n          transform-origin: 4px 0px;\r\n  -webkit-transition: all 0.3s ease;\r\n  -o-transition: all 0.3s ease;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n#menuToggle label div:first-child {\r\n  -webkit-transform-origin: 0% 100%;\r\n      -ms-transform-origin: 0% 100%;\r\n          transform-origin: 0% 100%;\r\n}\r\n\r\n#menuToggle label div:nth-child(2) {\r\n    -webkit-transform-origin: 0% 0%;\r\n      -ms-transform-origin: 0% 0%;\r\n          transform-origin: 0% 0%;\r\n}\r\n\r\n/* \r\n * Change the color of the hamburger when toggled\r\n */\r\n#menuToggle input:checked + label div {\r\n  background: var(--clr-mineShaft);\r\n}\r\n\r\n/*\r\n * Use absolute positioning to place the menu off-screen\r\n */\r\n#menu {\r\n  position: absolute;\r\n  width: 80vw;\r\n  margin: -80px 0 0 -50px;\r\n  padding: 50px 0px 50px 0px;\r\n  padding-top: 125px;\r\n  background: var(--clr-light);\r\n  border-radius: 20px;\r\n  list-style-type: none;\r\n  /* Hide the menu off-screen to the left */\r\n  left: 0;\r\n  -webkit-transition: left 0.3s ease;\r\n  -o-transition: left 0.3s ease;\r\n  transition: left 0.3s ease; \r\n}\r\n\r\n\r\n/*\r\n * Slide the menu in from left when the input is checked\r\n */\r\n#menuToggle input:checked ~ ul {\r\n  \r\n  transition: left 0.3s ease; \r\n  left: -130%;\r\n}\r\n\r\n.list-img {\r\n    width: 1.7em;\r\n    padding-right: 10px;\r\n}\r\n\r\n.active-list {\r\n    background-color: var(--clr-elfGreen);\r\n    border-radius: 35px;\r\n    margin: 0px 25px 0px 25px;\r\n    /* padding-left: 17px; */\r\n    /* font-weight: 700; */\r\n}\r\n\r\n\r\n\r\n/* \r\n:root {\r\n    --clr-primary: rgb(54, 112, 199);\r\n    --clr-light: #f4f4f4;\r\n    --clr-dark: #333;\r\n    --clr-warning: rgb(99, 36, 36);\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n    font-family: inherit;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    font-family: \"Work Sans\", sans-serif;\r\n    font-weight: 300;\r\n    font-size: 1.5rem;\r\n    background-color: var(--clr-primary);\r\n    color: var(--clr-light);\r\n    display: grid;\r\n    grid:     \"header header header header\" auto\r\n    \"...... lists  active ......\" auto /\r\n    1fr minmax(100px, 300px) minmax(250px, 500px) 1fr;\r\n}\r\n\r\n.title {\r\n    grid-area: header;\r\n    text-align: center;\r\n    font-size: calc(7vw + 2rem);\r\n    font-weight: 900;\r\n    color: rgba(0, 0, 0, 0.1);\r\n    letter-spacing: 2px;\r\n    margin: -0.3em 0 0.5em;\r\n}\r\n\r\n.all-tasks {\r\n    grid-area: lists;\r\n}\r\n\r\n.task-list {\r\n    font-size: 1.2rem;\r\n    line-height: 1.7;\r\n    list-style: circle;\r\n    padding-left: 1.1em;\r\n}\r\n\r\n.list-name {\r\n    cursor: pointer;\r\n}\r\n\r\n.list-name:hover {\r\n    opacity: 0.7;\r\n}\r\n\r\nform {\r\n    display: flex;\r\n}\r\n\r\n.btn {\r\n    cursor: pointer;\r\n    background: 0;\r\n    border: 0;\r\n    padding: 0;\r\n    color: inherit;\r\n}\r\n\r\n.btn.create {\r\n    font-size: 1.5rem;\r\n    font-weight: 900;\r\n    margin-right: 0.25em;\r\n    transition: opacity 250ms ease-in;\r\n}\r\n\r\n.btn.create:hover {\r\n    opacity: 0.7;\r\n}\r\n\r\n.btn.delete {\r\n    opacity: 0.7;\r\n    font-size: 1rem;\r\n    transition: color 200ms;\r\n}\r\n\r\n.btn.delete:hover {\r\n    color: var(--clr-warning);\r\n}\r\n\r\n.new {\r\n    background: transparent;\r\n    border: 0;\r\n    color: inherit;\r\n    border-bottom: 1px solid currentColor;\r\n    font-size: inherit;\r\n    outline: none;\r\n    padding: 0.25em;\r\n    transition: border-bottom 150ms ease-in;\r\n    order: 2;\r\n}\r\n\r\n.new::-webkit-input-placeholder {\r\n    opacity: 0.4;\r\n}\r\n\r\n.new:-ms-input-placeholder {\r\n    opacity: 0.4;\r\n}\r\n\r\n.new::-ms-input-placeholder {\r\n    opacity: 0.4;\r\n}\r\n\r\n.new::placeholder {\r\n    opacity: 0.4;\r\n}\r\n\r\n.new:focus {\r\n    border-bottom-width: 3px;\r\n}\r\n\r\n.new:focus::-webkit-input-placeholder {\r\n    opacity: 0.15;\r\n}\r\n\r\n.new:focus:-ms-input-placeholder {\r\n    opacity: 0.15;\r\n}\r\n\r\n.new:focus::-ms-input-placeholder {\r\n    opacity: 0.15;\r\n}\r\n\r\n.new:focus::placeholder {\r\n    opacity: 0.15;\r\n}\r\n\r\n.new.list {\r\n    font-size: 1.1rem;\r\n}\r\n\r\n.new.task {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.active-list {\r\n    font-weight: 700;\r\n}\r\n\r\n.todo-list {\r\n    --spacer: 2rem;\r\n    grid-area: active;\r\n    background: var(--clr-light);\r\n    color: var(--clr-dark);\r\n}\r\n\r\n.todo-header {\r\n    padding: var(--spacer);\r\n    background: #e4e4e4;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.list-title {\r\n    margin: 0 1em 0 0;\r\n}\r\n\r\n.task-count {\r\n    margin: 0;\r\n    font-size: 1rem;\r\n}\r\n\r\n.todo-body {\r\n    padding: var(--spacer);\r\n    position: relative;\r\n}\r\n\r\n.new-task-creator .create {\r\n    color: var(--clr-primary);\r\n}\r\n\r\n[type=\"checkbox\"] {\r\n    opacity: 0;\r\n    position: absolute;\r\n}\r\n\r\n.task label {\r\n    display: flex-inline;\r\n    align-items: center;\r\n    position: relative;\r\n}\r\n\r\n.task {\r\n    position: relative;\r\n    margin-bottom: 1.25em;\r\n}\r\n\r\n.task::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    right: 0;\r\n    left: 0;\r\n    bottom: -0.5em;\r\n    height: 1px;\r\n    background: currentColor;\r\n    opacity: 0.1;\r\n}\r\n\r\n.custom-checkbox {\r\n    --size: 0.75em;\r\n    display: inline-block;\r\n    width: var(--size);\r\n    height: var(--size);\r\n    margin-right: var(--size);\r\n    cursor: pointer;\r\n    border: 2px solid currentColor;\r\n    border-radius: 50%;\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n    transition: -webkit-transform 300ms ease-in-out;\r\n    transition: transform 300ms ease-in-out;\r\n    transition: transform 300ms ease-in-out, -webkit-transform 300ms ease-in-out;\r\n}\r\n\r\n.task:hover .custom-checkbox,\r\n[type=\"checkbox\"]:focus+label .custom-checkbox {\r\n    -webkit-transform: scale(1.2);\r\n    transform: scale(1.2);\r\n    color: var(--clr-primary);\r\n}\r\n\r\n[type=\"checkbox\"]:checked+label .custom-checkbox {\r\n    background: var(--clr-primary);\r\n    border-color: var(--clr-primary);\r\n    box-shadow: inset 0 0 0px 2px white;\r\n}\r\n\r\n[type=\"checkbox\"]:checked+label {\r\n    opacity: 0.5;\r\n}\r\n\r\n.task label::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    left: 1.5em;\r\n    top: 50%;\r\n    height: 3px;\r\n    background: currentColor;\r\n    -webkit-transform: scaleX(0);\r\n    transform: scaleX(0);\r\n    -webkit-transform-origin: right;\r\n    transform-origin: right;\r\n    transition: -webkit-transform 150ms ease-in-out;\r\n    transition: transform 150ms ease-in-out;\r\n    transition: transform 150ms ease-in-out, -webkit-transform 150ms ease-in-out;\r\n}\r\n\r\n[type=\"checkbox\"]:checked+label::after {\r\n    -webkit-transform: scaleX(1);\r\n    transform: scaleX(1);\r\n    -webkit-transform-origin: left;\r\n    transform-origin: left;\r\n}\r\n\r\n.delete-stuff {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    position: absolute;\r\n    width: 100%;\r\n    left: 0;\r\n    bottom: -35px;\r\n    color: var(--clr-light);\r\n} */"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ040QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQSx3QiIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtbWFuYWdlbWVudC1hcHAvLi9zcmMvc3R5bGUvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZW1lbnQtYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZW1lbnQtYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VtZW50LWFwcC8uL3NyYy9zdHlsZS9zdHlsZXMuY3NzP2FmN2MiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VtZW50LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZW1lbnQtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZW1lbnQtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlbWVudC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VtZW50LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlbWVudC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZW1lbnQtYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlbWVudC1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VtZW50LWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VtZW50LWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlbWVudC1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZW1lbnQtYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgICAtLWNsci1wcmltYXJ5OiByZ2IoNTQsIDExMiwgMTk5KTtcXHJcXG4gICAgLS1jbHItbGlnaHQ6ICNmNGY0ZjQ7XFxyXFxuICAgIC0tY2xyLWRhcms6IHJnYig1OCwgNTgsIDU4KTtcXHJcXG4gICAgLS1jbHItd2FybmluZzogcmdiKDk5LCAzNiwgMzYpO1xcclxcbiAgICAtLWNsci1uYXZIaWdobGlnaHQ6ICM0Zjc3OTQ7XFxyXFxuICAgIC0tY2xyLW1pbmVTaGFmdDogIzIzMjMyMztcXHJcXG4gICAgLS1jbHItZ2FsbGVyeTogI2VkZWRlZDtcXHJcXG4gICAgLS1jbHItZWxmR3JlZW46ICMwNTgxNzk7XFxyXFxuICAgIC0tY2xyLW5lYnVsYTogI2NiZGJkYTtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgcGFkZGluZzogMTAlIDEwJSAxMCUgMTAlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jbHItbmVidWxhKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jbHItbWluZVNoYWZ0KTtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgICBjb2xvcjogdmFyKC0tY2xyLWRhcmspO1xcclxcbiAgICBmb250LXNpemU6IDNyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IC0wLjVlbSAwLjVlbSAwLjVlbSAwLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuI21lbnVUb2dnbGUge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IDUwcHg7XFxyXFxuICBsZWZ0OiA1MHB4OyAgXFxyXFxuICB6LWluZGV4OiAxOyAgXFxyXFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudVRvZ2dsZSBsaSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogdmFyKC0tY2xyLW1pbmVTaGFmdCk7XFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcXHJcXG4gIC1vLXRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcXHJcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMHB4IDEwcHggNTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudVRvZ2dsZSBsaTpob3ZlciB7XFxyXFxuICAvKiBjb2xvcjogdmFyKC0tY2xyLWdhbGxlcnkpOyAqL1xcclxcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWVsZkdyZWVuKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDM1cHg7ICovXFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgLyogbWFyZ2luOiAwcHggMjVweCAwcHggMjVweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMzdweDsgKi9cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogVGhlIGhhbWJ1cmdlciBidXR0b24gaGlkZGVuIGluc2lkZSBhbiBpbnB1dCBlbGVtZW50ICovXFxyXFxuI21lbnVUb2dnbGUgaW5wdXQge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogMzBweDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogLTdweDtcXHJcXG4gIGxlZnQ6IC01cHg7ICBcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7ICBcXHJcXG4gIG9wYWNpdHk6IDA7IC8qIGhpZGUgdGhpcyAqL1xcclxcbiAgei1pbmRleDogMjsgLyogYW5kIHBsYWNlIGl0IG92ZXIgdGhlIGhhbWJ1cmdlciAqLyAgXFxyXFxuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNtZW51VG9nZ2xlIGxhYmVsIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgd2lkdGg6IDMwcHg7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxufVxcclxcbiNtZW51VG9nZ2xlIGxhYmVsIHNwYW4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiBIYW1idXJnZXJcXHJcXG4gKi9cXHJcXG4jbWVudVRvZ2dsZSBsYWJlbCBkaXYge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogMzBweDtcXHJcXG4gIGhlaWdodDogMnB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tY2xyLWVsZkdyZWVuKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDsgIFxcclxcbiAgei1pbmRleDogMTsgIFxcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA0cHggMHB4OyAgXFxyXFxuICAgICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IDRweCAwcHg7ICBcXHJcXG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNHB4IDBweDtcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudVRvZ2dsZSBsYWJlbCBkaXY6Zmlyc3QtY2hpbGQge1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwJSAxMDAlO1xcclxcbiAgICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAwJSAxMDAlO1xcclxcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudVRvZ2dsZSBsYWJlbCBkaXY6bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcXHJcXG4gICAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XFxyXFxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBcXHJcXG4gKiBDaGFuZ2UgdGhlIGNvbG9yIG9mIHRoZSBoYW1idXJnZXIgd2hlbiB0b2dnbGVkXFxyXFxuICovXFxyXFxuI21lbnVUb2dnbGUgaW5wdXQ6Y2hlY2tlZCArIGxhYmVsIGRpdiB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jbHItbWluZVNoYWZ0KTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiBVc2UgYWJzb2x1dGUgcG9zaXRpb25pbmcgdG8gcGxhY2UgdGhlIG1lbnUgb2ZmLXNjcmVlblxcclxcbiAqL1xcclxcbiNtZW51IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiA4MHZ3O1xcclxcbiAgbWFyZ2luOiAtODBweCAwIDAgLTUwcHg7XFxyXFxuICBwYWRkaW5nOiA1MHB4IDBweCA1MHB4IDBweDtcXHJcXG4gIHBhZGRpbmctdG9wOiAxMjVweDtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNsci1saWdodCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgLyogSGlkZSB0aGUgbWVudSBvZmYtc2NyZWVuIHRvIHRoZSBsZWZ0ICovXFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBsZWZ0IDAuM3MgZWFzZTtcXHJcXG4gIC1vLXRyYW5zaXRpb246IGxlZnQgMC4zcyBlYXNlO1xcclxcbiAgdHJhbnNpdGlvbjogbGVmdCAwLjNzIGVhc2U7IFxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKlxcclxcbiAqIFNsaWRlIHRoZSBtZW51IGluIGZyb20gbGVmdCB3aGVuIHRoZSBpbnB1dCBpcyBjaGVja2VkXFxyXFxuICovXFxyXFxuI21lbnVUb2dnbGUgaW5wdXQ6Y2hlY2tlZCB+IHVsIHtcXHJcXG4gIFxcclxcbiAgdHJhbnNpdGlvbjogbGVmdCAwLjNzIGVhc2U7IFxcclxcbiAgbGVmdDogLTEzMCU7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWltZyB7XFxyXFxuICAgIHdpZHRoOiAxLjdlbTtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZS1saXN0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWVsZkdyZWVuKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMzVweDtcXHJcXG4gICAgbWFyZ2luOiAwcHggMjVweCAwcHggMjVweDtcXHJcXG4gICAgLyogcGFkZGluZy1sZWZ0OiAxN3B4OyAqL1xcclxcbiAgICAvKiBmb250LXdlaWdodDogNzAwOyAqL1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiBcXHJcXG46cm9vdCB7XFxyXFxuICAgIC0tY2xyLXByaW1hcnk6IHJnYig1NCwgMTEyLCAxOTkpO1xcclxcbiAgICAtLWNsci1saWdodDogI2Y0ZjRmNDtcXHJcXG4gICAgLS1jbHItZGFyazogIzMzMztcXHJcXG4gICAgLS1jbHItd2FybmluZzogcmdiKDk5LCAzNiwgMzYpO1xcclxcbn1cXHJcXG5cXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIldvcmsgU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItbGlnaHQpO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkOiAgICAgXFxcImhlYWRlciBoZWFkZXIgaGVhZGVyIGhlYWRlclxcXCIgYXV0b1xcclxcbiAgICBcXFwiLi4uLi4uIGxpc3RzICBhY3RpdmUgLi4uLi4uXFxcIiBhdXRvIC9cXHJcXG4gICAgMWZyIG1pbm1heCgxMDBweCwgMzAwcHgpIG1pbm1heCgyNTBweCwgNTAwcHgpIDFmcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiBjYWxjKDd2dyArIDJyZW0pO1xcclxcbiAgICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xcclxcbiAgICBtYXJnaW46IC0wLjNlbSAwIDAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWxsLXRhc2tzIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBsaXN0cztcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stbGlzdCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS43O1xcclxcbiAgICBsaXN0LXN0eWxlOiBjaXJjbGU7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMS4xZW07XFxyXFxufVxcclxcblxcclxcbi5saXN0LW5hbWUge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5saXN0LW5hbWU6aG92ZXIge1xcclxcbiAgICBvcGFjaXR5OiAwLjc7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAwO1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGNvbG9yOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLmNyZWF0ZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMjVlbTtcXHJcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAyNTBtcyBlYXNlLWluO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLmNyZWF0ZTpob3ZlciB7XFxyXFxuICAgIG9wYWNpdHk6IDAuNztcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi5kZWxldGUge1xcclxcbiAgICBvcGFjaXR5OiAwLjc7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMjAwbXM7XFxyXFxufVxcclxcblxcclxcbi5idG4uZGVsZXRlOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNsci13YXJuaW5nKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldyB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgY3VycmVudENvbG9yO1xcclxcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDAuMjVlbTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbSAxNTBtcyBlYXNlLWluO1xcclxcbiAgICBvcmRlcjogMjtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldzo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxyXFxuICAgIG9wYWNpdHk6IDAuNDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldzotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcclxcbiAgICBvcGFjaXR5OiAwLjQ7XFxyXFxufVxcclxcblxcclxcbi5uZXc6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxyXFxuICAgIG9wYWNpdHk6IDAuNDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldzo6cGxhY2Vob2xkZXIge1xcclxcbiAgICBvcGFjaXR5OiAwLjQ7XFxyXFxufVxcclxcblxcclxcbi5uZXc6Zm9jdXMge1xcclxcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAzcHg7XFxyXFxufVxcclxcblxcclxcbi5uZXc6Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xcclxcbiAgICBvcGFjaXR5OiAwLjE1O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3OmZvY3VzOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxyXFxuICAgIG9wYWNpdHk6IDAuMTU7XFxyXFxufVxcclxcblxcclxcbi5uZXc6Zm9jdXM6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxyXFxuICAgIG9wYWNpdHk6IDAuMTU7XFxyXFxufVxcclxcblxcclxcbi5uZXc6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcXHJcXG4gICAgb3BhY2l0eTogMC4xNTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy5saXN0IHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxufVxcclxcblxcclxcbi5uZXcudGFzayB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmUtbGlzdCB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWxpc3Qge1xcclxcbiAgICAtLXNwYWNlcjogMnJlbTtcXHJcXG4gICAgZ3JpZC1hcmVhOiBhY3RpdmU7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNsci1saWdodCk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItZGFyayk7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWhlYWRlciB7XFxyXFxuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNlcik7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNlNGU0ZTQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtdGl0bGUge1xcclxcbiAgICBtYXJnaW46IDAgMWVtIDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stY291bnQge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tYm9keSB7XFxyXFxuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNlcik7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy10YXNrLWNyZWF0b3IgLmNyZWF0ZSB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxyXFxufVxcclxcblxcclxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayBsYWJlbCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXgtaW5saW5lO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi50YXNrIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxLjI1ZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrOjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBib3R0b206IC0wLjVlbTtcXHJcXG4gICAgaGVpZ2h0OiAxcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IGN1cnJlbnRDb2xvcjtcXHJcXG4gICAgb3BhY2l0eTogMC4xO1xcclxcbn1cXHJcXG5cXHJcXG4uY3VzdG9tLWNoZWNrYm94IHtcXHJcXG4gICAgLS1zaXplOiAwLjc1ZW07XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgd2lkdGg6IHZhcigtLXNpemUpO1xcclxcbiAgICBoZWlnaHQ6IHZhcigtLXNpemUpO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IHZhcigtLXNpemUpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICAgIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0O1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dCwgLXdlYmtpdC10cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi50YXNrOmhvdmVyIC5jdXN0b20tY2hlY2tib3gsXFxyXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Zm9jdXMrbGFiZWwgLmN1c3RvbS1jaGVja2JveCB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxyXFxufVxcclxcblxcclxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQrbGFiZWwgLmN1c3RvbS1jaGVja2JveCB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNsci1wcmltYXJ5KTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxyXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwcHggMnB4IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkK2xhYmVsIHtcXHJcXG4gICAgb3BhY2l0eTogMC41O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayBsYWJlbDo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgbGVmdDogMS41ZW07XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBoZWlnaHQ6IDNweDtcXHJcXG4gICAgYmFja2dyb3VuZDogY3VycmVudENvbG9yO1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDApO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcXHJcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XFxyXFxuICAgIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDE1MG1zIGVhc2UtaW4tb3V0O1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTUwbXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNTBtcyBlYXNlLWluLW91dCwgLXdlYmtpdC10cmFuc2Zvcm0gMTUwbXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQrbGFiZWw6OmFmdGVyIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgxKTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcXHJcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZS1zdHVmZiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBib3R0b206IC0zNXB4O1xcclxcbiAgICBjb2xvcjogdmFyKC0tY2xyLWxpZ2h0KTtcXHJcXG59ICovXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxnQ0FBZ0M7SUFDaEMsb0JBQW9CO0lBQ3BCLDJCQUEyQjtJQUMzQiw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDBDQUEwQztJQUMxQyx3QkFBd0I7QUFDNUI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLDZCQUE2QjtFQUM3QiwyQkFBMkI7QUFDN0I7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZ0NBQWdDO0FBQ3BDOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsc0JBQXNCO0dBQ3JCLHFCQUFxQjtPQUNqQixpQkFBaUI7QUFDeEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsMkJBQTJCO0VBQzNCLG1DQUFtQztFQUNuQyw4QkFBOEI7RUFDOUIsMkJBQTJCO0VBQzNCLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQjt3QkFDc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCO3VCQUNxQjtBQUN2Qjs7O0FBR0Esd0RBQXdEO0FBQ3hEO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsVUFBVTtFQUNWLGVBQWU7RUFDZixVQUFVLEVBQUUsY0FBYztFQUMxQixVQUFVLEVBQUUsb0NBQW9DO0VBQ2hELDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUVBOztFQUVFO0FBQ0Y7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGlDQUFpQztNQUM3Qiw2QkFBNkI7VUFDekIseUJBQXlCO0VBQ2pDLGlDQUFpQztFQUNqQyw0QkFBNEI7RUFDNUIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsaUNBQWlDO01BQzdCLDZCQUE2QjtVQUN6Qix5QkFBeUI7QUFDbkM7O0FBRUE7SUFDSSwrQkFBK0I7TUFDN0IsMkJBQTJCO1VBQ3ZCLHVCQUF1QjtBQUNqQzs7QUFFQTs7RUFFRTtBQUNGO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBOztFQUVFO0FBQ0Y7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1QixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLHlDQUF5QztFQUN6QyxPQUFPO0VBQ1Asa0NBQWtDO0VBQ2xDLDZCQUE2QjtFQUM3QiwwQkFBMEI7QUFDNUI7OztBQUdBOztFQUVFO0FBQ0Y7O0VBRUUsMEJBQTBCO0VBQzFCLFdBQVc7QUFDYjs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsc0JBQXNCO0FBQzFCOzs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9SR1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAgIC0tY2xyLXByaW1hcnk6IHJnYig1NCwgMTEyLCAxOTkpO1xcclxcbiAgICAtLWNsci1saWdodDogI2Y0ZjRmNDtcXHJcXG4gICAgLS1jbHItZGFyazogcmdiKDU4LCA1OCwgNTgpO1xcclxcbiAgICAtLWNsci13YXJuaW5nOiByZ2IoOTksIDM2LCAzNik7XFxyXFxuICAgIC0tY2xyLW5hdkhpZ2hsaWdodDogIzRmNzc5NDtcXHJcXG4gICAgLS1jbHItbWluZVNoYWZ0OiAjMjMyMzIzO1xcclxcbiAgICAtLWNsci1nYWxsZXJ5OiAjZWRlZGVkO1xcclxcbiAgICAtLWNsci1lbGZHcmVlbjogIzA1ODE3OTtcXHJcXG4gICAgLS1jbHItbmVidWxhOiAjY2JkYmRhO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xcclxcbiAgICBwYWRkaW5nOiAxMCUgMTAlIDEwJSAxMCU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNsci1uZWJ1bGEpO1xcclxcbiAgY29sb3I6IHZhcigtLWNsci1taW5lU2hhZnQpO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItZGFyayk7XFxyXFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogLTAuNWVtIDAuNWVtIDAuNWVtIDAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudVRvZ2dsZSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRvcDogNTBweDtcXHJcXG4gIGxlZnQ6IDUwcHg7ICBcXHJcXG4gIHotaW5kZXg6IDE7ICBcXHJcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNtZW51VG9nZ2xlIGxpIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jbHItbWluZVNoYWZ0KTtcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xcclxcbiAgLW8tdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xcclxcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xcclxcbiAgcGFkZGluZzogMTBweCAwcHggMTBweCA1MHB4O1xcclxcbiAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNtZW51VG9nZ2xlIGxpOmhvdmVyIHtcXHJcXG4gIC8qIGNvbG9yOiB2YXIoLS1jbHItZ2FsbGVyeSk7ICovXFxyXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItZWxmR3JlZW4pO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzVweDsgKi9cXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAvKiBtYXJnaW46IDBweCAyNXB4IDBweCAyNXB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiAzN3B4OyAqL1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBUaGUgaGFtYnVyZ2VyIGJ1dHRvbiBoaWRkZW4gaW5zaWRlIGFuIGlucHV0IGVsZW1lbnQgKi9cXHJcXG4jbWVudVRvZ2dsZSBpbnB1dCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHdpZHRoOiAzMHB4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAtN3B4O1xcclxcbiAgbGVmdDogLTVweDsgIFxcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjsgIFxcclxcbiAgb3BhY2l0eTogMDsgLyogaGlkZSB0aGlzICovXFxyXFxuICB6LWluZGV4OiAyOyAvKiBhbmQgcGxhY2UgaXQgb3ZlciB0aGUgaGFtYnVyZ2VyICovICBcXHJcXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI21lbnVUb2dnbGUgbGFiZWwge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogMzBweDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG59XFxyXFxuI21lbnVUb2dnbGUgbGFiZWwgc3BhbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIEhhbWJ1cmdlclxcclxcbiAqL1xcclxcbiNtZW51VG9nZ2xlIGxhYmVsIGRpdiB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHdpZHRoOiAzMHB4O1xcclxcbiAgaGVpZ2h0OiAycHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA2cHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jbHItZWxmR3JlZW4pO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4OyAgXFxyXFxuICB6LWluZGV4OiAxOyAgXFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDRweCAwcHg7ICBcXHJcXG4gICAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogNHB4IDBweDsgIFxcclxcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA0cHggMHB4O1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcclxcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbiNtZW51VG9nZ2xlIGxhYmVsIGRpdjpmaXJzdC1jaGlsZCB7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAlIDEwMCU7XFxyXFxuICAgICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IDAlIDEwMCU7XFxyXFxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAlIDEwMCU7XFxyXFxufVxcclxcblxcclxcbiNtZW51VG9nZ2xlIGxhYmVsIGRpdjpudGgtY2hpbGQoMikge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xcclxcbiAgICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcXHJcXG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XFxyXFxufVxcclxcblxcclxcbi8qIFxcclxcbiAqIENoYW5nZSB0aGUgY29sb3Igb2YgdGhlIGhhbWJ1cmdlciB3aGVuIHRvZ2dsZWRcXHJcXG4gKi9cXHJcXG4jbWVudVRvZ2dsZSBpbnB1dDpjaGVja2VkICsgbGFiZWwgZGl2IHtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWNsci1taW5lU2hhZnQpO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIFVzZSBhYnNvbHV0ZSBwb3NpdGlvbmluZyB0byBwbGFjZSB0aGUgbWVudSBvZmYtc2NyZWVuXFxyXFxuICovXFxyXFxuI21lbnUge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDgwdnc7XFxyXFxuICBtYXJnaW46IC04MHB4IDAgMCAtNTBweDtcXHJcXG4gIHBhZGRpbmc6IDUwcHggMHB4IDUwcHggMHB4O1xcclxcbiAgcGFkZGluZy10b3A6IDEyNXB4O1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tY2xyLWxpZ2h0KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICAvKiBIaWRlIHRoZSBtZW51IG9mZi1zY3JlZW4gdG8gdGhlIGxlZnQgKi9cXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb246IGxlZnQgMC4zcyBlYXNlO1xcclxcbiAgLW8tdHJhbnNpdGlvbjogbGVmdCAwLjNzIGVhc2U7XFxyXFxuICB0cmFuc2l0aW9uOiBsZWZ0IDAuM3MgZWFzZTsgXFxyXFxufVxcclxcblxcclxcblxcclxcbi8qXFxyXFxuICogU2xpZGUgdGhlIG1lbnUgaW4gZnJvbSBsZWZ0IHdoZW4gdGhlIGlucHV0IGlzIGNoZWNrZWRcXHJcXG4gKi9cXHJcXG4jbWVudVRvZ2dsZSBpbnB1dDpjaGVja2VkIH4gdWwge1xcclxcbiAgXFxyXFxuICB0cmFuc2l0aW9uOiBsZWZ0IDAuM3MgZWFzZTsgXFxyXFxuICBsZWZ0OiAtMTMwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtaW1nIHtcXHJcXG4gICAgd2lkdGg6IDEuN2VtO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlLWxpc3Qge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItZWxmR3JlZW4pO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xcclxcbiAgICBtYXJnaW46IDBweCAyNXB4IDBweCAyNXB4O1xcclxcbiAgICAvKiBwYWRkaW5nLWxlZnQ6IDE3cHg7ICovXFxyXFxuICAgIC8qIGZvbnQtd2VpZ2h0OiA3MDA7ICovXFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qIFxcclxcbjpyb290IHtcXHJcXG4gICAgLS1jbHItcHJpbWFyeTogcmdiKDU0LCAxMTIsIDE5OSk7XFxyXFxuICAgIC0tY2xyLWxpZ2h0OiAjZjRmNGY0O1xcclxcbiAgICAtLWNsci1kYXJrOiAjMzMzO1xcclxcbiAgICAtLWNsci13YXJuaW5nOiByZ2IoOTksIDM2LCAzNik7XFxyXFxufVxcclxcblxcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiV29yayBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNsci1saWdodCk7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQ6ICAgICBcXFwiaGVhZGVyIGhlYWRlciBoZWFkZXIgaGVhZGVyXFxcIiBhdXRvXFxyXFxuICAgIFxcXCIuLi4uLi4gbGlzdHMgIGFjdGl2ZSAuLi4uLi5cXFwiIGF1dG8gL1xcclxcbiAgICAxZnIgbWlubWF4KDEwMHB4LCAzMDBweCkgbWlubWF4KDI1MHB4LCA1MDBweCkgMWZyO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IGNhbGMoN3Z3ICsgMnJlbSk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxyXFxuICAgIG1hcmdpbjogLTAuM2VtIDAgMC41ZW07XFxyXFxufVxcclxcblxcclxcbi5hbGwtdGFza3Mge1xcclxcbiAgICBncmlkLWFyZWE6IGxpc3RzO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1saXN0IHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjc7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IGNpcmNsZTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxLjFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtbmFtZSB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtbmFtZTpob3ZlciB7XFxyXFxuICAgIG9wYWNpdHk6IDAuNztcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5idG4ge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQ6IDA7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi5idG4uY3JlYXRlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMC4yNWVtO1xcclxcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDI1MG1zIGVhc2UtaW47XFxyXFxufVxcclxcblxcclxcbi5idG4uY3JlYXRlOmhvdmVyIHtcXHJcXG4gICAgb3BhY2l0eTogMC43O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLmRlbGV0ZSB7XFxyXFxuICAgIG9wYWNpdHk6IDAuNztcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAyMDBtcztcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi5kZWxldGU6aG92ZXIge1xcclxcbiAgICBjb2xvcjogdmFyKC0tY2xyLXdhcm5pbmcpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3IHtcXHJcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBjdXJyZW50Q29sb3I7XFxyXFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogMC4yNWVtO1xcclxcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tIDE1MG1zIGVhc2UtaW47XFxyXFxuICAgIG9yZGVyOiAyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXHJcXG4gICAgb3BhY2l0eTogMC40O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxyXFxuICAgIG9wYWNpdHk6IDAuNDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldzo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXHJcXG4gICAgb3BhY2l0eTogMC40O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3OjpwbGFjZWhvbGRlciB7XFxyXFxuICAgIG9wYWNpdHk6IDAuNDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldzpmb2N1cyB7XFxyXFxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldzpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxyXFxuICAgIG9wYWNpdHk6IDAuMTU7XFxyXFxufVxcclxcblxcclxcbi5uZXc6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXHJcXG4gICAgb3BhY2l0eTogMC4xNTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldzpmb2N1czo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXHJcXG4gICAgb3BhY2l0eTogMC4xNTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldzpmb2N1czo6cGxhY2Vob2xkZXIge1xcclxcbiAgICBvcGFjaXR5OiAwLjE1O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3Lmxpc3Qge1xcclxcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy50YXNrIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZS1saXN0IHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tbGlzdCB7XFxyXFxuICAgIC0tc3BhY2VyOiAycmVtO1xcclxcbiAgICBncmlkLWFyZWE6IGFjdGl2ZTtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2xyLWxpZ2h0KTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNsci1kYXJrKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taGVhZGVyIHtcXHJcXG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2VyKTtcXHJcXG4gICAgYmFja2dyb3VuZDogI2U0ZTRlNDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC10aXRsZSB7XFxyXFxuICAgIG1hcmdpbjogMCAxZW0gMCAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1jb3VudCB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1ib2R5IHtcXHJcXG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2VyKTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LXRhc2stY3JlYXRvciAuY3JlYXRlIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcblxcclxcbi50YXNrIGxhYmVsIHtcXHJcXG4gICAgZGlzcGxheTogZmxleC1pbmxpbmU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEuMjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2s6OmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGJvdHRvbTogLTAuNWVtO1xcclxcbiAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgYmFja2dyb3VuZDogY3VycmVudENvbG9yO1xcclxcbiAgICBvcGFjaXR5OiAwLjE7XFxyXFxufVxcclxcblxcclxcbi5jdXN0b20tY2hlY2tib3gge1xcclxcbiAgICAtLXNpemU6IDAuNzVlbTtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICB3aWR0aDogdmFyKC0tc2l6ZSk7XFxyXFxuICAgIGhlaWdodDogdmFyKC0tc2l6ZSk7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogdmFyKC0tc2l6ZSk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgY3VycmVudENvbG9yO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0LCAtd2Via2l0LXRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2s6aG92ZXIgLmN1c3RvbS1jaGVja2JveCxcXHJcXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpmb2N1cytsYWJlbCAuY3VzdG9tLWNoZWNrYm94IHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCtsYWJlbCAuY3VzdG9tLWNoZWNrYm94IHtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2xyLXByaW1hcnkpO1xcclxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXHJcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDBweCAycHggd2hpdGU7XFxyXFxufVxcclxcblxcclxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQrbGFiZWwge1xcclxcbiAgICBvcGFjaXR5OiAwLjU7XFxyXFxufVxcclxcblxcclxcbi50YXNrIGxhYmVsOjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBsZWZ0OiAxLjVlbTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIGhlaWdodDogM3B4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiBjdXJyZW50Q29sb3I7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xcclxcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcXHJcXG4gICAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMTUwbXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNTBtcyBlYXNlLWluLW91dDtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE1MG1zIGVhc2UtaW4tb3V0LCAtd2Via2l0LXRyYW5zZm9ybSAxNTBtcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCtsYWJlbDo6YWZ0ZXIge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDEpO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xcclxcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLXN0dWZmIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGJvdHRvbTogLTM1cHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItbGlnaHQpO1xcclxcbn0gKi9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS9zdHlsZXMuY3NzJztcclxuLy8gaW1wb3J0IGdpdEltYWdlIGZyb20gJy4vaW1hZ2VzL2dpdC1sb2dvLnBuZyc7XHJcblxyXG5cclxuY29uc29sZS5sb2coXCJpdCB3b3Jrc1wiKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=