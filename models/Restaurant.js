module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Restaurant', {
        name:        DataTypes.STRING,
        address:     DataTypes.STRING,
        coordinates: DataTypes.STRING,
        phone:       DataTypes.STRING,
        hours:       DataTypes.STRING,
        manager_1:   DataTypes.STRING,
        manager_2:   DataTypes.STRING,
        manager_3:   DataTypes.STRING,
        ethnicity:   DataTypes.STRING,
        access:      DataTypes.STRING,
        website:     DataTypes.STRING,
        delivery:    DataTypes.BOOLEAN,
        on_off:      DataTypes.BOOLEAN,
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
