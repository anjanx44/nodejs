var http = require('http');

http.createServer(function(req, res){
	res.write("Hello World Node!");
	res.end();
}).listen(8080);