var express = require("express");
var app = express();
// app.use(express.static(__dirname));
app.get("/", function(request, response){
	response.send("pryOpen");
});
app.listen(process.env.PORT || 8888);
console.log("express server listening on 8888");