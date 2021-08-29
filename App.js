var http = require('http');
http.createServer( function(request, response){
response.writeHead(200);
response.writeHead("My Name is Md Adil Alam");
response.end();
}).listen(9001,function(){
	console.log("Server is running");
});