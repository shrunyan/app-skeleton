# Zesty Skeleton Application
_We develop client applications as view layer implementations that work with Zesty APIs to power themselves._

## Getting Started

### 1) Create an `app/config.js` file

This is the configuration file for the application. You should include things such as; your environment, api endpoints, vendor access tokens, etc... This is a javascript module which exports each value as a constant. The configuration file is ignored in `.gitignore` this ensures your secret keys are not accidentally committed to a repository. So don't be surprised when you don't see your changes in the `git status`

_Example `config.js` File_

	export const ENV = 'DEV'
	export const API = 'https://YOUR-SERVICE.zesty.localdev'
	export const VENDOR_SECRET = '123ABC'

### 2) Start The Application

Run the application locally with this command

	$bash build.sh

This bash script orchestrates all build steps irregardless of language. __If adding a new build step, dependency or language it must ultimately be configured to run via this bash script.__


## Developing

[`gulp`][gulp] manages our application build. External dependencies are managed by [`npm`][npm]. It is ran on a local server with [`nodejs`][node] via the [`glup-connect`][connect] module.

We are writing our JavaScript as ES6 modules which are ran through a [`babel`][babel] transpilation step then bundled with [`browserify`][browserify] for client delivery.

Code style is enforced with `standard` (// TODO automate standard reporting) and an [`.editorconfig`][editorconfig] file. Before committing any code ensure your editor is configured to use the `.editorconfig` or your pull requests will be rejected.


## Testing

We use the [`tape`][tape] testing module which uses the [TAP][TAP] standard for tests and output the results into `faucet` for some pretty test results. Riot tags are tested by loading the tag file and running it through the `riot.render` method which returns HTML. Then assertions can be ran against the HTML string.

// TODO possibly load the HTML with JSDom to have a dom we can run integration tests against with something like nightmare to ensure our events handle and return expected results.


## Reporting

We have integrated [segment.io][segment] into our application codebase so we can capture app usage statistics to measure engagement and learn what application features users enjoy most. To configure segment you will need to add your secret key to the `app/config.js` file.

	export const SEGMENT_SECRET = 'YOUR_SECRET_KEY'


## Dependencies

- [riot][riot] (View Lib)
- grapnel (Routing)
- moment (Time Lib)
- es6-promise (Polyfill)
- whatwg-fetch (Polyfill)


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
