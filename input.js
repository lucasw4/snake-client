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

  if (key === 'W' || key == 'w') {
    conn.write('Move: up');
  }
  if (key === 'A' || key === 'a') {
    conn.write('Move: left');
  }
  if (key === 'S' || key === 's') {
    conn.write('Move: down');
  }
  if (key === 'D' || key === 'd') {
    conn.write('Move: right');
  }
  if (key === 'P') {
    conn.write('Say: get wrekt!');
  }
  if (key === 'O') {
    conn.write('Say: okay fair game');
  }
};

module.exports = setupInput;