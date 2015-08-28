/* global Highcharts */
/* global analytics */

// Setup Polyfills, one day these will go away
import 'whatwg-fetch'
import './polyfills/object.assign'
import Promise from 'es6-promise'
Promise.polyfill()

import riot from 'riot'
import './tags/app.tag'
import reducers from './reducers'
import { createStore } from 'redux'
import { ENV, SEGMENT_DEV, SEGMENT_PROD } from './config'

const store = createStore(reducers)

// @see http://api.highcharts.com/highcharts
Highcharts.setOptions({
  lang: {
    loading: 'Loading'
  }
})

// start tracking
analytics.load(('DEV' === ENV?SEGMENT_DEV:SEGMENT_PROD))
analytics.track('App Started')

riot.mount('#app', 'app', {store})
