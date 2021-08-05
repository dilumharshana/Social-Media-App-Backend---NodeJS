const express = require('express');
const router = express.Router();
const customers = require('../../Model');


//get all the customers
router.get('/' , (req,res) => {
    res.json(customers);
})

//get specific customers
router.get('/:name' , (req,res) => {
    const customer = customers.filter( member => member.name === req.params.name);
    res.json(customer);
})

//create member
router.post('/' , (req,res) => {

    const customer = {
        'name':req.body.name,
        'email':req.body.email,
        'phone':req.body.phone
    }

    const customern = customers.push(customer);
    res.send(customern);
})

module.exports = router;
