var express			  = require('express'),
	app				  = express(),
	bodyParser		  = require('body-parser'),
	mongoose		  = require('mongoose'),
	meetupsController = require('./server/controllers/meetups-controller');

//Connects MongoDB
mongoose.connect('mongodb://localhost:27017/mean-demo')

//Parses JSON messages
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(bodyParser.json());

//Routes '/' to 'index.html'
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/client/views/index.html');
});

//Routes '/js' to '/client/js'
app.use('/js', express.static(__dirname + '/client/js'));

//REST API
app.get('/api/meetups', meetupsController.list);
app.post('/api/meetups', meetupsController.create);

//Creates server
app.listen(3000, function() {
	console.log('I\'m Listening...');
});