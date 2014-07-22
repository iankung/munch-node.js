var express    = require('express');
var app        = module.exports = express();
var mysql      = require('mysql');

//setting models must come before setting routes
app.set('models', require('./models'));

var routes     = require('./routes');
var bodyParser = require('body-parser');


//var db         = require('./models');
//don't use require('./models') can cause multi connection to db
//
//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
})); 

//next two lines replaces app.use(express.bodyParser());
app.use(express.urlencoded())
app.use(express.json())

//example: use var User = app.get('models').User when you 
//need to require a class of the model in a controller instead
//of a direct import, this comment refers to app.set('models') at
//the top

routes.init(app);


app.get('models')
    .sequelize
    .sync({force: true})
    .complete(function(err){
        if(err){
            throw err[0]
        } 
        else{
            app.listen(8080);
            console.log('Listening on port 8080');
        }
    })




