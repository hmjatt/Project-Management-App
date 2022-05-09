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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n\t--clr-primary: rgb(41, 145, 255);\r\n\t--clr-lightGray: rgb(232, 232, 232);\r\n\t--clr-light: #f4f4f4;\r\n\t--clr-dark: rgb(58, 58, 58);\r\n\t--clr-white: rgb(252, 252, 252);\r\n\t--clr-warning: #e97560;\r\n\t--clr-navHighlight: #4f7794d0;\r\n\t--clr-mineShaft: #232323;\r\n\t--clr-gallery: #ededed;\r\n\t--clr-elfGreen: #058179;\r\n\t--clr-nebula: #cbdbda;\r\n\t--clr-completedTask: #a5b1c0;\r\n\t--clr-delete: #ff494962;\r\n}\r\n\r\nhtml {\r\n\tfont-family: 'Source Sans Pro', sans-serif;\r\n\r\n}\r\n\r\nbody {\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tbackground: var(--clr-nebula);\r\n\tcolor: var(--clr-mineShaft);\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n}\r\n\r\nh1 {\r\n\tcolor: var(--clr-dark);\r\n\tfont-size: 3rem;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\tmargin: -0.5em 0.5em 0.5em 0.5em;\r\n}\r\n\r\nh2 {\r\n\tmargin-bottom: 0px;\r\n}\r\n\r\n#container {\r\n\tmargin-right: -18%;\r\n\tpadding-left: 1%;\r\n\tdisplay: grid;\r\n\tjustify-content: space-around;\r\n\tgrid-template-columns: 1fr;\r\n\tgrid-template-rows: auto;\r\n\tgrid-template-areas: \r\n\t  \"logo\"\r\n\t  \"projects\"\r\n\t  \"tasks\";\r\n} \r\n\r\n#gitLogoDivContainer {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tgrid-area: logo;\r\n}\r\n\r\n.gitLogo {\r\n\twidth: 100px;\r\n\theight: 100px;\r\n}\r\n\r\n#navContainer {\r\n\t/* display: flex;\r\n\tflex-direction: column; */\r\n\tposition: relative;\r\n\tmargin-bottom: 10vw;\r\n\tgrid-area: projects;\r\n}\r\n\r\n#menuToggle {\r\n\tdisplay: block;\r\n\tposition: relative;\r\n\tmax-width: 50vw;\r\n\ttop: 50px;\r\n\tleft: 50px;\r\n\tz-index: 1;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n}\r\n\r\n#menuToggle li {\r\n\ttext-decoration: none;\r\n\t-webkit-transition: color 0.3s ease;\r\n\t-o-transition: color 0.3s ease;\r\n\ttransition: color 0.3s ease;\r\n\tpadding: 10px 0px 10px 50px;\r\n\tfont-size: 22px;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n#menuToggle li:hover {\r\n\tfont-weight: 700;\r\n}\r\n\r\n\r\n/* The hamburger button hidden inside an #inputMenu element */\r\n#menuToggle #inputMenu {\r\n\tdisplay: block;\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tposition: absolute;\r\n\ttop: -7px;\r\n\tleft: -5px;\r\n\tpadding: 0;\r\n\tcursor: pointer;\r\n\t\r\n\topacity: 0;\r\n\t/* hide this */\r\n\tz-index: 2;\r\n\t/* and place it over the hamburger */\r\n\t-webkit-touch-callout: none;\r\n}\r\n\r\n#menuToggle #labelMenu {\r\n\tposition: relative;\r\n\tdisplay: block;\r\n\twidth: 30px;\r\n\theight: 30px;\r\n}\r\n\r\n#menuToggle #labelMenu span {\r\n\tdisplay: none;\r\n}\r\n\r\n/*\r\n * Hamburger\r\n */\r\n#menuToggle #labelMenu div {\r\n\tdisplay: block;\r\n\twidth: 30px;\r\n\theight: 2px;\r\n\tmargin-bottom: 6px;\r\n\tposition: relative;\r\n\tbackground: var(--clr-elfGreen);\r\n\tborder-radius: 5px;\r\n\tz-index: 1;\r\n\t-webkit-transform-origin: 4px 0px;\r\n\t-ms-transform-origin: 4px 0px;\r\n\ttransform-origin: 4px 0px;\r\n\t-webkit-transition: all 0.3s ease;\r\n\t-o-transition: all 0.3s ease;\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n#menuToggle #labelMenu div:first-child {\r\n\t-webkit-transform-origin: 0% 100%;\r\n\t-ms-transform-origin: 0% 100%;\r\n\ttransform-origin: 0% 100%;\r\n}\r\n\r\n#menuToggle #labelMenu div:nth-child(2) {\r\n\t-webkit-transform-origin: 0% 0%;\r\n\t-ms-transform-origin: 0% 0%;\r\n\ttransform-origin: 0% 0%;\r\n}\r\n\r\n/* \r\n * Change the color of the hamburger when toggled\r\n */\r\n#menuToggle #inputMenu:checked+#labelMenu div {\r\n\tbackground: var(--clr-mineShaft);\r\n\t\r\n}\r\n\r\n/*\r\n * Use absolute positioning to place the menu off-screen\r\n */\r\n#menu {\r\n\tposition: absolute;\r\n\twidth: 100vw;\r\n\tmax-width: 900px;\r\n\tmargin: -80px 0 0 -50px;\r\n\tpadding: 50px 0px 50px 0px;\r\n\tpadding-top: 125px;\r\n\tbackground: var(--clr-light);\r\n\tborder-radius: 20px;\r\n\tlist-style-type: none;\r\n\t/* Hide the menu off-screen to the left */\r\n\tleft: 0;\r\n\t-webkit-transition: left 0.3s ease;\r\n\t-o-transition: left 0.3s ease;\r\n\ttransition: left 0.3s ease;\r\n}\r\n\r\n\r\n\r\n/*\r\n * Slide the menu in from left when the #inputMenu is checked\r\n */\r\n#menuToggle #inputMenu:checked~ul {\r\n\r\n\ttransition: left 0.3s ease;\r\n\tleft: -200%;\r\n}\r\n\r\n.list-img {\r\n\twidth: 1.7em;\r\n\tpadding-right: 10px;\r\n}\r\n\r\n.active-list {\r\n\tbackground-color: var(--clr-elfGreen);\r\n\tborder-radius: 35px;\r\n\tmargin: 0px 25px 0px 25px;\r\n\tcolor: var(--clr-light);\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n#myForm {\r\n\tdisplay: none;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tmargin-top: 1.8em;\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n#myForm form, #myTasks form {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tfont-size: 1.3em;\r\n\tbackground-color: var(--clr-white);\r\n\twidth: 15em;\r\n\tpadding: 2em .6em 1.5em .6em;\r\n\tborder-radius: 20px;\r\n}\r\n\r\n#addProjectForm {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n}\r\n\r\n#addProjectButton {\r\n\tmargin-top: 30px;\r\n\tbackground-color: var(--clr-elfGreen);\r\n\tcolor: var(--clr-light);\r\n\tborder: none;\r\n\tborder-radius: 42px;\r\n\tfont-size: 1.4em;\r\n\tpadding: 2% 10% 2% 8%;\r\n\tfont-family: 'Source Sans Pro', sans-serif;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n#addProjectButton:hover {\r\n\tcolor: var(--clr-light);\r\n\topacity: 0.8;\r\n}\r\n\r\n#addProjectButton span {\r\n\tfont-size: 1.6em;\r\n\tfont-weight: 300;\r\n\tpadding: 0px 10px 0px 3px;\r\n\t\r\n}\r\n\r\n#submitBtn, #taskSubmitButton {\r\n \tfont-family: 'Source Sans Pro', sans-serif;\r\n \tbackground-color: var(--clr-elfGreen);\r\n \tcolor: var(--clr-light);\r\n \tborder: none;\r\n \tborder-radius: 32px;\r\n \tfont-size: 1em;\r\n \tpadding: 2% 30% 2% 30%;\r\n\t transition: all 0.3s ease;\r\n}\r\n\r\n#submitBtn:hover, #taskSubmitBtn:hover {\r\n\topacity: 0.8;\r\n}\r\n\r\n#projectLabel, #taskLabel {\r\n\tfont-size: 1.3em;\r\n\tfont-weight: 700;\r\n}\r\n\r\n#projectInput, #taskInput {\r\n\tfont-size: 0.8em;\r\n\tfont-weight: 400;\r\n\tfont-family: 'Source Sans Pro', sans-serif;\r\n\tborder-radius: 15px;\r\n\tpadding: 0px 15px 0px 15px;\r\n}\r\n\r\n.deleteProjectBtn {\r\n\tborder: 1px solid var(--clr-mineShaft);\r\n\tbackground: var(--clr-warning);\r\n\tborder-radius: 20px;\r\n\tpadding: 3px 7px 2px 7px;\r\n\tfont-size: 0.7em;\r\n\tdisplay: flex;\r\n\tmargin: 0.5% 2% 0 2%;\r\n\tcursor: pointer;\r\n\tfont-weight: 300;\r\n}\r\n\r\n#taskList {\r\n\tgrid-area: tasks;\r\n\t/* margin-bottom: 130vh; */\r\n\t/* margin-top: 50vh; */\r\n}\r\n\r\n.todo-list {\r\n\ttransition: all 0.3s ease;\r\n\tmargin-top: 28em;\r\n\tbackground: var(--clr-gallery);\r\n\tborder-radius: 20px;\r\n\twidth: 100vw;\r\n\tmax-width: 900px;\r\n\tpadding-top: 3%;\r\n\tpadding-bottom: 1%;\r\n}\r\n\r\n.addmarginAfterClick {\r\n\tmargin-top: 5vh;\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n.addmarginAfterFormOpen {\r\n\tmargin-top: 40em;\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n.removemarginAfterFormClose {\r\n\tmargin-top: 28em;\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n.todo-header {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tbackground-color: var(--clr-light);\r\n\tborder-radius: 20px;\r\n\tmargin: 0% 5% 5% 5%;\r\n}\r\n\r\n.task-count {\r\n\tcolor: var(--clr-primary);\r\n}\r\n\r\n.todo-body {\r\n\tbackground-color: var(--clr-light);\r\n\tborder-radius: 20px;\r\n\tpadding: 5% 1% 0% 1%;\r\n\tmargin: 5%;\r\n}\r\n\r\n#myTasks {\r\n\tdisplay: none;\r\n}\r\n\r\n#addTaskButton {\r\n\tfont-family: 'Source Sans Pro', sans-serif;\r\n \tbackground-color: var(--clr-elfGreen);\r\n \tcolor: var(--clr-light);\r\n \tborder: none;\r\n \tborder-radius: 32px;\r\n \tfont-size: 1.1em;\r\n \tpadding: 2% 10% 2% 4%;\r\n\t display: flex;\r\n\t align-items: center;\r\n\t margin-bottom: 20px;\r\n\t transition: all 0.3s ease;\r\n}\r\n\r\n#addTaskButton:hover {\r\n\topacity: 0.8;\r\n}\r\n\r\n#addTaskButton span {\r\n\tfont-size: 1.5em;\r\n\tfont-weight: 400;\r\n\tpadding: 0px 10px 0px 13px;\r\n}\r\n\r\n#createTaskContainer {\r\n\tborder-radius: 20px;\r\n\tpadding: 5%;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n}\r\n\r\n\r\n#tasksContainer {\r\n\tborder-radius: 20px;\r\n\tmargin-bottom: 15px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n#tasksContainer input[type=\"checkbox\"] {\r\n\tposition: relative;\r\n\r\n\tborder: 2px solid var(--clr-mineShaft);\r\n\tborder-radius: 14px;\r\n\tappearance: none;\r\n\toutline: 0;\r\n\tcursor: pointer;\r\n\ttransition: background 175ms cubic-bezier(0.1, 0.1, 0.25, 1);\r\n}\r\n\r\n#tasksContainer input[type=\"checkbox\"]::before {\r\n\tposition: absolute;\r\n\tcontent: '';\r\n\tdisplay: block;\r\n    top: -6px;\r\n    left: 9px;\r\n    width: 8px;\r\n    height: 21px;\r\n\tborder-style: solid;\r\n\tborder-color: var(--clr-mineShaft);\r\n\tborder-width: 0 3px 3px 0;\r\n\ttransform: rotate(45deg);\r\n\topacity: 0;\r\n}\r\n\r\n#tasksContainer input[type=\"checkbox\"]:checked {\r\n\tcolor: var(--clr-mineShaft);\r\n\tborder-color: var(--clr-mineShaft);\r\n\tbackground: var(--clr-primary);\r\n}\r\n\r\n#tasksContainer input[type=\"checkbox\"]:checked::before {\r\n\topacity: 1;\r\n}\r\n\r\n#tasksContainer input[type=\"checkbox\"]:checked ~ label::before {\r\n\tclip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\r\n}\r\n\r\n#tasksContainer label {\r\n\tposition: relative;\r\n\tcursor: pointer;\r\n\tfont-size: 1.3em;\r\n\tfont-weight: 400;\r\n\tpadding: 0 0.45em 0;\r\n\tuser-select: none;\r\n\r\n}\r\n\r\n#tasksContainer label::before {\r\n\tposition: absolute;\r\n\tcontent: attr(data-content);\r\n\tcolor: var(--clr-completedTask);\r\n\tclip-path: polygon(0 0, 0 0, 0% 100%, 0 100%);\r\n\ttext-decoration: line-through;\r\n\ttext-decoration-thickness: 3px;\r\n\ttext-decoration-color: var(--clr-dark);\r\n\ttop: 0px;\r\n\ttransition: clip-path 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);\r\n}\r\n\r\n.task label {\r\n\tbottom: 0px;\r\n}\r\n\r\n.task {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tbackground-color: var(--clr-gallery);\r\n\tmargin: 2%;\r\n\tpadding: 2%;\r\n\tborder-radius: 10px;\r\n}\r\n\r\n#tasksContainer .task input {\r\n\theight: 25px;\r\n\twidth: 25px;\r\n\tmin-width: 25px;\r\n}\r\n\r\n#tasksContainer input:hover {\r\n\tborder: 2px solid var(--clr-primary);\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n.delete-stuff {\r\n\tdisplay: flex;\r\n\tflex-direction: column;}\r\n\r\n.delete-stuff button {\r\n\tfont-family: 'Source Sans Pro', sans-serif;\r\n\tborder: none;\r\n\tmargin: 0.5em;\r\n\tborder-radius: 12px;\r\n\tfont-size: 1em;\r\n\tpadding: 0.11em 1em 0.11em 1em;\r\n\ttransition: all 0.3s ease;\r\n}\r\n.delete-stuff button:hover {\r\n\topacity: 0.8;\r\n}\r\n\r\n#clearBtn {\r\n\tbackground-color: var(--clr-navHighlight);\r\n\tcolor: var(--clr-mineShaft);\r\n}\r\n\r\n#deleteBtn {\r\n\tbackground-color: var(--clr-delete);\r\n\tcolor: var(--clr-mineShaft);\r\n}\r\n\r\n@media (min-width: 375px) {\r\n\t#menu, #taskList {\r\n\t\twidth: 92vw;\r\n\t}\r\n\t#container {\r\n\t\tmargin-right: 0%;\r\n\t\tmargin-left: 0%;\r\n\t\tpadding-left: 1%;\r\n\t}\r\n}\r\n\r\n@media (min-width: 1100px) {\r\n\t#container {\r\n\t\tmargin-right: 0%;\r\n\t\tmargin-left: 0%;\r\n\t}\r\n} \r\n\r\n", "",{"version":3,"sources":["webpack://./src/style/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n\t--clr-primary: rgb(41, 145, 255);\r\n\t--clr-lightGray: rgb(232, 232, 232);\r\n\t--clr-light: #f4f4f4;\r\n\t--clr-dark: rgb(58, 58, 58);\r\n\t--clr-white: rgb(252, 252, 252);\r\n\t--clr-warning: #e97560;\r\n\t--clr-navHighlight: #4f7794d0;\r\n\t--clr-mineShaft: #232323;\r\n\t--clr-gallery: #ededed;\r\n\t--clr-elfGreen: #058179;\r\n\t--clr-nebula: #cbdbda;\r\n\t--clr-completedTask: #a5b1c0;\r\n\t--clr-delete: #ff494962;\r\n}\r\n\r\nhtml {\r\n\tfont-family: 'Source Sans Pro', sans-serif;\r\n\r\n}\r\n\r\nbody {\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tbackground: var(--clr-nebula);\r\n\tcolor: var(--clr-mineShaft);\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n}\r\n\r\nh1 {\r\n\tcolor: var(--clr-dark);\r\n\tfont-size: 3rem;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\tmargin: -0.5em 0.5em 0.5em 0.5em;\r\n}\r\n\r\nh2 {\r\n\tmargin-bottom: 0px;\r\n}\r\n\r\n#container {\r\n\tmargin-right: -18%;\r\n\tpadding-left: 1%;\r\n\tdisplay: grid;\r\n\tjustify-content: space-around;\r\n\tgrid-template-columns: 1fr;\r\n\tgrid-template-rows: auto;\r\n\tgrid-template-areas: \r\n\t  \"logo\"\r\n\t  \"projects\"\r\n\t  \"tasks\";\r\n} \r\n\r\n#gitLogoDivContainer {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tgrid-area: logo;\r\n}\r\n\r\n.gitLogo {\r\n\twidth: 100px;\r\n\theight: 100px;\r\n}\r\n\r\n#navContainer {\r\n\t/* display: flex;\r\n\tflex-direction: column; */\r\n\tposition: relative;\r\n\tmargin-bottom: 10vw;\r\n\tgrid-area: projects;\r\n}\r\n\r\n#menuToggle {\r\n\tdisplay: block;\r\n\tposition: relative;\r\n\tmax-width: 50vw;\r\n\ttop: 50px;\r\n\tleft: 50px;\r\n\tz-index: 1;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n}\r\n\r\n#menuToggle li {\r\n\ttext-decoration: none;\r\n\t-webkit-transition: color 0.3s ease;\r\n\t-o-transition: color 0.3s ease;\r\n\ttransition: color 0.3s ease;\r\n\tpadding: 10px 0px 10px 50px;\r\n\tfont-size: 22px;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n#menuToggle li:hover {\r\n\tfont-weight: 700;\r\n}\r\n\r\n\r\n/* The hamburger button hidden inside an #inputMenu element */\r\n#menuToggle #inputMenu {\r\n\tdisplay: block;\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tposition: absolute;\r\n\ttop: -7px;\r\n\tleft: -5px;\r\n\tpadding: 0;\r\n\tcursor: pointer;\r\n\t\r\n\topacity: 0;\r\n\t/* hide this */\r\n\tz-index: 2;\r\n\t/* and place it over the hamburger */\r\n\t-webkit-touch-callout: none;\r\n}\r\n\r\n#menuToggle #labelMenu {\r\n\tposition: relative;\r\n\tdisplay: block;\r\n\twidth: 30px;\r\n\theight: 30px;\r\n}\r\n\r\n#menuToggle #labelMenu span {\r\n\tdisplay: none;\r\n}\r\n\r\n/*\r\n * Hamburger\r\n */\r\n#menuToggle #labelMenu div {\r\n\tdisplay: block;\r\n\twidth: 30px;\r\n\theight: 2px;\r\n\tmargin-bottom: 6px;\r\n\tposition: relative;\r\n\tbackground: var(--clr-elfGreen);\r\n\tborder-radius: 5px;\r\n\tz-index: 1;\r\n\t-webkit-transform-origin: 4px 0px;\r\n\t-ms-transform-origin: 4px 0px;\r\n\ttransform-origin: 4px 0px;\r\n\t-webkit-transition: all 0.3s ease;\r\n\t-o-transition: all 0.3s ease;\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n#menuToggle #labelMenu div:first-child {\r\n\t-webkit-transform-origin: 0% 100%;\r\n\t-ms-transform-origin: 0% 100%;\r\n\ttransform-origin: 0% 100%;\r\n}\r\n\r\n#menuToggle #labelMenu div:nth-child(2) {\r\n\t-webkit-transform-origin: 0% 0%;\r\n\t-ms-transform-origin: 0% 0%;\r\n\ttransform-origin: 0% 0%;\r\n}\r\n\r\n/* \r\n * Change the color of the hamburger when toggled\r\n */\r\n#menuToggle #inputMenu:checked+#labelMenu div {\r\n\tbackground: var(--clr-mineShaft);\r\n\t\r\n}\r\n\r\n/*\r\n * Use absolute positioning to place the menu off-screen\r\n */\r\n#menu {\r\n\tposition: absolute;\r\n\twidth: 100vw;\r\n\tmax-width: 900px;\r\n\tmargin: -80px 0 0 -50px;\r\n\tpadding: 50px 0px 50px 0px;\r\n\tpadding-top: 125px;\r\n\tbackground: var(--clr-light);\r\n\tborder-radius: 20px;\r\n\tlist-style-type: none;\r\n\t/* Hide the menu off-screen to the left */\r\n\tleft: 0;\r\n\t-webkit-transition: left 0.3s ease;\r\n\t-o-transition: left 0.3s ease;\r\n\ttransition: left 0.3s ease;\r\n}\r\n\r\n\r\n\r\n/*\r\n * Slide the menu in from left when the #inputMenu is checked\r\n */\r\n#menuToggle #inputMenu:checked~ul {\r\n\r\n\ttransition: left 0.3s ease;\r\n\tleft: -200%;\r\n}\r\n\r\n.list-img {\r\n\twidth: 1.7em;\r\n\tpadding-right: 10px;\r\n}\r\n\r\n.active-list {\r\n\tbackground-color: var(--clr-elfGreen);\r\n\tborder-radius: 35px;\r\n\tmargin: 0px 25px 0px 25px;\r\n\tcolor: var(--clr-light);\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n#myForm {\r\n\tdisplay: none;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tmargin-top: 1.8em;\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n#myForm form, #myTasks form {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tfont-size: 1.3em;\r\n\tbackground-color: var(--clr-white);\r\n\twidth: 15em;\r\n\tpadding: 2em .6em 1.5em .6em;\r\n\tborder-radius: 20px;\r\n}\r\n\r\n#addProjectForm {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n}\r\n\r\n#addProjectButton {\r\n\tmargin-top: 30px;\r\n\tbackground-color: var(--clr-elfGreen);\r\n\tcolor: var(--clr-light);\r\n\tborder: none;\r\n\tborder-radius: 42px;\r\n\tfont-size: 1.4em;\r\n\tpadding: 2% 10% 2% 8%;\r\n\tfont-family: 'Source Sans Pro', sans-serif;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n#addProjectButton:hover {\r\n\tcolor: var(--clr-light);\r\n\topacity: 0.8;\r\n}\r\n\r\n#addProjectButton span {\r\n\tfont-size: 1.6em;\r\n\tfont-weight: 300;\r\n\tpadding: 0px 10px 0px 3px;\r\n\t\r\n}\r\n\r\n#submitBtn, #taskSubmitButton {\r\n \tfont-family: 'Source Sans Pro', sans-serif;\r\n \tbackground-color: var(--clr-elfGreen);\r\n \tcolor: var(--clr-light);\r\n \tborder: none;\r\n \tborder-radius: 32px;\r\n \tfont-size: 1em;\r\n \tpadding: 2% 30% 2% 30%;\r\n\t transition: all 0.3s ease;\r\n}\r\n\r\n#submitBtn:hover, #taskSubmitBtn:hover {\r\n\topacity: 0.8;\r\n}\r\n\r\n#projectLabel, #taskLabel {\r\n\tfont-size: 1.3em;\r\n\tfont-weight: 700;\r\n}\r\n\r\n#projectInput, #taskInput {\r\n\tfont-size: 0.8em;\r\n\tfont-weight: 400;\r\n\tfont-family: 'Source Sans Pro', sans-serif;\r\n\tborder-radius: 15px;\r\n\tpadding: 0px 15px 0px 15px;\r\n}\r\n\r\n.deleteProjectBtn {\r\n\tborder: 1px solid var(--clr-mineShaft);\r\n\tbackground: var(--clr-warning);\r\n\tborder-radius: 20px;\r\n\tpadding: 3px 7px 2px 7px;\r\n\tfont-size: 0.7em;\r\n\tdisplay: flex;\r\n\tmargin: 0.5% 2% 0 2%;\r\n\tcursor: pointer;\r\n\tfont-weight: 300;\r\n}\r\n\r\n#taskList {\r\n\tgrid-area: tasks;\r\n\t/* margin-bottom: 130vh; */\r\n\t/* margin-top: 50vh; */\r\n}\r\n\r\n.todo-list {\r\n\ttransition: all 0.3s ease;\r\n\tmargin-top: 28em;\r\n\tbackground: var(--clr-gallery);\r\n\tborder-radius: 20px;\r\n\twidth: 100vw;\r\n\tmax-width: 900px;\r\n\tpadding-top: 3%;\r\n\tpadding-bottom: 1%;\r\n}\r\n\r\n.addmarginAfterClick {\r\n\tmargin-top: 5vh;\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n.addmarginAfterFormOpen {\r\n\tmargin-top: 40em;\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n.removemarginAfterFormClose {\r\n\tmargin-top: 28em;\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n.todo-header {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tbackground-color: var(--clr-light);\r\n\tborder-radius: 20px;\r\n\tmargin: 0% 5% 5% 5%;\r\n}\r\n\r\n.task-count {\r\n\tcolor: var(--clr-primary);\r\n}\r\n\r\n.todo-body {\r\n\tbackground-color: var(--clr-light);\r\n\tborder-radius: 20px;\r\n\tpadding: 5% 1% 0% 1%;\r\n\tmargin: 5%;\r\n}\r\n\r\n#myTasks {\r\n\tdisplay: none;\r\n}\r\n\r\n#addTaskButton {\r\n\tfont-family: 'Source Sans Pro', sans-serif;\r\n \tbackground-color: var(--clr-elfGreen);\r\n \tcolor: var(--clr-light);\r\n \tborder: none;\r\n \tborder-radius: 32px;\r\n \tfont-size: 1.1em;\r\n \tpadding: 2% 10% 2% 4%;\r\n\t display: flex;\r\n\t align-items: center;\r\n\t margin-bottom: 20px;\r\n\t transition: all 0.3s ease;\r\n}\r\n\r\n#addTaskButton:hover {\r\n\topacity: 0.8;\r\n}\r\n\r\n#addTaskButton span {\r\n\tfont-size: 1.5em;\r\n\tfont-weight: 400;\r\n\tpadding: 0px 10px 0px 13px;\r\n}\r\n\r\n#createTaskContainer {\r\n\tborder-radius: 20px;\r\n\tpadding: 5%;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n}\r\n\r\n\r\n#tasksContainer {\r\n\tborder-radius: 20px;\r\n\tmargin-bottom: 15px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n#tasksContainer input[type=\"checkbox\"] {\r\n\tposition: relative;\r\n\r\n\tborder: 2px solid var(--clr-mineShaft);\r\n\tborder-radius: 14px;\r\n\tappearance: none;\r\n\toutline: 0;\r\n\tcursor: pointer;\r\n\ttransition: background 175ms cubic-bezier(0.1, 0.1, 0.25, 1);\r\n}\r\n\r\n#tasksContainer input[type=\"checkbox\"]::before {\r\n\tposition: absolute;\r\n\tcontent: '';\r\n\tdisplay: block;\r\n    top: -6px;\r\n    left: 9px;\r\n    width: 8px;\r\n    height: 21px;\r\n\tborder-style: solid;\r\n\tborder-color: var(--clr-mineShaft);\r\n\tborder-width: 0 3px 3px 0;\r\n\ttransform: rotate(45deg);\r\n\topacity: 0;\r\n}\r\n\r\n#tasksContainer input[type=\"checkbox\"]:checked {\r\n\tcolor: var(--clr-mineShaft);\r\n\tborder-color: var(--clr-mineShaft);\r\n\tbackground: var(--clr-primary);\r\n}\r\n\r\n#tasksContainer input[type=\"checkbox\"]:checked::before {\r\n\topacity: 1;\r\n}\r\n\r\n#tasksContainer input[type=\"checkbox\"]:checked ~ label::before {\r\n\tclip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\r\n}\r\n\r\n#tasksContainer label {\r\n\tposition: relative;\r\n\tcursor: pointer;\r\n\tfont-size: 1.3em;\r\n\tfont-weight: 400;\r\n\tpadding: 0 0.45em 0;\r\n\tuser-select: none;\r\n\r\n}\r\n\r\n#tasksContainer label::before {\r\n\tposition: absolute;\r\n\tcontent: attr(data-content);\r\n\tcolor: var(--clr-completedTask);\r\n\tclip-path: polygon(0 0, 0 0, 0% 100%, 0 100%);\r\n\ttext-decoration: line-through;\r\n\ttext-decoration-thickness: 3px;\r\n\ttext-decoration-color: var(--clr-dark);\r\n\ttop: 0px;\r\n\ttransition: clip-path 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);\r\n}\r\n\r\n.task label {\r\n\tbottom: 0px;\r\n}\r\n\r\n.task {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tbackground-color: var(--clr-gallery);\r\n\tmargin: 2%;\r\n\tpadding: 2%;\r\n\tborder-radius: 10px;\r\n}\r\n\r\n#tasksContainer .task input {\r\n\theight: 25px;\r\n\twidth: 25px;\r\n\tmin-width: 25px;\r\n}\r\n\r\n#tasksContainer input:hover {\r\n\tborder: 2px solid var(--clr-primary);\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n.delete-stuff {\r\n\tdisplay: flex;\r\n\tflex-direction: column;}\r\n\r\n.delete-stuff button {\r\n\tfont-family: 'Source Sans Pro', sans-serif;\r\n\tborder: none;\r\n\tmargin: 0.5em;\r\n\tborder-radius: 12px;\r\n\tfont-size: 1em;\r\n\tpadding: 0.11em 1em 0.11em 1em;\r\n\ttransition: all 0.3s ease;\r\n}\r\n.delete-stuff button:hover {\r\n\topacity: 0.8;\r\n}\r\n\r\n#clearBtn {\r\n\tbackground-color: var(--clr-navHighlight);\r\n\tcolor: var(--clr-mineShaft);\r\n}\r\n\r\n#deleteBtn {\r\n\tbackground-color: var(--clr-delete);\r\n\tcolor: var(--clr-mineShaft);\r\n}\r\n\r\n@media (min-width: 375px) {\r\n\t#menu, #taskList {\r\n\t\twidth: 92vw;\r\n\t}\r\n\t#container {\r\n\t\tmargin-right: 0%;\r\n\t\tmargin-left: 0%;\r\n\t\tpadding-left: 1%;\r\n\t}\r\n}\r\n\r\n@media (min-width: 1100px) {\r\n\t#container {\r\n\t\tmargin-right: 0%;\r\n\t\tmargin-left: 0%;\r\n\t}\r\n} \r\n\r\n"],"sourceRoot":""}]);
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

/***/ }),

/***/ "./src/DOMInterface.js":
/*!*****************************!*\
  !*** ./src/DOMInterface.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

function DOMInterface() {

	//catching DOM
	let gitLogoDiv = document.getElementById('gitLogoDiv');
	let addProjectButton = document.getElementById('addProjectButton');
	
	let inputMenu = document.getElementById('inputMenu');
	let taskList = document.getElementById('taskList');
	let addTaskButton = document.getElementById('addTaskButton');
	let taskSubmitButton = document.getElementById('taskSubmitButton');

	//grab projectsContainer
	//grab projects 
	// let projects = document.querySelectorAll('[data-project]');
	// let deleteProjectBtn = document.querySelectorAll('.deleteProjectBtn');



	
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMInterface);

/***/ }),

/***/ "./src/createProjects.js":
/*!*******************************!*\
  !*** ./src/createProjects.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOMInterface_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMInterface.js */ "./src/DOMInterface.js");

document.addEventListener('DOMContentLoaded', _DOMInterface_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



function createProjects() {

	let newProjectForm = document.querySelector('[data-new-project-form]');
	let newProjectInput = document.querySelector('[data-new-project-input]');
	let projectsContainer = document.querySelector('[data-projects]');
	// let dataProject = document.querySelector('[data-project]');
	// let addProjectButton = document.getElementById('addProjectButton');
	

	// let projects = [{
	// 	id: 1,
	// 	names: 'Project 1'
	// }, {
	// 	id: 2,
	// 	names: 'Project 2'
	// }];

	newProjectForm.addEventListener('submit', addProject);



	//create add projects fxn

	function addProject(e) {
		e.preventDefault();
		const projectName = newProjectInput.value;
		if (projectName === null || projectName === '') return;
		const project = createProject(projectName);
		newProjectInput.value = null;
		// projects.push(project);

	}

	function createProject(names) {
		let project = document.createElement('li');
		project.classList.add('list-name');
		project.setAttribute('data-project', names);
		
		
		let projectImg = document.createElement('img');
		projectImg.classList.add('list-img');
		projectImg.src = '../src/images/svg/list.svg';
		projectImg.alt = 'list';

		let deleteProjectButton = document.createElement('button');
		deleteProjectButton.classList.add('deleteProjectBtn');
		deleteProjectButton.innerText = 'X';

		project.append(projectImg, names, deleteProjectButton);

		projectsContainer.append(project);
		addMarginToTasks();
		
		console.log("works", project);	

	}

	//add margin to tasks when a new project is added
	function addMarginToTasks() {
		let getHeight = getComputedStyle(taskList).marginTop;
		let newHeight = parseInt(getHeight) + 60;
		let heightInStr = newHeight.toString();
		taskList.style.marginTop = heightInStr + 'px';

		console.log(getHeight, newHeight, heightInStr);
	}

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProjects);

/***/ }),

/***/ "./src/deleteProject.js":
/*!******************************!*\
  !*** ./src/deleteProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOMInterface_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMInterface.js */ "./src/DOMInterface.js");

document.addEventListener('DOMContentLoaded', _DOMInterface_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


// create delete projects fxn

function deleteProject() {
	
	let deleteProjectBtn = document.querySelectorAll('.deleteProjectBtn');
	
	//on pressing button delete project
	deleteProjectBtn.forEach(element => {
		element.addEventListener('click', deleteProject);
	});

	function deleteProject(project) {
		project.composedPath()[1].remove();
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteProject);

/***/ }),

/***/ "./src/ui-ux.js":
/*!**********************!*\
  !*** ./src/ui-ux.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOMInterface_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMInterface.js */ "./src/DOMInterface.js");
/* harmony import */ var _images_git_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/git-logo.png */ "./src/images/git-logo.png");



document.addEventListener('DOMContentLoaded', _DOMInterface_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

function ui_ux() {
	
	let projectSubmitButton = document.getElementById('submitBtn');
	//git logo img
	let gitLogo = document.createElement('img');
	gitLogo.src = _images_git_logo_png__WEBPACK_IMPORTED_MODULE_1__;
	gitLogo.classList.add('gitLogo');
	gitLogoDiv.appendChild(gitLogo);

	// DOM click events
	inputMenu.addEventListener('click', addMargin);
	addTaskButton.addEventListener('click', addTask);
	addProjectButton.addEventListener('click', openForm);
	projectSubmitButton.addEventListener('click', closeForm);
	taskSubmitButton.addEventListener('click', closeTaskForm);



	//Functions for buttons and adding margin
	function openForm() {
		document.getElementById("myForm").style.display = "block";
		taskList.classList.add('addmarginAfterFormOpen');
		taskList.classList.remove('removemarginAfterFormClose');
		addProjectButton.style.display = "none";
	}

	function closeForm() {
		document.getElementById("myForm").style.display = "none";
		taskList.classList.add('removemarginAfterFormClose');
		taskList.classList.remove('addmarginAfterFormOpen');
		addProjectButton.style.display = "block";
	}

	function addMargin() {
		taskList.classList.toggle('addmarginAfterClick');
	}

	function addTask() {
		document.getElementById("myTasks").style.display = "block";
		addTaskButton.style.display = "none";
	}

	function closeTaskForm() {
		document.getElementById("myTasks").style.display = "none";
	}

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ui_ux);

/***/ }),

/***/ "./src/images/git-logo.png":
/*!*********************************!*\
  !*** ./src/images/git-logo.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "788786f4596c476b4cf4.png";

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/styles.css */ "./src/style/styles.css");
/* harmony import */ var _DOMInterface_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMInterface.js */ "./src/DOMInterface.js");
/* harmony import */ var _ui_ux_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui-ux.js */ "./src/ui-ux.js");
/* harmony import */ var _deleteProject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deleteProject.js */ "./src/deleteProject.js");
/* harmony import */ var _createProjects_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createProjects.js */ "./src/createProjects.js");






document.addEventListener('DOMContentLoaded', _DOMInterface_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
document.addEventListener('DOMContentLoaded', _ui_ux_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
document.addEventListener('DOMContentLoaded', _deleteProject_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
document.addEventListener('DOMContentLoaded', _createProjects_js__WEBPACK_IMPORTED_MODULE_4__["default"]);




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxLQUFLLEtBQUssYUFBYSxPQUFPLE1BQU0sS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxTQUFTLE1BQU0sS0FBSyxNQUFNLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxjQUFjLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFP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O1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmNEI7QUFDaUI7QUFDZDtBQUNnQjtBQUNFO0FBQ2pEO0FBQ0EsOENBQThDLHdEQUFZO0FBQzFELDhDQUE4QyxpREFBSztBQUNuRCw4Q0FBOEMseURBQWE7QUFDM0QsOENBQThDLDBEQUFjO0FBQzVEO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtbWFuYWdlbWVudC1hcHAvLi9zcmMvc3R5bGUvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZW1lbnQtYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZW1lbnQtYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VtZW50LWFwcC8uL3NyYy9zdHlsZS9zdHlsZXMuY3NzP2FmN2MiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VtZW50LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZW1lbnQtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZW1lbnQtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlbWVudC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VtZW50LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlbWVudC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZW1lbnQtYXBwLy4vc3JjL0RPTUludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZW1lbnQtYXBwLy4vc3JjL2NyZWF0ZVByb2plY3RzLmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlbWVudC1hcHAvLi9zcmMvZGVsZXRlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZW1lbnQtYXBwLy4vc3JjL3VpLXV4LmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlbWVudC1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VtZW50LWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZW1lbnQtYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZW1lbnQtYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VtZW50LWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlbWVudC1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZW1lbnQtYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlbWVudC1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuXFx0LS1jbHItcHJpbWFyeTogcmdiKDQxLCAxNDUsIDI1NSk7XFxyXFxuXFx0LS1jbHItbGlnaHRHcmF5OiByZ2IoMjMyLCAyMzIsIDIzMik7XFxyXFxuXFx0LS1jbHItbGlnaHQ6ICNmNGY0ZjQ7XFxyXFxuXFx0LS1jbHItZGFyazogcmdiKDU4LCA1OCwgNTgpO1xcclxcblxcdC0tY2xyLXdoaXRlOiByZ2IoMjUyLCAyNTIsIDI1Mik7XFxyXFxuXFx0LS1jbHItd2FybmluZzogI2U5NzU2MDtcXHJcXG5cXHQtLWNsci1uYXZIaWdobGlnaHQ6ICM0Zjc3OTRkMDtcXHJcXG5cXHQtLWNsci1taW5lU2hhZnQ6ICMyMzIzMjM7XFxyXFxuXFx0LS1jbHItZ2FsbGVyeTogI2VkZWRlZDtcXHJcXG5cXHQtLWNsci1lbGZHcmVlbjogIzA1ODE3OTtcXHJcXG5cXHQtLWNsci1uZWJ1bGE6ICNjYmRiZGE7XFxyXFxuXFx0LS1jbHItY29tcGxldGVkVGFzazogI2E1YjFjMDtcXHJcXG5cXHQtLWNsci1kZWxldGU6ICNmZjQ5NDk2MjtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1jbHItbmVidWxhKTtcXHJcXG5cXHRjb2xvcjogdmFyKC0tY2xyLW1pbmVTaGFmdCk7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcblxcdGNvbG9yOiB2YXIoLS1jbHItZGFyayk7XFxyXFxuXFx0Zm9udC1zaXplOiAzcmVtO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0bWFyZ2luOiAtMC41ZW0gMC41ZW0gMC41ZW0gMC41ZW07XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAwcHg7XFxyXFxufVxcclxcblxcclxcbiNjb250YWluZXIge1xcclxcblxcdG1hcmdpbi1yaWdodDogLTE4JTtcXHJcXG5cXHRwYWRkaW5nLWxlZnQ6IDElO1xcclxcblxcdGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcclxcblxcdGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcclxcblxcdCAgXFxcImxvZ29cXFwiXFxyXFxuXFx0ICBcXFwicHJvamVjdHNcXFwiXFxyXFxuXFx0ICBcXFwidGFza3NcXFwiO1xcclxcbn0gXFxyXFxuXFxyXFxuI2dpdExvZ29EaXZDb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGdyaWQtYXJlYTogbG9nbztcXHJcXG59XFxyXFxuXFxyXFxuLmdpdExvZ28ge1xcclxcblxcdHdpZHRoOiAxMDBweDtcXHJcXG5cXHRoZWlnaHQ6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbmF2Q29udGFpbmVyIHtcXHJcXG5cXHQvKiBkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdG1hcmdpbi1ib3R0b206IDEwdnc7XFxyXFxuXFx0Z3JpZC1hcmVhOiBwcm9qZWN0cztcXHJcXG59XFxyXFxuXFxyXFxuI21lbnVUb2dnbGUge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRtYXgtd2lkdGg6IDUwdnc7XFxyXFxuXFx0dG9wOiA1MHB4O1xcclxcblxcdGxlZnQ6IDUwcHg7XFxyXFxuXFx0ei1pbmRleDogMTtcXHJcXG5cXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcclxcblxcdC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuXFx0LW1zLXVzZXItc2VsZWN0OiBub25lO1xcclxcblxcdHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudVRvZ2dsZSBsaSB7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xcclxcblxcdC1vLXRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcXHJcXG5cXHR0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XFxyXFxuXFx0cGFkZGluZzogMTBweCAwcHggMTBweCA1MHB4O1xcclxcblxcdGZvbnQtc2l6ZTogMjJweDtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuI21lbnVUb2dnbGUgbGk6aG92ZXIge1xcclxcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIFRoZSBoYW1idXJnZXIgYnV0dG9uIGhpZGRlbiBpbnNpZGUgYW4gI2lucHV0TWVudSBlbGVtZW50ICovXFxyXFxuI21lbnVUb2dnbGUgI2lucHV0TWVudSB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0d2lkdGg6IDMwcHg7XFxyXFxuXFx0aGVpZ2h0OiAzMHB4O1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHR0b3A6IC03cHg7XFxyXFxuXFx0bGVmdDogLTVweDtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRcXHJcXG5cXHRvcGFjaXR5OiAwO1xcclxcblxcdC8qIGhpZGUgdGhpcyAqL1xcclxcblxcdHotaW5kZXg6IDI7XFxyXFxuXFx0LyogYW5kIHBsYWNlIGl0IG92ZXIgdGhlIGhhbWJ1cmdlciAqL1xcclxcblxcdC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI21lbnVUb2dnbGUgI2xhYmVsTWVudSB7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdHdpZHRoOiAzMHB4O1xcclxcblxcdGhlaWdodDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuI21lbnVUb2dnbGUgI2xhYmVsTWVudSBzcGFuIHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIEhhbWJ1cmdlclxcclxcbiAqL1xcclxcbiNtZW51VG9nZ2xlICNsYWJlbE1lbnUgZGl2IHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHR3aWR0aDogMzBweDtcXHJcXG5cXHRoZWlnaHQ6IDJweDtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiA2cHg7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdGJhY2tncm91bmQ6IHZhcigtLWNsci1lbGZHcmVlbik7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcdHotaW5kZXg6IDE7XFxyXFxuXFx0LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA0cHggMHB4O1xcclxcblxcdC1tcy10cmFuc2Zvcm0tb3JpZ2luOiA0cHggMHB4O1xcclxcblxcdHRyYW5zZm9ybS1vcmlnaW46IDRweCAwcHg7XFxyXFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcclxcblxcdC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuI21lbnVUb2dnbGUgI2xhYmVsTWVudSBkaXY6Zmlyc3QtY2hpbGQge1xcclxcblxcdC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCUgMTAwJTtcXHJcXG5cXHQtbXMtdHJhbnNmb3JtLW9yaWdpbjogMCUgMTAwJTtcXHJcXG5cXHR0cmFuc2Zvcm0tb3JpZ2luOiAwJSAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudVRvZ2dsZSAjbGFiZWxNZW51IGRpdjpudGgtY2hpbGQoMikge1xcclxcblxcdC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XFxyXFxuXFx0LW1zLXRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xcclxcblxcdHRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBcXHJcXG4gKiBDaGFuZ2UgdGhlIGNvbG9yIG9mIHRoZSBoYW1idXJnZXIgd2hlbiB0b2dnbGVkXFxyXFxuICovXFxyXFxuI21lbnVUb2dnbGUgI2lucHV0TWVudTpjaGVja2VkKyNsYWJlbE1lbnUgZGl2IHtcXHJcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1jbHItbWluZVNoYWZ0KTtcXHJcXG5cXHRcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiBVc2UgYWJzb2x1dGUgcG9zaXRpb25pbmcgdG8gcGxhY2UgdGhlIG1lbnUgb2ZmLXNjcmVlblxcclxcbiAqL1xcclxcbiNtZW51IHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0d2lkdGg6IDEwMHZ3O1xcclxcblxcdG1heC13aWR0aDogOTAwcHg7XFxyXFxuXFx0bWFyZ2luOiAtODBweCAwIDAgLTUwcHg7XFxyXFxuXFx0cGFkZGluZzogNTBweCAwcHggNTBweCAwcHg7XFxyXFxuXFx0cGFkZGluZy10b3A6IDEyNXB4O1xcclxcblxcdGJhY2tncm91bmQ6IHZhcigtLWNsci1saWdodCk7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXHJcXG5cXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuXFx0LyogSGlkZSB0aGUgbWVudSBvZmYtc2NyZWVuIHRvIHRoZSBsZWZ0ICovXFxyXFxuXFx0bGVmdDogMDtcXHJcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IGxlZnQgMC4zcyBlYXNlO1xcclxcblxcdC1vLXRyYW5zaXRpb246IGxlZnQgMC4zcyBlYXNlO1xcclxcblxcdHRyYW5zaXRpb246IGxlZnQgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKlxcclxcbiAqIFNsaWRlIHRoZSBtZW51IGluIGZyb20gbGVmdCB3aGVuIHRoZSAjaW5wdXRNZW51IGlzIGNoZWNrZWRcXHJcXG4gKi9cXHJcXG4jbWVudVRvZ2dsZSAjaW5wdXRNZW51OmNoZWNrZWR+dWwge1xcclxcblxcclxcblxcdHRyYW5zaXRpb246IGxlZnQgMC4zcyBlYXNlO1xcclxcblxcdGxlZnQ6IC0yMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1pbWcge1xcclxcblxcdHdpZHRoOiAxLjdlbTtcXHJcXG5cXHRwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlLWxpc3Qge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1lbGZHcmVlbik7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMzVweDtcXHJcXG5cXHRtYXJnaW46IDBweCAyNXB4IDBweCAyNXB4O1xcclxcblxcdGNvbG9yOiB2YXIoLS1jbHItbGlnaHQpO1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbiNteUZvcm0ge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRtYXJnaW4tdG9wOiAxLjhlbTtcXHJcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4jbXlGb3JtIGZvcm0sICNteVRhc2tzIGZvcm0ge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGZvbnQtc2l6ZTogMS4zZW07XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXdoaXRlKTtcXHJcXG5cXHR3aWR0aDogMTVlbTtcXHJcXG5cXHRwYWRkaW5nOiAyZW0gLjZlbSAxLjVlbSAuNmVtO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbiNhZGRQcm9qZWN0Rm9ybSB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZFByb2plY3RCdXR0b24ge1xcclxcblxcdG1hcmdpbi10b3A6IDMwcHg7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWVsZkdyZWVuKTtcXHJcXG5cXHRjb2xvcjogdmFyKC0tY2xyLWxpZ2h0KTtcXHJcXG5cXHRib3JkZXI6IG5vbmU7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNDJweDtcXHJcXG5cXHRmb250LXNpemU6IDEuNGVtO1xcclxcblxcdHBhZGRpbmc6IDIlIDEwJSAyJSA4JTtcXHJcXG5cXHRmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbiNhZGRQcm9qZWN0QnV0dG9uOmhvdmVyIHtcXHJcXG5cXHRjb2xvcjogdmFyKC0tY2xyLWxpZ2h0KTtcXHJcXG5cXHRvcGFjaXR5OiAwLjg7XFxyXFxufVxcclxcblxcclxcbiNhZGRQcm9qZWN0QnV0dG9uIHNwYW4ge1xcclxcblxcdGZvbnQtc2l6ZTogMS42ZW07XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDMwMDtcXHJcXG5cXHRwYWRkaW5nOiAwcHggMTBweCAwcHggM3B4O1xcclxcblxcdFxcclxcbn1cXHJcXG5cXHJcXG4jc3VibWl0QnRuLCAjdGFza1N1Ym1pdEJ1dHRvbiB7XFxyXFxuIFxcdGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcXHJcXG4gXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWVsZkdyZWVuKTtcXHJcXG4gXFx0Y29sb3I6IHZhcigtLWNsci1saWdodCk7XFxyXFxuIFxcdGJvcmRlcjogbm9uZTtcXHJcXG4gXFx0Ym9yZGVyLXJhZGl1czogMzJweDtcXHJcXG4gXFx0Zm9udC1zaXplOiAxZW07XFxyXFxuIFxcdHBhZGRpbmc6IDIlIDMwJSAyJSAzMCU7XFxyXFxuXFx0IHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbiNzdWJtaXRCdG46aG92ZXIsICN0YXNrU3VibWl0QnRuOmhvdmVyIHtcXHJcXG5cXHRvcGFjaXR5OiAwLjg7XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0TGFiZWwsICN0YXNrTGFiZWwge1xcclxcblxcdGZvbnQtc2l6ZTogMS4zZW07XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3RJbnB1dCwgI3Rhc2tJbnB1dCB7XFxyXFxuXFx0Zm9udC1zaXplOiAwLjhlbTtcXHJcXG5cXHRmb250LXdlaWdodDogNDAwO1xcclxcblxcdGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcblxcdHBhZGRpbmc6IDBweCAxNXB4IDBweCAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlUHJvamVjdEJ0biB7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tY2xyLW1pbmVTaGFmdCk7XFxyXFxuXFx0YmFja2dyb3VuZDogdmFyKC0tY2xyLXdhcm5pbmcpO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuXFx0cGFkZGluZzogM3B4IDdweCAycHggN3B4O1xcclxcblxcdGZvbnQtc2l6ZTogMC43ZW07XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRtYXJnaW46IDAuNSUgMiUgMCAyJTtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDMwMDtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tMaXN0IHtcXHJcXG5cXHRncmlkLWFyZWE6IHRhc2tzO1xcclxcblxcdC8qIG1hcmdpbi1ib3R0b206IDEzMHZoOyAqL1xcclxcblxcdC8qIG1hcmdpbi10b3A6IDUwdmg7ICovXFxyXFxufVxcclxcblxcclxcbi50b2RvLWxpc3Qge1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxuXFx0bWFyZ2luLXRvcDogMjhlbTtcXHJcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1jbHItZ2FsbGVyeSk7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXHJcXG5cXHR3aWR0aDogMTAwdnc7XFxyXFxuXFx0bWF4LXdpZHRoOiA5MDBweDtcXHJcXG5cXHRwYWRkaW5nLXRvcDogMyU7XFxyXFxuXFx0cGFkZGluZy1ib3R0b206IDElO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkbWFyZ2luQWZ0ZXJDbGljayB7XFxyXFxuXFx0bWFyZ2luLXRvcDogNXZoO1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5hZGRtYXJnaW5BZnRlckZvcm1PcGVuIHtcXHJcXG5cXHRtYXJnaW4tdG9wOiA0MGVtO1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5yZW1vdmVtYXJnaW5BZnRlckZvcm1DbG9zZSB7XFxyXFxuXFx0bWFyZ2luLXRvcDogMjhlbTtcXHJcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1oZWFkZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1saWdodCk7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXHJcXG5cXHRtYXJnaW46IDAlIDUlIDUlIDUlO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1jb3VudCB7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tYm9keSB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWxpZ2h0KTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcblxcdHBhZGRpbmc6IDUlIDElIDAlIDElO1xcclxcblxcdG1hcmdpbjogNSU7XFxyXFxufVxcclxcblxcclxcbiNteVRhc2tzIHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkVGFza0J1dHRvbiB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xcclxcbiBcXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItZWxmR3JlZW4pO1xcclxcbiBcXHRjb2xvcjogdmFyKC0tY2xyLWxpZ2h0KTtcXHJcXG4gXFx0Ym9yZGVyOiBub25lO1xcclxcbiBcXHRib3JkZXItcmFkaXVzOiAzMnB4O1xcclxcbiBcXHRmb250LXNpemU6IDEuMWVtO1xcclxcbiBcXHRwYWRkaW5nOiAyJSAxMCUgMiUgNCU7XFxyXFxuXFx0IGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0IGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0IG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuXFx0IHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbiNhZGRUYXNrQnV0dG9uOmhvdmVyIHtcXHJcXG5cXHRvcGFjaXR5OiAwLjg7XFxyXFxufVxcclxcblxcclxcbiNhZGRUYXNrQnV0dG9uIHNwYW4ge1xcclxcblxcdGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXHJcXG5cXHRwYWRkaW5nOiAwcHggMTBweCAwcHggMTNweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NyZWF0ZVRhc2tDb250YWluZXIge1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuXFx0cGFkZGluZzogNSU7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbiN0YXNrc0NvbnRhaW5lciB7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4jdGFza3NDb250YWluZXIgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcblxcdGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNsci1taW5lU2hhZnQpO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDE0cHg7XFxyXFxuXFx0YXBwZWFyYW5jZTogbm9uZTtcXHJcXG5cXHRvdXRsaW5lOiAwO1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDE3NW1zIGN1YmljLWJlemllcigwLjEsIDAuMSwgMC4yNSwgMSk7XFxyXFxufVxcclxcblxcclxcbiN0YXNrc0NvbnRhaW5lciBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOjpiZWZvcmUge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRjb250ZW50OiAnJztcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgdG9wOiAtNnB4O1xcclxcbiAgICBsZWZ0OiA5cHg7XFxyXFxuICAgIHdpZHRoOiA4cHg7XFxyXFxuICAgIGhlaWdodDogMjFweDtcXHJcXG5cXHRib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcblxcdGJvcmRlci1jb2xvcjogdmFyKC0tY2xyLW1pbmVTaGFmdCk7XFxyXFxuXFx0Ym9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcXHJcXG5cXHR0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxuXFx0b3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tzQ29udGFpbmVyIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCB7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWNsci1taW5lU2hhZnQpO1xcclxcblxcdGJvcmRlci1jb2xvcjogdmFyKC0tY2xyLW1pbmVTaGFmdCk7XFxyXFxuXFx0YmFja2dyb3VuZDogdmFyKC0tY2xyLXByaW1hcnkpO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza3NDb250YWluZXIgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkOjpiZWZvcmUge1xcclxcblxcdG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbiN0YXNrc0NvbnRhaW5lciBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgfiBsYWJlbDo6YmVmb3JlIHtcXHJcXG5cXHRjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCAxMDAlKTtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tzQ29udGFpbmVyIGxhYmVsIHtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdGZvbnQtc2l6ZTogMS4zZW07XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXHJcXG5cXHRwYWRkaW5nOiAwIDAuNDVlbSAwO1xcclxcblxcdHVzZXItc2VsZWN0OiBub25lO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4jdGFza3NDb250YWluZXIgbGFiZWw6OmJlZm9yZSB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdGNvbnRlbnQ6IGF0dHIoZGF0YS1jb250ZW50KTtcXHJcXG5cXHRjb2xvcjogdmFyKC0tY2xyLWNvbXBsZXRlZFRhc2spO1xcclxcblxcdGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDAgMCwgMCUgMTAwJSwgMCAxMDAlKTtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzOiAzcHg7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uLWNvbG9yOiB2YXIoLS1jbHItZGFyayk7XFxyXFxuXFx0dG9wOiAwcHg7XFxyXFxuXFx0dHJhbnNpdGlvbjogY2xpcC1wYXRoIDIwMG1zIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sgbGFiZWwge1xcclxcblxcdGJvdHRvbTogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1nYWxsZXJ5KTtcXHJcXG5cXHRtYXJnaW46IDIlO1xcclxcblxcdHBhZGRpbmc6IDIlO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbiN0YXNrc0NvbnRhaW5lciAudGFzayBpbnB1dCB7XFxyXFxuXFx0aGVpZ2h0OiAyNXB4O1xcclxcblxcdHdpZHRoOiAyNXB4O1xcclxcblxcdG1pbi13aWR0aDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tzQ29udGFpbmVyIGlucHV0OmhvdmVyIHtcXHJcXG5cXHRib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jbHItcHJpbWFyeSk7XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZS1zdHVmZiB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO31cXHJcXG5cXHJcXG4uZGVsZXRlLXN0dWZmIGJ1dHRvbiB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xcclxcblxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRtYXJnaW46IDAuNWVtO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuXFx0Zm9udC1zaXplOiAxZW07XFxyXFxuXFx0cGFkZGluZzogMC4xMWVtIDFlbSAwLjExZW0gMWVtO1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxufVxcclxcbi5kZWxldGUtc3R1ZmYgYnV0dG9uOmhvdmVyIHtcXHJcXG5cXHRvcGFjaXR5OiAwLjg7XFxyXFxufVxcclxcblxcclxcbiNjbGVhckJ0biB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLW5hdkhpZ2hsaWdodCk7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWNsci1taW5lU2hhZnQpO1xcclxcbn1cXHJcXG5cXHJcXG4jZGVsZXRlQnRuIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItZGVsZXRlKTtcXHJcXG5cXHRjb2xvcjogdmFyKC0tY2xyLW1pbmVTaGFmdCk7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAzNzVweCkge1xcclxcblxcdCNtZW51LCAjdGFza0xpc3Qge1xcclxcblxcdFxcdHdpZHRoOiA5MnZ3O1xcclxcblxcdH1cXHJcXG5cXHQjY29udGFpbmVyIHtcXHJcXG5cXHRcXHRtYXJnaW4tcmlnaHQ6IDAlO1xcclxcblxcdFxcdG1hcmdpbi1sZWZ0OiAwJTtcXHJcXG5cXHRcXHRwYWRkaW5nLWxlZnQ6IDElO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDExMDBweCkge1xcclxcblxcdCNjb250YWluZXIge1xcclxcblxcdFxcdG1hcmdpbi1yaWdodDogMCU7XFxyXFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDAlO1xcclxcblxcdH1cXHJcXG59IFxcclxcblxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MsZ0NBQWdDO0NBQ2hDLG1DQUFtQztDQUNuQyxvQkFBb0I7Q0FDcEIsMkJBQTJCO0NBQzNCLCtCQUErQjtDQUMvQixzQkFBc0I7Q0FDdEIsNkJBQTZCO0NBQzdCLHdCQUF3QjtDQUN4QixzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLHFCQUFxQjtDQUNyQiw0QkFBNEI7Q0FDNUIsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsMENBQTBDOztBQUUzQzs7QUFFQTtDQUNDLFVBQVU7Q0FDVixTQUFTO0NBQ1QsNkJBQTZCO0NBQzdCLDJCQUEyQjtDQUMzQixhQUFhO0NBQ2IsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0Msc0JBQXNCO0NBQ3RCLGVBQWU7Q0FDZixhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLGdDQUFnQztBQUNqQzs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsYUFBYTtDQUNiLDZCQUE2QjtDQUM3QiwwQkFBMEI7Q0FDMUIsd0JBQXdCO0NBQ3hCOzs7VUFHUztBQUNWOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixtQkFBbUI7Q0FDbkIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixhQUFhO0FBQ2Q7O0FBRUE7Q0FDQzswQkFDeUI7Q0FDekIsa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQixtQkFBbUI7QUFDcEI7O0FB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QTBDO0NBQzFDLFlBQVk7Q0FDWixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLGNBQWM7Q0FDZCw4QkFBOEI7Q0FDOUIseUJBQXlCO0FBQzFCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyx5Q0FBeUM7Q0FDekMsMkJBQTJCO0FBQzVCOztBQUVBO0NBQ0MsbUNBQW1DO0NBQ25DLDJCQUEyQjtBQUM1Qjs7QUFFQTtDQUNDO0VBQ0MsV0FBVztDQUNaO0NBQ0E7RUFDQyxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtDQUNqQjtBQUNEOztBQUVBO0NBQ0M7RUFDQyxnQkFBZ0I7RUFDaEIsZUFBZTtDQUNoQjtBQUNEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG5cXHQtLWNsci1wcmltYXJ5OiByZ2IoNDEsIDE0NSwgMjU1KTtcXHJcXG5cXHQtLWNsci1saWdodEdyYXk6IHJnYigyMzIsIDIzMiwgMjMyKTtcXHJcXG5cXHQtLWNsci1saWdodDogI2Y0ZjRmNDtcXHJcXG5cXHQtLWNsci1kYXJrOiByZ2IoNTgsIDU4LCA1OCk7XFxyXFxuXFx0LS1jbHItd2hpdGU6IHJnYigyNTIsIDI1MiwgMjUyKTtcXHJcXG5cXHQtLWNsci13YXJuaW5nOiAjZTk3NTYwO1xcclxcblxcdC0tY2xyLW5hdkhpZ2hsaWdodDogIzRmNzc5NGQwO1xcclxcblxcdC0tY2xyLW1pbmVTaGFmdDogIzIzMjMyMztcXHJcXG5cXHQtLWNsci1nYWxsZXJ5OiAjZWRlZGVkO1xcclxcblxcdC0tY2xyLWVsZkdyZWVuOiAjMDU4MTc5O1xcclxcblxcdC0tY2xyLW5lYnVsYTogI2NiZGJkYTtcXHJcXG5cXHQtLWNsci1jb21wbGV0ZWRUYXNrOiAjYTViMWMwO1xcclxcblxcdC0tY2xyLWRlbGV0ZTogI2ZmNDk0OTYyO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG5cXHRmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdGJhY2tncm91bmQ6IHZhcigtLWNsci1uZWJ1bGEpO1xcclxcblxcdGNvbG9yOiB2YXIoLS1jbHItbWluZVNoYWZ0KTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWNsci1kYXJrKTtcXHJcXG5cXHRmb250LXNpemU6IDNyZW07XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRtYXJnaW46IC0wLjVlbSAwLjVlbSAwLjVlbSAwLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcblxcdG1hcmdpbi1ib3R0b206IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhaW5lciB7XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiAtMTglO1xcclxcblxcdHBhZGRpbmctbGVmdDogMSU7XFxyXFxuXFx0ZGlzcGxheTogZ3JpZDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczogXFxyXFxuXFx0ICBcXFwibG9nb1xcXCJcXHJcXG5cXHQgIFxcXCJwcm9qZWN0c1xcXCJcXHJcXG5cXHQgIFxcXCJ0YXNrc1xcXCI7XFxyXFxufSBcXHJcXG5cXHJcXG4jZ2l0TG9nb0RpdkNvbnRhaW5lciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0Z3JpZC1hcmVhOiBsb2dvO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2l0TG9nbyB7XFxyXFxuXFx0d2lkdGg6IDEwMHB4O1xcclxcblxcdGhlaWdodDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbiNuYXZDb250YWluZXIge1xcclxcblxcdC8qIGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMTB2dztcXHJcXG5cXHRncmlkLWFyZWE6IHByb2plY3RzO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudVRvZ2dsZSB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdG1heC13aWR0aDogNTB2dztcXHJcXG5cXHR0b3A6IDUwcHg7XFxyXFxuXFx0bGVmdDogNTBweDtcXHJcXG5cXHR6LWluZGV4OiAxO1xcclxcblxcdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuXFx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG5cXHQtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNtZW51VG9nZ2xlIGxpIHtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XFxyXFxuXFx0LW8tdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xcclxcblxcdHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcXHJcXG5cXHRwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDUwcHg7XFxyXFxuXFx0Zm9udC1zaXplOiAyMnB4O1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudVRvZ2dsZSBsaTpob3ZlciB7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogVGhlIGhhbWJ1cmdlciBidXR0b24gaGlkZGVuIGluc2lkZSBhbiAjaW5wdXRNZW51IGVsZW1lbnQgKi9cXHJcXG4jbWVudVRvZ2dsZSAjaW5wdXRNZW51IHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHR3aWR0aDogMzBweDtcXHJcXG5cXHRoZWlnaHQ6IDMwcHg7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdHRvcDogLTdweDtcXHJcXG5cXHRsZWZ0OiAtNXB4O1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdFxcclxcblxcdG9wYWNpdHk6IDA7XFxyXFxuXFx0LyogaGlkZSB0aGlzICovXFxyXFxuXFx0ei1pbmRleDogMjtcXHJcXG5cXHQvKiBhbmQgcGxhY2UgaXQgb3ZlciB0aGUgaGFtYnVyZ2VyICovXFxyXFxuXFx0LXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudVRvZ2dsZSAjbGFiZWxNZW51IHtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0d2lkdGg6IDMwcHg7XFxyXFxuXFx0aGVpZ2h0OiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudVRvZ2dsZSAjbGFiZWxNZW51IHNwYW4ge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogSGFtYnVyZ2VyXFxyXFxuICovXFxyXFxuI21lbnVUb2dnbGUgI2xhYmVsTWVudSBkaXYge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdHdpZHRoOiAzMHB4O1xcclxcblxcdGhlaWdodDogMnB4O1xcclxcblxcdG1hcmdpbi1ib3R0b206IDZweDtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0YmFja2dyb3VuZDogdmFyKC0tY2xyLWVsZkdyZWVuKTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFx0ei1pbmRleDogMTtcXHJcXG5cXHQtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDRweCAwcHg7XFxyXFxuXFx0LW1zLXRyYW5zZm9ybS1vcmlnaW46IDRweCAwcHg7XFxyXFxuXFx0dHJhbnNmb3JtLW9yaWdpbjogNHB4IDBweDtcXHJcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxuXFx0LW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudVRvZ2dsZSAjbGFiZWxNZW51IGRpdjpmaXJzdC1jaGlsZCB7XFxyXFxuXFx0LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwJSAxMDAlO1xcclxcblxcdC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAwJSAxMDAlO1xcclxcblxcdHRyYW5zZm9ybS1vcmlnaW46IDAlIDEwMCU7XFxyXFxufVxcclxcblxcclxcbiNtZW51VG9nZ2xlICNsYWJlbE1lbnUgZGl2Om50aC1jaGlsZCgyKSB7XFxyXFxuXFx0LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcXHJcXG5cXHQtbXMtdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XFxyXFxuXFx0dHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XFxyXFxufVxcclxcblxcclxcbi8qIFxcclxcbiAqIENoYW5nZSB0aGUgY29sb3Igb2YgdGhlIGhhbWJ1cmdlciB3aGVuIHRvZ2dsZWRcXHJcXG4gKi9cXHJcXG4jbWVudVRvZ2dsZSAjaW5wdXRNZW51OmNoZWNrZWQrI2xhYmVsTWVudSBkaXYge1xcclxcblxcdGJhY2tncm91bmQ6IHZhcigtLWNsci1taW5lU2hhZnQpO1xcclxcblxcdFxcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIFVzZSBhYnNvbHV0ZSBwb3NpdGlvbmluZyB0byBwbGFjZSB0aGUgbWVudSBvZmYtc2NyZWVuXFxyXFxuICovXFxyXFxuI21lbnUge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHR3aWR0aDogMTAwdnc7XFxyXFxuXFx0bWF4LXdpZHRoOiA5MDBweDtcXHJcXG5cXHRtYXJnaW46IC04MHB4IDAgMCAtNTBweDtcXHJcXG5cXHRwYWRkaW5nOiA1MHB4IDBweCA1MHB4IDBweDtcXHJcXG5cXHRwYWRkaW5nLXRvcDogMTI1cHg7XFxyXFxuXFx0YmFja2dyb3VuZDogdmFyKC0tY2xyLWxpZ2h0KTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcblxcdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG5cXHQvKiBIaWRlIHRoZSBtZW51IG9mZi1zY3JlZW4gdG8gdGhlIGxlZnQgKi9cXHJcXG5cXHRsZWZ0OiAwO1xcclxcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogbGVmdCAwLjNzIGVhc2U7XFxyXFxuXFx0LW8tdHJhbnNpdGlvbjogbGVmdCAwLjNzIGVhc2U7XFxyXFxuXFx0dHJhbnNpdGlvbjogbGVmdCAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qXFxyXFxuICogU2xpZGUgdGhlIG1lbnUgaW4gZnJvbSBsZWZ0IHdoZW4gdGhlICNpbnB1dE1lbnUgaXMgY2hlY2tlZFxcclxcbiAqL1xcclxcbiNtZW51VG9nZ2xlICNpbnB1dE1lbnU6Y2hlY2tlZH51bCB7XFxyXFxuXFxyXFxuXFx0dHJhbnNpdGlvbjogbGVmdCAwLjNzIGVhc2U7XFxyXFxuXFx0bGVmdDogLTIwMCU7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWltZyB7XFxyXFxuXFx0d2lkdGg6IDEuN2VtO1xcclxcblxcdHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmUtbGlzdCB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWVsZkdyZWVuKTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAzNXB4O1xcclxcblxcdG1hcmdpbjogMHB4IDI1cHggMHB4IDI1cHg7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWNsci1saWdodCk7XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuI215Rm9ybSB7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdG1hcmdpbi10b3A6IDEuOGVtO1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbiNteUZvcm0gZm9ybSwgI215VGFza3MgZm9ybSB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjNlbTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItd2hpdGUpO1xcclxcblxcdHdpZHRoOiAxNWVtO1xcclxcblxcdHBhZGRpbmc6IDJlbSAuNmVtIDEuNWVtIC42ZW07XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZFByb2plY3RGb3JtIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkUHJvamVjdEJ1dHRvbiB7XFxyXFxuXFx0bWFyZ2luLXRvcDogMzBweDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItZWxmR3JlZW4pO1xcclxcblxcdGNvbG9yOiB2YXIoLS1jbHItbGlnaHQpO1xcclxcblxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA0MnB4O1xcclxcblxcdGZvbnQtc2l6ZTogMS40ZW07XFxyXFxuXFx0cGFkZGluZzogMiUgMTAlIDIlIDglO1xcclxcblxcdGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZFByb2plY3RCdXR0b246aG92ZXIge1xcclxcblxcdGNvbG9yOiB2YXIoLS1jbHItbGlnaHQpO1xcclxcblxcdG9wYWNpdHk6IDAuODtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZFByb2plY3RCdXR0b24gc3BhbiB7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjZlbTtcXHJcXG5cXHRmb250LXdlaWdodDogMzAwO1xcclxcblxcdHBhZGRpbmc6IDBweCAxMHB4IDBweCAzcHg7XFxyXFxuXFx0XFxyXFxufVxcclxcblxcclxcbiNzdWJtaXRCdG4sICN0YXNrU3VibWl0QnV0dG9uIHtcXHJcXG4gXFx0Zm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xcclxcbiBcXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItZWxmR3JlZW4pO1xcclxcbiBcXHRjb2xvcjogdmFyKC0tY2xyLWxpZ2h0KTtcXHJcXG4gXFx0Ym9yZGVyOiBub25lO1xcclxcbiBcXHRib3JkZXItcmFkaXVzOiAzMnB4O1xcclxcbiBcXHRmb250LXNpemU6IDFlbTtcXHJcXG4gXFx0cGFkZGluZzogMiUgMzAlIDIlIDMwJTtcXHJcXG5cXHQgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdEJ0bjpob3ZlciwgI3Rhc2tTdWJtaXRCdG46aG92ZXIge1xcclxcblxcdG9wYWNpdHk6IDAuODtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3RMYWJlbCwgI3Rhc2tMYWJlbCB7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjNlbTtcXHJcXG5cXHRmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdElucHV0LCAjdGFza0lucHV0IHtcXHJcXG5cXHRmb250LXNpemU6IDAuOGVtO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuXFx0cGFkZGluZzogMHB4IDE1cHggMHB4IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGVQcm9qZWN0QnRuIHtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jbHItbWluZVNoYWZ0KTtcXHJcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1jbHItd2FybmluZyk7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXHJcXG5cXHRwYWRkaW5nOiAzcHggN3B4IDJweCA3cHg7XFxyXFxuXFx0Zm9udC1zaXplOiAwLjdlbTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdG1hcmdpbjogMC41JSAyJSAwIDIlO1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza0xpc3Qge1xcclxcblxcdGdyaWQtYXJlYTogdGFza3M7XFxyXFxuXFx0LyogbWFyZ2luLWJvdHRvbTogMTMwdmg7ICovXFxyXFxuXFx0LyogbWFyZ2luLXRvcDogNTB2aDsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tbGlzdCB7XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG5cXHRtYXJnaW4tdG9wOiAyOGVtO1xcclxcblxcdGJhY2tncm91bmQ6IHZhcigtLWNsci1nYWxsZXJ5KTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcblxcdHdpZHRoOiAxMDB2dztcXHJcXG5cXHRtYXgtd2lkdGg6IDkwMHB4O1xcclxcblxcdHBhZGRpbmctdG9wOiAzJTtcXHJcXG5cXHRwYWRkaW5nLWJvdHRvbTogMSU7XFxyXFxufVxcclxcblxcclxcbi5hZGRtYXJnaW5BZnRlckNsaWNrIHtcXHJcXG5cXHRtYXJnaW4tdG9wOiA1dmg7XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZG1hcmdpbkFmdGVyRm9ybU9wZW4ge1xcclxcblxcdG1hcmdpbi10b3A6IDQwZW07XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlbW92ZW1hcmdpbkFmdGVyRm9ybUNsb3NlIHtcXHJcXG5cXHRtYXJnaW4tdG9wOiAyOGVtO1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWhlYWRlciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWxpZ2h0KTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcblxcdG1hcmdpbjogMCUgNSUgNSUgNSU7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWNvdW50IHtcXHJcXG5cXHRjb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1ib2R5IHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItbGlnaHQpO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuXFx0cGFkZGluZzogNSUgMSUgMCUgMSU7XFxyXFxuXFx0bWFyZ2luOiA1JTtcXHJcXG59XFxyXFxuXFxyXFxuI215VGFza3Mge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNhZGRUYXNrQnV0dG9uIHtcXHJcXG5cXHRmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XFxyXFxuIFxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1lbGZHcmVlbik7XFxyXFxuIFxcdGNvbG9yOiB2YXIoLS1jbHItbGlnaHQpO1xcclxcbiBcXHRib3JkZXI6IG5vbmU7XFxyXFxuIFxcdGJvcmRlci1yYWRpdXM6IDMycHg7XFxyXFxuIFxcdGZvbnQtc2l6ZTogMS4xZW07XFxyXFxuIFxcdHBhZGRpbmc6IDIlIDEwJSAyJSA0JTtcXHJcXG5cXHQgZGlzcGxheTogZmxleDtcXHJcXG5cXHQgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHQgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG5cXHQgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZFRhc2tCdXR0b246aG92ZXIge1xcclxcblxcdG9wYWNpdHk6IDAuODtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZFRhc2tCdXR0b24gc3BhbiB7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjVlbTtcXHJcXG5cXHRmb250LXdlaWdodDogNDAwO1xcclxcblxcdHBhZGRpbmc6IDBweCAxMHB4IDBweCAxM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4jY3JlYXRlVGFza0NvbnRhaW5lciB7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXHJcXG5cXHRwYWRkaW5nOiA1JTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI3Rhc2tzQ29udGFpbmVyIHtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcblxcdG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbiN0YXNrc0NvbnRhaW5lciBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuXFx0Ym9yZGVyOiAycHggc29saWQgdmFyKC0tY2xyLW1pbmVTaGFmdCk7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMTRweDtcXHJcXG5cXHRhcHBlYXJhbmNlOiBub25lO1xcclxcblxcdG91dGxpbmU6IDA7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdHRyYW5zaXRpb246IGJhY2tncm91bmQgMTc1bXMgY3ViaWMtYmV6aWVyKDAuMSwgMC4xLCAwLjI1LCAxKTtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tzQ29udGFpbmVyIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06OmJlZm9yZSB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdGNvbnRlbnQ6ICcnO1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB0b3A6IC02cHg7XFxyXFxuICAgIGxlZnQ6IDlweDtcXHJcXG4gICAgd2lkdGg6IDhweDtcXHJcXG4gICAgaGVpZ2h0OiAyMXB4O1xcclxcblxcdGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuXFx0Ym9yZGVyLWNvbG9yOiB2YXIoLS1jbHItbWluZVNoYWZ0KTtcXHJcXG5cXHRib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xcclxcblxcdHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG5cXHRvcGFjaXR5OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza3NDb250YWluZXIgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkIHtcXHJcXG5cXHRjb2xvcjogdmFyKC0tY2xyLW1pbmVTaGFmdCk7XFxyXFxuXFx0Ym9yZGVyLWNvbG9yOiB2YXIoLS1jbHItbWluZVNoYWZ0KTtcXHJcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxyXFxufVxcclxcblxcclxcbiN0YXNrc0NvbnRhaW5lciBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQ6OmJlZm9yZSB7XFxyXFxuXFx0b3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tzQ29udGFpbmVyIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCB+IGxhYmVsOjpiZWZvcmUge1xcclxcblxcdGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAwIDEwMCUpO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza3NDb250YWluZXIgbGFiZWwge1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjNlbTtcXHJcXG5cXHRmb250LXdlaWdodDogNDAwO1xcclxcblxcdHBhZGRpbmc6IDAgMC40NWVtIDA7XFxyXFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbiN0YXNrc0NvbnRhaW5lciBsYWJlbDo6YmVmb3JlIHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0Y29udGVudDogYXR0cihkYXRhLWNvbnRlbnQpO1xcclxcblxcdGNvbG9yOiB2YXIoLS1jbHItY29tcGxldGVkVGFzayk7XFxyXFxuXFx0Y2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMCAwLCAwJSAxMDAlLCAwIDEwMCUpO1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcblxcdHRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IDNweDtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb24tY29sb3I6IHZhcigtLWNsci1kYXJrKTtcXHJcXG5cXHR0b3A6IDBweDtcXHJcXG5cXHR0cmFuc2l0aW9uOiBjbGlwLXBhdGggMjAwbXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayBsYWJlbCB7XFxyXFxuXFx0Ym90dG9tOiAwcHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWdhbGxlcnkpO1xcclxcblxcdG1hcmdpbjogMiU7XFxyXFxuXFx0cGFkZGluZzogMiU7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tzQ29udGFpbmVyIC50YXNrIGlucHV0IHtcXHJcXG5cXHRoZWlnaHQ6IDI1cHg7XFxyXFxuXFx0d2lkdGg6IDI1cHg7XFxyXFxuXFx0bWluLXdpZHRoOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza3NDb250YWluZXIgaW5wdXQ6aG92ZXIge1xcclxcblxcdGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNsci1wcmltYXJ5KTtcXHJcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLXN0dWZmIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47fVxcclxcblxcclxcbi5kZWxldGUtc3R1ZmYgYnV0dG9uIHtcXHJcXG5cXHRmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XFxyXFxuXFx0Ym9yZGVyOiBub25lO1xcclxcblxcdG1hcmdpbjogMC41ZW07XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMTJweDtcXHJcXG5cXHRmb250LXNpemU6IDFlbTtcXHJcXG5cXHRwYWRkaW5nOiAwLjExZW0gMWVtIDAuMTFlbSAxZW07XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuLmRlbGV0ZS1zdHVmZiBidXR0b246aG92ZXIge1xcclxcblxcdG9wYWNpdHk6IDAuODtcXHJcXG59XFxyXFxuXFxyXFxuI2NsZWFyQnRuIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItbmF2SGlnaGxpZ2h0KTtcXHJcXG5cXHRjb2xvcjogdmFyKC0tY2xyLW1pbmVTaGFmdCk7XFxyXFxufVxcclxcblxcclxcbiNkZWxldGVCdG4ge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1kZWxldGUpO1xcclxcblxcdGNvbG9yOiB2YXIoLS1jbHItbWluZVNoYWZ0KTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDM3NXB4KSB7XFxyXFxuXFx0I21lbnUsICN0YXNrTGlzdCB7XFxyXFxuXFx0XFx0d2lkdGg6IDkydnc7XFxyXFxuXFx0fVxcclxcblxcdCNjb250YWluZXIge1xcclxcblxcdFxcdG1hcmdpbi1yaWdodDogMCU7XFxyXFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDAlO1xcclxcblxcdFxcdHBhZGRpbmctbGVmdDogMSU7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMTEwMHB4KSB7XFxyXFxuXFx0I2NvbnRhaW5lciB7XFxyXFxuXFx0XFx0bWFyZ2luLXJpZ2h0OiAwJTtcXHJcXG5cXHRcXHRtYXJnaW4tbGVmdDogMCU7XFxyXFxuXFx0fVxcclxcbn0gXFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxyXG5mdW5jdGlvbiBET01JbnRlcmZhY2UoKSB7XHJcblxyXG5cdC8vY2F0Y2hpbmcgRE9NXHJcblx0bGV0IGdpdExvZ29EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2l0TG9nb0RpdicpO1xyXG5cdGxldCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2plY3RCdXR0b24nKTtcclxuXHRcclxuXHRsZXQgaW5wdXRNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0TWVudScpO1xyXG5cdGxldCB0YXNrTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrTGlzdCcpO1xyXG5cdGxldCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRhc2tCdXR0b24nKTtcclxuXHRsZXQgdGFza1N1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrU3VibWl0QnV0dG9uJyk7XHJcblxyXG5cdC8vZ3JhYiBwcm9qZWN0c0NvbnRhaW5lclxyXG5cdC8vZ3JhYiBwcm9qZWN0cyBcclxuXHQvLyBsZXQgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1wcm9qZWN0XScpO1xyXG5cdC8vIGxldCBkZWxldGVQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZVByb2plY3RCdG4nKTtcclxuXHJcblxyXG5cclxuXHRcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERPTUludGVyZmFjZTsiLCJpbXBvcnQgRE9NSW50ZXJmYWNlIGZyb20gJy4vRE9NSW50ZXJmYWNlLmpzJztcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIERPTUludGVyZmFjZSk7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RzKCkge1xyXG5cclxuXHRsZXQgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1uZXctcHJvamVjdC1mb3JtXScpO1xyXG5cdGxldCBuZXdQcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1uZXctcHJvamVjdC1pbnB1dF0nKTtcclxuXHRsZXQgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wcm9qZWN0c10nKTtcclxuXHQvLyBsZXQgZGF0YVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wcm9qZWN0XScpO1xyXG5cdC8vIGxldCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2plY3RCdXR0b24nKTtcclxuXHRcclxuXHJcblx0Ly8gbGV0IHByb2plY3RzID0gW3tcclxuXHQvLyBcdGlkOiAxLFxyXG5cdC8vIFx0bmFtZXM6ICdQcm9qZWN0IDEnXHJcblx0Ly8gfSwge1xyXG5cdC8vIFx0aWQ6IDIsXHJcblx0Ly8gXHRuYW1lczogJ1Byb2plY3QgMidcclxuXHQvLyB9XTtcclxuXHJcblx0bmV3UHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYWRkUHJvamVjdCk7XHJcblxyXG5cclxuXHJcblx0Ly9jcmVhdGUgYWRkIHByb2plY3RzIGZ4blxyXG5cclxuXHRmdW5jdGlvbiBhZGRQcm9qZWN0KGUpIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGNvbnN0IHByb2plY3ROYW1lID0gbmV3UHJvamVjdElucHV0LnZhbHVlO1xyXG5cdFx0aWYgKHByb2plY3ROYW1lID09PSBudWxsIHx8IHByb2plY3ROYW1lID09PSAnJykgcmV0dXJuO1xyXG5cdFx0Y29uc3QgcHJvamVjdCA9IGNyZWF0ZVByb2plY3QocHJvamVjdE5hbWUpO1xyXG5cdFx0bmV3UHJvamVjdElucHV0LnZhbHVlID0gbnVsbDtcclxuXHRcdC8vIHByb2plY3RzLnB1c2gocHJvamVjdCk7XHJcblxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gY3JlYXRlUHJvamVjdChuYW1lcykge1xyXG5cdFx0bGV0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG5cdFx0cHJvamVjdC5jbGFzc0xpc3QuYWRkKCdsaXN0LW5hbWUnKTtcclxuXHRcdHByb2plY3Quc2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QnLCBuYW1lcyk7XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0bGV0IHByb2plY3RJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuXHRcdHByb2plY3RJbWcuY2xhc3NMaXN0LmFkZCgnbGlzdC1pbWcnKTtcclxuXHRcdHByb2plY3RJbWcuc3JjID0gJy4uL3NyYy9pbWFnZXMvc3ZnL2xpc3Quc3ZnJztcclxuXHRcdHByb2plY3RJbWcuYWx0ID0gJ2xpc3QnO1xyXG5cclxuXHRcdGxldCBkZWxldGVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblx0XHRkZWxldGVQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZVByb2plY3RCdG4nKTtcclxuXHRcdGRlbGV0ZVByb2plY3RCdXR0b24uaW5uZXJUZXh0ID0gJ1gnO1xyXG5cclxuXHRcdHByb2plY3QuYXBwZW5kKHByb2plY3RJbWcsIG5hbWVzLCBkZWxldGVQcm9qZWN0QnV0dG9uKTtcclxuXHJcblx0XHRwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmQocHJvamVjdCk7XHJcblx0XHRhZGRNYXJnaW5Ub1Rhc2tzKCk7XHJcblx0XHRcclxuXHRcdGNvbnNvbGUubG9nKFwid29ya3NcIiwgcHJvamVjdCk7XHRcclxuXHJcblx0fVxyXG5cclxuXHQvL2FkZCBtYXJnaW4gdG8gdGFza3Mgd2hlbiBhIG5ldyBwcm9qZWN0IGlzIGFkZGVkXHJcblx0ZnVuY3Rpb24gYWRkTWFyZ2luVG9UYXNrcygpIHtcclxuXHRcdGxldCBnZXRIZWlnaHQgPSBnZXRDb21wdXRlZFN0eWxlKHRhc2tMaXN0KS5tYXJnaW5Ub3A7XHJcblx0XHRsZXQgbmV3SGVpZ2h0ID0gcGFyc2VJbnQoZ2V0SGVpZ2h0KSArIDYwO1xyXG5cdFx0bGV0IGhlaWdodEluU3RyID0gbmV3SGVpZ2h0LnRvU3RyaW5nKCk7XHJcblx0XHR0YXNrTGlzdC5zdHlsZS5tYXJnaW5Ub3AgPSBoZWlnaHRJblN0ciArICdweCc7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coZ2V0SGVpZ2h0LCBuZXdIZWlnaHQsIGhlaWdodEluU3RyKTtcclxuXHR9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQcm9qZWN0czsiLCJpbXBvcnQgRE9NSW50ZXJmYWNlIGZyb20gJy4vRE9NSW50ZXJmYWNlLmpzJztcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIERPTUludGVyZmFjZSk7XHJcblxyXG5cclxuLy8gY3JlYXRlIGRlbGV0ZSBwcm9qZWN0cyBmeG5cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoKSB7XHJcblx0XHJcblx0bGV0IGRlbGV0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlUHJvamVjdEJ0bicpO1xyXG5cdFxyXG5cdC8vb24gcHJlc3NpbmcgYnV0dG9uIGRlbGV0ZSBwcm9qZWN0XHJcblx0ZGVsZXRlUHJvamVjdEJ0bi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZVByb2plY3QpO1xyXG5cdH0pO1xyXG5cclxuXHRmdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3QpIHtcclxuXHRcdHByb2plY3QuY29tcG9zZWRQYXRoKClbMV0ucmVtb3ZlKCk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWxldGVQcm9qZWN0OyIsImltcG9ydCBET01JbnRlcmZhY2UgZnJvbSAnLi9ET01JbnRlcmZhY2UuanMnO1xyXG5pbXBvcnQgZ2l0SW1hZ2UgZnJvbSAnLi9pbWFnZXMvZ2l0LWxvZ28ucG5nJztcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBET01JbnRlcmZhY2UpO1xyXG5cclxuZnVuY3Rpb24gdWlfdXgoKSB7XHJcblx0XHJcblx0bGV0IHByb2plY3RTdWJtaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0QnRuJyk7XHJcblx0Ly9naXQgbG9nbyBpbWdcclxuXHRsZXQgZ2l0TG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5cdGdpdExvZ28uc3JjID0gZ2l0SW1hZ2U7XHJcblx0Z2l0TG9nby5jbGFzc0xpc3QuYWRkKCdnaXRMb2dvJyk7XHJcblx0Z2l0TG9nb0Rpdi5hcHBlbmRDaGlsZChnaXRMb2dvKTtcclxuXHJcblx0Ly8gRE9NIGNsaWNrIGV2ZW50c1xyXG5cdGlucHV0TWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZE1hcmdpbik7XHJcblx0YWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFRhc2spO1xyXG5cdGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuRm9ybSk7XHJcblx0cHJvamVjdFN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlRm9ybSk7XHJcblx0dGFza1N1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlVGFza0Zvcm0pO1xyXG5cclxuXHJcblxyXG5cdC8vRnVuY3Rpb25zIGZvciBidXR0b25zIGFuZCBhZGRpbmcgbWFyZ2luXHJcblx0ZnVuY3Rpb24gb3BlbkZvcm0oKSB7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Rm9ybVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cdFx0dGFza0xpc3QuY2xhc3NMaXN0LmFkZCgnYWRkbWFyZ2luQWZ0ZXJGb3JtT3BlbicpO1xyXG5cdFx0dGFza0xpc3QuY2xhc3NMaXN0LnJlbW92ZSgncmVtb3ZlbWFyZ2luQWZ0ZXJGb3JtQ2xvc2UnKTtcclxuXHRcdGFkZFByb2plY3RCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gY2xvc2VGb3JtKCkge1xyXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUZvcm1cIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cdFx0dGFza0xpc3QuY2xhc3NMaXN0LmFkZCgncmVtb3ZlbWFyZ2luQWZ0ZXJGb3JtQ2xvc2UnKTtcclxuXHRcdHRhc2tMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FkZG1hcmdpbkFmdGVyRm9ybU9wZW4nKTtcclxuXHRcdGFkZFByb2plY3RCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGFkZE1hcmdpbigpIHtcclxuXHRcdHRhc2tMaXN0LmNsYXNzTGlzdC50b2dnbGUoJ2FkZG1hcmdpbkFmdGVyQ2xpY2snKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGFkZFRhc2soKSB7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15VGFza3NcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHRcdGFkZFRhc2tCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gY2xvc2VUYXNrRm9ybSgpIHtcclxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlUYXNrc1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblx0fVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdWlfdXg7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vc3R5bGUvc3R5bGVzLmNzcyc7XHJcbmltcG9ydCBET01JbnRlcmZhY2UgZnJvbSAnLi9ET01JbnRlcmZhY2UuanMnO1xyXG5pbXBvcnQgdWlfdXggZnJvbSAnLi91aS11eC5qcyc7XHJcbmltcG9ydCBkZWxldGVQcm9qZWN0IGZyb20gJy4vZGVsZXRlUHJvamVjdC5qcyc7XHJcbmltcG9ydCBjcmVhdGVQcm9qZWN0cyBmcm9tICcuL2NyZWF0ZVByb2plY3RzLmpzJztcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBET01JbnRlcmZhY2UpO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgdWlfdXgpO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZGVsZXRlUHJvamVjdCk7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBjcmVhdGVQcm9qZWN0cyk7XHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==