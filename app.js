require('dotenv').config();
const express = require('express');
const app = express();

const fileUploaddate = require('express-fileupload');
const jwt = require('jsonwebtoken');


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(fileUploaddate())


// mongoose - users
const UserModel = require('./models/Users')
const MenuModel = require('./models/Menu')

// routes
const userRoutes = require('./routes/userRoutes');
const menuRoutes = require('./routes/menuRoutes');

app.use('/user', userRoutes)
app.use('/menu', menuRoutes)

app.use(express.static('views'))

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/views/home.html`)
})

app.get('/login', (req, res) => {
    res.sendFile(`${__dirname}/views/login.html`)
})

app.get('/signup', (req, res) => {
    res.sendFile(`${__dirname}/views/signUp.html`)
})

// app.post('/login', (req, res) => {
    
//     const dataToSend = {
//         data: req.body,
//         message: "login successful"
//     }

//     res.send(dataToSend)
// })

// app.post('/signup', (req, res) => {

//     const dataToSend = {
//         data: req.body,
//         message: "signup successful"
//     }

//     res.send(dataToSend)
// })



const PORT = process.env.PORT || 4652
app.listen(PORT, () => console.log(`Foodie_App running at Port: ${PORT}`));