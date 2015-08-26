/* global Highcharts */
/* global analytics */

let app = window.Z = {}

// Setup Polyfills, one day these will go away
import 'whatwg-fetch'
import './polyfills/object.assign'
import Promise from 'es6-promise'
Promise.polyfill()

import riot from 'riot'
import dispatcher from './util/dispatcher'
import { ENV, SEGMENT_DEV, SEGMENT_PROD } from './config'
import './tags/app.tag'

app.dispatcher = dispatcher

// @see http://api.highcharts.com/highcharts
Highcharts.setOptions({
  lang: {
    loading: 'Loading'
  }
})

// start tracking
analytics.load(('DEV' === ENV?SEGMENT_DEV:SEGMENT_PROD))
analytics.track('App Started')

riot.mount('#app', 'app')
