#! /bin/bash

# Setup npm
echo 'NPM INSTALL'
npm install
echo 'RUNNING TESTS'
npm test
echo 'STARTING APPLICATION'
npm start "$@"
