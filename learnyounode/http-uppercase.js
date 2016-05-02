var http = require('http');
var map = require('through2-map');

http.createServer(function (req, res) {
	if (req.method == 'POST') {
		req.pipe(map(function (data) {
			return data.toString().toUpperCase();
		})).pipe(res);
	} else {
		res.end("Send me a POST!");
	}
}).listen(process.argv[2]);
