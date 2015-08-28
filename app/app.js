/* global Highcharts */
/* global analytics */

// Setup Polyfills, one day these will go away
import 'whatwg-fetch'
import './polyfills/object.assign'
import Promise from 'es6-promise'
Promise.polyfill()

import riot from 'riot'
import reducers from './reducers'
import { SEGMENT_SECRET } from './config'
import { createStore } from 'redux'
import './tags/app.tag'

const store = createStore(reducers)

// @see http://api.highcharts.com/highcharts
Highcharts.setOptions({
  lang: {
    loading: 'Loading'
  }
})

// start tracking
analytics.load(SEGMENT_SECRET)
analytics.track('App Started')

riot.mount('#app', 'app', {store})
