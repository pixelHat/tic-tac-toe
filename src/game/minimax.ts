import _ from "lodash";
import type TicTacToe from "../game/tictactoe";

export default class Minimax {
  constructor(private should_minimaze: boolean) {}

  move(board: TicTacToe): number {
    let bestMove = null;
    let bestScore = this.initial_score;
    const emptys = board.empty_cells;
    for (const e of emptys) {
      const board_with_move = board.copy();
      board_with_move.move(e);
      const score = this.minmax(board_with_move);
      if (this.is_best_score(score, bestScore)) {
        bestMove = e;
        bestScore = score;
      }
    }
    return bestMove as number;
  }

  minmax(board: TicTacToe) {
    board = board.copy();
    const winner = board.winner;
    if (winner === "x") return 1;
    else if (winner === "o") return -1;
    else if (board.draw) return 0;
    let bestScore = board.current_mark === "x" ? -Infinity : +Infinity;
    let choose_score = board.current_mark === "x" ? Math.max : Math.min;
    const emptys = board.empty_cells;
    for (const e of emptys) {
      const board_with_move = board.copy();
      board_with_move.move(e);
      const score = this.minmax(board_with_move);
      bestScore = choose_score(score, bestScore);
    }
    return bestScore;
  }

  private is_best_score(score: number, best_score: number) {
    if (this.should_minimaze)
      return score < best_score;
    return score > best_score;
  }

  private get initial_score() {
    return this.should_minimaze ? Infinity : -Infinity;
  }

  dump(board: TicTacToe) {
    const move = Math.floor(Math.random() * board.empty_cells.length);
    console.log(board.empty_cells, move)
    return board.empty_cells[move];
  }
}
