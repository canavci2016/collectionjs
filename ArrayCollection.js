module.exports = class ArrayCollection {

  constructor(array) {
    this.array = [...array];
  }

  where(callback) {
    return this.returnMe(this.filter(callback));
  }

  map(callback) {
    return this.returnMe(this.items().map(callback));
  }

  avg() {
    return this.sum() / this.length();
  }

  sum() {
    return this.items().reduce((partialSum, a) => partialSum + a, 0);
  }

  first(callback = element => element) {
    return this.items().find(callback);
  }

  chunk(chunkSize) {
    let chunkList = [];
    for (let i = 0; i < this.length(); i += chunkSize) {
      const chunk = this.items().slice(i, i + chunkSize);
      chunkList.push(chunk);
    }
    return this.returnMe(chunkList);
  }

  max() {
    return Math.max(...this.items());
  }

  min() {
    return Math.min(...this.items());
  }

  random() {
    return this.items()[Math.floor(Math.random() * this.length())];
  }

  sort() {
    return this.sortBase((a, b) => a - b);
  }

  sortDesc() {
    return this.sortBase((a, b) => b - a);
  }

  sortBase(callback) {
    const newCol = this.items();
    newCol.sort(callback);

    return this.returnMe(newCol);
  }

  unique() {
    return this.returnMe([...new Set(this.items())]);
  }

  toJson() {
    return JSON.stringify(this.items());
  }

  isEmpty() {
    return this.length() === 0;
  }

  isNotEmpty() {
    return this.length() > 0;
  }

  push(...items) {
    this.items().push(...items);
    return this;
  }

  only(keys) {
    const array = [];

    for (let index = 0; index < keys.length; ++index) {
      const element = keys[index];
      if (this.hasKey(element))
        array.push(this.get(element));
    }

    return this.returnMe(array);
  }

  get(key) {
    return this.items()[key];
  }

  hasKey(key) {
    return this.items().hasOwnProperty(key);
  }

  filter(callback) {
    return this.items().filter(callback);
  }

  length() {
    return this.array.length;
  }

  items() {
    return this.array;
  }

  returnMe(array) {
    return new ArrayCollection(array);
  }


  iterateMe() {
    return this.items().entries();
  }

  * [Symbol.iterator]() {
    yield* this.iterateMe();
  }
};