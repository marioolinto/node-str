'use strict';

exports.post =  (req, res, next) => {
    res.status(201).send(req.body);    
};

exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send({ title: 'Agora vido do controller',  id: id, item: req.body });    
};