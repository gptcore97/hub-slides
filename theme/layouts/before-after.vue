<script setup lang="ts">
const props = defineProps({ image: String, icon: String, nr: [String, Number], tag: String, values: String, value: [String, Number], x: String, y: String })
</script>
<template>
  <div class="slidev-layout syn before-after" :class="`pal-${$slidev.configs.palette || 'violet'}`">
    <div class="in"><div class="l"><slot /></div><div class="r"><slot name="right" /></div></div>
  </div>
</template>
