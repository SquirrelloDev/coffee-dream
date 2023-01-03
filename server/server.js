require(`dotenv`).config({path: `./config/.env`})

require(`./config/db`)

const express = require(`express`)
const app = express()

app.use(require(`body-parser`).json())
app.use(require(`cors`)({credentials: true, origin: process.env.LOCAL_HOST}))

app.use(require(`./routes/users`))
app.use(require(`./routes/products`))
app.use(require(`./routes/orders`))

app.listen(process.env.SERVER_PORT, () => 
{
    console.log(`Connected to port ` + process.env.SERVER_PORT)
})

app.use((req, res, next) => {next(createError(404))})

app.use(function (err, req, res, next)
{       
    if (!err.statusCode) 
    {
        err.statusCode = 500
    }
    
    if (err instanceof ReferenceError)
    {
        err.statusCode = 400
        err.message = "Cannot reference a variable that has not been declared. This can be caused in run-time if the user did not input a parameter that is required by a router"
    }
    
    console.log(err.message + "\nError Details...")
    console.log(err)
    
    res.status(err.statusCode).send(err.message)    
})
