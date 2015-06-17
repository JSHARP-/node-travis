
if (process.send) process.send('online');

process.on('message', function(message) {
	  if (message === 'shutdown') {
	  	  //Do whatever you need to do before shutdown (cleanup, saving stuff, etc.)
	  	  process.exit(0);
	  }
});

var express = require('express'),
		message = require('./submodule-test/message'),
		app = express();

app.get('/', function (req, res) {
		res.send('<h1 style="color:blue;">' + message + '</h1>');
});

var server = app.listen(3000, function () {
		var host = server.address().address,
		port = server.address().port;
		console.log('Example app listening at http://%s:%s', 'localhost', port);
});
