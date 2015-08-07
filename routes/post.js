/* 
 * Used for devices that support real-time posting api (data read from the device will be
 * posted to "thingpedia.stanford.edu/post/*") 
 */
var express = require('express');
var router = express.Router();

/* 
 * Data from bodytrace scale (thingpedia.stanford.edu/post/bodytrace)
 * Post requests are sent in JSON format strings: 
 * 		'{"imei":”012896009462125”,"ts":1380562575798,
 * 		"batteryVoltage":5522, "signalStrength":91,"values":{"unit":16400,"weight":69800}}' 
 * Each JSON object is in the form of
 * 		{imei: '012896009462125',
 *  	ts: 1380562575798,
 *  	batteryVoltage: 5522,
 *  	signalStrength: 91,
 *  	values: { unit: 16400, weight: 69800 } }
 * Explaination:
 * 		imei: IMEI (as shown on barcode without dashes) 
 * 		ts: timestamp when the measurement was taken (milliseconds since UNIX Epoch, UTC) 
 * 		batteryVoltage: battery voltage (in mV) - 
 * 			functional battery voltage range: 4.7-6.0 V (could go a little over 6.0 V) 
 * 		signalStrength: signal strength (in percentage) – e.g. 91 = 91% 
 * 		values/unit: measurement unit the scale was in at the time of taking the measurement 
 * 		values/weight: weight value (in grams - regardless of unit)
 */
var bodytrace = require('./postdb/bodytrace');
router.post('/bodytrace', function(req, res){

	console.log(req.body);
});

module.exports = router;