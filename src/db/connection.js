const mongoose = require('mongoose')
const connection_url = 'mongodb+srv://Admin:Eu3x3hXviavmgp0e@cluster0.u1yqqjj.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

module.exports = db;