var express = require('express'),
	app = express();

app.get('/', function (req, res) {
	res.send('<h1>Hello World!</h1>');
});

var server = app.listen(3000, function () {
	var host = server.address().address,
		port = server.address().port;
	console.log('Example app listening at http://%s:%s', 'localhost', port);
});
