const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const usersRouter = require('./routes/users.js');

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html'); // whatever frontend come up with
});

app.use('/users', usersRouter);

io.on('connection', (socket) => {
  console.log('a user connected');
});

http.listen(9090, () => {
  console.log('listening on port 9090');
});

module.exports = app;
