<script lang="ts">
  export let size: "xs"|"lg" = "lg";
  export let color: "yellow"|"blue"|undefined = undefined;
  $: className = `${size} ${color}`
</script>

<section class={className}>
  <slot></slot>
</section>

<style>
  section {
    --box-bg: var(--clr-semi-dark-navy);
    --box-bg-shadow: #10212A;
    height: 100%;
    background-color: var(--box-bg);
    box-shadow: inset 0px calc(-1 * var(--shadow-size)) 0px var(--box-bg-shadow);
    border-radius: var(--border-radius);
    padding-block-end: var(--shadow-size);
  }
  .lg {
    --shadow-size: 8px;
    --border-radius: 10px;
  }
  .xs {
    --shadow-size: 4px;
    --border-radius: 5px;
  }
  .yellow {
    --box-bg: var(--clr-light-yellow);
    --box-bg-shadow: var(--clr-light-yellow-hover);
  }
  .blue {
    --box-bg: var(--clr-light-blue);
    --box-bg-shadow: var(--clr-light-blue-hover);
  }
</style>
