// the local variable "hello" is the thing shared by "hello.js"
var kirbyDance = require("kirby-dance");
var hello = require("./hello.js");
var chalk = require("chalk");
var cool = require("cool-ascii-faces");

console.log( chalk.cyan(cool()) );

console.log( kirbyDance(3) );
console.log( chalk.bgMagenta(kirbyDance(4)) );

console.log( chalk.bgGreen("Hola") );
console.log( chalk.bgRed.cyan("Adios"));

hello("world");
hello("Lucas");
hello("Arthur");
