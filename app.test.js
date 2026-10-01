const request = require('supertest');
const app= require('./app');
test('Get / returns 200', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
});