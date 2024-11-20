<template>
  <div class="buybox-grid-layout">
    <slot />
  </div>
</template>

<style global>
  .buybox-grid-layout {
    height: 100%;
    display: grid;
    grid-template-areas:
        "calculator price"
        "delivery   delivery"
        "buy        buy";
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr auto;
    column-gap: 1rem;
    border: 4px dashed blueviolet;
  }

  .calculator {
    grid-area: calculator;
  }

  .price {
    grid-area: price;
  }

  .delivery {
    grid-area: delivery;
  }

  .buy {
    grid-area: buy;
  }
</style>