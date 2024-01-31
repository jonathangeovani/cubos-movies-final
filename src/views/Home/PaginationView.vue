<template>
  <div class="pagination">
    <ButtonPrimary
      :icon="ChevronLeft"
      :disabled="currentPage <= 1"
      style="padding-block: 10px"
      @click="updatePage(currentPage - 1)"
    />
    <ButtonPrimary
      v-if="totalPages <= maxPages"
      v-for="(page, index) in getPages(totalPages, 1)"
      :text="page"
      :key="index"
      :disabled="currentPage == page"
      @click="updatePage(page)"
    />
    <ButtonPrimary
      v-else-if="totalPages > maxPages"
      v-for="(page, _index) in getPages(limit, initial)"
      :text="page == limit && page < totalPages ? '...' : page"
      :key="_index"
      :disabled="currentPage == page"
      @click="updatePage(page)"
    />
    <ButtonPrimary
      :icon="ChevronRight"
      :disabled="currentPage == totalPages"
      style="padding-block: 10px"
      @click="updatePage(currentPage + 1)"
    />
  </div>
</template>

<script setup lang="ts">
import ButtonPrimary from "@/components/ButtonPrimary.vue";
import ChevronLeft from "@/assets/icons/ChevronLeft.vue";
import ChevronRight from "@/assets/icons/ChevronRight.vue";
import { getPages } from "@/utils/pagination";
import { useRoute, useRouter } from "vue-router";
import { useQueryClient } from "@tanstack/vue-query";
import { computed, onMounted, ref } from "vue";

const props = defineProps<{
  currentPage: number;
  totalPages: number;
}>();

const router = useRouter();
const route = useRoute();
const queryClient = useQueryClient();
const screenWidth = ref(window.innerWidth);

const maxPages = computed(() => {
  if (screenWidth.value > 768) return 5;
  else if (screenWidth.value >= 414) return 4;
  else return 3;
});

const limit = computed(() => {
  if (props.totalPages >= maxPages.value) {
    if (props.currentPage <= 2) return maxPages.value;
    else if (
      props.currentPage + Math.floor(maxPages.value / 2) >
      props.totalPages
    )
      return props.totalPages;
    else return props.currentPage + Math.floor(maxPages.value / 2);
  } else return props.totalPages;
});

const initial = computed(() => {
  if (props.currentPage <= Math.floor(maxPages.value / 2)) return 1;
  else return limit.value - (maxPages.value - 1);
});

function updatePage(page: number) {
  router.push({
    query: { q: route.query.q, p: page, filters: route.query.filters },
  });
  queryClient.invalidateQueries({ queryKey: ["movies"] });
  window.scrollTo(0, 0);
}

onMounted(() =>
  window.addEventListener(
    "resize",
    () => (screenWidth.value = window.innerWidth)
  )
);
</script>

<style scoped lang="scss">
.pagination {
  padding: 24px;
  display: flex;
  justify-content: center;
  gap: 12px;

  background-color: var(--mauve-1);

  button:disabled {
    background-color: var(--mauve-a3);
    color: var(--mauve-a9);
    cursor: default;
  }
}

@media only screen and (max-width: 768px) {
  .pagination {
    padding: 16px;
  }
}
</style>
