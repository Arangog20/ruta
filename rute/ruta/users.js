const express = require('express');
const router = express.Router();
const { UserModel, EmpresasModel } = require("../models/user.js");

//crear  ruta de crear usuario
router.post('/users', (req, res) => {
    res.send("crear usuario")
});

module.exports =  router;

