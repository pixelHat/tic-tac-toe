<script lang="ts">
  import Box from "../components/box.svelte";
  import Heading from "./heading.svelte";
  import IconO from "./icon-o.svelte";
  import IconOutlineO from "./icon-outline-o.svelte";
  import IconOutlineX from "./icon-outline-x.svelte";
  import IconX from "./icon-x.svelte";

  let is_x_selected = true;

  function select_mark(mark: "x"|"o") {
    is_x_selected = mark === "x";
  }
</script>

<Box>
  <div>
    <Heading as="h4" color="silver">PICK PLAYER 1’S MARK</Heading>
    <section class="picker">
      <button class:selected={is_x_selected} on:click={() => select_mark("x")}>
        {#if is_x_selected }
          <IconOutlineX size="32" />
        {:else }
          <IconX size="32" />
        {/if}
      </button>
      <button class:selected={!is_x_selected} on:click={() => select_mark("o")}>
        {#if !is_x_selected }
          <IconO size="32" />
        {:else}
          <IconOutlineO size="32"/>
        {/if}
      </button>
    </section>
    <p>REMEMBER : X GOES FIRST</p>
  </div>
</Box>

<style>
  div {
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
  p {
    color: var(--clr-silver);
    opacity: 0.5;
    margin-block-start: 1.0625rem;
  }
</style>
