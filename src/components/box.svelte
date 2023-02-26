<section>
  <slot></slot>
</section>

<style>
  section {
    --shadow-size: 8px;
    height: 100%;
    background-color: var(--clr-semi-dark-navy);
    box-shadow: inset 0px calc(-1 * var(--shadow-size)) 0px #10212A;
    border-radius: 0.9375rem;
    padding-block-end: var(--shadow-size);
  }
</style>
