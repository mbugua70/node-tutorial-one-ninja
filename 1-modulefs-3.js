// directories

// we learn about creating directories

const fs = require("fs");

if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("directory created");
  });
}
{
  console.log("The directory exist");
}
