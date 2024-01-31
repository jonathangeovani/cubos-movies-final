<template>
  <div class="details" v-if="isLoading">Loading...</div>
  <div class="details" v-else-if="isError">
    Ocorreu um erro durante a requisição.
  </div>
  <div class="details" v-else-if="data">
    <!-- Banner -->
    <img
      :src="
        data.backdrop_path
          ? `https://image.tmdb.org/t/p/original/${data.backdrop_path}`
          : 'https://placehold.co/720x320/777/777'
      "
      alt="Movie Backdrop Image"
      class="banner"
    />

    <!-- Poster -->
    <div class="col-image">
      <img
        :src="
          data.poster_path
            ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
            : 'https://placehold.co/350x540?text=Sem+Capa'
        "
        :alt="data.title"
        class="poster"
      />
    </div>

    <MovieInfo :movie-data="data" />
  </div>
</template>

<script setup lang="ts">
import { getMovieDetails } from "@/services/movies";
import MovieInfo from "./MovieInfo.vue";
import { useQuery } from "@tanstack/vue-query";
import { useRoute } from "vue-router";

const route = useRoute();

const { data, isLoading, isError } = useQuery({
  queryKey: ["movie-details"],
  queryFn: () => getMovieDetails(route.params.id.toString()),
});
</script>

<style scoped lang="scss">
.details {
  margin: 0 auto;
  padding: 32px;
  max-width: 1302px;
  min-height: 606px;
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 32px;

  color: var(--mauve-12);
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  background: linear-gradient(
    to right,
    var(--mauve-1-a2),
    var(--mauve-1-a1),
    #12111300
  );

  .banner {
    position: absolute;
    width: 100%;
    height: 100%;
    inset: 0;
    z-index: -2;

    opacity: var(--opacity);
    object-fit: cover;
  }

  .col-image {
    max-width: 354.5px;
    min-width: 300px;
    flex: 1;

    .poster {
      width: 100%;
      max-height: 542px;
      object-fit: cover;
      border-radius: 4px;
    }
  }
}

.dark .details {
  background: linear-gradient(
    to right,
    var(--mauve-1),
    var(--mauve-1-a2),
    #12111300
  );
}

@media only screen and (max-width: 1200px) {
  .details {
    .col-image {
      max-width: 300px;
      min-width: 250px;
    }
  }
}

@media only screen and (max-width: 992px) {
  .details {
    background: none;
    .banner {
      display: none;
    }
  }
}

@media only screen and (max-width: 768px) {
  .details {
    padding: 0;
    gap: 16px;

    .col-image {
      max-width: 382px;

      .poster {
        max-height: 582px;
      }
    }
  }
}
</style>
