// deleting files

const fs = require("fs");

if (fs.existsSync("./doc/delete.text")) {
  // unlink () method is used to delete the file
  fs.unlink("./doc/delete.text", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file deleted");
  });
} else {
  console.log("The file does not exist, Please create your file");
}
