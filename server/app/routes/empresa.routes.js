module.exports = app => {
  const empresa = require("../controllers/empresa.controller.js");

  var router = require("express").Router();

  // Retrieve all Empresas
  router.get("/", empresa.findAll);

  // Retrieva empresa com id 
  router.get("/:id", empresa.findOne);

  app.use('/api/empresas', router);
};
