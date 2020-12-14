const Aluno = require('../models/Aluno');
const Evento = require('../models/Evento');

module.exports = {
    async listar(req, res) {
        try{
            const aluno = await Aluno.find();

            return res.json(aluno);
        }catch(erro){
            return res.json({ err: err.message });
        };

    },

    async armazenar(req, res) {
        try {
            const {nome} = req.body;

            const aluno_existe = await Aluno.findOne({nome: nome});

            if(!aluno_existe){
                const aluno = await Aluno.create(req.body);
                return res.json(aluno);
            }else{
                return res.json({menssagem: "Este aluno(a) já foi cadastrado !"});
            };

        } catch (err) {
            return res.json({ err: err.message });
        };

    },

    async atualizar(req, res) {
        try{
            const {_id} = req.params;

            const aluno_existe = await Aluno.findOne({_id});

            if(!aluno_existe){
                return res.json({menssagem: "Este aluno(a) ainda não foi cadastrado !"});
            }else{
                const aluno = await Aluno.findOneAndUpdate({ _id: req.params._id }, { $set: req.body }, { runValidators: true });

                return res.json(aluno);
            };

        }catch(erro){
            return res.json({erro:erro.message});
        };

    },


    async mostrar_aluno(req, res) {
        try {
            const aluno = await Aluno.findOne({ _id: req.params._id });

            return res.json(aluno);
        } catch (err) {
            return res.json({ err: err.message });
        };

    },

    async listar_evento_presente(req, res) {
        const evento = await Evento.find({
            alunos:
            {
                $elemMatch:
                    { aluno: req.params._id, presente: true }
            }
        });
        return res.json(evento);
    },

    async listar_evento_ausente(req, res) {
        const evento = await Evento.find({
            alunos:
            {
                $elemMatch:
                    { aluno: req.params._id, presente: false }
            }
        });

        return res.json(evento);
    }
};


