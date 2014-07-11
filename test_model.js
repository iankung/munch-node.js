var Sequelize = require('sequelize');

var sequelize = new Sequelize('test', 'munchdbuser', 'munchdbdb*', {
    host: "munchdb.cfa4hihgeaav.us-west-1.rds.amazonaws.com",
    dialect: "mysql",
    port: 3306,
});



var User = sequelize.define(
    'User',
    {
        email: { type: Sequelize.STRING },
        coordinates: { type: Sequelize.STRING },
        
    },
    {
        freezeTableName:true,
        underscored: true,
    }
);


var Review = sequelize.define(
    'Review',
    {
        rating: { type: Sequelize.INTEGER },
        comment: { type: Sequelize.STRING },
    }
);


User.hasMany(Review, { as: 'Reviews' });



var chainer = new Sequelize.Utils.QueryChainer;
chainer.add(User.sync());
chainer.add(Review.sync());



    User.create({
      email: 'foo',
      coordinates: 'bar',
    });
