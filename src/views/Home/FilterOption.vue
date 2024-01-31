<template>
  <div class="filter-card" :class="selected && 'active'">
    <p>{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  text: string;
  selected?: boolean;
}>();
</script>

<style scoped lang="scss">
.filter-card {
  padding: 8px;
  width: fit-content;
  text-align: center;
  background: none;
  border-radius: 4px;
  border: 1px solid var(--purple-6);

  cursor: pointer;

  p {
    color: var(--purple-12);
    font-family: "Montserrat", sans-serif;
    font-size: 12px;
    font-weight: 600;
    line-height: 15px;
  }
}

.active {
  background: var(--purple-6);
}
</style>
