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

/***/ "./node_modules/css-loader/index.js!./src/css/style.css":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader!./src/css/style.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".add-task-btn{\\r\\n    position: fixed;\\r\\n    bottom: 50px;\\r\\n    right: 50px;\\r\\n    font-size: 30px;\\r\\n}\\r\\n.add-task-overlay, .expired-tasks-overlay{\\r\\n    position: fixed;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    width: 100%;\\r\\n    display: none;\\r\\n    height: 100%;\\r\\n    background: rgba(0, 0, 0, .3);\\r\\n    z-index: 99;\\r\\n}\\r\\n.expired-tasks-modal{\\r\\n    position: relative;\\r\\n    width: 200px;\\r\\n}\\r\\n.expired-tasks-modal .description{\\r\\n    display: block;\\r\\n    margin: 20px 0 40px;\\r\\n    text-align: center;\\r\\n    font-size: 20px;\\r\\n}\\r\\n.expired-tasks-modal .number{\\r\\n    position: absolute;\\r\\n    top: 10px;\\r\\n    right: 10px;\\r\\n}\\r\\n\\r\\n.remove-task{\\r\\n    margin: 0 auto;\\r\\n    display: block;\\r\\n}\\r\\n.expired-tasks-modal .next, .expired-tasks-modal .prev{\\r\\n    cursor: pointer;\\r\\n    position: absolute;\\r\\n    top: 50%;\\r\\n    transform: translateY(-50%)\\r\\n}\\r\\n.expired-tasks-modal .next.hidden, .expired-tasks-modal .prev.hidden{\\r\\n    opacity: .3;\\r\\n    cursor: auto;\\r\\n}\\r\\n.expired-tasks-modal .next{\\r\\n    right: 10px;\\r\\n}\\r\\n.expired-tasks-modal .prev{\\r\\n    left: 10px;\\r\\n}\\r\\n.add-task-overlay.visible, .expired-tasks-overlay.visible{\\r\\n    display: block;\\r\\n}\\r\\n.add-task-modal, .expired-tasks-modal{\\r\\n    /* width: 200px; */\\r\\n    background: #fff;\\r\\n    position: absolute;\\r\\n    padding: 20px;\\r\\n    top: 50%;\\r\\n    left: 50%;\\r\\n    transform: translate(-50%, -50%);\\r\\n}\\r\\n\\r\\n.task-wrapper{\\r\\n    padding: 50px;\\r\\n    display: flex;\\r\\n    flex-wrap: wrap;\\r\\n}\\r\\n.task-item{\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    width: 25%;\\r\\n    padding: 20px 20px 50px;\\r\\n    border: 1px solid lightgrey;\\r\\n    align-items: center;\\r\\n    margin: 10px;\\r\\n    position: relative;\\r\\n}\\r\\n.task-desc{\\r\\n    font-size: 20px;\\r\\n    margin-bottom: 15px;\\r\\n}\\r\\n.remove-item-btn{\\r\\n    position: absolute;\\r\\n    bottom: 10px;\\r\\n    right: 10px;\\r\\n    display: none;\\r\\n    cursor: pointer;\\r\\n}\\r\\n.task-item:hover .remove-item-btn{\\r\\n    display: block;\\r\\n}\\r\\n.input-block{\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n    align-items: center;\\r\\n    min-width: 350px;\\r\\n    padding: 10px 0;\\r\\n}\\r\\n.add-task-btn{\\r\\n    width: 30px;\\r\\n    height: 30px;\\r\\n    font-size: 40px;\\r\\n    font-weight: 800;\\r\\n}\\r\\n.remove-item-btn{\\r\\n    transform: rotate(45deg);\\r\\n    font-weight: 800;\\r\\n    font-size: 30px;\\r\\n}\\r\\n.error-wrap{\\r\\n    padding-bottom: 15px;\\r\\n    color: red;\\r\\n    text-align: center;\\r\\n}\\r\\n.btn-default{\\r\\n    background: lightsteelblue;\\r\\n    padding: 10px 20px;\\r\\n    border: none;\\r\\n}\\r\\n.btn-default:hover{\\r\\n    cursor: pointer;\\r\\n    box-shadow: 1px 1px 9px grey;\\r\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/css/style.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open 'D:\\\\nix\\\\saga2\\\\task-manager\\\\node_modules\\\\css-loader\\\\lib\\\\css-base.js'\");\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/css-base.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open 'D:\\\\nix\\\\saga2\\\\task-manager\\\\node_modules\\\\style-loader\\\\lib\\\\addStyles.js'\");\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

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
/*! exports provided: getTasksApi, removeTask, postTask, updateTask, getExpiredTasks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTasksApi\", function() { return getTasksApi; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeTask\", function() { return removeTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"postTask\", function() { return postTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateTask\", function() { return updateTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getExpiredTasks\", function() { return getExpiredTasks; });\n/* harmony import */ var _api_creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-creator */ \"./src/api/api-creator.js\");\n\r\n\r\nconst api = Object(_api_creator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('localhost:3000');\r\n\r\nconst getTasksApi = () => api.get('tasks');\r\n\r\nconst removeTask = (id) => api.delete(`tasks/${id}`);\r\n\r\nconst postTask = task => api.post('tasks', {\r\n    body: JSON.stringify(task),\r\n    headers: {\r\n        Accept: 'application/json',\r\n        'Content-Type': 'application/json',\r\n    },\r\n});\r\n\r\nconst updateTask = value => api.patch(`tasks/${value.id}`, {\r\n    body: JSON.stringify(value.field),\r\n    headers: {\r\n        Accept: 'application/json',\r\n        'Content-Type': 'application/json',\r\n    },\r\n});\r\n\r\nconst getExpiredTasks = () => api.get('tasks?expired=true');\r\n\r\n\n\n//# sourceURL=webpack:///./src/api/index.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!./style.css */ \"./node_modules/css-loader/index.js!./src/css/style.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/css/style.css?");

/***/ }),

/***/ "./src/expired-tasks.js":
/*!******************************!*\
  !*** ./src/expired-tasks.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return expiredTasks; });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/api/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _tasks_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks-list */ \"./src/tasks-list.js\");\n\r\n\r\n\r\n\r\nfunction expiredTasks() {\r\n    let currentOpenExpiredTaskModal = 0;\r\n    let expiredTasksList = [];\r\n    let overlay = document.querySelector('.expired-tasks-overlay');\r\n\r\n    function init() {\r\n        Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"handleApiCall\"])(_api__WEBPACK_IMPORTED_MODULE_0__[\"getExpiredTasks\"], tasks => {\r\n            if (!tasks.length) {\r\n                overlay.classList.remove('visible');\r\n                return;\r\n            }\r\n            overlay.classList.add('visible');\r\n            expiredTasksList = tasks;\r\n\r\n            renderCurrent(tasks)\r\n        })\r\n    }\r\n\r\n    function renderCurrent() {\r\n        overlay.innerHTML= '';\r\n        let modal = document.createElement('div');\r\n        modal.classList.add('expired-tasks-modal');\r\n        modal.innerHTML = `<span class=\"number\">${currentOpenExpiredTaskModal + 1}</span>\r\n                <span class=\"prev\">Prev</span>\r\n                <span class=\"next\">Next</span>\r\n                <span class=\"description\">${expiredTasksList[currentOpenExpiredTaskModal].description}</span>\r\n                <button class=\"remove-task\">Remove</button>`\r\n\r\n        overlay.appendChild(modal)\r\n        controlBtnsListeners();\r\n        listenerOnRemoveTask();\r\n    }\r\n\r\n    function controlBtnsListeners(){\r\n        let nextBtn = document.querySelector('.expired-tasks-modal .next');\r\n        if(expiredTasksList.length == 1){\r\n            nextBtn.classList.add('hidden')\r\n        }\r\n        let prevBtn = document.querySelector('.expired-tasks-modal .prev');\r\n        prevBtn.classList.add('hidden');\r\n\r\n        prevBtn.addEventListener('click', () => {\r\n            if( currentOpenExpiredTaskModal > 0 ){\r\n                currentOpenExpiredTaskModal--;\r\n                prevBtn.classList.remove('hidden');\r\n                nextBtn.classList.remove('hidden');\r\n                if (currentOpenExpiredTaskModal == 0){\r\n                    prevBtn.classList.add('hidden')\r\n                }\r\n                renderCurrent();\r\n            }\r\n        });\r\n\r\n        nextBtn.addEventListener('click', () => {\r\n            if( currentOpenExpiredTaskModal < expiredTasksList.length - 1 ){\r\n                currentOpenExpiredTaskModal++;\r\n                nextBtn.classList.remove('hidden');\r\n                prevBtn.classList.remove('hidden');\r\n\r\n                if (currentOpenExpiredTaskModal == expiredTasksList.length - 1){\r\n                    nextBtn.classList.add('hidden')\r\n                }\r\n\r\n                renderCurrent();\r\n            }\r\n        });\r\n    }\r\n\r\n    const getCurrentOpenedTaskId = () => expiredTasksList[currentOpenExpiredTaskModal].id;\r\n    const removeTask = () => Object(_api__WEBPACK_IMPORTED_MODULE_0__[\"removeTask\"])(getCurrentOpenedTaskId());\r\n\r\n    function removeButtonClickHandler() {\r\n        Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"handleApiCall\"])(removeTask, () => {\r\n            init();\r\n            Object(_tasks_list__WEBPACK_IMPORTED_MODULE_2__[\"default\"])().init()\r\n        })\r\n    }\r\n\r\n    function listenerOnRemoveTask() {\r\n        let removeBtn = document.querySelector('.remove-task');\r\n        removeBtn.addEventListener('click', removeButtonClickHandler)\r\n    }\r\n\r\n    return {\r\n        init\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/expired-tasks.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ \"./src/modal.js\");\n/* harmony import */ var _tasks_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks-list */ \"./src/tasks-list.js\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\n\r\n\r\nlet modal = new _modal__WEBPACK_IMPORTED_MODULE_0__[\"Modal\"];\r\nmodal.init();\r\n\r\nObject(_tasks_list__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().init();\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/*! exports provided: Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Modal\", function() { return Modal; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ \"./src/api/index.js\");\n/* harmony import */ var _tasks_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks-list */ \"./src/tasks-list.js\");\n\r\n\r\n\r\n\r\n\r\nclass Modal {\r\n\r\n    constructor(){\r\n        this.addTaskBtn = document.querySelector('.add-task-btn');\r\n        this.overlay = document.querySelector('.add-task-overlay');\r\n        this.modal = document.querySelector('.add-task-modal');\r\n        this.cancelBtn = document.querySelector('.cancel-create-task');\r\n        this.addNewData = document.querySelector('.conf-create-task');\r\n        this.taskDescr = document.querySelector('.new-task-desc');\r\n        this.taskDate = document.querySelector('.new-task-date');\r\n        this.errorBlock = document.querySelector('.error-wrap');\r\n\r\n    }\r\n\r\n    init(){\r\n        this.addTaskBtn.addEventListener('click', () => {\r\n            this.toggleModal()\r\n        });\r\n        this.overlay.addEventListener('click', () => {\r\n            this.toggleModal()\r\n        });\r\n        this.modal.addEventListener('click', (e) => {\r\n            e.stopPropagation()\r\n        });\r\n        this.cancelBtn.addEventListener('click', () => {\r\n            this.toggleModal()\r\n        });\r\n        this.addNewData.addEventListener('click', (e) => {\r\n            e.preventDefault();\r\n            this.inputValidate()\r\n        });\r\n    }\r\n\r\n    inputValidate() {\r\n        let correct = true,\r\n            date = this.taskDate.value,\r\n            taskDesc = this.taskDescr.value;\r\n\r\n        if (!taskDesc || !date) {\r\n            this.errorRender('All fields must be fill');\r\n            correct = false;\r\n        } else if (!Date.parse(date) || (Date.now() > Date.parse(date))) {\r\n            this.errorRender('Incorrect format of date');\r\n            correct = false;\r\n        }\r\n        if (correct) {\r\n            let newTaskData = {\r\n                description: taskDesc,\r\n                date: date,\r\n                expired: false\r\n            };\r\n\r\n            this.errorBlock.textContent = '';\r\n\r\n            Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"handleApiCall\"])(() => Object(_api__WEBPACK_IMPORTED_MODULE_1__[\"postTask\"])(newTaskData), () => {\r\n                Object(_tasks_list__WEBPACK_IMPORTED_MODULE_2__[\"default\"])().init();\r\n                this.toggleModal();\r\n            })\r\n        }\r\n    }\r\n\r\n    toggleModal(){\r\n        this.overlay.classList.toggle('visible')\r\n    }\r\n\r\n    errorRender(errorText){\r\n        this.errorBlock.textContent = errorText;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/modal.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Task; });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/api/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _tasks_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks-list */ \"./src/tasks-list.js\");\n/* harmony import */ var _expired_tasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./expired-tasks */ \"./src/expired-tasks.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst msInHour = 3600000;\r\nconst msInMinute = 60000;\r\nconst msInSecond = 1000;\r\n\r\nclass Task{\r\n\r\n    constructor(task) {\r\n        this.taskWrap = document.querySelector('.task-wrapper');\r\n        this.task = task;\r\n        this.desc = this.task.description,\r\n        this.time = Date.parse(this.task.date);\r\n        this.id = this.task.id;\r\n\r\n    }\r\n\r\n    renderTask(){\r\n        let card = document.createElement('div');\r\n        card.classList.add('task-item');\r\n        card.id = this.task.id;\r\n        card.innerHTML = `<span class=\"task-desc\">${this.desc}</span> <span class=\"time\"></span>`;\r\n        let basket = document.createElement('span');\r\n        basket.classList.add('remove-item-btn');\r\n        basket.innerHTML = '+';\r\n\r\n        card.appendChild(basket);\r\n        this.taskWrap.appendChild(card);\r\n\r\n        this.timer(card);\r\n        this.listenerOnRemove(basket);\r\n    }\r\n\r\n    timer(card) {\r\n        let timerDOM = card.querySelector('.time');\r\n        timerDOM.innerHTML = 'wait';\r\n    \r\n       let interval =  setInterval(() => {\r\n            if ((this.time - Date.now()) > 0){\r\n                let hours = (this.time - Date.now()) /  msInHour;\r\n                let minutes = ((this.time - Date.now()) % msInHour) / msInMinute;\r\n                let seconds = (((this.time - Date.now()) % msInHour) % msInMinute) / msInSecond;\r\n                return timerDOM.innerHTML = `${parseInt(hours)} : ${parseInt(minutes)} : ${parseInt(seconds)}`;\r\n            }else{\r\n                timerDOM.innerHTML = `00 : 00 : 00`;\r\n                handleOnTimeOver(this.id)\r\n            }\r\n       }, 1000);\r\n\r\n        function handleOnTimeOver(id) {\r\n            clearInterval(interval);\r\n\r\n            const apiCall = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"handleApiCallEnhancer\"])(() => Object(_expired_tasks__WEBPACK_IMPORTED_MODULE_3__[\"default\"])().init())\r\n\r\n            apiCall(() => Object(_api__WEBPACK_IMPORTED_MODULE_0__[\"updateTask\"])( {\r\n                field: {expired: true},\r\n                id: id\r\n            }))\r\n        }\r\n    }\r\n\r\n    listenerOnRemove(btn){\r\n        btn.addEventListener('click', () => {\r\n            let id = btn.closest('.task-item').id;\r\n            Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"handleApiCall\"])(() => Object(_api__WEBPACK_IMPORTED_MODULE_0__[\"removeTask\"])(id), () => Object(_tasks_list__WEBPACK_IMPORTED_MODULE_2__[\"default\"])().init());\r\n        })\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/task.js?");

/***/ }),

/***/ "./src/tasks-list.js":
/*!***************************!*\
  !*** ./src/tasks-list.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return tasksList; });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/api/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction tasksList() {\r\n    const init = () => {\r\n        Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"handleApiCall\"])(_api__WEBPACK_IMPORTED_MODULE_0__[\"getTasksApi\"], tasks => renderTasks(tasks))\r\n    };\r\n    function renderTasks(tasks) {\r\n        const taskWrap = document.querySelector('.task-wrapper');\r\n        taskWrap.innerHTML = '';\r\n        console.log(tasks)\r\n\r\n        tasks.forEach(task => {\r\n            let newTask = new _task__WEBPACK_IMPORTED_MODULE_2__[\"default\"](task);\r\n            newTask.renderTask();\r\n        })\r\n    }\r\n    return {\r\n        init,\r\n    }\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./src/tasks-list.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: handleApiCall, handleApiCallEnhancer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleApiCall\", function() { return handleApiCall; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleApiCallEnhancer\", function() { return handleApiCallEnhancer; });\nconst handleApiCall = (apiCall, handler = () => {}) => {\r\n        return apiCall().then(data => data.json())\r\n        .then(data => handler(data));\r\n    }\r\n\r\n\r\nconst handleApiCallEnhancer = enhancer => (...apiCallData) => {\r\n    handleApiCall(...apiCallData).then(data => enhancer(data))\r\n}\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });