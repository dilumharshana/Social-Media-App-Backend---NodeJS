const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const URL = process.env.MONGODB_URL;
console.log(URL);

mongoose.connect(URL, {
  useCreateIndex: true,
  useNewUrlParse: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
