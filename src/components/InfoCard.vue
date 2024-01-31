<template>
  <div class="info-card">
    <h3>{{ title }}</h3>
    <p>{{ content }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  content: string;
}>();
</script>

<style scoped lang="scss">
.info-card {
  padding: 16px;
  width: fit-content;
  height: max-content;
  display: flex;
  flex-direction: column;
  gap: 8px;

  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  background: var(--mauve-3-a1);
  backdrop-filter: blur(2px);
  border-radius: 4px;

  h3 {
    color: var(--mauve-11);
    font-size: 12px;
    line-height: 15px;
    text-transform: uppercase;
  }

  p {
    color: var(--mauve-12);
    font-size: 14px;
    line-height: 14px;
  }
}
</style>
