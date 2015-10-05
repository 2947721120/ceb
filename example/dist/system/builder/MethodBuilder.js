System.register(['../utils.js', './Builder.js'], function (_export) {

    /**
     * The method builder.
     * Its goal is to provide a way to define a method.
     * @extends {Builder}
     */
    'use strict';

    var isFunction, toArray, noop, wrap, Builder, MethodBuilder;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    return {
        setters: [function (_utilsJs) {
            isFunction = _utilsJs.isFunction;
            toArray = _utilsJs.toArray;
            noop = _utilsJs.noop;
            wrap = _utilsJs.wrap;
        }, function (_BuilderJs) {
            Builder = _BuilderJs.Builder;
        }],
        execute: function () {
            MethodBuilder = (function (_Builder) {
                _inherits(MethodBuilder, _Builder);

                /**
                 * @param {!string} methName the name of the method
                 */

                function MethodBuilder(methName) {
                    _classCallCheck(this, MethodBuilder);

                    _get(Object.getPrototypeOf(MethodBuilder.prototype), 'constructor', this).call(this);
                    /**
                     * @ignore
                     */
                    this.data = { methName: methName, invoke: noop, wrappers: [] };
                }

                /**
                 * To do something when invoked.
                 * @param {!function(el: HTMLElement, args: ...*)} fn the method's logic
                 * @returns {MethodBuilder} the builder
                 */

                _createClass(MethodBuilder, [{
                    key: 'invoke',
                    value: function invoke(fn) {
                        if (isFunction(fn)) {
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

                        proto[data.methName] = function () {
                            return data.invoke.apply(this, [this].concat(toArray(arguments)));
                        };

                        on('after:builders').invoke(function () {
                            data.wrappers.forEach(function (wrapper) {
                                return data.invoke = wrap(data.invoke, wrapper);
                            });
                        });
                    }
                }]);

                return MethodBuilder;
            })(Builder);

            _export('MethodBuilder', MethodBuilder);
        }
    };
});