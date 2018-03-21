'use stricts';

const mongoose = require('mongoose');
const Order = mongoose.model('Order');

exports.get = async () => {    
    const res = await Order.find();
    return res;    
} 

exports.getByNumber = async (number) => {
    const res = await Order.findOne({ number: number });
    return res;
}

exports.getByStatus = async (status) => {
    const res = await Order.find ({ status: status });
    return res;
}

exports.create = async (data) => {
    let order = new Order(data);
    await order.save();    
}

exports.put = async (id, data) => {
    await Order.findByIdAndUpdate(id,{
        $set: {
            status: data.status

        } 
    })
}


