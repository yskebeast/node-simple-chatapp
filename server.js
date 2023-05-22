const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);

const PORT = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  //__dirnameはこのserver.jsがある階層をさす（node-chatapp）
  res.sendFile(`${__dirname}/index.html`);
});

//受け取るときはon、送るときはemitを指定する
io.on('connection', (socket) => {
  console.log('user connected');

  socket.on('message', (msg) => {
    io.emit('message', msg);
  });
});

server.listen(PORT, () => {
  console.log('listen on http://localhost:3000');
});
