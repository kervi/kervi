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
        this.messageCount = 0;
        this.mpsTime = new Date;
        this.mps = 0;
        this.websocket = null;
        this.options = {
            userName: 'anonymous',
            password: null,
            address: null,
            onOpen: null,
            onClose: null,
            onAuthenticate: null,
            onAuthenticateFailed: null,
            onAuthenticateStart: null,
            onLogOff: null,
            onMPS: null,
            autoConnect: true,
            targetScope: null,
            protocol: 'ws',
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
        this.removeStreamHandler = (/**
         * @param {?} streamId
         * @param {?} streamEvent
         * @param {?} callback
         * @return {?}
         */
        function (streamId, streamEvent, callback) {
        });
        console.log('Kervi base spine init', this.options, constructorOptions);
        this.options = this.extend(this.options, constructorOptions);
        console.log('kbo', this.options);
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
            for (var id in self.rpcQueue) {
                /** @type {?} */
                var query = self.rpcQueue[id];
                if (query['callbackTimeout']) {
                    if (Date.now() - query['ts'] > query['timeout']) {
                        /** @type {?} */
                        var callback = query['callbackTimeout'];
                        hangingNodes.push(id);
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
                'callback': callback,
                'callbackTimeout': callbackTimeout,
                'timeout': timeout,
                'ts': Date.now(),
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
            var callback = this.rpcQueue[message.id]['callback'];
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
        // console.log('ev', message)
        /** @type {?} */
        var eventName = message.event;
        /** @type {?} */
        var id = message.id;
        /** @type {?} */
        var eventPath = eventName;
        if (id) {
            eventPath += '/' + id;
        }
        /** @type {?} */
        var value = null;
        if (message.args && message.args.length) {
            value = message.args[0];
        }
        for (var n = 0; (n < this.eventHandlers.length); n++) {
            /** @type {?} */
            var h = this.eventHandlers[n];
            if (h.eventName === eventPath)
                h.callback.call(value, id, value);
            else if (h.eventName === eventName)
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
        console.log('cmd', this, message);
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
        console.log('Kervi open', this, evt);
        this.isConnected = true;
        this.eventHandlers = [];
        this.streamHandlers = [];
        this.commandHandlers = [];
        this.queryHandlers = [];
        console.log('Kervi spine ready');
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
        console.log('Kervi spine on close', evt);
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
        console.log('Kervi on error', evt);
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
                this.eventHandlers.push({ 'eventName': eventName + '/' + id, callback: callback });
            else
                this.eventHandlers.push({ 'eventName': eventName, callback: callback });
            /** @type {?} */
            var cmd = { id: this.messageId++, 'messageType': 'registerEventHandler', 'event': eventName, 'eventId': id };
            //console.log('add event handler',cmd);
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
                        console.log('as', cmd);
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
        _this.removeStreamHandler = (/**
         * @param {?} streamId
         * @param {?} streamEvents
         * @return {?}
         */
        function (streamId, streamEvents) {
            var e_2, _a;
            if (streamEvents && streamEvents.length > 0) {
                try {
                    for (var streamEvents_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(streamEvents), streamEvents_2_1 = streamEvents_2.next(); !streamEvents_2_1.done; streamEvents_2_1 = streamEvents_2.next()) {
                        var event_2 = streamEvents_2_1.value;
                        //this.streamHandlers.push({'streamTag': streamId + '/' + event, callback: callback});
                        /** @type {?} */
                        var cmd = {
                            id: this.messageId++,
                            'messageType': 'removeStreamHandler',
                            'streamId': streamId,
                            'streamEvent': event_2
                        };
                        console.log('as', cmd);
                        this.websocket.send(JSON.stringify(cmd));
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (streamEvents_2_1 && !streamEvents_2_1.done && (_a = streamEvents_2.return)) _a.call(streamEvents_2);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            else {
                //this.streamHandlers.push({'streamTag': streamId, callback: callback});
                /** @type {?} */
                var cmd = {
                    id: this.messageId++,
                    'messageType': 'removeStreamHandler',
                    'streamId': streamId,
                    'streamEvent': event
                };
                console.log('as', cmd);
                this.websocket.send(JSON.stringify(cmd));
            }
        });
        console.log('kervi spine constructor');
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
            console.log('Kervi is connected');
            return;
        }
        /** @type {?} */
        var self = this;
        this.websocket = new WebSocket(this.options.protocol + '://' + this.options.address);
        this.websocket.binaryType = 'arraybuffer';
        this.websocket.onopen = (/**
         * @param {?} evt
         * @return {?}
         */
        function (evt) {
            console.log('kervi spine on open');
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
        var cmd = { id: this.messageId++, 'messageType': 'authenticate', 'userName': userName, 'password': password };
        console.log('swa', cmd);
        this.websocket.send(JSON.stringify(cmd));
    };
    /**
     * @return {?}
     */
    KerviWSSpine.prototype.logoff = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var cmd = { id: this.messageId++, 'messageType': 'logoff', 'session': this.sessionId };
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
        if (streamBlob === void 0) { streamBlob = null; }
        // if (message.messageType !== 'stream') {
        //     console.log('on m', message);
        // }
        /** @type {?} */
        var self = this;
        /** @type {?} */
        var now = new Date();
        /** @type {?} */
        var fpsDiff = now.getTime() - this.mpsTime.getTime();
        /** @type {?} */
        var seconds = fpsDiff / 1000;
        this.messageCount++;
        if (seconds > 1) {
            this.mps = Math.round(this.messageCount / seconds);
            this.messageCount = 0;
            this.mpsTime = now;
            if (this.options.onMPS) {
                this.options.onMPS.call(this.options.targetScope, this.mps);
            }
        }
        if (message.messageType === 'authenticate') {
            console.log('authenticate');
            this.doAuthenticate = true;
            if (this.options.userName)
                this.authenticate(this.options.userName, this.options.password);
            else
                this.options.onAuthenticate.call(this.options.targetScope, message);
        }
        else if (message.messageType === 'authentication_failed') {
            console.log('authentication failed', this.options.userName);
            if (this.options.userName == 'anonymous') {
                this.allowAnonymous = false;
                this.options.userName = null;
                this.options.password = null;
                this.sessionId = null;
                if (self.options.onLogOff) {
                    self.options.onLogOff.call(self.options.targetScope, message);
                }
            }
            else
                this.options.onAuthenticateFailed.call(this.options.targetScope, message);
        }
        else if (message.messageType === 'session_authenticated') {
            /** @type {?} */
            var date = new Date();
            date.setTime(date.getTime() + (2 * 60 * 60 * 1000));
            /** @type {?} */
            var expires = '; expires=' + date.toUTCString();
            this.sessionId = message.session;
            document.cookie = 'kervisession' + '=' + message.session + expires + '; path=/';
            setTimeout((/**
             * @return {?}
             */
            function () {
                console.log('to', self.options);
                if (self.options.onOpen)
                    self.options.onOpen.call(self.options.targetScope, self.firstOnOpen, message);
                self.firstOnOpen = false;
            }), 100);
        }
        else if (message.messageType == 'session_logoff') {
            if (self.options.onLogOff)
                self.options.onLogOff.call(self.options.targetScope, message);
            if (this.allowAnonymous && this.options.userName != 'anonymous') {
                this.authenticate('anonymous', null);
            }
            else {
                self.options.userName = null;
                self.options.password = null;
                self.sessionId = null;
            }
        }
        else if (message.messageType == 'response')
            this.handleRPCResponse(message);
        else if (message.messageType == 'event')
            this.handleEvent(message);
        else if (message.messageType == 'stream')
            this.handleStream(message, streamBlob);
        else if (message.messageType == 'command')
            this.handleCommand(message);
        else
            console.log('Kervi spine message unknown', this.rpcQueue, message);
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
        console.log('Kervi on error', evt);
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
        var cmd = { id: this.messageId++, 'messageType': 'registerCommandHandler', 'command': command };
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
        var cmd = { id: this.messageId++, 'messageType': 'registerQueryHandler', 'query': query };
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
        console.log('sec', arguments);
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
        var cmd = { id: this.messageId++, 'messageType': 'command', 'command': command, 'args': args };
        if (callback && callback instanceof Function)
            this.addRPCCallback(cmd.id.toString(), callback, null, 0);
        console.log('sendCommand', this, cmd);
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
        var cmd = { id: this.messageId++, 'messageType': 'query', 'query': query, 'args': args };
        this.addRPCCallback(cmd.id.toString(), callback, callbackTimeout, timeout);
        console.log('sendQuery', callback, cmd);
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
        var e = { id: this.messageId++, 'messageType': 'event', 'event': eventName, 'args': arguments };
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
        this.valueWidth = '3rem';
        this.buttonWidth = '25px';
        this.buttonHeight = '';
        this.switchWidth = '25px';
        this.switchHeight = '25px';
        this.gaugeWidth = '100px';
        this.gaugeHeight = '200px';
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
        this.appHealth = null;
        this.logLength = 5;
        this.layout = 'row';
        this.title = messageParameters.label;
        this.height = this.calcSize(messageParameters.height);
        this.width = this.calcSize(messageParameters.width);
        this.userLog = messageParameters.userLog;
        this.logLength = messageParameters.logLength;
        this.appHealth = messageParameters.app_health;
        if (messageParameters.type) {
            this.type = messageParameters.type;
        }
        if (messageParameters.layout) {
            this.layout = messageParameters.layout;
        }
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
            return '';
        else if (value === '')
            return '';
        else if (isNaN(value)) {
            return value;
        }
        else if (value > 0)
            return value + '%';
        else
            return '';
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
                //console.log('spa',messagePanel.panels);
                for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(messagePanel.panels), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var subMessagePanel = _c.value;
                    /** @type {?} */
                    var panel = new DashboardPanel(this, subMessagePanel);
                    this.subPanels.push(panel);
                    if (panel.type !== 'group')
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
            //console.log('rl', this);
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
            //console.log('dsc',deleteComponents);
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
        this.componentType = 'dashboard';
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
                        console.log('dashboard with null panel', this.id);
                        continue;
                    }
                    /** @type {?} */
                    var panel = new DashboardPanel(this, messagePanel);
                    /** @type {?} */
                    var sysPanel = true;
                    if (panel.id == 'header_center')
                        this.headerPanel = panel;
                    else if (panel.id == 'footer_left')
                        this.footerLeftPanel = panel;
                    else if (panel.id == 'footer_center')
                        this.footerCenterPanel = panel;
                    else if (panel.id == 'footer_right')
                        this.footerRightPanel = panel;
                    else if (panel.id == 'header_right')
                        this.sysPanel = panel;
                    else if (panel.id == 'controllers')
                        this.controllerPanel = panel;
                    else if (panel.id == 'background')
                        this.backgroundPanel = panel;
                    else if (panel.id == 'left_pad_x')
                        this.LeftPadXPanel = panel;
                    else if (panel.id == 'left_pad_y')
                        this.LeftPadYPanel = panel;
                    else if (panel.id == 'right_pad_x')
                        this.RightPadXPanel = panel;
                    else if (panel.id == 'right_pad_y')
                        this.RightPadYPanel = panel;
                    else {
                        sysPanel = false;
                        if (panel.type != 'group') {
                            if (this.currentPanel == null) {
                                this.currentPanel = new DashboardPanel(this, {
                                    'id': null,
                                    'name': '',
                                    'type': 'group',
                                    'components': [],
                                    'panels': [],
                                    'uiParameters': {
                                        'title': '',
                                        'width': 100,
                                        'height': 0,
                                        'userLog': false,
                                        'logLength': 0
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
                    'id': null,
                    'name': '',
                    'type': 'group',
                    'components': [],
                    'panels': [],
                    'uiParameters': {
                        'title': '',
                        'width': 100,
                        'height': 0,
                        'userLog': false,
                        'logLength': 0
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
        if (link.dashboardId == '*' || link.dashboardId == this.id || (link.dashboardId == '**default**' && this.isDefault)) {
            /** @type {?} */
            var panel = this.getDashboardPanelById(link.panelId, this.panels);
            if (!panel)
                panel = this.getDashboardPanelById(link.panelId, this.sysPanels);
            if (panel) {
                panel.components.push(new DashboardPanelComponent(link));
            }
            else {
                // console.log('adh',link);
                /** @type {?} */
                var messagePanel = {
                    id: link.panelId,
                    name: link.panelName,
                    type: 'panel',
                    uiParameters: {
                        'title': '',
                        'width': 0,
                        'height': 0,
                        'userLog': false,
                        'logLength': 0
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
        this.kerviService.spine.removeStreamHandler(this.streamId, this.events, null);
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
        this.lastAppPingTime = null;
        this.lastPingDiff = 0;
        this.appPingDiff$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.appPingDelay$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.mps$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
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
                self.spine.addEventHandler('appPing', null, (/**
                 * @param {?} id
                 * @param {?} data
                 * @return {?}
                 */
                function (id, data) {
                    // console.log('appPing', self.lastAppPingTime, id, data);
                    if (self.lastAppPingTime === null) {
                        self.lastAppPingTime = new Date();
                    }
                    else {
                        /** @type {?} */
                        var now = new Date();
                        /** @type {?} */
                        var pingDiff = now.getTime() - self.lastAppPingTime.getTime() - 1000;
                        /** @type {?} */
                        var pingDelay = now.getTime() - data.ts * 1000;
                        self.appPingDelay$.next(pingDelay);
                        self.lastAppPingTime = now;
                        if (pingDiff !== self.lastPingDiff) {
                            self.lastPingDiff = pingDiff;
                            self.appPingDiff$.next(self.lastPingDiff);
                        }
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
            onMPS: this.onMPS,
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
     * @param {?} mps
     * @return {?}
     */
    KerviBaseService.prototype.onMPS = /**
     * @private
     * @param {?} mps
     * @return {?}
     */
    function (mps) {
        this.mps$.next(mps);
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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2VydmktanMuanMubWFwIiwic291cmNlcyI6WyJuZzovL2tlcnZpLWpzL2xpYi9zcGluZS9rZXJ2aS1zcGluZWJhc2UudHMiLCJuZzovL2tlcnZpLWpzL2xpYi9zcGluZS9rZXJ2aS13cy50cyIsIm5nOi8va2VydmktanMvbGliL3NwaW5lL2tlcnZpLXJtcS50cyIsIm5nOi8va2VydmktanMvbGliL21vZGVscy9JQ29tcG9uZW50Lm1vZGVsLnRzIiwibmc6Ly9rZXJ2aS1qcy9saWIvbW9kZWxzL0tlcnZpVmFsdWVzLm1vZGVsLnRzIiwibmc6Ly9rZXJ2aS1qcy9saWIvbW9kZWxzL0NvbXBvbmVudFJlZi50cyIsIm5nOi8va2VydmktanMvbGliL21vZGVscy9jb250cm9sbGVyLm1vZGVsLnRzIiwibmc6Ly9rZXJ2aS1qcy9saWIvbW9kZWxzL2Rhc2hib2FyZC5tb2RlbC50cyIsIm5nOi8va2VydmktanMvbGliL21vZGVscy9hY3Rpb24ubW9kZWwudHMiLCJuZzovL2tlcnZpLWpzL2xpYi9tb2RlbHMvZmFjdG9yeS50cyIsIm5nOi8va2VydmktanMvbGliL21vZGVscy9maWxlLm1vZGVsLnRzIiwibmc6Ly9rZXJ2aS1qcy9saWIvbW9kZWxzL3N0cmVhbS5tb2RlbC50cyIsIm5nOi8va2VydmktanMvbGliL2tlcnZpLWpzLnNlcnZpY2UudHMiLCJuZzovL2tlcnZpLWpzL2xpYi9rZXJ2aS1qcy5jb21wb25lbnQudHMiLCJuZzovL2tlcnZpLWpzL2xpYi9rZXJ2aS1qcy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCBUaW0gV2VudHpsYXVcclxuLy8gTGljZW5zZWQgdW5kZXIgTUlUXHJcblxyXG5leHBvcnQgY2xhc3MgIEtlcnZpU3BpbmVCYXNlIHtcclxuXHJcbiAgICBwdWJsaWMgaXNDb25uZWN0ZWQgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBkb0F1dGhlbnRpY2F0ZSA9IGZhbHNlO1xyXG5cclxuICAgIHNlc3Npb25JZCA9IG51bGw7XHJcbiAgICBxdWVyeUhhbmRsZXJzID0gW107XHJcbiAgICBjb21tYW5kSGFuZGxlcnMgPSBbXTtcclxuICAgIGV2ZW50SGFuZGxlcnMgPSBbXTtcclxuICAgIHN0cmVhbUhhbmRsZXJzID0gW107XHJcbiAgICBycGNRdWV1ZSA9IHt9O1xyXG4gICAgcmVhZHkgPSBmYWxzZTtcclxuICAgIG1lc3NhZ2VJZCA9IDA7XHJcbiAgICBzZW5zb3JzID0ge307XHJcbiAgICBjb250cm9sbGVycyA9IHt9O1xyXG4gICAgc2Vuc29yVHlwZXMgPSBbXTtcclxuICAgIGNvbnRyb2xsZXJUeXBlcyA9IFtdO1xyXG4gICAgdmlzaW9uUmVnaW9ucyA9IFtdO1xyXG4gICAgYXBwbGljYXRpb24gPSBudWxsO1xyXG4gICAgYWxsb3dBbm9ueW1vdXMgPSB0cnVlO1xyXG4gICAgZmlyc3RPbk9wZW4gPSB0cnVlO1xyXG4gICAgbWVzc2FnZUNvdW50ID0gMDtcclxuICAgIG1wc1RpbWUgPSBuZXcgRGF0ZTtcclxuICAgIG1wcyA9IDA7XHJcblxyXG4gICAgcHJvdGVjdGVkIHdlYnNvY2tldCA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIG9wdGlvbnM6IGFueSA9IHtcclxuICAgICAgICAgICAgdXNlck5hbWU6ICdhbm9ueW1vdXMnLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogbnVsbCxcclxuICAgICAgICAgICAgYWRkcmVzczogbnVsbCxcclxuICAgICAgICAgICAgb25PcGVuOiBudWxsLFxyXG4gICAgICAgICAgICBvbkNsb3NlOiBudWxsLFxyXG4gICAgICAgICAgICBvbkF1dGhlbnRpY2F0ZTogbnVsbCxcclxuICAgICAgICAgICAgb25BdXRoZW50aWNhdGVGYWlsZWQ6IG51bGwsXHJcbiAgICAgICAgICAgIG9uQXV0aGVudGljYXRlU3RhcnQ6IG51bGwsXHJcbiAgICAgICAgICAgIG9uTG9nT2ZmOiBudWxsLFxyXG4gICAgICAgICAgICBvbk1QUzogbnVsbCxcclxuICAgICAgICAgICAgYXV0b0Nvbm5lY3Q6IHRydWUsXHJcbiAgICAgICAgICAgIHRhcmdldFNjb3BlOiBudWxsLFxyXG4gICAgICAgICAgICBwcm90b2NvbDogJ3dzJyxcclxuICAgICAgICAgICAgYXBpVG9rZW46IG51bGxcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY29uc3RydWN0b3JPcHRpb25zKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0tlcnZpIGJhc2Ugc3BpbmUgaW5pdCcsIHRoaXMub3B0aW9ucywgY29uc3RydWN0b3JPcHRpb25zKTtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLmV4dGVuZCh0aGlzLm9wdGlvbnMsIGNvbnN0cnVjdG9yT3B0aW9ucyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2tibycsIHRoaXMub3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0KCk7XHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgc2V0SW50ZXJ2YWwoXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGhhbmdpbmdOb2RlcyA9IFtdXHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGlkIGluIHNlbGYucnBjUXVldWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcXVlcnkgPSBzZWxmLnJwY1F1ZXVlW2lkXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocXVlcnlbJ2NhbGxiYWNrVGltZW91dCddKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChEYXRlLm5vdygpIC0gcXVlcnlbJ3RzJ10gPiBxdWVyeVsndGltZW91dCddKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IHF1ZXJ5WydjYWxsYmFja1RpbWVvdXQnXTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5naW5nTm9kZXMucHVzaChpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHNlbGYub3B0aW9ucy50YXJnZXRTY29wZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGlkIG9mIGhhbmdpbmdOb2Rlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzZWxmLnJwY1F1ZXVlW2lkXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGV4dGVuZCguLi5wOiBhbnlbXSlcclxuICAgIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yKGxldCBrZXkgaW4gcFtpXSkge1xyXG4gICAgICAgICAgICAgICAgaWYocFtpXS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcFswXVtrZXldID0gcFtpXVtrZXldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBhZGRSUENDYWxsYmFjayhpZDogc3RyaW5nLCBjYWxsYmFjaywgY2FsbGJhY2tUaW1lb3V0LCB0aW1lb3V0KSB7XHJcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucnBjUXVldWVbaWRdID0ge1xyXG4gICAgICAgICAgICAgICAgJ2NhbGxiYWNrJzogY2FsbGJhY2ssXHJcbiAgICAgICAgICAgICAgICAnY2FsbGJhY2tUaW1lb3V0JzogY2FsbGJhY2tUaW1lb3V0LFxyXG4gICAgICAgICAgICAgICAgJ3RpbWVvdXQnOiB0aW1lb3V0LFxyXG4gICAgICAgICAgICAgICAgJ3RzJzogRGF0ZS5ub3coKSxcclxuICAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBoYW5kbGVSUENSZXNwb25zZShtZXNzYWdlKXtcclxuICAgICAgICBpZiAobWVzc2FnZS5pZCBpbiB0aGlzLnJwY1F1ZXVlKXtcclxuICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gdGhpcy5ycGNRdWV1ZVttZXNzYWdlLmlkXVsnY2FsbGJhY2snXTtcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKXtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnJwY1F1ZXVlW21lc3NhZ2UuaWRdO1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzLm9wdGlvbnMudGFyZ2V0U2NvcGUsbWVzc2FnZS5yZXNwb25zZSxtZXNzYWdlLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgaGFuZGxlRXZlbnQobWVzc2FnZSl7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2V2JywgbWVzc2FnZSlcclxuICAgICAgICBjb25zdCBldmVudE5hbWUgPSBtZXNzYWdlLmV2ZW50O1xyXG4gICAgICAgIGNvbnN0IGlkID0gbWVzc2FnZS5pZDtcclxuXHJcbiAgICAgICAgbGV0IGV2ZW50UGF0aD1ldmVudE5hbWU7XHJcbiAgICAgICAgaWYgKGlkKSB7XHJcbiAgICAgICAgICAgIGV2ZW50UGF0aCArPSAnLycgKyBpZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB2YWx1ZSA9IG51bGw7XHJcbiAgICAgICAgaWYobWVzc2FnZS5hcmdzICYmIG1lc3NhZ2UuYXJncy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSBtZXNzYWdlLmFyZ3NbMF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcih2YXIgbiA9IDA7IChuIDwgdGhpcy5ldmVudEhhbmRsZXJzLmxlbmd0aCk7IG4rKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBoID0gdGhpcy5ldmVudEhhbmRsZXJzW25dO1xyXG4gICAgICAgICAgICBpZiAoaC5ldmVudE5hbWUgPT09IGV2ZW50UGF0aClcclxuICAgICAgICAgICAgICAgIGguY2FsbGJhY2suY2FsbCh2YWx1ZSxpZCx2YWx1ZSk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGguZXZlbnROYW1lID09PSBldmVudE5hbWUpXHJcbiAgICAgICAgICAgICAgICBoLmNhbGxiYWNrLmNhbGwodmFsdWUsaWQsdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgaGFuZGxlU3RyZWFtKG1lc3NhZ2UsIHN0cmVhbUJsb2IpIHtcclxuICAgICAgICBjb25zdCBzdHJlYW1UYWcgPSBtZXNzYWdlLnN0cmVhbUlkICsgJy8nICsgbWVzc2FnZS5zdHJlYW1FdmVudCA7XHJcbiAgICAgICAgZm9yIChsZXQgbiA9IDA7IChuIDwgdGhpcy5zdHJlYW1IYW5kbGVycy5sZW5ndGgpOyBuKyspIHtcclxuICAgICAgICAgICAgY29uc3QgaCA9IHRoaXMuc3RyZWFtSGFuZGxlcnNbbl07XHJcbiAgICAgICAgICAgIGlmIChoLnN0cmVhbVRhZyA9PT0gc3RyZWFtVGFnKSB7XHJcbiAgICAgICAgICAgICAgICBoLmNhbGxiYWNrLmNhbGwobWVzc2FnZS5zdHJlYW1JZCwgbWVzc2FnZS5zdHJlYW1JZCwgbWVzc2FnZS5zdHJlYW1FdmVudCwgc3RyZWFtQmxvYik7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaC5zdHJlYW1UYWcgPT09IG1lc3NhZ2Uuc3RyZWFtSWQpIHtcclxuICAgICAgICAgICAgICAgIGguY2FsbGJhY2suY2FsbChtZXNzYWdlLnN0cmVhbUlkLCBtZXNzYWdlLnN0cmVhbUlkLCBtZXNzYWdlLnN0cmVhbUV2ZW50LCBzdHJlYW1CbG9iKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgaGFuZGxlQ29tbWFuZChtZXNzYWdlKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnY21kJyx0aGlzLG1lc3NhZ2UpO1xyXG4gICAgICAgIHZhciBjb21tYW5kPW1lc3NhZ2UuY29tbWFuZFxyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBhcmdzPW51bGw7XHJcbiAgICAgICAgaWYobWVzc2FnZS5hcmdzICYmIG1lc3NhZ2UuYXJncy5sZW5ndGgpe1xyXG4gICAgICAgICAgICBhcmdzPW1lc3NhZ2UuYXJnc1swXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yKHZhciBuPTA7KG48dGhpcy5jb21tYW5kSGFuZGxlcnMubGVuZ3RoKTtuKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgYz10aGlzLmNvbW1hbmRIYW5kbGVyc1tuXTtcclxuICAgICAgICAgICAgaWYgKGMuY29tbWFuZD09Y29tbWFuZClcclxuICAgICAgICAgICAgICAgIGMuY2FsbGJhY2suY2FsbCh0aGlzLGFyZ3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgY29ubmVjdCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uT3BlbihldnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnS2Vydmkgb3BlbicsIHRoaXMsIGV2dCk7XHJcblxyXG4gICAgICAgIHRoaXMuaXNDb25uZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVycyA9IFtdO1xyXG4gICAgICAgIHRoaXMuc3RyZWFtSGFuZGxlcnMgPSBbXTtcclxuICAgICAgICB0aGlzLmNvbW1hbmRIYW5kbGVycyA9IFtdO1xyXG4gICAgICAgIHRoaXMucXVlcnlIYW5kbGVycyA9IFtdO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdLZXJ2aSBzcGluZSByZWFkeScpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25DbG9zZShldnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnS2Vydmkgc3BpbmUgb24gY2xvc2UnLCBldnQpO1xyXG4gICAgICAgIHRoaXMuaXNDb25uZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm9uQ2xvc2UpXHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5vbkNsb3NlLmNhbGwodGhpcy5vcHRpb25zLnRhcmdldFNjb3BlLGV2dCk7XHJcbiAgICAgICAgdGhpcy5maXJzdE9uT3BlbiA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hdXRvQ29ubmVjdCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5jb25uZWN0KCk7XHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXV0aGVudGljYXRlKHVzZXJOYW1lLCBwYXNzd29yZCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9nb2ZmKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25NZXNzYWdlKGV2dCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25FcnJvcihldnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnS2Vydmkgb24gZXJyb3InLCBldnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRDb21tYW5kSGFuZGxlciAoY29tbWFuZDogc3RyaW5nLCBjYWxsYmFjaykge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkUXVlcnlIYW5kbGVyKHF1ZXJ5OiBzdHJpbmcsIGNhbGxiYWNrKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRFdmVudEhhbmRsZXIgPSBmdW5jdGlvbihldmVudE5hbWU6IHN0cmluZywgaWQ6IHN0cmluZywgY2FsbGJhY2spIHtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyBhZGRTdHJlYW1IYW5kbGVyID0gZnVuY3Rpb24oc3RyZWFtSWQ6IHN0cmluZywgc3RyZWFtRXZlbnQ6IHN0cmluZ1tdLCBjYWxsYmFjaykge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlU3RyZWFtSGFuZGxlciA9IGZ1bmN0aW9uKHN0cmVhbUlkOiBzdHJpbmcsIHN0cmVhbUV2ZW50OiBzdHJpbmdbXSwgY2FsbGJhY2spIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNlbmRDb21tYW5kKGNvbW1hbmQ6IHN0cmluZywgLi4ucDogYW55W10pIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNlbmRRdWVyeShxdWVyeSwgLi4ucDogYW55W10pIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRyaWdnZXJFdmVudChldmVudE5hbWU6IHN0cmluZywgaWQ6IHN0cmluZykge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RyZWFtRGF0YShzdHJlYW1faWQ6IHN0cmluZywgZXZlbnQ6IHN0cmluZyAsIGRhdGE6IGFueSkge1xyXG5cclxuICAgIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIFRpbSBXZW50emxhdVxyXG4vLyBMaWNlbnNlZCB1bmRlciBNSVRcclxuaW1wb3J0IHtLZXJ2aVNwaW5lQmFzZX0gZnJvbSAnLi9rZXJ2aS1zcGluZWJhc2UnXHJcbmV4cG9ydCBjbGFzcyAgS2VydmlXU1NwaW5lIGV4dGVuZHMgS2VydmlTcGluZUJhc2V7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY29uc3RydWN0b3JPcHRpb25zKXtcclxuICAgICAgICBzdXBlcihjb25zdHJ1Y3Rvck9wdGlvbnMpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdrZXJ2aSBzcGluZSBjb25zdHJ1Y3RvcicpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBjb25uZWN0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzQ29ubmVjdGVkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdLZXJ2aSBpcyBjb25uZWN0ZWQnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLndlYnNvY2tldCA9IG5ldyBXZWJTb2NrZXQodGhpcy5vcHRpb25zLnByb3RvY29sICsgJzovLycgKyB0aGlzLm9wdGlvbnMuYWRkcmVzcyk7XHJcbiAgICAgICAgdGhpcy53ZWJzb2NrZXQuYmluYXJ5VHlwZSA9ICdhcnJheWJ1ZmZlcic7XHJcbiAgICAgICAgdGhpcy53ZWJzb2NrZXQub25vcGVuID0gZnVuY3Rpb24oZXZ0KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdrZXJ2aSBzcGluZSBvbiBvcGVuJyk7XHJcbiAgICAgICAgICAgIHNlbGYub25PcGVuKGV2dCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy53ZWJzb2NrZXQub25jbG9zZSA9IGZ1bmN0aW9uKGV2dCkge1xyXG4gICAgICAgICAgICBzZWxmLm9uQ2xvc2UoZXZ0KSA7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy53ZWJzb2NrZXQub25tZXNzYWdlID0gZnVuY3Rpb24oZXZ0KSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZXZ0LmRhdGEgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gSlNPTi5wYXJzZShldnQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm9uTWVzc2FnZShtZXNzYWdlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGpzb25MZW4gPSBuZXcgSW50MzJBcnJheShldnQuZGF0YS5zbGljZSgwLCA0KSlbMF07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBqc29uQmxvYiA9IGV2dC5kYXRhLnNsaWNlKDQsIGpzb25MZW4gKyA0KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0cmVhbUJsb2IgPSBldnQuZGF0YS5zbGljZSg0ICsganNvbkxlbik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1dGY4ZGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcigpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaiA9IHV0ZjhkZWNvZGVyLmRlY29kZShqc29uQmxvYik7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm9uTWVzc2FnZShKU09OLnBhcnNlKGopLCBzdHJlYW1CbG9iKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMud2Vic29ja2V0Lm9uZXJyb3IgPSBmdW5jdGlvbihldnQpIHtcclxuICAgICAgICAgICAgc2VsZi5vbkVycm9yKGV2dCk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXV0aGVudGljYXRlKHVzZXJOYW1lLCBwYXNzd29yZCkge1xyXG4gICAgICAgIHRoaXMub3B0aW9ucy51c2VyTmFtZSA9IHVzZXJOYW1lO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucy5wYXNzd29yZCA9IHBhc3N3b3JkO1xyXG4gICAgICAgIGNvbnN0IGNtZCA9IHtpZDogdGhpcy5tZXNzYWdlSWQrKywgJ21lc3NhZ2VUeXBlJzogJ2F1dGhlbnRpY2F0ZScsICd1c2VyTmFtZSc6IHVzZXJOYW1lLCAncGFzc3dvcmQnOiBwYXNzd29yZH07XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3N3YScsIGNtZCk7XHJcbiAgICAgICAgdGhpcy53ZWJzb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeShjbWQpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9nb2ZmKCkge1xyXG4gICAgICAgIGNvbnN0IGNtZCA9IHtpZDogdGhpcy5tZXNzYWdlSWQrKywgJ21lc3NhZ2VUeXBlJzogJ2xvZ29mZicsICdzZXNzaW9uJzogdGhpcy5zZXNzaW9uSWR9O1xyXG4gICAgICAgIHRoaXMuc2Vzc2lvbklkID0gbnVsbDtcclxuICAgICAgICB0aGlzLndlYnNvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KGNtZCkpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTWVzc2FnZShtZXNzYWdlLCBzdHJlYW1CbG9iPSBudWxsKSB7XHJcbiAgICAgICAgLy8gaWYgKG1lc3NhZ2UubWVzc2FnZVR5cGUgIT09ICdzdHJlYW0nKSB7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdvbiBtJywgbWVzc2FnZSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGNvbnN0IG5vdyAgID0gbmV3IERhdGUoKTtcclxuICAgICAgICBjb25zdCBmcHNEaWZmID0gbm93LmdldFRpbWUoKSAtIHRoaXMubXBzVGltZS5nZXRUaW1lKCk7XHJcbiAgICAgICAgY29uc3Qgc2Vjb25kcyA9IGZwc0RpZmYgLyAxMDAwO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZUNvdW50ICsrO1xyXG4gICAgICAgIGlmIChzZWNvbmRzID4gMSkge1xyXG4gICAgICAgICAgdGhpcy5tcHMgPSBNYXRoLnJvdW5kKHRoaXMubWVzc2FnZUNvdW50IC8gc2Vjb25kcyk7XHJcbiAgICAgICAgICB0aGlzLm1lc3NhZ2VDb3VudCA9IDA7XHJcbiAgICAgICAgICB0aGlzLm1wc1RpbWUgPSBub3c7XHJcbiAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLm9uTVBTKSB7XHJcbiAgICAgICAgICAgICB0aGlzLm9wdGlvbnMub25NUFMuY2FsbCh0aGlzLm9wdGlvbnMudGFyZ2V0U2NvcGUsIHRoaXMubXBzKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtZXNzYWdlLm1lc3NhZ2VUeXBlID09PSAnYXV0aGVudGljYXRlJykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYXV0aGVudGljYXRlJyk7XHJcbiAgICAgICAgICAgIHRoaXMuZG9BdXRoZW50aWNhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnVzZXJOYW1lKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGUodGhpcy5vcHRpb25zLnVzZXJOYW1lLCB0aGlzLm9wdGlvbnMucGFzc3dvcmQpXHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5vbkF1dGhlbnRpY2F0ZS5jYWxsKHRoaXMub3B0aW9ucy50YXJnZXRTY29wZSxtZXNzYWdlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2UubWVzc2FnZVR5cGUgPT09ICdhdXRoZW50aWNhdGlvbl9mYWlsZWQnKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhdXRoZW50aWNhdGlvbiBmYWlsZWQnLCB0aGlzLm9wdGlvbnMudXNlck5hbWUpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnVzZXJOYW1lID09ICdhbm9ueW1vdXMnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsbG93QW5vbnltb3VzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMudXNlck5hbWUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnBhc3N3b3JkID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2Vzc2lvbklkID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGlmIChzZWxmLm9wdGlvbnMub25Mb2dPZmYpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLm9wdGlvbnMub25Mb2dPZmYuY2FsbChzZWxmLm9wdGlvbnMudGFyZ2V0U2NvcGUsIG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5vbkF1dGhlbnRpY2F0ZUZhaWxlZC5jYWxsKHRoaXMub3B0aW9ucy50YXJnZXRTY29wZSxtZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobWVzc2FnZS5tZXNzYWdlVHlwZSA9PT0gJ3Nlc3Npb25fYXV0aGVudGljYXRlZCcpe1xyXG4gICAgICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAgICAgICAgIGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArICgyICogNjAgKiA2MCAqIDEwMDApKTtcclxuICAgICAgICAgICAgY29uc3QgZXhwaXJlcyA9ICc7IGV4cGlyZXM9JyArIGRhdGUudG9VVENTdHJpbmcoKTtcclxuICAgICAgICAgICAgdGhpcy5zZXNzaW9uSWQgPSBtZXNzYWdlLnNlc3Npb247XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9ICdrZXJ2aXNlc3Npb24nICsgJz0nICsgbWVzc2FnZS5zZXNzaW9uICsgZXhwaXJlcyArICc7IHBhdGg9Lyc7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RvJywgc2VsZi5vcHRpb25zKTtcclxuICAgICAgICAgICAgICAgIGlmIChzZWxmLm9wdGlvbnMub25PcGVuKVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYub3B0aW9ucy5vbk9wZW4uY2FsbChzZWxmLm9wdGlvbnMudGFyZ2V0U2NvcGUsIHNlbGYuZmlyc3RPbk9wZW4sbWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5maXJzdE9uT3BlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9LCAxMDBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2UubWVzc2FnZVR5cGUgPT0gJ3Nlc3Npb25fbG9nb2ZmJykgeyBcclxuICAgICAgICAgICAgaWYgKHNlbGYub3B0aW9ucy5vbkxvZ09mZilcclxuICAgICAgICAgICAgICAgIHNlbGYub3B0aW9ucy5vbkxvZ09mZi5jYWxsKHNlbGYub3B0aW9ucy50YXJnZXRTY29wZSxtZXNzYWdlKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYWxsb3dBbm9ueW1vdXMgJiYgdGhpcy5vcHRpb25zLnVzZXJOYW1lICE9ICdhbm9ueW1vdXMnKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0aGVudGljYXRlKCdhbm9ueW1vdXMnLCBudWxsKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5vcHRpb25zLnVzZXJOYW1lID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHNlbGYub3B0aW9ucy5wYXNzd29yZCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnNlc3Npb25JZCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2UubWVzc2FnZVR5cGU9PSdyZXNwb25zZScpXHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUlBDUmVzcG9uc2UobWVzc2FnZSk7XHJcbiAgICAgICAgZWxzZSBpZiAobWVzc2FnZS5tZXNzYWdlVHlwZT09J2V2ZW50JylcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVFdmVudChtZXNzYWdlKTtcclxuICAgICAgICBlbHNlIGlmIChtZXNzYWdlLm1lc3NhZ2VUeXBlPT0nc3RyZWFtJylcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVTdHJlYW0obWVzc2FnZSwgc3RyZWFtQmxvYik7XHJcbiAgICAgICAgZWxzZSBpZiAobWVzc2FnZS5tZXNzYWdlVHlwZT09J2NvbW1hbmQnKVxyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUNvbW1hbmQobWVzc2FnZSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnS2Vydmkgc3BpbmUgbWVzc2FnZSB1bmtub3duJyx0aGlzLnJwY1F1ZXVlLCBtZXNzYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVycm9yKGV2dCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0tlcnZpIG9uIGVycm9yJyxldnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRDb21tYW5kSGFuZGxlciAoY29tbWFuZDpzdHJpbmcsY2FsbGJhY2spe1xyXG4gICAgICAgIHRoaXMuY29tbWFuZEhhbmRsZXJzLnB1c2goe2NvbW1hbmQ6Y29tbWFuZCxjYWxsYmFjazpjYWxsYmFja30pO1xyXG4gICAgICAgIHZhciBjbWQ9e2lkOnRoaXMubWVzc2FnZUlkKyssJ21lc3NhZ2VUeXBlJzoncmVnaXN0ZXJDb21tYW5kSGFuZGxlcicsJ2NvbW1hbmQnOmNvbW1hbmR9O1xyXG4gICAgICAgIHRoaXMud2Vic29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoY21kKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyBhZGRRdWVyeUhhbmRsZXIocXVlcnk6c3RyaW5nLGNhbGxiYWNrKXtcclxuICAgICAgICB0aGlzLnF1ZXJ5SGFuZGxlcnMucHVzaCh7cXVlcnk6cXVlcnksY2FsbGJhY2s6Y2FsbGJhY2t9KTtcclxuICAgICAgICB2YXIgY21kPXtpZDp0aGlzLm1lc3NhZ2VJZCsrLCdtZXNzYWdlVHlwZSc6J3JlZ2lzdGVyUXVlcnlIYW5kbGVyJywncXVlcnknOnF1ZXJ5fTtcclxuICAgICAgICB0aGlzLndlYnNvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KGNtZCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgYWRkRXZlbnRIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnROYW1lOiBzdHJpbmcsIGlkOiBzdHJpbmcsIGNhbGxiYWNrKXtcclxuICAgICAgICBpZiAoaWQpXHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRIYW5kbGVycy5wdXNoKHsnZXZlbnROYW1lJzpldmVudE5hbWUrJy8nK2lkLGNhbGxiYWNrOmNhbGxiYWNrfSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLmV2ZW50SGFuZGxlcnMucHVzaCh7J2V2ZW50TmFtZSc6ZXZlbnROYW1lLGNhbGxiYWNrOmNhbGxiYWNrfSk7XHJcbiAgICAgICAgdmFyIGNtZD17aWQ6dGhpcy5tZXNzYWdlSWQrKywnbWVzc2FnZVR5cGUnOidyZWdpc3RlckV2ZW50SGFuZGxlcicsJ2V2ZW50JzpldmVudE5hbWUsJ2V2ZW50SWQnOmlkfTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdhZGQgZXZlbnQgaGFuZGxlcicsY21kKTtcclxuICAgICAgICB0aGlzLndlYnNvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KGNtZCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgYWRkU3RyZWFtSGFuZGxlciA9IGZ1bmN0aW9uKHN0cmVhbUlkOiBzdHJpbmcsIHN0cmVhbUV2ZW50czogc3RyaW5nW10sIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKHN0cmVhbUV2ZW50cyAmJiBzdHJlYW1FdmVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBldmVudCBvZiBzdHJlYW1FdmVudHMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RyZWFtSGFuZGxlcnMucHVzaCh7J3N0cmVhbVRhZyc6IHN0cmVhbUlkICsgJy8nICsgZXZlbnQsIGNhbGxiYWNrOiBjYWxsYmFja30pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY21kID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLm1lc3NhZ2VJZCsrLFxyXG4gICAgICAgICAgICAgICAgICAgICdtZXNzYWdlVHlwZSc6ICdyZWdpc3RlclN0cmVhbUhhbmRsZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdzdHJlYW1JZCc6IHN0cmVhbUlkLFxyXG4gICAgICAgICAgICAgICAgICAgICdzdHJlYW1FdmVudCc6IGV2ZW50XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FzJywgY21kKTtcclxuICAgICAgICAgICAgICAgIHRoaXMud2Vic29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoY21kKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnN0cmVhbUhhbmRsZXJzLnB1c2goeydzdHJlYW1UYWcnOiBzdHJlYW1JZCwgY2FsbGJhY2s6IGNhbGxiYWNrfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNtZCA9IHtcclxuICAgICAgICAgICAgICAgIGlkOiB0aGlzLm1lc3NhZ2VJZCsrLFxyXG4gICAgICAgICAgICAgICAgJ21lc3NhZ2VUeXBlJzogJ3JlZ2lzdGVyU3RyZWFtSGFuZGxlcicsXHJcbiAgICAgICAgICAgICAgICAnc3RyZWFtSWQnOiBzdHJlYW1JZCxcclxuICAgICAgICAgICAgICAgICdzdHJlYW1FdmVudCc6IGV2ZW50XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhcycsIGNtZCk7XHJcbiAgICAgICAgICAgIHRoaXMud2Vic29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoY21kKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlU3RyZWFtSGFuZGxlciA9IGZ1bmN0aW9uKHN0cmVhbUlkOiBzdHJpbmcsIHN0cmVhbUV2ZW50czogc3RyaW5nW10pIHtcclxuICAgICAgICBpZiAoc3RyZWFtRXZlbnRzICYmIHN0cmVhbUV2ZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGV2ZW50IG9mIHN0cmVhbUV2ZW50cykge1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLnN0cmVhbUhhbmRsZXJzLnB1c2goeydzdHJlYW1UYWcnOiBzdHJlYW1JZCArICcvJyArIGV2ZW50LCBjYWxsYmFjazogY2FsbGJhY2t9KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNtZCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5tZXNzYWdlSWQrKyxcclxuICAgICAgICAgICAgICAgICAgICAnbWVzc2FnZVR5cGUnOiAncmVtb3ZlU3RyZWFtSGFuZGxlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3N0cmVhbUlkJzogc3RyZWFtSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3N0cmVhbUV2ZW50JzogZXZlbnRcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYXMnLCBjbWQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy53ZWJzb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeShjbWQpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vdGhpcy5zdHJlYW1IYW5kbGVycy5wdXNoKHsnc3RyZWFtVGFnJzogc3RyZWFtSWQsIGNhbGxiYWNrOiBjYWxsYmFja30pO1xyXG4gICAgICAgICAgICBjb25zdCBjbWQgPSB7XHJcbiAgICAgICAgICAgICAgICBpZDogdGhpcy5tZXNzYWdlSWQrKyxcclxuICAgICAgICAgICAgICAgICdtZXNzYWdlVHlwZSc6ICdyZW1vdmVTdHJlYW1IYW5kbGVyJyxcclxuICAgICAgICAgICAgICAgICdzdHJlYW1JZCc6IHN0cmVhbUlkLFxyXG4gICAgICAgICAgICAgICAgJ3N0cmVhbUV2ZW50JzogZXZlbnRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FzJywgY21kKTtcclxuICAgICAgICAgICAgdGhpcy53ZWJzb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeShjbWQpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyBzZW5kQ29tbWFuZChjb21tYW5kOnN0cmluZywuLi5wOmFueVtdKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnc2VjJyxhcmd1bWVudHMpO1xyXG4gICAgICAgIHZhciBhcmdzPVtdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBjYWxsYmFjaz1udWxsO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpPTA7KGk8cC5sZW5ndGgpO2krKyl7XHJcbiAgICAgICAgICAgIGlmIChwW2ldIGluc3RhbmNlb2YgRnVuY3Rpb24pXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaz1wW2ldO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBhcmdzLnB1c2gocFtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBjbWQ9e2lkOnRoaXMubWVzc2FnZUlkKyssJ21lc3NhZ2VUeXBlJzonY29tbWFuZCcsJ2NvbW1hbmQnOmNvbW1hbmQsJ2FyZ3MnOmFyZ3N9O1xyXG4gICAgICAgIGlmIChjYWxsYmFjayAmJiBjYWxsYmFjayBpbnN0YW5jZW9mIEZ1bmN0aW9uKVxyXG4gICAgICAgICAgICB0aGlzLmFkZFJQQ0NhbGxiYWNrKGNtZC5pZC50b1N0cmluZygpLCBjYWxsYmFjaywgbnVsbCwgMCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NlbmRDb21tYW5kJyx0aGlzLGNtZCk7XHJcbiAgICAgICAgdGhpcy53ZWJzb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeShjbWQpKTtcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIHNlbmRRdWVyeShxdWVyeSwuLi5wOmFueVtdKXtcclxuICAgICAgICB2YXIgYXJncz1bXTtcclxuICAgICAgICB2YXIgY2FsbGJhY2s9bnVsbDtcclxuICAgICAgICB2YXIgY2FsbGJhY2tUaW1lb3V0ID0gbnVsbFxyXG4gICAgICAgIHZhciB0aW1lb3V0ID0gMTAwMDBcclxuICAgICAgICBmb3IgKHZhciBpPTA7KGk8cC5sZW5ndGgpO2krKyl7XHJcbiAgICAgICAgICAgIGlmIChwW2ldIGluc3RhbmNlb2YgRnVuY3Rpb24pXHJcbiAgICAgICAgICAgICAgICBpZiAoIWNhbGxiYWNrKSBcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaz1wW2ldO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrVGltZW91dCA9IHBbaV07XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2tUaW1lb3V0KVxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXQgPSBwW2ldXHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgYXJncy5wdXNoKHBbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgICB2YXIgY21kPXtpZDp0aGlzLm1lc3NhZ2VJZCsrLCdtZXNzYWdlVHlwZSc6J3F1ZXJ5JywncXVlcnknOnF1ZXJ5LCdhcmdzJzphcmdzfTtcclxuICAgICAgICB0aGlzLmFkZFJQQ0NhbGxiYWNrKGNtZC5pZC50b1N0cmluZygpLGNhbGxiYWNrLCBjYWxsYmFja1RpbWVvdXQsIHRpbWVvdXQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzZW5kUXVlcnknLCBjYWxsYmFjayxjbWQpO1xyXG4gICAgICAgIHRoaXMud2Vic29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoY21kKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyB0cmlnZ2VyRXZlbnQoZXZlbnROYW1lOnN0cmluZyxpZDpzdHJpbmcpe1xyXG4gICAgICAgIHZhciBlPXtpZDp0aGlzLm1lc3NhZ2VJZCsrLCdtZXNzYWdlVHlwZSc6J2V2ZW50JywnZXZlbnQnOmV2ZW50TmFtZSwnYXJncyc6YXJndW1lbnRzfTtcclxuICAgICAgICB0aGlzLndlYnNvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KGUpKTtcclxuICAgIH07XHJcbn0iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIFRpbSBXZW50emxhdVxyXG4vLyBMaWNlbnNlZCB1bmRlciBNSVRcclxuaW1wb3J0IHtLZXJ2aVNwaW5lQmFzZX0gZnJvbSBcIi4va2Vydmktc3BpbmViYXNlXCI7XHJcbmRlY2xhcmUgdmFyIFN0b21wOmFueTtcclxuZXhwb3J0IGNsYXNzICBLZXJ2aVJNUVNwaW5lIGV4dGVuZHMgS2VydmlTcGluZUJhc2Uge1xyXG5cdHByaXZhdGUgc29ja2V0U2Vzc2lvbjpudWxsO1xyXG5cdHByaXZhdGUgZXhjaGFuZ2UgPSBcIi9leGNoYW5nZS9cIjtcclxuXHRcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgY29uc3RydWN0b3JPcHRpb25zKXtcclxuXHRcdHN1cGVyKGNvbnN0cnVjdG9yT3B0aW9ucyk7XHJcblx0XHRjb25zb2xlLmxvZyhcIktlcnZpIGlvIHNwaW5lIGluaXQgeVwiLCB0aGlzLm9wdGlvbnMsY29uc3RydWN0b3JPcHRpb25zKTtcclxuXHRcdFxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBvbk1RRXJyb3IoZnJhbWUpe1xyXG5cdFx0Y29uc29sZS5sb2coXCJNUSBlcnJvclwiLCBmcmFtZSk7XHJcblx0fVxyXG5cclxuXHRcclxuXHRwcm90ZWN0ZWQgY29ubmVjdCgpe1xyXG5cdFx0aWYgKHRoaXMuaXNDb25uZWN0ZWQpe1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIktlcnZpIGlzIGNvbm5lY3RlZFwiKTtcclxuXHRcdFx0cmV0dXJuXHJcblx0XHR9XHJcblx0XHR2YXIgc2VsZj10aGlzO1xyXG5cdFx0Ly92YXIgbXFVcmw9IHRoaXMub3B0aW9ucy5wcm90b2NvbCArIFwiOi8vXCIgKyB0aGlzLm9wdGlvbnMuYWRkcmVzc1xyXG5cdFx0dmFyIG1xVXJsPSBcIndzczovL21xLmtlcnZpLmlvOjE1NjczL3dzXCJcclxuXHRcdHRoaXMud2Vic29ja2V0ID0gU3RvbXAuY2xpZW50KG1xVXJsKTtcclxuXHRcdHRoaXMud2Vic29ja2V0LmhlYXJ0YmVhdC5pbmNvbWluZyA9IDA7XHJcblx0XHRzZWxmLmV4Y2hhbmdlID0gXCIvZXhjaGFuZ2UvXCIgKyAgc2VsZi5vcHRpb25zLmFwaVRva2VuLmFwcF9pZDtcclxuXHRcdGNvbnNvbGUubG9nKFwiZXhjaGFuZ2VcIiwgc2VsZi5leGNoYW5nZSlcclxuXHRcdHRoaXMud2Vic29ja2V0LmNvbm5lY3QoXHJcblx0XHRcdHNlbGYub3B0aW9ucy5hcGlUb2tlbi5hcGlfdG9rZW4sIFxyXG5cdFx0XHRcInVpXCIsIFxyXG5cdFx0XHRmdW5jdGlvbiAoZnJhbWUpe1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiTVEgY29ubmVjdFwiLCBmcmFtZSwgc2VsZi53ZWJzb2NrZXQsIHRoaXMsIHNlbGYpO1xyXG5cdFx0XHRcdHNlbGYuc29ja2V0U2Vzc2lvbiA9IGZyYW1lLmhlYWRlcnMuc2Vzc2lvbjtcclxuXHRcdFx0XHRzZWxmLmV4Y2hhbmdlID0gXCIvZXhjaGFuZ2UvXCIgKyAgc2VsZi5vcHRpb25zLmFwaVRva2VuLmFwcF9pZDtcclxuXHRcdFx0XHRzZWxmLndlYnNvY2tldC5zdWJzY3JpYmUoc2VsZi5leGNoYW5nZSwgZnVuY3Rpb24obWVzc2FnZSkge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJtcSBcIiwgbWVzc2FnZSk7XHJcblx0XHRcdFx0XHRpZiAobWVzc2FnZS5oZWFkZXJzW1widG9waWNcIl0pXHJcblx0XHRcdFx0XHRcdG1lc3NhZ2UuaGVhZGVyc1tcInRvcGljXCJdID0gbWVzc2FnZS5oZWFkZXJzW1widG9waWNcIl0ucmVwbGFjZShuZXcgUmVnRXhwKFwiXFxcXGNcIixcImdcIiksXCI6XCIpO1xyXG5cdFx0XHRcdFx0aWYgKG1lc3NhZ2UuY29tbWFuZD09XCJDT05ORUNURURcIil7XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZSBpZiAobWVzc2FnZS5oZWFkZXJzW1widG9waWNcIl0gPT0gXCJwaW5nXCIpXHJcblx0XHRcdFx0XHRcdHNlbGYub25QaW5nKG1lc3NhZ2UpO1xyXG5cdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHRzZWxmLm9uTWVzc2FnZShtZXNzYWdlKTtcclxuXHRcdFx0XHR9LCB7IH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzZWxmLm9uTVFFcnJvciwgc2VsZi5vcHRpb25zLmFwaVRva2VuLmFwaV9jaGFubmVsKTtcclxuXHR9XHJcblxyXG5cdFxyXG5cdG9uUGluZyhtZXNzYWdlKXtcclxuXHRcdGNvbnNvbGUubG9nKFwib25waW5nXCIsIHRoaXMub3B0aW9ucy5hcHBJZCwgbWVzc2FnZSwgKTtcclxuXHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdGlmICghdGhpcy5pc0Nvbm5lY3RlZCAmJiBtZXNzYWdlLmhlYWRlcnNbXCJjb25uZWN0aW9uX2lkXCJdPT0gc2VsZi5vcHRpb25zLmFwaVRva2VuLmFwcF9pZCl7XHJcblx0XHRcdHRoaXMub25PcGVuKG1lc3NhZ2UpO1xyXG5cdFx0XHR0aGlzLndlYnNvY2tldC5zZW5kKHNlbGYuZXhjaGFuZ2UsIHsgdG9waWM6XCJzZXNzaW9uOm5ld1wiLCByb3V0ZXJfaWQ6bWVzc2FnZS5oZWFkZXJzW1wicm91dGVyX2lkXCJdLCBzZXNzaW9uX2lkOnRoaXMuc29ja2V0U2Vzc2lvbn0sIFwie31cIilcdFxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0YXV0aGVudGljYXRlKHVzZXJOYW1lLCBwYXNzd29yZCl7XHJcblx0XHR0aGlzLm9wdGlvbnMudXNlck5hbWUgPSB1c2VyTmFtZTtcclxuXHRcdHRoaXMub3B0aW9ucy5wYXNzd29yZCA9IHBhc3N3b3JkO1xyXG5cdFx0aWYgKHRoaXMub3B0aW9ucy5vbkF1dGhlbnRpY2F0ZVN0YXJ0KVxyXG5cdFx0XHR0aGlzLm9wdGlvbnMub25BdXRoZW50aWNhdGVTdGFydC5jYWxsKHRoaXMub3B0aW9ucy50YXJnZXRTY29wZSk7XHJcblx0XHR2YXIgY21kPXtpZDp0aGlzLm1lc3NhZ2VJZCsrLFwibWVzc2FnZVR5cGVcIjpcImF1dGhlbnRpY2F0ZVwiLFwidXNlck5hbWVcIjp0aGlzLm9wdGlvbnMudXNlck5hbWUsIFwicGFzc3dvcmRcIjogdGhpcy5vcHRpb25zLnBhc3N3b3JkfTtcclxuXHRcdHRoaXMud2Vic29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoY21kKSk7XHJcblx0fVxyXG5cclxuXHRsb2dvZmYoKXtcclxuXHRcdC8vdGhpcy5vcHRpb25zLnVzZXJOYW1lID0gdGhpcy5hbGxvd0Fub255bW91cyA/IFwiYW5vbnltb3VzXCIgOiBudWxsO1xyXG5cdFx0Ly90aGlzLm9wdGlvbnMucGFzc3dvcmQgPSBudWxsO1xyXG5cclxuXHRcdHZhciBjbWQ9e2lkOnRoaXMubWVzc2FnZUlkKyssXCJtZXNzYWdlVHlwZVwiOlwibG9nb2ZmXCIsIFwic2Vzc2lvblwiOiB0aGlzLnNlc3Npb25JZH07XHJcblx0XHR0aGlzLnNlc3Npb25JZCA9IG51bGw7XHJcblx0XHR0aGlzLndlYnNvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KGNtZCkpO1xyXG5cdH1cclxuXHJcblx0b25NZXNzYWdlKGV2dCl7XHJcblx0XHRjb25zb2xlLmxvZyhcIm9uIG1cIixldnQpO1xyXG5cdFx0dmFyIG1lc3NhZ2U9SlNPTi5wYXJzZShldnQuYm9keSk7XHJcblx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHR2YXIgdG9waWMgPSBldnQuaGVhZGVyc1tcInRvcGljXCJdO1xyXG5cclxuXHRcdGlmICh0b3BpYz09XCJhdXRoZW50aWNhdGVcIil7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiYXV0aGVudGljYXRlXCIpO1xyXG5cdFx0XHR0aGlzLmRvQXV0aGVudGljYXRlID0gdHJ1ZTtcclxuXHRcdFx0aWYgKHRoaXMub3B0aW9ucy51c2VyTmFtZSlcclxuXHRcdFx0XHR0aGlzLmF1dGhlbnRpY2F0ZSh0aGlzLm9wdGlvbnMudXNlck5hbWUsIHRoaXMub3B0aW9ucy5wYXNzd29yZClcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHRoaXMub3B0aW9ucy5vbkF1dGhlbnRpY2F0ZS5jYWxsKHRoaXMub3B0aW9ucy50YXJnZXRTY29wZSxldnQpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAodG9waWM9PVwiYXV0aGVudGljYXRpb25fZmFpbGVkXCIpe1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcImF1dGhlbnRpY2F0aW9uIGZhaWxlZFwiLCB0aGlzLm9wdGlvbnMudXNlck5hbWUpO1xyXG5cdFx0XHRpZiAodGhpcy5vcHRpb25zLnVzZXJOYW1lID09IFwiYW5vbnltb3VzXCIpIHtcclxuXHRcdFx0XHR0aGlzLmFsbG93QW5vbnltb3VzID0gZmFsc2U7XHJcblx0XHRcdFx0dGhpcy5vcHRpb25zLnVzZXJOYW1lID0gbnVsbDtcclxuXHRcdFx0XHR0aGlzLm9wdGlvbnMucGFzc3dvcmQgPSBudWxsO1xyXG5cdFx0XHRcdHRoaXMuc2Vzc2lvbklkID0gbnVsbDtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcInhcIiwgc2VsZi5vcHRpb25zKVxyXG5cdFx0XHRcdGlmIChzZWxmLm9wdGlvbnMub25Mb2dPZmYpe1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJ4MVwiKVxyXG5cdFx0XHRcdFx0c2VsZi5vcHRpb25zLm9uTG9nT2ZmLmNhbGwoc2VsZi5vcHRpb25zLnRhcmdldFNjb3BlLGV2dCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2VcclxuXHRcdFx0XHR0aGlzLm9wdGlvbnMub25BdXRoZW50aWNhdGVGYWlsZWQuY2FsbCh0aGlzLm9wdGlvbnMudGFyZ2V0U2NvcGUsZXZ0KTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKHRvcGljPT1cInNlc3Npb25fYXV0aGVudGljYXRlZFwiKXtcclxuXHRcdFx0dmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cdFx0XHRcclxuICAgICAgICBcdGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArICgyKjYwKjYwKjEwMDApKTtcclxuICAgICAgICBcdHZhciBleHBpcmVzID0gXCI7IGV4cGlyZXM9XCIgKyBkYXRlLnRvVVRDU3RyaW5nKCk7XHJcblx0XHRcdHRoaXMuc2Vzc2lvbklkID0gbWVzc2FnZS5zZXNzaW9uO1xyXG5cdFx0XHRkb2N1bWVudC5jb29raWUgPSBcImtlcnZpc2Vzc2lvblwiICsgXCI9XCIgKyBtZXNzYWdlLnNlc3Npb24gKyBleHBpcmVzICsgXCI7IHBhdGg9L1wiO1xyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRpZiAoc2VsZi5vcHRpb25zLm9uT3BlbilcclxuXHRcdFx0XHRcdHNlbGYub3B0aW9ucy5vbk9wZW4uY2FsbChzZWxmLm9wdGlvbnMudGFyZ2V0U2NvcGUsIHNlbGYuZmlyc3RPbk9wZW4sZXZ0KTtcclxuXHRcdFx0XHRcdHNlbGYuZmlyc3RPbk9wZW4gPSBmYWxzZTtcclxuXHRcdFx0fSwgMTAwXHJcblx0XHRcdCk7XHJcblx0XHRcdFxyXG5cdFx0fSBlbHNlIGlmICh0b3BpYyA9PSBcInNlc3Npb25fbG9nb2ZmXCIpeyBcclxuXHRcdFx0aWYgKHNlbGYub3B0aW9ucy5vbkxvZ09mZilcclxuXHRcdFx0XHRzZWxmLm9wdGlvbnMub25Mb2dPZmYuY2FsbChzZWxmLm9wdGlvbnMudGFyZ2V0U2NvcGUsZXZ0KTtcclxuXHRcdFx0aWYgKHRoaXMuYWxsb3dBbm9ueW1vdXMgJiYgdGhpcy5vcHRpb25zLnVzZXJOYW1lICE9IFwiYW5vbnltb3VzXCIpe1xyXG5cdFx0XHRcdHRoaXMuYXV0aGVudGljYXRlKFwiYW5vbnltb3VzXCIsIG51bGwpXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2VsZi5vcHRpb25zLnVzZXJOYW1lID0gbnVsbDtcclxuXHRcdFx0XHRzZWxmLm9wdGlvbnMucGFzc3dvcmQgPSBudWxsO1xyXG5cdFx0XHRcdHNlbGYuc2Vzc2lvbklkID0gbnVsbDtcclxuXHRcdFx0XHJcblx0XHRcdFx0XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSBpZiAoZXZ0LmhlYWRlcnNbXCJ0eXBlXCJdPT1cInF1ZXJ5X3Jlc3BvbnNlXCIpe1xyXG5cdFx0XHR0aGlzLmhhbmRsZVJQQ1Jlc3BvbnNlKHtpZDpldnQuaGVhZGVyc1tcInF1ZXJ5X2lkXCJdLCByZXNwb25zZTptZXNzYWdlfSk7XHJcblx0XHR9ZWxzZSBpZiAoZXZ0LmhlYWRlcnNbXCJ0eXBlXCJdPT1cImV2ZW50XCIpe1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcImVcIiwgZXZ0KTtcclxuXHRcdFx0dmFyIHRvcGljX3RhZz0gZXZ0LmhlYWRlcnNbXCJ0b3BpY1wiXS5zcGxpdChcIjpcIik7XHJcblx0XHRcdFxyXG5cdFx0XHR0aGlzLmhhbmRsZUV2ZW50KHtldmVudDp0b3BpY190YWdbMV0sIGlkOnRvcGljX3RhZ1syXSwgYXJnczptZXNzYWdlLmFyZ3N9KTtcclxuXHRcdH1lbHNlIGlmIChtZXNzYWdlLm1lc3NhZ2VUeXBlPT1cImNvbW1hbmRcIilcclxuXHRcdFx0dGhpcy5oYW5kbGVDb21tYW5kKG1lc3NhZ2UpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRjb25zb2xlLmxvZyhcIktlcnZpIHNwaW5lIG1lc3NhZ2UgdW5rbm93blwiLHRoaXMucnBjUXVldWUsZXZ0KTtcclxuXHR9XHJcblxyXG5cdG9uRXJyb3IoZXZ0KXtcclxuXHRcdGNvbnNvbGUubG9nKFwiS2Vydmkgb24gZXJyb3JcIixldnQpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGFkZENvbW1hbmRIYW5kbGVyIChjb21tYW5kOnN0cmluZyxjYWxsYmFjayl7XHJcblx0XHR0aGlzLmNvbW1hbmRIYW5kbGVycy5wdXNoKHtjb21tYW5kOmNvbW1hbmQsY2FsbGJhY2s6Y2FsbGJhY2t9KTtcclxuXHRcdHZhciBjbWQ9e2lkOnRoaXMubWVzc2FnZUlkKyssXCJtZXNzYWdlVHlwZVwiOlwicmVnaXN0ZXJDb21tYW5kSGFuZGxlclwiLFwiY29tbWFuZFwiOmNvbW1hbmR9O1xyXG5cdFx0Ly90aGlzLndlYnNvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KGNtZCkpO1xyXG5cdFx0dGhpcy53ZWJzb2NrZXQuc2VuZChcclxuXHRcdFx0dGhpcy5leGNoYW5nZSxcclxuXHRcdFx0eyB0b3BpYzpcInJlZ2lzdGVyQ29tbWFuZEhhbmRsZXJcIiwgcm91dGVyX2lkOnRoaXMuc29ja2V0U2Vzc2lvbn0sXHJcblx0XHRcdEpTT04uc3RyaW5naWZ5KGNtZClcclxuXHRcdClcdFxyXG5cdH07XHJcblxyXG5cdHB1YmxpYyBhZGRRdWVyeUhhbmRsZXIocXVlcnk6c3RyaW5nLGNhbGxiYWNrKXtcclxuXHRcdHRoaXMucXVlcnlIYW5kbGVycy5wdXNoKHtxdWVyeTpxdWVyeSxjYWxsYmFjazpjYWxsYmFja30pO1xyXG5cdFx0dmFyIGNtZD17aWQ6dGhpcy5tZXNzYWdlSWQrKyxcIm1lc3NhZ2VUeXBlXCI6XCJyZWdpc3RlclF1ZXJ5SGFuZGxlclwiLFwicXVlcnlcIjpxdWVyeX07XHJcblx0XHR0aGlzLndlYnNvY2tldC5zZW5kKFxyXG5cdFx0XHR0aGlzLmV4Y2hhbmdlLFxyXG5cdFx0XHR7IHRvcGljOlwicmVnaXN0ZXJRdWVyeUhhbmRsZXJcIiwgcm91dGVyX2lkOnRoaXMuc29ja2V0U2Vzc2lvbn0sXHJcblx0XHRcdEpTT04uc3RyaW5naWZ5KGNtZClcclxuXHRcdClcclxuXHR9O1xyXG5cclxuXHRwdWJsaWMgYWRkRXZlbnRIYW5kbGVyPWZ1bmN0aW9uKGV2ZW50TmFtZTpzdHJpbmcsaWQ6c3RyaW5nLGNhbGxiYWNrKXtcclxuXHRcdGlmIChpZClcclxuXHRcdFx0dGhpcy5ldmVudEhhbmRsZXJzLnB1c2goe1wiZXZlbnROYW1lXCI6ZXZlbnROYW1lK1wiL1wiK2lkLGNhbGxiYWNrOmNhbGxiYWNrfSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMuZXZlbnRIYW5kbGVycy5wdXNoKHtcImV2ZW50TmFtZVwiOmV2ZW50TmFtZSxjYWxsYmFjazpjYWxsYmFja30pO1xyXG5cdFx0dmFyIGNtZD17aWQ6dGhpcy5tZXNzYWdlSWQrKyxcIm1lc3NhZ2VUeXBlXCI6XCJyZWdpc3RlckV2ZW50SGFuZGxlclwiLFwiZXZlbnRcIjpldmVudE5hbWUsXCJldmVudElkXCI6aWR9O1xyXG5cdFx0dGhpcy53ZWJzb2NrZXQuc2VuZChcclxuXHRcdFx0dGhpcy5leGNoYW5nZSxcclxuXHRcdFx0eyB0b3BpYzpcInJlZ2lzdGVyRXZlbnRIYW5kbGVyXCIsIHJvdXRlcl9pZDp0aGlzLnNvY2tldFNlc3Npb259LFxyXG5cdFx0XHRKU09OLnN0cmluZ2lmeShjbWQpXHJcblx0XHQpXHJcblx0fTtcclxuXHJcblx0cHVibGljIHNlbmRDb21tYW5kKGNvbW1hbmQ6c3RyaW5nLC4uLnA6YW55W10pe1xyXG5cdFx0Y29uc29sZS5sb2coXCJzZWNcIixhcmd1bWVudHMpO1xyXG5cdFx0dmFyIGFyZ3M9W107XHJcblx0XHRcclxuXHRcdHZhciBjYWxsYmFjaz1udWxsO1xyXG5cclxuXHRcdGZvciAodmFyIGk9MDsoaTxwLmxlbmd0aCk7aSsrKXtcclxuXHRcdFx0aWYgKHBbaV0gaW5zdGFuY2VvZiBGdW5jdGlvbilcclxuXHRcdFx0XHRjYWxsYmFjaz1wW2ldO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0YXJncy5wdXNoKHBbaV0pO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvKmlmIChwLmxlbmd0aD4xKXtcclxuXHRcdFx0dmFyIGFyZ09mZnNldD0xO1xyXG5cdFx0XHRpZiAoIGNhbGxiYWNrICYmIGNhbGxiYWNrIGluc3RhbmNlb2YgRnVuY3Rpb24gKVxyXG5cdFx0XHRcdGFyZ09mZnNldCs9MTtcclxuXHRcdFx0Zm9yICh2YXIgaT1hcmdPZmZzZXQ7KGk8YXJndW1lbnRzLmxlbmd0aCk7aSsrKXtcclxuXHRcdFx0XHRhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcclxuXHRcdFx0fVxyXG5cdFx0fSovXHJcblx0XHR2YXIgY21kPXtpZDp0aGlzLm1lc3NhZ2VJZCsrLFwiYXJnc1wiOmFyZ3MsIGt3YXJnczp7fX07XHJcblx0XHRcclxuXHRcdGlmIChjYWxsYmFjayAmJiBjYWxsYmFjayBpbnN0YW5jZW9mIEZ1bmN0aW9uKVxyXG5cdFx0XHR0aGlzLmFkZFJQQ0NhbGxiYWNrKGNtZC5pZC50b1N0cmluZygpLGNhbGxiYWNrLCBudWxsLCAwKTtcclxuXHRcdGNvbnNvbGUubG9nKFwic2VuZENvbW1hbmRcIix0aGlzLGNtZCk7XHJcblx0XHR0aGlzLndlYnNvY2tldC5zZW5kKFxyXG5cdFx0XHR0aGlzLmV4Y2hhbmdlLFxyXG5cdFx0XHR7IHRvcGljOlwiY29tbWFuZDpcIisgY29tbWFuZCwgcm91dGVyX2lkOnRoaXMuc29ja2V0U2Vzc2lvbn0sXHJcblx0XHRcdEpTT04uc3RyaW5naWZ5KGNtZClcclxuXHRcdClcclxuXHR9O1xyXG5cclxuXHRwdWJsaWMgc2VuZFF1ZXJ5KHF1ZXJ5LC4uLnA6YW55W10pe1xyXG5cdFx0dmFyIGFyZ3M9W107XHJcblx0XHR2YXIgY2FsbGJhY2s9bnVsbDtcclxuXHRcdHZhciBjYWxsYmFja1RpbWVvdXQ9bnVsbDtcclxuXHRcdHZhciB0aW1lb3V0ID0gMTAwMDA7XHJcblx0XHRmb3IgKHZhciBpPTA7KGk8cC5sZW5ndGgpO2krKyl7XHJcblx0XHRcdGlmIChwW2ldIGluc3RhbmNlb2YgRnVuY3Rpb24pXHJcblx0XHRcdFx0aWYgKCFjYWxsYmFjaykgXHJcblx0XHRcdFx0XHRjYWxsYmFjaz1wW2ldO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdGNhbGxiYWNrVGltZW91dCA9IHBbaV07XHJcblx0XHRcdGVsc2V7XHJcblx0XHRcdFx0aWYgKGNhbGxiYWNrVGltZW91dClcclxuXHRcdFx0XHRcdHRpbWVvdXQgPSBwW2ldXHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0YXJncy5wdXNoKHBbaV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQgXHJcblx0XHR2YXIgY21kPXtpZDp0aGlzLm1lc3NhZ2VJZCsrLFwibWVzc2FnZVR5cGVcIjpcInF1ZXJ5XCIsXCJxdWVyeVwiOnF1ZXJ5LFwiYXJnc1wiOmFyZ3MsIGt3YXJnczpbXSwgcXRzOjB9O1xyXG5cdFx0dGhpcy5hZGRSUENDYWxsYmFjayhjbWQuaWQudG9TdHJpbmcoKSxjYWxsYmFjaywgY2FsbGJhY2tUaW1lb3V0LCB0aW1lb3V0KTtcclxuXHRcdGNvbnNvbGUubG9nKFwic2VuZFF1ZXJ5XCIsIGNhbGxiYWNrLGNtZCk7XHJcblx0XHQvL3RoaXMud2Vic29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoY21kKSk7XHJcblx0XHR0aGlzLndlYnNvY2tldC5zZW5kKFxyXG5cdFx0XHR0aGlzLmV4Y2hhbmdlLFxyXG5cdFx0XHR7IHRvcGljOlwicXVlcnk6XCIgKyBxdWVyeSwgcXRzOjAsIHF1ZXJ5X2lkOiBjbWQuaWQudG9TdHJpbmcoKSwgcm91dGVyX2lkOnRoaXMuc29ja2V0U2Vzc2lvbiwgcmVzcG9uc2VfYWRkcmVzczp0aGlzLnNvY2tldFNlc3Npb259LFxyXG5cdFx0XHRKU09OLnN0cmluZ2lmeShjbWQpXHJcblx0XHQpXHJcblx0fTtcclxuXHJcblx0cHVibGljIHRyaWdnZXJFdmVudChldmVudE5hbWU6c3RyaW5nLGlkOnN0cmluZyl7XHJcblx0XHR2YXIgZT17aWQ6dGhpcy5tZXNzYWdlSWQrKyxcIm1lc3NhZ2VUeXBlXCI6XCJldmVudFwiLFwiZXZlbnRcIjpldmVudE5hbWUsXCJhcmdzXCI6YXJndW1lbnRzfTtcclxuXHRcdHRoaXMud2Vic29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoZSkpO1xyXG5cdH07XHJcbn0iLCJcclxuZXhwb3J0IGNsYXNzIERhc2hib2FyZExpbmt7XHJcbiAgICBkYXNoYm9hcmRJZDpzdHJpbmc7XHJcbiAgICBwYW5lbElkOnN0cmluZztcclxuICAgIHBhbmVsTmFtZTpzdHJpbmc7XHJcbiAgICBjb21wb25lbnQ6SUNvbXBvbmVudDtcclxuICAgIHBhcmFtZXRlcnM6YW55O1xyXG5cclxuICAgIC8qY29uc3RydWN0b3IoZGFzaGJvYXJkSWQ6c3RyaW5nLCBzZWN0aW9uSWQ6c3RyaW5nLCBzZWN0aW9uTmFtZTpzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuZGFzaGJvYXJkSWQgPSBkYXNoYm9hcmRJZDtcclxuICAgICAgICB0aGlzLnNlY3Rpb25JZCA9IHNlY3Rpb25JZDtcclxuICAgICAgICB0aGlzLnNlY3Rpb25OYW1lID0gc2VjdGlvbk5hbWU7XHJcbiAgICB9Ki9cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb21wb25lbnQ6SUNvbXBvbmVudCwgbWVzc2FnZTphbnkpe1xyXG4gICAgICAgIHRoaXMuZGFzaGJvYXJkSWQgPSBtZXNzYWdlLmRhc2hib2FyZElkO1xyXG4gICAgICAgIHRoaXMucGFuZWxJZCA9IG1lc3NhZ2Uuc2VjdGlvbklkO1xyXG4gICAgICAgIHRoaXMucGFuZWxOYW1lID0gbWVzc2FnZS5zZWN0aW9uTmFtZTtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcclxuICAgICAgICB0aGlzLnBhcmFtZXRlcnMgPSBtZXNzYWdlLnBhcmFtZXRlcnM7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbXBvbmVudCB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgY29tcG9uZW50VHlwZTogc3RyaW5nO1xyXG4gICAgdWk6YW55O1xyXG4gICAgZGFzaGJvYXJkcyA6IERhc2hib2FyZExpbmtbXTtcclxuXHJcbiAgICAvL3VwZGF0ZVJlZmVyZW5jZXMoa2VydmlTZXJ2aWNlOktlcnZpQmFzZVNlcnZpY2UpO1xyXG4gICAgLy9yZWxvYWQoY29tcG9uZW50OklDb21wb25lbnQpO1xyXG4gICAgLy9yZW1vdmVSZWZlcmVuY2VzKGNvbXBvbmVudHM6SUNvbXBvbmVudFtdKTtcclxufSIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgVGltIFdlbnR6bGF1XHJcbi8vIExpY2Vuc2VkIHVuZGVyIE1JVFxyXG5pbXBvcnQgeyBJQ29tcG9uZW50LCBEYXNoYm9hcmRMaW5rIH0gZnJvbSBcIi4vSUNvbXBvbmVudC5tb2RlbFwiXHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBLZXJ2aUJhc2VTZXJ2aWNlIH0gZnJvbSAnLi4va2VydmktanMuc2VydmljZSdcclxuZGVjbGFyZSB2YXIgUXR5OmFueTtcclxuXHJcbmV4cG9ydCBjbGFzcyBLZXJ2aVZhbHVlIGltcGxlbWVudHMgSUNvbXBvbmVudHtcclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgY29tcG9uZW50VHlwZSA9IFwiS2VydmlWYWx1ZVwiXHJcbiAgICBwdWJsaWMgdHlwZU5hbWU6c3RyaW5nID0gbnVsbDsgICAgXHJcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBkYXNoYm9hcmRzOiBEYXNoYm9hcmRMaW5rW10gPSBbXTtcclxuICAgIHB1YmxpYyBpc0lucHV0OmJvb2xlYW47XHJcbiAgICBwdWJsaWMgY29tbWFuZDogc3RyaW5nO1xyXG4gICAgcHVibGljIHZhbHVlVFM6RGF0ZTtcclxuXHJcbiAgICBwdWJsaWMgdWkgPSB7XHJcbiAgICAgICAgdHlwZTogXCJcIixcclxuICAgICAgICBvcmllbnRhdGlvbjogXCJcIixcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBLZXJ2aVZhbHVlVHlwZTx2YWx1ZVR5cGU+IGV4dGVuZHMgS2VydmlWYWx1ZXtcclxuICAgIFxyXG4gICAgcHVibGljIHZhbHVlJDogQmVoYXZpb3JTdWJqZWN0PHZhbHVlVHlwZT47XHJcbiAgICBwcm90ZWN0ZWQga2VydmlTZXJ2aWNlOktlcnZpQmFzZVNlcnZpY2UgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2U6YW55LCBrZXJ2aVNlcnZpY2U6S2VydmlCYXNlU2VydmljZSl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmtlcnZpU2VydmljZSA9IGtlcnZpU2VydmljZTtcclxuICAgICAgICB0aGlzLnZhbHVlJD0gbmV3IEJlaGF2aW9yU3ViamVjdDx2YWx1ZVR5cGU+KG1lc3NhZ2UudmFsdWUpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG1lc3NhZ2UubmFtZTtcclxuICAgICAgICB0aGlzLmlzSW5wdXQgPSBtZXNzYWdlLmlzSW5wdXQ7XHJcbiAgICAgICAgdGhpcy51aSA9IG1lc3NhZ2UudWk7XHJcbiAgICAgICAgdGhpcy5jb21tYW5kID0gbWVzc2FnZS5jb21tYW5kO1xyXG4gICAgICAgIHRoaXMuaWQgPSBtZXNzYWdlLmlkO1xyXG4gICAgICAgIHRoaXMudWlbXCJ0eXBlXCJdID0gbWVzc2FnZS5jb21wb25lbnRUeXBlO1xyXG4gICAgICAgIHRoaXMudWlbXCJvcmllbnRhdGlvblwiXSA9IG1lc3NhZ2Uub3JpZW50YXRpb247XHJcbiAgICAgICAgdGhpcy51aVtcInZpc2libGVcIl0gPSBtZXNzYWdlLnZpc2libGU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBtZXNzYWdlLnVpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnVpW3Byb3BdICE9IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgIHRoaXMudWlbcHJvcF0gPSBtZXNzYWdlLnVpW3Byb3BdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgZGFzaGJvYXJkTGluayBvZiBtZXNzYWdlLmRhc2hib2FyZExpbmtzKXtcclxuICAgICAgICAgICAgdGhpcy5kYXNoYm9hcmRzLnB1c2goIG5ldyBEYXNoYm9hcmRMaW5rKHRoaXMsIGRhc2hib2FyZExpbmspKTsgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCB2YWx1ZSgpe1xyXG4gICAgICAgXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImd2XCIsIHRoaXMuaWQsIHRoaXMudmFsdWUkLnZhbHVlKVxyXG4gICAgICAgcmV0dXJuIHRoaXMudmFsdWUkLnZhbHVlIFxyXG4gICAgfVxyXG5cclxuICAgIHNldCB2YWx1ZSh2YWx1ZTp2YWx1ZVR5cGUpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic3ZcIiwgdGhpcy5pZCk7XHJcbiAgICAgICAgdGhpcy52YWx1ZSQubmV4dCh2YWx1ZSk7IFxyXG4gICAgICAgIHRoaXMua2VydmlTZXJ2aWNlLnNwaW5lLnNlbmRDb21tYW5kKHRoaXMuY29tbWFuZCwgdmFsdWUpO1xyXG4gICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0RGVmYXVsdFZhbHVlKCk6dmFsdWVUeXBlO1xyXG4gICAgcHVibGljIHNldCh2OnZhbHVlVHlwZSwgbm90aWZ5OmJvb2xlYW49dHJ1ZSl7XHJcbiAgICAgICAgdGhpcy52YWx1ZSQubmV4dCh2KTtcclxuICAgICAgICBpZiAobm90aWZ5KVxyXG4gICAgICAgICAgICB0aGlzLmtlcnZpU2VydmljZS5zcGluZS5zZW5kQ29tbWFuZCh0aGlzLmNvbW1hbmQsIHYpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGVudW0gVmFsdWVSYW5nZVR5cGUge25vcm1hbCwgd2FybmluZywgZXJyb3J9O1xyXG5cclxuZXhwb3J0IGNsYXNzIFZhbHVlUmFuZ2V7XHJcbiAgICBcclxuICAgIHB1YmxpYyBzdGFydDpudW1iZXIgPSBudWxsO1xyXG4gICAgcHVibGljIGVuZDpudW1iZXIgPSBudWxsO1xyXG4gICAgcHVibGljIHR5cGU6VmFsdWVSYW5nZVR5cGUgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHJhbmdlOmFueSl7XHJcbiAgICAgICAgdGhpcy5zdGFydCA9IHJhbmdlW1wic3RhcnRcIl07XHJcbiAgICAgICAgdGhpcy5lbmQgPSByYW5nZVtcImVuZFwiXVxyXG4gICAgICAgIGlmIChyYW5nZVtcInR5cGVcIl0gPT0gXCJ3YXJuaW5nXCIpXHJcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IFZhbHVlUmFuZ2VUeXBlLndhcm5pbmc7XHJcbiAgICAgICAgZWxzZSBpZiAocmFuZ2VbXCJ0eXBlXCJdID09IFwiZXJyb3JcIilcclxuICAgICAgICAgICAgdGhpcy50eXBlID0gVmFsdWVSYW5nZVR5cGUuZXJyb3I7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLnR5cGUgPSBWYWx1ZVJhbmdlVHlwZS5ub3JtYWw7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEtlcnZpRW51bU9wdGlvbk1vZGVse1xyXG4gICAgcHVibGljIHZhbHVlOnN0cmluZztcclxuICAgIHB1YmxpYyB0ZXh0OnN0cmluZztcclxuICAgIHB1YmxpYyBzZWxlY3RlZCQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2VPcHRpb246YW55KXtcclxuICAgICAgICB0aGlzLnZhbHVlID0gbWVzc2FnZU9wdGlvbi52YWx1ZTtcclxuICAgICAgICB0aGlzLnRleHQgPSBtZXNzYWdlT3B0aW9uLnRleHQ7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZCQubmV4dChtZXNzYWdlT3B0aW9uLnNlbGVjdGVkKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZVJlZmVyZW5jZXMoKXt9O1xyXG4gICAgcmVsb2FkKGNvbXBvbmVudDpJQ29tcG9uZW50KXt9O1xyXG4gICAgcmVtb3ZlUmVmZXJlbmNlcyhjb21wb25lbnRzOklDb21wb25lbnRbXSl7fTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNlbGVjdFZhbHVlIGV4dGVuZHMgS2VydmlWYWx1ZVR5cGU8c3RyaW5nW10+e1xyXG4gICAgcHVibGljIG9wdGlvbnM6S2VydmlFbnVtT3B0aW9uTW9kZWxbXSA9IFtdO1xyXG4gICAgcHVibGljIGxhc3RTZWxlY3RlZCQ6QmVoYXZpb3JTdWJqZWN0PEtlcnZpRW51bU9wdGlvbk1vZGVsPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8S2VydmlFbnVtT3B0aW9uTW9kZWw+KG51bGwpOyBcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IgKG1lc3NhZ2U6YW55LCBrZXJ2aVNlcnZpY2U6S2VydmlCYXNlU2VydmljZSl7XHJcbiAgICAgICAgc3VwZXIobWVzc2FnZSwga2VydmlTZXJ2aWNlKTtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gW11cclxuICAgICAgICBcclxuICAgICAgICBmb3IgKGxldCBvcHRpb24gb2YgbWVzc2FnZS5vcHRpb25zKXtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnB1c2goIG5ldyBLZXJ2aUVudW1PcHRpb25Nb2RlbChvcHRpb24pICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNlbGVjdE9wdGlvbnModGhpcy52YWx1ZSQudmFsdWUpO1xyXG4gICAgICAgIHRoaXMudmFsdWUkLnN1YnNjcmliZShmdW5jdGlvbih2KXtcclxuICAgICAgICAgICAgc2VsZi5zZWxlY3RPcHRpb25zKHYpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBnZXREZWZhdWx0VmFsdWUoKTpzdHJpbmdbXXtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBwdWJsaWMgc2VsZWN0T3B0aW9ucyhzZWxlY3RlZE9wdGlvbnM6YW55KXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNvY1wiKTtcclxuICAgICAgICBpZiAoIXNlbGVjdGVkT3B0aW9ucylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGZvciAobGV0IG9wdGlvbiBvZiB0aGlzLm9wdGlvbnMpe1xyXG4gICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQkLm5leHQoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBzZWxlY3RlZE9wdGlvbiBvZiBzZWxlY3RlZE9wdGlvbnMpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNvXCIsIHNlbGVjdGVkT3B0aW9uKVxyXG4gICAgICAgICAgICBmb3IobGV0IG9wdGlvbiBvZiB0aGlzLm9wdGlvbnMpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzb3hcIiwgb3B0aW9uIClcclxuICAgICAgICAgICAgICAgIGlmIChvcHRpb24udmFsdWUgPT0gc2VsZWN0ZWRPcHRpb24pe1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCQubmV4dCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RTZWxlY3RlZCQubmV4dChvcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib3NcIiwgb3B0aW9uLnRleHQsIG9wdGlvbi5zZWxlY3RlZCQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTnVtYmVyVmFsdWUgZXh0ZW5kcyBLZXJ2aVZhbHVlVHlwZTxudW1iZXI+IHtcclxuICAgIHB1YmxpYyB1bml0OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcXR5VW5pdEZyb206c3RyaW5nO1xyXG4gICAgcHVibGljIHF0eVVuaXRUbzpzdHJpbmcgPSBudWxsO1xyXG4gICAgcHVibGljIG1heFZhbHVlOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgbWluVmFsdWU6IG51bWJlcjtcclxuICAgIHB1YmxpYyBzcGFya2xpbmUkOiBCZWhhdmlvclN1YmplY3Q8bnVtYmVyW10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxudW1iZXJbXT4oW10pO1xyXG4gICAgcHVibGljIHJhbmdlczogVmFsdWVSYW5nZVtdID0gW107XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldERlZmF1bHRWYWx1ZSgpOm51bWJlcntcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBhbnksIGtlcnZpU2VydmljZTpLZXJ2aUJhc2VTZXJ2aWNlKSB7XHJcbiAgICAgICAgc3VwZXIobWVzc2FnZSwga2VydmlTZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLnVuaXQgPSBtZXNzYWdlLnVuaXQ7XHJcbiAgICAgICAgdGhpcy50eXBlTmFtZSA9IFwiTnVtYmVyXCI7XHJcbiAgICBcclxuICAgICAgICBcdFxyXG4gICAgICAgIHRoaXMucXR5VW5pdEZyb20gPSBtZXNzYWdlLnVuaXQ7XHJcbiAgICAgICAgaWYgKHRoaXMudW5pdCA9PSBcImNcIiAmJiBrZXJ2aVNlcnZpY2UuYXBwbGljYXRpb24kLnZhbHVlW1wiZGlzcGxheVwiXVtcInVuaXRfc3lzdGVtXCJdW1widGVtcGVyYXR1cmVcIl09PVwiRlwiKXtcclxuICAgICAgICAgICAgdGhpcy5xdHlVbml0RnJvbSA9IFwidGVtcENcIjtcclxuICAgICAgICAgICAgdGhpcy5xdHlVbml0VG8gPSBcInRlbXBGXCI7XHJcbiAgICAgICAgICAgIHRoaXMudW5pdCA9IFwiRlwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKHZhciByYW5nZSBvZiBtZXNzYWdlLnJhbmdlcyl7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnF0eVVuaXRUbyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgcSA9IG5ldyBRdHkocmFuZ2VbXCJzdGFydFwiXSwgdGhpcy5xdHlVbml0RnJvbSk7XHJcbiAgICAgICAgICAgICAgICByYW5nZVtcInN0YXJ0XCJdID0gcS50byh0aGlzLnF0eVVuaXRUbykuc2NhbGFyXHJcbiAgICAgICAgICAgICAgICB2YXIgcSA9IG5ldyBRdHkocmFuZ2VbXCJlbmRcIl0sIHRoaXMucXR5VW5pdEZyb20pO1xyXG4gICAgICAgICAgICAgICAgcmFuZ2VbXCJlbmRcIl0gPSBxLnRvKHRoaXMucXR5VW5pdFRvKS5zY2FsYXJcclxuICAgICAgICAgICAgICAgIHRoaXMucmFuZ2VzLnB1c2gobmV3IFZhbHVlUmFuZ2UocmFuZ2UpKTtcclxuICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJhbmdlcy5wdXNoKG5ldyBWYWx1ZVJhbmdlKHJhbmdlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLnF0eVVuaXRUbyAmJiBtZXNzYWdlLm1heFZhbHVlKXtcclxuICAgICAgICAgICAgdmFyIHEgPSBuZXcgUXR5KG1lc3NhZ2UubWF4VmFsdWUsIHRoaXMucXR5VW5pdEZyb20pO1xyXG4gICAgICAgICAgICB0aGlzLm1heFZhbHVlID0gcS50byh0aGlzLnF0eVVuaXRUbykuc2NhbGFyO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICB0aGlzLm1heFZhbHVlID0gbWVzc2FnZS5tYXhWYWx1ZTsgXHJcblxyXG4gICAgICAgIGlmICh0aGlzLnF0eVVuaXRUbyAmJiBtZXNzYWdlLm1pblZhbHVlKXtcclxuICAgICAgICAgICAgdmFyIHEgPSBuZXcgUXR5KG1lc3NhZ2UubWluVmFsdWUsIHRoaXMucXR5VW5pdEZyb20pO1xyXG4gICAgICAgICAgICB0aGlzLm1pblZhbHVlID0gcS50byh0aGlzLnF0eVVuaXRUbykuc2NhbGFyO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICB0aGlzLm1pblZhbHVlID0gbWVzc2FnZS5taW5WYWx1ZTsgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHNwbCA9IFtdXHJcbiAgICAgICAgZm9yKHZhciBzcHYgb2YgbWVzc2FnZS5zcGFya2xpbmUpe1xyXG4gICAgICAgICAgICBpZiAodGhpcy5xdHlVbml0VG8pe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzcHZcIiwgc3B2KTtcclxuICAgICAgICAgICAgICAgIHZhciBxID0gbmV3IFF0eShzcHYudmFsdWUsIHRoaXMucXR5VW5pdEZyb20pO1xyXG4gICAgICAgICAgICAgICAgLy9zcHYudmFsdWUgPSBxLnRvKHRoaXMucXR5VW5pdFRvKS5zY2FsYXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3BsLnB1c2goc3B2KVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNwYXJrbGluZSQubmV4dChzcGwpO1xyXG4gICAgICAgIHRoaXMuc2V0KG1lc3NhZ2UudmFsdWUsIGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQodiwgbm90aWZ5PXRydWUpe1xyXG4gICAgICAgIHZhciBuZXdWYWx1ZSA9IHY7XHJcbiAgICAgICAgaWYgKHRoaXMucXR5VW5pdFRvKXtcclxuICAgICAgICAgICAgdmFyIHEgPSBuZXcgUXR5KHYsIHRoaXMucXR5VW5pdEZyb20pO1xyXG4gICAgICAgICAgICBuZXdWYWx1ZSA9IHEudG8odGhpcy5xdHlVbml0VG8pLnNjYWxhcjtcclxuICAgICAgICB9IFxyXG5cclxuICAgICAgICB0aGlzLnZhbHVlJC5uZXh0KG5ld1ZhbHVlKTtcclxuICAgICAgICBpZiAobm90aWZ5KVxyXG4gICAgICAgICAgICB0aGlzLmtlcnZpU2VydmljZS5zcGluZS5zZW5kQ29tbWFuZCh0aGlzLmNvbW1hbmQsIHYpO1xyXG4gICAgICAgIHZhciBzcGw9dGhpcy5zcGFya2xpbmUkLnZhbHVlO1xyXG4gICAgICAgIHNwbC5wdXNoKG5ld1ZhbHVlKTtcclxuICAgICAgICBpZiAoc3BsLmxlbmd0aD4xMClcclxuICAgICAgICAgICAgIHNwbC5zaGlmdCgpO1xyXG4gICAgICAgIHRoaXMuc3BhcmtsaW5lJC5uZXh0KHNwbCk7ICBcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFN0cmluZ1ZhbHVlIGV4dGVuZHMgS2VydmlWYWx1ZVR5cGU8c3RyaW5nPiB7XHJcbiAgICBcclxuICAgIHByb3RlY3RlZCBnZXREZWZhdWx0VmFsdWUoKTpzdHJpbmd7XHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZTogYW55LCBrZXJ2aVNlcnZpY2U6S2VydmlCYXNlU2VydmljZSkge1xyXG4gICAgICAgIHN1cGVyKG1lc3NhZ2UsIGtlcnZpU2VydmljZSlcclxuICAgICAgICB0aGlzLnR5cGVOYW1lID0gXCJTdHJpbmdcIjtcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQm9vbGVhblZhbHVlIGV4dGVuZHMgS2VydmlWYWx1ZVR5cGU8Ym9vbGVhbj4ge1xyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZSwga2VydmlTZXJ2aWNlOktlcnZpQmFzZVNlcnZpY2UpIHtcclxuICAgICAgICBzdXBlcihtZXNzYWdlLCBrZXJ2aVNlcnZpY2UpXHJcbiAgICAgICAgdGhpcy50eXBlTmFtZSA9IFwiQm9vbGVhblwiO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBnZXREZWZhdWx0VmFsdWUoKTpib29sZWFue1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERhdGVUaW1lVmFsdWUgZXh0ZW5kcyBLZXJ2aVZhbHVlVHlwZTxEYXRlPiB7XHJcbiAgICBwdWJsaWMgc3ViVHlwZTogc3RyaW5nO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBrZXJ2aVNlcnZpY2U6S2VydmlCYXNlU2VydmljZSkge1xyXG4gICAgICAgIHN1cGVyKG1lc3NhZ2UsIGtlcnZpU2VydmljZSlcclxuICAgICAgICB0aGlzLnN1YlR5cGUgPSBtZXNzYWdlLmlucHV0VHlwZTtcclxuICAgICAgICB0aGlzLnR5cGVOYW1lID0gXCJEYXRlVGltZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBnZXREZWZhdWx0VmFsdWUoKTpEYXRle1xyXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSgpO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb2xvclZhbHVlIGV4dGVuZHMgS2VydmlWYWx1ZVR5cGU8c3RyaW5nPiB7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIGtlcnZpU2VydmljZTpLZXJ2aUJhc2VTZXJ2aWNlKSB7XHJcbiAgICAgICAgc3VwZXIobWVzc2FnZSwga2VydmlTZXJ2aWNlKVxyXG4gICAgICAgIHRoaXMudHlwZU5hbWUgPSBcIkNvbG9yXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldERlZmF1bHRWYWx1ZSgpOnN0cmluZ3tcclxuICAgICAgICByZXR1cm4gXCIjZmZmZmZmXCI7XHJcbiAgICB9ICAgIFxyXG59IiwiZXhwb3J0IGNsYXNzIENvbXBvbmVudFJlZntcclxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2Upe1xyXG4gICAgICAgIHRoaXMuaWQ9IG1lc3NhZ2UuaWQ7XHJcbiAgICB9XHJcbn0iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIFRpbSBXZW50emxhdVxyXG4vLyBMaWNlbnNlZCB1bmRlciBNSVRcclxuaW1wb3J0IHsgSUNvbXBvbmVudCwgRGFzaGJvYXJkTGluayB9IGZyb20gXCIuL0lDb21wb25lbnQubW9kZWxcIlxyXG5pbXBvcnQgeyBDb21wb25lbnRSZWYgfSBmcm9tIFwiLi9Db21wb25lbnRSZWZcIlxyXG5pbXBvcnQgeyBLZXJ2aUJhc2VTZXJ2aWNlIH0gZnJvbSAnLi4va2VydmktanMuc2VydmljZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sbGVyIGltcGxlbWVudHMgSUNvbXBvbmVudCB7XHJcbiAgICBwdWJsaWMgdHlwZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHZpc2libGU6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgY29tcG9uZW50VHlwZT1cImNvbnRyb2xsZXJcIlxyXG4gICAgcHVibGljIHVpOmFueSA9IHt9XHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGlkOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcGFyYW1ldGVyczogYW55O1xyXG4gICAgcHVibGljIGlucHV0czogSUNvbXBvbmVudFtdID0gW107XHJcbiAgICBwdWJsaWMgb3V0cHV0czogSUNvbXBvbmVudFtdID0gW107XHJcbiAgICBwdWJsaWMgYWN0aW9uczogSUNvbXBvbmVudFtdID0gW107XHJcbiAgICBwdWJsaWMgaW5wdXRSZWZlcmVuY2VzOiBDb21wb25lbnRSZWZbXSA9IFtdO1xyXG4gICAgcHVibGljIG91dHB1dFJlZmVyZW5jZXM6IENvbXBvbmVudFJlZltdID0gW107XHJcbiAgICBwdWJsaWMgYWN0aW9uc1JlZmVyZW5jZXM6IENvbXBvbmVudFJlZltdID0gW107XHJcbiAgICBwdWJsaWMgZGFzaGJvYXJkczogRGFzaGJvYXJkTGlua1tdPVtdO1xyXG4gICAgcHVibGljIHRlbXBsYXRlOnN0cmluZztcclxuICAgIHByaXZhdGUga2VydmlTZXJ2aWNlOktlcnZpQmFzZVNlcnZpY2VcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBhbnksIGtlcnZpU2VydmljZTpLZXJ2aUJhc2VTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5rZXJ2aVNlcnZpY2UgPSBrZXJ2aVNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5pZCA9IG1lc3NhZ2UuaWQ7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbWVzc2FnZS5uYW1lO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IG1lc3NhZ2UudHlwZTtcclxuICAgICAgICB0aGlzLnVpID0gbWVzc2FnZS51aTtcclxuICAgICAgICB0aGlzLnZpc2libGUgPSBtZXNzYWdlLnZpc2libGU7XHJcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzID0gbWVzc2FnZS5wYXJhbWV0ZXJzO1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGU9bWVzc2FnZS50ZW1wbGF0ZTtcclxuICAgICAgICBmb3IodmFyIHJlZiBvZiBtZXNzYWdlLmlucHV0cyl7XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXRSZWZlcmVuY2VzLnB1c2goIG5ldyBDb21wb25lbnRSZWYocmVmKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IodmFyIHJlZiBvZiBtZXNzYWdlLm91dHB1dHMpe1xyXG4gICAgICAgICAgICB0aGlzLm91dHB1dFJlZmVyZW5jZXMucHVzaCggbmV3IENvbXBvbmVudFJlZihyZWYpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcih2YXIgcmVmIG9mIG1lc3NhZ2UuYWN0aW9ucyl7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uc1JlZmVyZW5jZXMucHVzaCggbmV3IENvbXBvbmVudFJlZihyZWYpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGRhc2hib2FyZExpbmsgb2YgbWVzc2FnZS5kYXNoYm9hcmRMaW5rcyl7XHJcbiAgICAgICAgICAgIHRoaXMuZGFzaGJvYXJkcy5wdXNoKCBuZXcgRGFzaGJvYXJkTGluayh0aGlzLCBkYXNoYm9hcmRMaW5rKSk7IFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVSZWZlcmVuY2VzKCl7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5wdXRzLmxlbmd0aD09MCl7XHJcbiAgICAgICAgICAgIGZvcih2YXIgcmVmIG9mIHRoaXMuaW5wdXRSZWZlcmVuY2VzKXtcclxuICAgICAgICAgICAgICAgIHZhciBjb21wb25lbnQgPSB0aGlzLmtlcnZpU2VydmljZS5nZXRDb21wb25lbnQocmVmLmlkKVxyXG4gICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0cy5wdXNoKGNvbXBvbmVudClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5vdXRwdXRzLmxlbmd0aD09MCl7XHJcbiAgICAgICAgICAgIGZvcih2YXIgcmVmIG9mIHRoaXMub3V0cHV0UmVmZXJlbmNlcyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgY29tcG9uZW50ID0gdGhpcy5rZXJ2aVNlcnZpY2UuZ2V0Q29tcG9uZW50KHJlZi5pZClcclxuICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vdXRwdXRzLnB1c2goY29tcG9uZW50KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmFjdGlvbnMubGVuZ3RoPT0wKXtcclxuICAgICAgICAgICAgZm9yKHZhciByZWYgb2YgdGhpcy5hY3Rpb25zUmVmZXJlbmNlcyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgY29tcG9uZW50ID0gdGhpcy5rZXJ2aVNlcnZpY2UuZ2V0Q29tcG9uZW50KHJlZi5pZClcclxuICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3Rpb25zLnB1c2goY29tcG9uZW50KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJlbW92ZVJlZmVyZW5jZXMoY29tcG9uZW50czpJQ29tcG9uZW50W10pe307XHJcbiAgICByZWxvYWQoY29tcG9uZW50OklDb21wb25lbnQpe307XHJcbn0iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIFRpbSBXZW50emxhdVxyXG4vLyBMaWNlbnNlZCB1bmRlciBNSVRcclxuXHJcbmltcG9ydCB7IElDb21wb25lbnQsIERhc2hib2FyZExpbmsgfSBmcm9tICcuL0lDb21wb25lbnQubW9kZWwnXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIERhc2hib2FyZFNpemVze1xyXG4gICAgcHVibGljIHZhbHVlV2lkdGg6c3RyaW5nID0nM3JlbSc7XHJcbiAgICBwdWJsaWMgYnV0dG9uV2lkdGg6c3RyaW5nID0gJzI1cHgnO1xyXG4gICAgcHVibGljIGJ1dHRvbkhlaWdodDpzdHJpbmcgPSAnJztcclxuICAgIHB1YmxpYyBzd2l0Y2hXaWR0aDpzdHJpbmcgPSAnMjVweCc7XHJcbiAgICBwdWJsaWMgc3dpdGNoSGVpZ2h0OnN0cmluZyA9ICcyNXB4JztcclxuICAgIHB1YmxpYyBnYXVnZVdpZHRoOnN0cmluZyA9ICcxMDBweCc7XHJcbiAgICBwdWJsaWMgZ2F1Z2VIZWlnaHQ6c3RyaW5nID0gJzIwMHB4JztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERhc2hib2FyZE1lc3NhZ2VNb2RlbHtcclxuICAgIHB1YmxpYyBzb3VyY2VJZDpzdHJpbmc7XHJcbiAgICBwdWJsaWMgc291cmNlTmFtZTpzdHJpbmc7XHJcbiAgICBwdWJsaWMgYXJlYTogc3RyaW5nO1xyXG4gICAgcHVibGljIGxldmVsOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgdGltZXN0YW1wOiBEYXRlO1xyXG4gICAgcHVibGljIHRvcGljOnN0cmluZztcclxuICAgIHB1YmxpYyBib2R5OnN0cmluZztcclxuICAgIHB1YmxpYyB0eXBlOnN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlKXtcclxuICAgICAgICB0aGlzLnRpbWVzdGFtcCA9IG5ldyBEYXRlKG1lc3NhZ2UudGltZXN0YW1wKjEwMDApO1xyXG4gICAgICAgIHRoaXMudG9waWMgPSBtZXNzYWdlLnRvcGljO1xyXG4gICAgICAgIHRoaXMuYm9keSA9IG1lc3NhZ2UuYm9keTtcclxuICAgICAgICB0aGlzLnR5cGUgPSBtZXNzYWdlLnR5cGU7XHJcbiAgICAgICAgdGhpcy5zb3VyY2VJZCA9IG1lc3NhZ2Uuc291cmNlX2lkO1xyXG4gICAgICAgIHRoaXMuc291cmNlTmFtZSA9IG1lc3NhZ2Uuc291cmNlX25hbWU7XHJcbiAgICAgICAgdGhpcy5hcmVhID0gbWVzc2FnZS5hcmVhO1xyXG4gICAgICAgIHRoaXMubGV2ZWwgPSBtZXNzYWdlLmxldmVsO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkUGFuZWxDb21wb25lbnR7XHJcbiAgICBwdWJsaWMgY29tcG9uZW50OklDb21wb25lbnQ7XHJcbiAgICBwdWJsaWMgY29tcG9uZW50SWQ6c3RyaW5nO1xyXG4gICAgcHVibGljIGxpbmtJZDphbnk7XHJcbiAgICBwdWJsaWMgcGFyYW1ldGVyczphbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBtZXNzYWdlOiBhbnkpe1xyXG4gICAgICAgIHRoaXMubGlua0lkID0gbWVzc2FnZS5saW5rSWQ7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRJZCA9IG1lc3NhZ2UuY29tcG9uZW50SWQ7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBtZXNzYWdlLmNvbXBvbmVudDtcclxuICAgICAgICB0aGlzLnBhcmFtZXRlcnMgPSBtZXNzYWdlLnBhcmFtZXRlcnM7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRQYW5lbFBhcmFtZXRlcnN7XHJcbiAgICBwdWJsaWMgdGl0bGU6IHN0cmluZyA9IG51bGw7XHJcbiAgICBwdWJsaWMgd2lkdGg6IHN0cmluZyA9IG51bGw7XHJcbiAgICBwdWJsaWMgaGVpZ2h0OiBzdHJpbmcgPSBudWxsO1xyXG4gICAgcHVibGljIHR5cGU6IHN0cmluZyA9IG51bGw7XHJcbiAgICBwdWJsaWMgdXNlckxvZzogYm9vbGVhbiA9IG51bGw7XHJcbiAgICBwdWJsaWMgYXBwSGVhbHRoOiBib29sZWFuID0gbnVsbDtcclxuICAgIHB1YmxpYyBsb2dMZW5ndGggPSA1O1xyXG4gICAgcHVibGljIGxheW91dCA9ICdyb3cnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2VQYXJhbWV0ZXJzKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IG1lc3NhZ2VQYXJhbWV0ZXJzLmxhYmVsO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5jYWxjU2l6ZShtZXNzYWdlUGFyYW1ldGVycy5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB0aGlzLmNhbGNTaXplKG1lc3NhZ2VQYXJhbWV0ZXJzLndpZHRoKTtcclxuICAgICAgICB0aGlzLnVzZXJMb2cgPSBtZXNzYWdlUGFyYW1ldGVycy51c2VyTG9nO1xyXG4gICAgICAgIHRoaXMubG9nTGVuZ3RoID0gbWVzc2FnZVBhcmFtZXRlcnMubG9nTGVuZ3RoO1xyXG4gICAgICAgIHRoaXMuYXBwSGVhbHRoID0gbWVzc2FnZVBhcmFtZXRlcnMuYXBwX2hlYWx0aDtcclxuXHJcbiAgICAgICAgaWYgKG1lc3NhZ2VQYXJhbWV0ZXJzLnR5cGUpIHtcclxuICAgICAgICAgICAgdGhpcy50eXBlID0gbWVzc2FnZVBhcmFtZXRlcnMudHlwZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1lc3NhZ2VQYXJhbWV0ZXJzLmxheW91dCkge1xyXG4gICAgICAgICAgICB0aGlzLmxheW91dCA9IG1lc3NhZ2VQYXJhbWV0ZXJzLmxheW91dDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjYWxjU2l6ZSh2YWx1ZSl7XHJcbiAgICAgICAgaWYgKHZhbHVlPT1udWxsKVxyXG4gICAgICAgICAgICByZXR1cm4gJydcclxuICAgICAgICBlbHNlIGlmICh2YWx1ZT09PScnKVxyXG4gICAgICAgICAgICByZXR1cm4gJydcclxuICAgICAgICBlbHNlIGlmIChpc05hTih2YWx1ZSkpe1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIGlmICh2YWx1ZT4wKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlICsgJyUnO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRQYW5lbCB7XHJcbiAgICBwdWJsaWMgaWQ6c3RyaW5nO1xyXG4gICAgcHVibGljIG5hbWU6c3RyaW5nO1xyXG4gICAgcHVibGljIHBhcmFtZXRlcnM6IERhc2hib2FyZFBhbmVsUGFyYW1ldGVycztcclxuICAgIHB1YmxpYyBjb21wb25lbnRzOiBEYXNoYm9hcmRQYW5lbENvbXBvbmVudFtdPVtdO1xyXG4gICAgcHVibGljIGRhc2hib2FyZDogRGFzaGJvYXJkO1xyXG4gICAgcHVibGljIHR5cGU6c3RyaW5nO1xyXG4gICAgcHVibGljIHN1YlBhbmVsczogRGFzaGJvYXJkUGFuZWxbXSA9IFtdO1xyXG4gICAgcHVibGljIGhhc09ubHlHcm91cFBhbmVsczpib29sZWFuID0gdHJ1ZTtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IgKGRhc2hib2FyZCwgbWVzc2FnZVBhbmVsKSB7XHJcbiAgICAgICAgdGhpcy5kYXNoYm9hcmQ9ZGFzaGJvYXJkO1xyXG4gICAgICAgIHRoaXMuaWQ9bWVzc2FnZVBhbmVsLmlkO1xyXG4gICAgICAgIHRoaXMubmFtZT1tZXNzYWdlUGFuZWwubmFtZTtcclxuICAgICAgICB0aGlzLnR5cGU9bWVzc2FnZVBhbmVsLnR5cGU7XHJcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzPW5ldyBEYXNoYm9hcmRQYW5lbFBhcmFtZXRlcnMobWVzc2FnZVBhbmVsLnVpUGFyYW1ldGVycyk7XHJcbiAgICAgICAgLyppZiAobWVzc2FnZVBhbmVsLmNvbXBvbmVudHMpXHJcbiAgICAgICAgICAgIGZvcih2YXIgY29tcG9uZW50UmVmIG9mIG1lc3NhZ2VQYW5lbC5jb21wb25lbnRzKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50cy5wdXNoKG5ldyBEYXNoYm9hcmRQYW5lbENvbXBvbmVudE1vZGVsKGNvbXBvbmVudFJlZikpXHJcbiAgICAgICAgICAgIH0qL1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChtZXNzYWdlUGFuZWwucGFuZWxzKXtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnc3BhJyxtZXNzYWdlUGFuZWwucGFuZWxzKTtcclxuICAgICAgICAgICAgZm9yKHZhciBzdWJNZXNzYWdlUGFuZWwgb2YgbWVzc2FnZVBhbmVsLnBhbmVscyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGFuZWw9bmV3IERhc2hib2FyZFBhbmVsKHRoaXMsIHN1Yk1lc3NhZ2VQYW5lbCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN1YlBhbmVscy5wdXNoKHBhbmVsKTtcclxuICAgICAgICAgICAgICAgIGlmIChwYW5lbC50eXBlICE9PSAnZ3JvdXAnKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFzT25seUdyb3VwUGFuZWxzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbG9hZChzb3VyY2U6RGFzaGJvYXJkUGFuZWwpe1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ3JsJywgdGhpcyk7XHJcbiAgICAgICAgZm9yKHZhciBzdWJQYW5lbCBvZiBzb3VyY2Uuc3ViUGFuZWxzKXtcclxuICAgICAgICAgICAgdGhpcy5yZWxvYWQoc3ViUGFuZWwpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcih2YXIgc291cmNlQ29tcG9uZW50IG9mIHNvdXJjZS5jb21wb25lbnRzKXtcclxuICAgICAgICAgICAgdmFyIGZvdW5kPWZhbHNlO1xyXG4gICAgICAgICAgICBmb3IodmFyIGNvbXBvbmVudCBvZiB0aGlzLmNvbXBvbmVudHMpe1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5jb21wb25lbnRJZCA9PSBzb3VyY2VDb21wb25lbnQuY29tcG9uZW50SWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvdW5kPXRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFmb3VuZCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudHMucHVzaChzb3VyY2VDb21wb25lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBkZWxldGVDb21wb25lbnRzOkRhc2hib2FyZFBhbmVsQ29tcG9uZW50W10gPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBjb21wb25lbnQgb2YgdGhpcy5jb21wb25lbnRzKXtcclxuICAgICAgICAgICAgdmFyIGZvdW5kPWZhbHNlO1xyXG4gICAgICAgICAgICBmb3IodmFyIHNvdXJjZUNvbXBvbmVudCBvZiBzb3VyY2UuY29tcG9uZW50cyl7XHJcbiAgICAgICAgICAgICAgICBpZiAoc291cmNlQ29tcG9uZW50LmNvbXBvbmVudElkID09IGNvbXBvbmVudC5jb21wb25lbnRJZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgZm91bmQ9dHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWZvdW5kKVxyXG4gICAgICAgICAgICAgICAgZGVsZXRlQ29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ2RzYycsZGVsZXRlQ29tcG9uZW50cyk7XHJcbiAgICAgICAgZm9yKHZhciBjb21wb25lbnQgb2YgZGVsZXRlQ29tcG9uZW50cyl7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50cy5zcGxpY2UoIHRoaXMuY29tcG9uZW50cy5pbmRleE9mKGNvbXBvbmVudCksIDEgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRCYWNrZ3JvdW5kTW9kZWx7XHJcbiAgICBwdWJsaWMgdHlwZTpzdHJpbmc7XHJcbiAgICBwdWJsaWMgY2FtZXJhSWQ6c3RyaW5nO1xyXG4gICAgcHVibGljIGltYWdlOnN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlKXtcclxuICAgICAgICB0aGlzLnR5cGU9bWVzc2FnZS50eXBlO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhSWQ9bWVzc2FnZS5jYW1lcmFJZFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkIGltcGxlbWVudHMgSUNvbXBvbmVudHtcclxuICAgIHB1YmxpYyBpZDpzdHJpbmc7XHJcbiAgICBwdWJsaWMgbmFtZTpzdHJpbmc7XHJcbiAgICBwdWJsaWMgY29tcG9uZW50VHlwZTpzdHJpbmc7XHJcbiAgICBwdWJsaWMgdHlwZTpzdHJpbmc7XHJcbiAgICBwdWJsaWMgaXNEZWZhdWx0OkJvb2xlYW47XHJcbiAgICBwdWJsaWMgdGVtcGxhdGU6c3RyaW5nO1xyXG4gICAgcHVibGljIHBhbmVsczpEYXNoYm9hcmRQYW5lbFtdO1xyXG4gICAgcHVibGljIHN5c1BhbmVsczpEYXNoYm9hcmRQYW5lbFtdO1xyXG4gICAgcHVibGljIGhlYWRlclBhbmVsOiBEYXNoYm9hcmRQYW5lbD1udWxsO1xyXG4gICAgcHVibGljIGZvb3RlckNlbnRlclBhbmVsOiBEYXNoYm9hcmRQYW5lbD1udWxsO1xyXG4gICAgcHVibGljIGZvb3RlckxlZnRQYW5lbDogRGFzaGJvYXJkUGFuZWw9bnVsbDtcclxuICAgIHB1YmxpYyBmb290ZXJSaWdodFBhbmVsOiBEYXNoYm9hcmRQYW5lbD1udWxsO1xyXG4gICAgcHVibGljIHN5c1BhbmVsOiBEYXNoYm9hcmRQYW5lbD1udWxsO1xyXG4gICAgcHVibGljIGJhY2tncm91bmRQYW5lbDogRGFzaGJvYXJkUGFuZWw9bnVsbDtcclxuICAgIHB1YmxpYyBjb250cm9sbGVyUGFuZWw6IERhc2hib2FyZFBhbmVsPW51bGw7XHJcbiAgICBwdWJsaWMgTGVmdFBhZFhQYW5lbDogRGFzaGJvYXJkUGFuZWw9bnVsbDtcclxuICAgIHB1YmxpYyBMZWZ0UGFkWVBhbmVsOiBEYXNoYm9hcmRQYW5lbD1udWxsO1xyXG4gICAgcHVibGljIFJpZ2h0UGFkWFBhbmVsOiBEYXNoYm9hcmRQYW5lbD1udWxsO1xyXG4gICAgcHVibGljIFJpZ2h0UGFkWVBhbmVsOiBEYXNoYm9hcmRQYW5lbD1udWxsO1xyXG4gICAgLy9wdWJsaWMgYmFja2dyb3VuZDogRGFzaGJvYXJkQmFja2dyb3VuZE1vZGVsPW51bGw7XHJcbiAgICBwdWJsaWMgdW5pdFNpemU6IG51bWJlcjtcclxuXHJcbiAgICAvL25vdCB1c2VkIGluIGRhc2hib2FyZHNcclxuICAgIHB1YmxpYyB2aXNpYmxlOmJvb2xlYW47XHJcbiAgICBwdWJsaWMgdWk6YW55O1xyXG4gICAgcHVibGljIGRhc2hib2FyZHM6YW55W10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIGN1cnJlbnRQYW5lbDpEYXNoYm9hcmRQYW5lbCA9IG51bGw7XHJcbiBcclxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2Upe1xyXG4gICAgICAgIHRoaXMuaWQ9bWVzc2FnZS5pZDtcclxuICAgICAgICB0aGlzLm5hbWU9bWVzc2FnZS5uYW1lO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50VHlwZT0nZGFzaGJvYXJkJztcclxuICAgICAgICB0aGlzLnR5cGU9bWVzc2FnZS50eXBlO1xyXG4gICAgICAgIHRoaXMuaXNEZWZhdWx0PW1lc3NhZ2UuaXNEZWZhdWx0O1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGU9bWVzc2FnZS50ZW1wbGF0ZTtcclxuICAgICAgICB0aGlzLnVuaXRTaXplPW1lc3NhZ2UudW5pdFNpemU7XHJcbiAgICAgICAgLy90aGlzLmJhY2tncm91bmQ9bmV3IERhc2hib2FyZEJhY2tncm91bmRNb2RlbChtZXNzYWdlLmJhY2tncm91bmQpO1xyXG4gICAgICAgIHRoaXMucGFuZWxzPVtdO1xyXG4gICAgICAgIHRoaXMuc3lzUGFuZWxzPVtdO1xyXG4gICAgICAgIGlmICghdGhpcy50ZW1wbGF0ZSl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb3IgKGxldCBtZXNzYWdlUGFuZWwgb2YgbWVzc2FnZS5zZWN0aW9ucyl7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW1lc3NhZ2VQYW5lbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Rhc2hib2FyZCB3aXRoIG51bGwgcGFuZWwnLCB0aGlzLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBwYW5lbCA9IG5ldyBEYXNoYm9hcmRQYW5lbCh0aGlzLCBtZXNzYWdlUGFuZWwpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHN5c1BhbmVsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChwYW5lbC5pZD09J2hlYWRlcl9jZW50ZXInKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVyUGFuZWw9cGFuZWw7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwYW5lbC5pZD09J2Zvb3Rlcl9sZWZ0JylcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvb3RlckxlZnRQYW5lbD1wYW5lbDtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBhbmVsLmlkPT0nZm9vdGVyX2NlbnRlcicpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb290ZXJDZW50ZXJQYW5lbD1wYW5lbDtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBhbmVsLmlkPT0nZm9vdGVyX3JpZ2h0JylcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvb3RlclJpZ2h0UGFuZWw9cGFuZWw7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwYW5lbC5pZD09J2hlYWRlcl9yaWdodCcpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zeXNQYW5lbD1wYW5lbDtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBhbmVsLmlkPT0nY29udHJvbGxlcnMnKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbGxlclBhbmVsPXBhbmVsO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocGFuZWwuaWQ9PSdiYWNrZ3JvdW5kJylcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJhY2tncm91bmRQYW5lbD1wYW5lbDtcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBhbmVsLmlkPT0nbGVmdF9wYWRfeCcpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5MZWZ0UGFkWFBhbmVsPXBhbmVsO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocGFuZWwuaWQ9PSdsZWZ0X3BhZF95JylcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkxlZnRQYWRZUGFuZWw9cGFuZWw7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwYW5lbC5pZD09J3JpZ2h0X3BhZF94JylcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlJpZ2h0UGFkWFBhbmVsPXBhbmVsO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocGFuZWwuaWQ9PSdyaWdodF9wYWRfeScpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5SaWdodFBhZFlQYW5lbD1wYW5lbDtcclxuICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgc3lzUGFuZWw9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhbmVsLnR5cGUhPSdncm91cCcpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmN1cnJlbnRQYW5lbD09bnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQYW5lbCA9IG5ldyBEYXNoYm9hcmRQYW5lbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJzpudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICduYW1lJzogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOidncm91cCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NvbXBvbmVudHMnOltdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwYW5lbHMnOltdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd1aVBhcmFtZXRlcnMnOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzonJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzoxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdoZWlnaHQnOjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd1c2VyTG9nJzpmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2xvZ0xlbmd0aCc6MFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBhbmVsLnN1YlBhbmVscy5wdXNoKHBhbmVsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFuZWxzLnB1c2godGhpcy5jdXJyZW50UGFuZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGFuZWwuc3ViUGFuZWxzLnB1c2gocGFuZWwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYW5lbHMucHVzaChwYW5lbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBhbmVsPW51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHN5c1BhbmVsKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3lzUGFuZWxzLnB1c2gocGFuZWwpOyAgICAgIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuY3VycmVudFBhbmVsKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBhbmVsID0gbmV3IERhc2hib2FyZFBhbmVsKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnaWQnOm51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICduYW1lJzogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICd0eXBlJzonZ3JvdXAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnY29tcG9uZW50cyc6W10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdwYW5lbHMnOltdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAndWlQYXJhbWV0ZXJzJzp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGl0bGUnOicnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzoxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaGVpZ2h0JzowLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3VzZXJMb2cnOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2xvZ0xlbmd0aCc6MFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5jdXJyZW50UGFuZWwuc3ViUGFuZWxzLnB1c2gocGFuZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFuZWxzLnB1c2godGhpcy5jdXJyZW50UGFuZWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGlzRW1wdHkoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYW5lbHMubGVuZ3RoID09IDA7XHJcbiAgICB9XHJcbiAgICByZW1vdmVSZWZlcmVuY2VzKGRlbGV0ZUNvbXBvbmVudHM6SUNvbXBvbmVudFtdKXt9O1xyXG4gICAgdXBkYXRlUmVmZXJlbmNlcygpe307XHJcbiAgICByZWxvYWQoY29tcG9uZW50OklDb21wb25lbnQpe1xyXG4gICAgICAgIHZhciBzb3VyY2UgPSBjb21wb25lbnQgYXMgRGFzaGJvYXJkO1xyXG4gICAgICAgIGlmICghdGhpcy5iYWNrZ3JvdW5kUGFuZWwgJiYgc291cmNlLmJhY2tncm91bmRQYW5lbClcclxuICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kUGFuZWw9c291cmNlLmJhY2tncm91bmRQYW5lbDtcclxuICAgICAgICBlbHNlIGlmICh0aGlzLmJhY2tncm91bmRQYW5lbCAmJiAhc291cmNlLmJhY2tncm91bmRQYW5lbClcclxuICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kUGFuZWwgPSBudWxsXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5iYWNrZ3JvdW5kUGFuZWwpXHJcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZFBhbmVsLnJlbG9hZChzb3VyY2UuYmFja2dyb3VuZFBhbmVsKVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuZm9vdGVyTGVmdFBhbmVsICYmIHNvdXJjZS5mb290ZXJMZWZ0UGFuZWwpXHJcbiAgICAgICAgICAgIHRoaXMuZm9vdGVyTGVmdFBhbmVsPXNvdXJjZS5mb290ZXJMZWZ0UGFuZWw7XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5mb290ZXJMZWZ0UGFuZWwgJiYgIXNvdXJjZS5mb290ZXJMZWZ0UGFuZWwpXHJcbiAgICAgICAgICAgIHRoaXMuZm9vdGVyTGVmdFBhbmVsID0gbnVsbFxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZm9vdGVyTGVmdFBhbmVsKVxyXG4gICAgICAgICAgICB0aGlzLmZvb3RlckxlZnRQYW5lbC5yZWxvYWQoc291cmNlLmZvb3RlckxlZnRQYW5lbClcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmZvb3RlclJpZ2h0UGFuZWwgJiYgc291cmNlLmZvb3RlclJpZ2h0UGFuZWwpXHJcbiAgICAgICAgICAgIHRoaXMuZm9vdGVyUmlnaHRQYW5lbD1zb3VyY2UuZm9vdGVyUmlnaHRQYW5lbDtcclxuICAgICAgICBlbHNlIGlmICh0aGlzLmZvb3RlclJpZ2h0UGFuZWwgJiYgIXNvdXJjZS5mb290ZXJSaWdodFBhbmVsKVxyXG4gICAgICAgICAgICB0aGlzLmZvb3RlclJpZ2h0UGFuZWwgPSBudWxsXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5mb290ZXJSaWdodFBhbmVsKVxyXG4gICAgICAgICAgICB0aGlzLmZvb3RlclJpZ2h0UGFuZWwucmVsb2FkKHNvdXJjZS5mb290ZXJSaWdodFBhbmVsKVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuZm9vdGVyQ2VudGVyUGFuZWwgJiYgc291cmNlLmZvb3RlckNlbnRlclBhbmVsKVxyXG4gICAgICAgICAgICB0aGlzLmZvb3RlckNlbnRlclBhbmVsPXNvdXJjZS5mb290ZXJDZW50ZXJQYW5lbDtcclxuICAgICAgICBlbHNlIGlmICh0aGlzLmZvb3RlckNlbnRlclBhbmVsICYmICFzb3VyY2UuZm9vdGVyQ2VudGVyUGFuZWwpXHJcbiAgICAgICAgICAgIHRoaXMuZm9vdGVyQ2VudGVyUGFuZWwgPSBudWxsXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5mb290ZXJDZW50ZXJQYW5lbClcclxuICAgICAgICAgICAgdGhpcy5mb290ZXJDZW50ZXJQYW5lbC5yZWxvYWQoc291cmNlLmZvb3RlckNlbnRlclBhbmVsKVxyXG5cclxuICAgICAgICAvKmlmICghdGhpcy5oZWFkZXJQYW5lbCAmJiBzb3VyY2UuaGVhZGVyUGFuZWwpXHJcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyUGFuZWw9c291cmNlLmhlYWRlclBhbmVsO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaGVhZGVyUGFuZWwgJiYgIXNvdXJjZS5oZWFkZXJQYW5lbClcclxuICAgICAgICAgICAgdGhpcy5oZWFkZXJQYW5lbCA9IG51bGxcclxuICAgICAgICBlbHNlIGlmICh0aGlzLmhlYWRlclBhbmVsKVxyXG4gICAgICAgICAgICB0aGlzLmhlYWRlclBhbmVsLnJlbG9hZChzb3VyY2UuaGVhZGVyUGFuZWwpKi9cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnN5c1BhbmVsICYmIHNvdXJjZS5zeXNQYW5lbClcclxuICAgICAgICAgICAgdGhpcy5zeXNQYW5lbD1zb3VyY2Uuc3lzUGFuZWw7XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zeXNQYW5lbCAmJiAhc291cmNlLnN5c1BhbmVsKVxyXG4gICAgICAgICAgICB0aGlzLnN5c1BhbmVsID0gbnVsbFxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuc3lzUGFuZWwpXHJcbiAgICAgICAgICAgIHRoaXMuc3lzUGFuZWwucmVsb2FkKHNvdXJjZS5zeXNQYW5lbClcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLkxlZnRQYWRYUGFuZWwgJiYgc291cmNlLkxlZnRQYWRYUGFuZWwpXHJcbiAgICAgICAgICAgIHRoaXMuTGVmdFBhZFhQYW5lbD1zb3VyY2UuTGVmdFBhZFhQYW5lbDtcclxuICAgICAgICBlbHNlIGlmICh0aGlzLkxlZnRQYWRYUGFuZWwgJiYgIXNvdXJjZS5MZWZ0UGFkWFBhbmVsKVxyXG4gICAgICAgICAgICB0aGlzLkxlZnRQYWRYUGFuZWwgPSBudWxsXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5MZWZ0UGFkWFBhbmVsKVxyXG4gICAgICAgICAgICB0aGlzLkxlZnRQYWRYUGFuZWwucmVsb2FkKHNvdXJjZS5MZWZ0UGFkWFBhbmVsKVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuTGVmdFBhZFlQYW5lbCAmJiBzb3VyY2UuTGVmdFBhZFlQYW5lbClcclxuICAgICAgICAgICAgdGhpcy5MZWZ0UGFkWVBhbmVsPXNvdXJjZS5MZWZ0UGFkWVBhbmVsO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuTGVmdFBhZFlQYW5lbCAmJiAhc291cmNlLkxlZnRQYWRZUGFuZWwpXHJcbiAgICAgICAgICAgIHRoaXMuTGVmdFBhZFlQYW5lbCA9IG51bGxcclxuICAgICAgICBlbHNlIGlmICh0aGlzLkxlZnRQYWRZUGFuZWwpXHJcbiAgICAgICAgICAgIHRoaXMuTGVmdFBhZFlQYW5lbC5yZWxvYWQoc291cmNlLkxlZnRQYWRZUGFuZWwpXHJcblxyXG4gICAgICAgIGlmICghdGhpcy5SaWdodFBhZFhQYW5lbCAmJiBzb3VyY2UuUmlnaHRQYWRYUGFuZWwpXHJcbiAgICAgICAgICAgIHRoaXMuUmlnaHRQYWRYUGFuZWw9c291cmNlLlJpZ2h0UGFkWFBhbmVsO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuUmlnaHRQYWRYUGFuZWwgJiYgIXNvdXJjZS5SaWdodFBhZFhQYW5lbClcclxuICAgICAgICAgICAgdGhpcy5SaWdodFBhZFhQYW5lbCA9IG51bGxcclxuICAgICAgICBlbHNlIGlmICh0aGlzLlJpZ2h0UGFkWFBhbmVsKVxyXG4gICAgICAgICAgICB0aGlzLlJpZ2h0UGFkWFBhbmVsLnJlbG9hZChzb3VyY2UuUmlnaHRQYWRYUGFuZWwpXHJcblxyXG4gICAgICAgIGlmICghdGhpcy5SaWdodFBhZFlQYW5lbCAmJiBzb3VyY2UuUmlnaHRQYWRZUGFuZWwpXHJcbiAgICAgICAgICAgIHRoaXMuUmlnaHRQYWRZUGFuZWw9c291cmNlLlJpZ2h0UGFkWVBhbmVsO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuUmlnaHRQYWRZUGFuZWwgJiYgIXNvdXJjZS5SaWdodFBhZFlQYW5lbClcclxuICAgICAgICAgICAgdGhpcy5SaWdodFBhZFlQYW5lbCA9IG51bGxcclxuICAgICAgICBlbHNlIGlmICh0aGlzLlJpZ2h0UGFkWVBhbmVsKVxyXG4gICAgICAgICAgICB0aGlzLlJpZ2h0UGFkWVBhbmVsLnJlbG9hZChzb3VyY2UuUmlnaHRQYWRZUGFuZWwpXHJcblxyXG4gICAgICAgIGlmICghdGhpcy5jb250cm9sbGVyUGFuZWwgJiYgc291cmNlLmNvbnRyb2xsZXJQYW5lbClcclxuICAgICAgICAgICAgdGhpcy5jb250cm9sbGVyUGFuZWw9c291cmNlLmNvbnRyb2xsZXJQYW5lbDtcclxuICAgICAgICBlbHNlIGlmICh0aGlzLmNvbnRyb2xsZXJQYW5lbCAmJiAhc291cmNlLmNvbnRyb2xsZXJQYW5lbClcclxuICAgICAgICAgICAgdGhpcy5jb250cm9sbGVyUGFuZWwgPSBudWxsXHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5jb250cm9sbGVyUGFuZWwpXHJcbiAgICAgICAgICAgIHRoaXMuY29udHJvbGxlclBhbmVsLnJlbG9hZChzb3VyY2UuY29udHJvbGxlclBhbmVsKVxyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIGdldERhc2hib2FyZFBhbmVsQnlJZChpZDpzdHJpbmcsIHBhbmVsczpEYXNoYm9hcmRQYW5lbFtdKXtcclxuICAgICAgICBmb3IobGV0IHBhbmVsIG9mIHBhbmVscyl7XHJcbiAgICAgICAgICAgIGlmIChwYW5lbC5pZCA9PSBpZClcclxuICAgICAgICAgICAgICAgIHJldHVybiBwYW5lbDsgXHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzID0gdGhpcy5nZXREYXNoYm9hcmRQYW5lbEJ5SWQoaWQsIHBhbmVsLnN1YlBhbmVscyk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGREYXNoYm9hcmRMaW5rKGxpbms6RGFzaGJvYXJkTGluayl7XHJcbiAgICAgICAgaWYgKGxpbmsuZGFzaGJvYXJkSWQgPT0gJyonIHx8IGxpbmsuZGFzaGJvYXJkSWQgPT0gdGhpcy5pZCB8fCAobGluay5kYXNoYm9hcmRJZD09JyoqZGVmYXVsdCoqJyAmJiB0aGlzLmlzRGVmYXVsdCkpe1xyXG4gICAgICAgICAgICB2YXIgcGFuZWxGb3VuZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB2YXIgcGFuZWwgPSB0aGlzLmdldERhc2hib2FyZFBhbmVsQnlJZChsaW5rLnBhbmVsSWQsIHRoaXMucGFuZWxzKTtcclxuICAgICAgICAgICAgaWYgKCFwYW5lbClcclxuICAgICAgICAgICAgICAgIHBhbmVsID0gdGhpcy5nZXREYXNoYm9hcmRQYW5lbEJ5SWQobGluay5wYW5lbElkLCB0aGlzLnN5c1BhbmVscyk7XHJcbiAgICAgICAgICAgIGlmIChwYW5lbCl7XHJcbiAgICAgICAgICAgICAgICBwYW5lbC5jb21wb25lbnRzLnB1c2gobmV3IERhc2hib2FyZFBhbmVsQ29tcG9uZW50KGxpbmspKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdhZGgnLGxpbmspO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1lc3NhZ2VQYW5lbCA9e1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOmxpbmsucGFuZWxJZCxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOmxpbmsucGFuZWxOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6J3BhbmVsJyxcclxuICAgICAgICAgICAgICAgICAgICB1aVBhcmFtZXRlcnM6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAndGl0bGUnOicnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnd2lkdGgnOjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdoZWlnaHQnOjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICd1c2VyTG9nJzpmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2xvZ0xlbmd0aCc6MFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBuZXdQYW5lbCA9IG5ldyBEYXNoYm9hcmRQYW5lbCh0aGlzLCBtZXNzYWdlUGFuZWwpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGFuZWwuc3ViUGFuZWxzLnB1c2gobmV3UGFuZWwpO1xyXG4gICAgICAgICAgICAgICAgbmV3UGFuZWwuY29tcG9uZW50cy5wdXNoKG5ldyBEYXNoYm9hcmRQYW5lbENvbXBvbmVudChsaW5rKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIFRpbSBXZW50emxhdVxyXG4vLyBMaWNlbnNlZCB1bmRlciBNSVRcclxuXHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBJQ29tcG9uZW50LCBEYXNoYm9hcmRMaW5rIH0gZnJvbSAnLi9JQ29tcG9uZW50Lm1vZGVsJ1xyXG5pbXBvcnQgeyBLZXJ2aUJhc2VTZXJ2aWNlIH0gZnJvbSAnLi4va2VydmktanMuc2VydmljZSdcclxuZXhwb3J0IGNsYXNzIEFjdGlvbiBpbXBsZW1lbnRzIElDb21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBrZXJ2aVNlcnZpY2U6IEtlcnZpQmFzZVNlcnZpY2UgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBpZDogc3RyaW5nID0gbnVsbDtcclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgcHVibGljIGNvbXBvbmVudFR5cGUgPSAnYWN0aW9uJztcclxuICAgIHB1YmxpYyBydW5Db21tYW5kID0gJyc7XHJcbiAgICBwdWJsaWMgaW50ZXJydXB0Q29tbWFuZCA9ICcnO1xyXG4gICAgcHVibGljIHVpID0ge1xyXG4gICAgICAgIHR5cGU6ICcnLFxyXG4gICAgICAgIG9yaWVudGF0aW9uOiAnJyxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGFzaGJvYXJkczogRGFzaGJvYXJkTGlua1tdID0gW107XHJcbiAgICBwdWJsaWMgcnVubmluZyQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IGFueSwga2VydmlTZXJ2aWNlOktlcnZpQmFzZVNlcnZpY2Upe1xyXG4gICAgICAgIHRoaXMua2VydmlTZXJ2aWNlID0ga2VydmlTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuaWQgPSBtZXNzYWdlLmlkO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG1lc3NhZ2UubmFtZTtcclxuICAgICAgICB0aGlzLnVpID0gbWVzc2FnZS51aTtcclxuICAgICAgICB0aGlzLnVpLnZpc2libGUgPSBtZXNzYWdlLnZpc2libGU7XHJcbiAgICAgICAgdGhpcy51aS50eXBlID0gbWVzc2FnZS50eXBlO1xyXG4gICAgICAgIHRoaXMucnVuQ29tbWFuZCA9IG1lc3NhZ2UucnVuQ29tbWFuZDtcclxuICAgICAgICB0aGlzLmludGVycnVwdENvbW1hbmQgPSBtZXNzYWdlLmludGVycnVwdENvbW1hbmQ7XHJcbiAgICAgICAgdGhpcy5ydW5uaW5nJC5uZXh0KG1lc3NhZ2UucnVubmluZyk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGRhc2hib2FyZExpbmsgb2YgbWVzc2FnZS5kYXNoYm9hcmRMaW5rcyl7XHJcbiAgICAgICAgICAgIHRoaXMuZGFzaGJvYXJkcy5wdXNoKG5ldyBEYXNoYm9hcmRMaW5rKHRoaXMsIGRhc2hib2FyZExpbmspKTsgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBydW4ocGFyYW1ldGVycyl7XHJcbiAgICAgICAgLy9pZiAoIXRoaXMucnVubmluZyQudmFsdWUpe1xyXG4gICAgICAgICAgICBpZiAocGFyYW1ldGVycyAmJiBwYXJhbWV0ZXJzLmxlbmd0aD4wKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5rZXJ2aVNlcnZpY2Uuc3BpbmUuc2VuZENvbW1hbmQodGhpcy5ydW5Db21tYW5kLCAuLi5wYXJhbWV0ZXJzKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5rZXJ2aVNlcnZpY2Uuc3BpbmUuc2VuZENvbW1hbmQodGhpcy5ydW5Db21tYW5kKTtcclxuICAgICAgICAvL31cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW50ZXJydXB0KHBhcmFtZXRlcnMpe1xyXG4gICAgICAgIGlmIChwYXJhbWV0ZXJzICYmIHBhcmFtZXRlcnMubGVuZ3RoPjApXHJcbiAgICAgICAgICAgIHRoaXMua2VydmlTZXJ2aWNlLnNwaW5lLnNlbmRDb21tYW5kKHRoaXMuaW50ZXJydXB0Q29tbWFuZCwgLi4ucGFyYW1ldGVycyk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLmtlcnZpU2VydmljZS5zcGluZS5zZW5kQ29tbWFuZCh0aGlzLmludGVycnVwdENvbW1hbmQpO1xyXG4gICAgfVxyXG59IiwiXHJcbmltcG9ydCAqIGFzIEtlcnZpVmFsdWVzIGZyb20gJy4vS2VydmlWYWx1ZXMubW9kZWwnO1xyXG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnLi9jb250cm9sbGVyLm1vZGVsJztcclxuaW1wb3J0IHsgRGFzaGJvYXJkIH0gZnJvbSAnLi9kYXNoYm9hcmQubW9kZWwnO1xyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICcuL2FjdGlvbi5tb2RlbCc7XHJcbmltcG9ydCB7IElDb21wb25lbnQgfSBmcm9tICcuL0lDb21wb25lbnQubW9kZWwnO1xyXG5pbXBvcnQgeyBLZXJ2aUJhc2VTZXJ2aWNlIH0gZnJvbSAnLi4va2VydmktanMuc2VydmljZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50RmFjdG9yeSB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVDb21wb25lbnRzKG1lc3NhZ2U6IGFueSwga2VydmlTZXJ2aWNlOiBLZXJ2aUJhc2VTZXJ2aWNlKSB7XHJcbiAgICAgICAgY29uc3QgZm91bmRDb21wb25lbnRzID0gdGhpcy5jcmVhdGVDb21wb25lbnRzUmVjKG1lc3NhZ2UsIGtlcnZpU2VydmljZSk7XHJcbiAgICAgICAgdGhpcy5saW5rVG9EYXNoYm9hcmRzKGZvdW5kQ29tcG9uZW50c1swXSwgZm91bmRDb21wb25lbnRzWzFdKTtcclxuICAgICAgICByZXR1cm4gZm91bmRDb21wb25lbnRzWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGNyZWF0ZUNvbXBvbmVudHNSZWMobWVzc2FnZTogYW55LCBrZXJ2aVNlcnZpY2UpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gW107XHJcbiAgICAgICAgbGV0IGRhc2hib2FyZHMgPSBbXTtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShtZXNzYWdlKSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgKGkgPCBtZXNzYWdlLmxlbmd0aCk7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3ViQ29tcG9uZW50cyA9IHRoaXMuY3JlYXRlQ29tcG9uZW50c1JlYyhtZXNzYWdlW2ldLCBrZXJ2aVNlcnZpY2UpO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdChzdWJDb21wb25lbnRzWzBdKTtcclxuICAgICAgICAgICAgICAgIGRhc2hib2FyZHMgPSBkYXNoYm9hcmRzLmNvbmNhdChzdWJDb21wb25lbnRzWzFdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBjb21wb25lbnQ6IGFueSA9IG51bGw7XHJcbiAgICAgICAgICAgIGNvbnN0IHN1YkNvbXBvbmVudHM6IGFueVtdID0gW107XHJcbiAgICAgICAgICAgIGlmIChtZXNzYWdlLmNvbXBvbmVudFR5cGUgPT09ICdLZXJ2aUFjdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IG5ldyBBY3Rpb24obWVzc2FnZSwga2VydmlTZXJ2aWNlKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLmNvbXBvbmVudFR5cGUgPT09ICdkYXNoYm9hcmQnKSB7XHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBuZXcgRGFzaGJvYXJkKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgZGFzaGJvYXJkcy5wdXNoKGNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZS5jb21wb25lbnRUeXBlID09PSAnY29udHJvbGxlcicpIHtcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IG5ldyBDb250cm9sbGVyKG1lc3NhZ2UsIGtlcnZpU2VydmljZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZS5jb21wb25lbnRUeXBlID09PSAnYm9vbGVhbi12YWx1ZScpIHtcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IG5ldyBLZXJ2aVZhbHVlcy5Cb29sZWFuVmFsdWUobWVzc2FnZSwga2VydmlTZXJ2aWNlKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLmNvbXBvbmVudFR5cGUgPT09ICdudW1iZXItdmFsdWUnKSB7XHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBuZXcgS2VydmlWYWx1ZXMuTnVtYmVyVmFsdWUobWVzc2FnZSwga2VydmlTZXJ2aWNlKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLmNvbXBvbmVudFR5cGUgPT09ICdzdHJpbmctdmFsdWUnKSB7XHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBuZXcgS2VydmlWYWx1ZXMuU3RyaW5nVmFsdWUobWVzc2FnZSwga2VydmlTZXJ2aWNlKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLmNvbXBvbmVudFR5cGUgPT09ICdlbnVtLXZhbHVlJykge1xyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gbmV3IEtlcnZpVmFsdWVzLlNlbGVjdFZhbHVlKG1lc3NhZ2UsIGtlcnZpU2VydmljZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZS5jb21wb25lbnRUeXBlID09PSAnZGF0ZXRpbWUtdmFsdWUnKSB7XHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBuZXcgS2VydmlWYWx1ZXMuRGF0ZVRpbWVWYWx1ZShtZXNzYWdlLCBrZXJ2aVNlcnZpY2UpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2UuY29tcG9uZW50VHlwZSA9PT0gJ2NvbG9yLXZhbHVlJykge1xyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gbmV3IEtlcnZpVmFsdWVzLkNvbG9yVmFsdWUobWVzc2FnZSwga2VydmlTZXJ2aWNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChjb21wb25lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzdWJDb21wb25lbnRzKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBzdWJDb21wb25lbnQgb2Ygc3ViQ29tcG9uZW50cykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHN1YkNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFtyZXN1bHQsIGRhc2hib2FyZHNdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgRml4Q29udHJvbGxlclJlZmVyZW5jZXMoY29tcG9uZW50czogSUNvbXBvbmVudFtdKXtcclxuICAgICAgICBmb3IgKGxldCBjb21wb25lbnQgb2YgY29tcG9uZW50cykge1xyXG4gICAgICAgICAgICBjb25zdCBjb250cm9sbGVyID0gY29tcG9uZW50IGFzIENvbnRyb2xsZXI7XHJcbiAgICAgICAgICAgIGlmIChjb250cm9sbGVyICYmIGNvbnRyb2xsZXIuY29tcG9uZW50VHlwZSA9PT0gJ2NvbnRyb2xsZXInKSB7XHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLnVwZGF0ZVJlZmVyZW5jZXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBsaW5rVG9EYXNoYm9hcmRzKGNvbXBvbmVudHM6IElDb21wb25lbnRbXSwgZGFzaGJvYXJkczogRGFzaGJvYXJkW10pIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnbHRkJywgY29tcG9uZW50cywgZGFzaGJvYXJkcyk7XHJcbiAgICAgICAgZm9yIChsZXQgY29tcG9uZW50IG9mIGNvbXBvbmVudHMpIHtcclxuICAgICAgICAgICAgaWYgKCEoY29tcG9uZW50IGluc3RhbmNlb2YgRGFzaGJvYXJkKSkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbGluayBvZiBjb21wb25lbnQuZGFzaGJvYXJkcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGRhc2hib2FyZCBvZiBkYXNoYm9hcmRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhc2hib2FyZC5hZGREYXNoYm9hcmRMaW5rKGxpbmspO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyAgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgRmlsZUJhc2V7XHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHBhdGg6IHN0cmluZztcclxuICAgIHB1YmxpYyBpc0ZpbGUgPSB0cnVlO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRmlsZSBleHRlbmRzIEZpbGVCYXNle1xyXG4gICAgcHVibGljIHNpemU6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERpcmVjdG9yeSBleHRlbmRzIEZpbGVCYXNle1xyXG4gICAgcHVibGljIGZpbGVzJDogQmVoYXZpb3JTdWJqZWN0PEZpbGVCYXNlW10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocGF0aDogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnBhdGggPSBwYXRoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGVGaWxlcyhmaWxlcykge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBbXVxyXG4gICAgICAgIGZvcihsZXQgZmlsZSBvZiBmaWxlcykge1xyXG4gICAgICAgICAgICBpZiAoZmlsZS5pc19maWxlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlRW50cnkgPSBuZXcgRmlsZSgpO1xyXG4gICAgICAgICAgICAgICAgZmlsZUVudHJ5Lm5hbWUgPSBmaWxlLm5hbWU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwID0gdGhpcy5wYXRoICE9PSAnLycgPyB0aGlzLnBhdGggOiAnJztcclxuICAgICAgICAgICAgICAgIGZpbGVFbnRyeS5wYXRoID0gcCArICcvJyArIGZpbGUubmFtZTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGZpbGVFbnRyeSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwID0gdGhpcy5wYXRoICE9PSAnLycgPyB0aGlzLnBhdGggOiAnJztcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpcmVjdG9yeSA9IG5ldyBEaXJlY3RvcnkocCArICcvJyArIGZpbGUubmFtZSk7XHJcbiAgICAgICAgICAgICAgICBkaXJlY3RvcnkubmFtZSA9IGZpbGUubmFtZTtcclxuICAgICAgICAgICAgICAgIGRpcmVjdG9yeS5pc0ZpbGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGRpcmVjdG9yeSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5maWxlcyQubmV4dChyZXN1bHQpO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyAgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEtlcnZpQmFzZVNlcnZpY2UgfSBmcm9tICcuLi9rZXJ2aS1qcy5zZXJ2aWNlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0cmVhbUV2ZW50IHtcclxuICAgIHB1YmxpYyBzdHJlYW1JZDogc3RyaW5nO1xyXG4gICAgcHVibGljIGV2ZW50OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZGF0YTogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHN0cmVhbUlkOiBzdHJpbmcsIHN0cmVhbUV2ZW50OiBzdHJpbmcsIGRhdGE6IGFueSkge1xyXG4gICAgICAgIHRoaXMuc3RyZWFtSWQgPSBzdHJlYW1JZDtcclxuICAgICAgICB0aGlzLmV2ZW50ID0gc3RyZWFtRXZlbnQ7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFN0cmVhbSB7XHJcbiAgICBwdWJsaWMgZXZlbnRzJDogQmVoYXZpb3JTdWJqZWN0PFN0cmVhbUV2ZW50PiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8U3RyZWFtRXZlbnQ+KG51bGwpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RyZWFtSWQ6IHN0cmluZywgcHJpdmF0ZSBldmVudHM6IHN0cmluZ1tdLCBwcml2YXRlIGtlcnZpU2VydmljZTogS2VydmlCYXNlU2VydmljZSl7XHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAga2VydmlTZXJ2aWNlLnNwaW5lLmFkZFN0cmVhbUhhbmRsZXIoc3RyZWFtSWQsIGV2ZW50cywgZnVuY3Rpb24oZV9zdHJlYW1JZDogc3RyaW5nLCBlX3N0cmVhbUV2ZW50OiBzdHJpbmcsIGVfZGF0YTogYW55KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IFN0cmVhbUV2ZW50KGVfc3RyZWFtSWQsIGVfc3RyZWFtRXZlbnQsIGVfZGF0YSk7XHJcbiAgICAgICAgICAgIGxldCBub3RpZnkgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKGV2ZW50cyA9PT0gbnVsbCB8fCBldmVudHMubGVuZ3RoID09PSAwIHx8IGV2ZW50cy5pbmRleE9mKGVfc3RyZWFtRXZlbnQpID49IDApIHtcclxuICAgICAgICAgICAgICAgIG5vdGlmeSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG5vdGlmeSkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5ldmVudHMkLm5leHQoZXZlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsb3NlKCkge1xyXG4gICAgICAgIHRoaXMua2VydmlTZXJ2aWNlLnNwaW5lLnJlbW92ZVN0cmVhbUhhbmRsZXIodGhpcy5zdHJlYW1JZCwgdGhpcy5ldmVudHMsIG51bGwpO1xyXG4gICAgfVxyXG59IiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCBUaW0gV2VudHpsYXVcclxuLy8gTGljZW5zZWQgdW5kZXIgTUlUXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgS2VydmlTcGluZUJhc2UgfSBmcm9tICcuL3NwaW5lL2tlcnZpLXNwaW5lYmFzZSc7XHJcbmltcG9ydCB7IEtlcnZpV1NTcGluZSB9IGZyb20gJy4vc3BpbmUva2Vydmktd3MnO1xyXG5pbXBvcnQgeyBLZXJ2aVJNUVNwaW5lIH0gZnJvbSAnLi9zcGluZS9rZXJ2aS1ybXEnO1xyXG5pbXBvcnQgeyAgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IElDb21wb25lbnQgfSBmcm9tICcuL21vZGVscy9JQ29tcG9uZW50Lm1vZGVsJztcclxuaW1wb3J0IHsgQ29tcG9uZW50RmFjdG9yeSB9IGZyb20gJy4vbW9kZWxzL2ZhY3RvcnknO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRNZXNzYWdlTW9kZWwgfSBmcm9tICcuL21vZGVscy9kYXNoYm9hcmQubW9kZWwnO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmQgfSBmcm9tICcuL21vZGVscy9kYXNoYm9hcmQubW9kZWwnO1xyXG5pbXBvcnQgeyBGaWxlQmFzZSwgRGlyZWN0b3J5IH0gZnJvbSAnLi9tb2RlbHMvZmlsZS5tb2RlbCc7XHJcbmltcG9ydCB7IFN0cmVhbSB9IGZyb20gJy4vbW9kZWxzL3N0cmVhbS5tb2RlbCc7XHJcbmRlY2xhcmUgdmFyIGtlcnZpU29ja2V0QWRkcmVzczogYW55O1xyXG5kZWNsYXJlIHZhciBzb2NrZXRQcm90b2NvbDogYW55O1xyXG5cclxuZXhwb3J0IGVudW0gQ29ubmVjdGlvblN0YXRlIHtkaXNjb25uZWN0ZWQsIGxvYWRpbmcsIGF1dGhlbnRpY2F0ZSwgY29ubmVjdGVkfVxyXG5leHBvcnQgZW51bSBVc2VyTG9nU3RhdGVUeXBlIHtub3JtYWwsIHdhcm5pbmcsIGVycm9yfVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgS2VydmlCYXNlU2VydmljZSB7XHJcbiAgcHVibGljIHNwaW5lOiBLZXJ2aVNwaW5lQmFzZSA9IG51bGw7XHJcbiAgcHJpdmF0ZSBsYXN0QXBwUGluZ1RpbWU6IERhdGUgPSBudWxsO1xyXG4gIHByaXZhdGUgbGFzdFBpbmdEaWZmID0gMDtcclxuICBwdWJsaWMgYXBwUGluZ0RpZmYkOiBCZWhhdmlvclN1YmplY3Q8bnVtYmVyPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8bnVtYmVyPigwKTtcclxuICBwdWJsaWMgYXBwUGluZ0RlbGF5JDogQmVoYXZpb3JTdWJqZWN0PG51bWJlcj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PG51bWJlcj4oMCk7XHJcbiAgcHVibGljIG1wcyQ6IEJlaGF2aW9yU3ViamVjdDxudW1iZXI+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxudW1iZXI+KDApO1xyXG4gIHByaXZhdGUgYXBwSW5mbyA9IG51bGw7XHJcbiAgcHJpdmF0ZSAgdGV4dHM6IHt9ID0gbnVsbDtcclxuICBwcml2YXRlIGNvbXBvbmVudHM6IElDb21wb25lbnRbXSA9IFtdO1xyXG4gIHByaXZhdGUgY29tcG9uZW50cyQ6IEJlaGF2aW9yU3ViamVjdDxJQ29tcG9uZW50W10+ID0gbmV3ICBCZWhhdmlvclN1YmplY3Q8SUNvbXBvbmVudFtdPihbXSk7XHJcblxyXG4gIHB1YmxpYyBjb25uZWN0aW9uU3RhdGUkOiBCZWhhdmlvclN1YmplY3Q8Q29ubmVjdGlvblN0YXRlPiA9IG5ldyAgQmVoYXZpb3JTdWJqZWN0PENvbm5lY3Rpb25TdGF0ZT4oQ29ubmVjdGlvblN0YXRlLmRpc2Nvbm5lY3RlZCk7XHJcbiAgcHVibGljICBhcHBsaWNhdGlvbiQ6IEJlaGF2aW9yU3ViamVjdDxhbnk+O1xyXG4gIHB1YmxpYyBkb0F1dGhlbnRpY2F0ZSA9IGZhbHNlO1xyXG4gIHB1YmxpYyBjb21wb25lbnRzQ2hhbmdlZCQ6IEJlaGF2aW9yU3ViamVjdDxCb29sZWFuPiA9IG5ldyAgQmVoYXZpb3JTdWJqZWN0PEJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgcHJpdmF0ZSBsb2dNZXNzYWdlczogRGFzaGJvYXJkTWVzc2FnZU1vZGVsW10gPSBbXTtcclxuICBwcml2YXRlIGxvZ01lc3NhZ2VzJDogQmVoYXZpb3JTdWJqZWN0PERhc2hib2FyZE1lc3NhZ2VNb2RlbFtdPiA9IG5ldyAgQmVoYXZpb3JTdWJqZWN0PERhc2hib2FyZE1lc3NhZ2VNb2RlbFtdPihbXSk7XHJcbiAgcHJpdmF0ZSBsYXN0TG9nTWVzc2FnZSQ6IEJlaGF2aW9yU3ViamVjdDxEYXNoYm9hcmRNZXNzYWdlTW9kZWw+ID0gbmV3ICBCZWhhdmlvclN1YmplY3Q8RGFzaGJvYXJkTWVzc2FnZU1vZGVsPihudWxsKTtcclxuICBwcml2YXRlIExvZ01lc3NhZ2VDb3VudCQ6IEJlaGF2aW9yU3ViamVjdDxudW1iZXI+ID0gbmV3ICBCZWhhdmlvclN1YmplY3Q8bnVtYmVyPigwKTtcclxuICBwcml2YXRlIExvZ01lc3NhZ2VTdGF0ZSQ6IEJlaGF2aW9yU3ViamVjdDxVc2VyTG9nU3RhdGVUeXBlPiA9IG5ldyAgQmVoYXZpb3JTdWJqZWN0PFVzZXJMb2dTdGF0ZVR5cGU+KFVzZXJMb2dTdGF0ZVR5cGUubm9ybWFsKTtcclxuXHJcbiAgcHJpdmF0ZSBzdHJlYW1zID0ge31cclxuXHJcbiAgSVBDUmVhZHkkOiBCZWhhdmlvclN1YmplY3Q8Qm9vbGVhbj4gPSBuZXcgIEJlaGF2aW9yU3ViamVjdDxCb29sZWFuPihmYWxzZSk7XHJcblxyXG4gIHByaXZhdGUgX3Jlc29sdmVTZWxmO1xyXG4gIHByaXZhdGUgX3JlamVjdFNlbGY7XHJcbiAgcHJpdmF0ZSBhdXRoUHJvbWlzZTogUHJvbWlzZTxzdHJpbmc+ID0gbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBjb25zb2xlLmxvZygna2Vydmkgc2VydmljZSBjb25zdHJ1Y3RvcicpO1xyXG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICB0aGlzLmFwcGxpY2F0aW9uJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55PihudWxsKTtcclxuICAgIHRoaXMuSVBDUmVhZHkkLnN1YnNjcmliZShmdW5jdGlvbihjb25uZWN0ZWQpIHtcclxuICAgICAgaWYgKGNvbm5lY3RlZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdrZXJ2aSBzZXJ2aWNlIGlwYyByZWFkeSAoY29ubmVjdGVkKScpO1xyXG4gICAgICAgIHNlbGYuc3BpbmUuYWRkRXZlbnRIYW5kbGVyKCd2YWx1ZUNoYW5nZWQnLCAnJywgZnVuY3Rpb24oaWQsIHZhbHVlKSB7XHJcbiAgICAgICAgICBmb3IgKGNvbnN0IGNvbXBvbmVudCBvZiBzZWxmLmNvbXBvbmVudHMpIHtcclxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5pZCA9PT0gdmFsdWUuaWQpIHtcclxuICAgICAgICAgICAgICBjb25zdCBkeW5hbWljVmFsdWUgPSBjb21wb25lbnQgYXMgYW55O1xyXG4gICAgICAgICAgICAgIGR5bmFtaWNWYWx1ZS52YWx1ZVRTID0gbmV3IERhdGUodGhpcy50aW1lc3RhbXApO1xyXG4gICAgICAgICAgICAgIGR5bmFtaWNWYWx1ZS5zZXQodmFsdWUudmFsdWUsIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZWxmLnNwaW5lLmFkZEV2ZW50SGFuZGxlcignYXBwUGluZycsIG51bGwsIGZ1bmN0aW9uKGlkLCBkYXRhKSB7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYXBwUGluZycsIHNlbGYubGFzdEFwcFBpbmdUaW1lLCBpZCwgZGF0YSk7XHJcbiAgICAgICAgICBpZiAoc2VsZi5sYXN0QXBwUGluZ1RpbWUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgc2VsZi5sYXN0QXBwUGluZ1RpbWUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgY29uc3QgcGluZ0RpZmYgPSBub3cuZ2V0VGltZSgpIC0gc2VsZi5sYXN0QXBwUGluZ1RpbWUuZ2V0VGltZSgpIC0gMTAwMDtcclxuICAgICAgICAgICAgY29uc3QgcGluZ0RlbGF5ID0gbm93LmdldFRpbWUoKSAtIGRhdGEudHMgKiAxMDAwO1xyXG4gICAgICAgICAgICBzZWxmLmFwcFBpbmdEZWxheSQubmV4dChwaW5nRGVsYXkpO1xyXG4gICAgICAgICAgICBzZWxmLmxhc3RBcHBQaW5nVGltZSA9IG5vdztcclxuICAgICAgICAgICAgaWYgKHBpbmdEaWZmICE9PSBzZWxmLmxhc3RQaW5nRGlmZikge1xyXG4gICAgICAgICAgICAgIHNlbGYubGFzdFBpbmdEaWZmID0gcGluZ0RpZmY7XHJcbiAgICAgICAgICAgICAgc2VsZi5hcHBQaW5nRGlmZiQubmV4dChzZWxmLmxhc3RQaW5nRGlmZik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2VsZi5zcGluZS5hZGRFdmVudEhhbmRsZXIoJ2FjdGlvblN0YXJ0ZWQnLCAnJywgZnVuY3Rpb24oaWQpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdhcycsIGlkKTtcclxuICAgICAgICAgIGZvciAoY29uc3QgY29tcG9uZW50IG9mIHNlbGYuY29tcG9uZW50cykge1xyXG4gICAgICAgICAgICBpZiAoY29tcG9uZW50LmlkID09PSBpZCkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGFjdGlvbiA9IGNvbXBvbmVudCBhcyBhbnk7XHJcbiAgICAgICAgICAgICAgYWN0aW9uLnJ1bm5pbmckLm5leHQodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2VsZi5zcGluZS5hZGRFdmVudEhhbmRsZXIoJ2FjdGlvbkRvbmUnLCAnJywgZnVuY3Rpb24oaWQpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdhZCcsIGlkKTtcclxuICAgICAgICAgIGZvciAoY29uc3QgY29tcG9uZW50IG9mIHNlbGYuY29tcG9uZW50cykge1xyXG4gICAgICAgICAgICBpZiAoY29tcG9uZW50LmlkID09PSBpZCkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGFjdGlvbiA9IGNvbXBvbmVudCBhcyBhbnk7XHJcbiAgICAgICAgICAgICAgYWN0aW9uLnJ1bm5pbmckLm5leHQoZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNlbGYuc3BpbmUuYWRkRXZlbnRIYW5kbGVyKCd1c2VyTG9nTWVzc2FnZScsIG51bGwsIGZ1bmN0aW9uKHYpIHtcclxuICAgICAgICAgIGNvbnN0IG1lc3NhZ2VzID0gc2VsZi5sb2dNZXNzYWdlcyQudmFsdWU7XHJcbiAgICAgICAgICBjb25zdCBuZXdNZXNzYWdlID0gbmV3IERhc2hib2FyZE1lc3NhZ2VNb2RlbCh0aGlzKTtcclxuICAgICAgICAgIG1lc3NhZ2VzLnVuc2hpZnQobmV3TWVzc2FnZSk7XHJcbiAgICAgICAgICBpZiAobWVzc2FnZXMubGVuZ3RoID4gMTApIHtcclxuICAgICAgICAgICAgbWVzc2FnZXMucG9wKCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgbGV0IGhhc0Vycm9ycyA9IDA7XHJcbiAgICAgICAgICBsZXQgaGFzV2FybmluZ3MgPSAwO1xyXG4gICAgICAgICAgZm9yIChjb25zdCBtZXNzYWdlIG9mIG1lc3NhZ2VzKSB7XHJcbiAgICAgICAgICAgIGlmIChtZXNzYWdlLmxldmVsID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgaGFzRXJyb3JzICsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChtZXNzYWdlLmxldmVsID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgaGFzV2FybmluZ3MgKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChoYXNFcnJvcnMpIHtcclxuICAgICAgICAgICAgc2VsZi5Mb2dNZXNzYWdlU3RhdGUkLm5leHQoVXNlckxvZ1N0YXRlVHlwZS5lcnJvcik7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc1dhcm5pbmdzKSB7XHJcbiAgICAgICAgICAgIHNlbGYuTG9nTWVzc2FnZVN0YXRlJC5uZXh0KFVzZXJMb2dTdGF0ZVR5cGUud2FybmluZyk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZWxmLkxvZ01lc3NhZ2VTdGF0ZSQubmV4dChVc2VyTG9nU3RhdGVUeXBlLm5vcm1hbCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzZWxmLkxvZ01lc3NhZ2VDb3VudCQubmV4dChtZXNzYWdlcy5sZW5ndGgpO1xyXG4gICAgICAgICAgc2VsZi5sYXN0TG9nTWVzc2FnZSQubmV4dChuZXdNZXNzYWdlKTtcclxuICAgICAgICAgIHNlbGYubG9nTWVzc2FnZXMkLm5leHQobWVzc2FnZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBHZXREaXJlY3RvcnkocGF0aDogc3RyaW5nKTogUHJvbWlzZTxEaXJlY3Rvcnk+IHtcclxuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZTxEaXJlY3Rvcnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgY29uc3QgZGlyZWN0b3J5ID0gbmV3IERpcmVjdG9yeShwYXRoKTtcclxuICAgICAgdGhpcy5zcGluZS5zZW5kUXVlcnkoJ2ZpbGVzX2dldF9kaXInLCBwYXRoLCBmdW5jdGlvbihkaXJlY3RvcnlGaWxlcykge1xyXG4gICAgICAgIGRpcmVjdG9yeS51cGRhdGVGaWxlcyhkaXJlY3RvcnlGaWxlcyk7XHJcbiAgICAgICAgcmVzb2x2ZShkaXJlY3RvcnkpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHByb21pc2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgR2V0VGh1bWJuYWlsKHBhdGg6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHRoaXMuc3BpbmUuc2VuZFF1ZXJ5KCdmaWxlc19nZXRfdGh1bWJuYWlsJywgcGF0aCwgZnVuY3Rpb24odGh1bWJuYWlsKSB7XHJcbiAgICAgICAgcmVzb2x2ZSh0aHVtYm5haWwpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHByb21pc2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgR2V0RmlsZShwYXRoOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0aGlzLnNwaW5lLnNlbmRRdWVyeSgnZmlsZXNfZ2V0X2ZpbGUnLCBwYXRoLCBmdW5jdGlvbihmaWxlKSB7XHJcbiAgICAgICAgcmVzb2x2ZShmaWxlKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBwcm9taXNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIEdldFN0cmVhbShzdHJlYW1JZDogc3RyaW5nLCBldmVudHMgPSBbXSkge1xyXG4gICAgcmV0dXJuIG5ldyBTdHJlYW0oc3RyZWFtSWQsIGV2ZW50cywgdGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdGV4dChrZXk6IHN0cmluZywgZGVmYXVsdFZhbHVlOiBzdHJpbmc9ICcnKTogc3RyaW5nIHtcclxuICAgIGlmICh0aGlzLnRleHRzICYmIGtleSBpbiB0aGlzLnRleHRzKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnRleHRzW2tleV07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldExvZ01lc3NhZ2VzJCgpOiBPYnNlcnZhYmxlPERhc2hib2FyZE1lc3NhZ2VNb2RlbFtdPiB7XHJcbiAgICByZXR1cm4gdGhpcy5sb2dNZXNzYWdlcyQuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0TGFzdExvZ01lc3NhZ2UkKCk6IE9ic2VydmFibGU8RGFzaGJvYXJkTWVzc2FnZU1vZGVsPiB7XHJcbiAgICByZXR1cm4gdGhpcy5sYXN0TG9nTWVzc2FnZSQuYXNPYnNlcnZhYmxlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0TG9nU3RhdGUkKCk6IE9ic2VydmFibGU8VXNlckxvZ1N0YXRlVHlwZT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuTG9nTWVzc2FnZVN0YXRlJC5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRMb2dNZXNzYWdlQ291bnQkKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XHJcbiAgICByZXR1cm4gdGhpcy5Mb2dNZXNzYWdlQ291bnQkLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzQXBwRW1wdHkoKSB7XHJcbiAgICBjb25zdCBkZWZhdWx0RGFzaGJvYXJkID0gdGhpcy5nZXREZWZhdWx0RGFzaGJvYXJkKCk7XHJcbiAgICBpZiAoZGVmYXVsdERhc2hib2FyZCkge1xyXG4gICAgICByZXR1cm4gZGVmYXVsdERhc2hib2FyZC5pc0VtcHR5KCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRDb21wb25lbnQoaWQ6IHN0cmluZywgY29tcG9uZW50VHlwZTogc3RyaW5nID0gbnVsbCkge1xyXG4gICAgZm9yIChjb25zdCBjb21wb25lbnQgb2YgdGhpcy5jb21wb25lbnRzKSB7XHJcbiAgICAgIGlmIChjb21wb25lbnQuaWQgPT09IGlkICYmIChjb21wb25lbnRUeXBlID09IG51bGwgfHwgY29tcG9uZW50LmNvbXBvbmVudFR5cGUgPT09IGNvbXBvbmVudFR5cGUpKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0Q29tcG9uZW50c0J5VHlwZSh0eXBlOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBjb21wb25lbnQgb2YgdGhpcy5jb21wb25lbnRzKSB7XHJcbiAgICAgIGlmIChjb21wb25lbnQuY29tcG9uZW50VHlwZSA9PT0gdHlwZSkge1xyXG4gICAgICAgIHJlc3VsdC5wdXNoKGNvbXBvbmVudCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0RGVmYXVsdERhc2hib2FyZCgpOiBEYXNoYm9hcmQge1xyXG4gICAgY29uc3QgZGFzaGJvYXJkcyA9IHRoaXMuZ2V0Q29tcG9uZW50c0J5VHlwZSgnZGFzaGJvYXJkJykgYXMgRGFzaGJvYXJkW107XHJcbiAgICBmb3IgKGNvbnN0IGRhc2hib2FyZCBvZiBkYXNoYm9hcmRzKSB7XHJcbiAgICAgIGlmIChkYXNoYm9hcmQuaXNEZWZhdWx0KSB7XHJcbiAgICAgICAgICByZXR1cm4gZGFzaGJvYXJkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoZGFzaGJvYXJkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHJldHVybiBkYXNoYm9hcmRzWzBdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbiAgcHVibGljIGNvbm5lY3QoKSB7XHJcbiAgICBsZXQgYWRkcmVzcyA9IG51bGw7XHJcbiAgICBsZXQgcHJvdG9jb2wgPSAnd3MnO1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKGtlcnZpU29ja2V0QWRkcmVzcykge1xyXG4gICAgICAgIGFkZHJlc3MgPSBrZXJ2aVNvY2tldEFkZHJlc3M7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHNvY2tldFByb3RvY29sKSB7XHJcbiAgICAgICAgcHJvdG9jb2wgPSBzb2NrZXRQcm90b2NvbDtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAvLyBmb3IgdGVzdGluZyB3aXRoIG5nIHNlcnZlXHJcbiAgICAgIGNvbnN0IGh0dHBQcm90b2NvbCA9IGxvY2F0aW9uLnByb3RvY29sO1xyXG4gICAgICBpZiAoaHR0cFByb3RvY29sID09PSAnaHR0cHMnKSB7XHJcbiAgICAgICAgcHJvdG9jb2wgPSAnd3NzJztcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBodHRwSG9zdCA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZTtcclxuICAgICAgYWRkcmVzcyA9IGh0dHBIb3N0ICsgJzo5MDAwJztcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKCdrcycsIGFkZHJlc3MpO1xyXG5cclxuICAgIHRoaXMuc3BpbmUgPSBuZXcgS2VydmlXU1NwaW5lKHtcclxuICAgICAgYWRkcmVzczogYWRkcmVzcyxcclxuICAgICAgcHJvdG9jb2w6IHByb3RvY29sLFxyXG4gICAgICBvbk9wZW46IHRoaXMub25PcGVuLFxyXG4gICAgICBvbkNsb3NlOiB0aGlzLm9uQ2xvc2UsXHJcbiAgICAgIG9uQXV0aGVudGljYXRlOiB0aGlzLm9uQXV0aGVudGljYXRlLFxyXG4gICAgICBvbkF1dGhlbnRpY2F0ZUZhaWxlZDogdGhpcy5vbkF1dGhlbnRpY2F0ZUZhaWxlZCxcclxuICAgICAgb25Mb2dPZmY6IHRoaXMub25Mb2dvZmYsXHJcbiAgICAgIG9uQXV0aGVudGljYXRlU3RhcnQ6IHRoaXMub25BdXRoZW50aWNhdGVTdGFydCxcclxuICAgICAgb25NUFM6IHRoaXMub25NUFMsXHJcbiAgICAgIHRhcmdldFNjb3BlOiB0aGlzXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb25uZWN0TVEoKSB7XHJcbiAgICBjb25zb2xlLmxvZygna3MnLCBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdtcWMnKSk7XHJcblxyXG4gICAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ21xYycpKSB7XHJcbiAgICAgIHRoaXMuc3BpbmUgPSBuZXcgS2VydmlSTVFTcGluZSh7XHJcbiAgICAgICAgb25PcGVuOiB0aGlzLm9uT3BlbixcclxuICAgICAgICBvbkNsb3NlOiB0aGlzLm9uQ2xvc2UsXHJcbiAgICAgICAgb25BdXRoZW50aWNhdGU6IHRoaXMub25BdXRoZW50aWNhdGUsXHJcbiAgICAgICAgb25BdXRoZW50aWNhdGVGYWlsZWQ6IHRoaXMub25BdXRoZW50aWNhdGVGYWlsZWQsXHJcbiAgICAgICAgb25Mb2dPZmY6IHRoaXMub25Mb2dvZmYsXHJcbiAgICAgICAgb25BdXRoZW50aWNhdGVTdGFydDogdGhpcy5vbkF1dGhlbnRpY2F0ZVN0YXJ0LFxyXG4gICAgICAgIHRhcmdldFNjb3BlOiB0aGlzLFxyXG4gICAgICAgIGFwaVRva2VuOiBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ21xYycpKVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdxbWMgbm90IGZvdW5kIGluIHN0b3JhZ2UnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzQW5vbnltb3VzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3BpbmUub3B0aW9ucy51c2VyTmFtZSA9PT0gJ2Fub255bW91cyc7XHJcbiAgfVxyXG5cclxuICBhdXRoZW50aWNhdGUodXNlck5hbWUsIHBhc3N3b3JkKSB7XHJcbiAgICBjb25zb2xlLmxvZygnc2EnLCB1c2VyTmFtZSwgcGFzc3dvcmQpO1xyXG4gICAgdGhpcy5hdXRoUHJvbWlzZSA9IG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0aGlzLl9yZXNvbHZlU2VsZiA9IHJlc29sdmU7XHJcbiAgICAgIHRoaXMuX3JlamVjdFNlbGYgPSByZWplY3Q7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc3BpbmUuYXV0aGVudGljYXRlKHVzZXJOYW1lLCBwYXNzd29yZCk7XHJcbiAgICByZXR1cm4gdGhpcy5hdXRoUHJvbWlzZTtcclxuICB9XHJcblxyXG4gIGxvZ29mZigpIHtcclxuICAgIHRoaXMuc3BpbmUubG9nb2ZmKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uQXV0aGVudGljYXRlU3RhcnQoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkF1dGhlbnRpY2F0ZSgpIHtcclxuICAgIHRoaXMuZG9BdXRoZW50aWNhdGUgPSB0cnVlO1xyXG4gICAgdGhpcy5yZXNldCgpO1xyXG4gICAgdGhpcy5fcmVzb2x2ZVNlbGYoJ29rJyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uQXV0aGVudGljYXRlRmFpbGVkKCkge1xyXG4gICAgdGhpcy5fcmVqZWN0U2VsZignZXJyb3InKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25Mb2dvZmYoKSB7XHJcbiAgICB0aGlzLmRvQXV0aGVudGljYXRlID0gdHJ1ZTtcclxuICAgIGlmICh0aGlzLnNwaW5lLmZpcnN0T25PcGVuKSB7XHJcbiAgICAgIHRoaXMuSVBDUmVhZHkkLm5leHQodHJ1ZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnJlc2V0KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlc2V0KCkge1xyXG4gICAgdGhpcy5jb21wb25lbnRzID0gW107XHJcbiAgICB0aGlzLmNvbXBvbmVudHMkLm5leHQodGhpcy5jb21wb25lbnRzKTtcclxuXHJcbiAgICBjb25zdCBtZXNzYWdlcyA9IFtdO1xyXG4gICAgdGhpcy5Mb2dNZXNzYWdlU3RhdGUkLm5leHQoVXNlckxvZ1N0YXRlVHlwZS5ub3JtYWwpO1xyXG4gICAgdGhpcy5Mb2dNZXNzYWdlQ291bnQkLm5leHQobWVzc2FnZXMubGVuZ3RoKTtcclxuICAgIHRoaXMubG9nTWVzc2FnZXMkLm5leHQobWVzc2FnZXMpO1xyXG5cclxuICAgIGlmICh0aGlzLklQQ1JlYWR5JC52YWx1ZSkge1xyXG4gICAgICB0aGlzLmNvbm5lY3Rpb25TdGF0ZSQubmV4dChDb25uZWN0aW9uU3RhdGUuYXV0aGVudGljYXRlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY29ubmVjdGlvblN0YXRlJC5uZXh0KENvbm5lY3Rpb25TdGF0ZS5kaXNjb25uZWN0ZWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRDb21wb25lbnRJbmZvKHJldHJ5Q291bnQsIG1vZHVsZV9sb2FkKSB7XHJcbiAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgIHRoaXMuc3BpbmUuc2VuZFF1ZXJ5KCdHZXRBcHBsaWNhdGlvbkluZm8nLCBmdW5jdGlvbihhcHBJbmZvKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdhcHAgaW5mbycsIGFwcEluZm8pO1xyXG4gICAgICB0aGlzLnNwaW5lLnNlbmRRdWVyeSgnZ2V0Q29tcG9uZW50SW5mbycsIGZ1bmN0aW9uKG1lc3NhZ2UpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY29tcG9uZW50IGluZm8nLCBtZXNzYWdlKTtcclxuICAgICAgICBzZWxmLmFwcGxpY2F0aW9uJC5uZXh0KGFwcEluZm8pO1xyXG4gICAgICAgIHNlbGYudGV4dHMgPSBhcHBJbmZvLmRpc3BsYXkudGV4dHM7XHJcbiAgICAgICAgc2VsZi5jb21wb25lbnRzID0gQ29tcG9uZW50RmFjdG9yeS5jcmVhdGVDb21wb25lbnRzKG1lc3NhZ2UsIHNlbGYpO1xyXG4gICAgICAgIENvbXBvbmVudEZhY3RvcnkuRml4Q29udHJvbGxlclJlZmVyZW5jZXMoc2VsZi5nZXRDb21wb25lbnRzQnlUeXBlKCdjb250cm9sbGVyJykpO1xyXG4gICAgICAgIHNlbGYuY29tcG9uZW50cyQubmV4dChzZWxmLmNvbXBvbmVudHMpO1xyXG4gICAgICAgIHNlbGYuY29ubmVjdGlvblN0YXRlJC5uZXh0KENvbm5lY3Rpb25TdGF0ZS5jb25uZWN0ZWQpO1xyXG4gICAgICAgIGlmIChtb2R1bGVfbG9hZCkge1xyXG4gICAgICAgICAgc2VsZi5jb21wb25lbnRzQ2hhbmdlZCQubmV4dCh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NvbXBvbmVudHMnLCBzZWxmLmNvbXBvbmVudHMpO1xyXG4gICAgICB9LFxyXG4gICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdnZXQgY29tcG9uZW50IGluZm8gdGltZW91dCcpO1xyXG4gICAgICAgIGlmIChyZXRyeUNvdW50ID4gMCkge1xyXG4gICAgICAgICAgc2VsZi5nZXRDb21wb25lbnRJbmZvKHJldHJ5Q291bnQgLSAxLCBtb2R1bGVfbG9hZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbk9wZW4oZmlyc3QpIHtcclxuICAgIGNvbnNvbGUubG9nKCdrZXJ2aSBzZXJ2aWNlIG9uIG9wZW4nLCB0aGlzLnNwaW5lLmZpcnN0T25PcGVuLCBmaXJzdCwgdGhpcyk7XHJcbiAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgIHRoaXMuY29ubmVjdGlvblN0YXRlJC5uZXh0KENvbm5lY3Rpb25TdGF0ZS5sb2FkaW5nKTtcclxuICAgIHRoaXMuZG9BdXRoZW50aWNhdGUgPSB0aGlzLnNwaW5lLmRvQXV0aGVudGljYXRlO1xyXG4gICAgdGhpcy5nZXRDb21wb25lbnRJbmZvKDIsIGZhbHNlKTtcclxuICAgIGlmIChzZWxmLnNwaW5lLmZpcnN0T25PcGVuKSB7XHJcbiAgICAgIHRoaXMuSVBDUmVhZHkkLm5leHQodHJ1ZSk7XHJcbiAgICAgIHRoaXMuc3BpbmUuYWRkRXZlbnRIYW5kbGVyKCdtb2R1bGVTdGFydGVkJywgJycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ21vZHVsZSBsb2FkZWQnLCBzZWxmLmNvbXBvbmVudHMpO1xyXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc2VsZi5nZXRDb21wb25lbnRJbmZvKDIsIHRydWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLCAyMDAwKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLnNwaW5lLmFkZEV2ZW50SGFuZGxlcignbW9kdWxlU3RvcHBlZCcsICcnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdtb2R1bGUgdW5sb2FkZWQnKTtcclxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdtb2R1bGUgdW5sb2FkZWQsIHJlZnJlc2gnKTtcclxuICAgICAgICAgICAgc2VsZi5nZXRDb21wb25lbnRJbmZvKDIsIHRydWUpO1xyXG4gICAgICAgIH0sIDUwMDApO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25DbG9zZSgpIHtcclxuICAgIHRoaXMucmVzZXQoKTtcclxuICAgIGNvbnNvbGUubG9nKCdrcyBvbiBjbG9zZScpO1xyXG4gICAgdGhpcy5JUENSZWFkeSQubmV4dChmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uTVBTKG1wczogbnVtYmVyKSB7XHJcbiAgICB0aGlzLm1wcyQubmV4dChtcHMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkhlYXJ0YmVhdCgpIHtcclxuXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uQ29ubmVjdCgpIHtcclxuXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1rZXJ2aS1qcycsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxwPlxyXG4gICAgICBrZXJ2aS1qcyB3b3JrcyFcclxuICAgIDwvcD5cclxuICBgLFxyXG4gIHN0eWxlczogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIEtlcnZpSnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEtlcnZpSnNDb21wb25lbnQgfSBmcm9tICcuL2tlcnZpLWpzLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW0tlcnZpSnNDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtLZXJ2aUpzQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgS2VydmlKc01vZHVsZSB7IH1cclxuIl0sIm5hbWVzIjpbInRzbGliXzEuX192YWx1ZXMiLCJ0c2xpYl8xLl9fZXh0ZW5kcyIsIktlcnZpVmFsdWVzLkJvb2xlYW5WYWx1ZSIsIktlcnZpVmFsdWVzLk51bWJlclZhbHVlIiwiS2VydmlWYWx1ZXMuU3RyaW5nVmFsdWUiLCJLZXJ2aVZhbHVlcy5TZWxlY3RWYWx1ZSIsIktlcnZpVmFsdWVzLkRhdGVUaW1lVmFsdWUiLCJLZXJ2aVZhbHVlcy5Db2xvclZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBR0E7SUE0Q0ksd0JBQW1CLGtCQUFrQjtRQUFsQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQUE7UUExQzlCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBRTlCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFDbkIsb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFDckIsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFDbkIsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFDcEIsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLFVBQUssR0FBRyxLQUFLLENBQUM7UUFDZCxjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLFlBQU8sR0FBRyxJQUFJLElBQUksQ0FBQztRQUNuQixRQUFHLEdBQUcsQ0FBQyxDQUFDO1FBRUUsY0FBUyxHQUFHLElBQUksQ0FBQztRQUVwQixZQUFPLEdBQVE7WUFDZCxR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

/***/ }),

/***/ "../../dist/kervi-zorro/fesm5/kervi-zorro.js":
/*!**********************************************************************************************!*\
  !*** D:/tim privat/github/kervi/kervi-ui/kervi/ui/web/dist/kervi-zorro/fesm5/kervi-zorro.js ***!
  \**********************************************************************************************/
/*! exports provided: KerviZorroService, KerviZorroModule, ɵw, ɵba, ɵv, ɵu, ɵs, ɵy, ɵz, ɵx, ɵo, ɵm, ɵr, ɵq, ɵl, ɵk, ɵp, ɵj, ɵi, ɵn, ɵh, ɵc, ɵg, ɵf, ɵd, ɵb, ɵe, ɵa, ɵt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KerviZorroService", function() { return KerviZorroService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KerviZorroModule", function() { return KerviZorroModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵw", function() { return ActionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵba", function() { return AppHealthComponent; });
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
                    template: "<!-- <p>{{panel.name}} - {{panel.type}} - {{groupLayout}} - {{bodyOnly}} - {{inline}} - {{panel.subPanels.length}} - {{panel.components.length}} - {{headerComponents.length}} - {{bodyComponents.length}}</p> -->\n<!-- <p>w={{width}} - {{inGroup}}</p> -->\n<!-- {{ panel.parameters | json}} -->\n<ng-container *ngIf=\"panel.type=='group'\">\n    <div class=\"kervi-panel-deck\" [fxLayout]=\"panel.parameters.layout\" fxLayout.xs=\"column\"  fxLayoutGap=\"0.5%\">\n        <ng-container *ngFor=\"let subPanel of panel.subPanels\">\n            <ng-container *ngIf=\"subPanel.type!='group'\">\n                        <kervi-dashboard-panel fxFlex.xs=\"100\" [fxFlex]=\"subPanel.parameters.width\" [bodyOnly]=\"true\" [inGroup]=\"true\" [dashboardSizes]=\"dashboardSizes\"  [panel]=\"subPanel\"></kervi-dashboard-panel>\n            </ng-container>\n            <ng-container *ngIf=\"subPanel.type=='group'\">\n                    <kervi-dashboard-panel fxFlex.xs=\"100\" [fxFlex]=\"subPanel.parameters.width\" [inGroup]=\"true\" [dashboardSizes]=\"dashboardSizes\"  [panel]=\"subPanel\"></kervi-dashboard-panel>\n            </ng-container>\n        </ng-container>\n    </div>\n</ng-container>\n\n<ng-container *ngIf=\"panel.type!='group' && !inline\">\n    \n    <nz-card  [nzTitle]=\"showHeader ? title : null\" [nzExtra]=\"headerComponents.length>0 ? extraTemplate : null\">\n        \n        <ng-template #extraTemplate>\n            <ng-container *ngFor=\"let panelComponent of headerComponents\">\n                        <kervi-widget [component]=\"panelComponent.component\" [dashboardPanel]=\"panel\" [inline]=\"inline\"  [linkParameters]=\"panelComponent.parameters\"></kervi-widget>\n            </ng-container>\n        </ng-template>\n        <ng-container *ngFor=\"let panelComponent of bodyComponents\">\n            <kervi-widget [component]=\"panelComponent.component\" [dashboardPanel]=\"panel\"  [inline]=\"inline\"  [linkParameters]=\"panelComponent.parameters\"></kervi-widget>\n        </ng-container>\n    \n        <div *ngIf=\"panel.parameters.userLog\"  >\n            \n            <kervi-user-log></kervi-user-log>\n        </div>\n        <div *ngIf=\"panel.parameters.appHealth\"  >\n            \n            <kervi-app-health></kervi-app-health>\n        </div> \n    </nz-card>\n</ng-container>\n\n<ng-template [ngIf]=\"inline && panel.components.length>0\" >\n    <ng-container *ngFor=\"let panelComponent of panel.components\" >\n        <kervi-widget [component]=\"panelComponent.component\"  [inline]=\"inline\" [dashboardPanel]=\"panel\"  [linkParameters]=\"panelComponent.parameters\"></kervi-widget>\n    </ng-container>\n</ng-template>",
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
                // console.log("gv", v);
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
     * @return {?}
     */
    MPEGViewerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.stream) {
            this.streamSubscription.unsubscribe();
            this.stream.close();
        }
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
            this.stream.close();
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
//import { TemplateService } from '../../template.service';
var AppHealthComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(AppHealthComponent, _super);
    function AppHealthComponent() {
        return _super.call(this) || this;
    }
    /**
     * @return {?}
     */
    AppHealthComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.ngOnInitAppHealth();
    };
    AppHealthComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'kervi-app-health',
                    template: "<div fxLayout=\"row\" *ngIf=\"!inline\" class=\"kervi-block-widget\"> \n    <div fxFlex=\"60\" class=\"kervi-value-label\">\n        web socket messages \n    </div>\n    \n    <div fxFlex class=\"kervi-value-section\">\n        <span class=\"value-value\" >\n            <!-- <i *ngIf=\"currentIcon\" class=\"fa fa-{{currentIcon}}\"></i> -->\n            <!-- <value-sparkline [value]=\"value\"></value-sparkline> -->\n            {{mps}}\n        </span>\n    </div>\n        \n</div>\n\n<div fxLayout=\"row\" *ngIf=\"!inline\" class=\"kervi-block-widget\"> \n    <div fxFlex=\"60\" class=\"kervi-value-label\">\n        Ping diff \n    </div>\n    \n    <div fxFlex class=\"kervi-value-section\">\n        <span class=\"value-value\" >\n            <!-- <i *ngIf=\"currentIcon\" class=\"fa fa-{{currentIcon}}\"></i> -->\n            <!-- <value-sparkline [value]=\"value\"></value-sparkline> -->\n            {{pingDiff}}\n        </span>\n    </div>\n        \n</div>\n\n<div fxLayout=\"row\" *ngIf=\"!inline\" class=\"kervi-block-widget\"> \n    <div fxFlex=\"60\" class=\"kervi-value-label\">\n        Ping delay \n    </div>\n    \n    <div fxFlex class=\"kervi-value-section\">\n        <span class=\"value-value\" >\n            <!-- <i *ngIf=\"currentIcon\" class=\"fa fa-{{currentIcon}}\"></i> -->\n            <!-- <value-sparkline [value]=\"value\"></value-sparkline> -->\n            {{pingDelay}}\n        </span>\n    </div>\n        \n</div>",
                    styles: [""],
                },] },
    ];
    /** @nocollapse */
    AppHealthComponent.ctorParameters = function () { return []; };
    return AppHealthComponent;
}(ngx_kervi__WEBPACK_IMPORTED_MODULE_2__["KerviAppHealthComponent"]));

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
                        UserMessagesComponent,
                        AppHealthComponent
                    ],
                    exports: [
                        DashboardPanelComponent,
                        ControllerPadComponent,
                        CamViewerComponent,
                        UserLogComponent,
                        UserMessageButtonComponent,
                        UserMessagesComponent,
                        AppHealthComponent
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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2Vydmktem9ycm8uanMubWFwIiwic291cmNlcyI6WyJuZzovL2tlcnZpLXpvcnJvL2xpYi9rZXJ2aS16b3Jyby5zZXJ2aWNlLnRzIiwibmc6Ly9rZXJ2aS16b3Jyby9saWIvZGFzaGJvYXJkLXBhbmVsL2Rhc2hib2FyZC1wYW5lbC5jb21wb25lbnQudHMiLCJuZzovL2tlcnZpLXpvcnJvL2xpYi93aWRnZXQvd2lkZ2V0LmNvbXBvbmVudC50cyIsIm5nOi8va2Vydmktem9ycm8vbGliL3ZhbHVlcy9udW1iZXItdmFsdWUvbnVtYmVyLXZhbHVlLmNvbXBvbmVudC50cyIsIm5nOi8va2Vydmktem9ycm8vbGliL3ZhbHVlcy9ib29sZWFuLXZhbHVlL2Jvb2xlYW4tdmFsdWUuY29tcG9uZW50LnRzIiwibmc6Ly9rZXJ2aS16b3Jyby9saWIvdmFsdWVzL3N0cmluZy12YWx1ZS9zdHJpbmctdmFsdWUuY29tcG9uZW50LnRzIiwibmc6Ly9rZXJ2aS16b3Jyby9saWIvdmFsdWVzL2RhdGV0aW1lLXZhbHVlL2RhdGV0aW1lLXZhbHVlLmNvbXBvbmVudC50cyIsIm5nOi8va2Vydmktem9ycm8vbGliL3ZhbHVlcy9jb2xvci12YWx1ZS9jb2xvci12YWx1ZS5jb21wb25lbnQudHMiLCJuZzovL2tlcnZpLXpvcnJvL2xpYi91aS1jb21wb25lbnRzL3NwYXJrbGluZS9zcGFya2xpbmUuY29tcG9uZW50LnRzIiwibmc6Ly9rZXJ2aS16b3Jyby9saWIvdWktY29tcG9uZW50cy9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC50cyIsIm5nOi8va2Vydmktem9ycm8vbGliL3VpLWNvbXBvbmVudHMvZ2F1Z2UvZ2F1Z2UuY29tcG9uZW50LnRzIiwibmc6Ly9rZXJ2aS16b3Jyby9saWIvdWktY29tcG9uZW50cy9jaGFydC9jaGFydC5jb21wb25lbnQudHMiLCJuZzovL2tlcnZpLXpvcnJvL2xpYi91aS1jb21wb25lbnRzL3N3aXRjaC1idXR0b24vc3dpdGNoLWJ1dHRvbi5jb21wb25lbnQudHMiLCJuZzovL2tlcnZpLXpvcnJvL2xpYi91aS1jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnRzIiwibmc6Ly9rZXJ2aS16b3Jyby9saWIvdWktY29tcG9uZW50cy9tcGVnLXZpZXdlci9tcGVnLXZpZXdlci5jb21wb25lbnQudHMiLCJuZzovL2tlcnZpLXpvcnJvL2xpYi91aS1jb21wb25lbnRzL2RhdGV0aW1lcGlja2VyL2RhdGV0aW1lcGlja2VyLmNvbXBvbmVudC50cyIsIm5nOi8va2Vydmktem9ycm8vbGliL3VpLWNvbXBvbmVudHMvaWNvbnMvaWNvbnMuY29tcG9uZW50LnRzIiwibmc6Ly9rZXJ2aS16b3Jyby9saWIvdWktY29tcG9uZW50cy9jb2xvci9jb2xvci5jb21wb25lbnQudHMiLCJuZzovL2tlcnZpLXpvcnJvL2xpYi91aS1jb21wb25lbnRzL3VpLWNvbXBvbmVudHMubW9kdWxlLnRzIiwibmc6Ly9rZXJ2aS16b3Jyby9saWIvdmFsdWVzL2tlcnZpLXZhbHVlL2tlcnZpLXZhbHVlLmNvbXBvbmVudC50cyIsIm5nOi8va2Vydmktem9ycm8vbGliL3ZhbHVlcy92YWx1ZXMubW9kdWxlLnRzIiwibmc6Ly9rZXJ2aS16b3Jyby9saWIvY29udHJvbGxlci1wYWQvY29udHJvbGxlci1wYWQuY29tcG9uZW50LnRzIiwibmc6Ly9rZXJ2aS16b3Jyby9saWIvY2FtLXZpZXdlci9jYW0tdmlld2VyLmNvbXBvbmVudC50cyIsIm5nOi8va2Vydmktem9ycm8vbGliL2FjdGlvbi9hY3Rpb24uY29tcG9uZW50LnRzIiwibmc6Ly9rZXJ2aS16b3Jyby9saWIvbG9nL3VzZXItbG9nL3VzZXItbG9nLmNvbXBvbmVudC50cyIsIm5nOi8va2Vydmktem9ycm8vbGliL2FwcC1oZWFsdGgvYXBwLWhlYWx0aC5jb21wb25lbnQudHMiLCJuZzovL2tlcnZpLXpvcnJvL2xpYi9sb2cvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LnRzIiwibmc6Ly9rZXJ2aS16b3Jyby9saWIvbG9nL21lc3NhZ2UtYnV0dG9uL21lc3NhZ2UtYnV0dG9uLmNvbXBvbmVudC50cyIsIm5nOi8va2Vydmktem9ycm8vbGliL2tlcnZpLXpvcnJvLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBLZXJ2aVpvcnJvU2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgS2VydmlEYXNoYm9hcmRQYW5lbENvbXBvbmVudCB9IGZyb20gJ25neC1rZXJ2aSdcclxuaW1wb3J0IHsgZ3JvdXAgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdrZXJ2aS1kYXNoYm9hcmQtcGFuZWwnLFxyXG4gIHRlbXBsYXRlOiBgPCEtLSA8cD57e3BhbmVsLm5hbWV9fSAtIHt7cGFuZWwudHlwZX19IC0ge3tncm91cExheW91dH19IC0ge3tib2R5T25seX19IC0ge3tpbmxpbmV9fSAtIHt7cGFuZWwuc3ViUGFuZWxzLmxlbmd0aH19IC0ge3twYW5lbC5jb21wb25lbnRzLmxlbmd0aH19IC0ge3toZWFkZXJDb21wb25lbnRzLmxlbmd0aH19IC0ge3tib2R5Q29tcG9uZW50cy5sZW5ndGh9fTwvcD4gLS0+XHJcbjwhLS0gPHA+dz17e3dpZHRofX0gLSB7e2luR3JvdXB9fTwvcD4gLS0+XHJcbjwhLS0ge3sgcGFuZWwucGFyYW1ldGVycyB8IGpzb259fSAtLT5cclxuPG5nLWNvbnRhaW5lciAqbmdJZj1cInBhbmVsLnR5cGU9PSdncm91cCdcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJrZXJ2aS1wYW5lbC1kZWNrXCIgW2Z4TGF5b3V0XT1cInBhbmVsLnBhcmFtZXRlcnMubGF5b3V0XCIgZnhMYXlvdXQueHM9XCJjb2x1bW5cIiAgZnhMYXlvdXRHYXA9XCIwLjUlXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgc3ViUGFuZWwgb2YgcGFuZWwuc3ViUGFuZWxzXCI+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzdWJQYW5lbC50eXBlIT0nZ3JvdXAnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxrZXJ2aS1kYXNoYm9hcmQtcGFuZWwgZnhGbGV4LnhzPVwiMTAwXCIgW2Z4RmxleF09XCJzdWJQYW5lbC5wYXJhbWV0ZXJzLndpZHRoXCIgW2JvZHlPbmx5XT1cInRydWVcIiBbaW5Hcm91cF09XCJ0cnVlXCIgW2Rhc2hib2FyZFNpemVzXT1cImRhc2hib2FyZFNpemVzXCIgIFtwYW5lbF09XCJzdWJQYW5lbFwiPjwva2VydmktZGFzaGJvYXJkLXBhbmVsPlxyXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInN1YlBhbmVsLnR5cGU9PSdncm91cCdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8a2VydmktZGFzaGJvYXJkLXBhbmVsIGZ4RmxleC54cz1cIjEwMFwiIFtmeEZsZXhdPVwic3ViUGFuZWwucGFyYW1ldGVycy53aWR0aFwiIFtpbkdyb3VwXT1cInRydWVcIiBbZGFzaGJvYXJkU2l6ZXNdPVwiZGFzaGJvYXJkU2l6ZXNcIiAgW3BhbmVsXT1cInN1YlBhbmVsXCI+PC9rZXJ2aS1kYXNoYm9hcmQtcGFuZWw+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbjwvbmctY29udGFpbmVyPlxyXG5cclxuPG5nLWNvbnRhaW5lciAqbmdJZj1cInBhbmVsLnR5cGUhPSdncm91cCcgJiYgIWlubGluZVwiPlxyXG4gICAgXHJcbiAgICA8bnotY2FyZCAgW256VGl0bGVdPVwic2hvd0hlYWRlciA/IHRpdGxlIDogbnVsbFwiIFtuekV4dHJhXT1cImhlYWRlckNvbXBvbmVudHMubGVuZ3RoPjAgPyBleHRyYVRlbXBsYXRlIDogbnVsbFwiPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjZXh0cmFUZW1wbGF0ZT5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgcGFuZWxDb21wb25lbnQgb2YgaGVhZGVyQ29tcG9uZW50c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8a2Vydmktd2lkZ2V0IFtjb21wb25lbnRdPVwicGFuZWxDb21wb25lbnQuY29tcG9uZW50XCIgW2Rhc2hib2FyZFBhbmVsXT1cInBhbmVsXCIgW2lubGluZV09XCJpbmxpbmVcIiAgW2xpbmtQYXJhbWV0ZXJzXT1cInBhbmVsQ29tcG9uZW50LnBhcmFtZXRlcnNcIj48L2tlcnZpLXdpZGdldD5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBwYW5lbENvbXBvbmVudCBvZiBib2R5Q29tcG9uZW50c1wiPlxyXG4gICAgICAgICAgICA8a2Vydmktd2lkZ2V0IFtjb21wb25lbnRdPVwicGFuZWxDb21wb25lbnQuY29tcG9uZW50XCIgW2Rhc2hib2FyZFBhbmVsXT1cInBhbmVsXCIgIFtpbmxpbmVdPVwiaW5saW5lXCIgIFtsaW5rUGFyYW1ldGVyc109XCJwYW5lbENvbXBvbmVudC5wYXJhbWV0ZXJzXCI+PC9rZXJ2aS13aWRnZXQ+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICBcclxuICAgICAgICA8ZGl2ICpuZ0lmPVwicGFuZWwucGFyYW1ldGVycy51c2VyTG9nXCIgID5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxrZXJ2aS11c2VyLWxvZz48L2tlcnZpLXVzZXItbG9nPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJwYW5lbC5wYXJhbWV0ZXJzLmFwcEhlYWx0aFwiICA+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8a2VydmktYXBwLWhlYWx0aD48L2tlcnZpLWFwcC1oZWFsdGg+XHJcbiAgICAgICAgPC9kaXY+IFxyXG4gICAgPC9uei1jYXJkPlxyXG48L25nLWNvbnRhaW5lcj5cclxuXHJcbjxuZy10ZW1wbGF0ZSBbbmdJZl09XCJpbmxpbmUgJiYgcGFuZWwuY29tcG9uZW50cy5sZW5ndGg+MFwiID5cclxuICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHBhbmVsQ29tcG9uZW50IG9mIHBhbmVsLmNvbXBvbmVudHNcIiA+XHJcbiAgICAgICAgPGtlcnZpLXdpZGdldCBbY29tcG9uZW50XT1cInBhbmVsQ29tcG9uZW50LmNvbXBvbmVudFwiICBbaW5saW5lXT1cImlubGluZVwiIFtkYXNoYm9hcmRQYW5lbF09XCJwYW5lbFwiICBbbGlua1BhcmFtZXRlcnNdPVwicGFuZWxDb21wb25lbnQucGFyYW1ldGVyc1wiPjwva2Vydmktd2lkZ2V0PlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbjwvbmctdGVtcGxhdGU+YCxcclxuICBzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIERhc2hib2FyZFBhbmVsQ29tcG9uZW50IGV4dGVuZHMgS2VydmlEYXNoYm9hcmRQYW5lbENvbXBvbmVudCB7XHJcbiAgcHVibGljIGdyb3VwTGF5b3V0PVwicm93XCI7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5uZ09uSW5pdFBhbmVsKCk7XHJcbiAgICBpZiAodGhpcy5wYW5lbC5oYXNPbmx5R3JvdXBQYW5lbHMpXHJcbiAgICAgIHRoaXMuZ3JvdXBMYXlvdXQgPSBcInJvd1wiO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgS2VydmlXaWRnZXRDb21wb25lbnQgfSBmcm9tICduZ3gta2VydmknXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2tlcnZpLXdpZGdldCcsXHJcbiAgdGVtcGxhdGU6IGA8bmctY29udGFpbmVyICpuZ0lmPVwid2lkZ2V0VHlwZT09J3ZhbHVlJ1wiPlxyXG4gICAgPGRpdiBmeExheW91dD1cInJvd1wiICpuZ0lmPVwiIWlubGluZVwiIGNsYXNzPVwia2VydmktYmxvY2std2lkZ2V0XCI+IFxyXG4gICAgICAgIDxkaXYgZnhGbGV4PVwiNjBcIiBjbGFzcz1cImtlcnZpLXZhbHVlLWxhYmVsXCI+XHJcbiAgICAgICAgICAgIDxzcGFuICAgKm5nSWY9XCJsaW5rUGFyYW1ldGVycy5sYWJlbEljb25cIiBjbGFzcz1cInBpIHBpLXt7bGlua1BhcmFtZXRlcnMubGFiZWxJY29ufX1cIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuICAgKm5nSWY9XCJsaW5rUGFyYW1ldGVycy5sYWJlbFwiPnt7bGlua1BhcmFtZXRlcnMubGFiZWx9fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGZ4RmxleCBjbGFzcz1cImtlcnZpLXZhbHVlLXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgPGtlcnZpLXZhbHVlICpuZ0lmPVwiY29tcG9uZW50LmNvbXBvbmVudFR5cGU9PSdLZXJ2aVZhbHVlJ1wiIFt2YWx1ZV09XCJjb21wb25lbnRcIiBbaW5saW5lXT1cImZhbHNlXCIgW2Rhc2hib2FyZFNpemVzXT1cImRhc2hib2FyZFNpemVzXCIgIFtsaW5rUGFyYW1ldGVyc109XCJsaW5rUGFyYW1ldGVyc1wiPjwva2VydmktdmFsdWU+XHJcbiAgICAgICAgICAgIDxrZXJ2aS1hY3Rpb24gICpuZ0lmPVwiY29tcG9uZW50LmNvbXBvbmVudFR5cGU9PSdhY3Rpb24nXCIgW2FjdGlvbl09XCJjb21wb25lbnRcIiBbaW5saW5lXT1cImZhbHNlXCIgW2Rhc2hib2FyZFNpemVzXT1cImRhc2hib2FyZFNpemVzXCIgIFtsaW5rUGFyYW1ldGVyc109XCJsaW5rUGFyYW1ldGVyc1wiPjwva2VydmktYWN0aW9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgKm5nSWY9XCJpbmxpbmVcIiBjbGFzcz1cImtlcnZpLWlubGluZS13aWRnZXRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwia2VydmktdmFsdWUtbGFiZWxcIj4gXHJcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiZGlzcGxheTppbmxpbmVcIiAgKm5nSWY9XCJsaW5rUGFyYW1ldGVycy5sYWJlbEljb25cIiBjbGFzcz1cImZhIGZhLXt7bGlua1BhcmFtZXRlcnMubGFiZWxJY29ufX1cIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiZGlzcGxheTppbmxpbmVcIiAgKm5nSWY9XCJsaW5rUGFyYW1ldGVycy5sYWJlbFwiICA+e3tsaW5rUGFyYW1ldGVycy5sYWJlbH19PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJrZXJ2aS12YWx1ZS1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgIDxrZXJ2aS12YWx1ZSAqbmdJZj1cImNvbXBvbmVudC5jb21wb25lbnRUeXBlPT0nS2VydmlWYWx1ZSdcIiBbdmFsdWVdPVwiY29tcG9uZW50XCIgW2lubGluZV09XCJmYWxzZVwiIFtkYXNoYm9hcmRTaXplc109XCJkYXNoYm9hcmRTaXplc1wiICBbbGlua1BhcmFtZXRlcnNdPVwibGlua1BhcmFtZXRlcnNcIj48L2tlcnZpLXZhbHVlPlxyXG4gICAgICAgICAgICA8a2VydmktYWN0aW9uICAqbmdJZj1cImNvbXBvbmVudC5jb21wb25lbnRUeXBlPT0nYWN0aW9uJ1wiIFthY3Rpb25dPVwiY29tcG9uZW50XCIgW2lubGluZV09XCJmYWxzZVwiIFtkYXNoYm9hcmRTaXplc109XCJkYXNoYm9hcmRTaXplc1wiICBbbGlua1BhcmFtZXRlcnNdPVwibGlua1BhcmFtZXRlcnNcIj48L2tlcnZpLWFjdGlvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L25nLWNvbnRhaW5lcj4gICAgXHJcbjxuZy1jb250YWluZXIgKm5nSWY9XCJ3aWRnZXRUeXBlPT0nY2FtZXJhJ1wiIGNsYXNzPVwiYmxvY2stY29tcG9uZW50XCIgPlxyXG4gICAgPGtlcnZpLWNhbS12aWV3ZXIgW2lzQmFja2dyb3VuZF09XCJmYWxzZVwiIFtjYW1lcmFdPVwiY29tcG9uZW50XCIgW2xpbmtQYXJhbWV0ZXJzXT1cImxpbmtQYXJhbWV0ZXJzXCI+PC9rZXJ2aS1jYW0tdmlld2VyPlxyXG48L25nLWNvbnRhaW5lcj5cclxuICAgIFxyXG4gICAgXHJcbjxuZy1jb250YWluZXIgKm5nSWY9XCJ3aWRnZXRUeXBlPT0nZ2F1Z2UnXCIgY2xhc3M9XCJibG9jay1jb21wb25lbnRcIiA+XHJcbiAgICA8a2VydmktZ2F1Z2UgW2Rhc2hib2FyZFNpemVzXT1cImRhc2hib2FyZFNpemVzXCIgW3ZhbHVlXT1cImNvbXBvbmVudFwiIFtsaW5rUGFyYW1ldGVyc109XCJsaW5rUGFyYW1ldGVyc1wiPjwva2VydmktZ2F1Z2U+XHJcbjwvbmctY29udGFpbmVyPlxyXG5cclxuPG5nLWNvbnRhaW5lciAqbmdJZj1cIndpZGdldFR5cGU9PSdjaGFydCdcIiBjbGFzcz1cIlwiID5cclxuICAgIDxrZXJ2aS1jaGFydCBbZGFzaGJvYXJkU2l6ZXNdPVwiZGFzaGJvYXJkU2l6ZXNcIiBbdmFsdWVdPVwiY29tcG9uZW50XCIgW2xpbmtQYXJhbWV0ZXJzXT1cImxpbmtQYXJhbWV0ZXJzXCIgPjwva2VydmktY2hhcnQ+XHJcbjwvbmctY29udGFpbmVyPmAsXHJcbiAgc3R5bGVzOiBbXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgV2lkZ2V0Q29tcG9uZW50IGV4dGVuZHMgS2VydmlXaWRnZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMubmdPbkluaXRXaWRnZXQoKTtcclxuICB9XHJcblxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgVGltIFdlbnR6bGF1XHJcbi8vIExpY2Vuc2VkIHVuZGVyIE1JVFxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgS2VydmlOdW1iZXJDb21wb25lbnQgfSBmcm9tICduZ3gta2VydmknXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAna2VydmktdmFsdWUtbnVtYmVyJyxcclxuXHR0ZW1wbGF0ZTogYDxuZy1jb250YWluZXIgKm5nSWY9XCJsaW5rUGFyYW1ldGVycy5pc0lucHV0XCI+XHJcbiAgICBcclxuICAgIDxuei1mb3JtLWNvbnRyb2wgPlxyXG4gICAgICAgIDxuei1zbGlkZXIgW256TWluXT1cInZhbHVlLm1pblZhbHVlXCIgW256TWF4XT1cInZhbHVlLm1heFZhbHVlXCIgW256U3RlcF09XCIxXCIgIFsobmdNb2RlbCldPVwidmFsdWUudmFsdWVcIj48L256LXNsaWRlcj5cclxuICAgICAgICA8bnotaW5wdXQtbnVtYmVyIGlkPVwie3t2YWx1ZS5pZH19XCIgW256TWluXT1cInZhbHVlLm1pblZhbHVlXCIgW256TWF4XT1cInZhbHVlLm1heFZhbHVlXCIgW256U3RlcF09XCIxXCIgWyhuZ01vZGVsKV09XCJ2YWx1ZS52YWx1ZVwiICA+PC9uei1pbnB1dC1udW1iZXI+XHJcbiAgICAgICAgXHJcbiAgICA8L256LWZvcm0tY29udHJvbD5cclxuICAgIFxyXG48L25nLWNvbnRhaW5lcj5cclxuPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFsaW5rUGFyYW1ldGVycy5pc0lucHV0XCI+XHJcblxyXG4gICAgPHNwYW4gY2xhc3M9XCJ2YWx1ZS12YWx1ZVwiIFtzdHlsZS5taW4td2lkdGgucmVtXT1cImxpbmtQYXJhbWV0ZXJzLnZhbHVlU2l6ZVwiPlxyXG4gICAgICAgIDxpICpuZ0lmPVwiY3VycmVudEljb25cIiBjbGFzcz1cImZhIGZhLXt7Y3VycmVudEljb259fVwiPjwvaT5cclxuICAgICAgICA8dmFsdWUtc3BhcmtsaW5lICpuZ0lmPVwibGlua1BhcmFtZXRlcnMuc2hvd1NwYXJrbGluZSAmJiAhbGlua1BhcmFtZXRlcnMuaXNJbnB1dFwiIFt2YWx1ZV09XCJ2YWx1ZVwiPjwvdmFsdWUtc3BhcmtsaW5lPlxyXG4gICAgICAgIHt7KHZhbHVlLnZhbHVlJCB8IGFzeW5jIHwgbnVtYmVyOm51bWJlckZvcm1hdCl9fVxyXG4gICAgICAgIDxzcGFuICpuZ0lmPVwibGlua1BhcmFtZXRlcnMuZGlzcGxheVVuaXRcIj57e3ZhbHVlLnVuaXR9fTwvc3Bhbj5cclxuICAgIDwvc3Bhbj5cclxuPC9uZy1jb250YWluZXI+XHJcbmAsXHJcblx0c3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOdW1iZXJDb21wb25lbnQgZXh0ZW5kcyBLZXJ2aU51bWJlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOkVsZW1lbnRSZWYpIHsgXHJcblx0XHRzdXBlcigpO1xyXG5cdH1cclxuXHRcclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMubmdPbkluaXROdW1iZXIoKTtcclxuXHR9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCBUaW0gV2VudHpsYXVcclxuLy8gTGljZW5zZWQgdW5kZXIgTUlUXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBLZXJ2aUJvb2xlYW5Db21wb25lbnQgfSBmcm9tICduZ3gta2VydmknO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdrZXJ2aS12YWx1ZS1ib29sZWFuJyxcclxuXHR0ZW1wbGF0ZTogYDxrZXJ2aS1zd2l0Y2hidXR0b24gXHJcbiAgICAqbmdJZj1cImRpc3BsYXlUeXBlIT0nYnV0dG9uJ1wiXHJcbiAgICBbZGFzaGJvYXJkU2l6ZXNdPVwiZGFzaGJvYXJkU2l6ZXNcIiBcclxuICAgIFtpbmxpbmVdPVwiaW5saW5lXCIgXHJcbiAgICBbdmFsdWVdPVwidmFsdWUudmFsdWVcIiBcclxuICAgIFtsaW5rUGFyYW1ldGVyc109XCJsaW5rUGFyYW1ldGVyc1wiXHJcbiAgICAoYnV0dG9uU3RhdGUpPVwiY2hhbmdlU3RhdGUoJGV2ZW50KVwiXHJcbj48L2tlcnZpLXN3aXRjaGJ1dHRvbj5cclxuPGtlcnZpLWJ1dHRvbiBcclxuICAgICpuZ0lmPVwiZGlzcGxheVR5cGU9PSdidXR0b24nXCIgICAgXHJcbiAgICBbZGFzaGJvYXJkU2l6ZXNdPVwiZGFzaGJvYXJkU2l6ZXNcIiBcclxuICAgIFt2YWx1ZV09XCJ2YWx1ZVwiIFxyXG4gICAgW2lubGluZV09XCJpbmxpbmVcIiBcclxuICAgIFtsaW5rUGFyYW1ldGVyc109XCJsaW5rUGFyYW1ldGVyc1wiIFxyXG4gICAgKGJ1dHRvblN0YXRlKT1cImNoYW5nZVN0YXRlKCRldmVudClcIiBcclxuPjwva2VydmktYnV0dG9uPlxyXG5cclxuXHJcblxyXG5gLFxyXG5cdHN0eWxlczogW2BgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQm9vbGVhbkNvbXBvbmVudCBleHRlbmRzIEtlcnZpQm9vbGVhbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0Y29uc3RydWN0b3IoKSB7IFxyXG5cdFx0c3VwZXIoKTtcclxuXHR9XHJcblxyXG5cdGNoYW5nZVN0YXRlKGV2ZW50KXtcclxuXHRcdHRoaXMudmFsdWUuc2V0KGV2ZW50KTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5uZ09uSW5pdEJvb2xlYW4oKTtcclxuXHR9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCBUaW0gV2VudHpsYXVcclxuLy8gTGljZW5zZWQgdW5kZXIgTUlUXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgS2VydmlTdHJpbmdDb21wb25lbnQgfSBmcm9tICduZ3gta2VydmknXHJcblxyXG5kZWNsYXJlIHZhciBqUXVlcnk6YW55O1xyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2tlcnZpLXZhbHVlLXN0cmluZycsXHJcblx0dGVtcGxhdGU6IGA8aW5wdXQgbnotaW5wdXQgKm5nSWY9XCJsaW5rUGFyYW1ldGVycy5pc0lucHV0XCIgIFsobmdNb2RlbCldPVwidmFsdWUudmFsdWVcIi8+XHJcbjxzcGFuICpuZ0lmPVwiIWxpbmtQYXJhbWV0ZXJzLmlzSW5wdXRcIiBjbGFzcz1cImZvcm0tY29udHJvbCBwdWxsLXJpZ2h0XCIgICA+e3sodmFsdWUudmFsdWUkIHwgYXN5bmMpfX08L3NwYW4+XHJcbmAsXHJcblx0c3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdHJpbmdDb21wb25lbnQgZXh0ZW5kcyBLZXJ2aVN0cmluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSBcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cdCB9XHJcblxyXG5cdG5nT25Jbml0KCl7XHJcblx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHR0aGlzLm5nT25Jbml0U3RyaW5nKCk7XHJcblx0XHR0aGlzLnZhbHVlLnZhbHVlJC5zdWJzY3JpYmUoZnVuY3Rpb24odil7XHJcblx0XHQgXHRqUXVlcnkoXCJpbnB1dFwiLCBzZWxmLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkudmFsKHYpLmNoYW5nZSgpO1xyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdG9uQ2hhbmdlKGV2ZW50KXtcclxuXHRcdHZhciB2ID0galF1ZXJ5KFwiaW5wdXRcIiwgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLnZhbCgpO1xyXG5cdFx0Y29uc29sZS5sb2coXCJldnZcIiwgdiwgZXZlbnQpO1xyXG5cdFx0dGhpcy52YWx1ZS5zZXQodik7XHJcblx0fVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgVGltIFdlbnR6bGF1XHJcbi8vIExpY2Vuc2VkIHVuZGVyIE1JVFxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgS2VydmlEYXRlVGltZUNvbXBvbmVudCB9IGZyb20gJ25neC1rZXJ2aSc7XHJcbmRlY2xhcmUgdmFyIG1vbWVudDphbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2tlcnZpLXZhbHVlLWRhdGV0aW1lJyxcclxuXHR0ZW1wbGF0ZTogYDxrZXJ2aS1kYXRldGltZSBbdHlwZV09XCJkaXNwbGF5VHlwZVwiIFtmb3JtYXRdPVwiZGF0ZVRpbWVGb3JtYXRcIiBbZGF0ZVRpbWVdPVwidmFsdWVcIj48L2tlcnZpLWRhdGV0aW1lPlxyXG4gICAgYCxcclxuXHRzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIERhdGVUaW1lQ29tcG9uZW50IGV4dGVuZHMgS2VydmlEYXRlVGltZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0Y29uc3RydWN0b3IoKSB7IFxyXG5cdFx0c3VwZXIoKTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5uZ09uSW5pdERhdGVUaW1lKCk7XHJcblx0fVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgVGltIFdlbnR6bGF1XHJcbi8vIExpY2Vuc2VkIHVuZGVyIE1JVFxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEtlcnZpQ29sb3JDb21wb25lbnQgfSBmcm9tICduZ3gta2VydmknXHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2tlcnZpLXZhbHVlLWNvbG9yJyxcclxuXHR0ZW1wbGF0ZTogYDxrZXJ2aS1jb2xvciBbY29sb3JdPVwiKHZhbHVlLnZhbHVlJCB8IGFzeW5jKVwiIChjb2xvckNoYW5nZSk9XCJzZXRLZXJ2aVZhbHVlKCRldmVudClcIiBbbGlua1BhcmFtZXRlcnNdPVwibGlua1BhcmFtZXRlcnNcIiA+PC9rZXJ2aS1jb2xvcj5cclxuYCxcclxuXHRzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbG9yQ29tcG9uZW50IGV4dGVuZHMgS2VydmlDb2xvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0XHJcblx0Y29uc3RydWN0b3IoKSB7IFxyXG5cdFx0c3VwZXIoKTtcclxuXHRcdC8vY29uc29sZS5sb2coXCJjbmlvXCIsdGhpcyk7XHJcblx0fVxyXG5cclxuXHJcblx0c2V0VmFsdWUodil7XHJcblx0XHRjb25zb2xlLmxvZyh2KTtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLm5nT25Jbml0Q29sb3IoKTtcclxuXHR9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCBUaW0gV2VudHpsYXVcclxuLy8gTGljZW5zZWQgdW5kZXIgTUlUXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOdW1iZXJWYWx1ZSwgRGFzaGJvYXJkU2l6ZXMgICB9IGZyb20gJ2tlcnZpLWpzJztcclxuaW1wb3J0IHsgTkdYS2VydmlTZXJ2aWNlLCBLZXJ2aVRlbXBsYXRlU2VydmljZSB9IGZyb20gJ25neC1rZXJ2aSc7XHJcbmltcG9ydCB7IGFzYXBTY2hlZHVsZXIgfSBmcm9tICdyeGpzJztcclxuXHJcbmRlY2xhcmUgdmFyIEFwZXhDaGFydHM6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndmFsdWUtc3BhcmtsaW5lJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgI2NoYXJ0PjwvZGl2PmAsXHJcbiAgc3R5bGVzOiBbYGBdLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNwYXJrbGluZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgdmFsdWU6IE51bWJlclZhbHVlID0gbnVsbDtcclxuICBASW5wdXQoKSBsaW5rUGFyYW1ldGVyczogYW55ID0gbnVsbDtcclxuICBASW5wdXQoKSB0eXBlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc2l6ZTpudW1iZXI7XHJcbiAgQElucHV0KCkgZGFzaGJvYXJkU2l6ZXM6RGFzaGJvYXJkU2l6ZXMgPSBuZXcgRGFzaGJvYXJkU2l6ZXMoKTtcclxuICBAVmlld0NoaWxkKCdjaGFydCcpIHByaXZhdGUgY2hhcnRFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIHByaXZhdGUgc2VyaWVzPVtdO1xyXG4gIHByaXZhdGUgY2hhcnRPYmo6IGFueTtcclxuICBwcml2YXRlIG9wdGlvbnM6YW55O1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUga2VydmlTZXJ2aWNlOk5HWEtlcnZpU2VydmljZSwgcHJpdmF0ZSB0ZW1wbGF0ZVNlcnZpY2U6S2VydmlUZW1wbGF0ZVNlcnZpY2UgKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVFbGVtZW50KCl7XHJcbiAgICB0aGlzLnNlcmllcyA9IFt0aGlzLnZhbHVlLnZhbHVlXVxyXG5cclxuICAgIHRoaXMub3B0aW9ucyA9e1xyXG4gICAgICBjaGFydDoge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxNCxcclxuICAgICAgICAgIHdpZHRoOjYwLFxyXG4gICAgICAgICAgdHlwZTogJ2FyZWEnLFxyXG4gICAgICAgICAgc3BhcmtsaW5lOiB7XHJcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcclxuICAgICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgc3Ryb2tlOiB7XHJcbiAgICAgICAgY3VydmU6ICdzdHJhaWdodCcsXHJcbiAgICAgICAgd2lkdGg6MVxyXG4gICAgICB9LFxyXG4gICAgICBmaWxsOiB7XHJcbiAgICAgICAgb3BhY2l0eTogMC4zLFxyXG4gICAgICB9LFxyXG4gICAgICBzZXJpZXM6IFt7XHJcbiAgICAgICAgZGF0YTogdGhpcy52YWx1ZS5zcGFya2xpbmUkLnZhbHVlXHJcbiAgICAgIH1dLFxyXG4gICAgICB5YXhpczoge1xyXG4gICAgICAgIG1pbjogMFxyXG4gICAgICB9LFxyXG4gICAgICBjb2xvcnM6IFt0aGlzLmNvbG9yKFwiY29sb3JcIixcIi5rZXJ2aS1zcGFya2xpbmVcIildLFxyXG4gICAgfVxyXG4gIFxyXG4gICAgaWYgKHRoaXMuY2hhcnRPYmopIHtcclxuICAgICAgdGhpcy5jaGFydE9iai5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhcImNyZWF0ZSBzcGFya2xpbmVcIiwgdGhpcy52YWx1ZS5pZCk7XHJcbiAgICB0aGlzLmNoYXJ0T2JqID0gbmV3IEFwZXhDaGFydHMoXHJcbiAgICAgIHRoaXMuY2hhcnRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgIHRoaXMub3B0aW9uc1xyXG4gICAgKTtcclxuICAgIHRoaXMuY2hhcnRPYmoucmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICBcclxuXHJcbiAgcHJpdmF0ZSBjb2xvcihzdHlsZSxzZWxlY3Rvcil7XHJcbiAgICByZXR1cm4gdGhpcy50ZW1wbGF0ZVNlcnZpY2UuZ2V0Q29sb3Ioc3R5bGUsc2VsZWN0b3IpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICBhc2FwU2NoZWR1bGVyLnNjaGVkdWxlKCgpID0+IHtcclxuICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnZhbHVlLnNwYXJrbGluZSQuc3Vic2NyaWJlKGZ1bmN0aW9uKHYpe1xyXG4gICAgICBpZiAoc2VsZi5jaGFydE9iaiAmJiB2KXtcclxuICAgICAgICBzZWxmLmNoYXJ0T2JqLnVwZGF0ZVNlcmllcyhbe1xyXG4gICAgICAgICAgZGF0YTogdlxyXG4gICAgICAgIH1dKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59IiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCBUaW0gV2VudHpsYXVcclxuLy8gTGljZW5zZWQgdW5kZXIgTUlUXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERhc2hib2FyZFNpemVzIH0gZnJvbSAna2VydmktanMnXHJcbmltcG9ydCB7IEtlcnZpVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSAnbmd4LWtlcnZpJ1xyXG5kZWNsYXJlIHZhciBqUXVlcnk6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndWktc2xpZGVyJyxcclxuICB0ZW1wbGF0ZTogYGAsXHJcbiAgc3R5bGVzOiBbYGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTbGlkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHZhbHVlID0gMDtcclxuICBASW5wdXQoKSB0eXBlID0gXCJob3Jpem9udGFsX3NsaWRlclwiO1xyXG4gIEBJbnB1dCgpIHRpY2s6IG51bWJlcjtcclxuICBASW5wdXQoKSBsaW5rUGFyYW1ldGVyczogYW55O1xyXG4gIEBJbnB1dCgpIGRlZmF1bHRTaXplczogRGFzaGJvYXJkU2l6ZXMgPSBuZXcgRGFzaGJvYXJkU2l6ZXMoKTtcclxuICBASW5wdXQoKSBtYXhWYWx1ZTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIG1pblZhbHVlOiBudW1iZXI7XHJcbiAgQE91dHB1dCgpIHNsaWRlckNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIHByaXZhdGUgbWFya3MgPSB7fTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHRlbXBsYXRlU2VydmljZTpLZXJ2aVRlbXBsYXRlU2VydmljZSkgeyBcclxuICAgIC8vY29uc29sZS5sb2coXCJjbmlvXCIsdGhpcyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbG9yKHN0eWxlLHNlbGVjdG9yKXtcclxuICAgIHJldHVybiB0aGlzLnRlbXBsYXRlU2VydmljZS5nZXRDb2xvcihzdHlsZSxzZWxlY3Rvcik7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgfVxyXG5cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIFRpbSBXZW50emxhdVxyXG4vLyBMaWNlbnNlZCB1bmRlciBNSVRcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE51bWJlclZhbHVlLCBEYXNoYm9hcmRTaXplcyAgIH0gZnJvbSAna2VydmktanMnO1xyXG5pbXBvcnQgeyBOR1hLZXJ2aVNlcnZpY2UsIEtlcnZpVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSAnbmd4LWtlcnZpJztcclxuaW1wb3J0IHsgYXNhcFNjaGVkdWxlciB9IGZyb20gJ3J4anMnO1xyXG5cclxuZGVjbGFyZSB2YXIgQXBleENoYXJ0czogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdrZXJ2aS1nYXVnZScsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2ICNjaGFydD48L2Rpdj5gLFxyXG4gIHN0eWxlczogW2BgXSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBHYXVnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgdmFsdWU6IE51bWJlclZhbHVlID0gbnVsbDtcclxuICBASW5wdXQoKSBsaW5rUGFyYW1ldGVyczogYW55ID0gbnVsbDtcclxuICBASW5wdXQoKSB0eXBlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc2l6ZTpudW1iZXI7XHJcbiAgQElucHV0KCkgZGFzaGJvYXJkU2l6ZXM6RGFzaGJvYXJkU2l6ZXMgPSBuZXcgRGFzaGJvYXJkU2l6ZXMoKTtcclxuICBAVmlld0NoaWxkKCdjaGFydCcpIHByaXZhdGUgY2hhcnRFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIHByaXZhdGUgc2VyaWVzPVtdO1xyXG4gIHByaXZhdGUgY2hhcnRPYmo6IGFueTtcclxuICBwcml2YXRlIG9wdGlvbnM6YW55O1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUga2VydmlTZXJ2aWNlOk5HWEtlcnZpU2VydmljZSwgcHJpdmF0ZSB0ZW1wbGF0ZVNlcnZpY2U6S2VydmlUZW1wbGF0ZVNlcnZpY2UgKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVFbGVtZW50KCl7XHJcbiAgICB0aGlzLnNlcmllcyA9IFt0aGlzLnZhbHVlLnZhbHVlXVxyXG5cclxuICAgIHRoaXMub3B0aW9ucyA9e1xyXG4gICAgICBjaGFydDoge1xyXG4gICAgICAgIHR5cGU6ICdyYWRpYWxCYXInLFxyXG4gICAgICAgIGhlaWdodDogdGhpcy5saW5rUGFyYW1ldGVycy5nYXVnZVNpemVcclxuICAgICAgfSxcclxuICAgICAgcGxvdE9wdGlvbnM6IHtcclxuICAgICAgICByYWRpYWxCYXI6IHtcclxuICAgICAgICAgIHN0YXJ0QW5nbGU6IC0xMzUsXHJcbiAgICAgICAgICBlbmRBbmdsZToxMzUsICBcclxuICAgICAgICAgIGhvbGxvdzoge1xyXG4gICAgICAgICAgICBzaXplOiAnNzAlJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHRyYWNrOntcclxuICAgICAgICAgICAgc3RhcnRBbmdsZTogLTEzNSxcclxuICAgICAgICAgICAgZW5kQW5nbGU6IDEzNSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBkYXRhTGFiZWxzOiB7XHJcbiAgICAgICAgICAgIG5hbWU6IHtcclxuICAgICAgICAgICAgICBzaG93OiB0cnVlLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiBcIiMyZDM1M2NcIixcclxuICAgICAgICAgICAgICBmb250U2l6ZTpcIjE0cHhcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB2YWx1ZToge1xyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiBcIjI0cHhcIixcclxuICAgICAgICAgICAgICBzaG93OiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG4gICAgICB9LFxyXG4gICAgICBjb2xvcnM6IFt0aGlzLmNvbG9yKFwiY29sb3JcIixcIi5rZXJ2aS1jaGFydFwiKV0sLy8gWycjOWZkMDM3J10sXHJcbiAgICAgIHNlcmllczogdGhpcy5zZXJpZXMsXHJcbiAgICAgIGxhYmVsczogW3RoaXMudmFsdWUubmFtZV0sXHJcblxyXG4gICAgfVxyXG4gIFxyXG4gICAgaWYgKHRoaXMuY2hhcnRPYmopIHtcclxuICAgICAgdGhpcy5jaGFydE9iai5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhcImNyZWF0ZSBnYXVnZVwiLCB0aGlzLnZhbHVlLmlkKTtcclxuICAgIHRoaXMuY2hhcnRPYmogPSBuZXcgQXBleENoYXJ0cyhcclxuICAgICAgdGhpcy5jaGFydEVsZW1lbnQubmF0aXZlRWxlbWVudCxcclxuICAgICAgdGhpcy5vcHRpb25zXHJcbiAgICApO1xyXG4gICAgdGhpcy5jaGFydE9iai5yZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW5kZXIoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGFydE9iai5yZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29sb3Ioc3R5bGUsc2VsZWN0b3Ipe1xyXG4gICAgcmV0dXJuIHRoaXMudGVtcGxhdGVTZXJ2aWNlLmdldENvbG9yKHN0eWxlLHNlbGVjdG9yKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgYXNhcFNjaGVkdWxlci5zY2hlZHVsZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY3JlYXRlRWxlbWVudCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy52YWx1ZS52YWx1ZSQuc3Vic2NyaWJlKGZ1bmN0aW9uKHYpe1xyXG4gICAgICBpZiAoc2VsZi5jaGFydE9iaiAmJiB2KXtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImd2XCIsIHYpO1xyXG4gICAgICAgIHNlbGYuY2hhcnRPYmoudXBkYXRlU2VyaWVzKCBbdl0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2FkUGVyaW9kKCl7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAvL2NvbnNvbGUubG9nKFwibHBcIiwgdGhpcy5wZXJpb2RTdGFydCwgdGhpcy5wZXJpb2RFbmQpO1xyXG4gICAgLy90aGlzLmtlcnZpU2VydmljZS5zcGluZS5zZW5kUXVlcnkoXCJnZXRTZW5zb3JEYXRhXCIsIHRoaXMudmFsdWUuaWQsIHRoaXMucGVyaW9kU3RhcnQudG9JU09TdHJpbmcoKSwgdGhpcy5wZXJpb2RFbmQudG9JU09TdHJpbmcoKSwgZnVuY3Rpb24gKHJlc3VsdHMpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiZ3NkXCIsIHJlc3VsdHMpO1xyXG4gICAgICAgIC8vdmFyIHNlbnNvckRhdGEgPSByZXN1bHRzO1xyXG4gICAgICAgIC8vc2VsZi5jaGFydERhdGEubGVuZ3RoID0gMDtcclxuICAgICAgICAvL2ZvciAodmFyIGkgPSAwOyAoaSA8IHNlbnNvckRhdGEubGVuZ3RoKTsgaSsrKSB7XHJcbiAgICAgICAgICAvL3ZhciBkYXRhSXRlbSA9IHNlbnNvckRhdGFbaV1cclxuICAgICAgICAgIC8vc2VsZi5jaGFydERhdGEucHVzaCh7IHg6IG5ldyBEYXRlKGRhdGFJdGVtLnRzICsgXCIgdXRjXCIpLCB5OiBkYXRhSXRlbS52YWx1ZSB9KTtcclxuICAgICAgICAvL31cclxuICAgICAgICAvL3NlbGYuY2hhcnQucmVuZGVyKCk7XHJcbiAgICAgICAgLy9zZWxmLmNoYXJ0LnVwZGF0ZSgpO1xyXG4gICAgLy99KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xlYW5EYXRhKCl7XHJcbiAgICAvLyBpZih0aGlzLnVwZGF0ZUNoYXJ0KXtcclxuICAgIC8vICAgdmFyIGRvQ2xlYW4gPSB0cnVlO1xyXG4gICAgLy8gICB2YXIgbGltaXRUUyA9IHRoaXMuZ2V0UGVyaW9kTGltaXQoKTtcclxuICAgIC8vICAgdmFyIGRzID0gdGhpcy5jaGFydC5kYXRhLmRhdGFzZXRzWzBdLmRhdGFcclxuICAgIC8vICAgd2hpbGUgKCBkcy5sZW5ndGg+MCAmJiBkb0NsZWFuKXtcclxuICAgIC8vICAgICBpZiAoZHNbMF0ueCA8IGxpbWl0VFMpXHJcbiAgICAvLyAgICAgICBkcy5zaGlmdCgpO1xyXG4gICAgLy8gICAgIGVsc2VcclxuICAgIC8vICAgICAgIGRvQ2xlYW4gPSBmYWxzZVxyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9XHJcbiAgfVxyXG59IiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCBUaW0gV2VudHpsYXVcclxuLy8gTGljZW5zZWQgdW5kZXIgTUlUXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOdW1iZXJWYWx1ZSwgRGFzaGJvYXJkU2l6ZXMgICB9IGZyb20gJ2tlcnZpLWpzJztcclxuaW1wb3J0IHsgTkdYS2VydmlTZXJ2aWNlLCBLZXJ2aVRlbXBsYXRlU2VydmljZSB9IGZyb20gJ25neC1rZXJ2aSc7XHJcbmltcG9ydCB7IGFzYXBTY2hlZHVsZXIgfSBmcm9tICdyeGpzJztcclxuXHJcbmRlY2xhcmUgdmFyIEFwZXhDaGFydHM6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAna2VydmktY2hhcnQnLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiAjY2hhcnQ+PC9kaXY+YCxcclxuICBzdHlsZXM6IFtgYF0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgS2VydmlDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgdmFsdWU6IE51bWJlclZhbHVlID0gbnVsbDtcclxuICBASW5wdXQoKSBsaW5rUGFyYW1ldGVyczogYW55ID0gbnVsbDtcclxuICBASW5wdXQoKSB0eXBlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc2l6ZTpudW1iZXI7XHJcbiAgQElucHV0KCkgZGFzaGJvYXJkU2l6ZXM6RGFzaGJvYXJkU2l6ZXMgPSBuZXcgRGFzaGJvYXJkU2l6ZXMoKTtcclxuICBAVmlld0NoaWxkKCdjaGFydCcpIHByaXZhdGUgY2hhcnRFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gIHByaXZhdGUgc2VyaWVzPVtdO1xyXG4gIHByaXZhdGUgY2hhcnRPYmo6IGFueTtcclxuICBwcml2YXRlIG9wdGlvbnM6YW55O1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUga2VydmlTZXJ2aWNlOk5HWEtlcnZpU2VydmljZSwgcHJpdmF0ZSB0ZW1wbGF0ZVNlcnZpY2U6S2VydmlUZW1wbGF0ZVNlcnZpY2UgKSB7XHJcblxyXG4gIH1cclxuICBcclxuICBwcml2YXRlIGNyZWF0ZUVsZW1lbnQoKXtcclxuICAgIHRoaXMuc2VyaWVzPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogdGhpcy52YWx1ZS5uYW1lLFxyXG4gICAgICAgIGRhdGE6IFsgXVxyXG4gICAgfV1cclxuXHJcbiAgICBcclxuICAgIHRoaXMub3B0aW9ucyA9e1xyXG4gICAgICBjaGFydDoge1xyXG4gICAgICAgICAgaWQ6IFwiY2hhcnRfXCIgKyB0aGlzLnZhbHVlLmlkLFxyXG4gICAgICAgICAgd2lkdGg6XCIxMDAlXCIsXHJcbiAgICAgICAgICBoZWlnaHQ6MzAwLFxyXG4gICAgICAgICAgdHlwZTogdGhpcy5saW5rUGFyYW1ldGVycy5jaGFydFR5cGUsXHJcbiAgICAgICAgICBhbmltYXRpb25zOiB7XHJcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIGVhc2luZzogJ2xpbmVhcicsXHJcbiAgICAgICAgICAgIGR5bmFtaWNBbmltYXRpb246IHtcclxuICAgICAgICAgICAgICBzcGVlZDogMTAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB0b29sYmFyOiB7XHJcbiAgICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICB0b29sczoge1xyXG4gICAgICAgICAgICAgIGRvd25sb2FkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIHNlbGVjdGlvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICB6b29tOiB0cnVlLFxyXG4gICAgICAgICAgICAgIHpvb21pbjogdHJ1ZSxcclxuICAgICAgICAgICAgICB6b29tb3V0OiB0cnVlLFxyXG4gICAgICAgICAgICAgIHBhbjogdHJ1ZSxcclxuICAgICAgICAgICAgICByZXNldDogdHJ1ZSAsXHJcbiAgICAgICAgICAgICAgY3VzdG9tSWNvbnM6IFtdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGF1dG9TZWxlY3RlZDogJ3pvb20nIFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHpvb206IHtcclxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgIGRhdGFMYWJlbHM6IHtcclxuICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgc3Ryb2tlOiB7XHJcbiAgICAgICAgICBjdXJ2ZTogJ3Ntb290aCcsXHJcbiAgICAgICAgICB3aWR0aDoxXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICB0ZXh0OiB0aGlzLmxpbmtQYXJhbWV0ZXJzLmNoYXJ0VGl0bGUsXHJcbiAgICAgICAgICBhbGlnbjogJ2xlZnQnXHJcbiAgICAgICAgfSxcclxuICAgICAgbWFya2Vyczoge1xyXG4gICAgICAgICAgc2l6ZTogMFxyXG4gICAgICAgIH0sXHJcbiAgICAgIHhheGlzOiB7XHJcbiAgICAgICAgICB0eXBlOiAnZGF0ZXRpbWUnLFxyXG4gICAgICAgICAgLy9yYW5nZTogMTU1Mjk4MzIzMCAtIDMwMCxcclxuICAgICAgfSxcclxuICAgICAgeWF4aXM6IHtcclxuICAgICAgICAgIG1heDogdGhpcy52YWx1ZS5tYXhWYWx1ZSxcclxuICAgICAgICAgIG1pbjp0aGlzLnZhbHVlLm1pblZhbHVlXHJcbiAgICAgICAgfSxcclxuICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICBzaG93OiBmYWxzZVxyXG4gICAgICB9LFxyXG4gICAgICBncmlkOiB7XHJcbiAgICAgICAgc2hvdzogdGhpcy5saW5rUGFyYW1ldGVycy5jaGFydEdyaWQsXHJcbiAgICAgICAgeGF4aXM6IHtcclxuICAgICAgICAgIGxpbmVzOiB7XHJcbiAgICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICAgIGFuaW1hdGU6IHRydWVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHlheGlzOiB7XHJcbiAgICAgICAgICBsaW5lczoge1xyXG4gICAgICAgICAgICBzaG93OiB0cnVlLFxyXG4gICAgICAgICAgICBhbmltYXRlOiB0cnVlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBjb2xvcnM6IFt0aGlzLmNvbG9yKFwiY29sb3JcIixcIi5rZXJ2aS1jaGFydFwiKV0sLy8gWycjOWZkMDM3J10sXHJcbiAgICAgIHNlcmllczogdGhpcy5zZXJpZXNcclxuICAgIH1cclxuICBcclxuICAgIGlmICh0aGlzLmNoYXJ0T2JqKSB7XHJcbiAgICAgIHRoaXMuY2hhcnRPYmouZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5saW5rUGFyYW1ldGVycy5jaGFydFRpdGxlKVxyXG4gICAgICBkZWxldGUodGhpcy5vcHRpb25zW1widGl0bGVcIl0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiY3JlYXRlIGNoYXJ0XCIsIHRoaXMudmFsdWUuaWQpO1xyXG4gICAgdGhpcy5jaGFydE9iaiA9IG5ldyBBcGV4Q2hhcnRzKFxyXG4gICAgICB0aGlzLmNoYXJ0RWxlbWVudC5uYXRpdmVFbGVtZW50LFxyXG4gICAgICB0aGlzLm9wdGlvbnNcclxuICAgICk7XHJcbiAgICB0aGlzLmNoYXJ0T2JqLnJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjb2xvcihzdHlsZSxzZWxlY3Rvcil7XHJcbiAgICByZXR1cm4gdGhpcy50ZW1wbGF0ZVNlcnZpY2UuZ2V0Q29sb3Ioc3R5bGUsc2VsZWN0b3IpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICBhc2FwU2NoZWR1bGVyLnNjaGVkdWxlKCgpID0+IHtcclxuICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnZhbHVlLnZhbHVlJC5zdWJzY3JpYmUoZnVuY3Rpb24odil7XHJcbiAgICAgIGlmIChzZWxmLmNoYXJ0T2JqKXtcclxuICAgICAgICBzZWxmLnNlcmllc1swXS5kYXRhLnB1c2goWyBzZWxmLnZhbHVlLnZhbHVlVFMuZ2V0VGltZSgpLCB2IF0pO1xyXG4gICAgICAgIHNlbGYuY2hhcnRPYmoudXBkYXRlU2VyaWVzKCBzZWxmLnNlcmllcyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICBwdWJsaWMgbG9hZFBlcmlvZCgpe1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgLy9jb25zb2xlLmxvZyhcImxwXCIsIHRoaXMucGVyaW9kU3RhcnQsIHRoaXMucGVyaW9kRW5kKTtcclxuICAgIC8vdGhpcy5rZXJ2aVNlcnZpY2Uuc3BpbmUuc2VuZFF1ZXJ5KFwiZ2V0U2Vuc29yRGF0YVwiLCB0aGlzLnZhbHVlLmlkLCB0aGlzLnBlcmlvZFN0YXJ0LnRvSVNPU3RyaW5nKCksIHRoaXMucGVyaW9kRW5kLnRvSVNPU3RyaW5nKCksIGZ1bmN0aW9uIChyZXN1bHRzKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImdzZFwiLCByZXN1bHRzKTtcclxuICAgICAgICAvL3ZhciBzZW5zb3JEYXRhID0gcmVzdWx0cztcclxuICAgICAgICAvL3NlbGYuY2hhcnREYXRhLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgLy9mb3IgKHZhciBpID0gMDsgKGkgPCBzZW5zb3JEYXRhLmxlbmd0aCk7IGkrKykge1xyXG4gICAgICAgICAgLy92YXIgZGF0YUl0ZW0gPSBzZW5zb3JEYXRhW2ldXHJcbiAgICAgICAgICAvL3NlbGYuY2hhcnREYXRhLnB1c2goeyB4OiBuZXcgRGF0ZShkYXRhSXRlbS50cyArIFwiIHV0Y1wiKSwgeTogZGF0YUl0ZW0udmFsdWUgfSk7XHJcbiAgICAgICAgLy99XHJcbiAgICAgICAgLy9zZWxmLmNoYXJ0LnJlbmRlcigpO1xyXG4gICAgICAgIC8vc2VsZi5jaGFydC51cGRhdGUoKTtcclxuICAgIC8vfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsZWFuRGF0YSgpe1xyXG4gICAgLy8gaWYodGhpcy51cGRhdGVDaGFydCl7XHJcbiAgICAvLyAgIHZhciBkb0NsZWFuID0gdHJ1ZTtcclxuICAgIC8vICAgdmFyIGxpbWl0VFMgPSB0aGlzLmdldFBlcmlvZExpbWl0KCk7XHJcbiAgICAvLyAgIHZhciBkcyA9IHRoaXMuY2hhcnQuZGF0YS5kYXRhc2V0c1swXS5kYXRhXHJcbiAgICAvLyAgIHdoaWxlICggZHMubGVuZ3RoPjAgJiYgZG9DbGVhbil7XHJcbiAgICAvLyAgICAgaWYgKGRzWzBdLnggPCBsaW1pdFRTKVxyXG4gICAgLy8gICAgICAgZHMuc2hpZnQoKTtcclxuICAgIC8vICAgICBlbHNlXHJcbiAgICAvLyAgICAgICBkb0NsZWFuID0gZmFsc2VcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfVxyXG4gIH1cclxufSIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgVGltIFdlbnR6bGF1XHJcbi8vIExpY2Vuc2VkIHVuZGVyIE1JVFxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEVsZW1lbnRSZWYsIFZpZXdFbmNhcHN1bGF0aW9uLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGFzaGJvYXJkU2l6ZXMgfSBmcm9tICdrZXJ2aS1qcydcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdrZXJ2aS1zd2l0Y2hidXR0b24nLFxyXG4gIHRlbXBsYXRlOiBgPG56LXN3aXRjaCBcclxuICAgIFsobmdNb2RlbCldPVwidmFsdWVcIlxyXG4gICAgW256Q2hlY2tlZENoaWxkcmVuXT1cImNoZWNrZWRUZW1wbGF0ZVwiIFtuelVuQ2hlY2tlZENoaWxkcmVuXT1cInVuQ2hlY2tlZFRlbXBsYXRlXCJcclxuICAgIChuZ01vZGVsQ2hhbmdlKT1cIm1vZGVsQ2hhbmdlKCRldmVudClcIlxyXG4+XHJcblxyXG48L256LXN3aXRjaD5cclxuPG5nLXRlbXBsYXRlICNjaGVja2VkVGVtcGxhdGU+XHJcbiAgICA8aSAqbmdJZj1cImxpbmtQYXJhbWV0ZXJzLm9uSWNvblwiICBuei1pY29uIFt0eXBlXT1cImxpbmtQYXJhbWV0ZXJzLm9uSWNvblwiPjwvaT5cclxuICAgIDxzcGFuID57eyBsaW5rUGFyYW1ldGVycy5vblRleHQgfX08L3NwYW4+XHJcbjwvbmctdGVtcGxhdGU+XHJcbjxuZy10ZW1wbGF0ZSAjdW5DaGVja2VkVGVtcGxhdGU+XHJcbiAgICA8aSAqbmdJZj1cImxpbmtQYXJhbWV0ZXJzLm9mZkljb25cIiAgbnotaWNvbiBbdHlwZV09XCJsaW5rUGFyYW1ldGVycy5vZmZJY29uXCI+PC9pPlxyXG4gICAgPHNwYW4gPnt7IGxpbmtQYXJhbWV0ZXJzLm9mZlRleHQgfX08L3NwYW4+XHJcbjwvbmctdGVtcGxhdGU+XHJcbmAsXHJcbiAgc3R5bGVzOiBbYGBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3dpdGNoQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSB2YWx1ZTogQm9vbGVhbjtcclxuICBASW5wdXQoKSBsaW5rUGFyYW1ldGVyczphbnk7XHJcbiAgQElucHV0KCkgaW5saW5lOmJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBkYXNoYm9hcmRTaXplczpEYXNoYm9hcmRTaXplcyA9IG5ldyBEYXNoYm9hcmRTaXplcygpO1xyXG4gIEBPdXRwdXQoKSBidXR0b25TdGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBwdWJsaWMgd2lkdGg6c3RyaW5nO1xyXG4gIHB1YmxpYyBoZWlnaHQ6c3RyaW5nO1xyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcbiAgXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInNiXCIsIHRoaXMudmFsdWUpO1xyXG4gICAgaWYgKHRoaXMubGlua1BhcmFtZXRlcnMpe1xyXG4gICAgICBcclxuICAgICAgaWYgKCF0aGlzLmxpbmtQYXJhbWV0ZXJzLmJ1dHRvbldpZHRoKVxyXG4gICAgICAgIHRoaXMud2lkdGggPSB0aGlzLmRhc2hib2FyZFNpemVzLnN3aXRjaFdpZHRoO1xyXG4gICAgICBlbHNlXHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMubGlua1BhcmFtZXRlcnMuYnV0dG9uV2lkdGg7XHJcblxyXG4gICAgICBpZiAoIXRoaXMubGlua1BhcmFtZXRlcnMuYnV0dG9uSGVpZ2h0KVxyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5kYXNoYm9hcmRTaXplcy5zd2l0Y2hIZWlnaHQ7XHJcbiAgICAgIGVsc2VcclxuICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMubGlua1BhcmFtZXRlcnMuYnV0dG9uSGVpZ2h0O1xyXG5cclxuICAgIH0gZWxzZXtcclxuICAgICAgdGhpcy53aWR0aCA9IHRoaXMuZGFzaGJvYXJkU2l6ZXMuc3dpdGNoV2lkdGg7XHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5kYXNoYm9hcmRTaXplcy5zd2l0Y2hIZWlnaHQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtb2RlbENoYW5nZShzdGF0ZSl7XHJcbiAgICB0aGlzLmJ1dHRvblN0YXRlLmVtaXQoc3RhdGUpO1xyXG4gIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIFRpbSBXZW50emxhdVxyXG4vLyBMaWNlbnNlZCB1bmRlciBNSVRcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGFzaGJvYXJkU2l6ZXMsIEJvb2xlYW5WYWx1ZSB9IGZyb20gJ2tlcnZpLWpzJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5kZWNsYXJlIHZhciBqUXVlcnk6YW55O1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2tlcnZpLWJ1dHRvbicsXHJcbiAgdGVtcGxhdGU6IGA8bmctdGVtcGxhdGUgI2J1dHRvbkNvbnRlbnRUZW1wbGF0ZT5cclxuICAgIDxpICpuZ0lmPVwibGlua1BhcmFtZXRlcnMuYnV0dG9uSWNvblwiIG56LWljb24gW3R5cGVdPVwibGlua1BhcmFtZXRlcnMuYnV0dG9uSWNvblwiPjwvaT5cclxuICAgIHt7IGxpbmtQYXJhbWV0ZXJzLmJ1dHRvblRleHQgfX1cclxuPC9uZy10ZW1wbGF0ZT5cclxuPGJ1dHRvblxyXG4gICAgKm5nSWYgPSBcImxpbmtQYXJhbWV0ZXJzLmNvbmZpcm1cIlxyXG4gICAgbnotYnV0dG9uIG56VHlwZT1cInByaW1hcnlcIlxyXG4gICAgKG56T25Db25maXJtKT1cImNvbmZpcm0oKVwiXHJcbiAgICBuei1wb3Bjb25maXJtIFtuelRpdGxlXT1cImxpbmtQYXJhbWV0ZXJzLmNvbmZpcm1NZXNzYWdlXCJcclxuPlxyXG48bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiYnV0dG9uQ29udGVudFRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XHJcbjwvYnV0dG9uPlxyXG48YnV0dG9uXHJcbiAgICAqbmdJZiA9IFwiIWxpbmtQYXJhbWV0ZXJzLmNvbmZpcm1cIlxyXG4gICAgbnotYnV0dG9uIG56VHlwZT1cInByaW1hcnlcIlxyXG4gICAgKG1vdXNlZG93bik9XCJwcmVzcygpXCIgXHJcbiAgICAobW91c2V1cCk9XCJyZWxlYXNlKClcIlxyXG4+XHJcbjxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJidXR0b25Db250ZW50VGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cclxuPC9idXR0b24+XHJcbmAsXHJcbiAgc3R5bGVzOiBbYGBdLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgdmFsdWU6IEJvb2xlYW5WYWx1ZTtcclxuICBASW5wdXQoKSBsaW5rUGFyYW1ldGVyczogYW55ID0gbnVsbDtcclxuICBASW5wdXQoKSB0eXBlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaW5saW5lOmJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBkYXNoYm9hcmRTaXplczpEYXNoYm9hcmRTaXplcyA9IG5ldyBEYXNoYm9hcmRTaXplcygpO1xyXG4gIEBJbnB1dCgpIHRpdGxlOnN0cmluZztcclxuICBAT3V0cHV0KCkgYnV0dG9uU3RhdGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgcHVibGljIHdpZHRoOnN0cmluZztcclxuICBwdWJsaWMgaGVpZ2h0OnN0cmluZztcclxuICBcclxuICBjb25zdHJ1Y3RvcigpIHsgIFxyXG4gIH1cclxuIFxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzOyBcclxuICAgIGlmIChzZWxmLmxpbmtQYXJhbWV0ZXJzKXtcclxuICAgICAgXHJcbiAgICAgIGlmICghc2VsZi5saW5rUGFyYW1ldGVycy5idXR0b25XaWR0aClcclxuICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5kYXNoYm9hcmRTaXplcy5idXR0b25XaWR0aDtcclxuICAgICAgZWxzZVxyXG4gICAgICAgIHRoaXMud2lkdGggPSBzZWxmLmxpbmtQYXJhbWV0ZXJzLmJ1dHRvbldpZHRoO1xyXG5cclxuICAgICAgaWYgKCFzZWxmLmxpbmtQYXJhbWV0ZXJzLmJ1dHRvbkhlaWdodClcclxuICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMuZGFzaGJvYXJkU2l6ZXMuYnV0dG9uSGVpZ2h0O1xyXG4gICAgICBlbHNlXHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBzZWxmLmxpbmtQYXJhbWV0ZXJzLmJ1dHRvbkhlaWdodDtcclxuXHJcbiAgICB9IGVsc2V7XHJcbiAgICAgIHRoaXMud2lkdGggPSB0aGlzLmRhc2hib2FyZFNpemVzLmJ1dHRvbldpZHRoO1xyXG4gICAgICB0aGlzLmhlaWdodCA9IHRoaXMuZGFzaGJvYXJkU2l6ZXMuYnV0dG9uSGVpZ2h0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbmZpcm0oKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImNcIiwgdGhpcy52YWx1ZSk7XHJcbiAgICB0aGlzLmJ1dHRvblN0YXRlLmVtaXQodHJ1ZSk7XHJcbiAgICB0aGlzLmJ1dHRvblN0YXRlLmVtaXQoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHByZXNzKCkge1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwicFwiLCB0aGlzLnZhbHVlKTtcclxuICAgIHRoaXMuYnV0dG9uU3RhdGUuZW1pdCh0cnVlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZWxlYXNlKCkge1xyXG4gICAgdGhpcy5idXR0b25TdGF0ZS5lbWl0KGZhbHNlKTtcclxuICB9XHJcbn0iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIFRpbSBXZW50emxhdVxyXG4vLyBMaWNlbnNlZCB1bmRlciBNSVRcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIE9uRGVzdHJveX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5HWEtlcnZpU2VydmljZSB9IGZyb20gJ25neC1rZXJ2aSc7XHJcbmltcG9ydCB7IFN0cmVhbSB9IGZyb20gJ2tlcnZpLWpzJztcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAna2VydmktbXBlZy12aWV3ZXInLFxyXG4gIHRlbXBsYXRlOiBgPGltZyAobG9hZCk9XCJpbWFnZVJlYWR5KClcIiBjbGFzcz1cImNhbUltYWdlXCIgW2F0dHIuc3JjXT1cInN0cmVhbURhdGFcIiBbc3R5bGUuaGVpZ2h0LiVdPVwiaGVpZ2h0XCIgW3N0eWxlLndpZHRoLiVdPVwid2lkdGhcIj5cclxuYCxcclxuICBzdHlsZXM6IFtgI3ZpZGVvLXZpZXdlcnttYXJnaW4tdG9wOi0yMHB4fS5jYW0tcGFkLWFyZWF7ei1pbmRleDoxMjAwO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTt3aWR0aDoyMDBweDtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjM4OXB4O3RvcDoxMzJweDtjb2xvcjojZmZmfWBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNUEVHVmlld2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3l7XHJcbiAgQElucHV0KCkgc2V0IGNhbWVyYVNvdXJjZShpZDogc3RyaW5nKSB7XHJcbiAgICBjb25zb2xlLmxvZygnc2V0IGNhbSBzb3VyY2UnLCBpZCk7XHJcbiAgICB0aGlzLnNldFNvdXJjZShpZCk7XHJcbn07XHJcbiAgXHJcbiAgQElucHV0KCkgd2lkdGg6IG51bWJlciA9IG51bGw7XHJcbiAgQElucHV0KCkgaGVpZ2h0OiBudW1iZXIgPSBudWxsO1xyXG4gIEBPdXRwdXQoKSBpbWFnZUxvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBzdHJlYW06IFN0cmVhbSA9IG51bGw7XHJcbiAgQElucHV0KClcclxuICBzdHJlYW1EYXRhOiBhbnk7XHJcbiAgcHJpdmF0ZSBmaXJzdExvYWQgPSB0cnVlO1xyXG4gIHByaXZhdGUgZnBzQ291bnRlciA9IDA7XHJcbiAgcHJpdmF0ZSBmcHNUaW1lID0gbmV3IERhdGUoKTtcclxuICBwcml2YXRlIHN0cmVhbVN1YnNjcmlwdGlvbiA9IG51bGw7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZnBzID0gMDtcclxuXHJcbiAgY29uc3RydWN0b3IoIHByaXZhdGUga2VydmlTZXJ2aWNlOiBOR1hLZXJ2aVNlcnZpY2UsIHByaXZhdGUgZG9tU2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHtcclxuICBcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIGlmICh0aGlzLnN0cmVhbSkge1xyXG4gICAgICB0aGlzLnN0cmVhbVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICB0aGlzLnN0cmVhbS5jbG9zZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0U291cmNlKHNvdXJjZTogc3RyaW5nKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInNjXCIsIHNvdXJjZSk7XHJcbiAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgIGlmICh0aGlzLnN0cmVhbSkge1xyXG4gICAgICB0aGlzLnN0cmVhbVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICB0aGlzLnN0cmVhbS5jbG9zZSgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zdHJlYW0gPSB0aGlzLmtlcnZpU2VydmljZS5HZXRTdHJlYW0oc291cmNlLCBbJ0lNQUdFX0ZSQU1FJ10pO1xyXG4gICAgY29uc29sZS5sb2coXCJzY3hcIiwgdGhpcy5zdHJlYW0pO1xyXG4gICAgdGhpcy5zdHJlYW1TdWJzY3JpcHRpb24gPSB0aGlzLnN0cmVhbS5ldmVudHMkLnN1YnNjcmliZSggZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgLy9jb25zb2xlLmxvZygnY2UnLCBldmVudCk7XHJcbiAgICAgIGlmIChldmVudCkge1xyXG4gICAgICAgIHZhciBibG9iID0gbmV3IEJsb2IoIFsgZXZlbnQuZGF0YSBdLCB7IHR5cGU6IFwiaW1hZ2UvanBlZ1wiIH0gKTtcclxuICAgICAgICBzZWxmLnN0cmVhbURhdGEgPSBzZWxmLmRvbVNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0VXJsKFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYikpO1xyXG4gICAgICAgIHNlbGYuZnBzQ291bnRlciArPSAxO1xyXG4gICAgICAgIGNvbnN0IG5vdyAgID0gbmV3IERhdGUoKTtcclxuICAgICAgICBjb25zdCBmcHNEaWZmID0gbm93LmdldFRpbWUoKSAtIHNlbGYuZnBzVGltZS5nZXRUaW1lKCk7XHJcbiAgICAgICAgY29uc3Qgc2Vjb25kcyA9IGZwc0RpZmYgLyAxMDAwO1xyXG4gICAgICAgIGlmIChzZWNvbmRzID4gMSkge1xyXG4gICAgICAgICAgc2VsZi5mcHMgPSBzZWxmLmZwc0NvdW50ZXIgLyBzZWNvbmRzO1xyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZygnZnBzJywgc2VsZi5mcHNDb3VudGVyLCBzZWNvbmRzLCBzb3VyY2UsIHNlbGYuZnBzKTtcclxuICAgICAgICAgIHNlbGYuZnBzQ291bnRlciA9IDA7XHJcbiAgICAgICAgICBzZWxmLmZwc1RpbWUgPSBub3c7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGltYWdlUmVhZHkoKXtcclxuICAgIGlmICh0aGlzLmZpcnN0TG9hZCl7XHJcbiAgICAgICAgdGhpcy5maXJzdExvYWQ9ZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pbWFnZUxvYWRlZC5lbWl0KHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxufSIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgVGltIFdlbnR6bGF1XHJcbi8vIExpY2Vuc2VkIHVuZGVyIE1JVFxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRlVGltZVZhbHVlIH0gZnJvbSAna2VydmktanMnXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAna2VydmktZGF0ZXRpbWUnLFxyXG4gIHRlbXBsYXRlOiBgPG56LWRhdGUtcGlja2VyIFxyXG4qbmdJZj1cInR5cGU9PSdkYXRldGltZSdcIlxyXG5uelNob3dUaW1lXHJcblsobmdNb2RlbCldPVwiZGF0ZVRpbWUudmFsdWVcIlxyXG5bbnpGb3JtYXRdID0gXCJmb3JtYXRcIlxyXG4+PC9uei1kYXRlLXBpY2tlcj5cclxuXHJcbjxuei1kYXRlLXBpY2tlciBcclxuKm5nSWY9XCJ0eXBlPT0nZGF0ZSdcIlxyXG5bKG5nTW9kZWwpXT1cImRhdGVUaW1lLnZhbHVlXCJcclxuW256Rm9ybWF0XSA9IFwiZm9ybWF0XCJcclxuPjwvbnotZGF0ZS1waWNrZXI+XHJcblxyXG5cclxuPG56LXRpbWUtcGlja2VyIFxyXG4qbmdJZj1cInR5cGU9PSd0aW1lJ1wiXHJcblsobmdNb2RlbCldPVwiZGF0ZVRpbWUudmFsdWVcIlxyXG5bbnpGb3JtYXRdID0gXCJmb3JtYXRcIlxyXG4+PC9uei10aW1lLXBpY2tlcj5cclxuYCxcclxuICBzdHlsZXM6IFtgYF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRlVGltZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgZGF0ZVRpbWU6RGF0ZVRpbWVWYWx1ZTtcclxuICBASW5wdXQoKSB0eXBlOnN0cmluZztcclxuICBASW5wdXQoKSBmb3JtYXQ6IHN0cmluZztcclxuICBAT3V0cHV0KCkgZGF0ZVRpbWVDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlclxyXG4gIHByaXZhdGUgaXNSZWFkeT1mYWxzZTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6RWxlbWVudFJlZikgeyAgXHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgXHJcbiAgICBcclxuICB9XHJcbn0iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIFRpbSBXZW50emxhdVxyXG4vLyBMaWNlbnNlZCB1bmRlciBNSVRcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdrZXJ2aS1pY29uJyxcclxuICB0ZW1wbGF0ZTogYDxpIGNsYXNzPVwicGkgcGkte3tpY29ufX1cIj48L2k+YCxcclxuICBzdHlsZXM6IFtgYF0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSWNvbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGljb246IHN0cmluZyA9IG51bGw7XHJcbiBcclxuICBjb25zdHJ1Y3RvcigpIHsgIFxyXG4gIH1cclxuXHJcbiAgXHJcbiAgXHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG59IiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCBUaW0gV2VudHpsYXVcclxuLy8gTGljZW5zZWQgdW5kZXIgTUlUXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGFzaGJvYXJkU2l6ZXMgfSBmcm9tICdrZXJ2aS1qcydcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmRlY2xhcmUgdmFyIGpRdWVyeTogYW55O1xyXG5kZWNsYXJlIHZhciBDb2xvcnM6IGFueTtcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdrZXJ2aS1jb2xvcicsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IHN0eWxlPVwibWF4LXdpZHRoOjkwcHhcIiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XHJcbiAgICA8ZGl2ICBbYXR0ci5iYWNrZ3JvdW5kLnZhbHVlXT1cImNvbG9yVmFsdWVcIiBjbGFzcz1cImZvcm0tY29udHJvbCBjb2xvclwiPjwvZGl2PlxyXG48L2Rpdj5cclxuYCxcclxuICBzdHlsZXM6IFtgYF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb2xvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwdWJsaWMgY29sb3JWYWx1ZTpzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBzZXQgY29sb3IodjpzdHJpbmcpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2NcIiwgdiwgdGhpcy5waWNrZXIpO1xyXG4gICAgICAgIHRoaXMuY29sb3JWYWx1ZSA9IHY7XHJcbiAgICAgICAgaWYgKHYpe1xyXG4gICAgICAgIC8vICAgIGpRdWVyeSgnLmNvbG9yJywgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLmNzcyhcImJhY2tncm91bmQtY29sb3JcIiwgdilcclxuICAgICAgICAvL2Vsc2VcclxuICAgICAgICAgICAgalF1ZXJ5KCcuY29sb3InLCB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuYXR0cihcInN0eWxlXCIsXCJiYWNrZ3JvdW5kLWNvbG9yOlwiICsgdilcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgXHJcbiAgfTtcclxuICBAT3V0cHV0KCkgY29sb3JDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKClcclxuICBASW5wdXQoKSBsaW5rUGFyYW1ldGVyczphbnk7XHJcbiAgQElucHV0KCkgaW5saW5lOmJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBkYXNoYm9hcmRTaXplczpEYXNoYm9hcmRTaXplcyA9IG5ldyBEYXNoYm9hcmRTaXplcygpO1xyXG4gIHByaXZhdGUgd2lkdGg6c3RyaW5nO1xyXG4gIHByaXZhdGUgaGVpZ2h0OnN0cmluZztcclxuICBwcml2YXRlIHN0YXRlOmFueTtcclxuICBwcml2YXRlIHJnYlN0cmluZzpzdHJpbmc7XHJcbiAgcHJpdmF0ZSBwaWNrZXI6YW55ID0gbnVsbDtcclxuICBcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHsgfVxyXG4gICAgXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICBpZiAoIXNlbGYubGlua1BhcmFtZXRlcnMuYnV0dG9uV2lkdGgpXHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMuZGFzaGJvYXJkU2l6ZXMuc3dpdGNoV2lkdGg7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHNlbGYubGlua1BhcmFtZXRlcnMuYnV0dG9uV2lkdGg7XHJcblxyXG4gICAgXHJcbiAgICBpZiAodGhpcy5saW5rUGFyYW1ldGVycy5pc0lucHV0KXtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgc2VsZi5waWNrZXIgPSBqUXVlcnkoJy5jb2xvcicsIHNlbGYuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5jb2xvclBpY2tlcih7XHJcbiAgICAgICAgICAgICAgICAvL2NvbG9yOiAncmdiYSgyNTUsMTIsMTQsMSknLFxyXG4gICAgICAgICAgICAgICAgY3NzQWRkb246ICcuY3AtY29sb3ItcGlja2VyIHt6LWluZGV4OjIwMDB9JyxcclxuICAgICAgICAgICAgICAgIGJ1aWxkQ2FsbGJhY2s6ZnVuY3Rpb24oYil7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25DYWxsYmFjazpmdW5jdGlvbihwKXtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByZW5kZXJDYWxsYmFjazogZnVuY3Rpb24odil7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdi50ZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5pbmRleE9mKFwicmdiXCIpPT0wKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJnYiA9IHYudGV4dC5zcGxpdCggJywnICkgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcj1wYXJzZUludCggcmdiWzBdLnN1YnN0cmluZyg0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBnPXBhcnNlSW50KCByZ2JbMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYj1wYXJzZUludCggcmdiWzJdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBcIiNcIiArci50b1N0cmluZygxNikrZy50b1N0cmluZygxNikrYi50b1N0cmluZygxNik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2NcIiwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29sb3JDaGFuZ2UuZW1pdCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uQ2FsbGJhY2s6IGZ1bmN0aW9uKHYseCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjXCIsIHYsIHgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIH0pOyAgICBcclxuICAgICAgICB9LCAwKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJ1xyXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IE5HWEtlcnZpUGlwZXNNb2R1bGUgIH0gZnJvbSAnbmd4LWtlcnZpJ1xyXG5pbXBvcnQgeyBTcGFya2xpbmVDb21wb25lbnQgfSBmcm9tICcuL3NwYXJrbGluZS9zcGFya2xpbmUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2xpZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEdhdWdlQ29tcG9uZW50IH0gZnJvbSAnLi9nYXVnZS9nYXVnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBLZXJ2aUNoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9jaGFydC9jaGFydC5jb21wb25lbnQnXHJcbi8vaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgU3dpdGNoQnV0dG9uQ29tcG9uZW50fSBmcm9tICcuL3N3aXRjaC1idXR0b24vc3dpdGNoLWJ1dHRvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnR9IGZyb20gJy4vYnV0dG9uL2J1dHRvbi5jb21wb25lbnQnO1xyXG4vL2ltcG9ydCB7IENhbVZpZXdlckNvbXBvbmVudCB9IGZyb20gJy4vY2FtLXZpZXdlci9jYW0tdmlld2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1QRUdWaWV3ZXJDb21wb25lbnQgfSBmcm9tICcuL21wZWctdmlld2VyL21wZWctdmlld2VyLmNvbXBvbmVudCc7XHJcbi8vaW1wb3J0IHsgSW1hZ2VWaWV3ZXJDb21wb25lbnQgfSBmcm9tICcuL2ltYWdlLXZpZXdlci9pbWFnZS12aWV3ZXIuY29tcG9uZW50JzsgXHJcbi8vaW1wb3J0IHsgQWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9hY3Rpb24vYWN0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERhdGVUaW1lQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRldGltZXBpY2tlci9kYXRldGltZXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJY29uc0NvbXBvbmVudCB9IGZyb20gJy4vaWNvbnMvaWNvbnMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmd4R2F1Z2VNb2R1bGUgfSBmcm9tICduZ3gtZ2F1Z2UnO1xyXG5pbXBvcnQgeyBDb2xvckNvbXBvbmVudCB9IGZyb20gJy4vY29sb3IvY29sb3IuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSAgICBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE5nWm9ycm9BbnRkTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XHJcbmltcG9ydCB7IE5nQXBleGNoYXJ0c01vZHVsZSB9IGZyb20gJ25nLWFwZXhjaGFydHMnXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgU3BhcmtsaW5lQ29tcG9uZW50LFxyXG4gICAgU2xpZGVyQ29tcG9uZW50LFxyXG4gICAgSWNvbnNDb21wb25lbnQsXHJcbiAgICBHYXVnZUNvbXBvbmVudCxcclxuICAgIEtlcnZpQ2hhcnRDb21wb25lbnQsXHJcbiAgICBTd2l0Y2hCdXR0b25Db21wb25lbnQsXHJcbiAgICBCdXR0b25Db21wb25lbnQsXHJcbiAgICAvL0NhbVZpZXdlckNvbXBvbmVudCxcclxuICAgIE1QRUdWaWV3ZXJDb21wb25lbnQsXHJcbiAgICAvL0ltYWdlVmlld2VyQ29tcG9uZW50LFxyXG4gICAgLy9BY3Rpb25Db21wb25lbnQsXHJcbiAgICBEYXRlVGltZUNvbXBvbmVudCxcclxuICAgIENvbG9yQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOltcclxuICAgICAgU3BhcmtsaW5lQ29tcG9uZW50LFxyXG4gICAgICBTbGlkZXJDb21wb25lbnQsXHJcbiAgICAgIEljb25zQ29tcG9uZW50LFxyXG4gICAgICBNUEVHVmlld2VyQ29tcG9uZW50LFxyXG4gICAgICBHYXVnZUNvbXBvbmVudCxcclxuICAgICAgS2VydmlDaGFydENvbXBvbmVudCxcclxuICAgICAgU3dpdGNoQnV0dG9uQ29tcG9uZW50LFxyXG4gICAgICBCdXR0b25Db21wb25lbnQsXHJcbiAgICAgIC8vQ2FtVmlld2VyQ29tcG9uZW50LFxyXG4gICAgICAvL0FjdGlvbkNvbXBvbmVudCxcclxuICAgICAgRGF0ZVRpbWVDb21wb25lbnQsXHJcbiAgICAgIENvbG9yQ29tcG9uZW50XHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBCcm93c2VyTW9kdWxlLFxyXG4gICAgTkdYS2VydmlQaXBlc01vZHVsZSxcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIE5neEdhdWdlTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBOZ1pvcnJvQW50ZE1vZHVsZSxcclxuICAgIE5nQXBleGNoYXJ0c01vZHVsZVxyXG4gICAgLy9LZXJ2aVBpcGVzTW9kdWxlXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtdLFxyXG4gIGJvb3RzdHJhcDogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIFVJQ29tcG9uZW50c01vZHVsZSB7XHJcbiAgY29uc3RydWN0b3IgKCl7fVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgVGltIFdlbnR6bGF1XHJcbi8vIExpY2Vuc2VkIHVuZGVyIE1JVFxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBLZXJ2aVZhbHVlLCBEYXNoYm9hcmRQYW5lbCwgRGFzaGJvYXJkU2l6ZXMgfSBmcm9tICdrZXJ2aS1qcydcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAna2VydmktdmFsdWUnLFxyXG5cdHRlbXBsYXRlOiBgICAgIDxrZXJ2aS12YWx1ZS1udW1iZXIgKm5nSWY9XCJ2YWx1ZS50eXBlTmFtZT09J051bWJlcidcIiBbdmFsdWVdPVwidmFsdWVcIiBbZGFzaGJvYXJkU2l6ZXNdPVwiZGFzaGJvYXJkU2l6ZXNcIiBbbGlua1BhcmFtZXRlcnNdPVwibGlua1BhcmFtZXRlcnNcIiBbaW5saW5lXT1cImlubGluZVwiID48L2tlcnZpLXZhbHVlLW51bWJlcj5cclxuICAgIDxrZXJ2aS12YWx1ZS1ib29sZWFuICpuZ0lmPVwidmFsdWUudHlwZU5hbWU9PSdCb29sZWFuJ1wiIFtkYXNoYm9hcmRTaXplc109XCJkYXNoYm9hcmRTaXplc1wiIFtsaW5rUGFyYW1ldGVyc109XCJsaW5rUGFyYW1ldGVyc1wiIFtpbmxpbmVdPVwiaW5saW5lXCIgW3ZhbHVlXT1cInZhbHVlXCI+PC9rZXJ2aS12YWx1ZS1ib29sZWFuPlxyXG4gICAgPGtlcnZpLXZhbHVlLXN0cmluZyAqbmdJZj1cInZhbHVlLnR5cGVOYW1lPT0nU3RyaW5nJ1wiIFtkYXNoYm9hcmRTaXplc109XCJkYXNoYm9hcmRTaXplc1wiIFtsaW5rUGFyYW1ldGVyc109XCJsaW5rUGFyYW1ldGVyc1wiIFtpbmxpbmVdPVwiaW5saW5lXCIgW3ZhbHVlXT1cInZhbHVlXCI+PC9rZXJ2aS12YWx1ZS1zdHJpbmc+XHJcbiAgICA8a2VydmktdmFsdWUtY29sb3IgKm5nSWY9XCJ2YWx1ZS50eXBlTmFtZT09J0NvbG9yJ1wiIFtkYXNoYm9hcmRTaXplc109XCJkYXNoYm9hcmRTaXplc1wiIFtsaW5rUGFyYW1ldGVyc109XCJsaW5rUGFyYW1ldGVyc1wiIFtpbmxpbmVdPVwiaW5saW5lXCIgW3ZhbHVlXT1cInZhbHVlXCI+PC9rZXJ2aS12YWx1ZS1jb2xvcj5cclxuICAgIDxrZXJ2aS12YWx1ZS1kYXRldGltZSAqbmdJZj1cInZhbHVlLnR5cGVOYW1lPT0nRGF0ZVRpbWUnXCIgW2Rhc2hib2FyZFNpemVzXT1cImRhc2hib2FyZFNpemVzXCIgW2xpbmtQYXJhbWV0ZXJzXT1cImxpbmtQYXJhbWV0ZXJzXCIgW2lubGluZV09XCJpbmxpbmVcIiBbdmFsdWVdPVwidmFsdWVcIj48L2tlcnZpLXZhbHVlLWRhdGV0aW1lPlxyXG5gLFxyXG5cdHN0eWxlczogW2BgXVxyXG5cdC8vZGlyZWN0aXZlczogWyBDb21tb25Nb2R1bGUgIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBLZXJ2aVZhbHVlQ29tcG9uZW50IHtcclxuXHRASW5wdXQoKSB2YWx1ZTogS2VydmlWYWx1ZTtcclxuXHRASW5wdXQoKSBkYXNoYm9hcmRQYW5lbDogRGFzaGJvYXJkUGFuZWw7XHJcblx0QElucHV0KCkgbGlua1BhcmFtZXRlcnM6YW55O1xyXG5cdEBJbnB1dCgpIGlubGluZTpib29sZWFuID0gZmFsc2U7XHJcblx0QElucHV0KCkgZGFzaGJvYXJkU2l6ZXM6RGFzaGJvYXJkU2l6ZXMgPSBuZXcgRGFzaGJvYXJkU2l6ZXMoKTtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7IFxyXG5cdH1cclxuXHQgXHJcblx0XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJ1xyXG5pbXBvcnQgeyBOdW1iZXJDb21wb25lbnR9IGZyb20gJy4vbnVtYmVyLXZhbHVlL251bWJlci12YWx1ZS5jb21wb25lbnQnXHJcbmltcG9ydCB7IE5HWEtlcnZpUGlwZXNNb2R1bGUgIH0gZnJvbSAnbmd4LWtlcnZpJ1xyXG5pbXBvcnQgeyBCb29sZWFuQ29tcG9uZW50fSBmcm9tICcuL2Jvb2xlYW4tdmFsdWUvYm9vbGVhbi12YWx1ZS5jb21wb25lbnQnXHJcbmltcG9ydCB7IFN0cmluZ0NvbXBvbmVudH0gZnJvbSAnLi9zdHJpbmctdmFsdWUvc3RyaW5nLXZhbHVlLmNvbXBvbmVudCdcclxuaW1wb3J0IHsgRGF0ZVRpbWVDb21wb25lbnR9IGZyb20gJy4vZGF0ZXRpbWUtdmFsdWUvZGF0ZXRpbWUtdmFsdWUuY29tcG9uZW50J1xyXG5pbXBvcnQgeyBDb2xvckNvbXBvbmVudH0gZnJvbSAnLi9jb2xvci12YWx1ZS9jb2xvci12YWx1ZS5jb21wb25lbnQnXHJcbi8vIGltcG9ydCB7IEVudW1Db21wb25lbnR9IGZyb20gJy4vZW51bS12YWx1ZS9lbnVtLXZhbHVlLmNvbXBvbmVudCdcclxuaW1wb3J0IHsgVUlDb21wb25lbnRzTW9kdWxlfSBmcm9tICcuLi91aS1jb21wb25lbnRzL3VpLWNvbXBvbmVudHMubW9kdWxlJ1xyXG5pbXBvcnQgeyBLZXJ2aVZhbHVlQ29tcG9uZW50IH0gZnJvbSAnLi9rZXJ2aS12YWx1ZS9rZXJ2aS12YWx1ZS5jb21wb25lbnQnXHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gICAgZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBOZ1pvcnJvQW50ZE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTnVtYmVyQ29tcG9uZW50LFxyXG4gICAgQm9vbGVhbkNvbXBvbmVudCxcclxuICAgIEtlcnZpVmFsdWVDb21wb25lbnQsXHJcbiAgICBTdHJpbmdDb21wb25lbnQsXHJcbiAgICAvL0VudW1Db21wb25lbnQsXHJcbiAgICBEYXRlVGltZUNvbXBvbmVudCxcclxuICAgIENvbG9yQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOltcclxuICAgICAgTnVtYmVyQ29tcG9uZW50LFxyXG4gICAgICBCb29sZWFuQ29tcG9uZW50LFxyXG4gICAgICBLZXJ2aVZhbHVlQ29tcG9uZW50LFxyXG4gICAgICBTdHJpbmdDb21wb25lbnQsXHJcbiAgICAgIC8vRW51bUNvbXBvbmVudCxcclxuICAgICAgRGF0ZVRpbWVDb21wb25lbnQsXHJcbiAgICAgIENvbG9yQ29tcG9uZW50XHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBOR1hLZXJ2aVBpcGVzTW9kdWxlLFxyXG4gICAgVUlDb21wb25lbnRzTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBOZ1pvcnJvQW50ZE1vZHVsZVxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXSxcclxuICBib290c3RyYXA6IFtdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWYWx1ZXNNb2R1bGUge1xyXG4gIGNvbnN0cnVjdG9yICgpe31cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOdW1iZXJWYWx1ZSB9IGZyb20gXCJrZXJ2aS1qc1wiXHJcbmRlY2xhcmUgdmFyIGpRdWVyeTogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdrZXJ2aS1jb250cm9sbGVyLXBhZCcsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IChtb3VzZWRvd24pPVwicGFkUHJlc3MoKVwiIChtb3VzZXVwKT1cInBhZFJlbGVhc2UoKVwiPlxyXG4gIDxmaWVsZHNldCBpZD1cImxlZnRQYWRcIiBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlXCIgY2xhc3M9XCJwYWRcIiBbYXR0ci5kYXRhLXdpZHRoXT1cInBhZFNpemVcIiBbYXR0ci5kYXRhLWhlaWdodF09XCJwYWRTaXplXCIgPlxyXG4gICAgPGxlZ2VuZD48L2xlZ2VuZD5cclxuICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInBhZC14XCIgdmFsdWU9XCIwXCI+PGlucHV0IHR5cGU9XCJoaWRkZW5cIiAgbmFtZT1cInBhZC15XCIgdmFsdWU9XCIwXCI+XHJcbiAgPC9maWVsZHNldD5cclxuPC9kaXY+YCxcclxuICBzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbnRyb2xsZXJQYWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIFhWYWx1ZTpOdW1iZXJWYWx1ZTtcclxuICBASW5wdXQoKSBZVmFsdWU6TnVtYmVyVmFsdWU7XHJcbiAgQElucHV0KCkgYXV0b0NlbnRlcjpib29sZWFuO1xyXG4gIHBhZFNpemU6bnVtYmVyPTE4MDtcclxuICBwcml2YXRlIG1vdmVEZWxheVRpbWVyID0gbnVsbDtcclxuICBwcml2YXRlIGluRHJhZzpib29sZWFuID0gZmFsc2U7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOkVsZW1lbnRSZWYpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIGlmICh0aGlzLlhWYWx1ZSl7XHJcbiAgICAgIGpRdWVyeShcImlucHV0W25hbWU9J3BhZC14J11cIiwgc2VsZi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLnZhbCh0aGlzLlhWYWx1ZS52YWx1ZSQudmFsdWUpLmNoYW5nZSgpO1xyXG4gICAgICB0aGlzLlhWYWx1ZS52YWx1ZSQuc3Vic2NyaWJlKGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwYWQteFwiLCBzZWxmLllWYWx1ZS5uYW1lLCB2KTtcclxuICAgICAgICBqUXVlcnkoXCJpbnB1dFtuYW1lPSdwYWQteCddXCIsIHNlbGYuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS52YWwodikuY2hhbmdlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLllWYWx1ZSl7XHJcbiAgICAgIGpRdWVyeShcImlucHV0W25hbWU9J3BhZC15J11cIiwgc2VsZi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLnZhbCh0aGlzLllWYWx1ZS52YWx1ZSQudmFsdWUpLmNoYW5nZSgpOyAgICAgICAgXHJcbiAgICAgIHRoaXMuWVZhbHVlLnZhbHVlJC5zdWJzY3JpYmUoZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInBhZC15XCIsIHNlbGYuWVZhbHVlLm5hbWUsIHYpO1xyXG4gICAgICAgIGpRdWVyeShcImlucHV0W25hbWU9J3BhZC15J11cIiwgc2VsZi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLnZhbCh2KS5jaGFuZ2UoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGNvbG9yID0gXCJyZ2JhKDI1NSwyNTUsMjU1LC41KVwiO1xyXG4gICAgdmFyIHAgPSBqUXVlcnkoJ2ZpZWxkc2V0Jywgc2VsZi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLnh5KHtcclxuICAgICAgZGlzcGxheVByZXZpb3VzOiBmYWxzZVxyXG4gICAgICAsIG1pbjogLTEwMFxyXG4gICAgICAsIG1heDogMTAwXHJcbiAgICAgICwgd2lkdGg6IHNlbGYucGFkU2l6ZVxyXG4gICAgICAsIGhlaWdodDogc2VsZi5wYWRTaXplXHJcbiAgICAgICwgZmdDb2xvcjogY29sb3JcclxuICAgICAgLCBiZ0NvbG9yOiBjb2xvclxyXG4gICAgICAsIGNoYW5nZTogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHNlbGYubW92ZURlbGF5VGltZXIpIHtcclxuICAgICAgICAgIGNsZWFyVGltZW91dChzZWxmLm1vdmVEZWxheVRpbWVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2VsZi5tb3ZlRGVsYXlUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgaWYgKHNlbGYuWFZhbHVlKVxyXG4gICAgICAgICAgICBzZWxmLlhWYWx1ZS5zZXQodmFsdWVbMF0pO1xyXG4gICAgICAgICAgaWYgKHNlbGYuWVZhbHVlKVxyXG4gICAgICAgICAgICBzZWxmLllWYWx1ZS5zZXQodmFsdWVbMV0pO1xyXG4gICAgICAgIH0sIDApO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgLmNzcyh7ICdib3JkZXInOiAnMnB4IHNvbGlkICcgKyBjb2xvciB9KTsgIFxyXG4gIH1cclxuXHJcbiAgcGFkUHJlc3MoKXtcclxuICAgIHRoaXMuaW5EcmFnPXRydWU7XHJcbiAgfVxyXG5cclxuICBwYWRSZWxlYXNlKCl7XHJcbiAgICBjb25zb2xlLmxvZyhcInByXCIsIHRoaXMuaW5EcmFnLCB0aGlzLmF1dG9DZW50ZXIpOyAgIFxyXG4gICAgdGhpcy5pbkRyYWc9ZmFsc2U7XHJcbiAgICAgICBpZiAodGhpcy5hdXRvQ2VudGVyICYmIHRoaXMuWFZhbHVlKXtcclxuICAgICAgICAgY29uc29sZS5sb2coXCJ4LWF1dG8gY2VudGVyXCIpO1xyXG4gICAgICAgICBqUXVlcnkoXCJpbnB1dFtuYW1lPSdwYWQteCddXCIsIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS52YWwoMCkuY2hhbmdlKCk7XHJcbiAgICAgICAgIHRoaXMuWFZhbHVlLnNldCgwKTtcclxuICAgICAgIH1cclxuICAgICAgIGlmICh0aGlzLmF1dG9DZW50ZXIgJiYgdGhpcy5ZVmFsdWUpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwieS1hdXRvIGNlbnRlclwiKTsgXHJcbiAgICAgICAgalF1ZXJ5KFwiaW5wdXRbbmFtZT0ncGFkLXknXVwiLCB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkudmFsKDApLmNoYW5nZSgpO1xyXG4gICAgICAgICB0aGlzLllWYWx1ZS5zZXQoMCk7XHJcbiAgICAgICB9XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIFZpZXdDaGlsZCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgS2VydmlDYW1lcmFDb21wb25lbnQgfSBmcm9tICduZ3gta2VydmknO1xyXG5kZWNsYXJlIHZhciB3aW5kb3c6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAna2VydmktY2FtLXZpZXdlcicsXHJcbiAgdGVtcGxhdGU6IGA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNCYWNrZ3JvdW5kICYmIGNhbWVyYSE9PW51bGxcIj5cclxuXHQ8ZGl2ICN2aWRlb1ZpZXdlciBpZD1cInZpZGVvLXZpZXdlclwiIGNsYXNzPVwidmlkZW8gdmlkZW8tYmFja2dyb3VuZFwiIHN0eWxlPVwidGV4dC1hbGlnbjpjZW50ZXI7cG9zaXRpb246Zml4ZWQ7dG9wOjYwcHg7bGVmdDowcHg7aGVpZ2h0OjEwMCU7XCIgW3N0eWxlLmhlaWdodC5weF09XCJjYW1IZWlnaHRcIiBbc3R5bGUud2lkdGgucHhdPVwiY2FtV2lkdGhcIj5cclxuXHRcdDxkaXYgc3R5bGU9XCJwb3NpdGlvbjpmaXhlZDt6LWluZGV4OjMwMDBcIiAqbmdJZj1cInN0cmVhbU9ic2VydmVycy5sZW5ndGggPiAwXCI+XHJcblx0XHRcdDxidXR0b24gKGNsaWNrKT1cImNoYW5nZVNvdXJjZShjYW1lcmFTb3VyY2UpXCIgPmJhc2U8L2J1dHRvbj5cclxuXHRcdFx0PGJ1dHRvbiAqbmdGb3I9XCJsZXQgb2JzZXJ2ZXIgb2Ygc3RyZWFtT2JzZXJ2ZXJzXCIgKGNsaWNrKT1cImNoYW5nZVNvdXJjZShvYnNlcnZlci51aS5zdHJlYW0pXCI+IHt7IG9ic2VydmVyLm5hbWV9fTwvYnV0dG9uPlx0XHRcdFxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8c3BhbiBjbGFzcz1cImNhbUltYWdlXCIgc3R5bGU9XCJ0b3A6MHB4O2xlZnQ6MHB4O1wiPlxyXG5cdFx0XHQ8a2VydmktbXBlZy12aWV3ZXIgKGltYWdlTG9hZGVkKT1cImltYWdlTG9hZGVkKClcIiBbaGVpZ2h0XT0xMDAgICBbY2FtZXJhU291cmNlXT1cInNlbGVjdGVkU291cmNlXCIgPiA8L2tlcnZpLW1wZWctdmlld2VyPlxyXG5cdFx0PC9zcGFuPlxyXG5cdFx0PGNhbnZhcyBpZD1cImNhbUNhbnZhc1wiIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7dG9wOjBweDtsZWZ0OjBweDtcIiBbc3R5bGUuaGVpZ2h0LnB4XT1cImNhbUhlaWdodFwiIFtzdHlsZS53aWR0aC5weF09XCJjYW1XaWR0aFwiPjwvY2FudmFzPlxyXG5cdFx0PGNhbnZhcyBpZD1cInBvaUNhbnZhc1wiIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7dG9wOjBweDtsZWZ0OjBweDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlXCI+PC9jYW52YXM+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiY2FtLXBhZC1hcmVhXCIgKm5nSWY9XCJzaG93Q2FtUGFkXCIgW3N0eWxlLmxlZnQucHhdPVwiY2FtUGFkTGVmdFwiIFtzdHlsZS50b3AucHhdPVwiY2FtUGFkVG9wXCIgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OiAyMDAwXCI+XHJcbiAgICAgIDxrZXJ2aS1jb250cm9sbGVyLXBhZCBbWFZhbHVlXT1cInBhblwiIFtZVmFsdWVdPVwidGlsdFwiPiA8L2tlcnZpLWNvbnRyb2xsZXItcGFkPlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8ZGl2IHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7dG9wOjMwcHg7bGVmdDowcHg7d2lkdGg6MTAwJTtoZWlnaHQ6NTBweFwiPlxyXG5cdFx0XHQ8bmctY29udGFpbmVyICAqbmdGb3I9XCJsZXQgYWN0aW9uIG9mIGNhbWVyYS5hY3Rpb25zXCI+XHJcblx0XHRcdFx0PGtlcnZpLWFjdGlvbiB0aXRsZT1cInt7KCBhY3Rpb24ubmFtZSB8IHRyYW5zbGF0ZSl9fVwiICpuZ0lmPVwiYWN0aW9uLnZpc2libGVcIiBbYWN0aW9uXT1cImFjdGlvblwiID48L2tlcnZpLWFjdGlvbj5cclxuXHRcdFx0PC9uZy1jb250YWluZXI+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuPC9uZy1jb250YWluZXI+XHJcblxyXG48bmctY29udGFpbmVyICpuZ0lmPVwiIWlzQmFja2dyb3VuZCAmJiBjYW1lcmEhPT1udWxsXCI+XHJcblx0PGRpdiAjdmlkZW9WaWV3ZXIgaWQ9XCJ2aWRlby12aWV3ZXJcIiBjbGFzcz1cInZpZGVvXCIgc3R5bGU9XCJvdmVyZmxvdzpoaWRkZW47cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJVwiPlxyXG5cdFx0PHNwYW4gY2xhc3M9XCJjYW1JbWFnZVwiIHN0eWxlPVwidG9wOjBweDtsZWZ0OjBweDtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlXCI+XHJcblx0XHRcdDxrZXJ2aS1tcGVnLXZpZXdlciAoaW1hZ2VMb2FkZWQpPVwiaW1hZ2VMb2FkZWQoKVwiIFt3aWR0aF09MTAwICBbY2FtZXJhU291cmNlXT1cImNhbWVyYVNvdXJjZVwiID4gPC9rZXJ2aS1tcGVnLXZpZXdlcj5cclxuXHRcdDwvc3Bhbj5cclxuXHRcdDxjYW52YXMgaWQ9XCJjYW1DYW52YXNcIiBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlO3RvcDowcHg7bGVmdDowcHg7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJVwiPjwvY2FudmFzPlxyXG5cdFx0PGNhbnZhcyBpZD1cInBvaUNhbnZhc1wiIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7dG9wOjBweDtsZWZ0OjBweDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlXCI+PC9jYW52YXM+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiY2FtLXBhZC1hcmVhXCIgKm5nSWY9XCJzaG93Q2FtUGFkXCIgW3N0eWxlLmxlZnQucHhdPVwiY2FtUGFkTGVmdFwiIFtzdHlsZS50b3AucHhdPVwiY2FtUGFkVG9wXCIgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZVwiPlxyXG4gICAgICA8a2VydmktY29udHJvbGxlci1wYWQgW1hWYWx1ZV09XCJwYW5cIiBbWVZhbHVlXT1cInRpbHRcIj4gPC9rZXJ2aS1jb250cm9sbGVyLXBhZD5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG5cdDxkaXY+XHJcblx0XHQ8bmctY29udGFpbmVyICAqbmdGb3I9XCJsZXQgYWN0aW9uIG9mIGNhbWVyYS5hY3Rpb25zXCI+XHJcblx0XHRcdDxrZXJ2aS1hY3Rpb24gKm5nSWY9XCJhY3Rpb24udWkudmlzaWJsZVwiIHRpdGxlPVwie3soIGFjdGlvbi5uYW1lIHwgdHJhbnNsYXRlKX19XCIgW2FjdGlvbl09XCJhY3Rpb25cIiA+PC9rZXJ2aS1hY3Rpb24+XHJcblx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHRcdDwhLS0gPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIChtb3VzZWRvd24pPVwiaW1hZ2VWaWV3ZXIuc2hvdygpXCIgdGl0bGU9XCJ7eyggJ21lZGlhX2ZvbGRlcicgfCB0cmFuc2xhdGUpfX1cIj5cclxuXHRcdFx0PGkgIGNsYXNzPSdmYSBmYS1mb2xkZXInPjwvaT5cclxuXHRcdDwvYnV0dG9uPiAtLT5cclxuXHQ8L2Rpdj5cclxuPC9uZy1jb250YWluZXI+XHJcbjwhLS0gPGtlcnZpLWltYWdlLXZpZXdlciAjaW1hZ2VWaWV3ZXIgW2NhbUNvbXBvbmVudF09XCJ0aGlzXCIgW2NhbWVyYVNvdXJjZV09XCJjYW1lcmFTb3VyY2VcIj48L2tlcnZpLWltYWdlLXZpZXdlcj4gLS0+YCxcclxuICBzdHlsZXM6IFtgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENhbVZpZXdlckNvbXBvbmVudCBleHRlbmRzIEtlcnZpQ2FtZXJhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcclxuICBwdWJsaWMgY2FtSGVpZ2h0OiBudW1iZXI7XHJcbiAgcHVibGljIGNhbVdpZHRoOiBudW1iZXI7XHJcbiAgcHVibGljIGNhbVBhZExlZnQ6IG51bWJlcjtcclxuICBwdWJsaWMgY2FtUGFkVG9wOiBudW1iZXI7XHJcbiAgcHVibGljIHNob3dDYW1QYWQgPSBmYWxzZTtcclxuICBAVmlld0NoaWxkKCd2aWRlb1ZpZXdlcicpIHZpZGVvVmlld2VyOiBFbGVtZW50UmVmO1xyXG4gIHBhZFNpemUgPSAxODA7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgaW1hZ2VMb2FkZWQoKSB7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgIGlmICh0aGlzLmNhbWVyYSAhPT0gbnVsbCkge1xyXG4gICAgICBjb25zdCBlbGVtZW50ID0gc2VsZi52aWRlb1ZpZXdlci5uYXRpdmVFbGVtZW50O1xyXG4gICAgICBjb25zdCB2aWV3UG9ydEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgICAgY29uc3Qgdmlld1BvcnRXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cclxuICAgICAgdGhpcy5jYW1IZWlnaHQgPSB2aWV3UG9ydEhlaWdodCAtIDY1O1xyXG4gICAgICB0aGlzLmNhbVdpZHRoID0gdmlld1BvcnRXaWR0aDtcclxuICAgICAgY29uc29sZS5sb2coJ2F2aWMnLCB0aGlzLmNhbUhlaWdodCwgdGhpcy5jYW1XaWR0aCk7XHJcblxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgaCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgIGNvbnN0IHcgPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgICAgIGlmICh3IDwgc2VsZi5wYWRTaXplKSB7XHJcbiAgICAgICAgICBzZWxmLnBhZFNpemUgPSB3IC0gMTA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjYW1pJywgaCwgdywgc2VsZi5wYWRTaXplLCBlbGVtZW50KTtcclxuICAgICAgICBzZWxmLmNhbVBhZFRvcCA9IGggLyAyIC0gKHNlbGYucGFkU2l6ZSAvIDIpO1xyXG4gICAgICAgIHNlbGYuY2FtUGFkTGVmdCA9ICB3IC8gMiAtIChzZWxmLnBhZFNpemUgLyAyKTtcclxuICAgICAgICBzZWxmLnNob3dDYW1QYWQgPSB0cnVlO1xyXG4gICAgICB9LCAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5uZ09uSW5pdENhbWVyYSgpO1xyXG4gIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIFRpbSBXZW50emxhdVxyXG4vLyBMaWNlbnNlZCB1bmRlciBNSVRcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgS2VydmlBY3Rpb25Db21wb25lbnQgfSBmcm9tICduZ3gta2VydmknO1xyXG4vL2ltcG9ydCB7IFRlbXBsYXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3RlbXBsYXRlLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdrZXJ2aS1hY3Rpb24nLFxyXG4gIHRlbXBsYXRlOiBgPGtlcnZpLXN3aXRjaGJ1dHRvbiBcclxuICAgIFtkYXNoYm9hcmRTaXplc109XCJkYXNoYm9hcmRTaXplc1wiIFxyXG4gICAgW2lubGluZV09XCJpbmxpbmVcIiBcclxuICAgIFt2YWx1ZV09XCIoc3RhdGUgfCBhc3luYylcIiBcclxuICAgIFtsaW5rUGFyYW1ldGVyc109XCJsaW5rUGFyYW1ldGVyc1wiXHJcbiAgICAoYnV0dG9uU3RhdGUpPVwic2V0QWN0aW9uU3RhdGUoJGV2ZW50KVwiXHJcbiAgICAqbmdJZj1cImRpc3BsYXlUeXBlIT0nYnV0dG9uJ1wiXHJcbj48L2tlcnZpLXN3aXRjaGJ1dHRvbj5cclxuPGtlcnZpLWJ1dHRvbiBcclxuICAgIFt0aXRsZV09XCJhY3Rpb24ubmFtZVwiIFxyXG4gICAgW2Rhc2hib2FyZFNpemVzXT1cImRhc2hib2FyZFNpemVzXCIgXHJcbiAgICBbdmFsdWVdPVwiKHN0YXRlIHwgYXN5bmMpXCIgXHJcbiAgICBbaW5saW5lXT1cImlubGluZVwiIFxyXG4gICAgW2xpbmtQYXJhbWV0ZXJzXT1cImxpbmtQYXJhbWV0ZXJzXCJcclxuICAgIChidXR0b25TdGF0ZSk9XCJzZXRBY3Rpb25TdGF0ZSgkZXZlbnQpXCIgXHJcbiAgICAqbmdJZj1cImRpc3BsYXlUeXBlPT0nYnV0dG9uJ1wiXHJcbj48L2tlcnZpLWJ1dHRvbj5cclxuYCxcclxuICBzdHlsZXM6IFtgYF0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQWN0aW9uQ29tcG9uZW50IGV4dGVuZHMgS2VydmlBY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgIHRoaXMubmdPbkluaXRBY3Rpb24oKTtcclxuICB9XHJcbn0iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIFRpbSBXZW50emxhdVxyXG4vLyBMaWNlbnNlZCB1bmRlciBNSVRcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgS2VydmlVc2VyTG9nQ29tcG9uZW50IH0gZnJvbSAnbmd4LWtlcnZpJztcclxuLy9pbXBvcnQgeyBUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi90ZW1wbGF0ZS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAna2VydmktdXNlci1sb2cnLFxyXG4gIHRlbXBsYXRlOiBgPG56LXRpbWVsaW5lID5cclxuICAgIDxuei10aW1lbGluZS1pdGVtIFtuekRvdF09XCJtZXNzYWdlLmxldmVsPT0xID8gZG90VGVtcGxhdGUxIDogIG1lc3NhZ2UubGV2ZWw9PTIgPyBkb3RUZW1wbGF0ZTIgOiBkb3RUZW1wbGF0ZTNcIiAqbmdGb3I9XCJsZXQgbWVzc2FnZSBvZiBtZXNzYWdlcyQgfCBhc3luY1wiPlxyXG4gICAgICAgICAgICA8c3Ryb25nPnt7bWVzc2FnZS5zb3VyY2VOYW1lfX08L3N0cm9uZz48YnI+XHJcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiZm9udC1zaXplOjgwJVwiPnt7bWVzc2FnZS50aW1lc3RhbXAgfCBkYXRlOiAnSEg6bW06c3MnfX08L3NwYW4+PGJyPiAgICBcclxuICAgICAgICAgICAge3ttZXNzYWdlLnRvcGljfX1cclxuICAgICAgICAgICAgPG56LWRpdmlkZXI+PC9uei1kaXZpZGVyPlxyXG4gICAgPC9uei10aW1lbGluZS1pdGVtPlxyXG48L256LXRpbWVsaW5lPlxyXG48bmctdGVtcGxhdGUgI2RvdFRlbXBsYXRlMT5cclxuICAgIDxpIG56LWljb24gdHlwZT1cImNsb3NlLWNpcmNsZVwiIHN0eWxlPVwiZm9udC1zaXplOiAxNnB4O1wiIFtuelRoZW1lXT1cIid0d290b25lJ1wiIFtuelR3b3RvbmVDb2xvcl09XCInI2Y1MjIyZCdcIj48L2k+XHJcbjwvbmctdGVtcGxhdGU+XHJcbjxuZy10ZW1wbGF0ZSAjZG90VGVtcGxhdGUyPlxyXG4gICAgPGkgbnotaWNvbiB0eXBlPVwid2FybmluZ1wiIHN0eWxlPVwiZm9udC1zaXplOiAxNnB4O1wiIFtuelRoZW1lXT1cIid0d290b25lJ1wiIFtuelR3b3RvbmVDb2xvcl09XCInI2ZhYWQxNCdcIj48L2k+XHJcbjwvbmctdGVtcGxhdGU+XHJcbjxuZy10ZW1wbGF0ZSAjZG90VGVtcGxhdGUzPlxyXG4gICAgPGkgbnotaWNvbiBuei1pY29uIHR5cGU9XCJjaGVjay1jaXJjbGVcIiBbbnpUaGVtZV09XCIndHdvdG9uZSdcIiBbbnpUd290b25lQ29sb3JdPVwiJyM1MmM0MWEnXCIgc3R5bGU9XCJmb250LXNpemU6IDE2cHg7XCI+PC9pPlxyXG48L25nLXRlbXBsYXRlPmAsXHJcbiAgc3R5bGVzOiBbYGBdLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXJMb2dDb21wb25lbnQgZXh0ZW5kcyBLZXJ2aVVzZXJMb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTsgXHJcbiAgICBcclxuICAgIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLm5nT25Jbml0VXNlckxvZygpOyBcclxuICB9XHJcblxyXG4gIFxyXG4gIFxyXG59IiwiLy8gQ29weXJpZ2h0IChjKSAyMDE5LCBUaW0gV2VudHpsYXVcclxuLy8gTGljZW5zZWQgdW5kZXIgTUlUXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEtlcnZpQXBwSGVhbHRoQ29tcG9uZW50IH0gZnJvbSAnbmd4LWtlcnZpJztcclxuLy9pbXBvcnQgeyBUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi90ZW1wbGF0ZS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAna2VydmktYXBwLWhlYWx0aCcsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IGZ4TGF5b3V0PVwicm93XCIgKm5nSWY9XCIhaW5saW5lXCIgY2xhc3M9XCJrZXJ2aS1ibG9jay13aWRnZXRcIj4gXHJcbiAgICA8ZGl2IGZ4RmxleD1cIjYwXCIgY2xhc3M9XCJrZXJ2aS12YWx1ZS1sYWJlbFwiPlxyXG4gICAgICAgIHdlYiBzb2NrZXQgbWVzc2FnZXMgXHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgPGRpdiBmeEZsZXggY2xhc3M9XCJrZXJ2aS12YWx1ZS1zZWN0aW9uXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ2YWx1ZS12YWx1ZVwiID5cclxuICAgICAgICAgICAgPCEtLSA8aSAqbmdJZj1cImN1cnJlbnRJY29uXCIgY2xhc3M9XCJmYSBmYS17e2N1cnJlbnRJY29ufX1cIj48L2k+IC0tPlxyXG4gICAgICAgICAgICA8IS0tIDx2YWx1ZS1zcGFya2xpbmUgW3ZhbHVlXT1cInZhbHVlXCI+PC92YWx1ZS1zcGFya2xpbmU+IC0tPlxyXG4gICAgICAgICAgICB7e21wc319XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbjwvZGl2PlxyXG5cclxuPGRpdiBmeExheW91dD1cInJvd1wiICpuZ0lmPVwiIWlubGluZVwiIGNsYXNzPVwia2VydmktYmxvY2std2lkZ2V0XCI+IFxyXG4gICAgPGRpdiBmeEZsZXg9XCI2MFwiIGNsYXNzPVwia2VydmktdmFsdWUtbGFiZWxcIj5cclxuICAgICAgICBQaW5nIGRpZmYgXHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgPGRpdiBmeEZsZXggY2xhc3M9XCJrZXJ2aS12YWx1ZS1zZWN0aW9uXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ2YWx1ZS12YWx1ZVwiID5cclxuICAgICAgICAgICAgPCEtLSA8aSAqbmdJZj1cImN1cnJlbnRJY29uXCIgY2xhc3M9XCJmYSBmYS17e2N1cnJlbnRJY29ufX1cIj48L2k+IC0tPlxyXG4gICAgICAgICAgICA8IS0tIDx2YWx1ZS1zcGFya2xpbmUgW3ZhbHVlXT1cInZhbHVlXCI+PC92YWx1ZS1zcGFya2xpbmU+IC0tPlxyXG4gICAgICAgICAgICB7e3BpbmdEaWZmfX1cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICAgICAgICBcclxuPC9kaXY+XHJcblxyXG48ZGl2IGZ4TGF5b3V0PVwicm93XCIgKm5nSWY9XCIhaW5saW5lXCIgY2xhc3M9XCJrZXJ2aS1ibG9jay13aWRnZXRcIj4gXHJcbiAgICA8ZGl2IGZ4RmxleD1cIjYwXCIgY2xhc3M9XCJrZXJ2aS12YWx1ZS1sYWJlbFwiPlxyXG4gICAgICAgIFBpbmcgZGVsYXkgXHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgPGRpdiBmeEZsZXggY2xhc3M9XCJrZXJ2aS12YWx1ZS1zZWN0aW9uXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ2YWx1ZS12YWx1ZVwiID5cclxuICAgICAgICAgICAgPCEtLSA8aSAqbmdJZj1cImN1cnJlbnRJY29uXCIgY2xhc3M9XCJmYSBmYS17e2N1cnJlbnRJY29ufX1cIj48L2k+IC0tPlxyXG4gICAgICAgICAgICA8IS0tIDx2YWx1ZS1zcGFya2xpbmUgW3ZhbHVlXT1cInZhbHVlXCI+PC92YWx1ZS1zcGFya2xpbmU+IC0tPlxyXG4gICAgICAgICAgICB7e3BpbmdEZWxheX19XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbjwvZGl2PmAsXHJcbiAgc3R5bGVzOiBbYGBdLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcEhlYWx0aENvbXBvbmVudCBleHRlbmRzIEtlcnZpQXBwSGVhbHRoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5uZ09uSW5pdEFwcEhlYWx0aCgpO1xyXG4gIH1cclxufSIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgVGltIFdlbnR6bGF1XHJcbi8vIExpY2Vuc2VkIHVuZGVyIE1JVFxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgS2VydmlVc2VyTG9nQ29tcG9uZW50IH0gZnJvbSAnbmd4LWtlcnZpJztcclxuaW1wb3J0IHsgTnpOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAna2VydmktdXNlci1tZXNzYWdlcycsXHJcbiAgdGVtcGxhdGU6IGA8bmctdGVtcGxhdGUgbGV0LW1lc3NhZ2U9XCJkYXRhXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYW50LW5vdGlmaWNhdGlvbi1ub3RpY2UtY29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtbm90aWZpY2F0aW9uLW5vdGljZS13aXRoLWljb25cIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhbnQtbm90aWZpY2F0aW9uLW5vdGljZS1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICA8aSAqbmdJZj1cIm1lc3NhZ2UubGV2ZWw9PTNcIiBuei1pY29uIHR5cGU9XCJjaGVjay1jaXJjbGVcIiBbbnpUaGVtZV09XCIndHdvdG9uZSdcIiBbbnpUd290b25lQ29sb3JdPVwiJyM1MmM0MWEnXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPGkgKm5nSWY9XCJtZXNzYWdlLmxldmVsPT0yXCIgbnotaWNvbiB0eXBlPVwid2FybmluZ1wiIFtuelRoZW1lXT1cIid0d290b25lJ1wiIFtuelR3b3RvbmVDb2xvcl09XCInI2ZhYWQxNCdcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8aSAqbmdJZj1cIm1lc3NhZ2UubGV2ZWw9PTFcIiBuei1pY29uIHR5cGU9XCJjbG9zZS1jaXJjbGVcIiBbbnpUaGVtZV09XCIndHdvdG9uZSdcIiBbbnpUd290b25lQ29sb3JdPVwiJyNmNTIyMmQnXCI+PC9pPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtbm90aWZpY2F0aW9uLW5vdGljZS1tZXNzYWdlXCI+e3ttZXNzYWdlLnNvdXJjZU5hbWV9fTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LW5vdGlmaWNhdGlvbi1ub3RpY2UtZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgIHt7IG1lc3NhZ2UudG9waWMgfX0gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuPC9uZy10ZW1wbGF0ZT5gLFxyXG4gIHN0eWxlczogW2BgXSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyTWVzc2FnZXNDb21wb25lbnQgZXh0ZW5kcyBLZXJ2aVVzZXJMb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYpIG1lc3NhZ2VUZW1wbGF0ZTogVGVtcGxhdGVSZWY8e30+OyAgXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBub3RpZmljYXRpb246IE56Tm90aWZpY2F0aW9uU2VydmljZSkge1xyXG4gICAgICAgIHN1cGVyKCk7IFxyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLmxhc3RNZXNzYWdlJC5zdWJzY3JpYmUoZnVuY3Rpb24obWVzc2FnZSl7XHJcbiAgICAgICAgICBpZiAobWVzc2FnZSl7XHJcbiAgICAgICAgICAgIHNlbGYubm90aWZpY2F0aW9uLnRlbXBsYXRlKHNlbGYubWVzc2FnZVRlbXBsYXRlLCB7IG56RGF0YTogbWVzc2FnZSB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHRoaXMubmdPbkluaXRVc2VyTG9nKCk7IFxyXG4gICAgXHJcbiAgfVxyXG59IiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCBUaW0gV2VudHpsYXVcclxuLy8gTGljZW5zZWQgdW5kZXIgTUlUXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBLZXJ2aVVzZXJMb2dDb21wb25lbnQgfSBmcm9tICduZ3gta2VydmknO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2tlcnZpLW1lc3NhZ2UtYnV0dG9uJyxcclxuICB0ZW1wbGF0ZTogYDxuei1iYWRnZSBbbnpDb3VudF09XCJtZXNzYWdlQ291bnQkIHwgYXN5bmNcIiBbbnpPdmVyZmxvd0NvdW50XT1cIjk5XCI+XHJcbiAgICA8YnV0dG9uICpuZ0lmPVwiKG1lc3NhZ2VDb3VudCQgfCBhc3luYyk+MFwiIG56LWJ1dHRvbiBuekdob3N0ICBuelR5cGU9XCJkZWZhdWx0XCIgbnpTaGFwZT1cImNpcmNsZVwiIChjbGljayk9XCJvcGVuKClcIj5cclxuICAgICAgICA8aSBuei1pY29uIG56VHlwZT1cIm5vdGlmaWNhdGlvblwiIG56VGhlbWU9XCJ0d290b25lXCIgW256VHdvdG9uZUNvbG9yXT1cIicjOWZkMDM3J1wiPjwvaT5cclxuICAgIDwvYnV0dG9uPlxyXG48L256LWJhZGdlPlxyXG5cclxuPG56LWRyYXdlclxyXG4gICAgICBbbnpDbG9zYWJsZV09XCJmYWxzZVwiXHJcbiAgICAgIFtuelZpc2libGVdPVwidmlzaWJsZVwiXHJcbiAgICAgIG56UGxhY2VtZW50PVwicmlnaHRcIlxyXG4gICAgICBuelRpdGxlPVwiTG9nXCJcclxuICAgICAgKG56T25DbG9zZSk9XCJjbG9zZSgpXCJcclxuICAgID5cclxuICAgIDxrZXJ2aS11c2VyLWxvZyBbaW5saW5lXT1cImZhbHNlXCI+PC9rZXJ2aS11c2VyLWxvZz5cclxuPC9uei1kcmF3ZXI+YCxcclxuICBzdHlsZXM6IFtgYF0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVXNlck1lc3NhZ2VCdXR0b25Db21wb25lbnQgZXh0ZW5kcyBLZXJ2aVVzZXJMb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHZpc2libGUgPSBmYWxzZTtcclxuICBcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpOyBcclxuICAgIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICB0aGlzLm5nT25Jbml0VXNlckxvZygpOyBcclxuICB9XHJcblxyXG4gIG9wZW4oKTogdm9pZCB7XHJcbiAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UoKTogdm9pZCB7XHJcbiAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nWm9ycm9BbnRkTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XHJcbmltcG9ydCB7IE5neEtlcnZpTW9kdWxlLCBOR1hLZXJ2aVBpcGVzTW9kdWxlICB9IGZyb20gJ25neC1rZXJ2aSdcclxuaW1wb3J0IHsgRGFzaGJvYXJkUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL2Rhc2hib2FyZC1wYW5lbC9kYXNoYm9hcmQtcGFuZWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgV2lkZ2V0Q29tcG9uZW50IH0gZnJvbSAnLi93aWRnZXQvd2lkZ2V0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7ICBWYWx1ZXNNb2R1bGUgfSBmcm9tICcuL3ZhbHVlcy92YWx1ZXMubW9kdWxlJztcclxuXHJcbmltcG9ydCB7IENvbnRyb2xsZXJQYWRDb21wb25lbnQgfSBmcm9tICcuL2NvbnRyb2xsZXItcGFkL2NvbnRyb2xsZXItcGFkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENhbVZpZXdlckNvbXBvbmVudCB9IGZyb20gJy4vY2FtLXZpZXdlci9jYW0tdmlld2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFjdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vYWN0aW9uL2FjdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBVSUNvbXBvbmVudHNNb2R1bGV9IGZyb20gJy4vdWktY29tcG9uZW50cy91aS1jb21wb25lbnRzLm1vZHVsZSc7XHJcbmltcG9ydCB7IFVzZXJMb2dDb21wb25lbnR9IGZyb20gJy4vbG9nL3VzZXItbG9nL3VzZXItbG9nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFwcEhlYWx0aENvbXBvbmVudH0gZnJvbSAnLi9hcHAtaGVhbHRoL2FwcC1oZWFsdGguY29tcG9uZW50JztcclxuaW1wb3J0IHsgVXNlck1lc3NhZ2VzQ29tcG9uZW50IH0gZnJvbSAnLi9sb2cvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVXNlck1lc3NhZ2VCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2xvZy9tZXNzYWdlLWJ1dHRvbi9tZXNzYWdlLWJ1dHRvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZmxleC1sYXlvdXQnO1xyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIEJyb3dzZXJNb2R1bGUsXHJcbiAgICBOR1hLZXJ2aVBpcGVzTW9kdWxlLFxyXG4gICAgTmd4S2VydmlNb2R1bGUsXHJcbiAgICBWYWx1ZXNNb2R1bGUsXHJcbiAgICBOZ1pvcnJvQW50ZE1vZHVsZSxcclxuICAgIEZsZXhMYXlvdXRNb2R1bGUsXHJcbiAgICBVSUNvbXBvbmVudHNNb2R1bGVcclxuICAgIFxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEYXNoYm9hcmRQYW5lbENvbXBvbmVudCxcclxuICAgIFdpZGdldENvbXBvbmVudCxcclxuICAgIENvbnRyb2xsZXJQYWRDb21wb25lbnQsXHJcbiAgICBDYW1WaWV3ZXJDb21wb25lbnQsXHJcbiAgICBBY3Rpb25Db21wb25lbnQsXHJcbiAgICBVc2VyTG9nQ29tcG9uZW50LFxyXG4gICAgVXNlck1lc3NhZ2VCdXR0b25Db21wb25lbnQsXHJcbiAgICBVc2VyTWVzc2FnZXNDb21wb25lbnQsXHJcbiAgICBBcHBIZWFsdGhDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIERhc2hib2FyZFBhbmVsQ29tcG9uZW50LFxyXG4gICAgQ29udHJvbGxlclBhZENvbXBvbmVudCxcclxuICAgIENhbVZpZXdlckNvbXBvbmVudCxcclxuICAgIFVzZXJMb2dDb21wb25lbnQsXHJcbiAgICBVc2VyTWVzc2FnZUJ1dHRvbkNvbXBvbmVudCxcclxuICAgIFVzZXJNZXNzYWdlc0NvbXBvbmVudCxcclxuICAgIEFwcEhlYWx0aENvbXBvbmVudFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEtlcnZpWm9ycm9Nb2R1bGUgeyB9XHJcbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fZXh0ZW5kcyIsIkRhdGVUaW1lQ29tcG9uZW50IiwiQ29sb3JDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFPRTtLQUFpQjs7Z0JBTGxCLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7OzRCQUpEO0NBUUM7Ozs7Ozs7SUM0QzRDQSwyQ0FBNEI7SUFFdkU7UUFBQSxZQUNFLGlCQUFPLFNBQ1A7UUFISyxpQkFBVyxHQUFDLEtBQUssQ0FBQzs7S0FHdkI7Ozs7SUFFRiwwQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQjtZQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztLQUM1Qjs7Z0JBM0RGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxRQUFRLEVBQUUscW5GQTRDRztvQkFDYixNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7aUJBQ2I7Ozs7SUFhRCw4QkFBQztDQUFBLENBWjRDLDRCQUE0Qjs7Ozs7OztJQ1JwQ0EsbUNBQW9CO0lBQ3ZEO2VBQ0UsaUJBQU87S0FDUDs7OztJQUVGLGtDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztLQUN2Qjs7Z0JBaERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLDYyRUFvQ0k7b0JBQ2QsTUFBTSxFQUFFLEVBQUU7aUJBQ1g7Ozs7SUFVRCxzQkFBQztDQUFBLENBVG9DLG9CQUFvQjs7Ozs7OztJQ2hCcEJBLG1DQUFvQjtJQUN4RCx5QkFBb0IsVUFBcUI7UUFBekMsWUFDQyxpQkFBTyxTQUNQO1FBRm1CLGdCQUFVLEdBQVYsVUFBVSxDQUFXOztLQUV4Qzs7OztJQUVELGtDQUFROzs7SUFBUjtRQUNDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztLQUN0Qjs7Z0JBOUJELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixRQUFRLEVBQUUsbzZCQWtCVjtvQkFDQSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7aUJBQ1o7Ozs7Z0JBeEIyQixVQUFVOztJQWlDdEMsc0JBQUM7Q0FBQSxDQVJvQyxvQkFBb0I7Ozs7Ozs7SUNFbkJBLG9DQUFxQjtJQUMxRDtlQUNDLGlCQUFPO0tBQ1A7Ozs7O0lBRUQsc0NBQVc7Ozs7SUFBWCxVQUFZLEtBQUs7UUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDdEI7Ozs7SUFFRCxtQ0FBUTs7O0lBQVI7UUFDQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7S0FDdkI7O2dCQW5DRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsUUFBUSxFQUFFLDhnQkFtQlY7b0JBQ0EsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2lCQUNaOzs7O0lBYUQsdUJBQUM7Q0FBQSxDQVpxQyxxQkFBcUI7Ozs7Ozs7SUNoQnRCQSxtQ0FBb0I7SUFDeEQseUJBQW9CLFVBQXNCO1FBQTFDLFlBRUMsaUJBQU8sU0FDTjtRQUhrQixnQkFBVSxHQUFWLFVBQVUsQ0FBWTs7S0FHeEM7Ozs7SUFFRixrQ0FBUTs7O0lBQVI7O1lBQ0ssSUFBSSxHQUFHLElBQUk7UUFDZixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUzs7OztRQUFDLFVBQVMsQ0FBQztZQUNwQyxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2hFLEVBQUMsQ0FBQTtLQUNGOzs7OztJQUVELGtDQUFROzs7O0lBQVIsVUFBUyxLQUFLOztZQUNULENBQUMsR0FBRyxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxFQUFFO1FBQzVELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNsQjs7Z0JBekJELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixRQUFRLEVBQUUsbU1BRVY7b0JBQ0EsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2lCQUNaOzs7O2dCQVZrQyxVQUFVOztJQThCN0Msc0JBQUM7Q0FBQSxDQW5Cb0Msb0JBQW9COzs7Ozs7O0lDRGxCQSxxQ0FBc0I7SUFDNUQ7ZUFDQyxpQkFBTztLQUNQOzs7O0lBRUQsb0NBQVE7OztJQUFSO1FBQ0MsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7S0FDeEI7O2dCQWJELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxRQUFRLEVBQUUsaUhBQ047b0JBQ0osTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2lCQUNaOzs7O0lBU0Qsd0JBQUM7Q0FBQSxDQVJzQyxzQkFBc0I7Ozs7Ozs7SUNEekJBLGtDQUFtQjtJQUV0RDtlQUNDLGlCQUFPOztLQUVQOzs7OztJQUdELGlDQUFROzs7O0lBQVIsVUFBUyxDQUFDO1FBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNmOzs7O0lBQ0QsaUNBQVE7OztJQUFSO1FBQ0MsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0tBQ3JCOztnQkFuQkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFFBQVEsRUFBRSwrSUFDVjtvQkFDQSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7aUJBQ1o7Ozs7SUFlRCxxQkFBQztDQUFBLENBZG1DLG1CQUFtQjs7Ozs7OztJQ2NyRCw0QkFBb0IsWUFBNEIsRUFBVSxlQUFvQztRQUExRSxpQkFBWSxHQUFaLFlBQVksQ0FBZ0I7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBcUI7UUFUckYsVUFBSyxHQUFnQixJQUFJLENBQUM7UUFDMUIsbUJBQWMsR0FBUSxJQUFJLENBQUM7UUFHM0IsbUJBQWMsR0FBa0IsSUFBSSxjQUFjLEVBQUUsQ0FBQztRQUV0RCxXQUFNLEdBQUMsRUFBRSxDQUFDO0tBS2pCOzs7OztJQUVPLDBDQUFhOzs7O0lBQXJCO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7UUFFaEMsSUFBSSxDQUFDLE9BQU8sR0FBRTtZQUNaLEtBQUssRUFBRTtnQkFDSCxNQUFNLEVBQUUsRUFBRTtnQkFDVixLQUFLLEVBQUMsRUFBRTtnQkFDUixJQUFJLEVBQUUsTUFBTTtnQkFDWixTQUFTLEVBQUU7b0JBQ1QsT0FBTyxFQUFFLElBQUk7aUJBQ2Q7YUFDSjtZQUNELE1BQU0sRUFBRTtnQkFDTixLQUFLLEVBQUUsVUFBVTtnQkFDakIsS0FBSyxFQUFDLENBQUM7YUFDUjtZQUNELElBQUksRUFBRTtnQkFDSixPQUFPLEVBQUUsR0FBRzthQUNiO1lBQ0QsTUFBTSxFQUFFLENBQUM7b0JBQ1AsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUs7aUJBQ2xDLENBQUM7WUFDRixLQUFLLEVBQUU7Z0JBQ0wsR0FBRyxFQUFFLENBQUM7YUFDUDtZQUNELE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFDLGtCQUFrQixDQUFDLENBQUM7U0FDakQsQ0FBQTtRQUVELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3pCO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxVQUFVLENBQzVCLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUMvQixJQUFJLENBQUMsT0FBTyxDQUNiLENBQUM7UUFDRixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQ3hCOzs7Ozs7O0lBSU8sa0NBQUs7Ozs7OztJQUFiLFVBQWMsS0FBSyxFQUFDLFFBQVE7UUFDMUIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUMsUUFBUSxDQUFDLENBQUM7S0FDdEQ7Ozs7SUFFRCxxQ0FBUTs7O0lBQVI7UUFBQSxpQkFhQzs7WUFaSyxJQUFJLEdBQUcsSUFBSTtRQUNmLGFBQWEsQ0FBQyxRQUFROzs7UUFBQztZQUNyQixLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDdEIsRUFBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsU0FBUzs7OztRQUFDLFVBQVMsQ0FBQztZQUN4QyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUFDO2dCQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO3dCQUMxQixJQUFJLEVBQUUsQ0FBQztxQkFDUixDQUFDLENBQUMsQ0FBQzthQUNMO1NBQ0YsRUFBQyxDQUFDO0tBQ0o7O2dCQTlFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2lCQUNiOzs7O2dCQVRRLGVBQWU7Z0JBQUUsb0JBQW9COzs7d0JBWTNDLEtBQUs7aUNBQ0wsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7aUNBQ0wsS0FBSzsrQkFDTCxTQUFTLFNBQUMsT0FBTzs7SUFtRXBCLHlCQUFDO0NBQUE7Ozs7Ozs7SUNoRUMseUJBQW9CLFVBQXNCLEVBQVUsZUFBb0M7UUFBcEUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFxQjtRQVgvRSxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsU0FBSSxHQUFHLG1CQUFtQixDQUFDO1FBRzNCLGlCQUFZLEdBQW1CLElBQUksY0FBYyxFQUFFLENBQUM7UUFHbkQsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXJDLFVBQUssR0FBRyxFQUFFLENBQUM7O0tBSWxCOzs7Ozs7O0lBRU8sK0JBQUs7Ozs7OztJQUFiLFVBQWMsS0FBSyxFQUFDLFFBQVE7UUFDMUIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUMsUUFBUSxDQUFDLENBQUM7S0FDdEQ7Ozs7SUFFRCxrQ0FBUTs7O0lBQVI7S0FHQzs7Z0JBNUJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsUUFBUSxFQUFFLEVBQUU7b0JBQ1osTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2lCQUNiOzs7O2dCQVR3RCxVQUFVO2dCQUUxRCxvQkFBb0I7Ozt3QkFTMUIsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7aUNBQ0wsS0FBSzsrQkFDTCxLQUFLOzJCQUNMLEtBQUs7MkJBQ0wsS0FBSztnQ0FDTCxNQUFNOztJQWlCVCxzQkFBQztDQUFBOzs7Ozs7O0lDWkMsd0JBQW9CLFlBQTRCLEVBQVUsZUFBb0M7UUFBMUUsaUJBQVksR0FBWixZQUFZLENBQWdCO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQXFCO1FBVHJGLFVBQUssR0FBZ0IsSUFBSSxDQUFDO1FBQzFCLG1CQUFjLEdBQVEsSUFBSSxDQUFDO1FBRzNCLG1CQUFjLEdBQWtCLElBQUksY0FBYyxFQUFFLENBQUM7UUFFdEQsV0FBTSxHQUFDLEVBQUUsQ0FBQztLQUtqQjs7Ozs7SUFFTyxzQ0FBYTs7OztJQUFyQjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBRWhDLElBQUksQ0FBQyxPQUFPLEdBQUU7WUFDWixLQUFLLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLE1BQU0sRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVM7YUFDdEM7WUFDRCxXQUFXLEVBQUU7Z0JBQ1gsU0FBUyxFQUFFO29CQUNULFVBQVUsRUFBRSxDQUFDLEdBQUc7b0JBQ2hCLFFBQVEsRUFBQyxHQUFHO29CQUNaLE1BQU0sRUFBRTt3QkFDTixJQUFJLEVBQUUsS0FBSztxQkFDWjtvQkFFRCxLQUFLLEVBQUM7d0JBQ0osVUFBVSxFQUFFLENBQUMsR0FBRzt3QkFDaEIsUUFBUSxFQUFFLEdBQUc7cUJBQ2Q7b0JBQ0QsVUFBVSxFQUFFO3dCQUNWLElBQUksRUFBRTs0QkFDSixJQUFJLEVBQUUsSUFBSTs0QkFDVixLQUFLLEVBQUUsU0FBUzs0QkFDaEIsUUFBUSxFQUFDLE1BQU07eUJBQ2hCO3dCQUNELEtBQUssRUFBRTs0QkFDTCxRQUFRLEVBQUUsTUFBTTs0QkFDaEIsSUFBSSxFQUFFLElBQUk7eUJBQ1g7cUJBQ0Y7aUJBQ0Y7YUFDRjtZQUNELE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFDLGNBQWMsQ0FBQyxDQUFDOztZQUM1QyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7U0FFMUIsQ0FBQTtRQUVELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3pCO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksVUFBVSxDQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FDYixDQUFDO1FBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztLQUN4Qjs7OztJQUVNLCtCQUFNOzs7SUFBYjtRQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztLQUMvQjs7Ozs7OztJQUVPLDhCQUFLOzs7Ozs7SUFBYixVQUFjLEtBQUssRUFBQyxRQUFRO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ3REOzs7O0lBRUQsaUNBQVE7OztJQUFSO1FBQUEsaUJBWUM7O1lBWEssSUFBSSxHQUFHLElBQUk7UUFDZixhQUFhLENBQUMsUUFBUTs7O1FBQUM7WUFDckIsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3RCLEVBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFTLENBQUM7WUFDcEMsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsRUFBQzs7Z0JBRXJCLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNsQztTQUNGLEVBQUMsQ0FBQztLQUNKOzs7O0lBRU0sbUNBQVU7OztJQUFqQjs7Ozs7Ozs7Ozs7OztLQWNDOzs7OztJQUVPLGtDQUFTOzs7O0lBQWpCOzs7Ozs7Ozs7Ozs7S0FZQzs7Z0JBeEhGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2lCQUNiOzs7O2dCQVRRLGVBQWU7Z0JBQUUsb0JBQW9COzs7d0JBWTNDLEtBQUs7aUNBQ0wsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7aUNBQ0wsS0FBSzsrQkFDTCxTQUFTLFNBQUMsT0FBTzs7SUE2R3BCLHFCQUFDO0NBQUE7Ozs7Ozs7SUN6R0MsNkJBQW9CLFlBQTRCLEVBQVUsZUFBb0M7UUFBMUUsaUJBQVksR0FBWixZQUFZLENBQWdCO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQXFCO1FBVHJGLFVBQUssR0FBZ0IsSUFBSSxDQUFDO1FBQzFCLG1CQUFjLEdBQVEsSUFBSSxDQUFDO1FBRzNCLG1CQUFjLEdBQWtCLElBQUksY0FBYyxFQUFFLENBQUM7UUFFdEQsV0FBTSxHQUFDLEVBQUUsQ0FBQztLQUtqQjs7Ozs7SUFFTywyQ0FBYTs7OztJQUFyQjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUU7WUFDYjtnQkFDSSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJO2dCQUNyQixJQUFJLEVBQUUsRUFBRzthQUNaO1NBQUMsQ0FBQTtRQUdGLElBQUksQ0FBQyxPQUFPLEdBQUU7WUFDWixLQUFLLEVBQUU7Z0JBQ0gsRUFBRSxFQUFFLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzVCLEtBQUssRUFBQyxNQUFNO2dCQUNaLE1BQU0sRUFBQyxHQUFHO2dCQUNWLElBQUksRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVM7Z0JBQ25DLFVBQVUsRUFBRTtvQkFDVixPQUFPLEVBQUUsSUFBSTtvQkFDYixNQUFNLEVBQUUsUUFBUTtvQkFDaEIsZ0JBQWdCLEVBQUU7d0JBQ2hCLEtBQUssRUFBRSxHQUFHO3FCQUNYO2lCQUNGO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxJQUFJLEVBQUUsS0FBSztvQkFDWCxLQUFLLEVBQUU7d0JBQ0wsUUFBUSxFQUFFLElBQUk7d0JBQ2QsU0FBUyxFQUFFLElBQUk7d0JBQ2YsSUFBSSxFQUFFLElBQUk7d0JBQ1YsTUFBTSxFQUFFLElBQUk7d0JBQ1osT0FBTyxFQUFFLElBQUk7d0JBQ2IsR0FBRyxFQUFFLElBQUk7d0JBQ1QsS0FBSyxFQUFFLElBQUk7d0JBQ1gsV0FBVyxFQUFFLEVBQUU7cUJBQ2hCO29CQUNELFlBQVksRUFBRSxNQUFNO2lCQUNyQjtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osT0FBTyxFQUFFLElBQUk7aUJBQ2Q7YUFDRjtZQUNILFVBQVUsRUFBRTtnQkFDUixPQUFPLEVBQUUsS0FBSzthQUNmO1lBQ0gsTUFBTSxFQUFFO2dCQUNKLEtBQUssRUFBRSxRQUFRO2dCQUNmLEtBQUssRUFBQyxDQUFDO2FBQ1I7WUFFSCxLQUFLLEVBQUU7Z0JBQ0gsSUFBSSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVTtnQkFDcEMsS0FBSyxFQUFFLE1BQU07YUFDZDtZQUNILE9BQU8sRUFBRTtnQkFDTCxJQUFJLEVBQUUsQ0FBQzthQUNSO1lBQ0gsS0FBSyxFQUFFO2dCQUNILElBQUksRUFBRSxVQUFVO2FBRW5CO1lBQ0QsS0FBSyxFQUFFO2dCQUNILEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7Z0JBQ3hCLEdBQUcsRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7YUFDeEI7WUFDSCxNQUFNLEVBQUU7Z0JBQ0osSUFBSSxFQUFFLEtBQUs7YUFDZDtZQUNELElBQUksRUFBRTtnQkFDSixJQUFJLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTO2dCQUNuQyxLQUFLLEVBQUU7b0JBQ0wsS0FBSyxFQUFFO3dCQUNMLElBQUksRUFBRSxJQUFJO3dCQUNWLE9BQU8sRUFBRSxJQUFJO3FCQUNkO2lCQUNGO2dCQUNELEtBQUssRUFBRTtvQkFDTCxLQUFLLEVBQUU7d0JBQ0wsSUFBSSxFQUFFLElBQUk7d0JBQ1YsT0FBTyxFQUFFLElBQUk7cUJBQ2Q7aUJBQ0Y7YUFDRjtZQUNELE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFDLGNBQWMsQ0FBQyxDQUFDOztZQUM1QyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDcEIsQ0FBQTtRQUVELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3pCO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVTtZQUNqQyxRQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUVoQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxVQUFVLENBQzVCLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUMvQixJQUFJLENBQUMsT0FBTyxDQUNiLENBQUM7UUFDRixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQ3hCOzs7Ozs7O0lBRU8sbUNBQUs7Ozs7OztJQUFiLFVBQWMsS0FBSyxFQUFDLFFBQVE7UUFDMUIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUMsUUFBUSxDQUFDLENBQUM7S0FDdEQ7Ozs7SUFFRCxzQ0FBUTs7O0lBQVI7UUFBQSxpQkFZQzs7WUFYSyxJQUFJLEdBQUcsSUFBSTtRQUNmLGFBQWEsQ0FBQyxRQUFROzs7UUFBQztZQUNyQixLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDdEIsRUFBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUzs7OztRQUFDLFVBQVMsQ0FBQztZQUNwQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUM7Z0JBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBRSxDQUFDLENBQUM7Z0JBQzlELElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUMxQztTQUNGLEVBQUMsQ0FBQztLQUNKOzs7O0lBSU0sd0NBQVU7OztJQUFqQjs7Ozs7Ozs7Ozs7OztLQWNDOzs7OztJQUVPLHVDQUFTOzs7O0lBQWpCOzs7Ozs7Ozs7Ozs7S0FZQzs7Z0JBdktGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2lCQUNiOzs7O2dCQVRRLGVBQWU7Z0JBQUUsb0JBQW9COzs7d0JBWTNDLEtBQUs7aUNBQ0wsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7aUNBQ0wsS0FBSzsrQkFDTCxTQUFTLFNBQUMsT0FBTzs7SUE0SnBCLDBCQUFDO0NBQUE7Ozs7Ozs7SUNqSkM7UUFMUyxXQUFNLEdBQVcsS0FBSyxDQUFDO1FBQ3ZCLG1CQUFjLEdBQWtCLElBQUksY0FBYyxFQUFFLENBQUM7UUFDcEQsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0tBRzFCOzs7O0lBRWpCLHdDQUFROzs7SUFBUjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUM7WUFFdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVztnQkFDbEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQzs7Z0JBRTdDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUM7WUFFL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWTtnQkFDbkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQzs7Z0JBRS9DLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUM7U0FFbEQ7YUFBSztZQUNKLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUM7WUFDN0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQztTQUNoRDtLQUNGOzs7OztJQUVELDJDQUFXOzs7O0lBQVgsVUFBWSxLQUFLO1FBQ2YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDOUI7O2dCQXBERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsUUFBUSxFQUFFLG9qQkFlWDtvQkFDQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7aUJBQ2I7Ozs7O3dCQUVFLEtBQUs7aUNBQ0wsS0FBSzt5QkFDTCxLQUFLO2lDQUNMLEtBQUs7OEJBQ0wsTUFBTTs7SUE0QlQsNEJBQUM7Q0FBQTs7Ozs7OztJQ2JDO1FBVFMsbUJBQWMsR0FBUSxJQUFJLENBQUM7UUFFM0IsV0FBTSxHQUFXLEtBQUssQ0FBQztRQUN2QixtQkFBYyxHQUFrQixJQUFJLGNBQWMsRUFBRSxDQUFDO1FBRXBELGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztLQUsxQzs7OztJQUVELGtDQUFROzs7SUFBUjs7WUFDTSxJQUFJLEdBQUcsSUFBSTtRQUNmLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBQztZQUV0QixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXO2dCQUNsQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDOztnQkFFN0MsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQztZQUUvQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZO2dCQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDOztnQkFFL0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQztTQUVsRDthQUFLO1lBQ0osSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQztZQUM3QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDO1NBQ2hEO0tBQ0Y7Ozs7SUFFTSxpQ0FBTzs7O0lBQWQ7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDOUI7Ozs7SUFFTSwrQkFBSzs7O0lBQVo7UUFFRSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDN0I7Ozs7SUFFTSxpQ0FBTzs7O0lBQWQ7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUM5Qjs7Z0JBMUVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLCtxQkFvQlg7b0JBQ0MsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2lCQUNiOzs7Ozt3QkFHRSxLQUFLO2lDQUNMLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxLQUFLO2lDQUNMLEtBQUs7d0JBQ0wsS0FBSzs4QkFDTCxNQUFNOztJQTBDVCxzQkFBQztDQUFBOzs7Ozs7O0lDbERDLDZCQUFxQixZQUE2QixFQUFVLFlBQTBCO1FBQWpFLGlCQUFZLEdBQVosWUFBWSxDQUFpQjtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBZDdFLFVBQUssR0FBVyxJQUFJLENBQUM7UUFDckIsV0FBTSxHQUFXLElBQUksQ0FBQztRQUNyQixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDM0MsV0FBTSxHQUFXLElBQUksQ0FBQztRQUdkLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsZUFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLFlBQU8sR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3JCLHVCQUFrQixHQUFHLElBQUksQ0FBQztRQUdsQyxRQUFHLEdBQUcsQ0FBQyxDQUFDO0tBSVA7SUFyQkQsc0JBQWEsNkNBQVk7Ozs7O1FBQXpCLFVBQTBCLEVBQVU7WUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3RCOzs7T0FBQTs7OztJQW9CQyxzQ0FBUTs7O0lBQVI7S0FFQzs7OztJQUVELHlDQUFXOzs7SUFBWDtRQUNFLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3JCO0tBQ0Y7Ozs7O0lBRUQsdUNBQVM7Ozs7SUFBVCxVQUFVLE1BQWM7UUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7O1lBQ3BCLElBQUksR0FBRyxJQUFJO1FBQ2pCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3JCO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ25FLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUzs7OztRQUFFLFVBQVMsS0FBSzs7WUFFckUsSUFBSSxLQUFLLEVBQUU7O29CQUNMLElBQUksR0FBRyxJQUFJLElBQUksQ0FBRSxDQUFFLEtBQUssQ0FBQyxJQUFJLENBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsQ0FBRTtnQkFDN0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDdEYsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUM7O29CQUNmLEdBQUcsR0FBSyxJQUFJLElBQUksRUFBRTs7b0JBQ2xCLE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUU7O29CQUNoRCxPQUFPLEdBQUcsT0FBTyxHQUFHLElBQUk7Z0JBQzlCLElBQUksT0FBTyxHQUFHLENBQUMsRUFBRTtvQkFDZixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDOztvQkFFckMsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7b0JBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO2lCQUNwQjthQUNGO1NBQ0YsRUFBQyxDQUFDO0tBQ0o7Ozs7SUFFRCx3Q0FBVTs7O0lBQVY7UUFDRSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUM7WUFDZixJQUFJLENBQUMsU0FBUyxHQUFDLEtBQUssQ0FBQztZQUNyQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMvQjtLQUNGOztnQkExRUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFFBQVEsRUFBRSxvSUFDWDtvQkFDQyxNQUFNLEVBQUUsQ0FBQyxxS0FBcUssQ0FBQztpQkFDaEw7Ozs7Z0JBUlEsZUFBZTtnQkFFZixZQUFZOzs7K0JBUWxCLEtBQUs7d0JBS0wsS0FBSzt5QkFDTCxLQUFLOzhCQUNMLE1BQU07NkJBRU4sS0FBSztzQkFPTCxLQUFLOztJQW9EUiwwQkFBQztDQUFBOzs7Ozs7O0lDOUNDLDJCQUFvQixVQUFxQjtRQUFyQixlQUFVLEdBQVYsVUFBVSxDQUFXO1FBRi9CLG9CQUFlLEdBQUcsSUFBSSxZQUFZLENBQUE7UUFDcEMsWUFBTyxHQUFDLEtBQUssQ0FBQztLQUVyQjs7OztJQUVELG9DQUFROzs7SUFBUjtLQUlDOztnQkF0Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRSw2WEFtQlg7b0JBQ0MsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2lCQUNiOzs7O2dCQXpCMEMsVUFBVTs7OzJCQTRCbEQsS0FBSzt1QkFDTCxLQUFLO3lCQUNMLEtBQUs7a0NBQ0wsTUFBTTs7SUFVVCx3QkFBQztDQUFBOzs7Ozs7O0lDL0JDO1FBRlMsU0FBSSxHQUFXLElBQUksQ0FBQztLQUc1Qjs7OztJQUtELGlDQUFROzs7SUFBUjtLQUVDOztnQkFqQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUsa0NBQWdDO29CQUMxQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7aUJBQ2I7Ozs7O3VCQUdFLEtBQUs7O0lBWVIscUJBQUM7Q0FBQTs7Ozs7OztJQ2dCQyx3QkFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQVZoQyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUE7UUFFakMsV0FBTSxHQUFXLEtBQUssQ0FBQztRQUN2QixtQkFBYyxHQUFrQixJQUFJLGNBQWMsRUFBRSxDQUFDO1FBS3RELFdBQU0sR0FBTyxJQUFJLENBQUM7S0FFcUI7SUFyQjdDLHNCQUFhLGlDQUFLOzs7OztRQUFsQixVQUFtQixDQUFRO1lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLEVBQUM7OztnQkFHRixNQUFNLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQyxtQkFBbUIsR0FBRyxDQUFDLENBQUMsQ0FBQTthQUN4RjtTQUdOOzs7T0FBQTs7OztJQWFELGlDQUFROzs7SUFBUjs7WUFDTSxJQUFJLEdBQUcsSUFBSTtRQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVc7WUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQzs7WUFFN0MsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQztRQUdqRCxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFDO1lBQzVCLFVBQVU7OztZQUFDO2dCQUNQLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFdBQVcsQ0FBQzs7b0JBRXRFLFFBQVEsRUFBRSxpQ0FBaUM7b0JBQzNDLGFBQWE7Ozs7b0JBQUMsVUFBUyxDQUFDO3FCQUN2QixDQUFBO29CQUNELGdCQUFnQjs7OztvQkFBQyxVQUFTLENBQUM7cUJBQzFCLENBQUE7b0JBQ0QsY0FBYzs7OztvQkFBRSxVQUFTLENBQUM7OzRCQUNsQixLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUk7d0JBQ2xCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBRSxDQUFDLEVBQUM7O2dDQUNwQixHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUUsR0FBRyxDQUFFOztnQ0FDekIsQ0FBQyxHQUFDLFFBQVEsQ0FBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDOztnQ0FDaEMsQ0FBQyxHQUFDLFFBQVEsQ0FBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7O2dDQUNuQixDQUFDLEdBQUMsUUFBUSxDQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDdkIsS0FBSyxHQUFHLEdBQUcsR0FBRSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQzt5QkFDN0Q7d0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7d0JBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUNoQyxDQUFBO29CQUNELGNBQWM7Ozs7O29CQUFFLFVBQVMsQ0FBQyxFQUFDLENBQUM7d0JBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtxQkFDekIsQ0FBQTtpQkFFSixDQUFDLENBQUM7YUFDTixHQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ1Q7S0FDRjs7Z0JBckVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsUUFBUSxFQUFFLHNKQUdYO29CQUNDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztpQkFDYjs7OztnQkFaMEMsVUFBVTs7O3dCQWVoRCxLQUFLOzhCQVdQLE1BQU07aUNBQ04sS0FBSzt5QkFDTCxLQUFLO2lDQUNMLEtBQUs7O0lBOENSLHFCQUFDO0NBQUE7Ozs7OztBQzlFRDtJQW1FRTtLQUFnQjs7Z0JBNUNqQixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGtCQUFrQjt3QkFDbEIsZUFBZTt3QkFDZixjQUFjO3dCQUNkLGNBQWM7d0JBQ2QsbUJBQW1CO3dCQUNuQixxQkFBcUI7d0JBQ3JCLGVBQWU7O3dCQUVmLG1CQUFtQjs7O3dCQUduQkMsbUJBQWlCO3dCQUNqQkMsZ0JBQWM7cUJBQ2Y7b0JBQ0QsT0FBTyxFQUFDO3dCQUNKLGtCQUFrQjt3QkFDbEIsZUFBZTt3QkFDZixjQUFjO3dCQUNkLG1CQUFtQjt3QkFDbkIsY0FBYzt3QkFDZCxtQkFBbUI7d0JBQ25CLHFCQUFxQjt3QkFDckIsZUFBZTs7O3dCQUdmRCxtQkFBaUI7d0JBQ2pCQyxnQkFBYztxQkFDakI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGFBQWE7d0JBQ2IsbUJBQW1CO3dCQUNuQixZQUFZO3dCQUNaLGNBQWM7d0JBQ2QsV0FBVzt3QkFDWCxpQkFBaUI7d0JBQ2pCLGtCQUFrQjs7cUJBRW5CO29CQUNELFNBQVMsRUFBRSxFQUFFO29CQUNiLFNBQVMsRUFBRSxFQUFFO2lCQUNkOzs7O0lBR0QseUJBQUM7Q0FBQTs7Ozs7OztJQzVDQTtRQUhTLFdBQU0sR0FBVyxLQUFLLENBQUM7UUFDdkIsbUJBQWMsR0FBa0IsSUFBSSxjQUFjLEVBQUUsQ0FBQztLQUc3RDs7Z0JBbkJELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsYUFBYTtvQkFDdkIsUUFBUSxFQUFFLHk4QkFLVjtvQkFDQSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7O2lCQUVaOzs7Ozt3QkFFQyxLQUFLO2lDQUNMLEtBQUs7aUNBQ0wsS0FBSzt5QkFDTCxLQUFLO2lDQUNMLEtBQUs7O0lBTVAsMEJBQUM7Q0FBQTs7Ozs7O0FDNUJEO0lBMkNFO0tBQWdCOztnQkE5QmpCLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osZUFBZTt3QkFDZixnQkFBZ0I7d0JBQ2hCLG1CQUFtQjt3QkFDbkIsZUFBZTs7d0JBRWYsaUJBQWlCO3dCQUNqQixjQUFjO3FCQUNmO29CQUNELE9BQU8sRUFBQzt3QkFDSixlQUFlO3dCQUNmLGdCQUFnQjt3QkFDaEIsbUJBQW1CO3dCQUNuQixlQUFlOzt3QkFFZixpQkFBaUI7d0JBQ2pCLGNBQWM7cUJBQ2pCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLG1CQUFtQjt3QkFDbkIsa0JBQWtCO3dCQUNsQixXQUFXO3dCQUNYLGlCQUFpQjtxQkFDbEI7b0JBQ0QsU0FBUyxFQUFFLEVBQUU7b0JBQ2IsU0FBUyxFQUFFLEVBQUU7aUJBQ2Q7Ozs7SUFHRCxtQkFBQztDQUFBOzs7Ozs7QUM1Q0Q7SUFzQkUsZ0NBQW9CLFVBQXFCO1FBQXJCLGVBQVUsR0FBVixVQUFVLENBQVc7UUFKekMsWUFBTyxHQUFRLEdBQUcsQ0FBQztRQUNYLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLFdBQU0sR0FBVyxLQUFLLENBQUM7S0FFZTs7OztJQUU5Qyx5Q0FBUTs7O0lBQVI7O1lBQ00sSUFBSSxHQUFHLElBQUk7UUFDZixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUM7WUFDZCxNQUFNLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDcEcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUzs7OztZQUFDLFVBQVUsQ0FBQztnQkFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUM5RSxFQUFDLENBQUM7U0FDSjtRQUVELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBQztZQUNkLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNwRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTOzs7O1lBQUMsVUFBVSxDQUFDO2dCQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDMUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQzlFLEVBQUMsQ0FBQztTQUNKOztZQUVHLEtBQUssR0FBRyxzQkFBc0I7O1lBQzlCLENBQUMsR0FBRyxNQUFNLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQzNELGVBQWUsRUFBRSxLQUFLO1lBQ3BCLEdBQUcsRUFBRSxDQUFDLEdBQUc7WUFDVCxHQUFHLEVBQUUsR0FBRztZQUNSLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTztZQUNuQixNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDcEIsT0FBTyxFQUFFLEtBQUs7WUFDZCxPQUFPLEVBQUUsS0FBSztZQUNkLE1BQU07Ozs7WUFBRSxVQUFVLEtBQUs7Z0JBQ3ZCLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtvQkFDdkIsWUFBWSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztpQkFDbkM7Z0JBRUQsSUFBSSxDQUFDLGNBQWMsR0FBRyxVQUFVOzs7Z0JBQUM7b0JBQy9CLElBQUksSUFBSSxDQUFDLE1BQU07d0JBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzVCLElBQUksSUFBSSxDQUFDLE1BQU07d0JBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzdCLEdBQUUsQ0FBQyxDQUFDLENBQUM7YUFDUCxDQUFBO1NBQ0YsQ0FBQzthQUNELEdBQUcsQ0FBQyxFQUFFLFFBQVEsRUFBRSxZQUFZLEdBQUcsS0FBSyxFQUFFLENBQUM7S0FDekM7Ozs7SUFFRCx5Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFDLElBQUksQ0FBQztLQUNsQjs7OztJQUVELDJDQUFVOzs7SUFBVjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxNQUFNLEdBQUMsS0FBSyxDQUFDO1FBQ2YsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUM7WUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUM3QixNQUFNLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDN0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDcEI7UUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBQztZQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzdCLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUM1RSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwQjtLQUNMOztnQkFoRkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLFFBQVEsRUFBRSwyVkFLTDtvQkFDTCxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7aUJBQ2I7Ozs7Z0JBYmlDLFVBQVU7Ozt5QkFlekMsS0FBSzt5QkFDTCxLQUFLOzZCQUNMLEtBQUs7O0lBc0VSLDZCQUFDO0NBQUE7Ozs7Ozs7SUNwQ3VDRixzQ0FBb0I7SUFRMUQsNEJBQW9CLFVBQXNCO1FBQTFDLFlBQ0UsaUJBQU8sU0FDUjtRQUZtQixnQkFBVSxHQUFWLFVBQVUsQ0FBWTtRQUhuQyxnQkFBVSxHQUFHLEtBQUssQ0FBQztRQUUxQixhQUFPLEdBQUcsR0FBRyxDQUFDOztLQUdiOzs7O0lBRUQsd0NBQVc7OztJQUFYO0tBQ0M7Ozs7SUFFRCw0Q0FBZTs7O0lBQWY7O1lBQ1EsSUFBSSxHQUFHLElBQUk7UUFDakIsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTs7Z0JBQ2xCLFNBQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWE7O2dCQUN4QyxjQUFjLEdBQUcsTUFBTSxDQUFDLFdBQVc7O2dCQUNuQyxhQUFhLEdBQUcsTUFBTSxDQUFDLFVBQVU7WUFFdkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxjQUFjLEdBQUcsRUFBRSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUFDO1lBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRW5ELFVBQVU7OztZQUFDOztvQkFFSCxDQUFDLEdBQUcsU0FBTyxDQUFDLFlBQVk7O29CQUN4QixDQUFDLEdBQUcsU0FBTyxDQUFDLFdBQVc7Z0JBQzdCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUU7b0JBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztpQkFDdkI7Z0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQU8sQ0FBQyxDQUFDO2dCQUNqRCxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDNUMsSUFBSSxDQUFDLFVBQVUsR0FBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQzlDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2FBQ3hCLEdBQUUsQ0FBQyxDQUFDLENBQUM7U0FDUDtLQUNGOzs7O0lBRUQscUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0tBQ3ZCOztnQkExRkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRSxtOUZBMEN3RztvQkFDbEgsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2lCQUNiOzs7O2dCQWxEbUIsVUFBVTs7OzhCQXlEM0IsU0FBUyxTQUFDLGFBQWE7O0lBc0MxQix5QkFBQztDQUFBLENBNUN1QyxvQkFBb0I7Ozs7Ozs7QUM1QzVEO0lBdUJxQ0EsbUNBQW9CO0lBQ3JEO2VBQ0ksaUJBQU87S0FDVjs7OztJQUVILGtDQUFROzs7SUFBUjtRQUNDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztLQUN0Qjs7Z0JBOUJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLHFqQkFpQlg7b0JBQ0MsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2lCQUNiOzs7O0lBVUQsc0JBQUM7Q0FBQSxDQVJvQyxvQkFBb0I7Ozs7Ozs7QUN2QnpEO0lBc0JzQ0Esb0NBQXFCO0lBQ3ZEO2VBQ0ksaUJBQU87S0FFVjs7OztJQUVILG1DQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztLQUN4Qjs7Z0JBOUJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUsODdCQWdCRztvQkFDYixNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7aUJBQ2I7Ozs7SUFjRCx1QkFBQztDQUFBLENBWnFDLHFCQUFxQjs7Ozs7OztBQ3RCM0Q7SUFpRHdDQSxzQ0FBdUI7SUFDM0Q7ZUFDSSxpQkFBTztLQUNWOzs7O0lBRUgscUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7S0FDMUI7O2dCQXhERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFLG83Q0EyQ0w7b0JBQ0wsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2lCQUNiOzs7O0lBVUQseUJBQUM7Q0FBQSxDQVJ1Qyx1QkFBdUI7Ozs7Ozs7SUM3QnBCQSx5Q0FBcUI7SUFFOUQsK0JBQW9CLFlBQW1DO1FBQXZELFlBQ00saUJBQU8sU0FPVjtRQVJpQixrQkFBWSxHQUFaLFlBQVksQ0FBdUI7O1lBRTdDLElBQUksR0FBRyxLQUFJO1FBQ2YsS0FBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsVUFBUyxPQUFPO1lBQzFDLElBQUksT0FBTyxFQUFDO2dCQUNWLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQzthQUN2RTtTQUNGLEVBQUMsQ0FBQTs7S0FDTDs7OztJQUVILHdDQUFROzs7SUFBUjtRQUVFLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztLQUV4Qjs7Z0JBckNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixRQUFRLEVBQUUsKzRCQWVHO29CQUNiLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztpQkFDYjs7OztnQkFwQlEscUJBQXFCOzs7a0NBdUIzQixTQUFTLFNBQUMsV0FBVzs7SUFnQnhCLDRCQUFDO0NBQUEsQ0FqQjBDLHFCQUFxQjs7Ozs7OztJQ0ZoQkEsOENBQXFCO0lBR25FO1FBQUEsWUFDTSxpQkFBTyxTQUNWO1FBSkgsYUFBTyxHQUFHLEtBQUssQ0FBQzs7S0FJYjs7OztJQUVILDZDQUFROzs7SUFBUjtRQUVFLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztLQUN4Qjs7OztJQUVELHlDQUFJOzs7SUFBSjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0tBQ3JCOzs7O0lBRUQsMENBQUs7OztJQUFMO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7S0FDdEI7O2dCQXRDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsUUFBUSxFQUFFLG9qQkFjQztvQkFDWCxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7aUJBQ2I7Ozs7SUFxQkQsaUNBQUM7Q0FBQSxDQW5CK0MscUJBQXFCOzs7Ozs7QUN6QnJFO0lBaUJBO0tBZ0NpQzs7Z0JBaENoQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLGFBQWE7d0JBQ2IsbUJBQW1CO3dCQUNuQixjQUFjO3dCQUNkLFlBQVk7d0JBQ1osaUJBQWlCO3dCQUNqQixnQkFBZ0I7d0JBQ2hCLGtCQUFrQjtxQkFFbkI7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLHVCQUF1Qjt3QkFDdkIsZUFBZTt3QkFDZixzQkFBc0I7d0JBQ3RCLGtCQUFrQjt3QkFDbEIsZUFBZTt3QkFDZixnQkFBZ0I7d0JBQ2hCLDBCQUEwQjt3QkFDMUIscUJBQXFCO3dCQUNyQixrQkFBa0I7cUJBQ25CO29CQUNELE9BQU8sRUFBRTt3QkFDUCx1QkFBdUI7d0JBQ3ZCLHNCQUFzQjt3QkFDdEIsa0JBQWtCO3dCQUNsQixnQkFBZ0I7d0JBQ2hCLDBCQUEwQjt3QkFDMUIscUJBQXFCO3dCQUNyQixrQkFBa0I7cUJBQ25CO2lCQUNGOztJQUMrQix1QkFBQztDQUFBOzs7Ozs7Ozs7Ozs7OzsifQ==

/***/ }),

/***/ "../../dist/ngx-kervi/fesm5/ngx-kervi.js":
/*!******************************************************************************************!*\
  !*** D:/tim privat/github/kervi/kervi-ui/kervi/ui/web/dist/ngx-kervi/fesm5/ngx-kervi.js ***!
  \******************************************************************************************/
/*! exports provided: ConnectionState, DashboardSizes, KerviTemplateService, KerviDashboardComponent, KerviDashboardPanelComponent, KerviControllerPadComponent, KerviWidgetComponent, KerviNumberComponent, KerviBooleanComponent, KerviActionComponent, KerviCameraComponent, KerviColorComponent, KerviDateTimeComponent, KerviStringComponent, KerviUserLogComponent, KerviDirectoryComponent, KerviAppHealthComponent, AppInjector, NGXKerviService, NgxKerviComponent, NgxKerviModule, NGXKerviPipesModule, ɵb, ɵa */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KerviAppHealthComponent", function() { return KerviAppHealthComponent; });
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
var KerviAppHealthComponent = /** @class */ (function () {
    function KerviAppHealthComponent() {
        this.linkParameters = null;
        this.inline = false;
        this.dashboardSizes = new kervi_js__WEBPACK_IMPORTED_MODULE_2__["DashboardSizes"]();
        this.mps = 0;
        this.pingDiff = 0;
        this.pingDelay = 0;
        this.kerviService = AppInjector.get(NGXKerviService);
    }
    /**
     * @protected
     * @return {?}
     */
    KerviAppHealthComponent.prototype.ngOnInitAppHealth = /**
     * @protected
     * @return {?}
     */
    function () {
        /** @type {?} */
        var self = this;
        this.kerviService.mps$.subscribe((/**
         * @param {?} mps
         * @return {?}
         */
        function (mps) {
            self.mps = mps;
        }));
        this.kerviService.appPingDiff$.subscribe((/**
         * @param {?} diff
         * @return {?}
         */
        function (diff) {
            self.pingDiff = diff;
        }));
        this.kerviService.appPingDelay$.subscribe((/**
         * @param {?} diff
         * @return {?}
         */
        function (diff) {
            self.pingDelay = diff;
        }));
    };
    KerviAppHealthComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    selector: 'kervi-app-health-base',
                    template: '',
                    styles: [],
                },] },
    ];
    /** @nocollapse */
    KerviAppHealthComponent.ctorParameters = function () { return []; };
    KerviAppHealthComponent.propDecorators = {
        linkParameters: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        dashboardSizes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        mps: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        pingDiff: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        pingDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return KerviAppHealthComponent;
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
                        KerviDirectoryComponent,
                        KerviAppHealthComponent
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
                        KerviActionComponent,
                        KerviAppHealthComponent
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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWtlcnZpLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gta2VydmkvbGliL25neC1rZXJ2aS5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gta2VydmkvbGliL25neC1rZXJ2aS10ZW1wbGF0ZS5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gta2VydmkvbGliL2FwcC1pbmplY3Rvci5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gta2VydmkvbGliL2Rhc2hib2FyZC9rZXJ2aS1kYXNoYm9hcmQuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gta2VydmkvbGliL2Rhc2hib2FyZC9rZXJ2aS1kYXNoYm9hcmQtcGFuZWwuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gta2VydmkvbGliL2Rhc2hib2FyZC9rZXJ2aS1jb250cm9sbGVyLXBhZC5jb21wb25lbnQudHMiLCJuZzovL25neC1rZXJ2aS9saWIvZGFzaGJvYXJkL2tlcnZpLXdpZGdldC5jb21wb25lbnQudHMiLCJuZzovL25neC1rZXJ2aS9saWIvdmFsdWVzL3ZhbHVlLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWtlcnZpL2xpYi92YWx1ZXMva2VydmktbnVtYmVyLXZhbHVlLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWtlcnZpL2xpYi92YWx1ZXMva2VydmktYm9vbGVhbi12YWx1ZS5jb21wb25lbnQudHMiLCJuZzovL25neC1rZXJ2aS9saWIvYWN0aW9ucy9rZXJ2aS1hY3Rpb24uY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gta2VydmkvbGliL2NhbWVyYS9rZXJ2aS1jYW1lcmEuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gta2VydmkvbGliL3ZhbHVlcy9rZXJ2aS1jb2xvci12YWx1ZS5jb21wb25lbnQudHMiLCJuZzovL25neC1rZXJ2aS9saWIvdmFsdWVzL2tlcnZpLWRhdGV0aW1lLXZhbHVlLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWtlcnZpL2xpYi92YWx1ZXMva2Vydmktc3RyaW5nLXZhbHVlLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWtlcnZpL2xpYi91c2VyLWxvZy91c2VyLWxvZy5jb21wb25lbnQudHMiLCJuZzovL25neC1rZXJ2aS9saWIvZmlsZXMva2VydmktZGlyZWN0b3J5LmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWtlcnZpL2xpYi9kYXNoYm9hcmQvYXBwLWhlYWx0aC5jb21wb25lbnQudHMiLCJuZzovL25neC1rZXJ2aS9saWIvbmd4LWtlcnZpLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWtlcnZpL2xpYi9uZ3gta2VydmkubW9kdWxlLnRzIiwibmc6Ly9uZ3gta2VydmkvbGliL3BpcGVzL3RleHRQaXBlLnRzIiwibmc6Ly9uZ3gta2VydmkvbGliL3BpcGVzL3BpcGVzLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEtlcnZpQmFzZVNlcnZpY2UgfSBmcm9tIFwia2VydmktanNcIlxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTkdYS2VydmlTZXJ2aWNlIGV4dGVuZHMgS2VydmlCYXNlU2VydmljZXtcclxuXHJcbn0iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBLZXJ2aVRlbXBsYXRlU2VydmljZSB7XHJcblxyXG4gICAgcHJpdmF0ZSByZW1Vbml0Om51bWJlcj0yMDtcclxuICAgIGNvbnN0cnVjdG9yKCkgXHJcbiAgeyBcclxuICAgIGNvbnNvbGUubG9nKFwia2Vydmkgc2VydmljZSBjb25zdHJ1Y3RvclwiKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiY3RlbXBsYXRlXCIpO1xyXG4gICAgICAgIHRoaXMucmVtVW5pdCA9IHBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmZvbnRTaXplKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgY29udmVydFJlbVRvUGl4ZWxzKHJlbSkgeyAgICBcclxuICAgICAgICByZXR1cm4gcmVtICogdGhpcy5yZW1Vbml0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRTaXplVmFsdWUodmFsdWUpe1xyXG4gICAgICAgIGlmICh2YWx1ZT09bnVsbClcclxuICAgICAgICAgICAgcmV0dXJuIFwiMTAwJVwiXHJcbiAgICAgICAgZWxzZSBpZiAodmFsdWU9PT1cIlwiKVxyXG4gICAgICAgICAgICByZXR1cm4gXCIxMDAlXCJcclxuICAgICAgICBlbHNlIGlmIChpc05hTih2YWx1ZSkpe1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIGlmICh2YWx1ZT4wKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlICsgXCIlXCI7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIjEwMCVcIjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgIGdldFBpeGVscyh2YWx1ZSwgY29udGFpbmVyU2l6ZSl7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImdwc1wiLCB2YWx1ZSwgaXNOYU4odmFsdWUpKTtcclxuICAgICAgICBpZiAoaXNOYU4odmFsdWUpKXtcclxuICAgICAgICAgIGlmICh2YWx1ZS5sYXN0SW5kZXhPZihcInB4XCIpPi0xKXtcclxuICAgICAgICAgICAgdmFyIHB4ID0gcGFyc2VGbG9hdCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBweDtcclxuICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUubGFzdEluZGV4T2YoXCJyZW1cIik+LTEpe1xyXG4gICAgICAgICAgICB2YXIgcmVtID0gcGFyc2VGbG9hdCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIHZhciBweCA9IHRoaXMuY29udmVydFJlbVRvUGl4ZWxzKHJlbSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVteFwiLHJlbSwgcHgpO1xyXG4gICAgICAgICAgICByZXR1cm4gcHg7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLmxhc3RJbmRleE9mKFwiJVwiKT4tMSl7XHJcbiAgICAgICAgICAgIHZhciBwZXJjZW50YWdlID0gcGFyc2VGbG9hdCh2YWx1ZSkvMTAwLjA7XHJcbiAgICAgICAgICAgIHJldHVybiBjb250YWluZXJTaXplICogcGVyY2VudGFnZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgXHJcbiAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFN0eWxlUnVsZVZhbHVlKHN0eWxlLCBzZWxlY3Rvciwgc2hlZXQpIHtcclxuICAgICAgICB2YXIgc2hlZXRzID0gc2hlZXQhPW51bGwgPyBbc2hlZXRdIDogZG9jdW1lbnQuc3R5bGVTaGVldHM7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBzaGVldHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgc2hlZXQgPSBzaGVldHNbaV07XHJcbiAgICAgICAgICAgIGlmKCAhc2hlZXQuY3NzUnVsZXMgKSB7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwLCBrID0gc2hlZXQuY3NzUnVsZXMubGVuZ3RoOyBqIDwgazsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcnVsZSA9IHNoZWV0LmNzc1J1bGVzW2pdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJ1bGUuc2VsZWN0b3JUZXh0ICYmIHJ1bGUuc2VsZWN0b3JUZXh0LnNwbGl0KCcsJykuaW5kZXhPZihzZWxlY3RvcikgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJ1bGUuc3R5bGVbc3R5bGVdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtYWtlSWQoKVxyXG4gICAge1xyXG4gICAgICAgIHZhciB0ZXh0ID0gXCJcIjtcclxuICAgICAgICB2YXIgcG9zc2libGUgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5XCI7XHJcblxyXG4gICAgICAgIGZvciggdmFyIGk9MDsgaSA8IDU7IGkrKyApXHJcbiAgICAgICAgICAgIHRleHQgKz0gcG9zc2libGUuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvc3NpYmxlLmxlbmd0aCkpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q29sb3IoY29sb3JOYW1lOnN0cmluZyxjc3NDbGFzczpzdHJpbmcpe1xyXG4gICAgICAgIHZhciBzdHlsZVZhbHVlPXRoaXMuZ2V0U3R5bGVSdWxlVmFsdWUoY29sb3JOYW1lLGNzc0NsYXNzLG51bGwpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJzdlwiLCBjc3NDbGFzcyxzdHlsZVZhbHVlKTtcclxuICAgICAgICByZXR1cm4gc3R5bGVWYWx1ZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmV4cG9ydCBsZXQgQXBwSW5qZWN0b3I6IEluamVjdG9yO1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0QXBwSW5qZWN0b3IoaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcbiAgICBpZiAoQXBwSW5qZWN0b3IpIHtcclxuICAgICAgICAvLyBTaG91bGQgbm90IGhhcHBlblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1Byb2dyYW1taW5nIGVycm9yOiBBcHBJbmplY3RvciB3YXMgYWxyZWFkeSBzZXQnKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIEFwcEluamVjdG9yID0gaW5qZWN0b3I7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERhc2hib2FyZCwgRGFzaGJvYXJkU2l6ZXMsIE51bWJlclZhbHVlIH0gZnJvbSAna2VydmktanMnO1xyXG5pbXBvcnQgeyBOR1hLZXJ2aVNlcnZpY2UgfSBmcm9tICcuLi9uZ3gta2Vydmkuc2VydmljZSc7XHJcbmltcG9ydCB7IEFwcEluamVjdG9yIH0gZnJvbSAnLi4vYXBwLWluamVjdG9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdrZXJ2aS1kYXNoYm9hcmQnLFxyXG4gIHRlbXBsYXRlOiAnJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgS2VydmlEYXNoYm9hcmRDb21wb25lbnQge1xyXG4gIHByb3RlY3RlZCBkYXNoYm9hcmRJZDogc3RyaW5nID0gbnVsbDtcclxuICBwcm90ZWN0ZWQgZGFzaGJvYXJkOiBEYXNoYm9hcmQgPSBudWxsO1xyXG4gIHByb3RlY3RlZCBrZXJ2aVNlcnZpY2U6IE5HWEtlcnZpU2VydmljZTtcclxuICBwcm90ZWN0ZWQgZGFzaGJvYXJkczogRGFzaGJvYXJkW10gPSBudWxsO1xyXG4gIHByb3RlY3RlZCBkYXNoYm9hcmRTaXplczogRGFzaGJvYXJkU2l6ZXMgPSBudWxsO1xyXG4gIHByb3RlY3RlZCBpc0FwcEVtcHR5ID0gdHJ1ZTtcclxuICBwcm90ZWN0ZWQgc2hvd01lbnUgPSBmYWxzZTtcclxuICBwcm90ZWN0ZWQgZGFzaGJvYXJkUGFuZWxzSGlkZGVuID0gZmFsc2U7XHJcbiAgcHJvdGVjdGVkIHNob3dQYW5lbENvbnRyb2xsZXIgPSBmYWxzZTtcclxuICBASW5wdXQoKSBwcm90ZWN0ZWQgY2FtZXJhSWQ6IHN0cmluZyA9IG51bGw7XHJcbiAgQElucHV0KCkgcHJvdGVjdGVkIGNhbWVyYVBhcmFtZXRlcnM6IGFueSA9IG51bGw7XHJcbiAgcHJvdGVjdGVkIGNhbWVyYUlkJDogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4obnVsbCk7XHJcbiAgcHVibGljIGF1dGhlbnRpY2F0ZWQ6IEJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIGFub255bW91czogQm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIHByb3RlY3RlZCBzaG93TGVmdFBhZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByb3RlY3RlZCBsZWZ0UGFkWFZhbHVlOiBOdW1iZXJWYWx1ZSA9IG51bGw7XHJcbiAgcHJvdGVjdGVkIGxlZnRQYWRZVmFsdWU6IE51bWJlclZhbHVlID0gbnVsbDtcclxuICBwcm90ZWN0ZWQgYXV0b0NlbnRlckxlZnRQYWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHJvdGVjdGVkIHNob3dSaWdodFBhZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByb3RlY3RlZCByaWdodFBhZFhWYWx1ZTogTnVtYmVyVmFsdWUgPSBudWxsO1xyXG4gIHByb3RlY3RlZCByaWdodFBhZFlWYWx1ZTogTnVtYmVyVmFsdWUgPSBudWxsO1xyXG4gIHByb3RlY3RlZCBhdXRvQ2VudGVyUmlnaHRQYWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHJpdmF0ZSBpbkZ1bGxTY3JlZW46IGJvb2xlYW4gPSBmYWxzZTtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMua2VydmlTZXJ2aWNlID0gQXBwSW5qZWN0b3IuZ2V0KE5HWEtlcnZpU2VydmljZSk7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICB0aGlzLmtlcnZpU2VydmljZS5jb21wb25lbnRzQ2hhbmdlZCQuc3Vic2NyaWJlKGZ1bmN0aW9uKCkge1xyXG4gICAgICBzZWxmLmxvYWREYXNoYm9hcmQoc2VsZi5kYXNoYm9hcmRJZCk7XHJcbiAgICB9KTtcclxuICAgfVxyXG5cclxuICBwcm90ZWN0ZWQgbG9nb2ZmKGV2ZW50KXtcclxuICAgIHRoaXMua2VydmlTZXJ2aWNlLmxvZ29mZigpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgbG9hZERhc2hib2FyZChkYXNoYm9hcmRJZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmRhc2hib2FyZElkID0gZGFzaGJvYXJkSWQ7XHJcbiAgICB0aGlzLmRhc2hib2FyZCA9IHRoaXMua2VydmlTZXJ2aWNlLmdldENvbXBvbmVudChkYXNoYm9hcmRJZCwgJ2Rhc2hib2FyZCcpIGFzIERhc2hib2FyZDtcclxuICAgIHRoaXMuYW5vbnltb3VzID0gdGhpcy5rZXJ2aVNlcnZpY2UuaXNBbm9ueW1vdXMoKTtcclxuICAgIHRoaXMuaXNBcHBFbXB0eSA9IHRoaXMua2VydmlTZXJ2aWNlLmlzQXBwRW1wdHkoKTtcclxuICAgIHRoaXMuYXV0aGVudGljYXRlZCA9IHRoaXMua2VydmlTZXJ2aWNlLmRvQXV0aGVudGljYXRlO1xyXG4gICAgaWYgKHRoaXMuZGFzaGJvYXJkKXtcclxuICAgICAgdGhpcy5kYXNoYm9hcmRzID0gdGhpcy5rZXJ2aVNlcnZpY2UuZ2V0Q29tcG9uZW50c0J5VHlwZSgnZGFzaGJvYXJkJyk7XHJcbiAgICAgIHRoaXMuc2hvd01lbnUgPSAodGhpcy5kYXNoYm9hcmRzLmxlbmd0aCA+IDEgfHwgdGhpcy5rZXJ2aVNlcnZpY2UuZG9BdXRoZW50aWNhdGUpO1xyXG4gICAgICB0aGlzLnNob3dQYW5lbENvbnRyb2xsZXI9ZmFsc2U7XHJcbiAgICAgIHRoaXMuY2FtZXJhSWQgPSBudWxsO1xyXG4gICAgICB0aGlzLmNhbWVyYVBhcmFtZXRlcnMgPSBudWxsO1xyXG4gICAgICB0aGlzLnNob3dMZWZ0UGFkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2hvd1JpZ2h0UGFkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuZGFzaGJvYXJkUGFuZWxzSGlkZGVuPWZhbHNlO1xyXG4gICAgICBpZiAodGhpcy5kYXNoYm9hcmQuYmFja2dyb3VuZFBhbmVsKXtcclxuICAgICAgICBpZiAodGhpcy5kYXNoYm9hcmQuYmFja2dyb3VuZFBhbmVsLmNvbXBvbmVudHMubGVuZ3RoID4gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aGlzLmRhc2hib2FyZFBhbmVsc0hpZGRlbj10cnVlO1xyXG4gICAgICAgICAgdGhpcy5zaG93UGFuZWxDb250cm9sbGVyPXRydWU7XHJcbiAgICAgICAgICB0aGlzLmNhbWVyYUlkPXRoaXMuZGFzaGJvYXJkLmJhY2tncm91bmRQYW5lbC5jb21wb25lbnRzWzBdLmNvbXBvbmVudC5pZDtcclxuICAgICAgICAgIHRoaXMuY2FtZXJhSWQkLm5leHQodGhpcy5jYW1lcmFJZCk7XHJcbiAgICAgICAgICB0aGlzLmNhbWVyYVBhcmFtZXRlcnM9dGhpcy5kYXNoYm9hcmQuYmFja2dyb3VuZFBhbmVsLmNvbXBvbmVudHNbMF0ucGFyYW1ldGVycztcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGIgc2V0IGNhbVwiLCB0aGlzLmNhbWVyYUlkLCB0aGlzLmNhbWVyYVBhcmFtZXRlcnMpO1xyXG4gICAgICAgIH0gXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuZGFzaGJvYXJkLkxlZnRQYWRYUGFuZWwgJiYgdGhpcy5kYXNoYm9hcmQuTGVmdFBhZFhQYW5lbC5jb21wb25lbnRzLmxlbmd0aCB8fCB0aGlzLmRhc2hib2FyZC5MZWZ0UGFkWVBhbmVsICYmIHRoaXMuZGFzaGJvYXJkLkxlZnRQYWRZUGFuZWwuY29tcG9uZW50cy5sZW5ndGgpe1xyXG4gICAgICAgIHRoaXMuc2hvd0xlZnRQYWQgPSB0cnVlO1xyXG4gICAgICAgIGlmICh0aGlzLmRhc2hib2FyZC5MZWZ0UGFkWFBhbmVsLmNvbXBvbmVudHMubGVuZ3RoKXtcclxuICAgICAgICAgIHRoaXMubGVmdFBhZFhWYWx1ZT10aGlzLmRhc2hib2FyZC5MZWZ0UGFkWFBhbmVsLmNvbXBvbmVudHNbMF0uY29tcG9uZW50IGFzIE51bWJlclZhbHVlO1xyXG4gICAgICAgICAgaWYgKHRoaXMuZGFzaGJvYXJkLkxlZnRQYWRYUGFuZWwuY29tcG9uZW50c1swXS5wYXJhbWV0ZXJzLnBhZEF1dG9DZW50ZXIpXHJcbiAgICAgICAgICAgIHRoaXMuYXV0b0NlbnRlckxlZnRQYWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5kYXNoYm9hcmQuTGVmdFBhZFlQYW5lbC5jb21wb25lbnRzLmxlbmd0aCl7XHJcbiAgICAgICAgICB0aGlzLmxlZnRQYWRZVmFsdWU9dGhpcy5kYXNoYm9hcmQuTGVmdFBhZFlQYW5lbC5jb21wb25lbnRzWzBdLmNvbXBvbmVudCBhcyBOdW1iZXJWYWx1ZTtcclxuICAgICAgICAgIGlmICh0aGlzLmRhc2hib2FyZC5MZWZ0UGFkWFBhbmVsLmNvbXBvbmVudHNbMF0ucGFyYW1ldGVycy5wYWRBdXRvQ2VudGVyKVxyXG4gICAgICAgICAgICB0aGlzLmF1dG9DZW50ZXJMZWZ0UGFkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLmRhc2hib2FyZC5SaWdodFBhZFhQYW5lbCAmJiB0aGlzLmRhc2hib2FyZC5SaWdodFBhZFhQYW5lbC5jb21wb25lbnRzLmxlbmd0aCB8fCB0aGlzLmRhc2hib2FyZC5SaWdodFBhZFlQYW5lbCAmJiB0aGlzLmRhc2hib2FyZC5SaWdodFBhZFlQYW5lbC5jb21wb25lbnRzLmxlbmd0aCl7XHJcbiAgICAgICAgdGhpcy5zaG93UmlnaHRQYWQgPSB0cnVlO1xyXG4gICAgICAgIGlmICh0aGlzLmRhc2hib2FyZC5SaWdodFBhZFhQYW5lbC5jb21wb25lbnRzLmxlbmd0aCl7XHJcbiAgICAgICAgICB0aGlzLnJpZ2h0UGFkWFZhbHVlPXRoaXMuZGFzaGJvYXJkLlJpZ2h0UGFkWFBhbmVsLmNvbXBvbmVudHNbMF0uY29tcG9uZW50IGFzIE51bWJlclZhbHVlO1xyXG4gICAgICAgICAgaWYgKHRoaXMuZGFzaGJvYXJkLkxlZnRQYWRYUGFuZWwuY29tcG9uZW50c1swXS5wYXJhbWV0ZXJzLnBhZEF1dG9DZW50ZXIpXHJcbiAgICAgICAgICAgIHRoaXMuYXV0b0NlbnRlclJpZ2h0UGFkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZGFzaGJvYXJkLlJpZ2h0UGFkWVBhbmVsLmNvbXBvbmVudHMubGVuZ3RoKXtcclxuICAgICAgICAgIHRoaXMucmlnaHRQYWRZVmFsdWU9dGhpcy5kYXNoYm9hcmQuUmlnaHRQYWRZUGFuZWwuY29tcG9uZW50c1swXS5jb21wb25lbnQgYXMgTnVtYmVyVmFsdWU7XHJcbiAgICAgICAgICBpZiAodGhpcy5kYXNoYm9hcmQuUmlnaHRQYWRYUGFuZWwuY29tcG9uZW50c1swXS5wYXJhbWV0ZXJzLnBhZEF1dG9DZW50ZXIpXHJcbiAgICAgICAgICAgIHRoaXMuYXV0b0NlbnRlclJpZ2h0UGFkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coXCJsb2FkIGRiXCIsIGRhc2hib2FyZElkLCB0aGlzLmRhc2hib2FyZCwgdGhpcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2dnbGVGdWxsU2NyZWVuKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJmc1wiLCB0aGlzLmluRnVsbFNjcmVlbik7XHJcbiAgICB2YXIgZG9jOmFueTtcclxuICAgIGRvYyA9IGRvY3VtZW50O1xyXG4gICAgaWYgKChkb2MuZnVsbFNjcmVlbkVsZW1lbnQgJiYgZG9jLmZ1bGxTY3JlZW5FbGVtZW50ICE9PSBudWxsKSkgICAgIFxyXG4gICAgIC8qKCFkb2MubW96RnVsbFNjcmVlbiAmJiAhZG9jdW1lbnQud2Via2l0SXNGdWxsU2NyZWVuKSkqLyB7XHJcbiAgICAgICB0aGlzLmluRnVsbFNjcmVlbiA9IHRydWU7XHJcbiAgICAgIGlmIChkb2MuZG9jdW1lbnRFbGVtZW50LnJlcXVlc3RGdWxsU2NyZWVuKSB7ICBcclxuICAgICAgICBkb2MuZG9jdW1lbnRFbGVtZW50LnJlcXVlc3RGdWxsU2NyZWVuKCk7ICBcclxuICAgICAgfSBlbHNlIGlmIChkb2MuZG9jdW1lbnRFbGVtZW50Lm1velJlcXVlc3RGdWxsU2NyZWVuKSB7ICBcclxuICAgICAgICBkb2MuZG9jdW1lbnRFbGVtZW50Lm1velJlcXVlc3RGdWxsU2NyZWVuKCk7ICBcclxuICAgICAgfS8vIH0gZWxzZSBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LndlYmtpdFJlcXVlc3RGdWxsU2NyZWVuKSB7ICBcclxuICAgICAgLy8gICBkb2MuZG9jdW1lbnRFbGVtZW50LndlYmtpdFJlcXVlc3RGdWxsU2NyZWVuKCk7ICBcclxuICAgICAgLy8gfSAgXHJcbiAgICB9IGVsc2UgeyAgXHJcbiAgICAgIHRoaXMuaW5GdWxsU2NyZWVuPWZhbHNlO1xyXG4gICAgICBpZiAoZG9jLmNhbmNlbEZ1bGxTY3JlZW4pIHsgIFxyXG4gICAgICAgIGRvYy5jYW5jZWxGdWxsU2NyZWVuKCk7ICBcclxuICAgICAgfSBlbHNlIGlmIChkb2MubW96Q2FuY2VsRnVsbFNjcmVlbikgeyAgXHJcbiAgICAgICAgZG9jLm1vekNhbmNlbEZ1bGxTY3JlZW4oKTsgIFxyXG4gICAgICB9Ly8gfSBlbHNlIGlmIChkb2N1bWVudC53ZWJraXRDYW5jZWxGdWxsU2NyZWVuKSB7ICBcclxuICAgICAgLy8gICBkb2Mud2Via2l0Q2FuY2VsRnVsbFNjcmVlbigpOyAgXHJcbiAgICAgIC8vIH0gIFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERhc2hib2FyZFNpemVzLCBEYXNoYm9hcmRQYW5lbCB9IGZyb20gJ2tlcnZpLWpzJztcclxuaW1wb3J0IHsgTkdYS2VydmlTZXJ2aWNlIH0gZnJvbSAnLi4vbmd4LWtlcnZpLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBLZXJ2aVRlbXBsYXRlU2VydmljZSB9IGZyb20gJy4uL25neC1rZXJ2aS10ZW1wbGF0ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBwSW5qZWN0b3IgfSBmcm9tICcuLi9hcHAtaW5qZWN0b3Iuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2tlcnZpLWRhc2hib2FyZC1wYW5lbC1iYXNlJyxcclxuICB0ZW1wbGF0ZTogJydcclxufSlcclxuZXhwb3J0IGNsYXNzIEtlcnZpRGFzaGJvYXJkUGFuZWxDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGRhc2hib2FyZFNpemVzOiBEYXNoYm9hcmRTaXplcztcclxuICBASW5wdXQoKSBwYW5lbDpEYXNoYm9hcmRQYW5lbD1udWxsO1xyXG4gIEBJbnB1dCgpIGlubGluZTpib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaW5Hcm91cDpib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgYm9keU9ubHk6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gIFxyXG4gIFxyXG4gIHB1YmxpYyB3aWR0aDpzdHJpbmcgPSBcIlwiO1xyXG4gIHB1YmxpYyBzaG93SGVhZGVyOmJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgZXhwYW5kZWQ6Ym9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyB0aXRsZTpzdHJpbmcgPSBudWxsO1xyXG4gIHB1YmxpYyBib2R5Q29tcG9uZW50czphbnlbXT1bXTtcclxuICBwdWJsaWMgaGVhZGVyQ29tcG9uZW50czogYW55W10gPSBbXTtcclxuICBwdWJsaWMgZm9vdGVyQ29tcG9uZW50czogYW55W10gPSBbXTtcclxuICAvL21lc3NhZ2VzOiBEYXNoYm9hcmRNZXNzYWdlTW9kZWxbXSA9IFtdO1xyXG4gIFxyXG4gIC8vcGFuZWxDb21wb25lbnRzOklDb21wb25lbnRbXSA9IFtdXHJcbiAgcHJvdGVjdGVkIHRlbXBsYXRlU2VydmljZTogS2VydmlUZW1wbGF0ZVNlcnZpY2UgPSBudWxsO1xyXG4gIHByb3RlY3RlZCBrZXJ2aVNlcnZpY2U6TkdYS2VydmlTZXJ2aWNlID0gbnVsbDtcclxuICBjb25zdHJ1Y3RvciAoKXtcclxuICAgIHRoaXMudGVtcGxhdGVTZXJ2aWNlID0gQXBwSW5qZWN0b3IuZ2V0KEtlcnZpVGVtcGxhdGVTZXJ2aWNlKTsgICAgXHJcbiAgICB0aGlzLmtlcnZpU2VydmljZSA9IEFwcEluamVjdG9yLmdldChOR1hLZXJ2aVNlcnZpY2UpOyAgXHJcbiAgfVxyXG5cclxuICAgIGNhbGNXaWR0aChwYW5lbDpEYXNoYm9hcmRQYW5lbCwgaW5Hcm91cCl7XHJcbiAgICAgICAgaWYgKHBhbmVsLnR5cGU9PVwiZ3JvdXBcIil7XHJcbiAgICAgICAgICAgIGlmIChwYW5lbC5wYXJhbWV0ZXJzLndpZHRoPT1udWxsIHx8IHBhbmVsLnBhcmFtZXRlcnMud2lkdGg9PVwiMFwiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiMTAwJVwiXHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRlbXBsYXRlU2VydmljZS5nZXRTaXplVmFsdWUocGFuZWwucGFyYW1ldGVycy53aWR0aCk7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBpbkdyb3VwID8gXCJcIiA6IHRoaXMudGVtcGxhdGVTZXJ2aWNlLmdldFNpemVWYWx1ZShwYW5lbC5wYXJhbWV0ZXJzLndpZHRoKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93UGFuZWxIZWFkZXIocGFuZWw6RGFzaGJvYXJkUGFuZWwpe1xyXG4gICAgICAgIHZhciBoYXNIZWFkZXJDb21wb25lbnRzID0gZmFsc2VcclxuICAgICAgICBmb3IoIGxldCBjb21wb25lbnQgb2YgdGhpcy5wYW5lbC5jb21wb25lbnRzKXtcclxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5wYXJhbWV0ZXJzLmxpbmtUb0hlYWRlcilcclxuICAgICAgICAgICAgICAgIGhhc0hlYWRlckNvbXBvbmVudHMgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiAocGFuZWwucGFyYW1ldGVycy50aXRsZSAhPSBudWxsICYmIHBhbmVsLnBhcmFtZXRlcnMudGl0bGUubGVuZ3RoPjApIHx8IGhhc0hlYWRlckNvbXBvbmVudHNcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdFBhbmVsKCkge1xyXG4gICAgICAgIHZhciBzZWxmPXRoaXM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRoaXMucGFuZWwucGFyYW1ldGVycy50aXRsZTtcclxuICAgICAgICBcclxuICAgICAgICBmb3IoIGxldCBjb21wb25lbnQgb2YgdGhpcy5wYW5lbC5jb21wb25lbnRzKXtcclxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5wYXJhbWV0ZXJzLmxpbmtUb0hlYWRlcilcclxuICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVyQ29tcG9uZW50cy5wdXNoKGNvbXBvbmVudClcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ib2R5Q29tcG9uZW50cy5wdXNoKGNvbXBvbmVudClcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zaG93SGVhZGVyID0gKHRoaXMucGFuZWwucGFyYW1ldGVycy50aXRsZSAhPSBudWxsICYmIHRoaXMucGFuZWwucGFyYW1ldGVycy50aXRsZS5sZW5ndGg+MCkgfHwgKHRoaXMuaGVhZGVyQ29tcG9uZW50cy5sZW5ndGggPiAwKVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBpZiAodGhpcy5wYW5lbC50eXBlPT1cImdyb3VwXCIpe1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wYW5lbC5wYXJhbWV0ZXJzLndpZHRoPT1udWxsIHx8IHRoaXMucGFuZWwucGFyYW1ldGVycy53aWR0aD09XCIwXCIgfHwgdGhpcy5wYW5lbC5wYXJhbWV0ZXJzLndpZHRoPT1cIlwiKVxyXG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IFwiMTAwJVwiXHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSB0aGlzLnRlbXBsYXRlU2VydmljZS5nZXRTaXplVmFsdWUodGhpcy5wYW5lbC5wYXJhbWV0ZXJzLndpZHRoKTtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgLy90aGlzLndpZHRoID0gdGhpcy5pbkdyb3VwID8gXCIxMDAlXCIgOiB0aGlzLnRlbXBsYXRlU2VydmljZS5nZXRTaXplVmFsdWUodGhpcy5wYW5lbC5wYXJhbWV0ZXJzLndpZHRoKTtcclxuICAgICAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMudGVtcGxhdGVTZXJ2aWNlLmdldFNpemVWYWx1ZSh0aGlzLnBhbmVsLnBhcmFtZXRlcnMud2lkdGgpO1xyXG4gICAgfVxyXG4gIH0iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGFzaGJvYXJkU2l6ZXMgfSBmcm9tICdrZXJ2aS1qcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2tlcnZpLWNvbnRyb2xsZXItcGFkLWJhc2UnLFxyXG4gIHRlbXBsYXRlOiAnJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgS2VydmlDb250cm9sbGVyUGFkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBkYXNoYm9hcmRTaXplczogRGFzaGJvYXJkU2l6ZXM7XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIFRpbSBXZW50emxhdVxyXG4vLyBMaWNlbnNlZCB1bmRlciBNSVRcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSUNvbXBvbmVudCwgRGFzaGJvYXJkUGFuZWwsIERhc2hib2FyZFNpemVzLCBDb250cm9sbGVyIH0gZnJvbSAna2VydmktanMnO1xyXG5pbXBvcnQgeyBOR1hLZXJ2aVNlcnZpY2UgfSBmcm9tICcuLi9uZ3gta2Vydmkuc2VydmljZSc7XHJcbmltcG9ydCB7IEFwcEluamVjdG9yIH0gZnJvbSAnLi4vYXBwLWluamVjdG9yLnNlcnZpY2UnO1xyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2tlcnZpLXdpZGdldC1iYXNlJyxcclxuXHR0ZW1wbGF0ZTogJydcclxufSlcclxuZXhwb3J0IGNsYXNzIEtlcnZpV2lkZ2V0Q29tcG9uZW50ICAge1xyXG5cdEBJbnB1dCgpIHNldCBjb21wb25lbnRJZCh2OnN0cmluZyl7XHJcblx0XHR0aGlzLmNvbXBvbmVudCA9IHRoaXMua2VydmlTZXJ2aWNlLmdldENvbXBvbmVudCh0aGlzLmNvbXBvbmVudElkKTtcclxuXHR9XHJcblx0QElucHV0KCkgY29tcG9uZW50OklDb21wb25lbnQgPSBudWxsO1xyXG5cdEBJbnB1dCgpIGRhc2hib2FyZFBhbmVsOiBEYXNoYm9hcmRQYW5lbDtcclxuXHRASW5wdXQoKSBsaW5rUGFyYW1ldGVyczphbnk7XHJcblx0QElucHV0KCkgZGFzaGJvYXJkU2l6ZXM6RGFzaGJvYXJkU2l6ZXMgPSBuZXcgRGFzaGJvYXJkU2l6ZXMoKTtcclxuICAgIEBJbnB1dCgpIGlubGluZTpib29sZWFuO1xyXG5cdHB1YmxpYyB3aWRnZXRUeXBlOnN0cmluZz1cInZhbHVlXCI7XHJcblx0XHJcblx0XHJcblx0cHJpdmF0ZSBrZXJ2aVNlcnZpY2U6IE5HWEtlcnZpU2VydmljZTtcclxuXHRwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XHJcblx0Y29uc3RydWN0b3IoKSB7IFxyXG5cdFx0Ly9jb25zb2xlLmxvZyhcImNuaW9cIix0aGlzKTtcclxuXHRcdHRoaXMua2VydmlTZXJ2aWNlID0gQXBwSW5qZWN0b3IuZ2V0KE5HWEtlcnZpU2VydmljZSk7ICBcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0V2lkZ2V0KCkge1xyXG5cdFx0XHRcclxuXHRcdGlmICghdGhpcy5saW5rUGFyYW1ldGVycylcclxuICAgICAgICAgICAgICB0aGlzLmxpbmtQYXJhbWV0ZXJzID0gdGhpcy5jb21wb25lbnQudWk7XHJcbiAgICBcclxuICAgICAgICBpZiAoIXRoaXMuaW5saW5lICYmIHRoaXMubGlua1BhcmFtZXRlcnMuaW5saW5lKXtcclxuICAgICAgICAgICAgdGhpcy5pbmxpbmUgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Ly9jb25zb2xlLmxvZyhcIndpZGdldFwiLCB0aGlzLmNvbXBvbmVudCwgdGhpcy5saW5rUGFyYW1ldGVycyk7XHJcblx0XHRpZiAodGhpcy5jb21wb25lbnQuY29tcG9uZW50VHlwZSA9PSBcImNvbnRyb2xsZXJcIil7XHJcblx0XHRcdHZhciBjb250cm9sbGVyID0gdGhpcy5jb21wb25lbnQgYXMgQ29udHJvbGxlcjtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJ3aWRnZXQgY3RybFwiLCBjb250cm9sbGVyKTtcclxuXHRcdFx0aWYgKGNvbnRyb2xsZXIudHlwZSA9PSBcImNhbWVyYVwiKVxyXG5cdFx0XHRcdHRoaXMud2lkZ2V0VHlwZSA9IFwiY2FtZXJhXCJcclxuXHRcdFx0XHRcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5saW5rUGFyYW1ldGVycy50eXBlKXtcclxuXHRcdFx0aWYgKHRoaXMubGlua1BhcmFtZXRlcnMudHlwZS5pbmRleE9mKFwiZ2F1Z2VcIikgPiAtMSApe1xyXG5cdFx0XHRcdHRoaXMud2lkZ2V0VHlwZSA9IFwiZ2F1Z2VcIjtcclxuXHJcblx0XHRcdH0gZWxzZSBpZiAodGhpcy5saW5rUGFyYW1ldGVycy50eXBlPT1cImNoYXJ0XCIpe1xyXG5cdFx0XHRcdHRoaXMud2lkZ2V0VHlwZT1cImNoYXJ0XCJcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIFRpbSBXZW50emxhdVxyXG4vLyBMaWNlbnNlZCB1bmRlciBNSVRcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBLZXJ2aVZhbHVlLCBEYXNoYm9hcmRQYW5lbCwgRGFzaGJvYXJkU2l6ZXMgfSBmcm9tICdrZXJ2aS1qcyc7XHJcbmltcG9ydCB7IE5HWEtlcnZpU2VydmljZSB9IGZyb20gJy4uL25neC1rZXJ2aS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBwSW5qZWN0b3IgfSBmcm9tICcuLi9hcHAtaW5qZWN0b3Iuc2VydmljZSc7XHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAna2VydmktdmFsdWUtYmFzZScsXHJcblx0dGVtcGxhdGU6ICcnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBLZXJ2aVZhbHVlQ29tcG9uZW50PFQgZXh0ZW5kcyBLZXJ2aVZhbHVlPiAgIHtcclxuXHRASW5wdXQoKSBzZXQgdmFsdWVJZCh2OnN0cmluZyl7XHJcblx0XHR0aGlzLnZhbHVlID0gdGhpcy5rZXJ2aVNlcnZpY2UuZ2V0Q29tcG9uZW50KHRoaXMudmFsdWVJZCkgYXMgVDtcclxuXHR9XHJcblx0QElucHV0KCkgdmFsdWU6VCA9IG51bGw7XHJcblx0XHJcblx0QElucHV0KCkgbGlua1BhcmFtZXRlcnM6YW55O1xyXG5cdEBJbnB1dCgpIGRhc2hib2FyZFNpemVzOkRhc2hib2FyZFNpemVzID0gbmV3IERhc2hib2FyZFNpemVzKCk7XHJcblx0QElucHV0KCkgaW5saW5lOmJvb2xlYW47XHJcblx0cHJvdGVjdGVkIGtlcnZpU2VydmljZTogTkdYS2VydmlTZXJ2aWNlO1xyXG5cdGNvbnN0cnVjdG9yKCkgeyBcclxuXHRcdHRoaXMua2VydmlTZXJ2aWNlID0gQXBwSW5qZWN0b3IuZ2V0KE5HWEtlcnZpU2VydmljZSk7ICBcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0VmFsdWUoKSB7XHJcblx0XHRpZiAoIXRoaXMubGlua1BhcmFtZXRlcnMpXHJcbiAgICAgIFx0XHR0aGlzLmxpbmtQYXJhbWV0ZXJzID0gdGhpcy52YWx1ZS51aTtcclxuXHR9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCBUaW0gV2VudHpsYXVcclxuLy8gTGljZW5zZWQgdW5kZXIgTUlUXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnVtYmVyVmFsdWUgfSBmcm9tICdrZXJ2aS1qcyc7XHJcbmltcG9ydCB7IEtlcnZpVmFsdWVDb21wb25lbnQgfSBmcm9tICcuL3ZhbHVlLmNvbXBvbmVudCdcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAna2VydmktdmFsdWUtbnVtYmVyLWJhc2UnLFxyXG5cdHRlbXBsYXRlOiAnJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgS2VydmlOdW1iZXJDb21wb25lbnQgZXh0ZW5kcyBLZXJ2aVZhbHVlQ29tcG9uZW50PE51bWJlclZhbHVlPiB7XHJcblx0cHVibGljIG51bWJlckZvcm1hdCA9IFwiMS4yLTJcIjtcclxuXHRwdWJsaWMgZGlzcGxheVZhbHVlOm51bWJlciA9IDA7XHJcblx0cHVibGljIGRpc3BsYXlVbml0OnN0cmluZyA9IFwiXCI7XHJcblx0cHVibGljIGRpc3BsYXlUeXBlOnN0cmluZz1cIlwiO1xyXG5cdHB1YmxpYyBjdXJyZW50SWNvbjpzdHJpbmc9bnVsbDtcclxuXHRcclxuXHRjb25zdHJ1Y3RvcigpeyBcclxuXHRcdHN1cGVyKCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0S2VydmlWYWx1ZSh2YWx1ZSl7XHJcblx0XHR0aGlzLnZhbHVlLnNldCh2YWx1ZSk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdE51bWJlcigpIHtcclxuXHRcdHRoaXMubmdPbkluaXRWYWx1ZSgpO1xyXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0XHJcblx0XHR0aGlzLm51bWJlckZvcm1hdCA9IHRoaXMubGlua1BhcmFtZXRlcnMubWluSW50ZWdlckRpZ2l0cyArIFwiLlwiICsgdGhpcy5saW5rUGFyYW1ldGVycy5taW5GcmFjdGlvbkRpZ2l0cyArIFwiLVwiICsgdGhpcy5saW5rUGFyYW1ldGVycy5tYXhGcmFjdGlvbkRpZ2l0c1xyXG5cdFx0aWYgKCF0aGlzLmxpbmtQYXJhbWV0ZXJzLnZhbHVlSWNvbilcclxuXHRcdFx0dGhpcy5jdXJyZW50SWNvbiA9IG51bGw7XHJcblx0XHRlbHNlIGlmICh0eXBlb2YodGhpcy5saW5rUGFyYW1ldGVycy52YWx1ZUljb24pID09IFwic3RyaW5nXCIgKVxyXG5cdFx0XHR0aGlzLmN1cnJlbnRJY29uID0gdGhpcy5saW5rUGFyYW1ldGVycy52YWx1ZUljb247XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0dGhpcy52YWx1ZS52YWx1ZSQuc3Vic2NyaWJlKGZ1bmN0aW9uKHYpe1xyXG5cdFx0XHRcdGZvcihsZXQgaWNvblNlY3Rpb24gb2Ygc2VsZi5saW5rUGFyYW1ldGVycy52YWx1ZUljb24pe1xyXG5cdFx0XHRcdFx0aWYgKHYgPj0gaWNvblNlY3Rpb24ucmFuZ2VbMF0gJiYgdiA8PSBpY29uU2VjdGlvbi5yYW5nZVsxXSl7XHJcblx0XHRcdFx0XHRcdHNlbGYuY3VycmVudEljb24gPSBpY29uU2VjdGlvbi5pY29uO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHR9XHRcdFxyXG5cclxuXHRcdGlmICghdGhpcy5pbmxpbmUgJiYgdGhpcy5saW5rUGFyYW1ldGVycy5pbmxpbmUpe1xyXG5cdFx0XHR0aGlzLmlubGluZSA9IHRydWU7XHJcblx0XHR9ZWxzZSBpZiAoIXRoaXMuaW5saW5lICYmIHRoaXMubGlua1BhcmFtZXRlcnMuc2l6ZSA+IDApXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuaW5saW5lID0gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCBUaW0gV2VudHpsYXVcclxuLy8gTGljZW5zZWQgdW5kZXIgTUlUXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQm9vbGVhblZhbHVlIH0gZnJvbSAna2VydmktanMnO1xyXG5pbXBvcnQgeyBLZXJ2aVZhbHVlQ29tcG9uZW50IH0gZnJvbSAnLi92YWx1ZS5jb21wb25lbnQnXHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2tlcnZpLXZhbHVlLWJvb2xlYW4tYmFzZScsXHJcblx0dGVtcGxhdGU6ICcnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBLZXJ2aUJvb2xlYW5Db21wb25lbnQgZXh0ZW5kcyBLZXJ2aVZhbHVlQ29tcG9uZW50PEJvb2xlYW5WYWx1ZT4ge1xyXG5cdHB1YmxpYyBkaXNwbGF5VHlwZTpzdHJpbmc9XCJzd2l0Y2hcIjtcclxuXHRcclxuXHRjb25zdHJ1Y3RvcigpeyBcclxuXHRcdHN1cGVyKCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0S2VydmlWYWx1ZSh2YWx1ZSl7XHJcblx0XHR0aGlzLnZhbHVlLnNldCh2YWx1ZSk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdEJvb2xlYW4oKSB7XHJcblx0XHR0aGlzLm5nT25Jbml0VmFsdWUoKTtcclxuXHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdFxyXG5cdFx0aWYgKHRoaXMubGlua1BhcmFtZXRlcnMudHlwZSl7XHJcblx0XHRcdHRoaXMuZGlzcGxheVR5cGUgPSB0aGlzLmxpbmtQYXJhbWV0ZXJzLnR5cGVcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0aWYgKCF0aGlzLmlubGluZSAmJiB0aGlzLmxpbmtQYXJhbWV0ZXJzLmlubGluZSl7XHJcblx0XHRcdHRoaXMuaW5saW5lID0gdHJ1ZTtcclxuXHRcdH0gZWxzZSBpZiAoIXRoaXMuaW5saW5lICYmIHRoaXMubGlua1BhcmFtZXRlcnMuc2l6ZSA+IDApXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuaW5saW5lID0gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCBUaW0gV2VudHpsYXVcclxuLy8gTGljZW5zZWQgdW5kZXIgTUlUXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ2tlcnZpLWpzJztcclxuaW1wb3J0IHsgRGFzaGJvYXJkU2l6ZXMgIH0gZnJvbSAna2VydmktanMnO1xyXG5pbXBvcnQgeyBOR1hLZXJ2aVNlcnZpY2UgfSBmcm9tICcuLi9uZ3gta2Vydmkuc2VydmljZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBBcHBJbmplY3RvciB9IGZyb20gJy4uL2FwcC1pbmplY3Rvci5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAna2VydmktYWN0aW9uLWJhc2UnLFxyXG4gIHRlbXBsYXRlOiAnJyxcclxuICBzdHlsZXM6IFtdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgS2VydmlBY3Rpb25Db21wb25lbnQge1xyXG4gICAgQElucHV0KCkgYWN0aW9uOiBBY3Rpb24gPSBudWxsO1xyXG4gICAgQElucHV0KCkgbGlua1BhcmFtZXRlcnM6IGFueSA9IG51bGw7XHJcbiAgICBASW5wdXQoKSBpbmxpbmUgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIGRhc2hib2FyZFNpemVzOkRhc2hib2FyZFNpemVzID0gbmV3IERhc2hib2FyZFNpemVzKCk7XHJcbiAgICBwdWJsaWMgc3RhdGU6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgcHJvdGVjdGVkIGtlcnZpU2VydmljZTpOR1hLZXJ2aVNlcnZpY2U7XHJcblxyXG4gICAgcHVibGljIGRpc3BsYXlUeXBlID0gJ3N3aXRjaCc7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmtlcnZpU2VydmljZSA9IEFwcEluamVjdG9yLmdldChOR1hLZXJ2aVNlcnZpY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0QWN0aW9uKCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBpZiAoIXRoaXMubGlua1BhcmFtZXRlcnMpXHJcbiAgICAgICAgICAgIHRoaXMubGlua1BhcmFtZXRlcnMgPSB0aGlzLmFjdGlvbi51aTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubGlua1BhcmFtZXRlcnMuZGlzcGxheVR5cGUpe1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlUeXBlID0gdGhpcy5saW5rUGFyYW1ldGVycy5kaXNwbGF5VHlwZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5pbmxpbmUgJiYgdGhpcy5saW5rUGFyYW1ldGVycy5pbmxpbmUpe1xyXG4gICAgICAgICAgICB0aGlzLmlubGluZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZWxmLnN0YXRlLm5leHQodGhpcy5hY3Rpb24ucnVubmluZyQudmFsdWUpO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uLnJ1bm5pbmckLnN1YnNjcmliZShmdW5jdGlvbih2KXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhclwiLCBzZWxmLmFjdGlvbi5pZCwgdilcclxuICAgICAgICAgICAgc2VsZi5zdGF0ZS5uZXh0KHYpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEFjdGlvblN0YXRlKHZhbHVlKXtcclxuICAgICAgICBpZiAodmFsdWUpXHJcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uLnJ1bih0aGlzLmxpbmtQYXJhbWV0ZXJzLmFjdGlvblBhcmFtZXRlcnMpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5hY3Rpb24uaW50ZXJydXB0KHRoaXMubGlua1BhcmFtZXRlcnMuaW50ZXJydXB0UGFyYW1ldGVycylcclxuICAgIH1cclxufSIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgVGltIFdlbnR6bGF1XHJcbi8vIExpY2Vuc2VkIHVuZGVyIE1JVFxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sbGVyLCBOdW1iZXJWYWx1ZSB9IGZyb20gJ2tlcnZpLWpzJztcclxuaW1wb3J0IHsgRGFzaGJvYXJkU2l6ZXMgIH0gZnJvbSAna2VydmktanMnO1xyXG5pbXBvcnQgeyBOR1hLZXJ2aVNlcnZpY2UgfSBmcm9tICcuLi9uZ3gta2Vydmkuc2VydmljZSc7XHJcbmltcG9ydCB7IEFwcEluamVjdG9yIH0gZnJvbSAnLi4vYXBwLWluamVjdG9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAna2VydmktY2FtZXJhLWJhc2UnLFxyXG4gIHRlbXBsYXRlOiAnJyxcclxuICBzdHlsZXM6IFtdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgS2VydmlDYW1lcmFDb21wb25lbnQge1xyXG4gICAgQElucHV0KCkgc3RyZWFtT2JzZXJ2ZXJzOiBDb250cm9sbGVyW10gPSBbXTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBzZWxlY3RlZFNvdXJjZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBjYW06IENvbnRyb2xsZXI7XHJcblxyXG4gICAgQElucHV0KCkgc2V0IGNhbWVyYUlkKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnc2V0Y2FtaWQnLCBpZCk7XHJcblxyXG4gICAgICAgIHRoaXMuY2FtZXJhID0gdGhpcy5rZXJ2aVNlcnZpY2UuZ2V0Q29tcG9uZW50KGlkKSBhcyBDb250cm9sbGVyO1xyXG4gICAgfVxyXG4gICAgQElucHV0KCkgc2V0IGNhbWVyYSh2OiBDb250cm9sbGVyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NldGNhbScsIHYpO1xyXG5cclxuICAgICAgICB0aGlzLmNhbSA9IHY7XHJcbiAgICAgICAgaWYgKHYpe1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpIG9mIHYub3V0cHV0cykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkuaWQuZW5kc1dpdGgoJy5wYW4nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFuID0gaSBhcyBOdW1iZXJWYWx1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaS5pZC5lbmRzV2l0aCgnLnRpbHQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsdCA9IGkgYXMgTnVtYmVyVmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jYW1lcmFUeXBlID0gdi51aS50eXBlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jYW1lcmFUeXBlID09PSAnZnJhbWUnICkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHYudWkuc291cmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW1lcmFTb3VyY2UgPSB0aGlzLmNhbS5pZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuY2FtZXJhU291cmNlID0gdGhpcy5jYW0uaWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTdHJlYW1PYnNlcnZlcnMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNhbWVyYSgpIHsgcmV0dXJuIHRoaXMuY2FtOyB9XHJcbiAgICBASW5wdXQoKSBsaW5rUGFyYW1ldGVyczogYW55ID0gbnVsbDtcclxuICAgIEBJbnB1dCgpIGlubGluZSA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgZGFzaGJvYXJkU2l6ZXMgPSBuZXcgRGFzaGJvYXJkU2l6ZXMoKTtcclxuICAgIEBJbnB1dCgpIGlzQmFja2dyb3VuZCA9IGZhbHNlO1xyXG5cclxuICAgIHByb3RlY3RlZCBrZXJ2aVNlcnZpY2U6IE5HWEtlcnZpU2VydmljZTtcclxuICAgIHB1YmxpYyBwYW46IE51bWJlclZhbHVlO1xyXG4gICAgcHVibGljIHRpbHQ6IE51bWJlclZhbHVlO1xyXG4gICAgcHVibGljIGNhbWVyYVR5cGU6IHN0cmluZztcclxuICAgIHB1YmxpYyBjYW1lcmFTb3VyY2U6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMua2VydmlTZXJ2aWNlID0gQXBwSW5qZWN0b3IuZ2V0KE5HWEtlcnZpU2VydmljZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlU3RyZWFtT2JzZXJ2ZXJzKCkge1xyXG4gICAgICAgIGNvbnN0IHN0cmVhbU9ic2VydmVycyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGNvbnRyb2xsZXJzID0gdGhpcy5rZXJ2aVNlcnZpY2UuZ2V0Q29tcG9uZW50c0J5VHlwZSgnY29udHJvbGxlcicpO1xyXG4gICAgICAgIGZvciAobGV0IGNvbnRyb2xsZXIgb2YgY29udHJvbGxlcnMpIHtcclxuICAgICAgICAgICAgaWYgKGNvbnRyb2xsZXIudHlwZSA9PT0gJ3N0cmVhbV9vYnNlcnZlcicpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjb250cm9sbGVyLnVpLnNvdXJjZVN0cmVhbSA9PT0gdGhpcy5jYW1lcmFTb3VyY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdHJlYW1PYnNlcnZlcnMucHVzaChjb250cm9sbGVyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0cmVhbU9ic2VydmVycyA9IHN0cmVhbU9ic2VydmVycztcclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZFNvdXJjZSAhPT0gdGhpcy5jYW1lcmFTb3VyY2Upe1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkU291cmNlID0gdGhpcy5jYW1lcmFTb3VyY2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRQYW4odikge1xyXG4gICAgICAgIHRoaXMucGFuLnNldCh2KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0VGlsdCh2KSB7XHJcbiAgICAgICAgdGhpcy50aWx0LnNldCh2KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdENhbWVyYSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnbmdpIGNhbScsIHRoaXMuY2FtZXJhLmlkKTtcclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICBpZiAoIXRoaXMubGlua1BhcmFtZXRlcnMpIHtcclxuICAgICAgICAgICAgICB0aGlzLmxpbmtQYXJhbWV0ZXJzID0gdGhpcy5jYW1lcmEudWk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5pbmxpbmUgJiYgdGhpcy5saW5rUGFyYW1ldGVycy5pbmxpbmUpIHtcclxuICAgICAgICAgICAgdGhpcy5pbmxpbmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmtlcnZpU2VydmljZS5jb21wb25lbnRzQ2hhbmdlZCQuc3Vic2NyaWJlKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzZWxmLnVwZGF0ZVN0cmVhbU9ic2VydmVycygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3RyZWFtT2JzZXJ2ZXJzKCk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFNvdXJjZSA9IHRoaXMuY2FtZXJhU291cmNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVNvdXJjZShzb3VyY2U6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjcycsIHNvdXJjZSk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFNvdXJjZSA9IHNvdXJjZTtcclxuICAgICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgVGltIFdlbnR6bGF1XHJcbi8vIExpY2Vuc2VkIHVuZGVyIE1JVFxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbG9yVmFsdWUgfSBmcm9tICdrZXJ2aS1qcyc7XHJcbmltcG9ydCB7IEtlcnZpVmFsdWVDb21wb25lbnQgfSBmcm9tICcuL3ZhbHVlLmNvbXBvbmVudCdcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAna2VydmktdmFsdWUtY29sb3ItYmFzZScsXHJcblx0dGVtcGxhdGU6ICcnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBLZXJ2aUNvbG9yQ29tcG9uZW50IGV4dGVuZHMgS2VydmlWYWx1ZUNvbXBvbmVudDxDb2xvclZhbHVlPiB7XHJcblx0cHVibGljIGRpc3BsYXlUeXBlOnN0cmluZz1cImJ1dHRvblwiO1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKCl7IFxyXG5cdFx0c3VwZXIoKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXRLZXJ2aVZhbHVlKHZhbHVlKXtcclxuXHRcdHRoaXMudmFsdWUuc2V0KHZhbHVlKTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0Q29sb3IoKSB7XHJcblx0XHR0aGlzLm5nT25Jbml0VmFsdWUoKTtcclxuXHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdFxyXG5cdFx0aWYgKHRoaXMubGlua1BhcmFtZXRlcnMudHlwZSl7XHJcblx0XHRcdHRoaXMuZGlzcGxheVR5cGUgPSB0aGlzLmxpbmtQYXJhbWV0ZXJzLnR5cGVcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0aWYgKCF0aGlzLmlubGluZSAmJiB0aGlzLmxpbmtQYXJhbWV0ZXJzLmlubGluZSl7XHJcblx0XHRcdHRoaXMuaW5saW5lID0gdHJ1ZTtcclxuXHRcdH0gZWxzZSBpZiAoIXRoaXMuaW5saW5lICYmIHRoaXMubGlua1BhcmFtZXRlcnMuc2l6ZSA+IDApXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuaW5saW5lID0gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDE2LCBUaW0gV2VudHpsYXVcclxuLy8gTGljZW5zZWQgdW5kZXIgTUlUXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGF0ZVRpbWVWYWx1ZSB9IGZyb20gJ2tlcnZpLWpzJztcclxuaW1wb3J0IHsgS2VydmlWYWx1ZUNvbXBvbmVudCB9IGZyb20gJy4vdmFsdWUuY29tcG9uZW50J1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdrZXJ2aS12YWx1ZS1kYXRldGltZS1iYXNlJyxcclxuXHR0ZW1wbGF0ZTogJydcclxufSlcclxuZXhwb3J0IGNsYXNzIEtlcnZpRGF0ZVRpbWVDb21wb25lbnQgZXh0ZW5kcyBLZXJ2aVZhbHVlQ29tcG9uZW50PERhdGVUaW1lVmFsdWU+IHtcclxuXHRwdWJsaWMgZGlzcGxheVR5cGU6c3RyaW5nPVwiZGF0ZXRpbWVcIjtcclxuXHRwdWJsaWMgZGF0ZVRpbWVGb3JtYXQ6c3RyaW5nO1xyXG5cdGNvbnN0cnVjdG9yKCl7IFxyXG5cdFx0c3VwZXIoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHNldEtlcnZpVmFsdWUodmFsdWUpe1xyXG5cdFx0dGhpcy52YWx1ZS5zZXQodmFsdWUpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIG5nT25Jbml0RGF0ZVRpbWUoKSB7XHJcblx0XHR0aGlzLm5nT25Jbml0VmFsdWUoKTtcclxuXHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdFxyXG5cdFx0aWYgKHRoaXMubGlua1BhcmFtZXRlcnMudHlwZSl7XHJcblx0XHRcdHRoaXMuZGlzcGxheVR5cGUgPSB0aGlzLmxpbmtQYXJhbWV0ZXJzLnR5cGVcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0aWYgKCF0aGlzLmlubGluZSAmJiB0aGlzLmxpbmtQYXJhbWV0ZXJzLmlubGluZSl7XHJcblx0XHRcdHRoaXMuaW5saW5lID0gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoc2VsZi5saW5rUGFyYW1ldGVycy50eXBlPT1cInRpbWVcIilcclxuICAgICAgICBcdHRoaXMuZGF0ZVRpbWVGb3JtYXQgPSB0aGlzLmtlcnZpU2VydmljZS5hcHBsaWNhdGlvbiQudmFsdWUuZGlzcGxheS51bml0X3N5c3RlbS5kYXRldGltZS50aW1lO1xyXG4gICAgICBcdGVsc2UgaWYgKHNlbGYubGlua1BhcmFtZXRlcnMudHlwZT09XCJkYXRlXCIpXHJcbiAgICAgICAgXHR0aGlzLmRhdGVUaW1lRm9ybWF0ID0gc2VsZi5rZXJ2aVNlcnZpY2UuYXBwbGljYXRpb24kLnZhbHVlLmRpc3BsYXkudW5pdF9zeXN0ZW0uZGF0ZXRpbWUuZGF0ZTtcclxuICAgICAgXHRlbHNlXHJcbiAgICAgICAgXHR0aGlzLmRhdGVUaW1lRm9ybWF0ID0gdGhpcy5rZXJ2aVNlcnZpY2UuYXBwbGljYXRpb24kLnZhbHVlLmRpc3BsYXkudW5pdF9zeXN0ZW0uZGF0ZXRpbWUuZGF0ZXRpbWU7XHJcbiAgICAgIFxyXG5cdH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTYsIFRpbSBXZW50emxhdVxyXG4vLyBMaWNlbnNlZCB1bmRlciBNSVRcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdHJpbmdWYWx1ZSB9IGZyb20gJ2tlcnZpLWpzJztcclxuaW1wb3J0IHsgS2VydmlWYWx1ZUNvbXBvbmVudCB9IGZyb20gJy4vdmFsdWUuY29tcG9uZW50J1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdrZXJ2aS12YWx1ZS1zdHJpbmctYmFzZScsXHJcblx0dGVtcGxhdGU6ICcnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBLZXJ2aVN0cmluZ0NvbXBvbmVudCBleHRlbmRzIEtlcnZpVmFsdWVDb21wb25lbnQ8U3RyaW5nVmFsdWU+IHtcclxuXHRwdWJsaWMgZGlzcGxheVR5cGU6c3RyaW5nPVwiXCI7XHJcblx0XHJcblx0Y29uc3RydWN0b3IoKXsgXHJcblx0XHRzdXBlcigpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldEtlcnZpVmFsdWUodmFsdWUpe1xyXG5cdFx0dGhpcy52YWx1ZS5zZXQodmFsdWUpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIG5nT25Jbml0U3RyaW5nKCkge1xyXG5cdFx0dGhpcy5uZ09uSW5pdFZhbHVlKCk7XHJcblx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHRcclxuXHRcdGlmICh0aGlzLmxpbmtQYXJhbWV0ZXJzLnR5cGUpe1xyXG5cdFx0XHR0aGlzLmRpc3BsYXlUeXBlID0gdGhpcy5saW5rUGFyYW1ldGVycy50eXBlXHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGlmICghdGhpcy5pbmxpbmUgJiYgdGhpcy5saW5rUGFyYW1ldGVycy5pbmxpbmUpe1xyXG5cdFx0XHR0aGlzLmlubGluZSA9IHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgVGltIFdlbnR6bGF1XHJcbi8vIExpY2Vuc2VkIHVuZGVyIE1JVFxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRTaXplcywgRGFzaGJvYXJkTWVzc2FnZU1vZGVsLCBVc2VyTG9nU3RhdGVUeXBlIH0gZnJvbSAna2VydmktanMnO1xyXG5pbXBvcnQgeyBOR1hLZXJ2aVNlcnZpY2UgfSBmcm9tICcuLi9uZ3gta2Vydmkuc2VydmljZSc7XHJcbmltcG9ydCB7IEFwcEluamVjdG9yIH0gZnJvbSAnLi4vYXBwLWluamVjdG9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyAgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdrZXJ2aS11c2VyLWxvZy1iYXNlJyxcclxuICB0ZW1wbGF0ZTogJycsXHJcbiAgc3R5bGVzOiBbXSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBLZXJ2aVVzZXJMb2dDb21wb25lbnQge1xyXG4gICAgQElucHV0KCkgbG9nTGVuZ3RoID0gMTA7XHJcbiAgICBASW5wdXQoKSBsaW5rUGFyYW1ldGVyczogYW55ID0gbnVsbDtcclxuICAgIEBJbnB1dCgpIGlubGluZSA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgZGFzaGJvYXJkU2l6ZXM6IERhc2hib2FyZFNpemVzID0gbmV3IERhc2hib2FyZFNpemVzKCk7XHJcbiAgICBwcm90ZWN0ZWQga2VydmlTZXJ2aWNlOiBOR1hLZXJ2aVNlcnZpY2U7XHJcbiAgICBsYXN0TWVzc2FnZSQ6IE9ic2VydmFibGU8RGFzaGJvYXJkTWVzc2FnZU1vZGVsPiA9IG51bGw7XHJcbiAgICBtZXNzYWdlcyQ6IE9ic2VydmFibGU8RGFzaGJvYXJkTWVzc2FnZU1vZGVsW10+ID0gbnVsbDtcclxuICAgIG1lc3NhZ2VDb3VudCQ6IE9ic2VydmFibGU8bnVtYmVyPiA9IG51bGw7XHJcbiAgICBsb2dTdGF0ZSQ6IE9ic2VydmFibGU8VXNlckxvZ1N0YXRlVHlwZT4gPSBudWxsO1xyXG4gICAgcHVibGljIG1lc3NhZ2VDb3VudCA9IDA7XHJcbiAgICBwdWJsaWMgVXNlckxvZ1N0YXRlOiBVc2VyTG9nU3RhdGVUeXBlID0gVXNlckxvZ1N0YXRlVHlwZS5ub3JtYWw7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5rZXJ2aVNlcnZpY2UgPSBBcHBJbmplY3Rvci5nZXQoTkdYS2VydmlTZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VzJCA9IHRoaXMua2VydmlTZXJ2aWNlLmdldExvZ01lc3NhZ2VzJCgpO1xyXG4gICAgICAgIHRoaXMubGFzdE1lc3NhZ2UkID0gdGhpcy5rZXJ2aVNlcnZpY2UuZ2V0TGFzdExvZ01lc3NhZ2UkKCk7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlQ291bnQkID0gdGhpcy5rZXJ2aVNlcnZpY2UuZ2V0TG9nTWVzc2FnZUNvdW50JCgpO1xyXG4gICAgICAgIHRoaXMubG9nU3RhdGUkID0gdGhpcy5rZXJ2aVNlcnZpY2UuZ2V0TG9nU3RhdGUkKCk7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlQ291bnQkLnN1YnNjcmliZShmdW5jdGlvbih2KXtcclxuICAgICAgICAgIHRoaXMubWVzc2FnZUNvdW50ID0gdjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgbmdPbkluaXRVc2VyTG9nKCkge1xyXG5cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTkdYS2VydmlTZXJ2aWNlIH0gZnJvbSAnLi4vbmd4LWtlcnZpLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBcHBJbmplY3RvciB9IGZyb20gJy4uL2FwcC1pbmplY3Rvci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGlyZWN0b3J5IH0gZnJvbSAna2VydmktanMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdrZXJ2aS1kaXJlY3RvcnknLFxyXG4gIHRlbXBsYXRlOiAnJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgS2VydmlEaXJlY3RvcnlDb21wb25lbnQge1xyXG4gICAgcHJvdGVjdGVkIHBhdGggPSAnLyc7XHJcbiAgICBwcm90ZWN0ZWQgZGlyZWN0b3J5OiBEaXJlY3RvcnkgPSBudWxsO1xyXG4gICAgcHJvdGVjdGVkIGtlcnZpU2VydmljZTogTkdYS2VydmlTZXJ2aWNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMua2VydmlTZXJ2aWNlID0gQXBwSW5qZWN0b3IuZ2V0KE5HWEtlcnZpU2VydmljZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGxvYWREaXJlY3RvcnkoKSB7XHJcbiAgICAgICAgLy90aGlzLmRpcmVjdG9yeSA9IHRoaXMua2VydmlTZXJ2aWNlLkdldERpcmVjdG9yeSh0aGlzLnBhdGgpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgVGltIFdlbnR6bGF1XHJcbi8vIExpY2Vuc2VkIHVuZGVyIE1JVFxyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRTaXplcywgRGFzaGJvYXJkTWVzc2FnZU1vZGVsLCBVc2VyTG9nU3RhdGVUeXBlIH0gZnJvbSAna2VydmktanMnO1xyXG5pbXBvcnQgeyBOR1hLZXJ2aVNlcnZpY2UgfSBmcm9tICcuLi9uZ3gta2Vydmkuc2VydmljZSc7XHJcbmltcG9ydCB7IEFwcEluamVjdG9yIH0gZnJvbSAnLi4vYXBwLWluamVjdG9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyAgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdrZXJ2aS1hcHAtaGVhbHRoLWJhc2UnLFxyXG4gIHRlbXBsYXRlOiAnJyxcclxuICBzdHlsZXM6IFtdLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEtlcnZpQXBwSGVhbHRoQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIGxpbmtQYXJhbWV0ZXJzOiBhbnkgPSBudWxsO1xyXG4gICAgQElucHV0KCkgaW5saW5lID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBkYXNoYm9hcmRTaXplczogRGFzaGJvYXJkU2l6ZXMgPSBuZXcgRGFzaGJvYXJkU2l6ZXMoKTtcclxuICAgIEBJbnB1dCgpIG1wcyA9IDA7XHJcbiAgICBASW5wdXQoKSBwaW5nRGlmZiA9IDA7XHJcbiAgICBASW5wdXQoKSBwaW5nRGVsYXkgPSAwO1xyXG4gICAgcHJvdGVjdGVkIGtlcnZpU2VydmljZTogTkdYS2VydmlTZXJ2aWNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMua2VydmlTZXJ2aWNlID0gQXBwSW5qZWN0b3IuZ2V0KE5HWEtlcnZpU2VydmljZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG5nT25Jbml0QXBwSGVhbHRoKCkge1xyXG4gICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgdGhpcy5rZXJ2aVNlcnZpY2UubXBzJC5zdWJzY3JpYmUoZnVuY3Rpb24obXBzKSB7XHJcbiAgICAgICAgc2VsZi5tcHMgPSBtcHM7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5rZXJ2aVNlcnZpY2UuYXBwUGluZ0RpZmYkLnN1YnNjcmliZShmdW5jdGlvbihkaWZmKSB7XHJcbiAgICAgICAgc2VsZi5waW5nRGlmZiA9IGRpZmY7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5rZXJ2aVNlcnZpY2UuYXBwUGluZ0RlbGF5JC5zdWJzY3JpYmUoZnVuY3Rpb24oZGlmZikge1xyXG4gICAgICAgIHNlbGYucGluZ0RlbGF5ID0gZGlmZjtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLW5neC1rZXJ2aScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxwPlxyXG4gICAgICBuZ3gta2Vydmkgd29ya3MhXHJcbiAgICA8L3A+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hLZXJ2aUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5neEtlcnZpQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3gta2VydmkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgS2VydmlEYXNoYm9hcmRDb21wb25lbnQgfSBmcm9tICcuL2Rhc2hib2FyZC9rZXJ2aS1kYXNoYm9hcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgc2V0QXBwSW5qZWN0b3IgfSBmcm9tIFwiLi9hcHAtaW5qZWN0b3Iuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBLZXJ2aURhc2hib2FyZFBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9kYXNoYm9hcmQva2VydmktZGFzaGJvYXJkLXBhbmVsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEtlcnZpQ29udHJvbGxlclBhZENvbXBvbmVudCB9IGZyb20gJy4vZGFzaGJvYXJkL2tlcnZpLWNvbnRyb2xsZXItcGFkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5HWEtlcnZpU2VydmljZSB9IGZyb20gJy4vbmd4LWtlcnZpLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBLZXJ2aVRlbXBsYXRlU2VydmljZSB9IGZyb20gJy4vbmd4LWtlcnZpLXRlbXBsYXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBLZXJ2aVZhbHVlQ29tcG9uZW50IH0gZnJvbSAnLi92YWx1ZXMvdmFsdWUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgS2VydmlOdW1iZXJDb21wb25lbnQgfSBmcm9tICcuL3ZhbHVlcy9rZXJ2aS1udW1iZXItdmFsdWUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgS2VydmlTdHJpbmdDb21wb25lbnQgfSBmcm9tICcuL3ZhbHVlcy9rZXJ2aS1zdHJpbmctdmFsdWUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgS2VydmlCb29sZWFuQ29tcG9uZW50IH0gZnJvbSAnLi92YWx1ZXMva2VydmktYm9vbGVhbi12YWx1ZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBLZXJ2aUNvbG9yQ29tcG9uZW50IH0gZnJvbSAnLi92YWx1ZXMva2VydmktY29sb3ItdmFsdWUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgS2VydmlEYXRlVGltZUNvbXBvbmVudCB9IGZyb20gJy4vdmFsdWVzL2tlcnZpLWRhdGV0aW1lLXZhbHVlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEtlcnZpQWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9hY3Rpb25zL2tlcnZpLWFjdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBLZXJ2aUNhbWVyYUNvbXBvbmVudCB9IGZyb20gJy4vY2FtZXJhL2tlcnZpLWNhbWVyYS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBLZXJ2aVdpZGdldENvbXBvbmVudCB9IGZyb20gJy4vZGFzaGJvYXJkL2tlcnZpLXdpZGdldC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBLZXJ2aVVzZXJMb2dDb21wb25lbnQgfSBmcm9tICcuL3VzZXItbG9nL3VzZXItbG9nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEtlcnZpRGlyZWN0b3J5Q29tcG9uZW50IH0gZnJvbSAnLi9maWxlcy9rZXJ2aS1kaXJlY3RvcnkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgS2VydmlBcHBIZWFsdGhDb21wb25lbnQgfSBmcm9tICcuL2Rhc2hib2FyZC9hcHAtaGVhbHRoLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTmd4S2VydmlDb21wb25lbnQsXHJcbiAgICBLZXJ2aURhc2hib2FyZENvbXBvbmVudCxcclxuICAgIEtlcnZpRGFzaGJvYXJkUGFuZWxDb21wb25lbnQsXHJcbiAgICBLZXJ2aUNvbnRyb2xsZXJQYWRDb21wb25lbnQsXHJcbiAgICBLZXJ2aU51bWJlckNvbXBvbmVudCxcclxuICAgIEtlcnZpU3RyaW5nQ29tcG9uZW50LFxyXG4gICAgS2VydmlCb29sZWFuQ29tcG9uZW50LFxyXG4gICAgS2VydmlDb2xvckNvbXBvbmVudCxcclxuICAgIEtlcnZpRGF0ZVRpbWVDb21wb25lbnQsXHJcbiAgICBLZXJ2aUFjdGlvbkNvbXBvbmVudCxcclxuICAgIEtlcnZpVmFsdWVDb21wb25lbnQsXHJcbiAgICBLZXJ2aVdpZGdldENvbXBvbmVudCxcclxuICAgIEtlcnZpQ2FtZXJhQ29tcG9uZW50LFxyXG4gICAgS2VydmlVc2VyTG9nQ29tcG9uZW50LFxyXG4gICAgS2VydmlEaXJlY3RvcnlDb21wb25lbnQsXHJcbiAgICBLZXJ2aUFwcEhlYWx0aENvbXBvbmVudFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbTkdYS2VydmlTZXJ2aWNlLCBLZXJ2aVRlbXBsYXRlU2VydmljZV0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgTmd4S2VydmlDb21wb25lbnQsXHJcbiAgICBLZXJ2aURhc2hib2FyZENvbXBvbmVudCxcclxuICAgIEtlcnZpRGFzaGJvYXJkUGFuZWxDb21wb25lbnQsXHJcbiAgICBLZXJ2aUNvbnRyb2xsZXJQYWRDb21wb25lbnQsXHJcbiAgICBLZXJ2aU51bWJlckNvbXBvbmVudCxcclxuICAgIEtlcnZpV2lkZ2V0Q29tcG9uZW50LFxyXG4gICAgS2VydmlTdHJpbmdDb21wb25lbnQsXHJcbiAgICBLZXJ2aUJvb2xlYW5Db21wb25lbnQsXHJcbiAgICBLZXJ2aUNvbG9yQ29tcG9uZW50LFxyXG4gICAgS2VydmlEYXRlVGltZUNvbXBvbmVudCxcclxuICAgIEtlcnZpQWN0aW9uQ29tcG9uZW50LFxyXG4gICAgS2VydmlDYW1lcmFDb21wb25lbnQsXHJcbiAgICBLZXJ2aVVzZXJMb2dDb21wb25lbnQsXHJcbiAgICBLZXJ2aUFjdGlvbkNvbXBvbmVudCxcclxuICAgIEtlcnZpQXBwSGVhbHRoQ29tcG9uZW50XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4S2VydmlNb2R1bGUge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6SW5qZWN0b3Ipe1xyXG4gICAgc2V0QXBwSW5qZWN0b3IoaW5qZWN0b3IpO1xyXG4gIH1cclxuIH1cclxuIiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOR1hLZXJ2aVNlcnZpY2UgfSBmcm9tIFwiLi4vbmd4LWtlcnZpLnNlcnZpY2VcIlxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ3RyYW5zbGF0ZSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGtlcnZpU2VydmljZTogTkdYS2VydmlTZXJ2aWNlKSB7XHJcblxyXG4gIH1cclxuICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZywgYXJncz86IGFueSk6IGFueSB7XHJcbiAgICByZXR1cm4gdGhpcy5rZXJ2aVNlcnZpY2UudGV4dCh2YWx1ZSwgdmFsdWUpO1xyXG4gIH1cclxufSIsIi8vIENvcHlyaWdodCAoYykgMjAxNiwgVGltIFdlbnR6bGF1XHJcbi8vIExpY2Vuc2VkIHVuZGVyIE1JVFxyXG5cclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVHJhbnNsYXRlUGlwZSB9IGZyb20gJy4vdGV4dFBpcGUnIFxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICBdLFxyXG4gIGV4cG9ydHM6W1xyXG4gICAgVHJhbnNsYXRlUGlwZVxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbICBcclxuICAgICAgXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFRyYW5zbGF0ZVBpcGVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOR1hLZXJ2aVBpcGVzTW9kdWxlIHsgfVxyXG4iXSwibmFtZXMiOlsidHNsaWJfMS5fX2V4dGVuZHMiLCJ0c2xpYl8xLl9fdmFsdWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUlxQ0EsbUNBQWdCO0lBRHJEOztLQUdDOztnQkFIQSxVQUFVOztJQUdYLHNCQUFDO0NBQUEs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

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