var express = require('express');



var app = express();
app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

require('./routes')(app);



var port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('Server', process.pid, 'listening on', port)
})


//module.exports = app;
