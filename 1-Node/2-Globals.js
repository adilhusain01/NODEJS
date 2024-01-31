//Node uses CommonJS library , every file is module (by default)
//Modules - Encapsulated Code (only share minimum) Upto us to share what and what not to share by exports
//Modules

const names = require("./3_1-Names");
const sayHi = require("./3_2-Fnc");
const data = require("./4-AltMethod");
require("./5-MindGrenade");

// sayHi(names.john);
// sayHi(names.peter);
// sayHi(data.allPlanets.p1);
