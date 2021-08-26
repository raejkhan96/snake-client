const net = require('net');
const connect = function () {
  const conn = net.createConnection({
    host: "10.0.2.15",
    port: 50541
    // host: "135.23.223.133",
    // port: 50542
  });

  conn.setEncoding('utf8');
  conn.on('connect', () => { 
    console.log('Succesfully connected to the game server');
    conn.write('Name: RJK ');
    conn.write("Move: up");
  });
  conn.on('data', (data) => {
    console.log(data);
  });


  return conn;
};

module.exports = connect;