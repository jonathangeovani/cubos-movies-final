<template>
  <div class="tag-card">
    <p>{{ content }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  content: string;
}>();
</script>

<style scoped lang="scss">
.tag-card {
  padding: 8px;
  width: fit-content;
  text-align: center;
  background: var(--purple-a3);
  backdrop-filter: blur(2px);
  border-radius: 2px;

  p {
    color: var(--purple-12);
    font-family: "Montserrat", sans-serif;
    font-size: 12px;
    font-weight: 600;
    line-height: 15px;
    text-transform: uppercase;
  }
}
</style>
