const { MOVE_UP, MOVE_LEFT, MOVE_DOWN, MOVE_RIGHT, MESSAGES } = require('./constants');

let conn;

const setupInput = function(connection) {
  conn = connection;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf-8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  if (key === `\u0003`) {
    process.exit();
  }

  if (key.toUpperCase() === MOVE_UP) {
    conn.write('Move: up');
  }
  if (key.toUpperCase() === MOVE_LEFT) {
    conn.write('Move: left');
  }
  if (key.toUpperCase() === MOVE_DOWN) {
    conn.write('Move: down');
  }
  if (key.toUpperCase() === MOVE_RIGHT) {
    conn.write('Move: right');
  }
  if (MESSAGES[key]) {
    conn.write(MESSAGES[key]);
  }
};

module.exports = setupInput;