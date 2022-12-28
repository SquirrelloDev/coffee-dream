const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        price: { type: Number, required: true },
        description: { type: String, required: true },
        image: { type: String, required: true },
        stock: { type: Number, required: true, default: 0, min: 0 },
        origin: { type: String},
        composition: { type: String},
        aroma: { type: String},
        intensity: { type: Number, min: 1, max: 5},
        body: { type: Number, min: 1, max: 5},
    },
    {
        collection: `products`
    });

module.exports = mongoose.model('products', productsSchema);