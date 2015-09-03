/* global Highcharts */
/* global analytics */

// Setup Polyfills, one day these will go away
import 'whatwg-fetch'
import './polyfills/object.assign'
import Promise from 'es6-promise'
Promise.polyfill()

import riot from 'riot'
import router from './router'
import { SEGMENT_SECRET } from './config'

// @see http://api.highcharts.com/highcharts
Highcharts.setOptions({
  lang: {
    loading: 'Loading'
  }
})

// Load tracking
analytics.load(SEGMENT_SECRET)
analytics.track('App Started')

// Start
router.navigate('/')

