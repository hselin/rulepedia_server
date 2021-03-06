var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var create = require('./routes/create');
var browse = require('./routes/browse');
var about = require('./routes/about');
var rule = require('./routes/rule');
var channels = require('./routes/channels');
var remove = require('./routes/remove');
var webhook = require('./routes/webhook');
var query = require('./routes/query');
<<<<<<< HEAD
var post = require('./routes/post')
=======
>>>>>>> 00022b0dc29741ed5d285de7a9be63a6970dd203

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

<<<<<<< HEAD
app.use('/', routes);             // Default page. With all UI updates
// The following pages have not been modified.
// TODO: New developer page UI
// TODO: Rewrite channels format
// TODO: Implement new channel database
=======
app.use('/', routes);
>>>>>>> 00022b0dc29741ed5d285de7a9be63a6970dd203
app.use('/users', users);
app.use('/create', create);
app.use('/browse', browse);
app.use('/about', about);
app.use('/rule/*', rule);
app.use('/channels', channels);
app.use('/remove', remove);
app.use('/webhook', webhook);
app.use('/query', query);
<<<<<<< HEAD
app.use('/post', post);
=======
>>>>>>> 00022b0dc29741ed5d285de7a9be63a6970dd203

app.use('/db', express.static('db'));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

<<<<<<< HEAD
// Node.js launching code to enable "">> node app.js" command to run in terminal,
// used for local debugging process.
// Uncomment it while testing/debugging on localhost
// Comment it to mount on rulepedia.org
// =======================================================
app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
// =======================================================
=======
>>>>>>> 00022b0dc29741ed5d285de7a9be63a6970dd203

module.exports = app;
