<script lang="ts" src="./index.ts"></script>
<!-- <template>
  <v-container class="mainpage-sub-routing">
    <v-row>
      <v-col><RouterLink to="/">Home</RouterLink></v-col>
      <v-col><RouterLink to="/about">About</RouterLink></v-col>
    </v-row>
  </v-container>
</template> -->
<template>
  <div>
    <v-toolbar dark prominent image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="grey--text"><span class="font-weight-light">kober</span><span>TECK</span></v-toolbar-title>

      <v-btn flat color="grey"><RouterLink to="/">Home</RouterLink></v-btn>
      <v-btn flat color="grey"><RouterLink to="/about">About</RouterLink></v-btn>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon color="white" icon="logout"/>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer app v-model="drawer" color="blue">
      <v-list-item
        v-for="item in verticalNavigationItems"
        :key="item.text"
        router
        :to="item.route"
        class="white--text"
        :title="item.title"
        :subtitle="item.subTitle"
      >
        <template v-slot:prepend>
          <v-icon color="white--text" :icon="item.icon" />
        </template>
      </v-list-item>
    </v-navigation-drawer>
  </div>
</template>
