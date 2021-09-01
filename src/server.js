const http = require("http");
const router = require("./router");
const hostname = "localhost";
const port = 5000;
const server = http.createServer(router);
server.listen(port, hostname);
