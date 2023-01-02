const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const OrdersSchema = new mongoose.Schema({
    orderId: { type: String, unique: true, required: true},
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    products: [{
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
      quantity: { type: Number, required: true } }],
    total: { type: Number, required: true },
    status: { type: String, enum: ['pending', 'shipped', 'delivered', 'cancelled'], default: 'pending' },
    shippingAddress: { type: String, required: true}
  });

OrdersSchema.plugin(autoIncrement.plugin, { model: 'Orders', field: 'orderId', startAt: 1, incrementBy: 1 });
  
  module.exports = mongoose.model('Orders', OrdersSchema);