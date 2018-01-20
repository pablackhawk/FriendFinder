// Dependecies
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

// Express configuration
let app = express()
const PORT = process.env.PORT || 5000

// CSS file access
app.use(express.static(path.join(_dirname, './app/public')))

// Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.text())

// Routes
require(path.join(_dirname, './app/routing/apiRoutes'))(app)
require(path.join(_dirname, './app/routing/htmlRoutes'))(app)

// Port listening
app.listen(PORT, function() {
  console.log('FriendFinder app listening on PORT: ' + PORT)
})
