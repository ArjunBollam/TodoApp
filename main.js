(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Store.ts":
/*!**************************!*\
  !*** ./src/app/Store.ts ***!
  \**************************/
/*! exports provided: Store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Store = /** @class */ (function () {
    function Store(reducers, initialState) {
        if (reducers === void 0) { reducers = {}; }
        if (initialState === void 0) { initialState = {}; }
        this.reducers = reducers;
        this.state = this.reduce(initialState, {});
    }
    Object.defineProperty(Store.prototype, "value", {
        get: function () {
            return this.state;
        },
        enumerable: true,
        configurable: true
    });
    Store.prototype.select = function (prop) {
        var todos = this.state.todos;
        return todos;
    };
    Store.prototype.dispatch = function (action) {
        this.state = this.reduce(this.state, action);
    };
    Store.prototype.subscribe = function () {
    };
    Store.prototype.reduce = function (state, action) {
        var newState = {};
        for (var prop in this.reducers) {
            newState[prop] = this.reducers[prop](state[prop], action);
        }
        return newState;
    };
    Store = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [Object, Object])
    ], Store);
    return Store;
}());



/***/ }),

/***/ "./src/app/StoreFactory.ts":
/*!*********************************!*\
  !*** ./src/app/StoreFactory.ts ***!
  \*********************************/
/*! exports provided: StoreProvioder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreProvioder", function() { return StoreProvioder; });
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Store */ "./src/app/Store.ts");
/* harmony import */ var _reducers_todos_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/todos.reducer */ "./src/app/reducers/todos.reducer.ts");


var reducers = { todos: _reducers_todos_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"] };
var initialState = { todos: [{ id: 0, name: 'Go to Wallamrt', completed: false }] };
var StoreFactoryService = function () {
    return new _Store__WEBPACK_IMPORTED_MODULE_0__["Store"](reducers, initialState);
};
var StoreProvioder = {
    provide: _Store__WEBPACK_IMPORTED_MODULE_0__["Store"],
    useFactory: StoreFactoryService
};


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.container {\n    margin: auto;\n    width: 100%;\n    border: 3px solid green;\n    padding: 10px\n}\n\n.row {\n    margin-left: 10px;\n    max-width: 100%;\n    display: table;\n    height: 25%;\n}\n\n.col-xs-12 {\n    display: inline-block;\n    margin-top: 10px;\n\n}\n\n.col-md-6 {\n    display: inline-block;\n    margin-top: 10px;\n}\n\n.close{\n   position: absolute;\n   top:1px;\n   right: 2px;\n   cursor: pointer;\n   opacity: 0.3;\n   display: inline-block;\n   width:20px;\n}\n\n.close:hover{\n    opacity: 1;\n}\n\n@media screen and (max-width:500px){\n    .col-xs-12 {\n        display: block;\n        margin-top: 10px;\n        width:300px;\n        \n    }\n    .col-xs-12 input[type=text] {\n        width: 100%;\n    }\n   \n    .col-xs-12 input[type=button] {\n        width: 100%;\n    }\n}\n\nul {\n    list-style: none;\n    display:-webkit-flex;\n    display: flex;\n    flex-direction: column;\n}\n\nul li{\n    display: block;\n    padding: 5px 5px;\n    margin-top: 10px;\n    position: relative;\n    background-color :rgb(244, 203, 66);\n    width:300px;\n    height: 30px;\n    text-align: left;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: larger;\n    overflow: scroll;\n    transition: flex-grow 1s ease-in-out;\n    \n\n}\n\nul li.checked{\n    text-decoration: line-through;\n    \n\n}\n\nul li:hover {\n    opacity: 0.6;\n    box-shadow: 2px 2px 9px;\n    flex-grow: 5;\n}\n\ninput[type=text]{\n    width:300px;\n    height:30px;\n    border-radius: 8px;\n    margin-left:30px;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: larger;\n\n}\n\ninput[type=button]{\n    margin-left:30px;\n    border-radius: 8px;\n    width:100px;\n    height: 36px;\n    background-color: yellowgreen;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: larger;\n}\n\ninput[type=button]:hover {\n    opacity: 0.6;\n    cursor: pointer;\n}\n\n.checkbox-round {\n    position: relative;\n    width: 2.2em;\n    height: 2.2em;\n    background-color: white;\n    border-radius: 50%;\n    vertical-align: middle;\n    border: 1px solid #ddd;\n    -webkit-appearance: none;\n    outline: none;\n    cursor: pointer;\n}\n\n.checkbox-round:checked {\n    background-color: gray;\n}\n\n.checkbox-round:checked:after {\n    content: \"\";\n    border: 2px solid #fff;\n    border-top: none;\n    border-right: none;\n    height: 6px;\n    left: 4px;\n    position: absolute;\n    top: 5px;\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n    width: 12px;\n\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container\">\n  <h1>\n    Welcome!\n  </h1>\n<h2>Todo list using Angular 4 and Redux</h2>\n<div class=\"row\">\n  <div class=\"col-xs-12 col-md-6\">\n<input type=\"text\" #box placeholder=\"Enter Todo Item\" (keyup)=\"onKey(box.value)\" (keyup.enter)=\"AddItem(box.value)\" autofocus/>\n  </div>\n  <div class=\"col-xs-12 col-md-6\">\n    <input type=\"button\" (click)=\"AddItem(box.value)\" value=\"AddItem\"/>\n  </div>\n</div>\n<div class=\"TodoApp\" #todoApp>\n  <ul>\n    <li  *ngFor=\"let todo of todos;let i = index\" [ngClass]=\"{'checked': todo.completed}\" [contentEditable]=\"true\">\n      <span><input type=\"checkbox\" class=\"checkbox-round\" [checked]=\"todo.completed\" (change)=\"toggleComplete(i)\" /></span> {{todo.name}} \n      <span class=\"close\" (click)=\"deleteTodo(i)\">X</span>\n    </li>\n  </ul>\n\n</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Store */ "./src/app/Store.ts");
/* harmony import */ var _reducers_todos_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers/todos.reducer */ "./src/app/reducers/todos.reducer.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(store) {
        this.store = store;
        this.todoForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            todoItem: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
        // const reducers = {todos:reducer}  
        // this.store = new Store(reducers,{todos:[{name:'Go to Wallamrt',completed:false}]});
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getTodos();
    };
    AppComponent.prototype.getTodos = function () {
        this.todos = this.store.select('todos');
        console.log(this.todos);
    };
    AppComponent.prototype.onKey = function (value) {
        this.item = value;
    };
    AppComponent.prototype.AddItem = function (value) {
        this.store.dispatch(new _reducers_todos_reducer__WEBPACK_IMPORTED_MODULE_3__["AddTodos"]({ id: this.todos.length, name: value, completed: false }));
        this.getTodos();
        console.log("Values of state after adding\n     are");
        this.todos.forEach(function (element) {
            console.log(element);
        });
    };
    AppComponent.prototype.deleteTodo = function (i) {
        this.store.dispatch(new _reducers_todos_reducer__WEBPACK_IMPORTED_MODULE_3__["DeleteTodo"]({ index: i }));
        this.getTodos();
    };
    AppComponent.prototype.toggleComplete = function (i) {
        this.store.dispatch(new _reducers_todos_reducer__WEBPACK_IMPORTED_MODULE_3__["ToggleCompleted"]({ index: i }));
        this.getTodos();
        console.log("Values of state after modifications\n     are");
        this.todos.forEach(function (element) {
            console.log(element);
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
        }),
        __metadata("design:paramtypes", [_Store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _StoreFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StoreFactory */ "./src/app/StoreFactory.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _todos_todos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todos/todos.component */ "./src/app/todos/todos.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"], _todos_todos_component__WEBPACK_IMPORTED_MODULE_5__["TodoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            providers: [_StoreFactory__WEBPACK_IMPORTED_MODULE_3__["StoreProvioder"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/reducers/todos.reducer.ts":
/*!*******************************************!*\
  !*** ./src/app/reducers/todos.reducer.ts ***!
  \*******************************************/
/*! exports provided: AddTodos, ToggleCompleted, DeleteTodo, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTodos", function() { return AddTodos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleCompleted", function() { return ToggleCompleted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteTodo", function() { return DeleteTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
var ADD_TODO = 'ADD_TODO';
var TOGGLE_COMPLETD = 'TOGGLE_COMPLETD';
var DELETE_TODO = "DELETE_TODO";
var AddTodos = /** @class */ (function () {
    function AddTodos(payload) {
        this.payload = payload;
        this.type = ADD_TODO;
    }
    return AddTodos;
}());

var ToggleCompleted = /** @class */ (function () {
    function ToggleCompleted(payload) {
        this.payload = payload;
        this.type = TOGGLE_COMPLETD;
    }
    return ToggleCompleted;
}());

var DeleteTodo = /** @class */ (function () {
    function DeleteTodo(payload) {
        this.payload = payload;
        this.type = DELETE_TODO;
    }
    return DeleteTodo;
}());

function reducer(state, action) {
    switch (action.type) {
        case ADD_TODO:
            return state.concat([action.payload]);
        case TOGGLE_COMPLETD:
            var newtodo_1 = state.find(function (todo) { return todo.id == action.payload.index; });
            newtodo_1.completed = !newtodo_1.completed;
            var newstate = state.map(function (todo) { return (todo.id == action.payload.index) ? newtodo_1 : todo; });
            return newstate;
        case DELETE_TODO:
            var newtodos = state.slice();
            newtodos.splice(action.payload.index, 1);
            return newtodos;
    }
    return state;
}


/***/ }),

/***/ "./src/app/todos/todos.component.css":
/*!*******************************************!*\
  !*** ./src/app/todos/todos.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/todos/todos.component.html":
/*!********************************************!*\
  !*** ./src/app/todos/todos.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/todos/todos.component.ts":
/*!******************************************!*\
  !*** ./src/app/todos/todos.component.ts ***!
  \******************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TodoComponent = /** @class */ (function () {
    function TodoComponent() {
    }
    TodoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todos',
            template: __webpack_require__(/*! ./todos.component.html */ "./src/app/todos/todos.component.html"),
            styles: [__webpack_require__(/*! ./todos.component.css */ "./src/app/todos/todos.component.css")]
        })
    ], TodoComponent);
    return TodoComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/arjunbollam/Documents/AngularDemo/TodoApp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map