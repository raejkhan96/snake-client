const net = require('net');

const connect = function () {
  const conn = net.createConnection({
    host: "135.23.223.133",
    port: 50542
  });

  conn.setEncoding('utf8');
  conn.on('connect', () => { 
    console.log('connected');
  });
  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
};

console.log('Connecting...');
connect();