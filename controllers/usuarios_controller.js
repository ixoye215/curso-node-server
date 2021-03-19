const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {

    // const query = req.query;
    const {q, nombre = 'no name', apikey} = req.query;

    res.json({
        msg: 'get APi- controlador',
        q,
        nombre,
        apikey,
    });
}

const usuariosPost = (req, res = response) => {

    const body = req.body;

    res.json({
        msg: 'post APi- controlador',
        body
    });
}
const usuariosPut = (req, res = response) => {
    const {id} = req.params;

    res.json({
        msg: 'put APi- controlador',
        id
    });
}
const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete APi- controlador'
    });
}
const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch APi- controlador'
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
}