// npm run test  to test

const assert = require('chai').assert;
// const sayHello = require('../server').sayHello;
// const addNumbers = require('../server').addNumbers;
const server = require('../server');

describe('Server', function(){
  describe('sayHello', function(){
    it('sayHello should return hello', function(){
      let result = server.sayHello();
      assert.equal(result, 'Hello');
    });

    it('sayHello should return type string', function(){
      let result = server.sayHello();
      assert.typeOf(result, 'string');
    });
  });

  describe('addNumbers', function(){
    it('add numbers should be above 5', function(){
      let result = server.addNumbers(5,5);
      assert.isAbove(result, 5);
    });

    it('addNumbers should return type number', function(){
      let result = server.addNumbers();
      assert.typeOf(result, 'number');
    });
  });

});
