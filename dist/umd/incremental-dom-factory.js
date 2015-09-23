(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['exports', 'incremental-dom', 'htmlparser2', './utils.js'], factory);
    } else if (typeof exports !== 'undefined') {
        factory(exports, require('incremental-dom'), require('htmlparser2'), require('./utils.js'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.IncrementalDOM, global.htmlparser2, global.utils);
        global.incrementalDomFactory = mod.exports;
    }
})(this, function (exports, _incrementalDom, _htmlparser2, _utilsJs) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
        value: true
    });

    var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

    exports.compile = compile;
    exports.patch = patch;

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _IncrementalDOM = _interopRequireDefault(_incrementalDom);

    var _htmlparser22 = _interopRequireDefault(_htmlparser2);

    var OPTIONS = {
        pretty: true,
        eachElement: 'tpl-each',
        textElement: 'tpl-text',
        evaluation: /\{\{([\s\S]+?)\}\}/gm,
        attributeKey: 'tpl-key',
        placeholderElement: 'tpl-placeholder',
        varName: 'data',
        customElements: {
            'tpl-logger': {
                onopentag: function onopentag(name, attrs, statics, varArgs) {
                    return 'console.' + (statics.level || statics.level || 'log') + '(' + (statics.content || varArgs.content) + ');';
                }
            }
        },
        // http://www.w3.org/TR/html5/syntax.html#void-elements
        selfClosingElements: ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr']
    };

    exports.OPTIONS = OPTIONS;
    function escapeSingleQuote() {
        var value = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

        return value.replace(/'/gim, '\\\'');
    }

    function isSelfClosing() {
        var name = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
        var options = arguments.length <= 1 || arguments[1] === undefined ? OPTIONS : arguments[1];

        return options.selfClosingElements.indexOf(name) > -1;
    }

    function getFunctionName() {
        var name = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
        var options = arguments.length <= 1 || arguments[1] === undefined ? OPTIONS : arguments[1];

        return isSelfClosing(name, options) ? 'v' : 'o';
    }

    function append() {
        var body = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
        var line = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];
        var options = arguments.length <= 2 || arguments[2] === undefined ? OPTIONS : arguments[2];

        return body + (options.pretty ? '\n' : '') + line;
    }

    function evaluate() {
        var value = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
        var options = arguments.length <= 1 || arguments[1] === undefined ? OPTIONS : arguments[1];

        var js = [];
        var result = undefined;
        var lastIndex = 0;
        while ((result = options.evaluation.exec(value)) !== null) {
            var full = result[0];
            var group = result[1];
            var index = result.index;
            var before = value.substring(lastIndex, index);
            if (before) {
                js.push('\'' + escapeSingleQuote(before) + '\'');
            }
            js.push('(' + group + ')');
            lastIndex = index + full.length;
        }
        var after = value.substring(lastIndex, value.length);
        if (after) {
            js.push('\'' + escapeSingleQuote(after) + '\'');
        }
        return js.join(' + ');
    }

    function parseAttributes() {
        var attrs = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
        var options = arguments.length <= 1 || arguments[1] === undefined ? OPTIONS : arguments[1];

        var statics = {};
        var varArgs = {};

        Object.keys(attrs).forEach(function (key) {
            var value = attrs[key];
            if (value.search(options.evaluation) > -1) {
                varArgs[key] = evaluate(value, options);
            } else {
                statics[key] = value;
            }
        });

        return [statics, varArgs];
    }

    function varArgsToJs() {
        var varArgs = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        var keys = Object.keys(varArgs);
        return keys.length > 0 ? keys.map(function (key) {
            return '\'' + key + '\', ' + varArgs[key];
        }).join(', ') : 'null';
    }

    function staticsToJs() {
        var statics = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        var keys = Object.keys(statics);
        return keys.length > 0 ? '[' + keys.map(function (key) {
            return '\'' + key + '\', \'' + escapeSingleQuote(statics[key]) + '\'';
        }).join(', ') + ']' : 'null';
    }

    function compile() {
        var html = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        options = (0, _utilsJs.assign)({}, OPTIONS, options);

        var fnBody = '';

        var parser = new _htmlparser22['default'].Parser({
            onopentag: function onopentag(name, attrs) {
                var statics = undefined,
                    varArgs = undefined,
                    fn = undefined,
                    key = attrs[options.attributeKey];
                switch (name) {
                    case OPTIONS.eachElement:
                        fnBody = append(fnBody, '(' + attrs.items + ' || []).forEach(function (' + attrs.item + ', ' + attrs.index + ') {', options);
                        break;
                    case OPTIONS.textElement:
                        var value = attrs.value;
                        if (value.search(options.evaluation) > -1) {
                            value = evaluate(value, options);
                        }
                        fnBody = append(fnBody, 't(' + value + ');', options);
                        break;
                    case OPTIONS.placeholderElement:
                        key = key || Date.now();

                        var _parseAttributes = parseAttributes(attrs, options);

                        var _parseAttributes2 = _slicedToArray(_parseAttributes, 2);

                        statics = _parseAttributes2[0];
                        varArgs = _parseAttributes2[1];

                        append(fnBody, 'ph(\'' + name + '\', ' + (key ? '\'' + key + '\'' : 'null') + ', ' + staticsToJs(statics) + ', ' + varArgsToJs(varArgs) + ');', options);
                        break;
                    default:
                        var _parseAttributes3 = parseAttributes(attrs, options);

                        var _parseAttributes32 = _slicedToArray(_parseAttributes3, 2);

                        statics = _parseAttributes32[0];
                        varArgs = _parseAttributes32[1];

                        if (options.customElements[name]) {
                            if (typeof options.customElements[name].onopentag === 'function') {
                                fnBody = append(fnBody, options.customElements[name].onopentag(name, attrs, statics, varArgs), options);
                            }
                        } else {
                            fn = getFunctionName(name, options);
                            fnBody = append(fnBody, fn + '(\'' + name + '\', ' + (key ? '\'' + key + '\'' : 'null') + ', ' + staticsToJs(statics) + ', ' + varArgsToJs(varArgs) + ');', options);
                        }
                }
            },
            onclosetag: function onclosetag(name) {
                if (isSelfClosing(name)) {
                    return;
                }
                switch (name) {
                    case OPTIONS.eachElement:
                        fnBody = append(fnBody, '});', options);
                        break;
                    case OPTIONS.textElement:
                    case OPTIONS.placeholderElement:
                        break;
                    default:
                        if (options.customElements[name]) {
                            if (typeof options.customElements[name].onclosetag === 'function') {
                                fnBody = append(fnBody, options.customElements[name].onclosetag(name), options);
                            }
                        } else {
                            fnBody = append(fnBody, 'c(\'' + name + '\');', options);
                        }
                }
            },
            ontext: function ontext(text) {
                fnBody = append(fnBody, 't(\'' + escapeSingleQuote(text) + '\');', options);
            }
        }, {
            xmlMode: false,
            decodeEntities: true,
            lowerCaseTags: false,
            lowerCaseAttributeNames: false,
            recognizeSelfClosing: true
        });

        parser.parseComplete(html.replace(/\n/gi, '\\n'));

        var fnWrapper = 'var o = i.elementOpen, c = i.elementClose, v = i.elementVoid, t = i.text, ph = i.elementPlaceholder;return function (' + options.varName + ') {' + fnBody + '};';

        var fn = new Function(['i'], fnWrapper);

        return fn(_IncrementalDOM['default']);
    }

    function patch(domNode, render, data) {
        return _IncrementalDOM['default'].patch(domNode, render, data);
    }
});