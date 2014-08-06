var app        = require('../app'); //get main instance of express app
var models     = app.get('models'); //get models from main instance of express app (set in app.js)
var sequelize  = require('../models/index').sequelize; //initialize sequelize connection to db
var Sequelize  = require('sequelize');

User = models.User;

exports.createUser = function (req, res) {
    
    user = User.build({
        email   : req.body.email,
        password: req.body.password,
    })
    
    user
        .save()
        .complete(function(err) {
            if (!!err) {
                res.status(401).json( {'message': 'error'});
            } else {
                res.send(200, {'message': 'success'});
            }
        })
};



/*
 *
//test build examples

user = User.build({
  email: 'ianwkung@gmail.com',
  password:'pass',
  token: '123'
})


user
  .save()
  .complete(function(err) {
    if (!!err) {
      console.log('The instance has not been saved:', err)
    } else {
      console.log('We have a persisted instance now')
    }
  })

*/
