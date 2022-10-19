const { MESSAGES, MOVE_KEYS } = require('./constants');

let conn;

// Setup for handling input and sending to server
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

  let uppercase = key.toUpperCase();
  // toUpperCase so that we can play the game without needing caps lock on

  // Uses object with each movement key to move instead of writing individual if statements for each key
  if (uppercase in MOVE_KEYS) {
    conn.write(MOVE_KEYS[uppercase]);
  }
  if (MESSAGES[uppercase]) {
    conn.write(MESSAGES[uppercase]);
  }
};

module.exports = setupInput;