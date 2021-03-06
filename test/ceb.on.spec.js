/*jshint -W030 */

import {element, template, on, dispatchMouseEvent} from '../src/ceb.js';
import {listen} from './helper.js';

describe('ceb.on()', function () {
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

    context('listen events', () => {
        var bubblingListener, captureListener, el;
        beforeEach(done => {
            bubblingListener = sinon.spy();
            captureListener = sinon.spy();

            builder.builders(
                on('click').invoke(bubblingListener),
                on('click').invoke(captureListener).capture(),
                template('<button>button</button>')
            ).register('test-on-bubbling');

            sandbox.appendChild((el = document.createElement('test-on-bubbling')));

            setTimeout(() => {
                listen(el, 'click', 1, done);
                dispatchMouseEvent(el.querySelector('button'), 'click');
            }, 10);
        });
        it('should invoke the bubbling and capture listeners', () => {
            expect(bubblingListener).to.have.been.calledOnce;
            expect(bubblingListener).to.be.calledWith(el, sinon.match(Object));

            expect(captureListener).to.have.been.calledOnce;
            expect(captureListener).to.be.calledWith(el, sinon.match(Object));
        });
    });

    context('listen events with delegated elements', () => {
        var fn, fnI1, fnI, el;
        beforeEach(done => {
            fn = sinon.spy();
            fnI1 = sinon.spy();
            fnI = sinon.spy();

            builder.builders(
                on('click').invoke(fn),
                on('click').delegate('.i1').invoke(fnI1),
                on('click').delegate('i').invoke(fnI),
                template(`<i class="i1"><b>i1</b></i><i class="i2"><b>i2</b></i>`)
            ).register('test-on-delegate');

            sandbox.appendChild((el = document.createElement('test-on-delegate')));

            setTimeout(() => {
                listen(el, 'click', 3, done);
                dispatchMouseEvent(el.querySelector('.i1'), 'click');
                dispatchMouseEvent(el.querySelector('.i2'), 'click');
                dispatchMouseEvent(el.querySelector('.i1 b'), 'click');
            }, 10);
        });
        it('should invoke listeners', () => {
            expect(fn).to.have.been.calledThrice;
            expect(fnI).to.have.been.calledThrice;
            expect(fnI1).to.have.been.calledTwice;
            expect(fnI1).to.be.calledWith(el, sinon.match(Object), el.querySelector('.i1'));
            expect(fnI1).to.be.calledWith(el, sinon.match(Object), el.querySelector('.i1'));
            expect(fnI1.getCall(0).args[1].target).to.eq(el.querySelector('.i1'));
            expect(fnI.getCall(1).args[1].target).to.eq(el.querySelector('.i2'));
        });
    });

    context('skip propagation and default behavior', () => {
        var wrapperListener, elListener, wrapper, el;
        beforeEach(done => {
            wrapperListener = sinon.spy();
            elListener = sinon.spy();

            builder.builders(
                on('click').skip().invoke(elListener),
                template('<button>button</button>')
            ).register('test-on-skip');

            wrapper = document.createElement('div');
            wrapper.appendChild((el = document.createElement('test-on-skip')));
            sandbox.appendChild(wrapper);

            wrapper.addEventListener('click', wrapperListener);

            setTimeout(() => {
                listen(el, 'click', 1, done);
                dispatchMouseEvent(el.querySelector('button'), 'click');
            }, 10);
        });
        it('should invoke listeners', () => {
            expect(elListener).to.have.been.calledOnce;
            expect(wrapperListener).to.have.not.been.called;
        });
    });

});
