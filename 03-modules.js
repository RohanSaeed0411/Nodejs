//CommonJS, every file is module (by default)
//Modules - Encapsulated Code (only share minimum)
const names = require("../node-tutorial/04-names");
const sayHi = require("./05-utils");
const data = require("./06-alternativeFlavor");
require("./07-mindGrenade");
console.log(data);
sayHi("susan");
sayHi(names.john);
sayHi(names.peter);
