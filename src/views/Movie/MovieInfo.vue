<template>
  <div class="col-text">
    <div class="title">
      <div class="title-text">
        <h2>{{ movieData.title }}</h2>
        <p class="original">Título original: {{ movieData.original_title }}</p>
        <p class="subtitle">{{ movieData.tagline }}</p>
      </div>

      <div class="title-cards grow-mobile">
        <InfoCard title="Popularidade" content="42.595" class="grow-mobile" />
        <InfoCard title="Votos" content="5704" class="grow-mobile" />
        <CircularProgressBar
          :percentage="(movieData.vote_average * 10).toFixed()"
          is-small
        />
      </div>
    </div>

    <div class="informations">
      <div class="info">
        <div class="sinopse">
          <h3>Sinopse</h3>
          <p>{{ movieData.overview }}</p>
        </div>
        <div class="genres grow-mobile">
          <h3>Generos</h3>
          <div class="tags">
            <TagCard
              v-for="(tag, index) in movieData.genres"
              :key="index"
              :content="tag.name"
            />
          </div>
        </div>
      </div>

      <div class="info">
        <div class="info-row">
          <InfoCard
            title="Lançamento"
            :content="movieData.release_date"
            class="grow"
          />
          <InfoCard
            title="Duração"
            :content="`${Math.floor(movieData.runtime / 60)}h ${
              movieData.runtime % 60
            }m`"
            class="grow"
          />
        </div>
        <div class="info-row">
          <InfoCard title="Situação" :content="movieData.status" class="grow" />

          <InfoCard
            v-if="movieData.spoken_languages.length"
            title="Idioma"
            :content="movieData.spoken_languages[0].name"
            class="grow"
          />
        </div>
        <div class="info-row">
          <InfoCard
            v-if="movieData.budget"
            title="Orçamento"
            :content="parseMoney(movieData.budget)"
            class="grow"
          />
          <InfoCard
            v-if="movieData.revenue"
            title="Receita"
            :content="
              movieData.revenue ? parseMoney(movieData.revenue) : 'Desconhecido'
            "
            class="grow"
          />
          <InfoCard
            v-if="movieData.budget && movieData.revenue"
            title="Lucro"
            :content="parseMoney(movieData.revenue - movieData.budget)"
            class="grow"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import InfoCard from "@/components/InfoCard.vue";
import CircularProgressBar from "@/components/CircularProgressBar.vue";
import TagCard from "@/components/TagCard.vue";
import type { MovieDetailsData } from "@/types";

const { movieData } = defineProps<{
  movieData: MovieDetailsData;
}>();

const parseMoney = (value: number) => {
  let newValue = value / 1000000;
  let quantity: number | string = newValue.toFixed(2);
  quantity = parseFloat(quantity);
  return `$${quantity}M`;
};
</script>

<style scoped lang="scss">
.col-text {
  width: 100%;
  max-width: 851px;
  display: flex;
  flex-direction: column;
  flex: 1;

  .title {
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 16px;

    &-text {
      min-width: 300px;
      flex: 1;

      h2 {
        font-size: 32px;
        font-weight: 600;
      }

      .original {
        color: var(--mauve-11);
        font-weight: 400;
      }

      .subtitle {
        margin-top: 19px;
        font-size: 16px;
        font-style: italic;
      }
    }

    &-cards {
      flex: 1;
      display: flex;
      align-items: center;
      gap: 16px;
    }
  }

  .informations {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex: 1;
    gap: 16px;

    .info {
      // max-width: 417.5px;
      width: 100%;
      height: fit-content;
      display: flex;
      flex-direction: column;
      flex: 1;
      gap: 16px;
    }

    .info-row {
      display: flex;
      flex-direction: row;
      gap: 16px;

      .grow {
        flex: 1;
      }
    }

    .sinopse,
    .genres {
      padding: 16px;
      background-color: var(--mauve-3-a2);
      backdrop-filter: blur(2px);
      border-radius: 4px;

      h3 {
        margin-bottom: 8px;
        color: var(--mauve-11);
        font-weight: 700;
        font-family: "Montserrat", sans-serif;
        text-transform: uppercase;
      }
    }

    .sinopse {
      min-width: 300px;
      width: 100%;

      h3 {
        font-size: 16px;
      }
    }

    .genres {
      width: fit-content;

      h3 {
        font-size: 14px;
      }

      .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  .grow-mobile {
    width: 100% !important;
    flex: 1;
  }
}

@media only screen and (width < 414px) {
  .title-cards,
  .info-row {
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>
