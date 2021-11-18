const mongoose = require('mongoose');

const databaseUrl = process.env.DATABASE_URL

// w27d4userSignUpData
// XmGZxQUFihfKtaPI

async function dbInit() {

    await mongoose.connect(databaseUrl)

}

module.exports = {
    dbInit
}

