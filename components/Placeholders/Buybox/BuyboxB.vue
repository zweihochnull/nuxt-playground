<script setup lang="ts">
defineProps<{
  config: any
}>()
</script>

<template>
  <div class="buybox">
    buybox
  </div>
</template>

<style scoped>
  .buybox {
    grid-area: buybox;
    display: grid;
    place-items: center;
    height: 440px;
    border: 4px solid magenta;
  }
</style>