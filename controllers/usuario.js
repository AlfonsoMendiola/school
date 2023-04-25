const Usuario = require('../models/usuario')
const bcryptjs = require('bcryptjs')
const { subirArchivo } = require('../helpers/subir-archivo')

const usuarioPost = async(req, res) => {
    const {body} = req
    console.log(body);
    try {

        console.log(req.files);
        const nombreArchivo = await subirArchivo(req.files, undefined, 'archivos')

        body.pass = bcryptjs.hashSync( body.pass, bcryptjs.genSaltSync() )
        body.archivo = nombreArchivo
        const usuario = await Usuario.create(body)

        res.json(usuario)

    } catch (error) {
        console.log(error);
        return res.status(500).json({msg: 'error inesperado', error})
    }
}


const usuariosGet = async(req, res) => {
    try {
        const usuarios = await Usuario.findAll({
            attributes: { exclude:['pass'] }
        })
        res.json(usuarios)
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg: 'error inesperado', error})
    }
}

const usuarioGet = async(req, res) => {
    try {
        const usuario = await Usuario.findByPk(req.params.id, {
            attributes: { exclude:['pass'] }
        })

        res.json(usuario)
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg: 'error inesperado', error})
    }
}


//borrado fisico
const usuarioDelete = async(req, res) => {
    try {
        const usuario = await Usuario.destroy({
            where: {id: req.params.id}
        })

        res.json({msg:'borrado correctamente'})
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg: 'error inesperado', error})
    }
}


module.exports = {
    usuarioPost,
    usuariosGet,
    usuarioGet,
    usuarioDelete
}