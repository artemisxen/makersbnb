// npm run test  to test

const assert = require('chai').assert;
// const sayHello = require('../space').sayHello;
// const addNumbers = require('../space').addNumbers;
const space = require('../space');

describe('space', function(){
  describe('sayHello', function(){
    it('sayHello should return hello', function(){
      let result = space.sayHello();
      assert.equal(result, 'Hello');
    });

    it('sayHello should return type string', function(){
      let result = space.sayHello();
      assert.typeOf(result, 'string');
    });
  });

  describe('addNumbers', function(){
    it('add numbers should be above 5', function(){
      let result = space.addNumbers(5,5);
      assert.isAbove(result, 5);
    });

    it('addNumbers should return type number', function(){
      let result = space.addNumbers();
      assert.typeOf(result, 'number');
    });
  });

});
