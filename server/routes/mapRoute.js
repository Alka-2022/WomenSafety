const express = require("express");
const routes = express.Router();

routes.post("/", (req, res) => {
  console.log(req.body);
  res.json({ msg: "reached " });
});

module.exports = routes;
