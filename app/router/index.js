/* global analytics */

import riot from 'riot'
import grapnel from 'grapnel'

// Setup Routes
grapnel.listen({
  '*': () => {
    // TODO add your 
    // riot.mountTo('#app', 'app')
    // analytics.page()
  }
})

let router = new grapnel({
  pushState: true
})
router.on('navigate', function () {
  console.log('URL changed to %s', this.fragment.get())
})

export default router
