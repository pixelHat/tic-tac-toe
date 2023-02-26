<script lang="ts">
  import Button from "../components/button.svelte";
  import PickCard from "../components/pick-card.svelte";
</script>

<img src="/logo.svg" alt="">
<section class="pick-card">
  <PickCard/>
</section>
<section class="buttons">
  <Button type="primary">NEW GAME (VS CPU)</Button>
  <Button type="secondary">NEW GAME  (VS PLAYER)</Button>
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
</style>
