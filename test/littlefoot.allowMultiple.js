import test from 'tape'
import sinon from 'sinon'
import littlefoot from '../src/'
import { dispatchEvent } from '../src/events'
import setup from './helper/setup'
import teardown from './helper/teardown'
import sleep from './helper/sleep'

test('littlefoot setup with allowMultiple=true', t => {
  setup('default.html')

  const lf = littlefoot({
    allowMultiple: true
  })

  const createDelay  = lf.get('popoverCreateDelay')
  const dismissDelay = lf.get('popoverDismissDelay')

  dispatchEvent(document.body.querySelector('[data-footnote-id="1"]'), 'click')
  dispatchEvent(document.body.querySelector('[data-footnote-id="2"]'), 'click')

  sleep(createDelay)
    .then(() => {
      t.equal(document.body.querySelectorAll('button.is-active').length, 2, 'allows multiple active popovers')

      lf.dismiss()
      return sleep(dismissDelay)
    })
    .then(() => {
      t.equal(document.body.querySelectorAll('button.is-active').length, 0, 'dismisses all popovers on dismiss()')

      teardown()
      t.end()
    })
})

test('littlefoot setup with allowMultiple=false', t => {
  setup('default.html')

  const lf = littlefoot({
    allowMultiple: false
  })

  const createDelay = lf.get('popoverCreateDelay')

  dispatchEvent(document.body.querySelector('[data-footnote-id="1"]'), 'click')

  sleep(createDelay)
    .then(() => {
      dispatchEvent(document.body.querySelector('[data-footnote-id="2"]'), 'click')
      return sleep(createDelay)
    })
    .then(() => {
      t.equal(document.body.querySelectorAll('button.is-active').length, 1,
        'does not allow multiple active popovers')

      teardown()
      t.end()
    })
})
