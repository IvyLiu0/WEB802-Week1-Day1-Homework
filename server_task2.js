var http = require('http');
var fs = require('fs');

var port = 5000;

var server = http.createServer((req, res) => {
    if (req.url === '/'){
        fs.readFile('./home.html', function(err, data){
            if (err) {
                res.statusCode = 404;
                res.write('Invalid Request!');
            } else {
                res.statusCode = 200;
                res.setHeader("Content-Type", "text/html");
                res.write(data);
                res.end();
            }
        });
    } else if (req.url === '/about') {
        fs.readFile("./about.html", function (err, data) {
          if (err) {
            res.statusCode = 404;
            res.write("Invalid Request!");
          } else {
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            res.write(data);
            res.end();
          }
        });
    } else if (req.url === '/contact') {
         fs.readFile("./contact.html", function (err, data) {
           if (err) {
             res.statusCode = 404;
             res.write("Invalid Request!");
           } else {
             res.statusCode = 200;
             res.setHeader("Content-Type", "text/html");
             res.write(data);
             res.end();
           }
         });
    } else {
        res.statusCode = 404;
        res.write("Invalid Request!");
        res.end();
    }
});

server.listen(port, () => {
  console.log(`The NodeJs server on port ${port} is now running...`);
});