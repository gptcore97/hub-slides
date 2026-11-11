<script setup lang="ts">
const props = defineProps({ image: String, icon: String, nr: [String, Number], tag: String })
</script>
<template>
  <div class="slidev-layout syn imgl" :class="`pal-${$slidev.configs.palette || 'violet'}`">
    <div class="photo l" :class="{ empty: !props.image }" :style="props.image ? { backgroundImage: `url(${props.image})` } : {}"><div v-if="!props.image && props.icon" class="big">{{ props.icon }}</div></div>
    <div class="in"><slot /></div>
  </div>
</template>
