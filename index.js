const path = require('path');
const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  }
});
const port = process.env.PORT || 8080;
var cors = require('cors')
app.use(cors({
  origin: ['*']
}))
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});
io.on('connection', (socket) => {
  console.log('user connected');
  socket.on('disconnect', function () {
    console.log('user disconnected');
  });
})
server.listen(port, function() {
  console.log(`Listening on port ${port}`);
});