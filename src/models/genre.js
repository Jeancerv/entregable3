const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection'); 
   
const genre = sequelize.define('genre', {
    
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
});

module.exports = genre;