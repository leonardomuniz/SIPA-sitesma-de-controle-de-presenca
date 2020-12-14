const Professor = require('../models/Professor');
const Evento = require('../models/Evento');

module.exports = {
    async listar(req, res) {
        try {
            const professor = await Professor.find();

            return res.json(professor);
        } catch (erro) {
            return res.json({ erro: erro.message });
        };
    },


    async armazenar(req, res) {
        try {
            const { nome } = req.body;

            const professor_existe = await Professor.findOne({ nome: nome });

            if (!professor_existe) {
                const professor = await Professor.create(req.body);

                return res.json(professor);
            } else {
                return res.json({ message: "Este professor(a) já foi cadastrado!" });
            };

        } catch (err) {
            return res.json({ err: err.message });
        };

    },


    async atualizar(req, res) {
        try {
            const { _id } = req.params;

            const professor_existe = await Professor.findOne({ _id });

            if (!professor_existe) {
                return res.json({ message: "Este professor(a) ainda não foi cadastrado" });
            } else {
                const professor = await Professor.findOneAndUpdate({ _id: req.params._id }, { $set: req.body }, { runValidators: true });

                return res.json(professor);
            };

        } catch (err) {
            return res.json({ err: err.message });
        };

    },


    async mostrar_professor(req, res) {
        try {
            const professor = await Professor.findOne({ _id: req.params._id });

            return res.json(professor)
        } catch (err) {
            return res.json({ err: err.message });
        }

    },


    async listar_eventos_professor(req, res) {
        try {
            const eventos = await Evento.find({ professor: req.params._id });

            return res.json(eventos);
        } catch (err) {
            return res.json({ err: err.message });
        }

    },

};