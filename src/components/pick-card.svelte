<script lang="ts">
	import { createEventDispatcher } from "svelte";
  import Box from "../components/box.svelte";
  import type { Mark } from "../types/Board";
  import Heading from "./heading.svelte";
  import IconO from "./icon-o.svelte";
  import IconOutlineO from "./icon-outline-o.svelte";
  import IconOutlineX from "./icon-outline-x.svelte";
  import IconX from "./icon-x.svelte";
  import Text from "./text.svelte";

  export let selected: Mark = "x";

  $: is_x_selected = selected === "x";

  function select_mark(mark: "x"|"o") {
    selected = mark;
    onChange();
  }

  const dispatch = createEventDispatcher();

  function onChange() {
    dispatch('change', {
      value: selected
    });
  }
</script>

<Box>
  <div class="container">
    <header>
      <Heading as="h4">PICK PLAYER 1’S MARK</Heading>
    </header>
    <section class="picker">
      <button class:selected={is_x_selected} on:click={() => select_mark("x")}>
        {#if is_x_selected }
          <IconOutlineX color="silver" size="32" />
        {:else }
          <IconX size="32" />
        {/if}
      </button>
      <button class:selected={!is_x_selected} on:click={() => select_mark("o")}>
        {#if !is_x_selected }
          <IconOutlineO color="silver" size="32"/>
        {:else}
          <IconO size="32" />
        {/if}
      </button>
    </section>
    <div class="remember">
      <Text>REMEMBER : X GOES FIRST</Text>
    </div>
  </div>
</Box>

<style>
  .container {
    text-align: center;
    padding: 1.5rem;
    border: 0.625rem;
  }
  .picker {
    color: var(--clr-silver);
    background-color: var(--clr-dark-navy);
    display: flex;
    justify-content: space-between;
    padding: 0.5625rem;
    margin-block-start: 1.5rem;
    border-radius: 0.625rem;
  }
  .picker button {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-block: 0.6875rem;
    cursor: pointer;
  }
  .picker button.selected {
    background-color: var(--clr-silver);
    color: var(--clr-dark-navy);
    border-radius: 0.625rem;
  }
  .picker button:not(.selected):hover {
    background-color: rgba(168, 191, 201, 0.05);
    border-radius: 0.625rem;
  }
  .remember {
    color: var(--clr-silver);
    opacity: 0.5;
    margin-block-start: 1.0625rem;
  }
  header {
    color: var(--clr-silver);
  }
</style>
