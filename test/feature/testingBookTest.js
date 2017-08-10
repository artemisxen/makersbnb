process.env.NODE_ENV = 'test';
var app = require('../../app');
var assert = require('assert');
const Browser = require('zombie');
const http = require('http').createServer(app).listen(3000);

Browser.localhost('localhost', 3000);

describe('User visits homepage', function() {
  const browser = new Browser()

  beforeEach (function(done) {
    browser.visit('/book', done);
  });

  describe('/book', function() {
    it('User can see the booking page', function() {
      browser.assert.text('h1', 'Book a Space');
    });

    it('User can redirect to a new page and book a space', function() {
      browser.clickLink('List a Space').then(function() {
      assert.equal(browser.text('h2'), 'Become a host');
    });
  });
  

  });
});
