let connection;

const handleUserInput = function (key) {
  // \u0003 maps to ctrl+c
  if (key === '\u0003') {
    process.exit();
  }
  // w
  if (key === '\u0077') {
    connection.write('Move: up');
  }
  // a
  if (key === '\u0061') {
    connection.write('Move: left');
  }
  // s
  if (key === '\u0073') {
    connection.write('Move: down');
  }
  // d
  if (key === '\u0064') {
    connection.write('Move: right');
  }
};

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', data => handleUserInput(data));
  return stdin;
};

module.exports = setupInput;