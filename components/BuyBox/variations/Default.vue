<script setup lang="ts">
import MainPrice from '../bones/MainPrice.vue';
import QuantitySelector from '../bones/QuantitySelector.vue';
import DeliveryOption from '../bones/BuyOptions/DeliveryOption.vue';
import ReCoOption from '../bones/BuyOptions/ReCoOption.vue';
</script>

<template>
  <div
    class="relative bg-gray-100 p-4 pb-6 flex flex-col gap-6 mb-6 rounded-lg border-gray-300 border">
    <div class="flex items-end gap-4 sm:gap-6">
      <div class="flex flex-col justify-end w-full flex-1 gap-4">
        <div>
          <QuantitySelector />
        </div>
      </div>

      <div class="flex flex-col flex-1 w-full h-min-28 items-end">
        <div></div>
        <MainPrice />
      </div>
    </div>

    <div role="menubar">
      <DeliveryOption />

      <ReCoOption />
    </div>

    <button
      class="flex justify-center items-center h-12 rounded-full cursor-pointer inline-block bg-white whitespace-nowrap bg-orange text-white transition-colors min-w-4xs hover:text-white hover:bg-gray-900 font-bold leading-7 text-xl focus-button px-6 py-3 w-full mt-2">
      In den Warenkorb
    </button>
  </div>
</template>

<style></style>