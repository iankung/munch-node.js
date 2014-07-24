module.exports = function(sequelize, DataTypes) {
    return sequelize.define('User', {
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        token: DataTypes.STRING,
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

