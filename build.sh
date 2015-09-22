# ! /bin/bash

# Setup npm
echo 'NPM INSTALL'
npm install
echo 'RUNNING TESTS'
npm test
echo 'STARTING APPLICATION'
./node_modules/.bin/gulp build $@
