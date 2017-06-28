const app = require('./app');
const server = require('http').Server(app);
require('./socket_io/index.socket.io')(server);

// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
// var items = require('../database-mongo');

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`DeepSubs listening on port ${PORT}!`);
});
