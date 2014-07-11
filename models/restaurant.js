var orm = require("path/to/lib/model")
  , Seq = orm.Seq();


module.exports = {
    model:{
        //id: Seq.INTEGER,
        name: Seq.STRING,
        address: Seq.STRING,
        coordinates: ,
        phone: Seq.STRING,
        hours: ,
        manager_1_user_key: Seq.INTEGER,
        manager_2_user_key: Seq.INTEGER,
        manager_3_user_key: Seq.INTEGER,
        ethnicity: Seq.STRING,
        access_code: Seq.STRING,
        website: Seq.STRING,
        delivery: Seq.BOOLEAN,
        on_off: Seq.BOOLEAN 
        
    },
    relations:{
       hasMany:"World" 
    },
    options:{
        freezeTableName: true
    }
}
