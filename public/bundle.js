/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes/Invoice.ts":
/*!********************************!*\
  !*** ./src/classes/Invoice.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Invoice\": () => (/* binding */ Invoice)\n/* harmony export */ });\n//Classes\nclass Invoice {\n    /*   client: string | undefined;\n    details: string | undefined;\n    amount: number | undefined; */\n    constructor(client, details, amount) {\n        this.client = client;\n        this.details = details;\n        this.amount = amount;\n    }\n    onFormat() {\n        return `${this.client} owes ${this.amount}$  ${this.details}`;\n    }\n}\n\n\n//# sourceURL=webpack://finance-logger/./src/classes/Invoice.ts?");

/***/ }),

/***/ "./src/classes/ListTemplate.ts":
/*!*************************************!*\
  !*** ./src/classes/ListTemplate.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ListTemplate\": () => (/* binding */ ListTemplate)\n/* harmony export */ });\nclass ListTemplate {\n    constructor(container) {\n        this.container = container;\n    }\n    render(item, heading, pos) {\n        const li = document.createElement(\"li\");\n        const h4 = document.createElement(\"h4\");\n        const p = document.createElement(\"p\");\n        h4.innerText = heading;\n        p.innerText = item.onFormat();\n        li.appendChild(h4);\n        li.appendChild(p);\n        pos === \"start\" ? this.container.prepend(li) : this.container.appendChild(li);\n    }\n}\n\n\n//# sourceURL=webpack://finance-logger/./src/classes/ListTemplate.ts?");

/***/ }),

/***/ "./src/classes/Payment.ts":
/*!********************************!*\
  !*** ./src/classes/Payment.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Payment\": () => (/* binding */ Payment)\n/* harmony export */ });\n//Classes\nclass Payment {\n    /*   client: string | undefined;\n    details: string | undefined;\n    amount: number | undefined; */\n    constructor(recipient, details, amount) {\n        this.recipient = recipient;\n        this.details = details;\n        this.amount = amount;\n    }\n    onFormat() {\n        return `${this.recipient} owed ${this.amount}$  ${this.details}`;\n    }\n}\n\n\n//# sourceURL=webpack://finance-logger/./src/classes/Payment.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_Invoice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Invoice */ \"./src/classes/Invoice.ts\");\n/* harmony import */ var _classes_Payment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/Payment */ \"./src/classes/Payment.ts\");\n/* harmony import */ var _classes_ListTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/ListTemplate */ \"./src/classes/ListTemplate.ts\");\n\n\n\n/* Variables */\nlet docOne;\nlet docTwo;\n/* constans */\nconst type = document.querySelector(\"#type\");\nconst toFrom = document.querySelector(\"#tofrom\");\nconst details = document.querySelector(\"#details\");\nconst amount = document.querySelector(\"#amount\");\nconst form = document.querySelector(\".new-item-form\");\nconst ul = document.querySelector(\"ul\");\nconst list = new _classes_ListTemplate__WEBPACK_IMPORTED_MODULE_2__.ListTemplate(ul);\n/* Initilize */\nform.addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n    let doc;\n    let values;\n    values = [toFrom.value, details.value, amount.valueAsNumber];\n    if (type.value === \"invoice\") {\n        doc = new _classes_Invoice__WEBPACK_IMPORTED_MODULE_0__.Invoice(...values);\n    }\n    else {\n        doc = new _classes_Payment__WEBPACK_IMPORTED_MODULE_1__.Payment(...values);\n    }\n    list.render(doc, type.value, \"start\");\n});\n\n\n//# sourceURL=webpack://finance-logger/./src/index.ts?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;