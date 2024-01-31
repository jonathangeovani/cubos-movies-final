<template>
  <div
    class="movie-card"
    @mouseenter="showDetails = true"
    @mouseleave="showDetails = false"
    @click="goToMoviePage(movieData.id)"
  >
    <img
      :src="
        movieData.poster_path
          ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}`
          : 'https://placehold.co/240x360?text=Sem+Capa'
      "
      :alt="`Poster ${movieData.title}`"
      loading="lazy"
    />
    <CircularProgressBar
      v-if="showDetails"
      class="progress-bar"
      :percentage="(movieData.vote_average * 10).toFixed()"
    />
    <div class="movie-details">
      <h4>{{ movieData.title }}</h4>
      <p v-if="showDetails">{{ getGenres(movieData.genre_ids) }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import CircularProgressBar from "@/components/CircularProgressBar.vue";
import type { MovieData } from "@/types";
import { getGenres } from "@/utils/genres";

const props = defineProps<{
  movieData: MovieData;
}>();

const showDetails = ref(false);
const router = useRouter();

const goToMoviePage = (id: number) => {
  router.push({ path: `/movie/${id}` });
  window.scrollTo(0, 0);
};
</script>

<style scoped lang="scss">
.movie-card {
  position: relative;
  width: 235px;
  height: 355px;
  font-family: "Montserrat", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #eee;
  border-radius: 4px;

  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    object-fit: cover;
  }

  .progress-bar {
    transform: translateY(-25%);
  }

  .movie-details {
    padding: 16px;
    width: 100%;
    height: 157px;
    position: absolute;
    left: 0;
    bottom: 0;

    display: flex;
    flex-direction: column;
    justify-content: end;
    gap: 8px;

    background: linear-gradient(to bottom, #00000000, #00000080, #000000);

    h4 {
      font-size: 16px;
      font-weight: 600;
      text-transform: uppercase;
    }

    p {
      font-size: 12.8px;
      font-weight: 400;
      color: #b4b4b4;
    }
  }
}

@media only screen and (max-width: 768px) {
  .movie-card {
    width: 183px;
    height: 281px;

    .movie-details h4 {
      font-size: 14px;
      font-weight: 700;
    }
  }
}

@media only screen and (width < 414px) {
  .movie-card {
    width: 235px;
    height: 355px;
  }
}
</style>
