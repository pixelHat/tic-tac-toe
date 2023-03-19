<script lang="ts">
  import type { Mark } from "../types/Board";
  import { Feedback } from "../types/Winner";
  import ButtonGroup from "./button-group.svelte";
  import Button from "./button.svelte";
  import Heading from "./heading.svelte";
  import IconO from "./icon-o.svelte";
  import IconX from "./icon-x.svelte";
  import Text from "./text.svelte";

  export let onNext: (ev: CustomEvent<any>) => void;
  export let onQuit: (ev: CustomEvent<any>) => void;
  export let feedback: Feedback;
  export let winner: Mark|null;

  $: feedback_text = [
    "OH NO, YOU LOST…",
    "YOU WON!",
    "ROUND TIED",
    "PLAYER 1 WINS!",
    "PLAYER 2 WINS!"
  ];
</script>

<div class="container">
  {#if feedback !== Feedback.DRAW }
    <Text>{feedback_text[feedback]}</Text>
  {/if}
  <Heading as="h1">
    <div class={`feedback ${winner}`}>
      {#if feedback === Feedback.DRAW}
        ROUND TIED
      {:else if winner === "o" }
        <IconO /> TAKES THE ROUND
      {:else}
        <IconX /> TAKES THE ROUND
      {/if}
    </div>
  </Heading>
  <ButtonGroup>
    <Button on:click={onQuit} size="xs"><span class="padding">QUIT</span></Button>
    <Button on:click={onNext} size="xs" type="primary"><span class="padding">NEXT ROUND</span></Button>
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
    display: flex;
    align-items: center;
    gap: 1.5rem;
    color: var(--clr-silver);
  }
  .x {
    --svg-width: 1.75rem;
    --svg-height: 1.75rem;
    color: var(--clr-light-blue);
  }
  .o {
    --svg-width: 1.875rem;
    --svg-height: 1.875rem;
    color: var(--clr-light-yellow);
  }
  .buttons {
    display: flex;
    column-gap: 1rem;
    margin-block-start: 1.5rem;
  }

  @media (min-width: 460px) {
    .x, .o {
      --svg-width: 4rem;
      --svg-height: 4rem;
    }
  }
</style>
