import {ceb, attribute, property, delegate, method, template} from 'es6/lib/ceb.js';
import {toArray} from 'es6/lib/utils.js';

ceb().proto(Object.create(HTMLInputElement.prototype)).extends('input').augment(
    attribute('type').value('text')
).register('wui-input-text');

ceb().proto(Object.create(HTMLInputElement.prototype)).extends('input').augment(
    attribute('type').value('number')
).register('wui-input-number');

ceb().augment(
    template(`
        <input type="text">
    `),

    delegate(method('focus')).to('input[type=text]'),
    delegate(attribute('value')).to('input[type=text]').property(),
    delegate(attribute('name')).to('input[type=text]'),

    attribute('list')
).register('wui-single-select');

ceb().augment(
    property('items').getter(el => toArray(el.querySelector('wui-list-item')).map(item => item.asObject)),
    method('createdCallback').invoke(el => el.style.display = 'none')
).register('wui-list');

ceb().augment(
    attribute('value'),
    property('asObject').getter(el => ({
        value: item.value || item.textContent,
        text: item.textContent
    }))
).register('wui-list-item');
