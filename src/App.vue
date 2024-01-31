<template>
  <div>
    <Header />
    <main class="content">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<style scoped lang="scss">
.content {
  margin-top: 80px;
}
</style>
