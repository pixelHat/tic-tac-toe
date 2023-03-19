<script lang="ts">
  import type { Mark } from "../types/Board";
  import Box from "./box.svelte";
  import IconO from "./icon-o.svelte";
  import IconX from "./icon-x.svelte";

  export let mark: Mark;
</script>

<Box size="xs">
  <div class="current-mark">
    {#if mark === "x" }
      <IconX />
    {:else }
      <IconO />
    {/if}
    TURN
  </div>
</Box>

<style>
  .current-mark {
    --svg-width: 16px;
    --svg-height: 16px;
    padding-block: 0.625rem;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 6rem;
    column-gap: 0.625rem;
    letter-spacing: 2px;
    font-weight: var(--fw-bold);
  }

  @media (min-width: 460px) {
    .current-mark {
      column-gap: 0.8125rem;
      font-size: 1rem;
    }
  }
</style>
