var Sequelize = require('sequelize');
var config    = require('config').munchdb;

//ordering of parameters matter, i think...check model.js for sequelize
//initialization example
var sequelize = new Sequelize(
    config.name,
    config.username,
    config.password,
    config.options
);

var models = [
    'user',
    'bookmark',
    'follow',
    'deal',
    'restaurant'
];

models.forEach(function(model) {
    module.exports[model] = sequelize.import(__dirname + '/' + model);
});

//defining relationships, fill in with models
(function(m) {
    m.PhoneNumber.belongsTo(m.User);
    m.Task.belongsTo(m.User);
    m.User.hasMany(m.Task);
    m.User.hasMany(m.PhoneNumber);
})(module.exports);


// export connection
module.exports.sequelize = sequelize;



