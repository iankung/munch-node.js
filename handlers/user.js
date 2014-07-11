exports.addUser = function (req, res) {
    //Do something to save the data for a new user
    
    var email = req.body.email;
    var password = req.body.password;


    res.send(200, {'result': 'success'});
};
