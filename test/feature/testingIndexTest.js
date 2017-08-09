// var assert = require('assert');
// var Browser = require('zombie');
//
// var browser = new Browser();
//
// describe("Index Page", function(){
//     it("contains #content div", function(done){
//         browser.visit("http://localhost:8000/index.html", function(){
//             assert.ok(browser.success);
//             assert.ok(browser.query("#content"));
//             done();
//         });
//     });
// });

process.env.NODE_ENV = 'test';
var app = require('server');
// use zombie.js as headless browser
var Browser = require('zombie');

describe('contact page', function() {
  before(function() {
    this.server = http.createServer(app).listen(3000);
    // initialize the browser using the same port as the test application
    this.browser = new Browser({ site: 'http://localhost:3000' });
  });

  // load the contact page
  before(function(done) {
    this.browser.visit('/contact', done);
  });

  it('should show contact a form');
  it('should refuse empty submissions');
  // ...

});
