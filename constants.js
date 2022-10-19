const IP = "localhost";
const PORT = 50541;
const MOVE_KEYS = {
  'W': 'Move: up',
  'S': 'Move: down',
  'A': 'Move: left',
  'D': 'Move: right'
};

const MESSAGES = {
  'O': "Say: get wrekt!",
  'P': "Say: okay good play.",
  'L': 'Say: yummy',
};


module.exports = {
  IP,
  PORT,
  MESSAGES,
  MOVE_KEYS
};