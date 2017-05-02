var mongoose = require("mongoose");
var config = require("./config");

var conenctionString = config.connection;

var mongodb = function() {
    mongoose.connect(conenctionString);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log("Database connected...");
    });
    
}

module.exports = mongodb;