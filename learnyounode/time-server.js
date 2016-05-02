var net = require('net');
var d = new Date(); 

if (d.getMonth() < 9) {
	var month = "0" + (d.getMonth()+1).toString();
} else {
	var month = (d.getMonth()+1).toString();
}


if (d.getDate() < 10) {
	var day = "0" + d.getDate().toString();
} else {
	var day = d.getDate().toString();
}

if (d.getHours() < 10) {
	var hours = "0" + d.getHours().toString();
} else {
	var hours = d.getHours().toString();
}

if (d.getMinutes() < 10) {
	var minutes = "0" + d.getMinutes().toString();
} else {
	var minutes = d.getMinutes().toString();
}

var date = d.getFullYear().toString() + "-" + month + "-" + day + " " + hours + ":"  + minutes + '\n';

var server = net.createServer(function (socket) {
	socket.end(date);
});
server.listen(process.argv[2]);
