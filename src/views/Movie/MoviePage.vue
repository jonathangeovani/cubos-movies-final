<template>
  <div class="movie">
    <MovieDetailsView />
    <MovieTrailer />
  </div>
</template>

<script setup lang="ts">
import MovieDetailsView from "./MovieDetailsView.vue";
import MovieTrailer from "./MovieTrailer.vue";
</script>

<style scoped lang="scss">
.movie {
  padding: 32px;
}

@media only screen and (max-width: 768px) {
  .movie {
    padding: 16px;
  }
}
</style>
