/**
* Index.js
*/
'use strict' 

const process = require('process');
const logger = require('./src/logger.js');

process.on('uncaughtException', function (err) {
    console.log(err);
}); 

logger.debug('>> ' + this.name);

logger.debug('<< ' + this.name);

