const Evento = require('../models/Evento');
const Professor = require('../models/Professor');

module.exports = {
    async listar(req, res) {
        try {
            const evento = await Evento.find();

            return res.json(evento);
        } catch (erro) {
            return res.json({ erro: erro.message });
        };
    },


    async armazenar(req, res) {
        try {
            const { nome } = req.body;

            const evento_existe = await Evento.findOne({ nome: nome });

            if (!evento_existe) {
                const evento = await Evento.create(req.body);

                return res.json(evento);
            } else {
                return res.json({ message: "Este evento já foi cadastrado!" });
            };
            
        } catch (err) {
            return res.json({ err: err.message });
        };

    },


    async atualizar(req, res) {
        try {

                const evento = await Evento.findByIdAndUpdate({ _id: req.params._id },  req.body );

                console.log(evento)
                return res.json(evento);
         

        } catch (erro) {
            console.log(erro)
            return res.json({ erro: erro.message });
        };
    },


    async deletar(req, res) {
        try {
            const { _id } = req.params;

            const professor_existe = await Professor.findOne({ _id });

            if (!professor_existe) {
                return res.json({ message: "Este professor(a) ainda não foi cadastrado" });
            } else {
                const eventos = await Evento.findByIdAndDelete({ _id: req.params._id });

                return res.json(eventos);
            };

        } catch (err) {
            return res.json({ err: err.message });
        };
    },


    async mostrar_evento(req, res) {
        try {
            const eventos = await Evento.findOne({ _id: req.params._id }).populate('alunos.aluno', 'nome');

            return res.json(eventos)
        } catch (err) {
            return res.json({ err: err.message });
        };
    },


    async marcar_presenca_aluno(req, res) {
        try {
            const evento = await Evento.findOneAndUpdate({
                _id: req.params.evento_id,
                alunos: {
                    $elemMatch: {
                        aluno: req.params._id
                    }
                }
            }, {
                $set: {
                    "alunos.$.presente": true
                }
            }, { runValidators: true });

            return res.json(evento)
        } catch (erro) {
            return res.json({ erro: erro.message });
        };
    }

};