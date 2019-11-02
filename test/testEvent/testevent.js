var events = require('events');
var em = new events.EventEmitter();


//Subscribe for FirstEvent
em.on('FirstEvent', function (data) {
    console.log('***First subscriber: ' + data);
});

// Raising FirstEvent
em.emit('FirstEvent', 'my event message.');

