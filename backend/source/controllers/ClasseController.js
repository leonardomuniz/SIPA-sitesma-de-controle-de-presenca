const Classe = require('../models/Classe');

module.exports = {
    async listar(req, res) {
        try {
            const classe = await Classe.find();

            return res.json(classe);
        } catch (erro) {
            return res.json({ erro: erro.message });
        };

    },


    async armazenar(req, res) {
        try {
            const { codigo } = req.body;

            const classe_existe = await Classe.findOne({ codigo: codigo });

            if (!classe_existe) {
                const classe = await Classe.create(req.body);

                return res.json(classe);
            } else {
                return res.json({ message: "Esta classe já foi cadastrado!" });
            }

        } catch (erro) {
            return res.json({ erro: erro.message });
        };
    },


    async atualizar(req, res) {
        try {
            const { _id } = req.params;

            const classe_existe = await Classe.findOne({ _id });

            if (!classe_existe) {
                return res.json({ message: "Esta classe ainda não foi cadastrado" });
            } else {
                const classe = await Classe.findOneAndUpdate(
                    { _id: req.params._id },
                    { $set: req.body },
                    { runValidators: true }
                );

                return res.json(classe);
            };

        } catch (erro) {
            return res.json({ erro: erro.message });
        };
    },


    async deletar(req, res) {
        try {
            const { _id } = req.params;

            const classe_existe = await Classe.findOne({ _id });

            if (!classe_existe) {
                return res.json({ message: "Esta classe ainda não foi cadastrado" });
            } else {
                const classe = await Classe.findByIdAndDelete({
                    _id: req.params._id
                });

                return res.json(classe);
            };
        } catch (erro) {
            return res.json({ erro: erro.message });
        };
    },


    async mostrar_classe(req, res) {
        try {
            const classe = await Classe.findOne({
                codigo: req.params.codigo
            }).populate('alunos.aluno', 'nome');

            return res.json(classe);
        } catch (erro) {
            return res.json({ erro: erro.message });
        };
    }

};