
const { Router } = require('express');
const menuRoutes = Router()

const MenuModel = require('../models/Menu');

// create a menu item
menuRoutes.post('/addDish', async (req, res) => {

    console.log(`adding a new menu item ${req.body}`);

    try {

        // const  insertMenuItem = await MenuModel.create(req.body)
        // console.log(insertMenuItem);
        // res.redirect(`${__dirname}`)
        res.send({
            data: req.body,
            path: `${__dirname}`
        })
        // res.redirect("./")
        console.log(__dirname)

    } catch (err) {

        res.send(err);
        console.log(err)
        
    }
})


// get complete menu
menuRoutes.get('/completeMenu', async (req, res) => {

    console.log("get the complete menu")

    try {

        const completeMenu = await MenuModel.find({})
        console.log(completeMenu)

    } catch (error) {

        res.send({
            error:true,
            message: error.message
        })
    }
})

// update user
menuRoutes.put(`/:uniqueId`, async (req, res) => {

    console.log(`updating a particular menu item: ${req.params.uniqueId}`)

    try {

        const updateMenuItem = await MenuModel.findByIdAndUpdate(req.params.uniqueId, req.body);
        console.log(updateMenuItem)
        
    } catch (error) {

        res.send({
            error:true,
            message: error.message
        })
    }
})


// delete user
menuRoutes.delete(`/:uniqueId`, async (req, res) => {
    console.log(`deleting particular menu item: ${req.params.uniqueId}`);

    try {

        const deleteMenuItem = await MenuModel.findByIdAndDelete(req.params.uniqueId)
        console.log(deleteMenuItem)

    } catch (error) {

        res.send({
            error:true,
            message: error.message
        })
    }
})

module.exports = menuRoutes;