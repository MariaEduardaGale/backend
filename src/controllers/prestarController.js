const db = require('../database/db');   

const Joi = require('joi');

const prestarSchema = ({
    id_prestar: Joi.string().required(),
    status_prestar: Joi.string().required(),
    situacao: Joi.string().required(),
    id_compromisso: Joi.string().required(),
    id_servico: Joi.string().required(),
});


    