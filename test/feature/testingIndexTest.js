process.env.NODE_ENV = 'test';
var app = require('../../app');
var assert = require('assert');
const Browser = require('zombie');
const http = require('http').createServer(app).listen(3000);

Browser.localhost('localhost', 3000);

describe('User visits homepage', function() {
  const browser = new Browser()

  beforeEach (function(done) {
    browser.visit('/', done);
  });

  describe('/', function() {
    it('User can see the welcome page', function() {
      browser.assert.text('title', 'Makersbnb');
    });
    it('User can redirect to a new page and book a space', function() {
      browser.clickLink('Book').then(function() {


      assert.equal(browser.text('h1'), 'Book a Space');

    });
  });
    it('User can redirect to a new page to add a new listing', function() {
      browser.clickLink('Become a host').then(function() {
      assert.equal(browser.text('label'), 'Street');
      });
    });
    it('User can visit signup page', function(){
      browser.clickLink('Sign up').then(function(){
        assert.equal(browser.text('label'), 'Name');
      });
    });

  });
});
