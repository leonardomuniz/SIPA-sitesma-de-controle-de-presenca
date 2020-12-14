const mongoose = require('mongoose');

const ClasseSchema = new mongoose.Schema({
    codigo: Number,
    alunos: [mongoose.Schema({
        aluno:{
            type: mongoose.Schema.Types.ObjectId, ref: 'Aluno'
        },
        nome: {
            type: mongoose.Schema.Types.String
        }   
    },{_id:false})]
});

module.exports = mongoose.model('Classe', ClasseSchema );