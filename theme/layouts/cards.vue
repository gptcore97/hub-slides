<script setup lang="ts">
const props = defineProps({ image: String, icon: String, nr: [String, Number], tag: String })
</script>
<template>
  <div class="slidev-layout syn cards" :class="`pal-${$slidev.configs.palette || 'violet'}`">
    <div class="in"><slot /></div>
    <div class="ring" style="width:420px;height:420px;right:-160px;bottom:-200px"></div>
  </div>
</template>
