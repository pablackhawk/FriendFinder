// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Configure the Express application
let app = express();
const PORT = process.env.PORT || 5000;

// Expose the public directory to access CSS files
app.use(express.static(path.join(__dirname, './app/public')));

// Add middleware for parsing incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Add the application routes
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

// Start listening on PORT
app.listen(PORT, function() {
  console.log('FriendFinder is listening on PORT: ' + PORT);
});
