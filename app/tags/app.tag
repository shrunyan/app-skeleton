require('../core/tags/account-menu.tag')
require('./network-menu.tag')
<app>
  <nav id="network">
    <network-menu></network-menu>
    <account-menu></account-menu>
  </nav>
  <section id="main">
    <h1>Zesty App Skeleton</h1>
    <p>This is our baseline codebase for developing <abbr title="Single Page Applications">SPA</abbr> from. We recommend you start by reading the included `README` file.</p>
    <p>The application includes stores, services, a router, and riot for view rendering.</p>
    <hr />
    <h2>Redux State Example: Counter</h2>
    <p>Count: {count}</p>
    <button onclick={this.increment}>Increment</button>
    <button onclick={this.decrement}>Decrement</button>
  </section>
  <script type="es6">

    this.count = opts.store.getState().counter

    this.on('mount', () => {
      opts.store.subscribe(() => {
        this.update({
          count: opts.store.getState().counter
        })
      })
    })

    this.increment = () => opts.store.dispatch({type: "INCREMENT"})
    this.decrement = () => opts.store.dispatch({type: "DECREMENT"})

  </script>
</app>
