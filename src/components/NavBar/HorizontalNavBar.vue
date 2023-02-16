<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
<template>
  <v-container class="mainpage-sub-routing">
    <v-row>
      <v-col><RouterLink to="/">Home</RouterLink></v-col>
      <v-col><RouterLink to="/about">About</RouterLink></v-col>
    </v-row>
  </v-container>
</template>
