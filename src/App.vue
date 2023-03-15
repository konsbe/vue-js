<template>
  <v-app class="bg-grey-lighten-4">
    <v-main >
      <HorizontalNavBar />
      <v-container class="mx-4 mb-4">
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import HorizontalNavBar from "@/components/NavBar/HorizontalNavigation/index.vue";
</script>
