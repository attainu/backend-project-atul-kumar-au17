const mongoose = require('mongoose');

const dbConnection = require('../database/db');
dbConnection.dbInit()

// w27d4userSignUpData
// XmGZxQUFihfKtaPI

const UserSchema = new mongoose.Schema({

    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

}, { timestamp: true });

const UserModel = mongoose.model('Users', UserSchema)

module.exports = UserModel 



