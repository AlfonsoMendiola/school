const { Sequelize } = require('sequelize')
//nombre bd, usuario, pass
const db = new Sequelize('escuelaingles', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = db