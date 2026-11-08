<script setup lang="ts">
</script>
<template>
  <div class="slidev-layout syn compare" :class="`pal-${$slidev.configs.palette || 'violet'}`">
    <div class="ring" style="width:420px;height:420px;right:-160px;bottom:-200px"></div>
    <div class="in"><div class="l"><slot /></div><div class="r"><slot name="right" /></div></div>
  </div>
</template>
