<script setup lang="ts">
const model = defineModel({ default: 1 });

defineEmits<{
  (e: 'increase'): void
  (e: 'decrease'): void
}>()
</script>

<template>
  <div class="quantity-selector border-gray-900 flex items-center justify-center h-12 justify-evenly relative bg-white"
    aria-label="Quantity selector">
    <button @click="$emit('decrease')" aria-label="decrease quantity"
      class="decrease-quantity-btn h-full w-full flex items-center justify-center border border-gray-900 rounded-l hover:cursor-pointer disable-dbl-tap-zoom">
      <span class="inline-block focus-icon py-0 relative my-auto h-6" width="24" height="24">
        <svg role="img" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <use href="/minus.svg#minus"></use>
        </svg>
      </span>
    </button>
    <input v-model="model" data-testid="pdp-quantity-selector-input" aria-label="quantity" autocomplete="off"
      type="number" min="1"
      class="quantity-input w-12 h-full border border-r-0 border-l-0 border-gray-900 text-gray-900 bg-transparent rounded-none p-1 text-center">
    <button @click="$emit('increase')" aria-label="increase quantity"
      class="increase-quantity-btn h-full w-full flex items-center justify-center border border-gray-900 rounded-r hover:cursor-pointer disable-dbl-tap-zoom">
      <span class="inline-block focus-icon py-0 relative my-auto h-6" width="24" height="24">
        <svg role="img" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <use href="/plus.svg#plus"></use>
        </svg>
      </span>
    </button>
  </div>
</template>