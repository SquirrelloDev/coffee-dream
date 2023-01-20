const mongoose = require('mongoose');

const promocodesSchema = new mongoose.Schema(
    {
        code: { type: String, required: true, unique: true },
        discount: { type: Number, required: true, min: 0, max: 100 },
        expiration: { type: Date, required: true },
        active: { type: Boolean, required: true, default: true }
    },
    {
        collection: `promocodes`
    });

const promoCodes = [
    { code: 'PROMO1', discount: 25, expiration: '2023-09-30', active: true },
    { code: 'PROMO2', discount: 10, expiration: '2023-12-31', active: true },
    { code: 'PROMO3', discount: 15, expiration: '2023-06-30', active: true },
    ];

const promocodesModel = mongoose.model('promocodes', promocodesSchema);


const count = promocodesModel.countDocuments((err, count) =>
{
    if (err)
    {
        console.log(err);
    }
    else
    {
        if (count === 0)
        {
            promocodesModel.insertMany(promoCodes, (err, docs) =>
            {
                if (err)
                {
                    console.log(err);
                }
                else
                {
                    console.log(`Example promocodes added to database`);
                }
            });
        }
    }
});

module.exports = promocodesModel;