var orm = require("path/to/lib/model")
  , Seq = orm.Seq();


modue.exports = {
    model:{
        //id: Seq.INTEGER,
        user_key: Seq.INTEGER,
        quickdeal_key: Seq.INTEGER
    },
    relations:{
       hasMany:"World" 
    },
    options:{
        freezeTableName: true
    }
}
