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
    'User',
    'Bookmark',
    'Sub',
    'Deal',
    'Restaurant'
];

models.forEach(function(model) {
    module.exports[model] = sequelize.import(__dirname + '/' + model);
});

//defining relationships, fill in with models
(function(m) {

    //belongs to
    m.Bookmark.belongsTo(m.User);
    m.Sub.belongsTo(m.User);
    m.Restaurant.belongsTo(m.User);

    m.Bookmark.belongsTo(m.Deal);

    m.Deal.belongsTo(m.Restaurant);
    m.Sub.belongsTo(m.Restaurant);

    //has manys
    m.User.hasMany(m.Bookmark);
    m.User.hasMany(m.Sub);
    m.User.hasMany(m.Restaurant);

    m.Restaurant.hasMany(m.Deal);
    m.Restaurant.hasMany(m.Sub);

})(module.exports);


// export connection
module.exports.sequelize = sequelize;



