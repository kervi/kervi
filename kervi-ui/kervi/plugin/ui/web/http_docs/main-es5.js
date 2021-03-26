function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "../../dist/kervi-js/fesm2015/kervi-js.js":
  /*!***********************************************************************************!*\
    !*** D:/dev/kervi/kervi/kervi-ui/kervi/ui/web/dist/kervi-js/fesm2015/kervi-js.js ***!
    \***********************************************************************************/

  /*! exports provided: Action, BooleanValue, ColorValue, ConnectionState, Controller, Dashboard, DashboardBackgroundModel, DashboardLink, DashboardMessageModel, DashboardPanel, DashboardPanelComponent, DashboardPanelParameters, DashboardSizes, DateTimeValue, Directory, File, FileBase, KerviBaseService, KerviEnumOptionModel, KerviJsComponent, KerviJsModule, KerviValue, KerviValueType, NumberValue, SelectValue, Stream, StreamEvent, StringValue, UserLogStateType, ValueRange, ValueRangeType */

  /***/
  function distKerviJsFesm2015KerviJsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Action", function () {
      return Action;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BooleanValue", function () {
      return BooleanValue;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColorValue", function () {
      return ColorValue;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConnectionState", function () {
      return ConnectionState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Controller", function () {
      return Controller;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Dashboard", function () {
      return Dashboard;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardBackgroundModel", function () {
      return DashboardBackgroundModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardLink", function () {
      return DashboardLink;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardMessageModel", function () {
      return DashboardMessageModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPanel", function () {
      return DashboardPanel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPanelComponent", function () {
      return DashboardPanelComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPanelParameters", function () {
      return DashboardPanelParameters;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardSizes", function () {
      return DashboardSizes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DateTimeValue", function () {
      return DateTimeValue;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Directory", function () {
      return Directory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "File", function () {
      return File;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FileBase", function () {
      return FileBase;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KerviBaseService", function () {
      return KerviBaseService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KerviEnumOptionModel", function () {
      return KerviEnumOptionModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KerviJsComponent", function () {
      return KerviJsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KerviJsModule", function () {
      return KerviJsModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KerviValue", function () {
      return KerviValue;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KerviValueType", function () {
      return KerviValueType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NumberValue", function () {
      return NumberValue;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectValue", function () {
      return SelectValue;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Stream", function () {
      return Stream;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StreamEvent", function () {
      return StreamEvent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StringValue", function () {
      return StringValue;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserLogStateType", function () {
      return UserLogStateType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValueRange", function () {
      return ValueRange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValueRangeType", function () {
      return ValueRangeType;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js"); // Copyright (c) 2016, Tim Wentzlau
    // Licensed under MIT


    var KerviSpineBase = /*#__PURE__*/function () {
      function KerviSpineBase(constructorOptions) {
        _classCallCheck(this, KerviSpineBase);

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
        this.mpsTime = new Date();
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

        this.addEventHandler = function (eventName, id, callback) {};

        this.addStreamHandler = function (streamId, streamEvent, callback) {};

        this.removeStreamHandler = function (streamId, streamEvent, callback) {};

        console.log('Kervi base spine init', this.options, constructorOptions);
        this.options = this.extend(this.options, constructorOptions);
        console.log('kbo', this.options);
        this.connect();
        var self = this;
        setInterval(function () {
          var hangingNodes = [];

          for (var id in self.rpcQueue) {
            var query = self.rpcQueue[id];

            if (query['callbackTimeout']) {
              if (Date.now() - query['ts'] > query['timeout']) {
                var callback = query['callbackTimeout'];
                hangingNodes.push(id);
                callback.call(self.options.targetScope);
              }
            }
          }

          for (var _i = 0, _hangingNodes = hangingNodes; _i < _hangingNodes.length; _i++) {
            var _id = _hangingNodes[_i];
            delete self.rpcQueue[_id];
          }
        }, 1);
      }

      _createClass(KerviSpineBase, [{
        key: "extend",
        value: function extend() {
          for (var _len = arguments.length, p = new Array(_len), _key = 0; _key < _len; _key++) {
            p[_key] = arguments[_key];
          }

          for (var i = 1; i < p.length; i++) {
            for (var key in p[i]) {
              if (p[i].hasOwnProperty(key)) {
                p[0][key] = p[i][key];
              }
            }
          }

          return p[0];
        }
      }, {
        key: "addRPCCallback",
        value: function addRPCCallback(id, callback, callbackTimeout, timeout) {
          if (callback) {
            this.rpcQueue[id] = {
              'callback': callback,
              'callbackTimeout': callbackTimeout,
              'timeout': timeout,
              'ts': Date.now()
            };
          }
        }
      }, {
        key: "handleRPCResponse",
        value: function handleRPCResponse(message) {
          if (message.id in this.rpcQueue) {
            var callback = this.rpcQueue[message.id]['callback'];

            if (callback) {
              delete this.rpcQueue[message.id];
              callback.call(this.options.targetScope, message.response, message.response);
            }
          }
        }
      }, {
        key: "handleEvent",
        value: function handleEvent(message) {
          // console.log('ev', message)
          var eventName = message.event;
          var id = message.id;
          var eventPath = eventName;

          if (id) {
            eventPath += '/' + id;
          }

          var value = null;

          if (message.args && message.args.length) {
            value = message.args[0];
          }

          for (var n = 0; n < this.eventHandlers.length; n++) {
            var h = this.eventHandlers[n];
            if (h.eventName === eventPath) h.callback.call(value, id, value);else if (h.eventName === eventName) h.callback.call(value, id, value);
          }
        }
      }, {
        key: "handleStream",
        value: function handleStream(message, streamBlob) {
          var streamTag = message.streamId + '/' + message.streamEvent;

          for (var n = 0; n < this.streamHandlers.length; n++) {
            var h = this.streamHandlers[n];

            if (h.streamTag === streamTag) {
              h.callback.call(message.streamId, message.streamId, message.streamEvent, streamBlob);
            } else if (h.streamTag === message.streamId) {
              h.callback.call(message.streamId, message.streamId, message.streamEvent, streamBlob);
            }
          }
        }
      }, {
        key: "handleCommand",
        value: function handleCommand(message) {
          console.log('cmd', this, message);
          var command = message.command;
          var args = null;

          if (message.args && message.args.length) {
            args = message.args[0];
          }

          for (var n = 0; n < this.commandHandlers.length; n++) {
            var c = this.commandHandlers[n];
            if (c.command == command) c.callback.call(this, args);
          }
        }
      }, {
        key: "connect",
        value: function connect() {}
      }, {
        key: "onOpen",
        value: function onOpen(evt) {
          console.log('Kervi open', this, evt);
          this.isConnected = true;
          this.eventHandlers = [];
          this.streamHandlers = [];
          this.commandHandlers = [];
          this.queryHandlers = [];
          console.log('Kervi spine ready');
        }
      }, {
        key: "onClose",
        value: function onClose(evt) {
          console.log('Kervi spine on close', evt);
          this.isConnected = false;
          var self = this;
          if (this.options.onClose) this.options.onClose.call(this.options.targetScope, evt);
          this.firstOnOpen = true;

          if (this.options.autoConnect) {
            setTimeout(function () {
              self.connect();
            }, 1000);
          }
        }
      }, {
        key: "authenticate",
        value: function authenticate(userName, password) {}
      }, {
        key: "logoff",
        value: function logoff() {}
      }, {
        key: "onMessage",
        value: function onMessage(evt) {}
      }, {
        key: "onError",
        value: function onError(evt) {
          console.log('Kervi on error', evt);
        }
      }, {
        key: "addCommandHandler",
        value: function addCommandHandler(command, callback) {}
      }, {
        key: "addQueryHandler",
        value: function addQueryHandler(query, callback) {}
      }, {
        key: "sendCommand",
        value: function sendCommand(command) {}
      }, {
        key: "sendQuery",
        value: function sendQuery(query) {}
      }, {
        key: "triggerEvent",
        value: function triggerEvent(eventName, id) {}
      }, {
        key: "streamData",
        value: function streamData(stream_id, event, data) {}
      }]);

      return KerviSpineBase;
    }(); // Copyright (c) 2016, Tim Wentzlau


    var KerviWSSpine = /*#__PURE__*/function (_KerviSpineBase) {
      _inherits(KerviWSSpine, _KerviSpineBase);

      var _super = _createSuper(KerviWSSpine);

      function KerviWSSpine(constructorOptions) {
        var _this;

        _classCallCheck(this, KerviWSSpine);

        _this = _super.call(this, constructorOptions);
        _this.constructorOptions = constructorOptions;

        _this.addEventHandler = function (eventName, id, callback) {
          if (id) this.eventHandlers.push({
            'eventName': eventName + '/' + id,
            callback: callback
          });else this.eventHandlers.push({
            'eventName': eventName,
            callback: callback
          });
          var cmd = {
            id: this.messageId++,
            'messageType': 'registerEventHandler',
            'event': eventName,
            'eventId': id
          }; //console.log('add event handler',cmd);

          this.websocket.send(JSON.stringify(cmd));
        };

        _this.addStreamHandler = function (streamId, streamEvents, callback) {
          if (streamEvents && streamEvents.length > 0) {
            var _iterator = _createForOfIteratorHelper(streamEvents),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var _event = _step.value;
                this.streamHandlers.push({
                  'streamTag': streamId + '/' + _event,
                  callback: callback
                });
                var cmd = {
                  id: this.messageId++,
                  'messageType': 'registerStreamHandler',
                  'streamId': streamId,
                  'streamEvent': _event
                };
                console.log('as', cmd);
                this.websocket.send(JSON.stringify(cmd));
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          } else {
            this.streamHandlers.push({
              'streamTag': streamId,
              callback: callback
            });
            var _cmd = {
              id: this.messageId++,
              'messageType': 'registerStreamHandler',
              'streamId': streamId,
              'streamEvent': event
            };
            console.log('as', _cmd);
            this.websocket.send(JSON.stringify(_cmd));
          }
        };

        _this.removeStreamHandler = function (streamId, streamEvents) {
          if (streamEvents && streamEvents.length > 0) {
            var _iterator2 = _createForOfIteratorHelper(streamEvents),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _event2 = _step2.value;
                //this.streamHandlers.push({'streamTag': streamId + '/' + event, callback: callback});
                var cmd = {
                  id: this.messageId++,
                  'messageType': 'removeStreamHandler',
                  'streamId': streamId,
                  'streamEvent': _event2
                };
                console.log('as', cmd);
                this.websocket.send(JSON.stringify(cmd));
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          } else {
            //this.streamHandlers.push({'streamTag': streamId, callback: callback});
            var _cmd2 = {
              id: this.messageId++,
              'messageType': 'removeStreamHandler',
              'streamId': streamId,
              'streamEvent': event
            };
            console.log('as', _cmd2);
            this.websocket.send(JSON.stringify(_cmd2));
          }
        };

        console.log('kervi spine constructor');
        return _this;
      }

      _createClass(KerviWSSpine, [{
        key: "connect",
        value: function connect() {
          if (this.isConnected) {
            console.log('Kervi is connected');
            return;
          }

          var self = this;
          this.websocket = new WebSocket(this.options.protocol + '://' + this.options.address);
          this.websocket.binaryType = 'arraybuffer';

          this.websocket.onopen = function (evt) {
            console.log('kervi spine on open');
            self.onOpen(evt);
          };

          this.websocket.onclose = function (evt) {
            self.onClose(evt);
          };

          this.websocket.onmessage = function (evt) {
            if (typeof evt.data === 'string') {
              var message = JSON.parse(evt.data);
              self.onMessage(message);
            } else {
              var jsonLen = new Int32Array(evt.data.slice(0, 4))[0];
              var jsonBlob = evt.data.slice(4, jsonLen + 4);
              var streamBlob = evt.data.slice(4 + jsonLen);
              var utf8decoder = new TextDecoder();
              var j = utf8decoder.decode(jsonBlob);
              self.onMessage(JSON.parse(j), streamBlob);
            }
          };

          this.websocket.onerror = function (evt) {
            self.onError(evt);
          };
        }
      }, {
        key: "authenticate",
        value: function authenticate(userName, password) {
          this.options.userName = userName;
          this.options.password = password;
          var cmd = {
            id: this.messageId++,
            'messageType': 'authenticate',
            'userName': userName,
            'password': password
          };
          console.log('swa', cmd);
          this.websocket.send(JSON.stringify(cmd));
        }
      }, {
        key: "logoff",
        value: function logoff() {
          var cmd = {
            id: this.messageId++,
            'messageType': 'logoff',
            'session': this.sessionId
          };
          this.sessionId = null;
          this.websocket.send(JSON.stringify(cmd));
        }
      }, {
        key: "onMessage",
        value: function onMessage(message) {
          var streamBlob = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          // if (message.messageType !== 'stream') {
          //     console.log('on m', message);
          // }
          var self = this;
          var now = new Date();
          var fpsDiff = now.getTime() - this.mpsTime.getTime();
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
            if (this.options.userName) this.authenticate(this.options.userName, this.options.password);else this.options.onAuthenticate.call(this.options.targetScope, message);
          } else if (message.messageType === 'authentication_failed') {
            console.log('authentication failed', this.options.userName);

            if (this.options.userName == 'anonymous') {
              this.allowAnonymous = false;
              this.options.userName = null;
              this.options.password = null;
              this.sessionId = null;

              if (self.options.onLogOff) {
                self.options.onLogOff.call(self.options.targetScope, message);
              }
            } else this.options.onAuthenticateFailed.call(this.options.targetScope, message);
          } else if (message.messageType === 'session_authenticated') {
            var date = new Date();
            date.setTime(date.getTime() + 2 * 60 * 60 * 1000);
            var expires = '; expires=' + date.toUTCString();
            this.sessionId = message.session;
            document.cookie = 'kervisession' + '=' + message.session + expires + '; path=/';
            setTimeout(function () {
              console.log('to', self.options);
              if (self.options.onOpen) self.options.onOpen.call(self.options.targetScope, self.firstOnOpen, message);
              self.firstOnOpen = false;
            }, 100);
          } else if (message.messageType == 'session_logoff') {
            if (self.options.onLogOff) self.options.onLogOff.call(self.options.targetScope, message);

            if (this.allowAnonymous && this.options.userName != 'anonymous') {
              this.authenticate('anonymous', null);
            } else {
              self.options.userName = null;
              self.options.password = null;
              self.sessionId = null;
            }
          } else if (message.messageType == 'response') this.handleRPCResponse(message);else if (message.messageType == 'event') this.handleEvent(message);else if (message.messageType == 'stream') this.handleStream(message, streamBlob);else if (message.messageType == 'command') this.handleCommand(message);else console.log('Kervi spine message unknown', this.rpcQueue, message);
        }
      }, {
        key: "onError",
        value: function onError(evt) {
          console.log('Kervi on error', evt);
        }
      }, {
        key: "addCommandHandler",
        value: function addCommandHandler(command, callback) {
          this.commandHandlers.push({
            command: command,
            callback: callback
          });
          var cmd = {
            id: this.messageId++,
            'messageType': 'registerCommandHandler',
            'command': command
          };
          this.websocket.send(JSON.stringify(cmd));
        }
      }, {
        key: "addQueryHandler",
        value: function addQueryHandler(query, callback) {
          this.queryHandlers.push({
            query: query,
            callback: callback
          });
          var cmd = {
            id: this.messageId++,
            'messageType': 'registerQueryHandler',
            'query': query
          };
          this.websocket.send(JSON.stringify(cmd));
        }
      }, {
        key: "sendCommand",
        value: function sendCommand(command) {
          for (var _len2 = arguments.length, p = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            p[_key2 - 1] = arguments[_key2];
          }

          console.log('sec', arguments);
          var args = [];
          var callback = null;

          for (var i = 0; i < p.length; i++) {
            if (p[i] instanceof Function) callback = p[i];else args.push(p[i]);
          }

          var cmd = {
            id: this.messageId++,
            'messageType': 'command',
            'command': command,
            'args': args
          };
          if (callback && callback instanceof Function) this.addRPCCallback(cmd.id.toString(), callback, null, 0);
          console.log('sendCommand', this, cmd);
          this.websocket.send(JSON.stringify(cmd));
        }
      }, {
        key: "sendQuery",
        value: function sendQuery(query) {
          var args = [];
          var callback = null;
          var callbackTimeout = null;
          var timeout = 10000;

          for (var _len3 = arguments.length, p = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
            p[_key3 - 1] = arguments[_key3];
          }

          for (var i = 0; i < p.length; i++) {
            if (p[i] instanceof Function) {
              if (!callback) callback = p[i];else callbackTimeout = p[i];
            } else {
              if (callbackTimeout) timeout = p[i];else args.push(p[i]);
            }
          }

          var cmd = {
            id: this.messageId++,
            'messageType': 'query',
            'query': query,
            'args': args
          };
          this.addRPCCallback(cmd.id.toString(), callback, callbackTimeout, timeout);
          console.log('sendQuery', callback, cmd);
          this.websocket.send(JSON.stringify(cmd));
        }
      }, {
        key: "triggerEvent",
        value: function triggerEvent(eventName, id) {
          var e = {
            id: this.messageId++,
            'messageType': 'event',
            'event': eventName,
            'args': arguments
          };
          this.websocket.send(JSON.stringify(e));
        }
      }]);

      return KerviWSSpine;
    }(KerviSpineBase); // Copyright (c) 2016, Tim Wentzlau


    var KerviRMQSpine = /*#__PURE__*/function (_KerviSpineBase2) {
      _inherits(KerviRMQSpine, _KerviSpineBase2);

      var _super2 = _createSuper(KerviRMQSpine);

      function KerviRMQSpine(constructorOptions) {
        var _this2;

        _classCallCheck(this, KerviRMQSpine);

        _this2 = _super2.call(this, constructorOptions);
        _this2.constructorOptions = constructorOptions;
        _this2.exchange = "/exchange/";

        _this2.addEventHandler = function (eventName, id, callback) {
          if (id) this.eventHandlers.push({
            "eventName": eventName + "/" + id,
            callback: callback
          });else this.eventHandlers.push({
            "eventName": eventName,
            callback: callback
          });
          var cmd = {
            id: this.messageId++,
            "messageType": "registerEventHandler",
            "event": eventName,
            "eventId": id
          };
          this.websocket.send(this.exchange, {
            topic: "registerEventHandler",
            router_id: this.socketSession
          }, JSON.stringify(cmd));
        };

        console.log("Kervi io spine init y", _this2.options, constructorOptions);
        return _this2;
      }

      _createClass(KerviRMQSpine, [{
        key: "onMQError",
        value: function onMQError(frame) {
          console.log("MQ error", frame);
        }
      }, {
        key: "connect",
        value: function connect() {
          if (this.isConnected) {
            console.log("Kervi is connected");
            return;
          }

          var self = this; //var mqUrl= this.options.protocol + "://" + this.options.address

          var mqUrl = "wss://mq.kervi.io:15673/ws";
          this.websocket = Stomp.client(mqUrl);
          this.websocket.heartbeat.incoming = 0;
          self.exchange = "/exchange/" + self.options.apiToken.app_id;
          console.log("exchange", self.exchange);
          this.websocket.connect(self.options.apiToken.api_token, "ui", function (frame) {
            console.log("MQ connect", frame, self.websocket, this, self);
            self.socketSession = frame.headers.session;
            self.exchange = "/exchange/" + self.options.apiToken.app_id;
            self.websocket.subscribe(self.exchange, function (message) {
              console.log("mq ", message);
              if (message.headers["topic"]) message.headers["topic"] = message.headers["topic"].replace(new RegExp("\\c", "g"), ":");

              if (message.command == "CONNECTED") {} else if (message.headers["topic"] == "ping") self.onPing(message);else self.onMessage(message);
            }, {});
          }, self.onMQError, self.options.apiToken.api_channel);
        }
      }, {
        key: "onPing",
        value: function onPing(message) {
          console.log("onping", this.options.appId, message);
          var self = this;

          if (!this.isConnected && message.headers["connection_id"] == self.options.apiToken.app_id) {
            this.onOpen(message);
            this.websocket.send(self.exchange, {
              topic: "session:new",
              router_id: message.headers["router_id"],
              session_id: this.socketSession
            }, "{}");
          }
        }
      }, {
        key: "authenticate",
        value: function authenticate(userName, password) {
          this.options.userName = userName;
          this.options.password = password;
          if (this.options.onAuthenticateStart) this.options.onAuthenticateStart.call(this.options.targetScope);
          var cmd = {
            id: this.messageId++,
            "messageType": "authenticate",
            "userName": this.options.userName,
            "password": this.options.password
          };
          this.websocket.send(JSON.stringify(cmd));
        }
      }, {
        key: "logoff",
        value: function logoff() {
          //this.options.userName = this.allowAnonymous ? "anonymous" : null;
          //this.options.password = null;
          var cmd = {
            id: this.messageId++,
            "messageType": "logoff",
            "session": this.sessionId
          };
          this.sessionId = null;
          this.websocket.send(JSON.stringify(cmd));
        }
      }, {
        key: "onMessage",
        value: function onMessage(evt) {
          console.log("on m", evt);
          var message = JSON.parse(evt.body);
          var self = this;
          var topic = evt.headers["topic"];

          if (topic == "authenticate") {
            console.log("authenticate");
            this.doAuthenticate = true;
            if (this.options.userName) this.authenticate(this.options.userName, this.options.password);else this.options.onAuthenticate.call(this.options.targetScope, evt);
          } else if (topic == "authentication_failed") {
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
            } else this.options.onAuthenticateFailed.call(this.options.targetScope, evt);
          } else if (topic == "session_authenticated") {
            var date = new Date();
            date.setTime(date.getTime() + 2 * 60 * 60 * 1000);
            var expires = "; expires=" + date.toUTCString();
            this.sessionId = message.session;
            document.cookie = "kervisession" + "=" + message.session + expires + "; path=/";
            setTimeout(function () {
              if (self.options.onOpen) self.options.onOpen.call(self.options.targetScope, self.firstOnOpen, evt);
              self.firstOnOpen = false;
            }, 100);
          } else if (topic == "session_logoff") {
            if (self.options.onLogOff) self.options.onLogOff.call(self.options.targetScope, evt);

            if (this.allowAnonymous && this.options.userName != "anonymous") {
              this.authenticate("anonymous", null);
            } else {
              self.options.userName = null;
              self.options.password = null;
              self.sessionId = null;
            }
          } else if (evt.headers["type"] == "query_response") {
            this.handleRPCResponse({
              id: evt.headers["query_id"],
              response: message
            });
          } else if (evt.headers["type"] == "event") {
            console.log("e", evt);
            var topic_tag = evt.headers["topic"].split(":");
            this.handleEvent({
              event: topic_tag[1],
              id: topic_tag[2],
              args: message.args
            });
          } else if (message.messageType == "command") this.handleCommand(message);else console.log("Kervi spine message unknown", this.rpcQueue, evt);
        }
      }, {
        key: "onError",
        value: function onError(evt) {
          console.log("Kervi on error", evt);
        }
      }, {
        key: "addCommandHandler",
        value: function addCommandHandler(command, callback) {
          this.commandHandlers.push({
            command: command,
            callback: callback
          });
          var cmd = {
            id: this.messageId++,
            "messageType": "registerCommandHandler",
            "command": command
          }; //this.websocket.send(JSON.stringify(cmd));

          this.websocket.send(this.exchange, {
            topic: "registerCommandHandler",
            router_id: this.socketSession
          }, JSON.stringify(cmd));
        }
      }, {
        key: "addQueryHandler",
        value: function addQueryHandler(query, callback) {
          this.queryHandlers.push({
            query: query,
            callback: callback
          });
          var cmd = {
            id: this.messageId++,
            "messageType": "registerQueryHandler",
            "query": query
          };
          this.websocket.send(this.exchange, {
            topic: "registerQueryHandler",
            router_id: this.socketSession
          }, JSON.stringify(cmd));
        }
      }, {
        key: "sendCommand",
        value: function sendCommand(command) {
          for (var _len4 = arguments.length, p = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
            p[_key4 - 1] = arguments[_key4];
          }

          console.log("sec", arguments);
          var args = [];
          var callback = null;

          for (var i = 0; i < p.length; i++) {
            if (p[i] instanceof Function) callback = p[i];else args.push(p[i]);
          }
          /*if (p.length>1){
              var argOffset=1;
              if ( callback && callback instanceof Function )
                  argOffset+=1;
              for (var i=argOffset;(i<arguments.length);i++){
                  args.push(arguments[i]);
              }
          }*/


          var cmd = {
            id: this.messageId++,
            "args": args,
            kwargs: {}
          };
          if (callback && callback instanceof Function) this.addRPCCallback(cmd.id.toString(), callback, null, 0);
          console.log("sendCommand", this, cmd);
          this.websocket.send(this.exchange, {
            topic: "command:" + command,
            router_id: this.socketSession
          }, JSON.stringify(cmd));
        }
      }, {
        key: "sendQuery",
        value: function sendQuery(query) {
          var args = [];
          var callback = null;
          var callbackTimeout = null;
          var timeout = 10000;

          for (var _len5 = arguments.length, p = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
            p[_key5 - 1] = arguments[_key5];
          }

          for (var i = 0; i < p.length; i++) {
            if (p[i] instanceof Function) {
              if (!callback) callback = p[i];else callbackTimeout = p[i];
            } else {
              if (callbackTimeout) timeout = p[i];else args.push(p[i]);
            }
          }

          var cmd = {
            id: this.messageId++,
            "messageType": "query",
            "query": query,
            "args": args,
            kwargs: [],
            qts: 0
          };
          this.addRPCCallback(cmd.id.toString(), callback, callbackTimeout, timeout);
          console.log("sendQuery", callback, cmd); //this.websocket.send(JSON.stringify(cmd));

          this.websocket.send(this.exchange, {
            topic: "query:" + query,
            qts: 0,
            query_id: cmd.id.toString(),
            router_id: this.socketSession,
            response_address: this.socketSession
          }, JSON.stringify(cmd));
        }
      }, {
        key: "triggerEvent",
        value: function triggerEvent(eventName, id) {
          var e = {
            id: this.messageId++,
            "messageType": "event",
            "event": eventName,
            "args": arguments
          };
          this.websocket.send(JSON.stringify(e));
        }
      }]);

      return KerviRMQSpine;
    }(KerviSpineBase);

    var DashboardLink =
    /*constructor(dashboardId:string, sectionId:string, sectionName:string){
        this.dashboardId = dashboardId;
        this.sectionId = sectionId;
        this.sectionName = sectionName;
    }*/
    function DashboardLink(component, message) {
      _classCallCheck(this, DashboardLink);

      this.dashboardId = message.dashboardId;
      this.panelId = message.sectionId;
      this.panelName = message.sectionName;
      this.component = component;
      this.parameters = message.parameters;
    }; // Copyright (c) 2016, Tim Wentzlau


    var KerviValue = function KerviValue() {
      _classCallCheck(this, KerviValue);

      this.componentType = "KerviValue";
      this.typeName = null;
      this.dashboards = [];
      this.ui = {
        type: "",
        orientation: "",
        visible: true
      };
    };

    var KerviValueType = /*#__PURE__*/function (_KerviValue) {
      _inherits(KerviValueType, _KerviValue);

      var _super3 = _createSuper(KerviValueType);

      function KerviValueType(message, kerviService) {
        var _this3;

        _classCallCheck(this, KerviValueType);

        _this3 = _super3.call(this);
        _this3.kerviService = null;
        _this3.kerviService = kerviService;
        _this3.value$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](message.value);
        _this3.name = message.name;
        _this3.isInput = message.isInput;
        _this3.ui = message.ui;
        _this3.command = message.command;
        _this3.id = message.id;
        _this3.ui["type"] = message.componentType;
        _this3.ui["orientation"] = message.orientation;
        _this3.ui["visible"] = message.visible;

        for (var prop in message.ui) {
          if (_this3.ui[prop] != undefined) _this3.ui[prop] = message.ui[prop];
        }

        var _iterator3 = _createForOfIteratorHelper(message.dashboardLinks),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var dashboardLink = _step3.value;

            _this3.dashboards.push(new DashboardLink(_assertThisInitialized(_this3), dashboardLink));
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        return _this3;
      }

      _createClass(KerviValueType, [{
        key: "set",
        value: function set(v) {
          var notify = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          this.value$.next(v);
          if (notify) this.kerviService.spine.sendCommand(this.command, v);
        }
      }, {
        key: "value",
        get: function get() {
          //console.log("gv", this.id, this.value$.value)
          return this.value$.value;
        },
        set: function set(value) {
          console.log("sv", this.id);
          this.value$.next(value);
          this.kerviService.spine.sendCommand(this.command, value);
        }
      }]);

      return KerviValueType;
    }(KerviValue);

    var ValueRangeType;

    (function (ValueRangeType) {
      ValueRangeType[ValueRangeType["normal"] = 0] = "normal";
      ValueRangeType[ValueRangeType["warning"] = 1] = "warning";
      ValueRangeType[ValueRangeType["error"] = 2] = "error";
    })(ValueRangeType || (ValueRangeType = {}));

    ;

    var ValueRange = function ValueRange(range) {
      _classCallCheck(this, ValueRange);

      this.start = null;
      this.end = null;
      this.type = null;
      this.start = range["start"];
      this.end = range["end"];
      if (range["type"] == "warning") this.type = ValueRangeType.warning;else if (range["type"] == "error") this.type = ValueRangeType.error;else this.type = ValueRangeType.normal;
    };

    var KerviEnumOptionModel = /*#__PURE__*/function () {
      function KerviEnumOptionModel(messageOption) {
        _classCallCheck(this, KerviEnumOptionModel);

        this.selected$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.value = messageOption.value;
        this.text = messageOption.text;
        this.selected$.next(messageOption.selected);
      }

      _createClass(KerviEnumOptionModel, [{
        key: "updateReferences",
        value: function updateReferences() {}
      }, {
        key: "reload",
        value: function reload(component) {}
      }, {
        key: "removeReferences",
        value: function removeReferences(components) {}
      }]);

      return KerviEnumOptionModel;
    }();

    var SelectValue = /*#__PURE__*/function (_KerviValueType) {
      _inherits(SelectValue, _KerviValueType);

      var _super4 = _createSuper(SelectValue);

      function SelectValue(message, kerviService) {
        var _this4;

        _classCallCheck(this, SelectValue);

        _this4 = _super4.call(this, message, kerviService);
        _this4.options = [];
        _this4.lastSelected$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);

        var self = _assertThisInitialized(_this4);

        _this4.options = [];

        var _iterator4 = _createForOfIteratorHelper(message.options),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var option = _step4.value;

            _this4.options.push(new KerviEnumOptionModel(option));
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }

        _this4.selectOptions(_this4.value$.value);

        _this4.value$.subscribe(function (v) {
          self.selectOptions(v);
        });

        return _this4;
      }

      _createClass(SelectValue, [{
        key: "getDefaultValue",
        value: function getDefaultValue() {
          return [];
        }
      }, {
        key: "selectOptions",
        value: function selectOptions(selectedOptions) {
          console.log("soc");
          if (!selectedOptions) return;

          var _iterator5 = _createForOfIteratorHelper(this.options),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var option = _step5.value;
              option.selected$.next(false);
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }

          var _iterator6 = _createForOfIteratorHelper(selectedOptions),
              _step6;

          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var selectedOption = _step6.value;
              console.log("so", selectedOption);

              var _iterator7 = _createForOfIteratorHelper(this.options),
                  _step7;

              try {
                for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                  var _option = _step7.value;
                  console.log("sox", _option);

                  if (_option.value == selectedOption) {
                    _option.selected$.next(true);

                    this.lastSelected$.next(_option);
                    console.log("os", _option.text, _option.selected$.value);
                    break;
                  }
                }
              } catch (err) {
                _iterator7.e(err);
              } finally {
                _iterator7.f();
              }
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }
        }
      }]);

      return SelectValue;
    }(KerviValueType);

    var NumberValue = /*#__PURE__*/function (_KerviValueType2) {
      _inherits(NumberValue, _KerviValueType2);

      var _super5 = _createSuper(NumberValue);

      function NumberValue(message, kerviService) {
        var _this5;

        _classCallCheck(this, NumberValue);

        _this5 = _super5.call(this, message, kerviService);
        _this5.qtyUnitTo = null;
        _this5.sparkline$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        _this5.ranges = [];
        _this5.unit = message.unit;
        _this5.typeName = "Number";
        _this5.qtyUnitFrom = message.unit;

        if (_this5.unit == "c" && kerviService.application$.value["display"]["unit_system"]["temperature"] == "F") {
          _this5.qtyUnitFrom = "tempC";
          _this5.qtyUnitTo = "tempF";
          _this5.unit = "F";
        }

        var _iterator8 = _createForOfIteratorHelper(message.ranges),
            _step8;

        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var range = _step8.value;

            if (_this5.qtyUnitTo) {
              var q = new Qty(range["start"], _this5.qtyUnitFrom);
              range["start"] = q.to(_this5.qtyUnitTo).scalar;
              var q = new Qty(range["end"], _this5.qtyUnitFrom);
              range["end"] = q.to(_this5.qtyUnitTo).scalar;

              _this5.ranges.push(new ValueRange(range));
            } else _this5.ranges.push(new ValueRange(range));
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }

        if (_this5.qtyUnitTo && message.maxValue) {
          var q = new Qty(message.maxValue, _this5.qtyUnitFrom);
          _this5.maxValue = q.to(_this5.qtyUnitTo).scalar;
        } else _this5.maxValue = message.maxValue;

        if (_this5.qtyUnitTo && message.minValue) {
          var q = new Qty(message.minValue, _this5.qtyUnitFrom);
          _this5.minValue = q.to(_this5.qtyUnitTo).scalar;
        } else _this5.minValue = message.minValue;

        var spl = [];

        var _iterator9 = _createForOfIteratorHelper(message.sparkline),
            _step9;

        try {
          for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
            var spv = _step9.value;

            if (_this5.qtyUnitTo) {
              console.log("spv", spv);
              var q = new Qty(spv.value, _this5.qtyUnitFrom); //spv.value = q.to(this.qtyUnitTo).scalar;
            }

            spl.push(spv);
          }
        } catch (err) {
          _iterator9.e(err);
        } finally {
          _iterator9.f();
        }

        _this5.sparkline$.next(spl);

        _this5.set(message.value, false);

        return _this5;
      }

      _createClass(NumberValue, [{
        key: "getDefaultValue",
        value: function getDefaultValue() {
          return 0;
        }
      }, {
        key: "set",
        value: function set(v) {
          var notify = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          var newValue = v;

          if (this.qtyUnitTo) {
            var q = new Qty(v, this.qtyUnitFrom);
            newValue = q.to(this.qtyUnitTo).scalar;
          }

          this.value$.next(newValue);
          if (notify) this.kerviService.spine.sendCommand(this.command, v);
          var spl = this.sparkline$.value;
          spl.push(newValue);
          if (spl.length > 10) spl.shift();
          this.sparkline$.next(spl);
        }
      }]);

      return NumberValue;
    }(KerviValueType);

    var StringValue = /*#__PURE__*/function (_KerviValueType3) {
      _inherits(StringValue, _KerviValueType3);

      var _super6 = _createSuper(StringValue);

      _createClass(StringValue, [{
        key: "getDefaultValue",
        value: function getDefaultValue() {
          return "";
        }
      }]);

      function StringValue(message, kerviService) {
        var _this6;

        _classCallCheck(this, StringValue);

        _this6 = _super6.call(this, message, kerviService);
        _this6.typeName = "String";
        return _this6;
      }

      return StringValue;
    }(KerviValueType);

    var BooleanValue = /*#__PURE__*/function (_KerviValueType4) {
      _inherits(BooleanValue, _KerviValueType4);

      var _super7 = _createSuper(BooleanValue);

      function BooleanValue(message, kerviService) {
        var _this7;

        _classCallCheck(this, BooleanValue);

        _this7 = _super7.call(this, message, kerviService);
        _this7.typeName = "Boolean";
        return _this7;
      }

      _createClass(BooleanValue, [{
        key: "getDefaultValue",
        value: function getDefaultValue() {
          return false;
        }
      }]);

      return BooleanValue;
    }(KerviValueType);

    var DateTimeValue = /*#__PURE__*/function (_KerviValueType5) {
      _inherits(DateTimeValue, _KerviValueType5);

      var _super8 = _createSuper(DateTimeValue);

      function DateTimeValue(message, kerviService) {
        var _this8;

        _classCallCheck(this, DateTimeValue);

        _this8 = _super8.call(this, message, kerviService);
        _this8.subType = message.inputType;
        _this8.typeName = "DateTime";
        return _this8;
      }

      _createClass(DateTimeValue, [{
        key: "getDefaultValue",
        value: function getDefaultValue() {
          return new Date();
        }
      }]);

      return DateTimeValue;
    }(KerviValueType);

    var ColorValue = /*#__PURE__*/function (_KerviValueType6) {
      _inherits(ColorValue, _KerviValueType6);

      var _super9 = _createSuper(ColorValue);

      function ColorValue(message, kerviService) {
        var _this9;

        _classCallCheck(this, ColorValue);

        _this9 = _super9.call(this, message, kerviService);
        _this9.typeName = "Color";
        return _this9;
      }

      _createClass(ColorValue, [{
        key: "getDefaultValue",
        value: function getDefaultValue() {
          return "#ffffff";
        }
      }]);

      return ColorValue;
    }(KerviValueType);

    var ComponentRef = function ComponentRef(message) {
      _classCallCheck(this, ComponentRef);

      this.id = message.id;
    }; // Copyright (c) 2016, Tim Wentzlau


    var Controller = /*#__PURE__*/function () {
      function Controller(message, kerviService) {
        _classCallCheck(this, Controller);

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

        var _iterator10 = _createForOfIteratorHelper(message.inputs),
            _step10;

        try {
          for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
            var ref = _step10.value;
            this.inputReferences.push(new ComponentRef(ref));
          }
        } catch (err) {
          _iterator10.e(err);
        } finally {
          _iterator10.f();
        }

        var _iterator11 = _createForOfIteratorHelper(message.outputs),
            _step11;

        try {
          for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
            var ref = _step11.value;
            this.outputReferences.push(new ComponentRef(ref));
          }
        } catch (err) {
          _iterator11.e(err);
        } finally {
          _iterator11.f();
        }

        var _iterator12 = _createForOfIteratorHelper(message.actions),
            _step12;

        try {
          for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
            var ref = _step12.value;
            this.actionsReferences.push(new ComponentRef(ref));
          }
        } catch (err) {
          _iterator12.e(err);
        } finally {
          _iterator12.f();
        }

        var _iterator13 = _createForOfIteratorHelper(message.dashboardLinks),
            _step13;

        try {
          for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
            var dashboardLink = _step13.value;
            this.dashboards.push(new DashboardLink(this, dashboardLink));
          }
        } catch (err) {
          _iterator13.e(err);
        } finally {
          _iterator13.f();
        }
      }

      _createClass(Controller, [{
        key: "updateReferences",
        value: function updateReferences() {
          if (this.inputs.length == 0) {
            var _iterator14 = _createForOfIteratorHelper(this.inputReferences),
                _step14;

            try {
              for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                var ref = _step14.value;
                var component = this.kerviService.getComponent(ref.id);
                if (component) this.inputs.push(component);
              }
            } catch (err) {
              _iterator14.e(err);
            } finally {
              _iterator14.f();
            }
          }

          if (this.outputs.length == 0) {
            var _iterator15 = _createForOfIteratorHelper(this.outputReferences),
                _step15;

            try {
              for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                var ref = _step15.value;
                var component = this.kerviService.getComponent(ref.id);
                if (component) this.outputs.push(component);
              }
            } catch (err) {
              _iterator15.e(err);
            } finally {
              _iterator15.f();
            }
          }

          if (this.actions.length == 0) {
            var _iterator16 = _createForOfIteratorHelper(this.actionsReferences),
                _step16;

            try {
              for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                var ref = _step16.value;
                var component = this.kerviService.getComponent(ref.id);
                if (component) this.actions.push(component);
              }
            } catch (err) {
              _iterator16.e(err);
            } finally {
              _iterator16.f();
            }
          }
        }
      }, {
        key: "removeReferences",
        value: function removeReferences(components) {}
      }, {
        key: "reload",
        value: function reload(component) {}
      }]);

      return Controller;
    }(); // Copyright (c) 2016, Tim Wentzlau
    // Licensed under MIT


    var DashboardSizes = function DashboardSizes() {
      _classCallCheck(this, DashboardSizes);

      this.valueWidth = '3rem';
      this.buttonWidth = '25px';
      this.buttonHeight = '';
      this.switchWidth = '25px';
      this.switchHeight = '25px';
      this.gaugeWidth = '100px';
      this.gaugeHeight = '200px';
    };

    var DashboardMessageModel = function DashboardMessageModel(message) {
      _classCallCheck(this, DashboardMessageModel);

      this.timestamp = new Date(message.timestamp * 1000);
      this.topic = message.topic;
      this.body = message.body;
      this.type = message.type;
      this.sourceId = message.source_id;
      this.sourceName = message.source_name;
      this.area = message.area;
      this.level = message.level;
    };

    var DashboardPanelComponent = function DashboardPanelComponent(message) {
      _classCallCheck(this, DashboardPanelComponent);

      this.message = message;
      this.linkId = message.linkId;
      this.componentId = message.componentId;
      this.component = message.component;
      this.parameters = message.parameters;
    };

    var DashboardPanelParameters = /*#__PURE__*/function () {
      function DashboardPanelParameters(messageParameters) {
        _classCallCheck(this, DashboardPanelParameters);

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

      _createClass(DashboardPanelParameters, [{
        key: "calcSize",
        value: function calcSize(value) {
          if (value == null) return '';else if (value === '') return '';else if (isNaN(value)) {
            return value;
          } else if (value > 0) return value + '%';else return '';
        }
      }]);

      return DashboardPanelParameters;
    }();

    var DashboardPanel = /*#__PURE__*/function () {
      function DashboardPanel(dashboard, messagePanel) {
        _classCallCheck(this, DashboardPanel);

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
          //console.log('spa',messagePanel.panels);
          var _iterator17 = _createForOfIteratorHelper(messagePanel.panels),
              _step17;

          try {
            for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
              var subMessagePanel = _step17.value;
              var panel = new DashboardPanel(this, subMessagePanel);
              this.subPanels.push(panel);
              if (panel.type !== 'group') this.hasOnlyGroupPanels = false;
            }
          } catch (err) {
            _iterator17.e(err);
          } finally {
            _iterator17.f();
          }
        }
      }

      _createClass(DashboardPanel, [{
        key: "reload",
        value: function reload(source) {
          //console.log('rl', this);
          var _iterator18 = _createForOfIteratorHelper(source.subPanels),
              _step18;

          try {
            for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
              var subPanel = _step18.value;
              this.reload(subPanel);
            }
          } catch (err) {
            _iterator18.e(err);
          } finally {
            _iterator18.f();
          }

          var _iterator19 = _createForOfIteratorHelper(source.components),
              _step19;

          try {
            for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
              var sourceComponent = _step19.value;
              var found = false;

              var _iterator21 = _createForOfIteratorHelper(this.components),
                  _step21;

              try {
                for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                  var component = _step21.value;

                  if (component.componentId == sourceComponent.componentId) {
                    found = true;
                  }
                }
              } catch (err) {
                _iterator21.e(err);
              } finally {
                _iterator21.f();
              }

              if (!found) {
                this.components.push(sourceComponent);
              }
            }
          } catch (err) {
            _iterator19.e(err);
          } finally {
            _iterator19.f();
          }

          var deleteComponents = [];

          var _iterator20 = _createForOfIteratorHelper(this.components),
              _step20;

          try {
            for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
              var component = _step20.value;
              var found = false;

              var _iterator22 = _createForOfIteratorHelper(source.components),
                  _step22;

              try {
                for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                  var sourceComponent = _step22.value;

                  if (sourceComponent.componentId == component.componentId) {
                    found = true;
                    break;
                  }
                }
              } catch (err) {
                _iterator22.e(err);
              } finally {
                _iterator22.f();
              }

              if (!found) deleteComponents.push(component);
            } //console.log('dsc',deleteComponents);

          } catch (err) {
            _iterator20.e(err);
          } finally {
            _iterator20.f();
          }

          for (var _i2 = 0, _deleteComponents = deleteComponents; _i2 < _deleteComponents.length; _i2++) {
            var component = _deleteComponents[_i2];
            this.components.splice(this.components.indexOf(component), 1);
          }
        }
      }]);

      return DashboardPanel;
    }();

    var DashboardBackgroundModel = function DashboardBackgroundModel(message) {
      _classCallCheck(this, DashboardBackgroundModel);

      this.type = message.type;
      this.cameraId = message.cameraId;
    };

    var Dashboard = /*#__PURE__*/function () {
      function Dashboard(message) {
        _classCallCheck(this, Dashboard);

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
        this.unitSize = message.unitSize; //this.background=new DashboardBackgroundModel(message.background);

        this.panels = [];
        this.sysPanels = [];

        if (!this.template) {
          var _iterator23 = _createForOfIteratorHelper(message.sections),
              _step23;

          try {
            for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
              var messagePanel = _step23.value;

              if (!messagePanel) {
                console.log('dashboard with null panel', this.id);
                continue;
              }

              var panel = new DashboardPanel(this, messagePanel);
              var sysPanel = true;
              if (panel.id == 'header_center') this.headerPanel = panel;else if (panel.id == 'footer_left') this.footerLeftPanel = panel;else if (panel.id == 'footer_center') this.footerCenterPanel = panel;else if (panel.id == 'footer_right') this.footerRightPanel = panel;else if (panel.id == 'header_right') this.sysPanel = panel;else if (panel.id == 'controllers') this.controllerPanel = panel;else if (panel.id == 'background') this.backgroundPanel = panel;else if (panel.id == 'left_pad_x') this.LeftPadXPanel = panel;else if (panel.id == 'left_pad_y') this.LeftPadYPanel = panel;else if (panel.id == 'right_pad_x') this.RightPadXPanel = panel;else if (panel.id == 'right_pad_y') this.RightPadYPanel = panel;else {
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
                  } else {
                    this.currentPanel.subPanels.push(panel);
                  }
                } else {
                  this.panels.push(panel);
                  this.currentPanel = null;
                }
              }
              if (sysPanel) this.sysPanels.push(panel);
            }
          } catch (err) {
            _iterator23.e(err);
          } finally {
            _iterator23.f();
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
            }); //this.currentPanel.subPanels.push(panel);

            this.panels.push(this.currentPanel);
          }
        }
      }

      _createClass(Dashboard, [{
        key: "isEmpty",
        value: function isEmpty() {
          if (this.panels.length == 1 && this.panels[0].components.length === 0) {
            return true;
          }

          return false;
        }
      }, {
        key: "removeReferences",
        value: function removeReferences(deleteComponents) {}
      }, {
        key: "updateReferences",
        value: function updateReferences() {}
      }, {
        key: "reload",
        value: function reload(component) {
          var source = component;
          if (!this.backgroundPanel && source.backgroundPanel) this.backgroundPanel = source.backgroundPanel;else if (this.backgroundPanel && !source.backgroundPanel) this.backgroundPanel = null;else if (this.backgroundPanel) this.backgroundPanel.reload(source.backgroundPanel);
          if (!this.footerLeftPanel && source.footerLeftPanel) this.footerLeftPanel = source.footerLeftPanel;else if (this.footerLeftPanel && !source.footerLeftPanel) this.footerLeftPanel = null;else if (this.footerLeftPanel) this.footerLeftPanel.reload(source.footerLeftPanel);
          if (!this.footerRightPanel && source.footerRightPanel) this.footerRightPanel = source.footerRightPanel;else if (this.footerRightPanel && !source.footerRightPanel) this.footerRightPanel = null;else if (this.footerRightPanel) this.footerRightPanel.reload(source.footerRightPanel);
          if (!this.footerCenterPanel && source.footerCenterPanel) this.footerCenterPanel = source.footerCenterPanel;else if (this.footerCenterPanel && !source.footerCenterPanel) this.footerCenterPanel = null;else if (this.footerCenterPanel) this.footerCenterPanel.reload(source.footerCenterPanel);
          /*if (!this.headerPanel && source.headerPanel)
              this.headerPanel=source.headerPanel;
          else if (this.headerPanel && !source.headerPanel)
              this.headerPanel = null
          else if (this.headerPanel)
              this.headerPanel.reload(source.headerPanel)*/

          if (!this.sysPanel && source.sysPanel) this.sysPanel = source.sysPanel;else if (this.sysPanel && !source.sysPanel) this.sysPanel = null;else if (this.sysPanel) this.sysPanel.reload(source.sysPanel);
          if (!this.LeftPadXPanel && source.LeftPadXPanel) this.LeftPadXPanel = source.LeftPadXPanel;else if (this.LeftPadXPanel && !source.LeftPadXPanel) this.LeftPadXPanel = null;else if (this.LeftPadXPanel) this.LeftPadXPanel.reload(source.LeftPadXPanel);
          if (!this.LeftPadYPanel && source.LeftPadYPanel) this.LeftPadYPanel = source.LeftPadYPanel;else if (this.LeftPadYPanel && !source.LeftPadYPanel) this.LeftPadYPanel = null;else if (this.LeftPadYPanel) this.LeftPadYPanel.reload(source.LeftPadYPanel);
          if (!this.RightPadXPanel && source.RightPadXPanel) this.RightPadXPanel = source.RightPadXPanel;else if (this.RightPadXPanel && !source.RightPadXPanel) this.RightPadXPanel = null;else if (this.RightPadXPanel) this.RightPadXPanel.reload(source.RightPadXPanel);
          if (!this.RightPadYPanel && source.RightPadYPanel) this.RightPadYPanel = source.RightPadYPanel;else if (this.RightPadYPanel && !source.RightPadYPanel) this.RightPadYPanel = null;else if (this.RightPadYPanel) this.RightPadYPanel.reload(source.RightPadYPanel);
          if (!this.controllerPanel && source.controllerPanel) this.controllerPanel = source.controllerPanel;else if (this.controllerPanel && !source.controllerPanel) this.controllerPanel = null;else if (this.controllerPanel) this.controllerPanel.reload(source.controllerPanel);
        }
      }, {
        key: "getDashboardPanelById",
        value: function getDashboardPanelById(id, panels) {
          var _iterator24 = _createForOfIteratorHelper(panels),
              _step24;

          try {
            for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
              var panel = _step24.value;
              if (panel.id == id) return panel;else {
                var res = this.getDashboardPanelById(id, panel.subPanels);
                if (res) return res;
              }
            }
          } catch (err) {
            _iterator24.e(err);
          } finally {
            _iterator24.f();
          }

          return null;
        }
      }, {
        key: "addDashboardLink",
        value: function addDashboardLink(link) {
          if (link.dashboardId == '*' || link.dashboardId == this.id || link.dashboardId == '**default**' && this.isDefault) {
            var panelFound = false;
            var panel = this.getDashboardPanelById(link.panelId, this.panels);
            if (!panel) panel = this.getDashboardPanelById(link.panelId, this.sysPanels);

            if (panel) {
              panel.components.push(new DashboardPanelComponent(link));
            } else {
              // console.log('adh',link);
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
              var newPanel = new DashboardPanel(this, messagePanel);
              this.currentPanel.subPanels.push(newPanel);
              newPanel.components.push(new DashboardPanelComponent(link));
            }
          }
        }
      }]);

      return Dashboard;
    }(); // Copyright (c) 2016, Tim Wentzlau


    var Action = /*#__PURE__*/function () {
      function Action(message, kerviService) {
        _classCallCheck(this, Action);

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

        var _iterator25 = _createForOfIteratorHelper(message.dashboardLinks),
            _step25;

        try {
          for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
            var dashboardLink = _step25.value;
            this.dashboards.push(new DashboardLink(this, dashboardLink));
          }
        } catch (err) {
          _iterator25.e(err);
        } finally {
          _iterator25.f();
        }
      }

      _createClass(Action, [{
        key: "run",
        value: function run(parameters) {
          var _this$kerviService$sp;

          //if (!this.running$.value){
          if (parameters && parameters.length > 0) (_this$kerviService$sp = this.kerviService.spine).sendCommand.apply(_this$kerviService$sp, [this.runCommand].concat(_toConsumableArray(parameters)));else this.kerviService.spine.sendCommand(this.runCommand); //}
        }
      }, {
        key: "interrupt",
        value: function interrupt(parameters) {
          var _this$kerviService$sp2;

          if (parameters && parameters.length > 0) (_this$kerviService$sp2 = this.kerviService.spine).sendCommand.apply(_this$kerviService$sp2, [this.interruptCommand].concat(_toConsumableArray(parameters)));else this.kerviService.spine.sendCommand(this.interruptCommand);
        }
      }]);

      return Action;
    }();

    var ComponentFactory = /*#__PURE__*/function () {
      function ComponentFactory() {
        _classCallCheck(this, ComponentFactory);
      }

      _createClass(ComponentFactory, null, [{
        key: "createComponents",
        value: function createComponents(message, kerviService) {
          var foundComponents = this.createComponentsRec(message, kerviService);
          this.linkToDashboards(foundComponents[0], foundComponents[1]);
          return foundComponents[0];
        }
      }, {
        key: "createComponentsRec",
        value: function createComponentsRec(message, kerviService) {
          var result = [];
          var dashboards = [];

          if (Array.isArray(message)) {
            for (var i = 0; i < message.length; i++) {
              var subComponents = this.createComponentsRec(message[i], kerviService);
              result = result.concat(subComponents[0]);
              dashboards = dashboards.concat(subComponents[1]);
            }
          } else {
            var component = null;
            var _subComponents = [];

            if (message.componentType === 'KerviAction') {
              component = new Action(message, kerviService);
            } else if (message.componentType === 'dashboard') {
              component = new Dashboard(message);
              dashboards.push(component);
            } else if (message.componentType === 'controller') {
              component = new Controller(message, kerviService);
            } else if (message.componentType === 'boolean-value') {
              component = new BooleanValue(message, kerviService);
            } else if (message.componentType === 'number-value') {
              component = new NumberValue(message, kerviService);
            } else if (message.componentType === 'string-value') {
              component = new StringValue(message, kerviService);
            } else if (message.componentType === 'enum-value') {
              component = new SelectValue(message, kerviService);
            } else if (message.componentType === 'datetime-value') {
              component = new DateTimeValue(message, kerviService);
            } else if (message.componentType === 'color-value') {
              component = new ColorValue(message, kerviService);
            }

            if (component) {
              result.push(component);
            }

            if (_subComponents) {
              var _iterator26 = _createForOfIteratorHelper(_subComponents),
                  _step26;

              try {
                for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
                  var subComponent = _step26.value;
                  result.push(subComponent);
                }
              } catch (err) {
                _iterator26.e(err);
              } finally {
                _iterator26.f();
              }
            }
          }

          return [result, dashboards];
        }
      }, {
        key: "FixControllerReferences",
        value: function FixControllerReferences(components) {
          var _iterator27 = _createForOfIteratorHelper(components),
              _step27;

          try {
            for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
              var component = _step27.value;
              var controller = component;

              if (controller && controller.componentType === 'controller') {
                controller.updateReferences();
              }
            }
          } catch (err) {
            _iterator27.e(err);
          } finally {
            _iterator27.f();
          }
        }
      }, {
        key: "linkToDashboards",
        value: function linkToDashboards(components, dashboards) {
          console.log('ltd', components, dashboards);

          var _iterator28 = _createForOfIteratorHelper(components),
              _step28;

          try {
            for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
              var component = _step28.value;

              if (!(component instanceof Dashboard)) {
                var _iterator29 = _createForOfIteratorHelper(component.dashboards),
                    _step29;

                try {
                  for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
                    var link = _step29.value;

                    var _iterator30 = _createForOfIteratorHelper(dashboards),
                        _step30;

                    try {
                      for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
                        var dashboard = _step30.value;
                        dashboard.addDashboardLink(link);
                      }
                    } catch (err) {
                      _iterator30.e(err);
                    } finally {
                      _iterator30.f();
                    }
                  }
                } catch (err) {
                  _iterator29.e(err);
                } finally {
                  _iterator29.f();
                }
              }
            }
          } catch (err) {
            _iterator28.e(err);
          } finally {
            _iterator28.f();
          }
        }
      }]);

      return ComponentFactory;
    }();

    var FileBase = function FileBase() {
      _classCallCheck(this, FileBase);

      this.isFile = true;
    };

    var File = /*#__PURE__*/function (_FileBase) {
      _inherits(File, _FileBase);

      var _super10 = _createSuper(File);

      function File() {
        _classCallCheck(this, File);

        return _super10.apply(this, arguments);
      }

      return File;
    }(FileBase);

    var Directory = /*#__PURE__*/function (_FileBase2) {
      _inherits(Directory, _FileBase2);

      var _super11 = _createSuper(Directory);

      function Directory(path) {
        var _this10;

        _classCallCheck(this, Directory);

        _this10 = _super11.call(this);
        _this10.files$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        _this10.path = path;
        return _this10;
      }

      _createClass(Directory, [{
        key: "updateFiles",
        value: function updateFiles(files) {
          var result = [];

          var _iterator31 = _createForOfIteratorHelper(files),
              _step31;

          try {
            for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
              var file = _step31.value;

              if (file.is_file) {
                var fileEntry = new File();
                fileEntry.name = file.name;
                var p = this.path !== '/' ? this.path : '';
                fileEntry.path = p + '/' + file.name;
                result.push(fileEntry);
              } else {
                var _p = this.path !== '/' ? this.path : '';

                var directory = new Directory(_p + '/' + file.name);
                directory.name = file.name;
                directory.isFile = false;
                result.push(directory);
              }
            }
          } catch (err) {
            _iterator31.e(err);
          } finally {
            _iterator31.f();
          }

          this.files$.next(result);
        }
      }]);

      return Directory;
    }(FileBase);

    var StreamEvent = function StreamEvent(streamId, streamEvent, data) {
      _classCallCheck(this, StreamEvent);

      this.streamId = streamId;
      this.event = streamEvent;
      this.data = data;
    };

    var Stream = /*#__PURE__*/function () {
      function Stream(streamId, events, kerviService) {
        _classCallCheck(this, Stream);

        this.streamId = streamId;
        this.events = events;
        this.kerviService = kerviService;
        this.events$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        var self = this;
        kerviService.spine.addStreamHandler(streamId, events, function (e_streamId, e_streamEvent, e_data) {
          var event = new StreamEvent(e_streamId, e_streamEvent, e_data);
          var notify = false;

          if (events === null || events.length === 0 || events.indexOf(e_streamEvent) >= 0) {
            notify = true;
          }

          if (notify) {
            self.events$.next(event);
          }
        });
      }

      _createClass(Stream, [{
        key: "close",
        value: function close() {
          this.kerviService.spine.removeStreamHandler(this.streamId, this.events, null);
        }
      }]);

      return Stream;
    }(); // Copyright (c) 2016, Tim Wentzlau


    var ConnectionState;

    (function (ConnectionState) {
      ConnectionState[ConnectionState["disconnected"] = 0] = "disconnected";
      ConnectionState[ConnectionState["loading"] = 1] = "loading";
      ConnectionState[ConnectionState["authenticate"] = 2] = "authenticate";
      ConnectionState[ConnectionState["connected"] = 3] = "connected";
    })(ConnectionState || (ConnectionState = {}));

    var UserLogStateType;

    (function (UserLogStateType) {
      UserLogStateType[UserLogStateType["normal"] = 0] = "normal";
      UserLogStateType[UserLogStateType["warning"] = 1] = "warning";
      UserLogStateType[UserLogStateType["error"] = 2] = "error";
    })(UserLogStateType || (UserLogStateType = {}));

    var KerviBaseService = /*#__PURE__*/function () {
      function KerviBaseService() {
        _classCallCheck(this, KerviBaseService);

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
        var self = this;
        this.application$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.IPCReady$.subscribe(function (connected) {
          if (connected) {
            console.log('kervi service ipc ready (connected)');
            self.spine.addEventHandler('valueChanged', '', function (id, value) {
              var _iterator32 = _createForOfIteratorHelper(self.components),
                  _step32;

              try {
                for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
                  var component = _step32.value;

                  if (component.id === value.id) {
                    var dynamicValue = component;
                    dynamicValue.valueTS = new Date(this.timestamp);
                    dynamicValue.set(value.value, false);
                  }
                }
              } catch (err) {
                _iterator32.e(err);
              } finally {
                _iterator32.f();
              }
            });
            self.spine.addEventHandler('appPing', null, function (id, data) {
              // console.log('appPing', self.lastAppPingTime, id, data);
              if (self.lastAppPingTime === null) {
                self.lastAppPingTime = new Date();
              } else {
                var now = new Date();
                var pingDiff = now.getTime() - self.lastAppPingTime.getTime() - 1000;
                var pingDelay = now.getTime() - data.ts * 1000;
                self.appPingDelay$.next(pingDelay);
                self.lastAppPingTime = now;

                if (pingDiff !== self.lastPingDiff) {
                  self.lastPingDiff = pingDiff;
                  self.appPingDiff$.next(self.lastPingDiff);
                }
              }
            });
            self.spine.addEventHandler('actionStarted', '', function (id) {
              console.log('as', id);

              var _iterator33 = _createForOfIteratorHelper(self.components),
                  _step33;

              try {
                for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
                  var component = _step33.value;

                  if (component.id === id) {
                    var action = component;
                    action.running$.next(true);
                  }
                }
              } catch (err) {
                _iterator33.e(err);
              } finally {
                _iterator33.f();
              }
            });
            self.spine.addEventHandler('actionDone', '', function (id) {
              console.log('ad', id);

              var _iterator34 = _createForOfIteratorHelper(self.components),
                  _step34;

              try {
                for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
                  var component = _step34.value;

                  if (component.id === id) {
                    var action = component;
                    action.running$.next(false);
                  }
                }
              } catch (err) {
                _iterator34.e(err);
              } finally {
                _iterator34.f();
              }
            });
            self.spine.addEventHandler('userLogMessage', null, function (v) {
              var messages = self.logMessages$.value;
              var newMessage = new DashboardMessageModel(this);
              messages.unshift(newMessage);

              if (messages.length > 10) {
                messages.pop();
              }

              var hasErrors = 0;
              var hasWarnings = 0;

              var _iterator35 = _createForOfIteratorHelper(messages),
                  _step35;

              try {
                for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
                  var message = _step35.value;

                  if (message.level === 1) {
                    hasErrors++;
                  }

                  if (message.level === 2) {
                    hasWarnings++;
                  }
                }
              } catch (err) {
                _iterator35.e(err);
              } finally {
                _iterator35.f();
              }

              if (hasErrors) {
                self.LogMessageState$.next(UserLogStateType.error);
              } else if (hasWarnings) {
                self.LogMessageState$.next(UserLogStateType.warning);
              } else {
                self.LogMessageState$.next(UserLogStateType.normal);
              }

              self.LogMessageCount$.next(messages.length);
              self.lastLogMessage$.next(newMessage);
              self.logMessages$.next(messages);
            });
          }
        });
      }

      _createClass(KerviBaseService, [{
        key: "GetDirectory",
        value: function GetDirectory(path) {
          var _this11 = this;

          var promise = new Promise(function (resolve, reject) {
            var directory = new Directory(path);

            _this11.spine.sendQuery('files_get_dir', path, function (directoryFiles) {
              directory.updateFiles(directoryFiles);
              resolve(directory);
            });
          });
          return promise;
        }
      }, {
        key: "GetThumbnail",
        value: function GetThumbnail(path) {
          var _this12 = this;

          var promise = new Promise(function (resolve, reject) {
            _this12.spine.sendQuery('files_get_thumbnail', path, function (thumbnail) {
              resolve(thumbnail);
            });
          });
          return promise;
        }
      }, {
        key: "GetFile",
        value: function GetFile(path) {
          var _this13 = this;

          var promise = new Promise(function (resolve, reject) {
            _this13.spine.sendQuery('files_get_file', path, function (file) {
              resolve(file);
            });
          });
          return promise;
        }
      }, {
        key: "GetStream",
        value: function GetStream(streamId) {
          var events = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
          return new Stream(streamId, events, this);
        }
      }, {
        key: "text",
        value: function text(key) {
          var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

          if (this.texts && key in this.texts) {
            return this.texts[key];
          } else {
            return defaultValue;
          }
        }
      }, {
        key: "getLogMessages$",
        value: function getLogMessages$() {
          return this.logMessages$.asObservable();
        }
      }, {
        key: "getLastLogMessage$",
        value: function getLastLogMessage$() {
          return this.lastLogMessage$.asObservable();
        }
      }, {
        key: "getLogState$",
        value: function getLogState$() {
          return this.LogMessageState$.asObservable();
        }
      }, {
        key: "getLogMessageCount$",
        value: function getLogMessageCount$() {
          return this.LogMessageCount$.asObservable();
        }
      }, {
        key: "isAppEmpty",
        value: function isAppEmpty() {
          var defaultDashboard = this.getDefaultDashboard();

          if (defaultDashboard) {
            return defaultDashboard.isEmpty();
          }

          return true;
        }
      }, {
        key: "getComponent",
        value: function getComponent(id) {
          var componentType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

          var _iterator36 = _createForOfIteratorHelper(this.components),
              _step36;

          try {
            for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
              var component = _step36.value;

              if (component.id === id && (componentType == null || component.componentType === componentType)) {
                return component;
              }
            }
          } catch (err) {
            _iterator36.e(err);
          } finally {
            _iterator36.f();
          }

          return null;
        }
      }, {
        key: "getComponentsByType",
        value: function getComponentsByType(type) {
          var result = [];

          var _iterator37 = _createForOfIteratorHelper(this.components),
              _step37;

          try {
            for (_iterator37.s(); !(_step37 = _iterator37.n()).done;) {
              var component = _step37.value;

              if (component.componentType === type) {
                result.push(component);
              }
            }
          } catch (err) {
            _iterator37.e(err);
          } finally {
            _iterator37.f();
          }

          return result;
        }
      }, {
        key: "getDefaultDashboard",
        value: function getDefaultDashboard() {
          var dashboards = this.getComponentsByType('dashboard');

          var _iterator38 = _createForOfIteratorHelper(dashboards),
              _step38;

          try {
            for (_iterator38.s(); !(_step38 = _iterator38.n()).done;) {
              var dashboard = _step38.value;

              if (dashboard.isDefault) {
                return dashboard;
              }
            }
          } catch (err) {
            _iterator38.e(err);
          } finally {
            _iterator38.f();
          }

          if (dashboards.length > 0) {
            return dashboards[0];
          }

          return null;
        }
      }, {
        key: "connect",
        value: function connect() {
          var address = null;
          var protocol = 'ws';

          try {
            if (kerviSocketAddress) {
              address = kerviSocketAddress;
            }

            if (socketProtocol) {
              protocol = socketProtocol;
            }
          } catch (e) {
            // for testing with ng serve
            var httpProtocol = location.protocol;

            if (httpProtocol === 'https') {
              protocol = 'wss';
            }

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
        }
      }, {
        key: "connectMQ",
        value: function connectMQ() {
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
          } else {
            console.log('qmc not found in storage');
          }
        }
      }, {
        key: "isAnonymous",
        value: function isAnonymous() {
          return this.spine.options.userName === 'anonymous';
        }
      }, {
        key: "authenticate",
        value: function authenticate(userName, password) {
          var _this14 = this;

          console.log('sa', userName, password);
          this.authPromise = new Promise(function (resolve, reject) {
            _this14._resolveSelf = resolve;
            _this14._rejectSelf = reject;
          });
          this.spine.authenticate(userName, password);
          return this.authPromise;
        }
      }, {
        key: "logoff",
        value: function logoff() {
          this.spine.logoff();
        }
      }, {
        key: "onAuthenticateStart",
        value: function onAuthenticateStart() {}
      }, {
        key: "onAuthenticate",
        value: function onAuthenticate() {
          this.doAuthenticate = true;
          this.reset();

          this._resolveSelf('ok');
        }
      }, {
        key: "onAuthenticateFailed",
        value: function onAuthenticateFailed() {
          this._rejectSelf('error');
        }
      }, {
        key: "onLogoff",
        value: function onLogoff() {
          this.doAuthenticate = true;

          if (this.spine.firstOnOpen) {
            this.IPCReady$.next(true);
          }

          this.reset();
        }
      }, {
        key: "reset",
        value: function reset() {
          this.components = [];
          this.components$.next(this.components);
          var messages = [];
          this.LogMessageState$.next(UserLogStateType.normal);
          this.LogMessageCount$.next(messages.length);
          this.logMessages$.next(messages);

          if (this.IPCReady$.value) {
            this.connectionState$.next(ConnectionState.authenticate);
          } else {
            this.connectionState$.next(ConnectionState.disconnected);
          }
        }
      }, {
        key: "getComponentInfo",
        value: function getComponentInfo(retryCount, module_load) {
          var self = this;
          this.spine.sendQuery('GetApplicationInfo', function (appInfo) {
            console.log('app info', appInfo);
            this.spine.sendQuery('getComponentInfo', function (message) {
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
            }, function () {
              console.error('get component info timeout');

              if (retryCount > 0) {
                self.getComponentInfo(retryCount - 1, module_load);
              }
            });
          });
        }
      }, {
        key: "onOpen",
        value: function onOpen(first) {
          console.log('kervi service on open', this.spine.firstOnOpen, first, this);
          var self = this;
          this.connectionState$.next(ConnectionState.loading);
          this.doAuthenticate = this.spine.doAuthenticate;
          this.getComponentInfo(2, false);

          if (self.spine.firstOnOpen) {
            this.IPCReady$.next(true);
            this.spine.addEventHandler('moduleStarted', '', function () {
              console.log('module loaded', self.components);
              setTimeout(function () {
                self.getComponentInfo(2, true);
              }, 2000);
            });
            this.spine.addEventHandler('moduleStopped', '', function () {
              console.log('module unloaded');
              setTimeout(function () {
                console.log('module unloaded, refresh');
                self.getComponentInfo(2, true);
              }, 5000);
            });
          }
        }
      }, {
        key: "onClose",
        value: function onClose() {
          this.reset();
          console.log('ks on close');
          this.IPCReady$.next(false);
        }
      }, {
        key: "onMPS",
        value: function onMPS(mps) {
          this.mps$.next(mps);
        }
      }, {
        key: "onHeartbeat",
        value: function onHeartbeat() {}
      }, {
        key: "onConnect",
        value: function onConnect() {}
      }]);

      return KerviBaseService;
    }();

    KerviBaseService.ɵfac = function KerviBaseService_Factory(t) {
      return new (t || KerviBaseService)();
    };

    KerviBaseService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      token: KerviBaseService,
      factory: KerviBaseService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(KerviBaseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();

    var KerviJsComponent = /*#__PURE__*/function () {
      function KerviJsComponent() {
        _classCallCheck(this, KerviJsComponent);
      }

      _createClass(KerviJsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return KerviJsComponent;
    }();

    KerviJsComponent.ɵfac = function KerviJsComponent_Factory(t) {
      return new (t || KerviJsComponent)();
    };

    KerviJsComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: KerviJsComponent,
      selectors: [["lib-kervi-js"]],
      decls: 2,
      vars: 0,
      template: function KerviJsComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "p");
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1, " kervi-js works! ");
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(KerviJsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'lib-kervi-js',
          template: "\n    <p>\n      kervi-js works!\n    </p>\n  ",
          styles: []
        }]
      }], function () {
        return [];
      }, null);
    })();

    var KerviJsModule = function KerviJsModule() {
      _classCallCheck(this, KerviJsModule);
    };

    KerviJsModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({
      type: KerviJsModule
    });
    KerviJsModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({
      factory: function KerviJsModule_Factory(t) {
        return new (t || KerviJsModule)();
      },
      imports: [[]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(KerviJsModule, {
        declarations: [KerviJsComponent],
        exports: [KerviJsComponent]
      });
    })();
    /*@__PURE__*/


    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(KerviJsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [],
          declarations: [KerviJsComponent],
          exports: [KerviJsComponent]
        }]
      }], null, null);
    })();
    /*
     * Public API Surface of kervi-js
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=kervi-js.js.map

    /***/

  },

  /***/
  "../../dist/kervi-zorro/fesm2015/kervi-zorro.js":
  /*!*****************************************************************************************!*\
    !*** D:/dev/kervi/kervi/kervi-ui/kervi/ui/web/dist/kervi-zorro/fesm2015/kervi-zorro.js ***!
    \*****************************************************************************************/

  /*! exports provided: ActionComponent, AppHealthComponent, CamViewerComponent, ControllerPadComponent, DashboardPanelComponent, KerviZorroModule, KerviZorroService, NipplePadComponent, UserLogComponent, UserMessageButtonComponent, UserMessagesComponent */

  /***/
  function distKerviZorroFesm2015KerviZorroJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActionComponent", function () {
      return ActionComponent$1;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppHealthComponent", function () {
      return AppHealthComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CamViewerComponent", function () {
      return CamViewerComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControllerPadComponent", function () {
      return ControllerPadComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPanelComponent", function () {
      return DashboardPanelComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KerviZorroModule", function () {
      return KerviZorroModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KerviZorroService", function () {
      return KerviZorroService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NipplePadComponent", function () {
      return NipplePadComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserLogComponent", function () {
      return UserLogComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserMessageButtonComponent", function () {
      return UserMessageButtonComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserMessagesComponent", function () {
      return UserMessagesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng-zorro-antd */
    "../../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd.js");
    /* harmony import */


    var ngx_kervi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-kervi */
    "../../dist/ngx-kervi/fesm2015/ngx-kervi.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "../../node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng-zorro-antd/card */
    "../../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-card.js");
    /* harmony import */


    var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-zorro-antd/core/transition-patch */
    "../../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
    /* harmony import */


    var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ng-zorro-antd/icon */
    "../../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
    /* harmony import */


    var kervi_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! kervi-js */
    "../../dist/kervi-js/fesm2015/kervi-js.js");
    /* harmony import */


    var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ng-zorro-antd/grid */
    "../../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-grid.js");
    /* harmony import */


    var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ng-zorro-antd/form */
    "../../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-form.js");
    /* harmony import */


    var ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ng-zorro-antd/slider */
    "../../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-slider.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ng-zorro-antd/input-number */
    "../../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-input-number.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ng-zorro-antd/switch */
    "../../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-switch.js");
    /* harmony import */


    var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ng-zorro-antd/button */
    "../../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
    /* harmony import */


    var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ng-zorro-antd/core/wave */
    "../../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");
    /* harmony import */


    var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ng-zorro-antd/popconfirm */
    "../../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-popconfirm.js");
    /* harmony import */


    var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ng-zorro-antd/input */
    "../../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-input.js");
    /* harmony import */


    var ngx_color_picker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ngx-color-picker */
    "../../node_modules/ngx-color-picker/__ivy_ngcc__/fesm2015/ngx-color-picker.js");
    /* harmony import */


    var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ng-zorro-antd/date-picker */
    "../../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-date-picker.js");
    /* harmony import */


    var ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ng-zorro-antd/time-picker */
    "../../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-time-picker.js");
    /* harmony import */


    var nipplejs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! nipplejs */
    "../../node_modules/nipplejs/dist/nipplejs.js");
    /* harmony import */


    var nipplejs__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(nipplejs__WEBPACK_IMPORTED_MODULE_24__);
    /* harmony import */


    var ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ng-zorro-antd/timeline */
    "../../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-timeline.js");
    /* harmony import */


    var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ng-zorro-antd/divider */
    "../../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-divider.js");
    /* harmony import */


    var ngx_gauge__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ngx-gauge */
    "../../node_modules/ngx-gauge/__ivy_ngcc__/fesm2015/ngx-gauge.js");
    /* harmony import */


    var ng_apexcharts__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ng-apexcharts */
    "../../node_modules/ng-apexcharts/__ivy_ngcc__/fesm2015/ng-apexcharts.js");
    /* harmony import */


    var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ng-zorro-antd/badge */
    "../../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-badge.js");
    /* harmony import */


    var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ng-zorro-antd/drawer */
    "../../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-drawer.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/flex-layout */
    "../../node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");

    var KerviZorroService = function KerviZorroService() {
      _classCallCheck(this, KerviZorroService);
    };

    KerviZorroService.ɵfac = function KerviZorroService_Factory(t) {
      return new (t || KerviZorroService)();
    };

    KerviZorroService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      token: KerviZorroService,
      factory: KerviZorroService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(KerviZorroService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })(); // Copyright (c) 2016, Tim Wentzlau


    var _c0 = ["chart"];

    var SparklineComponent = /*#__PURE__*/function () {
      function SparklineComponent(kerviService, templateService) {
        _classCallCheck(this, SparklineComponent);

        this.kerviService = kerviService;
        this.templateService = templateService;
        this.value = null;
        this.linkParameters = null;
        this.dashboardSizes = new kervi_js__WEBPACK_IMPORTED_MODULE_9__["DashboardSizes"]();
        this.series = [];
      }

      _createClass(SparklineComponent, [{
        key: "createElement",
        value: function createElement() {
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
              opacity: 0.3
            },
            series: [{
              data: this.value.sparkline$.value
            }],
            yaxis: {
              min: 0
            },
            colors: [this.color("color", ".kervi-sparkline")]
          };

          if (this.chartObj) {
            this.chartObj.destroy();
          }

          console.log("create sparkline", this.value.id);
          this.chartObj = new ApexCharts(this.chartElement.nativeElement, this.options);
          this.chartObj.render();
        }
      }, {
        key: "color",
        value: function color(style, selector) {
          return this.templateService.getColor(style, selector);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          var self = this;
          rxjs__WEBPACK_IMPORTED_MODULE_15__["asapScheduler"].schedule(function () {
            _this15.createElement();
          });
          this.value.sparkline$.subscribe(function (v) {
            if (self.chartObj && v) {
              self.chartObj.updateSeries([{
                data: v
              }]);
            }
          });
        }
      }]);

      return SparklineComponent;
    }();

    SparklineComponent.ɵfac = function SparklineComponent_Factory(t) {
      return new (t || SparklineComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(ngx_kervi__WEBPACK_IMPORTED_MODULE_3__["NGXKerviService"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(ngx_kervi__WEBPACK_IMPORTED_MODULE_3__["KerviTemplateService"]));
    };

    SparklineComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: SparklineComponent,
      selectors: [["value-sparkline"]],
      viewQuery: function SparklineComponent_Query(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"])(_c0, true);
        }

        if (rf & 2) {
          var _t;

          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"])(_t = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"])()) && (ctx.chartElement = _t.first);
        }
      },
      inputs: {
        value: "value",
        linkParameters: "linkParameters",
        type: "type",
        size: "size",
        dashboardSizes: "dashboardSizes"
      },
      decls: 2,
      vars: 0,
      consts: [["chart", ""]],
      template: function SparklineComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "div", null, 0);
        }
      },
      styles: [""]
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(SparklineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'value-sparkline',
          templateUrl: './sparkline.component.html',
          styleUrls: ['./sparkline.component.scss']
        }]
      }], function () {
        return [{
          type: ngx_kervi__WEBPACK_IMPORTED_MODULE_3__["NGXKerviService"]
        }, {
          type: ngx_kervi__WEBPACK_IMPORTED_MODULE_3__["KerviTemplateService"]
        }];
      }, {
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        linkParameters: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        size: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dashboardSizes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        chartElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['chart']
        }]
      });
    })(); // Copyright (c) 2016, Tim Wentzlau


    function NumberComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();

        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"])(0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "nz-form-control");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(2, "span", 1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("mousedown", function NumberComponent_ng_container_0_Template_span_mousedown_2_listener() {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r3);
          var ctx_r2 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
          return ctx_r2.sliderMouseDown();
        })("mouseup", function NumberComponent_ng_container_0_Template_span_mouseup_2_listener() {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r3);
          var ctx_r4 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
          return ctx_r4.sliderMouseUp();
        });
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(3, "nz-slider", 2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("ngModelChange", function NumberComponent_ng_container_0_Template_nz_slider_ngModelChange_3_listener($event) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r3);
          var ctx_r5 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
          return ctx_r5.value.value = $event;
        });
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(4, "nz-input-number", 3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("ngModelChange", function NumberComponent_ng_container_0_Template_nz_input_number_ngModelChange_4_listener($event) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r3);
          var ctx_r6 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
          return ctx_r6.value.value = $event;
        });
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"])();
      }

      if (rf & 2) {
        var ctx_r0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("nzMin", ctx_r0.value.minValue)("nzMax", ctx_r0.value.maxValue)("nzStep", 1)("ngModel", ctx_r0.value.value);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"])("id", ctx_r0.value.id);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("nzMin", ctx_r0.value.minValue)("nzMax", ctx_r0.value.maxValue)("nzStep", 1)("ngModel", ctx_r0.value.value);
      }
    }

    function NumberComponent_ng_container_1_i_2_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "i");
      }

      if (rf & 2) {
        var ctx_r7 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"])("fa fa-", ctx_r7.currentIcon, "");
      }
    }

    function NumberComponent_ng_container_1_value_sparkline_3_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "value-sparkline", 7);
      }

      if (rf & 2) {
        var ctx_r8 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("value", ctx_r8.value);
      }
    }

    function NumberComponent_ng_container_1_span_7_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
      }

      if (rf & 2) {
        var ctx_r9 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r9.value.unit);
      }
    }

    function NumberComponent_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"])(0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "span", 4);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, NumberComponent_ng_container_1_i_2_Template, 1, 3, "i", 5);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(3, NumberComponent_ng_container_1_value_sparkline_3_Template, 1, 1, "value-sparkline", 6);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(4);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(5, "number");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(6, "async");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(7, NumberComponent_ng_container_1_span_7_Template, 2, 1, "span", 0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"])();
      }

      if (rf & 2) {
        var ctx_r1 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"])("min-width", ctx_r1.linkParameters.valueSize, "rem");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r1.currentIcon);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r1.linkParameters.showSparkline && !ctx_r1.linkParameters.isInput);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"])(" ", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"])(5, 6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(6, 9, ctx_r1.value.value$), ctx_r1.numberFormat), " ");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r1.linkParameters.displayUnit);
      }
    }

    var NumberComponent = /*#__PURE__*/function (_ngx_kervi__WEBPACK_I) {
      _inherits(NumberComponent, _ngx_kervi__WEBPACK_I);

      var _super12 = _createSuper(NumberComponent);

      function NumberComponent(elementRef) {
        var _this16;

        _classCallCheck(this, NumberComponent);

        _this16 = _super12.call(this);
        _this16.elementRef = elementRef;
        return _this16;
      }

      _createClass(NumberComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.ngOnInitNumber();
        }
      }, {
        key: "sliderMouseDown",
        value: function sliderMouseDown() {
          console.log("md");
        }
      }, {
        key: "sliderMouseUp",
        value: function sliderMouseUp() {
          console.log("mu");
        }
      }]);

      return NumberComponent;
    }(ngx_kervi__WEBPACK_IMPORTED_MODULE_3__["KerviNumberComponent"]);

    NumberComponent.ɵfac = function NumberComponent_Factory(t) {
      return new (t || NumberComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    NumberComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: NumberComponent,
      selectors: [["kervi-value-number"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 2,
      vars: 2,
      consts: [[4, "ngIf"], [3, "mousedown", "mouseup"], [3, "nzMin", "nzMax", "nzStep", "ngModel", "ngModelChange"], [3, "id", "nzMin", "nzMax", "nzStep", "ngModel", "ngModelChange"], [1, "value-value"], [3, "class", 4, "ngIf"], [3, "value", 4, "ngIf"], [3, "value"]],
      template: function NumberComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(0, NumberComponent_ng_container_0_Template, 5, 9, "ng-container", 0);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, NumberComponent_ng_container_1_Template, 8, 11, "ng-container", 0);
        }

        if (rf & 2) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.linkParameters.isInput);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", !ctx.linkParameters.isInput);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__["NzFormControlComponent"], ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_12__["NzSliderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"], ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_14__["NzInputNumberComponent"], SparklineComponent],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
      styles: [""]
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(NumberComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'kervi-value-number',
          templateUrl: './number-value.component.html',
          styleUrls: ['./number-value.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, null);
    })(); // Copyright (c) 2016, Tim Wentzlau


    function SwitchButtonComponent_ng_template_1_i_0_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "i", 4);
      }

      if (rf & 2) {
        var ctx_r4 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("nzType", ctx_r4.linkParameters.onIcon);
      }
    }

    function SwitchButtonComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(0, SwitchButtonComponent_ng_template_1_i_0_Template, 1, 1, "i", 3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "span");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
      }

      if (rf & 2) {
        var ctx_r1 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r1.linkParameters.onIcon);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r1.linkParameters.onText);
      }
    }

    function SwitchButtonComponent_ng_template_3_i_0_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "i", 4);
      }

      if (rf & 2) {
        var ctx_r5 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("nzType", ctx_r5.linkParameters.offIcon);
      }
    }

    function SwitchButtonComponent_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(0, SwitchButtonComponent_ng_template_3_i_0_Template, 1, 1, "i", 3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "span");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
      }

      if (rf & 2) {
        var ctx_r3 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r3.linkParameters.offIcon);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r3.linkParameters.offText);
      }
    }

    var SwitchButtonComponent = /*#__PURE__*/function () {
      function SwitchButtonComponent() {
        _classCallCheck(this, SwitchButtonComponent);

        this.inline = false;
        this.dashboardSizes = new kervi_js__WEBPACK_IMPORTED_MODULE_9__["DashboardSizes"]();
        this.buttonState = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(SwitchButtonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log("sb", this.value);

          if (this.linkParameters) {
            if (!this.linkParameters.buttonWidth) this.width = this.dashboardSizes.switchWidth;else this.width = this.linkParameters.buttonWidth;
            if (!this.linkParameters.buttonHeight) this.height = this.dashboardSizes.switchHeight;else this.height = this.linkParameters.buttonHeight;
          } else {
            this.width = this.dashboardSizes.switchWidth;
            this.height = this.dashboardSizes.switchHeight;
          }
        }
      }, {
        key: "modelChange",
        value: function modelChange(state) {
          this.buttonState.emit(state);
        }
      }]);

      return SwitchButtonComponent;
    }();

    SwitchButtonComponent.ɵfac = function SwitchButtonComponent_Factory(t) {
      return new (t || SwitchButtonComponent)();
    };

    SwitchButtonComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: SwitchButtonComponent,
      selectors: [["kervi-switchbutton"]],
      inputs: {
        value: "value",
        linkParameters: "linkParameters",
        inline: "inline",
        dashboardSizes: "dashboardSizes"
      },
      outputs: {
        buttonState: "buttonState"
      },
      decls: 5,
      vars: 3,
      consts: [[3, "ngModel", "nzCheckedChildren", "nzUnCheckedChildren", "ngModelChange"], ["checkedTemplate", ""], ["unCheckedTemplate", ""], ["nz-icon", "", 3, "nzType", 4, "ngIf"], ["nz-icon", "", 3, "nzType"]],
      template: function SwitchButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "nz-switch", 0);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("ngModelChange", function SwitchButtonComponent_Template_nz_switch_ngModelChange_0_listener($event) {
            return ctx.value = $event;
          })("ngModelChange", function SwitchButtonComponent_Template_nz_switch_ngModelChange_0_listener($event) {
            return ctx.modelChange($event);
          });
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, SwitchButtonComponent_ng_template_1_Template, 3, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(3, SwitchButtonComponent_ng_template_3_Template, 3, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"])(2);

          var _r2 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"])(4);

          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngModel", ctx.value)("nzCheckedChildren", _r0)("nzUnCheckedChildren", _r2);
        }
      },
      directives: [ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_16__["NzSwitchComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__["NzIconDirective"]],
      styles: [""]
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(SwitchButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'kervi-switchbutton',
          templateUrl: './switch-button.component.html',
          styleUrls: ['./switch-button.component.scss']
        }]
      }], function () {
        return [];
      }, {
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        linkParameters: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        inline: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dashboardSizes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        buttonState: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })(); // Copyright (c) 2016, Tim Wentzlau


    function ButtonComponent_ng_template_0_i_0_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "i", 5);
      }

      if (rf & 2) {
        var ctx_r4 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("nzType", ctx_r4.linkParameters.onIcon);
      }
    }

    function ButtonComponent_ng_template_0_i_1_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "i", 5);
      }

      if (rf & 2) {
        var ctx_r5 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("nzType", ctx_r5.linkParameters.offIcon);
      }
    }

    function ButtonComponent_ng_template_0_i_2_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "i", 5);
      }

      if (rf & 2) {
        var ctx_r6 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("nzType", ctx_r6.linkParameters.buttonIcon);
      }
    }

    function ButtonComponent_ng_template_0_span_3_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
      }

      if (rf & 2) {
        var ctx_r7 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r7.linkParameters.buttonText);
      }
    }

    function ButtonComponent_ng_template_0_span_4_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
      }

      if (rf & 2) {
        var ctx_r8 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r8.linkParameters.onText);
      }
    }

    function ButtonComponent_ng_template_0_span_5_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
      }

      if (rf & 2) {
        var ctx_r9 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r9.linkParameters.offText);
      }
    }

    function ButtonComponent_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(0, ButtonComponent_ng_template_0_i_0_Template, 1, 1, "i", 3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, ButtonComponent_ng_template_0_i_1_Template, 1, 1, "i", 3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, ButtonComponent_ng_template_0_i_2_Template, 1, 1, "i", 3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(3, ButtonComponent_ng_template_0_span_3_Template, 2, 1, "span", 4);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(4, ButtonComponent_ng_template_0_span_4_Template, 2, 1, "span", 4);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(5, ButtonComponent_ng_template_0_span_5_Template, 2, 1, "span", 4);
      }

      if (rf & 2) {
        var ctx_r1 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", !ctx_r1.linkParameters.buttonIcon && ctx_r1.linkParameters.onIcon && ctx_r1.value.value);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", !ctx_r1.linkParameters.buttonIcon && ctx_r1.linkParameters.offIcon && !ctx_r1.value.value);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r1.linkParameters.buttonIcon);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r1.linkParameters.buttonText);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", !ctx_r1.linkParameters.buttonText && ctx_r1.linkParameters.onText && ctx_r1.value.value);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", !ctx_r1.linkParameters.buttonText && ctx_r1.linkParameters.offText && !ctx_r1.value.value);
      }
    }

    function ButtonComponent_button_2_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"])(0);
      }
    }

    function ButtonComponent_button_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();

        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "button", 6);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("nzOnConfirm", function ButtonComponent_button_2_Template_button_nzOnConfirm_0_listener() {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r12);
          var ctx_r11 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
          return ctx_r11.confirm();
        });
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, ButtonComponent_button_2_ng_container_1_Template, 1, 0, "ng-container", 7);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
      }

      if (rf & 2) {
        var ctx_r2 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();

        var _r0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"])(1);

        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("nzTitle", ctx_r2.linkParameters.confirmMessage);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngTemplateOutlet", _r0);
      }
    }

    function ButtonComponent_button_3_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"])(0);
      }
    }

    function ButtonComponent_button_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();

        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "button", 8);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("mousedown", function ButtonComponent_button_3_Template_button_mousedown_0_listener() {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r15);
          var ctx_r14 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
          return ctx_r14.press();
        })("mouseup", function ButtonComponent_button_3_Template_button_mouseup_0_listener() {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r15);
          var ctx_r16 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
          return ctx_r16.release();
        });
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, ButtonComponent_button_3_ng_container_1_Template, 1, 0, "ng-container", 7);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
      }

      if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();

        var _r0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"])(1);

        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngTemplateOutlet", _r0);
      }
    }

    var ButtonComponent = /*#__PURE__*/function () {
      function ButtonComponent() {
        _classCallCheck(this, ButtonComponent);

        this.linkParameters = null;
        this.inline = false;
        this.dashboardSizes = new kervi_js__WEBPACK_IMPORTED_MODULE_9__["DashboardSizes"]();
        this.buttonState = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(ButtonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var self = this;

          if (self.linkParameters) {
            if (!self.linkParameters.buttonWidth) this.width = this.dashboardSizes.buttonWidth;else this.width = self.linkParameters.buttonWidth;
            if (!self.linkParameters.buttonHeight) this.height = this.dashboardSizes.buttonHeight;else this.height = self.linkParameters.buttonHeight;
          } else {
            this.width = this.dashboardSizes.buttonWidth;
            this.height = this.dashboardSizes.buttonHeight;
          }
        }
      }, {
        key: "confirm",
        value: function confirm() {
          console.log("c", this.value);
          this.buttonState.emit(true);
          this.buttonState.emit(false);
        }
      }, {
        key: "press",
        value: function press() {
          console.log("p", this.value);
          this.buttonState.emit(true);
        }
      }, {
        key: "release",
        value: function release() {
          this.buttonState.emit(false);
        }
      }]);

      return ButtonComponent;
    }();

    ButtonComponent.ɵfac = function ButtonComponent_Factory(t) {
      return new (t || ButtonComponent)();
    };

    ButtonComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: ButtonComponent,
      selectors: [["kervi-button"]],
      inputs: {
        value: "value",
        linkParameters: "linkParameters",
        type: "type",
        inline: "inline",
        dashboardSizes: "dashboardSizes",
        title: "title"
      },
      outputs: {
        buttonState: "buttonState"
      },
      decls: 4,
      vars: 2,
      consts: [["buttonContentTemplate", ""], ["nz-button", "", "nzType", "primary", "nz-popconfirm", "", 3, "nzTitle", "nzOnConfirm", 4, "ngIf"], ["nz-button", "", "nzType", "primary", 3, "mousedown", "mouseup", 4, "ngIf"], ["nz-icon", "", 3, "nzType", 4, "ngIf"], [4, "ngIf"], ["nz-icon", "", 3, "nzType"], ["nz-button", "", "nzType", "primary", "nz-popconfirm", "", 3, "nzTitle", "nzOnConfirm"], [4, "ngTemplateOutlet"], ["nz-button", "", "nzType", "primary", 3, "mousedown", "mouseup"]],
      template: function ButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(0, ButtonComponent_ng_template_0_Template, 6, 6, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, ButtonComponent_button_2_Template, 2, 2, "button", 1);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(3, ButtonComponent_button_3_Template, 2, 1, "button", 2);
        }

        if (rf & 2) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.linkParameters.confirm);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", !ctx.linkParameters.confirm);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__["NzIconDirective"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_17__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_18__["NzWaveDirective"], ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_19__["NzPopconfirmDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"]],
      styles: [""]
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(ButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'kervi-button',
          templateUrl: './button.component.html',
          styleUrls: ['./button.component.scss']
        }]
      }], function () {
        return [];
      }, {
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        linkParameters: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        inline: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dashboardSizes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        buttonState: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })(); // Copyright (c) 2016, Tim Wentzlau


    function BooleanComponent_kervi_switchbutton_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();

        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "kervi-switchbutton", 2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("buttonState", function BooleanComponent_kervi_switchbutton_0_Template_kervi_switchbutton_buttonState_0_listener($event) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r3);
          var ctx_r2 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
          return ctx_r2.changeState($event);
        });
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
      }

      if (rf & 2) {
        var ctx_r0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("dashboardSizes", ctx_r0.dashboardSizes)("inline", ctx_r0.inline)("value", ctx_r0.value.value)("linkParameters", ctx_r0.linkParameters);
      }
    }

    function BooleanComponent_kervi_button_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();

        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "kervi-button", 3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("buttonState", function BooleanComponent_kervi_button_1_Template_kervi_button_buttonState_0_listener($event) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r5);
          var ctx_r4 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
          return ctx_r4.changeState($event);
        });
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
      }

      if (rf & 2) {
        var ctx_r1 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("dashboardSizes", ctx_r1.dashboardSizes)("value", ctx_r1.value)("inline", ctx_r1.inline)("linkParameters", ctx_r1.linkParameters);
      }
    }

    var BooleanComponent = /*#__PURE__*/function (_ngx_kervi__WEBPACK_I2) {
      _inherits(BooleanComponent, _ngx_kervi__WEBPACK_I2);

      var _super13 = _createSuper(BooleanComponent);

      function BooleanComponent() {
        _classCallCheck(this, BooleanComponent);

        return _super13.call(this);
      }

      _createClass(BooleanComponent, [{
        key: "changeState",
        value: function changeState(event) {
          this.value.set(event);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.ngOnInitBoolean();
        }
      }]);

      return BooleanComponent;
    }(ngx_kervi__WEBPACK_IMPORTED_MODULE_3__["KerviBooleanComponent"]);

    BooleanComponent.ɵfac = function BooleanComponent_Factory(t) {
      return new (t || BooleanComponent)();
    };

    BooleanComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: BooleanComponent,
      selectors: [["kervi-value-boolean"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 2,
      vars: 2,
      consts: [[3, "dashboardSizes", "inline", "value", "linkParameters", "buttonState", 4, "ngIf"], [3, "dashboardSizes", "value", "inline", "linkParameters", "buttonState", 4, "ngIf"], [3, "dashboardSizes", "inline", "value", "linkParameters", "buttonState"], [3, "dashboardSizes", "value", "inline", "linkParameters", "buttonState"]],
      template: function BooleanComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(0, BooleanComponent_kervi_switchbutton_0_Template, 1, 4, "kervi-switchbutton", 0);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, BooleanComponent_kervi_button_1_Template, 1, 4, "kervi-button", 1);
        }

        if (rf & 2) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.displayType != "button");
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.displayType == "button");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], SwitchButtonComponent, ButtonComponent],
      styles: [""]
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(BooleanComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'kervi-value-boolean',
          templateUrl: './boolean-value.component.html',
          styleUrls: ['./boolean-value.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })(); // Copyright (c) 2016, Tim Wentzlau


    function StringComponent_input_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();

        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "input", 2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("ngModelChange", function StringComponent_input_0_Template_input_ngModelChange_0_listener($event) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r3);
          var ctx_r2 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
          return ctx_r2.value.value = $event;
        });
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
      }

      if (rf & 2) {
        var ctx_r0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngModel", ctx_r0.value.value);
      }
    }

    function StringComponent_span_1_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span", 3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(2, "async");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
      }

      if (rf & 2) {
        var ctx_r1 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(2, 1, ctx_r1.value.value$));
      }
    }

    var StringComponent = /*#__PURE__*/function (_ngx_kervi__WEBPACK_I3) {
      _inherits(StringComponent, _ngx_kervi__WEBPACK_I3);

      var _super14 = _createSuper(StringComponent);

      function StringComponent(elementRef) {
        var _this17;

        _classCallCheck(this, StringComponent);

        _this17 = _super14.call(this);
        _this17.elementRef = elementRef;
        return _this17;
      }

      _createClass(StringComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var self = this;
          this.ngOnInitString();
          this.value.value$.subscribe(function (v) {
            jQuery("input", self.elementRef.nativeElement).val(v).change();
          });
        }
      }, {
        key: "onChange",
        value: function onChange(event) {
          var v = jQuery("input", this.elementRef.nativeElement).val();
          console.log("evv", v, event);
          this.value.set(v);
        }
      }]);

      return StringComponent;
    }(ngx_kervi__WEBPACK_IMPORTED_MODULE_3__["KerviStringComponent"]);

    StringComponent.ɵfac = function StringComponent_Factory(t) {
      return new (t || StringComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    StringComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: StringComponent,
      selectors: [["kervi-value-string"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 2,
      vars: 2,
      consts: [["nz-input", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "form-control pull-right", 4, "ngIf"], ["nz-input", "", 3, "ngModel", "ngModelChange"], [1, "form-control", "pull-right"]],
      template: function StringComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(0, StringComponent_input_0_Template, 1, 1, "input", 0);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, StringComponent_span_1_Template, 3, 3, "span", 1);
        }

        if (rf & 2) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.linkParameters.isInput);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", !ctx.linkParameters.isInput);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_20__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
      styles: [""]
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(StringComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'kervi-value-string',
          templateUrl: './string-value.component.html',
          styleUrls: ['./string-value.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, null);
    })(); // Copyright (c) 2016, Tim Wentzlau
    //declare var jQuery: any;
    //declare var Colors: any;


    var ColorComponent = /*#__PURE__*/function () {
      function ColorComponent() {
        _classCallCheck(this, ColorComponent);

        this.colorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.inline = false;
        this.dashboardSizes = new kervi_js__WEBPACK_IMPORTED_MODULE_9__["DashboardSizes"]();
        this.picker = null;
        this.moveDelayTimer = null;
      }

      _createClass(ColorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var self = this;
          if (!self.linkParameters.buttonWidth) this.width = this.dashboardSizes.switchWidth;else this.width = self.linkParameters.buttonWidth;

          if (this.linkParameters.isInput) {}
        }
      }, {
        key: "onChangeColor",
        value: function onChangeColor(color) {
          var self = this;

          if (self.moveDelayTimer) {
            clearTimeout(self.moveDelayTimer);
          }

          self.moveDelayTimer = setTimeout(function () {
            self.colorChange.emit(color);
          }, 200);
        }
      }, {
        key: "color",
        set: function set(v) {
          console.log("cc", v, this.picker);

          if (v) {
            this.colorValue = v;
          }
        }
      }]);

      return ColorComponent;
    }();

    ColorComponent.ɵfac = function ColorComponent_Factory(t) {
      return new (t || ColorComponent)();
    };

    ColorComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: ColorComponent,
      selectors: [["kervi-color"]],
      inputs: {
        color: "color",
        linkParameters: "linkParameters",
        inline: "inline",
        dashboardSizes: "dashboardSizes"
      },
      outputs: {
        colorChange: "colorChange"
      },
      decls: 2,
      vars: 7,
      consts: [["nz-input", "", 3, "value", "colorPicker", "cpOKButton", "cpSaveClickOutside", "cpAlphaChannel", "colorPickerChange"]],
      template: function ColorComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "nz-form-control");
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "input", 0);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("colorPickerChange", function ColorComponent_Template_input_colorPickerChange_1_listener($event) {
            return ctx.colorValue = $event;
          })("colorPickerChange", function ColorComponent_Template_input_colorPickerChange_1_listener($event) {
            return ctx.onChangeColor($event);
          });
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        }

        if (rf & 2) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"])("background", ctx.colorValue, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("value", ctx.colorValue)("colorPicker", ctx.colorValue)("cpOKButton", true)("cpSaveClickOutside", false)("cpAlphaChannel", "disabled");
        }
      },
      directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__["NzFormControlComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_20__["NzInputDirective"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_21__["ColorPickerDirective"]],
      styles: [""]
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(ColorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'kervi-color',
          templateUrl: './color.component.html',
          styleUrls: ['./color.component.scss']
        }]
      }], function () {
        return [];
      }, {
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        colorChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        linkParameters: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        inline: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dashboardSizes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })(); // Copyright (c) 2016, Tim Wentzlau


    var ColorComponent$1 = /*#__PURE__*/function (_ngx_kervi__WEBPACK_I4) {
      _inherits(ColorComponent$1, _ngx_kervi__WEBPACK_I4);

      var _super15 = _createSuper(ColorComponent$1);

      function ColorComponent$1() {
        _classCallCheck(this, ColorComponent$1);

        return _super15.call(this); //console.log("cnio",this);
      }

      _createClass(ColorComponent$1, [{
        key: "setValue",
        value: function setValue(v) {
          console.log(v);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.ngOnInitColor();
        }
      }]);

      return ColorComponent$1;
    }(ngx_kervi__WEBPACK_IMPORTED_MODULE_3__["KerviColorComponent"]);

    ColorComponent$1.ɵfac = function ColorComponent_Factory(t) {
      return new (t || ColorComponent$1)();
    };

    ColorComponent$1.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: ColorComponent$1,
      selectors: [["kervi-value-color"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 2,
      vars: 4,
      consts: [[3, "color", "linkParameters", "colorChange"]],
      template: function ColorComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "kervi-color", 0);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("colorChange", function ColorComponent_Template_kervi_color_colorChange_0_listener($event) {
            return ctx.setKerviValue($event);
          });
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(1, "async");
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        }

        if (rf & 2) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("color", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(1, 2, ctx.value.value$))("linkParameters", ctx.linkParameters);
        }
      },
      directives: [ColorComponent],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
      styles: [""]
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(ColorComponent$1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'kervi-value-color',
          templateUrl: './color-value.component.html',
          styleUrls: ['./color-value.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })(); // Copyright (c) 2016, Tim Wentzlau


    function DateTimeComponent_nz_date_picker_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();

        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "nz-date-picker", 2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("ngModelChange", function DateTimeComponent_nz_date_picker_0_Template_nz_date_picker_ngModelChange_0_listener($event) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r4);
          var ctx_r3 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
          return ctx_r3.dateTime.value = $event;
        });
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
      }

      if (rf & 2) {
        var ctx_r0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngModel", ctx_r0.dateTime.value)("nzFormat", ctx_r0.format);
      }
    }

    function DateTimeComponent_nz_date_picker_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();

        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "nz-date-picker", 3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("ngModelChange", function DateTimeComponent_nz_date_picker_1_Template_nz_date_picker_ngModelChange_0_listener($event) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r6);
          var ctx_r5 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
          return ctx_r5.dateTime.value = $event;
        });
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
      }

      if (rf & 2) {
        var ctx_r1 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngModel", ctx_r1.dateTime.value)("nzFormat", ctx_r1.format);
      }
    }

    function DateTimeComponent_nz_time_picker_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();

        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "nz-time-picker", 3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("ngModelChange", function DateTimeComponent_nz_time_picker_2_Template_nz_time_picker_ngModelChange_0_listener($event) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r8);
          var ctx_r7 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
          return ctx_r7.dateTime.value = $event;
        });
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
      }

      if (rf & 2) {
        var ctx_r2 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngModel", ctx_r2.dateTime.value)("nzFormat", ctx_r2.format);
      }
    }

    var DateTimeComponent = /*#__PURE__*/function () {
      function DateTimeComponent(elementRef) {
        _classCallCheck(this, DateTimeComponent);

        this.elementRef = elementRef;
        this.dateTimeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isReady = false;
      }

      _createClass(DateTimeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DateTimeComponent;
    }();

    DateTimeComponent.ɵfac = function DateTimeComponent_Factory(t) {
      return new (t || DateTimeComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    DateTimeComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: DateTimeComponent,
      selectors: [["kervi-datetime"]],
      inputs: {
        dateTime: "dateTime",
        type: "type",
        format: "format"
      },
      outputs: {
        dateTimeChanged: "dateTimeChanged"
      },
      decls: 3,
      vars: 3,
      consts: [["nzShowTime", "", 3, "ngModel", "nzFormat", "ngModelChange", 4, "ngIf"], [3, "ngModel", "nzFormat", "ngModelChange", 4, "ngIf"], ["nzShowTime", "", 3, "ngModel", "nzFormat", "ngModelChange"], [3, "ngModel", "nzFormat", "ngModelChange"]],
      template: function DateTimeComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(0, DateTimeComponent_nz_date_picker_0_Template, 1, 2, "nz-date-picker", 0);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, DateTimeComponent_nz_date_picker_1_Template, 1, 2, "nz-date-picker", 1);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, DateTimeComponent_nz_time_picker_2_Template, 1, 2, "nz-time-picker", 1);
        }

        if (rf & 2) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.type == "datetime");
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.type == "date");
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.type == "time");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_22__["NzDatePickerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"], ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_23__["NzTimePickerComponent"]],
      styles: [""]
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(DateTimeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'kervi-datetime',
          templateUrl: './datetimepicker.component.html',
          styleUrls: ['./datetimepicker.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        dateTime: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        format: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dateTimeChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })(); // Copyright (c) 2016, Tim Wentzlau


    var DateTimeComponent$1 = /*#__PURE__*/function (_ngx_kervi__WEBPACK_I5) {
      _inherits(DateTimeComponent$1, _ngx_kervi__WEBPACK_I5);

      var _super16 = _createSuper(DateTimeComponent$1);

      function DateTimeComponent$1() {
        _classCallCheck(this, DateTimeComponent$1);

        return _super16.call(this);
      }

      _createClass(DateTimeComponent$1, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.ngOnInitDateTime();
        }
      }]);

      return DateTimeComponent$1;
    }(ngx_kervi__WEBPACK_IMPORTED_MODULE_3__["KerviDateTimeComponent"]);

    DateTimeComponent$1.ɵfac = function DateTimeComponent_Factory(t) {
      return new (t || DateTimeComponent$1)();
    };

    DateTimeComponent$1.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: DateTimeComponent$1,
      selectors: [["kervi-value-datetime"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 1,
      vars: 3,
      consts: [[3, "type", "format", "dateTime"]],
      template: function DateTimeComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "kervi-datetime", 0);
        }

        if (rf & 2) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("type", ctx.displayType)("format", ctx.dateTimeFormat)("dateTime", ctx.value);
        }
      },
      directives: [DateTimeComponent],
      styles: [""]
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(DateTimeComponent$1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'kervi-value-datetime',
          templateUrl: './datetime-value.component.html',
          styleUrls: ['./datetime-value.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })(); // Copyright (c) 2016, Tim Wentzlau


    function KerviValueComponent_kervi_value_number_0_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "kervi-value-number", 2);
      }

      if (rf & 2) {
        var ctx_r0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("value", ctx_r0.value)("dashboardSizes", ctx_r0.dashboardSizes)("linkParameters", ctx_r0.linkParameters)("inline", ctx_r0.inline);
      }
    }

    function KerviValueComponent_kervi_value_boolean_1_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "kervi-value-boolean", 3);
      }

      if (rf & 2) {
        var ctx_r1 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("dashboardSizes", ctx_r1.dashboardSizes)("linkParameters", ctx_r1.linkParameters)("inline", ctx_r1.inline)("value", ctx_r1.value);
      }
    }

    function KerviValueComponent_kervi_value_string_2_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "kervi-value-string", 3);
      }

      if (rf & 2) {
        var ctx_r2 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("dashboardSizes", ctx_r2.dashboardSizes)("linkParameters", ctx_r2.linkParameters)("inline", ctx_r2.inline)("value", ctx_r2.value);
      }
    }

    function KerviValueComponent_kervi_value_color_3_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "kervi-value-color", 3);
      }

      if (rf & 2) {
        var ctx_r3 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("dashboardSizes", ctx_r3.dashboardSizes)("linkParameters", ctx_r3.linkParameters)("inline", ctx_r3.inline)("value", ctx_r3.value);
      }
    }

    function KerviValueComponent_kervi_value_datetime_4_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "kervi-value-datetime", 3);
      }

      if (rf & 2) {
        var ctx_r4 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("dashboardSizes", ctx_r4.dashboardSizes)("linkParameters", ctx_r4.linkParameters)("inline", ctx_r4.inline)("value", ctx_r4.value);
      }
    }

    var KerviValueComponent = function KerviValueComponent() {
      _classCallCheck(this, KerviValueComponent);

      this.inline = false;
      this.dashboardSizes = new kervi_js__WEBPACK_IMPORTED_MODULE_9__["DashboardSizes"]();
    };

    KerviValueComponent.ɵfac = function KerviValueComponent_Factory(t) {
      return new (t || KerviValueComponent)();
    };

    KerviValueComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: KerviValueComponent,
      selectors: [["kervi-value"]],
      inputs: {
        value: "value",
        dashboardPanel: "dashboardPanel",
        linkParameters: "linkParameters",
        inline: "inline",
        dashboardSizes: "dashboardSizes"
      },
      decls: 5,
      vars: 5,
      consts: [[3, "value", "dashboardSizes", "linkParameters", "inline", 4, "ngIf"], [3, "dashboardSizes", "linkParameters", "inline", "value", 4, "ngIf"], [3, "value", "dashboardSizes", "linkParameters", "inline"], [3, "dashboardSizes", "linkParameters", "inline", "value"]],
      template: function KerviValueComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(0, KerviValueComponent_kervi_value_number_0_Template, 1, 4, "kervi-value-number", 0);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, KerviValueComponent_kervi_value_boolean_1_Template, 1, 4, "kervi-value-boolean", 1);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, KerviValueComponent_kervi_value_string_2_Template, 1, 4, "kervi-value-string", 1);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(3, KerviValueComponent_kervi_value_color_3_Template, 1, 4, "kervi-value-color", 1);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(4, KerviValueComponent_kervi_value_datetime_4_Template, 1, 4, "kervi-value-datetime", 1);
        }

        if (rf & 2) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.value.typeName == "Number");
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.value.typeName == "Boolean");
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.value.typeName == "String");
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.value.typeName == "Color");
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.value.typeName == "DateTime");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], NumberComponent, BooleanComponent, StringComponent, ColorComponent$1, DateTimeComponent$1],
      styles: [""]
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(KerviValueComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'kervi-value',
          templateUrl: './kervi-value.component.html',
          styleUrls: ['./kervi-value.component.scss'] //directives: [ CommonModule  ],

        }]
      }], function () {
        return [];
      }, {
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dashboardPanel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        linkParameters: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        inline: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dashboardSizes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })(); // Copyright (c) 2016, Tim Wentzlau


    function ActionComponent_kervi_switchbutton_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();

        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "kervi-switchbutton", 2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("buttonState", function ActionComponent_kervi_switchbutton_0_Template_kervi_switchbutton_buttonState_0_listener($event) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r3);
          var ctx_r2 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
          return ctx_r2.setActionState($event);
        });
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(1, "async");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
      }

      if (rf & 2) {
        var ctx_r0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("dashboardSizes", ctx_r0.dashboardSizes)("inline", ctx_r0.inline)("value", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(1, 4, ctx_r0.state))("linkParameters", ctx_r0.linkParameters);
      }
    }

    function ActionComponent_kervi_button_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();

        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "kervi-button", 3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("buttonState", function ActionComponent_kervi_button_1_Template_kervi_button_buttonState_0_listener($event) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r5);
          var ctx_r4 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
          return ctx_r4.setActionState($event);
        });
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(1, "async");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
      }

      if (rf & 2) {
        var ctx_r1 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("title", ctx_r1.action.name)("dashboardSizes", ctx_r1.dashboardSizes)("value", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(1, 5, ctx_r1.state))("inline", ctx_r1.inline)("linkParameters", ctx_r1.linkParameters);
      }
    } //import { TemplateService } from '../../template.service';


    var ActionComponent = /*#__PURE__*/function (_ngx_kervi__WEBPACK_I6) {
      _inherits(ActionComponent, _ngx_kervi__WEBPACK_I6);

      var _super17 = _createSuper(ActionComponent);

      function ActionComponent() {
        _classCallCheck(this, ActionComponent);

        return _super17.call(this);
      }

      _createClass(ActionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.ngOnInitAction();
        }
      }]);

      return ActionComponent;
    }(ngx_kervi__WEBPACK_IMPORTED_MODULE_3__["KerviActionComponent"]);

    ActionComponent.ɵfac = function ActionComponent_Factory(t) {
      return new (t || ActionComponent)();
    };

    ActionComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: ActionComponent,
      selectors: [["kervi-action"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 2,
      vars: 2,
      consts: [[3, "dashboardSizes", "inline", "value", "linkParameters", "buttonState", 4, "ngIf"], [3, "title", "dashboardSizes", "value", "inline", "linkParameters", "buttonState", 4, "ngIf"], [3, "dashboardSizes", "inline", "value", "linkParameters", "buttonState"], [3, "title", "dashboardSizes", "value", "inline", "linkParameters", "buttonState"]],
      template: function ActionComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(0, ActionComponent_kervi_switchbutton_0_Template, 2, 6, "kervi-switchbutton", 0);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, ActionComponent_kervi_button_1_Template, 2, 7, "kervi-button", 1);
        }

        if (rf & 2) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.displayType != "button");
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.displayType == "button");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], SwitchButtonComponent, ButtonComponent],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
      styles: [""]
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(ActionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'kervi-action',
          templateUrl: './action.component.html',
          styleUrls: ['./action.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })(); // Copyright (c) 2016, Tim Wentzlau


    var MPEGViewerComponent = /*#__PURE__*/function () {
      function MPEGViewerComponent(kerviService, domSanitizer) {
        _classCallCheck(this, MPEGViewerComponent);

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

      _createClass(MPEGViewerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var self = this;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.stream) {
            this.streamSubscription.unsubscribe();
            this.stream.close();
          }
        }
      }, {
        key: "setSource",
        value: function setSource(source) {
          console.log("sc", source);
          var self = this;

          if (this.stream) {
            this.streamSubscription.unsubscribe();
            this.stream.close();
          }

          this.stream = this.kerviService.GetStream(source, ['IMAGE_FRAME']);
          console.log("scx", this.stream);
          this.streamSubscription = this.stream.events$.subscribe(function (event) {
            //console.log('ce', event);
            if (event) {
              var blob = new Blob([event.data], {
                type: "image/jpeg"
              });
              self.streamData = self.domSanitizer.bypassSecurityTrustUrl(URL.createObjectURL(blob));
              self.fpsCounter += 1;
              var now = new Date();
              var fpsDiff = now.getTime() - self.fpsTime.getTime();
              var seconds = fpsDiff / 1000;

              if (seconds > 1) {
                self.fps = self.fpsCounter / seconds; //console.log('fps', self.fpsCounter, seconds, source, self.fps);

                self.fpsCounter = 0;
                self.fpsTime = now;
              }
            }
          });
        }
      }, {
        key: "imageReady",
        value: function imageReady() {
          if (this.firstLoad) {
            this.firstLoad = false;
            this.imageLoaded.emit(true);
          }
        }
      }, {
        key: "cameraSource",
        set: function set(id) {
          console.log('set cam source', id);
          this.setSource(id);
        }
      }]);

      return MPEGViewerComponent;
    }();

    MPEGViewerComponent.ɵfac = function MPEGViewerComponent_Factory(t) {
      return new (t || MPEGViewerComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(ngx_kervi__WEBPACK_IMPORTED_MODULE_3__["NGXKerviService"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]));
    };

    MPEGViewerComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: MPEGViewerComponent,
      selectors: [["kervi-mpeg-viewer"]],
      inputs: {
        cameraSource: "cameraSource",
        width: "width",
        height: "height",
        streamData: "streamData",
        fps: "fps"
      },
      outputs: {
        imageLoaded: "imageLoaded"
      },
      decls: 1,
      vars: 5,
      consts: [[1, "camImage", 3, "load"]],
      template: function MPEGViewerComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "img", 0);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("load", function MPEGViewerComponent_Template_img_load_0_listener() {
            return ctx.imageReady();
          });
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        }

        if (rf & 2) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"])("height", ctx.height, "%")("width", ctx.width, "%");
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"])("src", ctx.streamData, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      styles: ["#video-viewer[_ngcontent-%COMP%]{margin-top:-20px}.cam-pad-area[_ngcontent-%COMP%]{color:#fff;display:inline-block;left:389px;position:absolute;top:132px;vertical-align:middle;width:200px;z-index:1200}"]
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(MPEGViewerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'kervi-mpeg-viewer',
          templateUrl: './mpeg-viewer.component.html',
          styleUrls: ['./mpeg-viewer.component.scss']
        }]
      }], function () {
        return [{
          type: ngx_kervi__WEBPACK_IMPORTED_MODULE_3__["NGXKerviService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]
        }];
      }, {
        cameraSource: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        width: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        height: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        imageLoaded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        streamData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        fps: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    var _c0$1 = ["nipplePad"]; //declare var nipplejs: any;

    var NipplePadComponent = /*#__PURE__*/function () {
      function NipplePadComponent() {
        _classCallCheck(this, NipplePadComponent);

        this.mode = 'semi';
        this.XMin = 0;
        this.XMax = 0;
        this.YMin = 0;
        this.YMax = 0;
        this.moveDelayTimer = null;
      }

      _createClass(NipplePadComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var self = this;
          this.XMax = this.XValue != null ? this.XValue.maxValue : 0;
          this.XMin = this.XValue != null ? this.XValue.minValue : 0;
          this.YMax = this.YValue != null ? this.YValue.maxValue : 0;
          this.YMin = this.XValue != null ? this.YValue.minValue : 0;
          console.log('np', this.nipplePad, this.nipplePad.nativeElement);
          this.manager = Object(nipplejs__WEBPACK_IMPORTED_MODULE_24__["create"])({
            zone: this.nipplePad.nativeElement,
            position: {
              left: '50%',
              top: '50%'
            },
            mode: 'semi',
            restJoystick: this.autoCenter
          });
          this.manager.on('start', function (evt, nipple) {
            console.log('np start', nipple);
          });
          this.manager.on('move', function (evt, nipple) {
            console.log('np move', nipple);
            var x = nipple.vector.x;
            var y = nipple.vector.y;

            if (self.moveDelayTimer) {
              clearTimeout(self.moveDelayTimer);
            }

            self.moveDelayTimer = setTimeout(function () {
              if (self.XValue) {
                var valueX = 0;

                if (x < 0) {
                  valueX = self.XMin * x;
                } else if (x > 0) {
                  valueX = self.XMax * x;
                }

                self.XValue.set(valueX);
              }

              if (self.YValue) {
                var valueY = 0;

                if (y < 0) {
                  valueY = self.YMin * y;
                } else if (y > 0) {
                  valueY = self.YMax * y;
                }

                self.YValue.set(valueY);
              }
            }, 0);
          });
          this.manager.on('end', function (evt, nipple) {
            console.log('np end', nipple);

            if (self.autoCenter) {
              if (self.XValue) {
                self.XValue.set(0);
              }

              if (self.YValue) {
                self.YValue.set(0);
              }
            }
          });
        }
      }]);

      return NipplePadComponent;
    }();

    NipplePadComponent.ɵfac = function NipplePadComponent_Factory(t) {
      return new (t || NipplePadComponent)();
    };

    NipplePadComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: NipplePadComponent,
      selectors: [["kervi-nipple-pad"]],
      viewQuery: function NipplePadComponent_Query(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"])(_c0$1, true);
        }

        if (rf & 2) {
          var _t;

          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"])(_t = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"])()) && (ctx.nipplePad = _t.first);
        }
      },
      inputs: {
        XValue: "XValue",
        YValue: "YValue",
        autoCenter: "autoCenter",
        mode: "mode"
      },
      decls: 2,
      vars: 0,
      consts: [[1, "nipple-pad", 2, "width", "100%", "height", "100%", "position", "relative"], ["nipplePad", ""]],
      template: function NipplePadComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "div", 0, 1);
        }
      },
      styles: [""]
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(NipplePadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'kervi-nipple-pad',
          templateUrl: './nipple-pad.component.html',
          styleUrls: ['./nipple-pad.component.css']
        }]
      }], function () {
        return [];
      }, {
        XValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        YValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        autoCenter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        mode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nipplePad: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['nipplePad']
        }]
      });
    })();

    var _c0$2 = ["videoViewer"];

    function CamViewerComponent_ng_container_0_div_3_button_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();

        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "button", 12);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function CamViewerComponent_ng_container_0_div_3_button_3_Template_button_click_0_listener() {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r9);
          var observer_r7 = ctx.$implicit;
          var ctx_r8 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3);
          return ctx_r8.changeSource(observer_r7.ui.stream);
        });
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
      }

      if (rf & 2) {
        var observer_r7 = ctx.$implicit;
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"])(" ", observer_r7.name, "");
      }
    }

    function CamViewerComponent_ng_container_0_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();

        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 11);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "button", 12);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function CamViewerComponent_ng_container_0_div_3_Template_button_click_1_listener() {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r11);
          var ctx_r10 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
          return ctx_r10.changeSource(ctx_r10.cameraSource);
        });
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(2, "base");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(3, CamViewerComponent_ng_container_0_div_3_button_3_Template, 2, 1, "button", 13);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
      }

      if (rf & 2) {
        var ctx_r3 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngForOf", ctx_r3.streamObservers);
      }
    }

    function CamViewerComponent_ng_container_0_div_8_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 14);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(1, "kervi-nipple-pad", 15);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
      }

      if (rf & 2) {
        var ctx_r4 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"])("left", 33, "%")("top", 0, "px")("bottom", 0, "px")("right", 33, "%");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("XValue", ctx_r4.pan)("YValue", ctx_r4.tilt);
      }
    }

    function CamViewerComponent_ng_container_0_ng_container_10_kervi_action_1_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "kervi-action", 17);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(1, "translate");
      }

      if (rf & 2) {
        var action_r12 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])().$implicit;
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"])("title", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(1, 2, action_r12.name));
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("action", action_r12);
      }
    }

    function CamViewerComponent_ng_container_0_ng_container_10_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"])(0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, CamViewerComponent_ng_container_0_ng_container_10_kervi_action_1_Template, 2, 4, "kervi-action", 16);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"])();
      }

      if (rf & 2) {
        var action_r12 = ctx.$implicit;
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", action_r12.visible);
      }
    }

    function CamViewerComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();

        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"])(0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "div", 1, 2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(3, CamViewerComponent_ng_container_0_div_3_Template, 4, 1, "div", 3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(4, "span", 4);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(5, "kervi-mpeg-viewer", 5);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("imageLoaded", function CamViewerComponent_ng_container_0_Template_kervi_mpeg_viewer_imageLoaded_5_listener() {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r16);
          var ctx_r15 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
          return ctx_r15.imageLoaded();
        });
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(6, "canvas", 6);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(7, "canvas", 7);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(8, CamViewerComponent_ng_container_0_div_8_Template, 2, 10, "div", 8);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(9, "div", 9);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(10, CamViewerComponent_ng_container_0_ng_container_10_Template, 2, 1, "ng-container", 10);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"])();
      }

      if (rf & 2) {
        var ctx_r0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"])("height", ctx_r0.camHeight, "px")("width", ctx_r0.camWidth, "px");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r0.streamObservers.length > 0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("height", 100)("cameraSource", ctx_r0.selectedSource);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"])("height", ctx_r0.camHeight, "px")("width", ctx_r0.camWidth, "px");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r0.showCamPad);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngForOf", ctx_r0.camera.actions);
      }
    }

    function CamViewerComponent_ng_container_1_div_7_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 23);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(1, "kervi-nipple-pad", 24);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
      }

      if (rf & 2) {
        var ctx_r18 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"])("left", 0, "px")("top", 0, "px")("bottom", 0, "px")("right", 0, "px");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("XValue", ctx_r18.pan)("YValue", ctx_r18.tilt)("mode", "static");
      }
    }

    function CamViewerComponent_ng_container_1_ng_container_9_kervi_action_1_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "kervi-action", 17);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(1, "translate");
      }

      if (rf & 2) {
        var action_r20 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])().$implicit;
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"])("title", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(1, 2, action_r20.name));
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("action", action_r20);
      }
    }

    function CamViewerComponent_ng_container_1_ng_container_9_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"])(0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, CamViewerComponent_ng_container_1_ng_container_9_kervi_action_1_Template, 2, 4, "kervi-action", 16);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"])();
      }

      if (rf & 2) {
        var action_r20 = ctx.$implicit;
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", action_r20.ui.visible);
      }
    }

    function CamViewerComponent_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();

        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"])(0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "div", 18, 2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(3, "span", 19);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(4, "kervi-mpeg-viewer", 20);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("imageLoaded", function CamViewerComponent_ng_container_1_Template_kervi_mpeg_viewer_imageLoaded_4_listener() {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r24);
          var ctx_r23 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
          return ctx_r23.imageLoaded();
        });
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(5, "canvas", 21);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(6, "canvas", 7);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(7, CamViewerComponent_ng_container_1_div_7_Template, 2, 11, "div", 22);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(8, "div");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(9, CamViewerComponent_ng_container_1_ng_container_9_Template, 2, 1, "ng-container", 10);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"])();
      }

      if (rf & 2) {
        var ctx_r1 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(4);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("width", 100)("cameraSource", ctx_r1.cameraSource);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r1.showCamPad);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngForOf", ctx_r1.camera.actions);
      }
    }

    var CamViewerComponent = /*#__PURE__*/function (_ngx_kervi__WEBPACK_I7) {
      _inherits(CamViewerComponent, _ngx_kervi__WEBPACK_I7);

      var _super18 = _createSuper(CamViewerComponent);

      function CamViewerComponent(elementRef) {
        var _this18;

        _classCallCheck(this, CamViewerComponent);

        _this18 = _super18.call(this);
        _this18.elementRef = elementRef;
        _this18.showCamPad = false;
        _this18.padSize = 180;
        return _this18;
      }

      _createClass(CamViewerComponent, [{
        key: "imageLoaded",
        value: function imageLoaded() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var self = this;

          if (this.camera !== null) {
            var element = self.videoViewer.nativeElement;
            var viewPortHeight = window.innerHeight;
            var viewPortWidth = window.innerWidth;
            this.camHeight = viewPortHeight - 65;
            this.camWidth = viewPortWidth;
            console.log('avic', this.camHeight, this.camWidth);
            setTimeout(function () {
              var h = element.offsetHeight;
              var w = element.offsetWidth;

              if (w < self.padSize) {
                self.padSize = w - 10;
              }

              console.log('cami', h, w, self.padSize, element);
              self.camPadTop = h / 2 - self.padSize / 2;
              self.camPadLeft = w / 2 - self.padSize / 2;
              self.showCamPad = true;
            }, 0);
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.ngOnInitCamera();
        }
      }]);

      return CamViewerComponent;
    }(ngx_kervi__WEBPACK_IMPORTED_MODULE_3__["KerviCameraComponent"]);

    CamViewerComponent.ɵfac = function CamViewerComponent_Factory(t) {
      return new (t || CamViewerComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    CamViewerComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: CamViewerComponent,
      selectors: [["kervi-cam-viewer"]],
      viewQuery: function CamViewerComponent_Query(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"])(_c0$2, true);
        }

        if (rf & 2) {
          var _t;

          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"])(_t = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"])()) && (ctx.videoViewer = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 2,
      vars: 2,
      consts: [[4, "ngIf"], ["id", "video-viewer", 1, "video", "video-background", 2, "text-align", "center", "position", "fixed", "top", "60px", "left", "0px", "height", "100%"], ["videoViewer", ""], ["style", "position:fixed;z-index:3000", 4, "ngIf"], [1, "camImage", 2, "top", "0px", "left", "0px"], [3, "height", "cameraSource", "imageLoaded"], ["id", "camCanvas", 2, "position", "absolute", "top", "0px", "left", "0px"], ["id", "poiCanvas", 2, "position", "absolute", "top", "0px", "left", "0px", "width", "100%", "height", "100%"], ["class", "cam-pad-area", "style", "position:absolute;z-index: 2000", 3, "left", "top", "bottom", "right", 4, "ngIf"], [2, "position", "absolute", "top", "30px", "left", "0px", "width", "100%", "height", "50px"], [4, "ngFor", "ngForOf"], [2, "position", "fixed", "z-index", "3000"], [3, "click"], [3, "click", 4, "ngFor", "ngForOf"], [1, "cam-pad-area", 2, "position", "absolute", "z-index", "2000"], [3, "XValue", "YValue"], [3, "title", "action", 4, "ngIf"], [3, "title", "action"], ["id", "video-viewer", 1, "video", 2, "overflow", "hidden", "position", "relative", "width", "100%"], [1, "camImage", 2, "top", "0px", "left", "0px", "height", "100%", "width", "100%"], [3, "width", "cameraSource", "imageLoaded"], ["id", "camCanvas", 2, "position", "absolute", "top", "0px", "left", "0px", "width", "100%", "height", "100%"], ["class", "cam-pad-area", "style", "position:absolute", 3, "left", "top", "bottom", "right", 4, "ngIf"], [1, "cam-pad-area", 2, "position", "absolute"], [3, "XValue", "YValue", "mode"]],
      template: function CamViewerComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(0, CamViewerComponent_ng_container_0_Template, 11, 13, "ng-container", 0);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, CamViewerComponent_ng_container_1_Template, 10, 4, "ng-container", 0);
        }

        if (rf & 2) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.isBackground && ctx.camera !== null);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", !ctx.isBackground && ctx.camera !== null);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], MPEGViewerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], NipplePadComponent, ActionComponent],
      pipes: [ngx_kervi__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]],
      styles: [""]
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(CamViewerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'kervi-cam-viewer',
          templateUrl: './cam-viewer.component.html',
          styleUrls: ['./cam-viewer.component.css']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        videoViewer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['videoViewer']
        }]
      });
    })(); // Copyright (c) 2016, Tim Wentzlau


    var _c0$3 = ["chart"];

    var GaugeComponent = /*#__PURE__*/function () {
      function GaugeComponent(kerviService, templateService) {
        _classCallCheck(this, GaugeComponent);

        this.kerviService = kerviService;
        this.templateService = templateService;
        this.value = null;
        this.linkParameters = null;
        this.dashboardSizes = new kervi_js__WEBPACK_IMPORTED_MODULE_9__["DashboardSizes"]();
        this.series = [];
      }

      _createClass(GaugeComponent, [{
        key: "createElement",
        value: function createElement() {
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
                  size: '70%'
                },
                track: {
                  startAngle: -135,
                  endAngle: 135
                },
                dataLabels: {
                  name: {
                    show: true,
                    color: this.color("color", ".kervi-gauge-text"),
                    fontSize: "14px"
                  },
                  value: {
                    fontSize: "24px",
                    color: this.color("color", ".kervi-gauge-text"),
                    show: true
                  }
                }
              }
            },
            colors: [this.color("color", ".kervi-gauge")],
            series: this.series,
            stroke: {
              lineCap: "round"
            },
            labels: [this.value.name]
          };

          if (this.chartObj) {
            this.chartObj.destroy();
          }

          console.log("create gauge", this.value.id);
          this.chartObj = new ApexCharts(this.chartElement.nativeElement, this.options);
          this.chartObj.render();
        }
      }, {
        key: "render",
        value: function render() {
          return this.chartObj.render();
        }
      }, {
        key: "color",
        value: function color(style, selector) {
          return this.templateService.getColor(style, selector);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this19 = this;

          var self = this;
          rxjs__WEBPACK_IMPORTED_MODULE_15__["asapScheduler"].schedule(function () {
            _this19.createElement();
          });
          this.value.value$.subscribe(function (v) {
            if (self.chartObj && v) {
              // console.log("gv", v);
              self.chartObj.updateSeries([v]);
            }
          });
        }
      }, {
        key: "loadPeriod",
        value: function loadPeriod() {
          var self = this; //console.log("lp", this.periodStart, this.periodEnd);
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
        }
      }, {
        key: "cleanData",
        value: function cleanData() {// if(this.updateChart){
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
        }
      }]);

      return GaugeComponent;
    }();

    GaugeComponent.ɵfac = function GaugeComponent_Factory(t) {
      return new (t || GaugeComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(ngx_kervi__WEBPACK_IMPORTED_MODULE_3__["NGXKerviService"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(ngx_kervi__WEBPACK_IMPORTED_MODULE_3__["KerviTemplateService"]));
    };

    GaugeComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: GaugeComponent,
      selectors: [["kervi-gauge"]],
      viewQuery: function GaugeComponent_Query(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"])(_c0$3, true);
        }

        if (rf & 2) {
          var _t;

          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"])(_t = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"])()) && (ctx.chartElement = _t.first);
        }
      },
      inputs: {
        value: "value",
        linkParameters: "linkParameters",
        type: "type",
        size: "size",
        dashboardSizes: "dashboardSizes"
      },
      decls: 2,
      vars: 0,
      consts: [["chart", ""]],
      template: function GaugeComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "div", null, 0);
        }
      },
      styles: [""]
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(GaugeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'kervi-gauge',
          templateUrl: './gauge.component.html',
          styleUrls: ['./gauge.component.scss']
        }]
      }], function () {
        return [{
          type: ngx_kervi__WEBPACK_IMPORTED_MODULE_3__["NGXKerviService"]
        }, {
          type: ngx_kervi__WEBPACK_IMPORTED_MODULE_3__["KerviTemplateService"]
        }];
      }, {
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        linkParameters: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        size: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dashboardSizes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        chartElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['chart']
        }]
      });
    })(); // Copyright (c) 2016, Tim Wentzlau


    var _c0$4 = ["chart"];

    var KerviChartComponent = /*#__PURE__*/function () {
      function KerviChartComponent(kerviService, templateService) {
        _classCallCheck(this, KerviChartComponent);

        this.kerviService = kerviService;
        this.templateService = templateService;
        this.value = null;
        this.linkParameters = null;
        this.dashboardSizes = new kervi_js__WEBPACK_IMPORTED_MODULE_9__["DashboardSizes"]();
        this.series = [];
      }

      _createClass(KerviChartComponent, [{
        key: "createElement",
        value: function createElement() {
          this.series = [{
            name: this.value.name,
            data: []
          }];
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
              align: 'left',
              style: {
                color: this.color("color", ".kervi-chart-axis") //"#6c757d ",

              }
            },
            markers: {
              size: 0
            },
            xaxis: {
              type: 'datetime',
              labels: {
                style: {
                  colors: this.color("color", ".kervi-chart-axis") //"#6c757d ",

                }
              },
              axisBorder: {
                show: true,
                color: this.color("color", ".kervi-chart-axis"),
                height: 1,
                width: '100%',
                offsetX: 0,
                offsetY: 0
              } //range: 1552983230 - 300,

            },
            yaxis: {
              max: this.value.maxValue,
              min: this.value.minValue,
              labels: {
                style: {
                  colors: this.color("color", ".kervi-chart-axis")
                }
              }
            },
            legend: {
              show: false
            },
            grid: {
              show: this.linkParameters.chartGrid,
              borderColor: this.color("color", ".kervi-chart-grid"),
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
            colors: [this.color("color", ".kervi-chart-line")],
            series: this.series
          };

          if (this.chartObj) {
            this.chartObj.destroy();
          }

          if (!this.linkParameters.chartTitle) delete this.options["title"];
          console.log("create chart", this.value.id);
          this.chartObj = new ApexCharts(this.chartElement.nativeElement, this.options);
          this.chartObj.render();
        }
      }, {
        key: "color",
        value: function color(style, selector) {
          return this.templateService.getColor(style, selector);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this20 = this;

          var self = this;
          rxjs__WEBPACK_IMPORTED_MODULE_15__["asapScheduler"].schedule(function () {
            _this20.createElement();
          });
          this.value.value$.subscribe(function (v) {
            if (self.chartObj) {
              self.series[0].data.push([self.value.valueTS.getTime(), v]);
              self.chartObj.updateSeries(self.series);
            }
          });
        }
      }, {
        key: "loadPeriod",
        value: function loadPeriod() {
          var self = this; //console.log("lp", this.periodStart, this.periodEnd);
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
        }
      }, {
        key: "cleanData",
        value: function cleanData() {// if(this.updateChart){
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
        }
      }]);

      return KerviChartComponent;
    }();

    KerviChartComponent.ɵfac = function KerviChartComponent_Factory(t) {
      return new (t || KerviChartComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(ngx_kervi__WEBPACK_IMPORTED_MODULE_3__["NGXKerviService"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(ngx_kervi__WEBPACK_IMPORTED_MODULE_3__["KerviTemplateService"]));
    };

    KerviChartComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: KerviChartComponent,
      selectors: [["kervi-chart"]],
      viewQuery: function KerviChartComponent_Query(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"])(_c0$4, true);
        }

        if (rf & 2) {
          var _t;

          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"])(_t = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"])()) && (ctx.chartElement = _t.first);
        }
      },
      inputs: {
        value: "value",
        linkParameters: "linkParameters",
        type: "type",
        size: "size",
        dashboardSizes: "dashboardSizes"
      },
      decls: 2,
      vars: 0,
      consts: [["chart", ""]],
      template: function KerviChartComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "div", null, 0);
        }
      },
      styles: [""]
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(KerviChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'kervi-chart',
          templateUrl: './chart.component.html',
          styleUrls: ['./chart.component.scss']
        }]
      }], function () {
        return [{
          type: ngx_kervi__WEBPACK_IMPORTED_MODULE_3__["NGXKerviService"]
        }, {
          type: ngx_kervi__WEBPACK_IMPORTED_MODULE_3__["KerviTemplateService"]
        }];
      }, {
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        linkParameters: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        size: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dashboardSizes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        chartElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['chart']
        }]
      });
    })();

    function WidgetComponent_ng_container_0_div_1_i_2_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "i", 11);
      }

      if (rf & 2) {
        var ctx_r6 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("nzType", ctx_r6.linkParameters.labelIcon);
      }
    }

    function WidgetComponent_ng_container_0_div_1_span_3_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
      }

      if (rf & 2) {
        var ctx_r7 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r7.linkParameters.label);
      }
    }

    function WidgetComponent_ng_container_0_div_1_kervi_value_5_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "kervi-value", 12);
      }

      if (rf & 2) {
        var ctx_r8 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("value", ctx_r8.component)("inline", false)("dashboardSizes", ctx_r8.dashboardSizes)("linkParameters", ctx_r8.linkParameters);
      }
    }

    function WidgetComponent_ng_container_0_div_1_kervi_action_6_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "kervi-action", 13);
      }

      if (rf & 2) {
        var ctx_r9 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("action", ctx_r9.component)("inline", false)("dashboardSizes", ctx_r9.dashboardSizes)("linkParameters", ctx_r9.linkParameters);
      }
    }

    function WidgetComponent_ng_container_0_div_1_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 5);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "div", 6);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, WidgetComponent_ng_container_0_div_1_i_2_Template, 1, 1, "i", 7);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(3, WidgetComponent_ng_container_0_div_1_span_3_Template, 2, 1, "span", 0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(4, "div", 8);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(5, WidgetComponent_ng_container_0_div_1_kervi_value_5_Template, 1, 4, "kervi-value", 9);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(6, WidgetComponent_ng_container_0_div_1_kervi_action_6_Template, 1, 4, "kervi-action", 10);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
      }

      if (rf & 2) {
        var ctx_r4 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r4.linkParameters.labelIcon);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r4.linkParameters.label);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r4.component.componentType == "KerviValue");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r4.component.componentType == "action");
      }
    }

    function WidgetComponent_ng_container_0_div_2_i_2_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "i", 19);
      }

      if (rf & 2) {
        var ctx_r10 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("nzType", ctx_r10.linkParameters.labelIcon);
      }
    }

    function WidgetComponent_ng_container_0_div_2_span_3_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "span", 20);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
      }

      if (rf & 2) {
        var ctx_r11 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r11.linkParameters.label);
      }
    }

    function WidgetComponent_ng_container_0_div_2_kervi_value_5_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "kervi-value", 12);
      }

      if (rf & 2) {
        var ctx_r12 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("value", ctx_r12.component)("inline", false)("dashboardSizes", ctx_r12.dashboardSizes)("linkParameters", ctx_r12.linkParameters);
      }
    }

    function WidgetComponent_ng_container_0_div_2_kervi_action_6_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "kervi-action", 13);
      }

      if (rf & 2) {
        var ctx_r13 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("action", ctx_r13.component)("inline", false)("dashboardSizes", ctx_r13.dashboardSizes)("linkParameters", ctx_r13.linkParameters);
      }
    }

    function WidgetComponent_ng_container_0_div_2_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 14);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "div", 15);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, WidgetComponent_ng_container_0_div_2_i_2_Template, 1, 1, "i", 16);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(3, WidgetComponent_ng_container_0_div_2_span_3_Template, 2, 1, "span", 17);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(4, "div", 18);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(5, WidgetComponent_ng_container_0_div_2_kervi_value_5_Template, 1, 4, "kervi-value", 9);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(6, WidgetComponent_ng_container_0_div_2_kervi_action_6_Template, 1, 4, "kervi-action", 10);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
      }

      if (rf & 2) {
        var ctx_r5 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r5.linkParameters.labelIcon);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r5.linkParameters.label);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r5.component.componentType == "KerviValue");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r5.component.componentType == "action");
      }
    }

    function WidgetComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"])(0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, WidgetComponent_ng_container_0_div_1_Template, 7, 4, "div", 3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, WidgetComponent_ng_container_0_div_2_Template, 7, 4, "div", 4);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"])();
      }

      if (rf & 2) {
        var ctx_r0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", !ctx_r0.inline);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r0.inline);
      }
    }

    function WidgetComponent_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"])(0, 21);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(1, "kervi-cam-viewer", 22);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"])();
      }

      if (rf & 2) {
        var ctx_r1 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("isBackground", false)("camera", ctx_r1.component)("linkParameters", ctx_r1.linkParameters);
      }
    }

    function WidgetComponent_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"])(0, 21);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(1, "kervi-gauge", 23);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"])();
      }

      if (rf & 2) {
        var ctx_r2 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("dashboardSizes", ctx_r2.dashboardSizes)("value", ctx_r2.component)("linkParameters", ctx_r2.linkParameters);
      }
    }

    function WidgetComponent_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"])(0, 24);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(1, "kervi-chart", 23);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"])();
      }

      if (rf & 2) {
        var ctx_r3 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("dashboardSizes", ctx_r3.dashboardSizes)("value", ctx_r3.component)("linkParameters", ctx_r3.linkParameters);
      }
    }

    var WidgetComponent = /*#__PURE__*/function (_ngx_kervi__WEBPACK_I8) {
      _inherits(WidgetComponent, _ngx_kervi__WEBPACK_I8);

      var _super19 = _createSuper(WidgetComponent);

      function WidgetComponent() {
        _classCallCheck(this, WidgetComponent);

        return _super19.call(this);
      }

      _createClass(WidgetComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.ngOnInitWidget();
        }
      }]);

      return WidgetComponent;
    }(ngx_kervi__WEBPACK_IMPORTED_MODULE_3__["KerviWidgetComponent"]);

    WidgetComponent.ɵfac = function WidgetComponent_Factory(t) {
      return new (t || WidgetComponent)();
    };

    WidgetComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: WidgetComponent,
      selectors: [["kervi-widget"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 4,
      vars: 4,
      consts: [[4, "ngIf"], ["class", "block-component", 4, "ngIf"], ["class", "", 4, "ngIf"], ["fxLayout", "row", "class", "kervi-block-widget", 4, "ngIf"], ["class", "kervi-inline-widget", 4, "ngIf"], ["fxLayout", "row", 1, "kervi-block-widget"], ["fxFlex", "60", 1, "kervi-value-label"], ["nz-icon", "", 3, "nzType", 4, "ngIf"], ["fxFlex", "", 1, "kervi-value-section"], [3, "value", "inline", "dashboardSizes", "linkParameters", 4, "ngIf"], [3, "action", "inline", "dashboardSizes", "linkParameters", 4, "ngIf"], ["nz-icon", "", 3, "nzType"], [3, "value", "inline", "dashboardSizes", "linkParameters"], [3, "action", "inline", "dashboardSizes", "linkParameters"], [1, "kervi-inline-widget"], [1, "kervi-value-label"], ["nz-icon", "", "style", "display:inline", 3, "nzType", 4, "ngIf"], ["style", "display:inline", 4, "ngIf"], [1, "kervi-value-section"], ["nz-icon", "", 2, "display", "inline", 3, "nzType"], [2, "display", "inline"], [1, "block-component"], [3, "isBackground", "camera", "linkParameters"], [3, "dashboardSizes", "value", "linkParameters"], [1, ""]],
      template: function WidgetComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(0, WidgetComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, WidgetComponent_ng_container_1_Template, 2, 3, "ng-container", 1);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, WidgetComponent_ng_container_2_Template, 2, 3, "ng-container", 1);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(3, WidgetComponent_ng_container_3_Template, 2, 3, "ng-container", 2);
        }

        if (rf & 2) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.widgetType == "value");
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.widgetType == "camera");
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.widgetType == "gauge");
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.widgetType == "chart");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__["NzIconDirective"], KerviValueComponent, ActionComponent, CamViewerComponent, GaugeComponent, KerviChartComponent],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(WidgetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'kervi-widget',
          templateUrl: "./widget.component.html",
          styles: []
        }]
      }], function () {
        return [];
      }, null);
    })(); // Copyright (c) 2016, Tim Wentzlau


    function UserLogComponent_nz_timeline_item_1_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "nz-timeline-item", 4);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "strong");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(3, "br");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(4, "span", 5);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(5);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(6, "date");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(7, "br");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(8);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(9, "nz-divider");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
      }

      if (rf & 2) {
        var message_r7 = ctx.$implicit;
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();

        var _r1 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"])(4);

        var _r3 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"])(6);

        var _r5 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"])(8);

        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("nzDot", message_r7.level == 1 ? _r1 : message_r7.level == 2 ? _r3 : _r5);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(message_r7.sourceName);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"])(6, 4, message_r7.timestamp, "HH:mm:ss"));
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"])(" ", message_r7.topic, " ");
      }
    }

    function UserLogComponent_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "i", 6);
      }

      if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("nzTheme", "twotone")("nzTwotoneColor", "#f5222d");
      }
    }

    function UserLogComponent_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "i", 7);
      }

      if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("nzTheme", "twotone")("nzTwotoneColor", "#faad14");
      }
    }

    function UserLogComponent_ng_template_7_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "i", 8);
      }

      if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("nzTheme", "twotone")("nzTwotoneColor", "#52c41a");
      }
    } //import { TemplateService } from '../../template.service';


    var UserLogComponent = /*#__PURE__*/function (_ngx_kervi__WEBPACK_I9) {
      _inherits(UserLogComponent, _ngx_kervi__WEBPACK_I9);

      var _super20 = _createSuper(UserLogComponent);

      function UserLogComponent() {
        _classCallCheck(this, UserLogComponent);

        return _super20.call(this);
      }

      _createClass(UserLogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.ngOnInitUserLog();
        }
      }]);

      return UserLogComponent;
    }(ngx_kervi__WEBPACK_IMPORTED_MODULE_3__["KerviUserLogComponent"]);

    UserLogComponent.ɵfac = function UserLogComponent_Factory(t) {
      return new (t || UserLogComponent)();
    };

    UserLogComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: UserLogComponent,
      selectors: [["kervi-user-log"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 9,
      vars: 3,
      consts: [[3, "nzDot", 4, "ngFor", "ngForOf"], ["dotTemplate1", ""], ["dotTemplate2", ""], ["dotTemplate3", ""], [3, "nzDot"], [2, "font-size", "80%"], ["nz-icon", "", "type", "close-circle", 2, "font-size", "16px", 3, "nzTheme", "nzTwotoneColor"], ["nz-icon", "", "type", "warning", 2, "font-size", "16px", 3, "nzTheme", "nzTwotoneColor"], ["nz-icon", "", "nz-icon", "", "type", "check-circle", 2, "font-size", "16px", 3, "nzTheme", "nzTwotoneColor"]],
      template: function UserLogComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "nz-timeline");
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, UserLogComponent_nz_timeline_item_1_Template, 10, 7, "nz-timeline-item", 0);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(2, "async");
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(3, UserLogComponent_ng_template_3_Template, 1, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(5, UserLogComponent_ng_template_5_Template, 1, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(7, UserLogComponent_ng_template_7_Template, 1, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngForOf", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(2, 1, ctx.messages$));
        }
      },
      directives: [ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_25__["NzTimelineComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ng_zorro_antd_timeline__WEBPACK_IMPORTED_MODULE_25__["NzTimelineItemComponent"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_26__["NzDividerComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__["NzIconDirective"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]],
      styles: [""]
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UserLogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'kervi-user-log',
          templateUrl: './user-log.component.html',
          styleUrls: ['./user-log.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })(); // Copyright (c) 2019, Tim Wentzlau


    function AppHealthComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "div", 2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(2, " web socket messages ");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(3, "div", 3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(4, "span", 4);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(5);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
      }

      if (rf & 2) {
        var ctx_r0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(5);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"])(" ", ctx_r0.mps, " ");
      }
    }

    function AppHealthComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "div", 2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(2, " Ping diff ");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(3, "div", 3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(4, "span", 4);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(5);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
      }

      if (rf & 2) {
        var ctx_r1 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(5);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"])(" ", ctx_r1.pingDiff, " ");
      }
    }

    function AppHealthComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "div", 2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(2, " Ping delay ");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(3, "div", 3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(4, "span", 4);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(5);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
      }

      if (rf & 2) {
        var ctx_r2 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(5);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"])(" ", ctx_r2.pingDelay, " ");
      }
    } //import { TemplateService } from '../../template.service';


    var AppHealthComponent = /*#__PURE__*/function (_ngx_kervi__WEBPACK_I10) {
      _inherits(AppHealthComponent, _ngx_kervi__WEBPACK_I10);

      var _super21 = _createSuper(AppHealthComponent);

      function AppHealthComponent() {
        _classCallCheck(this, AppHealthComponent);

        return _super21.call(this);
      }

      _createClass(AppHealthComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.ngOnInitAppHealth();
        }
      }]);

      return AppHealthComponent;
    }(ngx_kervi__WEBPACK_IMPORTED_MODULE_3__["KerviAppHealthComponent"]);

    AppHealthComponent.ɵfac = function AppHealthComponent_Factory(t) {
      return new (t || AppHealthComponent)();
    };

    AppHealthComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: AppHealthComponent,
      selectors: [["kervi-app-health"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 3,
      vars: 3,
      consts: [["fxLayout", "row", "class", "kervi-block-widget", 4, "ngIf"], ["fxLayout", "row", 1, "kervi-block-widget"], ["fxFlex", "60", 1, "kervi-value-label"], ["fxFlex", "", 1, "kervi-value-section"], [1, "value-value"]],
      template: function AppHealthComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(0, AppHealthComponent_div_0_Template, 6, 1, "div", 0);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, AppHealthComponent_div_1_Template, 6, 1, "div", 0);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, AppHealthComponent_div_2_Template, 6, 1, "div", 0);
        }

        if (rf & 2) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", !ctx.inline);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", !ctx.inline);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", !ctx.inline);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"]],
      styles: [""]
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(AppHealthComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'kervi-app-health',
          templateUrl: './app-health.component.html',
          styleUrls: ['./app-health.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();

    function DashboardPanelComponent_ng_container_0_ng_container_2_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"])(0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(1, "kervi-dashboard-panel", 4);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"])();
      }

      if (rf & 2) {
        var subPanel_r4 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])().$implicit;
        var ctx_r5 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("fxFlex", subPanel_r4.parameters.width)("bodyOnly", true)("inGroup", true)("dashboardSizes", ctx_r5.dashboardSizes)("panel", subPanel_r4);
      }
    }

    function DashboardPanelComponent_ng_container_0_ng_container_2_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"])(0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(1, "kervi-dashboard-panel", 5);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"])();
      }

      if (rf & 2) {
        var subPanel_r4 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])().$implicit;
        var ctx_r6 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("fxFlex", subPanel_r4.parameters.width)("inGroup", true)("dashboardSizes", ctx_r6.dashboardSizes)("panel", subPanel_r4);
      }
    }

    function DashboardPanelComponent_ng_container_0_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"])(0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, DashboardPanelComponent_ng_container_0_ng_container_2_ng_container_1_Template, 2, 5, "ng-container", 0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, DashboardPanelComponent_ng_container_0_ng_container_2_ng_container_2_Template, 2, 4, "ng-container", 0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"])();
      }

      if (rf & 2) {
        var subPanel_r4 = ctx.$implicit;
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", subPanel_r4.type != "group");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", subPanel_r4.type == "group");
      }
    }

    function DashboardPanelComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"])(0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "div", 2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, DashboardPanelComponent_ng_container_0_ng_container_2_Template, 3, 2, "ng-container", 3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"])();
      }

      if (rf & 2) {
        var ctx_r0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("fxLayout", ctx_r0.panel.parameters.layout);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngForOf", ctx_r0.panel.subPanels);
      }
    }

    function DashboardPanelComponent_ng_container_1_ng_template_2_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"])(0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(1, "kervi-widget", 8);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"])();
      }

      if (rf & 2) {
        var panelComponent_r15 = ctx.$implicit;
        var ctx_r14 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("component", panelComponent_r15.component)("dashboardPanel", ctx_r14.panel)("inline", ctx_r14.inline)("linkParameters", panelComponent_r15.parameters);
      }
    }

    function DashboardPanelComponent_ng_container_1_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(0, DashboardPanelComponent_ng_container_1_ng_template_2_ng_container_0_Template, 2, 4, "ng-container", 3);
      }

      if (rf & 2) {
        var ctx_r10 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngForOf", ctx_r10.headerComponents);
      }
    }

    function DashboardPanelComponent_ng_container_1_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"])(0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(1, "kervi-widget", 8);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"])();
      }

      if (rf & 2) {
        var panelComponent_r16 = ctx.$implicit;
        var ctx_r11 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("component", panelComponent_r16.component)("dashboardPanel", ctx_r11.panel)("inline", ctx_r11.inline)("linkParameters", panelComponent_r16.parameters);
      }
    }

    function DashboardPanelComponent_ng_container_1_div_5_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(1, "kervi-user-log");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
      }
    }

    function DashboardPanelComponent_ng_container_1_div_6_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(1, "kervi-app-health");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
      }
    }

    function DashboardPanelComponent_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"])(0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "nz-card", 6);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, DashboardPanelComponent_ng_container_1_ng_template_2_Template, 1, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(4, DashboardPanelComponent_ng_container_1_ng_container_4_Template, 2, 4, "ng-container", 3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(5, DashboardPanelComponent_ng_container_1_div_5_Template, 2, 0, "div", 0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(6, DashboardPanelComponent_ng_container_1_div_6_Template, 2, 0, "div", 0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"])();
      }

      if (rf & 2) {
        var _r9 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"])(3);

        var ctx_r1 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("nzTitle", ctx_r1.showHeader ? ctx_r1.title : null)("nzExtra", ctx_r1.headerComponents.length > 0 ? _r9 : null);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngForOf", ctx_r1.bodyComponents);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r1.panel.parameters.userLog);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r1.panel.parameters.appHealth);
      }
    }

    function DashboardPanelComponent_ng_template_2_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"])(0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(1, "kervi-widget", 9);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"])();
      }

      if (rf & 2) {
        var panelComponent_r18 = ctx.$implicit;
        var ctx_r17 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("component", panelComponent_r18.component)("inline", ctx_r17.inline)("dashboardPanel", ctx_r17.panel)("linkParameters", panelComponent_r18.parameters);
      }
    }

    function DashboardPanelComponent_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(0, DashboardPanelComponent_ng_template_2_ng_container_0_Template, 2, 4, "ng-container", 3);
      }

      if (rf & 2) {
        var ctx_r2 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngForOf", ctx_r2.panel.components);
      }
    }

    var DashboardPanelComponent = /*#__PURE__*/function (_ngx_kervi__WEBPACK_I11) {
      _inherits(DashboardPanelComponent, _ngx_kervi__WEBPACK_I11);

      var _super22 = _createSuper(DashboardPanelComponent);

      function DashboardPanelComponent() {
        var _this21;

        _classCallCheck(this, DashboardPanelComponent);

        _this21 = _super22.call(this);
        _this21.groupLayout = "row";
        return _this21;
      }

      _createClass(DashboardPanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.ngOnInitPanel();
          if (this.panel.hasOnlyGroupPanels) this.groupLayout = "row";
        }
      }]);

      return DashboardPanelComponent;
    }(ngx_kervi__WEBPACK_IMPORTED_MODULE_3__["KerviDashboardPanelComponent"]);

    DashboardPanelComponent.ɵfac = function DashboardPanelComponent_Factory(t) {
      return new (t || DashboardPanelComponent)();
    };

    DashboardPanelComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: DashboardPanelComponent,
      selectors: [["kervi-dashboard-panel"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 3,
      vars: 3,
      consts: [[4, "ngIf"], [3, "ngIf"], ["fxLayout.xs", "column", "fxLayoutGap", "0.5%", 1, "kervi-panel-deck", 3, "fxLayout"], [4, "ngFor", "ngForOf"], ["fxFlex.xs", "100", 3, "fxFlex", "bodyOnly", "inGroup", "dashboardSizes", "panel"], ["fxFlex.xs", "100", 3, "fxFlex", "inGroup", "dashboardSizes", "panel"], [3, "nzTitle", "nzExtra"], ["extraTemplate", ""], [3, "component", "dashboardPanel", "inline", "linkParameters"], [3, "component", "inline", "dashboardPanel", "linkParameters"]],
      template: function DashboardPanelComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(0, DashboardPanelComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, DashboardPanelComponent_ng_container_1_Template, 7, 5, "ng-container", 0);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, DashboardPanelComponent_ng_template_2_Template, 1, 1, "ng-template", 1);
        }

        if (rf & 2) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.panel.type == "group");
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.panel.type != "group" && !ctx.inline);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.inline && ctx.panel.components.length > 0);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], DashboardPanelComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_6__["NzCardComponent"], WidgetComponent, UserLogComponent, AppHealthComponent],
      styles: [""]
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(DashboardPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'kervi-dashboard-panel',
          templateUrl: './dashboard-panel.component.html',
          styleUrls: ['./dashboard-panel.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })(); // Copyright (c) 2016, Tim Wentzlau


    var SliderComponent = /*#__PURE__*/function () {
      function SliderComponent(elementRef, templateService) {
        _classCallCheck(this, SliderComponent);

        this.elementRef = elementRef;
        this.templateService = templateService;
        this.value = 0;
        this.type = "horizontal_slider";
        this.defaultSizes = new kervi_js__WEBPACK_IMPORTED_MODULE_9__["DashboardSizes"]();
        this.sliderChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.marks = {}; //console.log("cnio",this);
      }

      _createClass(SliderComponent, [{
        key: "color",
        value: function color(style, selector) {
          return this.templateService.getColor(style, selector);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var self = this;
        }
      }]);

      return SliderComponent;
    }();

    SliderComponent.ɵfac = function SliderComponent_Factory(t) {
      return new (t || SliderComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(ngx_kervi__WEBPACK_IMPORTED_MODULE_3__["KerviTemplateService"]));
    };

    SliderComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: SliderComponent,
      selectors: [["ui-slider"]],
      inputs: {
        value: "value",
        type: "type",
        tick: "tick",
        linkParameters: "linkParameters",
        defaultSizes: "defaultSizes",
        maxValue: "maxValue",
        minValue: "minValue"
      },
      outputs: {
        sliderChanged: "sliderChanged"
      },
      decls: 0,
      vars: 0,
      template: function SliderComponent_Template(rf, ctx) {},
      styles: [""]
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(SliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ui-slider',
          templateUrl: './slider.component.html',
          styleUrls: ['./slider.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: ngx_kervi__WEBPACK_IMPORTED_MODULE_3__["KerviTemplateService"]
        }];
      }, {
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        linkParameters: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        defaultSizes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        maxValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        minValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        sliderChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })(); // Copyright (c) 2016, Tim Wentzlau


    var IconsComponent = /*#__PURE__*/function () {
      function IconsComponent() {
        _classCallCheck(this, IconsComponent);

        this.icon = null;
      }

      _createClass(IconsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return IconsComponent;
    }();

    IconsComponent.ɵfac = function IconsComponent_Factory(t) {
      return new (t || IconsComponent)();
    };

    IconsComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: IconsComponent,
      selectors: [["kervi-icon"]],
      inputs: {
        icon: "icon"
      },
      decls: 1,
      vars: 3,
      template: function IconsComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "i");
        }

        if (rf & 2) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"])("pi pi-", ctx.icon, "");
        }
      },
      styles: [""]
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(IconsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'kervi-icon',
          templateUrl: './icons.component.html',
          styleUrls: ['./icons.component.scss']
        }]
      }], function () {
        return [];
      }, {
        icon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    var UIComponentsModule = function UIComponentsModule() {
      _classCallCheck(this, UIComponentsModule);
    };

    UIComponentsModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({
      type: UIComponentsModule
    });
    UIComponentsModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({
      factory: function UIComponentsModule_Factory(t) {
        return new (t || UIComponentsModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], ngx_kervi__WEBPACK_IMPORTED_MODULE_3__["NGXKerviPipesModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], ngx_gauge__WEBPACK_IMPORTED_MODULE_27__["NgxGaugeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NgZorroAntdModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_28__["NgApexchartsModule"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_21__["ColorPickerModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(UIComponentsModule, {
        declarations: [SparklineComponent, SliderComponent, IconsComponent, GaugeComponent, KerviChartComponent, SwitchButtonComponent, ButtonComponent, MPEGViewerComponent, DateTimeComponent, ColorComponent],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], ngx_kervi__WEBPACK_IMPORTED_MODULE_3__["NGXKerviPipesModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], ngx_gauge__WEBPACK_IMPORTED_MODULE_27__["NgxGaugeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NgZorroAntdModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_28__["NgApexchartsModule"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_21__["ColorPickerModule"]],
        exports: [SparklineComponent, SliderComponent, IconsComponent, MPEGViewerComponent, GaugeComponent, KerviChartComponent, SwitchButtonComponent, ButtonComponent, DateTimeComponent, ColorComponent]
      });
    })();
    /*@__PURE__*/


    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UIComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [SparklineComponent, SliderComponent, IconsComponent, GaugeComponent, KerviChartComponent, SwitchButtonComponent, ButtonComponent, MPEGViewerComponent, DateTimeComponent, ColorComponent],
          exports: [SparklineComponent, SliderComponent, IconsComponent, MPEGViewerComponent, GaugeComponent, KerviChartComponent, SwitchButtonComponent, ButtonComponent, DateTimeComponent, ColorComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], ngx_kervi__WEBPACK_IMPORTED_MODULE_3__["NGXKerviPipesModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], ngx_gauge__WEBPACK_IMPORTED_MODULE_27__["NgxGaugeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NgZorroAntdModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_28__["NgApexchartsModule"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_21__["ColorPickerModule"]],
          providers: [],
          bootstrap: []
        }]
      }], function () {
        return [];
      }, null);
    })();

    var ValuesModule = function ValuesModule() {
      _classCallCheck(this, ValuesModule);
    };

    ValuesModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({
      type: ValuesModule
    });
    ValuesModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({
      factory: function ValuesModule_Factory(t) {
        return new (t || ValuesModule)();
      },
      providers: [],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], ngx_kervi__WEBPACK_IMPORTED_MODULE_3__["NGXKerviPipesModule"], UIComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NgZorroAntdModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(ValuesModule, {
        declarations: [NumberComponent, BooleanComponent, KerviValueComponent, StringComponent, //EnumComponent,
        DateTimeComponent$1, ColorComponent$1],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], ngx_kervi__WEBPACK_IMPORTED_MODULE_3__["NGXKerviPipesModule"], UIComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NgZorroAntdModule"]],
        exports: [NumberComponent, BooleanComponent, KerviValueComponent, StringComponent, //EnumComponent,
        DateTimeComponent$1, ColorComponent$1]
      });
    })();
    /*@__PURE__*/


    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(ValuesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [NumberComponent, BooleanComponent, KerviValueComponent, StringComponent, //EnumComponent,
          DateTimeComponent$1, ColorComponent$1],
          exports: [NumberComponent, BooleanComponent, KerviValueComponent, StringComponent, //EnumComponent,
          DateTimeComponent$1, ColorComponent$1],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], ngx_kervi__WEBPACK_IMPORTED_MODULE_3__["NGXKerviPipesModule"], UIComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NgZorroAntdModule"]],
          providers: [],
          bootstrap: []
        }]
      }], function () {
        return [];
      }, null);
    })();

    var ControllerPadComponent = /*#__PURE__*/function () {
      function ControllerPadComponent(elementRef) {
        _classCallCheck(this, ControllerPadComponent);

        this.elementRef = elementRef;
        this.padSize = 180;
        this.moveDelayTimer = null;
        this.inDrag = false;
      }

      _createClass(ControllerPadComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var self = this;

          if (this.XValue) {
            jQuery("input[name='pad-x']", self.elementRef.nativeElement).val(this.XValue.value$.value).change();
            this.XValue.value$.subscribe(function (v) {
              console.log("pad-x", self.YValue.name, v);
              jQuery("input[name='pad-x']", self.elementRef.nativeElement).val(v).change();
            });
          }

          if (this.YValue) {
            jQuery("input[name='pad-y']", self.elementRef.nativeElement).val(this.YValue.value$.value).change();
            this.YValue.value$.subscribe(function (v) {
              console.log("pad-y", self.YValue.name, v);
              jQuery("input[name='pad-y']", self.elementRef.nativeElement).val(v).change();
            });
          }

          var color = "rgba(255,255,255,.5)";
          var p = jQuery('fieldset', self.elementRef.nativeElement).xy({
            displayPrevious: false,
            min: -100,
            max: 100,
            width: self.padSize,
            height: self.padSize,
            fgColor: color,
            bgColor: color,
            change: function change(value) {
              if (self.moveDelayTimer) {
                clearTimeout(self.moveDelayTimer);
              }

              self.moveDelayTimer = setTimeout(function () {
                if (self.XValue) self.XValue.set(value[0]);
                if (self.YValue) self.YValue.set(value[1]);
              }, 0);
            }
          }).css({
            'border': '2px solid ' + color
          });
        }
      }, {
        key: "padPress",
        value: function padPress() {
          this.inDrag = true;
        }
      }, {
        key: "padRelease",
        value: function padRelease() {
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
        }
      }]);

      return ControllerPadComponent;
    }();

    ControllerPadComponent.ɵfac = function ControllerPadComponent_Factory(t) {
      return new (t || ControllerPadComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    ControllerPadComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: ControllerPadComponent,
      selectors: [["kervi-controller-pad"]],
      inputs: {
        XValue: "XValue",
        YValue: "YValue",
        autoCenter: "autoCenter"
      },
      decls: 5,
      vars: 2,
      consts: [[3, "mousedown", "mouseup"], ["id", "leftPad", 1, "pad", 2, "position", "absolute"], ["type", "hidden", "name", "pad-x", "value", "0"], ["type", "hidden", "name", "pad-y", "value", "0"]],
      template: function ControllerPadComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 0);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("mousedown", function ControllerPadComponent_Template_div_mousedown_0_listener() {
            return ctx.padPress();
          })("mouseup", function ControllerPadComponent_Template_div_mouseup_0_listener() {
            return ctx.padRelease();
          });
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "fieldset", 1);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "legend");
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(3, "input", 2);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(4, "input", 3);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        }

        if (rf & 2) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"])("data-width", ctx.padSize)("data-height", ctx.padSize);
        }
      },
      styles: [""]
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(ControllerPadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'kervi-controller-pad',
          templateUrl: './controller-pad.component.html',
          styleUrls: ['./controller-pad.component.css']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        XValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        YValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        autoCenter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })(); // Copyright (c) 2016, Tim Wentzlau


    function UserMessagesComponent_ng_template_0_i_3_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "i", 8);
      }

      if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("nzTheme", "twotone")("nzTwotoneColor", "#52c41a");
      }
    }

    function UserMessagesComponent_ng_template_0_i_4_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "i", 9);
      }

      if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("nzTheme", "twotone")("nzTwotoneColor", "#faad14");
      }
    }

    function UserMessagesComponent_ng_template_0_i_5_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "i", 10);
      }

      if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("nzTheme", "twotone")("nzTwotoneColor", "#f5222d");
      }
    }

    function UserMessagesComponent_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "div", 1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(2, "span", 2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(3, UserMessagesComponent_ng_template_0_i_3_Template, 1, 2, "i", 3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(4, UserMessagesComponent_ng_template_0_i_4_Template, 1, 2, "i", 4);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(5, UserMessagesComponent_ng_template_0_i_5_Template, 1, 2, "i", 5);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(6, "div", 6);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(7);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(8, "div", 7);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(9);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
      }

      if (rf & 2) {
        var message_r1 = ctx.data;
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", message_r1.level == 3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", message_r1.level == 2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", message_r1.level == 1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(message_r1.sourceName);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"])(" ", message_r1.topic, " ");
      }
    }

    var UserMessagesComponent = /*#__PURE__*/function (_ngx_kervi__WEBPACK_I12) {
      _inherits(UserMessagesComponent, _ngx_kervi__WEBPACK_I12);

      var _super23 = _createSuper(UserMessagesComponent);

      function UserMessagesComponent(notification) {
        var _this22;

        _classCallCheck(this, UserMessagesComponent);

        _this22 = _super23.call(this);
        _this22.notification = notification;

        var self = _assertThisInitialized(_this22);

        _this22.lastMessage$.subscribe(function (message) {
          if (message) {
            self.notification.template(self.messageTemplate, {
              nzData: message
            });
          }
        });

        return _this22;
      }

      _createClass(UserMessagesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var self = this;
          this.ngOnInitUserLog();
        }
      }]);

      return UserMessagesComponent;
    }(ngx_kervi__WEBPACK_IMPORTED_MODULE_3__["KerviUserLogComponent"]);

    UserMessagesComponent.ɵfac = function UserMessagesComponent_Factory(t) {
      return new (t || UserMessagesComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzNotificationService"]));
    };

    UserMessagesComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: UserMessagesComponent,
      selectors: [["kervi-user-messages"]],
      viewQuery: function UserMessagesComponent_Query(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], true);
        }

        if (rf & 2) {
          var _t;

          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"])(_t = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"])()) && (ctx.messageTemplate = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 1,
      vars: 0,
      consts: [[1, "ant-notification-notice-content"], [1, "ant-notification-notice-with-icon"], [1, "ant-notification-notice-icon"], ["nz-icon", "", "type", "check-circle", 3, "nzTheme", "nzTwotoneColor", 4, "ngIf"], ["nz-icon", "", "type", "warning", 3, "nzTheme", "nzTwotoneColor", 4, "ngIf"], ["nz-icon", "", "type", "close-circle", 3, "nzTheme", "nzTwotoneColor", 4, "ngIf"], [1, "ant-notification-notice-message"], [1, "ant-notification-notice-description"], ["nz-icon", "", "type", "check-circle", 3, "nzTheme", "nzTwotoneColor"], ["nz-icon", "", "type", "warning", 3, "nzTheme", "nzTwotoneColor"], ["nz-icon", "", "type", "close-circle", 3, "nzTheme", "nzTwotoneColor"]],
      template: function UserMessagesComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(0, UserMessagesComponent_ng_template_0_Template, 10, 5, "ng-template");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__["NzIconDirective"]],
      styles: [""]
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UserMessagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'kervi-user-messages',
          templateUrl: './messages.component.html',
          styleUrls: ['./messages.component.scss']
        }]
      }], function () {
        return [{
          type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzNotificationService"]
        }];
      }, {
        messageTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]]
        }]
      });
    })(); // Copyright (c) 2016, Tim Wentzlau


    function UserMessageButtonComponent_button_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r2 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();

        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "button", 4);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function UserMessageButtonComponent_button_2_Template_button_click_0_listener() {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r2);
          var ctx_r1 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
          return ctx_r1.open();
        });
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(1, "i", 5);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
      }

      if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("nzTwotoneColor", "#9fd037");
      }
    }

    var UserMessageButtonComponent = /*#__PURE__*/function (_ngx_kervi__WEBPACK_I13) {
      _inherits(UserMessageButtonComponent, _ngx_kervi__WEBPACK_I13);

      var _super24 = _createSuper(UserMessageButtonComponent);

      function UserMessageButtonComponent() {
        var _this23;

        _classCallCheck(this, UserMessageButtonComponent);

        _this23 = _super24.call(this);
        _this23.visible = false;
        return _this23;
      }

      _createClass(UserMessageButtonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var self = this;
          this.ngOnInitUserLog();
        }
      }, {
        key: "open",
        value: function open() {
          this.visible = true;
        }
      }, {
        key: "close",
        value: function close() {
          this.visible = false;
        }
      }]);

      return UserMessageButtonComponent;
    }(ngx_kervi__WEBPACK_IMPORTED_MODULE_3__["KerviUserLogComponent"]);

    UserMessageButtonComponent.ɵfac = function UserMessageButtonComponent_Factory(t) {
      return new (t || UserMessageButtonComponent)();
    };

    UserMessageButtonComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: UserMessageButtonComponent,
      selectors: [["kervi-message-button"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 6,
      vars: 10,
      consts: [[3, "nzCount", "nzOverflowCount"], ["nz-button", "", "nzGhost", "", "nzType", "default", "nzShape", "circle", 3, "click", 4, "ngIf"], ["nzPlacement", "right", "nzTitle", "Log", 3, "nzClosable", "nzVisible", "nzOnClose"], [3, "inline"], ["nz-button", "", "nzGhost", "", "nzType", "default", "nzShape", "circle", 3, "click"], ["nz-icon", "", "nzType", "notification", "nzTheme", "twotone", 3, "nzTwotoneColor"]],
      template: function UserMessageButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "nz-badge", 0);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(1, "async");
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, UserMessageButtonComponent_button_2_Template, 2, 1, "button", 1);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(3, "async");
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(4, "nz-drawer", 2);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("nzOnClose", function UserMessageButtonComponent_Template_nz_drawer_nzOnClose_4_listener() {
            return ctx.close();
          });
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(5, "kervi-user-log", 3);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        }

        if (rf & 2) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("nzCount", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(1, 6, ctx.messageCount$))("nzOverflowCount", 99);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(3, 8, ctx.messageCount$) > 0);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("nzClosable", false)("nzVisible", ctx.visible);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("inline", false);
        }
      },
      directives: [ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_29__["NzBadgeComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_30__["NzDrawerComponent"], UserLogComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_17__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_18__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__["NzIconDirective"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
      styles: [""]
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(UserMessageButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'kervi-message-button',
          templateUrl: './message-button.component.html',
          styleUrls: ['./message-button.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();

    var KerviZorroModule = function KerviZorroModule() {
      _classCallCheck(this, KerviZorroModule);
    };

    KerviZorroModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({
      type: KerviZorroModule
    });
    KerviZorroModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({
      factory: function KerviZorroModule_Factory(t) {
        return new (t || KerviZorroModule)();
      },
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], ngx_kervi__WEBPACK_IMPORTED_MODULE_3__["NGXKerviPipesModule"], ngx_kervi__WEBPACK_IMPORTED_MODULE_3__["NgxKerviModule"], ValuesModule, ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NgZorroAntdModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_31__["FlexLayoutModule"], UIComponentsModule]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(KerviZorroModule, {
        declarations: [DashboardPanelComponent, WidgetComponent, ControllerPadComponent, CamViewerComponent, ActionComponent, UserLogComponent, UserMessageButtonComponent, UserMessagesComponent, AppHealthComponent, NipplePadComponent],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], ngx_kervi__WEBPACK_IMPORTED_MODULE_3__["NGXKerviPipesModule"], ngx_kervi__WEBPACK_IMPORTED_MODULE_3__["NgxKerviModule"], ValuesModule, ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NgZorroAntdModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_31__["FlexLayoutModule"], UIComponentsModule],
        exports: [DashboardPanelComponent, ControllerPadComponent, CamViewerComponent, UserLogComponent, UserMessageButtonComponent, UserMessagesComponent, AppHealthComponent, NipplePadComponent]
      });
    })();
    /*@__PURE__*/


    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(KerviZorroModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], ngx_kervi__WEBPACK_IMPORTED_MODULE_3__["NGXKerviPipesModule"], ngx_kervi__WEBPACK_IMPORTED_MODULE_3__["NgxKerviModule"], ValuesModule, ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NgZorroAntdModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_31__["FlexLayoutModule"], UIComponentsModule],
          declarations: [DashboardPanelComponent, WidgetComponent, ControllerPadComponent, CamViewerComponent, ActionComponent, UserLogComponent, UserMessageButtonComponent, UserMessagesComponent, AppHealthComponent, NipplePadComponent],
          exports: [DashboardPanelComponent, ControllerPadComponent, CamViewerComponent, UserLogComponent, UserMessageButtonComponent, UserMessagesComponent, AppHealthComponent, NipplePadComponent]
        }]
      }], null, null);
    })(); // Copyright (c) 2016, Tim Wentzlau
    //import { TemplateService } from '../../template.service';


    var ActionComponent$1 = /*#__PURE__*/function (_ngx_kervi__WEBPACK_I14) {
      _inherits(ActionComponent$1, _ngx_kervi__WEBPACK_I14);

      var _super25 = _createSuper(ActionComponent$1);

      function ActionComponent$1() {
        _classCallCheck(this, ActionComponent$1);

        return _super25.call(this);
      }

      _createClass(ActionComponent$1, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.ngOnInitAction();
        }
      }]);

      return ActionComponent$1;
    }(ngx_kervi__WEBPACK_IMPORTED_MODULE_3__["KerviActionComponent"]);

    ActionComponent$1.ɵfac = function ActionComponent_Factory(t) {
      return new (t || ActionComponent$1)();
    };

    ActionComponent$1.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: ActionComponent$1,
      selectors: [["kervi-action"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 0,
      vars: 0,
      template: function ActionComponent_Template(rf, ctx) {},
      styles: [""]
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(ActionComponent$1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'kervi-action',
          templateUrl: './media.component.html',
          styleUrls: ['./media.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /*
     * Public API Surface of kervi-zorro
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=kervi-zorro.js.map

    /***/

  },

  /***/
  "../../dist/ngx-kervi/fesm2015/ngx-kervi.js":
  /*!*************************************************************************************!*\
    !*** D:/dev/kervi/kervi/kervi-ui/kervi/ui/web/dist/ngx-kervi/fesm2015/ngx-kervi.js ***!
    \*************************************************************************************/

  /*! exports provided: ConnectionState, DashboardSizes, AppInjector, KerviActionComponent, KerviAppHealthComponent, KerviBooleanComponent, KerviCameraComponent, KerviColorComponent, KerviControllerPadComponent, KerviDashboardComponent, KerviDashboardPanelComponent, KerviDateTimeComponent, KerviDirectoryComponent, KerviNumberComponent, KerviStringComponent, KerviTemplateService, KerviUserLogComponent, KerviWidgetComponent, NGXKerviPipesModule, NGXKerviService, NgxKerviComponent, NgxKerviModule, TranslatePipe */

  /***/
  function distNgxKerviFesm2015NgxKerviJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppInjector", function () {
      return AppInjector;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KerviActionComponent", function () {
      return KerviActionComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KerviAppHealthComponent", function () {
      return KerviAppHealthComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KerviBooleanComponent", function () {
      return KerviBooleanComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KerviCameraComponent", function () {
      return KerviCameraComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KerviColorComponent", function () {
      return KerviColorComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KerviControllerPadComponent", function () {
      return KerviControllerPadComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KerviDashboardComponent", function () {
      return KerviDashboardComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KerviDashboardPanelComponent", function () {
      return KerviDashboardPanelComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KerviDateTimeComponent", function () {
      return KerviDateTimeComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KerviDirectoryComponent", function () {
      return KerviDirectoryComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KerviNumberComponent", function () {
      return KerviNumberComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KerviStringComponent", function () {
      return KerviStringComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KerviTemplateService", function () {
      return KerviTemplateService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KerviUserLogComponent", function () {
      return KerviUserLogComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KerviWidgetComponent", function () {
      return KerviWidgetComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NGXKerviPipesModule", function () {
      return NGXKerviPipesModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NGXKerviService", function () {
      return NGXKerviService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxKerviComponent", function () {
      return NgxKerviComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxKerviModule", function () {
      return NgxKerviModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TranslatePipe", function () {
      return TranslatePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var kervi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! kervi-js */
    "../../dist/kervi-js/fesm2015/kervi-js.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ConnectionState", function () {
      return kervi_js__WEBPACK_IMPORTED_MODULE_1__["ConnectionState"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DashboardSizes", function () {
      return kervi_js__WEBPACK_IMPORTED_MODULE_1__["DashboardSizes"];
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");

    var NGXKerviService = /*#__PURE__*/function (_kervi_js__WEBPACK_IM) {
      _inherits(NGXKerviService, _kervi_js__WEBPACK_IM);

      var _super26 = _createSuper(NGXKerviService);

      function NGXKerviService() {
        _classCallCheck(this, NGXKerviService);

        return _super26.apply(this, arguments);
      }

      return NGXKerviService;
    }(kervi_js__WEBPACK_IMPORTED_MODULE_1__["KerviBaseService"]);

    NGXKerviService.ɵfac = function NGXKerviService_Factory(t) {
      return ɵNGXKerviService_BaseFactory(t || NGXKerviService);
    };

    NGXKerviService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      token: NGXKerviService,
      factory: NGXKerviService.ɵfac
    });
    var ɵNGXKerviService_BaseFactory = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"])(NGXKerviService);
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(NGXKerviService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();

    var KerviTemplateService = /*#__PURE__*/function () {
      function KerviTemplateService() {
        _classCallCheck(this, KerviTemplateService);

        this.remUnit = 20;
        console.log("kervi service constructor"); //console.log("ctemplate");

        this.remUnit = parseFloat(getComputedStyle(document.documentElement).fontSize);
      }

      _createClass(KerviTemplateService, [{
        key: "convertRemToPixels",
        value: function convertRemToPixels(rem) {
          return rem * this.remUnit;
        }
      }, {
        key: "getSizeValue",
        value: function getSizeValue(value) {
          if (value == null) return "100%";else if (value === "") return "100%";else if (isNaN(value)) {
            return value;
          } else if (value > 0) return value + "%";else return "100%";
        }
      }, {
        key: "getPixels",
        value: function getPixels(value, containerSize) {
          //console.log("gps", value, isNaN(value));
          if (isNaN(value)) {
            if (value.lastIndexOf("px") > -1) {
              var px = parseFloat(value);
              return px;
            } else if (value.lastIndexOf("rem") > -1) {
              var rem = parseFloat(value);
              var px = this.convertRemToPixels(rem);
              console.log("remx", rem, px);
              return px;
            } else if (value.lastIndexOf("%") > -1) {
              var percentage = parseFloat(value) / 100.0;
              return containerSize * percentage;
            }
          } else return value;
        }
      }, {
        key: "getStyleRuleValue",
        value: function getStyleRuleValue(style, selector, sheet) {
          var sheets = sheet != null ? [sheet] : document.styleSheets;

          for (var i = 0, l = sheets.length; i < l; i++) {
            var sheet = sheets[i];

            if (!sheet.cssRules) {
              continue;
            }

            for (var j = 0, k = sheet.cssRules.length; j < k; j++) {
              var rule = sheet.cssRules[j];

              if (rule.selectorText && rule.selectorText.split(',').indexOf(selector) !== -1) {
                return rule.style[style];
              }
            }
          }

          return null;
        }
      }, {
        key: "makeId",
        value: function makeId() {
          var text = "";
          var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

          for (var i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
          }

          return text;
        }
      }, {
        key: "getColor",
        value: function getColor(colorName, cssClass) {
          var styleValue = this.getStyleRuleValue(colorName, cssClass, null); //console.log("sv", cssClass,styleValue);

          return styleValue;
        }
      }]);

      return KerviTemplateService;
    }();

    KerviTemplateService.ɵfac = function KerviTemplateService_Factory(t) {
      return new (t || KerviTemplateService)();
    };

    KerviTemplateService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      token: KerviTemplateService,
      factory: KerviTemplateService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(KerviTemplateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();

    var AppInjector;

    function setAppInjector(injector) {
      if (AppInjector) {
        // Should not happen
        console.error('Programming error: AppInjector was already set');
      } else {
        AppInjector = injector;
      }
    }

    var KerviDashboardComponent = /*#__PURE__*/function () {
      function KerviDashboardComponent() {
        _classCallCheck(this, KerviDashboardComponent);

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
        this.cameraId$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
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
        var self = this;
        this.kerviService.componentsChanged$.subscribe(function () {
          self.loadDashboard(self.dashboardId);
        });
      }

      _createClass(KerviDashboardComponent, [{
        key: "logoff",
        value: function logoff(event) {
          this.kerviService.logoff();
          event.stopPropagation();
        }
      }, {
        key: "loadDashboard",
        value: function loadDashboard(dashboardId) {
          this.dashboardId = dashboardId;
          this.dashboard = this.kerviService.getComponent(dashboardId, 'dashboard');
          this.anonymous = this.kerviService.isAnonymous();
          this.isAppEmpty = this.kerviService.isAppEmpty();
          this.authenticated = this.kerviService.doAuthenticate;

          if (this.dashboard) {
            this.dashboards = this.kerviService.getComponentsByType('dashboard');
            this.showMenu = this.dashboards.length > 1 || this.kerviService.doAuthenticate;
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
                this.leftPadXValue = this.dashboard.LeftPadXPanel.components[0].component;
                if (this.dashboard.LeftPadXPanel.components[0].parameters.padAutoCenter) this.autoCenterLeftPad = true;
              }

              if (this.dashboard.LeftPadYPanel.components.length) {
                this.leftPadYValue = this.dashboard.LeftPadYPanel.components[0].component;
                if (this.dashboard.LeftPadXPanel.components[0].parameters.padAutoCenter) this.autoCenterLeftPad = true;
              }
            }

            if (this.dashboard.RightPadXPanel && this.dashboard.RightPadXPanel.components.length || this.dashboard.RightPadYPanel && this.dashboard.RightPadYPanel.components.length) {
              this.showRightPad = true;

              if (this.dashboard.RightPadXPanel.components.length) {
                this.rightPadXValue = this.dashboard.RightPadXPanel.components[0].component;
                if (this.dashboard.LeftPadXPanel.components[0].parameters.padAutoCenter) this.autoCenterRightPad = true;
              }

              if (this.dashboard.RightPadYPanel.components.length) {
                this.rightPadYValue = this.dashboard.RightPadYPanel.components[0].component;
                if (this.dashboard.RightPadXPanel.components[0].parameters.padAutoCenter) this.autoCenterRightPad = true;
              }
            }

            console.log("load db", dashboardId, this.dashboard, this);
          }
        }
      }, {
        key: "toggleFullScreen",
        value: function toggleFullScreen() {
          var doc;
          doc = document;
          var el = doc.body; // Supports most browsers and their versions.

          var requestMethod = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen;

          if (doc.fullscreenElement && doc.fullScreenElement !== null) {
            console.log("in full screen");
            doc.exitFullscreen();
            this.inFullScreen = false;
          } else if (requestMethod) {
            // Native full screen.
            requestMethod.call(el);
            this.inFullScreen = true;
          }
        }
      }, {
        key: "toggleFullScreenx",
        value: function toggleFullScreenx() {
          var doc;
          doc = document;
          console.log("fs", this.inFullScreen, doc.documentElement.requestFullScreen);
          var doc;
          doc = document;

          if (doc.fullScreenElement && doc.fullScreenElement !== null)
            /*(!doc.mozFullScreen && !document.webkitIsFullScreen))*/
            {
              this.inFullScreen = true;

              if (doc.documentElement.requestFullScreen) {
                doc.documentElement.requestFullScreen();
              } else if (doc.documentElement.mozRequestFullScreen) {
                doc.documentElement.mozRequestFullScreen();
              } // } else if (document.documentElement.webkitRequestFullScreen) {  
              //   doc.documentElement.webkitRequestFullScreen();  
              // }  

            } else {
            this.inFullScreen = false;

            if (doc.cancelFullScreen) {
              doc.cancelFullScreen();
            } else if (doc.mozCancelFullScreen) {
              doc.mozCancelFullScreen();
            } // } else if (document.webkitCancelFullScreen) {  
            //   doc.webkitCancelFullScreen();  
            // }  

          }
        }
      }]);

      return KerviDashboardComponent;
    }();

    KerviDashboardComponent.ɵfac = function KerviDashboardComponent_Factory(t) {
      return new (t || KerviDashboardComponent)();
    };

    KerviDashboardComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: KerviDashboardComponent,
      selectors: [["kervi-dashboard"]],
      inputs: {
        cameraId: "cameraId",
        cameraParameters: "cameraParameters"
      },
      decls: 0,
      vars: 0,
      template: function KerviDashboardComponent_Template(rf, ctx) {},
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(KerviDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'kervi-dashboard',
          template: ''
        }]
      }], function () {
        return [];
      }, {
        cameraId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cameraParameters: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    var KerviDashboardPanelComponent = /*#__PURE__*/function () {
      function KerviDashboardPanelComponent() {
        _classCallCheck(this, KerviDashboardPanelComponent);

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
        this.footerComponents = []; //messages: DashboardMessageModel[] = [];
        //panelComponents:IComponent[] = []

        this.templateService = null;
        this.kerviService = null;
        this.templateService = AppInjector.get(KerviTemplateService);
        this.kerviService = AppInjector.get(NGXKerviService);
      }

      _createClass(KerviDashboardPanelComponent, [{
        key: "calcWidth",
        value: function calcWidth(panel, inGroup) {
          if (panel.type == "group") {
            if (panel.parameters.width == null || panel.parameters.width == "0") return "100%";else return this.templateService.getSizeValue(panel.parameters.width);
          } else return inGroup ? "" : this.templateService.getSizeValue(panel.parameters.width);
        }
      }, {
        key: "showPanelHeader",
        value: function showPanelHeader(panel) {
          var hasHeaderComponents = false;

          var _iterator39 = _createForOfIteratorHelper(this.panel.components),
              _step39;

          try {
            for (_iterator39.s(); !(_step39 = _iterator39.n()).done;) {
              var component = _step39.value;
              if (component.parameters.linkToHeader) hasHeaderComponents = true;
            }
          } catch (err) {
            _iterator39.e(err);
          } finally {
            _iterator39.f();
          }

          return panel.parameters.title != null && panel.parameters.title.length > 0 || hasHeaderComponents;
        }
      }, {
        key: "ngOnInitPanel",
        value: function ngOnInitPanel() {
          var self = this;
          this.title = this.panel.parameters.title;

          var _iterator40 = _createForOfIteratorHelper(this.panel.components),
              _step40;

          try {
            for (_iterator40.s(); !(_step40 = _iterator40.n()).done;) {
              var component = _step40.value;
              if (component.parameters.linkToHeader) this.headerComponents.push(component);else this.bodyComponents.push(component);
            }
          } catch (err) {
            _iterator40.e(err);
          } finally {
            _iterator40.f();
          }

          this.showHeader = this.panel.parameters.title != null && this.panel.parameters.title.length > 0 || this.headerComponents.length > 0;

          if (this.panel.type == "group") {
            if (this.panel.parameters.width == null || this.panel.parameters.width == "0" || this.panel.parameters.width == "") this.width = "100%";else this.width = this.templateService.getSizeValue(this.panel.parameters.width);
          } else //this.width = this.inGroup ? "100%" : this.templateService.getSizeValue(this.panel.parameters.width);
            this.width = this.templateService.getSizeValue(this.panel.parameters.width);
        }
      }]);

      return KerviDashboardPanelComponent;
    }();

    KerviDashboardPanelComponent.ɵfac = function KerviDashboardPanelComponent_Factory(t) {
      return new (t || KerviDashboardPanelComponent)();
    };

    KerviDashboardPanelComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: KerviDashboardPanelComponent,
      selectors: [["kervi-dashboard-panel-base"]],
      inputs: {
        dashboardSizes: "dashboardSizes",
        panel: "panel",
        inline: "inline",
        inGroup: "inGroup",
        bodyOnly: "bodyOnly"
      },
      decls: 0,
      vars: 0,
      template: function KerviDashboardPanelComponent_Template(rf, ctx) {},
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(KerviDashboardPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'kervi-dashboard-panel-base',
          template: ''
        }]
      }], function () {
        return [];
      }, {
        dashboardSizes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        panel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        inline: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        inGroup: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        bodyOnly: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    var KerviControllerPadComponent = /*#__PURE__*/function () {
      function KerviControllerPadComponent() {
        _classCallCheck(this, KerviControllerPadComponent);
      }

      _createClass(KerviControllerPadComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return KerviControllerPadComponent;
    }();

    KerviControllerPadComponent.ɵfac = function KerviControllerPadComponent_Factory(t) {
      return new (t || KerviControllerPadComponent)();
    };

    KerviControllerPadComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: KerviControllerPadComponent,
      selectors: [["kervi-controller-pad-base"]],
      inputs: {
        dashboardSizes: "dashboardSizes"
      },
      decls: 0,
      vars: 0,
      template: function KerviControllerPadComponent_Template(rf, ctx) {},
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(KerviControllerPadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'kervi-controller-pad-base',
          template: ''
        }]
      }], function () {
        return [];
      }, {
        dashboardSizes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })(); // Copyright (c) 2016, Tim Wentzlau


    var KerviWidgetComponent = /*#__PURE__*/function () {
      function KerviWidgetComponent() {
        _classCallCheck(this, KerviWidgetComponent);

        this.component = null;
        this.dashboardSizes = new kervi_js__WEBPACK_IMPORTED_MODULE_1__["DashboardSizes"]();
        this.widgetType = "value"; //console.log("cnio",this);

        this.kerviService = AppInjector.get(NGXKerviService);
      }

      _createClass(KerviWidgetComponent, [{
        key: "ngOnInitWidget",
        value: function ngOnInitWidget() {
          if (!this.linkParameters) this.linkParameters = this.component.ui;

          if (!this.inline && this.linkParameters.inline) {
            this.inline = true;
          } //console.log("widget", this.component, this.linkParameters);


          if (this.component.componentType == "controller") {
            var controller = this.component;
            console.log("widget ctrl", controller);
            if (controller.type == "camera") this.widgetType = "camera";
          } else if (this.linkParameters.type) {
            if (this.linkParameters.type.indexOf("gauge") > -1) {
              this.widgetType = "gauge";
            } else if (this.linkParameters.type == "chart") {
              this.widgetType = "chart";
            }
          }
        }
      }, {
        key: "componentId",
        set: function set(v) {
          this.component = this.kerviService.getComponent(this.componentId);
        }
      }]);

      return KerviWidgetComponent;
    }();

    KerviWidgetComponent.ɵfac = function KerviWidgetComponent_Factory(t) {
      return new (t || KerviWidgetComponent)();
    };

    KerviWidgetComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: KerviWidgetComponent,
      selectors: [["kervi-widget-base"]],
      inputs: {
        componentId: "componentId",
        component: "component",
        dashboardPanel: "dashboardPanel",
        linkParameters: "linkParameters",
        dashboardSizes: "dashboardSizes",
        inline: "inline"
      },
      decls: 0,
      vars: 0,
      template: function KerviWidgetComponent_Template(rf, ctx) {},
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(KerviWidgetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'kervi-widget-base',
          template: ''
        }]
      }], function () {
        return [];
      }, {
        componentId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        component: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dashboardPanel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        linkParameters: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dashboardSizes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        inline: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })(); // Copyright (c) 2016, Tim Wentzlau


    var KerviValueComponent = /*#__PURE__*/function () {
      function KerviValueComponent() {
        _classCallCheck(this, KerviValueComponent);

        this.value = null;
        this.dashboardSizes = new kervi_js__WEBPACK_IMPORTED_MODULE_1__["DashboardSizes"]();
        this.kerviService = AppInjector.get(NGXKerviService);
      }

      _createClass(KerviValueComponent, [{
        key: "ngOnInitValue",
        value: function ngOnInitValue() {
          if (!this.linkParameters) this.linkParameters = this.value.ui;
        }
      }, {
        key: "valueId",
        set: function set(v) {
          this.value = this.kerviService.getComponent(this.valueId);
        }
      }]);

      return KerviValueComponent;
    }();

    KerviValueComponent.ɵfac = function KerviValueComponent_Factory(t) {
      return new (t || KerviValueComponent)();
    };

    KerviValueComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: KerviValueComponent,
      selectors: [["kervi-value-base"]],
      inputs: {
        valueId: "valueId",
        value: "value",
        linkParameters: "linkParameters",
        dashboardSizes: "dashboardSizes",
        inline: "inline"
      },
      decls: 0,
      vars: 0,
      template: function KerviValueComponent_Template(rf, ctx) {},
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(KerviValueComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'kervi-value-base',
          template: ''
        }]
      }], function () {
        return [];
      }, {
        valueId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        linkParameters: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dashboardSizes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        inline: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })(); // Copyright (c) 2016, Tim Wentzlau


    var KerviNumberComponent = /*#__PURE__*/function (_KerviValueComponent) {
      _inherits(KerviNumberComponent, _KerviValueComponent);

      var _super27 = _createSuper(KerviNumberComponent);

      function KerviNumberComponent() {
        var _this24;

        _classCallCheck(this, KerviNumberComponent);

        _this24 = _super27.call(this);
        _this24.numberFormat = "1.2-2";
        _this24.displayValue = 0;
        _this24.displayUnit = "";
        _this24.displayType = "";
        _this24.currentIcon = null;
        return _this24;
      }

      _createClass(KerviNumberComponent, [{
        key: "setKerviValue",
        value: function setKerviValue(value) {
          this.value.set(value);
        }
      }, {
        key: "ngOnInitNumber",
        value: function ngOnInitNumber() {
          this.ngOnInitValue();
          var self = this;
          this.numberFormat = this.linkParameters.minIntegerDigits + "." + this.linkParameters.minFractionDigits + "-" + this.linkParameters.maxFractionDigits;
          if (!this.linkParameters.valueIcon) this.currentIcon = null;else if (typeof this.linkParameters.valueIcon == "string") this.currentIcon = this.linkParameters.valueIcon;else {
            this.value.value$.subscribe(function (v) {
              var _iterator41 = _createForOfIteratorHelper(self.linkParameters.valueIcon),
                  _step41;

              try {
                for (_iterator41.s(); !(_step41 = _iterator41.n()).done;) {
                  var iconSection = _step41.value;

                  if (v >= iconSection.range[0] && v <= iconSection.range[1]) {
                    self.currentIcon = iconSection.icon;
                    break;
                  }
                }
              } catch (err) {
                _iterator41.e(err);
              } finally {
                _iterator41.f();
              }
            });
          }

          if (!this.inline && this.linkParameters.inline) {
            this.inline = true;
          } else if (!this.inline && this.linkParameters.size > 0) {
            this.inline = true;
          }
        }
      }]);

      return KerviNumberComponent;
    }(KerviValueComponent);

    KerviNumberComponent.ɵfac = function KerviNumberComponent_Factory(t) {
      return new (t || KerviNumberComponent)();
    };

    KerviNumberComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: KerviNumberComponent,
      selectors: [["kervi-value-number-base"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 0,
      vars: 0,
      template: function KerviNumberComponent_Template(rf, ctx) {},
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(KerviNumberComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'kervi-value-number-base',
          template: ''
        }]
      }], function () {
        return [];
      }, null);
    })(); // Copyright (c) 2016, Tim Wentzlau


    var KerviBooleanComponent = /*#__PURE__*/function (_KerviValueComponent2) {
      _inherits(KerviBooleanComponent, _KerviValueComponent2);

      var _super28 = _createSuper(KerviBooleanComponent);

      function KerviBooleanComponent() {
        var _this25;

        _classCallCheck(this, KerviBooleanComponent);

        _this25 = _super28.call(this);
        _this25.displayType = "switch";
        return _this25;
      }

      _createClass(KerviBooleanComponent, [{
        key: "setKerviValue",
        value: function setKerviValue(value) {
          this.value.set(value);
        }
      }, {
        key: "ngOnInitBoolean",
        value: function ngOnInitBoolean() {
          this.ngOnInitValue();
          var self = this;

          if (this.linkParameters.type) {
            this.displayType = this.linkParameters.type;
          }

          if (!this.inline && this.linkParameters.inline) {
            this.inline = true;
          } else if (!this.inline && this.linkParameters.size > 0) {
            this.inline = true;
          }
        }
      }]);

      return KerviBooleanComponent;
    }(KerviValueComponent);

    KerviBooleanComponent.ɵfac = function KerviBooleanComponent_Factory(t) {
      return new (t || KerviBooleanComponent)();
    };

    KerviBooleanComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: KerviBooleanComponent,
      selectors: [["kervi-value-boolean-base"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 0,
      vars: 0,
      template: function KerviBooleanComponent_Template(rf, ctx) {},
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(KerviBooleanComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'kervi-value-boolean-base',
          template: ''
        }]
      }], function () {
        return [];
      }, null);
    })(); // Copyright (c) 2016, Tim Wentzlau


    var KerviActionComponent = /*#__PURE__*/function () {
      function KerviActionComponent() {
        _classCallCheck(this, KerviActionComponent);

        this.action = null;
        this.linkParameters = null;
        this.inline = false;
        this.dashboardSizes = new kervi_js__WEBPACK_IMPORTED_MODULE_1__["DashboardSizes"]();
        this.state = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.displayType = 'switch';
        this.kerviService = AppInjector.get(NGXKerviService);
      }

      _createClass(KerviActionComponent, [{
        key: "ngOnInitAction",
        value: function ngOnInitAction() {
          var self = this;
          if (!this.linkParameters) this.linkParameters = this.action.ui;

          if (this.linkParameters.displayType) {
            this.displayType = this.linkParameters.displayType;
          }

          if (!this.inline && this.linkParameters.inline) {
            this.inline = true;
          }

          self.state.next(this.action.running$.value);
          this.action.running$.subscribe(function (v) {
            console.log("ar", self.action.id, v);
            self.state.next(v);
          });
        }
      }, {
        key: "setActionState",
        value: function setActionState(value) {
          if (value) this.action.run(this.linkParameters.actionParameters);else this.action.interrupt(this.linkParameters.interruptParameters);
        }
      }]);

      return KerviActionComponent;
    }();

    KerviActionComponent.ɵfac = function KerviActionComponent_Factory(t) {
      return new (t || KerviActionComponent)();
    };

    KerviActionComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: KerviActionComponent,
      selectors: [["kervi-action-base"]],
      inputs: {
        action: "action",
        linkParameters: "linkParameters",
        inline: "inline",
        dashboardSizes: "dashboardSizes"
      },
      decls: 0,
      vars: 0,
      template: function KerviActionComponent_Template(rf, ctx) {},
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(KerviActionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'kervi-action-base',
          template: '',
          styleUrls: []
        }]
      }], function () {
        return [];
      }, {
        action: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        linkParameters: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        inline: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dashboardSizes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })(); // Copyright (c) 2016, Tim Wentzlau


    var KerviCameraComponent = /*#__PURE__*/function () {
      function KerviCameraComponent() {
        _classCallCheck(this, KerviCameraComponent);

        this.streamObservers = [];
        this.linkParameters = null;
        this.inline = false;
        this.dashboardSizes = new kervi_js__WEBPACK_IMPORTED_MODULE_1__["DashboardSizes"]();
        this.isBackground = false;
        var self = this;
        this.kerviService = AppInjector.get(NGXKerviService);
      }

      _createClass(KerviCameraComponent, [{
        key: "updateStreamObservers",
        value: function updateStreamObservers() {
          var streamObservers = [];
          var controllers = this.kerviService.getComponentsByType('controller');

          var _iterator42 = _createForOfIteratorHelper(controllers),
              _step42;

          try {
            for (_iterator42.s(); !(_step42 = _iterator42.n()).done;) {
              var controller = _step42.value;

              if (controller.type === 'stream_observer') {
                if (controller.ui.sourceStream === this.cameraSource) {
                  streamObservers.push(controller);
                }
              }
            }
          } catch (err) {
            _iterator42.e(err);
          } finally {
            _iterator42.f();
          }

          this.streamObservers = streamObservers;

          if (this.selectedSource !== this.cameraSource) {
            this.selectedSource = this.cameraSource;
          }
        }
      }, {
        key: "setPan",
        value: function setPan(v) {
          this.pan.set(v);
        }
      }, {
        key: "setTilt",
        value: function setTilt(v) {
          this.tilt.set(v);
        }
      }, {
        key: "ngOnInitCamera",
        value: function ngOnInitCamera() {
          console.log('ngi cam', this.camera.id);
          var self = this;

          if (!this.linkParameters) {
            this.linkParameters = this.camera.ui;
          }

          if (!this.inline && this.linkParameters.inline) {
            this.inline = true;
          }

          this.kerviService.componentsChanged$.subscribe(function () {
            self.updateStreamObservers();
          });
          this.updateStreamObservers();
          this.selectedSource = this.cameraSource;
        }
      }, {
        key: "changeSource",
        value: function changeSource(source) {
          console.log('cs', source);
          this.selectedSource = source;
        }
      }, {
        key: "cameraId",
        set: function set(id) {
          console.log('setcamid', id);
          this.camera = this.kerviService.getComponent(id);
        }
      }, {
        key: "camera",
        set: function set(v) {
          console.log('setcam', v);
          this.cam = v;

          if (v) {
            var _iterator43 = _createForOfIteratorHelper(v.outputs),
                _step43;

            try {
              for (_iterator43.s(); !(_step43 = _iterator43.n()).done;) {
                var i = _step43.value;

                if (i.id.endsWith('.pan')) {
                  this.pan = i;
                } else if (i.id.endsWith('.tilt')) {
                  this.tilt = i;
                }
              }
            } catch (err) {
              _iterator43.e(err);
            } finally {
              _iterator43.f();
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
        get: function get() {
          return this.cam;
        }
      }]);

      return KerviCameraComponent;
    }();

    KerviCameraComponent.ɵfac = function KerviCameraComponent_Factory(t) {
      return new (t || KerviCameraComponent)();
    };

    KerviCameraComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: KerviCameraComponent,
      selectors: [["kervi-camera-base"]],
      inputs: {
        streamObservers: "streamObservers",
        selectedSource: "selectedSource",
        cameraId: "cameraId",
        camera: "camera",
        linkParameters: "linkParameters",
        inline: "inline",
        dashboardSizes: "dashboardSizes",
        isBackground: "isBackground"
      },
      decls: 0,
      vars: 0,
      template: function KerviCameraComponent_Template(rf, ctx) {},
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(KerviCameraComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'kervi-camera-base',
          template: '',
          styleUrls: []
        }]
      }], function () {
        return [];
      }, {
        streamObservers: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        selectedSource: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        cameraId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        camera: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        linkParameters: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        inline: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dashboardSizes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isBackground: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })(); // Copyright (c) 2016, Tim Wentzlau


    var KerviColorComponent = /*#__PURE__*/function (_KerviValueComponent3) {
      _inherits(KerviColorComponent, _KerviValueComponent3);

      var _super29 = _createSuper(KerviColorComponent);

      function KerviColorComponent() {
        var _this26;

        _classCallCheck(this, KerviColorComponent);

        _this26 = _super29.call(this);
        _this26.displayType = "button";
        return _this26;
      }

      _createClass(KerviColorComponent, [{
        key: "setKerviValue",
        value: function setKerviValue(value) {
          this.value.set(value);
        }
      }, {
        key: "ngOnInitColor",
        value: function ngOnInitColor() {
          this.ngOnInitValue();
          var self = this;

          if (this.linkParameters.type) {
            this.displayType = this.linkParameters.type;
          }

          if (!this.inline && this.linkParameters.inline) {
            this.inline = true;
          } else if (!this.inline && this.linkParameters.size > 0) {
            this.inline = true;
          }
        }
      }]);

      return KerviColorComponent;
    }(KerviValueComponent);

    KerviColorComponent.ɵfac = function KerviColorComponent_Factory(t) {
      return new (t || KerviColorComponent)();
    };

    KerviColorComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: KerviColorComponent,
      selectors: [["kervi-value-color-base"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 0,
      vars: 0,
      template: function KerviColorComponent_Template(rf, ctx) {},
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(KerviColorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'kervi-value-color-base',
          template: ''
        }]
      }], function () {
        return [];
      }, null);
    })(); // Copyright (c) 2016, Tim Wentzlau


    var KerviDateTimeComponent = /*#__PURE__*/function (_KerviValueComponent4) {
      _inherits(KerviDateTimeComponent, _KerviValueComponent4);

      var _super30 = _createSuper(KerviDateTimeComponent);

      function KerviDateTimeComponent() {
        var _this27;

        _classCallCheck(this, KerviDateTimeComponent);

        _this27 = _super30.call(this);
        _this27.displayType = "datetime";
        return _this27;
      }

      _createClass(KerviDateTimeComponent, [{
        key: "setKerviValue",
        value: function setKerviValue(value) {
          this.value.set(value);
        }
      }, {
        key: "ngOnInitDateTime",
        value: function ngOnInitDateTime() {
          this.ngOnInitValue();
          var self = this;

          if (this.linkParameters.type) {
            this.displayType = this.linkParameters.type;
          }

          if (!this.inline && this.linkParameters.inline) {
            this.inline = true;
          }

          if (self.linkParameters.type == "time") this.dateTimeFormat = this.kerviService.application$.value.display.unit_system.datetime.time;else if (self.linkParameters.type == "date") this.dateTimeFormat = self.kerviService.application$.value.display.unit_system.datetime.date;else this.dateTimeFormat = this.kerviService.application$.value.display.unit_system.datetime.datetime;
        }
      }]);

      return KerviDateTimeComponent;
    }(KerviValueComponent);

    KerviDateTimeComponent.ɵfac = function KerviDateTimeComponent_Factory(t) {
      return new (t || KerviDateTimeComponent)();
    };

    KerviDateTimeComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: KerviDateTimeComponent,
      selectors: [["kervi-value-datetime-base"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 0,
      vars: 0,
      template: function KerviDateTimeComponent_Template(rf, ctx) {},
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(KerviDateTimeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'kervi-value-datetime-base',
          template: ''
        }]
      }], function () {
        return [];
      }, null);
    })(); // Copyright (c) 2016, Tim Wentzlau


    var KerviStringComponent = /*#__PURE__*/function (_KerviValueComponent5) {
      _inherits(KerviStringComponent, _KerviValueComponent5);

      var _super31 = _createSuper(KerviStringComponent);

      function KerviStringComponent() {
        var _this28;

        _classCallCheck(this, KerviStringComponent);

        _this28 = _super31.call(this);
        _this28.displayType = "";
        return _this28;
      }

      _createClass(KerviStringComponent, [{
        key: "setKerviValue",
        value: function setKerviValue(value) {
          this.value.set(value);
        }
      }, {
        key: "ngOnInitString",
        value: function ngOnInitString() {
          this.ngOnInitValue();
          var self = this;

          if (this.linkParameters.type) {
            this.displayType = this.linkParameters.type;
          }

          if (!this.inline && this.linkParameters.inline) {
            this.inline = true;
          }
        }
      }]);

      return KerviStringComponent;
    }(KerviValueComponent);

    KerviStringComponent.ɵfac = function KerviStringComponent_Factory(t) {
      return new (t || KerviStringComponent)();
    };

    KerviStringComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: KerviStringComponent,
      selectors: [["kervi-value-string-base"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 0,
      vars: 0,
      template: function KerviStringComponent_Template(rf, ctx) {},
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(KerviStringComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'kervi-value-string-base',
          template: ''
        }]
      }], function () {
        return [];
      }, null);
    })(); // Copyright (c) 2016, Tim Wentzlau


    var KerviUserLogComponent = /*#__PURE__*/function () {
      function KerviUserLogComponent() {
        _classCallCheck(this, KerviUserLogComponent);

        this.logLength = 10;
        this.linkParameters = null;
        this.inline = false;
        this.dashboardSizes = new kervi_js__WEBPACK_IMPORTED_MODULE_1__["DashboardSizes"]();
        this.lastMessage$ = null;
        this.messages$ = null;
        this.messageCount$ = null;
        this.logState$ = null;
        this.messageCount = 0;
        this.UserLogState = kervi_js__WEBPACK_IMPORTED_MODULE_1__["UserLogStateType"].normal;
        this.kerviService = AppInjector.get(NGXKerviService);
        this.messages$ = this.kerviService.getLogMessages$();
        this.lastMessage$ = this.kerviService.getLastLogMessage$();
        this.messageCount$ = this.kerviService.getLogMessageCount$();
        this.logState$ = this.kerviService.getLogState$();
        this.messageCount$.subscribe(function (v) {
          this.messageCount = v;
        });
      }

      _createClass(KerviUserLogComponent, [{
        key: "ngOnInitUserLog",
        value: function ngOnInitUserLog() {}
      }]);

      return KerviUserLogComponent;
    }();

    KerviUserLogComponent.ɵfac = function KerviUserLogComponent_Factory(t) {
      return new (t || KerviUserLogComponent)();
    };

    KerviUserLogComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: KerviUserLogComponent,
      selectors: [["kervi-user-log-base"]],
      inputs: {
        logLength: "logLength",
        linkParameters: "linkParameters",
        inline: "inline",
        dashboardSizes: "dashboardSizes"
      },
      decls: 0,
      vars: 0,
      template: function KerviUserLogComponent_Template(rf, ctx) {},
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(KerviUserLogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'kervi-user-log-base',
          template: '',
          styleUrls: []
        }]
      }], function () {
        return [];
      }, {
        logLength: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        linkParameters: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        inline: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dashboardSizes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    var KerviDirectoryComponent = /*#__PURE__*/function () {
      function KerviDirectoryComponent() {
        _classCallCheck(this, KerviDirectoryComponent);

        this.path = '/';
        this.directory = null;
        this.kerviService = AppInjector.get(NGXKerviService);
      }

      _createClass(KerviDirectoryComponent, [{
        key: "loadDirectory",
        value: function loadDirectory() {//this.directory = this.kerviService.GetDirectory(this.path);
        }
      }]);

      return KerviDirectoryComponent;
    }();

    KerviDirectoryComponent.ɵfac = function KerviDirectoryComponent_Factory(t) {
      return new (t || KerviDirectoryComponent)();
    };

    KerviDirectoryComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: KerviDirectoryComponent,
      selectors: [["kervi-directory"]],
      decls: 0,
      vars: 0,
      template: function KerviDirectoryComponent_Template(rf, ctx) {},
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(KerviDirectoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'kervi-directory',
          template: ''
        }]
      }], function () {
        return [];
      }, null);
    })(); // Copyright (c) 2016, Tim Wentzlau


    var KerviAppHealthComponent = /*#__PURE__*/function () {
      function KerviAppHealthComponent() {
        _classCallCheck(this, KerviAppHealthComponent);

        this.linkParameters = null;
        this.inline = false;
        this.dashboardSizes = new kervi_js__WEBPACK_IMPORTED_MODULE_1__["DashboardSizes"]();
        this.mps = 0;
        this.pingDiff = 0;
        this.pingDelay = 0;
        this.kerviService = AppInjector.get(NGXKerviService);
      }

      _createClass(KerviAppHealthComponent, [{
        key: "ngOnInitAppHealth",
        value: function ngOnInitAppHealth() {
          var self = this;
          this.kerviService.mps$.subscribe(function (mps) {
            self.mps = mps;
          });
          this.kerviService.appPingDiff$.subscribe(function (diff) {
            self.pingDiff = diff;
          });
          this.kerviService.appPingDelay$.subscribe(function (diff) {
            self.pingDelay = diff;
          });
        }
      }]);

      return KerviAppHealthComponent;
    }();

    KerviAppHealthComponent.ɵfac = function KerviAppHealthComponent_Factory(t) {
      return new (t || KerviAppHealthComponent)();
    };

    KerviAppHealthComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: KerviAppHealthComponent,
      selectors: [["kervi-app-health-base"]],
      inputs: {
        linkParameters: "linkParameters",
        inline: "inline",
        dashboardSizes: "dashboardSizes",
        mps: "mps",
        pingDiff: "pingDiff",
        pingDelay: "pingDelay"
      },
      decls: 0,
      vars: 0,
      template: function KerviAppHealthComponent_Template(rf, ctx) {},
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(KerviAppHealthComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'kervi-app-health-base',
          template: '',
          styleUrls: []
        }]
      }], function () {
        return [];
      }, {
        linkParameters: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        inline: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        dashboardSizes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        mps: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        pingDiff: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        pingDelay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    var NgxKerviComponent = /*#__PURE__*/function () {
      function NgxKerviComponent() {
        _classCallCheck(this, NgxKerviComponent);
      }

      _createClass(NgxKerviComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NgxKerviComponent;
    }();

    NgxKerviComponent.ɵfac = function NgxKerviComponent_Factory(t) {
      return new (t || NgxKerviComponent)();
    };

    NgxKerviComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({
      type: NgxKerviComponent,
      selectors: [["lib-ngx-kervi"]],
      decls: 2,
      vars: 0,
      template: function NgxKerviComponent_Template(rf, ctx) {
        if (rf & 1) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "p");
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1, " ngx-kervi works! ");
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(NgxKerviComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'lib-ngx-kervi',
          template: "\n    <p>\n      ngx-kervi works!\n    </p>\n  ",
          styles: []
        }]
      }], function () {
        return [];
      }, null);
    })();

    var TranslatePipe = /*#__PURE__*/function () {
      function TranslatePipe(kerviService) {
        _classCallCheck(this, TranslatePipe);

        this.kerviService = kerviService;
      }

      _createClass(TranslatePipe, [{
        key: "transform",
        value: function transform(value, args) {
          return this.kerviService.text(value, value);
        }
      }]);

      return TranslatePipe;
    }();

    TranslatePipe.ɵfac = function TranslatePipe_Factory(t) {
      return new (t || TranslatePipe)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(NGXKerviService));
    };

    TranslatePipe.ɵpipe = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"])({
      name: "translate",
      type: TranslatePipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(TranslatePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'translate'
        }]
      }], function () {
        return [{
          type: NGXKerviService
        }];
      }, null);
    })(); // Copyright (c) 2016, Tim Wentzlau


    var NGXKerviPipesModule = function NGXKerviPipesModule() {
      _classCallCheck(this, NGXKerviPipesModule);
    };

    NGXKerviPipesModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({
      type: NGXKerviPipesModule
    });
    NGXKerviPipesModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({
      factory: function NGXKerviPipesModule_Factory(t) {
        return new (t || NGXKerviPipesModule)();
      },
      providers: [],
      imports: [[]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(NGXKerviPipesModule, {
        declarations: [TranslatePipe],
        exports: [TranslatePipe]
      });
    })();
    /*@__PURE__*/


    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(NGXKerviPipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [],
          exports: [TranslatePipe],
          providers: [],
          declarations: [TranslatePipe]
        }]
      }], null, null);
    })();

    var NgxKerviModule = function NgxKerviModule(injector) {
      _classCallCheck(this, NgxKerviModule);

      this.injector = injector;
      setAppInjector(injector);
    };

    NgxKerviModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({
      type: NgxKerviModule
    });
    NgxKerviModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({
      factory: function NgxKerviModule_Factory(t) {
        return new (t || NgxKerviModule)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]));
      },
      providers: [NGXKerviService, KerviTemplateService],
      imports: [[], NGXKerviPipesModule]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(NgxKerviModule, {
        declarations: [NgxKerviComponent, KerviDashboardComponent, KerviDashboardPanelComponent, KerviControllerPadComponent, KerviNumberComponent, KerviStringComponent, KerviBooleanComponent, KerviColorComponent, KerviDateTimeComponent, KerviActionComponent, KerviValueComponent, KerviWidgetComponent, KerviCameraComponent, KerviUserLogComponent, KerviDirectoryComponent, KerviAppHealthComponent],
        exports: [NgxKerviComponent, KerviDashboardComponent, KerviDashboardPanelComponent, KerviControllerPadComponent, KerviNumberComponent, KerviWidgetComponent, KerviStringComponent, KerviBooleanComponent, KerviColorComponent, KerviDateTimeComponent, KerviActionComponent, KerviCameraComponent, KerviUserLogComponent, KerviActionComponent, KerviAppHealthComponent, NGXKerviPipesModule]
      });
    })();
    /*@__PURE__*/


    (function () {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(NgxKerviModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [],
          declarations: [NgxKerviComponent, KerviDashboardComponent, KerviDashboardPanelComponent, KerviControllerPadComponent, KerviNumberComponent, KerviStringComponent, KerviBooleanComponent, KerviColorComponent, KerviDateTimeComponent, KerviActionComponent, KerviValueComponent, KerviWidgetComponent, KerviCameraComponent, KerviUserLogComponent, KerviDirectoryComponent, KerviAppHealthComponent],
          providers: [NGXKerviService, KerviTemplateService],
          exports: [NgxKerviComponent, KerviDashboardComponent, KerviDashboardPanelComponent, KerviControllerPadComponent, KerviNumberComponent, KerviWidgetComponent, KerviStringComponent, KerviBooleanComponent, KerviColorComponent, KerviDateTimeComponent, KerviActionComponent, KerviCameraComponent, KerviUserLogComponent, KerviActionComponent, KerviAppHealthComponent, NGXKerviPipesModule]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }];
      }, null);
    })();
    /*
     * Public API Surface of ngx-kervi
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ngx-kervi.js.map

    /***/

  },

  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_kervi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-kervi */
    "../../dist/ngx-kervi/fesm2015/ngx-kervi.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(kerviService, router, route) {
        _classCallCheck(this, AppComponent);

        this.kerviService = kerviService;
        this.router = router;
        this.route = route;
        this.currentPage = null;
        var self = this;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var self = this;
          this.kerviService.connectionState$.subscribe(function (connectedState) {
            console.log("connected service state", connectedState, self);

            if (connectedState == ngx_kervi__WEBPACK_IMPORTED_MODULE_1__["ConnectionState"].disconnected) {
              self.router.navigate(['/connect']);
            }

            if (connectedState == ngx_kervi__WEBPACK_IMPORTED_MODULE_1__["ConnectionState"].loading) {}

            if (connectedState == ngx_kervi__WEBPACK_IMPORTED_MODULE_1__["ConnectionState"].authenticate) {
              self.router.navigate(['/authenticate']);
            }

            if (connectedState == ngx_kervi__WEBPACK_IMPORTED_MODULE_1__["ConnectionState"].connected) {
              if (self.currentPage) self.router.navigate([self.currentPage]);else {
                var defaultDashboard = self.kerviService.getDefaultDashboard();
                self.router.navigate(['/' + defaultDashboard.componentType + '/' + defaultDashboard.id]);
              }
            }
          });
          setTimeout(function () {
            self.kerviService.connect();
          }, 0);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_kervi__WEBPACK_IMPORTED_MODULE_1__["NGXKerviService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy93ZWJBcHAvc3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: ngx_kervi__WEBPACK_IMPORTED_MODULE_1__["NGXKerviService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_kervi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-kervi */
    "../../dist/ngx-kervi/fesm2015/ngx-kervi.js");
    /* harmony import */


    var kervi_zorro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! kervi-zorro */
    "../../dist/kervi-zorro/fesm2015/kervi-zorro.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/flex-layout */
    "../../node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-zorro-antd */
    "../../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd.js");
    /* harmony import */


    var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ant-design/icons-angular/icons */
    "../../node_modules/@ant-design/icons-angular/__ivy_ngcc__/fesm2015/ant-design-icons-angular-icons.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/locales/en */
    "../../node_modules/@angular/common/locales/en.js");
    /* harmony import */


    var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _connect_connect_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./connect/connect.component */
    "./src/app/connect/connect.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _media_media_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./media/media.component */
    "./src/app/media/media.component.ts");
    /* harmony import */


    var _image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./image-viewer/image-viewer.component */
    "./src/app/image-viewer/image-viewer.component.ts");

    Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_10___default.a);
    var antDesignIcons = _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_8__;
    var icons = Object.keys(antDesignIcons).map(function (key) {
      return antDesignIcons[key];
    });
    var ROUTES = [{
      path: 'connect',
      component: _connect_connect_component__WEBPACK_IMPORTED_MODULE_13__["ConnectComponent"]
    }, {
      path: 'authenticate',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"]
    }, {
      path: 'dashboard/:name',
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__["DashboardComponent"]
    }, {
      path: 'media',
      component: _media_media_component__WEBPACK_IMPORTED_MODULE_16__["MediaComponent"]
    }, {
      path: '',
      redirectTo: '',
      pathMatch: 'full'
    }];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NZ_I18N"],
        useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["en_US"]
      }, {
        provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NZ_ICONS"],
        useValue: icons
      }],
      imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], ngx_kervi__WEBPACK_IMPORTED_MODULE_4__["NgxKerviModule"], ngx_kervi__WEBPACK_IMPORTED_MODULE_4__["NGXKerviPipesModule"], kervi_zorro__WEBPACK_IMPORTED_MODULE_5__["KerviZorroModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdModule"], //NgxKerviComponentsModule,
      _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"].forRoot(ROUTES)]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"], _connect_connect_component__WEBPACK_IMPORTED_MODULE_13__["ConnectComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__["DashboardComponent"], _media_media_component__WEBPACK_IMPORTED_MODULE_16__["MediaComponent"], _image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_17__["ImgViewerComponent"]],
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], ngx_kervi__WEBPACK_IMPORTED_MODULE_4__["NgxKerviModule"], ngx_kervi__WEBPACK_IMPORTED_MODULE_4__["NGXKerviPipesModule"], kervi_zorro__WEBPACK_IMPORTED_MODULE_5__["KerviZorroModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdModule"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"], _connect_connect_component__WEBPACK_IMPORTED_MODULE_13__["ConnectComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__["DashboardComponent"], _media_media_component__WEBPACK_IMPORTED_MODULE_16__["MediaComponent"], _image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_17__["ImgViewerComponent"]],
          imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], ngx_kervi__WEBPACK_IMPORTED_MODULE_4__["NgxKerviModule"], ngx_kervi__WEBPACK_IMPORTED_MODULE_4__["NGXKerviPipesModule"], kervi_zorro__WEBPACK_IMPORTED_MODULE_5__["KerviZorroModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdModule"], //NgxKerviComponentsModule,
          _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"].forRoot(ROUTES)],
          providers: [{
            provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NZ_I18N"],
            useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["en_US"]
          }, {
            provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NZ_ICONS"],
            useValue: icons
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/connect/connect.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/connect/connect.component.ts ***!
    \**********************************************/

  /*! exports provided: ConnectComponent */

  /***/
  function srcAppConnectConnectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConnectComponent", function () {
      return ConnectComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_kervi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-kervi */
    "../../dist/ngx-kervi/fesm2015/ngx-kervi.js");
    /* harmony import */


    var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng-zorro-antd/layout */
    "../../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-layout.js");
    /* harmony import */


    var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng-zorro-antd/grid */
    "../../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-grid.js");
    /* harmony import */


    var ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng-zorro-antd/steps */
    "../../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-steps.js");

    var ConnectComponent = /*#__PURE__*/function () {
      function ConnectComponent(kerviService) {
        _classCallCheck(this, ConnectComponent);

        this.kerviService = kerviService;
        this.current = 1;
      }

      _createClass(ConnectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
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
        }
      }]);

      return ConnectComponent;
    }();

    ConnectComponent.ɵfac = function ConnectComponent_Factory(t) {
      return new (t || ConnectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_kervi__WEBPACK_IMPORTED_MODULE_1__["NGXKerviService"]));
    };

    ConnectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ConnectComponent,
      selectors: [["app-connect"]],
      decls: 8,
      vars: 1,
      consts: [[1, "kervi-app-initializing"], ["nz-row", ""], ["nz-col", "", "nzSpan", "12", "nzOffset", "9"], ["nzDirection", "vertical", 3, "nzCurrent"], ["nzTitle", "Initializing", "nzDescription", "\xA0", "nzIcon", "setting"], ["nzTitle", "Connecting", "nzDescription", "\xA0", "nzIcon", "wifi"], ["nzTitle", "Loading dashboards", "nzDescription", "\xA0", "nzIcon", "download"]],
      template: function ConnectComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-layout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-content", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-steps", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nz-step", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nz-step", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "nz-step", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzCurrent", ctx.current);
        }
      },
      directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_2__["NzLayoutComponent"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_2__["NzContentComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzColDirective"], ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_4__["NzStepsComponent"], ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_4__["NzStepComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy93ZWJBcHAvc3JjL2FwcC9jb25uZWN0L2Nvbm5lY3QuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConnectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-connect',
          templateUrl: './connect.component.html',
          styleUrls: ['./connect.component.css']
        }]
      }], function () {
        return [{
          type: ngx_kervi__WEBPACK_IMPORTED_MODULE_1__["NGXKerviService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_kervi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-kervi */
    "../../dist/ngx-kervi/fesm2015/ngx-kervi.js");
    /* harmony import */


    var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng-zorro-antd/layout */
    "../../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-layout.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng-zorro-antd/modal */
    "../../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-modal.js");
    /* harmony import */


    var _media_media_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../media/media.component */
    "./src/app/media/media.component.ts");
    /* harmony import */


    var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-zorro-antd/grid */
    "../../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-grid.js");
    /* harmony import */


    var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ng-zorro-antd/menu */
    "../../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-menu.js");
    /* harmony import */


    var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ng-zorro-antd/core/transition-patch */
    "../../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
    /* harmony import */


    var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ng-zorro-antd/icon */
    "../../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
    /* harmony import */


    var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ng-zorro-antd/divider */
    "../../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-divider.js");
    /* harmony import */


    var kervi_zorro__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! kervi-zorro */
    "../../dist/kervi-zorro/fesm2015/kervi-zorro.js");
    /* harmony import */


    var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ng-zorro-antd/alert */
    "../../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-alert.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "../../node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ng-zorro-antd/button */
    "../../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
    /* harmony import */


    var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ng-zorro-antd/core/wave */
    "../../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");

    var _c0 = ["leftPad"];
    var _c1 = ["rightPad"];

    var _c2 = function _c2(a1) {
      return ["/dashboard", a1];
    };

    function DashboardComponent_nz_header_1_li_4_ng_container_5_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var dashboard_r15 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c2, dashboard_r15.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dashboard_r15.name);
      }
    }

    function DashboardComponent_nz_header_1_li_4_ng_container_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_nz_header_1_li_4_ng_container_5_li_1_Template, 2, 4, "li", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.dashboards);
      }
    }

    function DashboardComponent_nz_header_1_li_4_li_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DashboardComponent_nz_header_1_li_4_li_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_nz_header_1_li_4_li_7_Template_li_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r16.logoff($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "login"), "");
      }
    }

    function DashboardComponent_nz_header_1_li_4_li_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_nz_header_1_li_4_li_8_Template_li_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r18.logoff($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "logout"));
      }
    }

    function DashboardComponent_nz_header_1_li_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DashboardComponent_nz_header_1_li_4_ng_container_5_Template, 2, 1, "ng-container", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DashboardComponent_nz_header_1_li_4_li_6_Template, 2, 0, "li", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DashboardComponent_nz_header_1_li_4_li_7_Template, 4, 3, "li", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DashboardComponent_nz_header_1_li_4_li_8_Template, 4, 3, "li", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTwotoneColor", "#9fd037");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.dashboard.name, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.dashboards.length > 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.authenticated && ctx_r7.dashboards.length > 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.authenticated && ctx_r7.anonymous);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.authenticated && !ctx_r7.anonymous);
      }
    }

    function DashboardComponent_nz_header_1_li_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_nz_header_1_li_5_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r20.dashboardPanelsHidden = !ctx_r20.dashboardPanelsHidden;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTwotoneColor", "#9fd037");
      }
    }

    function DashboardComponent_nz_header_1_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "kervi-dashboard-panel", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_nz_header_1_div_6_Template_a_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r22.mediaHidden = !ctx_r22.mediaHidden;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "kervi-message-button");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dashboardSizes", ctx_r9.dashboardSizes)("inline", true)("panel", ctx_r9.dashboard.sysPanel);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTwotoneColor", "#9fd037");
      }
    }

    function DashboardComponent_nz_header_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DashboardComponent_nz_header_1_li_4_Template, 9, 6, "li", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DashboardComponent_nz_header_1_li_5_Template, 3, 1, "li", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DashboardComponent_nz_header_1_div_6_Template, 6, 4, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showMenu);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showPanelController);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.dashboard && ctx_r0.dashboard.sysPanel);
      }
    }

    function DashboardComponent_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "nz-alert", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMessage", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, "hello_world"))("nzDescription", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, "empty_app"));
      }
    }

    function DashboardComponent_kervi_cam_viewer_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "kervi-cam-viewer", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isBackground", true)("cameraId", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, ctx_r2.cameraId$))("linkParameters", ctx_r2.cameraParameters);
      }
    }

    function DashboardComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31, 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "kervi-nipple-pad", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", 0, "px")("top", 65, "px")("bottom", 65, "px")("right", 66, "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autoCenter", ctx_r3.autoCenterLeftPad)("XValue", ctx_r3.leftPadXValue)("YValue", ctx_r3.leftPadYValue);
      }
    }

    function DashboardComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31, 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "kervi-nipple-pad", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", 66, "%")("top", 65, "px")("bottom", 65, "px")("right", 0, "px");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autoCenter", ctx_r4.autoCenterRightPad)("XValue", ctx_r4.rightPadXValue)("YValue", ctx_r4.rightPadYValue);
      }
    }

    function DashboardComponent_div_7_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "kervi-dashboard-panel", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var panel_r27 = ctx.$implicit;

        var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", panel_r27.parameters.width)("dashboardSizes", ctx_r26.defaultSizes)("panel", panel_r27);
      }
    }

    function DashboardComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_7_ng_container_1_Template, 2, 3, "ng-container", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.dashboard.panels);
      }
    }

    function DashboardComponent_nz_footer_8_kervi_dashboard_panel_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "kervi-dashboard-panel", 44);
      }

      if (rf & 2) {
        var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true)("dashboardSizes", ctx_r28.defaultSizes)("panel", ctx_r28.dashboard.footerLeftPanel);
      }
    }

    function DashboardComponent_nz_footer_8_kervi_dashboard_panel_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "kervi-dashboard-panel", 44);
      }

      if (rf & 2) {
        var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true)("dashboardSizes", ctx_r29.defaultSizes)("panel", ctx_r29.dashboard.footerCenterPanel);
      }
    }

    function DashboardComponent_nz_footer_8_kervi_dashboard_panel_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "kervi-dashboard-panel", 44);
      }

      if (rf & 2) {
        var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true)("dashboardSizes", ctx_r30.defaultSizes)("panel", ctx_r30.dashboard.footerRightPanel);
      }
    }

    function DashboardComponent_nz_footer_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-footer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DashboardComponent_nz_footer_8_kervi_dashboard_panel_3_Template, 1, 3, "kervi-dashboard-panel", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DashboardComponent_nz_footer_8_kervi_dashboard_panel_5_Template, 1, 3, "kervi-dashboard-panel", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DashboardComponent_nz_footer_8_kervi_dashboard_panel_7_Template, 1, 3, "kervi-dashboard-panel", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function DashboardComponent_nz_footer_8_Template_button_mousedown_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r31.toggleFullScreen();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.dashboard.footerLeftPanel);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.dashboard.footerCenterPanel);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.dashboard.footerRightPanel);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 5, "toggle_screen"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", ctx_r6.inFullScreen ? "fullscreen-exit" : "fullscreen");
      }
    }

    var DashboardComponent = /*#__PURE__*/function (_ngx_kervi__WEBPACK_I15) {
      _inherits(DashboardComponent, _ngx_kervi__WEBPACK_I15);

      var _super32 = _createSuper(DashboardComponent);

      function DashboardComponent(router, activatedRoute) {
        var _this29;

        _classCallCheck(this, DashboardComponent);

        _this29 = _super32.call(this);
        _this29.router = router;
        _this29.activatedRoute = activatedRoute;
        _this29.padSize = 180;
        _this29.cameraIdx = "";
        _this29.mediaHidden = true;
        return _this29;
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this30 = this;

          var self = this;
          this.cameraId$.subscribe(function (camId) {
            console.log("db cid", camId);
            this.cameraIdx = camId;
          });
          this.kerviService.componentsChanged$.subscribe(function () {
            console.log("adb changed");
            var id = self.dashboardId; //self.loadDashboard("0");

            self.loadDashboard(id);
          });
          this.activatedRoute.params.subscribe(function (params) {
            var dashboardId = params['name'];
            console.log("dbi", dashboardId);

            _this30.loadDashboard(dashboardId);

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
        }
      }, {
        key: "handleMediaClose",
        value: function handleMediaClose() {
          console.log('click ok');
          this.mediaHidden = true;
        }
      }]);

      return DashboardComponent;
    }(ngx_kervi__WEBPACK_IMPORTED_MODULE_2__["KerviDashboardComponent"]);

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      viewQuery: function DashboardComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.leftPad = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.rightPad = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 12,
      vars: 8,
      consts: [[4, "ngIf"], [3, "isBackground", "cameraId", "linkParameters", 4, "ngIf"], ["class", "kervi-controller-pad", 3, "left", "top", "bottom", "right", 4, "ngIf"], ["class", "kervi-panels", "fxLayout", " column", "fxLayout.xs", "column", "fxLayoutGap", "0.5%", "fxLayoutAlign", "", "style", "", 4, "ngIf"], ["nzWrapClassName", "vertical-center-modal", "nzTitle", "Media", 3, "nzVisible", "nzVisibleChange", "nzOnCancel"], [2, "display", "inline-block", "width", "100%"], ["nz-row", ""], ["nz-col", "", "nzSpan", "6"], ["nz-menu", "", "nzMode", "horizontal", 1, "kervi-main-menu"], ["nz-submenu", "", 4, "ngIf"], ["nz-menu-item", "", 4, "ngIf"], ["class", "kervi-sys-panel", "nz-col", "", "nzSpan", "18", 4, "ngIf"], ["nz-submenu", ""], ["title", ""], ["nz-icon", "", "nzTheme", "twotone", "type", "dashboard", 3, "nzTwotoneColor"], ["nz-menu-item", "", "href", "javascript: return false;", 3, "click", 4, "ngIf"], ["nz-menu-item", "", 3, "routerLink", 4, "ngFor", "ngForOf"], ["nz-menu-item", "", 3, "routerLink"], ["nz-menu-item", "", "href", "javascript: return false;", 3, "click"], ["nz-icon", "", "type", "login"], ["nz-icon", "", "type", "logout"], ["nz-menu-item", ""], [3, "click"], ["nz-icon", "", "type", "sliders", "nzTheme", "twotone", 3, "nzTwotoneColor"], ["nz-col", "", "nzSpan", "18", 1, "kervi-sys-panel"], [3, "dashboardSizes", "inline", "panel"], ["nz-icon", "", "nzType", "folder-open", "nzTheme", "twotone", 3, "nzTwotoneColor"], ["nz-row", "", 1, "kervi-panels", 2, "height", "100%"], ["nz-col", "", "nzSpan", "12", "nzOffset", "6"], ["nzType", "warning", "nzShowIcon", "", 3, "nzMessage", "nzDescription"], [3, "isBackground", "cameraId", "linkParameters"], [1, "kervi-controller-pad"], ["leftPad", ""], [2, "width", "100%", "height", "100%", 3, "autoCenter", "XValue", "YValue"], ["rightPad", ""], ["fxLayout", " column", "fxLayout.xs", "column", "fxLayoutGap", "0.5%", "fxLayoutAlign", "", 1, "kervi-panels"], [4, "ngFor", "ngForOf"], ["fxFlex.xs", "100%", 3, "fxFlex", "dashboardSizes", "panel"], ["nz-col", "", "nzSpan", "8", 2, "text-align", "left"], [3, "inline", "dashboardSizes", "panel", 4, "ngIf"], ["nz-col", "", "nzSpan", "8", 2, "text-align", "center"], ["nz-col", "", "nzSpan", "8", 2, "text-align", "right"], ["nz-button", "", "nz-type", "text", 3, "mousedown"], ["nz-icon", "", 3, "nzType", "title"], [3, "inline", "dashboardSizes", "panel"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-layout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_nz_header_1_Template, 7, 3, "nz-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DashboardComponent_ng_container_3_Template, 8, 6, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DashboardComponent_kervi_cam_viewer_4_Template, 2, 5, "kervi-cam-viewer", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DashboardComponent_div_5_Template, 3, 11, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DashboardComponent_div_6_Template, 3, 11, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DashboardComponent_div_7_Template, 2, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DashboardComponent_nz_footer_8_Template, 11, 7, "nz-footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nz-modal", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function DashboardComponent_Template_nz_modal_nzVisibleChange_9_listener($event) {
            return !(ctx.mediaHidden = $event);
          })("nzOnCancel", function DashboardComponent_Template_nz_modal_nzOnCancel_9_listener() {
            return ctx.handleMediaClose();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-media");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAppEmpty);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAppEmpty);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cameraId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showLeftPad);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showRightPad);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.dashboardPanelsHidden && !ctx.isAppEmpty);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAppEmpty);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzVisible", !ctx.mediaHidden);
        }
      },
      directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_3__["NzLayoutComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_3__["NzContentComponent"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_5__["NzModalComponent"], _media_media_component__WEBPACK_IMPORTED_MODULE_6__["MediaComponent"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_3__["NzHeaderComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__["NzColDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_8__["NzMenuDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__["ɵNzTransitionPatchDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_8__["NzSubMenuComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__["NzIconDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_8__["NzMenuItemDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_11__["NzDividerComponent"], kervi_zorro__WEBPACK_IMPORTED_MODULE_12__["DashboardPanelComponent"], kervi_zorro__WEBPACK_IMPORTED_MODULE_12__["UserMessageButtonComponent"], ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_13__["NzAlertComponent"], kervi_zorro__WEBPACK_IMPORTED_MODULE_12__["CamViewerComponent"], kervi_zorro__WEBPACK_IMPORTED_MODULE_12__["NipplePadComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultFlexDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_3__["NzFooterComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_16__["NzWaveDirective"]],
      pipes: [ngx_kervi__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
      styles: [".dashboard-panels-hidden[_ngcontent-%COMP%]{\r\n    display: none;\r\n}\r\n\r\n  .vertical-center-modal {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    z-index:4000;\r\n    \r\n    height:90%;\r\n    \r\n  }\r\n\r\n  .vertical-center-modal .ant-modal {\r\n    top: 0;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dlYkFwcC9zcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osZUFBZTtJQUNmLFVBQVU7O0VBRVo7O0FBRUE7SUFDRSxNQUFNO0VBQ1IiLCJmaWxlIjoicHJvamVjdHMvd2ViQXBwL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhc2hib2FyZC1wYW5lbHMtaGlkZGVue1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC52ZXJ0aWNhbC1jZW50ZXItbW9kYWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHotaW5kZXg6NDAwMDtcclxuICAgIC8qIHdpZHRoOjkwJTsgKi9cclxuICAgIGhlaWdodDo5MCU7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCAudmVydGljYWwtY2VudGVyLW1vZGFsIC5hbnQtbW9kYWwge1xyXG4gICAgdG9wOiAwO1xyXG4gIH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, {
        leftPad: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ["leftPad"]
        }],
        rightPad: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ["rightPad"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/image-viewer/image-viewer.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/image-viewer/image-viewer.component.ts ***!
    \********************************************************/

  /*! exports provided: ImgViewerComponent */

  /***/
  function srcAppImageViewerImageViewerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImgViewerComponent", function () {
      return ImgViewerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var iv_viewer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! iv-viewer */
    "../../node_modules/iv-viewer/lib/index.js");
    /* harmony import */


    var iv_viewer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(iv_viewer__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _image_viewer_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./image-viewer.config */
    "./src/app/image-viewer/image-viewer.config.ts");
    /* harmony import */


    var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng-zorro-antd/grid */
    "../../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-grid.js");
    /* harmony import */


    var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng-zorro-antd/core/transition-patch */
    "../../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
    /* harmony import */


    var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng-zorro-antd/icon */
    "../../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
    /* harmony import */


    var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-zorro-antd/tooltip */
    "../../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-tooltip.js");

    var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }; //based on https://github.com/LZHD/ng-picture-viewer
    //Copyright 2019 Tim Wentzlau
    // Licensed under MIT


    function ImgViewerComponent_div_7_span_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImgViewerComponent_div_7_span_1_Template_span_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r11.zoomInImg();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTooltipTitle", ctx_r4.imageViewerType.zoomInToolTip);
      }
    }

    function ImgViewerComponent_div_7_span_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImgViewerComponent_div_7_span_2_Template_span_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r13.zoomOutImg();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTooltipTitle", ctx_r5.imageViewerType.zoomOutToolTip);
      }
    }

    function ImgViewerComponent_div_7_span_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImgViewerComponent_div_7_span_3_Template_span_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r15.rotateImg(false);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTooltipTitle", ctx_r6.imageViewerType.rotateLeftToolTip);
      }
    }

    function ImgViewerComponent_div_7_span_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImgViewerComponent_div_7_span_4_Template_span_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r17.rotateImg(true);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTooltipTitle", ctx_r7.imageViewerType.rotateRightToolTip);
      }
    }

    function ImgViewerComponent_div_7_span_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImgViewerComponent_div_7_span_5_Template_span_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r19.showImg();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTooltipTitle", ctx_r8.imageViewerType.resetToolTip);
      }
    }

    function ImgViewerComponent_div_7_span_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImgViewerComponent_div_7_span_6_Template_span_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r21.fullscreenImg();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTooltipTitle", ctx_r9.imageViewerType.fullScreenToolTip);
      }
    }

    function ImgViewerComponent_div_7_span_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImgViewerComponent_div_7_span_7_Template_span_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r23.downloadImg();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTooltipTitle", ctx_r10.imageViewerType.downloadToolTip);
      }
    }

    function ImgViewerComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImgViewerComponent_div_7_span_1_Template, 2, 1, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ImgViewerComponent_div_7_span_2_Template, 2, 1, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ImgViewerComponent_div_7_span_3_Template, 2, 1, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ImgViewerComponent_div_7_span_4_Template, 2, 1, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ImgViewerComponent_div_7_span_5_Template, 2, 1, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ImgViewerComponent_div_7_span_6_Template, 2, 1, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ImgViewerComponent_div_7_span_7_Template, 2, 1, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.zoom);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.zoom);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.rotate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.rotate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.reset);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.fullscreen);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.download);
      }
    }

    function ImgViewerComponent_span_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImgViewerComponent_span_10_Template_span_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r25.prevImg();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ImgViewerComponent_span_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImgViewerComponent_span_11_Template_span_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r27.nextImg();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ImgViewerComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r3.currentImgIndex, " / ", ctx_r3.imgTotal, " ");
      }
    }

    var ImgViewerComponent = /*#__PURE__*/function () {
      function ImgViewerComponent(el, renderer, doc, config) {
        _classCallCheck(this, ImgViewerComponent);

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

      _createClass(ImgViewerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.imgTotal = this.images.length;
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.initImgViewer();
        }
      }, {
        key: "zoomInImg",
        value: function zoomInImg() {
          this.zoomValue += 10;
          this.imageViewer$.zoom(this.zoomValue);
        }
      }, {
        key: "zoomOutImg",
        value: function zoomOutImg() {
          if (this.zoomValue === 100) {
            return;
          }

          this.zoomValue -= 10;

          if (this.zoomValue < 0) {
            this.zoomValue = 0;
          }

          this.imageViewer$.zoom(this.zoomValue);
        }
      }, {
        key: "rotateImg",
        value: function rotateImg(isClockwise) {
          var _this31 = this;

          this.beforeRotateImg().then(function (time) {
            if (isClockwise) {
              _this31.imgRotate += _this31.ROTATE_ANGLE;
            } else {
              _this31.imgRotate -= _this31.ROTATE_ANGLE;
            }

            _this31.isVertical = !_this31.isVertical;
            time <= 0 ? _this31.addImgRotate() : setTimeout(function () {
              return _this31.addImgRotate();
            }, time);
          });
        }
      }, {
        key: "fullscreenImg",
        value: function fullscreenImg() {
          var _this32 = this;

          this.beforeRotateImg().then(function (time) {
            if (time <= 0) {
              _this32.fullScreenViewer$.show(_this32.images[_this32.currentImgIndex - 1]);

              _this32.addImgRotate(false);
            } else {
              setTimeout(function () {
                _this32.fullScreenViewer$.show(_this32.images[_this32.currentImgIndex - 1]);

                _this32.addImgRotate(false);
              }, time);
            }
          });
        }
      }, {
        key: "downloadImg",
        value: function downloadImg() {
          var download = this.renderer.createElement('a');
          this.renderer.setAttribute(download, 'download', "".concat(this.defaultName, "-").concat(this.currentImgIndex));
          this.renderer.setAttribute(download, 'display', 'none');
          this.renderer.setAttribute(download, 'href', this.images[this.currentImgIndex - 1]);
          this.renderer.setAttribute(download, 'target', '_blank');
          this.renderer.appendChild(this.element, download);
          download.click();
          this.renderer.removeChild(this.renderer, download);
        }
      }, {
        key: "prevImg",
        value: function prevImg() {
          this.isVertical = false;
          this.currentImgIndex--;

          if (this.currentImgIndex <= 0) {
            this.currentImgIndex = this.imgTotal;
          } //this.showImg();


          this.prevChange.emit(this.currentImgIndex);
        }
      }, {
        key: "nextImg",
        value: function nextImg() {
          this.isVertical = false;
          this.currentImgIndex++;

          if (this.currentImgIndex > this.imgTotal) {
            this.currentImgIndex = 1;
          } //this.showImg();


          this.nextChange.emit(this.currentImgIndex);
        }
      }, {
        key: "closeImageViewer",
        value: function closeImageViewer() {
          this.closeViewer.emit();
        }
      }, {
        key: "initImgViewer",
        value: function initImgViewer() {
          this.imageViewer$ = new iv_viewer__WEBPACK_IMPORTED_MODULE_2___default.a(this.element.querySelector('.img-viewer-panel-body-content'), this.ivViewerType);
          this.fullScreenViewer$ = new iv_viewer__WEBPACK_IMPORTED_MODULE_2__["FullScreenViewer"](this.ivViewerType); //this.showImg();
        }
      }, {
        key: "addImgRotate",
        value: function addImgRotate() {
          var _this33 = this;

          var isAnimation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          var scale = '';

          if (this.isVertical && this.isImgOverVertical()) {
            scale = "scale(".concat(this.getScale(), ")");
          }

          var rotate = "rotate(".concat(this.imgRotate, "deg)");

          if (isAnimation) {
            this.addTransition('iv-snap-image');
            this.addTransition('iv-small-image');
          }

          this.setImgRotate('iv-snap-image', rotate, scale);
          this.setImgRotate('iv-small-image', rotate, scale);
          setTimeout(function () {
            if (isAnimation) {
              _this33.removeAnimation('iv-snap-image');

              _this33.removeAnimation('iv-small-image');
            }
          }, 500);
        }
      }, {
        key: "beforeRotateImg",
        value: function beforeRotateImg() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var time;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.zoomValue = 100;
                    time = this.imageViewer$._state.zoomValue - this.zoomValue;
                    _context.next = 4;
                    return this.imageViewer$.resetZoom();

                  case 4:
                    _context.next = 6;
                    return this.imageViewer$.refresh();

                  case 6:
                    return _context.abrupt("return", time === 0 ? 0 : 500);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "beforeShowImg",
        value: function beforeShowImg() {
          this.imgRotate = 0;
          this.isVertical = false;
          var currentImg = this.element.querySelector('.iv-small-image');

          if (!!currentImg) {
            this.renderer.removeChild(this.element, currentImg);
          }

          this.setStyle('iv-loader', 'visibility', 'auto');
          this.setStyle('options-image-viewer', 'visibility', 'inherit');
        }
      }, {
        key: "showImg",
        value: function showImg() {
          this.beforeShowImg();
          this.imageViewer$.load(this.images[0]);
        }
      }, {
        key: "isImgOverVertical",
        value: function isImgOverVertical() {
          var imgViewerHeight = this.element.clientHeight;
          var currentImgWidth = this.element.querySelector('.iv-small-image').clientWidth;
          return imgViewerHeight < currentImgWidth + 10;
        }
      }, {
        key: "getScale",
        value: function getScale() {
          var imgViewerHeight = this.element.querySelector('.img-viewer-panel-body-content').clientHeight;
          var currentImgWidth = this.element.querySelector('.iv-small-image').clientWidth;
          var differenceWidth = currentImgWidth - imgViewerHeight;

          if (differenceWidth >= 250 && differenceWidth < 300) {
            return differenceWidth / imgViewerHeight - 0.1;
          } else if (differenceWidth >= 300 && differenceWidth < 400) {
            return differenceWidth / imgViewerHeight - 0.15;
          } else if (differenceWidth >= 400) {
            return differenceWidth / imgViewerHeight - 0.32;
          } else if (differenceWidth < 0) {
            return 1;
          }

          return 0.6;
        }
      }, {
        key: "addTransition",
        value: function addTransition(node) {
          this.setStyle(node, 'transition', '0.5s linear');
        }
      }, {
        key: "removeAnimation",
        value: function removeAnimation(node) {
          this.setStyle(node, 'transition', 'auto');
        }
      }, {
        key: "setImgRotate",
        value: function setImgRotate(node, roate, scale) {
          this.setStyle(node, 'transform', "".concat(roate, " ").concat(scale));
        }
      }, {
        key: "setStyle",
        value: function setStyle(node, name, value) {
          var _this34 = this;

          var elements = this.doc.querySelectorAll(".".concat(node));
          elements.forEach(function (ele) {
            return _this34.renderer.setStyle(ele, name, value);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (!!this.imageViewer$) {
            this.imageViewer$ = this.imageViewer$.destroy();
          }

          if (!!this.fullScreenViewer$) {
            this.fullScreenViewer$ = this.fullScreenViewer$.destroy();
          }
        }
      }]);

      return ImgViewerComponent;
    }();

    ImgViewerComponent.ɵfac = function ImgViewerComponent_Factory(t) {
      return new (t || ImgViewerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_image_viewer_config__WEBPACK_IMPORTED_MODULE_3__["ImgViewerConfig"], 8));
    };

    ImgViewerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ImgViewerComponent,
      selectors: [["nz-picture-viewer"]],
      inputs: {
        imgViewerClass: "imgViewerClass",
        images: "images",
        showOperate: "showOperate",
        zoom: "zoom",
        rotate: "rotate",
        reset: "reset",
        fullscreen: "fullscreen",
        download: "download",
        defaultName: "defaultName"
      },
      outputs: {
        prevChange: "prevChange",
        nextChange: "nextChange",
        closeViewer: "closeViewer"
      },
      decls: 13,
      vars: 9,
      consts: [[1, "img-viewer-panel"], [1, "img-viewer-panel-header"], ["nz-row", ""], ["nz-col", "", "nzSpan", "3"], ["nz-icon", "", "nzType", "rollback", "nzTheme", "outline", 3, "click"], ["nz-col", "", "nzSpan", "21"], ["class", "img-viewer-panel-header-operation", 4, "ngIf"], [1, "img-viewer-panel-body"], [1, "img-viewer-panel-body-content"], ["class", "img-viewer-panel-body-prev", 3, "click", 4, "ngIf"], ["class", "img-viewer-panel-body-next", 3, "click", 4, "ngIf"], ["class", "img-viewer-panel-footer", 4, "ngIf"], [1, "img-viewer-panel-header-operation"], ["nz-tooltip", "", "nzTooltipPlacement", "bottom", 3, "nzTooltipTitle", "click", 4, "ngIf"], ["nz-tooltip", "", "nzTooltipPlacement", "bottom", 3, "nzTooltipTitle", "click"], ["nz-icon", "", "nzType", "zoom-in"], ["nz-icon", "", "nzType", "zoom-out"], ["nz-icon", "", "nzType", "undo"], ["nz-icon", "", "nzType", "redo"], ["nz-icon", "", "nzType", "sync"], ["nz-icon", "", "nzType", "fullscreen"], ["nz-icon", "", "nzType", "download"], [1, "img-viewer-panel-body-prev", 3, "click"], ["nz-icon", "", "nzType", "left"], [1, "img-viewer-panel-body-next", 3, "click"], ["nz-icon", "", "nzType", "right"], [1, "img-viewer-panel-footer"]],
      template: function ImgViewerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImgViewerComponent_Template_i_click_5_listener() {
            return ctx.closeImageViewer();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ImgViewerComponent_div_7_Template, 8, 7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ImgViewerComponent_span_10_Template, 2, 0, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ImgViewerComponent_span_11_Template, 2, 0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ImgViewerComponent_div_12_Template, 2, 2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("img-viewer ", ctx.imgViewerClass, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showOperate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("img-viewer-panel-body-has-footer", ctx.images.length > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imgTotal > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imgTotal > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imgTotal > 1);
        }
      },
      directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__["NzColDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_7__["NzTooltipDirective"]],
      styles: [".img-viewer[_ngcontent-%COMP%] {\n  position: relative;\n  line-height: 1.5;\n  font-family: Consolas, Menlo, Courier, monospace;\n  text-align: left;\n  color: rgba(0, 0, 0, 0.65);\n  width: 100%;\n  height: 450px;\n}\n.img-viewer[_ngcontent-%COMP%]   .img-viewer-panel[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  font-size: 12px;\n  border: 1px solid none;\n  display: inline-block;\n  border-radius: 4px;\n  vertical-align: middle;\n  position: relative;\n  padding-top: 50px;\n}\n.img-viewer[_ngcontent-%COMP%]   .img-viewer-panel-header[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  height: 50px;\n  border-radius: 4px 4px 0 0;\n  border-bottom: 1px solid none;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  font-size: 24px;\n  line-height: 33px;\n}\n.img-viewer[_ngcontent-%COMP%]   .img-viewer-panel-header-pdf[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n}\n.img-viewer[_ngcontent-%COMP%]   .img-viewer-panel-header-operation[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n}\n.img-viewer[_ngcontent-%COMP%]   .img-viewer-panel-header-operation[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 0 3px;\n}\n.img-viewer[_ngcontent-%COMP%]   .img-viewer-panel-body[_ngcontent-%COMP%] {\n  height: 100%;\n  font-size: 12px;\n  position: relative;\n}\n.img-viewer[_ngcontent-%COMP%]   .img-viewer-panel-body[_ngcontent-%COMP%]   .switch[_ngcontent-%COMP%], .img-viewer[_ngcontent-%COMP%]   .img-viewer-panel-body[_ngcontent-%COMP%]   .img-viewer-panel-body-next[_ngcontent-%COMP%], .img-viewer[_ngcontent-%COMP%]   .img-viewer-panel-body[_ngcontent-%COMP%]   .img-viewer-panel-body-prev[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translate(0, -50%);\n  font-size: 24px;\n}\n.img-viewer[_ngcontent-%COMP%]   .img-viewer-panel-body[_ngcontent-%COMP%]   .switch[_ngcontent-%COMP%]:hover, .img-viewer[_ngcontent-%COMP%]   .img-viewer-panel-body[_ngcontent-%COMP%]   .img-viewer-panel-body-next[_ngcontent-%COMP%]:hover, .img-viewer[_ngcontent-%COMP%]   .img-viewer-panel-body[_ngcontent-%COMP%]   .img-viewer-panel-body-prev[_ngcontent-%COMP%]:hover {\n  color: #cccccc;\n}\n.img-viewer[_ngcontent-%COMP%]   .img-viewer-panel-body-prev[_ngcontent-%COMP%] {\n  left: 12px;\n}\n.img-viewer[_ngcontent-%COMP%]   .img-viewer-panel-body-next[_ngcontent-%COMP%] {\n  right: 12px;\n}\n.img-viewer[_ngcontent-%COMP%]   .img-viewer-panel-body-content[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow: hidden;\n  height: 100%;\n}\n.img-viewer[_ngcontent-%COMP%]   .img-viewer-panel-body-has-footer[_ngcontent-%COMP%] {\n  padding-bottom: 50px;\n}\n.img-viewer[_ngcontent-%COMP%]   .img-viewer-panel-footer[_ngcontent-%COMP%] {\n  height: 50px;\n  border-radius: 0 0 4px 4px;\n  border-top: 1px solid none;\n  overflow: hidden;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  font-size: 16px;\n  text-align: center;\n  line-height: 50px;\n  background-color: #cacaca;\n}\n[_nghost-%COMP%]     .iv-loader {\n  border-top: 1.1em solid rgba(0, 0, 0, 0.7);\n  border-right: 1.1em solid rgba(36, 239, 43, 0.7);\n  border-bottom: 1.1em solid rgba(254, 202, 55, 0.7);\n  border-left: 1.1em solid rgba(254, 207, 219, 0.7);\n}\n[_nghost-%COMP%]     .iv-snap-view {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3dlYkFwcC9zcmMvYXBwL2ltYWdlLXZpZXdlci9pbWFnZS12aWV3ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQVRNO0VBVU4sV0FBQTtFQUNBLGFBQUE7QUFMRjtBQU9FO0VBQ0UsV0FaRztFQWFILFlBYkc7RUFjSCxlQWpCRztFQWtCSCxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFMSjtBQU9JO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBL0JDO0VBZ0NELGVBQUE7RUFDQSxpQkFBQTtBQUxOO0FBT007RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUFMUjtBQVFNO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBTlI7QUFRUTtFQUNFLGFBQUE7QUFOVjtBQVdJO0VBQ0UsWUFBQTtFQUNBLGVBdkRDO0VBd0RELGtCQUFBO0FBVE47QUFXTTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQVRSO0FBV1E7RUFDRSxjQUFBO0FBVFY7QUFhTTtFQUVFLFVBQUE7QUFaUjtBQWVNO0VBRUUsV0FBQTtBQWRSO0FBaUJNO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQWZSO0FBa0JNO0VBQ0Usb0JBQUE7QUFoQlI7QUFvQkk7RUFDRSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBbEJOO0FBdUJBO0VBQ0UsMENBQUE7RUFDQSxnREFBQTtFQUNBLGtEQUFBO0VBQ0EsaURBQUE7QUFwQkY7QUF1QkE7RUFDRSxhQUFBO0FBcEJGIiwiZmlsZSI6InByb2plY3RzL3dlYkFwcC9zcmMvYXBwL2ltYWdlLXZpZXdlci9pbWFnZS12aWV3ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJlZml4OiAnaW1nLXZpZXdlcic7XHJcbiRzaXplOiAxMnB4O1xyXG4kY29sb3I6IHJnYmEoMCwgMCwgMCwgLjY1KTtcclxuJGJvcmRlckNvbG9yOiBub25lO1xyXG4kZnVsbDogMTAwJTtcclxuXHJcbi4jeyRwcmVmaXh9IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBmb250LWZhbWlseTogQ29uc29sYXMsIE1lbmxvLCBDb3VyaWVyLCBtb25vc3BhY2U7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBjb2xvcjogJGNvbG9yO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDUwcHg7XHJcblxyXG4gIC4jeyRwcmVmaXh9LXBhbmVsIHtcclxuICAgIHdpZHRoOiAkZnVsbDtcclxuICAgIGhlaWdodDogJGZ1bGw7XHJcbiAgICBmb250LXNpemU6ICRzaXplO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJGJvcmRlckNvbG9yO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG5cclxuICAgICYtaGVhZGVyIHtcclxuICAgICAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkYm9yZGVyQ29sb3I7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB3aWR0aDogJGZ1bGw7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDMzcHg7XHJcblxyXG4gICAgICAmLXBkZiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDEycHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYtb3BlcmF0aW9uIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDEycHg7XHJcblxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDNweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLWJvZHkge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGZvbnQtc2l6ZTogJHNpemU7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgIC5zd2l0Y2gge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6ICNjY2NjY2M7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmLXByZXYge1xyXG4gICAgICAgIEBleHRlbmQgLnN3aXRjaDtcclxuICAgICAgICBsZWZ0OiAxMnB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLW5leHQge1xyXG4gICAgICAgIEBleHRlbmQgLnN3aXRjaDtcclxuICAgICAgICByaWdodDogMTJweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi1jb250ZW50IHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLWhhcy1mb290ZXIge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi1mb290ZXIge1xyXG4gICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCA0cHggNHB4O1xyXG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgJGJvcmRlckNvbG9yO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NhY2FjYTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuaXYtbG9hZGVyIHtcclxuICBib3JkZXItdG9wOiAxLjFlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxLjFlbSBzb2xpZCByZ2JhKDM2LCAyMzksIDQzLCAwLjcpO1xyXG4gIGJvcmRlci1ib3R0b206IDEuMWVtIHNvbGlkIHJnYmEoMjU0LCAyMDIsIDU1LCAwLjcpO1xyXG4gIGJvcmRlci1sZWZ0OiAxLjFlbSBzb2xpZCByZ2JhKDI1NCwgMjA3LCAyMTksIDAuNyk7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuaXYtc25hcC12aWV3e1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImgViewerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'nz-picture-viewer',
          templateUrl: './image-viewer.component.html',
          styleUrls: ['./image-viewer.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: Document,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }, {
          type: _image_viewer_config__WEBPACK_IMPORTED_MODULE_3__["ImgViewerConfig"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      }, {
        imgViewerClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        images: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showOperate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        zoom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        rotate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        reset: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        fullscreen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        download: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        defaultName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        prevChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        nextChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        closeViewer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/image-viewer/image-viewer.config.ts":
  /*!*****************************************************!*\
    !*** ./src/app/image-viewer/image-viewer.config.ts ***!
    \*****************************************************/

  /*! exports provided: ImgViewerConfig */

  /***/
  function srcAppImageViewerImageViewerConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImgViewerConfig", function () {
      return ImgViewerConfig;
    });

    var ImgViewerConfig = function ImgViewerConfig() {
      _classCallCheck(this, ImgViewerConfig);

      this.ivViewerType = {
        zoomValue: 100,
        maxZoom: 500,
        snapView: false,
        refreshOnResize: true,
        zoomOnMouseWheel: true
      };
      this.imageViewerType = {
        zoomInToolTip: 'Zoom in',
        zoomOutToolTip: 'Zoom put',
        rotateLeftToolTip: 'Rotate left',
        rotateRightToolTip: 'Rotate right',
        resetToolTip: 'Reset tools',
        fullScreenToolTip: 'Full screen',
        downloadToolTip: 'Download'
      };
    };
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_kervi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-kervi */
    "../../dist/ngx-kervi/fesm2015/ngx-kervi.js");
    /* harmony import */


    var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng-zorro-antd/layout */
    "../../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-layout.js");
    /* harmony import */


    var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng-zorro-antd/grid */
    "../../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-grid.js");
    /* harmony import */


    var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng-zorro-antd/form */
    "../../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-form.js");
    /* harmony import */


    var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng-zorro-antd/input */
    "../../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ng-zorro-antd/button */
    "../../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
    /* harmony import */


    var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ng-zorro-antd/core/wave */
    "../../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");
    /* harmony import */


    var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ng-zorro-antd/core/transition-patch */
    "../../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
    /* harmony import */


    var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ng-zorro-antd/icon */
    "../../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");

    function LoginComponent_nz_form_explain_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-form-explain");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please input your username!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_nz_form_explain_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-form-explain");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please input your Password!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_nz_form_explain_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-form-explain");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Invalid user name or password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_ng_template_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 11);
      }
    }

    function LoginComponent_ng_template_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 12);
      }
    }

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(fb, kerviService) {
        _classCallCheck(this, LoginComponent);

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

      _createClass(LoginComponent, [{
        key: "submitForm",
        value: function submitForm() {
          var self = this;

          if (this.loginForm.valid) {
            console.log("fv");
            this.kerviService.authenticate(this.userName.value, this.password.value).then(function () {
              console.log("login ok");
            })["catch"](function () {
              console.log("login error");
              self.invalidCredentials = true;
            });
          } else {
            console.log("fve"); //   // for (const i in this.loginForm.controls) {
            //   //   this.loginForm.controls[i].markAsDirty();
            //   //   this.loginForm.controls[i].updateValueAndValidity();
            //   // }
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_kervi__WEBPACK_IMPORTED_MODULE_2__["NGXKerviService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 24,
      vars: 7,
      consts: [[1, "kervi-app-initializing"], ["nz-row", ""], ["nz-col", "", "nzSpan", "12", "nzOffset", "6"], ["nz-form", "", 3, "formGroup", "ngSubmit"], [3, "nzPrefix"], ["formControlName", "userName", "nz-input", "", "placeholder", "Username"], [4, "ngIf"], ["formControlName", "password", "nz-input", "", "type", "password", "placeholder", "Password"], ["nz-button", "", "nzType", "primary", 3, "disabled"], ["prefixUser", ""], ["prefixLock", ""], ["nz-icon", "", "type", "user"], ["nz-icon", "", "type", "lock"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-layout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-content", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_4_listener() {
            return ctx.submitForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-form-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-form-control");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nz-input-group", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LoginComponent_nz_form_explain_9_Template, 2, 0, "nz-form-explain", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nz-form-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nz-form-control");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nz-input-group", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LoginComponent_nz_form_explain_14_Template, 2, 0, "nz-form-explain", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nz-form-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nz-form-control");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Log in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, LoginComponent_nz_form_explain_19_Template, 2, 0, "nz-form-explain", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, LoginComponent_ng_template_20_Template, 1, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, LoginComponent_ng_template_22_Template, 1, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

          var tmp_2_0 = null;
          var currVal_2 = ((tmp_2_0 = ctx.loginForm.get("userName")) == null ? null : tmp_2_0.dirty) && ((tmp_2_0 = ctx.loginForm.get("userName")) == null ? null : tmp_2_0.errors);
          var tmp_4_0 = null;
          var currVal_4 = ((tmp_4_0 = ctx.loginForm.get("password")) == null ? null : tmp_4_0.dirty) && ((tmp_4_0 = ctx.loginForm.get("password")) == null ? null : tmp_4_0.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPrefix", _r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPrefix", _r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", currVal_4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.loginForm.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalidCredentials);
        }
      },
      directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_3__["NzLayoutComponent"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_3__["NzContentComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__["NzColDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__["NzFormItemComponent"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__["NzFormControlComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__["NzInputGroupComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__["NzInputGroupWhitSuffixOrPrefixDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__["NzIconDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy93ZWJBcHAvc3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: ngx_kervi__WEBPACK_IMPORTED_MODULE_2__["NGXKerviService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/media/media.component.ts":
  /*!******************************************!*\
    !*** ./src/app/media/media.component.ts ***!
    \******************************************/

  /*! exports provided: MediaComponent */

  /***/
  function srcAppMediaMediaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MediaComponent", function () {
      return MediaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_kervi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-kervi */
    "../../dist/ngx-kervi/fesm2015/ngx-kervi.js");
    /* harmony import */


    var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng-zorro-antd */
    "../../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd.js");
    /* harmony import */


    var _image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../image-viewer/image-viewer.component */
    "./src/app/image-viewer/image-viewer.component.ts");
    /* harmony import */


    var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng-zorro-antd/grid */
    "../../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-grid.js");
    /* harmony import */


    var ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng-zorro-antd/tree */
    "../../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-tree.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-zorro-antd/empty */
    "../../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-empty.js"); // Copyright (c) 2019, Tim Wentzlau
    // Licensed under MIT


    var _c0 = ["nzTreeComponent"];
    var _c1 = ["imageViewer"];

    function MediaComponent_nz_empty_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-empty", 8);
      }
    }

    function MediaComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function MediaComponent_div_8_Template_div_dblclick_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var file_r3 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.showImage(file_r3.key);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var file_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("src", "data:image/png;base64," + file_r3.thumb, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var MediaComponent = /*#__PURE__*/function (_ngx_kervi__WEBPACK_I16) {
      _inherits(MediaComponent, _ngx_kervi__WEBPACK_I16);

      var _super33 = _createSuper(MediaComponent);

      function MediaComponent() {
        var _this35;

        _classCallCheck(this, MediaComponent);

        _this35 = _super33.call(this);
        _this35.files = [];
        _this35.showImageViewer = false;
        _this35.directoryFiles = {};
        _this35.nodes = [{
          title: 'root',
          key: '/'
        }];
        _this35.defaultExpandedKeys = [];
        return _this35;
      }

      _createClass(MediaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "nzEvent",
        value: function nzEvent(event) {
          var _this36 = this;

          console.log('trev', event);
          var node = event.node;

          if (event.eventName === 'click') {
            this.files = [];
            this.kerviService.GetDirectory(node.key).then(function (d) {
              var files = d.files$.getValue();

              var _iterator44 = _createForOfIteratorHelper(files),
                  _step44;

              try {
                var _loop = function _loop() {
                  var file = _step44.value;

                  if (file.isFile) {
                    _this36.kerviService.GetThumbnail(file.path).then(function (t) {
                      _this36.files.push({
                        title: file.name,
                        key: file.path,
                        thumb: t
                      });
                    });
                  }
                };

                for (_iterator44.s(); !(_step44 = _iterator44.n()).done;) {
                  _loop();
                }
              } catch (err) {
                _iterator44.e(err);
              } finally {
                _iterator44.f();
              }
            });
          }

          if (event.eventName === 'expand') {
            if (node && node.getChildren().length === 0 && node.isExpanded) {
              this.kerviService.GetDirectory(node.key).then(function (d) {
                var files = d.files$.getValue();
                var dirs = [];

                var _iterator45 = _createForOfIteratorHelper(files),
                    _step45;

                try {
                  for (_iterator45.s(); !(_step45 = _iterator45.n()).done;) {
                    var file = _step45.value;

                    if (!file.isFile) {
                      dirs.push({
                        title: file.name,
                        key: file.path,
                        isLeaf: false
                      });
                    }
                  }
                } catch (err) {
                  _iterator45.e(err);
                } finally {
                  _iterator45.f();
                }

                node.addChildren(dirs);
              });
            }
          }
        }
      }, {
        key: "showImage",
        value: function showImage(filePath) {
          var _this37 = this;

          this.showImageViewer = true;
          this.imageViewer.imgTotal = this.files.length;
          this.kerviService.GetFile(filePath).then(function (f) {
            _this37.imageViewer.images = ['data:image/png;base64,' + f];

            _this37.imageViewer.showImg();
          });
        }
      }, {
        key: "nextImage",
        value: function nextImage(event) {
          var _this38 = this;

          console.log("ni", event);
          var filePath = this.files[this.imageViewer.currentImgIndex - 1].key;
          this.kerviService.GetFile(filePath).then(function (f) {
            _this38.imageViewer.images = ['data:image/png;base64,' + f];

            _this38.imageViewer.showImg();
          });
        }
      }, {
        key: "closeViewer",
        value: function closeViewer() {
          this.showImageViewer = false;
        }
      }]);

      return MediaComponent;
    }(ngx_kervi__WEBPACK_IMPORTED_MODULE_1__["KerviDirectoryComponent"]);

    MediaComponent.ɵfac = function MediaComponent_Factory(t) {
      return new (t || MediaComponent)();
    };

    MediaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MediaComponent,
      selectors: [["app-media"]],
      viewQuery: function MediaComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzTreeComponent = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.imageViewer = _t.first);
        }
      },
      inputs: {
        files: "files",
        nodes: "nodes"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 9,
      vars: 6,
      consts: [[3, "hidden"], [3, "closeViewer", "prevChange", "nextChange"], ["imageViewer", ""], ["nz-col", "", "nzSpan", "8", 2, "max-height", "80%", "overflow-y", "auto"], ["nzAsyncData", "", 3, "nzData", "nzExpandedKeys", "nzClick", "nzExpandChange"], ["nz-col", "", "nzSpan", "16", 2, "min-height", "40px", "max-height", "300px", "overflow-y", "auto", "border-left", "1px solid black"], ["nzNotFoundContent", "No files in folder", 4, "ngIf"], ["style", "display: inline-block;margin-left:5px; margin-bottom:5px;", "nzHoverable", "", 3, "dblclick", 4, "ngFor", "ngForOf"], ["nzNotFoundContent", "No files in folder"], ["nzHoverable", "", 2, "display", "inline-block", "margin-left", "5px", "margin-bottom", "5px", 3, "dblclick"], ["alt", "example"]],
      template: function MediaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-picture-viewer", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closeViewer", function MediaComponent_Template_nz_picture_viewer_closeViewer_1_listener() {
            return ctx.closeViewer();
          })("prevChange", function MediaComponent_Template_nz_picture_viewer_prevChange_1_listener($event) {
            return ctx.nextImage($event);
          })("nextChange", function MediaComponent_Template_nz_picture_viewer_nextChange_1_listener($event) {
            return ctx.nextImage($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-tree", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzClick", function MediaComponent_Template_nz_tree_nzClick_5_listener($event) {
            return ctx.nzEvent($event);
          })("nzExpandChange", function MediaComponent_Template_nz_tree_nzExpandChange_5_listener($event) {
            return ctx.nzEvent($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MediaComponent_nz_empty_7_Template, 1, 0, "nz-empty", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MediaComponent_div_8_Template, 2, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.showImageViewer);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.showImageViewer);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.nodes)("nzExpandedKeys", ctx.defaultExpandedKeys);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.files.length == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.files);
        }
      },
      directives: [_image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_3__["ImgViewerComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__["NzColDirective"], ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_5__["NzTreeComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_7__["NzEmptyComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy93ZWJBcHAvc3JjL2FwcC9tZWRpYS9tZWRpYS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MediaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-media',
          templateUrl: './media.component.html',
          styleUrls: ['./media.component.css']
        }]
      }], function () {
        return [];
      }, {
        nzTreeComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['nzTreeComponent']
        }],
        imageViewer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['imageViewer', {
            "static": true
          }]
        }],
        files: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nodes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\dev\kervi\kervi\kervi-ui\kervi\ui\web\projects\webApp\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map