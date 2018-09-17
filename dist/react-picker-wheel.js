(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('react-dom')) :
	typeof define === 'function' && define.amd ? define(['react', 'react-dom'], factory) :
	(global.reactPickerWheel = factory(global.React,global.ReactDOM));
}(this, (function (React,ReactDOM) { 'use strict';

function __$styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var React__default = 'default' in React ? React['default'] : React;
ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;

__$styleInject(".picker-wheel-modal {\n    position: fixed;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, .6);\n    z-index: 999;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n\n.picker-wheel {\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    z-index: 1;\n    font-size: 16px;\n    text-align: center;\n    font-family: arial,verdana,sans-serif;\n    -webkit-box-sizing: content-box;\n            box-sizing: content-box;\n    -webkit-font-smoothing: antialiased;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n\n.picker-wheel .picker-wheel-header {\n        padding: 0 .5em;\n        min-height: 2em;\n        line-height: 2em;\n        font-size: 1.125em;\n    }\n\n.picker-wheel .picker-wheel-navbar {\n        padding: 0 .5em .5em .5em;\n        overflow: hidden;\n    }\n\n.picker-wheel .picker-wheel-navbar-btn {\n        height: 2.5em;\n        line-height: 2.5em;\n        float: right;\n        padding: 0 1em;\n        cursor: pointer;\n    }\n\n.picker-wheel .picker-wheel-content {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        padding: .5em .25em;\n    }\n\n.picker-wheel .picker-wheel-col-1 {\n        -webkit-box-flex: 1;\n            -ms-flex: 1;\n                flex: 1;\n        margin: 0 .25em;\n    }\n\n.picker-wheel .picker-wheel-viewport {\n        height: 200px;\n        position: relative;\n        overflow: hidden\n    }\n\n.picker-wheel .picker-wheel-viewport::after {\n    content: '';\n    position: absolute;\n    z-index: 2;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    pointer-events: none;\n}\n\n.picker-wheel .picker-wheel-wheel {\n        position: absolute;\n        height: 40px;\n        top: 50%;\n        margin-top: -20px;\n        width: 100%;\n    }\n\n.picker-wheel .picker-wheel-scroll {\n        list-style-type: none;\n        padding: 0;\n        -webkit-margin-before: 0;\n        -webkit-margin-after: 0\n    }\n\n.picker-wheel .picker-wheel-scroll>li {\n    height: 40px;\n    line-height: 40px;\n    font-size: 1.375em;\n    cursor: pointer;\n}\n\n.picker-wheel {\n\n    /* default */\n}\n\n.picker-wheel.default {\n    background-color: #f7f7f7;\n}\n\n.picker-wheel.default .picker-wheel-header {\n            color: #4eccc4;\n}\n\n.picker-wheel.default .picker-wheel-wheel {\n            border-top: 1px solid #4eccc4;\n            border-bottom: 1px solid #4eccc4;\n}\n\n.picker-wheel.default .picker-wheel-scroll li {\n                color: rgb(59, 59, 59);\n            }\n\n.picker-wheel.default .picker-wheel-scroll li.disabled {\n                color: rgb(191, 191, 191);\n            }\n\n.picker-wheel.default .picker-wheel-navbar-btn {\n            color: #4eccc4;\n}\n\n.picker-wheel {\n\n    /* dark */\n}\n\n.picker-wheel.dark {\n    background-color: #263238;\n}\n\n.picker-wheel.dark .picker-wheel-header {\n            color: #50ccc4;\n}\n\n.picker-wheel.dark .picker-wheel-wheel {\n            border-top: 1px solid #50ccc4;\n            border-bottom: 1px solid #50ccc4;\n}\n\n.picker-wheel.dark .picker-wheel-scroll li {\n                color: rgb(201, 203, 204);\n            }\n\n.picker-wheel.dark .picker-wheel-scroll li.disabled {\n                color: rgb(87, 96, 100);\n            }\n\n.picker-wheel.dark .picker-wheel-navbar-btn {\n            color: #50ccc4;\n}\n\n.picker-wheel {\n\n    /* ios */\n}\n\n.picker-wheel.ios {\n    background-color: #f7f7f7;\n}\n\n.picker-wheel.ios .picker-wheel-col-1 {margin: 0;\n}\n\n.picker-wheel.ios .picker-wheel-header {\n            color: rgb(59, 59, 59);\n            padding: 0 3.5em;\n}\n\n.picker-wheel.ios .picker-wheel-viewport::after {\n    background: -webkit-gradient(linear,left top, left bottom,from(#f7f7f7),color-stop(52%, rgba(245, 245, 245, 0)),color-stop(48%, rgba(245, 245, 245, 0)),to(#f7f7f7));\n    background: linear-gradient(#f7f7f7,rgba(245, 245, 245, 0)52%,rgba(245, 245, 245, 0)48%,#f7f7f7);\n}\n\n.picker-wheel.ios .picker-wheel-wheel {\n            border-top: 1px solid #dbdbdb;\n            border-bottom: 1px solid #dbdbdb;\n}\n\n.picker-wheel.ios .picker-wheel-scroll li {\n                color: rgb(59, 59, 59);\n            }\n\n.picker-wheel.ios .picker-wheel-scroll li.disabled {\n                color: rgb(191, 191, 191);\n            }\n\n.picker-wheel.ios .picker-wheel-navbar {\n            position: absolute;\n            z-index: 2;\n            top: 0;\n            left: 0;\n            width: 100%;\n            padding: 0;\n            border-bottom: 1px solid #acacac;\n}\n\n.picker-wheel.ios .picker-wheel-navbar-btn {\n            color: #007aff;\n}\n\n.picker-wheel.ios .picker-wheel-navbar-btn:nth-child(2) {\n    float: left;\n}\n\n.picker-wheel.ios .picker-wheel-content {\n            padding-top: 48px;\n}\n\n.picker-wheel.ios .picker-wheel-header + .picker-wheel-content {\n          padding-top: 0;\n}\n\n.picker-wheel {\n\n    /* assurance */\n}\n\n.picker-wheel.assurance {\n    position: relative;\n}\n\n.picker-wheel.assurance .picker-wheel-col-1 {\n            margin: 0;\n}\n\n.picker-wheel.assurance .picker-wheel-header {\n            color: rgb(59, 59, 59);\n            padding: 0 3.5em;\n}\n\n.picker-wheel.assurance .picker-wheel-viewport::after {\n    background: -webkit-gradient(linear,left top, left bottom,from(#fff),color-stop(52%, rgba(245, 245, 245, 0)),color-stop(48%, rgba(245, 245, 245, 0)),to(#fff));\n    background: linear-gradient(#fff,rgba(245, 245, 245, 0)52%,rgba(245, 245, 245, 0)48%,#fff);\n}\n\n.picker-wheel.assurance .picker-wheel-wheel {\n            border-top: 1px solid #dbdbdb;\n            border-bottom: 1px solid #dbdbdb;\n}\n\n.picker-wheel.assurance .picker-wheel-scroll li {\n                color: rgb(59, 59, 59);\n            }\n\n.picker-wheel.assurance .picker-wheel-scroll li.disabled {\n                color: rgb(191, 191, 191);\n            }\n\n.picker-wheel.assurance .picker-wheel-navbar {\n            display: none;\n}\n\n.picker-wheel.assurance .picker-wheel-navbar-btn {\n            color: #007aff;\n}\n\n.picker-wheel.assurance .picker-wheel-navbar-btn:nth-child(2) {\n    float: left;\n}\n\n.picker-wheel.assurance .picker-wheel-content {\n            padding: 0;\n}\n\n.picker-wheel.assurance .picker-wheel-header + .picker-wheel-content {\n          padding-top: 0;\n}\n\n.picker-wheel {\n\n    /* android */\n}\n\n.picker-wheel.android, .picker-wheel.android-dark {\n    background-color: #f5f5f5;\n}\n\n.picker-wheel.android .picker-wheel-header, .picker-wheel.android-dark .picker-wheel-header {\n            color: #31b6e7;\n            border-bottom: 2px solid #31b6e7;\n}\n\n.picker-wheel.android .picker-wheel-col-1, .picker-wheel.android-dark .picker-wheel-col-1 {margin: 0 .625em;\n}\n\n.picker-wheel.android .picker-wheel-viewport::after, .picker-wheel.android-dark .picker-wheel-viewport::after {\n    background-image: -webkit-gradient(linear,left top, left bottom,from(#f5f5f5),color-stop(52%, rgba(245, 245, 245, 0)),color-stop(48%, rgba(245, 245, 245, 0)),to(#f5f5f5));\n    background-image: linear-gradient(#f5f5f5,rgba(245, 245, 245, 0)52%,rgba(245, 245, 245, 0)48%,#f5f5f5);\n}\n\n.picker-wheel.android .picker-wheel-wheel, .picker-wheel.android-dark .picker-wheel-wheel {\n            border-top: 2px solid #31b6e7;\n            border-bottom: 2px solid #31b6e7;\n}\n\n.picker-wheel.android .picker-wheel-scroll li, .picker-wheel.android-dark .picker-wheel-scroll li {\n                font-size: 1.125em;\n                color: rgb(56, 56, 56);\n            }\n\n.picker-wheel.android .picker-wheel-scroll li.disabled, .picker-wheel.android-dark .picker-wheel-scroll li.disabled {\n                color: rgb(188, 188, 188);\n            }\n\n.picker-wheel.android .picker-wheel-navbar, .picker-wheel.android-dark .picker-wheel-navbar {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            border-top: 1px solid #d9d4d4;\n            padding: 0;\n}\n\n.picker-wheel.android .picker-wheel-navbar-btn, .picker-wheel.android-dark .picker-wheel-navbar-btn {\n            padding: 0;\n            color: #000;\n            -webkit-box-flex: 1;\n                -ms-flex: 1;\n                    flex: 1;\n}\n\n.picker-wheel.android .picker-wheel-navbar-btn:nth-child(2), .picker-wheel.android-dark .picker-wheel-navbar-btn:nth-child(2) {\n    border-left: 1px solid #d9d4d4;\n}\n\n.picker-wheel {\n\n    /* android-dark */\n}\n\n.picker-wheel.android-dark {\n    background-color: #292829;\n}\n\n.picker-wheel.android-dark .picker-wheel-viewport::after {\n    background-image: -webkit-gradient(linear,left top, left bottom,from(#282828),color-stop(52%, rgba(40, 40, 40, 0)),color-stop(48%, rgba(40, 40, 40, 0)),to(#282828));\n    background-image: linear-gradient(#282828,rgba(40, 40, 40, 0)52%,rgba(40, 40, 40, 0)48%,#282828);\n}\n\n.picker-wheel.android-dark .picker-wheel-scroll li {\n                color: rgb(199, 199, 199);\n            }\n\n.picker-wheel.android-dark .picker-wheel-scroll li.disabled {\n                color: rgb(88, 88, 88);\n            }\n\n.picker-wheel.android-dark .picker-wheel-navbar { border-color: #424542;\n}\n\n.picker-wheel.android-dark .picker-wheel-navbar-btn {\n            color: #fff;\n}\n\n.picker-wheel.android-dark .picker-wheel-navbar-btn:nth-child(2) {\n    border-color: #424542;\n}\n", {});

function shallowEqual(prev, next) {
    if (prev === next) return true;
    var prevKeys = Object.keys(prev);
    var nextKeys = Object.keys(next);

    if (prevKeys.length !== nextKeys.length) return false;

    return prevKeys.every(function (key) {
        return prev.hasOwnProperty(key) && prev[key] === next[key];
    });
}

function PureRender(Component$$1) {
    Component$$1.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return PureRender.shouldComponentUpdate(nextProps, nextState, this.props, this.state);
    };
}

PureRender.shouldComponentUpdate = function (nextProps, nextState, preProps, preState) {
    return !shallowEqual(preProps, nextProps) || !shallowEqual(preState, nextState);
};

/**
 * 驼峰写法
 * @param  {String} str 要转化的字符串
 * @return {String}     转化后的字符串
 */
function camelCase(str) {
    return str.replace(/-([a-z])/g, function ($0, $1) {
        return $1.toUpperCase();
    }).replace('-', '');
}

/**
 * 格式化css属性对象
 * @param  {Object} props 属性对象
 * @return {Object}       添加前缀的格式化属性对象
 */
function formatCss(props) {
    var prefixs = ['-webkit-', '-moz-', '-ms-'];

    var result = {};

    var regPrefix = /transform|transition/;

    for (var key in props) {
        if (props.hasOwnProperty(key)) {
            var styleValue = props[key];

            // 如果检测是transform或transition属性
            if (regPrefix.test(key)) {
                for (var i = 0; i < prefixs.length; i++) {
                    var styleName = camelCase(prefixs[i] + key);
                    result[styleName] = styleValue.replace(regPrefix, prefixs[i] + '$&');
                }
            }

            result[key] = styleValue;
        }
    }

    return result;
}

/**
 * 为元素添加css样式
 * @param {Object} element 目标元素
 * @param {Object} props   css属性对象
 */
function addPrefixCss(element, props) {
    var formatedProps = formatCss(props);
    for (var key in formatedProps) {
        if (formatedProps.hasOwnProperty(key)) {
            element.style[key] = formatedProps[key];
        }
    }
}

var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};



















var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

/**
 * @module Date组件
 */
var isUndefined = function isUndefined(val) {
    return typeof val === 'undefined';
};
/**
 * Class Date组件类
 * @extends Component
 */
var PickerWheelColumn = function (_Component) {
    inherits(PickerWheelColumn, _Component);

    function PickerWheelColumn(props) {
        classCallCheck(this, PickerWheelColumn);

        var _this = possibleConstructorReturn(this, (PickerWheelColumn.__proto__ || Object.getPrototypeOf(PickerWheelColumn)).call(this, props));

        _this.animating = false; // 判断是否在transition过渡动画之中
        _this.touchY = 0; // 保存touchstart的pageY
        _this.translateY = 0; // 容器偏移的距离
        _this.lastEventTime = Date.now();
        _this.lastTouchY = 0;
        _this.velocity = 0;
        _this.moveItemCount = 0; // 一次滑动移动了多少个时间
        _this.itemHeight = props.itemHeight;

        _this.middleIndex = Math.floor(props.items.length / 2);
        _this.middleY = -_this.itemHeight * _this.middleIndex;
        _this.currentIndex = _this.middleIndex; // 滑动中当前日期的索引

        _this.state = {
            translateY: _this.middleY,
            marginTop: (_this.currentIndex - _this.middleIndex) * _this.itemHeight + _this.itemHeight / 2,
            items: props.items
        };

        _this.renderPickerWheelItem = _this.renderPickerWheelItem.bind(_this);
        _this.handleContentTouch = _this.handleContentTouch.bind(_this);
        _this.handleContentMouseDown = _this.handleContentMouseDown.bind(_this);
        _this.handleContentMouseMove = _this.handleContentMouseMove.bind(_this);
        _this.handleContentMouseUp = _this.handleContentMouseUp.bind(_this);
        return _this;
    }

    createClass(PickerWheelColumn, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var viewport = this.viewport;
            viewport.addEventListener('touchstart', this.handleContentTouch, false);
            viewport.addEventListener('touchmove', this.handleContentTouch, false);
            viewport.addEventListener('touchend', this.handleContentTouch, false);
            viewport.addEventListener('mousedown', this.handleContentMouseDown, false);
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            this._iniItems(this.props.value);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this._iniItems(nextProps.value);
            if (nextProps.value === this.props.value) {
                return;
            }
            this.currentIndex = this.middleIndex;
            this.setState({
                translateY: this.middleY,
                marginTop: (this.currentIndex - this.middleIndex) * this.itemHeight + this.itemHeight / 2
            });
        }

        /**
         * Optimization component, Prevents unnecessary rendering
         * Only value or state change should re-rendering
         *
         * @param  {Object} nextProps next props
         * @param  {Object} nextState next state
         * @return {Boolean}          Whether re-rendering
         */

    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return nextProps.value !== this.props.value || !shallowEqual(nextState, this.state);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            var viewport = this.viewport;
            viewport.removeEventListener('touchstart', this.handleContentTouch, false);
            viewport.removeEventListener('touchmove', this.handleContentTouch, false);
            viewport.removeEventListener('touchend', this.handleContentTouch, false);
            viewport.removeEventListener('mousedown', this.handleContentMouseDown, false);
        }
    }, {
        key: '_iniItems',
        value: function _iniItems(value) {
            var items = this.state.items;
            for (var i = 0; i < items.length; i++) {
                if (items[this.middleIndex].value === value) {
                    this.setState({ items: items });
                    return true;
                } else {
                    var shiftedItem = items[0];
                    items = [].concat(toConsumableArray(items.slice(1)), [shiftedItem]);
                }
            }
        }
    }, {
        key: '_updateItemsAndMargin',
        value: function _updateItemsAndMargin(difference) {
            console.log(difference);
            var items = this.state.items;

            if (difference > 0) {
                var shiftedItems = items.slice(0, difference);
                this.currentIndex += difference;
                this.setState({
                    items: items.slice(difference).concat(shiftedItems),
                    marginTop: (this.currentIndex - this.middleIndex) * this.itemHeight + this.itemHeight / 2
                });
            } else if (difference < 0) {
                var _shiftedItems = items.slice(items.length + difference, items.length);
                this.currentIndex += difference;
                this.setState({
                    items: _shiftedItems.concat(items.slice(0, items.length + difference)),
                    marginTop: (this.currentIndex - this.middleIndex) * this.itemHeight + this.itemHeight / 2
                });
            }
        }
    }, {
        key: '_checkIsUpdateItems',
        value: function _checkIsUpdateItems(direction, translateY) {
            return direction === 1 ? this.currentIndex * this.itemHeight + this.itemHeight / 2 < -translateY : this.currentIndex * this.itemHeight - this.itemHeight / 2 > -translateY;
        }

        /**
         * 清除对象的transition样式
         * @param  {Dom}     obj     指定的对象
         * @return {undefined}
         */

    }, {
        key: '_clearTransition',
        value: function _clearTransition(obj) {
            addPrefixCss(obj, { transition: '' });
        }

        /**
         * 滑动到下一日期
         * @param  {number} direction 滑动方向
         * @return {undefined}
         */

    }, {
        key: '_moveToNext',
        value: function _moveToNext(direction) {
            var value = this.state.items[this.middleIndex].value;
            var _props = this.props,
                max = _props.max,
                min = _props.min;

            if (direction === -1 && value < min && this.moveItemCount) {
                this._updateItemsAndMargin(1);
            } else if (direction === 1 && value > max && this.moveItemCount) {
                this._updateItemsAndMargin(-1);
            }

            this._moveTo(this.refs.scroll, this.currentIndex, direction);
        }

        /**
         * 添加滑动动画
         * @param  {DOM} obj   DOM对象
         * @param  {number} angle 角度
         * @return {undefined}
         */

    }, {
        key: '_moveTo',
        value: function _moveTo(obj, currentIndex, direction) {
            var _this2 = this;

            this.animating = true;

            var fixedAnimationTime = 400;
            var accelerationRate = -(this.velocity / fixedAnimationTime); // units per ms for decelleration

            var unitsToTravel = 0;
            for (var i = 0; i < 200; i++) {
                unitsToTravel += this.velocity;
                this.velocity += accelerationRate;
            }

            var maxAdditionalIndexesToTravel = 5;
            var additionalIndexesToTravel = Math.min(Math.floor(unitsToTravel / this.itemHeight), maxAdditionalIndexesToTravel);
            var virtualCurrentIndex = additionalIndexesToTravel * direction + currentIndex;

            console.log({
                direction: direction,
                velocity: this.velocity,
                accelerationRate: accelerationRate,
                unitsToTravel: unitsToTravel,
                additionalIndexesToTravel: additionalIndexesToTravel,
                virtualCurrentIndex: virtualCurrentIndex
            });

            addPrefixCss(obj, { transition: 'transform ' + fixedAnimationTime + 'ms ease-out' });

            this.setState({
                translateY: -virtualCurrentIndex * this.itemHeight
            });

            // NOTE: There is no transitionend, setTimeout is used instead.
            setTimeout(function () {
                _this2._updateItemsAndMargin(additionalIndexesToTravel * direction);
                _this2.animating = false;
                _this2.props.onSelect(_this2.state.items[_this2.middleIndex].value);
                _this2._clearTransition(_this2.refs.scroll);
            }, fixedAnimationTime);
        }
    }, {
        key: 'handleStart',
        value: function handleStart(event) {
            console.log('START');
            this.touchY = !isUndefined(event.targetTouches) && !isUndefined(event.targetTouches[0]) ? event.targetTouches[0].pageY : event.pageY;

            this.translateY = this.state.translateY;
            this.moveItemCount = 0;
        }
    }, {
        key: 'handleMove',
        value: function handleMove(event) {
            console.log('MOVE');
            var touchY = !isUndefined(event.targetTouches) && !isUndefined(event.targetTouches[0]) ? event.targetTouches[0].pageY : event.pageY;

            var dir = touchY - this.touchY;
            var translateY = this.translateY + dir;
            var direction = dir > 0 ? -1 : 1;

            var diff = this.lastTouchY - touchY;
            var now = Date.now();
            var timeDiff = now - this.lastEventTime;
            this.velocity = diff / timeDiff;

            console.log({
                direction: direction,
                lastEventTime: this.lastEventTime,
                now: now,
                timeDiff: timeDiff,
                lastTouchY: this.lastTouchY,
                touchY: touchY,
                diff: diff,
                velocity: this.velocity
            });

            this.lastEventTime = Date.now();
            this.lastTouchY = touchY;

            // 日期最小值，最大值限制
            var value = this.state.items[this.middleIndex].value;
            var _props2 = this.props,
                max = _props2.max,
                min = _props2.min;

            if (value < min || value > max) {
                return;
            }

            // 检测是否更新日期列表
            if (this._checkIsUpdateItems(direction, translateY)) {
                this.moveItemCount = direction > 0 ? this.moveItemCount + 1 : this.moveItemCount - 1;
                this._updateItemsAndMargin(direction);
            }

            this.setState({ translateY: translateY });
        }
    }, {
        key: 'handleEnd',
        value: function handleEnd(event) {
            console.log('END');
            var touchY = event.pageY || event.changedTouches[0].pageY;
            var dir = touchY - this.touchY;
            var direction = dir > 0 ? -1 : 1;
            this._moveToNext(direction);
        }

        /**
         * 滑动日期选择器触屏事件
         * @param  {Object} event 事件对象
         * @return {undefined}
         */

    }, {
        key: 'handleContentTouch',
        value: function handleContentTouch(event) {
            event.preventDefault();
            if (this.animating) return;
            if (event.type === 'touchstart') {
                this.handleStart(event);
            } else if (event.type === 'touchmove') {
                this.handleMove(event);
            } else if (event.type === 'touchend') {
                this.handleEnd(event);
            }
        }

        /**
         * 滑动日期选择器鼠标事件
         * @param  {Object} event 事件对象
         * @return {undefined}
         */

    }, {
        key: 'handleContentMouseDown',
        value: function handleContentMouseDown(event) {
            if (this.animating) return;
            this.handleStart(event);
            document.addEventListener('mousemove', this.handleContentMouseMove);
            document.addEventListener('mouseup', this.handleContentMouseUp);
        }
    }, {
        key: 'handleContentMouseMove',
        value: function handleContentMouseMove(event) {
            if (this.animating) return;
            this.handleMove(event);
        }
    }, {
        key: 'handleContentMouseUp',
        value: function handleContentMouseUp(event) {
            if (this.animating) return;
            this.handleEnd(event);
            document.removeEventListener('mousemove', this.handleContentMouseMove);
            document.removeEventListener('mouseup', this.handleContentMouseUp);
        }

        /**
         * 渲染一个日期DOM对象
         * @param  {Object} date date数据
         * @return {Object}      JSX对象
         */

    }, {
        key: 'renderPickerWheelItem',
        value: function renderPickerWheelItem(item, index) {
            var className = item.value < this.props.min || item.value > this.props.max ? 'disabled' : '';

            return React__default.createElement(
                'li',
                {
                    key: index,
                    className: className,
                    style: {
                        height: this.itemHeight,
                        lineHeight: this.itemHeight
                    }
                },
                item.text
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var scrollStyle = formatCss({
                transform: 'translateY(' + this.state.translateY + 'px)',
                marginTop: this.state.marginTop
            });

            return React__default.createElement(
                'div',
                { className: 'picker-wheel-col-1' },
                React__default.createElement(
                    'div',
                    {
                        ref: function ref(viewport) {
                            return _this3.viewport = viewport;
                        } // eslint-disable-line
                        , className: 'picker-wheel-viewport',
                        style: { height: this.itemHeight * 5 }
                    },
                    React__default.createElement(
                        'div',
                        {
                            className: 'picker-wheel-wheel',
                            style: {
                                height: this.itemHeight,
                                marginTop: -(this.itemHeight / 2)
                            }
                        },
                        React__default.createElement(
                            'ul',
                            {
                                ref: 'scroll',
                                className: 'picker-wheel-scroll',
                                style: scrollStyle },
                            this.state.items.map(this.renderPickerWheelItem)
                        )
                    )
                )
            );
        }
    }]);
    return PickerWheelColumn;
}(React.Component);

/**
 * @module PickerWheel Component
 */

/**
 * Class PickerWheel Component Class
 * @extends Component
 */
var PickerWheel = function (_Component) {
    inherits(PickerWheel, _Component);

    function PickerWheel(props) {
        classCallCheck(this, PickerWheel);

        var _this = possibleConstructorReturn(this, (PickerWheel.__proto__ || Object.getPrototypeOf(PickerWheel)).call(this, props));

        _this.state = {
            value: _this.props.value
        };

        _this.handleFinishBtnClick = _this.handleFinishBtnClick.bind(_this);
        _this.handleItemSelect = _this.handleItemSelect.bind(_this);
        return _this;
    }

    createClass(PickerWheel, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            // update value of state
            if (nextProps.value !== this.state.value) {
                this.setState({ value: nextProps.value });
            }
        }

        /**
         * When you swipe two datepickeritems at the same time.
         * Prevent dates from going out.
         */

    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            var value = this.state.value;
            var _props = this.props,
                min = _props.min,
                max = _props.max;

            if (value > max) {
                this.setState({ value: max });
            }

            if (value < min) {
                this.setState({ value: min });
            }
        }

        /**
         * Optimization component, Prevents unnecessary rendering
         * Only props or state change or value before re-rendering
         *
         * @param  {Object} nextProps next props
         * @param  {Object} nextState next state
         * @return {Boolean}          Whether re-rendering
         */

    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return nextProps.value !== this.state.value || PureRender.shouldComponentUpdate(nextProps, nextState, this.props, this.state);
        }

        /**
         * 点击完成按钮事件
         * @return {undefined}
         */

    }, {
        key: 'handleFinishBtnClick',
        value: function handleFinishBtnClick() {
            this.props.onSelect(this.state.value);
        }

        /**
         * 选择下一个日期
         * @return {undefined}
         */

    }, {
        key: 'handleItemSelect',
        value: function handleItemSelect(value) {
            this.setState({ value: value });
            this.props.onChange && this.props.onChange(value);
        }

        /**
         * render函数
         * @return {Object} JSX对象
         */

    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                min = _props2.min,
                max = _props2.max,
                items = _props2.items,
                theme = _props2.theme,
                confirmText = _props2.confirmText,
                cancelText = _props2.cancelText,
                showHeader = _props2.showHeader,
                customHeader = _props2.customHeader,
                itemHeight = _props2.itemHeight;

            var value = this.state.value;
            var themeClassName = ['default', 'dark', 'ios', 'android', 'android-dark', 'assurance'].indexOf(theme) === -1 ? 'default' : theme;

            return React__default.createElement(
                'div',
                {
                    className: 'picker-wheel ' + themeClassName },
                showHeader && React__default.createElement(
                    'div',
                    { className: 'picker-wheel-header' },
                    customHeader || value
                ),
                React__default.createElement(
                    'div',
                    { className: 'picker-wheel-content' },
                    React__default.createElement(PickerWheelColumn, {
                        step: 1,
                        value: value,
                        min: min,
                        max: max,
                        items: items,
                        onSelect: this.handleItemSelect,
                        itemHeight: itemHeight
                    })
                ),
                React__default.createElement(
                    'div',
                    { className: 'picker-wheel-navbar' },
                    React__default.createElement(
                        'a',
                        {
                            className: 'picker-wheel-navbar-btn',
                            onClick: this.handleFinishBtnClick },
                        confirmText
                    ),
                    React__default.createElement(
                        'a',
                        {
                            className: 'picker-wheel-navbar-btn',
                            onClick: this.props.onCancel },
                        cancelText
                    )
                )
            );
        }
    }]);
    return PickerWheel;
}(React.Component);

var renderSubtreeIntoContainer = ReactDOM.unstable_renderSubtreeIntoContainer;

var Modal = function (_Component) {
    inherits(Modal, _Component);

    function Modal() {
        classCallCheck(this, Modal);
        return possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));
    }

    createClass(Modal, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this._div = document.createElement('div');
            this._div.classList.add('Modal-Portal');
            document.body.appendChild(this._div);
            this.renderPortal(this.props);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            this.renderPortal(newProps);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            ReactDOM.unmountComponentAtNode(this._div);
            this._div.parentNode.removeChild(this._div);
        }
    }, {
        key: 'renderPortal',
        value: function renderPortal(props) {
            var portal = React__default.cloneElement(this.props.children, _extends({}, props, { key: 'portal' }), null);

            this.portal = renderSubtreeIntoContainer(this, portal, this._div);
        }
    }, {
        key: 'render',
        value: function render() {
            return React__default.createElement('noscript', null);
        }
    }]);
    return Modal;
}(React.Component);

Modal.defaultProps = {
    isOpen: false
};

function EnhancePickerWheel(_ref) {
    var isOpen = _ref.isOpen,
        props = objectWithoutProperties(_ref, ['isOpen']);

    function onModalClose(event) {
        if (event.target === event.currentTarget) {
            props.onCancel();
        }
    }

    return React__default.createElement(
        'div',
        {
            style: { display: isOpen ? '' : 'none' },
            onClick: onModalClose,
            className: 'picker-wheel-modal' },
        React__default.createElement(PickerWheel, props)
    );
}

function ModalPickerWheel(_ref2) {
    var isPopup = _ref2.isPopup,
        props = objectWithoutProperties(_ref2, ['isPopup']);

    if (!isPopup) {
        return React__default.createElement(PickerWheel, props);
    }

    return React__default.createElement(
        Modal,
        props,
        React__default.createElement(EnhancePickerWheel, null)
    );
}

ModalPickerWheel.defaultProps = {
    isPopup: true,
    isOpen: false,
    theme: 'default',
    value: '',
    //min: new Date(1970, 0, 1),
    //max: new Date(2050, 0, 1),
    items: [],
    showHeader: true,
    confirmText: '完成',
    cancelText: '取消',
    onSelect: function onSelect() {},
    onCancel: function onCancel() {},
    itemHeight: 40
};

return ModalPickerWheel;

})));
//# sourceMappingURL=react-picker-wheel.js.map
