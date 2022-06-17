var assert = require('assert');
const Collection = require("../src/index");
var expect = require('expect.js');


describe('hooks', function () {
  before(function () {
    // runs once before the first test in this block
  });

  after(function () {
    // runs once after the last test in this block
  });

  beforeEach(function () {
    // runs before each test in this block
  });

  afterEach(function () {
    // runs after each test in this block
  });

});


const rawArray = [133, 2, 4, 5, 2, 23, 42];
const collection = new Collection(rawArray);
const rawObj = {name: "can", lastName: "avci", surname: "avci"};
const collectionObj = new Collection(rawObj);


describe('ArrayCollection', function () {

  describe('#sum()', function () {
    it('the sum of values in the array', function () {
      assert.equal(collection.sum(), rawArray.reduce((p, a) => p + a, 0));
    });
  });

  describe('#max()', function () {
    it('max value in the array', function () {
      assert.equal(collection.max(), Math.max(...rawArray));
    });
  });

  describe('#min()', function () {
    it('min value in the array', function () {
      assert.equal(collection.min(), Math.min(...rawArray));
    });
  });

  describe('#avg()', function () {
    it('avg value in the array', function () {
      assert.equal(collection.avg(), (rawArray.reduce((p, a) => p + a, 0)) / rawArray.length);
    });
  });

  describe('#random()', function () {
    it('random value from the array', function () {
      expect(collection.random()).to.be.a('number');
    });
  });

  describe('#toJson()', function () {
    it('cast to json an array', function () {
      assert.equal(collection.toJson(), JSON.stringify(rawArray));
    });
  });

  describe('#isEmpty()', function () {
    it('checks if array is empty', function () {
      expect(collection.isEmpty()).to.be.a('boolean');
    });
    it('checks if the result is false ', function () {
      expect(collection.isEmpty()).to.be(false);
    });
  });

  describe('#isNotEmpty()', function () {
    it('checks if array is not empty', function () {
      expect(collection.isNotEmpty()).to.be.a('boolean');
    });
    it('checks if the result is false ', function () {
      expect(collection.isNotEmpty()).to.be(true);
    });
  });


  describe('#sort()', function () {
    it('sort array', function () {
      expect(collection.isNotEmpty()).to.be.a('boolean');
    });

  });


  describe('#items()', function () {

    it('return the array itself', function () {
      const rawArray = [133, 2, 4, 5, 2, 23, 42];
      const collection = new Collection(rawArray);
      expect(collection.items()).to.eql(rawArray);
    });

  });

  describe('#sort()', function () {

    it('array asc', function () {
      const rawArray = [133, 2, 4, 5, 2, 23, 42];
      const collection = new Collection(rawArray);
      rawArray.sort((a, b) => a - b);
      expect(collection.sort().items()).to.eql(rawArray);
    });

    it('array desc', function () {
      const rawArray = [133, 2, 4, 5, 2, 23, 42];
      const collection = new Collection(rawArray);
      rawArray.sort((a, b) => b - a);
      expect(collection.sortDesc().items()).to.eql(rawArray);
    });


  });

  describe('#unique()', function () {

    it('unique values', function () {
      const rawArray = [133, 2, 4, 5, 2, 23, 42];
      const collection = new Collection(rawArray);
      expect(collection.unique().items()).to.eql([...new Set(rawArray)]);
    });

  });

  describe('#push()', function () {

    it('add values into the array', function () {
      let rawArray2 = [133, 2, 4, 5, 2, 23, 47];
      const collection = new Collection([133, 2, 4, 5, 2, 23, 47]);
      collection.push(44, 22, 12);
      rawArray2.push(44, 22, 12);
      expect(collection.items()).to.eql(rawArray2);
    });

  });

  describe('#first()', function () {
    it('first value that meet the condition passed in the callback', function () {
      const collection = new Collection([133, 2, 4, 5, 2, 23, 47]);
      expect(collection.first(element => element < 10)).to.eql(2);
    });
  });

  describe('#only()', function () {
    it('retrive the values by given keys', function () {
      const collection = new Collection([133, 2, 4, 5, 2, 23, 47]);
      expect(collection.only([0, 1, 5]).items()).to.eql([133, 2, 23]);
    });
  });

  describe('#iterate through()', function () {
    it('retrive the values by given keys', function () {
      const collection = new Collection([133, 2, 4, 5, 2, 23, 47]);
      for (const [key, value] of collection) {
        console.log("key is : " + key + " value is : ", value);
      }
    });
  });

  describe('#where()', function () {
    it('retrive the values by given where condition', function () {
      const collection = new Collection([133, 2, 4, 5, 2, 23, 47]);
      expect(collection.where((item) => item > 5).items()).to.eql([133, 23, 47]);
    });
  });


  describe('#chunk()', function () {

    it('slice the array by given values', function () {
      const collection = new Collection([133, 2, 4, 5, 2, 23, 47]);
      expect(collection.chunk(2).length()).to.eql(4);
    });

  });


});

describe('ObjectCollection', function () {

  describe('#sum()', function () {
    it('the sum of values in the array', function () {

    });
  });

  describe('#max()', function () {
    it('max value in the array', function () {
    });
  });

  describe('#min()', function () {
    it('min value in the array', function () {
    });
  });

  describe('#avg()', function () {
    it('avg value in the array', function () {
    });
  });

  describe('#random()', function () {
    it('random value from the array', function () {
    });
  });

  describe('#toJson()', function () {
    it('cast to json an array', function () {
      assert.equal(collectionObj.toJson(), JSON.stringify(rawObj));
    });
  });

  describe('#isEmpty()', function () {
    it('checks if array is empty', function () {
      expect(collectionObj.isEmpty()).to.be.a('boolean');
    });
    it('checks if the result is false ', function () {
      expect(collectionObj.isEmpty()).to.be(false);
    });
  });

  describe('#isNotEmpty()', function () {
    it('checks if array is not empty', function () {
      expect(collectionObj.isNotEmpty()).to.be.a('boolean');
    });
    it('checks if the result is false ', function () {
      expect(collectionObj.isNotEmpty()).to.be(true);
    });
  });


  describe('#sort()', function () {
    it('sort array', function () {
    });

  });


  describe('#items()', function () {

    it('return the array itself', function () {
      expect(collectionObj.items()).to.eql(rawObj);
    });

  });

  describe('#sort()', function () {

    it('array asc', function () {

    });

    it('array desc', function () {

    });


  });

  describe('#unique()', function () {

    it('unique values', function () {
    });

  });

  describe('#push()', function () {

    it('add values into the array', function () {

    });

  });

  describe('#first()', function () {
    it('first value that meet the condition passed in the callback', function () {

    });
  });

  describe('#only()', function () {
    it('retrive the values by given keys', function () {
    });
  });

  describe('#iterate through()', function () {
    it('retrive the values by given keys', function () {

    });
  });

  describe('#where()', function () {
    it('retrive the values by given where condition', function () {

    });
  });


  describe('#chunk()', function () {

    it('slice the array by given values', function () {

    });

  });


});