const net = require('net');
const connect = function () {
  const conn = net.createConnection({
    host: "135.23.223.133",
    port: 50542
  });

  conn.setEncoding('utf8');
  conn.on('connect', () => { 
    console.log('Succesfully connected to the game server');
  });
  conn.on('data', (data) => {
    console.log(data);
  });
  conn.write('Name: RJK ')

  return conn;
};

module.exports = connect;