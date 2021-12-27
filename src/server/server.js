require('dotenv').config({
  path: '.env',
})

const express = require('express')
const mail = require('./mail')
const qcMail = require('./qc-mail')
const app = express()
app.disable('x-powered-by')

app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz'
  res.set('Content-Encoding', 'gzip')
  res.set('Content-type', 'application/javascript')
  next()
})
app.use(express.static('dist'))
app.use(express.json({ limit: '8kb' }))

// support for quebec3 mail service
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://quebec3.com')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'POST')
    return res.status(200).json({})
  }
  next()
})

// As mail service is consumed by quebec3 as well, we need different message
app.use((req, _, next) => {
  const name = req.body.name
  req.successMessage =
    req.get('origin') === 'https://quebec3.com'
      ? `送信成功ですよ！${name}さん。`
      : `Thank you ${name}, I will get back to you soon!`
  next()
})

app.post('/send', mail.sendMessage)
app.post('/send-message', qcMail.sendMessage)

app.listen(process.env.PORT, () => {
  console.group()
  console.log(`[client] Listening on port ⚡⚡⚡ 3000 ⚡⚡⚡`)
  console.log(`[server] Listening on port ⚡⚡⚡ ${process.env.PORT} ⚡⚡⚡`)
  console.groupEnd()
})
