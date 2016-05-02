var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function (err, files) {
	if (err)
		throw err;

	files.filter(function (file) {
		if (path.extname(file) == '.' + process.argv[3]) {
			console.log(file);
		}
	});
});
