var express = require('express');
var stylus = require('stylus');
var fs = require('fs');
var app = express();

app.use(stylus.middleware(
  { 
    src: __dirname + '/views/stylus/',
    dest: __dirname + '/public/css/'
  }
));
app.use(express.static(__dirname + '/public'));
app.use(express.bodyParser({
	uploadDir: './conversion',
	defer: true
}));

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.get('/', function(request, response){
	response.render("index");
});

app.post('/', function(request, response){
  // request.form.on('progress', function(bytesReceived, bytesExpected){
	 //  var percent = (bytesReceived / bytesExpected * 100) | 0;
	 //  console.log('Uploading: %' + percent + '\r');
  // });

  // request.form.on('end', function() {
  // 	console.log('UPLOAD COMPLETE');
  // });
  
});//end of app.post()

// app.listen(process.env.PORT || 8888, process.env.ID || '127.0.0.1');
app.listen(8080, process.env.ID);
console.log("express server listening on 8080");