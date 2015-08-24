import express from 'express'
let app = express()
import bodyParser from 'body-parser'
import nunjucks from 'nunjucks'

import config from './config'
import routes from './routes'

let server = (root) => {

  // define middlewares
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({
    extended: false
  }))

  // use nunjucks to render templates
  app.set('view engine', 'html')
  let viewsDir = root + '/src/views'
  nunjucks.configure(viewsDir, {
    autoescape: true,
    express: app
  })

  // define routers
  app.get('/', routes.index)

  // listen
  app.listen(config.port, () => {
    console.log('Site is running at http://localhost:' + config.port)
  })

}

export default server