var authHandler       = require('./handlers/auth'),
    userHandler       = require('./handlers/user'),
    restaurantHandler = require('./handlers/restaurant'),
    dealHandler       = require('./handlers/deal'),
    aboutHandler      = require('./handlers/about'),
    feedbackHandler   = require('./handlers/feedback')

exports.init = function (app,router) {

   /*  
    router.route('/auth')
        .get(authHandler.generateToken)

    router.route('/user')
        .post(userHandler.createUser)
 
    router.route('/allrestaurants')
        .get(restaurantHandler.getAllRestaurants)

    router.route('/:restaurant')
        .get(restaurantHandler.getRestaurantDetails);

*/

    router.route('/createrestaurant')
        .post(restaurantHandler.createRestaurant);

/*
    app.get('/:restaurant', restaurantHandler.getRestaurantDetails);

    app.put('/:restaurant', restaurantHandler.editRestaurantDetails);
    //see if put acts differently if already exists

/*

    app.put('/:user/:restaurant', ); //add or remove restaurant from feed

    app.get('/:restaurant/:deal_id', dealHandler.getDeal);
    app.put('/:restaurant/:deal_id', dealHandler.editDeal);

    app.get('/deal', dealHandler.getTypeDeals);
    app.get('/:user/dealfeed', dealHandler.getDealFeed);
*/

    router.route('/about')
        .get(aboutHandler.getAboutAddress);

    router.route('/feedback')
        .get(feedbackHandler.getFeedbackAddress);



/*
    app.put('/:user/:deal_id', ); //add or remove deal from bookmarks
    app.get('/:user/bookmarks');
*/
    


};
