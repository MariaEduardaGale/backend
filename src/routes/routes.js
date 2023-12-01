const express = require('express'); 

const path = require('path'); 

const router = express.Router()

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + "./../pages/index.html"));
})

const pessoaController = require('../controllers/pessoaController');

router.get('/pessoa', pessoaController.listarPessoas);

router.get('/pessoa/:id_pessoa', pessoaController.buscarPessoa);

router.post('/pessoa', pessoaController.adicionarPessoa);

router.patch('/pessoa/:id', pessoaController.atualizarPessoa);

router.delete('/pessoa/:id', pessoaController.deletarPessoa);


// const comprimissoController = require('../controllers/compromissoController'); 

// router.get('/compromisso', regiaoController.listarRegiao);

// router.get('/compromisso/:id', regiaoController.buscarRegiao);

// router.post('/compromisso', regiaoController.adicionarRegiao);

// router.patch('/compromisso/:id', regiaoController.atualizarRegiao);

// router.delete('/compromisso/:id', regiaoController.deletarRegiao);


// const pacotesController = require('../controllers/pacotesController'); 

// router.get('/pacotes', regiaoController.listarRegiao);

// router.get('/pacotes/:id', regiaoController.buscarRegiao);

// router.post('/pacotes', regiaoController.adicionarRegiao);

// router.patch('/pacotes/:id', regiaoController.atualizarRegiao);

// router.delete('/pacotes/:id', regiaoController.deletarRegiao);


// const prestarController = require('../controllers/prestarController'); 

// router.get('/prestar', regiaoController.listarRegiao);

// router.get('/prestar/:id', regiaoController.buscarRegiao);

// router.post('/prestar', regiaoController.adicionarRegiao);

// router.patch('/prestar/:id', regiaoController.atualizarRegiao);

// router.delete('/prestar/:id', regiaoController.deletarRegiao);


// const servicoController = require('../controllers/servicoController'); 

// router.get('/servico', regiaoController.listarRegiao);

// router.get('/servico/:id', regiaoController.buscarRegiao);

// router.post('/servico', regiaoController.adicionarRegiao);

// router.patch('/servico/:id', regiaoController.atualizarRegiao);

// router.delete('/servico/:id', regiaoController.deletarRegiao);






module.exports = router; 