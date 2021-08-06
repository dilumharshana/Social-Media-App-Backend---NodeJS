const router = require('express').Router();

const addUser = (req,res) => router.get('/' , (req,res) => {
     res.json('testing okk');
})

module.exports = addUser;