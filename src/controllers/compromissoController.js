const db = require('../database/db');

const Joi = require('joi');

const compromissoSchema = ({
    id_compromisso: Joi.string().required(),
    nome_cliente: Joi.string().required(),
    data_compromisso: Joi.string().required(),
    hora: Joi.string().required(),
    nome_servico: Joi.string().required(),
    id_pessoa: Joi.string().required(),
    status_compromisso: Joi.string().required(),
});


