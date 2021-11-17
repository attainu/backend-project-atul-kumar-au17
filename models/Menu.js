const mongoose = require('mongoose');

const dbConnection = require('../database/db');
dbConnection.dbInit()

// w27d4userSignUpData
// XmGZxQUFihfKtaPI

const MenuSchema = new mongoose.Schema({

    name: String,
    price: Number,

})

const MenuModel = mongoose.model('Menu', MenuSchema)

module.exports = MenuModel

