<script lang="ts">
  import type { Cell } from "../types/Board";
  import Box from "./box.svelte";
  import IconO from "./icon-o.svelte";
  import IconX from "./icon-x.svelte";

  export let cell: Cell;
</script>

<Box>
  <div class:filled={cell === "x" || cell === "o"}>
  {#if cell === "x" }
    <IconX color={'blue'} />
  {:else if cell === "o" }
    <IconO color={'yellow'} />
  {/if}
  </div>
</Box>

<style>
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
</style>
