const { readFileWithPromise } = require("./lib");
const http = require("http");
const hostname = "0.0.0.0";
const port = 3000;
const server = http.createServer((request, response) => {
  readFileWithPromise("./MOCK_DATA.json")
    .then(data => {
      response.statusCode = 200;
      response.setHeader("Content-Type", "application/json");
      response.end(data);
    })
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
