const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.status(200).send('Home Page')
})

app.get('/about', (req, res) => {
  res.status(200).send('About Page')
})

app.all('*', (req, res) => {
  res.status(404).send('<h1>404 error.</h1> Resource not found')
})

const PORT = 5000
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})

// app.get = Read Data
// app.post = Insert Data
// app.put = Update Data
// app.delete = Delete Data
// app.all = Get all Data
// app.use
// app.listen


