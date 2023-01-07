const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment')
mongoose.set('strictQuery', false);
mongoose.connect(`mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`)

const db = mongoose.connection
autoIncrement.initialize(db)

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {console.log(`Connected to MongoDB URL: ${db.host}:${db.port}/${db.name}`)})