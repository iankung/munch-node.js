module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Deal', {
        restaurant_key: DataTypes.STRING,
        description:    DataTypes.STRING,
        start_day:      DataTypes.STRING,
        start_time:     DataTypes.STRING,
        end_day:        DataTypes.STRING,
        end_time:       DataTypes.STRING,
        photo:          DataTypes.STRING,
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
