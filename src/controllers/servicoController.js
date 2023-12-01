const db = require('../database/db');   

const Joi = require('joi');

const servicoSchema = ({
    id_servico: Joi.string().required(),
    nome_servico: Joi.string().required(),
    valor_servico: Joi.string().required(), 
    tempo: Joi.string().required(),
    imagem: Joi.string().required(),
    tipo: Joi.string().required(), 
    forma_pagto: Joi.string().required(),
}); 


  
