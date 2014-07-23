var app        = require('../app'); //get main instance of express app
var models     = app.get('models'); //get models from main instance of express app (set in app.js)
var sequelize  = require('../models/index').sequelize; //initialize sequelize connection to db


exports.generateToken = function (req, res) {

    var email, password;
    email = req.body.email
    password = req.body.password
    
    if(email === 'foo' && password === 'bar'){
        res.send(200, {'token': "ABC123"});
    }
    else{
        res.send(401, {'message': 'Unauthorised'});
     }
};

exports.authorize = function(req, res, next) {
 
    var token;
 
    token = req.headers['auth-token'] || '';
    if(token !== "ABC123") {
        res.send(401, {'message': 'nice, Unauthorised'}); //try getting this unauthorized to show
    } 
    else {
        next();
    }
};

