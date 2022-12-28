const router = require(`express`).Router()
require(`dotenv`).config({path: `./config/.env`})

const usersModel = require(`../models/users`)

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

const addNewUser = (req, res, next) =>
{
    usersModel.create({login:req.body.login, email:req.body.email, password:req.body.password}, (err, data) => 
    {
        if(err)
        {
            return next(err)
        }
        
        return res.json({login:data.login, email:data.email, password:data.password})
    })
}

const addAdminUser = (req, res, next) =>
{
    usersModel.create({login:`admin`, email:`admin@admin.com`, password:`admin`, accessLevel:parseInt(process.env.ACCESS_LEVEL_ADMIN)}, (err, data) =>
    {
        if(err)
        {
            return next(err)
        }
        
        return res.json({login:data.login, email:data.email, password:data.password})
    })
}

const logout = (req, res, next) => 
{       
    return res.json({})
}

const returnUsersDetailsAsJSON = (req, res, next) =>
{  
    if(req.data.profilePhotoFilename)
    {
        return res.json({login: req.data.login, accessLevel:req.data.accessLevel})  
    }    
}

router.post(`/users/register/:name/:email/:password`, checkIfUserNotAlreadyInCollection, addNewUser)

router.post(`/users/login/:email/:password`, checkIfUserExists, returnUsersDetailsAsJSON)

router.post(`/users/logout`, logout)

module.exports = router