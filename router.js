function route(pathname, handle, response){
	console.log("About to route a request for " + pathname);
	if(typeof handle[pathname] == "function"){
		handle[pathname](response);
	}else{
		console.log("No request handler found for path: " + pathname);
	}
}

exports.route = route;