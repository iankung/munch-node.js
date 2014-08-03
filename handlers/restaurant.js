var app        = require('../app'); //get main instance of express app
var models     = app.get('models'); //get models from main instance of express app (set in app.js)
var sequelize  = require('../models/index').sequelize; //initialize sequelize connection to db
var Sequelize  = require('sequelize') //require sequelize node module








//returns all restaurant names in database
exports.getAllRestaurants = function (req, res) {
    
};

//create a unique restaurant (primary key ensures unique)
exports.createRestaurant = function (req, res) {
    


};
