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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n\t--clr-primary: rgb(41, 145, 255);\r\n\t--clr-lightGray: rgb(232, 232, 232);\r\n\t--clr-light: #f4f4f4;\r\n\t--clr-dark: rgb(58, 58, 58);\r\n\t--clr-white: rgb(252, 252, 252);\r\n\t--clr-warning: #e97560;\r\n\t--clr-navHighlight: #4f7794d0;\r\n\t--clr-mineShaft: #232323;\r\n\t--clr-gallery: #ededed;\r\n\t--clr-elfGreen: #058179;\r\n\t--clr-nebula: #cbdbda;\r\n\t--clr-completedTask: #a5b1c0;\r\n\t--clr-delete: #ff494962;\r\n}\r\n\r\nhtml {\r\n\tfont-family: 'Source Sans Pro', sans-serif;\r\n\r\n}\r\n\r\nbody {\r\n\tpadding-bottom: 10%;\r\n\tmargin: 0;\r\n\tbackground: var(--clr-nebula);\r\n\tcolor: var(--clr-mineShaft);\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\t\r\n}\r\n\r\nh1 {\r\n\tcolor: var(--clr-dark);\r\n\tfont-size: 3rem;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-self: center;\r\n\talign-items: center;\r\n\tmargin: -0.5em 0.5em 0.5em 40.5%;\r\n\tz-index: 2;\r\n\tposition: absolute;\r\n}\r\n\r\n.hideH1 {\r\n\tdisplay: none;\r\n}\r\n\r\nh2 {\r\n\tmargin-bottom: 0px;\r\n}\r\n\r\n.hidden {\r\n\t\r\n\tdisplay: none\r\n}\r\n\r\n#container {\r\n\tmargin-right: -18%;\r\n\tmargin-top: 50px;\r\n\tpadding-left: 1%;\r\n\tdisplay: grid;\r\n\tjustify-content: space-around;\r\n\tgrid-template-columns: 1fr;\r\n\tgrid-template-rows: auto;\r\n\tgrid-template-areas: \r\n\t  \"projects\"\r\n\t  \"tasks\"\r\n\t  \"logo\";\r\n} \r\n\r\n#gitLogoDivContainer {\r\n\tgrid-area: logo;\r\n\tmargin-top: 30px;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-self: center;\r\n\talign-items: center;\r\n}\r\n\r\n.gitLogo {\r\n\twidth: 85px;\r\n\theight: 85px;\r\n}\r\n\r\n#navContainer {\r\n\t/* display: flex;\r\n\tflex-direction: column; */\r\n\tposition: relative;\r\n\tmargin-bottom: 10vw;\r\n\tgrid-area: projects;\r\n}\r\n\r\n#menuToggle {\r\n\tdisplay: block;\r\n\tposition: relative;\r\n\tmax-width: 50vw;\r\n\ttop: 50px;\r\n\tleft: 50px;\r\n\tz-index: 1;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n}\r\n\r\n#menuToggle li {\r\n\ttext-decoration: none;\r\n\t-webkit-transition: color 0.3s ease;\r\n\t-o-transition: color 0.3s ease;\r\n\ttransition: color 0.3s ease;\r\n\tpadding: 10px 0px 10px 50px;\r\n\tfont-size: 22px;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n\r\n#menuToggle li:hover {\r\n\tfont-weight: 700;\r\n}\r\n\r\n\r\n/* The hamburger button hidden inside an #inputMenu element */\r\n#menuToggle #inputMenu {\r\n\tdisplay: block;\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tposition: absolute;\r\n\ttop: -7px;\r\n\tleft: -5px;\r\n\tpadding: 0;\r\n\tcursor: pointer;\r\n\t\r\n\topacity: 0;\r\n\t/* hide this */\r\n\tz-index: 2;\r\n\t/* and place it over the hamburger */\r\n\t-webkit-touch-callout: none;\r\n}\r\n\r\n#menuToggle #labelMenu {\r\n\tposition: relative;\r\n\tdisplay: block;\r\n\twidth: 30px;\r\n\theight: 30px;\r\n}\r\n\r\n#menuToggle #labelMenu span {\r\n\tdisplay: none;\r\n}\r\n\r\n/*\r\n * Hamburger\r\n */\r\n#menuToggle #labelMenu div {\r\n\tdisplay: block;\r\n\twidth: 30px;\r\n\theight: 2px;\r\n\tmargin-bottom: 6px;\r\n\tposition: relative;\r\n\tbackground: var(--clr-elfGreen);\r\n\tborder-radius: 5px;\r\n\tz-index: 1;\r\n\t-webkit-transform-origin: 4px 0px;\r\n\t-ms-transform-origin: 4px 0px;\r\n\ttransform-origin: 4px 0px;\r\n\t-webkit-transition: all 0.3s ease;\r\n\t-o-transition: all 0.3s ease;\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n#menuToggle #labelMenu div:first-child {\r\n\t-webkit-transform-origin: 0% 100%;\r\n\t-ms-transform-origin: 0% 100%;\r\n\ttransform-origin: 0% 100%;\r\n}\r\n\r\n#menuToggle #labelMenu div:nth-child(2) {\r\n\t-webkit-transform-origin: 0% 0%;\r\n\t-ms-transform-origin: 0% 0%;\r\n\ttransform-origin: 0% 0%;\r\n}\r\n\r\n/* \r\n * Change the color of the hamburger when toggled\r\n */\r\n#menuToggle #inputMenu:checked+#labelMenu div {\r\n\tbackground: var(--clr-mineShaft);\r\n\t\r\n}\r\n\r\n/*\r\n * Use absolute positioning to place the menu off-screen\r\n */\r\n#menu {\r\n\tposition: relative;\r\n\twidth: 100vw;\r\n\tmax-width: 900px;\r\n\tmargin: -80px 0 0 -50px;\r\n\tpadding: 50px 0px 50px 0px;\r\n\tpadding-top: 125px;\r\n\tbackground: var(--clr-light);\r\n\tbox-shadow: \r\n\t\t\t\t0 2.8px 2.2px rgba(0, 0, 0, 0.034),\r\n\t\t\t\t0 6.7px 5.3px rgba(0, 0, 0, 0.048),\r\n\t\t\t\t0 12.5px 10px rgba(0, 0, 0, 0.06),\r\n\t\t\t\t0 22.3px 17.9px rgba(0, 0, 0, 0.072),\r\n\t\t\t\t0 41.8px 33.4px rgba(0, 0, 0, 0.086);\r\n\tborder-radius: 20px;\r\n\tlist-style-type: none;\r\n\t/* Hide the menu off-screen to the left */\r\n\tleft: 0;\r\n\t-webkit-transition: left 0.3s ease;\r\n\t-o-transition: left 0.3s ease;\r\n\ttransition: left 0.3s ease;\r\n}\r\n\r\n\r\n\r\n/*\r\n * Slide the menu in from left when the #inputMenu is checked\r\n */\r\n#menuToggle #inputMenu:checked~ul {\r\n\r\n\ttransition: left 0.3s ease;\r\n\tleft: -200%;\r\n}\r\n\r\n.list-name {\r\n\tcursor: pointer;\r\n}\r\n\r\n.list-img {\r\n\twidth: 1.7em;\r\n\tpadding-right: 10px;\r\n}\r\n\r\n.active-list {\r\n\tbackground-color: var(--clr-elfGreen);\r\n\tborder-radius: 35px;\r\n\tmargin: 0px 25px 0px 25px;\r\n\tcolor: var(--clr-light);\r\n}\r\n\r\n#myForm {\r\n\tdisplay: none;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tmargin-top: 1.8em;\r\n\ttransition: all 0.3s ease;\r\n\t\r\n}\r\n\r\n#myForm form, #myTasks form {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tfont-size: 1.3em;\r\n\tbackground-color: var(--clr-white);\r\n\tborder: 1px solid var(--clr-elfGreen);\r\n\twidth: 15em;\r\n\tpadding: 2em .6em 1.5em .6em;\r\n\tborder-radius: 20px;\r\n}\r\n\r\n#addProjectForm {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n}\r\n\r\n#addProjectButton {\r\n\tmargin-top: 30px;\r\n\tbackground-color: var(--clr-elfGreen);\r\n\tcolor: var(--clr-light);\r\n\tborder: none;\r\n\tborder-radius: 42px;\r\n\tfont-size: 1.4em;\r\n\tpadding: 2% 10% 2% 8%;\r\n\tfont-family: 'Source Sans Pro', sans-serif;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n#addProjectButton:hover {\r\n\tcolor: var(--clr-light);\r\n\topacity: 0.8;\r\n}\r\n\r\n#addProjectButton span {\r\n\tfont-size: 1.6em;\r\n\tfont-weight: 300;\r\n\tpadding: 0px 10px 0px 3px;\r\n\t\r\n}\r\n\r\n#submitBtn, #taskSubmitButton {\r\n \tfont-family: 'Source Sans Pro', sans-serif;\r\n \tbackground-color: var(--clr-elfGreen);\r\n \tcolor: var(--clr-light);\r\n \tborder: none;\r\n \tborder-radius: 32px;\r\n \tfont-size: 1em;\r\n \tpadding: 2% 30% 2% 30%;\r\n\t transition: all 0.3s ease;\r\n}\r\n\r\n#submitBtn:hover, #taskSubmitBtn:hover {\r\n\topacity: 0.8;\r\n}\r\n\r\n#projectLabel, #taskLabel {\r\n\tfont-size: 1.3em;\r\n\tfont-weight: 700;\r\n}\r\n\r\n#projectInput, #taskInput {\r\n\tfont-size: 0.8em;\r\n\tfont-weight: 400;\r\n\tfont-family: 'Source Sans Pro', sans-serif;\r\n\tborder-radius: 15px;\r\n\tpadding: 0px 15px 0px 15px;\r\n}\r\n\r\n.deleteProjectBtn {\r\n\tborder: 1px solid var(--clr-mineShaft);\r\n\tbackground: var(--clr-warning);\r\n\tborder-radius: 20px;\r\n\tpadding: 3px 7px 2px 7px;\r\n\tfont-size: 0.7em;\r\n\tdisplay: flex;\r\n\tmargin: 0.5% 2% 0 2%;\r\n\tcursor: pointer;\r\n\tfont-weight: 300;\r\n}\r\n\r\n#taskList {\r\n\tgrid-area: tasks;\r\n\t/* margin-bottom: 130vh; */\r\n\t/* margin-top: 50vh; */\r\n}\r\n\r\n.todo-list {\r\n\ttransition: all 0.3s ease;\r\n\tmargin-top: 5em;\r\n\tbackground: var(--clr-gallery);\r\n\tborder-radius: 20px;\r\n\twidth: 100vw;\r\n\tmax-width: 900px;\r\n\tpadding-top: 3%;\r\n\tpadding-bottom: 1%;\r\n\tbox-shadow: \r\n\t\t\t\t0 2.8px 2.2px rgba(0, 0, 0, 0.034),\r\n\t\t\t\t0 6.7px 5.3px rgba(0, 0, 0, 0.048),\r\n\t\t\t\t0 12.5px 10px rgba(0, 0, 0, 0.06),\r\n\t\t\t\t0 22.3px 17.9px rgba(0, 0, 0, 0.072),\r\n\t\t\t\t0 41.8px 33.4px rgba(0, 0, 0, 0.086),\r\n\t\t\t\t0 100px 80px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.addMarginAfterClick {\r\n\tmargin-top: 26vh;\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n.removeMarginAfterClick {\r\n\ttransform: translateY(-70%);\r\n\t/* margin-top: -10vh; */\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n\r\n.todo-header {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tbackground-color: var(--clr-light);\r\n\tborder: 1px solid var(--clr-elfGreen);\r\n\tborder-radius: 20px;\r\n\tmargin: 0% 5% 5% 5%;\r\n}\r\n\r\n.task-count {\r\n\tcolor: var(--clr-primary);\r\n}\r\n\r\n.todo-body {\r\n\tbackground-color: var(--clr-light);\r\n\tborder: 1px solid var(--clr-elfGreen);\r\n\tborder-radius: 20px;\r\n\tpadding: 5% 1% 0% 1%;\r\n\tmargin: 5%;\r\n}\r\n\r\n#myTasks {\r\n\tdisplay: none;\r\n}\r\n\r\n#addTaskButton {\r\n\tfont-family: 'Source Sans Pro', sans-serif;\r\n \tbackground-color: var(--clr-elfGreen);\r\n \tcolor: var(--clr-light);\r\n \tborder: none;\r\n \tborder-radius: 32px;\r\n \tfont-size: 1.1em;\r\n \tpadding: 2% 10% 2% 4%;\r\n\t display: flex;\r\n\t align-items: center;\r\n\t margin-bottom: 20px;\r\n\t transition: all 0.3s ease;\r\n}\r\n\r\n#addTaskButton:hover {\r\n\topacity: 0.8;\r\n}\r\n\r\n#addTaskButton span {\r\n\tfont-size: 1.5em;\r\n\tfont-weight: 400;\r\n\tpadding: 0px 10px 0px 13px;\r\n}\r\n\r\n#createTaskContainer {\r\n\tborder-radius: 20px;\r\n\tpadding: 5%;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n}\r\n\r\n\r\n#tasksContainer {\r\n\tborder-radius: 20px;\r\n\tmargin-bottom: 15px;\r\n}\r\n\r\n#tasksContainer input[type=\"checkbox\"] {\r\n\tposition: relative;\r\n\tborder: 2px solid var(--clr-mineShaft);\r\n\tborder-radius: 14px;\r\n\tappearance: none;\r\n\toutline: 0;\r\n\tcursor: pointer;\r\n\ttransition: background 175ms cubic-bezier(0.1, 0.1, 0.25, 1);\r\n}\r\n\r\n#tasksContainer input[type=\"checkbox\"]::before {\r\n\tposition: absolute;\r\n\tcontent: '';\r\n\tdisplay: block;\r\n    top: -6px;\r\n    left: 9px;\r\n    width: 8px;\r\n    height: 21px;\r\n\tborder-style: solid;\r\n\tborder-color: var(--clr-mineShaft);\r\n\tborder-width: 0 3px 3px 0;\r\n\ttransform: rotate(45deg);\r\n\topacity: 0;\r\n}\r\n\r\n#tasksContainer input[type=\"checkbox\"]:checked {\r\n\tcolor: var(--clr-mineShaft);\r\n\tborder-color: var(--clr-mineShaft);\r\n\tbackground: var(--clr-primary);\r\n}\r\n\r\n#tasksContainer input[type=\"checkbox\"]:checked::before {\r\n\topacity: 1;\r\n}\r\n\r\n#tasksContainer input[type=\"checkbox\"]:checked ~ label::before {\r\n\tclip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\r\n}\r\n\r\n#tasksContainer label {\r\n\tposition: relative;\r\n\tcursor: pointer;\r\n\tfont-size: 1.3em;\r\n\tfont-weight: 400;\r\n\tpadding: 0 0.45em 0;\r\n\tuser-select: none;\r\n\r\n}\r\n\r\n#tasksContainer label::before {\r\n\tposition: absolute;\r\n\tcontent: attr(data-content);\r\n\tcolor: var(--clr-completedTask);\r\n\tclip-path: polygon(0 0, 0 0, 0% 100%, 0 100%);\r\n\ttext-decoration: line-through;\r\n\ttext-decoration-thickness: 3px;\r\n\ttext-decoration-color: var(--clr-dark);\r\n\ttop: 0px;\r\n\ttransition: clip-path 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);\r\n}\r\n\r\n.task label {\r\n\tbottom: 0px;\r\n}\r\n\r\n.task {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tbackground-color: var(--clr-gallery);\r\n\tborder: 1px solid var(--clr-primary);\r\n\tmargin: 2%;\r\n\tpadding: 2%;\r\n\tborder-radius: 10px;\r\n}\r\n\r\n#tasksContainer .task input {\r\n\theight: 25px;\r\n\twidth: 25px;\r\n\tmin-width: 25px;\r\n}\r\n\r\n#tasksContainer input:hover {\r\n\tborder: 2px solid var(--clr-primary);\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n#noTasks{\r\n\tfont-size: 1.3em;\r\n}\r\n\r\n.delete-stuff {\r\n\tdisplay: flex;\r\n\tflex-direction: column;}\r\n\r\n.delete-stuff button {\r\n\tfont-family: 'Source Sans Pro', sans-serif;\r\n\tborder: none;\r\n\tmargin: 0.5em;\r\n\tborder-radius: 12px;\r\n\tfont-size: 1em;\r\n\tpadding: 0.11em 1em 0.11em 1em;\r\n\ttransition: all 0.3s ease;\r\n}\r\n.delete-stuff button:hover {\r\n\topacity: 0.8;\r\n}\r\n\r\n#clearBtn {\r\n\tbackground-color: var(--clr-navHighlight);\r\n\tcolor: var(--clr-mineShaft);\r\n}\r\n\r\n#deleteBtn {\r\n\tbackground-color: var(--clr-delete);\r\n\tcolor: var(--clr-mineShaft);\r\n}\r\n\r\n@media (min-width: 375px) {\r\n\t#menu, #taskList {\r\n\t\twidth: 92vw;\r\n\t}\r\n\t#container {\r\n\t\tmargin-right: 0%;\r\n\t\tmargin-left: 0%;\r\n\t\tpadding-left: 1%;\r\n\t}\r\n}\r\n\r\n@media (min-width: 768px) {\r\n\t.todo-list{\r\n\t\tmargin-top: 7em;\r\n\t}\r\n}\r\n\r\n@media (min-width: 1100px) {\r\n\t#container {\r\n\t\tmargin-right: 0%;\r\n\t\tmargin-left: 0%;\r\n\t}\r\n\r\n\t.todo-list{\r\n\t\tmargin-top: 7em;\r\n\t}\r\n\r\n}\r\n\r\n/* @media (min-width: 1400px) {\r\n\t.todo-list{\r\n\t\tmargin-top: 0em;\r\n\t}\r\n} */\r\n\r\n", "",{"version":3,"sources":["webpack://./src/style/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n\t--clr-primary: rgb(41, 145, 255);\r\n\t--clr-lightGray: rgb(232, 232, 232);\r\n\t--clr-light: #f4f4f4;\r\n\t--clr-dark: rgb(58, 58, 58);\r\n\t--clr-white: rgb(252, 252, 252);\r\n\t--clr-warning: #e97560;\r\n\t--clr-navHighlight: #4f7794d0;\r\n\t--clr-mineShaft: #232323;\r\n\t--clr-gallery: #ededed;\r\n\t--clr-elfGreen: #058179;\r\n\t--clr-nebula: #cbdbda;\r\n\t--clr-completedTask: #a5b1c0;\r\n\t--clr-delete: #ff494962;\r\n}\r\n\r\nhtml {\r\n\tfont-family: 'Source Sans Pro', sans-serif;\r\n\r\n}\r\n\r\nbody {\r\n\tpadding-bottom: 10%;\r\n\tmargin: 0;\r\n\tbackground: var(--clr-nebula);\r\n\tcolor: var(--clr-mineShaft);\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\t\r\n}\r\n\r\nh1 {\r\n\tcolor: var(--clr-dark);\r\n\tfont-size: 3rem;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-self: center;\r\n\talign-items: center;\r\n\tmargin: -0.5em 0.5em 0.5em 40.5%;\r\n\tz-index: 2;\r\n\tposition: absolute;\r\n}\r\n\r\n.hideH1 {\r\n\tdisplay: none;\r\n}\r\n\r\nh2 {\r\n\tmargin-bottom: 0px;\r\n}\r\n\r\n.hidden {\r\n\t\r\n\tdisplay: none\r\n}\r\n\r\n#container {\r\n\tmargin-right: -18%;\r\n\tmargin-top: 50px;\r\n\tpadding-left: 1%;\r\n\tdisplay: grid;\r\n\tjustify-content: space-around;\r\n\tgrid-template-columns: 1fr;\r\n\tgrid-template-rows: auto;\r\n\tgrid-template-areas: \r\n\t  \"projects\"\r\n\t  \"tasks\"\r\n\t  \"logo\";\r\n} \r\n\r\n#gitLogoDivContainer {\r\n\tgrid-area: logo;\r\n\tmargin-top: 30px;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-self: center;\r\n\talign-items: center;\r\n}\r\n\r\n.gitLogo {\r\n\twidth: 85px;\r\n\theight: 85px;\r\n}\r\n\r\n#navContainer {\r\n\t/* display: flex;\r\n\tflex-direction: column; */\r\n\tposition: relative;\r\n\tmargin-bottom: 10vw;\r\n\tgrid-area: projects;\r\n}\r\n\r\n#menuToggle {\r\n\tdisplay: block;\r\n\tposition: relative;\r\n\tmax-width: 50vw;\r\n\ttop: 50px;\r\n\tleft: 50px;\r\n\tz-index: 1;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n}\r\n\r\n#menuToggle li {\r\n\ttext-decoration: none;\r\n\t-webkit-transition: color 0.3s ease;\r\n\t-o-transition: color 0.3s ease;\r\n\ttransition: color 0.3s ease;\r\n\tpadding: 10px 0px 10px 50px;\r\n\tfont-size: 22px;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n\r\n#menuToggle li:hover {\r\n\tfont-weight: 700;\r\n}\r\n\r\n\r\n/* The hamburger button hidden inside an #inputMenu element */\r\n#menuToggle #inputMenu {\r\n\tdisplay: block;\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tposition: absolute;\r\n\ttop: -7px;\r\n\tleft: -5px;\r\n\tpadding: 0;\r\n\tcursor: pointer;\r\n\t\r\n\topacity: 0;\r\n\t/* hide this */\r\n\tz-index: 2;\r\n\t/* and place it over the hamburger */\r\n\t-webkit-touch-callout: none;\r\n}\r\n\r\n#menuToggle #labelMenu {\r\n\tposition: relative;\r\n\tdisplay: block;\r\n\twidth: 30px;\r\n\theight: 30px;\r\n}\r\n\r\n#menuToggle #labelMenu span {\r\n\tdisplay: none;\r\n}\r\n\r\n/*\r\n * Hamburger\r\n */\r\n#menuToggle #labelMenu div {\r\n\tdisplay: block;\r\n\twidth: 30px;\r\n\theight: 2px;\r\n\tmargin-bottom: 6px;\r\n\tposition: relative;\r\n\tbackground: var(--clr-elfGreen);\r\n\tborder-radius: 5px;\r\n\tz-index: 1;\r\n\t-webkit-transform-origin: 4px 0px;\r\n\t-ms-transform-origin: 4px 0px;\r\n\ttransform-origin: 4px 0px;\r\n\t-webkit-transition: all 0.3s ease;\r\n\t-o-transition: all 0.3s ease;\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n#menuToggle #labelMenu div:first-child {\r\n\t-webkit-transform-origin: 0% 100%;\r\n\t-ms-transform-origin: 0% 100%;\r\n\ttransform-origin: 0% 100%;\r\n}\r\n\r\n#menuToggle #labelMenu div:nth-child(2) {\r\n\t-webkit-transform-origin: 0% 0%;\r\n\t-ms-transform-origin: 0% 0%;\r\n\ttransform-origin: 0% 0%;\r\n}\r\n\r\n/* \r\n * Change the color of the hamburger when toggled\r\n */\r\n#menuToggle #inputMenu:checked+#labelMenu div {\r\n\tbackground: var(--clr-mineShaft);\r\n\t\r\n}\r\n\r\n/*\r\n * Use absolute positioning to place the menu off-screen\r\n */\r\n#menu {\r\n\tposition: relative;\r\n\twidth: 100vw;\r\n\tmax-width: 900px;\r\n\tmargin: -80px 0 0 -50px;\r\n\tpadding: 50px 0px 50px 0px;\r\n\tpadding-top: 125px;\r\n\tbackground: var(--clr-light);\r\n\tbox-shadow: \r\n\t\t\t\t0 2.8px 2.2px rgba(0, 0, 0, 0.034),\r\n\t\t\t\t0 6.7px 5.3px rgba(0, 0, 0, 0.048),\r\n\t\t\t\t0 12.5px 10px rgba(0, 0, 0, 0.06),\r\n\t\t\t\t0 22.3px 17.9px rgba(0, 0, 0, 0.072),\r\n\t\t\t\t0 41.8px 33.4px rgba(0, 0, 0, 0.086);\r\n\tborder-radius: 20px;\r\n\tlist-style-type: none;\r\n\t/* Hide the menu off-screen to the left */\r\n\tleft: 0;\r\n\t-webkit-transition: left 0.3s ease;\r\n\t-o-transition: left 0.3s ease;\r\n\ttransition: left 0.3s ease;\r\n}\r\n\r\n\r\n\r\n/*\r\n * Slide the menu in from left when the #inputMenu is checked\r\n */\r\n#menuToggle #inputMenu:checked~ul {\r\n\r\n\ttransition: left 0.3s ease;\r\n\tleft: -200%;\r\n}\r\n\r\n.list-name {\r\n\tcursor: pointer;\r\n}\r\n\r\n.list-img {\r\n\twidth: 1.7em;\r\n\tpadding-right: 10px;\r\n}\r\n\r\n.active-list {\r\n\tbackground-color: var(--clr-elfGreen);\r\n\tborder-radius: 35px;\r\n\tmargin: 0px 25px 0px 25px;\r\n\tcolor: var(--clr-light);\r\n}\r\n\r\n#myForm {\r\n\tdisplay: none;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tmargin-top: 1.8em;\r\n\ttransition: all 0.3s ease;\r\n\t\r\n}\r\n\r\n#myForm form, #myTasks form {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tfont-size: 1.3em;\r\n\tbackground-color: var(--clr-white);\r\n\tborder: 1px solid var(--clr-elfGreen);\r\n\twidth: 15em;\r\n\tpadding: 2em .6em 1.5em .6em;\r\n\tborder-radius: 20px;\r\n}\r\n\r\n#addProjectForm {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n}\r\n\r\n#addProjectButton {\r\n\tmargin-top: 30px;\r\n\tbackground-color: var(--clr-elfGreen);\r\n\tcolor: var(--clr-light);\r\n\tborder: none;\r\n\tborder-radius: 42px;\r\n\tfont-size: 1.4em;\r\n\tpadding: 2% 10% 2% 8%;\r\n\tfont-family: 'Source Sans Pro', sans-serif;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n#addProjectButton:hover {\r\n\tcolor: var(--clr-light);\r\n\topacity: 0.8;\r\n}\r\n\r\n#addProjectButton span {\r\n\tfont-size: 1.6em;\r\n\tfont-weight: 300;\r\n\tpadding: 0px 10px 0px 3px;\r\n\t\r\n}\r\n\r\n#submitBtn, #taskSubmitButton {\r\n \tfont-family: 'Source Sans Pro', sans-serif;\r\n \tbackground-color: var(--clr-elfGreen);\r\n \tcolor: var(--clr-light);\r\n \tborder: none;\r\n \tborder-radius: 32px;\r\n \tfont-size: 1em;\r\n \tpadding: 2% 30% 2% 30%;\r\n\t transition: all 0.3s ease;\r\n}\r\n\r\n#submitBtn:hover, #taskSubmitBtn:hover {\r\n\topacity: 0.8;\r\n}\r\n\r\n#projectLabel, #taskLabel {\r\n\tfont-size: 1.3em;\r\n\tfont-weight: 700;\r\n}\r\n\r\n#projectInput, #taskInput {\r\n\tfont-size: 0.8em;\r\n\tfont-weight: 400;\r\n\tfont-family: 'Source Sans Pro', sans-serif;\r\n\tborder-radius: 15px;\r\n\tpadding: 0px 15px 0px 15px;\r\n}\r\n\r\n.deleteProjectBtn {\r\n\tborder: 1px solid var(--clr-mineShaft);\r\n\tbackground: var(--clr-warning);\r\n\tborder-radius: 20px;\r\n\tpadding: 3px 7px 2px 7px;\r\n\tfont-size: 0.7em;\r\n\tdisplay: flex;\r\n\tmargin: 0.5% 2% 0 2%;\r\n\tcursor: pointer;\r\n\tfont-weight: 300;\r\n}\r\n\r\n#taskList {\r\n\tgrid-area: tasks;\r\n\t/* margin-bottom: 130vh; */\r\n\t/* margin-top: 50vh; */\r\n}\r\n\r\n.todo-list {\r\n\ttransition: all 0.3s ease;\r\n\tmargin-top: 5em;\r\n\tbackground: var(--clr-gallery);\r\n\tborder-radius: 20px;\r\n\twidth: 100vw;\r\n\tmax-width: 900px;\r\n\tpadding-top: 3%;\r\n\tpadding-bottom: 1%;\r\n\tbox-shadow: \r\n\t\t\t\t0 2.8px 2.2px rgba(0, 0, 0, 0.034),\r\n\t\t\t\t0 6.7px 5.3px rgba(0, 0, 0, 0.048),\r\n\t\t\t\t0 12.5px 10px rgba(0, 0, 0, 0.06),\r\n\t\t\t\t0 22.3px 17.9px rgba(0, 0, 0, 0.072),\r\n\t\t\t\t0 41.8px 33.4px rgba(0, 0, 0, 0.086),\r\n\t\t\t\t0 100px 80px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.addMarginAfterClick {\r\n\tmargin-top: 26vh;\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n.removeMarginAfterClick {\r\n\ttransform: translateY(-70%);\r\n\t/* margin-top: -10vh; */\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n\r\n.todo-header {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tbackground-color: var(--clr-light);\r\n\tborder: 1px solid var(--clr-elfGreen);\r\n\tborder-radius: 20px;\r\n\tmargin: 0% 5% 5% 5%;\r\n}\r\n\r\n.task-count {\r\n\tcolor: var(--clr-primary);\r\n}\r\n\r\n.todo-body {\r\n\tbackground-color: var(--clr-light);\r\n\tborder: 1px solid var(--clr-elfGreen);\r\n\tborder-radius: 20px;\r\n\tpadding: 5% 1% 0% 1%;\r\n\tmargin: 5%;\r\n}\r\n\r\n#myTasks {\r\n\tdisplay: none;\r\n}\r\n\r\n#addTaskButton {\r\n\tfont-family: 'Source Sans Pro', sans-serif;\r\n \tbackground-color: var(--clr-elfGreen);\r\n \tcolor: var(--clr-light);\r\n \tborder: none;\r\n \tborder-radius: 32px;\r\n \tfont-size: 1.1em;\r\n \tpadding: 2% 10% 2% 4%;\r\n\t display: flex;\r\n\t align-items: center;\r\n\t margin-bottom: 20px;\r\n\t transition: all 0.3s ease;\r\n}\r\n\r\n#addTaskButton:hover {\r\n\topacity: 0.8;\r\n}\r\n\r\n#addTaskButton span {\r\n\tfont-size: 1.5em;\r\n\tfont-weight: 400;\r\n\tpadding: 0px 10px 0px 13px;\r\n}\r\n\r\n#createTaskContainer {\r\n\tborder-radius: 20px;\r\n\tpadding: 5%;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n}\r\n\r\n\r\n#tasksContainer {\r\n\tborder-radius: 20px;\r\n\tmargin-bottom: 15px;\r\n}\r\n\r\n#tasksContainer input[type=\"checkbox\"] {\r\n\tposition: relative;\r\n\tborder: 2px solid var(--clr-mineShaft);\r\n\tborder-radius: 14px;\r\n\tappearance: none;\r\n\toutline: 0;\r\n\tcursor: pointer;\r\n\ttransition: background 175ms cubic-bezier(0.1, 0.1, 0.25, 1);\r\n}\r\n\r\n#tasksContainer input[type=\"checkbox\"]::before {\r\n\tposition: absolute;\r\n\tcontent: '';\r\n\tdisplay: block;\r\n    top: -6px;\r\n    left: 9px;\r\n    width: 8px;\r\n    height: 21px;\r\n\tborder-style: solid;\r\n\tborder-color: var(--clr-mineShaft);\r\n\tborder-width: 0 3px 3px 0;\r\n\ttransform: rotate(45deg);\r\n\topacity: 0;\r\n}\r\n\r\n#tasksContainer input[type=\"checkbox\"]:checked {\r\n\tcolor: var(--clr-mineShaft);\r\n\tborder-color: var(--clr-mineShaft);\r\n\tbackground: var(--clr-primary);\r\n}\r\n\r\n#tasksContainer input[type=\"checkbox\"]:checked::before {\r\n\topacity: 1;\r\n}\r\n\r\n#tasksContainer input[type=\"checkbox\"]:checked ~ label::before {\r\n\tclip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\r\n}\r\n\r\n#tasksContainer label {\r\n\tposition: relative;\r\n\tcursor: pointer;\r\n\tfont-size: 1.3em;\r\n\tfont-weight: 400;\r\n\tpadding: 0 0.45em 0;\r\n\tuser-select: none;\r\n\r\n}\r\n\r\n#tasksContainer label::before {\r\n\tposition: absolute;\r\n\tcontent: attr(data-content);\r\n\tcolor: var(--clr-completedTask);\r\n\tclip-path: polygon(0 0, 0 0, 0% 100%, 0 100%);\r\n\ttext-decoration: line-through;\r\n\ttext-decoration-thickness: 3px;\r\n\ttext-decoration-color: var(--clr-dark);\r\n\ttop: 0px;\r\n\ttransition: clip-path 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);\r\n}\r\n\r\n.task label {\r\n\tbottom: 0px;\r\n}\r\n\r\n.task {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tbackground-color: var(--clr-gallery);\r\n\tborder: 1px solid var(--clr-primary);\r\n\tmargin: 2%;\r\n\tpadding: 2%;\r\n\tborder-radius: 10px;\r\n}\r\n\r\n#tasksContainer .task input {\r\n\theight: 25px;\r\n\twidth: 25px;\r\n\tmin-width: 25px;\r\n}\r\n\r\n#tasksContainer input:hover {\r\n\tborder: 2px solid var(--clr-primary);\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n#noTasks{\r\n\tfont-size: 1.3em;\r\n}\r\n\r\n.delete-stuff {\r\n\tdisplay: flex;\r\n\tflex-direction: column;}\r\n\r\n.delete-stuff button {\r\n\tfont-family: 'Source Sans Pro', sans-serif;\r\n\tborder: none;\r\n\tmargin: 0.5em;\r\n\tborder-radius: 12px;\r\n\tfont-size: 1em;\r\n\tpadding: 0.11em 1em 0.11em 1em;\r\n\ttransition: all 0.3s ease;\r\n}\r\n.delete-stuff button:hover {\r\n\topacity: 0.8;\r\n}\r\n\r\n#clearBtn {\r\n\tbackground-color: var(--clr-navHighlight);\r\n\tcolor: var(--clr-mineShaft);\r\n}\r\n\r\n#deleteBtn {\r\n\tbackground-color: var(--clr-delete);\r\n\tcolor: var(--clr-mineShaft);\r\n}\r\n\r\n@media (min-width: 375px) {\r\n\t#menu, #taskList {\r\n\t\twidth: 92vw;\r\n\t}\r\n\t#container {\r\n\t\tmargin-right: 0%;\r\n\t\tmargin-left: 0%;\r\n\t\tpadding-left: 1%;\r\n\t}\r\n}\r\n\r\n@media (min-width: 768px) {\r\n\t.todo-list{\r\n\t\tmargin-top: 7em;\r\n\t}\r\n}\r\n\r\n@media (min-width: 1100px) {\r\n\t#container {\r\n\t\tmargin-right: 0%;\r\n\t\tmargin-left: 0%;\r\n\t}\r\n\r\n\t.todo-list{\r\n\t\tmargin-top: 7em;\r\n\t}\r\n\r\n}\r\n\r\n/* @media (min-width: 1400px) {\r\n\t.todo-list{\r\n\t\tmargin-top: 0em;\r\n\t}\r\n} */\r\n\r\n"],"sourceRoot":""}]);
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


	// DOM when page loads events
	window.addEventListener('load', () => {
		tasksContainer.style.display = 'none';
	});

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
				// console.log(localStorage);
				projectInput.value = '';
				loadProjects();
			}
		
		}


		//load projects from localStorage when page loads


		const loadProjects = () => {
			let projects = Object.keys(localStorage);
			// remove tasks key from projects variable
			function deleteByVal(val) {
				for (let key in projects) {
					if (projects[key] == val) delete projects[key];
				}
			}
			deleteByVal('tasks');


			console.log(projects);
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



	// create an IIFe to create tasks

	const task = (() => {

		let taskArray = [];

		//create new task using taskInput and add it to the selected project and add it to local storage
		const createNewTask = (projectName, taskName) => {
			// projectName = document.querySelector('.active-list').getAttribute('data-project');
			// console.log(project);

			const task = document.createElement('div');
			task.classList.add('task');
			task.setAttribute('data-task', taskName);
			task.setAttribute('data-project-name', projectName);
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
			addTask(projectName, taskName);

			
		}

		// add tasks local storage
		const addTask = (projectName, taskName) => {


			let taskObj = {
				[projectName] : taskName,
			}

			//add task to selected project
			if(projectName) {
				// let taskArray = [];
				taskArray.push(taskObj);
			} else {
				let taskArray = [];
				taskArray.push(taskObj);
			}

			
			
			localStorage.setItem('tasks', JSON.stringify(taskArray));
			taskInput.value = '';
			loadTasks();
			
			// console.log(localStorage)
		}



		//load tasks from local storage
		const loadTasks = () => {
		

			let tasks = localStorage.getItem('tasks');
			let tasksParsed = JSON.parse(tasks);

			let arrayOfProjectNames = [];
			let arrayOfTaskNames = [];


			for (const [key, value] of Object.entries(tasksParsed)) {
				let taskIndex = key;
				let task = value;
				for (const [projectName, taskName] of Object.entries(task)) {
					let nameOfProject = projectName;
					let nameOfTask = taskName;
					arrayOfProjectNames.push(nameOfProject);
					arrayOfTaskNames.push(nameOfTask);

					
				
			  	}
				
				
			}
			

			for (let i = 0; i < arrayOfProjectNames.length; i++) {
				//if task already exists, don't create it again
				if(document.querySelector(`[data-task="${arrayOfTaskNames[i]}"]`)) {
					return;
				} else {
					createNewTask(arrayOfProjectNames[i], arrayOfTaskNames[i]);
				}


			}



			console.log(localStorage);


		}


	return {
		createNewTask,
		addTask,
		loadTasks,
		
	}

	})();




	
	
	//create new task using taskInput and add it to the selected project
	newTaskForm.addEventListener('submit', (e) => {
		e.preventDefault();
		let projectsName = document.querySelector('.active-list').getAttribute('data-project');
		let tasksName = taskInput.value;
		// if project exists in local storage or project name is empty, don't add it again
		if (tasksName !== '') {
			// if project has a class of active-list then add task to that project
			if (document.querySelector('.active-list')) {
				task.createNewTask(projectsName, tasksName);

			}
		}

		taskInput.value = '';
	});

	task.loadTasks();


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
				tasksContainer.style.display = 'none';

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



		//when i click on a show tasks that had data-project-name equal to the project name
		const showTasks = () => {

			let project = document.querySelector('.active-list').getAttribute('data-project');
			let tasks = document.querySelectorAll('.task');
			for (let task of tasks) {
				if (task.getAttribute('data-project-name') === project) {
					tasksContainer.style.display = 'block';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssVUFBVSxVQUFVLE1BQU0sS0FBSyxLQUFLLE9BQU8sYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxRQUFRLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLEtBQUssS0FBSyxhQUFhLE9BQU8sTUFBTSxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxVQUFVLE9BQU8sYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxTQUFTLE1BQU0sS0FBSyxNQUFNLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxjQUFjLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsUUFBUSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVB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QTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZjRCO0FBQ2lCO0FBQ0k7QUFDQTtBQUNBO0FBQ047QUFDM0M7QUFDQTtBQUNBLDhDQUE4Qyx3REFBWTtBQUMxRCw4Q0FBOEMsMERBQWM7QUFDNUQsOENBQThDLDBEQUFjO0FBQzVELDhDQUE4QywwREFBYztBQUM1RCw4Q0FBOEMsdURBQVc7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtbWFuYWdlbWVudC1hcHAvLi9zcmMvc3R5bGUvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZW1lbnQtYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZW1lbnQtYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VtZW50LWFwcC8uL3NyYy9zdHlsZS9zdHlsZXMuY3NzP2FmN2MiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VtZW50LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZW1lbnQtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZW1lbnQtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlbWVudC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VtZW50LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlbWVudC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZW1lbnQtYXBwLy4vc3JjL0RPTUludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZW1lbnQtYXBwLy4vc3JjL2NyZWF0ZVByb2plY3RzLmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlbWVudC1hcHAvLi9zcmMvY3JlYXRlVGFza3MuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VtZW50LWFwcC8uL3NyYy9kZWxldGVQcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZW1lbnQtYXBwLy4vc3JjL3JlbmRlclByb2plY3RzLmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlbWVudC1hcHAvLi9zcmMvcmVuZGVyVGFza3MuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VtZW50LWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZW1lbnQtYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlbWVudC1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlbWVudC1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZW1lbnQtYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VtZW50LWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlbWVudC1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VtZW50LWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG5cXHQtLWNsci1wcmltYXJ5OiByZ2IoNDEsIDE0NSwgMjU1KTtcXHJcXG5cXHQtLWNsci1saWdodEdyYXk6IHJnYigyMzIsIDIzMiwgMjMyKTtcXHJcXG5cXHQtLWNsci1saWdodDogI2Y0ZjRmNDtcXHJcXG5cXHQtLWNsci1kYXJrOiByZ2IoNTgsIDU4LCA1OCk7XFxyXFxuXFx0LS1jbHItd2hpdGU6IHJnYigyNTIsIDI1MiwgMjUyKTtcXHJcXG5cXHQtLWNsci13YXJuaW5nOiAjZTk3NTYwO1xcclxcblxcdC0tY2xyLW5hdkhpZ2hsaWdodDogIzRmNzc5NGQwO1xcclxcblxcdC0tY2xyLW1pbmVTaGFmdDogIzIzMjMyMztcXHJcXG5cXHQtLWNsci1nYWxsZXJ5OiAjZWRlZGVkO1xcclxcblxcdC0tY2xyLWVsZkdyZWVuOiAjMDU4MTc5O1xcclxcblxcdC0tY2xyLW5lYnVsYTogI2NiZGJkYTtcXHJcXG5cXHQtLWNsci1jb21wbGV0ZWRUYXNrOiAjYTViMWMwO1xcclxcblxcdC0tY2xyLWRlbGV0ZTogI2ZmNDk0OTYyO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG5cXHRmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcblxcdHBhZGRpbmctYm90dG9tOiAxMCU7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdGJhY2tncm91bmQ6IHZhcigtLWNsci1uZWJ1bGEpO1xcclxcblxcdGNvbG9yOiB2YXIoLS1jbHItbWluZVNoYWZ0KTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdFxcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWNsci1kYXJrKTtcXHJcXG5cXHRmb250LXNpemU6IDNyZW07XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRtYXJnaW46IC0wLjVlbSAwLjVlbSAwLjVlbSA0MC41JTtcXHJcXG5cXHR6LWluZGV4OiAyO1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGVIMSB7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcblxcdG1hcmdpbi1ib3R0b206IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbiB7XFxyXFxuXFx0XFxyXFxuXFx0ZGlzcGxheTogbm9uZVxcclxcbn1cXHJcXG5cXHJcXG4jY29udGFpbmVyIHtcXHJcXG5cXHRtYXJnaW4tcmlnaHQ6IC0xOCU7XFxyXFxuXFx0bWFyZ2luLXRvcDogNTBweDtcXHJcXG5cXHRwYWRkaW5nLWxlZnQ6IDElO1xcclxcblxcdGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcclxcblxcdGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcclxcblxcdCAgXFxcInByb2plY3RzXFxcIlxcclxcblxcdCAgXFxcInRhc2tzXFxcIlxcclxcblxcdCAgXFxcImxvZ29cXFwiO1xcclxcbn0gXFxyXFxuXFxyXFxuI2dpdExvZ29EaXZDb250YWluZXIge1xcclxcblxcdGdyaWQtYXJlYTogbG9nbztcXHJcXG5cXHRtYXJnaW4tdG9wOiAzMHB4O1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0YWxpZ24tc2VsZjogY2VudGVyO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5naXRMb2dvIHtcXHJcXG5cXHR3aWR0aDogODVweDtcXHJcXG5cXHRoZWlnaHQ6IDg1cHg7XFxyXFxufVxcclxcblxcclxcbiNuYXZDb250YWluZXIge1xcclxcblxcdC8qIGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMTB2dztcXHJcXG5cXHRncmlkLWFyZWE6IHByb2plY3RzO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudVRvZ2dsZSB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdG1heC13aWR0aDogNTB2dztcXHJcXG5cXHR0b3A6IDUwcHg7XFxyXFxuXFx0bGVmdDogNTBweDtcXHJcXG5cXHR6LWluZGV4OiAxO1xcclxcblxcdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuXFx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG5cXHQtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNtZW51VG9nZ2xlIGxpIHtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XFxyXFxuXFx0LW8tdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xcclxcblxcdHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcXHJcXG5cXHRwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDUwcHg7XFxyXFxuXFx0Zm9udC1zaXplOiAyMnB4O1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI21lbnVUb2dnbGUgbGk6aG92ZXIge1xcclxcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIFRoZSBoYW1idXJnZXIgYnV0dG9uIGhpZGRlbiBpbnNpZGUgYW4gI2lucHV0TWVudSBlbGVtZW50ICovXFxyXFxuI21lbnVUb2dnbGUgI2lucHV0TWVudSB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0d2lkdGg6IDMwcHg7XFxyXFxuXFx0aGVpZ2h0OiAzMHB4O1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHR0b3A6IC03cHg7XFxyXFxuXFx0bGVmdDogLTVweDtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRcXHJcXG5cXHRvcGFjaXR5OiAwO1xcclxcblxcdC8qIGhpZGUgdGhpcyAqL1xcclxcblxcdHotaW5kZXg6IDI7XFxyXFxuXFx0LyogYW5kIHBsYWNlIGl0IG92ZXIgdGhlIGhhbWJ1cmdlciAqL1xcclxcblxcdC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI21lbnVUb2dnbGUgI2xhYmVsTWVudSB7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdHdpZHRoOiAzMHB4O1xcclxcblxcdGhlaWdodDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuI21lbnVUb2dnbGUgI2xhYmVsTWVudSBzcGFuIHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIEhhbWJ1cmdlclxcclxcbiAqL1xcclxcbiNtZW51VG9nZ2xlICNsYWJlbE1lbnUgZGl2IHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHR3aWR0aDogMzBweDtcXHJcXG5cXHRoZWlnaHQ6IDJweDtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiA2cHg7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdGJhY2tncm91bmQ6IHZhcigtLWNsci1lbGZHcmVlbik7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcdHotaW5kZXg6IDE7XFxyXFxuXFx0LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA0cHggMHB4O1xcclxcblxcdC1tcy10cmFuc2Zvcm0tb3JpZ2luOiA0cHggMHB4O1xcclxcblxcdHRyYW5zZm9ybS1vcmlnaW46IDRweCAwcHg7XFxyXFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcclxcblxcdC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuI21lbnVUb2dnbGUgI2xhYmVsTWVudSBkaXY6Zmlyc3QtY2hpbGQge1xcclxcblxcdC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCUgMTAwJTtcXHJcXG5cXHQtbXMtdHJhbnNmb3JtLW9yaWdpbjogMCUgMTAwJTtcXHJcXG5cXHR0cmFuc2Zvcm0tb3JpZ2luOiAwJSAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudVRvZ2dsZSAjbGFiZWxNZW51IGRpdjpudGgtY2hpbGQoMikge1xcclxcblxcdC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XFxyXFxuXFx0LW1zLXRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xcclxcblxcdHRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBcXHJcXG4gKiBDaGFuZ2UgdGhlIGNvbG9yIG9mIHRoZSBoYW1idXJnZXIgd2hlbiB0b2dnbGVkXFxyXFxuICovXFxyXFxuI21lbnVUb2dnbGUgI2lucHV0TWVudTpjaGVja2VkKyNsYWJlbE1lbnUgZGl2IHtcXHJcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1jbHItbWluZVNoYWZ0KTtcXHJcXG5cXHRcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiBVc2UgYWJzb2x1dGUgcG9zaXRpb25pbmcgdG8gcGxhY2UgdGhlIG1lbnUgb2ZmLXNjcmVlblxcclxcbiAqL1xcclxcbiNtZW51IHtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0d2lkdGg6IDEwMHZ3O1xcclxcblxcdG1heC13aWR0aDogOTAwcHg7XFxyXFxuXFx0bWFyZ2luOiAtODBweCAwIDAgLTUwcHg7XFxyXFxuXFx0cGFkZGluZzogNTBweCAwcHggNTBweCAwcHg7XFxyXFxuXFx0cGFkZGluZy10b3A6IDEyNXB4O1xcclxcblxcdGJhY2tncm91bmQ6IHZhcigtLWNsci1saWdodCk7XFxyXFxuXFx0Ym94LXNoYWRvdzogXFxyXFxuXFx0XFx0XFx0XFx0MCAyLjhweCAyLjJweCByZ2JhKDAsIDAsIDAsIDAuMDM0KSxcXHJcXG5cXHRcXHRcXHRcXHQwIDYuN3B4IDUuM3B4IHJnYmEoMCwgMCwgMCwgMC4wNDgpLFxcclxcblxcdFxcdFxcdFxcdDAgMTIuNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA2KSxcXHJcXG5cXHRcXHRcXHRcXHQwIDIyLjNweCAxNy45cHggcmdiYSgwLCAwLCAwLCAwLjA3MiksXFxyXFxuXFx0XFx0XFx0XFx0MCA0MS44cHggMzMuNHB4IHJnYmEoMCwgMCwgMCwgMC4wODYpO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuXFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcblxcdC8qIEhpZGUgdGhlIG1lbnUgb2ZmLXNjcmVlbiB0byB0aGUgbGVmdCAqL1xcclxcblxcdGxlZnQ6IDA7XFxyXFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBsZWZ0IDAuM3MgZWFzZTtcXHJcXG5cXHQtby10cmFuc2l0aW9uOiBsZWZ0IDAuM3MgZWFzZTtcXHJcXG5cXHR0cmFuc2l0aW9uOiBsZWZ0IDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLypcXHJcXG4gKiBTbGlkZSB0aGUgbWVudSBpbiBmcm9tIGxlZnQgd2hlbiB0aGUgI2lucHV0TWVudSBpcyBjaGVja2VkXFxyXFxuICovXFxyXFxuI21lbnVUb2dnbGUgI2lucHV0TWVudTpjaGVja2VkfnVsIHtcXHJcXG5cXHJcXG5cXHR0cmFuc2l0aW9uOiBsZWZ0IDAuM3MgZWFzZTtcXHJcXG5cXHRsZWZ0OiAtMjAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtbmFtZSB7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1pbWcge1xcclxcblxcdHdpZHRoOiAxLjdlbTtcXHJcXG5cXHRwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlLWxpc3Qge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1lbGZHcmVlbik7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMzVweDtcXHJcXG5cXHRtYXJnaW46IDBweCAyNXB4IDBweCAyNXB4O1xcclxcblxcdGNvbG9yOiB2YXIoLS1jbHItbGlnaHQpO1xcclxcbn1cXHJcXG5cXHJcXG4jbXlGb3JtIHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0bWFyZ2luLXRvcDogMS44ZW07XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG5cXHRcXHJcXG59XFxyXFxuXFxyXFxuI215Rm9ybSBmb3JtLCAjbXlUYXNrcyBmb3JtIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRmb250LXNpemU6IDEuM2VtO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci13aGl0ZSk7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tY2xyLWVsZkdyZWVuKTtcXHJcXG5cXHR3aWR0aDogMTVlbTtcXHJcXG5cXHRwYWRkaW5nOiAyZW0gLjZlbSAxLjVlbSAuNmVtO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbiNhZGRQcm9qZWN0Rm9ybSB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZFByb2plY3RCdXR0b24ge1xcclxcblxcdG1hcmdpbi10b3A6IDMwcHg7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWVsZkdyZWVuKTtcXHJcXG5cXHRjb2xvcjogdmFyKC0tY2xyLWxpZ2h0KTtcXHJcXG5cXHRib3JkZXI6IG5vbmU7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNDJweDtcXHJcXG5cXHRmb250LXNpemU6IDEuNGVtO1xcclxcblxcdHBhZGRpbmc6IDIlIDEwJSAyJSA4JTtcXHJcXG5cXHRmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbiNhZGRQcm9qZWN0QnV0dG9uOmhvdmVyIHtcXHJcXG5cXHRjb2xvcjogdmFyKC0tY2xyLWxpZ2h0KTtcXHJcXG5cXHRvcGFjaXR5OiAwLjg7XFxyXFxufVxcclxcblxcclxcbiNhZGRQcm9qZWN0QnV0dG9uIHNwYW4ge1xcclxcblxcdGZvbnQtc2l6ZTogMS42ZW07XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDMwMDtcXHJcXG5cXHRwYWRkaW5nOiAwcHggMTBweCAwcHggM3B4O1xcclxcblxcdFxcclxcbn1cXHJcXG5cXHJcXG4jc3VibWl0QnRuLCAjdGFza1N1Ym1pdEJ1dHRvbiB7XFxyXFxuIFxcdGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcXHJcXG4gXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWVsZkdyZWVuKTtcXHJcXG4gXFx0Y29sb3I6IHZhcigtLWNsci1saWdodCk7XFxyXFxuIFxcdGJvcmRlcjogbm9uZTtcXHJcXG4gXFx0Ym9yZGVyLXJhZGl1czogMzJweDtcXHJcXG4gXFx0Zm9udC1zaXplOiAxZW07XFxyXFxuIFxcdHBhZGRpbmc6IDIlIDMwJSAyJSAzMCU7XFxyXFxuXFx0IHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbiNzdWJtaXRCdG46aG92ZXIsICN0YXNrU3VibWl0QnRuOmhvdmVyIHtcXHJcXG5cXHRvcGFjaXR5OiAwLjg7XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0TGFiZWwsICN0YXNrTGFiZWwge1xcclxcblxcdGZvbnQtc2l6ZTogMS4zZW07XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3RJbnB1dCwgI3Rhc2tJbnB1dCB7XFxyXFxuXFx0Zm9udC1zaXplOiAwLjhlbTtcXHJcXG5cXHRmb250LXdlaWdodDogNDAwO1xcclxcblxcdGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcblxcdHBhZGRpbmc6IDBweCAxNXB4IDBweCAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlUHJvamVjdEJ0biB7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tY2xyLW1pbmVTaGFmdCk7XFxyXFxuXFx0YmFja2dyb3VuZDogdmFyKC0tY2xyLXdhcm5pbmcpO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuXFx0cGFkZGluZzogM3B4IDdweCAycHggN3B4O1xcclxcblxcdGZvbnQtc2l6ZTogMC43ZW07XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRtYXJnaW46IDAuNSUgMiUgMCAyJTtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDMwMDtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tMaXN0IHtcXHJcXG5cXHRncmlkLWFyZWE6IHRhc2tzO1xcclxcblxcdC8qIG1hcmdpbi1ib3R0b206IDEzMHZoOyAqL1xcclxcblxcdC8qIG1hcmdpbi10b3A6IDUwdmg7ICovXFxyXFxufVxcclxcblxcclxcbi50b2RvLWxpc3Qge1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxuXFx0bWFyZ2luLXRvcDogNWVtO1xcclxcblxcdGJhY2tncm91bmQ6IHZhcigtLWNsci1nYWxsZXJ5KTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcblxcdHdpZHRoOiAxMDB2dztcXHJcXG5cXHRtYXgtd2lkdGg6IDkwMHB4O1xcclxcblxcdHBhZGRpbmctdG9wOiAzJTtcXHJcXG5cXHRwYWRkaW5nLWJvdHRvbTogMSU7XFxyXFxuXFx0Ym94LXNoYWRvdzogXFxyXFxuXFx0XFx0XFx0XFx0MCAyLjhweCAyLjJweCByZ2JhKDAsIDAsIDAsIDAuMDM0KSxcXHJcXG5cXHRcXHRcXHRcXHQwIDYuN3B4IDUuM3B4IHJnYmEoMCwgMCwgMCwgMC4wNDgpLFxcclxcblxcdFxcdFxcdFxcdDAgMTIuNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA2KSxcXHJcXG5cXHRcXHRcXHRcXHQwIDIyLjNweCAxNy45cHggcmdiYSgwLCAwLCAwLCAwLjA3MiksXFxyXFxuXFx0XFx0XFx0XFx0MCA0MS44cHggMzMuNHB4IHJnYmEoMCwgMCwgMCwgMC4wODYpLFxcclxcblxcdFxcdFxcdFxcdDAgMTAwcHggODBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkTWFyZ2luQWZ0ZXJDbGljayB7XFxyXFxuXFx0bWFyZ2luLXRvcDogMjZ2aDtcXHJcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVtb3ZlTWFyZ2luQWZ0ZXJDbGljayB7XFxyXFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC03MCUpO1xcclxcblxcdC8qIG1hcmdpbi10b3A6IC0xMHZoOyAqL1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcblxcclxcbi50b2RvLWhlYWRlciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWxpZ2h0KTtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jbHItZWxmR3JlZW4pO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuXFx0bWFyZ2luOiAwJSA1JSA1JSA1JTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stY291bnQge1xcclxcblxcdGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWJvZHkge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1saWdodCk7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tY2xyLWVsZkdyZWVuKTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcblxcdHBhZGRpbmc6IDUlIDElIDAlIDElO1xcclxcblxcdG1hcmdpbjogNSU7XFxyXFxufVxcclxcblxcclxcbiNteVRhc2tzIHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkVGFza0J1dHRvbiB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xcclxcbiBcXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItZWxmR3JlZW4pO1xcclxcbiBcXHRjb2xvcjogdmFyKC0tY2xyLWxpZ2h0KTtcXHJcXG4gXFx0Ym9yZGVyOiBub25lO1xcclxcbiBcXHRib3JkZXItcmFkaXVzOiAzMnB4O1xcclxcbiBcXHRmb250LXNpemU6IDEuMWVtO1xcclxcbiBcXHRwYWRkaW5nOiAyJSAxMCUgMiUgNCU7XFxyXFxuXFx0IGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0IGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0IG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuXFx0IHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbiNhZGRUYXNrQnV0dG9uOmhvdmVyIHtcXHJcXG5cXHRvcGFjaXR5OiAwLjg7XFxyXFxufVxcclxcblxcclxcbiNhZGRUYXNrQnV0dG9uIHNwYW4ge1xcclxcblxcdGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXHJcXG5cXHRwYWRkaW5nOiAwcHggMTBweCAwcHggMTNweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NyZWF0ZVRhc2tDb250YWluZXIge1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuXFx0cGFkZGluZzogNSU7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbiN0YXNrc0NvbnRhaW5lciB7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza3NDb250YWluZXIgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNsci1taW5lU2hhZnQpO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDE0cHg7XFxyXFxuXFx0YXBwZWFyYW5jZTogbm9uZTtcXHJcXG5cXHRvdXRsaW5lOiAwO1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDE3NW1zIGN1YmljLWJlemllcigwLjEsIDAuMSwgMC4yNSwgMSk7XFxyXFxufVxcclxcblxcclxcbiN0YXNrc0NvbnRhaW5lciBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOjpiZWZvcmUge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRjb250ZW50OiAnJztcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgdG9wOiAtNnB4O1xcclxcbiAgICBsZWZ0OiA5cHg7XFxyXFxuICAgIHdpZHRoOiA4cHg7XFxyXFxuICAgIGhlaWdodDogMjFweDtcXHJcXG5cXHRib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcblxcdGJvcmRlci1jb2xvcjogdmFyKC0tY2xyLW1pbmVTaGFmdCk7XFxyXFxuXFx0Ym9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcXHJcXG5cXHR0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxuXFx0b3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tzQ29udGFpbmVyIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCB7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWNsci1taW5lU2hhZnQpO1xcclxcblxcdGJvcmRlci1jb2xvcjogdmFyKC0tY2xyLW1pbmVTaGFmdCk7XFxyXFxuXFx0YmFja2dyb3VuZDogdmFyKC0tY2xyLXByaW1hcnkpO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza3NDb250YWluZXIgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkOjpiZWZvcmUge1xcclxcblxcdG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbiN0YXNrc0NvbnRhaW5lciBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgfiBsYWJlbDo6YmVmb3JlIHtcXHJcXG5cXHRjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCAxMDAlKTtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tzQ29udGFpbmVyIGxhYmVsIHtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdGZvbnQtc2l6ZTogMS4zZW07XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXHJcXG5cXHRwYWRkaW5nOiAwIDAuNDVlbSAwO1xcclxcblxcdHVzZXItc2VsZWN0OiBub25lO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4jdGFza3NDb250YWluZXIgbGFiZWw6OmJlZm9yZSB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdGNvbnRlbnQ6IGF0dHIoZGF0YS1jb250ZW50KTtcXHJcXG5cXHRjb2xvcjogdmFyKC0tY2xyLWNvbXBsZXRlZFRhc2spO1xcclxcblxcdGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDAgMCwgMCUgMTAwJSwgMCAxMDAlKTtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzOiAzcHg7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uLWNvbG9yOiB2YXIoLS1jbHItZGFyayk7XFxyXFxuXFx0dG9wOiAwcHg7XFxyXFxuXFx0dHJhbnNpdGlvbjogY2xpcC1wYXRoIDIwMG1zIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sgbGFiZWwge1xcclxcblxcdGJvdHRvbTogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1nYWxsZXJ5KTtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jbHItcHJpbWFyeSk7XFxyXFxuXFx0bWFyZ2luOiAyJTtcXHJcXG5cXHRwYWRkaW5nOiAyJTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza3NDb250YWluZXIgLnRhc2sgaW5wdXQge1xcclxcblxcdGhlaWdodDogMjVweDtcXHJcXG5cXHR3aWR0aDogMjVweDtcXHJcXG5cXHRtaW4td2lkdGg6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbiN0YXNrc0NvbnRhaW5lciBpbnB1dDpob3ZlciB7XFxyXFxuXFx0Ym9yZGVyOiAycHggc29saWQgdmFyKC0tY2xyLXByaW1hcnkpO1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbiNub1Rhc2tze1xcclxcblxcdGZvbnQtc2l6ZTogMS4zZW07XFxyXFxufVxcclxcblxcclxcbi5kZWxldGUtc3R1ZmYge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjt9XFxyXFxuXFxyXFxuLmRlbGV0ZS1zdHVmZiBidXR0b24ge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcXHJcXG5cXHRib3JkZXI6IG5vbmU7XFxyXFxuXFx0bWFyZ2luOiAwLjVlbTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcblxcdGZvbnQtc2l6ZTogMWVtO1xcclxcblxcdHBhZGRpbmc6IDAuMTFlbSAxZW0gMC4xMWVtIDFlbTtcXHJcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG4uZGVsZXRlLXN0dWZmIGJ1dHRvbjpob3ZlciB7XFxyXFxuXFx0b3BhY2l0eTogMC44O1xcclxcbn1cXHJcXG5cXHJcXG4jY2xlYXJCdG4ge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1uYXZIaWdobGlnaHQpO1xcclxcblxcdGNvbG9yOiB2YXIoLS1jbHItbWluZVNoYWZ0KTtcXHJcXG59XFxyXFxuXFxyXFxuI2RlbGV0ZUJ0biB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWRlbGV0ZSk7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWNsci1taW5lU2hhZnQpO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMzc1cHgpIHtcXHJcXG5cXHQjbWVudSwgI3Rhc2tMaXN0IHtcXHJcXG5cXHRcXHR3aWR0aDogOTJ2dztcXHJcXG5cXHR9XFxyXFxuXFx0I2NvbnRhaW5lciB7XFxyXFxuXFx0XFx0bWFyZ2luLXJpZ2h0OiAwJTtcXHJcXG5cXHRcXHRtYXJnaW4tbGVmdDogMCU7XFxyXFxuXFx0XFx0cGFkZGluZy1sZWZ0OiAxJTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcclxcblxcdC50b2RvLWxpc3R7XFxyXFxuXFx0XFx0bWFyZ2luLXRvcDogN2VtO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDExMDBweCkge1xcclxcblxcdCNjb250YWluZXIge1xcclxcblxcdFxcdG1hcmdpbi1yaWdodDogMCU7XFxyXFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDAlO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQudG9kby1saXN0e1xcclxcblxcdFxcdG1hcmdpbi10b3A6IDdlbTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi8qIEBtZWRpYSAobWluLXdpZHRoOiAxNDAwcHgpIHtcXHJcXG5cXHQudG9kby1saXN0e1xcclxcblxcdFxcdG1hcmdpbi10b3A6IDBlbTtcXHJcXG5cXHR9XFxyXFxufSAqL1xcclxcblxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MsZ0NBQWdDO0NBQ2hDLG1DQUFtQztDQUNuQyxvQkFBb0I7Q0FDcEIsMkJBQTJCO0NBQzNCLCtCQUErQjtDQUMvQixzQkFBc0I7Q0FDdEIsNkJBQTZCO0NBQzdCLHdCQUF3QjtDQUN4QixzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLHFCQUFxQjtDQUNyQiw0QkFBNEI7Q0FDNUIsdUJBQXVCO0FBQ3hCOztB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Q2pCO0FBQ0Q7O0FBRUE7Q0FDQztFQUNDLGVBQWU7Q0FDaEI7QUFDRDs7QUFFQTtDQUNDO0VBQ0MsZ0JBQWdCO0VBQ2hCLGVBQWU7Q0FDaEI7O0NBRUE7RUFDQyxlQUFlO0NBQ2hCOztBQUVEOztBQUVBOzs7O0dBSUdcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcblxcdC0tY2xyLXByaW1hcnk6IHJnYig0MSwgMTQ1LCAyNTUpO1xcclxcblxcdC0tY2xyLWxpZ2h0R3JheTogcmdiKDIzMiwgMjMyLCAyMzIpO1xcclxcblxcdC0tY2xyLWxpZ2h0OiAjZjRmNGY0O1xcclxcblxcdC0tY2xyLWRhcms6IHJnYig1OCwgNTgsIDU4KTtcXHJcXG5cXHQtLWNsci13aGl0ZTogcmdiKDI1MiwgMjUyLCAyNTIpO1xcclxcblxcdC0tY2xyLXdhcm5pbmc6ICNlOTc1NjA7XFxyXFxuXFx0LS1jbHItbmF2SGlnaGxpZ2h0OiAjNGY3Nzk0ZDA7XFxyXFxuXFx0LS1jbHItbWluZVNoYWZ0OiAjMjMyMzIzO1xcclxcblxcdC0tY2xyLWdhbGxlcnk6ICNlZGVkZWQ7XFxyXFxuXFx0LS1jbHItZWxmR3JlZW46ICMwNTgxNzk7XFxyXFxuXFx0LS1jbHItbmVidWxhOiAjY2JkYmRhO1xcclxcblxcdC0tY2xyLWNvbXBsZXRlZFRhc2s6ICNhNWIxYzA7XFxyXFxuXFx0LS1jbHItZGVsZXRlOiAjZmY0OTQ5NjI7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuXFx0cGFkZGluZy1ib3R0b206IDEwJTtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0YmFja2dyb3VuZDogdmFyKC0tY2xyLW5lYnVsYSk7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWNsci1taW5lU2hhZnQpO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG5cXHRjb2xvcjogdmFyKC0tY2xyLWRhcmspO1xcclxcblxcdGZvbnQtc2l6ZTogM3JlbTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdG1hcmdpbjogLTAuNWVtIDAuNWVtIDAuNWVtIDQwLjUlO1xcclxcblxcdHotaW5kZXg6IDI7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZUgxIHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG5cXHRcXHJcXG5cXHRkaXNwbGF5OiBub25lXFxyXFxufVxcclxcblxcclxcbiNjb250YWluZXIge1xcclxcblxcdG1hcmdpbi1yaWdodDogLTE4JTtcXHJcXG5cXHRtYXJnaW4tdG9wOiA1MHB4O1xcclxcblxcdHBhZGRpbmctbGVmdDogMSU7XFxyXFxuXFx0ZGlzcGxheTogZ3JpZDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczogXFxyXFxuXFx0ICBcXFwicHJvamVjdHNcXFwiXFxyXFxuXFx0ICBcXFwidGFza3NcXFwiXFxyXFxuXFx0ICBcXFwibG9nb1xcXCI7XFxyXFxufSBcXHJcXG5cXHJcXG4jZ2l0TG9nb0RpdkNvbnRhaW5lciB7XFxyXFxuXFx0Z3JpZC1hcmVhOiBsb2dvO1xcclxcblxcdG1hcmdpbi10b3A6IDMwcHg7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmdpdExvZ28ge1xcclxcblxcdHdpZHRoOiA4NXB4O1xcclxcblxcdGhlaWdodDogODVweDtcXHJcXG59XFxyXFxuXFxyXFxuI25hdkNvbnRhaW5lciB7XFxyXFxuXFx0LyogZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAxMHZ3O1xcclxcblxcdGdyaWQtYXJlYTogcHJvamVjdHM7XFxyXFxufVxcclxcblxcclxcbiNtZW51VG9nZ2xlIHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0bWF4LXdpZHRoOiA1MHZ3O1xcclxcblxcdHRvcDogNTBweDtcXHJcXG5cXHRsZWZ0OiA1MHB4O1xcclxcblxcdHotaW5kZXg6IDE7XFxyXFxuXFx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG5cXHQtbW96LXVzZXItc2VsZWN0OiBub25lO1xcclxcblxcdC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI21lbnVUb2dnbGUgbGkge1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcXHJcXG5cXHQtby10cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XFxyXFxuXFx0dHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xcclxcblxcdHBhZGRpbmc6IDEwcHggMHB4IDEwcHggNTBweDtcXHJcXG5cXHRmb250LXNpemU6IDIycHg7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudVRvZ2dsZSBsaTpob3ZlciB7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogVGhlIGhhbWJ1cmdlciBidXR0b24gaGlkZGVuIGluc2lkZSBhbiAjaW5wdXRNZW51IGVsZW1lbnQgKi9cXHJcXG4jbWVudVRvZ2dsZSAjaW5wdXRNZW51IHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHR3aWR0aDogMzBweDtcXHJcXG5cXHRoZWlnaHQ6IDMwcHg7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdHRvcDogLTdweDtcXHJcXG5cXHRsZWZ0OiAtNXB4O1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdFxcclxcblxcdG9wYWNpdHk6IDA7XFxyXFxuXFx0LyogaGlkZSB0aGlzICovXFxyXFxuXFx0ei1pbmRleDogMjtcXHJcXG5cXHQvKiBhbmQgcGxhY2UgaXQgb3ZlciB0aGUgaGFtYnVyZ2VyICovXFxyXFxuXFx0LXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudVRvZ2dsZSAjbGFiZWxNZW51IHtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0d2lkdGg6IDMwcHg7XFxyXFxuXFx0aGVpZ2h0OiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudVRvZ2dsZSAjbGFiZWxNZW51IHNwYW4ge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogSGFtYnVyZ2VyXFxyXFxuICovXFxyXFxuI21lbnVUb2dnbGUgI2xhYmVsTWVudSBkaXYge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdHdpZHRoOiAzMHB4O1xcclxcblxcdGhlaWdodDogMnB4O1xcclxcblxcdG1hcmdpbi1ib3R0b206IDZweDtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0YmFja2dyb3VuZDogdmFyKC0tY2xyLWVsZkdyZWVuKTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFx0ei1pbmRleDogMTtcXHJcXG5cXHQtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDRweCAwcHg7XFxyXFxuXFx0LW1zLXRyYW5zZm9ybS1vcmlnaW46IDRweCAwcHg7XFxyXFxuXFx0dHJhbnNmb3JtLW9yaWdpbjogNHB4IDBweDtcXHJcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxuXFx0LW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudVRvZ2dsZSAjbGFiZWxNZW51IGRpdjpmaXJzdC1jaGlsZCB7XFxyXFxuXFx0LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwJSAxMDAlO1xcclxcblxcdC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAwJSAxMDAlO1xcclxcblxcdHRyYW5zZm9ybS1vcmlnaW46IDAlIDEwMCU7XFxyXFxufVxcclxcblxcclxcbiNtZW51VG9nZ2xlICNsYWJlbE1lbnUgZGl2Om50aC1jaGlsZCgyKSB7XFxyXFxuXFx0LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcXHJcXG5cXHQtbXMtdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XFxyXFxuXFx0dHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XFxyXFxufVxcclxcblxcclxcbi8qIFxcclxcbiAqIENoYW5nZSB0aGUgY29sb3Igb2YgdGhlIGhhbWJ1cmdlciB3aGVuIHRvZ2dsZWRcXHJcXG4gKi9cXHJcXG4jbWVudVRvZ2dsZSAjaW5wdXRNZW51OmNoZWNrZWQrI2xhYmVsTWVudSBkaXYge1xcclxcblxcdGJhY2tncm91bmQ6IHZhcigtLWNsci1taW5lU2hhZnQpO1xcclxcblxcdFxcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIFVzZSBhYnNvbHV0ZSBwb3NpdGlvbmluZyB0byBwbGFjZSB0aGUgbWVudSBvZmYtc2NyZWVuXFxyXFxuICovXFxyXFxuI21lbnUge1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHR3aWR0aDogMTAwdnc7XFxyXFxuXFx0bWF4LXdpZHRoOiA5MDBweDtcXHJcXG5cXHRtYXJnaW46IC04MHB4IDAgMCAtNTBweDtcXHJcXG5cXHRwYWRkaW5nOiA1MHB4IDBweCA1MHB4IDBweDtcXHJcXG5cXHRwYWRkaW5nLXRvcDogMTI1cHg7XFxyXFxuXFx0YmFja2dyb3VuZDogdmFyKC0tY2xyLWxpZ2h0KTtcXHJcXG5cXHRib3gtc2hhZG93OiBcXHJcXG5cXHRcXHRcXHRcXHQwIDIuOHB4IDIuMnB4IHJnYmEoMCwgMCwgMCwgMC4wMzQpLFxcclxcblxcdFxcdFxcdFxcdDAgNi43cHggNS4zcHggcmdiYSgwLCAwLCAwLCAwLjA0OCksXFxyXFxuXFx0XFx0XFx0XFx0MCAxMi41cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDYpLFxcclxcblxcdFxcdFxcdFxcdDAgMjIuM3B4IDE3LjlweCByZ2JhKDAsIDAsIDAsIDAuMDcyKSxcXHJcXG5cXHRcXHRcXHRcXHQwIDQxLjhweCAzMy40cHggcmdiYSgwLCAwLCAwLCAwLjA4Nik7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXHJcXG5cXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuXFx0LyogSGlkZSB0aGUgbWVudSBvZmYtc2NyZWVuIHRvIHRoZSBsZWZ0ICovXFxyXFxuXFx0bGVmdDogMDtcXHJcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IGxlZnQgMC4zcyBlYXNlO1xcclxcblxcdC1vLXRyYW5zaXRpb246IGxlZnQgMC4zcyBlYXNlO1xcclxcblxcdHRyYW5zaXRpb246IGxlZnQgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKlxcclxcbiAqIFNsaWRlIHRoZSBtZW51IGluIGZyb20gbGVmdCB3aGVuIHRoZSAjaW5wdXRNZW51IGlzIGNoZWNrZWRcXHJcXG4gKi9cXHJcXG4jbWVudVRvZ2dsZSAjaW5wdXRNZW51OmNoZWNrZWR+dWwge1xcclxcblxcclxcblxcdHRyYW5zaXRpb246IGxlZnQgMC4zcyBlYXNlO1xcclxcblxcdGxlZnQ6IC0yMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1uYW1lIHtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWltZyB7XFxyXFxuXFx0d2lkdGg6IDEuN2VtO1xcclxcblxcdHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmUtbGlzdCB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWVsZkdyZWVuKTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAzNXB4O1xcclxcblxcdG1hcmdpbjogMHB4IDI1cHggMHB4IDI1cHg7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWNsci1saWdodCk7XFxyXFxufVxcclxcblxcclxcbiNteUZvcm0ge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRtYXJnaW4tdG9wOiAxLjhlbTtcXHJcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcclxcblxcdFxcclxcbn1cXHJcXG5cXHJcXG4jbXlGb3JtIGZvcm0sICNteVRhc2tzIGZvcm0ge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGZvbnQtc2l6ZTogMS4zZW07XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXdoaXRlKTtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jbHItZWxmR3JlZW4pO1xcclxcblxcdHdpZHRoOiAxNWVtO1xcclxcblxcdHBhZGRpbmc6IDJlbSAuNmVtIDEuNWVtIC42ZW07XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZFByb2plY3RGb3JtIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkUHJvamVjdEJ1dHRvbiB7XFxyXFxuXFx0bWFyZ2luLXRvcDogMzBweDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItZWxmR3JlZW4pO1xcclxcblxcdGNvbG9yOiB2YXIoLS1jbHItbGlnaHQpO1xcclxcblxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA0MnB4O1xcclxcblxcdGZvbnQtc2l6ZTogMS40ZW07XFxyXFxuXFx0cGFkZGluZzogMiUgMTAlIDIlIDglO1xcclxcblxcdGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZFByb2plY3RCdXR0b246aG92ZXIge1xcclxcblxcdGNvbG9yOiB2YXIoLS1jbHItbGlnaHQpO1xcclxcblxcdG9wYWNpdHk6IDAuODtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZFByb2plY3RCdXR0b24gc3BhbiB7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjZlbTtcXHJcXG5cXHRmb250LXdlaWdodDogMzAwO1xcclxcblxcdHBhZGRpbmc6IDBweCAxMHB4IDBweCAzcHg7XFxyXFxuXFx0XFxyXFxufVxcclxcblxcclxcbiNzdWJtaXRCdG4sICN0YXNrU3VibWl0QnV0dG9uIHtcXHJcXG4gXFx0Zm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xcclxcbiBcXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItZWxmR3JlZW4pO1xcclxcbiBcXHRjb2xvcjogdmFyKC0tY2xyLWxpZ2h0KTtcXHJcXG4gXFx0Ym9yZGVyOiBub25lO1xcclxcbiBcXHRib3JkZXItcmFkaXVzOiAzMnB4O1xcclxcbiBcXHRmb250LXNpemU6IDFlbTtcXHJcXG4gXFx0cGFkZGluZzogMiUgMzAlIDIlIDMwJTtcXHJcXG5cXHQgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdEJ0bjpob3ZlciwgI3Rhc2tTdWJtaXRCdG46aG92ZXIge1xcclxcblxcdG9wYWNpdHk6IDAuODtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3RMYWJlbCwgI3Rhc2tMYWJlbCB7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjNlbTtcXHJcXG5cXHRmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdElucHV0LCAjdGFza0lucHV0IHtcXHJcXG5cXHRmb250LXNpemU6IDAuOGVtO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuXFx0cGFkZGluZzogMHB4IDE1cHggMHB4IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGVQcm9qZWN0QnRuIHtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jbHItbWluZVNoYWZ0KTtcXHJcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1jbHItd2FybmluZyk7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXHJcXG5cXHRwYWRkaW5nOiAzcHggN3B4IDJweCA3cHg7XFxyXFxuXFx0Zm9udC1zaXplOiAwLjdlbTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdG1hcmdpbjogMC41JSAyJSAwIDIlO1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza0xpc3Qge1xcclxcblxcdGdyaWQtYXJlYTogdGFza3M7XFxyXFxuXFx0LyogbWFyZ2luLWJvdHRvbTogMTMwdmg7ICovXFxyXFxuXFx0LyogbWFyZ2luLXRvcDogNTB2aDsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tbGlzdCB7XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG5cXHRtYXJnaW4tdG9wOiA1ZW07XFxyXFxuXFx0YmFja2dyb3VuZDogdmFyKC0tY2xyLWdhbGxlcnkpO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuXFx0d2lkdGg6IDEwMHZ3O1xcclxcblxcdG1heC13aWR0aDogOTAwcHg7XFxyXFxuXFx0cGFkZGluZy10b3A6IDMlO1xcclxcblxcdHBhZGRpbmctYm90dG9tOiAxJTtcXHJcXG5cXHRib3gtc2hhZG93OiBcXHJcXG5cXHRcXHRcXHRcXHQwIDIuOHB4IDIuMnB4IHJnYmEoMCwgMCwgMCwgMC4wMzQpLFxcclxcblxcdFxcdFxcdFxcdDAgNi43cHggNS4zcHggcmdiYSgwLCAwLCAwLCAwLjA0OCksXFxyXFxuXFx0XFx0XFx0XFx0MCAxMi41cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDYpLFxcclxcblxcdFxcdFxcdFxcdDAgMjIuM3B4IDE3LjlweCByZ2JhKDAsIDAsIDAsIDAuMDcyKSxcXHJcXG5cXHRcXHRcXHRcXHQwIDQxLjhweCAzMy40cHggcmdiYSgwLCAwLCAwLCAwLjA4NiksXFxyXFxuXFx0XFx0XFx0XFx0MCAxMDBweCA4MHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxyXFxufVxcclxcblxcclxcbi5hZGRNYXJnaW5BZnRlckNsaWNrIHtcXHJcXG5cXHRtYXJnaW4tdG9wOiAyNnZoO1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5yZW1vdmVNYXJnaW5BZnRlckNsaWNrIHtcXHJcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTcwJSk7XFxyXFxuXFx0LyogbWFyZ2luLXRvcDogLTEwdmg7ICovXFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnRvZG8taGVhZGVyIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItbGlnaHQpO1xcclxcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNsci1lbGZHcmVlbik7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXHJcXG5cXHRtYXJnaW46IDAlIDUlIDUlIDUlO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1jb3VudCB7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tYm9keSB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWxpZ2h0KTtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jbHItZWxmR3JlZW4pO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuXFx0cGFkZGluZzogNSUgMSUgMCUgMSU7XFxyXFxuXFx0bWFyZ2luOiA1JTtcXHJcXG59XFxyXFxuXFxyXFxuI215VGFza3Mge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNhZGRUYXNrQnV0dG9uIHtcXHJcXG5cXHRmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XFxyXFxuIFxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1lbGZHcmVlbik7XFxyXFxuIFxcdGNvbG9yOiB2YXIoLS1jbHItbGlnaHQpO1xcclxcbiBcXHRib3JkZXI6IG5vbmU7XFxyXFxuIFxcdGJvcmRlci1yYWRpdXM6IDMycHg7XFxyXFxuIFxcdGZvbnQtc2l6ZTogMS4xZW07XFxyXFxuIFxcdHBhZGRpbmc6IDIlIDEwJSAyJSA0JTtcXHJcXG5cXHQgZGlzcGxheTogZmxleDtcXHJcXG5cXHQgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHQgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG5cXHQgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZFRhc2tCdXR0b246aG92ZXIge1xcclxcblxcdG9wYWNpdHk6IDAuODtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZFRhc2tCdXR0b24gc3BhbiB7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjVlbTtcXHJcXG5cXHRmb250LXdlaWdodDogNDAwO1xcclxcblxcdHBhZGRpbmc6IDBweCAxMHB4IDBweCAxM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4jY3JlYXRlVGFza0NvbnRhaW5lciB7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXHJcXG5cXHRwYWRkaW5nOiA1JTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI3Rhc2tzQ29udGFpbmVyIHtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcblxcdG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxufVxcclxcblxcclxcbiN0YXNrc0NvbnRhaW5lciBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0Ym9yZGVyOiAycHggc29saWQgdmFyKC0tY2xyLW1pbmVTaGFmdCk7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMTRweDtcXHJcXG5cXHRhcHBlYXJhbmNlOiBub25lO1xcclxcblxcdG91dGxpbmU6IDA7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdHRyYW5zaXRpb246IGJhY2tncm91bmQgMTc1bXMgY3ViaWMtYmV6aWVyKDAuMSwgMC4xLCAwLjI1LCAxKTtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tzQ29udGFpbmVyIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06OmJlZm9yZSB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdGNvbnRlbnQ6ICcnO1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB0b3A6IC02cHg7XFxyXFxuICAgIGxlZnQ6IDlweDtcXHJcXG4gICAgd2lkdGg6IDhweDtcXHJcXG4gICAgaGVpZ2h0OiAyMXB4O1xcclxcblxcdGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuXFx0Ym9yZGVyLWNvbG9yOiB2YXIoLS1jbHItbWluZVNoYWZ0KTtcXHJcXG5cXHRib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xcclxcblxcdHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG5cXHRvcGFjaXR5OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza3NDb250YWluZXIgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkIHtcXHJcXG5cXHRjb2xvcjogdmFyKC0tY2xyLW1pbmVTaGFmdCk7XFxyXFxuXFx0Ym9yZGVyLWNvbG9yOiB2YXIoLS1jbHItbWluZVNoYWZ0KTtcXHJcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxyXFxufVxcclxcblxcclxcbiN0YXNrc0NvbnRhaW5lciBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQ6OmJlZm9yZSB7XFxyXFxuXFx0b3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tzQ29udGFpbmVyIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCB+IGxhYmVsOjpiZWZvcmUge1xcclxcblxcdGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAwIDEwMCUpO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza3NDb250YWluZXIgbGFiZWwge1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjNlbTtcXHJcXG5cXHRmb250LXdlaWdodDogNDAwO1xcclxcblxcdHBhZGRpbmc6IDAgMC40NWVtIDA7XFxyXFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbiN0YXNrc0NvbnRhaW5lciBsYWJlbDo6YmVmb3JlIHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0Y29udGVudDogYXR0cihkYXRhLWNvbnRlbnQpO1xcclxcblxcdGNvbG9yOiB2YXIoLS1jbHItY29tcGxldGVkVGFzayk7XFxyXFxuXFx0Y2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMCAwLCAwJSAxMDAlLCAwIDEwMCUpO1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcblxcdHRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IDNweDtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb24tY29sb3I6IHZhcigtLWNsci1kYXJrKTtcXHJcXG5cXHR0b3A6IDBweDtcXHJcXG5cXHR0cmFuc2l0aW9uOiBjbGlwLXBhdGggMjAwbXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayBsYWJlbCB7XFxyXFxuXFx0Ym90dG9tOiAwcHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWdhbGxlcnkpO1xcclxcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNsci1wcmltYXJ5KTtcXHJcXG5cXHRtYXJnaW46IDIlO1xcclxcblxcdHBhZGRpbmc6IDIlO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbiN0YXNrc0NvbnRhaW5lciAudGFzayBpbnB1dCB7XFxyXFxuXFx0aGVpZ2h0OiAyNXB4O1xcclxcblxcdHdpZHRoOiAyNXB4O1xcclxcblxcdG1pbi13aWR0aDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tzQ29udGFpbmVyIGlucHV0OmhvdmVyIHtcXHJcXG5cXHRib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jbHItcHJpbWFyeSk7XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuI25vVGFza3N7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjNlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZS1zdHVmZiB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO31cXHJcXG5cXHJcXG4uZGVsZXRlLXN0dWZmIGJ1dHRvbiB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xcclxcblxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRtYXJnaW46IDAuNWVtO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDEycHg7XFxyXFxuXFx0Zm9udC1zaXplOiAxZW07XFxyXFxuXFx0cGFkZGluZzogMC4xMWVtIDFlbSAwLjExZW0gMWVtO1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxufVxcclxcbi5kZWxldGUtc3R1ZmYgYnV0dG9uOmhvdmVyIHtcXHJcXG5cXHRvcGFjaXR5OiAwLjg7XFxyXFxufVxcclxcblxcclxcbiNjbGVhckJ0biB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLW5hdkhpZ2hsaWdodCk7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWNsci1taW5lU2hhZnQpO1xcclxcbn1cXHJcXG5cXHJcXG4jZGVsZXRlQnRuIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItZGVsZXRlKTtcXHJcXG5cXHRjb2xvcjogdmFyKC0tY2xyLW1pbmVTaGFmdCk7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAzNzVweCkge1xcclxcblxcdCNtZW51LCAjdGFza0xpc3Qge1xcclxcblxcdFxcdHdpZHRoOiA5MnZ3O1xcclxcblxcdH1cXHJcXG5cXHQjY29udGFpbmVyIHtcXHJcXG5cXHRcXHRtYXJnaW4tcmlnaHQ6IDAlO1xcclxcblxcdFxcdG1hcmdpbi1sZWZ0OiAwJTtcXHJcXG5cXHRcXHRwYWRkaW5nLWxlZnQ6IDElO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuXFx0LnRvZG8tbGlzdHtcXHJcXG5cXHRcXHRtYXJnaW4tdG9wOiA3ZW07XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMTEwMHB4KSB7XFxyXFxuXFx0I2NvbnRhaW5lciB7XFxyXFxuXFx0XFx0bWFyZ2luLXJpZ2h0OiAwJTtcXHJcXG5cXHRcXHRtYXJnaW4tbGVmdDogMCU7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC50b2RvLWxpc3R7XFxyXFxuXFx0XFx0bWFyZ2luLXRvcDogN2VtO1xcclxcblxcdH1cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLyogQG1lZGlhIChtaW4td2lkdGg6IDE0MDBweCkge1xcclxcblxcdC50b2RvLWxpc3R7XFxyXFxuXFx0XFx0bWFyZ2luLXRvcDogMGVtO1xcclxcblxcdH1cXHJcXG59ICovXFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBnaXRJbWFnZSBmcm9tICcuL2ltYWdlcy9naXQtbG9nby5wbmcnO1xyXG5cclxuZnVuY3Rpb24gRE9NSW50ZXJmYWNlKCkge1xyXG5cclxuXHQvL2NhdGNoaW5nIERPTVxyXG5cdGxldCBnaXRMb2dvRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dpdExvZ29EaXYnKTtcclxuXHJcblx0bGV0IGlucHV0TWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dE1lbnUnKTtcclxuXHJcblx0bGV0IHRhc2tMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tMaXN0Jyk7XHJcblxyXG5cdC8vcHJvamVjdHNcclxuXHRsZXQgcHJvamVjdFN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXRCdG4nKTtcclxuXHRsZXQgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0QnV0dG9uJyk7XHJcblx0bGV0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ1tuZXdQcm9qZWN0Rm9ybV0nKTtcclxuXHRsZXQgZGVsZXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGVQcm9qZWN0QnRuJyk7XHJcblx0bGV0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzQ29udGFpbmVyJyk7XHJcblx0bGV0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0SW5wdXQnKTtcclxuXHJcblxyXG5cdFxyXG5cdC8vdGFza3NcclxuXHRsZXQgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRUYXNrQnV0dG9uJyk7XHJcblx0bGV0IHRhc2tTdWJtaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1N1Ym1pdEJ1dHRvbicpO1xyXG5cdGxldCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrc0NvbnRhaW5lcicpO1xyXG5cdGxldCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFRpdGxlJyk7XHJcblx0bGV0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Rhc2tGb3JtJyk7XHJcblx0bGV0IHRhc2tJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrSW5wdXQnKTtcclxuXHJcblxyXG5cdFxyXG5cdC8vZ2l0IGxvZ28gaW1nXHJcblx0bGV0IGdpdExvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuXHRnaXRMb2dvLnNyYyA9IGdpdEltYWdlO1xyXG5cdGdpdExvZ28uY2xhc3NMaXN0LmFkZCgnZ2l0TG9nbycpO1xyXG5cdGdpdExvZ29EaXYuYXBwZW5kQ2hpbGQoZ2l0TG9nbyk7XHJcblxyXG5cclxuXHQvLyBET00gd2hlbiBwYWdlIGxvYWRzIGV2ZW50c1xyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG5cdFx0dGFza3NDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHR9KTtcclxuXHJcblx0Ly8gRE9NIGNsaWNrIGV2ZW50c1xyXG5cdGlucHV0TWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZE1hcmdpbik7XHJcblx0aW5wdXRNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZUgxKTtcclxuXHJcblxyXG5cclxuXHRhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkVGFzayk7XHJcblx0YWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Gb3JtKTtcclxuXHRwcm9qZWN0U3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VGb3JtKTtcclxuXHR0YXNrU3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VUYXNrRm9ybSk7XHJcblxyXG5cclxuXHQvL0Z1bmN0aW9ucyBmb3IgYnV0dG9ucyBhbmQgYWRkaW5nIG1hcmdpblxyXG5cdGZ1bmN0aW9uIG9wZW5Gb3JtKCkge1xyXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUZvcm1cIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHRcdGFkZFByb2plY3RCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gY2xvc2VGb3JtKCkge1xyXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUZvcm1cIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cdFx0YWRkUHJvamVjdEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cdH1cclxuXHJcblxyXG5cdGZ1bmN0aW9uIGFkZE1hcmdpbigpIHtcclxuXHRcdHRhc2tMaXN0LnN0eWxlLm1hcmdpblRvcCA9IG51bGw7XHJcblx0XHR0YXNrTGlzdC5jbGFzc0xpc3QudG9nZ2xlKCdyZW1vdmVNYXJnaW5BZnRlckNsaWNrJyk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBoaWRlSDEoKSB7XHJcblx0XHRsZXQgaDFFbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaDEnKVswXTtcclxuXHRcdGgxRWxlLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGVIMScpO1xyXG5cdFx0XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBhZGRUYXNrKCkge1xyXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteVRhc2tzXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblx0XHRhZGRUYXNrQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGNsb3NlVGFza0Zvcm0oKSB7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15VGFza3NcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cdFx0YWRkVGFza0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cdH1cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBET01JbnRlcmZhY2U7IiwiaW1wb3J0IERPTUludGVyZmFjZSBmcm9tICcuL0RPTUludGVyZmFjZS5qcyc7XHJcbi8vIGltcG9ydCByZW5kZXJQcm9qZWN0cyBmcm9tICcuL3JlbmRlclByb2plY3RzLmpzJztcclxuLy8gaW1wb3J0IGRlbGV0ZVByb2plY3RzIGZyb20gJy4vZGVsZXRlUHJvamVjdHMuanMnO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIERPTUludGVyZmFjZSk7XHJcbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBkZWxldGVQcm9qZWN0cyk7XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0cygpIHtcclxuXHJcblx0Y29uc3QgcHJvamVjdCA9ICgoKSA9PiB7XHJcblxyXG5cdFx0Ly9jcmVhdGUgbmV3IFByb2plY3RcclxuXHRcdGNvbnN0IGNyZWF0ZVByb2plY3QgPSAoYSkgPT4ge1xyXG5cclxuXHRcdFx0Y29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcblx0XHRcdHByb2plY3QuY2xhc3NMaXN0LmFkZCgnbGlzdC1uYW1lJyk7XHJcblx0XHRcdHByb2plY3Quc2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QnLCBhKTtcclxuXHRcdFx0cHJvamVjdC5pZCA9IGE7XHJcblx0XHRcdGNvbnN0IHByb2plY3RJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuXHRcdFx0cHJvamVjdEltZy5jbGFzc0xpc3QuYWRkKCdsaXN0LWltZycpO1xyXG5cdFx0XHRwcm9qZWN0SW1nLnNyYyA9ICcuLi9zcmMvaW1hZ2VzL3N2Zy9saXN0LnN2Zyc7XHJcblx0XHRcdHByb2plY3RJbWcuYWx0ID0gJ2xpc3QnO1xyXG5cdFx0XHRjb25zdCBkZWxldGVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblx0XHRcdGRlbGV0ZVByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlUHJvamVjdEJ0bicpO1xyXG5cdFx0XHRkZWxldGVQcm9qZWN0QnV0dG9uLmlubmVyVGV4dCA9ICdYJztcclxuXHRcdFx0cHJvamVjdC5hcHBlbmQocHJvamVjdEltZywgYSwgZGVsZXRlUHJvamVjdEJ1dHRvbik7XHJcblx0XHRcdHByb2plY3RzQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0KTtcclxuXHRcdFx0YWRkUHJvamVjdCgpO1xyXG5cclxuXHRcdH07XHJcblxyXG5cdFx0Ly8gYWRkIG5ldyBwcm9qZWN0IHRvIGxvY2FsIHN0b3JhZ2VcclxuXHRcdGNvbnN0IGFkZFByb2plY3QgPSAoKSA9PiB7XHJcblx0XHRcdC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdC8vaWYgaW5wdXQgaXMgZW1wdHksIGRvbid0IGFkZCBwcm9qZWN0XHJcblx0XHRcdGlmIChwcm9qZWN0SW5wdXQudmFsdWUgPT09ICcnKSB7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGxldCBuZXdQcm9qZWN0ID0gcHJvamVjdElucHV0LnZhbHVlO1xyXG5cdFx0XHRcdGxldCBuZXdQcm9qZWN0T2JqID0ge1xyXG5cdFx0XHRcdFx0cHJvamVjdE5hbWU6IG5ld1Byb2plY3RcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdGxldCBuZXdQcm9qZWN0U3RyaW5nID0gSlNPTi5zdHJpbmdpZnkobmV3UHJvamVjdE9iaik7XHJcblx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0obmV3UHJvamVjdCwgbmV3UHJvamVjdFN0cmluZyk7XHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2cobG9jYWxTdG9yYWdlKTtcclxuXHRcdFx0XHRwcm9qZWN0SW5wdXQudmFsdWUgPSAnJztcclxuXHRcdFx0XHRsb2FkUHJvamVjdHMoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHJcblx0XHR9XHJcblxyXG5cclxuXHRcdC8vbG9hZCBwcm9qZWN0cyBmcm9tIGxvY2FsU3RvcmFnZSB3aGVuIHBhZ2UgbG9hZHNcclxuXHJcblxyXG5cdFx0Y29uc3QgbG9hZFByb2plY3RzID0gKCkgPT4ge1xyXG5cdFx0XHRsZXQgcHJvamVjdHMgPSBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpO1xyXG5cdFx0XHQvLyByZW1vdmUgdGFza3Mga2V5IGZyb20gcHJvamVjdHMgdmFyaWFibGVcclxuXHRcdFx0ZnVuY3Rpb24gZGVsZXRlQnlWYWwodmFsKSB7XHJcblx0XHRcdFx0Zm9yIChsZXQga2V5IGluIHByb2plY3RzKSB7XHJcblx0XHRcdFx0XHRpZiAocHJvamVjdHNba2V5XSA9PSB2YWwpIGRlbGV0ZSBwcm9qZWN0c1trZXldO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRkZWxldGVCeVZhbCgndGFza3MnKTtcclxuXHJcblxyXG5cdFx0XHRjb25zb2xlLmxvZyhwcm9qZWN0cyk7XHJcblx0XHRcdHByb2plY3RzLmZvckVhY2goZnVuY3Rpb24ocHJvamVjdCkge1xyXG5cdFx0XHRcdC8vaWYgcHJvamVjdCBhbHJlYWR5IGV4aXN0cywgZG9uJ3QgYWRkIGl0IGFnYWluXHJcblx0XHRcdFx0aWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByb2plY3QpKSB7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGNyZWF0ZVByb2plY3QocHJvamVjdCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9XHJcblxyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGFkZFByb2plY3QsXHJcblx0XHRcdGxvYWRQcm9qZWN0cyxcclxuXHRcdFx0Y3JlYXRlUHJvamVjdFxyXG5cdFx0fTtcclxuXHJcblx0XHRcclxuXHR9KSgpO1xyXG5cclxuXHQvL2FkZCBldmVudCBsaXN0ZW5lciB0byBjcmVhdGUgcHJvamVjdCB3aGVuIGZvcm0gaXMgc3VibWl0dGVkXHJcblx0bmV3UHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZ2V0UHJvamVjdE5hbWUpO1xyXG5cclxuXHQvL2dldCBwcm9qZWN0IG5hbWUgZnJvbSBpbnB1dCBhbmQgY2FsbCBjcmVhdGVQcm9qZWN0IG1ldGhvZFxyXG5cdGZ1bmN0aW9uIGdldFByb2plY3ROYW1lKGV2ZW50KSB7XHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0bGV0IHByb2plY3ROYW1lID0gcHJvamVjdElucHV0LnZhbHVlO1xyXG5cdFx0Ly8gaWYgcHJvamVjdCBleGlzdHMgaW4gbG9jYWwgc3RvcmFnZSBvciBwcm9qZWN0IG5hbWUgaXMgZW1wdHksIGRvbid0IGFkZCBpdCBhZ2FpblxyXG5cdFx0aWYgKHByb2plY3ROYW1lID09PSAnJ3x8IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2plY3ROYW1lKSkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRwcm9qZWN0LmNyZWF0ZVByb2plY3QocHJvamVjdE5hbWUpO1xyXG5cdFx0fVxyXG5cdFxyXG5cdFx0Y29uc29sZS5sb2cocHJvamVjdE5hbWUpO1xyXG5cdFx0cmV0dXJuIHByb2plY3ROYW1lO1xyXG5cdH1cclxuXHJcblx0Ly9sb2FkIHByb2plY3RzIGZyb20gbG9jYWxTdG9yYWdlIHdoZW4gcGFnZSBsb2Fkc1xyXG5cdHByb2plY3QubG9hZFByb2plY3RzKCk7XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUHJvamVjdHM7IiwiaW1wb3J0IERPTUludGVyZmFjZSBmcm9tICcuL0RPTUludGVyZmFjZS5qcyc7XHJcbi8vIGltcG9ydCBjcmVhdGVQcm9qZWN0cyBmcm9tICcuL2NyZWF0ZVByb2plY3RzLmpzJztcclxuLy8gaW1wb3J0IGRlbGV0ZVByb2plY3RzIGZyb20gJy4vZGVsZXRlUHJvamVjdHMuanMnO1xyXG5pbXBvcnQgcmVuZGVyVGFza3MgZnJvbSAnLi9yZW5kZXJUYXNrcy5qcyc7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgRE9NSW50ZXJmYWNlKTtcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHJlbmRlclRhc2tzKTtcclxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGNyZWF0ZVByb2plY3RzKTtcclxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGRlbGV0ZVByb2plY3RzKTtcclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUYXNrcygpIHtcclxuXHJcblxyXG5cclxuXHQvLyBjcmVhdGUgYW4gSUlGZSB0byBjcmVhdGUgdGFza3NcclxuXHJcblx0Y29uc3QgdGFzayA9ICgoKSA9PiB7XHJcblxyXG5cdFx0bGV0IHRhc2tBcnJheSA9IFtdO1xyXG5cclxuXHRcdC8vY3JlYXRlIG5ldyB0YXNrIHVzaW5nIHRhc2tJbnB1dCBhbmQgYWRkIGl0IHRvIHRoZSBzZWxlY3RlZCBwcm9qZWN0IGFuZCBhZGQgaXQgdG8gbG9jYWwgc3RvcmFnZVxyXG5cdFx0Y29uc3QgY3JlYXRlTmV3VGFzayA9IChwcm9qZWN0TmFtZSwgdGFza05hbWUpID0+IHtcclxuXHRcdFx0Ly8gcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlLWxpc3QnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdCcpO1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhwcm9qZWN0KTtcclxuXHJcblx0XHRcdGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdFx0dGFzay5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XHJcblx0XHRcdHRhc2suc2V0QXR0cmlidXRlKCdkYXRhLXRhc2snLCB0YXNrTmFtZSk7XHJcblx0XHRcdHRhc2suc2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QtbmFtZScsIHByb2plY3ROYW1lKTtcclxuXHRcdFx0Y29uc3QgdGFza0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuXHRcdFx0dGFza0lucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xyXG5cdFx0XHR0YXNrSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIHRhc2tOYW1lKTtcclxuXHRcdFx0dGFza0lucHV0LnNldEF0dHJpYnV0ZSgnZGF0YS10YXNrJywgdGFza05hbWUpO1xyXG5cdFx0XHR0YXNrSW5wdXQuY2xhc3NMaXN0LmFkZCgndGFzay1pbnB1dCcpO1xyXG5cdFx0XHQvLyB0YXNrSW5wdXQuaWQgPSB0YXNrTmFtZTtcclxuXHRcdFx0Y29uc3QgdGFza0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuXHRcdFx0dGFza0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgdGFza05hbWUpO1xyXG5cdFx0XHR0YXNrTGFiZWwuY2xhc3NMaXN0LmFkZCgndGFzay1sYWJlbCcpO1xyXG5cdFx0XHR0YXNrTGFiZWwuc2V0QXR0cmlidXRlKCdkYXRhLWNvbnRlbnQnLCB0YXNrTmFtZSk7XHJcblx0XHRcdHRhc2tMYWJlbC5pbm5lclRleHQgPSB0YXNrTmFtZTtcclxuXHJcblx0XHRcdHRhc2suYXBwZW5kKHRhc2tJbnB1dCwgdGFza0xhYmVsKTtcclxuXHRcdFx0dGFza3NDb250YWluZXIuYXBwZW5kKHRhc2spO1xyXG5cclxuXHRcdFx0Ly9hZGQgdGFzayB0byBsb2NhbCBzdG9yYWdlXHJcblx0XHRcdGFkZFRhc2socHJvamVjdE5hbWUsIHRhc2tOYW1lKTtcclxuXHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGFkZCB0YXNrcyBsb2NhbCBzdG9yYWdlXHJcblx0XHRjb25zdCBhZGRUYXNrID0gKHByb2plY3ROYW1lLCB0YXNrTmFtZSkgPT4ge1xyXG5cclxuXHJcblx0XHRcdGxldCB0YXNrT2JqID0ge1xyXG5cdFx0XHRcdFtwcm9qZWN0TmFtZV0gOiB0YXNrTmFtZSxcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly9hZGQgdGFzayB0byBzZWxlY3RlZCBwcm9qZWN0XHJcblx0XHRcdGlmKHByb2plY3ROYW1lKSB7XHJcblx0XHRcdFx0Ly8gbGV0IHRhc2tBcnJheSA9IFtdO1xyXG5cdFx0XHRcdHRhc2tBcnJheS5wdXNoKHRhc2tPYmopO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGxldCB0YXNrQXJyYXkgPSBbXTtcclxuXHRcdFx0XHR0YXNrQXJyYXkucHVzaCh0YXNrT2JqKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrQXJyYXkpKTtcclxuXHRcdFx0dGFza0lucHV0LnZhbHVlID0gJyc7XHJcblx0XHRcdGxvYWRUYXNrcygpO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gY29uc29sZS5sb2cobG9jYWxTdG9yYWdlKVxyXG5cdFx0fVxyXG5cclxuXHJcblxyXG5cdFx0Ly9sb2FkIHRhc2tzIGZyb20gbG9jYWwgc3RvcmFnZVxyXG5cdFx0Y29uc3QgbG9hZFRhc2tzID0gKCkgPT4ge1xyXG5cdFx0XHJcblxyXG5cdFx0XHRsZXQgdGFza3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKTtcclxuXHRcdFx0bGV0IHRhc2tzUGFyc2VkID0gSlNPTi5wYXJzZSh0YXNrcyk7XHJcblxyXG5cdFx0XHRsZXQgYXJyYXlPZlByb2plY3ROYW1lcyA9IFtdO1xyXG5cdFx0XHRsZXQgYXJyYXlPZlRhc2tOYW1lcyA9IFtdO1xyXG5cclxuXHJcblx0XHRcdGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHRhc2tzUGFyc2VkKSkge1xyXG5cdFx0XHRcdGxldCB0YXNrSW5kZXggPSBrZXk7XHJcblx0XHRcdFx0bGV0IHRhc2sgPSB2YWx1ZTtcclxuXHRcdFx0XHRmb3IgKGNvbnN0IFtwcm9qZWN0TmFtZSwgdGFza05hbWVdIG9mIE9iamVjdC5lbnRyaWVzKHRhc2spKSB7XHJcblx0XHRcdFx0XHRsZXQgbmFtZU9mUHJvamVjdCA9IHByb2plY3ROYW1lO1xyXG5cdFx0XHRcdFx0bGV0IG5hbWVPZlRhc2sgPSB0YXNrTmFtZTtcclxuXHRcdFx0XHRcdGFycmF5T2ZQcm9qZWN0TmFtZXMucHVzaChuYW1lT2ZQcm9qZWN0KTtcclxuXHRcdFx0XHRcdGFycmF5T2ZUYXNrTmFtZXMucHVzaChuYW1lT2ZUYXNrKTtcclxuXHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcclxuXHRcdFx0ICBcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHJcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlPZlByb2plY3ROYW1lcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdC8vaWYgdGFzayBhbHJlYWR5IGV4aXN0cywgZG9uJ3QgY3JlYXRlIGl0IGFnYWluXHJcblx0XHRcdFx0aWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGFzaz1cIiR7YXJyYXlPZlRhc2tOYW1lc1tpXX1cIl1gKSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRjcmVhdGVOZXdUYXNrKGFycmF5T2ZQcm9qZWN0TmFtZXNbaV0sIGFycmF5T2ZUYXNrTmFtZXNbaV0pO1xyXG5cdFx0XHRcdH1cclxuXHJcblxyXG5cdFx0XHR9XHJcblxyXG5cclxuXHJcblx0XHRcdGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSk7XHJcblxyXG5cclxuXHRcdH1cclxuXHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRjcmVhdGVOZXdUYXNrLFxyXG5cdFx0YWRkVGFzayxcclxuXHRcdGxvYWRUYXNrcyxcclxuXHRcdFxyXG5cdH1cclxuXHJcblx0fSkoKTtcclxuXHJcblxyXG5cclxuXHJcblx0XHJcblx0XHJcblx0Ly9jcmVhdGUgbmV3IHRhc2sgdXNpbmcgdGFza0lucHV0IGFuZCBhZGQgaXQgdG8gdGhlIHNlbGVjdGVkIHByb2plY3RcclxuXHRuZXdUYXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0bGV0IHByb2plY3RzTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUtbGlzdCcpLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0Jyk7XHJcblx0XHRsZXQgdGFza3NOYW1lID0gdGFza0lucHV0LnZhbHVlO1xyXG5cdFx0Ly8gaWYgcHJvamVjdCBleGlzdHMgaW4gbG9jYWwgc3RvcmFnZSBvciBwcm9qZWN0IG5hbWUgaXMgZW1wdHksIGRvbid0IGFkZCBpdCBhZ2FpblxyXG5cdFx0aWYgKHRhc2tzTmFtZSAhPT0gJycpIHtcclxuXHRcdFx0Ly8gaWYgcHJvamVjdCBoYXMgYSBjbGFzcyBvZiBhY3RpdmUtbGlzdCB0aGVuIGFkZCB0YXNrIHRvIHRoYXQgcHJvamVjdFxyXG5cdFx0XHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZS1saXN0JykpIHtcclxuXHRcdFx0XHR0YXNrLmNyZWF0ZU5ld1Rhc2socHJvamVjdHNOYW1lLCB0YXNrc05hbWUpO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHRhc2tJbnB1dC52YWx1ZSA9ICcnO1xyXG5cdH0pO1xyXG5cclxuXHR0YXNrLmxvYWRUYXNrcygpO1xyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRhc2tzOyIsImltcG9ydCBET01JbnRlcmZhY2UgZnJvbSAnLi9ET01JbnRlcmZhY2UuanMnO1xyXG4vLyBpbXBvcnQgcmVuZGVyUHJvamVjdHMgZnJvbSAnLi9yZW5kZXJQcm9qZWN0cy5qcyc7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgRE9NSW50ZXJmYWNlKTtcclxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHJlbmRlclByb2plY3RzKTtcclxuXHJcblxyXG4vLyBjcmVhdGUgZGVsZXRlIHByb2plY3RzIGZ4blxyXG5cclxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdCgpIHtcclxuXHJcblx0Ly8gY3JlYXRlIElJRkUgdG8gZGVsZXRlIHByb2plY3RcclxuXHJcblx0Y29uc3QgZGVsZXRlQ3VycmVudFByb2plY3QgPSAoKCkgPT4ge1xyXG5cclxuXHRcdC8vb24gcHJlc3NpbmcgYnV0dG9uIGRlbGV0ZSBwcm9qZWN0XHJcblxyXG5cdFx0Y29uc3QgZGVsZXRlUHJvamVjdCA9ICgpID0+IHtcclxuXHJcblx0XHRkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIGZ1bmN0aW9uICggZXZlbnQgKSB7XHJcblx0XHRcdGlmKCBldmVudC50YXJnZXQuY2xhc3NOYW1lID09ICdkZWxldGVQcm9qZWN0QnRuJyApIHtcclxuXHJcblx0XHRcdFx0Ly9kZWxldGUgcHJvamVjdCBmcm9tIERPTVxyXG5cdFx0XHRcdGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xyXG5cclxuXHRcdFx0XHQvLyBkZWxldGUgcHJvamVjdCBmcm9tIGxvY2FsIHN0b3JhZ2VcclxuXHRcdFx0XHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5kYXRhc2V0LnByb2plY3QpO1xyXG5cdFx0XHRcdHRhc2tzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSk7XHJcblx0XHRcdH07XHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0ZGVsZXRlUHJvamVjdCxcclxuXHR9XHJcblxyXG5cdH0pKCk7XHJcblxyXG5cdGRlbGV0ZUN1cnJlbnRQcm9qZWN0LmRlbGV0ZVByb2plY3QoKTtcclxuXHJcblxyXG5cdFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWxldGVQcm9qZWN0OyIsImltcG9ydCBET01JbnRlcmZhY2UgZnJvbSAnLi9ET01JbnRlcmZhY2UuanMnO1xyXG4vLyBpbXBvcnQgcmVuZGVyVGFza3MgZnJvbSAnLi9yZW5kZXJUYXNrcy5qcyc7XHJcbmltcG9ydCBjcmVhdGVQcm9qZWN0cyBmcm9tICcuL2NyZWF0ZVByb2plY3RzLmpzJztcclxuLy8gaW1wb3J0IGRlbGV0ZVByb2plY3RzIGZyb20gJy4vZGVsZXRlUHJvamVjdHMuanMnO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIERPTUludGVyZmFjZSk7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBjcmVhdGVQcm9qZWN0cyk7XHJcbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBkZWxldGVQcm9qZWN0cyk7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclByb2plY3RzKCkge1xyXG5cclxuXHQvLyBjcmVhdGUgYW4gSUlGZSB0byByZW5kZXIgc2VsZWN0ZWQgcHJvamVjdCB0YXNrc1xyXG5cdFxyXG5cdGNvbnN0IHJlbmRlckN1cnJlbnRQcm9qZWN0ID0gKCgpID0+IHtcclxuXHJcblx0XHQvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjcmVhdGVQcm9qZWN0cyk7XHJcblxyXG5cdFx0Ly8gd2hlbiBhIHByb2plY3QgaXMgY2xpY2tlZCBhZGQgY2xhc3MgdG8gaXQgYW5kIHJlbW92ZSBpdCBmcm9tIG90aGVyIHByb2plY3RzXHJcblx0XHRjb25zdCBzZWxlY3RlZFByb2plY3QgPSAoKSA9PiB7XHJcblxyXG5cdFx0XHQvL3VzZSBldmVudCBkZWxlZ2F0aW9uIHRvIHNlbGVjdCBwcm9qZWN0XHJcblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHRcdFx0XHRpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2xpc3QtbmFtZScpKSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGxldCBhbGxQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saXN0LW5hbWUnKTtcclxuXHRcdFx0XHRcdGZvciAobGV0IHByb2plY3Qgb2YgYWxsUHJvamVjdHMpIHtcclxuXHRcdFx0XHRcdFx0aWYgKHByb2plY3QgPT0gZS50YXJnZXQpIHtcclxuXHRcdFx0XHRcdFx0XHRwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1saXN0Jyk7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0cHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtbGlzdCcpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRwcm9qZWN0VGl0bGUuaW5uZXJUZXh0ID0gZS50YXJnZXQuaWQ7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRzaG93VGFza3MoKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHRcdFx0XHJcblxyXG5cdFx0fVxyXG5cclxuXHJcblxyXG5cdFx0Ly93aGVuIGkgY2xpY2sgb24gYSBzaG93IHRhc2tzIHRoYXQgaGFkIGRhdGEtcHJvamVjdC1uYW1lIGVxdWFsIHRvIHRoZSBwcm9qZWN0IG5hbWVcclxuXHRcdGNvbnN0IHNob3dUYXNrcyA9ICgpID0+IHtcclxuXHJcblx0XHRcdGxldCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZS1saXN0JykuZ2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QnKTtcclxuXHRcdFx0bGV0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKTtcclxuXHRcdFx0Zm9yIChsZXQgdGFzayBvZiB0YXNrcykge1xyXG5cdFx0XHRcdGlmICh0YXNrLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0LW5hbWUnKSA9PT0gcHJvamVjdCkge1xyXG5cdFx0XHRcdFx0dGFza3NDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblx0XHRcdFx0XHR0YXNrLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0YXNrLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9XHJcblx0XHJcblx0XHR9XHJcblx0XHRcclxuXHRyZXR1cm4ge1xyXG5cdFx0c2VsZWN0ZWRQcm9qZWN0LFxyXG5cdFx0Ly8gY3JlYXRlTmV3VGFzayxcclxuXHRcdHNob3dUYXNrc1xyXG5cdH1cclxuXHJcblx0fSkoKTtcclxuXHJcblx0cmVuZGVyQ3VycmVudFByb2plY3Quc2VsZWN0ZWRQcm9qZWN0KCk7XHJcblxyXG5cdFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZW5kZXJQcm9qZWN0czsiLCJpbXBvcnQgRE9NSW50ZXJmYWNlIGZyb20gJy4vRE9NSW50ZXJmYWNlLmpzJztcclxuLy8gaW1wb3J0IGNyZWF0ZVByb2plY3RzIGZyb20gJy4vY3JlYXRlUHJvamVjdHMuanMnO1xyXG4vLyBpbXBvcnQgZGVsZXRlUHJvamVjdHMgZnJvbSAnLi9kZWxldGVQcm9qZWN0cy5qcyc7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgRE9NSW50ZXJmYWNlKTtcclxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGNyZWF0ZVByb2plY3RzKTtcclxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGRlbGV0ZVByb2plY3RzKTtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcmVuZGVyVGFza3MoKSB7XHJcblxyXG5cdC8vIC8vIHJlbmRlciB0YXNrcyBmcm9tIGxvY2FsIHN0b3JhZ2Ugd2hlbiBwcm9qZWN0IGlzIHNlbGVjdGVkXHJcblx0Ly8gbGV0IHByb2plY3RzID0gT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKTtcclxuXHQvLyBwcm9qZWN0cy5mb3JFYWNoKGZ1bmN0aW9uKHByb2plY3QpIHt9XHJcblx0XHJcblx0XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZW5kZXJUYXNrczsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi9zdHlsZS9zdHlsZXMuY3NzJztcclxuaW1wb3J0IERPTUludGVyZmFjZSBmcm9tICcuL0RPTUludGVyZmFjZS5qcyc7XHJcbmltcG9ydCBjcmVhdGVQcm9qZWN0cyBmcm9tICcuL2NyZWF0ZVByb2plY3RzLmpzJztcclxuaW1wb3J0IGRlbGV0ZVByb2plY3RzIGZyb20gJy4vZGVsZXRlUHJvamVjdHMuanMnO1xyXG5pbXBvcnQgcmVuZGVyUHJvamVjdHMgZnJvbSAnLi9yZW5kZXJQcm9qZWN0cy5qcyc7XHJcbmltcG9ydCBjcmVhdGVUYXNrcyBmcm9tICcuL2NyZWF0ZVRhc2tzLmpzJztcclxuXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgRE9NSW50ZXJmYWNlKTtcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGNyZWF0ZVByb2plY3RzKTtcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGRlbGV0ZVByb2plY3RzKTtcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHJlbmRlclByb2plY3RzKTtcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGNyZWF0ZVRhc2tzKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=