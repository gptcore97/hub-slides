<script setup lang="ts">
const props = defineProps({ image: String, icon: String, nr: [String, Number], tag: String })
</script>
<template>
  <div class="slidev-layout syn end" :class="`pal-${$slidev.configs.palette || 'violet'}`">
    <div class="ring" style="width:640px;height:640px;left:50%;top:50%;margin:-320px 0 0 -320px"></div>
    <div class="in"><slot /></div>
  </div>
</template>
