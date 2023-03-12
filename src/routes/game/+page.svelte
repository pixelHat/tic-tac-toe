<script lang="ts">
  import Board from "../../components/board.svelte";
  import GameHeader from "../../components/game-header.svelte";
  import OverlayGameEnd from "../../components/overlay-game-end.svelte";
  import OverlayRestart from "../../components/overlay-restart.svelte";
  import Overlay from "../../components/overlay.svelte";
  import Scores from "../../components/scores.svelte";
  import GameStore from "../../stores/GameStore";
  import { is_overlay_open } from "../../stores/OverlayStore";
  import { o_wins, ties, x_wins } from "../../stores/ScoreStore";
  import type { Mark } from "../../types/Board";
  import { Feedback } from "../../types/Winner";

  import { page } from "$app/stores";

  const params = $page.url.searchParams;
  const is_single_play = params.get("multiplayer") == null;
  const first_player_mark: Mark = params.get("player1mark") === "x" ? "x" : "o";

  let game = GameStore.getInstance();
  let is_restart_modal_open = false;

  function next_game() {
    is_overlay_open.set(false);
    game.restart();
  }

  function quit_game() {
    window.location.href = "/";
  }

  function restart_game() {
    is_overlay_open.set(false);
    is_restart_modal_open = false;
    game.restart();
  }

  function cancel() {
    is_overlay_open.set(false);
    is_restart_modal_open = false;
  }

  function open_restart_modal() {
    is_overlay_open.set(true);
    is_restart_modal_open = true;
  }

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
  <GameHeader on:restart={open_restart_modal} mark={$game.current_mark} />
  <section>
    <Board board={$game.board} disabled={!$game.is_playing} on:select={select} />
  </section>
  <Scores />
</div>

{#if $is_overlay_open }
  <Overlay>
    {#if !$game.is_playing }
      <OverlayGameEnd onQuit={quit_game} onNext={next_game} feedback={create_feedback()} winner={$game.winner} />
    {:else if is_restart_modal_open }
      <OverlayRestart onPositive={restart_game} onNegative={cancel} />
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
