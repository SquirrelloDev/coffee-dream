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
    console.log('dotąd git');
    productDetails.imageFileName = req.file.filename
    console.log('plik przeszedł');
    productDetails.stock = req.body.stock
    productDetails.origin = req.body.origin
    productDetails.composition = req.body.composition
    productDetails.aroma = req.body.aroma
    productDetails.intensity = req.body.intensity
    productDetails.body = req.body.body
    productDetails.sca = req.body.sca

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

const getProductsByComposition = (req, res, next) =>
{
    productsModel.find({composition: req.params.composition}, (err, data) =>
    {
        data.map((product) => {
            if(product.imageFileName)
            {
                fs.readFile(`${process.env.UPLOADED_FILES_FOLDER}/${product.imageFileName}`, (err, fileData) =>
                {
                    if(err)
                    {
                        return next(err)
                    }
        
                    if(fileData)
                    {
                        product.imageFileName = fileData
                    }
                    else
                    {
                        product.imageFileName = null
                    }
                })
            }
            else
            {
                product.imageFileName = null
            }
        })

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
        if(data.imageFileName)
        {
            fs.readFile(`${process.env.UPLOADED_FILES_FOLDER}/${data.imageFileName}`, (err, fileData) => 
            {
                if(err)
                {
                    return next(err)
                }

                if(fileData)
                {
                    data.imageFileName = fileData
                    return res.json(data)
                }
                else
                {
                    data.imageFileName = null
                    return res.json(data)
                }

            })
        }
        else
        {
            data.imageFileName = null
            return res.json(data)
        }
    })
}

const updateProductById = (req, res, next) =>
{
    if(req.file)
    {
        req.body.imageFileName = req.file.filename
    }

    productsModel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true}, (err, data) =>
    {
        if(err)
        {
            return next(err)
        }

        res.json(data)
    })
}

const updateProductsStock = (req, res, next) =>
{
    const ops = req.body.products.map(obj => {
        return {
            updateOne: {
                filter: {
                    _id: obj.productId
                },
                update: {
                    $inc: { stock: -obj.quantity }
                }
            }
        }
    })

    productsModel.bulkWrite(ops)
    .then((res) => {
        console.log("Documents Updated", res.modifiedCount)
    })
    .catch((err) => console.log(err))
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

router.get(`/products/:composition`, getProductsByComposition)

router.post(`/products`, upload.single("productPhoto"), addNewProduct)

router.put(`/products`, updateProductsStock)

router.put(`/products/:id`, upload.single("productPhoto"), updateProductById)

router.delete(`/products/:id`, checkIfUserIsAdmin, deleteProductbyId)

module.exports = router