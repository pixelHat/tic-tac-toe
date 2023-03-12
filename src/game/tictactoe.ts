import _ from "lodash";
import type { Board, Mark } from "../types/Board";

const WINNER_PATTERNS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

export default class TicTacToe {
  public board = new Array(9).fill(" ") as Board;
  public current_mark: Mark = "x";

  move(idx: number) {
    if (this.board[idx] !== " ") {
      return null
    }
    this.board[idx] = this.current_mark;
    this.swap_mark();
  }

  restart() {
    this.current_mark = "x";
    this.board = new Array(9).fill(" ") as Board;
  }

  copy() {
    const tic = new TicTacToe();
    tic.board = _.cloneDeep(this.board);
    tic.current_mark = this.current_mark;
    return tic;
  }

  get winner() {
    const x_won = this.find_match_winner("x");
    const o_won = this.find_match_winner("o");
    if (x_won) return "x";
    if (o_won) return "o";
  }

  get draw() {
    return this.empty_cells.length === 0;
  }

  get squares_winner() {
    return this.find_match_winner("x")
    || this.find_match_winner("o");
  }

  get empty_cells() {
    return this.board.reduce((acc: number[], cell, idx) => {
      if (cell ===  " ") return [...acc, idx];
      return acc;
    }, []);
  }

  private swap_mark() {
    this.current_mark = this.current_mark === "x" ? "o" : "x";
  }

  private find_match_winner(mark: Mark) {
    return WINNER_PATTERNS.find(
      pattern => pattern.every(index => this.board[index] === mark)
    )
  }
}
