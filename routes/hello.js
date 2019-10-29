const Hello = require('../hooks/hello')

let routes = [
  {
    url: '/hello/:name',
    GET: Hello,
  },
]

module.exports = routes
