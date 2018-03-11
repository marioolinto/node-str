'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const repository = require('../repositories/product-repository');


exports.get = (req, res, next) => {
    repository.get()
        .then(data => {
            res.status(201).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });    
}

exports.getBySlug = (req, res, next) => {
    repository.getBySlug(req.params.slug)
        .then(data => {
            res.status(201).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });    
}

exports.getById = (req, res, next) => {
    repository
        .getById(req.params.id)
        .then(data=>{
            res.status(201).send(data);
        }).catch(e=>{
            res.status(400).send(e);
        });    
}

exports.getByTag = (req, res, next) => {
    repository
        .getByTags(req.params.tag)
        .then(data=>{
            res.status(201).send(data);
        }).catch(e=>{
            res.status(400).send(e);
        });    
}

exports.post =  (req, res, next) => {
    repository.create(req.body)
        .then(data=>{
            res.status(201).send({ message: 'Produto cadastrado com sucesso ' });
        }).catch(e=>{
            res.status(400).send({ message: 'Falha ao cadastrar o produto ', 
            data: e });
        });    
};

exports.put = (req, res, next) => {
    repository
        .update(req.params.id, req.body)
        .then(data => {
        res.status(200).send({ message: 'Produto atualizado com sucesso! ' });
    }).catch(e=>{
        res.status(400).send({ message: 'Falha ao cadastrar o produto! ', 
        data: e });
    });      
};

exports.delete = (req, res, next) => {
    repository.delete(req.params.id)
        .then(data => {
        res.status(200).send({ message: 'Produto removido com sucesso! ' });
    }).catch(e=>{
        res.status(400).send({ message: 'Falha ao remover o produto! ', 
        data: e });
    });      
};