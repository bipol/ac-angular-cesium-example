var express = require('express');
var app = express();

app.use(express.static(__dirname + "/src/"));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

var server = app.listen(process.env.PORT || 8000, function () {
	var host = "127.0.0.1";
	var port = server.address().port;
	console.log('server listening at http://%s:%s', host, port);
});

//routes
app.get('/', function(req, res) {
  res.sendFile('./src/index.html');
});

