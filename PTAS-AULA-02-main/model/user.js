const db = require('../config/connection');

const User = db.sequelize.define('users',{
    id: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    password:{
        type: db.Sequelize.STRING,
        allowNull:false
    },
    email:{
        type: db.Sequelize.STRING,
        allowNull:false
    }
    })
User.sync();
module.exports = User;