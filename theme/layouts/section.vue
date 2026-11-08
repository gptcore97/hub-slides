<script setup lang="ts">
const props = defineProps({ image: String, icon: String, nr: [String, Number], tag: String })
</script>
<template>
  <div class="slidev-layout syn section" :class="`pal-${$slidev.configs.palette || 'violet'}`">
    <div class="ring" style="width:620px;height:620px;right:-220px;top:-120px"></div>
    <div class="in"><div v-if="props.nr" class="nr">{{ String(props.nr).padStart(2, '0') }}</div><slot /></div>
  </div>
</template>
