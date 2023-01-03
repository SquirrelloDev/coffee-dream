const router = require(`express`).Router()
let createError = require(`http-errors`)

require(`dotenv`).config({path: `./config/.env`})

const fs = require(`fs`)

const multer = require(`multer`)
const productsModel = require("../models/products")
const upload = multer({dest: `${process.env.UPLOADED_FILES_FOLDER}`})

const checkIfUserIsAdmin = (req, res, next) =>
{
    if(req.user.accessLevel >= parseInt(process.env.ACCESS_LEVEL_ADMIN))
    {
        return next(err)
    }
    else
    {
        return next(createError(401))
    }
}

const addNewProduct = (req, res, next) =>
{
    let productDetails = new Object()

    productDetails.name = req.body.name
    productDetails.price = req.body.price
    productDetails.description = req.body.description
    productDetails.stock = req.body.stock
    productDetails.origin = req.body.origin
    productDetails.composition = req.body.composition
    productDetails.aroma = req.body.aroma
    productDetails.intensity = req.body.intensity
    productDetails.body = req.body.body

    productDetails.image = []

    req.files.map((file, index) =>
    {
        productDetails.image[index] = {filename:`${file.filename}`}
    })

    productsModel.create(productDetails, (err, data) =>
    {
        if(err)
        {
            return next(err)
        }

        res.json(data)
    })
}

const getAllProducts = (req, res, next) =>
{
    productsModel.find({}, (err, data) =>
    {
        if(err)
        {
            return next(err)
        }

        res.json(data)
    })
}

const getProductPhotoAsBase64 = (req, res, next) =>
{
    fs.readFile(`${process.env.UPLOADED_FILES_FOLDER}/${req.params.filename}`, (err, fileData) =>
    {
        if(err)
        {
            return next(err)
        }

        if(fileData)
        {
            return res.json({image: fileData})
        }
        else
        {
            return res.json({image: null})
        }
    })
}

const getProductById = (req, res, next) =>
{
    productsModel.findById(req.params.id, (err, data) =>
    {
        if(err)
        {
            return next(err)
        }

        res.json(data)
    })
}

const updateProductById = (req, res, next) =>
{
    productsModel.findByIdAndUpdate(req.params.id, {$set: req.body}, (err, data) =>
    {
        if(err)
        {
            return next(err)
        }

        res.json(data)
    })
}

const deleteProductbyId = (req, res, next) =>
{
    productsModel.findByIdAndRemove(req.params.id, (err, data) =>
    {
        if(err)
        {
            return next(err)
        }

        res.json(data)
    })
}

router.get(`/products`, getAllProducts)

router.get(`/products/photo/:filename`, getProductPhotoAsBase64)

router.get(`/products/:id`, getProductById)

router.post(`/products`, checkIfUserIsAdmin, upload.array("productPhotos", parseInt(process.env.MAX_NUMBER_OF_UPLOAD_FILES_ALLOWED)), addNewProduct)

router.put(`/products/:id`, checkIfUserIsAdmin, updateProductById)

router.delete(`/products/:id`, checkIfUserIsAdmin, deleteProductbyId)

module.exports = router