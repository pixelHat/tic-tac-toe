<script lang="ts">
  import Heading from "./heading.svelte";
  import Text from "./text.svelte";
  export let title: string;
  export let score: number;
  export let color: 'blue'|'yellow'|'silver';
</script>

<article class={color}>
  <Text>{title}</Text>
  <Heading as="h2">{score}</Heading>
</article>

<style>
  .blue {
    background-color: var(--clr-light-blue);
  }
  .yellow {
    background-color: var(--clr-light-yellow);
  }
  .silver {
    background-color: var(--clr-silver);
  }
  article {
    padding-block: 0.75rem;
    border-radius: 0.9375rem;
    text-align: center;
    color: var(--clr-dark-navy);
    font-size: 0.8rem;
    text-transform: uppercase;
  }
</style>
