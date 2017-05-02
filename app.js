var express = require('express'),
    db = require('./config/mongoose'),
    bodyParser = require('body-parser');

db();

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json);

var port = process.env.PORT || 3000;

app.use('/', function(req, res) {
    console.log('Welome to my REST API!!');
});

app.listen(port, function() {
    console.log('Gulp is running my app on port : '+ port);
});

module.exports = app;
