const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
dotenv.config({ path: './config/config.env' })

const app = express()

// const PORT = process.env.PORT || 3001

// app.get('/', (req, res) => {
//   fetch(
//     'https://ajizffk6n8.execute-api.us-west-2.amazonaws.com/default/getAllBathrooms'
//   )
//   res.send('API running!')
// })

// app.listen(PORT, () => {
//   console.log(`App is listening on port ${PORT}`)
// })

app.use(express.static(path.join(__dirname, 'client/build')))

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

const port = process.env.PORT || 5000
app.listen(port)

console.log('App is listening on port ' + port)
