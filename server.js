var http = require("http");
var url = require("url");

function start(route, handle){
	http.createServer(function(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log("Request received for path: " + pathname);
		route(pathname, handle, response);
	}).listen(process.env.PORT, process.env.IP);
	console.log("Server has started.");
}

exports.start = start;