const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://sangwoog:!jungsw71@sangwoog.vajcajo.mongodb.net/?retryWrites=true&w=majority&appName=sangwoog')
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!~~ 안녕하세요.')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



