
const { Router } = require('express');
const userRoutes = Router()

const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken')

const UserModel = require('../models/Users');

// create a user
userRoutes.post('/signup', 
    body('name').trim().notEmpty().withMessage("User Name is required"),
    body('email').trim().isEmail().normalizeEmail().isEmpty().withMessage("User Email is required").toLowerCase(),
    body('password').trim().isAlphanumeric().isLength({ min: 6 }).withMessage("Password must have min 6 characters"),
async (req, res) => {

    try {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            // console.log(errors)
            return res.status(422).send(errors.array());
        }

        const userCheck = await UserModel.findOne({ email: email })

        if (userCheck && userCheck.email === email) {
            res.json({
                error: true,
                message: 'user already exists'
            })
            return 
        }

        const insertUser = await UserModel.create(req.body)
        console.log(insertUser);
        res.send(insertUser)

        
    } catch (error) {

        res.send({
            error: true,
            message: error.message
        })
    }
    }
);

function checkJWTToken(req, res, next) {
    console.log('Checking JWTToken', req.header.token)

    try {

        const authTokenDecodedData = jwt.verify(req.header.token, process.env.SECRET_KEY)
        console.log(authTokenDecodedData)
        next()
        
    } catch (error) {

        res.json({
            error: true,
            errorObj: error,
            message: "Invalid Token"
        })   
    }
}


userRoutes.use(checkJWTToken)
// get all user
userRoutes.get('/allUsers', async (req, res) => {

    console.log("getting all users")

    try {

        const allUsers = await UserModel.find({})
        // console.log(allUsers)
        res.send(allUsers)

    } catch (error) {

        res.send({
            error: true,
            message: error.message
        })
    }
})


// get a specific user
userRoutes.get(`/:uniqueId`, async (req, res) => {

    console.log(`getting a particular user: ${req.params.uniqueId}`)

    try {

        const specificUser = await UserModel.findById(req.params.uniqueId)
        console.log(specificUser)
        res.send(specificUser)

    } catch (error) {

        res.send({
            error: true,
            message: error.message
        })
    }

})


// update user
userRoutes.put(`/:uniqueId`, async (req, res) => {

    console.log(`updating a particular user: ${req.params.uniqueId}`)

    try {

        const updateUser = await UserModel.findByIdAndUpdate(req.params.uniqueId, req.body);
        console.log(updateUser)
        res.send(updateUser)
        
    } catch (error) {

        res.send({
            error: true,
            message: error.message
        })
    }
})


// delete user
userRoutes.delete(`/:uniqueId`, async (req, res) => {

    console.log(`deleting particular user: ${req.params.uniqueId}`);

    try {

        const deleteUser = await UserModel.findByIdAndDelete(req.params.uniqueId)
        console.log(deleteUser)
        res.send(deleteUser)

    } catch (error) {
        
        res.send({
            error: true,
            message: error.message
        })
    }
})


module.exports = userRoutes;