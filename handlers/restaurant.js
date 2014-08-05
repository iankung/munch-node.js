var app        = require('../app'); //get main instance of express app
var models     = app.get('models'); //get models from main instance of express app (set in app.js)
var sequelize  = require('../models/index').sequelize; //initialize sequelize connection to db
var Sequelize  = require('sequelize') //require sequelize node module

Restaurant = models.Restaurant;

//returns all restaurant names in database
exports.getAllRestaurants = function (req, res) {
    
};

//create a unique restaurant (primary key ensures unique)
exports.createRestaurant = function (req, res) {
    restaurant = Restaurant.build({
        name:            req.body.name,
        state:           req.body.state,
        city:            req.body.city,
        street_address:  req.body.streetaddress,
        coordinates:     req.body.coordinates,
        phone:           req.body.string,
        hours:           req.body.string,
        type:            req.body.string,
        activation_code: req.body.string,
        website:         req.body.string,
        delivery:        req.body.boolean,
        on_off:          req.body.boolean,
    })
    
    restaurant
        .save()
        .complete(function(err) {
            if (!!err) {
                res.json(401, {'message': 'error'});
            } else {
                res.json(200, {'message': 'success'});
            }
        })
};

//create a restaurant activation key
exports.generateActivationKey = function (req, res) {
    var key = "";
    var possible = "abcdefghijklmnopqrstuvwxyz0123456789";

    for (var i=0; i<5; i++) 
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    //code to store to restaurant table

}
