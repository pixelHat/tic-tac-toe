<script lang="ts">
  type Heading = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  type Size = "l" | "m" | "s" | "xs" | "";
  export let as: Heading = "h1";
  export let Size: Size = "";

  const as_to_size: Record<Heading, Size>  = {
    h1: "l",
    h2: "m",
    h3: "s",
    h4: "xs",
    h5: "",
    h6: ""
  }

  $: size_class = Size || as_to_size[as];
  $: classes = `title ${size_class}`;
</script>

<svelte:element this={as} class={classes}><slot></slot></svelte:element>

<style>
  .title {
    font-family: var(--ff);
    font-weight: var(--fw-bold);
  }
  .xs {
    font-size: 1rem;
    line-height: 1px;
  }
  .s {
    font-size: 1.25rem;
    line-height: 1.25px;
  }
  .m {
    font-size: 1.5rem;
    line-height: 1.5px;
  }
  .l {
    font-size: 2.5rem;
    line-height: 2.5px;
  }
</style>
