const path = require("path");

console.log(path.sep); //outputs what we call a file separator

const filePath = path.join("/content/", "subfolder", "text.txt"); // joining the paths  to a path
console.log(filePath);

const base = path.basename(filePath); // return endpoint base only
console.log(base);

const absolute = path.resolve(__dirname, "content", "subfoler", "text.txt");
console.log(absolute);

console.log(path.join);
