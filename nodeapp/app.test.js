const request = require('supertest');
const app = require('./app');

test('GET / responds with Hello World message', done => {
  request(app)
    .get('/')
    .expect(200)
    .expect('Hello World from Mohamed Khairy!', done);
});
