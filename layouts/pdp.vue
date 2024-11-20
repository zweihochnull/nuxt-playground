<template>
  <div>
    <header>
      Default Layout
    </header>
    <main class="pdp-grid-layout">
      <slot />
    </main>
  </div>
</template>

<style global>
  .pdp-grid-layout {
    display: grid;
    grid-template-areas:
        "top    top"
        "main   side"
        "bottom bottom";
    grid-template-columns: 2fr 1fr;
    column-gap: 1.5rem;

    margin-inline: auto;
    max-width: 90rem;
    padding-inline: 1.5rem;
  }

  .top {
    grid-area: top;
  }

  .side {
    grid-area: side;
  }

  .main {
    grid-area: main;
  }

  .bottom {
    grid-area: bottom;
  }
</style>