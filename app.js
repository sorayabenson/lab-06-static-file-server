const fs = require('fs').promises;
const net = require('net');
const parseRequest = require('./utils/parseRequest.js');
const createResponse = require('./utils/createResponse.js');

const app = net.createServer(socket => {
    socket.on('data', data => {
        const { path, method } = parseRequest(data.toString());

        if(method === 'GET' && path === '/index.html') {
            fs
                .readFile(`public${path}`, 'utf-8')
                .then((data) => socket.end(createResponse({
                    body: data,
                    contentType: 'text/html',
                    status: '200 OK'
                })))
                .catch((err) => console.error(err));
            
        } else {
            socket.end(createResponse({ 
                body: 'Not Found', 
                status: '404 Not Found', 
                contentType: 'text/plain' }));
        }
    });

});

module.exports = app;
