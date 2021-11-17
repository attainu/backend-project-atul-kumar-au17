require('dotenv').config();
const express = require('express')
const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static("views"))
const fileUploaddate = require('express-fileupload');
const jwt = require('jsonwebtoken');
app.get('/', (req, res) => {
 //   res.sendFile(`${__dirname}/views/home.html`)
 res.send("working")

})

app.get('/login', (req, res) => {
    res.sendFile(`${__dirname}/views/login.html`)
})

app.get('/signup', (req, res) => {
    res.sendFile(`${__dirname}/views/signUp.html`)
})


const PORT = process.env.PORT || 4651
app.listen(PORT, () => console.log(`Foodie_App running at Port: ${PORT}`));
