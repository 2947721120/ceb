'use strict';

(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', '../helper/types.js', './property.js'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('../helper/types.js'), require('./property.js'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.types, global.property);
        global.template = mod.exports;
    }
})(this, function (exports, _types, _property) {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.TemplateBuilder = undefined;
    exports.applyTemplate = applyTemplate;
    exports.template = template;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = (function () {
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
    })();

    var counter = 0;
    var OLD_CONTENT_ID_ATTR_NAME = 'ceb-old-content-id';
    var CONTENT_ATTR_REG_EX = /ceb\-content/im;
    var CONTENT_NODE_REG_EX = /<content><\/content>/im;

    function hasContent(html) {
        return html.search(CONTENT_ATTR_REG_EX) !== -1 || html.search(CONTENT_NODE_REG_EX) !== -1;
    }

    function replaceContent(html, newCebContentId) {
        return html.replace('<content></content>', '<ceb-lightdom ceb-content></ceb-lightdom>').replace('ceb-content', newCebContentId);
    }

    function findContentNode(el) {
        if (!el) {
            return;
        }

        var oldCebContentId = el.getAttribute(OLD_CONTENT_ID_ATTR_NAME);

        if (oldCebContentId) {
            return findContentNode(el.querySelector('[' + oldCebContentId + ']')) || el;
        }

        return el;
    }

    function cleanOldContentNode(el) {
        var oldContentNode = el.lightDOM,
            lightFrag = document.createDocumentFragment();

        while (oldContentNode.childNodes.length > 0) {
            lightFrag.appendChild(oldContentNode.removeChild(oldContentNode.childNodes[0]));
        }

        return lightFrag;
    }

    function fillNewContentNode(el, lightFrag) {
        el.lightDOM.appendChild(lightFrag);
    }

    function applyTemplate(el, tpl) {
        var lightFrag = [],
            handleContentNode = hasContent(tpl);

        if (handleContentNode) {
            var newCebContentId = 'ceb-content-' + counter++;
            lightFrag = cleanOldContentNode(el);
            tpl = replaceContent(tpl, newCebContentId);
            el.setAttribute(OLD_CONTENT_ID_ATTR_NAME, newCebContentId);
        }

        el.innerHTML = tpl;

        if (handleContentNode) {
            fillNewContentNode(el, lightFrag);
        }
    }

    var TemplateBuilder = exports.TemplateBuilder = (function () {
        function TemplateBuilder(tpl) {
            _classCallCheck(this, TemplateBuilder);

            this.data = {
                tpl: tpl
            };
        }

        _createClass(TemplateBuilder, [{
            key: 'build',
            value: function build(proto, on) {
                var data = this.data;
                (0, _property.property)('lightDOM').getter(function (el) {
                    return findContentNode(el);
                }).build(proto, on);
                on('before:createdCallback').invoke(function (el) {
                    applyTemplate(el, (0, _types.isFunction)(data.tpl) ? data.tpl(el) : data.tpl);
                });
            }
        }]);

        return TemplateBuilder;
    })();

    function template(tpl) {
        return new TemplateBuilder(tpl);
    }
});