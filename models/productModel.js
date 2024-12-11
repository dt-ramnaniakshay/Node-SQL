const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dbMySQL')

const Product = sequelize.define(
  'Product',
  {
    // Model attributes are defined here
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement: true,
    },
    p_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    p_desc: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue : "demo description",
    },
    p_qty: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    p_price : {
        type : DataTypes.INTEGER,
        allowNull: false,

    }
  },
);
//syncing our model to dbs
(async () => {

    try {
        await Product.sync({ force: true });
        console.log('The table for the User model was just (re)created!');
    } catch (error) {
        console.log("Error in synchronizing table",error.message)
    }

})();


module.exports = Product