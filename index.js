//Testing out a new method for building Slackbots

var http = require('http');
const PORT=4390

function handleRequest(request, response){
	response.end('You set it up correctly! The path to your fixed purpose is paved with iron rails... - Path Hit: ' + request.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
	console.log("Server listening on: http://localhost:%s", PORT);
});
