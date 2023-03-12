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
  private static instance: TicTacToe;

  public current_mark: Mark = "x";
  public is_playing = true;
  public winner:Mark|null = null;
  public winner_squares:number[] = [];
  private store: Writable<TicTacToe>;

  private constructor() {
    this.store = writable(this);
  }

  public static getInstance() {
    if (!TicTacToe.instance) {
        TicTacToe.instance = new TicTacToe();
    }
    return TicTacToe.instance;
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
    this.winner_squares = [];
    this.store.set(this);
  }

  private swap_mark() {
    this.current_mark = this.current_mark === "x" ? "o" : "x";
  }

  private check_winner() {
    if (!this.is_playing) return;
    const x_won = this.find_match_winner("x");
    const o_won = this.find_match_winner("o");
    if (x_won) {
      this.winner = "x";
      this.winner_squares = x_won;
      this.is_playing = false;
    } else if (o_won) {
      this.winner = "o";
      this.winner_squares = o_won;
      this.is_playing = false;
    }
  }

  private check_draw() {
    if (!this.is_playing) return;
    this.is_playing = this._board.some(cell => cell === " ");
  }

  private find_match_winner(mark: Mark) {
    return WINNER_PATTERNS.find(
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
