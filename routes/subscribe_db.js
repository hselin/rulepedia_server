/* 
 * Subscriber database is used to store user informations when they input their
 * email address under subscription buttons ("I want to support", "Subscribe to 
 * ThingPedia"). Database is written using mongoose and mongodb and running on
 * heroku mongolab. For administrator access contact Zhiyang He @hzyjerry.
 */

var mongoose = require('mongoose');
var uriUtil = require('mongodb-uri');

var options = { server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } } };       
 
/*
 * Mongoose uses a different connection string format than MongoDB's standard.
 * Use the mongodb-uri library to help you convert from the standard format to
 * Mongoose's format.
 */
var mongodbUri = 'mongodb://heroku_xkshlzdf:2n3rcmmsht7k18l3akas0mch1k@ds033047.mongolab.com:33047/heroku_xkshlzdf';
var mongooseUri = uriUtil.formatMongoose(mongodbUri);

mongoose.connect(mongooseUri, options);
//mongoose.connect('mongodb://localhost/thingpedia');

var db = mongoose.connection;

// Create song schema
var subscribeSchema = mongoose.Schema({
  name: String,
  organization: String,
  email: String
});

// Store subscribers in a collection called "subscribers"
var Subscriber = mongoose.model('subscribers', subscribeSchema);

db.on('error', console.error.bind(console, 'connection error:'));

/*db.once('open', function callback () {

});*/

module.exports = Subscriber;

