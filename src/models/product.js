'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    //_id
    title: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: [true, 'O campo slug é obrigatório'],
        trim: true,
        index: true,
        unique: true        
    },
    description: {
        type: String,
        required: [true, 'O campo descrição é obrigatório'],
        trim: true
    },
    price: {
        type: Number,
        required: [true, 'O campo price é obrigatório'],
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    tags: [{
        type: String,
        required: true
    }]

    
});

module.exports = mongoose.model('Product', schema);

