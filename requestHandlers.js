function start(response){
	console.log("Request handler 'start' was called.");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("pryOpen sent from requestHandler \"start\"");
	response.end();
}

function upload(response){
	console.log("Request handler 'upload' was called.");
}

exports.start = start;
exports.upload = upload;