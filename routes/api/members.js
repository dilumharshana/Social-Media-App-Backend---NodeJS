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

//create new customer

router.post('/' , (req,res) => {

    console.log(req.body);

    const nCustomer = {
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        
    }

    customers.push(nCustomer);
    res.send(customers);
});

router.put('/:id' , (req,res) => {

    const update = req.body;

    const found = customers.some( member => member.name === req.params.id);

    if(found){
        let editCoustomer = customers.filter( member => member.name === req.params.id)
        let nCustomers = customers.filter( member => member.name != req.params.id);

        editCoustomer[0].name = update.name;
        editCoustomer[0].email = update.email;
        editCoustomer[0].phone = update.phone;

        nCustomers.push(editCoustomer[0]);
        console.log(editCoustomer);

        return res.json(nCustomers);
    }

    res.send('no customer for for name');
})


// deleting customer

router.delete( '/:id' , (req,res) => {
    
    const found = customers.some( member => member.name === req.params.id);

    if(found){
        const nCustomers = customers.filter( member => member.name !== req.params.id);
       return  res.json(nCustomers)
    }

    return res.send('no customer found');
})
module.exports = router;
