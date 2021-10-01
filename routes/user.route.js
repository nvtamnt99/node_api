const express = require('express');
const userModel = require('../models/user.model');
const router = express.Router();
const bcrypt = require('bcrypt');

router.get('/all-user', async function (req, res, next) {
    let data = await userModel.getAllUser();
    return res.status(200).json({
        data: data,
    });
})

router.post('/add-user', async function (req, res, next) {
    let data = req.body;
    let user = await userModel.checkUserData(data.email);
    return res.send('success');

});

router.post('/register', async function (req, res, next) {
    const { email, phone_number, password } = req.body;
    let userEmail = await userModel.checkUserData(email);
    console.log(userEmail);
    bcrypt.hash(password, 10).then((hash) => {
        if(userEmail !== null && userEmail.email !== email) {
            userModel.saveUser(email, phone_number, hash);
            return res.status(200).json('Success!');
        }
        else if (userEmail === null) {
            userModel.saveUser(email, phone_number, hash);
            return res.status(200).json('Success!');
        }
        else {
            return res.status(200).json('Email already in use');
        }
        
        
    })
})


module.exports = router;