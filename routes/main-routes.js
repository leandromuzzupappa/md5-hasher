const express = require("express");
const routes = express.Router();

const { index } = require("../controllers/main-controllers");

routes.get("/", index);

module.exports = routes;
