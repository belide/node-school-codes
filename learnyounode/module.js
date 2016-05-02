module.exports = function (dir, ext, callback) {
	var fs = require('fs');
	var path = require('path');

	fs.readdir(dir, function (err, list) {
		if (err)
			return callback(err);

		var arr = [];

		list.forEach(function (file) {
			if (path.extname(file) == '.' + ext) {
				arr.push(file);
			}
		});

		callback(null, arr);
	});
}
