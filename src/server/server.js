require('dotenv').config({
  path: '.env',
})

const express = require('express')
const mail = require('./mail')
const app = express()
app.disable('x-powered-by')

app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz'
  res.set('Content-Encoding', 'gzip')
  res.set('Content-type', 'application/javascript')
  next()
})
app.use(express.static('dist'))
app.use(express.json({ limit: '4kb' }))

// ========= Experiment start
// const corsOrigin = process.env.NODE_ENV === 'development' ? LOCALHOST : DOMAIN
// app.use(express.json({ limit: '8kb' }))

app.use((req, res, next) => {
  // res.header('Access-Control-Allow-Origin', corsOrigin)
  res.header('Access-Control-Allow-Origin', '*')
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
// ========= Experiment end

app.post('/send', mail.sendMessage)

app.listen(process.env.PORT, () => {
  console.group()
  console.log(`[client] Listening on port ⚡⚡⚡ 3000 ⚡⚡⚡`)
  console.log(`[server] Listening on port ⚡⚡⚡ ${process.env.PORT} ⚡⚡⚡`)
  console.groupEnd()
})
