module.exports = class ObjectCollection {

  constructor(object) {
    this.object = object;
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

    for (let index = 0; index < items.length; ++index) {
      this.merge(items[index]);
    }

    return this;
  }

  only(keys) {
    const obj = {};

    for (let index = 0; index < keys.length; ++index) {
      const element = keys[index];
      if (this.hasKey(element))
        obj[element] = this.get(element);
    }

    return this.returnMe(obj);
  }

  get(key) {
    return this.items()[key];
  }

  merge(obj) {
    this.object = {...this.object, ...obj};
  }

  hasKey(key) {
    return this.items().hasOwnProperty(key);
  }

  filter(callback) {
    return Object.keys(this.items()).filter(key => callback(key, this.get(key))).reduce((res, key) => (res[key] = this.get(key), res), {});
  }

  length() {
    return Object.keys(this.items()).length;
  }

  items() {
    return this.object;
  }

  returnMe(object) {
    return new ObjectCollection(object);
  }

};