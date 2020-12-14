const express = require('express');

const AlunoController = require('./controllers/AlunoController');
const Autentica = require('./services/autentify');
const EventoController = require('./controllers/EventoController');
const ProfessorController = require('./controllers/ProfessorController');
const AutenticacaoController = require('./controllers/AutenticacaoController');
const ClasseController = require('./controllers/ClasseController');

const router = express.Router();

router.get('/',(req, res) => res.json({msg:'Olá'}));
router.get('/alunos', AlunoController.listar);
router.get('/aluno/:_id', AlunoController.mostrar_aluno);
router.get('/aluno/:_id/eventos_presente',  AlunoController.listar_evento_presente);
router.get('/aluno/:_id/eventos_ausente',  AlunoController.listar_evento_ausente);
router.get('/professor', ProfessorController.listar);
router.get('/professor/:_id/eventos',  ProfessorController.listar_eventos_professor);
router.get('/professor/:_id', ProfessorController.mostrar_professor);
router.get('/evento', EventoController.listar);
router.get('/evento/:_id', EventoController.mostrar_evento);
router.get('/classe', ClasseController.listar);
router.get('/classe/:codigo', ClasseController.mostrar_classe);

router.post('/alunos/cadastrar',  AlunoController.armazenar);
router.post('/professor/cadastrar',   ProfessorController.armazenar);
router.post('/evento/cadastrar', EventoController.armazenar);
router.post('/classe/cadastrar', ClasseController.armazenar);
router.post('/autenticacao', AutenticacaoController.autenticar);

router.put('/aluno/atualizar/:_id', AlunoController.atualizar);
router.put('/aluno/atualizar/:_id/marcar_presenca/:evento_id', EventoController.marcar_presenca_aluno);
router.put('/professor/atualizar/:_id',  ProfessorController.atualizar);
router.put('/evento/atualizar/:_id',  EventoController.atualizar);
router.put('/classe/atualizar/:_id', ClasseController.atualizar);

router.delete('/classe/deletar/:_id', ClasseController.deletar);
router.delete('/professor/eventos/deletar/:_id', EventoController.deletar);


module.exports = router;



