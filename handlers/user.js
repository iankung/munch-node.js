var app        = require('../app'); //get main instance of express app
var models     = app.get('models'); //get models from main instance of express app (set in app.js)
var sequelize  = require('../models/index').sequelize; //initialize sequelize connection to db


exports.addUser = function (req, res) {
    //Do something to save the data for a new user
    
    var email = req.body.email;
    var password = req.body.password;


    res.send(200, {'result': 'success'});
};
