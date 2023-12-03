const fs = require("fs");

const readStreams = fs.createReadStream("./doc/stream.txt");

readStreams.on("data", (chunk) => {
  console.log(chunk.toString());
});
