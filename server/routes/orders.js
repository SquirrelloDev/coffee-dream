const router = require(`express`).Router()
let createError = require(`http-errors`)

require(`dotenv`).config({path: `./config/.env`})

const ordersModel = require(`../models/orders`)

const getUserOrders = (req, res, next) =>
{
    ordersModel.find({userId:req.user._id}, (err, data) =>
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

    orderDetails.userId = req.user._id
    orderDetails.products = req.body.products
    orderDetails.totalPrice = req.body.totalPrice
    orderDetails.address = req.body.address
    orderDetails.city = req.body.city
    orderDetails.postalCode = req.body.postalCode

    ordersModel.create(orderDetails, (err, data) =>
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

