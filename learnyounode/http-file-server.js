var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
	var readStream = fs.createReadStream(process.argv[3]);
	res.writeHead(200, { 'content-type': 'text/plain' });
	readStream.pipe(res);
}).listen(+process.argv[2]);
