const router = require(`express`).Router()
let createError = require(`http-errors`)

require(`dotenv`).config({path: `./config/.env`})

const paymentsModel = require("../models/payments")

const addPayment = (req, res, next) =>
{
    let paymentDetails = new Object()

    paymentDetails.paymentId = req.body.paymentId
    paymentDetails.user = req.body.user
    paymentDetails.orderId = req.body.orderId
    paymentDetails.amount = req.body.amount

    paymentsModel.create(paymentDetails, (err, data) =>
    {
        if(err)
        {
            return next(err)
        }

        res.json(data)
    })
}

const updatePaymentbyId = (req, res, next) =>
{
    paymentsModel.findByIdAndUpdate(req.params, { $set: req.body}, (err, data) =>
    {
        if(err)
        {
            return next(err)
        }
        
        res.json(data)
    })
}

const deletePaymentbyId = (req, res, next) =>
{
    paymentsModel.findByIdAndDelete(req.params, (err, data) =>
    {
        if(err)
        {
            return next(err)
        }
        
        res.json(data)
    })
}

router.post(`/payments`, addPayment)
router.put(`/payments/:id`, updatePaymentbyId)
router.delete(`/payments/:id`, deletePaymentbyId)

module.exports = router