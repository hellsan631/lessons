//server.js
var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(4000);

console.log('server started on localhost:4000');
