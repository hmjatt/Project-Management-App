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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n\t--clr-primary: rgb(41, 145, 255);\r\n\t--clr-lightGray: rgb(232, 232, 232);\r\n\t--clr-light: #f4f4f4;\r\n\t--clr-dark: rgb(58, 58, 58);\r\n\t--clr-white: rgb(252, 252, 252);\r\n\t--clr-warning: #e97560;\r\n\t--clr-navHighlight: #4f7794d0;\r\n\t--clr-mineShaft: #232323;\r\n\t--clr-gallery: #ededed;\r\n\t--clr-elfGreen: #058179;\r\n\t--clr-nebula: #cbdbda;\r\n\t--clr-completedTask: #a5b1c0;\r\n\t--clr-delete: #ff494962;\r\n}\r\n\r\nhtml {\r\n\tfont-family: 'Source Sans Pro', sans-serif;\r\n\r\n}\r\n\r\nbody {\r\n\tpadding-bottom: 10%;\r\n\tmargin: 0;\r\n\tbackground: var(--clr-nebula);\r\n\tcolor: var(--clr-mineShaft);\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\t\r\n}\r\n\r\nh1 {\r\n\tcolor: var(--clr-dark);\r\n\tfont-size: 3rem;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-self: center;\r\n\talign-items: center;\r\n\tmargin: -0.5em 0.5em 0.5em 40.5%;\r\n\tz-index: 2;\r\n\tposition: absolute;\r\n}\r\n\r\n.hideH1 {\r\n\tdisplay: none;\r\n}\r\n\r\nh2 {\r\n\tmargin-bottom: 0px;\r\n}\r\n\r\n#container {\r\n\tmargin-right: -18%;\r\n\tmargin-top: 50px;\r\n\tpadding-left: 1%;\r\n\tdisplay: grid;\r\n\tjustify-content: space-around;\r\n\tgrid-template-columns: 1fr;\r\n\tgrid-template-rows: auto;\r\n\tgrid-template-areas: \r\n\t  \"projects\"\r\n\t  \"tasks\"\r\n\t  \"logo\";\r\n} \r\n\r\n#gitLogoDivContainer {\r\n\tgrid-area: logo;\r\n\tmargin-top: 30px;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-self: center;\r\n\talign-items: center;\r\n}\r\n\r\n.gitLogo {\r\n\twidth: 85px;\r\n\theight: 85px;\r\n}\r\n\r\n#navContainer {\r\n\t/* display: flex;\r\n\tflex-direction: column; */\r\n\tposition: relative;\r\n\tmargin-bottom: 10vw;\r\n\tgrid-area: projects;\r\n}\r\n\r\n#menuToggle {\r\n\tdisplay: block;\r\n\tposition: relative;\r\n\tmax-width: 50vw;\r\n\ttop: 50px;\r\n\tleft: 50px;\r\n\tz-index: 1;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n}\r\n\r\n#menuToggle li {\r\n\ttext-decoration: none;\r\n\t-webkit-transition: color 0.3s ease;\r\n\t-o-transition: color 0.3s ease;\r\n\ttransition: color 0.3s ease;\r\n\tpadding: 10px 0px 10px 50px;\r\n\tfont-size: 22px;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n\r\n#menuToggle li:hover {\r\n\tfont-weight: 700;\r\n}\r\n\r\n\r\n/* The hamburger button hidden inside an #inputMenu element */\r\n#menuToggle #inputMenu {\r\n\tdisplay: block;\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tposition: absolute;\r\n\ttop: -7px;\r\n\tleft: -5px;\r\n\tpadding: 0;\r\n\tcursor: pointer;\r\n\t\r\n\topacity: 0;\r\n\t/* hide this */\r\n\tz-index: 2;\r\n\t/* and place it over the hamburger */\r\n\t-webkit-touch-callout: none;\r\n}\r\n\r\n#menuToggle #labelMenu {\r\n\tposition: relative;\r\n\tdisplay: block;\r\n\twidth: 30px;\r\n\theight: 30px;\r\n}\r\n\r\n#menuToggle #labelMenu span {\r\n\tdisplay: none;\r\n}\r\n\r\n/*\r\n * Hamburger\r\n */\r\n#menuToggle #labelMenu div {\r\n\tdisplay: block;\r\n\twidth: 30px;\r\n\theight: 2px;\r\n\tmargin-bottom: 6px;\r\n\tposition: relative;\r\n\tbackground: var(--clr-elfGreen);\r\n\tborder-radius: 5px;\r\n\tz-index: 1;\r\n\t-webkit-transform-origin: 4px 0px;\r\n\t-ms-transform-origin: 4px 0px;\r\n\ttransform-origin: 4px 0px;\r\n\t-webkit-transition: all 0.3s ease;\r\n\t-o-transition: all 0.3s ease;\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n#menuToggle #labelMenu div:first-child {\r\n\t-webkit-transform-origin: 0% 100%;\r\n\t-ms-transform-origin: 0% 100%;\r\n\ttransform-origin: 0% 100%;\r\n}\r\n\r\n#menuToggle #labelMenu div:nth-child(2) {\r\n\t-webkit-transform-origin: 0% 0%;\r\n\t-ms-transform-origin: 0% 0%;\r\n\ttransform-origin: 0% 0%;\r\n}\r\n\r\n/* \r\n * Change the color of the hamburger when toggled\r\n */\r\n#menuToggle #inputMenu:checked+#labelMenu div {\r\n\tbackground: var(--clr-mineShaft);\r\n\t\r\n}\r\n\r\n/*\r\n * Use absolute positioning to place the menu off-screen\r\n */\r\n#menu {\r\n\tposition: relative;\r\n\twidth: 100vw;\r\n\tmax-width: 900px;\r\n\tmargin: -80px 0 0 -50px;\r\n\tpadding: 50px 0px 50px 0px;\r\n\tpadding-top: 125px;\r\n\tbackground: var(--clr-light);\r\n\tbox-shadow: \r\n\t\t\t\t0 2.8px 2.2px rgba(0, 0, 0, 0.034),\r\n\t\t\t\t0 6.7px 5.3px rgba(0, 0, 0, 0.048),\r\n\t\t\t\t0 12.5px 10px rgba(0, 0, 0, 0.06),\r\n\t\t\t\t0 22.3px 17.9px rgba(0, 0, 0, 0.072),\r\n\t\t\t\t0 41.8px 33.4px rgba(0, 0, 0, 0.086);\r\n\tborder-radius: 20px;\r\n\tlist-style-type: none;\r\n\t/* Hide the menu off-screen to the left */\r\n\tleft: 0;\r\n\t-webkit-transition: left 0.3s ease;\r\n\t-o-transition: left 0.3s ease;\r\n\ttransition: left 0.3s ease;\r\n}\r\n\r\n\r\n\r\n/*\r\n * Slide the menu in from left when the #inputMenu is checked\r\n */\r\n#menuToggle #inputMenu:checked~ul {\r\n\r\n\ttransition: left 0.3s ease;\r\n\tleft: -200%;\r\n}\r\n\r\n.list-name {\r\n\tcursor: pointer;\r\n}\r\n\r\n.list-img {\r\n\twidth: 1.7em;\r\n\tpadding-right: 10px;\r\n}\r\n\r\n.active-list {\r\n\tbackground-color: var(--clr-elfGreen);\r\n\tborder-radius: 35px;\r\n\tmargin: 0px 25px 0px 25px;\r\n\tcolor: var(--clr-light);\r\n}\r\n\r\n#myForm {\r\n\tdisplay: none;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tmargin-top: 1.8em;\r\n\ttransition: all 0.3s ease;\r\n\t\r\n}\r\n\r\n#myForm form, #myTasks form {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tfont-size: 1.3em;\r\n\tbackground-color: var(--clr-white);\r\n\tborder: 1px solid var(--clr-elfGreen);\r\n\twidth: 15em;\r\n\tpadding: 2em .6em 1.5em .6em;\r\n\tborder-radius: 20px;\r\n}\r\n\r\n#addProjectForm {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n}\r\n\r\n#addProjectButton {\r\n\tmargin-top: 30px;\r\n\tbackground-color: var(--clr-elfGreen);\r\n\tcolor: var(--clr-light);\r\n\tborder: none;\r\n\tborder-radius: 42px;\r\n\tfont-size: 1.4em;\r\n\tpadding: 2% 10% 2% 8%;\r\n\tfont-family: 'Source Sans Pro', sans-serif;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n#addProjectButton:hover {\r\n\tcolor: var(--clr-light);\r\n\topacity: 0.8;\r\n}\r\n\r\n#addProjectButton span {\r\n\tfont-size: 1.6em;\r\n\tfont-weight: 300;\r\n\tpadding: 0px 10px 0px 3px;\r\n\t\r\n}\r\n\r\n#submitBtn, #taskSubmitButton {\r\n \tfont-family: 'Source Sans Pro', sans-serif;\r\n \tbackground-color: var(--clr-elfGreen);\r\n \tcolor: var(--clr-light);\r\n \tborder: none;\r\n \tborder-radius: 32px;\r\n \tfont-size: 1em;\r\n \tpadding: 2% 30% 2% 30%;\r\n\t transition: all 0.3s ease;\r\n}\r\n\r\n#submitBtn:hover, #taskSubmitBtn:hover {\r\n\topacity: 0.8;\r\n}\r\n\r\n#projectLabel, #taskLabel {\r\n\tfont-size: 1.3em;\r\n\tfont-weight: 700;\r\n}\r\n\r\n#projectInput, #taskInput {\r\n\tfont-size: 0.8em;\r\n\tfont-weight: 400;\r\n\tfont-family: 'Source Sans Pro', sans-serif;\r\n\tborder-radius: 15px;\r\n\tpadding: 0px 15px 0px 15px;\r\n}\r\n\r\n.deleteProjectBtn {\r\n\tborder: 1px solid var(--clr-mineShaft);\r\n\tbackground: var(--clr-warning);\r\n\tborder-radius: 20px;\r\n\tpadding: 3px 7px 2px 7px;\r\n\tfont-size: 0.7em;\r\n\tdisplay: flex;\r\n\tmargin: 0.5% 2% 0 2%;\r\n\tcursor: pointer;\r\n\tfont-weight: 300;\r\n}\r\n\r\n#taskList {\r\n\tgrid-area: tasks;\r\n\t/* margin-bottom: 130vh; */\r\n\t/* margin-top: 50vh; */\r\n}\r\n\r\n.todo-list {\r\n\ttransition: all 0.3s ease;\r\n\tmargin-top: 5em;\r\n\tbackground: var(--clr-gallery);\r\n\tborder-radius: 20px;\r\n\twidth: 100vw;\r\n\tmax-width: 900px;\r\n\tpadding-top: 3%;\r\n\tpadding-bottom: 1%;\r\n\tbox-shadow: \r\n\t\t\t\t0 2.8px 2.2px rgba(0, 0, 0, 0.034),\r\n\t\t\t\t0 6.7px 5.3px rgba(0, 0, 0, 0.048),\r\n\t\t\t\t0 12.5px 10px rgba(0, 0, 0, 0.06),\r\n\t\t\t\t0 22.3px 17.9px rgba(0, 0, 0, 0.072),\r\n\t\t\t\t0 41.8px 33.4px rgba(0, 0, 0, 0.086),\r\n\t\t\t\t0 100px 80px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.addMarginAfterClick {\r\n\tmargin-top: 26vh;\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n.removeMarginAfterClick {\r\n\ttransform: translateY(-70%);\r\n\t/* margin-top: -10vh; */\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n\r\n.todo-header {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tbackground-color: var(--clr-light);\r\n\tborder: 1px solid var(--clr-elfGreen);\r\n\tborder-radius: 20px;\r\n\tmargin: 0% 5% 5% 5%;\r\n}\r\n\r\n.task-count {\r\n\tcolor: var(--clr-primary);\r\n}\r\n\r\n.todo-body {\r\n\tbackground-color: var(--clr-light);\r\n\tborder: 1px solid var(--clr-elfGreen);\r\n\tborder-radius: 20px;\r\n\tpadding: 5% 1% 0% 1%;\r\n\tmargin: 5%;\r\n}\r\n\r\n#myTasks {\r\n\tdisplay: none;\r\n}\r\n\r\n#addTaskButton {\r\n\tfont-family: 'Source Sans Pro', sans-serif;\r\n \tbackground-color: var(--clr-elfGreen);\r\n \tcolor: var(--clr-light);\r\n \tborder: none;\r\n \tborder-radius: 32px;\r\n \tfont-size: 1.1em;\r\n \tpadding: 2% 10% 2% 4%;\r\n\t display: flex;\r\n\t align-items: center;\r\n\t margin-bottom: 20px;\r\n\t transition: all 0.3s ease;\r\n}\r\n\r\n#addTaskButton:hover {\r\n\topacity: 0.8;\r\n}\r\n\r\n#addTaskButton span {\r\n\tfont-size: 1.5em;\r\n\tfont-weight: 400;\r\n\tpadding: 0px 10px 0px 13px;\r\n}\r\n\r\n#createTaskContainer {\r\n\tborder-radius: 20px;\r\n\tpadding: 5%;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n}\r\n\r\n\r\n#tasksContainer {\r\n\tborder-radius: 20px;\r\n\tmargin-bottom: 15px;\r\n}\r\n\r\n#tasksContainer input[type=\"checkbox\"] {\r\n\tposition: relative;\r\n\tborder: 2px solid var(--clr-mineShaft);\r\n\tborder-radius: 14px;\r\n\tappearance: none;\r\n\toutline: 0;\r\n\tcursor: pointer;\r\n\ttransition: background 175ms cubic-bezier(0.1, 0.1, 0.25, 1);\r\n}\r\n\r\n#tasksContainer input[type=\"checkbox\"]::before {\r\n\tposition: absolute;\r\n\tcontent: '';\r\n\tdisplay: block;\r\n    top: -6px;\r\n    left: 9px;\r\n    width: 8px;\r\n    height: 21px;\r\n\tborder-style: solid;\r\n\tborder-color: var(--clr-mineShaft);\r\n\tborder-width: 0 3px 3px 0;\r\n\ttransform: rotate(45deg);\r\n\topacity: 0;\r\n}\r\n\r\n#tasksContainer input[type=\"checkbox\"]:checked {\r\n\tcolor: var(--clr-mineShaft);\r\n\tborder-color: var(--clr-mineShaft);\r\n\tbackground: var(--clr-primary);\r\n}\r\n\r\n#tasksContainer input[type=\"checkbox\"]:checked::before {\r\n\topacity: 1;\r\n}\r\n\r\n#tasksContainer input[type=\"checkbox\"]:checked ~ label::before {\r\n\tclip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\r\n}\r\n\r\n#tasksContainer label {\r\n\tposition: relative;\r\n\tcursor: pointer;\r\n\tfont-size: 1.3em;\r\n\tfont-weight: 400;\r\n\tpadding: 0 0.45em 0;\r\n\tuser-select: none;\r\n\r\n}\r\n\r\n#tasksContainer label::before {\r\n\tposition: absolute;\r\n\tcontent: attr(data-content);\r\n\tcolor: var(--clr-completedTask);\r\n\tclip-path: polygon(0 0, 0 0, 0% 100%, 0 100%);\r\n\ttext-decoration: line-through;\r\n\ttext-decoration-thickness: 3px;\r\n\ttext-decoration-color: var(--clr-dark);\r\n\ttop: 0px;\r\n\ttransition: clip-path 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);\r\n}\r\n\r\n.task label {\r\n\tbottom: 0px;\r\n}\r\n\r\n.task {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tbackground-color: var(--clr-gallery);\r\n\tborder: 1px solid var(--clr-primary);\r\n\tmargin: 2%;\r\n\tpadding: 2%;\r\n\tborder-radius: 10px;\r\n}\r\n\r\n#tasksContainer .task input {\r\n\theight: 25px;\r\n\twidth: 25px;\r\n\tmin-width: 25px;\r\n}\r\n\r\n#tasksContainer input:hover {\r\n\tborder: 2px solid var(--clr-primary);\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n#noTasks{\r\n\tfont-size: 1.3em;\r\n}\r\n\r\n.delete-stuff {\r\n\tdisplay: flex;\r\n\tflex-direction: column;}\r\n\r\n.delete-stuff button {\r\n\tfont-family: 'Source Sans Pro', sans-serif;\r\n\tborder: none;\r\n\tmargin: 0.5em;\r\n\tborder-radius: 12px;\r\n\tfont-size: 1em;\r\n\tpadding: 0.11em 1em 0.11em 1em;\r\n\ttransition: all 0.3s ease;\r\n}\r\n.delete-stuff button:hover {\r\n\topacity: 0.8;\r\n}\r\n\r\n#clearBtn {\r\n\tbackground-color: var(--clr-navHighlight);\r\n\tcolor: var(--clr-mineShaft);\r\n}\r\n\r\n#deleteBtn {\r\n\tbackground-color: var(--clr-delete);\r\n\tcolor: var(--clr-mineShaft);\r\n}\r\n\r\n@media (min-width: 375px) {\r\n\t#menu, #taskList {\r\n\t\twidth: 92vw;\r\n\t}\r\n\t#container {\r\n\t\tmargin-right: 0%;\r\n\t\tmargin-left: 0%;\r\n\t\tpadding-left: 1%;\r\n\t}\r\n}\r\n\r\n@media (min-width: 768px) {\r\n\t.todo-list{\r\n\t\tmargin-top: 7em;\r\n\t}\r\n}\r\n\r\n@media (min-width: 1100px) {\r\n\t#container {\r\n\t\tmargin-right: 0%;\r\n\t\tmargin-left: 0%;\r\n\t}\r\n\r\n\t.todo-list{\r\n\t\tmargin-top: 7em;\r\n\t}\r\n\r\n}\r\n\r\n/* @media (min-width: 1400px) {\r\n\t.todo-list{\r\n\t\tmargin-top: 0em;\r\n\t}\r\n} */\r\n\r\n", "",{"version":3,"sources":["webpack://./src/style/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n\t--clr-primary: rgb(41, 145, 255);\r\n\t--clr-lightGray: rgb(232, 232, 232);\r\n\t--clr-light: #f4f4f4;\r\n\t--clr-dark: rgb(58, 58, 58);\r\n\t--clr-white: rgb(252, 252, 252);\r\n\t--clr-warning: #e97560;\r\n\t--clr-navHighlight: #4f7794d0;\r\n\t--clr-mineShaft: #232323;\r\n\t--clr-gallery: #ededed;\r\n\t--clr-elfGreen: #058179;\r\n\t--clr-nebula: #cbdbda;\r\n\t--clr-completedTask: #a5b1c0;\r\n\t--clr-delete: #ff494962;\r\n}\r\n\r\nhtml {\r\n\tfont-family: 'Source Sans Pro', sans-serif;\r\n\r\n}\r\n\r\nbody {\r\n\tpadding-bottom: 10%;\r\n\tmargin: 0;\r\n\tbackground: var(--clr-nebula);\r\n\tcolor: var(--clr-mineShaft);\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\t\r\n}\r\n\r\nh1 {\r\n\tcolor: var(--clr-dark);\r\n\tfont-size: 3rem;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-self: center;\r\n\talign-items: center;\r\n\tmargin: -0.5em 0.5em 0.5em 40.5%;\r\n\tz-index: 2;\r\n\tposition: absolute;\r\n}\r\n\r\n.hideH1 {\r\n\tdisplay: none;\r\n}\r\n\r\nh2 {\r\n\tmargin-bottom: 0px;\r\n}\r\n\r\n#container {\r\n\tmargin-right: -18%;\r\n\tmargin-top: 50px;\r\n\tpadding-left: 1%;\r\n\tdisplay: grid;\r\n\tjustify-content: space-around;\r\n\tgrid-template-columns: 1fr;\r\n\tgrid-template-rows: auto;\r\n\tgrid-template-areas: \r\n\t  \"projects\"\r\n\t  \"tasks\"\r\n\t  \"logo\";\r\n} \r\n\r\n#gitLogoDivContainer {\r\n\tgrid-area: logo;\r\n\tmargin-top: 30px;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-self: center;\r\n\talign-items: center;\r\n}\r\n\r\n.gitLogo {\r\n\twidth: 85px;\r\n\theight: 85px;\r\n}\r\n\r\n#navContainer {\r\n\t/* display: flex;\r\n\tflex-direction: column; */\r\n\tposition: relative;\r\n\tmargin-bottom: 10vw;\r\n\tgrid-area: projects;\r\n}\r\n\r\n#menuToggle {\r\n\tdisplay: block;\r\n\tposition: relative;\r\n\tmax-width: 50vw;\r\n\ttop: 50px;\r\n\tleft: 50px;\r\n\tz-index: 1;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n}\r\n\r\n#menuToggle li {\r\n\ttext-decoration: none;\r\n\t-webkit-transition: color 0.3s ease;\r\n\t-o-transition: color 0.3s ease;\r\n\ttransition: color 0.3s ease;\r\n\tpadding: 10px 0px 10px 50px;\r\n\tfont-size: 22px;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n\r\n#menuToggle li:hover {\r\n\tfont-weight: 700;\r\n}\r\n\r\n\r\n/* The hamburger button hidden inside an #inputMenu element */\r\n#menuToggle #inputMenu {\r\n\tdisplay: block;\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tposition: absolute;\r\n\ttop: -7px;\r\n\tleft: -5px;\r\n\tpadding: 0;\r\n\tcursor: pointer;\r\n\t\r\n\topacity: 0;\r\n\t/* hide this */\r\n\tz-index: 2;\r\n\t/* and place it over the hamburger */\r\n\t-webkit-touch-callout: none;\r\n}\r\n\r\n#menuToggle #labelMenu {\r\n\tposition: relative;\r\n\tdisplay: block;\r\n\twidth: 30px;\r\n\theight: 30px;\r\n}\r\n\r\n#menuToggle #labelMenu span {\r\n\tdisplay: none;\r\n}\r\n\r\n/*\r\n * Hamburger\r\n */\r\n#menuToggle #labelMenu div {\r\n\tdisplay: block;\r\n\twidth: 30px;\r\n\theight: 2px;\r\n\tmargin-bottom: 6px;\r\n\tposition: relative;\r\n\tbackground: var(--clr-elfGreen);\r\n\tborder-radius: 5px;\r\n\tz-index: 1;\r\n\t-webkit-transform-origin: 4px 0px;\r\n\t-ms-transform-origin: 4px 0px;\r\n\ttransform-origin: 4px 0px;\r\n\t-webkit-transition: all 0.3s ease;\r\n\t-o-transition: all 0.3s ease;\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n#menuToggle #labelMenu div:first-child {\r\n\t-webkit-transform-origin: 0% 100%;\r\n\t-ms-transform-origin: 0% 100%;\r\n\ttransform-origin: 0% 100%;\r\n}\r\n\r\n#menuToggle #labelMenu div:nth-child(2) {\r\n\t-webkit-transform-origin: 0% 0%;\r\n\t-ms-transform-origin: 0% 0%;\r\n\ttransform-origin: 0% 0%;\r\n}\r\n\r\n/* \r\n * Change the color of the hamburger when toggled\r\n */\r\n#menuToggle #inputMenu:checked+#labelMenu div {\r\n\tbackground: var(--clr-mineShaft);\r\n\t\r\n}\r\n\r\n/*\r\n * Use absolute positioning to place the menu off-screen\r\n */\r\n#menu {\r\n\tposition: relative;\r\n\twidth: 100vw;\r\n\tmax-width: 900px;\r\n\tmargin: -80px 0 0 -50px;\r\n\tpadding: 50px 0px 50px 0px;\r\n\tpadding-top: 125px;\r\n\tbackground: var(--clr-light);\r\n\tbox-shadow: \r\n\t\t\t\t0 2.8px 2.2px rgba(0, 0, 0, 0.034),\r\n\t\t\t\t0 6.7px 5.3px rgba(0, 0, 0, 0.048),\r\n\t\t\t\t0 12.5px 10px rgba(0, 0, 0, 0.06),\r\n\t\t\t\t0 22.3px 17.9px rgba(0, 0, 0, 0.072),\r\n\t\t\t\t0 41.8px 33.4px rgba(0, 0, 0, 0.086);\r\n\tborder-radius: 20px;\r\n\tlist-style-type: none;\r\n\t/* Hide the menu off-screen to the left */\r\n\tleft: 0;\r\n\t-webkit-transition: left 0.3s ease;\r\n\t-o-transition: left 0.3s ease;\r\n\ttransition: left 0.3s ease;\r\n}\r\n\r\n\r\n\r\n/*\r\n * Slide the menu in from left when the #inputMenu is checked\r\n */\r\n#menuToggle #inputMenu:checked~ul {\r\n\r\n\ttransition: left 0.3s ease;\r\n\tleft: -200%;\r\n}\r\n\r\n.list-name {\r\n\tcursor: pointer;\r\n}\r\n\r\n.list-img {\r\n\twidth: 1.7em;\r\n\tpadding-right: 10px;\r\n}\r\n\r\n.active-list {\r\n\tbackground-color: var(--clr-elfGreen);\r\n\tborder-radius: 35px;\r\n\tmargin: 0px 25px 0px 25px;\r\n\tcolor: var(--clr-light);\r\n}\r\n\r\n#myForm {\r\n\tdisplay: none;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tmargin-top: 1.8em;\r\n\ttransition: all 0.3s ease;\r\n\t\r\n}\r\n\r\n#myForm form, #myTasks form {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tfont-size: 1.3em;\r\n\tbackground-color: var(--clr-white);\r\n\tborder: 1px solid var(--clr-elfGreen);\r\n\twidth: 15em;\r\n\tpadding: 2em .6em 1.5em .6em;\r\n\tborder-radius: 20px;\r\n}\r\n\r\n#addProjectForm {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n}\r\n\r\n#addProjectButton {\r\n\tmargin-top: 30px;\r\n\tbackground-color: var(--clr-elfGreen);\r\n\tcolor: var(--clr-light);\r\n\tborder: none;\r\n\tborder-radius: 42px;\r\n\tfont-size: 1.4em;\r\n\tpadding: 2% 10% 2% 8%;\r\n\tfont-family: 'Source Sans Pro', sans-serif;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n#addProjectButton:hover {\r\n\tcolor: var(--clr-light);\r\n\topacity: 0.8;\r\n}\r\n\r\n#addProjectButton span {\r\n\tfont-size: 1.6em;\r\n\tfont-weight: 300;\r\n\tpadding: 0px 10px 0px 3px;\r\n\t\r\n}\r\n\r\n#submitBtn, #taskSubmitButton {\r\n \tfont-family: 'Source Sans Pro', sans-serif;\r\n \tbackground-color: var(--clr-elfGreen);\r\n \tcolor: var(--clr-light);\r\n \tborder: none;\r\n \tborder-radius: 32px;\r\n \tfont-size: 1em;\r\n \tpadding: 2% 30% 2% 30%;\r\n\t transition: all 0.3s ease;\r\n}\r\n\r\n#submitBtn:hover, #taskSubmitBtn:hover {\r\n\topacity: 0.8;\r\n}\r\n\r\n#projectLabel, #taskLabel {\r\n\tfont-size: 1.3em;\r\n\tfont-weight: 700;\r\n}\r\n\r\n#projectInput, #taskInput {\r\n\tfont-size: 0.8em;\r\n\tfont-weight: 400;\r\n\tfont-family: 'Source Sans Pro', sans-serif;\r\n\tborder-radius: 15px;\r\n\tpadding: 0px 15px 0px 15px;\r\n}\r\n\r\n.deleteProjectBtn {\r\n\tborder: 1px solid var(--clr-mineShaft);\r\n\tbackground: var(--clr-warning);\r\n\tborder-radius: 20px;\r\n\tpadding: 3px 7px 2px 7px;\r\n\tfont-size: 0.7em;\r\n\tdisplay: flex;\r\n\tmargin: 0.5% 2% 0 2%;\r\n\tcursor: pointer;\r\n\tfont-weight: 300;\r\n}\r\n\r\n#taskList {\r\n\tgrid-area: tasks;\r\n\t/* margin-bottom: 130vh; */\r\n\t/* margin-top: 50vh; */\r\n}\r\n\r\n.todo-list {\r\n\ttransition: all 0.3s ease;\r\n\tmargin-top: 5em;\r\n\tbackground: var(--clr-gallery);\r\n\tborder-radius: 20px;\r\n\twidth: 100vw;\r\n\tmax-width: 900px;\r\n\tpadding-top: 3%;\r\n\tpadding-bottom: 1%;\r\n\tbox-shadow: \r\n\t\t\t\t0 2.8px 2.2px rgba(0, 0, 0, 0.034),\r\n\t\t\t\t0 6.7px 5.3px rgba(0, 0, 0, 0.048),\r\n\t\t\t\t0 12.5px 10px rgba(0, 0, 0, 0.06),\r\n\t\t\t\t0 22.3px 17.9px rgba(0, 0, 0, 0.072),\r\n\t\t\t\t0 41.8px 33.4px rgba(0, 0, 0, 0.086),\r\n\t\t\t\t0 100px 80px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.addMarginAfterClick {\r\n\tmargin-top: 26vh;\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n.removeMarginAfterClick {\r\n\ttransform: translateY(-70%);\r\n\t/* margin-top: -10vh; */\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n\r\n.todo-header {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tbackground-color: var(--clr-light);\r\n\tborder: 1px solid var(--clr-elfGreen);\r\n\tborder-radius: 20px;\r\n\tmargin: 0% 5% 5% 5%;\r\n}\r\n\r\n.task-count {\r\n\tcolor: var(--clr-primary);\r\n}\r\n\r\n.todo-body {\r\n\tbackground-color: var(--clr-light);\r\n\tborder: 1px solid var(--clr-elfGreen);\r\n\tborder-radius: 20px;\r\n\tpadding: 5% 1% 0% 1%;\r\n\tmargin: 5%;\r\n}\r\n\r\n#myTasks {\r\n\tdisplay: none;\r\n}\r\n\r\n#addTaskButton {\r\n\tfont-family: 'Source Sans Pro', sans-serif;\r\n \tbackground-color: var(--clr-elfGreen);\r\n \tcolor: var(--clr-light);\r\n \tborder: none;\r\n \tborder-radius: 32px;\r\n \tfont-size: 1.1em;\r\n \tpadding: 2% 10% 2% 4%;\r\n\t display: flex;\r\n\t align-items: center;\r\n\t margin-bottom: 20px;\r\n\t transition: all 0.3s ease;\r\n}\r\n\r\n#addTaskButton:hover {\r\n\topacity: 0.8;\r\n}\r\n\r\n#addTaskButton span {\r\n\tfont-size: 1.5em;\r\n\tfont-weight: 400;\r\n\tpadding: 0px 10px 0px 13px;\r\n}\r\n\r\n#createTaskContainer {\r\n\tborder-radius: 20px;\r\n\tpadding: 5%;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n}\r\n\r\n\r\n#tasksContainer {\r\n\tborder-radius: 20px;\r\n\tmargin-bottom: 15px;\r\n}\r\n\r\n#tasksContainer input[type=\"checkbox\"] {\r\n\tposition: relative;\r\n\tborder: 2px solid var(--clr-mineShaft);\r\n\tborder-radius: 14px;\r\n\tappearance: none;\r\n\toutline: 0;\r\n\tcursor: pointer;\r\n\ttransition: background 175ms cubic-bezier(0.1, 0.1, 0.25, 1);\r\n}\r\n\r\n#tasksContainer input[type=\"checkbox\"]::before {\r\n\tposition: absolute;\r\n\tcontent: '';\r\n\tdisplay: block;\r\n    top: -6px;\r\n    left: 9px;\r\n    width: 8px;\r\n    height: 21px;\r\n\tborder-style: solid;\r\n\tborder-color: var(--clr-mineShaft);\r\n\tborder-width: 0 3px 3px 0;\r\n\ttransform: rotate(45deg);\r\n\topacity: 0;\r\n}\r\n\r\n#tasksContainer input[type=\"checkbox\"]:checked {\r\n\tcolor: var(--clr-mineShaft);\r\n\tborder-color: var(--clr-mineShaft);\r\n\tbackground: var(--clr-primary);\r\n}\r\n\r\n#tasksContainer input[type=\"checkbox\"]:checked::before {\r\n\topacity: 1;\r\n}\r\n\r\n#tasksContainer input[type=\"checkbox\"]:checked ~ label::before {\r\n\tclip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\r\n}\r\n\r\n#tasksContainer label {\r\n\tposition: relative;\r\n\tcursor: pointer;\r\n\tfont-size: 1.3em;\r\n\tfont-weight: 400;\r\n\tpadding: 0 0.45em 0;\r\n\tuser-select: none;\r\n\r\n}\r\n\r\n#tasksContainer label::before {\r\n\tposition: absolute;\r\n\tcontent: attr(data-content);\r\n\tcolor: var(--clr-completedTask);\r\n\tclip-path: polygon(0 0, 0 0, 0% 100%, 0 100%);\r\n\ttext-decoration: line-through;\r\n\ttext-decoration-thickness: 3px;\r\n\ttext-decoration-color: var(--clr-dark);\r\n\ttop: 0px;\r\n\ttransition: clip-path 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);\r\n}\r\n\r\n.task label {\r\n\tbottom: 0px;\r\n}\r\n\r\n.task {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tbackground-color: var(--clr-gallery);\r\n\tborder: 1px solid var(--clr-primary);\r\n\tmargin: 2%;\r\n\tpadding: 2%;\r\n\tborder-radius: 10px;\r\n}\r\n\r\n#tasksContainer .task input {\r\n\theight: 25px;\r\n\twidth: 25px;\r\n\tmin-width: 25px;\r\n}\r\n\r\n#tasksContainer input:hover {\r\n\tborder: 2px solid var(--clr-primary);\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n#noTasks{\r\n\tfont-size: 1.3em;\r\n}\r\n\r\n.delete-stuff {\r\n\tdisplay: flex;\r\n\tflex-direction: column;}\r\n\r\n.delete-stuff button {\r\n\tfont-family: 'Source Sans Pro', sans-serif;\r\n\tborder: none;\r\n\tmargin: 0.5em;\r\n\tborder-radius: 12px;\r\n\tfont-size: 1em;\r\n\tpadding: 0.11em 1em 0.11em 1em;\r\n\ttransition: all 0.3s ease;\r\n}\r\n.delete-stuff button:hover {\r\n\topacity: 0.8;\r\n}\r\n\r\n#clearBtn {\r\n\tbackground-color: var(--clr-navHighlight);\r\n\tcolor: var(--clr-mineShaft);\r\n}\r\n\r\n#deleteBtn {\r\n\tbackground-color: var(--clr-delete);\r\n\tcolor: var(--clr-mineShaft);\r\n}\r\n\r\n@media (min-width: 375px) {\r\n\t#menu, #taskList {\r\n\t\twidth: 92vw;\r\n\t}\r\n\t#container {\r\n\t\tmargin-right: 0%;\r\n\t\tmargin-left: 0%;\r\n\t\tpadding-left: 1%;\r\n\t}\r\n}\r\n\r\n@media (min-width: 768px) {\r\n\t.todo-list{\r\n\t\tmargin-top: 7em;\r\n\t}\r\n}\r\n\r\n@media (min-width: 1100px) {\r\n\t#container {\r\n\t\tmargin-right: 0%;\r\n\t\tmargin-left: 0%;\r\n\t}\r\n\r\n\t.todo-list{\r\n\t\tmargin-top: 7em;\r\n\t}\r\n\r\n}\r\n\r\n/* @media (min-width: 1400px) {\r\n\t.todo-list{\r\n\t\tmargin-top: 0em;\r\n\t}\r\n} */\r\n\r\n"],"sourceRoot":""}]);
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


	
	//tasks
	let addTaskButton = document.getElementById('addTaskButton');
	let taskSubmitButton = document.getElementById('taskSubmitButton');
	let tasksContainer = document.getElementById('tasksContainer');
	let projectTitle = document.getElementById('projectTitle');
	let newTaskForm = document.getElementById('newTaskForm');
	let taskInput = document.getElementById('taskInput');


	
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
		addTaskButton.style.display = "block";
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

// import renderProjects from './renderProjects.js';
// import deleteProjects from './deleteProjects.js';

document.addEventListener('DOMContentLoaded', _DOMInterface_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
// document.addEventListener('DOMContentLoaded', deleteProjects);




function createProjects() {


	// newProjectForm.addEventListener('submit', addProject);


	// // add new project to local storage
	// function addProject(event) {
	// 	event.preventDefault();

	// 	//if input is empty, don't add project
	// 	if (projectInput.value === '') {
	// 		return;
	// 	} else {
	// 		let newProject = projectInput.value;
	// 		let newProjectObj = {
	// 			projectName: newProject
	// 		};
	// 		let newProjectString = JSON.stringify(newProjectObj);
	// 		localStorage.setItem(newProject, newProjectString);
	// 		console.log(localStorage);
	// 		projectInput.value = '';

	// 		loadProjects();
	// 	}

		
		
	// }


	
	// //load projects when new project is added
	// function loadProjects() {
	// 	let projects = Object.keys(localStorage);
	// 	projects.forEach(function(project) {
	// 		//if project already exists, don't add it again
	// 		if (document.getElementById(project)) {
	// 			return;
	// 		} else {
	// 			createProject(project);
	// 		}
	// 	});
	// }

	// function createProject(projectName) {

	// 	let project = document.createElement('li');
	// 	project.classList.add('list-name');
	// 	project.setAttribute('data-project', projectName);
	// 	project.id = projectName;
		
	// 	let projectImg = document.createElement('img');
	// 	projectImg.classList.add('list-img');
	// 	projectImg.src = '../src/images/svg/list.svg';
	// 	projectImg.alt = 'list';

	// 	let deleteProjectButton = document.createElement('button');
	// 	deleteProjectButton.classList.add('deleteProjectBtn');
	// 	deleteProjectButton.innerText = 'X';

	// 	project.append(projectImg, projectName, deleteProjectButton);

	// 	projectsContainer.prepend(project);

	// }

	// // load projects from localStorage
	// loadProjects();


	
	const project = (() => {

		//create new Project
		const createProject = (a) => {

			const project = document.createElement('li');
			project.classList.add('list-name');
			project.setAttribute('data-project', a);
			project.id = a;
			const projectImg = document.createElement('img');
			projectImg.classList.add('list-img');
			projectImg.src = '../src/images/svg/list.svg';
			projectImg.alt = 'list';
			const deleteProjectButton = document.createElement('button');
			deleteProjectButton.classList.add('deleteProjectBtn');
			deleteProjectButton.innerText = 'X';
			project.append(projectImg, a, deleteProjectButton);
			projectsContainer.append(project);
			addProject();

		};

		// add new project to local storage
		const addProject = () => {
			// event.preventDefault();
			//if input is empty, don't add project
			if (projectInput.value === '') {
				return;
			} else {
				let newProject = projectInput.value;
				let newProjectObj = {
					projectName: newProject
				};
				let newProjectString = JSON.stringify(newProjectObj);
				localStorage.setItem(newProject, newProjectString);
				console.log(localStorage);
				projectInput.value = '';
				loadProjects();
			}
		
		}


		//load projects from localStorage when page loads


		const loadProjects = () => {
			let projects = Object.keys(localStorage);
			projects.forEach(function(project) {
				//if project already exists, don't add it again
				if (document.getElementById(project)) {
					return;
				} else {
					createProject(project);
				}
			});

		}


		return {
			addProject,
			loadProjects,
			createProject
		};

		
	})();

	//add event listener to create project when form is submitted
	newProjectForm.addEventListener('submit', getProjectName);

	//get project name from input and call createProject method
	function getProjectName(event) {
		event.preventDefault();
		let projectName = projectInput.value;
		// if project exists in local storage or project name is empty, don't add it again
		if (projectName === ''|| localStorage.getItem(projectName)) {
			return;
		} else {
			project.createProject(projectName);
		}
	
		console.log(projectName);
		return projectName;
	}

	//load projects from localStorage when page loads
	project.loadProjects();


}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProjects);

/***/ }),

/***/ "./src/createTasks.js":
/*!****************************!*\
  !*** ./src/createTasks.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOMInterface_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMInterface.js */ "./src/DOMInterface.js");
/* harmony import */ var _renderTasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderTasks.js */ "./src/renderTasks.js");

// import createProjects from './createProjects.js';
// import deleteProjects from './deleteProjects.js';


document.addEventListener('DOMContentLoaded', _DOMInterface_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
document.addEventListener('DOMContentLoaded', _renderTasks_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
// document.addEventListener('DOMContentLoaded', createProjects);
// document.addEventListener('DOMContentLoaded', deleteProjects);


function createTasks() {

	//create new task
	
	// let projectName = event.target.getAttribute('data-project');

	// //grab project name from data-project attribute
	// document.body.addEventListener( 'click', function ( event ) {
	// 	if( event.target.className == 'list-name active-list' ) {
	// 		let projectName = event.target.getAttribute('data-project');
	// 		// console.log(projectName, localStorage);

	// 		newTaskForm.addEventListener('submit', addTask);

	// 		// when i hit submit on new task form, add task to local storage with project name as key

	// 		function addTask(event) {
	// 			event.preventDefault();
	// 			let newTask = taskInput.value;
	// 			let newTaskObj = {
	// 				newTask: newTask
	// 			};
	// 			let newTaskString = JSON.stringify(newTaskObj);
	// 			localStorage.setItem(projectName, newTaskString);
	// 			taskInput.value = '';

	// 			loadTasks();
	// 		}

	// 		//load tasks when new task is added
	// 		function loadTasks() {
	// 			let tasks = localStorage.getItem(projectName);
	// 			console.log(typeof(tasks));
	// 			// tasks.forEach(function (task) {
	// 			// 	//if task already exists, don't add it again
	// 			// 	// if (document.getElementById(task)) {
	// 			// 	// 	return;
	// 			// 	// } else {
	// 			// 	// 	createTask(task);
	// 			// 	// }

					
	// 			// });
	// 			createTask(tasks);
				
	// 		}

	// 		function createTask(taskName) {
				
	// 			// let task = document.createElement('li');
	// 			// task.classList.add('list-name');
	// 			// task.setAttribute('data-task', taskName);
	// 			// task.id = taskName;

	// 			// let taskImg = document.createElement('img');
	// 			// taskImg.classList.add('list-img');
	// 			// taskImg.src = '../src/images/svg/list.svg';
	// 			// taskImg.alt = 'list';

	// 			// let deleteTaskButton = document.createElement('button');
	// 			// deleteTaskButton.classList.add('deleteTaskBtn');

	// 			// task.appendChild(taskImg);
	// 			// task.appendChild(deleteTaskButton);
	// 			// taskList.appendChild(task);
	// 			let task = document.createElement('div');
	// 			task.classList.add('task');
	// 			let taskInput = document.createElement('input');
	// 			taskInput.id = taskName;
	// 			taskInput.type = 'checkbox';
	// 			taskInput.name = taskName;
	// 			taskInput.value = taskName;
	// 			taskInput.classList.add('task-input');
				
	// 			let taskLabel = document.createElement('label');
	// 			taskLabel.classList.add('task-label');
	// 			taskLabel.setAttribute('for', taskName);
	// 			taskLabel.innerText = taskName;
	// 			taskLabel.setAttribute('data-task', taskName);

	// 			task.append(taskInput, taskLabel);

	// 			//add each task to array
	// 			let taskArray = [];
	// 			taskArray.push(task);



	// 		}


	// 	}
		
	// });



	//add tasks to default project

	

	// //check if task is checked change it in local storage
	// let checkboxes = document.querySelectorAll('input[type="checkbox"]');
	// checkboxes.forEach(checkbox => {
	// 	checkbox.addEventListener('click', () => {
	// 		let project = checkbox.parentElement.parentElement.parentElement.parentElement.getAttribute('data-project');
	// 		let task = checkbox.parentElement.parentElement.getAttribute('data-task');
	// 		let checked = checkbox.checked;
	// 		let projects = JSON.parse(localStorage.getItem('defaultProjects'));
	// 		projects[project][task]['checked'] = checked;
	// 		localStorage.setItem('defaultProjects', JSON.stringify(projects));
	// 		console.log(JSON.parse(localStorage.getItem('defaultProjects')));
	// 	});
	// }



	// create an IIFe to create tasks

	const task = (() => {


		//create new task using taskInput and add it to the selected project and add it to local storage
		const createNewTask = (taskName) => {
			let project = document.querySelector('.active-list').getAttribute('data-project');
			// console.log(project);

			const task = document.createElement('div');
			task.classList.add('task');
			task.setAttribute('data-task', taskName);
			task.setAttribute('data-project-name', project);
			const taskInput = document.createElement('input');
			taskInput.setAttribute('type', 'checkbox');
			taskInput.setAttribute('id', taskName);
			taskInput.setAttribute('data-task', taskName);
			taskInput.classList.add('task-input');
			// taskInput.id = taskName;
			const taskLabel = document.createElement('label');
			taskLabel.setAttribute('for', taskName);
			taskLabel.classList.add('task-label');
			taskLabel.setAttribute('data-content', taskName);
			taskLabel.innerText = taskName;

			task.append(taskInput, taskLabel);
			tasksContainer.append(task);

			//add task to local storage
			addTask();

			
		}

		// keep adding tasks to local storage
		const addTask = () => {
			let project = document.querySelector('.active-list').getAttribute('data-project');
			let task = document.querySelector('.task-input').getAttribute('data-task');
			let taskObj = {
				task: task,
			};
			let taskString = JSON.stringify(taskObj);
			localStorage.setItem(project, taskString);
			console.log(localStorage)
		}

		// append tasks to the selected project




		// const addTask = () => {
		// 	let project = document.querySelector('.active-list').getAttribute('data-project');
		// 	let taskName = taskInput.value;
		// 	let taskObj = {
		// 		taskName: taskName,
		// 	};
		// 	let taskString = JSON.stringify(taskObj);
		// 	localStorage.setItem(project, taskString);
		// 	document.querySelector('.task-input').value = '';
		// 	console.log(localStorage);
		// }
		



		// const addTask = () => {
		// 	let projectName = document.querySelector('.active-list').getAttribute('data-project');
		// 	let taskName = document.querySelector('.task-input').getAttribute('data-task');
		// 	let taskObj = {
		// 		taskName: taskName
		// 	};
		// 	let taskString = JSON.stringify(taskObj);
		// 	localStorage.setItem(projectName, taskString);
		// 	console.log(taskString);
		// 	console.log(localStorage);
		// }



	



	

	return {
		createNewTask,
	}

	})();




	
	
	//create new task using taskInput and add it to the selected project
	newTaskForm.addEventListener('submit', (e) => {
		e.preventDefault();
		let taskName = taskInput.value;
		// if project exists in local storage or project name is empty, don't add it again
		if (taskName !== '') {
			// if project has a class of active-list then add task to that project
			if (document.querySelector('.active-list')) {
				task.createNewTask(taskName);

			}
		}

		taskInput.value = '';
	});


}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTasks);

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
	
	// document.body.addEventListener( 'click', function ( event ) {
	// 	if( event.target.className == 'deleteProjectBtn' ) {

	// 		//delete project from DOM
	// 		event.target.parentElement.remove();

	// 		// delete project from local storage
	// 		localStorage.removeItem(event.target.parentElement.dataset.project);

	// 		console.log(localStorage);
	// 	};
	// });


	

	// create IIFE to delete project

	const deleteCurrentProject = (() => {

		//on pressing button delete project

		const deleteProject = () => {

		document.body.addEventListener( 'click', function ( event ) {
			if( event.target.className == 'deleteProjectBtn' ) {

				//delete project from DOM
				event.target.parentElement.remove();

				// delete project from local storage
				localStorage.removeItem(event.target.parentElement.dataset.project);

				console.log(localStorage);
			};
		});

	}

	return {
		deleteProject,
	}

	})();

	deleteCurrentProject.deleteProject();


	
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

// import renderTasks from './renderTasks.js';

// import deleteProjects from './deleteProjects.js';

document.addEventListener('DOMContentLoaded', _DOMInterface_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
document.addEventListener('DOMContentLoaded', _createProjects_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
// document.addEventListener('DOMContentLoaded', deleteProjects);



function renderProjects() {

	// tasksContainer.innerHTML = '';


	// // create default projects

	// let youtubeProject = document.createElement('li');
	// youtubeProject.classList.add('list-name', 'active-list');
	// youtubeProject.id = 'youtube';
	// youtubeProject.setAttribute('data-project', 'Youtube');
	// youtubeProject.innerHTML = `<img class="list-img" src="../src/images/svg/list.svg" alt="list">` + `Youtube` + `<button class="deleteProjectBtn">X</button>`;

	// let workProject = document.createElement('li');
	// workProject.classList.add('list-name');
	// workProject.id = 'work';
	// workProject.setAttribute('data-project', 'Work');
	// workProject.innerHTML = `<img class="list-img" src="../src/images/svg/list.svg" alt="list">` + `Work` + `<button class="deleteProjectBtn">X</button>`;

	// let groceryProject = document.createElement('li');
	// groceryProject.classList.add('list-name');
	// groceryProject.id = 'grocery';
	// groceryProject.setAttribute('data-project', 'Grocery');
	// groceryProject.innerHTML = `<img class="list-img" src="../src/images/svg/list.svg" alt="list">` + `Grocery` + `<button class="deleteProjectBtn">X</button>`;

	// projectsContainer.append(youtubeProject, workProject, groceryProject);


	// // create default tasks

	// // Youtube
	// let youtubeProjectTask1 = document.createElement('div');
	// youtubeProjectTask1.classList.add('task');
	// let youtubeProjectTask1Input = document.createElement('input');
	// youtubeProjectTask1Input.id = 'task-1';
	// youtubeProjectTask1Input.setAttribute('type', 'checkbox');
	// youtubeProjectTask1Input.setAttribute('name', 'task-1');
	// youtubeProjectTask1Input.setAttribute('value', 'task');

	// let youtubeProjectTask1Label = document.createElement('label');
	// youtubeProjectTask1Label.classList.add('youtube-task-label');
	// youtubeProjectTask1Label.setAttribute('for', 'task-1');
	// youtubeProjectTask1Label.setAttribute('data-content', 'Record todo list video that is long');
	// youtubeProjectTask1Label.innerText = 'Record todo list video that is long';

	// youtubeProjectTask1.append(youtubeProjectTask1Input, youtubeProjectTask1Label);


	// let youtubeProjectTask2 = document.createElement('div');
	// youtubeProjectTask2.classList.add('task');
	// let youtubeProjectTask2Input = document.createElement('input');
	// youtubeProjectTask2Input.id = 'task-2';
	// youtubeProjectTask2Input.setAttribute('type', 'checkbox');
	// youtubeProjectTask2Input.setAttribute('name', 'task-2');
	// youtubeProjectTask2Input.setAttribute('value', 'task');

	// let youtubeProjectTask2Label = document.createElement('label');
	// youtubeProjectTask2Label.classList.add('youtube-task-label');
	// youtubeProjectTask2Label.setAttribute('for', 'task-2');
	// youtubeProjectTask2Label.setAttribute('data-content', 'Subscribe to youtube channel');
	// youtubeProjectTask2Label.innerText = 'Subscribe to youtube channel';

	// youtubeProjectTask2.append(youtubeProjectTask2Input, youtubeProjectTask2Label);


	// let youtubeProjectTask3 = document.createElement('div');
	// youtubeProjectTask3.classList.add('task');
	// let youtubeProjectTask3Input = document.createElement('input');
	// youtubeProjectTask3Input.id = 'task-3';
	// youtubeProjectTask3Input.setAttribute('type', 'checkbox');
	// youtubeProjectTask3Input.setAttribute('name', 'task-3');
	// youtubeProjectTask3Input.setAttribute('value', 'task');

	// let youtubeProjectTask3Label = document.createElement('label');
	// youtubeProjectTask3Label.classList.add('youtube-task-label');
	// youtubeProjectTask3Label.setAttribute('for', 'task-3');
	// youtubeProjectTask3Label.setAttribute('data-content', 'Like Video');
	// youtubeProjectTask3Label.innerText = 'Like Video';

	// youtubeProjectTask3.append(youtubeProjectTask3Input, youtubeProjectTask3Label);



	// // Work
	// let workProjectTask1 = document.createElement('div');
	// workProjectTask1.classList.add('task');
	// let workProjectTask1Input = document.createElement('input');
	// workProjectTask1Input.id = 'task-4';
	// workProjectTask1Input.setAttribute('type', 'checkbox');
	// workProjectTask1Input.setAttribute('name', 'task-4');
	// workProjectTask1Input.setAttribute('value', 'task');

	// let workProjectTask1Label = document.createElement('label');
	// workProjectTask1Label.classList.add('work-task-label');
	// workProjectTask1Label.setAttribute('for', 'task-4');
	// workProjectTask1Label.setAttribute('data-content', 'Create a new project');
	// workProjectTask1Label.innerText = 'Create a new project';

	// workProjectTask1.append(workProjectTask1Input, workProjectTask1Label);


	// let workProjectTask2 = document.createElement('div');
	// workProjectTask2.classList.add('task');
	// let workProjectTask2Input = document.createElement('input');
	// workProjectTask2Input.id = 'task-5';
	// workProjectTask2Input.setAttribute('type', 'checkbox');
	// workProjectTask2Input.setAttribute('name', 'task-5');
	// workProjectTask2Input.setAttribute('value', 'task');

	// let workProjectTask2Label = document.createElement('label');
	// workProjectTask2Label.classList.add('work-task-label');
	// workProjectTask2Label.setAttribute('for', 'task-5');
	// workProjectTask2Label.setAttribute('data-content', 'Check Email');
	// workProjectTask2Label.innerText = 'Check Email';

	// workProjectTask2.append(workProjectTask2Input, workProjectTask2Label);


	// let workProjectTask3 = document.createElement('div');
	// workProjectTask3.classList.add('task');
	// let workProjectTask3Input = document.createElement('input');
	// workProjectTask3Input.id = 'task-6';
	// workProjectTask3Input.setAttribute('type', 'checkbox');
	// workProjectTask3Input.setAttribute('name', 'task-6');
	// workProjectTask3Input.setAttribute('value', 'task');

	// let workProjectTask3Label = document.createElement('label');
	// workProjectTask3Label.classList.add('work-task-label');
	// workProjectTask3Label.setAttribute('for', 'task-6');
	// workProjectTask3Label.setAttribute('data-content', 'Call John Doe');
	// workProjectTask3Label.innerText = 'Call John Doe';

	// workProjectTask3.append(workProjectTask3Input, workProjectTask3Label);


	// // Grocery
	// let groceryProjectTask1 = document.createElement('div');
	// groceryProjectTask1.classList.add('task');
	// let groceryProjectTask1Input = document.createElement('input');
	// groceryProjectTask1Input.id = 'task-7';
	// groceryProjectTask1Input.setAttribute('type', 'checkbox');
	// groceryProjectTask1Input.setAttribute('name', 'task-7');
	// groceryProjectTask1Input.setAttribute('value', 'task');

	// let groceryProjectTask1Label = document.createElement('label');
	// groceryProjectTask1Label.classList.add('grocery-task-label');
	// groceryProjectTask1Label.setAttribute('for', 'task-7');
	// groceryProjectTask1Label.setAttribute('data-content', 'Buy milk');
	// groceryProjectTask1Label.innerText = 'Buy milk';

	// groceryProjectTask1.append(groceryProjectTask1Input, groceryProjectTask1Label);


	// let groceryProjectTask2 = document.createElement('div');
	// groceryProjectTask2.classList.add('task');
	// let groceryProjectTask2Input = document.createElement('input');
	// groceryProjectTask2Input.id = 'task-8';
	// groceryProjectTask2Input.setAttribute('type', 'checkbox');
	// groceryProjectTask2Input.setAttribute('name', 'task-8');
	// groceryProjectTask2Input.setAttribute('value', 'task');

	// let groceryProjectTask2Label = document.createElement('label');
	// groceryProjectTask2Label.classList.add('grocery-task-label');
	// groceryProjectTask2Label.setAttribute('for', 'task-8');
	// groceryProjectTask2Label.setAttribute('data-content', 'Buy bread');
	// groceryProjectTask2Label.innerText = 'Buy bread';

	// groceryProjectTask2.append(groceryProjectTask2Input, groceryProjectTask2Label);


	// let groceryProjectTask3 = document.createElement('div');
	// groceryProjectTask3.classList.add('task');
	// let groceryProjectTask3Input = document.createElement('input');
	// groceryProjectTask3Input.id = 'task-9';
	// groceryProjectTask3Input.setAttribute('type', 'checkbox');
	// groceryProjectTask3Input.setAttribute('name', 'task-9');
	// groceryProjectTask3Input.setAttribute('value', 'task');

	// let groceryProjectTask3Label = document.createElement('label');
	// groceryProjectTask3Label.classList.add('grocery-task-label');
	// groceryProjectTask3Label.setAttribute('for', 'task-9');
	// groceryProjectTask3Label.setAttribute('data-content', 'Buy eggs');
	// groceryProjectTask3Label.innerText = 'Buy eggs';

	// groceryProjectTask3.append(groceryProjectTask3Input, groceryProjectTask3Label);


	// tasksContainer.append(youtubeProjectTask1, youtubeProjectTask2, youtubeProjectTask3);
	// projectTitle.append(youtubeProject.getAttribute('data-project'));



	




	// // check if tasks are checked and add class to label
	// let allTasks = document.querySelectorAll('.task');
	// for (let task of allTasks) {
		
	// 	let taskInput = task.querySelector('input');
	// 	console.log(taskInput.checked);
	// 	// if(taskInput.checked) {
	// 	// 	task.querySelector('label').classList.toggle('checked');
	// 	// }
	// }
	


	// let defaultProjects = {


	// 	{'youtube': [youtubeProjectTask1Label.getAttribute('data-content'), youtubeProjectTask2Label.getAttribute('data-content'), youtubeProjectTask3Label.getAttribute('data-content'), ],
	// 	'work': [workProjectTask1Label.getAttribute('data-content'), workProjectTask2Label.getAttribute('data-content'), workProjectTask3Label.getAttribute('data-content')],
	// 	'grocery': [groceryProjectTask1Label.getAttribute('data-content'), groceryProjectTask2Label.getAttribute('data-content'), groceryProjectTask3Label.getAttribute('data-content')]
	// };

















	

	// //select project and render its tasks
	// document.body.addEventListener( 'click', function ( event ) {
	// 	if( event.target.className == 'list-name' || event.target.className == 'list-name active-list' ) {
	// 		let allProjects = projectsContainer.children;
	// 		for (let project of allProjects) {
	// 			project.classList.remove('active-list');
	// 		}
	// 		event.target.classList.toggle('active-list');
	// 		let projectName = event.target.getAttribute('data-project');

	// 		// add default project to local storage with none selected

	// 		let defaultProjects = {
	// 			'youtube': {
	// 				'task-1': {
	// 					'checked': false,
	// 					'label':'Record todo list video that is long'
	// 				},
	// 				'task-2': {
	// 					'checked': false,
	// 					'label':'Subscribe to youtube channel'
	// 				},
	// 				'task-3': {
	// 					'checked': false,
	// 					'label':'Like Video'
	// 				}

	// 			},
	// 			'work': {
	// 				'task-4': {
	// 					'checked': false,
	// 					'label':'Create a new project'
	// 				},
	// 				'task-5': {
	// 					'checked': false,
	// 					'label':'Check Email'
	// 				},
	// 				'task-6': {
	// 					'checked': false,
	// 					'label':'Call John Doe'
	// 				}
	// 			},
	// 			'grocery': {
	// 				'task-7': {
	// 					'checked': false,
	// 					'label':'Buy milk'
	// 				},
	// 				'task-8': {
	// 					'checked': false,
	// 					'label':'Buy bread'
	// 				},
	// 				'task-9': {
	// 					'checked': false,
	// 					'label':'Buy eggs'
	// 				}
	// 			}

				
	// 		};
	// 		console.log(defaultProjects['youtube']['task-1']['checked']);


	// 		// render tasks of selected project
	// 		if(projectName == 'Youtube') {
	// 			tasksContainer.innerHTML = '';
	// 			projectTitle.innerHTML = '';
	// 			tasksContainer.append(youtubeProjectTask1, youtubeProjectTask2, youtubeProjectTask3);
	// 			projectTitle.append(youtubeProject.getAttribute('data-project'));

	// 			//check if tasks are checked and add class to label
	// 			let allTasks = document.querySelectorAll('.task');
	// 			for (let task of allTasks) {
					
	// 				let tasksInput = task.querySelector('input');
	// 				console.log(tasksInput.checked);
	// 				if(tasksInput.checked) {
	// 					task.querySelector('label').classList.toggle('checked');
	// 					//store checked tasks to defaultProjects object
						
	// 					defaultProjects[projectName][tasksInput.id][checked] = true;
	// 					console.log(defaultProjects);

	// 				}
	// 			}


				
				




	// 			// //check if task is checked change it in local storage
	// 			// let checkboxes = document.querySelectorAll('input[type="checkbox"]');
	// 			// checkboxes.forEach(checkbox => {
	// 			// 	checkbox.addEventListener('click', () => {
	// 			// 		let project = checkbox.parentElement.parentElement.parentElement.parentElement.getAttribute('data-project');
	// 			// 		let task = checkbox.parentElement.parentElement.getAttribute('data-task');
	// 			// 		let checked = checkbox.checked;
	// 			// 		let projects = JSON.parse(localStorage.getItem('defaultProjects'));
	// 			// 		console.log(projects['youtube']);
	// 			// 		projects[project][task]['checked'] = checked;
	// 			// 		localStorage.setItem('defaultProjects', JSON.stringify(projects));
	// 			// 		console.log(JSON.parse(localStorage.getItem('defaultProjects')));
	// 			// 	});
	// 			// });



	// 		} else if(projectName == 'Work') {
	// 			tasksContainer.innerHTML = '';
	// 			projectTitle.innerHTML = '';
	// 			tasksContainer.append(workProjectTask1, workProjectTask2, workProjectTask3);
	// 			projectTitle.append(workProject.getAttribute('data-project'));
	// 		} else if(projectName == 'Grocery') {
	// 			tasksContainer.innerHTML = '';
	// 			projectTitle.innerHTML = '';
	// 			tasksContainer.append(groceryProjectTask1, groceryProjectTask2, groceryProjectTask3);
	// 			projectTitle.append(groceryProject.getAttribute('data-project'));

	// 		} else {
				
	// 			tasksContainer.innerHTML = '';
	// 			projectTitle.innerHTML = '';
	// 			projectTitle.append(projectName);
	// 			//if a project has no tasks
	// 			// tasksContainer.innerHTML = `<div id="noTasks" class="task">` + `No tasks for this project` + `</div>`;
	// 			//if a project has tasks render them

	// 		}

				
	// 	//add default projects to local storage
	// 	localStorage.setItem('defaultProjects', JSON.stringify(defaultProjects));
	// 	console.log(JSON.parse(localStorage.getItem('defaultProjects')));
				


	// 	};
	// });


	// create an IIFe to render selected project tasks
	
	const renderCurrentProject = (() => {

		// document.addEventListener('change', createProjects);

		// when a project is clicked add class to it and remove it from other projects
		const selectedProject = () => {

			//use event delegation to select project
			document.addEventListener('click', (e) => {
				if(e.target.classList.contains('list-name')) {
					
					let allProjects = document.querySelectorAll('.list-name');
					for (let project of allProjects) {
						if (project == e.target) {
							project.classList.add('active-list');
						} else {
							project.classList.remove('active-list');
						}

						projectTitle.innerText = e.target.id;
					}
					showTasks();
				}

			});
			

		}


		


		// //create new task using taskInput and add it to the selected project and add it to local storage
		// const createNewTask = (taskName) => {
		// 	let project = document.querySelector('.active-list').getAttribute('data-project');
		// 	// console.log(project);

		// 	const task = document.createElement('div');
		// 	task.classList.add('task');
		// 	task.setAttribute('data-task', taskName);
		// 	task.setAttribute('data-project-name', project);
		// 	const taskInput = document.createElement('input');
		// 	taskInput.setAttribute('type', 'checkbox');
		// 	taskInput.setAttribute('id', taskName);
		// 	taskInput.setAttribute('data-task', taskName);
		// 	taskInput.classList.add('task-input');
		// 	// taskInput.id = taskName;
		// 	const taskLabel = document.createElement('label');
		// 	taskLabel.setAttribute('for', taskName);
		// 	taskLabel.classList.add('task-label');
		// 	taskLabel.setAttribute('data-content', taskName);
		// 	taskLabel.innerText = taskName;

		// 	task.append(taskInput, taskLabel);
		// 	tasksContainer.append(task);

			
		// }

		//when i click on a show tasks that had data-project-name equal to the project name
		const showTasks = () => {

			let project = document.querySelector('.active-list').getAttribute('data-project');
			let tasks = document.querySelectorAll('.task');
			for (let task of tasks) {
				if (task.getAttribute('data-project-name') === project) {
					
					task.style.display = 'block';
				} else {
					task.style.display = 'none';
				}
				
			}
	
		}
		
	return {
		selectedProject,
		// createNewTask,
		showTasks
	}

	})();

	renderCurrentProject.selectedProject();



	// //create new task using taskInput and add it to the selected project
	// newTaskForm.addEventListener('submit', (e) => {
	// 	e.preventDefault();
	// 	let taskName = taskInput.value;
	// 	// if project exists in local storage or project name is empty, don't add it again
	// 	if (taskName !== '') {
	// 		// if project has a class of active-list then add task to that project
	// 		if (document.querySelector('.active-list')) {
	// 			renderCurrentProject.createNewTask(taskName);

	// 		}
	// 	}

	// 	taskInput.value = '';
	// });
	





	



	
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderProjects);

/***/ }),

/***/ "./src/renderTasks.js":
/*!****************************!*\
  !*** ./src/renderTasks.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOMInterface_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMInterface.js */ "./src/DOMInterface.js");

// import createProjects from './createProjects.js';
// import deleteProjects from './deleteProjects.js';

document.addEventListener('DOMContentLoaded', _DOMInterface_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
// document.addEventListener('DOMContentLoaded', createProjects);
// document.addEventListener('DOMContentLoaded', deleteProjects);



function renderTasks() {

	// // render tasks from local storage when project is selected
	// let projects = Object.keys(localStorage);
	// projects.forEach(function(project) {}
	
	

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderTasks);

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
/* harmony import */ var _createTasks_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createTasks.js */ "./src/createTasks.js");








document.addEventListener('DOMContentLoaded', _DOMInterface_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
document.addEventListener('DOMContentLoaded', _createProjects_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
document.addEventListener('DOMContentLoaded', _deleteProjects_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
document.addEventListener('DOMContentLoaded', _renderProjects_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
document.addEventListener('DOMContentLoaded', _createTasks_js__WEBPACK_IMPORTED_MODULE_5__["default"]);






})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxLQUFLLEtBQUssYUFBYSxPQUFPLE1BQU0sS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsVUFBVSxPQUFPLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsU0FBUyxNQUFNLEtBQUssTUFBTSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsY0FBYyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFFBQVEsS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxh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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvS2dCO0FBQzdDO0FBQ0E7QUFDMkM7QUFDM0M7QUFDQSw4Q0FBOEMsd0RBQVk7QUFDMUQsOENBQThDLHVEQUFXO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7O0FDclBtQjtBQUM3QztBQUNBO0FBQ0EsOENBQThDLHdEQUFZO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRWlCO0FBQzdDO0FBQ2lEO0FBQ2pEO0FBQ0E7QUFDQSw4Q0FBOEMsd0RBQVk7QUFDMUQsOENBQThDLDBEQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7QUM1ZmdCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qyx3REFBWTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7O1VDcEIxQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmNEI7QUFDaUI7QUFDSTtBQUNBO0FBQ0E7QUFDTjtBQUMzQztBQUNBO0FBQ0EsOENBQThDLHdEQUFZO0FBQzFELDhDQUE4QywwREFBYztBQUM1RCw4Q0FBOEMsMERBQWM7QUFDNUQsOENBQThDLDBEQUFjO0FBQzVELDhDQUE4Qyx1REFBVztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VtZW50LWFwcC8uL3NyYy9zdHlsZS9zdHlsZXMuY3NzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlbWVudC1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlbWVudC1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZW1lbnQtYXBwLy4vc3JjL3N0eWxlL3N0eWxlcy5jc3M/YWY3YyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZW1lbnQtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlbWVudC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlbWVudC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VtZW50LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZW1lbnQtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VtZW50LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlbWVudC1hcHAvLi9zcmMvRE9NSW50ZXJmYWNlLmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlbWVudC1hcHAvLi9zcmMvY3JlYXRlUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VtZW50LWFwcC8uL3NyYy9jcmVhdGVUYXNrcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZW1lbnQtYXBwLy4vc3JjL2RlbGV0ZVByb2plY3RzLmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlbWVudC1hcHAvLi9zcmMvcmVuZGVyUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VtZW50LWFwcC8uL3NyYy9yZW5kZXJUYXNrcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZW1lbnQtYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlbWVudC1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VtZW50LWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VtZW50LWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlbWVudC1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZW1lbnQtYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VtZW50LWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZW1lbnQtYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcblxcdC0tY2xyLXByaW1hcnk6IHJnYig0MSwgMTQ1LCAyNTUpO1xcclxcblxcdC0tY2xyLWxpZ2h0R3JheTogcmdiKDIzMiwgMjMyLCAyMzIpO1xcclxcblxcdC0tY2xyLWxpZ2h0OiAjZjRmNGY0O1xcclxcblxcdC0tY2xyLWRhcms6IHJnYig1OCwgNTgsIDU4KTtcXHJcXG5cXHQtLWNsci13aGl0ZTogcmdiKDI1MiwgMjUyLCAyNTIpO1xcclxcblxcdC0tY2xyLXdhcm5pbmc6ICNlOTc1NjA7XFxyXFxuXFx0LS1jbHItbmF2SGlnaGxpZ2h0OiAjNGY3Nzk0ZDA7XFxyXFxuXFx0LS1jbHItbWluZVNoYWZ0OiAjMjMyMzIzO1xcclxcblxcdC0tY2xyLWdhbGxlcnk6ICNlZGVkZWQ7XFxyXFxuXFx0LS1jbHItZWxmR3JlZW46ICMwNTgxNzk7XFxyXFxuXFx0LS1jbHItbmVidWxhOiAjY2JkYmRhO1xcclxcblxcdC0tY2xyLWNvbXBsZXRlZFRhc2s6ICNhNWIxYzA7XFxyXFxuXFx0LS1jbHItZGVsZXRlOiAjZmY0OTQ5NjI7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuXFx0cGFkZGluZy1ib3R0b206IDEwJTtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0YmFja2dyb3VuZDogdmFyKC0tY2xyLW5lYnVsYSk7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWNsci1taW5lU2hhZnQpO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG5cXHRjb2xvcjogdmFyKC0tY2xyLWRhcmspO1xcclxcblxcdGZvbnQtc2l6ZTogM3JlbTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdG1hcmdpbjogLTAuNWVtIDAuNWVtIDAuNWVtIDQwLjUlO1xcclxcblxcdHotaW5kZXg6IDI7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZUgxIHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFpbmVyIHtcXHJcXG5cXHRtYXJnaW4tcmlnaHQ6IC0xOCU7XFxyXFxuXFx0bWFyZ2luLXRvcDogNTBweDtcXHJcXG5cXHRwYWRkaW5nLWxlZnQ6IDElO1xcclxcblxcdGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcclxcblxcdGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcclxcblxcdCAgXFxcInByb2plY3RzXFxcIlxcclxcblxcdCAgXFxcInRhc2tzXFxcIlxcclxcblxcdCAgXFxcImxvZ29cXFwiO1xcclxcbn0gXFxyXFxuXFxyXFxuI2dpdExvZ29EaXZDb250YWluZXIge1xcclxcblxcdGdyaWQtYXJlYTogbG9nbztcXHJcXG5cXHRtYXJnaW4tdG9wOiAzMHB4O1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0YWxpZ24tc2VsZjogY2VudGVyO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5naXRMb2dvIHtcXHJcXG5cXHR3aWR0aDogODVweDtcXHJcXG5cXHRoZWlnaHQ6IDg1cHg7XFxyXFxufVxcclxcblxcclxcbiNuYXZDb250YWluZXIge1xcclxcblxcdC8qIGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMTB2dztcXHJcXG5cXHRncmlkLWFyZWE6IHByb2plY3RzO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudVRvZ2dsZSB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdG1heC13aWR0aDogNTB2dztcXHJcXG5cXHR0b3A6IDUwcHg7XFxyXFxuXFx0bGVmdDogNTBweDtcXHJcXG5cXHR6LWluZGV4OiAxO1xcclxcblxcdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuXFx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG5cXHQtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNtZW51VG9nZ2xlIGxpIHtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XFxyXFxuXFx0LW8tdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xcclxcblxcdHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcXHJcXG5cXHRwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDUwcHg7XFxyXFxuXFx0Zm9udC1zaXplOiAyMnB4O1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI21lbnVUb2dnbGUgbGk6aG92ZXIge1xcclxcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIFRoZSBoYW1idXJnZXIgYnV0dG9uIGhpZGRlbiBpbnNpZGUgYW4gI2lucHV0TWVudSBlbGVtZW50ICovXFxyXFxuI21lbnVUb2dnbGUgI2lucHV0TWVudSB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0d2lkdGg6IDMwcHg7XFxyXFxuXFx0aGVpZ2h0OiAzMHB4O1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHR0b3A6IC03cHg7XFxyXFxuXFx0bGVmdDogLTVweDtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRcXHJcXG5cXHRvcGFjaXR5OiAwO1xcclxcblxcdC8qIGhpZGUgdGhpcyAqL1xcclxcblxcdHotaW5kZXg6IDI7XFxyXFxuXFx0LyogYW5kIHBsYWNlIGl0IG92ZXIgdGhlIGhhbWJ1cmdlciAqL1xcclxcblxcdC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI21lbnVUb2dnbGUgI2xhYmVsTWVudSB7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdHdpZHRoOiAzMHB4O1xcclxcblxcdGhlaWdodDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuI21lbnVUb2dnbGUgI2xhYmVsTWVudSBzcGFuIHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIEhhbWJ1cmdlclxcclxcbiAqL1xcclxcbiNtZW51VG9nZ2xlICNsYWJlbE1lbnUgZGl2IHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHR3aWR0aDogMzBweDtcXHJcXG5cXHRoZWlnaHQ6IDJweDtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiA2cHg7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdGJhY2tncm91bmQ6IHZhcigtLWNsci1lbGZHcmVlbik7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcdHotaW5kZXg6IDE7XFxyXFxuXFx0LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA0cHggMHB4O1xcclxcblxcdC1tcy10cmFuc2Zvcm0tb3JpZ2luOiA0cHggMHB4O1xcclxcblxcdHRyYW5zZm9ybS1vcmlnaW46IDRweCAwcHg7XFxyXFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcclxcblxcdC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuI21lbnVUb2dnbGUgI2xhYmVsTWVudSBkaXY6Zmlyc3QtY2hpbGQge1xcclxcblxcdC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCUgMTAwJTtcXHJcXG5cXHQtbXMtdHJhbnNmb3JtLW9yaWdpbjogMCUgMTAwJTtcXHJcXG5cXHR0cmFuc2Zvcm0tb3JpZ2luOiAwJSAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudVRvZ2dsZSAjbGFiZWxNZW51IGRpdjpudGgtY2hpbGQoMikge1xcclxcblxcdC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XFxyXFxuXFx0LW1zLXRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xcclxcblxcdHRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBcXHJcXG4gKiBDaGFuZ2UgdGhlIGNvbG9yIG9mIHRoZSBoYW1idXJnZXIgd2hlbiB0b2dnbGVkXFxyXFxuICovXFxyXFxuI21lbnVUb2dnbGUgI2lucHV0TWVudTpjaGVja2VkKyNsYWJlbE1lbnUgZGl2IHtcXHJcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1jbHItbWluZVNoYWZ0KTtcXHJcXG5cXHRcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiBVc2UgYWJzb2x1dGUgcG9zaXRpb25pbmcgdG8gcGxhY2UgdGhlIG1lbnUgb2ZmLXNjcmVlblxcclxcbiAqL1xcclxcbiNtZW51IHtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0d2lkdGg6IDEwMHZ3O1xcclxcblxcdG1heC13aWR0aDogOTAwcHg7XFxyXFxuXFx0bWFyZ2luOiAtODBweCAwIDAgLTUwcHg7XFxyXFxuXFx0cGFkZGluZzogNTBweCAwcHggNTBweCAwcHg7XFxyXFxuXFx0cGFkZGluZy10b3A6IDEyNXB4O1xcclxcblxcdGJhY2tncm91bmQ6IHZhcigtLWNsci1saWdodCk7XFxyXFxuXFx0Ym94LXNoYWRvdzogXFxyXFxuXFx0XFx0XFx0XFx0MCAyLjhweCAyLjJweCByZ2JhKDAsIDAsIDAsIDAuMDM0KSxcXHJcXG5cXHRcXHRcXHRcXHQwIDYuN3B4IDUuM3B4IHJnYmEoMCwgMCwgMCwgMC4wNDgpLFxcclxcblxcdFxcdFxcdFxcdDAgMTIuNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA2KSxcXHJcXG5cXHRcXHRcXHRcXHQwIDIyLjNweCAxNy45cHggcmdiYSgwLCAwLCAwLCAwLjA3MiksXFxyXFxuXFx0XFx0XFx0XFx0MCA0MS44cHggMzMuNHB4IHJnYmEoMCwgMCwgMCwgMC4wODYpO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuXFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcblxcdC8qIEhpZGUgdGhlIG1lbnUgb2ZmLXNjcmVlbiB0byB0aGUgbGVmdCAqL1xcclxcblxcdGxlZnQ6IDA7XFxyXFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBsZWZ0IDAuM3MgZWFzZTtcXHJcXG5cXHQtby10cmFuc2l0aW9uOiBsZWZ0IDAuM3MgZWFzZTtcXHJcXG5cXHR0cmFuc2l0aW9uOiBsZWZ0IDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLypcXHJcXG4gKiBTbGlkZSB0aGUgbWVudSBpbiBmcm9tIGxlZnQgd2hlbiB0aGUgI2lucHV0TWVudSBpcyBjaGVja2VkXFxyXFxuICovXFxyXFxuI21lbnVUb2dnbGUgI2lucHV0TWVudTpjaGVja2VkfnVsIHtcXHJcXG5cXHJcXG5cXHR0cmFuc2l0aW9uOiBsZWZ0IDAuM3MgZWFzZTtcXHJcXG5cXHRsZWZ0OiAtMjAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtbmFtZSB7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1pbWcge1xcclxcblxcdHdpZHRoOiAxLjdlbTtcXHJcXG5cXHRwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlLWxpc3Qge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1lbGZHcmVlbik7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMzVweDtcXHJcXG5cXHRtYXJnaW46IDBweCAyNXB4IDBweCAyNXB4O1xcclxcblxcdGNvbG9yOiB2YXIoLS1jbHItbGlnaHQpO1xcclxcbn1cXHJcXG5cXHJcXG4jbXlGb3JtIHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0bWFyZ2luLXRvcDogMS44ZW07XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG5cXHRcXHJcXG59XFxyXFxuXFxyXFxuI215Rm9ybSBmb3JtLCAjbXlUYXNrcyBmb3JtIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRmb250LXNpemU6IDEuM2VtO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci13aGl0ZSk7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tY2xyLWVsZkdyZWVuKTtcXHJcXG5cXHR3aWR0aDogMTVlbTtcXHJcXG5cXHRwYWRkaW5nOiAyZW0gLjZlbSAxLjVlbSAuNmVtO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbiNhZGRQcm9qZWN0Rm9ybSB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZFByb2plY3RCdXR0b24ge1xcclxcblxcdG1hcmdpbi10b3A6IDMwcHg7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWVsZkdyZWVuKTtcXHJcXG5cXHRjb2xvcjogdmFyKC0tY2xyLWxpZ2h0KTtcXHJcXG5cXHRib3JkZXI6IG5vbmU7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNDJweDtcXHJcXG5cXHRmb250LXNpemU6IDEuNGVtO1xcclxcblxcdHBhZGRpbmc6IDIlIDEwJSAyJSA4JTtcXHJcXG5cXHRmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbiNhZGRQcm9qZWN0QnV0dG9uOmhvdmVyIHtcXHJcXG5cXHRjb2xvcjogdmFyKC0tY2xyLWxpZ2h0KTtcXHJcXG5cXHRvcGFjaXR5OiAwLjg7XFxyXFxufVxcclxcblxcclxcbiNhZGRQcm9qZWN0QnV0dG9uIHNwYW4ge1xcclxcblxcdGZvbnQtc2l6ZTogMS42ZW07XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDMwMDtcXHJcXG5cXHRwYWRkaW5nOiAwcHggMTBweCAwcHggM3B4O1xcclxcblxcdFxcclxcbn1cXHJcXG5cXHJcXG4jc3VibWl0QnRuLCAjdGFza1N1Ym1pdEJ1dHRvbiB7XFxyXFxuIFxcdGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcXHJcXG4gXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWVsZkdyZWVuKTtcXHJcXG4gXFx0Y29sb3I6IHZhcigtLWNsci1saWdodCk7XFxyXFxuIFxcdGJvcmRlcjogbm9uZTtcXHJcXG4gXFx0Ym9yZGVyLXJhZGl1czogMzJweDtcXHJcXG4gXFx0Zm9udC1zaXplOiAxZW07XFxyXFxuIFxcdHBhZGRpbmc6IDIlIDMwJSAyJSAzMCU7XFxyXFxuXFx0IHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbiNzdWJtaXRCdG46aG92ZXIsICN0YXNrU3VibWl0QnRuOmhvdmVyIHtcXHJcXG5cXHRvcGFjaXR5OiAwLjg7XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0TGFiZWwsICN0YXNrTGFiZWwge1xcclxcblxcdGZvbnQtc2l6ZTogMS4zZW07XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3RJbnB1dCwgI3Rhc2tJbnB1dCB7XFxyXFxuXFx0Zm9udC1zaXplOiAwLjhlbTtcXHJcXG5cXHRmb250LXdlaWdodDogNDAwO1xcclxcblxcdGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcblxcdHBhZGRpbmc6IDBweCAxNXB4IDBweCAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlUHJvamVjdEJ0biB7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tY2xyLW1pbmVTaGFmdCk7XFxyXFxuXFx0YmFja2dyb3VuZDogdmFyKC0tY2xyLXdhcm5pbmcpO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuXFx0cGFkZGluZzogM3B4IDdweCAycHggN3B4O1xcclxcblxcdGZvbnQtc2l6ZTogMC43ZW07XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRtYXJnaW46IDAuNSUgMiUgMCAyJTtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDMwMDtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tMaXN0IHtcXHJcXG5cXHRncmlkLWFyZWE6IHRhc2tzO1xcclxcblxcdC8qIG1hcmdpbi1ib3R0b206IDEzMHZoOyAqL1xcclxcblxcdC8qIG1hcmdpbi10b3A6IDUwdmg7ICovXFxyXFxufVxcclxcblxcclxcbi50b2RvLWxpc3Qge1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxuXFx0bWFyZ2luLXRvcDogNWVtO1xcclxcblxcdGJhY2tncm91bmQ6IHZhcigtLWNsci1nYWxsZXJ5KTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcblxcdHdpZHRoOiAxMDB2dztcXHJcXG5cXHRtYXgtd2lkdGg6IDkwMHB4O1xcclxcblxcdHBhZGRpbmctdG9wOiAzJTtcXHJcXG5cXHRwYWRkaW5nLWJvdHRvbTogMSU7XFxyXFxuXFx0Ym94LXNoYWRvdzogXFxyXFxuXFx0XFx0XFx0XFx0MCAyLjhweCAyLjJweCByZ2JhKDAsIDAsIDAsIDAuMDM0KSxcXHJcXG5cXHRcXHRcXHRcXHQwIDYuN3B4IDUuM3B4IHJnYmEoMCwgMCwgMCwgMC4wNDgpLFxcclxcblxcdFxcdFxcdFxcdDAgMTIuNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA2KSxcXHJcXG5cXHRcXHRcXHRcXHQwIDIyLjNweCAxNy45cHggcmdiYSgwLCAwLCAwLCAwLjA3MiksXFxyXFxuXFx0XFx0XFx0XFx0MCA0MS44cHggMzMuNHB4IHJnYmEoMCwgMCwgMCwgMC4wODYpLFxcclxcblxcdFxcdFxcdFxcdDAgMTAwcHggODBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkTWFyZ2luQWZ0ZXJDbGljayB7XFxyXFxuXFx0bWFyZ2luLXRvcDogMjZ2aDtcXHJcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVtb3ZlTWFyZ2luQWZ0ZXJDbGljayB7XFxyXFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC03MCUpO1xcclxcblxcdC8qIG1hcmdpbi10b3A6IC0xMHZoOyAqL1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcblxcclxcbi50b2RvLWhlYWRlciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWxpZ2h0KTtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jbHItZWxmR3JlZW4pO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuXFx0bWFyZ2luOiAwJSA1JSA1JSA1JTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stY291bnQge1xcclxcblxcdGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWJvZHkge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1saWdodCk7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tY2xyLWVsZkdyZWVuKTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcblxcdHBhZGRpbmc6IDUlIDElIDAlIDElO1xcclxcblxcdG1hcmdpbjogNSU7XFxyXFxufVxcclxcblxcclxcbiNteVRhc2tzIHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkVGFza0J1dHRvbiB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xcclxcbiBcXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItZWxmR3JlZW4pO1xcclxcbiBcXHRjb2xvcjogdmFyKC0tY2xyLWxpZ2h0KTtcXHJcXG4gXFx0Ym9yZGVyOiBub25lO1xcclxcbiBcXHRib3JkZXItcmFkaXVzOiAzMnB4O1xcclxcbiBcXHRmb250LXNpemU6IDEuMWVtO1xcclxcbiBcXHRwYWRkaW5nOiAyJSAxMCUgMiUgNCU7XFxyXFxuXFx0IGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0IGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0IG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuXFx0IHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbiNhZGRUYXNrQnV0dG9uOmhvdmVyIHtcXHJcXG5cXHRvcGFjaXR5OiAwLjg7XFxyXFxufVxcclxcblxcclxcbiNhZGRUYXNrQnV0dG9uIHNwYW4ge1xcclxcblxcdGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXHJcXG5cXHRwYWRkaW5nOiAwcHggMTBweCAwcHggMTNweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NyZWF0ZVRhc2tDb250YWluZXIge1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuXFx0cGFkZGluZzogNSU7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbiN0YXNrc0NvbnRhaW5lciB7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza3NDb250YWluZXIgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNsci1taW5lU2hhZnQpO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDE0cHg7XFxyXFxuXFx0YXBwZWFyYW5jZTogbm9uZTtcXHJcXG5cXHRvdXRsaW5lOiAwO1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDE3NW1zIGN1YmljLWJlemllcigwLjEsIDAuMSwgMC4yNSwgMSk7XFxyXFxufVxcclxcblxcclxcbiN0YXNrc0NvbnRhaW5lciBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOjpiZWZvcmUge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRjb250ZW50OiAnJztcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgdG9wOiAtNnB4O1xcclxcbiAgICBsZWZ0OiA5cHg7XFxyXFxuICAgIHdpZHRoOiA4cHg7XFxyXFxuICAgIGhlaWdodDogMjFweDtcXHJcXG5cXHRib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcblxcdGJvcmRlci1jb2xvcjogdmFyKC0tY2xyLW1pbmVTaGFmdCk7XFxyXFxuXFx0Ym9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcXHJcXG5cXHR0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxuXFx0b3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tzQ29udGFpbmVyIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCB7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWNsci1taW5lU2hhZnQpO1xcclxcblxcdGJvcmRlci1jb2xvcjogdmFyKC0tY2xyLW1pbmVTaGFmdCk7XFxyXFxuXFx0YmFja2dyb3VuZDogdmFyKC0tY2xyLXByaW1hcnkpO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza3NDb250YWluZXIgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkOjpiZWZvcmUge1xcclxcblxcdG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbiN0YXNrc0NvbnRhaW5lciBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgfiBsYWJlbDo6YmVmb3JlIHtcXHJcXG5cXHRjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCAxMDAlKTtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tzQ29udGFpbmVyIGxhYmVsIHtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdGZvbnQtc2l6ZTogMS4zZW07XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXHJcXG5cXHRwYWRkaW5nOiAwIDAuNDVlbSAwO1xcclxcblxcdHVzZXItc2VsZWN0OiBub25lO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4jdGFza3NDb250YWluZXIgbGFiZWw6OmJlZm9yZSB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdGNvbnRlbnQ6IGF0dHIoZGF0YS1jb250ZW50KTtcXHJcXG5cXHRjb2xvcjogdmFyKC0tY2xyLWNvbXBsZXRlZFRhc2spO1xcclxcblxcdGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDAgMCwgMCUgMTAwJSwgMCAxMDAlKTtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzOiAzcHg7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uLWNvbG9yOiB2YXIoLS1jbHItZGFyayk7XFxyXFxuXFx0dG9wOiAwcHg7XFxyXFxuXFx0dHJhbnNpdGlvbjogY2xpcC1wYXRoIDIwMG1zIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sgbGFiZWwge1xcclxcblxcdGJvdHRvbTogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1nYWxsZXJ5KTtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jbHItcHJpbWFyeSk7XFxyXFxuXFx0bWFyZ2luOiAyJTtcXHJcXG5cXHRwYWRkaW5nOiAyJTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza3NDb250YWluZXIgLnRhc2sgaW5wdXQge1xcclxcblxcdGhlaWdodDogMjVweDtcXHJcXG5cXHR3aWR0aDogMjVweDtcXHJcXG5cXHRtaW4td2lkdGg6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbiN0YXNrc0NvbnRhaW5lciBpbnB1dDpob3ZlciB7XFxyXFxuXFx0Ym9yZGVyOiAycHggc29saWQgdmFyKC0tY2xyLXByaW1hcnkpO1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbiNub1Rhc2tze1xcclxcblxcdGZvbnQtc2l6ZTogMS4zZW07XFxyXFxufVxcclxcblxcclxcbi5kZWxldGUtc3R1ZmYge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjt9XFxyXFxuXFxyXFxuLmRlbGV0ZS1zdHVmZiBidXR0b24ge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcXHJcXG5cXHRib3JkZXI6IG5vbmU7XFxyXFxuXFx0bWFyZ2luOiAwLjVlbTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcblxcdGZvbnQtc2l6ZTogMWVtO1xcclxcblxcdHBhZGRpbmc6IDAuMTFlbSAxZW0gMC4xMWVtIDFlbTtcXHJcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG4uZGVsZXRlLXN0dWZmIGJ1dHRvbjpob3ZlciB7XFxyXFxuXFx0b3BhY2l0eTogMC44O1xcclxcbn1cXHJcXG5cXHJcXG4jY2xlYXJCdG4ge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1uYXZIaWdobGlnaHQpO1xcclxcblxcdGNvbG9yOiB2YXIoLS1jbHItbWluZVNoYWZ0KTtcXHJcXG59XFxyXFxuXFxyXFxuI2RlbGV0ZUJ0biB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWRlbGV0ZSk7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWNsci1taW5lU2hhZnQpO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMzc1cHgpIHtcXHJcXG5cXHQjbWVudSwgI3Rhc2tMaXN0IHtcXHJcXG5cXHRcXHR3aWR0aDogOTJ2dztcXHJcXG5cXHR9XFxyXFxuXFx0I2NvbnRhaW5lciB7XFxyXFxuXFx0XFx0bWFyZ2luLXJpZ2h0OiAwJTtcXHJcXG5cXHRcXHRtYXJnaW4tbGVmdDogMCU7XFxyXFxuXFx0XFx0cGFkZGluZy1sZWZ0OiAxJTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcclxcblxcdC50b2RvLWxpc3R7XFxyXFxuXFx0XFx0bWFyZ2luLXRvcDogN2VtO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDExMDBweCkge1xcclxcblxcdCNjb250YWluZXIge1xcclxcblxcdFxcdG1hcmdpbi1yaWdodDogMCU7XFxyXFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDAlO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQudG9kby1saXN0e1xcclxcblxcdFxcdG1hcmdpbi10b3A6IDdlbTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi8qIEBtZWRpYSAobWluLXdpZHRoOiAxNDAwcHgpIHtcXHJcXG5cXHQudG9kby1saXN0e1xcclxcblxcdFxcdG1hcmdpbi10b3A6IDBlbTtcXHJcXG5cXHR9XFxyXFxufSAqL1xcclxcblxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9zdHlsZXMuY3NzXCJdLFwibmFtZXNc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OEI7Q0FDOUIseUJBQXlCO0FBQzFCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyx5Q0FBeUM7Q0FDekMsMkJBQTJCO0FBQzVCOztBQUVBO0NBQ0MsbUNBQW1DO0NBQ25DLDJCQUEyQjtBQUM1Qjs7QUFFQTtDQUNDO0VBQ0MsV0FBVztDQUNaO0NBQ0E7RUFDQyxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtDQUNqQjtBQUNEOztBQUVBO0NBQ0M7RUFDQyxlQUFlO0NBQ2hCO0FBQ0Q7O0FBRUE7Q0FDQztFQUNDLGdCQUFnQjtFQUNoQixlQUFlO0NBQ2hCOztDQUVBO0VBQ0MsZUFBZTtDQUNoQjs7QUFFRDs7QUFFQTs7OztHQUlHXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG5cXHQtLWNsci1wcmltYXJ5OiByZ2IoNDEsIDE0NSwgMjU1KTtcXHJcXG5cXHQtLWNsci1saWdodEdyYXk6IHJnYigyMzIsIDIzMiwgMjMyKTtcXHJcXG5cXHQtLWNsci1saWdodDogI2Y0ZjRmNDtcXHJcXG5cXHQtLWNsci1kYXJrOiByZ2IoNTgsIDU4LCA1OCk7XFxyXFxuXFx0LS1jbHItd2hpdGU6IHJnYigyNTIsIDI1MiwgMjUyKTtcXHJcXG5cXHQtLWNsci13YXJuaW5nOiAjZTk3NTYwO1xcclxcblxcdC0tY2xyLW5hdkhpZ2hsaWdodDogIzRmNzc5NGQwO1xcclxcblxcdC0tY2xyLW1pbmVTaGFmdDogIzIzMjMyMztcXHJcXG5cXHQtLWNsci1nYWxsZXJ5OiAjZWRlZGVkO1xcclxcblxcdC0tY2xyLWVsZkdyZWVuOiAjMDU4MTc5O1xcclxcblxcdC0tY2xyLW5lYnVsYTogI2NiZGJkYTtcXHJcXG5cXHQtLWNsci1jb21wbGV0ZWRUYXNrOiAjYTViMWMwO1xcclxcblxcdC0tY2xyLWRlbGV0ZTogI2ZmNDk0OTYyO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG5cXHRmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcblxcdHBhZGRpbmctYm90dG9tOiAxMCU7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdGJhY2tncm91bmQ6IHZhcigtLWNsci1uZWJ1bGEpO1xcclxcblxcdGNvbG9yOiB2YXIoLS1jbHItbWluZVNoYWZ0KTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdFxcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWNsci1kYXJrKTtcXHJcXG5cXHRmb250LXNpemU6IDNyZW07XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRtYXJnaW46IC0wLjVlbSAwLjVlbSAwLjVlbSA0MC41JTtcXHJcXG5cXHR6LWluZGV4OiAyO1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGVIMSB7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcblxcdG1hcmdpbi1ib3R0b206IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhaW5lciB7XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiAtMTglO1xcclxcblxcdG1hcmdpbi10b3A6IDUwcHg7XFxyXFxuXFx0cGFkZGluZy1sZWZ0OiAxJTtcXHJcXG5cXHRkaXNwbGF5OiBncmlkO1xcclxcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcblxcdGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXHJcXG5cXHRncmlkLXRlbXBsYXRlLWFyZWFzOiBcXHJcXG5cXHQgIFxcXCJwcm9qZWN0c1xcXCJcXHJcXG5cXHQgIFxcXCJ0YXNrc1xcXCJcXHJcXG5cXHQgIFxcXCJsb2dvXFxcIjtcXHJcXG59IFxcclxcblxcclxcbiNnaXRMb2dvRGl2Q29udGFpbmVyIHtcXHJcXG5cXHRncmlkLWFyZWE6IGxvZ287XFxyXFxuXFx0bWFyZ2luLXRvcDogMzBweDtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2l0TG9nbyB7XFxyXFxuXFx0d2lkdGg6IDg1cHg7XFxyXFxuXFx0aGVpZ2h0OiA4NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbmF2Q29udGFpbmVyIHtcXHJcXG5cXHQvKiBkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdG1hcmdpbi1ib3R0b206IDEwdnc7XFxyXFxuXFx0Z3JpZC1hcmVhOiBwcm9qZWN0cztcXHJcXG59XFxyXFxuXFxyXFxuI21lbnVUb2dnbGUge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRtYXgtd2lkdGg6IDUwdnc7XFxyXFxuXFx0dG9wOiA1MHB4O1xcclxcblxcdGxlZnQ6IDUwcHg7XFxyXFxuXFx0ei1pbmRleDogMTtcXHJcXG5cXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcclxcblxcdC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuXFx0LW1zLXVzZXItc2VsZWN0OiBub25lO1xcclxcblxcdHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudVRvZ2dsZSBsaSB7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xcclxcblxcdC1vLXRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcXHJcXG5cXHR0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XFxyXFxuXFx0cGFkZGluZzogMTBweCAwcHggMTBweCA1MHB4O1xcclxcblxcdGZvbnQtc2l6ZTogMjJweDtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNtZW51VG9nZ2xlIGxpOmhvdmVyIHtcXHJcXG5cXHRmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBUaGUgaGFtYnVyZ2VyIGJ1dHRvbiBoaWRkZW4gaW5zaWRlIGFuICNpbnB1dE1lbnUgZWxlbWVudCAqL1xcclxcbiNtZW51VG9nZ2xlICNpbnB1dE1lbnUge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdHdpZHRoOiAzMHB4O1xcclxcblxcdGhlaWdodDogMzBweDtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0dG9wOiAtN3B4O1xcclxcblxcdGxlZnQ6IC01cHg7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0XFxyXFxuXFx0b3BhY2l0eTogMDtcXHJcXG5cXHQvKiBoaWRlIHRoaXMgKi9cXHJcXG5cXHR6LWluZGV4OiAyO1xcclxcblxcdC8qIGFuZCBwbGFjZSBpdCBvdmVyIHRoZSBoYW1idXJnZXIgKi9cXHJcXG5cXHQtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNtZW51VG9nZ2xlICNsYWJlbE1lbnUge1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHR3aWR0aDogMzBweDtcXHJcXG5cXHRoZWlnaHQ6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbiNtZW51VG9nZ2xlICNsYWJlbE1lbnUgc3BhbiB7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiBIYW1idXJnZXJcXHJcXG4gKi9cXHJcXG4jbWVudVRvZ2dsZSAjbGFiZWxNZW51IGRpdiB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0d2lkdGg6IDMwcHg7XFxyXFxuXFx0aGVpZ2h0OiAycHg7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogNnB4O1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1jbHItZWxmR3JlZW4pO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHR6LWluZGV4OiAxO1xcclxcblxcdC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNHB4IDBweDtcXHJcXG5cXHQtbXMtdHJhbnNmb3JtLW9yaWdpbjogNHB4IDBweDtcXHJcXG5cXHR0cmFuc2Zvcm0tb3JpZ2luOiA0cHggMHB4O1xcclxcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG5cXHQtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbiNtZW51VG9nZ2xlICNsYWJlbE1lbnUgZGl2OmZpcnN0LWNoaWxkIHtcXHJcXG5cXHQtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAlIDEwMCU7XFxyXFxuXFx0LW1zLXRyYW5zZm9ybS1vcmlnaW46IDAlIDEwMCU7XFxyXFxuXFx0dHJhbnNmb3JtLW9yaWdpbjogMCUgMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuI21lbnVUb2dnbGUgI2xhYmVsTWVudSBkaXY6bnRoLWNoaWxkKDIpIHtcXHJcXG5cXHQtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xcclxcblxcdC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcXHJcXG5cXHR0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyogXFxyXFxuICogQ2hhbmdlIHRoZSBjb2xvciBvZiB0aGUgaGFtYnVyZ2VyIHdoZW4gdG9nZ2xlZFxcclxcbiAqL1xcclxcbiNtZW51VG9nZ2xlICNpbnB1dE1lbnU6Y2hlY2tlZCsjbGFiZWxNZW51IGRpdiB7XFxyXFxuXFx0YmFja2dyb3VuZDogdmFyKC0tY2xyLW1pbmVTaGFmdCk7XFxyXFxuXFx0XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogVXNlIGFic29sdXRlIHBvc2l0aW9uaW5nIHRvIHBsYWNlIHRoZSBtZW51IG9mZi1zY3JlZW5cXHJcXG4gKi9cXHJcXG4jbWVudSB7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdHdpZHRoOiAxMDB2dztcXHJcXG5cXHRtYXgtd2lkdGg6IDkwMHB4O1xcclxcblxcdG1hcmdpbjogLTgwcHggMCAwIC01MHB4O1xcclxcblxcdHBhZGRpbmc6IDUwcHggMHB4IDUwcHggMHB4O1xcclxcblxcdHBhZGRpbmctdG9wOiAxMjVweDtcXHJcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1jbHItbGlnaHQpO1xcclxcblxcdGJveC1zaGFkb3c6IFxcclxcblxcdFxcdFxcdFxcdDAgMi44cHggMi4ycHggcmdiYSgwLCAwLCAwLCAwLjAzNCksXFxyXFxuXFx0XFx0XFx0XFx0MCA2LjdweCA1LjNweCByZ2JhKDAsIDAsIDAsIDAuMDQ4KSxcXHJcXG5cXHRcXHRcXHRcXHQwIDEyLjVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNiksXFxyXFxuXFx0XFx0XFx0XFx0MCAyMi4zcHggMTcuOXB4IHJnYmEoMCwgMCwgMCwgMC4wNzIpLFxcclxcblxcdFxcdFxcdFxcdDAgNDEuOHB4IDMzLjRweCByZ2JhKDAsIDAsIDAsIDAuMDg2KTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcblxcdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG5cXHQvKiBIaWRlIHRoZSBtZW51IG9mZi1zY3JlZW4gdG8gdGhlIGxlZnQgKi9cXHJcXG5cXHRsZWZ0OiAwO1xcclxcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogbGVmdCAwLjNzIGVhc2U7XFxyXFxuXFx0LW8tdHJhbnNpdGlvbjogbGVmdCAwLjNzIGVhc2U7XFxyXFxuXFx0dHJhbnNpdGlvbjogbGVmdCAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qXFxyXFxuICogU2xpZGUgdGhlIG1lbnUgaW4gZnJvbSBsZWZ0IHdoZW4gdGhlICNpbnB1dE1lbnUgaXMgY2hlY2tlZFxcclxcbiAqL1xcclxcbiNtZW51VG9nZ2xlICNpbnB1dE1lbnU6Y2hlY2tlZH51bCB7XFxyXFxuXFxyXFxuXFx0dHJhbnNpdGlvbjogbGVmdCAwLjNzIGVhc2U7XFxyXFxuXFx0bGVmdDogLTIwMCU7XFxyXFxufVxcclxcblxcclxcbi5saXN0LW5hbWUge1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtaW1nIHtcXHJcXG5cXHR3aWR0aDogMS43ZW07XFxyXFxuXFx0cGFkZGluZy1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZS1saXN0IHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItZWxmR3JlZW4pO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDM1cHg7XFxyXFxuXFx0bWFyZ2luOiAwcHggMjVweCAwcHggMjVweDtcXHJcXG5cXHRjb2xvcjogdmFyKC0tY2xyLWxpZ2h0KTtcXHJcXG59XFxyXFxuXFxyXFxuI215Rm9ybSB7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdG1hcmdpbi10b3A6IDEuOGVtO1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxuXFx0XFxyXFxufVxcclxcblxcclxcbiNteUZvcm0gZm9ybSwgI215VGFza3MgZm9ybSB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjNlbTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItd2hpdGUpO1xcclxcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNsci1lbGZHcmVlbik7XFxyXFxuXFx0d2lkdGg6IDE1ZW07XFxyXFxuXFx0cGFkZGluZzogMmVtIC42ZW0gMS41ZW0gLjZlbTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkUHJvamVjdEZvcm0ge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNhZGRQcm9qZWN0QnV0dG9uIHtcXHJcXG5cXHRtYXJnaW4tdG9wOiAzMHB4O1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1lbGZHcmVlbik7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWNsci1saWdodCk7XFxyXFxuXFx0Ym9yZGVyOiBub25lO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDQycHg7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjRlbTtcXHJcXG5cXHRwYWRkaW5nOiAyJSAxMCUgMiUgOCU7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkUHJvamVjdEJ1dHRvbjpob3ZlciB7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWNsci1saWdodCk7XFxyXFxuXFx0b3BhY2l0eTogMC44O1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkUHJvamVjdEJ1dHRvbiBzcGFuIHtcXHJcXG5cXHRmb250LXNpemU6IDEuNmVtO1xcclxcblxcdGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuXFx0cGFkZGluZzogMHB4IDEwcHggMHB4IDNweDtcXHJcXG5cXHRcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdEJ0biwgI3Rhc2tTdWJtaXRCdXR0b24ge1xcclxcbiBcXHRmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XFxyXFxuIFxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1lbGZHcmVlbik7XFxyXFxuIFxcdGNvbG9yOiB2YXIoLS1jbHItbGlnaHQpO1xcclxcbiBcXHRib3JkZXI6IG5vbmU7XFxyXFxuIFxcdGJvcmRlci1yYWRpdXM6IDMycHg7XFxyXFxuIFxcdGZvbnQtc2l6ZTogMWVtO1xcclxcbiBcXHRwYWRkaW5nOiAyJSAzMCUgMiUgMzAlO1xcclxcblxcdCB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4jc3VibWl0QnRuOmhvdmVyLCAjdGFza1N1Ym1pdEJ0bjpob3ZlciB7XFxyXFxuXFx0b3BhY2l0eTogMC44O1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdExhYmVsLCAjdGFza0xhYmVsIHtcXHJcXG5cXHRmb250LXNpemU6IDEuM2VtO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0SW5wdXQsICN0YXNrSW5wdXQge1xcclxcblxcdGZvbnQtc2l6ZTogMC44ZW07XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXHJcXG5cXHRmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMTVweDtcXHJcXG5cXHRwYWRkaW5nOiAwcHggMTVweCAwcHggMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZVByb2plY3RCdG4ge1xcclxcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNsci1taW5lU2hhZnQpO1xcclxcblxcdGJhY2tncm91bmQ6IHZhcigtLWNsci13YXJuaW5nKTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcblxcdHBhZGRpbmc6IDNweCA3cHggMnB4IDdweDtcXHJcXG5cXHRmb250LXNpemU6IDAuN2VtO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0bWFyZ2luOiAwLjUlIDIlIDAgMiU7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxufVxcclxcblxcclxcbiN0YXNrTGlzdCB7XFxyXFxuXFx0Z3JpZC1hcmVhOiB0YXNrcztcXHJcXG5cXHQvKiBtYXJnaW4tYm90dG9tOiAxMzB2aDsgKi9cXHJcXG5cXHQvKiBtYXJnaW4tdG9wOiA1MHZoOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1saXN0IHtcXHJcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcclxcblxcdG1hcmdpbi10b3A6IDVlbTtcXHJcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1jbHItZ2FsbGVyeSk7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXHJcXG5cXHR3aWR0aDogMTAwdnc7XFxyXFxuXFx0bWF4LXdpZHRoOiA5MDBweDtcXHJcXG5cXHRwYWRkaW5nLXRvcDogMyU7XFxyXFxuXFx0cGFkZGluZy1ib3R0b206IDElO1xcclxcblxcdGJveC1zaGFkb3c6IFxcclxcblxcdFxcdFxcdFxcdDAgMi44cHggMi4ycHggcmdiYSgwLCAwLCAwLCAwLjAzNCksXFxyXFxuXFx0XFx0XFx0XFx0MCA2LjdweCA1LjNweCByZ2JhKDAsIDAsIDAsIDAuMDQ4KSxcXHJcXG5cXHRcXHRcXHRcXHQwIDEyLjVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNiksXFxyXFxuXFx0XFx0XFx0XFx0MCAyMi4zcHggMTcuOXB4IHJnYmEoMCwgMCwgMCwgMC4wNzIpLFxcclxcblxcdFxcdFxcdFxcdDAgNDEuOHB4IDMzLjRweCByZ2JhKDAsIDAsIDAsIDAuMDg2KSxcXHJcXG5cXHRcXHRcXHRcXHQwIDEwMHB4IDgwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZE1hcmdpbkFmdGVyQ2xpY2sge1xcclxcblxcdG1hcmdpbi10b3A6IDI2dmg7XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlbW92ZU1hcmdpbkFmdGVyQ2xpY2sge1xcclxcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNzAlKTtcXHJcXG5cXHQvKiBtYXJnaW4tdG9wOiAtMTB2aDsgKi9cXHJcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4udG9kby1oZWFkZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1saWdodCk7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tY2xyLWVsZkdyZWVuKTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcblxcdG1hcmdpbjogMCUgNSUgNSUgNSU7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWNvdW50IHtcXHJcXG5cXHRjb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1ib2R5IHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItbGlnaHQpO1xcclxcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNsci1lbGZHcmVlbik7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXHJcXG5cXHRwYWRkaW5nOiA1JSAxJSAwJSAxJTtcXHJcXG5cXHRtYXJnaW46IDUlO1xcclxcbn1cXHJcXG5cXHJcXG4jbXlUYXNrcyB7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZFRhc2tCdXR0b24ge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcXHJcXG4gXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWVsZkdyZWVuKTtcXHJcXG4gXFx0Y29sb3I6IHZhcigtLWNsci1saWdodCk7XFxyXFxuIFxcdGJvcmRlcjogbm9uZTtcXHJcXG4gXFx0Ym9yZGVyLXJhZGl1czogMzJweDtcXHJcXG4gXFx0Zm9udC1zaXplOiAxLjFlbTtcXHJcXG4gXFx0cGFkZGluZzogMiUgMTAlIDIlIDQlO1xcclxcblxcdCBkaXNwbGF5OiBmbGV4O1xcclxcblxcdCBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdCBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcblxcdCB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkVGFza0J1dHRvbjpob3ZlciB7XFxyXFxuXFx0b3BhY2l0eTogMC44O1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkVGFza0J1dHRvbiBzcGFuIHtcXHJcXG5cXHRmb250LXNpemU6IDEuNWVtO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuXFx0cGFkZGluZzogMHB4IDEwcHggMHB4IDEzcHg7XFxyXFxufVxcclxcblxcclxcbiNjcmVhdGVUYXNrQ29udGFpbmVyIHtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcblxcdHBhZGRpbmc6IDUlO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jdGFza3NDb250YWluZXIge1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tzQ29udGFpbmVyIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jbHItbWluZVNoYWZ0KTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAxNHB4O1xcclxcblxcdGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuXFx0b3V0bGluZTogMDtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZCAxNzVtcyBjdWJpYy1iZXppZXIoMC4xLCAwLjEsIDAuMjUsIDEpO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza3NDb250YWluZXIgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTo6YmVmb3JlIHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0Y29udGVudDogJyc7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHRvcDogLTZweDtcXHJcXG4gICAgbGVmdDogOXB4O1xcclxcbiAgICB3aWR0aDogOHB4O1xcclxcbiAgICBoZWlnaHQ6IDIxcHg7XFxyXFxuXFx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG5cXHRib3JkZXItY29sb3I6IHZhcigtLWNsci1taW5lU2hhZnQpO1xcclxcblxcdGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XFxyXFxuXFx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcblxcdG9wYWNpdHk6IDA7XFxyXFxufVxcclxcblxcclxcbiN0YXNrc0NvbnRhaW5lciBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQge1xcclxcblxcdGNvbG9yOiB2YXIoLS1jbHItbWluZVNoYWZ0KTtcXHJcXG5cXHRib3JkZXItY29sb3I6IHZhcigtLWNsci1taW5lU2hhZnQpO1xcclxcblxcdGJhY2tncm91bmQ6IHZhcigtLWNsci1wcmltYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tzQ29udGFpbmVyIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZDo6YmVmb3JlIHtcXHJcXG5cXHRvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza3NDb250YWluZXIgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkIH4gbGFiZWw6OmJlZm9yZSB7XFxyXFxuXFx0Y2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDAgMTAwJSk7XFxyXFxufVxcclxcblxcclxcbiN0YXNrc0NvbnRhaW5lciBsYWJlbCB7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRmb250LXNpemU6IDEuM2VtO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuXFx0cGFkZGluZzogMCAwLjQ1ZW0gMDtcXHJcXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tzQ29udGFpbmVyIGxhYmVsOjpiZWZvcmUge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRjb250ZW50OiBhdHRyKGRhdGEtY29udGVudCk7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWNsci1jb21wbGV0ZWRUYXNrKTtcXHJcXG5cXHRjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAwIDAsIDAlIDEwMCUsIDAgMTAwJSk7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogM3B4O1xcclxcblxcdHRleHQtZGVjb3JhdGlvbi1jb2xvcjogdmFyKC0tY2xyLWRhcmspO1xcclxcblxcdHRvcDogMHB4O1xcclxcblxcdHRyYW5zaXRpb246IGNsaXAtcGF0aCAyMDBtcyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCk7XFxyXFxufVxcclxcblxcclxcbi50YXNrIGxhYmVsIHtcXHJcXG5cXHRib3R0b206IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItZ2FsbGVyeSk7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tY2xyLXByaW1hcnkpO1xcclxcblxcdG1hcmdpbjogMiU7XFxyXFxuXFx0cGFkZGluZzogMiU7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tzQ29udGFpbmVyIC50YXNrIGlucHV0IHtcXHJcXG5cXHRoZWlnaHQ6IDI1cHg7XFxyXFxuXFx0d2lkdGg6IDI1cHg7XFxyXFxuXFx0bWluLXdpZHRoOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza3NDb250YWluZXIgaW5wdXQ6aG92ZXIge1xcclxcblxcdGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNsci1wcmltYXJ5KTtcXHJcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4jbm9UYXNrc3tcXHJcXG5cXHRmb250LXNpemU6IDEuM2VtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLXN0dWZmIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47fVxcclxcblxcclxcbi5kZWxldGUtc3R1ZmYgYnV0dG9uIHtcXHJcXG5cXHRmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XFxyXFxuXFx0Ym9yZGVyOiBub25lO1xcclxcblxcdG1hcmdpbjogMC41ZW07XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMTJweDtcXHJcXG5cXHRmb250LXNpemU6IDFlbTtcXHJcXG5cXHRwYWRkaW5nOiAwLjExZW0gMWVtIDAuMTFlbSAxZW07XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuLmRlbGV0ZS1zdHVmZiBidXR0b246aG92ZXIge1xcclxcblxcdG9wYWNpdHk6IDAuODtcXHJcXG59XFxyXFxuXFxyXFxuI2NsZWFyQnRuIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItbmF2SGlnaGxpZ2h0KTtcXHJcXG5cXHRjb2xvcjogdmFyKC0tY2xyLW1pbmVTaGFmdCk7XFxyXFxufVxcclxcblxcclxcbiNkZWxldGVCdG4ge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1kZWxldGUpO1xcclxcblxcdGNvbG9yOiB2YXIoLS1jbHItbWluZVNoYWZ0KTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDM3NXB4KSB7XFxyXFxuXFx0I21lbnUsICN0YXNrTGlzdCB7XFxyXFxuXFx0XFx0d2lkdGg6IDkydnc7XFxyXFxuXFx0fVxcclxcblxcdCNjb250YWluZXIge1xcclxcblxcdFxcdG1hcmdpbi1yaWdodDogMCU7XFxyXFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDAlO1xcclxcblxcdFxcdHBhZGRpbmctbGVmdDogMSU7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG5cXHQudG9kby1saXN0e1xcclxcblxcdFxcdG1hcmdpbi10b3A6IDdlbTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAxMTAwcHgpIHtcXHJcXG5cXHQjY29udGFpbmVyIHtcXHJcXG5cXHRcXHRtYXJnaW4tcmlnaHQ6IDAlO1xcclxcblxcdFxcdG1hcmdpbi1sZWZ0OiAwJTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LnRvZG8tbGlzdHtcXHJcXG5cXHRcXHRtYXJnaW4tdG9wOiA3ZW07XFxyXFxuXFx0fVxcclxcblxcclxcbn1cXHJcXG5cXHJcXG4vKiBAbWVkaWEgKG1pbi13aWR0aDogMTQwMHB4KSB7XFxyXFxuXFx0LnRvZG8tbGlzdHtcXHJcXG5cXHRcXHRtYXJnaW4tdG9wOiAwZW07XFxyXFxuXFx0fVxcclxcbn0gKi9cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGdpdEltYWdlIGZyb20gJy4vaW1hZ2VzL2dpdC1sb2dvLnBuZyc7XHJcblxyXG5mdW5jdGlvbiBET01JbnRlcmZhY2UoKSB7XHJcblxyXG5cdC8vY2F0Y2hpbmcgRE9NXHJcblx0bGV0IGdpdExvZ29EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2l0TG9nb0RpdicpO1xyXG5cclxuXHRsZXQgaW5wdXRNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0TWVudScpO1xyXG5cclxuXHRsZXQgdGFza0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0xpc3QnKTtcclxuXHJcblx0Ly9wcm9qZWN0c1xyXG5cdGxldCBwcm9qZWN0U3VibWl0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdEJ0bicpO1xyXG5cdGxldCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFByb2plY3RCdXR0b24nKTtcclxuXHRsZXQgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnW25ld1Byb2plY3RGb3JtXScpO1xyXG5cdGxldCBkZWxldGVQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZVByb2plY3RCdG4nKTtcclxuXHRsZXQgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHNDb250YWluZXInKTtcclxuXHRsZXQgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RJbnB1dCcpO1xyXG5cclxuXHJcblx0XHJcblx0Ly90YXNrc1xyXG5cdGxldCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRhc2tCdXR0b24nKTtcclxuXHRsZXQgdGFza1N1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrU3VibWl0QnV0dG9uJyk7XHJcblx0bGV0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tzQ29udGFpbmVyJyk7XHJcblx0bGV0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0VGl0bGUnKTtcclxuXHRsZXQgbmV3VGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3VGFza0Zvcm0nKTtcclxuXHRsZXQgdGFza0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tJbnB1dCcpO1xyXG5cclxuXHJcblx0XHJcblx0Ly9naXQgbG9nbyBpbWdcclxuXHRsZXQgZ2l0TG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5cdGdpdExvZ28uc3JjID0gZ2l0SW1hZ2U7XHJcblx0Z2l0TG9nby5jbGFzc0xpc3QuYWRkKCdnaXRMb2dvJyk7XHJcblx0Z2l0TG9nb0Rpdi5hcHBlbmRDaGlsZChnaXRMb2dvKTtcclxuXHJcblx0Ly8gRE9NIGNsaWNrIGV2ZW50c1xyXG5cdGlucHV0TWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZE1hcmdpbik7XHJcblx0aW5wdXRNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZUgxKTtcclxuXHJcblxyXG5cclxuXHRhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkVGFzayk7XHJcblx0YWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Gb3JtKTtcclxuXHRwcm9qZWN0U3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VGb3JtKTtcclxuXHR0YXNrU3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VUYXNrRm9ybSk7XHJcblxyXG5cclxuXHQvL0Z1bmN0aW9ucyBmb3IgYnV0dG9ucyBhbmQgYWRkaW5nIG1hcmdpblxyXG5cdGZ1bmN0aW9uIG9wZW5Gb3JtKCkge1xyXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUZvcm1cIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHRcdGFkZFByb2plY3RCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gY2xvc2VGb3JtKCkge1xyXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUZvcm1cIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cdFx0YWRkUHJvamVjdEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cdH1cclxuXHJcblxyXG5cdGZ1bmN0aW9uIGFkZE1hcmdpbigpIHtcclxuXHRcdHRhc2tMaXN0LnN0eWxlLm1hcmdpblRvcCA9IG51bGw7XHJcblx0XHR0YXNrTGlzdC5jbGFzc0xpc3QudG9nZ2xlKCdyZW1vdmVNYXJnaW5BZnRlckNsaWNrJyk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBoaWRlSDEoKSB7XHJcblx0XHRsZXQgaDFFbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaDEnKVswXTtcclxuXHRcdGgxRWxlLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGVIMScpO1xyXG5cdFx0XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBhZGRUYXNrKCkge1xyXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteVRhc2tzXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblx0XHRhZGRUYXNrQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGNsb3NlVGFza0Zvcm0oKSB7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15VGFza3NcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cdFx0YWRkVGFza0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cdH1cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBET01JbnRlcmZhY2U7IiwiaW1wb3J0IERPTUludGVyZmFjZSBmcm9tICcuL0RPTUludGVyZmFjZS5qcyc7XHJcbi8vIGltcG9ydCByZW5kZXJQcm9qZWN0cyBmcm9tICcuL3JlbmRlclByb2plY3RzLmpzJztcclxuLy8gaW1wb3J0IGRlbGV0ZVByb2plY3RzIGZyb20gJy4vZGVsZXRlUHJvamVjdHMuanMnO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIERPTUludGVyZmFjZSk7XHJcbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBkZWxldGVQcm9qZWN0cyk7XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0cygpIHtcclxuXHJcblxyXG5cdC8vIG5ld1Byb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFkZFByb2plY3QpO1xyXG5cclxuXHJcblx0Ly8gLy8gYWRkIG5ldyBwcm9qZWN0IHRvIGxvY2FsIHN0b3JhZ2VcclxuXHQvLyBmdW5jdGlvbiBhZGRQcm9qZWN0KGV2ZW50KSB7XHJcblx0Ly8gXHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHQvLyBcdC8vaWYgaW5wdXQgaXMgZW1wdHksIGRvbid0IGFkZCBwcm9qZWN0XHJcblx0Ly8gXHRpZiAocHJvamVjdElucHV0LnZhbHVlID09PSAnJykge1xyXG5cdC8vIFx0XHRyZXR1cm47XHJcblx0Ly8gXHR9IGVsc2Uge1xyXG5cdC8vIFx0XHRsZXQgbmV3UHJvamVjdCA9IHByb2plY3RJbnB1dC52YWx1ZTtcclxuXHQvLyBcdFx0bGV0IG5ld1Byb2plY3RPYmogPSB7XHJcblx0Ly8gXHRcdFx0cHJvamVjdE5hbWU6IG5ld1Byb2plY3RcclxuXHQvLyBcdFx0fTtcclxuXHQvLyBcdFx0bGV0IG5ld1Byb2plY3RTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShuZXdQcm9qZWN0T2JqKTtcclxuXHQvLyBcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0obmV3UHJvamVjdCwgbmV3UHJvamVjdFN0cmluZyk7XHJcblx0Ly8gXHRcdGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSk7XHJcblx0Ly8gXHRcdHByb2plY3RJbnB1dC52YWx1ZSA9ICcnO1xyXG5cclxuXHQvLyBcdFx0bG9hZFByb2plY3RzKCk7XHJcblx0Ly8gXHR9XHJcblxyXG5cdFx0XHJcblx0XHRcclxuXHQvLyB9XHJcblxyXG5cclxuXHRcclxuXHQvLyAvL2xvYWQgcHJvamVjdHMgd2hlbiBuZXcgcHJvamVjdCBpcyBhZGRlZFxyXG5cdC8vIGZ1bmN0aW9uIGxvYWRQcm9qZWN0cygpIHtcclxuXHQvLyBcdGxldCBwcm9qZWN0cyA9IE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSk7XHJcblx0Ly8gXHRwcm9qZWN0cy5mb3JFYWNoKGZ1bmN0aW9uKHByb2plY3QpIHtcclxuXHQvLyBcdFx0Ly9pZiBwcm9qZWN0IGFscmVhZHkgZXhpc3RzLCBkb24ndCBhZGQgaXQgYWdhaW5cclxuXHQvLyBcdFx0aWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByb2plY3QpKSB7XHJcblx0Ly8gXHRcdFx0cmV0dXJuO1xyXG5cdC8vIFx0XHR9IGVsc2Uge1xyXG5cdC8vIFx0XHRcdGNyZWF0ZVByb2plY3QocHJvamVjdCk7XHJcblx0Ly8gXHRcdH1cclxuXHQvLyBcdH0pO1xyXG5cdC8vIH1cclxuXHJcblx0Ly8gZnVuY3Rpb24gY3JlYXRlUHJvamVjdChwcm9qZWN0TmFtZSkge1xyXG5cclxuXHQvLyBcdGxldCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuXHQvLyBcdHByb2plY3QuY2xhc3NMaXN0LmFkZCgnbGlzdC1uYW1lJyk7XHJcblx0Ly8gXHRwcm9qZWN0LnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0JywgcHJvamVjdE5hbWUpO1xyXG5cdC8vIFx0cHJvamVjdC5pZCA9IHByb2plY3ROYW1lO1xyXG5cdFx0XHJcblx0Ly8gXHRsZXQgcHJvamVjdEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5cdC8vIFx0cHJvamVjdEltZy5jbGFzc0xpc3QuYWRkKCdsaXN0LWltZycpO1xyXG5cdC8vIFx0cHJvamVjdEltZy5zcmMgPSAnLi4vc3JjL2ltYWdlcy9zdmcvbGlzdC5zdmcnO1xyXG5cdC8vIFx0cHJvamVjdEltZy5hbHQgPSAnbGlzdCc7XHJcblxyXG5cdC8vIFx0bGV0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHQvLyBcdGRlbGV0ZVByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlUHJvamVjdEJ0bicpO1xyXG5cdC8vIFx0ZGVsZXRlUHJvamVjdEJ1dHRvbi5pbm5lclRleHQgPSAnWCc7XHJcblxyXG5cdC8vIFx0cHJvamVjdC5hcHBlbmQocHJvamVjdEltZywgcHJvamVjdE5hbWUsIGRlbGV0ZVByb2plY3RCdXR0b24pO1xyXG5cclxuXHQvLyBcdHByb2plY3RzQ29udGFpbmVyLnByZXBlbmQocHJvamVjdCk7XHJcblxyXG5cdC8vIH1cclxuXHJcblx0Ly8gLy8gbG9hZCBwcm9qZWN0cyBmcm9tIGxvY2FsU3RvcmFnZVxyXG5cdC8vIGxvYWRQcm9qZWN0cygpO1xyXG5cclxuXHJcblx0XHJcblx0Y29uc3QgcHJvamVjdCA9ICgoKSA9PiB7XHJcblxyXG5cdFx0Ly9jcmVhdGUgbmV3IFByb2plY3RcclxuXHRcdGNvbnN0IGNyZWF0ZVByb2plY3QgPSAoYSkgPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcblx0XHRcdHByb2plY3QuY2xhc3NMaXN0LmFkZCgnbGlzdC1uYW1lJyk7XHJcblx0XHRcdHByb2plY3Quc2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QnLCBhKTtcclxuXHRcdFx0cHJvamVjdC5pZCA9IGE7XHJcblx0XHRcdGNvbnN0IHByb2plY3RJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuXHRcdFx0cHJvamVjdEltZy5jbGFzc0xpc3QuYWRkKCdsaXN0LWltZycpO1xyXG5cdFx0XHRwcm9qZWN0SW1nLnNyYyA9ICcuLi9zcmMvaW1hZ2VzL3N2Zy9saXN0LnN2Zyc7XHJcblx0XHRcdHByb2plY3RJbWcuYWx0ID0gJ2xpc3QnO1xyXG5cdFx0XHRjb25zdCBkZWxldGVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblx0XHRcdGRlbGV0ZVByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlUHJvamVjdEJ0bicpO1xyXG5cdFx0XHRkZWxldGVQcm9qZWN0QnV0dG9uLmlubmVyVGV4dCA9ICdYJztcclxuXHRcdFx0cHJvamVjdC5hcHBlbmQocHJvamVjdEltZywgYSwgZGVsZXRlUHJvamVjdEJ1dHRvbik7XHJcblx0XHRcdHByb2plY3RzQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0KTtcclxuXHRcdFx0YWRkUHJvamVjdCgpO1xyXG5cclxuXHRcdH07XHJcblxyXG5cdFx0Ly8gYWRkIG5ldyBwcm9qZWN0IHRvIGxvY2FsIHN0b3JhZ2VcclxuXHRcdGNvbnN0IGFkZFByb2plY3QgPSAoKSA9PiB7XHJcblx0XHRcdC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdC8vaWYgaW5wdXQgaXMgZW1wdHksIGRvbid0IGFkZCBwcm9qZWN0XHJcblx0XHRcdGlmIChwcm9qZWN0SW5wdXQudmFsdWUgPT09ICcnKSB7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGxldCBuZXdQcm9qZWN0ID0gcHJvamVjdElucHV0LnZhbHVlO1xyXG5cdFx0XHRcdGxldCBuZXdQcm9qZWN0T2JqID0ge1xyXG5cdFx0XHRcdFx0cHJvamVjdE5hbWU6IG5ld1Byb2plY3RcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdGxldCBuZXdQcm9qZWN0U3RyaW5nID0gSlNPTi5zdHJpbmdpZnkobmV3UHJvamVjdE9iaik7XHJcblx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0obmV3UHJvamVjdCwgbmV3UHJvamVjdFN0cmluZyk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2cobG9jYWxTdG9yYWdlKTtcclxuXHRcdFx0XHRwcm9qZWN0SW5wdXQudmFsdWUgPSAnJztcclxuXHRcdFx0XHRsb2FkUHJvamVjdHMoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHJcblx0XHR9XHJcblxyXG5cclxuXHRcdC8vbG9hZCBwcm9qZWN0cyBmcm9tIGxvY2FsU3RvcmFnZSB3aGVuIHBhZ2UgbG9hZHNcclxuXHJcblxyXG5cdFx0Y29uc3QgbG9hZFByb2plY3RzID0gKCkgPT4ge1xyXG5cdFx0XHRsZXQgcHJvamVjdHMgPSBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpO1xyXG5cdFx0XHRwcm9qZWN0cy5mb3JFYWNoKGZ1bmN0aW9uKHByb2plY3QpIHtcclxuXHRcdFx0XHQvL2lmIHByb2plY3QgYWxyZWFkeSBleGlzdHMsIGRvbid0IGFkZCBpdCBhZ2FpblxyXG5cdFx0XHRcdGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcm9qZWN0KSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRjcmVhdGVQcm9qZWN0KHByb2plY3QpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRhZGRQcm9qZWN0LFxyXG5cdFx0XHRsb2FkUHJvamVjdHMsXHJcblx0XHRcdGNyZWF0ZVByb2plY3RcclxuXHRcdH07XHJcblxyXG5cdFx0XHJcblx0fSkoKTtcclxuXHJcblx0Ly9hZGQgZXZlbnQgbGlzdGVuZXIgdG8gY3JlYXRlIHByb2plY3Qgd2hlbiBmb3JtIGlzIHN1Ym1pdHRlZFxyXG5cdG5ld1Byb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGdldFByb2plY3ROYW1lKTtcclxuXHJcblx0Ly9nZXQgcHJvamVjdCBuYW1lIGZyb20gaW5wdXQgYW5kIGNhbGwgY3JlYXRlUHJvamVjdCBtZXRob2RcclxuXHRmdW5jdGlvbiBnZXRQcm9qZWN0TmFtZShldmVudCkge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGxldCBwcm9qZWN0TmFtZSA9IHByb2plY3RJbnB1dC52YWx1ZTtcclxuXHRcdC8vIGlmIHByb2plY3QgZXhpc3RzIGluIGxvY2FsIHN0b3JhZ2Ugb3IgcHJvamVjdCBuYW1lIGlzIGVtcHR5LCBkb24ndCBhZGQgaXQgYWdhaW5cclxuXHRcdGlmIChwcm9qZWN0TmFtZSA9PT0gJyd8fCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qZWN0TmFtZSkpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cHJvamVjdC5jcmVhdGVQcm9qZWN0KHByb2plY3ROYW1lKTtcclxuXHRcdH1cclxuXHRcclxuXHRcdGNvbnNvbGUubG9nKHByb2plY3ROYW1lKTtcclxuXHRcdHJldHVybiBwcm9qZWN0TmFtZTtcclxuXHR9XHJcblxyXG5cdC8vbG9hZCBwcm9qZWN0cyBmcm9tIGxvY2FsU3RvcmFnZSB3aGVuIHBhZ2UgbG9hZHNcclxuXHRwcm9qZWN0LmxvYWRQcm9qZWN0cygpO1xyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVByb2plY3RzOyIsImltcG9ydCBET01JbnRlcmZhY2UgZnJvbSAnLi9ET01JbnRlcmZhY2UuanMnO1xyXG4vLyBpbXBvcnQgY3JlYXRlUHJvamVjdHMgZnJvbSAnLi9jcmVhdGVQcm9qZWN0cy5qcyc7XHJcbi8vIGltcG9ydCBkZWxldGVQcm9qZWN0cyBmcm9tICcuL2RlbGV0ZVByb2plY3RzLmpzJztcclxuaW1wb3J0IHJlbmRlclRhc2tzIGZyb20gJy4vcmVuZGVyVGFza3MuanMnO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIERPTUludGVyZmFjZSk7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCByZW5kZXJUYXNrcyk7XHJcbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBjcmVhdGVQcm9qZWN0cyk7XHJcbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBkZWxldGVQcm9qZWN0cyk7XHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGFza3MoKSB7XHJcblxyXG5cdC8vY3JlYXRlIG5ldyB0YXNrXHJcblx0XHJcblx0Ly8gbGV0IHByb2plY3ROYW1lID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0Jyk7XHJcblxyXG5cdC8vIC8vZ3JhYiBwcm9qZWN0IG5hbWUgZnJvbSBkYXRhLXByb2plY3QgYXR0cmlidXRlXHJcblx0Ly8gZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBmdW5jdGlvbiAoIGV2ZW50ICkge1xyXG5cdC8vIFx0aWYoIGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT0gJ2xpc3QtbmFtZSBhY3RpdmUtbGlzdCcgKSB7XHJcblx0Ly8gXHRcdGxldCBwcm9qZWN0TmFtZSA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdCcpO1xyXG5cdC8vIFx0XHQvLyBjb25zb2xlLmxvZyhwcm9qZWN0TmFtZSwgbG9jYWxTdG9yYWdlKTtcclxuXHJcblx0Ly8gXHRcdG5ld1Rhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFkZFRhc2spO1xyXG5cclxuXHQvLyBcdFx0Ly8gd2hlbiBpIGhpdCBzdWJtaXQgb24gbmV3IHRhc2sgZm9ybSwgYWRkIHRhc2sgdG8gbG9jYWwgc3RvcmFnZSB3aXRoIHByb2plY3QgbmFtZSBhcyBrZXlcclxuXHJcblx0Ly8gXHRcdGZ1bmN0aW9uIGFkZFRhc2soZXZlbnQpIHtcclxuXHQvLyBcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdC8vIFx0XHRcdGxldCBuZXdUYXNrID0gdGFza0lucHV0LnZhbHVlO1xyXG5cdC8vIFx0XHRcdGxldCBuZXdUYXNrT2JqID0ge1xyXG5cdC8vIFx0XHRcdFx0bmV3VGFzazogbmV3VGFza1xyXG5cdC8vIFx0XHRcdH07XHJcblx0Ly8gXHRcdFx0bGV0IG5ld1Rhc2tTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShuZXdUYXNrT2JqKTtcclxuXHQvLyBcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0TmFtZSwgbmV3VGFza1N0cmluZyk7XHJcblx0Ly8gXHRcdFx0dGFza0lucHV0LnZhbHVlID0gJyc7XHJcblxyXG5cdC8vIFx0XHRcdGxvYWRUYXNrcygpO1xyXG5cdC8vIFx0XHR9XHJcblxyXG5cdC8vIFx0XHQvL2xvYWQgdGFza3Mgd2hlbiBuZXcgdGFzayBpcyBhZGRlZFxyXG5cdC8vIFx0XHRmdW5jdGlvbiBsb2FkVGFza3MoKSB7XHJcblx0Ly8gXHRcdFx0bGV0IHRhc2tzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvamVjdE5hbWUpO1xyXG5cdC8vIFx0XHRcdGNvbnNvbGUubG9nKHR5cGVvZih0YXNrcykpO1xyXG5cdC8vIFx0XHRcdC8vIHRhc2tzLmZvckVhY2goZnVuY3Rpb24gKHRhc2spIHtcclxuXHQvLyBcdFx0XHQvLyBcdC8vaWYgdGFzayBhbHJlYWR5IGV4aXN0cywgZG9uJ3QgYWRkIGl0IGFnYWluXHJcblx0Ly8gXHRcdFx0Ly8gXHQvLyBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFzaykpIHtcclxuXHQvLyBcdFx0XHQvLyBcdC8vIFx0cmV0dXJuO1xyXG5cdC8vIFx0XHRcdC8vIFx0Ly8gfSBlbHNlIHtcclxuXHQvLyBcdFx0XHQvLyBcdC8vIFx0Y3JlYXRlVGFzayh0YXNrKTtcclxuXHQvLyBcdFx0XHQvLyBcdC8vIH1cclxuXHJcblx0XHRcdFx0XHRcclxuXHQvLyBcdFx0XHQvLyB9KTtcclxuXHQvLyBcdFx0XHRjcmVhdGVUYXNrKHRhc2tzKTtcclxuXHRcdFx0XHRcclxuXHQvLyBcdFx0fVxyXG5cclxuXHQvLyBcdFx0ZnVuY3Rpb24gY3JlYXRlVGFzayh0YXNrTmFtZSkge1xyXG5cdFx0XHRcdFxyXG5cdC8vIFx0XHRcdC8vIGxldCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuXHQvLyBcdFx0XHQvLyB0YXNrLmNsYXNzTGlzdC5hZGQoJ2xpc3QtbmFtZScpO1xyXG5cdC8vIFx0XHRcdC8vIHRhc2suc2V0QXR0cmlidXRlKCdkYXRhLXRhc2snLCB0YXNrTmFtZSk7XHJcblx0Ly8gXHRcdFx0Ly8gdGFzay5pZCA9IHRhc2tOYW1lO1xyXG5cclxuXHQvLyBcdFx0XHQvLyBsZXQgdGFza0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5cdC8vIFx0XHRcdC8vIHRhc2tJbWcuY2xhc3NMaXN0LmFkZCgnbGlzdC1pbWcnKTtcclxuXHQvLyBcdFx0XHQvLyB0YXNrSW1nLnNyYyA9ICcuLi9zcmMvaW1hZ2VzL3N2Zy9saXN0LnN2Zyc7XHJcblx0Ly8gXHRcdFx0Ly8gdGFza0ltZy5hbHQgPSAnbGlzdCc7XHJcblxyXG5cdC8vIFx0XHRcdC8vIGxldCBkZWxldGVUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblx0Ly8gXHRcdFx0Ly8gZGVsZXRlVGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGVUYXNrQnRuJyk7XHJcblxyXG5cdC8vIFx0XHRcdC8vIHRhc2suYXBwZW5kQ2hpbGQodGFza0ltZyk7XHJcblx0Ly8gXHRcdFx0Ly8gdGFzay5hcHBlbmRDaGlsZChkZWxldGVUYXNrQnV0dG9uKTtcclxuXHQvLyBcdFx0XHQvLyB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0YXNrKTtcclxuXHQvLyBcdFx0XHRsZXQgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdC8vIFx0XHRcdHRhc2suY2xhc3NMaXN0LmFkZCgndGFzaycpO1xyXG5cdC8vIFx0XHRcdGxldCB0YXNrSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5cdC8vIFx0XHRcdHRhc2tJbnB1dC5pZCA9IHRhc2tOYW1lO1xyXG5cdC8vIFx0XHRcdHRhc2tJbnB1dC50eXBlID0gJ2NoZWNrYm94JztcclxuXHQvLyBcdFx0XHR0YXNrSW5wdXQubmFtZSA9IHRhc2tOYW1lO1xyXG5cdC8vIFx0XHRcdHRhc2tJbnB1dC52YWx1ZSA9IHRhc2tOYW1lO1xyXG5cdC8vIFx0XHRcdHRhc2tJbnB1dC5jbGFzc0xpc3QuYWRkKCd0YXNrLWlucHV0Jyk7XHJcblx0XHRcdFx0XHJcblx0Ly8gXHRcdFx0bGV0IHRhc2tMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcblx0Ly8gXHRcdFx0dGFza0xhYmVsLmNsYXNzTGlzdC5hZGQoJ3Rhc2stbGFiZWwnKTtcclxuXHQvLyBcdFx0XHR0YXNrTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCB0YXNrTmFtZSk7XHJcblx0Ly8gXHRcdFx0dGFza0xhYmVsLmlubmVyVGV4dCA9IHRhc2tOYW1lO1xyXG5cdC8vIFx0XHRcdHRhc2tMYWJlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFzaycsIHRhc2tOYW1lKTtcclxuXHJcblx0Ly8gXHRcdFx0dGFzay5hcHBlbmQodGFza0lucHV0LCB0YXNrTGFiZWwpO1xyXG5cclxuXHQvLyBcdFx0XHQvL2FkZCBlYWNoIHRhc2sgdG8gYXJyYXlcclxuXHQvLyBcdFx0XHRsZXQgdGFza0FycmF5ID0gW107XHJcblx0Ly8gXHRcdFx0dGFza0FycmF5LnB1c2godGFzayk7XHJcblxyXG5cclxuXHJcblx0Ly8gXHRcdH1cclxuXHJcblxyXG5cdC8vIFx0fVxyXG5cdFx0XHJcblx0Ly8gfSk7XHJcblxyXG5cclxuXHJcblx0Ly9hZGQgdGFza3MgdG8gZGVmYXVsdCBwcm9qZWN0XHJcblxyXG5cdFxyXG5cclxuXHQvLyAvL2NoZWNrIGlmIHRhc2sgaXMgY2hlY2tlZCBjaGFuZ2UgaXQgaW4gbG9jYWwgc3RvcmFnZVxyXG5cdC8vIGxldCBjaGVja2JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyk7XHJcblx0Ly8gY2hlY2tib3hlcy5mb3JFYWNoKGNoZWNrYm94ID0+IHtcclxuXHQvLyBcdGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdC8vIFx0XHRsZXQgcHJvamVjdCA9IGNoZWNrYm94LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QnKTtcclxuXHQvLyBcdFx0bGV0IHRhc2sgPSBjaGVja2JveC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRhc2snKTtcclxuXHQvLyBcdFx0bGV0IGNoZWNrZWQgPSBjaGVja2JveC5jaGVja2VkO1xyXG5cdC8vIFx0XHRsZXQgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkZWZhdWx0UHJvamVjdHMnKSk7XHJcblx0Ly8gXHRcdHByb2plY3RzW3Byb2plY3RdW3Rhc2tdWydjaGVja2VkJ10gPSBjaGVja2VkO1xyXG5cdC8vIFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGVmYXVsdFByb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcclxuXHQvLyBcdFx0Y29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGVmYXVsdFByb2plY3RzJykpKTtcclxuXHQvLyBcdH0pO1xyXG5cdC8vIH1cclxuXHJcblxyXG5cclxuXHQvLyBjcmVhdGUgYW4gSUlGZSB0byBjcmVhdGUgdGFza3NcclxuXHJcblx0Y29uc3QgdGFzayA9ICgoKSA9PiB7XHJcblxyXG5cclxuXHRcdC8vY3JlYXRlIG5ldyB0YXNrIHVzaW5nIHRhc2tJbnB1dCBhbmQgYWRkIGl0IHRvIHRoZSBzZWxlY3RlZCBwcm9qZWN0IGFuZCBhZGQgaXQgdG8gbG9jYWwgc3RvcmFnZVxyXG5cdFx0Y29uc3QgY3JlYXRlTmV3VGFzayA9ICh0YXNrTmFtZSkgPT4ge1xyXG5cdFx0XHRsZXQgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUtbGlzdCcpLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0Jyk7XHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKHByb2plY3QpO1xyXG5cclxuXHRcdFx0Y29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0XHR0YXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcclxuXHRcdFx0dGFzay5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFzaycsIHRhc2tOYW1lKTtcclxuXHRcdFx0dGFzay5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdC1uYW1lJywgcHJvamVjdCk7XHJcblx0XHRcdGNvbnN0IHRhc2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcblx0XHRcdHRhc2tJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcclxuXHRcdFx0dGFza0lucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCB0YXNrTmFtZSk7XHJcblx0XHRcdHRhc2tJbnB1dC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFzaycsIHRhc2tOYW1lKTtcclxuXHRcdFx0dGFza0lucHV0LmNsYXNzTGlzdC5hZGQoJ3Rhc2staW5wdXQnKTtcclxuXHRcdFx0Ly8gdGFza0lucHV0LmlkID0gdGFza05hbWU7XHJcblx0XHRcdGNvbnN0IHRhc2tMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcblx0XHRcdHRhc2tMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIHRhc2tOYW1lKTtcclxuXHRcdFx0dGFza0xhYmVsLmNsYXNzTGlzdC5hZGQoJ3Rhc2stbGFiZWwnKTtcclxuXHRcdFx0dGFza0xhYmVsLnNldEF0dHJpYnV0ZSgnZGF0YS1jb250ZW50JywgdGFza05hbWUpO1xyXG5cdFx0XHR0YXNrTGFiZWwuaW5uZXJUZXh0ID0gdGFza05hbWU7XHJcblxyXG5cdFx0XHR0YXNrLmFwcGVuZCh0YXNrSW5wdXQsIHRhc2tMYWJlbCk7XHJcblx0XHRcdHRhc2tzQ29udGFpbmVyLmFwcGVuZCh0YXNrKTtcclxuXHJcblx0XHRcdC8vYWRkIHRhc2sgdG8gbG9jYWwgc3RvcmFnZVxyXG5cdFx0XHRhZGRUYXNrKCk7XHJcblxyXG5cdFx0XHRcclxuXHRcdH1cclxuXHJcblx0XHQvLyBrZWVwIGFkZGluZyB0YXNrcyB0byBsb2NhbCBzdG9yYWdlXHJcblx0XHRjb25zdCBhZGRUYXNrID0gKCkgPT4ge1xyXG5cdFx0XHRsZXQgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUtbGlzdCcpLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0Jyk7XHJcblx0XHRcdGxldCB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2staW5wdXQnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFzaycpO1xyXG5cdFx0XHRsZXQgdGFza09iaiA9IHtcclxuXHRcdFx0XHR0YXNrOiB0YXNrLFxyXG5cdFx0XHR9O1xyXG5cdFx0XHRsZXQgdGFza1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KHRhc2tPYmopO1xyXG5cdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0LCB0YXNrU3RyaW5nKTtcclxuXHRcdFx0Y29uc29sZS5sb2cobG9jYWxTdG9yYWdlKVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGFwcGVuZCB0YXNrcyB0byB0aGUgc2VsZWN0ZWQgcHJvamVjdFxyXG5cclxuXHJcblxyXG5cclxuXHRcdC8vIGNvbnN0IGFkZFRhc2sgPSAoKSA9PiB7XHJcblx0XHQvLyBcdGxldCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZS1saXN0JykuZ2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QnKTtcclxuXHRcdC8vIFx0bGV0IHRhc2tOYW1lID0gdGFza0lucHV0LnZhbHVlO1xyXG5cdFx0Ly8gXHRsZXQgdGFza09iaiA9IHtcclxuXHRcdC8vIFx0XHR0YXNrTmFtZTogdGFza05hbWUsXHJcblx0XHQvLyBcdH07XHJcblx0XHQvLyBcdGxldCB0YXNrU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkodGFza09iaik7XHJcblx0XHQvLyBcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKHByb2plY3QsIHRhc2tTdHJpbmcpO1xyXG5cdFx0Ly8gXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1pbnB1dCcpLnZhbHVlID0gJyc7XHJcblx0XHQvLyBcdGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSk7XHJcblx0XHQvLyB9XHJcblx0XHRcclxuXHJcblxyXG5cclxuXHRcdC8vIGNvbnN0IGFkZFRhc2sgPSAoKSA9PiB7XHJcblx0XHQvLyBcdGxldCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUtbGlzdCcpLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0Jyk7XHJcblx0XHQvLyBcdGxldCB0YXNrTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWlucHV0JykuZ2V0QXR0cmlidXRlKCdkYXRhLXRhc2snKTtcclxuXHRcdC8vIFx0bGV0IHRhc2tPYmogPSB7XHJcblx0XHQvLyBcdFx0dGFza05hbWU6IHRhc2tOYW1lXHJcblx0XHQvLyBcdH07XHJcblx0XHQvLyBcdGxldCB0YXNrU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkodGFza09iaik7XHJcblx0XHQvLyBcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKHByb2plY3ROYW1lLCB0YXNrU3RyaW5nKTtcclxuXHRcdC8vIFx0Y29uc29sZS5sb2codGFza1N0cmluZyk7XHJcblx0XHQvLyBcdGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSk7XHJcblx0XHQvLyB9XHJcblxyXG5cclxuXHJcblx0XHJcblxyXG5cclxuXHJcblx0XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRjcmVhdGVOZXdUYXNrLFxyXG5cdH1cclxuXHJcblx0fSkoKTtcclxuXHJcblxyXG5cclxuXHJcblx0XHJcblx0XHJcblx0Ly9jcmVhdGUgbmV3IHRhc2sgdXNpbmcgdGFza0lucHV0IGFuZCBhZGQgaXQgdG8gdGhlIHNlbGVjdGVkIHByb2plY3RcclxuXHRuZXdUYXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0bGV0IHRhc2tOYW1lID0gdGFza0lucHV0LnZhbHVlO1xyXG5cdFx0Ly8gaWYgcHJvamVjdCBleGlzdHMgaW4gbG9jYWwgc3RvcmFnZSBvciBwcm9qZWN0IG5hbWUgaXMgZW1wdHksIGRvbid0IGFkZCBpdCBhZ2FpblxyXG5cdFx0aWYgKHRhc2tOYW1lICE9PSAnJykge1xyXG5cdFx0XHQvLyBpZiBwcm9qZWN0IGhhcyBhIGNsYXNzIG9mIGFjdGl2ZS1saXN0IHRoZW4gYWRkIHRhc2sgdG8gdGhhdCBwcm9qZWN0XHJcblx0XHRcdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlLWxpc3QnKSkge1xyXG5cdFx0XHRcdHRhc2suY3JlYXRlTmV3VGFzayh0YXNrTmFtZSk7XHJcblxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0dGFza0lucHV0LnZhbHVlID0gJyc7XHJcblx0fSk7XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVGFza3M7IiwiaW1wb3J0IERPTUludGVyZmFjZSBmcm9tICcuL0RPTUludGVyZmFjZS5qcyc7XHJcbi8vIGltcG9ydCByZW5kZXJQcm9qZWN0cyBmcm9tICcuL3JlbmRlclByb2plY3RzLmpzJztcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBET01JbnRlcmZhY2UpO1xyXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgcmVuZGVyUHJvamVjdHMpO1xyXG5cclxuXHJcbi8vIGNyZWF0ZSBkZWxldGUgcHJvamVjdHMgZnhuXHJcblxyXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KCkge1xyXG5cclxuXHQvL29uIHByZXNzaW5nIGJ1dHRvbiBkZWxldGUgcHJvamVjdFxyXG5cdFxyXG5cdC8vIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgZnVuY3Rpb24gKCBldmVudCApIHtcclxuXHQvLyBcdGlmKCBldmVudC50YXJnZXQuY2xhc3NOYW1lID09ICdkZWxldGVQcm9qZWN0QnRuJyApIHtcclxuXHJcblx0Ly8gXHRcdC8vZGVsZXRlIHByb2plY3QgZnJvbSBET01cclxuXHQvLyBcdFx0ZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XHJcblxyXG5cdC8vIFx0XHQvLyBkZWxldGUgcHJvamVjdCBmcm9tIGxvY2FsIHN0b3JhZ2VcclxuXHQvLyBcdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5wcm9qZWN0KTtcclxuXHJcblx0Ly8gXHRcdGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSk7XHJcblx0Ly8gXHR9O1xyXG5cdC8vIH0pO1xyXG5cclxuXHJcblx0XHJcblxyXG5cdC8vIGNyZWF0ZSBJSUZFIHRvIGRlbGV0ZSBwcm9qZWN0XHJcblxyXG5cdGNvbnN0IGRlbGV0ZUN1cnJlbnRQcm9qZWN0ID0gKCgpID0+IHtcclxuXHJcblx0XHQvL29uIHByZXNzaW5nIGJ1dHRvbiBkZWxldGUgcHJvamVjdFxyXG5cclxuXHRcdGNvbnN0IGRlbGV0ZVByb2plY3QgPSAoKSA9PiB7XHJcblxyXG5cdFx0ZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBmdW5jdGlvbiAoIGV2ZW50ICkge1xyXG5cdFx0XHRpZiggZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PSAnZGVsZXRlUHJvamVjdEJ0bicgKSB7XHJcblxyXG5cdFx0XHRcdC8vZGVsZXRlIHByb2plY3QgZnJvbSBET01cclxuXHRcdFx0XHRldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcclxuXHJcblx0XHRcdFx0Ly8gZGVsZXRlIHByb2plY3QgZnJvbSBsb2NhbCBzdG9yYWdlXHJcblx0XHRcdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5wcm9qZWN0KTtcclxuXHJcblx0XHRcdFx0Y29uc29sZS5sb2cobG9jYWxTdG9yYWdlKTtcclxuXHRcdFx0fTtcclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRkZWxldGVQcm9qZWN0LFxyXG5cdH1cclxuXHJcblx0fSkoKTtcclxuXHJcblx0ZGVsZXRlQ3VycmVudFByb2plY3QuZGVsZXRlUHJvamVjdCgpO1xyXG5cclxuXHJcblx0XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlbGV0ZVByb2plY3Q7IiwiaW1wb3J0IERPTUludGVyZmFjZSBmcm9tICcuL0RPTUludGVyZmFjZS5qcyc7XHJcbi8vIGltcG9ydCByZW5kZXJUYXNrcyBmcm9tICcuL3JlbmRlclRhc2tzLmpzJztcclxuaW1wb3J0IGNyZWF0ZVByb2plY3RzIGZyb20gJy4vY3JlYXRlUHJvamVjdHMuanMnO1xyXG4vLyBpbXBvcnQgZGVsZXRlUHJvamVjdHMgZnJvbSAnLi9kZWxldGVQcm9qZWN0cy5qcyc7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgRE9NSW50ZXJmYWNlKTtcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGNyZWF0ZVByb2plY3RzKTtcclxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGRlbGV0ZVByb2plY3RzKTtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdHMoKSB7XHJcblxyXG5cdC8vIHRhc2tzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG5cclxuXHJcblx0Ly8gLy8gY3JlYXRlIGRlZmF1bHQgcHJvamVjdHNcclxuXHJcblx0Ly8gbGV0IHlvdXR1YmVQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuXHQvLyB5b3V0dWJlUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdsaXN0LW5hbWUnLCAnYWN0aXZlLWxpc3QnKTtcclxuXHQvLyB5b3V0dWJlUHJvamVjdC5pZCA9ICd5b3V0dWJlJztcclxuXHQvLyB5b3V0dWJlUHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdCcsICdZb3V0dWJlJyk7XHJcblx0Ly8geW91dHViZVByb2plY3QuaW5uZXJIVE1MID0gYDxpbWcgY2xhc3M9XCJsaXN0LWltZ1wiIHNyYz1cIi4uL3NyYy9pbWFnZXMvc3ZnL2xpc3Quc3ZnXCIgYWx0PVwibGlzdFwiPmAgKyBgWW91dHViZWAgKyBgPGJ1dHRvbiBjbGFzcz1cImRlbGV0ZVByb2plY3RCdG5cIj5YPC9idXR0b24+YDtcclxuXHJcblx0Ly8gbGV0IHdvcmtQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuXHQvLyB3b3JrUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdsaXN0LW5hbWUnKTtcclxuXHQvLyB3b3JrUHJvamVjdC5pZCA9ICd3b3JrJztcclxuXHQvLyB3b3JrUHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdCcsICdXb3JrJyk7XHJcblx0Ly8gd29ya1Byb2plY3QuaW5uZXJIVE1MID0gYDxpbWcgY2xhc3M9XCJsaXN0LWltZ1wiIHNyYz1cIi4uL3NyYy9pbWFnZXMvc3ZnL2xpc3Quc3ZnXCIgYWx0PVwibGlzdFwiPmAgKyBgV29ya2AgKyBgPGJ1dHRvbiBjbGFzcz1cImRlbGV0ZVByb2plY3RCdG5cIj5YPC9idXR0b24+YDtcclxuXHJcblx0Ly8gbGV0IGdyb2NlcnlQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuXHQvLyBncm9jZXJ5UHJvamVjdC5jbGFzc0xpc3QuYWRkKCdsaXN0LW5hbWUnKTtcclxuXHQvLyBncm9jZXJ5UHJvamVjdC5pZCA9ICdncm9jZXJ5JztcclxuXHQvLyBncm9jZXJ5UHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdCcsICdHcm9jZXJ5Jyk7XHJcblx0Ly8gZ3JvY2VyeVByb2plY3QuaW5uZXJIVE1MID0gYDxpbWcgY2xhc3M9XCJsaXN0LWltZ1wiIHNyYz1cIi4uL3NyYy9pbWFnZXMvc3ZnL2xpc3Quc3ZnXCIgYWx0PVwibGlzdFwiPmAgKyBgR3JvY2VyeWAgKyBgPGJ1dHRvbiBjbGFzcz1cImRlbGV0ZVByb2plY3RCdG5cIj5YPC9idXR0b24+YDtcclxuXHJcblx0Ly8gcHJvamVjdHNDb250YWluZXIuYXBwZW5kKHlvdXR1YmVQcm9qZWN0LCB3b3JrUHJvamVjdCwgZ3JvY2VyeVByb2plY3QpO1xyXG5cclxuXHJcblx0Ly8gLy8gY3JlYXRlIGRlZmF1bHQgdGFza3NcclxuXHJcblx0Ly8gLy8gWW91dHViZVxyXG5cdC8vIGxldCB5b3V0dWJlUHJvamVjdFRhc2sxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0Ly8geW91dHViZVByb2plY3RUYXNrMS5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XHJcblx0Ly8gbGV0IHlvdXR1YmVQcm9qZWN0VGFzazFJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcblx0Ly8geW91dHViZVByb2plY3RUYXNrMUlucHV0LmlkID0gJ3Rhc2stMSc7XHJcblx0Ly8geW91dHViZVByb2plY3RUYXNrMUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xyXG5cdC8vIHlvdXR1YmVQcm9qZWN0VGFzazFJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGFzay0xJyk7XHJcblx0Ly8geW91dHViZVByb2plY3RUYXNrMUlucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAndGFzaycpO1xyXG5cclxuXHQvLyBsZXQgeW91dHViZVByb2plY3RUYXNrMUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuXHQvLyB5b3V0dWJlUHJvamVjdFRhc2sxTGFiZWwuY2xhc3NMaXN0LmFkZCgneW91dHViZS10YXNrLWxhYmVsJyk7XHJcblx0Ly8geW91dHViZVByb2plY3RUYXNrMUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Rhc2stMScpO1xyXG5cdC8vIHlvdXR1YmVQcm9qZWN0VGFzazFMYWJlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29udGVudCcsICdSZWNvcmQgdG9kbyBsaXN0IHZpZGVvIHRoYXQgaXMgbG9uZycpO1xyXG5cdC8vIHlvdXR1YmVQcm9qZWN0VGFzazFMYWJlbC5pbm5lclRleHQgPSAnUmVjb3JkIHRvZG8gbGlzdCB2aWRlbyB0aGF0IGlzIGxvbmcnO1xyXG5cclxuXHQvLyB5b3V0dWJlUHJvamVjdFRhc2sxLmFwcGVuZCh5b3V0dWJlUHJvamVjdFRhc2sxSW5wdXQsIHlvdXR1YmVQcm9qZWN0VGFzazFMYWJlbCk7XHJcblxyXG5cclxuXHQvLyBsZXQgeW91dHViZVByb2plY3RUYXNrMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdC8vIHlvdXR1YmVQcm9qZWN0VGFzazIuY2xhc3NMaXN0LmFkZCgndGFzaycpO1xyXG5cdC8vIGxldCB5b3V0dWJlUHJvamVjdFRhc2sySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5cdC8vIHlvdXR1YmVQcm9qZWN0VGFzazJJbnB1dC5pZCA9ICd0YXNrLTInO1xyXG5cdC8vIHlvdXR1YmVQcm9qZWN0VGFzazJJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcclxuXHQvLyB5b3V0dWJlUHJvamVjdFRhc2sySW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3Rhc2stMicpO1xyXG5cdC8vIHlvdXR1YmVQcm9qZWN0VGFzazJJbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ3Rhc2snKTtcclxuXHJcblx0Ly8gbGV0IHlvdXR1YmVQcm9qZWN0VGFzazJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcblx0Ly8geW91dHViZVByb2plY3RUYXNrMkxhYmVsLmNsYXNzTGlzdC5hZGQoJ3lvdXR1YmUtdGFzay1sYWJlbCcpO1xyXG5cdC8vIHlvdXR1YmVQcm9qZWN0VGFzazJMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0YXNrLTInKTtcclxuXHQvLyB5b3V0dWJlUHJvamVjdFRhc2syTGFiZWwuc2V0QXR0cmlidXRlKCdkYXRhLWNvbnRlbnQnLCAnU3Vic2NyaWJlIHRvIHlvdXR1YmUgY2hhbm5lbCcpO1xyXG5cdC8vIHlvdXR1YmVQcm9qZWN0VGFzazJMYWJlbC5pbm5lclRleHQgPSAnU3Vic2NyaWJlIHRvIHlvdXR1YmUgY2hhbm5lbCc7XHJcblxyXG5cdC8vIHlvdXR1YmVQcm9qZWN0VGFzazIuYXBwZW5kKHlvdXR1YmVQcm9qZWN0VGFzazJJbnB1dCwgeW91dHViZVByb2plY3RUYXNrMkxhYmVsKTtcclxuXHJcblxyXG5cdC8vIGxldCB5b3V0dWJlUHJvamVjdFRhc2szID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0Ly8geW91dHViZVByb2plY3RUYXNrMy5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XHJcblx0Ly8gbGV0IHlvdXR1YmVQcm9qZWN0VGFzazNJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcblx0Ly8geW91dHViZVByb2plY3RUYXNrM0lucHV0LmlkID0gJ3Rhc2stMyc7XHJcblx0Ly8geW91dHViZVByb2plY3RUYXNrM0lucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xyXG5cdC8vIHlvdXR1YmVQcm9qZWN0VGFzazNJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGFzay0zJyk7XHJcblx0Ly8geW91dHViZVByb2plY3RUYXNrM0lucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAndGFzaycpO1xyXG5cclxuXHQvLyBsZXQgeW91dHViZVByb2plY3RUYXNrM0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuXHQvLyB5b3V0dWJlUHJvamVjdFRhc2szTGFiZWwuY2xhc3NMaXN0LmFkZCgneW91dHViZS10YXNrLWxhYmVsJyk7XHJcblx0Ly8geW91dHViZVByb2plY3RUYXNrM0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Rhc2stMycpO1xyXG5cdC8vIHlvdXR1YmVQcm9qZWN0VGFzazNMYWJlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29udGVudCcsICdMaWtlIFZpZGVvJyk7XHJcblx0Ly8geW91dHViZVByb2plY3RUYXNrM0xhYmVsLmlubmVyVGV4dCA9ICdMaWtlIFZpZGVvJztcclxuXHJcblx0Ly8geW91dHViZVByb2plY3RUYXNrMy5hcHBlbmQoeW91dHViZVByb2plY3RUYXNrM0lucHV0LCB5b3V0dWJlUHJvamVjdFRhc2szTGFiZWwpO1xyXG5cclxuXHJcblxyXG5cdC8vIC8vIFdvcmtcclxuXHQvLyBsZXQgd29ya1Byb2plY3RUYXNrMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdC8vIHdvcmtQcm9qZWN0VGFzazEuY2xhc3NMaXN0LmFkZCgndGFzaycpO1xyXG5cdC8vIGxldCB3b3JrUHJvamVjdFRhc2sxSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5cdC8vIHdvcmtQcm9qZWN0VGFzazFJbnB1dC5pZCA9ICd0YXNrLTQnO1xyXG5cdC8vIHdvcmtQcm9qZWN0VGFzazFJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcclxuXHQvLyB3b3JrUHJvamVjdFRhc2sxSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3Rhc2stNCcpO1xyXG5cdC8vIHdvcmtQcm9qZWN0VGFzazFJbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ3Rhc2snKTtcclxuXHJcblx0Ly8gbGV0IHdvcmtQcm9qZWN0VGFzazFMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcblx0Ly8gd29ya1Byb2plY3RUYXNrMUxhYmVsLmNsYXNzTGlzdC5hZGQoJ3dvcmstdGFzay1sYWJlbCcpO1xyXG5cdC8vIHdvcmtQcm9qZWN0VGFzazFMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0YXNrLTQnKTtcclxuXHQvLyB3b3JrUHJvamVjdFRhc2sxTGFiZWwuc2V0QXR0cmlidXRlKCdkYXRhLWNvbnRlbnQnLCAnQ3JlYXRlIGEgbmV3IHByb2plY3QnKTtcclxuXHQvLyB3b3JrUHJvamVjdFRhc2sxTGFiZWwuaW5uZXJUZXh0ID0gJ0NyZWF0ZSBhIG5ldyBwcm9qZWN0JztcclxuXHJcblx0Ly8gd29ya1Byb2plY3RUYXNrMS5hcHBlbmQod29ya1Byb2plY3RUYXNrMUlucHV0LCB3b3JrUHJvamVjdFRhc2sxTGFiZWwpO1xyXG5cclxuXHJcblx0Ly8gbGV0IHdvcmtQcm9qZWN0VGFzazIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHQvLyB3b3JrUHJvamVjdFRhc2syLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcclxuXHQvLyBsZXQgd29ya1Byb2plY3RUYXNrMklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuXHQvLyB3b3JrUHJvamVjdFRhc2sySW5wdXQuaWQgPSAndGFzay01JztcclxuXHQvLyB3b3JrUHJvamVjdFRhc2sySW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XHJcblx0Ly8gd29ya1Byb2plY3RUYXNrMklucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICd0YXNrLTUnKTtcclxuXHQvLyB3b3JrUHJvamVjdFRhc2sySW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsICd0YXNrJyk7XHJcblxyXG5cdC8vIGxldCB3b3JrUHJvamVjdFRhc2syTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG5cdC8vIHdvcmtQcm9qZWN0VGFzazJMYWJlbC5jbGFzc0xpc3QuYWRkKCd3b3JrLXRhc2stbGFiZWwnKTtcclxuXHQvLyB3b3JrUHJvamVjdFRhc2syTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndGFzay01Jyk7XHJcblx0Ly8gd29ya1Byb2plY3RUYXNrMkxhYmVsLnNldEF0dHJpYnV0ZSgnZGF0YS1jb250ZW50JywgJ0NoZWNrIEVtYWlsJyk7XHJcblx0Ly8gd29ya1Byb2plY3RUYXNrMkxhYmVsLmlubmVyVGV4dCA9ICdDaGVjayBFbWFpbCc7XHJcblxyXG5cdC8vIHdvcmtQcm9qZWN0VGFzazIuYXBwZW5kKHdvcmtQcm9qZWN0VGFzazJJbnB1dCwgd29ya1Byb2plY3RUYXNrMkxhYmVsKTtcclxuXHJcblxyXG5cdC8vIGxldCB3b3JrUHJvamVjdFRhc2szID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0Ly8gd29ya1Byb2plY3RUYXNrMy5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XHJcblx0Ly8gbGV0IHdvcmtQcm9qZWN0VGFzazNJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcblx0Ly8gd29ya1Byb2plY3RUYXNrM0lucHV0LmlkID0gJ3Rhc2stNic7XHJcblx0Ly8gd29ya1Byb2plY3RUYXNrM0lucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xyXG5cdC8vIHdvcmtQcm9qZWN0VGFzazNJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGFzay02Jyk7XHJcblx0Ly8gd29ya1Byb2plY3RUYXNrM0lucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAndGFzaycpO1xyXG5cclxuXHQvLyBsZXQgd29ya1Byb2plY3RUYXNrM0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuXHQvLyB3b3JrUHJvamVjdFRhc2szTGFiZWwuY2xhc3NMaXN0LmFkZCgnd29yay10YXNrLWxhYmVsJyk7XHJcblx0Ly8gd29ya1Byb2plY3RUYXNrM0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Rhc2stNicpO1xyXG5cdC8vIHdvcmtQcm9qZWN0VGFzazNMYWJlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29udGVudCcsICdDYWxsIEpvaG4gRG9lJyk7XHJcblx0Ly8gd29ya1Byb2plY3RUYXNrM0xhYmVsLmlubmVyVGV4dCA9ICdDYWxsIEpvaG4gRG9lJztcclxuXHJcblx0Ly8gd29ya1Byb2plY3RUYXNrMy5hcHBlbmQod29ya1Byb2plY3RUYXNrM0lucHV0LCB3b3JrUHJvamVjdFRhc2szTGFiZWwpO1xyXG5cclxuXHJcblx0Ly8gLy8gR3JvY2VyeVxyXG5cdC8vIGxldCBncm9jZXJ5UHJvamVjdFRhc2sxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0Ly8gZ3JvY2VyeVByb2plY3RUYXNrMS5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XHJcblx0Ly8gbGV0IGdyb2NlcnlQcm9qZWN0VGFzazFJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcblx0Ly8gZ3JvY2VyeVByb2plY3RUYXNrMUlucHV0LmlkID0gJ3Rhc2stNyc7XHJcblx0Ly8gZ3JvY2VyeVByb2plY3RUYXNrMUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xyXG5cdC8vIGdyb2NlcnlQcm9qZWN0VGFzazFJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGFzay03Jyk7XHJcblx0Ly8gZ3JvY2VyeVByb2plY3RUYXNrMUlucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAndGFzaycpO1xyXG5cclxuXHQvLyBsZXQgZ3JvY2VyeVByb2plY3RUYXNrMUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuXHQvLyBncm9jZXJ5UHJvamVjdFRhc2sxTGFiZWwuY2xhc3NMaXN0LmFkZCgnZ3JvY2VyeS10YXNrLWxhYmVsJyk7XHJcblx0Ly8gZ3JvY2VyeVByb2plY3RUYXNrMUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Rhc2stNycpO1xyXG5cdC8vIGdyb2NlcnlQcm9qZWN0VGFzazFMYWJlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29udGVudCcsICdCdXkgbWlsaycpO1xyXG5cdC8vIGdyb2NlcnlQcm9qZWN0VGFzazFMYWJlbC5pbm5lclRleHQgPSAnQnV5IG1pbGsnO1xyXG5cclxuXHQvLyBncm9jZXJ5UHJvamVjdFRhc2sxLmFwcGVuZChncm9jZXJ5UHJvamVjdFRhc2sxSW5wdXQsIGdyb2NlcnlQcm9qZWN0VGFzazFMYWJlbCk7XHJcblxyXG5cclxuXHQvLyBsZXQgZ3JvY2VyeVByb2plY3RUYXNrMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdC8vIGdyb2NlcnlQcm9qZWN0VGFzazIuY2xhc3NMaXN0LmFkZCgndGFzaycpO1xyXG5cdC8vIGxldCBncm9jZXJ5UHJvamVjdFRhc2sySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5cdC8vIGdyb2NlcnlQcm9qZWN0VGFzazJJbnB1dC5pZCA9ICd0YXNrLTgnO1xyXG5cdC8vIGdyb2NlcnlQcm9qZWN0VGFzazJJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcclxuXHQvLyBncm9jZXJ5UHJvamVjdFRhc2sySW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3Rhc2stOCcpO1xyXG5cdC8vIGdyb2NlcnlQcm9qZWN0VGFzazJJbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ3Rhc2snKTtcclxuXHJcblx0Ly8gbGV0IGdyb2NlcnlQcm9qZWN0VGFzazJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcblx0Ly8gZ3JvY2VyeVByb2plY3RUYXNrMkxhYmVsLmNsYXNzTGlzdC5hZGQoJ2dyb2NlcnktdGFzay1sYWJlbCcpO1xyXG5cdC8vIGdyb2NlcnlQcm9qZWN0VGFzazJMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0YXNrLTgnKTtcclxuXHQvLyBncm9jZXJ5UHJvamVjdFRhc2syTGFiZWwuc2V0QXR0cmlidXRlKCdkYXRhLWNvbnRlbnQnLCAnQnV5IGJyZWFkJyk7XHJcblx0Ly8gZ3JvY2VyeVByb2plY3RUYXNrMkxhYmVsLmlubmVyVGV4dCA9ICdCdXkgYnJlYWQnO1xyXG5cclxuXHQvLyBncm9jZXJ5UHJvamVjdFRhc2syLmFwcGVuZChncm9jZXJ5UHJvamVjdFRhc2sySW5wdXQsIGdyb2NlcnlQcm9qZWN0VGFzazJMYWJlbCk7XHJcblxyXG5cclxuXHQvLyBsZXQgZ3JvY2VyeVByb2plY3RUYXNrMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdC8vIGdyb2NlcnlQcm9qZWN0VGFzazMuY2xhc3NMaXN0LmFkZCgndGFzaycpO1xyXG5cdC8vIGxldCBncm9jZXJ5UHJvamVjdFRhc2szSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5cdC8vIGdyb2NlcnlQcm9qZWN0VGFzazNJbnB1dC5pZCA9ICd0YXNrLTknO1xyXG5cdC8vIGdyb2NlcnlQcm9qZWN0VGFzazNJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcclxuXHQvLyBncm9jZXJ5UHJvamVjdFRhc2szSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3Rhc2stOScpO1xyXG5cdC8vIGdyb2NlcnlQcm9qZWN0VGFzazNJbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ3Rhc2snKTtcclxuXHJcblx0Ly8gbGV0IGdyb2NlcnlQcm9qZWN0VGFzazNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcblx0Ly8gZ3JvY2VyeVByb2plY3RUYXNrM0xhYmVsLmNsYXNzTGlzdC5hZGQoJ2dyb2NlcnktdGFzay1sYWJlbCcpO1xyXG5cdC8vIGdyb2NlcnlQcm9qZWN0VGFzazNMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0YXNrLTknKTtcclxuXHQvLyBncm9jZXJ5UHJvamVjdFRhc2szTGFiZWwuc2V0QXR0cmlidXRlKCdkYXRhLWNvbnRlbnQnLCAnQnV5IGVnZ3MnKTtcclxuXHQvLyBncm9jZXJ5UHJvamVjdFRhc2szTGFiZWwuaW5uZXJUZXh0ID0gJ0J1eSBlZ2dzJztcclxuXHJcblx0Ly8gZ3JvY2VyeVByb2plY3RUYXNrMy5hcHBlbmQoZ3JvY2VyeVByb2plY3RUYXNrM0lucHV0LCBncm9jZXJ5UHJvamVjdFRhc2szTGFiZWwpO1xyXG5cclxuXHJcblx0Ly8gdGFza3NDb250YWluZXIuYXBwZW5kKHlvdXR1YmVQcm9qZWN0VGFzazEsIHlvdXR1YmVQcm9qZWN0VGFzazIsIHlvdXR1YmVQcm9qZWN0VGFzazMpO1xyXG5cdC8vIHByb2plY3RUaXRsZS5hcHBlbmQoeW91dHViZVByb2plY3QuZ2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QnKSk7XHJcblxyXG5cclxuXHJcblx0XHJcblxyXG5cclxuXHJcblxyXG5cdC8vIC8vIGNoZWNrIGlmIHRhc2tzIGFyZSBjaGVja2VkIGFuZCBhZGQgY2xhc3MgdG8gbGFiZWxcclxuXHQvLyBsZXQgYWxsVGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzaycpO1xyXG5cdC8vIGZvciAobGV0IHRhc2sgb2YgYWxsVGFza3MpIHtcclxuXHRcdFxyXG5cdC8vIFx0bGV0IHRhc2tJbnB1dCA9IHRhc2sucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcclxuXHQvLyBcdGNvbnNvbGUubG9nKHRhc2tJbnB1dC5jaGVja2VkKTtcclxuXHQvLyBcdC8vIGlmKHRhc2tJbnB1dC5jaGVja2VkKSB7XHJcblx0Ly8gXHQvLyBcdHRhc2sucXVlcnlTZWxlY3RvcignbGFiZWwnKS5jbGFzc0xpc3QudG9nZ2xlKCdjaGVja2VkJyk7XHJcblx0Ly8gXHQvLyB9XHJcblx0Ly8gfVxyXG5cdFxyXG5cclxuXHJcblx0Ly8gbGV0IGRlZmF1bHRQcm9qZWN0cyA9IHtcclxuXHJcblxyXG5cdC8vIFx0eyd5b3V0dWJlJzogW3lvdXR1YmVQcm9qZWN0VGFzazFMYWJlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29udGVudCcpLCB5b3V0dWJlUHJvamVjdFRhc2syTGFiZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbnRlbnQnKSwgeW91dHViZVByb2plY3RUYXNrM0xhYmVsLmdldEF0dHJpYnV0ZSgnZGF0YS1jb250ZW50JyksIF0sXHJcblx0Ly8gXHQnd29yayc6IFt3b3JrUHJvamVjdFRhc2sxTGFiZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbnRlbnQnKSwgd29ya1Byb2plY3RUYXNrMkxhYmVsLmdldEF0dHJpYnV0ZSgnZGF0YS1jb250ZW50JyksIHdvcmtQcm9qZWN0VGFzazNMYWJlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29udGVudCcpXSxcclxuXHQvLyBcdCdncm9jZXJ5JzogW2dyb2NlcnlQcm9qZWN0VGFzazFMYWJlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29udGVudCcpLCBncm9jZXJ5UHJvamVjdFRhc2syTGFiZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbnRlbnQnKSwgZ3JvY2VyeVByb2plY3RUYXNrM0xhYmVsLmdldEF0dHJpYnV0ZSgnZGF0YS1jb250ZW50JyldXHJcblx0Ly8gfTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cdFxyXG5cclxuXHQvLyAvL3NlbGVjdCBwcm9qZWN0IGFuZCByZW5kZXIgaXRzIHRhc2tzXHJcblx0Ly8gZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBmdW5jdGlvbiAoIGV2ZW50ICkge1xyXG5cdC8vIFx0aWYoIGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT0gJ2xpc3QtbmFtZScgfHwgZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PSAnbGlzdC1uYW1lIGFjdGl2ZS1saXN0JyApIHtcclxuXHQvLyBcdFx0bGV0IGFsbFByb2plY3RzID0gcHJvamVjdHNDb250YWluZXIuY2hpbGRyZW47XHJcblx0Ly8gXHRcdGZvciAobGV0IHByb2plY3Qgb2YgYWxsUHJvamVjdHMpIHtcclxuXHQvLyBcdFx0XHRwcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1saXN0Jyk7XHJcblx0Ly8gXHRcdH1cclxuXHQvLyBcdFx0ZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZS1saXN0Jyk7XHJcblx0Ly8gXHRcdGxldCBwcm9qZWN0TmFtZSA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdCcpO1xyXG5cclxuXHQvLyBcdFx0Ly8gYWRkIGRlZmF1bHQgcHJvamVjdCB0byBsb2NhbCBzdG9yYWdlIHdpdGggbm9uZSBzZWxlY3RlZFxyXG5cclxuXHQvLyBcdFx0bGV0IGRlZmF1bHRQcm9qZWN0cyA9IHtcclxuXHQvLyBcdFx0XHQneW91dHViZSc6IHtcclxuXHQvLyBcdFx0XHRcdCd0YXNrLTEnOiB7XHJcblx0Ly8gXHRcdFx0XHRcdCdjaGVja2VkJzogZmFsc2UsXHJcblx0Ly8gXHRcdFx0XHRcdCdsYWJlbCc6J1JlY29yZCB0b2RvIGxpc3QgdmlkZW8gdGhhdCBpcyBsb25nJ1xyXG5cdC8vIFx0XHRcdFx0fSxcclxuXHQvLyBcdFx0XHRcdCd0YXNrLTInOiB7XHJcblx0Ly8gXHRcdFx0XHRcdCdjaGVja2VkJzogZmFsc2UsXHJcblx0Ly8gXHRcdFx0XHRcdCdsYWJlbCc6J1N1YnNjcmliZSB0byB5b3V0dWJlIGNoYW5uZWwnXHJcblx0Ly8gXHRcdFx0XHR9LFxyXG5cdC8vIFx0XHRcdFx0J3Rhc2stMyc6IHtcclxuXHQvLyBcdFx0XHRcdFx0J2NoZWNrZWQnOiBmYWxzZSxcclxuXHQvLyBcdFx0XHRcdFx0J2xhYmVsJzonTGlrZSBWaWRlbydcclxuXHQvLyBcdFx0XHRcdH1cclxuXHJcblx0Ly8gXHRcdFx0fSxcclxuXHQvLyBcdFx0XHQnd29yayc6IHtcclxuXHQvLyBcdFx0XHRcdCd0YXNrLTQnOiB7XHJcblx0Ly8gXHRcdFx0XHRcdCdjaGVja2VkJzogZmFsc2UsXHJcblx0Ly8gXHRcdFx0XHRcdCdsYWJlbCc6J0NyZWF0ZSBhIG5ldyBwcm9qZWN0J1xyXG5cdC8vIFx0XHRcdFx0fSxcclxuXHQvLyBcdFx0XHRcdCd0YXNrLTUnOiB7XHJcblx0Ly8gXHRcdFx0XHRcdCdjaGVja2VkJzogZmFsc2UsXHJcblx0Ly8gXHRcdFx0XHRcdCdsYWJlbCc6J0NoZWNrIEVtYWlsJ1xyXG5cdC8vIFx0XHRcdFx0fSxcclxuXHQvLyBcdFx0XHRcdCd0YXNrLTYnOiB7XHJcblx0Ly8gXHRcdFx0XHRcdCdjaGVja2VkJzogZmFsc2UsXHJcblx0Ly8gXHRcdFx0XHRcdCdsYWJlbCc6J0NhbGwgSm9obiBEb2UnXHJcblx0Ly8gXHRcdFx0XHR9XHJcblx0Ly8gXHRcdFx0fSxcclxuXHQvLyBcdFx0XHQnZ3JvY2VyeSc6IHtcclxuXHQvLyBcdFx0XHRcdCd0YXNrLTcnOiB7XHJcblx0Ly8gXHRcdFx0XHRcdCdjaGVja2VkJzogZmFsc2UsXHJcblx0Ly8gXHRcdFx0XHRcdCdsYWJlbCc6J0J1eSBtaWxrJ1xyXG5cdC8vIFx0XHRcdFx0fSxcclxuXHQvLyBcdFx0XHRcdCd0YXNrLTgnOiB7XHJcblx0Ly8gXHRcdFx0XHRcdCdjaGVja2VkJzogZmFsc2UsXHJcblx0Ly8gXHRcdFx0XHRcdCdsYWJlbCc6J0J1eSBicmVhZCdcclxuXHQvLyBcdFx0XHRcdH0sXHJcblx0Ly8gXHRcdFx0XHQndGFzay05Jzoge1xyXG5cdC8vIFx0XHRcdFx0XHQnY2hlY2tlZCc6IGZhbHNlLFxyXG5cdC8vIFx0XHRcdFx0XHQnbGFiZWwnOidCdXkgZWdncydcclxuXHQvLyBcdFx0XHRcdH1cclxuXHQvLyBcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFxyXG5cdC8vIFx0XHR9O1xyXG5cdC8vIFx0XHRjb25zb2xlLmxvZyhkZWZhdWx0UHJvamVjdHNbJ3lvdXR1YmUnXVsndGFzay0xJ11bJ2NoZWNrZWQnXSk7XHJcblxyXG5cclxuXHQvLyBcdFx0Ly8gcmVuZGVyIHRhc2tzIG9mIHNlbGVjdGVkIHByb2plY3RcclxuXHQvLyBcdFx0aWYocHJvamVjdE5hbWUgPT0gJ1lvdXR1YmUnKSB7XHJcblx0Ly8gXHRcdFx0dGFza3NDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcblx0Ly8gXHRcdFx0cHJvamVjdFRpdGxlLmlubmVySFRNTCA9ICcnO1xyXG5cdC8vIFx0XHRcdHRhc2tzQ29udGFpbmVyLmFwcGVuZCh5b3V0dWJlUHJvamVjdFRhc2sxLCB5b3V0dWJlUHJvamVjdFRhc2syLCB5b3V0dWJlUHJvamVjdFRhc2szKTtcclxuXHQvLyBcdFx0XHRwcm9qZWN0VGl0bGUuYXBwZW5kKHlvdXR1YmVQcm9qZWN0LmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0JykpO1xyXG5cclxuXHQvLyBcdFx0XHQvL2NoZWNrIGlmIHRhc2tzIGFyZSBjaGVja2VkIGFuZCBhZGQgY2xhc3MgdG8gbGFiZWxcclxuXHQvLyBcdFx0XHRsZXQgYWxsVGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzaycpO1xyXG5cdC8vIFx0XHRcdGZvciAobGV0IHRhc2sgb2YgYWxsVGFza3MpIHtcclxuXHRcdFx0XHRcdFxyXG5cdC8vIFx0XHRcdFx0bGV0IHRhc2tzSW5wdXQgPSB0YXNrLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XHJcblx0Ly8gXHRcdFx0XHRjb25zb2xlLmxvZyh0YXNrc0lucHV0LmNoZWNrZWQpO1xyXG5cdC8vIFx0XHRcdFx0aWYodGFza3NJbnB1dC5jaGVja2VkKSB7XHJcblx0Ly8gXHRcdFx0XHRcdHRhc2sucXVlcnlTZWxlY3RvcignbGFiZWwnKS5jbGFzc0xpc3QudG9nZ2xlKCdjaGVja2VkJyk7XHJcblx0Ly8gXHRcdFx0XHRcdC8vc3RvcmUgY2hlY2tlZCB0YXNrcyB0byBkZWZhdWx0UHJvamVjdHMgb2JqZWN0XHJcblx0XHRcdFx0XHRcdFxyXG5cdC8vIFx0XHRcdFx0XHRkZWZhdWx0UHJvamVjdHNbcHJvamVjdE5hbWVdW3Rhc2tzSW5wdXQuaWRdW2NoZWNrZWRdID0gdHJ1ZTtcclxuXHQvLyBcdFx0XHRcdFx0Y29uc29sZS5sb2coZGVmYXVsdFByb2plY3RzKTtcclxuXHJcblx0Ly8gXHRcdFx0XHR9XHJcblx0Ly8gXHRcdFx0fVxyXG5cclxuXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0XHJcblxyXG5cclxuXHJcblxyXG5cdC8vIFx0XHRcdC8vIC8vY2hlY2sgaWYgdGFzayBpcyBjaGVja2VkIGNoYW5nZSBpdCBpbiBsb2NhbCBzdG9yYWdlXHJcblx0Ly8gXHRcdFx0Ly8gbGV0IGNoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKTtcclxuXHQvLyBcdFx0XHQvLyBjaGVja2JveGVzLmZvckVhY2goY2hlY2tib3ggPT4ge1xyXG5cdC8vIFx0XHRcdC8vIFx0Y2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0Ly8gXHRcdFx0Ly8gXHRcdGxldCBwcm9qZWN0ID0gY2hlY2tib3gucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdCcpO1xyXG5cdC8vIFx0XHRcdC8vIFx0XHRsZXQgdGFzayA9IGNoZWNrYm94LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFzaycpO1xyXG5cdC8vIFx0XHRcdC8vIFx0XHRsZXQgY2hlY2tlZCA9IGNoZWNrYm94LmNoZWNrZWQ7XHJcblx0Ly8gXHRcdFx0Ly8gXHRcdGxldCBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RlZmF1bHRQcm9qZWN0cycpKTtcclxuXHQvLyBcdFx0XHQvLyBcdFx0Y29uc29sZS5sb2cocHJvamVjdHNbJ3lvdXR1YmUnXSk7XHJcblx0Ly8gXHRcdFx0Ly8gXHRcdHByb2plY3RzW3Byb2plY3RdW3Rhc2tdWydjaGVja2VkJ10gPSBjaGVja2VkO1xyXG5cdC8vIFx0XHRcdC8vIFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGVmYXVsdFByb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcclxuXHQvLyBcdFx0XHQvLyBcdFx0Y29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGVmYXVsdFByb2plY3RzJykpKTtcclxuXHQvLyBcdFx0XHQvLyBcdH0pO1xyXG5cdC8vIFx0XHRcdC8vIH0pO1xyXG5cclxuXHJcblxyXG5cdC8vIFx0XHR9IGVsc2UgaWYocHJvamVjdE5hbWUgPT0gJ1dvcmsnKSB7XHJcblx0Ly8gXHRcdFx0dGFza3NDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcblx0Ly8gXHRcdFx0cHJvamVjdFRpdGxlLmlubmVySFRNTCA9ICcnO1xyXG5cdC8vIFx0XHRcdHRhc2tzQ29udGFpbmVyLmFwcGVuZCh3b3JrUHJvamVjdFRhc2sxLCB3b3JrUHJvamVjdFRhc2syLCB3b3JrUHJvamVjdFRhc2szKTtcclxuXHQvLyBcdFx0XHRwcm9qZWN0VGl0bGUuYXBwZW5kKHdvcmtQcm9qZWN0LmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0JykpO1xyXG5cdC8vIFx0XHR9IGVsc2UgaWYocHJvamVjdE5hbWUgPT0gJ0dyb2NlcnknKSB7XHJcblx0Ly8gXHRcdFx0dGFza3NDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcblx0Ly8gXHRcdFx0cHJvamVjdFRpdGxlLmlubmVySFRNTCA9ICcnO1xyXG5cdC8vIFx0XHRcdHRhc2tzQ29udGFpbmVyLmFwcGVuZChncm9jZXJ5UHJvamVjdFRhc2sxLCBncm9jZXJ5UHJvamVjdFRhc2syLCBncm9jZXJ5UHJvamVjdFRhc2szKTtcclxuXHQvLyBcdFx0XHRwcm9qZWN0VGl0bGUuYXBwZW5kKGdyb2NlcnlQcm9qZWN0LmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0JykpO1xyXG5cclxuXHQvLyBcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcclxuXHQvLyBcdFx0XHR0YXNrc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuXHQvLyBcdFx0XHRwcm9qZWN0VGl0bGUuaW5uZXJIVE1MID0gJyc7XHJcblx0Ly8gXHRcdFx0cHJvamVjdFRpdGxlLmFwcGVuZChwcm9qZWN0TmFtZSk7XHJcblx0Ly8gXHRcdFx0Ly9pZiBhIHByb2plY3QgaGFzIG5vIHRhc2tzXHJcblx0Ly8gXHRcdFx0Ly8gdGFza3NDb250YWluZXIuaW5uZXJIVE1MID0gYDxkaXYgaWQ9XCJub1Rhc2tzXCIgY2xhc3M9XCJ0YXNrXCI+YCArIGBObyB0YXNrcyBmb3IgdGhpcyBwcm9qZWN0YCArIGA8L2Rpdj5gO1xyXG5cdC8vIFx0XHRcdC8vaWYgYSBwcm9qZWN0IGhhcyB0YXNrcyByZW5kZXIgdGhlbVxyXG5cclxuXHQvLyBcdFx0fVxyXG5cclxuXHRcdFx0XHRcclxuXHQvLyBcdC8vYWRkIGRlZmF1bHQgcHJvamVjdHMgdG8gbG9jYWwgc3RvcmFnZVxyXG5cdC8vIFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RlZmF1bHRQcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KGRlZmF1bHRQcm9qZWN0cykpO1xyXG5cdC8vIFx0Y29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGVmYXVsdFByb2plY3RzJykpKTtcclxuXHRcdFx0XHRcclxuXHJcblxyXG5cdC8vIFx0fTtcclxuXHQvLyB9KTtcclxuXHJcblxyXG5cdC8vIGNyZWF0ZSBhbiBJSUZlIHRvIHJlbmRlciBzZWxlY3RlZCBwcm9qZWN0IHRhc2tzXHJcblx0XHJcblx0Y29uc3QgcmVuZGVyQ3VycmVudFByb2plY3QgPSAoKCkgPT4ge1xyXG5cclxuXHRcdC8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGNyZWF0ZVByb2plY3RzKTtcclxuXHJcblx0XHQvLyB3aGVuIGEgcHJvamVjdCBpcyBjbGlja2VkIGFkZCBjbGFzcyB0byBpdCBhbmQgcmVtb3ZlIGl0IGZyb20gb3RoZXIgcHJvamVjdHNcclxuXHRcdGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9ICgpID0+IHtcclxuXHJcblx0XHRcdC8vdXNlIGV2ZW50IGRlbGVnYXRpb24gdG8gc2VsZWN0IHByb2plY3RcclxuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0XHRcdGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbGlzdC1uYW1lJykpIHtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0bGV0IGFsbFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpc3QtbmFtZScpO1xyXG5cdFx0XHRcdFx0Zm9yIChsZXQgcHJvamVjdCBvZiBhbGxQcm9qZWN0cykge1xyXG5cdFx0XHRcdFx0XHRpZiAocHJvamVjdCA9PSBlLnRhcmdldCkge1xyXG5cdFx0XHRcdFx0XHRcdHByb2plY3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLWxpc3QnKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRwcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1saXN0Jyk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdHByb2plY3RUaXRsZS5pbm5lclRleHQgPSBlLnRhcmdldC5pZDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHNob3dUYXNrcygpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHJcblx0XHR9XHJcblxyXG5cclxuXHRcdFxyXG5cclxuXHJcblx0XHQvLyAvL2NyZWF0ZSBuZXcgdGFzayB1c2luZyB0YXNrSW5wdXQgYW5kIGFkZCBpdCB0byB0aGUgc2VsZWN0ZWQgcHJvamVjdCBhbmQgYWRkIGl0IHRvIGxvY2FsIHN0b3JhZ2VcclxuXHRcdC8vIGNvbnN0IGNyZWF0ZU5ld1Rhc2sgPSAodGFza05hbWUpID0+IHtcclxuXHRcdC8vIFx0bGV0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlLWxpc3QnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdCcpO1xyXG5cdFx0Ly8gXHQvLyBjb25zb2xlLmxvZyhwcm9qZWN0KTtcclxuXHJcblx0XHQvLyBcdGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdC8vIFx0dGFzay5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XHJcblx0XHQvLyBcdHRhc2suc2V0QXR0cmlidXRlKCdkYXRhLXRhc2snLCB0YXNrTmFtZSk7XHJcblx0XHQvLyBcdHRhc2suc2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QtbmFtZScsIHByb2plY3QpO1xyXG5cdFx0Ly8gXHRjb25zdCB0YXNrSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5cdFx0Ly8gXHR0YXNrSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XHJcblx0XHQvLyBcdHRhc2tJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgdGFza05hbWUpO1xyXG5cdFx0Ly8gXHR0YXNrSW5wdXQuc2V0QXR0cmlidXRlKCdkYXRhLXRhc2snLCB0YXNrTmFtZSk7XHJcblx0XHQvLyBcdHRhc2tJbnB1dC5jbGFzc0xpc3QuYWRkKCd0YXNrLWlucHV0Jyk7XHJcblx0XHQvLyBcdC8vIHRhc2tJbnB1dC5pZCA9IHRhc2tOYW1lO1xyXG5cdFx0Ly8gXHRjb25zdCB0YXNrTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG5cdFx0Ly8gXHR0YXNrTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCB0YXNrTmFtZSk7XHJcblx0XHQvLyBcdHRhc2tMYWJlbC5jbGFzc0xpc3QuYWRkKCd0YXNrLWxhYmVsJyk7XHJcblx0XHQvLyBcdHRhc2tMYWJlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29udGVudCcsIHRhc2tOYW1lKTtcclxuXHRcdC8vIFx0dGFza0xhYmVsLmlubmVyVGV4dCA9IHRhc2tOYW1lO1xyXG5cclxuXHRcdC8vIFx0dGFzay5hcHBlbmQodGFza0lucHV0LCB0YXNrTGFiZWwpO1xyXG5cdFx0Ly8gXHR0YXNrc0NvbnRhaW5lci5hcHBlbmQodGFzayk7XHJcblxyXG5cdFx0XHRcclxuXHRcdC8vIH1cclxuXHJcblx0XHQvL3doZW4gaSBjbGljayBvbiBhIHNob3cgdGFza3MgdGhhdCBoYWQgZGF0YS1wcm9qZWN0LW5hbWUgZXF1YWwgdG8gdGhlIHByb2plY3QgbmFtZVxyXG5cdFx0Y29uc3Qgc2hvd1Rhc2tzID0gKCkgPT4ge1xyXG5cclxuXHRcdFx0bGV0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlLWxpc3QnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdCcpO1xyXG5cdFx0XHRsZXQgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzaycpO1xyXG5cdFx0XHRmb3IgKGxldCB0YXNrIG9mIHRhc2tzKSB7XHJcblx0XHRcdFx0aWYgKHRhc2suZ2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QtbmFtZScpID09PSBwcm9qZWN0KSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHRhc2suc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRhc2suc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdH1cclxuXHRcclxuXHRcdH1cclxuXHRcdFxyXG5cdHJldHVybiB7XHJcblx0XHRzZWxlY3RlZFByb2plY3QsXHJcblx0XHQvLyBjcmVhdGVOZXdUYXNrLFxyXG5cdFx0c2hvd1Rhc2tzXHJcblx0fVxyXG5cclxuXHR9KSgpO1xyXG5cclxuXHRyZW5kZXJDdXJyZW50UHJvamVjdC5zZWxlY3RlZFByb2plY3QoKTtcclxuXHJcblxyXG5cclxuXHQvLyAvL2NyZWF0ZSBuZXcgdGFzayB1c2luZyB0YXNrSW5wdXQgYW5kIGFkZCBpdCB0byB0aGUgc2VsZWN0ZWQgcHJvamVjdFxyXG5cdC8vIG5ld1Rhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcblx0Ly8gXHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0Ly8gXHRsZXQgdGFza05hbWUgPSB0YXNrSW5wdXQudmFsdWU7XHJcblx0Ly8gXHQvLyBpZiBwcm9qZWN0IGV4aXN0cyBpbiBsb2NhbCBzdG9yYWdlIG9yIHByb2plY3QgbmFtZSBpcyBlbXB0eSwgZG9uJ3QgYWRkIGl0IGFnYWluXHJcblx0Ly8gXHRpZiAodGFza05hbWUgIT09ICcnKSB7XHJcblx0Ly8gXHRcdC8vIGlmIHByb2plY3QgaGFzIGEgY2xhc3Mgb2YgYWN0aXZlLWxpc3QgdGhlbiBhZGQgdGFzayB0byB0aGF0IHByb2plY3RcclxuXHQvLyBcdFx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUtbGlzdCcpKSB7XHJcblx0Ly8gXHRcdFx0cmVuZGVyQ3VycmVudFByb2plY3QuY3JlYXRlTmV3VGFzayh0YXNrTmFtZSk7XHJcblxyXG5cdC8vIFx0XHR9XHJcblx0Ly8gXHR9XHJcblxyXG5cdC8vIFx0dGFza0lucHV0LnZhbHVlID0gJyc7XHJcblx0Ly8gfSk7XHJcblx0XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHRcclxuXHJcblxyXG5cclxuXHRcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyUHJvamVjdHM7IiwiaW1wb3J0IERPTUludGVyZmFjZSBmcm9tICcuL0RPTUludGVyZmFjZS5qcyc7XHJcbi8vIGltcG9ydCBjcmVhdGVQcm9qZWN0cyBmcm9tICcuL2NyZWF0ZVByb2plY3RzLmpzJztcclxuLy8gaW1wb3J0IGRlbGV0ZVByb2plY3RzIGZyb20gJy4vZGVsZXRlUHJvamVjdHMuanMnO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIERPTUludGVyZmFjZSk7XHJcbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBjcmVhdGVQcm9qZWN0cyk7XHJcbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBkZWxldGVQcm9qZWN0cyk7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclRhc2tzKCkge1xyXG5cclxuXHQvLyAvLyByZW5kZXIgdGFza3MgZnJvbSBsb2NhbCBzdG9yYWdlIHdoZW4gcHJvamVjdCBpcyBzZWxlY3RlZFxyXG5cdC8vIGxldCBwcm9qZWN0cyA9IE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSk7XHJcblx0Ly8gcHJvamVjdHMuZm9yRWFjaChmdW5jdGlvbihwcm9qZWN0KSB7fVxyXG5cdFxyXG5cdFxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyVGFza3M7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vc3R5bGUvc3R5bGVzLmNzcyc7XHJcbmltcG9ydCBET01JbnRlcmZhY2UgZnJvbSAnLi9ET01JbnRlcmZhY2UuanMnO1xyXG5pbXBvcnQgY3JlYXRlUHJvamVjdHMgZnJvbSAnLi9jcmVhdGVQcm9qZWN0cy5qcyc7XHJcbmltcG9ydCBkZWxldGVQcm9qZWN0cyBmcm9tICcuL2RlbGV0ZVByb2plY3RzLmpzJztcclxuaW1wb3J0IHJlbmRlclByb2plY3RzIGZyb20gJy4vcmVuZGVyUHJvamVjdHMuanMnO1xyXG5pbXBvcnQgY3JlYXRlVGFza3MgZnJvbSAnLi9jcmVhdGVUYXNrcy5qcyc7XHJcblxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIERPTUludGVyZmFjZSk7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBjcmVhdGVQcm9qZWN0cyk7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBkZWxldGVQcm9qZWN0cyk7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCByZW5kZXJQcm9qZWN0cyk7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBjcmVhdGVUYXNrcyk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9