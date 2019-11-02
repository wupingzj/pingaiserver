var emitter = require('events').EventEmitter;
var em = new emitter();
var em2 = new emitter();

em.addListener('Apple', function(data) {
    console.log('Apple subscriber: ' + data);
});

// em.addListener('Orange', function(data) {
//     console.log('Orange subscriber: ' + data);
// });

em.on('Orange', function(data) {
    console.log('Orange subscriber: ' + data);
});

em.emit('Apple', 'apple delivered');
em.emit('Orange', 'orange delivered');