<script lang="ts">
  import type { Mark } from "../types/Board";
  import Button from "./button.svelte";
  import CurrentMark from "./current-mark.svelte";
  export let mark: Mark;
</script>

<section>
  <img src="/logo.svg" alt="">
  <CurrentMark {mark} />
  <div class="button">
    <Button fixedSize size="xs"><img src="icon-restart.svg" alt="restart button" /></Button>
  </div>
</section>

<style>
  section{
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-height: 2.5rem;
    color: var(--clr-silver);
  }
  .button {
    width: 2.5rem;
    height: 2.5rem;
  }
</style>
