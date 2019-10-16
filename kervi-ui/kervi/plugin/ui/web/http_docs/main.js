(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../dist/kervi-js/fesm5/kervi-js.js":
/*!****************************************************************************************!*\
  !*** D:/tim privat/github/kervi/kervi-ui/kervi/ui/web/dist/kervi-js/fesm5/kervi-js.js ***!
  \****************************************************************************************/
/*! exports provided: KerviBaseService, ConnectionState, KerviValue, ValueRange, ValueRangeType, KerviValueType, KerviEnumOptionModel, SelectValue, NumberValue, StringValue, BooleanValue, DateTimeValue, ColorValue, DashboardSizes, DashboardMessageModel, DashboardPanelComponent, DashboardPanelParameters, DashboardPanel, DashboardBackgroundModel, Dashboard, Action, DashboardLink, Controller, FileBase, File, Directory, StreamEvent, Stream, UserLogStateType, KerviJsModule, ɵa */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileBase", function() { return FileBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "File", function() { return File; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Directory", function() { return Directory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreamEvent", function() { return StreamEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stream", function() { return Stream; });
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
        this.streamHandlers = [];
        this.rpcQueue = {};
        this.ready = false;
        this.messageId = 0;
        this.sensors = {};
        this.controllers = {};
        this.sensorTypes = [];
        this.controllerTypes = [];
        this.visionRegions = [];
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
        this.addStreamHandler = (/**
         * @param {?} streamId
         * @param {?} streamEvent
         * @param {?} callback
         * @return {?}
         */
        function (streamId, streamEvent, callback) {
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
        for (var i = 1; i < p.length; i++) {
            for (var key in p[i]) {
                if (p[i].hasOwnProperty(key)) {
                    p[0][key] = p[i][key];
                }
            }
        }
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
        if (callback) {
            this.rpcQueue[id] = {
                "callback": callback,
                "callbackTimeout": callbackTimeout,
                "timeout": timeout,
                "ts": Date.now(),
            };
        }
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
     * @param {?} streamBlob
     * @return {?}
     */
    KerviSpineBase.prototype.handleStream = /**
     * @protected
     * @param {?} message
     * @param {?} streamBlob
     * @return {?}
     */
    function (message, streamBlob) {
        /** @type {?} */
        var streamTag = message.streamId + '/' + message.streamEvent;
        for (var n = 0; (n < this.streamHandlers.length); n++) {
            /** @type {?} */
            var h = this.streamHandlers[n];
            if (h.streamTag === streamTag) {
                h.callback.call(message.streamId, message.streamId, message.streamEvent, streamBlob);
            }
            else if (h.streamTag === message.streamId) {
                h.callback.call(message.streamId, message.streamId, message.streamEvent, streamBlob);
            }
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
        this.streamHandlers = [];
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
    /**
     * @param {?} stream_id
     * @param {?} event
     * @param {?} data
     * @return {?}
     */
    KerviSpineBase.prototype.streamData = /**
     * @param {?} stream_id
     * @param {?} event
     * @param {?} data
     * @return {?}
     */
    function (stream_id, event, data) {
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
        _this.addStreamHandler = (/**
         * @param {?} streamId
         * @param {?} streamEvents
         * @param {?} callback
         * @return {?}
         */
        function (streamId, streamEvents, callback) {
            var e_1, _a;
            if (streamEvents && streamEvents.length > 0) {
                try {
                    for (var streamEvents_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(streamEvents), streamEvents_1_1 = streamEvents_1.next(); !streamEvents_1_1.done; streamEvents_1_1 = streamEvents_1.next()) {
                        var event_1 = streamEvents_1_1.value;
                        this.streamHandlers.push({ 'streamTag': streamId + '/' + event_1, callback: callback });
                        /** @type {?} */
                        var cmd = {
                            id: this.messageId++,
                            'messageType': 'registerStreamHandler',
                            'streamId': streamId,
                            'streamEvent': event_1
                        };
                        console.log("as", cmd);
                        this.websocket.send(JSON.stringify(cmd));
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (streamEvents_1_1 && !streamEvents_1_1.done && (_a = streamEvents_1.return)) _a.call(streamEvents_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            else {
                this.streamHandlers.push({ 'streamTag': streamId, callback: callback });
                /** @type {?} */
                var cmd = {
                    id: this.messageId++,
                    'messageType': 'registerStreamHandler',
                    'streamId': streamId,
                    'streamEvent': event
                };
                console.log('as', cmd);
                this.websocket.send(JSON.stringify(cmd));
            }
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
        this.websocket.binaryType = 'arraybuffer';
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
            if (typeof evt.data === 'string') {
                /** @type {?} */
                var message = JSON.parse(evt.data);
                self.onMessage(message);
            }
            else {
                /** @type {?} */
                var jsonLen = new Int32Array(evt.data.slice(0, 4))[0];
                /** @type {?} */
                var jsonBlob = evt.data.slice(4, jsonLen + 4);
                /** @type {?} */
                var streamBlob = evt.data.slice(4 + jsonLen);
                /** @type {?} */
                var utf8decoder = new TextDecoder();
                /** @type {?} */
                var j = utf8decoder.decode(jsonBlob);
                self.onMessage(JSON.parse(j), streamBlob);
            }
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
     * @param {?} message
     * @param {?=} streamBlob
     * @return {?}
     */
    KerviWSSpine.prototype.onMessage = /**
     * @param {?} message
     * @param {?=} streamBlob
     * @return {?}
     */
    function (message, streamBlob) {
        //console.log("on m",evt.data);
        if (streamBlob === void 0) { streamBlob = null; }
        //console.log("on m",evt.data);
        /** @type {?} */
        var self = this;
        if (message.messageType == "authenticate") {
            console.log("authenticate");
            this.doAuthenticate = true;
            if (this.options.userName)
                this.authenticate(this.options.userName, this.options.password);
            else
                this.options.onAuthenticate.call(this.options.targetScope, message);
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
                    self.options.onLogOff.call(self.options.targetScope, message);
                }
            }
            else
                this.options.onAuthenticateFailed.call(this.options.targetScope, message);
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
                    self.options.onOpen.call(self.options.targetScope, self.firstOnOpen, message);
                self.firstOnOpen = false;
            }), 100);
        }
        else if (message.messageType == "session_logoff") {
            if (self.options.onLogOff)
                self.options.onLogOff.call(self.options.targetScope, message);
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
        else if (message.messageType == "stream")
            this.handleStream(message, streamBlob);
        else if (message.messageType == "command")
            this.handleCommand(message);
        else
            console.log("Kervi spine message unknown", this.rpcQueue, message);
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
                // console.log("adh",link);
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
        this.componentType = 'action';
        this.runCommand = '';
        this.interruptCommand = '';
        this.ui = {
            type: '',
            orientation: '',
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
                /** @type {?} */
                var subComponents = this.createComponentsRec(message[i], kerviService);
                result = result.concat(subComponents[0]);
                dashboards = dashboards.concat(subComponents[1]);
            }
        }
        else {
            /** @type {?} */
            var component = null;
            /** @type {?} */
            var subComponents = [];
            if (message.componentType === 'KerviAction') {
                component = new Action(message, kerviService);
            }
            else if (message.componentType === 'dashboard') {
                component = new Dashboard(message);
                dashboards.push(component);
            }
            else if (message.componentType === 'controller') {
                component = new Controller(message, kerviService);
            }
            else if (message.componentType === 'boolean-value') {
                component = new BooleanValue(message, kerviService);
            }
            else if (message.componentType === 'number-value') {
                component = new NumberValue(message, kerviService);
            }
            else if (message.componentType === 'string-value') {
                component = new StringValue(message, kerviService);
            }
            else if (message.componentType === 'enum-value') {
                component = new SelectValue(message, kerviService);
            }
            else if (message.componentType === 'datetime-value') {
                component = new DateTimeValue(message, kerviService);
            }
            else if (message.componentType === 'color-value') {
                component = new ColorValue(message, kerviService);
            }
            if (component) {
                result.push(component);
            }
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
                if (controller && controller.componentType === 'controller') {
                    controller.updateReferences();
                }
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
        console.log('ltd', components, dashboards);
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
var FileBase = /** @class */ (function () {
    function FileBase() {
        this.isFile = true;
    }
    return FileBase;
}());
var File = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(File, _super);
    function File() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return File;
}(FileBase));
var Directory = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Directory, _super);
    function Directory(path) {
        var _this = _super.call(this) || this;
        _this.files$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        _this.path = path;
        return _this;
    }
    /**
     * @param {?} files
     * @return {?}
     */
    Directory.prototype.updateFiles = /**
     * @param {?} files
     * @return {?}
     */
    function (files) {
        var e_1, _a;
        /** @type {?} */
        var result = [];
        try {
            for (var files_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(files), files_1_1 = files_1.next(); !files_1_1.done; files_1_1 = files_1.next()) {
                var file = files_1_1.value;
                if (file.is_file) {
                    /** @type {?} */
                    var fileEntry = new File();
                    fileEntry.name = file.name;
                    /** @type {?} */
                    var p = this.path !== '/' ? this.path : '';
                    fileEntry.path = p + '/' + file.name;
                    result.push(fileEntry);
                }
                else {
                    /** @type {?} */
                    var p = this.path !== '/' ? this.path : '';
                    /** @type {?} */
                    var directory = new Directory(p + '/' + file.name);
                    directory.name = file.name;
                    directory.isFile = false;
                    result.push(directory);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (files_1_1 && !files_1_1.done && (_a = files_1.return)) _a.call(files_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.files$.next(result);
    };
    return Directory;
}(FileBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StreamEvent = /** @class */ (function () {
    function StreamEvent(streamId, streamEvent, data) {
        this.streamId = streamId;
        this.event = streamEvent;
        this.data = data;
    }
    return StreamEvent;
}());
var Stream = /** @class */ (function () {
    function Stream(streamId, events, kerviService) {
        this.streamId = streamId;
        this.events = events;
        this.kerviService = kerviService;
        this.events$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        /** @type {?} */
        var self = this;
        kerviService.spine.addStreamHandler(streamId, events, (/**
         * @param {?} e_streamId
         * @param {?} e_streamEvent
         * @param {?} e_data
         * @return {?}
         */
        function (e_streamId, e_streamEvent, e_data) {
            /** @type {?} */
            var event = new StreamEvent(e_streamId, e_streamEvent, e_data);
            /** @type {?} */
            var notify = false;
            if (events === null || events.length === 0 || events.indexOf(e_streamEvent) >= 0) {
                notify = true;
            }
            if (notify) {
                self.events$.next(event);
            }
        }));
    }
    /**
     * @return {?}
     */
    Stream.prototype.close = /**
     * @return {?}
     */
    function () {
        //this.kerviService.spine.removeStreamHandler(streamId)
    };
    return Stream;
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
        this.streams = {};
        this.IPCReady$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.authPromise = null;
        console.log('kervi service constructor');
        /** @type {?} */
        var self = this;
        this.application$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.IPCReady$.subscribe((/**
         * @param {?} connected
         * @return {?}
         */
        function (connected) {
            if (connected) {
                console.log('kervi service ipc ready (connected)');
                self.spine.addEventHandler('valueChanged', '', (/**
                 * @param {?} id
                 * @param {?} value
                 * @return {?}
                 */
                function (id, value) {
                    var e_1, _a;
                    try {
                        for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(self.components), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var component = _c.value;
                            if (component.id === value.id) {
                                /** @type {?} */
                                var dynamicValue = (/** @type {?} */ (component));
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
                self.spine.addEventHandler('actionStarted', '', (/**
                 * @param {?} id
                 * @return {?}
                 */
                function (id) {
                    var e_2, _a;
                    console.log('as', id);
                    try {
                        for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(self.components), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var component = _c.value;
                            if (component.id === id) {
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
                self.spine.addEventHandler('actionDone', '', (/**
                 * @param {?} id
                 * @return {?}
                 */
                function (id) {
                    var e_3, _a;
                    console.log('ad', id);
                    try {
                        for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(self.components), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var component = _c.value;
                            if (component.id === id) {
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
                self.spine.addEventHandler('userLogMessage', null, (/**
                 * @param {?} v
                 * @return {?}
                 */
                function (v) {
                    var e_4, _a;
                    /** @type {?} */
                    var messages = self.logMessages$.value;
                    /** @type {?} */
                    var newMessage = new DashboardMessageModel(this);
                    messages.unshift(newMessage);
                    if (messages.length > 10) {
                        messages.pop();
                    }
                    /** @type {?} */
                    var hasErrors = 0;
                    /** @type {?} */
                    var hasWarnings = 0;
                    try {
                        for (var messages_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(messages), messages_1_1 = messages_1.next(); !messages_1_1.done; messages_1_1 = messages_1.next()) {
                            var message = messages_1_1.value;
                            if (message.level === 1) {
                                hasErrors++;
                            }
                            if (message.level === 2) {
                                hasWarnings++;
                            }
                        }
                    }
                    catch (e_4_1) { e_4 = { error: e_4_1 }; }
                    finally {
                        try {
                            if (messages_1_1 && !messages_1_1.done && (_a = messages_1.return)) _a.call(messages_1);
                        }
                        finally { if (e_4) throw e_4.error; }
                    }
                    if (hasErrors) {
                        self.LogMessageState$.next(UserLogStateType.error);
                    }
                    else if (hasWarnings) {
                        self.LogMessageState$.next(UserLogStateType.warning);
                    }
                    else {
                        self.LogMessageState$.next(UserLogStateType.normal);
                    }
                    self.LogMessageCount$.next(messages.length);
                    self.lastLogMessage$.next(newMessage);
                    self.logMessages$.next(messages);
                }));
            }
        }));
    }
    /**
     * @param {?} path
     * @return {?}
     */
    KerviBaseService.prototype.GetDirectory = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        var _this = this;
        /** @type {?} */
        var promise = new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            /** @type {?} */
            var directory = new Directory(path);
            _this.spine.sendQuery('files_get_dir', path, (/**
             * @param {?} directoryFiles
             * @return {?}
             */
            function (directoryFiles) {
                directory.updateFiles(directoryFiles);
                resolve(directory);
            }));
        }));
        return promise;
    };
    /**
     * @param {?} path
     * @return {?}
     */
    KerviBaseService.prototype.GetThumbnail = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        var _this = this;
        /** @type {?} */
        var promise = new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            _this.spine.sendQuery('files_get_thumbnail', path, (/**
             * @param {?} thumbnail
             * @return {?}
             */
            function (thumbnail) {
                resolve(thumbnail);
            }));
        }));
        return promise;
    };
    /**
     * @param {?} path
     * @return {?}
     */
    KerviBaseService.prototype.GetFile = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        var _this = this;
        /** @type {?} */
        var promise = new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            _this.spine.sendQuery('files_get_file', path, (/**
             * @param {?} file
             * @return {?}
             */
            function (file) {
                resolve(file);
            }));
        }));
        return promise;
    };
    /**
     * @param {?} streamId
     * @param {?=} events
     * @return {?}
     */
    KerviBaseService.prototype.GetStream = /**
     * @param {?} streamId
     * @param {?=} events
     * @return {?}
     */
    function (streamId, events) {
        if (events === void 0) { events = []; }
        return new Stream(streamId, events, this);
    };
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
        if (defaultValue === void 0) { defaultValue = ''; }
        if (this.texts && key in this.texts) {
            return this.texts[key];
        }
        else {
            return defaultValue;
        }
    };
    /**
     * @return {?}
     */
    KerviBaseService.prototype.getLogMessages$ = /**
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
        if (defaultDashboard) {
            return defaultDashboard.isEmpty();
        }
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
                if (component.id === id && (componentType == null || component.componentType === componentType)) {
                    return component;
                }
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
                if (component.componentType === type) {
                    result.push(component);
                }
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
        var dashboards = (/** @type {?} */ (this.getComponentsByType('dashboard')));
        try {
            for (var dashboards_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(dashboards), dashboards_1_1 = dashboards_1.next(); !dashboards_1_1.done; dashboards_1_1 = dashboards_1.next()) {
                var dashboard = dashboards_1_1.value;
                if (dashboard.isDefault) {
                    return dashboard;
                }
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (dashboards_1_1 && !dashboards_1_1.done && (_a = dashboards_1.return)) _a.call(dashboards_1);
            }
            finally { if (e_7) throw e_7.error; }
        }
        if (dashboards.length > 0) {
            return dashboards[0];
        }
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
        var protocol = 'ws';
        try {
            if (kerviSocketAddress) {
                address = kerviSocketAddress;
            }
            if (socketProtocol) {
                protocol = socketProtocol;
            }
        }
        catch (e) {
            // for testing with ng serve
            /** @type {?} */
            var httpProtocol = location.protocol;
            if (httpProtocol === 'https') {
                protocol = 'wss';
            }
            /** @type {?} */
            var httpHost = window.location.hostname;
            address = httpHost + ':9000';
        }
        console.log('ks', address);
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
        console.log('ks', sessionStorage.getItem('mqc'));
        if (sessionStorage.getItem('mqc')) {
            this.spine = new KerviRMQSpine({
                onOpen: this.onOpen,
                onClose: this.onClose,
                onAuthenticate: this.onAuthenticate,
                onAuthenticateFailed: this.onAuthenticateFailed,
                onLogOff: this.onLogoff,
                onAuthenticateStart: this.onAuthenticateStart,
                targetScope: this,
                apiToken: JSON.parse(sessionStorage.getItem('mqc'))
            });
        }
        else {
            console.log('qmc not found in storage');
        }
    };
    /**
     * @return {?}
     */
    KerviBaseService.prototype.isAnonymous = /**
     * @return {?}
     */
    function () {
        return this.spine.options.userName === 'anonymous';
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
        console.log('sa', userName, password);
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
        this.reset();
        this._resolveSelf('ok');
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
        this._rejectSelf('error');
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
        this.doAuthenticate = true;
        if (this.spine.firstOnOpen) {
            this.IPCReady$.next(true);
        }
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
        if (this.IPCReady$.value) {
            this.connectionState$.next(ConnectionState.authenticate);
        }
        else {
            this.connectionState$.next(ConnectionState.disconnected);
        }
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
        this.spine.sendQuery('GetApplicationInfo', (/**
         * @param {?} appInfo
         * @return {?}
         */
        function (appInfo) {
            console.log('app info', appInfo);
            this.spine.sendQuery('getComponentInfo', (/**
             * @param {?} message
             * @return {?}
             */
            function (message) {
                console.log('component info', message);
                self.application$.next(appInfo);
                self.texts = appInfo.display.texts;
                self.components = ComponentFactory.createComponents(message, self);
                ComponentFactory.FixControllerReferences(self.getComponentsByType('controller'));
                self.components$.next(self.components);
                self.connectionState$.next(ConnectionState.connected);
                if (module_load) {
                    self.componentsChanged$.next(true);
                }
                console.log('components', self.components);
            }), (/**
             * @return {?}
             */
            function () {
                console.error('get component info timeout');
                if (retryCount > 0) {
                    self.getComponentInfo(retryCount - 1, module_load);
                }
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
        console.log('kervi service on open', this.spine.firstOnOpen, first, this);
        /** @type {?} */
        var self = this;
        this.connectionState$.next(ConnectionState.loading);
        this.doAuthenticate = this.spine.doAuthenticate;
        this.getComponentInfo(2, false);
        if (self.spine.firstOnOpen) {
            this.IPCReady$.next(true);
            this.spine.addEventHandler('moduleStarted', '', (/**
             * @return {?}
             */
            function () {
                console.log('module loaded', self.components);
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    self.getComponentInfo(2, true);
                }), 2000);
            }));
            this.spine.addEventHandler('moduleStopped', '', (/**
             * @return {?}
             */
            function () {
                console.log('module unloaded');
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    console.log('module unloaded, refresh');
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
        console.log('ks on close');
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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2VydmktanMuanMubWFwIiwic291cmNlcyI6WyJuZzovL2tlcnZpLWpzL2xpYi9zcGluZS9rZXJ2aS1zcGluZWJhc2UudHMiLCJuZzovL2tlcnZpLWpzL2xpYi9zcGluZS9rZXJ2aS13cy50cyIsIm5nOi8va2VydmktanMvbGliL3NwaW5lL2tlcnZpLXJtcS50cyIsIm5nOi8va2VydmktanMvbGliL21vZGVscy9JQ29tcG9uZW50Lm1vZGVsLnRzIiwibmc6Ly9rZXJ2aS1qcy9saWIvbW9kZWxzL0tlcnZpVmFsdWVzLm1vZGVsLnRzIiwibmc6Ly9rZXJ2aS1qcy9saWIvbW9kZWxzL0NvbXBvbmVudFJlZi50cyIsIm5nOi8va2VydmktanMvbGliL21vZGVscy9jb250cm9sbGVyLm1vZGVsLnRzIiwibmc6Ly9rZXJ2aS1qcy9saWIvbW9kZWxzL2Rhc2hib2FyZC5tb2RlbC50cyIsIm5nOi8va2VydmktanMvbGliL21vZGVscy9hY3Rpb24ubW9kZWwudHMiLCJuZzovL2tlcnZpLWpzL2xpYi9tb2RlbHMvZmFjdG9yeS50cyIsIm5nOi8va2VydmktanMvbGliL21vZGVscy9maWxlLm1vZGVsLnRzIiwibmc6Ly9rZXJ2aS1qcy9saWIvbW9kZWxzL3N0cmVhbS5tb2RlbC50cyIsIm5nOi8va2VydmktanMvbGliL2tlcnZpLWpzLnNlcnZpY2UudHMiLCJuZzovL2tlcnZpLWpzL2xpYi9rZXJ2aS1qcy5jb21wb25lbnQudHMiLCJuZzovL2tlcnZpLWpzL2xpYi9rZXJ2aS1qcy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCBUaW0gV2VudHpsYXVcclxuLy8gTGljZW5zZWQgdW5kZXIgTUlUXHJcblxyXG5leHBvcnQgY2xhc3MgIEtlcnZpU3BpbmVCYXNle1xyXG5cclxuICAgIHB1YmxpYyBpc0Nvbm5lY3RlZDogQm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIGRvQXV0aGVudGljYXRlOmJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBzZXNzaW9uSWQgPSBudWxsO1xyXG4gICAgcXVlcnlIYW5kbGVycz1bXTtcclxuICAgIGNvbW1hbmRIYW5kbGVycz1bXTtcclxuICAgIGV2ZW50SGFuZGxlcnM9W107XHJcbiAgICBzdHJlYW1IYW5kbGVycz1bXTtcclxuICAgIHJwY1F1ZXVlPXt9O1xyXG4gICAgcmVhZHk9ZmFsc2U7XHJcbiAgICBtZXNzYWdlSWQ9MDtcclxuICAgIHNlbnNvcnM9e307XHJcbiAgICBjb250cm9sbGVycz17fTtcclxuICAgIHNlbnNvclR5cGVzPVtdO1xyXG4gICAgY29udHJvbGxlclR5cGVzPVtdO1xyXG4gICAgdmlzaW9uUmVnaW9ucz1bXTtcclxuICAgIGFwcGxpY2F0aW9uPW51bGw7XHJcbiAgICBhbGxvd0Fub255bW91cyA9IHRydWU7XHJcbiAgICBmaXJzdE9uT3BlbiA9IHRydWU7XHJcblxyXG4gICAgcHJvdGVjdGVkIHdlYnNvY2tldCA9IG51bGw7XHJcbiAgICBcclxuICAgIHB1YmxpYyBvcHRpb25zOiBhbnk9ICB7XHJcbiAgICAgICAgICAgIHVzZXJOYW1lOiBcImFub255bW91c1wiLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogbnVsbCxcclxuICAgICAgICAgICAgYWRkcmVzczpudWxsLFxyXG4gICAgICAgICAgICBvbk9wZW46bnVsbCxcclxuICAgICAgICAgICAgb25DbG9zZTpudWxsLFxyXG4gICAgICAgICAgICBvbkF1dGhlbnRpY2F0ZTpudWxsLFxyXG4gICAgICAgICAgICBvbkF1dGhlbnRpY2F0ZUZhaWxlZDpudWxsLFxyXG4gICAgICAgICAgICBvbkF1dGhlbnRpY2F0ZVN0YXJ0Om51bGwsXHJcbiAgICAgICAgICAgIG9uTG9nT2ZmOiBudWxsLFxyXG4gICAgICAgICAgICBhdXRvQ29ubmVjdDp0cnVlLFxyXG4gICAgICAgICAgICB0YXJnZXRTY29wZTpudWxsLFxyXG4gICAgICAgICAgICBwcm90b2NvbDpcIndzXCIsXHJcbiAgICAgICAgICAgIGFwaVRva2VuOm51bGxcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHVibGljIGNvbnN0cnVjdG9yT3B0aW9ucyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJLZXJ2aSBiYXNlIHNwaW5lIGluaXRcIix0aGlzLm9wdGlvbnMsY29uc3RydWN0b3JPcHRpb25zKTtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLmV4dGVuZCh0aGlzLm9wdGlvbnMsY29uc3RydWN0b3JPcHRpb25zKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImtib1wiLCB0aGlzLm9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdCgpO1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBzZXRJbnRlcnZhbChcclxuICAgICAgICAgICAgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHZhciBoYW5naW5nTm9kZXM9W11cclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaWQgaW4gc2VsZi5ycGNRdWV1ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHF1ZXJ5ID0gc2VsZi5ycGNRdWV1ZVtpZF1cclxuICAgICAgICAgICAgICAgICAgICBpZiAocXVlcnlbXCJjYWxsYmFja1RpbWVvdXRcIl0pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoRGF0ZS5ub3coKSAtIHF1ZXJ5W1widHNcIl0gPiBxdWVyeVtcInRpbWVvdXRcIl0pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gcXVlcnlbXCJjYWxsYmFja1RpbWVvdXRcIl07IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZ2luZ05vZGVzLnB1c2goaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChzZWxmLm9wdGlvbnMudGFyZ2V0U2NvcGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yKHZhciBpZCBvZiBoYW5naW5nTm9kZXMpe1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzZWxmLnJwY1F1ZXVlW2lkXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICwxKVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBleHRlbmQoLi4ucDogYW55W10pXHJcbiAgICB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvcihsZXQga2V5IGluIHBbaV0pIHtcclxuICAgICAgICAgICAgICAgIGlmKHBbaV0uaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBbMF1ba2V5XSA9IHBbaV1ba2V5XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcFswXTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgYWRkUlBDQ2FsbGJhY2soaWQ6c3RyaW5nLCBjYWxsYmFjaywgY2FsbGJhY2tUaW1lb3V0LCB0aW1lb3V0KVxyXG4gICAge1xyXG4gICAgICAgIGlmIChjYWxsYmFjayl7XHJcbiAgICAgICAgICAgIHRoaXMucnBjUXVldWVbaWRdPXtcclxuICAgICAgICAgICAgICAgIFwiY2FsbGJhY2tcIjpjYWxsYmFjayxcclxuICAgICAgICAgICAgICAgIFwiY2FsbGJhY2tUaW1lb3V0XCI6Y2FsbGJhY2tUaW1lb3V0LFxyXG4gICAgICAgICAgICAgICAgXCJ0aW1lb3V0XCI6IHRpbWVvdXQsXHJcbiAgICAgICAgICAgICAgICBcInRzXCI6RGF0ZS5ub3coKSxcclxuICAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBoYW5kbGVSUENSZXNwb25zZShtZXNzYWdlKXtcclxuICAgICAgICBpZiAobWVzc2FnZS5pZCBpbiB0aGlzLnJwY1F1ZXVlKXtcclxuICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gdGhpcy5ycGNRdWV1ZVttZXNzYWdlLmlkXVtcImNhbGxiYWNrXCJdO1xyXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spe1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMucnBjUXVldWVbbWVzc2FnZS5pZF07XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXMub3B0aW9ucy50YXJnZXRTY29wZSxtZXNzYWdlLnJlc3BvbnNlLG1lc3NhZ2UucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBoYW5kbGVFdmVudChtZXNzYWdlKXtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiZXZcIiwgbWVzc2FnZSlcclxuICAgICAgICB2YXIgZXZlbnROYW1lPW1lc3NhZ2UuZXZlbnQ7XHJcbiAgICAgICAgdmFyIGlkPW1lc3NhZ2UuaWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIGV2ZW50UGF0aD1ldmVudE5hbWU7XHJcbiAgICAgICAgaWYgKGlkKXtcclxuICAgICAgICAgICAgZXZlbnRQYXRoKz1cIi9cIitpZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHZhbHVlPW51bGw7XHJcbiAgICAgICAgaWYobWVzc2FnZS5hcmdzICYmIG1lc3NhZ2UuYXJncy5sZW5ndGgpe1xyXG4gICAgICAgICAgICB2YWx1ZT1tZXNzYWdlLmFyZ3NbMF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcih2YXIgbj0wOyhuPHRoaXMuZXZlbnRIYW5kbGVycy5sZW5ndGgpO24rKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBoPXRoaXMuZXZlbnRIYW5kbGVyc1tuXTtcclxuICAgICAgICAgICAgaWYgKGguZXZlbnROYW1lPT1ldmVudFBhdGgpXHJcbiAgICAgICAgICAgICAgICBoLmNhbGxiYWNrLmNhbGwodmFsdWUsaWQsdmFsdWUpO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChoLmV2ZW50TmFtZT09ZXZlbnROYW1lKVxyXG4gICAgICAgICAgICAgICAgaC5jYWxsYmFjay5jYWxsKHZhbHVlLGlkLHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGhhbmRsZVN0cmVhbShtZXNzYWdlLCBzdHJlYW1CbG9iKSB7XHJcbiAgICAgICAgY29uc3Qgc3RyZWFtVGFnID0gbWVzc2FnZS5zdHJlYW1JZCArICcvJyArIG1lc3NhZ2Uuc3RyZWFtRXZlbnQgO1xyXG4gICAgICAgIGZvciAobGV0IG4gPSAwOyAobiA8IHRoaXMuc3RyZWFtSGFuZGxlcnMubGVuZ3RoKTsgbisrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGggPSB0aGlzLnN0cmVhbUhhbmRsZXJzW25dO1xyXG4gICAgICAgICAgICBpZiAoaC5zdHJlYW1UYWcgPT09IHN0cmVhbVRhZykge1xyXG4gICAgICAgICAgICAgICAgaC5jYWxsYmFjay5jYWxsKG1lc3NhZ2Uuc3RyZWFtSWQsIG1lc3NhZ2Uuc3RyZWFtSWQsIG1lc3NhZ2Uuc3RyZWFtRXZlbnQsIHN0cmVhbUJsb2IpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGguc3RyZWFtVGFnID09PSBtZXNzYWdlLnN0cmVhbUlkKSB7XHJcbiAgICAgICAgICAgICAgICBoLmNhbGxiYWNrLmNhbGwobWVzc2FnZS5zdHJlYW1JZCwgbWVzc2FnZS5zdHJlYW1JZCwgbWVzc2FnZS5zdHJlYW1FdmVudCwgc3RyZWFtQmxvYik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGhhbmRsZUNvbW1hbmQobWVzc2FnZSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjbWRcIix0aGlzLG1lc3NhZ2UpO1xyXG4gICAgICAgIHZhciBjb21tYW5kPW1lc3NhZ2UuY29tbWFuZFxyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBhcmdzPW51bGw7XHJcbiAgICAgICAgaWYobWVzc2FnZS5hcmdzICYmIG1lc3NhZ2UuYXJncy5sZW5ndGgpe1xyXG4gICAgICAgICAgICBhcmdzPW1lc3NhZ2UuYXJnc1swXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yKHZhciBuPTA7KG48dGhpcy5jb21tYW5kSGFuZGxlcnMubGVuZ3RoKTtuKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgYz10aGlzLmNvbW1hbmRIYW5kbGVyc1tuXTtcclxuICAgICAgICAgICAgaWYgKGMuY29tbWFuZD09Y29tbWFuZClcclxuICAgICAgICAgICAgICAgIGMuY2FsbGJhY2suY2FsbCh0aGlzLGFyZ3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgY29ubmVjdCgpe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbk9wZW4oZXZ0KXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIktlcnZpIG9wZW5cIix0aGlzLGV2dCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHNlbGY9dGhpc1xyXG4gICAgICAgIHRoaXMuaXNDb25uZWN0ZWQ9dHJ1ZTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlcnMgPSBbXTtcclxuICAgICAgICB0aGlzLnN0cmVhbUhhbmRsZXJzID0gW107XHJcbiAgICAgICAgdGhpcy5jb21tYW5kSGFuZGxlcnMgPSBbXTtcclxuICAgICAgICB0aGlzLnF1ZXJ5SGFuZGxlcnMgPSBbXTtcdFxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiS2Vydmkgc3BpbmUgcmVhZHlcIilcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25DbG9zZShldnQpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiS2Vydmkgc3BpbmUgb24gY2xvc2VcIixldnQpO1xyXG4gICAgICAgIHRoaXMuaXNDb25uZWN0ZWQ9ZmFsc2U7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMub25DbG9zZSlcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm9uQ2xvc2UuY2FsbCh0aGlzLm9wdGlvbnMudGFyZ2V0U2NvcGUsZXZ0KTtcclxuICAgICAgICB0aGlzLmZpcnN0T25PcGVuPXRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hdXRvQ29ubmVjdCl7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHNlbGYuY29ubmVjdCgpO1xyXG4gICAgICAgICAgICB9ICwxMDAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGF1dGhlbnRpY2F0ZSh1c2VyTmFtZSwgcGFzc3dvcmQpe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2dvZmYoKXtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25NZXNzYWdlKGV2dCl7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uRXJyb3IoZXZ0KXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIktlcnZpIG9uIGVycm9yXCIsZXZ0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkQ29tbWFuZEhhbmRsZXIgKGNvbW1hbmQ6c3RyaW5nLGNhbGxiYWNrKXtcclxuICAgICAgICBcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIGFkZFF1ZXJ5SGFuZGxlcihxdWVyeTpzdHJpbmcsY2FsbGJhY2spe1xyXG4gICAgICAgIFxyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgYWRkRXZlbnRIYW5kbGVyPWZ1bmN0aW9uKGV2ZW50TmFtZTpzdHJpbmcsaWQ6c3RyaW5nLGNhbGxiYWNrKXtcclxuICAgICAgICBcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIGFkZFN0cmVhbUhhbmRsZXIgPSBmdW5jdGlvbihzdHJlYW1JZDogc3RyaW5nLCBzdHJlYW1FdmVudDogc3RyaW5nW10sIGNhbGxiYWNrKXtcclxuICAgICAgICBcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIHNlbmRDb21tYW5kKGNvbW1hbmQ6c3RyaW5nLC4uLnA6YW55W10pe1xyXG4gICAgICAgIFxyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgc2VuZFF1ZXJ5KHF1ZXJ5LC4uLnA6YW55W10pe1xyXG4gICAgICAgIFxyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgdHJpZ2dlckV2ZW50KGV2ZW50TmFtZTpzdHJpbmcsaWQ6c3RyaW5nKXtcclxuICAgICAgICBcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIHN0cmVhbURhdGEoc3RyZWFtX2lkOnN0cmluZywgZXZlbnQ6c3RyaW5nICwgZGF0YTphbnkpe1xyXG4gICAgICAgIFxyXG4gICAgfTtcclxufSIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgVGltIFdlbnR6bGF1XHJcbi8vIExpY2Vuc2VkIHVuZGVyIE1JVFxyXG5pbXBvcnQge0tlcnZpU3BpbmVCYXNlfSBmcm9tIFwiLi9rZXJ2aS1zcGluZWJhc2VcIlxyXG5leHBvcnQgY2xhc3MgIEtlcnZpV1NTcGluZSBleHRlbmRzIEtlcnZpU3BpbmVCYXNle1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY29uc3RydWN0b3JPcHRpb25zKXtcclxuICAgICAgICBzdXBlcihjb25zdHJ1Y3Rvck9wdGlvbnMpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwia2Vydmkgc3BpbmUgY29uc3RydWN0b3JcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGNvbm5lY3QoKXtcclxuICAgICAgICBpZiAodGhpcy5pc0Nvbm5lY3RlZCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiS2VydmkgaXMgY29ubmVjdGVkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHNlbGY9dGhpcztcclxuICAgICAgICB0aGlzLndlYnNvY2tldD0gbmV3IFdlYlNvY2tldCh0aGlzLm9wdGlvbnMucHJvdG9jb2wgKyBcIjovL1wiICsgdGhpcy5vcHRpb25zLmFkZHJlc3MpO1xyXG4gICAgICAgIHRoaXMud2Vic29ja2V0LmJpbmFyeVR5cGUgPSAnYXJyYXlidWZmZXInO1xyXG4gICAgICAgIHRoaXMud2Vic29ja2V0Lm9ub3BlbiA9IGZ1bmN0aW9uKGV2dCkgeyBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJrZXJ2aSBzcGluZSBvbiBvcGVuXCIpO1xyXG4gICAgICAgICAgICBzZWxmLm9uT3BlbihldnQpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMud2Vic29ja2V0Lm9uY2xvc2UgPSBmdW5jdGlvbihldnQpIHtcclxuICAgICAgICAgICAgc2VsZi5vbkNsb3NlKGV2dCkgO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMud2Vic29ja2V0Lm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2dCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGV2dC5kYXRhID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IEpTT04ucGFyc2UoZXZ0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5vbk1lc3NhZ2UobWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBqc29uTGVuID0gbmV3IEludDMyQXJyYXkoZXZ0LmRhdGEuc2xpY2UoMCwgNCkpWzBdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QganNvbkJsb2IgPSBldnQuZGF0YS5zbGljZSg0LCBqc29uTGVuICsgNCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdHJlYW1CbG9iID0gZXZ0LmRhdGEuc2xpY2UoNCArIGpzb25MZW4pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXRmOGRlY29kZXIgPSBuZXcgVGV4dERlY29kZXIoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGogPSB1dGY4ZGVjb2Rlci5kZWNvZGUoanNvbkJsb2IpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5vbk1lc3NhZ2UoSlNPTi5wYXJzZShqKSwgc3RyZWFtQmxvYik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLndlYnNvY2tldC5vbmVycm9yID0gZnVuY3Rpb24oZXZ0KSB7XHJcbiAgICAgICAgICAgIHNlbGYub25FcnJvcihldnQpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGF1dGhlbnRpY2F0ZSh1c2VyTmFtZSwgcGFzc3dvcmQpe1xyXG4gICAgICAgIHRoaXMub3B0aW9ucy51c2VyTmFtZSA9IHVzZXJOYW1lO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucy5wYXNzd29yZCA9IHBhc3N3b3JkO1xyXG4gICAgICAgIHZhciBjbWQgPSB7aWQ6dGhpcy5tZXNzYWdlSWQrKywgXCJtZXNzYWdlVHlwZVwiOlwiYXV0aGVudGljYXRlXCIsXCJ1c2VyTmFtZVwiOnVzZXJOYW1lLCBcInBhc3N3b3JkXCI6IHBhc3N3b3JkfTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInN3YVwiLCBjbWQpO1xyXG4gICAgICAgIHRoaXMud2Vic29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoY21kKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvZ29mZigpe1xyXG4gICAgICAgIC8vdGhpcy5vcHRpb25zLnVzZXJOYW1lID0gdGhpcy5hbGxvd0Fub255bW91cyA/IFwiYW5vbnltb3VzXCIgOiBudWxsO1xyXG4gICAgICAgIC8vdGhpcy5vcHRpb25zLnBhc3N3b3JkID0gbnVsbDtcclxuXHJcbiAgICAgICAgdmFyIGNtZD17aWQ6dGhpcy5tZXNzYWdlSWQrKyxcIm1lc3NhZ2VUeXBlXCI6XCJsb2dvZmZcIiwgXCJzZXNzaW9uXCI6IHRoaXMuc2Vzc2lvbklkfTtcclxuICAgICAgICB0aGlzLnNlc3Npb25JZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy53ZWJzb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeShjbWQpKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk1lc3NhZ2UobWVzc2FnZSwgc3RyZWFtQmxvYj1udWxsKXtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwib24gbVwiLGV2dC5kYXRhKTtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKG1lc3NhZ2UubWVzc2FnZVR5cGU9PVwiYXV0aGVudGljYXRlXCIpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImF1dGhlbnRpY2F0ZVwiKTtcclxuICAgICAgICAgICAgdGhpcy5kb0F1dGhlbnRpY2F0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMudXNlck5hbWUpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0ZSh0aGlzLm9wdGlvbnMudXNlck5hbWUsIHRoaXMub3B0aW9ucy5wYXNzd29yZClcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLm9uQXV0aGVudGljYXRlLmNhbGwodGhpcy5vcHRpb25zLnRhcmdldFNjb3BlLG1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChtZXNzYWdlLm1lc3NhZ2VUeXBlPT1cImF1dGhlbnRpY2F0aW9uX2ZhaWxlZFwiKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhdXRoZW50aWNhdGlvbiBmYWlsZWRcIiwgdGhpcy5vcHRpb25zLnVzZXJOYW1lKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy51c2VyTmFtZSA9PSBcImFub255bW91c1wiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsbG93QW5vbnltb3VzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMudXNlck5hbWUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnBhc3N3b3JkID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2Vzc2lvbklkID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwieFwiLCBzZWxmLm9wdGlvbnMpXHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5vcHRpb25zLm9uTG9nT2ZmKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIngxXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5vcHRpb25zLm9uTG9nT2ZmLmNhbGwoc2VsZi5vcHRpb25zLnRhcmdldFNjb3BlLG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5vbkF1dGhlbnRpY2F0ZUZhaWxlZC5jYWxsKHRoaXMub3B0aW9ucy50YXJnZXRTY29wZSxtZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobWVzc2FnZS5tZXNzYWdlVHlwZT09XCJzZXNzaW9uX2F1dGhlbnRpY2F0ZWRcIil7XHJcbiAgICAgICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArICgyKjYwKjYwKjEwMDApKTtcclxuICAgICAgICAgICAgdmFyIGV4cGlyZXMgPSBcIjsgZXhwaXJlcz1cIiArIGRhdGUudG9VVENTdHJpbmcoKTtcclxuICAgICAgICAgICAgdGhpcy5zZXNzaW9uSWQgPSBtZXNzYWdlLnNlc3Npb247XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IFwia2VydmlzZXNzaW9uXCIgKyBcIj1cIiArIG1lc3NhZ2Uuc2Vzc2lvbiArIGV4cGlyZXMgKyBcIjsgcGF0aD0vXCI7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0b1wiLCBzZWxmLm9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYub3B0aW9ucy5vbk9wZW4pXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5vcHRpb25zLm9uT3Blbi5jYWxsKHNlbGYub3B0aW9ucy50YXJnZXRTY29wZSwgc2VsZi5maXJzdE9uT3BlbixtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmZpcnN0T25PcGVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0sIDEwMFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZS5tZXNzYWdlVHlwZSA9PSBcInNlc3Npb25fbG9nb2ZmXCIpeyBcclxuICAgICAgICAgICAgaWYgKHNlbGYub3B0aW9ucy5vbkxvZ09mZilcclxuICAgICAgICAgICAgICAgIHNlbGYub3B0aW9ucy5vbkxvZ09mZi5jYWxsKHNlbGYub3B0aW9ucy50YXJnZXRTY29wZSxtZXNzYWdlKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYWxsb3dBbm9ueW1vdXMgJiYgdGhpcy5vcHRpb25zLnVzZXJOYW1lICE9IFwiYW5vbnltb3VzXCIpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGUoXCJhbm9ueW1vdXNcIiwgbnVsbClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNlbGYub3B0aW9ucy51c2VyTmFtZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm9wdGlvbnMucGFzc3dvcmQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5zZXNzaW9uSWQgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLm1lc3NhZ2VUeXBlPT1cInJlc3BvbnNlXCIpXHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUlBDUmVzcG9uc2UobWVzc2FnZSk7XHJcbiAgICAgICAgZWxzZSBpZiAobWVzc2FnZS5tZXNzYWdlVHlwZT09XCJldmVudFwiKVxyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUV2ZW50KG1lc3NhZ2UpO1xyXG4gICAgICAgIGVsc2UgaWYgKG1lc3NhZ2UubWVzc2FnZVR5cGU9PVwic3RyZWFtXCIpXHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlU3RyZWFtKG1lc3NhZ2UsIHN0cmVhbUJsb2IpO1xyXG4gICAgICAgIGVsc2UgaWYgKG1lc3NhZ2UubWVzc2FnZVR5cGU9PVwiY29tbWFuZFwiKVxyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUNvbW1hbmQobWVzc2FnZSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIktlcnZpIHNwaW5lIG1lc3NhZ2UgdW5rbm93blwiLHRoaXMucnBjUXVldWUsIG1lc3NhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRXJyb3IoZXZ0KXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIktlcnZpIG9uIGVycm9yXCIsZXZ0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkQ29tbWFuZEhhbmRsZXIgKGNvbW1hbmQ6c3RyaW5nLGNhbGxiYWNrKXtcclxuICAgICAgICB0aGlzLmNvbW1hbmRIYW5kbGVycy5wdXNoKHtjb21tYW5kOmNvbW1hbmQsY2FsbGJhY2s6Y2FsbGJhY2t9KTtcclxuICAgICAgICB2YXIgY21kPXtpZDp0aGlzLm1lc3NhZ2VJZCsrLFwibWVzc2FnZVR5cGVcIjpcInJlZ2lzdGVyQ29tbWFuZEhhbmRsZXJcIixcImNvbW1hbmRcIjpjb21tYW5kfTtcclxuICAgICAgICB0aGlzLndlYnNvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KGNtZCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgYWRkUXVlcnlIYW5kbGVyKHF1ZXJ5OnN0cmluZyxjYWxsYmFjayl7XHJcbiAgICAgICAgdGhpcy5xdWVyeUhhbmRsZXJzLnB1c2goe3F1ZXJ5OnF1ZXJ5LGNhbGxiYWNrOmNhbGxiYWNrfSk7XHJcbiAgICAgICAgdmFyIGNtZD17aWQ6dGhpcy5tZXNzYWdlSWQrKyxcIm1lc3NhZ2VUeXBlXCI6XCJyZWdpc3RlclF1ZXJ5SGFuZGxlclwiLFwicXVlcnlcIjpxdWVyeX07XHJcbiAgICAgICAgdGhpcy53ZWJzb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeShjbWQpKTtcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIGFkZEV2ZW50SGFuZGxlcj1mdW5jdGlvbihldmVudE5hbWU6c3RyaW5nLGlkOnN0cmluZyxjYWxsYmFjayl7XHJcbiAgICAgICAgaWYgKGlkKVxyXG4gICAgICAgICAgICB0aGlzLmV2ZW50SGFuZGxlcnMucHVzaCh7XCJldmVudE5hbWVcIjpldmVudE5hbWUrXCIvXCIraWQsY2FsbGJhY2s6Y2FsbGJhY2t9KTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRIYW5kbGVycy5wdXNoKHtcImV2ZW50TmFtZVwiOmV2ZW50TmFtZSxjYWxsYmFjazpjYWxsYmFja30pO1xyXG4gICAgICAgIHZhciBjbWQ9e2lkOnRoaXMubWVzc2FnZUlkKyssXCJtZXNzYWdlVHlwZVwiOlwicmVnaXN0ZXJFdmVudEhhbmRsZXJcIixcImV2ZW50XCI6ZXZlbnROYW1lLFwiZXZlbnRJZFwiOmlkfTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiYWRkIGV2ZW50IGhhbmRsZXJcIixjbWQpO1xyXG4gICAgICAgIHRoaXMud2Vic29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoY21kKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyBhZGRTdHJlYW1IYW5kbGVyID0gZnVuY3Rpb24oc3RyZWFtSWQ6IHN0cmluZywgc3RyZWFtRXZlbnRzOiBzdHJpbmdbXSwgY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAoc3RyZWFtRXZlbnRzICYmIHN0cmVhbUV2ZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGV2ZW50IG9mIHN0cmVhbUV2ZW50cykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdHJlYW1IYW5kbGVycy5wdXNoKHsnc3RyZWFtVGFnJzogc3RyZWFtSWQgKyAnLycgKyBldmVudCwgY2FsbGJhY2s6IGNhbGxiYWNrfSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjbWQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMubWVzc2FnZUlkKyssXHJcbiAgICAgICAgICAgICAgICAgICAgJ21lc3NhZ2VUeXBlJzogJ3JlZ2lzdGVyU3RyZWFtSGFuZGxlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3N0cmVhbUlkJzogc3RyZWFtSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3N0cmVhbUV2ZW50JzogZXZlbnRcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFzXCIsIGNtZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndlYnNvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KGNtZCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zdHJlYW1IYW5kbGVycy5wdXNoKHsnc3RyZWFtVGFnJzogc3RyZWFtSWQsIGNhbGxiYWNrOiBjYWxsYmFja30pO1xyXG4gICAgICAgICAgICBjb25zdCBjbWQgPSB7XHJcbiAgICAgICAgICAgICAgICBpZDogdGhpcy5tZXNzYWdlSWQrKyxcclxuICAgICAgICAgICAgICAgICdtZXNzYWdlVHlwZSc6ICdyZWdpc3RlclN0cmVhbUhhbmRsZXInLFxyXG4gICAgICAgICAgICAgICAgJ3N0cmVhbUlkJzogc3RyZWFtSWQsXHJcbiAgICAgICAgICAgICAgICAnc3RyZWFtRXZlbnQnOiBldmVudFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYXMnLCBjbWQpO1xyXG4gICAgICAgICAgICB0aGlzLndlYnNvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KGNtZCkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIHNlbmRDb21tYW5kKGNvbW1hbmQ6c3RyaW5nLC4uLnA6YW55W10pe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2VjXCIsYXJndW1lbnRzKTtcclxuICAgICAgICB2YXIgYXJncz1bXTtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgY2FsbGJhY2s9bnVsbDtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaT0wOyhpPHAubGVuZ3RoKTtpKyspe1xyXG4gICAgICAgICAgICBpZiAocFtpXSBpbnN0YW5jZW9mIEZ1bmN0aW9uKVxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s9cFtpXTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgYXJncy5wdXNoKHBbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB2YXIgY21kPXtpZDp0aGlzLm1lc3NhZ2VJZCsrLFwibWVzc2FnZVR5cGVcIjpcImNvbW1hbmRcIixcImNvbW1hbmRcIjpjb21tYW5kLFwiYXJnc1wiOmFyZ3N9O1xyXG4gICAgICAgIGlmIChjYWxsYmFjayAmJiBjYWxsYmFjayBpbnN0YW5jZW9mIEZ1bmN0aW9uKVxyXG4gICAgICAgICAgICB0aGlzLmFkZFJQQ0NhbGxiYWNrKGNtZC5pZC50b1N0cmluZygpLCBjYWxsYmFjaywgbnVsbCwgMCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzZW5kQ29tbWFuZFwiLHRoaXMsY21kKTtcclxuICAgICAgICB0aGlzLndlYnNvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KGNtZCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgc2VuZFF1ZXJ5KHF1ZXJ5LC4uLnA6YW55W10pe1xyXG4gICAgICAgIHZhciBhcmdzPVtdO1xyXG4gICAgICAgIHZhciBjYWxsYmFjaz1udWxsO1xyXG4gICAgICAgIHZhciBjYWxsYmFja1RpbWVvdXQgPSBudWxsXHJcbiAgICAgICAgdmFyIHRpbWVvdXQgPSAxMDAwMFxyXG4gICAgICAgIGZvciAodmFyIGk9MDsoaTxwLmxlbmd0aCk7aSsrKXtcclxuICAgICAgICAgICAgaWYgKHBbaV0gaW5zdGFuY2VvZiBGdW5jdGlvbilcclxuICAgICAgICAgICAgICAgIGlmICghY2FsbGJhY2spIFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrPXBbaV07XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tUaW1lb3V0ID0gcFtpXTtcclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFja1RpbWVvdXQpXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dCA9IHBbaV1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICBhcmdzLnB1c2gocFtpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgICAgIHZhciBjbWQ9e2lkOnRoaXMubWVzc2FnZUlkKyssXCJtZXNzYWdlVHlwZVwiOlwicXVlcnlcIixcInF1ZXJ5XCI6cXVlcnksXCJhcmdzXCI6YXJnc307XHJcbiAgICAgICAgdGhpcy5hZGRSUENDYWxsYmFjayhjbWQuaWQudG9TdHJpbmcoKSxjYWxsYmFjaywgY2FsbGJhY2tUaW1lb3V0LCB0aW1lb3V0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNlbmRRdWVyeVwiLCBjYWxsYmFjayxjbWQpO1xyXG4gICAgICAgIHRoaXMud2Vic29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoY21kKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyB0cmlnZ2VyRXZlbnQoZXZlbnROYW1lOnN0cmluZyxpZDpzdHJpbmcpe1xyXG4gICAgICAgIHZhciBlPXtpZDp0aGlzLm1lc3NhZ2VJZCsrLFwibWVzc2FnZVR5cGVcIjpcImV2ZW50XCIsXCJldmVudFwiOmV2ZW50TmFtZSxcImFyZ3NcIjphcmd1bWVudHN9O1xyXG4gICAgICAgIHRoaXMud2Vic29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoZSkpO1xyXG4gICAgfTtcclxufSIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgVGltIFdlbnR6bGF1XHJcbi8vIExpY2Vuc2VkIHVuZGVyIE1JVFxyXG5pbXBvcnQge0tlcnZpU3BpbmVCYXNlfSBmcm9tIFwiLi9rZXJ2aS1zcGluZWJhc2VcIjtcclxuZGVjbGFyZSB2YXIgU3RvbXA6YW55O1xyXG5leHBvcnQgY2xhc3MgIEtlcnZpUk1RU3BpbmUgZXh0ZW5kcyBLZXJ2aVNwaW5lQmFzZSB7XHJcblx0cHJpdmF0ZSBzb2NrZXRTZXNzaW9uOm51bGw7XHJcblx0cHJpdmF0ZSBleGNoYW5nZSA9IFwiL2V4Y2hhbmdlL1wiO1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBjb25zdHJ1Y3Rvck9wdGlvbnMpe1xyXG5cdFx0c3VwZXIoY29uc3RydWN0b3JPcHRpb25zKTtcclxuXHRcdGNvbnNvbGUubG9nKFwiS2VydmkgaW8gc3BpbmUgaW5pdCB5XCIsIHRoaXMub3B0aW9ucyxjb25zdHJ1Y3Rvck9wdGlvbnMpO1xyXG5cdFx0XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIG9uTVFFcnJvcihmcmFtZSl7XHJcblx0XHRjb25zb2xlLmxvZyhcIk1RIGVycm9yXCIsIGZyYW1lKTtcclxuXHR9XHJcblxyXG5cdFxyXG5cdHByb3RlY3RlZCBjb25uZWN0KCl7XHJcblx0XHRpZiAodGhpcy5pc0Nvbm5lY3RlZCl7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiS2VydmkgaXMgY29ubmVjdGVkXCIpO1xyXG5cdFx0XHRyZXR1cm5cclxuXHRcdH1cclxuXHRcdHZhciBzZWxmPXRoaXM7XHJcblx0XHQvL3ZhciBtcVVybD0gdGhpcy5vcHRpb25zLnByb3RvY29sICsgXCI6Ly9cIiArIHRoaXMub3B0aW9ucy5hZGRyZXNzXHJcblx0XHR2YXIgbXFVcmw9IFwid3NzOi8vbXEua2VydmkuaW86MTU2NzMvd3NcIlxyXG5cdFx0dGhpcy53ZWJzb2NrZXQgPSBTdG9tcC5jbGllbnQobXFVcmwpO1xyXG5cdFx0dGhpcy53ZWJzb2NrZXQuaGVhcnRiZWF0LmluY29taW5nID0gMDtcclxuXHRcdHNlbGYuZXhjaGFuZ2UgPSBcIi9leGNoYW5nZS9cIiArICBzZWxmLm9wdGlvbnMuYXBpVG9rZW4uYXBwX2lkO1xyXG5cdFx0Y29uc29sZS5sb2coXCJleGNoYW5nZVwiLCBzZWxmLmV4Y2hhbmdlKVxyXG5cdFx0dGhpcy53ZWJzb2NrZXQuY29ubmVjdChcclxuXHRcdFx0c2VsZi5vcHRpb25zLmFwaVRva2VuLmFwaV90b2tlbiwgXHJcblx0XHRcdFwidWlcIiwgXHJcblx0XHRcdGZ1bmN0aW9uIChmcmFtZSl7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJNUSBjb25uZWN0XCIsIGZyYW1lLCBzZWxmLndlYnNvY2tldCwgdGhpcywgc2VsZik7XHJcblx0XHRcdFx0c2VsZi5zb2NrZXRTZXNzaW9uID0gZnJhbWUuaGVhZGVycy5zZXNzaW9uO1xyXG5cdFx0XHRcdHNlbGYuZXhjaGFuZ2UgPSBcIi9leGNoYW5nZS9cIiArICBzZWxmLm9wdGlvbnMuYXBpVG9rZW4uYXBwX2lkO1xyXG5cdFx0XHRcdHNlbGYud2Vic29ja2V0LnN1YnNjcmliZShzZWxmLmV4Y2hhbmdlLCBmdW5jdGlvbihtZXNzYWdlKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIm1xIFwiLCBtZXNzYWdlKTtcclxuXHRcdFx0XHRcdGlmIChtZXNzYWdlLmhlYWRlcnNbXCJ0b3BpY1wiXSlcclxuXHRcdFx0XHRcdFx0bWVzc2FnZS5oZWFkZXJzW1widG9waWNcIl0gPSBtZXNzYWdlLmhlYWRlcnNbXCJ0b3BpY1wiXS5yZXBsYWNlKG5ldyBSZWdFeHAoXCJcXFxcY1wiLFwiZ1wiKSxcIjpcIik7XHJcblx0XHRcdFx0XHRpZiAobWVzc2FnZS5jb21tYW5kPT1cIkNPTk5FQ1RFRFwiKXtcclxuXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlIGlmIChtZXNzYWdlLmhlYWRlcnNbXCJ0b3BpY1wiXSA9PSBcInBpbmdcIilcclxuXHRcdFx0XHRcdFx0c2VsZi5vblBpbmcobWVzc2FnZSk7XHJcblx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRcdHNlbGYub25NZXNzYWdlKG1lc3NhZ2UpO1xyXG5cdFx0XHRcdH0sIHsgfSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHNlbGYub25NUUVycm9yLCBzZWxmLm9wdGlvbnMuYXBpVG9rZW4uYXBpX2NoYW5uZWwpO1xyXG5cdH1cclxuXHJcblx0XHJcblx0b25QaW5nKG1lc3NhZ2Upe1xyXG5cdFx0Y29uc29sZS5sb2coXCJvbnBpbmdcIiwgdGhpcy5vcHRpb25zLmFwcElkLCBtZXNzYWdlLCApO1xyXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0aWYgKCF0aGlzLmlzQ29ubmVjdGVkICYmIG1lc3NhZ2UuaGVhZGVyc1tcImNvbm5lY3Rpb25faWRcIl09PSBzZWxmLm9wdGlvbnMuYXBpVG9rZW4uYXBwX2lkKXtcclxuXHRcdFx0dGhpcy5vbk9wZW4obWVzc2FnZSk7XHJcblx0XHRcdHRoaXMud2Vic29ja2V0LnNlbmQoc2VsZi5leGNoYW5nZSwgeyB0b3BpYzpcInNlc3Npb246bmV3XCIsIHJvdXRlcl9pZDptZXNzYWdlLmhlYWRlcnNbXCJyb3V0ZXJfaWRcIl0sIHNlc3Npb25faWQ6dGhpcy5zb2NrZXRTZXNzaW9ufSwgXCJ7fVwiKVx0XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRhdXRoZW50aWNhdGUodXNlck5hbWUsIHBhc3N3b3JkKXtcclxuXHRcdHRoaXMub3B0aW9ucy51c2VyTmFtZSA9IHVzZXJOYW1lO1xyXG5cdFx0dGhpcy5vcHRpb25zLnBhc3N3b3JkID0gcGFzc3dvcmQ7XHJcblx0XHRpZiAodGhpcy5vcHRpb25zLm9uQXV0aGVudGljYXRlU3RhcnQpXHJcblx0XHRcdHRoaXMub3B0aW9ucy5vbkF1dGhlbnRpY2F0ZVN0YXJ0LmNhbGwodGhpcy5vcHRpb25zLnRhcmdldFNjb3BlKTtcclxuXHRcdHZhciBjbWQ9e2lkOnRoaXMubWVzc2FnZUlkKyssXCJtZXNzYWdlVHlwZVwiOlwiYXV0aGVudGljYXRlXCIsXCJ1c2VyTmFtZVwiOnRoaXMub3B0aW9ucy51c2VyTmFtZSwgXCJwYXNzd29yZFwiOiB0aGlzLm9wdGlvbnMucGFzc3dvcmR9O1xyXG5cdFx0dGhpcy53ZWJzb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeShjbWQpKTtcclxuXHR9XHJcblxyXG5cdGxvZ29mZigpe1xyXG5cdFx0Ly90aGlzLm9wdGlvbnMudXNlck5hbWUgPSB0aGlzLmFsbG93QW5vbnltb3VzID8gXCJhbm9ueW1vdXNcIiA6IG51bGw7XHJcblx0XHQvL3RoaXMub3B0aW9ucy5wYXNzd29yZCA9IG51bGw7XHJcblxyXG5cdFx0dmFyIGNtZD17aWQ6dGhpcy5tZXNzYWdlSWQrKyxcIm1lc3NhZ2VUeXBlXCI6XCJsb2dvZmZcIiwgXCJzZXNzaW9uXCI6IHRoaXMuc2Vzc2lvbklkfTtcclxuXHRcdHRoaXMuc2Vzc2lvbklkID0gbnVsbDtcclxuXHRcdHRoaXMud2Vic29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoY21kKSk7XHJcblx0fVxyXG5cclxuXHRvbk1lc3NhZ2UoZXZ0KXtcclxuXHRcdGNvbnNvbGUubG9nKFwib24gbVwiLGV2dCk7XHJcblx0XHR2YXIgbWVzc2FnZT1KU09OLnBhcnNlKGV2dC5ib2R5KTtcclxuXHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdHZhciB0b3BpYyA9IGV2dC5oZWFkZXJzW1widG9waWNcIl07XHJcblxyXG5cdFx0aWYgKHRvcGljPT1cImF1dGhlbnRpY2F0ZVwiKXtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJhdXRoZW50aWNhdGVcIik7XHJcblx0XHRcdHRoaXMuZG9BdXRoZW50aWNhdGUgPSB0cnVlO1xyXG5cdFx0XHRpZiAodGhpcy5vcHRpb25zLnVzZXJOYW1lKVxyXG5cdFx0XHRcdHRoaXMuYXV0aGVudGljYXRlKHRoaXMub3B0aW9ucy51c2VyTmFtZSwgdGhpcy5vcHRpb25zLnBhc3N3b3JkKVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0dGhpcy5vcHRpb25zLm9uQXV0aGVudGljYXRlLmNhbGwodGhpcy5vcHRpb25zLnRhcmdldFNjb3BlLGV2dCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmICh0b3BpYz09XCJhdXRoZW50aWNhdGlvbl9mYWlsZWRcIil7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiYXV0aGVudGljYXRpb24gZmFpbGVkXCIsIHRoaXMub3B0aW9ucy51c2VyTmFtZSk7XHJcblx0XHRcdGlmICh0aGlzLm9wdGlvbnMudXNlck5hbWUgPT0gXCJhbm9ueW1vdXNcIikge1xyXG5cdFx0XHRcdHRoaXMuYWxsb3dBbm9ueW1vdXMgPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLm9wdGlvbnMudXNlck5hbWUgPSBudWxsO1xyXG5cdFx0XHRcdHRoaXMub3B0aW9ucy5wYXNzd29yZCA9IG51bGw7XHJcblx0XHRcdFx0dGhpcy5zZXNzaW9uSWQgPSBudWxsO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwieFwiLCBzZWxmLm9wdGlvbnMpXHJcblx0XHRcdFx0aWYgKHNlbGYub3B0aW9ucy5vbkxvZ09mZil7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIngxXCIpXHJcblx0XHRcdFx0XHRzZWxmLm9wdGlvbnMub25Mb2dPZmYuY2FsbChzZWxmLm9wdGlvbnMudGFyZ2V0U2NvcGUsZXZ0KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZVxyXG5cdFx0XHRcdHRoaXMub3B0aW9ucy5vbkF1dGhlbnRpY2F0ZUZhaWxlZC5jYWxsKHRoaXMub3B0aW9ucy50YXJnZXRTY29wZSxldnQpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAodG9waWM9PVwic2Vzc2lvbl9hdXRoZW50aWNhdGVkXCIpe1xyXG5cdFx0XHR2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcblx0XHRcdFxyXG4gICAgICAgIFx0ZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgKDIqNjAqNjAqMTAwMCkpO1xyXG4gICAgICAgIFx0dmFyIGV4cGlyZXMgPSBcIjsgZXhwaXJlcz1cIiArIGRhdGUudG9VVENTdHJpbmcoKTtcclxuXHRcdFx0dGhpcy5zZXNzaW9uSWQgPSBtZXNzYWdlLnNlc3Npb247XHJcblx0XHRcdGRvY3VtZW50LmNvb2tpZSA9IFwia2VydmlzZXNzaW9uXCIgKyBcIj1cIiArIG1lc3NhZ2Uuc2Vzc2lvbiArIGV4cGlyZXMgKyBcIjsgcGF0aD0vXCI7XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0XHRcdGlmIChzZWxmLm9wdGlvbnMub25PcGVuKVxyXG5cdFx0XHRcdFx0c2VsZi5vcHRpb25zLm9uT3Blbi5jYWxsKHNlbGYub3B0aW9ucy50YXJnZXRTY29wZSwgc2VsZi5maXJzdE9uT3BlbixldnQpO1xyXG5cdFx0XHRcdFx0c2VsZi5maXJzdE9uT3BlbiA9IGZhbHNlO1xyXG5cdFx0XHR9LCAxMDBcclxuXHRcdFx0KTtcclxuXHRcdFx0XHJcblx0XHR9IGVsc2UgaWYgKHRvcGljID09IFwic2Vzc2lvbl9sb2dvZmZcIil7IFxyXG5cdFx0XHRpZiAoc2VsZi5vcHRpb25zLm9uTG9nT2ZmKVxyXG5cdFx0XHRcdHNlbGYub3B0aW9ucy5vbkxvZ09mZi5jYWxsKHNlbGYub3B0aW9ucy50YXJnZXRTY29wZSxldnQpO1xyXG5cdFx0XHRpZiAodGhpcy5hbGxvd0Fub255bW91cyAmJiB0aGlzLm9wdGlvbnMudXNlck5hbWUgIT0gXCJhbm9ueW1vdXNcIil7XHJcblx0XHRcdFx0dGhpcy5hdXRoZW50aWNhdGUoXCJhbm9ueW1vdXNcIiwgbnVsbClcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZWxmLm9wdGlvbnMudXNlck5hbWUgPSBudWxsO1xyXG5cdFx0XHRcdHNlbGYub3B0aW9ucy5wYXNzd29yZCA9IG51bGw7XHJcblx0XHRcdFx0c2VsZi5zZXNzaW9uSWQgPSBudWxsO1xyXG5cdFx0XHRcclxuXHRcdFx0XHRcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIGlmIChldnQuaGVhZGVyc1tcInR5cGVcIl09PVwicXVlcnlfcmVzcG9uc2VcIil7XHJcblx0XHRcdHRoaXMuaGFuZGxlUlBDUmVzcG9uc2Uoe2lkOmV2dC5oZWFkZXJzW1wicXVlcnlfaWRcIl0sIHJlc3BvbnNlOm1lc3NhZ2V9KTtcclxuXHRcdH1lbHNlIGlmIChldnQuaGVhZGVyc1tcInR5cGVcIl09PVwiZXZlbnRcIil7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiZVwiLCBldnQpO1xyXG5cdFx0XHR2YXIgdG9waWNfdGFnPSBldnQuaGVhZGVyc1tcInRvcGljXCJdLnNwbGl0KFwiOlwiKTtcclxuXHRcdFx0XHJcblx0XHRcdHRoaXMuaGFuZGxlRXZlbnQoe2V2ZW50OnRvcGljX3RhZ1sxXSwgaWQ6dG9waWNfdGFnWzJdLCBhcmdzOm1lc3NhZ2UuYXJnc30pO1xyXG5cdFx0fWVsc2UgaWYgKG1lc3NhZ2UubWVzc2FnZVR5cGU9PVwiY29tbWFuZFwiKVxyXG5cdFx0XHR0aGlzLmhhbmRsZUNvbW1hbmQobWVzc2FnZSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdGNvbnNvbGUubG9nKFwiS2Vydmkgc3BpbmUgbWVzc2FnZSB1bmtub3duXCIsdGhpcy5ycGNRdWV1ZSxldnQpO1xyXG5cdH1cclxuXHJcblx0b25FcnJvcihldnQpe1xyXG5cdFx0Y29uc29sZS5sb2coXCJLZXJ2aSBvbiBlcnJvclwiLGV2dCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgYWRkQ29tbWFuZEhhbmRsZXIgKGNvbW1hbmQ6c3RyaW5nLGNhbGxiYWNrKXtcclxuXHRcdHRoaXMuY29tbWFuZEhhbmRsZXJzLnB1c2goe2NvbW1hbmQ6Y29tbWFuZCxjYWxsYmFjazpjYWxsYmFja30pO1xyXG5cdFx0dmFyIGNtZD17aWQ6dGhpcy5tZXNzYWdlSWQrKyxcIm1lc3NhZ2VUeXBlXCI6XCJyZWdpc3RlckNvbW1hbmRIYW5kbGVyXCIsXCJjb21tYW5kXCI6Y29tbWFuZH07XHJcblx0XHQvL3RoaXMud2Vic29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoY21kKSk7XHJcblx0XHR0aGlzLndlYnNvY2tldC5zZW5kKFxyXG5cdFx0XHR0aGlzLmV4Y2hhbmdlLFxyXG5cdFx0XHR7IHRvcGljOlwicmVnaXN0ZXJDb21tYW5kSGFuZGxlclwiLCByb3V0ZXJfaWQ6dGhpcy5zb2NrZXRTZXNzaW9ufSxcclxuXHRcdFx0SlNPTi5zdHJpbmdpZnkoY21kKVxyXG5cdFx0KVx0XHJcblx0fTtcclxuXHJcblx0cHVibGljIGFkZFF1ZXJ5SGFuZGxlcihxdWVyeTpzdHJpbmcsY2FsbGJhY2spe1xyXG5cdFx0dGhpcy5xdWVyeUhhbmRsZXJzLnB1c2goe3F1ZXJ5OnF1ZXJ5LGNhbGxiYWNrOmNhbGxiYWNrfSk7XHJcblx0XHR2YXIgY21kPXtpZDp0aGlzLm1lc3NhZ2VJZCsrLFwibWVzc2FnZVR5cGVcIjpcInJlZ2lzdGVyUXVlcnlIYW5kbGVyXCIsXCJxdWVyeVwiOnF1ZXJ5fTtcclxuXHRcdHRoaXMud2Vic29ja2V0LnNlbmQoXHJcblx0XHRcdHRoaXMuZXhjaGFuZ2UsXHJcblx0XHRcdHsgdG9waWM6XCJyZWdpc3RlclF1ZXJ5SGFuZGxlclwiLCByb3V0ZXJfaWQ6dGhpcy5zb2NrZXRTZXNzaW9ufSxcclxuXHRcdFx0SlNPTi5zdHJpbmdpZnkoY21kKVxyXG5cdFx0KVxyXG5cdH07XHJcblxyXG5cdHB1YmxpYyBhZGRFdmVudEhhbmRsZXI9ZnVuY3Rpb24oZXZlbnROYW1lOnN0cmluZyxpZDpzdHJpbmcsY2FsbGJhY2spe1xyXG5cdFx0aWYgKGlkKVxyXG5cdFx0XHR0aGlzLmV2ZW50SGFuZGxlcnMucHVzaCh7XCJldmVudE5hbWVcIjpldmVudE5hbWUrXCIvXCIraWQsY2FsbGJhY2s6Y2FsbGJhY2t9KTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5ldmVudEhhbmRsZXJzLnB1c2goe1wiZXZlbnROYW1lXCI6ZXZlbnROYW1lLGNhbGxiYWNrOmNhbGxiYWNrfSk7XHJcblx0XHR2YXIgY21kPXtpZDp0aGlzLm1lc3NhZ2VJZCsrLFwibWVzc2FnZVR5cGVcIjpcInJlZ2lzdGVyRXZlbnRIYW5kbGVyXCIsXCJldmVudFwiOmV2ZW50TmFtZSxcImV2ZW50SWRcIjppZH07XHJcblx0XHR0aGlzLndlYnNvY2tldC5zZW5kKFxyXG5cdFx0XHR0aGlzLmV4Y2hhbmdlLFxyXG5cdFx0XHR7IHRvcGljOlwicmVnaXN0ZXJFdmVudEhhbmRsZXJcIiwgcm91dGVyX2lkOnRoaXMuc29ja2V0U2Vzc2lvbn0sXHJcblx0XHRcdEpTT04uc3RyaW5naWZ5KGNtZClcclxuXHRcdClcclxuXHR9O1xyXG5cclxuXHRwdWJsaWMgc2VuZENvbW1hbmQoY29tbWFuZDpzdHJpbmcsLi4ucDphbnlbXSl7XHJcblx0XHRjb25zb2xlLmxvZyhcInNlY1wiLGFyZ3VtZW50cyk7XHJcblx0XHR2YXIgYXJncz1bXTtcclxuXHRcdFxyXG5cdFx0dmFyIGNhbGxiYWNrPW51bGw7XHJcblxyXG5cdFx0Zm9yICh2YXIgaT0wOyhpPHAubGVuZ3RoKTtpKyspe1xyXG5cdFx0XHRpZiAocFtpXSBpbnN0YW5jZW9mIEZ1bmN0aW9uKVxyXG5cdFx0XHRcdGNhbGxiYWNrPXBbaV07XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRhcmdzLnB1c2gocFtpXSk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8qaWYgKHAubGVuZ3RoPjEpe1xyXG5cdFx0XHR2YXIgYXJnT2Zmc2V0PTE7XHJcblx0XHRcdGlmICggY2FsbGJhY2sgJiYgY2FsbGJhY2sgaW5zdGFuY2VvZiBGdW5jdGlvbiApXHJcblx0XHRcdFx0YXJnT2Zmc2V0Kz0xO1xyXG5cdFx0XHRmb3IgKHZhciBpPWFyZ09mZnNldDsoaTxhcmd1bWVudHMubGVuZ3RoKTtpKyspe1xyXG5cdFx0XHRcdGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9Ki9cclxuXHRcdHZhciBjbWQ9e2lkOnRoaXMubWVzc2FnZUlkKyssXCJhcmdzXCI6YXJncywga3dhcmdzOnt9fTtcclxuXHRcdFxyXG5cdFx0aWYgKGNhbGxiYWNrICYmIGNhbGxiYWNrIGluc3RhbmNlb2YgRnVuY3Rpb24pXHJcblx0XHRcdHRoaXMuYWRkUlBDQ2FsbGJhY2soY21kLmlkLnRvU3RyaW5nKCksY2FsbGJhY2ssIG51bGwsIDApO1xyXG5cdFx0Y29uc29sZS5sb2coXCJzZW5kQ29tbWFuZFwiLHRoaXMsY21kKTtcclxuXHRcdHRoaXMud2Vic29ja2V0LnNlbmQoXHJcblx0XHRcdHRoaXMuZXhjaGFuZ2UsXHJcblx0XHRcdHsgdG9waWM6XCJjb21tYW5kOlwiKyBjb21tYW5kLCByb3V0ZXJfaWQ6dGhpcy5zb2NrZXRTZXNzaW9ufSxcclxuXHRcdFx0SlNPTi5zdHJpbmdpZnkoY21kKVxyXG5cdFx0KVxyXG5cdH07XHJcblxyXG5cdHB1YmxpYyBzZW5kUXVlcnkocXVlcnksLi4ucDphbnlbXSl7XHJcblx0XHR2YXIgYXJncz1bXTtcclxuXHRcdHZhciBjYWxsYmFjaz1udWxsO1xyXG5cdFx0dmFyIGNhbGxiYWNrVGltZW91dD1udWxsO1xyXG5cdFx0dmFyIHRpbWVvdXQgPSAxMDAwMDtcclxuXHRcdGZvciAodmFyIGk9MDsoaTxwLmxlbmd0aCk7aSsrKXtcclxuXHRcdFx0aWYgKHBbaV0gaW5zdGFuY2VvZiBGdW5jdGlvbilcclxuXHRcdFx0XHRpZiAoIWNhbGxiYWNrKSBcclxuXHRcdFx0XHRcdGNhbGxiYWNrPXBbaV07XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0Y2FsbGJhY2tUaW1lb3V0ID0gcFtpXTtcclxuXHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRpZiAoY2FsbGJhY2tUaW1lb3V0KVxyXG5cdFx0XHRcdFx0dGltZW91dCA9IHBbaV1cclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRhcmdzLnB1c2gocFtpXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdCBcclxuXHRcdHZhciBjbWQ9e2lkOnRoaXMubWVzc2FnZUlkKyssXCJtZXNzYWdlVHlwZVwiOlwicXVlcnlcIixcInF1ZXJ5XCI6cXVlcnksXCJhcmdzXCI6YXJncywga3dhcmdzOltdLCBxdHM6MH07XHJcblx0XHR0aGlzLmFkZFJQQ0NhbGxiYWNrKGNtZC5pZC50b1N0cmluZygpLGNhbGxiYWNrLCBjYWxsYmFja1RpbWVvdXQsIHRpbWVvdXQpO1xyXG5cdFx0Y29uc29sZS5sb2coXCJzZW5kUXVlcnlcIiwgY2FsbGJhY2ssY21kKTtcclxuXHRcdC8vdGhpcy53ZWJzb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeShjbWQpKTtcclxuXHRcdHRoaXMud2Vic29ja2V0LnNlbmQoXHJcblx0XHRcdHRoaXMuZXhjaGFuZ2UsXHJcblx0XHRcdHsgdG9waWM6XCJxdWVyeTpcIiArIHF1ZXJ5LCBxdHM6MCwgcXVlcnlfaWQ6IGNtZC5pZC50b1N0cmluZygpLCByb3V0ZXJfaWQ6dGhpcy5zb2NrZXRTZXNzaW9uLCByZXNwb25zZV9hZGRyZXNzOnRoaXMuc29ja2V0U2Vzc2lvbn0sXHJcblx0XHRcdEpTT04uc3RyaW5naWZ5KGNtZClcclxuXHRcdClcclxuXHR9O1xyXG5cclxuXHRwdWJsaWMgdHJpZ2dlckV2ZW50KGV2ZW50TmFtZTpzdHJpbmcsaWQ6c3RyaW5nKXtcclxuXHRcdHZhciBlPXtpZDp0aGlzLm1lc3NhZ2VJZCsrLFwibWVzc2FnZVR5cGVcIjpcImV2ZW50XCIsXCJldmVudFwiOmV2ZW50TmFtZSxcImFyZ3NcIjphcmd1bWVudHN9O1xyXG5cdFx0dGhpcy53ZWJzb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeShlKSk7XHJcblx0fTtcclxufSIsIlxyXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkTGlua3tcclxuICAgIGRhc2hib2FyZElkOnN0cmluZztcclxuICAgIHBhbmVsSWQ6c3RyaW5nO1xyXG4gICAgcGFuZWxOYW1lOnN0cmluZztcclxuICAgIGNvbXBvbmVudDpJQ29tcG9uZW50O1xyXG4gICAgcGFyYW1ldGVyczphbnk7XHJcblxyXG4gICAgLypjb25zdHJ1Y3RvcihkYXNoYm9hcmRJZDpzdHJpbmcsIHNlY3Rpb25JZDpzdHJpbmcsIHNlY3Rpb25OYW1lOnN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5kYXNoYm9hcmRJZCA9IGRhc2hib2FyZElkO1xyXG4gICAgICAgIHRoaXMuc2VjdGlvbklkID0gc2VjdGlvbklkO1xyXG4gICAgICAgIHRoaXMuc2VjdGlvbk5hbWUgPSBzZWN0aW9uTmFtZTtcclxuICAgIH0qL1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbXBvbmVudDpJQ29tcG9uZW50LCBtZXNzYWdlOmFueSl7XHJcbiAgICAgICAgdGhpcy5kYXNoYm9hcmRJZCA9IG1lc3NhZ2UuZGFzaGJvYXJkSWQ7XHJcbiAgICAgICAgdGhpcy5wYW5lbElkID0gbWVzc2FnZS5zZWN0aW9uSWQ7XHJcbiAgICAgICAgdGhpcy5wYW5lbE5hbWUgPSBtZXNzYWdlLnNlY3Rpb25OYW1lO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xyXG4gICAgICAgIHRoaXMucGFyYW1ldGVycyA9IG1lc3NhZ2UucGFyYW1ldGVycztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ29tcG9uZW50IHtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBjb21wb25lbnRUeXBlOiBzdHJpbmc7XHJcbiAgICB1aTphbnk7XHJcbiAgICBkYXNoYm9hcmRzIDogRGFzaGJvYXJkTGlua1tdO1xyXG5cclxuICAgIC8vdXBkYXRlUmVmZXJlbmNlcyhrZXJ2aVNlcnZpY2U6S2VydmlCYXNlU2VydmljZSk7XHJcbiAgICAvL3JlbG9hZChjb21wb25lbnQ6SUNvbXBvbmVudCk7XHJcbiAgICAvL3JlbW92ZVJlZmVyZW5jZXMoY29tcG9uZW50czpJQ29tcG9uZW50W10pO1xyXG59IiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCBUaW0gV2VudHpsYXVcclxuLy8gTGljZW5zZWQgdW5kZXIgTUlUXHJcbmltcG9ydCB7IElDb21wb25lbnQsIERhc2hib2FyZExpbmsgfSBmcm9tIFwiLi9JQ29tcG9uZW50Lm1vZGVsXCJcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEtlcnZpQmFzZVNlcnZpY2UgfSBmcm9tICcuLi9rZXJ2aS1qcy5zZXJ2aWNlJ1xyXG5kZWNsYXJlIHZhciBRdHk6YW55O1xyXG5cclxuZXhwb3J0IGNsYXNzIEtlcnZpVmFsdWUgaW1wbGVtZW50cyBJQ29tcG9uZW50e1xyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBjb21wb25lbnRUeXBlID0gXCJLZXJ2aVZhbHVlXCJcclxuICAgIHB1YmxpYyB0eXBlTmFtZTpzdHJpbmcgPSBudWxsOyAgICBcclxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xyXG4gICAgcHVibGljIGRhc2hib2FyZHM6IERhc2hib2FyZExpbmtbXSA9IFtdO1xyXG4gICAgcHVibGljIGlzSW5wdXQ6Ym9vbGVhbjtcclxuICAgIHB1YmxpYyBjb21tYW5kOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgdmFsdWVUUzpEYXRlO1xyXG5cclxuICAgIHB1YmxpYyB1aSA9IHtcclxuICAgICAgICB0eXBlOiBcIlwiLFxyXG4gICAgICAgIG9yaWVudGF0aW9uOiBcIlwiLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEtlcnZpVmFsdWVUeXBlPHZhbHVlVHlwZT4gZXh0ZW5kcyBLZXJ2aVZhbHVle1xyXG4gICAgXHJcbiAgICBwdWJsaWMgdmFsdWUkOiBCZWhhdmlvclN1YmplY3Q8dmFsdWVUeXBlPjtcclxuICAgIHByb3RlY3RlZCBrZXJ2aVNlcnZpY2U6S2VydmlCYXNlU2VydmljZSA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZTphbnksIGtlcnZpU2VydmljZTpLZXJ2aUJhc2VTZXJ2aWNlKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMua2VydmlTZXJ2aWNlID0ga2VydmlTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMudmFsdWUkPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHZhbHVlVHlwZT4obWVzc2FnZS52YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbWVzc2FnZS5uYW1lO1xyXG4gICAgICAgIHRoaXMuaXNJbnB1dCA9IG1lc3NhZ2UuaXNJbnB1dDtcclxuICAgICAgICB0aGlzLnVpID0gbWVzc2FnZS51aTtcclxuICAgICAgICB0aGlzLmNvbW1hbmQgPSBtZXNzYWdlLmNvbW1hbmQ7XHJcbiAgICAgICAgdGhpcy5pZCA9IG1lc3NhZ2UuaWQ7XHJcbiAgICAgICAgdGhpcy51aVtcInR5cGVcIl0gPSBtZXNzYWdlLmNvbXBvbmVudFR5cGU7XHJcbiAgICAgICAgdGhpcy51aVtcIm9yaWVudGF0aW9uXCJdID0gbWVzc2FnZS5vcmllbnRhdGlvbjtcclxuICAgICAgICB0aGlzLnVpW1widmlzaWJsZVwiXSA9IG1lc3NhZ2UudmlzaWJsZTtcclxuICAgICAgICBcclxuICAgICAgICBmb3IgKHZhciBwcm9wIGluIG1lc3NhZ2UudWkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudWlbcHJvcF0gIT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgdGhpcy51aVtwcm9wXSA9IG1lc3NhZ2UudWlbcHJvcF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBkYXNoYm9hcmRMaW5rIG9mIG1lc3NhZ2UuZGFzaGJvYXJkTGlua3Mpe1xyXG4gICAgICAgICAgICB0aGlzLmRhc2hib2FyZHMucHVzaCggbmV3IERhc2hib2FyZExpbmsodGhpcywgZGFzaGJvYXJkTGluaykpOyBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHZhbHVlKCl7XHJcbiAgICAgICBcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiZ3ZcIiwgdGhpcy5pZCwgdGhpcy52YWx1ZSQudmFsdWUpXHJcbiAgICAgICByZXR1cm4gdGhpcy52YWx1ZSQudmFsdWUgXHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHZhbHVlKHZhbHVlOnZhbHVlVHlwZSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzdlwiLCB0aGlzLmlkKTtcclxuICAgICAgICB0aGlzLnZhbHVlJC5uZXh0KHZhbHVlKTsgXHJcbiAgICAgICAgdGhpcy5rZXJ2aVNlcnZpY2Uuc3BpbmUuc2VuZENvbW1hbmQodGhpcy5jb21tYW5kLCB2YWx1ZSk7XHJcbiAgICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBnZXREZWZhdWx0VmFsdWUoKTp2YWx1ZVR5cGU7XHJcbiAgICBwdWJsaWMgc2V0KHY6dmFsdWVUeXBlLCBub3RpZnk6Ym9vbGVhbj10cnVlKXtcclxuICAgICAgICB0aGlzLnZhbHVlJC5uZXh0KHYpO1xyXG4gICAgICAgIGlmIChub3RpZnkpXHJcbiAgICAgICAgICAgIHRoaXMua2VydmlTZXJ2aWNlLnNwaW5lLnNlbmRDb21tYW5kKHRoaXMuY29tbWFuZCwgdik7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZW51bSBWYWx1ZVJhbmdlVHlwZSB7bm9ybWFsLCB3YXJuaW5nLCBlcnJvcn07XHJcblxyXG5leHBvcnQgY2xhc3MgVmFsdWVSYW5nZXtcclxuICAgIFxyXG4gICAgcHVibGljIHN0YXJ0Om51bWJlciA9IG51bGw7XHJcbiAgICBwdWJsaWMgZW5kOm51bWJlciA9IG51bGw7XHJcbiAgICBwdWJsaWMgdHlwZTpWYWx1ZVJhbmdlVHlwZSA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IocmFuZ2U6YW55KXtcclxuICAgICAgICB0aGlzLnN0YXJ0ID0gcmFuZ2VbXCJzdGFydFwiXTtcclxuICAgICAgICB0aGlzLmVuZCA9IHJhbmdlW1wiZW5kXCJdXHJcbiAgICAgICAgaWYgKHJhbmdlW1widHlwZVwiXSA9PSBcIndhcm5pbmdcIilcclxuICAgICAgICAgICAgdGhpcy50eXBlID0gVmFsdWVSYW5nZVR5cGUud2FybmluZztcclxuICAgICAgICBlbHNlIGlmIChyYW5nZVtcInR5cGVcIl0gPT0gXCJlcnJvclwiKVxyXG4gICAgICAgICAgICB0aGlzLnR5cGUgPSBWYWx1ZVJhbmdlVHlwZS5lcnJvcjtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IFZhbHVlUmFuZ2VUeXBlLm5vcm1hbDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgS2VydmlFbnVtT3B0aW9uTW9kZWx7XHJcbiAgICBwdWJsaWMgdmFsdWU6c3RyaW5nO1xyXG4gICAgcHVibGljIHRleHQ6c3RyaW5nO1xyXG4gICAgcHVibGljIHNlbGVjdGVkJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZU9wdGlvbjphbnkpe1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSBtZXNzYWdlT3B0aW9uLnZhbHVlO1xyXG4gICAgICAgIHRoaXMudGV4dCA9IG1lc3NhZ2VPcHRpb24udGV4dDtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkJC5uZXh0KG1lc3NhZ2VPcHRpb24uc2VsZWN0ZWQpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlUmVmZXJlbmNlcygpe307XHJcbiAgICByZWxvYWQoY29tcG9uZW50OklDb21wb25lbnQpe307XHJcbiAgICByZW1vdmVSZWZlcmVuY2VzKGNvbXBvbmVudHM6SUNvbXBvbmVudFtdKXt9O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2VsZWN0VmFsdWUgZXh0ZW5kcyBLZXJ2aVZhbHVlVHlwZTxzdHJpbmdbXT57XHJcbiAgICBwdWJsaWMgb3B0aW9uczpLZXJ2aUVudW1PcHRpb25Nb2RlbFtdID0gW107XHJcbiAgICBwdWJsaWMgbGFzdFNlbGVjdGVkJDpCZWhhdmlvclN1YmplY3Q8S2VydmlFbnVtT3B0aW9uTW9kZWw+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxLZXJ2aUVudW1PcHRpb25Nb2RlbD4obnVsbCk7IFxyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvciAobWVzc2FnZTphbnksIGtlcnZpU2VydmljZTpLZXJ2aUJhc2VTZXJ2aWNlKXtcclxuICAgICAgICBzdXBlcihtZXNzYWdlLCBrZXJ2aVNlcnZpY2UpO1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBbXVxyXG4gICAgICAgIFxyXG4gICAgICAgIGZvciAobGV0IG9wdGlvbiBvZiBtZXNzYWdlLm9wdGlvbnMpe1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMucHVzaCggbmV3IEtlcnZpRW51bU9wdGlvbk1vZGVsKG9wdGlvbikgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2VsZWN0T3B0aW9ucyh0aGlzLnZhbHVlJC52YWx1ZSk7XHJcbiAgICAgICAgdGhpcy52YWx1ZSQuc3Vic2NyaWJlKGZ1bmN0aW9uKHYpe1xyXG4gICAgICAgICAgICBzZWxmLnNlbGVjdE9wdGlvbnModik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldERlZmF1bHRWYWx1ZSgpOnN0cmluZ1tde1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIHB1YmxpYyBzZWxlY3RPcHRpb25zKHNlbGVjdGVkT3B0aW9uczphbnkpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic29jXCIpO1xyXG4gICAgICAgIGlmICghc2VsZWN0ZWRPcHRpb25zKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgZm9yIChsZXQgb3B0aW9uIG9mIHRoaXMub3B0aW9ucyl7XHJcbiAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCQubmV4dChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IHNlbGVjdGVkT3B0aW9uIG9mIHNlbGVjdGVkT3B0aW9ucyl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic29cIiwgc2VsZWN0ZWRPcHRpb24pXHJcbiAgICAgICAgICAgIGZvcihsZXQgb3B0aW9uIG9mIHRoaXMub3B0aW9ucyl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNveFwiLCBvcHRpb24gKVxyXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbi52YWx1ZSA9PSBzZWxlY3RlZE9wdGlvbil7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkJC5uZXh0KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFNlbGVjdGVkJC5uZXh0KG9wdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJvc1wiLCBvcHRpb24udGV4dCwgb3B0aW9uLnNlbGVjdGVkJC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBOdW1iZXJWYWx1ZSBleHRlbmRzIEtlcnZpVmFsdWVUeXBlPG51bWJlcj4ge1xyXG4gICAgcHVibGljIHVuaXQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBxdHlVbml0RnJvbTpzdHJpbmc7XHJcbiAgICBwdWJsaWMgcXR5VW5pdFRvOnN0cmluZyA9IG51bGw7XHJcbiAgICBwdWJsaWMgbWF4VmFsdWU6IG51bWJlcjtcclxuICAgIHB1YmxpYyBtaW5WYWx1ZTogbnVtYmVyO1xyXG4gICAgcHVibGljIHNwYXJrbGluZSQ6IEJlaGF2aW9yU3ViamVjdDxudW1iZXJbXT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PG51bWJlcltdPihbXSk7XHJcbiAgICBwdWJsaWMgcmFuZ2VzOiBWYWx1ZVJhbmdlW10gPSBbXTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0RGVmYXVsdFZhbHVlKCk6bnVtYmVye1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IGFueSwga2VydmlTZXJ2aWNlOktlcnZpQmFzZVNlcnZpY2UpIHtcclxuICAgICAgICBzdXBlcihtZXNzYWdlLCBrZXJ2aVNlcnZpY2UpO1xyXG4gICAgICAgIHRoaXMudW5pdCA9IG1lc3NhZ2UudW5pdDtcclxuICAgICAgICB0aGlzLnR5cGVOYW1lID0gXCJOdW1iZXJcIjtcclxuICAgIFxyXG4gICAgICAgIFx0XHJcbiAgICAgICAgdGhpcy5xdHlVbml0RnJvbSA9IG1lc3NhZ2UudW5pdDtcclxuICAgICAgICBpZiAodGhpcy51bml0ID09IFwiY1wiICYmIGtlcnZpU2VydmljZS5hcHBsaWNhdGlvbiQudmFsdWVbXCJkaXNwbGF5XCJdW1widW5pdF9zeXN0ZW1cIl1bXCJ0ZW1wZXJhdHVyZVwiXT09XCJGXCIpe1xyXG4gICAgICAgICAgICB0aGlzLnF0eVVuaXRGcm9tID0gXCJ0ZW1wQ1wiO1xyXG4gICAgICAgICAgICB0aGlzLnF0eVVuaXRUbyA9IFwidGVtcEZcIjtcclxuICAgICAgICAgICAgdGhpcy51bml0ID0gXCJGXCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAodmFyIHJhbmdlIG9mIG1lc3NhZ2UucmFuZ2VzKXtcclxuICAgICAgICAgICAgaWYgKHRoaXMucXR5VW5pdFRvKXtcclxuICAgICAgICAgICAgICAgIHZhciBxID0gbmV3IFF0eShyYW5nZVtcInN0YXJ0XCJdLCB0aGlzLnF0eVVuaXRGcm9tKTtcclxuICAgICAgICAgICAgICAgIHJhbmdlW1wic3RhcnRcIl0gPSBxLnRvKHRoaXMucXR5VW5pdFRvKS5zY2FsYXJcclxuICAgICAgICAgICAgICAgIHZhciBxID0gbmV3IFF0eShyYW5nZVtcImVuZFwiXSwgdGhpcy5xdHlVbml0RnJvbSk7XHJcbiAgICAgICAgICAgICAgICByYW5nZVtcImVuZFwiXSA9IHEudG8odGhpcy5xdHlVbml0VG8pLnNjYWxhclxyXG4gICAgICAgICAgICAgICAgdGhpcy5yYW5nZXMucHVzaChuZXcgVmFsdWVSYW5nZShyYW5nZSkpO1xyXG4gICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMucmFuZ2VzLnB1c2gobmV3IFZhbHVlUmFuZ2UocmFuZ2UpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMucXR5VW5pdFRvICYmIG1lc3NhZ2UubWF4VmFsdWUpe1xyXG4gICAgICAgICAgICB2YXIgcSA9IG5ldyBRdHkobWVzc2FnZS5tYXhWYWx1ZSwgdGhpcy5xdHlVbml0RnJvbSk7XHJcbiAgICAgICAgICAgIHRoaXMubWF4VmFsdWUgPSBxLnRvKHRoaXMucXR5VW5pdFRvKS5zY2FsYXI7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMubWF4VmFsdWUgPSBtZXNzYWdlLm1heFZhbHVlOyBcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucXR5VW5pdFRvICYmIG1lc3NhZ2UubWluVmFsdWUpe1xyXG4gICAgICAgICAgICB2YXIgcSA9IG5ldyBRdHkobWVzc2FnZS5taW5WYWx1ZSwgdGhpcy5xdHlVbml0RnJvbSk7XHJcbiAgICAgICAgICAgIHRoaXMubWluVmFsdWUgPSBxLnRvKHRoaXMucXR5VW5pdFRvKS5zY2FsYXI7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMubWluVmFsdWUgPSBtZXNzYWdlLm1pblZhbHVlOyBcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICB2YXIgc3BsID0gW11cclxuICAgICAgICBmb3IodmFyIHNwdiBvZiBtZXNzYWdlLnNwYXJrbGluZSl7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnF0eVVuaXRUbyl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNwdlwiLCBzcHYpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHEgPSBuZXcgUXR5KHNwdi52YWx1ZSwgdGhpcy5xdHlVbml0RnJvbSk7XHJcbiAgICAgICAgICAgICAgICAvL3Nwdi52YWx1ZSA9IHEudG8odGhpcy5xdHlVbml0VG8pLnNjYWxhcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzcGwucHVzaChzcHYpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3BhcmtsaW5lJC5uZXh0KHNwbCk7XHJcbiAgICAgICAgdGhpcy5zZXQobWVzc2FnZS52YWx1ZSwgZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCh2LCBub3RpZnk9dHJ1ZSl7XHJcbiAgICAgICAgdmFyIG5ld1ZhbHVlID0gdjtcclxuICAgICAgICBpZiAodGhpcy5xdHlVbml0VG8pe1xyXG4gICAgICAgICAgICB2YXIgcSA9IG5ldyBRdHkodiwgdGhpcy5xdHlVbml0RnJvbSk7XHJcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gcS50byh0aGlzLnF0eVVuaXRUbykuc2NhbGFyO1xyXG4gICAgICAgIH0gXHJcblxyXG4gICAgICAgIHRoaXMudmFsdWUkLm5leHQobmV3VmFsdWUpO1xyXG4gICAgICAgIGlmIChub3RpZnkpXHJcbiAgICAgICAgICAgIHRoaXMua2VydmlTZXJ2aWNlLnNwaW5lLnNlbmRDb21tYW5kKHRoaXMuY29tbWFuZCwgdik7XHJcbiAgICAgICAgdmFyIHNwbD10aGlzLnNwYXJrbGluZSQudmFsdWU7XHJcbiAgICAgICAgc3BsLnB1c2gobmV3VmFsdWUpO1xyXG4gICAgICAgIGlmIChzcGwubGVuZ3RoPjEwKVxyXG4gICAgICAgICAgICAgc3BsLnNoaWZ0KCk7XHJcbiAgICAgICAgdGhpcy5zcGFya2xpbmUkLm5leHQoc3BsKTsgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3RyaW5nVmFsdWUgZXh0ZW5kcyBLZXJ2aVZhbHVlVHlwZTxzdHJpbmc+IHtcclxuICAgIFxyXG4gICAgcHJvdGVjdGVkIGdldERlZmF1bHRWYWx1ZSgpOnN0cmluZ3tcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBhbnksIGtlcnZpU2VydmljZTpLZXJ2aUJhc2VTZXJ2aWNlKSB7XHJcbiAgICAgICAgc3VwZXIobWVzc2FnZSwga2VydmlTZXJ2aWNlKVxyXG4gICAgICAgIHRoaXMudHlwZU5hbWUgPSBcIlN0cmluZ1wiO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCb29sZWFuVmFsdWUgZXh0ZW5kcyBLZXJ2aVZhbHVlVHlwZTxib29sZWFuPiB7XHJcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBrZXJ2aVNlcnZpY2U6S2VydmlCYXNlU2VydmljZSkge1xyXG4gICAgICAgIHN1cGVyKG1lc3NhZ2UsIGtlcnZpU2VydmljZSlcclxuICAgICAgICB0aGlzLnR5cGVOYW1lID0gXCJCb29sZWFuXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldERlZmF1bHRWYWx1ZSgpOmJvb2xlYW57XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGF0ZVRpbWVWYWx1ZSBleHRlbmRzIEtlcnZpVmFsdWVUeXBlPERhdGU+IHtcclxuICAgIHB1YmxpYyBzdWJUeXBlOiBzdHJpbmc7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIGtlcnZpU2VydmljZTpLZXJ2aUJhc2VTZXJ2aWNlKSB7XHJcbiAgICAgICAgc3VwZXIobWVzc2FnZSwga2VydmlTZXJ2aWNlKVxyXG4gICAgICAgIHRoaXMuc3ViVHlwZSA9IG1lc3NhZ2UuaW5wdXRUeXBlO1xyXG4gICAgICAgIHRoaXMudHlwZU5hbWUgPSBcIkRhdGVUaW1lXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldERlZmF1bHRWYWx1ZSgpOkRhdGV7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCk7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbG9yVmFsdWUgZXh0ZW5kcyBLZXJ2aVZhbHVlVHlwZTxzdHJpbmc+IHtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZSwga2VydmlTZXJ2aWNlOktlcnZpQmFzZVNlcnZpY2UpIHtcclxuICAgICAgICBzdXBlcihtZXNzYWdlLCBrZXJ2aVNlcnZpY2UpXHJcbiAgICAgICAgdGhpcy50eXBlTmFtZSA9IFwiQ29sb3JcIjtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0RGVmYXVsdFZhbHVlKCk6c3RyaW5ne1xyXG4gICAgICAgIHJldHVybiBcIiNmZmZmZmZcIjtcclxuICAgIH0gICAgXHJcbn0iLCJleHBvcnQgY2xhc3MgQ29tcG9uZW50UmVme1xyXG4gICAgcHVibGljIGlkOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZSl7XHJcbiAgICAgICAgdGhpcy5pZD0gbWVzc2FnZS5pZDtcclxuICAgIH1cclxufSIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgVGltIFdlbnR6bGF1XHJcbi8vIExpY2Vuc2VkIHVuZGVyIE1JVFxyXG5pbXBvcnQgeyBJQ29tcG9uZW50LCBEYXNoYm9hcmRMaW5rIH0gZnJvbSBcIi4vSUNvbXBvbmVudC5tb2RlbFwiXHJcbmltcG9ydCB7IENvbXBvbmVudFJlZiB9IGZyb20gXCIuL0NvbXBvbmVudFJlZlwiXHJcbmltcG9ydCB7IEtlcnZpQmFzZVNlcnZpY2UgfSBmcm9tICcuLi9rZXJ2aS1qcy5zZXJ2aWNlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRyb2xsZXIgaW1wbGVtZW50cyBJQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyB0eXBlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgdmlzaWJsZTogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBjb21wb25lbnRUeXBlPVwiY29udHJvbGxlclwiXHJcbiAgICBwdWJsaWMgdWk6YW55ID0ge31cclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBwYXJhbWV0ZXJzOiBhbnk7XHJcbiAgICBwdWJsaWMgaW5wdXRzOiBJQ29tcG9uZW50W10gPSBbXTtcclxuICAgIHB1YmxpYyBvdXRwdXRzOiBJQ29tcG9uZW50W10gPSBbXTtcclxuICAgIHB1YmxpYyBhY3Rpb25zOiBJQ29tcG9uZW50W10gPSBbXTtcclxuICAgIHB1YmxpYyBpbnB1dFJlZmVyZW5jZXM6IENvbXBvbmVudFJlZltdID0gW107XHJcbiAgICBwdWJsaWMgb3V0cHV0UmVmZXJlbmNlczogQ29tcG9uZW50UmVmW10gPSBbXTtcclxuICAgIHB1YmxpYyBhY3Rpb25zUmVmZXJlbmNlczogQ29tcG9uZW50UmVmW10gPSBbXTtcclxuICAgIHB1YmxpYyBkYXNoYm9hcmRzOiBEYXNoYm9hcmRMaW5rW109W107XHJcbiAgICBwdWJsaWMgdGVtcGxhdGU6c3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBrZXJ2aVNlcnZpY2U6S2VydmlCYXNlU2VydmljZVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IGFueSwga2VydmlTZXJ2aWNlOktlcnZpQmFzZVNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmtlcnZpU2VydmljZSA9IGtlcnZpU2VydmljZTtcclxuICAgICAgICB0aGlzLmlkID0gbWVzc2FnZS5pZDtcclxuICAgICAgICB0aGlzLm5hbWUgPSBtZXNzYWdlLm5hbWU7XHJcbiAgICAgICAgdGhpcy50eXBlID0gbWVzc2FnZS50eXBlO1xyXG4gICAgICAgIHRoaXMudWkgPSBtZXNzYWdlLnVpO1xyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IG1lc3NhZ2UudmlzaWJsZTtcclxuICAgICAgICB0aGlzLnBhcmFtZXRlcnMgPSBtZXNzYWdlLnBhcmFtZXRlcnM7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZT1tZXNzYWdlLnRlbXBsYXRlO1xyXG4gICAgICAgIGZvcih2YXIgcmVmIG9mIG1lc3NhZ2UuaW5wdXRzKXtcclxuICAgICAgICAgICAgdGhpcy5pbnB1dFJlZmVyZW5jZXMucHVzaCggbmV3IENvbXBvbmVudFJlZihyZWYpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcih2YXIgcmVmIG9mIG1lc3NhZ2Uub3V0cHV0cyl7XHJcbiAgICAgICAgICAgIHRoaXMub3V0cHV0UmVmZXJlbmNlcy5wdXNoKCBuZXcgQ29tcG9uZW50UmVmKHJlZikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yKHZhciByZWYgb2YgbWVzc2FnZS5hY3Rpb25zKXtcclxuICAgICAgICAgICAgdGhpcy5hY3Rpb25zUmVmZXJlbmNlcy5wdXNoKCBuZXcgQ29tcG9uZW50UmVmKHJlZikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgZGFzaGJvYXJkTGluayBvZiBtZXNzYWdlLmRhc2hib2FyZExpbmtzKXtcclxuICAgICAgICAgICAgdGhpcy5kYXNoYm9hcmRzLnB1c2goIG5ldyBEYXNoYm9hcmRMaW5rKHRoaXMsIGRhc2hib2FyZExpbmspKTsgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVJlZmVyZW5jZXMoKXtcclxuICAgICAgICBpZiAodGhpcy5pbnB1dHMubGVuZ3RoPT0wKXtcclxuICAgICAgICAgICAgZm9yKHZhciByZWYgb2YgdGhpcy5pbnB1dFJlZmVyZW5jZXMpe1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbXBvbmVudCA9IHRoaXMua2VydmlTZXJ2aWNlLmdldENvbXBvbmVudChyZWYuaWQpXHJcbiAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50KVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRzLnB1c2goY29tcG9uZW50KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm91dHB1dHMubGVuZ3RoPT0wKXtcclxuICAgICAgICAgICAgZm9yKHZhciByZWYgb2YgdGhpcy5vdXRwdXRSZWZlcmVuY2VzKXtcclxuICAgICAgICAgICAgICAgIHZhciBjb21wb25lbnQgPSB0aGlzLmtlcnZpU2VydmljZS5nZXRDb21wb25lbnQocmVmLmlkKVxyXG4gICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm91dHB1dHMucHVzaChjb21wb25lbnQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuYWN0aW9ucy5sZW5ndGg9PTApe1xyXG4gICAgICAgICAgICBmb3IodmFyIHJlZiBvZiB0aGlzLmFjdGlvbnNSZWZlcmVuY2VzKXtcclxuICAgICAgICAgICAgICAgIHZhciBjb21wb25lbnQgPSB0aGlzLmtlcnZpU2VydmljZS5nZXRDb21wb25lbnQocmVmLmlkKVxyXG4gICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbnMucHVzaChjb21wb25lbnQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmVtb3ZlUmVmZXJlbmNlcyhjb21wb25lbnRzOklDb21wb25lbnRbXSl7fTtcclxuICAgIHJlbG9hZChjb21wb25lbnQ6SUNvbXBvbmVudCl7fTtcclxufSIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgVGltIFdlbnR6bGF1XHJcbi8vIExpY2Vuc2VkIHVuZGVyIE1JVFxyXG5cclxuaW1wb3J0IHsgSUNvbXBvbmVudCwgRGFzaGJvYXJkTGluayB9IGZyb20gJy4vSUNvbXBvbmVudC5tb2RlbCdcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkU2l6ZXN7XHJcbiAgICBwdWJsaWMgdmFsdWVXaWR0aDpzdHJpbmcgPVwiM3JlbVwiO1xyXG4gICAgcHVibGljIGJ1dHRvbldpZHRoOnN0cmluZyA9IFwiMjVweFwiO1xyXG4gICAgcHVibGljIGJ1dHRvbkhlaWdodDpzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHVibGljIHN3aXRjaFdpZHRoOnN0cmluZyA9IFwiMjVweFwiO1xyXG4gICAgcHVibGljIHN3aXRjaEhlaWdodDpzdHJpbmcgPSBcIjI1cHhcIjtcclxuICAgIHB1YmxpYyBnYXVnZVdpZHRoOnN0cmluZyA9IFwiMTAwcHhcIjtcclxuICAgIHB1YmxpYyBnYXVnZUhlaWdodDpzdHJpbmcgPSBcIjIwMHB4XCI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRNZXNzYWdlTW9kZWx7XHJcbiAgICBwdWJsaWMgc291cmNlSWQ6c3RyaW5nO1xyXG4gICAgcHVibGljIHNvdXJjZU5hbWU6c3RyaW5nO1xyXG4gICAgcHVibGljIGFyZWE6IHN0cmluZztcclxuICAgIHB1YmxpYyBsZXZlbDogbnVtYmVyO1xyXG4gICAgcHVibGljIHRpbWVzdGFtcDogRGF0ZTtcclxuICAgIHB1YmxpYyB0b3BpYzpzdHJpbmc7XHJcbiAgICBwdWJsaWMgYm9keTpzdHJpbmc7XHJcbiAgICBwdWJsaWMgdHlwZTpzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZSl7XHJcbiAgICAgICAgdGhpcy50aW1lc3RhbXAgPSBuZXcgRGF0ZShtZXNzYWdlLnRpbWVzdGFtcCoxMDAwKTtcclxuICAgICAgICB0aGlzLnRvcGljID0gbWVzc2FnZS50b3BpYztcclxuICAgICAgICB0aGlzLmJvZHkgPSBtZXNzYWdlLmJvZHk7XHJcbiAgICAgICAgdGhpcy50eXBlID0gbWVzc2FnZS50eXBlO1xyXG4gICAgICAgIHRoaXMuc291cmNlSWQgPSBtZXNzYWdlLnNvdXJjZV9pZDtcclxuICAgICAgICB0aGlzLnNvdXJjZU5hbWUgPSBtZXNzYWdlLnNvdXJjZV9uYW1lO1xyXG4gICAgICAgIHRoaXMuYXJlYSA9IG1lc3NhZ2UuYXJlYTtcclxuICAgICAgICB0aGlzLmxldmVsID0gbWVzc2FnZS5sZXZlbDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERhc2hib2FyZFBhbmVsQ29tcG9uZW50e1xyXG4gICAgcHVibGljIGNvbXBvbmVudDpJQ29tcG9uZW50O1xyXG4gICAgcHVibGljIGNvbXBvbmVudElkOnN0cmluZztcclxuICAgIHB1YmxpYyBsaW5rSWQ6YW55O1xyXG4gICAgcHVibGljIHBhcmFtZXRlcnM6YW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbWVzc2FnZTogYW55KXtcclxuICAgICAgICB0aGlzLmxpbmtJZCA9IG1lc3NhZ2UubGlua0lkO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50SWQgPSBtZXNzYWdlLmNvbXBvbmVudElkO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gbWVzc2FnZS5jb21wb25lbnQ7XHJcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzID0gbWVzc2FnZS5wYXJhbWV0ZXJzO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkUGFuZWxQYXJhbWV0ZXJze1xyXG4gICAgcHVibGljIHRpdGxlOnN0cmluZyA9IG51bGw7XHJcbiAgICBwdWJsaWMgd2lkdGg6c3RyaW5nID0gbnVsbDtcclxuICAgIHB1YmxpYyBoZWlnaHQ6c3RyaW5nID0gbnVsbDtcclxuICAgIHB1YmxpYyB0eXBlOnN0cmluZyA9IG51bGw7XHJcbiAgICBwdWJsaWMgdXNlckxvZzogYm9vbGVhbiA9IG51bGw7XHJcbiAgICBwdWJsaWMgbG9nTGVuZ3RoOm51bWJlciA9IDU7XHJcbiAgICBwdWJsaWMgbGF5b3V0OnN0cmluZyA9IFwicm93XCI7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2VQYXJhbWV0ZXJzKXtcclxuICAgICAgICB0aGlzLnRpdGxlPW1lc3NhZ2VQYXJhbWV0ZXJzLmxhYmVsO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0PSB0aGlzLmNhbGNTaXplKG1lc3NhZ2VQYXJhbWV0ZXJzLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy53aWR0aD10aGlzLmNhbGNTaXplKG1lc3NhZ2VQYXJhbWV0ZXJzLndpZHRoKTtcclxuICAgICAgICB0aGlzLnVzZXJMb2c9bWVzc2FnZVBhcmFtZXRlcnMudXNlckxvZztcclxuICAgICAgICB0aGlzLmxvZ0xlbmd0aCA9IG1lc3NhZ2VQYXJhbWV0ZXJzLmxvZ0xlbmd0aDtcclxuICAgICAgICBcclxuICAgICAgICBpZiAobWVzc2FnZVBhcmFtZXRlcnMudHlwZSlcclxuICAgICAgICAgICAgdGhpcy50eXBlPW1lc3NhZ2VQYXJhbWV0ZXJzLnR5cGU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKG1lc3NhZ2VQYXJhbWV0ZXJzLmxheW91dClcclxuICAgICAgICAgICAgdGhpcy5sYXlvdXQ9bWVzc2FnZVBhcmFtZXRlcnMubGF5b3V0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2FsY1NpemUodmFsdWUpe1xyXG4gICAgICAgIGlmICh2YWx1ZT09bnVsbClcclxuICAgICAgICAgICAgcmV0dXJuIFwiXCJcclxuICAgICAgICBlbHNlIGlmICh2YWx1ZT09PVwiXCIpXHJcbiAgICAgICAgICAgIHJldHVybiBcIlwiXHJcbiAgICAgICAgZWxzZSBpZiAoaXNOYU4odmFsdWUpKXtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICBpZiAodmFsdWU+MClcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSArIFwiJVwiO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERhc2hib2FyZFBhbmVsIHtcclxuICAgIHB1YmxpYyBpZDpzdHJpbmc7XHJcbiAgICBwdWJsaWMgbmFtZTpzdHJpbmc7XHJcbiAgICBwdWJsaWMgcGFyYW1ldGVyczogRGFzaGJvYXJkUGFuZWxQYXJhbWV0ZXJzO1xyXG4gICAgcHVibGljIGNvbXBvbmVudHM6IERhc2hib2FyZFBhbmVsQ29tcG9uZW50W109W107XHJcbiAgICBwdWJsaWMgZGFzaGJvYXJkOiBEYXNoYm9hcmQ7XHJcbiAgICBwdWJsaWMgdHlwZTpzdHJpbmc7XHJcbiAgICBwdWJsaWMgc3ViUGFuZWxzOiBEYXNoYm9hcmRQYW5lbFtdID0gW107XHJcbiAgICBwdWJsaWMgaGFzT25seUdyb3VwUGFuZWxzOmJvb2xlYW4gPSB0cnVlO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvciAoZGFzaGJvYXJkLCBtZXNzYWdlUGFuZWwpe1xyXG4gICAgICAgIHRoaXMuZGFzaGJvYXJkPWRhc2hib2FyZDtcclxuICAgICAgICB0aGlzLmlkPW1lc3NhZ2VQYW5lbC5pZDtcclxuICAgICAgICB0aGlzLm5hbWU9bWVzc2FnZVBhbmVsLm5hbWU7XHJcbiAgICAgICAgdGhpcy50eXBlPW1lc3NhZ2VQYW5lbC50eXBlO1xyXG4gICAgICAgIHRoaXMucGFyYW1ldGVycz1uZXcgRGFzaGJvYXJkUGFuZWxQYXJhbWV0ZXJzKG1lc3NhZ2VQYW5lbC51aVBhcmFtZXRlcnMpO1xyXG4gICAgICAgIC8qaWYgKG1lc3NhZ2VQYW5lbC5jb21wb25lbnRzKVxyXG4gICAgICAgICAgICBmb3IodmFyIGNvbXBvbmVudFJlZiBvZiBtZXNzYWdlUGFuZWwuY29tcG9uZW50cyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudHMucHVzaChuZXcgRGFzaGJvYXJkUGFuZWxDb21wb25lbnRNb2RlbChjb21wb25lbnRSZWYpKVxyXG4gICAgICAgICAgICB9Ki9cclxuICAgICAgICBcclxuICAgICAgICBpZiAobWVzc2FnZVBhbmVsLnBhbmVscyl7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJzcGFcIixtZXNzYWdlUGFuZWwucGFuZWxzKTtcclxuICAgICAgICAgICAgZm9yKHZhciBzdWJNZXNzYWdlUGFuZWwgb2YgbWVzc2FnZVBhbmVsLnBhbmVscyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGFuZWw9bmV3IERhc2hib2FyZFBhbmVsKHRoaXMsIHN1Yk1lc3NhZ2VQYW5lbCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN1YlBhbmVscy5wdXNoKHBhbmVsKTtcclxuICAgICAgICAgICAgICAgIGlmIChwYW5lbC50eXBlICE9PSBcImdyb3VwXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYXNPbmx5R3JvdXBQYW5lbHMgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVsb2FkKHNvdXJjZTpEYXNoYm9hcmRQYW5lbCl7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInJsXCIsIHRoaXMpO1xyXG4gICAgICAgIGZvcih2YXIgc3ViUGFuZWwgb2Ygc291cmNlLnN1YlBhbmVscyl7XHJcbiAgICAgICAgICAgIHRoaXMucmVsb2FkKHN1YlBhbmVsKVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IodmFyIHNvdXJjZUNvbXBvbmVudCBvZiBzb3VyY2UuY29tcG9uZW50cyl7XHJcbiAgICAgICAgICAgIHZhciBmb3VuZD1mYWxzZTtcclxuICAgICAgICAgICAgZm9yKHZhciBjb21wb25lbnQgb2YgdGhpcy5jb21wb25lbnRzKXtcclxuICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnQuY29tcG9uZW50SWQgPT0gc291cmNlQ29tcG9uZW50LmNvbXBvbmVudElkKXtcclxuICAgICAgICAgICAgICAgICAgICBmb3VuZD10cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghZm91bmQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzLnB1c2goc291cmNlQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZGVsZXRlQ29tcG9uZW50czpEYXNoYm9hcmRQYW5lbENvbXBvbmVudFtdID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgY29tcG9uZW50IG9mIHRoaXMuY29tcG9uZW50cyl7XHJcbiAgICAgICAgICAgIHZhciBmb3VuZD1mYWxzZTtcclxuICAgICAgICAgICAgZm9yKHZhciBzb3VyY2VDb21wb25lbnQgb2Ygc291cmNlLmNvbXBvbmVudHMpe1xyXG4gICAgICAgICAgICAgICAgaWYgKHNvdXJjZUNvbXBvbmVudC5jb21wb25lbnRJZCA9PSBjb21wb25lbnQuY29tcG9uZW50SWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvdW5kPXRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFmb3VuZClcclxuICAgICAgICAgICAgICAgIGRlbGV0ZUNvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiZHNjXCIsZGVsZXRlQ29tcG9uZW50cyk7XHJcbiAgICAgICAgZm9yKHZhciBjb21wb25lbnQgb2YgZGVsZXRlQ29tcG9uZW50cyl7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50cy5zcGxpY2UoIHRoaXMuY29tcG9uZW50cy5pbmRleE9mKGNvbXBvbmVudCksIDEgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRCYWNrZ3JvdW5kTW9kZWx7XHJcbiAgICBwdWJsaWMgdHlwZTpzdHJpbmc7XHJcbiAgICBwdWJsaWMgY2FtZXJhSWQ6c3RyaW5nO1xyXG4gICAgcHVibGljIGltYWdlOnN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlKXtcclxuICAgICAgICB0aGlzLnR5cGU9bWVzc2FnZS50eXBlO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhSWQ9bWVzc2FnZS5jYW1lcmFJZFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkIGltcGxlbWVudHMgSUNvbXBvbmVudHtcclxuICAgIHB1YmxpYyBpZDpzdHJpbmc7XHJcbiAgICBwdWJsaWMgbmFtZTpzdHJpbmc7XHJcbiAgICBwdWJsaWMgY29tcG9uZW50VHlwZTpzdHJpbmc7XHJcbiAgICBwdWJsaWMgdHlwZTpzdHJpbmc7XHJcbiAgICBwdWJsaWMgaXNEZWZhdWx0OkJvb2xlYW47XHJcbiAgICBwdWJsaWMgdGVtcGxhdGU6c3RyaW5nO1xyXG4gICAgcHVibGljIHBhbmVsczpEYXNoYm9hcmRQYW5lbFtdO1xyXG4gICAgcHVibGljIHN5c1BhbmVsczpEYXNoYm9hcmRQYW5lbFtdO1xyXG4gICAgcHVibGljIGhlYWRlclBhbmVsOiBEYXNoYm9hcmRQYW5lbD1udWxsO1xyXG4gICAgcHVibGljIGZvb3RlckNlbnRlclBhbmVsOiBEYXNoYm9hcmRQYW5lbD1udWxsO1xyXG4gICAgcHVibGljIGZvb3RlckxlZnRQYW5lbDogRGFzaGJvYXJkUGFuZWw9bnVsbDtcclxuICAgIHB1YmxpYyBmb290ZXJSaWdodFBhbmVsOiBEYXNoYm9hcmRQYW5lbD1udWxsO1xyXG4gICAgcHVibGljIHN5c1BhbmVsOiBEYXNoYm9hcmRQYW5lbD1udWxsO1xyXG4gICAgcHVibGljIGJhY2tncm91bmRQYW5lbDogRGFzaGJvYXJkUGFuZWw9bnVsbDtcclxuICAgIHB1YmxpYyBjb250cm9sbGVyUGFuZWw6IERhc2hib2FyZFBhbmVsPW51bGw7XHJcbiAgICBwdWJsaWMgTGVmdFBhZFhQYW5lbDogRGFzaGJvYXJkUGFuZWw9bnVsbDtcclxuICAgIHB1YmxpYyBMZWZ0UGFkWVBhbmVsOiBEYXNoYm9hcmRQYW5lbD1udWxsO1xyXG4gICAgcHVibGljIFJpZ2h0UGFkWFBhbmVsOiBEYXNoYm9hcmRQYW5lbD1udWxsO1xyXG4gICAgcHVibGljIFJpZ2h0UGFkWVBhbmVsOiBEYXNoYm9hcmRQYW5lbD1udWxsO1xyXG4gICAgLy9wdWJsaWMgYmFja2dyb3VuZDogRGFzaGJvYXJkQmFja2dyb3VuZE1vZGVsPW51bGw7XHJcbiAgICBwdWJsaWMgdW5pdFNpemU6IG51bWJlcjtcclxuXHJcbiAgICAvL25vdCB1c2VkIGluIGRhc2hib2FyZHNcclxuICAgIHB1YmxpYyB2aXNpYmxlOmJvb2xlYW47XHJcbiAgICBwdWJsaWMgdWk6YW55O1xyXG4gICAgcHVibGljIGRhc2hib2FyZHM6YW55W10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIGN1cnJlbnRQYW5lbDpEYXNoYm9hcmRQYW5lbCA9IG51bGw7XHJcbiBcclxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2Upe1xyXG4gICAgICAgIHRoaXMuaWQ9bWVzc2FnZS5pZDtcclxuICAgICAgICB0aGlzLm5hbWU9bWVzc2FnZS5uYW1lO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50VHlwZT1cImRhc2hib2FyZFwiO1xyXG4gICAgICAgIHRoaXMudHlwZT1tZXNzYWdlLnR5cGU7XHJcbiAgICAgICAgdGhpcy5pc0RlZmF1bHQ9bWVzc2FnZS5pc0RlZmF1bHQ7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZT1tZXNzYWdlLnRlbXBsYXRlO1xyXG4gICAgICAgIHRoaXMudW5pdFNpemU9bWVzc2FnZS51bml0U2l6ZTtcclxuICAgICAgICAvL3RoaXMuYmFja2dyb3VuZD1uZXcgRGFzaGJvYXJkQmFja2dyb3VuZE1vZGVsKG1lc3NhZ2UuYmFja2dyb3VuZCk7XHJcbiAgICAgICAgdGhpcy5wYW5lbHM9W107XHJcbiAgICAgICAgdGhpcy5zeXNQYW5lbHM9W107XHJcbiAgICAgICAgaWYgKCF0aGlzLnRlbXBsYXRlKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZvciAobGV0IG1lc3NhZ2VQYW5lbCBvZiBtZXNzYWdlLnNlY3Rpb25zKXtcclxuICAgICAgICAgICAgICAgIGlmICghbWVzc2FnZVBhbmVsKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhc2hib2FyZCB3aXRoIG51bGwgcGFuZWxcIiwgdGhpcy5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgcGFuZWwgPSBuZXcgRGFzaGJvYXJkUGFuZWwodGhpcywgbWVzc2FnZVBhbmVsKTtcclxuICAgICAgICAgICAgICAgIHZhciBzeXNQYW5lbCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFuZWwuaWQ9PVwiaGVhZGVyX2NlbnRlclwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVyUGFuZWw9cGFuZWw7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwYW5lbC5pZD09XCJmb290ZXJfbGVmdFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9vdGVyTGVmdFBhbmVsPXBhbmVsO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocGFuZWwuaWQ9PVwiZm9vdGVyX2NlbnRlclwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9vdGVyQ2VudGVyUGFuZWw9cGFuZWw7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwYW5lbC5pZD09XCJmb290ZXJfcmlnaHRcIilcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvb3RlclJpZ2h0UGFuZWw9cGFuZWw7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwYW5lbC5pZD09XCJoZWFkZXJfcmlnaHRcIilcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN5c1BhbmVsPXBhbmVsO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocGFuZWwuaWQ9PVwiY29udHJvbGxlcnNcIilcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXJQYW5lbD1wYW5lbDtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBhbmVsLmlkPT1cImJhY2tncm91bmRcIilcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJhY2tncm91bmRQYW5lbD1wYW5lbDtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBhbmVsLmlkPT1cImxlZnRfcGFkX3hcIilcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkxlZnRQYWRYUGFuZWw9cGFuZWw7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwYW5lbC5pZD09XCJsZWZ0X3BhZF95XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5MZWZ0UGFkWVBhbmVsPXBhbmVsO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocGFuZWwuaWQ9PVwicmlnaHRfcGFkX3hcIilcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlJpZ2h0UGFkWFBhbmVsPXBhbmVsO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocGFuZWwuaWQ9PVwicmlnaHRfcGFkX3lcIilcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlJpZ2h0UGFkWVBhbmVsPXBhbmVsO1xyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBzeXNQYW5lbD1mYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocGFuZWwudHlwZSE9XCJncm91cFwiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5jdXJyZW50UGFuZWw9PW51bGwpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGFuZWwgPSBuZXcgRGFzaGJvYXJkUGFuZWwoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjpudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOlwiZ3JvdXBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbXBvbmVudHNcIjpbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBhbmVsc1wiOltdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidWlQYXJhbWV0ZXJzXCI6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCI6XCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOjEwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjowLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVzZXJMb2dcIjpmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsb2dMZW5ndGhcIjowXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGFuZWwuc3ViUGFuZWxzLnB1c2gocGFuZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYW5lbHMucHVzaCh0aGlzLmN1cnJlbnRQYW5lbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQYW5lbC5zdWJQYW5lbHMucHVzaChwYW5lbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gICBcclxuICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhbmVscy5wdXNoKHBhbmVsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGFuZWw9bnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoc3lzUGFuZWwpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zeXNQYW5lbHMucHVzaChwYW5lbCk7ICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5jdXJyZW50UGFuZWwpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGFuZWwgPSBuZXcgRGFzaGJvYXJkUGFuZWwoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjpudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6XCJncm91cFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbXBvbmVudHNcIjpbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwYW5lbHNcIjpbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aVBhcmFtZXRlcnNcIjp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCI6XCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjoxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVzZXJMb2dcIjpmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibG9nTGVuZ3RoXCI6MFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5jdXJyZW50UGFuZWwuc3ViUGFuZWxzLnB1c2gocGFuZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFuZWxzLnB1c2godGhpcy5jdXJyZW50UGFuZWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGlzRW1wdHkoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYW5lbHMubGVuZ3RoID09IDA7XHJcbiAgICB9XHJcbiAgICByZW1vdmVSZWZlcmVuY2VzKGRlbGV0ZUNvbXBvbmVudHM6SUNvbXBvbmVudFtdKXt9O1xyXG4gICAgdXBkYXRlUmVmZXJlbmNlcygpe307XHJcbiAgICByZWxvYWQoY29tcG9uZW50OklDb21wb25lbnQpe1xyXG4gICAgICAgIHZhciBzb3VyY2UgPSBjb21wb25lbnQgYXMgRGFzaGJvYXJkO1xyXG4gICAgICAgIGlmICghdGhpcy5iYWNrZ3JvdW5kUGFuZWwgJiYgc291cmNlLmJhY2tncm91bmRQYW5lbClcclxuICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kUGFuZWw9c291cmNlLmJhY2tncm91bmRQYW5lbDtcclxuICAgICAgICBlbHNlIGlmICh0aGlzLmJhY2tncm91bmRQYW5lbCAmJiAhc291cmNlLmJhY2tncm91bmRQYW5lbClcclxuICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kUGFuZWwgPSBudWxsXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5iYWNrZ3JvdW5kUGFuZWwpXHJcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZFBhbmVsLnJlbG9hZChzb3VyY2UuYmFja2dyb3VuZFBhbmVsKVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuZm9vdGVyTGVmdFBhbmVsICYmIHNvdXJjZS5mb290ZXJMZWZ0UGFuZWwpXHJcbiAgICAgICAgICAgIHRoaXMuZm9vdGVyTGVmdFBhbmVsPXNvdXJjZS5mb290ZXJMZWZ0UGFuZWw7XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5mb290ZXJMZWZ0UGFuZWwgJiYgIXNvdXJjZS5mb290ZXJMZWZ0UGFuZWwpXHJcbiAgICAgICAgICAgIHRoaXMuZm9vdGVyTGVmdFBhbmVsID0gbnVsbFxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZm9vdGVyTGVmdFBhbmVsKVxyXG4gICAgICAgICAgICB0aGlzLmZvb3RlckxlZnRQYW5lbC5yZWxvYWQoc291cmNlLmZvb3RlckxlZnRQYW5lbClcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmZvb3RlclJpZ2h0UGFuZWwgJiYgc291cmNlLmZvb3RlclJpZ2h0UGFuZWwpXHJcbiAgICAgICAgICAgIHRoaXMuZm9vdGVyUmlnaHRQYW5lbD1zb3VyY2UuZm9vdGVyUmlnaHRQYW5lbDtcclxuICAgICAgICBlbHNlIGlmICh0aGlzLmZvb3RlclJpZ2h0UGFuZWwgJiYgIXNvdXJjZS5mb290ZXJSaWdodFBhbmVsKVxyXG4gICAgICAgICAgICB0aGlzLmZvb3RlclJpZ2h0UGFuZWwgPSBudWxsXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5mb290ZXJSaWdodFBhbmVsKVxyXG4gICAgICAgICAgICB0aGlzLmZvb3RlclJpZ2h0UGFuZWwucmVsb2FkKHNvdXJjZS5mb290ZXJSaWdodFBhbmVsKVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuZm9vdGVyQ2VudGVyUGFuZWwgJiYgc291cmNlLmZvb3RlckNlbnRlclBhbmVsKVxyXG4gICAgICAgICAgICB0aGlzLmZvb3RlckNlbnRlclBhbmVsPXNvdXJjZS5mb290ZXJDZW50ZXJQYW5lbDtcclxuICAgICAgICBlbHNlIGlmICh0aGlzLmZvb3RlckNlbnRlclBhbmVsICYmICFzb3VyY2UuZm9vdGVyQ2VudGVyUGFuZWwpXHJcbiAgICAgICAgICAgIHRoaXMuZm9vdGVyQ2VudGVyUGFuZWwgPSBudWxsXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5mb290ZXJDZW50ZXJQYW5lbClcclxuICAgICAgICAgICAgdGhpcy5mb290ZXJDZW50ZXJQYW5lbC5yZWxvYWQoc291cmNlLmZvb3RlckNlbnRlclBhbmVsKVxyXG5cclxuICAgICAgICAvKmlmICghdGhpcy5oZWFkZXJQYW5lbCAmJiBzb3VyY2UuaGVhZGVyUGFuZWwpXHJcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyUGFuZWw9c291cmNlLmhlYWRlclBhbmVsO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaGVhZGVyUGFuZWwgJiYgIXNvdXJjZS5oZWFkZXJQYW5lbClcclxuICAgICAgICAgICAgdGhpcy5oZWFkZXJQYW5lbCA9IG51bGxcclxuICAgICAgICBlbHNlIGlmICh0aGlzLmhlYWRlclBhbmVsKVxyXG4gICAgICAgICAgICB0aGlzLmhlYWRlclBhbmVsLnJlbG9hZChzb3VyY2UuaGVhZGVyUGFuZWwpKi9cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnN5c1BhbmVsICYmIHNvdXJjZS5zeXNQYW5lbClcclxuICAgICAgICAgICAgdGhpcy5zeXNQYW5lbD1zb3VyY2Uuc3lzUGFuZWw7XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zeXNQYW5lbCAmJiAhc291cmNlLnN5c1BhbmVsKVxyXG4gICAgICAgICAgICB0aGlzLnN5c1BhbmVsID0gbnVsbFxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3lzUGFuZWwpXHJcbiAgICAgICAgICAgIHRoaXMuc3lzUGFuZWwucmVsb2FkKHNvdXJjZS5zeXNQYW5lbClcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLkxlZnRQYWRYUGFuZWwgJiYgc291cmNlLkxlZnRQYWRYUGFuZWwpXHJcbiAgICAgICAgICAgIHRoaXMuTGVmdFBhZFhQYW5lbD1zb3VyY2UuTGVmdFBhZFhQYW5lbDtcclxuICAgICAgICBlbHNlIGlmICh0aGlzLkxlZnRQYWRYUGFuZWwgJiYgIXNvdXJjZS5MZWZ0UGFkWFBhbmVsKVxyXG4gICAgICAgICAgICB0aGlzLkxlZnRQYWRYUGFuZWwgPSBudWxsXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5MZWZ0UGFkWFBhbmVsKVxyXG4gICAgICAgICAgICB0aGlzLkxlZnRQYWRYUGFuZWwucmVsb2FkKHNvdXJjZS5MZWZ0UGFkWFBhbmVsKVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuTGVmdFBhZFlQYW5lbCAmJiBzb3VyY2UuTGVmdFBhZFlQYW5lbClcclxuICAgICAgICAgICAgdGhpcy5MZWZ0UGFkWVBhbmVsPXNvdXJjZS5MZWZ0UGFkWVBhbmVsO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuTGVmdFBhZFlQYW5lbCAmJiAhc291cmNlLkxlZnRQYWRZUGFuZWwpXHJcbiAgICAgICAgICAgIHRoaXMuTGVmdFBhZFlQYW5lbCA9IG51bGxcclxuICAgICAgICBlbHNlIGlmICh0aGlzLkxlZnRQYWRZUGFuZWwpXHJcbiAgICAgICAgICAgIHRoaXMuTGVmdFBhZFlQYW5lbC5yZWxvYWQoc291cmNlLkxlZnRQYWRZUGFuZWwpXHJcblxyXG4gICAgICAgIGlmICghdGhpcy5SaWdodFBhZFhQYW5lbCAmJiBzb3VyY2UuUmlnaHRQYWRYUGFuZWwpXHJcbiAgICAgICAgICAgIHRoaXMuUmlnaHRQYWRYUGFuZWw9c291cmNlLlJpZ2h0UGFkWFBhbmVsO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuUmlnaHRQYWRYUGFuZWwgJiYgIXNvdXJjZS5SaWdodFBhZFhQYW5lbClcclxuICAgICAgICAgICAgdGhpcy5SaWdodFBhZFhQYW5lbCA9IG51bGxcclxuICAgICAgICBlbHNlIGlmICh0aGlzLlJpZ2h0UGFkWFBhbmVsKVxyXG4gICAgICAgICAgICB0aGlzLlJpZ2h0UGFkWFBhbmVsLnJlbG9hZChzb3VyY2UuUmlnaHRQYWRYUGFuZWwpXHJcblxyXG4gICAgICAgIGlmICghdGhpcy5SaWdodFBhZFlQYW5lbCAmJiBzb3VyY2UuUmlnaHRQYWRZUGFuZWwpXHJcbiAgICAgICAgICAgIHRoaXMuUmlnaHRQYWRZUGFuZWw9c291cmNlLlJpZ2h0UGFkWVBhbmVsO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuUmlnaHRQYWRZUGFuZWwgJiYgIXNvdXJjZS5SaWdodFBhZFlQYW5lbClcclxuICAgICAgICAgICAgdGhpcy5SaWdodFBhZFlQYW5lbCA9IG51bGxcclxuICAgICAgICBlbHNlIGlmICh0aGlzLlJpZ2h0UGFkWVBhbmVsKVxyXG4gICAgICAgICAgICB0aGlzLlJpZ2h0UGFkWVBhbmVsLnJlbG9hZChzb3VyY2UuUmlnaHRQYWRZUGFuZWwpXHJcblxyXG4gICAgICAgIGlmICghdGhpcy5jb250cm9sbGVyUGFuZWwgJiYgc291cmNlLmNvbnRyb2xsZXJQYW5lbClcclxuICAgICAgICAgICAgdGhpcy5jb250cm9sbGVyUGFuZWw9c291cmNlLmNvbnRyb2xsZXJQYW5lbDtcclxuICAgICAgICBlbHNlIGlmICh0aGlzLmNvbnRyb2xsZXJQYW5lbCAmJiAhc291cmNlLmNvbnRyb2xsZXJQYW5lbClcclxuICAgICAgICAgICAgdGhpcy5jb250cm9sbGVyUGFuZWwgPSBudWxsXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5jb250cm9sbGVyUGFuZWwpXHJcbiAgICAgICAgICAgIHRoaXMuY29udHJvbGxlclBhbmVsLnJlbG9hZChzb3VyY2UuY29udHJvbGxlclBhbmVsKVxyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIGdldERhc2hib2FyZFBhbmVsQnlJZChpZDpzdHJpbmcsIHBhbmVsczpEYXNoYm9hcmRQYW5lbFtdKXtcclxuICAgICAgICBmb3IobGV0IHBhbmVsIG9mIHBhbmVscyl7XHJcbiAgICAgICAgICAgIGlmIChwYW5lbC5pZCA9PSBpZClcclxuICAgICAgICAgICAgICAgIHJldHVybiBwYW5lbDsgXHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzID0gdGhpcy5nZXREYXNoYm9hcmRQYW5lbEJ5SWQoaWQsIHBhbmVsLnN1YlBhbmVscyk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGREYXNoYm9hcmRMaW5rKGxpbms6RGFzaGJvYXJkTGluayl7XHJcbiAgICAgICAgaWYgKGxpbmsuZGFzaGJvYXJkSWQgPT0gXCIqXCIgfHwgbGluay5kYXNoYm9hcmRJZCA9PSB0aGlzLmlkIHx8IChsaW5rLmRhc2hib2FyZElkPT1cIioqZGVmYXVsdCoqXCIgJiYgdGhpcy5pc0RlZmF1bHQpKXtcclxuICAgICAgICAgICAgdmFyIHBhbmVsRm91bmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdmFyIHBhbmVsID0gdGhpcy5nZXREYXNoYm9hcmRQYW5lbEJ5SWQobGluay5wYW5lbElkLCB0aGlzLnBhbmVscyk7XHJcbiAgICAgICAgICAgIGlmICghcGFuZWwpXHJcbiAgICAgICAgICAgICAgICBwYW5lbCA9IHRoaXMuZ2V0RGFzaGJvYXJkUGFuZWxCeUlkKGxpbmsucGFuZWxJZCwgdGhpcy5zeXNQYW5lbHMpO1xyXG4gICAgICAgICAgICBpZiAocGFuZWwpe1xyXG4gICAgICAgICAgICAgICAgcGFuZWwuY29tcG9uZW50cy5wdXNoKG5ldyBEYXNoYm9hcmRQYW5lbENvbXBvbmVudChsaW5rKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImFkaFwiLGxpbmspO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1lc3NhZ2VQYW5lbCA9e1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOmxpbmsucGFuZWxJZCxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOmxpbmsucGFuZWxOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6XCJwYW5lbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHVpUGFyYW1ldGVyczp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjpcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjowLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVzZXJMb2dcIjpmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsb2dMZW5ndGhcIjowXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIG5ld1BhbmVsID0gbmV3IERhc2hib2FyZFBhbmVsKHRoaXMsIG1lc3NhZ2VQYW5lbCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQYW5lbC5zdWJQYW5lbHMucHVzaChuZXdQYW5lbCk7XHJcbiAgICAgICAgICAgICAgICBuZXdQYW5lbC5jb21wb25lbnRzLnB1c2gobmV3IERhc2hib2FyZFBhbmVsQ29tcG9uZW50KGxpbmspKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgVGltIFdlbnR6bGF1XHJcbi8vIExpY2Vuc2VkIHVuZGVyIE1JVFxyXG5cclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IElDb21wb25lbnQsIERhc2hib2FyZExpbmsgfSBmcm9tICcuL0lDb21wb25lbnQubW9kZWwnXHJcbmltcG9ydCB7IEtlcnZpQmFzZVNlcnZpY2UgfSBmcm9tICcuLi9rZXJ2aS1qcy5zZXJ2aWNlJ1xyXG5leHBvcnQgY2xhc3MgQWN0aW9uIGltcGxlbWVudHMgSUNvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIGtlcnZpU2VydmljZTogS2VydmlCYXNlU2VydmljZSA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIGlkOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZyA9IG51bGw7XHJcbiAgICBwdWJsaWMgY29tcG9uZW50VHlwZSA9ICdhY3Rpb24nO1xyXG4gICAgcHVibGljIHJ1bkNvbW1hbmQgPSAnJztcclxuICAgIHB1YmxpYyBpbnRlcnJ1cHRDb21tYW5kID0gJyc7XHJcbiAgICBwdWJsaWMgdWkgPSB7XHJcbiAgICAgICAgdHlwZTogJycsXHJcbiAgICAgICAgb3JpZW50YXRpb246ICcnLFxyXG4gICAgICAgIHZpc2libGU6IHRydWVcclxuICAgIH1cclxuICAgIHB1YmxpYyBkYXNoYm9hcmRzOiBEYXNoYm9hcmRMaW5rW10gPSBbXTtcclxuICAgIHB1YmxpYyBydW5uaW5nJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZTogYW55LCBrZXJ2aVNlcnZpY2U6S2VydmlCYXNlU2VydmljZSl7XHJcbiAgICAgICAgdGhpcy5rZXJ2aVNlcnZpY2UgPSBrZXJ2aVNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5pZCA9IG1lc3NhZ2UuaWQ7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbWVzc2FnZS5uYW1lO1xyXG4gICAgICAgIHRoaXMudWkgPSBtZXNzYWdlLnVpO1xyXG4gICAgICAgIHRoaXMudWkudmlzaWJsZSA9IG1lc3NhZ2UudmlzaWJsZTtcclxuICAgICAgICB0aGlzLnVpLnR5cGUgPSBtZXNzYWdlLnR5cGU7XHJcbiAgICAgICAgdGhpcy5ydW5Db21tYW5kID0gbWVzc2FnZS5ydW5Db21tYW5kO1xyXG4gICAgICAgIHRoaXMuaW50ZXJydXB0Q29tbWFuZCA9IG1lc3NhZ2UuaW50ZXJydXB0Q29tbWFuZDtcclxuICAgICAgICB0aGlzLnJ1bm5pbmckLm5leHQobWVzc2FnZS5ydW5uaW5nKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgZGFzaGJvYXJkTGluayBvZiBtZXNzYWdlLmRhc2hib2FyZExpbmtzKXtcclxuICAgICAgICAgICAgdGhpcy5kYXNoYm9hcmRzLnB1c2gobmV3IERhc2hib2FyZExpbmsodGhpcywgZGFzaGJvYXJkTGluaykpOyBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJ1bihwYXJhbWV0ZXJzKXtcclxuICAgICAgICAvL2lmICghdGhpcy5ydW5uaW5nJC52YWx1ZSl7XHJcbiAgICAgICAgICAgIGlmIChwYXJhbWV0ZXJzICYmIHBhcmFtZXRlcnMubGVuZ3RoPjApXHJcbiAgICAgICAgICAgICAgICB0aGlzLmtlcnZpU2VydmljZS5zcGluZS5zZW5kQ29tbWFuZCh0aGlzLnJ1bkNvbW1hbmQsIC4uLnBhcmFtZXRlcnMpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmtlcnZpU2VydmljZS5zcGluZS5zZW5kQ29tbWFuZCh0aGlzLnJ1bkNvbW1hbmQpO1xyXG4gICAgICAgIC8vfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbnRlcnJ1cHQocGFyYW1ldGVycyl7XHJcbiAgICAgICAgaWYgKHBhcmFtZXRlcnMgJiYgcGFyYW1ldGVycy5sZW5ndGg+MClcclxuICAgICAgICAgICAgdGhpcy5rZXJ2aVNlcnZpY2Uuc3BpbmUuc2VuZENvbW1hbmQodGhpcy5pbnRlcnJ1cHRDb21tYW5kLCAuLi5wYXJhbWV0ZXJzKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMua2VydmlTZXJ2aWNlLnNwaW5lLnNlbmRDb21tYW5kKHRoaXMuaW50ZXJydXB0Q29tbWFuZCk7XHJcbiAgICB9XHJcbn0iLCJcclxuaW1wb3J0ICogYXMgS2VydmlWYWx1ZXMgZnJvbSAnLi9LZXJ2aVZhbHVlcy5tb2RlbCc7XHJcbmltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICcuL2NvbnRyb2xsZXIubW9kZWwnO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmQgfSBmcm9tICcuL2Rhc2hib2FyZC5tb2RlbCc7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJy4vYWN0aW9uLm1vZGVsJztcclxuaW1wb3J0IHsgSUNvbXBvbmVudCB9IGZyb20gJy4vSUNvbXBvbmVudC5tb2RlbCc7XHJcbmltcG9ydCB7IEtlcnZpQmFzZVNlcnZpY2UgfSBmcm9tICcuLi9rZXJ2aS1qcy5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRGYWN0b3J5IHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZUNvbXBvbmVudHMobWVzc2FnZTogYW55LCBrZXJ2aVNlcnZpY2U6IEtlcnZpQmFzZVNlcnZpY2UpIHtcclxuICAgICAgICBjb25zdCBmb3VuZENvbXBvbmVudHMgPSB0aGlzLmNyZWF0ZUNvbXBvbmVudHNSZWMobWVzc2FnZSwga2VydmlTZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLmxpbmtUb0Rhc2hib2FyZHMoZm91bmRDb21wb25lbnRzWzBdLCBmb3VuZENvbXBvbmVudHNbMV0pO1xyXG4gICAgICAgIHJldHVybiBmb3VuZENvbXBvbmVudHNbMF07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgY3JlYXRlQ29tcG9uZW50c1JlYyhtZXNzYWdlOiBhbnksIGtlcnZpU2VydmljZSkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcclxuICAgICAgICBsZXQgZGFzaGJvYXJkcyA9IFtdO1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG1lc3NhZ2UpKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyAoaSA8IG1lc3NhZ2UubGVuZ3RoKTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdWJDb21wb25lbnRzID0gdGhpcy5jcmVhdGVDb21wb25lbnRzUmVjKG1lc3NhZ2VbaV0sIGtlcnZpU2VydmljZSk7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0KHN1YkNvbXBvbmVudHNbMF0pO1xyXG4gICAgICAgICAgICAgICAgZGFzaGJvYXJkcyA9IGRhc2hib2FyZHMuY29uY2F0KHN1YkNvbXBvbmVudHNbMV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGNvbXBvbmVudDogYW55ID0gbnVsbDtcclxuICAgICAgICAgICAgY29uc3Qgc3ViQ29tcG9uZW50czogYW55W10gPSBbXTtcclxuICAgICAgICAgICAgaWYgKG1lc3NhZ2UuY29tcG9uZW50VHlwZSA9PT0gJ0tlcnZpQWN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gbmV3IEFjdGlvbihtZXNzYWdlLCBrZXJ2aVNlcnZpY2UpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2UuY29tcG9uZW50VHlwZSA9PT0gJ2Rhc2hib2FyZCcpIHtcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IG5ldyBEYXNoYm9hcmQobWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICBkYXNoYm9hcmRzLnB1c2goY29tcG9uZW50KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLmNvbXBvbmVudFR5cGUgPT09ICdjb250cm9sbGVyJykge1xyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gbmV3IENvbnRyb2xsZXIobWVzc2FnZSwga2VydmlTZXJ2aWNlKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLmNvbXBvbmVudFR5cGUgPT09ICdib29sZWFuLXZhbHVlJykge1xyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gbmV3IEtlcnZpVmFsdWVzLkJvb2xlYW5WYWx1ZShtZXNzYWdlLCBrZXJ2aVNlcnZpY2UpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2UuY29tcG9uZW50VHlwZSA9PT0gJ251bWJlci12YWx1ZScpIHtcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IG5ldyBLZXJ2aVZhbHVlcy5OdW1iZXJWYWx1ZShtZXNzYWdlLCBrZXJ2aVNlcnZpY2UpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2UuY29tcG9uZW50VHlwZSA9PT0gJ3N0cmluZy12YWx1ZScpIHtcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IG5ldyBLZXJ2aVZhbHVlcy5TdHJpbmdWYWx1ZShtZXNzYWdlLCBrZXJ2aVNlcnZpY2UpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2UuY29tcG9uZW50VHlwZSA9PT0gJ2VudW0tdmFsdWUnKSB7XHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBuZXcgS2VydmlWYWx1ZXMuU2VsZWN0VmFsdWUobWVzc2FnZSwga2VydmlTZXJ2aWNlKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLmNvbXBvbmVudFR5cGUgPT09ICdkYXRldGltZS12YWx1ZScpIHtcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IG5ldyBLZXJ2aVZhbHVlcy5EYXRlVGltZVZhbHVlKG1lc3NhZ2UsIGtlcnZpU2VydmljZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZS5jb21wb25lbnRUeXBlID09PSAnY29sb3ItdmFsdWUnKSB7XHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBuZXcgS2VydmlWYWx1ZXMuQ29sb3JWYWx1ZShtZXNzYWdlLCBrZXJ2aVNlcnZpY2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHN1YkNvbXBvbmVudHMpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHN1YkNvbXBvbmVudCBvZiBzdWJDb21wb25lbnRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goc3ViQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gW3Jlc3VsdCwgZGFzaGJvYXJkc107XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBGaXhDb250cm9sbGVyUmVmZXJlbmNlcyhjb21wb25lbnRzOiBJQ29tcG9uZW50W10pe1xyXG4gICAgICAgIGZvciAobGV0IGNvbXBvbmVudCBvZiBjb21wb25lbnRzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBjb21wb25lbnQgYXMgQ29udHJvbGxlcjtcclxuICAgICAgICAgICAgaWYgKGNvbnRyb2xsZXIgJiYgY29udHJvbGxlci5jb21wb25lbnRUeXBlID09PSAnY29udHJvbGxlcicpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIudXBkYXRlUmVmZXJlbmNlcygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGxpbmtUb0Rhc2hib2FyZHMoY29tcG9uZW50czogSUNvbXBvbmVudFtdLCBkYXNoYm9hcmRzOiBEYXNoYm9hcmRbXSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdsdGQnLCBjb21wb25lbnRzLCBkYXNoYm9hcmRzKTtcclxuICAgICAgICBmb3IgKGxldCBjb21wb25lbnQgb2YgY29tcG9uZW50cykge1xyXG4gICAgICAgICAgICBpZiAoIShjb21wb25lbnQgaW5zdGFuY2VvZiBEYXNoYm9hcmQpKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBsaW5rIG9mIGNvbXBvbmVudC5kYXNoYm9hcmRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgZGFzaGJvYXJkIG9mIGRhc2hib2FyZHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGFzaGJvYXJkLmFkZERhc2hib2FyZExpbmsobGluayk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7ICBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWxlQmFzZXtcclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcGF0aDogc3RyaW5nO1xyXG4gICAgcHVibGljIGlzRmlsZSA9IHRydWU7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGaWxlIGV4dGVuZHMgRmlsZUJhc2V7XHJcbiAgICBwdWJsaWMgc2l6ZTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGlyZWN0b3J5IGV4dGVuZHMgRmlsZUJhc2V7XHJcbiAgICBwdWJsaWMgZmlsZXMkOiBCZWhhdmlvclN1YmplY3Q8RmlsZUJhc2VbXT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFtdKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYXRoOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMucGF0aCA9IHBhdGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZUZpbGVzKGZpbGVzKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdXHJcbiAgICAgICAgZm9yKGxldCBmaWxlIG9mIGZpbGVzKSB7XHJcbiAgICAgICAgICAgIGlmIChmaWxlLmlzX2ZpbGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGVFbnRyeSA9IG5ldyBGaWxlKCk7XHJcbiAgICAgICAgICAgICAgICBmaWxlRW50cnkubmFtZSA9IGZpbGUubmFtZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHAgPSB0aGlzLnBhdGggIT09ICcvJyA/IHRoaXMucGF0aCA6ICcnO1xyXG4gICAgICAgICAgICAgICAgZmlsZUVudHJ5LnBhdGggPSBwICsgJy8nICsgZmlsZS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goZmlsZUVudHJ5KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHAgPSB0aGlzLnBhdGggIT09ICcvJyA/IHRoaXMucGF0aCA6ICcnO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGlyZWN0b3J5ID0gbmV3IERpcmVjdG9yeShwICsgJy8nICsgZmlsZS5uYW1lKTtcclxuICAgICAgICAgICAgICAgIGRpcmVjdG9yeS5uYW1lID0gZmlsZS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgZGlyZWN0b3J5LmlzRmlsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goZGlyZWN0b3J5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmZpbGVzJC5uZXh0KHJlc3VsdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7ICBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgS2VydmlCYXNlU2VydmljZSB9IGZyb20gJy4uL2tlcnZpLWpzLnNlcnZpY2UnXHJcblxyXG5leHBvcnQgY2xhc3MgU3RyZWFtRXZlbnQge1xyXG4gICAgcHVibGljIHN0cmVhbUlkOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZXZlbnQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBkYXRhOiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc3RyZWFtSWQ6IHN0cmluZywgc3RyZWFtRXZlbnQ6IHN0cmluZywgZGF0YTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5zdHJlYW1JZCA9IHN0cmVhbUlkO1xyXG4gICAgICAgIHRoaXMuZXZlbnQgPSBzdHJlYW1FdmVudDtcclxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3RyZWFtIHtcclxuICAgIHB1YmxpYyBldmVudHMkOiBCZWhhdmlvclN1YmplY3Q8U3RyZWFtRXZlbnQ+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxTdHJlYW1FdmVudD4obnVsbCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzdHJlYW1JZDogc3RyaW5nLCBwcml2YXRlIGV2ZW50czogc3RyaW5nW10sIHByaXZhdGUga2VydmlTZXJ2aWNlOiBLZXJ2aUJhc2VTZXJ2aWNlKXtcclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICBrZXJ2aVNlcnZpY2Uuc3BpbmUuYWRkU3RyZWFtSGFuZGxlcihzdHJlYW1JZCwgZXZlbnRzLCBmdW5jdGlvbihlX3N0cmVhbUlkOiBzdHJpbmcsIGVfc3RyZWFtRXZlbnQ6IHN0cmluZywgZV9kYXRhOiBhbnkpIHtcclxuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgU3RyZWFtRXZlbnQoZV9zdHJlYW1JZCwgZV9zdHJlYW1FdmVudCwgZV9kYXRhKTtcclxuICAgICAgICAgICAgbGV0IG5vdGlmeSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoZXZlbnRzID09PSBudWxsIHx8IGV2ZW50cy5sZW5ndGggPT09IDAgfHwgZXZlbnRzLmluZGV4T2YoZV9zdHJlYW1FdmVudCkgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgbm90aWZ5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobm90aWZ5KSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmV2ZW50cyQubmV4dChldmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xvc2UoKSB7XHJcbiAgICAgICAgLy90aGlzLmtlcnZpU2VydmljZS5zcGluZS5yZW1vdmVTdHJlYW1IYW5kbGVyKHN0cmVhbUlkKVxyXG4gICAgfVxyXG59IiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCBUaW0gV2VudHpsYXVcclxuLy8gTGljZW5zZWQgdW5kZXIgTUlUXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgS2VydmlTcGluZUJhc2UgfSBmcm9tICcuL3NwaW5lL2tlcnZpLXNwaW5lYmFzZSc7XHJcbmltcG9ydCB7IEtlcnZpV1NTcGluZSB9IGZyb20gJy4vc3BpbmUva2Vydmktd3MnO1xyXG5pbXBvcnQgeyBLZXJ2aVJNUVNwaW5lIH0gZnJvbSAnLi9zcGluZS9rZXJ2aS1ybXEnO1xyXG5pbXBvcnQgeyAgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IElDb21wb25lbnQgfSBmcm9tICcuL21vZGVscy9JQ29tcG9uZW50Lm1vZGVsJztcclxuaW1wb3J0IHsgQ29tcG9uZW50RmFjdG9yeSB9IGZyb20gJy4vbW9kZWxzL2ZhY3RvcnknO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRNZXNzYWdlTW9kZWwgfSBmcm9tICcuL21vZGVscy9kYXNoYm9hcmQubW9kZWwnO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmQgfSBmcm9tICcuL21vZGVscy9kYXNoYm9hcmQubW9kZWwnO1xyXG5pbXBvcnQgeyBGaWxlQmFzZSwgRGlyZWN0b3J5IH0gZnJvbSAnLi9tb2RlbHMvZmlsZS5tb2RlbCc7XHJcbmltcG9ydCB7IFN0cmVhbSB9IGZyb20gJy4vbW9kZWxzL3N0cmVhbS5tb2RlbCc7XHJcbmRlY2xhcmUgdmFyIGtlcnZpU29ja2V0QWRkcmVzczogYW55O1xyXG5kZWNsYXJlIHZhciBzb2NrZXRQcm90b2NvbDogYW55O1xyXG5cclxuZXhwb3J0IGVudW0gQ29ubmVjdGlvblN0YXRlIHtkaXNjb25uZWN0ZWQsIGxvYWRpbmcsIGF1dGhlbnRpY2F0ZSwgY29ubmVjdGVkfVxyXG5leHBvcnQgZW51bSBVc2VyTG9nU3RhdGVUeXBlIHtub3JtYWwsIHdhcm5pbmcsIGVycm9yfVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgS2VydmlCYXNlU2VydmljZSB7XHJcbiAgcHVibGljIHNwaW5lOiBLZXJ2aVNwaW5lQmFzZSA9IG51bGw7XHJcblxyXG4gIHByaXZhdGUgYXBwSW5mbyA9IG51bGw7XHJcbiAgcHJpdmF0ZSAgdGV4dHM6IHt9ID0gbnVsbDtcclxuICBwcml2YXRlIGNvbXBvbmVudHM6IElDb21wb25lbnRbXSA9IFtdO1xyXG4gIHByaXZhdGUgY29tcG9uZW50cyQ6IEJlaGF2aW9yU3ViamVjdDxJQ29tcG9uZW50W10+ID0gbmV3ICBCZWhhdmlvclN1YmplY3Q8SUNvbXBvbmVudFtdPihbXSk7XHJcblxyXG4gIHB1YmxpYyBjb25uZWN0aW9uU3RhdGUkOiBCZWhhdmlvclN1YmplY3Q8Q29ubmVjdGlvblN0YXRlPiA9IG5ldyAgQmVoYXZpb3JTdWJqZWN0PENvbm5lY3Rpb25TdGF0ZT4oQ29ubmVjdGlvblN0YXRlLmRpc2Nvbm5lY3RlZCk7XHJcbiAgcHVibGljICBhcHBsaWNhdGlvbiQ6IEJlaGF2aW9yU3ViamVjdDxhbnk+O1xyXG4gIHB1YmxpYyBkb0F1dGhlbnRpY2F0ZSA9IGZhbHNlO1xyXG4gIHB1YmxpYyBjb21wb25lbnRzQ2hhbmdlZCQ6IEJlaGF2aW9yU3ViamVjdDxCb29sZWFuPiA9IG5ldyAgQmVoYXZpb3JTdWJqZWN0PEJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgcHJpdmF0ZSBsb2dNZXNzYWdlczogRGFzaGJvYXJkTWVzc2FnZU1vZGVsW10gPSBbXTtcclxuICBwcml2YXRlIGxvZ01lc3NhZ2VzJDogQmVoYXZpb3JTdWJqZWN0PERhc2hib2FyZE1lc3NhZ2VNb2RlbFtdPiA9IG5ldyAgQmVoYXZpb3JTdWJqZWN0PERhc2hib2FyZE1lc3NhZ2VNb2RlbFtdPihbXSk7XHJcbiAgcHJpdmF0ZSBsYXN0TG9nTWVzc2FnZSQ6IEJlaGF2aW9yU3ViamVjdDxEYXNoYm9hcmRNZXNzYWdlTW9kZWw+ID0gbmV3ICBCZWhhdmlvclN1YmplY3Q8RGFzaGJvYXJkTWVzc2FnZU1vZGVsPihudWxsKTtcclxuICBwcml2YXRlIExvZ01lc3NhZ2VDb3VudCQ6IEJlaGF2aW9yU3ViamVjdDxudW1iZXI+ID0gbmV3ICBCZWhhdmlvclN1YmplY3Q8bnVtYmVyPigwKTtcclxuICBwcml2YXRlIExvZ01lc3NhZ2VTdGF0ZSQ6IEJlaGF2aW9yU3ViamVjdDxVc2VyTG9nU3RhdGVUeXBlPiA9IG5ldyAgQmVoYXZpb3JTdWJqZWN0PFVzZXJMb2dTdGF0ZVR5cGU+KFVzZXJMb2dTdGF0ZVR5cGUubm9ybWFsKTtcclxuXHJcbiAgcHJpdmF0ZSBzdHJlYW1zID0ge31cclxuXHJcbiAgSVBDUmVhZHkkOiBCZWhhdmlvclN1YmplY3Q8Qm9vbGVhbj4gPSBuZXcgIEJlaGF2aW9yU3ViamVjdDxCb29sZWFuPihmYWxzZSk7XHJcblxyXG4gIHByaXZhdGUgX3Jlc29sdmVTZWxmO1xyXG4gIHByaXZhdGUgX3JlamVjdFNlbGY7XHJcbiAgcHJpdmF0ZSBhdXRoUHJvbWlzZTogUHJvbWlzZTxzdHJpbmc+ID0gbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBjb25zb2xlLmxvZygna2Vydmkgc2VydmljZSBjb25zdHJ1Y3RvcicpO1xyXG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICB0aGlzLmFwcGxpY2F0aW9uJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55PihudWxsKTtcclxuICAgIHRoaXMuSVBDUmVhZHkkLnN1YnNjcmliZShmdW5jdGlvbihjb25uZWN0ZWQpIHtcclxuICAgICAgaWYgKGNvbm5lY3RlZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdrZXJ2aSBzZXJ2aWNlIGlwYyByZWFkeSAoY29ubmVjdGVkKScpO1xyXG4gICAgICAgIHNlbGYuc3BpbmUuYWRkRXZlbnRIYW5kbGVyKCd2YWx1ZUNoYW5nZWQnLCAnJywgZnVuY3Rpb24oaWQsIHZhbHVlKSB7XHJcbiAgICAgICAgICBmb3IgKGNvbnN0IGNvbXBvbmVudCBvZiBzZWxmLmNvbXBvbmVudHMpIHtcclxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5pZCA9PT0gdmFsdWUuaWQpIHtcclxuICAgICAgICAgICAgICBjb25zdCBkeW5hbWljVmFsdWUgPSBjb21wb25lbnQgYXMgYW55O1xyXG4gICAgICAgICAgICAgIGR5bmFtaWNWYWx1ZS52YWx1ZVRTID0gbmV3IERhdGUodGhpcy50aW1lc3RhbXApO1xyXG4gICAgICAgICAgICAgIGR5bmFtaWNWYWx1ZS5zZXQodmFsdWUudmFsdWUsIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZWxmLnNwaW5lLmFkZEV2ZW50SGFuZGxlcignYWN0aW9uU3RhcnRlZCcsICcnLCBmdW5jdGlvbihpZCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ2FzJywgaWQpO1xyXG4gICAgICAgICAgZm9yIChjb25zdCBjb21wb25lbnQgb2Ygc2VsZi5jb21wb25lbnRzKSB7XHJcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQuaWQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgYWN0aW9uID0gY29tcG9uZW50IGFzIGFueTtcclxuICAgICAgICAgICAgICBhY3Rpb24ucnVubmluZyQubmV4dCh0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZWxmLnNwaW5lLmFkZEV2ZW50SGFuZGxlcignYWN0aW9uRG9uZScsICcnLCBmdW5jdGlvbihpZCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ2FkJywgaWQpO1xyXG4gICAgICAgICAgZm9yIChjb25zdCBjb21wb25lbnQgb2Ygc2VsZi5jb21wb25lbnRzKSB7XHJcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQuaWQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgYWN0aW9uID0gY29tcG9uZW50IGFzIGFueTtcclxuICAgICAgICAgICAgICBhY3Rpb24ucnVubmluZyQubmV4dChmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2VsZi5zcGluZS5hZGRFdmVudEhhbmRsZXIoJ3VzZXJMb2dNZXNzYWdlJywgbnVsbCwgZnVuY3Rpb24odikge1xyXG4gICAgICAgICAgY29uc3QgbWVzc2FnZXMgPSBzZWxmLmxvZ01lc3NhZ2VzJC52YWx1ZTtcclxuICAgICAgICAgIGNvbnN0IG5ld01lc3NhZ2UgPSBuZXcgRGFzaGJvYXJkTWVzc2FnZU1vZGVsKHRoaXMpO1xyXG4gICAgICAgICAgbWVzc2FnZXMudW5zaGlmdChuZXdNZXNzYWdlKTtcclxuICAgICAgICAgIGlmIChtZXNzYWdlcy5sZW5ndGggPiAxMCkge1xyXG4gICAgICAgICAgICBtZXNzYWdlcy5wb3AoKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBsZXQgaGFzRXJyb3JzID0gMDtcclxuICAgICAgICAgIGxldCBoYXNXYXJuaW5ncyA9IDA7XHJcbiAgICAgICAgICBmb3IgKGNvbnN0IG1lc3NhZ2Ugb2YgbWVzc2FnZXMpIHtcclxuICAgICAgICAgICAgaWYgKG1lc3NhZ2UubGV2ZWwgPT09IDEpIHtcclxuICAgICAgICAgICAgICBoYXNFcnJvcnMgKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG1lc3NhZ2UubGV2ZWwgPT09IDIpIHtcclxuICAgICAgICAgICAgICBoYXNXYXJuaW5ncyArKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGhhc0Vycm9ycykge1xyXG4gICAgICAgICAgICBzZWxmLkxvZ01lc3NhZ2VTdGF0ZSQubmV4dChVc2VyTG9nU3RhdGVUeXBlLmVycm9yKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzV2FybmluZ3MpIHtcclxuICAgICAgICAgICAgc2VsZi5Mb2dNZXNzYWdlU3RhdGUkLm5leHQoVXNlckxvZ1N0YXRlVHlwZS53YXJuaW5nKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNlbGYuTG9nTWVzc2FnZVN0YXRlJC5uZXh0KFVzZXJMb2dTdGF0ZVR5cGUubm9ybWFsKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNlbGYuTG9nTWVzc2FnZUNvdW50JC5uZXh0KG1lc3NhZ2VzLmxlbmd0aCk7XHJcbiAgICAgICAgICBzZWxmLmxhc3RMb2dNZXNzYWdlJC5uZXh0KG5ld01lc3NhZ2UpO1xyXG4gICAgICAgICAgc2VsZi5sb2dNZXNzYWdlcyQubmV4dChtZXNzYWdlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIEdldERpcmVjdG9yeShwYXRoOiBzdHJpbmcpOiBQcm9taXNlPERpcmVjdG9yeT4ge1xyXG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlPERpcmVjdG9yeT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCBkaXJlY3RvcnkgPSBuZXcgRGlyZWN0b3J5KHBhdGgpO1xyXG4gICAgICB0aGlzLnNwaW5lLnNlbmRRdWVyeSgnZmlsZXNfZ2V0X2RpcicsIHBhdGgsIGZ1bmN0aW9uKGRpcmVjdG9yeUZpbGVzKSB7XHJcbiAgICAgICAgZGlyZWN0b3J5LnVwZGF0ZUZpbGVzKGRpcmVjdG9yeUZpbGVzKTtcclxuICAgICAgICByZXNvbHZlKGRpcmVjdG9yeSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcHJvbWlzZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBHZXRUaHVtYm5haWwocGF0aDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdGhpcy5zcGluZS5zZW5kUXVlcnkoJ2ZpbGVzX2dldF90aHVtYm5haWwnLCBwYXRoLCBmdW5jdGlvbih0aHVtYm5haWwpIHtcclxuICAgICAgICByZXNvbHZlKHRodW1ibmFpbCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcHJvbWlzZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBHZXRGaWxlKHBhdGg6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHRoaXMuc3BpbmUuc2VuZFF1ZXJ5KCdmaWxlc19nZXRfZmlsZScsIHBhdGgsIGZ1bmN0aW9uKGZpbGUpIHtcclxuICAgICAgICByZXNvbHZlKGZpbGUpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHByb21pc2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgR2V0U3RyZWFtKHN0cmVhbUlkOiBzdHJpbmcsIGV2ZW50cyA9IFtdKSB7XHJcbiAgICByZXR1cm4gbmV3IFN0cmVhbShzdHJlYW1JZCwgZXZlbnRzLCB0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0ZXh0KGtleTogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IHN0cmluZz0gJycpOiBzdHJpbmcge1xyXG4gICAgaWYgKHRoaXMudGV4dHMgJiYga2V5IGluIHRoaXMudGV4dHMpIHtcclxuICAgICAgcmV0dXJuIHRoaXMudGV4dHNba2V5XTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0TG9nTWVzc2FnZXMkKCk6IE9ic2VydmFibGU8RGFzaGJvYXJkTWVzc2FnZU1vZGVsW10+IHtcclxuICAgIHJldHVybiB0aGlzLmxvZ01lc3NhZ2VzJC5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRMYXN0TG9nTWVzc2FnZSQoKTogT2JzZXJ2YWJsZTxEYXNoYm9hcmRNZXNzYWdlTW9kZWw+IHtcclxuICAgIHJldHVybiB0aGlzLmxhc3RMb2dNZXNzYWdlJC5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRMb2dTdGF0ZSQoKTogT2JzZXJ2YWJsZTxVc2VyTG9nU3RhdGVUeXBlPiB7XHJcbiAgICByZXR1cm4gdGhpcy5Mb2dNZXNzYWdlU3RhdGUkLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldExvZ01lc3NhZ2VDb3VudCQoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcclxuICAgIHJldHVybiB0aGlzLkxvZ01lc3NhZ2VDb3VudCQuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNBcHBFbXB0eSgpIHtcclxuICAgIGNvbnN0IGRlZmF1bHREYXNoYm9hcmQgPSB0aGlzLmdldERlZmF1bHREYXNoYm9hcmQoKTtcclxuICAgIGlmIChkZWZhdWx0RGFzaGJvYXJkKSB7XHJcbiAgICAgIHJldHVybiBkZWZhdWx0RGFzaGJvYXJkLmlzRW1wdHkoKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldENvbXBvbmVudChpZDogc3RyaW5nLCBjb21wb25lbnRUeXBlOiBzdHJpbmcgPSBudWxsKSB7XHJcbiAgICBmb3IgKGNvbnN0IGNvbXBvbmVudCBvZiB0aGlzLmNvbXBvbmVudHMpIHtcclxuICAgICAgaWYgKGNvbXBvbmVudC5pZCA9PT0gaWQgJiYgKGNvbXBvbmVudFR5cGUgPT0gbnVsbCB8fCBjb21wb25lbnQuY29tcG9uZW50VHlwZSA9PT0gY29tcG9uZW50VHlwZSkpIHtcclxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRDb21wb25lbnRzQnlUeXBlKHR5cGU6IHN0cmluZykge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICBmb3IgKGNvbnN0IGNvbXBvbmVudCBvZiB0aGlzLmNvbXBvbmVudHMpIHtcclxuICAgICAgaWYgKGNvbXBvbmVudC5jb21wb25lbnRUeXBlID09PSB0eXBlKSB7XHJcbiAgICAgICAgcmVzdWx0LnB1c2goY29tcG9uZW50KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXREZWZhdWx0RGFzaGJvYXJkKCk6IERhc2hib2FyZCB7XHJcbiAgICBjb25zdCBkYXNoYm9hcmRzID0gdGhpcy5nZXRDb21wb25lbnRzQnlUeXBlKCdkYXNoYm9hcmQnKSBhcyBEYXNoYm9hcmRbXTtcclxuICAgIGZvciAoY29uc3QgZGFzaGJvYXJkIG9mIGRhc2hib2FyZHMpIHtcclxuICAgICAgaWYgKGRhc2hib2FyZC5pc0RlZmF1bHQpIHtcclxuICAgICAgICAgIHJldHVybiBkYXNoYm9hcmQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChkYXNoYm9hcmRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgcmV0dXJuIGRhc2hib2FyZHNbMF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuICBwdWJsaWMgY29ubmVjdCgpIHtcclxuICAgIGxldCBhZGRyZXNzID0gbnVsbDtcclxuICAgIGxldCBwcm90b2NvbCA9ICd3cyc7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAoa2VydmlTb2NrZXRBZGRyZXNzKSB7XHJcbiAgICAgICAgYWRkcmVzcyA9IGtlcnZpU29ja2V0QWRkcmVzcztcclxuICAgICAgfVxyXG4gICAgICBpZiAoc29ja2V0UHJvdG9jb2wpIHtcclxuICAgICAgICBwcm90b2NvbCA9IHNvY2tldFByb3RvY29sO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIC8vIGZvciB0ZXN0aW5nIHdpdGggbmcgc2VydmVcclxuICAgICAgY29uc3QgaHR0cFByb3RvY29sID0gbG9jYXRpb24ucHJvdG9jb2w7XHJcbiAgICAgIGlmIChodHRwUHJvdG9jb2wgPT09ICdodHRwcycpIHtcclxuICAgICAgICBwcm90b2NvbCA9ICd3c3MnO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGh0dHBIb3N0ID0gd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lO1xyXG4gICAgICBhZGRyZXNzID0gaHR0cEhvc3QgKyAnOjkwMDAnO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coJ2tzJywgYWRkcmVzcyk7XHJcblxyXG4gICAgdGhpcy5zcGluZSA9IG5ldyBLZXJ2aVdTU3BpbmUoe1xyXG4gICAgICBhZGRyZXNzOiBhZGRyZXNzLFxyXG4gICAgICBwcm90b2NvbDogcHJvdG9jb2wsXHJcbiAgICAgIG9uT3BlbjogdGhpcy5vbk9wZW4sXHJcbiAgICAgIG9uQ2xvc2U6IHRoaXMub25DbG9zZSxcclxuICAgICAgb25BdXRoZW50aWNhdGU6IHRoaXMub25BdXRoZW50aWNhdGUsXHJcbiAgICAgIG9uQXV0aGVudGljYXRlRmFpbGVkOiB0aGlzLm9uQXV0aGVudGljYXRlRmFpbGVkLFxyXG4gICAgICBvbkxvZ09mZjogdGhpcy5vbkxvZ29mZixcclxuICAgICAgb25BdXRoZW50aWNhdGVTdGFydDogdGhpcy5vbkF1dGhlbnRpY2F0ZVN0YXJ0LFxyXG4gICAgICB0YXJnZXRTY29wZTogdGhpc1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29ubmVjdE1RKCkge1xyXG4gICAgY29uc29sZS5sb2coJ2tzJywgc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnbXFjJykpO1xyXG5cclxuICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdtcWMnKSkge1xyXG4gICAgICB0aGlzLnNwaW5lID0gbmV3IEtlcnZpUk1RU3BpbmUoe1xyXG4gICAgICAgIG9uT3BlbjogdGhpcy5vbk9wZW4sXHJcbiAgICAgICAgb25DbG9zZTogdGhpcy5vbkNsb3NlLFxyXG4gICAgICAgIG9uQXV0aGVudGljYXRlOiB0aGlzLm9uQXV0aGVudGljYXRlLFxyXG4gICAgICAgIG9uQXV0aGVudGljYXRlRmFpbGVkOiB0aGlzLm9uQXV0aGVudGljYXRlRmFpbGVkLFxyXG4gICAgICAgIG9uTG9nT2ZmOiB0aGlzLm9uTG9nb2ZmLFxyXG4gICAgICAgIG9uQXV0aGVudGljYXRlU3RhcnQ6IHRoaXMub25BdXRoZW50aWNhdGVTdGFydCxcclxuICAgICAgICB0YXJnZXRTY29wZTogdGhpcyxcclxuICAgICAgICBhcGlUb2tlbjogSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdtcWMnKSlcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZygncW1jIG5vdCBmb3VuZCBpbiBzdG9yYWdlJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc0Fub255bW91cygpIHtcclxuICAgIHJldHVybiB0aGlzLnNwaW5lLm9wdGlvbnMudXNlck5hbWUgPT09ICdhbm9ueW1vdXMnO1xyXG4gIH1cclxuXHJcbiAgYXV0aGVudGljYXRlKHVzZXJOYW1lLCBwYXNzd29yZCkge1xyXG4gICAgY29uc29sZS5sb2coJ3NhJywgdXNlck5hbWUsIHBhc3N3b3JkKTtcclxuICAgIHRoaXMuYXV0aFByb21pc2UgPSBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdGhpcy5fcmVzb2x2ZVNlbGYgPSByZXNvbHZlO1xyXG4gICAgICB0aGlzLl9yZWplY3RTZWxmID0gcmVqZWN0O1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNwaW5lLmF1dGhlbnRpY2F0ZSh1c2VyTmFtZSwgcGFzc3dvcmQpO1xyXG4gICAgcmV0dXJuIHRoaXMuYXV0aFByb21pc2U7XHJcbiAgfVxyXG5cclxuICBsb2dvZmYoKSB7XHJcbiAgICB0aGlzLnNwaW5lLmxvZ29mZigpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkF1dGhlbnRpY2F0ZVN0YXJ0KCkge1xyXG5cclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25BdXRoZW50aWNhdGUoKSB7XHJcbiAgICB0aGlzLmRvQXV0aGVudGljYXRlID0gdHJ1ZTtcclxuICAgIHRoaXMucmVzZXQoKTtcclxuICAgIHRoaXMuX3Jlc29sdmVTZWxmKCdvaycpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkF1dGhlbnRpY2F0ZUZhaWxlZCgpIHtcclxuICAgIHRoaXMuX3JlamVjdFNlbGYoJ2Vycm9yJyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uTG9nb2ZmKCkge1xyXG4gICAgdGhpcy5kb0F1dGhlbnRpY2F0ZSA9IHRydWU7XHJcbiAgICBpZiAodGhpcy5zcGluZS5maXJzdE9uT3Blbikge1xyXG4gICAgICB0aGlzLklQQ1JlYWR5JC5uZXh0KHRydWUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yZXNldCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZXNldCgpIHtcclxuICAgIHRoaXMuY29tcG9uZW50cyA9IFtdO1xyXG4gICAgdGhpcy5jb21wb25lbnRzJC5uZXh0KHRoaXMuY29tcG9uZW50cyk7XHJcblxyXG4gICAgY29uc3QgbWVzc2FnZXMgPSBbXTtcclxuICAgIHRoaXMuTG9nTWVzc2FnZVN0YXRlJC5uZXh0KFVzZXJMb2dTdGF0ZVR5cGUubm9ybWFsKTtcclxuICAgIHRoaXMuTG9nTWVzc2FnZUNvdW50JC5uZXh0KG1lc3NhZ2VzLmxlbmd0aCk7XHJcbiAgICB0aGlzLmxvZ01lc3NhZ2VzJC5uZXh0KG1lc3NhZ2VzKTtcclxuXHJcbiAgICBpZiAodGhpcy5JUENSZWFkeSQudmFsdWUpIHtcclxuICAgICAgdGhpcy5jb25uZWN0aW9uU3RhdGUkLm5leHQoQ29ubmVjdGlvblN0YXRlLmF1dGhlbnRpY2F0ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNvbm5lY3Rpb25TdGF0ZSQubmV4dChDb25uZWN0aW9uU3RhdGUuZGlzY29ubmVjdGVkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0Q29tcG9uZW50SW5mbyhyZXRyeUNvdW50LCBtb2R1bGVfbG9hZCkge1xyXG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICB0aGlzLnNwaW5lLnNlbmRRdWVyeSgnR2V0QXBwbGljYXRpb25JbmZvJywgZnVuY3Rpb24oYXBwSW5mbykge1xyXG4gICAgICBjb25zb2xlLmxvZygnYXBwIGluZm8nLCBhcHBJbmZvKTtcclxuICAgICAgdGhpcy5zcGluZS5zZW5kUXVlcnkoJ2dldENvbXBvbmVudEluZm8nLCBmdW5jdGlvbihtZXNzYWdlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NvbXBvbmVudCBpbmZvJywgbWVzc2FnZSk7XHJcbiAgICAgICAgc2VsZi5hcHBsaWNhdGlvbiQubmV4dChhcHBJbmZvKTtcclxuICAgICAgICBzZWxmLnRleHRzID0gYXBwSW5mby5kaXNwbGF5LnRleHRzO1xyXG4gICAgICAgIHNlbGYuY29tcG9uZW50cyA9IENvbXBvbmVudEZhY3RvcnkuY3JlYXRlQ29tcG9uZW50cyhtZXNzYWdlLCBzZWxmKTtcclxuICAgICAgICBDb21wb25lbnRGYWN0b3J5LkZpeENvbnRyb2xsZXJSZWZlcmVuY2VzKHNlbGYuZ2V0Q29tcG9uZW50c0J5VHlwZSgnY29udHJvbGxlcicpKTtcclxuICAgICAgICBzZWxmLmNvbXBvbmVudHMkLm5leHQoc2VsZi5jb21wb25lbnRzKTtcclxuICAgICAgICBzZWxmLmNvbm5lY3Rpb25TdGF0ZSQubmV4dChDb25uZWN0aW9uU3RhdGUuY29ubmVjdGVkKTtcclxuICAgICAgICBpZiAobW9kdWxlX2xvYWQpIHtcclxuICAgICAgICAgIHNlbGYuY29tcG9uZW50c0NoYW5nZWQkLm5leHQodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjb21wb25lbnRzJywgc2VsZi5jb21wb25lbnRzKTtcclxuICAgICAgfSxcclxuICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignZ2V0IGNvbXBvbmVudCBpbmZvIHRpbWVvdXQnKTtcclxuICAgICAgICBpZiAocmV0cnlDb3VudCA+IDApIHtcclxuICAgICAgICAgIHNlbGYuZ2V0Q29tcG9uZW50SW5mbyhyZXRyeUNvdW50IC0gMSwgbW9kdWxlX2xvYWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25PcGVuKGZpcnN0KSB7XHJcbiAgICBjb25zb2xlLmxvZygna2Vydmkgc2VydmljZSBvbiBvcGVuJywgdGhpcy5zcGluZS5maXJzdE9uT3BlbiwgZmlyc3QsIHRoaXMpO1xyXG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICB0aGlzLmNvbm5lY3Rpb25TdGF0ZSQubmV4dChDb25uZWN0aW9uU3RhdGUubG9hZGluZyk7XHJcbiAgICB0aGlzLmRvQXV0aGVudGljYXRlID0gdGhpcy5zcGluZS5kb0F1dGhlbnRpY2F0ZTtcclxuICAgIHRoaXMuZ2V0Q29tcG9uZW50SW5mbygyLCBmYWxzZSk7XHJcbiAgICBpZiAoc2VsZi5zcGluZS5maXJzdE9uT3Blbikge1xyXG4gICAgICB0aGlzLklQQ1JlYWR5JC5uZXh0KHRydWUpO1xyXG4gICAgICB0aGlzLnNwaW5lLmFkZEV2ZW50SGFuZGxlcignbW9kdWxlU3RhcnRlZCcsICcnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdtb2R1bGUgbG9hZGVkJywgc2VsZi5jb21wb25lbnRzKTtcclxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNlbGYuZ2V0Q29tcG9uZW50SW5mbygyLCB0cnVlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICwgMjAwMCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5zcGluZS5hZGRFdmVudEhhbmRsZXIoJ21vZHVsZVN0b3BwZWQnLCAnJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnbW9kdWxlIHVubG9hZGVkJyk7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbW9kdWxlIHVubG9hZGVkLCByZWZyZXNoJyk7XHJcbiAgICAgICAgICAgIHNlbGYuZ2V0Q29tcG9uZW50SW5mbygyLCB0cnVlKTtcclxuICAgICAgICB9LCA1MDAwKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uQ2xvc2UoKSB7XHJcbiAgICB0aGlzLnJlc2V0KCk7XHJcbiAgICBjb25zb2xlLmxvZygna3Mgb24gY2xvc2UnKTtcclxuICAgIHRoaXMuSVBDUmVhZHkkLm5leHQoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkhlYXJ0YmVhdCgpIHtcclxuXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uQ29ubmVjdCgpIHtcclxuXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1rZXJ2aS1qcycsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxwPlxyXG4gICAgICBrZXJ2aS1qcyB3b3JrcyFcclxuICAgIDwvcD5cclxuICBgLFxyXG4gIHN0eWxlczogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIEtlcnZpSnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEtlcnZpSnNDb21wb25lbnQgfSBmcm9tICcuL2tlcnZpLWpzLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW0tlcnZpSnNDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtLZXJ2aUpzQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgS2VydmlKc01vZHVsZSB7IH1cclxuIl0sIm5hbWVzIjpbInRzbGliXzEuX192YWx1ZXMiLCJ0c2xpYl8xLl9fZXh0ZW5kcyIsIktlcnZpVmFsdWVzLkJvb2xlYW5WYWx1ZSIsIktlcnZpVmFsdWVzLk51bWJlclZhbHVlIiwiS2VydmlWYWx1ZXMuU3RyaW5nVmFsdWUiLCJLZXJ2aVZhbHVlcy5TZWxlY3RWYWx1ZSIsIktlcnZpVmFsdWVzLkRhdGVUaW1lVmFsdWUiLCJLZXJ2aVZhbHVlcy5Db2xvclZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBR0E7SUF3Q0ksd0JBQW1CLGtCQUFrQjtRQUFsQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQUE7UUF0QzlCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzdCLG1CQUFjLEdBQVcsS0FBSyxDQUFDO1FBRXRDLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsa0JBQWEsR0FBQyxFQUFFLENBQUM7UUFDakIsb0JBQWUsR0FBQyxFQUFFLENBQUM7UUFDbkIsa0JBQWEsR0FBQyxFQUFFLENBQUM7UUFDakIsbUJBQWMsR0FBQyxFQUFFLENBQUM7UUFDbEIsYUFBUSxHQUFDLEVBQUUsQ0FBQztRQUNaLFVBQUssR0FBQyxLQUFLLENBQUM7UUFDWixjQUFTLEdBQUMsQ0FBQyxDQUFDO1FBQ1osWUFBTyxHQUFDLEVBQUUsQ0FBQztRQUNYLGdCQUFXLEdBQUMsRUFBRSxDQUFDO1FBQ2YsZ0JBQVcsR0FBQyxFQUFFLENBQUM7UUFDZixvQkFBZSxHQUFDLEVBQUUsQ0FBQztRQUNuQixrQkFBYSxHQUFDLEVBQUUsQ0FBQztRQUNqQixnQkFBVyxHQUFDLElBQUksQ0FBQztRQUNqQixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0QixnQkFBVyxHQUFHLElBQUksQ0FBQztRQUVULGNBQVMsR0FBRyxJQUFJLENBQUM7UUFFcEIsWUFBTyxHQUFR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

/***/ }),

/***/ "../../dist/kervi-zorro/fesm5/kervi-zorro.js":
/*!**********************************************************************************************!*\
  !*** D:/tim privat/github/kervi/kervi-ui/kervi/ui/web/dist/kervi-zorro/fesm5/kervi-zorro.js ***!
  \**********************************************************************************************/
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
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
                    template: "<ng-container *ngIf=\"linkParameters.isInput\">\n    \n    <nz-form-control >\n        <nz-slider [nzMin]=\"value.minValue\" [nzMax]=\"value.maxValue\" [nzStep]=\"1\"  [(ngModel)]=\"value.value\"></nz-slider>\n        <nz-input-number id=\"{{value.id}}\" [nzMin]=\"value.minValue\" [nzMax]=\"value.maxValue\" [nzStep]=\"1\" [(ngModel)]=\"value.value\"  ></nz-input-number>\n        \n    </nz-form-control>\n    \n</ng-container>\n<ng-container *ngIf=\"!linkParameters.isInput\">\n\n    <span class=\"value-value\" [style.min-width.rem]=\"linkParameters.valueSize\">\n        <i *ngIf=\"currentIcon\" class=\"fa fa-{{currentIcon}}\"></i>\n        <value-sparkline *ngIf=\"linkParameters.showSparkline && !linkParameters.isInput\" [value]=\"value\"></value-sparkline>\n        {{(value.value$ | async | number:numberFormat)}}\n        <span *ngIf=\"linkParameters.displayUnit\">{{value.unit}}</span>\n    </span>\n</ng-container>\n",
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
        this.value = 0;
        this.type = "horizontal_slider";
        this.defaultSizes = new kervi_js__WEBPACK_IMPORTED_MODULE_3__["DashboardSizes"]();
        this.sliderChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.marks = {};
        //console.log("cnio",this);
    }
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
    function MPEGViewerComponent(kerviService, domSanitizer) {
        this.kerviService = kerviService;
        this.domSanitizer = domSanitizer;
        this.width = null;
        this.height = null;
        this.imageLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.stream = null;
        this.firstLoad = true;
        this.fpsCounter = 0;
        this.fpsTime = new Date();
        this.streamSubscription = null;
        this.fps = 0;
    }
    Object.defineProperty(MPEGViewerComponent.prototype, "cameraSource", {
        set: /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            console.log('set cam source', id);
            this.setSource(id);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MPEGViewerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} source
     * @return {?}
     */
    MPEGViewerComponent.prototype.setSource = /**
     * @param {?} source
     * @return {?}
     */
    function (source) {
        console.log("sc", source);
        /** @type {?} */
        var self = this;
        if (this.stream) {
            this.streamSubscription.unsubscribe();
        }
        this.stream = this.kerviService.GetStream(source, ['IMAGE_FRAME']);
        console.log("scx", this.stream);
        this.streamSubscription = this.stream.events$.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            //console.log('ce', event);
            if (event) {
                /** @type {?} */
                var blob = new Blob([event.data], { type: "image/jpeg" });
                self.streamData = self.domSanitizer.bypassSecurityTrustUrl(URL.createObjectURL(blob));
                self.fpsCounter += 1;
                /** @type {?} */
                var now = new Date();
                /** @type {?} */
                var fpsDiff = now.getTime() - self.fpsTime.getTime();
                /** @type {?} */
                var seconds = fpsDiff / 1000;
                if (seconds > 1) {
                    self.fps = self.fpsCounter / seconds;
                    //console.log('fps', self.fpsCounter, seconds, source, self.fps);
                    self.fpsCounter = 0;
                    self.fpsTime = now;
                }
            }
        }));
    };
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
                    template: "<img (load)=\"imageReady()\" class=\"camImage\" [attr.src]=\"streamData\" [style.height.%]=\"height\" [style.width.%]=\"width\">\n",
                    styles: ["#video-viewer{margin-top:-20px}.cam-pad-area{z-index:1200;vertical-align:middle;width:200px;display:inline-block;position:absolute;left:389px;top:132px;color:#fff}"]
                },] },
    ];
    /** @nocollapse */
    MPEGViewerComponent.ctorParameters = function () { return [
        { type: ngx_kervi__WEBPACK_IMPORTED_MODULE_2__["NGXKerviService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] }
    ]; };
    MPEGViewerComponent.propDecorators = {
        cameraSource: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        imageLoaded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        streamData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        fps: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
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
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                        ngx_kervi__WEBPACK_IMPORTED_MODULE_2__["NGXKerviPipesModule"],
                        _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
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
                        _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
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
        if (this.camera !== null) {
            /** @type {?} */
            var element_1 = self.videoViewer.nativeElement;
            /** @type {?} */
            var viewPortHeight = window.innerHeight;
            /** @type {?} */
            var viewPortWidth = window.innerWidth;
            this.camHeight = viewPortHeight - 65;
            this.camWidth = viewPortWidth;
            console.log('avic', this.camHeight, this.camWidth);
            setTimeout((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var h = element_1.offsetHeight;
                /** @type {?} */
                var w = element_1.offsetWidth;
                if (w < self.padSize) {
                    self.padSize = w - 10;
                }
                console.log('cami', h, w, self.padSize, element_1);
                self.camPadTop = h / 2 - (self.padSize / 2);
                self.camPadLeft = w / 2 - (self.padSize / 2);
                self.showCamPad = true;
            }), 0);
        }
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
                    template: "<ng-container *ngIf=\"isBackground && camera!==null\">\n\t<div #videoViewer id=\"video-viewer\" class=\"video video-background\" style=\"text-align:center;position:fixed;top:60px;left:0px;height:100%;\" [style.height.px]=\"camHeight\" [style.width.px]=\"camWidth\">\n\t\t<div style=\"position:fixed;z-index:3000\" *ngIf=\"streamObservers.length > 0\">\n\t\t\t<button (click)=\"changeSource(cameraSource)\" >base</button>\n\t\t\t<button *ngFor=\"let observer of streamObservers\" (click)=\"changeSource(observer.ui.stream)\"> {{ observer.name}}</button>\t\t\t\n\t\t</div>\n\t\t<span class=\"camImage\" style=\"top:0px;left:0px;\">\n\t\t\t<kervi-mpeg-viewer (imageLoaded)=\"imageLoaded()\" [height]=100   [cameraSource]=\"selectedSource\" > </kervi-mpeg-viewer>\n\t\t</span>\n\t\t<canvas id=\"camCanvas\" style=\"position:absolute;top:0px;left:0px;\" [style.height.px]=\"camHeight\" [style.width.px]=\"camWidth\"></canvas>\n\t\t<canvas id=\"poiCanvas\" style=\"position:absolute;top:0px;left:0px;width:100%;height:100%\"></canvas>\n\t\t<div class=\"cam-pad-area\" *ngIf=\"showCamPad\" [style.left.px]=\"camPadLeft\" [style.top.px]=\"camPadTop\" style=\"position:absolute;z-index: 2000\">\n      <kervi-controller-pad [XValue]=\"pan\" [YValue]=\"tilt\"> </kervi-controller-pad>\n\t\t</div>\n\t\t<div style=\"position:absolute;top:30px;left:0px;width:100%;height:50px\">\n\t\t\t<ng-container  *ngFor=\"let action of camera.actions\">\n\t\t\t\t<kervi-action title=\"{{( action.name | translate)}}\" *ngIf=\"action.visible\" [action]=\"action\" ></kervi-action>\n\t\t\t</ng-container>\n\t\t</div>\n\t</div>\n</ng-container>\n\n<ng-container *ngIf=\"!isBackground && camera!==null\">\n\t<div #videoViewer id=\"video-viewer\" class=\"video\" style=\"overflow:hidden;position:relative;width:100%\">\n\t\t<span class=\"camImage\" style=\"top:0px;left:0px;height:100%;width:100%\">\n\t\t\t<kervi-mpeg-viewer (imageLoaded)=\"imageLoaded()\" [width]=100  [cameraSource]=\"cameraSource\" > </kervi-mpeg-viewer>\n\t\t</span>\n\t\t<canvas id=\"camCanvas\" style=\"position:absolute;top:0px;left:0px;width:100%;height:100%\"></canvas>\n\t\t<canvas id=\"poiCanvas\" style=\"position:absolute;top:0px;left:0px;width:100%;height:100%\"></canvas>\n\t\t<div class=\"cam-pad-area\" *ngIf=\"showCamPad\" [style.left.px]=\"camPadLeft\" [style.top.px]=\"camPadTop\" style=\"position:absolute\">\n      <kervi-controller-pad [XValue]=\"pan\" [YValue]=\"tilt\"> </kervi-controller-pad>\n\t\t</div>\n\t</div>\n\t<div>\n\t\t<ng-container  *ngFor=\"let action of camera.actions\">\n\t\t\t<kervi-action *ngIf=\"action.ui.visible\" title=\"{{( action.name | translate)}}\" [action]=\"action\" ></kervi-action>\n\t\t</ng-container>\n\t\t<!-- <button class=\"btn btn-primary\" (mousedown)=\"imageViewer.show()\" title=\"{{( 'media_folder' | translate)}}\">\n\t\t\t<i  class='fa fa-folder'></i>\n\t\t</button> -->\n\t</div>\n</ng-container>\n<!-- <kervi-image-viewer #imageViewer [camComponent]=\"this\" [cameraSource]=\"cameraSource\"></kervi-image-viewer> -->",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    CamViewerComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    CamViewerComponent.propDecorators = {
        videoViewer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['videoViewer',] }]
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
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2Vydmktem9ycm8uanMubWFwIiwic291cmNlcyI6WyJuZzovL2tlcnZpLXpvcnJvL2xpYi9rZXJ2aS16b3Jyby5zZXJ2aWNlLnRzIiwibmc6Ly9rZXJ2aS16b3Jyby9saWIvZGFzaGJvYXJkLXBhbmVsL2Rhc2hib2FyZC1wYW5lbC5jb21wb25lbnQudHMiLCJuZzovL2tlcnZpLXpvcnJvL2xpYi93aWRnZXQvd2lkZ2V0LmNvbXBvbmVudC50cyIsIm5nOi8va2Vydmktem9ycm8vbGliL3ZhbHVlcy9udW1iZXItdmFsdWUvbnVtYmVyLXZhbHVlLmNvbXBvbmVudC50cyIsIm5nOi8va2Vydmktem9ycm8vbGliL3ZhbHVlcy9ib29sZWFuLXZhbHVlL2Jvb2xlYW4tdmFsdWUuY29tcG9uZW50LnRzIiwibmc6Ly9rZXJ2aS16b3Jyby9saWIvdmFsdWVzL3N0cmluZy12YWx1ZS9zdHJpbmctdmFsdWUuY29tcG9uZW50LnRzIiwibmc6Ly9rZXJ2aS16b3Jyby9saWIvdmFsdWVzL2RhdGV0aW1lLXZhbHVlL2RhdGV0aW1lLXZhbHVlLmNvbXBvbmVudC50cyIsIm5nOi8va2Vydmktem9ycm8vbGliL3ZhbHVlcy9jb2xvci12YWx1ZS9jb2xvci12YWx1ZS5jb21wb25lbnQudHMiLCJuZzovL2tlcnZpLXpvcnJvL2xpYi91aS1jb21wb25lbnRzL3NwYXJrbGluZS9zcGFya2xpbmUuY29tcG9uZW50LnRzIiwibmc6Ly9rZXJ2aS16b3Jyby9saWIvdWktY29tcG9uZW50cy9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC50cyIsIm5nOi8va2Vydmktem9ycm8vbGliL3VpLWNvbXBvbmVudHMvZ2F1Z2UvZ2F1Z2UuY29tcG9uZW50LnRzIiwibmc6Ly9rZXJ2aS16b3Jyby9saWIvdWktY29tcG9uZW50cy9jaGFydC9jaGFydC5jb21wb25lbnQudHMiLCJuZzovL2tlcnZpLXpvcnJvL2xpYi91aS1jb21wb25lbnRzL3N3aXRjaC1idXR0b24vc3dpdGNoLWJ1dHRvbi5jb21wb25lbnQudHMiLCJuZzovL2tlcnZpLXpvcnJvL2xpYi91aS1jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnRzIiwibmc6Ly9rZXJ2aS16b3Jyby9saWIvdWktY29tcG9uZW50cy9tcGVnLXZpZXdlci9tcGVnLXZpZXdlci5jb21wb25lbnQudHMiLCJuZzovL2tlcnZpLXpvcnJvL2xpYi91aS1jb21wb25lbnRzL2RhdGV0aW1lcGlja2VyL2RhdGV0aW1lcGlja2VyLmNvbXBvbmVudC50cyIsIm5nOi8va2Vydmktem9ycm8vbGliL3VpLWNvbXBvbmVudHMvaWNvbnMvaWNvbnMuY29tcG9uZW50LnRzIiwibmc6Ly9rZXJ2aS16b3Jyby9saWIvdWktY29tcG9uZW50cy9jb2xvci9jb2xvci5jb21wb25lbnQudHMiLCJuZzovL2tlcnZpLXpvcnJvL2xpYi91aS1jb21wb25lbnRzL3VpLWNvbXBvbmVudHMubW9kdWxlLnRzIiwibmc6Ly9rZXJ2aS16b3Jyby9saWIvdmFsdWVzL2tlcnZpLXZhbHVlL2tlcnZpLXZhbHVlLmNvbXBvbmVudC50cyIsIm5nOi8va2Vydmktem9ycm8vbGliL3ZhbHVlcy92YWx1ZXMubW9kdWxlLnRzIiwibmc6Ly9rZXJ2aS16b3Jyby9saWIvY29udHJvbGxlci1wYWQvY29udHJvbGxlci1wYWQuY29tcG9uZW50LnRzIiwibmc6Ly9rZXJ2aS16b3Jyby9saWIvY2FtLXZpZXdlci9jYW0tdmlld2VyLmNvbXBvbmVudC50cyIsIm5nOi8va2Vydmktem9ycm8vbGliL2FjdGlvbi9hY3Rpb24uY29tcG9uZW50LnRzIiwibmc6Ly9rZXJ2aS16b3Jyby9saWIvbG9nL3VzZXItbG9nL3VzZXItbG9nLmNvbXBvbmVudC50cyIsIm5nOi8va2Vydmktem9ycm8vbGliL2xvZy9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQudHMiLCJuZzovL2tlcnZpLXpvcnJvL2xpYi9sb2cvbWVzc2FnZS1idXR0b24vbWVzc2FnZS1idXR0b24uY29tcG9uZW50LnRzIiwibmc6Ly9rZXJ2aS16b3Jyby9saWIva2Vydmktem9ycm8ubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEtlcnZpWm9ycm9TZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBLZXJ2aURhc2hib2FyZFBhbmVsQ29tcG9uZW50IH0gZnJvbSAnbmd4LWtlcnZpJ1xyXG5pbXBvcnQgeyBncm91cCB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2tlcnZpLWRhc2hib2FyZC1wYW5lbCcsXHJcbiAgdGVtcGxhdGU6IGA8IS0tIDxwPnt7cGFuZWwubmFtZX19IC0ge3twYW5lbC50eXBlfX0gLSB7e2dyb3VwTGF5b3V0fX0gLSB7e2JvZHlPbmx5fX0gLSB7e2lubGluZX19IC0ge3twYW5lbC5zdWJQYW5lbHMubGVuZ3RofX0gLSB7e3BhbmVsLmNvbXBvbmVudHMubGVuZ3RofX0gLSB7e2hlYWRlckNvbXBvbmVudHMubGVuZ3RofX0gLSB7e2JvZHlDb21wb25lbnRzLmxlbmd0aH19PC9wPiAtLT5cclxuPCEtLSA8cD53PXt7d2lkdGh9fSAtIHt7aW5Hcm91cH19PC9wPiAtLT5cclxuPG5nLWNvbnRhaW5lciAqbmdJZj1cInBhbmVsLnR5cGU9PSdncm91cCdcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJrZXJ2aS1wYW5lbC1kZWNrXCIgW2Z4TGF5b3V0XT1cInBhbmVsLnBhcmFtZXRlcnMubGF5b3V0XCIgZnhMYXlvdXQueHM9XCJjb2x1bW5cIiAgZnhMYXlvdXRHYXA9XCIwLjUlXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgc3ViUGFuZWwgb2YgcGFuZWwuc3ViUGFuZWxzXCI+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzdWJQYW5lbC50eXBlIT0nZ3JvdXAnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxrZXJ2aS1kYXNoYm9hcmQtcGFuZWwgZnhGbGV4LnhzPVwiMTAwXCIgW2Z4RmxleF09XCJzdWJQYW5lbC5wYXJhbWV0ZXJzLndpZHRoXCIgW2JvZHlPbmx5XT1cInRydWVcIiBbaW5Hcm91cF09XCJ0cnVlXCIgW2Rhc2hib2FyZFNpemVzXT1cImRhc2hib2FyZFNpemVzXCIgIFtwYW5lbF09XCJzdWJQYW5lbFwiPjwva2VydmktZGFzaGJvYXJkLXBhbmVsPlxyXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInN1YlBhbmVsLnR5cGU9PSdncm91cCdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8a2VydmktZGFzaGJvYXJkLXBhbmVsIGZ4RmxleC54cz1cIjEwMFwiIFtmeEZsZXhdPVwic3ViUGFuZWwucGFyYW1ldGVycy53aWR0aFwiIFtpbkdyb3VwXT1cInRydWVcIiBbZGFzaGJvYXJkU2l6ZXNdPVwiZGFzaGJvYXJkU2l6ZXNcIiAgW3BhbmVsXT1cInN1YlBhbmVsXCI+PC9rZXJ2aS1kYXNoYm9hcmQtcGFuZWw+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbjwvbmctY29udGFpbmVyPlxyXG5cclxuPG5nLWNvbnRhaW5lciAqbmdJZj1cInBhbmVsLnR5cGUhPSdncm91cCcgJiYgIWlubGluZVwiPlxyXG4gICAgXHJcbiAgICA8bnotY2FyZCAgW256VGl0bGVdPVwic2hvd0hlYWRlciA/IHRpdGxlIDogbnVsbFwiIFtuekV4dHJhXT1cImhlYWRlckNvbXBvbmVudHMubGVuZ3RoPjAgPyBleHRyYVRlbXBsYXRlIDogbnVsbFwiPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjZXh0cmFUZW1wbGF0ZT5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgcGFuZWxDb21wb25lbnQgb2YgaGVhZGVyQ29tcG9uZW50c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8a2Vydmktd2lkZ2V0IFtjb21wb25lbnRdPVwicGFuZWxDb21wb25lbnQuY29tcG9uZW50XCIgW2Rhc2hib2FyZFBhbmVsXT1cInBhbmVsXCIgW2lubGluZV09XCJpbmxpbmVcIiAgW2xpbmtQYXJhbWV0ZXJzXT1cInBhbmVsQ29tcG9uZW50LnBhcmFtZXRlcnNcIj48L2tlcnZpLXdpZGdldD5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBwYW5lbENvbXBvbmVudCBvZiBib2R5Q29tcG9uZW50c1wiPlxyXG4gICAgICAgICAgICA8a2Vydmktd2lkZ2V0IFtjb21wb25lbnRdPVwicGFuZWxDb21wb25lbnQuY29tcG9uZW50XCIgW2Rhc2hib2FyZFBhbmVsXT1cInBhbmVsXCIgIFtpbmxpbmVdPVwiaW5saW5lXCIgIFtsaW5rUGFyYW1ldGVyc109XCJwYW5lbENvbXBvbmVudC5wYXJhbWV0ZXJzXCI+PC9rZXJ2aS13aWRnZXQ+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICBcclxuICAgICAgICA8ZGl2ICpuZ0lmPVwicGFuZWwucGFyYW1ldGVycy51c2VyTG9nXCIgID5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxrZXJ2aS11c2VyLWxvZz48L2tlcnZpLXVzZXItbG9nPlxyXG4gICAgICAgIDwvZGl2PiBcclxuICAgIDwvbnotY2FyZD5cclxuPC9uZy1jb250YWluZXI+XHJcblxyXG48bmctdGVtcGxhdGUgW25nSWZdPVwiaW5saW5lICYmIHBhbmVsLmNvbXBvbmVudHMubGVuZ3RoPjBcIiA+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBwYW5lbENvbXBvbmVudCBvZiBwYW5lbC5jb21wb25lbnRzXCIgPlxyXG4gICAgICAgIDxrZXJ2aS13aWRnZXQgW2NvbXBvbmVudF09XCJwYW5lbENvbXBvbmVudC5jb21wb25lbnRcIiAgW2lubGluZV09XCJpbmxpbmVcIiBbZGFzaGJvYXJkUGFuZWxdPVwicGFuZWxcIiAgW2xpbmtQYXJhbWV0ZXJzXT1cInBhbmVsQ29tcG9uZW50LnBhcmFtZXRlcnNcIj48L2tlcnZpLXdpZGdldD5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG48L25nLXRlbXBsYXRlPmAsXHJcbiAgc3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRQYW5lbENvbXBvbmVudCBleHRlbmRzIEtlcnZpRGFzaGJvYXJkUGFuZWxDb21wb25lbnQge1xyXG4gIHB1YmxpYyBncm91cExheW91dD1cInJvd1wiO1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMubmdPbkluaXRQYW5lbCgpO1xyXG4gICAgaWYgKHRoaXMucGFuZWwuaGFzT25seUdyb3VwUGFuZWxzKVxyXG4gICAgICB0aGlzLmdyb3VwTGF5b3V0ID0gXCJyb3dcIjtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEtlcnZpV2lkZ2V0Q29tcG9uZW50IH0gZnJvbSAnbmd4LWtlcnZpJ1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdrZXJ2aS13aWRnZXQnLFxyXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRhaW5lciAqbmdJZj1cIndpZGdldFR5cGU9PSd2YWx1ZSdcIj5cclxuICAgIDxkaXYgZnhMYXlvdXQ9XCJyb3dcIiAqbmdJZj1cIiFpbmxpbmVcIiBjbGFzcz1cImtlcnZpLWJsb2NrLXdpZGdldFwiPiBcclxuICAgICAgICA8ZGl2IGZ4RmxleD1cIjYwXCIgY2xhc3M9XCJrZXJ2aS12YWx1ZS1sYWJlbFwiPlxyXG4gICAgICAgICAgICA8c3BhbiAgICpuZ0lmPVwibGlua1BhcmFtZXRlcnMubGFiZWxJY29uXCIgY2xhc3M9XCJwaSBwaS17e2xpbmtQYXJhbWV0ZXJzLmxhYmVsSWNvbn19XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiAgICpuZ0lmPVwibGlua1BhcmFtZXRlcnMubGFiZWxcIj57e2xpbmtQYXJhbWV0ZXJzLmxhYmVsfX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBmeEZsZXggY2xhc3M9XCJrZXJ2aS12YWx1ZS1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgIDxrZXJ2aS12YWx1ZSAqbmdJZj1cImNvbXBvbmVudC5jb21wb25lbnRUeXBlPT0nS2VydmlWYWx1ZSdcIiBbdmFsdWVdPVwiY29tcG9uZW50XCIgW2lubGluZV09XCJmYWxzZVwiIFtkYXNoYm9hcmRTaXplc109XCJkYXNoYm9hcmRTaXplc1wiICBbbGlua1BhcmFtZXRlcnNdPVwibGlua1BhcmFtZXRlcnNcIj48L2tlcnZpLXZhbHVlPlxyXG4gICAgICAgICAgICA8a2VydmktYWN0aW9uICAqbmdJZj1cImNvbXBvbmVudC5jb21wb25lbnRUeXBlPT0nYWN0aW9uJ1wiIFthY3Rpb25dPVwiY29tcG9uZW50XCIgW2lubGluZV09XCJmYWxzZVwiIFtkYXNoYm9hcmRTaXplc109XCJkYXNoYm9hcmRTaXplc1wiICBbbGlua1BhcmFtZXRlcnNdPVwibGlua1BhcmFtZXRlcnNcIj48L2tlcnZpLWFjdGlvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2ICpuZ0lmPVwiaW5saW5lXCIgY2xhc3M9XCJrZXJ2aS1pbmxpbmUtd2lkZ2V0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImtlcnZpLXZhbHVlLWxhYmVsXCI+IFxyXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT1cImRpc3BsYXk6aW5saW5lXCIgICpuZ0lmPVwibGlua1BhcmFtZXRlcnMubGFiZWxJY29uXCIgY2xhc3M9XCJmYSBmYS17e2xpbmtQYXJhbWV0ZXJzLmxhYmVsSWNvbn19XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT1cImRpc3BsYXk6aW5saW5lXCIgICpuZ0lmPVwibGlua1BhcmFtZXRlcnMubGFiZWxcIiAgPnt7bGlua1BhcmFtZXRlcnMubGFiZWx9fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwia2VydmktdmFsdWUtc2VjdGlvblwiPlxyXG4gICAgICAgICAgICA8a2VydmktdmFsdWUgKm5nSWY9XCJjb21wb25lbnQuY29tcG9uZW50VHlwZT09J0tlcnZpVmFsdWUnXCIgW3ZhbHVlXT1cImNvbXBvbmVudFwiIFtpbmxpbmVdPVwiZmFsc2VcIiBbZGFzaGJvYXJkU2l6ZXNdPVwiZGFzaGJvYXJkU2l6ZXNcIiAgW2xpbmtQYXJhbWV0ZXJzXT1cImxpbmtQYXJhbWV0ZXJzXCI+PC9rZXJ2aS12YWx1ZT5cclxuICAgICAgICAgICAgPGtlcnZpLWFjdGlvbiAgKm5nSWY9XCJjb21wb25lbnQuY29tcG9uZW50VHlwZT09J2FjdGlvbidcIiBbYWN0aW9uXT1cImNvbXBvbmVudFwiIFtpbmxpbmVdPVwiZmFsc2VcIiBbZGFzaGJvYXJkU2l6ZXNdPVwiZGFzaGJvYXJkU2l6ZXNcIiAgW2xpbmtQYXJhbWV0ZXJzXT1cImxpbmtQYXJhbWV0ZXJzXCI+PC9rZXJ2aS1hY3Rpb24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9uZy1jb250YWluZXI+ICAgIFxyXG48bmctY29udGFpbmVyICpuZ0lmPVwid2lkZ2V0VHlwZT09J2NhbWVyYSdcIiBjbGFzcz1cImJsb2NrLWNvbXBvbmVudFwiID5cclxuICAgIDxrZXJ2aS1jYW0tdmlld2VyIFtpc0JhY2tncm91bmRdPVwiZmFsc2VcIiBbY2FtZXJhXT1cImNvbXBvbmVudFwiIFtsaW5rUGFyYW1ldGVyc109XCJsaW5rUGFyYW1ldGVyc1wiPjwva2VydmktY2FtLXZpZXdlcj5cclxuPC9uZy1jb250YWluZXI+XHJcbiAgICBcclxuICAgIFxyXG48bmctY29udGFpbmVyICpuZ0lmPVwid2lkZ2V0VHlwZT09J2dhdWdlJ1wiIGNsYXNzPVwiYmxvY2stY29tcG9uZW50XCIgPlxyXG4gICAgPGtlcnZpLWdhdWdlIFtkYXNoYm9hcmRTaXplc109XCJkYXNoYm9hcmRTaXplc1wiIFt2YWx1ZV09XCJjb21wb25lbnRcIiBbbGlua1BhcmFtZXRlcnNdPVwibGlua1BhcmFtZXRlcnNcIj48L2tlcnZpLWdhdWdlPlxyXG48L25nLWNvbnRhaW5lcj5cclxuXHJcbjxuZy1jb250YWluZXIgKm5nSWY9XCJ3aWRnZXRUeXBlPT0nY2hhcnQnXCIgY2xhc3M9XCJcIiA+XHJcbiAgICA8a2VydmktY2hhcnQgW2Rhc2hib2FyZFNpemVzXT1cImRhc2hib2FyZFNpemVzXCIgW3ZhbHVlXT1cImNvbXBvbmVudFwiIFtsaW5rUGFyYW1ldGVyc109XCJsaW5rUGFyYW1ldGVyc1wiID48L2tlcnZpLWNoYXJ0PlxyXG48L25nLWNvbnRhaW5lcj5gLFxyXG4gIHN0eWxlczogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIFdpZGdldENvbXBvbmVudCBleHRlbmRzIEtlcnZpV2lkZ2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLm5nT25Jbml0V2lkZ2V0KCk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIFRpbSBXZW50emxhdVxyXG4vLyBMaWNlbnNlZCB1bmRlciBNSVRcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEtlcnZpTnVtYmVyQ29tcG9uZW50IH0gZnJvbSAnbmd4LWtlcnZpJ1xyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2tlcnZpLXZhbHVlLW51bWJlcicsXHJcblx0dGVtcGxhdGU6IGA8bmctY29udGFpbmVyICpuZ0lmPVwibGlua1BhcmFtZXRlcnMuaXNJbnB1dFwiPlxyXG4gICAgXHJcbiAgICA8bnotZm9ybS1jb250cm9sID5cclxuICAgICAgICA8bnotc2xpZGVyIFtuek1pbl09XCJ2YWx1ZS5taW5WYWx1ZVwiIFtuek1heF09XCJ2YWx1ZS5tYXhWYWx1ZVwiIFtuelN0ZXBdPVwiMVwiICBbKG5nTW9kZWwpXT1cInZhbHVlLnZhbHVlXCI+PC9uei1zbGlkZXI+XHJcbiAgICAgICAgPG56LWlucHV0LW51bWJlciBpZD1cInt7dmFsdWUuaWR9fVwiIFtuek1pbl09XCJ2YWx1ZS5taW5WYWx1ZVwiIFtuek1heF09XCJ2YWx1ZS5tYXhWYWx1ZVwiIFtuelN0ZXBdPVwiMVwiIFsobmdNb2RlbCldPVwidmFsdWUudmFsdWVcIiAgPjwvbnotaW5wdXQtbnVtYmVyPlxyXG4gICAgICAgIFxyXG4gICAgPC9uei1mb3JtLWNvbnRyb2w+XHJcbiAgICBcclxuPC9uZy1jb250YWluZXI+XHJcbjxuZy1jb250YWluZXIgKm5nSWY9XCIhbGlua1BhcmFtZXRlcnMuaXNJbnB1dFwiPlxyXG5cclxuICAgIDxzcGFuIGNsYXNzPVwidmFsdWUtdmFsdWVcIiBbc3R5bGUubWluLXdpZHRoLnJlbV09XCJsaW5rUGFyYW1ldGVycy52YWx1ZVNpemVcIj5cclxuICAgICAgICA8aSAqbmdJZj1cImN1cnJlbnRJY29uXCIgY2xhc3M9XCJmYSBmYS17e2N1cnJlbnRJY29ufX1cIj48L2k+XHJcbiAgICAgICAgPHZhbHVlLXNwYXJrbGluZSAqbmdJZj1cImxpbmtQYXJhbWV0ZXJzLnNob3dTcGFya2xpbmUgJiYgIWxpbmtQYXJhbWV0ZXJzLmlzSW5wdXRcIiBbdmFsdWVdPVwidmFsdWVcIj48L3ZhbHVlLXNwYXJrbGluZT5cclxuICAgICAgICB7eyh2YWx1ZS52YWx1ZSQgfCBhc3luYyB8IG51bWJlcjpudW1iZXJGb3JtYXQpfX1cclxuICAgICAgICA8c3BhbiAqbmdJZj1cImxpbmtQYXJhbWV0ZXJzLmRpc3BsYXlVbml0XCI+e3t2YWx1ZS51bml0fX08L3NwYW4+XHJcbiAgICA8L3NwYW4+XHJcbjwvbmctY29udGFpbmVyPlxyXG5gLFxyXG5cdHN0eWxlczogW2BgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnVtYmVyQ29tcG9uZW50IGV4dGVuZHMgS2VydmlOdW1iZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjpFbGVtZW50UmVmKSB7IFxyXG5cdFx0c3VwZXIoKTtcclxuXHR9XHJcblx0XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLm5nT25Jbml0TnVtYmVyKCk7XHJcblx0fVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgVGltIFdlbnR6bGF1XHJcbi8vIExpY2Vuc2VkIHVuZGVyIE1JVFxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgS2VydmlCb29sZWFuQ29tcG9uZW50IH0gZnJvbSAnbmd4LWtlcnZpJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAna2VydmktdmFsdWUtYm9vbGVhbicsXHJcblx0dGVtcGxhdGU6IGA8a2Vydmktc3dpdGNoYnV0dG9uIFxyXG4gICAgKm5nSWY9XCJkaXNwbGF5VHlwZSE9J2J1dHRvbidcIlxyXG4gICAgW2Rhc2hib2FyZFNpemVzXT1cImRhc2hib2FyZFNpemVzXCIgXHJcbiAgICBbaW5saW5lXT1cImlubGluZVwiIFxyXG4gICAgW3ZhbHVlXT1cInZhbHVlLnZhbHVlXCIgXHJcbiAgICBbbGlua1BhcmFtZXRlcnNdPVwibGlua1BhcmFtZXRlcnNcIlxyXG4gICAgKGJ1dHRvblN0YXRlKT1cImNoYW5nZVN0YXRlKCRldmVudClcIlxyXG4+PC9rZXJ2aS1zd2l0Y2hidXR0b24+XHJcbjxrZXJ2aS1idXR0b24gXHJcbiAgICAqbmdJZj1cImRpc3BsYXlUeXBlPT0nYnV0dG9uJ1wiICAgIFxyXG4gICAgW2Rhc2hib2FyZFNpemVzXT1cImRhc2hib2FyZFNpemVzXCIgXHJcbiAgICBbdmFsdWVdPVwidmFsdWVcIiBcclxuICAgIFtpbmxpbmVdPVwiaW5saW5lXCIgXHJcbiAgICBbbGlua1BhcmFtZXRlcnNdPVwibGlua1BhcmFtZXRlcnNcIiBcclxuICAgIChidXR0b25TdGF0ZSk9XCJjaGFuZ2VTdGF0ZSgkZXZlbnQpXCIgXHJcbj48L2tlcnZpLWJ1dHRvbj5cclxuXHJcblxyXG5cclxuYCxcclxuXHRzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJvb2xlYW5Db21wb25lbnQgZXh0ZW5kcyBLZXJ2aUJvb2xlYW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdGNvbnN0cnVjdG9yKCkgeyBcclxuXHRcdHN1cGVyKCk7XHJcblx0fVxyXG5cclxuXHRjaGFuZ2VTdGF0ZShldmVudCl7XHJcblx0XHR0aGlzLnZhbHVlLnNldChldmVudCk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMubmdPbkluaXRCb29sZWFuKCk7XHJcblx0fVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgVGltIFdlbnR6bGF1XHJcbi8vIExpY2Vuc2VkIHVuZGVyIE1JVFxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEtlcnZpU3RyaW5nQ29tcG9uZW50IH0gZnJvbSAnbmd4LWtlcnZpJ1xyXG5cclxuZGVjbGFyZSB2YXIgalF1ZXJ5OmFueTtcclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdrZXJ2aS12YWx1ZS1zdHJpbmcnLFxyXG5cdHRlbXBsYXRlOiBgPGlucHV0IG56LWlucHV0ICpuZ0lmPVwibGlua1BhcmFtZXRlcnMuaXNJbnB1dFwiICBbKG5nTW9kZWwpXT1cInZhbHVlLnZhbHVlXCIvPlxyXG48c3BhbiAqbmdJZj1cIiFsaW5rUGFyYW1ldGVycy5pc0lucHV0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgcHVsbC1yaWdodFwiICAgPnt7KHZhbHVlLnZhbHVlJCB8IGFzeW5jKX19PC9zcGFuPlxyXG5gLFxyXG5cdHN0eWxlczogW2BgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3RyaW5nQ29tcG9uZW50IGV4dGVuZHMgS2VydmlTdHJpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikgXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHQgfVxyXG5cclxuXHRuZ09uSW5pdCgpe1xyXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0dGhpcy5uZ09uSW5pdFN0cmluZygpO1xyXG5cdFx0dGhpcy52YWx1ZS52YWx1ZSQuc3Vic2NyaWJlKGZ1bmN0aW9uKHYpe1xyXG5cdFx0IFx0alF1ZXJ5KFwiaW5wdXRcIiwgc2VsZi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLnZhbCh2KS5jaGFuZ2UoKTtcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHRvbkNoYW5nZShldmVudCl7XHJcblx0XHR2YXIgdiA9IGpRdWVyeShcImlucHV0XCIsIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS52YWwoKTtcclxuXHRcdGNvbnNvbGUubG9nKFwiZXZ2XCIsIHYsIGV2ZW50KTtcclxuXHRcdHRoaXMudmFsdWUuc2V0KHYpO1xyXG5cdH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIFRpbSBXZW50emxhdVxyXG4vLyBMaWNlbnNlZCB1bmRlciBNSVRcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEtlcnZpRGF0ZVRpbWVDb21wb25lbnQgfSBmcm9tICduZ3gta2VydmknO1xyXG5kZWNsYXJlIHZhciBtb21lbnQ6YW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdrZXJ2aS12YWx1ZS1kYXRldGltZScsXHJcblx0dGVtcGxhdGU6IGA8a2VydmktZGF0ZXRpbWUgW3R5cGVdPVwiZGlzcGxheVR5cGVcIiBbZm9ybWF0XT1cImRhdGVUaW1lRm9ybWF0XCIgW2RhdGVUaW1lXT1cInZhbHVlXCI+PC9rZXJ2aS1kYXRldGltZT5cclxuICAgIGAsXHJcblx0c3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRlVGltZUNvbXBvbmVudCBleHRlbmRzIEtlcnZpRGF0ZVRpbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdGNvbnN0cnVjdG9yKCkgeyBcclxuXHRcdHN1cGVyKCk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMubmdPbkluaXREYXRlVGltZSgpO1xyXG5cdH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIFRpbSBXZW50emxhdVxyXG4vLyBMaWNlbnNlZCB1bmRlciBNSVRcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBLZXJ2aUNvbG9yQ29tcG9uZW50IH0gZnJvbSAnbmd4LWtlcnZpJ1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdrZXJ2aS12YWx1ZS1jb2xvcicsXHJcblx0dGVtcGxhdGU6IGA8a2VydmktY29sb3IgW2NvbG9yXT1cIih2YWx1ZS52YWx1ZSQgfCBhc3luYylcIiAoY29sb3JDaGFuZ2UpPVwic2V0S2VydmlWYWx1ZSgkZXZlbnQpXCIgW2xpbmtQYXJhbWV0ZXJzXT1cImxpbmtQYXJhbWV0ZXJzXCIgPjwva2VydmktY29sb3I+XHJcbmAsXHJcblx0c3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb2xvckNvbXBvbmVudCBleHRlbmRzIEtlcnZpQ29sb3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKCkgeyBcclxuXHRcdHN1cGVyKCk7XHJcblx0XHQvL2NvbnNvbGUubG9nKFwiY25pb1wiLHRoaXMpO1xyXG5cdH1cclxuXHJcblxyXG5cdHNldFZhbHVlKHYpe1xyXG5cdFx0Y29uc29sZS5sb2codik7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5uZ09uSW5pdENvbG9yKCk7XHJcblx0fVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgVGltIFdlbnR6bGF1XHJcbi8vIExpY2Vuc2VkIHVuZGVyIE1JVFxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnVtYmVyVmFsdWUsIERhc2hib2FyZFNpemVzICAgfSBmcm9tICdrZXJ2aS1qcyc7XHJcbmltcG9ydCB7IE5HWEtlcnZpU2VydmljZSwgS2VydmlUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tICduZ3gta2VydmknO1xyXG5pbXBvcnQgeyBhc2FwU2NoZWR1bGVyIH0gZnJvbSAncnhqcyc7XHJcblxyXG5kZWNsYXJlIHZhciBBcGV4Q2hhcnRzOiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3ZhbHVlLXNwYXJrbGluZScsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2ICNjaGFydD48L2Rpdj5gLFxyXG4gIHN0eWxlczogW2BgXSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTcGFya2xpbmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHZhbHVlOiBOdW1iZXJWYWx1ZSA9IG51bGw7XHJcbiAgQElucHV0KCkgbGlua1BhcmFtZXRlcnM6IGFueSA9IG51bGw7XHJcbiAgQElucHV0KCkgdHlwZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHNpemU6bnVtYmVyO1xyXG4gIEBJbnB1dCgpIGRhc2hib2FyZFNpemVzOkRhc2hib2FyZFNpemVzID0gbmV3IERhc2hib2FyZFNpemVzKCk7XHJcbiAgQFZpZXdDaGlsZCgnY2hhcnQnKSBwcml2YXRlIGNoYXJ0RWxlbWVudDogRWxlbWVudFJlZjtcclxuICBwcml2YXRlIHNlcmllcz1bXTtcclxuICBwcml2YXRlIGNoYXJ0T2JqOiBhbnk7XHJcbiAgcHJpdmF0ZSBvcHRpb25zOmFueTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGtlcnZpU2VydmljZTpOR1hLZXJ2aVNlcnZpY2UsIHByaXZhdGUgdGVtcGxhdGVTZXJ2aWNlOktlcnZpVGVtcGxhdGVTZXJ2aWNlICkge1xyXG5cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlRWxlbWVudCgpe1xyXG4gICAgdGhpcy5zZXJpZXMgPSBbdGhpcy52YWx1ZS52YWx1ZV1cclxuXHJcbiAgICB0aGlzLm9wdGlvbnMgPXtcclxuICAgICAgY2hhcnQ6IHtcclxuICAgICAgICAgIGhlaWdodDogMTQsXHJcbiAgICAgICAgICB3aWR0aDo2MCxcclxuICAgICAgICAgIHR5cGU6ICdhcmVhJyxcclxuICAgICAgICAgIHNwYXJrbGluZToge1xyXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHN0cm9rZToge1xyXG4gICAgICAgIGN1cnZlOiAnc3RyYWlnaHQnLFxyXG4gICAgICAgIHdpZHRoOjFcclxuICAgICAgfSxcclxuICAgICAgZmlsbDoge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuMyxcclxuICAgICAgfSxcclxuICAgICAgc2VyaWVzOiBbe1xyXG4gICAgICAgIGRhdGE6IHRoaXMudmFsdWUuc3BhcmtsaW5lJC52YWx1ZVxyXG4gICAgICB9XSxcclxuICAgICAgeWF4aXM6IHtcclxuICAgICAgICBtaW46IDBcclxuICAgICAgfSxcclxuICAgICAgY29sb3JzOiBbdGhpcy5jb2xvcihcImNvbG9yXCIsXCIua2Vydmktc3BhcmtsaW5lXCIpXSxcclxuICAgIH1cclxuICBcclxuICAgIGlmICh0aGlzLmNoYXJ0T2JqKSB7XHJcbiAgICAgIHRoaXMuY2hhcnRPYmouZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coXCJjcmVhdGUgc3BhcmtsaW5lXCIsIHRoaXMudmFsdWUuaWQpO1xyXG4gICAgdGhpcy5jaGFydE9iaiA9IG5ldyBBcGV4Q2hhcnRzKFxyXG4gICAgICB0aGlzLmNoYXJ0RWxlbWVudC5uYXRpdmVFbGVtZW50LFxyXG4gICAgICB0aGlzLm9wdGlvbnNcclxuICAgICk7XHJcbiAgICB0aGlzLmNoYXJ0T2JqLnJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgXHJcblxyXG4gIHByaXZhdGUgY29sb3Ioc3R5bGUsc2VsZWN0b3Ipe1xyXG4gICAgcmV0dXJuIHRoaXMudGVtcGxhdGVTZXJ2aWNlLmdldENvbG9yKHN0eWxlLHNlbGVjdG9yKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgYXNhcFNjaGVkdWxlci5zY2hlZHVsZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY3JlYXRlRWxlbWVudCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy52YWx1ZS5zcGFya2xpbmUkLnN1YnNjcmliZShmdW5jdGlvbih2KXtcclxuICAgICAgaWYgKHNlbGYuY2hhcnRPYmogJiYgdil7XHJcbiAgICAgICAgc2VsZi5jaGFydE9iai51cGRhdGVTZXJpZXMoW3tcclxuICAgICAgICAgIGRhdGE6IHZcclxuICAgICAgICB9XSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufSIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgVGltIFdlbnR6bGF1XHJcbi8vIExpY2Vuc2VkIHVuZGVyIE1JVFxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRTaXplcyB9IGZyb20gJ2tlcnZpLWpzJ1xyXG5pbXBvcnQgeyBLZXJ2aVRlbXBsYXRlU2VydmljZSB9IGZyb20gJ25neC1rZXJ2aSdcclxuZGVjbGFyZSB2YXIgalF1ZXJ5OiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3VpLXNsaWRlcicsXHJcbiAgdGVtcGxhdGU6IGBgLFxyXG4gIHN0eWxlczogW2BgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2xpZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSB2YWx1ZSA9IDA7XHJcbiAgQElucHV0KCkgdHlwZSA9IFwiaG9yaXpvbnRhbF9zbGlkZXJcIjtcclxuICBASW5wdXQoKSB0aWNrOiBudW1iZXI7XHJcbiAgQElucHV0KCkgbGlua1BhcmFtZXRlcnM6IGFueTtcclxuICBASW5wdXQoKSBkZWZhdWx0U2l6ZXM6IERhc2hib2FyZFNpemVzID0gbmV3IERhc2hib2FyZFNpemVzKCk7XHJcbiAgQElucHV0KCkgbWF4VmFsdWU6IG51bWJlcjtcclxuICBASW5wdXQoKSBtaW5WYWx1ZTogbnVtYmVyO1xyXG4gIEBPdXRwdXQoKSBzbGlkZXJDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBwcml2YXRlIG1hcmtzID0ge307XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSB0ZW1wbGF0ZVNlcnZpY2U6S2VydmlUZW1wbGF0ZVNlcnZpY2UpIHsgXHJcbiAgICAvL2NvbnNvbGUubG9nKFwiY25pb1wiLHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjb2xvcihzdHlsZSxzZWxlY3Rvcil7XHJcbiAgICByZXR1cm4gdGhpcy50ZW1wbGF0ZVNlcnZpY2UuZ2V0Q29sb3Ioc3R5bGUsc2VsZWN0b3IpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gIH1cclxuXHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCBUaW0gV2VudHpsYXVcclxuLy8gTGljZW5zZWQgdW5kZXIgTUlUXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOdW1iZXJWYWx1ZSwgRGFzaGJvYXJkU2l6ZXMgICB9IGZyb20gJ2tlcnZpLWpzJztcclxuaW1wb3J0IHsgTkdYS2VydmlTZXJ2aWNlLCBLZXJ2aVRlbXBsYXRlU2VydmljZSB9IGZyb20gJ25neC1rZXJ2aSc7XHJcbmltcG9ydCB7IGFzYXBTY2hlZHVsZXIgfSBmcm9tICdyeGpzJztcclxuXHJcbmRlY2xhcmUgdmFyIEFwZXhDaGFydHM6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAna2VydmktZ2F1Z2UnLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiAjY2hhcnQ+PC9kaXY+YCxcclxuICBzdHlsZXM6IFtgYF0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgR2F1Z2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHZhbHVlOiBOdW1iZXJWYWx1ZSA9IG51bGw7XHJcbiAgQElucHV0KCkgbGlua1BhcmFtZXRlcnM6IGFueSA9IG51bGw7XHJcbiAgQElucHV0KCkgdHlwZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHNpemU6bnVtYmVyO1xyXG4gIEBJbnB1dCgpIGRhc2hib2FyZFNpemVzOkRhc2hib2FyZFNpemVzID0gbmV3IERhc2hib2FyZFNpemVzKCk7XHJcbiAgQFZpZXdDaGlsZCgnY2hhcnQnKSBwcml2YXRlIGNoYXJ0RWxlbWVudDogRWxlbWVudFJlZjtcclxuICBwcml2YXRlIHNlcmllcz1bXTtcclxuICBwcml2YXRlIGNoYXJ0T2JqOiBhbnk7XHJcbiAgcHJpdmF0ZSBvcHRpb25zOmFueTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGtlcnZpU2VydmljZTpOR1hLZXJ2aVNlcnZpY2UsIHByaXZhdGUgdGVtcGxhdGVTZXJ2aWNlOktlcnZpVGVtcGxhdGVTZXJ2aWNlICkge1xyXG5cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlRWxlbWVudCgpe1xyXG4gICAgdGhpcy5zZXJpZXMgPSBbdGhpcy52YWx1ZS52YWx1ZV1cclxuXHJcbiAgICB0aGlzLm9wdGlvbnMgPXtcclxuICAgICAgY2hhcnQ6IHtcclxuICAgICAgICB0eXBlOiAncmFkaWFsQmFyJyxcclxuICAgICAgICBoZWlnaHQ6IHRoaXMubGlua1BhcmFtZXRlcnMuZ2F1Z2VTaXplXHJcbiAgICAgIH0sXHJcbiAgICAgIHBsb3RPcHRpb25zOiB7XHJcbiAgICAgICAgcmFkaWFsQmFyOiB7XHJcbiAgICAgICAgICBzdGFydEFuZ2xlOiAtMTM1LFxyXG4gICAgICAgICAgZW5kQW5nbGU6MTM1LCAgXHJcbiAgICAgICAgICBob2xsb3c6IHtcclxuICAgICAgICAgICAgc2l6ZTogJzcwJScsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB0cmFjazp7XHJcbiAgICAgICAgICAgIHN0YXJ0QW5nbGU6IC0xMzUsXHJcbiAgICAgICAgICAgIGVuZEFuZ2xlOiAxMzUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZGF0YUxhYmVsczoge1xyXG4gICAgICAgICAgICBuYW1lOiB7XHJcbiAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgICBjb2xvcjogXCIjMmQzNTNjXCIsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6XCIxNHB4XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdmFsdWU6IHtcclxuICAgICAgICAgICAgICBmb250U2l6ZTogXCIyNHB4XCIsXHJcbiAgICAgICAgICAgICAgc2hvdzogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgICAgfSxcclxuICAgICAgY29sb3JzOiBbdGhpcy5jb2xvcihcImNvbG9yXCIsXCIua2VydmktY2hhcnRcIildLC8vIFsnIzlmZDAzNyddLFxyXG4gICAgICBzZXJpZXM6IHRoaXMuc2VyaWVzLFxyXG4gICAgICBsYWJlbHM6IFt0aGlzLnZhbHVlLm5hbWVdLFxyXG5cclxuICAgIH1cclxuICBcclxuICAgIGlmICh0aGlzLmNoYXJ0T2JqKSB7XHJcbiAgICAgIHRoaXMuY2hhcnRPYmouZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coXCJjcmVhdGUgZ2F1Z2VcIiwgdGhpcy52YWx1ZS5pZCk7XHJcbiAgICB0aGlzLmNoYXJ0T2JqID0gbmV3IEFwZXhDaGFydHMoXHJcbiAgICAgIHRoaXMuY2hhcnRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgIHRoaXMub3B0aW9uc1xyXG4gICAgKTtcclxuICAgIHRoaXMuY2hhcnRPYmoucmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hhcnRPYmoucmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbG9yKHN0eWxlLHNlbGVjdG9yKXtcclxuICAgIHJldHVybiB0aGlzLnRlbXBsYXRlU2VydmljZS5nZXRDb2xvcihzdHlsZSxzZWxlY3Rvcik7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIGFzYXBTY2hlZHVsZXIuc2NoZWR1bGUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudmFsdWUudmFsdWUkLnN1YnNjcmliZShmdW5jdGlvbih2KXtcclxuICAgICAgaWYgKHNlbGYuY2hhcnRPYmogJiYgdil7XHJcbiAgICAgICAgLy9zZWxmLnNlcmllcz1bdl07XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJndlwiLCB2KTtcclxuICAgICAgICBzZWxmLmNoYXJ0T2JqLnVwZGF0ZVNlcmllcyggW3ZdKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9hZFBlcmlvZCgpe1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgLy9jb25zb2xlLmxvZyhcImxwXCIsIHRoaXMucGVyaW9kU3RhcnQsIHRoaXMucGVyaW9kRW5kKTtcclxuICAgIC8vdGhpcy5rZXJ2aVNlcnZpY2Uuc3BpbmUuc2VuZFF1ZXJ5KFwiZ2V0U2Vuc29yRGF0YVwiLCB0aGlzLnZhbHVlLmlkLCB0aGlzLnBlcmlvZFN0YXJ0LnRvSVNPU3RyaW5nKCksIHRoaXMucGVyaW9kRW5kLnRvSVNPU3RyaW5nKCksIGZ1bmN0aW9uIChyZXN1bHRzKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImdzZFwiLCByZXN1bHRzKTtcclxuICAgICAgICAvL3ZhciBzZW5zb3JEYXRhID0gcmVzdWx0cztcclxuICAgICAgICAvL3NlbGYuY2hhcnREYXRhLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgLy9mb3IgKHZhciBpID0gMDsgKGkgPCBzZW5zb3JEYXRhLmxlbmd0aCk7IGkrKykge1xyXG4gICAgICAgICAgLy92YXIgZGF0YUl0ZW0gPSBzZW5zb3JEYXRhW2ldXHJcbiAgICAgICAgICAvL3NlbGYuY2hhcnREYXRhLnB1c2goeyB4OiBuZXcgRGF0ZShkYXRhSXRlbS50cyArIFwiIHV0Y1wiKSwgeTogZGF0YUl0ZW0udmFsdWUgfSk7XHJcbiAgICAgICAgLy99XHJcbiAgICAgICAgLy9zZWxmLmNoYXJ0LnJlbmRlcigpO1xyXG4gICAgICAgIC8vc2VsZi5jaGFydC51cGRhdGUoKTtcclxuICAgIC8vfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsZWFuRGF0YSgpe1xyXG4gICAgLy8gaWYodGhpcy51cGRhdGVDaGFydCl7XHJcbiAgICAvLyAgIHZhciBkb0NsZWFuID0gdHJ1ZTtcclxuICAgIC8vICAgdmFyIGxpbWl0VFMgPSB0aGlzLmdldFBlcmlvZExpbWl0KCk7XHJcbiAgICAvLyAgIHZhciBkcyA9IHRoaXMuY2hhcnQuZGF0YS5kYXRhc2V0c1swXS5kYXRhXHJcbiAgICAvLyAgIHdoaWxlICggZHMubGVuZ3RoPjAgJiYgZG9DbGVhbil7XHJcbiAgICAvLyAgICAgaWYgKGRzWzBdLnggPCBsaW1pdFRTKVxyXG4gICAgLy8gICAgICAgZHMuc2hpZnQoKTtcclxuICAgIC8vICAgICBlbHNlXHJcbiAgICAvLyAgICAgICBkb0NsZWFuID0gZmFsc2VcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfVxyXG4gIH1cclxufSIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgVGltIFdlbnR6bGF1XHJcbi8vIExpY2Vuc2VkIHVuZGVyIE1JVFxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnVtYmVyVmFsdWUsIERhc2hib2FyZFNpemVzICAgfSBmcm9tICdrZXJ2aS1qcyc7XHJcbmltcG9ydCB7IE5HWEtlcnZpU2VydmljZSwgS2VydmlUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tICduZ3gta2VydmknO1xyXG5pbXBvcnQgeyBhc2FwU2NoZWR1bGVyIH0gZnJvbSAncnhqcyc7XHJcblxyXG5kZWNsYXJlIHZhciBBcGV4Q2hhcnRzOiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2tlcnZpLWNoYXJ0JyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgI2NoYXJ0PjwvZGl2PmAsXHJcbiAgc3R5bGVzOiBbYGBdLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEtlcnZpQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHZhbHVlOiBOdW1iZXJWYWx1ZSA9IG51bGw7XHJcbiAgQElucHV0KCkgbGlua1BhcmFtZXRlcnM6IGFueSA9IG51bGw7XHJcbiAgQElucHV0KCkgdHlwZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHNpemU6bnVtYmVyO1xyXG4gIEBJbnB1dCgpIGRhc2hib2FyZFNpemVzOkRhc2hib2FyZFNpemVzID0gbmV3IERhc2hib2FyZFNpemVzKCk7XHJcbiAgQFZpZXdDaGlsZCgnY2hhcnQnKSBwcml2YXRlIGNoYXJ0RWxlbWVudDogRWxlbWVudFJlZjtcclxuICBwcml2YXRlIHNlcmllcz1bXTtcclxuICBwcml2YXRlIGNoYXJ0T2JqOiBhbnk7XHJcbiAgcHJpdmF0ZSBvcHRpb25zOmFueTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGtlcnZpU2VydmljZTpOR1hLZXJ2aVNlcnZpY2UsIHByaXZhdGUgdGVtcGxhdGVTZXJ2aWNlOktlcnZpVGVtcGxhdGVTZXJ2aWNlICkge1xyXG5cclxuICB9XHJcbiAgXHJcbiAgcHJpdmF0ZSBjcmVhdGVFbGVtZW50KCl7XHJcbiAgICB0aGlzLnNlcmllcz0gW1xyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IHRoaXMudmFsdWUubmFtZSxcclxuICAgICAgICBkYXRhOiBbIF1cclxuICAgIH1dXHJcblxyXG4gICAgXHJcbiAgICB0aGlzLm9wdGlvbnMgPXtcclxuICAgICAgY2hhcnQ6IHtcclxuICAgICAgICAgIGlkOiBcImNoYXJ0X1wiICsgdGhpcy52YWx1ZS5pZCxcclxuICAgICAgICAgIHdpZHRoOlwiMTAwJVwiLFxyXG4gICAgICAgICAgaGVpZ2h0OjMwMCxcclxuICAgICAgICAgIHR5cGU6IHRoaXMubGlua1BhcmFtZXRlcnMuY2hhcnRUeXBlLFxyXG4gICAgICAgICAgYW5pbWF0aW9uczoge1xyXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICBlYXNpbmc6ICdsaW5lYXInLFxyXG4gICAgICAgICAgICBkeW5hbWljQW5pbWF0aW9uOiB7XHJcbiAgICAgICAgICAgICAgc3BlZWQ6IDEwMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdG9vbGJhcjoge1xyXG4gICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgdG9vbHM6IHtcclxuICAgICAgICAgICAgICBkb3dubG9hZDogdHJ1ZSxcclxuICAgICAgICAgICAgICBzZWxlY3Rpb246IHRydWUsXHJcbiAgICAgICAgICAgICAgem9vbTogdHJ1ZSxcclxuICAgICAgICAgICAgICB6b29taW46IHRydWUsXHJcbiAgICAgICAgICAgICAgem9vbW91dDogdHJ1ZSxcclxuICAgICAgICAgICAgICBwYW46IHRydWUsXHJcbiAgICAgICAgICAgICAgcmVzZXQ6IHRydWUgLFxyXG4gICAgICAgICAgICAgIGN1c3RvbUljb25zOiBbXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhdXRvU2VsZWN0ZWQ6ICd6b29tJyBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB6b29tOiB7XHJcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICBkYXRhTGFiZWxzOiB7XHJcbiAgICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgIHN0cm9rZToge1xyXG4gICAgICAgICAgY3VydmU6ICdzbW9vdGgnLFxyXG4gICAgICAgICAgd2lkdGg6MVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICB0aXRsZToge1xyXG4gICAgICAgICAgdGV4dDogdGhpcy5saW5rUGFyYW1ldGVycy5jaGFydFRpdGxlLFxyXG4gICAgICAgICAgYWxpZ246ICdsZWZ0J1xyXG4gICAgICAgIH0sXHJcbiAgICAgIG1hcmtlcnM6IHtcclxuICAgICAgICAgIHNpemU6IDBcclxuICAgICAgICB9LFxyXG4gICAgICB4YXhpczoge1xyXG4gICAgICAgICAgdHlwZTogJ2RhdGV0aW1lJyxcclxuICAgICAgICAgIC8vcmFuZ2U6IDE1NTI5ODMyMzAgLSAzMDAsXHJcbiAgICAgIH0sXHJcbiAgICAgIHlheGlzOiB7XHJcbiAgICAgICAgICBtYXg6IHRoaXMudmFsdWUubWF4VmFsdWUsXHJcbiAgICAgICAgICBtaW46dGhpcy52YWx1ZS5taW5WYWx1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgc2hvdzogZmFsc2VcclxuICAgICAgfSxcclxuICAgICAgZ3JpZDoge1xyXG4gICAgICAgIHNob3c6IHRoaXMubGlua1BhcmFtZXRlcnMuY2hhcnRHcmlkLFxyXG4gICAgICAgIHhheGlzOiB7XHJcbiAgICAgICAgICBsaW5lczoge1xyXG4gICAgICAgICAgICBzaG93OiB0cnVlLFxyXG4gICAgICAgICAgICBhbmltYXRlOiB0cnVlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB5YXhpczoge1xyXG4gICAgICAgICAgbGluZXM6IHtcclxuICAgICAgICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgYW5pbWF0ZTogdHJ1ZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgY29sb3JzOiBbdGhpcy5jb2xvcihcImNvbG9yXCIsXCIua2VydmktY2hhcnRcIildLC8vIFsnIzlmZDAzNyddLFxyXG4gICAgICBzZXJpZXM6IHRoaXMuc2VyaWVzXHJcbiAgICB9XHJcbiAgXHJcbiAgICBpZiAodGhpcy5jaGFydE9iaikge1xyXG4gICAgICB0aGlzLmNoYXJ0T2JqLmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMubGlua1BhcmFtZXRlcnMuY2hhcnRUaXRsZSlcclxuICAgICAgZGVsZXRlKHRoaXMub3B0aW9uc1tcInRpdGxlXCJdKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcImNyZWF0ZSBjaGFydFwiLCB0aGlzLnZhbHVlLmlkKTtcclxuICAgIHRoaXMuY2hhcnRPYmogPSBuZXcgQXBleENoYXJ0cyhcclxuICAgICAgdGhpcy5jaGFydEVsZW1lbnQubmF0aXZlRWxlbWVudCxcclxuICAgICAgdGhpcy5vcHRpb25zXHJcbiAgICApO1xyXG4gICAgdGhpcy5jaGFydE9iai5yZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29sb3Ioc3R5bGUsc2VsZWN0b3Ipe1xyXG4gICAgcmV0dXJuIHRoaXMudGVtcGxhdGVTZXJ2aWNlLmdldENvbG9yKHN0eWxlLHNlbGVjdG9yKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgYXNhcFNjaGVkdWxlci5zY2hlZHVsZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY3JlYXRlRWxlbWVudCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy52YWx1ZS52YWx1ZSQuc3Vic2NyaWJlKGZ1bmN0aW9uKHYpe1xyXG4gICAgICBpZiAoc2VsZi5jaGFydE9iail7XHJcbiAgICAgICAgc2VsZi5zZXJpZXNbMF0uZGF0YS5wdXNoKFsgc2VsZi52YWx1ZS52YWx1ZVRTLmdldFRpbWUoKSwgdiBdKTtcclxuICAgICAgICBzZWxmLmNoYXJ0T2JqLnVwZGF0ZVNlcmllcyggc2VsZi5zZXJpZXMpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgcHVibGljIGxvYWRQZXJpb2QoKXtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIC8vY29uc29sZS5sb2coXCJscFwiLCB0aGlzLnBlcmlvZFN0YXJ0LCB0aGlzLnBlcmlvZEVuZCk7XHJcbiAgICAvL3RoaXMua2VydmlTZXJ2aWNlLnNwaW5lLnNlbmRRdWVyeShcImdldFNlbnNvckRhdGFcIiwgdGhpcy52YWx1ZS5pZCwgdGhpcy5wZXJpb2RTdGFydC50b0lTT1N0cmluZygpLCB0aGlzLnBlcmlvZEVuZC50b0lTT1N0cmluZygpLCBmdW5jdGlvbiAocmVzdWx0cykge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJnc2RcIiwgcmVzdWx0cyk7XHJcbiAgICAgICAgLy92YXIgc2Vuc29yRGF0YSA9IHJlc3VsdHM7XHJcbiAgICAgICAgLy9zZWxmLmNoYXJ0RGF0YS5sZW5ndGggPSAwO1xyXG4gICAgICAgIC8vZm9yICh2YXIgaSA9IDA7IChpIDwgc2Vuc29yRGF0YS5sZW5ndGgpOyBpKyspIHtcclxuICAgICAgICAgIC8vdmFyIGRhdGFJdGVtID0gc2Vuc29yRGF0YVtpXVxyXG4gICAgICAgICAgLy9zZWxmLmNoYXJ0RGF0YS5wdXNoKHsgeDogbmV3IERhdGUoZGF0YUl0ZW0udHMgKyBcIiB1dGNcIiksIHk6IGRhdGFJdGVtLnZhbHVlIH0pO1xyXG4gICAgICAgIC8vfVxyXG4gICAgICAgIC8vc2VsZi5jaGFydC5yZW5kZXIoKTtcclxuICAgICAgICAvL3NlbGYuY2hhcnQudXBkYXRlKCk7XHJcbiAgICAvL30pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbGVhbkRhdGEoKXtcclxuICAgIC8vIGlmKHRoaXMudXBkYXRlQ2hhcnQpe1xyXG4gICAgLy8gICB2YXIgZG9DbGVhbiA9IHRydWU7XHJcbiAgICAvLyAgIHZhciBsaW1pdFRTID0gdGhpcy5nZXRQZXJpb2RMaW1pdCgpO1xyXG4gICAgLy8gICB2YXIgZHMgPSB0aGlzLmNoYXJ0LmRhdGEuZGF0YXNldHNbMF0uZGF0YVxyXG4gICAgLy8gICB3aGlsZSAoIGRzLmxlbmd0aD4wICYmIGRvQ2xlYW4pe1xyXG4gICAgLy8gICAgIGlmIChkc1swXS54IDwgbGltaXRUUylcclxuICAgIC8vICAgICAgIGRzLnNoaWZ0KCk7XHJcbiAgICAvLyAgICAgZWxzZVxyXG4gICAgLy8gICAgICAgZG9DbGVhbiA9IGZhbHNlXHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH1cclxuICB9XHJcbn0iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIFRpbSBXZW50emxhdVxyXG4vLyBMaWNlbnNlZCB1bmRlciBNSVRcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFbGVtZW50UmVmLCBWaWV3RW5jYXBzdWxhdGlvbiwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERhc2hib2FyZFNpemVzIH0gZnJvbSAna2VydmktanMnXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAna2Vydmktc3dpdGNoYnV0dG9uJyxcclxuICB0ZW1wbGF0ZTogYDxuei1zd2l0Y2ggXHJcbiAgICBbKG5nTW9kZWwpXT1cInZhbHVlXCJcclxuICAgIFtuekNoZWNrZWRDaGlsZHJlbl09XCJjaGVja2VkVGVtcGxhdGVcIiBbbnpVbkNoZWNrZWRDaGlsZHJlbl09XCJ1bkNoZWNrZWRUZW1wbGF0ZVwiXHJcbiAgICAobmdNb2RlbENoYW5nZSk9XCJtb2RlbENoYW5nZSgkZXZlbnQpXCJcclxuPlxyXG5cclxuPC9uei1zd2l0Y2g+XHJcbjxuZy10ZW1wbGF0ZSAjY2hlY2tlZFRlbXBsYXRlPlxyXG4gICAgPGkgKm5nSWY9XCJsaW5rUGFyYW1ldGVycy5vbkljb25cIiAgbnotaWNvbiBbdHlwZV09XCJsaW5rUGFyYW1ldGVycy5vbkljb25cIj48L2k+XHJcbiAgICA8c3BhbiA+e3sgbGlua1BhcmFtZXRlcnMub25UZXh0IH19PC9zcGFuPlxyXG48L25nLXRlbXBsYXRlPlxyXG48bmctdGVtcGxhdGUgI3VuQ2hlY2tlZFRlbXBsYXRlPlxyXG4gICAgPGkgKm5nSWY9XCJsaW5rUGFyYW1ldGVycy5vZmZJY29uXCIgIG56LWljb24gW3R5cGVdPVwibGlua1BhcmFtZXRlcnMub2ZmSWNvblwiPjwvaT5cclxuICAgIDxzcGFuID57eyBsaW5rUGFyYW1ldGVycy5vZmZUZXh0IH19PC9zcGFuPlxyXG48L25nLXRlbXBsYXRlPlxyXG5gLFxyXG4gIHN0eWxlczogW2BgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFN3aXRjaEJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgdmFsdWU6IEJvb2xlYW47XHJcbiAgQElucHV0KCkgbGlua1BhcmFtZXRlcnM6YW55O1xyXG4gIEBJbnB1dCgpIGlubGluZTpib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZGFzaGJvYXJkU2l6ZXM6RGFzaGJvYXJkU2l6ZXMgPSBuZXcgRGFzaGJvYXJkU2l6ZXMoKTtcclxuICBAT3V0cHV0KCkgYnV0dG9uU3RhdGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgcHVibGljIHdpZHRoOnN0cmluZztcclxuICBwdWJsaWMgaGVpZ2h0OnN0cmluZztcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG4gIFxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgY29uc29sZS5sb2coXCJzYlwiLCB0aGlzLnZhbHVlKTtcclxuICAgIGlmICh0aGlzLmxpbmtQYXJhbWV0ZXJzKXtcclxuICAgICAgXHJcbiAgICAgIGlmICghdGhpcy5saW5rUGFyYW1ldGVycy5idXR0b25XaWR0aClcclxuICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5kYXNoYm9hcmRTaXplcy5zd2l0Y2hXaWR0aDtcclxuICAgICAgZWxzZVxyXG4gICAgICAgIHRoaXMud2lkdGggPSB0aGlzLmxpbmtQYXJhbWV0ZXJzLmJ1dHRvbldpZHRoO1xyXG5cclxuICAgICAgaWYgKCF0aGlzLmxpbmtQYXJhbWV0ZXJzLmJ1dHRvbkhlaWdodClcclxuICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMuZGFzaGJvYXJkU2l6ZXMuc3dpdGNoSGVpZ2h0O1xyXG4gICAgICBlbHNlXHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmxpbmtQYXJhbWV0ZXJzLmJ1dHRvbkhlaWdodDtcclxuXHJcbiAgICB9IGVsc2V7XHJcbiAgICAgIHRoaXMud2lkdGggPSB0aGlzLmRhc2hib2FyZFNpemVzLnN3aXRjaFdpZHRoO1xyXG4gICAgICB0aGlzLmhlaWdodCA9IHRoaXMuZGFzaGJvYXJkU2l6ZXMuc3dpdGNoSGVpZ2h0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbW9kZWxDaGFuZ2Uoc3RhdGUpe1xyXG4gICAgdGhpcy5idXR0b25TdGF0ZS5lbWl0KHN0YXRlKTtcclxuICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCBUaW0gV2VudHpsYXVcclxuLy8gTGljZW5zZWQgdW5kZXIgTUlUXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERhc2hib2FyZFNpemVzLCBCb29sZWFuVmFsdWUgfSBmcm9tICdrZXJ2aS1qcyc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuZGVjbGFyZSB2YXIgalF1ZXJ5OmFueTtcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdrZXJ2aS1idXR0b24nLFxyXG4gIHRlbXBsYXRlOiBgPG5nLXRlbXBsYXRlICNidXR0b25Db250ZW50VGVtcGxhdGU+XHJcbiAgICA8aSAqbmdJZj1cImxpbmtQYXJhbWV0ZXJzLmJ1dHRvbkljb25cIiBuei1pY29uIFt0eXBlXT1cImxpbmtQYXJhbWV0ZXJzLmJ1dHRvbkljb25cIj48L2k+XHJcbiAgICB7eyBsaW5rUGFyYW1ldGVycy5idXR0b25UZXh0IH19XHJcbjwvbmctdGVtcGxhdGU+XHJcbjxidXR0b25cclxuICAgICpuZ0lmID0gXCJsaW5rUGFyYW1ldGVycy5jb25maXJtXCJcclxuICAgIG56LWJ1dHRvbiBuelR5cGU9XCJwcmltYXJ5XCJcclxuICAgIChuek9uQ29uZmlybSk9XCJjb25maXJtKClcIlxyXG4gICAgbnotcG9wY29uZmlybSBbbnpUaXRsZV09XCJsaW5rUGFyYW1ldGVycy5jb25maXJtTWVzc2FnZVwiXHJcbj5cclxuPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImJ1dHRvbkNvbnRlbnRUZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxyXG48L2J1dHRvbj5cclxuPGJ1dHRvblxyXG4gICAgKm5nSWYgPSBcIiFsaW5rUGFyYW1ldGVycy5jb25maXJtXCJcclxuICAgIG56LWJ1dHRvbiBuelR5cGU9XCJwcmltYXJ5XCJcclxuICAgIChtb3VzZWRvd24pPVwicHJlc3MoKVwiIFxyXG4gICAgKG1vdXNldXApPVwicmVsZWFzZSgpXCJcclxuPlxyXG48bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiYnV0dG9uQ29udGVudFRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XHJcbjwvYnV0dG9uPlxyXG5gLFxyXG4gIHN0eWxlczogW2BgXSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHZhbHVlOiBCb29sZWFuVmFsdWU7XHJcbiAgQElucHV0KCkgbGlua1BhcmFtZXRlcnM6IGFueSA9IG51bGw7XHJcbiAgQElucHV0KCkgdHlwZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGlubGluZTpib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZGFzaGJvYXJkU2l6ZXM6RGFzaGJvYXJkU2l6ZXMgPSBuZXcgRGFzaGJvYXJkU2l6ZXMoKTtcclxuICBASW5wdXQoKSB0aXRsZTpzdHJpbmc7XHJcbiAgQE91dHB1dCgpIGJ1dHRvblN0YXRlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIHB1YmxpYyB3aWR0aDpzdHJpbmc7XHJcbiAgcHVibGljIGhlaWdodDpzdHJpbmc7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IoKSB7ICBcclxuICB9XHJcbiBcclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHZhciBzZWxmID0gdGhpczsgXHJcbiAgICBpZiAoc2VsZi5saW5rUGFyYW1ldGVycyl7XHJcbiAgICAgIFxyXG4gICAgICBpZiAoIXNlbGYubGlua1BhcmFtZXRlcnMuYnV0dG9uV2lkdGgpXHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMuZGFzaGJvYXJkU2l6ZXMuYnV0dG9uV2lkdGg7XHJcbiAgICAgIGVsc2VcclxuICAgICAgICB0aGlzLndpZHRoID0gc2VsZi5saW5rUGFyYW1ldGVycy5idXR0b25XaWR0aDtcclxuXHJcbiAgICAgIGlmICghc2VsZi5saW5rUGFyYW1ldGVycy5idXR0b25IZWlnaHQpXHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmRhc2hib2FyZFNpemVzLmJ1dHRvbkhlaWdodDtcclxuICAgICAgZWxzZVxyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gc2VsZi5saW5rUGFyYW1ldGVycy5idXR0b25IZWlnaHQ7XHJcblxyXG4gICAgfSBlbHNle1xyXG4gICAgICB0aGlzLndpZHRoID0gdGhpcy5kYXNoYm9hcmRTaXplcy5idXR0b25XaWR0aDtcclxuICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmRhc2hib2FyZFNpemVzLmJ1dHRvbkhlaWdodDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb25maXJtKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJjXCIsIHRoaXMudmFsdWUpO1xyXG4gICAgdGhpcy5idXR0b25TdGF0ZS5lbWl0KHRydWUpO1xyXG4gICAgdGhpcy5idXR0b25TdGF0ZS5lbWl0KGZhbHNlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwcmVzcygpIHtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcInBcIiwgdGhpcy52YWx1ZSk7XHJcbiAgICB0aGlzLmJ1dHRvblN0YXRlLmVtaXQodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVsZWFzZSgpIHtcclxuICAgIHRoaXMuYnV0dG9uU3RhdGUuZW1pdChmYWxzZSk7XHJcbiAgfVxyXG59IiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCBUaW0gV2VudHpsYXVcclxuLy8gTGljZW5zZWQgdW5kZXIgTUlUXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTkdYS2VydmlTZXJ2aWNlIH0gZnJvbSAnbmd4LWtlcnZpJztcclxuaW1wb3J0IHsgU3RyZWFtIH0gZnJvbSAna2VydmktanMnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdrZXJ2aS1tcGVnLXZpZXdlcicsXHJcbiAgdGVtcGxhdGU6IGA8aW1nIChsb2FkKT1cImltYWdlUmVhZHkoKVwiIGNsYXNzPVwiY2FtSW1hZ2VcIiBbYXR0ci5zcmNdPVwic3RyZWFtRGF0YVwiIFtzdHlsZS5oZWlnaHQuJV09XCJoZWlnaHRcIiBbc3R5bGUud2lkdGguJV09XCJ3aWR0aFwiPlxyXG5gLFxyXG4gIHN0eWxlczogW2AjdmlkZW8tdmlld2Vye21hcmdpbi10b3A6LTIwcHh9LmNhbS1wYWQtYXJlYXt6LWluZGV4OjEyMDA7dmVydGljYWwtYWxpZ246bWlkZGxlO3dpZHRoOjIwMHB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6Mzg5cHg7dG9wOjEzMnB4O2NvbG9yOiNmZmZ9YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1QRUdWaWV3ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcbiAgQElucHV0KCkgc2V0IGNhbWVyYVNvdXJjZShpZDogc3RyaW5nKSB7XHJcbiAgICBjb25zb2xlLmxvZygnc2V0IGNhbSBzb3VyY2UnLCBpZCk7XHJcbiAgICB0aGlzLnNldFNvdXJjZShpZCk7XHJcbn07XHJcbiAgXHJcbiAgQElucHV0KCkgd2lkdGg6IG51bWJlciA9IG51bGw7XHJcbiAgQElucHV0KCkgaGVpZ2h0OiBudW1iZXIgPSBudWxsO1xyXG4gIEBPdXRwdXQoKSBpbWFnZUxvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBzdHJlYW06IFN0cmVhbSA9IG51bGw7XHJcbiAgQElucHV0KClcclxuICBzdHJlYW1EYXRhOiBhbnk7XHJcbiAgcHJpdmF0ZSBmaXJzdExvYWQgPSB0cnVlO1xyXG4gIHByaXZhdGUgZnBzQ291bnRlciA9IDA7XHJcbiAgcHJpdmF0ZSBmcHNUaW1lID0gbmV3IERhdGUoKTtcclxuICBwcml2YXRlIHN0cmVhbVN1YnNjcmlwdGlvbiA9IG51bGw7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZnBzID0gMDtcclxuXHJcbiAgY29uc3RydWN0b3IoIHByaXZhdGUga2VydmlTZXJ2aWNlOiBOR1hLZXJ2aVNlcnZpY2UsIHByaXZhdGUgZG9tU2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHtcclxuICBcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgfVxyXG5cclxuICBzZXRTb3VyY2Uoc291cmNlOiBzdHJpbmcpIHtcclxuICAgIGNvbnNvbGUubG9nKFwic2NcIiwgc291cmNlKTtcclxuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgaWYgKHRoaXMuc3RyZWFtKSB7XHJcbiAgICAgIHRoaXMuc3RyZWFtU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnN0cmVhbSA9IHRoaXMua2VydmlTZXJ2aWNlLkdldFN0cmVhbShzb3VyY2UsIFsnSU1BR0VfRlJBTUUnXSk7XHJcbiAgICBjb25zb2xlLmxvZyhcInNjeFwiLCB0aGlzLnN0cmVhbSk7XHJcbiAgICB0aGlzLnN0cmVhbVN1YnNjcmlwdGlvbiA9IHRoaXMuc3RyZWFtLmV2ZW50cyQuc3Vic2NyaWJlKCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAvL2NvbnNvbGUubG9nKCdjZScsIGV2ZW50KTtcclxuICAgICAgaWYgKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIGJsb2IgPSBuZXcgQmxvYiggWyBldmVudC5kYXRhIF0sIHsgdHlwZTogXCJpbWFnZS9qcGVnXCIgfSApO1xyXG4gICAgICAgIHNlbGYuc3RyZWFtRGF0YSA9IHNlbGYuZG9tU2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RVcmwoVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKSk7XHJcbiAgICAgICAgc2VsZi5mcHNDb3VudGVyICs9IDE7XHJcbiAgICAgICAgY29uc3Qgbm93ICAgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGNvbnN0IGZwc0RpZmYgPSBub3cuZ2V0VGltZSgpIC0gc2VsZi5mcHNUaW1lLmdldFRpbWUoKTtcclxuICAgICAgICBjb25zdCBzZWNvbmRzID0gZnBzRGlmZiAvIDEwMDA7XHJcbiAgICAgICAgaWYgKHNlY29uZHMgPiAxKSB7XHJcbiAgICAgICAgICBzZWxmLmZwcyA9IHNlbGYuZnBzQ291bnRlciAvIHNlY29uZHM7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdmcHMnLCBzZWxmLmZwc0NvdW50ZXIsIHNlY29uZHMsIHNvdXJjZSwgc2VsZi5mcHMpO1xyXG4gICAgICAgICAgc2VsZi5mcHNDb3VudGVyID0gMDtcclxuICAgICAgICAgIHNlbGYuZnBzVGltZSA9IG5vdztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW1hZ2VSZWFkeSgpe1xyXG4gICAgaWYgKHRoaXMuZmlyc3RMb2FkKXtcclxuICAgICAgICB0aGlzLmZpcnN0TG9hZD1mYWxzZTtcclxuICAgICAgICB0aGlzLmltYWdlTG9hZGVkLmVtaXQodHJ1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCBUaW0gV2VudHpsYXVcclxuLy8gTGljZW5zZWQgdW5kZXIgTUlUXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERhdGVUaW1lVmFsdWUgfSBmcm9tICdrZXJ2aS1qcydcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdrZXJ2aS1kYXRldGltZScsXHJcbiAgdGVtcGxhdGU6IGA8bnotZGF0ZS1waWNrZXIgXHJcbipuZ0lmPVwidHlwZT09J2RhdGV0aW1lJ1wiXHJcbm56U2hvd1RpbWVcclxuWyhuZ01vZGVsKV09XCJkYXRlVGltZS52YWx1ZVwiXHJcbltuekZvcm1hdF0gPSBcImZvcm1hdFwiXHJcbj48L256LWRhdGUtcGlja2VyPlxyXG5cclxuPG56LWRhdGUtcGlja2VyIFxyXG4qbmdJZj1cInR5cGU9PSdkYXRlJ1wiXHJcblsobmdNb2RlbCldPVwiZGF0ZVRpbWUudmFsdWVcIlxyXG5bbnpGb3JtYXRdID0gXCJmb3JtYXRcIlxyXG4+PC9uei1kYXRlLXBpY2tlcj5cclxuXHJcblxyXG48bnotdGltZS1waWNrZXIgXHJcbipuZ0lmPVwidHlwZT09J3RpbWUnXCJcclxuWyhuZ01vZGVsKV09XCJkYXRlVGltZS52YWx1ZVwiXHJcbltuekZvcm1hdF0gPSBcImZvcm1hdFwiXHJcbj48L256LXRpbWUtcGlja2VyPlxyXG5gLFxyXG4gIHN0eWxlczogW2BgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIERhdGVUaW1lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBkYXRlVGltZTpEYXRlVGltZVZhbHVlO1xyXG4gIEBJbnB1dCgpIHR5cGU6c3RyaW5nO1xyXG4gIEBJbnB1dCgpIGZvcm1hdDogc3RyaW5nO1xyXG4gIEBPdXRwdXQoKSBkYXRlVGltZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyXHJcbiAgcHJpdmF0ZSBpc1JlYWR5PWZhbHNlO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjpFbGVtZW50UmVmKSB7ICBcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG5cclxuICBcclxuICAgIFxyXG4gIH1cclxufSIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgVGltIFdlbnR6bGF1XHJcbi8vIExpY2Vuc2VkIHVuZGVyIE1JVFxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2tlcnZpLWljb24nLFxyXG4gIHRlbXBsYXRlOiBgPGkgY2xhc3M9XCJwaSBwaS17e2ljb259fVwiPjwvaT5gLFxyXG4gIHN0eWxlczogW2BgXSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBJY29uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgaWNvbjogc3RyaW5nID0gbnVsbDtcclxuIFxyXG4gIGNvbnN0cnVjdG9yKCkgeyAgXHJcbiAgfVxyXG5cclxuICBcclxuICBcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbn0iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIFRpbSBXZW50emxhdVxyXG4vLyBMaWNlbnNlZCB1bmRlciBNSVRcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRTaXplcyB9IGZyb20gJ2tlcnZpLWpzJ1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuZGVjbGFyZSB2YXIgalF1ZXJ5OiBhbnk7XHJcbmRlY2xhcmUgdmFyIENvbG9yczogYW55O1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2tlcnZpLWNvbG9yJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgc3R5bGU9XCJtYXgtd2lkdGg6OTBweFwiIGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgIDxkaXYgIFthdHRyLmJhY2tncm91bmQudmFsdWVdPVwiY29sb3JWYWx1ZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGNvbG9yXCI+PC9kaXY+XHJcbjwvZGl2PlxyXG5gLFxyXG4gIHN0eWxlczogW2BgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHB1YmxpYyBjb2xvclZhbHVlOnN0cmluZztcclxuICAgIEBJbnB1dCgpIHNldCBjb2xvcih2OnN0cmluZyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjY1wiLCB2LCB0aGlzLnBpY2tlcik7XHJcbiAgICAgICAgdGhpcy5jb2xvclZhbHVlID0gdjtcclxuICAgICAgICBpZiAodil7XHJcbiAgICAgICAgLy8gICAgalF1ZXJ5KCcuY29sb3InLCB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuY3NzKFwiYmFja2dyb3VuZC1jb2xvclwiLCB2KVxyXG4gICAgICAgIC8vZWxzZVxyXG4gICAgICAgICAgICBqUXVlcnkoJy5jb2xvcicsIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5hdHRyKFwic3R5bGVcIixcImJhY2tncm91bmQtY29sb3I6XCIgKyB2KVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICBcclxuICB9O1xyXG4gIEBPdXRwdXQoKSBjb2xvckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKVxyXG4gIEBJbnB1dCgpIGxpbmtQYXJhbWV0ZXJzOmFueTtcclxuICBASW5wdXQoKSBpbmxpbmU6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGRhc2hib2FyZFNpemVzOkRhc2hib2FyZFNpemVzID0gbmV3IERhc2hib2FyZFNpemVzKCk7XHJcbiAgcHJpdmF0ZSB3aWR0aDpzdHJpbmc7XHJcbiAgcHJpdmF0ZSBoZWlnaHQ6c3RyaW5nO1xyXG4gIHByaXZhdGUgc3RhdGU6YW55O1xyXG4gIHByaXZhdGUgcmdiU3RyaW5nOnN0cmluZztcclxuICBwcml2YXRlIHBpY2tlcjphbnkgPSBudWxsO1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikgeyB9XHJcbiAgICBcclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIGlmICghc2VsZi5saW5rUGFyYW1ldGVycy5idXR0b25XaWR0aClcclxuICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5kYXNoYm9hcmRTaXplcy5zd2l0Y2hXaWR0aDtcclxuICAgIGVsc2VcclxuICAgICAgICB0aGlzLndpZHRoID0gc2VsZi5saW5rUGFyYW1ldGVycy5idXR0b25XaWR0aDtcclxuXHJcbiAgICBcclxuICAgIGlmICh0aGlzLmxpbmtQYXJhbWV0ZXJzLmlzSW5wdXQpe1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBzZWxmLnBpY2tlciA9IGpRdWVyeSgnLmNvbG9yJywgc2VsZi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLmNvbG9yUGlja2VyKHtcclxuICAgICAgICAgICAgICAgIC8vY29sb3I6ICdyZ2JhKDI1NSwxMiwxNCwxKScsXHJcbiAgICAgICAgICAgICAgICBjc3NBZGRvbjogJy5jcC1jb2xvci1waWNrZXIge3otaW5kZXg6MjAwMH0nLFxyXG4gICAgICAgICAgICAgICAgYnVpbGRDYWxsYmFjazpmdW5jdGlvbihiKXtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbkNhbGxiYWNrOmZ1bmN0aW9uKHApe1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJlbmRlckNhbGxiYWNrOiBmdW5jdGlvbih2KXtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB2LnRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlLmluZGV4T2YoXCJyZ2JcIik9PTApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmdiID0gdi50ZXh0LnNwbGl0KCAnLCcgKSA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByPXBhcnNlSW50KCByZ2JbMF0uc3Vic3RyaW5nKDQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGc9cGFyc2VJbnQoIHJnYlsxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBiPXBhcnNlSW50KCByZ2JbMl0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IFwiI1wiICtyLnRvU3RyaW5nKDE2KStnLnRvU3RyaW5nKDE2KStiLnRvU3RyaW5nKDE2KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjY1wiLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb2xvckNoYW5nZS5lbWl0KHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBhY3Rpb25DYWxsYmFjazogZnVuY3Rpb24odix4KXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNcIiwgdiwgeClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgfSk7ICAgIFxyXG4gICAgICAgIH0sIDApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nXHJcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgTkdYS2VydmlQaXBlc01vZHVsZSAgfSBmcm9tICduZ3gta2VydmknXHJcbmltcG9ydCB7IFNwYXJrbGluZUNvbXBvbmVudCB9IGZyb20gJy4vc3BhcmtsaW5lL3NwYXJrbGluZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTbGlkZXJDb21wb25lbnQgfSBmcm9tICcuL3NsaWRlci9zbGlkZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgR2F1Z2VDb21wb25lbnQgfSBmcm9tICcuL2dhdWdlL2dhdWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEtlcnZpQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuL2NoYXJ0L2NoYXJ0LmNvbXBvbmVudCdcclxuLy9pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBTd2l0Y2hCdXR0b25Db21wb25lbnR9IGZyb20gJy4vc3dpdGNoLWJ1dHRvbi9zd2l0Y2gtYnV0dG9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJ1dHRvbkNvbXBvbmVudH0gZnJvbSAnLi9idXR0b24vYnV0dG9uLmNvbXBvbmVudCc7XHJcbi8vaW1wb3J0IHsgQ2FtVmlld2VyQ29tcG9uZW50IH0gZnJvbSAnLi9jYW0tdmlld2VyL2NhbS12aWV3ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTVBFR1ZpZXdlckNvbXBvbmVudCB9IGZyb20gJy4vbXBlZy12aWV3ZXIvbXBlZy12aWV3ZXIuY29tcG9uZW50JztcclxuLy9pbXBvcnQgeyBJbWFnZVZpZXdlckNvbXBvbmVudCB9IGZyb20gJy4vaW1hZ2Utdmlld2VyL2ltYWdlLXZpZXdlci5jb21wb25lbnQnOyBcclxuLy9pbXBvcnQgeyBBY3Rpb25Db21wb25lbnQgfSBmcm9tICcuL2FjdGlvbi9hY3Rpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGF0ZVRpbWVDb21wb25lbnQgfSBmcm9tICcuL2RhdGV0aW1lcGlja2VyL2RhdGV0aW1lcGlja2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEljb25zQ29tcG9uZW50IH0gZnJvbSAnLi9pY29ucy9pY29ucy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZ3hHYXVnZU1vZHVsZSB9IGZyb20gJ25neC1nYXVnZSc7XHJcbmltcG9ydCB7IENvbG9yQ29tcG9uZW50IH0gZnJvbSAnLi9jb2xvci9jb2xvci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9ICAgIGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTmdab3Jyb0FudGRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkJztcclxuaW1wb3J0IHsgTmdBcGV4Y2hhcnRzTW9kdWxlIH0gZnJvbSAnbmctYXBleGNoYXJ0cydcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBTcGFya2xpbmVDb21wb25lbnQsXHJcbiAgICBTbGlkZXJDb21wb25lbnQsXHJcbiAgICBJY29uc0NvbXBvbmVudCxcclxuICAgIEdhdWdlQ29tcG9uZW50LFxyXG4gICAgS2VydmlDaGFydENvbXBvbmVudCxcclxuICAgIFN3aXRjaEJ1dHRvbkNvbXBvbmVudCxcclxuICAgIEJ1dHRvbkNvbXBvbmVudCxcclxuICAgIC8vQ2FtVmlld2VyQ29tcG9uZW50LFxyXG4gICAgTVBFR1ZpZXdlckNvbXBvbmVudCxcclxuICAgIC8vSW1hZ2VWaWV3ZXJDb21wb25lbnQsXHJcbiAgICAvL0FjdGlvbkNvbXBvbmVudCxcclxuICAgIERhdGVUaW1lQ29tcG9uZW50LFxyXG4gICAgQ29sb3JDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6W1xyXG4gICAgICBTcGFya2xpbmVDb21wb25lbnQsXHJcbiAgICAgIFNsaWRlckNvbXBvbmVudCxcclxuICAgICAgSWNvbnNDb21wb25lbnQsXHJcbiAgICAgIE1QRUdWaWV3ZXJDb21wb25lbnQsXHJcbiAgICAgIEdhdWdlQ29tcG9uZW50LFxyXG4gICAgICBLZXJ2aUNoYXJ0Q29tcG9uZW50LFxyXG4gICAgICBTd2l0Y2hCdXR0b25Db21wb25lbnQsXHJcbiAgICAgIEJ1dHRvbkNvbXBvbmVudCxcclxuICAgICAgLy9DYW1WaWV3ZXJDb21wb25lbnQsXHJcbiAgICAgIC8vQWN0aW9uQ29tcG9uZW50LFxyXG4gICAgICBEYXRlVGltZUNvbXBvbmVudCxcclxuICAgICAgQ29sb3JDb21wb25lbnRcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIEJyb3dzZXJNb2R1bGUsXHJcbiAgICBOR1hLZXJ2aVBpcGVzTW9kdWxlLFxyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgTmd4R2F1Z2VNb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIE5nWm9ycm9BbnRkTW9kdWxlLFxyXG4gICAgTmdBcGV4Y2hhcnRzTW9kdWxlXHJcbiAgICAvL0tlcnZpUGlwZXNNb2R1bGVcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW10sXHJcbiAgYm9vdHN0cmFwOiBbXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVUlDb21wb25lbnRzTW9kdWxlIHtcclxuICBjb25zdHJ1Y3RvciAoKXt9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCBUaW0gV2VudHpsYXVcclxuLy8gTGljZW5zZWQgdW5kZXIgTUlUXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEtlcnZpVmFsdWUsIERhc2hib2FyZFBhbmVsLCBEYXNoYm9hcmRTaXplcyB9IGZyb20gJ2tlcnZpLWpzJ1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdrZXJ2aS12YWx1ZScsXHJcblx0dGVtcGxhdGU6IGAgICAgPGtlcnZpLXZhbHVlLW51bWJlciAqbmdJZj1cInZhbHVlLnR5cGVOYW1lPT0nTnVtYmVyJ1wiIFt2YWx1ZV09XCJ2YWx1ZVwiIFtkYXNoYm9hcmRTaXplc109XCJkYXNoYm9hcmRTaXplc1wiIFtsaW5rUGFyYW1ldGVyc109XCJsaW5rUGFyYW1ldGVyc1wiIFtpbmxpbmVdPVwiaW5saW5lXCIgPjwva2VydmktdmFsdWUtbnVtYmVyPlxyXG4gICAgPGtlcnZpLXZhbHVlLWJvb2xlYW4gKm5nSWY9XCJ2YWx1ZS50eXBlTmFtZT09J0Jvb2xlYW4nXCIgW2Rhc2hib2FyZFNpemVzXT1cImRhc2hib2FyZFNpemVzXCIgW2xpbmtQYXJhbWV0ZXJzXT1cImxpbmtQYXJhbWV0ZXJzXCIgW2lubGluZV09XCJpbmxpbmVcIiBbdmFsdWVdPVwidmFsdWVcIj48L2tlcnZpLXZhbHVlLWJvb2xlYW4+XHJcbiAgICA8a2VydmktdmFsdWUtc3RyaW5nICpuZ0lmPVwidmFsdWUudHlwZU5hbWU9PSdTdHJpbmcnXCIgW2Rhc2hib2FyZFNpemVzXT1cImRhc2hib2FyZFNpemVzXCIgW2xpbmtQYXJhbWV0ZXJzXT1cImxpbmtQYXJhbWV0ZXJzXCIgW2lubGluZV09XCJpbmxpbmVcIiBbdmFsdWVdPVwidmFsdWVcIj48L2tlcnZpLXZhbHVlLXN0cmluZz5cclxuICAgIDxrZXJ2aS12YWx1ZS1jb2xvciAqbmdJZj1cInZhbHVlLnR5cGVOYW1lPT0nQ29sb3InXCIgW2Rhc2hib2FyZFNpemVzXT1cImRhc2hib2FyZFNpemVzXCIgW2xpbmtQYXJhbWV0ZXJzXT1cImxpbmtQYXJhbWV0ZXJzXCIgW2lubGluZV09XCJpbmxpbmVcIiBbdmFsdWVdPVwidmFsdWVcIj48L2tlcnZpLXZhbHVlLWNvbG9yPlxyXG4gICAgPGtlcnZpLXZhbHVlLWRhdGV0aW1lICpuZ0lmPVwidmFsdWUudHlwZU5hbWU9PSdEYXRlVGltZSdcIiBbZGFzaGJvYXJkU2l6ZXNdPVwiZGFzaGJvYXJkU2l6ZXNcIiBbbGlua1BhcmFtZXRlcnNdPVwibGlua1BhcmFtZXRlcnNcIiBbaW5saW5lXT1cImlubGluZVwiIFt2YWx1ZV09XCJ2YWx1ZVwiPjwva2VydmktdmFsdWUtZGF0ZXRpbWU+XHJcbmAsXHJcblx0c3R5bGVzOiBbYGBdXHJcblx0Ly9kaXJlY3RpdmVzOiBbIENvbW1vbk1vZHVsZSAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEtlcnZpVmFsdWVDb21wb25lbnQge1xyXG5cdEBJbnB1dCgpIHZhbHVlOiBLZXJ2aVZhbHVlO1xyXG5cdEBJbnB1dCgpIGRhc2hib2FyZFBhbmVsOiBEYXNoYm9hcmRQYW5lbDtcclxuXHRASW5wdXQoKSBsaW5rUGFyYW1ldGVyczphbnk7XHJcblx0QElucHV0KCkgaW5saW5lOmJvb2xlYW4gPSBmYWxzZTtcclxuXHRASW5wdXQoKSBkYXNoYm9hcmRTaXplczpEYXNoYm9hcmRTaXplcyA9IG5ldyBEYXNoYm9hcmRTaXplcygpO1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHsgXHJcblx0fVxyXG5cdCBcclxuXHRcclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nXHJcbmltcG9ydCB7IE51bWJlckNvbXBvbmVudH0gZnJvbSAnLi9udW1iZXItdmFsdWUvbnVtYmVyLXZhbHVlLmNvbXBvbmVudCdcclxuaW1wb3J0IHsgTkdYS2VydmlQaXBlc01vZHVsZSAgfSBmcm9tICduZ3gta2VydmknXHJcbmltcG9ydCB7IEJvb2xlYW5Db21wb25lbnR9IGZyb20gJy4vYm9vbGVhbi12YWx1ZS9ib29sZWFuLXZhbHVlLmNvbXBvbmVudCdcclxuaW1wb3J0IHsgU3RyaW5nQ29tcG9uZW50fSBmcm9tICcuL3N0cmluZy12YWx1ZS9zdHJpbmctdmFsdWUuY29tcG9uZW50J1xyXG5pbXBvcnQgeyBEYXRlVGltZUNvbXBvbmVudH0gZnJvbSAnLi9kYXRldGltZS12YWx1ZS9kYXRldGltZS12YWx1ZS5jb21wb25lbnQnXHJcbmltcG9ydCB7IENvbG9yQ29tcG9uZW50fSBmcm9tICcuL2NvbG9yLXZhbHVlL2NvbG9yLXZhbHVlLmNvbXBvbmVudCdcclxuLy8gaW1wb3J0IHsgRW51bUNvbXBvbmVudH0gZnJvbSAnLi9lbnVtLXZhbHVlL2VudW0tdmFsdWUuY29tcG9uZW50J1xyXG5pbXBvcnQgeyBVSUNvbXBvbmVudHNNb2R1bGV9IGZyb20gJy4uL3VpLWNvbXBvbmVudHMvdWktY29tcG9uZW50cy5tb2R1bGUnXHJcbmltcG9ydCB7IEtlcnZpVmFsdWVDb21wb25lbnQgfSBmcm9tICcuL2tlcnZpLXZhbHVlL2tlcnZpLXZhbHVlLmNvbXBvbmVudCdcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSAgICBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE5nWm9ycm9BbnRkTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBOdW1iZXJDb21wb25lbnQsXHJcbiAgICBCb29sZWFuQ29tcG9uZW50LFxyXG4gICAgS2VydmlWYWx1ZUNvbXBvbmVudCxcclxuICAgIFN0cmluZ0NvbXBvbmVudCxcclxuICAgIC8vRW51bUNvbXBvbmVudCxcclxuICAgIERhdGVUaW1lQ29tcG9uZW50LFxyXG4gICAgQ29sb3JDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6W1xyXG4gICAgICBOdW1iZXJDb21wb25lbnQsXHJcbiAgICAgIEJvb2xlYW5Db21wb25lbnQsXHJcbiAgICAgIEtlcnZpVmFsdWVDb21wb25lbnQsXHJcbiAgICAgIFN0cmluZ0NvbXBvbmVudCxcclxuICAgICAgLy9FbnVtQ29tcG9uZW50LFxyXG4gICAgICBEYXRlVGltZUNvbXBvbmVudCxcclxuICAgICAgQ29sb3JDb21wb25lbnRcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIE5HWEtlcnZpUGlwZXNNb2R1bGUsXHJcbiAgICBVSUNvbXBvbmVudHNNb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIE5nWm9ycm9BbnRkTW9kdWxlXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtdLFxyXG4gIGJvb3RzdHJhcDogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIFZhbHVlc01vZHVsZSB7XHJcbiAgY29uc3RydWN0b3IgKCl7fVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCxFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE51bWJlclZhbHVlIH0gZnJvbSBcImtlcnZpLWpzXCJcclxuZGVjbGFyZSB2YXIgalF1ZXJ5OiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2tlcnZpLWNvbnRyb2xsZXItcGFkJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgKG1vdXNlZG93bik9XCJwYWRQcmVzcygpXCIgKG1vdXNldXApPVwicGFkUmVsZWFzZSgpXCI+XHJcbiAgPGZpZWxkc2V0IGlkPVwibGVmdFBhZFwiIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGVcIiBjbGFzcz1cInBhZFwiIFthdHRyLmRhdGEtd2lkdGhdPVwicGFkU2l6ZVwiIFthdHRyLmRhdGEtaGVpZ2h0XT1cInBhZFNpemVcIiA+XHJcbiAgICA8bGVnZW5kPjwvbGVnZW5kPlxyXG4gICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwicGFkLXhcIiB2YWx1ZT1cIjBcIj48aW5wdXQgdHlwZT1cImhpZGRlblwiICBuYW1lPVwicGFkLXlcIiB2YWx1ZT1cIjBcIj5cclxuICA8L2ZpZWxkc2V0PlxyXG48L2Rpdj5gLFxyXG4gIHN0eWxlczogW2BgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udHJvbGxlclBhZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgWFZhbHVlOk51bWJlclZhbHVlO1xyXG4gIEBJbnB1dCgpIFlWYWx1ZTpOdW1iZXJWYWx1ZTtcclxuICBASW5wdXQoKSBhdXRvQ2VudGVyOmJvb2xlYW47XHJcbiAgcGFkU2l6ZTpudW1iZXI9MTgwO1xyXG4gIHByaXZhdGUgbW92ZURlbGF5VGltZXIgPSBudWxsO1xyXG4gIHByaXZhdGUgaW5EcmFnOmJvb2xlYW4gPSBmYWxzZTtcclxuICBcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6RWxlbWVudFJlZikgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgaWYgKHRoaXMuWFZhbHVlKXtcclxuICAgICAgalF1ZXJ5KFwiaW5wdXRbbmFtZT0ncGFkLXgnXVwiLCBzZWxmLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkudmFsKHRoaXMuWFZhbHVlLnZhbHVlJC52YWx1ZSkuY2hhbmdlKCk7XHJcbiAgICAgIHRoaXMuWFZhbHVlLnZhbHVlJC5zdWJzY3JpYmUoZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInBhZC14XCIsIHNlbGYuWVZhbHVlLm5hbWUsIHYpO1xyXG4gICAgICAgIGpRdWVyeShcImlucHV0W25hbWU9J3BhZC14J11cIiwgc2VsZi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLnZhbCh2KS5jaGFuZ2UoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuWVZhbHVlKXtcclxuICAgICAgalF1ZXJ5KFwiaW5wdXRbbmFtZT0ncGFkLXknXVwiLCBzZWxmLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkudmFsKHRoaXMuWVZhbHVlLnZhbHVlJC52YWx1ZSkuY2hhbmdlKCk7ICAgICAgICBcclxuICAgICAgdGhpcy5ZVmFsdWUudmFsdWUkLnN1YnNjcmliZShmdW5jdGlvbiAodikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGFkLXlcIiwgc2VsZi5ZVmFsdWUubmFtZSwgdik7XHJcbiAgICAgICAgalF1ZXJ5KFwiaW5wdXRbbmFtZT0ncGFkLXknXVwiLCBzZWxmLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkudmFsKHYpLmNoYW5nZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgY29sb3IgPSBcInJnYmEoMjU1LDI1NSwyNTUsLjUpXCI7XHJcbiAgICB2YXIgcCA9IGpRdWVyeSgnZmllbGRzZXQnLCBzZWxmLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkueHkoe1xyXG4gICAgICBkaXNwbGF5UHJldmlvdXM6IGZhbHNlXHJcbiAgICAgICwgbWluOiAtMTAwXHJcbiAgICAgICwgbWF4OiAxMDBcclxuICAgICAgLCB3aWR0aDogc2VsZi5wYWRTaXplXHJcbiAgICAgICwgaGVpZ2h0OiBzZWxmLnBhZFNpemVcclxuICAgICAgLCBmZ0NvbG9yOiBjb2xvclxyXG4gICAgICAsIGJnQ29sb3I6IGNvbG9yXHJcbiAgICAgICwgY2hhbmdlOiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICBpZiAoc2VsZi5tb3ZlRGVsYXlUaW1lcikge1xyXG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHNlbGYubW92ZURlbGF5VGltZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBzZWxmLm1vdmVEZWxheVRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBpZiAoc2VsZi5YVmFsdWUpXHJcbiAgICAgICAgICAgIHNlbGYuWFZhbHVlLnNldCh2YWx1ZVswXSk7XHJcbiAgICAgICAgICBpZiAoc2VsZi5ZVmFsdWUpXHJcbiAgICAgICAgICAgIHNlbGYuWVZhbHVlLnNldCh2YWx1ZVsxXSk7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAuY3NzKHsgJ2JvcmRlcic6ICcycHggc29saWQgJyArIGNvbG9yIH0pOyAgXHJcbiAgfVxyXG5cclxuICBwYWRQcmVzcygpe1xyXG4gICAgdGhpcy5pbkRyYWc9dHJ1ZTtcclxuICB9XHJcblxyXG4gIHBhZFJlbGVhc2UoKXtcclxuICAgIGNvbnNvbGUubG9nKFwicHJcIiwgdGhpcy5pbkRyYWcsIHRoaXMuYXV0b0NlbnRlcik7ICAgXHJcbiAgICB0aGlzLmluRHJhZz1mYWxzZTtcclxuICAgICAgIGlmICh0aGlzLmF1dG9DZW50ZXIgJiYgdGhpcy5YVmFsdWUpe1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhcIngtYXV0byBjZW50ZXJcIik7XHJcbiAgICAgICAgIGpRdWVyeShcImlucHV0W25hbWU9J3BhZC14J11cIiwgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLnZhbCgwKS5jaGFuZ2UoKTtcclxuICAgICAgICAgdGhpcy5YVmFsdWUuc2V0KDApO1xyXG4gICAgICAgfVxyXG4gICAgICAgaWYgKHRoaXMuYXV0b0NlbnRlciAmJiB0aGlzLllWYWx1ZSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ5LWF1dG8gY2VudGVyXCIpOyBcclxuICAgICAgICBqUXVlcnkoXCJpbnB1dFtuYW1lPSdwYWQteSddXCIsIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS52YWwoMCkuY2hhbmdlKCk7XHJcbiAgICAgICAgIHRoaXMuWVZhbHVlLnNldCgwKTtcclxuICAgICAgIH1cclxuICB9XHJcblxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NoaWxkLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBLZXJ2aUNhbWVyYUNvbXBvbmVudCB9IGZyb20gJ25neC1rZXJ2aSc7XHJcbmRlY2xhcmUgdmFyIHdpbmRvdzogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdrZXJ2aS1jYW0tdmlld2VyJyxcclxuICB0ZW1wbGF0ZTogYDxuZy1jb250YWluZXIgKm5nSWY9XCJpc0JhY2tncm91bmQgJiYgY2FtZXJhIT09bnVsbFwiPlxyXG5cdDxkaXYgI3ZpZGVvVmlld2VyIGlkPVwidmlkZW8tdmlld2VyXCIgY2xhc3M9XCJ2aWRlbyB2aWRlby1iYWNrZ3JvdW5kXCIgc3R5bGU9XCJ0ZXh0LWFsaWduOmNlbnRlcjtwb3NpdGlvbjpmaXhlZDt0b3A6NjBweDtsZWZ0OjBweDtoZWlnaHQ6MTAwJTtcIiBbc3R5bGUuaGVpZ2h0LnB4XT1cImNhbUhlaWdodFwiIFtzdHlsZS53aWR0aC5weF09XCJjYW1XaWR0aFwiPlxyXG5cdFx0PGRpdiBzdHlsZT1cInBvc2l0aW9uOmZpeGVkO3otaW5kZXg6MzAwMFwiICpuZ0lmPVwic3RyZWFtT2JzZXJ2ZXJzLmxlbmd0aCA+IDBcIj5cclxuXHRcdFx0PGJ1dHRvbiAoY2xpY2spPVwiY2hhbmdlU291cmNlKGNhbWVyYVNvdXJjZSlcIiA+YmFzZTwvYnV0dG9uPlxyXG5cdFx0XHQ8YnV0dG9uICpuZ0Zvcj1cImxldCBvYnNlcnZlciBvZiBzdHJlYW1PYnNlcnZlcnNcIiAoY2xpY2spPVwiY2hhbmdlU291cmNlKG9ic2VydmVyLnVpLnN0cmVhbSlcIj4ge3sgb2JzZXJ2ZXIubmFtZX19PC9idXR0b24+XHRcdFx0XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxzcGFuIGNsYXNzPVwiY2FtSW1hZ2VcIiBzdHlsZT1cInRvcDowcHg7bGVmdDowcHg7XCI+XHJcblx0XHRcdDxrZXJ2aS1tcGVnLXZpZXdlciAoaW1hZ2VMb2FkZWQpPVwiaW1hZ2VMb2FkZWQoKVwiIFtoZWlnaHRdPTEwMCAgIFtjYW1lcmFTb3VyY2VdPVwic2VsZWN0ZWRTb3VyY2VcIiA+IDwva2VydmktbXBlZy12aWV3ZXI+XHJcblx0XHQ8L3NwYW4+XHJcblx0XHQ8Y2FudmFzIGlkPVwiY2FtQ2FudmFzXCIgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MHB4O2xlZnQ6MHB4O1wiIFtzdHlsZS5oZWlnaHQucHhdPVwiY2FtSGVpZ2h0XCIgW3N0eWxlLndpZHRoLnB4XT1cImNhbVdpZHRoXCI+PC9jYW52YXM+XHJcblx0XHQ8Y2FudmFzIGlkPVwicG9pQ2FudmFzXCIgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MHB4O2xlZnQ6MHB4O3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCVcIj48L2NhbnZhcz5cclxuXHRcdDxkaXYgY2xhc3M9XCJjYW0tcGFkLWFyZWFcIiAqbmdJZj1cInNob3dDYW1QYWRcIiBbc3R5bGUubGVmdC5weF09XCJjYW1QYWRMZWZ0XCIgW3N0eWxlLnRvcC5weF09XCJjYW1QYWRUb3BcIiBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6IDIwMDBcIj5cclxuICAgICAgPGtlcnZpLWNvbnRyb2xsZXItcGFkIFtYVmFsdWVdPVwicGFuXCIgW1lWYWx1ZV09XCJ0aWx0XCI+IDwva2VydmktY29udHJvbGxlci1wYWQ+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXYgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MzBweDtsZWZ0OjBweDt3aWR0aDoxMDAlO2hlaWdodDo1MHB4XCI+XHJcblx0XHRcdDxuZy1jb250YWluZXIgICpuZ0Zvcj1cImxldCBhY3Rpb24gb2YgY2FtZXJhLmFjdGlvbnNcIj5cclxuXHRcdFx0XHQ8a2VydmktYWN0aW9uIHRpdGxlPVwie3soIGFjdGlvbi5uYW1lIHwgdHJhbnNsYXRlKX19XCIgKm5nSWY9XCJhY3Rpb24udmlzaWJsZVwiIFthY3Rpb25dPVwiYWN0aW9uXCIgPjwva2VydmktYWN0aW9uPlxyXG5cdFx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG48L25nLWNvbnRhaW5lcj5cclxuXHJcbjxuZy1jb250YWluZXIgKm5nSWY9XCIhaXNCYWNrZ3JvdW5kICYmIGNhbWVyYSE9PW51bGxcIj5cclxuXHQ8ZGl2ICN2aWRlb1ZpZXdlciBpZD1cInZpZGVvLXZpZXdlclwiIGNsYXNzPVwidmlkZW9cIiBzdHlsZT1cIm92ZXJmbG93OmhpZGRlbjtwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlXCI+XHJcblx0XHQ8c3BhbiBjbGFzcz1cImNhbUltYWdlXCIgc3R5bGU9XCJ0b3A6MHB4O2xlZnQ6MHB4O2hlaWdodDoxMDAlO3dpZHRoOjEwMCVcIj5cclxuXHRcdFx0PGtlcnZpLW1wZWctdmlld2VyIChpbWFnZUxvYWRlZCk9XCJpbWFnZUxvYWRlZCgpXCIgW3dpZHRoXT0xMDAgIFtjYW1lcmFTb3VyY2VdPVwiY2FtZXJhU291cmNlXCIgPiA8L2tlcnZpLW1wZWctdmlld2VyPlxyXG5cdFx0PC9zcGFuPlxyXG5cdFx0PGNhbnZhcyBpZD1cImNhbUNhbnZhc1wiIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7dG9wOjBweDtsZWZ0OjBweDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlXCI+PC9jYW52YXM+XHJcblx0XHQ8Y2FudmFzIGlkPVwicG9pQ2FudmFzXCIgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MHB4O2xlZnQ6MHB4O3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCVcIj48L2NhbnZhcz5cclxuXHRcdDxkaXYgY2xhc3M9XCJjYW0tcGFkLWFyZWFcIiAqbmdJZj1cInNob3dDYW1QYWRcIiBbc3R5bGUubGVmdC5weF09XCJjYW1QYWRMZWZ0XCIgW3N0eWxlLnRvcC5weF09XCJjYW1QYWRUb3BcIiBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlXCI+XHJcbiAgICAgIDxrZXJ2aS1jb250cm9sbGVyLXBhZCBbWFZhbHVlXT1cInBhblwiIFtZVmFsdWVdPVwidGlsdFwiPiA8L2tlcnZpLWNvbnRyb2xsZXItcGFkPlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcblx0PGRpdj5cclxuXHRcdDxuZy1jb250YWluZXIgICpuZ0Zvcj1cImxldCBhY3Rpb24gb2YgY2FtZXJhLmFjdGlvbnNcIj5cclxuXHRcdFx0PGtlcnZpLWFjdGlvbiAqbmdJZj1cImFjdGlvbi51aS52aXNpYmxlXCIgdGl0bGU9XCJ7eyggYWN0aW9uLm5hbWUgfCB0cmFuc2xhdGUpfX1cIiBbYWN0aW9uXT1cImFjdGlvblwiID48L2tlcnZpLWFjdGlvbj5cclxuXHRcdDwvbmctY29udGFpbmVyPlxyXG5cdFx0PCEtLSA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgKG1vdXNlZG93bik9XCJpbWFnZVZpZXdlci5zaG93KClcIiB0aXRsZT1cInt7KCAnbWVkaWFfZm9sZGVyJyB8IHRyYW5zbGF0ZSl9fVwiPlxyXG5cdFx0XHQ8aSAgY2xhc3M9J2ZhIGZhLWZvbGRlcic+PC9pPlxyXG5cdFx0PC9idXR0b24+IC0tPlxyXG5cdDwvZGl2PlxyXG48L25nLWNvbnRhaW5lcj5cclxuPCEtLSA8a2VydmktaW1hZ2Utdmlld2VyICNpbWFnZVZpZXdlciBbY2FtQ29tcG9uZW50XT1cInRoaXNcIiBbY2FtZXJhU291cmNlXT1cImNhbWVyYVNvdXJjZVwiPjwva2VydmktaW1hZ2Utdmlld2VyPiAtLT5gLFxyXG4gIHN0eWxlczogW2BgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FtVmlld2VyQ29tcG9uZW50IGV4dGVuZHMgS2VydmlDYW1lcmFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xyXG4gIHB1YmxpYyBjYW1IZWlnaHQ6IG51bWJlcjtcclxuICBwdWJsaWMgY2FtV2lkdGg6IG51bWJlcjtcclxuICBwdWJsaWMgY2FtUGFkTGVmdDogbnVtYmVyO1xyXG4gIHB1YmxpYyBjYW1QYWRUb3A6IG51bWJlcjtcclxuICBwdWJsaWMgc2hvd0NhbVBhZCA9IGZhbHNlO1xyXG4gIEBWaWV3Q2hpbGQoJ3ZpZGVvVmlld2VyJykgdmlkZW9WaWV3ZXI6IEVsZW1lbnRSZWY7XHJcbiAgcGFkU2l6ZSA9IDE4MDtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBpbWFnZUxvYWRlZCgpIHtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgaWYgKHRoaXMuY2FtZXJhICE9PSBudWxsKSB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBzZWxmLnZpZGVvVmlld2VyLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgIGNvbnN0IHZpZXdQb3J0SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICBjb25zdCB2aWV3UG9ydFdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcblxyXG4gICAgICB0aGlzLmNhbUhlaWdodCA9IHZpZXdQb3J0SGVpZ2h0IC0gNjU7XHJcbiAgICAgIHRoaXMuY2FtV2lkdGggPSB2aWV3UG9ydFdpZHRoO1xyXG4gICAgICBjb25zb2xlLmxvZygnYXZpYycsIHRoaXMuY2FtSGVpZ2h0LCB0aGlzLmNhbVdpZHRoKTtcclxuXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCBoID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgY29uc3QgdyA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgaWYgKHcgPCBzZWxmLnBhZFNpemUpIHtcclxuICAgICAgICAgIHNlbGYucGFkU2l6ZSA9IHcgLSAxMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NhbWknLCBoLCB3LCBzZWxmLnBhZFNpemUsIGVsZW1lbnQpO1xyXG4gICAgICAgIHNlbGYuY2FtUGFkVG9wID0gaCAvIDIgLSAoc2VsZi5wYWRTaXplIC8gMik7XHJcbiAgICAgICAgc2VsZi5jYW1QYWRMZWZ0ID0gIHcgLyAyIC0gKHNlbGYucGFkU2l6ZSAvIDIpO1xyXG4gICAgICAgIHNlbGYuc2hvd0NhbVBhZCA9IHRydWU7XHJcbiAgICAgIH0sIDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLm5nT25Jbml0Q2FtZXJhKCk7XHJcbiAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgVGltIFdlbnR6bGF1XHJcbi8vIExpY2Vuc2VkIHVuZGVyIE1JVFxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBLZXJ2aUFjdGlvbkNvbXBvbmVudCB9IGZyb20gJ25neC1rZXJ2aSc7XHJcbi8vaW1wb3J0IHsgVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdGVtcGxhdGUuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2tlcnZpLWFjdGlvbicsXHJcbiAgdGVtcGxhdGU6IGA8a2Vydmktc3dpdGNoYnV0dG9uIFxyXG4gICAgW2Rhc2hib2FyZFNpemVzXT1cImRhc2hib2FyZFNpemVzXCIgXHJcbiAgICBbaW5saW5lXT1cImlubGluZVwiIFxyXG4gICAgW3ZhbHVlXT1cIihzdGF0ZSB8IGFzeW5jKVwiIFxyXG4gICAgW2xpbmtQYXJhbWV0ZXJzXT1cImxpbmtQYXJhbWV0ZXJzXCJcclxuICAgIChidXR0b25TdGF0ZSk9XCJzZXRBY3Rpb25TdGF0ZSgkZXZlbnQpXCJcclxuICAgICpuZ0lmPVwiZGlzcGxheVR5cGUhPSdidXR0b24nXCJcclxuPjwva2Vydmktc3dpdGNoYnV0dG9uPlxyXG48a2VydmktYnV0dG9uIFxyXG4gICAgW3RpdGxlXT1cImFjdGlvbi5uYW1lXCIgXHJcbiAgICBbZGFzaGJvYXJkU2l6ZXNdPVwiZGFzaGJvYXJkU2l6ZXNcIiBcclxuICAgIFt2YWx1ZV09XCIoc3RhdGUgfCBhc3luYylcIiBcclxuICAgIFtpbmxpbmVdPVwiaW5saW5lXCIgXHJcbiAgICBbbGlua1BhcmFtZXRlcnNdPVwibGlua1BhcmFtZXRlcnNcIlxyXG4gICAgKGJ1dHRvblN0YXRlKT1cInNldEFjdGlvblN0YXRlKCRldmVudClcIiBcclxuICAgICpuZ0lmPVwiZGlzcGxheVR5cGU9PSdidXR0b24nXCJcclxuPjwva2VydmktYnV0dG9uPlxyXG5gLFxyXG4gIHN0eWxlczogW2BgXSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBY3Rpb25Db21wb25lbnQgZXh0ZW5kcyBLZXJ2aUFjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgdGhpcy5uZ09uSW5pdEFjdGlvbigpO1xyXG4gIH1cclxufSIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgVGltIFdlbnR6bGF1XHJcbi8vIExpY2Vuc2VkIHVuZGVyIE1JVFxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBLZXJ2aVVzZXJMb2dDb21wb25lbnQgfSBmcm9tICduZ3gta2VydmknO1xyXG4vL2ltcG9ydCB7IFRlbXBsYXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3RlbXBsYXRlLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdrZXJ2aS11c2VyLWxvZycsXHJcbiAgdGVtcGxhdGU6IGA8bnotdGltZWxpbmUgPlxyXG4gICAgPG56LXRpbWVsaW5lLWl0ZW0gW256RG90XT1cIm1lc3NhZ2UubGV2ZWw9PTEgPyBkb3RUZW1wbGF0ZTEgOiAgbWVzc2FnZS5sZXZlbD09MiA/IGRvdFRlbXBsYXRlMiA6IGRvdFRlbXBsYXRlM1wiICpuZ0Zvcj1cImxldCBtZXNzYWdlIG9mIG1lc3NhZ2VzJCB8IGFzeW5jXCI+XHJcbiAgICAgICAgICAgIDxzdHJvbmc+e3ttZXNzYWdlLnNvdXJjZU5hbWV9fTwvc3Ryb25nPjxicj5cclxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJmb250LXNpemU6ODAlXCI+e3ttZXNzYWdlLnRpbWVzdGFtcCB8IGRhdGU6ICdISDptbTpzcyd9fTwvc3Bhbj48YnI+ICAgIFxyXG4gICAgICAgICAgICB7e21lc3NhZ2UudG9waWN9fVxyXG4gICAgICAgICAgICA8bnotZGl2aWRlcj48L256LWRpdmlkZXI+XHJcbiAgICA8L256LXRpbWVsaW5lLWl0ZW0+XHJcbjwvbnotdGltZWxpbmU+XHJcbjxuZy10ZW1wbGF0ZSAjZG90VGVtcGxhdGUxPlxyXG4gICAgPGkgbnotaWNvbiB0eXBlPVwiY2xvc2UtY2lyY2xlXCIgc3R5bGU9XCJmb250LXNpemU6IDE2cHg7XCIgW256VGhlbWVdPVwiJ3R3b3RvbmUnXCIgW256VHdvdG9uZUNvbG9yXT1cIicjZjUyMjJkJ1wiPjwvaT5cclxuPC9uZy10ZW1wbGF0ZT5cclxuPG5nLXRlbXBsYXRlICNkb3RUZW1wbGF0ZTI+XHJcbiAgICA8aSBuei1pY29uIHR5cGU9XCJ3YXJuaW5nXCIgc3R5bGU9XCJmb250LXNpemU6IDE2cHg7XCIgW256VGhlbWVdPVwiJ3R3b3RvbmUnXCIgW256VHdvdG9uZUNvbG9yXT1cIicjZmFhZDE0J1wiPjwvaT5cclxuPC9uZy10ZW1wbGF0ZT5cclxuPG5nLXRlbXBsYXRlICNkb3RUZW1wbGF0ZTM+XHJcbiAgICA8aSBuei1pY29uIG56LWljb24gdHlwZT1cImNoZWNrLWNpcmNsZVwiIFtuelRoZW1lXT1cIid0d290b25lJ1wiIFtuelR3b3RvbmVDb2xvcl09XCInIzUyYzQxYSdcIiBzdHlsZT1cImZvbnQtc2l6ZTogMTZweDtcIj48L2k+XHJcbjwvbmctdGVtcGxhdGU+YCxcclxuICBzdHlsZXM6IFtgYF0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVXNlckxvZ0NvbXBvbmVudCBleHRlbmRzIEtlcnZpVXNlckxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpOyBcclxuICAgIFxyXG4gICAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMubmdPbkluaXRVc2VyTG9nKCk7IFxyXG4gIH1cclxuXHJcbiAgXHJcbiAgXHJcbn0iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIFRpbSBXZW50emxhdVxyXG4vLyBMaWNlbnNlZCB1bmRlciBNSVRcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEtlcnZpVXNlckxvZ0NvbXBvbmVudCB9IGZyb20gJ25neC1rZXJ2aSc7XHJcbmltcG9ydCB7IE56Tm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2tlcnZpLXVzZXItbWVzc2FnZXMnLFxyXG4gIHRlbXBsYXRlOiBgPG5nLXRlbXBsYXRlIGxldC1tZXNzYWdlPVwiZGF0YVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImFudC1ub3RpZmljYXRpb24tbm90aWNlLWNvbnRlbnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LW5vdGlmaWNhdGlvbi1ub3RpY2Utd2l0aC1pY29uXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYW50LW5vdGlmaWNhdGlvbi1ub3RpY2UtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgPGkgKm5nSWY9XCJtZXNzYWdlLmxldmVsPT0zXCIgbnotaWNvbiB0eXBlPVwiY2hlY2stY2lyY2xlXCIgW256VGhlbWVdPVwiJ3R3b3RvbmUnXCIgW256VHdvdG9uZUNvbG9yXT1cIicjNTJjNDFhJ1wiPjwvaT5cclxuICAgICAgICAgICAgICAgIDxpICpuZ0lmPVwibWVzc2FnZS5sZXZlbD09MlwiIG56LWljb24gdHlwZT1cIndhcm5pbmdcIiBbbnpUaGVtZV09XCIndHdvdG9uZSdcIiBbbnpUd290b25lQ29sb3JdPVwiJyNmYWFkMTQnXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPGkgKm5nSWY9XCJtZXNzYWdlLmxldmVsPT0xXCIgbnotaWNvbiB0eXBlPVwiY2xvc2UtY2lyY2xlXCIgW256VGhlbWVdPVwiJ3R3b3RvbmUnXCIgW256VHdvdG9uZUNvbG9yXT1cIicjZjUyMjJkJ1wiPjwvaT5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LW5vdGlmaWNhdGlvbi1ub3RpY2UtbWVzc2FnZVwiPnt7bWVzc2FnZS5zb3VyY2VOYW1lfX08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFudC1ub3RpZmljYXRpb24tbm90aWNlLWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICB7eyBtZXNzYWdlLnRvcGljIH19ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgXHJcbjwvbmctdGVtcGxhdGU+YCxcclxuICBzdHlsZXM6IFtgYF0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVXNlck1lc3NhZ2VzQ29tcG9uZW50IGV4dGVuZHMgS2VydmlVc2VyTG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmKSBtZXNzYWdlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPHt9PjsgIFxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbm90aWZpY2F0aW9uOiBOek5vdGlmaWNhdGlvblNlcnZpY2UpIHtcclxuICAgICAgICBzdXBlcigpOyBcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5sYXN0TWVzc2FnZSQuc3Vic2NyaWJlKGZ1bmN0aW9uKG1lc3NhZ2Upe1xyXG4gICAgICAgICAgaWYgKG1lc3NhZ2Upe1xyXG4gICAgICAgICAgICBzZWxmLm5vdGlmaWNhdGlvbi50ZW1wbGF0ZShzZWxmLm1lc3NhZ2VUZW1wbGF0ZSwgeyBuekRhdGE6IG1lc3NhZ2UgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICB0aGlzLm5nT25Jbml0VXNlckxvZygpOyBcclxuICAgIFxyXG4gIH1cclxufSIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgVGltIFdlbnR6bGF1XHJcbi8vIExpY2Vuc2VkIHVuZGVyIE1JVFxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgS2VydmlVc2VyTG9nQ29tcG9uZW50IH0gZnJvbSAnbmd4LWtlcnZpJztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdrZXJ2aS1tZXNzYWdlLWJ1dHRvbicsXHJcbiAgdGVtcGxhdGU6IGA8bnotYmFkZ2UgW256Q291bnRdPVwibWVzc2FnZUNvdW50JCB8IGFzeW5jXCIgW256T3ZlcmZsb3dDb3VudF09XCI5OVwiPlxyXG4gICAgPGJ1dHRvbiAqbmdJZj1cIihtZXNzYWdlQ291bnQkIHwgYXN5bmMpPjBcIiBuei1idXR0b24gbnpHaG9zdCAgbnpUeXBlPVwiZGVmYXVsdFwiIG56U2hhcGU9XCJjaXJjbGVcIiAoY2xpY2spPVwib3BlbigpXCI+XHJcbiAgICAgICAgPGkgbnotaWNvbiBuelR5cGU9XCJub3RpZmljYXRpb25cIiBuelRoZW1lPVwidHdvdG9uZVwiIFtuelR3b3RvbmVDb2xvcl09XCInIzlmZDAzNydcIj48L2k+XHJcbiAgICA8L2J1dHRvbj5cclxuPC9uei1iYWRnZT5cclxuXHJcbjxuei1kcmF3ZXJcclxuICAgICAgW256Q2xvc2FibGVdPVwiZmFsc2VcIlxyXG4gICAgICBbbnpWaXNpYmxlXT1cInZpc2libGVcIlxyXG4gICAgICBuelBsYWNlbWVudD1cInJpZ2h0XCJcclxuICAgICAgbnpUaXRsZT1cIkxvZ1wiXHJcbiAgICAgIChuek9uQ2xvc2UpPVwiY2xvc2UoKVwiXHJcbiAgICA+XHJcbiAgICA8a2VydmktdXNlci1sb2cgW2lubGluZV09XCJmYWxzZVwiPjwva2VydmktdXNlci1sb2c+XHJcbjwvbnotZHJhd2VyPmAsXHJcbiAgc3R5bGVzOiBbYGBdLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXJNZXNzYWdlQnV0dG9uQ29tcG9uZW50IGV4dGVuZHMgS2VydmlVc2VyTG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICB2aXNpYmxlID0gZmFsc2U7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTsgXHJcbiAgICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgdGhpcy5uZ09uSW5pdFVzZXJMb2coKTsgXHJcbiAgfVxyXG5cclxuICBvcGVuKCk6IHZvaWQge1xyXG4gICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGNsb3NlKCk6IHZvaWQge1xyXG4gICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ1pvcnJvQW50ZE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xyXG5pbXBvcnQgeyBOZ3hLZXJ2aU1vZHVsZSwgTkdYS2VydmlQaXBlc01vZHVsZSAgfSBmcm9tICduZ3gta2VydmknXHJcbmltcG9ydCB7IERhc2hib2FyZFBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9kYXNoYm9hcmQtcGFuZWwvZGFzaGJvYXJkLXBhbmVsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFdpZGdldENvbXBvbmVudCB9IGZyb20gJy4vd2lkZ2V0L3dpZGdldC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyAgVmFsdWVzTW9kdWxlIH0gZnJvbSAnLi92YWx1ZXMvdmFsdWVzLm1vZHVsZSc7XHJcblxyXG5pbXBvcnQgeyBDb250cm9sbGVyUGFkQ29tcG9uZW50IH0gZnJvbSAnLi9jb250cm9sbGVyLXBhZC9jb250cm9sbGVyLXBhZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDYW1WaWV3ZXJDb21wb25lbnQgfSBmcm9tICcuL2NhbS12aWV3ZXIvY2FtLXZpZXdlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBY3Rpb25Db21wb25lbnQgfSBmcm9tICcuL2FjdGlvbi9hY3Rpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgVUlDb21wb25lbnRzTW9kdWxlfSBmcm9tICcuL3VpLWNvbXBvbmVudHMvdWktY29tcG9uZW50cy5tb2R1bGUnXHJcbmltcG9ydCB7IFVzZXJMb2dDb21wb25lbnR9IGZyb20gJy4vbG9nL3VzZXItbG9nL3VzZXItbG9nLmNvbXBvbmVudCdcclxuaW1wb3J0IHsgVXNlck1lc3NhZ2VzQ29tcG9uZW50IH0gZnJvbSAnLi9sb2cvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50J1xyXG5pbXBvcnQgeyBVc2VyTWVzc2FnZUJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vbG9nL21lc3NhZ2UtYnV0dG9uL21lc3NhZ2UtYnV0dG9uLmNvbXBvbmVudCdcclxuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2ZsZXgtbGF5b3V0JztcclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBCcm93c2VyTW9kdWxlLFxyXG4gICAgTkdYS2VydmlQaXBlc01vZHVsZSxcclxuICAgIE5neEtlcnZpTW9kdWxlLFxyXG4gICAgVmFsdWVzTW9kdWxlLFxyXG4gICAgTmdab3Jyb0FudGRNb2R1bGUsXHJcbiAgICBGbGV4TGF5b3V0TW9kdWxlLFxyXG4gICAgVUlDb21wb25lbnRzTW9kdWxlXHJcbiAgICBcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRGFzaGJvYXJkUGFuZWxDb21wb25lbnQsXHJcbiAgICBXaWRnZXRDb21wb25lbnQsXHJcbiAgICBDb250cm9sbGVyUGFkQ29tcG9uZW50LFxyXG4gICAgQ2FtVmlld2VyQ29tcG9uZW50LFxyXG4gICAgQWN0aW9uQ29tcG9uZW50LFxyXG4gICAgVXNlckxvZ0NvbXBvbmVudCxcclxuICAgIFVzZXJNZXNzYWdlQnV0dG9uQ29tcG9uZW50LFxyXG4gICAgVXNlck1lc3NhZ2VzQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEYXNoYm9hcmRQYW5lbENvbXBvbmVudCxcclxuICAgIENvbnRyb2xsZXJQYWRDb21wb25lbnQsXHJcbiAgICBDYW1WaWV3ZXJDb21wb25lbnQsXHJcbiAgICBVc2VyTG9nQ29tcG9uZW50LFxyXG4gICAgVXNlck1lc3NhZ2VCdXR0b25Db21wb25lbnQsXHJcbiAgICBVc2VyTWVzc2FnZXNDb21wb25lbnRcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBLZXJ2aVpvcnJvTW9kdWxlIHsgfVxyXG4iXSwibmFtZXMiOlsidHNsaWJfMS5fX2V4dGVuZHMiLCJEYXRlVGltZUNvbXBvbmVudCIsIkNvbG9yQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBT0U7S0FBaUI7O2dCQUxsQixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Ozs0QkFKRDtDQVFDOzs7Ozs7O0lDdUM0Q0EsMkNBQTRCO0lBRXZFO1FBQUEsWUFDRSxpQkFBTyxTQUNQO1FBSEssaUJBQVcsR0FBQyxLQUFLLENBQUM7O0tBR3ZCOzs7O0lBRUYsMENBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0I7WUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7S0FDNUI7O2dCQXRERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsUUFBUSxFQUFFLHU4RUF1Q0c7b0JBQ2IsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2lCQUNiOzs7O0lBYUQsOEJBQUM7Q0FBQSxDQVo0Qyw0QkFBNEI7Ozs7Ozs7SUNIcENBLG1DQUFvQjtJQUN2RDtlQUNFLGlCQUFPO0tBQ1A7Ozs7SUFFRixrQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7S0FDdkI7O2dCQWhERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRSw2MkVB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

/***/ }),

/***/ "../../dist/ngx-kervi/fesm5/ngx-kervi.js":
/*!******************************************************************************************!*\
  !*** D:/tim privat/github/kervi/kervi-ui/kervi/ui/web/dist/ngx-kervi/fesm5/ngx-kervi.js ***!
  \******************************************************************************************/
/*! exports provided: ConnectionState, DashboardSizes, KerviTemplateService, KerviDashboardComponent, KerviDashboardPanelComponent, KerviControllerPadComponent, KerviWidgetComponent, KerviNumberComponent, KerviBooleanComponent, KerviActionComponent, KerviCameraComponent, KerviColorComponent, KerviDateTimeComponent, KerviStringComponent, KerviUserLogComponent, KerviDirectoryComponent, AppInjector, NGXKerviService, NgxKerviComponent, NgxKerviModule, NGXKerviPipesModule, ɵb, ɵa */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KerviDirectoryComponent", function() { return KerviDirectoryComponent; });
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
        this.cameraId$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
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
        this.dashboard = (/** @type {?} */ (this.kerviService.getComponent(dashboardId, 'dashboard')));
        this.anonymous = this.kerviService.isAnonymous();
        this.isAppEmpty = this.kerviService.isAppEmpty();
        this.authenticated = this.kerviService.doAuthenticate;
        if (this.dashboard) {
            this.dashboards = this.kerviService.getComponentsByType('dashboard');
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
                    this.cameraId$.next(this.cameraId);
                    this.cameraParameters = this.dashboard.backgroundPanel.components[0].parameters;
                    console.log("db set cam", this.cameraId, this.cameraParameters);
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
    KerviDashboardComponent.propDecorators = {
        cameraId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        cameraParameters: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
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
        this.displayType = 'switch';
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
        if (this.linkParameters.displayType) {
            this.displayType = this.linkParameters.displayType;
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
        this.streamObservers = [];
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
            console.log('setcamid', id);
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
            console.log('setcam', v);
            this.cam = v;
            if (v) {
                try {
                    for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(v.outputs), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var i = _c.value;
                        if (i.id.endsWith('.pan')) {
                            this.pan = (/** @type {?} */ (i));
                        }
                        else if (i.id.endsWith('.tilt')) {
                            this.tilt = (/** @type {?} */ (i));
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
                this.cameraType = v.ui.type;
                if (this.cameraType === 'frame') {
                    if (v.ui.source) {
                        this.cameraSource = this.cam.id;
                    }
                    this.cameraSource = this.cam.id;
                }
                this.updateStreamObservers();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    KerviCameraComponent.prototype.updateStreamObservers = /**
     * @return {?}
     */
    function () {
        var e_2, _a;
        /** @type {?} */
        var streamObservers = [];
        /** @type {?} */
        var controllers = this.kerviService.getComponentsByType('controller');
        try {
            for (var controllers_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(controllers), controllers_1_1 = controllers_1.next(); !controllers_1_1.done; controllers_1_1 = controllers_1.next()) {
                var controller = controllers_1_1.value;
                if (controller.type === 'stream_observer') {
                    if (controller.ui.sourceStream === this.cameraSource) {
                        streamObservers.push(controller);
                    }
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (controllers_1_1 && !controllers_1_1.done && (_a = controllers_1.return)) _a.call(controllers_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this.streamObservers = streamObservers;
        if (this.selectedSource !== this.cameraSource) {
            this.selectedSource = this.cameraSource;
        }
    };
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
        console.log('ngi cam', this.camera.id);
        /** @type {?} */
        var self = this;
        if (!this.linkParameters) {
            this.linkParameters = this.camera.ui;
        }
        if (!this.inline && this.linkParameters.inline) {
            this.inline = true;
        }
        this.kerviService.componentsChanged$.subscribe((/**
         * @return {?}
         */
        function () {
            self.updateStreamObservers();
        }));
        this.updateStreamObservers();
        this.selectedSource = this.cameraSource;
    };
    /**
     * @param {?} source
     * @return {?}
     */
    KerviCameraComponent.prototype.changeSource = /**
     * @param {?} source
     * @return {?}
     */
    function (source) {
        console.log('cs', source);
        this.selectedSource = source;
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
        streamObservers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        selectedSource: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
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
var KerviDirectoryComponent = /** @class */ (function () {
    function KerviDirectoryComponent() {
        this.path = '/';
        this.directory = null;
        this.kerviService = AppInjector.get(NGXKerviService);
    }
    /**
     * @protected
     * @return {?}
     */
    KerviDirectoryComponent.prototype.loadDirectory = /**
     * @protected
     * @return {?}
     */
    function () {
        //this.directory = this.kerviService.GetDirectory(this.path);
    };
    KerviDirectoryComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'kervi-directory',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    KerviDirectoryComponent.ctorParameters = function () { return []; };
    return KerviDirectoryComponent;
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
                        KerviUserLogComponent,
                        KerviDirectoryComponent
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
                        KerviUserLogComponent,
                        KerviActionComponent
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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWtlcnZpLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gta2VydmkvbGliL25neC1rZXJ2aS5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gta2VydmkvbGliL25neC1rZXJ2aS10ZW1wbGF0ZS5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gta2VydmkvbGliL2FwcC1pbmplY3Rvci5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gta2VydmkvbGliL2Rhc2hib2FyZC9rZXJ2aS1kYXNoYm9hcmQuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gta2VydmkvbGliL2Rhc2hib2FyZC9rZXJ2aS1kYXNoYm9hcmQtcGFuZWwuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gta2VydmkvbGliL2Rhc2hib2FyZC9rZXJ2aS1jb250cm9sbGVyLXBhZC5jb21wb25lbnQudHMiLCJuZzovL25neC1rZXJ2aS9saWIvZGFzaGJvYXJkL2tlcnZpLXdpZGdldC5jb21wb25lbnQudHMiLCJuZzovL25neC1rZXJ2aS9saWIvdmFsdWVzL3ZhbHVlLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWtlcnZpL2xpYi92YWx1ZXMva2VydmktbnVtYmVyLXZhbHVlLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWtlcnZpL2xpYi92YWx1ZXMva2VydmktYm9vbGVhbi12YWx1ZS5jb21wb25lbnQudHMiLCJuZzovL25neC1rZXJ2aS9saWIvYWN0aW9ucy9rZXJ2aS1hY3Rpb24uY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gta2VydmkvbGliL2NhbWVyYS9rZXJ2aS1jYW1lcmEuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gta2VydmkvbGliL3ZhbHVlcy9rZXJ2aS1jb2xvci12YWx1ZS5jb21wb25lbnQudHMiLCJuZzovL25neC1rZXJ2aS9saWIvdmFsdWVzL2tlcnZpLWRhdGV0aW1lLXZhbHVlLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWtlcnZpL2xpYi92YWx1ZXMva2Vydmktc3RyaW5nLXZhbHVlLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWtlcnZpL2xpYi91c2VyLWxvZy91c2VyLWxvZy5jb21wb25lbnQudHMiLCJuZzovL25neC1rZXJ2aS9saWIvZmlsZXMva2VydmktZGlyZWN0b3J5LmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWtlcnZpL2xpYi9uZ3gta2VydmkuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gta2VydmkvbGliL25neC1rZXJ2aS5tb2R1bGUudHMiLCJuZzovL25neC1rZXJ2aS9saWIvcGlwZXMvdGV4dFBpcGUudHMiLCJuZzovL25neC1rZXJ2aS9saWIvcGlwZXMvcGlwZXMubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgS2VydmlCYXNlU2VydmljZSB9IGZyb20gXCJrZXJ2aS1qc1wiXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOR1hLZXJ2aVNlcnZpY2UgZXh0ZW5kcyBLZXJ2aUJhc2VTZXJ2aWNle1xyXG5cclxufSIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEtlcnZpVGVtcGxhdGVTZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIHJlbVVuaXQ6bnVtYmVyPTIwO1xyXG4gICAgY29uc3RydWN0b3IoKSBcclxuICB7IFxyXG4gICAgY29uc29sZS5sb2coXCJrZXJ2aSBzZXJ2aWNlIGNvbnN0cnVjdG9yXCIpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJjdGVtcGxhdGVcIik7XHJcbiAgICAgICAgdGhpcy5yZW1Vbml0ID0gcGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuZm9udFNpemUpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBjb252ZXJ0UmVtVG9QaXhlbHMocmVtKSB7ICAgIFxyXG4gICAgICAgIHJldHVybiByZW0gKiB0aGlzLnJlbVVuaXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFNpemVWYWx1ZSh2YWx1ZSl7XHJcbiAgICAgICAgaWYgKHZhbHVlPT1udWxsKVxyXG4gICAgICAgICAgICByZXR1cm4gXCIxMDAlXCJcclxuICAgICAgICBlbHNlIGlmICh2YWx1ZT09PVwiXCIpXHJcbiAgICAgICAgICAgIHJldHVybiBcIjEwMCVcIlxyXG4gICAgICAgIGVsc2UgaWYgKGlzTmFOKHZhbHVlKSl7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgaWYgKHZhbHVlPjApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgKyBcIiVcIjtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiMTAwJVwiO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyAgZ2V0UGl4ZWxzKHZhbHVlLCBjb250YWluZXJTaXplKXtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiZ3BzXCIsIHZhbHVlLCBpc05hTih2YWx1ZSkpO1xyXG4gICAgICAgIGlmIChpc05hTih2YWx1ZSkpe1xyXG4gICAgICAgICAgaWYgKHZhbHVlLmxhc3RJbmRleE9mKFwicHhcIik+LTEpe1xyXG4gICAgICAgICAgICB2YXIgcHggPSBwYXJzZUZsb2F0KHZhbHVlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHB4O1xyXG4gICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5sYXN0SW5kZXhPZihcInJlbVwiKT4tMSl7XHJcbiAgICAgICAgICAgIHZhciByZW0gPSBwYXJzZUZsb2F0KHZhbHVlKTtcclxuICAgICAgICAgICAgdmFyIHB4ID0gdGhpcy5jb252ZXJ0UmVtVG9QaXhlbHMocmVtKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZW14XCIscmVtLCBweCk7XHJcbiAgICAgICAgICAgIHJldHVybiBweDtcclxuICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUubGFzdEluZGV4T2YoXCIlXCIpPi0xKXtcclxuICAgICAgICAgICAgdmFyIHBlcmNlbnRhZ2UgPSBwYXJzZUZsb2F0KHZhbHVlKS8xMDAuMDtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5lclNpemUgKiBwZXJjZW50YWdlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBcclxuICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0U3R5bGVSdWxlVmFsdWUoc3R5bGUsIHNlbGVjdG9yLCBzaGVldCkge1xyXG4gICAgICAgIHZhciBzaGVldHMgPSBzaGVldCE9bnVsbCA/IFtzaGVldF0gOiBkb2N1bWVudC5zdHlsZVNoZWV0cztcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHNoZWV0cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciBzaGVldCA9IHNoZWV0c1tpXTtcclxuICAgICAgICAgICAgaWYoICFzaGVldC5jc3NSdWxlcyApIHsgY29udGludWU7IH1cclxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDAsIGsgPSBzaGVldC5jc3NSdWxlcy5sZW5ndGg7IGogPCBrOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBydWxlID0gc2hlZXQuY3NzUnVsZXNbal07XHJcbiAgICAgICAgICAgICAgICBpZiAocnVsZS5zZWxlY3RvclRleHQgJiYgcnVsZS5zZWxlY3RvclRleHQuc3BsaXQoJywnKS5pbmRleE9mKHNlbGVjdG9yKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcnVsZS5zdHlsZVtzdHlsZV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1ha2VJZCgpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIHRleHQgPSBcIlwiO1xyXG4gICAgICAgIHZhciBwb3NzaWJsZSA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODlcIjtcclxuXHJcbiAgICAgICAgZm9yKCB2YXIgaT0wOyBpIDwgNTsgaSsrIClcclxuICAgICAgICAgICAgdGV4dCArPSBwb3NzaWJsZS5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zc2libGUubGVuZ3RoKSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDb2xvcihjb2xvck5hbWU6c3RyaW5nLGNzc0NsYXNzOnN0cmluZyl7XHJcbiAgICAgICAgdmFyIHN0eWxlVmFsdWU9dGhpcy5nZXRTdHlsZVJ1bGVWYWx1ZShjb2xvck5hbWUsY3NzQ2xhc3MsbnVsbCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInN2XCIsIGNzc0NsYXNzLHN0eWxlVmFsdWUpO1xyXG4gICAgICAgIHJldHVybiBzdHlsZVZhbHVlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuZXhwb3J0IGxldCBBcHBJbmplY3RvcjogSW5qZWN0b3I7XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRBcHBJbmplY3RvcihpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuICAgIGlmIChBcHBJbmplY3Rvcikge1xyXG4gICAgICAgIC8vIFNob3VsZCBub3QgaGFwcGVuXHJcbiAgICAgICAgY29uc29sZS5lcnJvcignUHJvZ3JhbW1pbmcgZXJyb3I6IEFwcEluamVjdG9yIHdhcyBhbHJlYWR5IHNldCcpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgQXBwSW5qZWN0b3IgPSBpbmplY3RvcjtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGFzaGJvYXJkLCBEYXNoYm9hcmRTaXplcywgTnVtYmVyVmFsdWUgfSBmcm9tICdrZXJ2aS1qcyc7XHJcbmltcG9ydCB7IE5HWEtlcnZpU2VydmljZSB9IGZyb20gJy4uL25neC1rZXJ2aS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBwSW5qZWN0b3IgfSBmcm9tICcuLi9hcHAtaW5qZWN0b3Iuc2VydmljZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2tlcnZpLWRhc2hib2FyZCcsXHJcbiAgdGVtcGxhdGU6ICcnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBLZXJ2aURhc2hib2FyZENvbXBvbmVudCB7XHJcbiAgcHJvdGVjdGVkIGRhc2hib2FyZElkOiBzdHJpbmcgPSBudWxsO1xyXG4gIHByb3RlY3RlZCBkYXNoYm9hcmQ6IERhc2hib2FyZCA9IG51bGw7XHJcbiAgcHJvdGVjdGVkIGtlcnZpU2VydmljZTogTkdYS2VydmlTZXJ2aWNlO1xyXG4gIHByb3RlY3RlZCBkYXNoYm9hcmRzOiBEYXNoYm9hcmRbXSA9IG51bGw7XHJcbiAgcHJvdGVjdGVkIGRhc2hib2FyZFNpemVzOiBEYXNoYm9hcmRTaXplcyA9IG51bGw7XHJcbiAgcHJvdGVjdGVkIGlzQXBwRW1wdHkgPSB0cnVlO1xyXG4gIHByb3RlY3RlZCBzaG93TWVudSA9IGZhbHNlO1xyXG4gIHByb3RlY3RlZCBkYXNoYm9hcmRQYW5lbHNIaWRkZW4gPSBmYWxzZTtcclxuICBwcm90ZWN0ZWQgc2hvd1BhbmVsQ29udHJvbGxlciA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHByb3RlY3RlZCBjYW1lcmFJZDogc3RyaW5nID0gbnVsbDtcclxuICBASW5wdXQoKSBwcm90ZWN0ZWQgY2FtZXJhUGFyYW1ldGVyczogYW55ID0gbnVsbDtcclxuICBwcm90ZWN0ZWQgY2FtZXJhSWQkOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPihudWxsKTtcclxuICBwdWJsaWMgYXV0aGVudGljYXRlZDogQm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgYW5vbnltb3VzOiBCb29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgcHJvdGVjdGVkIHNob3dMZWZ0UGFkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJvdGVjdGVkIGxlZnRQYWRYVmFsdWU6IE51bWJlclZhbHVlID0gbnVsbDtcclxuICBwcm90ZWN0ZWQgbGVmdFBhZFlWYWx1ZTogTnVtYmVyVmFsdWUgPSBudWxsO1xyXG4gIHByb3RlY3RlZCBhdXRvQ2VudGVyTGVmdFBhZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBwcm90ZWN0ZWQgc2hvd1JpZ2h0UGFkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJvdGVjdGVkIHJpZ2h0UGFkWFZhbHVlOiBOdW1iZXJWYWx1ZSA9IG51bGw7XHJcbiAgcHJvdGVjdGVkIHJpZ2h0UGFkWVZhbHVlOiBOdW1iZXJWYWx1ZSA9IG51bGw7XHJcbiAgcHJvdGVjdGVkIGF1dG9DZW50ZXJSaWdodFBhZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBwcml2YXRlIGluRnVsbFNjcmVlbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5rZXJ2aVNlcnZpY2UgPSBBcHBJbmplY3Rvci5nZXQoTkdYS2VydmlTZXJ2aWNlKTtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHRoaXMua2VydmlTZXJ2aWNlLmNvbXBvbmVudHNDaGFuZ2VkJC5zdWJzY3JpYmUoZnVuY3Rpb24oKSB7XHJcbiAgICAgIHNlbGYubG9hZERhc2hib2FyZChzZWxmLmRhc2hib2FyZElkKTtcclxuICAgIH0pO1xyXG4gICB9XHJcblxyXG4gIHByb3RlY3RlZCBsb2dvZmYoZXZlbnQpe1xyXG4gICAgdGhpcy5rZXJ2aVNlcnZpY2UubG9nb2ZmKCk7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBsb2FkRGFzaGJvYXJkKGRhc2hib2FyZElkOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuZGFzaGJvYXJkSWQgPSBkYXNoYm9hcmRJZDtcclxuICAgIHRoaXMuZGFzaGJvYXJkID0gdGhpcy5rZXJ2aVNlcnZpY2UuZ2V0Q29tcG9uZW50KGRhc2hib2FyZElkLCAnZGFzaGJvYXJkJykgYXMgRGFzaGJvYXJkO1xyXG4gICAgdGhpcy5hbm9ueW1vdXMgPSB0aGlzLmtlcnZpU2VydmljZS5pc0Fub255bW91cygpO1xyXG4gICAgdGhpcy5pc0FwcEVtcHR5ID0gdGhpcy5rZXJ2aVNlcnZpY2UuaXNBcHBFbXB0eSgpO1xyXG4gICAgdGhpcy5hdXRoZW50aWNhdGVkID0gdGhpcy5rZXJ2aVNlcnZpY2UuZG9BdXRoZW50aWNhdGU7XHJcbiAgICBpZiAodGhpcy5kYXNoYm9hcmQpe1xyXG4gICAgICB0aGlzLmRhc2hib2FyZHMgPSB0aGlzLmtlcnZpU2VydmljZS5nZXRDb21wb25lbnRzQnlUeXBlKCdkYXNoYm9hcmQnKTtcclxuICAgICAgdGhpcy5zaG93TWVudSA9ICh0aGlzLmRhc2hib2FyZHMubGVuZ3RoID4gMSB8fCB0aGlzLmtlcnZpU2VydmljZS5kb0F1dGhlbnRpY2F0ZSk7XHJcbiAgICAgIHRoaXMuc2hvd1BhbmVsQ29udHJvbGxlcj1mYWxzZTtcclxuICAgICAgdGhpcy5jYW1lcmFJZCA9IG51bGw7XHJcbiAgICAgIHRoaXMuY2FtZXJhUGFyYW1ldGVycyA9IG51bGw7XHJcbiAgICAgIHRoaXMuc2hvd0xlZnRQYWQgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zaG93UmlnaHRQYWQgPSBmYWxzZTtcclxuICAgICAgdGhpcy5kYXNoYm9hcmRQYW5lbHNIaWRkZW49ZmFsc2U7XHJcbiAgICAgIGlmICh0aGlzLmRhc2hib2FyZC5iYWNrZ3JvdW5kUGFuZWwpe1xyXG4gICAgICAgIGlmICh0aGlzLmRhc2hib2FyZC5iYWNrZ3JvdW5kUGFuZWwuY29tcG9uZW50cy5sZW5ndGggPiAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRoaXMuZGFzaGJvYXJkUGFuZWxzSGlkZGVuPXRydWU7XHJcbiAgICAgICAgICB0aGlzLnNob3dQYW5lbENvbnRyb2xsZXI9dHJ1ZTtcclxuICAgICAgICAgIHRoaXMuY2FtZXJhSWQ9dGhpcy5kYXNoYm9hcmQuYmFja2dyb3VuZFBhbmVsLmNvbXBvbmVudHNbMF0uY29tcG9uZW50LmlkO1xyXG4gICAgICAgICAgdGhpcy5jYW1lcmFJZCQubmV4dCh0aGlzLmNhbWVyYUlkKTtcclxuICAgICAgICAgIHRoaXMuY2FtZXJhUGFyYW1ldGVycz10aGlzLmRhc2hib2FyZC5iYWNrZ3JvdW5kUGFuZWwuY29tcG9uZW50c1swXS5wYXJhbWV0ZXJzO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJkYiBzZXQgY2FtXCIsIHRoaXMuY2FtZXJhSWQsIHRoaXMuY2FtZXJhUGFyYW1ldGVycyk7XHJcbiAgICAgICAgfSBcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5kYXNoYm9hcmQuTGVmdFBhZFhQYW5lbCAmJiB0aGlzLmRhc2hib2FyZC5MZWZ0UGFkWFBhbmVsLmNvbXBvbmVudHMubGVuZ3RoIHx8IHRoaXMuZGFzaGJvYXJkLkxlZnRQYWRZUGFuZWwgJiYgdGhpcy5kYXNoYm9hcmQuTGVmdFBhZFlQYW5lbC5jb21wb25lbnRzLmxlbmd0aCl7XHJcbiAgICAgICAgdGhpcy5zaG93TGVmdFBhZCA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMuZGFzaGJvYXJkLkxlZnRQYWRYUGFuZWwuY29tcG9uZW50cy5sZW5ndGgpe1xyXG4gICAgICAgICAgdGhpcy5sZWZ0UGFkWFZhbHVlPXRoaXMuZGFzaGJvYXJkLkxlZnRQYWRYUGFuZWwuY29tcG9uZW50c1swXS5jb21wb25lbnQgYXMgTnVtYmVyVmFsdWU7XHJcbiAgICAgICAgICBpZiAodGhpcy5kYXNoYm9hcmQuTGVmdFBhZFhQYW5lbC5jb21wb25lbnRzWzBdLnBhcmFtZXRlcnMucGFkQXV0b0NlbnRlcilcclxuICAgICAgICAgICAgdGhpcy5hdXRvQ2VudGVyTGVmdFBhZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmRhc2hib2FyZC5MZWZ0UGFkWVBhbmVsLmNvbXBvbmVudHMubGVuZ3RoKXtcclxuICAgICAgICAgIHRoaXMubGVmdFBhZFlWYWx1ZT10aGlzLmRhc2hib2FyZC5MZWZ0UGFkWVBhbmVsLmNvbXBvbmVudHNbMF0uY29tcG9uZW50IGFzIE51bWJlclZhbHVlO1xyXG4gICAgICAgICAgaWYgKHRoaXMuZGFzaGJvYXJkLkxlZnRQYWRYUGFuZWwuY29tcG9uZW50c1swXS5wYXJhbWV0ZXJzLnBhZEF1dG9DZW50ZXIpXHJcbiAgICAgICAgICAgIHRoaXMuYXV0b0NlbnRlckxlZnRQYWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuZGFzaGJvYXJkLlJpZ2h0UGFkWFBhbmVsICYmIHRoaXMuZGFzaGJvYXJkLlJpZ2h0UGFkWFBhbmVsLmNvbXBvbmVudHMubGVuZ3RoIHx8IHRoaXMuZGFzaGJvYXJkLlJpZ2h0UGFkWVBhbmVsICYmIHRoaXMuZGFzaGJvYXJkLlJpZ2h0UGFkWVBhbmVsLmNvbXBvbmVudHMubGVuZ3RoKXtcclxuICAgICAgICB0aGlzLnNob3dSaWdodFBhZCA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMuZGFzaGJvYXJkLlJpZ2h0UGFkWFBhbmVsLmNvbXBvbmVudHMubGVuZ3RoKXtcclxuICAgICAgICAgIHRoaXMucmlnaHRQYWRYVmFsdWU9dGhpcy5kYXNoYm9hcmQuUmlnaHRQYWRYUGFuZWwuY29tcG9uZW50c1swXS5jb21wb25lbnQgYXMgTnVtYmVyVmFsdWU7XHJcbiAgICAgICAgICBpZiAodGhpcy5kYXNoYm9hcmQuTGVmdFBhZFhQYW5lbC5jb21wb25lbnRzWzBdLnBhcmFtZXRlcnMucGFkQXV0b0NlbnRlcilcclxuICAgICAgICAgICAgdGhpcy5hdXRvQ2VudGVyUmlnaHRQYWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5kYXNoYm9hcmQuUmlnaHRQYWRZUGFuZWwuY29tcG9uZW50cy5sZW5ndGgpe1xyXG4gICAgICAgICAgdGhpcy5yaWdodFBhZFlWYWx1ZT10aGlzLmRhc2hib2FyZC5SaWdodFBhZFlQYW5lbC5jb21wb25lbnRzWzBdLmNvbXBvbmVudCBhcyBOdW1iZXJWYWx1ZTtcclxuICAgICAgICAgIGlmICh0aGlzLmRhc2hib2FyZC5SaWdodFBhZFhQYW5lbC5jb21wb25lbnRzWzBdLnBhcmFtZXRlcnMucGFkQXV0b0NlbnRlcilcclxuICAgICAgICAgICAgdGhpcy5hdXRvQ2VudGVyUmlnaHRQYWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhcImxvYWQgZGJcIiwgZGFzaGJvYXJkSWQsIHRoaXMuZGFzaGJvYXJkLCB0aGlzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvZ2dsZUZ1bGxTY3JlZW4oKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImZzXCIsIHRoaXMuaW5GdWxsU2NyZWVuKTtcclxuICAgIHZhciBkb2M6YW55O1xyXG4gICAgZG9jID0gZG9jdW1lbnQ7XHJcbiAgICBpZiAoKGRvYy5mdWxsU2NyZWVuRWxlbWVudCAmJiBkb2MuZnVsbFNjcmVlbkVsZW1lbnQgIT09IG51bGwpKSAgICAgXHJcbiAgICAgLyooIWRvYy5tb3pGdWxsU2NyZWVuICYmICFkb2N1bWVudC53ZWJraXRJc0Z1bGxTY3JlZW4pKSovIHtcclxuICAgICAgIHRoaXMuaW5GdWxsU2NyZWVuID0gdHJ1ZTtcclxuICAgICAgaWYgKGRvYy5kb2N1bWVudEVsZW1lbnQucmVxdWVzdEZ1bGxTY3JlZW4pIHsgIFxyXG4gICAgICAgIGRvYy5kb2N1bWVudEVsZW1lbnQucmVxdWVzdEZ1bGxTY3JlZW4oKTsgIFxyXG4gICAgICB9IGVsc2UgaWYgKGRvYy5kb2N1bWVudEVsZW1lbnQubW96UmVxdWVzdEZ1bGxTY3JlZW4pIHsgIFxyXG4gICAgICAgIGRvYy5kb2N1bWVudEVsZW1lbnQubW96UmVxdWVzdEZ1bGxTY3JlZW4oKTsgIFxyXG4gICAgICB9Ly8gfSBlbHNlIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQud2Via2l0UmVxdWVzdEZ1bGxTY3JlZW4pIHsgIFxyXG4gICAgICAvLyAgIGRvYy5kb2N1bWVudEVsZW1lbnQud2Via2l0UmVxdWVzdEZ1bGxTY3JlZW4oKTsgIFxyXG4gICAgICAvLyB9ICBcclxuICAgIH0gZWxzZSB7ICBcclxuICAgICAgdGhpcy5pbkZ1bGxTY3JlZW49ZmFsc2U7XHJcbiAgICAgIGlmIChkb2MuY2FuY2VsRnVsbFNjcmVlbikgeyAgXHJcbiAgICAgICAgZG9jLmNhbmNlbEZ1bGxTY3JlZW4oKTsgIFxyXG4gICAgICB9IGVsc2UgaWYgKGRvYy5tb3pDYW5jZWxGdWxsU2NyZWVuKSB7ICBcclxuICAgICAgICBkb2MubW96Q2FuY2VsRnVsbFNjcmVlbigpOyAgXHJcbiAgICAgIH0vLyB9IGVsc2UgaWYgKGRvY3VtZW50LndlYmtpdENhbmNlbEZ1bGxTY3JlZW4pIHsgIFxyXG4gICAgICAvLyAgIGRvYy53ZWJraXRDYW5jZWxGdWxsU2NyZWVuKCk7ICBcclxuICAgICAgLy8gfSAgXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGFzaGJvYXJkU2l6ZXMsIERhc2hib2FyZFBhbmVsIH0gZnJvbSAna2VydmktanMnO1xyXG5pbXBvcnQgeyBOR1hLZXJ2aVNlcnZpY2UgfSBmcm9tICcuLi9uZ3gta2Vydmkuc2VydmljZSc7XHJcbmltcG9ydCB7IEtlcnZpVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vbmd4LWtlcnZpLXRlbXBsYXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBcHBJbmplY3RvciB9IGZyb20gJy4uL2FwcC1pbmplY3Rvci5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAna2VydmktZGFzaGJvYXJkLXBhbmVsLWJhc2UnLFxyXG4gIHRlbXBsYXRlOiAnJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgS2VydmlEYXNoYm9hcmRQYW5lbENvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZGFzaGJvYXJkU2l6ZXM6IERhc2hib2FyZFNpemVzO1xyXG4gIEBJbnB1dCgpIHBhbmVsOkRhc2hib2FyZFBhbmVsPW51bGw7XHJcbiAgQElucHV0KCkgaW5saW5lOmJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBpbkdyb3VwOmJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBib2R5T25seTpib29sZWFuID0gZmFsc2U7XHJcbiAgXHJcbiAgXHJcbiAgcHVibGljIHdpZHRoOnN0cmluZyA9IFwiXCI7XHJcbiAgcHVibGljIHNob3dIZWFkZXI6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyBleHBhbmRlZDpib29sZWFuID0gZmFsc2U7XHJcbiAgcHVibGljIHRpdGxlOnN0cmluZyA9IG51bGw7XHJcbiAgcHVibGljIGJvZHlDb21wb25lbnRzOmFueVtdPVtdO1xyXG4gIHB1YmxpYyBoZWFkZXJDb21wb25lbnRzOiBhbnlbXSA9IFtdO1xyXG4gIHB1YmxpYyBmb290ZXJDb21wb25lbnRzOiBhbnlbXSA9IFtdO1xyXG4gIC8vbWVzc2FnZXM6IERhc2hib2FyZE1lc3NhZ2VNb2RlbFtdID0gW107XHJcbiAgXHJcbiAgLy9wYW5lbENvbXBvbmVudHM6SUNvbXBvbmVudFtdID0gW11cclxuICBwcm90ZWN0ZWQgdGVtcGxhdGVTZXJ2aWNlOiBLZXJ2aVRlbXBsYXRlU2VydmljZSA9IG51bGw7XHJcbiAgcHJvdGVjdGVkIGtlcnZpU2VydmljZTpOR1hLZXJ2aVNlcnZpY2UgPSBudWxsO1xyXG4gIGNvbnN0cnVjdG9yICgpe1xyXG4gICAgdGhpcy50ZW1wbGF0ZVNlcnZpY2UgPSBBcHBJbmplY3Rvci5nZXQoS2VydmlUZW1wbGF0ZVNlcnZpY2UpOyAgICBcclxuICAgIHRoaXMua2VydmlTZXJ2aWNlID0gQXBwSW5qZWN0b3IuZ2V0KE5HWEtlcnZpU2VydmljZSk7ICBcclxuICB9XHJcblxyXG4gICAgY2FsY1dpZHRoKHBhbmVsOkRhc2hib2FyZFBhbmVsLCBpbkdyb3VwKXtcclxuICAgICAgICBpZiAocGFuZWwudHlwZT09XCJncm91cFwiKXtcclxuICAgICAgICAgICAgaWYgKHBhbmVsLnBhcmFtZXRlcnMud2lkdGg9PW51bGwgfHwgcGFuZWwucGFyYW1ldGVycy53aWR0aD09XCIwXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCIxMDAlXCJcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGVtcGxhdGVTZXJ2aWNlLmdldFNpemVWYWx1ZShwYW5lbC5wYXJhbWV0ZXJzLndpZHRoKTtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIGluR3JvdXAgPyBcIlwiIDogdGhpcy50ZW1wbGF0ZVNlcnZpY2UuZ2V0U2l6ZVZhbHVlKHBhbmVsLnBhcmFtZXRlcnMud2lkdGgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dQYW5lbEhlYWRlcihwYW5lbDpEYXNoYm9hcmRQYW5lbCl7XHJcbiAgICAgICAgdmFyIGhhc0hlYWRlckNvbXBvbmVudHMgPSBmYWxzZVxyXG4gICAgICAgIGZvciggbGV0IGNvbXBvbmVudCBvZiB0aGlzLnBhbmVsLmNvbXBvbmVudHMpe1xyXG4gICAgICAgICAgICBpZiAoY29tcG9uZW50LnBhcmFtZXRlcnMubGlua1RvSGVhZGVyKVxyXG4gICAgICAgICAgICAgICAgaGFzSGVhZGVyQ29tcG9uZW50cyA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIChwYW5lbC5wYXJhbWV0ZXJzLnRpdGxlICE9IG51bGwgJiYgcGFuZWwucGFyYW1ldGVycy50aXRsZS5sZW5ndGg+MCkgfHwgaGFzSGVhZGVyQ29tcG9uZW50c1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0UGFuZWwoKSB7XHJcbiAgICAgICAgdmFyIHNlbGY9dGhpcztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGhpcy5wYW5lbC5wYXJhbWV0ZXJzLnRpdGxlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZvciggbGV0IGNvbXBvbmVudCBvZiB0aGlzLnBhbmVsLmNvbXBvbmVudHMpe1xyXG4gICAgICAgICAgICBpZiAoY29tcG9uZW50LnBhcmFtZXRlcnMubGlua1RvSGVhZGVyKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5oZWFkZXJDb21wb25lbnRzLnB1c2goY29tcG9uZW50KVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvZHlDb21wb25lbnRzLnB1c2goY29tcG9uZW50KVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnNob3dIZWFkZXIgPSAodGhpcy5wYW5lbC5wYXJhbWV0ZXJzLnRpdGxlICE9IG51bGwgJiYgdGhpcy5wYW5lbC5wYXJhbWV0ZXJzLnRpdGxlLmxlbmd0aD4wKSB8fCAodGhpcy5oZWFkZXJDb21wb25lbnRzLmxlbmd0aCA+IDApXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGlmICh0aGlzLnBhbmVsLnR5cGU9PVwiZ3JvdXBcIil7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBhbmVsLnBhcmFtZXRlcnMud2lkdGg9PW51bGwgfHwgdGhpcy5wYW5lbC5wYXJhbWV0ZXJzLndpZHRoPT1cIjBcIiB8fCB0aGlzLnBhbmVsLnBhcmFtZXRlcnMud2lkdGg9PVwiXCIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLndpZHRoID0gXCIxMDAlXCJcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMudGVtcGxhdGVTZXJ2aWNlLmdldFNpemVWYWx1ZSh0aGlzLnBhbmVsLnBhcmFtZXRlcnMud2lkdGgpO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICAvL3RoaXMud2lkdGggPSB0aGlzLmluR3JvdXAgPyBcIjEwMCVcIiA6IHRoaXMudGVtcGxhdGVTZXJ2aWNlLmdldFNpemVWYWx1ZSh0aGlzLnBhbmVsLnBhcmFtZXRlcnMud2lkdGgpO1xyXG4gICAgICAgICAgICB0aGlzLndpZHRoID0gdGhpcy50ZW1wbGF0ZVNlcnZpY2UuZ2V0U2l6ZVZhbHVlKHRoaXMucGFuZWwucGFyYW1ldGVycy53aWR0aCk7XHJcbiAgICB9XHJcbiAgfSIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRTaXplcyB9IGZyb20gJ2tlcnZpLWpzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAna2VydmktY29udHJvbGxlci1wYWQtYmFzZScsXHJcbiAgdGVtcGxhdGU6ICcnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBLZXJ2aUNvbnRyb2xsZXJQYWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGRhc2hib2FyZFNpemVzOiBEYXNoYm9hcmRTaXplcztcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgVGltIFdlbnR6bGF1XHJcbi8vIExpY2Vuc2VkIHVuZGVyIE1JVFxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJQ29tcG9uZW50LCBEYXNoYm9hcmRQYW5lbCwgRGFzaGJvYXJkU2l6ZXMsIENvbnRyb2xsZXIgfSBmcm9tICdrZXJ2aS1qcyc7XHJcbmltcG9ydCB7IE5HWEtlcnZpU2VydmljZSB9IGZyb20gJy4uL25neC1rZXJ2aS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBwSW5qZWN0b3IgfSBmcm9tICcuLi9hcHAtaW5qZWN0b3Iuc2VydmljZSc7XHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAna2Vydmktd2lkZ2V0LWJhc2UnLFxyXG5cdHRlbXBsYXRlOiAnJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgS2VydmlXaWRnZXRDb21wb25lbnQgICB7XHJcblx0QElucHV0KCkgc2V0IGNvbXBvbmVudElkKHY6c3RyaW5nKXtcclxuXHRcdHRoaXMuY29tcG9uZW50ID0gdGhpcy5rZXJ2aVNlcnZpY2UuZ2V0Q29tcG9uZW50KHRoaXMuY29tcG9uZW50SWQpO1xyXG5cdH1cclxuXHRASW5wdXQoKSBjb21wb25lbnQ6SUNvbXBvbmVudCA9IG51bGw7XHJcblx0QElucHV0KCkgZGFzaGJvYXJkUGFuZWw6IERhc2hib2FyZFBhbmVsO1xyXG5cdEBJbnB1dCgpIGxpbmtQYXJhbWV0ZXJzOmFueTtcclxuXHRASW5wdXQoKSBkYXNoYm9hcmRTaXplczpEYXNoYm9hcmRTaXplcyA9IG5ldyBEYXNoYm9hcmRTaXplcygpO1xyXG4gICAgQElucHV0KCkgaW5saW5lOmJvb2xlYW47XHJcblx0cHVibGljIHdpZGdldFR5cGU6c3RyaW5nPVwidmFsdWVcIjtcclxuXHRcclxuXHRcclxuXHRwcml2YXRlIGtlcnZpU2VydmljZTogTkdYS2VydmlTZXJ2aWNlO1xyXG5cdHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZjtcclxuXHRjb25zdHJ1Y3RvcigpIHsgXHJcblx0XHQvL2NvbnNvbGUubG9nKFwiY25pb1wiLHRoaXMpO1xyXG5cdFx0dGhpcy5rZXJ2aVNlcnZpY2UgPSBBcHBJbmplY3Rvci5nZXQoTkdYS2VydmlTZXJ2aWNlKTsgIFxyXG5cdH1cclxuXHJcblx0bmdPbkluaXRXaWRnZXQoKSB7XHJcblx0XHRcdFxyXG5cdFx0aWYgKCF0aGlzLmxpbmtQYXJhbWV0ZXJzKVxyXG4gICAgICAgICAgICAgIHRoaXMubGlua1BhcmFtZXRlcnMgPSB0aGlzLmNvbXBvbmVudC51aTtcclxuICAgIFxyXG4gICAgICAgIGlmICghdGhpcy5pbmxpbmUgJiYgdGhpcy5saW5rUGFyYW1ldGVycy5pbmxpbmUpe1xyXG4gICAgICAgICAgICB0aGlzLmlubGluZSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHQvL2NvbnNvbGUubG9nKFwid2lkZ2V0XCIsIHRoaXMuY29tcG9uZW50LCB0aGlzLmxpbmtQYXJhbWV0ZXJzKTtcclxuXHRcdGlmICh0aGlzLmNvbXBvbmVudC5jb21wb25lbnRUeXBlID09IFwiY29udHJvbGxlclwiKXtcclxuXHRcdFx0dmFyIGNvbnRyb2xsZXIgPSB0aGlzLmNvbXBvbmVudCBhcyBDb250cm9sbGVyO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIndpZGdldCBjdHJsXCIsIGNvbnRyb2xsZXIpO1xyXG5cdFx0XHRpZiAoY29udHJvbGxlci50eXBlID09IFwiY2FtZXJhXCIpXHJcblx0XHRcdFx0dGhpcy53aWRnZXRUeXBlID0gXCJjYW1lcmFcIlxyXG5cdFx0XHRcdFxyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmxpbmtQYXJhbWV0ZXJzLnR5cGUpe1xyXG5cdFx0XHRpZiAodGhpcy5saW5rUGFyYW1ldGVycy50eXBlLmluZGV4T2YoXCJnYXVnZVwiKSA+IC0xICl7XHJcblx0XHRcdFx0dGhpcy53aWRnZXRUeXBlID0gXCJnYXVnZVwiO1xyXG5cclxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLmxpbmtQYXJhbWV0ZXJzLnR5cGU9PVwiY2hhcnRcIil7XHJcblx0XHRcdFx0dGhpcy53aWRnZXRUeXBlPVwiY2hhcnRcIlxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgVGltIFdlbnR6bGF1XHJcbi8vIExpY2Vuc2VkIHVuZGVyIE1JVFxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEtlcnZpVmFsdWUsIERhc2hib2FyZFBhbmVsLCBEYXNoYm9hcmRTaXplcyB9IGZyb20gJ2tlcnZpLWpzJztcclxuaW1wb3J0IHsgTkdYS2VydmlTZXJ2aWNlIH0gZnJvbSAnLi4vbmd4LWtlcnZpLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBcHBJbmplY3RvciB9IGZyb20gJy4uL2FwcC1pbmplY3Rvci5zZXJ2aWNlJztcclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdrZXJ2aS12YWx1ZS1iYXNlJyxcclxuXHR0ZW1wbGF0ZTogJydcclxufSlcclxuZXhwb3J0IGNsYXNzIEtlcnZpVmFsdWVDb21wb25lbnQ8VCBleHRlbmRzIEtlcnZpVmFsdWU+ICAge1xyXG5cdEBJbnB1dCgpIHNldCB2YWx1ZUlkKHY6c3RyaW5nKXtcclxuXHRcdHRoaXMudmFsdWUgPSB0aGlzLmtlcnZpU2VydmljZS5nZXRDb21wb25lbnQodGhpcy52YWx1ZUlkKSBhcyBUO1xyXG5cdH1cclxuXHRASW5wdXQoKSB2YWx1ZTpUID0gbnVsbDtcclxuXHRcclxuXHRASW5wdXQoKSBsaW5rUGFyYW1ldGVyczphbnk7XHJcblx0QElucHV0KCkgZGFzaGJvYXJkU2l6ZXM6RGFzaGJvYXJkU2l6ZXMgPSBuZXcgRGFzaGJvYXJkU2l6ZXMoKTtcclxuXHRASW5wdXQoKSBpbmxpbmU6Ym9vbGVhbjtcclxuXHRwcm90ZWN0ZWQga2VydmlTZXJ2aWNlOiBOR1hLZXJ2aVNlcnZpY2U7XHJcblx0Y29uc3RydWN0b3IoKSB7IFxyXG5cdFx0dGhpcy5rZXJ2aVNlcnZpY2UgPSBBcHBJbmplY3Rvci5nZXQoTkdYS2VydmlTZXJ2aWNlKTsgIFxyXG5cdH1cclxuXHJcblx0bmdPbkluaXRWYWx1ZSgpIHtcclxuXHRcdGlmICghdGhpcy5saW5rUGFyYW1ldGVycylcclxuICAgICAgXHRcdHRoaXMubGlua1BhcmFtZXRlcnMgPSB0aGlzLnZhbHVlLnVpO1xyXG5cdH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIFRpbSBXZW50emxhdVxyXG4vLyBMaWNlbnNlZCB1bmRlciBNSVRcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOdW1iZXJWYWx1ZSB9IGZyb20gJ2tlcnZpLWpzJztcclxuaW1wb3J0IHsgS2VydmlWYWx1ZUNvbXBvbmVudCB9IGZyb20gJy4vdmFsdWUuY29tcG9uZW50J1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdrZXJ2aS12YWx1ZS1udW1iZXItYmFzZScsXHJcblx0dGVtcGxhdGU6ICcnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBLZXJ2aU51bWJlckNvbXBvbmVudCBleHRlbmRzIEtlcnZpVmFsdWVDb21wb25lbnQ8TnVtYmVyVmFsdWU+IHtcclxuXHRwdWJsaWMgbnVtYmVyRm9ybWF0ID0gXCIxLjItMlwiO1xyXG5cdHB1YmxpYyBkaXNwbGF5VmFsdWU6bnVtYmVyID0gMDtcclxuXHRwdWJsaWMgZGlzcGxheVVuaXQ6c3RyaW5nID0gXCJcIjtcclxuXHRwdWJsaWMgZGlzcGxheVR5cGU6c3RyaW5nPVwiXCI7XHJcblx0cHVibGljIGN1cnJlbnRJY29uOnN0cmluZz1udWxsO1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKCl7IFxyXG5cdFx0c3VwZXIoKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXRLZXJ2aVZhbHVlKHZhbHVlKXtcclxuXHRcdHRoaXMudmFsdWUuc2V0KHZhbHVlKTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0TnVtYmVyKCkge1xyXG5cdFx0dGhpcy5uZ09uSW5pdFZhbHVlKCk7XHJcblx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHRcclxuXHRcdHRoaXMubnVtYmVyRm9ybWF0ID0gdGhpcy5saW5rUGFyYW1ldGVycy5taW5JbnRlZ2VyRGlnaXRzICsgXCIuXCIgKyB0aGlzLmxpbmtQYXJhbWV0ZXJzLm1pbkZyYWN0aW9uRGlnaXRzICsgXCItXCIgKyB0aGlzLmxpbmtQYXJhbWV0ZXJzLm1heEZyYWN0aW9uRGlnaXRzXHJcblx0XHRpZiAoIXRoaXMubGlua1BhcmFtZXRlcnMudmFsdWVJY29uKVxyXG5cdFx0XHR0aGlzLmN1cnJlbnRJY29uID0gbnVsbDtcclxuXHRcdGVsc2UgaWYgKHR5cGVvZih0aGlzLmxpbmtQYXJhbWV0ZXJzLnZhbHVlSWNvbikgPT0gXCJzdHJpbmdcIiApXHJcblx0XHRcdHRoaXMuY3VycmVudEljb24gPSB0aGlzLmxpbmtQYXJhbWV0ZXJzLnZhbHVlSWNvbjtcclxuXHRcdGVsc2Uge1xyXG5cdFx0XHR0aGlzLnZhbHVlLnZhbHVlJC5zdWJzY3JpYmUoZnVuY3Rpb24odil7XHJcblx0XHRcdFx0Zm9yKGxldCBpY29uU2VjdGlvbiBvZiBzZWxmLmxpbmtQYXJhbWV0ZXJzLnZhbHVlSWNvbil7XHJcblx0XHRcdFx0XHRpZiAodiA+PSBpY29uU2VjdGlvbi5yYW5nZVswXSAmJiB2IDw9IGljb25TZWN0aW9uLnJhbmdlWzFdKXtcclxuXHRcdFx0XHRcdFx0c2VsZi5jdXJyZW50SWNvbiA9IGljb25TZWN0aW9uLmljb247XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdH1cdFx0XHJcblxyXG5cdFx0aWYgKCF0aGlzLmlubGluZSAmJiB0aGlzLmxpbmtQYXJhbWV0ZXJzLmlubGluZSl7XHJcblx0XHRcdHRoaXMuaW5saW5lID0gdHJ1ZTtcclxuXHRcdH1lbHNlIGlmICghdGhpcy5pbmxpbmUgJiYgdGhpcy5saW5rUGFyYW1ldGVycy5zaXplID4gMClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5pbmxpbmUgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIFRpbSBXZW50emxhdVxyXG4vLyBMaWNlbnNlZCB1bmRlciBNSVRcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCb29sZWFuVmFsdWUgfSBmcm9tICdrZXJ2aS1qcyc7XHJcbmltcG9ydCB7IEtlcnZpVmFsdWVDb21wb25lbnQgfSBmcm9tICcuL3ZhbHVlLmNvbXBvbmVudCdcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAna2VydmktdmFsdWUtYm9vbGVhbi1iYXNlJyxcclxuXHR0ZW1wbGF0ZTogJydcclxufSlcclxuZXhwb3J0IGNsYXNzIEtlcnZpQm9vbGVhbkNvbXBvbmVudCBleHRlbmRzIEtlcnZpVmFsdWVDb21wb25lbnQ8Qm9vbGVhblZhbHVlPiB7XHJcblx0cHVibGljIGRpc3BsYXlUeXBlOnN0cmluZz1cInN3aXRjaFwiO1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKCl7IFxyXG5cdFx0c3VwZXIoKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXRLZXJ2aVZhbHVlKHZhbHVlKXtcclxuXHRcdHRoaXMudmFsdWUuc2V0KHZhbHVlKTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0Qm9vbGVhbigpIHtcclxuXHRcdHRoaXMubmdPbkluaXRWYWx1ZSgpO1xyXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0XHJcblx0XHRpZiAodGhpcy5saW5rUGFyYW1ldGVycy50eXBlKXtcclxuXHRcdFx0dGhpcy5kaXNwbGF5VHlwZSA9IHRoaXMubGlua1BhcmFtZXRlcnMudHlwZVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRpZiAoIXRoaXMuaW5saW5lICYmIHRoaXMubGlua1BhcmFtZXRlcnMuaW5saW5lKXtcclxuXHRcdFx0dGhpcy5pbmxpbmUgPSB0cnVlO1xyXG5cdFx0fSBlbHNlIGlmICghdGhpcy5pbmxpbmUgJiYgdGhpcy5saW5rUGFyYW1ldGVycy5zaXplID4gMClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5pbmxpbmUgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIFRpbSBXZW50emxhdVxyXG4vLyBMaWNlbnNlZCB1bmRlciBNSVRcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAna2VydmktanMnO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRTaXplcyAgfSBmcm9tICdrZXJ2aS1qcyc7XHJcbmltcG9ydCB7IE5HWEtlcnZpU2VydmljZSB9IGZyb20gJy4uL25neC1rZXJ2aS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEFwcEluamVjdG9yIH0gZnJvbSAnLi4vYXBwLWluamVjdG9yLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdrZXJ2aS1hY3Rpb24tYmFzZScsXHJcbiAgdGVtcGxhdGU6ICcnLFxyXG4gIHN0eWxlczogW10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBLZXJ2aUFjdGlvbkNvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBhY3Rpb246IEFjdGlvbiA9IG51bGw7XHJcbiAgICBASW5wdXQoKSBsaW5rUGFyYW1ldGVyczogYW55ID0gbnVsbDtcclxuICAgIEBJbnB1dCgpIGlubGluZSA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgZGFzaGJvYXJkU2l6ZXM6RGFzaGJvYXJkU2l6ZXMgPSBuZXcgRGFzaGJvYXJkU2l6ZXMoKTtcclxuICAgIHB1YmxpYyBzdGF0ZTogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XHJcbiAgICBwcm90ZWN0ZWQga2VydmlTZXJ2aWNlOk5HWEtlcnZpU2VydmljZTtcclxuXHJcbiAgICBwdWJsaWMgZGlzcGxheVR5cGUgPSAnc3dpdGNoJztcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMua2VydmlTZXJ2aWNlID0gQXBwSW5qZWN0b3IuZ2V0KE5HWEtlcnZpU2VydmljZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXRBY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGlmICghdGhpcy5saW5rUGFyYW1ldGVycylcclxuICAgICAgICAgICAgdGhpcy5saW5rUGFyYW1ldGVycyA9IHRoaXMuYWN0aW9uLnVpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5saW5rUGFyYW1ldGVycy5kaXNwbGF5VHlwZSl7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheVR5cGUgPSB0aGlzLmxpbmtQYXJhbWV0ZXJzLmRpc3BsYXlUeXBlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlubGluZSAmJiB0aGlzLmxpbmtQYXJhbWV0ZXJzLmlubGluZSl7XHJcbiAgICAgICAgICAgIHRoaXMuaW5saW5lID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNlbGYuc3RhdGUubmV4dCh0aGlzLmFjdGlvbi5ydW5uaW5nJC52YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5hY3Rpb24ucnVubmluZyQuc3Vic2NyaWJlKGZ1bmN0aW9uKHYpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFyXCIsIHNlbGYuYWN0aW9uLmlkLCB2KVxyXG4gICAgICAgICAgICBzZWxmLnN0YXRlLm5leHQodik7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0QWN0aW9uU3RhdGUodmFsdWUpe1xyXG4gICAgICAgIGlmICh2YWx1ZSlcclxuICAgICAgICAgICAgdGhpcy5hY3Rpb24ucnVuKHRoaXMubGlua1BhcmFtZXRlcnMuYWN0aW9uUGFyYW1ldGVycyk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLmFjdGlvbi5pbnRlcnJ1cHQodGhpcy5saW5rUGFyYW1ldGVycy5pbnRlcnJ1cHRQYXJhbWV0ZXJzKVxyXG4gICAgfVxyXG59IiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCBUaW0gV2VudHpsYXVcclxuLy8gTGljZW5zZWQgdW5kZXIgTUlUXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xsZXIsIE51bWJlclZhbHVlIH0gZnJvbSAna2VydmktanMnO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRTaXplcyAgfSBmcm9tICdrZXJ2aS1qcyc7XHJcbmltcG9ydCB7IE5HWEtlcnZpU2VydmljZSB9IGZyb20gJy4uL25neC1rZXJ2aS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBwSW5qZWN0b3IgfSBmcm9tICcuLi9hcHAtaW5qZWN0b3Iuc2VydmljZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdrZXJ2aS1jYW1lcmEtYmFzZScsXHJcbiAgdGVtcGxhdGU6ICcnLFxyXG4gIHN0eWxlczogW10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBLZXJ2aUNhbWVyYUNvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBzdHJlYW1PYnNlcnZlcnM6IENvbnRyb2xsZXJbXSA9IFtdO1xyXG4gICAgQElucHV0KCkgcHVibGljIHNlbGVjdGVkU291cmNlOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGNhbTogQ29udHJvbGxlcjtcclxuXHJcbiAgICBASW5wdXQoKSBzZXQgY2FtZXJhSWQoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzZXRjYW1pZCcsIGlkKTtcclxuXHJcbiAgICAgICAgdGhpcy5jYW1lcmEgPSB0aGlzLmtlcnZpU2VydmljZS5nZXRDb21wb25lbnQoaWQpIGFzIENvbnRyb2xsZXI7XHJcbiAgICB9XHJcbiAgICBASW5wdXQoKSBzZXQgY2FtZXJhKHY6IENvbnRyb2xsZXIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnc2V0Y2FtJywgdik7XHJcblxyXG4gICAgICAgIHRoaXMuY2FtID0gdjtcclxuICAgICAgICBpZiAodil7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgb2Ygdi5vdXRwdXRzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaS5pZC5lbmRzV2l0aCgnLnBhbicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYW4gPSBpIGFzIE51bWJlclZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpLmlkLmVuZHNXaXRoKCcudGlsdCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWx0ID0gaSBhcyBOdW1iZXJWYWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNhbWVyYVR5cGUgPSB2LnVpLnR5cGU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNhbWVyYVR5cGUgPT09ICdmcmFtZScgKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodi51aS5zb3VyY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbWVyYVNvdXJjZSA9IHRoaXMuY2FtLmlkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW1lcmFTb3VyY2UgPSB0aGlzLmNhbS5pZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0cmVhbU9ic2VydmVycygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgY2FtZXJhKCkgeyByZXR1cm4gdGhpcy5jYW07IH1cclxuICAgIEBJbnB1dCgpIGxpbmtQYXJhbWV0ZXJzOiBhbnkgPSBudWxsO1xyXG4gICAgQElucHV0KCkgaW5saW5lID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBkYXNoYm9hcmRTaXplcyA9IG5ldyBEYXNoYm9hcmRTaXplcygpO1xyXG4gICAgQElucHV0KCkgaXNCYWNrZ3JvdW5kID0gZmFsc2U7XHJcblxyXG4gICAgcHJvdGVjdGVkIGtlcnZpU2VydmljZTogTkdYS2VydmlTZXJ2aWNlO1xyXG4gICAgcHVibGljIHBhbjogTnVtYmVyVmFsdWU7XHJcbiAgICBwdWJsaWMgdGlsdDogTnVtYmVyVmFsdWU7XHJcbiAgICBwdWJsaWMgY2FtZXJhVHlwZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGNhbWVyYVNvdXJjZTogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5rZXJ2aVNlcnZpY2UgPSBBcHBJbmplY3Rvci5nZXQoTkdYS2VydmlTZXJ2aWNlKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTdHJlYW1PYnNlcnZlcnMoKSB7XHJcbiAgICAgICAgY29uc3Qgc3RyZWFtT2JzZXJ2ZXJzID0gW107XHJcbiAgICAgICAgY29uc3QgY29udHJvbGxlcnMgPSB0aGlzLmtlcnZpU2VydmljZS5nZXRDb21wb25lbnRzQnlUeXBlKCdjb250cm9sbGVyJyk7XHJcbiAgICAgICAgZm9yIChsZXQgY29udHJvbGxlciBvZiBjb250cm9sbGVycykge1xyXG4gICAgICAgICAgICBpZiAoY29udHJvbGxlci50eXBlID09PSAnc3RyZWFtX29ic2VydmVyJykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRyb2xsZXIudWkuc291cmNlU3RyZWFtID09PSB0aGlzLmNhbWVyYVNvdXJjZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0cmVhbU9ic2VydmVycy5wdXNoKGNvbnRyb2xsZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3RyZWFtT2JzZXJ2ZXJzID0gc3RyZWFtT2JzZXJ2ZXJzO1xyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkU291cmNlICE9PSB0aGlzLmNhbWVyYVNvdXJjZSl7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTb3VyY2UgPSB0aGlzLmNhbWVyYVNvdXJjZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFBhbih2KSB7XHJcbiAgICAgICAgdGhpcy5wYW4uc2V0KHYpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRUaWx0KHYpIHtcclxuICAgICAgICB0aGlzLnRpbHQuc2V0KHYpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0Q2FtZXJhKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCduZ2kgY2FtJywgdGhpcy5jYW1lcmEuaWQpO1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGlmICghdGhpcy5saW5rUGFyYW1ldGVycykge1xyXG4gICAgICAgICAgICAgIHRoaXMubGlua1BhcmFtZXRlcnMgPSB0aGlzLmNhbWVyYS51aTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmlubGluZSAmJiB0aGlzLmxpbmtQYXJhbWV0ZXJzLmlubGluZSkge1xyXG4gICAgICAgICAgICB0aGlzLmlubGluZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMua2VydmlTZXJ2aWNlLmNvbXBvbmVudHNDaGFuZ2VkJC5zdWJzY3JpYmUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNlbGYudXBkYXRlU3RyZWFtT2JzZXJ2ZXJzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTdHJlYW1PYnNlcnZlcnMoKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkU291cmNlID0gdGhpcy5jYW1lcmFTb3VyY2U7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlU291cmNlKHNvdXJjZTogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NzJywgc291cmNlKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkU291cmNlID0gc291cmNlO1xyXG4gICAgICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCBUaW0gV2VudHpsYXVcclxuLy8gTGljZW5zZWQgdW5kZXIgTUlUXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29sb3JWYWx1ZSB9IGZyb20gJ2tlcnZpLWpzJztcclxuaW1wb3J0IHsgS2VydmlWYWx1ZUNvbXBvbmVudCB9IGZyb20gJy4vdmFsdWUuY29tcG9uZW50J1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdrZXJ2aS12YWx1ZS1jb2xvci1iYXNlJyxcclxuXHR0ZW1wbGF0ZTogJydcclxufSlcclxuZXhwb3J0IGNsYXNzIEtlcnZpQ29sb3JDb21wb25lbnQgZXh0ZW5kcyBLZXJ2aVZhbHVlQ29tcG9uZW50PENvbG9yVmFsdWU+IHtcclxuXHRwdWJsaWMgZGlzcGxheVR5cGU6c3RyaW5nPVwiYnV0dG9uXCI7XHJcblx0XHJcblx0Y29uc3RydWN0b3IoKXsgXHJcblx0XHRzdXBlcigpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldEtlcnZpVmFsdWUodmFsdWUpe1xyXG5cdFx0dGhpcy52YWx1ZS5zZXQodmFsdWUpO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXRDb2xvcigpIHtcclxuXHRcdHRoaXMubmdPbkluaXRWYWx1ZSgpO1xyXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0XHJcblx0XHRpZiAodGhpcy5saW5rUGFyYW1ldGVycy50eXBlKXtcclxuXHRcdFx0dGhpcy5kaXNwbGF5VHlwZSA9IHRoaXMubGlua1BhcmFtZXRlcnMudHlwZVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRpZiAoIXRoaXMuaW5saW5lICYmIHRoaXMubGlua1BhcmFtZXRlcnMuaW5saW5lKXtcclxuXHRcdFx0dGhpcy5pbmxpbmUgPSB0cnVlO1xyXG5cdFx0fSBlbHNlIGlmICghdGhpcy5pbmxpbmUgJiYgdGhpcy5saW5rUGFyYW1ldGVycy5zaXplID4gMClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5pbmxpbmUgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIFRpbSBXZW50emxhdVxyXG4vLyBMaWNlbnNlZCB1bmRlciBNSVRcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRlVGltZVZhbHVlIH0gZnJvbSAna2VydmktanMnO1xyXG5pbXBvcnQgeyBLZXJ2aVZhbHVlQ29tcG9uZW50IH0gZnJvbSAnLi92YWx1ZS5jb21wb25lbnQnXHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2tlcnZpLXZhbHVlLWRhdGV0aW1lLWJhc2UnLFxyXG5cdHRlbXBsYXRlOiAnJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgS2VydmlEYXRlVGltZUNvbXBvbmVudCBleHRlbmRzIEtlcnZpVmFsdWVDb21wb25lbnQ8RGF0ZVRpbWVWYWx1ZT4ge1xyXG5cdHB1YmxpYyBkaXNwbGF5VHlwZTpzdHJpbmc9XCJkYXRldGltZVwiO1xyXG5cdHB1YmxpYyBkYXRlVGltZUZvcm1hdDpzdHJpbmc7XHJcblx0Y29uc3RydWN0b3IoKXsgXHJcblx0XHRzdXBlcigpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgc2V0S2VydmlWYWx1ZSh2YWx1ZSl7XHJcblx0XHR0aGlzLnZhbHVlLnNldCh2YWx1ZSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgbmdPbkluaXREYXRlVGltZSgpIHtcclxuXHRcdHRoaXMubmdPbkluaXRWYWx1ZSgpO1xyXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0XHJcblx0XHRpZiAodGhpcy5saW5rUGFyYW1ldGVycy50eXBlKXtcclxuXHRcdFx0dGhpcy5kaXNwbGF5VHlwZSA9IHRoaXMubGlua1BhcmFtZXRlcnMudHlwZVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRpZiAoIXRoaXMuaW5saW5lICYmIHRoaXMubGlua1BhcmFtZXRlcnMuaW5saW5lKXtcclxuXHRcdFx0dGhpcy5pbmxpbmUgPSB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChzZWxmLmxpbmtQYXJhbWV0ZXJzLnR5cGU9PVwidGltZVwiKVxyXG4gICAgICAgIFx0dGhpcy5kYXRlVGltZUZvcm1hdCA9IHRoaXMua2VydmlTZXJ2aWNlLmFwcGxpY2F0aW9uJC52YWx1ZS5kaXNwbGF5LnVuaXRfc3lzdGVtLmRhdGV0aW1lLnRpbWU7XHJcbiAgICAgIFx0ZWxzZSBpZiAoc2VsZi5saW5rUGFyYW1ldGVycy50eXBlPT1cImRhdGVcIilcclxuICAgICAgICBcdHRoaXMuZGF0ZVRpbWVGb3JtYXQgPSBzZWxmLmtlcnZpU2VydmljZS5hcHBsaWNhdGlvbiQudmFsdWUuZGlzcGxheS51bml0X3N5c3RlbS5kYXRldGltZS5kYXRlO1xyXG4gICAgICBcdGVsc2VcclxuICAgICAgICBcdHRoaXMuZGF0ZVRpbWVGb3JtYXQgPSB0aGlzLmtlcnZpU2VydmljZS5hcHBsaWNhdGlvbiQudmFsdWUuZGlzcGxheS51bml0X3N5c3RlbS5kYXRldGltZS5kYXRldGltZTtcclxuICAgICAgXHJcblx0fVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgVGltIFdlbnR6bGF1XHJcbi8vIExpY2Vuc2VkIHVuZGVyIE1JVFxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN0cmluZ1ZhbHVlIH0gZnJvbSAna2VydmktanMnO1xyXG5pbXBvcnQgeyBLZXJ2aVZhbHVlQ29tcG9uZW50IH0gZnJvbSAnLi92YWx1ZS5jb21wb25lbnQnXHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2tlcnZpLXZhbHVlLXN0cmluZy1iYXNlJyxcclxuXHR0ZW1wbGF0ZTogJydcclxufSlcclxuZXhwb3J0IGNsYXNzIEtlcnZpU3RyaW5nQ29tcG9uZW50IGV4dGVuZHMgS2VydmlWYWx1ZUNvbXBvbmVudDxTdHJpbmdWYWx1ZT4ge1xyXG5cdHB1YmxpYyBkaXNwbGF5VHlwZTpzdHJpbmc9XCJcIjtcclxuXHRcclxuXHRjb25zdHJ1Y3RvcigpeyBcclxuXHRcdHN1cGVyKCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0S2VydmlWYWx1ZSh2YWx1ZSl7XHJcblx0XHR0aGlzLnZhbHVlLnNldCh2YWx1ZSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgbmdPbkluaXRTdHJpbmcoKSB7XHJcblx0XHR0aGlzLm5nT25Jbml0VmFsdWUoKTtcclxuXHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdFxyXG5cdFx0aWYgKHRoaXMubGlua1BhcmFtZXRlcnMudHlwZSl7XHJcblx0XHRcdHRoaXMuZGlzcGxheVR5cGUgPSB0aGlzLmxpbmtQYXJhbWV0ZXJzLnR5cGVcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0aWYgKCF0aGlzLmlubGluZSAmJiB0aGlzLmxpbmtQYXJhbWV0ZXJzLmlubGluZSl7XHJcblx0XHRcdHRoaXMuaW5saW5lID0gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCBUaW0gV2VudHpsYXVcclxuLy8gTGljZW5zZWQgdW5kZXIgTUlUXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERhc2hib2FyZFNpemVzLCBEYXNoYm9hcmRNZXNzYWdlTW9kZWwsIFVzZXJMb2dTdGF0ZVR5cGUgfSBmcm9tICdrZXJ2aS1qcyc7XHJcbmltcG9ydCB7IE5HWEtlcnZpU2VydmljZSB9IGZyb20gJy4uL25neC1rZXJ2aS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBwSW5qZWN0b3IgfSBmcm9tICcuLi9hcHAtaW5qZWN0b3Iuc2VydmljZSc7XHJcbmltcG9ydCB7ICBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2tlcnZpLXVzZXItbG9nLWJhc2UnLFxyXG4gIHRlbXBsYXRlOiAnJyxcclxuICBzdHlsZXM6IFtdLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEtlcnZpVXNlckxvZ0NvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBsb2dMZW5ndGggPSAxMDtcclxuICAgIEBJbnB1dCgpIGxpbmtQYXJhbWV0ZXJzOiBhbnkgPSBudWxsO1xyXG4gICAgQElucHV0KCkgaW5saW5lID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBkYXNoYm9hcmRTaXplczogRGFzaGJvYXJkU2l6ZXMgPSBuZXcgRGFzaGJvYXJkU2l6ZXMoKTtcclxuICAgIHByb3RlY3RlZCBrZXJ2aVNlcnZpY2U6IE5HWEtlcnZpU2VydmljZTtcclxuICAgIGxhc3RNZXNzYWdlJDogT2JzZXJ2YWJsZTxEYXNoYm9hcmRNZXNzYWdlTW9kZWw+ID0gbnVsbDtcclxuICAgIG1lc3NhZ2VzJDogT2JzZXJ2YWJsZTxEYXNoYm9hcmRNZXNzYWdlTW9kZWxbXT4gPSBudWxsO1xyXG4gICAgbWVzc2FnZUNvdW50JDogT2JzZXJ2YWJsZTxudW1iZXI+ID0gbnVsbDtcclxuICAgIGxvZ1N0YXRlJDogT2JzZXJ2YWJsZTxVc2VyTG9nU3RhdGVUeXBlPiA9IG51bGw7XHJcbiAgICBwdWJsaWMgbWVzc2FnZUNvdW50ID0gMDtcclxuICAgIHB1YmxpYyBVc2VyTG9nU3RhdGU6IFVzZXJMb2dTdGF0ZVR5cGUgPSBVc2VyTG9nU3RhdGVUeXBlLm5vcm1hbDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmtlcnZpU2VydmljZSA9IEFwcEluamVjdG9yLmdldChOR1hLZXJ2aVNlcnZpY2UpO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZXMkID0gdGhpcy5rZXJ2aVNlcnZpY2UuZ2V0TG9nTWVzc2FnZXMkKCk7XHJcbiAgICAgICAgdGhpcy5sYXN0TWVzc2FnZSQgPSB0aGlzLmtlcnZpU2VydmljZS5nZXRMYXN0TG9nTWVzc2FnZSQoKTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VDb3VudCQgPSB0aGlzLmtlcnZpU2VydmljZS5nZXRMb2dNZXNzYWdlQ291bnQkKCk7XHJcbiAgICAgICAgdGhpcy5sb2dTdGF0ZSQgPSB0aGlzLmtlcnZpU2VydmljZS5nZXRMb2dTdGF0ZSQoKTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VDb3VudCQuc3Vic2NyaWJlKGZ1bmN0aW9uKHYpe1xyXG4gICAgICAgICAgdGhpcy5tZXNzYWdlQ291bnQgPSB2O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBuZ09uSW5pdFVzZXJMb2coKSB7XHJcblxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOR1hLZXJ2aVNlcnZpY2UgfSBmcm9tICcuLi9uZ3gta2Vydmkuc2VydmljZSc7XHJcbmltcG9ydCB7IEFwcEluamVjdG9yIH0gZnJvbSAnLi4vYXBwLWluamVjdG9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEaXJlY3RvcnkgfSBmcm9tICdrZXJ2aS1qcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2tlcnZpLWRpcmVjdG9yeScsXHJcbiAgdGVtcGxhdGU6ICcnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBLZXJ2aURpcmVjdG9yeUNvbXBvbmVudCB7XHJcbiAgICBwcm90ZWN0ZWQgcGF0aCA9ICcvJztcclxuICAgIHByb3RlY3RlZCBkaXJlY3Rvcnk6IERpcmVjdG9yeSA9IG51bGw7XHJcbiAgICBwcm90ZWN0ZWQga2VydmlTZXJ2aWNlOiBOR1hLZXJ2aVNlcnZpY2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5rZXJ2aVNlcnZpY2UgPSBBcHBJbmplY3Rvci5nZXQoTkdYS2VydmlTZXJ2aWNlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgbG9hZERpcmVjdG9yeSgpIHtcclxuICAgICAgICAvL3RoaXMuZGlyZWN0b3J5ID0gdGhpcy5rZXJ2aVNlcnZpY2UuR2V0RGlyZWN0b3J5KHRoaXMucGF0aCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLW5neC1rZXJ2aScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxwPlxyXG4gICAgICBuZ3gta2Vydmkgd29ya3MhXHJcbiAgICA8L3A+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hLZXJ2aUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5neEtlcnZpQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3gta2VydmkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgS2VydmlEYXNoYm9hcmRDb21wb25lbnQgfSBmcm9tICcuL2Rhc2hib2FyZC9rZXJ2aS1kYXNoYm9hcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgc2V0QXBwSW5qZWN0b3IgfSBmcm9tIFwiLi9hcHAtaW5qZWN0b3Iuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBLZXJ2aURhc2hib2FyZFBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9kYXNoYm9hcmQva2VydmktZGFzaGJvYXJkLXBhbmVsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEtlcnZpQ29udHJvbGxlclBhZENvbXBvbmVudCB9IGZyb20gJy4vZGFzaGJvYXJkL2tlcnZpLWNvbnRyb2xsZXItcGFkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5HWEtlcnZpU2VydmljZSB9IGZyb20gJy4vbmd4LWtlcnZpLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBLZXJ2aVRlbXBsYXRlU2VydmljZSB9IGZyb20gJy4vbmd4LWtlcnZpLXRlbXBsYXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBLZXJ2aVZhbHVlQ29tcG9uZW50IH0gZnJvbSAnLi92YWx1ZXMvdmFsdWUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgS2VydmlOdW1iZXJDb21wb25lbnQgfSBmcm9tICcuL3ZhbHVlcy9rZXJ2aS1udW1iZXItdmFsdWUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgS2VydmlTdHJpbmdDb21wb25lbnQgfSBmcm9tICcuL3ZhbHVlcy9rZXJ2aS1zdHJpbmctdmFsdWUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgS2VydmlCb29sZWFuQ29tcG9uZW50IH0gZnJvbSAnLi92YWx1ZXMva2VydmktYm9vbGVhbi12YWx1ZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBLZXJ2aUNvbG9yQ29tcG9uZW50IH0gZnJvbSAnLi92YWx1ZXMva2VydmktY29sb3ItdmFsdWUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgS2VydmlEYXRlVGltZUNvbXBvbmVudCB9IGZyb20gJy4vdmFsdWVzL2tlcnZpLWRhdGV0aW1lLXZhbHVlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEtlcnZpQWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9hY3Rpb25zL2tlcnZpLWFjdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBLZXJ2aUNhbWVyYUNvbXBvbmVudCB9IGZyb20gJy4vY2FtZXJhL2tlcnZpLWNhbWVyYS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBLZXJ2aVdpZGdldENvbXBvbmVudCB9IGZyb20gJy4vZGFzaGJvYXJkL2tlcnZpLXdpZGdldC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBLZXJ2aVVzZXJMb2dDb21wb25lbnQgfSBmcm9tICcuL3VzZXItbG9nL3VzZXItbG9nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEtlcnZpRGlyZWN0b3J5Q29tcG9uZW50IH0gZnJvbSAnLi9maWxlcy9rZXJ2aS1kaXJlY3RvcnkuY29tcG9uZW50JztcclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE5neEtlcnZpQ29tcG9uZW50LFxyXG4gICAgS2VydmlEYXNoYm9hcmRDb21wb25lbnQsXHJcbiAgICBLZXJ2aURhc2hib2FyZFBhbmVsQ29tcG9uZW50LFxyXG4gICAgS2VydmlDb250cm9sbGVyUGFkQ29tcG9uZW50LFxyXG4gICAgS2VydmlOdW1iZXJDb21wb25lbnQsXHJcbiAgICBLZXJ2aVN0cmluZ0NvbXBvbmVudCxcclxuICAgIEtlcnZpQm9vbGVhbkNvbXBvbmVudCxcclxuICAgIEtlcnZpQ29sb3JDb21wb25lbnQsXHJcbiAgICBLZXJ2aURhdGVUaW1lQ29tcG9uZW50LFxyXG4gICAgS2VydmlBY3Rpb25Db21wb25lbnQsXHJcbiAgICBLZXJ2aVZhbHVlQ29tcG9uZW50LFxyXG4gICAgS2VydmlXaWRnZXRDb21wb25lbnQsXHJcbiAgICBLZXJ2aUNhbWVyYUNvbXBvbmVudCxcclxuICAgIEtlcnZpVXNlckxvZ0NvbXBvbmVudCxcclxuICAgIEtlcnZpRGlyZWN0b3J5Q29tcG9uZW50XHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtOR1hLZXJ2aVNlcnZpY2UsIEtlcnZpVGVtcGxhdGVTZXJ2aWNlXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBOZ3hLZXJ2aUNvbXBvbmVudCxcclxuICAgIEtlcnZpRGFzaGJvYXJkQ29tcG9uZW50LFxyXG4gICAgS2VydmlEYXNoYm9hcmRQYW5lbENvbXBvbmVudCxcclxuICAgIEtlcnZpQ29udHJvbGxlclBhZENvbXBvbmVudCxcclxuICAgIEtlcnZpTnVtYmVyQ29tcG9uZW50LFxyXG4gICAgS2VydmlXaWRnZXRDb21wb25lbnQsXHJcbiAgICBLZXJ2aVN0cmluZ0NvbXBvbmVudCxcclxuICAgIEtlcnZpQm9vbGVhbkNvbXBvbmVudCxcclxuICAgIEtlcnZpQ29sb3JDb21wb25lbnQsXHJcbiAgICBLZXJ2aURhdGVUaW1lQ29tcG9uZW50LFxyXG4gICAgS2VydmlBY3Rpb25Db21wb25lbnQsXHJcbiAgICBLZXJ2aUNhbWVyYUNvbXBvbmVudCxcclxuICAgIEtlcnZpVXNlckxvZ0NvbXBvbmVudCxcclxuICAgIEtlcnZpQWN0aW9uQ29tcG9uZW50XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4S2VydmlNb2R1bGUge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6SW5qZWN0b3Ipe1xyXG4gICAgc2V0QXBwSW5qZWN0b3IoaW5qZWN0b3IpO1xyXG4gIH1cclxuIH1cclxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOR1hLZXJ2aVNlcnZpY2UgfSBmcm9tIFwiLi4vbmd4LWtlcnZpLnNlcnZpY2VcIlxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ3RyYW5zbGF0ZSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGtlcnZpU2VydmljZTogTkdYS2VydmlTZXJ2aWNlKSB7XHJcblxyXG4gIH1cclxuICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZywgYXJncz86IGFueSk6IGFueSB7XHJcbiAgICByZXR1cm4gdGhpcy5rZXJ2aVNlcnZpY2UudGV4dCh2YWx1ZSwgdmFsdWUpO1xyXG4gIH1cclxufSIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgVGltIFdlbnR6bGF1XHJcbi8vIExpY2Vuc2VkIHVuZGVyIE1JVFxyXG5cclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVHJhbnNsYXRlUGlwZSB9IGZyb20gJy4vdGV4dFBpcGUnIFxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICBdLFxyXG4gIGV4cG9ydHM6W1xyXG4gICAgVHJhbnNsYXRlUGlwZVxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbICBcclxuICAgICAgXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFRyYW5zbGF0ZVBpcGVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOR1hLZXJ2aVBpcGVzTW9kdWxlIHsgfVxyXG4iXSwibmFtZXMiOlsidHNsaWJfMS5fX2V4dGVuZHMiLCJ0c2xpYl8xLl9fdmFsdWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUlxQ0EsbUNBQWdCO0lBRHJEOztLQUdDOztnQkFIQSxVQUFVOztJQUdYLHNCQUFDO0NBQUEsQ0FGb0MsZ0JBQWdCOzs7Ozs7QUNKckQ7SUFNSTtRQURRLFlBQU8sR0FBUSxFQUFFLENBQUM7UUFHMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDOztRQUVyQyxJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUE7S0FDakY7Ozs7O0lBRU0saURBQWtCOzs7O0lBQXpCLFVBQTBCLEdBQUc7UUFDekIsT0FBTyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztLQUM3Qjs7Ozs7SUFFTSwyQ0FBWTs7OztJQUFuQixVQUFvQixLQUFLO1FBQ3JCLElBQUksS0FBSyxJQUFFLElBQUk7WUFDWCxPQUFPLE1BQU0sQ0FBQTthQUNaLElBQUksS0FBSyxLQUFHLEVBQUU7WUFDZixPQUFPLE1BQU0sQ0FBQTthQUNaLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFDO1lBQ2xCLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO2FBQ0csSUFBSSxLQUFLLEdBQUMsQ0FBQztZQUNQLE9BQU8sS0FBSyxHQUFHLEdBQUcsQ0FBQzs7WUFFbkIsT0FBTyxNQUFNLENBQUM7S0FDekI7Ozs7OztJQUVPLHdDQUFTOzs7OztJQUFqQixVQUFrQixLQUFLLEVBQUUsYUFBYTs7UUFFbEMsSUFBSSxLQUFLLENBQUMsS0FB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

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
/* harmony import */ var _media_media_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./media/media.component */ "./src/app/media/media.component.ts");
/* harmony import */ var ngx_kervi__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-kervi */ "../../dist/ngx-kervi/fesm5/ngx-kervi.js");
/* harmony import */ var kervi_zorro__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! kervi-zorro */ "../../dist/kervi-zorro/fesm5/kervi-zorro.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout */ "../../node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./image-viewer/image-viewer.component */ "./src/app/image-viewer/image-viewer.component.ts");
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
    { path: 'media', component: _media_media_component__WEBPACK_IMPORTED_MODULE_13__["MediaComponent"] },
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
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
                _media_media_component__WEBPACK_IMPORTED_MODULE_13__["MediaComponent"],
                _image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_17__["ImgViewerComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                ngx_kervi__WEBPACK_IMPORTED_MODULE_14__["NgxKerviModule"],
                ngx_kervi__WEBPACK_IMPORTED_MODULE_14__["NGXKerviPipesModule"],
                kervi_zorro__WEBPACK_IMPORTED_MODULE_15__["KerviZorroModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_16__["FlexLayoutModule"],
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

module.exports = ".dashboard-panels-hidden{\r\n    display: none;\r\n}\r\n\r\n::ng-deep .vertical-center-modal {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    z-index:4000;\r\n    /* width:90%; */\r\n    height:90%;\r\n    \r\n  }\r\n\r\n::ng-deep .vertical-center-modal .ant-modal {\r\n    top: 0;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dlYkFwcC9zcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osZUFBZTtJQUNmLFVBQVU7O0VBRVo7O0FBRUE7SUFDRSxNQUFNO0VBQ1IiLCJmaWxlIjoicHJvamVjdHMvd2ViQXBwL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhc2hib2FyZC1wYW5lbHMtaGlkZGVue1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC52ZXJ0aWNhbC1jZW50ZXItbW9kYWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHotaW5kZXg6NDAwMDtcclxuICAgIC8qIHdpZHRoOjkwJTsgKi9cclxuICAgIGhlaWdodDo5MCU7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCAudmVydGljYWwtY2VudGVyLW1vZGFsIC5hbnQtbW9kYWwge1xyXG4gICAgdG9wOiAwO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout *ngIf=\"dashboard\">\r\n\t<nz-header *ngIf='!isAppEmpty'>\r\n\t\t<div nz-row>\r\n\t\t\t<div nz-col nzSpan=\"6\">\t\t\r\n\t\t\t\t<ul nz-menu  nzMode=\"horizontal\" class=\"kervi-main-menu\">\r\n\t\t\t\t\t<li nz-submenu  *ngIf=\"showMenu\">\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<span title><i nz-icon nzTheme=\"twotone\" type=\"dashboard\" [nzTwotoneColor]=\"'#9fd037'\"></i> {{dashboard.name}}</span>\r\n\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t<ng-container *ngIf=\"dashboards.length > 1\">\r\n\t\t\t\t\t\t\t\t<li nz-menu-item *ngFor=\"let dashboard of dashboards\" [routerLink]=\"['/dashboard', dashboard.id]\">{{dashboard.name}}</li>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t<li *ngIf=\"authenticated && dashboards.length > 1\">\r\n\t\t\t\t\t\t\t\t<nz-divider></nz-divider>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li nz-menu-item *ngIf=\"authenticated && anonymous\" href=\"javascript: return false;\" (click)=\"logoff($event)\" ><i nz-icon type=\"login\"></i> {{('login' | translate)}}</li>\r\n\t\t\t\t\t\t\t<li nz-menu-item *ngIf=\"authenticated && !anonymous\" href=\"javascript: return false;\" (click)=\"logoff($event)\"><i nz-icon type=\"logout\"></i>{{('logout' | translate)}}</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li nz-menu-item *ngIf=\"showPanelController\">\r\n\t\t\t\t\t\t<a  (click)=\"dashboardPanelsHidden = !dashboardPanelsHidden;\">\r\n\t\t\t\t\t\t\t<i nz-icon type=\"sliders\" nzTheme=\"twotone\" [nzTwotoneColor]=\"'#9fd037'\"></i>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"kervi-sys-panel\" *ngIf=\"dashboard && dashboard.sysPanel\" nz-col nzSpan=\"18\">\r\n\t\t\t\t<kervi-dashboard-panel [dashboardSizes]=\"dashboardSizes\" [inline]=\"true\" [panel]=\"dashboard.sysPanel\" ></kervi-dashboard-panel>\r\n\t\t\t\t&nbsp;<a  (click)=\"mediaHidden = !mediaHidden;\">\r\n\t\t\t\t\t\t<i nz-icon nzType=\"folder-open\" nzTheme=\"twotone\" [nzTwotoneColor]=\"'#9fd037'\"> </i>\r\n\t\t\t\t</a>\r\n\t\t\t\t<kervi-message-button></kervi-message-button>\r\n\t\t\t\t\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t</div>\r\n\t</nz-header>\r\n\t\t\r\n\t<nz-content >\r\n\r\n\t\t<ng-container *ngIf=\"isAppEmpty\">\r\n\t\t\t<div nz-row>\r\n\t\t\t\t<div nz-col nzSpan=\"12\" nzOffset=\"6\">\r\n\t\t\t\t\t<nz-alert\r\n\t\t\t\t\t\tnzType=\"error\"\r\n\t\t\t\t\t\t[nzMessage] =\"'hello_world' | translate\"\r\n\t\t\t\t\t\t[nzDescription]=\" 'empty_app' | translate\"\r\n\t\t\t\t\t\tnzShowIcon\t\r\n\t\t\t\t\t  >\r\n\t\t\t\t\t  </nz-alert>\r\n\t\t\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t\t<kervi-cam-viewer *ngIf=\"cameraId\" [isBackground]=\"true\" [cameraId]=\"(cameraId$| async)\" [linkParameters]=\"cameraParameters\"></kervi-cam-viewer>\r\n\t\t<div #leftPad class=\"kervi-controller-pad\" *ngIf=\"showLeftPad\" [style.left.px]=\"leftPadLeft\" [style.top.px]=\"leftPadTop\" >\r\n\t\t\t<kervi-controller-pad [autoCenter]=\"autoCenterLeftPad\" [XValue]=\"leftPadXValue\" [YValue]=\"leftPadYValue\"></kervi-controller-pad>\r\n\t\t</div>\r\n\t\t<div #rightPad class=\"kervi-controller-pad\" *ngIf=\"showRightPad\" [style.left.px]=\"rightPadLeft\" [style.top.px]=\"rightPadTop\" >\r\n\t\t\t<kervi-controller-pad [autoCenter]=\"autoCenterRightPad\" [XValue]=\"rightPadXValue\" [YValue]=\"rightPadYValue\"></kervi-controller-pad>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"kervi-panels\" fxLayout=\" column\" fxLayout.xs=\"column\" fxLayoutGap=\"0.5%\" fxLayoutAlign=\"\"  *ngIf=\"!dashboardPanelsHidden\" style=\"\">\r\n\t\t\t<ng-container *ngFor=\"let panel of dashboard.panels\">\r\n\t\t\t\t\t<kervi-dashboard-panel [fxFlex]=\"panel.parameters.width\" fxFlex.xs=\"100%\" [dashboardSizes]=\"defaultSizes\" [panel]=\"panel\"></kervi-dashboard-panel>\r\n\t\t\t\t\r\n\t\t\t</ng-container>\r\n\t\t</div>\r\n\t</nz-content>\r\n\t<nz-footer *ngIf='!isAppEmpty'>\r\n\t\t<div nz-col nzSpan=\"8\" style=\"text-align: left\">\r\n\t\t\t<kervi-dashboard-panel [inline]=\"true\" *ngIf=\"dashboard.footerLeftPanel\" [dashboardSizes]=\"defaultSizes\" [panel]=\"dashboard.footerLeftPanel\"></kervi-dashboard-panel>\r\n\t\t</div>\r\n\t\t<div nz-col nzSpan=\"8\" style=\"text-align:center\">\r\n\t\t\t<kervi-dashboard-panel [inline]=\"true\" *ngIf=\"dashboard.footerCenterPanel\" [dashboardSizes]=\"defaultSizes\" [panel]=\"dashboard.footerCenterPanel\"></kervi-dashboard-panel>\r\n\t\t</div>\r\n\t\t<div nz-col nzSpan=\"8\"  style=\"text-align: right\">\r\n\t\t\t<kervi-dashboard-panel [inline]=\"true\" *ngIf=\"dashboard.footerRightPanel\" [dashboardSizes]=\"defaultSizes\" [panel]=\"dashboard.footerRightPanel\"></kervi-dashboard-panel>\r\n\t\t\t<button nz-button nzShape=\"round\" (mousedown)=\"toggleFullScreen()\"><i nz-icon [nzType]=\"inFullScreen ? 'fullscreen' : 'fullscreen-exit'\" title=\"{{( 'toggle_screen' | translate)}}\"></i></button>\r\n\t\t</div>\r\n\t</nz-footer>\r\n</nz-layout>\r\n\r\n<nz-modal \r\n\tnzWrapClassName=\"vertical-center-modal\"\r\n\t[(nzVisible)]=\"!mediaHidden\"\r\n\tnzTitle=\"Media\"\r\n\t(nzOnCancel)=\"handleMediaClose()\"\r\n\t\r\n>\r\n<div style=\"display:inline-block;width:100%\"> <app-media ></app-media></div>\t\r\n\r\n</nz-modal>\r\n\r\n\r\n\r\n"

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
        _this.cameraIdx = "";
        _this.mediaHidden = true;
        return _this;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        this.cameraId$.subscribe(function (camId) {
            console.log("db cid", camId);
            this.cameraIdx = camId;
        });
        this.kerviService.componentsChanged$.subscribe(function () {
            console.log("adb changed");
            var id = self.dashboardId;
            //self.loadDashboard("0");
            self.loadDashboard(id);
        });
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
    DashboardComponent.prototype.handleMediaClose = function () {
        console.log('click ok');
        this.mediaHidden = true;
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

/***/ "./src/app/image-viewer/image-viewer.component.html":
/*!**********************************************************!*\
  !*** ./src/app/image-viewer/image-viewer.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"img-viewer {{imgViewerClass}}\">\r\n    <div class=\"img-viewer-panel\">\r\n      <div class=\"img-viewer-panel-header\">\r\n        <div nz-row>\r\n          <div nz-col nzSpan=\"3\">\r\n              <i nz-icon (click)=\"closeImageViewer()\" nzType=\"rollback\" nzTheme=\"outline\"></i>\r\n          </div>\r\n        <div nz-col nzSpan=\"21\">\r\n          <div *ngIf=\"showOperate\" class=\"img-viewer-panel-header-operation\">\r\n            <span nz-tooltip nzPlacement=\"bottom\" [nzTitle]=\"imageViewerType.zoomInToolTip\" *ngIf=\"zoom\" (click)=\"zoomInImg()\"><i nz-icon nzType=\"zoom-in\"></i></span>\r\n            <span nz-tooltip nzPlacement=\"bottom\" [nzTitle]=\"imageViewerType.zoomOutToolTip\" *ngIf=\"zoom\" (click)=\"zoomOutImg()\"><i nz-icon nzType=\"zoom-out\"></i></span>\r\n            <span nz-tooltip nzPlacement=\"bottom\" [nzTitle]=\"imageViewerType.rotateLeftToolTip\" *ngIf=\"rotate\" (click)=\"rotateImg(false)\"><i nz-icon nzType=\"undo\"></i></span>\r\n            <span nz-tooltip nzPlacement=\"bottom\" [nzTitle]=\"imageViewerType.rotateRightToolTip\" *ngIf=\"rotate\" (click)=\"rotateImg(true)\"><i nz-icon nzType=\"redo\"></i></span>\r\n            <span nz-tooltip nzPlacement=\"bottom\" [nzTitle]=\"imageViewerType.resetToolTip\" *ngIf=\"reset\" (click)=\"showImg()\"><i nz-icon nzType=\"sync\"></i></span>\r\n            <span nz-tooltip nzPlacement=\"bottom\" [nzTitle]=\"imageViewerType.fullScreenToolTip\" *ngIf=\"fullscreen\" (click)=\"fullscreenImg()\"><i nz-icon nzType=\"fullscreen\"></i></span>\r\n            <span nz-tooltip nzPlacement=\"bottom\" [nzTitle]=\"imageViewerType.downloadToolTip\" *ngIf=\"download\" (click)=\"downloadImg()\"><i nz-icon nzType=\"download\"></i></span>\r\n          </div>\r\n      </div>\r\n      </div>\r\n      </div>\r\n      <div class=\"img-viewer-panel-body\" [class.img-viewer-panel-body-has-footer]=\"images.length > 1\">\r\n        <div class=\"img-viewer-panel-body-content\">\r\n  \r\n        </div>\r\n        <span *ngIf=\"imgTotal > 1\" class=\"img-viewer-panel-body-prev\" (click)=\"prevImg()\"><i nz-icon nzType=\"left\"></i></span>\r\n        <span *ngIf=\"imgTotal > 1\" class=\"img-viewer-panel-body-next\" (click)=\"nextImg()\"><i nz-icon nzType=\"right\"></i></span>\r\n      </div>\r\n      <div *ngIf=\"imgTotal > 1\" class=\"img-viewer-panel-footer\">\r\n      {{currentImgIndex}} / {{imgTotal}}\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/image-viewer/image-viewer.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/image-viewer/image-viewer.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-viewer {\n  position: relative;\n  line-height: 1.5;\n  font-family: Consolas, Menlo, Courier, monospace;\n  text-align: left;\n  color: rgba(0, 0, 0, 0.65);\n  width: 100%;\n  height: 450px; }\n  .img-viewer .img-viewer-panel {\n    width: 100%;\n    height: 100%;\n    font-size: 12px;\n    border: 1px solid none;\n    display: inline-block;\n    border-radius: 4px;\n    vertical-align: middle;\n    position: relative;\n    padding-top: 50px; }\n  .img-viewer .img-viewer-panel-header {\n      padding: 8px 12px;\n      height: 50px;\n      border-radius: 4px 4px 0 0;\n      border-bottom: 1px solid none;\n      overflow: hidden;\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      font-size: 24px;\n      line-height: 33px; }\n  .img-viewer .img-viewer-panel-header-pdf {\n        position: absolute;\n        left: 12px; }\n  .img-viewer .img-viewer-panel-header-operation {\n        position: absolute;\n        right: 12px; }\n  .img-viewer .img-viewer-panel-header-operation span {\n          margin: 0 3px; }\n  .img-viewer .img-viewer-panel-body {\n      height: 100%;\n      font-size: 12px;\n      position: relative; }\n  .img-viewer .img-viewer-panel-body .switch, .img-viewer .img-viewer-panel-body .img-viewer-panel-body-prev, .img-viewer .img-viewer-panel-body .img-viewer-panel-body-next {\n        position: absolute;\n        top: 50%;\n        -webkit-transform: translate(0, -50%);\n                transform: translate(0, -50%);\n        font-size: 24px; }\n  .img-viewer .img-viewer-panel-body .switch:hover, .img-viewer .img-viewer-panel-body .img-viewer-panel-body-prev:hover, .img-viewer .img-viewer-panel-body .img-viewer-panel-body-next:hover {\n          color: #cccccc; }\n  .img-viewer .img-viewer-panel-body-prev {\n        left: 12px; }\n  .img-viewer .img-viewer-panel-body-next {\n        right: 12px; }\n  .img-viewer .img-viewer-panel-body-content {\n        padding: 0;\n        overflow: hidden;\n        height: 100%; }\n  .img-viewer .img-viewer-panel-body-has-footer {\n        padding-bottom: 50px; }\n  .img-viewer .img-viewer-panel-footer {\n      height: 50px;\n      border-radius: 0 0 4px 4px;\n      border-top: 1px solid none;\n      overflow: hidden;\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      width: 100%;\n      font-size: 16px;\n      text-align: center;\n      line-height: 50px;\n      background-color: #cacaca; }\n  :host ::ng-deep .iv-loader {\n  border-top: 1.1em solid rgba(0, 0, 0, 0.7);\n  border-right: 1.1em solid rgba(36, 239, 43, 0.7);\n  border-bottom: 1.1em solid rgba(254, 202, 55, 0.7);\n  border-left: 1.1em solid rgba(254, 207, 219, 0.7); }\n  :host ::ng-deep .iv-snap-view {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dlYkFwcC9zcmMvYXBwL2ltYWdlLXZpZXdlci9EOlxcdGltIHByaXZhdFxcZ2l0aHViXFxrZXJ2aVxca2VydmktdWlcXGtlcnZpXFx1aVxcd2ViL3Byb2plY3RzXFx3ZWJBcHBcXHNyY1xcYXBwXFxpbWFnZS12aWV3ZXJcXGltYWdlLXZpZXdlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0RBQWdEO0VBQ2hELGdCQUFnQjtFQUNoQiwwQkFUd0I7RUFVeEIsV0FBVztFQUNYLGFBQWEsRUFBQTtFQVBmO0lBVUksV0FaTztJQWFQLFlBYk87SUFjUCxlQWpCTztJQWtCUCxzQkFoQmM7SUFpQmQscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGlCQUFpQixFQUFBO0VBbEJyQjtNQXFCTSxpQkFBaUI7TUFDakIsWUFBWTtNQUNaLDBCQUEwQjtNQUMxQiw2QkEzQlk7TUE0QlosZ0JBQWdCO01BQ2hCLGtCQUFrQjtNQUNsQixNQUFNO01BQ04sT0FBTztNQUNQLFdBL0JLO01BZ0NMLGVBQWU7TUFDZixpQkFBaUIsRUFBQTtFQS9CdkI7UUFrQ1Esa0JBQWtCO1FBQ2xCLFVBQVUsRUFBQTtFQW5DbEI7UUF1Q1Esa0JBQWtCO1FBQ2xCLFdBQVcsRUFBQTtFQXhDbkI7VUEyQ1UsYUFBYSxFQUFBO0VBM0N2QjtNQWlETSxZQUFZO01BQ1osZUF2REs7TUF3REwsa0JBQWtCLEVBQUE7RUFuRHhCO1FBc0RRLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IscUNBQTZCO2dCQUE3Qiw2QkFBNkI7UUFDN0IsZUFBZSxFQUFBO0VBekR2QjtVQTREVSxjQUFjLEVBQUE7RUE1RHhCO1FBa0VRLFVBQVUsRUFBQTtFQWxFbEI7UUF1RVEsV0FBVyxFQUFBO0VBdkVuQjtRQTJFUSxVQUFVO1FBQ1YsZ0JBQWdCO1FBQ2hCLFlBQVksRUFBQTtFQTdFcEI7UUFpRlEsb0JBQW9CLEVBQUE7RUFqRjVCO01Bc0ZNLFlBQVk7TUFDWiwwQkFBMEI7TUFDMUIsMEJBM0ZZO01BNEZaLGdCQUFnQjtNQUNoQixrQkFBa0I7TUFDbEIsU0FBUztNQUNULE9BQU87TUFDUCxXQUFXO01BQ1gsZUFBZTtNQUNmLGtCQUFrQjtNQUNsQixpQkFBaUI7TUFDakIseUJBQXlCLEVBQUE7RUFLL0I7RUFDRSwwQ0FBMEM7RUFDMUMsZ0RBQWdEO0VBQ2hELGtEQUFrRDtFQUNsRCxpREFBaUQsRUFBQTtFQUduRDtFQUNFLGFBQWEsRUFBQSIsImZpbGUiOiJwcm9qZWN0cy93ZWJBcHAvc3JjL2FwcC9pbWFnZS12aWV3ZXIvaW1hZ2Utdmlld2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHByZWZpeDogJ2ltZy12aWV3ZXInO1xyXG4kc2l6ZTogMTJweDtcclxuJGNvbG9yOiByZ2JhKDAsIDAsIDAsIC42NSk7XHJcbiRib3JkZXJDb2xvcjogbm9uZTtcclxuJGZ1bGw6IDEwMCU7XHJcblxyXG4uI3skcHJlZml4fSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgZm9udC1mYW1pbHk6IENvbnNvbGFzLCBNZW5sbywgQ291cmllciwgbW9ub3NwYWNlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgY29sb3I6ICRjb2xvcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQ1MHB4O1xyXG5cclxuICAuI3skcHJlZml4fS1wYW5lbCB7XHJcbiAgICB3aWR0aDogJGZ1bGw7XHJcbiAgICBoZWlnaHQ6ICRmdWxsO1xyXG4gICAgZm9udC1zaXplOiAkc2l6ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRib3JkZXJDb2xvcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuXHJcbiAgICAmLWhlYWRlciB7XHJcbiAgICAgIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGJvcmRlckNvbG9yO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgd2lkdGg6ICRmdWxsO1xyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xyXG5cclxuICAgICAgJi1wZGYge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAxMnB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLW9wZXJhdGlvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAxMnB4O1xyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIG1hcmdpbjogMCAzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi1ib2R5IHtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBmb250LXNpemU6ICRzaXplO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAuc3dpdGNoIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGNvbG9yOiAjY2NjY2NjO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJi1wcmV2IHtcclxuICAgICAgICBAZXh0ZW5kIC5zd2l0Y2g7XHJcbiAgICAgICAgbGVmdDogMTJweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi1uZXh0IHtcclxuICAgICAgICBAZXh0ZW5kIC5zd2l0Y2g7XHJcbiAgICAgICAgcmlnaHQ6IDEycHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYtY29udGVudCB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi1oYXMtZm9vdGVyIHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYtZm9vdGVyIHtcclxuICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwIDAgNHB4IDRweDtcclxuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRib3JkZXJDb2xvcjtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjYWNhY2E7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLml2LWxvYWRlciB7XHJcbiAgYm9yZGVyLXRvcDogMS4xZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gIGJvcmRlci1yaWdodDogMS4xZW0gc29saWQgcmdiYSgzNiwgMjM5LCA0MywgMC43KTtcclxuICBib3JkZXItYm90dG9tOiAxLjFlbSBzb2xpZCByZ2JhKDI1NCwgMjAyLCA1NSwgMC43KTtcclxuICBib3JkZXItbGVmdDogMS4xZW0gc29saWQgcmdiYSgyNTQsIDIwNywgMjE5LCAwLjcpO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLml2LXNuYXAtdmlld3tcclxuICBkaXNwbGF5OiBub25lO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/image-viewer/image-viewer.component.ts":
/*!********************************************************!*\
  !*** ./src/app/image-viewer/image-viewer.component.ts ***!
  \********************************************************/
/*! exports provided: ImgViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgViewerComponent", function() { return ImgViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var iv_viewer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! iv-viewer */ "../../node_modules/iv-viewer/lib/index.js");
/* harmony import */ var iv_viewer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(iv_viewer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _image_viewer_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image-viewer.config */ "./src/app/image-viewer/image-viewer.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//based on https://github.com/LZHD/ng-picture-viewer
//Copyright 2019 Tim Wentzlau
// Licensed under MIT





var ImgViewerComponent = /** @class */ (function () {
    function ImgViewerComponent(el, renderer, doc, config) {
        this.el = el;
        this.renderer = renderer;
        this.doc = doc;
        this.config = config;
        this.images = [];
        this.showOperate = true;
        this.zoom = true;
        this.rotate = true;
        this.reset = true;
        this.fullscreen = true;
        this.download = true;
        this.defaultName = 'download';
        this.prevChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.nextChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closeViewer = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ROTATE_ANGLE = 90;
        this.currentImgIndex = 1;
        this.imgTotal = 0;
        this.zoomValue = 100;
        this.isVertical = false;
        this.imgRotate = 0;
        this.element = this.el.nativeElement;
        this.imgViewerConfig = new _image_viewer_config__WEBPACK_IMPORTED_MODULE_3__["ImgViewerConfig"]();
        this.ivViewerType = this.imgViewerConfig.ivViewerType;
        this.imageViewerType = this.imgViewerConfig.imageViewerType;
        if (this.config && this.config.ivViewerType) {
            this.ivViewerType = Object.assign(this.ivViewerType, this.config.ivViewerType);
        }
        if (this.config && this.config.imageViewerType) {
            this.imageViewerType = Object.assign(this.imageViewerType, this.config.imageViewerType);
        }
    }
    ImgViewerComponent.prototype.ngOnInit = function () {
        this.imgTotal = this.images.length;
    };
    ImgViewerComponent.prototype.ngAfterViewInit = function () {
        this.initImgViewer();
    };
    ImgViewerComponent.prototype.zoomInImg = function () {
        this.zoomValue += 10;
        this.imageViewer$.zoom(this.zoomValue);
    };
    ImgViewerComponent.prototype.zoomOutImg = function () {
        if (this.zoomValue === 100) {
            return;
        }
        this.zoomValue -= 10;
        if (this.zoomValue < 0) {
            this.zoomValue = 0;
        }
        this.imageViewer$.zoom(this.zoomValue);
    };
    ImgViewerComponent.prototype.rotateImg = function (isClockwise) {
        var _this = this;
        this.beforeRotateImg().then(function (time) {
            if (isClockwise) {
                _this.imgRotate += _this.ROTATE_ANGLE;
            }
            else {
                _this.imgRotate -= _this.ROTATE_ANGLE;
            }
            _this.isVertical = !_this.isVertical;
            time <= 0 ? _this.addImgRotate() : setTimeout(function () { return _this.addImgRotate(); }, time);
        });
    };
    ImgViewerComponent.prototype.fullscreenImg = function () {
        var _this = this;
        this.beforeRotateImg().then(function (time) {
            if (time <= 0) {
                _this.fullScreenViewer$.show(_this.images[_this.currentImgIndex - 1]);
                _this.addImgRotate(false);
            }
            else {
                setTimeout(function () {
                    _this.fullScreenViewer$.show(_this.images[_this.currentImgIndex - 1]);
                    _this.addImgRotate(false);
                }, time);
            }
        });
    };
    ImgViewerComponent.prototype.downloadImg = function () {
        var download = this.renderer.createElement('a');
        this.renderer.setAttribute(download, 'download', this.defaultName + "-" + this.currentImgIndex);
        this.renderer.setAttribute(download, 'display', 'none');
        this.renderer.setAttribute(download, 'href', this.images[this.currentImgIndex - 1]);
        this.renderer.setAttribute(download, 'target', '_blank');
        this.renderer.appendChild(this.element, download);
        download.click();
        this.renderer.removeChild(this.renderer, download);
    };
    ImgViewerComponent.prototype.prevImg = function () {
        this.isVertical = false;
        this.currentImgIndex--;
        if (this.currentImgIndex <= 0) {
            this.currentImgIndex = this.imgTotal;
        }
        //this.showImg();
        this.prevChange.emit(this.currentImgIndex);
    };
    ImgViewerComponent.prototype.nextImg = function () {
        this.isVertical = false;
        this.currentImgIndex++;
        if (this.currentImgIndex > this.imgTotal) {
            this.currentImgIndex = 1;
        }
        //this.showImg();
        this.nextChange.emit(this.currentImgIndex);
    };
    ImgViewerComponent.prototype.closeImageViewer = function () {
        this.closeViewer.emit();
    };
    ImgViewerComponent.prototype.initImgViewer = function () {
        this.imageViewer$ = new iv_viewer__WEBPACK_IMPORTED_MODULE_2___default.a(this.element.querySelector('.img-viewer-panel-body-content'), this.ivViewerType);
        this.fullScreenViewer$ = new iv_viewer__WEBPACK_IMPORTED_MODULE_2__["FullScreenViewer"](this.ivViewerType);
        //this.showImg();
    };
    ImgViewerComponent.prototype.addImgRotate = function (isAnimation) {
        var _this = this;
        if (isAnimation === void 0) { isAnimation = true; }
        var scale = '';
        if (this.isVertical && this.isImgOverVertical()) {
            scale = "scale(" + this.getScale() + ")";
        }
        var rotate = "rotate(" + this.imgRotate + "deg)";
        if (isAnimation) {
            this.addTransition('iv-snap-image');
            this.addTransition('iv-small-image');
        }
        this.setImgRotate('iv-snap-image', rotate, scale);
        this.setImgRotate('iv-small-image', rotate, scale);
        setTimeout(function () {
            if (isAnimation) {
                _this.removeAnimation('iv-snap-image');
                _this.removeAnimation('iv-small-image');
            }
        }, 500);
    };
    ImgViewerComponent.prototype.beforeRotateImg = function () {
        return __awaiter(this, void 0, void 0, function () {
            var time;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.zoomValue = 100;
                        time = this.imageViewer$._state.zoomValue - this.zoomValue;
                        return [4 /*yield*/, this.imageViewer$.resetZoom()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.imageViewer$.refresh()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, time === 0 ? 0 : 500];
                }
            });
        });
    };
    ImgViewerComponent.prototype.beforeShowImg = function () {
        this.imgRotate = 0;
        this.isVertical = false;
        var currentImg = this.element.querySelector('.iv-small-image');
        if (!!currentImg) {
            this.renderer.removeChild(this.element, currentImg);
        }
        this.setStyle('iv-loader', 'visibility', 'auto');
        this.setStyle('options-image-viewer', 'visibility', 'inherit');
    };
    ImgViewerComponent.prototype.showImg = function () {
        this.beforeShowImg();
        this.imageViewer$.load(this.images[0]);
    };
    ImgViewerComponent.prototype.isImgOverVertical = function () {
        var imgViewerHeight = this.element.clientHeight;
        var currentImgWidth = this.element.querySelector('.iv-small-image').clientWidth;
        return imgViewerHeight < currentImgWidth + 10;
    };
    ImgViewerComponent.prototype.getScale = function () {
        var imgViewerHeight = this.element.querySelector('.img-viewer-panel-body-content').clientHeight;
        var currentImgWidth = this.element.querySelector('.iv-small-image').clientWidth;
        var differenceWidth = currentImgWidth - imgViewerHeight;
        if (differenceWidth >= 250 && differenceWidth < 300) {
            return differenceWidth / imgViewerHeight - 0.1;
        }
        else if (differenceWidth >= 300 && differenceWidth < 400) {
            return differenceWidth / imgViewerHeight - 0.15;
        }
        else if (differenceWidth >= 400) {
            return differenceWidth / imgViewerHeight - 0.32;
        }
        else if (differenceWidth < 0) {
            return 1;
        }
        return 0.6;
    };
    ImgViewerComponent.prototype.addTransition = function (node) {
        this.setStyle(node, 'transition', '0.5s linear');
    };
    ImgViewerComponent.prototype.removeAnimation = function (node) {
        this.setStyle(node, 'transition', 'auto');
    };
    ImgViewerComponent.prototype.setImgRotate = function (node, roate, scale) {
        this.setStyle(node, 'transform', roate + " " + scale);
    };
    ImgViewerComponent.prototype.setStyle = function (node, name, value) {
        var _this = this;
        var elements = this.doc.querySelectorAll("." + node);
        elements.forEach(function (ele) { return _this.renderer.setStyle(ele, name, value); });
    };
    ImgViewerComponent.prototype.ngOnDestroy = function () {
        if (!!this.imageViewer$) {
            this.imageViewer$ = this.imageViewer$.destroy();
        }
        if (!!this.fullScreenViewer$) {
            this.fullScreenViewer$ = this.fullScreenViewer$.destroy();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ImgViewerComponent.prototype, "imgViewerClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ImgViewerComponent.prototype, "images", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ImgViewerComponent.prototype, "showOperate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ImgViewerComponent.prototype, "zoom", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ImgViewerComponent.prototype, "rotate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ImgViewerComponent.prototype, "reset", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ImgViewerComponent.prototype, "fullscreen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ImgViewerComponent.prototype, "download", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ImgViewerComponent.prototype, "defaultName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ImgViewerComponent.prototype, "prevChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ImgViewerComponent.prototype, "nextChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ImgViewerComponent.prototype, "closeViewer", void 0);
    ImgViewerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'nz-picture-viewer',
            template: __webpack_require__(/*! ./image-viewer.component.html */ "./src/app/image-viewer/image-viewer.component.html"),
            styles: [__webpack_require__(/*! ./image-viewer.component.scss */ "./src/app/image-viewer/image-viewer.component.scss")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            Document,
            _image_viewer_config__WEBPACK_IMPORTED_MODULE_3__["ImgViewerConfig"]])
    ], ImgViewerComponent);
    return ImgViewerComponent;
}());



/***/ }),

/***/ "./src/app/image-viewer/image-viewer.config.ts":
/*!*****************************************************!*\
  !*** ./src/app/image-viewer/image-viewer.config.ts ***!
  \*****************************************************/
/*! exports provided: ImgViewerConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgViewerConfig", function() { return ImgViewerConfig; });
var ImgViewerConfig = /** @class */ (function () {
    function ImgViewerConfig() {
        this.ivViewerType = {
            zoomValue: 100,
            maxZoom: 500,
            snapView: false,
            refreshOnResize: true,
            zoomOnMouseWheel: true,
        };
        this.imageViewerType = {
            zoomInToolTip: 'Zoom in',
            zoomOutToolTip: 'Zoom put',
            rotateLeftToolTip: 'Rotate left',
            rotateRightToolTip: 'Rotate right',
            resetToolTip: 'Reset tools',
            fullScreenToolTip: 'Full screen',
            downloadToolTip: 'Download',
        };
    }
    return ImgViewerConfig;
}());



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

/***/ "./src/app/media/media.component.css":
/*!*******************************************!*\
  !*** ./src/app/media/media.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy93ZWJBcHAvc3JjL2FwcC9tZWRpYS9tZWRpYS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/media/media.component.html":
/*!********************************************!*\
  !*** ./src/app/media/media.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!showImageViewer\">\r\n\t<nz-picture-viewer (closeViewer)=\"closeViewer()\" (prevChange)='nextImage($event)' (nextChange)='nextImage($event)' #imageViewer></nz-picture-viewer>\r\n</div>\r\n<div [hidden]=\"showImageViewer\">\r\n\t<div style=\"max-height: 80%;overflow-y: auto; \" nz-col nzSpan=\"8\">\r\n\t\t<nz-tree [nzData]=\"nodes\" [nzExpandedKeys]=\"defaultExpandedKeys\" nzAsyncData (nzClick)=\"nzEvent($event)\" (nzExpandChange)=\"nzEvent($event)\"> </nz-tree>\r\n\t</div>\r\n\t<div style=\"min-height:40px;max-height: 300px;overflow-y: auto; border-left: 1px solid black;\" nz-col nzSpan=\"16\">\r\n\t\t\r\n\t\t<nz-empty *ngIf=\"files.length==0\" nzNotFoundContent=\"No files in folder\"></nz-empty>\r\n\t\t<div (dblclick)=\"showImage(file.key)\"  style=\"display: inline-block;margin-left:5px; margin-bottom:5px;\" *ngFor=\"let file of files\" nzHoverable >\r\n\t\t\t<img alt=\"example\" [attr.src]=\"'data:image/png;base64,' + file.thumb\" />\r\n\t\t</div>\r\n\t\t<!-- <nz-card style=\"display: inline-block;\" *ngFor=\"let file of files\" nzHoverable style=\"width:140px\" >\r\n\t\t\t<img alt=\"example\" [attr.src]=\"'data:image/png;base64,' + file.data\" />\r\n\t\t\t<ng-template #coverTemplate>\r\n\t\t\t\t\r\n\t\t\t</ng-template>\r\n\t\t</nz-card> -->\r\n\t\t\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/media/media.component.ts":
/*!******************************************!*\
  !*** ./src/app/media/media.component.ts ***!
  \******************************************/
/*! exports provided: MediaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaComponent", function() { return MediaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_kervi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-kervi */ "../../dist/ngx-kervi/fesm5/ngx-kervi.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "../../node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../image-viewer/image-viewer.component */ "./src/app/image-viewer/image-viewer.component.ts");
// Copyright (c) 2019, Tim Wentzlau
// Licensed under MIT
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




var MediaComponent = /** @class */ (function (_super) {
    __extends(MediaComponent, _super);
    function MediaComponent() {
        var _this = _super.call(this) || this;
        _this.files = [];
        _this.showImageViewer = false;
        _this.directoryFiles = {};
        _this.nodes = [
            { title: 'root', key: '/' }
        ];
        _this.defaultExpandedKeys = [];
        return _this;
    }
    MediaComponent.prototype.ngOnInit = function () {
    };
    MediaComponent.prototype.nzEvent = function (event) {
        var _this = this;
        console.log('trev', event);
        var node = event.node;
        if (event.eventName === 'click') {
            this.files = [];
            this.kerviService.GetDirectory(node.key).then(function (d) {
                var files = d.files$.getValue();
                var _loop_1 = function (file) {
                    if (file.isFile) {
                        _this.kerviService.GetThumbnail(file.path).then(function (t) {
                            _this.files.push({ title: file.name, key: file.path, thumb: t });
                        });
                    }
                };
                for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
                    var file = files_1[_i];
                    _loop_1(file);
                }
            });
        }
        if (event.eventName === 'expand') {
            if (node && node.getChildren().length === 0 && node.isExpanded) {
                this.kerviService.GetDirectory(node.key).then(function (d) {
                    var files = d.files$.getValue();
                    var dirs = [];
                    for (var _i = 0, files_2 = files; _i < files_2.length; _i++) {
                        var file = files_2[_i];
                        if (!file.isFile) {
                            dirs.push({ title: file.name, key: file.path, isLeaf: false });
                        }
                    }
                    node.addChildren(dirs);
                });
            }
        }
    };
    MediaComponent.prototype.showImage = function (filePath) {
        var _this = this;
        this.showImageViewer = true;
        this.imageViewer.imgTotal = this.files.length;
        this.kerviService.GetFile(filePath).then(function (f) {
            _this.imageViewer.images = ['data:image/png;base64,' + f];
            _this.imageViewer.showImg();
        });
    };
    MediaComponent.prototype.nextImage = function (event) {
        var _this = this;
        console.log("ni", event);
        var filePath = this.files[this.imageViewer.currentImgIndex - 1].key;
        this.kerviService.GetFile(filePath).then(function (f) {
            _this.imageViewer.images = ['data:image/png;base64,' + f];
            _this.imageViewer.showImg();
        });
    };
    MediaComponent.prototype.closeViewer = function () {
        this.showImageViewer = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('nzTreeComponent'),
        __metadata("design:type", ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzTreeComponent"])
    ], MediaComponent.prototype, "nzTreeComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('imageViewer'),
        __metadata("design:type", _image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_3__["ImgViewerComponent"])
    ], MediaComponent.prototype, "imageViewer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MediaComponent.prototype, "files", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MediaComponent.prototype, "nodes", void 0);
    MediaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-media',
            template: __webpack_require__(/*! ./media.component.html */ "./src/app/media/media.component.html"),
            styles: [__webpack_require__(/*! ./media.component.css */ "./src/app/media/media.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MediaComponent);
    return MediaComponent;
}(ngx_kervi__WEBPACK_IMPORTED_MODULE_1__["KerviDirectoryComponent"]));



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

module.exports = __webpack_require__(/*! D:\tim privat\github\kervi\kervi-ui\kervi\ui\web\projects\webApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map