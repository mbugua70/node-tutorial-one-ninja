// writeFile function

// its async function
// takes three arguements.

const fs = require("fs");

fs.writeFile(
  "./doc/blog.text",
  "Anim culpa aliquip laboris eiusmod et esse. Amet nulla mollit enim mollit. Exercitation duis fugiat ipsum duis.",
  () => {
    console.log("file read");
  }
);
