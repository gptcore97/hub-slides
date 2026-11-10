<script setup lang="ts">
const props = defineProps({ image: String, icon: String, nr: [String, Number], tag: String, values: String, value: [String, Number], x: String, y: String })
</script>
<template>
  <div class="slidev-layout syn section" :class="`pal-${$slidev.configs.palette || 'violet'}`">
    <div class="in"><div v-if="props.nr" class="nr">{{ String(props.nr).padStart(2, '0') }}</div><slot /></div>
  </div>
</template>
