var fs = require("fs");

var file = fs.readFileSync(process.argv[2]);

var fileToString = file.toString();

var lines = fileToString.split("\n");

var numOfLines = lines.length - 1;

console.log(numOfLines);
