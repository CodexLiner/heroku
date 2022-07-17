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

const PORT = 3000;

const app = express();
app.get("/", (req, res) => {
  res.send("<h1>Hello Bhai <h1/>");
});
app.get("/history", (req, res) => {
  try {
    BrowserHistory.getChromeHistory(10).then(function (history) {
      res.send(history);
    });
  } catch (e) {
    res.send("failed bhai");
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
