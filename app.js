const http = require('http')

const server = http.createServer((req, res) => {
  // console.log(req.method) // GET
  console.log(req.url) // i.e. /Contact
  const url = req.url;
  // home page
  if (url === '/') {
    res.writeHead(200, {'content-type': 'text/html'})
    res.write('<h1>Home Page</h1>')
    res.end()
  // about page
  } else if (req.url === '/about') {
    res.writeHead(200, {'content-type': 'text/html'})
    res.write('<h1>About Page</h1>')
    res.end()
  // 404 page 
  } else {
    res.writeHead(404, {'content-type': 'text/html'})
    res.write('<h1>404 Page</h1>')
    res.end()
  }
})

server.listen(5000)