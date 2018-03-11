'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = () => {
    return Product.find(
        { active: true }, 
        'title description slug price tags');
} 


exports.getBySlug = (slug) => {
    return Product.findOne({ 
        slug: slug, 
        active: true }, 
        'title description price slug tags')
}

exports.getById = (id) => {
    return Product.findById(id);
}

exports.getByTags = (tag) => {
    return Product.find({ 
            tags: tag, 
            active: true 
        }, 'title description price slug tags')
}

exports.create = (data) => {
    var product = new Product(data);
    return product.save()
}

exports.update = (id, data) => {
    return Product.findByIdAndUpdate(id, {
        $set: {
            title: data.title,
            description: data.description,
            slug: data.slug,
            price: data.price
        }
    });
}

exports.delete = (id) => {
    return Product.findOneAndRemove(id);
}