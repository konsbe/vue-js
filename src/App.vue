<template>
  <v-app>
    <v-main>
      <HorizontalNavBar />
      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import HorizontalNavBar from '@/components/NavBar/HorizontalNavBar.vue';
</script>
