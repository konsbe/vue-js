<script lang="ts" src="./index" />
<template>
  <div id="products">
    <h1 class="subheading grey--text router-header-name">Repos</h1>
    <v-container class="router-container"> 
      <v-expansion-panels>
      <v-expansion-panel
        v-for="repo in repositories"
        :key="repo.id"
        :title="repo.name"
        :text="repo.description"
      ></v-expansion-panel>
    </v-expansion-panels>
    </v-container>
  </div>
</template>
