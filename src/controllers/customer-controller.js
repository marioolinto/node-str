'use strict';

const repository = require('../repositories/customer-repository');


exports.get = async (req, res, next) => {
    try {
        let res = await repository.get();
        res.status(201).send(data);    
    } catch (e) {
        res.status(400).send(e); 
    }
}

exports.post =  async (req, res, next) => {
    try {
        let res = await repository.create(req.body);
        res.status(201).send({ message: 'Customer cadastrado com sucesso ' });    
    } catch (error) {
        res.status(400).send({ 
            message: 'Falha ao cadastrar o customer ',  data: e 
        });    
    }                                    
};
