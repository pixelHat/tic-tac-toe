<script lang="ts">
  export let type: "primary"|"secondary"|"" = "";
</script>

<button class={type}>
  <slot></slot>
</button>

<style>
  button {
    --border-bottom: 8px;
    --box-shadow-color: #6B8997;
    --bg: var(--clr-silver);
    --bg-hover: red;
    display: inline-block;
    font-weight: var(--fw-bold);
    font-size: 1.25rem;
    letter-spacing: 1.25px;
    text-align: center;
    color: var(--clr-dark-navy);
    background-color: var(--bg);
    box-shadow: inset 0px calc(-1 * var(--border-bottom)) 0px var(--box-shadow-color);
    border-radius: 0.9375rem;
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
</style>
