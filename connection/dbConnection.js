const mongoose = require('mongoose');
const dotenv = require('dotenv')

dotenv.config();

const URL = process.env.MONGODB_URL;
console.log(URL);

const connection = mongoose.connect(URL, ({
    useCreateIndex : true,
    useNewUrlParse:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}) , () => {
    console.log('database conected ......');
})



module.exports = connection;