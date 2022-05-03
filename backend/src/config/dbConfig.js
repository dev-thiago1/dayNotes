//mongodb+srv://usuario:<password>@cluster0.7fksn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
 
const dbConfig = "mongodb+srv://usuario:usuario123@cluster0.7fksn.mongodb.net/annotations?retryWrites=true&w=majority"

const mongoose = require('mongoose')

const connection = mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = connection;