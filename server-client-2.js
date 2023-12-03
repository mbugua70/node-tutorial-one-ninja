const http = require("http");

// localhost is like a domain name
// port number rep specific number or door to your computer

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    console.log("john doe");
    res.setHeader("content-type", "text/html");
    res.write("<h1>John doe one</h1>");
    res.write("<h1>John doe two</h1>");
    res.end();
  }
});

server.listen(3001, () => {
  console.log("Listening for request on port 3001...");
});
