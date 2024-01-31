<template>
  <button class="btn-primary">
    <component v-if="icon" :is="icon" />
    <span v-if="text" class="btn-text">{{ text }}</span>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  icon?: object;
  text?: string | number;
}>();
</script>

<style scoped lang="scss">
.btn-primary {
  padding: 12px 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
  background: var(--purple-9);
  border: none;
  border-radius: 2px;
  backdrop-filter: blur(2px);

  &:active {
    background: var(--purple-8);
  }
  &:disabled {
    background: var(--mauve-9);
    color: var(--mauve-a10);
  }

  svg {
    width: 24px;
    height: 24px;
  }

  .btn-text {
    font-size: 16px;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
  }
}

@media only screen and (min-width: 768px) {
  .btn-primary {
    &:hover {
      background: var(--purple-10);
      cursor: pointer;
    }

    &:active {
      background: var(--purple-8);
    }
    &:disabled {
      background: var(--mauve-9);
      color: var(--mauve-a10);
    }
  }
}
</style>
