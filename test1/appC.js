"use strict";

var a = require('./appA');
var b = require('./appB');

console.log(a.funA);
console.log(b.funB);

console.log('in appC =' + (a.aNumberA()));
console.log('in appC =' + (b.aNumberB()));
a.funA();
b.funB();

// b.funA();
console.log('in appC =' + (a.funA));
console.log('in appC =' + (b.funB));