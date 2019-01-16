/**
 * Logger.
 */ 
'use strict'; 

const LOG4JS = require('../config-logger.json');

const util = require('util');
const log4js = require('log4js');

console.log('Logger initialization...');
log4js.configure(LOG4JS);
console.log('Logger initialization success.');

let logger = log4js.getLogger();

let printArgs = function(args) {
	return util.inspect(args, { showHidden: false, depth: 1 });
}

let printObj = function(args) {
	return util.inspect(args, { showHidden: false, depth: 3 });
}

module.exports = Object.assign(
	logger, 
	{ 
		printArgs: printArgs, 
		printThis: printArgs,
		printObj: printObj,
	}
);
