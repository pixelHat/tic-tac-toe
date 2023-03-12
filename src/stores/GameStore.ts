import type { Board, Mark } from "../types/Board";
import _ from "lodash";
import { writable, type Subscriber, type Writable } from "svelte/store";

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
  private _board = new Array(9).fill(" ") as Board;
  public current_mark: Mark = "x";
  public is_playing = true;
  public winner:Mark|null = null;
  private store: Writable<TicTacToe>;

  constructor() {
    this.store = writable(this);
  }

  move(idx: number) {
    if (this.board[idx] !== " ") {
      return null
    }
    this._board[idx] = this.current_mark;
    this.swap_mark();
    this.check_winner();
    this.check_draw();
    this.store.set(this);
  }

  restart() {
    this.is_playing = true;
    this.current_mark = "x";
    this._board = new Array(9).fill(" ") as Board;
    this.winner = null;
  }

  private swap_mark() {
    this.current_mark = this.current_mark === "x" ? "o" : "x";
  }

  private check_winner() {
    if (!this.is_playing) return;
    if (this.check_win("x")) {
      this.winner = "x";
      this.is_playing = false;
    } else if (this.check_win("o")) {
      this.winner = "o";
      this.is_playing = false;
    }
  }

  private check_draw() {
    if (!this.is_playing) return;
    this.is_playing = this._board.some(cell => cell === " ");
  }

  private check_win(mark: Mark) {
    return WINNER_PATTERNS.some(
      pattern => pattern.every(index => this._board[index] === mark)
    )
  }

  get board() {
    return _.cloneDeep(this._board);
  }

  subscribe(subscriber: Subscriber<TicTacToe>) {
    return this.store.subscribe(subscriber);
  }
}
