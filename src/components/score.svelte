<script lang="ts">
  export let title: string;
  export let score: number;
  export let color: 'blue'|'yellow'|'silver';
</script>

<article class={color}>
  <h1>{title}</h1>
  <p>{score}</p>
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
    border-radius: 0.5rem;
    text-align: center;
  }
  article h1 {
    color: var(--clr-dark-navy);
    font-size: 0.8rem;
    text-transform: uppercase;
  }
  article p {
    color: var(--clr-dark-navy);
    font-size: 1.25rem;
    font-weight: var(--fw-bold);
  }
  @media (min-width: 460px) {
    article h1 {
      font-size: 0.875rem;
    }
    article p {
      font-size: 1.5rem;
    }
  }
</style>
