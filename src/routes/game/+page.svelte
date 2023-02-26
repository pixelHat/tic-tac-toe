<script lang="ts">
  import Board from "../../components/board.svelte";
	import Scores from "../../components/scores.svelte";
  import type { Board as BoardType } from "../../types/Board";

  let board: BoardType = [
    ' ', ' ', ' ',
    'x', 'o', 'x',
    ' ', 'o', ' ',
  ]

  let current_player: 'x'|'o' = 'x';

  function select(event: CustomEvent) {
    board[event.detail.index] = current_player;
    console.log(" plays", event.detail.index);
  }
</script>

<div>
  <Board {board} on:select={select} />
  <Scores />
</div>

<style>
  div {
    width: fit-content;
    margin-inline: auto;
  }
</style>
