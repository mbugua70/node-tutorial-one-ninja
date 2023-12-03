// streams and buffer
// start using buffer before it has finished loading

const fs = require("fs");

for (let i = 0; i < 10000; i++) {
  fs.writeFileSync(
    "./doc/stream.txt",
    `Et aliqua eu dolore ipsum dolore quis et exercitation Lorem. Aliquip deserunt labore in officia nostrud. Ipsum ullamco aliqua et pariatur Lorem laboris nisi veniam fugiat tempor laboris. Adipisicing sit ad amet est voluptate sit enim esse duis ipsum eiusmod. Esse ex non duis culpa nisi sint laboris voluptate laborum exercitation.${i} \n`,
    {
      flag: "a",
    }
  );
}
