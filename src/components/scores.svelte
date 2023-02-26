<script>
  import Score from "./score.svelte";
  let player1 = 3;
  let player2 = 5;
  let ties = 10;
</script>

<section>
  <Score title="x (YOU)" score={player1} color="blue" />
  <Score title="ties" score={ties} color="silver" />
  <Score title="o (CPU)" score={player2} color="yellow" />
</section>

<style>
  section {
    margin-block-start: 1.25rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
  }
</style>
