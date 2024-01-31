// npm -> global command, comes with node
// npm --version

// local dependency - use it only in this project
// npm i <package_name>

// remove package -> npm uninstall <package_name>

// global dependency - use it in any package
// npm install -g <package_name>

// package.json -> manifest files (stores important info about project/package)

// Manual -> create package.json file in the root, create properties etc
// npm init (step by step, enter to skip)
// npm init -y (everything default)

//installed dependencies stored in node_modules folder in the root

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);

//npm i nodemon -D [-D for dev dependency]
//Just for development purpose needed not by the application, Well remove it later
//NODEMON for dont restarting the app every time we update something

//NPX - Executable
