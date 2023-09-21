var http = require("http"); 
var fs = require("fs");

var server = http.createServer((request, response ) => {
    // response.writeHead(200, {'Content-Type': 'text/text'});
    
    // fs.readFile("sample.txt", (error, data) => {
    //     if (error) {
    //         response.end("Error while reading file")
    //     } else {
    //         response.end(data);
    //     }
    // });

    // fs.writeFile("test.txt", "new msg been addded", (error) => {
    //     response.end("Added content to file");
    // });

    fs.appendFile("test.txt", "new msg been addded", (error) => {
        response.end("Added content to file");
    });
    
    
});


server.listen(5052, () => {
    console.log("Serer is listing at 5052")
});