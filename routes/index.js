var express = require('express');
var router = express.Router();
<<<<<<< HEAD
// Subscriber database module (mongoose model for subscribers)
var Subscriber = require('../routes/subscribe_db')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Thingpedia'});
});

router.post('/subscribe', function(req, res){
	console.log("Request body");
	console.log(req.body);
	if (!Subscriber){
		console.log("Error while setting up mongodb database");
	}else{
		var subs_spec = req.body;
		var new_subscriber = new Subscriber({
			name: subs_spec.name,
			organization: subs_spec.organization,
			email: subs_spec.email
		});
		new_subscriber.save(function(error){
			if (error){
				res.status(500).send('Error while saving subscription instance.');
			}else{
				res.status(200).send('Subscription instance successfully saved');
			}
		});
	}
=======

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sabrina\'s Magic Shop' });
>>>>>>> 00022b0dc29741ed5d285de7a9be63a6970dd203
});

module.exports = router;
