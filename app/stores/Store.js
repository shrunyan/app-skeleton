import riot from 'riot'

// Factory to get instance of Store
function Store () {
  return riot.observable({

    data: {},

    set(key, el) {
      // console.log('Store.set |', key, el)

      this.data[key] = el
      this.trigger('set', key, el)
      return this.data[key]
    },

    get(key) {
      // console.log('Store.get |', key)

      this.trigger('get', key)
      return this.data[key]
    }

  })
}

export default Store
