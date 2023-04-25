const { DataTypes } = require('sequelize')
const db = require('../database/config')

const Usuario = db.define('Usuario',{
    nombre: {type: DataTypes.STRING},
    apellidos: {type: DataTypes.STRING},
    usuario: {type: DataTypes.STRING},
    pass: {type: DataTypes.STRING},
    archivo: {type: DataTypes.STRING},
})

module.exports = Usuario