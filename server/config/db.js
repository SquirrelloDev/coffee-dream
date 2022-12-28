const mongoose = require('mongoose')
mongoose.set('strictQuery', false);
mongoose.connect(`mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`)

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {console.log("connected to", db.client.s.url)})