'use strict';
const jwt = require('jsonwebtoken');
const Professor = require('../models/Professor');

exports.gerarToken = async(data) => {
    return jwt.sign(data, global.SALT_KEY, { expiresIn: '7d' });
}

exports.decodificarToken = async(token) => {
    var data = await jwt.verify(token, global.SALT_KEY);
    return data;
}

exports.autorizar = function(req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (!token) {
        res.status(401).json({
            message: 'Acesso Restrito'
        });
    } else {
        jwt.verify(token, global.SALT_KEY, function(error, decoded) {
            if (error) {
                res.status(401).json({
                    message: 'Token Invalido'
                });
            } else {
                next();
            }
        });
    }
};

exports.verificarProfessor =  function(req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (!token) {
        res.status(401).json({
            message: 'Token Invalido: você não enviou o token'
        });
    } else {
        jwt.verify(token, global.SALT_KEY, async (error, decoded) =>{
            if (error) {
                res.status(401).json({
                    message: 'Token Invalido'
                });
            } else {
                const professor = await Professor.findById(decoded._id)
   
                if (professor) {
                    next();
                } else {
                    res.status(403).json({
                        message: 'Esta funcionalidade e restrita para professores'
                    });
                }
            }
        });
    }
};