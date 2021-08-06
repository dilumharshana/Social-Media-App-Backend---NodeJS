const express = require('express');

const app = express();

app.listen(8000);

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use('/customers' , require('./routes/api/members'));




