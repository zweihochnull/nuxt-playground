<script setup lang="ts">
import BaseOption from './BaseOption.vue';
</script>

<template>
  <BaseOption>
    <template #header>Lieferung nach Hause</template>
    <template #content>
      <div>Abholbereit <span class="text-green font-bold">ab morgen 10:00 Uhr</span></div>
      <div>
        <button
          class="pdp-link focus-text items-center text-left text-blue cursor-pointer hover-text">
          OBI Markt Köln-Dellbrück
        </button>
      </div>
    </template>
  </BaseOption>
</template>