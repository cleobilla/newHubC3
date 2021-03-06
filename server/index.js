const express = require('express')
const consola = require('consola')
const cors = require('cors');
const { Nuxt, Builder } = require('nuxt')
const app = express()


app.use(cors());


// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'



// Importa modelos do BD
const db = require("./app/models");

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }
    
    // Express GET endpoint
    // Sincroniza com o banco e define as rotas da API
    db.sequelize.sync();
    require("./app/routes/empresa.routes")(app);
    require("./app/routes/produto.routes")(app);

    
  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
