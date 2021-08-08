const express = require("express");
const dotenv = require("dotenv");

//routes
const userRoutes = require("./routes/users/users");
const authRoutes = require("./routes/auth/auth");
const postRoutes = require("./routes/posts/posts");

//configs
const app = express();

//server
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(PORT));

app.use("/users", userRoutes);
app.use("/users/auth", authRoutes);
app.use("/posts", postRoutes);
