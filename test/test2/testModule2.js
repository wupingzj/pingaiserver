"use strict";

let log = require('../../log');
let {myutil} = require('./myutil2');
log.info('3+5=' + myutil.add(3,5));
log.info('3-5=' + myutil.minus(3,5));


// let myutil = require('./myutil');
// log.info('3+5=' + myutil.myutil.add(3,5));
// log.info('3-5=' + myutil.myutil.minus(3,5));
