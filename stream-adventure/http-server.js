var http = require('http');
var through = require('through2');

http.createServer(function(req, res) {
    if (req.method === 'POST') {
        req.pipe(through(function(buffer, _, next) {
            this.push(buffer.toString().toUpperCase());
            next();
        })).pipe(res);
    } else {
        res.end('Send me a fucking POST\n');
    }
}).listen(process.argv[2]);
