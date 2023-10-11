const Sequelize = require('sequelize');
const sequelize = require('../util/database');
const expense = sequelize.define('expense', {
id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    expense: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: Sequelize.STRING,
    category: Sequelize.STRING
});
module.exports = expense;