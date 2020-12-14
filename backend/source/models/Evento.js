const mongoose = require('mongoose');

const EventoSchema = new mongoose.Schema({
    nome: String,
    data: Date,
    professor: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Professor'
    },
    descricao: String,
    localizacao: {
        latitude: Number,
        longitude: Number,
    },
    alunos: [mongoose.Schema({
        aluno:{
            type: mongoose.Schema.Types.ObjectId, ref: 'Aluno'
        },
        presente: {
            type: mongoose.Schema.Types.Boolean,
            default: false
        },
        nome: {
            type: mongoose.Schema.Types.String
        }   
    },{_id:false})]
});

module.exports = mongoose.model('Evento', EventoSchema );