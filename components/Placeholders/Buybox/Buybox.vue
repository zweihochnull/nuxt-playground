<script setup lang="ts">
const props = defineProps<{
  config: any
}>()
</script>

<template>
  <Renderer :config="config" />
</template>
