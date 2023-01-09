const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const OrdersSchema = new mongoose.Schema({
    orderId: { type: String, unique: true, required: true},
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true },
    paymentId: { type: String, required: true },
    products: [{
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Products', required: true },
      quantity: { type: Number, required: true } }],
    total: { type: Number, required: true },
    status: { type: String, enum: ['pending', 'shipped', 'delivered', 'cancelled', 'refund requested'], default: 'pending' },
    address: { type: String, required: true},
    city: { type: String, required: true},
    zipcode: { type: String, required: true}
    },
    {
    collection: `Orders`
    });

OrdersSchema.plugin(autoIncrement.plugin, { model: 'Orders', field: 'orderId', startAt: 1, incrementBy: 1 });
  
module.exports = mongoose.model('Orders', OrdersSchema);