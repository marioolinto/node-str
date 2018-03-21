'use strict';

const repository = require('../repositories/order-repository');


exports.post = async (res, req, next) => {
    try {
        await repository.create({
            customer: req.body.customer,
            number: guide.raw().substring(0,6),
            items: req.body.items
        }); 
        res.status(200).send({mesage: 'Pedido cadastrado com sucesso!'});
    } catch (e) {
        res.status(400).send({message: "Falha ao cadatrar o pedido" });
    }
}