<script setup lang="ts">
const props = defineProps({ image: String, icon: String })
</script>
<template>
  <div class="slidev-layout syn full" :class="`pal-${$slidev.configs.palette || 'violet'}`">
    <div class="bg" :class="{ empty: !props.image }" :style="props.image ? { backgroundImage: `url(${props.image})` } : {}"><div v-if="!props.image && props.icon" class="big">{{ props.icon }}</div></div>
    <div class="shade"></div>
    <div class="in"><slot /></div>
  </div>
</template>
