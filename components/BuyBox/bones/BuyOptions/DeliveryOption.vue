<script setup lang="ts">
import BaseOption from './BaseOption.vue';
</script>

<template>
  <BaseOption>
    <template #header>Reservieren &amp; Abholen</template>
    <template #content>
      <div>
        <span>Paket, ca.&nbsp;</span>
        <span class="font-bold text-green">15. November</span>
      </div>
      <span class="">zzgl. 9,95&nbsp;€Versand</span>
      <span class="inline-block focus-icon py-0 relative my-auto ml-2 top-1 text-blue icon-focus" width="20" height="20"
        tabindex="0">
        <svg role="img" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <use href="/info.svg"></use>
        </svg>
      </span>
      <div class="flex">
        <span>Verkäufer:&nbsp;</span>
        <button class="pdp-link focus-text items-center text-left text-blue cursor-pointer hover-text">
          OBI E-Commerce GmbH
        </button>
      </div>
    </template>
  </BaseOption>
</template>