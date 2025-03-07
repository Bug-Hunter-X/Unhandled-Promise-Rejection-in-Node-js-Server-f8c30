const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  response.end(JSON.stringify({ message: 'Hello from Node.js!' }));
};

const server = http.createServer(requestListener);

server.listen(8080);
console.log('Server is running on port 8080');
//Error: Unhandled promise rejection
//The error message is not very helpful.  More context is needed to determine the root cause.