const mongoose = require('mongoose');

const AlunoSchema = new mongoose.Schema({
    nome: String,
    matricula: {
        type: String,
        maxlength: 4,
        minlength: 4
    },
    senha: String,

});

module.exports = mongoose.model('Aluno', AlunoSchema );