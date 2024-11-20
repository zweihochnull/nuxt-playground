<script setup lang="ts">
const props = defineProps<{
  disabled?: boolean
  ariaLabel?: string
}>();

defineEmits<{
  (e: 'selection'): void
}>();
</script>

<template>
  <div @click="$emit('selection')" role="menuitem"
    class="p-4 min-h-20 rounded bg-white cursor-pointer rounded-b-none" tabindex="-1">
    <div class="relative flex">
      <button class="pdp-radio-button h-6 w-6 rounded-full p-1 border-2 border-orange absolute"
        :aria-label="props.ariaLabel" :disabled="props.disabled">
        <div class="w-full h-full rounded-full bg-orange"></div>
      </button>
      <div class="relative left-6 ml-4 mr-8">
        <span class="text-gray-900 font-obi-bold text-lg">
          <slot name="header"></slot>
        </span>
        <div class="mt-1 leading-6">
          <slot name="content"></slot>
        </div>
      </div>
    </div>
  </div>
</template>