/**
 * Service
 * Basic service object for requesting an API
 */
let Service = {

  /**
   * fetch
   * Builds request then returns a es6 promise
   * @see `whatwg-fetch` polyfill for making fetch requests in the browser
   * @return promise
   */
  fetch(url) {
    console.log('Service.fetch |', url)

    return fetch(url)
      .then(this.status)
      .then(this.json)
      .catch((ex) => {
        console.log('Service.fetch | parsing failed |', ex)
      })
  },

  status(response) {
    if (response.status >= 200 && response.status < 300) {
      return response
    }
    throw new Error(response.statusText)
  },

  json(response) {
    return response.json()
  }

}

export default Service
