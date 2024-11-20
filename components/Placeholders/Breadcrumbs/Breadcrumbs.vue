<script setup lang="ts">
const components = {
  "variation-a": defineAsyncComponent(() =>
    import('./BreadcrumbsA.vue')
  ),
  "variation-b": defineAsyncComponent(() =>
    import('./BreadcrumbsB.vue')
  ),
}

defineProps<{
  config: any
}>()
</script>

<template>
  <component 
    :is="components[config.variation]" 
  ></component>
</template>

<style scoped>
  .breadcrumbs {
    grid-area: breadcrumbs;
    display: grid;
    place-items: center;
    height: 72px;
    border: 4px solid gold;
  }
</style>