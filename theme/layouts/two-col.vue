<script setup lang="ts">
const props = defineProps({ image: String, icon: String, nr: [String, Number], tag: String, values: String, value: [String, Number], x: String, y: String })
</script>
<template>
  <div class="slidev-layout syn two-col" :class="`pal-${$slidev.configs.palette || 'violet'}`">
    <div class="in"><slot /></div>
  </div>
</template>
