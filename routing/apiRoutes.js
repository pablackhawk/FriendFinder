// Dependencies
const path = require('path')

// Import the list of friend entries
let friends = require('../data/friends.js')

// Export API routes
module.exports = function(app) {
  // Total list of friend entries
  app.get('/api/friends', function(req, res) {
    res.json(friends)
  })

  // Add new friend entry
  app.post('/api/friends', function(req, res) {
    // Capture the user input object
    let userInput = req.body

    let userResponses = userInput.scores

    // Compute best friend match
    let matchName = ''
    let matchImage = ''
    let totalDifference = 10000 // Make the initial value big for comparison

    // Examine all existing friends in the list
    for (let i = 0; i < friends.length; i++) {
      // console.log('friend = ' + JSON.stringify(friends[i]));

      // Compute differenes for each question
      let diff = 0
      for (let j = 0; j < userResponses.length; j++) {
        diff += Math.abs(friends[i].scores[j] - userResponses[j])
      }

      // If lowest difference, record the friend match
      if (diff < totalDifference) {
        totalDifference = diff
        matchName = friends[i].name
        matchImage = friends[i].photo
      }
    }

    // Add new user
    friends.push(userInput)

    // Send appropriate response
    res.json({ status: 'OK', matchName: matchName, matchImage: matchImage })
  })
}
