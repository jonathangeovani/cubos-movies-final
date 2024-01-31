<template>
  <div v-if="isLoading">Loading...</div>
  <div v-else-if="isError">Ocorreu um erro durante a requisição.</div>
  <div class="movie-trailer" v-else-if="data && data.results.length > 0">
    <h3>Trailer</h3>
    <div>
      <iframe
        class="video"
        :src="`https://www.youtube.com/embed/${data.results[0].key}`"
        allowFullScreen
      ></iframe>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { getMovieTrailer } from "@/services/movies";
import { useRoute } from "vue-router";

const route = useRoute();

const { data, isLoading, isError } = useQuery({
  queryKey: ["movie-trailer"],
  queryFn: () => getMovieTrailer(route.params.id.toString()),
});
</script>

<style scoped lang="scss">
.movie-trailer {
  margin: 0 auto;
  padding: 32px;
  max-width: 1302px;
  width: 100%;

  h3 {
    margin-bottom: 16px;
    color: var(--primary);
    font-size: 24px;
    font-family: "Montserrat", sans-serif;
  }

  .video {
    width: 100%;
    aspect-ratio: 16/9;
    border: none;
  }
}

@media only screen and (max-width: 768px) {
  .movie-trailer {
    padding: 16px 0;
  }
}
</style>
