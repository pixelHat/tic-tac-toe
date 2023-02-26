<script lang="ts">
  export let type: "primary"|"secondary"|"" = "";
  export let fixedSize: boolean = false;
  export let size: "xs"|"lg" = "lg";
  $: className = `${type} ${size}`
</script>

<button class={className} class:fixed={fixedSize}>
  <slot></slot>
</button>

<style>
  button {
    --box-shadow-color: #6B8997;
    --bg: var(--clr-silver);
    --bg-hover: var(--clr-silver-hover);
    display: block;
    font-weight: var(--fw-bold);
    font-size: 1.25rem;
    letter-spacing: 1.25px;
    text-align: center;
    color: var(--clr-dark-navy);
    background-color: var(--bg);
    box-shadow: inset 0px calc(-1 * var(--border-bottom)) 0px var(--box-shadow-color);
    border-radius: var(--border-radius);
    padding-block-start: 0.875rem;
    padding-block-end: calc(0.875rem + var(--border-bottom));
    cursor: pointer;
  }
  button:hover {
    background-color: var(--bg-hover);
  }
  button.primary {
    --bg: var(--clr-light-yellow);
    --bg-hover: var(--clr-light-yellow-hover);
    --box-shadow-color: #CC8B13;
  }
  button.secondary {
    --bg: var(--clr-light-blue);
    --bg-hover: var(--clr-light-blue-hover);
    --box-shadow-color: #118C87;
  }
  .fixed{
    padding: 0;
    width: 100%;
    height: 100%;
  }
  .lg {
    --border-bottom: 8px;
    --border-radius: 10px;
  }
  .xs {
    --border-bottom: 4px;
    --border-radius: 5px;
  }
</style>
