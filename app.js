const http = require('http')
const { readFileSync } = require('fs')

// get all files
const homePage = readFileSync('./index.html')
const aboutPage = readFileSync('./about.html')
const pageNotFound = readFileSync('./404.html')

const server = http.createServer((req, res) => {
  // console.log(req.method) // GET
  // console.log(req.url) // i.e. /Contact
  const url = req.url;
  // home page
  if (url === '/') {
    res.writeHead(200, {'content-type': 'text/html'})
    res.write(homePage)
    res.end()
  // about page
  } else if (req.url === '/about') {
    res.writeHead(200, {'content-type': 'text/html'})
    res.write(aboutPage)
    res.end()
  // 404 page 
  } else {
    res.writeHead(404, {'content-type': 'text/html'})
    res.write(pageNotFound)
    res.end()
  }
})

server.listen(5000)