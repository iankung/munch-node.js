var orm = require("path/to/lib/model")
  , Seq = orm.Seq();

module.exports = {
    model:{
        //id: Seq.INTEGER,
        name: Seq.STRING,
        restaurant_key: Seq.INTEGER,
        photo_address: Seq.STRING,
        description: Seq.STRING,
        meal_type: Seq.STRING,	
        extra: Seq.STRING,
        on_off: Seq.BOOLEAN,
        //rating
    },
    relations:{
       hasMany:"World" 
    },
    options:{
        freezeTableName: true
    }
}
