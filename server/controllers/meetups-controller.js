//Imports Meetup instance
var Meetup = require('../models/meetups.js');

//exported Methods
module.exports.create = function (req, res) {
	var meetup = new Meetup(req.body);
	meetup.save(function (err, result) {
		res.json(result);
	});
}

module.exports.list = function (req, res) {
	Meetup.find({}, function (err, results) {
		res.json(results);
	});
}