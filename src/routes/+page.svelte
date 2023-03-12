<script lang="ts">
  import Button from "../components/button.svelte";
  import PickCard from "../components/pick-card.svelte";
  import type { Mark } from "../types/Board";

  let player1mark: Mark = "x";

  $: vs_cpu = `/game?player1mark=${player1mark}`;
  $: two_players = `/game?player1mark=${player1mark}&multiplayer=true`;
</script>

<img src="/logo.svg" alt="">
<section class="pick-card">
  <PickCard on:change={(event) => player1mark = event.detail.value} selected={player1mark} />
</section>
<section class="buttons">
  <Button type="primary">
      <a href={vs_cpu}>NEW GAME (VS CPU)</a>
  </Button>
  <Button type="secondary"><a href={two_players}>NEW GAME  (VS PLAYER)</a></Button>
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
  a {
    display: inline-block;
    width: 100%;
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
