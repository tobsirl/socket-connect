const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
// const readline = require('readline');

const GameState = require('./gamestate');

const createEmptyTable = () =>
  new Array(6).fill(0).map(() => new Array(9).fill(0));

board = createEmptyTable();

const gameState = new GameState(1, 2, null, board, false, '', {});

//const board = gameState.initBoard(board);

//gameState.board = board;

//gameState.playToken(1);
//gameState.makeMove('game12', 1, 23);
gameState.printBoard();
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

// app.get('/', (req, res) => {
//   res.send(gameState);
// });

// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   terminal: false
// });

// console.log('Please enter your name:');
// rl.on('line', (line) => {
//   gameState.message = line;
//   console.log(`Hi ${gameState.message}, place your token`);
// });


io.sockets.on('connection', (socket) => {
  socket.on('join', (data) => {
    console.log(`Player logged on ${data}`);
  })
});

server.listen(3000, () => console.log(`Server started on port 3000`));
