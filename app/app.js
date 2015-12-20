/* global analytics */

// Setup Polyfills, one day these will go away
import './polyfills/object.assign'
import Promise from 'es6-promise'
Promise.polyfill()

import riot from 'riot'
import router from './router'
import { SEGMENT_SECRET } from './config'

// Load tracking
analytics.load(SEGMENT_SECRET)
analytics.track('App Started')

// Start
router.navigate('/')

