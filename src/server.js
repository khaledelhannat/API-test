const http = require('http');
const app = require('./app');
// const path = require('path');

const PORT = process.env.PORT || 8080;

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}...`);
});