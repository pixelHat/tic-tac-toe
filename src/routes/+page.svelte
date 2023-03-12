<script lang="ts">
  import Button from "../components/button.svelte";
  import PickCard from "../components/pick-card.svelte";
  import type { Mark } from "../types/Board";

  let player1mark: Mark = "x";

  function start_game(params: string) {
    window.location.href = `/game?${params}`;
  }

  function start_game_vs_CPU() {
    return start_game(`player1mark=${player1mark}`)
  }

  function start_game_vs_player() {
    return start_game(`player1mark=${player1mark}&multiplayer=true`)
  }
</script>

<img src="/logo.svg" alt="">
<section class="pick-card">
  <PickCard selected={player1mark} />
</section>
<section class="buttons">
  <Button on:click={start_game_vs_CPU} type="primary">
      NEW GAME (VS CPU)
  </Button>
  <Button on:click={start_game_vs_player} type="secondary">NEW GAME  (VS PLAYER)</Button>
</section>

<style>
  img {
    height: 2rem;
    width: 4.44rem;
    display: block;
    margin-inline: auto;
  }
  .pick-card {
    margin-block-start: 2rem;
  }
  .buttons {
    margin-block-start: 2rem;
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 1rem;
  }

  @media (min-width: 460px) {
    .pick-card {
      margin-block-start: 2.5rem;
    }
    .buttons {
      margin-block-start: 2.5rem;
      row-gap: 1.25rem;
    }
  }

  :global(body > div > main) {
    justify-content: center;
  }
</style>
