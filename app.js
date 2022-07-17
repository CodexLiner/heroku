// const http = require('http');
// const port = process.env.PORT || 3000

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Hello World</h1>');
// });

// server.listen(port,() => {
//   console.log(`Server running at port `+port);
// });

const express = require("express");
const BrowserHistory = require("node-browser-history");

const PORT = 5000;

const app = express();
app.get("/history", (req, res) => {
  BrowserHistory.getChromeHistory(100).then(function (history) {
    res.send(history);
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
