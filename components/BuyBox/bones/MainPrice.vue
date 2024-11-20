<script setup lang="ts">
const props = defineProps<{
  price?: number
  fractionalPart?: number
  vatText?: number
  currencySymbol?: string
}>();
</script>

<template>
  <div>
    <div class="ml-auto pdp-main-price font-obi-bold text-gray-900 whitespace-nowrap">
      <div class="inline-flex mr-1">
        <span class="text-5xl">{{ props.price }},</span>
        <span class="mt-1 text-lg leading-5">
          {{ props.fractionalPart }}
        </span>
      </div>
      <div class="text-lg inline-flex">
        <span>{{ props.currencySymbol }}</span>
        <span class="text-xs font-sans">*</span>
      </div>
    </div>
    <div class="text-right text-xs text-gray-900">{{ props.vatText }}</div>
  </div>
</template>