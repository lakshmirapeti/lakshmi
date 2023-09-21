var http = require("http"); 


var server = http.createServer((request, response ) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end("<b>Hello am fom ur server</b>");
});


server.listen(5052, () => {
    console.log("Serer is listing at 5052")
});