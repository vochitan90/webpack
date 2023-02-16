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

/***/ "./src/add-image.js":
/*!**************************!*\
  !*** ./src/add-image.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _kiwi_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kiwi.jpeg */ \"./src/kiwi.jpeg\");\n/* harmony import */ var _altText_txt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./altText.txt */ \"./src/altText.txt\");\n\n\n\nfunction addImage() {\n  const img = document.createElement(\"img\");\n  img.alt = _altText_txt__WEBPACK_IMPORTED_MODULE_1__;\n  img.width = 1000;\n  img.src = _kiwi_jpeg__WEBPACK_IMPORTED_MODULE_0__;\n  const body = document.querySelector(\"body\");\n  body.appendChild(img);\n}\n\n// dont forget to export\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addImage);\n\n\n//# sourceURL=webpack://tutorial-webpack/./src/add-image.js?");

/***/ }),

/***/ "./src/hello-world.js":
/*!****************************!*\
  !*** ./src/hello-world.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction helloWorld() {\n  console.log(\"hello world\");\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (helloWorld);\n\n\n//# sourceURL=webpack://tutorial-webpack/./src/hello-world.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hello_world_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hello-world.js */ \"./src/hello-world.js\");\n/* harmony import */ var _add_image_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-image.js */ \"./src/add-image.js\");\n\n\n\n(0,_hello_world_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_add_image_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n\n//# sourceURL=webpack://tutorial-webpack/./src/index.js?");

/***/ }),

/***/ "./src/altText.txt":
/*!*************************!*\
  !*** ./src/altText.txt ***!
  \*************************/
/***/ ((module) => {

eval("module.exports = \"big wiki\";\n\n//# sourceURL=webpack://tutorial-webpack/./src/altText.txt?");

/***/ }),

/***/ "./src/kiwi.jpeg":
/*!***********************!*\
  !*** ./src/kiwi.jpeg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"19aedfdd73ddce9c3155.jpeg\";\n\n//# sourceURL=webpack://tutorial-webpack/./src/kiwi.jpeg?");

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "dist/";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;