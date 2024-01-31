<template>
  <button class="btn-secondary" :class="active && 'activated'">
    <component v-if="icon" :is="icon" />
    <span v-if="text" class="btn-text">{{ text }}</span>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  icon?: object;
  text?: string | number;
  active?: boolean;
}>();
</script>

<style scoped lang="scss">
.btn-secondary {
  padding: 12px 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--purple-a12);
  background: var(--purple-a2);
  border: none;
  border-radius: 2px;
  backdrop-filter: blur(2px);

  &:active {
    background: var(--purple-a1);
  }
  &:disabled {
    background: var(--mauve-a3);
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

.activated {
  background: var(--purple-a3);
}

@media only screen and (min-width: 768px) {
  .btn-secondary {
    &:hover {
      background: var(--purple-a3);
      cursor: pointer;
    }
    &:active {
      background: var(--purple-a1);
    }
    &:disabled {
      background: var(--mauve-a3);
      color: var(--mauve-a10);
      cursor: default;
    }
  }
}
</style>
