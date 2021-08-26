const handleUserInput = function (key) {
  // \u0003 maps to ctrl+c
  if (key === '\u0003') {
    process.exit();
  }
};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', data => handleUserInput(data));
  return stdin;
};

module.exports = setupInput;