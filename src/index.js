const express = require('express')
const app = express()

const studentRouter = require('../routes/students')
const gradesRouter = require('../routes/grades')

const PORT = 8080

app.use(express.json())

app.get('/', (req, res) => {
  res.send('welcome to the application')
})

app.use('/students', studentRouter)
app.use('/grades', gradesRouter)

app.listen(PORT)

module.exports = app