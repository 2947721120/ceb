'use strict';

System.register(['../helper/types.js', './property.js'], function (_export, _context) {
    var isFunction, property, _createClass, counter, OLD_CONTENT_ID_ATTR_NAME, CONTENT_ATTR_REG_EX, CONTENT_NODE_REG_EX, TemplateBuilder;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

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

    return {
        setters: [function (_helperTypesJs) {
            isFunction = _helperTypesJs.isFunction;
        }, function (_propertyJs) {
            property = _propertyJs.property;
        }],
        execute: function () {
            _createClass = function () {
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

            counter = 0;
            OLD_CONTENT_ID_ATTR_NAME = 'ceb-old-content-id';
            CONTENT_ATTR_REG_EX = /ceb\-content/im;
            CONTENT_NODE_REG_EX = /<content><\/content>/im;

            function applyTemplate(el, tpl) {
                var lightFrag = undefined,
                    handleContentNode = hasContent(tpl);

                if (handleContentNode) {
                    var newCebContentId = 'ceb-content-' + counter++;
                    lightFrag = cleanOldContentNode(el);
                    tpl = replaceContent(tpl, newCebContentId);
                    el.setAttribute(OLD_CONTENT_ID_ATTR_NAME, newCebContentId);
                }

                el.innerHTML = tpl;

                if (handleContentNode && lightFrag) {
                    el.lightDOM.appendChild(lightFrag);
                }
            }

            _export('applyTemplate', applyTemplate);

            _export('TemplateBuilder', TemplateBuilder = function () {
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
                        property('lightDOM').getter(function (el) {
                            return findContentNode(el);
                        }).build(proto, on);
                        on('before:createdCallback').invoke(function (el) {
                            applyTemplate(el, isFunction(data.tpl) ? data.tpl(el) : data.tpl);
                        });
                    }
                }]);

                return TemplateBuilder;
            }());

            _export('TemplateBuilder', TemplateBuilder);

            function template(tpl) {
                return new TemplateBuilder(tpl);
            }

            _export('template', template);
        }
    };
});