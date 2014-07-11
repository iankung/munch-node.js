var orm = require("path/to/lib/model")
  , Seq = orm.Seq();


module.exports = {
    model:{
        //id: Seq.INTEGER,
        restaurant_key: Seq.INTEGER,
        description: Seq.STRING,
        start_date: Seq.DATE,
        end__date: Seq.DATE,
        photo_address: Seq.STRING,
        //post date time
    },
    relations:{
       hasMany:"World" 
    },
    options:{
        freezeTableName: true
    }
}
