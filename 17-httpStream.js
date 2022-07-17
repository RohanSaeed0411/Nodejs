const http = require("http");
const fs = require("fs");

const server = http
  .createServer((req, res) => {
    const fileStream = fs.createReadStream("./content/big.txt", "utf-8");
    fileStream.on("open", () => {
      fileStream.pipe();
    });

    fileStream.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(5000);
