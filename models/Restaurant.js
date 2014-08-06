module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Restaurant', {
        id:{
                     type: DataTypes.INTEGER,
                     autoIncrement: true,
                     primaryKey: true,
        },
        name:{       
                     type: DataTypes.STRING,
                     unique: 'compositeIndex',
        },
        state:{      
                     type: DataTypes.STRING,
                     unique: 'compositeIndex',
                     
        },
        city:{
                     type: DataTypes.STRING,
                     unique: 'compositeIndex',
        },
        street_address:{
                     type: DataTypes.STRING,
                     unique: 'compositeIndex',
        },

        coordinates:     DataTypes.STRING,
        phone:           DataTypes.STRING,
        hours:           DataTypes.STRING,
        type:            DataTypes.STRING,
        activation_code: DataTypes.STRING,
        website:         DataTypes.STRING,
        delivery:        DataTypes.BOOLEAN,
        on_off:          DataTypes.BOOLEAN,
    }, 

    {
        freezeTableName: true,
    },
    
    {
            instanceMethods: {
                methodname: function() {

                }
            }
       });
};
