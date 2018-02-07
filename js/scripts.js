"use strict";

global.jQuery = global.$ = require("jquery");
require('angular');
require('bootstrap-sass');
global.Reveal = require('reveal.js');
global.EC = require('elliptic').ec;
global.d3 = require('d3');
global.functionPlot = require('function-plot');
require('prismjs');

require('./app.js');
require('./controllers/ecc.js');
require('./controllers/ecdh.js');
require('./controllers/ecdsa.js');
