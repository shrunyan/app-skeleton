/**
 * Dispatches events for all stores
 * New stores must be registered here
 */

import stores from '../stores'
// import SiteStore from '../stores/SiteStore'
// Import new stores here

function dispatcher () {
  this.stores = {}
  this._stores = Object.keys(this.stores).map(key => this.stores[key])
}

dispatcher.prototype.on = function () {
  console.log('Dispatcher.on |', arguments)

  let args = [].slice.call(arguments);
  this._stores.forEach(function (el) {
    el.on.apply(null, args)
  })
}

dispatcher.prototype.one = function () {
  console.log('Dispatcher.one |', arguments)

  let args = [].slice.call(arguments);
  this._stores.forEach(function (el) {
    el.one.apply(null, args)
  })
}

dispatcher.prototype.off = function () {
  console.log('Dispatcher.off |', arguments)

  let args = [].slice.call(arguments);
  this._stores.forEach(function (el) {
    el.off.apply(null, args)
  })
}

dispatcher.prototype.trigger = function () {
  console.log('Dispatcher.trigger |', arguments)

  let args = [].slice.call(arguments);
  this._stores.forEach(function (el) {
    el.trigger.apply(null, args)
  })
}

export default new dispatcher()
