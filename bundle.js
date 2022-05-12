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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n\t--clr-primary: rgb(41, 145, 255);\r\n\t--clr-lightGray: rgb(232, 232, 232);\r\n\t--clr-light: #f4f4f4;\r\n\t--clr-dark: rgb(58, 58, 58);\r\n\t--clr-white: rgb(252, 252, 252);\r\n\t--clr-warning: #e97560;\r\n\t--clr-navHighlight: #4f7794d0;\r\n\t--clr-mineShaft: #232323;\r\n\t--clr-gallery: #ededed;\r\n\t--clr-elfGreen: #058179;\r\n\t--clr-nebula: #cbdbda;\r\n\t--clr-completedTask: #a5b1c0;\r\n\t--clr-delete: #ff494962;\r\n}\r\n\r\nhtml {\r\n\tfont-family: 'Source Sans Pro', sans-serif;\r\n\r\n}\r\n\r\nbody {\r\n\tpadding-bottom: 10%;\r\n\tmargin: 0;\r\n\tbackground: var(--clr-nebula);\r\n\tcolor: var(--clr-mineShaft);\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\t\r\n}\r\n\r\nh1 {\r\n\tcolor: var(--clr-dark);\r\n\tfont-size: 3rem;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-self: center;\r\n\talign-items: center;\r\n\tmargin: -0.5em 0.5em 0.5em 40.5%;\r\n\tz-index: 2;\r\n\tposition: absolute;\r\n}\r\n\r\n.hideH1 {\r\n\tdisplay: none;\r\n}\r\n\r\nh2 {\r\n\tmargin-bottom: 0px;\r\n}\r\n\r\n#container {\r\n\tmargin-right: -18%;\r\n\tmargin-top: 50px;\r\n\tpadding-left: 1%;\r\n\tdisplay: grid;\r\n\tjustify-content: space-around;\r\n\tgrid-template-columns: 1fr;\r\n\tgrid-template-rows: auto;\r\n\tgrid-template-areas: \r\n\t  \"projects\"\r\n\t  \"tasks\"\r\n\t  \"logo\";\r\n} \r\n\r\n#gitLogoDivContainer {\r\n\tgrid-area: logo;\r\n\tmargin-top: 30px;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-self: center;\r\n\talign-items: center;\r\n}\r\n\r\n.gitLogo {\r\n\twidth: 85px;\r\n\theight: 85px;\r\n}\r\n\r\n#navContainer {\r\n\t/* display: flex;\r\n\tflex-direction: column; */\r\n\tposition: relative;\r\n\tmargin-bottom: 10vw;\r\n\tgrid-area: projects;\r\n}\r\n\r\n#menuToggle {\r\n\tdisplay: block;\r\n\tposition: relative;\r\n\tmax-width: 50vw;\r\n\ttop: 50px;\r\n\tleft: 50px;\r\n\tz-index: 1;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n}\r\n\r\n#menuToggle li {\r\n\ttext-decoration: none;\r\n\t-webkit-transition: color 0.3s ease;\r\n\t-o-transition: color 0.3s ease;\r\n\ttransition: color 0.3s ease;\r\n\tpadding: 10px 0px 10px 50px;\r\n\tfont-size: 22px;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n\r\n#menuToggle li:hover {\r\n\tfont-weight: 700;\r\n}\r\n\r\n\r\n/* The hamburger button hidden inside an #inputMenu element */\r\n#menuToggle #inputMenu {\r\n\tdisplay: block;\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tposition: absolute;\r\n\ttop: -7px;\r\n\tleft: -5px;\r\n\tpadding: 0;\r\n\tcursor: pointer;\r\n\t\r\n\topacity: 0;\r\n\t/* hide this */\r\n\tz-index: 2;\r\n\t/* and place it over the hamburger */\r\n\t-webkit-touch-callout: none;\r\n}\r\n\r\n#menuToggle #labelMenu {\r\n\tposition: relative;\r\n\tdisplay: block;\r\n\twidth: 30px;\r\n\theight: 30px;\r\n}\r\n\r\n#menuToggle #labelMenu span {\r\n\tdisplay: none;\r\n}\r\n\r\n/*\r\n * Hamburger\r\n */\r\n#menuToggle #labelMenu div {\r\n\tdisplay: block;\r\n\twidth: 30px;\r\n\theight: 2px;\r\n\tmargin-bottom: 6px;\r\n\tposition: relative;\r\n\tbackground: var(--clr-elfGreen);\r\n\tborder-radius: 5px;\r\n\tz-index: 1;\r\n\t-webkit-transform-origin: 4px 0px;\r\n\t-ms-transform-origin: 4px 0px;\r\n\ttransform-origin: 4px 0px;\r\n\t-webkit-transition: all 0.3s ease;\r\n\t-o-transition: all 0.3s ease;\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n#menuToggle #labelMenu div:first-child {\r\n\t-webkit-transform-origin: 0% 100%;\r\n\t-ms-transform-origin: 0% 100%;\r\n\ttransform-origin: 0% 100%;\r\n}\r\n\r\n#menuToggle #labelMenu div:nth-child(2) {\r\n\t-webkit-transform-origin: 0% 0%;\r\n\t-ms-transform-origin: 0% 0%;\r\n\ttransform-origin: 0% 0%;\r\n}\r\n\r\n/* \r\n * Change the color of the hamburger when toggled\r\n */\r\n#menuToggle #inputMenu:checked+#labelMenu div {\r\n\tbackground: var(--clr-mineShaft);\r\n\t\r\n}\r\n\r\n/*\r\n * Use absolute positioning to place the menu off-screen\r\n */\r\n#menu {\r\n\tposition: relative;\r\n\twidth: 100vw;\r\n\tmax-width: 900px;\r\n\tmargin: -80px 0 0 -50px;\r\n\tpadding: 50px 0px 50px 0px;\r\n\tpadding-top: 125px;\r\n\tbackground: var(--clr-light);\r\n\tbox-shadow: \r\n\t\t\t\t0 2.8px 2.2px rgba(0, 0, 0, 0.034),\r\n\t\t\t\t0 6.7px 5.3px rgba(0, 0, 0, 0.048),\r\n\t\t\t\t0 12.5px 10px rgba(0, 0, 0, 0.06),\r\n\t\t\t\t0 22.3px 17.9px rgba(0, 0, 0, 0.072),\r\n\t\t\t\t0 41.8px 33.4px rgba(0, 0, 0, 0.086);\r\n\tborder-radius: 20px;\r\n\tlist-style-type: none;\r\n\t/* Hide the menu off-screen to the left */\r\n\tleft: 0;\r\n\t-webkit-transition: left 0.3s ease;\r\n\t-o-transition: left 0.3s ease;\r\n\ttransition: left 0.3s ease;\r\n}\r\n\r\n\r\n\r\n/*\r\n * Slide the menu in from left when the #inputMenu is checked\r\n */\r\n#menuToggle #inputMenu:checked~ul {\r\n\r\n\ttransition: left 0.3s ease;\r\n\tleft: -200%;\r\n}\r\n\r\n.list-img {\r\n\twidth: 1.7em;\r\n\tpadding-right: 10px;\r\n}\r\n\r\n.active-list {\r\n\tbackground-color: var(--clr-elfGreen);\r\n\tborder-radius: 35px;\r\n\tmargin: 0px 25px 0px 25px;\r\n\tcolor: var(--clr-light);\r\n}\r\n\r\n#myForm {\r\n\tdisplay: none;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tmargin-top: 1.8em;\r\n\ttransition: all 0.3s ease;\r\n\t\r\n}\r\n\r\n#myForm form, #myTasks form {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tfont-size: 1.3em;\r\n\tbackground-color: var(--clr-white);\r\n\tborder: 1px solid var(--clr-elfGreen);\r\n\twidth: 15em;\r\n\tpadding: 2em .6em 1.5em .6em;\r\n\tborder-radius: 20px;\r\n}\r\n\r\n#addProjectForm {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n}\r\n\r\n#addProjectButton {\r\n\tmargin-top: 30px;\r\n\tbackground-color: var(--clr-elfGreen);\r\n\tcolor: var(--clr-light);\r\n\tborder: none;\r\n\tborder-radius: 42px;\r\n\tfont-size: 1.4em;\r\n\tpadding: 2% 10% 2% 8%;\r\n\tfont-family: 'Source Sans Pro', sans-serif;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n#addProjectButton:hover {\r\n\tcolor: var(--clr-light);\r\n\topacity: 0.8;\r\n}\r\n\r\n#addProjectButton span {\r\n\tfont-size: 1.6em;\r\n\tfont-weight: 300;\r\n\tpadding: 0px 10px 0px 3px;\r\n\t\r\n}\r\n\r\n#submitBtn, #taskSubmitButton {\r\n \tfont-family: 'Source Sans Pro', sans-serif;\r\n \tbackground-color: var(--clr-elfGreen);\r\n \tcolor: var(--clr-light);\r\n \tborder: none;\r\n \tborder-radius: 32px;\r\n \tfont-size: 1em;\r\n \tpadding: 2% 30% 2% 30%;\r\n\t transition: all 0.3s ease;\r\n}\r\n\r\n#submitBtn:hover, #taskSubmitBtn:hover {\r\n\topacity: 0.8;\r\n}\r\n\r\n#projectLabel, #taskLabel {\r\n\tfont-size: 1.3em;\r\n\tfont-weight: 700;\r\n}\r\n\r\n#projectInput, #taskInput {\r\n\tfont-size: 0.8em;\r\n\tfont-weight: 400;\r\n\tfont-family: 'Source Sans Pro', sans-serif;\r\n\tborder-radius: 15px;\r\n\tpadding: 0px 15px 0px 15px;\r\n}\r\n\r\n.deleteProjectBtn {\r\n\tborder: 1px solid var(--clr-mineShaft);\r\n\tbackground: var(--clr-warning);\r\n\tborder-radius: 20px;\r\n\tpadding: 3px 7px 2px 7px;\r\n\tfont-size: 0.7em;\r\n\tdisplay: flex;\r\n\tmargin: 0.5% 2% 0 2%;\r\n\tcursor: pointer;\r\n\tfont-weight: 300;\r\n}\r\n\r\n#taskList {\r\n\tgrid-area: tasks;\r\n\t/* margin-bottom: 130vh; */\r\n\t/* margin-top: 50vh; */\r\n}\r\n\r\n.todo-list {\r\n\ttransition: all 0.3s ease;\r\n\tmargin-top: 5em;\r\n\tbackground: var(--clr-gallery);\r\n\tborder-radius: 20px;\r\n\twidth: 100vw;\r\n\tmax-width: 900px;\r\n\tpadding-top: 3%;\r\n\tpadding-bottom: 1%;\r\n\tbox-shadow: \r\n\t\t\t\t0 2.8px 2.2px rgba(0, 0, 0, 0.034),\r\n\t\t\t\t0 6.7px 5.3px rgba(0, 0, 0, 0.048),\r\n\t\t\t\t0 12.5px 10px rgba(0, 0, 0, 0.06),\r\n\t\t\t\t0 22.3px 17.9px rgba(0, 0, 0, 0.072),\r\n\t\t\t\t0 41.8px 33.4px rgba(0, 0, 0, 0.086),\r\n\t\t\t\t0 100px 80px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.addMarginAfterClick {\r\n\tmargin-top: 26vh;\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n.removeMarginAfterClick {\r\n\ttransform: translateY(-70%);\r\n\t/* margin-top: -10vh; */\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n\r\n.todo-header {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tbackground-color: var(--clr-light);\r\n\tborder: 1px solid var(--clr-elfGreen);\r\n\tborder-radius: 20px;\r\n\tmargin: 0% 5% 5% 5%;\r\n}\r\n\r\n.task-count {\r\n\tcolor: var(--clr-primary);\r\n}\r\n\r\n.todo-body {\r\n\tbackground-color: var(--clr-light);\r\n\tborder: 1px solid var(--clr-elfGreen);\r\n\tborder-radius: 20px;\r\n\tpadding: 5% 1% 0% 1%;\r\n\tmargin: 5%;\r\n}\r\n\r\n#myTasks {\r\n\tdisplay: none;\r\n}\r\n\r\n#addTaskButton {\r\n\tfont-family: 'Source Sans Pro', sans-serif;\r\n \tbackground-color: var(--clr-elfGreen);\r\n \tcolor: var(--clr-light);\r\n \tborder: none;\r\n \tborder-radius: 32px;\r\n \tfont-size: 1.1em;\r\n \tpadding: 2% 10% 2% 4%;\r\n\t display: flex;\r\n\t align-items: center;\r\n\t margin-bottom: 20px;\r\n\t transition: all 0.3s ease;\r\n}\r\n\r\n#addTaskButton:hover {\r\n\topacity: 0.8;\r\n}\r\n\r\n#addTaskButton span {\r\n\tfont-size: 1.5em;\r\n\tfont-weight: 400;\r\n\tpadding: 0px 10px 0px 13px;\r\n}\r\n\r\n#createTaskContainer {\r\n\tborder-radius: 20px;\r\n\tpadding: 5%;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n}\r\n\r\n\r\n#tasksContainer {\r\n\tborder-radius: 20px;\r\n\tmargin-bottom: 15px;\r\n}\r\n\r\n#tasksContainer input[type=\"checkbox\"] {\r\n\tposition: relative;\r\n\tborder: 2px solid var(--clr-mineShaft);\r\n\tborder-radius: 14px;\r\n\tappearance: none;\r\n\toutline: 0;\r\n\tcursor: pointer;\r\n\ttransition: background 175ms cubic-bezier(0.1, 0.1, 0.25, 1);\r\n}\r\n\r\n#tasksContainer input[type=\"checkbox\"]::before {\r\n\tposition: absolute;\r\n\tcontent: '';\r\n\tdisplay: block;\r\n    top: -6px;\r\n    left: 9px;\r\n    width: 8px;\r\n    height: 21px;\r\n\tborder-style: solid;\r\n\tborder-color: var(--clr-mineShaft);\r\n\tborder-width: 0 3px 3px 0;\r\n\ttransform: rotate(45deg);\r\n\topacity: 0;\r\n}\r\n\r\n#tasksContainer input[type=\"checkbox\"]:checked {\r\n\tcolor: var(--clr-mineShaft);\r\n\tborder-color: var(--clr-mineShaft);\r\n\tbackground: var(--clr-primary);\r\n}\r\n\r\n#tasksContainer input[type=\"checkbox\"]:checked::before {\r\n\topacity: 1;\r\n}\r\n\r\n#tasksContainer input[type=\"checkbox\"]:checked ~ label::before {\r\n\tclip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\r\n}\r\n\r\n#tasksContainer label {\r\n\tposition: relative;\r\n\tcursor: pointer;\r\n\tfont-size: 1.3em;\r\n\tfont-weight: 400;\r\n\tpadding: 0 0.45em 0;\r\n\tuser-select: none;\r\n\r\n}\r\n\r\n#tasksContainer label::before {\r\n\tposition: absolute;\r\n\tcontent: attr(data-content);\r\n\tcolor: var(--clr-completedTask);\r\n\tclip-path: polygon(0 0, 0 0, 0% 100%, 0 100%);\r\n\ttext-decoration: line-through;\r\n\ttext-decoration-thickness: 3px;\r\n\ttext-decoration-color: var(--clr-dark);\r\n\ttop: 0px;\r\n\ttransition: clip-path 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);\r\n}\r\n\r\n.task label {\r\n\tbottom: 0px;\r\n}\r\n\r\n.task {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tbackground-color: var(--clr-gallery);\r\n\tborder: 1px solid var(--clr-primary);\r\n\tmargin: 2%;\r\n\tpadding: 2%;\r\n\tborder-radius: 10px;\r\n}\r\n\r\n#tasksContainer .task input {\r\n\theight: 25px;\r\n\twidth: 25px;\r\n\tmin-width: 25px;\r\n}\r\n\r\n#tasksContainer input:hover {\r\n\tborder: 2px solid var(--clr-primary);\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n.delete-stuff {\r\n\tdisplay: flex;\r\n\tflex-direction: column;}\r\n\r\n.delete-stuff button {\r\n\tfont-family: 'Source Sans Pro', sans-serif;\r\n\tborder: none;\r\n\tmargin: 0.5em;\r\n\tborder-radius: 12px;\r\n\tfont-size: 1em;\r\n\tpadding: 0.11em 1em 0.11em 1em;\r\n\ttransition: all 0.3s ease;\r\n}\r\n.delete-stuff button:hover {\r\n\topacity: 0.8;\r\n}\r\n\r\n#clearBtn {\r\n\tbackground-color: var(--clr-navHighlight);\r\n\tcolor: var(--clr-mineShaft);\r\n}\r\n\r\n#deleteBtn {\r\n\tbackground-color: var(--clr-delete);\r\n\tcolor: var(--clr-mineShaft);\r\n}\r\n\r\n@media (min-width: 375px) {\r\n\t#menu, #taskList {\r\n\t\twidth: 92vw;\r\n\t}\r\n\t#container {\r\n\t\tmargin-right: 0%;\r\n\t\tmargin-left: 0%;\r\n\t\tpadding-left: 1%;\r\n\t}\r\n}\r\n\r\n@media (min-width: 1100px) {\r\n\t#container {\r\n\t\tmargin-right: 0%;\r\n\t\tmargin-left: 0%;\r\n\t}\r\n\r\n\t\r\n}\r\n\r\n@media (min-width: 1400px) {\r\n\t.todo-list{\r\n\t\tmargin-top: 0em;\r\n\t}\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://./src/style/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n\t--clr-primary: rgb(41, 145, 255);\r\n\t--clr-lightGray: rgb(232, 232, 232);\r\n\t--clr-light: #f4f4f4;\r\n\t--clr-dark: rgb(58, 58, 58);\r\n\t--clr-white: rgb(252, 252, 252);\r\n\t--clr-warning: #e97560;\r\n\t--clr-navHighlight: #4f7794d0;\r\n\t--clr-mineShaft: #232323;\r\n\t--clr-gallery: #ededed;\r\n\t--clr-elfGreen: #058179;\r\n\t--clr-nebula: #cbdbda;\r\n\t--clr-completedTask: #a5b1c0;\r\n\t--clr-delete: #ff494962;\r\n}\r\n\r\nhtml {\r\n\tfont-family: 'Source Sans Pro', sans-serif;\r\n\r\n}\r\n\r\nbody {\r\n\tpadding-bottom: 10%;\r\n\tmargin: 0;\r\n\tbackground: var(--clr-nebula);\r\n\tcolor: var(--clr-mineShaft);\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\t\r\n}\r\n\r\nh1 {\r\n\tcolor: var(--clr-dark);\r\n\tfont-size: 3rem;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-self: center;\r\n\talign-items: center;\r\n\tmargin: -0.5em 0.5em 0.5em 40.5%;\r\n\tz-index: 2;\r\n\tposition: absolute;\r\n}\r\n\r\n.hideH1 {\r\n\tdisplay: none;\r\n}\r\n\r\nh2 {\r\n\tmargin-bottom: 0px;\r\n}\r\n\r\n#container {\r\n\tmargin-right: -18%;\r\n\tmargin-top: 50px;\r\n\tpadding-left: 1%;\r\n\tdisplay: grid;\r\n\tjustify-content: space-around;\r\n\tgrid-template-columns: 1fr;\r\n\tgrid-template-rows: auto;\r\n\tgrid-template-areas: \r\n\t  \"projects\"\r\n\t  \"tasks\"\r\n\t  \"logo\";\r\n} \r\n\r\n#gitLogoDivContainer {\r\n\tgrid-area: logo;\r\n\tmargin-top: 30px;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-self: center;\r\n\talign-items: center;\r\n}\r\n\r\n.gitLogo {\r\n\twidth: 85px;\r\n\theight: 85px;\r\n}\r\n\r\n#navContainer {\r\n\t/* display: flex;\r\n\tflex-direction: column; */\r\n\tposition: relative;\r\n\tmargin-bottom: 10vw;\r\n\tgrid-area: projects;\r\n}\r\n\r\n#menuToggle {\r\n\tdisplay: block;\r\n\tposition: relative;\r\n\tmax-width: 50vw;\r\n\ttop: 50px;\r\n\tleft: 50px;\r\n\tz-index: 1;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n}\r\n\r\n#menuToggle li {\r\n\ttext-decoration: none;\r\n\t-webkit-transition: color 0.3s ease;\r\n\t-o-transition: color 0.3s ease;\r\n\ttransition: color 0.3s ease;\r\n\tpadding: 10px 0px 10px 50px;\r\n\tfont-size: 22px;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n\r\n#menuToggle li:hover {\r\n\tfont-weight: 700;\r\n}\r\n\r\n\r\n/* The hamburger button hidden inside an #inputMenu element */\r\n#menuToggle #inputMenu {\r\n\tdisplay: block;\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tposition: absolute;\r\n\ttop: -7px;\r\n\tleft: -5px;\r\n\tpadding: 0;\r\n\tcursor: pointer;\r\n\t\r\n\topacity: 0;\r\n\t/* hide this */\r\n\tz-index: 2;\r\n\t/* and place it over the hamburger */\r\n\t-webkit-touch-callout: none;\r\n}\r\n\r\n#menuToggle #labelMenu {\r\n\tposition: relative;\r\n\tdisplay: block;\r\n\twidth: 30px;\r\n\theight: 30px;\r\n}\r\n\r\n#menuToggle #labelMenu span {\r\n\tdisplay: none;\r\n}\r\n\r\n/*\r\n * Hamburger\r\n */\r\n#menuToggle #labelMenu div {\r\n\tdisplay: block;\r\n\twidth: 30px;\r\n\theight: 2px;\r\n\tmargin-bottom: 6px;\r\n\tposition: relative;\r\n\tbackground: var(--clr-elfGreen);\r\n\tborder-radius: 5px;\r\n\tz-index: 1;\r\n\t-webkit-transform-origin: 4px 0px;\r\n\t-ms-transform-origin: 4px 0px;\r\n\ttransform-origin: 4px 0px;\r\n\t-webkit-transition: all 0.3s ease;\r\n\t-o-transition: all 0.3s ease;\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n#menuToggle #labelMenu div:first-child {\r\n\t-webkit-transform-origin: 0% 100%;\r\n\t-ms-transform-origin: 0% 100%;\r\n\ttransform-origin: 0% 100%;\r\n}\r\n\r\n#menuToggle #labelMenu div:nth-child(2) {\r\n\t-webkit-transform-origin: 0% 0%;\r\n\t-ms-transform-origin: 0% 0%;\r\n\ttransform-origin: 0% 0%;\r\n}\r\n\r\n/* \r\n * Change the color of the hamburger when toggled\r\n */\r\n#menuToggle #inputMenu:checked+#labelMenu div {\r\n\tbackground: var(--clr-mineShaft);\r\n\t\r\n}\r\n\r\n/*\r\n * Use absolute positioning to place the menu off-screen\r\n */\r\n#menu {\r\n\tposition: relative;\r\n\twidth: 100vw;\r\n\tmax-width: 900px;\r\n\tmargin: -80px 0 0 -50px;\r\n\tpadding: 50px 0px 50px 0px;\r\n\tpadding-top: 125px;\r\n\tbackground: var(--clr-light);\r\n\tbox-shadow: \r\n\t\t\t\t0 2.8px 2.2px rgba(0, 0, 0, 0.034),\r\n\t\t\t\t0 6.7px 5.3px rgba(0, 0, 0, 0.048),\r\n\t\t\t\t0 12.5px 10px rgba(0, 0, 0, 0.06),\r\n\t\t\t\t0 22.3px 17.9px rgba(0, 0, 0, 0.072),\r\n\t\t\t\t0 41.8px 33.4px rgba(0, 0, 0, 0.086);\r\n\tborder-radius: 20px;\r\n\tlist-style-type: none;\r\n\t/* Hide the menu off-screen to the left */\r\n\tleft: 0;\r\n\t-webkit-transition: left 0.3s ease;\r\n\t-o-transition: left 0.3s ease;\r\n\ttransition: left 0.3s ease;\r\n}\r\n\r\n\r\n\r\n/*\r\n * Slide the menu in from left when the #inputMenu is checked\r\n */\r\n#menuToggle #inputMenu:checked~ul {\r\n\r\n\ttransition: left 0.3s ease;\r\n\tleft: -200%;\r\n}\r\n\r\n.list-img {\r\n\twidth: 1.7em;\r\n\tpadding-right: 10px;\r\n}\r\n\r\n.active-list {\r\n\tbackground-color: var(--clr-elfGreen);\r\n\tborder-radius: 35px;\r\n\tmargin: 0px 25px 0px 25px;\r\n\tcolor: var(--clr-light);\r\n}\r\n\r\n#myForm {\r\n\tdisplay: none;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tmargin-top: 1.8em;\r\n\ttransition: all 0.3s ease;\r\n\t\r\n}\r\n\r\n#myForm form, #myTasks form {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tfont-size: 1.3em;\r\n\tbackground-color: var(--clr-white);\r\n\tborder: 1px solid var(--clr-elfGreen);\r\n\twidth: 15em;\r\n\tpadding: 2em .6em 1.5em .6em;\r\n\tborder-radius: 20px;\r\n}\r\n\r\n#addProjectForm {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n}\r\n\r\n#addProjectButton {\r\n\tmargin-top: 30px;\r\n\tbackground-color: var(--clr-elfGreen);\r\n\tcolor: var(--clr-light);\r\n\tborder: none;\r\n\tborder-radius: 42px;\r\n\tfont-size: 1.4em;\r\n\tpadding: 2% 10% 2% 8%;\r\n\tfont-family: 'Source Sans Pro', sans-serif;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n#addProjectButton:hover {\r\n\tcolor: var(--clr-light);\r\n\topacity: 0.8;\r\n}\r\n\r\n#addProjectButton span {\r\n\tfont-size: 1.6em;\r\n\tfont-weight: 300;\r\n\tpadding: 0px 10px 0px 3px;\r\n\t\r\n}\r\n\r\n#submitBtn, #taskSubmitButton {\r\n \tfont-family: 'Source Sans Pro', sans-serif;\r\n \tbackground-color: var(--clr-elfGreen);\r\n \tcolor: var(--clr-light);\r\n \tborder: none;\r\n \tborder-radius: 32px;\r\n \tfont-size: 1em;\r\n \tpadding: 2% 30% 2% 30%;\r\n\t transition: all 0.3s ease;\r\n}\r\n\r\n#submitBtn:hover, #taskSubmitBtn:hover {\r\n\topacity: 0.8;\r\n}\r\n\r\n#projectLabel, #taskLabel {\r\n\tfont-size: 1.3em;\r\n\tfont-weight: 700;\r\n}\r\n\r\n#projectInput, #taskInput {\r\n\tfont-size: 0.8em;\r\n\tfont-weight: 400;\r\n\tfont-family: 'Source Sans Pro', sans-serif;\r\n\tborder-radius: 15px;\r\n\tpadding: 0px 15px 0px 15px;\r\n}\r\n\r\n.deleteProjectBtn {\r\n\tborder: 1px solid var(--clr-mineShaft);\r\n\tbackground: var(--clr-warning);\r\n\tborder-radius: 20px;\r\n\tpadding: 3px 7px 2px 7px;\r\n\tfont-size: 0.7em;\r\n\tdisplay: flex;\r\n\tmargin: 0.5% 2% 0 2%;\r\n\tcursor: pointer;\r\n\tfont-weight: 300;\r\n}\r\n\r\n#taskList {\r\n\tgrid-area: tasks;\r\n\t/* margin-bottom: 130vh; */\r\n\t/* margin-top: 50vh; */\r\n}\r\n\r\n.todo-list {\r\n\ttransition: all 0.3s ease;\r\n\tmargin-top: 5em;\r\n\tbackground: var(--clr-gallery);\r\n\tborder-radius: 20px;\r\n\twidth: 100vw;\r\n\tmax-width: 900px;\r\n\tpadding-top: 3%;\r\n\tpadding-bottom: 1%;\r\n\tbox-shadow: \r\n\t\t\t\t0 2.8px 2.2px rgba(0, 0, 0, 0.034),\r\n\t\t\t\t0 6.7px 5.3px rgba(0, 0, 0, 0.048),\r\n\t\t\t\t0 12.5px 10px rgba(0, 0, 0, 0.06),\r\n\t\t\t\t0 22.3px 17.9px rgba(0, 0, 0, 0.072),\r\n\t\t\t\t0 41.8px 33.4px rgba(0, 0, 0, 0.086),\r\n\t\t\t\t0 100px 80px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.addMarginAfterClick {\r\n\tmargin-top: 26vh;\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n.removeMarginAfterClick {\r\n\ttransform: translateY(-70%);\r\n\t/* margin-top: -10vh; */\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n\r\n.todo-header {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tbackground-color: var(--clr-light);\r\n\tborder: 1px solid var(--clr-elfGreen);\r\n\tborder-radius: 20px;\r\n\tmargin: 0% 5% 5% 5%;\r\n}\r\n\r\n.task-count {\r\n\tcolor: var(--clr-primary);\r\n}\r\n\r\n.todo-body {\r\n\tbackground-color: var(--clr-light);\r\n\tborder: 1px solid var(--clr-elfGreen);\r\n\tborder-radius: 20px;\r\n\tpadding: 5% 1% 0% 1%;\r\n\tmargin: 5%;\r\n}\r\n\r\n#myTasks {\r\n\tdisplay: none;\r\n}\r\n\r\n#addTaskButton {\r\n\tfont-family: 'Source Sans Pro', sans-serif;\r\n \tbackground-color: var(--clr-elfGreen);\r\n \tcolor: var(--clr-light);\r\n \tborder: none;\r\n \tborder-radius: 32px;\r\n \tfont-size: 1.1em;\r\n \tpadding: 2% 10% 2% 4%;\r\n\t display: flex;\r\n\t align-items: center;\r\n\t margin-bottom: 20px;\r\n\t transition: all 0.3s ease;\r\n}\r\n\r\n#addTaskButton:hover {\r\n\topacity: 0.8;\r\n}\r\n\r\n#addTaskButton span {\r\n\tfont-size: 1.5em;\r\n\tfont-weight: 400;\r\n\tpadding: 0px 10px 0px 13px;\r\n}\r\n\r\n#createTaskContainer {\r\n\tborder-radius: 20px;\r\n\tpadding: 5%;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n}\r\n\r\n\r\n#tasksContainer {\r\n\tborder-radius: 20px;\r\n\tmargin-bottom: 15px;\r\n}\r\n\r\n#tasksContainer input[type=\"checkbox\"] {\r\n\tposition: relative;\r\n\tborder: 2px solid var(--clr-mineShaft);\r\n\tborder-radius: 14px;\r\n\tappearance: none;\r\n\toutline: 0;\r\n\tcursor: pointer;\r\n\ttransition: background 175ms cubic-bezier(0.1, 0.1, 0.25, 1);\r\n}\r\n\r\n#tasksContainer input[type=\"checkbox\"]::before {\r\n\tposition: absolute;\r\n\tcontent: '';\r\n\tdisplay: block;\r\n    top: -6px;\r\n    left: 9px;\r\n    width: 8px;\r\n    height: 21px;\r\n\tborder-style: solid;\r\n\tborder-color: var(--clr-mineShaft);\r\n\tborder-width: 0 3px 3px 0;\r\n\ttransform: rotate(45deg);\r\n\topacity: 0;\r\n}\r\n\r\n#tasksContainer input[type=\"checkbox\"]:checked {\r\n\tcolor: var(--clr-mineShaft);\r\n\tborder-color: var(--clr-mineShaft);\r\n\tbackground: var(--clr-primary);\r\n}\r\n\r\n#tasksContainer input[type=\"checkbox\"]:checked::before {\r\n\topacity: 1;\r\n}\r\n\r\n#tasksContainer input[type=\"checkbox\"]:checked ~ label::before {\r\n\tclip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\r\n}\r\n\r\n#tasksContainer label {\r\n\tposition: relative;\r\n\tcursor: pointer;\r\n\tfont-size: 1.3em;\r\n\tfont-weight: 400;\r\n\tpadding: 0 0.45em 0;\r\n\tuser-select: none;\r\n\r\n}\r\n\r\n#tasksContainer label::before {\r\n\tposition: absolute;\r\n\tcontent: attr(data-content);\r\n\tcolor: var(--clr-completedTask);\r\n\tclip-path: polygon(0 0, 0 0, 0% 100%, 0 100%);\r\n\ttext-decoration: line-through;\r\n\ttext-decoration-thickness: 3px;\r\n\ttext-decoration-color: var(--clr-dark);\r\n\ttop: 0px;\r\n\ttransition: clip-path 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);\r\n}\r\n\r\n.task label {\r\n\tbottom: 0px;\r\n}\r\n\r\n.task {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tbackground-color: var(--clr-gallery);\r\n\tborder: 1px solid var(--clr-primary);\r\n\tmargin: 2%;\r\n\tpadding: 2%;\r\n\tborder-radius: 10px;\r\n}\r\n\r\n#tasksContainer .task input {\r\n\theight: 25px;\r\n\twidth: 25px;\r\n\tmin-width: 25px;\r\n}\r\n\r\n#tasksContainer input:hover {\r\n\tborder: 2px solid var(--clr-primary);\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n.delete-stuff {\r\n\tdisplay: flex;\r\n\tflex-direction: column;}\r\n\r\n.delete-stuff button {\r\n\tfont-family: 'Source Sans Pro', sans-serif;\r\n\tborder: none;\r\n\tmargin: 0.5em;\r\n\tborder-radius: 12px;\r\n\tfont-size: 1em;\r\n\tpadding: 0.11em 1em 0.11em 1em;\r\n\ttransition: all 0.3s ease;\r\n}\r\n.delete-stuff button:hover {\r\n\topacity: 0.8;\r\n}\r\n\r\n#clearBtn {\r\n\tbackground-color: var(--clr-navHighlight);\r\n\tcolor: var(--clr-mineShaft);\r\n}\r\n\r\n#deleteBtn {\r\n\tbackground-color: var(--clr-delete);\r\n\tcolor: var(--clr-mineShaft);\r\n}\r\n\r\n@media (min-width: 375px) {\r\n\t#menu, #taskList {\r\n\t\twidth: 92vw;\r\n\t}\r\n\t#container {\r\n\t\tmargin-right: 0%;\r\n\t\tmargin-left: 0%;\r\n\t\tpadding-left: 1%;\r\n\t}\r\n}\r\n\r\n@media (min-width: 1100px) {\r\n\t#container {\r\n\t\tmargin-right: 0%;\r\n\t\tmargin-left: 0%;\r\n\t}\r\n\r\n\t\r\n}\r\n\r\n@media (min-width: 1400px) {\r\n\t.todo-list{\r\n\t\tmargin-top: 0em;\r\n\t}\r\n}\r\n\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _images_git_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/git-logo.png */ "./src/images/git-logo.png");
// import { node } from 'webpack';


function DOMInterface() {

	//catching DOM
	let gitLogoDiv = document.getElementById('gitLogoDiv');

	let inputMenu = document.getElementById('inputMenu');

	let taskList = document.getElementById('taskList');

	//projects
	let projectSubmitButton = document.getElementById('submitBtn');
	let addProjectButton = document.getElementById('addProjectButton');
	let newProjectForm = document.getElementById('[newProjectForm]');
	let deleteProjectBtn = document.querySelectorAll('.deleteProjectBtn');
	let projectsContainer = document.getElementById('projectsContainer');
	let projectInput = document.getElementById('projectInput');
	// let listOfProjects = document.querySelectorAll('.list-name');

	
	//tasks
	let addTaskButton = document.getElementById('addTaskButton');
	let taskSubmitButton = document.getElementById('taskSubmitButton');
	let tasksContainer = document.getElementById('tasksContainer');

	
	//git logo img
	let gitLogo = document.createElement('img');
	gitLogo.src = _images_git_logo_png__WEBPACK_IMPORTED_MODULE_0__;
	gitLogo.classList.add('gitLogo');
	gitLogoDiv.appendChild(gitLogo);

	// DOM click events
	inputMenu.addEventListener('click', addMargin);
	inputMenu.addEventListener('click', hideH1);



	addTaskButton.addEventListener('click', addTask);
	addProjectButton.addEventListener('click', openForm);
	projectSubmitButton.addEventListener('click', closeForm);
	taskSubmitButton.addEventListener('click', closeTaskForm);


	//Functions for buttons and adding margin
	function openForm() {
		document.getElementById("myForm").style.display = "block";
		addProjectButton.style.display = "none";
	}

	function closeForm() {
		document.getElementById("myForm").style.display = "none";
		addProjectButton.style.display = "block";
	}


	function addMargin() {
		taskList.style.marginTop = null;
		taskList.classList.toggle('removeMarginAfterClick');
	}

	function hideH1() {
		let h1Ele = document.getElementsByTagName('h1')[0];
		h1Ele.classList.toggle('hideH1');
		
	}

	function addTask() {
		document.getElementById("myTasks").style.display = "block";
		addTaskButton.style.display = "none";
	}

	function closeTaskForm() {
		document.getElementById("myTasks").style.display = "none";
	}

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
/* harmony import */ var _deleteProjects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteProjects.js */ "./src/deleteProjects.js");



document.addEventListener('DOMContentLoaded', _DOMInterface_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
document.addEventListener('DOMContentLoaded', _deleteProjects_js__WEBPACK_IMPORTED_MODULE_1__["default"]);




function createProjects() {

	newProjectForm.addEventListener('submit', addProject);
	// newProjectForm.addEventListener('submit', saveProjects);
	// newProjectForm.addEventListener('submit', myfunction);

	//create add projects fxn

	function addProject(e) {
		e.preventDefault();
		const projectName = projectInput.value;
		if (projectName === null || projectName === '') return;
		createProject(projectName);
		projectInput.value = null;
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

		saveProjects();

	}

	//local storage


}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProjects);

/***/ }),

/***/ "./src/deleteProjects.js":
/*!*******************************!*\
  !*** ./src/deleteProjects.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOMInterface_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMInterface.js */ "./src/DOMInterface.js");

// import renderProjects from './renderProjects.js';

document.addEventListener('DOMContentLoaded', _DOMInterface_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
// document.addEventListener('DOMContentLoaded', renderProjects);


// create delete projects fxn

function deleteProject() {

	//on pressing button delete project
	
	document.body.addEventListener( 'click', function ( event ) {
		if( event.target.className == 'deleteProjectBtn' ) {
			// event.target.parentElement.remove();
			// delete project from local storage
			let projectToDelete = event.target.parentElement.getAttribute('data-project');

			localStorage.removeItem(projectToDelete);
			console.log(localStorage);
		};
	});


	
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteProject);

/***/ }),

/***/ "./src/renderProjects.js":
/*!*******************************!*\
  !*** ./src/renderProjects.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOMInterface_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMInterface.js */ "./src/DOMInterface.js");
/* harmony import */ var _createProjects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createProjects.js */ "./src/createProjects.js");
/* harmony import */ var _deleteProjects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deleteProjects.js */ "./src/deleteProjects.js");




document.addEventListener('DOMContentLoaded', _DOMInterface_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
document.addEventListener('DOMContentLoaded', _createProjects_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
document.addEventListener('DOMContentLoaded', _deleteProjects_js__WEBPACK_IMPORTED_MODULE_2__["default"]);



function renderProjects() {


	// create default projects

	let youtubeProject = document.createElement('li');
	youtubeProject.classList.add('list-name', 'active-list');
	youtubeProject.setAttribute('data-project', 'Youtube');
	youtubeProject.innerHTML = `<img class="list-img" src="../src/images/svg/list.svg" alt="list">` + `Youtube` + `<button class="deleteProjectBtn">X</button>`;

	let workProject = document.createElement('li');
	workProject.classList.add('list-name');
	workProject.setAttribute('data-project', 'Work');
	workProject.innerHTML = `<img class="list-img" src="../src/images/svg/list.svg" alt="list">` + `Work` + `<button class="deleteProjectBtn">X</button>`;

	let groceryProject = document.createElement('li');
	groceryProject.classList.add('list-name');
	groceryProject.setAttribute('data-project', 'Grocery');
	groceryProject.innerHTML = `<img class="list-img" src="../src/images/svg/list.svg" alt="list">` + `Grocery` + `<button class="deleteProjectBtn">X</button>`;

	projectsContainer.append(youtubeProject, workProject, groceryProject);


	// create default tasks
	let youtubeTasks = `
						<div class="task">
							<input type="checkbox" id="task-1" name="task-1" value="task"/>
							<label for="task-1" data-content="Record todo list video that is long">
								Record todo list video that is long
							</label>
						</div>

						<div class="task">
							<input type="checkbox" id="task-2" name="task-2" value="task"/>
							<label for="task-2" data-content="Another Task">
								Another Task
							</label>
						</div>

						<div class="task">
							<input type="checkbox" id="task-3" name="task-3" value="task"/>
							<label for="task-3" data-content="Third Task">
								Third Task
							</label>
						</div>
					`;

	let workTasks = `
						<div class="task">
							<input type="checkbox" id="task-4" name="task-4" value="task"/>
							<label for="task-4" data-content="Code a new project">
								Code a new project
							</label>
						</div>

						<div class="task">
							<input type="checkbox" id="task-5" name="task-5" value="task"/>
							<label for="task-5" data-content="Check E-mail">
								Check E-mail
							</label>
						</div>

						<div class="task">
							<input type="checkbox" id="task-6" name="task-6" value="task"/>
							<label for="task-6" data-content="Call John Doe">
								Call John Doe
							</label>
						</div>
					`;

	let groceryTasks = `
	
						<div class="task">
							<input type="checkbox" id="task-7" name="task-7" value="task"/>
							<label for="task-7" data-content="Buy milk">
								Buy milk
							</label>
						</div>

						<div class="task">
							<input type="checkbox" id="task-8" name="task-8" value="task"/>
							<label for="task-8" data-content="Buy eggs">
								Buy eggs
							</label>
						</div>

						<div class="task">
							<input type="checkbox" id="task-9" name="task-9" value="task"/>
							<label for="task-9" data-content="Buy bread">
								Buy bread
							</label>
						</div>
					`;

							


	tasksContainer.innerHTML = `${youtubeTasks}`;


	//select project
	document.body.addEventListener( 'click', function ( event ) {
		if( event.target.className == 'list-name' || event.target.className == 'list-name active-list' ) {
			let allProjects = projectsContainer.children;
			for (let project of allProjects) {
				project.classList.remove('active-list');
			}
			event.target.classList.toggle('active-list');

		};
	});


	//add project to local storage

	//default project

	getdefaultProjects();

	function getdefaultProjects() {

		localStorage.setItem(youtubeProject.getAttribute('data-project'), JSON.stringify(youtubeProject));
		localStorage.setItem(workProject.getAttribute('data-project'), JSON.stringify(workProject));
		localStorage.setItem(groceryProject.getAttribute('data-project'), JSON.stringify(groceryProject));

	}



	
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderProjects);

/***/ }),

/***/ "./src/images/git-logo.png":
/*!*********************************!*\
  !*** ./src/images/git-logo.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d8c6d6c90bdccf76d860.png";

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
/* harmony import */ var _createProjects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createProjects.js */ "./src/createProjects.js");
/* harmony import */ var _deleteProjects_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deleteProjects.js */ "./src/deleteProjects.js");
/* harmony import */ var _renderProjects_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderProjects.js */ "./src/renderProjects.js");







document.addEventListener('DOMContentLoaded', _DOMInterface_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
document.addEventListener('DOMContentLoaded', _createProjects_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
document.addEventListener('DOMContentLoaded', _deleteProjects_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
document.addEventListener('DOMContentLoaded', _renderProjects_js__WEBPACK_IMPORTED_MODULE_4__["default"]);





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxLQUFLLEtBQUssYUFBYSxPQUFPLE1BQU0sS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsVUFBVSxPQUFPLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsU0FBUyxNQUFNLEtBQUssTUFBTSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsY0FBYyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFFBQVEsS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLGtCQUFrQixNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFP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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5STdCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZjRCO0FBQ2lCO0FBQ0k7QUFDQTtBQUNBO0FBQ2pEO0FBQ0E7QUFDQSw4Q0FBOEMsd0RBQVk7QUFDMUQsOENBQThDLDBEQUFjO0FBQzVELDhDQUE4QywwREFBYztBQUM1RCw4Q0FBOEMsMERBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZW1lbnQtYXBwLy4vc3JjL3N0eWxlL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VtZW50LWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VtZW50LWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlbWVudC1hcHAvLi9zcmMvc3R5bGUvc3R5bGVzLmNzcz9hZjdjIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlbWVudC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VtZW50LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VtZW50LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZW1lbnQtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlbWVudC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZW1lbnQtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VtZW50LWFwcC8uL3NyYy9ET01JbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VtZW50LWFwcC8uL3NyYy9jcmVhdGVQcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZW1lbnQtYXBwLy4vc3JjL2RlbGV0ZVByb2plY3RzLmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlbWVudC1hcHAvLi9zcmMvcmVuZGVyUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VtZW50LWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZW1lbnQtYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlbWVudC1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlbWVudC1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZW1lbnQtYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VtZW50LWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlbWVudC1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VtZW50LWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG5cXHQtLWNsci1wcmltYXJ5OiByZ2IoNDEsIDE0NSwgMjU1KTtcXHJcXG5cXHQtLWNsci1saWdodEdyYXk6IHJnYigyMzIsIDIzMiwgMjMyKTtcXHJcXG5cXHQtLWNsci1saWdodDogI2Y0ZjRmNDtcXHJcXG5cXHQtLWNsci1kYXJrOiByZ2IoNTgsIDU4LCA1OCk7XFxyXFxuXFx0LS1jbHItd2hpdGU6IHJnYigyNTIsIDI1MiwgMjUyKTtcXHJcXG5cXHQtLWNsci13YXJuaW5nOiAjZTk3NTYwO1xcclxcblxcdC0tY2xyLW5hdkhpZ2hsaWdodDogIzRmNzc5NGQwO1xcclxcblxcdC0tY2xyLW1pbmVTaGFmdDogIzIzMjMyMztcXHJcXG5cXHQtLWNsci1nYWxsZXJ5OiAjZWRlZGVkO1xcclxcblxcdC0tY2xyLWVsZkdyZWVuOiAjMDU4MTc5O1xcclxcblxcdC0tY2xyLW5lYnVsYTogI2NiZGJkYTtcXHJcXG5cXHQtLWNsci1jb21wbGV0ZWRUYXNrOiAjYTViMWMwO1xcclxcblxcdC0tY2xyLWRlbGV0ZTogI2ZmNDk0OTYyO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG5cXHRmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcblxcdHBhZGRpbmctYm90dG9tOiAxMCU7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdGJhY2tncm91bmQ6IHZhcigtLWNsci1uZWJ1bGEpO1xcclxcblxcdGNvbG9yOiB2YXIoLS1jbHItbWluZVNoYWZ0KTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdFxcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWNsci1kYXJrKTtcXHJcXG5cXHRmb250LXNpemU6IDNyZW07XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRtYXJnaW46IC0wLjVlbSAwLjVlbSAwLjVlbSA0MC41JTtcXHJcXG5cXHR6LWluZGV4OiAyO1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGVIMSB7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcblxcdG1hcmdpbi1ib3R0b206IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhaW5lciB7XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiAtMTglO1xcclxcblxcdG1hcmdpbi10b3A6IDUwcHg7XFxyXFxuXFx0cGFkZGluZy1sZWZ0OiAxJTtcXHJcXG5cXHRkaXNwbGF5OiBncmlkO1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcblxcdGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXHJcXG5cXHRncmlkLXRlbXBsYXRlLWFyZWFzOiBcXHJcXG5cXHQgIFxcXCJwcm9qZWN0c1xcXCJcXHJcXG5cXHQgIFxcXCJ0YXNrc1xcXCJcXHJcXG5cXHQgIFxcXCJsb2dvXFxcIjtcXHJcXG59IFxcclxcblxcclxcbiNnaXRMb2dvRGl2Q29udGFpbmVyIHtcXHJcXG5cXHRncmlkLWFyZWE6IGxvZ287XFxyXFxuXFx0bWFyZ2luLXRvcDogMzBweDtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2l0TG9nbyB7XFxyXFxuXFx0d2lkdGg6IDg1cHg7XFxyXFxuXFx0aGVpZ2h0OiA4NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbmF2Q29udGFpbmVyIHtcXHJcXG5cXHQvKiBkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdG1hcmdpbi1ib3R0b206IDEwdnc7XFxyXFxuXFx0Z3JpZC1hcmVhOiBwcm9qZWN0cztcXHJcXG59XFxyXFxuXFxyXFxuI21lbnVUb2dnbGUge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRtYXgtd2lkdGg6IDUwdnc7XFxyXFxuXFx0dG9wOiA1MHB4O1xcclxcblxcdGxlZnQ6IDUwcHg7XFxyXFxuXFx0ei1pbmRleDogMTtcXHJcXG5cXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcclxcblxcdC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuXFx0LW1zLXVzZXItc2VsZWN0OiBub25lO1xcclxcblxcdHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudVRvZ2dsZSBsaSB7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xcclxcblxcdC1vLXRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcXHJcXG5cXHR0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XFxyXFxuXFx0cGFkZGluZzogMTBweCAwcHggMTBweCA1MHB4O1xcclxcblxcdGZvbnQtc2l6ZTogMjJweDtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNtZW51VG9nZ2xlIGxpOmhvdmVyIHtcXHJcXG5cXHRmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBUaGUgaGFtYnVyZ2VyIGJ1dHRvbiBoaWRkZW4gaW5zaWRlIGFuICNpbnB1dE1lbnUgZWxlbWVudCAqL1xcclxcbiNtZW51VG9nZ2xlICNpbnB1dE1lbnUge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdHdpZHRoOiAzMHB4O1xcclxcblxcdGhlaWdodDogMzBweDtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0dG9wOiAtN3B4O1xcclxcblxcdGxlZnQ6IC01cHg7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0XFxyXFxuXFx0b3BhY2l0eTogMDtcXHJcXG5cXHQvKiBoaWRlIHRoaXMgKi9cXHJcXG5cXHR6LWluZGV4OiAyO1xcclxcblxcdC8qIGFuZCBwbGFjZSBpdCBvdmVyIHRoZSBoYW1idXJnZXIgKi9cXHJcXG5cXHQtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNtZW51VG9nZ2xlICNsYWJlbE1lbnUge1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHR3aWR0aDogMzBweDtcXHJcXG5cXHRoZWlnaHQ6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbiNtZW51VG9nZ2xlICNsYWJlbE1lbnUgc3BhbiB7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiBIYW1idXJnZXJcXHJcXG4gKi9cXHJcXG4jbWVudVRvZ2dsZSAjbGFiZWxNZW51IGRpdiB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0d2lkdGg6IDMwcHg7XFxyXFxuXFx0aGVpZ2h0OiAycHg7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogNnB4O1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1jbHItZWxmR3JlZW4pO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHR6LWluZGV4OiAxO1xcclxcblxcdC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNHB4IDBweDtcXHJcXG5cXHQtbXMtdHJhbnNmb3JtLW9yaWdpbjogNHB4IDBweDtcXHJcXG5cXHR0cmFuc2Zvcm0tb3JpZ2luOiA0cHggMHB4O1xcclxcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG5cXHQtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbiNtZW51VG9nZ2xlICNsYWJlbE1lbnUgZGl2OmZpcnN0LWNoaWxkIHtcXHJcXG5cXHQtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAlIDEwMCU7XFxyXFxuXFx0LW1zLXRyYW5zZm9ybS1vcmlnaW46IDAlIDEwMCU7XFxyXFxuXFx0dHJhbnNmb3JtLW9yaWdpbjogMCUgMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuI21lbnVUb2dnbGUgI2xhYmVsTWVudSBkaXY6bnRoLWNoaWxkKDIpIHtcXHJcXG5cXHQtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xcclxcblxcdC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcXHJcXG5cXHR0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyogXFxyXFxuICogQ2hhbmdlIHRoZSBjb2xvciBvZiB0aGUgaGFtYnVyZ2VyIHdoZW4gdG9nZ2xlZFxcclxcbiAqL1xcclxcbiNtZW51VG9nZ2xlICNpbnB1dE1lbnU6Y2hlY2tlZCsjbGFiZWxNZW51IGRpdiB7XFxyXFxuXFx0YmFja2dyb3VuZDogdmFyKC0tY2xyLW1pbmVTaGFmdCk7XFxyXFxuXFx0XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogVXNlIGFic29sdXRlIHBvc2l0aW9uaW5nIHRvIHBsYWNlIHRoZSBtZW51IG9mZi1zY3JlZW5cXHJcXG4gKi9cXHJcXG4jbWVudSB7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdHdpZHRoOiAxMDB2dztcXHJcXG5cXHRtYXgtd2lkdGg6IDkwMHB4O1xcclxcblxcdG1hcmdpbjogLTgwcHggMCAwIC01MHB4O1xcclxcblxcdHBhZGRpbmc6IDUwcHggMHB4IDUwcHggMHB4O1xcclxcblxcdHBhZGRpbmctdG9wOiAxMjVweDtcXHJcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1jbHItbGlnaHQpO1xcclxcblxcdGJveC1zaGFkb3c6IFxcclxcblxcdFxcdFxcdFxcdDAgMi44cHggMi4ycHggcmdiYSgwLCAwLCAwLCAwLjAzNCksXFxyXFxuXFx0XFx0XFx0XFx0MCA2LjdweCA1LjNweCByZ2JhKDAsIDAsIDAsIDAuMDQ4KSxcXHJcXG5cXHRcXHRcXHRcXHQwIDEyLjVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNiksXFxyXFxuXFx0XFx0XFx0XFx0MCAyMi4zcHggMTcuOXB4IHJnYmEoMCwgMCwgMCwgMC4wNzIpLFxcclxcblxcdFxcdFxcdFxcdDAgNDEuOHB4IDMzLjRweCByZ2JhKDAsIDAsIDAsIDAuMDg2KTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcblxcdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG5cXHQvKiBIaWRlIHRoZSBtZW51IG9mZi1zY3JlZW4gdG8gdGhlIGxlZnQgKi9cXHJcXG5cXHRsZWZ0OiAwO1xcclxcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogbGVmdCAwLjNzIGVhc2U7XFxyXFxuXFx0LW8tdHJhbnNpdGlvbjogbGVmdCAwLjNzIGVhc2U7XFxyXFxuXFx0dHJhbnNpdGlvbjogbGVmdCAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qXFxyXFxuICogU2xpZGUgdGhlIG1lbnUgaW4gZnJvbSBsZWZ0IHdoZW4gdGhlICNpbnB1dE1lbnUgaXMgY2hlY2tlZFxcclxcbiAqL1xcclxcbiNtZW51VG9nZ2xlICNpbnB1dE1lbnU6Y2hlY2tlZH51bCB7XFxyXFxuXFxyXFxuXFx0dHJhbnNpdGlvbjogbGVmdCAwLjNzIGVhc2U7XFxyXFxuXFx0bGVmdDogLTIwMCU7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWltZyB7XFxyXFxuXFx0d2lkdGg6IDEuN2VtO1xcclxcblxcdHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmUtbGlzdCB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWVsZkdyZWVuKTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAzNXB4O1xcclxcblxcdG1hcmdpbjogMHB4IDI1cHggMHB4IDI1cHg7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWNsci1saWdodCk7XFxyXFxufVxcclxcblxcclxcbiNteUZvcm0ge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRtYXJnaW4tdG9wOiAxLjhlbTtcXHJcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcclxcblxcdFxcclxcbn1cXHJcXG5cXHJcXG4jbXlGb3JtIGZvcm0sICNteVRhc2tzIGZvcm0ge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGZvbnQtc2l6ZTogMS4zZW07XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXdoaXRlKTtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jbHItZWxmR3JlZW4pO1xcclxcblxcdHdpZHRoOiAxNWVtO1xcclxcblxcdHBhZGRpbmc6IDJlbSAuNmVtIDEuNWVtIC42ZW07XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZFByb2plY3RGb3JtIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkUHJvamVjdEJ1dHRvbiB7XFxyXFxuXFx0bWFyZ2luLXRvcDogMzBweDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItZWxmR3JlZW4pO1xcclxcblxcdGNvbG9yOiB2YXIoLS1jbHItbGlnaHQpO1xcclxcblxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA0MnB4O1xcclxcblxcdGZvbnQtc2l6ZTogMS40ZW07XFxyXFxuXFx0cGFkZGluZzogMiUgMTAlIDIlIDglO1xcclxcblxcdGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZFByb2plY3RCdXR0b246aG92ZXIge1xcclxcblxcdGNvbG9yOiB2YXIoLS1jbHItbGlnaHQpO1xcclxcblxcdG9wYWNpdHk6IDAuODtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZFByb2plY3RCdXR0b24gc3BhbiB7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjZlbTtcXHJcXG5cXHRmb250LXdlaWdodDogMzAwO1xcclxcblxcdHBhZGRpbmc6IDBweCAxMHB4IDBweCAzcHg7XFxyXFxuXFx0XFxyXFxufVxcclxcblxcclxcbiNzdWJtaXRCdG4sICN0YXNrU3VibWl0QnV0dG9uIHtcXHJcXG4gXFx0Zm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xcclxcbiBcXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItZWxmR3JlZW4pO1xcclxcbiBcXHRjb2xvcjogdmFyKC0tY2xyLWxpZ2h0KTtcXHJcXG4gXFx0Ym9yZGVyOiBub25lO1xcclxcbiBcXHRib3JkZXItcmFkaXVzOiAzMnB4O1xcclxcbiBcXHRmb250LXNpemU6IDFlbTtcXHJcXG4gXFx0cGFkZGluZzogMiUgMzAlIDIlIDMwJTtcXHJcXG5cXHQgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdEJ0bjpob3ZlciwgI3Rhc2tTdWJtaXRCdG46aG92ZXIge1xcclxcblxcdG9wYWNpdHk6IDAuODtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3RMYWJlbCwgI3Rhc2tMYWJlbCB7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjNlbTtcXHJcXG5cXHRmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdElucHV0LCAjdGFza0lucHV0IHtcXHJcXG5cXHRmb250LXNpemU6IDAuOGVtO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuXFx0cGFkZGluZzogMHB4IDE1cHggMHB4IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGVQcm9qZWN0QnRuIHtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jbHItbWluZVNoYWZ0KTtcXHJcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1jbHItd2FybmluZyk7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXHJcXG5cXHRwYWRkaW5nOiAzcHggN3B4IDJweCA3cHg7XFxyXFxuXFx0Zm9udC1zaXplOiAwLjdlbTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdG1hcmdpbjogMC41JSAyJSAwIDIlO1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza0xpc3Qge1xcclxcblxcdGdyaWQtYXJlYTogdGFza3M7XFxyXFxuXFx0LyogbWFyZ2luLWJvdHRvbTogMTMwdmg7ICovXFxyXFxuXFx0LyogbWFyZ2luLXRvcDogNTB2aDsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tbGlzdCB7XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG5cXHRtYXJnaW4tdG9wOiA1ZW07XFxyXFxuXFx0YmFja2dyb3VuZDogdmFyKC0tY2xyLWdhbGxlcnkpO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuXFx0d2lkdGg6IDEwMHZ3O1xcclxcblxcdG1heC13aWR0aDogOTAwcHg7XFxyXFxuXFx0cGFkZGluZy10b3A6IDMlO1xcclxcblxcdHBhZGRpbmctYm90dG9tOiAxJTtcXHJcXG5cXHRib3gtc2hhZG93OiBcXHJcXG5cXHRcXHRcXHRcXHQwIDIuOHB4IDIuMnB4IHJnYmEoMCwgMCwgMCwgMC4wMzQpLFxcclxcblxcdFxcdFxcdFxcdDAgNi43cHggNS4zcHggcmdiYSgwLCAwLCAwLCAwLjA0OCksXFxyXFxuXFx0XFx0XFx0XFx0MCAxMi41cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDYpLFxcclxcblxcdFxcdFxcdFxcdDAgMjIuM3B4IDE3LjlweCByZ2JhKDAsIDAsIDAsIDAuMDcyKSxcXHJcXG5cXHRcXHRcXHRcXHQwIDQxLjhweCAzMy40cHggcmdiYSgwLCAwLCAwLCAwLjA4NiksXFxyXFxuXFx0XFx0XFx0XFx0MCAxMDBweCA4MHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxyXFxufVxcclxcblxcclxcbi5hZGRNYXJnaW5BZnRlckNsaWNrIHtcXHJcXG5cXHRtYXJnaW4tdG9wOiAyNnZoO1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5yZW1vdmVNYXJnaW5BZnRlckNsaWNrIHtcXHJcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTcwJSk7XFxyXFxuXFx0LyogbWFyZ2luLXRvcDogLTEwdmg7ICovXFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnRvZG8taGVhZGVyIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItbGlnaHQpO1xcclxcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNsci1lbGZHcmVlbik7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXHJcXG5cXHRtYXJnaW46IDAlIDUlIDUlIDUlO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1jb3VudCB7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tYm9keSB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWxpZ2h0KTtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jbHItZWxmR3JlZW4pO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuXFx0cGFkZGluZzogNSUgMSUgMCUgMSU7XFxyXFxuXFx0bWFyZ2luOiA1JTtcXHJcXG59XFxyXFxuXFxyXFxuI215VGFza3Mge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNhZGRUYXNrQnV0dG9uIHtcXHJcXG5cXHRmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XFxyXFxuIFxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1lbGZHcmVlbik7XFxyXFxuIFxcdGNvbG9yOiB2YXIoLS1jbHItbGlnaHQpO1xcclxcbiBcXHRib3JkZXI6IG5vbmU7XFxyXFxuIFxcdGJvcmRlci1yYWRpdXM6IDMycHg7XFxyXFxuIFxcdGZvbnQtc2l6ZTogMS4xZW07XFxyXFxuIFxcdHBhZGRpbmc6IDIlIDEwJSAyJSA0JTtcXHJcXG5cXHQgZGlzcGxheTogZmxleDtcXHJcXG5cXHQgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHQgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG5cXHQgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZFRhc2tCdXR0b246aG92ZXIge1xcclxcblxcdG9wYWNpdHk6IDAuODtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZFRhc2tCdXR0b24gc3BhbiB7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjVlbTtcXHJcXG5cXHRmb250LXdlaWdodDogNDAwO1xcclxcblxcdHBhZGRpbmc6IDBweCAxMHB4IDBweCAxM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4jY3JlYXRlVGFza0NvbnRhaW5lciB7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXHJcXG5cXHRwYWRkaW5nOiA1JTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI3Rhc2tzQ29udGFpbmVyIHtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcblxcdG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxufVxcclxcblxcclxcbiN0YXNrc0NvbnRhaW5lciBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0Ym9yZGVyOiAycHggc29saWQgdmFyKC0tY2xyLW1pbmVTaGFmdCk7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMTRweDtcXHJcXG5cXHRhcHBlYXJhbmNlOiBub25lO1xcclxcblxcdG91dGxpbmU6IDA7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdHRyYW5zaXRpb246IGJhY2tncm91bmQgMTc1bXMgY3ViaWMtYmV6aWVyKDAuMSwgMC4xLCAwLjI1LCAxKTtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tzQ29udGFpbmVyIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06OmJlZm9yZSB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdGNvbnRlbnQ6ICcnO1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB0b3A6IC02cHg7XFxyXFxuICAgIGxlZnQ6IDlweDtcXHJcXG4gICAgd2lkdGg6IDhweDtcXHJcXG4gICAgaGVpZ2h0OiAyMXB4O1xcclxcblxcdGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuXFx0Ym9yZGVyLWNvbG9yOiB2YXIoLS1jbHItbWluZVNoYWZ0KTtcXHJcXG5cXHRib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xcclxcblxcdHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG5cXHRvcGFjaXR5OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza3NDb250YWluZXIgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkIHtcXHJcXG5cXHRjb2xvcjogdmFyKC0tY2xyLW1pbmVTaGFmdCk7XFxyXFxuXFx0Ym9yZGVyLWNvbG9yOiB2YXIoLS1jbHItbWluZVNoYWZ0KTtcXHJcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxyXFxufVxcclxcblxcclxcbiN0YXNrc0NvbnRhaW5lciBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQ6OmJlZm9yZSB7XFxyXFxuXFx0b3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tzQ29udGFpbmVyIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCB+IGxhYmVsOjpiZWZvcmUge1xcclxcblxcdGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAwIDEwMCUpO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza3NDb250YWluZXIgbGFiZWwge1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjNlbTtcXHJcXG5cXHRmb250LXdlaWdodDogNDAwO1xcclxcblxcdHBhZGRpbmc6IDAgMC40NWVtIDA7XFxyXFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbiN0YXNrc0NvbnRhaW5lciBsYWJlbDo6YmVmb3JlIHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0Y29udGVudDogYXR0cihkYXRhLWNvbnRlbnQpO1xcclxcblxcdGNvbG9yOiB2YXIoLS1jbHItY29tcGxldGVkVGFzayk7XFxyXFxuXFx0Y2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMCAwLCAwJSAxMDAlLCAwIDEwMCUpO1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcblxcdHRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IDNweDtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb24tY29sb3I6IHZhcigtLWNsci1kYXJrKTtcXHJcXG5cXHR0b3A6IDBweDtcXHJcXG5cXHR0cmFuc2l0aW9uOiBjbGlwLXBhdGggMjAwbXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayBsYWJlbCB7XFxyXFxuXFx0Ym90dG9tOiAwcHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWdhbGxlcnkpO1xcclxcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNsci1wcmltYXJ5KTtcXHJcXG5cXHRtYXJnaW46IDIlO1xcclxcblxcdHBhZGRpbmc6IDIlO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbiN0YXNrc0NvbnRhaW5lciAudGFzayBpbnB1dCB7XFxyXFxuXFx0aGVpZ2h0OiAyNXB4O1xcclxcblxcdHdpZHRoOiAyNXB4O1xcclxcblxcdG1pbi13aWR0aDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tzQ29udGFpbmVyIGlucHV0OmhvdmVyIHtcXHJcXG5cXHRib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jbHItcHJpbWFyeSk7XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZS1zdHVmZiB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO31cXHJcXG5cXHJcXG4uZGVsZXRlLXN0dWZmIGJ1dHRvbiB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xcclxcblxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRtYXJnaW46IDAuNWVtO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuXFx0Zm9udC1zaXplOiAxZW07XFxyXFxuXFx0cGFkZGluZzogMC4xMWVtIDFlbSAwLjExZW0gMWVtO1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxufVxcclxcbi5kZWxldGUtc3R1ZmYgYnV0dG9uOmhvdmVyIHtcXHJcXG5cXHRvcGFjaXR5OiAwLjg7XFxyXFxufVxcclxcblxcclxcbiNjbGVhckJ0biB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLW5hdkhpZ2hsaWdodCk7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWNsci1taW5lU2hhZnQpO1xcclxcbn1cXHJcXG5cXHJcXG4jZGVsZXRlQnRuIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItZGVsZXRlKTtcXHJcXG5cXHRjb2xvcjogdmFyKC0tY2xyLW1pbmVTaGFmdCk7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAzNzVweCkge1xcclxcblxcdCNtZW51LCAjdGFza0xpc3Qge1xcclxcblxcdFxcdHdpZHRoOiA5MnZ3O1xcclxcblxcdH1cXHJcXG5cXHQjY29udGFpbmVyIHtcXHJcXG5cXHRcXHRtYXJnaW4tcmlnaHQ6IDAlO1xcclxcblxcdFxcdG1hcmdpbi1sZWZ0OiAwJTtcXHJcXG5cXHRcXHRwYWRkaW5nLWxlZnQ6IDElO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDExMDBweCkge1xcclxcblxcdCNjb250YWluZXIge1xcclxcblxcdFxcdG1hcmdpbi1yaWdodDogMCU7XFxyXFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDAlO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHRcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDE0MDBweCkge1xcclxcblxcdC50b2RvLWxpc3R7XFxyXFxuXFx0XFx0bWFyZ2luLXRvcDogMGVtO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxnQ0FBZ0M7Q0FDaEMsbUNBQW1DO0NBQ25DLG9CQUFvQjtDQUNwQiwyQkFBMkI7Q0FDM0IsK0JBQStCO0NBQy9CLHNCQUFzQjtDQUN0Qiw2QkFBNkI7Q0FDN0Isd0JBQXdCO0NBQ3hCLHNCQUFzQjtDQUN0Qix1QkFBdUI7Q0FDdkIscUJBQXFCO0NBQ3JCLDRCQUE0QjtDQUM1Qix1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQywwQ0FBMEM7O0FBRTNDOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLFNBQVM7Q0FDVCw2QkFBNkI7Q0FDN0IsMkJBQTJCO0NBQzNCLGFBQWE7Q0FDYix1QkFBdUI7O0FBRXhCOztBQUVBO0NBQ0Msc0JBQXNCO0NBQ3RCLGVBQWU7Q0FDZixhQUFhO0NBQ2IsdUJBQXVC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QWtCO0NBQ2xCLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtDQUNuQixpQkFBaUI7O0FBRWxCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLDJCQUEyQjtDQUMzQiwrQkFBK0I7Q0FDL0IsNkNBQTZDO0NBQzdDLDZCQUE2QjtDQUM3Qiw4QkFBOEI7Q0FDOUIsc0NBQXNDO0NBQ3RDLFFBQVE7Q0FDUixnRUFBZ0U7QUFDakU7O0FBRUE7Q0FDQyxXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLG9DQUFvQztDQUNwQyxvQ0FBb0M7Q0FDcEMsVUFBVTtDQUNWLFdBQVc7Q0FDWCxtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osV0FBVztDQUNYLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxvQ0FBb0M7Q0FDcEMseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQixDQUFDOztBQUV4QjtDQUNDLDBDQUEwQztDQUMxQyxZQUFZO0NBQ1osYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixjQUFjO0NBQ2QsOEJBQThCO0NBQzlCLHlCQUF5QjtBQUMxQjtBQUNBO0NBQ0MsWUFBWTtBQUNiOztBQUVBO0NBQ0MseUNBQXlDO0NBQ3pDLDJCQUEyQjtBQUM1Qjs7QUFFQTtDQUNDLG1DQUFtQztDQUNuQywyQkFBMkI7QUFDNUI7O0FBRUE7Q0FDQztFQUNDLFdBQVc7Q0FDWjtDQUNBO0VBQ0MsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7Q0FDakI7QUFDRDs7QUFFQTtDQUNDO0VBQ0MsZ0JBQWdCO0VBQ2hCLGVBQWU7Q0FDaEI7OztBQUdEOztBQUVBO0NBQ0M7RUFDQyxlQUFlO0NBQ2hCO0FBQ0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcblxcdC0tY2xyLXByaW1hcnk6IHJnYig0MSwgMTQ1LCAyNTUpO1xcclxcblxcdC0tY2xyLWxpZ2h0R3JheTogcmdiKDIzMiwgMjMyLCAyMzIpO1xcclxcblxcdC0tY2xyLWxpZ2h0OiAjZjRmNGY0O1xcclxcblxcdC0tY2xyLWRhcms6IHJnYig1OCwgNTgsIDU4KTtcXHJcXG5cXHQtLWNsci13aGl0ZTogcmdiKDI1MiwgMjUyLCAyNTIpO1xcclxcblxcdC0tY2xyLXdhcm5pbmc6ICNlOTc1NjA7XFxyXFxuXFx0LS1jbHItbmF2SGlnaGxpZ2h0OiAjNGY3Nzk0ZDA7XFxyXFxuXFx0LS1jbHItbWluZVNoYWZ0OiAjMjMyMzIzO1xcclxcblxcdC0tY2xyLWdhbGxlcnk6ICNlZGVkZWQ7XFxyXFxuXFx0LS1jbHItZWxmR3JlZW46ICMwNTgxNzk7XFxyXFxuXFx0LS1jbHItbmVidWxhOiAjY2JkYmRhO1xcclxcblxcdC0tY2xyLWNvbXBsZXRlZFRhc2s6ICNhNWIxYzA7XFxyXFxuXFx0LS1jbHItZGVsZXRlOiAjZmY0OTQ5NjI7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuXFx0cGFkZGluZy1ib3R0b206IDEwJTtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0YmFja2dyb3VuZDogdmFyKC0tY2xyLW5lYnVsYSk7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWNsci1taW5lU2hhZnQpO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG5cXHRjb2xvcjogdmFyKC0tY2xyLWRhcmspO1xcclxcblxcdGZvbnQtc2l6ZTogM3JlbTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdG1hcmdpbjogLTAuNWVtIDAuNWVtIDAuNWVtIDQwLjUlO1xcclxcblxcdHotaW5kZXg6IDI7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZUgxIHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFpbmVyIHtcXHJcXG5cXHRtYXJnaW4tcmlnaHQ6IC0xOCU7XFxyXFxuXFx0bWFyZ2luLXRvcDogNTBweDtcXHJcXG5cXHRwYWRkaW5nLWxlZnQ6IDElO1xcclxcblxcdGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcclxcblxcdGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcclxcblxcdCAgXFxcInByb2plY3RzXFxcIlxcclxcblxcdCAgXFxcInRhc2tzXFxcIlxcclxcblxcdCAgXFxcImxvZ29cXFwiO1xcclxcbn0gXFxyXFxuXFxyXFxuI2dpdExvZ29EaXZDb250YWluZXIge1xcclxcblxcdGdyaWQtYXJlYTogbG9nbztcXHJcXG5cXHRtYXJnaW4tdG9wOiAzMHB4O1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0YWxpZ24tc2VsZjogY2VudGVyO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5naXRMb2dvIHtcXHJcXG5cXHR3aWR0aDogODVweDtcXHJcXG5cXHRoZWlnaHQ6IDg1cHg7XFxyXFxufVxcclxcblxcclxcbiNuYXZDb250YWluZXIge1xcclxcblxcdC8qIGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMTB2dztcXHJcXG5cXHRncmlkLWFyZWE6IHByb2plY3RzO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudVRvZ2dsZSB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdG1heC13aWR0aDogNTB2dztcXHJcXG5cXHR0b3A6IDUwcHg7XFxyXFxuXFx0bGVmdDogNTBweDtcXHJcXG5cXHR6LWluZGV4OiAxO1xcclxcblxcdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuXFx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG5cXHQtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNtZW51VG9nZ2xlIGxpIHtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XFxyXFxuXFx0LW8tdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xcclxcblxcdHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcXHJcXG5cXHRwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDUwcHg7XFxyXFxuXFx0Zm9udC1zaXplOiAyMnB4O1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI21lbnVUb2dnbGUgbGk6aG92ZXIge1xcclxcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIFRoZSBoYW1idXJnZXIgYnV0dG9uIGhpZGRlbiBpbnNpZGUgYW4gI2lucHV0TWVudSBlbGVtZW50ICovXFxyXFxuI21lbnVUb2dnbGUgI2lucHV0TWVudSB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0d2lkdGg6IDMwcHg7XFxyXFxuXFx0aGVpZ2h0OiAzMHB4O1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHR0b3A6IC03cHg7XFxyXFxuXFx0bGVmdDogLTVweDtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRcXHJcXG5cXHRvcGFjaXR5OiAwO1xcclxcblxcdC8qIGhpZGUgdGhpcyAqL1xcclxcblxcdHotaW5kZXg6IDI7XFxyXFxuXFx0LyogYW5kIHBsYWNlIGl0IG92ZXIgdGhlIGhhbWJ1cmdlciAqL1xcclxcblxcdC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI21lbnVUb2dnbGUgI2xhYmVsTWVudSB7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdHdpZHRoOiAzMHB4O1xcclxcblxcdGhlaWdodDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuI21lbnVUb2dnbGUgI2xhYmVsTWVudSBzcGFuIHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIEhhbWJ1cmdlclxcclxcbiAqL1xcclxcbiNtZW51VG9nZ2xlICNsYWJlbE1lbnUgZGl2IHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHR3aWR0aDogMzBweDtcXHJcXG5cXHRoZWlnaHQ6IDJweDtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiA2cHg7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdGJhY2tncm91bmQ6IHZhcigtLWNsci1lbGZHcmVlbik7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcdHotaW5kZXg6IDE7XFxyXFxuXFx0LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA0cHggMHB4O1xcclxcblxcdC1tcy10cmFuc2Zvcm0tb3JpZ2luOiA0cHggMHB4O1xcclxcblxcdHRyYW5zZm9ybS1vcmlnaW46IDRweCAwcHg7XFxyXFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcclxcblxcdC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuI21lbnVUb2dnbGUgI2xhYmVsTWVudSBkaXY6Zmlyc3QtY2hpbGQge1xcclxcblxcdC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCUgMTAwJTtcXHJcXG5cXHQtbXMtdHJhbnNmb3JtLW9yaWdpbjogMCUgMTAwJTtcXHJcXG5cXHR0cmFuc2Zvcm0tb3JpZ2luOiAwJSAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudVRvZ2dsZSAjbGFiZWxNZW51IGRpdjpudGgtY2hpbGQoMikge1xcclxcblxcdC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XFxyXFxuXFx0LW1zLXRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xcclxcblxcdHRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBcXHJcXG4gKiBDaGFuZ2UgdGhlIGNvbG9yIG9mIHRoZSBoYW1idXJnZXIgd2hlbiB0b2dnbGVkXFxyXFxuICovXFxyXFxuI21lbnVUb2dnbGUgI2lucHV0TWVudTpjaGVja2VkKyNsYWJlbE1lbnUgZGl2IHtcXHJcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1jbHItbWluZVNoYWZ0KTtcXHJcXG5cXHRcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiBVc2UgYWJzb2x1dGUgcG9zaXRpb25pbmcgdG8gcGxhY2UgdGhlIG1lbnUgb2ZmLXNjcmVlblxcclxcbiAqL1xcclxcbiNtZW51IHtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0d2lkdGg6IDEwMHZ3O1xcclxcblxcdG1heC13aWR0aDogOTAwcHg7XFxyXFxuXFx0bWFyZ2luOiAtODBweCAwIDAgLTUwcHg7XFxyXFxuXFx0cGFkZGluZzogNTBweCAwcHggNTBweCAwcHg7XFxyXFxuXFx0cGFkZGluZy10b3A6IDEyNXB4O1xcclxcblxcdGJhY2tncm91bmQ6IHZhcigtLWNsci1saWdodCk7XFxyXFxuXFx0Ym94LXNoYWRvdzogXFxyXFxuXFx0XFx0XFx0XFx0MCAyLjhweCAyLjJweCByZ2JhKDAsIDAsIDAsIDAuMDM0KSxcXHJcXG5cXHRcXHRcXHRcXHQwIDYuN3B4IDUuM3B4IHJnYmEoMCwgMCwgMCwgMC4wNDgpLFxcclxcblxcdFxcdFxcdFxcdDAgMTIuNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA2KSxcXHJcXG5cXHRcXHRcXHRcXHQwIDIyLjNweCAxNy45cHggcmdiYSgwLCAwLCAwLCAwLjA3MiksXFxyXFxuXFx0XFx0XFx0XFx0MCA0MS44cHggMzMuNHB4IHJnYmEoMCwgMCwgMCwgMC4wODYpO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuXFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcblxcdC8qIEhpZGUgdGhlIG1lbnUgb2ZmLXNjcmVlbiB0byB0aGUgbGVmdCAqL1xcclxcblxcdGxlZnQ6IDA7XFxyXFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBsZWZ0IDAuM3MgZWFzZTtcXHJcXG5cXHQtby10cmFuc2l0aW9uOiBsZWZ0IDAuM3MgZWFzZTtcXHJcXG5cXHR0cmFuc2l0aW9uOiBsZWZ0IDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLypcXHJcXG4gKiBTbGlkZSB0aGUgbWVudSBpbiBmcm9tIGxlZnQgd2hlbiB0aGUgI2lucHV0TWVudSBpcyBjaGVja2VkXFxyXFxuICovXFxyXFxuI21lbnVUb2dnbGUgI2lucHV0TWVudTpjaGVja2VkfnVsIHtcXHJcXG5cXHJcXG5cXHR0cmFuc2l0aW9uOiBsZWZ0IDAuM3MgZWFzZTtcXHJcXG5cXHRsZWZ0OiAtMjAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtaW1nIHtcXHJcXG5cXHR3aWR0aDogMS43ZW07XFxyXFxuXFx0cGFkZGluZy1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZS1saXN0IHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItZWxmR3JlZW4pO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDM1cHg7XFxyXFxuXFx0bWFyZ2luOiAwcHggMjVweCAwcHggMjVweDtcXHJcXG5cXHRjb2xvcjogdmFyKC0tY2xyLWxpZ2h0KTtcXHJcXG59XFxyXFxuXFxyXFxuI215Rm9ybSB7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdG1hcmdpbi10b3A6IDEuOGVtO1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxuXFx0XFxyXFxufVxcclxcblxcclxcbiNteUZvcm0gZm9ybSwgI215VGFza3MgZm9ybSB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjNlbTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItd2hpdGUpO1xcclxcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNsci1lbGZHcmVlbik7XFxyXFxuXFx0d2lkdGg6IDE1ZW07XFxyXFxuXFx0cGFkZGluZzogMmVtIC42ZW0gMS41ZW0gLjZlbTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkUHJvamVjdEZvcm0ge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNhZGRQcm9qZWN0QnV0dG9uIHtcXHJcXG5cXHRtYXJnaW4tdG9wOiAzMHB4O1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1lbGZHcmVlbik7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWNsci1saWdodCk7XFxyXFxuXFx0Ym9yZGVyOiBub25lO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDQycHg7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjRlbTtcXHJcXG5cXHRwYWRkaW5nOiAyJSAxMCUgMiUgOCU7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkUHJvamVjdEJ1dHRvbjpob3ZlciB7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWNsci1saWdodCk7XFxyXFxuXFx0b3BhY2l0eTogMC44O1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkUHJvamVjdEJ1dHRvbiBzcGFuIHtcXHJcXG5cXHRmb250LXNpemU6IDEuNmVtO1xcclxcblxcdGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuXFx0cGFkZGluZzogMHB4IDEwcHggMHB4IDNweDtcXHJcXG5cXHRcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdEJ0biwgI3Rhc2tTdWJtaXRCdXR0b24ge1xcclxcbiBcXHRmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XFxyXFxuIFxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1lbGZHcmVlbik7XFxyXFxuIFxcdGNvbG9yOiB2YXIoLS1jbHItbGlnaHQpO1xcclxcbiBcXHRib3JkZXI6IG5vbmU7XFxyXFxuIFxcdGJvcmRlci1yYWRpdXM6IDMycHg7XFxyXFxuIFxcdGZvbnQtc2l6ZTogMWVtO1xcclxcbiBcXHRwYWRkaW5nOiAyJSAzMCUgMiUgMzAlO1xcclxcblxcdCB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4jc3VibWl0QnRuOmhvdmVyLCAjdGFza1N1Ym1pdEJ0bjpob3ZlciB7XFxyXFxuXFx0b3BhY2l0eTogMC44O1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdExhYmVsLCAjdGFza0xhYmVsIHtcXHJcXG5cXHRmb250LXNpemU6IDEuM2VtO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0SW5wdXQsICN0YXNrSW5wdXQge1xcclxcblxcdGZvbnQtc2l6ZTogMC44ZW07XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXHJcXG5cXHRmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMTVweDtcXHJcXG5cXHRwYWRkaW5nOiAwcHggMTVweCAwcHggMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZVByb2plY3RCdG4ge1xcclxcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNsci1taW5lU2hhZnQpO1xcclxcblxcdGJhY2tncm91bmQ6IHZhcigtLWNsci13YXJuaW5nKTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcblxcdHBhZGRpbmc6IDNweCA3cHggMnB4IDdweDtcXHJcXG5cXHRmb250LXNpemU6IDAuN2VtO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0bWFyZ2luOiAwLjUlIDIlIDAgMiU7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxufVxcclxcblxcclxcbiN0YXNrTGlzdCB7XFxyXFxuXFx0Z3JpZC1hcmVhOiB0YXNrcztcXHJcXG5cXHQvKiBtYXJnaW4tYm90dG9tOiAxMzB2aDsgKi9cXHJcXG5cXHQvKiBtYXJnaW4tdG9wOiA1MHZoOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1saXN0IHtcXHJcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcclxcblxcdG1hcmdpbi10b3A6IDVlbTtcXHJcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1jbHItZ2FsbGVyeSk7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXHJcXG5cXHR3aWR0aDogMTAwdnc7XFxyXFxuXFx0bWF4LXdpZHRoOiA5MDBweDtcXHJcXG5cXHRwYWRkaW5nLXRvcDogMyU7XFxyXFxuXFx0cGFkZGluZy1ib3R0b206IDElO1xcclxcblxcdGJveC1zaGFkb3c6IFxcclxcblxcdFxcdFxcdFxcdDAgMi44cHggMi4ycHggcmdiYSgwLCAwLCAwLCAwLjAzNCksXFxyXFxuXFx0XFx0XFx0XFx0MCA2LjdweCA1LjNweCByZ2JhKDAsIDAsIDAsIDAuMDQ4KSxcXHJcXG5cXHRcXHRcXHRcXHQwIDEyLjVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNiksXFxyXFxuXFx0XFx0XFx0XFx0MCAyMi4zcHggMTcuOXB4IHJnYmEoMCwgMCwgMCwgMC4wNzIpLFxcclxcblxcdFxcdFxcdFxcdDAgNDEuOHB4IDMzLjRweCByZ2JhKDAsIDAsIDAsIDAuMDg2KSxcXHJcXG5cXHRcXHRcXHRcXHQwIDEwMHB4IDgwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZE1hcmdpbkFmdGVyQ2xpY2sge1xcclxcblxcdG1hcmdpbi10b3A6IDI2dmg7XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlbW92ZU1hcmdpbkFmdGVyQ2xpY2sge1xcclxcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNzAlKTtcXHJcXG5cXHQvKiBtYXJnaW4tdG9wOiAtMTB2aDsgKi9cXHJcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4udG9kby1oZWFkZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1saWdodCk7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tY2xyLWVsZkdyZWVuKTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcblxcdG1hcmdpbjogMCUgNSUgNSUgNSU7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWNvdW50IHtcXHJcXG5cXHRjb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1ib2R5IHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItbGlnaHQpO1xcclxcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNsci1lbGZHcmVlbik7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXHJcXG5cXHRwYWRkaW5nOiA1JSAxJSAwJSAxJTtcXHJcXG5cXHRtYXJnaW46IDUlO1xcclxcbn1cXHJcXG5cXHJcXG4jbXlUYXNrcyB7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZFRhc2tCdXR0b24ge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcXHJcXG4gXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWVsZkdyZWVuKTtcXHJcXG4gXFx0Y29sb3I6IHZhcigtLWNsci1saWdodCk7XFxyXFxuIFxcdGJvcmRlcjogbm9uZTtcXHJcXG4gXFx0Ym9yZGVyLXJhZGl1czogMzJweDtcXHJcXG4gXFx0Zm9udC1zaXplOiAxLjFlbTtcXHJcXG4gXFx0cGFkZGluZzogMiUgMTAlIDIlIDQlO1xcclxcblxcdCBkaXNwbGF5OiBmbGV4O1xcclxcblxcdCBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdCBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcblxcdCB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkVGFza0J1dHRvbjpob3ZlciB7XFxyXFxuXFx0b3BhY2l0eTogMC44O1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkVGFza0J1dHRvbiBzcGFuIHtcXHJcXG5cXHRmb250LXNpemU6IDEuNWVtO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuXFx0cGFkZGluZzogMHB4IDEwcHggMHB4IDEzcHg7XFxyXFxufVxcclxcblxcclxcbiNjcmVhdGVUYXNrQ29udGFpbmVyIHtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcblxcdHBhZGRpbmc6IDUlO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jdGFza3NDb250YWluZXIge1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tzQ29udGFpbmVyIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jbHItbWluZVNoYWZ0KTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAxNHB4O1xcclxcblxcdGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuXFx0b3V0bGluZTogMDtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZCAxNzVtcyBjdWJpYy1iZXppZXIoMC4xLCAwLjEsIDAuMjUsIDEpO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza3NDb250YWluZXIgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTo6YmVmb3JlIHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0Y29udGVudDogJyc7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHRvcDogLTZweDtcXHJcXG4gICAgbGVmdDogOXB4O1xcclxcbiAgICB3aWR0aDogOHB4O1xcclxcbiAgICBoZWlnaHQ6IDIxcHg7XFxyXFxuXFx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG5cXHRib3JkZXItY29sb3I6IHZhcigtLWNsci1taW5lU2hhZnQpO1xcclxcblxcdGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XFxyXFxuXFx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcblxcdG9wYWNpdHk6IDA7XFxyXFxufVxcclxcblxcclxcbiN0YXNrc0NvbnRhaW5lciBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQge1xcclxcblxcdGNvbG9yOiB2YXIoLS1jbHItbWluZVNoYWZ0KTtcXHJcXG5cXHRib3JkZXItY29sb3I6IHZhcigtLWNsci1taW5lU2hhZnQpO1xcclxcblxcdGJhY2tncm91bmQ6IHZhcigtLWNsci1wcmltYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tzQ29udGFpbmVyIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZDo6YmVmb3JlIHtcXHJcXG5cXHRvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza3NDb250YWluZXIgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkIH4gbGFiZWw6OmJlZm9yZSB7XFxyXFxuXFx0Y2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDAgMTAwJSk7XFxyXFxufVxcclxcblxcclxcbiN0YXNrc0NvbnRhaW5lciBsYWJlbCB7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRmb250LXNpemU6IDEuM2VtO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuXFx0cGFkZGluZzogMCAwLjQ1ZW0gMDtcXHJcXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tzQ29udGFpbmVyIGxhYmVsOjpiZWZvcmUge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRjb250ZW50OiBhdHRyKGRhdGEtY29udGVudCk7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWNsci1jb21wbGV0ZWRUYXNrKTtcXHJcXG5cXHRjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAwIDAsIDAlIDEwMCUsIDAgMTAwJSk7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogM3B4O1xcclxcblxcdHRleHQtZGVjb3JhdGlvbi1jb2xvcjogdmFyKC0tY2xyLWRhcmspO1xcclxcblxcdHRvcDogMHB4O1xcclxcblxcdHRyYW5zaXRpb246IGNsaXAtcGF0aCAyMDBtcyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCk7XFxyXFxufVxcclxcblxcclxcbi50YXNrIGxhYmVsIHtcXHJcXG5cXHRib3R0b206IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItZ2FsbGVyeSk7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tY2xyLXByaW1hcnkpO1xcclxcblxcdG1hcmdpbjogMiU7XFxyXFxuXFx0cGFkZGluZzogMiU7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tzQ29udGFpbmVyIC50YXNrIGlucHV0IHtcXHJcXG5cXHRoZWlnaHQ6IDI1cHg7XFxyXFxuXFx0d2lkdGg6IDI1cHg7XFxyXFxuXFx0bWluLXdpZHRoOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza3NDb250YWluZXIgaW5wdXQ6aG92ZXIge1xcclxcblxcdGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNsci1wcmltYXJ5KTtcXHJcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLXN0dWZmIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47fVxcclxcblxcclxcbi5kZWxldGUtc3R1ZmYgYnV0dG9uIHtcXHJcXG5cXHRmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XFxyXFxuXFx0Ym9yZGVyOiBub25lO1xcclxcblxcdG1hcmdpbjogMC41ZW07XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMTJweDtcXHJcXG5cXHRmb250LXNpemU6IDFlbTtcXHJcXG5cXHRwYWRkaW5nOiAwLjExZW0gMWVtIDAuMTFlbSAxZW07XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuLmRlbGV0ZS1zdHVmZiBidXR0b246aG92ZXIge1xcclxcblxcdG9wYWNpdHk6IDAuODtcXHJcXG59XFxyXFxuXFxyXFxuI2NsZWFyQnRuIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItbmF2SGlnaGxpZ2h0KTtcXHJcXG5cXHRjb2xvcjogdmFyKC0tY2xyLW1pbmVTaGFmdCk7XFxyXFxufVxcclxcblxcclxcbiNkZWxldGVCdG4ge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1kZWxldGUpO1xcclxcblxcdGNvbG9yOiB2YXIoLS1jbHItbWluZVNoYWZ0KTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDM3NXB4KSB7XFxyXFxuXFx0I21lbnUsICN0YXNrTGlzdCB7XFxyXFxuXFx0XFx0d2lkdGg6IDkydnc7XFxyXFxuXFx0fVxcclxcblxcdCNjb250YWluZXIge1xcclxcblxcdFxcdG1hcmdpbi1yaWdodDogMCU7XFxyXFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDAlO1xcclxcblxcdFxcdHBhZGRpbmctbGVmdDogMSU7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMTEwMHB4KSB7XFxyXFxuXFx0I2NvbnRhaW5lciB7XFxyXFxuXFx0XFx0bWFyZ2luLXJpZ2h0OiAwJTtcXHJcXG5cXHRcXHRtYXJnaW4tbGVmdDogMCU7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdFxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMTQwMHB4KSB7XFxyXFxuXFx0LnRvZG8tbGlzdHtcXHJcXG5cXHRcXHRtYXJnaW4tdG9wOiAwZW07XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gaW1wb3J0IHsgbm9kZSB9IGZyb20gJ3dlYnBhY2snO1xyXG5pbXBvcnQgZ2l0SW1hZ2UgZnJvbSAnLi9pbWFnZXMvZ2l0LWxvZ28ucG5nJztcclxuXHJcbmZ1bmN0aW9uIERPTUludGVyZmFjZSgpIHtcclxuXHJcblx0Ly9jYXRjaGluZyBET01cclxuXHRsZXQgZ2l0TG9nb0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnaXRMb2dvRGl2Jyk7XHJcblxyXG5cdGxldCBpbnB1dE1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRNZW51Jyk7XHJcblxyXG5cdGxldCB0YXNrTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrTGlzdCcpO1xyXG5cclxuXHQvL3Byb2plY3RzXHJcblx0bGV0IHByb2plY3RTdWJtaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0QnRuJyk7XHJcblx0bGV0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvamVjdEJ1dHRvbicpO1xyXG5cdGxldCBuZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdbbmV3UHJvamVjdEZvcm1dJyk7XHJcblx0bGV0IGRlbGV0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlUHJvamVjdEJ0bicpO1xyXG5cdGxldCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0c0NvbnRhaW5lcicpO1xyXG5cdGxldCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdElucHV0Jyk7XHJcblx0Ly8gbGV0IGxpc3RPZlByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpc3QtbmFtZScpO1xyXG5cclxuXHRcclxuXHQvL3Rhc2tzXHJcblx0bGV0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkVGFza0J1dHRvbicpO1xyXG5cdGxldCB0YXNrU3VibWl0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tTdWJtaXRCdXR0b24nKTtcclxuXHRsZXQgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza3NDb250YWluZXInKTtcclxuXHJcblx0XHJcblx0Ly9naXQgbG9nbyBpbWdcclxuXHRsZXQgZ2l0TG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5cdGdpdExvZ28uc3JjID0gZ2l0SW1hZ2U7XHJcblx0Z2l0TG9nby5jbGFzc0xpc3QuYWRkKCdnaXRMb2dvJyk7XHJcblx0Z2l0TG9nb0Rpdi5hcHBlbmRDaGlsZChnaXRMb2dvKTtcclxuXHJcblx0Ly8gRE9NIGNsaWNrIGV2ZW50c1xyXG5cdGlucHV0TWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZE1hcmdpbik7XHJcblx0aW5wdXRNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZUgxKTtcclxuXHJcblxyXG5cclxuXHRhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkVGFzayk7XHJcblx0YWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Gb3JtKTtcclxuXHRwcm9qZWN0U3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VGb3JtKTtcclxuXHR0YXNrU3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VUYXNrRm9ybSk7XHJcblxyXG5cclxuXHQvL0Z1bmN0aW9ucyBmb3IgYnV0dG9ucyBhbmQgYWRkaW5nIG1hcmdpblxyXG5cdGZ1bmN0aW9uIG9wZW5Gb3JtKCkge1xyXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUZvcm1cIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHRcdGFkZFByb2plY3RCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gY2xvc2VGb3JtKCkge1xyXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUZvcm1cIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cdFx0YWRkUHJvamVjdEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cdH1cclxuXHJcblxyXG5cdGZ1bmN0aW9uIGFkZE1hcmdpbigpIHtcclxuXHRcdHRhc2tMaXN0LnN0eWxlLm1hcmdpblRvcCA9IG51bGw7XHJcblx0XHR0YXNrTGlzdC5jbGFzc0xpc3QudG9nZ2xlKCdyZW1vdmVNYXJnaW5BZnRlckNsaWNrJyk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBoaWRlSDEoKSB7XHJcblx0XHRsZXQgaDFFbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaDEnKVswXTtcclxuXHRcdGgxRWxlLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGVIMScpO1xyXG5cdFx0XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBhZGRUYXNrKCkge1xyXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteVRhc2tzXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblx0XHRhZGRUYXNrQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGNsb3NlVGFza0Zvcm0oKSB7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15VGFza3NcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cdH1cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBET01JbnRlcmZhY2U7IiwiaW1wb3J0IERPTUludGVyZmFjZSBmcm9tICcuL0RPTUludGVyZmFjZS5qcyc7XHJcbmltcG9ydCBkZWxldGVQcm9qZWN0cyBmcm9tICcuL2RlbGV0ZVByb2plY3RzLmpzJztcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBET01JbnRlcmZhY2UpO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZGVsZXRlUHJvamVjdHMpO1xyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdHMoKSB7XHJcblxyXG5cdG5ld1Byb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFkZFByb2plY3QpO1xyXG5cdC8vIG5ld1Byb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHNhdmVQcm9qZWN0cyk7XHJcblx0Ly8gbmV3UHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgbXlmdW5jdGlvbik7XHJcblxyXG5cdC8vY3JlYXRlIGFkZCBwcm9qZWN0cyBmeG5cclxuXHJcblx0ZnVuY3Rpb24gYWRkUHJvamVjdChlKSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRjb25zdCBwcm9qZWN0TmFtZSA9IHByb2plY3RJbnB1dC52YWx1ZTtcclxuXHRcdGlmIChwcm9qZWN0TmFtZSA9PT0gbnVsbCB8fCBwcm9qZWN0TmFtZSA9PT0gJycpIHJldHVybjtcclxuXHRcdGNyZWF0ZVByb2plY3QocHJvamVjdE5hbWUpO1xyXG5cdFx0cHJvamVjdElucHV0LnZhbHVlID0gbnVsbDtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QobmFtZXMpIHtcclxuXHRcdGxldCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuXHRcdHByb2plY3QuY2xhc3NMaXN0LmFkZCgnbGlzdC1uYW1lJyk7XHJcblx0XHRwcm9qZWN0LnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0JywgbmFtZXMpO1xyXG5cdFx0XHJcblx0XHRsZXQgcHJvamVjdEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5cdFx0cHJvamVjdEltZy5jbGFzc0xpc3QuYWRkKCdsaXN0LWltZycpO1xyXG5cdFx0cHJvamVjdEltZy5zcmMgPSAnLi4vc3JjL2ltYWdlcy9zdmcvbGlzdC5zdmcnO1xyXG5cdFx0cHJvamVjdEltZy5hbHQgPSAnbGlzdCc7XHJcblxyXG5cdFx0bGV0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHRcdGRlbGV0ZVByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlUHJvamVjdEJ0bicpO1xyXG5cdFx0ZGVsZXRlUHJvamVjdEJ1dHRvbi5pbm5lclRleHQgPSAnWCc7XHJcblxyXG5cdFx0cHJvamVjdC5hcHBlbmQocHJvamVjdEltZywgbmFtZXMsIGRlbGV0ZVByb2plY3RCdXR0b24pO1xyXG5cclxuXHRcdHByb2plY3RzQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0KTtcclxuXHJcblx0XHRzYXZlUHJvamVjdHMoKTtcclxuXHJcblx0fVxyXG5cclxuXHQvL2xvY2FsIHN0b3JhZ2VcclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQcm9qZWN0czsiLCJpbXBvcnQgRE9NSW50ZXJmYWNlIGZyb20gJy4vRE9NSW50ZXJmYWNlLmpzJztcclxuLy8gaW1wb3J0IHJlbmRlclByb2plY3RzIGZyb20gJy4vcmVuZGVyUHJvamVjdHMuanMnO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIERPTUludGVyZmFjZSk7XHJcbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCByZW5kZXJQcm9qZWN0cyk7XHJcblxyXG5cclxuLy8gY3JlYXRlIGRlbGV0ZSBwcm9qZWN0cyBmeG5cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoKSB7XHJcblxyXG5cdC8vb24gcHJlc3NpbmcgYnV0dG9uIGRlbGV0ZSBwcm9qZWN0XHJcblx0XHJcblx0ZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBmdW5jdGlvbiAoIGV2ZW50ICkge1xyXG5cdFx0aWYoIGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT0gJ2RlbGV0ZVByb2plY3RCdG4nICkge1xyXG5cdFx0XHQvLyBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcclxuXHRcdFx0Ly8gZGVsZXRlIHByb2plY3QgZnJvbSBsb2NhbCBzdG9yYWdlXHJcblx0XHRcdGxldCBwcm9qZWN0VG9EZWxldGUgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdCcpO1xyXG5cclxuXHRcdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0ocHJvamVjdFRvRGVsZXRlKTtcclxuXHRcdFx0Y29uc29sZS5sb2cobG9jYWxTdG9yYWdlKTtcclxuXHRcdH07XHJcblx0fSk7XHJcblxyXG5cclxuXHRcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVsZXRlUHJvamVjdDsiLCJpbXBvcnQgRE9NSW50ZXJmYWNlIGZyb20gJy4vRE9NSW50ZXJmYWNlLmpzJztcclxuaW1wb3J0IGNyZWF0ZVByb2plY3RzIGZyb20gJy4vY3JlYXRlUHJvamVjdHMuanMnO1xyXG5pbXBvcnQgZGVsZXRlUHJvamVjdHMgZnJvbSAnLi9kZWxldGVQcm9qZWN0cy5qcyc7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgRE9NSW50ZXJmYWNlKTtcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGNyZWF0ZVByb2plY3RzKTtcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGRlbGV0ZVByb2plY3RzKTtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdHMoKSB7XHJcblxyXG5cclxuXHQvLyBjcmVhdGUgZGVmYXVsdCBwcm9qZWN0c1xyXG5cclxuXHRsZXQgeW91dHViZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG5cdHlvdXR1YmVQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2xpc3QtbmFtZScsICdhY3RpdmUtbGlzdCcpO1xyXG5cdHlvdXR1YmVQcm9qZWN0LnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0JywgJ1lvdXR1YmUnKTtcclxuXHR5b3V0dWJlUHJvamVjdC5pbm5lckhUTUwgPSBgPGltZyBjbGFzcz1cImxpc3QtaW1nXCIgc3JjPVwiLi4vc3JjL2ltYWdlcy9zdmcvbGlzdC5zdmdcIiBhbHQ9XCJsaXN0XCI+YCArIGBZb3V0dWJlYCArIGA8YnV0dG9uIGNsYXNzPVwiZGVsZXRlUHJvamVjdEJ0blwiPlg8L2J1dHRvbj5gO1xyXG5cclxuXHRsZXQgd29ya1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG5cdHdvcmtQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2xpc3QtbmFtZScpO1xyXG5cdHdvcmtQcm9qZWN0LnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0JywgJ1dvcmsnKTtcclxuXHR3b3JrUHJvamVjdC5pbm5lckhUTUwgPSBgPGltZyBjbGFzcz1cImxpc3QtaW1nXCIgc3JjPVwiLi4vc3JjL2ltYWdlcy9zdmcvbGlzdC5zdmdcIiBhbHQ9XCJsaXN0XCI+YCArIGBXb3JrYCArIGA8YnV0dG9uIGNsYXNzPVwiZGVsZXRlUHJvamVjdEJ0blwiPlg8L2J1dHRvbj5gO1xyXG5cclxuXHRsZXQgZ3JvY2VyeVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG5cdGdyb2NlcnlQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2xpc3QtbmFtZScpO1xyXG5cdGdyb2NlcnlQcm9qZWN0LnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0JywgJ0dyb2NlcnknKTtcclxuXHRncm9jZXJ5UHJvamVjdC5pbm5lckhUTUwgPSBgPGltZyBjbGFzcz1cImxpc3QtaW1nXCIgc3JjPVwiLi4vc3JjL2ltYWdlcy9zdmcvbGlzdC5zdmdcIiBhbHQ9XCJsaXN0XCI+YCArIGBHcm9jZXJ5YCArIGA8YnV0dG9uIGNsYXNzPVwiZGVsZXRlUHJvamVjdEJ0blwiPlg8L2J1dHRvbj5gO1xyXG5cclxuXHRwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmQoeW91dHViZVByb2plY3QsIHdvcmtQcm9qZWN0LCBncm9jZXJ5UHJvamVjdCk7XHJcblxyXG5cclxuXHQvLyBjcmVhdGUgZGVmYXVsdCB0YXNrc1xyXG5cdGxldCB5b3V0dWJlVGFza3MgPSBgXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ0YXNrXCI+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwidGFzay0xXCIgbmFtZT1cInRhc2stMVwiIHZhbHVlPVwidGFza1wiLz5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwidGFzay0xXCIgZGF0YS1jb250ZW50PVwiUmVjb3JkIHRvZG8gbGlzdCB2aWRlbyB0aGF0IGlzIGxvbmdcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFJlY29yZCB0b2RvIGxpc3QgdmlkZW8gdGhhdCBpcyBsb25nXHJcblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidGFza1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cInRhc2stMlwiIG5hbWU9XCJ0YXNrLTJcIiB2YWx1ZT1cInRhc2tcIi8+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGZvcj1cInRhc2stMlwiIGRhdGEtY29udGVudD1cIkFub3RoZXIgVGFza1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0QW5vdGhlciBUYXNrXHJcblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidGFza1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cInRhc2stM1wiIG5hbWU9XCJ0YXNrLTNcIiB2YWx1ZT1cInRhc2tcIi8+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGZvcj1cInRhc2stM1wiIGRhdGEtY29udGVudD1cIlRoaXJkIFRhc2tcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFRoaXJkIFRhc2tcclxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdGA7XHJcblxyXG5cdGxldCB3b3JrVGFza3MgPSBgXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ0YXNrXCI+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwidGFzay00XCIgbmFtZT1cInRhc2stNFwiIHZhbHVlPVwidGFza1wiLz5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwidGFzay00XCIgZGF0YS1jb250ZW50PVwiQ29kZSBhIG5ldyBwcm9qZWN0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRDb2RlIGEgbmV3IHByb2plY3RcclxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ0YXNrXCI+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwidGFzay01XCIgbmFtZT1cInRhc2stNVwiIHZhbHVlPVwidGFza1wiLz5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwidGFzay01XCIgZGF0YS1jb250ZW50PVwiQ2hlY2sgRS1tYWlsXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRDaGVjayBFLW1haWxcclxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ0YXNrXCI+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwidGFzay02XCIgbmFtZT1cInRhc2stNlwiIHZhbHVlPVwidGFza1wiLz5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwidGFzay02XCIgZGF0YS1jb250ZW50PVwiQ2FsbCBKb2huIERvZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0Q2FsbCBKb2huIERvZVxyXG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0YDtcclxuXHJcblx0bGV0IGdyb2NlcnlUYXNrcyA9IGBcclxuXHRcclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRhc2tcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJ0YXNrLTdcIiBuYW1lPVwidGFzay03XCIgdmFsdWU9XCJ0YXNrXCIvPlxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJ0YXNrLTdcIiBkYXRhLWNvbnRlbnQ9XCJCdXkgbWlsa1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0QnV5IG1pbGtcclxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ0YXNrXCI+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwidGFzay04XCIgbmFtZT1cInRhc2stOFwiIHZhbHVlPVwidGFza1wiLz5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwidGFzay04XCIgZGF0YS1jb250ZW50PVwiQnV5IGVnZ3NcIj5cclxuXHRcdFx0XHRcdFx0XHRcdEJ1eSBlZ2dzXHJcblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidGFza1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cInRhc2stOVwiIG5hbWU9XCJ0YXNrLTlcIiB2YWx1ZT1cInRhc2tcIi8+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGZvcj1cInRhc2stOVwiIGRhdGEtY29udGVudD1cIkJ1eSBicmVhZFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0QnV5IGJyZWFkXHJcblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRgO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcclxuXHJcblxyXG5cdHRhc2tzQ29udGFpbmVyLmlubmVySFRNTCA9IGAke3lvdXR1YmVUYXNrc31gO1xyXG5cclxuXHJcblx0Ly9zZWxlY3QgcHJvamVjdFxyXG5cdGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgZnVuY3Rpb24gKCBldmVudCApIHtcclxuXHRcdGlmKCBldmVudC50YXJnZXQuY2xhc3NOYW1lID09ICdsaXN0LW5hbWUnIHx8IGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT0gJ2xpc3QtbmFtZSBhY3RpdmUtbGlzdCcgKSB7XHJcblx0XHRcdGxldCBhbGxQcm9qZWN0cyA9IHByb2plY3RzQ29udGFpbmVyLmNoaWxkcmVuO1xyXG5cdFx0XHRmb3IgKGxldCBwcm9qZWN0IG9mIGFsbFByb2plY3RzKSB7XHJcblx0XHRcdFx0cHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtbGlzdCcpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGV2ZW50LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUtbGlzdCcpO1xyXG5cclxuXHRcdH07XHJcblx0fSk7XHJcblxyXG5cclxuXHQvL2FkZCBwcm9qZWN0IHRvIGxvY2FsIHN0b3JhZ2VcclxuXHJcblx0Ly9kZWZhdWx0IHByb2plY3RcclxuXHJcblx0Z2V0ZGVmYXVsdFByb2plY3RzKCk7XHJcblxyXG5cdGZ1bmN0aW9uIGdldGRlZmF1bHRQcm9qZWN0cygpIHtcclxuXHJcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh5b3V0dWJlUHJvamVjdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdCcpLCBKU09OLnN0cmluZ2lmeSh5b3V0dWJlUHJvamVjdCkpO1xyXG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0od29ya1Byb2plY3QuZ2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QnKSwgSlNPTi5zdHJpbmdpZnkod29ya1Byb2plY3QpKTtcclxuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKGdyb2NlcnlQcm9qZWN0LmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0JyksIEpTT04uc3RyaW5naWZ5KGdyb2NlcnlQcm9qZWN0KSk7XHJcblxyXG5cdH1cclxuXHJcblxyXG5cclxuXHRcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyUHJvamVjdHM7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vc3R5bGUvc3R5bGVzLmNzcyc7XHJcbmltcG9ydCBET01JbnRlcmZhY2UgZnJvbSAnLi9ET01JbnRlcmZhY2UuanMnO1xyXG5pbXBvcnQgY3JlYXRlUHJvamVjdHMgZnJvbSAnLi9jcmVhdGVQcm9qZWN0cy5qcyc7XHJcbmltcG9ydCBkZWxldGVQcm9qZWN0cyBmcm9tICcuL2RlbGV0ZVByb2plY3RzLmpzJztcclxuaW1wb3J0IHJlbmRlclByb2plY3RzIGZyb20gJy4vcmVuZGVyUHJvamVjdHMuanMnO1xyXG5cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBET01JbnRlcmZhY2UpO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgY3JlYXRlUHJvamVjdHMpO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZGVsZXRlUHJvamVjdHMpO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgcmVuZGVyUHJvamVjdHMpO1xyXG5cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9