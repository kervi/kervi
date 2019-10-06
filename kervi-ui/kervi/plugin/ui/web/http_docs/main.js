(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../dist/kervi-js/fesm5/kervi-js.js":
/*!********************************************************************************!*\
  !*** D:/dev/kervi/kervi/kervi-ui/kervi/ui/web/dist/kervi-js/fesm5/kervi-js.js ***!
  \********************************************************************************/
/*! exports provided: KerviBaseService, ConnectionState, KerviValue, ValueRange, ValueRangeType, KerviValueType, KerviEnumOptionModel, SelectValue, NumberValue, StringValue, BooleanValue, DateTimeValue, ColorValue, DashboardSizes, DashboardMessageModel, DashboardPanelComponent, DashboardPanelParameters, DashboardPanel, DashboardBackgroundModel, Dashboard, Action, DashboardLink, Controller, UserLogStateType, KerviJsModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KerviBaseService", function() { return KerviBaseService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionState", function() { return ConnectionState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KerviValue", function() { return KerviValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueRange", function() { return ValueRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueRangeType", function() { return ValueRangeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KerviValueType", function() { return KerviValueType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KerviEnumOptionModel", function() { return KerviEnumOptionModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectValue", function() { return SelectValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberValue", function() { return NumberValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringValue", function() { return StringValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooleanValue", function() { return BooleanValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimeValue", function() { return DateTimeValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorValue", function() { return ColorValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardSizes", function() { return DashboardSizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardMessageModel", function() { return DashboardMessageModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPanelComponent", function() { return DashboardPanelComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPanelParameters", function() { return DashboardPanelParameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPanel", function() { return DashboardPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardBackgroundModel", function() { return DashboardBackgroundModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dashboard", function() { return Dashboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardLink", function() { return DashboardLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLogStateType", function() { return UserLogStateType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KerviJsModule", function() { return KerviJsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return KerviJsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
var KerviSpineBase = /** @class */ (function () {
    function KerviSpineBase(constructorOptions) {
        this.constructorOptions = constructorOptions;
        this.isConnected = false;
        this.doAuthenticate = false;
        this.sessionId = null;
        this.queryHandlers = [];
        this.commandHandlers = [];
        this.eventHandlers = [];
        this.rpcQueue = {};
        this.ready = false;
        this.messageId = 0;
        this.sensors = {};
        this.controllers = {};
        this.sensorTypes = [];
        this.controllerTypes = [];
        this.pointOfInterests = [];
        this.application = null;
        this.allowAnonymous = true;
        this.firstOnOpen = true;
        this.websocket = null;
        this.options = {
            userName: "anonymous",
            password: null,
            address: null,
            onOpen: null,
            onClose: null,
            onAuthenticate: null,
            onAuthenticateFailed: null,
            onAuthenticateStart: null,
            onLogOff: null,
            autoConnect: true,
            targetScope: null,
            protocol: "ws",
            apiToken: null
        };
        this.addEventHandler = (/**
         * @param {?} eventName
         * @param {?} id
         * @param {?} callback
         * @return {?}
         */
        function (eventName, id, callback) {
        });
        console.log("Kervi base spine init", this.options, constructorOptions);
        this.options = this.extend(this.options, constructorOptions);
        console.log("kbo", this.options);
        this.connect();
        /** @type {?} */
        var self = this;
        setInterval((/**
         * @return {?}
         */
        function () {
            var e_1, _a;
            /** @type {?} */
            var hangingNodes = [];
            for (var id_1 in self.rpcQueue) {
                /** @type {?} */
                var query = self.rpcQueue[id_1];
                if (query["callbackTimeout"]) {
                    if (Date.now() - query["ts"] > query["timeout"]) {
                        /** @type {?} */
                        var callback = query["callbackTimeout"];
                        hangingNodes.push(id_1);
                        callback.call(self.options.targetScope);
                    }
                }
            }
            try {
                for (var hangingNodes_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(hangingNodes), hangingNodes_1_1 = hangingNodes_1.next(); !hangingNodes_1_1.done; hangingNodes_1_1 = hangingNodes_1.next()) {
                    var id = hangingNodes_1_1.value;
                    delete self.rpcQueue[id];
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (hangingNodes_1_1 && !hangingNodes_1_1.done && (_a = hangingNodes_1.return)) _a.call(hangingNodes_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }), 1);
    }
    /**
     * @protected
     * @param {...?} p
     * @return {?}
     */
    KerviSpineBase.prototype.extend = /**
     * @protected
     * @param {...?} p
     * @return {?}
     */
    function () {
        var p = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            p[_i] = arguments[_i];
        }
        for (var i = 1; i < p.length; i++)
            for (var key in p[i])
                if (p[i].hasOwnProperty(key))
                    p[0][key] = p[i][key];
        return p[0];
    };
    /**
     * @protected
     * @param {?} id
     * @param {?} callback
     * @param {?} callbackTimeout
     * @param {?} timeout
     * @return {?}
     */
    KerviSpineBase.prototype.addRPCCallback = /**
     * @protected
     * @param {?} id
     * @param {?} callback
     * @param {?} callbackTimeout
     * @param {?} timeout
     * @return {?}
     */
    function (id, callback, callbackTimeout, timeout) {
        if (callback)
            this.rpcQueue[id] = {
                "callback": callback,
                "callbackTimeout": callbackTimeout,
                "timeout": timeout,
                "ts": Date.now(),
            };
    };
    /**
     * @protected
     * @param {?} message
     * @return {?}
     */
    KerviSpineBase.prototype.handleRPCResponse = /**
     * @protected
     * @param {?} message
     * @return {?}
     */
    function (message) {
        if (message.id in this.rpcQueue) {
            /** @type {?} */
            var callback = this.rpcQueue[message.id]["callback"];
            if (callback) {
                delete this.rpcQueue[message.id];
                callback.call(this.options.targetScope, message.response, message.response);
            }
        }
    };
    /**
     * @protected
     * @param {?} message
     * @return {?}
     */
    KerviSpineBase.prototype.handleEvent = /**
     * @protected
     * @param {?} message
     * @return {?}
     */
    function (message) {
        //console.log("ev", message)
        /** @type {?} */
        var eventName = message.event;
        /** @type {?} */
        var id = message.id;
        /** @type {?} */
        var eventPath = eventName;
        if (id) {
            eventPath += "/" + id;
        }
        /** @type {?} */
        var value = null;
        if (message.args && message.args.length) {
            value = message.args[0];
        }
        for (var n = 0; (n < this.eventHandlers.length); n++) {
            /** @type {?} */
            var h = this.eventHandlers[n];
            if (h.eventName == eventPath)
                h.callback.call(value, id, value);
            else if (h.eventName == eventName)
                h.callback.call(value, id, value);
        }
    };
    /**
     * @protected
     * @param {?} message
     * @return {?}
     */
    KerviSpineBase.prototype.handleCommand = /**
     * @protected
     * @param {?} message
     * @return {?}
     */
    function (message) {
        console.log("cmd", this, message);
        /** @type {?} */
        var command = message.command;
        /** @type {?} */
        var args = null;
        if (message.args && message.args.length) {
            args = message.args[0];
        }
        for (var n = 0; (n < this.commandHandlers.length); n++) {
            /** @type {?} */
            var c = this.commandHandlers[n];
            if (c.command == command)
                c.callback.call(this, args);
        }
    };
    /**
     * @protected
     * @return {?}
     */
    KerviSpineBase.prototype.connect = /**
     * @protected
     * @return {?}
     */
    function () {
    };
    /**
     * @protected
     * @param {?} evt
     * @return {?}
     */
    KerviSpineBase.prototype.onOpen = /**
     * @protected
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        console.log("Kervi open", this, evt);
        this.isConnected = true;
        this.eventHandlers = [];
        this.commandHandlers = [];
        this.queryHandlers = [];
        console.log("Kervi spine ready");
    };
    /**
     * @protected
     * @param {?} evt
     * @return {?}
     */
    KerviSpineBase.prototype.onClose = /**
     * @protected
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        console.log("Kervi spine on close", evt);
        this.isConnected = false;
        /** @type {?} */
        var self = this;
        if (this.options.onClose)
            this.options.onClose.call(this.options.targetScope, evt);
        this.firstOnOpen = true;
        if (this.options.autoConnect) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                self.connect();
            }), 1000);
        }
    };
    /**
     * @param {?} userName
     * @param {?} password
     * @return {?}
     */
    KerviSpineBase.prototype.authenticate = /**
     * @param {?} userName
     * @param {?} password
     * @return {?}
     */
    function (userName, password) {
    };
    /**
     * @return {?}
     */
    KerviSpineBase.prototype.logoff = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @protected
     * @param {?} evt
     * @return {?}
     */
    KerviSpineBase.prototype.onMessage = /**
     * @protected
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
    };
    /**
     * @protected
     * @param {?} evt
     * @return {?}
     */
    KerviSpineBase.prototype.onError = /**
     * @protected
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        console.log("Kervi on error", evt);
    };
    /**
     * @param {?} command
     * @param {?} callback
     * @return {?}
     */
    KerviSpineBase.prototype.addCommandHandler = /**
     * @param {?} command
     * @param {?} callback
     * @return {?}
     */
    function (command, callback) {
    };
    /**
     * @param {?} query
     * @param {?} callback
     * @return {?}
     */
    KerviSpineBase.prototype.addQueryHandler = /**
     * @param {?} query
     * @param {?} callback
     * @return {?}
     */
    function (query, callback) {
    };
    /**
     * @param {?} command
     * @param {...?} p
     * @return {?}
     */
    KerviSpineBase.prototype.sendCommand = /**
     * @param {?} command
     * @param {...?} p
     * @return {?}
     */
    function (command) {
        var p = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            p[_i - 1] = arguments[_i];
        }
    };
    /**
     * @param {?} query
     * @param {...?} p
     * @return {?}
     */
    KerviSpineBase.prototype.sendQuery = /**
     * @param {?} query
     * @param {...?} p
     * @return {?}
     */
    function (query) {
        var p = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            p[_i - 1] = arguments[_i];
        }
    };
    /**
     * @param {?} eventName
     * @param {?} id
     * @return {?}
     */
    KerviSpineBase.prototype.triggerEvent = /**
     * @param {?} eventName
     * @param {?} id
     * @return {?}
     */
    function (eventName, id) {
    };
    return KerviSpineBase;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var KerviWSSpine = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(KerviWSSpine, _super);
    function KerviWSSpine(constructorOptions) {
        var _this = _super.call(this, constructorOptions) || this;
        _this.constructorOptions = constructorOptions;
        _this.addEventHandler = (/**
         * @param {?} eventName
         * @param {?} id
         * @param {?} callback
         * @return {?}
         */
        function (eventName, id, callback) {
            if (id)
                this.eventHandlers.push({ "eventName": eventName + "/" + id, callback: callback });
            else
                this.eventHandlers.push({ "eventName": eventName, callback: callback });
            /** @type {?} */
            var cmd = { id: this.messageId++, "messageType": "registerEventHandler", "event": eventName, "eventId": id };
            //console.log("add event handler",cmd);
            this.websocket.send(JSON.stringify(cmd));
        });
        console.log("kervi spine constructor");
        return _this;
    }
    /**
     * @protected
     * @return {?}
     */
    KerviWSSpine.prototype.connect = /**
     * @protected
     * @return {?}
     */
    function () {
        if (this.isConnected) {
            console.log("Kervi is connected");
            return;
        }
        /** @type {?} */
        var self = this;
        this.websocket = new WebSocket(this.options.protocol + "://" + this.options.address);
        this.websocket.onopen = (/**
         * @param {?} evt
         * @return {?}
         */
        function (evt) {
            console.log("kervi spine on open");
            self.onOpen(evt);
        });
        this.websocket.onclose = (/**
         * @param {?} evt
         * @return {?}
         */
        function (evt) {
            self.onClose(evt);
        });
        this.websocket.onmessage = (/**
         * @param {?} evt
         * @return {?}
         */
        function (evt) {
            self.onMessage(evt);
        });
        this.websocket.onerror = (/**
         * @param {?} evt
         * @return {?}
         */
        function (evt) {
            self.onError(evt);
        });
    };
    /**
     * @param {?} userName
     * @param {?} password
     * @return {?}
     */
    KerviWSSpine.prototype.authenticate = /**
     * @param {?} userName
     * @param {?} password
     * @return {?}
     */
    function (userName, password) {
        this.options.userName = userName;
        this.options.password = password;
        //if (this.options.onAuthenticateStart)
        //	this.options.onAuthenticateStart.call(this.options.targetScope);
        /** @type {?} */
        var cmd = { id: this.messageId++, "messageType": "authenticate", "userName": userName, "password": password };
        console.log("swa", cmd);
        this.websocket.send(JSON.stringify(cmd));
    };
    /**
     * @return {?}
     */
    KerviWSSpine.prototype.logoff = /**
     * @return {?}
     */
    function () {
        //this.options.userName = this.allowAnonymous ? "anonymous" : null;
        //this.options.password = null;
        //this.options.userName = this.allowAnonymous ? "anonymous" : null;
        //this.options.password = null;
        /** @type {?} */
        var cmd = { id: this.messageId++, "messageType": "logoff", "session": this.sessionId };
        this.sessionId = null;
        this.websocket.send(JSON.stringify(cmd));
    };
    /**
     * @param {?} evt
     * @return {?}
     */
    KerviWSSpine.prototype.onMessage = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        //console.log("on m",evt.data);
        /** @type {?} */
        var message = JSON.parse(evt.data);
        /** @type {?} */
        var self = this;
        if (message.messageType == "authenticate") {
            console.log("authenticate");
            this.doAuthenticate = true;
            if (this.options.userName)
                this.authenticate(this.options.userName, this.options.password);
            else
                this.options.onAuthenticate.call(this.options.targetScope, evt);
        }
        else if (message.messageType == "authentication_failed") {
            console.log("authentication failed", this.options.userName);
            if (this.options.userName == "anonymous") {
                this.allowAnonymous = false;
                this.options.userName = null;
                this.options.password = null;
                this.sessionId = null;
                console.log("x", self.options);
                if (self.options.onLogOff) {
                    console.log("x1");
                    self.options.onLogOff.call(self.options.targetScope, evt);
                }
            }
            else
                this.options.onAuthenticateFailed.call(this.options.targetScope, evt);
        }
        else if (message.messageType == "session_authenticated") {
            /** @type {?} */
            var date = new Date();
            date.setTime(date.getTime() + (2 * 60 * 60 * 1000));
            /** @type {?} */
            var expires = "; expires=" + date.toUTCString();
            this.sessionId = message.session;
            document.cookie = "kervisession" + "=" + message.session + expires + "; path=/";
            setTimeout((/**
             * @return {?}
             */
            function () {
                console.log("to", self.options);
                if (self.options.onOpen)
                    self.options.onOpen.call(self.options.targetScope, self.firstOnOpen, evt);
                self.firstOnOpen = false;
            }), 100);
        }
        else if (message.messageType == "session_logoff") {
            if (self.options.onLogOff)
                self.options.onLogOff.call(self.options.targetScope, evt);
            if (this.allowAnonymous && this.options.userName != "anonymous") {
                this.authenticate("anonymous", null);
            }
            else {
                self.options.userName = null;
                self.options.password = null;
                self.sessionId = null;
            }
        }
        else if (message.messageType == "response")
            this.handleRPCResponse(message);
        else if (message.messageType == "event")
            this.handleEvent(message);
        else if (message.messageType == "command")
            this.handleCommand(message);
        else
            console.log("Kervi spine message unknown", this.rpcQueue, evt);
    };
    /**
     * @param {?} evt
     * @return {?}
     */
    KerviWSSpine.prototype.onError = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        console.log("Kervi on error", evt);
    };
    /**
     * @param {?} command
     * @param {?} callback
     * @return {?}
     */
    KerviWSSpine.prototype.addCommandHandler = /**
     * @param {?} command
     * @param {?} callback
     * @return {?}
     */
    function (command, callback) {
        this.commandHandlers.push({ command: command, callback: callback });
        /** @type {?} */
        var cmd = { id: this.messageId++, "messageType": "registerCommandHandler", "command": command };
        this.websocket.send(JSON.stringify(cmd));
    };
    /**
     * @param {?} query
     * @param {?} callback
     * @return {?}
     */
    KerviWSSpine.prototype.addQueryHandler = /**
     * @param {?} query
     * @param {?} callback
     * @return {?}
     */
    function (query, callback) {
        this.queryHandlers.push({ query: query, callback: callback });
        /** @type {?} */
        var cmd = { id: this.messageId++, "messageType": "registerQueryHandler", "query": query };
        this.websocket.send(JSON.stringify(cmd));
    };
    /**
     * @param {?} command
     * @param {...?} p
     * @return {?}
     */
    KerviWSSpine.prototype.sendCommand = /**
     * @param {?} command
     * @param {...?} p
     * @return {?}
     */
    function (command) {
        var p = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            p[_i - 1] = arguments[_i];
        }
        console.log("sec", arguments);
        /** @type {?} */
        var args = [];
        /** @type {?} */
        var callback = null;
        for (var i = 0; (i < p.length); i++) {
            if (p[i] instanceof Function)
                callback = p[i];
            else
                args.push(p[i]);
        }
        /** @type {?} */
        var cmd = { id: this.messageId++, "messageType": "command", "command": command, "args": args };
        if (callback && callback instanceof Function)
            this.addRPCCallback(cmd.id.toString(), callback, null, 0);
        console.log("sendCommand", this, cmd);
        this.websocket.send(JSON.stringify(cmd));
    };
    /**
     * @param {?} query
     * @param {...?} p
     * @return {?}
     */
    KerviWSSpine.prototype.sendQuery = /**
     * @param {?} query
     * @param {...?} p
     * @return {?}
     */
    function (query) {
        var p = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            p[_i - 1] = arguments[_i];
        }
        /** @type {?} */
        var args = [];
        /** @type {?} */
        var callback = null;
        /** @type {?} */
        var callbackTimeout = null;
        /** @type {?} */
        var timeout = 10000;
        for (var i = 0; (i < p.length); i++) {
            if (p[i] instanceof Function)
                if (!callback)
                    callback = p[i];
                else
                    callbackTimeout = p[i];
            else {
                if (callbackTimeout)
                    timeout = p[i];
                else
                    args.push(p[i]);
            }
        }
        /** @type {?} */
        var cmd = { id: this.messageId++, "messageType": "query", "query": query, "args": args };
        this.addRPCCallback(cmd.id.toString(), callback, callbackTimeout, timeout);
        console.log("sendQuery", callback, cmd);
        this.websocket.send(JSON.stringify(cmd));
    };
    /**
     * @param {?} eventName
     * @param {?} id
     * @return {?}
     */
    KerviWSSpine.prototype.triggerEvent = /**
     * @param {?} eventName
     * @param {?} id
     * @return {?}
     */
    function (eventName, id) {
        /** @type {?} */
        var e = { id: this.messageId++, "messageType": "event", "event": eventName, "args": arguments };
        this.websocket.send(JSON.stringify(e));
    };
    return KerviWSSpine;
}(KerviSpineBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var KerviRMQSpine = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(KerviRMQSpine, _super);
    function KerviRMQSpine(constructorOptions) {
        var _this = _super.call(this, constructorOptions) || this;
        _this.constructorOptions = constructorOptions;
        _this.exchange = "/exchange/";
        _this.addEventHandler = (/**
         * @param {?} eventName
         * @param {?} id
         * @param {?} callback
         * @return {?}
         */
        function (eventName, id, callback) {
            if (id)
                this.eventHandlers.push({ "eventName": eventName + "/" + id, callback: callback });
            else
                this.eventHandlers.push({ "eventName": eventName, callback: callback });
            /** @type {?} */
            var cmd = { id: this.messageId++, "messageType": "registerEventHandler", "event": eventName, "eventId": id };
            this.websocket.send(this.exchange, { topic: "registerEventHandler", router_id: this.socketSession }, JSON.stringify(cmd));
        });
        console.log("Kervi io spine init y", _this.options, constructorOptions);
        return _this;
    }
    /**
     * @private
     * @param {?} frame
     * @return {?}
     */
    KerviRMQSpine.prototype.onMQError = /**
     * @private
     * @param {?} frame
     * @return {?}
     */
    function (frame) {
        console.log("MQ error", frame);
    };
    /**
     * @protected
     * @return {?}
     */
    KerviRMQSpine.prototype.connect = /**
     * @protected
     * @return {?}
     */
    function () {
        if (this.isConnected) {
            console.log("Kervi is connected");
            return;
        }
        /** @type {?} */
        var self = this;
        //var mqUrl= this.options.protocol + "://" + this.options.address
        /** @type {?} */
        var mqUrl = "wss://mq.kervi.io:15673/ws";
        this.websocket = Stomp.client(mqUrl);
        this.websocket.heartbeat.incoming = 0;
        self.exchange = "/exchange/" + self.options.apiToken.app_id;
        console.log("exchange", self.exchange);
        this.websocket.connect(self.options.apiToken.api_token, "ui", (/**
         * @param {?} frame
         * @return {?}
         */
        function (frame) {
            console.log("MQ connect", frame, self.websocket, this, self);
            self.socketSession = frame.headers.session;
            self.exchange = "/exchange/" + self.options.apiToken.app_id;
            self.websocket.subscribe(self.exchange, (/**
             * @param {?} message
             * @return {?}
             */
            function (message) {
                console.log("mq ", message);
                if (message.headers["topic"])
                    message.headers["topic"] = message.headers["topic"].replace(new RegExp("\\c", "g"), ":");
                if (message.command == "CONNECTED") ;
                else if (message.headers["topic"] == "ping")
                    self.onPing(message);
                else
                    self.onMessage(message);
            }), {});
        }), self.onMQError, self.options.apiToken.api_channel);
    };
    /**
     * @param {?} message
     * @return {?}
     */
    KerviRMQSpine.prototype.onPing = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        console.log("onping", this.options.appId, message);
        /** @type {?} */
        var self = this;
        if (!this.isConnected && message.headers["connection_id"] == self.options.apiToken.app_id) {
            this.onOpen(message);
            this.websocket.send(self.exchange, { topic: "session:new", router_id: message.headers["router_id"], session_id: this.socketSession }, "{}");
        }
    };
    /**
     * @param {?} userName
     * @param {?} password
     * @return {?}
     */
    KerviRMQSpine.prototype.authenticate = /**
     * @param {?} userName
     * @param {?} password
     * @return {?}
     */
    function (userName, password) {
        this.options.userName = userName;
        this.options.password = password;
        if (this.options.onAuthenticateStart)
            this.options.onAuthenticateStart.call(this.options.targetScope);
        /** @type {?} */
        var cmd = { id: this.messageId++, "messageType": "authenticate", "userName": this.options.userName, "password": this.options.password };
        this.websocket.send(JSON.stringify(cmd));
    };
    /**
     * @return {?}
     */
    KerviRMQSpine.prototype.logoff = /**
     * @return {?}
     */
    function () {
        //this.options.userName = this.allowAnonymous ? "anonymous" : null;
        //this.options.password = null;
        //this.options.userName = this.allowAnonymous ? "anonymous" : null;
        //this.options.password = null;
        /** @type {?} */
        var cmd = { id: this.messageId++, "messageType": "logoff", "session": this.sessionId };
        this.sessionId = null;
        this.websocket.send(JSON.stringify(cmd));
    };
    /**
     * @param {?} evt
     * @return {?}
     */
    KerviRMQSpine.prototype.onMessage = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        console.log("on m", evt);
        /** @type {?} */
        var message = JSON.parse(evt.body);
        /** @type {?} */
        var self = this;
        /** @type {?} */
        var topic = evt.headers["topic"];
        if (topic == "authenticate") {
            console.log("authenticate");
            this.doAuthenticate = true;
            if (this.options.userName)
                this.authenticate(this.options.userName, this.options.password);
            else
                this.options.onAuthenticate.call(this.options.targetScope, evt);
        }
        else if (topic == "authentication_failed") {
            console.log("authentication failed", this.options.userName);
            if (this.options.userName == "anonymous") {
                this.allowAnonymous = false;
                this.options.userName = null;
                this.options.password = null;
                this.sessionId = null;
                console.log("x", self.options);
                if (self.options.onLogOff) {
                    console.log("x1");
                    self.options.onLogOff.call(self.options.targetScope, evt);
                }
            }
            else
                this.options.onAuthenticateFailed.call(this.options.targetScope, evt);
        }
        else if (topic == "session_authenticated") {
            /** @type {?} */
            var date = new Date();
            date.setTime(date.getTime() + (2 * 60 * 60 * 1000));
            /** @type {?} */
            var expires = "; expires=" + date.toUTCString();
            this.sessionId = message.session;
            document.cookie = "kervisession" + "=" + message.session + expires + "; path=/";
            setTimeout((/**
             * @return {?}
             */
            function () {
                if (self.options.onOpen)
                    self.options.onOpen.call(self.options.targetScope, self.firstOnOpen, evt);
                self.firstOnOpen = false;
            }), 100);
        }
        else if (topic == "session_logoff") {
            if (self.options.onLogOff)
                self.options.onLogOff.call(self.options.targetScope, evt);
            if (this.allowAnonymous && this.options.userName != "anonymous") {
                this.authenticate("anonymous", null);
            }
            else {
                self.options.userName = null;
                self.options.password = null;
                self.sessionId = null;
            }
        }
        else if (evt.headers["type"] == "query_response") {
            this.handleRPCResponse({ id: evt.headers["query_id"], response: message });
        }
        else if (evt.headers["type"] == "event") {
            console.log("e", evt);
            /** @type {?} */
            var topic_tag = evt.headers["topic"].split(":");
            this.handleEvent({ event: topic_tag[1], id: topic_tag[2], args: message.args });
        }
        else if (message.messageType == "command")
            this.handleCommand(message);
        else
            console.log("Kervi spine message unknown", this.rpcQueue, evt);
    };
    /**
     * @param {?} evt
     * @return {?}
     */
    KerviRMQSpine.prototype.onError = /**
     * @param {?} evt
     * @return {?}
     */
    function (evt) {
        console.log("Kervi on error", evt);
    };
    /**
     * @param {?} command
     * @param {?} callback
     * @return {?}
     */
    KerviRMQSpine.prototype.addCommandHandler = /**
     * @param {?} command
     * @param {?} callback
     * @return {?}
     */
    function (command, callback) {
        this.commandHandlers.push({ command: command, callback: callback });
        /** @type {?} */
        var cmd = { id: this.messageId++, "messageType": "registerCommandHandler", "command": command };
        //this.websocket.send(JSON.stringify(cmd));
        this.websocket.send(this.exchange, { topic: "registerCommandHandler", router_id: this.socketSession }, JSON.stringify(cmd));
    };
    /**
     * @param {?} query
     * @param {?} callback
     * @return {?}
     */
    KerviRMQSpine.prototype.addQueryHandler = /**
     * @param {?} query
     * @param {?} callback
     * @return {?}
     */
    function (query, callback) {
        this.queryHandlers.push({ query: query, callback: callback });
        /** @type {?} */
        var cmd = { id: this.messageId++, "messageType": "registerQueryHandler", "query": query };
        this.websocket.send(this.exchange, { topic: "registerQueryHandler", router_id: this.socketSession }, JSON.stringify(cmd));
    };
    /**
     * @param {?} command
     * @param {...?} p
     * @return {?}
     */
    KerviRMQSpine.prototype.sendCommand = /**
     * @param {?} command
     * @param {...?} p
     * @return {?}
     */
    function (command) {
        var p = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            p[_i - 1] = arguments[_i];
        }
        console.log("sec", arguments);
        /** @type {?} */
        var args = [];
        /** @type {?} */
        var callback = null;
        for (var i = 0; (i < p.length); i++) {
            if (p[i] instanceof Function)
                callback = p[i];
            else
                args.push(p[i]);
        }
        /*if (p.length>1){
                    var argOffset=1;
                    if ( callback && callback instanceof Function )
                        argOffset+=1;
                    for (var i=argOffset;(i<arguments.length);i++){
                        args.push(arguments[i]);
                    }
                }*/
        /** @type {?} */
        var cmd = { id: this.messageId++, "args": args, kwargs: {} };
        if (callback && callback instanceof Function)
            this.addRPCCallback(cmd.id.toString(), callback, null, 0);
        console.log("sendCommand", this, cmd);
        this.websocket.send(this.exchange, { topic: "command:" + command, router_id: this.socketSession }, JSON.stringify(cmd));
    };
    /**
     * @param {?} query
     * @param {...?} p
     * @return {?}
     */
    KerviRMQSpine.prototype.sendQuery = /**
     * @param {?} query
     * @param {...?} p
     * @return {?}
     */
    function (query) {
        var p = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            p[_i - 1] = arguments[_i];
        }
        /** @type {?} */
        var args = [];
        /** @type {?} */
        var callback = null;
        /** @type {?} */
        var callbackTimeout = null;
        /** @type {?} */
        var timeout = 10000;
        for (var i = 0; (i < p.length); i++) {
            if (p[i] instanceof Function)
                if (!callback)
                    callback = p[i];
                else
                    callbackTimeout = p[i];
            else {
                if (callbackTimeout)
                    timeout = p[i];
                else
                    args.push(p[i]);
            }
        }
        /** @type {?} */
        var cmd = { id: this.messageId++, "messageType": "query", "query": query, "args": args, kwargs: [], qts: 0 };
        this.addRPCCallback(cmd.id.toString(), callback, callbackTimeout, timeout);
        console.log("sendQuery", callback, cmd);
        //this.websocket.send(JSON.stringify(cmd));
        this.websocket.send(this.exchange, { topic: "query:" + query, qts: 0, query_id: cmd.id.toString(), router_id: this.socketSession, response_address: this.socketSession }, JSON.stringify(cmd));
    };
    /**
     * @param {?} eventName
     * @param {?} id
     * @return {?}
     */
    KerviRMQSpine.prototype.triggerEvent = /**
     * @param {?} eventName
     * @param {?} id
     * @return {?}
     */
    function (eventName, id) {
        /** @type {?} */
        var e = { id: this.messageId++, "messageType": "event", "event": eventName, "args": arguments };
        this.websocket.send(JSON.stringify(e));
    };
    return KerviRMQSpine;
}(KerviSpineBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DashboardLink = /** @class */ (function () {
    /*constructor(dashboardId:string, sectionId:string, sectionName:string){
        this.dashboardId = dashboardId;
        this.sectionId = sectionId;
        this.sectionName = sectionName;
    }*/
    function DashboardLink(component, message) {
        this.dashboardId = message.dashboardId;
        this.panelId = message.sectionId;
        this.panelName = message.sectionName;
        this.component = component;
        this.parameters = message.parameters;
    }
    return DashboardLink;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var KerviValue = /** @class */ (function () {
    function KerviValue() {
        this.componentType = "KerviValue";
        this.typeName = null;
        this.dashboards = [];
        this.ui = {
            type: "",
            orientation: "",
            visible: true
        };
    }
    return KerviValue;
}());
/**
 * @abstract
 * @template valueType
 */
var  /**
 * @abstract
 * @template valueType
 */
KerviValueType = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(KerviValueType, _super);
    function KerviValueType(message, kerviService) {
        var e_1, _a;
        var _this = _super.call(this) || this;
        _this.kerviService = null;
        _this.kerviService = kerviService;
        _this.value$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](message.value);
        _this.name = message.name;
        _this.isInput = message.isInput;
        _this.ui = message.ui;
        _this.command = message.command;
        _this.id = message.id;
        _this.ui["type"] = message.componentType;
        _this.ui["orientation"] = message.orientation;
        _this.ui["visible"] = message.visible;
        for (var prop in message.ui) {
            if (_this.ui[prop] != undefined)
                _this.ui[prop] = message.ui[prop];
        }
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(message.dashboardLinks), _c = _b.next(); !_c.done; _c = _b.next()) {
                var dashboardLink = _c.value;
                _this.dashboards.push(new DashboardLink(_this, dashboardLink));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return _this;
    }
    Object.defineProperty(KerviValueType.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            //console.log("gv", this.id, this.value$.value)
            return this.value$.value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            console.log("sv", this.id);
            this.value$.next(value);
            this.kerviService.spine.sendCommand(this.command, value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} v
     * @param {?=} notify
     * @return {?}
     */
    KerviValueType.prototype.set = /**
     * @param {?} v
     * @param {?=} notify
     * @return {?}
     */
    function (v, notify) {
        if (notify === void 0) { notify = true; }
        this.value$.next(v);
        if (notify)
            this.kerviService.spine.sendCommand(this.command, v);
    };
    return KerviValueType;
}(KerviValue));
/** @enum {number} */
var ValueRangeType = {
    normal: 0, warning: 1, error: 2,
};
ValueRangeType[ValueRangeType.normal] = 'normal';
ValueRangeType[ValueRangeType.warning] = 'warning';
ValueRangeType[ValueRangeType.error] = 'error';
var ValueRange = /** @class */ (function () {
    function ValueRange(range) {
        this.start = null;
        this.end = null;
        this.type = null;
        this.start = range["start"];
        this.end = range["end"];
        if (range["type"] == "warning")
            this.type = ValueRangeType.warning;
        else if (range["type"] == "error")
            this.type = ValueRangeType.error;
        else
            this.type = ValueRangeType.normal;
    }
    return ValueRange;
}());
var KerviEnumOptionModel = /** @class */ (function () {
    function KerviEnumOptionModel(messageOption) {
        this.selected$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.value = messageOption.value;
        this.text = messageOption.text;
        this.selected$.next(messageOption.selected);
    }
    /**
     * @return {?}
     */
    KerviEnumOptionModel.prototype.updateReferences = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} component
     * @return {?}
     */
    KerviEnumOptionModel.prototype.reload = /**
     * @param {?} component
     * @return {?}
     */
    function (component) { };
    /**
     * @param {?} components
     * @return {?}
     */
    KerviEnumOptionModel.prototype.removeReferences = /**
     * @param {?} components
     * @return {?}
     */
    function (components) { };
    return KerviEnumOptionModel;
}());
var SelectValue = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SelectValue, _super);
    function SelectValue(message, kerviService) {
        var e_2, _a;
        var _this = _super.call(this, message, kerviService) || this;
        _this.options = [];
        _this.lastSelected$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        /** @type {?} */
        var self = _this;
        _this.options = [];
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(message.options), _c = _b.next(); !_c.done; _c = _b.next()) {
                var option = _c.value;
                _this.options.push(new KerviEnumOptionModel(option));
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        _this.selectOptions(_this.value$.value);
        _this.value$.subscribe((/**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            self.selectOptions(v);
        }));
        return _this;
    }
    /**
     * @protected
     * @return {?}
     */
    SelectValue.prototype.getDefaultValue = /**
     * @protected
     * @return {?}
     */
    function () {
        return [];
    };
    /**
     * @param {?} selectedOptions
     * @return {?}
     */
    SelectValue.prototype.selectOptions = /**
     * @param {?} selectedOptions
     * @return {?}
     */
    function (selectedOptions) {
        var e_3, _a, e_4, _b, e_5, _c;
        console.log("soc");
        if (!selectedOptions)
            return;
        try {
            for (var _d = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.options), _e = _d.next(); !_e.done; _e = _d.next()) {
                var option = _e.value;
                option.selected$.next(false);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
            }
            finally { if (e_3) throw e_3.error; }
        }
        try {
            for (var selectedOptions_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(selectedOptions), selectedOptions_1_1 = selectedOptions_1.next(); !selectedOptions_1_1.done; selectedOptions_1_1 = selectedOptions_1.next()) {
                var selectedOption = selectedOptions_1_1.value;
                console.log("so", selectedOption);
                try {
                    for (var _f = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.options), _g = _f.next(); !_g.done; _g = _f.next()) {
                        var option = _g.value;
                        console.log("sox", option);
                        if (option.value == selectedOption) {
                            option.selected$.next(true);
                            this.lastSelected$.next(option);
                            console.log("os", option.text, option.selected$.value);
                            break;
                        }
                    }
                }
                catch (e_5_1) { e_5 = { error: e_5_1 }; }
                finally {
                    try {
                        if (_g && !_g.done && (_c = _f.return)) _c.call(_f);
                    }
                    finally { if (e_5) throw e_5.error; }
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (selectedOptions_1_1 && !selectedOptions_1_1.done && (_b = selectedOptions_1.return)) _b.call(selectedOptions_1);
            }
            finally { if (e_4) throw e_4.error; }
        }
    };
    return SelectValue;
}(KerviValueType));
var NumberValue = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NumberValue, _super);
    function NumberValue(message, kerviService) {
        var e_6, _a, e_7, _b;
        var _this = _super.call(this, message, kerviService) || this;
        _this.qtyUnitTo = null;
        _this.sparkline$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        _this.ranges = [];
        _this.unit = message.unit;
        _this.typeName = "Number";
        _this.qtyUnitFrom = message.unit;
        if (_this.unit == "c" && kerviService.application$.value["display"]["unit_system"]["temperature"] == "F") {
            _this.qtyUnitFrom = "tempC";
            _this.qtyUnitTo = "tempF";
            _this.unit = "F";
        }
        try {
            for (var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(message.ranges), _d = _c.next(); !_d.done; _d = _c.next()) {
                var range = _d.value;
                if (_this.qtyUnitTo) {
                    /** @type {?} */
                    var q = new Qty(range["start"], _this.qtyUnitFrom);
                    range["start"] = q.to(_this.qtyUnitTo).scalar;
                    /** @type {?} */
                    var q = new Qty(range["end"], _this.qtyUnitFrom);
                    range["end"] = q.to(_this.qtyUnitTo).scalar;
                    _this.ranges.push(new ValueRange(range));
                }
                else
                    _this.ranges.push(new ValueRange(range));
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_6) throw e_6.error; }
        }
        if (_this.qtyUnitTo && message.maxValue) {
            /** @type {?} */
            var q = new Qty(message.maxValue, _this.qtyUnitFrom);
            _this.maxValue = q.to(_this.qtyUnitTo).scalar;
        }
        else
            _this.maxValue = message.maxValue;
        if (_this.qtyUnitTo && message.minValue) {
            /** @type {?} */
            var q = new Qty(message.minValue, _this.qtyUnitFrom);
            _this.minValue = q.to(_this.qtyUnitTo).scalar;
        }
        else
            _this.minValue = message.minValue;
        /** @type {?} */
        var spl = [];
        try {
            for (var _e = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(message.sparkline), _f = _e.next(); !_f.done; _f = _e.next()) {
                var spv = _f.value;
                if (_this.qtyUnitTo) {
                    console.log("spv", spv);
                    /** @type {?} */
                    var q = new Qty(spv.value, _this.qtyUnitFrom);
                    //spv.value = q.to(this.qtyUnitTo).scalar;
                }
                spl.push(spv);
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
            }
            finally { if (e_7) throw e_7.error; }
        }
        _this.sparkline$.next(spl);
        _this.set(message.value, false);
        return _this;
    }
    /**
     * @protected
     * @return {?}
     */
    NumberValue.prototype.getDefaultValue = /**
     * @protected
     * @return {?}
     */
    function () {
        return 0;
    };
    /**
     * @param {?} v
     * @param {?=} notify
     * @return {?}
     */
    NumberValue.prototype.set = /**
     * @param {?} v
     * @param {?=} notify
     * @return {?}
     */
    function (v, notify) {
        if (notify === void 0) { notify = true; }
        /** @type {?} */
        var newValue = v;
        if (this.qtyUnitTo) {
            /** @type {?} */
            var q = new Qty(v, this.qtyUnitFrom);
            newValue = q.to(this.qtyUnitTo).scalar;
        }
        this.value$.next(newValue);
        if (notify)
            this.kerviService.spine.sendCommand(this.command, v);
        /** @type {?} */
        var spl = this.sparkline$.value;
        spl.push(newValue);
        if (spl.length > 10)
            spl.shift();
        this.sparkline$.next(spl);
    };
    return NumberValue;
}(KerviValueType));
var StringValue = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StringValue, _super);
    function StringValue(message, kerviService) {
        var _this = _super.call(this, message, kerviService) || this;
        _this.typeName = "String";
        return _this;
    }
    /**
     * @protected
     * @return {?}
     */
    StringValue.prototype.getDefaultValue = /**
     * @protected
     * @return {?}
     */
    function () {
        return "";
    };
    return StringValue;
}(KerviValueType));
var BooleanValue = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BooleanValue, _super);
    function BooleanValue(message, kerviService) {
        var _this = _super.call(this, message, kerviService) || this;
        _this.typeName = "Boolean";
        return _this;
    }
    /**
     * @protected
     * @return {?}
     */
    BooleanValue.prototype.getDefaultValue = /**
     * @protected
     * @return {?}
     */
    function () {
        return false;
    };
    return BooleanValue;
}(KerviValueType));
var DateTimeValue = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DateTimeValue, _super);
    function DateTimeValue(message, kerviService) {
        var _this = _super.call(this, message, kerviService) || this;
        _this.subType = message.inputType;
        _this.typeName = "DateTime";
        return _this;
    }
    /**
     * @protected
     * @return {?}
     */
    DateTimeValue.prototype.getDefaultValue = /**
     * @protected
     * @return {?}
     */
    function () {
        return new Date();
    };
    return DateTimeValue;
}(KerviValueType));
var ColorValue = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ColorValue, _super);
    function ColorValue(message, kerviService) {
        var _this = _super.call(this, message, kerviService) || this;
        _this.typeName = "Color";
        return _this;
    }
    /**
     * @protected
     * @return {?}
     */
    ColorValue.prototype.getDefaultValue = /**
     * @protected
     * @return {?}
     */
    function () {
        return "#ffffff";
    };
    return ColorValue;
}(KerviValueType));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ComponentRef = /** @class */ (function () {
    function ComponentRef(message) {
        this.id = message.id;
    }
    return ComponentRef;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Controller = /** @class */ (function () {
    function Controller(message, kerviService) {
        var e_1, _a, e_2, _b, e_3, _c, e_4, _d;
        this.componentType = "controller";
        this.ui = {};
        this.inputs = [];
        this.outputs = [];
        this.actions = [];
        this.inputReferences = [];
        this.outputReferences = [];
        this.actionsReferences = [];
        this.dashboards = [];
        this.kerviService = kerviService;
        this.id = message.id;
        this.name = message.name;
        this.type = message.type;
        this.ui = message.ui;
        this.visible = message.visible;
        this.parameters = message.parameters;
        this.template = message.template;
        try {
            for (var _e = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(message.inputs), _f = _e.next(); !_f.done; _f = _e.next()) {
                var ref = _f.value;
                this.inputReferences.push(new ComponentRef(ref));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_a = _e.return)) _a.call(_e);
            }
            finally { if (e_1) throw e_1.error; }
        }
        try {
            for (var _g = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(message.outputs), _h = _g.next(); !_h.done; _h = _g.next()) {
                var ref = _h.value;
                this.outputReferences.push(new ComponentRef(ref));
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_h && !_h.done && (_b = _g.return)) _b.call(_g);
            }
            finally { if (e_2) throw e_2.error; }
        }
        try {
            for (var _j = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(message.actions), _k = _j.next(); !_k.done; _k = _j.next()) {
                var ref = _k.value;
                this.actionsReferences.push(new ComponentRef(ref));
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_k && !_k.done && (_c = _j.return)) _c.call(_j);
            }
            finally { if (e_3) throw e_3.error; }
        }
        try {
            for (var _l = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(message.dashboardLinks), _m = _l.next(); !_m.done; _m = _l.next()) {
                var dashboardLink = _m.value;
                this.dashboards.push(new DashboardLink(this, dashboardLink));
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_m && !_m.done && (_d = _l.return)) _d.call(_l);
            }
            finally { if (e_4) throw e_4.error; }
        }
    }
    /**
     * @return {?}
     */
    Controller.prototype.updateReferences = /**
     * @return {?}
     */
    function () {
        var e_5, _a, e_6, _b, e_7, _c;
        if (this.inputs.length == 0) {
            try {
                for (var _d = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.inputReferences), _e = _d.next(); !_e.done; _e = _d.next()) {
                    var ref = _e.value;
                    /** @type {?} */
                    var component = this.kerviService.getComponent(ref.id);
                    if (component)
                        this.inputs.push(component);
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
                }
                finally { if (e_5) throw e_5.error; }
            }
        }
        if (this.outputs.length == 0) {
            try {
                for (var _f = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.outputReferences), _g = _f.next(); !_g.done; _g = _f.next()) {
                    var ref = _g.value;
                    /** @type {?} */
                    var component = this.kerviService.getComponent(ref.id);
                    if (component)
                        this.outputs.push(component);
                }
            }
            catch (e_6_1) { e_6 = { error: e_6_1 }; }
            finally {
                try {
                    if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                }
                finally { if (e_6) throw e_6.error; }
            }
        }
        if (this.actions.length == 0) {
            try {
                for (var _h = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.actionsReferences), _j = _h.next(); !_j.done; _j = _h.next()) {
                    var ref = _j.value;
                    /** @type {?} */
                    var component = this.kerviService.getComponent(ref.id);
                    if (component)
                        this.actions.push(component);
                }
            }
            catch (e_7_1) { e_7 = { error: e_7_1 }; }
            finally {
                try {
                    if (_j && !_j.done && (_c = _h.return)) _c.call(_h);
                }
                finally { if (e_7) throw e_7.error; }
            }
        }
    };
    /**
     * @param {?} components
     * @return {?}
     */
    Controller.prototype.removeReferences = /**
     * @param {?} components
     * @return {?}
     */
    function (components) { };
    /**
     * @param {?} component
     * @return {?}
     */
    Controller.prototype.reload = /**
     * @param {?} component
     * @return {?}
     */
    function (component) { };
    return Controller;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Copyright (c) 2016, Tim Wentzlau
// Licensed under MIT
var DashboardSizes = /** @class */ (function () {
    function DashboardSizes() {
        this.valueWidth = "3rem";
        this.buttonWidth = "25px";
        this.buttonHeight = "";
        this.switchWidth = "25px";
        this.switchHeight = "25px";
        this.gaugeWidth = "100px";
        this.gaugeHeight = "200px";
    }
    return DashboardSizes;
}());
var DashboardMessageModel = /** @class */ (function () {
    function DashboardMessageModel(message) {
        this.timestamp = new Date(message.timestamp * 1000);
        this.topic = message.topic;
        this.body = message.body;
        this.type = message.type;
        this.sourceId = message.source_id;
        this.sourceName = message.source_name;
        this.area = message.area;
        this.level = message.level;
    }
    return DashboardMessageModel;
}());
var DashboardPanelComponent = /** @class */ (function () {
    function DashboardPanelComponent(message) {
        this.message = message;
        this.linkId = message.linkId;
        this.componentId = message.componentId;
        this.component = message.component;
        this.parameters = message.parameters;
    }
    return DashboardPanelComponent;
}());
var DashboardPanelParameters = /** @class */ (function () {
    function DashboardPanelParameters(messageParameters) {
        this.title = null;
        this.width = null;
        this.height = null;
        this.type = null;
        this.userLog = null;
        this.logLength = 5;
        this.layout = "row";
        this.title = messageParameters.label;
        this.height = this.calcSize(messageParameters.height);
        this.width = this.calcSize(messageParameters.width);
        this.userLog = messageParameters.userLog;
        this.logLength = messageParameters.logLength;
        if (messageParameters.type)
            this.type = messageParameters.type;
        if (messageParameters.layout)
            this.layout = messageParameters.layout;
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    DashboardPanelParameters.prototype.calcSize = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value == null)
            return "";
        else if (value === "")
            return "";
        else if (isNaN(value)) {
            return value;
        }
        else if (value > 0)
            return value + "%";
        else
            return "";
    };
    return DashboardPanelParameters;
}());
var DashboardPanel = /** @class */ (function () {
    function DashboardPanel(dashboard, messagePanel) {
        var e_1, _a;
        this.components = [];
        this.subPanels = [];
        this.hasOnlyGroupPanels = true;
        this.dashboard = dashboard;
        this.id = messagePanel.id;
        this.name = messagePanel.name;
        this.type = messagePanel.type;
        this.parameters = new DashboardPanelParameters(messagePanel.uiParameters);
        /*if (messagePanel.components)
            for(var componentRef of messagePanel.components){
                this.components.push(new DashboardPanelComponentModel(componentRef))
            }*/
        if (messagePanel.panels) {
            try {
                //console.log("spa",messagePanel.panels);
                for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(messagePanel.panels), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var subMessagePanel = _c.value;
                    /** @type {?} */
                    var panel = new DashboardPanel(this, subMessagePanel);
                    this.subPanels.push(panel);
                    if (panel.type !== "group")
                        this.hasOnlyGroupPanels = false;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    }
    /**
     * @param {?} source
     * @return {?}
     */
    DashboardPanel.prototype.reload = /**
     * @param {?} source
     * @return {?}
     */
    function (source) {
        var e_2, _a, e_3, _b, e_4, _c, e_5, _d, e_6, _e, e_7, _f;
        try {
            //console.log("rl", this);
            for (var _g = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(source.subPanels), _h = _g.next(); !_h.done; _h = _g.next()) {
                var subPanel = _h.value;
                this.reload(subPanel);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_h && !_h.done && (_a = _g.return)) _a.call(_g);
            }
            finally { if (e_2) throw e_2.error; }
        }
        try {
            for (var _j = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(source.components), _k = _j.next(); !_k.done; _k = _j.next()) {
                var sourceComponent = _k.value;
                /** @type {?} */
                var found = false;
                try {
                    for (var _l = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.components), _m = _l.next(); !_m.done; _m = _l.next()) {
                        var component = _m.value;
                        if (component.componentId == sourceComponent.componentId) {
                            found = true;
                        }
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (_m && !_m.done && (_c = _l.return)) _c.call(_l);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
                if (!found) {
                    this.components.push(sourceComponent);
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_k && !_k.done && (_b = _j.return)) _b.call(_j);
            }
            finally { if (e_3) throw e_3.error; }
        }
        /** @type {?} */
        var deleteComponents = [];
        try {
            for (var _o = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.components), _p = _o.next(); !_p.done; _p = _o.next()) {
                var component = _p.value;
                /** @type {?} */
                var found = false;
                try {
                    for (var _q = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(source.components), _r = _q.next(); !_r.done; _r = _q.next()) {
                        var sourceComponent = _r.value;
                        if (sourceComponent.componentId == component.componentId) {
                            found = true;
                            break;
                        }
                    }
                }
                catch (e_6_1) { e_6 = { error: e_6_1 }; }
                finally {
                    try {
                        if (_r && !_r.done && (_e = _q.return)) _e.call(_q);
                    }
                    finally { if (e_6) throw e_6.error; }
                }
                if (!found)
                    deleteComponents.push(component);
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_p && !_p.done && (_d = _o.return)) _d.call(_o);
            }
            finally { if (e_5) throw e_5.error; }
        }
        try {
            //console.log("dsc",deleteComponents);
            for (var deleteComponents_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(deleteComponents), deleteComponents_1_1 = deleteComponents_1.next(); !deleteComponents_1_1.done; deleteComponents_1_1 = deleteComponents_1.next()) {
                var component = deleteComponents_1_1.value;
                this.components.splice(this.components.indexOf(component), 1);
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (deleteComponents_1_1 && !deleteComponents_1_1.done && (_f = deleteComponents_1.return)) _f.call(deleteComponents_1);
            }
            finally { if (e_7) throw e_7.error; }
        }
    };
    return DashboardPanel;
}());
var DashboardBackgroundModel = /** @class */ (function () {
    function DashboardBackgroundModel(message) {
        this.type = message.type;
        this.cameraId = message.cameraId;
    }
    return DashboardBackgroundModel;
}());
var Dashboard = /** @class */ (function () {
    function Dashboard(message) {
        var e_8, _a;
        this.headerPanel = null;
        this.footerCenterPanel = null;
        this.footerLeftPanel = null;
        this.footerRightPanel = null;
        this.sysPanel = null;
        this.backgroundPanel = null;
        this.controllerPanel = null;
        this.LeftPadXPanel = null;
        this.LeftPadYPanel = null;
        this.RightPadXPanel = null;
        this.RightPadYPanel = null;
        this.dashboards = [];
        this.currentPanel = null;
        this.id = message.id;
        this.name = message.name;
        this.componentType = "dashboard";
        this.type = message.type;
        this.isDefault = message.isDefault;
        this.template = message.template;
        this.unitSize = message.unitSize;
        //this.background=new DashboardBackgroundModel(message.background);
        this.panels = [];
        this.sysPanels = [];
        if (!this.template) {
            try {
                for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(message.sections), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var messagePanel = _c.value;
                    if (!messagePanel) {
                        console.log("dashboard with null panel", this.id);
                        continue;
                    }
                    /** @type {?} */
                    var panel = new DashboardPanel(this, messagePanel);
                    /** @type {?} */
                    var sysPanel = true;
                    if (panel.id == "header_center")
                        this.headerPanel = panel;
                    else if (panel.id == "footer_left")
                        this.footerLeftPanel = panel;
                    else if (panel.id == "footer_center")
                        this.footerCenterPanel = panel;
                    else if (panel.id == "footer_right")
                        this.footerRightPanel = panel;
                    else if (panel.id == "header_right")
                        this.sysPanel = panel;
                    else if (panel.id == "controllers")
                        this.controllerPanel = panel;
                    else if (panel.id == "background")
                        this.backgroundPanel = panel;
                    else if (panel.id == "left_pad_x")
                        this.LeftPadXPanel = panel;
                    else if (panel.id == "left_pad_y")
                        this.LeftPadYPanel = panel;
                    else if (panel.id == "right_pad_x")
                        this.RightPadXPanel = panel;
                    else if (panel.id == "right_pad_y")
                        this.RightPadYPanel = panel;
                    else {
                        sysPanel = false;
                        if (panel.type != "group") {
                            if (this.currentPanel == null) {
                                this.currentPanel = new DashboardPanel(this, {
                                    "id": null,
                                    "name": "",
                                    "type": "group",
                                    "components": [],
                                    "panels": [],
                                    "uiParameters": {
                                        "title": "",
                                        "width": 100,
                                        "height": 0,
                                        "userLog": false,
                                        "logLength": 0
                                    }
                                });
                                this.currentPanel.subPanels.push(panel);
                                this.panels.push(this.currentPanel);
                            }
                            else {
                                this.currentPanel.subPanels.push(panel);
                            }
                        }
                        else {
                            this.panels.push(panel);
                            this.currentPanel = null;
                        }
                    }
                    if (sysPanel)
                        this.sysPanels.push(panel);
                }
            }
            catch (e_8_1) { e_8 = { error: e_8_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_8) throw e_8.error; }
            }
            if (!this.currentPanel) {
                this.currentPanel = new DashboardPanel(this, {
                    "id": null,
                    "name": "",
                    "type": "group",
                    "components": [],
                    "panels": [],
                    "uiParameters": {
                        "title": "",
                        "width": 100,
                        "height": 0,
                        "userLog": false,
                        "logLength": 0
                    }
                });
                //this.currentPanel.subPanels.push(panel);
                this.panels.push(this.currentPanel);
            }
        }
    }
    /**
     * @return {?}
     */
    Dashboard.prototype.isEmpty = /**
     * @return {?}
     */
    function () {
        return this.panels.length == 0;
    };
    /**
     * @param {?} deleteComponents
     * @return {?}
     */
    Dashboard.prototype.removeReferences = /**
     * @param {?} deleteComponents
     * @return {?}
     */
    function (deleteComponents) { };
    /**
     * @return {?}
     */
    Dashboard.prototype.updateReferences = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} component
     * @return {?}
     */
    Dashboard.prototype.reload = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        /** @type {?} */
        var source = (/** @type {?} */ (component));
        if (!this.backgroundPanel && source.backgroundPanel)
            this.backgroundPanel = source.backgroundPanel;
        else if (this.backgroundPanel && !source.backgroundPanel)
            this.backgroundPanel = null;
        else if (this.backgroundPanel)
            this.backgroundPanel.reload(source.backgroundPanel);
        if (!this.footerLeftPanel && source.footerLeftPanel)
            this.footerLeftPanel = source.footerLeftPanel;
        else if (this.footerLeftPanel && !source.footerLeftPanel)
            this.footerLeftPanel = null;
        else if (this.footerLeftPanel)
            this.footerLeftPanel.reload(source.footerLeftPanel);
        if (!this.footerRightPanel && source.footerRightPanel)
            this.footerRightPanel = source.footerRightPanel;
        else if (this.footerRightPanel && !source.footerRightPanel)
            this.footerRightPanel = null;
        else if (this.footerRightPanel)
            this.footerRightPanel.reload(source.footerRightPanel);
        if (!this.footerCenterPanel && source.footerCenterPanel)
            this.footerCenterPanel = source.footerCenterPanel;
        else if (this.footerCenterPanel && !source.footerCenterPanel)
            this.footerCenterPanel = null;
        else if (this.footerCenterPanel)
            this.footerCenterPanel.reload(source.footerCenterPanel);
        /*if (!this.headerPanel && source.headerPanel)
            this.headerPanel=source.headerPanel;
        else if (this.headerPanel && !source.headerPanel)
            this.headerPanel = null
        else if (this.headerPanel)
            this.headerPanel.reload(source.headerPanel)*/
        if (!this.sysPanel && source.sysPanel)
            this.sysPanel = source.sysPanel;
        else if (this.sysPanel && !source.sysPanel)
            this.sysPanel = null;
        else if (this.sysPanel)
            this.sysPanel.reload(source.sysPanel);
        if (!this.LeftPadXPanel && source.LeftPadXPanel)
            this.LeftPadXPanel = source.LeftPadXPanel;
        else if (this.LeftPadXPanel && !source.LeftPadXPanel)
            this.LeftPadXPanel = null;
        else if (this.LeftPadXPanel)
            this.LeftPadXPanel.reload(source.LeftPadXPanel);
        if (!this.LeftPadYPanel && source.LeftPadYPanel)
            this.LeftPadYPanel = source.LeftPadYPanel;
        else if (this.LeftPadYPanel && !source.LeftPadYPanel)
            this.LeftPadYPanel = null;
        else if (this.LeftPadYPanel)
            this.LeftPadYPanel.reload(source.LeftPadYPanel);
        if (!this.RightPadXPanel && source.RightPadXPanel)
            this.RightPadXPanel = source.RightPadXPanel;
        else if (this.RightPadXPanel && !source.RightPadXPanel)
            this.RightPadXPanel = null;
        else if (this.RightPadXPanel)
            this.RightPadXPanel.reload(source.RightPadXPanel);
        if (!this.RightPadYPanel && source.RightPadYPanel)
            this.RightPadYPanel = source.RightPadYPanel;
        else if (this.RightPadYPanel && !source.RightPadYPanel)
            this.RightPadYPanel = null;
        else if (this.RightPadYPanel)
            this.RightPadYPanel.reload(source.RightPadYPanel);
        if (!this.controllerPanel && source.controllerPanel)
            this.controllerPanel = source.controllerPanel;
        else if (this.controllerPanel && !source.controllerPanel)
            this.controllerPanel = null;
        else if (this.controllerPanel)
            this.controllerPanel.reload(source.controllerPanel);
    };
    /**
     * @private
     * @param {?} id
     * @param {?} panels
     * @return {?}
     */
    Dashboard.prototype.getDashboardPanelById = /**
     * @private
     * @param {?} id
     * @param {?} panels
     * @return {?}
     */
    function (id, panels) {
        var e_9, _a;
        try {
            for (var panels_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(panels), panels_1_1 = panels_1.next(); !panels_1_1.done; panels_1_1 = panels_1.next()) {
                var panel = panels_1_1.value;
                if (panel.id == id)
                    return panel;
                else {
                    /** @type {?} */
                    var res = this.getDashboardPanelById(id, panel.subPanels);
                    if (res)
                        return res;
                }
            }
        }
        catch (e_9_1) { e_9 = { error: e_9_1 }; }
        finally {
            try {
                if (panels_1_1 && !panels_1_1.done && (_a = panels_1.return)) _a.call(panels_1);
            }
            finally { if (e_9) throw e_9.error; }
        }
        return null;
    };
    /**
     * @param {?} link
     * @return {?}
     */
    Dashboard.prototype.addDashboardLink = /**
     * @param {?} link
     * @return {?}
     */
    function (link) {
        if (link.dashboardId == "*" || link.dashboardId == this.id || (link.dashboardId == "**default**" && this.isDefault)) {
            /** @type {?} */
            var panel = this.getDashboardPanelById(link.panelId, this.panels);
            if (!panel)
                panel = this.getDashboardPanelById(link.panelId, this.sysPanels);
            if (panel) {
                panel.components.push(new DashboardPanelComponent(link));
            }
            else {
                console.log("adh", link);
                /** @type {?} */
                var messagePanel = {
                    id: link.panelId,
                    name: link.panelName,
                    type: "panel",
                    uiParameters: {
                        "title": "",
                        "width": 0,
                        "height": 0,
                        "userLog": false,
                        "logLength": 0
                    }
                };
                /** @type {?} */
                var newPanel = new DashboardPanel(this, messagePanel);
                this.currentPanel.subPanels.push(newPanel);
                newPanel.components.push(new DashboardPanelComponent(link));
            }
        }
    };
    return Dashboard;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Action = /** @class */ (function () {
    function Action(message, kerviService) {
        var e_1, _a;
        this.kerviService = null;
        this.id = null;
        this.name = null;
        this.componentType = "action";
        this.runCommand = "";
        this.interruptCommand = "";
        this.ui = {
            type: "",
            orientation: "",
            visible: true
        };
        this.dashboards = [];
        this.running$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.kerviService = kerviService;
        this.id = message.id;
        this.name = message.name;
        this.ui = message.ui;
        this.ui.visible = message.visible;
        this.ui.type = message.type;
        this.runCommand = message.runCommand;
        this.interruptCommand = message.interruptCommand;
        this.running$.next(message.running);
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(message.dashboardLinks), _c = _b.next(); !_c.done; _c = _b.next()) {
                var dashboardLink = _c.value;
                this.dashboards.push(new DashboardLink(this, dashboardLink));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    /**
     * @param {?} parameters
     * @return {?}
     */
    Action.prototype.run = /**
     * @param {?} parameters
     * @return {?}
     */
    function (parameters) {
        var _a;
        //if (!this.running$.value){
        if (parameters && parameters.length > 0)
            (_a = this.kerviService.spine).sendCommand.apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])([this.runCommand], parameters));
        else
            this.kerviService.spine.sendCommand(this.runCommand);
        //}
    };
    /**
     * @param {?} parameters
     * @return {?}
     */
    Action.prototype.interrupt = /**
     * @param {?} parameters
     * @return {?}
     */
    function (parameters) {
        var _a;
        if (parameters && parameters.length > 0)
            (_a = this.kerviService.spine).sendCommand.apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])([this.interruptCommand], parameters));
        else
            this.kerviService.spine.sendCommand(this.interruptCommand);
    };
    return Action;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ComponentFactory = /** @class */ (function () {
    function ComponentFactory() {
    }
    /**
     * @param {?} message
     * @param {?} kerviService
     * @return {?}
     */
    ComponentFactory.createComponents = /**
     * @param {?} message
     * @param {?} kerviService
     * @return {?}
     */
    function (message, kerviService) {
        /** @type {?} */
        var foundComponents = this.createComponentsRec(message, kerviService);
        this.linkToDashboards(foundComponents[0], foundComponents[1]);
        return foundComponents[0];
    };
    /**
     * @private
     * @param {?} message
     * @param {?} kerviService
     * @return {?}
     */
    ComponentFactory.createComponentsRec = /**
     * @private
     * @param {?} message
     * @param {?} kerviService
     * @return {?}
     */
    function (message, kerviService) {
        var e_1, _a;
        /** @type {?} */
        var result = [];
        /** @type {?} */
        var dashboards = [];
        if (Array.isArray(message)) {
            for (var i = 0; (i < message.length); i++) {
                subComponents = this.createComponentsRec(message[i], kerviService);
                result = result.concat(subComponents[0]);
                dashboards = dashboards.concat(subComponents[1]);
            }
        }
        else {
            /** @type {?} */
            var component = null;
            /** @type {?} */
            var subComponents = [];
            if (message.componentType == "KerviAction")
                component = new Action(message, kerviService);
            else if (message.componentType == "dashboard") {
                component = new Dashboard(message);
                dashboards.push(component);
            }
            else if (message.componentType == "controller")
                component = new Controller(message, kerviService);
            else if (message.componentType == "boolean-value")
                component = new BooleanValue(message, kerviService);
            else if (message.componentType == "number-value")
                component = new NumberValue(message, kerviService);
            else if (message.componentType == "string-value")
                component = new StringValue(message, kerviService);
            else if (message.componentType == "enum-value")
                component = new SelectValue(message, kerviService);
            else if (message.componentType == "datetime-value")
                component = new DateTimeValue(message, kerviService);
            else if (message.componentType == "color-value")
                component = new ColorValue(message, kerviService);
            if (component)
                result.push(component);
            if (subComponents) {
                try {
                    for (var subComponents_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(subComponents), subComponents_1_1 = subComponents_1.next(); !subComponents_1_1.done; subComponents_1_1 = subComponents_1.next()) {
                        var subComponent = subComponents_1_1.value;
                        result.push(subComponent);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (subComponents_1_1 && !subComponents_1_1.done && (_a = subComponents_1.return)) _a.call(subComponents_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        }
        return [result, dashboards];
    };
    /**
     * @param {?} components
     * @return {?}
     */
    ComponentFactory.FixControllerReferences = /**
     * @param {?} components
     * @return {?}
     */
    function (components) {
        var e_2, _a;
        try {
            for (var components_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(components), components_1_1 = components_1.next(); !components_1_1.done; components_1_1 = components_1.next()) {
                var component = components_1_1.value;
                /** @type {?} */
                var controller = (/** @type {?} */ (component));
                if (controller && controller.componentType == "controller")
                    controller.updateReferences();
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (components_1_1 && !components_1_1.done && (_a = components_1.return)) _a.call(components_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    /**
     * @private
     * @param {?} components
     * @param {?} dashboards
     * @return {?}
     */
    ComponentFactory.linkToDashboards = /**
     * @private
     * @param {?} components
     * @param {?} dashboards
     * @return {?}
     */
    function (components, dashboards) {
        var e_3, _a, e_4, _b, e_5, _c;
        console.log("ltd", components, dashboards);
        try {
            for (var components_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(components), components_2_1 = components_2.next(); !components_2_1.done; components_2_1 = components_2.next()) {
                var component = components_2_1.value;
                if (!(component instanceof Dashboard)) {
                    try {
                        for (var _d = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(component.dashboards), _e = _d.next(); !_e.done; _e = _d.next()) {
                            var link = _e.value;
                            try {
                                for (var dashboards_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(dashboards), dashboards_1_1 = dashboards_1.next(); !dashboards_1_1.done; dashboards_1_1 = dashboards_1.next()) {
                                    var dashboard = dashboards_1_1.value;
                                    dashboard.addDashboardLink(link);
                                }
                            }
                            catch (e_5_1) { e_5 = { error: e_5_1 }; }
                            finally {
                                try {
                                    if (dashboards_1_1 && !dashboards_1_1.done && (_c = dashboards_1.return)) _c.call(dashboards_1);
                                }
                                finally { if (e_5) throw e_5.error; }
                            }
                        }
                    }
                    catch (e_4_1) { e_4 = { error: e_4_1 }; }
                    finally {
                        try {
                            if (_e && !_e.done && (_b = _d.return)) _b.call(_d);
                        }
                        finally { if (e_4) throw e_4.error; }
                    }
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (components_2_1 && !components_2_1.done && (_a = components_2.return)) _a.call(components_2);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    return ComponentFactory;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var ConnectionState = {
    disconnected: 0, loading: 1, authenticate: 2, connected: 3,
};
ConnectionState[ConnectionState.disconnected] = 'disconnected';
ConnectionState[ConnectionState.loading] = 'loading';
ConnectionState[ConnectionState.authenticate] = 'authenticate';
ConnectionState[ConnectionState.connected] = 'connected';
/** @enum {number} */
var UserLogStateType = {
    normal: 0, warning: 1, error: 2,
};
UserLogStateType[UserLogStateType.normal] = 'normal';
UserLogStateType[UserLogStateType.warning] = 'warning';
UserLogStateType[UserLogStateType.error] = 'error';
var KerviBaseService = /** @class */ (function () {
    function KerviBaseService() {
        this.spine = null;
        this.appInfo = null;
        this.texts = null;
        this.components = [];
        this.components$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.connectionState$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](ConnectionState.disconnected);
        this.doAuthenticate = false;
        this.componentsChanged$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.logMessages = [];
        this.logMessages$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.lastLogMessage$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.LogMessageCount$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.LogMessageState$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](UserLogStateType.normal);
        this.IPCReady$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.authPromise = null;
        console.log("kervi service constructor");
        /** @type {?} */
        var self = this;
        this.application$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        /** @type {?} */
        var s1 = this.IPCReady$.subscribe((/**
         * @param {?} connected
         * @return {?}
         */
        function (connected) {
            if (connected) {
                console.log("kervi service ipc ready (connected)");
                self.spine.addEventHandler("valueChanged", "", (/**
                 * @param {?} id
                 * @param {?} value
                 * @return {?}
                 */
                function (id, value) {
                    var e_1, _a;
                    try {
                        for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(self.components), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var component = _c.value;
                            if (component.id == value.id) {
                                /** @type {?} */
                                var dynamicValue = (/** @type {?} */ (component));
                                console.log("nv", component.id, value.value, this.timestamp, new Date(this.timestamp));
                                dynamicValue.valueTS = new Date(this.timestamp);
                                dynamicValue.set(value.value, false);
                            }
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }));
                self.spine.addEventHandler("actionStarted", "", (/**
                 * @param {?} id
                 * @return {?}
                 */
                function (id) {
                    var e_2, _a;
                    console.log("as", id);
                    try {
                        for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(self.components), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var component = _c.value;
                            if (component.id == id) {
                                /** @type {?} */
                                var action = (/** @type {?} */ (component));
                                action.running$.next(true);
                            }
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }));
                self.spine.addEventHandler("actionDone", "", (/**
                 * @param {?} id
                 * @return {?}
                 */
                function (id) {
                    var e_3, _a;
                    console.log("ad", id);
                    try {
                        for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(self.components), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var component = _c.value;
                            if (component.id == id) {
                                /** @type {?} */
                                var action = (/** @type {?} */ (component));
                                action.running$.next(false);
                            }
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                }));
                self.spine.addEventHandler("userLogMessage", null, (/**
                 * @param {?} v
                 * @return {?}
                 */
                function (v) {
                    var e_4, _a;
                    /** @type {?} */
                    var messages = self.logMessages$.value
                    //Wconsole.log("lm", this);
                    ;
                    //Wconsole.log("lm", this);
                    /** @type {?} */
                    var newMessage = new DashboardMessageModel(this);
                    messages.unshift(newMessage);
                    if (messages.length > 10)
                        messages.pop();
                    /** @type {?} */
                    var hasErrors = 0;
                    /** @type {?} */
                    var hasWarnings = 0;
                    try {
                        for (var messages_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(messages), messages_1_1 = messages_1.next(); !messages_1_1.done; messages_1_1 = messages_1.next()) {
                            var message = messages_1_1.value;
                            if (message.level == 1)
                                hasErrors++;
                            if (message.level == 2)
                                hasWarnings++;
                        }
                    }
                    catch (e_4_1) { e_4 = { error: e_4_1 }; }
                    finally {
                        try {
                            if (messages_1_1 && !messages_1_1.done && (_a = messages_1.return)) _a.call(messages_1);
                        }
                        finally { if (e_4) throw e_4.error; }
                    }
                    if (hasErrors)
                        self.LogMessageState$.next(UserLogStateType.error);
                    else if (hasWarnings)
                        self.LogMessageState$.next(UserLogStateType.warning);
                    else
                        self.LogMessageState$.next(UserLogStateType.normal);
                    self.LogMessageCount$.next(messages.length);
                    self.lastLogMessage$.next(newMessage);
                    self.logMessages$.next(messages);
                }));
            }
        }));
    }
    /**
     * @param {?} key
     * @param {?=} defaultValue
     * @return {?}
     */
    KerviBaseService.prototype.text = /**
     * @param {?} key
     * @param {?=} defaultValue
     * @return {?}
     */
    function (key, defaultValue) {
        if (defaultValue === void 0) { defaultValue = ""; }
        //  console.log("t", key, this.texts);
        if (this.texts && key in this.texts) {
            return this.texts[key];
        }
        else
            return defaultValue;
    };
    // public getComponents$(){
    //   return this.components$.asObservable();
    // }
    // public getComponents$(){
    //   return this.components$.asObservable();
    // }
    /**
     * @return {?}
     */
    KerviBaseService.prototype.getLogMessages$ = 
    // public getComponents$(){
    //   return this.components$.asObservable();
    // }
    /**
     * @return {?}
     */
    function () {
        return this.logMessages$.asObservable();
    };
    /**
     * @return {?}
     */
    KerviBaseService.prototype.getLastLogMessage$ = /**
     * @return {?}
     */
    function () {
        return this.lastLogMessage$.asObservable();
    };
    /**
     * @return {?}
     */
    KerviBaseService.prototype.getLogState$ = /**
     * @return {?}
     */
    function () {
        return this.LogMessageState$.asObservable();
    };
    /**
     * @return {?}
     */
    KerviBaseService.prototype.getLogMessageCount$ = /**
     * @return {?}
     */
    function () {
        return this.LogMessageCount$.asObservable();
    };
    /**
     * @return {?}
     */
    KerviBaseService.prototype.isAppEmpty = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var defaultDashboard = this.getDefaultDashboard();
        if (defaultDashboard)
            return defaultDashboard.isEmpty();
        return true;
    };
    /**
     * @param {?} id
     * @param {?=} componentType
     * @return {?}
     */
    KerviBaseService.prototype.getComponent = /**
     * @param {?} id
     * @param {?=} componentType
     * @return {?}
     */
    function (id, componentType) {
        if (componentType === void 0) { componentType = null; }
        var e_5, _a;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.components), _c = _b.next(); !_c.done; _c = _b.next()) {
                var component = _c.value;
                if (component.id == id && (componentType == null || component.componentType == componentType))
                    return component;
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_5) throw e_5.error; }
        }
        return null;
    };
    /**
     * @param {?} type
     * @return {?}
     */
    KerviBaseService.prototype.getComponentsByType = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        var e_6, _a;
        /** @type {?} */
        var result = [];
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.components), _c = _b.next(); !_c.done; _c = _b.next()) {
                var component = _c.value;
                if (component.componentType == type)
                    result.push(component);
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_6) throw e_6.error; }
        }
        return result;
    };
    /**
     * @return {?}
     */
    KerviBaseService.prototype.getDefaultDashboard = /**
     * @return {?}
     */
    function () {
        var e_7, _a;
        /** @type {?} */
        var dashboards = (/** @type {?} */ (this.getComponentsByType("dashboard")));
        try {
            for (var dashboards_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(dashboards), dashboards_1_1 = dashboards_1.next(); !dashboards_1_1.done; dashboards_1_1 = dashboards_1.next()) {
                var dashboard = dashboards_1_1.value;
                if (dashboard.isDefault)
                    return dashboard;
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (dashboards_1_1 && !dashboards_1_1.done && (_a = dashboards_1.return)) _a.call(dashboards_1);
            }
            finally { if (e_7) throw e_7.error; }
        }
        if (dashboards.length > 0)
            return dashboards[0];
        return null;
    };
    /**
     * @return {?}
     */
    KerviBaseService.prototype.connect = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var address = null;
        /** @type {?} */
        var protocol = "ws";
        try {
            if (kerviSocketAddress) {
                address = kerviSocketAddress;
            }
            if (socketProtocol) {
                protocol = socketProtocol;
            }
        }
        catch (e) {
            //for testing with ng serve
            /** @type {?} */
            var httpProtocol = location.protocol;
            if (httpProtocol == "https")
                protocol = "wss";
            /** @type {?} */
            var httpHost = window.location.hostname;
            address = httpHost + ":9000";
        }
        console.log("ks", address);
        this.spine = new KerviWSSpine({
            address: address,
            protocol: protocol,
            onOpen: this.onOpen,
            onClose: this.onClose,
            onAuthenticate: this.onAuthenticate,
            onAuthenticateFailed: this.onAuthenticateFailed,
            onLogOff: this.onLogoff,
            onAuthenticateStart: this.onAuthenticateStart,
            targetScope: this
        });
    };
    /**
     * @return {?}
     */
    KerviBaseService.prototype.connectMQ = /**
     * @return {?}
     */
    function () {
        //if (!sessionStorage.getItem("mqc"))
        //  sessionStorage.setItem("mqc", '{"key_id":"c5bd0824bda44ffeaba8010383f1af96","api_token":"4776ec9d4bdf4b3192ffa6a1f37d15aa145e2e665ae64e46afd766ee851ac046","api_channel":"20bddf88a4434e99ba0e014de2b875c7","app_id":"app_1"}');
        console.log("ks", sessionStorage.getItem("mqc"));
        if (sessionStorage.getItem("mqc")) {
            this.spine = new KerviRMQSpine({
                onOpen: this.onOpen,
                onClose: this.onClose,
                onAuthenticate: this.onAuthenticate,
                onAuthenticateFailed: this.onAuthenticateFailed,
                onLogOff: this.onLogoff,
                onAuthenticateStart: this.onAuthenticateStart,
                targetScope: this,
                apiToken: JSON.parse(sessionStorage.getItem("mqc"))
            });
        }
        else {
            console.log("qmc not found in storage");
        }
    };
    /**
     * @return {?}
     */
    KerviBaseService.prototype.isAnonymous = /**
     * @return {?}
     */
    function () {
        return this.spine.options.userName == "anonymous";
    };
    /**
     * @param {?} userName
     * @param {?} password
     * @return {?}
     */
    KerviBaseService.prototype.authenticate = /**
     * @param {?} userName
     * @param {?} password
     * @return {?}
     */
    function (userName, password) {
        var _this = this;
        //this.authenticationFailed$.next(false);
        console.log("ksa", userName, password);
        this.authPromise = new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            _this._resolveSelf = resolve;
            _this._rejectSelf = reject;
        }));
        this.spine.authenticate(userName, password);
        return this.authPromise;
    };
    /**
     * @return {?}
     */
    KerviBaseService.prototype.logoff = /**
     * @return {?}
     */
    function () {
        this.spine.logoff();
    };
    /**
     * @private
     * @return {?}
     */
    KerviBaseService.prototype.onAuthenticateStart = /**
     * @private
     * @return {?}
     */
    function () {
    };
    /**
     * @private
     * @return {?}
     */
    KerviBaseService.prototype.onAuthenticate = /**
     * @private
     * @return {?}
     */
    function () {
        this.doAuthenticate = true;
        //this.connectionState$.next(ConnectionState.authenticate);
        this.reset();
        this._resolveSelf("ok");
    };
    /**
     * @private
     * @return {?}
     */
    KerviBaseService.prototype.onAuthenticateFailed = /**
     * @private
     * @return {?}
     */
    function () {
        //this.authenticationFailed$.next(true);
        this._rejectSelf("error");
    };
    /**
     * @private
     * @return {?}
     */
    KerviBaseService.prototype.onLogoff = /**
     * @private
     * @return {?}
     */
    function () {
        console.log("olxrc");
        this.doAuthenticate = true;
        if (this.spine.firstOnOpen)
            this.IPCReady$.next(true);
        this.reset();
    };
    /**
     * @private
     * @return {?}
     */
    KerviBaseService.prototype.reset = /**
     * @private
     * @return {?}
     */
    function () {
        this.components = [];
        this.components$.next(this.components);
        /** @type {?} */
        var messages = [];
        this.LogMessageState$.next(UserLogStateType.normal);
        this.LogMessageCount$.next(messages.length);
        this.logMessages$.next(messages);
        if (this.IPCReady$.value)
            this.connectionState$.next(ConnectionState.authenticate);
        else
            this.connectionState$.next(ConnectionState.disconnected);
    };
    /**
     * @private
     * @param {?} retryCount
     * @param {?} module_load
     * @return {?}
     */
    KerviBaseService.prototype.getComponentInfo = /**
     * @private
     * @param {?} retryCount
     * @param {?} module_load
     * @return {?}
     */
    function (retryCount, module_load) {
        /** @type {?} */
        var self = this;
        this.spine.sendQuery("GetApplicationInfo", (/**
         * @param {?} appInfo
         * @return {?}
         */
        function (appInfo) {
            console.log("appinfo", appInfo);
            this.spine.sendQuery("getComponentInfo", (/**
             * @param {?} message
             * @return {?}
             */
            function (message) {
                console.log("component info", message);
                self.application$.next(appInfo);
                self.texts = appInfo.display.texts;
                self.components = ComponentFactory.createComponents(message, self);
                ComponentFactory.FixControllerReferences(self.getComponentsByType("controller"));
                self.components$.next(self.components);
                self.connectionState$.next(ConnectionState.connected);
                if (module_load)
                    self.componentsChanged$.next(true);
                console.log("components", self.components);
            }), (/**
             * @return {?}
             */
            function () {
                console.log("get component info timeout");
                if (retryCount > 0)
                    self.getComponentInfo(retryCount - 1, module_load);
            }));
        }));
    };
    /**
     * @private
     * @param {?} first
     * @return {?}
     */
    KerviBaseService.prototype.onOpen = /**
     * @private
     * @param {?} first
     * @return {?}
     */
    function (first) {
        console.log("kervice service on open", this.spine.firstOnOpen, first, this);
        /** @type {?} */
        var self = this;
        this.connectionState$.next(ConnectionState.loading);
        this.doAuthenticate = this.spine.doAuthenticate;
        this.getComponentInfo(2, false);
        if (self.spine.firstOnOpen) {
            this.IPCReady$.next(true);
            this.spine.addEventHandler("moduleStarted", "", (/**
             * @return {?}
             */
            function () {
                console.log("module loaded", self.components);
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    self.getComponentInfo(2, true);
                }), 2000);
            }));
            this.spine.addEventHandler("moduleStopped", "", (/**
             * @return {?}
             */
            function () {
                console.log("module unloaded");
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    console.log("module unloaded, refresh");
                    self.getComponentInfo(2, true);
                }), 5000);
            }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    KerviBaseService.prototype.onClose = /**
     * @private
     * @return {?}
     */
    function () {
        this.reset();
        console.log("ks on close");
        this.IPCReady$.next(false);
    };
    /**
     * @private
     * @return {?}
     */
    KerviBaseService.prototype.onHeartbeat = /**
     * @private
     * @return {?}
     */
    function () {
    };
    /**
     * @private
     * @return {?}
     */
    KerviBaseService.prototype.onConnect = /**
     * @private
     * @return {?}
     */
    function () {
    };
    KerviBaseService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"] },
    ];
    /** @nocollapse */
    KerviBaseService.ctorParameters = function () { return []; };
    return KerviBaseService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var KerviJsComponent = /** @class */ (function () {
    function KerviJsComponent() {
    }
    /**
     * @return {?}
     */
    KerviJsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    KerviJsComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                    selector: 'lib-kervi-js',
                    template: "\n    <p>\n      kervi-js works!\n    </p>\n  ",
                    styles: []
                },] },
    ];
    /** @nocollapse */
    KerviJsComponent.ctorParameters = function () { return []; };
    return KerviJsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var KerviJsModule = /** @class */ (function () {
    function KerviJsModule() {
    }
    KerviJsModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                    imports: [],
                    declarations: [KerviJsComponent],
                    exports: [KerviJsComponent]
                },] },
    ];
    return KerviJsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2VydmktanMuanMubWFwIiwic291cmNlcyI6WyJuZzovL2tlcnZpLWpzL2xpYi9zcGluZS9rZXJ2aS1zcGluZWJhc2UudHMiLCJuZzovL2tlcnZpLWpzL2xpYi9zcGluZS9rZXJ2aS13cy50cyIsIm5nOi8va2VydmktanMvbGliL3NwaW5lL2tlcnZpLXJtcS50cyIsIm5nOi8va2VydmktanMvbGliL21vZGVscy9JQ29tcG9uZW50Lm1vZGVsLnRzIiwibmc6Ly9rZXJ2aS1qcy9saWIvbW9kZWxzL0tlcnZpVmFsdWVzLm1vZGVsLnRzIiwibmc6Ly9rZXJ2aS1qcy9saWIvbW9kZWxzL0NvbXBvbmVudFJlZi50cyIsIm5nOi8va2VydmktanMvbGliL21vZGVscy9jb250cm9sbGVyLm1vZGVsLnRzIiwibmc6Ly9rZXJ2aS1qcy9saWIvbW9kZWxzL2Rhc2hib2FyZC5tb2RlbC50cyIsIm5nOi8va2VydmktanMvbGliL21vZGVscy9hY3Rpb24ubW9kZWwudHMiLCJuZzovL2tlcnZpLWpzL2xpYi9tb2RlbHMvZmFjdG9yeS50cyIsIm5nOi8va2VydmktanMvbGliL2tlcnZpLWpzLnNlcnZpY2UudHMiLCJuZzovL2tlcnZpLWpzL2xpYi9rZXJ2aS1qcy5jb21wb25lbnQudHMiLCJuZzovL2tlcnZpLWpzL2xpYi9rZXJ2aS1qcy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCBUaW0gV2VudHpsYXVcclxuLy8gTGljZW5zZWQgdW5kZXIgTUlUXHJcblxyXG5leHBvcnQgY2xhc3MgIEtlcnZpU3BpbmVCYXNle1xyXG5cclxuXHRwdWJsaWMgaXNDb25uZWN0ZWQ6IEJvb2xlYW4gPSBmYWxzZTtcclxuXHRwdWJsaWMgZG9BdXRoZW50aWNhdGU6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHRzZXNzaW9uSWQgPSBudWxsO1xyXG5cdHF1ZXJ5SGFuZGxlcnM9W107XHJcblx0Y29tbWFuZEhhbmRsZXJzPVtdO1xyXG5cdGV2ZW50SGFuZGxlcnM9W107XHJcblx0cnBjUXVldWU9e307XHJcblx0cmVhZHk9ZmFsc2U7XHJcblx0bWVzc2FnZUlkPTA7XHJcblx0c2Vuc29ycz17fTtcclxuXHRjb250cm9sbGVycz17fTtcclxuXHRzZW5zb3JUeXBlcz1bXTtcclxuXHRjb250cm9sbGVyVHlwZXM9W107XHJcblx0cG9pbnRPZkludGVyZXN0cz1bXTtcclxuXHRhcHBsaWNhdGlvbj1udWxsO1xyXG5cdGFsbG93QW5vbnltb3VzID0gdHJ1ZTtcclxuXHRmaXJzdE9uT3BlbiA9IHRydWU7XHJcblxyXG5cdHByb3RlY3RlZCB3ZWJzb2NrZXQgPSBudWxsO1xyXG5cdFxyXG5cdHB1YmxpYyBvcHRpb25zOiBhbnk9ICB7XHJcblx0XHRcdHVzZXJOYW1lOiBcImFub255bW91c1wiLFxyXG5cdFx0XHRwYXNzd29yZDogbnVsbCxcclxuXHRcdFx0YWRkcmVzczpudWxsLFxyXG5cdFx0XHRvbk9wZW46bnVsbCxcclxuXHRcdFx0b25DbG9zZTpudWxsLFxyXG5cdFx0XHRvbkF1dGhlbnRpY2F0ZTpudWxsLFxyXG5cdFx0XHRvbkF1dGhlbnRpY2F0ZUZhaWxlZDpudWxsLFxyXG5cdFx0XHRvbkF1dGhlbnRpY2F0ZVN0YXJ0Om51bGwsXHJcblx0XHRcdG9uTG9nT2ZmOiBudWxsLFxyXG5cdFx0XHRhdXRvQ29ubmVjdDp0cnVlLFxyXG5cdFx0XHR0YXJnZXRTY29wZTpudWxsLFxyXG5cdFx0XHRwcm90b2NvbDpcIndzXCIsXHJcblx0XHRcdGFwaVRva2VuOm51bGxcclxuXHR9XHJcblx0XHJcblx0Y29uc3RydWN0b3IocHVibGljIGNvbnN0cnVjdG9yT3B0aW9ucyl7XHJcblx0XHRjb25zb2xlLmxvZyhcIktlcnZpIGJhc2Ugc3BpbmUgaW5pdFwiLHRoaXMub3B0aW9ucyxjb25zdHJ1Y3Rvck9wdGlvbnMpO1xyXG5cdFx0dGhpcy5vcHRpb25zID0gdGhpcy5leHRlbmQodGhpcy5vcHRpb25zLGNvbnN0cnVjdG9yT3B0aW9ucyk7XHJcblx0XHRjb25zb2xlLmxvZyhcImtib1wiLCB0aGlzLm9wdGlvbnMpO1xyXG5cdFx0dGhpcy5jb25uZWN0KCk7XHJcblx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHRzZXRJbnRlcnZhbChcclxuXHRcdFx0ZnVuY3Rpb24oKXtcclxuXHRcdFx0XHR2YXIgaGFuZ2luZ05vZGVzPVtdXHJcblx0XHRcdFx0Zm9yKGxldCBpZCBpbiBzZWxmLnJwY1F1ZXVlKXtcclxuXHRcdFx0XHRcdHZhciBxdWVyeSA9IHNlbGYucnBjUXVldWVbaWRdXHJcblx0XHRcdFx0XHRpZiAocXVlcnlbXCJjYWxsYmFja1RpbWVvdXRcIl0pe1xyXG5cdFx0XHRcdFx0XHRpZiAoRGF0ZS5ub3coKSAtIHF1ZXJ5W1widHNcIl0gPiBxdWVyeVtcInRpbWVvdXRcIl0pe1xyXG5cdFx0XHRcdFx0XHRcdHZhciBjYWxsYmFjayA9IHF1ZXJ5W1wiY2FsbGJhY2tUaW1lb3V0XCJdOyBcclxuXHRcdFx0XHRcdFx0XHRoYW5naW5nTm9kZXMucHVzaChpZCk7XHJcblx0XHRcdFx0XHRcdFx0Y2FsbGJhY2suY2FsbChzZWxmLm9wdGlvbnMudGFyZ2V0U2NvcGUpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGZvcih2YXIgaWQgb2YgaGFuZ2luZ05vZGVzKXtcclxuXHRcdFx0XHRcdGRlbGV0ZSBzZWxmLnJwY1F1ZXVlW2lkXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdCwxKVxyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIGV4dGVuZCguLi5wOmFueVtdKVxyXG5cdHtcclxuXHRcdGZvcih2YXIgaT0xOyBpPHAubGVuZ3RoOyBpKyspXHJcblx0XHRcdGZvcih2YXIga2V5IGluIHBbaV0pXHJcblx0XHRcdFx0aWYocFtpXS5oYXNPd25Qcm9wZXJ0eShrZXkpKVxyXG5cdFx0XHRcdFx0cFswXVtrZXldID0gcFtpXVtrZXldO1xyXG5cdFx0cmV0dXJuIHBbMF07XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgYWRkUlBDQ2FsbGJhY2soaWQ6c3RyaW5nLCBjYWxsYmFjaywgY2FsbGJhY2tUaW1lb3V0LCB0aW1lb3V0KVxyXG5cdHtcclxuXHRcdGlmIChjYWxsYmFjaylcclxuXHRcdFx0dGhpcy5ycGNRdWV1ZVtpZF09e1xyXG5cdFx0XHRcdFwiY2FsbGJhY2tcIjpjYWxsYmFjayxcclxuXHRcdFx0XHRcImNhbGxiYWNrVGltZW91dFwiOmNhbGxiYWNrVGltZW91dCxcclxuXHRcdFx0XHRcInRpbWVvdXRcIjogdGltZW91dCxcclxuXHRcdFx0XHRcInRzXCI6RGF0ZS5ub3coKSxcclxuXHRcdFx0IH07XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgaGFuZGxlUlBDUmVzcG9uc2UobWVzc2FnZSl7XHJcblx0XHRpZiAobWVzc2FnZS5pZCBpbiB0aGlzLnJwY1F1ZXVlKXtcclxuXHRcdFx0dmFyIGNhbGxiYWNrID0gdGhpcy5ycGNRdWV1ZVttZXNzYWdlLmlkXVtcImNhbGxiYWNrXCJdO1xyXG5cdFx0XHRpZiAoY2FsbGJhY2spe1xyXG5cdFx0XHRcdGRlbGV0ZSB0aGlzLnJwY1F1ZXVlW21lc3NhZ2UuaWRdO1xyXG5cdFx0XHRcdGNhbGxiYWNrLmNhbGwodGhpcy5vcHRpb25zLnRhcmdldFNjb3BlLG1lc3NhZ2UucmVzcG9uc2UsbWVzc2FnZS5yZXNwb25zZSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBoYW5kbGVFdmVudChtZXNzYWdlKXtcclxuXHRcdC8vY29uc29sZS5sb2coXCJldlwiLCBtZXNzYWdlKVxyXG5cdFx0dmFyIGV2ZW50TmFtZT1tZXNzYWdlLmV2ZW50O1xyXG5cdFx0dmFyIGlkPW1lc3NhZ2UuaWQ7XHJcblx0XHRcclxuXHRcdHZhciBldmVudFBhdGg9ZXZlbnROYW1lO1xyXG5cdFx0aWYgKGlkKXtcclxuXHRcdFx0ZXZlbnRQYXRoKz1cIi9cIitpZDtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0dmFyIHZhbHVlPW51bGw7XHJcblx0XHRpZihtZXNzYWdlLmFyZ3MgJiYgbWVzc2FnZS5hcmdzLmxlbmd0aCl7XHJcblx0XHRcdHZhbHVlPW1lc3NhZ2UuYXJnc1swXTtcclxuXHRcdH1cclxuXHRcdGZvcih2YXIgbj0wOyhuPHRoaXMuZXZlbnRIYW5kbGVycy5sZW5ndGgpO24rKylcclxuXHRcdHtcclxuXHRcdFx0dmFyIGg9dGhpcy5ldmVudEhhbmRsZXJzW25dO1xyXG5cdFx0XHRpZiAoaC5ldmVudE5hbWU9PWV2ZW50UGF0aClcclxuXHRcdFx0XHRoLmNhbGxiYWNrLmNhbGwodmFsdWUsaWQsdmFsdWUpO1xyXG5cdFx0XHRlbHNlIGlmIChoLmV2ZW50TmFtZT09ZXZlbnROYW1lKVxyXG5cdFx0XHRcdGguY2FsbGJhY2suY2FsbCh2YWx1ZSxpZCx2YWx1ZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgaGFuZGxlQ29tbWFuZChtZXNzYWdlKXtcclxuXHRcdGNvbnNvbGUubG9nKFwiY21kXCIsdGhpcyxtZXNzYWdlKTtcclxuXHRcdHZhciBjb21tYW5kPW1lc3NhZ2UuY29tbWFuZFxyXG5cdFx0XHJcblx0XHR2YXIgYXJncz1udWxsO1xyXG5cdFx0aWYobWVzc2FnZS5hcmdzICYmIG1lc3NhZ2UuYXJncy5sZW5ndGgpe1xyXG5cdFx0XHRhcmdzPW1lc3NhZ2UuYXJnc1swXTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0Zm9yKHZhciBuPTA7KG48dGhpcy5jb21tYW5kSGFuZGxlcnMubGVuZ3RoKTtuKyspXHJcblx0XHR7XHJcblx0XHRcdHZhciBjPXRoaXMuY29tbWFuZEhhbmRsZXJzW25dO1xyXG5cdFx0XHRpZiAoYy5jb21tYW5kPT1jb21tYW5kKVxyXG5cdFx0XHRcdGMuY2FsbGJhY2suY2FsbCh0aGlzLGFyZ3MpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIGNvbm5lY3QoKXtcclxuXHRcdFxyXG5cdH1cclxuXHJcblx0cHJvdGVjdGVkIG9uT3BlbihldnQpe1xyXG5cdFx0Y29uc29sZS5sb2coXCJLZXJ2aSBvcGVuXCIsdGhpcyxldnQpO1xyXG5cdFx0XHJcblx0XHR2YXIgc2VsZj10aGlzXHJcblx0XHR0aGlzLmlzQ29ubmVjdGVkPXRydWU7XHJcblx0XHRcclxuXHRcdHRoaXMuZXZlbnRIYW5kbGVycyA9IFtdO1xyXG5cdFx0dGhpcy5jb21tYW5kSGFuZGxlcnMgPSBbXTtcclxuXHRcdHRoaXMucXVlcnlIYW5kbGVycyA9IFtdO1x0XHJcblx0XHRjb25zb2xlLmxvZyhcIktlcnZpIHNwaW5lIHJlYWR5XCIpXHJcblx0XHRcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBvbkNsb3NlKGV2dCl7XHJcblx0XHRjb25zb2xlLmxvZyhcIktlcnZpIHNwaW5lIG9uIGNsb3NlXCIsZXZ0KTtcclxuXHRcdHRoaXMuaXNDb25uZWN0ZWQ9ZmFsc2U7XHJcblx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHRpZiAodGhpcy5vcHRpb25zLm9uQ2xvc2UpXHJcblx0XHRcdHRoaXMub3B0aW9ucy5vbkNsb3NlLmNhbGwodGhpcy5vcHRpb25zLnRhcmdldFNjb3BlLGV2dCk7XHJcblx0XHR0aGlzLmZpcnN0T25PcGVuPXRydWU7XHJcblx0XHRpZiAodGhpcy5vcHRpb25zLmF1dG9Db25uZWN0KXtcclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0XHRcdHNlbGYuY29ubmVjdCgpO1xyXG5cdFx0XHR9ICwxMDAwKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBhdXRoZW50aWNhdGUodXNlck5hbWUsIHBhc3N3b3JkKXtcclxuXHRcdFxyXG5cdH1cclxuXHJcblx0cHVibGljIGxvZ29mZigpe1xyXG5cdFx0XHJcblx0fVxyXG5cclxuXHRwcm90ZWN0ZWQgb25NZXNzYWdlKGV2dCl7XHJcblx0XHRcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBvbkVycm9yKGV2dCl7XHJcblx0XHRjb25zb2xlLmxvZyhcIktlcnZpIG9uIGVycm9yXCIsZXZ0KTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBhZGRDb21tYW5kSGFuZGxlciAoY29tbWFuZDpzdHJpbmcsY2FsbGJhY2spe1xyXG5cdFx0XHJcblx0fTtcclxuXHJcblx0cHVibGljIGFkZFF1ZXJ5SGFuZGxlcihxdWVyeTpzdHJpbmcsY2FsbGJhY2spe1xyXG5cdFx0XHJcblx0fTtcclxuXHJcblx0cHVibGljIGFkZEV2ZW50SGFuZGxlcj1mdW5jdGlvbihldmVudE5hbWU6c3RyaW5nLGlkOnN0cmluZyxjYWxsYmFjayl7XHJcblx0XHRcclxuXHR9O1xyXG5cclxuXHRwdWJsaWMgc2VuZENvbW1hbmQoY29tbWFuZDpzdHJpbmcsLi4ucDphbnlbXSl7XHJcblx0XHRcclxuXHR9O1xyXG5cclxuXHRwdWJsaWMgc2VuZFF1ZXJ5KHF1ZXJ5LC4uLnA6YW55W10pe1xyXG5cdFx0XHJcblx0fTtcclxuXHJcblx0cHVibGljIHRyaWdnZXJFdmVudChldmVudE5hbWU6c3RyaW5nLGlkOnN0cmluZyl7XHJcblx0XHRcclxuXHR9O1xyXG59IiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCBUaW0gV2VudHpsYXVcclxuLy8gTGljZW5zZWQgdW5kZXIgTUlUXHJcbmltcG9ydCB7S2VydmlTcGluZUJhc2V9IGZyb20gXCIuL2tlcnZpLXNwaW5lYmFzZVwiXHJcbmV4cG9ydCBjbGFzcyAgS2VydmlXU1NwaW5lIGV4dGVuZHMgS2VydmlTcGluZUJhc2V7XHJcblx0XHJcblx0Y29uc3RydWN0b3IocHVibGljIGNvbnN0cnVjdG9yT3B0aW9ucyl7XHJcblx0XHRzdXBlcihjb25zdHJ1Y3Rvck9wdGlvbnMpO1xyXG5cdFx0Y29uc29sZS5sb2coXCJrZXJ2aSBzcGluZSBjb25zdHJ1Y3RvclwiKTtcclxuXHR9XHJcblxyXG5cdHByb3RlY3RlZCBjb25uZWN0KCl7XHJcblx0XHRpZiAodGhpcy5pc0Nvbm5lY3RlZCl7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiS2VydmkgaXMgY29ubmVjdGVkXCIpO1xyXG5cdFx0XHRyZXR1cm5cclxuXHRcdH1cclxuXHRcdHZhciBzZWxmPXRoaXM7XHJcblx0XHR0aGlzLndlYnNvY2tldD0gbmV3IFdlYlNvY2tldCh0aGlzLm9wdGlvbnMucHJvdG9jb2wgKyBcIjovL1wiICsgdGhpcy5vcHRpb25zLmFkZHJlc3MpO1xyXG5cdFx0dGhpcy53ZWJzb2NrZXQub25vcGVuID0gZnVuY3Rpb24oZXZ0KSB7IFxyXG5cdFx0XHRjb25zb2xlLmxvZyhcImtlcnZpIHNwaW5lIG9uIG9wZW5cIik7XHJcblx0XHRcdHNlbGYub25PcGVuKGV2dCk7XHJcblx0XHR9O1xyXG5cdFx0XHJcblx0XHR0aGlzLndlYnNvY2tldC5vbmNsb3NlID0gZnVuY3Rpb24oZXZ0KSB7IFxyXG5cdFx0XHRzZWxmLm9uQ2xvc2UoZXZ0KSBcclxuXHRcdH07XHJcblx0XHRcclxuXHRcdHRoaXMud2Vic29ja2V0Lm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2dCkgeyBcclxuXHRcdFx0c2VsZi5vbk1lc3NhZ2UoZXZ0KSBcclxuXHRcdH07XHJcblx0XHRcclxuXHRcdHRoaXMud2Vic29ja2V0Lm9uZXJyb3IgPSBmdW5jdGlvbihldnQpIHtcclxuXHRcdFx0c2VsZi5vbkVycm9yKGV2dCkgXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0cHVibGljIGF1dGhlbnRpY2F0ZSh1c2VyTmFtZSwgcGFzc3dvcmQpe1xyXG5cdFx0dGhpcy5vcHRpb25zLnVzZXJOYW1lID0gdXNlck5hbWU7XHJcblx0XHR0aGlzLm9wdGlvbnMucGFzc3dvcmQgPSBwYXNzd29yZDtcclxuXHRcdC8vaWYgKHRoaXMub3B0aW9ucy5vbkF1dGhlbnRpY2F0ZVN0YXJ0KVxyXG5cdFx0Ly9cdHRoaXMub3B0aW9ucy5vbkF1dGhlbnRpY2F0ZVN0YXJ0LmNhbGwodGhpcy5vcHRpb25zLnRhcmdldFNjb3BlKTtcclxuXHRcdHZhciBjbWQ9e2lkOnRoaXMubWVzc2FnZUlkKyssXCJtZXNzYWdlVHlwZVwiOlwiYXV0aGVudGljYXRlXCIsXCJ1c2VyTmFtZVwiOnVzZXJOYW1lLCBcInBhc3N3b3JkXCI6IHBhc3N3b3JkfTtcclxuXHRcdGNvbnNvbGUubG9nKFwic3dhXCIsIGNtZCk7XHJcblx0XHR0aGlzLndlYnNvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KGNtZCkpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGxvZ29mZigpe1xyXG5cdFx0Ly90aGlzLm9wdGlvbnMudXNlck5hbWUgPSB0aGlzLmFsbG93QW5vbnltb3VzID8gXCJhbm9ueW1vdXNcIiA6IG51bGw7XHJcblx0XHQvL3RoaXMub3B0aW9ucy5wYXNzd29yZCA9IG51bGw7XHJcblxyXG5cdFx0dmFyIGNtZD17aWQ6dGhpcy5tZXNzYWdlSWQrKyxcIm1lc3NhZ2VUeXBlXCI6XCJsb2dvZmZcIiwgXCJzZXNzaW9uXCI6IHRoaXMuc2Vzc2lvbklkfTtcclxuXHRcdHRoaXMuc2Vzc2lvbklkID0gbnVsbDtcclxuXHRcdHRoaXMud2Vic29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoY21kKSk7XHJcblx0fVxyXG5cclxuXHRvbk1lc3NhZ2UoZXZ0KXtcclxuXHRcdC8vY29uc29sZS5sb2coXCJvbiBtXCIsZXZ0LmRhdGEpO1xyXG5cdFx0dmFyIG1lc3NhZ2U9SlNPTi5wYXJzZShldnQuZGF0YSk7XHJcblx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHRcclxuXHRcdGlmIChtZXNzYWdlLm1lc3NhZ2VUeXBlPT1cImF1dGhlbnRpY2F0ZVwiKXtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJhdXRoZW50aWNhdGVcIik7XHJcblx0XHRcdHRoaXMuZG9BdXRoZW50aWNhdGUgPSB0cnVlO1xyXG5cdFx0XHRpZiAodGhpcy5vcHRpb25zLnVzZXJOYW1lKVxyXG5cdFx0XHRcdHRoaXMuYXV0aGVudGljYXRlKHRoaXMub3B0aW9ucy51c2VyTmFtZSwgdGhpcy5vcHRpb25zLnBhc3N3b3JkKVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0dGhpcy5vcHRpb25zLm9uQXV0aGVudGljYXRlLmNhbGwodGhpcy5vcHRpb25zLnRhcmdldFNjb3BlLGV2dCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChtZXNzYWdlLm1lc3NhZ2VUeXBlPT1cImF1dGhlbnRpY2F0aW9uX2ZhaWxlZFwiKXtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJhdXRoZW50aWNhdGlvbiBmYWlsZWRcIiwgdGhpcy5vcHRpb25zLnVzZXJOYW1lKTtcclxuXHRcdFx0aWYgKHRoaXMub3B0aW9ucy51c2VyTmFtZSA9PSBcImFub255bW91c1wiKSB7XHJcblx0XHRcdFx0dGhpcy5hbGxvd0Fub255bW91cyA9IGZhbHNlO1xyXG5cdFx0XHRcdHRoaXMub3B0aW9ucy51c2VyTmFtZSA9IG51bGw7XHJcblx0XHRcdFx0dGhpcy5vcHRpb25zLnBhc3N3b3JkID0gbnVsbDtcclxuXHRcdFx0XHR0aGlzLnNlc3Npb25JZCA9IG51bGw7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJ4XCIsIHNlbGYub3B0aW9ucylcclxuXHRcdFx0XHRpZiAoc2VsZi5vcHRpb25zLm9uTG9nT2ZmKXtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwieDFcIilcclxuXHRcdFx0XHRcdHNlbGYub3B0aW9ucy5vbkxvZ09mZi5jYWxsKHNlbGYub3B0aW9ucy50YXJnZXRTY29wZSxldnQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlXHJcblx0XHRcdFx0dGhpcy5vcHRpb25zLm9uQXV0aGVudGljYXRlRmFpbGVkLmNhbGwodGhpcy5vcHRpb25zLnRhcmdldFNjb3BlLGV2dCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChtZXNzYWdlLm1lc3NhZ2VUeXBlPT1cInNlc3Npb25fYXV0aGVudGljYXRlZFwiKXtcclxuXHRcdFx0dmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cdFx0XHRcclxuICAgICAgICBcdGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArICgyKjYwKjYwKjEwMDApKTtcclxuICAgICAgICBcdHZhciBleHBpcmVzID0gXCI7IGV4cGlyZXM9XCIgKyBkYXRlLnRvVVRDU3RyaW5nKCk7XHJcblx0XHRcdHRoaXMuc2Vzc2lvbklkID0gbWVzc2FnZS5zZXNzaW9uO1xyXG5cdFx0XHRkb2N1bWVudC5jb29raWUgPSBcImtlcnZpc2Vzc2lvblwiICsgXCI9XCIgKyBtZXNzYWdlLnNlc3Npb24gKyBleHBpcmVzICsgXCI7IHBhdGg9L1wiO1xyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcInRvXCIsIHNlbGYub3B0aW9ucyk7XHJcblx0XHRcdFx0aWYgKHNlbGYub3B0aW9ucy5vbk9wZW4pXHJcblx0XHRcdFx0XHRzZWxmLm9wdGlvbnMub25PcGVuLmNhbGwoc2VsZi5vcHRpb25zLnRhcmdldFNjb3BlLCBzZWxmLmZpcnN0T25PcGVuLGV2dCk7XHJcblx0XHRcdFx0XHRzZWxmLmZpcnN0T25PcGVuID0gZmFsc2U7XHJcblx0XHRcdH0sIDEwMFxyXG5cdFx0XHQpO1xyXG5cdFx0XHRcclxuXHRcdH0gZWxzZSBpZiAobWVzc2FnZS5tZXNzYWdlVHlwZSA9PSBcInNlc3Npb25fbG9nb2ZmXCIpeyBcclxuXHRcdFx0aWYgKHNlbGYub3B0aW9ucy5vbkxvZ09mZilcclxuXHRcdFx0XHRzZWxmLm9wdGlvbnMub25Mb2dPZmYuY2FsbChzZWxmLm9wdGlvbnMudGFyZ2V0U2NvcGUsZXZ0KTtcclxuXHRcdFx0aWYgKHRoaXMuYWxsb3dBbm9ueW1vdXMgJiYgdGhpcy5vcHRpb25zLnVzZXJOYW1lICE9IFwiYW5vbnltb3VzXCIpe1xyXG5cdFx0XHRcdHRoaXMuYXV0aGVudGljYXRlKFwiYW5vbnltb3VzXCIsIG51bGwpXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2VsZi5vcHRpb25zLnVzZXJOYW1lID0gbnVsbDtcclxuXHRcdFx0XHRzZWxmLm9wdGlvbnMucGFzc3dvcmQgPSBudWxsO1xyXG5cdFx0XHRcdHNlbGYuc2Vzc2lvbklkID0gbnVsbDtcclxuXHRcdFx0XHJcblx0XHRcdFx0XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSBpZiAobWVzc2FnZS5tZXNzYWdlVHlwZT09XCJyZXNwb25zZVwiKVxyXG5cdFx0XHR0aGlzLmhhbmRsZVJQQ1Jlc3BvbnNlKG1lc3NhZ2UpO1xyXG5cdFx0ZWxzZSBpZiAobWVzc2FnZS5tZXNzYWdlVHlwZT09XCJldmVudFwiKVxyXG5cdFx0XHR0aGlzLmhhbmRsZUV2ZW50KG1lc3NhZ2UpO1xyXG5cdFx0ZWxzZSBpZiAobWVzc2FnZS5tZXNzYWdlVHlwZT09XCJjb21tYW5kXCIpXHJcblx0XHRcdHRoaXMuaGFuZGxlQ29tbWFuZChtZXNzYWdlKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0Y29uc29sZS5sb2coXCJLZXJ2aSBzcGluZSBtZXNzYWdlIHVua25vd25cIix0aGlzLnJwY1F1ZXVlLGV2dCk7XHJcblx0fVxyXG5cclxuXHRvbkVycm9yKGV2dCl7XHJcblx0XHRjb25zb2xlLmxvZyhcIktlcnZpIG9uIGVycm9yXCIsZXZ0KTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBhZGRDb21tYW5kSGFuZGxlciAoY29tbWFuZDpzdHJpbmcsY2FsbGJhY2spe1xyXG5cdFx0dGhpcy5jb21tYW5kSGFuZGxlcnMucHVzaCh7Y29tbWFuZDpjb21tYW5kLGNhbGxiYWNrOmNhbGxiYWNrfSk7XHJcblx0XHR2YXIgY21kPXtpZDp0aGlzLm1lc3NhZ2VJZCsrLFwibWVzc2FnZVR5cGVcIjpcInJlZ2lzdGVyQ29tbWFuZEhhbmRsZXJcIixcImNvbW1hbmRcIjpjb21tYW5kfTtcclxuXHRcdHRoaXMud2Vic29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoY21kKSk7XHJcblx0fTtcclxuXHJcblx0cHVibGljIGFkZFF1ZXJ5SGFuZGxlcihxdWVyeTpzdHJpbmcsY2FsbGJhY2spe1xyXG5cdFx0dGhpcy5xdWVyeUhhbmRsZXJzLnB1c2goe3F1ZXJ5OnF1ZXJ5LGNhbGxiYWNrOmNhbGxiYWNrfSk7XHJcblx0XHR2YXIgY21kPXtpZDp0aGlzLm1lc3NhZ2VJZCsrLFwibWVzc2FnZVR5cGVcIjpcInJlZ2lzdGVyUXVlcnlIYW5kbGVyXCIsXCJxdWVyeVwiOnF1ZXJ5fTtcclxuXHRcdHRoaXMud2Vic29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoY21kKSk7XHJcblx0fTtcclxuXHJcblx0cHVibGljIGFkZEV2ZW50SGFuZGxlcj1mdW5jdGlvbihldmVudE5hbWU6c3RyaW5nLGlkOnN0cmluZyxjYWxsYmFjayl7XHJcblx0XHRpZiAoaWQpXHJcblx0XHRcdHRoaXMuZXZlbnRIYW5kbGVycy5wdXNoKHtcImV2ZW50TmFtZVwiOmV2ZW50TmFtZStcIi9cIitpZCxjYWxsYmFjazpjYWxsYmFja30pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLmV2ZW50SGFuZGxlcnMucHVzaCh7XCJldmVudE5hbWVcIjpldmVudE5hbWUsY2FsbGJhY2s6Y2FsbGJhY2t9KTtcclxuXHRcdHZhciBjbWQ9e2lkOnRoaXMubWVzc2FnZUlkKyssXCJtZXNzYWdlVHlwZVwiOlwicmVnaXN0ZXJFdmVudEhhbmRsZXJcIixcImV2ZW50XCI6ZXZlbnROYW1lLFwiZXZlbnRJZFwiOmlkfTtcclxuXHRcdC8vY29uc29sZS5sb2coXCJhZGQgZXZlbnQgaGFuZGxlclwiLGNtZCk7XHJcblx0XHR0aGlzLndlYnNvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KGNtZCkpO1xyXG5cdH07XHJcblxyXG5cdHB1YmxpYyBzZW5kQ29tbWFuZChjb21tYW5kOnN0cmluZywuLi5wOmFueVtdKXtcclxuXHRcdGNvbnNvbGUubG9nKFwic2VjXCIsYXJndW1lbnRzKTtcclxuXHRcdHZhciBhcmdzPVtdO1xyXG5cdFx0XHJcblx0XHR2YXIgY2FsbGJhY2s9bnVsbDtcclxuXHJcblx0XHRmb3IgKHZhciBpPTA7KGk8cC5sZW5ndGgpO2krKyl7XHJcblx0XHRcdGlmIChwW2ldIGluc3RhbmNlb2YgRnVuY3Rpb24pXHJcblx0XHRcdFx0Y2FsbGJhY2s9cFtpXTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdGFyZ3MucHVzaChwW2ldKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0dmFyIGNtZD17aWQ6dGhpcy5tZXNzYWdlSWQrKyxcIm1lc3NhZ2VUeXBlXCI6XCJjb21tYW5kXCIsXCJjb21tYW5kXCI6Y29tbWFuZCxcImFyZ3NcIjphcmdzfTtcclxuXHRcdGlmIChjYWxsYmFjayAmJiBjYWxsYmFjayBpbnN0YW5jZW9mIEZ1bmN0aW9uKVxyXG5cdFx0XHR0aGlzLmFkZFJQQ0NhbGxiYWNrKGNtZC5pZC50b1N0cmluZygpLCBjYWxsYmFjaywgbnVsbCwgMCk7XHJcblx0XHRcclxuXHRcdGNvbnNvbGUubG9nKFwic2VuZENvbW1hbmRcIix0aGlzLGNtZCk7XHJcblx0XHR0aGlzLndlYnNvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KGNtZCkpO1xyXG5cdH07XHJcblxyXG5cdHB1YmxpYyBzZW5kUXVlcnkocXVlcnksLi4ucDphbnlbXSl7XHJcblx0XHR2YXIgYXJncz1bXTtcclxuXHRcdHZhciBjYWxsYmFjaz1udWxsO1xyXG5cdFx0dmFyIGNhbGxiYWNrVGltZW91dCA9IG51bGxcclxuXHRcdHZhciB0aW1lb3V0ID0gMTAwMDBcclxuXHRcdGZvciAodmFyIGk9MDsoaTxwLmxlbmd0aCk7aSsrKXtcclxuXHRcdFx0aWYgKHBbaV0gaW5zdGFuY2VvZiBGdW5jdGlvbilcclxuXHRcdFx0XHRpZiAoIWNhbGxiYWNrKSBcclxuXHRcdFx0XHRcdGNhbGxiYWNrPXBbaV07XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0Y2FsbGJhY2tUaW1lb3V0ID0gcFtpXTtcclxuXHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRpZiAoY2FsbGJhY2tUaW1lb3V0KVxyXG5cdFx0XHRcdFx0dGltZW91dCA9IHBbaV1cclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRhcmdzLnB1c2gocFtpXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdCBcclxuXHRcdHZhciBjbWQ9e2lkOnRoaXMubWVzc2FnZUlkKyssXCJtZXNzYWdlVHlwZVwiOlwicXVlcnlcIixcInF1ZXJ5XCI6cXVlcnksXCJhcmdzXCI6YXJnc307XHJcblx0XHR0aGlzLmFkZFJQQ0NhbGxiYWNrKGNtZC5pZC50b1N0cmluZygpLGNhbGxiYWNrLCBjYWxsYmFja1RpbWVvdXQsIHRpbWVvdXQpO1xyXG5cdFx0Y29uc29sZS5sb2coXCJzZW5kUXVlcnlcIiwgY2FsbGJhY2ssY21kKTtcclxuXHRcdHRoaXMud2Vic29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoY21kKSk7XHJcblx0fTtcclxuXHJcblx0cHVibGljIHRyaWdnZXJFdmVudChldmVudE5hbWU6c3RyaW5nLGlkOnN0cmluZyl7XHJcblx0XHR2YXIgZT17aWQ6dGhpcy5tZXNzYWdlSWQrKyxcIm1lc3NhZ2VUeXBlXCI6XCJldmVudFwiLFwiZXZlbnRcIjpldmVudE5hbWUsXCJhcmdzXCI6YXJndW1lbnRzfTtcclxuXHRcdHRoaXMud2Vic29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoZSkpO1xyXG5cdH07XHJcbn0iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIFRpbSBXZW50emxhdVxyXG4vLyBMaWNlbnNlZCB1bmRlciBNSVRcclxuaW1wb3J0IHtLZXJ2aVNwaW5lQmFzZX0gZnJvbSBcIi4va2Vydmktc3BpbmViYXNlXCI7XHJcbmRlY2xhcmUgdmFyIFN0b21wOmFueTtcclxuZXhwb3J0IGNsYXNzICBLZXJ2aVJNUVNwaW5lIGV4dGVuZHMgS2VydmlTcGluZUJhc2Uge1xyXG5cdHByaXZhdGUgc29ja2V0U2Vzc2lvbjpudWxsO1xyXG5cdHByaXZhdGUgZXhjaGFuZ2UgPSBcIi9leGNoYW5nZS9cIjtcclxuXHRcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgY29uc3RydWN0b3JPcHRpb25zKXtcclxuXHRcdHN1cGVyKGNvbnN0cnVjdG9yT3B0aW9ucyk7XHJcblx0XHRjb25zb2xlLmxvZyhcIktlcnZpIGlvIHNwaW5lIGluaXQgeVwiLCB0aGlzLm9wdGlvbnMsY29uc3RydWN0b3JPcHRpb25zKTtcclxuXHRcdFxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBvbk1RRXJyb3IoZnJhbWUpe1xyXG5cdFx0Y29uc29sZS5sb2coXCJNUSBlcnJvclwiLCBmcmFtZSk7XHJcblx0fVxyXG5cclxuXHRcclxuXHRwcm90ZWN0ZWQgY29ubmVjdCgpe1xyXG5cdFx0aWYgKHRoaXMuaXNDb25uZWN0ZWQpe1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIktlcnZpIGlzIGNvbm5lY3RlZFwiKTtcclxuXHRcdFx0cmV0dXJuXHJcblx0XHR9XHJcblx0XHR2YXIgc2VsZj10aGlzO1xyXG5cdFx0Ly92YXIgbXFVcmw9IHRoaXMub3B0aW9ucy5wcm90b2NvbCArIFwiOi8vXCIgKyB0aGlzLm9wdGlvbnMuYWRkcmVzc1xyXG5cdFx0dmFyIG1xVXJsPSBcIndzczovL21xLmtlcnZpLmlvOjE1NjczL3dzXCJcclxuXHRcdHRoaXMud2Vic29ja2V0ID0gU3RvbXAuY2xpZW50KG1xVXJsKTtcclxuXHRcdHRoaXMud2Vic29ja2V0LmhlYXJ0YmVhdC5pbmNvbWluZyA9IDA7XHJcblx0XHRzZWxmLmV4Y2hhbmdlID0gXCIvZXhjaGFuZ2UvXCIgKyAgc2VsZi5vcHRpb25zLmFwaVRva2VuLmFwcF9pZDtcclxuXHRcdGNvbnNvbGUubG9nKFwiZXhjaGFuZ2VcIiwgc2VsZi5leGNoYW5nZSlcclxuXHRcdHRoaXMud2Vic29ja2V0LmNvbm5lY3QoXHJcblx0XHRcdHNlbGYub3B0aW9ucy5hcGlUb2tlbi5hcGlfdG9rZW4sIFxyXG5cdFx0XHRcInVpXCIsIFxyXG5cdFx0XHRmdW5jdGlvbiAoZnJhbWUpe1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiTVEgY29ubmVjdFwiLCBmcmFtZSwgc2VsZi53ZWJzb2NrZXQsIHRoaXMsIHNlbGYpO1xyXG5cdFx0XHRcdHNlbGYuc29ja2V0U2Vzc2lvbiA9IGZyYW1lLmhlYWRlcnMuc2Vzc2lvbjtcclxuXHRcdFx0XHRzZWxmLmV4Y2hhbmdlID0gXCIvZXhjaGFuZ2UvXCIgKyAgc2VsZi5vcHRpb25zLmFwaVRva2VuLmFwcF9pZDtcclxuXHRcdFx0XHRzZWxmLndlYnNvY2tldC5zdWJzY3JpYmUoc2VsZi5leGNoYW5nZSwgZnVuY3Rpb24obWVzc2FnZSkge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJtcSBcIiwgbWVzc2FnZSk7XHJcblx0XHRcdFx0XHRpZiAobWVzc2FnZS5oZWFkZXJzW1widG9waWNcIl0pXHJcblx0XHRcdFx0XHRcdG1lc3NhZ2UuaGVhZGVyc1tcInRvcGljXCJdID0gbWVzc2FnZS5oZWFkZXJzW1widG9waWNcIl0ucmVwbGFjZShuZXcgUmVnRXhwKFwiXFxcXGNcIixcImdcIiksXCI6XCIpO1xyXG5cdFx0XHRcdFx0aWYgKG1lc3NhZ2UuY29tbWFuZD09XCJDT05ORUNURURcIil7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZSBpZiAobWVzc2FnZS5oZWFkZXJzW1widG9waWNcIl0gPT0gXCJwaW5nXCIpXHJcblx0XHRcdFx0XHRcdHNlbGYub25QaW5nKG1lc3NhZ2UpO1xyXG5cdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHRzZWxmLm9uTWVzc2FnZShtZXNzYWdlKTtcclxuXHRcdFx0XHR9LCB7IH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzZWxmLm9uTVFFcnJvciwgc2VsZi5vcHRpb25zLmFwaVRva2VuLmFwaV9jaGFubmVsKTtcclxuXHR9XHJcblxyXG5cdFxyXG5cdG9uUGluZyhtZXNzYWdlKXtcclxuXHRcdGNvbnNvbGUubG9nKFwib25waW5nXCIsIHRoaXMub3B0aW9ucy5hcHBJZCwgbWVzc2FnZSwgKTtcclxuXHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdGlmICghdGhpcy5pc0Nvbm5lY3RlZCAmJiBtZXNzYWdlLmhlYWRlcnNbXCJjb25uZWN0aW9uX2lkXCJdPT0gc2VsZi5vcHRpb25zLmFwaVRva2VuLmFwcF9pZCl7XHJcblx0XHRcdHRoaXMub25PcGVuKG1lc3NhZ2UpO1xyXG5cdFx0XHR0aGlzLndlYnNvY2tldC5zZW5kKHNlbGYuZXhjaGFuZ2UsIHsgdG9waWM6XCJzZXNzaW9uOm5ld1wiLCByb3V0ZXJfaWQ6bWVzc2FnZS5oZWFkZXJzW1wicm91dGVyX2lkXCJdLCBzZXNzaW9uX2lkOnRoaXMuc29ja2V0U2Vzc2lvbn0sIFwie31cIilcdFxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0YXV0aGVudGljYXRlKHVzZXJOYW1lLCBwYXNzd29yZCl7XHJcblx0XHR0aGlzLm9wdGlvbnMudXNlck5hbWUgPSB1c2VyTmFtZTtcclxuXHRcdHRoaXMub3B0aW9ucy5wYXNzd29yZCA9IHBhc3N3b3JkO1xyXG5cdFx0aWYgKHRoaXMub3B0aW9ucy5vbkF1dGhlbnRpY2F0ZVN0YXJ0KVxyXG5cdFx0XHR0aGlzLm9wdGlvbnMub25BdXRoZW50aWNhdGVTdGFydC5jYWxsKHRoaXMub3B0aW9ucy50YXJnZXRTY29wZSk7XHJcblx0XHR2YXIgY21kPXtpZDp0aGlzLm1lc3NhZ2VJZCsrLFwibWVzc2FnZVR5cGVcIjpcImF1dGhlbnRpY2F0ZVwiLFwidXNlck5hbWVcIjp0aGlzLm9wdGlvbnMudXNlck5hbWUsIFwicGFzc3dvcmRcIjogdGhpcy5vcHRpb25zLnBhc3N3b3JkfTtcclxuXHRcdHRoaXMud2Vic29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoY21kKSk7XHJcblx0fVxyXG5cclxuXHRsb2dvZmYoKXtcclxuXHRcdC8vdGhpcy5vcHRpb25zLnVzZXJOYW1lID0gdGhpcy5hbGxvd0Fub255bW91cyA/IFwiYW5vbnltb3VzXCIgOiBudWxsO1xyXG5cdFx0Ly90aGlzLm9wdGlvbnMucGFzc3dvcmQgPSBudWxsO1xyXG5cclxuXHRcdHZhciBjbWQ9e2lkOnRoaXMubWVzc2FnZUlkKyssXCJtZXNzYWdlVHlwZVwiOlwibG9nb2ZmXCIsIFwic2Vzc2lvblwiOiB0aGlzLnNlc3Npb25JZH07XHJcblx0XHR0aGlzLnNlc3Npb25JZCA9IG51bGw7XHJcblx0XHR0aGlzLndlYnNvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KGNtZCkpO1xyXG5cdH1cclxuXHJcblx0b25NZXNzYWdlKGV2dCl7XHJcblx0XHRjb25zb2xlLmxvZyhcIm9uIG1cIixldnQpO1xyXG5cdFx0dmFyIG1lc3NhZ2U9SlNPTi5wYXJzZShldnQuYm9keSk7XHJcblx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHR2YXIgdG9waWMgPSBldnQuaGVhZGVyc1tcInRvcGljXCJdO1xyXG5cclxuXHRcdGlmICh0b3BpYz09XCJhdXRoZW50aWNhdGVcIil7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiYXV0aGVudGljYXRlXCIpO1xyXG5cdFx0XHR0aGlzLmRvQXV0aGVudGljYXRlID0gdHJ1ZTtcclxuXHRcdFx0aWYgKHRoaXMub3B0aW9ucy51c2VyTmFtZSlcclxuXHRcdFx0XHR0aGlzLmF1dGhlbnRpY2F0ZSh0aGlzLm9wdGlvbnMudXNlck5hbWUsIHRoaXMub3B0aW9ucy5wYXNzd29yZClcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHRoaXMub3B0aW9ucy5vbkF1dGhlbnRpY2F0ZS5jYWxsKHRoaXMub3B0aW9ucy50YXJnZXRTY29wZSxldnQpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAodG9waWM9PVwiYXV0aGVudGljYXRpb25fZmFpbGVkXCIpe1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcImF1dGhlbnRpY2F0aW9uIGZhaWxlZFwiLCB0aGlzLm9wdGlvbnMudXNlck5hbWUpO1xyXG5cdFx0XHRpZiAodGhpcy5vcHRpb25zLnVzZXJOYW1lID09IFwiYW5vbnltb3VzXCIpIHtcclxuXHRcdFx0XHR0aGlzLmFsbG93QW5vbnltb3VzID0gZmFsc2U7XHJcblx0XHRcdFx0dGhpcy5vcHRpb25zLnVzZXJOYW1lID0gbnVsbDtcclxuXHRcdFx0XHR0aGlzLm9wdGlvbnMucGFzc3dvcmQgPSBudWxsO1xyXG5cdFx0XHRcdHRoaXMuc2Vzc2lvbklkID0gbnVsbDtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcInhcIiwgc2VsZi5vcHRpb25zKVxyXG5cdFx0XHRcdGlmIChzZWxmLm9wdGlvbnMub25Mb2dPZmYpe1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJ4MVwiKVxyXG5cdFx0XHRcdFx0c2VsZi5vcHRpb25zLm9uTG9nT2ZmLmNhbGwoc2VsZi5vcHRpb25zLnRhcmdldFNjb3BlLGV2dCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2VcclxuXHRcdFx0XHR0aGlzLm9wdGlvbnMub25BdXRoZW50aWNhdGVGYWlsZWQuY2FsbCh0aGlzLm9wdGlvbnMudGFyZ2V0U2NvcGUsZXZ0KTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKHRvcGljPT1cInNlc3Npb25fYXV0aGVudGljYXRlZFwiKXtcclxuXHRcdFx0dmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cdFx0XHRcclxuICAgICAgICBcdGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArICgyKjYwKjYwKjEwMDApKTtcclxuICAgICAgICBcdHZhciBleHBpcmVzID0gXCI7IGV4cGlyZXM9XCIgKyBkYXRlLnRvVVRDU3RyaW5nKCk7XHJcblx0XHRcdHRoaXMuc2Vzc2lvbklkID0gbWVzc2FnZS5zZXNzaW9uO1xyXG5cdFx0XHRkb2N1bWVudC5jb29raWUgPSBcImtlcnZpc2Vzc2lvblwiICsgXCI9XCIgKyBtZXNzYWdlLnNlc3Npb24gKyBleHBpcmVzICsgXCI7IHBhdGg9L1wiO1xyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRpZiAoc2VsZi5vcHRpb25zLm9uT3BlbilcclxuXHRcdFx0XHRcdHNlbGYub3B0aW9ucy5vbk9wZW4uY2FsbChzZWxmLm9wdGlvbnMudGFyZ2V0U2NvcGUsIHNlbGYuZmlyc3RPbk9wZW4sZXZ0KTtcclxuXHRcdFx0XHRcdHNlbGYuZmlyc3RPbk9wZW4gPSBmYWxzZTtcclxuXHRcdFx0fSwgMTAwXHJcblx0XHRcdCk7XHJcblx0XHRcdFxyXG5cdFx0fSBlbHNlIGlmICh0b3BpYyA9PSBcInNlc3Npb25fbG9nb2ZmXCIpeyBcclxuXHRcdFx0aWYgKHNlbGYub3B0aW9ucy5vbkxvZ09mZilcclxuXHRcdFx0XHRzZWxmLm9wdGlvbnMub25Mb2dPZmYuY2FsbChzZWxmLm9wdGlvbnMudGFyZ2V0U2NvcGUsZXZ0KTtcclxuXHRcdFx0aWYgKHRoaXMuYWxsb3dBbm9ueW1vdXMgJiYgdGhpcy5vcHRpb25zLnVzZXJOYW1lICE9IFwiYW5vbnltb3VzXCIpe1xyXG5cdFx0XHRcdHRoaXMuYXV0aGVudGljYXRlKFwiYW5vbnltb3VzXCIsIG51bGwpXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2VsZi5vcHRpb25zLnVzZXJOYW1lID0gbnVsbDtcclxuXHRcdFx0XHRzZWxmLm9wdGlvbnMucGFzc3dvcmQgPSBudWxsO1xyXG5cdFx0XHRcdHNlbGYuc2Vzc2lvbklkID0gbnVsbDtcclxuXHRcdFx0XHJcblx0XHRcdFx0XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSBpZiAoZXZ0LmhlYWRlcnNbXCJ0eXBlXCJdPT1cInF1ZXJ5X3Jlc3BvbnNlXCIpe1xyXG5cdFx0XHR0aGlzLmhhbmRsZVJQQ1Jlc3BvbnNlKHtpZDpldnQuaGVhZGVyc1tcInF1ZXJ5X2lkXCJdLCByZXNwb25zZTptZXNzYWdlfSk7XHJcblx0XHR9ZWxzZSBpZiAoZXZ0LmhlYWRlcnNbXCJ0eXBlXCJdPT1cImV2ZW50XCIpe1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcImVcIiwgZXZ0KTtcclxuXHRcdFx0dmFyIHRvcGljX3RhZz0gZXZ0LmhlYWRlcnNbXCJ0b3BpY1wiXS5zcGxpdChcIjpcIik7XHJcblx0XHRcdFxyXG5cdFx0XHR0aGlzLmhhbmRsZUV2ZW50KHtldmVudDp0b3BpY190YWdbMV0sIGlkOnRvcGljX3RhZ1syXSwgYXJnczptZXNzYWdlLmFyZ3N9KTtcclxuXHRcdH1lbHNlIGlmIChtZXNzYWdlLm1lc3NhZ2VUeXBlPT1cImNvbW1hbmRcIilcclxuXHRcdFx0dGhpcy5oYW5kbGVDb21tYW5kKG1lc3NhZ2UpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRjb25zb2xlLmxvZyhcIktlcnZpIHNwaW5lIG1lc3NhZ2UgdW5rbm93blwiLHRoaXMucnBjUXVldWUsZXZ0KTtcclxuXHR9XHJcblxyXG5cdG9uRXJyb3IoZXZ0KXtcclxuXHRcdGNvbnNvbGUubG9nKFwiS2Vydmkgb24gZXJyb3JcIixldnQpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGFkZENvbW1hbmRIYW5kbGVyIChjb21tYW5kOnN0cmluZyxjYWxsYmFjayl7XHJcblx0XHR0aGlzLmNvbW1hbmRIYW5kbGVycy5wdXNoKHtjb21tYW5kOmNvbW1hbmQsY2FsbGJhY2s6Y2FsbGJhY2t9KTtcclxuXHRcdHZhciBjbWQ9e2lkOnRoaXMubWVzc2FnZUlkKyssXCJtZXNzYWdlVHlwZVwiOlwicmVnaXN0ZXJDb21tYW5kSGFuZGxlclwiLFwiY29tbWFuZFwiOmNvbW1hbmR9O1xyXG5cdFx0Ly90aGlzLndlYnNvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KGNtZCkpO1xyXG5cdFx0dGhpcy53ZWJzb2NrZXQuc2VuZChcclxuXHRcdFx0dGhpcy5leGNoYW5nZSxcclxuXHRcdFx0eyB0b3BpYzpcInJlZ2lzdGVyQ29tbWFuZEhhbmRsZXJcIiwgcm91dGVyX2lkOnRoaXMuc29ja2V0U2Vzc2lvbn0sXHJcblx0XHRcdEpTT04uc3RyaW5naWZ5KGNtZClcclxuXHRcdClcdFxyXG5cdH07XHJcblxyXG5cdHB1YmxpYyBhZGRRdWVyeUhhbmRsZXIocXVlcnk6c3RyaW5nLGNhbGxiYWNrKXtcclxuXHRcdHRoaXMucXVlcnlIYW5kbGVycy5wdXNoKHtxdWVyeTpxdWVyeSxjYWxsYmFjazpjYWxsYmFja30pO1xyXG5cdFx0dmFyIGNtZD17aWQ6dGhpcy5tZXNzYWdlSWQrKyxcIm1lc3NhZ2VUeXBlXCI6XCJyZWdpc3RlclF1ZXJ5SGFuZGxlclwiLFwicXVlcnlcIjpxdWVyeX07XHJcblx0XHR0aGlzLndlYnNvY2tldC5zZW5kKFxyXG5cdFx0XHR0aGlzLmV4Y2hhbmdlLFxyXG5cdFx0XHR7IHRvcGljOlwicmVnaXN0ZXJRdWVyeUhhbmRsZXJcIiwgcm91dGVyX2lkOnRoaXMuc29ja2V0U2Vzc2lvbn0sXHJcblx0XHRcdEpTT04uc3RyaW5naWZ5KGNtZClcclxuXHRcdClcclxuXHR9O1xyXG5cclxuXHRwdWJsaWMgYWRkRXZlbnRIYW5kbGVyPWZ1bmN0aW9uKGV2ZW50TmFtZTpzdHJpbmcsaWQ6c3RyaW5nLGNhbGxiYWNrKXtcclxuXHRcdGlmIChpZClcclxuXHRcdFx0dGhpcy5ldmVudEhhbmRsZXJzLnB1c2goe1wiZXZlbnROYW1lXCI6ZXZlbnROYW1lK1wiL1wiK2lkLGNhbGxiYWNrOmNhbGxiYWNrfSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMuZXZlbnRIYW5kbGVycy5wdXNoKHtcImV2ZW50TmFtZVwiOmV2ZW50TmFtZSxjYWxsYmFjazpjYWxsYmFja30pO1xyXG5cdFx0dmFyIGNtZD17aWQ6dGhpcy5tZXNzYWdlSWQrKyxcIm1lc3NhZ2VUeXBlXCI6XCJyZWdpc3RlckV2ZW50SGFuZGxlclwiLFwiZXZlbnRcIjpldmVudE5hbWUsXCJldmVudElkXCI6aWR9O1xyXG5cdFx0dGhpcy53ZWJzb2NrZXQuc2VuZChcclxuXHRcdFx0dGhpcy5leGNoYW5nZSxcclxuXHRcdFx0eyB0b3BpYzpcInJlZ2lzdGVyRXZlbnRIYW5kbGVyXCIsIHJvdXRlcl9pZDp0aGlzLnNvY2tldFNlc3Npb259LFxyXG5cdFx0XHRKU09OLnN0cmluZ2lmeShjbWQpXHJcblx0XHQpXHJcblx0fTtcclxuXHJcblx0cHVibGljIHNlbmRDb21tYW5kKGNvbW1hbmQ6c3RyaW5nLC4uLnA6YW55W10pe1xyXG5cdFx0Y29uc29sZS5sb2coXCJzZWNcIixhcmd1bWVudHMpO1xyXG5cdFx0dmFyIGFyZ3M9W107XHJcblx0XHRcclxuXHRcdHZhciBjYWxsYmFjaz1udWxsO1xyXG5cclxuXHRcdGZvciAodmFyIGk9MDsoaTxwLmxlbmd0aCk7aSsrKXtcclxuXHRcdFx0aWYgKHBbaV0gaW5zdGFuY2VvZiBGdW5jdGlvbilcclxuXHRcdFx0XHRjYWxsYmFjaz1wW2ldO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0YXJncy5wdXNoKHBbaV0pO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvKmlmIChwLmxlbmd0aD4xKXtcclxuXHRcdFx0dmFyIGFyZ09mZnNldD0xO1xyXG5cdFx0XHRpZiAoIGNhbGxiYWNrICYmIGNhbGxiYWNrIGluc3RhbmNlb2YgRnVuY3Rpb24gKVxyXG5cdFx0XHRcdGFyZ09mZnNldCs9MTtcclxuXHRcdFx0Zm9yICh2YXIgaT1hcmdPZmZzZXQ7KGk8YXJndW1lbnRzLmxlbmd0aCk7aSsrKXtcclxuXHRcdFx0XHRhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcclxuXHRcdFx0fVxyXG5cdFx0fSovXHJcblx0XHR2YXIgY21kPXtpZDp0aGlzLm1lc3NhZ2VJZCsrLFwiYXJnc1wiOmFyZ3MsIGt3YXJnczp7fX07XHJcblx0XHRcclxuXHRcdGlmIChjYWxsYmFjayAmJiBjYWxsYmFjayBpbnN0YW5jZW9mIEZ1bmN0aW9uKVxyXG5cdFx0XHR0aGlzLmFkZFJQQ0NhbGxiYWNrKGNtZC5pZC50b1N0cmluZygpLGNhbGxiYWNrLCBudWxsLCAwKTtcclxuXHRcdGNvbnNvbGUubG9nKFwic2VuZENvbW1hbmRcIix0aGlzLGNtZCk7XHJcblx0XHR0aGlzLndlYnNvY2tldC5zZW5kKFxyXG5cdFx0XHR0aGlzLmV4Y2hhbmdlLFxyXG5cdFx0XHR7IHRvcGljOlwiY29tbWFuZDpcIisgY29tbWFuZCwgcm91dGVyX2lkOnRoaXMuc29ja2V0U2Vzc2lvbn0sXHJcblx0XHRcdEpTT04uc3RyaW5naWZ5KGNtZClcclxuXHRcdClcclxuXHR9O1xyXG5cclxuXHRwdWJsaWMgc2VuZFF1ZXJ5KHF1ZXJ5LC4uLnA6YW55W10pe1xyXG5cdFx0dmFyIGFyZ3M9W107XHJcblx0XHR2YXIgY2FsbGJhY2s9bnVsbDtcclxuXHRcdHZhciBjYWxsYmFja1RpbWVvdXQ9bnVsbDtcclxuXHRcdHZhciB0aW1lb3V0ID0gMTAwMDA7XHJcblx0XHRmb3IgKHZhciBpPTA7KGk8cC5sZW5ndGgpO2krKyl7XHJcblx0XHRcdGlmIChwW2ldIGluc3RhbmNlb2YgRnVuY3Rpb24pXHJcblx0XHRcdFx0aWYgKCFjYWxsYmFjaykgXHJcblx0XHRcdFx0XHRjYWxsYmFjaz1wW2ldO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdGNhbGxiYWNrVGltZW91dCA9IHBbaV07XHJcblx0XHRcdGVsc2V7XHJcblx0XHRcdFx0aWYgKGNhbGxiYWNrVGltZW91dClcclxuXHRcdFx0XHRcdHRpbWVvdXQgPSBwW2ldXHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0YXJncy5wdXNoKHBbaV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQgXHJcblx0XHR2YXIgY21kPXtpZDp0aGlzLm1lc3NhZ2VJZCsrLFwibWVzc2FnZVR5cGVcIjpcInF1ZXJ5XCIsXCJxdWVyeVwiOnF1ZXJ5LFwiYXJnc1wiOmFyZ3MsIGt3YXJnczpbXSwgcXRzOjB9O1xyXG5cdFx0dGhpcy5hZGRSUENDYWxsYmFjayhjbWQuaWQudG9TdHJpbmcoKSxjYWxsYmFjaywgY2FsbGJhY2tUaW1lb3V0LCB0aW1lb3V0KTtcclxuXHRcdGNvbnNvbGUubG9nKFwic2VuZFF1ZXJ5XCIsIGNhbGxiYWNrLGNtZCk7XHJcblx0XHQvL3RoaXMud2Vic29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoY21kKSk7XHJcblx0XHR0aGlzLndlYnNvY2tldC5zZW5kKFxyXG5cdFx0XHR0aGlzLmV4Y2hhbmdlLFxyXG5cdFx0XHR7IHRvcGljOlwicXVlcnk6XCIgKyBxdWVyeSwgcXRzOjAsIHF1ZXJ5X2lkOiBjbWQuaWQudG9TdHJpbmcoKSwgcm91dGVyX2lkOnRoaXMuc29ja2V0U2Vzc2lvbiwgcmVzcG9uc2VfYWRkcmVzczp0aGlzLnNvY2tldFNlc3Npb259LFxyXG5cdFx0XHRKU09OLnN0cmluZ2lmeShjbWQpXHJcblx0XHQpXHJcblx0fTtcclxuXHJcblx0cHVibGljIHRyaWdnZXJFdmVudChldmVudE5hbWU6c3RyaW5nLGlkOnN0cmluZyl7XHJcblx0XHR2YXIgZT17aWQ6dGhpcy5tZXNzYWdlSWQrKyxcIm1lc3NhZ2VUeXBlXCI6XCJldmVudFwiLFwiZXZlbnRcIjpldmVudE5hbWUsXCJhcmdzXCI6YXJndW1lbnRzfTtcclxuXHRcdHRoaXMud2Vic29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoZSkpO1xyXG5cdH07XHJcbn0iLCJcclxuZXhwb3J0IGNsYXNzIERhc2hib2FyZExpbmt7XHJcbiAgICBkYXNoYm9hcmRJZDpzdHJpbmc7XHJcbiAgICBwYW5lbElkOnN0cmluZztcclxuICAgIHBhbmVsTmFtZTpzdHJpbmc7XHJcbiAgICBjb21wb25lbnQ6SUNvbXBvbmVudDtcclxuICAgIHBhcmFtZXRlcnM6YW55O1xyXG5cclxuICAgIC8qY29uc3RydWN0b3IoZGFzaGJvYXJkSWQ6c3RyaW5nLCBzZWN0aW9uSWQ6c3RyaW5nLCBzZWN0aW9uTmFtZTpzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuZGFzaGJvYXJkSWQgPSBkYXNoYm9hcmRJZDtcclxuICAgICAgICB0aGlzLnNlY3Rpb25JZCA9IHNlY3Rpb25JZDtcclxuICAgICAgICB0aGlzLnNlY3Rpb25OYW1lID0gc2VjdGlvbk5hbWU7XHJcbiAgICB9Ki9cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb21wb25lbnQ6SUNvbXBvbmVudCwgbWVzc2FnZTphbnkpe1xyXG4gICAgICAgIHRoaXMuZGFzaGJvYXJkSWQgPSBtZXNzYWdlLmRhc2hib2FyZElkO1xyXG4gICAgICAgIHRoaXMucGFuZWxJZCA9IG1lc3NhZ2Uuc2VjdGlvbklkO1xyXG4gICAgICAgIHRoaXMucGFuZWxOYW1lID0gbWVzc2FnZS5zZWN0aW9uTmFtZTtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcclxuICAgICAgICB0aGlzLnBhcmFtZXRlcnMgPSBtZXNzYWdlLnBhcmFtZXRlcnM7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbXBvbmVudCB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgY29tcG9uZW50VHlwZTogc3RyaW5nO1xyXG4gICAgdWk6YW55O1xyXG4gICAgZGFzaGJvYXJkcyA6IERhc2hib2FyZExpbmtbXTtcclxuXHJcbiAgICAvL3VwZGF0ZVJlZmVyZW5jZXMoa2VydmlTZXJ2aWNlOktlcnZpQmFzZVNlcnZpY2UpO1xyXG4gICAgLy9yZWxvYWQoY29tcG9uZW50OklDb21wb25lbnQpO1xyXG4gICAgLy9yZW1vdmVSZWZlcmVuY2VzKGNvbXBvbmVudHM6SUNvbXBvbmVudFtdKTtcclxufSIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgVGltIFdlbnR6bGF1XHJcbi8vIExpY2Vuc2VkIHVuZGVyIE1JVFxyXG5pbXBvcnQgeyBJQ29tcG9uZW50LCBEYXNoYm9hcmRMaW5rIH0gZnJvbSBcIi4vSUNvbXBvbmVudC5tb2RlbFwiXHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBLZXJ2aUJhc2VTZXJ2aWNlIH0gZnJvbSAnLi4va2VydmktanMuc2VydmljZSdcclxuZGVjbGFyZSB2YXIgUXR5OmFueTtcclxuXHJcbmV4cG9ydCBjbGFzcyBLZXJ2aVZhbHVlIGltcGxlbWVudHMgSUNvbXBvbmVudHtcclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgY29tcG9uZW50VHlwZSA9IFwiS2VydmlWYWx1ZVwiXHJcbiAgICBwdWJsaWMgdHlwZU5hbWU6c3RyaW5nID0gbnVsbDsgICAgXHJcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBkYXNoYm9hcmRzOiBEYXNoYm9hcmRMaW5rW10gPSBbXTtcclxuICAgIHB1YmxpYyBpc0lucHV0OmJvb2xlYW47XHJcbiAgICBwdWJsaWMgY29tbWFuZDogc3RyaW5nO1xyXG4gICAgcHVibGljIHZhbHVlVFM6RGF0ZTtcclxuXHJcbiAgICBwdWJsaWMgdWkgPSB7XHJcbiAgICAgICAgdHlwZTogXCJcIixcclxuICAgICAgICBvcmllbnRhdGlvbjogXCJcIixcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBLZXJ2aVZhbHVlVHlwZTx2YWx1ZVR5cGU+IGV4dGVuZHMgS2VydmlWYWx1ZXtcclxuICAgIFxyXG4gICAgcHVibGljIHZhbHVlJDogQmVoYXZpb3JTdWJqZWN0PHZhbHVlVHlwZT47XHJcbiAgICBwcm90ZWN0ZWQga2VydmlTZXJ2aWNlOktlcnZpQmFzZVNlcnZpY2UgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2U6YW55LCBrZXJ2aVNlcnZpY2U6S2VydmlCYXNlU2VydmljZSl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmtlcnZpU2VydmljZSA9IGtlcnZpU2VydmljZTtcclxuICAgICAgICB0aGlzLnZhbHVlJD0gbmV3IEJlaGF2aW9yU3ViamVjdDx2YWx1ZVR5cGU+KG1lc3NhZ2UudmFsdWUpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG1lc3NhZ2UubmFtZTtcclxuICAgICAgICB0aGlzLmlzSW5wdXQgPSBtZXNzYWdlLmlzSW5wdXQ7XHJcbiAgICAgICAgdGhpcy51aSA9IG1lc3NhZ2UudWk7XHJcbiAgICAgICAgdGhpcy5jb21tYW5kID0gbWVzc2FnZS5jb21tYW5kO1xyXG4gICAgICAgIHRoaXMuaWQgPSBtZXNzYWdlLmlkO1xyXG4gICAgICAgIHRoaXMudWlbXCJ0eXBlXCJdID0gbWVzc2FnZS5jb21wb25lbnRUeXBlO1xyXG4gICAgICAgIHRoaXMudWlbXCJvcmllbnRhdGlvblwiXSA9IG1lc3NhZ2Uub3JpZW50YXRpb247XHJcbiAgICAgICAgdGhpcy51aVtcInZpc2libGVcIl0gPSBtZXNzYWdlLnZpc2libGU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBtZXNzYWdlLnVpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnVpW3Byb3BdICE9IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgIHRoaXMudWlbcHJvcF0gPSBtZXNzYWdlLnVpW3Byb3BdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgZGFzaGJvYXJkTGluayBvZiBtZXNzYWdlLmRhc2hib2FyZExpbmtzKXtcclxuICAgICAgICAgICAgdGhpcy5kYXNoYm9hcmRzLnB1c2goIG5ldyBEYXNoYm9hcmRMaW5rKHRoaXMsIGRhc2hib2FyZExpbmspKTsgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCB2YWx1ZSgpe1xyXG4gICAgICAgXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImd2XCIsIHRoaXMuaWQsIHRoaXMudmFsdWUkLnZhbHVlKVxyXG4gICAgICAgcmV0dXJuIHRoaXMudmFsdWUkLnZhbHVlIFxyXG4gICAgfVxyXG5cclxuICAgIHNldCB2YWx1ZSh2YWx1ZTp2YWx1ZVR5cGUpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic3ZcIiwgdGhpcy5pZCk7XHJcbiAgICAgICAgdGhpcy52YWx1ZSQubmV4dCh2YWx1ZSk7IFxyXG4gICAgICAgIHRoaXMua2VydmlTZXJ2aWNlLnNwaW5lLnNlbmRDb21tYW5kKHRoaXMuY29tbWFuZCwgdmFsdWUpO1xyXG4gICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0RGVmYXVsdFZhbHVlKCk6dmFsdWVUeXBlO1xyXG4gICAgcHVibGljIHNldCh2OnZhbHVlVHlwZSwgbm90aWZ5OmJvb2xlYW49dHJ1ZSl7XHJcbiAgICAgICAgdGhpcy52YWx1ZSQubmV4dCh2KTtcclxuICAgICAgICBpZiAobm90aWZ5KVxyXG4gICAgICAgICAgICB0aGlzLmtlcnZpU2VydmljZS5zcGluZS5zZW5kQ29tbWFuZCh0aGlzLmNvbW1hbmQsIHYpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGVudW0gVmFsdWVSYW5nZVR5cGUge25vcm1hbCwgd2FybmluZywgZXJyb3J9O1xyXG5cclxuZXhwb3J0IGNsYXNzIFZhbHVlUmFuZ2V7XHJcbiAgICBcclxuICAgIHB1YmxpYyBzdGFydDpudW1iZXIgPSBudWxsO1xyXG4gICAgcHVibGljIGVuZDpudW1iZXIgPSBudWxsO1xyXG4gICAgcHVibGljIHR5cGU6VmFsdWVSYW5nZVR5cGUgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHJhbmdlOmFueSl7XHJcbiAgICAgICAgdGhpcy5zdGFydCA9IHJhbmdlW1wic3RhcnRcIl07XHJcbiAgICAgICAgdGhpcy5lbmQgPSByYW5nZVtcImVuZFwiXVxyXG4gICAgICAgIGlmIChyYW5nZVtcInR5cGVcIl0gPT0gXCJ3YXJuaW5nXCIpXHJcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IFZhbHVlUmFuZ2VUeXBlLndhcm5pbmc7XHJcbiAgICAgICAgZWxzZSBpZiAocmFuZ2VbXCJ0eXBlXCJdID09IFwiZXJyb3JcIilcclxuICAgICAgICAgICAgdGhpcy50eXBlID0gVmFsdWVSYW5nZVR5cGUuZXJyb3I7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLnR5cGUgPSBWYWx1ZVJhbmdlVHlwZS5ub3JtYWw7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEtlcnZpRW51bU9wdGlvbk1vZGVse1xyXG4gICAgcHVibGljIHZhbHVlOnN0cmluZztcclxuICAgIHB1YmxpYyB0ZXh0OnN0cmluZztcclxuICAgIHB1YmxpYyBzZWxlY3RlZCQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2VPcHRpb246YW55KXtcclxuICAgICAgICB0aGlzLnZhbHVlID0gbWVzc2FnZU9wdGlvbi52YWx1ZTtcclxuICAgICAgICB0aGlzLnRleHQgPSBtZXNzYWdlT3B0aW9uLnRleHQ7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZCQubmV4dChtZXNzYWdlT3B0aW9uLnNlbGVjdGVkKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZVJlZmVyZW5jZXMoKXt9O1xyXG4gICAgcmVsb2FkKGNvbXBvbmVudDpJQ29tcG9uZW50KXt9O1xyXG4gICAgcmVtb3ZlUmVmZXJlbmNlcyhjb21wb25lbnRzOklDb21wb25lbnRbXSl7fTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNlbGVjdFZhbHVlIGV4dGVuZHMgS2VydmlWYWx1ZVR5cGU8c3RyaW5nW10+e1xyXG4gICAgcHVibGljIG9wdGlvbnM6S2VydmlFbnVtT3B0aW9uTW9kZWxbXSA9IFtdO1xyXG4gICAgcHVibGljIGxhc3RTZWxlY3RlZCQ6QmVoYXZpb3JTdWJqZWN0PEtlcnZpRW51bU9wdGlvbk1vZGVsPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8S2VydmlFbnVtT3B0aW9uTW9kZWw+KG51bGwpOyBcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IgKG1lc3NhZ2U6YW55LCBrZXJ2aVNlcnZpY2U6S2VydmlCYXNlU2VydmljZSl7XHJcbiAgICAgICAgc3VwZXIobWVzc2FnZSwga2VydmlTZXJ2aWNlKTtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gW11cclxuICAgICAgICBcclxuICAgICAgICBmb3IgKGxldCBvcHRpb24gb2YgbWVzc2FnZS5vcHRpb25zKXtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnB1c2goIG5ldyBLZXJ2aUVudW1PcHRpb25Nb2RlbChvcHRpb24pICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNlbGVjdE9wdGlvbnModGhpcy52YWx1ZSQudmFsdWUpO1xyXG4gICAgICAgIHRoaXMudmFsdWUkLnN1YnNjcmliZShmdW5jdGlvbih2KXtcclxuICAgICAgICAgICAgc2VsZi5zZWxlY3RPcHRpb25zKHYpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBnZXREZWZhdWx0VmFsdWUoKTpzdHJpbmdbXXtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBwdWJsaWMgc2VsZWN0T3B0aW9ucyhzZWxlY3RlZE9wdGlvbnM6YW55KXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNvY1wiKTtcclxuICAgICAgICBpZiAoIXNlbGVjdGVkT3B0aW9ucylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGZvciAobGV0IG9wdGlvbiBvZiB0aGlzLm9wdGlvbnMpe1xyXG4gICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQkLm5leHQoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBzZWxlY3RlZE9wdGlvbiBvZiBzZWxlY3RlZE9wdGlvbnMpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNvXCIsIHNlbGVjdGVkT3B0aW9uKVxyXG4gICAgICAgICAgICBmb3IobGV0IG9wdGlvbiBvZiB0aGlzLm9wdGlvbnMpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzb3hcIiwgb3B0aW9uIClcclxuICAgICAgICAgICAgICAgIGlmIChvcHRpb24udmFsdWUgPT0gc2VsZWN0ZWRPcHRpb24pe1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCQubmV4dCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RTZWxlY3RlZCQubmV4dChvcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib3NcIiwgb3B0aW9uLnRleHQsIG9wdGlvbi5zZWxlY3RlZCQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTnVtYmVyVmFsdWUgZXh0ZW5kcyBLZXJ2aVZhbHVlVHlwZTxudW1iZXI+IHtcclxuICAgIHB1YmxpYyB1bml0OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcXR5VW5pdEZyb206c3RyaW5nO1xyXG4gICAgcHVibGljIHF0eVVuaXRUbzpzdHJpbmcgPSBudWxsO1xyXG4gICAgcHVibGljIG1heFZhbHVlOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgbWluVmFsdWU6IG51bWJlcjtcclxuICAgIHB1YmxpYyBzcGFya2xpbmUkOiBCZWhhdmlvclN1YmplY3Q8bnVtYmVyW10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxudW1iZXJbXT4oW10pO1xyXG4gICAgcHVibGljIHJhbmdlczogVmFsdWVSYW5nZVtdID0gW107XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldERlZmF1bHRWYWx1ZSgpOm51bWJlcntcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBhbnksIGtlcnZpU2VydmljZTpLZXJ2aUJhc2VTZXJ2aWNlKSB7XHJcbiAgICAgICAgc3VwZXIobWVzc2FnZSwga2VydmlTZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLnVuaXQgPSBtZXNzYWdlLnVuaXQ7XHJcbiAgICAgICAgdGhpcy50eXBlTmFtZSA9IFwiTnVtYmVyXCI7XHJcbiAgICBcclxuICAgICAgICBcdFxyXG4gICAgICAgIHRoaXMucXR5VW5pdEZyb20gPSBtZXNzYWdlLnVuaXQ7XHJcbiAgICAgICAgaWYgKHRoaXMudW5pdCA9PSBcImNcIiAmJiBrZXJ2aVNlcnZpY2UuYXBwbGljYXRpb24kLnZhbHVlW1wiZGlzcGxheVwiXVtcInVuaXRfc3lzdGVtXCJdW1widGVtcGVyYXR1cmVcIl09PVwiRlwiKXtcclxuICAgICAgICAgICAgdGhpcy5xdHlVbml0RnJvbSA9IFwidGVtcENcIjtcclxuICAgICAgICAgICAgdGhpcy5xdHlVbml0VG8gPSBcInRlbXBGXCI7XHJcbiAgICAgICAgICAgIHRoaXMudW5pdCA9IFwiRlwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKHZhciByYW5nZSBvZiBtZXNzYWdlLnJhbmdlcyl7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnF0eVVuaXRUbyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgcSA9IG5ldyBRdHkocmFuZ2VbXCJzdGFydFwiXSwgdGhpcy5xdHlVbml0RnJvbSk7XHJcbiAgICAgICAgICAgICAgICByYW5nZVtcInN0YXJ0XCJdID0gcS50byh0aGlzLnF0eVVuaXRUbykuc2NhbGFyXHJcbiAgICAgICAgICAgICAgICB2YXIgcSA9IG5ldyBRdHkocmFuZ2VbXCJlbmRcIl0sIHRoaXMucXR5VW5pdEZyb20pO1xyXG4gICAgICAgICAgICAgICAgcmFuZ2VbXCJlbmRcIl0gPSBxLnRvKHRoaXMucXR5VW5pdFRvKS5zY2FsYXJcclxuICAgICAgICAgICAgICAgIHRoaXMucmFuZ2VzLnB1c2gobmV3IFZhbHVlUmFuZ2UocmFuZ2UpKTtcclxuICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJhbmdlcy5wdXNoKG5ldyBWYWx1ZVJhbmdlKHJhbmdlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLnF0eVVuaXRUbyAmJiBtZXNzYWdlLm1heFZhbHVlKXtcclxuICAgICAgICAgICAgdmFyIHEgPSBuZXcgUXR5KG1lc3NhZ2UubWF4VmFsdWUsIHRoaXMucXR5VW5pdEZyb20pO1xyXG4gICAgICAgICAgICB0aGlzLm1heFZhbHVlID0gcS50byh0aGlzLnF0eVVuaXRUbykuc2NhbGFyO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICB0aGlzLm1heFZhbHVlID0gbWVzc2FnZS5tYXhWYWx1ZTsgXHJcblxyXG4gICAgICAgIGlmICh0aGlzLnF0eVVuaXRUbyAmJiBtZXNzYWdlLm1pblZhbHVlKXtcclxuICAgICAgICAgICAgdmFyIHEgPSBuZXcgUXR5KG1lc3NhZ2UubWluVmFsdWUsIHRoaXMucXR5VW5pdEZyb20pO1xyXG4gICAgICAgICAgICB0aGlzLm1pblZhbHVlID0gcS50byh0aGlzLnF0eVVuaXRUbykuc2NhbGFyO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICB0aGlzLm1pblZhbHVlID0gbWVzc2FnZS5taW5WYWx1ZTsgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHNwbCA9IFtdXHJcbiAgICAgICAgZm9yKHZhciBzcHYgb2YgbWVzc2FnZS5zcGFya2xpbmUpe1xyXG4gICAgICAgICAgICBpZiAodGhpcy5xdHlVbml0VG8pe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzcHZcIiwgc3B2KTtcclxuICAgICAgICAgICAgICAgIHZhciBxID0gbmV3IFF0eShzcHYudmFsdWUsIHRoaXMucXR5VW5pdEZyb20pO1xyXG4gICAgICAgICAgICAgICAgLy9zcHYudmFsdWUgPSBxLnRvKHRoaXMucXR5VW5pdFRvKS5zY2FsYXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3BsLnB1c2goc3B2KVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNwYXJrbGluZSQubmV4dChzcGwpO1xyXG4gICAgICAgIHRoaXMuc2V0KG1lc3NhZ2UudmFsdWUsIGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQodiwgbm90aWZ5PXRydWUpe1xyXG4gICAgICAgIHZhciBuZXdWYWx1ZSA9IHY7XHJcbiAgICAgICAgaWYgKHRoaXMucXR5VW5pdFRvKXtcclxuICAgICAgICAgICAgdmFyIHEgPSBuZXcgUXR5KHYsIHRoaXMucXR5VW5pdEZyb20pO1xyXG4gICAgICAgICAgICBuZXdWYWx1ZSA9IHEudG8odGhpcy5xdHlVbml0VG8pLnNjYWxhcjtcclxuICAgICAgICB9IFxyXG5cclxuICAgICAgICB0aGlzLnZhbHVlJC5uZXh0KG5ld1ZhbHVlKTtcclxuICAgICAgICBpZiAobm90aWZ5KVxyXG4gICAgICAgICAgICB0aGlzLmtlcnZpU2VydmljZS5zcGluZS5zZW5kQ29tbWFuZCh0aGlzLmNvbW1hbmQsIHYpO1xyXG4gICAgICAgIHZhciBzcGw9dGhpcy5zcGFya2xpbmUkLnZhbHVlO1xyXG4gICAgICAgIHNwbC5wdXNoKG5ld1ZhbHVlKTtcclxuICAgICAgICBpZiAoc3BsLmxlbmd0aD4xMClcclxuICAgICAgICAgICAgIHNwbC5zaGlmdCgpO1xyXG4gICAgICAgIHRoaXMuc3BhcmtsaW5lJC5uZXh0KHNwbCk7ICBcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFN0cmluZ1ZhbHVlIGV4dGVuZHMgS2VydmlWYWx1ZVR5cGU8c3RyaW5nPiB7XHJcbiAgICBcclxuICAgIHByb3RlY3RlZCBnZXREZWZhdWx0VmFsdWUoKTpzdHJpbmd7XHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZTogYW55LCBrZXJ2aVNlcnZpY2U6S2VydmlCYXNlU2VydmljZSkge1xyXG4gICAgICAgIHN1cGVyKG1lc3NhZ2UsIGtlcnZpU2VydmljZSlcclxuICAgICAgICB0aGlzLnR5cGVOYW1lID0gXCJTdHJpbmdcIjtcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQm9vbGVhblZhbHVlIGV4dGVuZHMgS2VydmlWYWx1ZVR5cGU8Ym9vbGVhbj4ge1xyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZSwga2VydmlTZXJ2aWNlOktlcnZpQmFzZVNlcnZpY2UpIHtcclxuICAgICAgICBzdXBlcihtZXNzYWdlLCBrZXJ2aVNlcnZpY2UpXHJcbiAgICAgICAgdGhpcy50eXBlTmFtZSA9IFwiQm9vbGVhblwiO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBnZXREZWZhdWx0VmFsdWUoKTpib29sZWFue1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERhdGVUaW1lVmFsdWUgZXh0ZW5kcyBLZXJ2aVZhbHVlVHlwZTxEYXRlPiB7XHJcbiAgICBwdWJsaWMgc3ViVHlwZTogc3RyaW5nO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBrZXJ2aVNlcnZpY2U6S2VydmlCYXNlU2VydmljZSkge1xyXG4gICAgICAgIHN1cGVyKG1lc3NhZ2UsIGtlcnZpU2VydmljZSlcclxuICAgICAgICB0aGlzLnN1YlR5cGUgPSBtZXNzYWdlLmlucHV0VHlwZTtcclxuICAgICAgICB0aGlzLnR5cGVOYW1lID0gXCJEYXRlVGltZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBnZXREZWZhdWx0VmFsdWUoKTpEYXRle1xyXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSgpO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb2xvclZhbHVlIGV4dGVuZHMgS2VydmlWYWx1ZVR5cGU8c3RyaW5nPiB7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIGtlcnZpU2VydmljZTpLZXJ2aUJhc2VTZXJ2aWNlKSB7XHJcbiAgICAgICAgc3VwZXIobWVzc2FnZSwga2VydmlTZXJ2aWNlKVxyXG4gICAgICAgIHRoaXMudHlwZU5hbWUgPSBcIkNvbG9yXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldERlZmF1bHRWYWx1ZSgpOnN0cmluZ3tcclxuICAgICAgICByZXR1cm4gXCIjZmZmZmZmXCI7XHJcbiAgICB9ICAgIFxyXG59IiwiZXhwb3J0IGNsYXNzIENvbXBvbmVudFJlZntcclxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2Upe1xyXG4gICAgICAgIHRoaXMuaWQ9IG1lc3NhZ2UuaWQ7XHJcbiAgICB9XHJcbn0iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIFRpbSBXZW50emxhdVxyXG4vLyBMaWNlbnNlZCB1bmRlciBNSVRcclxuaW1wb3J0IHsgSUNvbXBvbmVudCwgRGFzaGJvYXJkTGluayB9IGZyb20gXCIuL0lDb21wb25lbnQubW9kZWxcIlxyXG5pbXBvcnQgeyBDb21wb25lbnRSZWYgfSBmcm9tIFwiLi9Db21wb25lbnRSZWZcIlxyXG5pbXBvcnQgeyBLZXJ2aUJhc2VTZXJ2aWNlIH0gZnJvbSAnLi4va2VydmktanMuc2VydmljZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sbGVyIGltcGxlbWVudHMgSUNvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgdHlwZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHZpc2libGU6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgY29tcG9uZW50VHlwZT1cImNvbnRyb2xsZXJcIlxyXG4gICAgcHVibGljIHVpOmFueSA9IHt9XHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGlkOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcGFyYW1ldGVyczogYW55O1xyXG4gICAgcHVibGljIGlucHV0czogSUNvbXBvbmVudFtdID0gW107XHJcbiAgICBwdWJsaWMgb3V0cHV0czogSUNvbXBvbmVudFtdID0gW107XHJcbiAgICBwdWJsaWMgYWN0aW9uczogSUNvbXBvbmVudFtdID0gW107XHJcbiAgICBwdWJsaWMgaW5wdXRSZWZlcmVuY2VzOiBDb21wb25lbnRSZWZbXSA9IFtdO1xyXG4gICAgcHVibGljIG91dHB1dFJlZmVyZW5jZXM6IENvbXBvbmVudFJlZltdID0gW107XHJcbiAgICBwdWJsaWMgYWN0aW9uc1JlZmVyZW5jZXM6IENvbXBvbmVudFJlZltdID0gW107XHJcbiAgICBwdWJsaWMgZGFzaGJvYXJkczogRGFzaGJvYXJkTGlua1tdPVtdO1xyXG4gICAgcHVibGljIHRlbXBsYXRlOnN0cmluZztcclxuICAgIHByaXZhdGUga2VydmlTZXJ2aWNlOktlcnZpQmFzZVNlcnZpY2VcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBhbnksIGtlcnZpU2VydmljZTpLZXJ2aUJhc2VTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5rZXJ2aVNlcnZpY2UgPSBrZXJ2aVNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5pZCA9IG1lc3NhZ2UuaWQ7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbWVzc2FnZS5uYW1lO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IG1lc3NhZ2UudHlwZTtcclxuICAgICAgICB0aGlzLnVpID0gbWVzc2FnZS51aTtcclxuICAgICAgICB0aGlzLnZpc2libGUgPSBtZXNzYWdlLnZpc2libGU7XHJcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzID0gbWVzc2FnZS5wYXJhbWV0ZXJzO1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGU9bWVzc2FnZS50ZW1wbGF0ZTtcclxuICAgICAgICBmb3IodmFyIHJlZiBvZiBtZXNzYWdlLmlucHV0cyl7XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXRSZWZlcmVuY2VzLnB1c2goIG5ldyBDb21wb25lbnRSZWYocmVmKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IodmFyIHJlZiBvZiBtZXNzYWdlLm91dHB1dHMpe1xyXG4gICAgICAgICAgICB0aGlzLm91dHB1dFJlZmVyZW5jZXMucHVzaCggbmV3IENvbXBvbmVudFJlZihyZWYpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcih2YXIgcmVmIG9mIG1lc3NhZ2UuYWN0aW9ucyl7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uc1JlZmVyZW5jZXMucHVzaCggbmV3IENvbXBvbmVudFJlZihyZWYpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGRhc2hib2FyZExpbmsgb2YgbWVzc2FnZS5kYXNoYm9hcmRMaW5rcyl7XHJcbiAgICAgICAgICAgIHRoaXMuZGFzaGJvYXJkcy5wdXNoKCBuZXcgRGFzaGJvYXJkTGluayh0aGlzLCBkYXNoYm9hcmRMaW5rKSk7IFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVSZWZlcmVuY2VzKCl7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5wdXRzLmxlbmd0aD09MCl7XHJcbiAgICAgICAgICAgIGZvcih2YXIgcmVmIG9mIHRoaXMuaW5wdXRSZWZlcmVuY2VzKXtcclxuICAgICAgICAgICAgICAgIHZhciBjb21wb25lbnQgPSB0aGlzLmtlcnZpU2VydmljZS5nZXRDb21wb25lbnQocmVmLmlkKVxyXG4gICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0cy5wdXNoKGNvbXBvbmVudClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5vdXRwdXRzLmxlbmd0aD09MCl7XHJcbiAgICAgICAgICAgIGZvcih2YXIgcmVmIG9mIHRoaXMub3V0cHV0UmVmZXJlbmNlcyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgY29tcG9uZW50ID0gdGhpcy5rZXJ2aVNlcnZpY2UuZ2V0Q29tcG9uZW50KHJlZi5pZClcclxuICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vdXRwdXRzLnB1c2goY29tcG9uZW50KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmFjdGlvbnMubGVuZ3RoPT0wKXtcclxuICAgICAgICAgICAgZm9yKHZhciByZWYgb2YgdGhpcy5hY3Rpb25zUmVmZXJlbmNlcyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgY29tcG9uZW50ID0gdGhpcy5rZXJ2aVNlcnZpY2UuZ2V0Q29tcG9uZW50KHJlZi5pZClcclxuICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3Rpb25zLnB1c2goY29tcG9uZW50KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJlbW92ZVJlZmVyZW5jZXMoY29tcG9uZW50czpJQ29tcG9uZW50W10pe307XHJcbiAgICByZWxvYWQoY29tcG9uZW50OklDb21wb25lbnQpe307XHJcbn0iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIFRpbSBXZW50emxhdVxyXG4vLyBMaWNlbnNlZCB1bmRlciBNSVRcclxuXHJcbmltcG9ydCB7IElDb21wb25lbnQsIERhc2hib2FyZExpbmsgfSBmcm9tICcuL0lDb21wb25lbnQubW9kZWwnXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIERhc2hib2FyZFNpemVze1xyXG4gICAgcHVibGljIHZhbHVlV2lkdGg6c3RyaW5nID1cIjNyZW1cIjtcclxuICAgIHB1YmxpYyBidXR0b25XaWR0aDpzdHJpbmcgPSBcIjI1cHhcIjtcclxuICAgIHB1YmxpYyBidXR0b25IZWlnaHQ6c3RyaW5nID0gXCJcIjtcclxuICAgIHB1YmxpYyBzd2l0Y2hXaWR0aDpzdHJpbmcgPSBcIjI1cHhcIjtcclxuICAgIHB1YmxpYyBzd2l0Y2hIZWlnaHQ6c3RyaW5nID0gXCIyNXB4XCI7XHJcbiAgICBwdWJsaWMgZ2F1Z2VXaWR0aDpzdHJpbmcgPSBcIjEwMHB4XCI7XHJcbiAgICBwdWJsaWMgZ2F1Z2VIZWlnaHQ6c3RyaW5nID0gXCIyMDBweFwiO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkTWVzc2FnZU1vZGVse1xyXG4gICAgcHVibGljIHNvdXJjZUlkOnN0cmluZztcclxuICAgIHB1YmxpYyBzb3VyY2VOYW1lOnN0cmluZztcclxuICAgIHB1YmxpYyBhcmVhOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgbGV2ZWw6IG51bWJlcjtcclxuICAgIHB1YmxpYyB0aW1lc3RhbXA6IERhdGU7XHJcbiAgICBwdWJsaWMgdG9waWM6c3RyaW5nO1xyXG4gICAgcHVibGljIGJvZHk6c3RyaW5nO1xyXG4gICAgcHVibGljIHR5cGU6c3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2Upe1xyXG4gICAgICAgIHRoaXMudGltZXN0YW1wID0gbmV3IERhdGUobWVzc2FnZS50aW1lc3RhbXAqMTAwMCk7XHJcbiAgICAgICAgdGhpcy50b3BpYyA9IG1lc3NhZ2UudG9waWM7XHJcbiAgICAgICAgdGhpcy5ib2R5ID0gbWVzc2FnZS5ib2R5O1xyXG4gICAgICAgIHRoaXMudHlwZSA9IG1lc3NhZ2UudHlwZTtcclxuICAgICAgICB0aGlzLnNvdXJjZUlkID0gbWVzc2FnZS5zb3VyY2VfaWQ7XHJcbiAgICAgICAgdGhpcy5zb3VyY2VOYW1lID0gbWVzc2FnZS5zb3VyY2VfbmFtZTtcclxuICAgICAgICB0aGlzLmFyZWEgPSBtZXNzYWdlLmFyZWE7XHJcbiAgICAgICAgdGhpcy5sZXZlbCA9IG1lc3NhZ2UubGV2ZWw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRQYW5lbENvbXBvbmVudHtcclxuICAgIHB1YmxpYyBjb21wb25lbnQ6SUNvbXBvbmVudDtcclxuICAgIHB1YmxpYyBjb21wb25lbnRJZDpzdHJpbmc7XHJcbiAgICBwdWJsaWMgbGlua0lkOmFueTtcclxuICAgIHB1YmxpYyBwYXJhbWV0ZXJzOmFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1lc3NhZ2U6IGFueSl7XHJcbiAgICAgICAgdGhpcy5saW5rSWQgPSBtZXNzYWdlLmxpbmtJZDtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudElkID0gbWVzc2FnZS5jb21wb25lbnRJZDtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IG1lc3NhZ2UuY29tcG9uZW50O1xyXG4gICAgICAgIHRoaXMucGFyYW1ldGVycyA9IG1lc3NhZ2UucGFyYW1ldGVycztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERhc2hib2FyZFBhbmVsUGFyYW1ldGVyc3tcclxuICAgIHB1YmxpYyB0aXRsZTpzdHJpbmcgPSBudWxsO1xyXG4gICAgcHVibGljIHdpZHRoOnN0cmluZyA9IG51bGw7XHJcbiAgICBwdWJsaWMgaGVpZ2h0OnN0cmluZyA9IG51bGw7XHJcbiAgICBwdWJsaWMgdHlwZTpzdHJpbmcgPSBudWxsO1xyXG4gICAgcHVibGljIHVzZXJMb2c6IGJvb2xlYW4gPSBudWxsO1xyXG4gICAgcHVibGljIGxvZ0xlbmd0aDpudW1iZXIgPSA1O1xyXG4gICAgcHVibGljIGxheW91dDpzdHJpbmcgPSBcInJvd1wiO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlUGFyYW1ldGVycyl7XHJcbiAgICAgICAgdGhpcy50aXRsZT1tZXNzYWdlUGFyYW1ldGVycy5sYWJlbDtcclxuICAgICAgICB0aGlzLmhlaWdodD0gdGhpcy5jYWxjU2l6ZShtZXNzYWdlUGFyYW1ldGVycy5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMud2lkdGg9dGhpcy5jYWxjU2l6ZShtZXNzYWdlUGFyYW1ldGVycy53aWR0aCk7XHJcbiAgICAgICAgdGhpcy51c2VyTG9nPW1lc3NhZ2VQYXJhbWV0ZXJzLnVzZXJMb2c7XHJcbiAgICAgICAgdGhpcy5sb2dMZW5ndGggPSBtZXNzYWdlUGFyYW1ldGVycy5sb2dMZW5ndGg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKG1lc3NhZ2VQYXJhbWV0ZXJzLnR5cGUpXHJcbiAgICAgICAgICAgIHRoaXMudHlwZT1tZXNzYWdlUGFyYW1ldGVycy50eXBlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChtZXNzYWdlUGFyYW1ldGVycy5sYXlvdXQpXHJcbiAgICAgICAgICAgIHRoaXMubGF5b3V0PW1lc3NhZ2VQYXJhbWV0ZXJzLmxheW91dDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNhbGNTaXplKHZhbHVlKXtcclxuICAgICAgICBpZiAodmFsdWU9PW51bGwpXHJcbiAgICAgICAgICAgIHJldHVybiBcIlwiXHJcbiAgICAgICAgZWxzZSBpZiAodmFsdWU9PT1cIlwiKVxyXG4gICAgICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgICAgIGVsc2UgaWYgKGlzTmFOKHZhbHVlKSl7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgaWYgKHZhbHVlPjApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgKyBcIiVcIjtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRQYW5lbCB7XHJcbiAgICBwdWJsaWMgaWQ6c3RyaW5nO1xyXG4gICAgcHVibGljIG5hbWU6c3RyaW5nO1xyXG4gICAgcHVibGljIHBhcmFtZXRlcnM6IERhc2hib2FyZFBhbmVsUGFyYW1ldGVycztcclxuICAgIHB1YmxpYyBjb21wb25lbnRzOiBEYXNoYm9hcmRQYW5lbENvbXBvbmVudFtdPVtdO1xyXG4gICAgcHVibGljIGRhc2hib2FyZDogRGFzaGJvYXJkO1xyXG4gICAgcHVibGljIHR5cGU6c3RyaW5nO1xyXG4gICAgcHVibGljIHN1YlBhbmVsczogRGFzaGJvYXJkUGFuZWxbXSA9IFtdO1xyXG4gICAgcHVibGljIGhhc09ubHlHcm91cFBhbmVsczpib29sZWFuID0gdHJ1ZTtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IgKGRhc2hib2FyZCwgbWVzc2FnZVBhbmVsKXtcclxuICAgICAgICB0aGlzLmRhc2hib2FyZD1kYXNoYm9hcmQ7XHJcbiAgICAgICAgdGhpcy5pZD1tZXNzYWdlUGFuZWwuaWQ7XHJcbiAgICAgICAgdGhpcy5uYW1lPW1lc3NhZ2VQYW5lbC5uYW1lO1xyXG4gICAgICAgIHRoaXMudHlwZT1tZXNzYWdlUGFuZWwudHlwZTtcclxuICAgICAgICB0aGlzLnBhcmFtZXRlcnM9bmV3IERhc2hib2FyZFBhbmVsUGFyYW1ldGVycyhtZXNzYWdlUGFuZWwudWlQYXJhbWV0ZXJzKTtcclxuICAgICAgICAvKmlmIChtZXNzYWdlUGFuZWwuY29tcG9uZW50cylcclxuICAgICAgICAgICAgZm9yKHZhciBjb21wb25lbnRSZWYgb2YgbWVzc2FnZVBhbmVsLmNvbXBvbmVudHMpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzLnB1c2gobmV3IERhc2hib2FyZFBhbmVsQ29tcG9uZW50TW9kZWwoY29tcG9uZW50UmVmKSlcclxuICAgICAgICAgICAgfSovXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKG1lc3NhZ2VQYW5lbC5wYW5lbHMpe1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwic3BhXCIsbWVzc2FnZVBhbmVsLnBhbmVscyk7XHJcbiAgICAgICAgICAgIGZvcih2YXIgc3ViTWVzc2FnZVBhbmVsIG9mIG1lc3NhZ2VQYW5lbC5wYW5lbHMpe1xyXG4gICAgICAgICAgICAgICAgdmFyIHBhbmVsPW5ldyBEYXNoYm9hcmRQYW5lbCh0aGlzLCBzdWJNZXNzYWdlUGFuZWwpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJQYW5lbHMucHVzaChwYW5lbCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFuZWwudHlwZSAhPT0gXCJncm91cFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFzT25seUdyb3VwUGFuZWxzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbG9hZChzb3VyY2U6RGFzaGJvYXJkUGFuZWwpe1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJybFwiLCB0aGlzKTtcclxuICAgICAgICBmb3IodmFyIHN1YlBhbmVsIG9mIHNvdXJjZS5zdWJQYW5lbHMpe1xyXG4gICAgICAgICAgICB0aGlzLnJlbG9hZChzdWJQYW5lbClcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKHZhciBzb3VyY2VDb21wb25lbnQgb2Ygc291cmNlLmNvbXBvbmVudHMpe1xyXG4gICAgICAgICAgICB2YXIgZm91bmQ9ZmFsc2U7XHJcbiAgICAgICAgICAgIGZvcih2YXIgY29tcG9uZW50IG9mIHRoaXMuY29tcG9uZW50cyl7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50LmNvbXBvbmVudElkID09IHNvdXJjZUNvbXBvbmVudC5jb21wb25lbnRJZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgZm91bmQ9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWZvdW5kKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50cy5wdXNoKHNvdXJjZUNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGRlbGV0ZUNvbXBvbmVudHM6RGFzaGJvYXJkUGFuZWxDb21wb25lbnRbXSA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGNvbXBvbmVudCBvZiB0aGlzLmNvbXBvbmVudHMpe1xyXG4gICAgICAgICAgICB2YXIgZm91bmQ9ZmFsc2U7XHJcbiAgICAgICAgICAgIGZvcih2YXIgc291cmNlQ29tcG9uZW50IG9mIHNvdXJjZS5jb21wb25lbnRzKXtcclxuICAgICAgICAgICAgICAgIGlmIChzb3VyY2VDb21wb25lbnQuY29tcG9uZW50SWQgPT0gY29tcG9uZW50LmNvbXBvbmVudElkKXtcclxuICAgICAgICAgICAgICAgICAgICBmb3VuZD10cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghZm91bmQpXHJcbiAgICAgICAgICAgICAgICBkZWxldGVDb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImRzY1wiLGRlbGV0ZUNvbXBvbmVudHMpO1xyXG4gICAgICAgIGZvcih2YXIgY29tcG9uZW50IG9mIGRlbGV0ZUNvbXBvbmVudHMpe1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHMuc3BsaWNlKCB0aGlzLmNvbXBvbmVudHMuaW5kZXhPZihjb21wb25lbnQpLCAxICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkQmFja2dyb3VuZE1vZGVse1xyXG4gICAgcHVibGljIHR5cGU6c3RyaW5nO1xyXG4gICAgcHVibGljIGNhbWVyYUlkOnN0cmluZztcclxuICAgIHB1YmxpYyBpbWFnZTpzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZSl7XHJcbiAgICAgICAgdGhpcy50eXBlPW1lc3NhZ2UudHlwZTtcclxuICAgICAgICB0aGlzLmNhbWVyYUlkPW1lc3NhZ2UuY2FtZXJhSWRcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERhc2hib2FyZCBpbXBsZW1lbnRzIElDb21wb25lbnR7XHJcbiAgICBwdWJsaWMgaWQ6c3RyaW5nO1xyXG4gICAgcHVibGljIG5hbWU6c3RyaW5nO1xyXG4gICAgcHVibGljIGNvbXBvbmVudFR5cGU6c3RyaW5nO1xyXG4gICAgcHVibGljIHR5cGU6c3RyaW5nO1xyXG4gICAgcHVibGljIGlzRGVmYXVsdDpCb29sZWFuO1xyXG4gICAgcHVibGljIHRlbXBsYXRlOnN0cmluZztcclxuICAgIHB1YmxpYyBwYW5lbHM6RGFzaGJvYXJkUGFuZWxbXTtcclxuICAgIHB1YmxpYyBzeXNQYW5lbHM6RGFzaGJvYXJkUGFuZWxbXTtcclxuICAgIHB1YmxpYyBoZWFkZXJQYW5lbDogRGFzaGJvYXJkUGFuZWw9bnVsbDtcclxuICAgIHB1YmxpYyBmb290ZXJDZW50ZXJQYW5lbDogRGFzaGJvYXJkUGFuZWw9bnVsbDtcclxuICAgIHB1YmxpYyBmb290ZXJMZWZ0UGFuZWw6IERhc2hib2FyZFBhbmVsPW51bGw7XHJcbiAgICBwdWJsaWMgZm9vdGVyUmlnaHRQYW5lbDogRGFzaGJvYXJkUGFuZWw9bnVsbDtcclxuICAgIHB1YmxpYyBzeXNQYW5lbDogRGFzaGJvYXJkUGFuZWw9bnVsbDtcclxuICAgIHB1YmxpYyBiYWNrZ3JvdW5kUGFuZWw6IERhc2hib2FyZFBhbmVsPW51bGw7XHJcbiAgICBwdWJsaWMgY29udHJvbGxlclBhbmVsOiBEYXNoYm9hcmRQYW5lbD1udWxsO1xyXG4gICAgcHVibGljIExlZnRQYWRYUGFuZWw6IERhc2hib2FyZFBhbmVsPW51bGw7XHJcbiAgICBwdWJsaWMgTGVmdFBhZFlQYW5lbDogRGFzaGJvYXJkUGFuZWw9bnVsbDtcclxuICAgIHB1YmxpYyBSaWdodFBhZFhQYW5lbDogRGFzaGJvYXJkUGFuZWw9bnVsbDtcclxuICAgIHB1YmxpYyBSaWdodFBhZFlQYW5lbDogRGFzaGJvYXJkUGFuZWw9bnVsbDtcclxuICAgIC8vcHVibGljIGJhY2tncm91bmQ6IERhc2hib2FyZEJhY2tncm91bmRNb2RlbD1udWxsO1xyXG4gICAgcHVibGljIHVuaXRTaXplOiBudW1iZXI7XHJcbiAgICBcclxuICAgIC8vbm90IHVzZWQgaW4gZGFzaGJvYXJkc1xyXG4gICAgcHVibGljIHZpc2libGU6Ym9vbGVhbjtcclxuICAgIHB1YmxpYyB1aTphbnk7XHJcbiAgICBwdWJsaWMgZGFzaGJvYXJkczphbnlbXSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgY3VycmVudFBhbmVsOkRhc2hib2FyZFBhbmVsID0gbnVsbDtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZSl7XHJcbiAgICAgICAgdGhpcy5pZD1tZXNzYWdlLmlkO1xyXG4gICAgICAgIHRoaXMubmFtZT1tZXNzYWdlLm5hbWU7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRUeXBlPVwiZGFzaGJvYXJkXCI7XHJcbiAgICAgICAgdGhpcy50eXBlPW1lc3NhZ2UudHlwZTtcclxuICAgICAgICB0aGlzLmlzRGVmYXVsdD1tZXNzYWdlLmlzRGVmYXVsdDtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlPW1lc3NhZ2UudGVtcGxhdGU7XHJcbiAgICAgICAgdGhpcy51bml0U2l6ZT1tZXNzYWdlLnVuaXRTaXplO1xyXG4gICAgICAgIC8vdGhpcy5iYWNrZ3JvdW5kPW5ldyBEYXNoYm9hcmRCYWNrZ3JvdW5kTW9kZWwobWVzc2FnZS5iYWNrZ3JvdW5kKTtcclxuICAgICAgICB0aGlzLnBhbmVscz1bXTtcclxuICAgICAgICB0aGlzLnN5c1BhbmVscz1bXTtcclxuICAgICAgICBpZiAoIXRoaXMudGVtcGxhdGUpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZm9yIChsZXQgbWVzc2FnZVBhbmVsIG9mIG1lc3NhZ2Uuc2VjdGlvbnMpe1xyXG4gICAgICAgICAgICAgICAgaWYgKCFtZXNzYWdlUGFuZWwpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGFzaGJvYXJkIHdpdGggbnVsbCBwYW5lbFwiLCB0aGlzLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBwYW5lbCA9IG5ldyBEYXNoYm9hcmRQYW5lbCh0aGlzLCBtZXNzYWdlUGFuZWwpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHN5c1BhbmVsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChwYW5lbC5pZD09XCJoZWFkZXJfY2VudGVyXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWFkZXJQYW5lbD1wYW5lbDtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBhbmVsLmlkPT1cImZvb3Rlcl9sZWZ0XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb290ZXJMZWZ0UGFuZWw9cGFuZWw7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwYW5lbC5pZD09XCJmb290ZXJfY2VudGVyXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb290ZXJDZW50ZXJQYW5lbD1wYW5lbDtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBhbmVsLmlkPT1cImZvb3Rlcl9yaWdodFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9vdGVyUmlnaHRQYW5lbD1wYW5lbDtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBhbmVsLmlkPT1cImhlYWRlcl9yaWdodFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3lzUGFuZWw9cGFuZWw7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwYW5lbC5pZD09XCJjb250cm9sbGVyc1wiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbGxlclBhbmVsPXBhbmVsO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocGFuZWwuaWQ9PVwiYmFja2dyb3VuZFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZFBhbmVsPXBhbmVsO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocGFuZWwuaWQ9PVwibGVmdF9wYWRfeFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuTGVmdFBhZFhQYW5lbD1wYW5lbDtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBhbmVsLmlkPT1cImxlZnRfcGFkX3lcIilcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkxlZnRQYWRZUGFuZWw9cGFuZWw7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwYW5lbC5pZD09XCJyaWdodF9wYWRfeFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUmlnaHRQYWRYUGFuZWw9cGFuZWw7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwYW5lbC5pZD09XCJyaWdodF9wYWRfeVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUmlnaHRQYWRZUGFuZWw9cGFuZWw7XHJcbiAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHN5c1BhbmVsPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYW5lbC50eXBlIT1cImdyb3VwXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmN1cnJlbnRQYW5lbD09bnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQYW5lbCA9IG5ldyBEYXNoYm9hcmRQYW5lbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOm51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6XCJncm91cFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29tcG9uZW50c1wiOltdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGFuZWxzXCI6W10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aVBhcmFtZXRlcnNcIjp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjpcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6MTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidXNlckxvZ1wiOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxvZ0xlbmd0aFwiOjBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQYW5lbC5zdWJQYW5lbHMucHVzaChwYW5lbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhbmVscy5wdXNoKHRoaXMuY3VycmVudFBhbmVsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBhbmVsLnN1YlBhbmVscy5wdXNoKHBhbmVsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFuZWxzLnB1c2gocGFuZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQYW5lbD1udWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChzeXNQYW5lbClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN5c1BhbmVscy5wdXNoKHBhbmVsKTsgICAgICBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRQYW5lbCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQYW5lbCA9IG5ldyBEYXNoYm9hcmRQYW5lbChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOm51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjpcImdyb3VwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29tcG9uZW50c1wiOltdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhbmVsc1wiOltdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVpUGFyYW1ldGVyc1wiOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjpcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOjEwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidXNlckxvZ1wiOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsb2dMZW5ndGhcIjowXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLmN1cnJlbnRQYW5lbC5zdWJQYW5lbHMucHVzaChwYW5lbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYW5lbHMucHVzaCh0aGlzLmN1cnJlbnRQYW5lbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaXNFbXB0eSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhbmVscy5sZW5ndGggPT0gMDtcclxuICAgIH1cclxuICAgIHJlbW92ZVJlZmVyZW5jZXMoZGVsZXRlQ29tcG9uZW50czpJQ29tcG9uZW50W10pe307XHJcbiAgICB1cGRhdGVSZWZlcmVuY2VzKCl7fTtcclxuICAgIHJlbG9hZChjb21wb25lbnQ6SUNvbXBvbmVudCl7XHJcbiAgICAgICAgdmFyIHNvdXJjZSA9IGNvbXBvbmVudCBhcyBEYXNoYm9hcmQ7XHJcbiAgICAgICAgaWYgKCF0aGlzLmJhY2tncm91bmRQYW5lbCAmJiBzb3VyY2UuYmFja2dyb3VuZFBhbmVsKVxyXG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmRQYW5lbD1zb3VyY2UuYmFja2dyb3VuZFBhbmVsO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuYmFja2dyb3VuZFBhbmVsICYmICFzb3VyY2UuYmFja2dyb3VuZFBhbmVsKVxyXG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmRQYW5lbCA9IG51bGxcclxuICAgICAgICBlbHNlIGlmICh0aGlzLmJhY2tncm91bmRQYW5lbClcclxuICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kUGFuZWwucmVsb2FkKHNvdXJjZS5iYWNrZ3JvdW5kUGFuZWwpXHJcblxyXG4gICAgICAgIGlmICghdGhpcy5mb290ZXJMZWZ0UGFuZWwgJiYgc291cmNlLmZvb3RlckxlZnRQYW5lbClcclxuICAgICAgICAgICAgdGhpcy5mb290ZXJMZWZ0UGFuZWw9c291cmNlLmZvb3RlckxlZnRQYW5lbDtcclxuICAgICAgICBlbHNlIGlmICh0aGlzLmZvb3RlckxlZnRQYW5lbCAmJiAhc291cmNlLmZvb3RlckxlZnRQYW5lbClcclxuICAgICAgICAgICAgdGhpcy5mb290ZXJMZWZ0UGFuZWwgPSBudWxsXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5mb290ZXJMZWZ0UGFuZWwpXHJcbiAgICAgICAgICAgIHRoaXMuZm9vdGVyTGVmdFBhbmVsLnJlbG9hZChzb3VyY2UuZm9vdGVyTGVmdFBhbmVsKVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuZm9vdGVyUmlnaHRQYW5lbCAmJiBzb3VyY2UuZm9vdGVyUmlnaHRQYW5lbClcclxuICAgICAgICAgICAgdGhpcy5mb290ZXJSaWdodFBhbmVsPXNvdXJjZS5mb290ZXJSaWdodFBhbmVsO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZm9vdGVyUmlnaHRQYW5lbCAmJiAhc291cmNlLmZvb3RlclJpZ2h0UGFuZWwpXHJcbiAgICAgICAgICAgIHRoaXMuZm9vdGVyUmlnaHRQYW5lbCA9IG51bGxcclxuICAgICAgICBlbHNlIGlmICh0aGlzLmZvb3RlclJpZ2h0UGFuZWwpXHJcbiAgICAgICAgICAgIHRoaXMuZm9vdGVyUmlnaHRQYW5lbC5yZWxvYWQoc291cmNlLmZvb3RlclJpZ2h0UGFuZWwpXHJcblxyXG4gICAgICAgIGlmICghdGhpcy5mb290ZXJDZW50ZXJQYW5lbCAmJiBzb3VyY2UuZm9vdGVyQ2VudGVyUGFuZWwpXHJcbiAgICAgICAgICAgIHRoaXMuZm9vdGVyQ2VudGVyUGFuZWw9c291cmNlLmZvb3RlckNlbnRlclBhbmVsO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZm9vdGVyQ2VudGVyUGFuZWwgJiYgIXNvdXJjZS5mb290ZXJDZW50ZXJQYW5lbClcclxuICAgICAgICAgICAgdGhpcy5mb290ZXJDZW50ZXJQYW5lbCA9IG51bGxcclxuICAgICAgICBlbHNlIGlmICh0aGlzLmZvb3RlckNlbnRlclBhbmVsKVxyXG4gICAgICAgICAgICB0aGlzLmZvb3RlckNlbnRlclBhbmVsLnJlbG9hZChzb3VyY2UuZm9vdGVyQ2VudGVyUGFuZWwpXHJcblxyXG4gICAgICAgIC8qaWYgKCF0aGlzLmhlYWRlclBhbmVsICYmIHNvdXJjZS5oZWFkZXJQYW5lbClcclxuICAgICAgICAgICAgdGhpcy5oZWFkZXJQYW5lbD1zb3VyY2UuaGVhZGVyUGFuZWw7XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5oZWFkZXJQYW5lbCAmJiAhc291cmNlLmhlYWRlclBhbmVsKVxyXG4gICAgICAgICAgICB0aGlzLmhlYWRlclBhbmVsID0gbnVsbFxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaGVhZGVyUGFuZWwpXHJcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyUGFuZWwucmVsb2FkKHNvdXJjZS5oZWFkZXJQYW5lbCkqL1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuc3lzUGFuZWwgJiYgc291cmNlLnN5c1BhbmVsKVxyXG4gICAgICAgICAgICB0aGlzLnN5c1BhbmVsPXNvdXJjZS5zeXNQYW5lbDtcclxuICAgICAgICBlbHNlIGlmICh0aGlzLnN5c1BhbmVsICYmICFzb3VyY2Uuc3lzUGFuZWwpXHJcbiAgICAgICAgICAgIHRoaXMuc3lzUGFuZWwgPSBudWxsXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zeXNQYW5lbClcclxuICAgICAgICAgICAgdGhpcy5zeXNQYW5lbC5yZWxvYWQoc291cmNlLnN5c1BhbmVsKVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuTGVmdFBhZFhQYW5lbCAmJiBzb3VyY2UuTGVmdFBhZFhQYW5lbClcclxuICAgICAgICAgICAgdGhpcy5MZWZ0UGFkWFBhbmVsPXNvdXJjZS5MZWZ0UGFkWFBhbmVsO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuTGVmdFBhZFhQYW5lbCAmJiAhc291cmNlLkxlZnRQYWRYUGFuZWwpXHJcbiAgICAgICAgICAgIHRoaXMuTGVmdFBhZFhQYW5lbCA9IG51bGxcclxuICAgICAgICBlbHNlIGlmICh0aGlzLkxlZnRQYWRYUGFuZWwpXHJcbiAgICAgICAgICAgIHRoaXMuTGVmdFBhZFhQYW5lbC5yZWxvYWQoc291cmNlLkxlZnRQYWRYUGFuZWwpXHJcblxyXG4gICAgICAgIGlmICghdGhpcy5MZWZ0UGFkWVBhbmVsICYmIHNvdXJjZS5MZWZ0UGFkWVBhbmVsKVxyXG4gICAgICAgICAgICB0aGlzLkxlZnRQYWRZUGFuZWw9c291cmNlLkxlZnRQYWRZUGFuZWw7XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5MZWZ0UGFkWVBhbmVsICYmICFzb3VyY2UuTGVmdFBhZFlQYW5lbClcclxuICAgICAgICAgICAgdGhpcy5MZWZ0UGFkWVBhbmVsID0gbnVsbFxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuTGVmdFBhZFlQYW5lbClcclxuICAgICAgICAgICAgdGhpcy5MZWZ0UGFkWVBhbmVsLnJlbG9hZChzb3VyY2UuTGVmdFBhZFlQYW5lbClcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLlJpZ2h0UGFkWFBhbmVsICYmIHNvdXJjZS5SaWdodFBhZFhQYW5lbClcclxuICAgICAgICAgICAgdGhpcy5SaWdodFBhZFhQYW5lbD1zb3VyY2UuUmlnaHRQYWRYUGFuZWw7XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5SaWdodFBhZFhQYW5lbCAmJiAhc291cmNlLlJpZ2h0UGFkWFBhbmVsKVxyXG4gICAgICAgICAgICB0aGlzLlJpZ2h0UGFkWFBhbmVsID0gbnVsbFxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuUmlnaHRQYWRYUGFuZWwpXHJcbiAgICAgICAgICAgIHRoaXMuUmlnaHRQYWRYUGFuZWwucmVsb2FkKHNvdXJjZS5SaWdodFBhZFhQYW5lbClcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLlJpZ2h0UGFkWVBhbmVsICYmIHNvdXJjZS5SaWdodFBhZFlQYW5lbClcclxuICAgICAgICAgICAgdGhpcy5SaWdodFBhZFlQYW5lbD1zb3VyY2UuUmlnaHRQYWRZUGFuZWw7XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5SaWdodFBhZFlQYW5lbCAmJiAhc291cmNlLlJpZ2h0UGFkWVBhbmVsKVxyXG4gICAgICAgICAgICB0aGlzLlJpZ2h0UGFkWVBhbmVsID0gbnVsbFxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuUmlnaHRQYWRZUGFuZWwpXHJcbiAgICAgICAgICAgIHRoaXMuUmlnaHRQYWRZUGFuZWwucmVsb2FkKHNvdXJjZS5SaWdodFBhZFlQYW5lbClcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbnRyb2xsZXJQYW5lbCAmJiBzb3VyY2UuY29udHJvbGxlclBhbmVsKVxyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXJQYW5lbD1zb3VyY2UuY29udHJvbGxlclBhbmVsO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuY29udHJvbGxlclBhbmVsICYmICFzb3VyY2UuY29udHJvbGxlclBhbmVsKVxyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXJQYW5lbCA9IG51bGxcclxuICAgICAgICBlbHNlIGlmICh0aGlzLmNvbnRyb2xsZXJQYW5lbClcclxuICAgICAgICAgICAgdGhpcy5jb250cm9sbGVyUGFuZWwucmVsb2FkKHNvdXJjZS5jb250cm9sbGVyUGFuZWwpXHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgZ2V0RGFzaGJvYXJkUGFuZWxCeUlkKGlkOnN0cmluZywgcGFuZWxzOkRhc2hib2FyZFBhbmVsW10pe1xyXG4gICAgICAgIGZvcihsZXQgcGFuZWwgb2YgcGFuZWxzKXtcclxuICAgICAgICAgICAgaWYgKHBhbmVsLmlkID09IGlkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhbmVsOyBcclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHZhciByZXMgPSB0aGlzLmdldERhc2hib2FyZFBhbmVsQnlJZChpZCwgcGFuZWwuc3ViUGFuZWxzKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZERhc2hib2FyZExpbmsobGluazpEYXNoYm9hcmRMaW5rKXtcclxuICAgICAgICBpZiAobGluay5kYXNoYm9hcmRJZCA9PSBcIipcIiB8fCBsaW5rLmRhc2hib2FyZElkID09IHRoaXMuaWQgfHwgKGxpbmsuZGFzaGJvYXJkSWQ9PVwiKipkZWZhdWx0KipcIiAmJiB0aGlzLmlzRGVmYXVsdCkpe1xyXG4gICAgICAgICAgICB2YXIgcGFuZWxGb3VuZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB2YXIgcGFuZWwgPSB0aGlzLmdldERhc2hib2FyZFBhbmVsQnlJZChsaW5rLnBhbmVsSWQsIHRoaXMucGFuZWxzKTtcclxuICAgICAgICAgICAgaWYgKCFwYW5lbClcclxuICAgICAgICAgICAgICAgIHBhbmVsID0gdGhpcy5nZXREYXNoYm9hcmRQYW5lbEJ5SWQobGluay5wYW5lbElkLCB0aGlzLnN5c1BhbmVscyk7XHJcbiAgICAgICAgICAgIGlmIChwYW5lbCl7XHJcbiAgICAgICAgICAgICAgICBwYW5lbC5jb21wb25lbnRzLnB1c2gobmV3IERhc2hib2FyZFBhbmVsQ29tcG9uZW50KGxpbmspKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWRoXCIsbGluayk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWVzc2FnZVBhbmVsID17XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6bGluay5wYW5lbElkLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6bGluay5wYW5lbE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTpcInBhbmVsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdWlQYXJhbWV0ZXJzOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOlwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjowLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidXNlckxvZ1wiOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxvZ0xlbmd0aFwiOjBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3UGFuZWwgPSBuZXcgRGFzaGJvYXJkUGFuZWwodGhpcywgbWVzc2FnZVBhbmVsKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBhbmVsLnN1YlBhbmVscy5wdXNoKG5ld1BhbmVsKTtcclxuICAgICAgICAgICAgICAgIG5ld1BhbmVsLmNvbXBvbmVudHMucHVzaChuZXcgRGFzaGJvYXJkUGFuZWxDb21wb25lbnQobGluaykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCBUaW0gV2VudHpsYXVcclxuLy8gTGljZW5zZWQgdW5kZXIgTUlUXHJcblxyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgSUNvbXBvbmVudCwgRGFzaGJvYXJkTGluayB9IGZyb20gJy4vSUNvbXBvbmVudC5tb2RlbCdcclxuaW1wb3J0IHsgS2VydmlCYXNlU2VydmljZSB9IGZyb20gJy4uL2tlcnZpLWpzLnNlcnZpY2UnXHJcbmV4cG9ydCBjbGFzcyBBY3Rpb24gaW1wbGVtZW50cyBJQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUga2VydmlTZXJ2aWNlOktlcnZpQmFzZVNlcnZpY2UgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBpZDogc3RyaW5nID0gbnVsbDtcclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgcHVibGljIGNvbXBvbmVudFR5cGUgPSBcImFjdGlvblwiO1xyXG4gICAgcHVibGljIHJ1bkNvbW1hbmQ6c3RyaW5nID0gXCJcIjtcclxuICAgIHB1YmxpYyBpbnRlcnJ1cHRDb21tYW5kOnN0cmluZyA9IFwiXCI7XHJcbiAgICBwdWJsaWMgdWkgPSB7XHJcbiAgICAgICAgdHlwZTogXCJcIixcclxuICAgICAgICBvcmllbnRhdGlvbjogXCJcIixcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGFzaGJvYXJkczogRGFzaGJvYXJkTGlua1tdID0gW107XHJcbiAgICBwdWJsaWMgcnVubmluZyQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBhbnksIGtlcnZpU2VydmljZTpLZXJ2aUJhc2VTZXJ2aWNlKXtcclxuICAgICAgICB0aGlzLmtlcnZpU2VydmljZSA9IGtlcnZpU2VydmljZTtcclxuICAgICAgICB0aGlzLmlkPW1lc3NhZ2UuaWQ7XHJcbiAgICAgICAgdGhpcy5uYW1lPW1lc3NhZ2UubmFtZTtcclxuICAgICAgICB0aGlzLnVpPW1lc3NhZ2UudWk7XHJcbiAgICAgICAgdGhpcy51aS52aXNpYmxlPW1lc3NhZ2UudmlzaWJsZTtcclxuICAgICAgICB0aGlzLnVpLnR5cGU9bWVzc2FnZS50eXBlO1xyXG4gICAgICAgIHRoaXMucnVuQ29tbWFuZCA9IG1lc3NhZ2UucnVuQ29tbWFuZDtcclxuICAgICAgICB0aGlzLmludGVycnVwdENvbW1hbmQgPSBtZXNzYWdlLmludGVycnVwdENvbW1hbmQ7XHJcbiAgICAgICAgdGhpcy5ydW5uaW5nJC5uZXh0KG1lc3NhZ2UucnVubmluZyk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGRhc2hib2FyZExpbmsgb2YgbWVzc2FnZS5kYXNoYm9hcmRMaW5rcyl7XHJcbiAgICAgICAgICAgIHRoaXMuZGFzaGJvYXJkcy5wdXNoKG5ldyBEYXNoYm9hcmRMaW5rKHRoaXMsIGRhc2hib2FyZExpbmspKTsgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBydW4ocGFyYW1ldGVycyl7XHJcbiAgICAgICAgLy9pZiAoIXRoaXMucnVubmluZyQudmFsdWUpe1xyXG4gICAgICAgICAgICBpZiAocGFyYW1ldGVycyAmJiBwYXJhbWV0ZXJzLmxlbmd0aD4wKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5rZXJ2aVNlcnZpY2Uuc3BpbmUuc2VuZENvbW1hbmQodGhpcy5ydW5Db21tYW5kLCAuLi5wYXJhbWV0ZXJzKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5rZXJ2aVNlcnZpY2Uuc3BpbmUuc2VuZENvbW1hbmQodGhpcy5ydW5Db21tYW5kKTtcclxuICAgICAgICAvL31cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW50ZXJydXB0KHBhcmFtZXRlcnMpe1xyXG4gICAgICAgIGlmIChwYXJhbWV0ZXJzICYmIHBhcmFtZXRlcnMubGVuZ3RoPjApXHJcbiAgICAgICAgICAgIHRoaXMua2VydmlTZXJ2aWNlLnNwaW5lLnNlbmRDb21tYW5kKHRoaXMuaW50ZXJydXB0Q29tbWFuZCwgLi4ucGFyYW1ldGVycyk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLmtlcnZpU2VydmljZS5zcGluZS5zZW5kQ29tbWFuZCh0aGlzLmludGVycnVwdENvbW1hbmQpO1xyXG4gICAgfVxyXG59IiwiXHJcbmltcG9ydCAgKiBhcyBLZXJ2aVZhbHVlcyBmcm9tICcuL0tlcnZpVmFsdWVzLm1vZGVsJ1xyXG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnLi9jb250cm9sbGVyLm1vZGVsJ1xyXG5pbXBvcnQgeyBEYXNoYm9hcmQgfSBmcm9tICcuL2Rhc2hib2FyZC5tb2RlbCdcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnLi9hY3Rpb24ubW9kZWwnXHJcbmltcG9ydCB7IElDb21wb25lbnQgfSBmcm9tICcuL0lDb21wb25lbnQubW9kZWwnO1xyXG5pbXBvcnQgeyBLZXJ2aUJhc2VTZXJ2aWNlIH0gZnJvbSAnLi4va2VydmktanMuc2VydmljZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRGYWN0b3J5e1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlQ29tcG9uZW50cyhtZXNzYWdlOiBhbnksIGtlcnZpU2VydmljZTpLZXJ2aUJhc2VTZXJ2aWNlKXtcclxuICAgICAgICB2YXIgZm91bmRDb21wb25lbnRzID10aGlzLmNyZWF0ZUNvbXBvbmVudHNSZWMobWVzc2FnZSwga2VydmlTZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLmxpbmtUb0Rhc2hib2FyZHMoZm91bmRDb21wb25lbnRzWzBdLCBmb3VuZENvbXBvbmVudHNbMV0pO1xyXG4gICAgICAgIHJldHVybiBmb3VuZENvbXBvbmVudHNbMF07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgY3JlYXRlQ29tcG9uZW50c1JlYyhtZXNzYWdlOiBhbnksIGtlcnZpU2VydmljZSl7XHJcbiAgICAgICAgdmFyIHJlc3VsdD1bXTtcclxuICAgICAgICB2YXIgZGFzaGJvYXJkcz1bXTtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShtZXNzYWdlKSkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgKGkgPCBtZXNzYWdlLmxlbmd0aCk7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgc3ViQ29tcG9uZW50cyA9IHRoaXMuY3JlYXRlQ29tcG9uZW50c1JlYyhtZXNzYWdlW2ldLCBrZXJ2aVNlcnZpY2UpO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0PXJlc3VsdC5jb25jYXQoc3ViQ29tcG9uZW50c1swXSk7XHJcbiAgICAgICAgICAgICAgICBkYXNoYm9hcmRzPWRhc2hib2FyZHMuY29uY2F0KHN1YkNvbXBvbmVudHNbMV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGNvbXBvbmVudDphbnk9bnVsbDtcclxuICAgICAgICAgICAgdmFyIHN1YkNvbXBvbmVudHM6YW55W10gPSBbXTtcclxuICAgICAgICAgICAgaWYgKG1lc3NhZ2UuY29tcG9uZW50VHlwZT09XCJLZXJ2aUFjdGlvblwiKVxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gbmV3IEFjdGlvbihtZXNzYWdlLCBrZXJ2aVNlcnZpY2UpO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChtZXNzYWdlLmNvbXBvbmVudFR5cGU9PVwiZGFzaGJvYXJkXCIpe1xyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gbmV3IERhc2hib2FyZChtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIGRhc2hib2FyZHMucHVzaChjb21wb25lbnQpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2UuY29tcG9uZW50VHlwZT09XCJjb250cm9sbGVyXCIpXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBuZXcgQ29udHJvbGxlcihtZXNzYWdlLCBrZXJ2aVNlcnZpY2UpO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChtZXNzYWdlLmNvbXBvbmVudFR5cGUgPT0gXCJib29sZWFuLXZhbHVlXCIpXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBuZXcgS2VydmlWYWx1ZXMuQm9vbGVhblZhbHVlKG1lc3NhZ2UsIGtlcnZpU2VydmljZSk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKG1lc3NhZ2UuY29tcG9uZW50VHlwZSA9PSBcIm51bWJlci12YWx1ZVwiKVxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gbmV3IEtlcnZpVmFsdWVzLk51bWJlclZhbHVlKG1lc3NhZ2UsIGtlcnZpU2VydmljZSk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKG1lc3NhZ2UuY29tcG9uZW50VHlwZSA9PSBcInN0cmluZy12YWx1ZVwiKVxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gbmV3IEtlcnZpVmFsdWVzLlN0cmluZ1ZhbHVlKG1lc3NhZ2UsIGtlcnZpU2VydmljZSk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKG1lc3NhZ2UuY29tcG9uZW50VHlwZSA9PSBcImVudW0tdmFsdWVcIilcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IG5ldyBLZXJ2aVZhbHVlcy5TZWxlY3RWYWx1ZShtZXNzYWdlLCBrZXJ2aVNlcnZpY2UpO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChtZXNzYWdlLmNvbXBvbmVudFR5cGUgPT0gXCJkYXRldGltZS12YWx1ZVwiKVxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gbmV3IEtlcnZpVmFsdWVzLkRhdGVUaW1lVmFsdWUobWVzc2FnZSwga2VydmlTZXJ2aWNlKTtcclxuICAgICAgICAgICAgZWxzZSBpZiAobWVzc2FnZS5jb21wb25lbnRUeXBlID09IFwiY29sb3ItdmFsdWVcIilcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IG5ldyBLZXJ2aVZhbHVlcy5Db2xvclZhbHVlKG1lc3NhZ2UsIGtlcnZpU2VydmljZSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoY29tcG9uZW50KVxyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goY29tcG9uZW50KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChzdWJDb21wb25lbnRzKXtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgc3ViQ29tcG9uZW50IG9mIHN1YkNvbXBvbmVudHMpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHN1YkNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFtyZXN1bHQsIGRhc2hib2FyZHNdOyAgICBcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEZpeENvbnRyb2xsZXJSZWZlcmVuY2VzKGNvbXBvbmVudHM6SUNvbXBvbmVudFtdKXtcclxuICAgICAgICBmb3IobGV0IGNvbXBvbmVudCBvZiBjb21wb25lbnRzKXtcclxuICAgICAgICAgICAgdmFyIGNvbnRyb2xsZXIgPSBjb21wb25lbnQgYXMgQ29udHJvbGxlcjtcclxuICAgICAgICAgICAgaWYgKGNvbnRyb2xsZXIgJiYgY29udHJvbGxlci5jb21wb25lbnRUeXBlPT1cImNvbnRyb2xsZXJcIilcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIudXBkYXRlUmVmZXJlbmNlcygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBsaW5rVG9EYXNoYm9hcmRzKGNvbXBvbmVudHM6SUNvbXBvbmVudFtdLCBkYXNoYm9hcmRzOkRhc2hib2FyZFtdKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImx0ZFwiLCBjb21wb25lbnRzLCBkYXNoYm9hcmRzKTtcclxuICAgICAgICBmb3IobGV0IGNvbXBvbmVudCBvZiBjb21wb25lbnRzKXtcclxuICAgICAgICAgICAgaWYgKCEoY29tcG9uZW50IGluc3RhbmNlb2YgRGFzaGJvYXJkKSl7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGxpbmsgb2YgY29tcG9uZW50LmRhc2hib2FyZHMpe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgZGFzaGJvYXJkIG9mIGRhc2hib2FyZHMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXNoYm9hcmQuYWRkRGFzaGJvYXJkTGluayhsaW5rKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufSIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgVGltIFdlbnR6bGF1XHJcbi8vIExpY2Vuc2VkIHVuZGVyIE1JVFxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEtlcnZpU3BpbmVCYXNlIH0gZnJvbSBcIi4vc3BpbmUva2Vydmktc3BpbmViYXNlXCI7XHJcbmltcG9ydCB7IEtlcnZpV1NTcGluZSB9IGZyb20gXCIuL3NwaW5lL2tlcnZpLXdzXCI7XHJcbmltcG9ydCB7IEtlcnZpUk1RU3BpbmUgfSBmcm9tIFwiLi9zcGluZS9rZXJ2aS1ybXFcIjtcclxuaW1wb3J0IHsgIEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBJQ29tcG9uZW50IH0gZnJvbSAnLi9tb2RlbHMvSUNvbXBvbmVudC5tb2RlbCc7XHJcbmltcG9ydCB7IENvbXBvbmVudEZhY3RvcnkgfSBmcm9tICcuL21vZGVscy9mYWN0b3J5JztcclxuaW1wb3J0IHsgRGFzaGJvYXJkTWVzc2FnZU1vZGVsIH0gZnJvbSAnLi9tb2RlbHMvZGFzaGJvYXJkLm1vZGVsJztcclxuaW1wb3J0IHsgRGFzaGJvYXJkIH0gZnJvbSAnLi9tb2RlbHMvZGFzaGJvYXJkLm1vZGVsJ1xyXG5kZWNsYXJlIHZhciBrZXJ2aVNvY2tldEFkZHJlc3MgOiBhbnk7XHJcbmRlY2xhcmUgdmFyIHNvY2tldFByb3RvY29sIDogYW55O1xyXG5cclxuZXhwb3J0IGVudW0gQ29ubmVjdGlvblN0YXRlIHtkaXNjb25uZWN0ZWQsIGxvYWRpbmcsIGF1dGhlbnRpY2F0ZSwgY29ubmVjdGVkfTtcclxuZXhwb3J0IGVudW0gVXNlckxvZ1N0YXRlVHlwZSB7bm9ybWFsLCB3YXJuaW5nLCBlcnJvcn07XHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEtlcnZpQmFzZVNlcnZpY2Uge1xyXG4gIHB1YmxpYyBzcGluZTogS2VydmlTcGluZUJhc2UgPSBudWxsO1xyXG4gIFxyXG4gIHByaXZhdGUgYXBwSW5mbz1udWxsO1xyXG4gIHByaXZhdGUgIHRleHRzOnt9ID0gbnVsbDtcclxuICBwcml2YXRlIGNvbXBvbmVudHMgOiBJQ29tcG9uZW50W10gPSBbXTtcclxuICBwcml2YXRlIGNvbXBvbmVudHMkOiBCZWhhdmlvclN1YmplY3Q8SUNvbXBvbmVudFtdPiA9IG5ldyAgQmVoYXZpb3JTdWJqZWN0PElDb21wb25lbnRbXT4oW10pXHJcbiAgXHJcbiAgcHVibGljIGNvbm5lY3Rpb25TdGF0ZSQ6IEJlaGF2aW9yU3ViamVjdDxDb25uZWN0aW9uU3RhdGU+ID0gbmV3ICBCZWhhdmlvclN1YmplY3Q8Q29ubmVjdGlvblN0YXRlPihDb25uZWN0aW9uU3RhdGUuZGlzY29ubmVjdGVkKTtcclxuICBwdWJsaWMgIGFwcGxpY2F0aW9uJDogQmVoYXZpb3JTdWJqZWN0PGFueT47XHJcbiAgcHVibGljIGRvQXV0aGVudGljYXRlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHVibGljIGNvbXBvbmVudHNDaGFuZ2VkJDogQmVoYXZpb3JTdWJqZWN0PEJvb2xlYW4+ID0gbmV3ICBCZWhhdmlvclN1YmplY3Q8Qm9vbGVhbj4oZmFsc2UpO1xyXG4gIFxyXG4gIHByaXZhdGUgbG9nTWVzc2FnZXM6RGFzaGJvYXJkTWVzc2FnZU1vZGVsW10gPSBbXTtcclxuICBwcml2YXRlIGxvZ01lc3NhZ2VzJDogQmVoYXZpb3JTdWJqZWN0PERhc2hib2FyZE1lc3NhZ2VNb2RlbFtdPiA9IG5ldyAgQmVoYXZpb3JTdWJqZWN0PERhc2hib2FyZE1lc3NhZ2VNb2RlbFtdPihbXSk7XHJcbiAgcHJpdmF0ZSBsYXN0TG9nTWVzc2FnZSQ6IEJlaGF2aW9yU3ViamVjdDxEYXNoYm9hcmRNZXNzYWdlTW9kZWw+ID0gbmV3ICBCZWhhdmlvclN1YmplY3Q8RGFzaGJvYXJkTWVzc2FnZU1vZGVsPihudWxsKTtcclxuICBwcml2YXRlIExvZ01lc3NhZ2VDb3VudCQ6IEJlaGF2aW9yU3ViamVjdDxudW1iZXI+ID0gbmV3ICBCZWhhdmlvclN1YmplY3Q8bnVtYmVyPigwKTtcclxuICBwcml2YXRlIExvZ01lc3NhZ2VTdGF0ZSQ6IEJlaGF2aW9yU3ViamVjdDxVc2VyTG9nU3RhdGVUeXBlPiA9IG5ldyAgQmVoYXZpb3JTdWJqZWN0PFVzZXJMb2dTdGF0ZVR5cGU+KFVzZXJMb2dTdGF0ZVR5cGUubm9ybWFsKTtcclxuICBcclxuICBJUENSZWFkeSQ6IEJlaGF2aW9yU3ViamVjdDxCb29sZWFuPiA9IG5ldyAgQmVoYXZpb3JTdWJqZWN0PEJvb2xlYW4+KGZhbHNlKTtcclxuICAvL2F1dGhlbnRpY2F0aW9uRmFpbGVkJDogQmVoYXZpb3JTdWJqZWN0PEJvb2xlYW4+ID0gbmV3ICBCZWhhdmlvclN1YmplY3Q8Qm9vbGVhbj4oZmFsc2UpO1xyXG4gIFxyXG4gIHByaXZhdGUgX3Jlc29sdmVTZWxmO1xyXG4gIHByaXZhdGUgX3JlamVjdFNlbGY7XHJcbiAgcHJpdmF0ZSBhdXRoUHJvbWlzZTpQcm9taXNlPHN0cmluZz49bnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSBcclxuICB7IFxyXG4gICAgY29uc29sZS5sb2coXCJrZXJ2aSBzZXJ2aWNlIGNvbnN0cnVjdG9yXCIpO1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgdGhpcy5hcHBsaWNhdGlvbiQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4obnVsbCk7XHJcbiAgICAgdmFyIHMxID0gdGhpcy5JUENSZWFkeSQuc3Vic2NyaWJlKGZ1bmN0aW9uKGNvbm5lY3RlZCl7XHJcbiAgICAgICAgaWYgKGNvbm5lY3RlZCl7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImtlcnZpIHNlcnZpY2UgaXBjIHJlYWR5IChjb25uZWN0ZWQpXCIpXHJcbiAgICAgICAgICBzZWxmLnNwaW5lLmFkZEV2ZW50SGFuZGxlcihcInZhbHVlQ2hhbmdlZFwiLFwiXCIsZnVuY3Rpb24oaWQsIHZhbHVlKXtcclxuICAgICAgICAgICAgZm9yIChsZXQgY29tcG9uZW50IG9mIHNlbGYuY29tcG9uZW50cyl7XHJcbiAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5pZCA9PSB2YWx1ZS5pZCl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkeW5hbWljVmFsdWUgPSBjb21wb25lbnQgYXMgYW55O1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJudlwiLCBjb21wb25lbnQuaWQsIHZhbHVlLnZhbHVlLCB0aGlzLnRpbWVzdGFtcCwgbmV3IERhdGUodGhpcy50aW1lc3RhbXApKTtcclxuICAgICAgICAgICAgICAgIGR5bmFtaWNWYWx1ZS52YWx1ZVRTID0gbmV3IERhdGUodGhpcy50aW1lc3RhbXApO1xyXG4gICAgICAgICAgICAgICAgZHluYW1pY1ZhbHVlLnNldCh2YWx1ZS52YWx1ZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNlbGYuc3BpbmUuYWRkRXZlbnRIYW5kbGVyKFwiYWN0aW9uU3RhcnRlZFwiLFwiXCIsZnVuY3Rpb24oaWQpe1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJhc1wiLCBpZCk7XHJcbiAgICAgICAgICBmb3IgKGxldCBjb21wb25lbnQgb2Ygc2VsZi5jb21wb25lbnRzKXtcclxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5pZD09aWQpe1xyXG4gICAgICAgICAgICAgIHZhciBhY3Rpb24gPSBjb21wb25lbnQgYXMgYW55O1xyXG4gICAgICAgICAgICAgIGFjdGlvbi5ydW5uaW5nJC5uZXh0KHRydWUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2VsZi5zcGluZS5hZGRFdmVudEhhbmRsZXIoXCJhY3Rpb25Eb25lXCIsXCJcIixmdW5jdGlvbihpZCl7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImFkXCIsIGlkKTtcclxuICAgICAgICAgIGZvciAobGV0IGNvbXBvbmVudCBvZiBzZWxmLmNvbXBvbmVudHMpe1xyXG4gICAgICAgICAgICBpZiAoY29tcG9uZW50LmlkPT1pZCl7XHJcbiAgICAgICAgICAgICAgdmFyIGFjdGlvbiA9IGNvbXBvbmVudCBhcyBhbnk7XHJcbiAgICAgICAgICAgICAgYWN0aW9uLnJ1bm5pbmckLm5leHQoZmFsc2UpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2VsZi5zcGluZS5hZGRFdmVudEhhbmRsZXIoXCJ1c2VyTG9nTWVzc2FnZVwiLCBudWxsLCBmdW5jdGlvbih2KXtcclxuICAgICAgICAgIHZhciBtZXNzYWdlcyA9IHNlbGYubG9nTWVzc2FnZXMkLnZhbHVlXHJcbiAgICAgICAgICAvL1djb25zb2xlLmxvZyhcImxtXCIsIHRoaXMpO1xyXG4gICAgICAgICAgdmFyIG5ld01lc3NhZ2UgPSBuZXcgRGFzaGJvYXJkTWVzc2FnZU1vZGVsKHRoaXMpO1xyXG4gICAgICAgICAgbWVzc2FnZXMudW5zaGlmdChuZXdNZXNzYWdlKTtcclxuICAgICAgICAgIGlmIChtZXNzYWdlcy5sZW5ndGg+MTApXHJcbiAgICAgICAgICAgICAgbWVzc2FnZXMucG9wKCk7XHJcblxyXG4gICAgICAgICAgdmFyIGhhc0Vycm9ycyA9IDA7XHJcbiAgICAgICAgICB2YXIgaGFzV2FybmluZ3MgPSAwO1xyXG4gICAgICAgICAgZm9yKHZhciBtZXNzYWdlIG9mIG1lc3NhZ2VzKSAge1xyXG4gICAgICAgICAgICAgIGlmIChtZXNzYWdlLmxldmVsID09IDEpXHJcbiAgICAgICAgICAgICAgICAgIGhhc0Vycm9ycyArKztcclxuICAgICAgICAgICAgICBpZiAobWVzc2FnZS5sZXZlbCA9PSAyKVxyXG4gICAgICAgICAgICAgICAgICBoYXNXYXJuaW5ncyArKzsgICAgXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgaWYgKGhhc0Vycm9ycylcclxuICAgICAgICAgICAgICBzZWxmLkxvZ01lc3NhZ2VTdGF0ZSQubmV4dChVc2VyTG9nU3RhdGVUeXBlLmVycm9yKVxyXG4gICAgICAgICAgZWxzZSBpZiAoaGFzV2FybmluZ3MpXHJcbiAgICAgICAgICAgIHNlbGYuTG9nTWVzc2FnZVN0YXRlJC5uZXh0KFVzZXJMb2dTdGF0ZVR5cGUud2FybmluZylcclxuICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgc2VsZi5Mb2dNZXNzYWdlU3RhdGUkLm5leHQoVXNlckxvZ1N0YXRlVHlwZS5ub3JtYWwpXHJcbiAgICAgICAgICBzZWxmLkxvZ01lc3NhZ2VDb3VudCQubmV4dChtZXNzYWdlcy5sZW5ndGgpXHJcbiAgICAgICAgICBzZWxmLmxhc3RMb2dNZXNzYWdlJC5uZXh0KG5ld01lc3NhZ2UpO1xyXG4gICAgICAgICAgc2VsZi5sb2dNZXNzYWdlcyQubmV4dChtZXNzYWdlcyk7XHJcbiAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdGV4dChrZXk6c3RyaW5nLCBkZWZhdWx0VmFsdWU6c3RyaW5nPVwiXCIpOnN0cmluZ3tcclxuICAgIC8vICBjb25zb2xlLmxvZyhcInRcIiwga2V5LCB0aGlzLnRleHRzKTtcclxuICAgIGlmICh0aGlzLnRleHRzICYmIGtleSBpbiB0aGlzLnRleHRzKXtcclxuICAgICAgcmV0dXJuIHRoaXMudGV4dHNba2V5XTtcclxuICAgIH0gZWxzZVxyXG4gICAgICByZXR1cm4gZGVmYXVsdFZhbHVlXHJcbiAgfVxyXG5cclxuXHJcbiAgLy8gcHVibGljIGdldENvbXBvbmVudHMkKCl7XHJcbiAgLy8gICByZXR1cm4gdGhpcy5jb21wb25lbnRzJC5hc09ic2VydmFibGUoKTtcclxuICAvLyB9XHJcblxyXG4gICBwdWJsaWMgZ2V0TG9nTWVzc2FnZXMkKCk6T2JzZXJ2YWJsZTxEYXNoYm9hcmRNZXNzYWdlTW9kZWxbXT57XHJcbiAgICAgcmV0dXJuIHRoaXMubG9nTWVzc2FnZXMkLmFzT2JzZXJ2YWJsZSgpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZ2V0TGFzdExvZ01lc3NhZ2UkKCk6T2JzZXJ2YWJsZTxEYXNoYm9hcmRNZXNzYWdlTW9kZWw+e1xyXG4gICAgcmV0dXJuIHRoaXMubGFzdExvZ01lc3NhZ2UkLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldExvZ1N0YXRlJCgpOk9ic2VydmFibGU8VXNlckxvZ1N0YXRlVHlwZT57XHJcbiAgICByZXR1cm4gdGhpcy5Mb2dNZXNzYWdlU3RhdGUkLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldExvZ01lc3NhZ2VDb3VudCQoKTpPYnNlcnZhYmxlPG51bWJlcj57XHJcbiAgICByZXR1cm4gdGhpcy5Mb2dNZXNzYWdlQ291bnQkLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzQXBwRW1wdHkoKXtcclxuICAgIHZhciBkZWZhdWx0RGFzaGJvYXJkID0gdGhpcy5nZXREZWZhdWx0RGFzaGJvYXJkKCk7XHJcbiAgICBpZiAoZGVmYXVsdERhc2hib2FyZClcclxuICAgICAgcmV0dXJuIGRlZmF1bHREYXNoYm9hcmQuaXNFbXB0eSgpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0Q29tcG9uZW50KGlkOnN0cmluZywgY29tcG9uZW50VHlwZTpzdHJpbmcgPSBudWxsKXtcclxuICAgIGZvciAodmFyIGNvbXBvbmVudCBvZiB0aGlzLmNvbXBvbmVudHMpe1xyXG4gICAgICBpZiAoY29tcG9uZW50LmlkID09IGlkICYmIChjb21wb25lbnRUeXBlPT1udWxsIHx8IGNvbXBvbmVudC5jb21wb25lbnRUeXBlID09IGNvbXBvbmVudFR5cGUpKVxyXG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRDb21wb25lbnRzQnlUeXBlKHR5cGU6c3RyaW5nKXtcclxuICAgIHZhciByZXN1bHQgPSBbXVxyXG4gICAgZm9yICh2YXIgY29tcG9uZW50IG9mIHRoaXMuY29tcG9uZW50cyl7XHJcbiAgICAgIGlmIChjb21wb25lbnQuY29tcG9uZW50VHlwZSA9PSB0eXBlKVxyXG4gICAgICAgIHJlc3VsdC5wdXNoKGNvbXBvbmVudCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldERlZmF1bHREYXNoYm9hcmQoKTpEYXNoYm9hcmR7XHJcbiAgICB2YXIgZGFzaGJvYXJkcyA9IHRoaXMuZ2V0Q29tcG9uZW50c0J5VHlwZShcImRhc2hib2FyZFwiKSBhcyBEYXNoYm9hcmRbXSA7XHJcbiAgICBmb3IgKGxldCBkYXNoYm9hcmQgb2YgZGFzaGJvYXJkcykge1xyXG4gICAgICAgIGlmIChkYXNoYm9hcmQuaXNEZWZhdWx0KVxyXG4gICAgICAgICAgICByZXR1cm4gZGFzaGJvYXJkXHJcbiAgICB9XHJcbiAgICBpZiAoZGFzaGJvYXJkcy5sZW5ndGg+MClcclxuICAgICAgcmV0dXJuIGRhc2hib2FyZHNbMF07XHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuICBwdWJsaWMgY29ubmVjdCgpe1xyXG4gICAgdmFyIGFkZHJlc3MgPSBudWxsO1xyXG4gICAgdmFyIHByb3RvY29sID0gXCJ3c1wiXHJcbiAgICB0cnl7XHJcbiAgICAgIGlmIChrZXJ2aVNvY2tldEFkZHJlc3MpXHJcbiAgICAgIHtcclxuICAgICAgICBhZGRyZXNzID0ga2VydmlTb2NrZXRBZGRyZXNzO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChzb2NrZXRQcm90b2NvbClcclxuICAgICAge1xyXG4gICAgICAgIHByb3RvY29sID0gc29ja2V0UHJvdG9jb2w7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAvL2ZvciB0ZXN0aW5nIHdpdGggbmcgc2VydmVcclxuICAgICAgdmFyIGh0dHBQcm90b2NvbCA9IGxvY2F0aW9uLnByb3RvY29sO1xyXG4gICAgICBpZiAoaHR0cFByb3RvY29sID09IFwiaHR0cHNcIilcclxuICAgICAgICBwcm90b2NvbD1cIndzc1wiXHJcbiAgICAgIHZhciBodHRwSG9zdCA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZTtcclxuICAgICAgYWRkcmVzcyA9IGh0dHBIb3N0ICsgXCI6OTAwMFwiO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coXCJrc1wiLCBhZGRyZXNzKTtcclxuICAgIFxyXG4gICAgdGhpcy5zcGluZSA9IG5ldyBLZXJ2aVdTU3BpbmUoe1xyXG4gICAgICBhZGRyZXNzOiBhZGRyZXNzLFxyXG4gICAgICBwcm90b2NvbDogcHJvdG9jb2wsXHJcbiAgICAgIG9uT3BlbjogdGhpcy5vbk9wZW4sXHJcbiAgICAgIG9uQ2xvc2U6dGhpcy5vbkNsb3NlLFxyXG4gICAgICBvbkF1dGhlbnRpY2F0ZTp0aGlzLm9uQXV0aGVudGljYXRlLFxyXG4gICAgICBvbkF1dGhlbnRpY2F0ZUZhaWxlZDp0aGlzLm9uQXV0aGVudGljYXRlRmFpbGVkLFxyXG4gICAgICBvbkxvZ09mZjogdGhpcy5vbkxvZ29mZixcclxuICAgICAgb25BdXRoZW50aWNhdGVTdGFydDogdGhpcy5vbkF1dGhlbnRpY2F0ZVN0YXJ0LFxyXG4gICAgICB0YXJnZXRTY29wZTp0aGlzXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb25uZWN0TVEoKXtcclxuICAgIFxyXG4gICAgLy9pZiAoIXNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJtcWNcIikpXHJcbiAgICAvLyAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcIm1xY1wiLCAne1wia2V5X2lkXCI6XCJjNWJkMDgyNGJkYTQ0ZmZlYWJhODAxMDM4M2YxYWY5NlwiLFwiYXBpX3Rva2VuXCI6XCI0Nzc2ZWM5ZDRiZGY0YjMxOTJmZmE2YTFmMzdkMTVhYTE0NWUyZTY2NWFlNjRlNDZhZmQ3NjZlZTg1MWFjMDQ2XCIsXCJhcGlfY2hhbm5lbFwiOlwiMjBiZGRmODhhNDQzNGU5OWJhMGUwMTRkZTJiODc1YzdcIixcImFwcF9pZFwiOlwiYXBwXzFcIn0nKTtcclxuICAgIGNvbnNvbGUubG9nKFwia3NcIiwgc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcIm1xY1wiKSk7XHJcbiAgICBcclxuICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibXFjXCIpKXtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuc3BpbmUgPSBuZXcgS2VydmlSTVFTcGluZSh7XHJcbiAgICAgICAgb25PcGVuOiB0aGlzLm9uT3BlbixcclxuICAgICAgICBvbkNsb3NlOnRoaXMub25DbG9zZSxcclxuICAgICAgICBvbkF1dGhlbnRpY2F0ZTp0aGlzLm9uQXV0aGVudGljYXRlLFxyXG4gICAgICAgIG9uQXV0aGVudGljYXRlRmFpbGVkOnRoaXMub25BdXRoZW50aWNhdGVGYWlsZWQsXHJcbiAgICAgICAgb25Mb2dPZmY6IHRoaXMub25Mb2dvZmYsXHJcbiAgICAgICAgb25BdXRoZW50aWNhdGVTdGFydDogdGhpcy5vbkF1dGhlbnRpY2F0ZVN0YXJ0LFxyXG4gICAgICAgIHRhcmdldFNjb3BlOnRoaXMsXHJcbiAgICAgICAgYXBpVG9rZW46IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcIm1xY1wiKSlcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhcInFtYyBub3QgZm91bmQgaW4gc3RvcmFnZVwiKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaXNBbm9ueW1vdXMoKXtcclxuICAgIHJldHVybiB0aGlzLnNwaW5lLm9wdGlvbnMudXNlck5hbWUgPT0gXCJhbm9ueW1vdXNcIiBcclxuICB9XHJcblxyXG4gIGF1dGhlbnRpY2F0ZSh1c2VyTmFtZSwgcGFzc3dvcmQpe1xyXG4gICAgLy90aGlzLmF1dGhlbnRpY2F0aW9uRmFpbGVkJC5uZXh0KGZhbHNlKTtcclxuICAgIGNvbnNvbGUubG9nKFwia3NhXCIsIHVzZXJOYW1lLCBwYXNzd29yZCk7XHJcbiAgICB0aGlzLmF1dGhQcm9taXNlPW5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUsIHJlamVjdCkgPT57XHJcbiAgICAgIHRoaXMuX3Jlc29sdmVTZWxmID0gcmVzb2x2ZTtcclxuICAgICAgdGhpcy5fcmVqZWN0U2VsZiA9IHJlamVjdDtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zcGluZS5hdXRoZW50aWNhdGUodXNlck5hbWUsIHBhc3N3b3JkKTtcclxuICAgIHJldHVybiB0aGlzLmF1dGhQcm9taXNlO1xyXG4gIH1cclxuXHJcbiAgbG9nb2ZmKCl7XHJcbiAgICB0aGlzLnNwaW5lLmxvZ29mZigpXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uQXV0aGVudGljYXRlU3RhcnQoKXtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkF1dGhlbnRpY2F0ZSgpe1xyXG4gICAgdGhpcy5kb0F1dGhlbnRpY2F0ZSA9IHRydWU7XHJcbiAgICAvL3RoaXMuY29ubmVjdGlvblN0YXRlJC5uZXh0KENvbm5lY3Rpb25TdGF0ZS5hdXRoZW50aWNhdGUpO1xyXG4gICAgdGhpcy5yZXNldCgpO1xyXG4gICAgdGhpcy5fcmVzb2x2ZVNlbGYoXCJva1wiKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25BdXRoZW50aWNhdGVGYWlsZWQoKXtcclxuICAgIC8vdGhpcy5hdXRoZW50aWNhdGlvbkZhaWxlZCQubmV4dCh0cnVlKTtcclxuICAgIHRoaXMuX3JlamVjdFNlbGYoXCJlcnJvclwiKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25Mb2dvZmYoKXtcclxuICAgIGNvbnNvbGUubG9nKFwib2x4cmNcIik7XHJcbiAgICB0aGlzLmRvQXV0aGVudGljYXRlID0gdHJ1ZTtcclxuICAgIGlmICh0aGlzLnNwaW5lLmZpcnN0T25PcGVuKVxyXG4gICAgICB0aGlzLklQQ1JlYWR5JC5uZXh0KHRydWUpO1xyXG4gICAgXHJcbiAgICB0aGlzLnJlc2V0KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlc2V0KCl7XHJcbiAgICB0aGlzLmNvbXBvbmVudHMgPSBbXTtcclxuICAgIHRoaXMuY29tcG9uZW50cyQubmV4dCh0aGlzLmNvbXBvbmVudHMpO1xyXG5cclxuICAgIHZhciBtZXNzYWdlcyA9IFtdO1xyXG4gICAgdGhpcy5Mb2dNZXNzYWdlU3RhdGUkLm5leHQoVXNlckxvZ1N0YXRlVHlwZS5ub3JtYWwpO1xyXG4gICAgdGhpcy5Mb2dNZXNzYWdlQ291bnQkLm5leHQobWVzc2FnZXMubGVuZ3RoKTtcclxuICAgIHRoaXMubG9nTWVzc2FnZXMkLm5leHQobWVzc2FnZXMpO1xyXG4gICAgXHJcblxyXG4gICAgaWYgKHRoaXMuSVBDUmVhZHkkLnZhbHVlKVxyXG4gICAgICB0aGlzLmNvbm5lY3Rpb25TdGF0ZSQubmV4dChDb25uZWN0aW9uU3RhdGUuYXV0aGVudGljYXRlKTtcclxuICAgIGVsc2VcclxuICAgICAgdGhpcy5jb25uZWN0aW9uU3RhdGUkLm5leHQoQ29ubmVjdGlvblN0YXRlLmRpc2Nvbm5lY3RlZCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldENvbXBvbmVudEluZm8ocmV0cnlDb3VudCwgbW9kdWxlX2xvYWQpe1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgdGhpcy5zcGluZS5zZW5kUXVlcnkoXCJHZXRBcHBsaWNhdGlvbkluZm9cIixmdW5jdGlvbihhcHBJbmZvKXtcclxuICAgICAgY29uc29sZS5sb2coXCJhcHBpbmZvXCIsYXBwSW5mbyk7XHJcbiAgICAgIHRoaXMuc3BpbmUuc2VuZFF1ZXJ5KFwiZ2V0Q29tcG9uZW50SW5mb1wiLGZ1bmN0aW9uKG1lc3NhZ2Upe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29tcG9uZW50IGluZm9cIixtZXNzYWdlKTtcclxuICAgICAgICBzZWxmLmFwcGxpY2F0aW9uJC5uZXh0KGFwcEluZm8pO1xyXG4gICAgICAgIHNlbGYudGV4dHMgPSBhcHBJbmZvLmRpc3BsYXkudGV4dHM7XHJcbiAgICAgICAgc2VsZi5jb21wb25lbnRzID0gQ29tcG9uZW50RmFjdG9yeS5jcmVhdGVDb21wb25lbnRzKG1lc3NhZ2UsIHNlbGYpO1xyXG4gICAgICAgIENvbXBvbmVudEZhY3RvcnkuRml4Q29udHJvbGxlclJlZmVyZW5jZXMoc2VsZi5nZXRDb21wb25lbnRzQnlUeXBlKFwiY29udHJvbGxlclwiKSk7XHJcbiAgICAgICAgc2VsZi5jb21wb25lbnRzJC5uZXh0KHNlbGYuY29tcG9uZW50cyk7XHJcbiAgICAgICAgc2VsZi5jb25uZWN0aW9uU3RhdGUkLm5leHQoQ29ubmVjdGlvblN0YXRlLmNvbm5lY3RlZCk7XHJcbiAgICAgICAgaWYgKG1vZHVsZV9sb2FkKVxyXG4gICAgICAgICAgc2VsZi5jb21wb25lbnRzQ2hhbmdlZCQubmV4dCh0cnVlKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29tcG9uZW50c1wiLHNlbGYuY29tcG9uZW50cyk7IFxyXG4gICAgICB9LFxyXG4gICAgICBmdW5jdGlvbigpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0IGNvbXBvbmVudCBpbmZvIHRpbWVvdXRcIik7XHJcbiAgICAgICAgaWYgKHJldHJ5Q291bnQ+MClcclxuICAgICAgICAgIHNlbGYuZ2V0Q29tcG9uZW50SW5mbyhyZXRyeUNvdW50LTEsIG1vZHVsZV9sb2FkKVxyXG4gICAgICB9KTsgIFxyXG5cdCAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uT3BlbihmaXJzdCl7XHJcbiAgICBjb25zb2xlLmxvZyhcImtlcnZpY2Ugc2VydmljZSBvbiBvcGVuXCIsIHRoaXMuc3BpbmUuZmlyc3RPbk9wZW4sIGZpcnN0LHRoaXMpO1xyXG4gICAgdmFyIHNlbGY9dGhpcztcclxuICAgIHRoaXMuY29ubmVjdGlvblN0YXRlJC5uZXh0KENvbm5lY3Rpb25TdGF0ZS5sb2FkaW5nKTtcclxuICAgIHRoaXMuZG9BdXRoZW50aWNhdGUgPSB0aGlzLnNwaW5lLmRvQXV0aGVudGljYXRlO1xyXG4gICAgdGhpcy5nZXRDb21wb25lbnRJbmZvKDIsIGZhbHNlKVxyXG4gICAgaWYgKHNlbGYuc3BpbmUuZmlyc3RPbk9wZW4pe1xyXG4gICAgICB0aGlzLklQQ1JlYWR5JC5uZXh0KHRydWUpO1xyXG4gICAgICB0aGlzLnNwaW5lLmFkZEV2ZW50SGFuZGxlcihcIm1vZHVsZVN0YXJ0ZWRcIixcIlwiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIm1vZHVsZSBsb2FkZWRcIixzZWxmLmNvbXBvbmVudHMpOyBcclxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgc2VsZi5nZXRDb21wb25lbnRJbmZvKDIsIHRydWUpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAsIDIwMDApOyBcclxuICAgICAgfSk7ICAgICAgICAgICBcclxuICAgICAgXHJcbiAgICAgIHRoaXMuc3BpbmUuYWRkRXZlbnRIYW5kbGVyKFwibW9kdWxlU3RvcHBlZFwiLFwiXCIsZnVuY3Rpb24oKXtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwibW9kdWxlIHVubG9hZGVkXCIpOyBcclxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibW9kdWxlIHVubG9hZGVkLCByZWZyZXNoXCIpO1xyXG4gICAgICAgICAgICBzZWxmLmdldENvbXBvbmVudEluZm8oMiwgdHJ1ZSk7XHJcbiAgICAgICAgfSwgNTAwMCk7ICAgICAgICAgICBcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25DbG9zZSgpe1xyXG4gICAgdGhpcy5yZXNldCgpXHJcbiAgICBjb25zb2xlLmxvZyhcImtzIG9uIGNsb3NlXCIpO1xyXG4gICAgdGhpcy5JUENSZWFkeSQubmV4dChmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uSGVhcnRiZWF0KCl7XHJcblxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkNvbm5lY3QoKXtcclxuXHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWIta2VydmktanMnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8cD5cclxuICAgICAga2VydmktanMgd29ya3MhXHJcbiAgICA8L3A+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBLZXJ2aUpzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBLZXJ2aUpzQ29tcG9uZW50IH0gZnJvbSAnLi9rZXJ2aS1qcy5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtLZXJ2aUpzQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbS2VydmlKc0NvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEtlcnZpSnNNb2R1bGUgeyB9XHJcbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fdmFsdWVzIiwidHNsaWJfMS5fX2V4dGVuZHMiLCJLZXJ2aVZhbHVlcy5Cb29sZWFuVmFsdWUiLCJLZXJ2aVZhbHVlcy5OdW1iZXJWYWx1ZSIsIktlcnZpVmFsdWVzLlN0cmluZ1ZhbHVlIiwiS2VydmlWYWx1ZXMuU2VsZWN0VmFsdWUiLCJLZXJ2aVZhbHVlcy5EYXRlVGltZVZhbHVlIiwiS2Vy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

/***/ }),

/***/ "../../dist/kervi-zorro/fesm5/kervi-zorro.js":
/*!**************************************************************************************!*\
  !*** D:/dev/kervi/kervi/kervi-ui/kervi/ui/web/dist/kervi-zorro/fesm5/kervi-zorro.js ***!
  \**************************************************************************************/
/*! exports provided: KerviZorroService, KerviZorroModule, ɵw, ɵv, ɵu, ɵs, ɵy, ɵz, ɵx, ɵo, ɵm, ɵr, ɵq, ɵl, ɵk, ɵp, ɵj, ɵi, ɵn, ɵh, ɵc, ɵg, ɵf, ɵd, ɵb, ɵe, ɵa, ɵt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KerviZorroService", function() { return KerviZorroService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KerviZorroModule", function() { return KerviZorroModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵw", function() { return ActionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵv", function() { return CamViewerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵu", function() { return ControllerPadComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵs", function() { return DashboardPanelComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵy", function() { return UserMessageButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵz", function() { return UserMessagesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵx", function() { return UserLogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return ButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return KerviChartComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵr", function() { return ColorComponent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵq", function() { return DateTimeComponent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return GaugeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return IconsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return MPEGViewerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return SliderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return SparklineComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return SwitchButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return UIComponentsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return BooleanComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return ColorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return DateTimeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return KerviValueComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return NumberComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return StringComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return ValuesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵt", function() { return WidgetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_kervi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-kervi */ "../../dist/ngx-kervi/fesm5/ngx-kervi.js");
/* harmony import */ var kervi_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! kervi-js */ "../../dist/kervi-js/fesm5/kervi-js.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ngx_gauge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-gauge */ "../../node_modules/ngx-gauge/fesm5/ngx-gauge.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd */ "../../node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-apexcharts */ "../../node_modules/ng-apexcharts/fesm5/ng-apexcharts.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout */ "../../node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");













/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var KerviZorroService = /** @class */ (function () {
    function KerviZorroService() {
    }
    KerviZorroService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    KerviZorroService.ctorParameters = function () { return []; };
    /** @nocollapse */ KerviZorroService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function KerviZorroService_Factory() { return new KerviZorroService(); }, token: KerviZorroService, providedIn: "root" });
    return KerviZorroService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DashboardPanelComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(DashboardPanelComponent, _super);
    function DashboardPanelComponent() {
        var _this = _super.call(this) || this;
        _this.groupLayout = "row";
        return _this;
    }
    /**
     * @return {?}
     */
    DashboardPanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.ngOnInitPanel();
        if (this.panel.hasOnlyGroupPanels)
            this.groupLayout = "row";
    };
    DashboardPanelComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'kervi-dashboard-panel',
                    template: "<!-- <p>{{panel.name}} - {{panel.type}} - {{groupLayout}} - {{bodyOnly}} - {{inline}} - {{panel.subPanels.length}} - {{panel.components.length}} - {{headerComponents.length}} - {{bodyComponents.length}}</p> -->\n<!-- <p>w={{width}} - {{inGroup}}</p> -->\n<ng-container *ngIf=\"panel.type=='group'\">\n    <div class=\"kervi-panel-deck\" [fxLayout]=\"panel.parameters.layout\" fxLayout.xs=\"column\"  fxLayoutGap=\"0.5%\">\n        <ng-container *ngFor=\"let subPanel of panel.subPanels\">\n            <ng-container *ngIf=\"subPanel.type!='group'\">\n                        <kervi-dashboard-panel fxFlex.xs=\"100\" [fxFlex]=\"subPanel.parameters.width\" [bodyOnly]=\"true\" [inGroup]=\"true\" [dashboardSizes]=\"dashboardSizes\"  [panel]=\"subPanel\"></kervi-dashboard-panel>\n            </ng-container>\n            <ng-container *ngIf=\"subPanel.type=='group'\">\n                    <kervi-dashboard-panel fxFlex.xs=\"100\" [fxFlex]=\"subPanel.parameters.width\" [inGroup]=\"true\" [dashboardSizes]=\"dashboardSizes\"  [panel]=\"subPanel\"></kervi-dashboard-panel>\n            </ng-container>\n        </ng-container>\n    </div>\n</ng-container>\n\n<ng-container *ngIf=\"panel.type!='group' && !inline\">\n    \n    <nz-card  [nzTitle]=\"showHeader ? title : null\" [nzExtra]=\"headerComponents.length>0 ? extraTemplate : null\">\n        \n        <ng-template #extraTemplate>\n            <ng-container *ngFor=\"let panelComponent of headerComponents\">\n                        <kervi-widget [component]=\"panelComponent.component\" [dashboardPanel]=\"panel\" [inline]=\"inline\"  [linkParameters]=\"panelComponent.parameters\"></kervi-widget>\n            </ng-container>\n        </ng-template>\n        <ng-container *ngFor=\"let panelComponent of bodyComponents\">\n            <kervi-widget [component]=\"panelComponent.component\" [dashboardPanel]=\"panel\"  [inline]=\"inline\"  [linkParameters]=\"panelComponent.parameters\"></kervi-widget>\n        </ng-container>\n    \n        <div *ngIf=\"panel.parameters.userLog\"  >\n            \n            <kervi-user-log></kervi-user-log>\n        </div> \n    </nz-card>\n</ng-container>\n\n<ng-template [ngIf]=\"inline && panel.components.length>0\" >\n    <ng-container *ngFor=\"let panelComponent of panel.components\" >\n        <kervi-widget [component]=\"panelComponent.component\"  [inline]=\"inline\" [dashboardPanel]=\"panel\"  [linkParameters]=\"panelComponent.parameters\"></kervi-widget>\n    </ng-container>\n</ng-template>",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    DashboardPanelComponent.ctorParameters = function () { return []; };
    return DashboardPanelComponent;
}(ngx_kervi__WEBPACK_IMPORTED_MODULE_2__["KerviDashboardPanelComponent"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var WidgetComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(WidgetComponent, _super);
    function WidgetComponent() {
        return _super.call(this) || this;
    }
    /**
     * @return {?}
     */
    WidgetComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.ngOnInitWidget();
    };
    WidgetComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'kervi-widget',
                    template: "<ng-container *ngIf=\"widgetType=='value'\">\n    <div fxLayout=\"row\" *ngIf=\"!inline\" class=\"kervi-block-widget\"> \n        <div fxFlex=\"60\" class=\"kervi-value-label\">\n            <span   *ngIf=\"linkParameters.labelIcon\" class=\"pi pi-{{linkParameters.labelIcon}}\"></span>\n            <span   *ngIf=\"linkParameters.label\">{{linkParameters.label}}</span>\n        </div>\n        \n        <div fxFlex class=\"kervi-value-section\">\n            <kervi-value *ngIf=\"component.componentType=='KerviValue'\" [value]=\"component\" [inline]=\"false\" [dashboardSizes]=\"dashboardSizes\"  [linkParameters]=\"linkParameters\"></kervi-value>\n            <kervi-action  *ngIf=\"component.componentType=='action'\" [action]=\"component\" [inline]=\"false\" [dashboardSizes]=\"dashboardSizes\"  [linkParameters]=\"linkParameters\"></kervi-action>\n        </div>\n            \n    </div>\n\n    <div *ngIf=\"inline\" class=\"kervi-inline-widget\">\n        <div class=\"kervi-value-label\"> \n            <span style=\"display:inline\"  *ngIf=\"linkParameters.labelIcon\" class=\"fa fa-{{linkParameters.labelIcon}}\"></span>\n            <span style=\"display:inline\"  *ngIf=\"linkParameters.label\"  >{{linkParameters.label}}</span>\n        </div>\n        <div class=\"kervi-value-section\">\n            <kervi-value *ngIf=\"component.componentType=='KerviValue'\" [value]=\"component\" [inline]=\"false\" [dashboardSizes]=\"dashboardSizes\"  [linkParameters]=\"linkParameters\"></kervi-value>\n            <kervi-action  *ngIf=\"component.componentType=='action'\" [action]=\"component\" [inline]=\"false\" [dashboardSizes]=\"dashboardSizes\"  [linkParameters]=\"linkParameters\"></kervi-action>\n        </div>\n    </div>\n</ng-container>    \n<ng-container *ngIf=\"widgetType=='camera'\" class=\"block-component\" >\n    <kervi-cam-viewer [isBackground]=\"false\" [camera]=\"component\" [linkParameters]=\"linkParameters\"></kervi-cam-viewer>\n</ng-container>\n    \n    \n<ng-container *ngIf=\"widgetType=='gauge'\" class=\"block-component\" >\n    <kervi-gauge [dashboardSizes]=\"dashboardSizes\" [value]=\"component\" [linkParameters]=\"linkParameters\"></kervi-gauge>\n</ng-container>\n\n<ng-container *ngIf=\"widgetType=='chart'\" class=\"\" >\n    <kervi-chart [dashboardSizes]=\"dashboardSizes\" [value]=\"component\" [linkParameters]=\"linkParameters\" ></kervi-chart>\n</ng-container>",
                    styles: []
                },] },
    ];
    /** @nocollapse */
    WidgetComponent.ctorParameters = function () { return []; };
    return WidgetComponent;
}(ngx_kervi__WEBPACK_IMPORTED_MODULE_2__["KerviWidgetComponent"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NumberComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(NumberComponent, _super);
    function NumberComponent(elementRef) {
        var _this = _super.call(this) || this;
        _this.elementRef = elementRef;
        return _this;
    }
    /**
     * @return {?}
     */
    NumberComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.ngOnInitNumber();
    };
    NumberComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'kervi-value-number',
                    template: "<ng-container *ngIf=\"linkParameters.isInput\">\n    <nz-form-control >\n        <nz-input-number id=\"{{value.id}}\" [nzMin]=\"value.minValue\" [nzMax]=\"value.maxValue\" [nzStep]=\"1\" [(ngModel)]=\"value.value\"  ></nz-input-number>\n        \n    </nz-form-control>\n    <!-- <ui-slider [value]=\"(value.value$ | async)\" (sliderChanged)=\"setKerviValue($event)\" [minValue]=\"value.minValue\" [maxValue]=\"value.maxValue\" [linkParameters]=\"linkParameters\"></ui-slider> -->\n</ng-container>\n<ng-container *ngIf=\"!linkParameters.isInput\">\n\n    <span class=\"value-value\" [style.min-width.rem]=\"linkParameters.valueSize\">\n        <i *ngIf=\"currentIcon\" class=\"fa fa-{{currentIcon}}\"></i>\n        <value-sparkline *ngIf=\"linkParameters.showSparkline && !linkParameters.isInput\" [value]=\"value\"></value-sparkline>\n        {{(value.value$ | async | number:numberFormat)}}\n        <span *ngIf=\"linkParameters.displayUnit\">{{value.unit}}</span>\n    </span>\n</ng-container>\n",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    NumberComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    return NumberComponent;
}(ngx_kervi__WEBPACK_IMPORTED_MODULE_2__["KerviNumberComponent"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BooleanComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(BooleanComponent, _super);
    function BooleanComponent() {
        return _super.call(this) || this;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    BooleanComponent.prototype.changeState = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.value.set(event);
    };
    /**
     * @return {?}
     */
    BooleanComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.ngOnInitBoolean();
    };
    BooleanComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'kervi-value-boolean',
                    template: "<kervi-switchbutton \n    *ngIf=\"displayType!='button'\"\n    [dashboardSizes]=\"dashboardSizes\" \n    [inline]=\"inline\" \n    [value]=\"value.value\" \n    [linkParameters]=\"linkParameters\"\n    (buttonState)=\"changeState($event)\"\n></kervi-switchbutton>\n<kervi-button \n    *ngIf=\"displayType=='button'\"    \n    [dashboardSizes]=\"dashboardSizes\" \n    [value]=\"value\" \n    [inline]=\"inline\" \n    [linkParameters]=\"linkParameters\" \n    (buttonState)=\"changeState($event)\" \n></kervi-button>\n\n\n\n",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    BooleanComponent.ctorParameters = function () { return []; };
    return BooleanComponent;
}(ngx_kervi__WEBPACK_IMPORTED_MODULE_2__["KerviBooleanComponent"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StringComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(StringComponent, _super);
    function StringComponent(elementRef) {
        var _this = _super.call(this) || this;
        _this.elementRef = elementRef;
        return _this;
    }
    /**
     * @return {?}
     */
    StringComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var self = this;
        this.ngOnInitString();
        this.value.value$.subscribe((/**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            jQuery("input", self.elementRef.nativeElement).val(v).change();
        }));
    };
    /**
     * @param {?} event
     * @return {?}
     */
    StringComponent.prototype.onChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var v = jQuery("input", this.elementRef.nativeElement).val();
        console.log("evv", v, event);
        this.value.set(v);
    };
    StringComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'kervi-value-string',
                    template: "<input nz-input *ngIf=\"linkParameters.isInput\"  [(ngModel)]=\"value.value\"/>\n<span *ngIf=\"!linkParameters.isInput\" class=\"form-control pull-right\"   >{{(value.value$ | async)}}</span>\n",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    StringComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    return StringComponent;
}(ngx_kervi__WEBPACK_IMPORTED_MODULE_2__["KerviStringComponent"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DateTimeComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(DateTimeComponent, _super);
    function DateTimeComponent() {
        return _super.call(this) || this;
    }
    /**
     * @return {?}
     */
    DateTimeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.ngOnInitDateTime();
    };
    DateTimeComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'kervi-value-datetime',
                    template: "<kervi-datetime [type]=\"displayType\" [format]=\"dateTimeFormat\" [dateTime]=\"value\"></kervi-datetime>\n    ",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    DateTimeComponent.ctorParameters = function () { return []; };
    return DateTimeComponent;
}(ngx_kervi__WEBPACK_IMPORTED_MODULE_2__["KerviDateTimeComponent"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ColorComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(ColorComponent, _super);
    function ColorComponent() {
        return _super.call(this) || this;
        //console.log("cnio",this);
    }
    /**
     * @param {?} v
     * @return {?}
     */
    ColorComponent.prototype.setValue = /**
     * @param {?} v
     * @return {?}
     */
    function (v) {
        console.log(v);
    };
    /**
     * @return {?}
     */
    ColorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.ngOnInitColor();
    };
    ColorComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'kervi-value-color',
                    template: "<kervi-color [color]=\"(value.value$ | async)\" (colorChange)=\"setKerviValue($event)\" [linkParameters]=\"linkParameters\" ></kervi-color>\n",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    ColorComponent.ctorParameters = function () { return []; };
    return ColorComponent;
}(ngx_kervi__WEBPACK_IMPORTED_MODULE_2__["KerviColorComponent"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SparklineComponent = /** @class */ (function () {
    function SparklineComponent(kerviService, templateService) {
        this.kerviService = kerviService;
        this.templateService = templateService;
        this.value = null;
        this.linkParameters = null;
        this.dashboardSizes = new kervi_js__WEBPACK_IMPORTED_MODULE_3__["DashboardSizes"]();
        this.series = [];
    }
    /**
     * @private
     * @return {?}
     */
    SparklineComponent.prototype.createElement = /**
     * @private
     * @return {?}
     */
    function () {
        this.series = [this.value.value];
        this.options = {
            chart: {
                height: 14,
                width: 60,
                type: 'area',
                sparkline: {
                    enabled: true
                }
            },
            stroke: {
                curve: 'straight',
                width: 1
            },
            fill: {
                opacity: 0.3,
            },
            series: [{
                    data: this.value.sparkline$.value
                }],
            yaxis: {
                min: 0
            },
            colors: [this.color("color", ".kervi-sparkline")],
        };
        if (this.chartObj) {
            this.chartObj.destroy();
        }
        console.log("create sparkline", this.value.id);
        this.chartObj = new ApexCharts(this.chartElement.nativeElement, this.options);
        this.chartObj.render();
    };
    /**
     * @private
     * @param {?} style
     * @param {?} selector
     * @return {?}
     */
    SparklineComponent.prototype.color = /**
     * @private
     * @param {?} style
     * @param {?} selector
     * @return {?}
     */
    function (style, selector) {
        return this.templateService.getColor(style, selector);
    };
    /**
     * @return {?}
     */
    SparklineComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var self = this;
        rxjs__WEBPACK_IMPORTED_MODULE_4__["asapScheduler"].schedule((/**
         * @return {?}
         */
        function () {
            _this.createElement();
        }));
        this.value.sparkline$.subscribe((/**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            if (self.chartObj && v) {
                self.chartObj.updateSeries([{
                        data: v
                    }]);
            }
        }));
    };
    SparklineComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'value-sparkline',
                    template: "<div #chart></div>",
                    styles: [""],
                },] },
    ];
    /** @nocollapse */
    SparklineComponent.ctorParameters = function () { return [
        { type: ngx_kervi__WEBPACK_IMPORTED_MODULE_2__["NGXKerviService"] },
        { type: ngx_kervi__WEBPACK_IMPORTED_MODULE_2__["KerviTemplateService"] }
    ]; };
    SparklineComponent.propDecorators = {
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        linkParameters: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dashboardSizes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        chartElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['chart',] }]
    };
    return SparklineComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SliderComponent = /** @class */ (function () {
    function SliderComponent(elementRef, templateService) {
        this.elementRef = elementRef;
        this.templateService = templateService;
        this.sliderValue = 0;
        this.isReady = false;
        this.ignoreChange = false;
        this.type = "horizontal_slider";
        this.defaultSizes = new kervi_js__WEBPACK_IMPORTED_MODULE_3__["DashboardSizes"]();
        this.sliderChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.moveDelayTimer = null;
        this.inSlide = false;
        //console.log("cnio",this);
    }
    Object.defineProperty(SliderComponent.prototype, "value", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value != this.sliderValue) {
                this.sliderValue = value;
                if (this.isReady) {
                    this.ignoreChange = true;
                    jQuery("input", this.elementRef.nativeElement).bootstrapSlider('setValue', value);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} style
     * @param {?} selector
     * @return {?}
     */
    SliderComponent.prototype.color = /**
     * @private
     * @param {?} style
     * @param {?} selector
     * @return {?}
     */
    function (style, selector) {
        return this.templateService.getColor(style, selector);
    };
    /**
     * @return {?}
     */
    SliderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var self = this;
        /** @type {?} */
        var color = this.color("color", ".number-gauge-template");
        setTimeout((/**
         * @return {?}
         */
        function () {
            jQuery('input', self.elementRef.nativeElement).bootstrapSlider({
                tooltip: "hide",
                min: self.minValue,
                max: self.maxValue,
                step: self.tick,
                orientation: self.type == "horizontal_slider" ? "horizontal" : "vertical"
            });
            jQuery('.slider', self.elementRef.nativeElement).on("change", (/**
             * @param {?} e
             * @param {?} x
             * @return {?}
             */
            function (e, x) {
                console.log("slsv", e, x);
                if (e.value.newValue && !self.ignoreChange)
                    self.sliderChanged.emit(e.value.newValue);
                self.ignoreChange = false;
            }));
            jQuery('.slider', self.elementRef.nativeElement).on("slideStart", (/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                self.inSlide = true;
            }));
            jQuery('.slider', self.elementRef.nativeElement).on("slideStop", (/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                self.inSlide = false;
            }));
            self.isReady = true;
        }), 0);
    };
    /**
     * @param {?} v
     * @return {?}
     */
    SliderComponent.prototype.step = /**
     * @param {?} v
     * @return {?}
     */
    function (v) {
        this.sliderChanged.emit(this.sliderValue + v);
    };
    SliderComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ui-slider',
                    template: "",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    SliderComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: ngx_kervi__WEBPACK_IMPORTED_MODULE_2__["KerviTemplateService"] }
    ]; };
    SliderComponent.propDecorators = {
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        tick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        linkParameters: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        defaultSizes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        maxValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        minValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        sliderChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return SliderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GaugeComponent = /** @class */ (function () {
    function GaugeComponent(kerviService, templateService) {
        this.kerviService = kerviService;
        this.templateService = templateService;
        this.value = null;
        this.linkParameters = null;
        this.dashboardSizes = new kervi_js__WEBPACK_IMPORTED_MODULE_3__["DashboardSizes"]();
        this.series = [];
    }
    /**
     * @private
     * @return {?}
     */
    GaugeComponent.prototype.createElement = /**
     * @private
     * @return {?}
     */
    function () {
        this.series = [this.value.value];
        this.options = {
            chart: {
                type: 'radialBar',
                height: this.linkParameters.gaugeSize
            },
            plotOptions: {
                radialBar: {
                    startAngle: -135,
                    endAngle: 135,
                    hollow: {
                        size: '70%',
                    },
                    track: {
                        startAngle: -135,
                        endAngle: 135,
                    },
                    dataLabels: {
                        name: {
                            show: true,
                            color: "#2d353c",
                            fontSize: "14px"
                        },
                        value: {
                            fontSize: "24px",
                            show: true
                        }
                    }
                }
            },
            colors: [this.color("color", ".kervi-chart")],
            // ['#9fd037'],
            series: this.series,
            labels: [this.value.name],
        };
        if (this.chartObj) {
            this.chartObj.destroy();
        }
        console.log("create gauge", this.value.id);
        this.chartObj = new ApexCharts(this.chartElement.nativeElement, this.options);
        this.chartObj.render();
    };
    /**
     * @return {?}
     */
    GaugeComponent.prototype.render = /**
     * @return {?}
     */
    function () {
        return this.chartObj.render();
    };
    /**
     * @private
     * @param {?} style
     * @param {?} selector
     * @return {?}
     */
    GaugeComponent.prototype.color = /**
     * @private
     * @param {?} style
     * @param {?} selector
     * @return {?}
     */
    function (style, selector) {
        return this.templateService.getColor(style, selector);
    };
    /**
     * @return {?}
     */
    GaugeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var self = this;
        rxjs__WEBPACK_IMPORTED_MODULE_4__["asapScheduler"].schedule((/**
         * @return {?}
         */
        function () {
            _this.createElement();
        }));
        this.value.value$.subscribe((/**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            if (self.chartObj && v) {
                //self.series=[v];
                console.log("gv", v);
                self.chartObj.updateSeries([v]);
            }
        }));
    };
    /**
     * @return {?}
     */
    GaugeComponent.prototype.loadPeriod = /**
     * @return {?}
     */
    function () {
        //console.log("lp", this.periodStart, this.periodEnd);
        //this.kerviService.spine.sendQuery("getSensorData", this.value.id, this.periodStart.toISOString(), this.periodEnd.toISOString(), function (results) {
        //console.log("gsd", results);
        //var sensorData = results;
        //self.chartData.length = 0;
        //for (var i = 0; (i < sensorData.length); i++) {
        //var dataItem = sensorData[i]
        //self.chartData.push({ x: new Date(dataItem.ts + " utc"), y: dataItem.value });
        //}
        //self.chart.render();
        //self.chart.update();
        //});
    };
    /**
     * @private
     * @return {?}
     */
    GaugeComponent.prototype.cleanData = /**
     * @private
     * @return {?}
     */
    function () {
        // if(this.updateChart){
        //   var doClean = true;
        //   var limitTS = this.getPeriodLimit();
        //   var ds = this.chart.data.datasets[0].data
        //   while ( ds.length>0 && doClean){
        //     if (ds[0].x < limitTS)
        //       ds.shift();
        //     else
        //       doClean = false
        //   }
        // }
    };
    GaugeComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'kervi-gauge',
                    template: "<div #chart></div>",
                    styles: [""],
                },] },
    ];
    /** @nocollapse */
    GaugeComponent.ctorParameters = function () { return [
        { type: ngx_kervi__WEBPACK_IMPORTED_MODULE_2__["NGXKerviService"] },
        { type: ngx_kervi__WEBPACK_IMPORTED_MODULE_2__["KerviTemplateService"] }
    ]; };
    GaugeComponent.propDecorators = {
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        linkParameters: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dashboardSizes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        chartElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['chart',] }]
    };
    return GaugeComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var KerviChartComponent = /** @class */ (function () {
    function KerviChartComponent(kerviService, templateService) {
        this.kerviService = kerviService;
        this.templateService = templateService;
        this.value = null;
        this.linkParameters = null;
        this.dashboardSizes = new kervi_js__WEBPACK_IMPORTED_MODULE_3__["DashboardSizes"]();
        this.series = [];
    }
    /**
     * @private
     * @return {?}
     */
    KerviChartComponent.prototype.createElement = /**
     * @private
     * @return {?}
     */
    function () {
        this.series = [
            {
                name: this.value.name,
                data: []
            }
        ];
        this.options = {
            chart: {
                id: "chart_" + this.value.id,
                width: "100%",
                height: 300,
                type: this.linkParameters.chartType,
                animations: {
                    enabled: true,
                    easing: 'linear',
                    dynamicAnimation: {
                        speed: 100
                    }
                },
                toolbar: {
                    show: false,
                    tools: {
                        download: true,
                        selection: true,
                        zoom: true,
                        zoomin: true,
                        zoomout: true,
                        pan: true,
                        reset: true,
                        customIcons: []
                    },
                    autoSelected: 'zoom'
                },
                zoom: {
                    enabled: true
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                width: 1
            },
            title: {
                text: this.linkParameters.chartTitle,
                align: 'left'
            },
            markers: {
                size: 0
            },
            xaxis: {
                type: 'datetime',
            },
            yaxis: {
                max: this.value.maxValue,
                min: this.value.minValue
            },
            legend: {
                show: false
            },
            grid: {
                show: this.linkParameters.chartGrid,
                xaxis: {
                    lines: {
                        show: true,
                        animate: true
                    }
                },
                yaxis: {
                    lines: {
                        show: true,
                        animate: true
                    }
                }
            },
            colors: [this.color("color", ".kervi-chart")],
            // ['#9fd037'],
            series: this.series
        };
        if (this.chartObj) {
            this.chartObj.destroy();
        }
        if (!this.linkParameters.chartTitle)
            delete (this.options["title"]);
        console.log("create chart", this.value.id);
        this.chartObj = new ApexCharts(this.chartElement.nativeElement, this.options);
        this.chartObj.render();
    };
    /**
     * @private
     * @param {?} style
     * @param {?} selector
     * @return {?}
     */
    KerviChartComponent.prototype.color = /**
     * @private
     * @param {?} style
     * @param {?} selector
     * @return {?}
     */
    function (style, selector) {
        return this.templateService.getColor(style, selector);
    };
    /**
     * @return {?}
     */
    KerviChartComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var self = this;
        rxjs__WEBPACK_IMPORTED_MODULE_4__["asapScheduler"].schedule((/**
         * @return {?}
         */
        function () {
            _this.createElement();
        }));
        this.value.value$.subscribe((/**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            if (self.chartObj) {
                self.series[0].data.push([self.value.valueTS.getTime(), v]);
                self.chartObj.updateSeries(self.series);
            }
        }));
    };
    /**
     * @return {?}
     */
    KerviChartComponent.prototype.loadPeriod = /**
     * @return {?}
     */
    function () {
        //console.log("lp", this.periodStart, this.periodEnd);
        //this.kerviService.spine.sendQuery("getSensorData", this.value.id, this.periodStart.toISOString(), this.periodEnd.toISOString(), function (results) {
        //console.log("gsd", results);
        //var sensorData = results;
        //self.chartData.length = 0;
        //for (var i = 0; (i < sensorData.length); i++) {
        //var dataItem = sensorData[i]
        //self.chartData.push({ x: new Date(dataItem.ts + " utc"), y: dataItem.value });
        //}
        //self.chart.render();
        //self.chart.update();
        //});
    };
    /**
     * @private
     * @return {?}
     */
    KerviChartComponent.prototype.cleanData = /**
     * @private
     * @return {?}
     */
    function () {
        // if(this.updateChart){
        //   var doClean = true;
        //   var limitTS = this.getPeriodLimit();
        //   var ds = this.chart.data.datasets[0].data
        //   while ( ds.length>0 && doClean){
        //     if (ds[0].x < limitTS)
        //       ds.shift();
        //     else
        //       doClean = false
        //   }
        // }
    };
    KerviChartComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'kervi-chart',
                    template: "<div #chart></div>",
                    styles: [""],
                },] },
    ];
    /** @nocollapse */
    KerviChartComponent.ctorParameters = function () { return [
        { type: ngx_kervi__WEBPACK_IMPORTED_MODULE_2__["NGXKerviService"] },
        { type: ngx_kervi__WEBPACK_IMPORTED_MODULE_2__["KerviTemplateService"] }
    ]; };
    KerviChartComponent.propDecorators = {
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        linkParameters: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dashboardSizes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        chartElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['chart',] }]
    };
    return KerviChartComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SwitchButtonComponent = /** @class */ (function () {
    function SwitchButtonComponent() {
        this.inline = false;
        this.dashboardSizes = new kervi_js__WEBPACK_IMPORTED_MODULE_3__["DashboardSizes"]();
        this.buttonState = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    SwitchButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        console.log("sb", this.value);
        if (this.linkParameters) {
            if (!this.linkParameters.buttonWidth)
                this.width = this.dashboardSizes.switchWidth;
            else
                this.width = this.linkParameters.buttonWidth;
            if (!this.linkParameters.buttonHeight)
                this.height = this.dashboardSizes.switchHeight;
            else
                this.height = this.linkParameters.buttonHeight;
        }
        else {
            this.width = this.dashboardSizes.switchWidth;
            this.height = this.dashboardSizes.switchHeight;
        }
    };
    /**
     * @param {?} state
     * @return {?}
     */
    SwitchButtonComponent.prototype.modelChange = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this.buttonState.emit(state);
    };
    SwitchButtonComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'kervi-switchbutton',
                    template: "<nz-switch \n    [(ngModel)]=\"value\"\n    [nzCheckedChildren]=\"checkedTemplate\" [nzUnCheckedChildren]=\"unCheckedTemplate\"\n    (ngModelChange)=\"modelChange($event)\"\n>\n\n</nz-switch>\n<ng-template #checkedTemplate>\n    <i *ngIf=\"linkParameters.onIcon\"  nz-icon [type]=\"linkParameters.onIcon\"></i>\n    <span >{{ linkParameters.onText }}</span>\n</ng-template>\n<ng-template #unCheckedTemplate>\n    <i *ngIf=\"linkParameters.offIcon\"  nz-icon [type]=\"linkParameters.offIcon\"></i>\n    <span >{{ linkParameters.offText }}</span>\n</ng-template>\n",
                    styles: [""],
                },] },
    ];
    /** @nocollapse */
    SwitchButtonComponent.ctorParameters = function () { return []; };
    SwitchButtonComponent.propDecorators = {
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        linkParameters: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dashboardSizes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        buttonState: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return SwitchButtonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
        this.linkParameters = null;
        this.inline = false;
        this.dashboardSizes = new kervi_js__WEBPACK_IMPORTED_MODULE_3__["DashboardSizes"]();
        this.buttonState = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    ButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var self = this;
        if (self.linkParameters) {
            if (!self.linkParameters.buttonWidth)
                this.width = this.dashboardSizes.buttonWidth;
            else
                this.width = self.linkParameters.buttonWidth;
            if (!self.linkParameters.buttonHeight)
                this.height = this.dashboardSizes.buttonHeight;
            else
                this.height = self.linkParameters.buttonHeight;
        }
        else {
            this.width = this.dashboardSizes.buttonWidth;
            this.height = this.dashboardSizes.buttonHeight;
        }
    };
    /**
     * @return {?}
     */
    ButtonComponent.prototype.confirm = /**
     * @return {?}
     */
    function () {
        console.log("c", this.value);
        this.buttonState.emit(true);
        this.buttonState.emit(false);
    };
    /**
     * @return {?}
     */
    ButtonComponent.prototype.press = /**
     * @return {?}
     */
    function () {
        console.log("p", this.value);
        this.buttonState.emit(true);
    };
    /**
     * @return {?}
     */
    ButtonComponent.prototype.release = /**
     * @return {?}
     */
    function () {
        this.buttonState.emit(false);
    };
    ButtonComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'kervi-button',
                    template: "<ng-template #buttonContentTemplate>\n    <i *ngIf=\"linkParameters.buttonIcon\" nz-icon [type]=\"linkParameters.buttonIcon\"></i>\n    {{ linkParameters.buttonText }}\n</ng-template>\n<button\n    *ngIf = \"linkParameters.confirm\"\n    nz-button nzType=\"primary\"\n    (nzOnConfirm)=\"confirm()\"\n    nz-popconfirm [nzTitle]=\"linkParameters.confirmMessage\"\n>\n<ng-container *ngTemplateOutlet=\"buttonContentTemplate\"></ng-container>\n</button>\n<button\n    *ngIf = \"!linkParameters.confirm\"\n    nz-button nzType=\"primary\"\n    (mousedown)=\"press()\" \n    (mouseup)=\"release()\"\n>\n<ng-container *ngTemplateOutlet=\"buttonContentTemplate\"></ng-container>\n</button>\n",
                    styles: [""],
                },] },
    ];
    /** @nocollapse */
    ButtonComponent.ctorParameters = function () { return []; };
    ButtonComponent.propDecorators = {
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        linkParameters: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dashboardSizes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        buttonState: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return ButtonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MPEGViewerComponent = /** @class */ (function () {
    function MPEGViewerComponent() {
        this.width = null;
        this.height = null;
        this.imageLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.firstLoad = true;
    }
    /**
     * @return {?}
     */
    MPEGViewerComponent.prototype.imageReady = /**
     * @return {?}
     */
    function () {
        if (this.firstLoad) {
            this.firstLoad = false;
            this.imageLoaded.emit(true);
        }
    };
    MPEGViewerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'kervi-mpeg-viewer',
                    template: "<img (load)=\"imageReady()\" class=\"camImage\" src=\"{{cameraSource}}\" [style.height.%]=\"height\" [style.width.%]=\"width\">\n",
                    styles: ["#video-viewer{margin-top:-20px}.cam-pad-area{z-index:1200;vertical-align:middle;width:200px;display:inline-block;position:absolute;left:389px;top:132px;color:#fff}"]
                },] },
    ];
    /** @nocollapse */
    MPEGViewerComponent.ctorParameters = function () { return []; };
    MPEGViewerComponent.propDecorators = {
        cameraSource: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        imageLoaded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return MPEGViewerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DateTimeComponent$1 = /** @class */ (function () {
    function DateTimeComponent(elementRef) {
        this.elementRef = elementRef;
        this.dateTimeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
        this.isReady = false;
    }
    /**
     * @return {?}
     */
    DateTimeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    DateTimeComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'kervi-datetime',
                    template: "<nz-date-picker \n*ngIf=\"type=='datetime'\"\nnzShowTime\n[(ngModel)]=\"dateTime.value\"\n[nzFormat] = \"format\"\n></nz-date-picker>\n\n<nz-date-picker \n*ngIf=\"type=='date'\"\n[(ngModel)]=\"dateTime.value\"\n[nzFormat] = \"format\"\n></nz-date-picker>\n\n\n<nz-time-picker \n*ngIf=\"type=='time'\"\n[(ngModel)]=\"dateTime.value\"\n[nzFormat] = \"format\"\n></nz-time-picker>\n",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    DateTimeComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    DateTimeComponent.propDecorators = {
        dateTime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        format: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dateTimeChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return DateTimeComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var IconsComponent = /** @class */ (function () {
    function IconsComponent() {
        this.icon = null;
    }
    /**
     * @return {?}
     */
    IconsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    IconsComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'kervi-icon',
                    template: "<i class=\"pi pi-{{icon}}\"></i>",
                    styles: [""],
                },] },
    ];
    /** @nocollapse */
    IconsComponent.ctorParameters = function () { return []; };
    IconsComponent.propDecorators = {
        icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return IconsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ColorComponent$1 = /** @class */ (function () {
    function ColorComponent(elementRef) {
        this.elementRef = elementRef;
        this.colorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.inline = false;
        this.dashboardSizes = new kervi_js__WEBPACK_IMPORTED_MODULE_3__["DashboardSizes"]();
        this.picker = null;
    }
    Object.defineProperty(ColorComponent.prototype, "color", {
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            console.log("cc", v, this.picker);
            this.colorValue = v;
            if (v) {
                //    jQuery('.color', this.elementRef.nativeElement).css("background-color", v)
                //else
                jQuery('.color', this.elementRef.nativeElement).attr("style", "background-color:" + v);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ColorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var self = this;
        if (!self.linkParameters.buttonWidth)
            this.width = this.dashboardSizes.switchWidth;
        else
            this.width = self.linkParameters.buttonWidth;
        if (this.linkParameters.isInput) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                self.picker = jQuery('.color', self.elementRef.nativeElement).colorPicker({
                    //color: 'rgba(255,12,14,1)',
                    cssAddon: '.cp-color-picker {z-index:2000}',
                    buildCallback: (/**
                     * @param {?} b
                     * @return {?}
                     */
                    function (b) {
                    }),
                    positionCallback: (/**
                     * @param {?} p
                     * @return {?}
                     */
                    function (p) {
                    }),
                    renderCallback: (/**
                     * @param {?} v
                     * @return {?}
                     */
                    function (v) {
                        /** @type {?} */
                        var value = v.text;
                        if (value.indexOf("rgb") == 0) {
                            /** @type {?} */
                            var rgb = v.text.split(',');
                            /** @type {?} */
                            var r = parseInt(rgb[0].substring(4));
                            /** @type {?} */
                            var g = parseInt(rgb[1]);
                            /** @type {?} */
                            var b = parseInt(rgb[2]);
                            value = "#" + r.toString(16) + g.toString(16) + b.toString(16);
                        }
                        console.log("cc", value);
                        self.colorChange.emit(value);
                    }),
                    actionCallback: (/**
                     * @param {?} v
                     * @param {?} x
                     * @return {?}
                     */
                    function (v, x) {
                        console.log("c", v, x);
                    })
                });
            }), 0);
        }
    };
    ColorComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'kervi-color',
                    template: "<div style=\"max-width:90px\" class=\"input-group\">\n    <div  [attr.background.value]=\"colorValue\" class=\"form-control color\"></div>\n</div>\n",
                    styles: [""],
                },] },
    ];
    /** @nocollapse */
    ColorComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    ColorComponent.propDecorators = {
        color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        colorChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        linkParameters: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dashboardSizes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return ColorComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UIComponentsModule = /** @class */ (function () {
    function UIComponentsModule() {
    }
    UIComponentsModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [
                        SparklineComponent,
                        SliderComponent,
                        IconsComponent,
                        GaugeComponent,
                        KerviChartComponent,
                        SwitchButtonComponent,
                        ButtonComponent,
                        //CamViewerComponent,
                        MPEGViewerComponent,
                        //ImageViewerComponent,
                        //ActionComponent,
                        DateTimeComponent$1,
                        ColorComponent$1
                    ],
                    exports: [
                        SparklineComponent,
                        SliderComponent,
                        IconsComponent,
                        MPEGViewerComponent,
                        GaugeComponent,
                        KerviChartComponent,
                        SwitchButtonComponent,
                        ButtonComponent,
                        //CamViewerComponent,
                        //ActionComponent,
                        DateTimeComponent$1,
                        ColorComponent$1
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
                        ngx_kervi__WEBPACK_IMPORTED_MODULE_2__["NGXKerviPipesModule"],
                        _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                        ngx_gauge__WEBPACK_IMPORTED_MODULE_7__["NgxGaugeModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__["NgZorroAntdModule"],
                        ng_apexcharts__WEBPACK_IMPORTED_MODULE_10__["NgApexchartsModule"]
                        //KerviPipesModule
                    ],
                    providers: [],
                    bootstrap: []
                },] },
    ];
    /** @nocollapse */
    UIComponentsModule.ctorParameters = function () { return []; };
    return UIComponentsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var KerviValueComponent = /** @class */ (function () {
    function KerviValueComponent() {
        this.inline = false;
        this.dashboardSizes = new kervi_js__WEBPACK_IMPORTED_MODULE_3__["DashboardSizes"]();
    }
    KerviValueComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'kervi-value',
                    template: "    <kervi-value-number *ngIf=\"value.typeName=='Number'\" [value]=\"value\" [dashboardSizes]=\"dashboardSizes\" [linkParameters]=\"linkParameters\" [inline]=\"inline\" ></kervi-value-number>\n    <kervi-value-boolean *ngIf=\"value.typeName=='Boolean'\" [dashboardSizes]=\"dashboardSizes\" [linkParameters]=\"linkParameters\" [inline]=\"inline\" [value]=\"value\"></kervi-value-boolean>\n    <kervi-value-string *ngIf=\"value.typeName=='String'\" [dashboardSizes]=\"dashboardSizes\" [linkParameters]=\"linkParameters\" [inline]=\"inline\" [value]=\"value\"></kervi-value-string>\n    <kervi-value-color *ngIf=\"value.typeName=='Color'\" [dashboardSizes]=\"dashboardSizes\" [linkParameters]=\"linkParameters\" [inline]=\"inline\" [value]=\"value\"></kervi-value-color>\n    <kervi-value-datetime *ngIf=\"value.typeName=='DateTime'\" [dashboardSizes]=\"dashboardSizes\" [linkParameters]=\"linkParameters\" [inline]=\"inline\" [value]=\"value\"></kervi-value-datetime>\n",
                    styles: [""]
                    //directives: [ CommonModule  ],
                },] },
    ];
    /** @nocollapse */
    KerviValueComponent.ctorParameters = function () { return []; };
    KerviValueComponent.propDecorators = {
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dashboardPanel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        linkParameters: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dashboardSizes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return KerviValueComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ValuesModule = /** @class */ (function () {
    function ValuesModule() {
    }
    ValuesModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [
                        NumberComponent,
                        BooleanComponent,
                        KerviValueComponent,
                        StringComponent,
                        //EnumComponent,
                        DateTimeComponent,
                        ColorComponent
                    ],
                    exports: [
                        NumberComponent,
                        BooleanComponent,
                        KerviValueComponent,
                        StringComponent,
                        //EnumComponent,
                        DateTimeComponent,
                        ColorComponent
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                        ngx_kervi__WEBPACK_IMPORTED_MODULE_2__["NGXKerviPipesModule"],
                        UIComponentsModule,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__["NgZorroAntdModule"]
                    ],
                    providers: [],
                    bootstrap: []
                },] },
    ];
    /** @nocollapse */
    ValuesModule.ctorParameters = function () { return []; };
    return ValuesModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ControllerPadComponent = /** @class */ (function () {
    function ControllerPadComponent(elementRef) {
        this.elementRef = elementRef;
        this.padSize = 180;
        this.moveDelayTimer = null;
        this.inDrag = false;
    }
    /**
     * @return {?}
     */
    ControllerPadComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var self = this;
        if (this.XValue) {
            jQuery("input[name='pad-x']", self.elementRef.nativeElement).val(this.XValue.value$.value).change();
            this.XValue.value$.subscribe((/**
             * @param {?} v
             * @return {?}
             */
            function (v) {
                console.log("pad-x", self.YValue.name, v);
                jQuery("input[name='pad-x']", self.elementRef.nativeElement).val(v).change();
            }));
        }
        if (this.YValue) {
            jQuery("input[name='pad-y']", self.elementRef.nativeElement).val(this.YValue.value$.value).change();
            this.YValue.value$.subscribe((/**
             * @param {?} v
             * @return {?}
             */
            function (v) {
                console.log("pad-y", self.YValue.name, v);
                jQuery("input[name='pad-y']", self.elementRef.nativeElement).val(v).change();
            }));
        }
        /** @type {?} */
        var color = "rgba(255,255,255,.5)";
        /** @type {?} */
        var p = jQuery('fieldset', self.elementRef.nativeElement).xy({
            displayPrevious: false,
            min: -100,
            max: 100,
            width: self.padSize,
            height: self.padSize,
            fgColor: color,
            bgColor: color,
            change: (/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (self.moveDelayTimer) {
                    clearTimeout(self.moveDelayTimer);
                }
                self.moveDelayTimer = setTimeout((/**
                 * @return {?}
                 */
                function () {
                    if (self.XValue)
                        self.XValue.set(value[0]);
                    if (self.YValue)
                        self.YValue.set(value[1]);
                }), 0);
            })
        })
            .css({ 'border': '2px solid ' + color });
    };
    /**
     * @return {?}
     */
    ControllerPadComponent.prototype.padPress = /**
     * @return {?}
     */
    function () {
        this.inDrag = true;
    };
    /**
     * @return {?}
     */
    ControllerPadComponent.prototype.padRelease = /**
     * @return {?}
     */
    function () {
        console.log("pr", this.inDrag, this.autoCenter);
        this.inDrag = false;
        if (this.autoCenter && this.XValue) {
            console.log("x-auto center");
            jQuery("input[name='pad-x']", this.elementRef.nativeElement).val(0).change();
            this.XValue.set(0);
        }
        if (this.autoCenter && this.YValue) {
            console.log("y-auto center");
            jQuery("input[name='pad-y']", this.elementRef.nativeElement).val(0).change();
            this.YValue.set(0);
        }
    };
    ControllerPadComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'kervi-controller-pad',
                    template: "<div (mousedown)=\"padPress()\" (mouseup)=\"padRelease()\">\n  <fieldset id=\"leftPad\" style=\"position:absolute\" class=\"pad\" [attr.data-width]=\"padSize\" [attr.data-height]=\"padSize\" >\n    <legend></legend>\n    <input type=\"hidden\" name=\"pad-x\" value=\"0\"><input type=\"hidden\"  name=\"pad-y\" value=\"0\">\n  </fieldset>\n</div>",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    ControllerPadComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    ControllerPadComponent.propDecorators = {
        XValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        YValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        autoCenter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return ControllerPadComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CamViewerComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(CamViewerComponent, _super);
    function CamViewerComponent(elementRef) {
        var _this = _super.call(this) || this;
        _this.elementRef = elementRef;
        _this.showCamPad = false;
        _this.padSize = 180;
        return _this;
    }
    /**
     * @return {?}
     */
    CamViewerComponent.prototype.imageLoaded = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var h = this.videoViewer.nativeElement.offsetHeight;
        /** @type {?} */
        var w = this.elementRef.nativeElement.offsetWidth;
        //this.camPadTop = h / 2 - this.padSize/2;
        //this.camPadLeft = w / 2 - this.padSize/2;
    };
    /**
     * @return {?}
     */
    CamViewerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var self = this;
        /** @type {?} */
        var element = self.videoViewer.nativeElement;
        /** @type {?} */
        var viewPortHeight = window.innerHeight;
        /** @type {?} */
        var viewPortWidth = window.innerWidth;
        this.camHeight = viewPortHeight - 65;
        this.camWidth = viewPortWidth;
        console.log("avic", this.camHeight, this.camWidth);
        setTimeout((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var h = element.offsetHeight;
            /** @type {?} */
            var w = element.offsetWidth;
            if (w < self.padSize) {
                self.padSize = w - 10;
                //jQuery(".camPad", self.elementRef.nativeElement).css({ width: self.padSize, height:  self.padSize });
            }
            console.log("cami", h, w, self.padSize, element);
            self.camPadTop = h / 2 - (self.padSize / 2);
            self.camPadLeft = w / 2 - (self.padSize / 2);
            self.showCamPad = true;
        }), 0);
        // jQuery(window).bind('resize', function () {
        //     var h = element.offsetHeight;
        //     var w = element.offsetWidth;
        //     self.camPadTop = h / 2 - (self.padSize/2)
        //     self.camPadLeft =  w / 2 - (self.padSize / 2);
        // })
    };
    /**
     * @return {?}
     */
    CamViewerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.ngOnInitCamera();
    };
    CamViewerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'kervi-cam-viewer',
                    template: "<ng-container *ngIf=\"isBackground\">\n\t<div #videoViewer id=\"video-viewer\" class=\"video video-background\" style=\"text-align:center;position:fixed;top:60px;left:0px;height:100%;\" [style.height.px]=\"camHeight\" [style.width.px]=\"camWidth\">\n\t\t<span class=\"camImage\" style=\"top:0px;left:0px;\">\n\t\t\t<kervi-mpeg-viewer (imageLoaded)=\"imageLoaded()\" [height]=100   [cameraSource]=\"cameraSource\" > </kervi-mpeg-viewer>\n\t\t</span>\n\t\t<canvas id=\"camCanvas\" style=\"position:absolute;top:0px;left:0px;\" [style.height.px]=\"camHeight\" [style.width.px]=\"camWidth\"></canvas>\n\t\t<canvas id=\"poiCanvas\" style=\"position:absolute;top:0px;left:0px;width:100%;height:100%\"></canvas>\n\t\t<div class=\"cam-pad-area\" *ngIf=\"showCamPad\" [style.left.px]=\"camPadLeft\" [style.top.px]=\"camPadTop\" style=\"position:absolute;z-index: 2000\">\n      <kervi-controller-pad [XValue]=\"pan\" [YValue]=\"tilt\"> </kervi-controller-pad>\n\t\t</div>\n\t\t<div style=\"position:absolute;top:30px;left:0px;width:100%;height:50px\">\n\t\t\t<ng-container  *ngFor=\"let action of camera.actions\">\n\t\t\t\t<kervi-action title=\"{{( action.name | translate)}}\" *ngIf=\"action.visible\" [action]=\"action\" ></kervi-action>\n\t\t\t</ng-container>\n\t\t\t<!-- <button class=\"btn btn-primary \"   (mousedown)=\"imageViewer.show()\" title=\"{{( 'media_folder' | translate)}}\">\n\t\t\t\t<i  class='fa fa-folder'></i>\n\t\t\t</button> -->\n\t\t</div>\n\t</div>\n</ng-container>\n\n<ng-container *ngIf=\"!isBackground\">\n\t<div #videoViewer id=\"video-viewer\" class=\"video\" style=\"overflow:hidden;position:relative;width:100%\">\n\t\t<span class=\"camImage\" style=\"top:0px;left:0px;height:100%;width:100%\">\n\t\t\t<kervi-mpeg-viewer (imageLoaded)=\"imageLoaded()\" [width]=100  [cameraSource]=\"cameraSource\" > </kervi-mpeg-viewer>\n\t\t</span>\n\t\t<canvas id=\"camCanvas\" style=\"position:absolute;top:0px;left:0px;width:100%;height:100%\"></canvas>\n\t\t<canvas id=\"poiCanvas\" style=\"position:absolute;top:0px;left:0px;width:100%;height:100%\"></canvas>\n\t\t<div class=\"cam-pad-area\" *ngIf=\"showCamPad\" [style.left.px]=\"camPadLeft\" [style.top.px]=\"camPadTop\" style=\"position:absolute\">\n      <kervi-controller-pad [XValue]=\"pan\" [YValue]=\"tilt\"> </kervi-controller-pad>\n\t\t</div>\n\t</div>\n\t<div>\n\t\t<ng-container  *ngFor=\"let action of camera.actions\">\n\t\t\t<kervi-action *ngIf=\"action.visible\" title=\"{{( action.name | translate)}}\" [action]=\"action\" ></kervi-action>\n\t\t</ng-container>\n\t\t<!-- <button class=\"btn btn-primary\" (mousedown)=\"imageViewer.show()\" title=\"{{( 'media_folder' | translate)}}\">\n\t\t\t<i  class='fa fa-folder'></i>\n\t\t</button> -->\n\t</div>\n</ng-container>\n<!-- <kervi-image-viewer #imageViewer [camComponent]=\"this\" [cameraSource]=\"cameraSource\"></kervi-image-viewer> -->",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    CamViewerComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    CamViewerComponent.propDecorators = {
        videoViewer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ["videoViewer",] }]
    };
    return CamViewerComponent;
}(ngx_kervi__WEBPACK_IMPORTED_MODULE_2__["KerviCameraComponent"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//import { TemplateService } from '../../template.service';
var ActionComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(ActionComponent, _super);
    function ActionComponent() {
        return _super.call(this) || this;
    }
    /**
     * @return {?}
     */
    ActionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.ngOnInitAction();
    };
    ActionComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'kervi-action',
                    template: "<kervi-switchbutton \n    [dashboardSizes]=\"dashboardSizes\" \n    [inline]=\"inline\" \n    [value]=\"(state | async)\" \n    [linkParameters]=\"linkParameters\"\n    (buttonState)=\"setActionState($event)\"\n    *ngIf=\"displayType!='button'\"\n></kervi-switchbutton>\n<kervi-button \n    [title]=\"action.name\" \n    [dashboardSizes]=\"dashboardSizes\" \n    [value]=\"(state | async)\" \n    [inline]=\"inline\" \n    [linkParameters]=\"linkParameters\"\n    (buttonState)=\"setActionState($event)\" \n    *ngIf=\"displayType=='button'\"\n></kervi-button>\n",
                    styles: [""],
                },] },
    ];
    /** @nocollapse */
    ActionComponent.ctorParameters = function () { return []; };
    return ActionComponent;
}(ngx_kervi__WEBPACK_IMPORTED_MODULE_2__["KerviActionComponent"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//import { TemplateService } from '../../template.service';
var UserLogComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(UserLogComponent, _super);
    function UserLogComponent() {
        return _super.call(this) || this;
    }
    /**
     * @return {?}
     */
    UserLogComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.ngOnInitUserLog();
    };
    UserLogComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'kervi-user-log',
                    template: "<nz-timeline >\n    <nz-timeline-item [nzDot]=\"message.level==1 ? dotTemplate1 :  message.level==2 ? dotTemplate2 : dotTemplate3\" *ngFor=\"let message of messages$ | async\">\n            <strong>{{message.sourceName}}</strong><br>\n            <span style=\"font-size:80%\">{{message.timestamp | date: 'HH:mm:ss'}}</span><br>    \n            {{message.topic}}\n            <nz-divider></nz-divider>\n    </nz-timeline-item>\n</nz-timeline>\n<ng-template #dotTemplate1>\n    <i nz-icon type=\"close-circle\" style=\"font-size: 16px;\" [nzTheme]=\"'twotone'\" [nzTwotoneColor]=\"'#f5222d'\"></i>\n</ng-template>\n<ng-template #dotTemplate2>\n    <i nz-icon type=\"warning\" style=\"font-size: 16px;\" [nzTheme]=\"'twotone'\" [nzTwotoneColor]=\"'#faad14'\"></i>\n</ng-template>\n<ng-template #dotTemplate3>\n    <i nz-icon nz-icon type=\"check-circle\" [nzTheme]=\"'twotone'\" [nzTwotoneColor]=\"'#52c41a'\" style=\"font-size: 16px;\"></i>\n</ng-template>",
                    styles: [""],
                },] },
    ];
    /** @nocollapse */
    UserLogComponent.ctorParameters = function () { return []; };
    return UserLogComponent;
}(ngx_kervi__WEBPACK_IMPORTED_MODULE_2__["KerviUserLogComponent"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UserMessagesComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(UserMessagesComponent, _super);
    function UserMessagesComponent(notification) {
        var _this = _super.call(this) || this;
        _this.notification = notification;
        /** @type {?} */
        var self = _this;
        _this.lastMessage$.subscribe((/**
         * @param {?} message
         * @return {?}
         */
        function (message) {
            if (message) {
                self.notification.template(self.messageTemplate, { nzData: message });
            }
        }));
        return _this;
    }
    /**
     * @return {?}
     */
    UserMessagesComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.ngOnInitUserLog();
    };
    UserMessagesComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'kervi-user-messages',
                    template: "<ng-template let-message=\"data\">\n    <div class=\"ant-notification-notice-content\">\n        <div class=\"ant-notification-notice-with-icon\">\n            <span class=\"ant-notification-notice-icon\">\n                <i *ngIf=\"message.level==3\" nz-icon type=\"check-circle\" [nzTheme]=\"'twotone'\" [nzTwotoneColor]=\"'#52c41a'\"></i>\n                <i *ngIf=\"message.level==2\" nz-icon type=\"warning\" [nzTheme]=\"'twotone'\" [nzTwotoneColor]=\"'#faad14'\"></i>\n                <i *ngIf=\"message.level==1\" nz-icon type=\"close-circle\" [nzTheme]=\"'twotone'\" [nzTwotoneColor]=\"'#f5222d'\"></i>\n            </span>\n            <div class=\"ant-notification-notice-message\">{{message.sourceName}}</div>\n            <div class=\"ant-notification-notice-description\">\n                {{ message.topic }}                \n            </div>\n        </div>\n    </div>\n    \n</ng-template>",
                    styles: [""],
                },] },
    ];
    /** @nocollapse */
    UserMessagesComponent.ctorParameters = function () { return [
        { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__["NzNotificationService"] }
    ]; };
    UserMessagesComponent.propDecorators = {
        messageTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],] }]
    };
    return UserMessagesComponent;
}(ngx_kervi__WEBPACK_IMPORTED_MODULE_2__["KerviUserLogComponent"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UserMessageButtonComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(UserMessageButtonComponent, _super);
    function UserMessageButtonComponent() {
        var _this = _super.call(this) || this;
        _this.visible = false;
        return _this;
    }
    /**
     * @return {?}
     */
    UserMessageButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.ngOnInitUserLog();
    };
    /**
     * @return {?}
     */
    UserMessageButtonComponent.prototype.open = /**
     * @return {?}
     */
    function () {
        this.visible = true;
    };
    /**
     * @return {?}
     */
    UserMessageButtonComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.visible = false;
    };
    UserMessageButtonComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'kervi-message-button',
                    template: "<nz-badge [nzCount]=\"messageCount$ | async\" [nzOverflowCount]=\"99\">\n    <button *ngIf=\"(messageCount$ | async)>0\" nz-button nzGhost  nzType=\"default\" nzShape=\"circle\" (click)=\"open()\">\n        <i nz-icon nzType=\"notification\" nzTheme=\"twotone\" [nzTwotoneColor]=\"'#9fd037'\"></i>\n    </button>\n</nz-badge>\n\n<nz-drawer\n      [nzClosable]=\"false\"\n      [nzVisible]=\"visible\"\n      nzPlacement=\"right\"\n      nzTitle=\"Log\"\n      (nzOnClose)=\"close()\"\n    >\n    <kervi-user-log [inline]=\"false\"></kervi-user-log>\n</nz-drawer>",
                    styles: [""],
                },] },
    ];
    /** @nocollapse */
    UserMessageButtonComponent.ctorParameters = function () { return []; };
    return UserMessageButtonComponent;
}(ngx_kervi__WEBPACK_IMPORTED_MODULE_2__["KerviUserLogComponent"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var KerviZorroModule = /** @class */ (function () {
    function KerviZorroModule() {
    }
    KerviZorroModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
                        ngx_kervi__WEBPACK_IMPORTED_MODULE_2__["NGXKerviPipesModule"],
                        ngx_kervi__WEBPACK_IMPORTED_MODULE_2__["NgxKerviModule"],
                        ValuesModule,
                        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__["NgZorroAntdModule"],
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"],
                        UIComponentsModule
                    ],
                    declarations: [
                        DashboardPanelComponent,
                        WidgetComponent,
                        ControllerPadComponent,
                        CamViewerComponent,
                        ActionComponent,
                        UserLogComponent,
                        UserMessageButtonComponent,
                        UserMessagesComponent
                    ],
                    exports: [
                        DashboardPanelComponent,
                        ControllerPadComponent,
                        CamViewerComponent,
                        UserLogComponent,
                        UserMessageButtonComponent,
                        UserMessagesComponent
                    ]
                },] },
    ];
    return KerviZorroModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2Vydmktem9ycm8uanMubWFwIiwic291cmNlcyI6WyJuZzovL2tlcnZpLXpvcnJvL2xpYi9rZXJ2aS16b3Jyby5zZXJ2aWNlLnRzIiwibmc6Ly9rZXJ2aS16b3Jyby9saWIvZGFzaGJvYXJkLXBhbmVsL2Rhc2hib2FyZC1wYW5lbC5jb21wb25lbnQudHMiLCJuZzovL2tlcnZpLXpvcnJvL2xpYi93aWRnZXQvd2lkZ2V0LmNvbXBvbmVudC50cyIsIm5nOi8va2Vydmktem9ycm8vbGliL3ZhbHVlcy9udW1iZXItdmFsdWUvbnVtYmVyLXZhbHVlLmNvbXBvbmVudC50cyIsIm5nOi8va2Vydmktem9ycm8vbGliL3ZhbHVlcy9ib29sZWFuLXZhbHVlL2Jvb2xlYW4tdmFsdWUuY29tcG9uZW50LnRzIiwibmc6Ly9rZXJ2aS16b3Jyby9saWIvdmFsdWVzL3N0cmluZy12YWx1ZS9zdHJpbmctdmFsdWUuY29tcG9uZW50LnRzIiwibmc6Ly9rZXJ2aS16b3Jyby9saWIvdmFsdWVzL2RhdGV0aW1lLXZhbHVlL2RhdGV0aW1lLXZhbHVlLmNvbXBvbmVudC50cyIsIm5nOi8va2Vydmktem9ycm8vbGliL3ZhbHVlcy9jb2xvci12YWx1ZS9jb2xvci12YWx1ZS5jb21wb25lbnQudHMiLCJuZzovL2tlcnZpLXpvcnJvL2xpYi91aS1jb21wb25lbnRzL3NwYXJrbGluZS9zcGFya2xpbmUuY29tcG9uZW50LnRzIiwibmc6Ly9rZXJ2aS16b3Jyby9saWIvdWktY29tcG9uZW50cy9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC50cyIsIm5nOi8va2Vydmktem9ycm8vbGliL3VpLWNvbXBvbmVudHMvZ2F1Z2UvZ2F1Z2UuY29tcG9uZW50LnRzIiwibmc6Ly9rZXJ2aS16b3Jyby9saWIvdWktY29tcG9uZW50cy9jaGFydC9jaGFydC5jb21wb25lbnQudHMiLCJuZzovL2tlcnZpLXpvcnJvL2xpYi91aS1jb21wb25lbnRzL3N3aXRjaC1idXR0b24vc3dpdGNoLWJ1dHRvbi5jb21wb25lbnQudHMiLCJuZzovL2tlcnZpLXpvcnJvL2xpYi91aS1jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnRzIiwibmc6Ly9rZXJ2aS16b3Jyby9saWIvdWktY29tcG9uZW50cy9tcGVnLXZpZXdlci9tcGVnLXZpZXdlci5jb21wb25lbnQudHMiLCJuZzovL2tlcnZpLXpvcnJvL2xpYi91aS1jb21wb25lbnRzL2RhdGV0aW1lcGlja2VyL2RhdGV0aW1lcGlja2VyLmNvbXBvbmVudC50cyIsIm5nOi8va2Vydmktem9ycm8vbGliL3VpLWNvbXBvbmVudHMvaWNvbnMvaWNvbnMuY29tcG9uZW50LnRzIiwibmc6Ly9rZXJ2aS16b3Jyby9saWIvdWktY29tcG9uZW50cy9jb2xvci9jb2xvci5jb21wb25lbnQudHMiLCJuZzovL2tlcnZpLXpvcnJvL2xpYi91aS1jb21wb25lbnRzL3VpLWNvbXBvbmVudHMubW9kdWxlLnRzIiwibmc6Ly9rZXJ2aS16b3Jyby9saWIvdmFsdWVzL2tlcnZpLXZhbHVlL2tlcnZpLXZhbHVlLmNvbXBvbmVudC50cyIsIm5nOi8va2Vydmktem9ycm8vbGliL3ZhbHVlcy92YWx1ZXMubW9kdWxlLnRzIiwibmc6Ly9rZXJ2aS16b3Jyby9saWIvY29udHJvbGxlci1wYWQvY29udHJvbGxlci1wYWQuY29tcG9uZW50LnRzIiwibmc6Ly9rZXJ2aS16b3Jyby9saWIvY2FtLXZpZXdlci9jYW0tdmlld2VyLmNvbXBvbmVudC50cyIsIm5nOi8va2Vydmktem9ycm8vbGliL2FjdGlvbi9hY3Rpb24uY29tcG9uZW50LnRzIiwibmc6Ly9rZXJ2aS16b3Jyby9saWIvbG9nL3VzZXItbG9nL3VzZXItbG9nLmNvbXBvbmVudC50cyIsIm5nOi8va2Vydmktem9ycm8vbGliL2xvZy9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQudHMiLCJuZzovL2tlcnZpLXpvcnJvL2xpYi9sb2cvbWVzc2FnZS1idXR0b24vbWVzc2FnZS1idXR0b24uY29tcG9uZW50LnRzIiwibmc6Ly9rZXJ2aS16b3Jyby9saWIva2Vydmktem9ycm8ubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEtlcnZpWm9ycm9TZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBLZXJ2aURhc2hib2FyZFBhbmVsQ29tcG9uZW50IH0gZnJvbSAnbmd4LWtlcnZpJ1xyXG5pbXBvcnQgeyBncm91cCB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2tlcnZpLWRhc2hib2FyZC1wYW5lbCcsXHJcbiAgdGVtcGxhdGU6IGA8IS0tIDxwPnt7cGFuZWwubmFtZX19IC0ge3twYW5lbC50eXBlfX0gLSB7e2dyb3VwTGF5b3V0fX0gLSB7e2JvZHlPbmx5fX0gLSB7e2lubGluZX19IC0ge3twYW5lbC5zdWJQYW5lbHMubGVuZ3RofX0gLSB7e3BhbmVsLmNvbXBvbmVudHMubGVuZ3RofX0gLSB7e2hlYWRlckNvbXBvbmVudHMubGVuZ3RofX0gLSB7e2JvZHlDb21wb25lbnRzLmxlbmd0aH19PC9wPiAtLT5cclxuPCEtLSA8cD53PXt7d2lkdGh9fSAtIHt7aW5Hcm91cH19PC9wPiAtLT5cclxuPG5nLWNvbnRhaW5lciAqbmdJZj1cInBhbmVsLnR5cGU9PSdncm91cCdcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJrZXJ2aS1wYW5lbC1kZWNrXCIgW2Z4TGF5b3V0XT1cInBhbmVsLnBhcmFtZXRlcnMubGF5b3V0XCIgZnhMYXlvdXQueHM9XCJjb2x1bW5cIiAgZnhMYXlvdXRHYXA9XCIwLjUlXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgc3ViUGFuZWwgb2YgcGFuZWwuc3ViUGFuZWxzXCI+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzdWJQYW5lbC50eXBlIT0nZ3JvdXAnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxrZXJ2aS1kYXNoYm9hcmQtcGFuZWwgZnhGbGV4LnhzPVwiMTAwXCIgW2Z4RmxleF09XCJzdWJQYW5lbC5wYXJhbWV0ZXJzLndpZHRoXCIgW2JvZHlPbmx5XT1cInRydWVcIiBbaW5Hcm91cF09XCJ0cnVlXCIgW2Rhc2hib2FyZFNpemVzXT1cImRhc2hib2FyZFNpemVzXCIgIFtwYW5lbF09XCJzdWJQYW5lbFwiPjwva2VydmktZGFzaGJvYXJkLXBhbmVsPlxyXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInN1YlBhbmVsLnR5cGU9PSdncm91cCdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8a2VydmktZGFzaGJvYXJkLXBhbmVsIGZ4RmxleC54cz1cIjEwMFwiIFtmeEZsZXhdPVwic3ViUGFuZWwucGFyYW1ldGVycy53aWR0aFwiIFtpbkdyb3VwXT1cInRydWVcIiBbZGFzaGJvYXJkU2l6ZXNdPVwiZGFzaGJvYXJkU2l6ZXNcIiAgW3BhbmVsXT1cInN1YlBhbmVsXCI+PC9rZXJ2aS1kYXNoYm9hcmQtcGFuZWw+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbjwvbmctY29udGFpbmVyPlxyXG5cclxuPG5nLWNvbnRhaW5lciAqbmdJZj1cInBhbmVsLnR5cGUhPSdncm91cCcgJiYgIWlubGluZVwiPlxyXG4gICAgXHJcbiAgICA8bnotY2FyZCAgW256VGl0bGVdPVwic2hvd0hlYWRlciA/IHRpdGxlIDogbnVsbFwiIFtuekV4dHJhXT1cImhlYWRlckNvbXBvbmVudHMubGVuZ3RoPjAgPyBleHRyYVRlbXBsYXRlIDogbnVsbFwiPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjZXh0cmFUZW1wbGF0ZT5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgcGFuZWxDb21wb25lbnQgb2YgaGVhZGVyQ29tcG9uZW50c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8a2Vydmktd2lkZ2V0IFtjb21wb25lbnRdPVwicGFuZWxDb21wb25lbnQuY29tcG9uZW50XCIgW2Rhc2hib2FyZFBhbmVsXT1cInBhbmVsXCIgW2lubGluZV09XCJpbmxpbmVcIiAgW2xpbmtQYXJhbWV0ZXJzXT1cInBhbmVsQ29tcG9uZW50LnBhcmFtZXRlcnNcIj48L2tlcnZpLXdpZGdldD5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBwYW5lbENvbXBvbmVudCBvZiBib2R5Q29tcG9uZW50c1wiPlxyXG4gICAgICAgICAgICA8a2Vydmktd2lkZ2V0IFtjb21wb25lbnRdPVwicGFuZWxDb21wb25lbnQuY29tcG9uZW50XCIgW2Rhc2hib2FyZFBhbmVsXT1cInBhbmVsXCIgIFtpbmxpbmVdPVwiaW5saW5lXCIgIFtsaW5rUGFyYW1ldGVyc109XCJwYW5lbENvbXBvbmVudC5wYXJhbWV0ZXJzXCI+PC9rZXJ2aS13aWRnZXQ+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICBcclxuICAgICAgICA8ZGl2ICpuZ0lmPVwicGFuZWwucGFyYW1ldGVycy51c2VyTG9nXCIgID5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxrZXJ2aS11c2VyLWxvZz48L2tlcnZpLXVzZXItbG9nPlxyXG4gICAgICAgIDwvZGl2PiBcclxuICAgIDwvbnotY2FyZD5cclxuPC9uZy1jb250YWluZXI+XHJcblxyXG48bmctdGVtcGxhdGUgW25nSWZdPVwiaW5saW5lICYmIHBhbmVsLmNvbXBvbmVudHMubGVuZ3RoPjBcIiA+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBwYW5lbENvbXBvbmVudCBvZiBwYW5lbC5jb21wb25lbnRzXCIgPlxyXG4gICAgICAgIDxrZXJ2aS13aWRnZXQgW2NvbXBvbmVudF09XCJwYW5lbENvbXBvbmVudC5jb21wb25lbnRcIiAgW2lubGluZV09XCJpbmxpbmVcIiBbZGFzaGJvYXJkUGFuZWxdPVwicGFuZWxcIiAgW2xpbmtQYXJhbWV0ZXJzXT1cInBhbmVsQ29tcG9uZW50LnBhcmFtZXRlcnNcIj48L2tlcnZpLXdpZGdldD5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG48L25nLXRlbXBsYXRlPmAsXHJcbiAgc3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRQYW5lbENvbXBvbmVudCBleHRlbmRzIEtlcnZpRGFzaGJvYXJkUGFuZWxDb21wb25lbnQge1xyXG4gIHB1YmxpYyBncm91cExheW91dD1cInJvd1wiO1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMubmdPbkluaXRQYW5lbCgpO1xyXG4gICAgaWYgKHRoaXMucGFuZWwuaGFzT25seUdyb3VwUGFuZWxzKVxyXG4gICAgICB0aGlzLmdyb3VwTGF5b3V0ID0gXCJyb3dcIjtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEtlcnZpV2lkZ2V0Q29tcG9uZW50IH0gZnJvbSAnbmd4LWtlcnZpJ1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdrZXJ2aS13aWRnZXQnLFxyXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRhaW5lciAqbmdJZj1cIndpZGdldFR5cGU9PSd2YWx1ZSdcIj5cclxuICAgIDxkaXYgZnhMYXlvdXQ9XCJyb3dcIiAqbmdJZj1cIiFpbmxpbmVcIiBjbGFzcz1cImtlcnZpLWJsb2NrLXdpZGdldFwiPiBcclxuICAgICAgICA8ZGl2IGZ4RmxleD1cIjYwXCIgY2xhc3M9XCJrZXJ2aS12YWx1ZS1sYWJlbFwiPlxyXG4gICAgICAgICAgICA8c3BhbiAgICpuZ0lmPVwibGlua1BhcmFtZXRlcnMubGFiZWxJY29uXCIgY2xhc3M9XCJwaSBwaS17e2xpbmtQYXJhbWV0ZXJzLmxhYmVsSWNvbn19XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiAgICpuZ0lmPVwibGlua1BhcmFtZXRlcnMubGFiZWxcIj57e2xpbmtQYXJhbWV0ZXJzLmxhYmVsfX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBmeEZsZXggY2xhc3M9XCJrZXJ2aS12YWx1ZS1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgIDxrZXJ2aS12YWx1ZSAqbmdJZj1cImNvbXBvbmVudC5jb21wb25lbnRUeXBlPT0nS2VydmlWYWx1ZSdcIiBbdmFsdWVdPVwiY29tcG9uZW50XCIgW2lubGluZV09XCJmYWxzZVwiIFtkYXNoYm9hcmRTaXplc109XCJkYXNoYm9hcmRTaXplc1wiICBbbGlua1BhcmFtZXRlcnNdPVwibGlua1BhcmFtZXRlcnNcIj48L2tlcnZpLXZhbHVlPlxyXG4gICAgICAgICAgICA8a2VydmktYWN0aW9uICAqbmdJZj1cImNvbXBvbmVudC5jb21wb25lbnRUeXBlPT0nYWN0aW9uJ1wiIFthY3Rpb25dPVwiY29tcG9uZW50XCIgW2lubGluZV09XCJmYWxzZVwiIFtkYXNoYm9hcmRTaXplc109XCJkYXNoYm9hcmRTaXplc1wiICBbbGlua1BhcmFtZXRlcnNdPVwibGlua1BhcmFtZXRlcnNcIj48L2tlcnZpLWFjdGlvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2ICpuZ0lmPVwiaW5saW5lXCIgY2xhc3M9XCJrZXJ2aS1pbmxpbmUtd2lkZ2V0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImtlcnZpLXZhbHVlLWxhYmVsXCI+IFxyXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT1cImRpc3BsYXk6aW5saW5lXCIgICpuZ0lmPVwibGlua1BhcmFtZXRlcnMubGFiZWxJY29uXCIgY2xhc3M9XCJmYSBmYS17e2xpbmtQYXJhbWV0ZXJzLmxhYmVsSWNvbn19XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT1cImRpc3BsYXk6aW5saW5lXCIgICpuZ0lmPVwibGlua1BhcmFtZXRlcnMubGFiZWxcIiAgPnt7bGlua1BhcmFtZXRlcnMubGFiZWx9fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwia2VydmktdmFsdWUtc2VjdGlvblwiPlxyXG4gICAgICAgICAgICA8a2VydmktdmFsdWUgKm5nSWY9XCJjb21wb25lbnQuY29tcG9uZW50VHlwZT09J0tlcnZpVmFsdWUnXCIgW3ZhbHVlXT1cImNvbXBvbmVudFwiIFtpbmxpbmVdPVwiZmFsc2VcIiBbZGFzaGJvYXJkU2l6ZXNdPVwiZGFzaGJvYXJkU2l6ZXNcIiAgW2xpbmtQYXJhbWV0ZXJzXT1cImxpbmtQYXJhbWV0ZXJzXCI+PC9rZXJ2aS12YWx1ZT5cclxuICAgICAgICAgICAgPGtlcnZpLWFjdGlvbiAgKm5nSWY9XCJjb21wb25lbnQuY29tcG9uZW50VHlwZT09J2FjdGlvbidcIiBbYWN0aW9uXT1cImNvbXBvbmVudFwiIFtpbmxpbmVdPVwiZmFsc2VcIiBbZGFzaGJvYXJkU2l6ZXNdPVwiZGFzaGJvYXJkU2l6ZXNcIiAgW2xpbmtQYXJhbWV0ZXJzXT1cImxpbmtQYXJhbWV0ZXJzXCI+PC9rZXJ2aS1hY3Rpb24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9uZy1jb250YWluZXI+ICAgIFxyXG48bmctY29udGFpbmVyICpuZ0lmPVwid2lkZ2V0VHlwZT09J2NhbWVyYSdcIiBjbGFzcz1cImJsb2NrLWNvbXBvbmVudFwiID5cclxuICAgIDxrZXJ2aS1jYW0tdmlld2VyIFtpc0JhY2tncm91bmRdPVwiZmFsc2VcIiBbY2FtZXJhXT1cImNvbXBvbmVudFwiIFtsaW5rUGFyYW1ldGVyc109XCJsaW5rUGFyYW1ldGVyc1wiPjwva2VydmktY2FtLXZpZXdlcj5cclxuPC9uZy1jb250YWluZXI+XHJcbiAgICBcclxuICAgIFxyXG48bmctY29udGFpbmVyICpuZ0lmPVwid2lkZ2V0VHlwZT09J2dhdWdlJ1wiIGNsYXNzPVwiYmxvY2stY29tcG9uZW50XCIgPlxyXG4gICAgPGtlcnZpLWdhdWdlIFtkYXNoYm9hcmRTaXplc109XCJkYXNoYm9hcmRTaXplc1wiIFt2YWx1ZV09XCJjb21wb25lbnRcIiBbbGlua1BhcmFtZXRlcnNdPVwibGlua1BhcmFtZXRlcnNcIj48L2tlcnZpLWdhdWdlPlxyXG48L25nLWNvbnRhaW5lcj5cclxuXHJcbjxuZy1jb250YWluZXIgKm5nSWY9XCJ3aWRnZXRUeXBlPT0nY2hhcnQnXCIgY2xhc3M9XCJcIiA+XHJcbiAgICA8a2VydmktY2hhcnQgW2Rhc2hib2FyZFNpemVzXT1cImRhc2hib2FyZFNpemVzXCIgW3ZhbHVlXT1cImNvbXBvbmVudFwiIFtsaW5rUGFyYW1ldGVyc109XCJsaW5rUGFyYW1ldGVyc1wiID48L2tlcnZpLWNoYXJ0PlxyXG48L25nLWNvbnRhaW5lcj5gLFxyXG4gIHN0eWxlczogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIFdpZGdldENvbXBvbmVudCBleHRlbmRzIEtlcnZpV2lkZ2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLm5nT25Jbml0V2lkZ2V0KCk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIFRpbSBXZW50emxhdVxyXG4vLyBMaWNlbnNlZCB1bmRlciBNSVRcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEtlcnZpTnVtYmVyQ29tcG9uZW50IH0gZnJvbSAnbmd4LWtlcnZpJ1xyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2tlcnZpLXZhbHVlLW51bWJlcicsXHJcblx0dGVtcGxhdGU6IGA8bmctY29udGFpbmVyICpuZ0lmPVwibGlua1BhcmFtZXRlcnMuaXNJbnB1dFwiPlxyXG4gICAgPG56LWZvcm0tY29udHJvbCA+XHJcbiAgICAgICAgPG56LWlucHV0LW51bWJlciBpZD1cInt7dmFsdWUuaWR9fVwiIFtuek1pbl09XCJ2YWx1ZS5taW5WYWx1ZVwiIFtuek1heF09XCJ2YWx1ZS5tYXhWYWx1ZVwiIFtuelN0ZXBdPVwiMVwiIFsobmdNb2RlbCldPVwidmFsdWUudmFsdWVcIiAgPjwvbnotaW5wdXQtbnVtYmVyPlxyXG4gICAgICAgIFxyXG4gICAgPC9uei1mb3JtLWNvbnRyb2w+XHJcbiAgICA8IS0tIDx1aS1zbGlkZXIgW3ZhbHVlXT1cIih2YWx1ZS52YWx1ZSQgfCBhc3luYylcIiAoc2xpZGVyQ2hhbmdlZCk9XCJzZXRLZXJ2aVZhbHVlKCRldmVudClcIiBbbWluVmFsdWVdPVwidmFsdWUubWluVmFsdWVcIiBbbWF4VmFsdWVdPVwidmFsdWUubWF4VmFsdWVcIiBbbGlua1BhcmFtZXRlcnNdPVwibGlua1BhcmFtZXRlcnNcIj48L3VpLXNsaWRlcj4gLS0+XHJcbjwvbmctY29udGFpbmVyPlxyXG48bmctY29udGFpbmVyICpuZ0lmPVwiIWxpbmtQYXJhbWV0ZXJzLmlzSW5wdXRcIj5cclxuXHJcbiAgICA8c3BhbiBjbGFzcz1cInZhbHVlLXZhbHVlXCIgW3N0eWxlLm1pbi13aWR0aC5yZW1dPVwibGlua1BhcmFtZXRlcnMudmFsdWVTaXplXCI+XHJcbiAgICAgICAgPGkgKm5nSWY9XCJjdXJyZW50SWNvblwiIGNsYXNzPVwiZmEgZmEte3tjdXJyZW50SWNvbn19XCI+PC9pPlxyXG4gICAgICAgIDx2YWx1ZS1zcGFya2xpbmUgKm5nSWY9XCJsaW5rUGFyYW1ldGVycy5zaG93U3BhcmtsaW5lICYmICFsaW5rUGFyYW1ldGVycy5pc0lucHV0XCIgW3ZhbHVlXT1cInZhbHVlXCI+PC92YWx1ZS1zcGFya2xpbmU+XHJcbiAgICAgICAge3sodmFsdWUudmFsdWUkIHwgYXN5bmMgfCBudW1iZXI6bnVtYmVyRm9ybWF0KX19XHJcbiAgICAgICAgPHNwYW4gKm5nSWY9XCJsaW5rUGFyYW1ldGVycy5kaXNwbGF5VW5pdFwiPnt7dmFsdWUudW5pdH19PC9zcGFuPlxyXG4gICAgPC9zcGFuPlxyXG48L25nLWNvbnRhaW5lcj5cclxuYCxcclxuXHRzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE51bWJlckNvbXBvbmVudCBleHRlbmRzIEtlcnZpTnVtYmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6RWxlbWVudFJlZikgeyBcclxuXHRcdHN1cGVyKCk7XHJcblx0fVxyXG5cdFxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5uZ09uSW5pdE51bWJlcigpO1xyXG5cdH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIFRpbSBXZW50emxhdVxyXG4vLyBMaWNlbnNlZCB1bmRlciBNSVRcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEtlcnZpQm9vbGVhbkNvbXBvbmVudCB9IGZyb20gJ25neC1rZXJ2aSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2tlcnZpLXZhbHVlLWJvb2xlYW4nLFxyXG5cdHRlbXBsYXRlOiBgPGtlcnZpLXN3aXRjaGJ1dHRvbiBcclxuICAgICpuZ0lmPVwiZGlzcGxheVR5cGUhPSdidXR0b24nXCJcclxuICAgIFtkYXNoYm9hcmRTaXplc109XCJkYXNoYm9hcmRTaXplc1wiIFxyXG4gICAgW2lubGluZV09XCJpbmxpbmVcIiBcclxuICAgIFt2YWx1ZV09XCJ2YWx1ZS52YWx1ZVwiIFxyXG4gICAgW2xpbmtQYXJhbWV0ZXJzXT1cImxpbmtQYXJhbWV0ZXJzXCJcclxuICAgIChidXR0b25TdGF0ZSk9XCJjaGFuZ2VTdGF0ZSgkZXZlbnQpXCJcclxuPjwva2Vydmktc3dpdGNoYnV0dG9uPlxyXG48a2VydmktYnV0dG9uIFxyXG4gICAgKm5nSWY9XCJkaXNwbGF5VHlwZT09J2J1dHRvbidcIiAgICBcclxuICAgIFtkYXNoYm9hcmRTaXplc109XCJkYXNoYm9hcmRTaXplc1wiIFxyXG4gICAgW3ZhbHVlXT1cInZhbHVlXCIgXHJcbiAgICBbaW5saW5lXT1cImlubGluZVwiIFxyXG4gICAgW2xpbmtQYXJhbWV0ZXJzXT1cImxpbmtQYXJhbWV0ZXJzXCIgXHJcbiAgICAoYnV0dG9uU3RhdGUpPVwiY2hhbmdlU3RhdGUoJGV2ZW50KVwiIFxyXG4+PC9rZXJ2aS1idXR0b24+XHJcblxyXG5cclxuXHJcbmAsXHJcblx0c3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCb29sZWFuQ29tcG9uZW50IGV4dGVuZHMgS2VydmlCb29sZWFuQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRjb25zdHJ1Y3RvcigpIHsgXHJcblx0XHRzdXBlcigpO1xyXG5cdH1cclxuXHJcblx0Y2hhbmdlU3RhdGUoZXZlbnQpe1xyXG5cdFx0dGhpcy52YWx1ZS5zZXQoZXZlbnQpO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLm5nT25Jbml0Qm9vbGVhbigpO1xyXG5cdH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIFRpbSBXZW50emxhdVxyXG4vLyBMaWNlbnNlZCB1bmRlciBNSVRcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBLZXJ2aVN0cmluZ0NvbXBvbmVudCB9IGZyb20gJ25neC1rZXJ2aSdcclxuXHJcbmRlY2xhcmUgdmFyIGpRdWVyeTphbnk7XHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAna2VydmktdmFsdWUtc3RyaW5nJyxcclxuXHR0ZW1wbGF0ZTogYDxpbnB1dCBuei1pbnB1dCAqbmdJZj1cImxpbmtQYXJhbWV0ZXJzLmlzSW5wdXRcIiAgWyhuZ01vZGVsKV09XCJ2YWx1ZS52YWx1ZVwiLz5cclxuPHNwYW4gKm5nSWY9XCIhbGlua1BhcmFtZXRlcnMuaXNJbnB1dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIHB1bGwtcmlnaHRcIiAgID57eyh2YWx1ZS52YWx1ZSQgfCBhc3luYyl9fTwvc3Bhbj5cclxuYCxcclxuXHRzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFN0cmluZ0NvbXBvbmVudCBleHRlbmRzIEtlcnZpU3RyaW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIFxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblx0IH1cclxuXHJcblx0bmdPbkluaXQoKXtcclxuXHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdHRoaXMubmdPbkluaXRTdHJpbmcoKTtcclxuXHRcdHRoaXMudmFsdWUudmFsdWUkLnN1YnNjcmliZShmdW5jdGlvbih2KXtcclxuXHRcdCBcdGpRdWVyeShcImlucHV0XCIsIHNlbGYuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS52YWwodikuY2hhbmdlKCk7XHJcblx0XHR9KVxyXG5cdH1cclxuXHJcblx0b25DaGFuZ2UoZXZlbnQpe1xyXG5cdFx0dmFyIHYgPSBqUXVlcnkoXCJpbnB1dFwiLCB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkudmFsKCk7XHJcblx0XHRjb25zb2xlLmxvZyhcImV2dlwiLCB2LCBldmVudCk7XHJcblx0XHR0aGlzLnZhbHVlLnNldCh2KTtcclxuXHR9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCBUaW0gV2VudHpsYXVcclxuLy8gTGljZW5zZWQgdW5kZXIgTUlUXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBLZXJ2aURhdGVUaW1lQ29tcG9uZW50IH0gZnJvbSAnbmd4LWtlcnZpJztcclxuZGVjbGFyZSB2YXIgbW9tZW50OmFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAna2VydmktdmFsdWUtZGF0ZXRpbWUnLFxyXG5cdHRlbXBsYXRlOiBgPGtlcnZpLWRhdGV0aW1lIFt0eXBlXT1cImRpc3BsYXlUeXBlXCIgW2Zvcm1hdF09XCJkYXRlVGltZUZvcm1hdFwiIFtkYXRlVGltZV09XCJ2YWx1ZVwiPjwva2VydmktZGF0ZXRpbWU+XHJcbiAgICBgLFxyXG5cdHN0eWxlczogW2BgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0ZVRpbWVDb21wb25lbnQgZXh0ZW5kcyBLZXJ2aURhdGVUaW1lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRjb25zdHJ1Y3RvcigpIHsgXHJcblx0XHRzdXBlcigpO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLm5nT25Jbml0RGF0ZVRpbWUoKTtcclxuXHR9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCBUaW0gV2VudHpsYXVcclxuLy8gTGljZW5zZWQgdW5kZXIgTUlUXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgS2VydmlDb2xvckNvbXBvbmVudCB9IGZyb20gJ25neC1rZXJ2aSdcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAna2VydmktdmFsdWUtY29sb3InLFxyXG5cdHRlbXBsYXRlOiBgPGtlcnZpLWNvbG9yIFtjb2xvcl09XCIodmFsdWUudmFsdWUkIHwgYXN5bmMpXCIgKGNvbG9yQ2hhbmdlKT1cInNldEtlcnZpVmFsdWUoJGV2ZW50KVwiIFtsaW5rUGFyYW1ldGVyc109XCJsaW5rUGFyYW1ldGVyc1wiID48L2tlcnZpLWNvbG9yPlxyXG5gLFxyXG5cdHN0eWxlczogW2BgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29sb3JDb21wb25lbnQgZXh0ZW5kcyBLZXJ2aUNvbG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRcclxuXHRjb25zdHJ1Y3RvcigpIHsgXHJcblx0XHRzdXBlcigpO1xyXG5cdFx0Ly9jb25zb2xlLmxvZyhcImNuaW9cIix0aGlzKTtcclxuXHR9XHJcblxyXG5cclxuXHRzZXRWYWx1ZSh2KXtcclxuXHRcdGNvbnNvbGUubG9nKHYpO1xyXG5cdH1cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMubmdPbkluaXRDb2xvcigpO1xyXG5cdH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIFRpbSBXZW50emxhdVxyXG4vLyBMaWNlbnNlZCB1bmRlciBNSVRcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE51bWJlclZhbHVlLCBEYXNoYm9hcmRTaXplcyAgIH0gZnJvbSAna2VydmktanMnO1xyXG5pbXBvcnQgeyBOR1hLZXJ2aVNlcnZpY2UsIEtlcnZpVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSAnbmd4LWtlcnZpJztcclxuaW1wb3J0IHsgYXNhcFNjaGVkdWxlciB9IGZyb20gJ3J4anMnO1xyXG5cclxuZGVjbGFyZSB2YXIgQXBleENoYXJ0czogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd2YWx1ZS1zcGFya2xpbmUnLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiAjY2hhcnQ+PC9kaXY+YCxcclxuICBzdHlsZXM6IFtgYF0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU3BhcmtsaW5lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSB2YWx1ZTogTnVtYmVyVmFsdWUgPSBudWxsO1xyXG4gIEBJbnB1dCgpIGxpbmtQYXJhbWV0ZXJzOiBhbnkgPSBudWxsO1xyXG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZztcclxuICBASW5wdXQoKSBzaXplOm51bWJlcjtcclxuICBASW5wdXQoKSBkYXNoYm9hcmRTaXplczpEYXNoYm9hcmRTaXplcyA9IG5ldyBEYXNoYm9hcmRTaXplcygpO1xyXG4gIEBWaWV3Q2hpbGQoJ2NoYXJ0JykgcHJpdmF0ZSBjaGFydEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgcHJpdmF0ZSBzZXJpZXM9W107XHJcbiAgcHJpdmF0ZSBjaGFydE9iajogYW55O1xyXG4gIHByaXZhdGUgb3B0aW9uczphbnk7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBrZXJ2aVNlcnZpY2U6TkdYS2VydmlTZXJ2aWNlLCBwcml2YXRlIHRlbXBsYXRlU2VydmljZTpLZXJ2aVRlbXBsYXRlU2VydmljZSApIHtcclxuXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUVsZW1lbnQoKXtcclxuICAgIHRoaXMuc2VyaWVzID0gW3RoaXMudmFsdWUudmFsdWVdXHJcblxyXG4gICAgdGhpcy5vcHRpb25zID17XHJcbiAgICAgIGNoYXJ0OiB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDE0LFxyXG4gICAgICAgICAgd2lkdGg6NjAsXHJcbiAgICAgICAgICB0eXBlOiAnYXJlYScsXHJcbiAgICAgICAgICBzcGFya2xpbmU6IHtcclxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBzdHJva2U6IHtcclxuICAgICAgICBjdXJ2ZTogJ3N0cmFpZ2h0JyxcclxuICAgICAgICB3aWR0aDoxXHJcbiAgICAgIH0sXHJcbiAgICAgIGZpbGw6IHtcclxuICAgICAgICBvcGFjaXR5OiAwLjMsXHJcbiAgICAgIH0sXHJcbiAgICAgIHNlcmllczogW3tcclxuICAgICAgICBkYXRhOiB0aGlzLnZhbHVlLnNwYXJrbGluZSQudmFsdWVcclxuICAgICAgfV0sXHJcbiAgICAgIHlheGlzOiB7XHJcbiAgICAgICAgbWluOiAwXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbG9yczogW3RoaXMuY29sb3IoXCJjb2xvclwiLFwiLmtlcnZpLXNwYXJrbGluZVwiKV0sXHJcbiAgICB9XHJcbiAgXHJcbiAgICBpZiAodGhpcy5jaGFydE9iaikge1xyXG4gICAgICB0aGlzLmNoYXJ0T2JqLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKFwiY3JlYXRlIHNwYXJrbGluZVwiLCB0aGlzLnZhbHVlLmlkKTtcclxuICAgIHRoaXMuY2hhcnRPYmogPSBuZXcgQXBleENoYXJ0cyhcclxuICAgICAgdGhpcy5jaGFydEVsZW1lbnQubmF0aXZlRWxlbWVudCxcclxuICAgICAgdGhpcy5vcHRpb25zXHJcbiAgICApO1xyXG4gICAgdGhpcy5jaGFydE9iai5yZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIFxyXG5cclxuICBwcml2YXRlIGNvbG9yKHN0eWxlLHNlbGVjdG9yKXtcclxuICAgIHJldHVybiB0aGlzLnRlbXBsYXRlU2VydmljZS5nZXRDb2xvcihzdHlsZSxzZWxlY3Rvcik7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIGFzYXBTY2hlZHVsZXIuc2NoZWR1bGUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudmFsdWUuc3BhcmtsaW5lJC5zdWJzY3JpYmUoZnVuY3Rpb24odil7XHJcbiAgICAgIGlmIChzZWxmLmNoYXJ0T2JqICYmIHYpe1xyXG4gICAgICAgIHNlbGYuY2hhcnRPYmoudXBkYXRlU2VyaWVzKFt7XHJcbiAgICAgICAgICBkYXRhOiB2XHJcbiAgICAgICAgfV0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn0iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIFRpbSBXZW50emxhdVxyXG4vLyBMaWNlbnNlZCB1bmRlciBNSVRcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGFzaGJvYXJkU2l6ZXMsIE51bWJlclZhbHVlIH0gZnJvbSAna2VydmktanMnXHJcbmltcG9ydCB7IEtlcnZpVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSAnbmd4LWtlcnZpJ1xyXG5kZWNsYXJlIHZhciBqUXVlcnk6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAndWktc2xpZGVyJyxcclxuXHR0ZW1wbGF0ZTogYGAsXHJcblx0c3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTbGlkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdHByaXZhdGUgc2xpZGVyVmFsdWU6bnVtYmVyID0gMDtcclxuXHRwcml2YXRlIGlzUmVhZHkgPSBmYWxzZTtcclxuXHRwcml2YXRlIGlnbm9yZUNoYW5nZSA9IGZhbHNlO1xyXG5cdEBJbnB1dCgpIHNldCB2YWx1ZSh2YWx1ZTogbnVtYmVyKXtcclxuXHRcdGlmICh2YWx1ZSAhPSB0aGlzLnNsaWRlclZhbHVlKXtcclxuXHRcdFx0dGhpcy5zbGlkZXJWYWx1ZSA9IHZhbHVlO1xyXG5cdFx0XHRpZiAodGhpcy5pc1JlYWR5KXtcclxuXHRcdFx0XHR0aGlzLmlnbm9yZUNoYW5nZSA9IHRydWU7XHJcblx0XHRcdFx0alF1ZXJ5KFwiaW5wdXRcIiwgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLmJvb3RzdHJhcFNsaWRlcignc2V0VmFsdWUnLHZhbHVlKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdCAgfTtcclxuXHRASW5wdXQoKSB0eXBlOiBzdHJpbmcgPSBcImhvcml6b250YWxfc2xpZGVyXCI7XHJcbiAgICBASW5wdXQoKSB0aWNrOm51bWJlcjtcclxuXHRASW5wdXQoKSBsaW5rUGFyYW1ldGVyczphbnk7XHJcblx0QElucHV0KCkgZGVmYXVsdFNpemVzOkRhc2hib2FyZFNpemVzID0gbmV3IERhc2hib2FyZFNpemVzKCk7XHJcblx0QElucHV0KCkgbWF4VmFsdWU6bnVtYmVyO1xyXG5cdEBJbnB1dCgpIG1pblZhbHVlOm51bWJlcjtcclxuXHRAT3V0cHV0KCkgc2xpZGVyQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRwcml2YXRlIG1vdmVEZWxheVRpbWVyID0gbnVsbDtcclxuXHRwcml2YXRlIGluU2xpZGU6Ym9vbGVhbj1mYWxzZTtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHRlbXBsYXRlU2VydmljZTpLZXJ2aVRlbXBsYXRlU2VydmljZSkgeyBcclxuXHRcdC8vY29uc29sZS5sb2coXCJjbmlvXCIsdGhpcyk7XHJcblx0fVxyXG5cclxuXHQgcHJpdmF0ZSBjb2xvcihzdHlsZSxzZWxlY3Rvcil7XHJcbiAgICBcdHJldHVybiB0aGlzLnRlbXBsYXRlU2VydmljZS5nZXRDb2xvcihzdHlsZSxzZWxlY3Rvcik7XHJcbiAgXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0XHJcblx0XHRcclxuXHRcdHZhclx0Y29sb3IgPSB0aGlzLmNvbG9yKFwiY29sb3JcIixcIi5udW1iZXItZ2F1Z2UtdGVtcGxhdGVcIik7XHJcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcclxuXHRcdFx0alF1ZXJ5KCdpbnB1dCcsIHNlbGYuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5ib290c3RyYXBTbGlkZXIoe1xyXG5cdFx0XHRcdHRvb2x0aXA6IFwiaGlkZVwiLFxyXG5cdFx0XHRcdG1pbjpzZWxmLm1pblZhbHVlLFxyXG5cdFx0XHRcdG1heDpzZWxmLm1heFZhbHVlLFxyXG5cdFx0XHRcdHN0ZXA6c2VsZi50aWNrLFxyXG5cdFx0XHRcdG9yaWVudGF0aW9uOiBzZWxmLnR5cGUgPT0gXCJob3Jpem9udGFsX3NsaWRlclwiID8gXCJob3Jpem9udGFsXCIgOiBcInZlcnRpY2FsXCJcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRqUXVlcnkoJy5zbGlkZXInLCBzZWxmLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkub24oXCJjaGFuZ2VcIixmdW5jdGlvbihlLHgpe1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwic2xzdlwiLCBlLCB4KTtcclxuXHRcdFx0XHRpZiAoZS52YWx1ZS5uZXdWYWx1ZSAmJiAhc2VsZi5pZ25vcmVDaGFuZ2UpXHJcblx0XHRcdFx0XHRzZWxmLnNsaWRlckNoYW5nZWQuZW1pdChlLnZhbHVlLm5ld1ZhbHVlKTtcclxuXHRcdFx0XHRzZWxmLmlnbm9yZUNoYW5nZSA9IGZhbHNlO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGpRdWVyeSgnLnNsaWRlcicsIHNlbGYuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5vbihcInNsaWRlU3RhcnRcIixmdW5jdGlvbihlKXtcclxuXHRcdFx0XHRzZWxmLmluU2xpZGU9dHJ1ZTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRqUXVlcnkoJy5zbGlkZXInLCBzZWxmLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkub24oXCJzbGlkZVN0b3BcIixmdW5jdGlvbihlKXtcclxuXHRcdFx0XHRzZWxmLmluU2xpZGU9ZmFsc2U7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRzZWxmLmlzUmVhZHkgPSB0cnVlO1xyXG5cdFx0XHRcclxuXHRcdH0sMCk7XHJcblx0fVxyXG5cclxuXHRzdGVwKHYpe1xyXG5cdFx0dGhpcy5zbGlkZXJDaGFuZ2VkLmVtaXQodGhpcy5zbGlkZXJWYWx1ZSArdik7XHJcblx0fVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgVGltIFdlbnR6bGF1XHJcbi8vIExpY2Vuc2VkIHVuZGVyIE1JVFxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnVtYmVyVmFsdWUsIERhc2hib2FyZFNpemVzICAgfSBmcm9tICdrZXJ2aS1qcyc7XHJcbmltcG9ydCB7IE5HWEtlcnZpU2VydmljZSwgS2VydmlUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tICduZ3gta2VydmknO1xyXG5pbXBvcnQgeyBhc2FwU2NoZWR1bGVyIH0gZnJvbSAncnhqcyc7XHJcblxyXG5kZWNsYXJlIHZhciBBcGV4Q2hhcnRzOiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2tlcnZpLWdhdWdlJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgI2NoYXJ0PjwvZGl2PmAsXHJcbiAgc3R5bGVzOiBbYGBdLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEdhdWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSB2YWx1ZTogTnVtYmVyVmFsdWUgPSBudWxsO1xyXG4gIEBJbnB1dCgpIGxpbmtQYXJhbWV0ZXJzOiBhbnkgPSBudWxsO1xyXG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZztcclxuICBASW5wdXQoKSBzaXplOm51bWJlcjtcclxuICBASW5wdXQoKSBkYXNoYm9hcmRTaXplczpEYXNoYm9hcmRTaXplcyA9IG5ldyBEYXNoYm9hcmRTaXplcygpO1xyXG4gIEBWaWV3Q2hpbGQoJ2NoYXJ0JykgcHJpdmF0ZSBjaGFydEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgcHJpdmF0ZSBzZXJpZXM9W107XHJcbiAgcHJpdmF0ZSBjaGFydE9iajogYW55O1xyXG4gIHByaXZhdGUgb3B0aW9uczphbnk7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBrZXJ2aVNlcnZpY2U6TkdYS2VydmlTZXJ2aWNlLCBwcml2YXRlIHRlbXBsYXRlU2VydmljZTpLZXJ2aVRlbXBsYXRlU2VydmljZSApIHtcclxuXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUVsZW1lbnQoKXtcclxuICAgIHRoaXMuc2VyaWVzID0gW3RoaXMudmFsdWUudmFsdWVdXHJcblxyXG4gICAgdGhpcy5vcHRpb25zID17XHJcbiAgICAgIGNoYXJ0OiB7XHJcbiAgICAgICAgdHlwZTogJ3JhZGlhbEJhcicsXHJcbiAgICAgICAgaGVpZ2h0OiB0aGlzLmxpbmtQYXJhbWV0ZXJzLmdhdWdlU2l6ZVxyXG4gICAgICB9LFxyXG4gICAgICBwbG90T3B0aW9uczoge1xyXG4gICAgICAgIHJhZGlhbEJhcjoge1xyXG4gICAgICAgICAgc3RhcnRBbmdsZTogLTEzNSxcclxuICAgICAgICAgIGVuZEFuZ2xlOjEzNSwgIFxyXG4gICAgICAgICAgaG9sbG93OiB7XHJcbiAgICAgICAgICAgIHNpemU6ICc3MCUnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgdHJhY2s6e1xyXG4gICAgICAgICAgICBzdGFydEFuZ2xlOiAtMTM1LFxyXG4gICAgICAgICAgICBlbmRBbmdsZTogMTM1LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGRhdGFMYWJlbHM6IHtcclxuICAgICAgICAgICAgbmFtZToge1xyXG4gICAgICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICAgICAgY29sb3I6IFwiIzJkMzUzY1wiLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOlwiMTRweFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHZhbHVlOiB7XHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IFwiMjRweFwiLFxyXG4gICAgICAgICAgICAgIHNob3c6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbG9yczogW3RoaXMuY29sb3IoXCJjb2xvclwiLFwiLmtlcnZpLWNoYXJ0XCIpXSwvLyBbJyM5ZmQwMzcnXSxcclxuICAgICAgc2VyaWVzOiB0aGlzLnNlcmllcyxcclxuICAgICAgbGFiZWxzOiBbdGhpcy52YWx1ZS5uYW1lXSxcclxuXHJcbiAgICB9XHJcbiAgXHJcbiAgICBpZiAodGhpcy5jaGFydE9iaikge1xyXG4gICAgICB0aGlzLmNoYXJ0T2JqLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKFwiY3JlYXRlIGdhdWdlXCIsIHRoaXMudmFsdWUuaWQpO1xyXG4gICAgdGhpcy5jaGFydE9iaiA9IG5ldyBBcGV4Q2hhcnRzKFxyXG4gICAgICB0aGlzLmNoYXJ0RWxlbWVudC5uYXRpdmVFbGVtZW50LFxyXG4gICAgICB0aGlzLm9wdGlvbnNcclxuICAgICk7XHJcbiAgICB0aGlzLmNoYXJ0T2JqLnJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbmRlcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLmNoYXJ0T2JqLnJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjb2xvcihzdHlsZSxzZWxlY3Rvcil7XHJcbiAgICByZXR1cm4gdGhpcy50ZW1wbGF0ZVNlcnZpY2UuZ2V0Q29sb3Ioc3R5bGUsc2VsZWN0b3IpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICBhc2FwU2NoZWR1bGVyLnNjaGVkdWxlKCgpID0+IHtcclxuICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnZhbHVlLnZhbHVlJC5zdWJzY3JpYmUoZnVuY3Rpb24odil7XHJcbiAgICAgIGlmIChzZWxmLmNoYXJ0T2JqICYmIHYpe1xyXG4gICAgICAgIC8vc2VsZi5zZXJpZXM9W3ZdO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ3ZcIiwgdik7XHJcbiAgICAgICAgc2VsZi5jaGFydE9iai51cGRhdGVTZXJpZXMoIFt2XSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGxvYWRQZXJpb2QoKXtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIC8vY29uc29sZS5sb2coXCJscFwiLCB0aGlzLnBlcmlvZFN0YXJ0LCB0aGlzLnBlcmlvZEVuZCk7XHJcbiAgICAvL3RoaXMua2VydmlTZXJ2aWNlLnNwaW5lLnNlbmRRdWVyeShcImdldFNlbnNvckRhdGFcIiwgdGhpcy52YWx1ZS5pZCwgdGhpcy5wZXJpb2RTdGFydC50b0lTT1N0cmluZygpLCB0aGlzLnBlcmlvZEVuZC50b0lTT1N0cmluZygpLCBmdW5jdGlvbiAocmVzdWx0cykge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJnc2RcIiwgcmVzdWx0cyk7XHJcbiAgICAgICAgLy92YXIgc2Vuc29yRGF0YSA9IHJlc3VsdHM7XHJcbiAgICAgICAgLy9zZWxmLmNoYXJ0RGF0YS5sZW5ndGggPSAwO1xyXG4gICAgICAgIC8vZm9yICh2YXIgaSA9IDA7IChpIDwgc2Vuc29yRGF0YS5sZW5ndGgpOyBpKyspIHtcclxuICAgICAgICAgIC8vdmFyIGRhdGFJdGVtID0gc2Vuc29yRGF0YVtpXVxyXG4gICAgICAgICAgLy9zZWxmLmNoYXJ0RGF0YS5wdXNoKHsgeDogbmV3IERhdGUoZGF0YUl0ZW0udHMgKyBcIiB1dGNcIiksIHk6IGRhdGFJdGVtLnZhbHVlIH0pO1xyXG4gICAgICAgIC8vfVxyXG4gICAgICAgIC8vc2VsZi5jaGFydC5yZW5kZXIoKTtcclxuICAgICAgICAvL3NlbGYuY2hhcnQudXBkYXRlKCk7XHJcbiAgICAvL30pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbGVhbkRhdGEoKXtcclxuICAgIC8vIGlmKHRoaXMudXBkYXRlQ2hhcnQpe1xyXG4gICAgLy8gICB2YXIgZG9DbGVhbiA9IHRydWU7XHJcbiAgICAvLyAgIHZhciBsaW1pdFRTID0gdGhpcy5nZXRQZXJpb2RMaW1pdCgpO1xyXG4gICAgLy8gICB2YXIgZHMgPSB0aGlzLmNoYXJ0LmRhdGEuZGF0YXNldHNbMF0uZGF0YVxyXG4gICAgLy8gICB3aGlsZSAoIGRzLmxlbmd0aD4wICYmIGRvQ2xlYW4pe1xyXG4gICAgLy8gICAgIGlmIChkc1swXS54IDwgbGltaXRUUylcclxuICAgIC8vICAgICAgIGRzLnNoaWZ0KCk7XHJcbiAgICAvLyAgICAgZWxzZVxyXG4gICAgLy8gICAgICAgZG9DbGVhbiA9IGZhbHNlXHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH1cclxuICB9XHJcbn0iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIFRpbSBXZW50emxhdVxyXG4vLyBMaWNlbnNlZCB1bmRlciBNSVRcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE51bWJlclZhbHVlLCBEYXNoYm9hcmRTaXplcyAgIH0gZnJvbSAna2VydmktanMnO1xyXG5pbXBvcnQgeyBOR1hLZXJ2aVNlcnZpY2UsIEtlcnZpVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSAnbmd4LWtlcnZpJztcclxuaW1wb3J0IHsgYXNhcFNjaGVkdWxlciB9IGZyb20gJ3J4anMnO1xyXG5cclxuZGVjbGFyZSB2YXIgQXBleENoYXJ0czogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdrZXJ2aS1jaGFydCcsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2ICNjaGFydD48L2Rpdj5gLFxyXG4gIHN0eWxlczogW2BgXSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBLZXJ2aUNoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSB2YWx1ZTogTnVtYmVyVmFsdWUgPSBudWxsO1xyXG4gIEBJbnB1dCgpIGxpbmtQYXJhbWV0ZXJzOiBhbnkgPSBudWxsO1xyXG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZztcclxuICBASW5wdXQoKSBzaXplOm51bWJlcjtcclxuICBASW5wdXQoKSBkYXNoYm9hcmRTaXplczpEYXNoYm9hcmRTaXplcyA9IG5ldyBEYXNoYm9hcmRTaXplcygpO1xyXG4gIEBWaWV3Q2hpbGQoJ2NoYXJ0JykgcHJpdmF0ZSBjaGFydEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgcHJpdmF0ZSBzZXJpZXM9W107XHJcbiAgcHJpdmF0ZSBjaGFydE9iajogYW55O1xyXG4gIHByaXZhdGUgb3B0aW9uczphbnk7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBrZXJ2aVNlcnZpY2U6TkdYS2VydmlTZXJ2aWNlLCBwcml2YXRlIHRlbXBsYXRlU2VydmljZTpLZXJ2aVRlbXBsYXRlU2VydmljZSApIHtcclxuXHJcbiAgfVxyXG4gIFxyXG4gIHByaXZhdGUgY3JlYXRlRWxlbWVudCgpe1xyXG4gICAgdGhpcy5zZXJpZXM9IFtcclxuICAgIHtcclxuICAgICAgICBuYW1lOiB0aGlzLnZhbHVlLm5hbWUsXHJcbiAgICAgICAgZGF0YTogWyBdXHJcbiAgICB9XVxyXG5cclxuICAgIFxyXG4gICAgdGhpcy5vcHRpb25zID17XHJcbiAgICAgIGNoYXJ0OiB7XHJcbiAgICAgICAgICBpZDogXCJjaGFydF9cIiArIHRoaXMudmFsdWUuaWQsXHJcbiAgICAgICAgICB3aWR0aDpcIjEwMCVcIixcclxuICAgICAgICAgIGhlaWdodDozMDAsXHJcbiAgICAgICAgICB0eXBlOiB0aGlzLmxpbmtQYXJhbWV0ZXJzLmNoYXJ0VHlwZSxcclxuICAgICAgICAgIGFuaW1hdGlvbnM6IHtcclxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICAgICAgZWFzaW5nOiAnbGluZWFyJyxcclxuICAgICAgICAgICAgZHluYW1pY0FuaW1hdGlvbjoge1xyXG4gICAgICAgICAgICAgIHNwZWVkOiAxMDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHRvb2xiYXI6IHtcclxuICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgIHRvb2xzOiB7XHJcbiAgICAgICAgICAgICAgZG93bmxvYWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgc2VsZWN0aW9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgIHpvb206IHRydWUsXHJcbiAgICAgICAgICAgICAgem9vbWluOiB0cnVlLFxyXG4gICAgICAgICAgICAgIHpvb21vdXQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgcGFuOiB0cnVlLFxyXG4gICAgICAgICAgICAgIHJlc2V0OiB0cnVlICxcclxuICAgICAgICAgICAgICBjdXN0b21JY29uczogW11cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXV0b1NlbGVjdGVkOiAnem9vbScgXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgem9vbToge1xyXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgZGF0YUxhYmVsczoge1xyXG4gICAgICAgICAgZW5hYmxlZDogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICBzdHJva2U6IHtcclxuICAgICAgICAgIGN1cnZlOiAnc21vb3RoJyxcclxuICAgICAgICAgIHdpZHRoOjFcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgIHRleHQ6IHRoaXMubGlua1BhcmFtZXRlcnMuY2hhcnRUaXRsZSxcclxuICAgICAgICAgIGFsaWduOiAnbGVmdCdcclxuICAgICAgICB9LFxyXG4gICAgICBtYXJrZXJzOiB7XHJcbiAgICAgICAgICBzaXplOiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgeGF4aXM6IHtcclxuICAgICAgICAgIHR5cGU6ICdkYXRldGltZScsXHJcbiAgICAgICAgICAvL3JhbmdlOiAxNTUyOTgzMjMwIC0gMzAwLFxyXG4gICAgICB9LFxyXG4gICAgICB5YXhpczoge1xyXG4gICAgICAgICAgbWF4OiB0aGlzLnZhbHVlLm1heFZhbHVlLFxyXG4gICAgICAgICAgbWluOnRoaXMudmFsdWUubWluVmFsdWVcclxuICAgICAgICB9LFxyXG4gICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgIHNob3c6IGZhbHNlXHJcbiAgICAgIH0sXHJcbiAgICAgIGdyaWQ6IHtcclxuICAgICAgICBzaG93OiB0aGlzLmxpbmtQYXJhbWV0ZXJzLmNoYXJ0R3JpZCxcclxuICAgICAgICB4YXhpczoge1xyXG4gICAgICAgICAgbGluZXM6IHtcclxuICAgICAgICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgYW5pbWF0ZTogdHJ1ZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeWF4aXM6IHtcclxuICAgICAgICAgIGxpbmVzOiB7XHJcbiAgICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICAgIGFuaW1hdGU6IHRydWVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbG9yczogW3RoaXMuY29sb3IoXCJjb2xvclwiLFwiLmtlcnZpLWNoYXJ0XCIpXSwvLyBbJyM5ZmQwMzcnXSxcclxuICAgICAgc2VyaWVzOiB0aGlzLnNlcmllc1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaWYgKHRoaXMuY2hhcnRPYmopIHtcclxuICAgICAgdGhpcy5jaGFydE9iai5kZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLmxpbmtQYXJhbWV0ZXJzLmNoYXJ0VGl0bGUpXHJcbiAgICAgIGRlbGV0ZSh0aGlzLm9wdGlvbnNbXCJ0aXRsZVwiXSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJjcmVhdGUgY2hhcnRcIiwgdGhpcy52YWx1ZS5pZCk7XHJcbiAgICB0aGlzLmNoYXJ0T2JqID0gbmV3IEFwZXhDaGFydHMoXHJcbiAgICAgIHRoaXMuY2hhcnRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgIHRoaXMub3B0aW9uc1xyXG4gICAgKTtcclxuICAgIHRoaXMuY2hhcnRPYmoucmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbG9yKHN0eWxlLHNlbGVjdG9yKXtcclxuICAgIHJldHVybiB0aGlzLnRlbXBsYXRlU2VydmljZS5nZXRDb2xvcihzdHlsZSxzZWxlY3Rvcik7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIGFzYXBTY2hlZHVsZXIuc2NoZWR1bGUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudmFsdWUudmFsdWUkLnN1YnNjcmliZShmdW5jdGlvbih2KXtcclxuICAgICAgaWYgKHNlbGYuY2hhcnRPYmope1xyXG4gICAgICAgIHNlbGYuc2VyaWVzWzBdLmRhdGEucHVzaChbIHNlbGYudmFsdWUudmFsdWVUUy5nZXRUaW1lKCksIHYgXSk7XHJcbiAgICAgICAgc2VsZi5jaGFydE9iai51cGRhdGVTZXJpZXMoIHNlbGYuc2VyaWVzKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIHB1YmxpYyBsb2FkUGVyaW9kKCl7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAvL2NvbnNvbGUubG9nKFwibHBcIiwgdGhpcy5wZXJpb2RTdGFydCwgdGhpcy5wZXJpb2RFbmQpO1xyXG4gICAgLy90aGlzLmtlcnZpU2VydmljZS5zcGluZS5zZW5kUXVlcnkoXCJnZXRTZW5zb3JEYXRhXCIsIHRoaXMudmFsdWUuaWQsIHRoaXMucGVyaW9kU3RhcnQudG9JU09TdHJpbmcoKSwgdGhpcy5wZXJpb2RFbmQudG9JU09TdHJpbmcoKSwgZnVuY3Rpb24gKHJlc3VsdHMpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiZ3NkXCIsIHJlc3VsdHMpO1xyXG4gICAgICAgIC8vdmFyIHNlbnNvckRhdGEgPSByZXN1bHRzO1xyXG4gICAgICAgIC8vc2VsZi5jaGFydERhdGEubGVuZ3RoID0gMDtcclxuICAgICAgICAvL2ZvciAodmFyIGkgPSAwOyAoaSA8IHNlbnNvckRhdGEubGVuZ3RoKTsgaSsrKSB7XHJcbiAgICAgICAgICAvL3ZhciBkYXRhSXRlbSA9IHNlbnNvckRhdGFbaV1cclxuICAgICAgICAgIC8vc2VsZi5jaGFydERhdGEucHVzaCh7IHg6IG5ldyBEYXRlKGRhdGFJdGVtLnRzICsgXCIgdXRjXCIpLCB5OiBkYXRhSXRlbS52YWx1ZSB9KTtcclxuICAgICAgICAvL31cclxuICAgICAgICAvL3NlbGYuY2hhcnQucmVuZGVyKCk7XHJcbiAgICAgICAgLy9zZWxmLmNoYXJ0LnVwZGF0ZSgpO1xyXG4gICAgLy99KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xlYW5EYXRhKCl7XHJcbiAgICAvLyBpZih0aGlzLnVwZGF0ZUNoYXJ0KXtcclxuICAgIC8vICAgdmFyIGRvQ2xlYW4gPSB0cnVlO1xyXG4gICAgLy8gICB2YXIgbGltaXRUUyA9IHRoaXMuZ2V0UGVyaW9kTGltaXQoKTtcclxuICAgIC8vICAgdmFyIGRzID0gdGhpcy5jaGFydC5kYXRhLmRhdGFzZXRzWzBdLmRhdGFcclxuICAgIC8vICAgd2hpbGUgKCBkcy5sZW5ndGg+MCAmJiBkb0NsZWFuKXtcclxuICAgIC8vICAgICBpZiAoZHNbMF0ueCA8IGxpbWl0VFMpXHJcbiAgICAvLyAgICAgICBkcy5zaGlmdCgpO1xyXG4gICAgLy8gICAgIGVsc2VcclxuICAgIC8vICAgICAgIGRvQ2xlYW4gPSBmYWxzZVxyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9XHJcbiAgfVxyXG59IiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCBUaW0gV2VudHpsYXVcclxuLy8gTGljZW5zZWQgdW5kZXIgTUlUXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRWxlbWVudFJlZiwgVmlld0VuY2Fwc3VsYXRpb24sIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRTaXplcyB9IGZyb20gJ2tlcnZpLWpzJ1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2tlcnZpLXN3aXRjaGJ1dHRvbicsXHJcbiAgdGVtcGxhdGU6IGA8bnotc3dpdGNoIFxyXG4gICAgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiXHJcbiAgICBbbnpDaGVja2VkQ2hpbGRyZW5dPVwiY2hlY2tlZFRlbXBsYXRlXCIgW256VW5DaGVja2VkQ2hpbGRyZW5dPVwidW5DaGVja2VkVGVtcGxhdGVcIlxyXG4gICAgKG5nTW9kZWxDaGFuZ2UpPVwibW9kZWxDaGFuZ2UoJGV2ZW50KVwiXHJcbj5cclxuXHJcbjwvbnotc3dpdGNoPlxyXG48bmctdGVtcGxhdGUgI2NoZWNrZWRUZW1wbGF0ZT5cclxuICAgIDxpICpuZ0lmPVwibGlua1BhcmFtZXRlcnMub25JY29uXCIgIG56LWljb24gW3R5cGVdPVwibGlua1BhcmFtZXRlcnMub25JY29uXCI+PC9pPlxyXG4gICAgPHNwYW4gPnt7IGxpbmtQYXJhbWV0ZXJzLm9uVGV4dCB9fTwvc3Bhbj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuPG5nLXRlbXBsYXRlICN1bkNoZWNrZWRUZW1wbGF0ZT5cclxuICAgIDxpICpuZ0lmPVwibGlua1BhcmFtZXRlcnMub2ZmSWNvblwiICBuei1pY29uIFt0eXBlXT1cImxpbmtQYXJhbWV0ZXJzLm9mZkljb25cIj48L2k+XHJcbiAgICA8c3BhbiA+e3sgbGlua1BhcmFtZXRlcnMub2ZmVGV4dCB9fTwvc3Bhbj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuYCxcclxuICBzdHlsZXM6IFtgYF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTd2l0Y2hCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHZhbHVlOiBCb29sZWFuO1xyXG4gIEBJbnB1dCgpIGxpbmtQYXJhbWV0ZXJzOmFueTtcclxuICBASW5wdXQoKSBpbmxpbmU6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGRhc2hib2FyZFNpemVzOkRhc2hib2FyZFNpemVzID0gbmV3IERhc2hib2FyZFNpemVzKCk7XHJcbiAgQE91dHB1dCgpIGJ1dHRvblN0YXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIHB1YmxpYyB3aWR0aDpzdHJpbmc7XHJcbiAgcHVibGljIGhlaWdodDpzdHJpbmc7XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuICBcclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwic2JcIiwgdGhpcy52YWx1ZSk7XHJcbiAgICBpZiAodGhpcy5saW5rUGFyYW1ldGVycyl7XHJcbiAgICAgIFxyXG4gICAgICBpZiAoIXRoaXMubGlua1BhcmFtZXRlcnMuYnV0dG9uV2lkdGgpXHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMuZGFzaGJvYXJkU2l6ZXMuc3dpdGNoV2lkdGg7XHJcbiAgICAgIGVsc2VcclxuICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5saW5rUGFyYW1ldGVycy5idXR0b25XaWR0aDtcclxuXHJcbiAgICAgIGlmICghdGhpcy5saW5rUGFyYW1ldGVycy5idXR0b25IZWlnaHQpXHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmRhc2hib2FyZFNpemVzLnN3aXRjaEhlaWdodDtcclxuICAgICAgZWxzZVxyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5saW5rUGFyYW1ldGVycy5idXR0b25IZWlnaHQ7XHJcblxyXG4gICAgfSBlbHNle1xyXG4gICAgICB0aGlzLndpZHRoID0gdGhpcy5kYXNoYm9hcmRTaXplcy5zd2l0Y2hXaWR0aDtcclxuICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmRhc2hib2FyZFNpemVzLnN3aXRjaEhlaWdodDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1vZGVsQ2hhbmdlKHN0YXRlKXtcclxuICAgIHRoaXMuYnV0dG9uU3RhdGUuZW1pdChzdGF0ZSk7XHJcbiAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgVGltIFdlbnR6bGF1XHJcbi8vIExpY2Vuc2VkIHVuZGVyIE1JVFxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRTaXplcywgQm9vbGVhblZhbHVlIH0gZnJvbSAna2VydmktanMnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbmRlY2xhcmUgdmFyIGpRdWVyeTphbnk7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAna2VydmktYnV0dG9uJyxcclxuICB0ZW1wbGF0ZTogYDxuZy10ZW1wbGF0ZSAjYnV0dG9uQ29udGVudFRlbXBsYXRlPlxyXG4gICAgPGkgKm5nSWY9XCJsaW5rUGFyYW1ldGVycy5idXR0b25JY29uXCIgbnotaWNvbiBbdHlwZV09XCJsaW5rUGFyYW1ldGVycy5idXR0b25JY29uXCI+PC9pPlxyXG4gICAge3sgbGlua1BhcmFtZXRlcnMuYnV0dG9uVGV4dCB9fVxyXG48L25nLXRlbXBsYXRlPlxyXG48YnV0dG9uXHJcbiAgICAqbmdJZiA9IFwibGlua1BhcmFtZXRlcnMuY29uZmlybVwiXHJcbiAgICBuei1idXR0b24gbnpUeXBlPVwicHJpbWFyeVwiXHJcbiAgICAobnpPbkNvbmZpcm0pPVwiY29uZmlybSgpXCJcclxuICAgIG56LXBvcGNvbmZpcm0gW256VGl0bGVdPVwibGlua1BhcmFtZXRlcnMuY29uZmlybU1lc3NhZ2VcIlxyXG4+XHJcbjxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJidXR0b25Db250ZW50VGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cclxuPC9idXR0b24+XHJcbjxidXR0b25cclxuICAgICpuZ0lmID0gXCIhbGlua1BhcmFtZXRlcnMuY29uZmlybVwiXHJcbiAgICBuei1idXR0b24gbnpUeXBlPVwicHJpbWFyeVwiXHJcbiAgICAobW91c2Vkb3duKT1cInByZXNzKClcIiBcclxuICAgIChtb3VzZXVwKT1cInJlbGVhc2UoKVwiXHJcbj5cclxuPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImJ1dHRvbkNvbnRlbnRUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxyXG48L2J1dHRvbj5cclxuYCxcclxuICBzdHlsZXM6IFtgYF0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSB2YWx1ZTogQm9vbGVhblZhbHVlO1xyXG4gIEBJbnB1dCgpIGxpbmtQYXJhbWV0ZXJzOiBhbnkgPSBudWxsO1xyXG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZztcclxuICBASW5wdXQoKSBpbmxpbmU6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGRhc2hib2FyZFNpemVzOkRhc2hib2FyZFNpemVzID0gbmV3IERhc2hib2FyZFNpemVzKCk7XHJcbiAgQElucHV0KCkgdGl0bGU6c3RyaW5nO1xyXG4gIEBPdXRwdXQoKSBidXR0b25TdGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBwdWJsaWMgd2lkdGg6c3RyaW5nO1xyXG4gIHB1YmxpYyBoZWlnaHQ6c3RyaW5nO1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKCkgeyAgXHJcbiAgfVxyXG4gXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7IFxyXG4gICAgaWYgKHNlbGYubGlua1BhcmFtZXRlcnMpe1xyXG4gICAgICBcclxuICAgICAgaWYgKCFzZWxmLmxpbmtQYXJhbWV0ZXJzLmJ1dHRvbldpZHRoKVxyXG4gICAgICAgIHRoaXMud2lkdGggPSB0aGlzLmRhc2hib2FyZFNpemVzLmJ1dHRvbldpZHRoO1xyXG4gICAgICBlbHNlXHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHNlbGYubGlua1BhcmFtZXRlcnMuYnV0dG9uV2lkdGg7XHJcblxyXG4gICAgICBpZiAoIXNlbGYubGlua1BhcmFtZXRlcnMuYnV0dG9uSGVpZ2h0KVxyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5kYXNoYm9hcmRTaXplcy5idXR0b25IZWlnaHQ7XHJcbiAgICAgIGVsc2VcclxuICAgICAgICB0aGlzLmhlaWdodCA9IHNlbGYubGlua1BhcmFtZXRlcnMuYnV0dG9uSGVpZ2h0O1xyXG5cclxuICAgIH0gZWxzZXtcclxuICAgICAgdGhpcy53aWR0aCA9IHRoaXMuZGFzaGJvYXJkU2l6ZXMuYnV0dG9uV2lkdGg7XHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5kYXNoYm9hcmRTaXplcy5idXR0b25IZWlnaHQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29uZmlybSgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiY1wiLCB0aGlzLnZhbHVlKTtcclxuICAgIHRoaXMuYnV0dG9uU3RhdGUuZW1pdCh0cnVlKTtcclxuICAgIHRoaXMuYnV0dG9uU3RhdGUuZW1pdChmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcHJlc3MoKSB7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJwXCIsIHRoaXMudmFsdWUpO1xyXG4gICAgdGhpcy5idXR0b25TdGF0ZS5lbWl0KHRydWUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbGVhc2UoKSB7XHJcbiAgICB0aGlzLmJ1dHRvblN0YXRlLmVtaXQoZmFsc2UpO1xyXG4gIH1cclxufSIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgVGltIFdlbnR6bGF1XHJcbi8vIExpY2Vuc2VkIHVuZGVyIE1JVFxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdrZXJ2aS1tcGVnLXZpZXdlcicsXHJcbiAgdGVtcGxhdGU6IGA8aW1nIChsb2FkKT1cImltYWdlUmVhZHkoKVwiIGNsYXNzPVwiY2FtSW1hZ2VcIiBzcmM9XCJ7e2NhbWVyYVNvdXJjZX19XCIgW3N0eWxlLmhlaWdodC4lXT1cImhlaWdodFwiIFtzdHlsZS53aWR0aC4lXT1cIndpZHRoXCI+XHJcbmAsXHJcbiAgc3R5bGVzOiBbYCN2aWRlby12aWV3ZXJ7bWFyZ2luLXRvcDotMjBweH0uY2FtLXBhZC1hcmVhe3otaW5kZXg6MTIwMDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7d2lkdGg6MjAwcHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246YWJzb2x1dGU7bGVmdDozODlweDt0b3A6MTMycHg7Y29sb3I6I2ZmZn1gXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTVBFR1ZpZXdlckNvbXBvbmVudHtcclxuICBASW5wdXQoKSBjYW1lcmFTb3VyY2U6IHN0cmluZztcclxuICBASW5wdXQoKSB3aWR0aDpudW1iZXIgPSBudWxsO1xyXG4gIEBJbnB1dCgpIGhlaWdodDpudW1iZXIgPSBudWxsO1xyXG4gIEBPdXRwdXQoKSBpbWFnZUxvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBwcml2YXRlIGZpcnN0TG9hZD10cnVlO1xyXG4gIGNvbnN0cnVjdG9yKCkgeyBcclxuICB9XHJcblxyXG4gIGltYWdlUmVhZHkoKXtcclxuICAgIGlmICh0aGlzLmZpcnN0TG9hZCl7XHJcbiAgICAgICAgdGhpcy5maXJzdExvYWQ9ZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pbWFnZUxvYWRlZC5lbWl0KHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxufSIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgVGltIFdlbnR6bGF1XHJcbi8vIExpY2Vuc2VkIHVuZGVyIE1JVFxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRlVGltZVZhbHVlIH0gZnJvbSAna2VydmktanMnXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAna2VydmktZGF0ZXRpbWUnLFxyXG4gIHRlbXBsYXRlOiBgPG56LWRhdGUtcGlja2VyIFxyXG4qbmdJZj1cInR5cGU9PSdkYXRldGltZSdcIlxyXG5uelNob3dUaW1lXHJcblsobmdNb2RlbCldPVwiZGF0ZVRpbWUudmFsdWVcIlxyXG5bbnpGb3JtYXRdID0gXCJmb3JtYXRcIlxyXG4+PC9uei1kYXRlLXBpY2tlcj5cclxuXHJcbjxuei1kYXRlLXBpY2tlciBcclxuKm5nSWY9XCJ0eXBlPT0nZGF0ZSdcIlxyXG5bKG5nTW9kZWwpXT1cImRhdGVUaW1lLnZhbHVlXCJcclxuW256Rm9ybWF0XSA9IFwiZm9ybWF0XCJcclxuPjwvbnotZGF0ZS1waWNrZXI+XHJcblxyXG5cclxuPG56LXRpbWUtcGlja2VyIFxyXG4qbmdJZj1cInR5cGU9PSd0aW1lJ1wiXHJcblsobmdNb2RlbCldPVwiZGF0ZVRpbWUudmFsdWVcIlxyXG5bbnpGb3JtYXRdID0gXCJmb3JtYXRcIlxyXG4+PC9uei10aW1lLXBpY2tlcj5cclxuYCxcclxuICBzdHlsZXM6IFtgYF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRlVGltZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgZGF0ZVRpbWU6RGF0ZVRpbWVWYWx1ZTtcclxuICBASW5wdXQoKSB0eXBlOnN0cmluZztcclxuICBASW5wdXQoKSBmb3JtYXQ6IHN0cmluZztcclxuICBAT3V0cHV0KCkgZGF0ZVRpbWVDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlclxyXG4gIHByaXZhdGUgaXNSZWFkeT1mYWxzZTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6RWxlbWVudFJlZikgeyAgXHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgXHJcbiAgICBcclxuICB9XHJcbn0iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIFRpbSBXZW50emxhdVxyXG4vLyBMaWNlbnNlZCB1bmRlciBNSVRcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdrZXJ2aS1pY29uJyxcclxuICB0ZW1wbGF0ZTogYDxpIGNsYXNzPVwicGkgcGkte3tpY29ufX1cIj48L2k+YCxcclxuICBzdHlsZXM6IFtgYF0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSWNvbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGljb246IHN0cmluZyA9IG51bGw7XHJcbiBcclxuICBjb25zdHJ1Y3RvcigpIHsgIFxyXG4gIH1cclxuXHJcbiAgXHJcbiAgXHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG59IiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCBUaW0gV2VudHpsYXVcclxuLy8gTGljZW5zZWQgdW5kZXIgTUlUXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGFzaGJvYXJkU2l6ZXMgfSBmcm9tICdrZXJ2aS1qcydcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmRlY2xhcmUgdmFyIGpRdWVyeTogYW55O1xyXG5kZWNsYXJlIHZhciBDb2xvcnM6IGFueTtcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdrZXJ2aS1jb2xvcicsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IHN0eWxlPVwibWF4LXdpZHRoOjkwcHhcIiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XHJcbiAgICA8ZGl2ICBbYXR0ci5iYWNrZ3JvdW5kLnZhbHVlXT1cImNvbG9yVmFsdWVcIiBjbGFzcz1cImZvcm0tY29udHJvbCBjb2xvclwiPjwvZGl2PlxyXG48L2Rpdj5cclxuYCxcclxuICBzdHlsZXM6IFtgYF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb2xvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwdWJsaWMgY29sb3JWYWx1ZTpzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBzZXQgY29sb3IodjpzdHJpbmcpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2NcIiwgdiwgdGhpcy5waWNrZXIpO1xyXG4gICAgICAgIHRoaXMuY29sb3JWYWx1ZSA9IHY7XHJcbiAgICAgICAgaWYgKHYpe1xyXG4gICAgICAgIC8vICAgIGpRdWVyeSgnLmNvbG9yJywgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLmNzcyhcImJhY2tncm91bmQtY29sb3JcIiwgdilcclxuICAgICAgICAvL2Vsc2VcclxuICAgICAgICAgICAgalF1ZXJ5KCcuY29sb3InLCB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuYXR0cihcInN0eWxlXCIsXCJiYWNrZ3JvdW5kLWNvbG9yOlwiICsgdilcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgXHJcbiAgfTtcclxuICBAT3V0cHV0KCkgY29sb3JDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKClcclxuICBASW5wdXQoKSBsaW5rUGFyYW1ldGVyczphbnk7XHJcbiAgQElucHV0KCkgaW5saW5lOmJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBkYXNoYm9hcmRTaXplczpEYXNoYm9hcmRTaXplcyA9IG5ldyBEYXNoYm9hcmRTaXplcygpO1xyXG4gIHByaXZhdGUgd2lkdGg6c3RyaW5nO1xyXG4gIHByaXZhdGUgaGVpZ2h0OnN0cmluZztcclxuICBwcml2YXRlIHN0YXRlOmFueTtcclxuICBwcml2YXRlIHJnYlN0cmluZzpzdHJpbmc7XHJcbiAgcHJpdmF0ZSBwaWNrZXI6YW55ID0gbnVsbDtcclxuICBcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHsgfVxyXG4gICAgXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICBpZiAoIXNlbGYubGlua1BhcmFtZXRlcnMuYnV0dG9uV2lkdGgpXHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMuZGFzaGJvYXJkU2l6ZXMuc3dpdGNoV2lkdGg7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHNlbGYubGlua1BhcmFtZXRlcnMuYnV0dG9uV2lkdGg7XHJcblxyXG4gICAgXHJcbiAgICBpZiAodGhpcy5saW5rUGFyYW1ldGVycy5pc0lucHV0KXtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgc2VsZi5waWNrZXIgPSBqUXVlcnkoJy5jb2xvcicsIHNlbGYuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5jb2xvclBpY2tlcih7XHJcbiAgICAgICAgICAgICAgICAvL2NvbG9yOiAncmdiYSgyNTUsMTIsMTQsMSknLFxyXG4gICAgICAgICAgICAgICAgY3NzQWRkb246ICcuY3AtY29sb3ItcGlja2VyIHt6LWluZGV4OjIwMDB9JyxcclxuICAgICAgICAgICAgICAgIGJ1aWxkQ2FsbGJhY2s6ZnVuY3Rpb24oYil7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25DYWxsYmFjazpmdW5jdGlvbihwKXtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByZW5kZXJDYWxsYmFjazogZnVuY3Rpb24odil7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdi50ZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5pbmRleE9mKFwicmdiXCIpPT0wKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJnYiA9IHYudGV4dC5zcGxpdCggJywnICkgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcj1wYXJzZUludCggcmdiWzBdLnN1YnN0cmluZyg0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBnPXBhcnNlSW50KCByZ2JbMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYj1wYXJzZUludCggcmdiWzJdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBcIiNcIiArci50b1N0cmluZygxNikrZy50b1N0cmluZygxNikrYi50b1N0cmluZygxNik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2NcIiwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29sb3JDaGFuZ2UuZW1pdCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uQ2FsbGJhY2s6IGZ1bmN0aW9uKHYseCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjXCIsIHYsIHgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIH0pOyAgICBcclxuICAgICAgICB9LCAwKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJ1xyXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IE5HWEtlcnZpUGlwZXNNb2R1bGUgIH0gZnJvbSAnbmd4LWtlcnZpJ1xyXG5pbXBvcnQgeyBTcGFya2xpbmVDb21wb25lbnQgfSBmcm9tICcuL3NwYXJrbGluZS9zcGFya2xpbmUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2xpZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEdhdWdlQ29tcG9uZW50IH0gZnJvbSAnLi9nYXVnZS9nYXVnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBLZXJ2aUNoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9jaGFydC9jaGFydC5jb21wb25lbnQnXHJcbi8vaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgU3dpdGNoQnV0dG9uQ29tcG9uZW50fSBmcm9tICcuL3N3aXRjaC1idXR0b24vc3dpdGNoLWJ1dHRvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnR9IGZyb20gJy4vYnV0dG9uL2J1dHRvbi5jb21wb25lbnQnO1xyXG4vL2ltcG9ydCB7IENhbVZpZXdlckNvbXBvbmVudCB9IGZyb20gJy4vY2FtLXZpZXdlci9jYW0tdmlld2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1QRUdWaWV3ZXJDb21wb25lbnQgfSBmcm9tICcuL21wZWctdmlld2VyL21wZWctdmlld2VyLmNvbXBvbmVudCc7XHJcbi8vaW1wb3J0IHsgSW1hZ2VWaWV3ZXJDb21wb25lbnQgfSBmcm9tICcuL2ltYWdlLXZpZXdlci9pbWFnZS12aWV3ZXIuY29tcG9uZW50JzsgXHJcbi8vaW1wb3J0IHsgQWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9hY3Rpb24vYWN0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERhdGVUaW1lQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRldGltZXBpY2tlci9kYXRldGltZXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJY29uc0NvbXBvbmVudCB9IGZyb20gJy4vaWNvbnMvaWNvbnMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmd4R2F1Z2VNb2R1bGUgfSBmcm9tICduZ3gtZ2F1Z2UnO1xyXG5pbXBvcnQgeyBDb2xvckNvbXBvbmVudCB9IGZyb20gJy4vY29sb3IvY29sb3IuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSAgICBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE5nWm9ycm9BbnRkTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XHJcbmltcG9ydCB7IE5nQXBleGNoYXJ0c01vZHVsZSB9IGZyb20gJ25nLWFwZXhjaGFydHMnXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgU3BhcmtsaW5lQ29tcG9uZW50LFxyXG4gICAgU2xpZGVyQ29tcG9uZW50LFxyXG4gICAgSWNvbnNDb21wb25lbnQsXHJcbiAgICBHYXVnZUNvbXBvbmVudCxcclxuICAgIEtlcnZpQ2hhcnRDb21wb25lbnQsXHJcbiAgICBTd2l0Y2hCdXR0b25Db21wb25lbnQsXHJcbiAgICBCdXR0b25Db21wb25lbnQsXHJcbiAgICAvL0NhbVZpZXdlckNvbXBvbmVudCxcclxuICAgIE1QRUdWaWV3ZXJDb21wb25lbnQsXHJcbiAgICAvL0ltYWdlVmlld2VyQ29tcG9uZW50LFxyXG4gICAgLy9BY3Rpb25Db21wb25lbnQsXHJcbiAgICBEYXRlVGltZUNvbXBvbmVudCxcclxuICAgIENvbG9yQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOltcclxuICAgICAgU3BhcmtsaW5lQ29tcG9uZW50LFxyXG4gICAgICBTbGlkZXJDb21wb25lbnQsXHJcbiAgICAgIEljb25zQ29tcG9uZW50LFxyXG4gICAgICBNUEVHVmlld2VyQ29tcG9uZW50LFxyXG4gICAgICBHYXVnZUNvbXBvbmVudCxcclxuICAgICAgS2VydmlDaGFydENvbXBvbmVudCxcclxuICAgICAgU3dpdGNoQnV0dG9uQ29tcG9uZW50LFxyXG4gICAgICBCdXR0b25Db21wb25lbnQsXHJcbiAgICAgIC8vQ2FtVmlld2VyQ29tcG9uZW50LFxyXG4gICAgICAvL0FjdGlvbkNvbXBvbmVudCxcclxuICAgICAgRGF0ZVRpbWVDb21wb25lbnQsXHJcbiAgICAgIENvbG9yQ29tcG9uZW50XHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBCcm93c2VyTW9kdWxlLFxyXG4gICAgTkdYS2VydmlQaXBlc01vZHVsZSxcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIE5neEdhdWdlTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBOZ1pvcnJvQW50ZE1vZHVsZSxcclxuICAgIE5nQXBleGNoYXJ0c01vZHVsZVxyXG4gICAgLy9LZXJ2aVBpcGVzTW9kdWxlXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtdLFxyXG4gIGJvb3RzdHJhcDogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIFVJQ29tcG9uZW50c01vZHVsZSB7XHJcbiAgY29uc3RydWN0b3IgKCl7fVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgVGltIFdlbnR6bGF1XHJcbi8vIExpY2Vuc2VkIHVuZGVyIE1JVFxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBLZXJ2aVZhbHVlLCBEYXNoYm9hcmRQYW5lbCwgRGFzaGJvYXJkU2l6ZXMgfSBmcm9tICdrZXJ2aS1qcydcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAna2VydmktdmFsdWUnLFxyXG5cdHRlbXBsYXRlOiBgICAgIDxrZXJ2aS12YWx1ZS1udW1iZXIgKm5nSWY9XCJ2YWx1ZS50eXBlTmFtZT09J051bWJlcidcIiBbdmFsdWVdPVwidmFsdWVcIiBbZGFzaGJvYXJkU2l6ZXNdPVwiZGFzaGJvYXJkU2l6ZXNcIiBbbGlua1BhcmFtZXRlcnNdPVwibGlua1BhcmFtZXRlcnNcIiBbaW5saW5lXT1cImlubGluZVwiID48L2tlcnZpLXZhbHVlLW51bWJlcj5cclxuICAgIDxrZXJ2aS12YWx1ZS1ib29sZWFuICpuZ0lmPVwidmFsdWUudHlwZU5hbWU9PSdCb29sZWFuJ1wiIFtkYXNoYm9hcmRTaXplc109XCJkYXNoYm9hcmRTaXplc1wiIFtsaW5rUGFyYW1ldGVyc109XCJsaW5rUGFyYW1ldGVyc1wiIFtpbmxpbmVdPVwiaW5saW5lXCIgW3ZhbHVlXT1cInZhbHVlXCI+PC9rZXJ2aS12YWx1ZS1ib29sZWFuPlxyXG4gICAgPGtlcnZpLXZhbHVlLXN0cmluZyAqbmdJZj1cInZhbHVlLnR5cGVOYW1lPT0nU3RyaW5nJ1wiIFtkYXNoYm9hcmRTaXplc109XCJkYXNoYm9hcmRTaXplc1wiIFtsaW5rUGFyYW1ldGVyc109XCJsaW5rUGFyYW1ldGVyc1wiIFtpbmxpbmVdPVwiaW5saW5lXCIgW3ZhbHVlXT1cInZhbHVlXCI+PC9rZXJ2aS12YWx1ZS1zdHJpbmc+XHJcbiAgICA8a2VydmktdmFsdWUtY29sb3IgKm5nSWY9XCJ2YWx1ZS50eXBlTmFtZT09J0NvbG9yJ1wiIFtkYXNoYm9hcmRTaXplc109XCJkYXNoYm9hcmRTaXplc1wiIFtsaW5rUGFyYW1ldGVyc109XCJsaW5rUGFyYW1ldGVyc1wiIFtpbmxpbmVdPVwiaW5saW5lXCIgW3ZhbHVlXT1cInZhbHVlXCI+PC9rZXJ2aS12YWx1ZS1jb2xvcj5cclxuICAgIDxrZXJ2aS12YWx1ZS1kYXRldGltZSAqbmdJZj1cInZhbHVlLnR5cGVOYW1lPT0nRGF0ZVRpbWUnXCIgW2Rhc2hib2FyZFNpemVzXT1cImRhc2hib2FyZFNpemVzXCIgW2xpbmtQYXJhbWV0ZXJzXT1cImxpbmtQYXJhbWV0ZXJzXCIgW2lubGluZV09XCJpbmxpbmVcIiBbdmFsdWVdPVwidmFsdWVcIj48L2tlcnZpLXZhbHVlLWRhdGV0aW1lPlxyXG5gLFxyXG5cdHN0eWxlczogW2BgXVxyXG5cdC8vZGlyZWN0aXZlczogWyBDb21tb25Nb2R1bGUgIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBLZXJ2aVZhbHVlQ29tcG9uZW50IHtcclxuXHRASW5wdXQoKSB2YWx1ZTogS2VydmlWYWx1ZTtcclxuXHRASW5wdXQoKSBkYXNoYm9hcmRQYW5lbDogRGFzaGJvYXJkUGFuZWw7XHJcblx0QElucHV0KCkgbGlua1BhcmFtZXRlcnM6YW55O1xyXG5cdEBJbnB1dCgpIGlubGluZTpib29sZWFuID0gZmFsc2U7XHJcblx0QElucHV0KCkgZGFzaGJvYXJkU2l6ZXM6RGFzaGJvYXJkU2l6ZXMgPSBuZXcgRGFzaGJvYXJkU2l6ZXMoKTtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7IFxyXG5cdH1cclxuXHQgXHJcblx0XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJ1xyXG5pbXBvcnQgeyBOdW1iZXJDb21wb25lbnR9IGZyb20gJy4vbnVtYmVyLXZhbHVlL251bWJlci12YWx1ZS5jb21wb25lbnQnXHJcbmltcG9ydCB7IE5HWEtlcnZpUGlwZXNNb2R1bGUgIH0gZnJvbSAnbmd4LWtlcnZpJ1xyXG5pbXBvcnQgeyBCb29sZWFuQ29tcG9uZW50fSBmcm9tICcuL2Jvb2xlYW4tdmFsdWUvYm9vbGVhbi12YWx1ZS5jb21wb25lbnQnXHJcbmltcG9ydCB7IFN0cmluZ0NvbXBvbmVudH0gZnJvbSAnLi9zdHJpbmctdmFsdWUvc3RyaW5nLXZhbHVlLmNvbXBvbmVudCdcclxuaW1wb3J0IHsgRGF0ZVRpbWVDb21wb25lbnR9IGZyb20gJy4vZGF0ZXRpbWUtdmFsdWUvZGF0ZXRpbWUtdmFsdWUuY29tcG9uZW50J1xyXG5pbXBvcnQgeyBDb2xvckNvbXBvbmVudH0gZnJvbSAnLi9jb2xvci12YWx1ZS9jb2xvci12YWx1ZS5jb21wb25lbnQnXHJcbi8vIGltcG9ydCB7IEVudW1Db21wb25lbnR9IGZyb20gJy4vZW51bS12YWx1ZS9lbnVtLXZhbHVlLmNvbXBvbmVudCdcclxuaW1wb3J0IHsgVUlDb21wb25lbnRzTW9kdWxlfSBmcm9tICcuLi91aS1jb21wb25lbnRzL3VpLWNvbXBvbmVudHMubW9kdWxlJ1xyXG5pbXBvcnQgeyBLZXJ2aVZhbHVlQ29tcG9uZW50IH0gZnJvbSAnLi9rZXJ2aS12YWx1ZS9rZXJ2aS12YWx1ZS5jb21wb25lbnQnXHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gICAgZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBOZ1pvcnJvQW50ZE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTnVtYmVyQ29tcG9uZW50LFxyXG4gICAgQm9vbGVhbkNvbXBvbmVudCxcclxuICAgIEtlcnZpVmFsdWVDb21wb25lbnQsXHJcbiAgICBTdHJpbmdDb21wb25lbnQsXHJcbiAgICAvL0VudW1Db21wb25lbnQsXHJcbiAgICBEYXRlVGltZUNvbXBvbmVudCxcclxuICAgIENvbG9yQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOltcclxuICAgICAgTnVtYmVyQ29tcG9uZW50LFxyXG4gICAgICBCb29sZWFuQ29tcG9uZW50LFxyXG4gICAgICBLZXJ2aVZhbHVlQ29tcG9uZW50LFxyXG4gICAgICBTdHJpbmdDb21wb25lbnQsXHJcbiAgICAgIC8vRW51bUNvbXBvbmVudCxcclxuICAgICAgRGF0ZVRpbWVDb21wb25lbnQsXHJcbiAgICAgIENvbG9yQ29tcG9uZW50XHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBOR1hLZXJ2aVBpcGVzTW9kdWxlLFxyXG4gICAgVUlDb21wb25lbnRzTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBOZ1pvcnJvQW50ZE1vZHVsZVxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXSxcclxuICBib290c3RyYXA6IFtdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWYWx1ZXNNb2R1bGUge1xyXG4gIGNvbnN0cnVjdG9yICgpe31cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOdW1iZXJWYWx1ZSB9IGZyb20gXCJrZXJ2aS1qc1wiXHJcbmRlY2xhcmUgdmFyIGpRdWVyeTogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdrZXJ2aS1jb250cm9sbGVyLXBhZCcsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IChtb3VzZWRvd24pPVwicGFkUHJlc3MoKVwiIChtb3VzZXVwKT1cInBhZFJlbGVhc2UoKVwiPlxyXG4gIDxmaWVsZHNldCBpZD1cImxlZnRQYWRcIiBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlXCIgY2xhc3M9XCJwYWRcIiBbYXR0ci5kYXRhLXdpZHRoXT1cInBhZFNpemVcIiBbYXR0ci5kYXRhLWhlaWdodF09XCJwYWRTaXplXCIgPlxyXG4gICAgPGxlZ2VuZD48L2xlZ2VuZD5cclxuICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInBhZC14XCIgdmFsdWU9XCIwXCI+PGlucHV0IHR5cGU9XCJoaWRkZW5cIiAgbmFtZT1cInBhZC15XCIgdmFsdWU9XCIwXCI+XHJcbiAgPC9maWVsZHNldD5cclxuPC9kaXY+YCxcclxuICBzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbnRyb2xsZXJQYWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIFhWYWx1ZTpOdW1iZXJWYWx1ZTtcclxuICBASW5wdXQoKSBZVmFsdWU6TnVtYmVyVmFsdWU7XHJcbiAgQElucHV0KCkgYXV0b0NlbnRlcjpib29sZWFuO1xyXG4gIHBhZFNpemU6bnVtYmVyPTE4MDtcclxuICBwcml2YXRlIG1vdmVEZWxheVRpbWVyID0gbnVsbDtcclxuICBwcml2YXRlIGluRHJhZzpib29sZWFuID0gZmFsc2U7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOkVsZW1lbnRSZWYpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIGlmICh0aGlzLlhWYWx1ZSl7XHJcbiAgICAgIGpRdWVyeShcImlucHV0W25hbWU9J3BhZC14J11cIiwgc2VsZi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLnZhbCh0aGlzLlhWYWx1ZS52YWx1ZSQudmFsdWUpLmNoYW5nZSgpO1xyXG4gICAgICB0aGlzLlhWYWx1ZS52YWx1ZSQuc3Vic2NyaWJlKGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwYWQteFwiLCBzZWxmLllWYWx1ZS5uYW1lLCB2KTtcclxuICAgICAgICBqUXVlcnkoXCJpbnB1dFtuYW1lPSdwYWQteCddXCIsIHNlbGYuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS52YWwodikuY2hhbmdlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLllWYWx1ZSl7XHJcbiAgICAgIGpRdWVyeShcImlucHV0W25hbWU9J3BhZC15J11cIiwgc2VsZi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLnZhbCh0aGlzLllWYWx1ZS52YWx1ZSQudmFsdWUpLmNoYW5nZSgpOyAgICAgICAgXHJcbiAgICAgIHRoaXMuWVZhbHVlLnZhbHVlJC5zdWJzY3JpYmUoZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInBhZC15XCIsIHNlbGYuWVZhbHVlLm5hbWUsIHYpO1xyXG4gICAgICAgIGpRdWVyeShcImlucHV0W25hbWU9J3BhZC15J11cIiwgc2VsZi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLnZhbCh2KS5jaGFuZ2UoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGNvbG9yID0gXCJyZ2JhKDI1NSwyNTUsMjU1LC41KVwiO1xyXG4gICAgdmFyIHAgPSBqUXVlcnkoJ2ZpZWxkc2V0Jywgc2VsZi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLnh5KHtcclxuICAgICAgZGlzcGxheVByZXZpb3VzOiBmYWxzZVxyXG4gICAgICAsIG1pbjogLTEwMFxyXG4gICAgICAsIG1heDogMTAwXHJcbiAgICAgICwgd2lkdGg6IHNlbGYucGFkU2l6ZVxyXG4gICAgICAsIGhlaWdodDogc2VsZi5wYWRTaXplXHJcbiAgICAgICwgZmdDb2xvcjogY29sb3JcclxuICAgICAgLCBiZ0NvbG9yOiBjb2xvclxyXG4gICAgICAsIGNoYW5nZTogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHNlbGYubW92ZURlbGF5VGltZXIpIHtcclxuICAgICAgICAgIGNsZWFyVGltZW91dChzZWxmLm1vdmVEZWxheVRpbWVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2VsZi5tb3ZlRGVsYXlUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgaWYgKHNlbGYuWFZhbHVlKVxyXG4gICAgICAgICAgICBzZWxmLlhWYWx1ZS5zZXQodmFsdWVbMF0pO1xyXG4gICAgICAgICAgaWYgKHNlbGYuWVZhbHVlKVxyXG4gICAgICAgICAgICBzZWxmLllWYWx1ZS5zZXQodmFsdWVbMV0pO1xyXG4gICAgICAgIH0sIDApO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmNzcyh7ICdib3JkZXInOiAnMnB4IHNvbGlkICcgKyBjb2xvciB9KTsgIFxyXG4gIH1cclxuXHJcbiAgcGFkUHJlc3MoKXtcclxuICAgIHRoaXMuaW5EcmFnPXRydWU7XHJcbiAgfVxyXG5cclxuICBwYWRSZWxlYXNlKCl7XHJcbiAgICBjb25zb2xlLmxvZyhcInByXCIsIHRoaXMuaW5EcmFnLCB0aGlzLmF1dG9DZW50ZXIpOyAgIFxyXG4gICAgdGhpcy5pbkRyYWc9ZmFsc2U7XHJcbiAgICAgICBpZiAodGhpcy5hdXRvQ2VudGVyICYmIHRoaXMuWFZhbHVlKXtcclxuICAgICAgICAgY29uc29sZS5sb2coXCJ4LWF1dG8gY2VudGVyXCIpO1xyXG4gICAgICAgICBqUXVlcnkoXCJpbnB1dFtuYW1lPSdwYWQteCddXCIsIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS52YWwoMCkuY2hhbmdlKCk7XHJcbiAgICAgICAgIHRoaXMuWFZhbHVlLnNldCgwKTtcclxuICAgICAgIH1cclxuICAgICAgIGlmICh0aGlzLmF1dG9DZW50ZXIgJiYgdGhpcy5ZVmFsdWUpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwieS1hdXRvIGNlbnRlclwiKTsgXHJcbiAgICAgICAgalF1ZXJ5KFwiaW5wdXRbbmFtZT0ncGFkLXknXVwiLCB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkudmFsKDApLmNoYW5nZSgpO1xyXG4gICAgICAgICB0aGlzLllWYWx1ZS5zZXQoMCk7XHJcbiAgICAgICB9XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLEFmdGVyVmlld0luaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBLZXJ2aUNhbWVyYUNvbXBvbmVudCB9IGZyb20gJ25neC1rZXJ2aSdcclxuZGVjbGFyZSB2YXIgd2luZG93OmFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAna2VydmktY2FtLXZpZXdlcicsXHJcbiAgdGVtcGxhdGU6IGA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNCYWNrZ3JvdW5kXCI+XHJcblx0PGRpdiAjdmlkZW9WaWV3ZXIgaWQ9XCJ2aWRlby12aWV3ZXJcIiBjbGFzcz1cInZpZGVvIHZpZGVvLWJhY2tncm91bmRcIiBzdHlsZT1cInRleHQtYWxpZ246Y2VudGVyO3Bvc2l0aW9uOmZpeGVkO3RvcDo2MHB4O2xlZnQ6MHB4O2hlaWdodDoxMDAlO1wiIFtzdHlsZS5oZWlnaHQucHhdPVwiY2FtSGVpZ2h0XCIgW3N0eWxlLndpZHRoLnB4XT1cImNhbVdpZHRoXCI+XHJcblx0XHQ8c3BhbiBjbGFzcz1cImNhbUltYWdlXCIgc3R5bGU9XCJ0b3A6MHB4O2xlZnQ6MHB4O1wiPlxyXG5cdFx0XHQ8a2VydmktbXBlZy12aWV3ZXIgKGltYWdlTG9hZGVkKT1cImltYWdlTG9hZGVkKClcIiBbaGVpZ2h0XT0xMDAgICBbY2FtZXJhU291cmNlXT1cImNhbWVyYVNvdXJjZVwiID4gPC9rZXJ2aS1tcGVnLXZpZXdlcj5cclxuXHRcdDwvc3Bhbj5cclxuXHRcdDxjYW52YXMgaWQ9XCJjYW1DYW52YXNcIiBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlO3RvcDowcHg7bGVmdDowcHg7XCIgW3N0eWxlLmhlaWdodC5weF09XCJjYW1IZWlnaHRcIiBbc3R5bGUud2lkdGgucHhdPVwiY2FtV2lkdGhcIj48L2NhbnZhcz5cclxuXHRcdDxjYW52YXMgaWQ9XCJwb2lDYW52YXNcIiBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlO3RvcDowcHg7bGVmdDowcHg7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJVwiPjwvY2FudmFzPlxyXG5cdFx0PGRpdiBjbGFzcz1cImNhbS1wYWQtYXJlYVwiICpuZ0lmPVwic2hvd0NhbVBhZFwiIFtzdHlsZS5sZWZ0LnB4XT1cImNhbVBhZExlZnRcIiBbc3R5bGUudG9wLnB4XT1cImNhbVBhZFRvcFwiIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDogMjAwMFwiPlxyXG4gICAgICA8a2VydmktY29udHJvbGxlci1wYWQgW1hWYWx1ZV09XCJwYW5cIiBbWVZhbHVlXT1cInRpbHRcIj4gPC9rZXJ2aS1jb250cm9sbGVyLXBhZD5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PGRpdiBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlO3RvcDozMHB4O2xlZnQ6MHB4O3dpZHRoOjEwMCU7aGVpZ2h0OjUwcHhcIj5cclxuXHRcdFx0PG5nLWNvbnRhaW5lciAgKm5nRm9yPVwibGV0IGFjdGlvbiBvZiBjYW1lcmEuYWN0aW9uc1wiPlxyXG5cdFx0XHRcdDxrZXJ2aS1hY3Rpb24gdGl0bGU9XCJ7eyggYWN0aW9uLm5hbWUgfCB0cmFuc2xhdGUpfX1cIiAqbmdJZj1cImFjdGlvbi52aXNpYmxlXCIgW2FjdGlvbl09XCJhY3Rpb25cIiA+PC9rZXJ2aS1hY3Rpb24+XHJcblx0XHRcdDwvbmctY29udGFpbmVyPlxyXG5cdFx0XHQ8IS0tIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgXCIgICAobW91c2Vkb3duKT1cImltYWdlVmlld2VyLnNob3coKVwiIHRpdGxlPVwie3soICdtZWRpYV9mb2xkZXInIHwgdHJhbnNsYXRlKX19XCI+XHJcblx0XHRcdFx0PGkgIGNsYXNzPSdmYSBmYS1mb2xkZXInPjwvaT5cclxuXHRcdFx0PC9idXR0b24+IC0tPlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbjwvbmctY29udGFpbmVyPlxyXG5cclxuPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpc0JhY2tncm91bmRcIj5cclxuXHQ8ZGl2ICN2aWRlb1ZpZXdlciBpZD1cInZpZGVvLXZpZXdlclwiIGNsYXNzPVwidmlkZW9cIiBzdHlsZT1cIm92ZXJmbG93OmhpZGRlbjtwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlXCI+XHJcblx0XHQ8c3BhbiBjbGFzcz1cImNhbUltYWdlXCIgc3R5bGU9XCJ0b3A6MHB4O2xlZnQ6MHB4O2hlaWdodDoxMDAlO3dpZHRoOjEwMCVcIj5cclxuXHRcdFx0PGtlcnZpLW1wZWctdmlld2VyIChpbWFnZUxvYWRlZCk9XCJpbWFnZUxvYWRlZCgpXCIgW3dpZHRoXT0xMDAgIFtjYW1lcmFTb3VyY2VdPVwiY2FtZXJhU291cmNlXCIgPiA8L2tlcnZpLW1wZWctdmlld2VyPlxyXG5cdFx0PC9zcGFuPlxyXG5cdFx0PGNhbnZhcyBpZD1cImNhbUNhbnZhc1wiIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7dG9wOjBweDtsZWZ0OjBweDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlXCI+PC9jYW52YXM+XHJcblx0XHQ8Y2FudmFzIGlkPVwicG9pQ2FudmFzXCIgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MHB4O2xlZnQ6MHB4O3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCVcIj48L2NhbnZhcz5cclxuXHRcdDxkaXYgY2xhc3M9XCJjYW0tcGFkLWFyZWFcIiAqbmdJZj1cInNob3dDYW1QYWRcIiBbc3R5bGUubGVmdC5weF09XCJjYW1QYWRMZWZ0XCIgW3N0eWxlLnRvcC5weF09XCJjYW1QYWRUb3BcIiBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlXCI+XHJcbiAgICAgIDxrZXJ2aS1jb250cm9sbGVyLXBhZCBbWFZhbHVlXT1cInBhblwiIFtZVmFsdWVdPVwidGlsdFwiPiA8L2tlcnZpLWNvbnRyb2xsZXItcGFkPlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcblx0PGRpdj5cclxuXHRcdDxuZy1jb250YWluZXIgICpuZ0Zvcj1cImxldCBhY3Rpb24gb2YgY2FtZXJhLmFjdGlvbnNcIj5cclxuXHRcdFx0PGtlcnZpLWFjdGlvbiAqbmdJZj1cImFjdGlvbi52aXNpYmxlXCIgdGl0bGU9XCJ7eyggYWN0aW9uLm5hbWUgfCB0cmFuc2xhdGUpfX1cIiBbYWN0aW9uXT1cImFjdGlvblwiID48L2tlcnZpLWFjdGlvbj5cclxuXHRcdDwvbmctY29udGFpbmVyPlxyXG5cdFx0PCEtLSA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgKG1vdXNlZG93bik9XCJpbWFnZVZpZXdlci5zaG93KClcIiB0aXRsZT1cInt7KCAnbWVkaWFfZm9sZGVyJyB8IHRyYW5zbGF0ZSl9fVwiPlxyXG5cdFx0XHQ8aSAgY2xhc3M9J2ZhIGZhLWZvbGRlcic+PC9pPlxyXG5cdFx0PC9idXR0b24+IC0tPlxyXG5cdDwvZGl2PlxyXG48L25nLWNvbnRhaW5lcj5cclxuPCEtLSA8a2VydmktaW1hZ2Utdmlld2VyICNpbWFnZVZpZXdlciBbY2FtQ29tcG9uZW50XT1cInRoaXNcIiBbY2FtZXJhU291cmNlXT1cImNhbWVyYVNvdXJjZVwiPjwva2VydmktaW1hZ2Utdmlld2VyPiAtLT5gLFxyXG4gIHN0eWxlczogW2BgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FtVmlld2VyQ29tcG9uZW50IGV4dGVuZHMgS2VydmlDYW1lcmFDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICBwdWJsaWMgY2FtSGVpZ2h0Om51bWJlcjtcclxuICBwdWJsaWMgY2FtV2lkdGg6bnVtYmVyO1xyXG4gIHB1YmxpYyBjYW1QYWRMZWZ0Om51bWJlcjtcclxuICBwdWJsaWMgY2FtUGFkVG9wOm51bWJlcjtcclxuICBwdWJsaWMgc2hvd0NhbVBhZDpib29sZWFuID0gZmFsc2U7XHJcbiAgQFZpZXdDaGlsZChcInZpZGVvVmlld2VyXCIpIHZpZGVvVmlld2VyOkVsZW1lbnRSZWY7XHJcbiAgcGFkU2l6ZTpudW1iZXI9MTgwO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikgeyBcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBpbWFnZUxvYWRlZCgpe1xyXG4gICAgICB2YXIgaCA9IHRoaXMudmlkZW9WaWV3ZXIubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgIHZhciB3ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAvL3RoaXMuY2FtUGFkVG9wID0gaCAvIDIgLSB0aGlzLnBhZFNpemUvMjtcclxuICAgICAgIC8vdGhpcy5jYW1QYWRMZWZ0ID0gdyAvIDIgLSB0aGlzLnBhZFNpemUvMjtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpe1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzOyBcclxuICAgIHZhciBlbGVtZW50ID0gc2VsZi52aWRlb1ZpZXdlci5uYXRpdmVFbGVtZW50O1xyXG4gICAgdmFyIHZpZXdQb3J0SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgdmFyIHZpZXdQb3J0V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHJcbiAgICB0aGlzLmNhbUhlaWdodCA9IHZpZXdQb3J0SGVpZ2h0IC0gNjU7XHJcbiAgICB0aGlzLmNhbVdpZHRoID0gdmlld1BvcnRXaWR0aDtcclxuICAgIGNvbnNvbGUubG9nKFwiYXZpY1wiLCB0aGlzLmNhbUhlaWdodCx0aGlzLmNhbVdpZHRoKTtcclxuICAgIFxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIFxyXG4gICAgICB2YXIgaCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICB2YXIgdyA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XHJcbiAgICAgIGlmICh3IDwgc2VsZi5wYWRTaXplKXtcclxuICAgICAgICBzZWxmLnBhZFNpemU9dy0xMDtcclxuICAgICAgICAgIC8valF1ZXJ5KFwiLmNhbVBhZFwiLCBzZWxmLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuY3NzKHsgd2lkdGg6IHNlbGYucGFkU2l6ZSwgaGVpZ2h0OiAgc2VsZi5wYWRTaXplIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiY2FtaVwiLCBoLHcsIHNlbGYucGFkU2l6ZSwgZWxlbWVudCk7XHJcbiAgICAgIHNlbGYuY2FtUGFkVG9wID0gaCAvIDIgLSAoc2VsZi5wYWRTaXplLzIpXHJcbiAgICAgIHNlbGYuY2FtUGFkTGVmdCA9ICB3IC8gMiAtIChzZWxmLnBhZFNpemUgLyAyKTtcclxuICAgICAgc2VsZi5zaG93Q2FtUGFkID0gdHJ1ZTtcclxuICAgIH0sIDApO1xyXG5cclxuICAgIC8vIGpRdWVyeSh3aW5kb3cpLmJpbmQoJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgIC8vICAgICB2YXIgaCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgLy8gICAgIHZhciB3ID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcclxuICAgIC8vICAgICBzZWxmLmNhbVBhZFRvcCA9IGggLyAyIC0gKHNlbGYucGFkU2l6ZS8yKVxyXG4gICAgLy8gICAgIHNlbGYuY2FtUGFkTGVmdCA9ICB3IC8gMiAtIChzZWxmLnBhZFNpemUgLyAyKTtcclxuICAgIC8vIH0pXHJcbiAgfTtcclxuICBcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLm5nT25Jbml0Q2FtZXJhKCk7XHJcbiAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgVGltIFdlbnR6bGF1XHJcbi8vIExpY2Vuc2VkIHVuZGVyIE1JVFxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBLZXJ2aUFjdGlvbkNvbXBvbmVudCB9IGZyb20gJ25neC1rZXJ2aSc7XHJcbi8vaW1wb3J0IHsgVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdGVtcGxhdGUuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2tlcnZpLWFjdGlvbicsXHJcbiAgdGVtcGxhdGU6IGA8a2Vydmktc3dpdGNoYnV0dG9uIFxyXG4gICAgW2Rhc2hib2FyZFNpemVzXT1cImRhc2hib2FyZFNpemVzXCIgXHJcbiAgICBbaW5saW5lXT1cImlubGluZVwiIFxyXG4gICAgW3ZhbHVlXT1cIihzdGF0ZSB8IGFzeW5jKVwiIFxyXG4gICAgW2xpbmtQYXJhbWV0ZXJzXT1cImxpbmtQYXJhbWV0ZXJzXCJcclxuICAgIChidXR0b25TdGF0ZSk9XCJzZXRBY3Rpb25TdGF0ZSgkZXZlbnQpXCJcclxuICAgICpuZ0lmPVwiZGlzcGxheVR5cGUhPSdidXR0b24nXCJcclxuPjwva2Vydmktc3dpdGNoYnV0dG9uPlxyXG48a2VydmktYnV0dG9uIFxyXG4gICAgW3RpdGxlXT1cImFjdGlvbi5uYW1lXCIgXHJcbiAgICBbZGFzaGJvYXJkU2l6ZXNdPVwiZGFzaGJvYXJkU2l6ZXNcIiBcclxuICAgIFt2YWx1ZV09XCIoc3RhdGUgfCBhc3luYylcIiBcclxuICAgIFtpbmxpbmVdPVwiaW5saW5lXCIgXHJcbiAgICBbbGlua1BhcmFtZXRlcnNdPVwibGlua1BhcmFtZXRlcnNcIlxyXG4gICAgKGJ1dHRvblN0YXRlKT1cInNldEFjdGlvblN0YXRlKCRldmVudClcIiBcclxuICAgICpuZ0lmPVwiZGlzcGxheVR5cGU9PSdidXR0b24nXCJcclxuPjwva2VydmktYnV0dG9uPlxyXG5gLFxyXG4gIHN0eWxlczogW2BgXSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBY3Rpb25Db21wb25lbnQgZXh0ZW5kcyBLZXJ2aUFjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpOyBcclxuICAgIFxyXG4gICAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgdGhpcy5uZ09uSW5pdEFjdGlvbigpOyBcclxuICB9XHJcblxyXG4gIFxyXG4gIFxyXG59IiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCBUaW0gV2VudHpsYXVcclxuLy8gTGljZW5zZWQgdW5kZXIgTUlUXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEtlcnZpVXNlckxvZ0NvbXBvbmVudCB9IGZyb20gJ25neC1rZXJ2aSc7XHJcbi8vaW1wb3J0IHsgVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdGVtcGxhdGUuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2tlcnZpLXVzZXItbG9nJyxcclxuICB0ZW1wbGF0ZTogYDxuei10aW1lbGluZSA+XHJcbiAgICA8bnotdGltZWxpbmUtaXRlbSBbbnpEb3RdPVwibWVzc2FnZS5sZXZlbD09MSA/IGRvdFRlbXBsYXRlMSA6ICBtZXNzYWdlLmxldmVsPT0yID8gZG90VGVtcGxhdGUyIDogZG90VGVtcGxhdGUzXCIgKm5nRm9yPVwibGV0IG1lc3NhZ2Ugb2YgbWVzc2FnZXMkIHwgYXN5bmNcIj5cclxuICAgICAgICAgICAgPHN0cm9uZz57e21lc3NhZ2Uuc291cmNlTmFtZX19PC9zdHJvbmc+PGJyPlxyXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT1cImZvbnQtc2l6ZTo4MCVcIj57e21lc3NhZ2UudGltZXN0YW1wIHwgZGF0ZTogJ0hIOm1tOnNzJ319PC9zcGFuPjxicj4gICAgXHJcbiAgICAgICAgICAgIHt7bWVzc2FnZS50b3BpY319XHJcbiAgICAgICAgICAgIDxuei1kaXZpZGVyPjwvbnotZGl2aWRlcj5cclxuICAgIDwvbnotdGltZWxpbmUtaXRlbT5cclxuPC9uei10aW1lbGluZT5cclxuPG5nLXRlbXBsYXRlICNkb3RUZW1wbGF0ZTE+XHJcbiAgICA8aSBuei1pY29uIHR5cGU9XCJjbG9zZS1jaXJjbGVcIiBzdHlsZT1cImZvbnQtc2l6ZTogMTZweDtcIiBbbnpUaGVtZV09XCIndHdvdG9uZSdcIiBbbnpUd290b25lQ29sb3JdPVwiJyNmNTIyMmQnXCI+PC9pPlxyXG48L25nLXRlbXBsYXRlPlxyXG48bmctdGVtcGxhdGUgI2RvdFRlbXBsYXRlMj5cclxuICAgIDxpIG56LWljb24gdHlwZT1cIndhcm5pbmdcIiBzdHlsZT1cImZvbnQtc2l6ZTogMTZweDtcIiBbbnpUaGVtZV09XCIndHdvdG9uZSdcIiBbbnpUd290b25lQ29sb3JdPVwiJyNmYWFkMTQnXCI+PC9pPlxyXG48L25nLXRlbXBsYXRlPlxyXG48bmctdGVtcGxhdGUgI2RvdFRlbXBsYXRlMz5cclxuICAgIDxpIG56LWljb24gbnotaWNvbiB0eXBlPVwiY2hlY2stY2lyY2xlXCIgW256VGhlbWVdPVwiJ3R3b3RvbmUnXCIgW256VHdvdG9uZUNvbG9yXT1cIicjNTJjNDFhJ1wiIHN0eWxlPVwiZm9udC1zaXplOiAxNnB4O1wiPjwvaT5cclxuPC9uZy10ZW1wbGF0ZT5gLFxyXG4gIHN0eWxlczogW2BgXSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyTG9nQ29tcG9uZW50IGV4dGVuZHMgS2VydmlVc2VyTG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7IFxyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5uZ09uSW5pdFVzZXJMb2coKTsgXHJcbiAgfVxyXG5cclxuICBcclxuICBcclxufSIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgVGltIFdlbnR6bGF1XHJcbi8vIExpY2Vuc2VkIHVuZGVyIE1JVFxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgS2VydmlVc2VyTG9nQ29tcG9uZW50IH0gZnJvbSAnbmd4LWtlcnZpJztcclxuaW1wb3J0IHsgTnpOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAna2VydmktdXNlci1tZXNzYWdlcycsXHJcbiAgdGVtcGxhdGU6IGA8bmctdGVtcGxhdGUgbGV0LW1lc3NhZ2U9XCJkYXRhXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYW50LW5vdGlmaWNhdGlvbi1ub3RpY2UtY29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtbm90aWZpY2F0aW9uLW5vdGljZS13aXRoLWljb25cIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhbnQtbm90aWZpY2F0aW9uLW5vdGljZS1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICA8aSAqbmdJZj1cIm1lc3NhZ2UubGV2ZWw9PTNcIiBuei1pY29uIHR5cGU9XCJjaGVjay1jaXJjbGVcIiBbbnpUaGVtZV09XCIndHdvdG9uZSdcIiBbbnpUd290b25lQ29sb3JdPVwiJyM1MmM0MWEnXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPGkgKm5nSWY9XCJtZXNzYWdlLmxldmVsPT0yXCIgbnotaWNvbiB0eXBlPVwid2FybmluZ1wiIFtuelRoZW1lXT1cIid0d290b25lJ1wiIFtuelR3b3RvbmVDb2xvcl09XCInI2ZhYWQxNCdcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8aSAqbmdJZj1cIm1lc3NhZ2UubGV2ZWw9PTFcIiBuei1pY29uIHR5cGU9XCJjbG9zZS1jaXJjbGVcIiBbbnpUaGVtZV09XCIndHdvdG9uZSdcIiBbbnpUd290b25lQ29sb3JdPVwiJyNmNTIyMmQnXCI+PC9pPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtbm90aWZpY2F0aW9uLW5vdGljZS1tZXNzYWdlXCI+e3ttZXNzYWdlLnNvdXJjZU5hbWV9fTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LW5vdGlmaWNhdGlvbi1ub3RpY2UtZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgIHt7IG1lc3NhZ2UudG9waWMgfX0gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuPC9uZy10ZW1wbGF0ZT5gLFxyXG4gIHN0eWxlczogW2BgXSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyTWVzc2FnZXNDb21wb25lbnQgZXh0ZW5kcyBLZXJ2aVVzZXJMb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYpIG1lc3NhZ2VUZW1wbGF0ZTogVGVtcGxhdGVSZWY8e30+OyAgXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBub3RpZmljYXRpb246IE56Tm90aWZpY2F0aW9uU2VydmljZSkge1xyXG4gICAgICAgIHN1cGVyKCk7IFxyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLmxhc3RNZXNzYWdlJC5zdWJzY3JpYmUoZnVuY3Rpb24obWVzc2FnZSl7XHJcbiAgICAgICAgICBpZiAobWVzc2FnZSl7XHJcbiAgICAgICAgICAgIHNlbGYubm90aWZpY2F0aW9uLnRlbXBsYXRlKHNlbGYubWVzc2FnZVRlbXBsYXRlLCB7IG56RGF0YTogbWVzc2FnZSB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHRoaXMubmdPbkluaXRVc2VyTG9nKCk7IFxyXG4gICAgXHJcbiAgfVxyXG59IiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCBUaW0gV2VudHpsYXVcclxuLy8gTGljZW5zZWQgdW5kZXIgTUlUXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBLZXJ2aVVzZXJMb2dDb21wb25lbnQgfSBmcm9tICduZ3gta2VydmknO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2tlcnZpLW1lc3NhZ2UtYnV0dG9uJyxcclxuICB0ZW1wbGF0ZTogYDxuei1iYWRnZSBbbnpDb3VudF09XCJtZXNzYWdlQ291bnQkIHwgYXN5bmNcIiBbbnpPdmVyZmxvd0NvdW50XT1cIjk5XCI+XHJcbiAgICA8YnV0dG9uICpuZ0lmPVwiKG1lc3NhZ2VDb3VudCQgfCBhc3luYyk+MFwiIG56LWJ1dHRvbiBuekdob3N0ICBuelR5cGU9XCJkZWZhdWx0XCIgbnpTaGFwZT1cImNpcmNsZVwiIChjbGljayk9XCJvcGVuKClcIj5cclxuICAgICAgICA8aSBuei1pY29uIG56VHlwZT1cIm5vdGlmaWNhdGlvblwiIG56VGhlbWU9XCJ0d290b25lXCIgW256VHdvdG9uZUNvbG9yXT1cIicjOWZkMDM3J1wiPjwvaT5cclxuICAgIDwvYnV0dG9uPlxyXG48L256LWJhZGdlPlxyXG5cclxuPG56LWRyYXdlclxyXG4gICAgICBbbnpDbG9zYWJsZV09XCJmYWxzZVwiXHJcbiAgICAgIFtuelZpc2libGVdPVwidmlzaWJsZVwiXHJcbiAgICAgIG56UGxhY2VtZW50PVwicmlnaHRcIlxyXG4gICAgICBuelRpdGxlPVwiTG9nXCJcclxuICAgICAgKG56T25DbG9zZSk9XCJjbG9zZSgpXCJcclxuICAgID5cclxuICAgIDxrZXJ2aS11c2VyLWxvZyBbaW5saW5lXT1cImZhbHNlXCI+PC9rZXJ2aS11c2VyLWxvZz5cclxuPC9uei1kcmF3ZXI+YCxcclxuICBzdHlsZXM6IFtgYF0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVXNlck1lc3NhZ2VCdXR0b25Db21wb25lbnQgZXh0ZW5kcyBLZXJ2aVVzZXJMb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHZpc2libGUgPSBmYWxzZTtcclxuICBcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpOyBcclxuICAgIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICB0aGlzLm5nT25Jbml0VXNlckxvZygpOyBcclxuICB9XHJcblxyXG4gIG9wZW4oKTogdm9pZCB7XHJcbiAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UoKTogdm9pZCB7XHJcbiAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5neEtlcnZpTW9kdWxlLCBOR1hLZXJ2aVBpcGVzTW9kdWxlICB9IGZyb20gJ25neC1rZXJ2aSdcclxuaW1wb3J0IHsgRGFzaGJvYXJkUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL2Rhc2hib2FyZC1wYW5lbC9kYXNoYm9hcmQtcGFuZWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgV2lkZ2V0Q29tcG9uZW50IH0gZnJvbSAnLi93aWRnZXQvd2lkZ2V0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7ICBWYWx1ZXNNb2R1bGUgfSBmcm9tICcuL3ZhbHVlcy92YWx1ZXMubW9kdWxlJztcclxuXHJcbmltcG9ydCB7IENvbnRyb2xsZXJQYWRDb21wb25lbnQgfSBmcm9tICcuL2NvbnRyb2xsZXItcGFkL2NvbnRyb2xsZXItcGFkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENhbVZpZXdlckNvbXBvbmVudCB9IGZyb20gJy4vY2FtLXZpZXdlci9jYW0tdmlld2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFjdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vYWN0aW9uL2FjdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBVSUNvbXBvbmVudHNNb2R1bGV9IGZyb20gJy4vdWktY29tcG9uZW50cy91aS1jb21wb25lbnRzLm1vZHVsZSdcclxuaW1wb3J0IHsgVXNlckxvZ0NvbXBvbmVudH0gZnJvbSAnLi9sb2cvdXNlci1sb2cvdXNlci1sb2cuY29tcG9uZW50J1xyXG5pbXBvcnQgeyBVc2VyTWVzc2FnZXNDb21wb25lbnQgfSBmcm9tICcuL2xvZy9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQnXHJcbmltcG9ydCB7IFVzZXJNZXNzYWdlQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9sb2cvbWVzc2FnZS1idXR0b24vbWVzc2FnZS1idXR0b24uY29tcG9uZW50J1xyXG5pbXBvcnQgeyBOZ1pvcnJvQW50ZE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xyXG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZmxleC1sYXlvdXQnO1xyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIEJyb3dzZXJNb2R1bGUsXHJcbiAgICBOR1hLZXJ2aVBpcGVzTW9kdWxlLFxyXG4gICAgTmd4S2VydmlNb2R1bGUsXHJcbiAgICBWYWx1ZXNNb2R1bGUsXHJcbiAgICBOZ1pvcnJvQW50ZE1vZHVsZSxcclxuICAgIEZsZXhMYXlvdXRNb2R1bGUsXHJcbiAgICBVSUNvbXBvbmVudHNNb2R1bGVcclxuICAgIFxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEYXNoYm9hcmRQYW5lbENvbXBvbmVudCxcclxuICAgIFdpZGdldENvbXBvbmVudCxcclxuICAgIENvbnRyb2xsZXJQYWRDb21wb25lbnQsXHJcbiAgICBDYW1WaWV3ZXJDb21wb25lbnQsXHJcbiAgICBBY3Rpb25Db21wb25lbnQsXHJcbiAgICBVc2VyTG9nQ29tcG9uZW50LFxyXG4gICAgVXNlck1lc3NhZ2VCdXR0b25Db21wb25lbnQsXHJcbiAgICBVc2VyTWVzc2FnZXNDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIERhc2hib2FyZFBhbmVsQ29tcG9uZW50LFxyXG4gICAgQ29udHJvbGxlclBhZENvbXBvbmVudCxcclxuICAgIENhbVZpZXdlckNvbXBvbmVudCxcclxuICAgIFVzZXJMb2dDb21wb25lbnQsXHJcbiAgICBVc2VyTWVzc2FnZUJ1dHRvbkNvbXBvbmVudCxcclxuICAgIFVzZXJNZXNzYWdlc0NvbXBvbmVudFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEtlcnZpWm9ycm9Nb2R1bGUgeyB9XHJcbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fZXh0ZW5kcyIsIkRhdGVUaW1lQ29tcG9uZW50IiwiQ29sb3JDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFPRTtLQUFpQjs7Z0JBTGxCLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7OzRCQUpEO0NBUUM7Ozs7Ozs7SUN1QzRDQSwyQ0FBNEI7SUFFdkU7UUFBQSxZQUNFLGlCQUFPLFNBQ1A7UUFISyxpQkFBVyxHQUFDLEtBQUssQ0FBQzs7S0FHdkI7Ozs7SUFFRiwwQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFB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

/***/ }),

/***/ "../../dist/ngx-kervi/fesm5/ngx-kervi.js":
/*!**********************************************************************************!*\
  !*** D:/dev/kervi/kervi/kervi-ui/kervi/ui/web/dist/ngx-kervi/fesm5/ngx-kervi.js ***!
  \**********************************************************************************/
/*! exports provided: ConnectionState, DashboardSizes, KerviTemplateService, KerviDashboardComponent, KerviDashboardPanelComponent, KerviControllerPadComponent, KerviWidgetComponent, KerviNumberComponent, KerviBooleanComponent, KerviActionComponent, KerviCameraComponent, KerviColorComponent, KerviDateTimeComponent, KerviStringComponent, KerviUserLogComponent, AppInjector, NGXKerviService, NgxKerviComponent, NgxKerviModule, NGXKerviPipesModule, ɵb, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KerviTemplateService", function() { return KerviTemplateService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KerviDashboardComponent", function() { return KerviDashboardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KerviDashboardPanelComponent", function() { return KerviDashboardPanelComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KerviControllerPadComponent", function() { return KerviControllerPadComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KerviWidgetComponent", function() { return KerviWidgetComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KerviNumberComponent", function() { return KerviNumberComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KerviBooleanComponent", function() { return KerviBooleanComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KerviActionComponent", function() { return KerviActionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KerviCameraComponent", function() { return KerviCameraComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KerviColorComponent", function() { return KerviColorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KerviDateTimeComponent", function() { return KerviDateTimeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KerviStringComponent", function() { return KerviStringComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KerviUserLogComponent", function() { return KerviUserLogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInjector", function() { return AppInjector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NGXKerviService", function() { return NGXKerviService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxKerviComponent", function() { return NgxKerviComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxKerviModule", function() { return NgxKerviModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NGXKerviPipesModule", function() { return NGXKerviPipesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return TranslatePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return KerviValueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var kervi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kervi-js */ "../../dist/kervi-js/fesm5/kervi-js.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConnectionState", function() { return kervi_js__WEBPACK_IMPORTED_MODULE_2__["ConnectionState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardSizes", function() { return kervi_js__WEBPACK_IMPORTED_MODULE_2__["DashboardSizes"]; });

/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NGXKerviService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NGXKerviService, _super);
    function NGXKerviService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NGXKerviService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
    ];
    return NGXKerviService;
}(kervi_js__WEBPACK_IMPORTED_MODULE_2__["KerviBaseService"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var KerviTemplateService = /** @class */ (function () {
    function KerviTemplateService() {
        this.remUnit = 20;
        console.log("kervi service constructor");
        //console.log("ctemplate");
        this.remUnit = parseFloat(getComputedStyle(document.documentElement).fontSize);
    }
    /**
     * @param {?} rem
     * @return {?}
     */
    KerviTemplateService.prototype.convertRemToPixels = /**
     * @param {?} rem
     * @return {?}
     */
    function (rem) {
        return rem * this.remUnit;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    KerviTemplateService.prototype.getSizeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value == null)
            return "100%";
        else if (value === "")
            return "100%";
        else if (isNaN(value)) {
            return value;
        }
        else if (value > 0)
            return value + "%";
        else
            return "100%";
    };
    /**
     * @param {?} value
     * @param {?} containerSize
     * @return {?}
     */
    KerviTemplateService.prototype.getPixels = /**
     * @param {?} value
     * @param {?} containerSize
     * @return {?}
     */
    function (value, containerSize) {
        //console.log("gps", value, isNaN(value));
        if (isNaN(value)) {
            if (value.lastIndexOf("px") > -1) {
                /** @type {?} */
                var px = parseFloat(value);
                return px;
            }
            else if (value.lastIndexOf("rem") > -1) {
                /** @type {?} */
                var rem = parseFloat(value);
                /** @type {?} */
                var px = this.convertRemToPixels(rem);
                console.log("remx", rem, px);
                return px;
            }
            else if (value.lastIndexOf("%") > -1) {
                /** @type {?} */
                var percentage = parseFloat(value) / 100.0;
                return containerSize * percentage;
            }
        }
        else
            return value;
    };
    /**
     * @private
     * @param {?} style
     * @param {?} selector
     * @param {?} sheet
     * @return {?}
     */
    KerviTemplateService.prototype.getStyleRuleValue = /**
     * @private
     * @param {?} style
     * @param {?} selector
     * @param {?} sheet
     * @return {?}
     */
    function (style, selector, sheet) {
        /** @type {?} */
        var sheets = sheet != null ? [sheet] : document.styleSheets;
        for (var i = 0, l = sheets.length; i < l; i++) {
            /** @type {?} */
            var sheet = sheets[i];
            if (!sheet.cssRules) {
                continue;
            }
            for (var j = 0, k = sheet.cssRules.length; j < k; j++) {
                /** @type {?} */
                var rule = sheet.cssRules[j];
                if (rule.selectorText && rule.selectorText.split(',').indexOf(selector) !== -1) {
                    return rule.style[style];
                }
            }
        }
        return null;
    };
    /**
     * @return {?}
     */
    KerviTemplateService.prototype.makeId = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var text = "";
        /** @type {?} */
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };
    /**
     * @param {?} colorName
     * @param {?} cssClass
     * @return {?}
     */
    KerviTemplateService.prototype.getColor = /**
     * @param {?} colorName
     * @param {?} cssClass
     * @return {?}
     */
    function (colorName, cssClass) {
        /** @type {?} */
        var styleValue = this.getStyleRuleValue(colorName, cssClass, null);
        //console.log("sv", cssClass,styleValue);
        return styleValue;
    };
    KerviTemplateService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
    ];
    /** @nocollapse */
    KerviTemplateService.ctorParameters = function () { return []; };
    return KerviTemplateService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var AppInjector;
/**
 * @param {?} injector
 * @return {?}
 */
function setAppInjector(injector) {
    if (AppInjector) {
        // Should not happen
        console.error('Programming error: AppInjector was already set');
    }
    else {
        AppInjector = injector;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var KerviDashboardComponent = /** @class */ (function () {
    function KerviDashboardComponent() {
        this.dashboardId = null;
        this.dashboard = null;
        this.dashboards = null;
        this.dashboardSizes = null;
        this.isAppEmpty = true;
        this.showMenu = false;
        this.dashboardPanelsHidden = false;
        this.showPanelController = false;
        this.cameraId = null;
        this.cameraParameters = null;
        this.authenticated = false;
        this.anonymous = true;
        this.showLeftPad = false;
        this.leftPadXValue = null;
        this.leftPadYValue = null;
        this.autoCenterLeftPad = false;
        this.showRightPad = false;
        this.rightPadXValue = null;
        this.rightPadYValue = null;
        this.autoCenterRightPad = false;
        this.inFullScreen = false;
        this.kerviService = AppInjector.get(NGXKerviService);
        /** @type {?} */
        var self = this;
        this.kerviService.componentsChanged$.subscribe((/**
         * @return {?}
         */
        function () {
            //var dashboard = self.kerviService.getComponent(self.dashboardId, "dashboard") as Dashboard
            //if (dashboard)
            self.loadDashboard(self.dashboardId);
        }));
    }
    /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    KerviDashboardComponent.prototype.logoff = /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.kerviService.logoff();
        event.stopPropagation();
    };
    /**
     * @protected
     * @param {?} dashboardId
     * @return {?}
     */
    KerviDashboardComponent.prototype.loadDashboard = /**
     * @protected
     * @param {?} dashboardId
     * @return {?}
     */
    function (dashboardId) {
        this.dashboardId = dashboardId;
        this.dashboard = (/** @type {?} */ (this.kerviService.getComponent(dashboardId, "dashboard")));
        this.anonymous = this.kerviService.isAnonymous();
        this.isAppEmpty = this.kerviService.isAppEmpty();
        this.authenticated = this.kerviService.doAuthenticate;
        if (this.dashboard) {
            this.dashboards = this.kerviService.getComponentsByType("dashboard");
            this.showMenu = (this.dashboards.length > 1 || this.kerviService.doAuthenticate);
            this.showPanelController = false;
            this.cameraId = null;
            this.cameraParameters = null;
            this.showLeftPad = false;
            this.showRightPad = false;
            this.dashboardPanelsHidden = false;
            if (this.dashboard.backgroundPanel) {
                if (this.dashboard.backgroundPanel.components.length > 0) {
                    this.dashboardPanelsHidden = true;
                    this.showPanelController = true;
                    this.cameraId = this.dashboard.backgroundPanel.components[0].component.id;
                    this.cameraParameters = this.dashboard.backgroundPanel.components[0].parameters;
                    console.log("cam", this.cameraId, this.cameraParameters);
                }
            }
            if (this.dashboard.LeftPadXPanel && this.dashboard.LeftPadXPanel.components.length || this.dashboard.LeftPadYPanel && this.dashboard.LeftPadYPanel.components.length) {
                this.showLeftPad = true;
                if (this.dashboard.LeftPadXPanel.components.length) {
                    this.leftPadXValue = (/** @type {?} */ (this.dashboard.LeftPadXPanel.components[0].component));
                    if (this.dashboard.LeftPadXPanel.components[0].parameters.padAutoCenter)
                        this.autoCenterLeftPad = true;
                }
                if (this.dashboard.LeftPadYPanel.components.length) {
                    this.leftPadYValue = (/** @type {?} */ (this.dashboard.LeftPadYPanel.components[0].component));
                    if (this.dashboard.LeftPadXPanel.components[0].parameters.padAutoCenter)
                        this.autoCenterLeftPad = true;
                }
            }
            if (this.dashboard.RightPadXPanel && this.dashboard.RightPadXPanel.components.length || this.dashboard.RightPadYPanel && this.dashboard.RightPadYPanel.components.length) {
                this.showRightPad = true;
                if (this.dashboard.RightPadXPanel.components.length) {
                    this.rightPadXValue = (/** @type {?} */ (this.dashboard.RightPadXPanel.components[0].component));
                    if (this.dashboard.LeftPadXPanel.components[0].parameters.padAutoCenter)
                        this.autoCenterRightPad = true;
                }
                if (this.dashboard.RightPadYPanel.components.length) {
                    this.rightPadYValue = (/** @type {?} */ (this.dashboard.RightPadYPanel.components[0].component));
                    if (this.dashboard.RightPadXPanel.components[0].parameters.padAutoCenter)
                        this.autoCenterRightPad = true;
                }
            }
            console.log("load db", dashboardId, this.dashboard, this);
        }
    };
    /**
     * @return {?}
     */
    KerviDashboardComponent.prototype.toggleFullScreen = /**
     * @return {?}
     */
    function () {
        console.log("fs", this.inFullScreen);
        /** @type {?} */
        var doc;
        doc = document;
        if ((doc.fullScreenElement && doc.fullScreenElement !== null)) 
        /*(!doc.mozFullScreen && !document.webkitIsFullScreen))*/ {
            this.inFullScreen = true;
            if (doc.documentElement.requestFullScreen) {
                doc.documentElement.requestFullScreen();
            }
            else if (doc.documentElement.mozRequestFullScreen) {
                doc.documentElement.mozRequestFullScreen();
            } // } else if (document.documentElement.webkitRequestFullScreen) {  
            //   doc.documentElement.webkitRequestFullScreen();  
            // }  
        }
        else {
            this.inFullScreen = false;
            if (doc.cancelFullScreen) {
                doc.cancelFullScreen();
            }
            else if (doc.mozCancelFullScreen) {
                doc.mozCancelFullScreen();
            } // } else if (document.webkitCancelFullScreen) {  
            //   doc.webkitCancelFullScreen();  
            // }  
        }
    };
    KerviDashboardComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'kervi-dashboard',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    KerviDashboardComponent.ctorParameters = function () { return []; };
    return KerviDashboardComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var KerviDashboardPanelComponent = /** @class */ (function () {
    function KerviDashboardPanelComponent() {
        this.panel = null;
        this.inline = false;
        this.inGroup = false;
        this.bodyOnly = false;
        this.width = "";
        this.showHeader = false;
        this.expanded = false;
        this.title = null;
        this.bodyComponents = [];
        this.headerComponents = [];
        this.footerComponents = [];
        //messages: DashboardMessageModel[] = [];
        //panelComponents:IComponent[] = []
        this.templateService = null;
        this.kerviService = null;
        this.templateService = AppInjector.get(KerviTemplateService);
        this.kerviService = AppInjector.get(NGXKerviService);
    }
    /**
     * @param {?} panel
     * @param {?} inGroup
     * @return {?}
     */
    KerviDashboardPanelComponent.prototype.calcWidth = /**
     * @param {?} panel
     * @param {?} inGroup
     * @return {?}
     */
    function (panel, inGroup) {
        if (panel.type == "group") {
            if (panel.parameters.width == null || panel.parameters.width == "0")
                return "100%";
            else
                return this.templateService.getSizeValue(panel.parameters.width);
        }
        else
            return inGroup ? "" : this.templateService.getSizeValue(panel.parameters.width);
    };
    /**
     * @param {?} panel
     * @return {?}
     */
    KerviDashboardPanelComponent.prototype.showPanelHeader = /**
     * @param {?} panel
     * @return {?}
     */
    function (panel) {
        var e_1, _a;
        /** @type {?} */
        var hasHeaderComponents = false;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.panel.components), _c = _b.next(); !_c.done; _c = _b.next()) {
                var component = _c.value;
                if (component.parameters.linkToHeader)
                    hasHeaderComponents = true;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return (panel.parameters.title != null && panel.parameters.title.length > 0) || hasHeaderComponents;
    };
    /**
     * @return {?}
     */
    KerviDashboardPanelComponent.prototype.ngOnInitPanel = /**
     * @return {?}
     */
    function () {
        var e_2, _a;
        this.title = this.panel.parameters.title;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.panel.components), _c = _b.next(); !_c.done; _c = _b.next()) {
                var component = _c.value;
                if (component.parameters.linkToHeader)
                    this.headerComponents.push(component);
                else
                    this.bodyComponents.push(component);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this.showHeader = (this.panel.parameters.title != null && this.panel.parameters.title.length > 0) || (this.headerComponents.length > 0);
        if (this.panel.type == "group") {
            if (this.panel.parameters.width == null || this.panel.parameters.width == "0" || this.panel.parameters.width == "")
                this.width = "100%";
            else
                this.width = this.templateService.getSizeValue(this.panel.parameters.width);
        }
        else
            //this.width = this.inGroup ? "100%" : this.templateService.getSizeValue(this.panel.parameters.width);
            this.width = this.templateService.getSizeValue(this.panel.parameters.width);
    };
    KerviDashboardPanelComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'kervi-dashboard-panel-base',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    KerviDashboardPanelComponent.ctorParameters = function () { return []; };
    KerviDashboardPanelComponent.propDecorators = {
        dashboardSizes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        panel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        inGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        bodyOnly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return KerviDashboardPanelComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var KerviControllerPadComponent = /** @class */ (function () {
    function KerviControllerPadComponent() {
    }
    /**
     * @return {?}
     */
    KerviControllerPadComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    KerviControllerPadComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'kervi-controller-pad-base',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    KerviControllerPadComponent.ctorParameters = function () { return []; };
    KerviControllerPadComponent.propDecorators = {
        dashboardSizes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return KerviControllerPadComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var KerviWidgetComponent = /** @class */ (function () {
    function KerviWidgetComponent() {
        this.component = null;
        this.dashboardSizes = new kervi_js__WEBPACK_IMPORTED_MODULE_2__["DashboardSizes"]();
        this.widgetType = "value";
        //console.log("cnio",this);
        this.kerviService = AppInjector.get(NGXKerviService);
    }
    Object.defineProperty(KerviWidgetComponent.prototype, "componentId", {
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this.component = this.kerviService.getComponent(this.componentId);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    KerviWidgetComponent.prototype.ngOnInitWidget = /**
     * @return {?}
     */
    function () {
        if (!this.linkParameters)
            this.linkParameters = this.component.ui;
        if (!this.inline && this.linkParameters.inline) {
            this.inline = true;
        }
        //console.log("widget", this.component, this.linkParameters);
        if (this.component.componentType == "controller") {
            /** @type {?} */
            var controller = (/** @type {?} */ (this.component));
            console.log("widget ctrl", controller);
            if (controller.type == "camera")
                this.widgetType = "camera";
        }
        else if (this.linkParameters.type) {
            if (this.linkParameters.type.indexOf("gauge") > -1) {
                this.widgetType = "gauge";
            }
            else if (this.linkParameters.type == "chart") {
                this.widgetType = "chart";
            }
        }
    };
    KerviWidgetComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'kervi-widget-base',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    KerviWidgetComponent.ctorParameters = function () { return []; };
    KerviWidgetComponent.propDecorators = {
        componentId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        component: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        dashboardPanel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        linkParameters: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        dashboardSizes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return KerviWidgetComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var KerviValueComponent = /** @class */ (function () {
    function KerviValueComponent() {
        this.value = null;
        this.dashboardSizes = new kervi_js__WEBPACK_IMPORTED_MODULE_2__["DashboardSizes"]();
        this.kerviService = AppInjector.get(NGXKerviService);
    }
    Object.defineProperty(KerviValueComponent.prototype, "valueId", {
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this.value = (/** @type {?} */ (this.kerviService.getComponent(this.valueId)));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    KerviValueComponent.prototype.ngOnInitValue = /**
     * @return {?}
     */
    function () {
        if (!this.linkParameters)
            this.linkParameters = this.value.ui;
    };
    KerviValueComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'kervi-value-base',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    KerviValueComponent.ctorParameters = function () { return []; };
    KerviValueComponent.propDecorators = {
        valueId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        linkParameters: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        dashboardSizes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return KerviValueComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var KerviNumberComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(KerviNumberComponent, _super);
    function KerviNumberComponent() {
        var _this = _super.call(this) || this;
        _this.numberFormat = "1.2-2";
        _this.displayValue = 0;
        _this.displayUnit = "";
        _this.displayType = "";
        _this.currentIcon = null;
        return _this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    KerviNumberComponent.prototype.setKerviValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value.set(value);
    };
    /**
     * @return {?}
     */
    KerviNumberComponent.prototype.ngOnInitNumber = /**
     * @return {?}
     */
    function () {
        this.ngOnInitValue();
        /** @type {?} */
        var self = this;
        this.numberFormat = this.linkParameters.minIntegerDigits + "." + this.linkParameters.minFractionDigits + "-" + this.linkParameters.maxFractionDigits;
        if (!this.linkParameters.valueIcon)
            this.currentIcon = null;
        else if (typeof (this.linkParameters.valueIcon) == "string")
            this.currentIcon = this.linkParameters.valueIcon;
        else {
            this.value.value$.subscribe((/**
             * @param {?} v
             * @return {?}
             */
            function (v) {
                var e_1, _a;
                try {
                    for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(self.linkParameters.valueIcon), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var iconSection = _c.value;
                        if (v >= iconSection.range[0] && v <= iconSection.range[1]) {
                            self.currentIcon = iconSection.icon;
                            break;
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }));
        }
        if (!this.inline && this.linkParameters.inline) {
            this.inline = true;
        }
        else if (!this.inline && this.linkParameters.size > 0) {
            this.inline = true;
        }
    };
    KerviNumberComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'kervi-value-number-base',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    KerviNumberComponent.ctorParameters = function () { return []; };
    return KerviNumberComponent;
}(KerviValueComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var KerviBooleanComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(KerviBooleanComponent, _super);
    function KerviBooleanComponent() {
        var _this = _super.call(this) || this;
        _this.displayType = "switch";
        return _this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    KerviBooleanComponent.prototype.setKerviValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value.set(value);
    };
    /**
     * @return {?}
     */
    KerviBooleanComponent.prototype.ngOnInitBoolean = /**
     * @return {?}
     */
    function () {
        this.ngOnInitValue();
        if (this.linkParameters.type) {
            this.displayType = this.linkParameters.type;
        }
        if (!this.inline && this.linkParameters.inline) {
            this.inline = true;
        }
        else if (!this.inline && this.linkParameters.size > 0) {
            this.inline = true;
        }
    };
    KerviBooleanComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'kervi-value-boolean-base',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    KerviBooleanComponent.ctorParameters = function () { return []; };
    return KerviBooleanComponent;
}(KerviValueComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var KerviActionComponent = /** @class */ (function () {
    function KerviActionComponent() {
        this.action = null;
        this.linkParameters = null;
        this.inline = false;
        this.dashboardSizes = new kervi_js__WEBPACK_IMPORTED_MODULE_2__["DashboardSizes"]();
        this.state = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.displayType = "switch";
        this.kerviService = AppInjector.get(NGXKerviService);
    }
    /**
     * @return {?}
     */
    KerviActionComponent.prototype.ngOnInitAction = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var self = this;
        if (!this.linkParameters)
            this.linkParameters = this.action.ui;
        if (this.linkParameters.type) {
            this.displayType = this.linkParameters.type;
        }
        if (!this.inline && this.linkParameters.inline) {
            this.inline = true;
        }
        self.state.next(this.action.running$.value);
        this.action.running$.subscribe((/**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            console.log("ar", self.action.id, v);
            self.state.next(v);
        }));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    KerviActionComponent.prototype.setActionState = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value)
            this.action.run(this.linkParameters.actionParameters);
        else
            this.action.interrupt(this.linkParameters.interruptParameters);
    };
    KerviActionComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'kervi-action-base',
                    template: '',
                    styles: [],
                },] },
    ];
    /** @nocollapse */
    KerviActionComponent.ctorParameters = function () { return []; };
    KerviActionComponent.propDecorators = {
        action: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        linkParameters: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        dashboardSizes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return KerviActionComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var KerviCameraComponent = /** @class */ (function () {
    function KerviCameraComponent() {
        this.linkParameters = null;
        this.inline = false;
        this.dashboardSizes = new kervi_js__WEBPACK_IMPORTED_MODULE_2__["DashboardSizes"]();
        this.isBackground = false;
        this.kerviService = AppInjector.get(NGXKerviService);
    }
    Object.defineProperty(KerviCameraComponent.prototype, "cameraId", {
        set: /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            console.log("setcamid", id);
            this.camera = (/** @type {?} */ (this.kerviService.getComponent(id)));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KerviCameraComponent.prototype, "camera", {
        get: /**
         * @return {?}
         */
        function () { return this.cam; },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            var e_1, _a;
            console.log("setcam", v);
            this.cam = v;
            try {
                for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(v.outputs), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var i = _c.value;
                    if (i.id.endsWith(".pan"))
                        this.pan = (/** @type {?} */ (i));
                    else if (i.id.endsWith(".tilt"))
                        this.tilt = (/** @type {?} */ (i));
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            this.cameraType = v.ui.type;
            if (this.cameraType == "frame") {
                if (v.ui.source)
                    this.cameraSource = v.ui.source.server + v.ui.source.path;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} v
     * @return {?}
     */
    KerviCameraComponent.prototype.setPan = /**
     * @param {?} v
     * @return {?}
     */
    function (v) {
        this.pan.set(v);
    };
    /**
     * @param {?} v
     * @return {?}
     */
    KerviCameraComponent.prototype.setTilt = /**
     * @param {?} v
     * @return {?}
     */
    function (v) {
        this.tilt.set(v);
    };
    /**
     * @return {?}
     */
    KerviCameraComponent.prototype.ngOnInitCamera = /**
     * @return {?}
     */
    function () {
        console.log("ngi cam");
        if (!this.linkParameters)
            this.linkParameters = this.camera.ui;
        if (!this.inline && this.linkParameters.inline) {
            this.inline = true;
        }
    };
    KerviCameraComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'kervi-camera-base',
                    template: '',
                    styles: [],
                },] },
    ];
    /** @nocollapse */
    KerviCameraComponent.ctorParameters = function () { return []; };
    KerviCameraComponent.propDecorators = {
        cameraId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        camera: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        linkParameters: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        dashboardSizes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        isBackground: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return KerviCameraComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var KerviColorComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(KerviColorComponent, _super);
    function KerviColorComponent() {
        var _this = _super.call(this) || this;
        _this.displayType = "button";
        return _this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    KerviColorComponent.prototype.setKerviValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value.set(value);
    };
    /**
     * @return {?}
     */
    KerviColorComponent.prototype.ngOnInitColor = /**
     * @return {?}
     */
    function () {
        this.ngOnInitValue();
        if (this.linkParameters.type) {
            this.displayType = this.linkParameters.type;
        }
        if (!this.inline && this.linkParameters.inline) {
            this.inline = true;
        }
        else if (!this.inline && this.linkParameters.size > 0) {
            this.inline = true;
        }
    };
    KerviColorComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'kervi-value-color-base',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    KerviColorComponent.ctorParameters = function () { return []; };
    return KerviColorComponent;
}(KerviValueComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var KerviDateTimeComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(KerviDateTimeComponent, _super);
    function KerviDateTimeComponent() {
        var _this = _super.call(this) || this;
        _this.displayType = "datetime";
        return _this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    KerviDateTimeComponent.prototype.setKerviValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value.set(value);
    };
    /**
     * @return {?}
     */
    KerviDateTimeComponent.prototype.ngOnInitDateTime = /**
     * @return {?}
     */
    function () {
        this.ngOnInitValue();
        /** @type {?} */
        var self = this;
        if (this.linkParameters.type) {
            this.displayType = this.linkParameters.type;
        }
        if (!this.inline && this.linkParameters.inline) {
            this.inline = true;
        }
        if (self.linkParameters.type == "time")
            this.dateTimeFormat = this.kerviService.application$.value.display.unit_system.datetime.time;
        else if (self.linkParameters.type == "date")
            this.dateTimeFormat = self.kerviService.application$.value.display.unit_system.datetime.date;
        else
            this.dateTimeFormat = this.kerviService.application$.value.display.unit_system.datetime.datetime;
    };
    KerviDateTimeComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'kervi-value-datetime-base',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    KerviDateTimeComponent.ctorParameters = function () { return []; };
    return KerviDateTimeComponent;
}(KerviValueComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var KerviStringComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(KerviStringComponent, _super);
    function KerviStringComponent() {
        var _this = _super.call(this) || this;
        _this.displayType = "";
        return _this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    KerviStringComponent.prototype.setKerviValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value.set(value);
    };
    /**
     * @return {?}
     */
    KerviStringComponent.prototype.ngOnInitString = /**
     * @return {?}
     */
    function () {
        this.ngOnInitValue();
        if (this.linkParameters.type) {
            this.displayType = this.linkParameters.type;
        }
        if (!this.inline && this.linkParameters.inline) {
            this.inline = true;
        }
    };
    KerviStringComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'kervi-value-string-base',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    KerviStringComponent.ctorParameters = function () { return []; };
    return KerviStringComponent;
}(KerviValueComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var KerviUserLogComponent = /** @class */ (function () {
    function KerviUserLogComponent() {
        this.logLength = 10;
        this.linkParameters = null;
        this.inline = false;
        this.dashboardSizes = new kervi_js__WEBPACK_IMPORTED_MODULE_2__["DashboardSizes"]();
        this.lastMessage$ = null;
        this.messages$ = null;
        this.messageCount$ = null;
        this.logState$ = null;
        this.messageCount = 0;
        this.UserLogState = kervi_js__WEBPACK_IMPORTED_MODULE_2__["UserLogStateType"].normal;
        this.kerviService = AppInjector.get(NGXKerviService);
        this.messages$ = this.kerviService.getLogMessages$();
        this.lastMessage$ = this.kerviService.getLastLogMessage$();
        this.messageCount$ = this.kerviService.getLogMessageCount$();
        this.logState$ = this.kerviService.getLogState$();
        this.messageCount$.subscribe((/**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this.messageCount = v;
            console.log("lc", this.messageCount);
        }));
    }
    /**
     * @protected
     * @return {?}
     */
    KerviUserLogComponent.prototype.ngOnInitUserLog = /**
     * @protected
     * @return {?}
     */
    function () {
    };
    KerviUserLogComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'kervi-user-log-base',
                    template: '',
                    styles: [],
                },] },
    ];
    /** @nocollapse */
    KerviUserLogComponent.ctorParameters = function () { return []; };
    KerviUserLogComponent.propDecorators = {
        logLength: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        linkParameters: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        dashboardSizes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return KerviUserLogComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxKerviComponent = /** @class */ (function () {
    function NgxKerviComponent() {
    }
    /**
     * @return {?}
     */
    NgxKerviComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    NgxKerviComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'lib-ngx-kervi',
                    template: "\n    <p>\n      ngx-kervi works!\n    </p>\n  ",
                    styles: []
                },] },
    ];
    /** @nocollapse */
    NgxKerviComponent.ctorParameters = function () { return []; };
    return NgxKerviComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxKerviModule = /** @class */ (function () {
    function NgxKerviModule(injector) {
        this.injector = injector;
        setAppInjector(injector);
    }
    NgxKerviModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [],
                    declarations: [
                        NgxKerviComponent,
                        KerviDashboardComponent,
                        KerviDashboardPanelComponent,
                        KerviControllerPadComponent,
                        KerviNumberComponent,
                        KerviStringComponent,
                        KerviBooleanComponent,
                        KerviColorComponent,
                        KerviDateTimeComponent,
                        KerviActionComponent,
                        KerviValueComponent,
                        KerviWidgetComponent,
                        KerviCameraComponent,
                        KerviUserLogComponent
                    ],
                    providers: [NGXKerviService, KerviTemplateService],
                    exports: [
                        NgxKerviComponent,
                        KerviDashboardComponent,
                        KerviDashboardPanelComponent,
                        KerviControllerPadComponent,
                        KerviNumberComponent,
                        KerviWidgetComponent,
                        KerviStringComponent,
                        KerviBooleanComponent,
                        KerviColorComponent,
                        KerviDateTimeComponent,
                        KerviActionComponent,
                        KerviCameraComponent,
                        KerviUserLogComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    NgxKerviModule.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
    ]; };
    return NgxKerviModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TranslatePipe = /** @class */ (function () {
    function TranslatePipe(kerviService) {
        this.kerviService = kerviService;
    }
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    TranslatePipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    function (value, args) {
        return this.kerviService.text(value, value);
    };
    TranslatePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"], args: [{
                    name: 'translate'
                },] },
    ];
    /** @nocollapse */
    TranslatePipe.ctorParameters = function () { return [
        { type: NGXKerviService }
    ]; };
    return TranslatePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NGXKerviPipesModule = /** @class */ (function () {
    function NGXKerviPipesModule() {
    }
    NGXKerviPipesModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [],
                    exports: [
                        TranslatePipe
                    ],
                    providers: [],
                    declarations: [
                        TranslatePipe
                    ]
                },] },
    ];
    return NGXKerviPipesModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWtlcnZpLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gta2VydmkvbGliL25neC1rZXJ2aS5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gta2VydmkvbGliL25neC1rZXJ2aS10ZW1wbGF0ZS5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gta2VydmkvbGliL2FwcC1pbmplY3Rvci5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gta2VydmkvbGliL2Rhc2hib2FyZC9rZXJ2aS1kYXNoYm9hcmQuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gta2VydmkvbGliL2Rhc2hib2FyZC9rZXJ2aS1kYXNoYm9hcmQtcGFuZWwuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gta2VydmkvbGliL2Rhc2hib2FyZC9rZXJ2aS1jb250cm9sbGVyLXBhZC5jb21wb25lbnQudHMiLCJuZzovL25neC1rZXJ2aS9saWIvZGFzaGJvYXJkL2tlcnZpLXdpZGdldC5jb21wb25lbnQudHMiLCJuZzovL25neC1rZXJ2aS9saWIvdmFsdWVzL3ZhbHVlLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWtlcnZpL2xpYi92YWx1ZXMva2VydmktbnVtYmVyLXZhbHVlLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWtlcnZpL2xpYi92YWx1ZXMva2VydmktYm9vbGVhbi12YWx1ZS5jb21wb25lbnQudHMiLCJuZzovL25neC1rZXJ2aS9saWIvYWN0aW9ucy9rZXJ2aS1hY3Rpb24uY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gta2VydmkvbGliL2NhbWVyYS9rZXJ2aS1jYW1lcmEuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gta2VydmkvbGliL3ZhbHVlcy9rZXJ2aS1jb2xvci12YWx1ZS5jb21wb25lbnQudHMiLCJuZzovL25neC1rZXJ2aS9saWIvdmFsdWVzL2tlcnZpLWRhdGV0aW1lLXZhbHVlLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWtlcnZpL2xpYi92YWx1ZXMva2Vydmktc3RyaW5nLXZhbHVlLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWtlcnZpL2xpYi91c2VyLWxvZy91c2VyLWxvZy5jb21wb25lbnQudHMiLCJuZzovL25neC1rZXJ2aS9saWIvbmd4LWtlcnZpLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWtlcnZpL2xpYi9uZ3gta2VydmkubW9kdWxlLnRzIiwibmc6Ly9uZ3gta2VydmkvbGliL3BpcGVzL3RleHRQaXBlLnRzIiwibmc6Ly9uZ3gta2VydmkvbGliL3BpcGVzL3BpcGVzLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEtlcnZpQmFzZVNlcnZpY2UgfSBmcm9tIFwia2VydmktanNcIlxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTkdYS2VydmlTZXJ2aWNlIGV4dGVuZHMgS2VydmlCYXNlU2VydmljZXtcclxuXHJcbn0iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBLZXJ2aVRlbXBsYXRlU2VydmljZSB7XHJcblxyXG4gICAgcHJpdmF0ZSByZW1Vbml0Om51bWJlcj0yMDtcclxuICAgIGNvbnN0cnVjdG9yKCkgXHJcbiAgeyBcclxuICAgIGNvbnNvbGUubG9nKFwia2Vydmkgc2VydmljZSBjb25zdHJ1Y3RvclwiKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiY3RlbXBsYXRlXCIpO1xyXG4gICAgICAgIHRoaXMucmVtVW5pdCA9IHBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmZvbnRTaXplKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgY29udmVydFJlbVRvUGl4ZWxzKHJlbSkgeyAgICBcclxuICAgICAgICByZXR1cm4gcmVtICogdGhpcy5yZW1Vbml0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRTaXplVmFsdWUodmFsdWUpe1xyXG4gICAgICAgIGlmICh2YWx1ZT09bnVsbClcclxuICAgICAgICAgICAgcmV0dXJuIFwiMTAwJVwiXHJcbiAgICAgICAgZWxzZSBpZiAodmFsdWU9PT1cIlwiKVxyXG4gICAgICAgICAgICByZXR1cm4gXCIxMDAlXCJcclxuICAgICAgICBlbHNlIGlmIChpc05hTih2YWx1ZSkpe1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIGlmICh2YWx1ZT4wKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlICsgXCIlXCI7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIjEwMCVcIjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgIGdldFBpeGVscyh2YWx1ZSwgY29udGFpbmVyU2l6ZSl7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImdwc1wiLCB2YWx1ZSwgaXNOYU4odmFsdWUpKTtcclxuICAgICAgICBpZiAoaXNOYU4odmFsdWUpKXtcclxuICAgICAgICAgIGlmICh2YWx1ZS5sYXN0SW5kZXhPZihcInB4XCIpPi0xKXtcclxuICAgICAgICAgICAgdmFyIHB4ID0gcGFyc2VGbG9hdCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBweDtcclxuICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUubGFzdEluZGV4T2YoXCJyZW1cIik+LTEpe1xyXG4gICAgICAgICAgICB2YXIgcmVtID0gcGFyc2VGbG9hdCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIHZhciBweCA9IHRoaXMuY29udmVydFJlbVRvUGl4ZWxzKHJlbSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVteFwiLHJlbSwgcHgpO1xyXG4gICAgICAgICAgICByZXR1cm4gcHg7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLmxhc3RJbmRleE9mKFwiJVwiKT4tMSl7XHJcbiAgICAgICAgICAgIHZhciBwZXJjZW50YWdlID0gcGFyc2VGbG9hdCh2YWx1ZSkvMTAwLjA7XHJcbiAgICAgICAgICAgIHJldHVybiBjb250YWluZXJTaXplICogcGVyY2VudGFnZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgXHJcbiAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFN0eWxlUnVsZVZhbHVlKHN0eWxlLCBzZWxlY3Rvciwgc2hlZXQpIHtcclxuICAgICAgICB2YXIgc2hlZXRzID0gc2hlZXQhPW51bGwgPyBbc2hlZXRdIDogZG9jdW1lbnQuc3R5bGVTaGVldHM7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBzaGVldHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgc2hlZXQgPSBzaGVldHNbaV07XHJcbiAgICAgICAgICAgIGlmKCAhc2hlZXQuY3NzUnVsZXMgKSB7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwLCBrID0gc2hlZXQuY3NzUnVsZXMubGVuZ3RoOyBqIDwgazsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcnVsZSA9IHNoZWV0LmNzc1J1bGVzW2pdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJ1bGUuc2VsZWN0b3JUZXh0ICYmIHJ1bGUuc2VsZWN0b3JUZXh0LnNwbGl0KCcsJykuaW5kZXhPZihzZWxlY3RvcikgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJ1bGUuc3R5bGVbc3R5bGVdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtYWtlSWQoKVxyXG4gICAge1xyXG4gICAgICAgIHZhciB0ZXh0ID0gXCJcIjtcclxuICAgICAgICB2YXIgcG9zc2libGUgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5XCI7XHJcblxyXG4gICAgICAgIGZvciggdmFyIGk9MDsgaSA8IDU7IGkrKyApXHJcbiAgICAgICAgICAgIHRleHQgKz0gcG9zc2libGUuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvc3NpYmxlLmxlbmd0aCkpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q29sb3IoY29sb3JOYW1lOnN0cmluZyxjc3NDbGFzczpzdHJpbmcpe1xyXG4gICAgICAgIHZhciBzdHlsZVZhbHVlPXRoaXMuZ2V0U3R5bGVSdWxlVmFsdWUoY29sb3JOYW1lLGNzc0NsYXNzLG51bGwpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJzdlwiLCBjc3NDbGFzcyxzdHlsZVZhbHVlKTtcclxuICAgICAgICByZXR1cm4gc3R5bGVWYWx1ZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmV4cG9ydCBsZXQgQXBwSW5qZWN0b3I6IEluamVjdG9yO1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0QXBwSW5qZWN0b3IoaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcbiAgICBpZiAoQXBwSW5qZWN0b3IpIHtcclxuICAgICAgICAvLyBTaG91bGQgbm90IGhhcHBlblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1Byb2dyYW1taW5nIGVycm9yOiBBcHBJbmplY3RvciB3YXMgYWxyZWFkeSBzZXQnKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIEFwcEluamVjdG9yID0gaW5qZWN0b3I7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERhc2hib2FyZCwgRGFzaGJvYXJkU2l6ZXMsIE51bWJlclZhbHVlIH0gZnJvbSAna2VydmktanMnO1xyXG5pbXBvcnQgeyBOR1hLZXJ2aVNlcnZpY2UgfSBmcm9tICcuLi9uZ3gta2Vydmkuc2VydmljZSc7XHJcbmltcG9ydCB7IEFwcEluamVjdG9yIH0gZnJvbSAnLi4vYXBwLWluamVjdG9yLnNlcnZpY2UnXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAna2VydmktZGFzaGJvYXJkJyxcclxuICB0ZW1wbGF0ZTogJydcclxufSlcclxuZXhwb3J0IGNsYXNzIEtlcnZpRGFzaGJvYXJkQ29tcG9uZW50IHtcclxuICBwcml2YXRlIGRhc2hib2FyZElkOnN0cmluZz1udWxsO1xyXG4gIHByb3RlY3RlZCBkYXNoYm9hcmQ6RGFzaGJvYXJkID0gbnVsbDtcclxuICBwcm90ZWN0ZWQga2VydmlTZXJ2aWNlOk5HWEtlcnZpU2VydmljZTtcclxuICBwcm90ZWN0ZWQgZGFzaGJvYXJkczpEYXNoYm9hcmRbXSA9IG51bGw7XHJcbiAgcHJvdGVjdGVkIGRhc2hib2FyZFNpemVzOkRhc2hib2FyZFNpemVzID0gbnVsbDtcclxuICBwcm90ZWN0ZWQgaXNBcHBFbXB0eTpib29sZWFuID0gdHJ1ZTtcclxuICBwcm90ZWN0ZWQgc2hvd01lbnU6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gIHByb3RlY3RlZCBkYXNoYm9hcmRQYW5lbHNIaWRkZW46Ym9vbGVhbj1mYWxzZTtcclxuICBwcm90ZWN0ZWQgc2hvd1BhbmVsQ29udHJvbGxlcjpib29sZWFuID0gZmFsc2U7XHJcbiAgcHJvdGVjdGVkIGNhbWVyYUlkOiBzdHJpbmcgPSBudWxsO1xyXG4gIHByb3RlY3RlZCBjYW1lcmFQYXJhbWV0ZXJzOmFueSA9IG51bGw7XHJcbiAgXHJcbiAgcHVibGljIGF1dGhlbnRpY2F0ZWQ6Qm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgYW5vbnltb3VzOkJvb2xlYW4gPSB0cnVlO1xyXG4gIFxyXG5cclxuICBwcm90ZWN0ZWQgc2hvd0xlZnRQYWQ6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gIHByb3RlY3RlZCBsZWZ0UGFkWFZhbHVlOk51bWJlclZhbHVlID0gbnVsbDtcclxuICBwcm90ZWN0ZWQgbGVmdFBhZFlWYWx1ZTpOdW1iZXJWYWx1ZSA9IG51bGw7XHJcbiAgcHJvdGVjdGVkIGF1dG9DZW50ZXJMZWZ0UGFkOmJvb2xlYW4gPSBmYWxzZTtcclxuICBcclxuICBwcm90ZWN0ZWQgc2hvd1JpZ2h0UGFkOmJvb2xlYW4gPSBmYWxzZTtcclxuICBwcm90ZWN0ZWQgcmlnaHRQYWRYVmFsdWU6TnVtYmVyVmFsdWUgPSBudWxsO1xyXG4gIHByb3RlY3RlZCByaWdodFBhZFlWYWx1ZTpOdW1iZXJWYWx1ZSA9IG51bGw7XHJcbiAgcHJvdGVjdGVkIGF1dG9DZW50ZXJSaWdodFBhZDpib29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuXHJcbiAgcHJpdmF0ZSBpbkZ1bGxTY3JlZW46Ym9vbGVhbiA9IGZhbHNlOyBcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMua2VydmlTZXJ2aWNlID0gQXBwSW5qZWN0b3IuZ2V0KE5HWEtlcnZpU2VydmljZSk7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICB0aGlzLmtlcnZpU2VydmljZS5jb21wb25lbnRzQ2hhbmdlZCQuc3Vic2NyaWJlKGZ1bmN0aW9uKCl7XHJcbiAgICAgIC8vdmFyIGRhc2hib2FyZCA9IHNlbGYua2VydmlTZXJ2aWNlLmdldENvbXBvbmVudChzZWxmLmRhc2hib2FyZElkLCBcImRhc2hib2FyZFwiKSBhcyBEYXNoYm9hcmRcclxuICAgICAgLy9pZiAoZGFzaGJvYXJkKVxyXG4gICAgICAgIHNlbGYubG9hZERhc2hib2FyZChzZWxmLmRhc2hib2FyZElkKTtcclxuICAgIH0pXHJcbiAgICBcclxuICAgfVxyXG5cclxuICBwcm90ZWN0ZWQgbG9nb2ZmKGV2ZW50KXtcclxuICAgIHRoaXMua2VydmlTZXJ2aWNlLmxvZ29mZigpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgbG9hZERhc2hib2FyZChkYXNoYm9hcmRJZDpzdHJpbmcpe1xyXG4gICAgdGhpcy5kYXNoYm9hcmRJZCA9IGRhc2hib2FyZElkO1xyXG4gICAgdGhpcy5kYXNoYm9hcmQgPSB0aGlzLmtlcnZpU2VydmljZS5nZXRDb21wb25lbnQoZGFzaGJvYXJkSWQsIFwiZGFzaGJvYXJkXCIpIGFzIERhc2hib2FyZDtcclxuICAgIHRoaXMuYW5vbnltb3VzID0gdGhpcy5rZXJ2aVNlcnZpY2UuaXNBbm9ueW1vdXMoKTtcclxuICAgIHRoaXMuaXNBcHBFbXB0eSA9IHRoaXMua2VydmlTZXJ2aWNlLmlzQXBwRW1wdHkoKTtcclxuICAgIHRoaXMuYXV0aGVudGljYXRlZCA9IHRoaXMua2VydmlTZXJ2aWNlLmRvQXV0aGVudGljYXRlO1xyXG4gICAgaWYgKHRoaXMuZGFzaGJvYXJkKXtcclxuICAgICAgdGhpcy5kYXNoYm9hcmRzID0gdGhpcy5rZXJ2aVNlcnZpY2UuZ2V0Q29tcG9uZW50c0J5VHlwZShcImRhc2hib2FyZFwiKTtcclxuICAgICAgdGhpcy5zaG93TWVudSA9ICh0aGlzLmRhc2hib2FyZHMubGVuZ3RoID4gMSB8fCB0aGlzLmtlcnZpU2VydmljZS5kb0F1dGhlbnRpY2F0ZSk7XHJcbiAgICAgIHRoaXMuc2hvd1BhbmVsQ29udHJvbGxlcj1mYWxzZTtcclxuICAgICAgdGhpcy5jYW1lcmFJZCA9IG51bGw7XHJcbiAgICAgIHRoaXMuY2FtZXJhUGFyYW1ldGVycyA9IG51bGw7XHJcbiAgICAgIHRoaXMuc2hvd0xlZnRQYWQgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93UmlnaHRQYWQgPSBmYWxzZTtcclxuICAgICAgdGhpcy5kYXNoYm9hcmRQYW5lbHNIaWRkZW49ZmFsc2U7XHJcbiAgICAgIGlmICh0aGlzLmRhc2hib2FyZC5iYWNrZ3JvdW5kUGFuZWwpe1xyXG4gICAgICAgIGlmICh0aGlzLmRhc2hib2FyZC5iYWNrZ3JvdW5kUGFuZWwuY29tcG9uZW50cy5sZW5ndGggPiAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRoaXMuZGFzaGJvYXJkUGFuZWxzSGlkZGVuPXRydWU7XHJcbiAgICAgICAgICB0aGlzLnNob3dQYW5lbENvbnRyb2xsZXI9dHJ1ZTtcclxuICAgICAgICAgIHRoaXMuY2FtZXJhSWQ9dGhpcy5kYXNoYm9hcmQuYmFja2dyb3VuZFBhbmVsLmNvbXBvbmVudHNbMF0uY29tcG9uZW50LmlkO1xyXG4gICAgICAgICAgdGhpcy5jYW1lcmFQYXJhbWV0ZXJzPXRoaXMuZGFzaGJvYXJkLmJhY2tncm91bmRQYW5lbC5jb21wb25lbnRzWzBdLnBhcmFtZXRlcnM7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImNhbVwiLCB0aGlzLmNhbWVyYUlkLCB0aGlzLmNhbWVyYVBhcmFtZXRlcnMpO1xyXG4gICAgICAgIH0gXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuZGFzaGJvYXJkLkxlZnRQYWRYUGFuZWwgJiYgdGhpcy5kYXNoYm9hcmQuTGVmdFBhZFhQYW5lbC5jb21wb25lbnRzLmxlbmd0aCB8fCB0aGlzLmRhc2hib2FyZC5MZWZ0UGFkWVBhbmVsICYmIHRoaXMuZGFzaGJvYXJkLkxlZnRQYWRZUGFuZWwuY29tcG9uZW50cy5sZW5ndGgpe1xyXG4gICAgICAgIHRoaXMuc2hvd0xlZnRQYWQgPSB0cnVlO1xyXG4gICAgICAgIGlmICh0aGlzLmRhc2hib2FyZC5MZWZ0UGFkWFBhbmVsLmNvbXBvbmVudHMubGVuZ3RoKXtcclxuICAgICAgICAgIHRoaXMubGVmdFBhZFhWYWx1ZT10aGlzLmRhc2hib2FyZC5MZWZ0UGFkWFBhbmVsLmNvbXBvbmVudHNbMF0uY29tcG9uZW50IGFzIE51bWJlclZhbHVlO1xyXG4gICAgICAgICAgaWYgKHRoaXMuZGFzaGJvYXJkLkxlZnRQYWRYUGFuZWwuY29tcG9uZW50c1swXS5wYXJhbWV0ZXJzLnBhZEF1dG9DZW50ZXIpXHJcbiAgICAgICAgICAgIHRoaXMuYXV0b0NlbnRlckxlZnRQYWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5kYXNoYm9hcmQuTGVmdFBhZFlQYW5lbC5jb21wb25lbnRzLmxlbmd0aCl7XHJcbiAgICAgICAgICB0aGlzLmxlZnRQYWRZVmFsdWU9dGhpcy5kYXNoYm9hcmQuTGVmdFBhZFlQYW5lbC5jb21wb25lbnRzWzBdLmNvbXBvbmVudCBhcyBOdW1iZXJWYWx1ZTtcclxuICAgICAgICAgIGlmICh0aGlzLmRhc2hib2FyZC5MZWZ0UGFkWFBhbmVsLmNvbXBvbmVudHNbMF0ucGFyYW1ldGVycy5wYWRBdXRvQ2VudGVyKVxyXG4gICAgICAgICAgICB0aGlzLmF1dG9DZW50ZXJMZWZ0UGFkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLmRhc2hib2FyZC5SaWdodFBhZFhQYW5lbCAmJiB0aGlzLmRhc2hib2FyZC5SaWdodFBhZFhQYW5lbC5jb21wb25lbnRzLmxlbmd0aCB8fCB0aGlzLmRhc2hib2FyZC5SaWdodFBhZFlQYW5lbCAmJiB0aGlzLmRhc2hib2FyZC5SaWdodFBhZFlQYW5lbC5jb21wb25lbnRzLmxlbmd0aCl7XHJcbiAgICAgICAgdGhpcy5zaG93UmlnaHRQYWQgPSB0cnVlO1xyXG4gICAgICAgIGlmICh0aGlzLmRhc2hib2FyZC5SaWdodFBhZFhQYW5lbC5jb21wb25lbnRzLmxlbmd0aCl7XHJcbiAgICAgICAgICB0aGlzLnJpZ2h0UGFkWFZhbHVlPXRoaXMuZGFzaGJvYXJkLlJpZ2h0UGFkWFBhbmVsLmNvbXBvbmVudHNbMF0uY29tcG9uZW50IGFzIE51bWJlclZhbHVlO1xyXG4gICAgICAgICAgaWYgKHRoaXMuZGFzaGJvYXJkLkxlZnRQYWRYUGFuZWwuY29tcG9uZW50c1swXS5wYXJhbWV0ZXJzLnBhZEF1dG9DZW50ZXIpXHJcbiAgICAgICAgICAgIHRoaXMuYXV0b0NlbnRlclJpZ2h0UGFkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZGFzaGJvYXJkLlJpZ2h0UGFkWVBhbmVsLmNvbXBvbmVudHMubGVuZ3RoKXtcclxuICAgICAgICAgIHRoaXMucmlnaHRQYWRZVmFsdWU9dGhpcy5kYXNoYm9hcmQuUmlnaHRQYWRZUGFuZWwuY29tcG9uZW50c1swXS5jb21wb25lbnQgYXMgTnVtYmVyVmFsdWU7XHJcbiAgICAgICAgICBpZiAodGhpcy5kYXNoYm9hcmQuUmlnaHRQYWRYUGFuZWwuY29tcG9uZW50c1swXS5wYXJhbWV0ZXJzLnBhZEF1dG9DZW50ZXIpXHJcbiAgICAgICAgICAgIHRoaXMuYXV0b0NlbnRlclJpZ2h0UGFkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coXCJsb2FkIGRiXCIsIGRhc2hib2FyZElkLCB0aGlzLmRhc2hib2FyZCwgdGhpcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2dnbGVGdWxsU2NyZWVuKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJmc1wiLCB0aGlzLmluRnVsbFNjcmVlbik7XHJcbiAgICB2YXIgZG9jOmFueTtcclxuICAgIGRvYyA9IGRvY3VtZW50O1xyXG4gICAgaWYgKChkb2MuZnVsbFNjcmVlbkVsZW1lbnQgJiYgZG9jLmZ1bGxTY3JlZW5FbGVtZW50ICE9PSBudWxsKSkgICAgIFxyXG4gICAgIC8qKCFkb2MubW96RnVsbFNjcmVlbiAmJiAhZG9jdW1lbnQud2Via2l0SXNGdWxsU2NyZWVuKSkqLyB7XHJcbiAgICAgICB0aGlzLmluRnVsbFNjcmVlbiA9IHRydWU7XHJcbiAgICAgIGlmIChkb2MuZG9jdW1lbnRFbGVtZW50LnJlcXVlc3RGdWxsU2NyZWVuKSB7ICBcclxuICAgICAgICBkb2MuZG9jdW1lbnRFbGVtZW50LnJlcXVlc3RGdWxsU2NyZWVuKCk7ICBcclxuICAgICAgfSBlbHNlIGlmIChkb2MuZG9jdW1lbnRFbGVtZW50Lm1velJlcXVlc3RGdWxsU2NyZWVuKSB7ICBcclxuICAgICAgICBkb2MuZG9jdW1lbnRFbGVtZW50Lm1velJlcXVlc3RGdWxsU2NyZWVuKCk7ICBcclxuICAgICAgfS8vIH0gZWxzZSBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LndlYmtpdFJlcXVlc3RGdWxsU2NyZWVuKSB7ICBcclxuICAgICAgLy8gICBkb2MuZG9jdW1lbnRFbGVtZW50LndlYmtpdFJlcXVlc3RGdWxsU2NyZWVuKCk7ICBcclxuICAgICAgLy8gfSAgXHJcbiAgICB9IGVsc2UgeyAgXHJcbiAgICAgIHRoaXMuaW5GdWxsU2NyZWVuPWZhbHNlO1xyXG4gICAgICBpZiAoZG9jLmNhbmNlbEZ1bGxTY3JlZW4pIHsgIFxyXG4gICAgICAgIGRvYy5jYW5jZWxGdWxsU2NyZWVuKCk7ICBcclxuICAgICAgfSBlbHNlIGlmIChkb2MubW96Q2FuY2VsRnVsbFNjcmVlbikgeyAgXHJcbiAgICAgICAgZG9jLm1vekNhbmNlbEZ1bGxTY3JlZW4oKTsgIFxyXG4gICAgICB9Ly8gfSBlbHNlIGlmIChkb2N1bWVudC53ZWJraXRDYW5jZWxGdWxsU2NyZWVuKSB7ICBcclxuICAgICAgLy8gICBkb2Mud2Via2l0Q2FuY2VsRnVsbFNjcmVlbigpOyAgXHJcbiAgICAgIC8vIH0gIFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERhc2hib2FyZFNpemVzLCBEYXNoYm9hcmRQYW5lbCB9IGZyb20gJ2tlcnZpLWpzJztcclxuaW1wb3J0IHsgTkdYS2VydmlTZXJ2aWNlIH0gZnJvbSAnLi4vbmd4LWtlcnZpLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBLZXJ2aVRlbXBsYXRlU2VydmljZSB9IGZyb20gJy4uL25neC1rZXJ2aS10ZW1wbGF0ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBwSW5qZWN0b3IgfSBmcm9tICcuLi9hcHAtaW5qZWN0b3Iuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2tlcnZpLWRhc2hib2FyZC1wYW5lbC1iYXNlJyxcclxuICB0ZW1wbGF0ZTogJydcclxufSlcclxuZXhwb3J0IGNsYXNzIEtlcnZpRGFzaGJvYXJkUGFuZWxDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGRhc2hib2FyZFNpemVzOiBEYXNoYm9hcmRTaXplcztcclxuICBASW5wdXQoKSBwYW5lbDpEYXNoYm9hcmRQYW5lbD1udWxsO1xyXG4gIEBJbnB1dCgpIGlubGluZTpib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaW5Hcm91cDpib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgYm9keU9ubHk6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gIFxyXG4gIFxyXG4gIHB1YmxpYyB3aWR0aDpzdHJpbmcgPSBcIlwiO1xyXG4gIHB1YmxpYyBzaG93SGVhZGVyOmJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgZXhwYW5kZWQ6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyB0aXRsZTpzdHJpbmcgPSBudWxsO1xyXG4gIHB1YmxpYyBib2R5Q29tcG9uZW50czphbnlbXT1bXTtcclxuICBwdWJsaWMgaGVhZGVyQ29tcG9uZW50czogYW55W10gPSBbXTtcclxuICBwdWJsaWMgZm9vdGVyQ29tcG9uZW50czogYW55W10gPSBbXTtcclxuICAvL21lc3NhZ2VzOiBEYXNoYm9hcmRNZXNzYWdlTW9kZWxbXSA9IFtdO1xyXG4gIFxyXG4gIC8vcGFuZWxDb21wb25lbnRzOklDb21wb25lbnRbXSA9IFtdXHJcbiAgcHJvdGVjdGVkIHRlbXBsYXRlU2VydmljZTogS2VydmlUZW1wbGF0ZVNlcnZpY2UgPSBudWxsO1xyXG4gIHByb3RlY3RlZCBrZXJ2aVNlcnZpY2U6TkdYS2VydmlTZXJ2aWNlID0gbnVsbDtcclxuICBjb25zdHJ1Y3RvciAoKXtcclxuICAgIHRoaXMudGVtcGxhdGVTZXJ2aWNlID0gQXBwSW5qZWN0b3IuZ2V0KEtlcnZpVGVtcGxhdGVTZXJ2aWNlKTsgICAgXHJcbiAgICB0aGlzLmtlcnZpU2VydmljZSA9IEFwcEluamVjdG9yLmdldChOR1hLZXJ2aVNlcnZpY2UpOyAgXHJcbiAgfVxyXG5cclxuICAgIGNhbGNXaWR0aChwYW5lbDpEYXNoYm9hcmRQYW5lbCwgaW5Hcm91cCl7XHJcbiAgICAgICAgaWYgKHBhbmVsLnR5cGU9PVwiZ3JvdXBcIil7XHJcbiAgICAgICAgICAgIGlmIChwYW5lbC5wYXJhbWV0ZXJzLndpZHRoPT1udWxsIHx8IHBhbmVsLnBhcmFtZXRlcnMud2lkdGg9PVwiMFwiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiMTAwJVwiXHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRlbXBsYXRlU2VydmljZS5nZXRTaXplVmFsdWUocGFuZWwucGFyYW1ldGVycy53aWR0aCk7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBpbkdyb3VwID8gXCJcIiA6IHRoaXMudGVtcGxhdGVTZXJ2aWNlLmdldFNpemVWYWx1ZShwYW5lbC5wYXJhbWV0ZXJzLndpZHRoKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93UGFuZWxIZWFkZXIocGFuZWw6RGFzaGJvYXJkUGFuZWwpe1xyXG4gICAgICAgIHZhciBoYXNIZWFkZXJDb21wb25lbnRzID0gZmFsc2VcclxuICAgICAgICBmb3IoIGxldCBjb21wb25lbnQgb2YgdGhpcy5wYW5lbC5jb21wb25lbnRzKXtcclxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5wYXJhbWV0ZXJzLmxpbmtUb0hlYWRlcilcclxuICAgICAgICAgICAgICAgIGhhc0hlYWRlckNvbXBvbmVudHMgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiAocGFuZWwucGFyYW1ldGVycy50aXRsZSAhPSBudWxsICYmIHBhbmVsLnBhcmFtZXRlcnMudGl0bGUubGVuZ3RoPjApIHx8IGhhc0hlYWRlckNvbXBvbmVudHNcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdFBhbmVsKCkge1xyXG4gICAgICAgIHZhciBzZWxmPXRoaXM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRoaXMucGFuZWwucGFyYW1ldGVycy50aXRsZTtcclxuICAgICAgICBcclxuICAgICAgICBmb3IoIGxldCBjb21wb25lbnQgb2YgdGhpcy5wYW5lbC5jb21wb25lbnRzKXtcclxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5wYXJhbWV0ZXJzLmxpbmtUb0hlYWRlcilcclxuICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVyQ29tcG9uZW50cy5wdXNoKGNvbXBvbmVudClcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ib2R5Q29tcG9uZW50cy5wdXNoKGNvbXBvbmVudClcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zaG93SGVhZGVyID0gKHRoaXMucGFuZWwucGFyYW1ldGVycy50aXRsZSAhPSBudWxsICYmIHRoaXMucGFuZWwucGFyYW1ldGVycy50aXRsZS5sZW5ndGg+MCkgfHwgKHRoaXMuaGVhZGVyQ29tcG9uZW50cy5sZW5ndGggPiAwKVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBpZiAodGhpcy5wYW5lbC50eXBlPT1cImdyb3VwXCIpe1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wYW5lbC5wYXJhbWV0ZXJzLndpZHRoPT1udWxsIHx8IHRoaXMucGFuZWwucGFyYW1ldGVycy53aWR0aD09XCIwXCIgfHwgdGhpcy5wYW5lbC5wYXJhbWV0ZXJzLndpZHRoPT1cIlwiKVxyXG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IFwiMTAwJVwiXHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSB0aGlzLnRlbXBsYXRlU2VydmljZS5nZXRTaXplVmFsdWUodGhpcy5wYW5lbC5wYXJhbWV0ZXJzLndpZHRoKTtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgLy90aGlzLndpZHRoID0gdGhpcy5pbkdyb3VwID8gXCIxMDAlXCIgOiB0aGlzLnRlbXBsYXRlU2VydmljZS5nZXRTaXplVmFsdWUodGhpcy5wYW5lbC5wYXJhbWV0ZXJzLndpZHRoKTtcclxuICAgICAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMudGVtcGxhdGVTZXJ2aWNlLmdldFNpemVWYWx1ZSh0aGlzLnBhbmVsLnBhcmFtZXRlcnMud2lkdGgpO1xyXG4gICAgfVxyXG4gIH0iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGFzaGJvYXJkU2l6ZXMgfSBmcm9tICdrZXJ2aS1qcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2tlcnZpLWNvbnRyb2xsZXItcGFkLWJhc2UnLFxyXG4gIHRlbXBsYXRlOiAnJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgS2VydmlDb250cm9sbGVyUGFkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBkYXNoYm9hcmRTaXplczogRGFzaGJvYXJkU2l6ZXM7XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIFRpbSBXZW50emxhdVxyXG4vLyBMaWNlbnNlZCB1bmRlciBNSVRcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSUNvbXBvbmVudCwgRGFzaGJvYXJkUGFuZWwsIERhc2hib2FyZFNpemVzLCBDb250cm9sbGVyIH0gZnJvbSAna2VydmktanMnO1xyXG5pbXBvcnQgeyBOR1hLZXJ2aVNlcnZpY2UgfSBmcm9tICcuLi9uZ3gta2Vydmkuc2VydmljZSc7XHJcbmltcG9ydCB7IEFwcEluamVjdG9yIH0gZnJvbSAnLi4vYXBwLWluamVjdG9yLnNlcnZpY2UnO1xyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2tlcnZpLXdpZGdldC1iYXNlJyxcclxuXHR0ZW1wbGF0ZTogJydcclxufSlcclxuZXhwb3J0IGNsYXNzIEtlcnZpV2lkZ2V0Q29tcG9uZW50ICAge1xyXG5cdEBJbnB1dCgpIHNldCBjb21wb25lbnRJZCh2OnN0cmluZyl7XHJcblx0XHR0aGlzLmNvbXBvbmVudCA9IHRoaXMua2VydmlTZXJ2aWNlLmdldENvbXBvbmVudCh0aGlzLmNvbXBvbmVudElkKTtcclxuXHR9XHJcblx0QElucHV0KCkgY29tcG9uZW50OklDb21wb25lbnQgPSBudWxsO1xyXG5cdEBJbnB1dCgpIGRhc2hib2FyZFBhbmVsOiBEYXNoYm9hcmRQYW5lbDtcclxuXHRASW5wdXQoKSBsaW5rUGFyYW1ldGVyczphbnk7XHJcblx0QElucHV0KCkgZGFzaGJvYXJkU2l6ZXM6RGFzaGJvYXJkU2l6ZXMgPSBuZXcgRGFzaGJvYXJkU2l6ZXMoKTtcclxuICAgIEBJbnB1dCgpIGlubGluZTpib29sZWFuO1xyXG5cdHB1YmxpYyB3aWRnZXRUeXBlOnN0cmluZz1cInZhbHVlXCI7XHJcblx0XHJcblx0XHJcblx0cHJpdmF0ZSBrZXJ2aVNlcnZpY2U6IE5HWEtlcnZpU2VydmljZTtcclxuXHRwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XHJcblx0Y29uc3RydWN0b3IoKSB7IFxyXG5cdFx0Ly9jb25zb2xlLmxvZyhcImNuaW9cIix0aGlzKTtcclxuXHRcdHRoaXMua2VydmlTZXJ2aWNlID0gQXBwSW5qZWN0b3IuZ2V0KE5HWEtlcnZpU2VydmljZSk7ICBcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0V2lkZ2V0KCkge1xyXG5cdFx0XHRcclxuXHRcdGlmICghdGhpcy5saW5rUGFyYW1ldGVycylcclxuICAgICAgICAgICAgICB0aGlzLmxpbmtQYXJhbWV0ZXJzID0gdGhpcy5jb21wb25lbnQudWk7XHJcbiAgICBcclxuICAgICAgICBpZiAoIXRoaXMuaW5saW5lICYmIHRoaXMubGlua1BhcmFtZXRlcnMuaW5saW5lKXtcclxuICAgICAgICAgICAgdGhpcy5pbmxpbmUgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Ly9jb25zb2xlLmxvZyhcIndpZGdldFwiLCB0aGlzLmNvbXBvbmVudCwgdGhpcy5saW5rUGFyYW1ldGVycyk7XHJcblx0XHRpZiAodGhpcy5jb21wb25lbnQuY29tcG9uZW50VHlwZSA9PSBcImNvbnRyb2xsZXJcIil7XHJcblx0XHRcdHZhciBjb250cm9sbGVyID0gdGhpcy5jb21wb25lbnQgYXMgQ29udHJvbGxlcjtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJ3aWRnZXQgY3RybFwiLCBjb250cm9sbGVyKTtcclxuXHRcdFx0aWYgKGNvbnRyb2xsZXIudHlwZSA9PSBcImNhbWVyYVwiKVxyXG5cdFx0XHRcdHRoaXMud2lkZ2V0VHlwZSA9IFwiY2FtZXJhXCJcclxuXHRcdFx0XHRcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5saW5rUGFyYW1ldGVycy50eXBlKXtcclxuXHRcdFx0aWYgKHRoaXMubGlua1BhcmFtZXRlcnMudHlwZS5pbmRleE9mKFwiZ2F1Z2VcIikgPiAtMSApe1xyXG5cdFx0XHRcdHRoaXMud2lkZ2V0VHlwZSA9IFwiZ2F1Z2VcIjtcclxuXHJcblx0XHRcdH0gZWxzZSBpZiAodGhpcy5saW5rUGFyYW1ldGVycy50eXBlPT1cImNoYXJ0XCIpe1xyXG5cdFx0XHRcdHRoaXMud2lkZ2V0VHlwZT1cImNoYXJ0XCJcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIFRpbSBXZW50emxhdVxyXG4vLyBMaWNlbnNlZCB1bmRlciBNSVRcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBLZXJ2aVZhbHVlLCBEYXNoYm9hcmRQYW5lbCwgRGFzaGJvYXJkU2l6ZXMgfSBmcm9tICdrZXJ2aS1qcyc7XHJcbmltcG9ydCB7IE5HWEtlcnZpU2VydmljZSB9IGZyb20gJy4uL25neC1rZXJ2aS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBwSW5qZWN0b3IgfSBmcm9tICcuLi9hcHAtaW5qZWN0b3Iuc2VydmljZSc7XHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAna2VydmktdmFsdWUtYmFzZScsXHJcblx0dGVtcGxhdGU6ICcnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBLZXJ2aVZhbHVlQ29tcG9uZW50PFQgZXh0ZW5kcyBLZXJ2aVZhbHVlPiAgIHtcclxuXHRASW5wdXQoKSBzZXQgdmFsdWVJZCh2OnN0cmluZyl7XHJcblx0XHR0aGlzLnZhbHVlID0gdGhpcy5rZXJ2aVNlcnZpY2UuZ2V0Q29tcG9uZW50KHRoaXMudmFsdWVJZCkgYXMgVDtcclxuXHR9XHJcblx0QElucHV0KCkgdmFsdWU6VCA9IG51bGw7XHJcblx0XHJcblx0QElucHV0KCkgbGlua1BhcmFtZXRlcnM6YW55O1xyXG5cdEBJbnB1dCgpIGRhc2hib2FyZFNpemVzOkRhc2hib2FyZFNpemVzID0gbmV3IERhc2hib2FyZFNpemVzKCk7XHJcblx0QElucHV0KCkgaW5saW5lOmJvb2xlYW47XHJcblx0cHJvdGVjdGVkIGtlcnZpU2VydmljZTogTkdYS2VydmlTZXJ2aWNlO1xyXG5cdGNvbnN0cnVjdG9yKCkgeyBcclxuXHRcdHRoaXMua2VydmlTZXJ2aWNlID0gQXBwSW5qZWN0b3IuZ2V0KE5HWEtlcnZpU2VydmljZSk7ICBcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0VmFsdWUoKSB7XHJcblx0XHRpZiAoIXRoaXMubGlua1BhcmFtZXRlcnMpXHJcbiAgICAgIFx0XHR0aGlzLmxpbmtQYXJhbWV0ZXJzID0gdGhpcy52YWx1ZS51aTtcclxuXHR9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCBUaW0gV2VudHpsYXVcclxuLy8gTGljZW5zZWQgdW5kZXIgTUlUXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnVtYmVyVmFsdWUgfSBmcm9tICdrZXJ2aS1qcyc7XHJcbmltcG9ydCB7IEtlcnZpVmFsdWVDb21wb25lbnQgfSBmcm9tICcuL3ZhbHVlLmNvbXBvbmVudCdcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAna2VydmktdmFsdWUtbnVtYmVyLWJhc2UnLFxyXG5cdHRlbXBsYXRlOiAnJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgS2VydmlOdW1iZXJDb21wb25lbnQgZXh0ZW5kcyBLZXJ2aVZhbHVlQ29tcG9uZW50PE51bWJlclZhbHVlPiB7XHJcblx0cHVibGljIG51bWJlckZvcm1hdCA9IFwiMS4yLTJcIjtcclxuXHRwdWJsaWMgZGlzcGxheVZhbHVlOm51bWJlciA9IDA7XHJcblx0cHVibGljIGRpc3BsYXlVbml0OnN0cmluZyA9IFwiXCI7XHJcblx0cHVibGljIGRpc3BsYXlUeXBlOnN0cmluZz1cIlwiO1xyXG5cdHB1YmxpYyBjdXJyZW50SWNvbjpzdHJpbmc9bnVsbDtcclxuXHRcclxuXHRjb25zdHJ1Y3RvcigpeyBcclxuXHRcdHN1cGVyKCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0S2VydmlWYWx1ZSh2YWx1ZSl7XHJcblx0XHR0aGlzLnZhbHVlLnNldCh2YWx1ZSk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdE51bWJlcigpIHtcclxuXHRcdHRoaXMubmdPbkluaXRWYWx1ZSgpO1xyXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0XHJcblx0XHR0aGlzLm51bWJlckZvcm1hdCA9IHRoaXMubGlua1BhcmFtZXRlcnMubWluSW50ZWdlckRpZ2l0cyArIFwiLlwiICsgdGhpcy5saW5rUGFyYW1ldGVycy5taW5GcmFjdGlvbkRpZ2l0cyArIFwiLVwiICsgdGhpcy5saW5rUGFyYW1ldGVycy5tYXhGcmFjdGlvbkRpZ2l0c1xyXG5cdFx0aWYgKCF0aGlzLmxpbmtQYXJhbWV0ZXJzLnZhbHVlSWNvbilcclxuXHRcdFx0dGhpcy5jdXJyZW50SWNvbiA9IG51bGw7XHJcblx0XHRlbHNlIGlmICh0eXBlb2YodGhpcy5saW5rUGFyYW1ldGVycy52YWx1ZUljb24pID09IFwic3RyaW5nXCIgKVxyXG5cdFx0XHR0aGlzLmN1cnJlbnRJY29uID0gdGhpcy5saW5rUGFyYW1ldGVycy52YWx1ZUljb247XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0dGhpcy52YWx1ZS52YWx1ZSQuc3Vic2NyaWJlKGZ1bmN0aW9uKHYpe1xyXG5cdFx0XHRcdGZvcihsZXQgaWNvblNlY3Rpb24gb2Ygc2VsZi5saW5rUGFyYW1ldGVycy52YWx1ZUljb24pe1xyXG5cdFx0XHRcdFx0aWYgKHYgPj0gaWNvblNlY3Rpb24ucmFuZ2VbMF0gJiYgdiA8PSBpY29uU2VjdGlvbi5yYW5nZVsxXSl7XHJcblx0XHRcdFx0XHRcdHNlbGYuY3VycmVudEljb24gPSBpY29uU2VjdGlvbi5pY29uO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHR9XHRcdFxyXG5cclxuXHRcdGlmICghdGhpcy5pbmxpbmUgJiYgdGhpcy5saW5rUGFyYW1ldGVycy5pbmxpbmUpe1xyXG5cdFx0XHR0aGlzLmlubGluZSA9IHRydWU7XHJcblx0XHR9ZWxzZSBpZiAoIXRoaXMuaW5saW5lICYmIHRoaXMubGlua1BhcmFtZXRlcnMuc2l6ZSA+IDApXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuaW5saW5lID0gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCBUaW0gV2VudHpsYXVcclxuLy8gTGljZW5zZWQgdW5kZXIgTUlUXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQm9vbGVhblZhbHVlIH0gZnJvbSAna2VydmktanMnO1xyXG5pbXBvcnQgeyBLZXJ2aVZhbHVlQ29tcG9uZW50IH0gZnJvbSAnLi92YWx1ZS5jb21wb25lbnQnXHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2tlcnZpLXZhbHVlLWJvb2xlYW4tYmFzZScsXHJcblx0dGVtcGxhdGU6ICcnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBLZXJ2aUJvb2xlYW5Db21wb25lbnQgZXh0ZW5kcyBLZXJ2aVZhbHVlQ29tcG9uZW50PEJvb2xlYW5WYWx1ZT4ge1xyXG5cdHB1YmxpYyBkaXNwbGF5VHlwZTpzdHJpbmc9XCJzd2l0Y2hcIjtcclxuXHRcclxuXHRjb25zdHJ1Y3RvcigpeyBcclxuXHRcdHN1cGVyKCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0S2VydmlWYWx1ZSh2YWx1ZSl7XHJcblx0XHR0aGlzLnZhbHVlLnNldCh2YWx1ZSk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdEJvb2xlYW4oKSB7XHJcblx0XHR0aGlzLm5nT25Jbml0VmFsdWUoKTtcclxuXHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdFxyXG5cdFx0aWYgKHRoaXMubGlua1BhcmFtZXRlcnMudHlwZSl7XHJcblx0XHRcdHRoaXMuZGlzcGxheVR5cGUgPSB0aGlzLmxpbmtQYXJhbWV0ZXJzLnR5cGVcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0aWYgKCF0aGlzLmlubGluZSAmJiB0aGlzLmxpbmtQYXJhbWV0ZXJzLmlubGluZSl7XHJcblx0XHRcdHRoaXMuaW5saW5lID0gdHJ1ZTtcclxuXHRcdH0gZWxzZSBpZiAoIXRoaXMuaW5saW5lICYmIHRoaXMubGlua1BhcmFtZXRlcnMuc2l6ZSA+IDApXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuaW5saW5lID0gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCBUaW0gV2VudHpsYXVcclxuLy8gTGljZW5zZWQgdW5kZXIgTUlUXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ2tlcnZpLWpzJztcclxuaW1wb3J0IHsgRGFzaGJvYXJkU2l6ZXMgIH0gZnJvbSAna2VydmktanMnO1xyXG5pbXBvcnQgeyBOR1hLZXJ2aVNlcnZpY2UgfSBmcm9tICcuLi9uZ3gta2Vydmkuc2VydmljZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBBcHBJbmplY3RvciB9IGZyb20gJy4uL2FwcC1pbmplY3Rvci5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAna2VydmktYWN0aW9uLWJhc2UnLFxyXG4gIHRlbXBsYXRlOiAnJyxcclxuICBzdHlsZXM6IFtdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgS2VydmlBY3Rpb25Db21wb25lbnQge1xyXG4gICAgQElucHV0KCkgYWN0aW9uOiBBY3Rpb24gPSBudWxsO1xyXG4gICAgQElucHV0KCkgbGlua1BhcmFtZXRlcnM6IGFueSA9IG51bGw7XHJcbiAgICBASW5wdXQoKSBpbmxpbmU6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgZGFzaGJvYXJkU2l6ZXM6RGFzaGJvYXJkU2l6ZXMgPSBuZXcgRGFzaGJvYXJkU2l6ZXMoKTtcclxuICAgIHB1YmxpYyBzdGF0ZTogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XHJcbiAgICBwcm90ZWN0ZWQga2VydmlTZXJ2aWNlOk5HWEtlcnZpU2VydmljZTtcclxuICAgIFxyXG5cdHB1YmxpYyBkaXNwbGF5VHlwZTpzdHJpbmc9XCJzd2l0Y2hcIjtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoKSB7IFxyXG4gICAgICAgIHRoaXMua2VydmlTZXJ2aWNlID0gQXBwSW5qZWN0b3IuZ2V0KE5HWEtlcnZpU2VydmljZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXRBY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGlmICghdGhpcy5saW5rUGFyYW1ldGVycylcclxuICAgICAgICAgICAgdGhpcy5saW5rUGFyYW1ldGVycyA9IHRoaXMuYWN0aW9uLnVpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5saW5rUGFyYW1ldGVycy50eXBlKXtcclxuICAgICAgICAgICAgdGhpcy5kaXNwbGF5VHlwZSA9IHRoaXMubGlua1BhcmFtZXRlcnMudHlwZVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAoIXRoaXMuaW5saW5lICYmIHRoaXMubGlua1BhcmFtZXRlcnMuaW5saW5lKXtcclxuICAgICAgICAgICAgdGhpcy5pbmxpbmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIHNlbGYuc3RhdGUubmV4dCh0aGlzLmFjdGlvbi5ydW5uaW5nJC52YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5hY3Rpb24ucnVubmluZyQuc3Vic2NyaWJlKGZ1bmN0aW9uKHYpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFyXCIsIHNlbGYuYWN0aW9uLmlkLCB2KVxyXG4gICAgICAgICAgICBzZWxmLnN0YXRlLm5leHQodik7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0QWN0aW9uU3RhdGUodmFsdWUpe1xyXG4gICAgICAgIGlmICh2YWx1ZSlcclxuICAgICAgICAgICAgdGhpcy5hY3Rpb24ucnVuKHRoaXMubGlua1BhcmFtZXRlcnMuYWN0aW9uUGFyYW1ldGVycyk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLmFjdGlvbi5pbnRlcnJ1cHQodGhpcy5saW5rUGFyYW1ldGVycy5pbnRlcnJ1cHRQYXJhbWV0ZXJzKVxyXG4gICAgfVxyXG59IiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCBUaW0gV2VudHpsYXVcclxuLy8gTGljZW5zZWQgdW5kZXIgTUlUXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xsZXIsIE51bWJlclZhbHVlIH0gZnJvbSAna2VydmktanMnO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRTaXplcyAgfSBmcm9tICdrZXJ2aS1qcyc7XHJcbmltcG9ydCB7IE5HWEtlcnZpU2VydmljZSB9IGZyb20gJy4uL25neC1rZXJ2aS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBwSW5qZWN0b3IgfSBmcm9tICcuLi9hcHAtaW5qZWN0b3Iuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2tlcnZpLWNhbWVyYS1iYXNlJyxcclxuICB0ZW1wbGF0ZTogJycsXHJcbiAgc3R5bGVzOiBbXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEtlcnZpQ2FtZXJhQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgY2FtOkNvbnRyb2xsZXI7XHJcbiAgICBASW5wdXQoKSBzZXQgY2FtZXJhSWQoaWQ6IHN0cmluZyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzZXRjYW1pZFwiLCBpZCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5jYW1lcmEgPSB0aGlzLmtlcnZpU2VydmljZS5nZXRDb21wb25lbnQoaWQpIGFzIENvbnRyb2xsZXI7ICAgIFxyXG4gICAgfTtcclxuICAgIEBJbnB1dCgpIHNldCBjYW1lcmEodjpDb250cm9sbGVyKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNldGNhbVwiLCB2KTtcclxuICAgICAgICB0aGlzLmNhbSA9IHY7XHJcbiAgICAgICAgZm9yKHZhciBpIG9mIHYub3V0cHV0cyl7XHJcbiAgICAgICAgaWYgKGkuaWQuZW5kc1dpdGgoXCIucGFuXCIpKVxyXG4gICAgICAgICAgICB0aGlzLnBhbj1pIGFzIE51bWJlclZhbHVlO1xyXG4gICAgICAgIGVsc2UgaWYgKGkuaWQuZW5kc1dpdGgoXCIudGlsdFwiKSlcclxuICAgICAgICAgICAgdGhpcy50aWx0PWkgYXMgTnVtYmVyVmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FtZXJhVHlwZSA9IHYudWkudHlwZTsgXHJcbiAgICAgICAgaWYgKHRoaXMuY2FtZXJhVHlwZSA9PSBcImZyYW1lXCIgKXtcclxuICAgICAgICAgICAgaWYgKHYudWkuc291cmNlKVxyXG4gICAgICAgICAgICAgIHRoaXMuY2FtZXJhU291cmNlID0gdi51aS5zb3VyY2Uuc2VydmVyICsgdi51aS5zb3VyY2UucGF0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9O1xyXG5cclxuICAgIGdldCBjYW1lcmEoKXtyZXR1cm4gdGhpcy5jYW07fVxyXG4gICAgQElucHV0KCkgbGlua1BhcmFtZXRlcnM6IGFueSA9IG51bGw7XHJcbiAgICBASW5wdXQoKSBpbmxpbmU6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgZGFzaGJvYXJkU2l6ZXM6RGFzaGJvYXJkU2l6ZXMgPSBuZXcgRGFzaGJvYXJkU2l6ZXMoKTtcclxuICAgIEBJbnB1dCgpIGlzQmFja2dyb3VuZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIFxyXG4gICAgcHJvdGVjdGVkIGtlcnZpU2VydmljZTpOR1hLZXJ2aVNlcnZpY2U7XHJcbiAgICBwdWJsaWMgcGFuOk51bWJlclZhbHVlO1xyXG4gICAgcHVibGljIHRpbHQ6TnVtYmVyVmFsdWU7XHJcbiAgICBwdWJsaWMgY2FtZXJhVHlwZTpzdHJpbmc7XHJcblx0cHVibGljIGNhbWVyYVNvdXJjZTpzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgXHJcbiAgICAgICAgdGhpcy5rZXJ2aVNlcnZpY2UgPSBBcHBJbmplY3Rvci5nZXQoTkdYS2VydmlTZXJ2aWNlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0UGFuKHYpe1xyXG4gICAgICAgIHRoaXMucGFuLnNldCh2KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0VGlsdCh2KXtcclxuICAgICAgICB0aGlzLnRpbHQuc2V0KHYpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0Q2FtZXJhKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibmdpIGNhbVwiKTtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgaWYgKCF0aGlzLmxpbmtQYXJhbWV0ZXJzKVxyXG4gICAgICAgICAgICAgIHRoaXMubGlua1BhcmFtZXRlcnMgPSB0aGlzLmNhbWVyYS51aTtcclxuICAgIFxyXG4gICAgICAgIGlmICghdGhpcy5pbmxpbmUgJiYgdGhpcy5saW5rUGFyYW1ldGVycy5pbmxpbmUpe1xyXG4gICAgICAgICAgICB0aGlzLmlubGluZSA9IHRydWU7XHJcblx0XHR9XHJcbiAgICB9XHJcbn0iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIFRpbSBXZW50emxhdVxyXG4vLyBMaWNlbnNlZCB1bmRlciBNSVRcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb2xvclZhbHVlIH0gZnJvbSAna2VydmktanMnO1xyXG5pbXBvcnQgeyBLZXJ2aVZhbHVlQ29tcG9uZW50IH0gZnJvbSAnLi92YWx1ZS5jb21wb25lbnQnXHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2tlcnZpLXZhbHVlLWNvbG9yLWJhc2UnLFxyXG5cdHRlbXBsYXRlOiAnJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgS2VydmlDb2xvckNvbXBvbmVudCBleHRlbmRzIEtlcnZpVmFsdWVDb21wb25lbnQ8Q29sb3JWYWx1ZT4ge1xyXG5cdHB1YmxpYyBkaXNwbGF5VHlwZTpzdHJpbmc9XCJidXR0b25cIjtcclxuXHRcclxuXHRjb25zdHJ1Y3RvcigpeyBcclxuXHRcdHN1cGVyKCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0S2VydmlWYWx1ZSh2YWx1ZSl7XHJcblx0XHR0aGlzLnZhbHVlLnNldCh2YWx1ZSk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdENvbG9yKCkge1xyXG5cdFx0dGhpcy5uZ09uSW5pdFZhbHVlKCk7XHJcblx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHRcclxuXHRcdGlmICh0aGlzLmxpbmtQYXJhbWV0ZXJzLnR5cGUpe1xyXG5cdFx0XHR0aGlzLmRpc3BsYXlUeXBlID0gdGhpcy5saW5rUGFyYW1ldGVycy50eXBlXHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGlmICghdGhpcy5pbmxpbmUgJiYgdGhpcy5saW5rUGFyYW1ldGVycy5pbmxpbmUpe1xyXG5cdFx0XHR0aGlzLmlubGluZSA9IHRydWU7XHJcblx0XHR9IGVsc2UgaWYgKCF0aGlzLmlubGluZSAmJiB0aGlzLmxpbmtQYXJhbWV0ZXJzLnNpemUgPiAwKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmlubGluZSA9IHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgVGltIFdlbnR6bGF1XHJcbi8vIExpY2Vuc2VkIHVuZGVyIE1JVFxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERhdGVUaW1lVmFsdWUgfSBmcm9tICdrZXJ2aS1qcyc7XHJcbmltcG9ydCB7IEtlcnZpVmFsdWVDb21wb25lbnQgfSBmcm9tICcuL3ZhbHVlLmNvbXBvbmVudCdcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAna2VydmktdmFsdWUtZGF0ZXRpbWUtYmFzZScsXHJcblx0dGVtcGxhdGU6ICcnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBLZXJ2aURhdGVUaW1lQ29tcG9uZW50IGV4dGVuZHMgS2VydmlWYWx1ZUNvbXBvbmVudDxEYXRlVGltZVZhbHVlPiB7XHJcblx0cHVibGljIGRpc3BsYXlUeXBlOnN0cmluZz1cImRhdGV0aW1lXCI7XHJcblx0cHVibGljIGRhdGVUaW1lRm9ybWF0OnN0cmluZztcclxuXHRjb25zdHJ1Y3RvcigpeyBcclxuXHRcdHN1cGVyKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyBzZXRLZXJ2aVZhbHVlKHZhbHVlKXtcclxuXHRcdHRoaXMudmFsdWUuc2V0KHZhbHVlKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBuZ09uSW5pdERhdGVUaW1lKCkge1xyXG5cdFx0dGhpcy5uZ09uSW5pdFZhbHVlKCk7XHJcblx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHRcclxuXHRcdGlmICh0aGlzLmxpbmtQYXJhbWV0ZXJzLnR5cGUpe1xyXG5cdFx0XHR0aGlzLmRpc3BsYXlUeXBlID0gdGhpcy5saW5rUGFyYW1ldGVycy50eXBlXHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGlmICghdGhpcy5pbmxpbmUgJiYgdGhpcy5saW5rUGFyYW1ldGVycy5pbmxpbmUpe1xyXG5cdFx0XHR0aGlzLmlubGluZSA9IHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHNlbGYubGlua1BhcmFtZXRlcnMudHlwZT09XCJ0aW1lXCIpXHJcbiAgICAgICAgXHR0aGlzLmRhdGVUaW1lRm9ybWF0ID0gdGhpcy5rZXJ2aVNlcnZpY2UuYXBwbGljYXRpb24kLnZhbHVlLmRpc3BsYXkudW5pdF9zeXN0ZW0uZGF0ZXRpbWUudGltZTtcclxuICAgICAgXHRlbHNlIGlmIChzZWxmLmxpbmtQYXJhbWV0ZXJzLnR5cGU9PVwiZGF0ZVwiKVxyXG4gICAgICAgIFx0dGhpcy5kYXRlVGltZUZvcm1hdCA9IHNlbGYua2VydmlTZXJ2aWNlLmFwcGxpY2F0aW9uJC52YWx1ZS5kaXNwbGF5LnVuaXRfc3lzdGVtLmRhdGV0aW1lLmRhdGU7XHJcbiAgICAgIFx0ZWxzZVxyXG4gICAgICAgIFx0dGhpcy5kYXRlVGltZUZvcm1hdCA9IHRoaXMua2VydmlTZXJ2aWNlLmFwcGxpY2F0aW9uJC52YWx1ZS5kaXNwbGF5LnVuaXRfc3lzdGVtLmRhdGV0aW1lLmRhdGV0aW1lO1xyXG4gICAgICBcclxuXHR9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCBUaW0gV2VudHpsYXVcclxuLy8gTGljZW5zZWQgdW5kZXIgTUlUXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3RyaW5nVmFsdWUgfSBmcm9tICdrZXJ2aS1qcyc7XHJcbmltcG9ydCB7IEtlcnZpVmFsdWVDb21wb25lbnQgfSBmcm9tICcuL3ZhbHVlLmNvbXBvbmVudCdcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAna2VydmktdmFsdWUtc3RyaW5nLWJhc2UnLFxyXG5cdHRlbXBsYXRlOiAnJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgS2VydmlTdHJpbmdDb21wb25lbnQgZXh0ZW5kcyBLZXJ2aVZhbHVlQ29tcG9uZW50PFN0cmluZ1ZhbHVlPiB7XHJcblx0cHVibGljIGRpc3BsYXlUeXBlOnN0cmluZz1cIlwiO1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKCl7IFxyXG5cdFx0c3VwZXIoKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXRLZXJ2aVZhbHVlKHZhbHVlKXtcclxuXHRcdHRoaXMudmFsdWUuc2V0KHZhbHVlKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBuZ09uSW5pdFN0cmluZygpIHtcclxuXHRcdHRoaXMubmdPbkluaXRWYWx1ZSgpO1xyXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0XHJcblx0XHRpZiAodGhpcy5saW5rUGFyYW1ldGVycy50eXBlKXtcclxuXHRcdFx0dGhpcy5kaXNwbGF5VHlwZSA9IHRoaXMubGlua1BhcmFtZXRlcnMudHlwZVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRpZiAoIXRoaXMuaW5saW5lICYmIHRoaXMubGlua1BhcmFtZXRlcnMuaW5saW5lKXtcclxuXHRcdFx0dGhpcy5pbmxpbmUgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIFRpbSBXZW50emxhdVxyXG4vLyBMaWNlbnNlZCB1bmRlciBNSVRcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAna2VydmktanMnO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRTaXplcywgRGFzaGJvYXJkTWVzc2FnZU1vZGVsLCBVc2VyTG9nU3RhdGVUeXBlIH0gZnJvbSAna2VydmktanMnO1xyXG5pbXBvcnQgeyBOR1hLZXJ2aVNlcnZpY2UgfSBmcm9tICcuLi9uZ3gta2Vydmkuc2VydmljZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBBcHBJbmplY3RvciB9IGZyb20gJy4uL2FwcC1pbmplY3Rvci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAna2VydmktdXNlci1sb2ctYmFzZScsXHJcbiAgdGVtcGxhdGU6ICcnLFxyXG4gIHN0eWxlczogW10sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgS2VydmlVc2VyTG9nQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIGxvZ0xlbmd0aDpudW1iZXIgPSAxMDtcclxuICAgIEBJbnB1dCgpIGxpbmtQYXJhbWV0ZXJzOiBhbnkgPSBudWxsO1xyXG4gICAgQElucHV0KCkgaW5saW5lOmJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIGRhc2hib2FyZFNpemVzOkRhc2hib2FyZFNpemVzID0gbmV3IERhc2hib2FyZFNpemVzKCk7XHJcbiAgICBwcm90ZWN0ZWQga2VydmlTZXJ2aWNlOk5HWEtlcnZpU2VydmljZTtcclxuICAgIGxhc3RNZXNzYWdlJDogT2JzZXJ2YWJsZTxEYXNoYm9hcmRNZXNzYWdlTW9kZWw+ID0gbnVsbDtcclxuICAgIG1lc3NhZ2VzJDogT2JzZXJ2YWJsZTxEYXNoYm9hcmRNZXNzYWdlTW9kZWxbXT4gPSBudWxsO1xyXG4gICAgbWVzc2FnZUNvdW50JDpPYnNlcnZhYmxlPG51bWJlcj4gPSBudWxsO1xyXG4gICAgbG9nU3RhdGUkOk9ic2VydmFibGU8VXNlckxvZ1N0YXRlVHlwZT4gPSBudWxsO1xyXG4gICAgcHVibGljIG1lc3NhZ2VDb3VudCA9IDA7XHJcbiAgICBwdWJsaWMgVXNlckxvZ1N0YXRlOlVzZXJMb2dTdGF0ZVR5cGUgPSBVc2VyTG9nU3RhdGVUeXBlLm5vcm1hbDtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoKSB7IFxyXG4gICAgICAgIHRoaXMua2VydmlTZXJ2aWNlID0gQXBwSW5qZWN0b3IuZ2V0KE5HWEtlcnZpU2VydmljZSk7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlcyQgPSB0aGlzLmtlcnZpU2VydmljZS5nZXRMb2dNZXNzYWdlcyQoKTtcclxuICAgICAgICB0aGlzLmxhc3RNZXNzYWdlJCA9IHRoaXMua2VydmlTZXJ2aWNlLmdldExhc3RMb2dNZXNzYWdlJCgpO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZUNvdW50JCA9IHRoaXMua2VydmlTZXJ2aWNlLmdldExvZ01lc3NhZ2VDb3VudCQoKTtcclxuICAgICAgICB0aGlzLmxvZ1N0YXRlJCA9IHRoaXMua2VydmlTZXJ2aWNlLmdldExvZ1N0YXRlJCgpO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZUNvdW50JC5zdWJzY3JpYmUoZnVuY3Rpb24odil7XHJcbiAgICAgICAgICB0aGlzLm1lc3NhZ2VDb3VudCA9IHY7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImxjXCIsIHRoaXMubWVzc2FnZUNvdW50KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBuZ09uSW5pdFVzZXJMb2coKSB7XHJcblxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLW5neC1rZXJ2aScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxwPlxyXG4gICAgICBuZ3gta2Vydmkgd29ya3MhXHJcbiAgICA8L3A+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hLZXJ2aUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5neEtlcnZpQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3gta2VydmkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgS2VydmlEYXNoYm9hcmRDb21wb25lbnQgfSBmcm9tICcuL2Rhc2hib2FyZC9rZXJ2aS1kYXNoYm9hcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgc2V0QXBwSW5qZWN0b3IgfSBmcm9tIFwiLi9hcHAtaW5qZWN0b3Iuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBLZXJ2aURhc2hib2FyZFBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9kYXNoYm9hcmQva2VydmktZGFzaGJvYXJkLXBhbmVsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEtlcnZpQ29udHJvbGxlclBhZENvbXBvbmVudCB9IGZyb20gJy4vZGFzaGJvYXJkL2tlcnZpLWNvbnRyb2xsZXItcGFkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5HWEtlcnZpU2VydmljZSB9IGZyb20gJy4vbmd4LWtlcnZpLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBLZXJ2aVRlbXBsYXRlU2VydmljZSB9IGZyb20gJy4vbmd4LWtlcnZpLXRlbXBsYXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBLZXJ2aVZhbHVlQ29tcG9uZW50IH0gZnJvbSAnLi92YWx1ZXMvdmFsdWUuY29tcG9uZW50J1xyXG5pbXBvcnQgeyBLZXJ2aU51bWJlckNvbXBvbmVudCB9IGZyb20gJy4vdmFsdWVzL2tlcnZpLW51bWJlci12YWx1ZS5jb21wb25lbnQnXHJcbmltcG9ydCB7IEtlcnZpU3RyaW5nQ29tcG9uZW50IH0gZnJvbSAnLi92YWx1ZXMva2Vydmktc3RyaW5nLXZhbHVlLmNvbXBvbmVudCdcclxuaW1wb3J0IHsgS2VydmlCb29sZWFuQ29tcG9uZW50IH0gZnJvbSAnLi92YWx1ZXMva2VydmktYm9vbGVhbi12YWx1ZS5jb21wb25lbnQnXHJcbmltcG9ydCB7IEtlcnZpQ29sb3JDb21wb25lbnQgfSBmcm9tICcuL3ZhbHVlcy9rZXJ2aS1jb2xvci12YWx1ZS5jb21wb25lbnQnXHJcbmltcG9ydCB7IEtlcnZpRGF0ZVRpbWVDb21wb25lbnQgfSBmcm9tICcuL3ZhbHVlcy9rZXJ2aS1kYXRldGltZS12YWx1ZS5jb21wb25lbnQnXHJcbmltcG9ydCB7IEtlcnZpQWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9hY3Rpb25zL2tlcnZpLWFjdGlvbi5jb21wb25lbnQnXHJcbmltcG9ydCB7IEtlcnZpQ2FtZXJhQ29tcG9uZW50IH0gZnJvbSAnLi9jYW1lcmEva2VydmktY2FtZXJhLmNvbXBvbmVudCdcclxuaW1wb3J0IHsgS2VydmlXaWRnZXRDb21wb25lbnQgfSBmcm9tICcuL2Rhc2hib2FyZC9rZXJ2aS13aWRnZXQuY29tcG9uZW50J1xyXG5pbXBvcnQgeyBLZXJ2aVVzZXJMb2dDb21wb25lbnQgfSBmcm9tICcuL3VzZXItbG9nL3VzZXItbG9nLmNvbXBvbmVudCdcclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE5neEtlcnZpQ29tcG9uZW50LFxyXG4gICAgS2VydmlEYXNoYm9hcmRDb21wb25lbnQsXHJcbiAgICBLZXJ2aURhc2hib2FyZFBhbmVsQ29tcG9uZW50LFxyXG4gICAgS2VydmlDb250cm9sbGVyUGFkQ29tcG9uZW50LFxyXG4gICAgS2VydmlOdW1iZXJDb21wb25lbnQsXHJcbiAgICBLZXJ2aVN0cmluZ0NvbXBvbmVudCxcclxuICAgIEtlcnZpQm9vbGVhbkNvbXBvbmVudCxcclxuICAgIEtlcnZpQ29sb3JDb21wb25lbnQsXHJcbiAgICBLZXJ2aURhdGVUaW1lQ29tcG9uZW50LFxyXG4gICAgS2VydmlBY3Rpb25Db21wb25lbnQsXHJcbiAgICBLZXJ2aVZhbHVlQ29tcG9uZW50LFxyXG4gICAgS2VydmlXaWRnZXRDb21wb25lbnQsXHJcbiAgICBLZXJ2aUNhbWVyYUNvbXBvbmVudCxcclxuICAgIEtlcnZpVXNlckxvZ0NvbXBvbmVudFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbTkdYS2VydmlTZXJ2aWNlLCBLZXJ2aVRlbXBsYXRlU2VydmljZV0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgTmd4S2VydmlDb21wb25lbnQsXHJcbiAgICBLZXJ2aURhc2hib2FyZENvbXBvbmVudCxcclxuICAgIEtlcnZpRGFzaGJvYXJkUGFuZWxDb21wb25lbnQsXHJcbiAgICBLZXJ2aUNvbnRyb2xsZXJQYWRDb21wb25lbnQsXHJcbiAgICBLZXJ2aU51bWJlckNvbXBvbmVudCxcclxuICAgIEtlcnZpV2lkZ2V0Q29tcG9uZW50LFxyXG4gICAgS2VydmlTdHJpbmdDb21wb25lbnQsXHJcbiAgICBLZXJ2aUJvb2xlYW5Db21wb25lbnQsXHJcbiAgICBLZXJ2aUNvbG9yQ29tcG9uZW50LFxyXG4gICAgS2VydmlEYXRlVGltZUNvbXBvbmVudCxcclxuICAgIEtlcnZpQWN0aW9uQ29tcG9uZW50LFxyXG4gICAgS2VydmlDYW1lcmFDb21wb25lbnQsXHJcbiAgICBLZXJ2aVVzZXJMb2dDb21wb25lbnRcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hLZXJ2aU1vZHVsZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbmplY3RvcjpJbmplY3Rvcil7XHJcbiAgICBzZXRBcHBJbmplY3RvcihpbmplY3Rvcik7XHJcbiAgfVxyXG4gfVxyXG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5HWEtlcnZpU2VydmljZSB9IGZyb20gXCIuLi9uZ3gta2Vydmkuc2VydmljZVwiXHJcbkBQaXBlKHtcclxuICBuYW1lOiAndHJhbnNsYXRlJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUga2VydmlTZXJ2aWNlOiBOR1hLZXJ2aVNlcnZpY2UpIHtcclxuXHJcbiAgfVxyXG4gIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nLCBhcmdzPzogYW55KTogYW55IHtcclxuICAgIHJldHVybiB0aGlzLmtlcnZpU2VydmljZS50ZXh0KHZhbHVlLCB2YWx1ZSk7XHJcbiAgfVxyXG59IiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCBUaW0gV2VudHpsYXVcclxuLy8gTGljZW5zZWQgdW5kZXIgTUlUXHJcblxyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVQaXBlIH0gZnJvbSAnLi90ZXh0UGlwZScgXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gIF0sXHJcbiAgZXhwb3J0czpbXHJcbiAgICBUcmFuc2xhdGVQaXBlXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFsgIFxyXG4gICAgICBcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgVHJhbnNsYXRlUGlwZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5HWEtlcnZpUGlwZXNNb2R1bGUgeyB9XHJcbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fZXh0ZW5kcyIsInRzbGliXzEuX192YWx1ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBSXFDQSxtQ0FBZ0I7SUFEckQ7O0tBR0M7O2dCQUhBLFVBQVU7O0lBR1gsc0JBQUM7Q0FBQSxDQUZvQyxnQkFBZ0I7Ozs7OztBQ0pyRDtJQU1JO1FBRFEsWUFBTyxHQUFRLEVBQUUsQ0FBQztRQUcxQixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7O1FBRXJDLElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQTtLQUNqRjs7Ozs7SUFFTSxpREFBa0I7Ozs7SUFBekIsVUFBMEIsR0FBRztRQUN6QixPQUFPLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0tBQzdCOzs7OztJQUVNLDJDQUFZOzs7O0lBQW5CLFVBQW9CLEtBQUs7UUFDckIsSUFBSSxLQUFLLElBQUUsSUFBSTtZQUNYLE9BQU8sTUFBTSxDQUFBO2FBQ1osSUFBSSxLQUFLLEtBQUcsRUFBRTtZQUNmLE9BQU8sTUFBTSxDQUFBO2FBQ1osSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUM7WUFDbEIsT0FBTyxLQUFLLENBQUM7U0FDaEI7YUFDRyxJQUFJLEtBQUssR0FBQyxDQUFDO1lBQ1AsT0FBTyxLQUFLLEdBQUcsR0FBRyxDQUFDOztZQUVuQixPQUFPLE1BQU0sQ0FBQztLQUN6Qjs7Ozs7O0lBRU8sd0NBQVM7Ozs7O0lBQWpCLFVBQWtCLEtBQUssRUFBRSxhQUFhOztRQUVsQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBQztZQUNmLElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLENBQUMsRUFBQzs7b0JBQ3pCLEVBQUUsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDO2dCQUMxQixPQUFPLEVBQUUsQ0FBQzthQUNYO2lCQUFNLElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBQyxDQUFDLENBQUMsRUFBQzs7b0JBQ2pDLEdBQUcsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDOztvQkFDdkIsRUFBRSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUM7Z0JBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDNUIsT0FBTyxFQUFFLENBQUM7YUFDWDtpQkFBTSxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUMsQ0FBQyxDQUFDLEVBQUM7O29CQUMvQixVQUFVLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFDLEtBQUs7Z0JBQ3hDLE9BQU8sYUFBYSxHQUFHLFVBQVUsQ0FBQzthQUNuQztTQUNGOztZQUNDLE9BQU8sS0FBSyxDQUFDO0tBQ2hCOzs7Ozs7OztJQUVLLGdEQUFpQjs7Ozs7OztJQUF6QixVQUEwQixLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUs7O1lBQ3hDLE1BQU0sR0FBRyxLQUFLLElBQUUsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsUUFBUSxDQUFDLFdBQVc7UUFDekQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTs7Z0JBRXZDLEtBQUssR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFHO2dCQUFFLFNBQVM7YUFBRTtZQUNuQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTs7b0JBQy9DLElBQUksR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDNUIsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtvQkFDNUUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUM1QjthQUNKO1NBQ0o7UUFDRCxPQUFPLElBQUksQ0FBQztLQUNmOzs7O0lBRU0scUNBQU07OztJQUFiOztZQUVRLElBQUksR0FBRyxFQUFFOztZQUNULFFBQVEsR0FBRyxnRUFBZ0U7UUFFL0UsS0FBSyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDcEIsSUFBSSxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFFekUsT0FBTyxJQUFJLENBQUM7S0FDZjs7Ozs7O0lBRU0sdUNBQVE7Ozs7O0lBQWYsVUFBZ0IsU0FBZ0IsRUFBQyxRQUFlOztZQUN4QyxVQUFVLEdBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBQyxRQUFRLEVBQUMsSUFBSSxDQUFDOztRQUU5RCxPQUFPLFVBQVUsQ0FBQztLQUNyQjs7Z0JBL0VKLFVBQVU7Ozs7SUFnRlgsMkJBQUM7Q0FBQTs7Ozs7OztBQ2pGRCxJQUFXLFdBQXFCOzs7OztBQUNoQyxTQUFnQixjQUFjLENBQUMsUUFBa0I7SUFDN0MsSUFBSSxXQUFXLEVBQUU7O1FBRWIsT0FBTyxDQUFDLEtBQUssQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO0tBQ25FO1NBQ0k7UUFDRCxXQUFXLEdBQUcsUUFBUSxDQUFDO0tBQzFCO0NBQ0o7Ozs7OztBQ1ZEO0lBc0NFO1FBN0JRLGdCQUFXLEdBQVEsSUFBSSxDQUFDO1FBQ3RCLGNBQVMsR0FBYSxJQUFJLENBQUM7UUFFM0IsZUFBVSxHQUFlLElBQUksQ0FBQztRQUM5QixtQkFBYyxHQUFrQixJQUFJLENBQUM7UUFDckMsZUFBVSxHQUFXLElBQUksQ0FBQztRQUMxQixhQUFRLEdBQVcsS0FBSyxDQUFDO1FBQ3pCLDBCQUFxQixHQUFTLEtBQUssQ0FBQztRQUNwQyx3QkFBbUIsR0FBVyxLQUFLLENBQUM7UUFDcEMsYUFBUSxHQUFXLElBQUksQ0FBQztRQUN4QixxQkFBZ0IsR0FBTyxJQUFJLENBQUM7UUFFL0Isa0JBQWEsR0FBVyxLQUFLLENBQUM7UUFDN0IsY0FBUyxHQUFXLElBQUksQ0FBQztRQUd2QixnQkFBVyxHQUFXLEtBQUssQ0FBQztRQUM1QixrQkFBYSxHQUFlLElBQUksQ0FBQztRQUNqQyxrQkFBYSxHQUFlLElBQUksQ0FBQztRQUNqQyxzQkFBaUIsR0FBVyxLQUFLLENBQUM7UUFFbEMsaUJBQVksR0FBVyxLQUFLLENBQUM7UUFDN0IsbUJBQWMsR0FBZSxJQUFJLENBQUM7UUFDbEMsbUJBQWMsR0FBZSxJQUFJLENBQUM7UUFDbEMsdUJBQWtCLEdBQVcsS0FBSyxDQUFDO1FBSXJDLGlCQUFZLEdBQVcsS0FBSyxDQUFDO1FBRW5DLElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQzs7WUFDakQsSUFBSSxHQUFHLElBQUk7UUFDZixJQUFJLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLFNBQVM7OztRQUFDOzs7WUFHM0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDeEMsRUFBQyxDQUFBO0tBRUY7Ozs7OztJQUVRLHdDQUFNOzs7OztJQUFoQixVQUFpQixLQUFLO1FBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDM0IsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO0tBQ3pCOzs7Ozs7SUFFUywrQ0FBYTs7Ozs7SUFBdkIsVUFBd0IsV0FBa0I7UUFDeEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLFNBQVMsc0JBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxFQUFhLENBQUM7UUFDdkYsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2pELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNqRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDO1FBQ3RELElBQUksSUFBSSxDQUFDLFNBQVMsRUFBQztZQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDckUsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNqRixJQUFJLENBQUMsbUJBQW1CLEdBQUMsS0FBSyxDQUFDO1lBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7WUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDekIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDMUIsSUFBSSxDQUFDLHFCQUFxQixHQUFDLEtBQUssQ0FBQztZQUNqQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFDO2dCQUNqQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUN4RDtvQkFDRSxJQUFJLENBQUMscUJBQXFCLEdBQUMsSUFBSSxDQUFDO29CQUNoQyxJQUFJLENBQUMsbUJBQW1CLEdBQUMsSUFBSSxDQUFDO29CQUM5QixJQUFJLENBQUMsUUFBUSxHQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDO29CQUN4RSxJQUFJLENBQUMsZ0JBQWdCLEdBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztvQkFDOUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztpQkFDMUQ7YUFDRjtZQUNELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFDO2dCQUNuSyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztnQkFDeEIsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFDO29CQUNqRCxJQUFJLENBQUMsYUFBYSxzQkFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFlLENBQUM7b0JBQ3ZGLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxhQUFhO3dCQUNyRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO2lCQUNqQztnQkFDRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUM7b0JBQ2pELElBQUksQ0FBQyxhQUFhLHNCQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQWUsQ0FBQztvQkFDdkYsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLGFBQWE7d0JBQ3JFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7aUJBQ2pDO2FBQ0Y7WUFFRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBQztnQkFDdkssSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQ3pCLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBQztvQkFDbEQsSUFBSSxDQUFDLGNBQWMsc0JBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBZSxDQUFDO29CQUN6RixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsYUFBYTt3QkFDckUsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztpQkFDbEM7Z0JBQ0QsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFDO29CQUNsRCxJQUFJLENBQUMsY0FBYyxzQkFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFlLENBQUM7b0JBQ3pGLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxhQUFhO3dCQUN0RSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO2lCQUNsQzthQUNGO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDM0Q7S0FDRjs7OztJQUVELGtEQUFnQjs7O0lBQWhCO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDOztZQUNqQyxHQUFPO1FBQ1gsR0FBRyxHQUFHLFFBQVEsQ0FBQztRQUNmLEtBQUssR0FBRyxDQUFDLGlCQUFpQixJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsS0FBSyxJQUFJO2tFQUNEO1lBQ3hELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQzFCLElBQUksR0FBRyxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsRUFBRTtnQkFDekMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2FBQ3pDO2lCQUFNLElBQUksR0FBRyxDQUFDLGVBQWUsQ0FBQyxvQkFBb0IsRUFBRTtnQkFDbkQsR0FBRyxDQUFDLGVBQWUsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO2FBQzVDOzs7U0FHRjthQUFNO1lBQ0wsSUFBSSxDQUFDLFlBQVksR0FBQyxLQUFLLENBQUM7WUFDeEIsSUFBSSxHQUFHLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQ3hCLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2FBQ3hCO2lCQUFNLElBQUksR0FBRyxDQUFDLG1CQUFtQixFQUFFO2dCQUNsQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsQ0FBQzthQUMzQjs7O1NBR0Y7S0FDRjs7Z0JBbElGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUUsRUFBRTtpQkFDYjs7OztJQWdJRCw4QkFBQztDQUFBOzs7Ozs7O0lDekdDO1FBbEJTLFVBQUssR0FBZ0IsSUFBSSxDQUFDO1FBQzFCLFdBQU0sR0FBVyxLQUFLLENBQUM7UUFDdkIsWUFBTyxHQUFXLEtBQUssQ0FBQztRQUN4QixhQUFRLEdBQVcsS0FBSyxDQUFDO1FBRzNCLFVBQUssR0FBVSxFQUFFLENBQUM7UUFDbEIsZUFBVSxHQUFXLEtBQUssQ0FBQztRQUMzQixhQUFRLEdBQVcsS0FBSyxDQUFDO1FBQ3pCLFVBQUssR0FBVSxJQUFJLENBQUM7UUFDcEIsbUJBQWMsR0FBTyxFQUFFLENBQUM7UUFDeEIscUJBQWdCLEdBQVUsRUFBRSxDQUFDO1FBQzdCLHFCQUFnQixHQUFVLEVBQUUsQ0FBQzs7O1FBSTFCLG9CQUFlLEdBQXlCLElBQUksQ0FBQztRQUM3QyxpQkFBWSxHQUFtQixJQUFJLENBQUM7UUFFNUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0tBQ3REOzs7Ozs7SUFFQyxnREFBUzs7Ozs7SUFBVCxVQUFVLEtBQW9CLEVBQUUsT0FBTztRQUNuQyxJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUUsT0FBTyxFQUFDO1lBQ3BCLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLElBQUUsSUFBSSxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxJQUFFLEdBQUc7Z0JBQzNELE9BQU8sTUFBTSxDQUFBOztnQkFFYixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDeEU7O1lBQ0csT0FBTyxPQUFPLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDdkY7Ozs7O0lBRUQsc0RBQWU7Ozs7SUFBZixVQUFnQixLQUFvQjs7O1lBQzVCLG1CQUFtQixHQUFHLEtBQUs7O1lBQy9CLEtBQXNCLElBQUEsS0FBQUMsU0FBQSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQSxnQkFBQSw0QkFBQztnQkFBdkMsSUFBSSxTQUFTLFdBQUE7Z0JBQ2QsSUFBSSxTQUFTLENBQUMsVUFBVSxDQUFDLFlBQVk7b0JBQ2pDLG1CQUFtQixHQUFHLElBQUksQ0FBQTthQUNqQzs7Ozs7Ozs7O1FBRUQsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUMsQ0FBQyxLQUFLLG1CQUFtQixDQUFBO0tBRXBHOzs7O0lBRUQsb0RBQWE7OztJQUFiOztRQUdJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDOztZQUV6QyxLQUFzQixJQUFBLEtBQUFBLFNBQUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUEsZ0JBQUEsNEJBQUM7Z0JBQXZDLElBQUksU0FBUyxXQUFBO2dCQUNkLElBQUksU0FBUyxDQUFDLFVBQVUsQ0FBQyxZQUFZO29CQUNqQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBOztvQkFFckMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7YUFDMUM7Ozs7Ozs7OztRQUVELElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFHckksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksSUFBRSxPQUFPLEVBQUM7WUFDekIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLElBQUUsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssSUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxJQUFFLEVBQUU7Z0JBQ3hHLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFBOztnQkFFbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuRjs7O1lBRUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNuRjs7Z0JBekVKLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsNEJBQTRCO29CQUN0QyxRQUFRLEVBQUUsRUFBRTtpQkFDYjs7Ozs7aUNBRUUsS0FBSzt3QkFDTCxLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsS0FBSzsyQkFDTCxLQUFLOztJQWlFTixtQ0FBQztDQUFBOzs7Ozs7QUNoRkg7SUFTRTtLQUFpQjs7OztJQUVqQiw4Q0FBUTs7O0lBQVI7S0FDQzs7Z0JBVEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLFFBQVEsRUFBRSxFQUFFO2lCQUNiOzs7OztpQ0FFRSxLQUFLOztJQU1SLGtDQUFDO0NBQUE7Ozs7Ozs7SUNXQTtRQVZTLGNBQVMsR0FBYyxJQUFJLENBQUM7UUFHNUIsbUJBQWMsR0FBa0IsSUFBSSxjQUFjLEVBQUUsQ0FBQztRQUV2RCxlQUFVLEdBQVEsT0FBTyxDQUFDOztRQU9oQyxJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7S0FDckQ7SUFoQkQsc0JBQWEsNkNBQVc7Ozs7O1FBQXhCLFVBQXlCLENBQVE7WUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDbEU7OztPQUFBOzs7O0lBZ0JELDZDQUFjOzs7SUFBZDtRQUVDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYztZQUNaLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUM7UUFFOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUM7WUFDM0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDNUI7O1FBRUQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsSUFBSSxZQUFZLEVBQUM7O2dCQUM1QyxVQUFVLHNCQUFHLElBQUksQ0FBQyxTQUFTLEVBQWM7WUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDdkMsSUFBSSxVQUFVLENBQUMsSUFBSSxJQUFJLFFBQVE7Z0JBQzlCLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFBO1NBRTNCO2FBQU0sSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBQztZQUNuQyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDbkQsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUM7YUFFMUI7aUJBQU0sSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksSUFBRSxPQUFPLEVBQUM7Z0JBQzVDLElBQUksQ0FBQyxVQUFVLEdBQUMsT0FBTyxDQUFBO2FBQ3ZCO1NBQ0Q7S0FDRDs7Z0JBOUNELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixRQUFRLEVBQUUsRUFBRTtpQkFDWjs7Ozs7OEJBRUMsS0FBSzs0QkFHTCxLQUFLO2lDQUNMLEtBQUs7aUNBQ0wsS0FBSztpQ0FDTCxLQUFLO3lCQUNGLEtBQUs7O0lBbUNWLDJCQUFDO0NBQUE7Ozs7Ozs7OztBQy9DRDtJQWNDO1FBTlMsVUFBSyxHQUFLLElBQUksQ0FBQztRQUdmLG1CQUFjLEdBQWtCLElBQUksY0FBYyxFQUFFLENBQUM7UUFJN0QsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0tBQ3JEO0lBWEQsc0JBQWEsd0NBQU87Ozs7O1FBQXBCLFVBQXFCLENBQVE7WUFDNUIsSUFBSSxDQUFDLEtBQUssc0JBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFLLENBQUM7U0FDL0Q7OztPQUFBOzs7O0lBV0QsMkNBQWE7OztJQUFiO1FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjO1lBQ2xCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7S0FDMUM7O2dCQXJCRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFLEVBQUU7aUJBQ1o7Ozs7OzBCQUVDLEtBQUs7d0JBR0wsS0FBSztpQ0FFTCxLQUFLO2lDQUNMLEtBQUs7eUJBQ0wsS0FBSzs7SUFVUCwwQkFBQztDQUFBOzs7Ozs7O0lDbEJ5Q0Qsd0NBQWdDO0lBT3pFO1FBQUEsWUFDQyxpQkFBTyxTQUNQO1FBUk0sa0JBQVksR0FBRyxPQUFPLENBQUM7UUFDdkIsa0JBQVksR0FBVSxDQUFDLENBQUM7UUFDeEIsaUJBQVcsR0FBVSxFQUFFLENBQUM7UUFDeEIsaUJBQVcsR0FBUSxFQUFFLENBQUM7UUFDdEIsaUJBQVcsR0FBUSxJQUFJLENBQUM7O0tBSTlCOzs7OztJQUVNLDRDQUFhOzs7O0lBQXBCLFVBQXFCLEtBQUs7UUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDdEI7Ozs7SUFFRCw2Q0FBYzs7O0lBQWQ7UUFDQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7O1lBQ2pCLElBQUksR0FBRyxJQUFJO1FBRWYsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFpQixHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFBO1FBQ3BKLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVM7WUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7YUFDcEIsSUFBSSxRQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLElBQUksUUFBUTtZQUN6RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDO2FBQzdDO1lBQ0osSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUzs7OztZQUFDLFVBQVMsQ0FBQzs7O29CQUNyQyxLQUF1QixJQUFBLEtBQUFDLFNBQUEsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUEsZ0JBQUEsNEJBQUM7d0JBQWpELElBQUksV0FBVyxXQUFBO3dCQUNsQixJQUFJLENBQUMsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFDOzRCQUMxRCxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUM7NEJBQ3BDLE1BQU07eUJBQ047cUJBQ0Q7Ozs7Ozs7OzthQUNELEVBQUMsQ0FBQTtTQUNGO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUM7WUFDOUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDbkI7YUFBSyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksR0FBRyxDQUFDLEVBQ3REO1lBQ0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDbkI7S0FDRDs7Z0JBN0NELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxRQUFRLEVBQUUsRUFBRTtpQkFDWjs7OztJQTJDRCwyQkFBQztDQUFBLENBMUN5QyxtQkFBbUI7Ozs7Ozs7SUNBbEJELHlDQUFpQztJQUczRTtRQUFBLFlBQ0MsaUJBQU8sU0FDUDtRQUpNLGlCQUFXLEdBQVEsUUFBUSxDQUFDOztLQUlsQzs7Ozs7SUFFTSw2Q0FBYTs7OztJQUFwQixVQUFxQixLQUFLO1FBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3RCOzs7O0lBRUQsK0NBQWU7OztJQUFmO1FBQ0MsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBR3JCLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUM7WUFDNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQTtTQUMzQztRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFDO1lBQzlDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ25CO2FBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUN2RDtZQUNDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ25CO0tBQ0Q7O2dCQTdCRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsUUFBUSxFQUFFLEVBQUU7aUJBQ1o7Ozs7SUEyQkQsNEJBQUM7Q0FBQSxDQTFCMEMsbUJBQW1COzs7Ozs7O0lDYzFEO1FBVFMsV0FBTSxHQUFXLElBQUksQ0FBQztRQUN0QixtQkFBYyxHQUFRLElBQUksQ0FBQztRQUMzQixXQUFNLEdBQVcsS0FBSyxDQUFDO1FBQ3ZCLG1CQUFjLEdBQWtCLElBQUksY0FBYyxFQUFFLENBQUM7UUFDdkQsVUFBSyxHQUE2QixJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUd6RSxnQkFBVyxHQUFRLFFBQVEsQ0FBQztRQUc1QixJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7S0FDeEQ7Ozs7SUFFRCw2Q0FBYzs7O0lBQWQ7O1lBQ1EsSUFBSSxHQUFHLElBQUk7UUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWM7WUFDcEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUV6QyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFDO1lBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUE7U0FDOUM7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBQztZQUMzQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUN0QjtRQUVELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFTLENBQUM7WUFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUE7WUFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdEIsRUFBQyxDQUFBO0tBQ0w7Ozs7O0lBRU0sNkNBQWM7Ozs7SUFBckIsVUFBc0IsS0FBSztRQUN2QixJQUFJLEtBQUs7WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUM7O1lBRXRELElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtLQUNyRTs7Z0JBNUNKLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixRQUFRLEVBQUUsRUFBRTtvQkFDWixNQUFNLEVBQUUsRUFBRTtpQkFDWDs7Ozs7eUJBRUksS0FBSztpQ0FDTCxLQUFLO3lCQUNMLEtBQUs7aUNBQ0wsS0FBSzs7SUFvQ1YsMkJBQUM7Q0FBQTs7Ozs7OztJQ05HO1FBVlMsbUJBQWMsR0FBUSxJQUFJLENBQUM7UUFDM0IsV0FBTSxHQUFXLEtBQUssQ0FBQztRQUN2QixtQkFBYyxHQUFrQixJQUFJLGNBQWMsRUFBRSxDQUFDO1FBQ3JELGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBUW5DLElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztLQUN4RDtJQW5DRCxzQkFBYSwwQ0FBUTs7Ozs7UUFBckIsVUFBc0IsRUFBVTtZQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUU1QixJQUFJLENBQUMsTUFBTSxzQkFBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsRUFBYyxDQUFDO1NBQ2xFOzs7T0FBQTtJQUNELHNCQUFhLHdDQUFNOzs7O1FBaUJuQixjQUFhLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFDOzs7OztRQWpCOUIsVUFBb0IsQ0FBWTs7WUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7O2dCQUNiLEtBQWEsSUFBQSxLQUFBQyxTQUFBLENBQUMsQ0FBQyxPQUFPLENBQUEsZ0JBQUEsNEJBQUM7b0JBQW5CLElBQUksQ0FBQyxXQUFBO29CQUNULElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO3dCQUNyQixJQUFJLENBQUMsR0FBRyxzQkFBQyxDQUFDLEVBQWUsQ0FBQzt5QkFDekIsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7d0JBQzNCLElBQUksQ0FBQyxJQUFJLHNCQUFDLENBQUMsRUFBZSxDQUFDO2lCQUM5Qjs7Ozs7Ozs7O1lBQ0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztZQUM1QixJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksT0FBTyxFQUFFO2dCQUM1QixJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTTtvQkFDYixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7YUFDL0Q7U0FFSjs7O09BQUE7Ozs7O0lBaUJNLHFDQUFNOzs7O0lBQWIsVUFBYyxDQUFDO1FBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDbkI7Ozs7O0lBRU0sc0NBQU87Ozs7SUFBZCxVQUFlLENBQUM7UUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNwQjs7OztJQUVELDZDQUFjOzs7SUFBZDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjO1lBQ2xCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFFM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUM7WUFDM0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDNUI7S0FDRTs7Z0JBN0RKLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixRQUFRLEVBQUUsRUFBRTtvQkFDWixNQUFNLEVBQUUsRUFBRTtpQkFDWDs7Ozs7MkJBR0ksS0FBSzt5QkFLTCxLQUFLO2lDQWtCTCxLQUFLO3lCQUNMLEtBQUs7aUNBQ0wsS0FBSzsrQkFDTCxLQUFLOztJQTZCViwyQkFBQztDQUFBOzs7Ozs7O0lDNUR3Q0QsdUNBQStCO0lBR3ZFO1FBQUEsWUFDQyxpQkFBTyxTQUNQO1FBSk0saUJBQVcsR0FBUSxRQUFRLENBQUM7O0tBSWxDOzs7OztJQUVNLDJDQUFhOzs7O0lBQXBCLFVBQXFCLEtBQUs7UUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDdEI7Ozs7SUFFRCwyQ0FBYTs7O0lBQWI7UUFDQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFHckIsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBQztZQUM1QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFBO1NBQzNDO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUM7WUFDOUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDbkI7YUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksR0FBRyxDQUFDLEVBQ3ZEO1lBQ0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDbkI7S0FDRDs7Z0JBN0JELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxRQUFRLEVBQUUsRUFBRTtpQkFDWjs7OztJQTJCRCwwQkFBQztDQUFBLENBMUJ3QyxtQkFBbUI7Ozs7Ozs7SUNBaEJBLDBDQUFrQztJQUc3RTtRQUFBLFlBQ0MsaUJBQU8sU0FDUDtRQUpNLGlCQUFXLEdBQVEsVUFBVSxDQUFDOztLQUlwQzs7Ozs7SUFJTSw4Q0FBYTs7OztJQUFwQixVQUFxQixLQUFLO1FBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3RCOzs7O0lBRU0saURBQWdCOzs7SUFBdkI7UUFDQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7O1lBQ2pCLElBQUksR0FBRyxJQUFJO1FBRWYsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBQztZQUM1QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFBO1NBQzNDO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUM7WUFDOUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDbkI7UUFFRCxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxJQUFFLE1BQU07WUFDN0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO2FBQzFGLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLElBQUUsTUFBTTtZQUN2QyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7O1lBRTdGLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztLQUV4Rzs7Z0JBcENELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxRQUFRLEVBQUUsRUFBRTtpQkFDWjs7OztJQWtDRCw2QkFBQztDQUFBLENBakMyQyxtQkFBbUI7Ozs7Ozs7SUNBckJBLHdDQUFnQztJQUd6RTtRQUFBLFlBQ0MsaUJBQU8sU0FDUDtRQUpNLGlCQUFXLEdBQVEsRUFBRSxDQUFDOztLQUk1Qjs7Ozs7SUFFTSw0Q0FBYTs7OztJQUFwQixVQUFxQixLQUFLO1FBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3RCOzs7O0lBRU0sNkNBQWM7OztJQUFyQjtRQUNDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUdyQixJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFDO1lBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUE7U0FDM0M7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBQztZQUM5QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUNuQjtLQUNEOztnQkExQkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLFFBQVEsRUFBRSxFQUFFO2lCQUNaOzs7O0lBd0JELDJCQUFDO0NBQUEsQ0F2QnlDLG1CQUFtQjs7Ozs7OztJQ21CekQ7UUFaUyxjQUFTLEdBQVUsRUFBRSxDQUFDO1FBQ3RCLG1CQUFjLEdBQVEsSUFBSSxDQUFDO1FBQzNCLFdBQU0sR0FBVyxLQUFLLENBQUM7UUFDdkIsbUJBQWMsR0FBa0IsSUFBSSxjQUFjLEVBQUUsQ0FBQztRQUU5RCxpQkFBWSxHQUFzQyxJQUFJLENBQUM7UUFDdkQsY0FBUyxHQUF3QyxJQUFJLENBQUM7UUFDdEQsa0JBQWEsR0FBc0IsSUFBSSxDQUFDO1FBQ3hDLGNBQVMsR0FBZ0MsSUFBSSxDQUFDO1FBQ3ZDLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGlCQUFZLEdBQW9CLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztRQUczRCxJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3JELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzNELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzdELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNsRCxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFTLENBQUM7WUFDckMsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7WUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3RDLEVBQUMsQ0FBQTtLQUNMOzs7OztJQUVTLCtDQUFlOzs7O0lBQXpCO0tBRUM7O2dCQWpDSixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsUUFBUSxFQUFFLEVBQUU7b0JBQ1osTUFBTSxFQUFFLEVBQUU7aUJBQ1g7Ozs7OzRCQUdJLEtBQUs7aUNBQ0wsS0FBSzt5QkFDTCxLQUFLO2lDQUNMLEtBQUs7O0lBd0JWLDRCQUFDO0NBQUE7Ozs7OztBQzdDRDtJQWFFO0tBQWlCOzs7O0lBRWpCLG9DQUFROzs7SUFBUjtLQUNDOztnQkFkRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSxpREFJVDtvQkFDRCxNQUFNLEVBQUUsRUFBRTtpQkFDWDs7OztJQVFELHdCQUFDO0NBQUE7Ozs7OztBQ2xCRDtJQXVERSx3QkFBb0IsUUFBaUI7UUFBakIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNuQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDMUI7O2dCQXZDRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLEVBQ1I7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLGlCQUFpQjt3QkFDakIsdUJBQXVCO3dCQUN2Qiw0QkFBNEI7d0JBQzVCLDJCQUEyQjt3QkFDM0Isb0JBQW9CO3dCQUNwQixvQkFBb0I7d0JBQ3BCLHFCQUFxQjt3QkFDckIsbUJBQW1CO3dCQUNuQixzQkFBc0I7d0JBQ3RCLG9CQUFvQjt3QkFDcEIsbUJBQW1CO3dCQUNuQixvQkFBb0I7d0JBQ3BCLG9CQUFvQjt3QkFDcEIscUJBQXFCO3FCQUN0QjtvQkFDRCxTQUFTLEVBQUUsQ0FBQyxlQUFlLEVBQUUsb0JBQW9CLENBQUM7b0JBQ2xELE9BQU8sRUFBRTt3QkFDUCxpQkFBaUI7d0JBQ2pCLHVCQUF1Qjt3QkFDdkIsNEJBQTRCO3dCQUM1QiwyQkFBMkI7d0JBQzNCLG9CQUFvQjt3QkFDcEIsb0JBQW9CO3dCQUNwQixvQkFBb0I7d0JBQ3BCLHFCQUFxQjt3QkFDckIsbUJBQW1CO3dCQUNuQixzQkFBc0I7d0JBQ3RCLG9CQUFvQjt3QkFDcEIsb0JBQW9CO3dCQUNwQixxQkFBcUI7cUJBQ3RCO2lCQUNGOzs7O2dCQXJEa0IsUUFBUTs7SUEwRDFCLHFCQUFDO0NBQUE7Ozs7OztBQzFERjtJQU1FLHVCQUFvQixZQUE2QjtRQUE3QixpQkFBWSxHQUFaLFlBQVksQ0FBaUI7S0FFaEQ7Ozs7OztJQUNELGlDQUFTOzs7OztJQUFULFVBQVUsS0FBYSxFQUFFLElBQVU7UUFDakMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDN0M7O2dCQVRGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsV0FBVztpQkFDbEI7Ozs7Z0JBSFEsZUFBZTs7SUFXeEIsb0JBQUM7Q0FBQTs7Ozs7OztJQ1BEO0tBYW9DOztnQkFibkMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxFQUNSO29CQUNELE9BQU8sRUFBQzt3QkFDTixhQUFhO3FCQUNkO29CQUNELFNBQVMsRUFBRSxFQUVWO29CQUNELFlBQVksRUFBRTt3QkFDWixhQUFhO3FCQUNkO2lCQUNGOztJQUNrQywwQkFBQztDQUFBOzs7Ozs7Ozs7Ozs7OzsifQ==

/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy93ZWJBcHAvc3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet>\r\n              \r\n</router-outlet>\r\n<kervi-user-messages></kervi-user-messages>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_kervi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-kervi */ "../../dist/ngx-kervi/fesm5/ngx-kervi.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
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
    function AppComponent(kerviService, router, route) {
        this.kerviService = kerviService;
        this.router = router;
        this.route = route;
        this.currentPage = null;
        var self = this;
    }
    AppComponent.prototype.ngOnInit = function () {
        var self = this;
        this.kerviService.connectionState$.subscribe(function (connectedState) {
            console.log("connected service state", connectedState, self);
            if (connectedState == ngx_kervi__WEBPACK_IMPORTED_MODULE_1__["ConnectionState"].disconnected) {
                self.router.navigate(['/connect']);
            }
            if (connectedState == ngx_kervi__WEBPACK_IMPORTED_MODULE_1__["ConnectionState"].loading) {
            }
            if (connectedState == ngx_kervi__WEBPACK_IMPORTED_MODULE_1__["ConnectionState"].authenticate) {
                self.router.navigate(['/authenticate']);
            }
            if (connectedState == ngx_kervi__WEBPACK_IMPORTED_MODULE_1__["ConnectionState"].connected) {
                if (self.currentPage)
                    self.router.navigate([self.currentPage]);
                else {
                    var defaultDashboard = self.kerviService.getDefaultDashboard();
                    self.router.navigate(['/' + defaultDashboard.componentType + '/' + defaultDashboard.id]);
                }
            }
        });
        setTimeout(function () {
            self.kerviService.connect();
        }, 0);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_kervi__WEBPACK_IMPORTED_MODULE_1__["NGXKerviService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "../../node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ "../../node_modules/@ant-design/icons-angular/fesm5/ant-design-icons-angular-icons.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/locales/en */ "../../node_modules/@angular/common/locales/en.js");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _connect_connect_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./connect/connect.component */ "./src/app/connect/connect.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var ngx_kervi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-kervi */ "../../dist/ngx-kervi/fesm5/ngx-kervi.js");
/* harmony import */ var kervi_zorro__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! kervi-zorro */ "../../dist/kervi-zorro/fesm5/kervi-zorro.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout */ "../../node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_7___default.a);
var antDesignIcons = _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_5__;
var icons = Object.keys(antDesignIcons).map(function (key) { return antDesignIcons[key]; });
var ROUTES = [
    { path: 'connect', component: _connect_connect_component__WEBPACK_IMPORTED_MODULE_10__["ConnectComponent"] },
    { path: 'authenticate', component: _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
    { path: 'dashboard/:name', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"] },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _connect_connect_component__WEBPACK_IMPORTED_MODULE_10__["ConnectComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                ngx_kervi__WEBPACK_IMPORTED_MODULE_13__["NgxKerviModule"],
                ngx_kervi__WEBPACK_IMPORTED_MODULE_13__["NGXKerviPipesModule"],
                kervi_zorro__WEBPACK_IMPORTED_MODULE_14__["KerviZorroModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__["FlexLayoutModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NgZorroAntdModule"],
                //NgxKerviComponentsModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forRoot(ROUTES)
            ],
            providers: [
                { provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NZ_I18N"], useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["en_US"] },
                { provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NZ_ICONS"], useValue: icons }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/connect/connect.component.css":
/*!***********************************************!*\
  !*** ./src/app/connect/connect.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy93ZWJBcHAvc3JjL2FwcC9jb25uZWN0L2Nvbm5lY3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/connect/connect.component.html":
/*!************************************************!*\
  !*** ./src/app/connect/connect.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout>\r\n    <nz-content class=\"kervi-app-initializing\">\r\n      <div nz-row>\r\n        <div nz-col nzSpan=\"12\" nzOffset=\"9\">\r\n          <nz-steps [nzCurrent]=\"current\" nzDirection=\"vertical\">\r\n            <nz-step nzTitle=\"Initializing\" nzDescription=\"&nbsp;\" nzIcon=\"setting\" ></nz-step>\r\n            <nz-step nzTitle=\"Connecting\" nzDescription=\"&nbsp;\" nzIcon=\"wifi\"></nz-step>\r\n            <nz-step nzTitle=\"Loading dashboards\" nzDescription=\"&nbsp;\" nzIcon=\"download\"></nz-step>\r\n          </nz-steps>\r\n        </div>\r\n      </div>\r\n    </nz-content>\r\n</nz-layout>\r\n"

/***/ }),

/***/ "./src/app/connect/connect.component.ts":
/*!**********************************************!*\
  !*** ./src/app/connect/connect.component.ts ***!
  \**********************************************/
/*! exports provided: ConnectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectComponent", function() { return ConnectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_kervi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-kervi */ "../../dist/ngx-kervi/fesm5/ngx-kervi.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConnectComponent = /** @class */ (function () {
    function ConnectComponent(kerviService) {
        this.kerviService = kerviService;
        this.current = 1;
    }
    ConnectComponent.prototype.ngOnInit = function () {
        var self = this;
        this.kerviService.connectionState$.subscribe(function (connectedState) {
            console.log("connected service state", connectedState, self);
            if (connectedState == ngx_kervi__WEBPACK_IMPORTED_MODULE_1__["ConnectionState"].disconnected) {
                self.current = 1;
            }
            if (connectedState == ngx_kervi__WEBPACK_IMPORTED_MODULE_1__["ConnectionState"].loading) {
                self.current = 2;
            }
        });
    };
    ConnectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-connect',
            template: __webpack_require__(/*! ./connect.component.html */ "./src/app/connect/connect.component.html"),
            styles: [__webpack_require__(/*! ./connect.component.css */ "./src/app/connect/connect.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_kervi__WEBPACK_IMPORTED_MODULE_1__["NGXKerviService"]])
    ], ConnectComponent);
    return ConnectComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dashboard-panels-hidden{\r\n    display: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dlYkFwcC9zcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoicHJvamVjdHMvd2ViQXBwL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhc2hib2FyZC1wYW5lbHMtaGlkZGVue1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout *ngIf=\"dashboard\">\r\n\t<nz-header *ngIf='!isAppEmpty'>\r\n\t\t<div nz-row>\r\n\t\t\t<div nz-col nzSpan=\"6\">\t\t\r\n\t\t\t\t<ul nz-menu  nzMode=\"horizontal\" class=\"kervi-main-menu\">\r\n\t\t\t\t\t<li nz-submenu  *ngIf=\"showMenu\">\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<span title><i nz-icon nzTheme=\"twotone\" type=\"dashboard\" [nzTwotoneColor]=\"'#9fd037'\"></i> {{dashboard.name}}</span>\r\n\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t<ng-container *ngIf=\"dashboards.length > 1\">\r\n\t\t\t\t\t\t\t\t<li nz-menu-item *ngFor=\"let dashboard of dashboards\" [routerLink]=\"['/dashboard', dashboard.id]\">{{dashboard.name}}</li>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t<li *ngIf=\"authenticated && dashboards.length > 1\">\r\n\t\t\t\t\t\t\t\t<nz-divider></nz-divider>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li nz-menu-item *ngIf=\"authenticated && anonymous\" href=\"javascript: return false;\" (click)=\"logoff($event)\" ><i nz-icon type=\"login\"></i> {{('login' | translate)}}</li>\r\n\t\t\t\t\t\t\t<li nz-menu-item *ngIf=\"authenticated && !anonymous\" href=\"javascript: return false;\" (click)=\"logoff($event)\"><i nz-icon type=\"logout\"></i>{{('logout' | translate)}}</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li nz-menu-item *ngIf=\"showPanelController\">\r\n\t\t\t\t\t\t<a  (click)=\"dashboardPanelsHidden = !dashboardPanelsHidden;\">\r\n\t\t\t\t\t\t\t<i nz-icon type=\"sliders\" nzTheme=\"twotone\" [nzTwotoneColor]=\"'#9fd037'\"></i>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"kervi-sys-panel\" *ngIf=\"dashboard && dashboard.sysPanel\" nz-col nzSpan=\"18\">\r\n\t\t\t\t<kervi-dashboard-panel [dashboardSizes]=\"dashboardSizes\" [inline]=\"true\" [panel]=\"dashboard.sysPanel\" ></kervi-dashboard-panel>\r\n\t\t\t\t<kervi-message-button></kervi-message-button>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t</div>\r\n\t</nz-header>\r\n\t\t\r\n\t<nz-content>\r\n\r\n\t\t<ng-container *ngIf=\"isAppEmpty\">\r\n\t\t\t<div nz-row>\r\n\t\t\t\t<div nz-col nzSpan=\"12\" nzOffset=\"6\">\r\n\t\t\t\t\t<nz-alert\r\n\t\t\t\t\t\tnzType=\"error\"\r\n\t\t\t\t\t\t[nzMessage] =\"'hello_world' | translate\"\r\n\t\t\t\t\t\t[nzDescription]=\" 'empty_app' | translate\"\r\n\t\t\t\t\t\tnzShowIcon\t\r\n\t\t\t\t\t  >\r\n\t\t\t\t\t  </nz-alert>\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t\t<kervi-cam-viewer *ngIf=\"cameraId\" [isBackground]=\"true\" [cameraId]=\"cameraId\" [linkParameters]=\"cameraParameters\"></kervi-cam-viewer>\r\n\t\t<div #leftPad class=\"kervi-controller-pad\" *ngIf=\"showLeftPad\" [style.left.px]=\"leftPadLeft\" [style.top.px]=\"leftPadTop\" >\r\n\t\t\t<kervi-controller-pad [autoCenter]=\"autoCenterLeftPad\" [XValue]=\"leftPadXValue\" [YValue]=\"leftPadYValue\"></kervi-controller-pad>\r\n\t\t</div>\r\n\t\t<div #rightPad class=\"kervi-controller-pad\" *ngIf=\"showRightPad\" [style.left.px]=\"rightPadLeft\" [style.top.px]=\"rightPadTop\" >\r\n\t\t\t<kervi-controller-pad [autoCenter]=\"autoCenterRightPad\" [XValue]=\"rightPadXValue\" [YValue]=\"rightPadYValue\"></kervi-controller-pad>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"kervi-panels\" fxLayout=\" column\" fxLayout.xs=\"column\" fxLayoutGap=\"0.5%\" fxLayoutAlign=\"\"  *ngIf=\"!dashboardPanelsHidden\" style=\"\">\r\n\t\t\t<ng-container *ngFor=\"let panel of dashboard.panels\">\r\n\t\t\t\t\t<kervi-dashboard-panel [fxFlex]=\"panel.parameters.width\" fxFlex.xs=\"100%\" [dashboardSizes]=\"defaultSizes\" [panel]=\"panel\"></kervi-dashboard-panel>\r\n\t\t\t\t\r\n\t\t\t</ng-container>\r\n\t\t</div>\r\n\t</nz-content>\r\n\t<nz-footer *ngIf='!isAppEmpty'>\r\n\t\t<div nz-col nzSpan=\"8\" style=\"text-align: left\">\r\n\t\t\t<kervi-dashboard-panel [inline]=\"true\" *ngIf=\"dashboard.footerLeftPanel\" [dashboardSizes]=\"defaultSizes\" [panel]=\"dashboard.footerLeftPanel\"></kervi-dashboard-panel>\r\n\t\t</div>\r\n\t\t<div nz-col nzSpan=\"8\" style=\"text-align:center\">\r\n\t\t\t<kervi-dashboard-panel [inline]=\"true\" *ngIf=\"dashboard.footerCenterPanel\" [dashboardSizes]=\"defaultSizes\" [panel]=\"dashboard.footerCenterPanel\"></kervi-dashboard-panel>\r\n\t\t</div>\r\n\t\t<div nz-col nzSpan=\"8\"  style=\"text-align: right\">\r\n\t\t\t<kervi-dashboard-panel [inline]=\"true\" *ngIf=\"dashboard.footerRightPanel\" [dashboardSizes]=\"defaultSizes\" [panel]=\"dashboard.footerRightPanel\"></kervi-dashboard-panel>\r\n\t\t\t<button nz-button nzShape=\"round\" (mousedown)=\"toggleFullScreen()\"><i nz-icon [nzType]=\"inFullScreen ? 'fullscreen' : 'fullscreen-exit'\" title=\"{{( 'toggle_screen' | translate)}}\"></i></button>\r\n\t\t</div>\r\n\t</nz-footer>\r\n</nz-layout>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_kervi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-kervi */ "../../dist/ngx-kervi/fesm5/ngx-kervi.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function (_super) {
    __extends(DashboardComponent, _super);
    function DashboardComponent(router, activatedRoute) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.activatedRoute = activatedRoute;
        _this.padSize = 180;
        return _this;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        this.activatedRoute.params.subscribe(function (params) {
            var dashboardId = params['name'];
            console.log("dbi", dashboardId);
            _this.loadDashboard(dashboardId);
            console.log("rid", dashboardId);
            setTimeout(function () {
                var h = window.innerHeight;
                var w = window.innerWidth;
                self.leftPadTop = h / 2 - self.padSize / 2;
                self.leftPadLeft = w / 4 - self.padSize / 2;
                self.rightPadTop = h / 2 - self.padSize / 2;
                self.rightPadLeft = w - w / 4 - self.padSize / 2;
            }, 0);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("leftPad"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DashboardComponent.prototype, "leftPad", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("rightPad"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DashboardComponent.prototype, "rightPad", void 0);
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], DashboardComponent);
    return DashboardComponent;
}(ngx_kervi__WEBPACK_IMPORTED_MODULE_2__["KerviDashboardComponent"]));



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy93ZWJBcHAvc3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout>\r\n  <nz-content class=\"kervi-app-initializing\">\r\n    <div nz-row>\r\n      <div nz-col nzSpan=\"12\" nzOffset=\"6\">\r\n        <form nz-form \r\n          [formGroup]=\"loginForm\" \r\n          (ngSubmit)=\"submitForm()\"\r\n        >\r\n            <nz-form-item>\r\n              <nz-form-control>\r\n                <nz-input-group [nzPrefix]=\"prefixUser\">\r\n                  <input formControlName=\"userName\" nz-input placeholder=\"Username\" />\r\n                </nz-input-group>\r\n                <nz-form-explain *ngIf=\"loginForm.get('userName')?.dirty && loginForm.get('userName')?.errors\"\r\n                  >Please input your username!</nz-form-explain\r\n                >\r\n              </nz-form-control>\r\n            </nz-form-item>\r\n            <nz-form-item>\r\n              <nz-form-control>\r\n                <nz-input-group [nzPrefix]=\"prefixLock\">\r\n                  <input formControlName=\"password\" nz-input type=\"password\" placeholder=\"Password\" />\r\n                </nz-input-group>\r\n                <nz-form-explain *ngIf=\"loginForm.get('password')?.dirty && loginForm.get('password')?.errors\"\r\n                  >Please input your Password!</nz-form-explain\r\n                >\r\n              </nz-form-control>\r\n            </nz-form-item>\r\n            <nz-form-item>\r\n              <nz-form-control>\r\n                <button nz-button nzType=\"primary\" [disabled]=\"!loginForm.valid\">Log in</button>\r\n                <nz-form-explain *ngIf=\"invalidCredentials\"\r\n                  >Invalid user name or password</nz-form-explain\r\n                >\r\n              </nz-form-control>\r\n            </nz-form-item>\r\n          </form>\r\n          <ng-template #prefixUser><i nz-icon type=\"user\"></i></ng-template>\r\n          <ng-template #prefixLock><i nz-icon type=\"lock\"></i></ng-template>\r\n      </div>\r\n    </div>\r\n  </nz-content>\r\n</nz-layout>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_kervi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-kervi */ "../../dist/ngx-kervi/fesm5/ngx-kervi.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, kerviService) {
        this.kerviService = kerviService;
        this.invalidCredentials = false;
        var self = this;
        this.loginForm = fb.group({
            'userName': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'password': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.userName = this.loginForm.controls['userName'];
        this.password = this.loginForm.controls['password'];
    }
    LoginComponent.prototype.submitForm = function () {
        var self = this;
        if (this.loginForm.valid) {
            console.log("fv");
            this.kerviService.authenticate(this.userName.value, this.password.value)
                .then(function () {
                console.log("login ok");
            }).catch(function () {
                console.log("login error");
                self.invalidCredentials = true;
            });
        }
        else {
            console.log("fve");
            //   // for (const i in this.loginForm.controls) {
            //   //   this.loginForm.controls[i].markAsDirty();
            //   //   this.loginForm.controls[i].updateValueAndValidity();
            //   // }
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], ngx_kervi__WEBPACK_IMPORTED_MODULE_2__["NGXKerviService"]])
    ], LoginComponent);
    return LoginComponent;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
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

module.exports = __webpack_require__(/*! D:\dev\kervi\kervi\kervi-ui\kervi\ui\web\projects\webApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map