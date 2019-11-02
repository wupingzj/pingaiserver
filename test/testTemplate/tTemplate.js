const pug = require('pug');

const compiled = pug.compileFile('template.pug');

console.log(compiled({
    name: 'Kevin Wu'
}));

console.log(compiled({
    name: 'Daniel Shun'
}));
