const express = require("express");
const routes = express.Router();

const { index, results } = require("../controllers/main-controllers");

routes.get("/", index);
routes.get("/results", results);

module.exports = routes;
