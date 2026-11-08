<script setup lang="ts">
const props = defineProps({ image: String, icon: String, nr: [String, Number], tag: String })
</script>
<template>
  <div class="slidev-layout syn stats" :class="`pal-${$slidev.configs.palette || 'violet'}`">
    <div class="in"><slot /></div>
  </div>
</template>
