<script setup lang="ts">
const props = defineProps<{
  config: any
}>()

console.log("CONFIG!! ", props.config)
const { components } = useComponentResolver([props.config])
//console.log(props.config)
//console.log(components)

const name = computed(() => {
  console.log(props.config)
  if (props.config.variation) {
    return props.config.variation
  } else {
    return props.config.name
  }
})

</script>

<template>
  <div>Collapsable</div>
  <component :is="components[config.variation]"></component>
</template>
