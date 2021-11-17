const mongoose = require('mongoose');

const databaseUrl = 'mongodb+srv://w27d4userSignUpData:XmGZxQUFihfKtaPI@cluster0.vqljt.mongodb.net/SignUpData?retryWrites=true&w=majority'

// w27d4userSignUpData
// XmGZxQUFihfKtaPI

async function dbInit() {

    await mongoose.connect(databaseUrl)

}

module.exports = {
    dbInit
}

