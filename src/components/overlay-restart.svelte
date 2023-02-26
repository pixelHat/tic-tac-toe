<script lang="ts">
  import Button from "./button.svelte";
  import Heading from "./heading.svelte";
</script>

<div class="container">
  <Heading as="h1">
    <div class="feedback">
      Restart Game?
    </div>
  </Heading>
  <div class="buttons">
    <Button><span class="padding">NO, CANCEL</span></Button>
    <Button type="primary"><span class="padding">YES, RESTART</span></Button>
  </div>
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
  .buttons {
    display: flex;
    column-gap: 1rem;
    margin-block-start: 1.5rem;
  }
</style>
