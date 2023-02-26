<script lang="ts">
  import Board from "../../components/board.svelte";
  import GameHeader from "../../components/game-header.svelte";
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
  <GameHeader />
  <section>
    <Board {board} on:select={select} />
  </section>
  <Scores />
</div>

<style>
  div {
    width: fit-content;
    margin-inline: auto;
    margin-block-start: 1.5rem;
  }
  section:nth-child(2) {
    margin-block-start: 4rem;
  }

</style>
