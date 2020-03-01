const http = require("http");
const fs = require("fs");

const server2 = http.createServer((req, res) => {
  let filePath = "files/cat.html";

  fs.readFile(filePath, (err, data) => {
    if (err) throw err;

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);

    res.end();
  });
});

server2.listen(8288, "localhost");
