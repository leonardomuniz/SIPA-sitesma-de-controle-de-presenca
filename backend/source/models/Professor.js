const mongoose = require('mongoose');

const ProfessorSchema = new mongoose.Schema({
    nome: String,
    matricula: {
        type: String,
        maxlength: 6,
        minlength: 6
    },
    senha: String,

});

module.exports = mongoose.model('Professor', ProfessorSchema );