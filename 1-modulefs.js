const fs = require("fs");
// console.log(fs);

// file system modules can read file , write file, directories and delete files

// reading file

// readFile is async function
// does not wait to read data for the other code to run
fs.readFile("./data.text", (error, data) => {
  if (error) {
    console.log(error);
  }
  console.log(data.toString());
});

console.log("last text");
