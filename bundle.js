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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n\t--clr-primary: rgb(54, 112, 199);\r\n\t--clr-light: #f4f4f4;\r\n\t--clr-dark: rgb(58, 58, 58);\r\n\t--clr-white: rgb(252, 252, 252);\r\n\t--clr-warning: rgb(99, 36, 36);\r\n\t--clr-navHighlight: #4f7794;\r\n\t--clr-mineShaft: #232323;\r\n\t--clr-gallery: #ededed;\r\n\t--clr-elfGreen: #058179;\r\n\t--clr-nebula: #cbdbda;\r\n}\r\n\r\nhtml {\r\n\tfont-family: 'Source Sans Pro', sans-serif;\r\n\tpadding: 10% 10% 10% 10%;\r\n}\r\n\r\nbody {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tbackground: var(--clr-nebula);\r\n\tcolor: var(--clr-mineShaft);\r\n}\r\n\r\nh1 {\r\n\tcolor: var(--clr-dark);\r\n\tfont-size: 3rem;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\tmargin: -0.5em 0.5em 0.5em 0.5em;\r\n}\r\n\r\nh2 {\r\n\tmargin-bottom: 0px;\r\n}\r\n\r\n#menuToggle {\r\n\tdisplay: block;\r\n\tposition: relative;\r\n\ttop: 50px;\r\n\tleft: 50px;\r\n\tz-index: 1;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n}\r\n\r\n#menuToggle li {\r\n\ttext-decoration: none;\r\n\t-webkit-transition: color 0.3s ease;\r\n\t-o-transition: color 0.3s ease;\r\n\ttransition: color 0.3s ease;\r\n\tpadding: 10px 0px 10px 50px;\r\n\tfont-size: 22px;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n#menuToggle li:hover {\r\n\t/* color: var(--clr-gallery); */\r\n\t/* background-color: var(--clr-elfGreen);\r\n  border-radius: 35px; */\r\n\tfont-weight: 700;\r\n\t/* color: var(--clr-light); */\r\n\t/* margin: 0px 25px 0px 25px;\r\n  padding-left: 37px; */\r\n}\r\n\r\n\r\n/* The hamburger button hidden inside an #inputMenu element */\r\n#menuToggle #inputMenu {\r\n\tdisplay: block;\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tposition: absolute;\r\n\ttop: -7px;\r\n\tleft: -5px;\r\n\tpadding: 0;\r\n\tcursor: pointer;\r\n\topacity: 0;\r\n\t/* hide this */\r\n\tz-index: 2;\r\n\t/* and place it over the hamburger */\r\n\t-webkit-touch-callout: none;\r\n}\r\n\r\n#menuToggle #labelMenu {\r\n\tposition: relative;\r\n\tdisplay: block;\r\n\twidth: 30px;\r\n\theight: 30px;\r\n}\r\n\r\n#menuToggle #labelMenu span {\r\n\tdisplay: none;\r\n}\r\n\r\n/*\r\n * Hamburger\r\n */\r\n#menuToggle #labelMenu div {\r\n\tdisplay: block;\r\n\twidth: 30px;\r\n\theight: 2px;\r\n\tmargin-bottom: 6px;\r\n\tposition: relative;\r\n\tbackground: var(--clr-elfGreen);\r\n\tborder-radius: 5px;\r\n\tz-index: 1;\r\n\t-webkit-transform-origin: 4px 0px;\r\n\t-ms-transform-origin: 4px 0px;\r\n\ttransform-origin: 4px 0px;\r\n\t-webkit-transition: all 0.3s ease;\r\n\t-o-transition: all 0.3s ease;\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n#menuToggle #labelMenu div:first-child {\r\n\t-webkit-transform-origin: 0% 100%;\r\n\t-ms-transform-origin: 0% 100%;\r\n\ttransform-origin: 0% 100%;\r\n}\r\n\r\n#menuToggle #labelMenu div:nth-child(2) {\r\n\t-webkit-transform-origin: 0% 0%;\r\n\t-ms-transform-origin: 0% 0%;\r\n\ttransform-origin: 0% 0%;\r\n}\r\n\r\n/* \r\n * Change the color of the hamburger when toggled\r\n */\r\n#menuToggle #inputMenu:checked+#labelMenu div {\r\n\tbackground: var(--clr-mineShaft);\r\n}\r\n\r\n/*\r\n * Use absolute positioning to place the menu off-screen\r\n */\r\n#menu {\r\n\tposition: absolute;\r\n\twidth: 80vw;\r\n\tmargin: -80px 0 0 -50px;\r\n\tpadding: 50px 0px 50px 0px;\r\n\tpadding-top: 125px;\r\n\tbackground: var(--clr-gallery);\r\n\tborder-radius: 20px;\r\n\tlist-style-type: none;\r\n\t/* Hide the menu off-screen to the left */\r\n\tleft: 0;\r\n\t-webkit-transition: left 0.3s ease;\r\n\t-o-transition: left 0.3s ease;\r\n\ttransition: left 0.3s ease;\r\n}\r\n\r\n\r\n/*\r\n * Slide the menu in from left when the #inputMenu is checked\r\n */\r\n#menuToggle #inputMenu:checked~ul {\r\n\r\n\ttransition: left 0.3s ease;\r\n\tleft: -130%;\r\n}\r\n\r\n.list-img {\r\n\twidth: 1.7em;\r\n\tpadding-right: 10px;\r\n}\r\n\r\n.active-list {\r\n\tbackground-color: var(--clr-elfGreen);\r\n\tborder-radius: 35px;\r\n\tmargin: 0px 25px 0px 25px;\r\n\tcolor: var(--clr-light);\r\n\ttransition: all 0.3s ease;\r\n\t/* font-weight: 700; */\r\n\t\t/* color: var(--clr-light); */\r\n\t/* padding-left: 17px; */\r\n\t/* font-weight: 700; */\r\n}\r\n\r\n#myForm {\r\n\tdisplay: none;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tmargin-top: 1.8em;\r\n}\r\n\r\n#myForm form {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tfont-size: 1.3em;\r\n\tbackground-color: var(--clr-white);\r\n\twidth: 12em;\r\n\tpadding: 2em .6em 1.5em .6em;\r\n\tborder-radius: 20px;\r\n}\r\n\r\n#addProjectForm {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n}\r\n\r\n#addProjectButton {\r\n\tmargin-top: 30px;\r\n\tbackground-color: var(--clr-elfGreen);\r\n\tcolor: var(--clr-light);\r\n\tborder: none;\r\n\tborder-radius: 12px;\r\n\tfont-size: 1.3em;\r\n\tpadding: 2% 4% 2% 3%;\r\n\tfont-family: 'Source Sans Pro', sans-serif;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n#addProjectButton:hover {\r\n\tcolor: var(--clr-light);\r\n\topacity: 0.8;\r\n}\r\n\r\n#addProjectButton span {\r\n\tfont-size: 1.5em;\r\n\tfont-weight: 300;\r\n\tpadding: 0px 10px 0px 3px;\r\n\t\r\n}\r\n\r\n#submitBtn {\r\n \tfont-family: 'Source Sans Pro', sans-serif;\r\n \tbackground-color: var(--clr-elfGreen);\r\n \tcolor: var(--clr-light);\r\n \tborder: none;\r\n \tborder: none;\r\n \tborder-radius: 12px;\r\n \tfont-size: 1em;\r\n \tpadding: 8% 30% 8% 30%;\r\n}\r\n\r\n#projectLabel {\r\n\tfont-size: 1.3em;\r\n\tfont-weight: 700;\r\n}\r\n\r\n#projectInput {\r\n\tfont-size: 0.8em;\r\n\tfont-weight: 400;\r\n\tfont-family: 'Source Sans Pro', sans-serif;\r\n\tborder-radius: 15px;\r\n\tpadding: 0px 15px 0px 15px;\r\n}\r\n\r\n.todo-list {\r\n\tmargin-top: 30.5em;\r\n\tbackground: var(--clr-gallery);\r\n\tpadding: 10%;\r\n\tborder-radius: 20px;\r\n}\r\n\r\n.addmarginAfterClick {\r\n\tmargin-top: 5em;\r\n}\r\n\r\n.todo-header {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tbackground-color: var(--clr-light);\r\n\tborder-radius: 20px;\r\n\tmargin-bottom: 15px;\r\n}\r\n\r\n.todo-body {\r\n\tbackground-color: var(--clr-light);\r\n\tborder-radius: 20px;\r\n\tpadding: 15%;\r\n}\r\n\r\n#myTasks {\r\n\tdisplay: none;\r\n}\r\n\r\n\r\n\r\n/* #projectName *, #projectLabel *, #submitBtn *, #myForm * {\r\n\tall: unset;\r\n} */\r\n\r\n/* \r\n:root {\r\n    --clr-primary: rgb(54, 112, 199);\r\n    --clr-light: #f4f4f4;\r\n    --clr-dark: #333;\r\n    --clr-warning: rgb(99, 36, 36);\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n    font-family: inherit;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    font-family: \"Work Sans\", sans-serif;\r\n    font-weight: 300;\r\n    font-size: 1.5rem;\r\n    background-color: var(--clr-primary);\r\n    color: var(--clr-light);\r\n    display: grid;\r\n    grid:     \"header header header header\" auto\r\n    \"...... lists  active ......\" auto /\r\n    1fr minmax(100px, 300px) minmax(250px, 500px) 1fr;\r\n}\r\n\r\n.title {\r\n    grid-area: header;\r\n    text-align: center;\r\n    font-size: calc(7vw + 2rem);\r\n    font-weight: 900;\r\n    color: rgba(0, 0, 0, 0.1);\r\n    letter-spacing: 2px;\r\n    margin: -0.3em 0 0.5em;\r\n}\r\n\r\n.all-tasks {\r\n    grid-area: lists;\r\n}\r\n\r\n.task-list {\r\n    font-size: 1.2rem;\r\n    line-height: 1.7;\r\n    list-style: circle;\r\n    padding-left: 1.1em;\r\n}\r\n\r\n.list-name {\r\n    cursor: pointer;\r\n}\r\n\r\n.list-name:hover {\r\n    opacity: 0.7;\r\n}\r\n\r\nform {\r\n    display: flex;\r\n}\r\n\r\n.btn {\r\n    cursor: pointer;\r\n    background: 0;\r\n    border: 0;\r\n    padding: 0;\r\n    color: inherit;\r\n}\r\n\r\n.btn.create {\r\n    font-size: 1.5rem;\r\n    font-weight: 900;\r\n    margin-right: 0.25em;\r\n    transition: opacity 250ms ease-in;\r\n}\r\n\r\n.btn.create:hover {\r\n    opacity: 0.7;\r\n}\r\n\r\n.btn.delete {\r\n    opacity: 0.7;\r\n    font-size: 1rem;\r\n    transition: color 200ms;\r\n}\r\n\r\n.btn.delete:hover {\r\n    color: var(--clr-warning);\r\n}\r\n\r\n.new {\r\n    background: transparent;\r\n    border: 0;\r\n    color: inherit;\r\n    border-bottom: 1px solid currentColor;\r\n    font-size: inherit;\r\n    outline: none;\r\n    padding: 0.25em;\r\n    transition: border-bottom 150ms ease-in;\r\n    order: 2;\r\n}\r\n\r\n.new::-webkit-input-placeholder {\r\n    opacity: 0.4;\r\n}\r\n\r\n.new:-ms-input-placeholder {\r\n    opacity: 0.4;\r\n}\r\n\r\n.new::-ms-input-placeholder {\r\n    opacity: 0.4;\r\n}\r\n\r\n.new::placeholder {\r\n    opacity: 0.4;\r\n}\r\n\r\n.new:focus {\r\n    border-bottom-width: 3px;\r\n}\r\n\r\n.new:focus::-webkit-input-placeholder {\r\n    opacity: 0.15;\r\n}\r\n\r\n.new:focus:-ms-input-placeholder {\r\n    opacity: 0.15;\r\n}\r\n\r\n.new:focus::-ms-input-placeholder {\r\n    opacity: 0.15;\r\n}\r\n\r\n.new:focus::placeholder {\r\n    opacity: 0.15;\r\n}\r\n\r\n.new.list {\r\n    font-size: 1.1rem;\r\n}\r\n\r\n.new.task {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.active-list {\r\n    font-weight: 700;\r\n}\r\n\r\n.todo-list {\r\n    --spacer: 2rem;\r\n    grid-area: active;\r\n    background: var(--clr-light);\r\n    color: var(--clr-dark);\r\n}\r\n\r\n.todo-header {\r\n    padding: var(--spacer);\r\n    background: #e4e4e4;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.list-title {\r\n    margin: 0 1em 0 0;\r\n}\r\n\r\n.task-count {\r\n    margin: 0;\r\n    font-size: 1rem;\r\n}\r\n\r\n.todo-body {\r\n    padding: var(--spacer);\r\n    position: relative;\r\n}\r\n\r\n.new-task-creator .create {\r\n    color: var(--clr-primary);\r\n}\r\n\r\n[type=\"checkbox\"] {\r\n    opacity: 0;\r\n    position: absolute;\r\n}\r\n\r\n.task label {\r\n    display: flex-inline;\r\n    align-items: center;\r\n    position: relative;\r\n}\r\n\r\n.task {\r\n    position: relative;\r\n    margin-bottom: 1.25em;\r\n}\r\n\r\n.task::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    right: 0;\r\n    left: 0;\r\n    bottom: -0.5em;\r\n    height: 1px;\r\n    background: currentColor;\r\n    opacity: 0.1;\r\n}\r\n\r\n.custom-checkbox {\r\n    --size: 0.75em;\r\n    display: inline-block;\r\n    width: var(--size);\r\n    height: var(--size);\r\n    margin-right: var(--size);\r\n    cursor: pointer;\r\n    border: 2px solid currentColor;\r\n    border-radius: 50%;\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n    transition: -webkit-transform 300ms ease-in-out;\r\n    transition: transform 300ms ease-in-out;\r\n    transition: transform 300ms ease-in-out, -webkit-transform 300ms ease-in-out;\r\n}\r\n\r\n.task:hover .custom-checkbox,\r\n[type=\"checkbox\"]:focus+label .custom-checkbox {\r\n    -webkit-transform: scale(1.2);\r\n    transform: scale(1.2);\r\n    color: var(--clr-primary);\r\n}\r\n\r\n[type=\"checkbox\"]:checked+label .custom-checkbox {\r\n    background: var(--clr-primary);\r\n    border-color: var(--clr-primary);\r\n    box-shadow: inset 0 0 0px 2px white;\r\n}\r\n\r\n[type=\"checkbox\"]:checked+label {\r\n    opacity: 0.5;\r\n}\r\n\r\n.task label::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    left: 1.5em;\r\n    top: 50%;\r\n    height: 3px;\r\n    background: currentColor;\r\n    -webkit-transform: scaleX(0);\r\n    transform: scaleX(0);\r\n    -webkit-transform-origin: right;\r\n    transform-origin: right;\r\n    transition: -webkit-transform 150ms ease-in-out;\r\n    transition: transform 150ms ease-in-out;\r\n    transition: transform 150ms ease-in-out, -webkit-transform 150ms ease-in-out;\r\n}\r\n\r\n[type=\"checkbox\"]:checked+label::after {\r\n    -webkit-transform: scaleX(1);\r\n    transform: scaleX(1);\r\n    -webkit-transform-origin: left;\r\n    transform-origin: left;\r\n}\r\n\r\n.delete-stuff {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    position: absolute;\r\n    width: 100%;\r\n    left: 0;\r\n    bottom: -35px;\r\n    color: var(--clr-light);\r\n} */", "",{"version":3,"sources":["webpack://./src/style/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n\t--clr-primary: rgb(54, 112, 199);\r\n\t--clr-light: #f4f4f4;\r\n\t--clr-dark: rgb(58, 58, 58);\r\n\t--clr-white: rgb(252, 252, 252);\r\n\t--clr-warning: rgb(99, 36, 36);\r\n\t--clr-navHighlight: #4f7794;\r\n\t--clr-mineShaft: #232323;\r\n\t--clr-gallery: #ededed;\r\n\t--clr-elfGreen: #058179;\r\n\t--clr-nebula: #cbdbda;\r\n}\r\n\r\nhtml {\r\n\tfont-family: 'Source Sans Pro', sans-serif;\r\n\tpadding: 10% 10% 10% 10%;\r\n}\r\n\r\nbody {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tbackground: var(--clr-nebula);\r\n\tcolor: var(--clr-mineShaft);\r\n}\r\n\r\nh1 {\r\n\tcolor: var(--clr-dark);\r\n\tfont-size: 3rem;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\tmargin: -0.5em 0.5em 0.5em 0.5em;\r\n}\r\n\r\nh2 {\r\n\tmargin-bottom: 0px;\r\n}\r\n\r\n#menuToggle {\r\n\tdisplay: block;\r\n\tposition: relative;\r\n\ttop: 50px;\r\n\tleft: 50px;\r\n\tz-index: 1;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n}\r\n\r\n#menuToggle li {\r\n\ttext-decoration: none;\r\n\t-webkit-transition: color 0.3s ease;\r\n\t-o-transition: color 0.3s ease;\r\n\ttransition: color 0.3s ease;\r\n\tpadding: 10px 0px 10px 50px;\r\n\tfont-size: 22px;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n#menuToggle li:hover {\r\n\t/* color: var(--clr-gallery); */\r\n\t/* background-color: var(--clr-elfGreen);\r\n  border-radius: 35px; */\r\n\tfont-weight: 700;\r\n\t/* color: var(--clr-light); */\r\n\t/* margin: 0px 25px 0px 25px;\r\n  padding-left: 37px; */\r\n}\r\n\r\n\r\n/* The hamburger button hidden inside an #inputMenu element */\r\n#menuToggle #inputMenu {\r\n\tdisplay: block;\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tposition: absolute;\r\n\ttop: -7px;\r\n\tleft: -5px;\r\n\tpadding: 0;\r\n\tcursor: pointer;\r\n\topacity: 0;\r\n\t/* hide this */\r\n\tz-index: 2;\r\n\t/* and place it over the hamburger */\r\n\t-webkit-touch-callout: none;\r\n}\r\n\r\n#menuToggle #labelMenu {\r\n\tposition: relative;\r\n\tdisplay: block;\r\n\twidth: 30px;\r\n\theight: 30px;\r\n}\r\n\r\n#menuToggle #labelMenu span {\r\n\tdisplay: none;\r\n}\r\n\r\n/*\r\n * Hamburger\r\n */\r\n#menuToggle #labelMenu div {\r\n\tdisplay: block;\r\n\twidth: 30px;\r\n\theight: 2px;\r\n\tmargin-bottom: 6px;\r\n\tposition: relative;\r\n\tbackground: var(--clr-elfGreen);\r\n\tborder-radius: 5px;\r\n\tz-index: 1;\r\n\t-webkit-transform-origin: 4px 0px;\r\n\t-ms-transform-origin: 4px 0px;\r\n\ttransform-origin: 4px 0px;\r\n\t-webkit-transition: all 0.3s ease;\r\n\t-o-transition: all 0.3s ease;\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n#menuToggle #labelMenu div:first-child {\r\n\t-webkit-transform-origin: 0% 100%;\r\n\t-ms-transform-origin: 0% 100%;\r\n\ttransform-origin: 0% 100%;\r\n}\r\n\r\n#menuToggle #labelMenu div:nth-child(2) {\r\n\t-webkit-transform-origin: 0% 0%;\r\n\t-ms-transform-origin: 0% 0%;\r\n\ttransform-origin: 0% 0%;\r\n}\r\n\r\n/* \r\n * Change the color of the hamburger when toggled\r\n */\r\n#menuToggle #inputMenu:checked+#labelMenu div {\r\n\tbackground: var(--clr-mineShaft);\r\n}\r\n\r\n/*\r\n * Use absolute positioning to place the menu off-screen\r\n */\r\n#menu {\r\n\tposition: absolute;\r\n\twidth: 80vw;\r\n\tmargin: -80px 0 0 -50px;\r\n\tpadding: 50px 0px 50px 0px;\r\n\tpadding-top: 125px;\r\n\tbackground: var(--clr-gallery);\r\n\tborder-radius: 20px;\r\n\tlist-style-type: none;\r\n\t/* Hide the menu off-screen to the left */\r\n\tleft: 0;\r\n\t-webkit-transition: left 0.3s ease;\r\n\t-o-transition: left 0.3s ease;\r\n\ttransition: left 0.3s ease;\r\n}\r\n\r\n\r\n/*\r\n * Slide the menu in from left when the #inputMenu is checked\r\n */\r\n#menuToggle #inputMenu:checked~ul {\r\n\r\n\ttransition: left 0.3s ease;\r\n\tleft: -130%;\r\n}\r\n\r\n.list-img {\r\n\twidth: 1.7em;\r\n\tpadding-right: 10px;\r\n}\r\n\r\n.active-list {\r\n\tbackground-color: var(--clr-elfGreen);\r\n\tborder-radius: 35px;\r\n\tmargin: 0px 25px 0px 25px;\r\n\tcolor: var(--clr-light);\r\n\ttransition: all 0.3s ease;\r\n\t/* font-weight: 700; */\r\n\t\t/* color: var(--clr-light); */\r\n\t/* padding-left: 17px; */\r\n\t/* font-weight: 700; */\r\n}\r\n\r\n#myForm {\r\n\tdisplay: none;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tmargin-top: 1.8em;\r\n}\r\n\r\n#myForm form {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tfont-size: 1.3em;\r\n\tbackground-color: var(--clr-white);\r\n\twidth: 12em;\r\n\tpadding: 2em .6em 1.5em .6em;\r\n\tborder-radius: 20px;\r\n}\r\n\r\n#addProjectForm {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n}\r\n\r\n#addProjectButton {\r\n\tmargin-top: 30px;\r\n\tbackground-color: var(--clr-elfGreen);\r\n\tcolor: var(--clr-light);\r\n\tborder: none;\r\n\tborder-radius: 12px;\r\n\tfont-size: 1.3em;\r\n\tpadding: 2% 4% 2% 3%;\r\n\tfont-family: 'Source Sans Pro', sans-serif;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n#addProjectButton:hover {\r\n\tcolor: var(--clr-light);\r\n\topacity: 0.8;\r\n}\r\n\r\n#addProjectButton span {\r\n\tfont-size: 1.5em;\r\n\tfont-weight: 300;\r\n\tpadding: 0px 10px 0px 3px;\r\n\t\r\n}\r\n\r\n#submitBtn {\r\n \tfont-family: 'Source Sans Pro', sans-serif;\r\n \tbackground-color: var(--clr-elfGreen);\r\n \tcolor: var(--clr-light);\r\n \tborder: none;\r\n \tborder: none;\r\n \tborder-radius: 12px;\r\n \tfont-size: 1em;\r\n \tpadding: 8% 30% 8% 30%;\r\n}\r\n\r\n#projectLabel {\r\n\tfont-size: 1.3em;\r\n\tfont-weight: 700;\r\n}\r\n\r\n#projectInput {\r\n\tfont-size: 0.8em;\r\n\tfont-weight: 400;\r\n\tfont-family: 'Source Sans Pro', sans-serif;\r\n\tborder-radius: 15px;\r\n\tpadding: 0px 15px 0px 15px;\r\n}\r\n\r\n.todo-list {\r\n\tmargin-top: 30.5em;\r\n\tbackground: var(--clr-gallery);\r\n\tpadding: 10%;\r\n\tborder-radius: 20px;\r\n}\r\n\r\n.addmarginAfterClick {\r\n\tmargin-top: 5em;\r\n}\r\n\r\n.todo-header {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tbackground-color: var(--clr-light);\r\n\tborder-radius: 20px;\r\n\tmargin-bottom: 15px;\r\n}\r\n\r\n.todo-body {\r\n\tbackground-color: var(--clr-light);\r\n\tborder-radius: 20px;\r\n\tpadding: 15%;\r\n}\r\n\r\n#myTasks {\r\n\tdisplay: none;\r\n}\r\n\r\n\r\n\r\n/* #projectName *, #projectLabel *, #submitBtn *, #myForm * {\r\n\tall: unset;\r\n} */\r\n\r\n/* \r\n:root {\r\n    --clr-primary: rgb(54, 112, 199);\r\n    --clr-light: #f4f4f4;\r\n    --clr-dark: #333;\r\n    --clr-warning: rgb(99, 36, 36);\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n    font-family: inherit;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    font-family: \"Work Sans\", sans-serif;\r\n    font-weight: 300;\r\n    font-size: 1.5rem;\r\n    background-color: var(--clr-primary);\r\n    color: var(--clr-light);\r\n    display: grid;\r\n    grid:     \"header header header header\" auto\r\n    \"...... lists  active ......\" auto /\r\n    1fr minmax(100px, 300px) minmax(250px, 500px) 1fr;\r\n}\r\n\r\n.title {\r\n    grid-area: header;\r\n    text-align: center;\r\n    font-size: calc(7vw + 2rem);\r\n    font-weight: 900;\r\n    color: rgba(0, 0, 0, 0.1);\r\n    letter-spacing: 2px;\r\n    margin: -0.3em 0 0.5em;\r\n}\r\n\r\n.all-tasks {\r\n    grid-area: lists;\r\n}\r\n\r\n.task-list {\r\n    font-size: 1.2rem;\r\n    line-height: 1.7;\r\n    list-style: circle;\r\n    padding-left: 1.1em;\r\n}\r\n\r\n.list-name {\r\n    cursor: pointer;\r\n}\r\n\r\n.list-name:hover {\r\n    opacity: 0.7;\r\n}\r\n\r\nform {\r\n    display: flex;\r\n}\r\n\r\n.btn {\r\n    cursor: pointer;\r\n    background: 0;\r\n    border: 0;\r\n    padding: 0;\r\n    color: inherit;\r\n}\r\n\r\n.btn.create {\r\n    font-size: 1.5rem;\r\n    font-weight: 900;\r\n    margin-right: 0.25em;\r\n    transition: opacity 250ms ease-in;\r\n}\r\n\r\n.btn.create:hover {\r\n    opacity: 0.7;\r\n}\r\n\r\n.btn.delete {\r\n    opacity: 0.7;\r\n    font-size: 1rem;\r\n    transition: color 200ms;\r\n}\r\n\r\n.btn.delete:hover {\r\n    color: var(--clr-warning);\r\n}\r\n\r\n.new {\r\n    background: transparent;\r\n    border: 0;\r\n    color: inherit;\r\n    border-bottom: 1px solid currentColor;\r\n    font-size: inherit;\r\n    outline: none;\r\n    padding: 0.25em;\r\n    transition: border-bottom 150ms ease-in;\r\n    order: 2;\r\n}\r\n\r\n.new::-webkit-input-placeholder {\r\n    opacity: 0.4;\r\n}\r\n\r\n.new:-ms-input-placeholder {\r\n    opacity: 0.4;\r\n}\r\n\r\n.new::-ms-input-placeholder {\r\n    opacity: 0.4;\r\n}\r\n\r\n.new::placeholder {\r\n    opacity: 0.4;\r\n}\r\n\r\n.new:focus {\r\n    border-bottom-width: 3px;\r\n}\r\n\r\n.new:focus::-webkit-input-placeholder {\r\n    opacity: 0.15;\r\n}\r\n\r\n.new:focus:-ms-input-placeholder {\r\n    opacity: 0.15;\r\n}\r\n\r\n.new:focus::-ms-input-placeholder {\r\n    opacity: 0.15;\r\n}\r\n\r\n.new:focus::placeholder {\r\n    opacity: 0.15;\r\n}\r\n\r\n.new.list {\r\n    font-size: 1.1rem;\r\n}\r\n\r\n.new.task {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.active-list {\r\n    font-weight: 700;\r\n}\r\n\r\n.todo-list {\r\n    --spacer: 2rem;\r\n    grid-area: active;\r\n    background: var(--clr-light);\r\n    color: var(--clr-dark);\r\n}\r\n\r\n.todo-header {\r\n    padding: var(--spacer);\r\n    background: #e4e4e4;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.list-title {\r\n    margin: 0 1em 0 0;\r\n}\r\n\r\n.task-count {\r\n    margin: 0;\r\n    font-size: 1rem;\r\n}\r\n\r\n.todo-body {\r\n    padding: var(--spacer);\r\n    position: relative;\r\n}\r\n\r\n.new-task-creator .create {\r\n    color: var(--clr-primary);\r\n}\r\n\r\n[type=\"checkbox\"] {\r\n    opacity: 0;\r\n    position: absolute;\r\n}\r\n\r\n.task label {\r\n    display: flex-inline;\r\n    align-items: center;\r\n    position: relative;\r\n}\r\n\r\n.task {\r\n    position: relative;\r\n    margin-bottom: 1.25em;\r\n}\r\n\r\n.task::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    right: 0;\r\n    left: 0;\r\n    bottom: -0.5em;\r\n    height: 1px;\r\n    background: currentColor;\r\n    opacity: 0.1;\r\n}\r\n\r\n.custom-checkbox {\r\n    --size: 0.75em;\r\n    display: inline-block;\r\n    width: var(--size);\r\n    height: var(--size);\r\n    margin-right: var(--size);\r\n    cursor: pointer;\r\n    border: 2px solid currentColor;\r\n    border-radius: 50%;\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n    transition: -webkit-transform 300ms ease-in-out;\r\n    transition: transform 300ms ease-in-out;\r\n    transition: transform 300ms ease-in-out, -webkit-transform 300ms ease-in-out;\r\n}\r\n\r\n.task:hover .custom-checkbox,\r\n[type=\"checkbox\"]:focus+label .custom-checkbox {\r\n    -webkit-transform: scale(1.2);\r\n    transform: scale(1.2);\r\n    color: var(--clr-primary);\r\n}\r\n\r\n[type=\"checkbox\"]:checked+label .custom-checkbox {\r\n    background: var(--clr-primary);\r\n    border-color: var(--clr-primary);\r\n    box-shadow: inset 0 0 0px 2px white;\r\n}\r\n\r\n[type=\"checkbox\"]:checked+label {\r\n    opacity: 0.5;\r\n}\r\n\r\n.task label::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    left: 1.5em;\r\n    top: 50%;\r\n    height: 3px;\r\n    background: currentColor;\r\n    -webkit-transform: scaleX(0);\r\n    transform: scaleX(0);\r\n    -webkit-transform-origin: right;\r\n    transform-origin: right;\r\n    transition: -webkit-transform 150ms ease-in-out;\r\n    transition: transform 150ms ease-in-out;\r\n    transition: transform 150ms ease-in-out, -webkit-transform 150ms ease-in-out;\r\n}\r\n\r\n[type=\"checkbox\"]:checked+label::after {\r\n    -webkit-transform: scaleX(1);\r\n    transform: scaleX(1);\r\n    -webkit-transform-origin: left;\r\n    transform-origin: left;\r\n}\r\n\r\n.delete-stuff {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    position: absolute;\r\n    width: 100%;\r\n    left: 0;\r\n    bottom: -35px;\r\n    color: var(--clr-light);\r\n} */"],"sourceRoot":""}]);
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

//dom stuff

let addProjectButton = document.getElementById('addProjectButton');
let projectSubmitButton = document.getElementById('submitBtn');
let inputMenu = document.getElementById('inputMenu');
let taskList = document.getElementById('taskList');
let addTaskButton = document.getElementById('addTaskButton');
let taskSubmitButton = document.getElementById('taskSubmitButton');


inputMenu.addEventListener('click', addMargin);
addTaskButton.addEventListener('click', addTask);
addProjectButton.addEventListener('click', openForm);
projectSubmitButton.addEventListener('click', closeForm);
taskSubmitButton.addEventListener('click', closeTaskForm);


function openForm() {
	document.getElementById("myForm").style.display = "block";
	addProjectButton.style.display = "none";
}

function closeForm() {
	document.getElementById("myForm").style.display = "none";
}

function addMargin() {
	taskList.classList.toggle('addmarginAfterClick');
	console.log("it works");
}

function addTask() {
	document.getElementById("myTasks").style.display = "block";
	addTaskButton.style.display = "none";
	
}

function closeTaskForm() {
	document.getElementById("myTasks").style.display = "none";
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxLQUFLLEtBQUssWUFBWSxPQUFPLE1BQU0sS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsUUFBUSxNQUFNLEtBQUssTUFBTSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsY0FBYyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFFBQVEsTUFBTSxNQUFNLHdSQUF3UixpQ0FBaUMsdUNBQXVDLDJCQUEy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QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7OztVQ2ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNONEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VtZW50LWFwcC8uL3NyYy9zdHlsZS9zdHlsZXMuY3NzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlbWVudC1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlbWVudC1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZW1lbnQtYXBwLy4vc3JjL3N0eWxlL3N0eWxlcy5jc3M/YWY3YyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZW1lbnQtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlbWVudC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlbWVudC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VtZW50LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZW1lbnQtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VtZW50LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlbWVudC1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VtZW50LWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZW1lbnQtYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZW1lbnQtYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VtZW50LWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlbWVudC1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuXFx0LS1jbHItcHJpbWFyeTogcmdiKDU0LCAxMTIsIDE5OSk7XFxyXFxuXFx0LS1jbHItbGlnaHQ6ICNmNGY0ZjQ7XFxyXFxuXFx0LS1jbHItZGFyazogcmdiKDU4LCA1OCwgNTgpO1xcclxcblxcdC0tY2xyLXdoaXRlOiByZ2IoMjUyLCAyNTIsIDI1Mik7XFxyXFxuXFx0LS1jbHItd2FybmluZzogcmdiKDk5LCAzNiwgMzYpO1xcclxcblxcdC0tY2xyLW5hdkhpZ2hsaWdodDogIzRmNzc5NDtcXHJcXG5cXHQtLWNsci1taW5lU2hhZnQ6ICMyMzIzMjM7XFxyXFxuXFx0LS1jbHItZ2FsbGVyeTogI2VkZWRlZDtcXHJcXG5cXHQtLWNsci1lbGZHcmVlbjogIzA1ODE3OTtcXHJcXG5cXHQtLWNsci1uZWJ1bGE6ICNjYmRiZGE7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcXHJcXG5cXHRwYWRkaW5nOiAxMCUgMTAlIDEwJSAxMCU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGJhY2tncm91bmQ6IHZhcigtLWNsci1uZWJ1bGEpO1xcclxcblxcdGNvbG9yOiB2YXIoLS1jbHItbWluZVNoYWZ0KTtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcblxcdGNvbG9yOiB2YXIoLS1jbHItZGFyayk7XFxyXFxuXFx0Zm9udC1zaXplOiAzcmVtO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0bWFyZ2luOiAtMC41ZW0gMC41ZW0gMC41ZW0gMC41ZW07XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAwcHg7XFxyXFxufVxcclxcblxcclxcbiNtZW51VG9nZ2xlIHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0dG9wOiA1MHB4O1xcclxcblxcdGxlZnQ6IDUwcHg7XFxyXFxuXFx0ei1pbmRleDogMTtcXHJcXG5cXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcclxcblxcdC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuXFx0LW1zLXVzZXItc2VsZWN0OiBub25lO1xcclxcblxcdHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudVRvZ2dsZSBsaSB7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xcclxcblxcdC1vLXRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcXHJcXG5cXHR0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XFxyXFxuXFx0cGFkZGluZzogMTBweCAwcHggMTBweCA1MHB4O1xcclxcblxcdGZvbnQtc2l6ZTogMjJweDtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuI21lbnVUb2dnbGUgbGk6aG92ZXIge1xcclxcblxcdC8qIGNvbG9yOiB2YXIoLS1jbHItZ2FsbGVyeSk7ICovXFxyXFxuXFx0LyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWVsZkdyZWVuKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDM1cHg7ICovXFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG5cXHQvKiBjb2xvcjogdmFyKC0tY2xyLWxpZ2h0KTsgKi9cXHJcXG5cXHQvKiBtYXJnaW46IDBweCAyNXB4IDBweCAyNXB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiAzN3B4OyAqL1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBUaGUgaGFtYnVyZ2VyIGJ1dHRvbiBoaWRkZW4gaW5zaWRlIGFuICNpbnB1dE1lbnUgZWxlbWVudCAqL1xcclxcbiNtZW51VG9nZ2xlICNpbnB1dE1lbnUge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdHdpZHRoOiAzMHB4O1xcclxcblxcdGhlaWdodDogMzBweDtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0dG9wOiAtN3B4O1xcclxcblxcdGxlZnQ6IC01cHg7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0b3BhY2l0eTogMDtcXHJcXG5cXHQvKiBoaWRlIHRoaXMgKi9cXHJcXG5cXHR6LWluZGV4OiAyO1xcclxcblxcdC8qIGFuZCBwbGFjZSBpdCBvdmVyIHRoZSBoYW1idXJnZXIgKi9cXHJcXG5cXHQtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNtZW51VG9nZ2xlICNsYWJlbE1lbnUge1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHR3aWR0aDogMzBweDtcXHJcXG5cXHRoZWlnaHQ6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbiNtZW51VG9nZ2xlICNsYWJlbE1lbnUgc3BhbiB7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiBIYW1idXJnZXJcXHJcXG4gKi9cXHJcXG4jbWVudVRvZ2dsZSAjbGFiZWxNZW51IGRpdiB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0d2lkdGg6IDMwcHg7XFxyXFxuXFx0aGVpZ2h0OiAycHg7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogNnB4O1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1jbHItZWxmR3JlZW4pO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHR6LWluZGV4OiAxO1xcclxcblxcdC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNHB4IDBweDtcXHJcXG5cXHQtbXMtdHJhbnNmb3JtLW9yaWdpbjogNHB4IDBweDtcXHJcXG5cXHR0cmFuc2Zvcm0tb3JpZ2luOiA0cHggMHB4O1xcclxcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG5cXHQtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbiNtZW51VG9nZ2xlICNsYWJlbE1lbnUgZGl2OmZpcnN0LWNoaWxkIHtcXHJcXG5cXHQtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAlIDEwMCU7XFxyXFxuXFx0LW1zLXRyYW5zZm9ybS1vcmlnaW46IDAlIDEwMCU7XFxyXFxuXFx0dHJhbnNmb3JtLW9yaWdpbjogMCUgMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuI21lbnVUb2dnbGUgI2xhYmVsTWVudSBkaXY6bnRoLWNoaWxkKDIpIHtcXHJcXG5cXHQtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xcclxcblxcdC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcXHJcXG5cXHR0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyogXFxyXFxuICogQ2hhbmdlIHRoZSBjb2xvciBvZiB0aGUgaGFtYnVyZ2VyIHdoZW4gdG9nZ2xlZFxcclxcbiAqL1xcclxcbiNtZW51VG9nZ2xlICNpbnB1dE1lbnU6Y2hlY2tlZCsjbGFiZWxNZW51IGRpdiB7XFxyXFxuXFx0YmFja2dyb3VuZDogdmFyKC0tY2xyLW1pbmVTaGFmdCk7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogVXNlIGFic29sdXRlIHBvc2l0aW9uaW5nIHRvIHBsYWNlIHRoZSBtZW51IG9mZi1zY3JlZW5cXHJcXG4gKi9cXHJcXG4jbWVudSB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdHdpZHRoOiA4MHZ3O1xcclxcblxcdG1hcmdpbjogLTgwcHggMCAwIC01MHB4O1xcclxcblxcdHBhZGRpbmc6IDUwcHggMHB4IDUwcHggMHB4O1xcclxcblxcdHBhZGRpbmctdG9wOiAxMjVweDtcXHJcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1jbHItZ2FsbGVyeSk7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXHJcXG5cXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuXFx0LyogSGlkZSB0aGUgbWVudSBvZmYtc2NyZWVuIHRvIHRoZSBsZWZ0ICovXFxyXFxuXFx0bGVmdDogMDtcXHJcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IGxlZnQgMC4zcyBlYXNlO1xcclxcblxcdC1vLXRyYW5zaXRpb246IGxlZnQgMC4zcyBlYXNlO1xcclxcblxcdHRyYW5zaXRpb246IGxlZnQgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKlxcclxcbiAqIFNsaWRlIHRoZSBtZW51IGluIGZyb20gbGVmdCB3aGVuIHRoZSAjaW5wdXRNZW51IGlzIGNoZWNrZWRcXHJcXG4gKi9cXHJcXG4jbWVudVRvZ2dsZSAjaW5wdXRNZW51OmNoZWNrZWR+dWwge1xcclxcblxcclxcblxcdHRyYW5zaXRpb246IGxlZnQgMC4zcyBlYXNlO1xcclxcblxcdGxlZnQ6IC0xMzAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1pbWcge1xcclxcblxcdHdpZHRoOiAxLjdlbTtcXHJcXG5cXHRwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlLWxpc3Qge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1lbGZHcmVlbik7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMzVweDtcXHJcXG5cXHRtYXJnaW46IDBweCAyNXB4IDBweCAyNXB4O1xcclxcblxcdGNvbG9yOiB2YXIoLS1jbHItbGlnaHQpO1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxuXFx0LyogZm9udC13ZWlnaHQ6IDcwMDsgKi9cXHJcXG5cXHRcXHQvKiBjb2xvcjogdmFyKC0tY2xyLWxpZ2h0KTsgKi9cXHJcXG5cXHQvKiBwYWRkaW5nLWxlZnQ6IDE3cHg7ICovXFxyXFxuXFx0LyogZm9udC13ZWlnaHQ6IDcwMDsgKi9cXHJcXG59XFxyXFxuXFxyXFxuI215Rm9ybSB7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdG1hcmdpbi10b3A6IDEuOGVtO1xcclxcbn1cXHJcXG5cXHJcXG4jbXlGb3JtIGZvcm0ge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGZvbnQtc2l6ZTogMS4zZW07XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXdoaXRlKTtcXHJcXG5cXHR3aWR0aDogMTJlbTtcXHJcXG5cXHRwYWRkaW5nOiAyZW0gLjZlbSAxLjVlbSAuNmVtO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbiNhZGRQcm9qZWN0Rm9ybSB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZFByb2plY3RCdXR0b24ge1xcclxcblxcdG1hcmdpbi10b3A6IDMwcHg7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWVsZkdyZWVuKTtcXHJcXG5cXHRjb2xvcjogdmFyKC0tY2xyLWxpZ2h0KTtcXHJcXG5cXHRib3JkZXI6IG5vbmU7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMTJweDtcXHJcXG5cXHRmb250LXNpemU6IDEuM2VtO1xcclxcblxcdHBhZGRpbmc6IDIlIDQlIDIlIDMlO1xcclxcblxcdGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZFByb2plY3RCdXR0b246aG92ZXIge1xcclxcblxcdGNvbG9yOiB2YXIoLS1jbHItbGlnaHQpO1xcclxcblxcdG9wYWNpdHk6IDAuODtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZFByb2plY3RCdXR0b24gc3BhbiB7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjVlbTtcXHJcXG5cXHRmb250LXdlaWdodDogMzAwO1xcclxcblxcdHBhZGRpbmc6IDBweCAxMHB4IDBweCAzcHg7XFxyXFxuXFx0XFxyXFxufVxcclxcblxcclxcbiNzdWJtaXRCdG4ge1xcclxcbiBcXHRmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XFxyXFxuIFxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1lbGZHcmVlbik7XFxyXFxuIFxcdGNvbG9yOiB2YXIoLS1jbHItbGlnaHQpO1xcclxcbiBcXHRib3JkZXI6IG5vbmU7XFxyXFxuIFxcdGJvcmRlcjogbm9uZTtcXHJcXG4gXFx0Ym9yZGVyLXJhZGl1czogMTJweDtcXHJcXG4gXFx0Zm9udC1zaXplOiAxZW07XFxyXFxuIFxcdHBhZGRpbmc6IDglIDMwJSA4JSAzMCU7XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0TGFiZWwge1xcclxcblxcdGZvbnQtc2l6ZTogMS4zZW07XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3RJbnB1dCB7XFxyXFxuXFx0Zm9udC1zaXplOiAwLjhlbTtcXHJcXG5cXHRmb250LXdlaWdodDogNDAwO1xcclxcblxcdGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcblxcdHBhZGRpbmc6IDBweCAxNXB4IDBweCAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1saXN0IHtcXHJcXG5cXHRtYXJnaW4tdG9wOiAzMC41ZW07XFxyXFxuXFx0YmFja2dyb3VuZDogdmFyKC0tY2xyLWdhbGxlcnkpO1xcclxcblxcdHBhZGRpbmc6IDEwJTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkbWFyZ2luQWZ0ZXJDbGljayB7XFxyXFxuXFx0bWFyZ2luLXRvcDogNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1oZWFkZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1saWdodCk7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1ib2R5IHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItbGlnaHQpO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuXFx0cGFkZGluZzogMTUlO1xcclxcbn1cXHJcXG5cXHJcXG4jbXlUYXNrcyB7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogI3Byb2plY3ROYW1lICosICNwcm9qZWN0TGFiZWwgKiwgI3N1Ym1pdEJ0biAqLCAjbXlGb3JtICoge1xcclxcblxcdGFsbDogdW5zZXQ7XFxyXFxufSAqL1xcclxcblxcclxcbi8qIFxcclxcbjpyb290IHtcXHJcXG4gICAgLS1jbHItcHJpbWFyeTogcmdiKDU0LCAxMTIsIDE5OSk7XFxyXFxuICAgIC0tY2xyLWxpZ2h0OiAjZjRmNGY0O1xcclxcbiAgICAtLWNsci1kYXJrOiAjMzMzO1xcclxcbiAgICAtLWNsci13YXJuaW5nOiByZ2IoOTksIDM2LCAzNik7XFxyXFxufVxcclxcblxcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiV29yayBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNsci1saWdodCk7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQ6ICAgICBcXFwiaGVhZGVyIGhlYWRlciBoZWFkZXIgaGVhZGVyXFxcIiBhdXRvXFxyXFxuICAgIFxcXCIuLi4uLi4gbGlzdHMgIGFjdGl2ZSAuLi4uLi5cXFwiIGF1dG8gL1xcclxcbiAgICAxZnIgbWlubWF4KDEwMHB4LCAzMDBweCkgbWlubWF4KDI1MHB4LCA1MDBweCkgMWZyO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IGNhbGMoN3Z3ICsgMnJlbSk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxyXFxuICAgIG1hcmdpbjogLTAuM2VtIDAgMC41ZW07XFxyXFxufVxcclxcblxcclxcbi5hbGwtdGFza3Mge1xcclxcbiAgICBncmlkLWFyZWE6IGxpc3RzO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1saXN0IHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjc7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IGNpcmNsZTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxLjFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtbmFtZSB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtbmFtZTpob3ZlciB7XFxyXFxuICAgIG9wYWNpdHk6IDAuNztcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5idG4ge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQ6IDA7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi5idG4uY3JlYXRlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMC4yNWVtO1xcclxcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDI1MG1zIGVhc2UtaW47XFxyXFxufVxcclxcblxcclxcbi5idG4uY3JlYXRlOmhvdmVyIHtcXHJcXG4gICAgb3BhY2l0eTogMC43O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLmRlbGV0ZSB7XFxyXFxuICAgIG9wYWNpdHk6IDAuNztcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAyMDBtcztcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi5kZWxldGU6aG92ZXIge1xcclxcbiAgICBjb2xvcjogdmFyKC0tY2xyLXdhcm5pbmcpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3IHtcXHJcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBjdXJyZW50Q29sb3I7XFxyXFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogMC4yNWVtO1xcclxcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tIDE1MG1zIGVhc2UtaW47XFxyXFxuICAgIG9yZGVyOiAyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXHJcXG4gICAgb3BhY2l0eTogMC40O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxyXFxuICAgIG9wYWNpdHk6IDAuNDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldzo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXHJcXG4gICAgb3BhY2l0eTogMC40O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3OjpwbGFjZWhvbGRlciB7XFxyXFxuICAgIG9wYWNpdHk6IDAuNDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldzpmb2N1cyB7XFxyXFxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldzpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxyXFxuICAgIG9wYWNpdHk6IDAuMTU7XFxyXFxufVxcclxcblxcclxcbi5uZXc6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXHJcXG4gICAgb3BhY2l0eTogMC4xNTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldzpmb2N1czo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXHJcXG4gICAgb3BhY2l0eTogMC4xNTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldzpmb2N1czo6cGxhY2Vob2xkZXIge1xcclxcbiAgICBvcGFjaXR5OiAwLjE1O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3Lmxpc3Qge1xcclxcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy50YXNrIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZS1saXN0IHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tbGlzdCB7XFxyXFxuICAgIC0tc3BhY2VyOiAycmVtO1xcclxcbiAgICBncmlkLWFyZWE6IGFjdGl2ZTtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2xyLWxpZ2h0KTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNsci1kYXJrKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taGVhZGVyIHtcXHJcXG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2VyKTtcXHJcXG4gICAgYmFja2dyb3VuZDogI2U0ZTRlNDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC10aXRsZSB7XFxyXFxuICAgIG1hcmdpbjogMCAxZW0gMCAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1jb3VudCB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1ib2R5IHtcXHJcXG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2VyKTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LXRhc2stY3JlYXRvciAuY3JlYXRlIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcblxcclxcbi50YXNrIGxhYmVsIHtcXHJcXG4gICAgZGlzcGxheTogZmxleC1pbmxpbmU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEuMjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2s6OmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGJvdHRvbTogLTAuNWVtO1xcclxcbiAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgYmFja2dyb3VuZDogY3VycmVudENvbG9yO1xcclxcbiAgICBvcGFjaXR5OiAwLjE7XFxyXFxufVxcclxcblxcclxcbi5jdXN0b20tY2hlY2tib3gge1xcclxcbiAgICAtLXNpemU6IDAuNzVlbTtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICB3aWR0aDogdmFyKC0tc2l6ZSk7XFxyXFxuICAgIGhlaWdodDogdmFyKC0tc2l6ZSk7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogdmFyKC0tc2l6ZSk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgY3VycmVudENvbG9yO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0LCAtd2Via2l0LXRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2s6aG92ZXIgLmN1c3RvbS1jaGVja2JveCxcXHJcXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpmb2N1cytsYWJlbCAuY3VzdG9tLWNoZWNrYm94IHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCtsYWJlbCAuY3VzdG9tLWNoZWNrYm94IHtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2xyLXByaW1hcnkpO1xcclxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXHJcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDBweCAycHggd2hpdGU7XFxyXFxufVxcclxcblxcclxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQrbGFiZWwge1xcclxcbiAgICBvcGFjaXR5OiAwLjU7XFxyXFxufVxcclxcblxcclxcbi50YXNrIGxhYmVsOjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBsZWZ0OiAxLjVlbTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIGhlaWdodDogM3B4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiBjdXJyZW50Q29sb3I7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xcclxcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcXHJcXG4gICAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMTUwbXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNTBtcyBlYXNlLWluLW91dDtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE1MG1zIGVhc2UtaW4tb3V0LCAtd2Via2l0LXRyYW5zZm9ybSAxNTBtcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCtsYWJlbDo6YWZ0ZXIge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDEpO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xcclxcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLXN0dWZmIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGJvdHRvbTogLTM1cHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItbGlnaHQpO1xcclxcbn0gKi9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLGdDQUFnQztDQUNoQyxvQkFBb0I7Q0FDcEIsMkJBQTJCO0NBQzNCLCtCQUErQjtDQUMvQiw4QkFBOEI7Q0FDOUIsMkJBQTJCO0NBQzNCLHdCQUF3QjtDQUN4QixzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLDBDQUEwQztDQUMxQyx3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLDZCQUE2QjtDQUM3QiwyQkFBMkI7QUFDNUI7O0FBRUE7Q0FDQyxzQkFBc0I7Q0FDdEIsZUFBZTtDQUNmLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsZ0NBQWdDO0FBQ2pDOztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsY0FBYztDQUNkLGtCQUFrQjtDQUNsQixTQUFTO0NBQ1QsVUFBVTtDQUNWLFVBQVU7Q0FDVix5QkFBeUI7Q0FDekIsc0JBQXNCO0NBQ3RCLHFCQUFxQjtDQUNyQixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxxQkFB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QUEwQjtBQUMzQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQiw4QkFBOEI7Q0FDOUIsWUFBWTtDQUNaLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQixrQ0FBa0M7Q0FDbEMsbUJBQW1CO0NBQ25CLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGtDQUFrQztDQUNsQyxtQkFBbUI7Q0FDbkIsWUFBWTtBQUNiOztBQUVBO0NBQ0MsYUFBYTtBQUNkOzs7O0FBSUE7O0dBRUc7O0FBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9SR1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuXFx0LS1jbHItcHJpbWFyeTogcmdiKDU0LCAxMTIsIDE5OSk7XFxyXFxuXFx0LS1jbHItbGlnaHQ6ICNmNGY0ZjQ7XFxyXFxuXFx0LS1jbHItZGFyazogcmdiKDU4LCA1OCwgNTgpO1xcclxcblxcdC0tY2xyLXdoaXRlOiByZ2IoMjUyLCAyNTIsIDI1Mik7XFxyXFxuXFx0LS1jbHItd2FybmluZzogcmdiKDk5LCAzNiwgMzYpO1xcclxcblxcdC0tY2xyLW5hdkhpZ2hsaWdodDogIzRmNzc5NDtcXHJcXG5cXHQtLWNsci1taW5lU2hhZnQ6ICMyMzIzMjM7XFxyXFxuXFx0LS1jbHItZ2FsbGVyeTogI2VkZWRlZDtcXHJcXG5cXHQtLWNsci1lbGZHcmVlbjogIzA1ODE3OTtcXHJcXG5cXHQtLWNsci1uZWJ1bGE6ICNjYmRiZGE7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcXHJcXG5cXHRwYWRkaW5nOiAxMCUgMTAlIDEwJSAxMCU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGJhY2tncm91bmQ6IHZhcigtLWNsci1uZWJ1bGEpO1xcclxcblxcdGNvbG9yOiB2YXIoLS1jbHItbWluZVNoYWZ0KTtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcblxcdGNvbG9yOiB2YXIoLS1jbHItZGFyayk7XFxyXFxuXFx0Zm9udC1zaXplOiAzcmVtO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0bWFyZ2luOiAtMC41ZW0gMC41ZW0gMC41ZW0gMC41ZW07XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAwcHg7XFxyXFxufVxcclxcblxcclxcbiNtZW51VG9nZ2xlIHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0dG9wOiA1MHB4O1xcclxcblxcdGxlZnQ6IDUwcHg7XFxyXFxuXFx0ei1pbmRleDogMTtcXHJcXG5cXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcclxcblxcdC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuXFx0LW1zLXVzZXItc2VsZWN0OiBub25lO1xcclxcblxcdHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudVRvZ2dsZSBsaSB7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xcclxcblxcdC1vLXRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcXHJcXG5cXHR0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XFxyXFxuXFx0cGFkZGluZzogMTBweCAwcHggMTBweCA1MHB4O1xcclxcblxcdGZvbnQtc2l6ZTogMjJweDtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuI21lbnVUb2dnbGUgbGk6aG92ZXIge1xcclxcblxcdC8qIGNvbG9yOiB2YXIoLS1jbHItZ2FsbGVyeSk7ICovXFxyXFxuXFx0LyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWVsZkdyZWVuKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDM1cHg7ICovXFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG5cXHQvKiBjb2xvcjogdmFyKC0tY2xyLWxpZ2h0KTsgKi9cXHJcXG5cXHQvKiBtYXJnaW46IDBweCAyNXB4IDBweCAyNXB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiAzN3B4OyAqL1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBUaGUgaGFtYnVyZ2VyIGJ1dHRvbiBoaWRkZW4gaW5zaWRlIGFuICNpbnB1dE1lbnUgZWxlbWVudCAqL1xcclxcbiNtZW51VG9nZ2xlICNpbnB1dE1lbnUge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdHdpZHRoOiAzMHB4O1xcclxcblxcdGhlaWdodDogMzBweDtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0dG9wOiAtN3B4O1xcclxcblxcdGxlZnQ6IC01cHg7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0b3BhY2l0eTogMDtcXHJcXG5cXHQvKiBoaWRlIHRoaXMgKi9cXHJcXG5cXHR6LWluZGV4OiAyO1xcclxcblxcdC8qIGFuZCBwbGFjZSBpdCBvdmVyIHRoZSBoYW1idXJnZXIgKi9cXHJcXG5cXHQtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNtZW51VG9nZ2xlICNsYWJlbE1lbnUge1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHR3aWR0aDogMzBweDtcXHJcXG5cXHRoZWlnaHQ6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbiNtZW51VG9nZ2xlICNsYWJlbE1lbnUgc3BhbiB7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiBIYW1idXJnZXJcXHJcXG4gKi9cXHJcXG4jbWVudVRvZ2dsZSAjbGFiZWxNZW51IGRpdiB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0d2lkdGg6IDMwcHg7XFxyXFxuXFx0aGVpZ2h0OiAycHg7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogNnB4O1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1jbHItZWxmR3JlZW4pO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHR6LWluZGV4OiAxO1xcclxcblxcdC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNHB4IDBweDtcXHJcXG5cXHQtbXMtdHJhbnNmb3JtLW9yaWdpbjogNHB4IDBweDtcXHJcXG5cXHR0cmFuc2Zvcm0tb3JpZ2luOiA0cHggMHB4O1xcclxcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG5cXHQtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbiNtZW51VG9nZ2xlICNsYWJlbE1lbnUgZGl2OmZpcnN0LWNoaWxkIHtcXHJcXG5cXHQtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAlIDEwMCU7XFxyXFxuXFx0LW1zLXRyYW5zZm9ybS1vcmlnaW46IDAlIDEwMCU7XFxyXFxuXFx0dHJhbnNmb3JtLW9yaWdpbjogMCUgMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuI21lbnVUb2dnbGUgI2xhYmVsTWVudSBkaXY6bnRoLWNoaWxkKDIpIHtcXHJcXG5cXHQtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xcclxcblxcdC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcXHJcXG5cXHR0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyogXFxyXFxuICogQ2hhbmdlIHRoZSBjb2xvciBvZiB0aGUgaGFtYnVyZ2VyIHdoZW4gdG9nZ2xlZFxcclxcbiAqL1xcclxcbiNtZW51VG9nZ2xlICNpbnB1dE1lbnU6Y2hlY2tlZCsjbGFiZWxNZW51IGRpdiB7XFxyXFxuXFx0YmFja2dyb3VuZDogdmFyKC0tY2xyLW1pbmVTaGFmdCk7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogVXNlIGFic29sdXRlIHBvc2l0aW9uaW5nIHRvIHBsYWNlIHRoZSBtZW51IG9mZi1zY3JlZW5cXHJcXG4gKi9cXHJcXG4jbWVudSB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdHdpZHRoOiA4MHZ3O1xcclxcblxcdG1hcmdpbjogLTgwcHggMCAwIC01MHB4O1xcclxcblxcdHBhZGRpbmc6IDUwcHggMHB4IDUwcHggMHB4O1xcclxcblxcdHBhZGRpbmctdG9wOiAxMjVweDtcXHJcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1jbHItZ2FsbGVyeSk7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXHJcXG5cXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuXFx0LyogSGlkZSB0aGUgbWVudSBvZmYtc2NyZWVuIHRvIHRoZSBsZWZ0ICovXFxyXFxuXFx0bGVmdDogMDtcXHJcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IGxlZnQgMC4zcyBlYXNlO1xcclxcblxcdC1vLXRyYW5zaXRpb246IGxlZnQgMC4zcyBlYXNlO1xcclxcblxcdHRyYW5zaXRpb246IGxlZnQgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKlxcclxcbiAqIFNsaWRlIHRoZSBtZW51IGluIGZyb20gbGVmdCB3aGVuIHRoZSAjaW5wdXRNZW51IGlzIGNoZWNrZWRcXHJcXG4gKi9cXHJcXG4jbWVudVRvZ2dsZSAjaW5wdXRNZW51OmNoZWNrZWR+dWwge1xcclxcblxcclxcblxcdHRyYW5zaXRpb246IGxlZnQgMC4zcyBlYXNlO1xcclxcblxcdGxlZnQ6IC0xMzAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1pbWcge1xcclxcblxcdHdpZHRoOiAxLjdlbTtcXHJcXG5cXHRwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlLWxpc3Qge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1lbGZHcmVlbik7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMzVweDtcXHJcXG5cXHRtYXJnaW46IDBweCAyNXB4IDBweCAyNXB4O1xcclxcblxcdGNvbG9yOiB2YXIoLS1jbHItbGlnaHQpO1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxuXFx0LyogZm9udC13ZWlnaHQ6IDcwMDsgKi9cXHJcXG5cXHRcXHQvKiBjb2xvcjogdmFyKC0tY2xyLWxpZ2h0KTsgKi9cXHJcXG5cXHQvKiBwYWRkaW5nLWxlZnQ6IDE3cHg7ICovXFxyXFxuXFx0LyogZm9udC13ZWlnaHQ6IDcwMDsgKi9cXHJcXG59XFxyXFxuXFxyXFxuI215Rm9ybSB7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdG1hcmdpbi10b3A6IDEuOGVtO1xcclxcbn1cXHJcXG5cXHJcXG4jbXlGb3JtIGZvcm0ge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGZvbnQtc2l6ZTogMS4zZW07XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXdoaXRlKTtcXHJcXG5cXHR3aWR0aDogMTJlbTtcXHJcXG5cXHRwYWRkaW5nOiAyZW0gLjZlbSAxLjVlbSAuNmVtO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbiNhZGRQcm9qZWN0Rm9ybSB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZFByb2plY3RCdXR0b24ge1xcclxcblxcdG1hcmdpbi10b3A6IDMwcHg7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWVsZkdyZWVuKTtcXHJcXG5cXHRjb2xvcjogdmFyKC0tY2xyLWxpZ2h0KTtcXHJcXG5cXHRib3JkZXI6IG5vbmU7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMTJweDtcXHJcXG5cXHRmb250LXNpemU6IDEuM2VtO1xcclxcblxcdHBhZGRpbmc6IDIlIDQlIDIlIDMlO1xcclxcblxcdGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZFByb2plY3RCdXR0b246aG92ZXIge1xcclxcblxcdGNvbG9yOiB2YXIoLS1jbHItbGlnaHQpO1xcclxcblxcdG9wYWNpdHk6IDAuODtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZFByb2plY3RCdXR0b24gc3BhbiB7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjVlbTtcXHJcXG5cXHRmb250LXdlaWdodDogMzAwO1xcclxcblxcdHBhZGRpbmc6IDBweCAxMHB4IDBweCAzcHg7XFxyXFxuXFx0XFxyXFxufVxcclxcblxcclxcbiNzdWJtaXRCdG4ge1xcclxcbiBcXHRmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XFxyXFxuIFxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1lbGZHcmVlbik7XFxyXFxuIFxcdGNvbG9yOiB2YXIoLS1jbHItbGlnaHQpO1xcclxcbiBcXHRib3JkZXI6IG5vbmU7XFxyXFxuIFxcdGJvcmRlcjogbm9uZTtcXHJcXG4gXFx0Ym9yZGVyLXJhZGl1czogMTJweDtcXHJcXG4gXFx0Zm9udC1zaXplOiAxZW07XFxyXFxuIFxcdHBhZGRpbmc6IDglIDMwJSA4JSAzMCU7XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0TGFiZWwge1xcclxcblxcdGZvbnQtc2l6ZTogMS4zZW07XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3RJbnB1dCB7XFxyXFxuXFx0Zm9udC1zaXplOiAwLjhlbTtcXHJcXG5cXHRmb250LXdlaWdodDogNDAwO1xcclxcblxcdGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcblxcdHBhZGRpbmc6IDBweCAxNXB4IDBweCAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1saXN0IHtcXHJcXG5cXHRtYXJnaW4tdG9wOiAzMC41ZW07XFxyXFxuXFx0YmFja2dyb3VuZDogdmFyKC0tY2xyLWdhbGxlcnkpO1xcclxcblxcdHBhZGRpbmc6IDEwJTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkbWFyZ2luQWZ0ZXJDbGljayB7XFxyXFxuXFx0bWFyZ2luLXRvcDogNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1oZWFkZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1saWdodCk7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1ib2R5IHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItbGlnaHQpO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuXFx0cGFkZGluZzogMTUlO1xcclxcbn1cXHJcXG5cXHJcXG4jbXlUYXNrcyB7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogI3Byb2plY3ROYW1lICosICNwcm9qZWN0TGFiZWwgKiwgI3N1Ym1pdEJ0biAqLCAjbXlGb3JtICoge1xcclxcblxcdGFsbDogdW5zZXQ7XFxyXFxufSAqL1xcclxcblxcclxcbi8qIFxcclxcbjpyb290IHtcXHJcXG4gICAgLS1jbHItcHJpbWFyeTogcmdiKDU0LCAxMTIsIDE5OSk7XFxyXFxuICAgIC0tY2xyLWxpZ2h0OiAjZjRmNGY0O1xcclxcbiAgICAtLWNsci1kYXJrOiAjMzMzO1xcclxcbiAgICAtLWNsci13YXJuaW5nOiByZ2IoOTksIDM2LCAzNik7XFxyXFxufVxcclxcblxcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiV29yayBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNsci1saWdodCk7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQ6ICAgICBcXFwiaGVhZGVyIGhlYWRlciBoZWFkZXIgaGVhZGVyXFxcIiBhdXRvXFxyXFxuICAgIFxcXCIuLi4uLi4gbGlzdHMgIGFjdGl2ZSAuLi4uLi5cXFwiIGF1dG8gL1xcclxcbiAgICAxZnIgbWlubWF4KDEwMHB4LCAzMDBweCkgbWlubWF4KDI1MHB4LCA1MDBweCkgMWZyO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IGNhbGMoN3Z3ICsgMnJlbSk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxyXFxuICAgIG1hcmdpbjogLTAuM2VtIDAgMC41ZW07XFxyXFxufVxcclxcblxcclxcbi5hbGwtdGFza3Mge1xcclxcbiAgICBncmlkLWFyZWE6IGxpc3RzO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1saXN0IHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjc7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IGNpcmNsZTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxLjFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtbmFtZSB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtbmFtZTpob3ZlciB7XFxyXFxuICAgIG9wYWNpdHk6IDAuNztcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5idG4ge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQ6IDA7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi5idG4uY3JlYXRlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMC4yNWVtO1xcclxcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDI1MG1zIGVhc2UtaW47XFxyXFxufVxcclxcblxcclxcbi5idG4uY3JlYXRlOmhvdmVyIHtcXHJcXG4gICAgb3BhY2l0eTogMC43O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLmRlbGV0ZSB7XFxyXFxuICAgIG9wYWNpdHk6IDAuNztcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAyMDBtcztcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi5kZWxldGU6aG92ZXIge1xcclxcbiAgICBjb2xvcjogdmFyKC0tY2xyLXdhcm5pbmcpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3IHtcXHJcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBjdXJyZW50Q29sb3I7XFxyXFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogMC4yNWVtO1xcclxcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tIDE1MG1zIGVhc2UtaW47XFxyXFxuICAgIG9yZGVyOiAyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXHJcXG4gICAgb3BhY2l0eTogMC40O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxyXFxuICAgIG9wYWNpdHk6IDAuNDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldzo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXHJcXG4gICAgb3BhY2l0eTogMC40O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3OjpwbGFjZWhvbGRlciB7XFxyXFxuICAgIG9wYWNpdHk6IDAuNDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldzpmb2N1cyB7XFxyXFxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldzpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxyXFxuICAgIG9wYWNpdHk6IDAuMTU7XFxyXFxufVxcclxcblxcclxcbi5uZXc6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXHJcXG4gICAgb3BhY2l0eTogMC4xNTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldzpmb2N1czo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXHJcXG4gICAgb3BhY2l0eTogMC4xNTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldzpmb2N1czo6cGxhY2Vob2xkZXIge1xcclxcbiAgICBvcGFjaXR5OiAwLjE1O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3Lmxpc3Qge1xcclxcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy50YXNrIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZS1saXN0IHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tbGlzdCB7XFxyXFxuICAgIC0tc3BhY2VyOiAycmVtO1xcclxcbiAgICBncmlkLWFyZWE6IGFjdGl2ZTtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2xyLWxpZ2h0KTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNsci1kYXJrKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taGVhZGVyIHtcXHJcXG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2VyKTtcXHJcXG4gICAgYmFja2dyb3VuZDogI2U0ZTRlNDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC10aXRsZSB7XFxyXFxuICAgIG1hcmdpbjogMCAxZW0gMCAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1jb3VudCB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1ib2R5IHtcXHJcXG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2VyKTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LXRhc2stY3JlYXRvciAuY3JlYXRlIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcblxcclxcbi50YXNrIGxhYmVsIHtcXHJcXG4gICAgZGlzcGxheTogZmxleC1pbmxpbmU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEuMjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2s6OmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGJvdHRvbTogLTAuNWVtO1xcclxcbiAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgYmFja2dyb3VuZDogY3VycmVudENvbG9yO1xcclxcbiAgICBvcGFjaXR5OiAwLjE7XFxyXFxufVxcclxcblxcclxcbi5jdXN0b20tY2hlY2tib3gge1xcclxcbiAgICAtLXNpemU6IDAuNzVlbTtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICB3aWR0aDogdmFyKC0tc2l6ZSk7XFxyXFxuICAgIGhlaWdodDogdmFyKC0tc2l6ZSk7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogdmFyKC0tc2l6ZSk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgY3VycmVudENvbG9yO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0LCAtd2Via2l0LXRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2s6aG92ZXIgLmN1c3RvbS1jaGVja2JveCxcXHJcXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpmb2N1cytsYWJlbCAuY3VzdG9tLWNoZWNrYm94IHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCtsYWJlbCAuY3VzdG9tLWNoZWNrYm94IHtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2xyLXByaW1hcnkpO1xcclxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXHJcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDBweCAycHggd2hpdGU7XFxyXFxufVxcclxcblxcclxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQrbGFiZWwge1xcclxcbiAgICBvcGFjaXR5OiAwLjU7XFxyXFxufVxcclxcblxcclxcbi50YXNrIGxhYmVsOjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBsZWZ0OiAxLjVlbTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIGhlaWdodDogM3B4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiBjdXJyZW50Q29sb3I7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xcclxcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcXHJcXG4gICAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMTUwbXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNTBtcyBlYXNlLWluLW91dDtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE1MG1zIGVhc2UtaW4tb3V0LCAtd2Via2l0LXRyYW5zZm9ybSAxNTBtcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCtsYWJlbDo6YWZ0ZXIge1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDEpO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xcclxcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLXN0dWZmIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGJvdHRvbTogLTM1cHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItbGlnaHQpO1xcclxcbn0gKi9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS9zdHlsZXMuY3NzJztcclxuLy8gaW1wb3J0IGdpdEltYWdlIGZyb20gJy4vaW1hZ2VzL2dpdC1sb2dvLnBuZyc7XHJcblxyXG4vL2RvbSBzdHVmZlxyXG5cclxubGV0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvamVjdEJ1dHRvbicpO1xyXG5sZXQgcHJvamVjdFN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXRCdG4nKTtcclxubGV0IGlucHV0TWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dE1lbnUnKTtcclxubGV0IHRhc2tMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tMaXN0Jyk7XHJcbmxldCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRhc2tCdXR0b24nKTtcclxubGV0IHRhc2tTdWJtaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1N1Ym1pdEJ1dHRvbicpO1xyXG5cclxuXHJcbmlucHV0TWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZE1hcmdpbik7XHJcbmFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRUYXNrKTtcclxuYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Gb3JtKTtcclxucHJvamVjdFN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlRm9ybSk7XHJcbnRhc2tTdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVRhc2tGb3JtKTtcclxuXHJcblxyXG5mdW5jdGlvbiBvcGVuRm9ybSgpIHtcclxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Rm9ybVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cdGFkZFByb2plY3RCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9zZUZvcm0oKSB7XHJcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUZvcm1cIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRNYXJnaW4oKSB7XHJcblx0dGFza0xpc3QuY2xhc3NMaXN0LnRvZ2dsZSgnYWRkbWFyZ2luQWZ0ZXJDbGljaycpO1xyXG5cdGNvbnNvbGUubG9nKFwiaXQgd29ya3NcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFRhc2soKSB7XHJcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteVRhc2tzXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblx0YWRkVGFza0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblx0XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb3NlVGFza0Zvcm0oKSB7XHJcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteVRhc2tzXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=