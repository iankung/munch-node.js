module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Sub', {
        user_key: DataTypes.STRING,
        deal_key: DataTypes.STRING,
    }, {
            instanceMethods: {
                methodname: function() {

                }
            }
       });
};
