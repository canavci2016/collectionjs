const ArrayCollection = require("./ArrayCollection");
const ObjectCollection = require("./ObjectCollection");
const Collection = require("./Collection");
const File = require("./Collections/File");
const FileCollection = require("./Collections/FileCollection");

const col = new Collection(new File("./MOCK_DATA.csv"));

col.map(item => {
  return item + "mapped";
}).where(item => {
  return item.includes("Ann");
}).items(cc => {
  console.log(cc);
});

module.exports = Collection;
module.exports.ArrayCollection = ArrayCollection;
module.exports.ObjectCollection = ObjectCollection;
module.exports.FileCollection = FileCollection;
module.exports.File = File;