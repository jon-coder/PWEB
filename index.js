var text = require('./modulo1');
var app = require('./app/config/server')

app.listen(3000, function() {
    console.log('Server with express has been load!');
    console.log(text)
});