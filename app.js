var express    = require('express');
var app        = express();
var mysql      = require('mysql');
var routes     = require('./routes');
var bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
})); 

//next two lines replaces app.use(express.bodyParser());
app.use(express.urlencoded())
app.use(express.json())


routes.init(app);


app.listen(8080);
console.log('Listening on port 8080');



