const http = require("http");

// localhost is like a domain name
// port number rep specific number or door to your computer

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    console.log("john doe");
    res.setHeader("content-type", "text/plain");
    res.write("Home page it is");
    res.end();
  }
});

server.listen(3000, () => {
  console.log("Listening for request on port 3000...");
});
