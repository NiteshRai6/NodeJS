const http = require('http');

http.createServer((req, res) => {
    res.write('<h1>This is Nitesh Rai from Node Server</h1>');
    res.end();
}).listen(4000);