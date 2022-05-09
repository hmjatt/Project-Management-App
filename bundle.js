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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n\t--clr-primary: rgb(41, 145, 255);\r\n\t--clr-lightGray: rgb(232, 232, 232);\r\n\t--clr-light: #f4f4f4;\r\n\t--clr-dark: rgb(58, 58, 58);\r\n\t--clr-white: rgb(252, 252, 252);\r\n\t--clr-warning: #e97560;\r\n\t--clr-navHighlight: #4f7794d0;\r\n\t--clr-mineShaft: #232323;\r\n\t--clr-gallery: #ededed;\r\n\t--clr-elfGreen: #058179;\r\n\t--clr-nebula: #cbdbda;\r\n\t--clr-completedTask: #a5b1c0;\r\n\t--clr-delete: #ff494962;\r\n}\r\n\r\nhtml {\r\n\tfont-family: 'Source Sans Pro', sans-serif;\r\n\r\n}\r\n\r\nbody {\r\n\tpadding-bottom: 10%;\r\n\tmargin: 0;\r\n\tbackground: var(--clr-nebula);\r\n\tcolor: var(--clr-mineShaft);\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\t\r\n}\r\n\r\nh1 {\r\n\tcolor: var(--clr-dark);\r\n\tfont-size: 3rem;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-self: center;\r\n\talign-items: center;\r\n\tmargin: -0.5em 0.5em 0.5em 40.5%;\r\n\tz-index: 2;\r\n\tposition: absolute;\r\n}\r\n\r\n.hideH1 {\r\n\tdisplay: none;\r\n}\r\n\r\nh2 {\r\n\tmargin-bottom: 0px;\r\n}\r\n\r\n#container {\r\n\tmargin-right: -18%;\r\n\tpadding-left: 1%;\r\n\tdisplay: grid;\r\n\tjustify-content: space-around;\r\n\tgrid-template-columns: 1fr;\r\n\tgrid-template-rows: auto;\r\n\tgrid-template-areas: \r\n\t  \"logo\"\r\n\t  \"projects\"\r\n\t  \"tasks\";\r\n} \r\n\r\n#gitLogoDivContainer {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tgrid-area: logo;\r\n}\r\n\r\n.gitLogo {\r\n\twidth: 100px;\r\n\theight: 100px;\r\n}\r\n\r\n#navContainer {\r\n\t/* display: flex;\r\n\tflex-direction: column; */\r\n\tposition: relative;\r\n\tmargin-bottom: 10vw;\r\n\tgrid-area: projects;\r\n}\r\n\r\n#menuToggle {\r\n\tdisplay: block;\r\n\tposition: relative;\r\n\tmax-width: 50vw;\r\n\ttop: 50px;\r\n\tleft: 50px;\r\n\tz-index: 1;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n}\r\n\r\n#menuToggle li {\r\n\ttext-decoration: none;\r\n\t-webkit-transition: color 0.3s ease;\r\n\t-o-transition: color 0.3s ease;\r\n\ttransition: color 0.3s ease;\r\n\tpadding: 10px 0px 10px 50px;\r\n\tfont-size: 22px;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n#menuToggle li:hover {\r\n\tfont-weight: 700;\r\n}\r\n\r\n\r\n/* The hamburger button hidden inside an #inputMenu element */\r\n#menuToggle #inputMenu {\r\n\tdisplay: block;\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tposition: absolute;\r\n\ttop: -7px;\r\n\tleft: -5px;\r\n\tpadding: 0;\r\n\tcursor: pointer;\r\n\t\r\n\topacity: 0;\r\n\t/* hide this */\r\n\tz-index: 2;\r\n\t/* and place it over the hamburger */\r\n\t-webkit-touch-callout: none;\r\n}\r\n\r\n#menuToggle #labelMenu {\r\n\tposition: relative;\r\n\tdisplay: block;\r\n\twidth: 30px;\r\n\theight: 30px;\r\n}\r\n\r\n#menuToggle #labelMenu span {\r\n\tdisplay: none;\r\n}\r\n\r\n/*\r\n * Hamburger\r\n */\r\n#menuToggle #labelMenu div {\r\n\tdisplay: block;\r\n\twidth: 30px;\r\n\theight: 2px;\r\n\tmargin-bottom: 6px;\r\n\tposition: relative;\r\n\tbackground: var(--clr-elfGreen);\r\n\tborder-radius: 5px;\r\n\tz-index: 1;\r\n\t-webkit-transform-origin: 4px 0px;\r\n\t-ms-transform-origin: 4px 0px;\r\n\ttransform-origin: 4px 0px;\r\n\t-webkit-transition: all 0.3s ease;\r\n\t-o-transition: all 0.3s ease;\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n#menuToggle #labelMenu div:first-child {\r\n\t-webkit-transform-origin: 0% 100%;\r\n\t-ms-transform-origin: 0% 100%;\r\n\ttransform-origin: 0% 100%;\r\n}\r\n\r\n#menuToggle #labelMenu div:nth-child(2) {\r\n\t-webkit-transform-origin: 0% 0%;\r\n\t-ms-transform-origin: 0% 0%;\r\n\ttransform-origin: 0% 0%;\r\n}\r\n\r\n/* \r\n * Change the color of the hamburger when toggled\r\n */\r\n#menuToggle #inputMenu:checked+#labelMenu div {\r\n\tbackground: var(--clr-mineShaft);\r\n\t\r\n}\r\n\r\n/*\r\n * Use absolute positioning to place the menu off-screen\r\n */\r\n#menu {\r\n\tposition: absolute;\r\n\twidth: 100vw;\r\n\tmax-width: 900px;\r\n\tmargin: -80px 0 0 -50px;\r\n\tpadding: 50px 0px 50px 0px;\r\n\tpadding-top: 125px;\r\n\tbackground: var(--clr-light);\r\n\tbox-shadow: \r\n\t\t\t\t0 2.8px 2.2px rgba(0, 0, 0, 0.034),\r\n\t\t\t\t0 6.7px 5.3px rgba(0, 0, 0, 0.048),\r\n\t\t\t\t0 12.5px 10px rgba(0, 0, 0, 0.06),\r\n\t\t\t\t0 22.3px 17.9px rgba(0, 0, 0, 0.072),\r\n\t\t\t\t0 41.8px 33.4px rgba(0, 0, 0, 0.086);\r\n\tborder-radius: 20px;\r\n\tlist-style-type: none;\r\n\t/* Hide the menu off-screen to the left */\r\n\tleft: 0;\r\n\t-webkit-transition: left 0.3s ease;\r\n\t-o-transition: left 0.3s ease;\r\n\ttransition: left 0.3s ease;\r\n}\r\n\r\n\r\n\r\n/*\r\n * Slide the menu in from left when the #inputMenu is checked\r\n */\r\n#menuToggle #inputMenu:checked~ul {\r\n\r\n\ttransition: left 0.3s ease;\r\n\tleft: -200%;\r\n}\r\n\r\n.list-img {\r\n\twidth: 1.7em;\r\n\tpadding-right: 10px;\r\n}\r\n\r\n.active-list {\r\n\tbackground-color: var(--clr-elfGreen);\r\n\tborder-radius: 35px;\r\n\tmargin: 0px 25px 0px 25px;\r\n\tcolor: var(--clr-light);\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n#myForm {\r\n\tdisplay: none;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tmargin-top: 1.8em;\r\n\ttransition: all 0.3s ease;\r\n\t\r\n}\r\n\r\n#myForm form, #myTasks form {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tfont-size: 1.3em;\r\n\tbackground-color: var(--clr-white);\r\n\tborder: 1px solid var(--clr-elfGreen);\r\n\twidth: 15em;\r\n\tpadding: 2em .6em 1.5em .6em;\r\n\tborder-radius: 20px;\r\n}\r\n\r\n#addProjectForm {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n}\r\n\r\n#addProjectButton {\r\n\tmargin-top: 30px;\r\n\tbackground-color: var(--clr-elfGreen);\r\n\tcolor: var(--clr-light);\r\n\tborder: none;\r\n\tborder-radius: 42px;\r\n\tfont-size: 1.4em;\r\n\tpadding: 2% 10% 2% 8%;\r\n\tfont-family: 'Source Sans Pro', sans-serif;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n#addProjectButton:hover {\r\n\tcolor: var(--clr-light);\r\n\topacity: 0.8;\r\n}\r\n\r\n#addProjectButton span {\r\n\tfont-size: 1.6em;\r\n\tfont-weight: 300;\r\n\tpadding: 0px 10px 0px 3px;\r\n\t\r\n}\r\n\r\n#submitBtn, #taskSubmitButton {\r\n \tfont-family: 'Source Sans Pro', sans-serif;\r\n \tbackground-color: var(--clr-elfGreen);\r\n \tcolor: var(--clr-light);\r\n \tborder: none;\r\n \tborder-radius: 32px;\r\n \tfont-size: 1em;\r\n \tpadding: 2% 30% 2% 30%;\r\n\t transition: all 0.3s ease;\r\n}\r\n\r\n#submitBtn:hover, #taskSubmitBtn:hover {\r\n\topacity: 0.8;\r\n}\r\n\r\n#projectLabel, #taskLabel {\r\n\tfont-size: 1.3em;\r\n\tfont-weight: 700;\r\n}\r\n\r\n#projectInput, #taskInput {\r\n\tfont-size: 0.8em;\r\n\tfont-weight: 400;\r\n\tfont-family: 'Source Sans Pro', sans-serif;\r\n\tborder-radius: 15px;\r\n\tpadding: 0px 15px 0px 15px;\r\n}\r\n\r\n.deleteProjectBtn {\r\n\tborder: 1px solid var(--clr-mineShaft);\r\n\tbackground: var(--clr-warning);\r\n\tborder-radius: 20px;\r\n\tpadding: 3px 7px 2px 7px;\r\n\tfont-size: 0.7em;\r\n\tdisplay: flex;\r\n\tmargin: 0.5% 2% 0 2%;\r\n\tcursor: pointer;\r\n\tfont-weight: 300;\r\n}\r\n\r\n#taskList {\r\n\tgrid-area: tasks;\r\n\t/* margin-bottom: 130vh; */\r\n\t/* margin-top: 50vh; */\r\n}\r\n\r\n.todo-list {\r\n\ttransition: all 0.3s ease;\r\n\tmargin-top: 29em;\r\n\tbackground: var(--clr-gallery);\r\n\tborder-radius: 20px;\r\n\twidth: 100vw;\r\n\tmax-width: 900px;\r\n\tpadding-top: 3%;\r\n\tpadding-bottom: 1%;\r\n\tbox-shadow: \r\n\t\t\t\t0 2.8px 2.2px rgba(0, 0, 0, 0.034),\r\n\t\t\t\t0 6.7px 5.3px rgba(0, 0, 0, 0.048),\r\n\t\t\t\t0 12.5px 10px rgba(0, 0, 0, 0.06),\r\n\t\t\t\t0 22.3px 17.9px rgba(0, 0, 0, 0.072),\r\n\t\t\t\t0 41.8px 33.4px rgba(0, 0, 0, 0.086),\r\n\t\t\t\t0 100px 80px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.addmarginAfterClick {\r\n\tmargin-top: 5vh;\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n\r\n.todo-header {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tbackground-color: var(--clr-light);\r\n\tborder: 1px solid var(--clr-elfGreen);\r\n\tborder-radius: 20px;\r\n\tmargin: 0% 5% 5% 5%;\r\n}\r\n\r\n.task-count {\r\n\tcolor: var(--clr-primary);\r\n}\r\n\r\n.todo-body {\r\n\tbackground-color: var(--clr-light);\r\n\tborder: 1px solid var(--clr-elfGreen);\r\n\tborder-radius: 20px;\r\n\tpadding: 5% 1% 0% 1%;\r\n\tmargin: 5%;\r\n}\r\n\r\n#myTasks {\r\n\tdisplay: none;\r\n}\r\n\r\n#addTaskButton {\r\n\tfont-family: 'Source Sans Pro', sans-serif;\r\n \tbackground-color: var(--clr-elfGreen);\r\n \tcolor: var(--clr-light);\r\n \tborder: none;\r\n \tborder-radius: 32px;\r\n \tfont-size: 1.1em;\r\n \tpadding: 2% 10% 2% 4%;\r\n\t display: flex;\r\n\t align-items: center;\r\n\t margin-bottom: 20px;\r\n\t transition: all 0.3s ease;\r\n}\r\n\r\n#addTaskButton:hover {\r\n\topacity: 0.8;\r\n}\r\n\r\n#addTaskButton span {\r\n\tfont-size: 1.5em;\r\n\tfont-weight: 400;\r\n\tpadding: 0px 10px 0px 13px;\r\n}\r\n\r\n#createTaskContainer {\r\n\tborder-radius: 20px;\r\n\tpadding: 5%;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n}\r\n\r\n\r\n#tasksContainer {\r\n\tborder-radius: 20px;\r\n\tmargin-bottom: 15px;\r\n}\r\n\r\n#tasksContainer input[type=\"checkbox\"] {\r\n\tposition: relative;\r\n\r\n\tborder: 2px solid var(--clr-mineShaft);\r\n\tborder-radius: 14px;\r\n\tappearance: none;\r\n\toutline: 0;\r\n\tcursor: pointer;\r\n\ttransition: background 175ms cubic-bezier(0.1, 0.1, 0.25, 1);\r\n}\r\n\r\n#tasksContainer input[type=\"checkbox\"]::before {\r\n\tposition: absolute;\r\n\tcontent: '';\r\n\tdisplay: block;\r\n    top: -6px;\r\n    left: 9px;\r\n    width: 8px;\r\n    height: 21px;\r\n\tborder-style: solid;\r\n\tborder-color: var(--clr-mineShaft);\r\n\tborder-width: 0 3px 3px 0;\r\n\ttransform: rotate(45deg);\r\n\topacity: 0;\r\n}\r\n\r\n#tasksContainer input[type=\"checkbox\"]:checked {\r\n\tcolor: var(--clr-mineShaft);\r\n\tborder-color: var(--clr-mineShaft);\r\n\tbackground: var(--clr-primary);\r\n}\r\n\r\n#tasksContainer input[type=\"checkbox\"]:checked::before {\r\n\topacity: 1;\r\n}\r\n\r\n#tasksContainer input[type=\"checkbox\"]:checked ~ label::before {\r\n\tclip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\r\n}\r\n\r\n#tasksContainer label {\r\n\tposition: relative;\r\n\tcursor: pointer;\r\n\tfont-size: 1.3em;\r\n\tfont-weight: 400;\r\n\tpadding: 0 0.45em 0;\r\n\tuser-select: none;\r\n\r\n}\r\n\r\n#tasksContainer label::before {\r\n\tposition: absolute;\r\n\tcontent: attr(data-content);\r\n\tcolor: var(--clr-completedTask);\r\n\tclip-path: polygon(0 0, 0 0, 0% 100%, 0 100%);\r\n\ttext-decoration: line-through;\r\n\ttext-decoration-thickness: 3px;\r\n\ttext-decoration-color: var(--clr-dark);\r\n\ttop: 0px;\r\n\ttransition: clip-path 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);\r\n}\r\n\r\n.task label {\r\n\tbottom: 0px;\r\n}\r\n\r\n.task {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tbackground-color: var(--clr-gallery);\r\n\tborder: 1px solid var(--clr-primary);\r\n\tmargin: 2%;\r\n\tpadding: 2%;\r\n\tborder-radius: 10px;\r\n}\r\n\r\n#tasksContainer .task input {\r\n\theight: 25px;\r\n\twidth: 25px;\r\n\tmin-width: 25px;\r\n}\r\n\r\n#tasksContainer input:hover {\r\n\tborder: 2px solid var(--clr-primary);\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n.delete-stuff {\r\n\tdisplay: flex;\r\n\tflex-direction: column;}\r\n\r\n.delete-stuff button {\r\n\tfont-family: 'Source Sans Pro', sans-serif;\r\n\tborder: none;\r\n\tmargin: 0.5em;\r\n\tborder-radius: 12px;\r\n\tfont-size: 1em;\r\n\tpadding: 0.11em 1em 0.11em 1em;\r\n\ttransition: all 0.3s ease;\r\n}\r\n.delete-stuff button:hover {\r\n\topacity: 0.8;\r\n}\r\n\r\n#clearBtn {\r\n\tbackground-color: var(--clr-navHighlight);\r\n\tcolor: var(--clr-mineShaft);\r\n}\r\n\r\n#deleteBtn {\r\n\tbackground-color: var(--clr-delete);\r\n\tcolor: var(--clr-mineShaft);\r\n}\r\n\r\n@media (min-width: 375px) {\r\n\t#menu, #taskList {\r\n\t\twidth: 92vw;\r\n\t}\r\n\t#container {\r\n\t\tmargin-right: 0%;\r\n\t\tmargin-left: 0%;\r\n\t\tpadding-left: 1%;\r\n\t}\r\n}\r\n\r\n@media (min-width: 1100px) {\r\n\t#container {\r\n\t\tmargin-right: 0%;\r\n\t\tmargin-left: 0%;\r\n\t}\r\n} \r\n\r\n", "",{"version":3,"sources":["webpack://./src/style/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n\t--clr-primary: rgb(41, 145, 255);\r\n\t--clr-lightGray: rgb(232, 232, 232);\r\n\t--clr-light: #f4f4f4;\r\n\t--clr-dark: rgb(58, 58, 58);\r\n\t--clr-white: rgb(252, 252, 252);\r\n\t--clr-warning: #e97560;\r\n\t--clr-navHighlight: #4f7794d0;\r\n\t--clr-mineShaft: #232323;\r\n\t--clr-gallery: #ededed;\r\n\t--clr-elfGreen: #058179;\r\n\t--clr-nebula: #cbdbda;\r\n\t--clr-completedTask: #a5b1c0;\r\n\t--clr-delete: #ff494962;\r\n}\r\n\r\nhtml {\r\n\tfont-family: 'Source Sans Pro', sans-serif;\r\n\r\n}\r\n\r\nbody {\r\n\tpadding-bottom: 10%;\r\n\tmargin: 0;\r\n\tbackground: var(--clr-nebula);\r\n\tcolor: var(--clr-mineShaft);\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\t\r\n}\r\n\r\nh1 {\r\n\tcolor: var(--clr-dark);\r\n\tfont-size: 3rem;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-self: center;\r\n\talign-items: center;\r\n\tmargin: -0.5em 0.5em 0.5em 40.5%;\r\n\tz-index: 2;\r\n\tposition: absolute;\r\n}\r\n\r\n.hideH1 {\r\n\tdisplay: none;\r\n}\r\n\r\nh2 {\r\n\tmargin-bottom: 0px;\r\n}\r\n\r\n#container {\r\n\tmargin-right: -18%;\r\n\tpadding-left: 1%;\r\n\tdisplay: grid;\r\n\tjustify-content: space-around;\r\n\tgrid-template-columns: 1fr;\r\n\tgrid-template-rows: auto;\r\n\tgrid-template-areas: \r\n\t  \"logo\"\r\n\t  \"projects\"\r\n\t  \"tasks\";\r\n} \r\n\r\n#gitLogoDivContainer {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tgrid-area: logo;\r\n}\r\n\r\n.gitLogo {\r\n\twidth: 100px;\r\n\theight: 100px;\r\n}\r\n\r\n#navContainer {\r\n\t/* display: flex;\r\n\tflex-direction: column; */\r\n\tposition: relative;\r\n\tmargin-bottom: 10vw;\r\n\tgrid-area: projects;\r\n}\r\n\r\n#menuToggle {\r\n\tdisplay: block;\r\n\tposition: relative;\r\n\tmax-width: 50vw;\r\n\ttop: 50px;\r\n\tleft: 50px;\r\n\tz-index: 1;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n}\r\n\r\n#menuToggle li {\r\n\ttext-decoration: none;\r\n\t-webkit-transition: color 0.3s ease;\r\n\t-o-transition: color 0.3s ease;\r\n\ttransition: color 0.3s ease;\r\n\tpadding: 10px 0px 10px 50px;\r\n\tfont-size: 22px;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n#menuToggle li:hover {\r\n\tfont-weight: 700;\r\n}\r\n\r\n\r\n/* The hamburger button hidden inside an #inputMenu element */\r\n#menuToggle #inputMenu {\r\n\tdisplay: block;\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tposition: absolute;\r\n\ttop: -7px;\r\n\tleft: -5px;\r\n\tpadding: 0;\r\n\tcursor: pointer;\r\n\t\r\n\topacity: 0;\r\n\t/* hide this */\r\n\tz-index: 2;\r\n\t/* and place it over the hamburger */\r\n\t-webkit-touch-callout: none;\r\n}\r\n\r\n#menuToggle #labelMenu {\r\n\tposition: relative;\r\n\tdisplay: block;\r\n\twidth: 30px;\r\n\theight: 30px;\r\n}\r\n\r\n#menuToggle #labelMenu span {\r\n\tdisplay: none;\r\n}\r\n\r\n/*\r\n * Hamburger\r\n */\r\n#menuToggle #labelMenu div {\r\n\tdisplay: block;\r\n\twidth: 30px;\r\n\theight: 2px;\r\n\tmargin-bottom: 6px;\r\n\tposition: relative;\r\n\tbackground: var(--clr-elfGreen);\r\n\tborder-radius: 5px;\r\n\tz-index: 1;\r\n\t-webkit-transform-origin: 4px 0px;\r\n\t-ms-transform-origin: 4px 0px;\r\n\ttransform-origin: 4px 0px;\r\n\t-webkit-transition: all 0.3s ease;\r\n\t-o-transition: all 0.3s ease;\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n#menuToggle #labelMenu div:first-child {\r\n\t-webkit-transform-origin: 0% 100%;\r\n\t-ms-transform-origin: 0% 100%;\r\n\ttransform-origin: 0% 100%;\r\n}\r\n\r\n#menuToggle #labelMenu div:nth-child(2) {\r\n\t-webkit-transform-origin: 0% 0%;\r\n\t-ms-transform-origin: 0% 0%;\r\n\ttransform-origin: 0% 0%;\r\n}\r\n\r\n/* \r\n * Change the color of the hamburger when toggled\r\n */\r\n#menuToggle #inputMenu:checked+#labelMenu div {\r\n\tbackground: var(--clr-mineShaft);\r\n\t\r\n}\r\n\r\n/*\r\n * Use absolute positioning to place the menu off-screen\r\n */\r\n#menu {\r\n\tposition: absolute;\r\n\twidth: 100vw;\r\n\tmax-width: 900px;\r\n\tmargin: -80px 0 0 -50px;\r\n\tpadding: 50px 0px 50px 0px;\r\n\tpadding-top: 125px;\r\n\tbackground: var(--clr-light);\r\n\tbox-shadow: \r\n\t\t\t\t0 2.8px 2.2px rgba(0, 0, 0, 0.034),\r\n\t\t\t\t0 6.7px 5.3px rgba(0, 0, 0, 0.048),\r\n\t\t\t\t0 12.5px 10px rgba(0, 0, 0, 0.06),\r\n\t\t\t\t0 22.3px 17.9px rgba(0, 0, 0, 0.072),\r\n\t\t\t\t0 41.8px 33.4px rgba(0, 0, 0, 0.086);\r\n\tborder-radius: 20px;\r\n\tlist-style-type: none;\r\n\t/* Hide the menu off-screen to the left */\r\n\tleft: 0;\r\n\t-webkit-transition: left 0.3s ease;\r\n\t-o-transition: left 0.3s ease;\r\n\ttransition: left 0.3s ease;\r\n}\r\n\r\n\r\n\r\n/*\r\n * Slide the menu in from left when the #inputMenu is checked\r\n */\r\n#menuToggle #inputMenu:checked~ul {\r\n\r\n\ttransition: left 0.3s ease;\r\n\tleft: -200%;\r\n}\r\n\r\n.list-img {\r\n\twidth: 1.7em;\r\n\tpadding-right: 10px;\r\n}\r\n\r\n.active-list {\r\n\tbackground-color: var(--clr-elfGreen);\r\n\tborder-radius: 35px;\r\n\tmargin: 0px 25px 0px 25px;\r\n\tcolor: var(--clr-light);\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n#myForm {\r\n\tdisplay: none;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tmargin-top: 1.8em;\r\n\ttransition: all 0.3s ease;\r\n\t\r\n}\r\n\r\n#myForm form, #myTasks form {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tfont-size: 1.3em;\r\n\tbackground-color: var(--clr-white);\r\n\tborder: 1px solid var(--clr-elfGreen);\r\n\twidth: 15em;\r\n\tpadding: 2em .6em 1.5em .6em;\r\n\tborder-radius: 20px;\r\n}\r\n\r\n#addProjectForm {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n}\r\n\r\n#addProjectButton {\r\n\tmargin-top: 30px;\r\n\tbackground-color: var(--clr-elfGreen);\r\n\tcolor: var(--clr-light);\r\n\tborder: none;\r\n\tborder-radius: 42px;\r\n\tfont-size: 1.4em;\r\n\tpadding: 2% 10% 2% 8%;\r\n\tfont-family: 'Source Sans Pro', sans-serif;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n#addProjectButton:hover {\r\n\tcolor: var(--clr-light);\r\n\topacity: 0.8;\r\n}\r\n\r\n#addProjectButton span {\r\n\tfont-size: 1.6em;\r\n\tfont-weight: 300;\r\n\tpadding: 0px 10px 0px 3px;\r\n\t\r\n}\r\n\r\n#submitBtn, #taskSubmitButton {\r\n \tfont-family: 'Source Sans Pro', sans-serif;\r\n \tbackground-color: var(--clr-elfGreen);\r\n \tcolor: var(--clr-light);\r\n \tborder: none;\r\n \tborder-radius: 32px;\r\n \tfont-size: 1em;\r\n \tpadding: 2% 30% 2% 30%;\r\n\t transition: all 0.3s ease;\r\n}\r\n\r\n#submitBtn:hover, #taskSubmitBtn:hover {\r\n\topacity: 0.8;\r\n}\r\n\r\n#projectLabel, #taskLabel {\r\n\tfont-size: 1.3em;\r\n\tfont-weight: 700;\r\n}\r\n\r\n#projectInput, #taskInput {\r\n\tfont-size: 0.8em;\r\n\tfont-weight: 400;\r\n\tfont-family: 'Source Sans Pro', sans-serif;\r\n\tborder-radius: 15px;\r\n\tpadding: 0px 15px 0px 15px;\r\n}\r\n\r\n.deleteProjectBtn {\r\n\tborder: 1px solid var(--clr-mineShaft);\r\n\tbackground: var(--clr-warning);\r\n\tborder-radius: 20px;\r\n\tpadding: 3px 7px 2px 7px;\r\n\tfont-size: 0.7em;\r\n\tdisplay: flex;\r\n\tmargin: 0.5% 2% 0 2%;\r\n\tcursor: pointer;\r\n\tfont-weight: 300;\r\n}\r\n\r\n#taskList {\r\n\tgrid-area: tasks;\r\n\t/* margin-bottom: 130vh; */\r\n\t/* margin-top: 50vh; */\r\n}\r\n\r\n.todo-list {\r\n\ttransition: all 0.3s ease;\r\n\tmargin-top: 29em;\r\n\tbackground: var(--clr-gallery);\r\n\tborder-radius: 20px;\r\n\twidth: 100vw;\r\n\tmax-width: 900px;\r\n\tpadding-top: 3%;\r\n\tpadding-bottom: 1%;\r\n\tbox-shadow: \r\n\t\t\t\t0 2.8px 2.2px rgba(0, 0, 0, 0.034),\r\n\t\t\t\t0 6.7px 5.3px rgba(0, 0, 0, 0.048),\r\n\t\t\t\t0 12.5px 10px rgba(0, 0, 0, 0.06),\r\n\t\t\t\t0 22.3px 17.9px rgba(0, 0, 0, 0.072),\r\n\t\t\t\t0 41.8px 33.4px rgba(0, 0, 0, 0.086),\r\n\t\t\t\t0 100px 80px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.addmarginAfterClick {\r\n\tmargin-top: 5vh;\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n\r\n.todo-header {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tbackground-color: var(--clr-light);\r\n\tborder: 1px solid var(--clr-elfGreen);\r\n\tborder-radius: 20px;\r\n\tmargin: 0% 5% 5% 5%;\r\n}\r\n\r\n.task-count {\r\n\tcolor: var(--clr-primary);\r\n}\r\n\r\n.todo-body {\r\n\tbackground-color: var(--clr-light);\r\n\tborder: 1px solid var(--clr-elfGreen);\r\n\tborder-radius: 20px;\r\n\tpadding: 5% 1% 0% 1%;\r\n\tmargin: 5%;\r\n}\r\n\r\n#myTasks {\r\n\tdisplay: none;\r\n}\r\n\r\n#addTaskButton {\r\n\tfont-family: 'Source Sans Pro', sans-serif;\r\n \tbackground-color: var(--clr-elfGreen);\r\n \tcolor: var(--clr-light);\r\n \tborder: none;\r\n \tborder-radius: 32px;\r\n \tfont-size: 1.1em;\r\n \tpadding: 2% 10% 2% 4%;\r\n\t display: flex;\r\n\t align-items: center;\r\n\t margin-bottom: 20px;\r\n\t transition: all 0.3s ease;\r\n}\r\n\r\n#addTaskButton:hover {\r\n\topacity: 0.8;\r\n}\r\n\r\n#addTaskButton span {\r\n\tfont-size: 1.5em;\r\n\tfont-weight: 400;\r\n\tpadding: 0px 10px 0px 13px;\r\n}\r\n\r\n#createTaskContainer {\r\n\tborder-radius: 20px;\r\n\tpadding: 5%;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n}\r\n\r\n\r\n#tasksContainer {\r\n\tborder-radius: 20px;\r\n\tmargin-bottom: 15px;\r\n}\r\n\r\n#tasksContainer input[type=\"checkbox\"] {\r\n\tposition: relative;\r\n\r\n\tborder: 2px solid var(--clr-mineShaft);\r\n\tborder-radius: 14px;\r\n\tappearance: none;\r\n\toutline: 0;\r\n\tcursor: pointer;\r\n\ttransition: background 175ms cubic-bezier(0.1, 0.1, 0.25, 1);\r\n}\r\n\r\n#tasksContainer input[type=\"checkbox\"]::before {\r\n\tposition: absolute;\r\n\tcontent: '';\r\n\tdisplay: block;\r\n    top: -6px;\r\n    left: 9px;\r\n    width: 8px;\r\n    height: 21px;\r\n\tborder-style: solid;\r\n\tborder-color: var(--clr-mineShaft);\r\n\tborder-width: 0 3px 3px 0;\r\n\ttransform: rotate(45deg);\r\n\topacity: 0;\r\n}\r\n\r\n#tasksContainer input[type=\"checkbox\"]:checked {\r\n\tcolor: var(--clr-mineShaft);\r\n\tborder-color: var(--clr-mineShaft);\r\n\tbackground: var(--clr-primary);\r\n}\r\n\r\n#tasksContainer input[type=\"checkbox\"]:checked::before {\r\n\topacity: 1;\r\n}\r\n\r\n#tasksContainer input[type=\"checkbox\"]:checked ~ label::before {\r\n\tclip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\r\n}\r\n\r\n#tasksContainer label {\r\n\tposition: relative;\r\n\tcursor: pointer;\r\n\tfont-size: 1.3em;\r\n\tfont-weight: 400;\r\n\tpadding: 0 0.45em 0;\r\n\tuser-select: none;\r\n\r\n}\r\n\r\n#tasksContainer label::before {\r\n\tposition: absolute;\r\n\tcontent: attr(data-content);\r\n\tcolor: var(--clr-completedTask);\r\n\tclip-path: polygon(0 0, 0 0, 0% 100%, 0 100%);\r\n\ttext-decoration: line-through;\r\n\ttext-decoration-thickness: 3px;\r\n\ttext-decoration-color: var(--clr-dark);\r\n\ttop: 0px;\r\n\ttransition: clip-path 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);\r\n}\r\n\r\n.task label {\r\n\tbottom: 0px;\r\n}\r\n\r\n.task {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tbackground-color: var(--clr-gallery);\r\n\tborder: 1px solid var(--clr-primary);\r\n\tmargin: 2%;\r\n\tpadding: 2%;\r\n\tborder-radius: 10px;\r\n}\r\n\r\n#tasksContainer .task input {\r\n\theight: 25px;\r\n\twidth: 25px;\r\n\tmin-width: 25px;\r\n}\r\n\r\n#tasksContainer input:hover {\r\n\tborder: 2px solid var(--clr-primary);\r\n\ttransition: all 0.3s ease;\r\n}\r\n\r\n.delete-stuff {\r\n\tdisplay: flex;\r\n\tflex-direction: column;}\r\n\r\n.delete-stuff button {\r\n\tfont-family: 'Source Sans Pro', sans-serif;\r\n\tborder: none;\r\n\tmargin: 0.5em;\r\n\tborder-radius: 12px;\r\n\tfont-size: 1em;\r\n\tpadding: 0.11em 1em 0.11em 1em;\r\n\ttransition: all 0.3s ease;\r\n}\r\n.delete-stuff button:hover {\r\n\topacity: 0.8;\r\n}\r\n\r\n#clearBtn {\r\n\tbackground-color: var(--clr-navHighlight);\r\n\tcolor: var(--clr-mineShaft);\r\n}\r\n\r\n#deleteBtn {\r\n\tbackground-color: var(--clr-delete);\r\n\tcolor: var(--clr-mineShaft);\r\n}\r\n\r\n@media (min-width: 375px) {\r\n\t#menu, #taskList {\r\n\t\twidth: 92vw;\r\n\t}\r\n\t#container {\r\n\t\tmargin-right: 0%;\r\n\t\tmargin-left: 0%;\r\n\t\tpadding-left: 1%;\r\n\t}\r\n}\r\n\r\n@media (min-width: 1100px) {\r\n\t#container {\r\n\t\tmargin-right: 0%;\r\n\t\tmargin-left: 0%;\r\n\t}\r\n} \r\n\r\n"],"sourceRoot":""}]);
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

		projectsContainer.prepend(project);
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
		taskList.classList.toggle('addmarginAfterClick');
	}

	function hideH1() {
		let h1Ele = document.getElementsByTagName('h1')[0];
		// console.log(h1Ele);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxLQUFLLEtBQUssYUFBYSxPQUFPLE1BQU0sS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsVUFBVSxPQUFPLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsU0FBUyxNQUFNLEtBQUssTUFBTSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxjQUFjLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sT0FBTyxLQUFLLFVBQVUsWUFBWSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxRQUFRLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxjQUFjLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxrQkFBa0IsTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksV0FBVyxNQUFNLGdDQUFnQyx1Q0FBdUMsMENBQTBDLDJCQUEyQixrQ0FBa0Msc0NBQXNDLDZCQUE2QixvQ0FBb0MsK0JBQStCLDZCQUE2Qiw4QkFBOEIsNEJBQTRCLG1DQUFtQyw4QkFBOEIsS0FBSyxjQUFjLGlEQUFpRCxTQUFTLGNBQWMsMEJBQTBCLGdCQUFnQixvQ0FBb0Msa0NBQWtDLG9CQUFvQiw4QkFBOEIsV0FBVyxZQUFZLDZCQUE2QixzQkFBc0Isb0JBQW9CLDhCQUE4Qix5QkFBeUIsMEJBQTBCLHVDQUF1QyxpQkFBaUIseUJBQXlCLEtBQUssaUJBQWlCLG9CQUFvQixLQUFLLFlBQVkseUJBQXlCLEtBQUssb0JBQW9CLHlCQUF5Qix1QkFBdUIsb0JBQW9CLG9DQUFvQyxpQ0FBaUMsK0JBQStCLGlGQUFpRixNQUFNLDhCQUE4QixvQkFBb0IsNkJBQTZCLDBCQUEwQixzQkFBc0IsS0FBSyxrQkFBa0IsbUJBQW1CLG9CQUFvQixLQUFLLHVCQUF1Qix1QkFBdUIsOEJBQThCLDJCQUEyQiwwQkFBMEIsMEJBQTBCLEtBQUsscUJBQXFCLHFCQUFxQix5QkFBeUIsc0JBQXNCLGdCQUFnQixpQkFBaUIsaUJBQWlCLGdDQUFnQyw2QkFBNkIsNEJBQTRCLHdCQUF3QixLQUFLLHdCQUF3Qiw0QkFBNEIsMENBQTBDLHFDQUFxQyxrQ0FBa0Msa0NBQWtDLHNCQUFzQixvQkFBb0IsMEJBQTBCLGdDQUFnQyxLQUFLLDhCQUE4Qix1QkFBdUIsS0FBSyxzR0FBc0cscUJBQXFCLGtCQUFrQixtQkFBbUIseUJBQXlCLGdCQUFnQixpQkFBaUIsaUJBQWlCLHNCQUFzQix1QkFBdUIsc0NBQXNDLDZFQUE2RSxLQUFLLGdDQUFnQyx5QkFBeUIscUJBQXFCLGtCQUFrQixtQkFBbUIsS0FBSyxxQ0FBcUMsb0JBQW9CLEtBQUssaUVBQWlFLHFCQUFxQixrQkFBa0Isa0JBQWtCLHlCQUF5Qix5QkFBeUIsc0NBQXNDLHlCQUF5QixpQkFBaUIsd0NBQXdDLG9DQUFvQyxnQ0FBZ0Msd0NBQXdDLG1DQUFtQyxnQ0FBZ0MsS0FBSyxnREFBZ0Qsd0NBQXdDLG9DQUFvQyxnQ0FBZ0MsS0FBSyxpREFBaUQsc0NBQXNDLGtDQUFrQyw4QkFBOEIsS0FBSywwSEFBMEgsdUNBQXVDLFdBQVcsd0ZBQXdGLHlCQUF5QixtQkFBbUIsdUJBQXVCLDhCQUE4QixpQ0FBaUMseUJBQXlCLG1DQUFtQyxnUUFBZ1EsMEJBQTBCLDRCQUE0Qiw4REFBOEQseUNBQXlDLG9DQUFvQyxpQ0FBaUMsS0FBSyxpSUFBaUkscUNBQXFDLGtCQUFrQixLQUFLLG1CQUFtQixtQkFBbUIsMEJBQTBCLEtBQUssc0JBQXNCLDRDQUE0QywwQkFBMEIsZ0NBQWdDLDhCQUE4QixnQ0FBZ0MsS0FBSyxpQkFBaUIsb0JBQW9CLDhCQUE4QiwwQkFBMEIsd0JBQXdCLGdDQUFnQyxXQUFXLHFDQUFxQyxvQkFBb0IsNkJBQTZCLDBCQUEwQiw4QkFBOEIsdUJBQXVCLHlDQUF5Qyw0Q0FBNEMsa0JBQWtCLG1DQUFtQywwQkFBMEIsS0FBSyx5QkFBeUIsb0JBQW9CLDhCQUE4QixLQUFLLDJCQUEyQix1QkFBdUIsNENBQTRDLDhCQUE4QixtQkFBbUIsMEJBQTBCLHVCQUF1Qiw0QkFBNEIsaURBQWlELG9CQUFvQiwwQkFBMEIsZ0NBQWdDLEtBQUssaUNBQWlDLDhCQUE4QixtQkFBbUIsS0FBSyxnQ0FBZ0MsdUJBQXVCLHVCQUF1QixnQ0FBZ0MsV0FBVyx1Q0FBdUMsa0RBQWtELDZDQUE2QywrQkFBK0Isb0JBQW9CLDJCQUEyQixzQkFBc0IsOEJBQThCLGlDQUFpQyxLQUFLLGdEQUFnRCxtQkFBbUIsS0FBSyxtQ0FBbUMsdUJBQXVCLHVCQUF1QixLQUFLLG1DQUFtQyx1QkFBdUIsdUJBQXVCLGlEQUFpRCwwQkFBMEIsaUNBQWlDLEtBQUssMkJBQTJCLDZDQUE2QyxxQ0FBcUMsMEJBQTBCLCtCQUErQix1QkFBdUIsb0JBQW9CLDJCQUEyQixzQkFBc0IsdUJBQXVCLEtBQUssbUJBQW1CLHVCQUF1QiwrQkFBK0IsNkJBQTZCLE9BQU8sb0JBQW9CLGdDQUFnQyx1QkFBdUIscUNBQXFDLDBCQUEwQixtQkFBbUIsdUJBQXVCLHNCQUFzQix5QkFBeUIsNlNBQTZTLEtBQUssOEJBQThCLHNCQUFzQixnQ0FBZ0MsS0FBSywwQkFBMEIsb0JBQW9CLDZCQUE2QiwwQkFBMEIseUNBQXlDLDRDQUE0QywwQkFBMEIsMEJBQTBCLEtBQUsscUJBQXFCLGdDQUFnQyxLQUFLLG9CQUFvQix5Q0FBeUMsNENBQTRDLDBCQUEwQiwyQkFBMkIsaUJBQWlCLEtBQUssa0JBQWtCLG9CQUFvQixLQUFLLHdCQUF3QixpREFBaUQsNkNBQTZDLCtCQUErQixvQkFBb0IsMkJBQTJCLHdCQUF3Qiw2QkFBNkIscUJBQXFCLDJCQUEyQiwyQkFBMkIsaUNBQWlDLEtBQUssOEJBQThCLG1CQUFtQixLQUFLLDZCQUE2Qix1QkFBdUIsdUJBQXVCLGlDQUFpQyxLQUFLLDhCQUE4QiwwQkFBMEIsa0JBQWtCLG9CQUFvQiw4QkFBOEIsNkJBQTZCLDBCQUEwQixLQUFLLDZCQUE2QiwwQkFBMEIsMEJBQTBCLEtBQUssa0RBQWtELHlCQUF5QixpREFBaUQsMEJBQTBCLHVCQUF1QixpQkFBaUIsc0JBQXNCLG1FQUFtRSxLQUFLLDBEQUEwRCx5QkFBeUIsa0JBQWtCLHFCQUFxQixrQkFBa0Isa0JBQWtCLG1CQUFtQixxQkFBcUIsMEJBQTBCLHlDQUF5QyxnQ0FBZ0MsK0JBQStCLGlCQUFpQixLQUFLLDBEQUEwRCxrQ0FBa0MseUNBQXlDLHFDQUFxQyxLQUFLLGtFQUFrRSxpQkFBaUIsS0FBSywwRUFBMEUseURBQXlELEtBQUssK0JBQStCLHlCQUF5QixzQkFBc0IsdUJBQXVCLHVCQUF1QiwwQkFBMEIsd0JBQXdCLFNBQVMsdUNBQXVDLHlCQUF5QixrQ0FBa0Msc0NBQXNDLG9EQUFvRCxvQ0FBb0MscUNBQXFDLDZDQUE2QyxlQUFlLHVFQUF1RSxLQUFLLHFCQUFxQixrQkFBa0IsS0FBSyxlQUFlLG9CQUFvQiwwQkFBMEIsMkNBQTJDLDJDQUEyQyxpQkFBaUIsa0JBQWtCLDBCQUEwQixLQUFLLHFDQUFxQyxtQkFBbUIsa0JBQWtCLHNCQUFzQixLQUFLLHFDQUFxQywyQ0FBMkMsZ0NBQWdDLEtBQUssdUJBQXVCLG9CQUFvQiw4QkFBOEIsOEJBQThCLGlEQUFpRCxtQkFBbUIsb0JBQW9CLDBCQUEwQixxQkFBcUIscUNBQXFDLGdDQUFnQyxLQUFLLGdDQUFnQyxtQkFBbUIsS0FBSyxtQkFBbUIsZ0RBQWdELGtDQUFrQyxLQUFLLG9CQUFvQiwwQ0FBMEMsa0NBQWtDLEtBQUssbUNBQW1DLHdCQUF3QixvQkFBb0IsT0FBTyxrQkFBa0IseUJBQXlCLHdCQUF3Qix5QkFBeUIsT0FBTyxLQUFLLG9DQUFvQyxrQkFBa0IseUJBQXlCLHdCQUF3QixPQUFPLE1BQU0sMkJBQTJCO0FBQzM0NEI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUF1RztBQUN2RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHVGQUFPOzs7O0FBSWlEO0FBQ3pFLE9BQU8saUVBQWUsdUZBQU8sSUFBSSw4RkFBYyxHQUFHLDhGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7QUN4QmtCO0FBQzdDLDhDQUE4Qyx3REFBWTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsY0FBYzs7Ozs7Ozs7Ozs7Ozs7O0FDMUVnQjtBQUM3Qyw4Q0FBOEMsd0RBQVk7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxhQUFhOzs7Ozs7Ozs7Ozs7Ozs7O0FDcEJpQjtBQUNBO0FBQzdDO0FBQ0EsOENBQThDLHdEQUFZO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaURBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsS0FBSzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hEcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmNEI7QUFDaUI7QUFDZDtBQUNnQjtBQUNFO0FBQ2pEO0FBQ0EsOENBQThDLHdEQUFZO0FBQzFELDhDQUE4QyxpREFBSztBQUNuRCw4Q0FBOEMseURBQWE7QUFDM0QsOENBQThDLDBEQUFjO0FBQzVEO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtbWFuYWdlbWVudC1hcHAvLi9zcmMvc3R5bGUvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZW1lbnQtYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZW1lbnQtYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VtZW50LWFwcC8uL3NyYy9zdHlsZS9zdHlsZXMuY3NzP2FmN2MiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VtZW50LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZW1lbnQtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZW1lbnQtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlbWVudC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VtZW50LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlbWVudC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZW1lbnQtYXBwLy4vc3JjL0RPTUludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZW1lbnQtYXBwLy4vc3JjL2NyZWF0ZVByb2plY3RzLmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlbWVudC1hcHAvLi9zcmMvZGVsZXRlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZW1lbnQtYXBwLy4vc3JjL3VpLXV4LmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlbWVudC1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VtZW50LWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZW1lbnQtYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZW1lbnQtYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VtZW50LWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlbWVudC1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZW1lbnQtYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlbWVudC1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuXFx0LS1jbHItcHJpbWFyeTogcmdiKDQxLCAxNDUsIDI1NSk7XFxyXFxuXFx0LS1jbHItbGlnaHRHcmF5OiByZ2IoMjMyLCAyMzIsIDIzMik7XFxyXFxuXFx0LS1jbHItbGlnaHQ6ICNmNGY0ZjQ7XFxyXFxuXFx0LS1jbHItZGFyazogcmdiKDU4LCA1OCwgNTgpO1xcclxcblxcdC0tY2xyLXdoaXRlOiByZ2IoMjUyLCAyNTIsIDI1Mik7XFxyXFxuXFx0LS1jbHItd2FybmluZzogI2U5NzU2MDtcXHJcXG5cXHQtLWNsci1uYXZIaWdobGlnaHQ6ICM0Zjc3OTRkMDtcXHJcXG5cXHQtLWNsci1taW5lU2hhZnQ6ICMyMzIzMjM7XFxyXFxuXFx0LS1jbHItZ2FsbGVyeTogI2VkZWRlZDtcXHJcXG5cXHQtLWNsci1lbGZHcmVlbjogIzA1ODE3OTtcXHJcXG5cXHQtLWNsci1uZWJ1bGE6ICNjYmRiZGE7XFxyXFxuXFx0LS1jbHItY29tcGxldGVkVGFzazogI2E1YjFjMDtcXHJcXG5cXHQtLWNsci1kZWxldGU6ICNmZjQ5NDk2MjtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG5cXHRwYWRkaW5nLWJvdHRvbTogMTAlO1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1jbHItbmVidWxhKTtcXHJcXG5cXHRjb2xvcjogdmFyKC0tY2xyLW1pbmVTaGFmdCk7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcblxcdGNvbG9yOiB2YXIoLS1jbHItZGFyayk7XFxyXFxuXFx0Zm9udC1zaXplOiAzcmVtO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0YWxpZ24tc2VsZjogY2VudGVyO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0bWFyZ2luOiAtMC41ZW0gMC41ZW0gMC41ZW0gNDAuNSU7XFxyXFxuXFx0ei1pbmRleDogMjtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcblxcclxcbi5oaWRlSDEge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAwcHg7XFxyXFxufVxcclxcblxcclxcbiNjb250YWluZXIge1xcclxcblxcdG1hcmdpbi1yaWdodDogLTE4JTtcXHJcXG5cXHRwYWRkaW5nLWxlZnQ6IDElO1xcclxcblxcdGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcclxcblxcdGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcclxcblxcdCAgXFxcImxvZ29cXFwiXFxyXFxuXFx0ICBcXFwicHJvamVjdHNcXFwiXFxyXFxuXFx0ICBcXFwidGFza3NcXFwiO1xcclxcbn0gXFxyXFxuXFxyXFxuI2dpdExvZ29EaXZDb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGdyaWQtYXJlYTogbG9nbztcXHJcXG59XFxyXFxuXFxyXFxuLmdpdExvZ28ge1xcclxcblxcdHdpZHRoOiAxMDBweDtcXHJcXG5cXHRoZWlnaHQ6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbmF2Q29udGFpbmVyIHtcXHJcXG5cXHQvKiBkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdG1hcmdpbi1ib3R0b206IDEwdnc7XFxyXFxuXFx0Z3JpZC1hcmVhOiBwcm9qZWN0cztcXHJcXG59XFxyXFxuXFxyXFxuI21lbnVUb2dnbGUge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRtYXgtd2lkdGg6IDUwdnc7XFxyXFxuXFx0dG9wOiA1MHB4O1xcclxcblxcdGxlZnQ6IDUwcHg7XFxyXFxuXFx0ei1pbmRleDogMTtcXHJcXG5cXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcclxcblxcdC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuXFx0LW1zLXVzZXItc2VsZWN0OiBub25lO1xcclxcblxcdHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudVRvZ2dsZSBsaSB7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xcclxcblxcdC1vLXRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcXHJcXG5cXHR0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XFxyXFxuXFx0cGFkZGluZzogMTBweCAwcHggMTBweCA1MHB4O1xcclxcblxcdGZvbnQtc2l6ZTogMjJweDtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuI21lbnVUb2dnbGUgbGk6aG92ZXIge1xcclxcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIFRoZSBoYW1idXJnZXIgYnV0dG9uIGhpZGRlbiBpbnNpZGUgYW4gI2lucHV0TWVudSBlbGVtZW50ICovXFxyXFxuI21lbnVUb2dnbGUgI2lucHV0TWVudSB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0d2lkdGg6IDMwcHg7XFxyXFxuXFx0aGVpZ2h0OiAzMHB4O1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHR0b3A6IC03cHg7XFxyXFxuXFx0bGVmdDogLTVweDtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRcXHJcXG5cXHRvcGFjaXR5OiAwO1xcclxcblxcdC8qIGhpZGUgdGhpcyAqL1xcclxcblxcdHotaW5kZXg6IDI7XFxyXFxuXFx0LyogYW5kIHBsYWNlIGl0IG92ZXIgdGhlIGhhbWJ1cmdlciAqL1xcclxcblxcdC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI21lbnVUb2dnbGUgI2xhYmVsTWVudSB7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdHdpZHRoOiAzMHB4O1xcclxcblxcdGhlaWdodDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuI21lbnVUb2dnbGUgI2xhYmVsTWVudSBzcGFuIHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIEhhbWJ1cmdlclxcclxcbiAqL1xcclxcbiNtZW51VG9nZ2xlICNsYWJlbE1lbnUgZGl2IHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHR3aWR0aDogMzBweDtcXHJcXG5cXHRoZWlnaHQ6IDJweDtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiA2cHg7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdGJhY2tncm91bmQ6IHZhcigtLWNsci1lbGZHcmVlbik7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcdHotaW5kZXg6IDE7XFxyXFxuXFx0LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA0cHggMHB4O1xcclxcblxcdC1tcy10cmFuc2Zvcm0tb3JpZ2luOiA0cHggMHB4O1xcclxcblxcdHRyYW5zZm9ybS1vcmlnaW46IDRweCAwcHg7XFxyXFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcclxcblxcdC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuI21lbnVUb2dnbGUgI2xhYmVsTWVudSBkaXY6Zmlyc3QtY2hpbGQge1xcclxcblxcdC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCUgMTAwJTtcXHJcXG5cXHQtbXMtdHJhbnNmb3JtLW9yaWdpbjogMCUgMTAwJTtcXHJcXG5cXHR0cmFuc2Zvcm0tb3JpZ2luOiAwJSAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudVRvZ2dsZSAjbGFiZWxNZW51IGRpdjpudGgtY2hpbGQoMikge1xcclxcblxcdC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XFxyXFxuXFx0LW1zLXRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xcclxcblxcdHRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBcXHJcXG4gKiBDaGFuZ2UgdGhlIGNvbG9yIG9mIHRoZSBoYW1idXJnZXIgd2hlbiB0b2dnbGVkXFxyXFxuICovXFxyXFxuI21lbnVUb2dnbGUgI2lucHV0TWVudTpjaGVja2VkKyNsYWJlbE1lbnUgZGl2IHtcXHJcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1jbHItbWluZVNoYWZ0KTtcXHJcXG5cXHRcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiBVc2UgYWJzb2x1dGUgcG9zaXRpb25pbmcgdG8gcGxhY2UgdGhlIG1lbnUgb2ZmLXNjcmVlblxcclxcbiAqL1xcclxcbiNtZW51IHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0d2lkdGg6IDEwMHZ3O1xcclxcblxcdG1heC13aWR0aDogOTAwcHg7XFxyXFxuXFx0bWFyZ2luOiAtODBweCAwIDAgLTUwcHg7XFxyXFxuXFx0cGFkZGluZzogNTBweCAwcHggNTBweCAwcHg7XFxyXFxuXFx0cGFkZGluZy10b3A6IDEyNXB4O1xcclxcblxcdGJhY2tncm91bmQ6IHZhcigtLWNsci1saWdodCk7XFxyXFxuXFx0Ym94LXNoYWRvdzogXFxyXFxuXFx0XFx0XFx0XFx0MCAyLjhweCAyLjJweCByZ2JhKDAsIDAsIDAsIDAuMDM0KSxcXHJcXG5cXHRcXHRcXHRcXHQwIDYuN3B4IDUuM3B4IHJnYmEoMCwgMCwgMCwgMC4wNDgpLFxcclxcblxcdFxcdFxcdFxcdDAgMTIuNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA2KSxcXHJcXG5cXHRcXHRcXHRcXHQwIDIyLjNweCAxNy45cHggcmdiYSgwLCAwLCAwLCAwLjA3MiksXFxyXFxuXFx0XFx0XFx0XFx0MCA0MS44cHggMzMuNHB4IHJnYmEoMCwgMCwgMCwgMC4wODYpO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuXFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcblxcdC8qIEhpZGUgdGhlIG1lbnUgb2ZmLXNjcmVlbiB0byB0aGUgbGVmdCAqL1xcclxcblxcdGxlZnQ6IDA7XFxyXFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBsZWZ0IDAuM3MgZWFzZTtcXHJcXG5cXHQtby10cmFuc2l0aW9uOiBsZWZ0IDAuM3MgZWFzZTtcXHJcXG5cXHR0cmFuc2l0aW9uOiBsZWZ0IDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLypcXHJcXG4gKiBTbGlkZSB0aGUgbWVudSBpbiBmcm9tIGxlZnQgd2hlbiB0aGUgI2lucHV0TWVudSBpcyBjaGVja2VkXFxyXFxuICovXFxyXFxuI21lbnVUb2dnbGUgI2lucHV0TWVudTpjaGVja2VkfnVsIHtcXHJcXG5cXHJcXG5cXHR0cmFuc2l0aW9uOiBsZWZ0IDAuM3MgZWFzZTtcXHJcXG5cXHRsZWZ0OiAtMjAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtaW1nIHtcXHJcXG5cXHR3aWR0aDogMS43ZW07XFxyXFxuXFx0cGFkZGluZy1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZS1saXN0IHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItZWxmR3JlZW4pO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDM1cHg7XFxyXFxuXFx0bWFyZ2luOiAwcHggMjVweCAwcHggMjVweDtcXHJcXG5cXHRjb2xvcjogdmFyKC0tY2xyLWxpZ2h0KTtcXHJcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4jbXlGb3JtIHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0bWFyZ2luLXRvcDogMS44ZW07XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG5cXHRcXHJcXG59XFxyXFxuXFxyXFxuI215Rm9ybSBmb3JtLCAjbXlUYXNrcyBmb3JtIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRmb250LXNpemU6IDEuM2VtO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci13aGl0ZSk7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tY2xyLWVsZkdyZWVuKTtcXHJcXG5cXHR3aWR0aDogMTVlbTtcXHJcXG5cXHRwYWRkaW5nOiAyZW0gLjZlbSAxLjVlbSAuNmVtO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbiNhZGRQcm9qZWN0Rm9ybSB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZFByb2plY3RCdXR0b24ge1xcclxcblxcdG1hcmdpbi10b3A6IDMwcHg7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWVsZkdyZWVuKTtcXHJcXG5cXHRjb2xvcjogdmFyKC0tY2xyLWxpZ2h0KTtcXHJcXG5cXHRib3JkZXI6IG5vbmU7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogNDJweDtcXHJcXG5cXHRmb250LXNpemU6IDEuNGVtO1xcclxcblxcdHBhZGRpbmc6IDIlIDEwJSAyJSA4JTtcXHJcXG5cXHRmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbiNhZGRQcm9qZWN0QnV0dG9uOmhvdmVyIHtcXHJcXG5cXHRjb2xvcjogdmFyKC0tY2xyLWxpZ2h0KTtcXHJcXG5cXHRvcGFjaXR5OiAwLjg7XFxyXFxufVxcclxcblxcclxcbiNhZGRQcm9qZWN0QnV0dG9uIHNwYW4ge1xcclxcblxcdGZvbnQtc2l6ZTogMS42ZW07XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDMwMDtcXHJcXG5cXHRwYWRkaW5nOiAwcHggMTBweCAwcHggM3B4O1xcclxcblxcdFxcclxcbn1cXHJcXG5cXHJcXG4jc3VibWl0QnRuLCAjdGFza1N1Ym1pdEJ1dHRvbiB7XFxyXFxuIFxcdGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcXHJcXG4gXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWVsZkdyZWVuKTtcXHJcXG4gXFx0Y29sb3I6IHZhcigtLWNsci1saWdodCk7XFxyXFxuIFxcdGJvcmRlcjogbm9uZTtcXHJcXG4gXFx0Ym9yZGVyLXJhZGl1czogMzJweDtcXHJcXG4gXFx0Zm9udC1zaXplOiAxZW07XFxyXFxuIFxcdHBhZGRpbmc6IDIlIDMwJSAyJSAzMCU7XFxyXFxuXFx0IHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbiNzdWJtaXRCdG46aG92ZXIsICN0YXNrU3VibWl0QnRuOmhvdmVyIHtcXHJcXG5cXHRvcGFjaXR5OiAwLjg7XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0TGFiZWwsICN0YXNrTGFiZWwge1xcclxcblxcdGZvbnQtc2l6ZTogMS4zZW07XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3RJbnB1dCwgI3Rhc2tJbnB1dCB7XFxyXFxuXFx0Zm9udC1zaXplOiAwLjhlbTtcXHJcXG5cXHRmb250LXdlaWdodDogNDAwO1xcclxcblxcdGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcblxcdHBhZGRpbmc6IDBweCAxNXB4IDBweCAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlUHJvamVjdEJ0biB7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tY2xyLW1pbmVTaGFmdCk7XFxyXFxuXFx0YmFja2dyb3VuZDogdmFyKC0tY2xyLXdhcm5pbmcpO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuXFx0cGFkZGluZzogM3B4IDdweCAycHggN3B4O1xcclxcblxcdGZvbnQtc2l6ZTogMC43ZW07XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRtYXJnaW46IDAuNSUgMiUgMCAyJTtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDMwMDtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tMaXN0IHtcXHJcXG5cXHRncmlkLWFyZWE6IHRhc2tzO1xcclxcblxcdC8qIG1hcmdpbi1ib3R0b206IDEzMHZoOyAqL1xcclxcblxcdC8qIG1hcmdpbi10b3A6IDUwdmg7ICovXFxyXFxufVxcclxcblxcclxcbi50b2RvLWxpc3Qge1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxuXFx0bWFyZ2luLXRvcDogMjllbTtcXHJcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1jbHItZ2FsbGVyeSk7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXHJcXG5cXHR3aWR0aDogMTAwdnc7XFxyXFxuXFx0bWF4LXdpZHRoOiA5MDBweDtcXHJcXG5cXHRwYWRkaW5nLXRvcDogMyU7XFxyXFxuXFx0cGFkZGluZy1ib3R0b206IDElO1xcclxcblxcdGJveC1zaGFkb3c6IFxcclxcblxcdFxcdFxcdFxcdDAgMi44cHggMi4ycHggcmdiYSgwLCAwLCAwLCAwLjAzNCksXFxyXFxuXFx0XFx0XFx0XFx0MCA2LjdweCA1LjNweCByZ2JhKDAsIDAsIDAsIDAuMDQ4KSxcXHJcXG5cXHRcXHRcXHRcXHQwIDEyLjVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNiksXFxyXFxuXFx0XFx0XFx0XFx0MCAyMi4zcHggMTcuOXB4IHJnYmEoMCwgMCwgMCwgMC4wNzIpLFxcclxcblxcdFxcdFxcdFxcdDAgNDEuOHB4IDMzLjRweCByZ2JhKDAsIDAsIDAsIDAuMDg2KSxcXHJcXG5cXHRcXHRcXHRcXHQwIDEwMHB4IDgwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZG1hcmdpbkFmdGVyQ2xpY2sge1xcclxcblxcdG1hcmdpbi10b3A6IDV2aDtcXHJcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4udG9kby1oZWFkZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1saWdodCk7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tY2xyLWVsZkdyZWVuKTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcblxcdG1hcmdpbjogMCUgNSUgNSUgNSU7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWNvdW50IHtcXHJcXG5cXHRjb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1ib2R5IHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItbGlnaHQpO1xcclxcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNsci1lbGZHcmVlbik7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXHJcXG5cXHRwYWRkaW5nOiA1JSAxJSAwJSAxJTtcXHJcXG5cXHRtYXJnaW46IDUlO1xcclxcbn1cXHJcXG5cXHJcXG4jbXlUYXNrcyB7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZFRhc2tCdXR0b24ge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcXHJcXG4gXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWVsZkdyZWVuKTtcXHJcXG4gXFx0Y29sb3I6IHZhcigtLWNsci1saWdodCk7XFxyXFxuIFxcdGJvcmRlcjogbm9uZTtcXHJcXG4gXFx0Ym9yZGVyLXJhZGl1czogMzJweDtcXHJcXG4gXFx0Zm9udC1zaXplOiAxLjFlbTtcXHJcXG4gXFx0cGFkZGluZzogMiUgMTAlIDIlIDQlO1xcclxcblxcdCBkaXNwbGF5OiBmbGV4O1xcclxcblxcdCBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdCBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcblxcdCB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkVGFza0J1dHRvbjpob3ZlciB7XFxyXFxuXFx0b3BhY2l0eTogMC44O1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkVGFza0J1dHRvbiBzcGFuIHtcXHJcXG5cXHRmb250LXNpemU6IDEuNWVtO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuXFx0cGFkZGluZzogMHB4IDEwcHggMHB4IDEzcHg7XFxyXFxufVxcclxcblxcclxcbiNjcmVhdGVUYXNrQ29udGFpbmVyIHtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcblxcdHBhZGRpbmc6IDUlO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jdGFza3NDb250YWluZXIge1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tzQ29udGFpbmVyIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHJcXG5cXHRib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jbHItbWluZVNoYWZ0KTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAxNHB4O1xcclxcblxcdGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuXFx0b3V0bGluZTogMDtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZCAxNzVtcyBjdWJpYy1iZXppZXIoMC4xLCAwLjEsIDAuMjUsIDEpO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza3NDb250YWluZXIgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTo6YmVmb3JlIHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0Y29udGVudDogJyc7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHRvcDogLTZweDtcXHJcXG4gICAgbGVmdDogOXB4O1xcclxcbiAgICB3aWR0aDogOHB4O1xcclxcbiAgICBoZWlnaHQ6IDIxcHg7XFxyXFxuXFx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG5cXHRib3JkZXItY29sb3I6IHZhcigtLWNsci1taW5lU2hhZnQpO1xcclxcblxcdGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XFxyXFxuXFx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcblxcdG9wYWNpdHk6IDA7XFxyXFxufVxcclxcblxcclxcbiN0YXNrc0NvbnRhaW5lciBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQge1xcclxcblxcdGNvbG9yOiB2YXIoLS1jbHItbWluZVNoYWZ0KTtcXHJcXG5cXHRib3JkZXItY29sb3I6IHZhcigtLWNsci1taW5lU2hhZnQpO1xcclxcblxcdGJhY2tncm91bmQ6IHZhcigtLWNsci1wcmltYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tzQ29udGFpbmVyIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZDo6YmVmb3JlIHtcXHJcXG5cXHRvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza3NDb250YWluZXIgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkIH4gbGFiZWw6OmJlZm9yZSB7XFxyXFxuXFx0Y2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDAgMTAwJSk7XFxyXFxufVxcclxcblxcclxcbiN0YXNrc0NvbnRhaW5lciBsYWJlbCB7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRmb250LXNpemU6IDEuM2VtO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuXFx0cGFkZGluZzogMCAwLjQ1ZW0gMDtcXHJcXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tzQ29udGFpbmVyIGxhYmVsOjpiZWZvcmUge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRjb250ZW50OiBhdHRyKGRhdGEtY29udGVudCk7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWNsci1jb21wbGV0ZWRUYXNrKTtcXHJcXG5cXHRjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAwIDAsIDAlIDEwMCUsIDAgMTAwJSk7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogM3B4O1xcclxcblxcdHRleHQtZGVjb3JhdGlvbi1jb2xvcjogdmFyKC0tY2xyLWRhcmspO1xcclxcblxcdHRvcDogMHB4O1xcclxcblxcdHRyYW5zaXRpb246IGNsaXAtcGF0aCAyMDBtcyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCk7XFxyXFxufVxcclxcblxcclxcbi50YXNrIGxhYmVsIHtcXHJcXG5cXHRib3R0b206IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItZ2FsbGVyeSk7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tY2xyLXByaW1hcnkpO1xcclxcblxcdG1hcmdpbjogMiU7XFxyXFxuXFx0cGFkZGluZzogMiU7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tzQ29udGFpbmVyIC50YXNrIGlucHV0IHtcXHJcXG5cXHRoZWlnaHQ6IDI1cHg7XFxyXFxuXFx0d2lkdGg6IDI1cHg7XFxyXFxuXFx0bWluLXdpZHRoOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza3NDb250YWluZXIgaW5wdXQ6aG92ZXIge1xcclxcblxcdGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNsci1wcmltYXJ5KTtcXHJcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLXN0dWZmIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47fVxcclxcblxcclxcbi5kZWxldGUtc3R1ZmYgYnV0dG9uIHtcXHJcXG5cXHRmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XFxyXFxuXFx0Ym9yZGVyOiBub25lO1xcclxcblxcdG1hcmdpbjogMC41ZW07XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMTJweDtcXHJcXG5cXHRmb250LXNpemU6IDFlbTtcXHJcXG5cXHRwYWRkaW5nOiAwLjExZW0gMWVtIDAuMTFlbSAxZW07XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuLmRlbGV0ZS1zdHVmZiBidXR0b246aG92ZXIge1xcclxcblxcdG9wYWNpdHk6IDAuODtcXHJcXG59XFxyXFxuXFxyXFxuI2NsZWFyQnRuIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItbmF2SGlnaGxpZ2h0KTtcXHJcXG5cXHRjb2xvcjogdmFyKC0tY2xyLW1pbmVTaGFmdCk7XFxyXFxufVxcclxcblxcclxcbiNkZWxldGVCdG4ge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1kZWxldGUpO1xcclxcblxcdGNvbG9yOiB2YXIoLS1jbHItbWluZVNoYWZ0KTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDM3NXB4KSB7XFxyXFxuXFx0I21lbnUsICN0YXNrTGlzdCB7XFxyXFxuXFx0XFx0d2lkdGg6IDkydnc7XFxyXFxuXFx0fVxcclxcblxcdCNjb250YWluZXIge1xcclxcblxcdFxcdG1hcmdpbi1yaWdodDogMCU7XFxyXFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDAlO1xcclxcblxcdFxcdHBhZGRpbmctbGVmdDogMSU7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMTEwMHB4KSB7XFxyXFxuXFx0I2NvbnRhaW5lciB7XFxyXFxuXFx0XFx0bWFyZ2luLXJpZ2h0OiAwJTtcXHJcXG5cXHRcXHRtYXJnaW4tbGVmdDogMCU7XFxyXFxuXFx0fVxcclxcbn0gXFxyXFxuXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxnQ0FBZ0M7Q0FDaEMsbUNBQW1DO0NBQ25DLG9CQUFvQjtDQUNwQiwyQkFBMkI7Q0FDM0IsK0JBQStCO0NBQy9CLHNCQUFzQjtDQUN0Qiw2QkFBNkI7Q0FDN0Isd0JBQXdCO0NBQ3hCLHNCQUFzQjtDQUN0Qix1QkFBdUI7Q0FDdkIscUJBQXFCO0NBQ3JCLDRCQUE0QjtDQUM1Qix1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQywwQ0FBMEM7O0FBRTNDOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLFNBQVM7Q0FDVCw2QkFBNkI7Q0FDN0IsMkJBQTJCO0NBQzNCLGFBQWE7Q0FDYix1QkFBdUI7O0FBRXhCOztBQUVBO0NBQ0Msc0JBQXNCO0NBQ3RCLGVBQWU7Q0FDZixhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsZ0NBQWdDO0NBQ2hDLFVBQVU7Q0FDVixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsZ0JBQWdCO0NBQ2hCLGFBQWE7Q0FDYiw2QkFBNkI7Q0FDN0IsMEJBQTBCO0NBQzFCLHdCQUF3QjtDQUN4Qjs7O1VBR1M7QUFDVjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsbUJBQW1CO0NBQ25CLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osYUFBYTtB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QTtDQUNDLG9DQUFvQztDQUNwQyx5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCLENBQUM7O0FBRXhCO0NBQ0MsMENBQTBDO0NBQzFDLFlBQVk7Q0FDWixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLGNBQWM7Q0FDZCw4QkFBOEI7Q0FDOUIseUJBQXlCO0FBQzFCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyx5Q0FBeUM7Q0FDekMsMkJBQTJCO0FBQzVCOztBQUVBO0NBQ0MsbUNBQW1DO0NBQ25DLDJCQUEyQjtBQUM1Qjs7QUFFQTtDQUNDO0VBQ0MsV0FBVztDQUNaO0NBQ0E7RUFDQyxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtDQUNqQjtBQUNEOztBQUVBO0NBQ0M7RUFDQyxnQkFBZ0I7RUFDaEIsZUFBZTtDQUNoQjtBQUNEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG5cXHQtLWNsci1wcmltYXJ5OiByZ2IoNDEsIDE0NSwgMjU1KTtcXHJcXG5cXHQtLWNsci1saWdodEdyYXk6IHJnYigyMzIsIDIzMiwgMjMyKTtcXHJcXG5cXHQtLWNsci1saWdodDogI2Y0ZjRmNDtcXHJcXG5cXHQtLWNsci1kYXJrOiByZ2IoNTgsIDU4LCA1OCk7XFxyXFxuXFx0LS1jbHItd2hpdGU6IHJnYigyNTIsIDI1MiwgMjUyKTtcXHJcXG5cXHQtLWNsci13YXJuaW5nOiAjZTk3NTYwO1xcclxcblxcdC0tY2xyLW5hdkhpZ2hsaWdodDogIzRmNzc5NGQwO1xcclxcblxcdC0tY2xyLW1pbmVTaGFmdDogIzIzMjMyMztcXHJcXG5cXHQtLWNsci1nYWxsZXJ5OiAjZWRlZGVkO1xcclxcblxcdC0tY2xyLWVsZkdyZWVuOiAjMDU4MTc5O1xcclxcblxcdC0tY2xyLW5lYnVsYTogI2NiZGJkYTtcXHJcXG5cXHQtLWNsci1jb21wbGV0ZWRUYXNrOiAjYTViMWMwO1xcclxcblxcdC0tY2xyLWRlbGV0ZTogI2ZmNDk0OTYyO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG5cXHRmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcblxcdHBhZGRpbmctYm90dG9tOiAxMCU7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdGJhY2tncm91bmQ6IHZhcigtLWNsci1uZWJ1bGEpO1xcclxcblxcdGNvbG9yOiB2YXIoLS1jbHItbWluZVNoYWZ0KTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdFxcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWNsci1kYXJrKTtcXHJcXG5cXHRmb250LXNpemU6IDNyZW07XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRtYXJnaW46IC0wLjVlbSAwLjVlbSAwLjVlbSA0MC41JTtcXHJcXG5cXHR6LWluZGV4OiAyO1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGVIMSB7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcblxcdG1hcmdpbi1ib3R0b206IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhaW5lciB7XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiAtMTglO1xcclxcblxcdHBhZGRpbmctbGVmdDogMSU7XFxyXFxuXFx0ZGlzcGxheTogZ3JpZDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczogXFxyXFxuXFx0ICBcXFwibG9nb1xcXCJcXHJcXG5cXHQgIFxcXCJwcm9qZWN0c1xcXCJcXHJcXG5cXHQgIFxcXCJ0YXNrc1xcXCI7XFxyXFxufSBcXHJcXG5cXHJcXG4jZ2l0TG9nb0RpdkNvbnRhaW5lciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0Z3JpZC1hcmVhOiBsb2dvO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2l0TG9nbyB7XFxyXFxuXFx0d2lkdGg6IDEwMHB4O1xcclxcblxcdGhlaWdodDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbiNuYXZDb250YWluZXIge1xcclxcblxcdC8qIGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogMTB2dztcXHJcXG5cXHRncmlkLWFyZWE6IHByb2plY3RzO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudVRvZ2dsZSB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdG1heC13aWR0aDogNTB2dztcXHJcXG5cXHR0b3A6IDUwcHg7XFxyXFxuXFx0bGVmdDogNTBweDtcXHJcXG5cXHR6LWluZGV4OiAxO1xcclxcblxcdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuXFx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG5cXHQtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNtZW51VG9nZ2xlIGxpIHtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XFxyXFxuXFx0LW8tdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xcclxcblxcdHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcXHJcXG5cXHRwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDUwcHg7XFxyXFxuXFx0Zm9udC1zaXplOiAyMnB4O1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudVRvZ2dsZSBsaTpob3ZlciB7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogVGhlIGhhbWJ1cmdlciBidXR0b24gaGlkZGVuIGluc2lkZSBhbiAjaW5wdXRNZW51IGVsZW1lbnQgKi9cXHJcXG4jbWVudVRvZ2dsZSAjaW5wdXRNZW51IHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHR3aWR0aDogMzBweDtcXHJcXG5cXHRoZWlnaHQ6IDMwcHg7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdHRvcDogLTdweDtcXHJcXG5cXHRsZWZ0OiAtNXB4O1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdFxcclxcblxcdG9wYWNpdHk6IDA7XFxyXFxuXFx0LyogaGlkZSB0aGlzICovXFxyXFxuXFx0ei1pbmRleDogMjtcXHJcXG5cXHQvKiBhbmQgcGxhY2UgaXQgb3ZlciB0aGUgaGFtYnVyZ2VyICovXFxyXFxuXFx0LXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudVRvZ2dsZSAjbGFiZWxNZW51IHtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0d2lkdGg6IDMwcHg7XFxyXFxuXFx0aGVpZ2h0OiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudVRvZ2dsZSAjbGFiZWxNZW51IHNwYW4ge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICogSGFtYnVyZ2VyXFxyXFxuICovXFxyXFxuI21lbnVUb2dnbGUgI2xhYmVsTWVudSBkaXYge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdHdpZHRoOiAzMHB4O1xcclxcblxcdGhlaWdodDogMnB4O1xcclxcblxcdG1hcmdpbi1ib3R0b206IDZweDtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0YmFja2dyb3VuZDogdmFyKC0tY2xyLWVsZkdyZWVuKTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFx0ei1pbmRleDogMTtcXHJcXG5cXHQtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDRweCAwcHg7XFxyXFxuXFx0LW1zLXRyYW5zZm9ybS1vcmlnaW46IDRweCAwcHg7XFxyXFxuXFx0dHJhbnNmb3JtLW9yaWdpbjogNHB4IDBweDtcXHJcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxuXFx0LW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudVRvZ2dsZSAjbGFiZWxNZW51IGRpdjpmaXJzdC1jaGlsZCB7XFxyXFxuXFx0LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwJSAxMDAlO1xcclxcblxcdC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAwJSAxMDAlO1xcclxcblxcdHRyYW5zZm9ybS1vcmlnaW46IDAlIDEwMCU7XFxyXFxufVxcclxcblxcclxcbiNtZW51VG9nZ2xlICNsYWJlbE1lbnUgZGl2Om50aC1jaGlsZCgyKSB7XFxyXFxuXFx0LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcXHJcXG5cXHQtbXMtdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XFxyXFxuXFx0dHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XFxyXFxufVxcclxcblxcclxcbi8qIFxcclxcbiAqIENoYW5nZSB0aGUgY29sb3Igb2YgdGhlIGhhbWJ1cmdlciB3aGVuIHRvZ2dsZWRcXHJcXG4gKi9cXHJcXG4jbWVudVRvZ2dsZSAjaW5wdXRNZW51OmNoZWNrZWQrI2xhYmVsTWVudSBkaXYge1xcclxcblxcdGJhY2tncm91bmQ6IHZhcigtLWNsci1taW5lU2hhZnQpO1xcclxcblxcdFxcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIFVzZSBhYnNvbHV0ZSBwb3NpdGlvbmluZyB0byBwbGFjZSB0aGUgbWVudSBvZmYtc2NyZWVuXFxyXFxuICovXFxyXFxuI21lbnUge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHR3aWR0aDogMTAwdnc7XFxyXFxuXFx0bWF4LXdpZHRoOiA5MDBweDtcXHJcXG5cXHRtYXJnaW46IC04MHB4IDAgMCAtNTBweDtcXHJcXG5cXHRwYWRkaW5nOiA1MHB4IDBweCA1MHB4IDBweDtcXHJcXG5cXHRwYWRkaW5nLXRvcDogMTI1cHg7XFxyXFxuXFx0YmFja2dyb3VuZDogdmFyKC0tY2xyLWxpZ2h0KTtcXHJcXG5cXHRib3gtc2hhZG93OiBcXHJcXG5cXHRcXHRcXHRcXHQwIDIuOHB4IDIuMnB4IHJnYmEoMCwgMCwgMCwgMC4wMzQpLFxcclxcblxcdFxcdFxcdFxcdDAgNi43cHggNS4zcHggcmdiYSgwLCAwLCAwLCAwLjA0OCksXFxyXFxuXFx0XFx0XFx0XFx0MCAxMi41cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDYpLFxcclxcblxcdFxcdFxcdFxcdDAgMjIuM3B4IDE3LjlweCByZ2JhKDAsIDAsIDAsIDAuMDcyKSxcXHJcXG5cXHRcXHRcXHRcXHQwIDQxLjhweCAzMy40cHggcmdiYSgwLCAwLCAwLCAwLjA4Nik7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXHJcXG5cXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuXFx0LyogSGlkZSB0aGUgbWVudSBvZmYtc2NyZWVuIHRvIHRoZSBsZWZ0ICovXFxyXFxuXFx0bGVmdDogMDtcXHJcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IGxlZnQgMC4zcyBlYXNlO1xcclxcblxcdC1vLXRyYW5zaXRpb246IGxlZnQgMC4zcyBlYXNlO1xcclxcblxcdHRyYW5zaXRpb246IGxlZnQgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKlxcclxcbiAqIFNsaWRlIHRoZSBtZW51IGluIGZyb20gbGVmdCB3aGVuIHRoZSAjaW5wdXRNZW51IGlzIGNoZWNrZWRcXHJcXG4gKi9cXHJcXG4jbWVudVRvZ2dsZSAjaW5wdXRNZW51OmNoZWNrZWR+dWwge1xcclxcblxcclxcblxcdHRyYW5zaXRpb246IGxlZnQgMC4zcyBlYXNlO1xcclxcblxcdGxlZnQ6IC0yMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1pbWcge1xcclxcblxcdHdpZHRoOiAxLjdlbTtcXHJcXG5cXHRwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlLWxpc3Qge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1lbGZHcmVlbik7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMzVweDtcXHJcXG5cXHRtYXJnaW46IDBweCAyNXB4IDBweCAyNXB4O1xcclxcblxcdGNvbG9yOiB2YXIoLS1jbHItbGlnaHQpO1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbiNteUZvcm0ge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRtYXJnaW4tdG9wOiAxLjhlbTtcXHJcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcclxcblxcdFxcclxcbn1cXHJcXG5cXHJcXG4jbXlGb3JtIGZvcm0sICNteVRhc2tzIGZvcm0ge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGZvbnQtc2l6ZTogMS4zZW07XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXdoaXRlKTtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jbHItZWxmR3JlZW4pO1xcclxcblxcdHdpZHRoOiAxNWVtO1xcclxcblxcdHBhZGRpbmc6IDJlbSAuNmVtIDEuNWVtIC42ZW07XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZFByb2plY3RGb3JtIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkUHJvamVjdEJ1dHRvbiB7XFxyXFxuXFx0bWFyZ2luLXRvcDogMzBweDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItZWxmR3JlZW4pO1xcclxcblxcdGNvbG9yOiB2YXIoLS1jbHItbGlnaHQpO1xcclxcblxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiA0MnB4O1xcclxcblxcdGZvbnQtc2l6ZTogMS40ZW07XFxyXFxuXFx0cGFkZGluZzogMiUgMTAlIDIlIDglO1xcclxcblxcdGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZFByb2plY3RCdXR0b246aG92ZXIge1xcclxcblxcdGNvbG9yOiB2YXIoLS1jbHItbGlnaHQpO1xcclxcblxcdG9wYWNpdHk6IDAuODtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZFByb2plY3RCdXR0b24gc3BhbiB7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjZlbTtcXHJcXG5cXHRmb250LXdlaWdodDogMzAwO1xcclxcblxcdHBhZGRpbmc6IDBweCAxMHB4IDBweCAzcHg7XFxyXFxuXFx0XFxyXFxufVxcclxcblxcclxcbiNzdWJtaXRCdG4sICN0YXNrU3VibWl0QnV0dG9uIHtcXHJcXG4gXFx0Zm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xcclxcbiBcXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItZWxmR3JlZW4pO1xcclxcbiBcXHRjb2xvcjogdmFyKC0tY2xyLWxpZ2h0KTtcXHJcXG4gXFx0Ym9yZGVyOiBub25lO1xcclxcbiBcXHRib3JkZXItcmFkaXVzOiAzMnB4O1xcclxcbiBcXHRmb250LXNpemU6IDFlbTtcXHJcXG4gXFx0cGFkZGluZzogMiUgMzAlIDIlIDMwJTtcXHJcXG5cXHQgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdEJ0bjpob3ZlciwgI3Rhc2tTdWJtaXRCdG46aG92ZXIge1xcclxcblxcdG9wYWNpdHk6IDAuODtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3RMYWJlbCwgI3Rhc2tMYWJlbCB7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjNlbTtcXHJcXG5cXHRmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdElucHV0LCAjdGFza0lucHV0IHtcXHJcXG5cXHRmb250LXNpemU6IDAuOGVtO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuXFx0cGFkZGluZzogMHB4IDE1cHggMHB4IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGVQcm9qZWN0QnRuIHtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jbHItbWluZVNoYWZ0KTtcXHJcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS1jbHItd2FybmluZyk7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXHJcXG5cXHRwYWRkaW5nOiAzcHggN3B4IDJweCA3cHg7XFxyXFxuXFx0Zm9udC1zaXplOiAwLjdlbTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdG1hcmdpbjogMC41JSAyJSAwIDIlO1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza0xpc3Qge1xcclxcblxcdGdyaWQtYXJlYTogdGFza3M7XFxyXFxuXFx0LyogbWFyZ2luLWJvdHRvbTogMTMwdmg7ICovXFxyXFxuXFx0LyogbWFyZ2luLXRvcDogNTB2aDsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tbGlzdCB7XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXHJcXG5cXHRtYXJnaW4tdG9wOiAyOWVtO1xcclxcblxcdGJhY2tncm91bmQ6IHZhcigtLWNsci1nYWxsZXJ5KTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcblxcdHdpZHRoOiAxMDB2dztcXHJcXG5cXHRtYXgtd2lkdGg6IDkwMHB4O1xcclxcblxcdHBhZGRpbmctdG9wOiAzJTtcXHJcXG5cXHRwYWRkaW5nLWJvdHRvbTogMSU7XFxyXFxuXFx0Ym94LXNoYWRvdzogXFxyXFxuXFx0XFx0XFx0XFx0MCAyLjhweCAyLjJweCByZ2JhKDAsIDAsIDAsIDAuMDM0KSxcXHJcXG5cXHRcXHRcXHRcXHQwIDYuN3B4IDUuM3B4IHJnYmEoMCwgMCwgMCwgMC4wNDgpLFxcclxcblxcdFxcdFxcdFxcdDAgMTIuNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA2KSxcXHJcXG5cXHRcXHRcXHRcXHQwIDIyLjNweCAxNy45cHggcmdiYSgwLCAwLCAwLCAwLjA3MiksXFxyXFxuXFx0XFx0XFx0XFx0MCA0MS44cHggMzMuNHB4IHJnYmEoMCwgMCwgMCwgMC4wODYpLFxcclxcblxcdFxcdFxcdFxcdDAgMTAwcHggODBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkbWFyZ2luQWZ0ZXJDbGljayB7XFxyXFxuXFx0bWFyZ2luLXRvcDogNXZoO1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcblxcclxcbi50b2RvLWhlYWRlciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWxpZ2h0KTtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jbHItZWxmR3JlZW4pO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuXFx0bWFyZ2luOiAwJSA1JSA1JSA1JTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stY291bnQge1xcclxcblxcdGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWJvZHkge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1saWdodCk7XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tY2xyLWVsZkdyZWVuKTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcblxcdHBhZGRpbmc6IDUlIDElIDAlIDElO1xcclxcblxcdG1hcmdpbjogNSU7XFxyXFxufVxcclxcblxcclxcbiNteVRhc2tzIHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkVGFza0J1dHRvbiB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xcclxcbiBcXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItZWxmR3JlZW4pO1xcclxcbiBcXHRjb2xvcjogdmFyKC0tY2xyLWxpZ2h0KTtcXHJcXG4gXFx0Ym9yZGVyOiBub25lO1xcclxcbiBcXHRib3JkZXItcmFkaXVzOiAzMnB4O1xcclxcbiBcXHRmb250LXNpemU6IDEuMWVtO1xcclxcbiBcXHRwYWRkaW5nOiAyJSAxMCUgMiUgNCU7XFxyXFxuXFx0IGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0IGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0IG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuXFx0IHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbiNhZGRUYXNrQnV0dG9uOmhvdmVyIHtcXHJcXG5cXHRvcGFjaXR5OiAwLjg7XFxyXFxufVxcclxcblxcclxcbiNhZGRUYXNrQnV0dG9uIHNwYW4ge1xcclxcblxcdGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXHJcXG5cXHRwYWRkaW5nOiAwcHggMTBweCAwcHggMTNweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NyZWF0ZVRhc2tDb250YWluZXIge1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuXFx0cGFkZGluZzogNSU7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbiN0YXNrc0NvbnRhaW5lciB7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza3NDb250YWluZXIgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcblxcdGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNsci1taW5lU2hhZnQpO1xcclxcblxcdGJvcmRlci1yYWRpdXM6IDE0cHg7XFxyXFxuXFx0YXBwZWFyYW5jZTogbm9uZTtcXHJcXG5cXHRvdXRsaW5lOiAwO1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDE3NW1zIGN1YmljLWJlemllcigwLjEsIDAuMSwgMC4yNSwgMSk7XFxyXFxufVxcclxcblxcclxcbiN0YXNrc0NvbnRhaW5lciBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOjpiZWZvcmUge1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRjb250ZW50OiAnJztcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgdG9wOiAtNnB4O1xcclxcbiAgICBsZWZ0OiA5cHg7XFxyXFxuICAgIHdpZHRoOiA4cHg7XFxyXFxuICAgIGhlaWdodDogMjFweDtcXHJcXG5cXHRib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcblxcdGJvcmRlci1jb2xvcjogdmFyKC0tY2xyLW1pbmVTaGFmdCk7XFxyXFxuXFx0Ym9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcXHJcXG5cXHR0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxuXFx0b3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tzQ29udGFpbmVyIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCB7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWNsci1taW5lU2hhZnQpO1xcclxcblxcdGJvcmRlci1jb2xvcjogdmFyKC0tY2xyLW1pbmVTaGFmdCk7XFxyXFxuXFx0YmFja2dyb3VuZDogdmFyKC0tY2xyLXByaW1hcnkpO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza3NDb250YWluZXIgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkOjpiZWZvcmUge1xcclxcblxcdG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbiN0YXNrc0NvbnRhaW5lciBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgfiBsYWJlbDo6YmVmb3JlIHtcXHJcXG5cXHRjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCAxMDAlKTtcXHJcXG59XFxyXFxuXFxyXFxuI3Rhc2tzQ29udGFpbmVyIGxhYmVsIHtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdGZvbnQtc2l6ZTogMS4zZW07XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXHJcXG5cXHRwYWRkaW5nOiAwIDAuNDVlbSAwO1xcclxcblxcdHVzZXItc2VsZWN0OiBub25lO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4jdGFza3NDb250YWluZXIgbGFiZWw6OmJlZm9yZSB7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdGNvbnRlbnQ6IGF0dHIoZGF0YS1jb250ZW50KTtcXHJcXG5cXHRjb2xvcjogdmFyKC0tY2xyLWNvbXBsZXRlZFRhc2spO1xcclxcblxcdGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDAgMCwgMCUgMTAwJSwgMCAxMDAlKTtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzOiAzcHg7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uLWNvbG9yOiB2YXIoLS1jbHItZGFyayk7XFxyXFxuXFx0dG9wOiAwcHg7XFxyXFxuXFx0dHJhbnNpdGlvbjogY2xpcC1wYXRoIDIwMG1zIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sgbGFiZWwge1xcclxcblxcdGJvdHRvbTogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1nYWxsZXJ5KTtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jbHItcHJpbWFyeSk7XFxyXFxuXFx0bWFyZ2luOiAyJTtcXHJcXG5cXHRwYWRkaW5nOiAyJTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza3NDb250YWluZXIgLnRhc2sgaW5wdXQge1xcclxcblxcdGhlaWdodDogMjVweDtcXHJcXG5cXHR3aWR0aDogMjVweDtcXHJcXG5cXHRtaW4td2lkdGg6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbiN0YXNrc0NvbnRhaW5lciBpbnB1dDpob3ZlciB7XFxyXFxuXFx0Ym9yZGVyOiAycHggc29saWQgdmFyKC0tY2xyLXByaW1hcnkpO1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGUtc3R1ZmYge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjt9XFxyXFxuXFxyXFxuLmRlbGV0ZS1zdHVmZiBidXR0b24ge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcXHJcXG5cXHRib3JkZXI6IG5vbmU7XFxyXFxuXFx0bWFyZ2luOiAwLjVlbTtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcblxcdGZvbnQtc2l6ZTogMWVtO1xcclxcblxcdHBhZGRpbmc6IDAuMTFlbSAxZW0gMC4xMWVtIDFlbTtcXHJcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG4uZGVsZXRlLXN0dWZmIGJ1dHRvbjpob3ZlciB7XFxyXFxuXFx0b3BhY2l0eTogMC44O1xcclxcbn1cXHJcXG5cXHJcXG4jY2xlYXJCdG4ge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1uYXZIaWdobGlnaHQpO1xcclxcblxcdGNvbG9yOiB2YXIoLS1jbHItbWluZVNoYWZ0KTtcXHJcXG59XFxyXFxuXFxyXFxuI2RlbGV0ZUJ0biB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWRlbGV0ZSk7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWNsci1taW5lU2hhZnQpO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMzc1cHgpIHtcXHJcXG5cXHQjbWVudSwgI3Rhc2tMaXN0IHtcXHJcXG5cXHRcXHR3aWR0aDogOTJ2dztcXHJcXG5cXHR9XFxyXFxuXFx0I2NvbnRhaW5lciB7XFxyXFxuXFx0XFx0bWFyZ2luLXJpZ2h0OiAwJTtcXHJcXG5cXHRcXHRtYXJnaW4tbGVmdDogMCU7XFxyXFxuXFx0XFx0cGFkZGluZy1sZWZ0OiAxJTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAxMTAwcHgpIHtcXHJcXG5cXHQjY29udGFpbmVyIHtcXHJcXG5cXHRcXHRtYXJnaW4tcmlnaHQ6IDAlO1xcclxcblxcdFxcdG1hcmdpbi1sZWZ0OiAwJTtcXHJcXG5cXHR9XFxyXFxufSBcXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXHJcbmZ1bmN0aW9uIERPTUludGVyZmFjZSgpIHtcclxuXHJcblx0Ly9jYXRjaGluZyBET01cclxuXHRsZXQgZ2l0TG9nb0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnaXRMb2dvRGl2Jyk7XHJcblx0bGV0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvamVjdEJ1dHRvbicpO1xyXG5cdFxyXG5cdFxyXG5cdGxldCBpbnB1dE1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRNZW51Jyk7XHJcblx0bGV0IHRhc2tMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tMaXN0Jyk7XHJcblx0bGV0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkVGFza0J1dHRvbicpO1xyXG5cdGxldCB0YXNrU3VibWl0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tTdWJtaXRCdXR0b24nKTtcclxuXHJcblx0Ly9ncmFiIHByb2plY3RzQ29udGFpbmVyXHJcblx0Ly9ncmFiIHByb2plY3RzIFxyXG5cdC8vIGxldCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXByb2plY3RdJyk7XHJcblx0Ly8gbGV0IGRlbGV0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlUHJvamVjdEJ0bicpO1xyXG5cclxuXHJcblxyXG5cdFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRE9NSW50ZXJmYWNlOyIsImltcG9ydCBET01JbnRlcmZhY2UgZnJvbSAnLi9ET01JbnRlcmZhY2UuanMnO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgRE9NSW50ZXJmYWNlKTtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdHMoKSB7XHJcblxyXG5cdGxldCBuZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW5ldy1wcm9qZWN0LWZvcm1dJyk7XHJcblx0bGV0IG5ld1Byb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW5ldy1wcm9qZWN0LWlucHV0XScpO1xyXG5cdGxldCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXByb2plY3RzXScpO1xyXG5cdC8vIGxldCBkYXRhUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXByb2plY3RdJyk7XHJcblx0Ly8gbGV0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvamVjdEJ1dHRvbicpO1xyXG5cdFxyXG5cclxuXHQvLyBsZXQgcHJvamVjdHMgPSBbe1xyXG5cdC8vIFx0aWQ6IDEsXHJcblx0Ly8gXHRuYW1lczogJ1Byb2plY3QgMSdcclxuXHQvLyB9LCB7XHJcblx0Ly8gXHRpZDogMixcclxuXHQvLyBcdG5hbWVzOiAnUHJvamVjdCAyJ1xyXG5cdC8vIH1dO1xyXG5cclxuXHRuZXdQcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhZGRQcm9qZWN0KTtcclxuXHJcblxyXG5cclxuXHQvL2NyZWF0ZSBhZGQgcHJvamVjdHMgZnhuXHJcblxyXG5cdGZ1bmN0aW9uIGFkZFByb2plY3QoZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Y29uc3QgcHJvamVjdE5hbWUgPSBuZXdQcm9qZWN0SW5wdXQudmFsdWU7XHJcblx0XHRpZiAocHJvamVjdE5hbWUgPT09IG51bGwgfHwgcHJvamVjdE5hbWUgPT09ICcnKSByZXR1cm47XHJcblx0XHRjb25zdCBwcm9qZWN0ID0gY3JlYXRlUHJvamVjdChwcm9qZWN0TmFtZSk7XHJcblx0XHRuZXdQcm9qZWN0SW5wdXQudmFsdWUgPSBudWxsO1xyXG5cdFx0Ly8gcHJvamVjdHMucHVzaChwcm9qZWN0KTtcclxuXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KG5hbWVzKSB7XHJcblx0XHRsZXQgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcblx0XHRwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2xpc3QtbmFtZScpO1xyXG5cdFx0cHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdCcsIG5hbWVzKTtcclxuXHRcdFxyXG5cdFx0XHJcblx0XHRsZXQgcHJvamVjdEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5cdFx0cHJvamVjdEltZy5jbGFzc0xpc3QuYWRkKCdsaXN0LWltZycpO1xyXG5cdFx0cHJvamVjdEltZy5zcmMgPSAnLi4vc3JjL2ltYWdlcy9zdmcvbGlzdC5zdmcnO1xyXG5cdFx0cHJvamVjdEltZy5hbHQgPSAnbGlzdCc7XHJcblxyXG5cdFx0bGV0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHRcdGRlbGV0ZVByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlUHJvamVjdEJ0bicpO1xyXG5cdFx0ZGVsZXRlUHJvamVjdEJ1dHRvbi5pbm5lclRleHQgPSAnWCc7XHJcblxyXG5cdFx0cHJvamVjdC5hcHBlbmQocHJvamVjdEltZywgbmFtZXMsIGRlbGV0ZVByb2plY3RCdXR0b24pO1xyXG5cclxuXHRcdHByb2plY3RzQ29udGFpbmVyLnByZXBlbmQocHJvamVjdCk7XHJcblx0XHRhZGRNYXJnaW5Ub1Rhc2tzKCk7XHJcblx0XHRcclxuXHRcdGNvbnNvbGUubG9nKFwid29ya3NcIiwgcHJvamVjdCk7XHRcclxuXHJcblx0fVxyXG5cclxuXHQvL2FkZCBtYXJnaW4gdG8gdGFza3Mgd2hlbiBhIG5ldyBwcm9qZWN0IGlzIGFkZGVkXHJcblx0ZnVuY3Rpb24gYWRkTWFyZ2luVG9UYXNrcygpIHtcclxuXHRcdGxldCBnZXRIZWlnaHQgPSBnZXRDb21wdXRlZFN0eWxlKHRhc2tMaXN0KS5tYXJnaW5Ub3A7XHJcblx0XHRsZXQgbmV3SGVpZ2h0ID0gcGFyc2VJbnQoZ2V0SGVpZ2h0KSArIDYwO1xyXG5cdFx0bGV0IGhlaWdodEluU3RyID0gbmV3SGVpZ2h0LnRvU3RyaW5nKCk7XHJcblx0XHR0YXNrTGlzdC5zdHlsZS5tYXJnaW5Ub3AgPSBoZWlnaHRJblN0ciArICdweCc7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coZ2V0SGVpZ2h0LCBuZXdIZWlnaHQsIGhlaWdodEluU3RyKTtcclxuXHR9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQcm9qZWN0czsiLCJpbXBvcnQgRE9NSW50ZXJmYWNlIGZyb20gJy4vRE9NSW50ZXJmYWNlLmpzJztcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIERPTUludGVyZmFjZSk7XHJcblxyXG5cclxuLy8gY3JlYXRlIGRlbGV0ZSBwcm9qZWN0cyBmeG5cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoKSB7XHJcblx0XHJcblx0bGV0IGRlbGV0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlUHJvamVjdEJ0bicpO1xyXG5cdFxyXG5cdC8vb24gcHJlc3NpbmcgYnV0dG9uIGRlbGV0ZSBwcm9qZWN0XHJcblx0ZGVsZXRlUHJvamVjdEJ0bi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZVByb2plY3QpO1xyXG5cdH0pO1xyXG5cclxuXHRmdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3QpIHtcclxuXHRcdHByb2plY3QuY29tcG9zZWRQYXRoKClbMV0ucmVtb3ZlKCk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWxldGVQcm9qZWN0OyIsImltcG9ydCBET01JbnRlcmZhY2UgZnJvbSAnLi9ET01JbnRlcmZhY2UuanMnO1xyXG5pbXBvcnQgZ2l0SW1hZ2UgZnJvbSAnLi9pbWFnZXMvZ2l0LWxvZ28ucG5nJztcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBET01JbnRlcmZhY2UpO1xyXG5cclxuZnVuY3Rpb24gdWlfdXgoKSB7XHJcblx0XHJcblx0bGV0IHByb2plY3RTdWJtaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0QnRuJyk7XHJcblx0Ly9naXQgbG9nbyBpbWdcclxuXHRsZXQgZ2l0TG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5cdGdpdExvZ28uc3JjID0gZ2l0SW1hZ2U7XHJcblx0Z2l0TG9nby5jbGFzc0xpc3QuYWRkKCdnaXRMb2dvJyk7XHJcblx0Z2l0TG9nb0Rpdi5hcHBlbmRDaGlsZChnaXRMb2dvKTtcclxuXHJcblx0Ly8gRE9NIGNsaWNrIGV2ZW50c1xyXG5cdGlucHV0TWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZE1hcmdpbik7XHJcblx0aW5wdXRNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZUgxKTtcclxuXHRhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkVGFzayk7XHJcblx0YWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Gb3JtKTtcclxuXHRwcm9qZWN0U3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VGb3JtKTtcclxuXHR0YXNrU3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VUYXNrRm9ybSk7XHJcblxyXG5cclxuXHJcblx0Ly9GdW5jdGlvbnMgZm9yIGJ1dHRvbnMgYW5kIGFkZGluZyBtYXJnaW5cclxuXHRmdW5jdGlvbiBvcGVuRm9ybSgpIHtcclxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlGb3JtXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblx0XHRhZGRQcm9qZWN0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGNsb3NlRm9ybSgpIHtcclxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlGb3JtXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHRcdGFkZFByb2plY3RCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGFkZE1hcmdpbigpIHtcclxuXHRcdHRhc2tMaXN0LmNsYXNzTGlzdC50b2dnbGUoJ2FkZG1hcmdpbkFmdGVyQ2xpY2snKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGhpZGVIMSgpIHtcclxuXHRcdGxldCBoMUVsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoMScpWzBdO1xyXG5cdFx0Ly8gY29uc29sZS5sb2coaDFFbGUpO1xyXG5cdFx0aDFFbGUuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZUgxJyk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBhZGRUYXNrKCkge1xyXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteVRhc2tzXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblx0XHRhZGRUYXNrQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGNsb3NlVGFza0Zvcm0oKSB7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15VGFza3NcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cdH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVpX3V4OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL3N0eWxlL3N0eWxlcy5jc3MnO1xyXG5pbXBvcnQgRE9NSW50ZXJmYWNlIGZyb20gJy4vRE9NSW50ZXJmYWNlLmpzJztcclxuaW1wb3J0IHVpX3V4IGZyb20gJy4vdWktdXguanMnO1xyXG5pbXBvcnQgZGVsZXRlUHJvamVjdCBmcm9tICcuL2RlbGV0ZVByb2plY3QuanMnO1xyXG5pbXBvcnQgY3JlYXRlUHJvamVjdHMgZnJvbSAnLi9jcmVhdGVQcm9qZWN0cy5qcyc7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgRE9NSW50ZXJmYWNlKTtcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHVpX3V4KTtcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGRlbGV0ZVByb2plY3QpO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgY3JlYXRlUHJvamVjdHMpO1xyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=