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
    'sub',
    'deal',
    'restaurant'
];

models.forEach(function(model) {
    module.exports[model] = sequelize.import(__dirname + '/' + model);
});

//defining relationships, fill in with models
(function(m) {

    //belongs to
    m.bookmark.belongsTo(m.user);
    m.sub.belongsTo(m.user);
    m.restaurant.belongsTo(m.user);

    m.bookmark.belongsTo(m.deal);

    m.deal.belongsTo(m.restaurant);
    m.sub.belongsTo(m.restaurant);

    //has manys
    m.user.hasMany(m.bookmark);
    m.user.hasMany(m.sub);
    m.user.hasMany(m.restaurant);

    m.restaurant.hasMany(m.deal);
    m.restaurant.hasMany(m.sub);

})(module.exports);


// export connection
module.exports.sequelize = sequelize;



