var request = require('supertest');
var app = require('../index.js');

describe('GET /', function () {
  it('Responds with "Hello, World!" text', function (done) {
    request(app).get('/').expect('Hello, World!', done);
  });
});
