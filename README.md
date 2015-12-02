# Riot App Skeleton

The Zesty.io Riot App Skeleton is our starting point for front end applications. Our hope is that we can expose internally learnings to the Riot community.

## Getting Started

### 1) Create an `app/config.js` file

This is the configuration file for the application. You should include things such as; your environment, api endpoints, vendor access tokens, etc... This is a javascript module which exports each value as a constant. The configuration file is ignored in `.gitignore` this ensures your secret keys are not accidentally committed to a repository. So don't be surprised when you don't see your changes in the `git status`

_Example `config.js` File_

	export const ENV = 'DEV'
	export const API = 'https://YOUR-SERVICE.zesty.localdev'
	export const VENDOR_SECRET = '123ABC'

### 2) Start The Application

Run the application locally with this command. Accepts cli arguments `env`

	$bash build.sh --env development

This bash script orchestrates all build steps irregardless of language. __If adding a new build step, dependency or language it must ultimately be configured to run via this bash script.__ 


## Developing

[`gulp`][gulp] manages our application build. External dependencies are managed by [`npm`][npm]. It is ran on a local server with [`nodejs`][node] via the [`glup-connect`][connect] module.

We are writing our JavaScript as ES6 modules which are transpiled via [`babel`][babel] then bundled with [`browserify`][browserify] for client delivery.

Code style is enforced with `standard` (// TODO automate standard reporting) and an [`.editorconfig`][editorconfig] file. Before committing any code ensure your editor is configured to use the `.editorconfig` or your pull requests will be rejected.

### Routing: [Grapnel][grapnel]

Our routing is implemented with the [Grapnel][grapnel] library. The router is in charge of starting our redux state machine and providing the created store to riot components which then pass the store to their children. It supports both `hashchange` and `pushState`.

### State: [redux][redux]

We are using [redux][redux] for our state management.

### View: [riotjs][riot]

We've chosen [riotjs][riot] to be our view layer. Riot components should be written as stateless as possible. Each component should ideally only do 2 things;

1. subscribe to store changes and update
2. dispatch user actions

### Services

Services are implemented from a delegate prototype `Service` object. We write a service implementation for each of our micro services.

### Dependencies 

- moment (Time Normalizing Lib)

### Polyfills

- es6-promise (Polyfill)
- whatwg-fetch (Polyfill)
- [Object.assign][object.assign]


## Testing

We use the [`tape`][tape] testing module which uses the [TAP][TAP] standard for tests and output the results into `faucet` for some pretty test results. Riot tags are tested by loading the tag file and running it through the `riot.render` method which returns HTML. Then assertions can be ran against the HTML string.

// TODO possibly load the HTML with JSDom to have a dom we can run integration tests against with something like nightmare to ensure our events handle and return expected results.


## Reporting

We have integrated [segment.io][segment] into our application codebase so we can capture app usage statistics to measure engagement and learn what application features users enjoy most. To configure segment you will need to add your secret key to the `app/config.js` file.

	export const SEGMENT_SECRET = 'YOUR_SECRET_KEY'


[TAP]: https://testanything.org/tap-specification.html
[tape]: https://github.com/substack/tape
[gulp]: http://gulpjs.com/
[npm]: https://www.npmjs.com/
[node]: https://nodejs.org/
[riot]: http://riotjs.com/
[connect]: https://www.npmjs.com/package/gulp-connect
[babel]: https://babeljs.io/
[editorconfig]: http://editorconfig.org/
[browserify]: http://browserify.org/
[segment]: http://segment.io
[redux]: http://rackt.github.io/redux/index.html
[grapnel]: https://www.npmjs.com/package/grapnel
[object.assign]: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Polyfill]
