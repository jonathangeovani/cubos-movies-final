<template>
  <SearchView @filter-click="showFilters = !showFilters" />
  <Transition>
    <FilterView v-if="showFilters && !$route.query.q" />
  </Transition>
  <div class="empty" v-if="isLoading">Loading...</div>
  <div class="empty" v-else-if="isError">
    Ocorreu um erro durante a requisição.
  </div>
  <div v-else-if="data">
    <MoviesListView :movies-list="data.results" />
    <PaginationView :current-page="data.page" :total-pages="data.total_pages" />
  </div>
</template>

<script setup lang="ts">
import SearchView from "./SearchView.vue";
import MoviesListView from "./MoviesListView.vue";
import PaginationView from "./PaginationView.vue";
import FilterView from "./FilterView.vue";
import { getMovies } from "@/services/movies";
import { useQuery } from "@tanstack/vue-query";
import { useRoute } from "vue-router";
import { provide, ref } from "vue";

const route = useRoute();
const showFilters = ref(false);
provide("filters", showFilters);

const { data, isLoading, isError } = useQuery({
  queryKey: ["movies"],
  queryFn: () =>
    getMovies(
      route.query.q?.toString(),
      route.query.p?.toString(),
      route.query.filters?.toString()
    ),
});
</script>

<style scoped lang="scss">
.empty {
  margin: 0 auto 32px;
  padding: 32px;
  max-width: 1322px;
  min-height: 355px;
  text-align: center;
  background-color: var(--mauve-a3);
  backdrop-filter: blur(2px);
  border-radius: 4px;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
