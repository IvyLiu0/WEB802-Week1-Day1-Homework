var http = require("http");

var port = 5000;

var server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(`<html><body><h1>Home Page.</h1></body></html>`);
  } else if (req.url === "/about") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(`<html><body><h1>About Page.</h1></body></html>`);
  } else if (req.url === "/contact") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(`<html><body><h1>Contact Page.</h1></body></html>`);
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.end("Invalid Request");
  }
});

server.listen(port, () => {
  console.log(`The NodeJs server on port ${port} is now running...`);
});
