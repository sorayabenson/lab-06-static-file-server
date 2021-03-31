const fs = require('fs').promises;
const net = require('net');
const parseRequest = require('./utils/parseRequest.js');
const createResponse = require('./utils/createResponse.js');

const app = net.createServer(socket => {
    socket.on('data', data => {
        const request = parseRequest(data.toString());

        if(request.method === 'GET' && request.path === `/index.html`) {
            fs
                .readFile('public/index.html', 'utf-8')
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
