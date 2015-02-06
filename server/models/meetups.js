//Sets up the Meetup instance
var mongoose = require('mongoose');

module.exports = mongoose.model('Meetup', {
	name: String
});