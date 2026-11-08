<script setup lang="ts">
const props = defineProps({ image: String, icon: String, nr: [String, Number], tag: String })
</script>
<template>
  <div class="slidev-layout syn quote" :class="`pal-${$slidev.configs.palette || 'violet'}`">
    <div class="ring" style="width:520px;height:520px;right:-180px;top:-200px"></div>
    <div class="in"><div class="qm">“</div><slot /></div>
  </div>
</template>
