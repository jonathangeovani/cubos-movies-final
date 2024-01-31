<template>
  <div class="search-bar">
    <InputText :icon="Search" class="search-input" />
    <ButtonSecondary
      :icon="FilterIcon"
      style="padding: 16px 15.5px"
      @click.prevent="$emit('filter-click')"
      :disabled="$route.query.q?.toString().length"
      :active="
        activate ||
        ($route.query.filters != null && $route.query.filters.length > 0)
      "
    />
  </div>
</template>

<script setup lang="ts">
import InputText from "./SearchInput.vue";
import ButtonSecondary from "@/components/ButtonSecondary.vue";
import FilterIcon from "@/assets/icons/Filter.vue";
import Search from "@/assets/icons/Search.vue";
import { inject } from "vue";

const activate: boolean | undefined = inject("filters");
</script>

<style scoped lang="scss">
.search-bar {
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  .search-input {
    padding: 16px;
    height: 56px;
  }
}

@media only screen and (max-width: 768px) {
  .search-bar {
    padding: 16px;
  }
}
</style>
