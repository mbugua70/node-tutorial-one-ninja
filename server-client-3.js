const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.setHeader("content-type", "text/html");
  if (req.url === "/") {
    fs.readFile("./public/index.html", (err, data) => {
      res.write(data);
      res.end();
    });
  } else if (req.url === "/about") {
    fs.readFile("./public/about.html", (err, data) => {
      res.write(data);
      res.end();
    });
  } else {
    fs.readFile("./public/pageNotFound.html", (err, data) => {
      res.write(data);
      res.end();
    });
  }
});

server.listen(3002, () => {
  console.log("Listening to port 3002...");
});
