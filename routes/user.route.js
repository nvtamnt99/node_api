const express = require('express');
const userModel = require('../models/user.model');
const router = express.Router();
const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const jwt = require('jsonwebtoken');

router.get('/all-user',async function(req, res, next) {
    let data = await userModel.getAllUser();
    return res.status(200).json({
        data: data,
    });
})

router.post('/add-user',async function(req, res, next) {
    let data = req.body;
    let user = await userModel.checkUserData(data.email);
    return res.send('success');

});

router.post('/login', async function(req, res, next) {
    let userData = await userModel.getUserByUserName(req.body.name);
    console.log(userData);
})


module.exports = router;