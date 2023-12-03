const fs = require("fs");

const readStreams = fs.createReadStream("./doc/stream.txt", {
  encoding: "utf8",
});

const writeStream = fs.createWriteStream("./doc/blog2.txt");

readStreams.on("data", (chunk) => {
  console.log(chunk);
  writeStream.write(`\nNewChunk\n`);
  writeStream.write(chunk);
});

// piping
// the above code can be written as follows

// readStreams.pipe(writeStream);
