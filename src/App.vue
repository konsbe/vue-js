<template>
  <v-app>
    <v-main>
      <HorizontalNavBar />
      <v-content class="mx-4 mb-4">
        <RouterView />
      </v-content>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import HorizontalNavBar from "@/components/NavBar/HorizontalNavigation/index.vue";
</script>
