module.exports = class GameState {
  constructor(player1, player2, currentPlayer, board, gameOver, message) {
    this.player1 = player1;
    this.player2 = player2;
    this.currentPlayer = currentPlayer;
    this.board = board;
    this.gameOver = gameOver;
    this.message = message;
  }

  initBoard() {
    // Create a blank 6x9 matrix
    const createEmptyTable = () =>
      new Array(6).fill(null).map(() => new Array(9).fill(null));

    this.board = createEmptyTable();
    console.log(this.board);
  }

  // playToken(col) {
  //   for (let r = 5; r >= 0; r--) {
  //     if (!this.board[r][col]) {
  //       this.board[r][col] = this.player1;
  //       break;
  //     }
  //   }
  // }

  // makeMove(room, col, pid) {
  //   const board = this.games[room].board;
  //   const moveMade = false;
  //   for (let i = board.length - 1; i >= 0; i--) {
  //     if (board[i][col] === 0) {
  //       board[i][col] = pid;
  //       moveMade = true;
  //       break;
  //     }
  //   }
  //   return moveMade;
  // }

  printBoard() {
    console.table(this.board);
  }
};
