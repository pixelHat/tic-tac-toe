<script lang="ts">
  type Heading = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  type Size = "l" | "m" | "s" | "xs" | "";
  export let as: Heading = "h1";
  export let size: Size = "";
  export let color: string = "";

  const as_to_size: Record<Heading, Size>  = {
    h1: "l",
    h2: "m",
    h3: "s",
    h4: "xs",
    h5: "",
    h6: ""
  }
  $: size_class = size || as_to_size[as];
  $: classes = `title ${size_class}`;
  $: style = `--color:var(--clr-${color})`;
</script>

<svelte:element this={as} class={classes} {style}><slot></slot></svelte:element>

<style>
  .title {
    font-family: var(--ff);
    font-weight: var(--fw-bold);
    color: var(--color, inherit);
  }
  .xs {
    font-size: 1rem;
    letter-spacing: 1px;
  }
  .s {
    font-size: 1.25rem;
    letter-spacing: 1.25px;
  }
  .m {
    font-size: 1.5rem;
    letter-spacing: 1.5px;
  }
  .l {
    font-size: 2.5rem;
    letter-spacing: 2.5px;
  }
</style>
