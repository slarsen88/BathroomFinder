const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
dotenv.config({ path: './config/config.env' })

const app = express()

const PORT = process.env.PORT || 3001

app.get('/', (req, res) => {
  res.send('API running!')
})

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`)
})
