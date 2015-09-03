require('../core/tags/account-menu.tag')
require('./network-menu.tag')
require('./ex-counter.tag')
require('./ex-set-email.tag')
<app>
  <nav id="network">
    <network-menu></network-menu>
    <account-menu store={opts.store}></account-menu>
  </nav>
  <section id="main">
    <h1>Zesty App Skeleton</h1>
    <p>This is our baseline codebase for developing <abbr title="Single Page Applications">SPA</abbr> from. We recommend you start by reading the included `README` file.</p>
    <p>The application includes stores, services, a router, and riot for view rendering.</p>
    <hr />

    <h1>Example Tags</h1>
    <ex-counter store={opts.store}></ex-counter>
    <ex-set-email store={opts.store}></ex-set-email>

  </section>
</app>
