<script>
  import { x_wins, o_wins, ties } from "../stores/ScoreStore";
  import Score from "./score.svelte";
</script>

<section>
  <Score title="x (YOU)" score={$x_wins} color="blue" />
  <Score title="ties" score={$o_wins} color="silver" />
  <Score title="o (CPU)" score={$ties} color="yellow" />
</section>

<style>
  section {
    margin-block-start: 1.25rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
  }
</style>
