<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({ image: String, icon: String, nr: [String, Number], tag: String, values: String, value: [String, Number], x: String, y: String })
const val = computed(() => Math.max(0, Math.min(100, Number(props.value) || 0)))
</script>
<template>
  <div class="slidev-layout syn ring" :class="`pal-${$slidev.configs.palette || 'violet'}`">
    <div class="in"><div class="gwrap" :style="{ '--val': val }"><div class="gauge"></div><b class="gv">{{ val }}%</b></div><div class="txt"><slot /></div></div>
  </div>
</template>
