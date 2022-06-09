var events = require('events');
var Event = events.EventEmitter;
var ee = new Event();
ee.on('data', function(closed) {
    console.log(closed);
});

setInterval(function() {
    ee.emit('data', Date.now());
}, 500);