<template>
  <div class="container-wrapper">
    <!-- <v-container class="home-sub-nav">
        <HomeSubNav />
      </v-container> -->
    <v-container class="main-content">
      <HelloWorld />
    </v-container>
  </div>
</template>

<script lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
<style>
.container-wrapper {
  display: flex;
  justify-content: center;
  flex-direction: row;
}
</style>
