const express = require("express");
const router = require("express").Router();

// //configs()

express().use(selectApi);

function selectApi(req, res, next) {
  console.log("heloo nodejs");
  next();
}

router.get("/", (req, res) => {
  //   console.log(req.originalUrl);
});

module.exports = router;
