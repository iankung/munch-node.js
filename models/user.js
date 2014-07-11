

//getting orm instance

var orm = require("path/to/lib/model")
  , Seq = orm.Seq();

//creating our module

module.exports = {
    model:{
        //id: Seq.INTEGER, if left out maybe auto creates?
        email: Seq.STRING,
        coordinates: 
    },
    relations:{
       hasMany:"World" 
    },
    options:{
        freezeTableName: true
    }
}
