const router = require(`express`).Router()
let createError = require(`http-errors`)

require(`dotenv`).config({path: `./config/.env`})

const fs = require(`fs`)

const usersModel = require(`../models/users`)

const multer = require(`multer`)
const upload = multer({dest: `${process.env.UPLOADED_FILES_FOLDER}`})


const checkIfUserExists = (req, res, next) =>
{
    usersModel.findOne({email:req.params.email}, (err, data) => 
    {
        if(err)
        {
            return next(err)
        }
        req.data = data
        return next()        
    })    
}

const checkIfUserNotAlreadyInCollection = (req, res, next) =>
{
    usersModel.findOne({email:req.params.email}, (err, data) => 
    {
        if(err)
        {
            return next(err)
        }
        
        if(data)
        {
            return next(createError(401))
        }
    })
    
    return next()
}

const checkIfFileIsUploaded = (req, res, next) =>
{
    if(!req.file)
    {
        return next(createError(400, `No file selected`))
    }

    return next()
}

const checkIfFileIsImage = (req, res, next) =>
{
    if(req.file.mimetype !== `image/jpeg` && req.file.mimetype !== `image/png` && req.file.mimetype !== `image/jpg`)
    {
        fs.unlink(`${process.env.UPLOADED_FILES_FOLDER}/${req.file.filename}`, (err) => {return next(err)})
    }
    
    return next()
} 


const addNewUser = (req, res, next) =>
{
    usersModel.create({name:req.params.name, email:req.params.email, password:req.params.password, profilePhotoFilename: req.file.filename}, (err, data) =>
    {
        if(err)
        {
            return next(err)
        }

        fs.readFile(`${process.env.UPLOADED_FILES_FOLDER}/${req.file.filename}`, 'base64', (err, fileData) =>
        {
            if(err)
            {
                return next(err)
            }

        
            return res.json({name:data.name, accessLevel: data.accessLevel, profilePhoto: fileData})
        })
    })
}

const addAdminUser = (req, res, next) =>
{
    usersModel.create({name:`admin`, email:`admin@admin.com`, password:`admin`, accessLevel:parseInt(process.env.ACCESS_LEVEL_ADMIN)}, (err, data) =>
    {
        if(err)
        {
            return next(err)
        }
        
        return res.json({name:data.name, email:data.email, password:data.password})
    })
}

const logout = (req, res, next) => 
{       
    return res.json({})
}

const returnUsersDetailsAsJSON = (req, res, next) =>
{
    return res.json({id: req.data.id, name: req.data.name, email: req.data.email, password: req.data.password, accessLevel:req.data.accessLevel})
}

const showUsersList = (req, res, next) =>
{
    usersModel.find({}, (err, data) =>
    {
        if(err)
        {
            return next(err)
        }

        return res.json(data)
    })
}

const deleteUserbyId = (req, res, next) =>
{
    usersModel.findByIdAndRemove(req.params.id, (err, data) =>
    {
        if(err)
        {
            return next(err)
        }

        return res.json(data)
    })
}

const updateUserById = (req, res, next) =>
{
    usersModel.findByIdAndUpdate(req.params.id, {$set: req.body}, (err, data) =>
    {
        if(err)
        {
            return next(err)
        }

        return res.json(data)
    })
}

const getUserById = (req, res, next) =>
{
    usersModel.findById(req.params.id, (err, data) =>
    {
        if(err)
        {
            return next(err)
        }
        
        return res.json(data)
    })
}

router.get(`/users`, showUsersList)

router.get(`/users/:id`, getUserById)

router.post(`/users/register/:name/:email/:password`, upload.single("profilePhoto"), checkIfFileIsUploaded, checkIfFileIsImage, checkIfUserNotAlreadyInCollection, addNewUser)

router.post(`/users/login/:email/:password`, checkIfUserExists, returnUsersDetailsAsJSON)

router.post(`/users/logout`, logout)

router.put(`/users/:id`, updateUserById)

router.delete(`/users/:id`, deleteUserbyId)

// for testing purposes only
router.post(`/users/admin`, addAdminUser)

module.exports = router