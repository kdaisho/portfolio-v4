require('dotenv').config({
  path: 'variables.env',
})

const express = require('express')
const mail = require('./mail')

const app = express()

app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz'
  res.set('Content-Encoding', 'gzip')
  res.set('Content-type', 'application/javascript')
  next()
})
app.use(express.static('dist'))
app.use(express.json({ limit: '4kb' }))
app.post('/send', mail.sendMessage)
app.listen(process.env.PORT, () =>
  console.log(`Listening on port ${process.env.PORT}!`)
)
