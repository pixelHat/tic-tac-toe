<script lang="ts">
  import Board from "../../components/board.svelte";
  import GameHeader from "../../components/game-header.svelte";
  import OverlayGameEnd from "../../components/overlay-game-end.svelte";
  import OverlayRestart from "../../components/overlay-restart.svelte";
  import Overlay from "../../components/overlay.svelte";
  import Scores from "../../components/scores.svelte";
  import TicTacToe from "../../stores/GameStore";
  import { is_overlay_open } from "../../stores/OverlayStore";
  import { o_wins, ties, x_wins } from "../../stores/ScoreStore";
	import type { Mark } from "../../types/Board";
  import { Feedback } from "../../types/Winner";

  const is_single_play = true;
  const first_player_mark = "x";

  const game = new TicTacToe();

  function select(event: CustomEvent) {
    game.move(event.detail.index)

  }

  function player_winner(mark: Mark) {
    const players = is_single_play ? [Feedback.WON, Feedback.LOST] : [Feedback.PLAYER1, Feedback.PLAYER2];
    if (mark === first_player_mark) {
      return players[0];
    }
    return players[1];
  }

  function create_feedback() {
    if (game.winner === "x") {
      x_wins.update(v => v + 1);
      return player_winner("x");
    } else if (game.winner === "o") {
      o_wins.update(v => v + 1);
      return player_winner("o");
    } else {
      ties.update(v => v + 1);
      return Feedback.DRAW;
    }
  }

  $: if (!$game.is_playing) {
    is_overlay_open.set(true);
  }


</script>

<div>
  <GameHeader mark={$game.current_mark} />
  <section>
    <Board board={$game.board} disabled={!$game.is_playing} on:select={select} />
  </section>
  <Scores />
</div>

{#if $is_overlay_open }
  <Overlay>
    {#if !$game.is_playing }
      <OverlayGameEnd feedback={create_feedback()} winner={$game.winner} />
    {/if}
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
