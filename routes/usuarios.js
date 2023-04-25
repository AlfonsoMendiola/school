const { Router } = require('express')
const { check } = require('express-validator')
const { validarCampos } = require('../middlewares/validarCampos')
const { usuarioPost, usuariosGet, usuarioGet, usuarioDelete } = require('../controllers/usuario')


const router = Router()

router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('apellidos', 'El nombre es obligatorio').not().isEmpty(),
    check('usuario', 'El nombre es obligatorio').not().isEmpty(),
    check('pass', 'El nombre es obligatorio').not().isEmpty(),
    validarCampos
], usuarioPost)

router.get('/', usuariosGet)

router.get('/:id', usuarioGet)

router.delete('/:id', usuarioDelete)

module.exports = router