<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { Mark } from "../types/Board";
  import Button from "./button.svelte";
  import CurrentMark from "./current-mark.svelte";
  export let mark: Mark;

  const dispatch = createEventDispatcher();

  function restart() {
    dispatch('restart');
  }

</script>

<section>
  <img src="/logo.svg" alt="">
  <div class="middle">
    <CurrentMark {mark} />
  </div>
  <div class="button">
    <Button on:click={restart} fixedSize size="xs"><img src="/icon-restart.svg" alt="restart button" /></Button>
  </div>
</section>

<style>
  section{
    --image-size: 72px;
    --restart-button-size: 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-height: 2.5rem;
    color: var(--clr-silver);
  }
  .button {
    width: var(--restart-button-size);
    height: 2.5rem;
  }
  .middle {
    margin-inline-start: calc(-1 * calc(var(--image-size) - var(--restart-button-size)) / 2);
  }
</style>
