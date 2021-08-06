const express = require("express");
const dotenv = require("dotenv");

//routes
const userRoutes = require("./routes/users/users");
const authRoutes = require("./routes/auth/auth");

//configs
const app = express();

//server
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(PORT));

app.use("/users", userRoutes);
app.use("/users/auth", authRoutes);
