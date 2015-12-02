import {element, attribute, method} from '../../src/ceb.js';
import handlebars from 'handlebars/dist/handlebars.js';

const renderers = {
    'text/x-handlebars-template'(tpl) {
        return handlebars.compile(tpl);
    }
};

element().base(Object.create(HTMLScriptElement.prototype), 'script').builders(
    attribute('type'),

    method('createdCallback').invoke(el=> {
        let render = renderers[el.type];
        if (render) {
            el._cebTemplatorCompile = render(el.textContent);
        }
    }),

    method('render').invoke((el, data) => {
        if (el._cebTemplatorCompile) {
            return el._cebTemplatorCompile(data);
        }
    })
).register('ceb-templator');