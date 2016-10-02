let express = require('express')
let path = require('path')
let app = express()
let port = 5000

app.use(express.static(path.join(__dirname, "public")))

app.listen(port, () => {
  console.log('Listening on port ' + port + '...')
})

app.get('/', (req, res) => {
  res.send('index.html')
})
