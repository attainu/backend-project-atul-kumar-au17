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



app.post('/login', async (req, res) => {

    try {
        const { email, password } = req.body
        console.log("app.post ~ req.body", req.body)

        if (!email || !password) {
            res.json({
                error: true,
                message: "empty data"
            })
            return
        }

        const checkOldUser = await UserModel.findOne({ email: email })

        if (checkOldUser && checkOldUser.email === email && checkOldUser.password === password) {

            const secret = process.env.SECRET_KEY
            const jwtToken = jwt.sign({ currentUser: checkOldUser.email }, secret, { expiresIn: '1d' })

            res.json({
                error: false,
                message: "User Logged In",
                token: jwtToken
            })
            return
        }
        res.json({
            error: true,
            message: "User credentials does not match"
        })
        
    } catch (err) {

        res.json({ 
            error: err,
            errorObj: err,
            message: "Unknown Error"
        })
    }
})



const PORT = process.env.PORT || 4652
app.listen(PORT, () => console.log(`Foodie_App running at Port: ${PORT}`));