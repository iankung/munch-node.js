var orm = require("path/to/lib/model")
  , Seq = orm.Seq();

module.exports = {
    model:{
        //id: Seq.INTEGER,
        user_key: Seq.INTEGER,
        dish_key: Seq.INTEGER
    },
    relations:{
       hasMany:"World" 
    },
    options:{
        freezeTableName: true
    }
}
