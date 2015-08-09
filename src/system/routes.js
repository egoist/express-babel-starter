import config from './config'

let routes = {}

routes.index = (req, res) => {
  res.render('index', {
    title: config.sitename,
    description: config.description
  })
}

export default routes