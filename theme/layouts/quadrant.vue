<script setup lang="ts">
const props = defineProps({ image: String, icon: String, nr: [String, Number], tag: String, values: String, value: [String, Number], x: String, y: String })
</script>
<template>
  <div class="slidev-layout syn quadrant" :class="`pal-${$slidev.configs.palette || 'violet'}`">
    <div class="in"><slot /></div><div v-if="props.x" class="ax x">{{ props.x }}</div><div v-if="props.y" class="ax y">{{ props.y }}</div>
  </div>
</template>
