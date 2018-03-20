'use strict';

const repository = require('../repositories/product-repository');


exports.get = async (req, res, next) => {
    try {
        var data = await repository.get()
        res.status(201).send(data);                        
    } catch (e) {
        res.status(400).send(e);
    }
    
}

exports.getBySlug = async (req, res, next) => {
    try {
        var data = await repository.getBySlug(req.params.slug)        
        res.status(201).send(data);        
    } catch (e) {
        res.status(400).send(e);
    }
    
}

exports.getById = async (req, res, next) => {
    try {
        var data = repository.getById(req.params.id)
        res.status(201).send(data);    
    } catch (e) {
        res.status(400).send(e);
    }
}

exports.getByTag = async (req, res, next) => {
    try {
        var data = await repository.getByTags(req.params.tag);
        res.status(201).send(data);    
    } catch (e) {
        res.status(400).send(e);
    }
}

exports.post =  async (req, res, next) => {
    try {
        var data = await repository.create(req.body);
        res.status(201).send({ message: 'Produto cadastrado com sucesso ' });    
    } catch (e) {
        res.status(400).send({ message: 'Falha ao cadastrar o produto ', data: e })
    }           
};

exports.put = async (req, res, next) => {
    try {
        repository.update(req.params.id, req.body);
        res.status(200).send({ message: 'Produto atualizado com sucesso! ' });        
    } catch (e) {
        res.status(400).send({ message: 'Falha ao cadastrar o produto! ', data: e });
    }          
};

exports.delete = async (req, res, next) => {
    try {
        repository.delete(req.params.id);
        res.status(200).send({ message: 'Produto removido com sucesso! ' });
    } catch (e) {
        res.status(400).send({ message: 'Falha ao remover o produto! ', 
        data: e });
    }     
};