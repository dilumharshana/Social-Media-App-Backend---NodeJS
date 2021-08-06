const express = require("express");
const dotenv = require("dotenv");

const app = express();

const PORT = process.env.PORT || 7000;
app.listen(PORT);

app.use("/users", require("./routes/users/users"));
