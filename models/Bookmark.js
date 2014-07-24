module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Bookmark', {
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
