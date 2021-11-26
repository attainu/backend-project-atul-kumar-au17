const mongoose = require('mongoose');

const dbConnection = require('../database/db');
dbConnection.dbInit()

// w27d4userSignUpData
// XmGZxQUFihfKtaPI

const MenuSchema = new mongoose.Schema({

    name: { type: String, required: true},
    price: { type: Number, required: true },
    // image: { type: String, required: true },

})

const MenuModel = mongoose.model('Menu', MenuSchema)

module.exports = MenuModel

