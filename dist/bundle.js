/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./src/style.css":
/*!*************************************************!*\
  !*** ./node_modules/css-loader!./src/style.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".add-task-btn{\\r\\n    position: fixed;\\r\\n    bottom: 50px;\\r\\n    right: 50px;\\r\\n    font-size: 30px;\\r\\n}\\r\\n.add-task-overlay{\\r\\n    position: fixed;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    width: 100%;\\r\\n    display: none;\\r\\n    height: 100%;\\r\\n    background: rgba(0, 0, 0, .3);\\r\\n    z-index: 99;\\r\\n}\\r\\n.add-task-overlay.visible{\\r\\n    display: block;\\r\\n}\\r\\n.add-task-modal{\\r\\n    /* width: 200px; */\\r\\n    background: #fff;\\r\\n    position: absolute;\\r\\n    padding: 20px;\\r\\n    top: 50%;\\r\\n    left: 50%;\\r\\n    transform: translate(-50%, -50%);\\r\\n}\\r\\n.task-wrapper{\\r\\n    padding: 50px;\\r\\n    display: flex;\\r\\n    flex-wrap: wrap;\\r\\n}\\r\\n.task-item{\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    width: 25%;\\r\\n    padding: 20px 20px 50px;\\r\\n    border: 1px solid lightgrey;\\r\\n    align-items: center;\\r\\n    margin: 10px;\\r\\n    position: relative;\\r\\n}\\r\\n.task-desc{\\r\\n    font-size: 20px;\\r\\n    margin-bottom: 15px;\\r\\n}\\r\\n.remove-item-btn{\\r\\n    position: absolute;\\r\\n    bottom: 10px;\\r\\n    right: 10px;\\r\\n    display: none;\\r\\n    cursor: pointer;\\r\\n}\\r\\n.task-item:hover .remove-item-btn{\\r\\n    display: block;\\r\\n}\\r\\n.input-block{\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n    align-items: center;\\r\\n    min-width: 350px;\\r\\n    padding: 10px 0;\\r\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\r\n\tMIT License http://www.opensource.org/licenses/mit-license.php\r\n\tAuthor Tobias Koppers @sokra\r\n*/\r\n// css base code, injected by the css-loader\r\nmodule.exports = function(useSourceMap) {\r\n\tvar list = [];\r\n\r\n\t// return the list of modules as css string\r\n\tlist.toString = function toString() {\r\n\t\treturn this.map(function (item) {\r\n\t\t\tvar content = cssWithMappingToString(item, useSourceMap);\r\n\t\t\tif(item[2]) {\r\n\t\t\t\treturn \"@media \" + item[2] + \"{\" + content + \"}\";\r\n\t\t\t} else {\r\n\t\t\t\treturn content;\r\n\t\t\t}\r\n\t\t}).join(\"\");\r\n\t};\r\n\r\n\t// import a list of modules into the list\r\n\tlist.i = function(modules, mediaQuery) {\r\n\t\tif(typeof modules === \"string\")\r\n\t\t\tmodules = [[null, modules, \"\"]];\r\n\t\tvar alreadyImportedModules = {};\r\n\t\tfor(var i = 0; i < this.length; i++) {\r\n\t\t\tvar id = this[i][0];\r\n\t\t\tif(typeof id === \"number\")\r\n\t\t\t\talreadyImportedModules[id] = true;\r\n\t\t}\r\n\t\tfor(i = 0; i < modules.length; i++) {\r\n\t\t\tvar item = modules[i];\r\n\t\t\t// skip already imported module\r\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\r\n\t\t\t//  when a module is imported multiple times with different media queries.\r\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\r\n\t\t\tif(typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\r\n\t\t\t\tif(mediaQuery && !item[2]) {\r\n\t\t\t\t\titem[2] = mediaQuery;\r\n\t\t\t\t} else if(mediaQuery) {\r\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\r\n\t\t\t\t}\r\n\t\t\t\tlist.push(item);\r\n\t\t\t}\r\n\t\t}\r\n\t};\r\n\treturn list;\r\n};\r\n\r\nfunction cssWithMappingToString(item, useSourceMap) {\r\n\tvar content = item[1] || '';\r\n\tvar cssMapping = item[3];\r\n\tif (!cssMapping) {\r\n\t\treturn content;\r\n\t}\r\n\r\n\tif (useSourceMap && typeof btoa === 'function') {\r\n\t\tvar sourceMapping = toComment(cssMapping);\r\n\t\tvar sourceURLs = cssMapping.sources.map(function (source) {\r\n\t\t\treturn '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'\r\n\t\t});\r\n\r\n\t\treturn [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\r\n\t}\r\n\r\n\treturn [content].join('\\n');\r\n}\r\n\r\n// Adapted from convert-source-map (MIT)\r\nfunction toComment(sourceMap) {\r\n\t// eslint-disable-next-line no-undef\r\n\tvar base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\r\n\tvar data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\r\n\r\n\treturn '/*# ' + data + ' */';\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/css-base.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\r\n\tMIT License http://www.opensource.org/licenses/mit-license.php\r\n\tAuthor Tobias Koppers @sokra\r\n*/\r\n\r\nvar stylesInDom = {};\r\n\r\nvar\tmemoize = function (fn) {\r\n\tvar memo;\r\n\r\n\treturn function () {\r\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\r\n\t\treturn memo;\r\n\t};\r\n};\r\n\r\nvar isOldIE = memoize(function () {\r\n\t// Test for IE <= 9 as proposed by Browserhacks\r\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\r\n\t// Tests for existence of standard globals is to allow style-loader\r\n\t// to operate correctly into non-standard environments\r\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\r\n\treturn window && document && document.all && !window.atob;\r\n});\r\n\r\nvar getTarget = function (target) {\r\n  return document.querySelector(target);\r\n};\r\n\r\nvar getElement = (function (fn) {\r\n\tvar memo = {};\r\n\r\n\treturn function(target) {\r\n                // If passing function in options, then use it for resolve \"head\" element.\r\n                // Useful for Shadow Root style i.e\r\n                // {\r\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\r\n                // }\r\n                if (typeof target === 'function') {\r\n                        return target();\r\n                }\r\n                if (typeof memo[target] === \"undefined\") {\r\n\t\t\tvar styleTarget = getTarget.call(this, target);\r\n\t\t\t// Special case to return head of iframe instead of iframe itself\r\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\r\n\t\t\t\ttry {\r\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\r\n\t\t\t\t\t// due to cross-origin restrictions\r\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\r\n\t\t\t\t} catch(e) {\r\n\t\t\t\t\tstyleTarget = null;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\tmemo[target] = styleTarget;\r\n\t\t}\r\n\t\treturn memo[target]\r\n\t};\r\n})();\r\n\r\nvar singleton = null;\r\nvar\tsingletonCounter = 0;\r\nvar\tstylesInsertedAtTop = [];\r\n\r\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\r\n\r\nmodule.exports = function(list, options) {\r\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\r\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\r\n\t}\r\n\r\n\toptions = options || {};\r\n\r\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\r\n\r\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\r\n\t// tags it will allow on a page\r\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\r\n\r\n\t// By default, add <style> tags to the <head> element\r\n        if (!options.insertInto) options.insertInto = \"head\";\r\n\r\n\t// By default, add <style> tags to the bottom of the target\r\n\tif (!options.insertAt) options.insertAt = \"bottom\";\r\n\r\n\tvar styles = listToStyles(list, options);\r\n\r\n\taddStylesToDom(styles, options);\r\n\r\n\treturn function update (newList) {\r\n\t\tvar mayRemove = [];\r\n\r\n\t\tfor (var i = 0; i < styles.length; i++) {\r\n\t\t\tvar item = styles[i];\r\n\t\t\tvar domStyle = stylesInDom[item.id];\r\n\r\n\t\t\tdomStyle.refs--;\r\n\t\t\tmayRemove.push(domStyle);\r\n\t\t}\r\n\r\n\t\tif(newList) {\r\n\t\t\tvar newStyles = listToStyles(newList, options);\r\n\t\t\taddStylesToDom(newStyles, options);\r\n\t\t}\r\n\r\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\r\n\t\t\tvar domStyle = mayRemove[i];\r\n\r\n\t\t\tif(domStyle.refs === 0) {\r\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\r\n\r\n\t\t\t\tdelete stylesInDom[domStyle.id];\r\n\t\t\t}\r\n\t\t}\r\n\t};\r\n};\r\n\r\nfunction addStylesToDom (styles, options) {\r\n\tfor (var i = 0; i < styles.length; i++) {\r\n\t\tvar item = styles[i];\r\n\t\tvar domStyle = stylesInDom[item.id];\r\n\r\n\t\tif(domStyle) {\r\n\t\t\tdomStyle.refs++;\r\n\r\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\r\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\r\n\t\t\t}\r\n\r\n\t\t\tfor(; j < item.parts.length; j++) {\r\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\r\n\t\t\t}\r\n\t\t} else {\r\n\t\t\tvar parts = [];\r\n\r\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\r\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\r\n\t\t\t}\r\n\r\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\r\n\t\t}\r\n\t}\r\n}\r\n\r\nfunction listToStyles (list, options) {\r\n\tvar styles = [];\r\n\tvar newStyles = {};\r\n\r\n\tfor (var i = 0; i < list.length; i++) {\r\n\t\tvar item = list[i];\r\n\t\tvar id = options.base ? item[0] + options.base : item[0];\r\n\t\tvar css = item[1];\r\n\t\tvar media = item[2];\r\n\t\tvar sourceMap = item[3];\r\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\r\n\r\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\r\n\t\telse newStyles[id].parts.push(part);\r\n\t}\r\n\r\n\treturn styles;\r\n}\r\n\r\nfunction insertStyleElement (options, style) {\r\n\tvar target = getElement(options.insertInto)\r\n\r\n\tif (!target) {\r\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\r\n\t}\r\n\r\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\r\n\r\n\tif (options.insertAt === \"top\") {\r\n\t\tif (!lastStyleElementInsertedAtTop) {\r\n\t\t\ttarget.insertBefore(style, target.firstChild);\r\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\r\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\r\n\t\t} else {\r\n\t\t\ttarget.appendChild(style);\r\n\t\t}\r\n\t\tstylesInsertedAtTop.push(style);\r\n\t} else if (options.insertAt === \"bottom\") {\r\n\t\ttarget.appendChild(style);\r\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\r\n\t\tvar nextSibling = getElement(options.insertInto + \" \" + options.insertAt.before);\r\n\t\ttarget.insertBefore(style, nextSibling);\r\n\t} else {\r\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\r\n\t}\r\n}\r\n\r\nfunction removeStyleElement (style) {\r\n\tif (style.parentNode === null) return false;\r\n\tstyle.parentNode.removeChild(style);\r\n\r\n\tvar idx = stylesInsertedAtTop.indexOf(style);\r\n\tif(idx >= 0) {\r\n\t\tstylesInsertedAtTop.splice(idx, 1);\r\n\t}\r\n}\r\n\r\nfunction createStyleElement (options) {\r\n\tvar style = document.createElement(\"style\");\r\n\r\n\tif(options.attrs.type === undefined) {\r\n\t\toptions.attrs.type = \"text/css\";\r\n\t}\r\n\r\n\taddAttrs(style, options.attrs);\r\n\tinsertStyleElement(options, style);\r\n\r\n\treturn style;\r\n}\r\n\r\nfunction createLinkElement (options) {\r\n\tvar link = document.createElement(\"link\");\r\n\r\n\tif(options.attrs.type === undefined) {\r\n\t\toptions.attrs.type = \"text/css\";\r\n\t}\r\n\toptions.attrs.rel = \"stylesheet\";\r\n\r\n\taddAttrs(link, options.attrs);\r\n\tinsertStyleElement(options, link);\r\n\r\n\treturn link;\r\n}\r\n\r\nfunction addAttrs (el, attrs) {\r\n\tObject.keys(attrs).forEach(function (key) {\r\n\t\tel.setAttribute(key, attrs[key]);\r\n\t});\r\n}\r\n\r\nfunction addStyle (obj, options) {\r\n\tvar style, update, remove, result;\r\n\r\n\t// If a transform function was defined, run it on the css\r\n\tif (options.transform && obj.css) {\r\n\t    result = options.transform(obj.css);\r\n\r\n\t    if (result) {\r\n\t    \t// If transform returns a value, use that instead of the original css.\r\n\t    \t// This allows running runtime transformations on the css.\r\n\t    \tobj.css = result;\r\n\t    } else {\r\n\t    \t// If the transform function returns a falsy value, don't add this css.\r\n\t    \t// This allows conditional loading of css\r\n\t    \treturn function() {\r\n\t    \t\t// noop\r\n\t    \t};\r\n\t    }\r\n\t}\r\n\r\n\tif (options.singleton) {\r\n\t\tvar styleIndex = singletonCounter++;\r\n\r\n\t\tstyle = singleton || (singleton = createStyleElement(options));\r\n\r\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\r\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\r\n\r\n\t} else if (\r\n\t\tobj.sourceMap &&\r\n\t\ttypeof URL === \"function\" &&\r\n\t\ttypeof URL.createObjectURL === \"function\" &&\r\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\r\n\t\ttypeof Blob === \"function\" &&\r\n\t\ttypeof btoa === \"function\"\r\n\t) {\r\n\t\tstyle = createLinkElement(options);\r\n\t\tupdate = updateLink.bind(null, style, options);\r\n\t\tremove = function () {\r\n\t\t\tremoveStyleElement(style);\r\n\r\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\r\n\t\t};\r\n\t} else {\r\n\t\tstyle = createStyleElement(options);\r\n\t\tupdate = applyToTag.bind(null, style);\r\n\t\tremove = function () {\r\n\t\t\tremoveStyleElement(style);\r\n\t\t};\r\n\t}\r\n\r\n\tupdate(obj);\r\n\r\n\treturn function updateStyle (newObj) {\r\n\t\tif (newObj) {\r\n\t\t\tif (\r\n\t\t\t\tnewObj.css === obj.css &&\r\n\t\t\t\tnewObj.media === obj.media &&\r\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\r\n\t\t\t) {\r\n\t\t\t\treturn;\r\n\t\t\t}\r\n\r\n\t\t\tupdate(obj = newObj);\r\n\t\t} else {\r\n\t\t\tremove();\r\n\t\t}\r\n\t};\r\n}\r\n\r\nvar replaceText = (function () {\r\n\tvar textStore = [];\r\n\r\n\treturn function (index, replacement) {\r\n\t\ttextStore[index] = replacement;\r\n\r\n\t\treturn textStore.filter(Boolean).join('\\n');\r\n\t};\r\n})();\r\n\r\nfunction applyToSingletonTag (style, index, remove, obj) {\r\n\tvar css = remove ? \"\" : obj.css;\r\n\r\n\tif (style.styleSheet) {\r\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\r\n\t} else {\r\n\t\tvar cssNode = document.createTextNode(css);\r\n\t\tvar childNodes = style.childNodes;\r\n\r\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\r\n\r\n\t\tif (childNodes.length) {\r\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\r\n\t\t} else {\r\n\t\t\tstyle.appendChild(cssNode);\r\n\t\t}\r\n\t}\r\n}\r\n\r\nfunction applyToTag (style, obj) {\r\n\tvar css = obj.css;\r\n\tvar media = obj.media;\r\n\r\n\tif(media) {\r\n\t\tstyle.setAttribute(\"media\", media)\r\n\t}\r\n\r\n\tif(style.styleSheet) {\r\n\t\tstyle.styleSheet.cssText = css;\r\n\t} else {\r\n\t\twhile(style.firstChild) {\r\n\t\t\tstyle.removeChild(style.firstChild);\r\n\t\t}\r\n\r\n\t\tstyle.appendChild(document.createTextNode(css));\r\n\t}\r\n}\r\n\r\nfunction updateLink (link, options, obj) {\r\n\tvar css = obj.css;\r\n\tvar sourceMap = obj.sourceMap;\r\n\r\n\t/*\r\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\r\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\r\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\r\n\t\tdirectly\r\n\t*/\r\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\r\n\r\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\r\n\t\tcss = fixUrls(css);\r\n\t}\r\n\r\n\tif (sourceMap) {\r\n\t\t// http://stackoverflow.com/a/26603875\r\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\r\n\t}\r\n\r\n\tvar blob = new Blob([css], { type: \"text/css\" });\r\n\r\n\tvar oldSrc = link.href;\r\n\r\n\tlink.href = URL.createObjectURL(blob);\r\n\r\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n/**\r\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\r\n * embed the css on the page. This breaks all relative urls because now they are relative to a\r\n * bundle instead of the current page.\r\n *\r\n * One solution is to only use full urls, but that may be impossible.\r\n *\r\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\r\n *\r\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\r\n *\r\n */\r\n\r\nmodule.exports = function (css) {\r\n  // get current location\r\n  var location = typeof window !== \"undefined\" && window.location;\r\n\r\n  if (!location) {\r\n    throw new Error(\"fixUrls requires window.location\");\r\n  }\r\n\r\n\t// blank or null?\r\n\tif (!css || typeof css !== \"string\") {\r\n\t  return css;\r\n  }\r\n\r\n  var baseUrl = location.protocol + \"//\" + location.host;\r\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\r\n\r\n\t// convert each url(...)\r\n\t/*\r\n\tThis regular expression is just a way to recursively match brackets within\r\n\ta string.\r\n\r\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\r\n\t   (  = Start a capturing group\r\n\t     (?:  = Start a non-capturing group\r\n\t         [^)(]  = Match anything that isn't a parentheses\r\n\t         |  = OR\r\n\t         \\(  = Match a start parentheses\r\n\t             (?:  = Start another non-capturing groups\r\n\t                 [^)(]+  = Match anything that isn't a parentheses\r\n\t                 |  = OR\r\n\t                 \\(  = Match a start parentheses\r\n\t                     [^)(]*  = Match anything that isn't a parentheses\r\n\t                 \\)  = Match a end parentheses\r\n\t             )  = End Group\r\n              *\\) = Match anything and then a close parens\r\n          )  = Close non-capturing group\r\n          *  = Match anything\r\n       )  = Close capturing group\r\n\t \\)  = Match a close parens\r\n\r\n\t /gi  = Get all matches, not the first.  Be case insensitive.\r\n\t */\r\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\r\n\t\t// strip quotes (if they exist)\r\n\t\tvar unquotedOrigUrl = origUrl\r\n\t\t\t.trim()\r\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\r\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\r\n\r\n\t\t// already a full url? no change\r\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\r\n\t\t  return fullMatch;\r\n\t\t}\r\n\r\n\t\t// convert the url to a full url\r\n\t\tvar newUrl;\r\n\r\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\r\n\t\t  \t//TODO: should we add protocol?\r\n\t\t\tnewUrl = unquotedOrigUrl;\r\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\r\n\t\t\t// path should be relative to the base url\r\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\r\n\t\t} else {\r\n\t\t\t// path should be relative to current directory\r\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\r\n\t\t}\r\n\r\n\t\t// send back the fixed url(...)\r\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\r\n\t});\r\n\r\n\t// send back the fixed css\r\n\treturn fixedCss;\r\n};\r\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./src/api/api-creator.js":
/*!********************************!*\
  !*** ./src/api/api-creator.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ApiCreator; });\nfunction ApiCreator(baseUrl) {\r\n    const fetchCreator = method => (url, options) => fetch(`http://${baseUrl}/${url}`, {\r\n      method,\r\n      ...options,\r\n    });\r\n  \r\n    return {\r\n      get: fetchCreator('GET'),\r\n      post: fetchCreator('POST'),\r\n      patch: fetchCreator('PATCH'),\r\n      delete: fetchCreator('DELETE'),\r\n      put: fetchCreator('PUT'),\r\n    };\r\n  }\n\n//# sourceURL=webpack:///./src/api/api-creator.js?");

/***/ }),

/***/ "./src/api/index.js":
/*!**************************!*\
  !*** ./src/api/index.js ***!
  \**************************/
/*! exports provided: getTasksApi, removeTask, postTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTasksApi\", function() { return getTasksApi; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeTask\", function() { return removeTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"postTask\", function() { return postTask; });\n/* harmony import */ var _api_creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-creator */ \"./src/api/api-creator.js\");\n\r\n\r\nconst api = Object(_api_creator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('localhost:3000');\r\n\r\nconst getTasksApi = () => api.get('tasks');\r\n\r\nconst removeTask = (id) => {\r\n    api.delete(`tasks/${id}`);\r\n};\r\n\r\nconst postTask = task => api.post('tasks', {\r\n    body: JSON.stringify(task),\r\n    headers: {\r\n        Accept: 'application/json',\r\n        'Content-Type': 'application/json',\r\n    },\r\n});\n\n//# sourceURL=webpack:///./src/api/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ \"./src/modal.js\");\n/* harmony import */ var _tasks_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks-list */ \"./src/tasks-list\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\n\r\n\r\nlet modal = new _modal__WEBPACK_IMPORTED_MODULE_0__[\"Modal\"];\r\nmodal.init();\r\n\r\nObject(_tasks_list__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().init();\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/*! exports provided: Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Modal\", function() { return Modal; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ \"./src/api/index.js\");\n/* harmony import */ var _tasks_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks-list */ \"./src/tasks-list\");\n\r\n\r\n\r\n\r\n\r\nclass Modal {\r\n    constructor(){\r\n        this.addTaskBtn = document.querySelector('.add-task-btn');\r\n        this.overlay = document.querySelector('.add-task-overlay');\r\n        this.modal = document.querySelector('.add-task-modal');\r\n        this.cancelBtn = document.querySelector('.cancel-create-task');\r\n        this.addNewData = document.querySelector('.conf-create-task');\r\n        this.taskDescr = document.querySelector('.new-task-desc');\r\n        this.taskDate = document.querySelector('.new-task-date');\r\n        this.errorBlock = document.querySelector('.error');\r\n\r\n    }\r\n    init(){\r\n        this.addTaskBtn.addEventListener('click', () => {\r\n            this.toggleModal()\r\n        });\r\n        this.overlay.addEventListener('click', () => {\r\n            this.toggleModal()\r\n        });\r\n        this.modal.addEventListener('click', (e) => {\r\n            e.stopPropagation()\r\n        });\r\n        this.cancelBtn.addEventListener('click', () => {\r\n            this.toggleModal()\r\n        });\r\n        this.addNewData.addEventListener('click', (e) => {\r\n            e.preventDefault();\r\n            this.inputValidate()\r\n        });\r\n    }\r\n    inputValidate() {\r\n        let correct = true,\r\n            date = this.taskDate.value,\r\n            taskDesc = this.taskDescr.value;\r\n\r\n        if (!taskDesc || !date) {\r\n            this.errorRender('All fields must be fill');\r\n            correct = false;\r\n        } else if (!Date.parse(date) || (Date.now() > Date.parse(date))) {\r\n            this.errorRender('Incorrect format of date');\r\n            correct = false;\r\n        }\r\n        if (correct) {\r\n            let newTaskData = {\r\n                description: taskDesc,\r\n                date: date,\r\n                id: Math.random()\r\n            };\r\n\r\n            this.errorBlock.textContent = '';\r\n\r\n            Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"handleApiCall\"])(Object(_api__WEBPACK_IMPORTED_MODULE_1__[\"postTask\"])(newTaskData), () => {\r\n                Object(_tasks_list__WEBPACK_IMPORTED_MODULE_2__[\"default\"])().init();\r\n                this.toggleModal();\r\n            })\r\n        }\r\n    }\r\n    toggleModal(){\r\n        this.overlay.classList.toggle('visible')\r\n    }\r\n    errorRender(errorText){\r\n        this.errorBlock.textContent = errorText;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/modal.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../node_modules/css-loader!./style.css */ \"./node_modules/css-loader/index.js!./src/style.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Task; });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/api/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _tasks_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks-list */ \"./src/tasks-list\");\n\r\n\r\n\r\n\r\n\r\nconst msInHour = 3600000;\r\nconst msInMinute = 60000;\r\nconst msInSecond = 1000;\r\n\r\nclass Task{\r\n    constructor(task) {\r\n        this.taskWrap = document.querySelector('.task-wrapper');\r\n        this.task = task;\r\n    }\r\n    renderTask(){\r\n        let desc = this.task.description,\r\n            time = Date.parse(this.task.date);\r\n           \r\n        let card = document.createElement('div');\r\n        card.classList.add('task-item');\r\n        card.id = this.task.id;\r\n        card.innerHTML = `<span class=\"task-desc\">${desc}</span> <span class=\"time\"></span>`;\r\n        let basket = document.createElement('span');\r\n        basket.classList.add('remove-item-btn');\r\n        basket.innerHTML = '<i class=\"fas fa-trash\"></i>';\r\n\r\n        card.appendChild(basket);\r\n        this.taskWrap.appendChild(card);\r\n\r\n        this.timer(card, time);\r\n        this.listenerOnRemove(basket, card);\r\n    }\r\n    timer(card, time) {\r\n        let timerDOM = card.querySelector('.time');\r\n        timerDOM.innerHTML = 'wait';\r\n    \r\n        let interval = setInterval(() => {\r\n            if ((time - Date.now()) > 0){\r\n                let hours = (time - Date.now()) /  msInHour;\r\n                let minutes = ((time - Date.now()) % msInHour) / msInMinute;\r\n                let seconds = (((time - Date.now()) % msInHour) % msInMinute) / msInSecond;\r\n                timerDOM.innerHTML = `${parseInt(hours)} : ${parseInt(minutes)} : ${parseInt(seconds)}`;\r\n            }else{\r\n                handleOnTimeOver()\r\n\r\n            }\r\n        }, 1000);\r\n        interval();\r\n\r\n        function handleOnTimeOver() {\r\n            alert('time is over')\r\n            clearInterval(interval)\r\n        }\r\n    }\r\n\r\n    listenerOnRemove(btn){\r\n        btn.addEventListener('click', () => {\r\n            let id = btn.closest('.task-item').id;\r\n            Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"handleApiCall\"])(Object(_api__WEBPACK_IMPORTED_MODULE_0__[\"removeTask\"])(id), () => Object(_tasks_list__WEBPACK_IMPORTED_MODULE_2__[\"default\"])().init());\r\n        })\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/task.js?");

/***/ }),

/***/ "./src/tasks-list":
/*!************************!*\
  !*** ./src/tasks-list ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return tasksList; });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/api/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction tasksList() {\r\n    const init = () => {\r\n        Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"handleApiCall\"])(_api__WEBPACK_IMPORTED_MODULE_0__[\"getTasksApi\"], tasks => renderTasks(tasks))\r\n    };\r\n    function renderTasks(tasks) {\r\n        const taskWrap = document.querySelector('.task-wrapper');\r\n        taskWrap.innerHTML = '';\r\n\r\n        tasks.forEach(task => {\r\n            let newTask = new _task__WEBPACK_IMPORTED_MODULE_2__[\"default\"](task);\r\n            newTask.renderTask();\r\n        })\r\n    }\r\n    return {\r\n        init,\r\n    }\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./src/tasks-list?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: handleApiCall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleApiCall\", function() { return handleApiCall; });\nconst handleApiCall = (apiCall, handler) => apiCall()\r\n    .then(data => data.json())\r\n    .then(data => handler(data));\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });