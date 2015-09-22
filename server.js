var express = require('express')
var app = express()

app.use(express.static('public'))

app.get('/', function (req, res) {
  console.log('serving homepage')
  res.send('index.html')
})

var server = app.listen(8001, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('Listen on: ', host, port)
})
