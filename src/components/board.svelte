<script lang="ts">
  import { createEventDispatcher } from "svelte";
	import GameStore from "../stores/GameStore";
  import type { Board } from "../types/Board";
  import BoardField from "./board-field.svelte";

  export let board: Board;
  export let disabled: boolean = false;

  const game = GameStore.getInstance();

  const dispatch = createEventDispatcher();

  function click(index: number) {
    if (disabled) return;
    dispatch('select', { index });
  }
</script>

<section>
{#each board as cell, idx}
  <button on:click={() => click(idx)}>
    <BoardField {cell} highlight={$game.winner_squares?.includes(idx)} />
  </button>
{/each}
</section>

<style>
  section {
    --size: 6rem;
    display: grid;
    grid-template-rows: repeat(3, var(--size));
    grid-template-columns: repeat(3, var(--size));
    gap: 1.25rem;
    justify-content: center;
  }
  @media (min-width: 460px) {
    section {
      --size: 8.75rem;
    }
  }
</style>
