module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Sub', {
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
