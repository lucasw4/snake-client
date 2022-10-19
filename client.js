const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: "172.31.118.167",
    port: 50541,
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