const request = require('supertest');
const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send('Hello World from Mohamed Khairy!');
});

test('GET / responds with Hello World message', done => {
  request(app)
    .get('/')
    .expect(200)
    .expect('Hello World from Mohamed Khairy!', done);
});
