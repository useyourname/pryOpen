var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");
var handle = {"/":requestHandlers.start, "/start":requestHandlers.start};

server.start(router.route, handle);