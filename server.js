var express = require('express');



var app = express();
app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

require('./routes')(app);

/*app.listen(3000, function(){
    console.log('listening to 3000');
})*/


