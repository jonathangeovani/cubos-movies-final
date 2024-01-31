<template>
  <div v-if="label" class="input-text labeled">
    <label>{{ label }} </label>
    <input
      type="text"
      placeholder="Pesquise por Filmes"
      v-model="searchQuery"
    />
    <component v-if="icon" class="search-btn" :is="icon" />
  </div>

  <div v-else class="input-text">
    <input
      type="text"
      placeholder="Pesquise por Filmes"
      v-model="searchQuery"
    />
    <component v-if="icon" class="search-btn" :is="icon" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useQueryClient } from "@tanstack/vue-query";

const props = defineProps<{
  label?: String;
  icon?: Object;
}>();

const router = useRouter();
const route = useRoute();
const queryClient = useQueryClient();
const searchQuery = ref(route.query.q?.toString() || "");

watch(searchQuery, () => {
  router.push({ query: { q: searchQuery.value, p: 1 }, replace: true });
  queryClient.invalidateQueries({ queryKey: ["movies"] });
});
</script>

<style scoped lang="scss">
.input-text {
  padding: 12px;
  width: 100%;
  max-width: 488px;
  height: 44px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: var(--mauve-2);
  border: 1px solid var(--mauve-7);
  border-radius: 4px;

  &.labeled {
    margin-top: 12px;
  }

  &:has(input[type="text"]:focus) {
    border: 1px solid var(--purple-9);
  }

  label {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    font-size: 12.8px;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    transform: translateY(-24px);
  }

  input[type="text"] {
    width: 100%;
    height: 100%;
    background: none;
    border: none;
    outline: none;

    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-weight: 400;
    caret-color: var(--purple-9);
    color: var(--mauve-12);

    &::placeholder {
      color: var(--mauve-9);
      font-weight: 400;
    }
  }

  .search-btn {
    width: 24px;
    height: 24px;
    margin-left: 16px;
    color: var(--mauve-11);
  }
}

@media only screen and (max-width: 768px) {
  .input-text input[type="text"]::placeholder {
    font-weight: 700;
  }
}
</style>
