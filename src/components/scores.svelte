<script lang="ts">
  import { x_wins, o_wins, ties } from "../stores/ScoreStore";
  import Score from "./score.svelte";

  type Players = "P1" | "P2" | "YOU" | "CPU";

  export let xPlayer: Players;
  export let oPlayer: Players ;

  $: xTitle = `x (${xPlayer})`;
  $: oTitle = `o (${oPlayer})`;
</script>

<section>
  <Score title={xTitle} score={$x_wins} color="blue" />
  <Score title="ties" score={$ties} color="silver" />
  <Score title={oTitle} score={$o_wins} color="yellow" />
</section>

<style>
  section {
    margin-block-start: 1.25rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
  }
</style>
