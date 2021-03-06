/*jshint -W030 */

import {element, property} from '../src/ceb.js';

describe('ceb.property()', function () {
    var sandbox, builder;
    beforeEach(() => {
        if (sandbox) {
            sandbox.parentNode.removeChild(sandbox);
        }
        document.body.appendChild((sandbox = document.createElement('div')));
        builder = element();
    });

    afterEach(() => {
        sandbox.innerHTML = '';
    });

    it('should define an immutable property', () => {
        builder.builders(property('prop1').immutable().value('value')).register('test-immutable-property');
        var el = document.createElement('test-immutable-property');
        expect(el.prop1).to.be.eq('value');
        try {
            el.prop1 = 'value1';
        } catch (e) {
        }
        if (window.navigator.userAgent.indexOf('PhantomJS') === -1) {
            expect(el.prop1).to.be.eq('value');
        }
    });

    it('should define a mutable property', () => {
        builder.builders(property('prop1').value('value')).register('test-mutable-property');
        var el = document.createElement('test-mutable-property');
        expect(el.prop1).to.be.eq('value');
        try {
            el.prop1 = 'value1';
        } finally {
            expect(el.prop1).to.be.eq('value1');
        }
    });

    it('should define accessors property', () => {
        var getter = sinon.spy();
        var setter = sinon.spy();
        builder.builders(property('prop1').value('value').getter(getter).setter(setter)).register('test-accessor-property');
        var el = document.createElement('test-accessor-property');
        expect(el.prop1).to.be.undefined;
        expect(getter).to.have.been.calledWith(el);
        expect(setter).to.have.been.calledWith(el, 'value');
    });

    it('should listen property set', () => {
        var listener = sinon.spy();
        builder.builders(property('prop1').value('value').listen(listener)).register('test-accessor-listen');
        var el = document.createElement('test-accessor-listen');
        expect(listener).to.have.been.calledWith(el, undefined, 'value');
        el.prop1 = 'value bis';
        expect(listener).to.have.been.calledWith(el, 'value', 'value bis');
    });

    it('should hide property', () => {
        var propBuilder = property('prop1').value('value').hidden();
        expect(propBuilder.data.enumerable).to.be.false;
    });

});
