const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.on('connect', () => {
    console.log(`Connection successfully established!`);
    conn.write('Name: LUC');

  });
  conn.on('data', (data) => {
    console.log(`Server: ${data}`);
  });

  conn.setEncoding("utf-8");

  return conn;
};

module.exports = connect;