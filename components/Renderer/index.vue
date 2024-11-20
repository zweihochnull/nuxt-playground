<script setup lang="ts">
import { useRenderer } from '~/composables/useRenderer'
import type { ComponentInfo, Config, Segment } from '~/types/global'

const props = defineProps<{
  config: Config
}>()

const { layout, segments, components } = useRenderer(props.config)
</script>

<template>
    <NuxtLayout :name="layout">
      <div v-for="segment in segments" :class="segment">
        <template v-for="component in config.segments[segment].components">
          <component 
            :is="components[component.name as keyof typeof components]" 
            :config="component"
          ></component>
        </template>
      </div>
    </NuxtLayout>
</template>
