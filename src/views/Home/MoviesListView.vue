<template>
  <section class="movies-list">
    <MovieCard
      v-for="(movie, index) in moviesList"
      :movie-data="movie"
      :key="index"
    />
  </section>
</template>

<script setup lang="ts">
import type { MovieData } from "@/types";
import MovieCard from "./MovieCard.vue";

const props = defineProps<{
  moviesList: [MovieData];
}>();
</script>

<style scoped lang="scss">
.movies-list {
  margin: 0 auto;
  padding: 24px;
  max-width: 1322px;
  min-height: 355px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;

  background-color: var(--mauve-a3);
  backdrop-filter: blur(2px);
  border-radius: 4px;
}

@media only screen and (max-width: 768px) {
  .movies-list {
    padding: 16px;
    gap: 16px;
    background-color: var(--mauve-3);
  }
}
</style>
