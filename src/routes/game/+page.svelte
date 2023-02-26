<script lang="ts">
  import Board from "../../components/board.svelte";
  import GameHeader from "../../components/game-header.svelte";
  import OverlayGameEnd from "../../components/overlay-game-end.svelte";
  import Overlay from "../../components/overlay.svelte";
  import Scores from "../../components/scores.svelte";
  import { is_overlay_open } from "../../stores/OverlayStore";
  import type { Board as BoardType } from "../../types/Board";
  import { Feedback } from "../../types/Winner";

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

  is_overlay_open.set(true);
</script>

<div>
  <GameHeader />
  <section>
    <Board {board} on:select={select} />
  </section>
  <Scores />
</div>

{#if $is_overlay_open }
  <Overlay>
    <OverlayGameEnd feedback={Feedback.PLAYER1} winner={'x'} />
  </Overlay>
{/if}

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
