'use strict';

(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', '../utils.js', './Builder.js'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('../utils.js'), require('./Builder.js'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.utils, global.Builder);
        global.MethodBuilder = mod.exports;
    }
})(this, function (exports, _utils, _Builder2) {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.MethodBuilder = undefined;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    var MethodBuilder = exports.MethodBuilder = (function (_Builder) {
        _inherits(MethodBuilder, _Builder);

        /**
         * @param {!string} methName the name of the method
         */

        function MethodBuilder(methName) {
            _classCallCheck(this, MethodBuilder);

            /**
             * @ignore
             */

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MethodBuilder).call(this));

            _this.data = { methName: methName, wrappers: [] };
            return _this;
        }

        /**
         * To do something when invoked.
         * @param {!function(el: HTMLElement, args: ...*)} fn the method's logic
         * @returns {MethodBuilder} the builder
         */

        _createClass(MethodBuilder, [{
            key: 'invoke',
            value: function invoke(fn) {
                if ((0, _utils.isFunction)(fn)) {
                    this.data.invoke = fn;
                }
                return this;
            }

            /**
             * To do something around the invocation.
             * @param {...function(el: HTMLElement, args: ...*)} wrappers a set of wrappers
             * @returns {MethodBuilder} the builder
             */

        }, {
            key: 'wrap',
            value: function wrap() {
                for (var _len = arguments.length, wrappers = Array(_len), _key = 0; _key < _len; _key++) {
                    wrappers[_key] = arguments[_key];
                }

                this.data.wrappers = this.data.wrappers.concat(wrappers);
                return this;
            }

            /**
             * @override
             */

        }, {
            key: 'build',
            value: function build(proto, on) {
                var data = this.data;

                if (data.invoke) {
                    proto[data.methName] = function () {
                        return data.invoke.apply(this, [this].concat((0, _utils.toArray)(arguments)));
                    };
                }

                if (data.wrappers.length) {
                    on('before:createdCallback').invoke(function (el) {
                        if ((0, _utils.isFunction)(el[data.methName])) {
                            (function () {
                                var lastIndex = data.wrappers.length - 1,
                                    original = el[data.methName],
                                    target = function target() {
                                    var args = (0, _utils.toArray)(arguments);
                                    args.shift();
                                    original.apply(el, args);
                                };
                                el[data.methName] = data.wrappers.reduce(function (next, current, index) {
                                    if (index === lastIndex) {
                                        return (0, _utils.bind)((0, _utils.partial)(current, next, el), el);
                                    }
                                    return (0, _utils.bind)((0, _utils.partial)(current, next), el);
                                }, target);
                            })();
                        }
                    });
                }
            }
        }]);

        return MethodBuilder;
    })(_Builder2.Builder);
});