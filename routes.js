var authHandler       = require('./handlers/auth'),
    userHandler       = require('./handlers/user'),
    restaurantHandler = require('./handlers/restaurant'),
    dealHandler       = require('./handlers/deal'),
    aboutHandler      = require('./handlers/about'),
    feedbackHandler   = require('./handlers/feedback')

exports.init = function (app) {
    app.post('/auth', authHandler.generateToken);
    //app.post('/user', authHandler.authorize, userHandler.addUser);
    app.post('/createuser', userHandler.createUser);


    //app.get('/allrestaurants', restaurantHandler.getAllRestaurants);

/*
    app.get('/:restaurant', restaurantHandler.getRestaurantDetails);
*/
    app.put('/:restaurant', restaurantHandler.editRestaurantDetails);
    //see if put acts differently if already exists

/*

    app.put('/:user/:restaurant', ); //add or remove restaurant from feed

    app.get('/:restaurant/:deal_id', dealHandler.getDeal);
    app.put('/:restaurant/:deal_id', dealHandler.editDeal);

    app.get('/deal', dealHandler.getTypeDeals);
    app.get('/:user/dealfeed', dealHandler.getDealFeed);
*/

    app.get('/about', aboutHandler.getAboutAddress);
    app.get('/feedback', feedbackHandler.getFeedbackAddress);

/*
    app.put('/:user/:deal_id', ); //add or remove deal from bookmarks
    app.get('/:user/bookmarks');
*/
    


};
