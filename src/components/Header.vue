<template>
  <header>
    <div class="header-content">
      <div class="title" @click="goToHomePage">
        <LogoCubos class="logo" />
        <h1>Movies</h1>
      </div>
      <ButtonSecondary
        :icon="useDark ? Sun : Moon"
        @click.prevent="toggleTheme"
      />
    </div>
  </header>
</template>

<script setup lang="ts">
import LogoCubos from "../assets/LogoCubos.vue";
import Sun from "../assets/icons/Sun.vue";
import Moon from "../assets/icons/Moon.vue";
import ButtonSecondary from "./ButtonSecondary.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useQueryClient } from "@tanstack/vue-query";

const router = useRouter();
const queryClient = useQueryClient();
const storedTheme = localStorage.getItem("useDarkMode");
const useDark = ref(storedTheme && JSON.parse(storedTheme));

if (storedTheme) {
  if (useDark.value) {
    document.documentElement.classList.value = "dark";
  } else {
    document.documentElement.classList.remove("dark");
  }
} else {
  document.documentElement.classList.value = "dark";
  useDark.value = true;
}

const toggleTheme = () => {
  useDark.value = !useDark.value;
  localStorage.setItem("useDarkMode", `${useDark.value}`);

  if (useDark.value) {
    document.documentElement.classList.value = "dark";
  } else {
    document.documentElement.classList.remove("dark");
  }
};

const goToHomePage = () => {
  router.push({ path: "/", query: { q: "", p: 1 } });
  queryClient.invalidateQueries({ queryKey: ["movies"] });
  window.scrollTo(0, 0);
};
</script>

<style scoped lang="scss">
header {
  position: fixed;
  width: 100%;
  top: 0;
  background-color: var(--mauve-1);
  border-bottom: 1px solid var(--mauve-a6);
  z-index: 999;
}
.header-content {
  margin: 0 auto;
  padding: 16px;
  max-width: 1366px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .title {
    display: flex;
    align-items: center;
    gap: 16px;

    cursor: pointer;

    .logo {
      max-width: 160px;
      max-height: 36px;
    }

    h1 {
      font-family: "Inter", sans-serif;
      font-size: 20px;
      font-weight: 700;
    }
  }
}

@media only screen and (width < 414px) {
  .header-content .title {
    .logo {
      max-width: 128px;
      max-height: 28.8px;
    }
    h1 {
      font-size: 16px;
    }
  }
}
</style>
