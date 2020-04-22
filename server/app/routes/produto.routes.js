module.exports = app => {
  const produto = require("../controllers/produto.controller.js");

  var router = require("express").Router();

  // Retrieve all products
  router.get("/:id", produto.findAll);

  // Retrieve all products with id
  router.get("/produto/:id", produto.findOne);

  // Append standard path
  app.use('/api/empresa', router);
};
