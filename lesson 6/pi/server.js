//server.js
var connect = require('connect');
var serveStatic = require('serve-static');
var port = 4000;

connect().use(serveStatic(__dirname)).listen(port);

console.log('server started on http://localhost:'+port);
