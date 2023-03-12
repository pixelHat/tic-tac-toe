<script lang="ts">
  import ButtonGroup from "./button-group.svelte";
  import Button from "./button.svelte";
  import Heading from "./heading.svelte";

  export let onPositive: (ev: CustomEvent<any>) => void;
  export let onNegative: (ev: CustomEvent<any>) => void;
</script>

<div class="container">
  <Heading as="h1">
    <div class="feedback">
      Restart Game?
    </div>
  </Heading>
  <ButtonGroup>
    <Button on:click={onNegative}><span class="padding">NO, CANCEL</span></Button>
    <Button on:click={onPositive} type="primary"><span class="padding">YES, RESTART</span></Button>
  </ButtonGroup>
</div>

<style>
  .padding {
    padding-inline: 1.0625rem 1rem;
  }
  .container {
    width: 100%;
    background-color: var(--clr-semi-dark-navy);
    padding-block: 2.8125rem;
    display: flex;
    flex-direction: column; align-items: center;
    color: var(--clr-silver);
  }
  .feedback {
    margin-block-start: 1rem;
    color: var(--clr-silver);
    text-transform: uppercase;
  }
</style>
