function route(pathname, handle, resonse){
	console.log("About to route a request for " + pathname);
	if(typeof handle[pathname] == "function"){
		handle[pathname](resonse);
	}else{
		console.log("No request handler found for path: " + pathname);
	}
}

exports.route = route;