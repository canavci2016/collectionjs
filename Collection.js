const ArrayCollection = require("./ArrayCollection");
const ObjectCollection = require("./ObjectCollection");
const File = require("./Collections/File");
const FileCollection = require("./Collections/FileCollection");


class Collection {

  constructor(collection) {
    this.collection = collection;

    if (collection instanceof File)
      this.collectionInstance = new FileCollection(this.collection);
    else if (Array.isArray(this.collection))
      this.collectionInstance = new ArrayCollection(this.collection);
    else if (typeof this.collection === 'object' && this.collection !== null)
      this.collectionInstance = new ObjectCollection(this.collection);
    else
      throw new Error("unknown collection type");
  }

  where(callback) {
    return this.collectionInstance.where(callback);
  }

  map(callback) {
    return this.collectionInstance.map(callback);
  }

  items() {
    return this.collectionInstance.items();
  }

  avg() {
    return this.collectionInstance.avg();
  }

  sum() {
    return this.collectionInstance.sum();
  }

  first(callback = undefined) {
    return this.collectionInstance.first(callback);
  }

  max() {
    return this.collectionInstance.max();
  }

  min() {
    return this.collectionInstance.min();
  }

  chunk(number) {
    return this.collectionInstance.chunk(number);
  }

  random() {
    return this.collectionInstance.random();
  }

  sort() {
    return this.collectionInstance.sort();
  }

  sortDesc() {
    return this.collectionInstance.sortDesc();
  }

  unique() {
    return this.collectionInstance.unique();
  }

  toJson() {
    return this.collectionInstance.toJson();
  }

  isEmpty() {
    return this.collectionInstance.isEmpty();
  }

  length() {
    return this.collectionInstance.length();
  }

  isNotEmpty() {
    return this.collectionInstance.isNotEmpty();
  }

  push(...items) {
    return this.collectionInstance.push(...items);
  }

  only(keys) {
    return this.collectionInstance.only(keys);
  }

  * [Symbol.iterator]() {
    yield* this.collectionInstance.iterateMe();
  }
}

module.exports = Collection;