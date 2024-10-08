const router = require(`express`).Router()
let createError = require(`http-errors`)

require(`dotenv`).config({path: `./config/.env`})

const ordersModel = require(`../models/orders`)
const productModel =require('../models/products')
const getUserOrders = (req, res, next) =>
{
    ordersModel.find({userId:req.params.userId}).populate('products.productId').exec((err, data) =>
    {
        if(err)
        {
            return next(err)
        }

        res.json(data)
    })
}

const addOrder = (req, res, next) =>
{
    let orderDetails = new Object()

    orderDetails.userId = req.body.userId
    orderDetails.paymentId = req.body.paymentId
    orderDetails.products = req.body.products
    orderDetails.total = req.body.total
    orderDetails.address = req.body.address
    orderDetails.city = req.body.city
    orderDetails.zipcode = req.body.zipcode

    ordersModel.create(orderDetails, (err, data) =>
    {
        if(err)
        {
            return next(err)
        }

        res.json(data)
    })
}

const refundOrderById = (req, res, next) =>
{
    ordersModel.findByIdAndUpdate({_id:req.params.id}, {status: `refund requested`}, {new:true}, (err, data) =>
    {
        if(err)
        {
            return next(err)
        }

        res.json(data)
    })
}

const updateOrderById = (req, res, next) =>
{
    ordersModel.findOneAndUpdate({_id:req.params.id}, req.body, {new:true}, (err, data) =>
    {
        if(err)
        {
            return next(err)
        }

        res.json(data)
    })
}

router.get(`/orders/:userId`, getUserOrders)

router.post(`/orders`, addOrder)

router.put(`/orders/:id`, updateOrderById)

router.put(`/orders/refund/:id`, refundOrderById)

module.exports = router