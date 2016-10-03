var express = require('express')
var path = require('path')
var app = express()

app.set('port', process.env.PORT || 5000)

app.use(express.static(path.join(__dirname, "public")))

app.listen(port, function () {
  console.log('Listening on port ' + port + '...')
})

app.get('/', function (req, res) {
  res.send('index.html')
})
