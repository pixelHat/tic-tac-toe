<main>
  <slot />
</main>

<style>
  :root {
    --clr-dark-navy: #1A2A33;
    --clr-semi-dark-navy: #1F3641;
    --clr-silver: #A8BFC9;
    --clr-silver-hover: #DBE8ED;
    --clr-light-blue: #31C3BD;
    --clr-light-blue-hover: #65E9E4;
    --clr-light-yellow: #F2B137;
    --clr-light-yellow-hover: #FFC860;
    --ff: 'Outfit', sans-serif;
    --fw-normal: 500;
    --fw-bold: 700;
  }
  main {
    font-family: var(--ff);
    font-weight: var(--fw-normal);
    font-size: 0.875rem;
    line-height: 0.8px;
  }
</style>
