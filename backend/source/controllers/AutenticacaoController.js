const Professor = require('../models/Professor');
const Aluno = require('../models/Aluno');
const autenticacao = require('../services/autentify');



exports.autenticar = async (req, res, next) => {
    const professor = await Professor.findOne(req.body);
    const aluno = await Aluno.findOne(req.body);

    if(aluno == null && professor == null || req.body == ''){
        return res.status(400).json({erro:'O pai ta off'})

    }else{

        const dados = {
            _id: (aluno)?aluno._id:professor._id,
            nome: (aluno)?aluno.nome:professor.nome,
            matricula: (aluno)?aluno.matricula:professor.matricula
        };
    
        const token = await autenticacao.gerarToken(dados);
    
        return res.status(200).json({
            token:token,
            dados:dados
        });
    };

    //console.log(aluno);
    //console.log(professor);

};