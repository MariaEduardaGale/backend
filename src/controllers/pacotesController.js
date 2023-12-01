const db = require('../database/db');   

const Joi = require('joi');

const pacoteSchema = ({
	id_pacote: Joi.string().required(),
	nome: Joi.string().required(),
	qtde_sessao: Joi.string().required(),
	observacao: Joi.string().required(),
	valor_pacote: Joi.string().required(),
    id_servico: Joi.string().required(),
}); 

   