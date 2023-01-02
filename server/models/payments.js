const mongoose = require('mongoose')

const paymentsSchema = new mongoose.Schema(
    {
        paymentId: { type: String, unique: true, required: true},
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true },
        orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Orders', required: true },
        amount: { type: Number, required: true },
    },
    {
        collection: `Payments`
    });

module.exports = mongoose.model('Payments', paymentsSchema);

