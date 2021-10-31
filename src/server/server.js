require('dotenv').config({
  path: '.env',
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

app.listen(process.env.PORT, () => {
  console.group()
  console.log(`[client] Listening on port ⚡⚡⚡ 3000 ⚡⚡⚡`)
  console.log(`[server] Listening on port ⚡⚡⚡ ${process.env.PORT} ⚡⚡⚡`)
  console.groupEnd()
})
