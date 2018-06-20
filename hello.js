var chalk = require("chalk");

function hello (recipient) {
  console.log( chalk.underline.blue("Hello, " + recipient + "!") );
}

// you get the "hello" function when this file is included
module.exports = hello;
