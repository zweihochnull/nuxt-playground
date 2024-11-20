<script setup lang="ts">
import { useCounter } from '~/composables/useCounter';

const { count, increment, decrement } = useCounter()
</script>

<template>
  <div>Counter: {{ count }}</div>
  <button @click="increment">Increment</button>
  <button @click="decrement">Decrement</button>
</template>

<style>
</style>