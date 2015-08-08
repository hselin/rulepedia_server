/* 
 * Subscriber database is used to store user informations when they input their
 * email address under subscription buttons ("I want to support", "Subscribe to 
 * ThingPedia"). Database is written using mongoose and mongodb and running on
 * heroku mongolab. For administrator access contact Zhiyang He @hzyjerry.
 */

var mongoose = require('mongoose');
var uriUtil = require('mongodb-uri');

var options = {};
options.server.socketOptions = options.replset.socketOptions = { keepAlive: 1 };
 
/*
 * Mongoose uses a different connection string format than MongoDB's standard.
 * Use the mongodb-uri library to help you convert from the standard format to
 * Mongoose's format.
 */
var mongodbUri = 'mongodb://localhost:27017/post-bodytrace';
var mongooseUri = uriUtil.formatMongoose(mongodbUri);

mongoose.connect(mongooseUri, options);

var db = mongoose.connection;

// Create song schema
var bodytraceSchema = mongoose.Schema({
  imei: String,
  ts: Number,
  batteryVoltage: Number,
  signalStrength: Number,
  values:
  	{unit: Number, weight: Number}
});

// Store subscribers in a collection called "subscribers"
var BodytraceData = mongoose.model('post-bodytrace', bodytraceSchema);

db.on('error', console.error.bind(console, 'connection error:'));

module.exports = BodytraceData;

