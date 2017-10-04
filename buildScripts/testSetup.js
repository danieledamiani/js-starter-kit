// this file is not transpiled

// register babel to transpile before our tests run
require('babel-register')();

// disable webpack features that Mocha does not understand
require.extensions['.css'] = function() {};
