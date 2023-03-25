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
  import { onMount } from "svelte";
  import { base } from '$app/paths';
  import { goto } from '$app/navigation';


  const params = new URLSearchParams(window.location.search);
  const is_single_play = params.get("multiplayer") == null;
  const first_player_mark: Mark = params.get("player1mark") === "x" ? "x" : "o";

  let game = GameStore.getInstance();
  let is_restart_modal_open = false;

  onMount(new_game);

  function next_game() {
    is_overlay_open.set(false);
    new_game();
  }

  function quit_game() {
    goto(base)
  }

  function restart_game() {
    is_overlay_open.set(false);
    is_restart_modal_open = false;
    new_game();
  }

  function cancel() {
    is_overlay_open.set(false);
    is_restart_modal_open = false;
  }

  function new_game() {
    if (!is_single_play) {
      game.newGameTwoPlayer();
    } else {
      game.newGameVSCPU(first_player_mark === "x" ? "o" : "x");
    }
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

  function mark_player_title(mark: Mark) {
    if (is_single_play) {
      if (first_player_mark === mark) return "YOU";
      return "CPU"
    }
    if (first_player_mark === mark) return "P1";
    return "P2";
  }
</script>

<div>
  <GameHeader mark={$game.current_mark} on:restart={open_restart_modal} />
  <section>
    <Board board={$game.board} disabled={!$game.is_playing} on:select={select} />
  </section>
  <Scores xPlayer={mark_player_title("x")} oPlayer={mark_player_title("o")} />
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
  @media (min-width: 460px) {
    div {
      margin-block-start: 8.75rem;
    }
  }
</style>
