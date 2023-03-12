<script lang="ts">
  import GameStore from "../stores/GameStore";
  import type { Cell } from "../types/Board";
  import Box from "./box.svelte";
  import IconO from "./icon-o.svelte";
  import IconOutlineO from "./icon-outline-o.svelte";
  import IconOutlineX from "./icon-outline-x.svelte";
  import IconX from "./icon-x.svelte";

  export let cell: Cell;
  export let highlight: boolean;

  const game = GameStore.getInstance();
  let hover = false;
  let color: "blue"|"yellow"|undefined = undefined;
  $: {
    if (!highlight) color = undefined;
    else if (cell === "x") color = "blue";
    else if (cell === "o") color = "yellow";
  }
  </script>

<Box {color}>
  <div on:mouseleave={() => hover = false} on:focus={() => hover = true} on:mouseover={() => hover = true}>
    {#if highlight && cell !== " " }
      {#if cell === "o" }
        <IconOutlineO />
      {:else}
        <IconOutlineX />
      {/if}
    {:else if cell === "x" }
      <IconX color='blue' />
    {:else if cell === "o" }
      <IconO color='yellow' />
    {:else if hover }
      {#if $game.current_mark === "o" }
        <IconOutlineO />
      {:else}
        <IconOutlineX />
      {/if}

    {/if}
  </div>
</Box>

<style>
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    cursor: pointer;
  }
</style>
