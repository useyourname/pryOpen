var express = require('express');
var stylus = require('stylus');
var app = express();

app.use(stylus.middleware(
  { 
    src: __dirname + '/views/stylesheets/',
    dest: __dirname + '/public/css/'
  }
));
app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(function(request, response){
	response.render("index");
});
// app.listen(process.env.PORT || 8888, process.env.ID || '127.0.0.1');
app.listen(8080, process.env.ID);
console.log("express server listening on 8080");