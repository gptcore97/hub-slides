<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({ image: String, icon: String, nr: [String, Number], tag: String, values: String, value: [String, Number], x: String, y: String })
const vars = computed(() => {
  const o: Record<string, string> = {}
  String(props.values || '').split(',').forEach((s, i) => {
    const n = parseFloat(s)
    if (!isNaN(n)) o['--v' + (i + 1)] = Math.max(0, Math.min(100, n)) + '%'
  })
  return o
})
</script>
<template>
  <div class="slidev-layout syn bars" :class="`pal-${$slidev.configs.palette || 'violet'}`">
    <div class="in" :style="vars"><slot /></div>
  </div>
</template>
