<script setup lang="ts">
import { RouterLink } from "vue-router";
import Default from "@/layouts/default/Default.vue";
</script>
<template>
  <v-container class="mainpage-sub-routing">
    <v-row>
      <v-col><RouterLink to="/home/overview">Sub Home 1</RouterLink></v-col>
      <v-col><RouterLink to="/home/description">Sub Home 2</RouterLink></v-col>
    </v-row>
  </v-container>
  <Default />
</template>
