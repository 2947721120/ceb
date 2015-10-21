import {isFunction, toArray, partial, bind} from '../utils.js';
import {Builder} from './Builder.js';

/**
 * The method builder.
 * Its goal is to provide a way to define a method.
 * @extends {Builder}
 */
export class MethodBuilder extends Builder {

    /**
     * @param {!string} methName the name of the method
     */
    constructor(methName) {
        super();
        /**
         * @ignore
         */
        this.data = {methName, wrappers: []};
    }

    /**
     * To do something when invoked.
     * @param {!function(el: HTMLElement, args: ...*)} fn the method's logic
     * @returns {MethodBuilder} the builder
     */
    invoke(fn) {
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
    wrap(...wrappers) {
        this.data.wrappers = this.data.wrappers.concat(wrappers);
        return this;
    }

    /**
     * @override
     */
    build(proto, on) {
        let data = this.data;

        if (data.invoke) {
            proto[data.methName] = function () {
                return data.invoke.apply(this, [this].concat(toArray(arguments)));
            };
        }

        if (data.wrappers.length) {
            on('before:createdCallback').invoke(el => {
                if (isFunction(el[data.methName])) {
                    let lastIndex = data.wrappers.length - 1,
                        original = el[data.methName],
                        target = function target() {
                            let args = toArray(arguments);
                            args.shift();
                            original.apply(el, args);
                        };
                    el[data.methName] = data.wrappers.reduce((next, current, index) => {
                        if (index === lastIndex) {
                            return bind(partial(current, next, el), el);
                        }
                        return bind(partial(current, next), el);
                    }, target);

                }
            });
        }
    }
}
