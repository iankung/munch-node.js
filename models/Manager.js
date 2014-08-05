
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Manager', {
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
