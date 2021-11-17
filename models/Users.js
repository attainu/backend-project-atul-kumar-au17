const mongoose = require('mongoose');

const dbConnection = require('../database/db');
dbConnection.dbInit()

// w27d4userSignUpData
// XmGZxQUFihfKtaPI

const UserSchema = new mongoose.Schema({

    name: String,
    phone: String,
    email: String,
    password: String,

})

const UserModel = mongoose.model('Users', UserSchema)

module.exports = UserModel

