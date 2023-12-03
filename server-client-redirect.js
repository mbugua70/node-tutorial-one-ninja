//  used to redirect to another page.

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.setHeader("content-type", "text/html");
  if (req.url === "/") {
    fs.readFile("./public/index.html", (err, data) => {
      res.statusCode = 200;
      res.write(data);
      res.end();
    });
  } else if (req.url === "/about") {
    fs.readFile("./public/about.html", (err, data) => {
      res.statusCode = 200;
      res.write(data);
      res.end();
    });
  } else if (req.url === "/about-me") {
    res.statusCode = 301;
    res.setHeader("location", "/about");
    res.end();
  } else {
    fs.readFile("./public/pageNotFound.html", (err, data) => {
      res.statusCode = 404;
      res.write(data);
      res.end();
    });
  }
});

server.listen(3002, () => {
  console.log("Listening to port 3002...");
});

// status code used to send the status respond back to the browser.
