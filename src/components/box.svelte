<script lang="ts">
  export let size: "xs"|"lg" = "lg";
  $: className = `${size}`
</script>

<section class={className}>
  <slot></slot>
</section>

<style>
  section {
    height: 100%;
    background-color: var(--clr-semi-dark-navy);
    box-shadow: inset 0px calc(-1 * var(--shadow-size)) 0px #10212A;
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
</style>
