var Sequelize = require('sequelize');

var sequelize = new Sequelize('munchdb', 'munchdbuser', 'munchdbdb*', {
    host: "munchdb.cfa4hihgeaav.us-west-1.rds.amazonaws.com",
    dialect: "mysql",
    port: 3306, 
});


//Defining model attribute and associations
var User = sequelize.define(
    'User',
    {
        email: { type: Sequelize.STRING },
        password: { type: Sequelize.STRING },
       // coordinates: { type: Sequelize.STRING },
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
    },
    {
        freezeTableName:true,
        underscored: true,
    }

);




var Dish = sequelize.define(
    'Dish',
    {
        name: { type: Sequelize.STRING },
        photo_path: { type: Sequelize.STRING },
        description: { type: Sequelize.STRING },
        meal_type: {type: Sequelize.STRING},
        extra: {type: Sequelize.STRING},
        on_off: {type: Sequelize.BOOLEAN},
        //rating?
    },
    {
        freezeTableName:true,
        underscored: true,
    }

);


var Quickdeal = sequelize.define(
    'Quickdeal',
    {
        description: { type: Sequelize.STRING },
        end_date: { type: Sequelize.DATE },
        photo_path: { type: Sequelize.STRING },
        //Start date is date created, auto created attribute by Sequelize
    },
    {
        freezeTableName:true,
        underscored: true,
    }

);



var Restaurant = sequelize.define(
    'Restaurant',
    {
        name: { type: Sequelize.STRING },
        address: { type: Sequelize.STRING },
        coordinates: { type: Sequelize.STRING },
        phone: {type: Sequelize.STRING},
        ethnicity: {type: Sequelize.STRING},
        manager_code: {type: Sequelize.STRING},
        website: {type: Sequelize.STRING},
        delivery: {type: Sequelize.BOOLEAN},
        on_off: {type: Sequelize.BOOLEAN},
        //rating?
    },
    {
        freezeTableName:true,
        underscored: true,
    }

);



var Bookmark = sequelize.define(
    'Bookmark',
    {},
    {
        freezeTableName:true,
        underscored: true,
    }

);


//Model Associations
User.hasMany(Review, { as: 'Reviews' });
User.hasMany(Restaurant, { as: 'Restaurants' });
User.hasMany(Bookmark, { as: 'Bookmarks' });

Review.belongsTo(User, { as: 'User' });
Review.belongsTo(Dish, { as: 'Dish' });

Dish.belongsTo(Restaurant, { as: 'Restaurant' });
Dish.hasMany(Review, { as: 'Reviews' });

Quickdeal.belongsTo(Restaurant, { as: 'Restaurant' });
Quickdeal.hasMany(Bookmark, { as: 'Bookmarks' });

Restaurant.belongsTo(User, { as: 'Owner' });
Restaurant.hasMany(Quickdeal, { as: 'Quickdeals' });
Restaurant.hasMany(Dish, { as: 'Dishes' });

Bookmark.belongsTo(User, { as: 'User' });
Bookmark.belongsTo(Dish, { as: 'Dish' });
Bookmark.belongsTo(Quickdeal, { as: 'Quickdeal' });


//During sync Sequelize checks if the table exists, 
//if not it will create for you. Again sync is optional, 
//if you have all your tables created already you don’t 
//have to sync models. However, it will first execute the
//rest of the code in the script below before creating 
//a missing table

var chainer = new Sequelize.Utils.QueryChainer;
chainer.add(User.sync());
chainer.add(Dish.sync());
chainer.add(Review.sync());
chainer.add(Quickdeal.sync());
chainer.add(Restaurant.sync());
chainer.add(Bookmark.sync());

chainer
    .run()
    .on('success', function () {
        //all models are ready
    })
    .on('error', function (e) {
        console.log('Something went wrong!', e)
    });




// Code Above: In Sequelize any database operation fires 
// success or failure events. We use these events and only
// try to add a user record on success. During this case 
// we are just going live in the perfect world, there are 
// no database failures! Hence we are not going to worry
// about rollback or transactions. 

exports.User = User;
exports.Dish = Dish;
exports.Review = Review;
exports.Quickdeal = Quickdeal;
exports.Restaurant = Restaurant;
exports.Bookmark = Bookmark;
