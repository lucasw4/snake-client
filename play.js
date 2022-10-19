const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: "172.31.118.167",
    port: 50541,
  });

  conn.on('data', (data) => {
    console.log(`Server: ${data}`);
  });

  conn.setEncoding("utf-8");

  return conn;
};

console.log("Connecting...");
connect();