/* global analytics */

import riot from 'riot'
import grapnel from 'grapnel'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import reducers from '../reducers'
import '../tags/app.tag'

const middleware = applyMiddleware(thunk, logger)(createStore)
const store = middleware(reducers)
const router = new grapnel({
  hashchange: true
})

router.on('navigate', function () {
  console.log('URL changed to %s', this.fragment.get())
})

// Setup Routes
router.get('/', (req) => {
  riot.mountTo('#app', 'app', {store})
  analytics.page(req)
})

export default router
