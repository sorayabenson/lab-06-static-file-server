const request = require('supertest');
const app = require('../app.js');

describe('file server functions', () => {
    it('reads a file called responds with the content', () => {
        return request(app)
            .get('/index.html')
            .then((res) => {
                expect(res.text).toEqual('<h1>hey bebe</h1>');
            });
    });

    it('reads a file called responds with the content', () => {
        return request(app)
            .get('/ghost.html')
            .then((res) => {
                expect(res.status).toEqual(404)
                expect(res.text).toEqual('Not Found');
            });
    });

});
