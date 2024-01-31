<template>
  <div class="filter-box">
    <FilterOption
      :text="'Todos'"
      :selected="selectedGenres.length == 0"
      @click.prevent="updateQuery()"
    />
    <FilterOption
      v-for="genre in genres"
      :text="genre.name"
      :selected="selectedGenres.includes(`${genre.id}`)"
      @click.prevent="updateQuery(genre.id)"
      :key="genre.id"
    />
  </div>
</template>

<script setup lang="ts">
import FilterOption from "./FilterOption.vue";
import { genres } from "@/utils/genres";
import { useRoute, useRouter } from "vue-router";
import { useQueryClient } from "@tanstack/vue-query";
import { computed } from "vue";

const route = useRoute();
const router = useRouter();
const queryClient = useQueryClient();

const selectedGenres = computed(() => {
  if (route.query.filters) {
    return route.query.filters.toString().split(",");
  } else return [];
});

function updateQuery(id?: number) {
  let listOfFilters: string[] = [];
  if (id) {
    if (selectedGenres.value.includes(`${id}`)) {
      listOfFilters = selectedGenres.value.filter((item) => item != `${id}`);
    } else {
      listOfFilters = selectedGenres.value;
      listOfFilters.push(`${id}`);
    }
  }

  router.push({
    query: {
      q: route.query.q,
      p: route.query.p,
      filters: listOfFilters.join(","),
    },
  });

  queryClient.invalidateQueries({ queryKey: ["movies"] });
}
</script>

<style scoped lang="scss">
.filter-box {
  margin: 0 auto 24px;
  padding: 24px 32px;
  max-width: 1275px;
  width: fit-content;
  min-height: 92px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;

  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  background: var(--mauve-3-a1);
  backdrop-filter: blur(2px);
  border-radius: 4px;
}
</style>
