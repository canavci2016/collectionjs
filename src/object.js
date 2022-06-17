const Collection = require("./Collection");

const collection = new Collection({name: "can", lastName: "avci", surname: "avci"});

console.log(collection.where((key, value) => value === "avci"));

console.log("toJson is ");
console.log(collection.toJson());

console.log("length is ");
console.log(collection.length());
console.log("isEmpty is ");
console.log(collection.isEmpty());
console.log("isNotEmpty is ");
console.log(collection.isNotEmpty());
console.log("only is ");
console.log(collection.only(['name', 'lastName']));
console.log("push is ");
console.log(collection.push({school: "dad", type: "da"}));