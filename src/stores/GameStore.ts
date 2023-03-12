import type { Mark } from "../types/Board";
import _ from "lodash";
import { writable, type Subscriber, type Writable } from "svelte/store";
import Minimax from "../game/minimax";
import TicTacToe from "../game/tictactoe";

export default class GameStore {
  private static instance: GameStore;
  private ticTacToe: TicTacToe;
  private store: Writable<GameStore>;
  private ia = new Minimax(true);
  private vsIA = false;

  public is_playing = true;
  public winner:Mark|null = null;
  public winner_squares:number[] = [];

  private constructor() {
    this.store = writable(this);
    this.ticTacToe = new TicTacToe();
  }

  public static getInstance() {
    if (!GameStore.instance) {
        GameStore.instance = new GameStore();
    }
    return GameStore.instance;
  }

  newGameVSCPU(cpu_mark: Mark) {
    this.restart();
    this.vsIA = true;
    const should_minimaze = cpu_mark === "o";
    this.ia = new Minimax(should_minimaze);
    if (!should_minimaze) {
      const move = this.ia.move(this.ticTacToe);
      this.ticTacToe.move(move);
    }
  }

  newGameTwoPlayer() {
    this.restart();
    this.vsIA = false;
  }

  move(idx: number) {
    const is_valid_move = this.ticTacToe.move(idx);
    if (is_valid_move === null) return null;
    this.validate();
    this.store.set(this);
    if (this.is_playing && this.vsIA) {
      const move = this.ia.move(this.ticTacToe);
      this.ticTacToe.move(move);
      this.validate();
    }
    this.store.set(this);
  }

  restart() {
    this.is_playing = true;
    this.winner = null;
    this.winner_squares = [];
    this.ticTacToe.restart();
    this.store.set(this);
  }

  subscribe(subscriber: Subscriber<GameStore>) {
    return this.store.subscribe(subscriber);
  }

  get board() {
    return _.cloneDeep(this.ticTacToe.board);
  }

  get current_mark() {
    return this.ticTacToe.current_mark;
  }

  private validate() {
    const has_winner = this.ticTacToe.winner;
    const draw = this.ticTacToe.draw;
    if (has_winner) {
      this.winner = has_winner;
      this.is_playing = false;
    } else if (draw) {
      this.winner = null;
      this.is_playing = false;
    }
  }
}
